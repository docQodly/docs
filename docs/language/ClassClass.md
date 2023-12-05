---
id: ClassClass
title: Class
---


When a user class is [defined](basics/lang-classes.md#class-definition) in the project, it is loaded in the QodlyScript environment. A class is an object itself, of "Class" class, which has properties and a function.



### Functions and properties


||
|---|
|[<!-- INCLUDE #ClassClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.name.Summary -->|
|[<!-- INCLUDE #ClassClass.new().Syntax -->](#new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.new().Summary --> |
|[<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.superclass.Summary --> |



<!-- REF ClassClass.name.Desc -->
## .name   

<!-- REF #ClassClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Description

The `.name` property <!-- REF #ClassClass.name.Summary -->contains the name of the `4D.Class` object<!-- END REF -->. Class names are case sensitive.  

This property is **read-only**.

<!-- END REF -->



<!-- REF ClassClass.new().Desc -->
## .new()

<!-- REF #ClassClass.new().Syntax -->**.new**( { *...param* : any } ) : 4D.Class<!-- END REF -->


<!-- REF #ClassClass.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|param|any|->|Parameter(s) to pass to the constructor function|
|Result|4D.Class|<-|New object of the class|<!-- END REF -->


#### Description

The `.new()` function <!-- REF #ClassClass.new().Summary -->creates and returns a `cs.className` object which is a new instance of the class on which it is called<!-- END REF -->. This function is automatically available on all classes from the [`cs` class store](basics/lang-classes.md#cs).

You can pass one or more optional *param* parameters, which will be passed to the [class constructor](basics/lang-classes.md#class-constructor) function (if any) in the className class definition. Within the constructor function, the [`This`](basics/lang-classes.md#this) is bound to the new object being constructed.

If `.new()` is called on a non-existing class, an error is returned.

#### Examples

To create a new instance of the Person class:

```qs
var person : cs.Person  
person = cs.Person.new() //create the new instance  
//person contains functions of the class
```

To create a new instance of the Person class with parameters:

```qs
//Class: Person.4dm
constructor(firstname : string, lastname : string, age : integer)
	this.firstName = firstname
	this.lastName = lastname
	this.age = age
```

```qs
//In a method
var person : cs.Person  
person = cs.Person.new("John","Doe",40)  
//person.firstName : "John"
//person.lastName : "Doe"
//person.age : 40
```


<!-- END REF -->



<!-- REF ClassClass.superclass.Desc -->
## .superclass   


<!-- REF #ClassClass.superclass.Syntax -->**.superclass** : 4D.Class<!-- END REF -->

#### Description

The `.superclass` property <!-- REF #ClassClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**.

A superclass of a user class is declared in a class by using the [`Class extends <superclass>`](basics/lang-classes.md#class-extends-classname) keyword.

This property is **read-only**.

#### Examples

```qs
var sup: variant
sup = 4D.File.superclass //Document
sup = 4D.Document.superclass //Object
sup = 4D.Object.superclass //null

// If you created a MyFile class  
// with `extends File`
sup = cs.MyFile.superclass //File

```



**See also:** [Super](basics/lang-classes.md#super)
<!-- END REF -->
