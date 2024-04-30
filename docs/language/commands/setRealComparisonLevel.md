---
id: setRealComparisonLevel
title: setRealComparisonLevel
---


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

* 0.00001 = 0.00002 returns false, because the difference 0.00001 is greater than 10^-6.
* 0.000001 = 0.000002 returns true, because the difference 0.000001 is not greater than 10^-6.
* 0.000001 = 0.000003 returns false, because the difference 0.000002 is greater than 10^-6.

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
