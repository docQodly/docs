---
id: processNumber
title: processNumber
---


<!-- REF #_command_.processNumber.Syntax -->**processNumber** ( *name* : string ) : integer<!-- END REF -->


<!-- REF #_command_.processNumber.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|string|->|Name of process for which to retrieve the process number|
|Result|integer|<-|Process number|<!-- END REF -->

#### Description

The `processNumber` command <!-- REF #_command_.processNumber.Summary -->returns the number of the process whose name you pass in *name*<!-- END REF -->. If no process is found, `processNumber` returns 0.
