---
id: db
title: Qodly Database
---

## Architecture


At the heart of the Qodly platform is the Qodly database, named **QodlyDB**. QodlyDB is a powerful **relational database** (RDBMS) fully integrated to the ORDA technology. Qodly database is a **nosql** database. Queries are expressed using a natural syntax and automatically optimized. 

Unlike other databases that require the addition and configuration of an external ORM (Object Relational Mapping) component, the Qodly database is automatically available as an object thanks to the dynamic ORM layer implemented by ORDA. In addition to performance, this architecture allows direct access to the datastore and the application API. Any change in the underlying model is automatically available in the API.

![qodly database](img/qodlydb.png)



## Features

### Data types

The following table lists all available data types and how they are supported/declared in the Qodly database and in the Qodly language:

|Data Types	|Database support|Language declaration (var)|
|---|----|---|---|---|
|[Text](Concepts/dt_string.md)	|Yes	|`Text`|
|[Date](Concepts/dt_date.md)	|Yes	|`Date`|
|[Time](Concepts/dt_time.md)	|Yes	|`Time`|
|[Boolean](Concepts/dt_boolean.md)	|Yes	|`Boolean`|
|[Integer](Concepts/dt_number.md)	|Yes	|`Integer`|
|[Real](Concepts/dt_number.md)	|Yes	|`Real`|
|[Undefined](Concepts/dt_null_undefined.md)	|-	|Yes|
|[Null](Concepts/dt_null_undefined.md)	|-	|Yes|
|[Pointer](Concepts/dt_pointer.md)	|-	|`Pointer`|
|[Picture](Concepts/dt_picture.md)	|Yes	|`Picture`|
|[BLOB](Concepts/dt_blob.md)	|Yes	|`Blob`, `4D.Blob`|
|[Object](Concepts/dt_object.md)	|Yes	|`Object`|
|[Collection](Concepts/dt_collection.md)	|-	|`Collection`|
|[Variant](Concepts/dt_variant.md)	|-	|`Variant`|



### Capabilities

The following table lists the maximum capabilities of the Qodly database per application:

|Capabilities|Maximum|
|---|---|
|Number of dataclasses|32,767|
|Number of attributes per dataclass|32,767|
|Number of entities per dataclass|1 billion|
|Number of index keys per dataclass|128 billion|
|Size of text fields|2 GB|
|Size BLOB fields|2 GB|
|Size of object fields|2 GB|
|Number of properties per object attribute|up to 128 billion*|
|Number of transaction levels|Unlimited|

* depending on the number of index keys

 


## Queries

Qodly queries are expressed through a natural, extensive query syntax using the **query()** function. Queries can be built upon strings or formula objects. 

On the server, queries are processed by the Qodly **query parser** that translates the user query in a SQL-like statement, including automatic joins and subqueries. It also optimizes the query path, depending on the query context. For example, the query analyzer can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low.

Queries always return **entity selections**. 

### Syntax

The basic syntax for a query is:

```
attributePath|formula comparator value   
 {logicalOperator attributePath|formula comparator value}   
 {order by attributePath {desc | asc}}
```


where:

* **attributePath**: path of attribute on which you want to execute the query. This parameter can be a simple name (for example "country") or any valid attribute path (for example "country.name".) In case of an attribute path whose type is `Collection`, \[] notation is used to handle all the occurences (for example "children\[].age").

 >*You cannot use directly attributes whose name contains special characters such as ".", "\[ ]", or "=", ">", "#"..., because they will be incorrectly evaluated in the query string. If you need to query on such attributes, you must consider using placeholders, which allow an extended range of characters in attribute paths (see* **Using placeholders** *below).*

* **formula**: a valid formula passed as `Text` or `Object`. The formula will be evaluated for each processed entity and must return a boolean value. Within the formula, the entity is available through the `This` object.  

  * **Text**: the formula string must be preceeded by the `eval()` statement, so that the query parser evaluates the expression correctly. For example: *"eval(length(This.lastname) >=30)"*
  * **Object**: the [formula object](FunctionClass.md) is passed as a **placeholder** (see below). The formula must have been created using the [`Formula`](FunctionClass.md#formula) or [`Formula from string`](FunctionClass.md#formula-from-string) command.

 >* Keep in mind that Qodly formulas only support `&` and `|` symbols as logical operators.
 >* If the formula is not the only search criteria, the query engine optimizer could prior process other criteria (e.g. indexed attributes) and thus, the formula could be evaluated for only a subset of entities.

 Formulas in queries can receive parameters through $1. This point is detailed in the **formula parameter** paragraph below.

 >* You can also pass directy a `formula` parameter object instead of the `queryString` parameter (recommended when formulas are more complex). See **formula parameter** paragraph below.
 >* For security reasons, formula calls within `query()` functions can be disallowed. See `querySettings` parameter description.

* **comparator**: symbol that compares *attributePath* and *value*. The following symbols are supported:

 |Comparison| Symbol(s)| Comment|
 |---|---|---|
 |Equal to |=, == |Gets matching data, supports the wildcard (@), neither case-sensitive nor diacritic.|
 ||===, IS| Gets matching data, considers the @ as a standard character, neither case-sensitive nor diacritic|
 |Not equal to| #, != |Supports the wildcard (@)|
 ||!==, IS NOT| Considers the @ as a standard character|
 |Less than| <| |
 |Greater than| > ||
 |Less than or equal to| <=||
 |Greater than or equal to| >= ||
 |Included in| IN |Gets data equal to at least one of the values in a collection or in a set of values, supports the wildcard (@)|
 |Not condition applied on a statement| NOT| Parenthesis are mandatory when NOT is used before a statement containing several operators|
 |Contains keyword| %| Keywords can be used in attributes of string or picture type|

* **value**: the value to compare to the current value of the property of each entity in the entity selection or element in the collection. It can be a **placeholder** (see **Using placeholders** below) or any expression matching the data type property.
When using a constant value, the following rules must be respected:
  * **text** type constant can be passed with or without simple quotes (see **Using quotes** below). To query a string within a string (a "contains" query), use the wildcard symbol (@) in value to isolate the string to be searched for as shown in this example: "@Smith@". The following keywords are forbidden for text constants: true, false.
  * **boolean** type constants: **true** or **false** (case sensitive).
  * **numeric** type constants: decimals are separated by a '.' (period).
  * **date** type constants: "YYYY-MM-DD" format
  * **null** constant: using the "null" keyword will find **null** and **undefined** properties.  
  * in case of a query with an IN comparator, *value* must be a collection, or values matching the type of the attribute path between \[ ] separated by commas (for strings, `"` characters must be escaped with `\`).
* **logicalOperator**: used to join multiple conditions in the query (optional). You can use one of the following logical operators (either the name or the symbol can be used):

 |Conjunction|Symbol(s)|
 |---|---|
 |AND|&, &&, and|
 |OR | &#124;,&#124;&#124;, or|

* **order by attributePath**: you can include an order by *attributePath* statement in the query so that the resulting data will be sorted according to that statement. You can use multiple order by statements, separated by commas (e.g., order by *attributePath1* desc, *attributePath2* asc). By default, the order is ascending. Pass 'desc' to define a descending order and 'asc' to define an ascending order.












 perfectly matches the Qodly language since they both share the same definition of objects, thanks to the ORDA technology:

- On the database side, the model itself as well as tables and fields are automatically exposed as a datastore with datastore class and attributes. 
- On the language side, the datastore (**ds**), datastore class, and attributes are automatically available as classes, functions, and properties. Keep in mind that the ORDA concept also includes access to objects describing **data**, such as entities and entity selections. 




