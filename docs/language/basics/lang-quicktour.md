---
id: lang-quicktour
title: A Quick Tour
---

Since the QodlyScript language is highly related to web development, printing the traditional "Hello, world!" message on screen only requires a web form to be displayed and the followinbg line:

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

For efficiency, QodlyScript also supports compound assignment operators, allowing to combine assignment with another operation, for example the addition assignment operator (`+=`):

```4d
a=1 //1
a+=2 //3
```


## Variables

The QodlyScript language is strongly typed, although some flexibility is allowed in many cases. You create a typed variable using the `var` keyword. For example, to create a variable of the date type, you can write:

```4d
var MyDate : Date 
```

The `var` keyword allows declaring object variables of a defined class type, for example:

```4d
var myPerson : cs.Person 
//variable of the Person user class
```

A declared variable cannot change of type. 

## Commands

QodlyScript commands are built-in methods to perform an action. Commands are often used with parameters, which are passed in brackets () and separated by commas `,`. Example:

```4d
CONVERT FROM TEXT(vText,"UTF-8",vBlob)
```

Some commands are attached to collections or objects, in which case they are named functions and are used using the dot notation. For example: 

```4d
c=New collection(1,2,3,4,5)
nc=c.slice(0,3) //$nc=[1,2,3]  

lastEmployee=employee.last()
```


## Constants

QodlyScript proposes an extensed set of predefined constants, whose values are accessible by name. They allow writing more readable code. For example, `sk char codes` is a constant (value 1). 

```4d
a="alpha bravo charlie"
b="Alpha Bravo Charlie"  
vResult=Compare strings(a,b,sk char codes) // vResult: 1
```

Constants can be added:

```4d
vResult=Compare strings(a,b,sk char codes+sk case insensitive) // vResult: 0
```



## Methods

QodlyScript provides a large number of built-in methods (or *commands*) but also lets you can create your own **methods**. User-defined methods can contain commands, operators, and any other parts of the language. 

A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex.

For example, the following line is a statement that will compress a BLOB:

```4d
COMPRESS BLOB(vBlob,GZIP Best compression mode)
```

A method also contains tests and loops that control the flow of the execution. QodlyScript methods support `If...Else...End if` and `Case of...Else...End case` branching structures as well as looping structures: `While...End while`, `Repeat...Until`, `For...End for`, and `For each...End for each`:

The following example goes through all the characters of the text *vtSomeText*:

```4d
for($vlChar,1,Length(vtSomeText))
	//Do something with the character if it is a TAB


	if(Character code(vtSomeText[[$vlChar]])==Tab)
		//...
	end if
end for
```

A method can call another method with or without parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a comma `,`. The parameters are directly available within the called method if they are declared. A method can return a single parameter. 

When you call a method, you just type its name:

```4d
myText="hello"
myText=Do_Something(myText) //Call the Do_Something method
File("/RESOURCES/Hello.txt").setText(myText) //writes "HELLO"
 
  //code of the method Do_Something  
#declare ( input : Text) -> output : Text 
output=Uppercase(input)
```


## Data Types

In the language, the various types of data that can be handled are referred to as data types. There are scalar data types (string, numeric, date, time, boolean, picture, arrays), and also composite data types (BLOBs, objects, collections).

Note that string and numeric data types can be associated with more than one type of datastore attributes. When data is put into an attribute, the language automatically converts the data to the correct type for the attribute. For example, if an integer attribute is used, its data is automatically treated as numeric. In other words, you need not worry about mixing similar attribute types when using the language; it will manage them for you.

However, when using the language it is important that you do not mix different data types. In the same way that it makes no sense to store "ABC" in a Date attribute, it makes no sense to put "ABC" in a variable used for dates. In most cases, QodlyScript is very tolerant and will try to make sense of what you are doing. For example, if you add a number to a date, QodlyScript will assume that you want to add that number of days to the date, but if you try to add a string to a date, QodlyScript will tell you that the operation cannot work.

There are cases in which you need to store data as one type and use it as another type. The language contains a full complement of commands that let you convert from one data type to another. For example, you may need to create a part number that starts with a number and ends with characters such as "abc". In this case, you might write:

```4d
myEntity.Product.partNumber=String(Number)+"abc"
```

If _Number_ is 17, then _myEntity.partNumber_ will get the string "17abc".

The data types are fully defined in the section [Data Types](lang-data-types.md).

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

The QodlyScript language supports classes. 

You can create a class named "myClass" for example. To instantiate an object of this class in a method, call the class from the user *class store* (`cs`) and use the `new()` member function. You can pass parameters.

```4d  
// in a QodlyScript method
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
Class constructor(height : Integer, width : Integer)
This.height=height
This.width=width 
This.name="Rectangle"
```

A class can extend another class by using `Class extends <ClassName>`. Superclasses can be called using the `Super` command. For example:

```4d  
//in the Square class
Class extends rectangle
 
Class constructor(length : Integer)
 
  // It calls the parent class's constructor with lengths   
  // provided for the Rectangle's width and height
Super(length,length)

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

Numeric operators are just one type of operator available to you. QodlyScript supports many different types of data, such as numbers, text, dates, and pictures, so there are operators that perform operations on these different data types.

The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:

|Data Type	|Operation|	Example  
|---|---|---|
|Number|	Addition	|1 + 2 adds the numbers and results in 3
|String	|Concatenation	|"Hello " + "there" concatenates (joins together) the strings and results in "Hello there"
|Date and Number	|Date addition	|!2023-01-01! + 20 adds 20 days to the date January 1, 2023, and results in the date January 21, 2023|



