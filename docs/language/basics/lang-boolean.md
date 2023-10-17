---
id: lang-boolean
title: Boolean
---

A boolean attribute, variable or expression can be either `true` or `false`.

## Boolean functions

QuodlyScript provides the Boolean functions `true`, `false`, and `not`.

### Example

This example sets a boolean variable based on the value of a numeric variable. It returns `true` in `myBoolean` if the `myVar` value is set to 1 and `false` otherwise.

```qs
var myBoolean : boolean
var myVar : integer
if(myVar == 1)
	myBoolean = true //myBoolean is set to true
else
	myBoolean = false //myBoolean is set to false
end if
```

This example can be simplified into one line.

```qs
myBoolean = (myButton == 1)
```

## Logical operators

QodlyScript supports two logical operators that work on Boolean expressions: conjunction (AND) and inclusive disjunction (OR). A logical AND returns true if both expressions are true. A logical OR returns true if at least one of the expressions is true. The following table shows the logical operators:

:::note

In boolean contexts, it is usually recommended to use [short-circuit logical operators](lang-operators.md#short-circuit-operators) (`&&` and `||`). 

:::

|Operation	|Syntax	|Returns	|Expression	|Value|
|---|---|---|---|---|
|AND|Boolean & Boolean	|Boolean	|("A"  ==  "A") & (15  !=  3)	|true|
||||("A"  ==  "B") & (15  !=  3)	|false|
||||("A"  ==  "B") & (15  ==  3)	|false|
|OR	|Boolean  &#124; Boolean	|Boolean	|("A"  ==  "A") &#124; (15  !=  3)	|true|
||||("A"  ==  "B") &#124;  (15  !=  3)	|true|
||||("A"  ==  "B") &#124;  (15  ==  3)	|false|

The following is the truth table for the AND logical operator:

|Expr1	|Expr2	|Expr1 & Expr2|  
|---|---|---|
|true	|true	|true|
|true	|false	|false|
|false	|true	|false|
|false	|false	|false|

The following is the truth table for the OR logical operator:

|Expr1	|Expr2	|Expr1 &#124; Expr2|
|---|---|---|
|true	|true	|true|
|True	|false	|true|
|false	|true	|true|
|false	|false	|false|

:::tip

If you need to calculate the exclusive disjunction between *expr1* and *expr2*, evaluate:

```qs
 (expr1|expr2) & not(expr1 & expr2)  
```

:::
