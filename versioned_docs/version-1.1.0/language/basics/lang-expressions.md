---
id: lang-expressions
title: Expressions
---

## Overview

Simply put, expressions return a value. In fact, when using the QodlyScript language, you use expressions all the time and tend to think of them only in terms of the value they represent. Expressions are also sometimes referred to as formulas.

Expressions are made up of almost all the other parts of the language: commands, operators, variables, entity attributes, object properties, collection elements. You use expressions to build statements (lines of code), which in turn are used to build methods. The language uses expressions wherever it needs a piece of data.

Expressions rarely "stand alone". There are several places in QodlyScript where an expression can be used by itself. It includes:

- Formula API (`apply()`, `query()` with formula, `orderByFormula()`...)
- Pages, where an expression can be used as a Qodly Source for most of components
- Debugger where the value of expressions can be checked


## Expression types

You refer to an expression by the data type it returns. There are several expression types. The following table gives examples of each type of expression.

|Expression|Type|Description|
|---|---|---|
|"Hello"|string	|The word Hello is a string constant, indicated by the double quotation marks.|
|"Hello " + "there"|	string|	Two strings, "Hello " and "there", are added together (concatenated) with the string concatenation operator (+). The string "Hello there" is returned.|
|"Mr. " + person.name|	string|	Two strings are concatenated: the string "Mr. " and the current value of the name attribute in the person object. If the attribute contains "Smith", the expression returns "Mr. Smith".|
|uppercase("smith")	|string	|This expression uses `uppercase`, a command from the language, to convert the string "smith" to uppercase. It returns "SMITH".|
|4	|number |	This is a number constant, 4.|
|4 * 2|	number|	Two numbers, 4 and 2, are multiplied using the multiplication operator (*). The result is the number 8.|
|!2023-01-25!|	date|	This is a date constant for the date 1/25/2023 (January 25, 2023).|
|currentDate+ 30|	date	|This is a date expression that uses the `currentDate` command to get today’s date. It adds 30 days to today’s date and returns the new date.|
|?8:05:30?	|time|	This is a time constant that represents 8 hours, 5 minutes, and 30 seconds.|
|?2:03:04? + ?1:02:03?	|time	|This expression adds two times together and returns the time 3:05:07.|
|true|	boolean|	This command returns the boolean value true.|
|10  !=  20|boolean	|This is a logical comparison between two numbers. The  !=  sign means "is not equal to". Since 10 "is not equal to" 20, the expression returns true.|
|"ABC"  ==  "XYZ"	|boolean|This is a logical comparison between two strings. They are not equal, so the expression returns false.|
|myPicture + 50	|picture|This expression takes the picture in myPicture, moves it 50 pixels to the right, and returns the resulting picture.|
|jsonParse(MyString)|	object|	This is a command that returns MyString as an object (if proper format)|
|jsonParse(MyJSONArray)	|collection	|This is a command that returns MyJSONArray as a collection (if proper format)|
|myForm.pageNumber|object property|An object property is an expression that can be of any supported type
|Col[5]|collection element|A collection element is an expression that can be of any supported type|  
|entitySel[0]|entity|A element of an ORDA entity selection is an expression of the entity type. This kind of expression is **non-assignable**|  

## Assignable vs non-assignable expressions

An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like `myButton`. It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are **non-assignable**, which means that you cannot assign a value to them.
In QodlyScript, expressions can be **assignable**. An expression is assignable when it can be used on the left side of an assignation. For example:

```qs  
//myVar variable is assignable, you can write:  
myVar = "Hello" //assign "Hello" to myVar
//form.pageNumber is assignable, you can write:  
form.pageNumber = 10 //assign 10 to form.pageNumber
//form.pageTotal-form.pageNumber is not assignable:
form.pageTotal-form.pageNumber = 10 //error, non-assignable
entitySel[1] = myEntity //error, non-assignable
```

In general, expressions that use an operator are non-assignable. For example, `entity.firstName+" "+entity.lastName` is not assignable. 

 
