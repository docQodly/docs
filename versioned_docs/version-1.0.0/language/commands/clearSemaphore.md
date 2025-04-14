---
id: clearSemaphore
title: clearSemaphore
---


<!-- REF #_command_.clearSemaphore.Syntax -->**clearSemaphore**( *semaphore* : string )<!-- END REF -->


<!-- REF #_command_.clearSemaphore.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|semaphore|string|&#8594;|Semaphore to clear|
<!-- END REF -->

#### Description

The `clearSemaphore` command <!-- REF #_command_.clearSemaphore.Summary -->erases *semaphore* previously set by the [`semaphore`](semaphore.md) command<!-- END REF -->.

As a rule, all semaphores that have been created should be cleared. If semaphores are not cleared, they remain in memory until the process that creates them ends. A process can only clear semaphores that it has created. If you try to clear a semaphore from within a process that did not create it, nothing happens.


#### See also

[`semaphore`](semaphore.md)&nbsp; 
[`Signal` class](../SignalClass.md)
