---
id: mailConvertFromMIME
title: mailConvertFromMIME
---


<!-- REF #_command_.mailConvertFromMIME.Syntax -->**mailConvertFromMIME**( *mimeblob* : blob ) : object&nbsp; **mailConvertFromMIME**( *mimestring* : string ) : object<!-- END REF -->


<!-- REF #_command_.mailConvertFromMIME.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mimeblob|blob |&#8594;|Email in MIME blob|
|mimestring| string|&#8594;|Email in MIME string|
|Result|object|&#8592;|Email object|
<!-- END REF -->

#### Description

The `mailConvertFromMIME` command <!-- REF #_command_.mailConvertFromMIME.Summary -->converts a MIME document into a valid email object<!-- END REF -->.

> QodlyScript follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the returned email object.

Pass in *mimeblob* or *mimestring* a valid MIME document to convert. It can be provided by any mail server or application. If the MIME comes from a file, it is recommended to use a blob parameter to avoid issues related to charset and line break conversions.

#### Returned object

`Email` object.

#### Example

You want to load a mail template saved as MIME in a string document and send an email:

```qs
var mime: blob
var transporter : 4D.SMTPTransporter
var mail,server,status: object

mime = file("/PACKAGE/Mails/templateMail.txt").getContent())

mail = mailConvertFromMIME(mime)
mail.to = "smith@mail.com"
mail.subject = "Hello world"

server = newObject
server.host = "smtp.gmail.com"
server.port = 465
server.user = "test@gmail.com"
server.password = "XXXX"

transporter = 4S.SMTPTransporter.new(server)
status = transporter.send(mail)
```
