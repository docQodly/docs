---
id: int
title: int
---

<!-- REF #_command_.int.Syntax -->**int** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.int.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number whose integer portion is returned|
|Result|number|<-|Integer portion of number|<!-- END REF -->

#### Description

`int` <!-- REF #_command_.int.Summary -->returns the integer portion of *number*<!-- END REF -->. `int` truncates a negative *number* away from zero.

#### Example

The following example illustrates how `int` works for both positive and negative numbers. Note that the decimal portion of the number is removed:

```qs
 var vlResult : number
 vlResult = int(123.4) // vlResult gets 123
 vlResult = int(-123.4) // vlResult gets –124
```

#### See also

[`dec`](#dec)
