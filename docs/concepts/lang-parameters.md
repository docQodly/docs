---
id: lang-parameters
title: Parameters
---

You'll often find that you need to pass data to your methods and functions. This is easily done with parameters.

## Overview

**Parameters** (or **arguments**) are pieces of data that a method or a class function needs in order to perform its task. The terms *parameter* and *argument* are used interchangeably throughout this manual. Parameters are also passed to built-in Qodly commands. In this example, the number value 21 is an argument to the `SET DEFAULT CENTURY` built-in command:

```4d
SET DEFAULT CENTURY(20) //Switch to 21st century for default century
```

Parameters are passed to methods or class functions in the same way. For example, if a class function named `getArea()` accepts two parameters, a call to the class function might look like this: 

```
area=o.getArea(50,100)
```

Or, if a method named `Do_Something` accepts three parameters, a call to the method might look like this:

```4d
Do_Something(withThis,andThat,thisWay)
```

The input parameters are separated by commas (,). 

The same principles are used when methods are executed through dedicated commands, for example:

```4d
CALL WORKER("myWorker","workerMethod","Hello",vName)  
//pass the "Hello" string and vName variable as parameters to the workerMethod  
//in the context of the myWorker worker
```

Data can also be **returned** from methods and class functions. For example, the following line is a statement that uses the built-in command, `Length`, to return the length of a string. The statement puts the value returned by `Length` in a variable called *MyLength*. Here is the statement:

```4d
MyLength=Length("How did I get here?")
```

Only one single output parameter can be declared per method or class function.

