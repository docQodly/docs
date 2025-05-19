---
id: TCPConnectionClass
title: TCPConnection
---

The `TCPConnection` class allows you to manage Transmission Control Protocol (TCP) client connections to a server, enabling you to send and receive data, and handle connection lifecycle events using callbacks.

The `TCPConnection` class is available from the `4D` class store. You can create a TCP connection using the [4D.TCPConnection.new()](#4dtcpconnectionnew) function, which returns a [TCPConnection object](#tcpconnection-object).

Thanks to the standard Qodly server object *refcounting*, a TCPConnection is automatically released when it is no longer referenced. Consequently, the associated resources are properly cleaned up without requiring explicit closure.

TCPConnection objects are released when no more references to them exist in memory. This typically occurs, for example, at the end of a function execution. If you want to "force" the closure of a connection at any moment, [**nullify** its references by setting them to **Null**](./basics/lang-object.md#resources).



### Example


This example defines a class that handles the connection lifecycle and events, showcasing how to work asynchronously:

```qs
// Class definition: cs.MyAsyncTCPConnection

constructor(url : string, port : integer)
    this.connection = null
    this.url = url
    this.port = port

// Connect to one of the servers launched inside workers
function connect()
    this.connection := 4D.TCPConnection.new(this.url, this.port, this)

// Disconnect from the server
function disconnect()
    this.connection.shutdown()
    this.connection = null

// Send data to the server
function getInfo()
    var blob : blob
    blob = convertFromString("Information", "UTF-8")
    this.connection.send(blob)

// Callback called when the connection is successfully established
function onConnection(connection : 4D.TCPConnection , event : 4D.TCPEvent)
    var info : string = "Connection established"

// Callback called when the connection is properly closed
function onShutdown(connection : 4D.TCPConnection, event : 4D.TCPEvent)
    var info : string = "Connection closed"

// Callback called when receiving data from the server
function onData(connection : 4D.TCPConnection, event : 4D.TCPEvent)
    var info : string = convertToString(event.data, "UTF-8")

	//Warning: There's no guarantee you'll receive all the data you need in a single network packet.
	
// Callback called when the connection is closed unexpectedly
function onError(connection : 4D.TCPConnection , event : 4D.TCPEvent)
    var info : string = "Connection error"

// Callback called after onShutdown/onError just before the TCPConnection object is released
function onTerminate(connection : 4D.TCPConnection , event : 4D.TCPEvent)
    var info : string = "Connection terminated"

```

#### Usage example

Create a method named AsyncTCP, to initialize and manage the TCP connection:

```qs
var myObject : cs.MyAsyncTCPConnection
myObject = cs.MyAsyncTCPConnection.new("myURL", 10000)
myObject.connect()
myObject.getInfo()
myObject.disconnect()

```

Call the AsyncTCP method in a worker:

```qs
callWorker("new process", "Async_TCP")

```

### TCPConnection Object

A TCPConnection object is a non-sharable object.

TCPConnection objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #4D.TCPConnection.closed.Syntax -->](#closed)<br/><!-- INCLUDE #4D.TCPConnection.closed.Summary -->|
|[<!-- INCLUDE #4D.TCPConnection.errors.Syntax -->](#errors)<br/><!-- INCLUDE #4D.TCPConnection.errors.Summary -->|
|[<!-- INCLUDE #4D.TCPConnection.noDelay.Syntax -->](#nodelay)<br/><!-- INCLUDE #4D.TCPConnection.noDelay.Summary -->|
|[<!-- INCLUDE #4D.TCPConnection.send().Syntax -->](#send)<br/><!-- INCLUDE #4D.TCPConnection.send().Summary -->|
|[<!-- INCLUDE #4D.TCPConnection.shutdown().Syntax -->](#shutdown)<br/><!-- INCLUDE #4D.TCPConnection.shutdown().Summary -->|
|[<!-- INCLUDE #4D.TCPConnection.wait().Syntax -->](#wait)<br/><!-- INCLUDE #4D.TCPConnection.wait().Summary -->|


<!-- REF #4D.TCPConnection.new().Desc -->
## 4D.TCPConnection.new()


<!-- REF #4D.TCPConnection.new().Syntax -->**4D.TCPConnection.new**( *serverAddress* : string , *serverPort* : integer , *options* : object  ) : 4D.TCPConnection<!-- END REF -->


<!-- REF #4D.TCPConnection.new().options -->
|Parameter|Type| |Description|
|---|---|---|---|
|serverAddress|string|&#8594;|Domain name or IP address of the server|
|serverPort|integer|&#8594;|Port number of the server|                          
|options|object|&#8594;|Configuration [options](#options-parameter) for the connection|
|Result|TCPConnection|&#8592;|New TCPConnection object|                                

<!-- END REF -->

#### Description


The `4D.TCPConnection.new()` function <!-- REF #4D.TCPConnection.new().Summary -->creates a new TCP connection to the specified *serverAddress* and *serverPort*, using the defined *options*, and returns a `4D.HTTPRequest` object<!-- END REF -->.


#### `options` parameter

In the *options* parameter, pass an object that can contain the following properties:

|Property|Type|Description|Default|
|---|---|---|---|
|onConnection|formula|Callback triggered when the connection is established.|undefined|
|onData|formula|Callback triggered when data is received|undefined|
|onShutdown|formula|Callback triggered when the connection is properly closed|undefined|
|onError|formula|Callback triggered in case of an error|undefined|
|onTerminate|formula|Callback triggered just before the TCPConnection is released|undefined|
|noDelay|Boolean|**Read-only** Disables Nagle's algorithm if `true`|False|


#### Callback functions

All callback functions receive two parameters:

|Parameter|Type|Description|
|---|---|---|
|connection|[`TCPConnection` object](#tcpconnection-object)|The current TCP connection instance.|
|event|[`TCPEvent` object](#tcpevent-object)|Contains information about the event.|

**Sequence of Callback Calls:**

1. `onConnection` is triggered when the connection is established.
2. `onData` is triggered each time data is received.
3. Either `onShutdown` or `onError` is triggered:
   - `onShutdown` is triggered when the connection is properly closed.
   - `onError` is triggered if an error occurs.
4. `onTerminate` is always triggered just before the TCPConnection is released (connection is closed or an error occured).


#### TCPEvent object

A [`TCPEvent`](TCPEventClass.md) object is returned when a [callback function](#callback-functions) is called.

<!-- END REF -->

<!-- REF #4D.TCPConnection.closed.Desc -->
## .closed

<!-- REF #4D.TCPConnection.closed.Syntax -->**closed** : boolean<!-- END REF -->

#### Description

The `.closed` property contains <!-- REF #4D.TCPConnection.closed.Summary -->whether the connection is closed<!-- END REF -->. Returns `true` if the connection is closed, either due to an error, a call to `shutdown()`, or closure by the server.

<!-- END REF -->

<!-- REF #4D.TCPConnection.errors.Desc -->
## .errors

<!-- REF #4D.TCPConnection.errors.Syntax -->**errors** : collection<!-- END REF -->

#### Description

The `.errors` property contains <!-- REF #4D.TCPConnection.errors.Summary -->a collection of error objects associated with the connection<!-- END REF -->. Each error object includes the error code, a description, and the signature of the component that caused the error.

|Property||Type|Description|
|---|---|---|---|
|errors||collection|4D error stack in case of error|
||[].errCode|integer|4D error code|
||[].message|string|Description of the 4D error|
||[].componentSignature|string|Signature of the internal component which returned the error|


<!-- END REF -->

<!-- REF #4D.TCPConnection.noDelay.Desc -->
## .noDelay

<!-- REF #4D.TCPConnection.noDelay.Syntax -->**noDelay** : boolean<!-- END REF -->

#### Description

The `.noDelay` property contains <!-- REF #4D.TCPConnection.noDelay.Summary -->whether Nagle's algorithm is disabled (`true`) or enabled (`false`)<!-- END REF -->. This property is **read-only**.



<!-- END REF -->

<!-- REF #4D.TCPConnection.send().Desc -->
## .send()

<!-- REF #4D.TCPConnection.send().Syntax -->**.send**( *data* : blob )<!-- END REF -->

<!-- REF #4D.TCPConnection.send().options -->
|Parameter|Type||Description|
|---|---|---|---|
|data|blob|&#8594;|Data to be sent|
<!-- END REF -->

#### Description

The `send()` function <!-- REF #4D.TCPConnection.send().Summary -->sends data to the server<!-- END REF -->. If the connection is not established yet, the data is sent once the connection is established.

<!-- END REF -->

<!-- REF #4D.TCPConnection.shutdown().Desc -->
## .shutdown()

<!-- REF #4D.TCPConnection.shutdown().Syntax -->**.shutdown**()<!-- END REF -->

<!-- REF #4D.TCPConnection.shutdown().options -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->

#### Description

The `shutdown()` function <!-- REF #4D.TCPConnection.shutdown().Summary -->closes the *write* channel of the connection (client to server stream)<!-- END REF --> while keeping the *read* channel (server to client stream) open, allowing you to continue receiving data until the connection is fully closed by the server or an error occurs.


<!-- END REF -->

<!-- REF #4D.TCPConnection.wait().Desc -->
## .wait()

<!-- REF #4D.TCPConnection.wait().Syntax -->**.wait**()<br/>**.wait**( *timeout* : Real )<!-- END REF -->

<!-- REF #4D.TCPConnection..wait().options -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|timeout|Real|&#8594;|Maximum wait time in seconds|
<!-- END REF -->

#### Description

The `wait()` function <!-- REF #4D.TCPConnection.wait().Summary -->waits until  the TCP connection is closed or the specified `timeout` is reached<!-- END REF -->

:::note 

During the `.wait()` execution, callback functions are executed, whether they originate from other instances of the same class, or instances of any classes supporting the same callback mechanism (`HTTPRequest`, `TCPConnection`, `SystemWorker`). You can exit from a `.wait()` by calling [`shutdown()`](#shutdown) or `terminate()` (depending on the API) from a callback.

:::

<!-- END REF -->

