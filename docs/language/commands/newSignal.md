---
id: newSignal
title: newSignal
---


<!-- REF #_command_.newSignal.Syntax -->**newSignal** { ( *description* : string ) } : 4D.Signal<!-- END REF -->


<!-- REF #_command_.newSignal.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|description|string|&#8594;|Description for the signal|
|Result|4D.Signal|&#8592;|Native object encapsulating the signal|
<!-- END REF -->


#### Description

The `newSignal` command <!-- REF #_command_.newSignal.Summary -->creates a `4D.Signal` object<!-- END REF -->.

A signal is a shared object which can be passed as parameter from a worker process to another worker process, so that:

*	the called worker can update the signal object after specific processing has completed
*	the calling worker can stop its execution and wait until the signal is updated, without consuming any CPU resources.

Optionally, in the *description* parameter you can pass a custom text describing the signal. This text can also be defined after signal creation.

Since the signal object is a shared object, it can also be used to maintain user properties, including the [`.description`](../SignalClass/#description-1) property, by calling the `use...end` structure.


**Returned value**

A new [`4D.Signal` object](../SignalClass/#signal-object).

#### Example

Here is a typical example of a worker that sets a signal:

```4d
 var signal : 4D.Signal
 var info : string
 signal = newSignal("This is my first signal")

 callWorker("myworker","doSomething",signal)
 signaled = signal.wait(1) //wait for 1 second max

 if(signaled)
    info = "myworker finished the work. Result: "+signal.myresult
 else
    info = "myworker has not finished in less than 1s"
 end
```


The ***doSomething*** method could be like:

```4d
 declare (signal : 4D.Signal)
  //any processing
  //...
 use(signal)
    signal.myresult = processingResult  //return the result
 end
 signal.trigger() // The work is finished
```
