---
id: throw
title: throw
---


<!-- REF #_command_.throw.Syntax -->**throw**( *errorCode* : integer \{, *description* : string \} )<br/>**throw**( *errorObj* : object )<br/>**throw**()<!-- END REF -->


<!-- REF #_command_.throw.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|errorCode|integer|&#8594;|Error code|
|description|string|&#8594;|Description of the error|
|errorObj|object|&#8594;|Object containing properties to build the error|
<!-- END REF -->


#### Description

The `throw` command <!-- REF #_command_.throw.Summary -->creates an error that will be thrown immediately or when the calling code returns to its caller (deferred mode)<!-- END REF -->.

When you encounter a situation in your code where an error condition arises, you can use the `throw` command to explicitly throw an error and provide a specific error message or error number. This can be useful for signaling exceptional conditions or invalid inputs.

Errors thrown using the `throw` command are managed by the Qodly runtime as any normal error: the standard error dialog is displayed unless an interception method has been installed using the [`onErrCall`](onErrCall.md) command.

The command supports three syntaxes:

```qs
throw(errorCode{, description})
```

It specifies the error code and an optional description text, the error is thrown immediately. If no *description* is provided, it is filled with:

- Error code errorCode: (host) in the host application

- Error code errorCode: (C00x) in a component

```qs
throw(errorObj)
```

*errorObj* object allows for more detailed error information and control over error handling. It can contain the following properties, as well as any custom property that you can refer to using placeholders within the "message" property:

|Property|Type|Description|
|---|---|---|
|componentSignature|string|Four latin letters signature to uniquely identify the source of the error. If the *componentSignature* is not provided, the command uses "host" for the host database, and "C001", "C002"... for the components.
|errCode|number|Error code. If the *errCode* is not provided, the command uses -1.|
|message| string|Description of the error. The *message* may contain placeholders that will be replaced by custom properties added to the *errorObj* object. Each placeholder must be specified using braces `{}` enclosing the name of the property to be used. If the *message* is not provided or is an empty string, the command will look for a description in the current application xliff files with a resname built as follows: ERR_{componentSignature}_{errCode}".
|deferred| boolean|True if the error should be deferred when the current method returns. Default value is false.|

When you use this syntax, the *errorObj* object is returned in [`lastErrors`](lastErrors.md).

:::note

It is possible to call the command several times in the same project method to generate several errors. You can use the deferred option to send all errors at once.

:::

```qs
throw()
```

It throws all current errors in **deferred mode**, meaning they will be added to a stack and handled when the calling method returns. This is typically done from within an [`onErrCall`](onErrCall.md) callback. When an error occurs, it is added to the error stack and the [`onErrCall`](onErrCall.md) method is called at the end of the current method. The [`lastErrors`](lastErrors.md) function returns the stack of errors.


#### Examples


```qs
var code : integer
var description : string
code = 50042 //Custom code
description = "This is a custom error"
throw(code,description) //Throws an error with message "This is a custom error" and errCode = 50042
```

Other possibilities:

```qs
throw({errCode: 1, message: "This an error"}) //Throws an error with errCode = 1 and message "This an error"
throw({errCode: 1}) //Throws an error with errCode = 1 and message "Error code: 1 (host)"
throw({message: "This an error"}) //Throws an error with errCode = -1 and message "This is my error"
throw({message: "This is my error", deferred: true}) //Throws an error with message "This is my error" and errCode = -1 in deferred mode
```

#### See also

[`.setError()`](../WebFormClass.md#seterror)
