---
id: setAssertEnabled
title: setAssertEnabled
---


<!-- REF #_command_.setAssertEnabled.Syntax -->**setAssertEnabled**(assertions : boolean { , /* } )<!-- END REF -->


<!-- REF #_command_.setAssertEnabled.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|assertions|boolean|->|true = enable assertions, false = disable assertions|
|*||->|If omitted = command applies to all the processes (existing or created subsequently), if passed = command applies to current process only|
<!-- END REF -->


#### Description

The `setAssertEnabled` command <!-- REF #_command_.setAssertEnabled.Summary -->can be used to disable or re-enable any assertions inserted into the Qodly code of the application<!-- END REF -->.

For more information about assertions, please refer to the description of the [`assert`](assert.md) command.

By default, assertions added in the program are enabled. This command is useful when you want to disable them since their evaluation can sometimes be costly in terms of execution time and you may also want them to be hidden from the final user of the application. Typically, the `setAssertEnabled` command could be used in the in order to enable or disable assertions according to whether the application is in "Test" mode or in "Production" mode.

By default, the `setAssertEnabled` command affects all the processes of the application. To restrict the effect of the command to the current process only, you can pass the `*` parameter.

Please note that when assertions are disabled, expressions passed to `assert` commands are no longer evaluated. The lines of code that call this command no longer have any effect on the operation of the application, neither in terms of behavior, nor in terms of performance.

#### Example

Disabling assertions:

```qs
 setAssertEnabled(false)
 assert(TestMethod) // TestMethod will not be called since assertions are disabled
```

#### See also

[`.assert`](assert.md)<br/>
[`getAssertEnabled`](getAssertEnabled.md)
