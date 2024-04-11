---
id: log
title: log
---

## Math Commands

||
|---|
|[<!-- INCLUDE #_command_.abs.Syntax -->](#abs)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.abs.Summary -->|
|[<!-- INCLUDE #_command_.arctan.Syntax -->](#arctan)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.arctan.Summary -->|
|[<!-- INCLUDE #_command_.cos.Syntax -->](#cos)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.cos.Summary -->|
|[<!-- INCLUDE #_command_.dec.Syntax -->](#dec)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.dec.Summary -->|
|[<!-- INCLUDE #_command_.exp.Syntax -->](#exp)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.exp.Summary -->|
|[<!-- INCLUDE #_command_.int.Syntax -->](#int)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.int.Summary -->|
|[<!-- INCLUDE #_command_.log.Syntax -->](#log)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.log.Summary -->|
|[<!-- INCLUDE #_command_.mod.Syntax -->](#mod)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.mod.Summary -->|
|[<!-- INCLUDE #_command_.random.Syntax -->](#random)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.random.Summary -->|
|[<!-- INCLUDE #_command_.round.Syntax -->](#round)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.round.Summary -->|
|[<!-- INCLUDE #_command_.setRealComparisonLevel.Syntax -->](#setrealcomparisonlevel)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.setRealComparisonLevel.Summary -->|
|[<!-- INCLUDE #_command_.sin.Syntax -->](#sin)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.sin.Summary -->|
|[<!-- INCLUDE #_command_.squareRoot.Syntax -->](#squareroot)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.squareRoot.Summary -->|
|[<!-- INCLUDE #_command_.tan.Syntax -->](#tan)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.tan.Summary -->|
|[<!-- INCLUDE #_command_.trunc.Syntax -->](#trunc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.trunc.Summary -->|


<!-- REF #_command_.log.Syntax -->**log** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.log.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number for which to return the log|
|Result|number|<-|Log of number|
<!-- END REF -->

#### Description

`log` <!-- REF #_command_.log.Summary -->returns the natural (Napierian) log of *number*<!-- END REF -->. `log` is the inverse function of [`exp`](#exp).

:::note

Qodly provides the predefined constant *e number* (2.71828...).

:::

#### Example

```qs
 var vLog : string
 vLog = string(log(exp(1))

```

#### See also

[`exp`](#exp)
