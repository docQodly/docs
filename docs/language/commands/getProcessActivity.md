---
id: getProcessActivity
title: getProcessActivity
---


<!-- REF #_command_.getProcessActivity.Syntax -->**getProcessActivity**: object<!-- END REF -->


<!-- REF #_command_.getProcessActivity.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Snapshot of running processes|<!-- END REF -->

#### Description

The `getProcessActivity` command <!-- REF #_command_.getProcessActivity.Summary -->returns a snapshot of running processes at a given time<!-- END REF -->. This command returns all processes, including internal processes that are not reachable by the `processProperties` command.

Example of returned object:

```json
{
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
             "preemptive": false
           },...
    ]
}
```


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
|url|string|URL with path and parameters (if any) of the web (-3) processes running on the web server. Not returned for other types of processes.|
