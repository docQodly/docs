---
id: testSemaphore
title: testSemaphore
---

<!-- REF #_command_.testSemaphore.Syntax -->**testSemaphore** ( *semaphore* : string ) : boolean<!-- END REF -->


<!-- REF #_command_.testSemaphore.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|semaphore|string|->|Semaphore to test|
|Result|boolean|<-|false: semaphore does not exist, true: semaphore exists|
<!-- END REF -->

#### Description

The `testSemaphore` command <!-- REF #_command_.testSemaphore.Summary -->tests for the existence of *semaphore*<!-- END REF -->.

The difference between the `semaphore` and the `testSemaphore` functions is that `testSemaphore` does not create the semaphore if it does not exist. If the semaphore exists, the command returns `true`. Otherwise, it returns `false`.


#### See also

[`clearSemaphore`](clearSemaphore.md)<br/>
[`semaphore`](semaphore.md)<br/>
[`Signal` class](../SignalClass.md)
