---
id: lang-data-types
title: Data types
---


## Overview

In Qodly, data are handled according to their type in two places: the datastore and the QodlyScript language.

Although they are usually equivalent, some data types available at the datastore level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:

|Data Types	|Variable declaration|Datastore support (type)|Default value|
|---|----|---|----|
|[blob](lang-blob.md)	|`var blob`|blob|0 byte|
||`var 4D.Blob`|object|null|
|[boolean](lang-boolean.md)	|`var boolean`|bool|false|
|[collection](lang-collection.md)	|`var collection`|-|null|
|[date](lang-date.md)|`var date`|date|00-00-00|
|[null](lang-null-undefined.md)	|-	|-|null|
|[number](lang-number.md)|`var integer`, `var number`|number|0|
|[object](lang-object.md)	|`var object`|object|null|
|[picture](lang-picture.md)	|`var picture`|image|`pictureSize`==0|
|[string](lang-text.md)	|`var string`|string|""|
|[time](lang-time.md) |`var time`|number|00:00:00|
|[undefined](lang-null-undefined.md)	|-	|-|undefined|
|[variant](lang-variant.md)	|`var variant`|-|undefined|

:::note

Variant is actually not a *data* type but a *variable* type that can contain a value of any other data type. 

:::


## type

<!-- REF #_command_.type.Syntax -->**type** ( *var* : any ) : integer<!-- END REF -->


<!-- REF #_command_.type.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|var|any|->|Variable to be tested|
|Result|integer|<-|Data type number|<!-- END REF -->

#### Description

The `type` command <!-- REF #_command_.type.Summary -->returns a numeric value that indicates the type of variable you have passed in the *var* parameter<!-- END REF -->. 

Qodly provides the following predefined constants:

|Constant|Value|
|:----|:----|
|kBlob|30|
|kBoolean|6|
|kCollection|42|
|kDate|4|
|kInteger|9|
|kNull|255|
|kObject|38|
|kPicture|3|
|kNumber|1|
|kString|2|
|kTime|11|
|kUndefined|5|
|kVariant|12|

You can apply the `type` function to variables and sequential parameters ($1, $2...) of a method.

:::note

You cannot apply the `type` function to scalar expressions such as object properties (emp.name) or collection elements (myColl[5]). To do this, you must use the [`valueType`](#valuetype) command.

:::




## valueType

<!-- REF #_command_.valueType.Syntax -->**valueType** ( *expression* : any ) : integer<!-- END REF -->

<!-- REF #_command_.valueType.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|any|->|Expression whose resulting value to be tested|
|Result|integer|<-|Data type number|<!-- END REF -->


#### Description

The `valueType` command <!-- REF #_command_.valueType.Summary -->returns the type of the value resulting from the evaluation of the *expression* you passed as parameter<!-- END REF -->. 

The command returns a numeric value that can be compared with one of the following constants provided by Qodly:

|Constant|Value|
|:----|:----|
|kBlob|30|
|kBoolean|6|
|kCollection|42|
|kDate|4|
|kInteger|9|
|kNull|255|
|kObject|38|
|kPicture|3|
|kNumber|1|
|kString|2|
|kTime|11|
|kUndefined|5|
|kVariant|12|


This command is designed to return the type of a scalar expression, i.e. the value stored in or returned by the *expression* parameter. In particular, it can be applied to the following Qodly expressions:

- object properties (emp.name),
- collection elements (myCol[5]).

:::note

Numerical object properties are always considered number values:

```
var o : object
var vType : integer
o=newObject("value",42)
vType=valueType(o.value) //vType=kNumber
```

::: 

#### Example 1

You want to handle the various possible types of an object property value:

```qs
switch
	:(valueType(o.value)==kNumber)
  //handle a numeric value
    :(valueType(o.value)==kString)
  //handle a string
    :(valueType(o.value)==kObject)
  //handle a sub-object
       ...
end
```

#### Example 2

You want to sum up all numeric values in a collection:

```qs
var col : collection
var colSum : number
col=newCollection("Hello",20,"World2",15,50,currentDate,true,10)
for(i,0,col.length-1) //-1 since collections start at 0
	if(valueType(col[i])==kNumber)
       colSum=colSum+col[i]
    end
end
```


## Converting data types

QodlyScript contains operators and commands to convert between data types, where such conversions are meaningful. QodlyScript enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.

The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:

|Data Type to Convert|to String|to Number|to Date|to Time|to Boolean |
|---|---|---|---|---|---|
|String (1)||`num`|`date`|`time`|`bool`|
|Number (2)|`string`||||`bool`|
|Date|`string`||||`bool`|
|Time|`string`||||`bool`|
|Boolean||`num`||||

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections using the `jsonParse` command.

(2) Time values can be treated as numbers.

:::note

In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.

:::

