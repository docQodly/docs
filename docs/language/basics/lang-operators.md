---
id: lang-operators
title: Operators
---

An operator is a symbol or a group of symbols that you use to check, modify, or combine values. You are already familiar with many operators. For example, `1 + 2` uses the addition (or plus sign) operator to add two numbers together, and the result is 3. Comparison operators, like = or >, let you compare two or more values. 

The QodlyScript language supports the operators you may already know from other languages like C or JavaScript. The assignment operator is `=` and the equal to operator is `==`. [Basic operators](#basic-operators) such as arithmetic operators (+, -, *, /, %...) and comparison operators ( = , >, >= ...) can be used with numbers, but also with boolean, text, date, time, or picture data types. Like JavaScript, the Qodly language supports the concept of [truthy and falsy values](#truthy-and-falsy), which in use in [short-cicrcuit operators](#short-circuit-operators). 


## Terminology

The Qodly language supports **binary** and **ternary** operators:

- binary operators operate on two targets (such as `2 + 3`) and appear in between their two targets.
- ternary operators operate on three targets. Like C, QodlyScript has only one ternary operator, the [ternary conditional operator](#ternary-operator) (`a ? b : c`).

The values that operators affect are operands. In the expression `1 + 2`, the + symbol is a binary operator and its two operands are the values 1 and 2.



## Assignment operator

The **assignment operator** (`a = b`) initializes or updates the value of `a` with the value of `b`:

```qs
myNumber = 3 //assigns 3 to myNumber variable  
myDate = !2023/01/21! //assigns a date literal
myLength = length("Acme") //assigns the result of the command (4) to myLength
col = newCollection //col is initialized with an empty collection
```

> Do NOT confuse the assignment operator `=` with the equality comparison operator `==`.


## Basic operators

Operator results depend on the **data types** they are applied to. QodlyScript supports different operators on scalar data types. They are described with the data types, in the following sections:

- [**Logical operators**](lang-boolean.md#logical-operators) (on **boolean** expressions)
- [**Date operators**](lang-date.md#date-operators)
- [**Time operators**](lang-time.md#time-operators)
- [**Number operators**](lang-number.md#numeric-operators)
- [**Bitwise operators**](lang-number.md#bitwise-operators) (on **integer** expressions)
- [**String operators**](lang-text.md#string-operators)
- [**Null operators**](lang-null-undefined.md#null-operators)
- [**Undefined operators**](lang-null-undefined.md#undefined-operators)


## Compound assignment operators

QodlyScript provides **compound assignment operators** that combine assignment with another operation. One example is the addition assignment operator (`+= `):

```qs
a = 1 
a += 2 // a = 3
```


The following compound assignment operators are supported:

|Operator|Syntax|Assigns|Example
|---|---|---|---|
|Addition|Text +=  Text|Text|`t += " World"  //t = t + " World"`|
||Number +=  Number |Number|`n += 5 //n = n + 5`|
||Date +=  Number |Date|`d += 5 //d = d + 5`|
||Time +=  Time |Time|`t1 += t2 //t1 = t1 + t2`|
||Time +=  Number |Number |`t1 += 5 //t1 = t1 + 5`|
||Picture +=  Picture|Picture|`p1 += p2 //p1 = p1 + p2 (add p2 to the right of p1)`|
||Picture +=  Number|Picture|`p1 += 5 //p1 = p1 + 5 (move p1 horizontally 5 pixels to the right)`|
|Subtraction|Number -=  Number |Number|`n -= 5 //n = n - 5`|
||Date -=  Number |Date|`d -= 5 //d = d - 5`|
||Time -=  Time |Time|`t1 -= t2 //t1 = t1 - t2`|
||Time -=  Number |Number |`t1 -= 5 //t1 = t1 - 5`|
||Picture -=  Number|Picture|`p1 -= 5 //p1 = p1 - 5 (move p1 horizontally 5 pixels to the left)`|
|Division|Number /=  Number |Number|`n /= 5 //n = n/5`|
||Time /=  Time |Time|`t1 /= t2 //t1 = t1/t2`|
||Time /=  Number |Number |`t1 /= 5 //t1 = t1 / 5`|
||Picture /=  Picture|Picture|`p1 /= p2 //p1 = p1 / p2 (add p2 to the bottom of p1)`|
||Picture /=  Number|Picture|`p1 /= 5 //p1 = p1 / 5 (move p1 vertically 5 pixels)`|
|Multiplication|Text *=  Number |Text|`t *= "abc"  //t = t * "abc"`|
||Number *=  Number |Number|`n *= 5 //n = n * 5`|
||Time *=  Time |Time|`t1 *= t2 //t1 = t1 * t2`|
||Time *=  Number |Number |`t1 *= 5 //t1 = t * 5`|
||Picture *=  Number|Picture|`p1 *= 5 //p1 = p1*5 (resize p1 by 5)`|

These operators apply on any [assignable expressions](lang-expressions.md#assignable-vs-non-assignable-expressions) (except pictures as object properties or collection elements).

The operation "source `operator` value" is not strictly equivalent to "source = source `operator` value" because the expression designating the source (variable, field, object property, collection element) is only evaluated once. For example, in such expression as `getPointer()->+= 1` the `getPointer` method is called only once.

> [Character indexing in text](lang-text.md#character-reference-symbols) and [byte indexing in blob](lang-blob.md#accessing-a-scalar-blobs-bytes) do not support these operators.
> 
#### Examples

```qs
// Addition
x = 2
x += 5 //x = 7

t = "Hello" 
t += " World" //t = "Hello World" 

d = !2000-11-10!
d += 10 //d = !2000-11-20!

// Subtraction
x1 = 10
x1 -= 5 //x1 = 5

d1 = !2000-11-10!
d1 -= 10 // d1 = !2000-10-31!

// Division
x3 = 10
x3 /= 2 // x3 = 5


// Multiplication
x2 = 10
x2 *= 5 // x2 = 50

t2 = "Hello" 
t2 *= 2 // t2 = "HelloHello"

```



 
## Short-circuit operators

The **&&** and **||** operators are **short circuit operators**. A short circuit operator is one that doesn't necessarily evaluate all of its operands. 

The difference with the single [**&** and **|** boolean operators](lang-boolean.md#logical-operators) is that the short-circuit operators **&&** and **||** do not return a boolean value. They evaluate expressions as [truthy or falsy](#truthy-and-falsy), then return one of the expressions.

The `&&` and `||` operators have the same [precedence](#operator-precedence) as the logical operators `&` and `|`, and are evaluated left to right. This means that `a || b && c` is evaluated as `(a || b) && c`.


### Short-circuit AND operator (&&)

The rule is as follows: 

Given `Expr1 && Expr2`:

The short-circuit AND operator evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are [truthy](#truthy-and-falsy), the value of the last operand is returned.

The following table summarizes the different cases for the **&&** operator:

|Expr1	|Expr2	|  Value returned
|---|---|---|
|truthy	|truthy	|Expr2|
|truthy	|falsy	|Expr2|
|falsy	|truthy	|Expr1|
|falsy	|falsy	|Expr1|

#### Example 1 

```qs
var v : variant

v = "Hello" && "World" //"World"
v = false && 0 // false
v = 0 && false // false
v = 5 && !00-00-00! // 00/00/00
v = 5 && 10 && "hello" //"hello"
```

#### Example 2

Say you have an online store, and some products have a tax rate applied, and others don't. 

To calculate the tax, you multiply the price by the tax rate, which may not have been specified.

So you can write this: 

```qs
var tax : variant

tax = item.taxRate && (item.price*item.taxRate)
```

*tax* will be `null` if *taxRate* is `null` (or `undefined`), otherwise it will store the result of the calculation.

#### Example 3

Short-circuit operators are useful in tests such as:

```qs
if((myObject != null) && (myObject.value>10))
	//code
end
```

If myObject is `null`, the second argument is not executed, thus no error is thrown.

### Short-circuit OR operator (||)

The || operator returns the value of one of the specified operands. The expression is evaluated left to right and tested for possible "short-circuit" evaluation using the following rule:

Given `Expr1 || Expr2`:

If Expr1 is [truthy](#truthy-and-falsy), Expr2 is not evaluated and the calculation returns Expr1.

If Expr1 is [falsy](#truthy-and-falsy), the calculation returns Expr2.

The following table summarizes the different cases and the value returned for the **||** operator:

|Expr1	|Expr2	|  Value returned
|---|---|---|
|truthy	|truthy	|Expr1|
|truthy	|falsy	|Expr1|
|falsy	|truthy	|Expr2|
|falsy	|falsy	|Expr2|

#### Example 1

Say you have a dataclass named Employee. Some employees have entered a phone number, and others haven't. This means that `emp.phone` could be null, and you cannot assign null to a string variable. But you can write the following:

```qs
var phone : string

phone = emp.phone || "n/a"
```

In which case `phone` will store either a phone number or the "n/a" string. 

#### Example 2

Given a dataclass named Person with a *name* attribute, as well as a *maidenName* attribute for married women.

The following example checks if there is a maiden name and stores it in a variable, otherwise it simply stores the person's name:

```qs
var name: string

name = person.maidenName || person.name
```



## Ternary operator

The ternary conditional operator allows you to write one-line conditional expressions. For example, it can replace a full sequence of [if…else](lang-control-flow.md#ifelseend) statements.

It takes three operands in the following order: 

* a condition followed by a question mark (?)
* an expression to execute if the condition is [truthy](#truthy-and-falsy), followed by a colon (:) 
* an expression to execute if the condition is [falsy](#truthy-and-falsy)

### Syntax 

The syntax is as follows:

`condition ? exprIfTruthy : exprIfFalsy`


### Examples

#### A simple example

```qs
var age : integer
var beverage : string

age = 26
beverage = (age>= 21) ? "Beer" : "Juice"

// beverage : "Beer"
```

#### Handling data from a table

This example stores a person's full name in a variable, and handles the case when no first name or last name has been specified:

```qs
var fullname : string

// If one of the names is missing, store the one that exists, otherwise store an empty string
fullname = (person.firstname && person.lastname) ? (person.firstname+" "+person.lastname) : (person.lastname || person.firstname) || ""
```

## Truthy and falsy

As well as a type, each value also has an inherent boolean value, generally known as either **truthy** or **falsy**. 

> **truthy** and **falsy** values are only evaluated by [short-circuit](#short-circuit-operators) and [ternary](#ternary-operator) operators.

The following values are **falsy**:

* false
* null
* undefined
* null object
* null collection
* null picture
* null date !00-00-00!
* "" - Empty strings
* [] - Empty collections
* {} - Empty objects

All other values are considered **truthy**, including:

* 0 - numeric zero (integer or otherwise)

In QodlyScript, **truthy** and **falsy** evaluation reflects the **usability** of a value, which means that a truthy value exists and can be processed by the code without generating errors or unexpected results. The rationale behind this is to provide a convenient way to handle *undefined* and *null* values in objects and collections, so that a reduced number of [if…else](lang-control-flow.md#ifelseend) statements are necessary to avoid runtime errors.

For example, when you use a [short-circuit OR operator](#short-circuit-or-operator-):

```qs
value = object.value || defaultValue
```

... you get the default value whenever *object* does not contain the `value` property OR when it is *null*. So this operator checks the existence or usability of the value instead of a specific value. Note that because the numerical value 0 exists and is usable, it is not treated specially, thus it is **truthy**.

Regarding values representing collections, objects, or strings, "empty" values are considered **falsy**. It is handy when you want to assign a default value whenever an empty one is encountered.

```qs
phone = emp.phone || "n/a"
```

## Operator precedence

Operator precedence determines the order in which operators are evaluated. For example:

```qs
3+4*5 // 3+20 -> 23
4 * 3 ^ 2 // 4 * 9 -> 36
```

To override the standard precedence, you can use parentheses (grouping). For example:

```qs
(3+4)*5 // 7*5 ->35
(4 * 3) ^ 2 // 12 ^2 -> 144
```

The following table lists operators in order from highest precedence to lowest precedence. Operators with the highest precedence are evaluated first. Associativity determines the order in which operators with the same precedence are evaluated.

| Operator                       | Precedence | Associativity  | Type                |
|---------------------------------|------------|----------------|---------------------|
| `( … )` (grouping)                 | 15         | not applicable | unary               |
| `… . …` (property access)            | 14         | left-to-right  | binary              |
| `… [ … ]` (property access) | 14         | not applicable | binary              |
| `… ( … )` (call)                   | 14         | not applicable | variadic            |
| `^`                               | 13         | right-to-left  | binary              |
| `\`                               | 12         | left-to-right  | binary              |
| `/`                               | 12         | left-to-right  | binary              |
| `*\|`                              | 12         | left-to-right  | binary              |
| `*+`                              | 12         | left-to-right  | binary              |
| `*`                               | 12         | left-to-right  | binary              |
| `%`                               | 12         | left-to-right  | binary              |
| `-`                               | 11         | left-to-right  | binary              |
| `+`                               | 11         | left-to-right  | binary              |
| `??`                              | 10         | left-to-right  | binary              |
| `?-`                              | 10         | left-to-right  | binary              |
| `?+`                              | 10         | left-to-right  | binary              |
| `<<`                        | 10         | left-to-right  | binary              |
| `>>`                       | 10         | left-to-right  | binary              |
| `<=`                           | 9          | left-to-right  | binary              |
| `<`                            | 9          | left-to-right  | binary              |
| `>=`                           | 9          | left-to-right  | binary              |
| `>`                            | 9          | left-to-right  | binary              |
| `==`                              | 8          | left-to-right  | binary              |
| `!=`                              | 8          | left-to-right  | binary              |
| `&`                           | 7          | left-to-right  | binary              |
| `^\|`                             | 6          | left-to-right  | binary              |
| `\|`                               | 5          | left-to-right  | binary              |
| `&&`                      | 4          | left-to-right  | binary              |
| `\|\|`                              | 3          | left-to-right  | binary              |
| `?:`                              | 2          | right-to-left  | ternary             |
| `=`                               | 1          | not applicable | assignment          |
| `/=`                              | 1          | not applicable | compound assignment |
| `-=`                              | 1          | not applicable | compound assignment |
| `+=`                              | 1          | not applicable | compound assignment |
| `*=`                              | 1          | not applicable | compound assignment |


