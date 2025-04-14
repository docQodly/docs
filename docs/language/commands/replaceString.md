---
id: replaceString
title: replaceString
---

<!-- REF #_command_.replaceString.Syntax -->**replaceString** ( *source* : string , *oldString* : string , *newString* : string , *howMany* : integer \{, \*\}) : string<!-- END REF -->


<!-- REF #_command_.replaceString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|&#8594;|Original string|
|oldString|string|&#8594;|Characters to replace|
|newString|string|&#8594;|Replacement string (if empty string, occurrences are deleted)|
|howMany|integer|&#8594;|How many times to replace If omitted, all occurrences are replaced|
|*||&#8594;|If passed: evaluation based on character codes|
|Result|string|&#8592;|Resulting string|
<!-- END REF -->

#### Description

`replaceString` <!-- REF #_command_.replaceString.Summary -->replaces *howMany* occurrences of *oldString* in *source* with *newString*<!-- END REF -->.

If *newString* is an empty string (""), `replaceString` deletes each occurrence of *oldString* in *source*.

If *howMany* is specified, `replaceString` will replace only the number of occurrences of *oldString* specified, starting at the first character of *source*. If *howMany* is not specified, then all occurrences of *oldString* are replaced.

If *oldString* is an empty string, `replaceString` returns the unchanged *source*.

By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example æ = ae) into account. On the other hand, it is not diacritical (a = A, a = à and so on) and does not take "ignorable" characters such as characters whose code < 9 into account (Unicode specification).

To modify this functioning, pass the asterisk * as the last parameter. In this case, comparisons will be based on character codes. You must pass the * parameter:

* If you want to replace special characters, used for example as delimiters (`Char(1)`, etc.),
* If the replacement of characters must be case sensitive and take accented characters into account (a#A, a#à and so on).
Note that in this mode, the evaluation does not handle variations in the way words are written.

#### Example 1

The following example illustrates the use of `replaceString`. The results, described in the comments, are assigned to the variable *vtResult*.

```qs
 var vtResult, vtOtherVar : string
 vtResult = replaceString("Willow"," ll","d") // Result gets "Widow"
 vtResult = replaceString("Shout","o","") // Result gets "Shut"
 vtResult = replaceString(vtOtherVar,Char(kTab),",",*) // Replaces all tabs in vtOtherVar with commas

```

#### Example 2

The following example eliminates CRs and TABs from the text in *vtResult*:

```qs
 var vtResult : string
 vtResult = replaceString(replaceString(vtResult,\
 	Char(kCarriageReturn),"",*),Char(kTab),"",*)

```

#### Example 3

The following example illustrates the use of the * parameter in the case of a diacritical evaluation:

```qs
 var vtResult : string
 vtResult = replaceString("Crème brûlée","Brulee",\
 	"caramel") //Result gets "Crème caramel"
 vtResult = replaceString("Crème brûlée","Brulee",\
 	"caramel",*) //Result gets "Crème brûlée"

```

#### See also

[`changeString`](changeString.md)&nbsp; 
[`deleteString`](deleteString.md)&nbsp; 
[`insertString`](insertString.md)
