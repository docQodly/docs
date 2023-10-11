---
id: json
title: JSON
---


## JSON Commands

||
|---|
|[<!-- INCLUDE #_command_.jsonParse.Syntax -->](#jsonparse)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.jsonParse.Summary -->|
|[<!-- INCLUDE #_command_.jsonResolvePointers.Syntax -->](#jsonresolvepointers)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.jsonResolvePointers.Summary -->|
|[<!-- INCLUDE #_command_.jsonStringify.Syntax -->](#jsonstringify)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.jsonStringify.Summary -->|
|[<!-- INCLUDE #_command_.jsonValidate.Syntax -->](#jsonvalidate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.jsonValidate.Summary -->|


## jsonParse

<!-- REF #_command_.jsonParse.Syntax -->**jsonParse** ( *jsonString* : string , *type* : integer {, \*} ) : object, mixed<!-- END REF -->


<!-- REF #_command_.jsonParse.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|jsonString|string|->|JSON string to parse|
|type|integer|->|Type in which to convert the values|
|*||->|Adds line position and offset of each property if returned value is an object|
|Result|object, mixed|<-|Values extracted from JSON string|<!-- END REF -->

#### Description

The `jsonParse` command <!-- REF #_command_.jsonParse.Summary -->parses the contents of a JSON-formatted string and extracts values that you can store in a Qodly field or variable<!-- END REF -->. 

In `jsonString`, pass the JSON-formatted string whose contents you want to parse. This string must be formatted correctly, otherwise a parsing error is generated. `jsonParse` can therefore be used to validate JSON strings. 

:::note

If you use pointers, you must call the [`jsonStringify`](#jsonstringify) command before calling `jsonParse`.

:::

By default, if you omit the *type* parameter, Qodly attempts to convert the value obtained into the type of the variable or field used to store the results (if one is defined). Otherwise, Qodly attempts to infer its type. You can also force the type interpretation by passing the *type* parameter: pass one of the following constants:

|Constant|Type|Value|
|:----|:----|:----|
|Is Boolean|integer|6|
|Is collection|integer|42|
|Is date|integer|4|
|Is longint|integer|9|
|Is object|integer|38|
|Is real|integer|1|
|Is text|integer|2|
|Is time|integer|11|

If you pass the * optional parameter and if the `jsonString` parameter represents an object, the returned object contains an additional property named __symbols that provides path, line position, and line offset of each property and sub-property of the object. This information can be useful for debugging purposes. The structure of the __symbols property is:

__symbols:{//object description    myAtt.mySubAtt...:{ //property path       line:10, //line number of the property       offset:35 //offset of the property from the beginning of the line       }    }

:::note

The * parameter is ignored if the returned value is not of the object *type*.

:::

#### See also

[`jsonStringify`](#jsonstringify)<br/>
[`jsonValidate`](#jsonvalidate)

## jsonResolvePointers

<!-- REF #_command_.jsonResolvePointers.Syntax -->**jsonResolvePointers** ( *aOject* : object , *options* : object) : object<!-- END REF -->


<!-- REF #_command_.jsonResolvePointers.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aOject|object|->|Object containing JSON pointers to resolve|
|||<-|Object with JSON pointers resolved (only if result is an object)|
|options|object|->|Options for pointer resolution|
|Result|object|<-|Object containing the result of the processing|<!-- END REF -->

#### Description

The `jsonResolvePointers` command <!-- REF #_command_.jsonResolvePointers.Summary -->resolves all the JSON pointers found in the *aObject*, with regards to *options* settings (if any)<!-- END REF -->. 

JSON pointers are particularily useful to:

* embed some part of an external JSON document or reuse a part of a JSON document in other places in the same JSON document, in order to factorize information,
* express a cyclic structure in JSON,
* define a template object containing default properties stored in JSON.

Pass in the *aObject* parameter an object containing JSON pointers to be resolved (for information on [`JSON pointer syntax`](#jsonpointersyntax), please refer to the Defining JSON Pointers paragraph below).

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

##### Description

JSON pointers are resolved recursively, which means that if a resolved pointer also contains pointers, they are resolved recursively and so on, until all pointers are resolved. In this context, all file paths found in JSON pointer URIs can be relative or absolute. They must use '/' as path delimiter and are resolved the following way:

* A relative path must not start with '/'. It is resolved relatively to the JSON document where the path string has been found,
* An absolute path starts with '/'. Only filesystem pathnames are accepted as absolute paths. For example, "/RESOURCES/templates/myfile.json" points to the file "myfile.json" located in the current database resources folder.

:::note

* The name resolution is case sensitive.
* Qodly does not resolve a path to a json file located over the network (starting with "http/https").

:::

## jsonStringify

<!-- REF #_command_.jsonStringify.Syntax -->**jsonStringify** ( *value* : object, mixed {, \*} ) : string<!-- END REF -->


<!-- REF #_command_.jsonStringify.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|value|object, mixed|->|Data to convert into JSON string|
|*||->|Pretty printing|
|Result|string|<-|String containing serialized JSON text|<!-- END REF -->

#### Description

The `jsonStringify` command <!-- REF #_command_.jsonStringify.Summary -->converts the *value* parameter into a JSON string<!-- END REF -->. This command performs the opposite action of the [`jsonParse`](#jsonparse) command.

Pass the data to be serialized in *value*. It can be expressed in scalar form (string, number, date or time) or by means of a Qodly object or collection

:::note

Qodly dates will be converted either in "yyyy-mm-dd" or "YYYY-MM-DDThh:mm:sssZ" format according to the current database date setting.

:::

You can pass the optional * parameter to include formatting characters in the resulting string. This improves the presentation of JSON data (known as pretty formatting).

#### Example 1

Conversion of scalar values:

```qs

 var vc, vel, vh, vd : string

 vc = jsonStringify("Eureka!") // "Eureka!"
 vel = jsonStringify(120) // "120"
 
 vh = jsonStringify(?20:00:00?) // "72000" seconds since midnight

 
 vd = jsonStringify(!28/08/2013!) // "2013-08-27T22:00:00.000Z" (Paris timezone)

```

#### Example 2

Conversion of a string containing special characters:

```qs
var s, p : string

 s = jsonStringify("{\"name\":\"john\"}")
  // s = "{\\"name\\":\\"john\\"}"
 p = jsonParse(s)
  // p = {"name":"john"}

```

#### See also

[`jsonParse`](#jsonparse)

## jsonValidate

<!-- REF #_command_.jsonValidate.Syntax -->**jsonValidate** ( *vJson* : object , *vSchema* : object) : object<!-- END REF -->


<!-- REF #_command_.jsonValidate.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|vJson|object|->|JSON object to validate|
|vSchema|object|->|JSON schema used to validate JSON objects|
|Result|object|<-|Validation status and errors (if any)|<!-- END REF -->

#### Description

The `jsonValidate` command <!-- REF #_command_.jsonValidate.Summary -->checks the compliance of the *vJson* JSON contents with the rules defined in the *vSchema* JSON schema<!-- END REF -->. If the JSON is invalid, the command returns a detailed description of error(s).

In *vJson*, pass a JSON object containing the JSON contents to be validated. 

:::note

Validating a JSON string consists of checking that it follows the rules defined in a JSON schema. This is different from checking that the JSON is well-formed, which is done by the [`jsonParse`](#jsonparse) command.

:::

In *vSchema*, pass the JSON schema to use for the validation. For more information on how to create a JSON schema, you may consult the [`json-schema.org`](http://json-schema.org/) web site.

:::note

To validate a JSON object, Qodly uses the norm described in the [`JSON Schema Validation`](https://tools.ietf.org/html/draft-wright-json-schema-validation-00) document (this draft is still being written and can evolve in the future). Qodly's current implementation is based upon the version 4 of the draft.

:::

If the JSON schema is not valid, Qodly returns a null object and throws an error that can be caught by an on error call method.

The `jsonValidate` returns an object that provides the status of the validation. This object can contain the following properties:

|Property name|Type|Description|
|:----|:----|:----|
|*success*|boolean|True if *vJson* is validated, false otherwise. If false, the *errors* property is also returned|
|*errors*|object collection|List of error objects if the *vJson* is not validated (see below)|

Each error object of the *errors* collection contains the following properties:

|Property name|Type|Description|
|:----|:----|:----|
|*code*|number|Error code|
|*jsonPath*|string|JSON path that cannot be validated in *vJson*|
|*line*|number|Line number of the error in the JSON file. This property is filled if the JSON has been parsed by [`jsonParse`](#jsonparse) with the * parameter. Otherwise, the property is omitted.|
|*message*|string|Error message|
|*offset*|number|Line offset of the error in the JSON file. This property is filled if the JSON has been parsed by [`jsonParse`](#jsonparse) with the * parameter. Otherwise, the property is omitted.|
|*schemaPaths*|string|JSON path in the schema that causes the validation error|

##### Error management

The following errors may be returned  :

|Code|JSON Keyword|Message|
|:----|:----|:----|
|2|multipleOf|Error while validating against 'multipleOf' key.|
|3|maximum|The value provided should not be greater than specified in the schema ("{s1}").|
|4|exclusiveMaximum|The value provided should be less than specified in the schema ("{s1}").|
|5|minimum|The value provided should not be less than specified in the schema ("{s1}").|
|6|exclusiveMinimum|The value provided should be greater than specified in the schema ("{s1}").|
|7|maxLength|The string is longer than specified in the schema.|
|8|minLength|The string is shorter than specified in the schema.|
|9|pattern|The string "{s1}" does not match the pattern in the schema:{s2}.|
|10|additionalItems|Error while validating an array. JSON contains more elements than specified in the schema.|
|11|maxItems|The array contains more items than specified in the schema.|
|12|minItems|The array contains less items than specified in the schema.|
|13|uniqueItems|Error while validating an array. Elements are not unique. Another instance of "{s1}" is already in the array.|
|14|maxProperties|The number of properties is greater than specified in the schema.|
|15|minProperties|The number of properties is less than specified in the schema.|
|16|required|The required property "{s1}" is missing.|
|17|additionalProperties|No additional properties allowed by the schema. The property(ies) {s1} should be removed.|
|18|dependencies|The property "{s1}" requires the property "{s2}".|
|19|enum|Error while validating against 'enum' key. "{s1}" does not match any enum element in the schema.|
|20|type|Incorrect type. Expected type is: {s1}|
|21|oneOf|The JSON matches more than one value.|
|22|oneOf|The JSON does not match any value.|
|23|not|The JSON is valid against the value of 'not'.|
|24|format|The string does not match ("{s1}")|


#### Example

You want to validate a JSON object with a schema and get the list of validation errors, if any, and store error lines and messages in a text variable:

```qs
var oResult : object
var vLNbErr : integer
var vTerrLine : string

oResult = jsonValidate(jsonParse(myJson; *), mySchema)

if (oResult.success) // validation successful
  // ...
else // validation failed
  vLNbErr = oResult.errors.length // get the number of error(s)
  ALERT(String($vLNbErr) + " validation error(s) found.")
  for (i, 0, vLNbErr)
    vTerrLine = vTerrLine + oResult.errors[i].message + " " + String(oResult.errors[i].line) + Carriage return
  end for
end if

```

#### See also

[`How to create a JSON schema`](http://json-schema.org/)<br/>
[`jsonParse`](#jsonparse)<br/>
[`JSON schema validation keywords on json-schema.org`](http://json-schema.org/latest/json-schema-validation.html)

