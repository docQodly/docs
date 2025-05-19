---
id: mod
title: mod
---


<!-- REF #_command_.mod.Syntax -->**mod** ( *number1* : integer, *number2* : integer) : number<!-- END REF -->


<!-- REF #_command_.mod.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number1|integer|&#8594;|Number to divide|
|number2|integer|&#8594;|Number to divide by|
|Result|number|&#8592;|Returns the remainder|
<!-- END REF -->

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
 vlResult = mod(3,2) // vlResult gets 1
 vlResult = mod(4,2) // vlResult gets 0
 vlResult = mod(3.5,2) // vlResult gets 0

```
