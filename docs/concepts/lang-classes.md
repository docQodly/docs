---
id: lang-classes
title: Classes
---


## Overview

The Qodly language supports the concept of **classes**. In a programming language, using a class allows you to define an object behaviour with associated properties and functions.

Once a user class is defined, you can **instantiate** objects of this class anywhere in your code. Each object is an instance of its class. A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function) and properties ([static](#class-constructor) and [computed](#function-get-and-function-set)).

> The class model in Qodly is similar to classes in JavaScript, and based on a chain of prototypes.

For example, you could create a `Person` class with the following definition:

```4d  
//Class: Person.4qm
Class constructor(firstname : Text, lastname : Text)
 This.firstName=firstname
 This.lastName=lastname

Function get fullName() -> fullName : Text
 fullName=This.firstName+" "+This.lastName
 
Function sayHello() -> welcome : Text
 welcome="Hello "+This.fullName
```

In a method, creating a "Person":

```
var person : cs.Person //object of Person class  
var hello : Text
person=cs.Person.new("John","Doe")
//person:{firstName: "John", lastName: "Doe", fullName: "John Doe"}
hello=person.sayHello() //"Hello John Doe"
```

## Class definition

A user class in Qodly is defined by a specific [method](methods.md) file (.4qm), stored in the `/Project/Sources/Classes/` folder. The name of the file is the class name.

When naming classes, you should keep in mind the following rules:

- A [class name](identifiers.md#classes) must be compliant with [property naming rules](identifiers.md#object-properties).
- Class names are case sensitive.
- Giving the same name to a user class and a datastore's dataclass is not recommended, in order to prevent any conflict.


For example, if you want to define a class named "Polygon", you need to create the following file:

Project folder
 Project
  Sources
   Classes
    Polygon.4qm

## Class stores

Available classes are accessible from their class stores. Two class stores are available:

- `cs` for user class store
- `4D` for built-in class store

### `cs`

#### cs -> classStore

|Parameter|Type||Description|
|---|---|---|---|
|classStore|object|<-|User class store for the project|

The `cs` command returns the user class store for the current project. It returns all user classes [defined](#class-definition) in the opened project. By default, only project [ORDA classes](ORDA/ordaClasses.md) are available.

#### Example

You want to create a new instance of an object of `myClass`:

```4d
instance=cs.myClass.new()
```

### `4D`

#### 4D -> classStore

|Parameter|Type||Description|
|---|---|---|---|
|classStore|object|<-|4D class store|

The `4D` command returns the class store for available built-in Qodly classes. It provides access to specific APIs such as [CryptoKey](API/CryptoKeyClass.md).

#### Example

You want to create a new key in the `CryptoKey` class:

```4d
key=4D.CryptoKey.new(New object("type","ECDSA","curve","prime256v1"))
```

## Class object

When a class is [defined](#class-definition) in the project, it is loaded in the Qodly language environment. A class is an object itself, of ["Class" class](API/ClassClass.md). A class object has the following properties and function:

- [`name`](API/ClassClass.md#name) string
- [`superclass`](API/ClassClass.md#superclass) object (null if none)
- [`new()`](API/ClassClass.md#new) function, allowing to instantiate class objects.

In addition, a class object can reference a [`constructor`](#class-constructor) object (optional).

A class object is a [shared object](shared.md) and can therefore be accessed from different processes simultaneously.

### Inheritance

If a class inherits from another class (i.e. the [Class extends](classes.md#class-extends-classname) keyword is used in its definition), the parent class is its [`superclass`](API/ClassClass.md#superclass).

When Qodly does not find a function or a property in a class, it searches it in its [`superclass`](API/ClassClass.md#superclass); if not found, Qodly continues searching in the superclass of the superclass, and so on until there is no more superclass (all objects inherit from the "Object" superclass).

## Class keywords

Specific Qodly keywords can be used in class definitions:

- `Function <Name>` to define class functions of the objects.
- `Function get <Name>` and `Function set <Name>` to define computed properties of the objects.
- `Class constructor` to define static properties of the objects.
- `Class extends <ClassName>` to define inheritance.

:::info

[ORDA data model classes](XXX) support additional keywords such as `exposed` and `Alias`. 

:::



### `Function`

#### Syntax

```4d
Function <name>({parameterName : type, ...}){->parameterName : type}
// code
```

Class functions are specific properties of the class. They are objects of the [4D.Function](API/FunctionClass.md#about-4dfunction-objects) class.

In the class definition file, function declarations use the `Function` keyword, and the name of the function. The function name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

:::tip

Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the code editor. For example, if you declare `Function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs.MyClass. "`.

:::

Immediately following the function name, [parameters](#parameters) for the function can be declared with an assigned name and data type, including the return parameter (optional). For example:

```4d
Function computeArea(width : Integer , height : Integer)-> area : Integer
```

Within a class function, the `This` command is used as the object instance. For example:

```4d  
Function setFullname(firstname : Text, lastname : Text)
 This.firstName=firstname
 This.lastName=lastname

Function getFullname()->fullname : Text
 fullname=This.firstName+" "+Uppercase(This.lastName)
```
  
For a class function, the `Current method name` command returns `<ClassName>.<FunctionName>`, for example "MyClass.myFunction".

In the application code, class functions are called as member methods of the object instance and can receive [parameters](#class-function-parameters) if any. The following syntaxes are supported:

- use of the `()` operator. For example, `myObject.methodName("hello")`
- use of a "4D.Function" class member method:
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)
 

#### Parameters

Function parameters are declared using the parameter name and the parameter type, separated by a colon (:). The parameter name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties). Multiple parameters (and types) are separated by commas (,).

```4d  
Function add(x, y : Variant, z : Integer, xy : Object)
```

If the type is not stated, the parameter will be defined as `Variant`.


#### Return value

You declare the return parameter (optional) by adding an arrow (`->`) and the return parameter definition after the input parameter(s) list, or a colon (`:`) and the return parameter type only. For example:

```4d
Function add(x : Variant, y : Integer)->result : Integer
 result=x+y
```

You can also declare the return parameter by adding only `: type` and use the [`return expression`](parameters.md#return-expression) (it will also end the function execution). For example:

```4d
Function add(x : Variant, y : Integer): Integer
 // some code
 return x+y
```

#### Example 1

```4d
// Class: Rectangle
Class constructor(width : Integer, height : Integer)
 This.name="Rectangle"
 This.height=height
 This.width=width

// Function definition
Function getArea()->result : Integer
 result=(This.height)*(This.width)
```

```4d
// In a project method

var rect : cs.Rectangle
var area : Real

rect=cs.Rectangle.new(50,100)  
area=rect.getArea() //5000
```

#### Example 2

This example uses the [`return expression`](parameters.md#return-expression):

```4d
Function getRectArea(width : Integer, height : Integer) : Integer
 If (width > 0 && height > 0)
  return width * height
 Else
  return 0
 End if
```

### `Function get` and `Function set`

#### Syntax

```4d
Function get <name>()->result : type
// code
```

```4d
Function set <name>(parameterName : type)
// code
```

`Function get` and `Function set` are accessors defining **computed properties** in the class. A computed property is a named property with a data type that masks a calculation. When a computed property value is accessed, Qodly substitutes the corresponding accessor's code:

- when the property is read, the `Function get` is executed,
- when the property is written, the `Function set` is executed.

If the property is not accessed, the code never executes.

Computed properties are designed to handle data that do not necessary need to be kept in memory. They are usually based upon persistent properties. For example, if a class object contains as persistent property the *gross price* and the *VAT rate*, the *net price* could be handled by a computed property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property. The name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

`Function get` returns a value of the property type and `Function set` takes a parameter of the property type. Both arguments must comply with standard [function parameters](#parameters).

When both functions are defined, the computed property is **read-write**. If only a `Function get` is defined, the computed property is **read-only**. In this case, an error is returned if the code tries to modify the property. If only a `Function set` is defined, Qodly returns *undefined* when the property is read.

The type of the computed property is defined by the `return` type declaration of the *getter*. It can be of any [valid property type](dt_object.md).

:::info

Assigning *undefined* to an object property clears its value while preserving its type. In order to do that, the `Function get` is first called to retrieve the value type, then the `Function set` is called with an empty value of that type.

:::

#### Example 1

```4d  
//Class: Person.4qm

Class constructor(firstname : Text, lastname : Text)
 This.firstName=firstname
 This.lastName=lastname

Function get fullName() -> fullName : Text
 fullName=This.firstName+" "+This.lastName

Function set fullName( fullName : Text )
 p=Position(" ", fullName)
 This.firstName=Substring(fullName, 1; p-1)
 This.lastName=Substring(fullName, p+1)
```

```4d
//in a method
fullName=person.fullName // Function get fullName() is called
person.fullName="John Smith" // Function set fullName() is called
```

#### Example 2

```4d
Function get fullAddress()->result : Object
 
 result=New object
 
 result.fullName=This.fullName
 result.address=This.address
 result.zipCode=This.zipCode
 result.city=This.city
 result.state=This.state
 result.country=This.country 
```

### `Class Constructor`

#### Syntax

```4d
// Class: MyClass
Class Constructor({parameterName : type, ...})
// code
```

A class constructor function, which can accept [parameters](#parameters), can be used to define a user class.  

In that case, when you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: `<ClassName>:constructor`, for example "MyClass:constructor".

#### Example

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor (name : Text)
 This.name=name
```

```4d
// in a method
// you can instantiate an object
var o : cs.MyClass
o=cs.MyClass.new("HelloWorld")  
// o == {"name":"HelloWorld"}
```

### `Class extends <ClassName>`

#### Syntax

```4d
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object and [ORDA classes](../ORDA/ordaClasses.md) which are extended by default for user classes).
- A user class cannot extend a user class from another project or component.
- A user class cannot extend itself.
- It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a").

Breaking such a rule is not detected by the code editor or the interpreter, only the `check syntax` will throw an error in this case.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.

#### Example

This example creates a class called `Square` from a class called `Polygon`.

```4d
//Class: Square

//path: Classes/Square.4dm 

Class extends Polygon

Class constructor (side : Integer)
 
 // It calls the parent class's constructor with lengths
 // provided for the Polygon's width and height
 Super(side,side)
 // In derived classes, Super must be called 
 // before you can use 'This'
 This.name="Square"



 Function getArea() -> result : Integer
  result:=This.height*This.width
```

### `Super`

#### Syntax

```4d
Super {( param{,...,paramN} )} {-> Object}
```

|Parameter|Type||Description|  
|---|---|---|---|
|param|Mixed|->|Parameter(s) to pass to the parent constructor|
|Result|Object|<-|Object's parent|

The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

1. Inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used.

- If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's up to the developer to make sure calls are valid.
- If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.
- If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.
 
```4d
// inside myClass constructor
var text1, text2 : Text
Super(text1) //calls superclass constructor with a text param
This.param=text2 // use second param
```

2. Inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) //calls "doSomething" function  
//declared in superclasses
```

#### Example 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

```4d
// Class: Rectangle
Class constructor(width : Integer, height : Integer)
 This.name="Rectangle"
 This.height=height
 This.width=width

 
Function sayName()
 return "Hi, I am a "+This.name+"."
 

Function getArea() -> area : Integer
 area=(This.height)*(This.width)
```

```4d
//Class: Square
 
Class extends Rectangle
 
Class constructor (side : Integer)
 
 // It calls the parent class's constructor with lengths
 // provided for the Rectangle's width and height
 Super(side;side)
 // In derived classes, Super must be called before you
 // can use 'This'
 This.name="Square"

Function getArea() -> area : Integer
 area=This.height*This.width
```

#### Example 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

```4d
//Class: Rectangle
 
Function nbSides() -> sides : Text
 sides="I have 4 sides"
```

You also created the `Square` class with a function calling the superclass function:

```4d
//Class: Square
 
Class extends Rectangle
 
Function description() -> sides:Text
 sides=Super.nbSides()+" which are all equal"
```

Then you can write in a method:

```4d
var square : Object
var message : Text
square=cs.Square.new()
message=square.description() //I have 4 sides which are all equal
```

### `This`

#### Syntax

```4d
This -> Object
```

|Parameter|Type||Description|  
|---|---|---|---| 
|Result|object|<-|Current object|

The `This` keyword returns a reference to the currently processed object. 

In most cases, the value of `This` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

When a formula is called as a member method of an object, its `This` is set to the object the method is called on. For example:

```4d
o=New object("prop",42,"f",Formula(This.prop))
val:=o.f() //42
```

When a [class constructor](#class-constructor) function is used (with the [`new()`](API/ClassClass.md#new) function), its `This` is bound to the new object being constructed.

```4d
//Class: ob
  
Class Constructor  
 
 // Create properties on This as
 // desired by assigning to them
 This.a=42 
```

```4d
// in a method  
o=cs.ob.new()
val=o.a //42
```

> When calling the superclass constructor in a constructor using the [Super](#super) keyword, keep in mind that `This` must not be called before the superclass constructor, otherwise an error is generated. See [this example](#example-1).

In any cases, `This` refers to the object the method was called on, as if the method were on the object.

```4d
//Class: ob
  
Function f()
 return This.a+This.b
```

Then you can write in a project method:

```4d
o=cs.ob.new()
o.a=5
o.b=3
val=o.f() //8

```

In this example, the object assigned to the variable $o doesn't have its own *f* property, it inherits it from its class. Since *f* is called as a method of o, its `This` refers to o.

## Class commands

Several commands of the Qodly language allows you to handle class features.

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` returns the class of the object passed in parameter.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.
