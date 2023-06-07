---
id: interruptions
title: Interruptions
---

These commands allow you to control the execution of your code. 



### Commands

||
|---|
|[<!-- INCLUDE #_command_.abort.Syntax -->](#abort)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.abort.Summary -->|
|[<!-- INCLUDE #_command_.assert.Syntax -->](#assert)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.assert.Summary -->|
|[<!-- INCLUDE #_command_.asserted.Syntax -->](#asserted)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.asserted.Summary -->|
|[<!-- INCLUDE #_command_.getAssertEnabled.Syntax -->](#getassertenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.getAssertEnabled.Summary -->|
|[<!-- INCLUDE #_command_.lastErrors.Syntax -->](#lasterrors)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.lastErrors.Summary -->|
|[<!-- INCLUDE #_command_.methodCalledOnError.Syntax -->](#methodCalledOnError)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.methodCalledOnError.Summary -->|
|[<!-- INCLUDE #_command_.onErrCall.Syntax -->](#onerrcall)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.onErrCall.Summary -->|
|[<!-- INCLUDE #_command_.setAssertEnabled.Syntax -->](#setassertenabled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.setAssertEnabled.Summary -->|
|[<!-- INCLUDE #_command_.throw.Syntax -->](#throw)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.throw.Summary -->|



## abort


<!-- REF #_command_.abort.Syntax -->**abort**<!-- END REF -->


<!-- REF #_command_.abort.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `abort` command <!-- REF #_command_.abort.Summary -->stops the execution of the error-handling method and returns<!-- END REF -->. This command must be used from within an error-handling project method installed using `onErrCall`.

When you use an error-handling project method to catch errors, Qodly neither displays its standard error dialog box nor interrupts the execution of your code. Instead, Qodly calls your error-handling method (that you can see as an exception handler), and resumes the execution to the next line of code in the method that triggered the error.

There are errors you can treat programmatically; for example, during an import operation, if you catch a database engine duplicated value error, you can “cover” the error and pursue the import. However, there are errors that you cannot process and errors that you should not “cover.” In these cases, you need to stop the execution by calling `abort` from within the error-handling project method.


#### See also

[`onErrCall`](onerrcall)



## assert


<!-- REF #_command_.assert.Syntax -->**assert**( *boolExpression* : boolean )<br/>**assert**( *boolExpression* : boolean, *msg* : string )<!-- END REF -->


<!-- REF #_command_.assert.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|boolExpression|boolean|->|Boolean expression|
|msg|string|->|Text of error message|
<!-- END REF -->


#### Description

The `assert` command <!-- REF #_command_.assert.Summary -->evaluates the *boolExpression* assertion passed in parameter and, if it returns `false`, stops the code execution with an error message<!-- END REF -->.

If *boolExpression* is `true`, nothing happens. If it is `false`, the command triggers the error -10518 and displays by default the text of the assertion preceded by the message "Assert failed:". You can intercept this error via a method installed using the [`onErrCall`](#onerrcall) command, in order, for example, to provide info for a log file.

Optionally, you can pass a *msg* parameter to display a custom error message instead of the text of the assertion. 

It is possible to globally enable or disable all the assertions of the application (for example according to the type of version) via the [`setAssertEnabled`](#setassertenabled) command. 

:::info

An assertion is an instruction inserted in the code that is responsible for detecting any anomalies during its execution. The principle consists in verifying that an expression is true at a given moment and, should the opposite occur, to cause an exception. Assertions are above all used to detect cases that should usually not ever occur. They are mainly used to detect programming bugs. For more information about assertions in programming, please refer to the [article concerning them on Wikipedia](http://en.wikipedia.org/wiki/Assertion_(computing))

:::


#### Example 1

Before carrying out operations on an entity, the developer wants to make sure that it is actually loaded in read/write mode:


```qs
 var employee : cs.EmployeeEntity
 var status : Object
 employee=ds.Employee.get(717)
 status=employee.lock() 
 assert(not(status.success))
  // triggers error -10518 if entity cannot be locked
```

#### Example 2

An assertion can allow parameters passed to a project method to be tested in order to detect aberrant values. In this example, a custom warning message is used.

```qs
  // Method that returns the number of a client according to its name passed in parameter
 declare (vName : string) // Name of client
 assert(vName!="","Search for a blank client name")
  // A blank name in this case is an aberrant value
  // If the assertion is false, the following error is thrown:
  // "Assert failed: Search for a blank client name"
```


#### See also

[`asserted`](#asserted)<br/>[`.onErrCall()`](#onerrcall)<br/>
[`setAssertEnabled`](#setassertenabled)


## asserted


<!-- REF #_command_.asserted.Syntax -->**asserted**( *boolExpression* : boolean ) : boolean<br/>**asserted**( *boolExpression* : boolean, *msg* : string ) : boolean<!-- END REF -->


<!-- REF #_command_.asserted.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|boolExpression|boolean|->|Boolean expression|
|msg|string|->|Text of error message|
|result|boolean|<-|Result of evaluation of boolExpression|
<!-- END REF -->


#### Description

The `asserted` command <!-- REF #_command_.asserted.Summary -->returns the result of the evaluation of the *boolExpression* parameter. If *boolExpression* is `false` and if assertions [are enabled](#setassertenabled), the error -10518 is generated<!-- END REF -->, exactly as for the [`assert`](#assert) command. If the assertions are disabled, `asserted` returns the result of the expression that was passed without triggering an error.

`asserted` has an operation similar to that of the [`assert`](#assert) command, with one difference in that it returns a value which is the result of the evaluation of the *boolExpression* parameter. It therefore allows the use of an assertion during the evaluation of a condition (see the example). For more information about the operation of assertions and the parameters of this command, please refer to the description of the [`assert`](#assert) command.


#### Example

Insertion of an assertion in the evaluation of an expression:

```qs
 var employee : cs.EmployeeEntity
 var status : Object
 employee=ds.Employee.get(717)
 status=employee.lock() 
 if(asserted(not(status.success)))
  // triggers error -10518 if entity cannot be locked
 end
```


#### See also

[`assert`](#assert)<br/>[`.onErrCall()`](#onerrcall)<br/>
[`setAssertEnabled`](#setassertenabled)


## getAssertEnabled


<!-- REF #_command_.getAssertEnabled.Syntax -->**getAssertEnabled** : boolean<!-- END REF -->


<!-- REF #_command_.getAssertEnabled.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|result|boolean|<-|true = assertions are enabled, false = assertions are disabled|
<!-- END REF -->


#### Description

The `getAssertEnabled` command <!-- REF #_command_.getAssertEnabled.Summary -->returns `true` or `false` according to whether or not assertions are enabled in the current process<!-- END REF -->.

For more information about assertions, please refer to the description of the [`assert`](#assert) command. 

By default, assertions are enabled but they may have been disabled using the [`setAssertEnabled`](#setassertenabled) command.


#### See also

[`.assert`](#assert)<br/>
[`setAssertEnabled`](#setassertenabled)



## lastErrors


<!-- REF #_command_.lastErrors.Syntax -->**lastErrors** : collection<!-- END REF -->


<!-- REF #_command_.lastErrors.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|result|collection|->|Collection of error objects|
<!-- END REF -->


#### Description

The `lastErrors` command <!-- REF #_command_.lastErrors.Summary -->returns the current stack of errors of the Qodly application as a collection of error objects, or `null` if no error occurred<!-- END REF -->.

Each error object contains the following properties:

|Property|Type|Description|
|---|---|---|
|errCode|number|Error code|
|message|string|Description of the error|
|componentSignature|string|Signature of the internal component which returned the error|

This command must be called from an error-handling method installed by the [`onErrCall`](#onerrcall) command.


#### See also

[`onErrCall`](#onerrcall)



## methodCalledOnError


<!-- REF #_command_.methodCalledOnError.Syntax -->**methodCalledOnError**( { *scope* : integer } ) : string<!-- END REF -->


<!-- REF #_command_.methodCalledOnError.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|scope|integer|->|Scope of the error method|
|result|string|<-|Name of method called on error|
<!-- END REF -->


#### Description

The `methodCalledOnError` command <!-- REF #_command_.methodCalledOnError.Summary -->returns the name of the method installed by [`onErrCall`](#onerrcall) for the current process or the defined *scope*<!-- END REF -->.

In the *scope* parameter, pass the execution context for which you want to get the name of the error handler method. You can use one of the following constants:

|Constant|Value|Description|
|---|----|---|
|ek errors from components|2|Errors that occurred in components|
|ek global|1 |Errors that occurred in the global execution context of the project |
|ek local|0|Errors that occurred in the local execution context (default if *scope* parameter is omitted)|

If no method has been installed for the *scope*, an empty string ("") is returned.


#### Example


```qs
 var methCurrent, refs : string
 methCurrent=methodCalledOnError
 onErrCall("NewMethod")
  //If the file cannot be opened, an error is generated
 refs=jsonParse(file("/PACKAGE/Project/Sources/Shared/assets/files/i18n.json").getText())
  //Reinstallation of previous method
 onErrCall(methCurrent)
```

#### See also

[`.onErrCall()`](#onerrcall)





## onErrCall


<!-- REF #_command_.onErrCall.Syntax -->**onErrCall**( *errorMethod* : string )<br/>**onErrCall**( *errorMethod* : string , *scope* : integer )<!-- END REF -->


<!-- REF #_command_.onErrCall.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|errorMethod|string|->|Parameters used to build the error|
|scope |integer|->|Scope for the error method|
<!-- END REF -->


#### Description

The `onErrCall` command <!-- REF #_command_.onErrCall.Summary -->installs the project method, whose name you pass in *errorMethod*, as the method for catching (trapping) errors for the defined execution context in the current project<!-- END REF -->. This method is called the [**error-handling method**](../basics/lang-errors.md#installing-an-error-handling-method). 

The *scope* of the command designates the execution context from where an error will trigger the call of the *errorMethod*. By default, if the *scope* parameter is omitted, the scope of the command is the local execution context, i.e. the current process. You can pass one of the following constants in the *scope* parameter:

|Constant|Value|Description|
|---|----|---|
|ek errors from components|2|Only errors generated from the components installed in the application will call *errorMethod*. Note that, if an error-handling method is defined in a component, it is called in case of error in the component, and the `ek errors from components` error handler set in the host application is not called.|
|ek global|1 |All errors that occurred in the application, whatever the process (except components), will call *errorMethod*. Note that, if a `ek local error handler` is also defined for a process, the `ek global error handler` is not called. This principle allows you to define a generic error-handling method that will catch all errors, while local error-handling methods can be set for some specific processes. |
|ek local|0|(default if *scope* parameter is omitted) Only errors that occurred in the current process will call *errorMethod*. You can have one error-handling method per process at a time, but you can have different error-handling methods for several processes.|

To stop the trapping of errors, call `onErrCall` again with the desired *scope* parameter (if any) and pass an empty string in *errorMethod*. 

You can use the [`lastErrors`](#lasterrors) and [`callChain`](#callchain) commands to obtain the error sequence (i.e., the error "stack") at the origin of the interruption (see also [Handling errors within the method](../basics/lang-errors.md#handling-errors-within-the-method)).

The error-handling method should manage the error in an appropriate way or present an error message to the user. Errors can be generated by the Qodly database engine (e.g. saving an entity causes the violation of a rule), the Qodly environment (e.g. have enough memory for loading a blob)...

The [`abort`](#abort) command can be used to terminate processing. If you don't call `abort` in the error-handling method, Qodly returns to the interrupted method and continues to execute the method. Use the `abort` command when an error cannot be recovered.

If an error occurs in the error-handling method itself, Qodly takes over error handling. Therefore, you should make sure that the error-handling method cannot generate an error. Also, you cannot use `onErrCall` inside the error-handling method.

#### Example 1

You want to install a global error handler:

```qs

onErrCall("myGlobalErrorHandler",ek global)

```

#### Example 2

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



#### See also

[`.setError()`](WebForm.md#seterror)



## setAssertEnabled


<!-- REF #_command_.setAssertEnabled.Syntax -->**setAssertEnabled**(assertions : boolean { , /* } )<!-- END REF -->


<!-- REF #_command_.setAssertEnabled.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|assertions|boolean|->|true = enable assertions, false = disable assertions|
|*||->|If omitted = command applies to all the processes (existing or created subsequently), if passed = command applies to current process only|
<!-- END REF -->


#### Description

The `setAssertEnabled` command <!-- REF #_command_.setAssertEnabled.Summary -->can be used to disable or re-enable any assertions inserted into the Qodly code of the application<!-- END REF -->.

For more information about assertions, please refer to the description of the [`assert`](#assert) command. 

By default, assertions added in the program are enabled. This command is useful when you want to disable them since their evaluation can sometimes be costly in terms of execution time and you may also want them to be hidden from the final user of the application. Typically, the `setAssertEnabled` command could be used in the in order to enable or disable assertions according to whether the application is in "Test" mode or in "Production" mode. 

By default, the `setAssertEnabled` command affects all the processes of the application. To restrict the effect of the command to the current process only, you can pass the `*` parameter.

Please note that when assertions are disabled, expressions passed to `assert` commands are no longer evaluated. The lines of code that call this command no longer have any effect on the operation of the application, neither in terms of behavior, nor in terms of performance.

#### Example

Disabling assertions:

```qs
 setAssertEnabled(false)
 assert(TestMethod) // TestMethod will not be called since assertions are disabled
```

#### See also

[`.assert`](#assert)<br/>
[`getAssertEnabled`](#getassertenabled)





## throw


<!-- REF #_command_.throw.Syntax -->**throw**()<br/>**throw**( *params* : object )<br/>**throw**( *errorCode* : integer , *message* : string )<!-- END REF -->


<!-- REF #_command_.throw.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|params|object|->|Parameters used to build the error|
|errorCode|integer|->|Error code|
|message|string|->|Description of the error|
<!-- END REF -->


#### Description

The `throw` command <!-- REF #_command_.throw.Summary -->creates an error that will be thrown immediately or when the calling method returns to its caller (deferred mode)<!-- END REF -->.

***to be continued***

#### See also

[`.setError()`](WebForm.md#seterror)
