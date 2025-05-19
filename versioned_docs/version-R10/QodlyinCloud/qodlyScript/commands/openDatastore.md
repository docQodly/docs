---
id: openDatastore
title: openDatastore
---

<!-- REF #_command_.openDatastore.Syntax -->**openDatastore**( *connectionInfo* : object , *localID* : text ) : cs.DataStore <!-- END REF -->


<!-- REF #_command_.openDatastore.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|connectionInfo|object|&#8594;|Connection properties used to reach the remote datastore|
|localID |text|&#8594;|Id to assign to the opened datastore on the current Cloud instance (mandatory)|
|Result |cs.DataStore|&#8592;|Datastore object|<!-- END REF -->

#### Description

The `openDatastore` command <!-- REF #_command_.openDatastore.Summary -->connects the application to a remote datastore identified by the *connectionInfo* parameter<!-- END REF --> and returns a matching `cs.DataStore` object associated with the *localID* alias on the Qodly Cloud instance. All objects exposed in the remote datastore are available as properties of the `cs.DataStore` returned object.

The following remote datastores are supported by the command:

|datastore kind|Description|
|---|---|
|Qodly application|Another Qodly Server application that provided you with an **api endpoint** and a valid **api key** associated with a defined [role](../../../4DQodlyPro/roles/rolesPrivilegesOverview.md#roles-defining-user-profiles). You must pass the api key in the `api-key` property of the *connectionInfo* object. You can then work with the returned datastore object, with all privileges granted to the associated role.|
|Remote 4D Server application|A 4D Server application (version 20 or more) [available as a remote datastore](https://developer.4d.com/docs/REST/configuration), i.e.:<li>its web server is launched with http and/or https enabled,</li><li>its datastore is exposed to REST (**Expose as REST server** option checked).</li> A license can be required.|


Pass in *connectionInfo* an object describing the remote datastore you want to connect to. It can contain the following properties (all properties are optional except *hostname*):

|Property| Type|Qodly application|Remote 4D application|
|---|---|---|---|
|hostname|Text|[API Endpoint](../../console/apiKeys.md#api-endpoint) of the Qodly cloud instance|Name or IP address of the remote database + ":" + port number (port number is mandatory)|
|api-key|Text|[API Key](../../console/apiKeys.md#api-key) of the Qodly cloud instance|- (ignored)|
|idleTimeout|Longint|- (ignored)|Inactivity session timeout (in minutes), after which the session is automatically closed by 4D. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see [Closing sessions](https://developer.4d.com/docs/ORDA/datastores#closing-sessions).|
|tls|Boolean|True to use secured connection. If omitted, false by default|True to use secured connection(1). If omitted, false by default. Using a secured connection is recommended whenever possible.|
|type |Text |- (ignored)|must be "4D Server"|

(1) If `tls` is `true`, the HTTPS protocol is used if:

* HTTPS is enabled on the remote datastore
* the given port is the right [HTTPS port](https://developer.4d.com/docs/WebServer/webServerConfig#https-port) configured in the remote datastore settings
* a valid certificate and private encryption key are installed in the project. Otherwise, an error "1610 - A remote request to host xxx has failed" is raised.

:::info

See the [4D documentation](https://developer.4d.com/docs/REST/authUsers) to know how to authenticate REST connection requests.

:::


If no matching *connectionInfo* remote datastore is found, `openDatastore` returns **null**.


*localID* is a local alias on the current Cloud instance for the session opened on the remote datastore, i.e.  either a [Qodly session](../SessionClass.md) or a [4D Server session](https://developer.4d.com/docs/ORDA/datastores). If *localID* already exists on the instance, it is used. Otherwise, a new *localID* session is created when the datastore object is used.

Once the session is opened on the remote 4D datastore, the following statements become equivalent and return a reference on the same datastore object:

```qs
 var mysd, myds2 : cs.DataStore
 myds = openDatastore(connectionInfo,"myLocalId")
 myds2 = ds("myLocalId")
  //myds and myds2 are equivalent
```

#### Example 1  

Connection to another Qodly application:

```qs
var connectTo : object = {hostname: "https://xxx-x54xxx-xx-xxxxx-8xx5-xxxxxx.xx-api.cloud.com", tls: true}

var remoteDS : 4D.DataStoreImplementation
var data : 4D.EntitySelection

connectTo["api-key"]="fxxxx-xxxx-4xxx-txxx-xxxxxxxx0" //only for example purpose  
  //it is recommended to store the API key in a secured place (i.e a file)
  //and to load in the code

remoteDS = openDatastore(connectTo,"remoteId") 
data = remoteDS.item.all()
```


#### Example 2

Connection to a 4D Server remote datastore implementing an `authentify()` function ([see the 4D documentation](https://developer.4d.com/docs/REST/authUsers) for more information):

```qs
var remoteDS : 4D.DataStoreImplementation
var customers : 4D.EntitySelection
var result : variant

remoteDS = openDatastore({hostname: "127.0.0.1:8044" , tls : true}, "id")
customers = remoteDS.Customers.all() 
// Error "You need to be logged in to perform this request."
result = remoteDS.authentify({identifier: "msmith@acme.com", password: "a"}) 

//Successful authentication
customers = remoteDS.Customers.all()
// No error - The customers are read
```


#### Error management  

In case of error, the command returns **null**. If the remote datastore cannot be reached (wrong address, web server not started, http and https not enabled...), error 1610 "A remote request to host XXX has failed" is raised. You can intercept this error with a method installed by `onErrCall`.


#### See also

[Using a remote datastore](https://developer.4d.com/docs/ORDA/datastores) section on developer.4d.com.
