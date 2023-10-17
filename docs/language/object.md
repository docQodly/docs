---
id: object
title: Object
---

The Object commands manage [object](basics/lang-object.md) type elements.

## Commands

||
|---|
|[<!-- INCLUDE #_command_.instanceOf.Syntax -->](#instanceof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.instanceOf.Summary -->|
|[<!-- INCLUDE #_command_.newObject.Syntax -->](#newobject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.newObject.Summary -->|
|[<!-- INCLUDE #_command_.newSharedObject.Syntax -->](#newsharedobject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.newSharedObject.Summary -->|
|[<!-- INCLUDE #_command_.objectClass.Syntax -->](#objectclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectClass.Summary -->|
|[<!-- INCLUDE #_command_.objectCopy.Syntax -->](#objectcopy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectCopy.Summary -->|
|[<!-- INCLUDE #_command_.objectEntries.Syntax -->](#objectentries)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectEntries.Summary -->|
|[<!-- INCLUDE #_command_.objectIsDefined.Syntax -->](#objectisdefined)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectIsDefined.Summary -->|
|[<!-- INCLUDE #_command_.objectIsEmpty.Syntax -->](#objectisempty)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectIsEmpty.Summary -->|
|[<!-- INCLUDE #_command_.objectIsShared.Syntax -->](#objectisshared)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectIsShared.Summary -->|
|[<!-- INCLUDE #_command_.objectKeys.Syntax -->](#objectkeys)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectKeys.Summary -->|
|[<!-- INCLUDE #_command_.objectRemove.Syntax -->](#objectremove)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectRemove.Summary -->|
|[<!-- INCLUDE #_command_.objectValues.Syntax -->](#objectvalues)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectValues.Summary -->|
|[<!-- INCLUDE #_command_.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.storage.Summary -->|


## instanceOf

<!-- REF #_command_.instanceOf.Syntax -->**instanceOf** ( *object* : object , *class* : object ) : boolean<!-- END REF -->


<!-- REF #_command_.instanceOf.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object whose class is to be tested|
|class|object|->|Class to test belongship|
|Result|boolean|<-|True if object belongs to the specified class or a child class, and false otherwise|<!-- END REF -->


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

[objectClass](#objectclass)


## newObject

<!-- REF #_command_.newObject.Syntax -->**newObject** {( *property* : string , *value* : any {, *...property* : string , *...value* : any} ) } : object<!-- END REF -->


<!-- REF #_command_.newObject.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|property|string|->|Name of property to create|
|value|integer, number, string, date, time, boolean, object, collection, picture|->|Value of property|
|Result|object|<-|New object|<!-- END REF -->

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

- In the *property* parameter, pass the label of the property to be created (up to 255 characters). Note that the property parameter is case sensitive and must comply with [Qodly rules for property names](basics/lang-identifiers.md#object-properties). 
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





## newSharedObject

<!-- REF #_command_.newSharedObject.Syntax -->**newSharedObject** {( *property* : string , *value* : any {, *...property* : string , *...value* : any} ) } : object<!-- END REF -->


<!-- REF #_command_.newSharedObject.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|property|string|->|Name of property to create|
|value|integer, number, string, date, time, boolean, object, collection, picture|->|Value of property|
|Result|object|<-|New shared object|<!-- END REF -->

#### Description

The `newSharedObject` command <!-- REF #_command_.newSharedObject.Summary -->creates a new empty or prefilled shared object and returns its reference<!-- END REF -->. Adding or editing a property to this object must be surrounded by the `use...end` structure, otherwise an error is generated. Reading a property without a `use...end` structure is, however, possible. For more information, see the [Shared objects and shared collections](basics/lang-shared.md) page.

If you do not pass any parameters, `newSharedObject` creates an empty object and returns its reference. 

Optionally, you can prefill the new object by passing one or several *property/value* pairs as parameters:

- In the *property* parameter, pass the label of the property to be created (up to 255 characters). Note that the property parameter is case sensitive and must comply with [Qodly rules for property names](basics/lang-identifiers.md#object-properties). 
- In the *value* parameter, pass the value you want to set for the property. Shared objects can only contain values of the following types:
	- number (all numeric values are stored as numbers)
	- string
	- boolean
	- date
	- time (stored as number of milliseconds)
	- null
	- shared object
	- shared collection

:::info

Unlike standard (not shared) objects, shared objects do not support pictures and objects or collections that are not shared.

:::

#### Example 1

```qs
var contact : object
contact = newSharedObject("name","Smith","firstname","John")
```

#### Example 2

```qs
var s_obj : object
s_obj = newSharedObject("prop1","alpha")
use(s_obj)
    s_obj.prop1 = "omega"
end
```

#### See also

[objectIsShared](#objectisshared)


## objectClass

<!-- REF #_command_.objectClass.Syntax -->**objectClass** ( *object* : object ) : object<!-- END REF -->


<!-- REF #_command_.objectClass.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object whose class is to be returned|
|Result|object|<-|Class of object or `null` if not found|<!-- END REF -->


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

[objectEntries](#objectentries)<br/>[objectValues](#objectvalues)



## objectCopy

<!-- REF #_command_.objectCopy.Syntax -->**objectCopy** ( *object* : object ) : object<br/>**objectCopy** ( *object* : object , *option* : integer ) : object<br/>**objectCopy** ( *object* : object , *option* : integer , *groupWith* : object ) : object<br/>**objectCopy** ( *object* : object , *option* : integer , *groupWith* : collection ) : object<!-- END REF -->


<!-- REF #_command_.objectCopy.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to copy|
|option |integer|->|ck shared: return a shared object|
|groupWith|object|->|Shared object to be grouped with the resulting object|
|groupWith|collection|->|Shared collection to be grouped with the resulting object|
|Result|object|<-|Deep copy of *object*|<!-- END REF -->

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

## objectEntries

<!-- REF #_command_.objectEntries.Syntax -->**objectEntries** ( *object* : object ) : collection<!-- END REF -->


<!-- REF #_command_.objectEntries.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to return contents|
|Result|collection|<-|Collection of objects with key / value properties|<!-- END REF -->


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

[objectKeys](#objectkeys)<br/>[objectValues](#objectvalues)


## objectIsDefined

<!-- REF #_command_.objectIsDefined.Syntax -->**objectIsDefined** ( *object* : object {, *property* : string } ) : boolean<!-- END REF -->


<!-- REF #_command_.objectIsDefined.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to work with|
|property |string|->|If passed = property to check, if omitted = check object|
|Result|boolean|<-|<li>If *property* omitted: true if *object* is defined, otherwise false.</li><li>If *property* passed: true if *property* is defined, otherwise false.</li>|<!-- END REF -->


#### Description

The `objectIsDefined` command <!-- REF #_command_.objectIsDefined.Summary -->returns `true` if *object* or *property* is defined, and `false` otherwise<!-- END REF -->.

By default, if you omit the *property* parameter, the command checks whether the *object* is defined. An object is defined if its contents has been initialized. 

:::note

An object can be **defined** but **empty**. To find out if an object is undefined or empty, use the [`objectIsEmpty`](#objectisempty) command. 

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

[objectIsEmpty](#objectisempty)


## objectIsEmpty

<!-- REF #_command_.objectIsEmpty.Syntax -->**objectIsEmpty** ( *object* : object ) : boolean<!-- END REF -->


<!-- REF #_command_.objectIsEmpty.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to check|
|Result|boolean|<-|true if object is empty or undefined, otherwise false|<!-- END REF -->


#### Description

The `objectIsEmpty` command <!-- REF #_command_.objectIsEmpty.Summary -->returns `true` if *object* is undefined or empty, and `false` if *object* is defined (initialized) and contains at least one property<!-- END REF -->.

#### Example

```qs
 var ref : object
 var empty, def : boolean
 
 empty = objectIsEmpty(ref) // true
 def = objectIsDefined(ref) // false
 
 ref = {name : "Susie", age : 4}
 empty = objectIsEmpty(ref) // false
 def = objectIsDefined(ref) // true
 
 objectRemove(ref,"name")
 objectRemove(ref,"age")
 empty = objectIsEmpty(ref) // true
 def = objectIsDefined(ref) // true
```

#### See also

[objectIsDefined](#objectisdefined)


## objectIsShared

<!-- REF #_command_.objectIsShared.Syntax -->**objectIsShared** ( *object* : object ) : boolean<br/>**objectIsShared** ( *collection* : collection ) : boolean<!-- END REF -->


<!-- REF #_command_.objectIsShared.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to check|
|collection|collection|->|Collection to check|
|Result|boolean|<-|true if *object* or *collection* is shareable, false if it is alterable|<!-- END REF -->


#### Description

The `objectIsShared` command <!-- REF #_command_.objectIsShared.Summary -->returns `true` if *object* or *collection* is shareable, and `false` if it is alterable<!-- END REF -->.

For more information, see [Shared objects and collections](basics/lang-shared.md).

:::note

The command returns `true` if you pass a [shareable entity selection](../orda/data.md#shareable-or-alterable-entity-selections)

:::


## objectKeys

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

[objectEntries](#objectentries)<br/>[objectValues](#objectvalues)



## objectRemove

<!-- REF #_command_.objectRemove.Syntax -->**objectRemove** ( *object* : object , *property* : string )<!-- END REF -->


<!-- REF #_command_.objectRemove.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to edit|
|property |string|->|Name of property to remove|<!-- END REF -->


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


## objectValues

<!-- REF #_command_.objectValues.Syntax -->**objectValues** ( *object* : object ) : collection<!-- END REF -->


<!-- REF #_command_.objectValues.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to return property values|
|Result|collection|<-|Collection of property values (variant)|<!-- END REF -->



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

[objectEntries](#objectentries)<br/>[objectKeys](#objectkeys)


## storage

<!-- REF #_command_.storage.Syntax -->**storage** : object<!-- END REF -->


<!-- REF #_command_.storage.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Catalog of shared objects and shared collections registered in `storage`|<!-- END REF -->



#### Description

The `storage` command <!-- REF #_command_.storage.Summary -->returns the catalog of shared objects or shared collections that you have registered in the `storage` object on the current application<!-- END REF -->.

The catalog returned by `storage` is automatically created by Qodly and is available to all processes of the application, including preemptive processes. There is one `storage` shared object per server.

Use the `storage` catalog to reference any shared objects or shared collections that you want to be used from any preemptive or standard process. To register a shared object or a shared collection in the catalog, add its reference to the shared object returned by `storage`.

Since the catalog returned by `storage` is a shared object, it follows the rules described in the [Shared objects and shared collections](basics/lang-shared.md) section (but with some specificities):

- This object can only contain shared objects and shared collections. Trying to add other kinds of values (non-shared objects or collections, null, scalar values) will generate an error.
- Adding a property to this object must be surrounded by the `use...end` structure, otherwise an error is returned. Reading an attribute outside of a `use...end` structure is, however, possible.
- When surrounded by the `use...end` structure, first-level attributes of `storage` are locked for other processes.
- Unlike standard shared objects, the object returned by `storage` will NOT share its locking identifier with shared objects or collections added as attributes (and thus will not be locked).

#### Example 1 

Initializing the `storage` object:

```qs
 use(storage)
    storage.counters = newSharedObject("customers",0,"invoices",0)
 end
```

#### Example 2 

A standard way to set `storage` values:

```qs
 use(storage)
    storage.mydata: = newSharedObject
    use(storage.mydata)
       storage.mydata.prop1 = "Smith"
       storage.mydata.prop2 = 100
    end
 end
```

#### Example 3

`storage` allows implementing a singleton with a *lazy initialization*, as shown in the following example.


 declare -> counterValue : integer
 var counter : object //create a reference to counter for the process
 
 if(counter == null) //if this reference is null, get if from storage
    use(storage) //Use of storage needed only once!
       if(storage.counter == null)
          storage.counter = newSharedObject("operation",0)
       end
       counter = storage.counter //Get the reference of the counter shared object
    end
 end
 use(counter) //directly use the shared object counter (no need to use storage!)
    counter.operation = counter.operation+1
    counterValue = counter.operation
 end

:::note

For more information about singleton patterns, you can refer to [this Wikipedia page](https://en.wikipedia.org/wiki/Singleton_pattern).

:::



