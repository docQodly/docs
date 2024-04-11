---
id: callWorker
title: callWorker
---


<!-- REF #_command_.callWorker.Syntax -->**callWorker**( *process* : string , *formula* : 4D.Function {, *param {, ...paramN }* : integer } )<br/>**callWorker** ( *process* : string , *formula* : string {, *param {, ...paramN }* : integer } )<br/>**callWorker** ( *process* : integer , *formula* : 4D.Function {, *param {, ...paramN }* : integer } )<br/>**callWorker** ( *process* : integer , *formula* : string {, *param {, ...paramN }* : integer } )<!-- END REF -->


<!-- REF #_command_.callWorker.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|process|string &#124; integer |->|Name or number of worker process|
|formula|4D.Function &#124; string |->|Formula object or Name of project method|
|param|any|->|Parameter(s) passed to *formula*/*methodName*|<!-- END REF -->

#### Description

The `callWorker` command <!-- REF #_command_.callWorker.Summary -->creates or calls the worker process whose name or ID you passed in *process* and requests the execution of the code designated by *formula* in its context with the optional *param* parameter(s)<!-- END REF -->.

The `callWorker` command encapsulates the *param* parameters into a message and posts it in the worker's message box.

In the *process* parameter, you can specify the worker using its process name or its process number:

- If you pass the number of a process that does not exist, or if the process specified was not created by `callWorker`, `callWorker` does nothing.
- If you pass the name of a process that does not exist, a new worker process is created.

The worker process is returned by the [`processProperties`](#processproperties) command when applied to this process.

In *formula*, you designate the code to execute in the context of the worker process. You can pass either:

- a [formula object](FunctionClass.md). Formula objects can encapsulate any executable expressions, including functions and project methods;
- a string containing the name of a project method. You can pass an empty string; in this case, the worker executes the method that was originally used to start its process, if any (i.e., the startup method of the worker).

You can also pass parameters to *formula* using one or more optional *param* parameters. If the *formula* is a string formula, you must use sequential parameters ($1, $2...). Upon starting execution in the context of the process, the process *formula* receives the parameter values either in the parameters, or in $1, $2, and so on. In the context of the `callWorker` command, the following considerations need to be taken into account:

- Standard object or collection type parameters are passed by copy, i.e. Qodly will create a copy of the object or the collection in the destination process if the worker is in a process different from the one calling the `callWorker` command. In this context, if you want to pass an object or collection parameter by reference, you must use a [shared object or collection](basics/lang-shared.md).

:::caution

A worker process remains alive until the application is closed or the `killWorker` command is explicitly called for it. To free up memory, do not forget to call this command once a worker process is no longer needed.

:::


#### Example


In a webform, a button starts a computation: for example, statistics for the selected year. The button creates or calls a worker process that computes the data while the user can continue to work in the form.

The code called from the button:

```qs
var vYear: integer
vYear = 2015 // could have been selected by the user in the form
callWorker("myWorker",formula(workerMethod),vYear)

```

The code of `workerMethod` is:

```qs
 declare(vYearInteger) //year reference
 var vStatResults : object //to store statistical results
 ... //compute statistics
```

#### See also

[`killWorker`](#killworker)<br/>
[`Signal` class](SignalClass.md)
