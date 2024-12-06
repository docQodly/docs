---
id: num
title: num
---


<!-- REF #_command_.num.Syntax -->**num** ( *expression* : string {, *separator* : string } ) : number <br/>**num** ( *expression* : number ) : number <br/>**num** ( *expression* : boolean ) : number <!-- END REF -->


<!-- REF #_command_.num.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|any|&#8594;|Character for which you want to get the code|
|separator|string|&#8594;|Decimal separator|
|Result|number|&#8592;|Numeric form of the expression parameter|
<!-- END REF -->

#### Description

The `num` command <!-- REF #_command_.num.Summary -->returns the numeric form of the string, boolean or numeric expression you pass in *expression*<!-- END REF -->. The optional *separator* parameter designates a decimal separator for evaluating string type expressions.

**String Expressions**

If *expression* consists only of one or more alphabetic characters, `num` returns a zero. If *expression* includes alphabetic and numeric characters, the command ignores the alphabetic characters. Thus, it transforms the string "a1b2c3" into the number 123.

There are three reserved characters that `num` treats specially: the decimal separator as defined in the system (if the *separator* parameter is not passed), the hyphen “-”, and “e” or “E”. These characters are interpreted as numeric format characters.

* The decimal separator is interpreted as a decimal place and must appear embedded in a numeric string. By default, the command uses the decimal separator set by the operating system. You can modify this character using the *separator* parameter (see below).
* The hyphen causes the number or exponent to be negative. The hyphen must appear before any negative numeric characters or after the “e” for an exponent. Except for the “e” character, if a hyphen is embedded in a numeric string, the portion of the string after the hyphen is ignored. For example, `num`("123-456") returns 123, but `num`("-9") returns -9.
* The e or E causes any numeric characters to its right to be interpreted as the power of an exponent. The “e” must be embedded in a numeric string. Thus, `num`("123e–2") returns 1.23.
Note that when the string includes more than one "e", conversion might give different results under Mac OS and under Windows.

The *separator* parameter designates a custom decimal separator for evaluating the *expression*. When the string to be evaluated is expressed with a decimal separator different from the system operator, the command returns an incorrect result. The *separator* parameter can be used in this case to obtain a correct evaluation. When this parameter is passed, the command does not take the system decimal separator into account. You can pass one or more characters.

**Boolean Expressions**

If you pass a boolean expression, `num` returns 1 if the expression is true; otherwise, it returns 0 (zero).

**Numeric Expressions**

If you pass a numeric expression in the *expression* parameter, `num` returns the value passed in the *expression* parameter as is. This can be useful more particularly in the case of generic programming.

**Undefined Expressions**

If *expression* evaluates to undefined, the command returns 0 (zero). This is useful when you expect the result of an expression (e.g. an object attribute) to be a number, even if it can be undefined.


#### Example 1

The following example illustrates how `num` works when passed a string argument.

```qs
 var vResult : number
 vResult = num("ABCD") // vResult gets 0
 vResult = num("A1B2C3") // vResult gets 123
 vResult = num("123") // vResult gets 123
 vResult = num("123.4") // vResult gets 123.4
 vResult = num("–123") // vResult gets –123
 vResult = num("–123e2") // vResult gets –12300

```

#### Example 2

This example compares the results obtained depending on the separator:

```qs
 var thestring : string
 var thenum : number
 thestring = "33 333,33"
 thenum = num(thestring) // 3333333
 thenum = num(thestring,",") // 33333.33

```

#### See also

[`bool`](bool.md)<br/>
[`string`](string.md)
