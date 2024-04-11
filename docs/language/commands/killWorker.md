---
id: killWorker
title: killWorker
---


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
    :(param == "call") //the worker is called
       ... //do something
    :(param == "end") //the worker is asked to kill itself
      killWorker()
end
```

#### See also

[`callWorker`](#callworker)<br/>
[`Signal` class](SignalClass.md)
