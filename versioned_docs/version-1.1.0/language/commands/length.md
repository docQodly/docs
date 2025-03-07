---
id: length
title: length
---

<!-- REF #_command_.length.Syntax -->**length** ( *aString* : string ) : integer<!-- END REF -->


<!-- REF #_command_.length.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|&#8594;|String for which to return length|
|Result|integer|&#8592;|Length of string|
<!-- END REF -->

#### Description

`length` is used to find the length of a *aString*. `length` <!-- REF #_command_.length.Summary -->returns the number of characters that are in a *aString*.<!-- END REF -->.

:::note

When you want to check whether a string contains any characters, including ignorable characters, you must use the test `if(length(vtAnyText) == 0)` rather than `if(vtAnyText == "")`. If the string contains for example `char(1)`, which is an ignorable character, `length(vtAnyText)` does return 1 but `vtAnyText == ""` returns true.

:::

#### Example

```qs
 var vtResult : string
 vlResult = length("Topaz") // vlResult gets 5
 vlResult = length("Citizen") // vlResult gets 7

```
