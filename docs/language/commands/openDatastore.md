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

The configuration of parameters depends on the target datastore. In the current Qodly implementation, the following target datastore type is supported:

- 4D Server 

#### 4D Server datastore

Pass in *connectionInfo* an object describing the 4D Server remote datastore you want to connect to. It can contain the following properties (all properties are optional except *hostname*):

|Property| Type| Description|
|---|---|---|
|hostname|string|Name or IP address of the remote datastore + ":" + port number (port number is mandatory)|
|user|string|User name (1)|
|password|string|User password (1)|
|idleTimeout|integer|Inactivity session timeout (in minutes), after which the session is automatically closed by 4D Server. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see [Closing sessions](https://developer.4d.com/docs/ORDA/datastores#closing-sessions).|
|tls|boolean|Use secured connection (2). If omitted, false by default. Using a secured connection is recommended whenever possible.|

(1) See the [4D Server documentation](https://developer.4d.com/docs/REST/authUsers) to know how to authenticate REST connection requests

(2) If `tls` is `true`, the HTTPS protocol is used if:

* HTTPS is enabled on the remote datastore
* the given port is the right [HTTPS port](https://developer.4d.com/docs/WebServer/webServerConfig#https-port) configured in the remote datastore settings
* a valid certificate and private encryption key are installed in the project. Otherwise, an error "1610 - A remote request to host xxx has failed" is raised.

:::note 4D Server configuration

The *connectionInfo* remote datastore designates a 4D Server database with the following configuration:

* its web server must be launched with http and/or https enabled,
* its [**Expose as REST server**](https://developer.4d.com/docs/REST/configuration#starting-the-rest-server) option must be checked,
* at least one client license is available,
* run with 4D Server v20 or higher.

If no matching 4D Server database is found, `openDatastore` returns **null**.

:::

*localID* is a local alias on the current Cloud instance for the [session opened on remote 4D datastore](https://developer.4d.com/docs/ORDA/datastores#opening-sessions). If *localID* already exists on the instance, it is used. Otherwise, a new *localID* session is created when the datastore object is used. For a detailed description of remote session support on 4D Server, please refer to the [4D documentation](https://developer.4d.com/docs/ORDA/datastores). 

Once the session is opened on the remote 4D datastore, the following statements become equivalent and return a reference on the same datastore object:

```qs
 var mysd, myds2 : cs.DataStore
 myds = openDatastore(connectionInfo,"myLocalId")
 myds2 = ds("myLocalId")
  //myds and myds2 are equivalent
```

#### Example 1  

Connection to a remote datastore without user / password:


```qs
 var connectTo = {hostname : "192.168.18.11:8044"}
 var remoteDS : cs.DataStore
 var allStudents : cs.StudentsSelection
 remoteDS = openDatastore(connectTo , "students")
 allStudents = remoteDS.Students.all() 
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
