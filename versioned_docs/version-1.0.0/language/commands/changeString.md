---
id: changeString
title: changeString
---

<!-- REF #_command_.changeString.Syntax -->**changeString** ( *source* : string , *newChars* : string , *where* : integer ) : string<!-- END REF -->


<!-- REF #_command_.changeString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|&#8594;|Original string|
|newChars|string|&#8594;|New characters|
|where|integer|&#8594;|Where to start the changes|
|Result|string|&#8592;|Resulting string|
<!-- END REF -->

#### Description

The `changeString` command <!-- REF #_command_.changeString.Summary -->changes a group of characters in *source* and returns the resulting string<!-- END REF -->. The command overlays *source*, with the characters in *newChars*, at the character described by *where*.

If *newChars* is an empty string (""), `changeString` returns *source* unchanged. `changeString` always returns a string of the same length as `source`. If *where* is less than one or greater than the length of *source*, `changeString` returns *source*.

`changeString` is different from [`insertString`](insertString.md) in that it overwrites characters instead of inserting them.

#### Example

```qs
var vtResult : string
vtResult = changeString("Acme","CME",2) //vtResult gets "ACME"
vtResult = changeString("November","Dec",1) //vtResult gets "December"

```

#### See also

[`deleteString`](deleteString.md)&nbsp; 
[`insertString`](insertString.md)&nbsp; 
[`replaceString`](replaceString.md)
