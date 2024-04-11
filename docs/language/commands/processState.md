---
id: processState
title: processState
---

<!-- REF #_command_.processState.Syntax -->**processState** ( *process* : integer ) : integer<!-- END REF -->


<!-- REF #_command_.processState.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|process|integer|->|Process number|
|Result|integer|<-|State of the process|<!-- END REF -->

#### Description

The `processState` command <!-- REF #_command_.processState.Summary -->returns the state of the process whose number you pass in *process*<!-- END REF -->.

This command can return one of the values provided by the following constants:

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


#### See also

[`ProcessProperties`](#processproperties)
