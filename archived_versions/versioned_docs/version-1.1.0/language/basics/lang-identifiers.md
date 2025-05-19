---
id: lang-identifiers
title: Identifiers
---

This section describes the conventions and rules for naming various elements in the QodlyScript language (variables, object properties, classes, etc.).

:::caution

If non-Roman characters are used in the names of the identifiers, their maximum length may be smaller.

:::


## Classes

The name of a class can contain up to 31 characters.

A class name must be compliant with standard [property naming rules](#object-properties) for dot notation.


:::warning

Giving the same name to a [user class](../../studio/coding.md#user-classes) and a [dataclass](../../studio/coding.md#orda-classes) is not recommended, in order to prevent any conflict.

:::


## Functions

Function names must be compliant with standard [property naming rules](#object-properties) for dot notation.

:::tip

Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the code editor.

:::

## Object properties  

The name of an object property (also called object *attribute*) can contain up to 255 characters.

Object properties can reference scalar values, ORDA elements, class functions, other objects, etc. Whatever their nature, object property names must follow the following rules **if you want to use the dot notation**:

- A property name must begin with a letter, an underscore "_", or a dollar "$".
- Thereafter, the name can include any letter, digit, underscore, or dollar character.
- Property names are case sensitive.

Examples:

```qs
myObject.myAttribute = "10"
value = $clientObj.data.address.city
```

:::tip

Starting the property name with an underscore character ("_") will exclude the property from the autocompletion features in the code editor. For example, if you declare `o._myPrivateProperty`, it will not be proposed in the code editor when you type in `"o. "`.

:::

:::note

If you use **string notation** within square brackets, property names can contain any characters (ex: `myObject["1. First property"]`).

:::

See also [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1#sec-7.6).

## Parameters

Parameter names follow the same rules as [variable names](#variables).

Examples:

```qs
function getArea(width : integer, height : integer)-> area : integer

declare (i : integer , param : date) -> myResult : object
```

## Methods

The name of a method contains up to 31 characters.

- A method name must begin with a letter, a digit, or an underscore
- Thereafter, the name can include any letter or digit, an underscore, or the space character.
- Do not use reserved names, i.e. QodlyScript command names (`date`, `time`, etc.), keywords (`if`, `for`, etc.), or constant names (`euro`, `black`, `friday`, etc.).
- Method names are case insensitive.

Examples:

```qs
if(newClient)
_delete_duplicated_values
formula(increase2)
```

:::note

When you call a method, you just type its name. However, some QodlyScript built-in commands, such as `.collection.orderByMethod`, expect the name of a method as a string when a method parameter is passed. For example:

```qs
 //This collection function accepts a method name
strings2 = strings1.orderByMethod("sortCollection",sk strict)
```

:::


## Variables

The name of a variable can be up to 31 characters.

- A variable name must begin with a [Unicode](https://developer.mozilla.org/en-US/docs/Glossary/Unicode) letter or an underscore.
- Thereafter, the name can include any letter or digit, or underscore.
- Do not use reserved names, i.e. command names (`date`, `time`, etc), keywords (`if`, `for`, etc.), or constant names (`euro`, `black`, `friday`, etc.).
- Variable names are case insensitive.

Examples:

```qs
for(vlRecord,1,100)
vs_My_String = "Hello there"
var _vAge : integer
if(bValidate == 1)
vlProcessID = currentProcess()
```
