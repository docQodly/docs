---
id: lang-quicktour
title: A Quick Tour
---

Since the Qodly language is highly related to web development, printing the traditional "Hello, world!" message on screen only requires a web form to be displayed and the followinbg line:

```4d  
Web Form.setMessage("Hello, World!")
```

This code will display a "Hello, World!" message at the bottom of your web form.

## Assigning Values

Data can be put into and copied out of variables, attributes, collection items... Putting data into a variable is called assigning the data to the variable and is done with the assignment operator (=). The assignment operator is also used to assign data to attributes, collection items, etc.

```4d
MyNumber=3 //assigns 3 to MyNumber variable  
myEntity.size=myNumber //assigns myNumber variable to size entity attribute
MyVar=Length("Acme") //assigns the result of the function (4) to MyVar
myDate=!2023/01/21! //assigns a date literal
myColl[2].hours=?08:12:55? //assigns a time literal
arrDays{2}="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element
```

You MUST distinguish the assignment operator = from the other operators. Rather than combining expressions into a new one, the assignment operator copies the value of the expression to the right of the assignment operator into the variable or attribute to the left of the operator.

For efficiency, Qodly also supports compound assignment operators, allowing to combine assignment with another operation, for example the addition assignment operator (`+=`):

```4d
a=1 //1
a+=2 //3
```


## Variables

The Qodly language is strongly typed, although some flexibility is allowed in many cases. You create a typed variable using the `var` keyword. For example, to create a variable of the date type, you can write:

```4d
var MyDate : Date 
```

The `var` keyword allows declaring object variables of a defined class type, for example:

```4d
var myPerson : cs.Person 
//variable of the Person user class
```

:::caution TO BE CHECKED

Even if it is usually not recommended, you can declare variables simply by using them; you do not necessarily need to formally define them. For example, if you want a variable that will hold the current date plus 30 days, you can write:

```4d
MyOtherDate=Current date+30
```

The line of code reads "MyOtherDate gets the current date plus 30 days". This line declares the variable, assigns it with both the (temporary) date type and a content. A variable declared by assignment is interpreted as typeless, that is, it can be assigned with other types in other lines and then changes the type dynamically. A variable typed with `var` cannot change the type. 

:::


## Commands

Qodly commands are built-in methods to perform an action. Commands are often used with parameters, which are passed in brackets () and separated by commas `,`. Example:

```4d
CONVERT FROM TEXT(vText,"UTF-8",vBlob)
```

Some commands are attached to collections or objects, in which case they are named functions and are used using the dot notation. For example: 

```4d
c:=New collection(1;2;3;4;5)
nc:=c.slice(0;3) //$nc=[1,2,3]  

lastEmployee:=employee.last()
```


## Constants

Qodly proposes an extensed set of predefined constants, whose values are accessible by name. They allow writing more readable code. For example, `sk char codes` is a constant (value 1). 

```4d
a="alpha bravo charlie"
b="Alpha Bravo Charlie"  
vResult=Compare strings(a,b,sk char codes) // vResult==1
```

Constants can be added:

```4d
vResult=Compare strings(a,b,sk char codes+sk case insensitive) // vResult==0
```



## Methods

Qodly provides a large number of built-in methods (or commands) but also lets you can create your own **methods**. User-defined methods can contain commands, operators, and any other parts of the language. 

A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex.

For example, the following line is a statement that will compress a BLOB:

```4d
COMPRESS BLOB(vBlob;GZIP Best compression mode)
```

A method also contains tests and loops that control the flow of the execution. Qodly methods support `If...Else...End if` and `Case of...Else...End case` branching structures as well as looping structures: `While...End while`, `Repeat...Until`, `For...End for`, and `For each...End for each`:

The following example goes through all the characters of the text vtSomeText:

```4d
For($vlChar,1,Length(vtSomeText))
	//Do something with the character if it is a TAB


	If(Character code(vtSomeText[[$vlChar]])==Tab)
		//...
	End if
End for
```

A method can call another method with or without parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a comma `,`. The parameters are directly available within the called method if they are declared. 

as consecutively numbered local variables: $1, $2,…, $n. A method can return a single value in the $0 parameter. When you call a method, you just type its name:

```4d
myText="hello"
myText=Do_Something(myText) //Call the Do_Something method
File("/RESOURCES/Hello.txt").setText(myText) //writes "HELLO"
 
  //code of the method Do_Something  
#DECLARE ( input : Text) -> output : Text 
output:=Uppercase(input)
```


## Data Types

In the language, the various types of data that can be handled are referred to as data types. There are basic data types (string, numeric, date, time, Boolean, picture, pointers, arrays), and also composite data types (BLOBs, objects, collections).

Note that string and numeric data types can be associated with more than one type of datastore attributes. When data is put into an attribute, the language automatically converts the data to the correct type for the attribute. For example, if an integer attribute is used, its data is automatically treated as numeric. In other words, you need not worry about mixing similar attribute types when using the language; it will manage them for you.

