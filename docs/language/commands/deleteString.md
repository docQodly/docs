---
id: deleteString
title: deleteString
---


<!-- REF #_command_.deleteString.Syntax -->**deleteString** ( *source* : string , *where* : integer , *numChars* : integer ) : string<!-- END REF -->


<!-- REF #_command_.deleteString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|&#8594;|String from which to delete characters|
|where |integer|&#8594;|First character to delete|
|numChars|integer|&#8594;|Number of characters to delete|
|Result|string|&#8592;|Resulting string|<!-- END REF -->

#### Description

`deleteString` <!-- REF #_command_.deleteString.Summary -->deletes *numChars* from *source*, starting at *where*, and returns the resulting string<!-- END REF -->.

`deleteString` returns the same string as *source* when:

* *source* is an empty string
* *where* is greater than the length of *source*
* *numChars* is zero (0)

If *where* is less than one, the characters are deleted from the beginning of the string.

If *where* plus *numChars* is equal to or greater than the length of *source*, the characters are deleted from *where* to the end of *source*.

#### Example

```qs
 var vtResult, vtOtherVar : string
 vtResult = deleteString("Lamborghini",6,6) // vtResult gets "Lambo"
 vtResult = deleteString("Indentation",6,2) // vtResult gets "Indention"
 vtResult = deleteString(vtOtherVar,3,32000) // vtResult gets the first two characters of vtOtherVar

```

#### See also

[`changeString`](changeString.md)&nbsp; 
[`insertString`](insertString.md)&nbsp; 
[`replaceString`](replaceString.md)
