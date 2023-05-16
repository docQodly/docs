---
id: math
title: Math
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
|[<!-- INCLUDE #_command_.round.Syntax -->](#round)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.round.Summary -->|
|[<!-- INCLUDE #_command_.sin.Syntax -->](#sin)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.sin.Summary -->|
|[<!-- INCLUDE #_command_.tan.Syntax -->](#tan)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.tan.Summary -->|
|[<!-- INCLUDE #_command_.trunc.Syntax -->](#trunc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.trunc.Summary -->|

## abs

<!-- REF #_command_.abs.Syntax -->**abs** ( *number* : real ) : real<!-- END REF -->


<!-- REF #_command_.abs.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number for which to return the absolute value|
|Result|real|<-|Absolute value of number|<!-- END REF -->

#### Description

`abs` <!-- REF #_command_.abs.Summary -->returns the absolute (unsigned, positive) value of *number*<!-- END REF -->. If *number* is negative, it is returned as positive. If *number* is positive, it is returned unchanged.

#### Example

The following example returns the absolute value of –10.3, which is 10.3:

```4d
var vlVector : real
vlVector=abs(-10.3)

```

## arctan

<!-- REF #_command_.arctan.Syntax -->**arctan** ( *number* : real ) : real<!-- END REF -->


<!-- REF #_command_.arctan.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Tangent for which to calculate the angle|
|Result|real|<-|Angle in radians|<!-- END REF -->

#### Description

`arctan` <!-- REF #_command_.arctan.Summary -->returns the angle, expressed in radians, of the tangent *number*<!-- END REF -->. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### Example

```4d
	var vPi : string
 vPi="Pi is equal to: "+string(arctan(1)*4)

```

#### See also

[`cos`](#cos)<br/>
[`sin`](#sin)<br/>
[`tan`](#tan)

## cos

<!-- REF #_command_.cos.Syntax -->**cos** ( *number* : real ) : real<!-- END REF -->


<!-- REF #_command_.cos.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number, in radians, whose cosine is returned|
|Result|real|<-|Cosine of number|<!-- END REF -->

#### Description

`cos` <!-- REF #_command_.cos.Summary --> returns the cosine of *number*, where *number* is expressed in radians<!-- END REF -->. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### See also

[`arctan`](#arctan)<br/>
[`sin`](#sin)<br/>
[`tan`](#tan)

## dec

<!-- REF #_command_.dec.Syntax -->**dec** ( *number* : real ) : real<!-- END REF -->


<!-- REF #_command_.dec.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number whose decimal portion is returned|
|Result|real|<-|Decimal part of number|<!-- END REF -->

#### Description

`dec` <!-- REF #_command_.dec.Summary -->returns the decimal (fractional) portion of *number*<!-- END REF -->. The value returned is always positive or zero.

#### Example

The following example takes a monetary value expressed as a real number, and extracts the dollar part and the cents part. If *vrAmount* is 7.31, then *vlDollars* is set to 7 and *vlCents* is set to 31:

```4d
 var vlDollars, vlCents, vrAmount : real
 vlDollars=int(vrAmount) //Get the dollars
 vlCents=dec(vrAmount)*100 // Get the fractional part

```

#### See also

[`int`](#int)

## exp

<!-- REF #_command_.exp.Syntax -->**exp** ( *number* : real ) : real<!-- END REF -->


<!-- REF #_command_.exp.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number to evaluate|
|Result|real|<-|Natural log base by the power of number|<!-- END REF -->

#### Description

`exp` <!-- REF #_command_.exp.Summary -->raises the natural log base (e = 2.71828...) by the power of *number*<!-- END REF -->. `exp` is the inverse function of [`log`](#log).

:::note

Qodly provides the predefined constant *e number* (2.71828...).

:::

#### Example

The following example assigns the exponential of 1 to vrE (the log of vrE is 1):

```4d
 var vrE : real
 vrE=exp(1) // vrE gets 2.17828...
```

#### See also

[`log`](#log)

## int

<!-- REF #_command_.int.Syntax -->**int** ( *number* : real ) : real<!-- END REF -->


<!-- REF #_command_.int.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number whose integer portion is returned|
|Result|real|<-|Integer portion of number|<!-- END REF -->

#### Description

`int` <!-- REF #_command_.int.Summary -->returns the integer portion of *number*<!-- END REF -->. `int` truncates a negative *number* away from zero.

#### Example

The following example illustrates how `int` works for both positive and negative numbers. Note that the decimal portion of the number is removed:

```4d
 var vlResult : real
 vlResult=int(123.4) // vlResult gets 123
 vlResult=int(-123.4) // vlResult gets –124
```

#### See also

[`dec`](#dec)

## log

<!-- REF #_command_.log.Syntax -->**log** ( *number* : real ) : real<!-- END REF -->


<!-- REF #_command_.log.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number for which to return the log|
|Result|real|<-|Log of number|<!-- END REF -->

#### Description

`log` <!-- REF #_command_.log.Summary -->returns the natural (Napierian) log of *number*<!-- END REF -->. `log` is the inverse function of [`exp`](#exp).

:::note

Qodly provides the predefined constant *e number* (2.71828...).

:::

#### Example

```4d
 var vLog : string
 vLog=string(log(exp(1))
 
```

#### See also

[`exp`](#exp)

## round

<!-- REF #_command_.round.Syntax -->**round** ( *round* : real, *places* : integer) : real<!-- END REF -->


<!-- REF #_command_.round.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|round|real|->|Number to be rounded|
|places|integer|->|Number of decimal places used for rounding|
|Result|real|<-|Number rounded to the number of decimal places specified by Places|<!-- END REF -->

#### Description

`round` <!-- REF #_command_.round.Summary -->returns *number* rounded to the number of decimal places specified by *places*<!-- END REF -->.

If *places* is positive, *number* is rounded to *places* decimal places. If *places* is negative, *number* is rounded on the left of the decimal point.

If the digit following places is 5 though 9, `round` rounds toward positive infinity for a positive number, and toward negative infinity for a negative number. If the digit following places is 0 through 4, `round` rounds toward zero.

#### Example

The following example illustrates how `round` works with different arguments. Each line assigns a number to the *vlResult* variable. The comments describe the results:

```4d
 var vlResult : real
 vlResult=round(16.857,2) // vlResult gets 16.86
 vlResult=round(32345.67,-3) // vlResult gets 32000
 vlResult=round(29.8725,3) // vlResult gets 29.873
 vlResult=round(-1.5,0) // vlResult gets –2
 
```

#### See also

[`trunc`](#trunc)

## sin

<!-- REF #_command_.sin.Syntax -->**sin** ( *number* : real ) : real <!-- END REF -->


<!-- REF #_command_.sin.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number, in radians, whose sine is returned|
|Result|real|<-|Sine of number|<!-- END REF -->

#### Description

`sin` <!-- REF #_command_.sin.Summary --> returns the sine of *number*, where *number* is expressed in radians<!-- END REF -->. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### See also

[`arctan`](#arctan)<br/>
[`cos`](#cos)<br/>
[`tan`](#tan)

## tan

<!-- REF #_command_.tan.Syntax -->**tan** ( *number* : real ) : real <!-- END REF -->


<!-- REF #_command_.tan.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number, in radians, whose tangent is returned|
|Result|real|<-|Tangent of number|<!-- END REF -->

#### Description

`tan` <!-- REF #_command_.tan.Summary --> returns the tangent of *number*, where *number* is expressed in radians<!-- END REF -->. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### See also

[`arctan`](#arctan)<br/>
[`cos`](#cos)<br/>
[`sin`](#sin)

## trunc

<!-- REF #_command_.trunc.Syntax -->**trunc** ( *number* : real, *places* : integer) : real<!-- END REF -->


<!-- REF #_command_.trunc.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number to be truncated|
|places|integer|->|Number of decimal places used for truncating|
|Result|real|<-|Number with its decimal part truncated to the number of decimal places specified by Places|<!-- END REF -->

#### Description

`trunc` <!-- REF #_command_.trunc.Summary -->returns *number* with its decimal part truncated to the number of decimal places specified by *places*<!-- END REF -->. `trunc` always truncates toward negative infinity.

If *places* is positive, *number* is truncated to *places* decimal places. If *places* is negative, number is truncated on the left of the decimal point.

#### Example

The following example illustrates how `trunc` works with different arguments. Each line assigns a number to the *vlResult* variable. The comments describe the results:

```4d
 var vlResult : real
 vlResult=trunc(216.897,1) // vlResult gets 216.8
 vlResult=trunc(216.897,-1) // vlResult gets 210
 vlResult=trunc(-216.897,1) // vlResult gets –216.9
 vlResult=trunc(-216.897,-1) // vlResult gets –220
 
```

#### See also

[`round`](#round) 