However, when using the language it is important that you do not mix different data types. In the same way that it makes no sense to store "ABC" in a Date attribute, it makes no sense to put "ABC" in a variable used for dates. In most cases, Qodly is very tolerant and will try to make sense of what you are doing. For example, if you add a number to a date, Qodly will assume that you want to add that number of days to the date, but if you try to add a string to a date, Qodly will tell you that the operation cannot work.

There are cases in which you need to store data as one type and use it as another type. The language contains a full complement of commands that let you convert from one data type to another. For example, you may need to create a part number that starts with a number and ends with characters such as "abc". In this case, you might write:

```4d
myEntity.Product.partNumber=String(Number)+"abc"
```

If _Number_ is 17, then _myEntity.partNumber_ will get the string "17abc".

The data types are fully defined in the section [Data Types](Concepts/data-types.md).

## Objects and collections 

You can handle objects and collections using the object notation to get or to set their values. For example:

```4d
employee.name="Smith"
```

You can also use a string within square brackets, for example:

```4d
vName=employee["name"]
```

Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:

```4d
vAge=employee.children[2].age
```

Note that if the object property value is an object that encapsulates a method (a formula), you need to add parenthesis () to the property name to execute the method:

```
f=New object
f.add=Formula(1+2)
f.add() //returns 3
```

To access a collection element, you have to pass the element number embedded in square brackets:

```4d
var myColl : Collection
myColl=New collection("A","B",1,2,Current time)
myColl[3]  //access to 4th element of the collection
```

## Classes

The Qodly language supports classes. 

You can create a class named "myClass" for example. To instantiate an object of this class in a method, call the class from the user *class store* (`cs`) and use the `new()` member function. You can pass parameters.

```4d  
// in a Qodly method
o=cs.myClass.new() 
```

In the `myClass` class method, use the `Function <methodName>` statement to define the *methodName* class member function. A class member function can receive and return parameters like any method, and use `This` as the object instance. 

```4d  
//in the myClass definition
Function hello -> welcome : Text
  welcome="Hello "+This.who
```

To execute a class member function, just use the `()` operator on the member function of the object instance. 

```4d
o=cs.myClass.new()
o.who="World"
message=o.myClass.hello()  
//message: "Hello World"
```

Optionally, use the `Class constructor` keyword to declare properties for the object.

```4d  
//in the Rectangle class
Class constructor
var height, $width : Integer
This.height=height
This.width=width 
This.name="Rectangle"
```

A class can extend another class by using `Class extends <ClassName>`. Superclasses can be called using the `Super` command. For example:

```4d  
//in the Square class
Class extends rectangle
 
Class constructor
var length : Integer
 
  // It calls the parent class's constructor with lengths   
  // provided for the Rectangle's width and height
Super($length,$length)

This.name="Square"
```


## Operators

When you use the language, it is rare that you will simply want a piece of data. It is more likely that you will want to do something to or with that data. You perform such calculations with operators. Operators, in general, take two pieces of data and perform an operation on them that results in a new piece of data. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. This table shows some familiar numeric operators:

|Operator|Operation|Example  
|---|---|---|
|+|	Addition | 1 + 2 results in 3
|–|	Subtraction | 3 – 2 results in 1
|*|	Multiplication | 2 * 3 results in 6
|/|	Division | 6 / 2 results in 3|

Numeric operators are just one type of operator available to you. Qodly supports many different types of data, such as numbers, text, dates, and pictures, so there are operators that perform operations on these different data types.

The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:

|Data Type	|Operation|	Example  
|---|---|---|
|Number|	Addition	|1 + 2 adds the numbers and results in 3
|String	|Concatenation	|"Hello " + "there" concatenates (joins together) the strings and results in "Hello there"
|Date and Number	|Date addition	|!2023-01-01! + 20 adds 20 days to the date January 1, 2023, and results in the date January 21, 2023|


## Expressions 

Simply put, expressions return a value. In fact, when using the Qodly language, you use expressions all the time and tend to think of them only in terms of the value they represent. Expressions are also sometimes referred to as formulas.

Expressions are made up of almost all the other parts of the language: commands, operators, variables, entity attributes, object properties, collection elements. You use expressions to build statements (lines of code), which in turn are used to build methods. The language uses expressions wherever it needs a piece of data.

Expressions rarely "stand alone". There are several places in Qodly where an expression can be used by itself. It includes:

- Formula API (apply formula, query with formula, order by formula)
- The `EXECUTE FORMULA` command
- Web forms, where an expression can be used as a data source for most of components
- Debugger where the value of expressions can be checked


### Expression types

You refer to an expression by the data type it returns. There are several expression types. The following table gives examples of each type of expression.

