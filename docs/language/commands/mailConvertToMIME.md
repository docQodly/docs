---
id: mailConvertToMIME
title: mailConvertToMIME
---


<!-- REF #_command_.mailConvertToMIME.Syntax -->**mailConvertToMIME**( *mail* : object { , *options* : object } ) : string<!-- END REF -->


<!-- REF #_command_.mailConvertToMIME.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mail|object|->|Email object|
|options|object|->|Charset and encoding mail options|
|Result|string|<-|Email object converted to MIME|
<!-- END REF -->

#### Description

The `mailConvertToMIME` command <!-- REF #_command_.mailConvertToMIME.Summary -->converts an email object into MIME string<!-- END REF -->. This command is called internally by `SMTP_transporter.send()` to format the email object before sending it. It can be used to analyze the MIME format of the object.

In *mail*, pass the content and the structure details of the email to convert. This includes information such as the email addresses (sender and recipient(s)), the message itself, and the type of display for the message.

> QodlyScript follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the email object.

In *options*, you can set a specific charset and encoding configuration for the mail. The following properties are available:

|Property| Type| Description|
|---|---|---|
|headerCharset| string|Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Possible values:<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>kMailModeUTF8</td><td>US-ASCII_UTF8_QP</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)</td></tr><tr><td>kMailModeUTF8InBase64</td><td>US-ASCII_UTF8_B64</td><td><i>headerCharset</i> & <i>bodyCharset</i>: US-ASCII if possible, otherwise UTF-8 & base64</td></tr></table>|
|bodyCharset| string| Charset and encoding used for the html and string body contents of the email. Possible values: Same as for headerCharset (see above)|

If the *options* parameter is omitted, the mail mode UTF8 configuration is used for header and body parts.

#### Example

```qs
var mail: object
var mime: string
mail = newObject

// Creation of a mail
mail.from = "tsales@massmarket.com"
mail.subject = "Terrific Sale! This week only!"
mail.stringBody = "string format email"
mail.htmlBody = "<html><body>HTML format email</body></html>"
mail.to = newcollection
mail.to.push(newObject("email","noreply@4d.com"))
mail.to.push(newObject("email","test@4d.com"))

// transform the mail object in MIME
mime = mailConvertToMIME(mail)

// Contents of mime:
// MIME-Version: 1.0
// Date: Thu, 15 Dec 2022 15:42:25 GMT
// Message-ID: <7CA5D25B2B5E0047A36F2E8CB30362E2>
// Sender: tsales@massmarket.com
// From: tsales@massmarket.com
// To: noreply@qodly.com
// To: test@qodly.com
// Content-Type: multipart/alternative, boundary = "E0AE5773D5E95245BBBD80DD0687E218"
// Subject: Terrific Sale! This week only!
//
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: string/plain, charset = "UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// string format email
// --E0AE5773D5E95245BBBD80DD0687E218
// Content-Type: string/html, charset = "UTF-8"
// Content-Transfer-Encoding: quoted-printable
//
// <html><body>HTML format email</body></html>
// --E0AE5773D5E95245BBBD80DD0687E218--
```

