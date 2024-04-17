---
id: trunc
title: trunc
---

<!-- REF #_command_.trunc.Syntax -->**trunc** ( *number* : number, *places* : integer) : number<!-- END REF -->


<!-- REF #_command_.trunc.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number to be truncated|
|places|integer|->|Number of decimal places used for truncating|
|Result|number|<-|Number with its decimal part truncated to the number of decimal places specified by *places*|<!-- END REF -->

#### Description

`trunc` <!-- REF #_command_.trunc.Summary -->returns *number* with its decimal part truncated to the number of decimal places specified by *places*<!-- END REF -->. `trunc` always truncates toward negative infinity.

If *places* is positive, *number* is truncated to *places* decimal places. If *places* is negative, number is truncated on the left of the decimal point.

#### Example

```qs
 var vlResult : number
 vlResult = trunc(216.897,1) // vlResult gets 216.8
 vlResult = trunc(216.897,-1) // vlResult gets 210
 vlResult = trunc(-216.897,1) // vlResult gets –216.9
 vlResult = trunc(-216.897,-1) // vlResult gets –220

```

#### See also

[`round`](round.md)
