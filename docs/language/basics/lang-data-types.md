---
id: lang-data-types
title: Data types
---


## Overview

In Qodly, data are handled according to their type in two places: the datastore and the QodlyScript language.

Although they are usually equivalent, some data types available at the datastore level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:

|Data Types	|Variable declaration|Datastore support (type)|Default value|
|---|----|---|
|[BLOB](lang-blob.md)	|`var blob`|blob|0 byte|
||`var 4D.Blob`|object|null|
|[Boolean](lang-boolean.md)	|`var boolean`|bool|false|
|[Collection](lang-collection.md)	|`var collection`|-|null|
|[Date](lang-date.md)|`var date`|date|00-00-00|
|[Null](lang-null.md)	|-	|-|null|
|[Number](lang-number.md)|`var integer`, `var real`|number|0|
|[Object](lang-object.md)	|`var object`|object|null|
|[Picture](lang-picture.md)	|`var picture`|image|`pictureSize`==0|
|[String](lang-text.md)	|`var string`|string|""|
|[Time](lang-time.md) |`var time`|number|00:00:00|
|[Undefined](lang-undefined.md)	|-	|-|undefined|
|[Variant](lang-variant.md)	|`var variant`|-|undefined|

:::note

Variant is actually not a *data* type but a *variable* type that can contain a value of any other data type. 

:::



### Converting data types

QodlyScript contains operators and commands to convert between data types, where such conversions are meaningful. QodlyScript enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.

The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:

|Data Type to Convert|to String|to Number|to Date|to Time|to Boolean |
|---|---|---|---|---|---|
|String (1)||`Num`|`Date`|`Time`|`Bool`|
|Number (2)|`String`||||`Bool`|
|Date|`String`||||`Bool`|
|Time|`String`||||`Bool`|
|Boolean||`Num`||||

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections using the `JSON Parse` command.

(2) Time values can be treated as numbers.

:::note

In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.

:::

