---
id: SignalClass
title: Signal
---

Signals are tools provided by the QodlyScript language to manage interactions and avoid conflicts between worker processes in a multiprocess application. Signals allow you to make sure one or more process(es) will wait for a specific task to be completed before continuing execution. Any process can wait and/or release a signal.

:::info

[Semaphores](commands/semaphore.md) can also be used to manage interactions. Semaphores allow you to make sure that two or more processes do not modify the same resource (file, record...) at the same time. Only the process that sets the semaphore can remove it.

:::

### Signal object

A signal is a shared object that must be passed as a parameter to commands that call or create workers.

A `4D.Signal` object contains the following built-in methods and properties:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description).

Any worker/process calling the `.wait()` method will suspend its execution until the `.signaled` property is `true`. While waiting for a signal, the calling process does not use any CPU. This can be very interesting for performance in multiprocess applications. The `.signaled` property becomes `true` when any worker/process calls the `.trigger()` method.

Note that to avoid blocking situations, the `.wait()` can also return after a defined timeout has been reached.

Signal objects are created with the [newSignal](./commands/newSignal.md) command.


### Working with signals

In QodlyScript, you create a new signal object by calling the [`newSignal`](./commands/newSignal.md) command. Once created, this signal must be passed as a parameter to the [`callWorker`](commands/callWorker.md) command so that it can modify it when it has finished the task you want to wait for.

- `signal.wait()` must be called from the worker that needs another worker to finish a task in order to continue.
- `signal.trigger()` must be called from the worker that finished its execution in order to release all others.

Once a signal has been released using a `signal.trigger()` call, it cannot be reused again. If you want to set another signal, you need to call the `newSignal` command again.

Since a signal object is a [shared object](basics/lang-shared.md), you can use it to return results from called workers, provided that you do not forget to write values within a `use...end` structure (see example).

### Example

```qs
 var signal : 4D.Signal

  // Creation of a signal
 signal = newSignal

  // call main process and execute OpenForm method
 callWorker(1,"OpenForm",signal)
  // do another calculation
 ...
  // Waiting for the end of the process
 signaled = signal.wait()

  // Processing of the results
 calc = signal.result+...
```

***OpenForm*** method :

```qs
 declare (signal : 4D.Signal)  
 var form : object
 form = newObject("value",0)

  // Process the form object
 form = ...

  // Add a new attribute to your signal shared object to pass your result to the other process:
 use(signal)
    signal.result = form.value
 end

  // Trigger the signal to the waiting process
 signal.trigger()
```


### Functions and properties


||
|---|
|[<!-- INCLUDE #SignalClass.description.Syntax -->](#description)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.description.Summary -->|
|[<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.signaled.Summary --> |
|[<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.trigger().Summary --> |
|[<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.wait().Summary --> |



<!-- REF SignalClass.description.Desc -->
## .description

<!-- REF #SignalClass.description.Syntax -->**.description** : string<!-- END REF -->

#### Description

The `.description` property <!-- REF #SignalClass.description.Summary -->contains a custom description for the `signal` object.<!-- END REF -->.  

`.description` can be set at the creation of the signal object or at any moment. Note that since the `signal` object is a shared object, any write-mode access to the `.description` property must be surrounded by a `use...end` structure.

This property is **read-write**.

<!-- END REF -->



<!-- REF SignalClass.signaled.Desc -->
## .signaled   


<!-- REF #SignalClass.signaled.Syntax -->**.signaled** : Boolean<!-- END REF -->

#### Description

The `.signaled` property <!-- REF #SignalClass.signaled.Summary -->contains the current state of the `signal` object<!-- END REF -->. When the signal is created, `.signaled` is **false**. It becomes **true** when the `.trigger( )` is called on the object.

This property is **read-only**.

<!-- END REF -->



<!-- REF SignalClass.trigger().Desc -->
## .trigger()


<!-- REF #SignalClass.trigger().Syntax -->**.trigger( )**<!-- END REF -->


<!-- REF #SignalClass.trigger().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|<!-- END REF -->


#### Description

The `.trigger( )` function <!-- REF #SignalClass.trigger().Summary -->sets the `signaled` property of the signal object to **true**<!-- END REF --> and awakens all workers waiting for this signal.

If the signal is already in the signaled state (i.e., the `signaled` property is already **true**), the function does nothing.

<!-- END REF -->



<!-- REF SignalClass.wait().Desc -->
## .wait()


<!-- REF #SignalClass.wait().Syntax -->**.wait**( \{ *timeout* : number \} ) : boolean <!-- END REF -->


<!-- REF #SignalClass.wait().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|timeout|number|&#8594;|Maximum waiting time for the signal in seconds|
|Result|boolean|&#8592;|State of the `.signaled` property|<!-- END REF -->


#### Description

The `.wait()` function <!-- REF #SignalClass.wait().Summary -->makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire<!-- END REF -->.

To prevent blocking code, you can pass a maximum waiting time in seconds in the *timeout* parameter (decimals are accepted).

:::caution

Calling `.wait()` without a *timeout* in the Qodly main process is not recommended because it could freeze the whole Qodly application.

:::

If the signal is already in the signaled state (i.e. the `.signaled` property is already **true**), the function returns immediately, without waiting.

The function returns the value of the `.signaled` property. Evaluating this value allows knowing if the function returned because the `.trigger( )` has been called (`.signaled` is **true**) or if the *timeout* expired (`.signaled` is **false**).

>The state of a process that waits for a signal is `Waiting for internal flag`.


<!-- END REF -->
