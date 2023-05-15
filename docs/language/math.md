---
id: math
title: Math
---

## Math Commands


## abs

**abs** ( *number* : real ) : real



|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number for which to return the absolute value|
|Result|real|<-|Absolute value of number|

#### Description

`abs` returns the absolute (unsigned, positive) value of *number*. If *number* is negative, it is returned as positive. If *number* is positive, it is returned unchanged.

#### Example

The following example returns the absolute value of –10.3, which is 10.3:

```4d
var vlVector : real
vlVector=abs(-10.3)

```

## arctan

**arctan** ( *number* : real ) : real



|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Tangent for which to calculate the angle|
|Result|real|<-|Angle in radians|

#### Description

`arctan` returns the angle, expressed in radians, of the tangent *number*. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### Example

The following example shows the value of Pi:

```4d
 ALERT("Pi is equal to: "+String(Arctan(1)*4))

```

#### See also

[`cos`](#cos)<br/>
[`sin`](#sin)<br/>
[`tan`](#tan)

## cos

**cos** ( *number* : real ) : real



|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number, in radians, whose cosine is returned|
|Result|real|<-|Cosine of number|

#### Description

`cos`  returns the cosine of *number*, where *number* is expressed in radians. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### See also

[`arctan`](#arctan)<br/>
[`sin`](#sin)<br/>
[`tan`](#tan)

## dec

**dec** ( *number* : real ) : real



|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number whose decimal portion is returned|
|Result|real|<-|Decimal part of number|

#### Description

`dec` returns the decimal (fractional) portion of *number*. The value returned is always positive or zero.

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

**exp** ( *number* : real ) : real



|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number to evaluate|
|Result|real|<-|Natural log base by the power of number|

#### Description

`exp` raises the natural log base (e = 2.71828...) by the power of *number*. `exp` is the inverse function of [`log`](#log).

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

**int** ( *number* : real ) : real



|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number whose integer portion is returned|
|Result|real|<-|Integer portion of number|

#### Description

`int` returns the integer portion of *number*. `int` truncates a negative *number* away from zero.

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

**log** ( *number* : real ) : real



|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number for which to return the log|
|Result|real|<-|Log of number|

#### Description

`log` returns the natural (Napierian) log of *number*. `log` is the inverse function of [`exp`](#exp).

:::note

Qodly provides the predefined constant *e number* (2.71828...).

:::

#### Example

The following line displays 1:

```4d
 ALERT(String(Log(Exp(1)))
 
```

#### See also

[`exp`](#exp)

## round

**round** ( *round* : real, *places* : integer) : real



|Parameter|Type||Description|
|---------|--- |:---:|------|
|round|real|->|Number to be rounded|
|places|integer|->|Number of decimal places used for rounding|
|Result|real|<-|Number rounded to the number of decimal places specified by Places|

#### Description

`round` returns *number* rounded to the number of decimal places specified by *places*.

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

**sin** ( *number* : real ) : real 



|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number, in radians, whose sine is returned|
|Result|real|<-|Sine of number|

#### Description

`sin`  returns the sine of *number*, where *number* is expressed in radians. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### See also

[`arctan`](#arctan)<br/>
[`cos`](#cos)<br/>
[`tan`](#tan)

## tan

**tan** ( *number* : real ) : real 



|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number, in radians, whose tangent is returned|
|Result|real|<-|Tangent of number|

#### Description

`tan`  returns the tangent of *number*, where *number* is expressed in radians. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### See also

[`arctan`](#arctan)<br/>
[`cos`](#cos)<br/>
[`sin`](#sin)

## trunc

**trunc** ( *number* : real, *places* : integer) : real



|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|real|->|Number to be truncated|
|places|integer|->|Number of decimal places used for truncating|
|Result|real|<-|Number with its decimal part truncated to the number of decimal places specified by Places|

#### Description

`trunc` returns *number* with its decimal part truncated to the number of decimal places specified by *places*. `trunc` always truncates toward negative infinity.

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