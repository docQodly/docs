---
id: convertToString
title: convertToString
---


<!-- REF #_command_.convertToString.Syntax -->**convertToString** ( *aBlob* : blob , *charSetString* : string ) : string<br/>**convertToString** ( *aBlob* : blob , *charSetInt* : integer ) : string<!-- END REF -->

<!-- REF #_command_.convertToString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aBlob|blob|->|blob containing text expressed in a specific character set|
|charSetString|string|->|Name of blob character set|
|charSetInt|integer|->|Number of blob character set|
|Result|string|<-|Contents of blob expressed in Qodly character set|
<!-- END REF -->

#### Description

The `convertToString` command <!-- REF #_command_.convertToString.Summary -->converts the text contained in the *aBlob* parameter and returns it in text expressed in the character set of Qodly<!-- END REF -->. Qodly uses the UTF-16 character set by default.

In *charSetString* or *charSetInt*, pass the character set of the text contained in *aBlob*, which will be used for the conversion. If the blob contains text copied from within Qodly, then the blob’s text is likely to be in the UTF-16 character set. You can pass a string providing the standard name of the character set, or one of its aliases (for example, “ISO-8859-1” or “UTF-8”), or its identifier (integer). For more information, please refer to the description of the [`convertFromString`](convertFromString.md) command.

`convertToString` supports Byte Order Marks (BOMs). If the character set specified is of the Unicode type (UTF-8, UTF-16 or UTF-32), Qodly attempts to identify a BOM among the first bytes received. If one is detected, it is filtered out of the result and Qodly uses the character set that it defines instead of the one specified.

#### See also

[`convertFromString`](convertFromString.md)
