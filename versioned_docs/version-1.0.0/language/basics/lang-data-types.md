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
|[picture](lang-picture.md)	|`var picture`|image|`pictureSize` == 0|
|[string](lang-text.md)	|`var string`|string|""|
|[time](lang-time.md) |`var time`|duration|00:00:00|
|[undefined](lang-null-undefined.md)	|-	|-|undefined|
|[variant](lang-variant.md)	|`var variant`|-|undefined|

:::note

Variant is actually not a *data* type but a *variable* type that can contain a value of any other data type. 

:::

You can evaluate a data type using [`type`](../commands/type.md) and [`valueType`](../commands/valueType.md) commands.   


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

(2) Time values are durations and can be treated as numbers.

:::note

In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.

:::

