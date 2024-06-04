---
id: openDatastore
title: openDatastore
---

<!-- REF #_command_.openDatastore.Syntax -->**openDatastore**( *connectionInfo* : object , *localID* : text ) : cs.DataStore <!-- END REF -->


<!-- REF #_command_.openDatastore.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|connectionInfo|object|->|Connection properties used to reach the remote datastore|
|localID |text|->|Id to assign to the opened datastore on the current Cloud instance (mandatory)|
|Result |cs.DataStore|<-|Datastore object|<!-- END REF -->

#### Description

The `openDatastore` command <!-- REF #_command_.openDatastore.Summary -->connects the application to a remote datastore identified by the *connectionInfo* parameter<!-- END REF --> and returns a matching `cs.DataStore` object associated with the *localID* alias on the Qodly Cloud instance. All objects exposed in the remote datastore are available as properties of the `cs.DataStore` returned object.

The following remote datastores are supported by the command:

|datastore kind|Description|
|---|---|
|[Qodly application](../../cloud/getStarted.md)|Another Qodly Server application that provided you with an **api endpoint** and a valid **api key** associated with a defined [role](../../studio/roles/rolesPrivilegesOverview.md#roles-defining-user-profiles). You must pass the api key in the `api-key` property of the *connectionInfo* object. You can then work with the returned datastore object, with all privileges granted to the associated role.|
|Remote 4D application|A 4D Server application (version 20 or more) available as a remote datastore, i.e.:<li>its web server is launched with http and/or https enabled,</li><li>its datastore is exposed to REST ([**Expose as REST server**](REST/configuration.md#starting-the-rest-server) option checked).</li>A license can be required.|


Pass in *connectionInfo* an object describing the remote datastore you want to connect to. It can contain the following properties (all properties are optional except *hostname*):

|Property| Type|Qodly application|Remote 4D application|
|---|---|---|---|
|hostname|Text|API Endpoint of the Qodly cloud instance|Name or IP address of the remote database + ":" + port number (port number is mandatory)|
|api-key|Text|Api key of the Qodly cloud instance|- (ignored)|
|user|Text|- (ignored)|User name(1)|
|password|Text|- (ignored)|User password(1)|
|idleTimeout|Longint|- (ignored)|Inactivity session timeout (in minutes), after which the session is automatically closed by 4D. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see [Closing sessions](https://developer.4d.com/docs/ORDA/datastores#closing-sessions).|
|tls|Boolean|True to use secured connection. If omitted, false by default|True to use secured connection(2). If omitted, false by default. Using a secured connection is recommended whenever possible.|
|type |Text |- (ignored)|must be "4D Server"|

(1) See the [4D Server documentation](https://developer.4d.com/docs/REST/authUsers) to know how to authenticate REST connection requests

(2) If `tls` is `true`, the HTTPS protocol is used if:

* HTTPS is enabled on the remote datastore
* the given port is the right [HTTPS port](https://developer.4d.com/docs/WebServer/webServerConfig#https-port) configured in the remote datastore settings
* a valid certificate and private encryption key are installed in the project. Otherwise, an error "1610 - A remote request to host xxx has failed" is raised.


If no matching *connectionInfo* remote datastore is found, `openDatastore` returns **null**.

:::

*localID* is a local alias on the current Cloud instance for the session opened on the remote datastore, i.e.  either a [Qodly session](../SessionClass.md) or a [4D Server session](https://developer.4d.com/docs/ORDA/datastores). If *localID* already exists on the instance, it is used. Otherwise, a new *localID* session is created when the datastore object is used.

Once the session is opened on the remote 4D datastore, the following statements become equivalent and return a reference on the same datastore object:

```qs
 var mysd, myds2 : cs.DataStore
 myds = openDatastore(connectionInfo,"myLocalId")
 myds2 = ds("myLocalId")
  //myds and myds2 are equivalent
```

#### Example 1  

Connection to a Qodly application:

```qs
var connectTo : object = {hostname: "https://xxx-x54xxx-xx-xxxxx-8xx5-xxxxxx.xx-api.cloud.com", tls: true}

var remoteDS : 4D.DataStoreImplementation
var data : 4D.EntitySelection

connect["api-key"]="fxxxx-xxxx-4xxx-txxx-xxxxxxxx0"

remoteDS = openDatastore(connectTo,"remoteId")
data = remoteDS.item.all()
```


#### Example 2

Connection to a remote datastore with user / password / timeout / tls:

```qs
 var connectTo = {hostname : "192.168.18.11:4443", user : "marie",\  
 	password : "123", idleTimeout : 70 , tls : true}
 var remoteDS : cs.DataStore
 var allStudents : cs.StudentsSelection
 remoteDS = openDatastore(connectTo , "students")
 allStudents = remoteDS.Students.all()
```


#### Error management  

In case of error, the command returns **null**. If the remote datastore cannot be reached (wrong address, web server not started, http and https not enabled...), error 1610 "A remote request to host XXX has failed" is raised. You can intercept this error with a method installed by `onErrCall`.


#### See also

[Using a remote datastore](https://developer.4d.com/docs/ORDA/datastores) section on developer.4d.com.
