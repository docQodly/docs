---
id: db
title: Qodly Database
---

## Overview


At the heart of the Qodly platform is the **Qodly Database**. Qodly Database is a powerful **relational database** (RDBMS) fully integrated to the ORDA technology. Qodly Database is an evolution of the 4D Database which has proven itself in terms of reliability and robustness for over 30 years. 

Qodly Database is a **nosql** database. Queries are expressed using a natural syntax and automatically optimized. 

Unlike other databases that require the addition and configuration of an external ORM (Object Relational Mapping) component, the Qodly Database is automatically available as an object thanks to the dynamic ORM layer implemented by the [ORDA technology](orda.md). In addition to performance, this architecture allows direct access to the datastore and the application API. Any change in the underlying model is automatically available in the API.



## Features

### Data types

The following table lists all available Qodly Database scalar data types and how they are handled in the QodlyScript language:

|Data Types	|Language support|Description|
|---|----|---|
|[Text]|`var string`	|A sequence of characters up to 2 GB|
|[String]	|`var string`	|A sequence of characters with properties|
|[UUID]|-|Universally Unique Identifier: a 16-bytes (128 bits) number containing 32 hexadecimal characters|
|[Date]|`var date`	|If the **Date only** property is selected for this attribute type, the date value will include only the "MM/DD/YYYY" format (e.g., "10/05/2023"). Otherwise, the date value including the time, stored in UTC. The date is expressed in the following format: YYYY-MM-DDTHH:MM:ss.SSSZ (e.g., "2023-10-05T23:00:00.000Z" for October 5, 2023 in the Central European Timezone). SSS represents the milliseconds, which can be between 0 to 999.	|
|[Duration]|`var long`	|A duration between two dates	|
|[Bool]|`var boolean`|A Boolean value: either true or false.|
|[Byte]	|-|A sequence of 8 bits.|
|[Word]|-|A 16-bit signed integer. Range: -32,767 to 32,768|
|[Number]|`var number`|A numeric value, can be a Real or a Long. Range: ±1.7e±308 (real), -2^31 to (2^31)-1 (long)|
|[Long]|`var nimber`	|A whole number, greater than or equal to a standard number. Range: -2,147,483,648 to 2,147,483,647 |
|[Object]|`var object`|Object containing any kind of property/value pairs, including collections. This data type can be indexed. Functions and recursive references are not supported|
|[Image]|`var picture`	|A path to an image file or an actual image.	|



### Capabilities

The following table lists the maximum capabilities of the Qodly Database per application:

|Capabilities|Maximum|
|---|---|
|Number of dataclasses|32,767|
|Number of attributes per dataclass|32,767|
|Number of entities per dataclass|1 billion|
|Number of index keys per dataclass|128 billion|
|Size of text attributes|2 GB|
|*Size BLOB fields*|2 GB|
|Size of object attributes|2 GB|
|Number of properties per object attribute|up to 128 billion*|
|Number of transaction levels|Unlimited|

* depending on the number of index keys


### Data Model

The Data Model describes how information is organized and stored in your application, according to your business rules. Built into Qodly is a data management system that lets you easily manipulate information. 

The Qodly **datastore** model uses a datastore class paradigm rather than a relational database methodology. Instead of representing information as tables, records, and fields, Qodly uses an approach that more accurately maps data to real world items and concepts. A dynamic **ORM** (Object Relational Mapping) automatically maps the underlying database to the high-level datastore concepts, allowing the use of advanced features such as alias attributes, relation attributes, computed attributes, and more. 

You create and configure your data model in Qodly Studio using the Data Model Designer that provides a graphical representation of your model.

### Transactions

The Qodly Database supports **transactions**. A transaction represents a series of changes made within a context on interconnected data. A transaction is only permanently saved in the datastore when the transaction is validated as a whole by calling `ds.validateTransaction()`. If a transaction has not been validated, whether it was cancelled or because of some external event, the changes are not saved.




## CRUD operations

CRUD (*Create, Read, Update, Delete*) operations in the Qodly Database are executed using the Qodly language or the REST API. Thanks to the ORDA concept, the database perfectly matches the QodlyScript language/REST APIs since they all share the same definition of objects:

- On the database side, the model itself as well as underlying tables and fields are automatically exposed as a datastore with datastore class and attributes, thanks to the dynamic ORM. 
- On the APIs side, the datastore (**ds**), datastore class, and attributes are automatically available as classes, functions, and properties. Keep in mind that the ORDA concept also includes access to objects describing **data**, such as entities and entity selections. 

For example, to create and save a new entity, you just have to write:

```qs
 employee=ds.Employee.new() //create an entity in the Employee dataclass
 employee.firstName="Mary" //update some attributes
 employee.lastName="Smith"
 status=employee.save() //save changes
``` 

To get or delete entities, you can just write:

```qs
 employees=ds.Employee.query("lastName=:1";"Smith") //query employees
 employee=employees.first() //get the entity
 status=employee.drop() //delete the entity
```



## Queries

Querying data is the most common database operation. You will always need to search, filter, and sort your data in datasources using different criteria.

Querying the Qodly Database can be done through two APIs:

- the QodlyScript language - using the **query()** function 
- the REST API - using the **$filter** command 

Note that **components** can execute automatic queries since they subscribe to datasources that connect to the server to get data.  

Queries always return **entity selections**. 

### Syntax

Queries are expressed through a natural, extensive **query syntax**. 

The basic syntax for a query is:

```
attribute|formula comparator value   
 {logicalOperator attribute|formula comparator value}...
 {order by attribute {desc | asc}}
```
where:

* **attribute**: path of attribute on which you want to execute the query. This parameter can be a simple name (for example "country") or any valid attribute path (for example "country.name".) In case of an attribute path whose type is `Collection`, \[] notation is used to handle all the occurences (for example "children\[].age").

* **formula**: a valid formula passed as `Text` or `Object`. The formula will be evaluated for each processed entity and must return a boolean value. Within the formula, the entity is available through the `This` object.  

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

* **value**: the value to compare to the current value of the property of each entity in the entity selection or element in the collection. 

* **logicalOperator**: used to join multiple conditions in the query (optional). You can use one of the following logical operators (either the name or the symbol can be used):

 |Conjunction|Symbol(s)|
 |---|---|
 |AND|&, &&, and|
 |OR | &#124;,&#124;&#124;, or|

* **order by attribute**: you can include an order by *attributePath* statement in the query so that the resulting data will be sorted according to that statement. You can use multiple order by statements, separated by commas (e.g., order by *attributePath1* desc, *attributePath2* asc). By default, the order is ascending. Pass 'desc' to define a descending order and 'asc' to define an ascending order.

Here are some examples of valid queries:

```
'employee.name == "smith" AND employee.firstname == "john"'
```

```
'(employee.age >= "30" OR employee.age <= "65") AND (employee.salary <= "10000" OR employee.status == "Manager")'
```


### Placeholders

Queries can include placeholders. A placeholder is a parameter that you insert in query strings and that is replaced by another value when the query string is evaluated. The value of placeholders is evaluated once at the beginning of the query; it is not evaluated for each element.

For example:

```qs
result=col.query("address.city = :1 & name =:2";city;myVar+"@")
result2=col.query("company.name = :1";"John's Pizzas")
```

```
entitySelection=ds.Student.query("nationality = :1 order by campus.name desc, lastname";"French")
```

### Parser

On the server, queries are processed by the Qodly **query parser** that translates the user query in a SQL-like statement, including automatic joins and subqueries: the **query plan**. It also optimizes the **query path**, depending on the query context. For example, the query analyzer can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low.


For more detailed information about queries in Qodly, see XXX.


