---
id: objectClass
title: objectClass
---

<!-- REF #_command_.objectClass.Syntax -->**objectClass** ( *object* : object ) : object<!-- END REF -->


<!-- REF #_command_.objectClass.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|&#8594;|Object whose class is to be returned|
|Result|object|&#8592;|Class of object or `null` if not found|<!-- END REF -->


#### Description

The `objectClass` command <!-- REF #_command_.objectClass.Summary -->returns the class of the *object* passed in parameter<!-- END REF -->.

All objects inherit from the Object class. If *object* is not an existing object, `objectClass` returns `null`.

#### Example

You created the Polygon class:

```qs
  //Class: Polygon

 constructor(size1 : integer, size2 : integer)
 this.area = size1*size2
```

Then, in a method, you can write:

```qs
 var poly, class : object
 poly = cs.Polygon.new(4,3)

 class = objectClass(poly)
  //class contains Class: Polygon
```


#### See also

[objectEntries](objectEntries.md)<br/>
[objectValues](objectValues.md)
