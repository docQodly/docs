---
id: processProperties
title: processProperties
---

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
|origin|integer|<-|Origin of the process	|
<!-- END REF -->

#### Description

The `processProperties` command <!-- REF #_command_.processProperties.Summary -->returns various information about the process whose process number you pass in *process*<!-- END REF -->.

If the process does not exist, which means you did not pass in *process* a number in the range 1 to [`highestProcessNumber`](#highestprocessnumber), `processProperties` leaves the variable parameters unchanged.

After the call:

- *procName* returns the name of the process. If the process was started by the Web server, its name is "Web Process#" followed by an UUID. If the process has been aborted (and its “slot” not reused yet), the name of the process is still returned. To detect if a process is aborted, test `procState = -1` (see below).
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
