---
id: log
title: log
---

<!-- REF #_command_.log.Syntax -->**log** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.log.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|&#8594;|Number for which to return the log|
|Result|number|&#8592;|Log of number|
<!-- END REF -->

#### Description

`log` <!-- REF #_command_.log.Summary -->returns the natural (Napierian) log of *number*<!-- END REF -->. `log` is the inverse function of [`exp`](exp.md).

:::note

Qodly provides the predefined constant *e number* (2.71828...).

:::

#### Example

```qs
 var vLog : string
 vLog = string(log(exp(1))

```

#### See also

[`exp`](exp.md)
