---
id: Transporter
title: Transporter Class
---

## Description

<!-- REF transporter.acceptUnsecureConnection.Desc -->
## .acceptUnsecureConnection


<!-- REF #transporter.acceptUnsecureConnection.Syntax -->**.acceptUnsecureConnection** : boolean<!-- END REF -->

#### Description

The `.acceptUnsecureConnection` property contains <!-- REF #transporter.acceptUnsecureConnection.Summary -->**true** if Qodly is allowed to establish an unencrypted connection<!-- END REF --> when encrypted connection is not possible.

It contains **false** if unencrypted connections are unallowed, in which case an error in returned when encrypted connection is not possible.

Available secured ports are:

- SMTP
  - 465: SMTPS
  - 587 or 25: SMTP with STARTTLS upgrade if supported by the server.

- IMAP
  - 143: IMAP non-encrypted port
  - 993: IMAP with STARTTLS upgrade if supported by the server

- POP3
  - 110: POP3 non-encrypted port
  - 995: POP3 with STARTTLS upgrade if supported by the server.
<!-- END REF -->

---

<!-- REF transporter.authenticationModeIMAP.Desc -->
## .authenticationMode

<!-- REF #transporter.authenticationMode.Syntax -->**.authenticationMode** : string<!-- END REF -->

#### Description

The `.authenticationMode` property contains <!-- REF #transporter.authenticationMode.Summary -->the authentication mode used to open the session on the mail server<!-- END REF -->.

By default, the most secured mode supported by the server is used.

Possible values are:

|Value|Constants|Comment|
|---|---|---|
|CRAM-MD5|`kIMAPAuthenticationCRAMMD5`|Authentication using CRAM-MD5 protocol|
|LOGIN|`kIMAPAuthenticationLogin`|Authentication using LOGIN protocol|
|OAUTH2|`kIMAPAuthenticationOAUTH2`|Authentication using OAuth2 protocol|
|PLAIN|`kIMAPAuthenticationPlain`|Authentication using PLAIN protocol|

<!-- END REF -->

---

<!-- REF transporter.authenticationModePOP3.Desc -->
## .authenticationMode

**.authenticationMode** : string

#### Description

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server.

By default, the most secured mode supported by the server is used.

Possible values are:

|Value|Constants|Comment|
|---|---|---|
|APOP|`kPOP3AuthenticationAPOP`|Authentication using APOP protocol (POP3 only)|
|CRAM-MD5|`kPOP3AuthenticationCRAMMD5`|Authentication using CRAM-MD5 protocol|
|LOGIN|`kPOP3AuthenticationLogin`|Authentication using LOGIN protocol|
|OAUTH2|`kPOP3AuthenticationOAUTH2`|Authentication using OAuth2 protocol|
|PLAIN|`kPOP3AuthenticationPlain`|Authentication using PLAIN protocol|

<!-- END REF -->

---

<!-- REF transporter.authenticationModeSMTP.Desc -->
## .authenticationMode


**.authenticationMode** : string

#### Description

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server.

By default, the most secured mode supported by the server is used.

Possible values are:

|Value|Constants|Comment|
|---|---|---|
|CRAM-MD5|`kSMTPAuthenticationCRAMMD`|Authentication using CRAM-MD5 protocol|
|LOGIN|`kSMTPAuthenticationLogin`|Authentication using LOGIN protocol|
|OAUTH2|`kSMTPAuthenticationOAUTH2`|Authentication using OAuth2 protocol|
|PLAIN|`kSMTPAuthenticationPlain`|Authentication using PLAIN protocol|

<!-- END REF -->

---

<!-- REF transporter.bodyCharset.Desc -->
## .bodyCharset

<!-- REF #transporter.bodyCharset.Syntax -->**.bodyCharset** : string<!-- END REF -->

#### Description

The `.bodyCharset` property contains <!-- REF #transporter.bodyCharset.Summary -->  the charset and encoding used for the body part of the email<!-- END REF -->.

**Possible values:**

|Constant| Value| Comment|
|---|---|---|
|mail mode ISO2022JP| US-ASCII_ISO-2022-JP_UTF8_QP |<li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li>|
|mail mode ISO88591 |ISO-8859-1 |<li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li>|
|mail mode UTF8 |US-ASCII_UTF8_QP|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)|
|mail mode UTF8 in base64|US-ASCII_UTF8_B64|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64|

<!-- END REF -->

---

<!-- REF transporter.connectionTimeOut.Desc -->
## .connectionTimeOut


