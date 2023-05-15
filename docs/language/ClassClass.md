---
id: ClassClass
title: Class
---


When a user class is [defined](basics/lang-classes.md#class-definition) in the project, it is loaded in the QodlyScript environment. A class is an object itself, of "Class" class, which has properties and a function.



### Functions and properties


||
|---|
|[**.name** : Text](#name)&nbsp;&nbsp;&nbsp;&nbsp;contains the name of the `4D.Class` object|
|[**.new**( *param* : any { *;...paramN* } ) : 4D.Class](#new)&nbsp;&nbsp;&nbsp;&nbsp;creates and returns a `cs.className` object which is a new instance of the class on which it is called |
|[**.superclass** : 4D.Class](#superclass)&nbsp;&nbsp;&nbsp;&nbsp;returns the parent class of the class |




## .name   

**.name** : Text

#### Description

The `.name` property contains the name of the `4D.Class` object. Class names are case sensitive.  

This property is **read-only**.






## .new()

**.new**( *param* : any { *;...paramN* } ) : 4D.Class



|Parameter|Type||Description|
|---------|--- |:---:|------|
|param|any|->|Parameter(s) to pass to the constructor function|
|Result|4D.Class|<-|New object of the class|


#### Description

The `.new()` function creates and returns a `cs.className` object which is a new instance of the class on which it is called. This function is automatically available on all classes from the [`cs` class store](basics/lang-classes.md#cs).

You can pass one or more optional *param* parameters, which will be passed to the [class constructor](basics/lang-classes.md#class-constructor) function (if any) in the className class definition. Within the constructor function, the [`This`](basics/lang-classes.md#this) is bound to the new object being constructed.

If `.new()` is called on a non-existing class, an error is returned.

#### Examples

To create a new instance of the Person class:

```4d
var person : cs.Person  
person=cs.Person.new() //create the new instance  
//person contains functions of the class
```

To create a new instance of the Person class with parameters:

```4d
//Class: Person.4dm
Class constructor(firstname : Text, lastname : Text, age : Integer)
	This.firstName=firstname
	This.lastName=lastname
	This.age=age
```

```4d
//In a method
var person : cs.Person  
person=cs.Person.new("John","Doe",40)  
//person.firstName : "John"
//person.lastName : "Doe"
//person.age : 40
```







## .superclass   


**.superclass** : 4D.Class

#### Description

The `.superclass` property returns the parent class of the class. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**.

A superclass of a user class is declared in a class by using the [`Class extends <superclass>`](basics/lang-classes.md#class-extends-classname) keyword.

This property is **read-only**.

#### Examples

```4d
var sup: Variant
sup=4D.File.superclass //Document
sup=4D.Document.superclass //Object
sup=4D.Object.superclass //null

// If you created a MyFile class  
// with `Class extends File`
sup=cs.MyFile.superclass //File

```



**See also:** [Super](basics/lang-classes.md#super)

