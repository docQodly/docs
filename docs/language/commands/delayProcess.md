---
id: delayProcess
title: delayProcess
---


<!-- REF #_command_.delayProcess.Syntax -->**delayProcess** ( *process* : integer , *duration* : number )<!-- END REF -->


<!-- REF #_command_.delayProcess.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|process|integer|&#8594;|Process number|
|duration|number|&#8594;|Duration expressed in ticks|
<!-- END REF -->


#### Description

The `delayProcess` command <!-- REF #_command_.delayProcess.Summary -->delays the execution of *process* for a *duration* expressed in number of ticks (1 tick = 1/60th of a second)<!-- END REF -->. During this period, *process* does not take any processing time. Even though the execution of a process may be delayed, it is still in memory.

You can delay a process for less than one tick. For example, if you pass 0.5 in *duration*, the process will be delayed for a 1/2 tick, i.e. 1/120th of a second.

If the process is already delayed, this command delays it again. The *duration* parameter is not added to the time remaining, but replaces it. Therefore pass zero (0) for *duration* if you no longer want to delay a process.

If *process* does not exist, the command does nothing.
