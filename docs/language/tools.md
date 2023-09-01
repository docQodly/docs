---
id: tools
title: Tools
---


## Tools Commands

||
|---|
|[<!-- INCLUDE #_command_.base64Encode.Syntax -->](#base64encode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.base64encode.Summary -->|
|[<!-- INCLUDE #_command_.base64Decode.Syntax -->](#base64decode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.base64Decode.Summary -->|
|[<!-- INCLUDE #_command_.generateUUID.Syntax -->](#generateuuid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.generateUUID.Summary -->|
|[<!-- INCLUDE #_command_.generateDigest.Syntax -->](#generatedigest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.generateDigest.Summary -->|
|[<!-- INCLUDE #_command_.generatePasswordHash.Syntax -->](#generatepasswordhash)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.generatePasswordHash.Summary -->|
|[<!-- INCLUDE #_command_.verifyPasswordHash.Syntax -->](#verifypasswordhash)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.verifyPasswordHash.Summary -->|


## base64Encode

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

Pass in *toEncode* a text or blob value to encode.

:::note 

When you pass a text value, the command encodes the utf-8 representation of the text.

:::

If you pass the *encoded* parameter, it receives the encoded contents of *toEncode* as text or blob at the end of command execution. In this case, the *toEncode* parameter itself is not modified by the command. 

If you omit the *encoded* parameter, the command directly modifies the *toEncode* parameter.

By default if the * parameter is omitted, the command uses a Base64 encoding. If you pass the * parameter, the command uses a Base64URL encoding.

#### See also

[`base64Decode`](#base64decode)<br/>
[`generateDigest`](#generatedigest)

## base64Decode

<!-- REF #_command_.base64Decode.Syntax -->**base64Decode** ( *toEncode* : blob, string , *encoded* : blob, string {, \*} )<!-- END REF -->


<!-- REF #_command_.base64Decode.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|toEncode|blob, string|->|Value to encode|
|||<-|Encoded value (if encoded parameter omitted)|
|encoded|blob, string|<-|Encoded value|
|*||->|Encode in Base64URL format|<!-- END REF -->

#### Description

The `base64Decode` command <!-- REF #_command_.base64Decode.Summary -->  decodes the text or blob value coded in Base64 or Base64URL format passed in the toDecode parameter<!-- END REF -->. For more information on Base64 and Base64URL formats, please refer to the [`base64Encode`](#base64encode) command description. 

Pass in *toDecode* the Base64 or Base64URL encoded text or blob value to decode. 

If you pass the *decoded* parameter, the command decodes the contents of *toDecode* in the *decoded* parameter -- the *toDecode* parameter is left untouched. If you omit the *decoded* parameter, the command directly modifies the contents of the *toDecode* parameter.

:::note

If a string variable is passed to receive what is decoded by the command, it receives the decoded bytes interpreted as utf-8.

:::

By default if the * parameter is omitted, the command uses a Base64 decoding. If you pass the * parameter, the command uses a Base64URL decoding.

If *toDecode* contains an invalid base64 contents, an empty string or blob value is returned. 

#### Example

This example lets you transfer a picture via a blob:

```qs

```

#### See also

[`base64Encode`](#base64encode)<br/>
[`generateDigest`](#generatedigest)

## generateUUID

<!-- REF #_command_.generateUUID.Syntax -->**generateUUID** : string<!-- END REF -->


<!-- REF #_command_.generateUUID.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|string|<-|New UUID as non-canonical text (32 characters)|<!-- END REF -->

#### Description

The `generateUUID` command <!-- REF #_command_.generateUUID.Summary -->returns a new 32-character UUID identifier in non-canonical form<!-- END REF -->.

An UUID is a 16-byte number (128 bits). It contains 32 hexadecimal characters. It can be expressed either in non-canonical form (series of 32 letters [A-F, a-f] and/or numbers [0-9], for example 550e8400e29b41d4a716446655440000) or in canonical form (groups of 8,4,4,4,12, for example 550e8400-e29b-41d4-a716-446655440000). 

#### Example

Generation of a UUID in a variable: 

```qs

```

## generateDigest

<!-- REF #_command_.generateDigest.Syntax -->**generateDigest** ( *param* : any , *algorithm* : integer {, \*}) : string<!-- END REF -->


<!-- REF #_command_.generateDigest.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|param|any|->|blob or string for which to get digest key|
|algorithm|integer|->|		Algorithm used to return key:
0 = MD5 Digest, 1 = SHA1 Digest, 2 = 4D digest, 3 = SHA-256 digest, 4 = SHA-512 digest|
|*||->|Encode digest in Base64URL|
|Result|string|<-|Value of digest key|<!-- END REF -->

#### Description

The `generateDigest` command <!-- REF #_command_.generateDigest.Summary -->returns the digest key of a blob or string after application of an encryption algorithm<!-- END REF -->. 

Pass a string or blob variable in the *param* parameter. The `generateDigest` function returns the digest key as a string.

In the *algorithm* parameter, pass a value designating which hash function to use. Use one of the following constants, found in the Digest Type theme:

|Constant|Value|Comment|
|:----|:----|:----|
|k4DRESTDigest|2|Internal algorithm of 4D, useful in the context of the On REST Authentication database method when you want to use your own list of users.|
|kMD5Digest|0|Message Digest 5 algorithm. A series of 128 bits returned as a string of 32 hexadecimal characters.|
|kSHA1Digest|1|Secure Hash 1 algorithm. A series of 160 bits returned as a string of 40 hexadecimal characters.|
|kSHA256Digest|3|(SHA-2 family) SHA-256 is a series of 256 bits returned as a string of 64 hexadecimal characters.|
|kSHA512Digest|4|(SHA-2 family) SHA-512 is a series of 512 bits returned as a string of 128 hexadecimal characters.|

:::note

It is not recommended to use MD5 and SHA algorithms to handle passwords; if you need to check passwords, you are advised to use [`generatePasswordHash`](#generatepasswordhash)
 and [`verifyPasswordHash`](#verifypasswordhash) commands.

:::

By default if the * parameter is omitted, the returned digest is encoded in hexadecimal. Pass the * parameter if you want it to be encoded in Base64URL. 

The value returned for the same object is the same on all the platforms (macOS/Windows). The calculation is performed based on the representation in UTF-8 of the text passed in the parameter. 

:::note

If you use the command with an empty string/blob, it does not return void but a string value (for example "d41d8cd98f00b204e9800998ecf8427e" for MD5).

:::

#### Example 1

This example compares two images using the MD5 algorithm:

```qs

```

#### Example 2

These examples illustrate how to retrieve the digest key of a string:

```qs

```

#### Example 3

This example only accepts the "admin" user with the password "123" that does not match a qodly user:

```qs

```

#### See also

[`base64Decode`](#base64decode)<br/>
[`base64Encode`](#base64encode)<br/>
[`generatePasswordHash`](#generatepasswordhash)

## generatePasswordHash

<!-- REF #_command_.generatePasswordHash.Syntax -->**generatePasswordHash** ( *password* : string , *options* : object ) : string <!-- END REF -->


<!-- REF #_command_.generatePasswordHash.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|password|string|->|The user's password. Only the first 72 characters are used|
|options|object|->|An object containing options|
|Result|string|<-|Returns the hashed password|<!-- END REF -->

#### Description

The `generatePasswordHash` function <!-- REF #_command_.generatePasswordHash.Summary --> returns a secure password hash generated by a cryptographic hash algorithm<!-- END REF -->. 

Pass a string value in the *password* parameter. The `generatePasswordHash` returns a hashed string for the password. Multiple passes of the same password will result in different hashed strings.

In the *options* object, pass the properties to use when generating the password hash. The available values are listed in the table below:

// table 

:::note

If either value in the *options* object is invalid, an error message and an empty string will be returned.

:::

##### Error management 

The following errors may be returned. You can review an error with the `onErrCall` command.

//table 

##### About bcrypt 

bcrypt is a password hashing function based on the Blowfish cipher. In addition to incorporating a salt to protect against rainbow table attacks, it's an adaptive function in which the iteration count can be increased to make it slower, so it remains resistant to brute-force attacks even with increasing computation power because it takes longer and becomes too time consuming and expensive.

#### Example

This example generates a password hash using bcrypt with a cost factor 4. 

```qs

 
```

:::caution  Reminder 

Multiple passes of the same password will result in different hashed strings. This is a standard behavior for algorithms such as bcrypt, since the best practice is to create a new, random salt for every hash. Refer to the [`verifyPasswordHash`](#verifypasswordhash) description for an example of how to check the passwords

:::

#### See also

[`generateDigest`](#generatedigest)<br/>
[`verifyPasswordHash`](#verifypasswordhash)

## verifyPasswordHash

<!-- REF #_command_.verifyPasswordHash.Syntax -->**verifyPasswordHash** ( *password* : string , *hash* : string ) : boolean <!-- END REF -->


<!-- REF #_command_.verifyPasswordHash.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|password|string|->|The user's password. Only the first 72 characters are used.|
|hash|object|->|A password hash.	|
|Result|boolean|<-|Returns TRUE if the password and hash match, otherwise returns FALSE.|<!-- END REF -->

#### Description

The `verifyPasswordHash` function <!-- REF #_command_.verifyPasswordHash.Summary --> verifies that the given *hash* matches the given *password*<!-- END REF -->.

This function compares *password* to a *hash* generated by [`generatePasswordHash`](#generatepasswordhash) function.

##### Error management 

The following errors may be returned. You can review an error with the `onErrCall` command.

//table

:::note  Reminder 

Only bcrypt algorithm is supported. If your hash was not generated using bcrypt, an error is returned. 

:::
 

#### Example

This example verifies a password hash previously created by [`generatePasswordHash`](#generatepasswordhash) and stored in a [Users] table with a newly entered password:

```qs

```

:::note
 
The password is never stored on disk, only the hash. Using a remote 4D application, the hash could be produced on the client side. If instead, you use a JavaScript (or similar) based front end, the best practice for security is to create the hash on the server side. Of course, you should use a TLS encrypted network connection for security, as this requires transferring the password over the network.

:::

#### See also

[`generatePasswordHash`](#generatepasswordhash)
