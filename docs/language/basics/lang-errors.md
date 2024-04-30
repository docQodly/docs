---
id: lang-errors
title: Error handling
---

Error handling is the process of anticipating and responding to errors that might occur in your application. Qodly provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions.

Error handling meets two main needs:

- finding out and fixing potential errors and bugs in your code during the development phase,
- catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error messages with you own interface.

Basically, there are two ways to handle errors in QodlyScript. You can:

- [install an error-handling method](#installing-an-error-handling-method), or
- use a [`try()` keyword](#tryexpression) or a [`try/catch` structure](#trycatchend) before pieces of code that call a function, method, or expression that can throw an error.


## Error or status

Many QuodlyScript class functions, such as `entity.save()` or `transporter.send()`, return a *status* object. This object is used to store "predictable" errors in the runtime context, e.g. invalid password, locked entity, etc., that do not stop program execution. This category of errors can be handled by regular code.

Other "unpredictable" errors include write error, network failure, or in general any unexpected interruption. This category of errors generates exceptions and needs to be handled through an error-handling method or a `try()` keyword.  


## Installing an error-handling method

In Quodly, all errors can be caught and handled by specific methods, named **error-handling** (or **error-catching**) methods.

Once installed, error handlers are automatically called in case of error in the Qodly application. A different error handler can be called depending on the execution context (see below).  

To *install* an error-handling method, you just need to call the [`onErrCall`](../commands/onErrCall.md) command with the method name and (optionnally) scope as parameters. For example:

```qs
onErrCall("IO_Errors",ek local) //Installs a local error-handling method
```

To stop catching errors for an execution context and give back hand, call `onErrCall` with an empty string:

```qs
onErrCall("",ek local) //gives back control for the local process
```

The  [`methodCalledOnError`](../commands/methodCalledOnError.md) command allows you to know the name of the method installed by `onErrCall` for the current process. It is particularly useful in the context of generic code because it enables you to temporarily change and then restore the error-catching method:

```qs
 var methCurrent : string
 methCurrent = methodCalledOnError(ek local)
 onErrCall("NewMethod",ek local)
  ...//Processing with specific error handling
  //Reinstallation of previous method
 onErrCall(methCurrent,ek local)

```

### Scope and components

An error-handling method can be set for different execution contexts:

- for the **current process**- a local error handler will be only called for errors that occurred in the current process of the current project,
- for the **whole application**- a global error handler will be called for all errors that occurred in the application execution context of the current project.

Examples:

```qs
onErrCall("IO_Errors",ek local) //Installs a local error-handling method
onErrCall("globalHandler",ek global) //Installs a global error-handling method
```

You can install a global error handler that will serve as "fallback" and specific local error handlers for certain processes.

You can define a single error-catching method for the whole application or different methods per application module. However, only one method can be installed per execution context and per project. When an error occurs, only one method is called.


### Handling errors within the method

Within a custom error method, you can use several commands that will help you identifying the error:

- the [`lastErrors`](../commands/lastErrors.md) command that returns a collection of the current stack of errors that occurred in the Qodly application.
- the [`callChain`](../commands/callChain.md) command that returns a collection of objects describing each step of the method call chain within the current process.


#### Example

Here is a simple error-handling system:

```qs
// installing the error handling method
 onErrCall("errorMethod")
 //... executing code
 onErrCall("") //giving control back to Qodly
```

```qs
// errorMethod project method  
var errNum : integer
var message : string
errNum = lastErrors[0].errCode
if(errNum  !=  1006) //this is not a user interruption
   message = "Error "+string(errNum)+" occurred ("+lastErrors[0].message+").")
end
```

### Using an empty error-handling method

If you mainly want the standard error messages to be hidden, you can install an empty error-handling method. The [`lastErrors`](../commands/lastErrors.md) command can be called in any method, i.e. outside of the error-handling method:

```qs
onErrCall("emptyMethod") //emptyMethod exists but is empty
var errNum : integer
var errText : string
if (errNum == -43)
	errText = "File not found."
end
onErrCall("")
```

## try(expression)

The `try(expression)` statement allows you to test a single-line expression in its actual execution context (including, in particular, variable values) and to intercept errors it throws so that the Qodly error dialog box is not displayed. Using `try(expression)` provides an easy way to handle simple error cases with a very low number of code lines, and without requiring an error-handling method. 


The formal syntax of the `try(expression)` statement is:

```qs

try (expression) : any | undefined

```

*expression* can be any valid expression. 

If an error occurred during its execution, it is intercepted and no error dialog is displayed, whether an [error-handling method](#installing-an-error-handling-method) was installed or not before the call to `try()`. If *expression* returns a value, `try()` returns the last evaluated value, otherwise it returns `undefined`. 


You can handle the error(s) using the [`lastErrors`](../commands/lastErrors.md) command. If *expression* throws an error within a stack of `try()` calls, the execution flow stops and returns to the latest executed `try()` (the first found back in the call stack). 
 
:::note

If an [error-handling method](#installing-an-error-handling-method) is installed by *expression*, it is called in case of error. 

:::


### Examples

1. You want to display the contents of a file if the file can be open without error, and if its contents can be read. You can write:

```qs
var text : string
var file : 4D.File = file("/RESOURCES/myFile.txt")
var fileHandle : 4D.FileHandle = try(file.open())
if (fileHandle != null)
  text = try(fileHandle.readText()) || "Error reading the file"
end
```


2. You want to handle the divide by zero error. In this case, you want to return 0 and log an error:

```qs
function divide( p1 : real , p2 : real) -> result : real
  if (p2 == 0)
     result = 0 //only for clarity (0 is the default for reals)
     throw(-12345 , "Division by zero")
  else
    result = p1/p2
  end

function test() -> result : real
  var info = string
  result = try(divide(p1 , p2))
  if (lastErrors != null)
    info = "Error"
  end

```

3. You want to handle both [predictable and non-predictable](#error-or-status) errors:

```qs
var e = ds.Employee.new()
var status = object
var info = string
e.name = "Smith"
status = try(e.save()) //catch predictable and non-predictable errors
if (status.success)
   info = "Success"
else
   info = "Error: "+jsonStringify(status.errors)
end

``` 

## try...catch...end

The `try...catch...end` structure allows you to test a block code in its actual execution context (including, in particular, variable values) and to intercept errors it throws so that the no Qodly error is displayed.

Unlike the `try(expression)` keyword that evaluates a single-line expression, the `try...catch...end` structure allows you to evaluate any code block, from the most simple to the most complex, without requiring an error-handling method. In addition, the `catch` block can be used to handle the error in any custom way. 


The formal syntax of the `try...catch...end` structure is:

```qs

try 
	statement(s) // Code to evaluate
catch
	statement(s) // Code to execute in case of error
end

```

The code placed between the `try` and the `catch` keywords is first executed, then the flow depends on the error(s) encountered during this execution. 

- If no error is thrown, the code execution continues after the corresponding `end` keyword. The code placed between the `catch` and the `end` keywords is not executed.
- If the code block execution throws a *non-deferred error*, the execution flow stops and executes the corresponding `catch` code block. 
- If the code block execution throws a *deferred error*, the execution flow continues until the end of the `try` block and then executes the corresponding `catch` code block. 

:::note

If a *deferred* error is thrown outside of the `try` block, the code execution continues until the end of the method or function. 

:::

:::info

For more information on *deferred* and *non-deferred* errors, please refer to the [`throw`](../commands/throw.md) command description.

:::


In the `catch` code block, you can handle the error(s) using standard error handling commands. The [`lastErrors`](../commands/lastErrors.md) command contains the last errors collection. You can [declare an error-handling method](#installing-an-error-handling-method) in this code block, in which case it is called in case of error.

:::note

If an [error-handling method](#installing-an-error-handling-method) is installed in the code placed between the `try` and the `catch` keywords, it is called in case of error. 

:::

### Example

Combining transactions and `try...catch...end` structures allows writing secured code for critical features. 

```qs
function createInvoice(customer : cs.customerEntity, items : collection, invoiceRef : string) : cs.invoiceEntity
	var newInvoice : cs.invoiceEntity
	var newInvoiceLine : cs.invoiceLineEntity
	var item : object
	ds.startTransaction()
	try
		newInvoice=this.new()
		newInvoice.customer=customer
		newInvoice.invoiceRef=invoiceRef
		forEach (item, items)
			newInvoiceLine=ds.invoiceLine.new()
			newInvoiceLine.item=item.item
			newInvoiceLine.amountitem.amount
			newInvoiceLine.invoice=newInvoice
			//call other specific functions to validate invoiceline
			newInvoiceLine.save()
		end 
		newInvoice.save()
		ds.validateTransaction()
	catch
		ds.cancelTransaction()
		ds.logErrors(lastErrors)
		newInvoice=null
	end
	return newInvoice

```
