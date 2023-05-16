---
id: lang-variables
title: Variables
---

**Variables** store data temporarily in memory. 

When you set up your Qodly database, you specify the names and types of attributes that you want to use. Variables are much the same—you also give them names and different types (see [Data types](lang-data-types.md)).

Once created, you can use a variable wherever you need it in your code. For example, you might need to store a string variable in an attribute of same type:

```4d
myEntity.text=MyString //put the MyString variable contents into the text attribute
```

Variables are language objects; you can create and use variables that will never appear on the screen. In your web forms, you can display variables on the screen, enter data into them, and print them in reports. 

## Declaring Variables

You create variables by declaring them. When variables are declared, they are initialized to the [**default value corresponding to their type**](lang-data-types.md#default-values), which they will keep during the session as long as they have not been [assigned](#assigning-data). 

You declare variables using the `var` keyword. It allows you to create basic variables (integer, string...) and to bind object variables with classes. To declare a variable of any type with the `var` keyword, use the following syntax:

`var <varName>{, <varName2>,...}{ : <varType>}`

`varName` is the variable name, it must comply with the [rules](Concepts/identifiers.md) about identifiers.

`varType` can be:

- a [basic type](Concepts/data-types.md), in which case the variable contains a value of the declared type,
- a [class reference](Concepts/classes.md) (4D class or user class), in which case the variable contains a reference to an object of the defined class.

If `varType` is omitted, a variable of the **variant** type is created.

The following table lists all supported `varType` values:

|varType|Contents|
|---|---|
|`string`|String (text) value|
|`date`|Date value|
|`time`|Time value|
|`boolean`|Boolean value|
|`integer`|Long integer value|
|`real`|Real value|
|`picture`|Picture value|
|`blob`|Scalar Blob value|
|`collection`|Collection value|
|`variant`|Variant value|
|`object`|Object with default class (4D.Object)|
|`4D.<className>`|Object of the 4D class name|
|`cs.<className>`|Object of the user class name|

#### Examples

```4d
var myString : string  //a string variable
var myDate1, myDate2 : date  //several date variables
var myFile : 4D.File  //a file class object variable
var aSquare : cs.Rectangle  //a user class object variable
var myVar //a variant variable
var o : object //a generic object variable
//equivalent to:  
var o : 4D.Object
var myClass : cs.MyClass
var dataclass : cs.Employee //ORDA dataclass class
var entity : cs.EmployeeEntity //ORDA entity class
```



## Assigning Data

Data can be put into and copied out of variables. Putting data into a variable is called **assigning the data to the variable** and is done with the assignment operator (=). The assignment operator is also used to assign data to dataclass attributes.

You write the name of the variable that you want to be assigned on the left side of the assignment operator. For example:

```4d
MyNumber=3
```

puts the number 3 into the variable *MyNumber*. If *MyNumber* already had a value, then the number 3 replaces it.

Of course, variables would not be very useful if you could not get data out of them. Once again, you use the assignment operator. If you need to put the value of *MyNumber* in an attribute called *size*, you would write *MyNumber* on the right side of the assignment operator:

```4d
myEntity.size=MyNumber
```

In this case, *myEntity.size* would be equal to 3. This example is rather simple, but it illustrates the fundamental way that data is transferred from one place to another by using the language.


## Sharing Variable Values

A variable is local to a method, i.e. it is accessible only within the method in which it was created and not accessible outside of that method. 

When the method finishes, the variable is erased from memory. This is fine when a variable is needed only once and only in this method.

If you want to share values between methods, you can pass the variables as [parameters](lang-parameters.md) to the called methods. 

If you want to store value during the session, it is recommended to use the [session storage](../SessionClass.md#storage) shared object.   