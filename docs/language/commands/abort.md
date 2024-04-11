---
id: abort
title: abort
---


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

[`onErrCall`](#onerrcall)
