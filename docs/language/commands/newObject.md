---
id: newObject
title: newObject
---

<!-- REF #_command_.newObject.Syntax -->**newObject** {( *property* : string , *value* : any {, *...property* : string , *...value* : any} ) } : object<!-- END REF -->


<!-- REF #_command_.newObject.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|property|string|->|Name of property to create|
|value|integer, number, string, date, time, boolean, object, collection, picture|->|Value of property|
|Result|object|<-|New object|
<!-- END REF -->

#### Description

The `newObject` command <!-- REF #_command_.newObject.Summary -->creates a new empty or prefilled object and returns its reference<!-- END REF -->.

:::info

`newObject` is rarely necessary. It is usually recommended to create directly object literals with the `{}` operator, for example:

```qs
o = {a:"foo",b:42}
```

:::

If you do not pass any parameters, `newObject` creates an empty object and returns its reference.

Optionally, you can prefill the new object by passing one or several *property/value* pairs as parameters:

- In the *property* parameter, pass the label of the property to be created (up to 255 characters). Note that the property parameter is case sensitive and must comply with [Qodly rules for property names](../basics/lang-identifiers.md#object-properties).
- In the *value* parameter, pass the value you want to set for the property. The following types of values are supported:
	- number (all numeric values are stored as numbers)
	- string
	- boolean
	- date
	- time (stored as number of milliseconds)
	- null
	- picture
	- object
	- collection


#### Example

Create empty or filled objects:

```qs
var obj1, obj2, obj3, obj4 : object
obj1 = newObject
  // obj1 = {}
obj2 = newObject("name","Smith")
  // obj2 = {name:Smith}
obj3 = newObject("name","Smith","age",40)
  // obj3 = {name:Smith,age:40}

  // Note that this is equivalent to:
obj4 = {name:"Smith",age:40}
```
