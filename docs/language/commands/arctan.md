---
id: arctan
title: arctan
---


<!-- REF #_command_.arctan.Syntax -->**arctan** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.arctan.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Tangent for which to calculate the angle|
|Result|number|<-|Angle in radians|<!-- END REF -->

#### Description

`arctan` <!-- REF #_command_.arctan.Summary -->returns the angle, expressed in radians, of the tangent *number*<!-- END REF -->.

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### Example

```qs
	var vPi : string
 	vPi = "Pi is equal to: "+string(arctan(1)*4)

```

#### See also

[`cos`](cos.md)<br/>
[`sin`](sin.md)<br/>
[`tan`](tan.md)
