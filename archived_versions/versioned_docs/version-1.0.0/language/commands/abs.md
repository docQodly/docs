---
id: abs
title: abs
---


<!-- REF #_command_.abs.Syntax -->**abs** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.abs.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|&#8594;|Number for which to return the absolute value|
|Result|number|&#8592;|Absolute value of number|
<!-- END REF -->

#### Description

`abs` <!-- REF #_command_.abs.Summary -->returns the absolute (unsigned, positive) value of *number*<!-- END REF -->. If *number* is negative, it is returned as positive. If *number* is positive, it is returned unchanged.

#### Example

```qs
var vlVector : number
vlVector = abs(-10.3) //10.3

```
