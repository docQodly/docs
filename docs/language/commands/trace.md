---
id: trace
title: trace
---

<!-- REF #_command_.trace.Syntax -->**trace** <!-- END REF -->


<!-- REF #_command_.trace.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->

#### Description

You use `trace` <!-- REF #_command_.trace.Summary -->to debug your code during the development of an application<!-- END REF -->.

The `trace` command turns on the Qodly debugger for the current process. The Debugger is displayed before the next line of code is executed, and continues to be displayed for each line of code that is executed.

A valid [debug session](../studio/debugging.md#starting-a-debug-session) must be launched for a `trace` call to open the debugger. Otherwise, the `trace` command is ignored.
