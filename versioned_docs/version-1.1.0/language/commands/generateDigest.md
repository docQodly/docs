---
id: generateDigest
title: generateDigest
---



<!-- REF #_command_.generateDigest.Syntax -->**generateDigest** ( *param* : any , *algorithm* : integer \{, \*\}) : string<!-- END REF -->


<!-- REF #_command_.generateDigest.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|param|any|&#8594;|blob or string for which to get digest key|
|algorithm|integer|&#8594;|Algorithm used to return key: 0 = kMD5Digest, 1 = kSHA1Digest, 3 = kSHA256Digest, 4 = kSHA512Digest|
|*||&#8594;|Encode digest in Base64URL|
|Result|string|&#8592;|Value of digest key|<!-- END REF -->

#### Description

The `generateDigest` command <!-- REF #_command_.generateDigest.Summary -->returns the digest key of a blob or string after application of an encryption algorithm<!-- END REF -->.

Pass a string or blob variable in the *param* parameter. The `generateDigest` function returns the digest key as a string.

In the *algorithm* parameter, pass a value designating which hash function to use. Use one of the following constants, found in the Digest Type theme:

|Constant|Value|Comment|
|:----|:----|:----|
|k4DRESTDigest|2|Internal algorithm of Qodly.|
|kMD5Digest|0|Message Digest 5 algorithm. A series of 128 bits returned as a string of 32 hexadecimal characters.|
|kSHA1Digest|1|Secure Hash 1 algorithm. A series of 160 bits returned as a string of 40 hexadecimal characters.|
|kSHA256Digest|3|(SHA-2 family) SHA-256 is a series of 256 bits returned as a string of 64 hexadecimal characters.|
|kSHA512Digest|4|(SHA-2 family) SHA-512 is a series of 512 bits returned as a string of 128 hexadecimal characters.|

:::note

It is not recommended to use MD5 and SHA algorithms to handle passwords; if you need to check passwords, you are advised to use [`generatePasswordHash`](generatePasswordHash.md)
 and [`verifyPasswordHash`](verifyPasswordHash.md) commands.

:::

By default if the * parameter is omitted, the returned digest is encoded in hexadecimal. Pass the * parameter if you want it to be encoded in Base64URL.

The value returned for the same object is the same on all the platforms (macOS/Windows). The calculation is performed based on the representation in UTF-8 of the string passed in the parameter.

:::note

If you use the command with an empty string/blob, it does not return void but a string value (for example "d41d8cd98f00b204e9800998ecf8427e" for MD5).

:::

#### Example

These examples illustrate how to retrieve the digest key of a string:

```qs
 var key1, key2 : string
 key1 = generateDigest("The quick brown fox jumps over the lazy dog.",kMD5Digest)
  // key1 is "e4d909c290d0fb1ca068ffaddf22cbd0"
 key2 = generateDigest("The quick brown fox jumps over the lazy dog.",kSHA1Digest)
  // key2 is "408d94384216f890ff7a0c3528e8bed1e0b01621"

```

#### See also

[`base64Decode`](base64Decode.md)&nbsp; 
[`base64Encode`](base64Encode.md)&nbsp; 
[`generatePasswordHash`](generatePasswordHash.md)
