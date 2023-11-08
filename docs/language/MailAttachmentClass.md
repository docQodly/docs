---
id: MailAttachmentClass
title: MailAttachment
---

Attachment objects allow referencing files within a [`Email`](EmailObjectClass.md) object. 


### Functions and properties

Attachment objects are created using the [`4D.MailAttachment.new()`](#4dmailattachmentnew) function. They provide the following functions and read-only properties:

||
|---|
|[<!-- INCLUDE #4D.MailAttachment.new().Syntax -->](#4dmailattachmentnew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.MailAttachment.new().Summary -->|
|[<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.cid.Summary -->|
|[<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.disposition.Summary -->|
|[<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.getContent().Summary -->|
|[<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.name.Summary -->|
|[<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.path.Summary -->|
|[<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.platformPath.Summary -->|
|[<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #MailAttachmentClass.type.Summary -->|


## 4D.MailAttachment.new()

<!-- REF #4D.MailAttachment.new().Syntax -->**4D.MailAttachment.new**( *file* : 4D.File { , *name* : string {, *cid* : string{ , *type* : string { , *disposition* : string } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { , *name* : string {, *cid* : string{ , *type* : string { , *disposition* :string } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : 4D.Blob { , *name* : string {, *cid* : string{ , *type* : string { , *disposition* :string } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *path* : string { , *name* : string {, *cid* : string{ , *type* : string { , *disposition* :string } } } } ) : 4D.MailAttachment<!-- END REF -->


<!-- REF #4D.MailAttachment.new().Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|file|4D.File|->|Attachment file|
|zipFile|4D.ZipFile|->|Attachment Zipfile|
|blob|4D.Blob|->|BLOB containing the attachment|
|path|string|->|Path of the attachment file|
|name|string|->|Name + extension used by the mail client to designate the attachment|
|cid|string|->|ID of attachment (HTML messages only), or " " if no cid is required|
|type|string|->|Value of the content-type header|
|disposition|string|->|Value of the content-disposition header: "inline" or "attachment".|
|Result|4D.MailAttachment|<-|Attachment object|<!-- END REF -->


#### Description

The `4D.MailAttachment.new` function <!-- REF #4D.MailAttachment.new().Summary -->allows you to create an attachment object that you can add to an [Email object](EmailObjectClass.md#email-object)<!-- END REF -->.

To define the attachment, you can use:

- a *file*, pass a `4D.File` object containing the attachment file.
- a *zipfile*, pass a `4D.ZipFile` object containing the attachment file.
- a *blob*, pass a `4D.Blob` object containing the attachment itself.
- a *path*, pass a **string** value containing the path of the attachment file, expressed with the system syntax. You can pass a full path name or a simple file name (in which case 4D will search for the file in the same directory as the project file).

The optional *name* parameter lets you pass the name and extension to be used by the mail client to designate the attachment. If *name* is omitted and:

*	you passed a file path, the name and extension of the file is used,
*	you passed a BLOB, a random name without extension is automatically generated.

The optional *cid* parameter lets you pass an internal ID for the attachment. This ID is the value of the `Content-Id` header, it will be used in HTML messages only. The cid associates the attachment with a reference defined in the message body using an HTML tag such as `\<img src = "cid:ID">`. This means that the contents of the attachment (e.g., a picture) should be displayed within the message on the mail client. The final result may vary depending on the mail client. You can pass an empty string in *cid* if you do not want to use this parameter.

You can use the optional *type* parameter to explicitly set the `content-type` of the attachment file. For example, you can pass a string defining a MIME type ("video/mpeg"). This content-type value will be set for the attachment, regardless of its extension. For more information about MIME types, please refer to the [MIME type page on Wikipedia](https://en.wikipedia.org/wiki/MIME).

By default, if the *type* parameter is omitted or contains an empty string, the `content-type` of the attachment file is based on its extension. The following rules are applied for the main MIME types:

|Extension|	Content Type|
|---|---|
|jpg, jpeg|	image/jpeg|
|png|	image/png|
|gif|	image/gif|
|pdf|	application/pdf|
|doc|	application/msword|
|xls|	application/vnd.ms-excel|
|ppt|	application/vnd.ms-powerpoint|
|zip|	application/zip|
|gz|	application/gzip|
|json|	application/json|
|js|	application/javascript|
|ps|	application/postscript|
|xml|	application/xml|
|htm, html|	text/html|
|mp3|	audio/mpeg|
|*other*|	application/octet-stream|

The optional *disposition* parameter lets you pass the `content-disposition` header of the attachment. You can pass one of the following constants:

|Constant|Value|Comment|
|---|---|---|
|kMailDispositionAttachment|"attachment"|Set the Content-disposition header value to "attachment", which means that the attachment file must be provided as a link in the message.|
|kMailDispositionInline|"inline"|Set the Content-disposition header value to "inline", which means that the attachment must be rendered within the message contents, at the "cid" location. The rendering depends on the mail client.|

By default, if the *disposition* parameter is omitted:

*	if the *cid* parameter is used, the `Content-disposition` header is set to "inline",
*	if the *cid* parameter is not passed or empty, the `Content-disposition` header is set to "attachment".

#### Example

You want to send an email with a file as an attachment and an image embedded in the HTML body:

```qs
var attachment : 4D.File
var email,server : object
var transporter : 4D.SMTPTransporter

attachment = file("/PACKAGE/Docs/cv-john-smith.pdf")

server = newObject
server.host = "smtp.mail.com"
server.user = "test_user@mail.com"
server.password = "p@ssw@rd"
transporter = 4D.SMTPTransporter.new(server)

email = newObject
email.from = "test_user@mail.com"
email.to = "test_user@mail.com"
email.subject = "This is a test message with attachments"

//add a link to download file
email.attachments = newCollection(4D.MailAttachment.new(attachment))
//insert an inline picture (use a cid)
email.attachments[1] = 4D.MailAttachment.new(file("/PACKAGE/Docs/photo.jpg"),"","Qodly")

email.htmlBody = "<html>"+\
"<body>Hello World!"+\
"<img src = 'cid:Qodly' >"+\
"</body>"+\
"</head>"+\
"</html>"

transporter.send(email) //send mail

```

## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : string<!-- END REF -->


#### Description

The `.cid` property contains <!-- REF #MailAttachmentClass.cid.Summary --> the ID of the attachment<!-- END REF -->. This property is used in HTML messages only. If this property is missing, the file is handled as a simple attachment (link).


## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : string<!-- END REF -->


#### Description

The `.disposition` property contains <!-- REF #MailAttachmentClass.disposition.Summary -->the value of the `Content-Disposition` header<!-- END REF -->. Two values are available:

*	"inline": the attachment is rendered within the message contents, at the "cid" location. The rendering depends on the mail client.
*	"attachment": the attachment is provided as a link in the message.


## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->**.getContent()** : 4D.Blob<!-- END REF -->


<!-- REF #MailAttachmentClass.getContent().Params -->
|Parameter|Type||Description|
|---|--- |:---:|------|
|Result|4D.Blob|<-|Content of the attachment|<!-- END REF -->


#### Description

The `.getContent()` function <!-- REF #MailAttachmentClass.getContent().Summary -->returns the contents of the attachment object in a `4D.Blob` object<!-- END REF -->. You can use this method with attachment objects received by the [`mailConvertFromMIME`](EmailObjectClass.md#mailconvertfrommime) command.



## .name

<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : string<!-- END REF -->


#### Description

The `.name` property contains <!-- REF #MailAttachmentClass.name.Summary -->the name and extension of the attachment<!-- END REF -->.  By default, it is the name of the file, unless another name was specified in the [`4D.MailAttachment.new()`](#4dmailattachmentnew) command.

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : string<!-- END REF -->


#### Description

The `.path` property contains <!-- REF #MailAttachmentClass.path.Summary -->the POSIX path of the attachment file, if it exists<!-- END REF -->.  


## .platformPath


<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : string<!-- END REF -->


#### Description

The `.platformPath` property returns <!-- REF #MailAttachmentClass.platformPath.Summary -->the path of the attachment file expressed with the current platform syntax<!-- END REF -->.


## .type

<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : string<!-- END REF -->


#### Description

The `.type` property contains <!-- REF #MailAttachmentClass.type.Summary -->the `content-type` of the attachment file<!-- END REF -->. If this type is not explicitly passed to the [`4D.MailAttachment.new()`](#4dmailattachmentnew) command, the `content-type` is based on its file extension.