<!-- REF #transporter.connectionTimeOut.Syntax -->**.connectionTimeOut** : integer<!-- END REF -->

#### Description

The `.connectionTimeOut` property contains <!-- REF #transporter.connectionTimeOut.Summary -->the maximum wait time (in seconds) allowed to establish a connection to the server<!-- END REF -->. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.

<!-- END REF -->

---

<!-- REF transporter.headerCharset.Desc -->
## .headerCharset

<!-- REF #transporter.headerCharset.Syntax -->**.headerCharset** : string<!-- END REF -->

#### Description

The `.headerCharset` property contains <!-- REF #transporter.headerCharset.Summary --> the charset and encoding used for the email header<!-- END REF -->. The header includes the following parts of the email:

- subject,
- attachment filename(s),
- email name.

**Possible values:**

|Constant| Value| Comment|
|---|---|---|
|mail mode ISO2022JP| US-ASCII_ISO-2022-JP_UTF8_QP |<li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li>|
|mail mode ISO88591 |ISO-8859-1 |<li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li>|
|mail mode UTF8 |US-ASCII_UTF8_QP|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (default value)|
|mail mode UTF8 in base64| US-ASCII_UTF8_B64|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64|

<!-- END REF -->

---

<!-- REF transporter.host.Desc -->
## .host


<!-- REF #transporter.host.Syntax -->**.host** : string<!-- END REF -->

#### Description

The `.host` property contains <!-- REF #transporter.host.Summary -->the name or the IP address of the host server<!-- END REF -->. Used for mail transactions (SMTP, POP3, IMAP).

<!-- END REF -->

---

<!-- REF transporter.logFile.Desc -->
## .logFile


<!-- REF #transporter.logFile.Syntax -->**.logFile** : string<!-- END REF -->

#### Description

The `.logFile` property contains <!-- REF #transporter.logFile.Summary -->the path of the extended log file defined (if any) for the mail connection<!-- END REF -->. 
<!-- END REF -->

---

<!-- REF transporter.port.Desc -->
## .port

<!-- REF #transporter.port.Syntax -->**.port** : integer<!-- END REF -->

#### Description

The `.port` property contains <!-- REF #transporter.port.Summary --> the port number used for mail transactions<!-- END REF -->. By default, if the *port* property has not been set in the *server* object (used to create the transporter object), the port used is:

- **SMTP** - 587
- **POP3** - 995
- **IMAP** - 993

<!-- END REF -->

---

<!-- REF transporter.sendTimeOut.Desc -->
## .sendTimeOut

<!-- REF #transporter.sendTimeOut.Syntax -->**.sendTimeOut** : integer<!-- END REF -->

#### Description

The `.sendTimeOut` property contains <!-- REF #transporter.sendTimeOut.Summary --> the maximum wait time (in seconds) of a call to `.send()` before a timeout occurs<!-- END REF -->. By default, if the `.sendTimeOut` property has not been set in the `server` object, the value 100 is used.

<!-- END REF -->

---

<!-- REF transporter.user.Desc -->
## .user

<!-- REF #transporter.user.Syntax -->**.user** : string<!-- END REF -->

#### Description

The `.user` property contains <!-- REF #transporter.user.Summary --> the user name used for authentication on the mail server<!-- END REF -->.

<!-- END REF -->

---

<!-- REF transporter.checkConnection().Desc -->
## .checkConnection()


<!-- REF #transporter.checkConnection().Syntax -->**.checkConnection()** : object<!-- END REF -->


<!-- REF #transporter.checkConnection().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|&#8592;|Status of the transporter object connection|<!-- END REF -->

#### Description

The `.checkConnection()` function <!-- REF #transporter.checkConnection().Summary --> checks the connection using information stored in the transporter object<!-- END REF -->, recreates the connection if necessary, and returns the status. This function allows you to verify that the values provided by the user are valid and consistent.

#### Returned object

The function sends a request to the mail server and returns an object describing the mail status. This object can contain the following properties:

|Property||Type|Description|
|---|---|---|---|
|success||boolean|true if the check is successful, false otherwise|
|status||number|(SMTP only) Status code returned by the mail server (0 in case of an issue unrelated to the mail processing)|
|statusText| |text|Status message returned by the mail server, or last error returned in the Qodly error stack|
|errors ||collection|Qodly error stack (not returned if a mail server response is received)|
||\[ ].errCode|number|Qodly error code|
||\[ ].message|text|Description of the Qodly error|
||\[ ].componentSignature|text|Signature of the internal component which returned the error|

<!-- END REF -->
