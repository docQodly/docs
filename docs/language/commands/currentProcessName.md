---
id: currentProcessName
title: currentProcessName
---


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

[`currentProcess`](currentProcess.md)<br/>
[`processNumber`](processNumber.md)<br/>
[`processState`](processState.md)
