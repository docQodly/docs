---
id: base64Encode
title: base64Encode
---



<!-- REF #_command_.base64Encode.Syntax -->**base64Encode** ( *toEncode* : blob, string , *encoded* : blob, string {, \*} )<!-- END REF -->


<!-- REF #_command_.base64Encode.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|toEncode|blob, string|->|Value to encode|
|||<-|Encoded value (if encoded parameter omitted)|
|encoded|blob, string|<-|Encoded value|
|*||->|Encode in Base64URL format|<!-- END REF -->

#### Description

The `base64Encode` command <!-- REF #_command_.base64Encode.Summary --> encodes the string or blob value passed in the *toEncode* parameter in Base64 or Base64URL format<!-- END REF -->.

Base64 encoding modifies 8-bit coded data so that they do not keep more than 7 useful bits. This encoding is required, for example, for handling blobs using xml. Base64URL is an alernative encoding with a specific processing for URLs and filenames (see [rfc4648](#https://tools.ietf.org/html/rfc4648#section-5)).

Pass in *toEncode* a string or blob value to encode.

:::note

When you pass a string value, the command encodes the utf-8 representation of the string.

:::

If you pass the *encoded* parameter, it receives the encoded contents of *toEncode* as string or blob at the end of command execution. In this case, the *toEncode* parameter itself is not modified by the command.

If you omit the *encoded* parameter, the command directly modifies the *toEncode* parameter.

By default if the * parameter is omitted, the command uses a Base64 encoding. If you pass the * parameter, the command uses a Base64URL encoding.

#### See also

[`base64Decode`](base64Decode.md)<br/>
[`generateDigest`](generateDigest.md)
