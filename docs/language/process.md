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
|[<!-- INCLUDE #_command_.semaphore.Syntax -->](#semaphore)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.semaphore.Summary -->|
|[<!-- INCLUDE #_command_.testSemaphore.Syntax -->](#testsemaphore)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.testSemaphore.Summary -->|
|[<!-- INCLUDE #_command_.lowercase.Syntax -->](#lowercase)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.lowercase.Summary -->|
|[<!-- INCLUDE #_command_.matchRegex.Syntax -->](#matchRegex)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.matchRegex.Summary -->|
|[<!-- INCLUDE #_command_.num.Syntax -->](#num)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.num.Summary -->|

|[<!-- INCLUDE #_command_.position.Syntax -->](#position)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.position.Summary -->|
|[<!-- INCLUDE #_command_.replaceString.Syntax -->](#replaceString)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.replaceString.Summary -->|
|[<!-- INCLUDE #_command_.splitString.Syntax -->](#splitstring)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.splitString.Summary -->|
|[<!-- INCLUDE #_command_.string.Syntax -->](#string)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.string.Summary -->|
|[<!-- INCLUDE #_command_.substring.Syntax -->](#substring)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.substring.Summary -->|
|[<!-- INCLUDE #_command_.uppercase.Syntax -->](#uppercase)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.uppercase.Summary -->|



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


<!-- REF #_command_.changeString.Params -->
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

`currentProcessName` <!-- REF #_command_.currentProcess.Summary -->returns the name of the process within which this command is called<!-- END REF -->. 


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
















## lowercase

<!-- REF #_command_.lowercase.Syntax -->**lowercase** ( *aString* : string {, \*} ) : string<!-- END REF -->


<!-- REF #_command_.lowercase.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|->|String to convert to lowercase|
|*||->|If passed: keep accents|
|Result|string|<-|String in lowercase|<!-- END REF -->

#### Description

`lowercase` <!-- REF #_command_.lowercase.Summary -->takes *aString* and returns the string with all alphabetic characters in lowercase<!-- END REF -->. 

The optional `*` parameter, if passed, indicates that any accented characters present in *aString* must be returned as accented lowercase characters. By default, when this parameter is omitted, accented characters “lose” their accents after the conversion is carried out.

#### Example 1

The following project method capitalizes the string or text received as parameter. For instance, Caps ("john") would return "John".

```qs
 declare (myText : string) -> myCapText : string
 myCapText=lowercase(myText)
 if(length(myCapText)>0)
    myCapText[[1]]==uppercase(myCapText[[1]])
 end

```

#### Example 2

This example compares the results obtained according to whether or not the `*` parameter has been passed:

```qs
 var thestring : string 
 thestring=lowercase("DÉJÀ VU") // thestring is "deja vu"
 thestring=lowercase("DÉJÀ VU",*) // thestring is "déjà vu"

```

#### See also

[`uppercase`](#uppercase)

## matchRegex

<!-- REF #_command_.matchRegex.Syntax -->**matchRegex** ( *pattern* : string , *aString* : string ) : boolean <br/>**matchRegex** ( *pattern* : string , *aString* : string , *start* : integer {, \*} ) : boolean <br/>**matchRegex** ( *pattern* : string , *aString* : string , *start* : integer , *pos_found* : integer , *length_found* : integer {, \*} ) : boolean<!-- END REF -->

<!-- REF #_command_.matchRegex.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|pattern|string|->|Regular expression (complete equality when using two parameters only)|
|aString|string|->|String in which search will be done|
|start|integer|->|Position in aString where search will start|
|pos_found|integer |<-|Position of occurrence|
|length_found|integer |<-|Length of occurrence|
|*||->|If passed: only searches at position indicated|
|Result|boolean|<-|True = search has found an occurrence; Otherwise, False|<!-- END REF -->

#### Description

The `matchRegex` command <!-- REF #_command_.matchRegex.Summary -->searches for the regular expression *pattern* in *aString*<!-- END REF -->. It checks the conformity of a character string with respect to a set of synthesized rules by means of a meta-language called "regular expression" or "rational expression". The *regex* abbreviation is commonly used to indicate these types of notations. 

Pass the regular expression to search for in *pattern*. This consists of a set of characters used for describing a character string, using special characters.

Pass the string where you want to search for the regular expression in *aString*.

In *start*, pass the position at which to start the search in *aString*.

In *pos_found* and *length_found* variables, the command returns the position and length of the first occurrence found.

The optional `*` parameter indicates, when it is passed, that the search must be carried out at the position specified by *start* without searching any further in the case of failure.

The command returns **true** if the search has found an occurrence.

For more information about regex, refer to the dedicated [Wikipedia page](http://en.wikipedia.org/wiki/Regular_expression). 

For more information about the syntax of the regular expression passed in the *pattern* parameter, refer to [this page](https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions).

#### Example 1

Search in text by position. You want to fidn all tags in a text:

```qs
 declare (myText : string) -> result : collection
 var start : integer
 var vfound : boolean
 start=1
 result=newCollection
 repeat
    vfound=matchRegex("<.*>",myText,start,pos_found,length_found)
    if(vfound)
       result.push(substring(myText,pos_found,length_found))
       start=pos_found+length_found
    end
 until(not(vfound))

```


#### Example 2

Search limiting the comparison of the pattern to the position indicated:
Add a star to the end of one of the two previous syntaxes.

```qs
 var pos_found, length_found : integer
 var vfound : string

 vfound=matchRegex("a.b","---a-b---",1,pos_found,length_found)
  // returns true
 vfound=matchRegex("a.b","---a-b---",1,pos_found,length_found,*)
  // returns false
 vfound=matchRegex("a.b","---a-b---",4,pos_found,length_found,*)
  // returns true

```

:::note

The positions and lengths returned are only meaningful in Unicode mode or if the text being worked with is of the 7-bit ASCII type.

:::

#### Error management

In the event of an error, the command generates an error that you can intercept via a method installed by the `onErrCall` command.


## num

<!-- REF #_command_.num.Syntax -->**num** ( *expression* : string {, *separator* : string } ) : number <br/>**num** ( *expression* : number ) : number <br/>**num** ( *expression* : boolean ) : number <!-- END REF -->


<!-- REF #_command_.num.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|mixed|->|Character for which you want to get the code|
|separator|string|->|Decimal separator|
|Result|number|<-|Numeric form of the expression parameter|<!-- END REF -->

#### Description

The `num` command <!-- REF #_command_.num.Summary -->returns the numeric form of the string, boolean or numeric expression you pass in *expression*<!-- END REF -->. The optional *separator* parameter designates a decimal separator for evaluating string type expressions.

**String Expressions**

If *expression* consists only of one or more alphabetic characters, `num` returns a zero. If *expression* includes alphabetic and numeric characters, the command ignores the alphabetic characters. Thus, it transforms the string "a1b2c3" into the number 123.

There are three reserved characters that `num` treats specially: the decimal separator as defined in the system (if the *separator* parameter is not passed), the hyphen “-”, and “e” or “E”. These characters are interpreted as numeric format characters.

* The decimal separator is interpreted as a decimal place and must appear embedded in a numeric string. By default, the command uses the decimal separator set by the operating system. You can modify this character using the *separator* parameter (see below).
* The hyphen causes the number or exponent to be negative. The hyphen must appear before any negative numeric characters or after the “e” for an exponent. Except for the “e” character, if a hyphen is embedded in a numeric string, the portion of the string after the hyphen is ignored. For example, `num`("123-456") returns 123, but `num`("-9") returns -9.
* The e or E causes any numeric characters to its right to be interpreted as the power of an exponent. The “e” must be embedded in a numeric string. Thus, `num`("123e–2") returns 1.23.
Note that when the string includes more than one "e", conversion might give different results under Mac OS and under Windows.

The *separator* parameter designates a custom decimal separator for evaluating the *expression*. When the string to be evaluated is expressed with a decimal separator different from the system operator, the command returns an incorrect result. The *separator* parameter can be used in this case to obtain a correct evaluation. When this parameter is passed, the command does not take the system decimal separator into account. You can pass one or more characters.

**Boolean Expressions**

If you pass a boolean expression, `num` returns 1 if the expression is true; otherwise, it returns 0 (zero).

**Numeric Expressions**

If you pass a numeric expression in the *expression* parameter, `num` returns the value passed in the *expression* parameter as is. This can be useful more particularly in the case of generic programming.

**Undefined Expressions**

If *expression* evaluates to undefined, the command returns 0 (zero). This is useful when you expect the result of an expression (e.g. an object attribute) to be a number, even if it can be undefined.


#### Example 1

The following example illustrates how `num` works when passed a string argument. 

```qs
 var vResult : number
 vResult=num("ABCD") // vResult gets 0
 vResult=num("A1B2C3") // vResult gets 123
 vResult=num("123") // vResult gets 123
 vResult=num("123.4") // vResult gets 123.4
 vResult=num("–123") // vResult gets –123
 vResult=num("–123e2") // vResult gets –12300

```

#### Example 2

This example compares the results obtained depending on the separator:

```qs
 var thestring : string
 var thenum : number
 thestring="33 333,33"
 thenum=num(thestring) // 3333333
 thenum=num(thestring,",") // 33333.33

```

#### See also

[`bool`](#bool)<br/>
[`string`](#string)

## position

<!-- REF #_command_.position.Syntax -->**position** ( *find* : string , *aString* : string , *start* : integer {, \*} ) : integer <br/>**position** ( *find* : string , *aString* : string , *start* : integer , *lengthFound * : integer {, \*} ) : integer <br/>**position** ( *find* : string , *aString* : string , *start* : integer , *lengthFound* : integer , *options* : integer ) : integer<!-- END REF -->

<!-- REF #_command_.position.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|find|string|->|String to find|
|aString|string|->|String in which to search|
|start|integer|->|Position in string where search will start|
|lengthFound|integer|<-|Length of string found|
|*||->|If passed: evaluation based on character codes|
|options|integer|->|Search condition(s)|
|Result|integer|<-|Position of first occurrence|<!-- END REF -->

#### Description

The `position` <!-- REF #_command_.position.Summary -->returns the position of the first occurrence of *find* in *aString*<!-- END REF -->. 

If *aString* does not contain *find*, it returns a zero (0).   

If `position` locates an occurrence of *find*, it returns the position of the first character of the occurrence in *aString*.

If you ask for the position of an empty string within an empty string, `position` returns zero (0). 

By default, the search begins at the first character of *aString*. The *start* parameter can be used to specify the character where the search will begin in *aString*. 

The *lengthFound* parameter, returns the length of the string actually found by the search. This parameter is necessary to be able to correctly manage letters that can be written using one or more characters (e.g.: æ and ae, ß and ss, etc.).
If the * parameter is passed (see below), these letters are not considered as equivalent (æ # ae); in this mode, *lengthFound* is always equal to the length of *find* (if an occurrence is found). 

By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example æ = ae) into account. On the other hand, it is not diacritical (a=A, a=à and so on) and does not take "ignorable" characters into account (Unicode specification). Ignorable characters include all characters in unicode C0 Control subset (U+0000 to U+001F, ascii character control set) except printable ones (U+0009 TAB, U+0010 LF, U+0011 VT, U+0012 FF and U+0013 CR). 

To modify this functioning, you can pass: 

* first syntax (`*` parameter): In this case, comparisons will be based on character codes. You must pass the `*` parameter:
	* If you want to take special characters into account, used for example as delimiters (`Char(1)`, etc.)
	* If the evaluation of characters must be case sensitive and take accented characters into account (`a#A`, `a#à` and so on). Note that in this mode, the evaluation does not handle variations in the way words are written.

		:::note

		In certain cases, using the `*` parameter can significantly accelerate the execution of the command. 

		:::

* second syntax (`options` parameter): one or a combination of the following constants:

|Constant|Value|Comment|
|:----|:----|:----|
|sk case insensitive|2|<p>Strings are compared according to the current data language with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however&nbsp;"a" is not considered the same as "&agrave;" .&nbsp;By default, Qodly string comparison is case insensitive.&nbsp;</p><p>Can be combined with:&nbsp;</p><ul><li><u>sk char codes</u> OR <u>sk diacritic insensitive</u></li><li><u>sk whole word</u></li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>sk kana insensitive</u></li><li><u>sk width insensitive</u></li><li><u>sk strict</u></li></ul>|
|sk char codes|1|<p>Strings are compared according to character codes. Current data language settings are not taken into account during the comparison.&nbsp;</p><p>Can be combined with: <u>sk case insensitive</u></p><p>Only for "a-z" or "A-Z" ranges. (e.g., Alpha = alpha, but Alpha # &acirc;lph&agrave;)</p>|
|sk diacritic insensitive|4|<p>Strings are compared according to the current data language, however the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "&agrave;".&nbsp;</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk whole word</u></li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>sk kana insensitive</u></li><li><u>sk width insensitive</u></li><li><u>sk strict</u></li></ul>|
|sk kana insensitive|8|<p>For Japanese language. Controls the distinction between Hiragana and Katakana syllables.&nbsp;From a semantic point of view, the difference between Hiragana and Katakana is usually significant, but to capture as many results as possible, the default mode in Qodly is to ignore the difference (kana insensitive). For example, "あ" is considered the same as "ア".&nbsp;The<span>&nbsp;</span><u>sk strict</u><span>&nbsp;</span>option performs a kana sensitive comparison.<span>&nbsp;</span><span>sk kana insensitive</span><span>&nbsp;</span>can be used to partially relax the rule to be kana insensitive.&nbsp;</p><p><strong>Note:</strong><span>&nbsp;</span>The data language must be set to Japanese to use this option. For all other languages, the option is ignored and<span>&nbsp;</span>[`compareStrings`](#comparestrings)<span>&nbsp;</span>will work as if<span>&nbsp;</span><u>sk strict</u>&nbsp;was specified. In other words, setting this option in a non-Japanese context would actually make the comparison kana sensitive (the opposite effect).</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li></ul>|
|sk strict|0|<p>Strings are compared for exact matches according to the current data language.&nbsp;In most cases, capitalization and diacritical marks of letters are taken into account during the comparison.&nbsp;</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li><li><u>sk kana insensitive</u></li></ul><p>This constant implies the use of the following constant (which can also be combined for improved readability):</p><ul><li><u>sk width insensitive</u></li></ul>|
|sk whole word|32|<p>Strings are compared according to the current data language. Only strings that are complete words are considered. Matching strings within other strings are not considered. For example, "where" is not considered when found within "somewhere".</p><p>Can be combined with:&nbsp;</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li></ul>|

:::caution

You cannot use the @ wildcard character with `position`. For example, if you pass "*abc@*" in *find*, the command will actually evaluate the "*abc@*" string and not an "abc" plus any character.

:::

#### Example 1


```qs
 var length, vlResult : integer
 var vtText1, vtText2  : string
 vlResult=position("ll","Willow") // vlResult gets 3
 vlResult=position(vtText1,vtText2) // Returns first occurrence of vtText1 in vtText2
 vlResult=position("day","Today is the first day",1) // vlResult gets 3
 vlResult=position("day","Today is the first day",4) // vlResult gets 20
 vlResult=position("DAY","Today is the first day",1,*) // vlResult gets 0
 
 vlResult=position("œ","Bœuf",1,length) // vlResult =2, length = 1

```

#### Example 2

In the following example, the *lengthFound* parameter can be used to search for all the occurrences of "aegis" in a text, regardless of how it is written:

```qs
 var start, lengthfound, vlResult : integer
 var myText : string
 start=1
 repeat
    vlResult=position("aegis",myText,start,lengthfound)
    start=start+lengthfound
 until(vlResult==0)

```

#### Example 3

In the following example, you want to find all instances of a string and replace it:

```qs
 var lengthFound, find, replace, option, p  : integer
 var myText : string
 myText="Hello Joelle et joel!"
 find="joel"
 replace="Joël"
 option=sk case insensitive+sk diacritic insensitive
 
 p=0
 repeat
    p=position(find,myText,p+1,lengthFound,option)
    if(p>0)
       myText=substring(myText,1,p-1)+replace+substring(myText,p+lengthFound)
    end
 until(p<=0) //result: myText -> Hello Joëlle and Joël!

```

#### See also

[`compareStrings`](#comparestrings)<br/>
[`substring`](#substring)

## replaceString

<!-- REF #_command_.replaceString.Syntax -->**replaceString** ( *source* : string , *oldString* : string , *newString* : string , *howMany* : integer {, \*}) : string<!-- END REF -->


<!-- REF #_command_.replaceString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|->|Original string|
|oldString|string|->|Characters to replace|
|newString|string|->|Replacement string (if empty string, occurrences are deleted)|
|howMany|integer|->|How many times to replace If omitted, all occurrences are replaced|
|*||->|If passed: evaluation based on character codes|
|Result|string|<-|Resulting string|<!-- END REF -->

#### Description

`replaceString` <!-- REF #_command_.replaceString.Summary -->replaces *howMany* occurrences of *oldString* in *source* with *newString*<!-- END REF -->. 

If *newString* is an empty string (""), `replaceString` deletes each occurrence of *oldString* in *source*.

If *howMany* is specified, `replaceString` will replace only the number of occurrences of *oldString* specified, starting at the first character of *source*. If *howMany* is not specified, then all occurrences of *oldString* are replaced.

If *oldString* is an empty string, `replaceString` returns the unchanged *source*.

By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example æ = ae) into account. On the other hand, it is not diacritical (a=A, a=à and so on) and does not take "ignorable" characters such as characters whose code < 9 into account (Unicode specification).

To modify this functioning, pass the asterisk * as the last parameter. In this case, comparisons will be based on character codes. You must pass the * parameter:

* If you want to replace special characters, used for example as delimiters (`Char(1)`, etc.),
* If the replacement of characters must be case sensitive and take accented characters into account (a#A, a#à and so on).
Note that in this mode, the evaluation does not handle variations in the way words are written.

#### Example 1

The following example illustrates the use of `replaceString`. The results, described in the comments, are assigned to the variable *vtResult*.

```qs
 var vtResult, vtOtherVar : string
 vtResult=replaceString("Willow"," ll","d") // Result gets "Widow"
 vtResult=replaceString("Shout","o","") // Result gets "Shut"
 vtResult=replaceString(vtOtherVar,Char(Tab),",",*) // Replaces all tabs in vtOtherVar with commas

```

#### Example 2

The following example eliminates CRs and TABs from the text in *vtResult*:

```qs
 var vtResult : string
 vtResult=replaceString(replaceString(vtResult,Char(Carriage return),"",*),Char(Tab),"",*)

```

#### Example 3

The following example illustrates the use of the * parameter in the case of a diacritical evaluation:

```qs
 var vtResult : string
 vtResult=replaceString("Crème brûlée","Brulee","caramel") //Result gets "Crème caramel"
 vtResult=replaceString("Crème brûlée","Brulee","caramel",*) //Result gets "Crème brûlée"

```

#### See also

[`changeString`](#changestring)<br/>
[`deleteString`](#deletestring)<br/>
[`insertString`](#insertstring)

## splitString

<!-- REF #_command_.splitString.Syntax -->**splitString** ( *stringToSplit* : string , *separator* : string {, *options* : integer }) : collection <!-- END REF -->


<!-- REF #_command_.splitString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|stringToSplit|string|->|String value|
|separator|string|->|String at which stringToSplit splits. If empty string (""), each character of stringToSplit is a substring|
|options|integer|->|Option(s) regarding empty strings and spaces|
|Result|collection|<-|Collection of substrings|<!-- END REF -->

#### Description

The `splitString` command <!-- REF #_command_.splitString.Summary -->returns a collection of strings, created by splitting *stringToSplit* into substrings at the boundaries specified by the *separator* parameter<!-- END REF -->. The substrings in the returned collection do not include *separator* itself.

If no *separator* is found in *stringToSplit*, `splitString` returns a collection containing a single element, *stringToSplit*. If you passed an empty string in *separator*, `splitString` returns a collection of each character of *stringToSplit*.

In the *options* parameter, you can pass one or a combination of the following constants:

|Constant|Value|Comment|
|---------|--- |---|------|
|sk ignore empty strings|1|Remove empty strings from the resulting collection (they are ignored)|
|sk trim spaces|2|Trim space characters at the beginning and end of substrings|

#### Example 1

```qs
 var myText : string
 var myCol : collection 
 col=newCollection
 
 myText="John,Doe,120 jefferson st.,Riverside,, NJ, 08075"
 myCol=splitString(myText,",") //["John","Doe","120 jefferson st.","Riverside",""," NJ"," 08075"]
 myCol=splitString(myText,",",sk ignore empty strings) //["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"]
 myCol=splitString(myText,",",sk ignore empty strings+sk trim spaces) //["John","Doe","120 jefferson st.","Riverside","NJ","08075"]
 
```

#### Example 2

The *separator* parameter can be a multiple-character string:

```qs
 var myText : string
 var myCol : collection
 myText="Name<tab>Smith<tab>age<tab>40"
 myCol=splitString(myText,"<tab>")
  //myCol=["Name","Smith","age","40"]
 
```

#### See also

[`collection.join()`](#collection.join)<br/>

## string

<!-- REF #_command_.string.Syntax -->**string** ( *expression* : any { , *format* : integer { , *addTime* : time }} ) : string<!-- END REF -->



<!-- REF #_command_.string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|any|->|Expression for which to return the string form (can be number, integer, date, time, string, boolean, undefined, or null)|
|format|string, integer|->|Display format|
|addTime|time|->|Time to add on if expression is a date|
|Result|string|<-|String form of the expression|<!-- END REF -->

#### Description

The `string` command <!-- REF #_command_.string.Summary --> returns the string form of the numeric, date, time, string or boolean expression you pass in *expression*<!-- END REF -->. 

If you do not pass the optional *format* parameter, the string is returned with the appropriate default format. If you pass *format*, you can force the result string to be of a specific format.

The optional *addTime* parameter adds a time to a date in a combined format. It can only be used when the *expression* parameter is a date (see below).

**Numeric Expressions**

If *expression* is a numeric expression (number or integer), you can pass an optional string *format*. Following are some examples:

|Example|Result|Comments|
|:----|:----|:----|
|string(2^15)|32768|Default format|
|string(2^15;"###,##0 Inhabitants")|32,768 Inhabitants|
|string(1/3;"##0.00000")|0.33333|
|string(1/3)|0.3333333333333|Default format|
|string(Arctan(1)*4)|3.14159265359|Default format|
|string(Arctan(1)*4;"##0.00")|3.14|
|string(-1;"&x")|0xFFFFFFFF|
|string(-1;"&$")|$FFFFFFFF|
|string(0 ?+ 7;"&x")|0x0080|
|string(0 ?+ 7;"&$")|$80|
|string(0 ?+ 14;"&x")|0x4000|
|string(0 ?+ 14;"&$")|$4000|
|string(50.3;"&xml")|50.3|Always "." as decimal separator|
|string(num(1=1);"True;;False")|True|
|string(num(1=2);"True;;False")|False|
|string(log(-1))| |Undefined number|
|string(1/0)|INF|Positive infinite number|
|string(-1/0)|-INF|Negative infinite number|


**Date Expressions**

If *expression* is a date expression, the string is returned using the default format specified in the system.
In the *format* parameter, you can pass one of the constants described below.

In this case, you can also pass a time in the *addTime* parameter. This parameter lets you combine a date with a time so that you can generate time stamps in compliance with current standards (`ISO Date GMT` and `Date RFC 1123` constants). These formats are particularly useful in the context of XML and Web processing. The *addTime* parameter can only be used when the *expression* parameter is a date. 

|Constant|Type|Value|Comment|
|:----|:----|:----|:----|
|Blank if null date|integer|100|- instead of 0|
|Date RFC 1123|integer|10| |
|Internal date abbreviated|integer|6|Feb 18, 2023|
|Internal date long|integer|5|February 18, 2023|
|Internal date short|integer|7|02/18/2023|
|Internal date short special|integer|4|02/18/23 (but 02/18/1896 or 02/18/2096)|
|ISO Date|integer|8|2023-02-18T00:00:00|
|ISO Date GMT|integer|9|2023-02-18T16:11:53Z|
|System date abbreviated|integer|2|Sat, February 18, 2023|
|System date long|integer|3|Saturday, February 18, 2023|
|System date short|integer|1|02/18/2023|

:::note

Formats can vary depending on system settings.

:::

Here are a few examples of simple formats (assuming that the current date is 02/18/2023):

```qs
 var vtResult : string
 vsResult=string(currentDate) //vsResult gets "02/18/23"
 vsResult=string(currentDate,Internal date long) // vsResult gets "February 18, 2023"
 vsResult=string(currentDate,ISO Date GMT) // vsResult gets "2023-02-18T00:00:00" in France

```

**Notes for combined date/time formats:**

* The `ISO Date GMT` format corresponds to the ISO8601 standard, containing a date and a time expressed with respect to the time zone (GMT).

	 ```qs
	 var mydate : string
	 mydate=string(currentDate,ISO Date GMT,currentTime) // returns, for instance, 2023-02-18T16:11:53Z
	
	```

	Note that the "Z" character at the end indicates the GMT format.
If you do not pass the *addTime* parameter, the command returns the date at midnight (local time) expressed in GMT time, which may cause the date to be moved forward or back depending on the local time zone:

	```qs
	 var mydate : string
	 mydate=string(!18/02/2023!,ISO Date GMT) // returns 2023-02-17T22:00:00Z in France
	
	```

* The `ISO Date` format is similar to the `ISO Date GMT`, except that it expresses the date and time without respect to the time zone. Note that since this format does not comply with the ISO8601 standard, its use should be reserved for very specific purposes.

	```qs
	 var mydate : string
	 mydate=string(!18/02/2023!,ISO Date) // returns 2023-02-18T00:00:00 regardless of the time zone
     mydate=string(currentDate,ISO Date,currentTime) // returns 2023-02-18T18:11:53
	
	```
 
* The `Date RFC 1123` format formats a date/time combination according to the standard defined by RFC 822 and 1123. You need this format for example to set the expiration date for cookies in an HTTP header.

	```qs
	 var mydate : string
	 mydate=string(currentDate,Date RFC 1123,currentTime) // returns, for example Sat, 18 Feb 2023 13:07:20 GMT
	
	```

	The time expressed takes the time zone into account (GMT zone). If you only pass a date, the command returns the date at midnight (local time) expressed in GMT time which may cause the date to be moved forward or back depending on the local time zone:
	
	```qs
	 var mydate : string
	 mydate=string(currentDate,Date RFC 1123) // returns Fri, 17 Feb 2023 22:00:00 GMT
	
	```

**Time Expressions**

If *expression* is a time expression, the string is returned using the default **HH:MM:SS** format. In the format parameter, you can pass one of the following constants:

|Constant|Type|Value|Comment|
|:----|:----|:----|:----|
|Blank if null time|integer|100| instead of 0|
|HH MM|integer|2|01:02|
|HH MM AM PM|integer|5|01:02|
|HH MM SS|integer|1|01:02:03|
|Hour min|integer|4|1 hour 2 minutes|
|Hour min sec|integer|3|1 hour 2 minutes 3 seconds|
|ISO time|integer|8|0000-00-00T01:02:03|
|Min sec|integer|7|62 minutes 3 seconds|
|MM SS|integer|6|62:03:00|
|System time long|integer|11|1:02:03 AM HNEC (Mac only)|
|System time long abbreviated|integer|10|1•02•03 AM (Mac only)|
|System time short|integer|9|01:02:03|

Notes:

* The `ISO Time` format corresponds to the ISO8601 standard and contains, in theory, a date and a time. Since this format does not support combined dates/times; the date part is filled with 0s. This format expresses the local time.
* The `Blank if null time` constant must be added to the format; it indicates that in the case of a null value, Qodly must return an empty string instead of zeros.

These examples assume that the current time is 5:30 PM and 45 seconds:

```qs
	 var vsResult : string
	 vsResult=string(currentTime) // $vsResult gets "17:30:45"
 	 vsResult=string(currentTime,Hour Min Sec) // $vsResult gets "17 hours 30 minutes 45 seconds"
	
```

**String Expressions**

If *expression* is of the string type, the command returns the same value as the one passed in the parameter. This can be useful more particularly in generic programming using pointers.
In this case, the *format* parameter, if passed, is ignored.

**Boolean Expressions**

If *expression* is of the boolean type, the command returns the string “True” or “False”.
In this case, the *format* parameter, if passed, is ignored.

**Undefined Expressions** 

If *expression* is evaluated to undefined, the command returns an empty string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be undefined.

**Null Expressions**

If *expression* is evaluated to null, the command returns the "null" string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be null.

#### See also

[`bool`](#bool)<br/>
[`date`](#date)<br/>
[`num`](#num)<br/>
[`timeString`](#timestring)<br/>
[`timeStamp`](#timestamp)

## substring

<!-- REF #_command_.substring.Syntax -->**substring** ( *source* : string , *firstChar* : integer , *numChars* : integer ) : string <!-- END REF -->


<!-- REF #_command_.substring.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|->|String from which to get substring|
|firstChar|integer|->|Position of first character|
|numChars|integer|->|Number of characters to get|
|Result|string|<-|Substring of source|<!-- END REF -->

#### Description

The `substring` command <!-- REF #_command_.substring.Summary -->returns the portion of source defined by *firstChar* and *numChars*<!-- END REF -->. 

The *firstChar* parameter points to the first character in the string to return, and *numChars* specifies how many characters to return.

If *firstChar* plus *numChars* is greater than the number of characters in the string, or if *numChars* is not specified, `substring` returns the last character(s) in the string, starting with the character specified by *firstChar*. If *firstChar* is greater than the number of characters in the string, `substring` returns an empty string ("").

:::caution

When you use this command in a multi-style context, you need to convert any Window end-of-line characters ('\r\n') into single ('\r') characters in order for processing to be valid. This is due to the mechanism which normalizes Qodly line endings to ensure multi-platform compatibility for texts.

:::

#### Example

```qs
 var vsResult : string
 vsResult=substring("08/04/62",4,2) // vsResult gets "04"
 vsResult=substring("Emergency",1,6) // vsResult gets "Emerge"
 vsResult=substring(var,2) // vsResult gets all characters except the first
 
```


#### See also

[`position`](#position)

## uppercase 

<!-- REF #_command_.uppercase.Syntax -->**uppercase** ( *aString* : string {, \*} ) : string<!-- END REF -->


<!-- REF #_command_.uppercase.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|->|String to convert to uppercase|
|*||->|If passed: keep accents|
|Result|string|<-|String in uppercase|<!-- END REF -->

#### Description

`uppercase` <!-- REF #_command_.uppercase.Summary -->takes *aString* and returns the string with all alphabetic characters in uppercase.<!-- END REF -->. 

The optional `*` parameter, if passed, indicates that any accented characters present in *aString* must be returned as accented uppercase characters. By default, when this parameter is omitted, accented characters “lose” their accents after the conversion is carried out.

#### Example 1

This example compares the results obtained according to whether or not the * parameter has been passed:

```qs
 var thestring : string 
 thestring=uppercase("hélène") // thestring is "HELENE"
 thestring=uppercase("hélène",*) // thestring is "HÉLÈNE"

```

#### Example 2

See the example for [`lowercase`](#lowercase).

#### See also

[`lowercase`](#lowercase)