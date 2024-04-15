---
id: instanceOf
title: instanceOf
---


<!-- REF #_command_.instanceOf.Syntax -->**instanceOf** ( *object* : object , *class* : object ) : boolean<!-- END REF -->


<!-- REF #_command_.instanceOf.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object whose class is to be tested|
|class|object|->|Class to test belongship|
|Result|boolean|<-|True if object belongs to the specified class or a child class, and false otherwise|
<!-- END REF -->


#### Description

The `instanceOf` command returns <!-- REF #_command_.instanceOf.Summary -->returns `true` if *object* belongs to *class* or to one of its child classes, and `false` otherwise<!-- END REF -->.

If *class* is not a valid Class object, the error -10745 is returned.


#### Example

You created the Polygon class:

```qs
  //Class: Polygon

 constructor(size1 : integer, size2 : integer)
 this.area = size1*size2
```

Then, in a method, you can write:

```qs
 var poly : object
 var instance : boolean
 poly = cs.Polygon.new(4,3)

 instance = instanceOf(poly,cs.Polygon) //true
 instance = instanceOf(poly,4D.Object) //true
 instance = instanceOf(poly,cs.Circle) //false
```


#### See also

[objectClass](objectClass.md)
