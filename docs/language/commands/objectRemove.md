---
id: objectRemove
title: objectRemove
---


<!-- REF #_command_.objectRemove.Syntax -->**objectRemove** ( *object* : object , *property* : string )<!-- END REF -->


<!-- REF #_command_.objectRemove.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to edit|
|property |string|->|Name of property to remove|
<!-- END REF -->


#### Description

The `objectRemove` command <!-- REF #_command_.objectRemove.Summary -->removes *property* from the *object*<!-- END REF -->.

The command removes the property as well as its current value.

In the *property* parameter, pass the label of the property to be removed. Note that the *property* parameter is case sensitive.

If the *property* is not found at the first level of *object*, the command does nothing.

#### Example  

```qs
 var obj : object

 obj = {name : "Smith", info: {a: 20, b: 30}}
 objectRemove(obj, "name")
	//obj: {"info": {"a": 20, "b": 30}}
 objectRemove(obj.info, "b")
	//obj: {"info": {"a": 20}}
```
