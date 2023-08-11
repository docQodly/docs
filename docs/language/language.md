---
id: language
title: Language
---


## Language Commands

||
|---|
|[<!-- INCLUDE #_command_.4D.Syntax -->](#4d)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.4D.Summary -->|
|[<!-- INCLUDE #_command_.callChain.Syntax -->](#callchain)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.callChain.Summary -->|
|[<!-- INCLUDE #_command_.clearVariable.Syntax -->](#clearvariable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.clearVariable.Summary -->|
|[<!-- INCLUDE #_command_.copyParameters.Syntax -->](#copyparameters)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.copyParameters.Summary -->|
|[<!-- INCLUDE #_command_.countParameters.Syntax -->](#countparameters)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.countParameters.Summary -->|
|[<!-- INCLUDE #_command_.cs.Syntax -->](#cs)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.cs.Summary -->|
|[<!-- INCLUDE #_command_.currentMethodName.Syntax -->](#currentmethodname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.currentMethodName.Summary -->|
|[<!-- INCLUDE #_command_.null.Syntax -->](#null)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.null.Summary -->|
|[<!-- INCLUDE #_command_.super.Syntax -->](#super)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.super.Summary -->|
|[<!-- INCLUDE #_command_.this.Syntax -->](#this)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.this.Summary -->|
|[<!-- INCLUDE #_command_.trace.Syntax -->](#trace)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.trace.Summary -->|
|[<!-- INCLUDE #_command_.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.type.Summary -->|
|[<!-- INCLUDE #_command_.undefined.Syntax -->](#undefined)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.undefined.Summary -->|
|[<!-- INCLUDE #_command_.valueType.Syntax -->](#valuetype)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.valueType.Summary -->|

## 4D

<!-- REF #_command_.4D.Syntax -->**4D** : object<!-- END REF -->


<!-- REF #_command_.4D.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Class Store containing all built-in 4D classes|<!-- END REF -->

#### Description

The `4D` command <!-- REF #_command_.4D.Summary -->returns a *Class Store* object containing all available built-in classes in the 4D application<!-- END REF -->. 

A class store object contains a specific set of classes. 

#### See also

[`cs`](#cs)

## cs

<!-- REF #_command_.cs.Syntax -->**cs** : object<!-- END REF -->


<!-- REF #_command_.cs.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Class Store containing all classes of the current database|<!-- END REF -->

#### Description

The `cs` command <!-- REF #_command_.cs.Summary -->returns a Class Store object containing all user classes defined in the current database or component<!-- END REF -->. This command is necessary to instantiate an object from a user class. 

#### See also

[`4D`](#4d)<br/>
[`super`](#super)

## currentMethodName

<!-- REF #_command_.currentMethodName.Syntax -->**currentMethodName** : string<!-- END REF -->


<!-- REF #_command_.currentMethodName.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|string|<-|Calling method name|<!-- END REF -->

#### Description

The `currentMethodName` command <!-- REF #_command_.currentMethodName.Summary -->returns the method name where it has been invoked<!-- END REF -->. This command is useful for debugging generic methods.

According to the calling method type, the returned string can be as follows:

|Calling Method|Returned string|
|:----|:----|
|Project Method|MethodName|
|Table Form Method|[TableName].FormName|
|Class Constructor|ClassName:constructor|
|Class Function|ClassName.FunctionName|

This command cannot be called from within a Qodly formula.


## null

<!-- REF #_command_.null.Syntax -->**null** : null<!-- END REF -->


<!-- REF #_command_.null.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|null|<-|Null value|<!-- END REF -->

#### Description

`null`<!-- REF #_command_.null.Summary -->returns the null type value **null**<!-- END REF -->.

This function allows you to assign or compare the **null** value to the following language elements:

|Language elements|Comments|
|:----|:----|
|object property values|Comparing Null to an object property returns true if the property value is null, and false otherwise. To simplify code, comparing Null also returns true if the property does not exist in the object (i.e. is [`undefined`](#undefined)), see example 4.
|collection elements|When a collection is expanded by adding non-adjacent elements, any intermediary elements get automatically the `null` value.|
|object variables|Assigning the null value to such a variable type clears its contents. In this case, it has the same effect as calling the [`clearVariable`](#clearvariable) command.|
|collection variables|Assigning the null value to such a variable type clears its contents. In this case, it has the same effect as calling the [`clearVariable`](#clearvariable) command.|
|picture variables|Assigning the null value to such a variable type clears its contents. In this case, it has the same effect as calling the [`clearVariable`](#clearvariable) command.|
|variant variables| |


#### Example 1  

You assign and test the **null** value to an object property:

```qs
var vEmp : object
vEmp=newObject
vEmp.name="Smith"
vEmp.children=null
 
if(vEmp.children==null) //true
end
if(vEmp.name==null) //false
end
if(vEmp.parent==null) //true
end
```

#### Example 2 

You assign and compare the **null** value to a collection element:

```qs
var myCol : collection
myCol=newCollection(10,20,null)

if(myCol[2]==null)
  // if the 3rd element is null
...
end
```

#### Example 3  

These examples show the various ways to assign or compare the **null** value to variables: 

```qs

//Object variable
var o : object
o=newObject
o=null //equivalent to clearVariable(o)
if(o!=null) //equivalent to if(objectIsDefined(o))
end

//Collection variable
var c : collection
c=newCollection
c=null //equivalent to clearVariable(c)
if(c!=null)
end

//Picture variable
var i : picture
i=vpicture
i=null //equivalent to clearVariable(i)
if(i!=null) //equivalent to if(pictureSize(i)!=0)
end
```


#### Example 4  

Here are the different results of the `undefined` command as well as the `null` command with object properties, depending on the context:

```qs
var vEmp : object
var vUndefined, vNull : boolean
vEmp=newObject
vEmp.name="Smith"
vEmp.children=null
 
vUndefined=undefined(vEmp.name) // false
vNull=(vEmp.name=null) //false
 
vUndefined=undefined(vEmp.children) // false
vNull=(vEmp.children=null) //true
 
vUndefined=undefined(vEmp.parent) // true
vNull=(vEmp.parent=null) //true
```

#### See also

[`undefined`](#undefined)

## super

<!-- REF #_command_.super.Syntax -->**super** : object<br/>**super**( *param...paramN* : any ) : object<!-- END REF -->


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
this.param=t2 // use second param
```

2. Inside a class member function, `super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```qs
super.doSomething(42) //calls "doSomething" function declared in superclasses
```

#### Example 1

This example illustrates the use of `super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

```qs
  //Class: Rectangle
 
constructor(height : integer, width : integer)
  this.name="Rectangle"
  this.height=height
  this.width=width
 
function sayName()
  return("Hi, I am a "+this.name+".")
 
function getArea()-> area : integer
  area=this.height*this.width
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
this.name="Square"
```

#### Example 2  

This example illustrates the use of `super` in a class member function. 

You created a Rectangle class with a function:

```qs
  //Class: Rectangle
 
function nbSides() -> sides : text
  sides="I have 4 sides"
```

You also created the Square class with a function calling the superclass function:

```qs

  //Class: Square
 
extends Rectangle
 
function description() -> desc : text
  desc=super.nbSides()+" which are all equal"
```

```qs

Then you can write in a method:

var square : object
var info : text
square=cs.Square.new()
info=square.description() //I have 4 sides which are all equal
```



## this

<!-- REF #_command_.this.Syntax -->**this** : object<!-- END REF -->


<!-- REF #_command_.this.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Current element or object|<!-- END REF -->

#### Description

The `this` command <!-- REF #_command_.this.Summary -->returns a reference to the currently processed object<!-- END REF -->. 

In most cases, the value of `this` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

When executing a formula object created by the [`formula`](FunctionClass.md#formula) or [`formulaFromString`](FunctionClass.md#formula) commands, `this` returns a reference to the object currently processed by the formula. For example:

```qs
o=newObject("prop",42,"f",formula(this.prop))
val=o.f() //42
```

When a [constructor](#class-constructor) function is used (with the [`new()`](ClassClass.md#new) function), its `this` is bound to the new object being constructed.

```qs
//Class: ob
  
constructor  
 
 // Create properties on this as
 // desired by assigning to them
 this.a=42 
```

```qs
// in a method  
o=cs.ob.new()
val=o.a //42
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
o=cs.ob.new()
o.a=5
o.b=3
val=o.f() //8

```

In this example, the object assigned to the variable *o* doesn't have its own *f* property, it inherits it from its class. Since *f* is called as a method of *o*, its `this` refers to *o*.

#### Example

You want to use a project method as a formula encapsulated in an object:

```qs
var person : object
var g : string
person=newObject()
person.firstName="John"
person.lastName="Smith"
person.greeting=formula(Greeting)

g=person.greeting("hello") // returns "hello John Smith"
g=person.greeting("hi") // returns "hi John Smith"
```

With the `Greeting` method:

```qs
declare(param : string) -> vMessage : text
vMessage=param+" "+this.firstName+" "+this.lastName
```

#### See also

[`super`](#super)

## trace

<!-- REF #_command_.trace.Syntax -->**trace** <!-- END REF -->


<!-- REF #_command_.trace.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|||||<!-- END REF -->

#### Description

You use `trace` <!-- REF #_command_.trace.Summary -->to debug your code during the development of an application<!-- END REF -->. 

The `trace` command turns on the Qodly debugger for the current process. The Debugger is displayed before the next line of code is executed, and continues to be displayed for each line of code that is executed. 

A valid [debug session](../studio/debugging.md#starting-a-debug-session) must be launched for a `trace` call to open the debugger. Otherwise, the `trace` command is ignored. 



## type

<!-- REF #_command_.type.Syntax -->**type** ( *var* : any ) : integer<!-- END REF -->


<!-- REF #_command_.type.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|var|any|->|Variable to be tested|
|Result|integer|<-|Data type number|<!-- END REF -->

#### Description

The `type` command <!-- REF #_command_.type.Summary -->returns a numeric value that indicates the type of variable you have passed in the *var* parameter<!-- END REF -->. 

Qodly provides the following predefined constants:

|Constant|Value|
|:----|:----|
|kBlob|30|
|kBoolean|6|
|kCollection|42|
|kDate|4|
|kInteger|9|
|kNull|255|
|kObject|38|
|kPicture|3|
|kNumber|1|
|kString|2|
|kTime|11|
|kUndefined|5|
|kVariant|12|

You can apply the `type` function to variables and sequential parameters ($1, $2...) of a method.

:::note

You cannot apply the `type` function to scalar expressions such as object properties (emp.name) or collection elements (myColl[5]). To do this, you must use the [`valueType`](#valuetype) command.

:::


#### See also

[`valueType`](#valuetype)


## undefined

<!-- REF #_command_.undefined.Syntax -->**undefined** ( expression : *any* )<!-- END REF -->


<!-- REF #_command_.undefined.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|any|->|Expression whose resulting value to be evaluated|
|Result|boolean|<-|true = undefined, false = not undefined|<!-- END REF -->


#### Description

`undefined`<!-- REF #_command_.undefined.Summary -->returns `true` if the result of the evaluation of *expression* is not a defined value, and `false` otherwise<!-- END REF -->.

- A variable is defined if it has been declared or if a value is assigned to it. It is undefined in all other cases.
- An object property is `undefined` if it does not exist in the object.
- A collection item is `undefined` if it does not exist in the collection.

:::note

Keep in mind that `undefined` evaluates *expression*. The following statements are equivalent:

```qs
var result : boolean
result=undefined(exp)
  // same result:
result=(valueType(exp)=kUndefined)
```

:::

#### Example

Here are the different results of the `undefined` command as well as the `null` command with object properties, depending on the context:

```qs
var vEmp : object
var vUndefined, vNull : boolean

vEmp=newObject
vEmp.name="Smith"
vEmp.children=null
 
vUndefined=undefined(vEmp.name) // false
vNull=(vEmp.name=null) //false
 
vUndefined=undefined(vEmp.children) // false
vNull=(vEmp.children=null) //true
 
vUndefined=undefined(vEmp.parent) // true
vNull=(vEmp.parent=null) //true
```


#### See also

[`null`](#null)



## valueType

<!-- REF #_command_.valueType.Syntax -->**valueType** ( *expression* : any ) : integer<!-- END REF -->

<!-- REF #_command_.valueType.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|any|->|Expression whose resulting value to be tested|
|Result|integer|<-|Data type number|<!-- END REF -->


#### Description

The `valueType` command <!-- REF #_command_.valueType.Summary -->returns the type of the value resulting from the evaluation of the *expression* you passed as parameter<!-- END REF -->. 

The command returns a numeric value that can be compared with one of the following constants provided by Qodly:

|Constant|Value|
|:----|:----|
|kBlob|30|
|kBoolean|6|
|kCollection|42|
|kDate|4|
|kInteger|9|
|kNull|255|
|kObject|38|
|kPicture|3|
|kNumber|1|
|kString|2|
|kTime|11|
|kUndefined|5|
|kVariant|12|


This command is designed to return the type of a scalar expression, i.e. the value stored in or returned by the *expression* parameter. In particular, it can be applied to the following Qodly expressions:

- object properties (emp.name),
- collection elements (myCol[5]).

:::note

Numerical object properties are always considered number values:

```
var o : object
var vType : integer
o=newObject("value",42)
vType=valueType(o.value) //vType=kNumber
```

::: 

#### Example 1

You want to handle the various possible types of an object property value:

```qs
switch
	:(valueType(o.value)==kNumber)
  //handle a numeric value
    :(valueType(o.value)==kString)
  //handle a string
    :(valueType(o.value)==kObject)
  //handle a sub-object
       ...
end
```

#### Example 2

You want to sum up all numeric values in a collection:

```qs
var col : collection
var colSum : number
col=newCollection("Hello",20,"World2",15,50,currentDate,true,10)
for(i,0,col.length-1) //-1 since collections start at 0
	if(valueType(col[i])==kNumber)
       colSum=colSum+col[i]
    end
end
```

#### See also

[`type`](#type)

## callChain

## clearVariable


## copyParameters

## countParameters