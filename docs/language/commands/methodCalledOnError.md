---
id: methodCalledOnError
title: methodCalledOnError
---


<!-- REF #_command_.methodCalledOnError.Syntax -->**methodCalledOnError**( \{ *scope* : integer \} ) : string<!-- END REF -->


<!-- REF #_command_.methodCalledOnError.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|scope|integer|&#8594;|Scope of the error method|
|result|string|&#8592;|Name of method called on error|
<!-- END REF -->


#### Description

The `methodCalledOnError` command <!-- REF #_command_.methodCalledOnError.Summary -->returns the name of the method installed by [`onErrCall`](onErrCall.md) for the current process or the defined *scope*<!-- END REF -->.

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
 methCurrent = methodCalledOnError
 onErrCall("NewMethod")
  //If the file cannot be opened, an error is generated
 refs = jsonParse(file("/PACKAGE/Project/Sources/Shared/assets/files/i18n.json").getText())
  //Reinstallation of previous method
 onErrCall(methCurrent)
```

#### See also

[`.onErrCall()`](onErrCall.md)
