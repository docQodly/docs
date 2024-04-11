---
id: abortProcessByID
title: abortProcessByID
---


<!-- REF #_command_.abortProcessByID.Syntax -->**abortProcessByID** ( *uniqueID* : integer )<!-- END REF -->


<!-- REF #_command_.abortProcessByID.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|uniqueID|integer|->|Unique process ID|
<!-- END REF -->


#### Description

The `abortProcessByID` command <!-- REF #_command_.abortProcessByID.Summary -->stops a specific process on the Qodly Server<!-- END REF -->.

In the *uniqueID* parameter, pass the unique ID of the process running on the server that you want to stop. You can retrieve the process ID with the [`getProcessActivity`](#getprocessactivity) or the [`processProperties`](#processproperties) command.

:::note

This command should only be used for searching errors or administration purposes, not as a regular procedure.

:::

#### Example

You want to stop the first process of a processes collection:

```qs
  //variable  = curItemPosition

  // Retrieve the list of process on the server
 activity = getProcessActivity(kProcessesOnly).processes
 ...
  // The selected process is stopped on the server
 abortProcessByID(activity[0].ID)
```

#### See also

[`getProcessActivity`](#getprocessactivity)
