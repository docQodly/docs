---
id: process
title: Process
---

Multi-tasking in QodlyScript is the ability to have distinct operations that are executed simultaneously. These operations are called processes. Multiple processes are like multiple users on the same computer, each working on his or her own task. This essentially means that each method can be executed as a distinct task.



## Process Commands

||
|---|
|[<!-- INCLUDE #_command_.abortProcessByID.Syntax -->](#abortprocessbyid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.abortProcessByID.Summary -->|
|[<!-- INCLUDE #_command_.callWorker.Syntax -->](#callworker)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.callWorker.Summary -->|
|[<!-- INCLUDE #_command_.clearSemaphore.Syntax -->](#clearsemaphore)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.clearSemaphore.Summary -->|
|[<!-- INCLUDE #_command_.currentProcess.Syntax -->](#currentprocess)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.currentProcess.Summary -->|
|[<!-- INCLUDE #_command_.currentProcessName.Syntax -->](#currentprocessname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.currentProcessName.Summary -->|
|[<!-- INCLUDE #_command_.delayProcess.Syntax -->](#delayprocess)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.delayProcess.Summary -->|
|[<!-- INCLUDE #_command_.getProcessActivity.Syntax -->](#getprocessactivity)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.getProcessActivity.Summary -->|
|[<!-- INCLUDE #_command_.highestProcessNumber.Syntax -->](#highestprocessnumber)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.highestProcessNumber.Summary -->|
|[<!-- INCLUDE #_command_.killWorker.Syntax -->](#killworker)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.killWorker.Summary -->|
|[<!-- INCLUDE #_command_.processNumber.Syntax -->](#processnumber)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.processNumber.Summary -->|
|[<!-- INCLUDE #_command_.processProperties.Syntax -->](#processproperties)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.processProperties.Summary -->|
|[<!-- INCLUDE #_command_.processState.Syntax -->](#processstate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.processState.Summary -->|
|[<!-- INCLUDE #_command_.semaphore.Syntax -->](#semaphore)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.semaphore.Summary -->|
|[<!-- INCLUDE #_command_.testSemaphore.Syntax -->](#testsemaphore)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.testSemaphore.Summary -->|



## abortProcessByID

<!-- REF #_command_.abortProcessByID.Syntax -->**abortProcessByID** ( *uniqueID* : integer )<!-- END REF -->


<!-- REF #_command_.abortProcessByID.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|uniqueID|integer|->|Unique process ID|<!-- END REF -->


#### Description

The `abortProcessByID` command <!-- REF #_command_.abortProcessByID.Summary -->stops a specific process on the Qodly Server<!-- END REF -->. 

In the *uniqueID* parameter, pass the unique ID of the process running on the server that you want to stop. You can retrieve the process ID with the [`getProcessActivity`](#getprocessactivity) or the [`processProperties`](#processproperties) command.

:::note

This command should only be used for searching errors or administration purposes, not as a regular procedure.

:::

#### Example

You want to stop the first process of a processes collection:

```qs
  //variable =curItemPosition
 
  // Retrieve the list of process on the server
 activity=getProcessActivity(kProcessesOnly).processes 
 ...
  // The selected process is stopped on the server
 abortProcessByID(activity[0].ID)
```

#### See also

[`getProcessActivity`](#getprocessactivity)




## callWorker

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

- Standard object or collection type parameters are passed by copy, i.e. Qodly will create a copy of the object or the collection in the destination process if the worker is in a process different from the one calling the `callWorker` command. In this context, if you want to pass an object or collection parameter by reference, you must use a [shared object or collection](../basics/lang-shared.md).

:::caution

A worker process remains alive until the application is closed or the `killWorker` command is explicitly called for it. To free up memory, do not forget to call this command once a worker process is no longer needed.

:::


#### Example


In a webform, a button starts a computation: for example, statistics for the selected year. The button creates or calls a worker process that computes the data while the user can continue to work in the form.

The code called from the button:

```qs
var vYear: integer
vYear=2015 // could have been selected by the user in the form
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


## clearSemaphore

<!-- REF #_command_.clearSemaphore.Syntax -->**clearSemaphore**( *semaphore* : string )<!-- END REF -->


<!-- REF #_command_.clearSemaphore.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|semaphore|string|->|Semaphore to clear|<!-- END REF -->

#### Description

The `clearSemaphore` command <!-- REF #_command_.clearSemaphore.Summary -->erases *semaphore* previously set by the `semaphore` command<!-- END REF -->. 

As a rule, all semaphores that have been created should be cleared. If semaphores are not cleared, they remain in memory until the process that creates them ends. A process can only clear semaphores that it has created. If you try to clear a semaphore from within a process that did not create it, nothing happens.


#### See also

[`semaphore`](#semaphore)<br/>
[`Signal` class](SignalClass.md)


## currentProcess

<!-- REF #_command_.currentProcess.Syntax -->**currentProcess** : integer<!-- END REF -->


<!-- REF #_command_.currentProcess.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|integer|<-|Current process number|<!-- END REF -->


#### Description

`currentProcess` <!-- REF #_command_.currentProcess.Summary -->returns the process ID of the process within which this command is called<!-- END REF -->. 


#### See also

[`currentProcessName`](#currentprocessname)<br/>
[`processNumber`](#processnumber)<br/>
[`processState`](#processstate)


## currentProcessName

<!-- REF #_command_.currentProcessName.Syntax -->**currentProcessName** : string<!-- END REF -->


<!-- REF #_command_.currentProcessName.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|string|<-|Current process name|<!-- END REF -->


#### Description


`currentProcessName` <!-- REF #_command_.currentProcessName.Summary -->returns the name of the process within which this command is called<!-- END REF -->. 


#### Example

You want to call a worker and pass the calling process name as parameter:

```qs
callWorker(1,"myMessage",currentProcessName,"Start:"+string(vMax))
```
 
 
#### See also

[`currentProcess`](#currentprocess)<br/>
[`processNumber`](#processnumber)<br/>
[`processState`](#processstate)



## delayProcess

<!-- REF #_command_.delayProcess.Syntax -->**delayProcess** ( *process* : integer , *duration* : number )<!-- END REF -->


<!-- REF #_command_.delayProcess.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|process|integer|->|Process number|
|duration|number|->|Duration expressed in ticks|
<!-- END REF -->


#### Description

The `delayProcess` command <!-- REF #_command_.delayProcess.Summary -->delays the execution of *process* for a *duration* expressed in number of ticks (1 tick = 1/60th of a second)<!-- END REF -->. During this period, *process* does not take any processing time. Even though the execution of a process may be delayed, it is still in memory.

You can delay a process for less than one tick. For example, if you pass 0.5 in *duration*, the process will be delayed for a 1/2 tick, i.e. 1/120th of a second.

If the process is already delayed, this command delays it again. The *duration* parameter is not added to the time remaining, but replaces it. Therefore pass zero (0) for *duration* if you no longer want to delay a process.

If *process* does not exist, the command does nothing.


## getProcessActivity

<!-- REF #_command_.getProcessActivity.Syntax -->**getProcessActivity** ({ *options* : integer }) : object<!-- END REF -->


<!-- REF #_command_.getProcessActivity.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|options|integer|->|Return options|
|Result|object|<-|Snapshot of running processes and/or user sessions|<!-- END REF -->

#### Description

The `getProcessActivity` command <!-- REF #_command_.getProcessActivity.Summary -->returns a snapshot of connected user sessions and/or related running processes at a given time<!-- END REF -->. This command returns all processes, including internal processes that are not reachable by the `processProperties` command.

By default if you omit the *options* parameter, `getProcessActivity` returns both user session and process lists, as shown below:

```json
{
"sessions": [
          {
             "type": "remote",
             "userName": "Designer",
             "machineName": "iMac27caroline",
             "systemUserName": "Caroline Briaud",
             "IPAddress": "192.168.18.18",
             "hostType": "mac",
             "creationDateTime": "2017-09-22T12:46:39Z",
             "state": "postponed",
             "ID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5"
           },...
       ],
"processes": [
          {
             "name": "Application process",
             "sessionID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",
             "number": 4,
             "ID": 4,
             "visible": true,
             "systemID": "123145476132864",
             "type": -18,
             "state": 0,
             "cpuUsage": 0,
             "cpuTime": 0.006769,
             "preemptive": false,
             "session": {  
                      "type": "remote",
                      "userName": "Designer",
                      "machineName": "iMac27caroline",
                      "systemUserName": "Caroline Briaud",
                      "IPAddress": "192.168.18.18",
                      "hostType": "mac",
                      "creationDateTime": "2017-09-22T12:46:39Z",
                      "state": "postponed",
                      "ID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5"
                       }
           },...
    ]
}
```

You can select the list to return by passing one of the following constants (integer) in the *options* parameter:

- `kProcessesOnly` (1): Returns only the process list
- `kSessionsOnly` (2): Returns only the user session list


#### Sessions

The "sessions" property contains a collection of objects describing all running user sessions on the server. Each session object contains the following properties:

|Property name|Type|Description|
|---|---|---|
|type|string |Session type. Possible values: "storedProcedure", "web", "rest"|
|userName|string |User name|
|machineName|string |Name of the machine|
|systemUserName|string |Name of the system session opened on the machine|
|IPAddress|string |	IP address of the machine|
|hostType|string |	Host type. Possible values: "windows", "mac", "browser"|
|creationDateTime|Date ISO 8601	Date and time of connection of the machine|
|state|string |	Session state. Possible values: "active", "postponed", "sleeping"|
|ID|string |Session UUID|
|persistentID|string |Session's persistent ID|


#### Processes

The "processes" property contains a collection of objects describing all running processes on the server. Each process object contains the following properties:

|Property name|Type|Description|
|---|---|---|
|name|string|Process name|
sessionID|string|Session UUID
number|integer|Process number
ID|integer|Process unique ID
visible|boolean|true if visible, false otherwise
systemID|string|ID for the user process, Qodly process or spare process
type|integer|Running process type. <li>kHTTPLogFlusher (-58)</li><li>kMainProcess (-39)</li><li>kClientManagerProcess (-31)</li><li>kCompilerProcess (-29)</li><li>kMonitorProcess (-26)</li><li>kInternalTimerProcess (-25)</li><li>kLogFileProcess (-20)</li><li>kBackup process (-19)</li><li>kInternalProcess (-18)</li><li>kOnExitProcess (-16)</li><li>kWebServerProcess (-13)</li><li>kOtherProcess (-10)</li><li>kEventManager (-8)</li><li>kIndexingProcess (-5)</li><li>kCacheManager (-4)</li><li>kWebProcessWithNoContext (-3)</li><li>kDesignProcess (-2)</li><li>kNone (0)</li><li>kWorkerProcess (5)</li>
|state|integer|Current status (see [`processState`](#processstate) constant list)|
|cpuUsage|number|Percentage of time devoted to this process (between 0 and 1)|
|cpuTime|number|Running time (seconds)|
|preemptive|boolean|always true|
|session|object|The specific session in which the process is running. Undefined if the `kProcessesOnly` parameter is passed.|
|url|string|URL with path and parameters (if any) of the web (-3) processes running on the web server. Not returned for other types of processes.|



#### Example

You want to get the collection of all user sessions:

```qs 
var o : object
var i : integer
 
o=getProcessActivity //Get process & session info
for(i,0,(o.processes.length)-1) //Iterate over the "processes" collection
  processName=o.processes[i].name
  userName=string(o.processes[i].session.userName) // Easy access to userName
  //use string because session object might be undefined
end
 
```


## highestProcessNumber


<!-- REF #_command_.highestProcessNumber.Syntax -->**highestProcessNumber** : integer<!-- END REF -->

<!-- REF #_command_.highestProcessNumber.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|integer|<-|Highest number of open processes (including kernel processes)|<!-- END REF -->

#### Description

The `highestProcessNumber` command <!-- REF #_command_.highestProcessNumber.Summary -->returns the highest alive process number in the Qodly Server<!-- END REF -->. 

Processes are numbered in the order in which they are created. When still no process has been aborted during the session, then this command returns the total number of open processes.

This number takes into account all processes, even those that are automatically managed by Qodly Server, such as the Cache Manager process and Web Server process.




## killWorker

<!-- REF #_command_.killWorker.Syntax -->**killWorker**()<br/>**killWorker**( *process* : string )<br/>**killWorker**( *process* : integer )<!-- END REF -->


<!-- REF #_command_.killWorker.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|process|string &#124; integer |->|Name or number of process to kill (current process if omitted)|<!-- END REF -->

#### Description

The `killWorker` command <!-- REF #_command_.killWorker.Summary -->posts a message to the worker process whose name or number you passed in *process*, asking it to ignore any pending messages and to terminate its execution as soon as the current task ends<!-- END REF -->. 

This command can only be used with worker processes.

In *process*, you pass either the name or number of the worker process whose execution needs to be terminated. If no worker with the specified process name or number exists, `killWorker` does nothing.

If you do not pass any parameter, `killWorker` applies to the currently running worker.

If `killWorker` is applied to a worker that was not created explicitly using the [`callWorker`](#callworker) command, it only asks this worker to empty its message box.

If the [`callWorker`](#callworker) command is called to send a message to a worker that was just killed by `killWorker`, a new process is started. To make sure that there is only one process running at a time for a worker, the new process will start after the previous one is actually terminated. Note however that if [`callWorker`](#callworker) is called from a worker to send itself a message whereas it has just been killed by `killWorker`, the command does nothing.


#### Example

The following code triggers the termination of a worker:


```qs
callWorker(vWorkerName,"theWorker","end")

```


```qs
   //theWorker method
   
declare (param : text)
switch
    :(param=="call") //the worker is called
       ... //do something
    :(param=="end") //the worker is asked to kill itself
      killWorker()
end
```

#### See also

[`callWorker`](#callworker)<br/>
[`Signal` class](SignalClass.md)



## processNumber

<!-- REF #_command_.processNumber.Syntax -->**processNumber** ( *name* : string ) : integer<!-- END REF -->


<!-- REF #_command_.processNumber.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|string|->|Name of process for which to retrieve the process number|
|Result|integer|<-|Process number|<!-- END REF -->

#### Description

The `processNumber` command <!-- REF #_command_.processNumber.Summary -->returns the number of the process whose name you pass in *name*<!-- END REF -->. If no process is found, `processNumber` returns 0.




## processProperties

<!-- REF #_command_.processProperties.Syntax -->**processProperties** ( *process* : integer , *procName* : string , *procState* : integer , *procTime* : integer )<br/>**processProperties** ( *process* : integer , *procName* : string , *procState* : integer , *procTime* : integer , *procMode* : boolean )<br/>**processProperties** ( *process* : integer , *procName* : string , *procState* : integer , *procTime* : integer , *procMode* : boolean , *uniqueID* : integer )<br/>**processProperties** ( *process* : integer , *procName* : string , *procState* : integer , *procTime* : integer , *procMode* : boolean , *uniqueID* : integer , *origin* : integer )<!-- END REF -->


<!-- REF #_command_.processProperties.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|process|integer|->|Process number|
|procName|string|<-|Process name|
|procState|integer|<-|Process state|
|procTime|integer|<-|Cumulative time taken by process in ticks|
|procMode|boolean|<-|Visible (True) or Hidden (False)|
|uniqueID|integer|<-|Unique process ID|
|origin|integer|<-|Origin of the process	|<!-- END REF -->

#### Description

The `processProperties` command <!-- REF #_command_.processProperties.Summary -->returns various information about the process whose process number you pass in *process*<!-- END REF -->. 

If the process does not exist, which means you did not pass in *process* a number in the range 1 to [`highestProcessNumber`](#highestprocessnumber), `processProperties` leaves the variable parameters unchanged.

After the call:

- *procName* returns the name of the process. If the process was started by the Web server, its name is "Web Process#" followed by an UUID. If the process has been aborted (and its “slot” not reused yet), the name of the process is still returned. To detect if a process is aborted, test `procState=-1` (see below).
- *procState* returns the state of the process at the moment of the call. This parameter can return one of the values provided by the following constants:

|Constant|Value|
|---|---|
|kAborted|-1|
|kDelayed|1|
|kDoesNotExist|-100|
|kExecuting|0|
|kPaused|5|
|kWaitingForInputOutput|3|
|kWaitingForInternalFlag|4|
|kWaitingForUserEvent|2|

- *procTime* returns the cumulative time that the process has used since it started, in ticks (1/60th of a second).
- The optional *procMode* parameter returns `true` if the process is visible and `false` if it is hidden.
- *uniqueID*, if specified, returns the unique process number. Actually, each process has attributed a process number to it as well as a unique process number per session. The unique number allows you to differentiate between two processes or two process sessions. It corresponds to the process number having been started during Qodly's session.
- *origin*, if specified, returns a value that describes the origin of the process. This parameter can return one of the values provided by the following constants:

|Constant|Value|
|---|---|
|kBackupProcess|-19|
|kCacheManager|-4|
|kClientManagerProcess|-31|
|kCompilerProcess|-29|
|kDesignProcess|-2|
|kEventManager|-8|
|kHTTPLogFlusher|-58|
|kIndexingProcess|-5|
|kInternalProcess|-18|
|kInternalTimerProcess|-25|
|kLogFileProcess|-20|
|kMainProcess|-39|
|kMonitorProcess|-26|
|kNone|0|
|kOnExitProcess|-16|
|kOtherProcess|-10|
|kOtherUserProcess|4|
|kWebProcessWithNoContext|-3|
|kWebServerProcess|-13|
|kWorkerProcess|5|


#### Example

The following example returns the name, state, and time taken in the variables vName, vState, and vTimeSpent for the current process:


```qs
 var vName : string
 var vState,vTimeSpent : integer
 processProperties(currentProcess,vName,vState,vTimeSpent)

```

#### See also

[`getProcessActivity`](#getprocessactivity)<br/>[`highestProcessNumber`](#highestprocessnumber)


## processState

<!-- REF #_command_.processState.Syntax -->**processState** ( *process* : integer ) : integer<!-- END REF -->


<!-- REF #_command_.processState.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|process|integer|->|Process number|
|Result|integer|<-|State of the process|<!-- END REF -->

#### Description

The `processState` command <!-- REF #_command_.processState.Summary -->returns the state of the process whose number you pass in *process*<!-- END REF -->. 

This command can return one of the values provided by the following constants:

|Constant|Value|
|---|---|
|kAborted|-1|
|kDelayed|1|
|kDoesNotExist|-100|
|kExecuting|0|
|kPaused|5|
|kWaitingForInputOutput|3|
|kWaitingForInternalFlag|4|
|kWaitingForUserEvent|2|


#### See also

[`ProcessProperties`](#processproperties)


## semaphore

<!-- REF #_command_.semaphore.Syntax -->**semaphore** ( *semaphore* : string { , *tickCount* : integer } ) : boolean<!-- END REF -->


<!-- REF #_command_.semaphore.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|semaphore|string|->|Semaphore to test and set|
|tickCount|integer|->|Maximum waiting time|
|Result|boolean|<-|false: semaphore has been successfully set, true: semaphore was already set|<!-- END REF -->

#### Description

The `semaphore` command <!-- REF #_command_.semaphore.Summary -->returns `true` and does nothing if *semaphore* already exists, or creates *semaphore* and returns `false` if it does not exist<!-- END REF -->. 

:::info

A **semaphore** is a flag shared among processes. A semaphore simply exists or does not exist. The methods that each process is running can test for the existence of a semaphore. A semaphore can only be removed by the process that created it. By creating and testing semaphores, methods can communicate between processes. You do not use semaphores to protect data access (this is automatically done by the Qodly Server), you use semaphores to prevent several processes from performing the same operation at the same time.

:::


Only one process at a time can create a semaphore. If `semaphore` returns `false`, it means that the semaphore did not exist, but it also means that the *semaphore* has been set for the process in which the call has been made.

`semaphore` returns `false` if the *semaphore* was not set. It also returns `false` if the semaphore is already set by the same process in which the call has been made.

The *semaphore* name is limited to 255 characters. If you pass a longer string, the semaphore will be tested with the truncated string. Keep in mind that semaphore names are case-sensitive.

The optional parameter *tickCount* allows you to specify a waiting time (in ticks) if *semaphore* is already set. In this case, the function will wait either for the semaphore to be freed or the waiting time to expire before returning `true`.


#### Example 1

Here is typical code for using a semaphore:

```qs
while(semaphore("MySemaphore",300))
    
end
  // place code protected by semaphore here
clearSemaphore("MySemaphore")
```

#### Example 2  

This method allows you to not execute a method when a semaphore is present; the method alerts the calling method with an error code and plain text.

```qs
// calling code
declare -> result : object
result = semaphore_proof
// result.code: error code
// result.message: error text
```

```qs
  // Protective structure using semaphores
 var result : object
 
 
  // Start of method
 var L_MyError : integer
 L_MyError=1
 
 var t_Sema : string
 t_Sema="tictac"
 
 if(semaphore(t_Sema,300))
  // We expected 300 ticks but the semaphore
  // was not released by the one that placed it:
  // we end up here
    L_MyError=-1
 
 else
 
  // This method is only run by one process at a time
  // We placed the semaphore as we entered
  // so we're the only ones that can remove it
 
  // Do something
    ...
  // Then finish by removing the semaphore
    clearSemaphore(t_Sema)
 end
 
 var t_Message : string
 if(L_MyError==-1)
    t_Message="The semaphore "+t_Sema+" has blocked access to the rest of the code"
 else
    t_Message="OK"
 end
 
 result={code : L_MyError, message : t_Message)
  // The calling method receives an error code and an explanation in plain text
```

#### See also

[`clearSemaphore`](#clearsemaphore)<br/>
[`Signal` class](SignalClass.md)


## testSemaphore

<!-- REF #_command_.testSemaphore.Syntax -->**testSemaphore** ( *semaphore* : string ) : boolean<!-- END REF -->


<!-- REF #_command_.testSemaphore.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|semaphore|string|->|Semaphore to test|
|Result|boolean|<-|false: semaphore does not exist, true: semaphore exists|<!-- END REF -->

#### Description

The `testSemaphore` command <!-- REF #_command_.testSemaphore.Summary -->tests for the existence of *semaphore*<!-- END REF -->. 

The difference between the `semaphore` and the `testSemaphore` functions is that `testSemaphore` does not create the semaphore if it does not exist. If the semaphore exists, the command returns `true`. Otherwise, it returns `false`.


#### See also

[`clearSemaphore`](#clearsemaphore)<br/>
[`semaphore`](#semaphore)<br/>
[`Signal` class](SignalClass.md)

