---
id: jsonParse
title: jsonParse
---


<!-- REF #_command_.jsonParse.Syntax -->**jsonParse** ( *jsonString* : string , *type* : integer {, \*} ) : any<!-- END REF -->


<!-- REF #_command_.jsonParse.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|jsonString|string|&#8594;|JSON string to parse|
|type|integer|&#8594;|Type in which to convert the values|
|*||&#8594;|Adds line position and offset of each property if returned value is an object|
|Result|any|&#8592;|Values extracted from JSON string|
<!-- END REF -->

#### Description

The `jsonParse` command <!-- REF #_command_.jsonParse.Summary -->parses the contents of a JSON-formatted string and extracts values that you can store in a Qodly field or variable<!-- END REF -->.

In `jsonString`, pass the JSON-formatted string whose contents you want to parse. This string must be formatted correctly, otherwise a parsing error is generated. `jsonParse` can therefore be used to validate JSON strings.

:::note

If you use pointers, you must call the [`jsonStringify`](jsonStringify.md) command before calling `jsonParse`.

:::

By default, if you omit the *type* parameter, Qodly attempts to convert the value obtained into the type of the variable or attribute used to store the results (if one is defined). Otherwise, Qodly attempts to infer its type. You can also force the type interpretation by passing one of the following constants in the *type* parameter:

|Constant|Type|Value|
|:----|:----|:----|
|kBoolean|integer|6|
|kCollection|integer|42|
|kDate|integer|4|
|kInteger|integer|9|
|kObject|integer|38|
|kNumber|integer|1|
|kString|integer|2|
|kTime|integer|11|

If you pass the `*` optional parameter and if the `jsonString` parameter represents an object, the returned object contains an additional property named `__symbols` that provides path, line position, and line offset of each property and sub-property of the object. This information can be useful for debugging purposes. The structure of the `__symbols` property is:

```json
__symbols:{//object description
	myAtt.mySubAtt...:{ //property path
	line:10, //line number of the property
	offset:35 //offset of the property from the beginning of the line       }    }
```

:::note

The `*` parameter is ignored if the returned value is not of the object *type*.

:::

#### See also

[`jsonStringify`](jsonStringify.md)<br/>
[`jsonValidate`](jsonValidate.md)
