---
id: jsonResolvePointers
title: jsonResolvePointers
---



<!-- REF #_command_.jsonResolvePointers.Syntax -->**jsonResolvePointers** ( *aObject* : object , *options* : object) : object<!-- END REF -->


<!-- REF #_command_.jsonResolvePointers.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aObject|object|->|Object containing JSON pointers to resolve|
|||<-|Object with JSON pointers resolved (only if result is an object)|
|options|object|->|Options for pointer resolution|
|Result|object|<-|Object containing the result of the processing|
<!-- END REF -->

#### Description

The `jsonResolvePointers` command <!-- REF #_command_.jsonResolvePointers.Summary -->resolves all the JSON pointers found in the *aObject*, with regards to *options* settings (if any)<!-- END REF -->.

JSON pointers are particularily useful to:

* embed some part of an external JSON document or reuse a part of a JSON document in other places in the same JSON document, in order to factorize information,
* express a cyclic structure in JSON,
* define a template object containing default properties stored in JSON.

Pass in the *aObject* parameter an object containing JSON pointers to be resolved (for information on JSON pointer syntax, please refer to the [`Defining JSON Pointers`](#defining-json-pointers) paragraph below).

:::note

The source *aObject* will be updated with the result of pointer resolution after the command is executed (except if the result is not an object, see below). If you want to keep an original version of *aObject*, you may consider using the objectCopy beforehand.

:::

Optionally, you can pass in options an *aObject* containing specific properties to be used when resolving pointers. The following properties are supported:

|Property|Value type|Description|
|:----|:----|:----|
|rootFolder|string|Absolute path (using standard Qodly syntax) to the folder to be used to resolve relative pointers in *aObject*. Default is the database Resources folder.|
|merge|boolean|Merge objects with pointer objects (true) instead of replacing them (false). Default is false |

After the command is executed:
* if the result of pointer resolution is an object, *aObject* is updated and contains the resulting object.
* if the result of pointer resolution is a scalar value (i.e. a text, a number...), *aObject* is left untouched and the resulting value is returned in the "value" property of the function result.

In any cases, the command returns an object containing the following properties:

|Property|Value type|Description|
|:----|:----|:----|
|value|any|Result of the command processing on object. If the result is an object, it is equal to output object.|
|success|boolean|true if all pointers have been resolved successfully|
|errors|collection|Collection of errors if any|
|errors[].code|number|error code|
|errors[].message|string|error message|
|errors[].pointerURI|string|pointer value|
|errors[].referredPath|string|document fullpath|

#### Defining JSON Pointers

JSON Pointer is a standard that defines a string syntax which can be used to access a particular field or key value in the entire JSON document. The standard has been described in the [`RFC 6901`](https://tools.ietf.org/html/rfc6901).

A JSON pointer is, strictly speaking, a string composed of parts separated by '/'. A JSON pointer is usually found in a URI that specifies the document into which the pointer will be resolved. The fragment character "#' is used in the URI to specify the JSON pointer. By convention, a URI containing a JSON pointer can be found in a JSON object property that must be named "ref".

```
{    "ref":<path>#<json_pointer> }
```

:::note

Qodly does not support the "-" character as reference to nonexistent arrray elements.

:::

#### Recursivity and path resolution

JSON pointers are resolved recursively, which means that if a resolved pointer also contains pointers, they are resolved recursively and so on, until all pointers are resolved. In this context, all file paths found in JSON pointer URIs can be relative or absolute. They must use '/' as path delimiter and are resolved the following way:

* A relative path must not start with '/'. It is resolved relatively to the JSON document where the path string has been found,
* An absolute path starts with '/'. Only filesystem pathnames are accepted as absolute paths. For example, "/SOURCES/Shared/templates/myfile.json" points to the file "myfile.json" located in the current database resources folder.

:::note

* The name resolution is case sensitive.
* Qodly does not resolve a path to a json file located over the network (starting with "http/https").

:::
