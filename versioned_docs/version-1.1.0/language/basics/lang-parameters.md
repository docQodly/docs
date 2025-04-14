---
id: lang-parameters
title: Parameters
---

You'll often find that you need to pass data to your methods and functions. This is easily done with parameters.

## Overview

**Parameters** (or **arguments**) are pieces of data that a method or a class function needs in order to perform its task. The terms *parameter* and *argument* are used interchangeably throughout this manual. Parameters are also passed to built-in QodlyScript commands. In this example, the name "pCounter" is an argument to the `killWorker` built-in command:

```qs
killWorker("pCounter") //Terminates execution of pCounter worker
```

Parameters are passed to methods or class functions in the same way. For example, if a class function named `getArea()` accepts two parameters, a call to the class function might look like this:

```
area = o.getArea(50,100)
```

Or, if a method named `Do_Something` accepts three parameters, a call to the method might look like this:

```qs
Do_Something(withThis,andThat,thisWay)
```

The input parameters are separated by commas (,).

The same principles are used when methods are executed through dedicated commands, for example:

```qs
callWorker("myWorker","workerMethod","Hello",vName)  
//pass the "Hello" string and vName variable as parameters to the workerMethod  
//in the context of the myWorker worker
```

Data can also be **returned** from methods and class functions. For example, the following line is a statement that uses the built-in command, `length`, to return the length of a string. The statement puts the value returned by `length` in a variable called *MyLength*. Here is the statement:

```qs
MyLength = length("How did I get here?")
```

Only one single output parameter can be declared per method or class function.