|Expression|Type|Description|
|---|---|---|
|"Hello"|String	|The word Hello is a string constant, indicated by the double quotation marks.|
|"Hello " + "there"|	String|	Two strings, "Hello " and "there", are added together (concatenated) with the string concatenation operator (+). The string "Hello there" is returned.|
|"Mr. " + person.name|	String|	Two strings are concatenated: the string "Mr. " and the current value of the name attribute in the person entity. If the attribute contains "Smith", the expression returns "Mr. Smith".|
|Uppercase("smith")	|String	|This expression uses `Uppercase`, a command from the language, to convert the string "smith" to uppercase. It returns "SMITH".|
|4	|Number |	This is a number constant, 4.|
|4 * 2|	Number|	Two numbers, 4 and 2, are multiplied using the multiplication operator (*). The result is the number 8.|
|!2023-01-25!|	Date|	This is a date constant for the date 1/25/2023 (January 25, 2023).|
|Current date+ 30|	Date	|This is a date expression that uses the `Current date` command to get today’s date. It adds 30 days to today’s date and returns the new date.|
|?8:05:30?	|Time|	This is a time constant that represents 8 hours, 5 minutes, and 30 seconds.|
|?2:03:04? + ?1:02:03?	|Time	|This expression adds two times together and returns the time 3:05:07.|
|True|	Boolean|	This command returns the Boolean value TRUE.|
|10 != 20|Boolean	|This is a logical comparison between two numbers. The != sign means "is not equal to". Since 10 "is not equal to" 20, the expression returns TRUE.|
|"ABC" == "XYZ"	|Boolean	|This is a logical comparison between two strings. They are not equal, so the expression returns FALSE.|
|myPicture + 50	|Picture	|This expression takes the picture in myPicture, moves it 50 pixels to the right, and returns the resulting picture.|
|JSON Parse(MyString)|	Object|	This is a command that returns MyString as an object (if proper format)|
|JSON Parse(MyJSONArray)	|Collection	|This is a command that returns MyJSONArray as a collection (if proper format)|
|Form.pageNumber|Object property|An object property is an expression that can be of any supported type
|Col[5]|Collection element|A collection element is an expression that can be of any supported type|  
|entitySel[0]|Entity|A element of an ORDA entity selection is an expression of the entity type. This kind of expression is **non-assignable**|  

### Assignable vs non-assignable expressions

An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like `myButton`. It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are **non-assignable**, which means that you cannot assign a value to them.
In Qodly, expressions can be **assignable**. An expression is assignable when it can be used on the left side of an assignation. For example:

```4d  
//myVar variable is assignable, you can write:  
myVar="Hello" //assign "Hello" to myVar
//Form.pageNumber is assignable, you can write:  
Form.pageNumber=10 //assign 10 to Form.pageNumber
//Form.pageTotal-Form.pageNumber is not assignable:
Form.pageTotal-Form.pageNumber=10 //error, non-assignable
```
In general, expressions that use an operator are non-assignable. For example, `entity.firstName+" "+entity.lastName` is not assignable. 

 
## Code on several lines

You can write a single statement on several lines by terminating each line of the statement with a trailing backslash `\` character. The Qodly language will consider all the lines at once. For example, both the following statements are equivalent:

```4d
str=String("hello world!")
```

```4d
str=String("hello"+\
" world"+\
+"!")
```

## Comments

Comments are inactive lines of code. These lines are not interpreted by the Qodly language and are not executed when the code is called. 

There are two ways to create comments:

- `//` for single line comments
- `/*...*/` for inline or multiline commnents.

Both styles of comments can be used simultaneously. 

#### Single line comments (`//comment`)

Insert `//` at the beginning of a line or after a statement to add a single line comment. Example: 

```4d
//This is a comment
For($vCounter,1,100) //Starting loop
  //comment
  //comment
  //comment
End for
```

#### Inline or multiline comments (`/*comment*/`)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. Example:

```4d
For /* inline comment */ ($vCounter,1,100)
	...
End for
```

- **Multiline comment blocks** allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the Qodly code editor supports block collapsing). Example:

```4d
For ($vCounter,1,100)
/*
comments  
	/* 
	other comments
	*/
*/
...
End for
```

## Escape sequences  

The Qodly language allows you to use escape sequences (also called escape characters). An escape sequence is a sequence of characters that can be used to replace a "special" character.

The sequence consists of a backslash `\\`, followed by a character. For instance, `\t` is an escape sequence for the **Tab** character. Escape sequences facilitate the entry of special characters: the previous example (`\t`) replaces the entry "Character(Tab)".

In Qodly, the following escape sequences can be used:

|Escape sequence|Character replaced|
|---|---|
| `\n` | LF (Line feed) |
| `\t` | HT (Tab) |
| `\r` | CR (Carriage return) |
| `\\` | `\` (Backslash) |
| `\"` | " (Quotation marks) |

> It is possible to use either upper or lower case in escape sequences.

In the following example, the **Carriage return** character (escape sequence `\r`) is inserted in a statement in order to obtain a message on two lines:

`myDoc.setMessage("The operation has been completed successfully.\rYou may now disconnect.")`