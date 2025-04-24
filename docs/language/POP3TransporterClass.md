---
id: POP3TransporterClass
title: POP3Transporter
---

The `POP3Transporter` class allows you to retrieve messages from a POP3 email server.

### Functions and properties

POP3 Transporter objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #4D.POP3Transporter.new().Syntax -->](#4dpop3transporternew)<br/><!-- INCLUDE #4D.POP3Transporter.new().Summary -->|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->|
|[<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<br/><!-- INCLUDE #transporter.checkConnection().Summary -->|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
|[<!-- INCLUDE #POP3TransporterClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #POP3TransporterClass.delete().Summary -->|
|[<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<br/><!-- INCLUDE #POP3TransporterClass.getBoxInfo().Summary -->|
|[<!-- INCLUDE #POP3TransporterClass.getMail().Syntax -->](#getmail)<br/><!-- INCLUDE #POP3TransporterClass.getMail().Summary -->|
|[<!-- INCLUDE #POP3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)<br/><!-- INCLUDE #POP3TransporterClass.getMailInfo().Summary -->|
|[<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)<br/><!-- INCLUDE #POP3TransporterClass.getMailInfoList().Summary -->|
|[<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<br/><!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Summary -->|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->|
|[<!-- INCLUDE #POP3TransporterClass.undeleteAll().Syntax -->](#undeleteall)<br/><!-- INCLUDE #POP3TransporterClass.undeleteAll().Summary -->|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->|



## 4D.POP3Transporter.new()

<!-- REF #4D.POP3Transporter.new().Syntax -->**4D.POP3Transporter.new**( *server* : object ) : 4D.POP3Transporter<!-- END REF -->


<!-- REF #4D.POP3Transporter.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|object|&#8594;|Mail server information|
|Result|4D.POP3Transporter|&#8592;|POP3 transporter object|
<!-- END REF -->

#### Description

The `4D.POP3Transporter.new()` function <!-- REF #4D.POP3Transporter.new().Summary -->configures a new POP3 connection<!-- END REF -->according to the *server* parameter and returns a new *[POP3 transporter](#functions-and-properties)* object. The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:

|*server*|Default value (if omitted)|
|---|---|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<br/><!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|false|
|.**accessTokenOAuth2**: string<br/>.**accessTokenOAuth2**: object<br/>string string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). |none|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<br/><!-- INCLUDE #transporter.authenticationMode.Summary -->|the most secure authentication mode supported by the server is used|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<br/><!-- INCLUDE #transporter.connectionTimeOut.Summary -->|30|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)<br/><!-- INCLUDE #transporter.host.Summary -->|*mandatory*
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<br/><!-- INCLUDE #transporter.logFile.Summary -->|none|
|**.password** : string<br/>User password for authentication on the server. |none|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)<br/><!-- INCLUDE #transporter.port.Summary -->|995|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)<br/><!-- INCLUDE #transporter.user.Summary -->|none|

#### Result

The function returns a **POP3 transporter object**. All returned properties are **read-only**.

:::note

The POP3 connection is automatically closed when the transporter object is destroyed.

:::

#### Example

```qs
var server : object
var transporter : 4D.POP3Transporter
var status : object
var info : string


server = newObject()
server.host = "pop.gmail.com" //Mandatory
server.port = 995
server.user = "qodly@gmail.com"
server.password = "XXXXXXXX"
server.logFile = "LogTest.txt" //log to save in the Logs folder

transporter = 4D.POP3Transporter.new(server)

status = transporter.checkConnection()
if(not(status.success))
  info = "An error occurred receiving the mail: "+status.statusText)
end
```



<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- INCLUDE transporter.authenticationModePOP3.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

#### Example

```qs
var options : object
var transporter : 4D.POP3Transporter
var status : object
var info : string

options = newObject()

options.host = "pop3.gmail.com"
options.user = "test@gmail.com"
options.password = "XXXXXXXX"

transporter = 4D.POP3Transporter.new(options)

status = transporter.checkConnection()
if(status.success)
  info = "POP3 connection check successful!"
else
  info = "Error: "+status.statusText
end
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

## .delete()

<!-- REF #POP3TransporterClass.delete().Syntax -->**.delete**( *msgNumber* : integer )<!-- END REF -->


<!-- REF #POP3TransporterClass.delete().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|integer|&#8594;|Number of the message to delete|
<!-- END REF -->

##### Description

The `.delete()` function <!-- REF #POP3TransporterClass.delete().Summary -->flags the *msgNumber* email for deletion from the POP3 server<!-- END REF -->.

In the *msgNumber* parameter, pass the number of the email to delete. This number is returned in the number property by the [`.getMailInfoList()`](#getmailinfolist) function.

Executing this function does not actually remove any email. The flagged email will be deleted from the POP3 server only when the `POP3_transporter` object is destroyed. The flag could be also be removed using the `.undeleteAll()` function.

:::note

If the current session unexpectedly terminates and the connection is closed (e.g., timeout, network failure, etc.), an error message is generated and messages marked for deletion will remain on the POP3 server.

:::

##### Example

```qs
var mailInfoList : collection
var mailInfo : object
var confirmed : boolean

mailInfoList = POP3_transporter.getMailInfoList()
forEach (mailInfo , mailInfoList)
  // Mark your mail as "to be deleted at the end of the session"
  POP3_transporter.delete(mailInfo.number)
end
  // Force the session closure to delete the mails marked for deletion

if(confirmed) //deletion is confirmed by a user
  POP3_transporter = null
else
  POP3_transporter.undeleteAll() //remove deletion flags
end
```

## .getBoxInfo()

<!-- REF #POP3TransporterClass.getBoxInfo().Syntax -->**.getBoxInfo()** : object<!-- END REF -->


<!-- REF #POP3TransporterClass.getBoxInfo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|&#8592;|boxInfo object|
<!-- END REF -->

##### Description

The `.getBoxInfo()` function <!-- REF #POP3TransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the mailbox designated by the `POP3 transporter` object<!-- END REF -->. This function allows you to retrieve information about the mailbox.

The `boxInfo` object returned contains the following properties:

|Property| Type| Description|
|---|---|---|
|mailCount| number| Number of messages in the mailbox|
|size| number| Message size in bytes|

##### Example

```qs
var server , boxinfo : object
var transporter : 4D.POP3Transporter
var info : string


server = newObject()
server.host = "pop.gmail.com" //Mandatory
server.port = 995
server.user = "qodly@gmail.com"
server.password = "XXXXXXXX"

transporter = 4D.POP3Transporter.new(server)

  //mailbox info
boxInfo = transporter.getBoxInfo()
info = "The mailbox contains "+string(boxInfo.mailCount)+" messages.")
```

## .getMail()

<!-- REF #POP3TransporterClass.getMail().Syntax -->**.getMail**( *msgNumber* : integer \{ ; *headerOnly* : boolean \} ) : object<!-- END REF -->


<!-- REF #POP3TransporterClass.getMail().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|integer|&#8594;|Number of the message in the list |
|headerOnly|boolean|&#8594;|True to download only the email headers (default is false) |
|Result|object|&#8592;|[Email object](EmailObjectClass)|
<!-- END REF -->

##### Description

The `.getMail()` function <!-- REF #POP3TransporterClass.getMail().Summary -->returns the `Email` object corresponding to the *msgNumber* in the mailbox designated by the [`POP3 transporter`](#functions-and-properties)<!-- END REF -->. This function allows you to locally handle the email contents.

Pass in *msgNumber* the number of the message to retrieve. This number is returned in the `number` property by the [`.getMailInfoList()`](#getmailinfolist) function.

Optionally, you can pass `true` in the *headerOnly* parameter to exclude the body parts from the returned `Email` object. Only headers properties ([`headers`](EmailObjectClass.md#headers), [`to`](EmailObjectClass.md#to), [`from`](EmailObjectClass.md#from)...) are then returned. This option allows you to optimize the downloading step when a lot of emails are on the server.   

:::note

The *headerOnly* option may not be supported by the server.

:::

The function returns Null if:

* *msgNumber* designates a non-existing message,
* the message was marked for deletion using [`.delete()`](#delete).

**Returned object**

`.getMail()` returns an [`Email` object](EmailObjectClass.md#properties).


##### Example

You want to know the sender of the first mail of the mailbox:

```qs
var server : object
var transporter : 4D.POP3Transporter
var mailInfo : collection
var sender : variant

server = newObject()
server.host = "pop.gmail.com" //Mandatory
server.port = 995
server.user = "qodly@gmail.com"
server.password = "XXXXXXXX"

transporter = 4D.POP3Transporter.new (server)

mailInfo = transporter.getMailInfoList()

sender = transporter.getMail(mailInfo[0].number).from
```

## .getMailInfo()


<!-- REF #POP3TransporterClass.getMailInfo().Syntax -->**.getMailInfo**( *msgNumber* : integer ) : object<!-- END REF -->


<!-- REF #POP3TransporterClass.getMailInfo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|integer|&#8594;|Number of the message in the list |
|Result|object|&#8592;|mailInfo object|
<!-- END REF -->

##### Description

The `.getMailInfo()` function <!-- REF #POP3TransporterClass.getMailInfo().Summary -->returns a `mailInfo` object corresponding  corresponding to the *msgNumber* in the mailbox designated by the `POP3 transporter`<!-- END REF -->. This function allows you to retrieve information about the email.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the "number" property by the [`.getMailInfoList()`](#getmailinfolist) function.

The `mailInfo` object returned contains the following properties:

|Property|Type|Description|
|---|---|---|
|size| number| Message size in bytes|
|id| string| Unique ID of the message |

The method returns **Null** if:

* *msgNumber* designates a non-existing message,
* the message was marked for deletion using [`.delete()`](#delete).

##### Example

```qs
var server , mailInfo : object
var mailNumber : integer
var transporter : 4D.POP3Transporter
var info : string

server.host = "pop.gmail.com" //Mandatory
server.port = 995
server.user = "qodly@gmail.com"
server.password:="XXXXXXXX"

transporter = 4D.POP3Transporter.new (server)

 //message info
mailInfo = transporter.getMailInfo(1) //get the first mail
if (mailInfo != null)
   info = "First mail size is:"+string(mailInfo.size)+" bytes."
end
```

## .getMailInfoList()


<!-- REF #POP3TransporterClass.getMailInfoList().Syntax -->**.getMailInfoList()** : collection<!-- END REF -->


<!-- REF #POP3TransporterClass.getMailInfoList().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|collection|&#8592;|Collection of `mailInfo` objects|
<!-- END REF -->

##### Description

The `.getMailInfoList()` function <!-- REF #POP3TransporterClass.getMailInfoList().Summary -->returns a collection of `mailInfo` objects describing all messages in the mailbox designated by the `POP3 transporter`<!-- END REF -->. This function allows you to locally manage the list of messages located on the POP3 mail server.

Each `mailInfo` object in the returned collection contains the following properties:

|Property| Type| Description|
|---|---|---|
|\[].size|number|Message size in bytes|
|\[].number|number|Message number|
|\[].id|string|Unique ID of the message (useful if you store the message locally)|

If the mailbox does not contain a message, an empty collection is returned.

#### number and ID properties

*number* is the number of a message in the mailbox at the time the `POP3_transporter` was created. The *number* property is not a static value in relation to any specific message and will change from session to session dependent on its relation to other messages in the mailbox at the time the session was opened. The numbers assigned to the messages are only valid during the lifetime of the `POP3_transporter` object. At the time the `POP3_transporter` is deleted any message marked for deletion will be removed. When the user logs back into the server, the current messages in the mailbox will be renumbered from 1 to x.

The *id* however is a unique number assigned to the message when it was received by the server. This number is calculated using the time and date that the message is received and is a value assigned by your POP3 server. Unfortunately, POP3 servers do not use the *id* as the primary reference to their messages. Throughout the POP3 sessions you will need to specify the *number* as the reference to messages on the server. Developers may need to take some care if developing solutions which bring references to messages into a database but leave the body of the message on the server.

##### Example

You want to know the total number and size of emails in the mailbox:

```qs
var server : object
var transporter : 4D.POP3Transporter
var mailInfo : collection
var vNum , vSize : integer
var info = string

server = newObject()
server.host = "pop.gmail.com" //Mandatory
server.port = 995
server.user = "qodly@gmail.com"
server.password = "XXXXXXXX"

transporter = 4D.POP3Transporter.new (server)

mailInfo = transporter.getMailInfoList()
vNum = mailInfo.length
vSize = mailInfo.sum("size")

info = "The mailbox contains "+string(vNum)+" message(s) for "+string(vSize)+" bytes.")
```

## .getMIMEAsBlob()

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : integer ) : Blob<!-- END REF -->


<!-- REF #POP3TransporterClass.getMIMEAsBlob().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|integer|&#8594; |Number of the message in the list|
|Result|blob|&#8592;|Blob of the MIME string returned from the mail server|
<!-- END REF -->

##### Description

The `.getMIMEAsBlob()` function <!-- REF #POP3TransporterClass.getMIMEAsBlob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* in the mailbox designated by the `POP3_transporter`<!-- END REF -->.

In *msgNumber*, pass the number of the message to retrieve. This number is returned in the "number" property by the [`.getMailInfoList()`](#getmailinfolist) function.

The function returns an empty BLOB if:

* *msgNumber* designates a non-existing message,
* the message was marked for deletion using [`.delete()`](#delete).

**Returned blob**

`.getMIMEAsBlob()` returns a `blob` which can be archived in a database or converted to an [`Email` object](EmailObjectClass.md#properties) with the [`MAIL Convert from MIME`](commands/mailConvertFromMIME.md) command.

##### Example

You want to know the total number and size of emails in the mailbox:

```qs
var server : object
var mailInfo : collection
var blob : blob
var transporter : 4D.POP3Transporter

server = newObject()
server.host = "pop.gmail.com" //Mandatory
server.port = 995
server.user = "qodly@gmail.com"
server.password = "XXXXXXXX"

transporter = 4D.POP3Transporter.new (server)

mailInfo = transporter.getMailInfoList()
blob = transporter.getMIMEAsBlob(mailInfo[0].number)
```

<!-- INCLUDE transporter.host.Desc -->

<!-- INCLUDE transporter.logFile.Desc -->

<!-- INCLUDE transporter.port.Desc -->

<!-- REF POP3TransporterClass.undeleteAll().Desc -->
## .undeleteAll()

<!-- REF #POP3TransporterClass.undeleteAll().Syntax -->**.undeleteAll()**<!-- END REF -->


<!-- REF #POP3TransporterClass.undeleteAll().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->

##### Description

The `.undeleteAll()` function <!-- REF #POP3TransporterClass.undeleteAll().Summary -->removes all delete flags set on the emails in the `POP3_transporter` object<!-- END REF -->.

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
