---
id: highestProcessNumber
title: highestProcessNumber
---


<!-- REF #_command_.highestProcessNumber.Syntax -->**highestProcessNumber** : integer<!-- END REF -->

<!-- REF #_command_.highestProcessNumber.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|integer|&#8592;|Highest number of open processes (including kernel processes)|
<!-- END REF -->

#### Description

The `highestProcessNumber` command <!-- REF #_command_.highestProcessNumber.Summary -->returns the highest alive process number in the Qodly Server<!-- END REF -->.

Processes are numbered in the order in which they are created. When still no process has been aborted during the session, then this command returns the total number of open processes.

This number takes into account all processes, even those that are automatically managed by Qodly Server, such as the Cache Manager process and Web Server process.
