---
id: HTTPRequestClass
title: HTTPRequest
---

The `HTTPRequest` class allows you to handle [`HTTPRequest objects`](#httprequest-object) that can be used to configure and send requests to an HTTP server, as well as to process the HTTP server responses.

The `HTTPRequest` class is available from the `4D` class store. You create and send HTTP requests using the [4D.HTTPRequest.new()](#4dhttprequestnew) function, that returns a [`HTTPRequest object`](#httprequest-object).


### Example

Create a `MyHttpRequestOptions` class for the request options:

```qs
Class constructor(method : string, headers : object, body : string)
	this.method=method
	this.headers=headers
	this.body=body

Function onResponse(request : 4D.HTTPRequest, event : object)
//My onResponse method, if you want to handle the request asynchronously

Function onError(request : 4D.HTTPRequest, event : object)
//My onError method, if you want to handle the request asynchronously
```

You can now create your request:

```qs
var headers : object
headers=newObject()
headers["field1"]="value1"

var myHttpRequestOptions : cs.MyHttpRequestOptions
myHttpRequestOptions = cs.MyHttpRequestOptions.new("GET", headers, "")

var request : 4D.HTTPRequest
request=4D.HTTPRequest.new("www.google.com", myHttpRequestOptions)
request.wait() //If you want to handle the request synchronously
//Now you can use request.response to access the result of the request or request.error to check the error that happened.
```

### Functions and properties

An HTTPRequest object is a non-sharable object.

HTTPRequest objects provide the following functions and properties:

||
|---|
|[<!-- INCLUDE #4D.HTTPRequest.new().Syntax -->](#4dhttprequestnew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPRequest.new().Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.dataType.Syntax -->](#dataType)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.dataType.Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.encoding.Syntax -->](#encoding)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.encoding.Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.errors.Syntax -->](#errors)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.errors.Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.headers.Syntax -->](#headers)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.headers.Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.method.Syntax -->](#method)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.method.Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.protocol.Syntax -->](#protocol)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.protocol.Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.response.Syntax -->](#response)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.response.Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Syntax -->](#returnResponseBody)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.returnResponseBody.Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.terminate().Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.terminated.Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.timeout.Syntax -->](#timeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.timeout.Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.url.Syntax -->](#url)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.url.Summary -->|
|[<!-- INCLUDE #HTTPRequestClass.wait().Syntax -->](#wait)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #HTTPRequestClass.wait().Summary -->|

<!-- REF #4D.HTTPRequest.new().Desc -->
## 4D.HTTPRequest.new()


<!-- REF #4D.HTTPRequest.new().Syntax -->**4D.HTTPRequest.new**( *url* : string { , *options* : object } ) : 4D.HTTPRequest<!-- END REF -->


<!-- REF #4D.HTTPRequest.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|url|string|->|URL to which to send the request|
|options|object|->|Request configuration properties|
|Result|4D.HTTPRequest|<-|New HTTPRequest object|<!-- END REF -->

#### Description

The `4D.HTTPRequest.new()` function <!-- REF #4D.HTTPRequest.new().Summary -->creates and sends a HTTP request to the HTTP server defined in *url* with the defined *options*, and returns a `4D.HTTPRequest` object<!-- END REF -->.

The returned `4D.HTTPRequest` object is used to process responses from the HTTP server and call functions.

In *url*, pass the URL where you want to send the request. The syntax to use is:

```
{http://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
{https://}[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

If you omit the protocol part (`http://` or `https://`), a https request is sent.

For example, you can pass the following strings:

```
    http://www.myserver.com
    www.myserver.com/path
    http://www.myserver.com/path?name="jones"
    https://www.myserver.com/login
    http://123.45.67.89:8083
    http://john:smith@123.45.67.89:8083
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html
```

#### `options` parameter

In the *options* parameter, pass an object that can contain the following properties:

|Property|Type|Description|Default|
|---|---|---|---|
|body|variant|Body of the request (required in case of `post` or `put` requests). Can be a text, a blob, or an object. The content-type is determined from the type of this property unless it is set inside the headers|undefined|
|certificatesFolder|[folder](FolderClass.md)|Sets the active client certificates folder|undefined|
|dataType|string|Type of the response body attribute. Values: "text", "blob", "object", or "auto". If "auto", the type of the body content will be deduced from its MIME type (object for JSON, text for text, javascript, xml, http message and url encoded form, blob otherwise)|"auto"|
|decodeData|boolean|If true, the data received in the `onData` callback is uncompressed|false|
|encoding|string|Used only in case of requests with a `body` (`post` or `put` methods). Encoding of the request body content if it's a text, ignored if content-type is set inside the headers|"UTF-8"|
|headers|object|Headers of the request. Syntax: `headers.key=value` (*value* can be a collection if the same key must appear multiple times)|Empty object|
|method|string|"POST", "GET", or other method|"GET"|
|minTLSVersion|string|Sets the minimum version of TLS: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"|"`TLSv1_2`"|
|onData|[function](FunctionClass.md)|Callback when data from the body is received. It receives two objects as parameters (see below)|undefined|
|onError|[function](FunctionClass.md)|Callback when an error occurs. It receives two objects as parameters (see below)|undefined|
|onHeaders|[function](FunctionClass.md)|Callback when the headers are received. It receives two objects as parameters (see below)|undefined|
|onResponse|[function](FunctionClass.md)|Callback when a response is received. It receives two objects as parameters (see below)|undefined|
|onTerminate|[function](FunctionClass.md)|Callback when the request is over. It receives two objects as parameters (see below)|undefined|
|protocol|string|"auto" or "HTTP1". "auto" means HTTP1 in the current implementation|"auto"|
|proxyAuthentication|[authentication object](#authentication-object)|object handling proxy authentication|undefined|
|serverAuthentication|[authentication object](#authentication-object)|object handling server authentication|undefined|
|returnResponseBody|boolean|If false, the response body is not returned in the [`response` object](#response). Returns an error if false and `onData` is undefined|true|
|timeout|real|Timeout in seconds. Undefined = no timeout|undefined|


#### Callback functions

All callback functions receive two object parameters:

|Parameter|Type|
|---|---|
|param1|[`HTTPRequest` object](#httprequest-object)|
|param2|[`Event` object](#event-object)|

Here is the sequence of callback calls:

1. `onHeaders` is always called once
2. `onData` is called zero or several times (not called if the request does not have a body)
3. If no error occured, `onResponse` is always called once
4. If an error occurs, `onError` is executed once (and terminates the request)
5. `onTerminate` is always executed once

#### event object

An `event` object is returned when a [callback function](#callback-functions) is called. It contains the following properties:

|Property|Type|Description|
|---|---|---|
|.data|blob|Received data. It is always *undefined* except in the `onData` callback|
|.type|text|Type of event. Possible values: "response", "error", "headers", "data", or "terminate|

#### authentication object

An authentication object handles the `options.serverAuthentication` or `options.proxyAuthentication` property. It can contain the following properties:

|Property|Type|Description|Default|
|---|---|---|---|
|name|string|Name used for authentication|undefined|
|password|string|Password used for authentication|undefined|
|method|string|Method used for authentication: "basic", "digest", "auto"|"auto"|

<!-- END REF -->

<!-- REF #HTTPRequestClass.dataType.Desc -->
## .dataType

<!-- REF #HTTPRequestClass.dataType.Syntax -->**dataType** : string<!-- END REF -->

#### Description

The `.dataType` property contains <!-- REF #HTTPRequestClass.dataType.Summary -->the `dataType` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "auto" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.encoding.Desc -->
## .encoding

<!-- REF #HTTPRequestClass.encoding.Syntax -->**encoding** : string<!-- END REF -->

#### Description

The `.encoding` property contains <!-- REF #HTTPRequestClass.encoding.Summary -->the `encoding` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew), "UTF-8" if it was omitted<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.errors.Desc -->
## .errors

<!-- REF #HTTPRequestClass.errors.Syntax -->**errors** : collection<!-- END REF -->

#### Description

The `.errors` property contains <!-- REF #HTTPRequestClass.errors.Summary -->the collection of all the errors if at least one error has been triggered<!-- END REF -->.

Here is the contents of the `.errors` property:

|Property||Type|Description|
|---|---|---|---|
|errors||collection|Qodly error stack in case of error|
||[].errCode|Number|Qodly error code|
||[].message|string|Description of the Qodly error|
||[].componentSignature|string|Signature of the internal component which returned the error|

<!-- END REF -->

<!-- REF #HTTPRequestClass.headers.Desc -->
## .headers

<!-- REF #HTTPRequestClass.headers.Syntax -->**headers** : object<!-- END REF -->

#### Description

The `.headers` property contains <!-- REF #HTTPRequestClass.headers.Summary -->the `headers` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains an empty object.

<!-- END REF -->

<!-- REF #HTTPRequestClass.method.Desc -->
## .method

<!-- REF #HTTPRequestClass.method.Syntax -->**method** : string<!-- END REF -->

#### Description

The `.method` property contains <!-- REF #HTTPRequestClass.method.Summary -->the `method` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains "GET".

<!-- END REF -->

<!-- REF #HTTPRequestClass.protocol.Desc -->
## .protocol

<!-- REF #HTTPRequestClass.protocol.Syntax -->**protocol** : string<!-- END REF -->

#### Description

The `.protocol` property contains <!-- REF #HTTPRequestClass.protocol.Summary -->the `protocol` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted or if "auto" was used, contains the version of the protocol used.


<!-- END REF -->

<!-- REF #HTTPRequestClass.response.Desc -->
## .response

<!-- REF #HTTPRequestClass.response.Syntax -->**response** : object<!-- END REF -->

#### Description

The `.response` property contains <!-- REF #HTTPRequestClass.response.Summary -->the response to the request if it has received at least the status code, undefined otherwise<!-- END REF -->.

A `response` object is a non-sharable object. It provides the following properties:

|Property|Type|Description|
|---|---|---|
|.body|variant|Body of the response. The type of the message is defined according to the [`dataType`](#datatype) property. Undefined if the body has not been received yet|
|.headers|object|Headers of the response. Header names are returned in lowercase. `<headername>.key` = value (value can be a collection if the same key appears multiple times). Undefined if the headers have not been received yet. |
|.status|number|Status code of the response|
|.statusText|string|Message explaining the status code|
|.rawHeaders|object|Headers of the response. Header names are returned untouched (with their original case). `<headerName>.key` = value (value can be a collection if the same key appears multiple times). Undefined if the headers have not been received yet.|

<!-- END REF -->

<!-- REF #HTTPRequestClass.returnResponseBody.Desc -->
## .returnResponseBody

<!-- REF #HTTPRequestClass.returnResponseBody.Syntax -->**returnResponseBody** : boolean<!-- END REF -->

#### Description

The `.returnResponseBody` property contains <!-- REF #HTTPRequestClass.returnResponseBody.Summary -->the `returnResponseBody` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains true.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminate().Desc -->
## .terminate()

<!-- REF #HTTPRequestClass.terminate().Syntax -->**.terminate**()<!-- END REF -->


<!-- REF #HTTPRequestClass.terminate().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|<!-- END REF -->

#### Description

The `.terminate()` function <!-- REF #HTTPRequestClass.terminate().Summary -->aborts the HTTP request<!-- END REF -->. It triggers the `onTerminate` event.

<!-- END REF -->

<!-- REF #HTTPRequestClass.terminated.Desc -->
## .terminated

<!-- REF #HTTPRequestClass.terminated.Syntax -->**terminated** : boolean<!-- END REF -->

#### Description

The `.terminated` property contains <!-- REF #HTTPRequestClass.terminated.Summary -->true if the request is terminated (after the call to `onTerminate`), false otherwise<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.timeout.Desc -->
## .timeout

<!-- REF #HTTPRequestClass.timeout.Syntax -->**timeout** : real<!-- END REF -->

#### Description

The `.timeout` property contains <!-- REF #HTTPRequestClass.timeout.Summary -->the `timeout` passed in the [`options`](#options-parameter) object when calling [new()](#4dhttprequestnew)<!-- END REF -->. If it was omitted, contains undefined.

<!-- END REF -->

<!-- REF #HTTPRequestClass.url.Desc -->
## .url

<!-- REF #HTTPRequestClass.url.Syntax -->**url** : string<!-- END REF -->

#### Description

The `.url` property contains <!-- REF #HTTPRequestClass.url.Summary -->the URL of the HTTP request<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPRequestClass.wait().Desc -->
## .wait()

<!-- REF #HTTPRequestClass.wait().Syntax -->**.wait**( { *time* : real } ) : HTTPRequestClass<!-- END REF -->


<!-- REF #HTTPRequestClass.wait().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|time|real|->|Maximum time in seconds to wait for the response|
|Result|4D.HTTPRequest|<-|HTTPRequest object|<!-- END REF -->

#### Description

The `wait()` function <!-- REF #HTTPRequestClass.wait().Summary -->waits for the response from the server<!-- END REF -->.

If a *time* parameter is passed, the function will wait at most the defined number of seconds.

If the response from the server has already arrived, the function returns immediately.
<!-- END REF -->
