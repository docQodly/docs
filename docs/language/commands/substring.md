---
id: substring
title: substring
---

<!-- REF #_command_.substring.Syntax -->**substring** ( *source* : string , *firstChar* : integer , *numChars* : integer ) : string <!-- END REF -->


<!-- REF #_command_.substring.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|->|String from which to get substring|
|firstChar|integer|->|Position of first character|
|numChars|integer|->|Number of characters to get|
|Result|string|<-|Substring of source|
<!-- END REF -->

#### Description

The `substring` command <!-- REF #_command_.substring.Summary -->returns the portion of source defined by *firstChar* and *numChars*<!-- END REF -->.

The *firstChar* parameter points to the first character in the string to return, and *numChars* specifies how many characters to return.

If *firstChar* plus *numChars* is greater than the number of characters in the string, or if *numChars* is not specified, `substring` returns the last character(s) in the string, starting with the character specified by *firstChar*. If *firstChar* is greater than the number of characters in the string, `substring` returns an empty string ("").

:::caution

When you use this command in a multi-style context, you need to convert any Window end-of-line characters ('\r\n') into single ('\r') characters in order for processing to be valid. This is due to the mechanism which normalizes Qodly line endings to ensure multi-platform compatibility for texts.

:::

#### Example

```qs
 var vsResult : string
 vsResult = substring("08/04/62",4,2) // "04"
 vsResult = substring("Emergency",1,6) // "Emerge"
 vsResult = substring(var,2) // all characters except the first
```


#### See also

[`position`](#position)
