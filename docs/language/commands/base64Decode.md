---
id: base64Decode
title: base64Decode
---


<!-- REF #_command_.base64Decode.Syntax -->**base64Decode** ( *toEncode* : blob, string , *encoded* : blob, string {, \*} )<!-- END REF -->


<!-- REF #_command_.base64Decode.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|toEncode|blob, string|->|Value to encode|
|||<-|Encoded value (if encoded parameter omitted)|
|encoded|blob, string|<-|Encoded value|
|*||->|Encode in Base64URL format|<!-- END REF -->

#### Description

The `base64Decode` command <!-- REF #_command_.base64Decode.Summary -->  decodes the string or blob value coded in Base64 or Base64URL format passed in the toDecode parameter<!-- END REF -->. For more information on Base64 and Base64URL formats, please refer to the [`base64Encode`](base64Encode.md) command description.

Pass in *toDecode* the Base64 or Base64URL encoded string or blob value to decode.

If you pass the *decoded* parameter, the command decodes the contents of *toDecode* in the *decoded* parameter -- the *toDecode* parameter is left untouched. If you omit the *decoded* parameter, the command directly modifies the contents of the *toDecode* parameter.

:::note

If a string variable is passed to receive what is decoded by the command, it receives the decoded bytes interpreted as utf-8.

:::

By default if the * parameter is omitted, the command uses a Base64 decoding. If you pass the * parameter, the command uses a Base64URL decoding.

If *toDecode* contains an invalid base64 contents, an empty string or blob value is returned.

#### Example

This example lets you transfer a picture via a blob:

```qs
 var sourceBlob, targetBlob : blob
 var mypicture : picture
 var base64Text : string
 mypicture = ds.People.get(1).photo
 pictureToBlob(mypicture,sourceBlob,".JPG")
 base64Decode(sourceBlob,base64Text) //Encoding of string
 // the binary is now available as character strings in base64Text

 base64Decode(base64Text,targetBlob) //Decoding of string
  // the binary encoded in base 64 is now available as a blob in blobTarget

```

#### See also

[`base64Encode`](base64Encode.md)<br/>
[`generateDigest`](generateDigest.md)