Input and output values are [evaluated](#values-or-references) at the moment of the call. They are copied into declared variables within the called class function or method, in the same order as they were passed.



### Initialization

When parameters are declared, they are initialized to the [**default value corresponding to their type**](lang-data-types.md), which they will keep during the session as long as they have not been assigned.



## Declaring parameters

Inside called methods or class functions, parameter values are assigned to variables. You declare parameters using a **parameter name** along with a **parameter type**, separated by comma.  

- For class functions, parameters are declared along with the `function` keyword.
- For methods, parameters are declared using the `declare` keyword at the beginning of the method code.

Examples:

```qs
function getArea(width : integer, height : integer) -> area : integer
```

```qs  
 //myProjectMethod
declare (i :integer) -> myResult : object
```


The following rules apply:

- The declaration line must be the first line of the method or function code, otherwise an error is displayed (only [comments](lang-methods.md#comments) or line breaks can precede the declaration).
- Parameter names must be compliant with [Qodly naming rules](lang-identifiers.md#object-properties).
- Multiple parameters (and types) are separated by commas (,).
- Multiline syntaxes are supported using `\` character.


For example, when you call a `getArea()` function with two parameters:

```qs
area = o.getArea(50,100)
```

In the class function code, the value of each parameter is copied into the corresponding declared parameter:

```qs    
// Class: Polygon
function getArea(width : integer, height : integer)-> area : integer
	area = width*height
```

>If the type is not defined, the parameter will be defined as [`variant`](lang-variant.md).


## Returned value

You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. For example:

```qs
function add(x : variant, y : integer) -> result : integer
```

You can also declare the return parameter only by adding `: type`, in which case it can be handled by a [return statement](#return-expression). For example:

```qs
function add(x : variant, y : integer): integer
	return (x+y)
```


:::warning

Parameters, which include the returned value, must be declared only once. In particular, you cannot declare the same parameter as input and output, even with the same type. For example:

```qs
	//invalid declaration
function myTransform (x : integer) -> x : integer
	//error: x is declared twice
```

:::

## Supported data types

For parameters and returned values, you can use the same data types as those which are [supported by the `var` keyword](lang-variables.md#declaring-variables), including class objects. For example:

```qs
function saveToFile(entity : cs.ShapesEntity, myFile : 4D.File)
```




## Parameters in formulas

You can use parameters in formulas made of single-line statements (i.e. not calling methods or functions). In this case, you need to use sequentially numbered variables starting with "$" as parameters: **$1**, **$2**, **$3**..., and so on. The numbering of the local variables represents the order of the parameters.

For example, you can write:

```qs
var f : object
f = newObject
f.welcome = formula(uppercase($1+", "+$2+"!"))
f.welcome("hello","john") //"HELLO, JOHN!"
```



## `return {expression}`

The `return` statement ends function or method execution and can be used to return an expression to the caller.

For example, the following function returns the square of its argument, x, where x is a number.

```qs
function square(x : integer)
   return x * x
```


:::info

Internally, `return x` executes (if declared) `myReturnValue = x` and returns to the caller. If `return` is used without an expression, the function or method returns a null value of the declared return type (if any), otherwise *undefined*.

:::

The `return` statement can be used along with the standard syntax for [returned values](#returned-value) (the returned value must be of the declared type). However, note that it ends immediately the code execution. For example:


```qs
function getValue -> v : integer
	v = 10
	return 20
	// returns 20

function getValue -> v : integer
	return 10
	v = 20 // never executed
	// returns 10
```



## Parameter indirection ($\{N\})

QodlyScript methods and functions accept a variable number of parameters. You can address those parameters with a `for...end` loop, the [`countParameters`](#countparameters) command and the **parameter indirection syntax**. Within the method, an indirection address is formatted `${N}`, where `N` is a numeric expression.



### Using variadic parameters

For example, consider a method that adds values and returns the sum formatted according to a format that is passed as a parameter. Each time this method is called, the number of values to be added may vary. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call.

Here is the method, named `MySum`:

```qs
//MySum
declare (format : string) -> result : string
toSum = 0
for(i,2,countParameters)
   toSum=toSum+${i}
end
result=string(toSum,format)
```

The method's parameters must be passed in the correct order, first the format and then a variable number of values:

```qs
Result = MySum("##0.00",125,2,33.5,24) //"182.70"
Result = MySum("000",1,2,200) //"203"
```

Note that even if you declared 0, 1, or more parameters in the method, you can always pass the number of parameters that you want. Parameters are all available within the called method through the `${N}` syntax and extra parameters type is [variant](lang-variant.md) by default. You just need to make sure parameters exist, thanks to the [`countParameters`](#countparameters) command. For example:

```qs
//foo method
declare (p1: string , p2 : string , p3 : date)
var myLog : string
for(i,1,countParameters)
	myLog = "param "+string(i)+" = "+string(${i})+"\r"
end
```

This method can be called:

```qs
foo("hello","world",!01/01/2023!,42,?12:00:00?) //extra parameters are passed
```

> Parameter indirection is best managed if you respect the following convention: if only some of the parameters are addressed by indirection, they should be passed after the others.

### Declaring variadic parameters

You declare a variable number of parameters using the "..." notation in the prototypes of your functions, class constructors and methods (variadic parameters). You specify the parameter's type following notation "..." with the desired type.

```qs
declare ( ... : text ) // Undefined number of 'text' parameters

```

```qs
function myfunction ( ... : text)

```


When declaring multiple parameters, variadic notation must be employed at last position, for example:

```qs
declare ( param: real ; ... : text )

```

```qs
function myfunction (var1: integer ; ... : text)
```



#### Example

Here we have a method called `sumNumbers` that returns the calculated total for all the numbers passed as parameters:

```qs

declare( ... : real) : real
var number, total : real

forEach (i,1,countParameters)
	total+==${number}
end

return total

```

This method can be called with a variable number of *real* parameters. In case of wrong parameter type, an error will be returned before the method is executed :

```qs

total1=sumNumbers // returns 0
total2=sumNumbers(1, 2, 3, 4, 5) // returns 15
total3=sumNumbers(1, 2, "hello", 4, 5) // error

```

:::note

In case the type when using the "..." notation is omitted the parameters are considered as variants.

```qs
declare ( ... ) //  Parameters are considered variants
```

:::

## Wrong parameter type

Calling a parameter with an wrong type is an [error](lang-errors.md) that prevents correct execution. For example, if you write the following methods:

```qs
// method1
declare(value : string)
```

```qs
// method2
method1(42) //wrong type, string expected
```

The error is generated when the method is called.



## Using object properties as named parameters

Using objects as parameters allow you to handle **named parameters**. This programming style is simple, flexible, and easy to read.

For example, using the `CreatePerson` method:

```qs
  //CreatePerson
var person : object
person = newObject("name","Smith","age",40)
ChangeAge(person)
```

In the `ChangeAge` method you can write:

```qs
  //ChangeAge
declare (param : object)
var result : string
param.age = param.age+10
result = param.name+" is "+string(param.age)+" years old."
```

This provides a powerful way to define [optional parameters](#optional-parameters) (see also below). To handle missing parameters, you can either:
- check if all expected parameters are provided by comparing them to the `Null` value, or
- preset parameter values, or
- use them as empty values.

In the `ChangeAge` method above, both age and name properties are mandatory and would produce errors if they were missing. To avoid this case, you can just write:

```qs
  //ChangeAge
declare (param : object)
var result : string
param.age = num(param.age)+10
result = string(param.name)+" is "+string(param.age)+" years old."
```
Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.

Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:

```qs
person = {"name":"Smith","aAge":40,"toAdd":10}
ChangeAge(person)

//ChangeAge
declare (param : object)
var result : string
if (param.toAdd == null)
	param.toAdd = 10
end
param.age = num(param.age)+param.toAdd
result = string(param.name)+" is "+string(param.age)+" years old."
```

The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years.

With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order.



## Optional parameters

In the QodlyScript documentation, the `{ }` characters (braces) usually indicate optional parameters. For example, `.extract( attributePath : string \{ , option : integer } ) : collection)` means that the *option* parameter may be omitted when calling the command. You can call it in the following ways:

```qs
firstnames = ds.Teachers.all().extract("firstname") //1 parameter
addresses = ds.Teachers.all().extract("address",ck keep null) //2 parameters
```

QodlyScript methods and functions also accept such optional parameters. You can declare any number of parameters. If you call a method or function with less parameters than declared, missing parameters are processed as default values in the called code, [according to their type](lang-data-types.md#overview). For example:

```qs
// "concate" function of myClass
function concate (param1 : string , param2 : string)-> result : string
result = param1+" "+param2
```

```qs
  // Calling method
class = cs.myClass.new()
class.concate("Hello") // "Hello "
class.concate() // Displays " "
```

:::note

You can also call a method or function with more parameters than declared. They will be available within the called code through the [$\{N\} syntax](#parameter-indirection-n).

:::

Using the `countParameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received. For example:

```qs
// Append_Text Method
// Append_Text ( string { , 4D.File } )

declare(param1 : text, param2 : text, param3 : object)

...// do action1
if(countParameters>= 3)
    ...//do action2
else
    if(countParameters>= 2)
       ...//do action3
    end
end
```
After this method has been added to your project, you can write:

```qs  
Append_Text(vt1) //do only action1
Append_Text(vt1,vt2) //do action1 and action3
Append_Text(vt1,"",vobj) //do action1 and action2
```

:::tip

When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-object-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.  

:::


## Values or references

When you pass a parameter, QodlyScript always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the declared parameters in the called class function or method. The declared parameters are not the actual variables or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the class function/method, it does not change the value in the calling method. For example:

```qs
	//Here is some code from the method myMethod
var myVar, result : string
myVar = "williams"
Do_Something(myVar)
result = myVar //williams

	//Here is the code of the method Do_Something
declare ( param : string )
result = uppercase(param) //WILLIAMS
```

The *result* value in `Do_Something` will be "WILLIAMS" and the *result* value in `myMethod` will be "williams". The method locally changed the value of the parameter, but this does not affect the value of the variable `myVar` passed as parameter by the method `myMethod`.

In some cases, you might want that the method `Do_Something` change the value of the variable. There are two ways to do that:

1. Rather than passing a string variable to the method, you pass an object variable containing the string value as a property. Since [object parameters are passed by **reference**](#particular-cases-objects-and-collections), the value will always be the same in all contexts:

```qs
	//Here is some code from the method myMethod
var myVar : object
var result : text
myVar = newObject("name","williams")
Do_Something(myVar)
result = myVar.name //WILLIAMS

	//Here is the code of the method Do_Something
declare ( param : object )
var result : string
result = uppercase(param.name) //WILLIAMS
```

2. Rather than having the method `Do_Something` "doing something," you can rewrite the method so it returns a value. Thus you would write:

```qs
	//Here is some code from the method myMethod
var myVar, result : string
myVar = "williams"
myVar = Do_Something(myVar)
result = myVar //WILLIAMS

	//Here is the code of the method Do_Something
declare ( param : string ) -> result : string
result = uppercase(param) //WILLIAMS
```

This second technique of returning a value by a subroutine is called "using a function".


### Particular cases: objects and collections

You need to pay attention to the fact that **object** and **collection** data types can only be handled through a reference (i.e. an internal *pointer*).

Consequently, when using such data types as parameters, they do not contain *values* but *references*. Modifying the value of the parameters within the subroutine will be propagated wherever the source object or collection is used.

For example, consider the `CreatePerson` method that creates an object and sends it as a parameter:

```qs
  //CreatePerson
var person : object
person: = newObject("Name","Smith","Age",40)
ChangeAge(person)
person.Age //50
```

The `ChangeAge` method adds 10 to the Age attribute of the received object

```qs
  //ChangeAge
declare (person : object)
person.Age = person.Age+10
person.Age //50
```

When you execute the `CreatePerson` method, person.Age will be 50 everywhere since the same object reference is handled by both methods.


## copyParameters

<!-- REF #_command_.copyParameters.Syntax -->**copyParameters**() : collection&nbsp; **copyParameters** ( *startFrom* : integer ) : collection<!-- END REF -->

<!-- REF #_command_.copyParameters.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|startFrom|integer|&#8594;|Starting index (included)|
|Result|any|&#8592;|New collection containing parameters actually passed|<!-- END REF -->


#### Description

The `copyParameters` command <!-- REF #_command_.copyParameters.Summary -->returns a new collection containing all parameters actually passed to a method or a function<!-- END REF -->. This command is useful when you need to forward a various number of parameters from a method or function to another method or function.

In the *startFrom* optional parameter, you can pass the index of the parameter from which to start collecting parameters to forward. The *startFrom* parameter itself is included.

When called inside a formula, `copyParameters` returns the parameters passed explicitely using [`apply()`](../FunctionClass.md#apply) or [`call()`](../FunctionClass.md#call) (and not those passed to the parent method or function).

`copyParameters` returns an empty collection if:

- it is not called in a method or function that has been called by another method or function,
- no parameter was passed to the parent method or function.


#### Example 1

Calling a different function depending on the first parameter and passing other parameters to this function:

```qs
function selectTask(task : string)
switch
  :(task == "Task1")
	 this.task1(copyParameters(2))
  :(task == "Task2")
	 this.task2(copyParameters(2))
end
```

Or, calling another function on another object with `apply()` and pass the parameters:

```qs
function doSomething(param : string , extraParam : variant)
  this.delegate.doSomething.apply(this.delegate,copyParameters)
```

#### Example 2

Since the command returns a collection, it can be used with [`.join()`](../CollectionClass.md#join) to build for example a html list:

```qs

  // Class
function list (type : string) -> string
  //type of list is "u" or "o"
	var value : collection
	var html : string
	value = copyParameters(2)
	html = "<"+type+"l><li>"
	html+ = value.join("</li><li>")
	html+ = "</li></"+type+"l>"
	return html

  // Method
var htmlList : string
htmlList = c.list("u","Alpha","Bravo","Charlie")
  // htmlList = <ul><li>Alpha</li><li>Bravo</li><li>Charlie</li></ul>
```


## countParameters

<!-- REF #_command_.countParameters.Syntax -->**countParameters** : integer<!-- END REF -->


<!-- REF #_command_.countParameters.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|integer|&#8592;|Number of parameters actually passed|<!-- END REF -->

#### Description

The `countParameters` command <!-- REF #_command_.countParameters.Summary -->returns the number of parameters passed to a method<!-- END REF -->.


#### Example 1

Qodly methods accept optional parameters, starting from the right. For example, you can call the method `MyMethod(a,b
,c,d)` in the following ways:

```qs
 MyMethod(a,b,c,d)
 MyMethod(a,b,c)
 MyMethod(a,b)
 MyMethod(a)
 MyMethod
```

Using `countParameters` from within `MyMethod`, you can detect the actual number of parameters and perform different operations depending on what you have received:

```
//Do_Things method

#declare(p1 : string , p2 : time , p3 : integer)
var info : string
info = p1
if(countParameters>= 3)
    Do_something(p3,p1)
else
    if(countParameters>= 2)
       Do_something_else(p2,p1)
    end
end
```

You can then write:

```qs
Do_Things(vtSomeText) //will only fill info
Do_Things(vtSomeText , vTime ) //will fill info and call Do_something_else
Do_Things(vtSomeText , 0 , vNum) //will fill info and call Do_something
```

#### Example 2

Qodly methods accept a variable number of parameters of the same type, starting from the right. Using `countParameters` and the `${N}` syntax you can access those parameters as variants in a `for` loop. This example is a function that returns the greatest number received as parameter:

```qs
//MaxOf method
#declare() -> result : number
var i : integer
result = ${1}
for(i,2,countParameters)
    if(${i}>result)
       result = ${i}
    end
end
```

After this method has been added to your application, you can write calls like:

```qs
vrResult = MaxOf(12,50,200,3) //200
vrResult = MaxOf(r1,r2,r3,r4,r5,r6)
```
