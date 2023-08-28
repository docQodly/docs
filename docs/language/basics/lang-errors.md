---
id: lang-errors
title: Error handling
---

Error handling is the process of anticipating and responding to errors that might occur in your application. Qodly provides a comprehensive support for catching and reporting errors at runtime, as well as for investigating their conditions.

Error handling meets two main needs:

- finding out and fixing potential errors and bugs in your code during the development phase,
- catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error messages with you own interface.


## Error or status

Many QuodlyScript class functions, such as `entity.save()` or `transporter.send()`, return a *status* object. This object is used to store "predictable" errors in the runtime context, e.g. invalid password, locked entity, etc., that do not stop program execution. This category of errors can be handled by regular code.

Other "unpredictable" errors include write error, network failure, or in general any unexpected interruption. This category of errors generates exceptions and needs to be handled through an error-handling method.  


## Installing an error-handling method

In Quodly, all errors can be caught and handled by specific methods, named **error-handling** (or **error-catching**) methods.

Once installed, error handlers are automatically called in case of error in the Qodly application. A different error handler can be called depending on the execution context (see below).  

To *install* an error-handling method, you just need to call the [`onErrCall`](../debug.md#onerrcall) command with the method name and (optionnally) scope as parameters. For example:

```qs
onErrCall("IO_Errors",ek local) //Installs a local error-handling method
```

To stop catching errors for an execution context and give back hand, call `onErrCall` with an empty string:

```qs
onErrCall("",ek local) //gives back control for the local process
```

The  [`methodCalledOnError`](../debug.md#methodcalledonerror) command allows you to know the name of the method installed by `onErrCall` for the current process. It is particularly useful in the context of generic code because it enables you to temporarily change and then restore the error-catching method:

```qs
 var methCurrent : string
 methCurrent=methodCalledOnError(ek local)
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

- the [`lastErrors`](../debug.md#lasterrors) command that returns a collection of the current stack of errors that occurred in the Qodly application.
- the [`callChain`](../debug.md#callchain) command that returns a collection of objects describing each step of the method call chain within the current process.


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
errNum=lastErrors[0].errCode
if(errNum != 1006) //this is not a user interruption
   message="Error "+string(errNum)+" occurred ("+lastErrors[0].message+").")
end
```

### Using an empty error-handling method

If you mainly want the standard error messages to be hidden, you can install an empty error-handling method. The [`lastErrors`](../debug.md#lasterrors) command can be called in any method, i.e. outside of the error-handling method:

```qs
onErrCall("emptyMethod") //emptyMethod exists but is empty
var errNum : integer
var errText : string
if (errNum==-43)
	errText="File not found."
end
onErrCall("")
```
