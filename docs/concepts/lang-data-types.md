---
id: lang-data-types
title: Data types
---

In Qodly, data are handled according to their type in two places: the datastore and the QodlyScript language.

Although they are usually equivalent, some data types available at the datastore level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:

|Data Types	|Datastore support	|Language support|Variable declaration|
|---|----|---|---|
|[Text](Concepts/dt_string.md)	|Yes	|Yes|`Text`, `ARRAY TEXT`|
|[Date](Concepts/dt_date.md)	|Yes	|Yes|`Date`, `ARRAY DATE`|
|[Time](Concepts/dt_time.md)	|With date	|Yes|`Time`, `ARRAY TIME`|
|[Boolean](Concepts/dt_boolean.md)	|Yes	|Yes|`Boolean`, `ARRAY BOOLEAN`|
|[Integer](Concepts/dt_number.md)	|Yes	|Yes|`Integer`|`ARRAY INTEGER`, `ARRAY LONGINT`|
|[Real](Concepts/dt_number.md)	|Yes	|Yes|`Real`, `ARRAY REAL`|
|[Undefined](Concepts/dt_null_undefined.md)	|-	|Yes|-|
|[Null](Concepts/dt_null_undefined.md)	|-	|Yes|-|
|[Picture](Concepts/dt_picture.md)	|Yes	|Yes|`Picture`, `ARRAY PICTURE`|
|[BLOB](Concepts/dt_blob.md)	|Yes	|Yes|`Blob`, `4D.Blob`, `ARRAY BLOB`|
|[Object](Concepts/dt_object.md)	|Yes	|Yes|`Object`, `ARRAY OBJECT`|
|[Collection](Concepts/dt_collection.md)	|-	|Yes|`Collection`|
|[Variant](Concepts/dt_variant.md)(1)	|-	|Yes|`Variant`|


(1) Variant is actually not a *data* type but a *variable* type that can contain a value of any other data type. 

## Default values

When [variables](lang-variables.md) or [parameters](lang-parameters.md) are [typed](lang-variables.md#declaring-variables), they receive a default value, which they will keep during the session as long as they have not been assigned. 

The default value depends on the variable type:

|Type|Default value|  
|---|---|
|Booleen	|False	|
|Date	|00-00-00	|
|Integer|0	|
|Time|00:00:00	|
|Picture|picture size=0	|
|Real|0	|
|Text|""|
|Blob|Blob size=0|
|Object|null|
|Collection|null|
|Variant|undefined|


## Converting data types

QodlyScript contains operators and commands to convert between data types, where such conversions are meaningful. QodlyScript enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.

The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:

|Data Type to Convert|to String|to Number|to Date|to Time|to Boolean |
|---|---|---|---|---|---|
|String (1)||`Num`|`Date`|`Time`|`Bool`|
|Number (2)|`String`||||`Bool`|
|Date|`String`||||`Bool`|
|Time|`String`||||`Bool`|
|Boolean||`Num`||||

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the `JSON Parse` command.

(2) Time values can be treated as numbers.

:::note

In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.

:::