Input and output values are [evaluated](#values-or-references) at the moment of the call. They are copied into declared variables within the called class function or method, in the same order as they were passed. 



### Initialization

When parameters are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been assigned. 



## Declaring parameters

Inside called methods or class functions, parameter values are assigned to variables. You declare parameters using a **parameter name** along with a **parameter type**, separated by comma.  

- For class functions, parameters are declared along with the `Function` keyword.
- For methods, parameters are declared using the `#Declare` keyword at the beginning of the method code.

Examples:

```4d
Function getArea(width : Integer, height : Integer) -> area : Integer
```

```4d  
 //myProjectMethod
#Declare (i : Integer) -> myResult : Object
```


The following rules apply:

- The declaration line must be the first line of the method or function code, otherwise an error is displayed (only comments or line breaks can precede the declaration).
- Parameter names must be compliant with [Qodly naming rules](identifiers.md#object-properties). 
- Multiple parameters (and types) are separated by commas (,). 
- Multiline syntaxes are supported (using "\" character).


For example, when you call a `getArea()` function with two parameters: 

```4d
area=o.getArea(50,100)
```

In the class function code, the value of each parameter is copied into the corresponding declared parameter:

```4d    
// Class: Polygon
Function getArea(width : Integer, height : Integer)-> area : Integer
	area=width*height
``` 

>If the type is not defined, the parameter will be defined as [`Variant`](dt_variant.md).


## Returned value

You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. For example:

```4d
Function add(x : Variant, y : Integer) -> result : Integer
```
 
You can also declare the return parameter only by adding `: type`, in which case it can be handled by a [return statement](#return-expression). For example: 

```4d
Function add(x : Variant, y : Integer): Integer
	return (x+y)
```




## Supported data types

For parameters and returned values, you can use the same data types as those which are [supported by the `var` keyword](lang-variables.md#declaring-variables), including class objects. For example:

```4d
Function saveToFile(entity : cs.ShapesEntity, myFile : 4D.File)
```

:::caution

Note that [array expressions](lang-arrays.md) cannot be passed as parameters or returned values. 

:::




## Parameters in formulas

You can use parameters in formulas made of single-line statements (i.e. not calling methods or functions). In this case, you need to use sequentially numbered variables starting with "$" as parameters: **$1**, **$2**, **$3**..., and so on. The numbering of the local variables represents the order of the parameters. 

For example, you can write:

```4d
var $f : Object
$f=New object
$f.welcome=Formula(Uppercase($1+", "+$2+"!"))
$f.welcome("hello","john") //"HELLO, JOHN!"
```



## `return {expression}`

The `return` statement ends function or method execution and can be used to return an expression to the caller. 

For example, the following function returns the square of its argument, x, where x is a number.

```4d
Function square(x : Integer) 
   return x * x
```


:::info

Internally, `return x` executes `returnValue=x`, and returns to the caller. If `return` is used without an expression, the function or method returns a null value of the declared return type (if any), otherwise *undefined*.

:::

The `return` statement can be used along with the standard syntax for [returned values](#returned-value) (the returned value must be of the declared type). However, note that it ends immediately the code execution. For example:


```4d
Function getValue -> v : Integer
	v=10
	return 20
	// returns 20

Function getValue -> v : Integer
	return 10
	v=20 // never executed
	// returns 10
```



## Parameter indirection (${N})

Qodly methods accept a variable number of parameters. You can address those parameters with a `For...End for` loop, the [`Count parameters`] command and the **parameter indirection syntax**. Within the method, an indirection address is formatted `${N}`, where `N` is a numeric expression. `${N}` is called a **generic parameter**.  



### Using generic parameters

For example, consider a method that adds values and returns the sum formatted according to a format that is passed as a parameter. Each time this method is called, the number of values to be added may vary. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call.

Here is the method, named `MySum`:

```4d
//MySum
#DECLARE(format : Text) -> result : Text
toSum=0
For(i,2,Count parameters)
   toSum=toSum+${i}
End for
result=String(toSum,format)
```

The method's parameters must be passed in the correct order, first the format and then a variable number of values:

```4d
Result=MySum("##0.00",125,2,33.5,24) //"182.70"
Result=MySum("000",1,2,200) //"203"
```

Note that even if you declared 0, 1, or more parameters in the method, you can always pass the number of parameters that you want. Parameters are all available within the called method through the `${N}` syntax and extra parameters type is [Variant](dt_variant.md) by default (you can declare them using a [compiler directive](#declaring-generic-parameters)). You just need to make sure parameters exist, thanks to the [`Count parameters`] command. For example:

```4d
//foo method
#DECLARE(p1: Text, p2 : Text, p3 : Date)
var myLog : Text
For(i,1,Count parameters)
	myLog="param "+String(i)+" = "+String(${i})+"\r"
End for
```

This method can be called:

```4d
foo("hello","world",!01/01/2023!,42,?12:00:00?) //extra parameters are passed
```

> Parameter indirection is best managed if you respect the following convention: if only some of the parameters are addressed by indirection, they should be passed after the others. 


### Declaring generic parameters

To declare generic parameters, you need to use a specific "C_" command to which you pass ${N} as a parameter, where N specifies the first generic parameter.

```4d
C_TEXT(${4})
```

This command means that starting with the fourth parameter (included), the method can receive a variable number of parameters of text type. The 3 first parameters can be of any data type. However, if you use $2 by indirection, the data type used will be the generic type. Thus, it will be of the data type text, even if for you it was, for instance, of the data type Real.

> The number in the declaration has to be a constant and not a variable.

Non-declared generic parameters automatically get the [Variant](dt_variant.md) type. 



## Wrong parameter type

Calling a parameter with an wrong type is an [error](error-handling.md) that prevents correct execution. For example, if you write the following methods:

```4d
// method1
#DECLARE(value : Text)
```

```4d
// method2
method1(42) //wrong type, text expected
```

The error is generated when the method is called.

:::note

If the parameter was declared using (`C_XXX`), no error is generated, the called code receives an empty value of the expected type.

:::



## Using object properties as named parameters 

Using objects as parameters allow you to handle **named parameters**. This programming style is simple, flexible, and easy to read. 

For example, using the `CreatePerson` method:

```4d
  //CreatePerson
var person : Object
person=New object("name","Smith","age",40)
ChangeAge(person) 
```

In the `ChangeAge` method you can write:

```4d
  //ChangeAge
#declare (param : Object)
var result : Text
param.age=param.age+10
result=para.name+" is "+String(para.age)+" years old." 
```

This provides a powerful way to define [optional parameters](#optional-parameters) (see also below). To handle missing parameters, you can either:
- check if all expected parameters are provided by comparing them to the `Null` value, or
- preset parameter values, or
- use them as empty values.

In the `ChangeAge` method above, both age and name properties are mandatory and would produce errors if they were missing. To avoid this case, you can just write:

```4d
  //ChangeAge
#declare (param : Object)
var result : Text
param.age=Num(param.age)+10
result=String(param.name)+" is "+String(para.age)+" years old."
```
Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.

Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:

```4d
person=New object("name","Smith","aAge",40,"toAdd",10)
ChangeAge(person)

//ChangeAge
#declare (param : Object)
var result : Text
If (param.toAdd==Null)
	param.toAdd=10
End if
param.age=Num(param.age)+param.toAdd
result=String(param.name)+" is "+String(param.age)+" years old."
```

The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years.

With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order. 



## Optional parameters

In the Qodly documentation, the `{ }` characters (braces) indicate optional parameters. For example, `ASSERT ( boolExpression {, messageText} )` means that the *messageText* parameter may be omitted when calling the command. You can call it in the following ways:

```4d
ASSERT(a != "","Search for a blank value") //2 parameters
ASSERT(a != "") //1 parameter
```

Qodly methods and functions also accept such optional parameters. You can declare any number of parameters. If you call a method or function with less parameters than declared, missing parameters are processed as default values in the called code, [according to their type](data-types.md#default-values). For example:

```4d
// "concate" function of myClass
Function concate (param1 : Text , param2 : Text)-> result : Text
result=param1+" "+param2
```
```4d
  // Calling method
class=cs.myClass.new()
class.concate("Hello") // "Hello "
class.concate() // Displays " "
```

:::note

You can also call a method or function with more parameters than declared. They will be available within the called code through the [${N} syntax](#parameter-indirection-n).

:::

Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received. For example:

```4d
// Append_Text Method
// Append_Text ( Text { ; 4D.File } )
 
#Declare(param1 : Text; param2 : Text; param3 : Object)

...// do action1
If(Count parameters>=3)
    ...//do action2 
Else
    If(Count parameters>=2)
       ...//do action3
    End if
End if
```
After this method has been added to your project, you can write:

```4d  
Append_Text(vt1) //do only action1
Append_Text(vt1;vt2) //do action1 and action3
Append_Text(vt1;"";vobj) //do action1 and action2
```

> When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-objects-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.  



## Values or references

When you pass a parameter, Qodly always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the declared parameters in the called class function or method. The declared parameters are not the actual variables or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the class function/method, it does not change the value in the calling method. For example:

```4d
	//Here is some code from the method myMethod
var myVar, result : Text
myVar="williams"
Do_Something(myVar)
result=myVar //williams
 
	//Here is the code of the method Do_Something
#Declare ( param : Text )
result:=Uppercase(param) //WILLIAMS
```

The *result* value in `Do_Something` will be "WILLIAMS" and the *result* value in `myMethod` will be "williams". The method locally changed the value of the parameter, but this does not affect the value of the variable `myVar` passed as parameter by the method `myMethod`.

In some cases, you might want that the method `Do_Something` change the value of the variable. There are two ways to do that:

1. Rather than passing a Text variable to the method, you pass an Object variable containing the text value as a property. Since [object parameters are passed by **reference**](#particular-cases-objects-and-collections), the value will always be the same in all contexts:

```4d
	//Here is some code from the method myMethod
var myVar : Object
var result : Text
myVar=New object("name";"williams")
Do_Something(myVar)
result=myVar.name //WILLIAMS

	//Here is the code of the method Do_Something
#Declare ( param : Object )
var result : Text
result:=Uppercase(param.name) //WILLIAMS
```

2. Rather than having the method `Do_Something` "doing something," you can rewrite the method so it returns a value. Thus you would write:

```4d
	//Here is some code from the method myMethod
var myVar, result : Text
myVar="williams"
myVar=Do_Something(myVar) 
result=myVar //WILLIAMS

	//Here is the code of the method Do_Something
#Declare ( param : Text ) -> result : Text
result=Uppercase(param) //WILLIAMS
```

This second technique of returning a value by a subroutine is called "using a function".


### Particular cases: objects and collections

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal *pointer*). 

Consequently, when using such data types as parameters, they do not contain *values* but *references*. Modifying the value of the parameters within the subroutine will be propagated wherever the source object or collection is used. 

For example, consider the `CreatePerson` method that creates an object and sends it as a parameter:

```4d
  //CreatePerson
var person : Object
person:=New object("Name";"Smith";"Age";40)
ChangeAge(person)
person.Age //50 
```

The `ChangeAge` method adds 10 to the Age attribute of the received object

```4d
  //ChangeAge
#Declare (person : Object)
person.Age=person.Age+10
person.Age //50 
```

When you execute the `CreatePerson` method, person.Age will be 50 everywhere since the same object reference is handled by both methods.


