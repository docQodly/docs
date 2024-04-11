---
id: objectCopy
title: objectCopy
---

<!-- REF #_command_.objectCopy.Syntax -->**objectCopy** ( *object* : object ) : object<br/>**objectCopy** ( *object* : object , *option* : integer ) : object<br/>**objectCopy** ( *object* : object , *option* : integer , *groupWith* : object ) : object<br/>**objectCopy** ( *object* : object , *option* : integer , *groupWith* : collection ) : object<!-- END REF -->


<!-- REF #_command_.objectCopy.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to copy|
|option |integer|->|ck shared: return a shared object|
|groupWith|object|->|Shared object to be grouped with the resulting object|
|groupWith|collection|->|Shared collection to be grouped with the resulting object|
|Result|object|<-|Deep copy of *object*|
<!-- END REF -->

#### Description

The `objectCopy` command <!-- REF #_command_.objectCopy.Summary -->returns an object containing a complete (deep) copy of the properties, sub-objects and values for the *object*<!-- END REF -->.

By default, `objectCopy` returns a regular (not shared) object, even if the command is applied to a shared object. Pass the `ck shared` constant in the *option* parameter to create a shared object. In this case, you can use the *groupWith* parameter to associate the shared object with another collection or object.

The *groupWith* parameter allows you to designate a collection or an object with which the resulting object should be associated.

:::note Notes

- `objectCopy` can be used with an entity selection object. By default if `ck shared` is omitted, a non-shareable entity selection is returned. If `ck shared` is passed, a shareable entity selection is returned. In this context, the *groupWith* option is useless since an entity selection does not have a locking identifier.
- The same principle applies to entity selections stored inside properties of *object*. However, the command is optimized when `ck shared` is passed and a nested entity selection is shareable: the same entity selection reference is returned in the resulting object.
- Datastore, dataclass, and entity objects are not copiable. If `objectCopy` command is called with them, a `null` value is returned

:::


#### Example 1

This example illustrates the deep copy of an object containing a sub-object:

```qs
var ob1, ob2, ob3 : object

ob1 = {info: {a: 20; b: 30}}  
	//ob1: {"info":{"a":20,"b":30}}
ob2 = ob1 //another reference to the same object
	//ob2: {"info":{"a":20,"b":30}}
ob3 = objectCopy(ob1) //deep copy of the object
	//ob3: {"info":{"a":20,"b":30}}

ob1.info.b = 1000 //modify ob1 and thus ob2
ob3.info.a = 5000 //modify the deep copy
	//ob1: {"info":{"a":20,"b":1000}}
	//ob2: {"info":{"a":20,"b":1000}}
	//ob3: {"info":{"a":5000,"b":30}}

```


#### Example 2

We want to copy the regular (non shared) *person* object into the *sharedPerson* shared object. To do this, we must create a shared copy of the object (*sharedPerson*).


```qs
 var person, copy, sharedPerson : object
 var text : string

 text = documentToString(file("/SOURCES/person.txt")
 person = jsonParse(text) //person is a standard object
 sharedPerson = newSharedObject()
 copy = objectCopy(person,ck shared) //copy is a shared object

  //So it can be put in sharedPerson
 use(sharedObject)
    sharedObject.person = copy
 end

```

#### Example 3

We want to copy *sharedObj* in *sharedColl* but since they belong to different shared groups, a direct copy would result in an error. We must make a copy of *sharedObj* and designate sharedColl* as shared group for the copy.

```qs
 var sharedObj, objCopy : object
 var sharedColl : collection

  //sharedObj belongs to a shared group
 sharedObj = newSharedObject("lastname","Smith","address",newSharedObject("city","New York"))
  //sharedColl belongs to another shared group
 sharedColl = newSharedCollection(newSharedObject("lastname","Brown"))

 objCopy = objectCopy(sharedObj,ck shared,sharedColl)
  //objCopy is now in the same shared group as sharedColl

  //So objCopy can be put in sharedColl without error
 use(sharedColl)
    sharedColl.push(objCopy)
 end
```
