---
id: objectValues
title: objectValues
---

<!-- REF #_command_.objectValues.Syntax -->**objectValues** ( *object* : object ) : collection<!-- END REF -->


<!-- REF #_command_.objectValues.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to return property values|
|Result|collection|<-|Collection of property values (variant)|
<!-- END REF -->



#### Description

The `objectValues` command <!-- REF #_command_.objectValues.Summary -->returns a collection of variants containing all of the enumerable property values of the *object*<!-- END REF -->.

The order of values within the returned collection follows the definition order of the properties.


#### Example

```qs
 var person : object
 var col : collection

 person = newObject
 person.lastName = "Smith"
 person.firstName = "Jenny"
 person.children = newObject("Mary",12,"Mark",8)

 col = objectValues(person)

  //col[0]:"Smith"
  //col[1]:"Jenny"
  //col[2]:{"Mary":12,"Mark":8}
```

#### See also

[objectEntries](objectEntries.md)<br/>
[objectKeys](objectKeys.md)
