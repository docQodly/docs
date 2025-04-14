---
id: processNumber
title: processNumber
---


<!-- REF #_command_.processNumber.Syntax -->**processNumber** ( *name* : string ) : integer&nbsp; **processNumber** ( *id* : string ) : integer<!-- END REF -->


<!-- REF #_command_.processNumber.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|string|&#8594;|Name of process for which to retrieve the process number|
|id|string|&#8594;|ID of process for which to retrieve the process number|
|Result|integer|&#8592;|Process number|<!-- END REF -->

#### Description

The `processNumber` command <!-- REF #_command_.processNumber.Summary -->returns the number of the process whose *name* or *id* you pass in the first parameter<!-- END REF -->. If no process is found, `processNumber` returns 0.
