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
|[<!-- INCLUDE #_command_.mod.Syntax -->](#mod)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.mod.Summary -->|
|[<!-- INCLUDE #_command_.random.Syntax -->](#random)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.random.Summary -->|
|[<!-- INCLUDE #_command_.round.Syntax -->](#round)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.round.Summary -->|
|[<!-- INCLUDE #_command_.setRealComparisonLevel.Syntax -->](#setRealComparisonLevel)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.setRealComparisonLevel.Summary -->|
|[<!-- INCLUDE #_command_.sin.Syntax -->](#sin)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.sin.Summary -->|
|[<!-- INCLUDE #_command_.squareRoot.Syntax -->](#squareRoot)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.squareRoot.Summary -->|
|[<!-- INCLUDE #_command_.tan.Syntax -->](#tan)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.tan.Summary -->|
|[<!-- INCLUDE #_command_.trunc.Syntax -->](#trunc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.trunc.Summary -->|

## abs

<!-- REF #_command_.abs.Syntax -->**abs** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.abs.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number for which to return the absolute value|
|Result|number|<-|Absolute value of number|<!-- END REF -->

#### Description

`abs` <!-- REF #_command_.abs.Summary -->returns the absolute (unsigned, positive) value of *number*<!-- END REF -->. If *number* is negative, it is returned as positive. If *number* is positive, it is returned unchanged.

#### Example

```qs
var vlVector : number
vlVector=abs(-10.3) //10.3

```

## arctan

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
 	vPi="Pi is equal to: "+string(arctan(1)*4)

```

#### See also

[`cos`](#cos)<br/>
[`sin`](#sin)<br/>
[`tan`](#tan)

## cos

<!-- REF #_command_.cos.Syntax -->**cos** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.cos.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number, in radians, whose cosine is returned|
|Result|number|<-|Cosine of number|<!-- END REF -->

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

<!-- REF #_command_.dec.Syntax -->**dec** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.dec.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number whose decimal portion is returned|
|Result|number|<-|Decimal part of number|<!-- END REF -->

#### Description

`dec` <!-- REF #_command_.dec.Summary -->returns the decimal (fractional) portion of *number*<!-- END REF -->. The value returned is always positive or zero.

#### Example

The following example takes a monetary value expressed as a number, and extracts the dollar part and the cents part. If *vAmount* is 7.31, then *vDollars* is set to 7 and *vCents* is set to 31:

```qs
 var vDollars, vCents, vAmount : number
 vDollars=int(vAmount) //Get the dollars
 vCents=dec(vAmount)*100 // Get the fractional part

```

#### See also

[`int`](#int)

## exp

<!-- REF #_command_.exp.Syntax -->**exp** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.exp.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number to evaluate|
|Result|number|<-|Natural log base by the power of number|<!-- END REF -->

#### Description

`exp` <!-- REF #_command_.exp.Summary -->raises the natural log base (e = 2.71828...) by the power of *number*<!-- END REF -->. `exp` is the inverse function of [`log`](#log).

:::note

Qodly provides the predefined constant *e number* (2.71828...).

:::

#### Example

The following example assigns the exponential of 1 to vrE (the log of vrE is 1):

```qs
 var vrE : number
 vrE=exp(1) // vrE gets 2.17828...
```

#### See also

[`log`](#log)

## int

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
 vlResult=int(123.4) // vlResult gets 123
 vlResult=int(-123.4) // vlResult gets –124
```

#### See also

[`dec`](#dec)

## log

<!-- REF #_command_.log.Syntax -->**log** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.log.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number for which to return the log|
|Result|number|<-|Log of number|<!-- END REF -->

#### Description

`log` <!-- REF #_command_.log.Summary -->returns the natural (Napierian) log of *number*<!-- END REF -->. `log` is the inverse function of [`exp`](#exp).

:::note

Qodly provides the predefined constant *e number* (2.71828...).

:::

#### Example

```qs
 var vLog : string
 vLog=string(log(exp(1))
 
```

#### See also

[`exp`](#exp)

## mod

<!-- REF #_command_.mod.Syntax -->**mod** ( *number1* : integer, *number2* : integer) : number<!-- END REF -->


<!-- REF #_command_.mod.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number1|integer|->|Number to divide|
|number2|integer|->|Number to divide by|
|Result|number|<-|Returns the remainder|<!-- END REF -->

#### Description

The `mod` command <!-- REF #_command_.mod.Summary -->returns the remainder of the integer division of *number1* by *number2*<!-- END REF -->.

Notes:

* `mod` accepts integer and number expressions. However, if *number1* or *number2* are real numbers, the numbers are first rounded and then `mod` is calculated.

* Be careful when using `mod` with real numbers of a large size (above 2^31) since, in this case, its operation may reach the limits of the calculation capacities of standard processors.

You can also use the % operator to calculate the remainder.

:::caution

The % operator returns valid results with integer expressions. To calculate the modulo of real values, you must use the `mod` command.

:::

#### Example

The following example illustrates how the `mod` function works with different arguments. Each line assigns a number to the vlResult variable. The comments describe the results:

```qs
 var vlResult : number
 vlResult=mod(3,2) // vlResult gets 1
 vlResult=mod(4,2) // vlResult gets 0
 vlResult=mod(3.5,2) // vlResult gets 0
 
```

## round

<!-- REF #_command_.round.Syntax -->**round** ( *round* : number, *places* : integer) : number<!-- END REF -->


<!-- REF #_command_.round.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aRound|number|->|Number to be rounded|
|places|integer|->|Number of decimal places used for rounding|
|Result|number|<-|Number rounded to the number of decimal places specified by *places*|<!-- END REF -->

#### Description

`round` <!-- REF #_command_.round.Summary -->returns *number* rounded to the number of decimal places specified by *places*<!-- END REF -->.

If *places* is positive, *number* is rounded to *places* decimal places. If *places* is negative, *number* is rounded on the left of the decimal point.

If the digit following places is 5 though 9, `round` rounds toward positive infinity for a positive number, and toward negative infinity for a negative number. If the digit following places is 0 through 4, `round` rounds toward zero.

#### Example

The following example illustrates how `round` works with different arguments:

```qs
 var vlResult : number
 vlResult=round(16.857,2) // vlResult gets 16.86
 vlResult=round(32345.67,-3) // vlResult gets 32000
 vlResult=round(29.8725,3) // vlResult gets 29.873
 vlResult=round(-1.5,0) // vlResult gets –2
 
```

#### See also

[`trunc`](#trunc)

## random

<!-- REF #_command_.random.Syntax -->**random**: integer<!-- END REF -->


<!-- REF #_command_.random.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|integer|<-|Random number|<!-- END REF -->

#### Description

`random` <!-- REF #_command_.random.Summary -->returns a random integer value between 0 and 32,767 (inclusive)<!-- END REF -->.

To define a range of integers from which the random value will be chosen, use this formula:

```qs
 (random%(vEnd-vStart+1))+vStart
 
```

The value *vStart* is the first number in the range, and the value *vEnd* is the last.

#### Example

The following example assigns a random integer between 10 and 30 to the *vlResult* variable:

```qs
 var vlResult : integer
 vlResult=(random%21)+10
 
```

## setRealComparisonLevel

<!-- REF #_command_.setRealComparisonLevel.Syntax -->**setRealComparisonLevel** ( *epsilon* : number )<!-- END REF -->


<!-- REF #_command_.setRealComparisonLevel.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|epsilon|number|->|Epsilon value for real equality comparisons|<!-- END REF -->

#### Description

The `setRealComparisonLevel` command <!-- REF #_command_.setRealComparisonLevel.Summary -->sets the *epsilon* value used by Qodly to compare real values and expressions for equality<!-- END REF -->.

A computer always performs approximative real computations; therefore, testing real numbers for equality should take this approximation into account. Qodly does this when comparing real numbers by testing whether or not the difference between the two numbers exceeds a certain value. This value is called the epsilon and works this way:

Given two real numbers *a* and *b*, if `abs(a-b)` is greater than the epsilon, the numbers are considered not equal; otherwise, the numbers are considered equal.

By default, Qodly sets the epsilon value to 10 power minus 6 (10^-6). Please note that the epsilon value should always be positive. Examples:

* 0.00001=0.00002 returns false, because the difference 0.00001 is greater than 10^-6.
* 0.000001=0.000002 returns true, because the difference 0.000001 is not greater than 10^-6.
* 0.000001=0.000003 returns false, because the difference 0.000002 is greater than 10^-6.

Using `setRealComparisonLevel`, you can increase or decrease the epsilon value as you require.

:::note

The command will have no effect if *epsilon* > 10^-3 or if *epsilon* < 0.

:::


Changing the epsilon only affects real number comparison for equality. It has no effect on other real computations nor on the display of real values. 


:::caution

This command should be used in specific cases, such as sorting on an attribute with values less than 10^-6. Usually, you will not need to change the default epsilon value.

:::


:::note

The `setRealComparisonLevel` command has no effect on queries and sorts performed with attributes of the Number type. It only applies the Qodly language.

:::

## sin

<!-- REF #_command_.sin.Syntax -->**sin** ( *number* : number ) : number <!-- END REF -->


<!-- REF #_command_.sin.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number, in radians, whose sine is returned|
|Result|number|<-|Sine of number|<!-- END REF -->

#### Description

`sin` <!-- REF #_command_.sin.Summary --> returns the sine of *number*, where *number* is expressed in radians<!-- END REF -->. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### See also

[`arctan`](#arctan)<br/>
[`cos`](#cos)<br/>
[`tan`](#tan)

## squareRoot

<!-- REF #_command_.squareRoot.Syntax -->**squareRoot** ( *number* : number) : number<!-- END REF -->


<!-- REF #_command_.squareRoot.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number whose square root is calculated|
|Result|number|<-|Square root of the number|<!-- END REF -->

#### Description

`squareRoot` <!-- REF #_command_.squareRoot.Summary -->returns the square root of *number*<!-- END REF -->.

#### Example 1

The following example assigns the value 1.414213562373 to the variable *vrSquareRootOfTwo*.

```qs
 var vrSquareRootOfTwo : number
 vrSquareRootOfTwo=squareRoot(2)
 
```

#### Example 2

The following method returns the hypotenuse of the right triangle whose two legs are passed as parameters:


```qs
 declare ( legA : number , legB : number) -> hypothenuse : number
 hypothenuse:=squareRoot((legA^2)+(legB^2)) 
```


## tan

<!-- REF #_command_.tan.Syntax -->**tan** ( *number* : number ) : number <!-- END REF -->


<!-- REF #_command_.tan.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number, in radians, whose tangent is returned|
|Result|number|<-|Tangent of number|<!-- END REF -->

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
 vlResult=trunc(216.897,1) // vlResult gets 216.8
 vlResult=trunc(216.897,-1) // vlResult gets 210
 vlResult=trunc(-216.897,1) // vlResult gets –216.9
 vlResult=trunc(-216.897,-1) // vlResult gets –220
 
```

#### See also

[`round`](#round) 