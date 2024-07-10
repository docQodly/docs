---
id: EmailObjectClass
title: Email
---

Creating, sending or receiving emails in Qodly is done by handling an `Email` object.

`Email` objects are created when receiving mails through a *transporter* class function:

- IMAP - [`.getMail()`](IMAPTransporterClass.md#getmail) and [`.getMails()`](IMAPTransporterClass.md#getmails) functions to get emails from an IMAP server
- POP3 - [`.getMail()`](POP3TransporterClass.md#getmail) function to get an email from a POP3 server.

> You can also create a new, blank `Email` object by calling the `New object` command, and then fill it with [Email object properties](#email-object).

You send `Email` objects using the SMTP [`.send()`](SMTPTransporterClass.md#send) function.

[`mailConvertFromMIME`](commands/mailConvertFromMIME.md) and [`mailConvertToMIME`](commands/mailConvertToMIME.md) commands can be used to convert `Email` objects to and from MIME contents.


### Properties

`Email` objects provide the following properties:

> QodlyScript follows the [JMAP specification](https://jmap.io/spec-mail.html) to format the `Email` object.

||
|---|
|[<!-- INCLUDE #EmailobjectClass.attachments.Syntax -->](#attachments)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.attachments.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.bcc.Syntax -->](#bcc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.bcc.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.bodyStructure.Syntax -->](#bodystructure)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.bodyStructure.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.bodyValues.Syntax -->](#bodyvalues)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.bodyValues.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.cc.Syntax -->](#cc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.cc.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.comments.Syntax -->](#comments)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.comments.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.from.Syntax -->](#from)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.from.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.headers.Syntax -->](#headers)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.headers.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.htmlBody.Syntax -->](#htmlbody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.htmlBody.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.id.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.inReplyTo.Syntax -->](#inreplyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.inReplyTo.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.keywords.Syntax -->](#keywords)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.keywords.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.messageId.Syntax -->](#messageid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.messageId.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.receivedAt.Syntax -->](#receivedat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.receivedAt.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.references.Syntax -->](#references)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.references.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.replyTo.Syntax -->](#replyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.replyTo.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.sendAt.Syntax -->](#sendat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.sendAt.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.sender.Syntax -->](#sender)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.sender.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.size.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.subject.Syntax -->](#subject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.subject.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.stringBody.Syntax -->](#stringbody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.stringBody.Summary -->|
|[<!-- INCLUDE #EmailobjectClass.to.Syntax -->](#to)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EmailobjectClass.to.Summary -->|

### Email Addresses

All properties that contain email addresses ([`from`](#from), [`cc`](#cc), [`bcc`](#bcc), [`to`](#to), [`sender`](#sender), [`replyTo`](#replyto)) accept a value of string, object, or collection type.

#### String

- single email: "somebody@domain.com"
- single display name+email: "Somebody <somebody@domain.com>"
- several emails: "Somebody <somebody@domain.com>,me@home.org"

#### object

An object with two properties:

|Property|Type|Description|
|---|---|---|
|name|string|Display name (can be null)|
|email|string|Email address|

#### collection

A collection of address objects.

### Handling body part

The [`stringBody`](#stringbody) and [`htmlBody`](#htmlbody) properties are only used with the `SMTP.send()` function to allow sending simple mails. When both property are filled, the MIME content-type multipart/alternative is used. The email client should then recognize the multipart/alternative part and display the string part or html part as necessary.

[`bodyStructure`](#bodystructure) and [`bodyValues`](#bodyvalues) are used for `SMTP` when the [Email object](#email-object) is built from a MIME document, e.g. when generated by the `MAIL Convert from MIME` command. In this case, both `bodyStructure` and `bodyValues` properties must be passed together, and it is not recommended to use `stringBody` and `htmlBody`.

#### Example of bodyStructure and bodyValues objects

```json
"bodyStructure": {
  "type": "multipart/mixed",
  "subParts": [
    {
      "partId": "p0001",
      "type": "string/plain"
    },
    {
      "partId": "p0002",
      "type": "string/html"
    }
  ]
},
"bodyValues": {
  "p0001": {
    "value": "I have the most brilliant plan. Let me tell you all about it."
  },
  "p0002": {
    "value": "<!DOCTYPE html><html><head><title></title><style type = \"string/css\">div{font-size:16px}</style></head><body><div>I have the most brilliant plan. Let me tell you all about it.</div></body></html>"
  }
}
```



## .attachments

<!-- REF #EmailobjectClass.attachments.Syntax -->**.attachments** : collection<!-- END REF -->

#### Description

The `.attachments` property contains a <!-- REF #EmailobjectClass.attachments.Summary -->collection of `4D.MailAttachment` object(s)<!-- END REF -->.

Attachment objects are defined through the [`mailNewAttachment`](MailAttachmentClass#4dmailattachmentnew) command. Attachment objects have specific [properties and functions](MailAttachmentClass.md).

## .bcc

<!-- REF #EmailobjectClass.bcc.Syntax -->**.bcc** : string<br/>**.bcc** : object<br/>**.bcc** : collection<!-- END REF -->

#### Description

The `.bcc` property contains the <!-- REF #EmailobjectClass.bcc.Summary -->Blind Carbon Copy (BCC) hidden email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .bodyStructure

<!-- REF #EmailobjectClass.bodyStructure.Syntax -->**.bodyStructure** : object<!-- END REF -->

#### Description

The `.bodyStructure` property contains the <!-- REF #EmailobjectClass.bodyStructure.Summary -->*EmailBodyPart* object, i.e. the full MIME structure of the message body (optional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyStructure` object contains the following properties:

|Property|Type|Value|
|---|---|---|
|partID|string|Identifies the part uniquely within the email|
|type|string|(mandatory) Value of the Content-Type header field of the part|
|charset|string|Value of the charset parameter of the Content-Type header field|
|encoding|string|If `isEncodingProblem == true`, the Content-Transfer-Encoding value is added (by default undefined)|
|disposition|string|Value of the Content-Disposition header field of the part|
|language|collection of strings|List of language tags, as defined in [RFC3282](https://tools.ietf.org/html/rfc3282), in the Content-Language header field of the part, if present.|
|location|string|URI, as defined in [RFC2557](https://tools.ietf.org/html/rfc2557), in the Content-Location header field of the part, if present.|
|subParts|collection of objects|Body parts of each child (collection of *EmailBodyPart* objects)|
|headers|collection of objects|List of all header fields in the part, in the order they appear in the message (collection of *EmailHeader* objects, see [headers](#headers-) property)|

## .bodyValues

<!-- REF #EmailobjectClass.bodyValues.Syntax -->**.bodyValues** : object<!-- END REF -->

#### Description

The `.bodyValues` property contains the <!-- REF #EmailobjectClass.bodyValues.Summary -->*EmailBodyValue* object, containing an object for each *partID* of `bodyStructure` (optional)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

The `.bodyValues` object contains the following properties:

|Property|Type|Value|
|---|---|---|
|*partID*.value|string|Value of the body part|
|*partID*.isEncodingProblem|boolean|True if malformed sections are found while decoding the charset, or unknown charset, or unknown content transfer-encoding. False by default|

## .cc

<!-- REF #EmailobjectClass.cc.Syntax -->**.cc** : string<br/>**.cc** : object<br/>**.cc** : collection<!-- END REF -->

#### Description

The `.cc` property contains the <!-- REF #EmailobjectClass.cc.Summary -->Carbon Copy (CC) additional email recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.

## .comments

<!-- REF #EmailobjectClass.comments.Syntax -->**.comments** : string<!-- END REF -->

#### Description

The `.comments` property contains an <!-- REF #EmailobjectClass.comments.Summary -->additional comments header<!-- END REF -->.

Comments only appear within the header section of the message (keeping the message's body untouched).

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .from

<!-- REF #EmailobjectClass.from.Syntax -->**.from** : string<br/>**.from** : object<br/>**.from** : collection<!-- END REF -->

#### Description

The `.from` property contains the <!-- REF #EmailobjectClass.from.Summary -->originating [address(es)](#email-addresses) of the email<!-- END REF -->.

Each email you send out has both the [sender](#sender) and **from** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.

## .headers

<!-- REF #EmailobjectClass.headers.Syntax -->**.headers** : collection<!-- END REF -->

#### Description

The `.headers` property contains a <!-- REF #EmailobjectClass.headers.Summary -->collection of `EmailHeader` objects, in the order they appear in the message<!-- END REF -->. This property allows users to add extended (registered) headers or user-defined (not registered, starting with "X") headers.

> If an `EmailHeader` object property defines a header such as "from" or "cc" which is already set as a property at the mail level, the `EmailHeader` property is ignored.

Every object of the headers collection can contain the following properties:

|Property|Type|Value|
|---|---|---|
|[].name|string|(mandatory) Header field name as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322). If null or undefined, the header field is not added to the MIME header.|
|[].value|string|Header field values as defined in [RFC#5322](https://tools.ietf.org/html/rfc5322)|

## .htmlBody

<!-- REF #EmailobjectClass.htmlBody.Syntax -->**.htmlBody** : string<!-- END REF -->

#### Description

The `.htmlBody` property contains the <!-- REF #EmailobjectClass.htmlBody.Summary -->HTML representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

## .id

<!-- REF #EmailobjectClass.id.Syntax -->**.id** : string<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.id` property contains the <!-- REF #EmailobjectClass.id.Summary -->unique ID from the IMAP server<!-- END REF -->.

## .inReplyTo

<!-- REF #EmailobjectClass.inReplyTo.Syntax -->**.inReplyTo** : string<!-- END REF -->

#### Description

The `.inReplyTo` property contains the <!-- REF #EmailobjectClass.inReplyTo.Summary -->message identifier(s) of the original message(s) to which the current message is a reply<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .keywords

<!-- REF #EmailobjectClass.keywords.Syntax -->**.keywords** : object<!-- END REF -->

#### Description

The `.keywords` property contains a <!-- REF #EmailobjectClass.keywords.Summary -->set of keywords as an object, where each property name is a keyword and each value is true<!-- END REF -->.

This property is the "keywords" header (see [RFC#4021](https://tools.ietf.org/html/rfc4021)).

|Property|Type|Value|
|---|---|---|
|.*keyword*|boolean|Keyword to set (value must be true)|

Reserved keywords:
- draft - Indicates a message is a draft
- seen - Indicates a message has been read
- flagged - Indicates a message needs special attention (e.g., Urgent)
- answered - Indicates a message has been replied to
- deleted - Indicates a message to delete

#### Example

```qs
 mail.keywords["flagged"] = True
 mail.keywords["qodly"] = True
```

## .messageId

<!-- REF #EmailobjectClass.messageId.Syntax -->**.messageId** : string<!-- END REF -->

#### Description

The `.messageId` property contains a <!-- REF #EmailobjectClass.messageId.Summary -->message identifier header ("message-id")<!-- END REF -->.

This header is usually "lettersOrNumbers@domainname", e.g. "abcdef.123456@4d.com". This unique ID is used in particular on forums or public mailing lists. In general, mail servers automatically add this header to the messages they send.

## .receivedAt

<!-- REF #EmailobjectClass.receivedAt.Syntax -->**.receivedAt** : string<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.receivedAt` property contains the <!-- REF #EmailobjectClass.receivedAt.Summary -->timestamp of the email's arrival on the IMAP server in ISO 8601 UTC format (ex: 2020-09-13T16:11:53Z)<!-- END REF -->.

## .references

<!-- REF #EmailobjectClass.references.Syntax -->**.references** : collection<!-- END REF -->

#### Description

The `.references` property contains the <!-- REF #EmailobjectClass.references.Summary -->collection of all message-ids of messages in the preceding reply chain<!-- END REF -->.

For specific formatting requirements, please consult the [RFC#5322](https://tools.ietf.org/html/rfc5322).

## .replyTo

<!-- REF #EmailobjectClass.replyTo.Syntax -->**.replyTo** : string<br/>**.replyTo** : object<br/>**.replyTo** : collection<!-- END REF -->

#### Description

The `.replyTo` property contains the <!-- REF #EmailobjectClass.replyTo.Summary -->[addresse(s)](#email-addresses) for responses<!-- END REF -->.

## .sendAt

<!-- REF #EmailobjectClass.sendAt.Syntax -->**.sendAt** : string<!-- END REF -->

#### Description

The `.sendAt` property contains the <!-- REF #EmailobjectClass.sendAt.Summary -->Email timestamp in ISO 8601 UTC format<!-- END REF -->.

## .sender

<!-- REF #EmailobjectClass.sender.Syntax -->**.sender** : string<br/>**.sender** : object<br/>**.sender** : collection<!-- END REF -->

#### Description

The `.sender` property contains the <!-- REF #EmailobjectClass.sender.Summary -->email source [addresse(s)](#email-addresses) of the email<!-- END REF -->.

Each email you send out has both the **sender** and **[from](#from)** addresses:

- the sender domain is what the receiving email server gets when opening the session,
- the from address is what the recipient(s) will see.

For better deliverability, it is recommended to use the same from and sender addresses.

## .size

<!-- REF #EmailobjectClass.size.Syntax -->**.size** : integer<!-- END REF -->

#### Description

[IMAP transporter](IMAPTransporterClass.md) only.

The `.size` property contains the <!-- REF #EmailobjectClass.size.Summary -->size (expressed in bytes) of the Email object returned by the IMAP server<!-- END REF -->.

## .subject

<!-- REF #EmailobjectClass.subject.Syntax -->**.subject** : string<!-- END REF -->

#### Description

The `.subject` property contains the <!-- REF #EmailobjectClass.subject.Summary -->description of topic<!-- END REF -->.

## .stringBody

<!-- REF #EmailobjectClass.stringBody.Syntax -->**.stringBody** : string<!-- END REF -->

#### Description

The `.stringBody` property contains the <!-- REF #EmailobjectClass.stringBody.Summary -->Plain string representation of the email message (default charset is UTF-8) (optional, SMTP only)<!-- END REF -->. See [Handling body part](#handling-body-part) section.

## .to

<!-- REF #EmailobjectClass.to.Syntax -->**.to** : string<br/>**.to** : object<br/>**.to** : collection<!-- END REF -->

#### Description

The `.to` property contains the <!-- REF #EmailobjectClass.to.Summary -->primary recipient [addresse(s)](#email-addresses) of the email<!-- END REF -->.
