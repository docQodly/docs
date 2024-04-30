---
id: getAssertEnabled
title: getAssertEnabled
---




<!-- REF #_command_.getAssertEnabled.Syntax -->**getAssertEnabled** : boolean<!-- END REF -->


<!-- REF #_command_.getAssertEnabled.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|result|boolean|<-|true = assertions are enabled, false = assertions are disabled|
<!-- END REF -->


#### Description

The `getAssertEnabled` command <!-- REF #_command_.getAssertEnabled.Summary -->returns `true` or `false` according to whether or not assertions are enabled in the current process<!-- END REF -->.

For more information about assertions, please refer to the description of the [`assert`](assert.md) command.

By default, assertions are enabled but they may have been disabled using the [`setAssertEnabled`](setAssertEnabled.md) command.


#### See also

[`.assert`](assert.md)<br/>
[`setAssertEnabled`](setAssertEnabled.md)
