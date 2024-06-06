---
id: objectKeys
title: objectKeys
---


<!-- REF #_command_.objectKeys.Syntax -->**objectKeys** ( *object* : object ) : collection<!-- END REF -->


<!-- REF #_command_.objectKeys.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to return property names|
|Result|collection|<-|Collection of property names (strings)|<!-- END REF -->


#### Description

The `objectKeys` command returns a<!-- REF #_command_.objectKeys.Summary -->returns a collection of strings containing all of the enumerable property names of the *object*<!-- END REF -->.

Only first-level property names are returned (property names of sub-objects are not returned). The order of names within the returned collection follows the definition order of the properties.

#### Example

```qs
var person : object
var col : collection

person = newObject
person.lastName = "Smith"
person.firstName = "Jenny"
person.children = newObject("Mary",12,"Mark",8)

col = objectKeys(person)

  //col[0]:"lastName"
  //col[1]:"firstName"
  //col[2]:"children"
```

#### See also

[objectEntries](objectEntries.md)<br/>
[objectValues](objectValues.md)
