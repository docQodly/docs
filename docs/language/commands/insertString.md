---
id: insertString
title: insertString
---


<!-- REF #_command_.insertString.Syntax -->**insertString** ( *source* : string , *what* : string , *where* : integer ) : string<!-- END REF -->


<!-- REF #_command_.insertString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|->|String in which to insert the other string|
|what|string|->|String to insert|
|where|integer|->|Where to insert|
|Result|string|<-|Resulting string|<!-- END REF -->

#### Description

The `insertString` command <!-- REF #_command_.insertString.Summary -->inserts a string into *source* and returns the resulting string<!-- END REF -->. The command inserts the string *what* before the character at position *where*.

If *what* is an empty string (""), `insertString` returns source unchanged.

If *where* is greater than the length of *source*, then *what* is appended to *source*. If *where* is less than one (1), then *what* is inserted before *source*.

`insertString` is different from [`changeString`](changeString.md) in that it inserts characters instead of overwriting them.

#### Example

```qs
 var vtResult : string
 vtResult = insertString("The tree"," green",4) // vtResult gets "The green  tree"
 vtResult = insertString("Shut","o",3) // vtResult gets "Shout"
 vtResult = insertString("Indention","ta",6) // vtResult gets "Indentation"

```

#### See also

[`changeString`](changeString.md)<br/>
[`deleteString`](deleteString.md)<br/>
[`replaceString`](replaceString.md)
