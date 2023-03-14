---
id: boolean
title: Boolean
---

A boolean attribute, variable or expression can be either `true` or `false`.

## Boolean functions

QuodlyScript provides the Boolean functions `True`, `False`, and `Not`.

### Example

This example sets a boolean variable based on the value of a numeric variable. It returns `true` in `myBoolean` if the `myVar` value is set to 1 and `false` otherwise.

```4d
var myBoolean : Boolean
var myVar : Integer
if(myVar==1)
	myBoolean=True //myBoolean is set to True
else
	myBoolean=False //myBoolean is set to False
end if
```

This example can be simplified into one line.

```4d
myBoolean=(myButton==1)
```

## Logical operators

QodlyScript supports two logical operators that work on Boolean expressions: conjunction (AND) and inclusive disjunction (OR). A logical AND returns true if both expressions are true. A logical OR returns true if at least one of the expressions is true. The following table shows the logical operators:

|Operation	|Syntax	|Returns	|Expression	|Value|
|---|---|---|---|---|
|AND|Boolean & Boolean	|Boolean	|("A" == "A") & (15 != 3)	|True|
||||("A" == "B") & (15 != 3)	|False|
||||("A" == "B") & (15 == 3)	|False|
|OR	|Boolean  &#124; Boolean	|Boolean	|("A" == "A") &#124; (15 != 3)	|True|
||||("A" == "B") &#124;  (15 != 3)	|True|
||||("A" == "B") &#124;  (15 == 3)	|False|

The following is the truth table for the AND logical operator:

|Expr1	|Expr2	|Expr1 & Expr2|  
|---|---|---|
|True	|True	|True|
|True	|False	|False|
|False	|True	|False|
|False	|False	|False|

The following is the truth table for the OR logical operator:

|Expr1	|Expr2	|Expr1 &#124; Expr2|
|---|---|---|
|True	|True	|True|
|True	|False	|True|
|False	|True	|True|
|False	|False	|False|

:::tip

If you need to calculate the exclusive disjunction between *Expr1* and *Expr2*, evaluate:

```4d
 (Expr1|Expr2) & Not(Expr1 & Expr2)  
```

:::

:::note

In boolean contexts, the QuodlyScript language also supports [short-circuit operators](operators.md#short-circuit-operators) (`&&` and `||`) and the [truthy and falsy](operators.md#truthy-and-falsy) concept. 

:::