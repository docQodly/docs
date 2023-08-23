---
id: IMAPTransporterClass
title: IMAPTransporter
---

The `IMAPTransporter` class allows you to retrieve messages from an IMAP email server.



### Functions and properties

4D.IMAPTransporter objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #4D.IMAPTransporter.new().Syntax -->](#4dimaptransporternew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.IMAPTransporter.new().Summary -->|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.addFlags().Syntax -->](#addflags)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.addFlags().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.append().Syntax -->](#append)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.append().Summary -->|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
|[<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.copy().Syntax -->](#copy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.copy().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.createBox().Syntax -->](#createbox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.createBox().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.delete().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.deleteBox().Syntax -->](#deletebox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.deleteBox().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.expunge().Syntax -->](#expunge)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.expunge().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Syntax -->](#getboxinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxInfo().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getBoxList().Syntax -->](#getboxlist)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getBoxList().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Syntax -->](#getdelimiter)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getDelimiter().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getMail().Syntax -->](#getmail)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMail().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getMails().Syntax -->](#getmails)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMails().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.getMIMEAsblob().Syntax -->](#getmimeasblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.getMIMEAsblob().Summary -->|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.move().Syntax -->](#move)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.move().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.numToID().Syntax -->](#numtoid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.numToID().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.removeFlags().Syntax -->](#removeflags)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.removeFlags().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.renameBox().Syntax -->](#renamebox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.renameBox().Summary -->|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.searchMails().Syntax -->](#searchmails)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.searchMails().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.selectBox().Syntax -->](#selectbox)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.selectBox().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.subscribe().Syntax -->](#subscribe)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.subscribe().Summary -->|
|[<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Syntax -->](#unsubscribe)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #IMAPTransporterClass.unsubscribe().Summary -->|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|


## 4D.IMAPTransporter.new()

<!-- REF #4D.IMAPTransporter.new().Syntax -->**4D.IMAPTransporter.new**( *server* : object ) : 4D.IMAPTransporter<!-- END REF -->


<!-- REF #4D.IMAPTransporter.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|server|object|->|Mail server information|
|Result|4D.IMAPTransporter|<-|IMAP transporter object|<!-- END REF -->

#### Description

The `4D.IMAPTransporter.new()` function <!-- REF #4D.IMAPTransporter.new().Summary -->configures a new IMAP connection<!-- END REF --> according to the *server* parameter and returns a new *transporter* object. The returned transporter object will then usually be used to receive emails.

In the *server* parameter, pass an object containing the following properties:

|*server*|Default value (if omitted)|
|---|---|
|[<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp,&nbsp,&nbsp,&nbsp,<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|False|
|.**accessTokenOAuth2**: string<br/>.**accessTokenOAuth2**: object<br/>string string or token object representing OAuth2 authorization credentials. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in the `IMAP transporter` object.|none|
|[<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode) - <!-- INCLUDE #transporter.authenticationMode.Summary -->|the most secure authentication mode supported by the server is used|
|[<!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Syntax -->](#checkconnectiondelay) - <!-- INCLUDE #IMAPTransporterClass.checkConnectionDelay.Summary -->|300|
|[<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout) - <!-- INCLUDE #transporter.connectionTimeOut.Summary -->|30|
|[<!-- INCLUDE #transporter.host.Syntax -->](#host) - <!-- INCLUDE #transporter.host.Summary -->|*mandatory*
|[<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile) - <!-- INCLUDE #transporter.logFile.Summary -->|none|
|.**password** : string<br/>User password for authentication on the server. Not returned in the `IMAP transporter` object.|none|
|[<!-- INCLUDE #transporter.port.Syntax -->](#port) - <!-- INCLUDE #transporter.port.Summary -->|993|
|[<!-- INCLUDE #transporter.user.Syntax -->](#user) - <!-- INCLUDE #transporter.user.Summary -->|none|

>**Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

#### Result

The function returns an [**IMAP transporter object**](#imap-transporter-object). All returned properties are **read-only**.

>The IMAP connection is automatically closed when the transporter object is destroyed.

#### Example

```qs
server=newObject
server.host="imap.gmail.com" //Mandatory
server.port=993
server.user="qodly@gmail.com"
server.password="XXXXXXXX"
server.logFile="LogTest.txt" //log to save in the Logs folder

var transporter : 4D.IMAPTransporter
var status : object
var info : string
transporter=4D.IMAPTransporter.new(server)

status=transporter.checkConnection()
if(not(status.success))
   info="An error occurred: "+status.statusstring
end
```


<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->

<!-- REF IMAPTransporterClass.addFlags().Desc -->
## .addFlags()


<!-- REF #IMAPTransporterClass.addFlags().Syntax -->**.addFlags**( *msgIDs* : collection , *keywords* :  object ) : object<br/>**.addFlags**( *msgIDs* : string , *keywords* :  object ) : object<br/>**.addFlags**( *msgIDs* : integer  , *keywords* :  object ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.addFlags().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgIDs|collection|->|Collection of strings: Message unique IDs (string)|
|msgIDs|string| Unique ID of a message|
|msgIDs|integer|kIMAPAll: All messages in the selected mailbox|
|keywords|object|->|Keyword flags to add|
|Result|object|<-|Status of the addFlags operation|<!-- END REF -->

#### Description

The `.addFlags()` function <!-- REF #IMAPTransporterClass.addFlags().Summary -->adds flags to the *msgIDs* for the specified `keywords`<!-- END REF -->.

In the *msgIDs* parameter, you can pass either:

* a *collection* containing the unique IDs of specific messages or
* the unique ID (*string*) of a single message or
* the following constant (*integer*) for all messages in the selected mailbox:

 |Constant |Value |Comment|
 |---|---|---|
 |kIMAPAll |1 |Select all messages in the selected mailbox|

The *keywords* parameter lets you define the flags to add to *msgIDs*. You can use the following standard flags as well as custom flags (custom flags support depends on the server implementation):

|Property|Type|Description|
|---|---|---|
|$draft |boolean |true to add the "draft" flag to the message |
|$seen |boolean  |true to add the "seen" flag to the message|
|$flagged |boolean  |true to add the "flagged" flag to the message|
|$answered |boolean  |true to add the "answered" flag to the message|
|$deleted |boolean | true to add the "deleted" flag to the message|
|`<custom flag>` |boolean | true to add the custom flag to the message|

The custom flags names must respect this rule: the keyword must be a case-insensitive string excluding control chars and space and can not include any of these characters: `( ) { ] % * " \`

>* For a keyword to be taken into account it has to be true.
>* The interpretation of keyword flags may vary per mail client.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|Qodly error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example

```qs
var transporter : 4D.IMAPTransporter
var options,boxInfo,status : object

options=newObject
options.host="imap.gmail.com"
options.port=993
options.user="qodly@gmail.com"
options.password="xxxxx"

// Create transporter
transporter=4D.IMAPTransporter.new(options)

// Select mailbox
boxInfo=transporter.selectBox("INBOX")

// Mark all messages from INBOX as read/seen
flags=newObject
flags["$seen"]=true
status=transporter.addFlags(kIMAPAll,flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.append().Desc -->
## .append()


<!-- REF #IMAPTransporterClass.append().Syntax -->**.append**( *mailObj* : object , *destinationBox* : string , *options* : object ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.append().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|mailObj|object|->|Email object|
|destinationBox|string|->|Mailbox to receive Email object|
|options|object|->|object containing charset info |
|Result|object|<-|Status of the append operation|<!-- END REF -->

#### Description

The `.append()` function <!-- REF #IMAPTransporterClass.append().Summary -->appends a `mailObj` to the `destinationBox`<!-- END REF -->.

In the `mailObj` parameter, pass an Email object. For a comprehensive description of mail properties, see [Email object](EmailobjectClass.md#email-object). The `.append()` function supports keyword tags in the Email object's `keywords` attribute.

The optional `destinationBox` parameter lets you pass the name of a mailbox where the `mailObj` will be appended. If omitted, the current mailbox is used.

In the optional `options` parameter, you can pass an object to define the charset and encoding for specific parts of the email. Available properties:

|Property|Type|Description|
|---|---|---|
|headerCharset|string|Charset and encoding used for the following parts of the email: subject, attachment filenames, and email name attribute(s). Possible values: See possible charsets table below|
|bodyCharset|string|Charset and encoding used for the html and string body contents of the email. Possible values: See possible charsets table below |

Possible charsets:

|Constant|Value|Comment|
|---|---|---|
|kMailModeUTF8|US-ASCII_UTF8_QP|headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)|
|kMailModeUTF8InBase64|US-ASCII_UTF8_B64|headerCharset & bodyCharset: US-ASCII if possible, otherwise UTF-8 & base64|

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|Qodly error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example

To save an email in the Drafts mailbox:

```qs
var imap : 4D.IMAPTransporter
var settings, status, msg: object

settings=newObject("host", "domain.com", "user", "xxxx", "password", "xxxx", "port", 993)

imap=4D.IMAPTransporter.new(settings)

msg=newObject
msg.from="xxxx@domain.com"
msg.subject="Lorem Ipsum"
msg.stringBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
msg.keywords=newObject
msg.keywords["$seen"]=true //flag the message as read
msg.keywords["$draft"]=true //flag the message as a draft

status=imap.append(msg, "Drafts")
```

<!-- END REF -->

<!-- INCLUDE transporter.authenticationModeIMAP.Desc -->

<!-- INCLUDE transporter.checkConnection().Desc -->

<!-- REF #IMAPTransporterClass.checkConnectionDelay.Desc -->

## .checkConnectionDelay


<!-- REF #IMAPTransporterClass.checkConnectionDelay.Syntax -->**.checkConnectionDelay** : integer<!-- END REF -->

#### Description

The `.checkConnectionDelay` property contains <!-- REF #IMAPTransporterClass.checkConnectionDelay.Summary -->the maximum time (in seconds) allowed prior to checking the connection to the server<!-- END REF -->.  If this time is exceeded between two method calls, the connection to the server will be checked. By default, if the property has not been set in the *server* object, the value is 300.

>**Warning**: Make sure the defined timeout is lower than the server timeout, otherwise the client timeout will be useless.

<!-- END REF -->

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

<!-- REF IMAPTransporterClass.copy().Desc -->
## .copy()


<!-- REF #IMAPTransporterClass.copy().Syntax -->**.copy**( *msgsIDs* : collection , *destinationBox* : string ) : object<br/>**.copy**( *allMsgs* : integer , *destinationBox* : string ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.copy().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgsIDs|collection|->|Collection of message unique IDs (strings)|
|allMsgs|integer|->|`kIMAPAll`: All messages in the selected mailbox|
|destinationBox|string|->|Mailbox to receive copied messages|
|Result|object|<-|Status of the copy operation|<!-- END REF -->

#### Description

The `.copy()` function <!-- REF #IMAPTransporterClass.copy().Summary -->copies the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server<!-- END REF -->.

You can pass:

* in the *msgsIDs* parameter, a collection containing the unique IDs of the specific messages to copy, or
* in the *allMsgs* parameter, the `kIMAPAll` constant (integer) to copy all messages in the selected mailbox.

The *destinationBox* parameter allows you to pass a string value with the name of the mailbox where the copies of messages will be placed.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|Qodly error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example 1

To copy a selection of messages:

```qs
 var server,boxInfo,status : object
 var mailIds : collection
 var transporter : 4D.IMAPTransporter

 server=newObject
 server.host="imap.gmail.com" //Mandatory
 server.port=993
 server.user="qodly@gmail.com"
 server.password="XXXXXXXX"

 transporter=4D.IMAPTransporter.new(server)

  //select mailbox
 boxInfo=transporter.selectBox("inbox")

  //get collection of message unique IDs
 mailIds=transporter.searchMails("subject \"New feature:\"")

  // copy found messages to the "documents" mailbox
 status=transporter.copy(mailIds,"documents")
```

#### Example 2

To copy all messages in the current mailbox:

```qs
 var server,boxInfo,status : object
 var transporter : 4D.IMAPTransporter

 server=newObject
 server.host="imap.gmail.com" //Mandatory
 server.port=993
 server.user="qodly@gmail.com"
 server.password="XXXXXXXX"

 transporter=4D.IMAPTransporter.new(server)

  //select mailbox

 boxInfo=transporter.selectBox("inbox")

  // copy all messages to the "documents" mailbox
 status=transporter.copy(kIMAPAll,"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.createBox().Desc -->
## .createBox()


<!-- REF #IMAPTransporterClass.createBox().Syntax -->**.createBox**( *name* :  string ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.createBox().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|string|->|Name of the new mailbox|
|Result|object|<-|Status of the mailbox creation operation|<!-- END REF -->

#### Description

The `.createBox()` function <!-- REF #IMAPTransporterClass.createBox().Summary -->creates a mailbox with the given `name`<!-- END REF -->. If the IMAP server’s hierarchy separator character appears elsewhere in the mailbox name, the IMAP server will create any parent names needed to create the given mailbox.

In other words, an attempt to create "Projects/IMAP/Doc" on a server in which "/" is the hierarchy separator character will create:

* Only the "Doc" mailbox if "Projects" & "IMAP" already exist.
* "IMAP" & "Doc" mailboxes if only "Projects" already exists.
* "Projects" & "IMAP" & "Doc" mailboxes, if they do not already exist.

In the `name` parameter, pass the name of the new mailbox.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|Qodly error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example

To create a new "Invoices" mailbox:

```qs
 var info : string
 var transporter : 4D.IMAPTransporter
 var options, status : object

Options=newObject

options.host="imap.gmail.com"
options.user="test@gmail.com"
options.password="XXXX" 

transporter=4D.IMAPTransporter.new(options)

status=transporter.createBox("Invoices")

if(status.success)
	info="Mailbox creation successful!"
else
	info="Error: "+status.statusstring
end
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.delete().Desc -->
## .delete()

<!-- REF #IMAPTransporterClass.delete().Syntax -->**.delete**( *msgsIDs* : collection ) : object<br/>**.delete**( *msgsIDs* : integer ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.delete().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgsIDs|collection|->|collection of message unique IDs (strings)|
|msgsIDs|integer|->|`kIMAPAll`: All messages in the selected mailbox|
|Result|object|<-|Status of the delete operation|<!-- END REF -->

#### Description

The `.delete()` function <!-- REF #IMAPTransporterClass.delete().Summary -->sets the "deleted" flag for the messages defined in *msgsIDs*<!-- END REF -->.

In the *msgsIDs* parameter, you can pass:

* a collection containing the unique IDs of the specific messages to delete, or
* the `kIMAPAll` constant (integer) to delete all messages in the selected mailbox.

Executing this function does not actually remove messages. Messages with the "delete" flag can still be found by the [`.searchMails()`](#searchmails) function. Flagged messages are deleted from the IMAP server with the [`.expunge()`](#expunge) function or by selecting another mailbox or when the IMAP transporter object (created with [4D.IMAPTransporter.new](#imap-new-transporter)) is destroyed.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|Qodly error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example 1

To delete a selection of messages:

```qs
 var server,boxInfo,status : object
 var mailIds : collection
 var transporter : 4D.IMAPTransporter

 server=newObject
 server.host="imap.gmail.com" //Mandatory
 server.port=993
 server.user="qodly@gmail.com"
 server.password="XXXXXXXX"

 transporter=4D.IMAPTransporter.new(server)

  //select mailbox
 boxInfo=transporter.selectBox("Inbox")

  //get collection of message unique IDs
 mailIds=transporter.searchMails("subject \"Reports\"")

  // Delete selected messages
 status=transporter.delete(mailIds)
```

#### Example 2

To delete all messages in the current mailbox:

```qs
 var server,boxInfo,status : object
 var transporter : 4D.IMAPTransporter

 server=newObject
 server.host="imap.gmail.com" //Mandatory
 server.port=993
 server.user="qodly@gmail.com"
 server.password="XXXXXXXX"

 transporter=4D.IMAPTransporter.new(server)

  //select mailbox
 boxInfo=transporter.selectBox("Junk Email")

  // delete all messages in the current mailbox
 status=transporter.delete(kIMAPAll)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.deleteBox().Desc -->
## .deleteBox()


<!-- REF #IMAPTransporterClass.deleteBox().Syntax -->**.deleteBox**( *name* : string ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.deleteBox().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|string|->|Name of the mailbox to delete|
|Result|object|<-|Status of the mailbox deletion operation|<!-- END REF -->


#### Description

The `.deleteBox()` function <!-- REF #IMAPTransporterClass.deleteBox().Summary -->permanently removes the mailbox with the given *name* from the IMAP server<!-- END REF -->. Attempting to delete an INBOX or a mailbox that does not exist will generate an error.

In the *name* parameter, pass the name of the mailbox to delete.  

>* The function cannot delete a mailbox that has child mailboxes if the parent mailbox has the "\Noselect" attribute.
>* All messages in the deleted mailbox will also be deleted.
>* The ability to delete a mailbox depends on the mail server.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|Qodly error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example  

To delete the "Nova Orion Industries" child mailbox from the "Bills" mailbox hierarchy:

```qs
var pw, name, info : string
var options, status : object
var transporter : 4D.IMAPTransporter

options=newObject

pw="XXXXXX" //password

options.host="imap.gmail.com"
options.user="test@gmail.com"
options.password=pw

transporter=4D.IMAPTransporter.new(options)

// delete mailbox
name="Bills"+transporter.getDelimiter()+"Nova Orion Industries"
status=transporter.deleteBox(name)

if(status.success)
	info="Mailbox deletion successful!"
else
	info="Error: "+status.statusstring
end
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.expunge().Desc -->
## .expunge()

<!-- REF #IMAPTransporterClass.expunge().Syntax -->**.expunge**() : object<!-- END REF -->


<!-- REF IMAPTransporterClass.expunge().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Status of the expunge operation |<!-- END REF -->

#### Description

The `.expunge()` function <!-- REF #IMAPTransporterClass.expunge().Summary -->removes all messages with the "deleted" flag from the IMAP mail server.<!-- END REF --> The "deleted" flag can be set with the [`.delete()`](#delete) or [`.addFlags()`](#addflags) functions.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|Qodly error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example

```qs
var transporter : 4D.IMAPTransporter
var options,boxInfo,status : object
var ids : collection

options=newObject
options.host="imap.gmail.com"
options.port=993
options.user="qodly@gmail.com"
options.password="xxxxx"

// Create transporter
transporter=4D.IMAPTransporter.new(options)

// Select mailbox
boxInfo=transporter.selectBox("INBOX")

// Find and delete all seen messages in INBOX
ids=transporter.searchMails("SEEN")
status=transporter.delete(ids)

// Purge all messages flagged as deleted
status=transporter.expunge()
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxInfo().Desc -->

## .getBoxInfo()


<!-- REF #IMAPTransporterClass.getBoxInfo().Syntax -->**.getBoxInfo**({ *name* : string }) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.getBoxInfo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|string|->|Name of the mailbox|
|Result|object|<-|boxInfo object|<!-- END REF -->

#### Description

The `.getBoxInfo()` function <!-- REF #IMAPTransporterClass.getBoxInfo().Summary -->returns a `boxInfo` object corresponding to the current maibox, or the mailbox *name*<!-- END REF -->. This function returns the same information as [`.selectBox()`](#selectbox) without changing the current mailbox.

In the optional *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

If the mailbox *name* is not selectable or does not exist, the function generates an error and returns **null**.

**Returned object**

The `boxInfo` object returned contains the following properties:

|Property| Type| Description|
|---|---|---|
|name|string|Name of the mailbox
|mailCount| number| Number of messages in the mailbox|
|mailRecent| number| Number of messages with the "recent" flag (indicating new messages)|
|id| string| Unique id of the mailbox|

#### Example

```qs
 var transporter : 4D.IMAPTransporter
 var boxInfo : object
 var info : string
 transporter=4D.IMAPTransporter.new(server)

 boxInfo=transporter.getBoxInfo("INBOX")
 info="INBOX contains "+string(boxInfo.mailRecent)+" recent emails."
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getBoxList().Desc -->
## .getBoxList()


<!-- REF #IMAPTransporterClass.getBoxList().Syntax -->**.getBoxList**( { *parameters* : object } ) : collection<!-- END REF -->


<!-- REF #IMAPTransporterClass.getBoxList().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|parameters|object|->|Parameter object|
|Result|collection|<-|Collection of mailbox objects|<!-- END REF -->

#### Description

The `.getBoxList()` function <!-- REF #IMAPTransporterClass.getBoxList().Summary -->returns a collection of mailboxes describing all of the available mailboxes<!-- END REF -->. This function allows you to locally manage the list of messages located on the IMAP mail server.

In the optional *parameters* parameter, pass an object containing values to filter the returned mailboxes. You can pass:

|Property | Type| Description |
|---|---|---|
|isSubscribed|  boolean |<li>**true** to return only subscribed mailboxes</li><li> **false** to return all available mailboxes</li>|

#### Result

Each object of the returned collection contains the following properties:



|Property|  Type|Description |
|---|---|---|
|\[].name|string|Name of the mailbox |
|\[].selectable |boolean |Indicates whether or not the access rights allow the mailbox to be selected: <ul><li>true - the mailbox can be selected</li><li>false - the mailbox can not be selected</li></ul>|
|\[].inferior |boolean |Indicates whether or not the access rights allow creating a lower hierachy in the mailbox: <ul><li>true - a lower level can be created</li><li>false - a lower level can not be created</li></ul>|
|\[].interesting |boolean  |Indicates if the mailbox has been marked "interesting" by the server: <ul><li>true - The mailbox has been marked "interesting" by the server. For example, it may contain new messages.</li><li>false - The mailbox has not been marked "interesting" by the server.</li></ul>|

If the account does not contain any mailboxes, an empty collection is returned.

>* If there is no open connection, `.getBoxList()` will open a connection.
>* If the connection has not been used since the designated connection delay (see `4D.IMAPTransporter.new`), the `.checkConnection( )` function is automatically called.

#### Example

```qs
 var transporter : 4D.IMAPTransporter
 var boxList : collection
 var info, split : string
 transporter=4D.IMAPTransporter.new(server)

 boxList=transporter.getBoxList()

 forEach(box,boxList)
    if(box.interesting)
       split=splitString(box.name,transporter.getDelimiter())
       info="New emails are available in the box: "+split[split.length-1])
    end
 end
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getDelimiter().Desc -->
## .getDelimiter()


<!-- REF #IMAPTransporterClass.getDelimiter().Syntax -->**.getDelimiter**() : string<!-- END REF -->


<!-- REF #IMAPTransporterClass.getDelimiter().Params -->
|Parameter|Type||Description|
|-----|--- |:---:|------|
|Result|string|<-|Hierarchy delimiter character|<!-- END REF -->

#### Description

The `.getDelimiter()` function <!-- REF #IMAPTransporterClass.getDelimiter().Summary -->returns the character used to delimit levels of hierarchy in the mailbox name<!-- END REF -->.

The delimiter is a character which can be used to:

* create lower level (inferior) mailboxes
* search higher or lower within the mailbox hierarchy

#### Result

Mailbox name delimiter character.

>* If there is no open connection, `.getDelimiter()` will open a connection.
>* If the connection has not been used since the [designated connection delay](#checkconnectiondelay), the [`.checkConnection()`](#checkconnection) function is automatically called.

#### Example

See [`getBoxList()` example](getboxlist).

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMail().Desc -->
## .getMail()


<!-- REF #IMAPTransporterClass.getMail().Syntax -->**.getMail**( *msgNumber*: integer { , *options* : object } ) : object<br/>**.getMail**( *msgID*: string { , *options* : object } ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMail().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|integer|->|Sequence number of the message|
|msgID|string|->|Unique ID of the message|
|options|object|->|Message handling instructions|
|Result|object|<-|[Email object](EmailobjectClass.md#email-object)|<!-- END REF -->

#### Description

The `.getMail()` function <!-- REF #IMAPTransporterClass.getMail().Summary -->returns the `Email` object corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP transporter` object<!-- END REF -->. This function allows you to locally handle the email contents.

In the first parameter, you can pass either:

* *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or
* *msgID*, a *string* value indicating the unique ID of the message to retrieve.

The optional *options* parameter allows you pass an object defining additional instructions for handling the message. The following properties are available:

|Property | Type | Description |
|---|---|---|
|updateSeen|boolean|If true, the message is marked as "seen" in the mailbox. If False, the message is not marked as "seen". Default value: true|
|withBody|boolean | Pass true to return the body of the message. If False, only the message header is returned. Default value: true|

>* The function generates an error and returns **Null** if *msgID* designates a non-existing message,
>* If no mailbox is selected with the [`.selectBox()`](#selectbox) function, an error is generated,
>* If there is no open connection, `.getMail()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox)`.

#### Result

`.getMail()` returns an [`Email` object](EmailobjectClass.md#email-object) with the following specific IMAP properties: *id*, *receivedAt*, and *size*.

#### Example

You want to get the message with ID = 1:

```qs
 var server : object
 var info, mail, boxInfo : variant
 var transporter : 4D.IMAPTransporter

 server=newObject
 server.host="imap.gmail.com" //Mandatory
 server.port=993
 server.user="qodly@gmail.com"
 server.password="XXXXXXXX"

  //create transporter
 transporter=4D.IMAPTransporter.new(server)

  //select mailbox
 boxInfo=transporter.selectBox("Inbox")

  //get Email object with ID 1
 mail=transporter.getMail(1)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMails().Desc -->
## .getMails()


<!-- REF #IMAPTransporterClass.getMails().Syntax -->**.getMails**( *ids* : collection { , *options* : object } ) : object<br/>**.getMails**( *startMsg* : integer , *endMsg* : integer { , *options* : object } ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMails().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|ids |collection|->|Collection of message ID|
|startMsg|integer|->|Sequence number of the first message|
|endMsg |integer|->|Sequence number of the last message|
|options|object|->|Message handling instructions|
|Result|object|<-|Object containing:<br/><ul><li>a collection of [Email objects](EmailobjectClass.md#email-object) and</li><li>a collection of IDs or numbers for missing messages, if any</li></ul>|<!-- END REF -->

#### Description

The `.getMails()` function <!-- REF #IMAPTransporterClass.getMails().Summary -->returns an object containing a collection of `Email` objects<!-- END REF -->.

**First Syntax:**

***.getMails( ids { , options } ) -> result***

The first syntax allows you to retrieve messages based on their IDs.

In the *ids* parameter, pass a collection of IDs for the messages to return. You can get the IDs with [`.getMail()`](#getmail).

The optional *options* parameter allows you to define the parts of the messages to be returned. See the **Options** table below for a description of the available properties.

**Second syntax:**

 ***.getMails( startMsg , endMsg { , options } ) -> result***

The second syntax allows you to retrieve messages based on a sequential range. The values passed represent the position of the messages in the mailbox.

In the *startMsg* parameter, pass an *integer* value corresponding to the number of the first message in a sequential range. If you pass a negative number (*startMsg* <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the *endMsg* parameter, pass an *integer* value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (*endMsg* <= 0), the last message of the mailbox will be used as the end of the sequence.

The optional *options* parameter allows you to define the parts of the messages to be returned.

**Options**

|Property | Type| Description |
|---|---|---|
|updateSeen | boolean | If true, the specified messages are marked as "seen" in the mailbox. If False, the messages are not marked as "seen". Default value: true |
|withBody | boolean | Pass true to return the body of the specified messages. If false, only the message headers are returned. Default value: true|

>* If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated.
>* If there is no open connection, `.getMails()` will open a connection the last mailbox specified with [`.selectBox()`](#selectbox).

#### Result

`.getMails()` returns an object containing the following collections:

|Property | Type | Description |
|---|---|---|
|list  |collection |collection of [`Email` objects](EmailobjectClass.md#email-object). If no Email objects are found, an empty collection is returned.|
|notFound |collection| collection of:<br/><ul><li>first syntax - previously passed message IDs that do not exist</li><li>second syntax - sequence numbers of messages between startMsg and endMsg that do not exist</li></ul>An empty collection is returned if all messages are found.|

#### Example

You want to retrieve the 20 most recent emails without changing their "seen" status:

```qs
 var server,boxInfo,result : object
 var transporter : 4D.IMAPTransporter

 server=newObject
 server.host="imap.gmail.com" //Mandatory
 server.port=993
 server.user="qodly@gmail.com"
 server.password="XXXXXXXX"

  //create transporter
 transporter=4D.IMAPTransporter.new(server)

  //select mailbox
 boxInfo=transporter.selectBox("INBOX")

  if(boxInfo.mailCount>0)
	// retrieve the headers of the last 20 messages
	// without marking them as read
    result=transporter.getMails(boxInfo.mailCount-20,boxInfo.mailCount,\
     	newObject("withBody",false,"updateSeen",false))
    forEach(mail,result.list)
    	// ...
    end
 end
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.getMIMEAsblob().Desc -->
## .getMIMEAsblob()

<!-- REF #IMAPTransporterClass.getMIMEAsblob().Syntax -->**.getMIMEAsblob**( *msgNumber* : integer { , *updateSeen* : boolean } ) : blob<br/>**.getMIMEAsblob**( *msgID* : string { , *updateSeen* : boolean } ) : blob<!-- END REF -->


<!-- REF #IMAPTransporterClass.getMIMEAsblob().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgNumber|integer|-> |Sequence number of the message|
|msgID|string|-> |Unique ID of the message|
|updateSeen|boolean|->|If true, the message is marked "seen" in the mailbox. If False the message is left untouched.|
|Result|BLOB|<-|blob of the MIME string returned from the mail server|<!-- END REF -->

#### Description

The `.getMIMEAsblob()` function <!-- REF #IMAPTransporterClass.getMIMEAsblob().Summary -->returns a BLOB containing the MIME contents for the message corresponding to the *msgNumber* or *msgID* in the mailbox designated by the `IMAP_transporter`<!-- END REF -->.

In the first parameter, you can pass either:

* *msgNumber*, an *integer* value indicating the sequence number of the message to retrieve or  
* *msgID*, a *string* value indicating the unique ID of the message to retrieve.

The optional *updateSeen* parameter allows you to specify if the message is marked as "seen" in the mailbox. You can pass:

* **true** - to mark the message as "seen" (indicating the message has been read)
* **false** - to leave the message's "seen" status untouched

>* The function returns an empty blob if *msgNumber* or msgID* designates a non-existing message,
>* If no mailbox is selected with the [`.selectBox()`](#selectbox) command, an error is generated,
>* If there is no open connection, `.getMIMEAsblob()` will open a connection the last mailbox specified with `.selectBox()`.

#### Result

`.getMIMEAsblob()` returns a `blob` which can be archived in a database or converted to an [`Email` object](EmailobjectClass.md#email-object) with the `mailConvertFromMIME` command.

#### Example

```qs
 var server : object
 var boxInfo : variant
 var blob : blob
 var transporter : 4D.IMAPTransporter

 server=newObject
 server.host="imap.gmail.com"
 server.port=993
 server.user="qodly@gmail.com"
 server.password="XXXXXXXX"

  //create transporter
 transporter=4D.IMAPTransporter.new(server)

  //select mailbox
 boxInfo=transporter.selectBox("Inbox")

  //get BLOB
 blob=transporter.getMIMEAsblob(1)
```

<!-- END REF -->

<!-- INCLUDE transporter.host.Desc -->

<!-- INCLUDE transporter.logFile.Desc -->

<!-- REF IMAPTransporterClass.move().Desc -->
## .move()


<!-- REF #IMAPTransporterClass.move().Syntax -->**.move**( *msgsIDs* : collection , *destinationBox* : string ) : object<br/>**.move**( *allMsgs* : integer , *destinationBox* : string ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.move().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgsIDs|collection|->|collection of message unique IDs (strings)|
|allMsgs|integer|->|`kIMAPAll`: All messages in the selected mailbox|
|destinationBox|string|->|Mailbox to receive moved messages|
|Result|object|<-|Status of the move operation|<!-- END REF -->

#### Description

The `.move()` function <!-- REF #IMAPTransporterClass.move().Summary -->moves the messages defined by *msgsIDs* or *allMsgs* to the *destinationBox* on the IMAP server<!-- END REF -->.

You can pass:

* in the *msgsIDs* parameter, a collection containing the unique IDs of the specific messages to move, or
* in the *allMsgs* parameter, the `kIMAPAll` constant (integer) to move all messages in the selected mailbox.

The *destinationBox* parameter allows you to pass a string value with the name of the mailbox where the messages will be moved.

> This function is only supported by IMAP servers compliant with RFC [8474](https://tools.ietf.org/html/rfc8474).

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|4D error stack (not returned if a IMAP server response is received)|
| |\[].errcode|number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example 1

To move a selection of messages:

```qs
 var server,boxInfo,status : object
 var mailIds : collection
 var transporter : 4D.IMAPTransporter

 server=newObject
 server.host="imap.gmail.com" //Mandatory
 server.port=993
 server.user="qodly@gmail.com"
 server.password="XXXXXXXX"

 transporter=4D.IMAPTransporter.new(server)

  //select mailbox
 boxInfo=transporter.selectBox("inbox")

  //get collection of message unique IDs
 mailIds=transporter.searchMails("subject \"New feature:\"")

  // Move found messages from the current mailbox to the "documents" mailbox
 status=transporter.move(mailIds,"documents")
```

#### Example 2

To move all messages in the current mailbox:

```qs
 var server,boxInfo,status : object
 var transporter : 4D.IMAPTransporter

 server=newObject
 server.host="imap.gmail.com" //Mandatory
 server.port=993
 server.user="4d@gmail.com"
 server.password="XXXXXXXX"

 transporter=4D.IMAPTransporter.new(server)

  //select mailbox
 boxInfo=transporter.selectBox("inbox")

  // move all messages in the current mailbox to the "documents" mailbox
 status=transporter.move(kIMAPAll,"documents")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.numToID().Desc -->
## .numToID()


<!-- REF #IMAPTransporterClass.numToID().Syntax -->**.numToID**( *startMsg* : integer , *endMsg* : integer ) : collection<!-- END REF -->


<!-- REF #IMAPTransporterClass.numToID().Params -->
|Parameter|Type||Description|
|-----|--- |:---:|------|
|startMsg|integer|-> |Sequence number of the first message|
|endMsg|integer|->|Sequence number of the last message|
|Result|collection|<-|collection of unique IDs|<!-- END REF -->

#### Description

The `.numToID()` function <!-- REF #IMAPTransporterClass.numToID().Summary -->converts the sequence numbers to IMAP unique IDs for the messages in the sequential range designated by *startMsg* and *endMsg*<!-- END REF --> in the currently selected mailbox.

In the *startMsg* parameter, pass an integer value corresponding to the number of the first message in a sequential range. If you pass a negative number (*startMsg* <= 0), the first message of the mailbox will be used as the beginning of the sequence.

In the *endMsg* parameter, pass an integer value corresponding to the number of the last message to be included in a sequential range. If you pass a negative number (*endMsg* <= 0), the last message of the mailbox will be used as the end of the sequence.

#### Result

The function returns a collection of strings (unique IDs).

#### Example

```qs
 var transporter : 4D.IMAPTransporter
 var server,boxInfo,status : object
 var mailIds : collection

 server=newObject
 server.host="imap.gmail.com" //Mandatory
 server.port=993
 server.user="qodly@gmail.com"
 server.password="XXXXXXXX"

 transporter=4D.IMAPTransporter.new(server)

  //select mailbox
 boxInfo=transporter.selectBox("inbox")

  //get IDs for 5 last messages received
 mailIds=transporter.numToID((boxInfo.mailCount-5),boxInfo.mailCount)

  //delete the messages from the current mailbox
 status=transporter.delete(mailIds)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.removeFlags().Desc -->
## .removeFlags()


<!-- REF #IMAPTransporterClass.removeFlags().Syntax -->**.removeFlags**( *msgIDs* : collection , *keywords* :  object ) : object<br/>**.removeFlags**( *msgIDs* : string , *keywords* :  object ) : object<br/>**.removeFlags**( *msgIDs* : integer , *keywords* :  object ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.removeFlags().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msgIDs|collection|->|Collection of strings: Message unique IDs (string)|
|msgIDs|string| Unique ID of a message|
|msgIDs|integer|kIMAPAll: All messages in the selected mailbox|
|keywords|object|->|Keyword flags to remove|
|Result|object|<-|Status of the removeFlags operation|<!-- END REF -->

#### Description

The `.removeFlags()` function <!-- REF #IMAPTransporterClass.removeFlags().Summary -->removes flags from the *msgIDs* for the specified `keywords`<!-- END REF -->.

In the *msgIDs* parameter, you can pass either:

* a *collection* containing the unique IDs of specific messages or
* the unique ID (*string*) of a single message or
* the following constant (*integer*) for all messages in the selected mailbox:

 |Constant |Value |Comment|
 |---|---|---|
 |kIMAPAll |1 |Select all messages in the selected mailbox|

The `keywords` parameter lets you define the flags to remove from *msgIDs*. You can use the following standard flags as well as custom flags:

|Parameter|Type|Description|
|---|---|---|
|$draft |boolean |true to remove the "draft" flag from the message |
|$seen |boolean  |true to remove the "seen" flag from the message|
|$flagged |boolean  |true to remove the "flagged" flag from the message|
|$answered |boolean  |true to remove the "answered" flag from the message|
|$deleted |boolean | true to remove the "deleted" flag from the message|
|`<custom flag>` |boolean | true to remove the custom flag from the message|

Please refer to [.addFlags()](#addflags) for more information on custom flags.

>* For a keyword to be taken into account it has to be true.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|Qodly error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example

```qs
var options,boxInfo,status : object
var transporter : 4D.IMAPTransporter

options=newObject
options.host="imap.gmail.com"
options.port=993
options.user="qodly@gmail.com"
options.password="xxxxx"

// Create transporter
transporter=4D.IMAPTransporter.new(options)

// Select mailbox
boxInfo=transporter.selectBox("INBOX")

// Mark all messages from INBOX as unseen
flags=newObject
flags["$seen"]=true
status=transporter.removeFlags(kIMAPAll,flags)
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.renameBox().Desc -->
## .renameBox()


<!-- REF #IMAPTransporterClass.renameBox().Syntax -->**.renameBox**( *currentName* : string , *newName* : string ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.renameBox().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|currentName|string|->|Name of the current mailbox|
|newName|string|->|New mailbox name|
|Result|object|<-|Status of the renaming operation|<!-- END REF -->

#### Description

The `.renameBox()` function <!-- REF #IMAPTransporterClass.renameBox().Summary -->changes the name of a mailbox on the IMAP server<!-- END REF -->. Attempting to rename a mailbox from a mailbox name that does not exist or to a mailbox name that already exists will generate an error.

In the `currentName` parameter, pass the name of the mailbox to be renamed.

Pass the new name for the mailbox in the `newName` parameter.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|Qodly error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example

To to rename your "Invoices mailbox to "Bills":

```qs
var options, status : object
var transporter : 4D.IMAPTransporter
var info : string

options=newObject

options.host="imap.gmail.com"
options.user="test@gmail.com"
options.password="XXXXX"

transporter=4D.IMAPTransporter.new(options)

// rename mailbox
status=transporter.renameBox("Invoices", "Bills")

if(status.success)
   info="Mailbox renaming successful!"
else
   info="Error: "+status.statusstring
end
```

<!-- END REF -->

<!-- INCLUDE transporter.port.Desc -->

<!-- REF IMAPTransporterClass.searchMails().Desc -->
## .searchMails()

<!-- REF #IMAPTransporterClass.searchMails().Syntax -->**.searchMails**( *searchCriteria* : string ) : collection<!-- END REF -->


<!-- REF #IMAPTransporterClass.searchMails().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|searchCriteria|string|-> |Search criteria|
|Result|collection|<-|collection of message numbers|<!-- END REF -->

#### Description

> This function is based upon the specification for the [IMAP protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol).

The `.searchMails()` function <!-- REF #IMAPTransporterClass.searchMails().Summary -->searches for messages that match the given *searchCriteria* in the current mailbox<!-- END REF -->. *searchCriteria* consists of one or more search keys.

*searchCriteria* is a string parameter listing one or more search keys (see [Authorized search-keys](#authorized-search-keys) below) associated or not with values to look for. A search key may be a single or multiple items. For example:

```
SearchKey1 = FLAGGED
SearchKey2 = NOT FLAGGED
SearchKey3 = FLAGGED DRAFT
```

> Matching is usually not case-sensitive

* If the *searchCriteria* is a null string, the search will be equivalent to a “select all”.
* If the *searchCriteria* includes multiple search keys, the result is the intersection (AND function) of all the messages that match those keys.

```
searchCriteria = FLAGGED FROM "SMITH"
```

... returns all messages with \Flagged flag set AND sent by Smith.

* You can use the **OR** or **NOT** operators as follows:

```
searchCriteria = OR SEEN FLAGGED
```

... returns all messages with \Seen flag set OR \Flagged flag set

```
searchCriteria = NOT SEEN
```

... returns all messages with \Seen flag not set.

```
searchCriteria = HEADER CONTENT-TYPE "MIXED" NOT HEADER CONTENT-TYPE "TEXT"...
```

... returns message whose content-type header contains “Mixed” and does not contain “string”.

```
searchCriteria = HEADER CONTENT-TYPE "E" NOT SUBJECT "o" NOT HEADER CONTENT-TYPE "MIXED"
```

... returns message whose content-type header contains “ e ” and whose Subject header does not contain “ o ” and whose content-type header is not “ Mixed ”.

As concerns the last two examples, notice that the result of the search is different when you remove the parentheses of the first search key list.

* The *searchCriteria* may include the optional \[CHARSET] specification. This consists of the "CHARSET" word followed by a registered \[CHARSET] (US ASCII, ISO-8859). It indicates the charset of the *searchCriteria* string. Therefore, you must convert the *searchCriteria* string into the specified charset if you use the \[CHARSET] specification (see the `CONVERT FROM TEXT` or `Convert to string` commands).
By default, 4D encodes in Quotable Printable the searchCriteria string if it contains extended characters.

```
searchCriteria = CHARSET "ISO-8859" BODY "Help"
```

... means the search criteria uses the charset iso-8859 and the server will have to convert the search criteria before searching, if necessary.

#### Search value types

Search-keys may request the value to search for:

* **Search-keys with a date value**: the date is a string that must be formatted as follows: *date-day+"-"+date-month+"-"+date-year* where date-day indicates the number of the day of the month (max. 2 characters), date-month indicates the name of the month (Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Dec) and date-year indicates the year (4 characters).
Example: `searchCriteria = SENTBEFORE 1-Feb-2020` (a date does not usually need to be quoted since it does not contain any special characters)

* **Search-keys with a string value**: the string may contain any character and must be quoted. If the string does not contain any special characters, like the space character for instance, it does not need to be quoted. Quoting such strings will ensure that your string value will be correctly interpreted.
Example: `searchCriteria = FROM "SMITH"`
For all search keys that use strings, a message matches the key if the string is a substring of the field. Matching is not case-sensitive.

* **Search-keys with a field-name value**: the field-name is the name of a header field.
Example: `searchCriteria = HEADER CONTENT-TYPE "MIXED"`

* **Search-keys with a flag value**: the flag may accept one or several keywords (including standard flags), separated by spaces.
Example: `searchCriteria = KEYWORD \Flagged \Draft`

* **Search-keys with a message set value**: Identifies a set of messages. For message sequence numbers, these are consecutive numbers from 1 to the total number of messages in the mailbox. A comma delimits individual numbers, a colon delimits between two numbers inclusive.
Examples:
`2,4:7,9,12:*` is `2,4,5,6,7,9,12,13,14,15` for a mailbox with 15 messages.
`searchCriteria = 1:5 ANSWERED` search in message selection from message sequence number 1 to 5 for messages which have the \Answered flag set.
`searchCriteria= 2,4 ANSWERED` search in the message selection (message numbers 2 and 4) for messages which have the \Answered flag set.

#### Authorized search-keys

**ALL**: All messages in the mailbox.  
**ANSWERED**: Messages with the \Answered flag set.  
**UNANSWERED**: Messages that do not have the \Answered flag set.  
**DELETED**: Messages with the \Deleted flag set.  
**UNDELETED**: Messages that do not have the \Deleted flag set.  
**DRAFT**: Messages with the \Draft flag set.  
**UNDRAFT**: Messages that do not have the \Draft flag set.  
**FLAGGED**: Messages with the \Flagged flag set.  
**UNFLAGGED**: Messages that do not have the \Flagged flag set.  
**RECENT**: Messages that have the \Recent flag set.  
**OLD**: Messages that do not have the \Recent flag set.  
**SEEN**: Messages that have the \Seen flag set.  
**UNSEEN**: Messages that do not have the \Seen flag set.  
**NEW**: Messages that have the \Recent flag set but not the \Seen flag. This is functionally equivalent to “(RECENT UNSEEN)”.  
**KEYWORD *flag***: Messages with the specified keyword set.  
**UNKEYWORD *flag***: Messages that do not have the specified keyword set.  
**BEFORE *date***: Messages whose internal date is earlier than the specified date.  
**ON *date***: Messages whose internal date is within the specified date.  
**SINCE *date***: Messages whose internal date is within or later than the specified date.  
**SENTBEFORE *date***: Messages whose Date header is earlier than the specified date.  
**SENTON *date***: Messages whose Date header is within the specified date.  
**SENTSINCE *date***: Messages whose Date header is within or later than the specified date.  
**TO *string***: Messages that contain the specified string in the TO header.  
**FROM *string***: Messages that contain the specified string in the FROM header.  
**CC *string***: Messages that contain the specified string in the CC header.  
**BCC *string***: Messages that contain the specified string in the BCC header.  
**SUBJECT *string***: Messages that contain the specified string in the Subject header.  
**BODY *string***: Messages that contain the specified string in the message body.  
**TEXT *string***: Messages that contain the specified string in the header or in the message body.  
**HEADER *field-name* *string***: Messages that have a header with the specified field-name and that contain the specified string in the field-body.  
**UID *message-UID***: Messages with unique identifiers corresponding to the specified unique identifier set.  
**LARGER *n***: Messages with a size larger than the specified number of bytes.  
**SMALLER *n***: Messages with a size smaller than the specified number of bytes.  
**NOT *search-key***: Messages that do not match the specified search key.  
**OR *search-key1* *search-key2***: Messages that match either search key.  

<!-- END REF -->

<!-- REF IMAPTransporterClass.selectBox().Desc -->
## .selectBox()


<!-- REF #IMAPTransporterClass.selectBox().Syntax -->**.selectBox**( *name* : string { , *state* : integer } ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.selectBox().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|string|-> |Name of the mailbox|
|state|integer|->|Mailbox access status|
|Result|object|<-|boxInfo object|<!-- END REF -->

#### Description

The `.selectBox()` function <!-- REF #IMAPTransporterClass.selectBox().Summary -->selects the *name* mailbox as the current mailbox<!-- END REF -->. This function allows you to retrieve information about the mailbox.

>To get the information from a mailbox without changing the current mailbox, use [`.getBoxInfo()`](#getboxinfo).

In the *name* parameter, pass the name of the mailbox to access. The name represents an unambiguous left-to-right hierarchy with levels separated by a specific delimiter character. The delimiter can be found with the [`.getDelimiter()`](#getdelimiter) function.

The optional *state* parameter defines the type of access to the mailbox. The possible values are:

|Constant| Value| Comment|
|---|---|---|
|IMAP read only state|1|The selected mailbox is accessed with read only privileges. Messages with a "recent" flag (indicating new messages) remain unchanged.|
|IMAP read write state|0|The selected mailbox is accessed with read and write privileges. Messages are considered "seen" and lose the "recent" flag (indicating new messages). (Default value)|

>* The function generates an error and returns **Null** if *name* designates a non-existing mailbox.
>* If there is no open connection, `.selectBox()` will open a connection.
>* If the connection has not been used since the designated connection delay (see `4D.IMAPTransporter.new`), the [`.checkConnection()`](#checkconnection) function is automatically called.

**Returned object**

The `boxInfo` object returned contains the following properties:

|Property | Type | Description |
|---|---|---|
|name| string|Name of the mailbox|
|mailCount|number|Number of messages in the mailbox|
|mailRecent|number|Number of messages with the "recent" flag |
|id|string|Unique id of the mailbox |
|flags|string|List of flags currently used for the mailbox, separated by spaces|
|permanentFlags|string|List of flags that the client can change permanently (except for the \Recent flag, which is managed by the IMAP server), separated by spaces|

:::info

If `permanentFlags` string includes the special flag \*, it means that the server supports [custom flags](#addflags).

:::

#### Example

```qs
 var server, boxinfo : object
 server=newObject
 server.host="imap.gmail.com" //Mandatory
 server.user="4d@gmail.com"
 server.password="XXXXXXXX"

 var transporter : 4D.IMAPTransporter
 transporter=4D.IMAPTransporter.new(server)
 boxInfo=transporter.selectBox("INBOX")
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.subscribe().Desc -->
## .subscribe()

<!-- REF #IMAPTransporterClass.subscribe().Syntax -->**.subscribe**( *name* : string ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.subscribe().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|string|-> |Name of the mailbox|
|Result|object|<-|Status of the subscribe operation|<!-- END REF -->

#### Description

The `.subscribe()` function <!-- REF #IMAPTransporterClass.subscribe().Summary -->allows adding or removing of the specified mailbox to/from the IMAP server’s set of “subscribed” mailboxes<!-- END REF -->. As such, you can choose to narrow down a large list of available mailboxes by subscribing to those you usually want to see.

In the *name* parameter, pass the name of the mailbox to add (subscribe) to your "subscribed" mailboxes.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|Qodly error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example

To subscribe to the "Atlas Corp" mailbox in the "Bills" hierarchy:

```qs
var name, info : string
var options, status : object
var transporter : 4D.IMAPTransporter

options=newObject

options.host="imap.gmail.com"
options.user="test@gmail.com"
options.password="XXXXXX"

transporter=4D.IMAPTransporter.new(options)

name="Bills"+transporter.getDelimiter()+"Atlas Corp"
status=transporter.subscribe(name)

if(status.success)
   info="Mailbox subscription successful!"
else
   info="Error: "+status.statusstring
end
```

<!-- END REF -->

<!-- REF IMAPTransporterClass.unsubscribe().Desc -->
## .unsubscribe()


<!-- REF #IMAPTransporterClass.unsubscribe().Syntax -->**.unsubscribe**( *name* : string ) : object<!-- END REF -->


<!-- REF #IMAPTransporterClass.unsubscribe().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|name|string|-> |Name of the mailbox|
|Result|object|<-|Status of the unsubscribe operation|<!-- END REF -->

#### Description

The `.unsubscribe()` function <!-- REF #IMAPTransporterClass.unsubscribe().Summary -->removes a mailbox from a set of subscribed mailboxes<!-- END REF -->. This allows you reduce the number of mailboxes you usually see.

In the `name` parameter, pass the name of the mailbox to remove (unsubscribe) from your active mailboxes.

**Returned object**

The function returns an object describing the IMAP status:

|Property|| Type| Description|
|---|---|---|---|
|success||boolean|true if the operation is successful, False otherwise
|statusstring || string|Status message returned by the IMAP server, or last error returned in the Qodly error stack  |
|errors ||collection|Qodly error stack (not returned if a IMAP server response is received)|
| |\[].errcode|Number| Qodly error code|
| |\[].message|string|Description of the Qodly error |
| |\[].componentSignature|string|Signature of the internal component which returned the error|

#### Example

To unsubscribe from the "Atlas Corp” mailbox in the "Bills" hierarchy:

```qs
var info, name : string
var options, status : object
var transporter : 4D.IMAPTransporter

options=newObject


options.host="imap.gmail.com"
options.user="test@gmail.com"
options.password=pw

transporter=4D.IMAPTransporter.new(options)

name="Bills"+transporter.getDelimiter()+"Atlas Corp"
status=transporter.unsubscribe(name)

if(status.success)
   info="Mailbox unsubscription successful!"
else
   info="Error: "+status.statusstring
end
```

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
