---
id: lang-identifiers
title: Identifiers
---

This section describes the conventions and rules for naming various elements in the QodlyScript language (variables, object properties, classes, etc.).

:::caution

If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.

:::

## Arrays

Array names follow the same rules as [variables](#variables).

## Classes

The name of a class can contain up to 31 characters.

A class name must be compliant with standard [property naming rules](#object-properties) for dot notation.

> Giving the same name to a user class and a [dataclass](#dataclass) is not recommended, in order to prevent any conflict.

## Functions

Function names must be compliant with standard [property naming rules](#object-properties) for dot notation.

:::tip

Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the code editor.

:::

## Object properties  

The name of an object property (also called object *attribute*) can contain up to 255 characters.

Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Whatever their nature, object property names must follow the following rules **if you want to use the dot notation**:

- A property name must begin with a letter, an underscore, or a dollar "$".
- Thereafter, the name can include any letter, digit, the underscore character ("_"), or the dollar character ("$").
- Property names are case sensitive.

Examples:

```4d
myObject.myAttribute="10"
value=$clientObj.data.address.city
```

:::tip

Starting the property name with an underscore character ("_") will exclude the property from the autocompletion features in the code editor. For example, if you declare `o._myPrivateProperty`, it will not be proposed in the code editor when you type in `"o. "`.

:::

:::note

If you use **string notation** within square brackets, property names can contain any characters (ex: `myObject["1. First property"]`).

:::

See also [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6).

## Parameters

Parameter names follow the same rules as [variable names](#variables).

Examples:

```4d
Function getArea(width : Integer, height : Integer)-> area : Integer

#Declare (i : Integer , param : Date) -> myResult : Object
```

## Methods

The name of a method contains up to 31 characters.

- A method name must begin with a letter, a digit, or an underscore
- Thereafter, the name can include any letter or digit, the underscore character ("_"), or the space character.
- Do not use reserved names, i.e. QodlyScript command names (`Date`, `Time`, etc), keywords (`if`, `for`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Method names are case insensitive.

It is a good programming technique to adopt the same naming convention as the one used by Qodly for built-in methods. Use uppercase characters for naming your methods; however if a method returns a value, capitalize the first character of its name. By doing so, when you reopen a project for maintenance after a few months, you will already know if a method returns a result by simply looking at its name in the Explorer.

Examples:

```4d
if(new client)
DELETE DUPLICATED VALUES
Formula(increase_salaries)
```

:::note

When you call a method, you just type its name. However, some QodlyScript built-in commands, such as `ON EVENT CALL`, expect the name of a method as a string when a method parameter is passed. For example:

```4d
 //This collection function accepts a method name
strings2=strings1.orderByMethod("sortCollection",sk strict)
```

:::


## Variables

The name of a variable can be up to 31 characters.

- A variable name must begin with a [Unicode](https://developer.mozilla.org/en-US/docs/Glossary/Unicode) letter or an underscore.
- Thereafter, the name can include any letter or digit or the underscore character ("_").
- Do not use reserved names, i.e. 4D command names (`Date`, `Time`, etc), keywords (`If`, `For`, etc.), or constant names (`Euro`, `Black`, `Friday`, etc.).
- Variable names are case insensitive.

Examples:

```4d
for(vlRecord,1,100) 
vs_My_String="Hello there" 
var _vAge : Integer 
if(bValidate==1) 
vlProcessID:=Current process()
```
