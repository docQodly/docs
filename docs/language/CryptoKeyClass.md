---
id: CryptoKeyClass
title: CryptoKey
---


The `CryptoKey` class in QodlyScript encapsulates an asymmetric encryption key pair.

This class is available from the `4D` class store.

### Example

The following sample code signs and verifies a message using a new ECDSA key pair, for example in order to make a ES256 JSON Web token.

```qs
 // Generate a new ECDSA key pair
var key : 4D.CryptoKey
key=4D.CryptoKey.new(newobject("type","ECDSA","curve","prime256v1"))

  // Get signature as base64
var message, signature : string
message="hello world"
signature=key.sign(message,newobject("hash","SHA256"))

  // Verify signature
var status : object
status=key.verify(message,signature,newobject("hash","SHA256"))
assert(status.success)
```

### Functions and properties

||
|---|
|[<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.CryptoKey.new().Summary -->|
|[<!-- INCLUDE #CryptoKey.curve.Syntax -->](#curve)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.curve.Summary --> |
|[<!-- INCLUDE #CryptoKey.decrypt().Syntax -->](#decrypt)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.decrypt().Summary -->|
|[<!-- INCLUDE #CryptoKey.encrypt().Syntax -->](#encrypt)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.encrypt().Summary -->|
|[<!-- INCLUDE #CryptoKey.getPrivateKey().Syntax -->](#getprivatekey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPrivateKey().Summary -->|
|[<!-- INCLUDE #CryptoKey.getPublicKey().Syntax -->](#getpublickey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPublicKey().Summary -->|
|[<!-- INCLUDE #CryptoKey.sign().Syntax -->](#sign)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.sign().Summary --> |
|[<!-- INCLUDE #CryptoKey.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.size.Summary --> |
|[<!-- INCLUDE #CryptoKey.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.type.Summary --> |
|[<!-- INCLUDE #CryptoKey.verify().Syntax -->](#verify)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.verify().Summary -->|

## 4D.CryptoKey.new()


<!-- REF #4D.CryptoKey.new().Syntax -->
**4D.CryptoKey.new**( *settings* : object ) : 4D.CryptoKey<!-- END REF -->


<!-- REF #4D.CryptoKey.new().Params -->
|Parameter|Type||Description|
|---|---|----|---|
|settings|object|->|Settings to generate or load a key pair|
|result|4D.CryptoKey|<-|object encapsulating an encryption key pair|<!-- END REF -->

The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the *settings* object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition.

#### *settings*

|Property|Type|Description|
|---|---|---|
|[type](#type)|string|Defines the type of the key to create: <li>"RSA": generates a RSA key pair, using [.size](#size) as size.</li><li>"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using [.curve](#curve) as curve. Note that ECDSA keys cannot be used for encryption but only for signature.</li><li>"PEM": loads a key pair definition in PEM format, using [.pem](#pem).</li>|
|[curve](#curve)|string|Name of ECDSA curve|
|[pem](#pem)|string|PEM definition of an encryption key to load|
|[size](#size)|integer|Size of RSA key in bits|


#### *CryptoKey*

The returned `CryptoKey` object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple processes simultaneously.

<!-- REF CryptoKey.curve -->
## .curve

<!-- REF #CryptoKey.curve.Syntax -->**.curve** : string<!-- END REF -->


Defined only for ECDSA keys: the <!-- REF #CryptoKey.curve.Summary -->normalised curve name of the key<!-- END REF -->. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.
<!-- END REF -->

<!-- REF CryptoKey.decrypt().Desc -->
## .decrypt()


<!-- REF #CryptoKey.decrypt().Syntax -->
**.decrypt**( *message* : string , *options* : object ) : object<!-- END REF -->


<!-- REF #CryptoKey.decrypt().Params -->
|Parameter|Type||Description|
|---|---|----|---|
|message|string|->|Message string to be decoded using `options.encodingEncrypted` and decrypted.|  
|options|object|->|Decoding options|
|Result|object|<-|Status|<!-- END REF -->

The `.decrypt()` function <!-- REF #CryptoKey.decrypt().Summary -->decrypts the *message* parameter using the **private** key<!-- END REF -->. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

|Property|Type|Description|
|---|---|---|
|hash|string|Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". |
|encodingEncrypted|string|Encoding used to convert the `message` parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". Default is "Base64".|
|encodingDecrypted|string|Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".|

#### *Result*

The function returns a status object with `success` property set to `true` if the *message* could be successfully decrypted.

|Property|Type|Description|
|---|---|---|
|success|boolean|True if the message has been successfully decrypted|
|result|string|Message decrypted and decoded using the `options.encodingDecrypted`|
|errors|collection|If `success` is `false`, may contain a collection of errors|

In case the *message* couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.
<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->
## .encrypt()


<!-- REF #CryptoKey.encrypt().Syntax -->
**.encrypt**( *message* : string , *options* : object ) : string<!-- END REF -->


<!-- REF #CryptoKey.encrypt().Params -->
|Parameter|Type||Description|
|---|---|----|---|
|message|string|->|Message string to be encoded using `options.encodingDecrypted` and encrypted.|  
|options|object|->|Encoding options|
|Result|string|<-|Message encrypted and encoded using the `options.encodingEncrypted`|<!-- END REF -->

The `.encrypt()` function <!-- REF #CryptoKey.encrypt().Summary -->encrypts the *message* parameter using the **public** key<!-- END REF -->. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

|Property|Type|Description|
|---|---|---|
|hash|string|Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". |
|encodingEncrypted|string|Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".|
|encodingDecrypted|string|Encoding used to convert the `message` parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".|

#### *Result*

The returned value is an encrypted message.
<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->
## .getPrivateKey()


<!-- REF #CryptoKey.getPrivateKey().Syntax -->
**.getPrivateKey**() : string<!-- END REF -->


<!-- REF #CryptoKey.getPrivateKey().Params -->
|Parameter|Type||Description|
|---|---|----|---|
|Result|string|<-|Private key in PEM format|<!-- END REF -->

The `.getPrivateKey()` function  <!-- REF #CryptoKey.getPrivateKey().Summary -->returns the private key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Result*


The returned value is the private key.
<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->
## .getPublicKey()


<!-- REF #CryptoKey.getPublicKey().Syntax -->
**.getPublicKey**() : string<!-- END REF -->


<!-- REF #CryptoKey.getPublicKey().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|Result|string|<-|Public key in PEM format|<!-- END REF -->

The `.getPublicKey()` function <!-- REF #CryptoKey.getPublicKey().Summary -->returns the public key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Result*

The returned value is the public key.
<!-- END REF -->

---
<!-- REF CryptoKey.pem.Desc -->
## .pem


<!-- REF #CryptoKey.pem.Syntax -->
**.pem** : string<!-- END REF -->


<!-- REF #CryptoKey.pem.Summary -->
PEM definition of an encryption key to load. If the key is a private key, the RSA or ECDSA public key will be deduced from it. <!-- END REF -->


<!-- REF CryptoKey.sign().Desc -->
## .sign()


<!-- REF #CryptoKey.sign().Syntax -->.**sign** (*message* : string , *options* : string) : string<!-- END REF -->


<!-- REF #CryptoKey.sign().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|message|string|->|Message string to sign|  
|options|object|->|Signing options|
|Result|string|<-|Signature in Base64 or Base64URL representation, depending on "encoding" option|<!-- END REF -->

The `.sign()` function <!-- REF #CryptoKey.sign().Summary -->signs the utf8 representation of a *message* string<!-- END REF --> using the `CryptoKey` object keys and provided *options*. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

The `CryptoKey` must contain a valid **private** key.

#### *options*

|Property|Type|Description|
|---|---|---|
|hash|string|Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size|
|encodingEncrypted|string|Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".|
|pss|boolean|Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when producing a JWT for PS@ algorithm|
|encoding|string|Representation to be used for result signature. Possible values: "Base64" or "Base64URL". Default is "Base64".|

#### *Result*

The utf8 representation of the *message* string.
<!-- END REF -->

<!-- REF CryptoKey.size -->
## .size
<!-- END REF -->


<!-- REF #CryptoKey.size.Syntax -->**.size** : integer<!-- END REF -->


Defined only for RSA keys: <!-- REF #CryptoKey.size.Summary -->the size of the key in bits<!-- END REF -->. Typically 2048 (default).

<!-- REF CryptoKey.type -->
## .type
<!-- END REF -->


<!-- REF #CryptoKey.type.Syntax -->**.type** : string<!-- END REF -->


Contains the <!-- REF #CryptoKey.type.Summary -->name of the key type - "RSA", "ECDSA", "PEM" <!-- END REF -->. 


- "RSA": an RSA key pair, using `settings.size` as [.size](#size).
- "ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). Note that ECDSA keys cannot be used for encryption but only for signature.
- "PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).



<!-- REF CryptoKey.verify().Desc -->
## .verify()


<!-- REF #CryptoKey.verify().Syntax -->
**.verify**( *message* : string , *signature* : string , *options* : object) : object<!-- END REF -->


<!-- REF #CryptoKey.verify().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|message|string|->|Message string that was used to produce the signature|  
|signature|string|->|Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value|
|options|object|->|Signing options|
|Result|object|<-|Status of the verification|<!-- END REF -->


The `.verify()` function <!-- REF #CryptoKey.verify().Summary -->verifies the base64 signature against the utf8 representation of *message*<!-- END REF --> using the `CryptoKey` object keys and provided *options*.

The `CryptoKey` must contain a valid **public** key.

#### *options*

|Property|Type|Description|
|---|---|---|
|hash|text|Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size|
|pss|boolean|Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when verifying a JWT for PS@ algorithm|
|encoding|text|Representation of provided signature. Possible values are "Base64" or "Base64URL". Default is "Base64".

#### *Result*

The function returns a status object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same *message*, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

|Property|Type|Description|
|---|---|---|
|success|boolean|True if the signature matches the message|
|errors|collection|If `success` is `false`, may contain a collection of errors|<!-- END REF -->
