---
id: SMTPTransporterClass
title: SMTPTransporter
---
The `SMTPTransporter` class allows you to configure SMTP connections and send emails.


### Functions and properties

SMTP Transporter objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #4D.SMTPTransporter.new().Syntax -->](#4dsmtptransporternew)<br/><!-- INCLUDE #4D.IMAPTransporter.new().Summary -->|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->|
|[<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->|
|[<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
|[<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->|
|[<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->|
|[<!-- INCLUDE #SMTPTransporterClass.send().Syntax -->](#send)<br/><!-- INCLUDE #SMTPTransporterClass.send().Summary -->|
|[<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->|


## 4D.SMTPTransporter.new()

<!-- REF #4D.SMTPTransporter.new().Syntax -->**4D.SMTPTransporter.new**( *server* : object ) : 4D.SMTPTransporter<!-- END REF -->


<!-- REF #4D.SMTPTransporter.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|object|->|Mail server information|
|Result|4D.SMTPTransporter|<-|SMTP transporter object|
<!-- END REF -->

#### Description

The `4D.SMTPTransporter.new()` function <!-- REF #4D.SMTPTransporter.new().Summary -->configures a new SMTP connection<!-- END REF --> according to the *server* parameter and returns a new *transporter* object. The returned transporter object will then usually be used to send emails.

:::note

This function does not open any connection to the SMTP server. The SMTP connection is actually opened when the [`.send()`](#send) function is executed.  

The SMTP connection is automatically closed:
- when the transporter object is destroyed if the [`keepAlive`](#keepalive) property is true (default),
- after each  [`.send()`](#send) function execution if the [`keepAlive`](#keepalive) property is set to false.

:::

In the *server* parameter, pass an object containing the following properties:

|*server*|Default value (if omitted)|
|---|---|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|False|
|.**accessTokenOAuth2**: string<br/>.**accessTokenOAuth2**: object<br/>Text string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in the *SMTP transporter* object.|none|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->|the most secure authentication mode supported by the server is used|
|[<!-- INCLUDE #transporter.bodyCharset.Syntax -->](#bodycharset)<br/><!-- INCLUDE #transporter.bodyCharset.Summary -->|`mail mode UTF8` (US-ASCII_UTF8_QP)|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->|30|
|[<!-- INCLUDE #transporter.headerCharset.Syntax -->](#headercharset)<br/><!-- INCLUDE #transporter.headerCharset.Summary -->|`mail mode UTF8` (US-ASCII_UTF8_QP)|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->|*mandatory*
|[<!-- INCLUDE #SMTPTransporterClass.keepAlive.Syntax -->](#keepalive)<br/><!-- INCLUDE #SMTPTransporterClass.keepAlive.Summary -->|True|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->|none|
|**password** : string<br/>User password for authentication on the server. Not returned in the *SMTP transporter* object.|none|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->|587|
|[<!-- INCLUDE #transporter.sendTimeOut.Syntax -->](#sendtimeout)<br/><!-- INCLUDE #transporter.sendTimeOut.Summary -->|100|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->|none|

#### Result

The function returns a **SMTP transporter object**. All returned properties are **read-only**.

#### Example

```qs
var server : object
var transporter : 4D.SMTPTransporter
var status : object
var info : string

server = newObject()
server.host = "smtp.gmail.com" //Mandatory
server.port = 465
server.user = "qodly@gmail.com"
server.password = "XXXX"
server.logFile = "LogTest.txt" //Log to save in the Logs folder

transporter = 4D.SMTPTransporter.new (server)

email = newObject()
email.subject = "my first mail"
email.from = "qodly@gmail.com"
email.to = "qodly@qodly.com , test@qodly.com"
email.stringBody = "Hello World"
email.htmlBody = "<h1>Hello World</h1><h4>'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'</h4>\
<p>There are many variations of passages of Lorem Ipsum available."\
+"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>"

status = transporter.send(email)
if(not(status.success))
  info = "An error occurred: "+status.message
end
```


<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModeSMTP.Desc -->

<!-- INCLUDE transporter.bodyCharset.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

For information about SMTP status codes, please refer to [this page](https://www.usps.org/info/smtp_status.html).

#### Example

```qs
var options : object
var transporter : 4D.SMTPTransporter
var info : string

options = newObject()

options.host = "smtp.gmail.com"
options.user = "test@gmail.com"
options.password = "XXXXXX"

transporter = 4D.SMTPTransporter.new (options)

status = transporter.checkConnection()
if(status.success == true)
    info = "SMTP connection check successful!"
else
    info = "Error # "+string(status.status) + ", " + status.statusText)
end
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- INCLUDE transporter.headerCharset.Desc -->

<!-- INCLUDE transporter.host.Desc -->

## .keepAlive

<!-- REF #SMTPTransporterClass.keepAlive.Syntax -->**.keepAlive** : boolean<!-- END REF -->

#### Description

The `.keepAlive` property contains <!-- REF #SMTPTransporterClass.keepAlive.Summary -->**true** if the SMTP connection must be kept alive until the `transporter` object is destroyed<!-- END REF -->, and **false** otherwise. By default, if the `keepAlive` property has not been set in the `server` object (used to create the `transporter` object), it is **true**.

The SMTP connection is automatically closed:

* when the `transporter` object is destroyed if the `.keepAlive` property is true,
* after each `.send()` function execution if the `.keepAlive` property is set to false.

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

## .send()

<!-- REF #SMTPTransporterClass.send().Syntax -->**.send**( *mail* : object ) : object<!-- END REF -->


<!-- REF #SMTPTransporterClass.send().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mail|object|->|[Email](EmailObjectClass.md#email-object) to send|
|Result|object|<-|SMTP status|
<!-- END REF -->

#### Description

The `.send()` function <!-- REF #SMTPTransporterClass.send().Summary -->sends the [*mail* object](EmailObjectClass.md) to the SMTP server defined in the `transporter` object and returns a status object<!-- END REF -->.

>The `transporter` object must have already been created using the [`4D.SMTPTransporter.new()`](#4dsmtptransporternew) constructor.

The function creates the SMTP connection if it is not already alive. If the `.keepAlive` property of the `transporter` object is **false**, the SMTP connection is automatically closed after the execution of `.send()`, otherwise it stays alive until the `transporter` object is destroyed. For more information, please refer to the [`4D.SMTPTransporter.new()`](#4dsmtptransporternew) constructor description.

In *mail*, pass a valid [`Email` object](EmailObjectClass.md) to send. The origination (where the email is coming from) and destination (one or more recipients) properties must be included, the remaining properties are optional.

#### Returned object

The function returns an object describing the SMTP status of the operation. This object can contain the following properties:

|Property|Type|Description|
|---|---|---|
|success|boolean|True if the send is successful, false otherwise|
|status|number|Status code returned by the SMTP server (0 in case of an issue unrelated to the mail processing)|
|statusText|string|Status message returned by the SMTP server|

In case of an issue unrelated to the SMTP processing (e.g. a mandatory property is missing in mail), Qodly generates an error [that you can intercept](basics/lang-errors.md).

In this case, the resulting status object contains the following values:

|Property|Value|
|---|---|
|success|false|
|status|0|
|statusText|"Failed to send email"|

<!-- INCLUDE transporter.sendTimeOut.Desc -->

<!-- INCLUDE transporter.user.Desc -->
