---
id: lang-quicktour
title: A Quick Tour
---

Since the QodlyScript language is highly related to web development, printing the traditional "Hello, world!" message on screen only requires a Page to be displayed and the following line:

```qs  
webForm.setMessage("Hello, World!")
```

This code will display a "Hello, World!" message at the bottom of your Page.

## Assigning Values

Data can be put into and copied out of variables, attributes, collection items... Putting data into a variable is called assigning the data to the variable and is done with the assignment operator ( = ). The assignment operator is also used to assign data to attributes, collection items, etc.

```qs
MyNumber = 3 //assigns 3 to MyNumber variable  
myEntity.size = myNumber //assigns myNumber variable to size entity attribute
MyVar = length("Acme") //assigns the result of the function (4) to MyVar
myDate = !2023/01/21! //assigns a date literal
myColl[2].hours = ?08:12:55? //assigns a time literal
arrDays{2} = "Tuesday" //assigns "Tuesday" string to the 2nd arrDays element
```

You must distinguish the assignment operator = from the other operators. Rather than combining expressions into a new one, the assignment operator copies the value of the expression to the right of the assignment operator into the variable or attribute to the left of the operator.

For efficiency, QodlyScript also supports compound assignment operators, allowing to combine assignment with another operation, for example the addition assignment operator (`+= `):

```qs
a = 1 //1
a += 2 //3
```


## Variables

The QodlyScript language is strongly typed, although some flexibility is allowed in many cases. You create a typed variable using the `var` keyword. For example, to create a variable of the date type, you can write:

```qs
var MyDate : date 
```

The `var` keyword allows declaring object variables of a defined class type, for example:

```qs
var myPerson : cs.Person 
//variable of the Person user class
```

A declared variable cannot change of type. 

## Commands

QodlyScript commands are built-in methods to perform an action. Commands are often used with parameters, which are passed in brackets () and separated by commas `,`. Example:

```qs
convertFromString(vText,"UTF-8",vBlob)
```

Some commands are attached to collections or objects, in which case they are named functions and are used using the dot notation. For example: 

```qs
c = newCollection(1,2,3,4,5)
nc = c.slice(0,3) //nc = [1,2,3]  

lastEmployee = employee.last()
```


## Constants

QodlyScript proposes an extensed set of predefined constants, whose values are accessible by name. They allow writing more readable code. For example, `kCharCodes` is a constant (value 1). 

```qs
a = "alpha bravo charlie"
b = "Alpha Bravo Charlie"  
vResult = compareStrings(a,b,kCharCodes) // vResult: 1
```

Constants can be added:

```qs
vResult = compareStrings(a,b,kCharCodes+kCaseInsensitive) // vResult: 0
```



## Methods

QodlyScript provides a large number of built-in methods (or *commands*) but also lets you can create your own **methods**. User-defined methods can contain commands, operators, and any other parts of the language. 

A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex.

For example, the following line is a statement that will compare two strings and return a result:

```qs
myResult = compareStrings(string1,string2,kCharCodes)
```

A method also contains tests and loops that control the flow of the execution. QodlyScript methods support `if...else...end` and `switch...else...end` branching structures as well as looping structures: `while...end`, `repeat...until`, `for...end`, and `forEach...end`:

The following example goes through all the characters of the text *vtSomeText*:

```qs
for(vlChar,1,length(vtSomeText))
	//Do something with the character if it is a TAB


	if(characterCode(vtSomeText[[vlChar]]) == tab)
		//...
	end
end
```

A method can call another method with or without parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a comma `,`. The parameters are directly available within the called method if they are declared. A method can return a single parameter. 

When you call a method, you just type its name:

```qs
myText = "hello"
myText = Do_Something(myText) //Call the Do_Something method
file("/RESOURCES/Hello.txt").setText(myText) //writes "HELLO"
 
  //code of the method Do_Something  
declare ( input : string) -> output : string 
output = uppercase(input)
```


## Data Types

In QodlyScript, the various types of data that can be handled are referred to as data types. There are scalar data types (string, numeric, date, time, boolean, picture), and also composite data types (objects, collections, blobs).

