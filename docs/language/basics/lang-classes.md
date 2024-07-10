---
id: lang-classes
title: Classes
---


## Overview

The QodlyScript language supports the concept of **classes**. In a programming language, using a class allows you to define an object behaviour with associated properties and functions.

Once a user class is defined, you can **instantiate** objects of this class anywhere in your code. Each object is an instance of its class. A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function) and properties ([declared](#property) and [computed](#function-get-and-function-set)).

> The class model in QodlyScript is similar to classes in JavaScript, and based on a chain of prototypes.

For example, you could create a `Person` class with the following definition:

```qs  
//Class: Person
 constructor(firstname : string, lastname : string)
 this.firstName = firstname
 this.lastName = lastname

function get fullName() -> fullName : string
 fullName = this.firstName+" "+this.lastName

function sayHello() -> welcome : string
 welcome = "Hello "+this.fullName
```

In a method, creating a "Person":

```qs
var person : cs.Person //object of Person class  
var hello : string
person = cs.Person.new("John","Doe")
//person:{firstName: "John", lastName: "Doe", fullName: "John Doe"}
hello = person.sayHello() //"Hello John Doe"
```

## Creating classes

### User classes

To create a new user class in Qodly Studio, click on the **+** button of the Explorer and give a name to the class:

![class](img/class3.png)

You can also select **New > Class** from the menu bar, enter a name and click **Create**:

![class](img/class1.png)
![class](img/class2.png)


### Data Model classes

Data Model classes are automatically created when you click on the `<...>` button in the model editor, when a dataclass is selected. For more information, please refer to [this section](../../orda/data-model.md#creating-data-model-classes).



### Class definition

When naming classes, you should keep in mind the following rules:

- A [class name](lang-identifiers.md#classes) must be compliant with [property naming rules](lang-identifiers.md#object-properties).
- Class names are case sensitive.
- Giving the same name to a user class and a datastore's dataclass is not recommended, in order to prevent any conflict.

A user class in Qodly is defined by a specific [method file (.4qs)](../../studio/coding#4qs-files), stored in the `/Project/Sources/Classes/` folder. The name of the file is the class name. For example, a class named "Polygon" will be based upon the following file:

```
Project folder
 Project
  Sources
   Classes
    Polygon.4qs
```

## Class stores

Available classes are accessible from their class stores. Two class stores are available:

- `cs` for user class store
- `4D` for built-in class store

### `cs`

<!-- REF #_command_.cs.Syntax -->**cs** : object<!-- END REF -->

<!-- REF #_command_.cs.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Class Store containing all user classes of the current project|<!-- END REF -->

The `cs` command <!-- REF #_command_.cs.Summary -->returns a *Class Store* object containing all user classes defined in the current project<!-- END REF -->. This command is necessary to instantiate an object from a user class.

It returns all user classes defined in the opened project, as well as [Data Model classes](../../orda/data-model.md#creating-data-model-classes).

#### Example

You want to create a new instance of an object of `myClass`:

```qs
instance = cs.myClass.new()
```

### `4D`

<!-- REF #_command_.4D.Syntax -->**4D** : object<!-- END REF -->

<!-- REF #_command_.4D.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Class Store containing all built-in 4D classes|<!-- END REF -->

The `4D` command <!-- REF #_command_.4D.Summary -->returns a *Class Store* object containing all available built-in classes in the Qodly application<!-- END REF -->. It provides access to specific classes such as [CryptoKey](../CryptoKeyClass.md).


#### Example

You want to create a new key in the `CryptoKey` class:

```qs
key = 4D.CryptoKey.new(newObject("type","ECDSA","curve","prime256v1"))
```



## Class object

When a class is [defined](#class-definition) in the project, it is loaded in the QodlyScript language environment. A class is an object itself, of ["Class" class](../ClassClass.md). A class object has the following properties and function:

- [`name`](../ClassClass.md#name) string
- [`superclass`](../ClassClass.md#superclass) object (null if none)
- [`new()`](../ClassClass.md#new) function, allowing to instantiate class objects
- [`isShared`](../ClassClass.md#isshared) property, true if the class is shared
- [`isSingleton`](../ClassClass.md#issingleton) property, true if the class defines a singleton
- [`me`](../ClassClass.md#me) property, allowing to instantiate and access [singletons](#singleton-classes).


In addition, a class object can reference a [`constructor`](#constructor) object (optional).

A class object is a [shared object](lang-shared.md) and can therefore be accessed from different processes simultaneously.

### Inheritance

If a class inherits from another class (i.e. the [extends](#extends-classname) keyword is used in its definition), the parent class is its [`superclass`](../ClassClass.md#superclass).

When QodlyScript does not find a function or a property in a class, it searches it in its [`superclass`](../ClassClass.md#superclass); if not found, QodlyScript continues searching in the superclass of the superclass, and so on until there is no more superclass (all objects inherit from the "4D.Object" superclass).

### `objectClass`

#### `objectClass ( object ) -> object | null`

[`objectClass`](../commands/objectClass.md) returns the class of the object passed in parameter.

### `instanceOf`

#### `instanceOf ( object , class ) -> boolean`

[`instanceOf`](../commands/instanceOf.md) returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.


## Class keywords

Specific QodlyScript keywords can be used in class definitions:

- `function <Name>` to define class functions of the objects
- `function get <Name>` and `function set <Name>` to define computed properties of the objects
- `constructor` to define static properties of the objects
- `property` to define static properties of the objects with a type
- `extends <ClassName>` to define inheritance
- `super` to call the superclass
- `this` to reference the object being processed

:::info

[ORDA data model classes](../../orda/data-model.md) support additional keywords:

- [`exposed`](../../orda/data-model.md#exposed-vs-non-exposed-functions) to allow external access to the function,
- [`function query <attributeName>`](../../orda/data-model.md#function-query-attributename) and [`function orderBy <attributeName>`](../../orda/data-model.md#function-orderby-attributename) to define additional database functions for calculated attributes.

:::



### `function`

#### Syntax

```qs
{shared} function <name>({parameterName : type, ...}){->parameterName : type}
// code
```

Class functions are specific properties of the class. They are objects of the [4D.Function](../FunctionClass.md) class.

In the class definition file, function declarations use the `function` keyword, and the name of the function. If the function is declared in a [shared class](#shared-classes), you can use the `shared` keyword so that the function could be called without [`use...end` structure](lang-shared.md#useend). For more information, refer to the [Shared functions](#shared-functions) paragraph below.


The function name must be compliant with [property naming rules](lang-identifiers.md#object-properties).

:::note

Since properties and functions share the same namespace, using the same name for a property and a function is not allowed (an error is thrown in this case).

:::

:::tip

Starting a function name with an underscore character ("_") will exclude the function from the autocompletion features in the code editor. For example, if you declare `function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs.MyClass. "`.

:::

Immediately following the function name, [parameters](#parameters) for the function can be declared with an assigned name and data type, including the return parameter (optional). For example:

```qs
function computeArea(width : integer , height : integer)-> area : integer
```

Within a class function, the `this` command is used as the object instance. For example:

```qs  
function setFullname(firstname : string, lastname : string)
 this.firstName = firstname
 this.lastName = lastname

function getFullname()->fullname : string
 fullname = this.firstName+" "+uppercase(this.lastName)
```

For a class function, the `currentMethodName` command returns `<ClassName>.<FunctionName>`, for example "MyClass.myFunction".

In the application code, class functions are called as member methods of the object instance and can receive [parameters](#parameters) if any. The following syntaxes are supported:

- use of the `()` operator. For example, `myObject.methodName("hello")`
- use of a "4D.Function" class member method:
  - [`apply()`](../FunctionClass.md#apply)
  - [`call()`](../FunctionClass.md#call)


#### Parameters


Function parameters are declared using the parameter name and the parameter type, separated by a colon (:). The parameter name must be compliant with [property naming rules](lang-identifiers.md#object-properties). Multiple parameters (and types) are separated by commas (,).

```qs  
function add(x, y : variant, z : integer, xy : object)
```

If the [type](lang-data-types.md) is not stated, the parameter will be defined as `variant`.

For more information on parameters, please refer to [this page](lang-parameters.md).


#### Return value

You declare the return parameter (optional) by adding an arrow (`->`) and the return parameter definition after the input parameter(s) list, or a colon (`:`) and the return parameter type only. For example:

```qs
function add(x : variant, y : integer)->result : integer
 result = x+y
```

You can also declare the return parameter by adding only `: type` and use the [`return expression`](lang-parameters.md#return-expression) (it will also end the function execution). For example:

```qs
function add(x : variant, y : integer): integer
 // some code
 return x+y
```

#### Example 1

```qs
// Class: Rectangle
constructor(width : integer, height : integer)
 this.name = "Rectangle"
 this.height = height
 this.width = width

// Function definition
function getArea()->result : integer
 result = (this.height)*(this.width)
```

```qs
// In a project method


var rect : cs.Rectangle
var area : number

rect = cs.Rectangle.new(50,100)  
area = rect.getArea() //5000
```

#### Example 2

This example uses the [`return expression`](lang-parameters.md#return-expression):

```qs
function getRectArea(width : integer, height : integer) : integer
 if (width > 0 && height > 0)
  return width * height
 else
  return 0
 end
```

### `function get` and `function set`

#### Syntax

```qs
{shared} function get <name>()->result : type
// code
```

```qs
{shared} function set <name>(parameterName : type)
// code
```

`function get` and `function set` are accessors defining **computed properties** in the class. A computed property is a named property with a data type that masks a calculation. When a computed property value is accessed, QodlyScript substitutes the corresponding accessor's code:

- when the property is read, the `function get` is executed,
- when the property is written, the `function set` is executed.

If the property is not accessed, the code never executes.

Computed properties are designed to handle data that do not necessary need to be kept in memory. They are usually based upon persistent properties. For example, if a class object contains as persistent property the *gross price* and the *VAT rate*, the *net price* could be handled by a computed property.

In the class definition file, computed property declarations use the `function get` (the *getter*) and `function set` (the *setter*) keywords, followed by the name of the property. The name must be compliant with [property naming rules](lang-identifiers.md#object-properties).

`function get` returns a value of the property type and `function set` takes a parameter of the property type. Both arguments must comply with standard [function parameters](#parameters).

When both functions are defined, the computed property is **read-write**. If only a `function get` is defined, the computed property is **read-only**. In this case, an error is returned if the code tries to modify the property. If only a `function set` is defined, QodlyScript returns *undefined* when the property is read.

If the functions are declared in a [shared class](#shared-classes), you can use the `shared` keyword with them so that they could be called without [`use...end` structure](lang-shared.md#useend). For more information, refer to the [Shared functions](#shared-functions) paragraph below.


The type of the computed property is defined by the `return` type declaration of the *getter*. It can be of any [valid property type](lang-object.md).

:::note

Assigning *undefined* to an object property clears its value while preserving its type. In order to do that, the `function get` is first called to retrieve the value type, then the `function set` is called with an empty value of that type.

:::

:::info

In addition to `function get` and `function set`, [ORDA classes](../../orda/data-model.md) also support the [`function query`](../../orda/data-model.md#function-query-attributename) and [`function orderBy`](../../orda/data-model.md#function-orderby-attributename) computed properties (named **calculated attributes**).

:::


#### Example 1

```qs  
//Class: Person

property firstName, lastName : string

constructor(firstname : string, lastname : string)
 this.firstName = firstname
 this.lastName = lastname


function get fullName() -> fullName : string
 fullName = this.firstName+" "+this.lastName

function set fullName( fullName : string )
 p = position(" ", fullName)
 this.firstName = substring(fullName, 1; p-1)
 this.lastName = substring(fullName, p+1)
```

```qs
//in a method
fullName = person.fullName // Function get fullName() is called
person.fullName = "John Smith" // Function set fullName() is called
```

#### Example 2

```qs
function get fullAddress()->result : object

 result = newObject

 result.fullName = this.fullName
 result.address = this.address
 result.zipCode = this.zipCode
 result.city = this.city
 result.state = this.state
 result.country = this.country
```

### `constructor`

#### Syntax

```qs
// Class: MyClass
{shared} {singleton} constructor({parameterName : type, ...})
// code
```

A class constructor function, which accepts optional [parameters](#parameters), can be used to create and initialize objects of the user class.

When you call the [`new()`](../ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

There can only be one constructor function in a class (otherwise an error is returned). A constructor can use the [`super`](#super) keyword to call the constructor of the super class.

You can create and type instance properties inside the constructor (see example). Alternatively, if your instance properties' values do not depend on parameters passed to the constructor, you can define them using the [`property`](#property) keyword.

Using the `shared` keyword creates a **shared class**, used to only instantiate shared objects. For more information, refer to the [Shared classes](#shared-classes) paragraph.

Using the `singleton` keyword creates a **singleton**, used to create a single instance. For more information, refer to the [Singleton classes](#singleton-classes) paragraph.


#### Example

```qs
// Class: MyClass
// Class constructor of MyClass
constructor (name : string)
 this.name = name
```

```qs
// in a method
// you can instantiate an object
var o : cs.MyClass
o = cs.MyClass.new("HelloWorld")  
// o  ==  {"name":"HelloWorld"}
```


### `property`

#### Syntax

`property <propertyName>{, <propertyName2>,...}{ : <propertyType>}`

The `property` keyword can be used to declare a property inside a user class. A class property has a name and a type.

Declaring class properties enhances code editor suggestions, type-ahead features and error detection.

Properties are declared for new objects when you call the [`new()`](../ClassClass.md#new) function, however they are not automatically added to objects (they are only added when they are assigned a value).

:::note

A property is automatically added to the object when it is [inititalized in the declaration line](#initializing-the-property-in-the-declaration-line).

:::

Property names must be compliant with [property naming rules](lang-identifiers.md#object-properties).

:::note

Since properties and functions share the same namespace, using the same name for a property and a function is not allowed (an error is thrown in this case).

:::


The property type can be one of the following supported types:

|propertyType|Contents|
|---|---|
|`text`|Text value|
|`date`|Date value|
|`time`|Time value|
|`boolean`|Boolean value|
|`integer`|Long integer value|
|`number`|number value|
|`picture`|Picture value|
|`blob`|Scalar Blob value|
|`collection`|Collection value|
|`variant`|Variant value|
|`object`|Object with default class (4D.Object)|
|`4D.<className>`|Object of the 4D class name|
|`cs.<className>`|Object of the user class name|

:::info

The `property` keyword can only be used in class methods and outside any `function` or `constructor` block.

:::

#### Initializing the property in the declaration line

When declaring a property, you have the flexibility to specify its data type and provide its value in one statement. The supported syntax is:

`property <propertyName> { : <propertyType>} := <propertyvalue>`

:::note

When using this syntax, you cannot declare several properties in the declaration line.

:::

You can omit the type in the declaration line, in which case the type will be inferred when possible. For example:

```qs
// Class: MyClass

property name : string := "Smith"
property age : integer := 42

property birthDate := !1988-09-29! //date is inferred
property fuzzy //variant
```

When you initialize a property in its declaration line, it is added to the class object after its instantiation with the [`new()`](../ClassClass.md#new) function but before the constructor is called.

If a class [extends](#extends-classname) another class, the properties of the parent class are instantiated before the properties of the child class.


:::note

If you initialize a property in its declaration line with an object or a collection in a [shared class](#shared-classes), the value is automatically transformed into a shared value:

```qs
// in a shared class
property myCollection = ["something"]
// myCollection will be a shared collection
// equivalent to:
myCollection = newSharedCollection("something")
```

:::



#### Example

```qs
// Class: MyClass

property name : string
property age : integer
property color : string := "Blue"
```

In a method:

```qs
var o : cs.MyClass
o = cs.MyClass.new() //o:{"color" : "Blue"}
o.name = "John" //o:{"color" : "Blue", "name":"John"}
o.age = "Smith"  //error with check syntax
```

### `extends <ClassName>`

#### Syntax

```qs
// Class: ChildClass
extends <ParentClass>
```

The `extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object and [ORDA classes](../../orda/data-model.md) which are extended by default for user classes).
- A user class cannot extend a user class from another project.
- A user class cannot extend itself.
- It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a").
- It is not possible to define a [shared user class](#shared-classes) extended from a non-shared user class.

Breaking such a rule is not detected by the code editor or the interpreter, only the `check syntax` will throw an error in this case.

An extended class can call the constructor of its parent class using the [`super`](#super) command.

#### Example

This example creates a class called `Square` from a class called `Polygon`.

```qs
//Class: Square

//path: Classes/Square.4dm

extends Polygon

constructor (side : integer)

 // It calls the parent class's constructor with lengths
 // provided for the Polygon's width and height
 super(side,side)
 // In derived classes, super must be called
 // before you can use 'this'
 this.name = "Square"



 function getArea() -> result : integer
  result = this.height*this.width
```


### `super`

<!-- REF #_command_.super.Syntax -->**super** : object<br/>**super**( *param...paramN* : any )<!-- END REF -->


<!-- REF #_command_.super.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|param|any|->|Parameter(s) to pass to the parent constructor|
|Result|object|<-|Object's parent|<!-- END REF -->

#### Description

The `super` command <!-- REF #_command_.super.Summary -->makes calls to the superclass<!-- END REF -->.

`super` serves two different purposes:

1. Inside a constructor code, `super` allows to call the constructor of the superclass. When used in a constructor, the `super` command appears alone and must be used **before** the [`this`](#this) keyword is used.
	- If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's up to the developer to make sure calls are valid.
	- If the [`this`](#this) command is called on an object whose superclasses have not been constructed, error -10743 is generated.
	- If `super` is called out of an object scope, or on an object whose superclass constructor has already been called, error-10746 is generated.

```qs
constructor(t1 : string, t2 : string)
super(t1) //calls superclass constructor with a string param
this.param = t2 // use second param
```

2. Inside a [class function](#function), `super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```qs
super.doSomething(42) //calls "doSomething" function declared in superclasses
```

#### Example 1

This example illustrates the use of `super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

```qs
  //Class: Rectangle

constructor(height : integer, width : integer)
  this.name = "Rectangle"
  this.height = height
  this.width = width

function sayName()
  return("Hi, I am a "+this.name+".")

function getArea()-> area : integer
  area = this.height*this.width
```

```qs

  //Class: Square

extends Rectangle

constructor(side : integer)

  // It calls the parent class's constructor with lengths
  // provided for the Rectangle's width and height
super(side, side)

  // In derived classes, super must be called before you
  // can use 'This'
this.name = "Square"
```

#### Example 2  

This example illustrates the use of `super` in a class member function.

You created a Rectangle class with a function:

```qs
  //Class: Rectangle

function nbSides() -> sides : text
  sides = "I have 4 sides"
```

You also created the Square class with a function calling the superclass function:

```qs

  //Class: Square

extends Rectangle

function description() -> desc : text
  desc = super.nbSides()+" which are all equal"
```

```qs

Then you can write in a method:

var square : object
var info : text
square = cs.Square.new()
info = square.description() //I have 4 sides which are all equal
```



### `this`

<!-- REF #_command_.this.Syntax -->**this** : object<!-- END REF -->


<!-- REF #_command_.this.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Current element or object|<!-- END REF -->

#### Description

The `this` command <!-- REF #_command_.this.Summary -->returns a reference to the currently processed object<!-- END REF -->.

In most cases, the value of `this` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

When executing a formula object created by the [`formula`](../FunctionClass#formula-objects) or [`formulaFromString`](../commands/formulaFromString) commands, `this` returns a reference to the object currently processed by the formula. For example:

```qs
o = newObject("prop",42,"f",formula(this.prop))
val = o.f() //42
```

When a [constructor](#class-constructor) function is used (with the [`new()`](../ClassClass.md#new) function), its `this` is bound to the new object being constructed.

```qs
//Class: ob

constructor  

 // Create properties on this as
 // desired by assigning to them
 this.a = 42
```

```qs
// in a method  
o = cs.ob.new()
val = o.a //42
```

> When calling the superclass constructor in a constructor using the [super](#super) keyword, keep in mind that `this` must not be called before the superclass constructor, otherwise an error is generated.

In any cases, `this` refers to the object the method was called on, as if the method were on the object.

```qs
//Class: ob

function f()
 return this.a+this.b
```

Then you can write in a project method:

```qs
o = cs.ob.new()
o.a = 5
o.b = 3
val = o.f() //8

```

In this example, the object assigned to the variable *o* doesn't have its own *f* property, it inherits it from its class. Since *f* is called as a method of *o*, its `this` refers to *o*.

#### Example

You want to use a project method as a formula encapsulated in an object:

```qs
var person : object
var g : string
person = newObject()
person.firstName = "John"
person.lastName = "Smith"
person.greeting = formula(Greeting)

g = person.greeting("hello") // returns "hello John Smith"
g = person.greeting("hi") // returns "hi John Smith"
```

With the `Greeting` method:

```qs
declare(param : string) -> vMessage : text
vMessage = param+" "+this.firstName+" "+this.lastName
```



## Shared classes

You can create **shared classes**. A shared class is a user class that instantiates a [shared object](lang-shared.md) when the [`new()`](../ClassClass.md#new) function is called on the class. A shared class can only create shared objects.

Shared classes also support **shared functions** that can be called without [`use...end`](lang-shared.md#useend) structures.

The [`.isShared`](../ClassClass.md#isshared) property of Class objects allows to know if the class is shared.

:::info

- A class [inheriting](#extends-classname) from a non-shared class cannot be defined as shared.
- Shared classes are not supported by [ORDA-based classes](../../orda/data-model.md).

:::


### Creating a shared class

To create a shared class, add the `shared` keyword before the [Class Constructor](#constructor). For example:

```qs
	//shared class: Person
shared constructor ( firstname : string , lastname : string )
 this.firstname:=firstname
 this.lastname:=lastname

```

```qs
//myMethod
var person = cs.Person.new("John" , "Smith")
objectIsShared (person) // true
cs.Person.isShared //true
```



### Shared functions

If a function defined inside a shared class modifies objects of the class, it should call [`use...end`](lang-shared.md#useend) structure to protect access to the shared objects. However, to simplify the code, you can define the function as **shared** so that it automatically triggers internal `use...end` when executed.

To create a shared function, add the `shared` keyword before the [function](#function) keyword in a shared class. For example:

```qs
	//shared class Foo
shared constructor ()
  this.variable = 1

shared function bar (value : integer)
  this.variable = value //no need to call use/end
```  

:::note

If the `shared` function keyword is used in a non-shared user class, it is ignored.

:::


## Singleton classes

A **singleton class** is a user class that only produces a single instance. For more information on singletons, please see the [Wikipedia page about singletons](https://en.wikipedia.org/wiki/Singleton_pattern).

The class singleton is instantiated at the first call of the [`cs.<class>.me`](../ClassClass.md#me) property. The instantiated class singleton is then always returned when the [`me`](../ClassClass.md#me) property is used.

If you need to instantiate a singleton with parameters, you can also call the [`new()`](../ClassClass.md#new) function. In this case, it is recommended to instantiate the singleton in some code executed at application startup.  

The scope of a singleton instance can be the current process or all processes. A *process* singleton has a unique value for the process in which it is instantiated, while an *interprocess* singleton has a unique value for all processes of the application. Singletons are useful to define values that need to be available from anywhere in an application or process.

Once instantiated, a singleton class (and its singleton) exists as long as a reference to it exists somewhere in the application.


The [`.isSingleton`](../ClassClass.md#issingleton) property of Class objects allows to know if the class is a singleton.


:::info

Singleton classes are not supported by [ORDA-based classes](../../orda/data-model.md).

:::




### Creating a process singleton

To create a process singleton class, add the `singleton` keyword before [`Class Constructor`](#constructor). For example:

```qs
	//class: ProcessTag
singleton constructor()
 this.tag = random
```

To use the process singleton:

```qs
	//in a process
var mySingleton = cs.ProcessTag.me //First instantiation
	//mySingleton.tag == 5425 for example  
...  
var myOtherSingleton = cs.ProcessTag.me
	//myOtherSingleton.tag == 5425

```

```qs
	//in another process
var mySingleton = cs.ProcessTag.me //First instantiation
	//mySingleton.tag == 14856 for example  
...  
var myOtherSingleton = cs.ProcessTag.me  
	//myOtherSingleton.tag == 14856
```


### Creating an interprocess singleton

To create an interprocess singleton, add the `shared singleton` keywords before the [Class Constructor](#constructor). For example:

```4d
//Class VehicleFactory

property vehicleBuilt : integer

shared singleton constructor()
  this.vehicleBuilt = 0 //Number of vehicles built by the factory

shared function buildVehicle (type : string) -> vehicle : cs.Vehicle

  switch
    : type == "car"
      vehicle = cs.Car.new()
    : type == "truck"
      vehicle = cs.Truck.new()
    : type == "sport car"
      vehicle = cs.SportCar.new()
    : type == "motorbike"
      vehicle = cs.Motorbike.new()
  else
    vehicle = cs.Car.new()
  end
  this.vehicleBuilt+=1
```

You can the call the **cs.VehicleFactory** singleton to get a new vehicle from everywhere in your application with a single line:

```qs
vehicle = cs.VehicleFactory.me.buildVehicle("truck")
```

Since the *buildVehicle()* function modifies the **cs.VehicleFactory** (by incrementing `this.vehicleBuilt`) you need to add the `shared` keyword to it.
