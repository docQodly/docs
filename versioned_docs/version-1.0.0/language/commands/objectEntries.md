---
id: objectEntries
title: objectEntries
---


<!-- REF #_command_.objectEntries.Syntax -->**objectEntries** ( *object* : object ) : collection<!-- END REF -->


<!-- REF #_command_.objectEntries.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|&#8594;|Object to return contents|
|Result|collection|&#8592;|Collection of objects with key / value properties|
<!-- END REF -->


#### Description

The `objectEntries` command <!-- REF #_command_.objectEntries.Summary -->returns a collection of objects containing the contents of the *object* as key / value property pairs<!-- END REF -->.

Each returned object contains the following properties:

|Property|Type|Description|
|---|---|---|
|key|string|Enumerable property name of the object|
|value|variant|Enumerable property value of the object|

Only first-level property names are returned (property names of sub-objects are not returned). The order of properties within the returned collection follows the definition order of the properties.


#### Example

Using an object as an hash map (key / value system) provides a quick and direct access to data, just like when using an index (e.g., if we need Mary's age, we can write: `persons["Mary"]`)


```qs
var individual, persons : object
var names, ages : collection
var result1, result2 : string

persons = newObject
persons["John"] = 42
persons["Andy"] = 24
persons["Mary"] = 30
persons["Paul"] = 50

result1 = "The average age is "+string(objectValues(persons).average())
result1 = result1+"/rThere are "+string(objectKeys(persons).length)+" persons"

ages = objectEntries(persons).query("value>:1",25)
result2 = "There are "+string(ages.length)+" persons who are over 25"
result2 = result2+"/rTheir names are: "+ages.extract("key").join("-")
```


#### See also

[objectKeys](objectKeys.md)&nbsp; 
[objectValues](objectValues.md)
