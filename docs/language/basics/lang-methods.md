---
id: lang-methods
title: Methods
---

A method is basically a piece of code that executes one or several action(s). Qodly provides a large number of built-in methods (i.e. **commands**) but also lets you create your own user methods. In this section, we describe user methods.


## Defining and Calling Methods

You give a method a [name](lang-identifiers.md#methods) that usually identifies what it does, and this name is used to call the method wherever it is needed. 

Once a method is created, it becomes part of the language of the project. 

A method is executed when its name is called, with or without [parameters](lang-parameters.md), by another code. For example:

```4d
//methodA
//methodA calls methodB with one parameter
var t : string
t=methodB("world") //t == "hello world"
```

```4d
//methodB
declare (param : string)
return ("hello " + param)
```

:::note

Qodly Studio allows executing methods from the Explorer to test them.

:::

## Writing Method Code

A method can contain any code to execute any custom actions. 

A user method is composed of statements. A statement performs an action, and may be simple or complex. Each statement usually consists of one line in the method (if necessary, it can however be split using the `\` character, see below). 

The maximum size of a method is limited to 2 GB of text or 32,000 lines of code.  

### Code on several lines

You can write a single statement on several lines by terminating each line of the statement with a trailing backslash `\` character. The QodlyScript language will consider all the lines at once. For example, both the following statements are equivalent:

```4d
str=string("hello world!")
```

```4d
str=string("hello"+\
" world"+\
+"!")
```

### Comments

Comments are inactive lines of code. These lines are not interpreted by the QodlyScript language and are not executed when the code is called. 

There are two ways to create comments:

- `//` for single line comments
- `/*...*/` for inline or multiline commnents.

Both styles of comments can be used simultaneously. 

#### Single line comments (`//comment`)

Insert `//` at the beginning of a line or after a statement to add a single line comment. Example: 

```4d
//This is a comment
for(vCounter,1,100) //Starting loop
  //comment
  //comment
  //comment
end
```

#### Inline or multiline comments (`/*comment*/`)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. Example:

```4d
for /* inline comment */ (vCounter,1,100)
	...
end for
```

- **Multiline comment blocks** allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the QodlyScript code editor supports block collapsing). Example:

```4d
for (vCounter,1,100)
/*
comments  
	/* 
	other comments
	*/
*/
...
end
```



## Methods as Object Formulas

You can encapsulate your methods in **formula** objects and call them from your objects.

The [`formula`](../FunctionClass.md#formula) and [`formulaFromString`](../FunctionClass.md#formulafromstring) commands allow you to create formula objects that you can encapsulate in object properties. It allows you to implement custom object methods.

To execute a method stored in an object property, use the **()** operator after the property name. For example:

```4d
//three_days_later
return (currentDate+3)
```

Then `three_days_later` can be encapsulated in any object and called:

```4d
var o : object
o=newObject("threeDays";formula(three_days_later))
o.threeDays() //returns the date in three days
```

Syntax with brackets is also supported:

```4d
o["threeDays"]() //returns the date in three days
```

You can also [pass parameters](lang-parameters.md) to your formula when you call it by using special variables `$1`, `$2`… `$N`. They will be received in their sequence order in the formula code. Use `$0` in the formula code to return a value.

```4d
//fullName method
var $0,$1,$2 : string
$0=$1+" "+$2
```

Encapsulate `fullName` in an object:

```4d
var o : object
o=newObject("full_name",formula(fullName))
result=o.full_name("John","Smith") 
//result = "John Smith"
//equivalent to result=fullName("param1","param2")
```

Combined with the [`this`](../language.md#this) keyword, such object methods allow writing powerful generic code. For example:

```4d
//fullName2 method
var $0 : string
$0=this.firstName+" "+this.lastName
```

Then the method acts like a new, calculated attribute that can be added to other attributes:

```4d
var o : object
o=newObject("firstName","Jim","lastName","Wesson")
o.fullName=formula(fullName2) //add the method  

result=o.fullName2() 
//result = "Jim Wesson"
```

Note that, even if it does not have parameters, an object method to be executed must be called with `()` parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):

```4d
o=f.message //returns the formula object in o
```

## Recursive Methods

Methods can call themselves. For example:

- The method A may call the method B which may call A, so A will call B again and so on.
- A method can call itself.

This is called recursion. The QodlyScript language fully supports recursion.


