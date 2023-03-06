---
id: lang-methods
title: Methods
---

A method is basically a piece of code that executes one or several action(s). Qodly provides a large number of built-in methods (i.e. **commands**) but also lets you create your own user methods. In this section, we describe user methods.



## Defining and Calling Methods

A method can contain any code to execute any custom actions. 

You give a method a name that identifies what it does, and this name is used to call the method wherever it is needed. 

A user method is composed of statements. A statement performs an action, and may be simple or complex. Each statement usually consists of one line in the method (if necessary, it can however be [split using the `\` character](lang-quicktour.md#code-on-several-lines)). 

The maximum size of a method is limited to 2 GB of text or 32,000 lines of code.  

Once a method is created, it becomes part of the language of the project. 

A method is executed when its name is called, with or without parameters, by another code. For example, `:

```4d
//methodA

methodB("hello") //methodA calls methodB with one parameter
```


:::note

Qodly Studio allows executing methods from the Explorer to test them.

:::


## Methods as Object Formulas

You can encapsulate your methods in **formula** objects and call them from your objects.

The `Formula` and `Formula from string` commands allow you to create formula objects that you can encapsulate in object properties. It allows you to implement custom object methods.

To execute a method stored in an object property, use the **()** operator after the property name. For example:

```4d
//three_days_later
return (Current date+3)
```

Then `three_days_later` can be encapsulated in any object and called:

```4d
var o : Object
o=New object("threeDays";Formula(three_days_later))
o.threeDays() //returns the date in three days
```

Syntax with brackets is also supported:

```4d
o["threeDays"]() //returns the date in three days
```

You can also [pass parameters](parameters.md) to your formula when you call it by using special variables `$1`, `$2`… `$N`. They will be received in their sequence order in the formula code. Use `$0` in the formula code to return a value.

```4d
//fullName method
var $0,$1,$2 : Text
$0=$1+" "+$2
```

Encapsulate `fullName` in an object:

```4d
var o : Object
o=New object("full_name",Formula(fullName))
result=o.full_name("John";"Smith") 
//result = "John Smith"
//equivalent to result=fullName("param1";"param2")
```

Combined with the `This`function, such object methods allow writing powerful generic code. For example:

```4d
//fullName2 method
var $0 : Text
$0=This.firstName+" "+This.lastName
```

Then the method acts like a new, calculated attribute that can be added to other attributes:

```4d
var o : Object
o=New object("firstName","Jim","lastName","Wesson")
o.fullName=Formula(fullName2) //add the method  

result=o.fullName() 
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

This is called recursion. The Qodly language fully supports recursion.
