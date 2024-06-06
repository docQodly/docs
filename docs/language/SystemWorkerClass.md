---
id: SystemWorkerClass
title: SystemWorker
---

System workers allow the QodlyScript code to call any external process on the server machine. System workers are called asynchronously. By using callbacks, Qodly makes it possible to communicate both ways.

The `SystemWorker` class is available from the `4D` class store.


### Summary

||
|---|
|[<!-- INCLUDE #4D.SystemWorker.new().Syntax -->](#4d-systemworker-new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.SystemWorker.new().Summary -->|
|[<!-- INCLUDE #SystemWorkerClass.closeInput().Syntax -->](#closeinput)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.closeInput().Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.commandLine.Syntax -->](#commandline)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.commandLine.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.currentDirectory.Syntax -->](#currentdirectory)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.currentDirectory.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.dataType.Syntax -->](#dataype)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.dataType.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.encoding.Syntax -->](#encoding)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.encoding.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.errors.Syntax -->](#errors)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.errors.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.exitCode.Syntax -->](#exitcode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.exitCode.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.pid.Syntax -->](#pid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.pid.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.postMessage().Syntax -->](#postmessage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.postMessage().Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.response.Syntax -->](#response)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.response.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.responseError.Syntax -->](#responseerror)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.responseError.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.terminate().Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.terminated.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.timeout.Syntax -->](#timeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.timeout.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.wait().Syntax -->](#wait)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.wait().Summary --> |


<!-- REF 4D.SystemWorker.new().Desc -->
## 4D.SystemWorker.new()


<!-- REF #4D.SystemWorker.new().Syntax -->
**4D.SystemWorker.new** ( *commandLine* : Text { ; *options* : Object } ) : 4D.SystemWorker<!-- END REF -->


<!-- REF #4D.SystemWorker.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|commandLine|Text|->|Command line to execute|
|options|Object|->|Worker parameters|
|result|4D.SystemWorker|<-|New asynchronous System worker or null if process not started|  
<!-- END REF -->

#### Description

The `4D.SystemWorker.new()` function <!-- REF #4D.SystemWorker.new().Summary -->creates and returns a `4D.SystemWorker` object that will execute the *commandLine* you passed as parameter to launch an external process<!-- END REF -->.

The returned system worker object can be used to post messages to the worker and get the worker output.

If an error occurs during the creation of the proxy object, the function returns a `null` object and an error is thrown.

In the *commandLine* parameter, pass the full path of the application's file to be executed (posix syntax), as well as any required arguments, if necessary. If you pass only the application name, 4D will use the `PATH` environment variable to locate the executable.

**Warning:** This function can only launch executable applications; it cannot execute instructions that are part of the shell (command interpreter). 

#### *options* Object

In the *options* parameter, pass an object that can contain the following properties:

|Property|Type|Default|Description|
|---|---|---|---|
|onResponse|[`formula`](FunctionClass.md)|undefined|Callback for system worker messages. This callback is called once the complete response is received. It receives two objects as parameters (see below)|
|onData|[`formula`](FunctionClass.md)|undefined|Callback for system worker data. This callback is called each time the system worker receives data. It receives two objects as parameters (see below) |
|onDataError|[`formula`](FunctionClass.md)|undefined|Callback for the external process errors (*stderr* of the external process). It receives two objects as parameters (see below)|
|onError|[`formula`](FunctionClass.md)|undefined|Callback for execution errors, returned by the system worker in case of unusual runtime conditions (system errors). It receives two objects as parameters (see below)|
|onTerminate|[`formula`](FunctionClass.md)|undefined|Callback when the external process is terminated. It receives two objects as parameters (see below)|
|timeout|number|undefined|Time in seconds before the process is killed if it is still alive|
|dataType|string|"text"|Type of the response body content. Possible values: "text" (default), "blob".|
|encoding|string|"UTF-8"|Only if `dataType = "text"`. Encoding of the response body content. For the list of available values, see the [`convertFromString`](commands/convertFromString.md) command|
|variables|object||Sets custom environment variables for the system worker. Syntax: `variables.key = value`, where `key` is the variable name and `value` its value. Values are converted into strings when possible. The value cannot contain a ' = '. If not defined, the system worker inherits from the Qodly environment.|
|currentDirectory|folder||Working directory in which the process is executed|

All callback functions receive two object parameters. Their contents depend on the callback:

|Parameter|Type|*onResponse*|*onData*|*onDataError*|*onError*|*onTerminate*|
|---|---|---|---|---|---|---|
|$param1|Object|SystemWorker|SystemWorker|SystemWorker|SystemWorker|SystemWorker|
|$param2.type|string|"response"|"data"|"error"|"error"|"termination"|
|$param2.data|string or blob||received data|error data|||

Here is the sequence of callback calls:

1. `onData` and `onDataError` are executed one or several times
2. if called, `onError` is executed once (stops the system worker processing)
3. if no error occured, `onResponse` is executed once
4. `onTerminate` is always executed

#### Returned value

The function returns a system worker object on which you can call functions and properties of the SystemWorker class.


<!-- END REF -->

<!-- REF SystemWorkerClass.closeInput().Desc -->
## .closeInput()


<!-- REF #SystemWorkerClass.closeInput().Syntax -->
**.closeInput**()<!-- END REF -->


<!-- REF #SystemWorkerClass.closeInput().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|<!-- END REF -->

#### Description

The `.closeInput()` function <!-- REF #SystemWorkerClass.closeInput().Summary -->closes the input stream (*stdin*) of the external process<!-- END REF -->.

When the executable waits for all data to be received through `postMessage()`, `.closeInput()` is useful to indicate to the executable that data sending is finished and that it can proceed.


<!-- END REF -->


<!-- REF SystemWorkerClass.commandLine.Desc -->
## .commandLine

<!-- REF #SystemWorkerClass.commandLine.Syntax -->
**.commandLine** : string<!-- END REF -->

#### Description

The `.commandLine` property <!-- REF #SystemWorkerClass.commandLine.Summary -->contains the command line passed as parameter to the [`new()`](#4d-systemworker-new) function<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.currentDirectory.Desc -->
## .currentDirectory

<!-- REF #SystemWorkerClass.currentDirectory.Syntax -->
**.currentDirectory** : 4D.Folder<!-- END REF -->

#### Description

The `.currentDirectory` property <!-- REF #SystemWorkerClass.currentDirectory.Summary -->contains the working directory in which the external process is executed<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.dataType.Desc -->
## .dataType

<!-- REF #SystemWorkerClass.dataType.Syntax -->
**.dataType** : string<!-- END REF -->

#### Description

The `.dataType` property <!-- REF #SystemWorkerClass.dataType.Summary -->contains the type of the response body content<!-- END REF -->. Possible values : "text" or "blob".

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.encoding.Desc -->
## .encoding

<!-- REF #SystemWorkerClass.encoding.Syntax -->
**.encoding** : string<!-- END REF -->

#### Description

The `.encoding` property <!-- REF #SystemWorkerClass.encoding.Summary -->contains the encoding of the response body content<!-- END REF -->. This property is only available if the [`dataType`](#datatype) is "text".

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.errors.Desc -->
## .errors

<!-- REF #SystemWorkerClass.errors.Syntax -->
**.errors** : collection<!-- END REF -->

#### Description

The `.errors` property <!-- REF #SystemWorkerClass.errors.Summary -->contains a collection of errors in case of execution error(s) if any<!-- END REF -->.

Each element of the collection is an object with the following properties:

|Property|Type|Description|
|---|---|---|
|[].errorCode|number|Qodly error code|
|[].message|text|Description of the Qodly error|
|[ ].componentSignature|text|Signature of the internal component which returned the error|

If no error occured, `.errors` is *undefined*.

<!-- END REF -->

<!-- REF SystemWorkerClass.exitCode.Desc -->
## .exitCode

<!-- REF #SystemWorkerClass.exitCode.Syntax -->
**.exitCode** : integer<!-- END REF -->

#### Description

The `.exitCode` property <!-- REF #SystemWorkerClass.exitCode.Summary -->contains the exit code returned by the external process<!-- END REF -->. If the process did not terminate normaly, `exitCode` is *undefined*.

This property is **read-only**.

<!-- END REF -->


<!-- REF SystemWorkerClass.pid.Desc -->
## .pid

<!-- REF #SystemWorkerClass.pid.Syntax -->
**.pid** : integer<!-- END REF -->

#### Description

The `.pid` property <!-- REF #SystemWorkerClass.pid.Summary -->contains the process unique identifier of the external process at the system level<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.postMessage().Desc -->
## .postMessage()

<!-- REF #SystemWorkerClass.postMessage().Syntax -->
**.postMessage**( *message* : string )<br/>**.postMessage**( *messageBLOB* : blob )<!-- END REF -->


<!-- REF #SystemWorkerClass.postMessage().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|message|Text|->|Text to write on the input stream (stdin) of the external process|
|messageBLOB|Blob|->|Bytes write on the input stream|<!-- END REF -->

#### Description

The `.postMessage()` function <!-- REF #SystemWorkerClass.postMessage().Summary -->allows you to write on the input stream (stdin) of the external process<!-- END REF -->. In the *message* parameter, pass the text to write in *stdin*.

The `.postMessage()` function also accepts a Blob type value in *messageBLOB* to pass in *stdin*, so that you can post binary data.

You can use the `.dataType` property of the [options object](#options-object) to make response body return Blob values.

<!-- END REF -->

<!-- REF SystemWorkerClass.response.Desc -->
## .response

<!-- REF #SystemWorkerClass.response.Syntax -->
**.response** : string<br/>**.response** : blob<!-- END REF -->

#### Description

The `.response` property <!-- REF #SystemWorkerClass.response.Summary -->contains the concatenation of all data returned once the request is terminated<!-- END REF -->, i.e. the full message received from the process output.

The type of the message is defined according to the [`dataType`](#datatype) attribute.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.responseError.Desc -->
## .responseError

<!-- REF #SystemWorkerClass.responseError.Syntax -->
**.responseError** : string<!-- END REF -->

#### Description

The `.responseError` property <!-- REF #SystemWorkerClass.responseError.Summary -->contains the concatenation of all the errors returned, once the request is terminated<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminate().Desc -->
## .terminate()

<!-- REF #SystemWorkerClass.terminate().Syntax -->
**.terminate**()<!-- END REF -->


<!-- REF #SystemWorkerClass.terminate().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|<!-- END REF -->

#### Description

The `.terminate()` function <!-- REF #SystemWorkerClass.terminate().Summary -->forces the `SystemWorker` to terminate its execution<!-- END REF -->.

This function sends the instruction to terminate and give control back to the executing script.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminated.Desc -->
## .terminated

<!-- REF #SystemWorkerClass.terminated.Syntax -->
**.terminated** : boolean<!-- END REF -->

#### Description

The `.terminated` property <!-- REF #SystemWorkerClass.terminated.Summary -->contains **true** if the external process is terminated<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.timeout.Desc -->
## .timeout

<!-- REF #SystemWorkerClass.timeout.Syntax -->
**.timeout** : integer<!-- END REF -->

#### Description

The `.timeout` property <!-- REF #SystemWorkerClass.timeout.Summary -->contains the duration in seconds before the external process will be killed if it is still alive<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.wait().Desc -->
## .wait()


<!-- REF #SystemWorkerClass.wait().Syntax -->
**.wait**( {*timeout* : number} ) : 4D.SystemWorker<!-- END REF -->


<!-- REF #SystemWorkerClass.wait().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|timeout|number|->|Waiting time (in seconds)|
|Result|4D.SystemWorker|<-|SystemWorker object|<!-- END REF -->

#### Description

The `.wait()` function <!-- REF #SystemWorkerClass.wait().Summary -->waits until the end of the `SystemWorker` execution or the specified *timeout*<!-- END REF -->.

In *timeout*, pass a value in seconds. The `SystemWorker` script will wait for the external process for the amount of time defined in the *timeout* parameter. If you omit the *timeout* parameter, the script execution will wait indefinitely.

Actually, `.wait()` waits until the end of processing of the `onTerminate` formula, except if the *timeout* is reached. If *timeout* is reached, the `SystemWorker` is not killed.

During a `.wait()` execution, callback functions are executed, especially callbacks from other events or from other `SystemWorker` instances. You can exit from a `.wait()` by calling [`terminate()`](#terminate) from a callback.

This function returns the SystemWorker object.

> This function is not necessary if you created the `SystemWorker` from a Qodly worker process.

<!-- END REF -->
