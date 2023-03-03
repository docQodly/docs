---
id: lang-variables
title: Variables
---

**Variables** store data temporarily in memory. 

When you set up your Qodly database, you specify the names and types of attributes that you want to use. Variables are much the same—you also give them names and different types (see [Data types](Concepts/data-types.md)).

Once created, you can use a variable wherever you need it in your application. For example, you might need to store a text variable in an attribute of same type:

```4d
myEntity.text=MyText //put the MyText variable contents into the text attribute
```

Variables are language objects; you can create and use variables that will never appear on the screen. In your web forms, you can display variables on the screen, enter data into them, and print them in reports. 

## Declaring Variables

You create variables by declaring them. When variables are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been [assigned](#assigning-data). 

You declare variables using the `var` keyword. It allows you to bind object variables with classes. To declare a variable of any type with the `var` keyword, use the following syntax:

`var <varName>{, <varName2>,...}{ : <varType>}`

`varName` is the variable name, it must comply with the [rules](Concepts/identifiers.md) about identifiers.

`varType` can be:

- a [basic type](Concepts/data-types.md), in which case the variable contains a value of the declared type,
- a [class reference](Concepts/classes.md) (4D class or user class), in which case the variable contains a reference to an object of the defined class.

If `varType` is omitted, a variable of the **variant** type is created.

The following table lists all supported `varType` values:

|varType|Contents|
|---|---|
|`Text`|Text value|
|`Date`|Date value|
|`Time`|Time value|
|`Boolean`|Boolean value|
|`Integer`|Long integer value|
|`Real`|Real value|
|`Pointer`|Pointer value|
|`Picture`|Picture value|
|`Blob`|Scalar Blob value|
|`Collection`|Collection value|
|`Variant`|Variant value|
|`Object`|Object with default class (4D.Object)|
|`4D.<className>`|Object of the 4D class name|
|`cs.<className>`|Object of the user class name|

#### Examples

```4d
var myText : Text  //a text variable
var myDate1, myDate2 : Date  //several date variables
var myFile : 4D.File  //a file class object variable
var aSquare : cs.Rectangle  //a user class object variable
var myVar //a variant variable
var o : Object //a generic object variable
//equivalent to:  
var o : 4D.Object
var myClass : cs.MyClass
var dataclass : cs.Employee //ORDA dataclass class
var entity : cs.EmployeeEntity //ORDA entity class
```

:::info

Arrays are a particular type of variables (an array is an ordered series of variables of the same type). Arrays are declared with specific commands, such as `ARRAY LONGINT(alAnArray;10)`. For more information, please refer to [Arrays](Concepts/arrays.md).

:::

## Assigning Data

Data can be put into and copied out of variables and arrays. Putting data into a variable is called **assigning the data to the variable** and is done with the assignment operator (=). The assignment operator is also used to assign data to dataclass attributes.

You write the name of the variable that you want to be assigned on the left side of the assignment operator. For example:

```4d
MyNumber=3
```

puts the number 3 into the variable *MyNumber*. If *MyNumber* already had a value, then the number 3 replaces it.

Of course, variables would not be very useful if you could not get data out of them. Once again, you use the assignment operator. If you need to put the value of MyNumber in an attribute called size, you would write *MyNumber* on the right side of the assignment operator:

```4d
myEntity.size=MyNumber
```

In this case, *myEntity.size* would be equal to 3. This example is rather simple, but it illustrates the fundamental way that data is transferred from one place to another by using the language.

You assign data to array elements by using curly braces ({...}):

```4d
atNames{1}="Richard"
```

## Lifetime of a variable

A variable is local to a method—accessible only within the method in which it was created and not accessible outside of that method. Being local to a method is formally referred to as being “local in scope.” Local variables are used to restrict a variable so that it works only within the method.

You may want to use a local variable to:

- Avoid conflicts with the names of other variables
- Use data temporarily
- Reduce the number of process variables

The name of a local variable always starts with a dollar sign ($) and can contain up to 31 additional characters. If you enter a longer name, 4D truncates it to the appropriate length.

When you are working in an application project with many methods and variables, you often find that you need to use a variable only within the method on which you are working. You can create and use a local variable in the method without worrying about whether you have used the same variable name somewhere else.

Frequently, in an application, small pieces of information are needed from the user. The `Request` command can obtain this information. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. Here is an example:

```4d
 $vsID:=Request("Please enter your ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

This method simply asks the user to enter an ID. It puts the response into a local variable, $vsID, and then searches for the ID that the user entered. When this method finishes, the $vsID local variable is erased from memory. This is fine, because the variable is needed only once and only in this method.

**Note:** Parameters $1, $2... passed to methods are local variables. For more information, please refer to [Parameters](Concepts/parameters.md).

### Process variables

A process variable is available only within a process. It is accessible to the process method and any other method called from within the process.

A process variable does not have a prefix before its name. A process variable name can contain up to 31 characters.

In interpreted mode, variables are maintained dynamically; they are created and erased from memory “on the fly.” In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. For example, the variable myVar is one variable in the process P_1 and another one in the process P_2.

A process can “peek and poke” process variables from another process using the commands `GET PROCESS VARIABLE` and `SET PROCESS VARIABLE`. It is good programming practice to restrict the use of these commands to the situation for which they were added to 4D:

- Interprocess communication at specific places or your code
- Handling of interprocess drag and drop
- In Client/Server, communication between processes on client machines and the stored procedures running on the server machines

For more information, see the chapter **Processes** and the description of these commands.