Note that string and numeric data types can be associated with more than one type of datastore attributes. When data is put into an attribute, QodlyScript automatically converts the data to the correct type for the attribute. For example, if an Long attribute is used, its data is automatically treated as integer. In other words, you need not worry about mixing similar attribute types when using the QodlyScript; it will manage them for you.

However, when using QodlyScript it is important that you do not mix different data types. In the same way that it makes no sense to store "ABC" in a Date attribute, it makes no sense to put "ABC" in a variable used for dates. In most cases, QodlyScript is very tolerant and will try to make sense of what you are doing. For example, if you add a number to a date, QodlyScript will assume that you want to add that number of days to the date, but if you try to add a string to a date, QodlyScript will tell you that the operation cannot work.

There are cases in which you need to store data as one type and use it as another type. The language contains a full complement of commands that let you convert from one data type to another. For example, you may need to create a part number that starts with a number and ends with characters such as "abc". In this case, you might write:

```qs
myEntity.Product.partNumber = string(number)+"abc"
```

If _number_ is 17, then _myEntity.partNumber_ will get the string "17abc".

The data types are fully defined in the section [Data Types](lang-data-types.md).

## Objects and collections 

You can handle objects and collections using the object notation to get or to set their values. For example:

```qs
employee.name = "Smith"
```

You can also use a string within square brackets, for example:

```qs
vName = employee["name"]
```

Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:

```qs
vAge = employee.children[2].age
```

Note that if the object property value is an object that encapsulates a method (a formula), you need to add parenthesis `()` to the property name to execute the method:

```
f = newObject
f.add = formula(1+2)
f.add() //returns 3
```

To access a collection element, you have to pass the element number embedded in square brackets:

```qs
var myColl : collection
myColl = newCollection("A","B",1,2,currentTime)
myColl[3] //access to 4th element of the collection
```

## Classes

The QodlyScript language supports classes. 

You can create a class named "myClass" for example. To instantiate an object of this class in a method, call the class from the user *class store* (`cs`) and use the `new()` member function. You can pass parameters.

```qs  
// in a QodlyScript method
o = cs.myClass.new() 
```

In the `myClass` class method, use the `function <methodName>` statement to define the *methodName* class member function. A class member function can receive and return parameters like any method, and use `this` as the object instance. 

```qs  
//in the myClass definition
function hello -> welcome : string
  welcome = "Hello "+this.who
```

To execute a class member function, just use the `()` operator on the member function of the object instance. 

```qs
o = cs.myClass.new()
o.who = "World"
message = o.myClass.hello()  
//message: "Hello World"
```

Optionally, use the `constructor` and `property` keywords to declare properties for the object.

```qs  
//in the Rectangle class
constructor(height : integer, width : integer)
 this.height = height
 this.width = width
 
 property name : string
 this.name = "Rectangle"
```

A class can extend another class by using `extends <ClassName>`. Superclasses can be called using the `super` command. For example:

```qs  
//in the Square class
extends Rectangle
 
constructor(size : integer)
 
  // It calls the parent class's constructor with sizes   
  // provided for the Rectangle's width and height
super(size,size)

this.name = "Square"
```


## Operators

When you use a language, it is rare that you will simply want a piece of data. It is more likely that you will want to do something to or with that data. You perform such calculations with operators. Operators, in general, take two pieces of data and perform an operation on them that results in a new piece of data. You are already familiar with many operators. For example, 1 + 2 uses the addition operator (or plus sign) to add two numbers together, and the result is 3. This table shows some familiar numeric operators:

|Operator|Operation|Example  
|---|---|---|
|+|	Addition | 1 + 2 results in 3
|–|	Subtraction | 3 – 2 results in 1
|*|	Multiplication | 2 * 3 results in 6
|/|	Division | 6 / 2 results in 3|

Numeric operators are just one type of operator available to you. QodlyScript supports many different types of data, such as numbers, strings, dates, and pictures, so there are operators that perform operations on these different data types.

The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:

|Data Type	|Operation|	Example  
|---|---|---|
|Number|	Addition	|1 + 2 adds the numbers and results in 3
|String	|Concatenation	|"Hello " + "there" concatenates (joins together) the strings and results in "Hello there"
|Date and Number	|Date addition	|!2023-01-01! + 20 adds 20 days to the date January 1, 2023, and results in the date January 21, 2023|



