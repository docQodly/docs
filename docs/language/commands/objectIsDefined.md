---
id: objectIsDefined
title: objectIsDefined
---

<!-- REF #_command_.objectIsDefined.Syntax -->**objectIsDefined** ( *object* : object {, *property* : string } ) : boolean<!-- END REF -->


<!-- REF #_command_.objectIsDefined.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to work with|
|property |string|->|If passed = property to check, if omitted = check object|
|Result|boolean|<-|<li>If *property* omitted: true if *object* is defined, otherwise false.</li><li>If *property* passed: true if *property* is defined, otherwise false.</li>|
<!-- END REF -->


#### Description

The `objectIsDefined` command <!-- REF #_command_.objectIsDefined.Summary -->returns `true` if *object* or *property* is defined, and `false` otherwise<!-- END REF -->.

By default, if you omit the *property* parameter, the command checks whether the *object* is defined. An object is defined if its contents has been initialized.

:::note

An object can be **defined** but **empty**. To find out if an object is undefined or empty, use the [`objectIsEmpty`](objectIsEmpty.md) command.

:::

If you pass the *property* parameter, the command checks whether this property exists in *object*. Note that the *property* parameter is case sensitive. If the *property* is not found at the first level of *object*, the command does nothing.

#### Example 1

```qs
 var obj : object
 var def : boolean
 def = objectIsDefined(obj) //false, obj is not initialized

 obj = newObject("Name","Martin")
 objectRemove(obj, "Name")
 def = objectIsDefined(obj) //true, obj is empty but initialized
```

#### Example 2

```qs
 var obj : object

 obj = newObject("Name","Smith", "Age", 42)  
 ...
 if(objectIsDefined(obj,"Age")
 	...
 end
```

This test is equivalent to:

```qs
 if(valueType(obj,"Age") != Is undefined)
```

#### See also

[objectIsEmpty](objectIsEmpty.md)
