---
id: exp
title: exp
---


<!-- REF #_command_.exp.Syntax -->**exp** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.exp.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number to evaluate|
|Result|number|<-|Natural log base by the power of number|
<!-- END REF -->

#### Description

`exp` <!-- REF #_command_.exp.Summary -->raises the natural log base (e = 2.71828...) by the power of *number*<!-- END REF -->. `exp` is the inverse function of [`log`](log.md).

:::note

Qodly provides the predefined constant *e number* (2.71828...).

:::

#### Example

The following example assigns the exponential of 1 to vrE (the log of vrE is 1):

```qs
 var vrE : number
 vrE = exp(1) // vrE gets 2.17828...
```

#### See also

[`log`](log.md)
