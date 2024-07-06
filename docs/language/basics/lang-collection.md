---
id: lang-collection
title: Collection
---

Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).

Collection type variables are managed using [object notation](lang-object.md#syntax-basics).

To access a collection element, you need to pass the element number inside square brackets:

```qs
collectionRef[expression]
```

You can pass any valid expression which returns a positive integer in *expression*. Examples:

```qs
 myCollection[5]  //access to 6th element of the collection
 myCollection[myVar]
```

:::info

Collection elements are numbered from 0.

:::

You can assign a value to a collection element or get a collection element value:

```qs
 myCol[10] = "My new element"
 myVar = myCol[0]
```

If you assign an element's index that surpasses the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a null value:

```qs
 var myCol : collection
 myCol = newCollection("A","B")
 myCol[5] = "Z"
  //myCol[2]: null
  //myCol[3]: null
  //myCol[4]: null
```

## Instantiation 

Collections must be instantiated, otherwise trying to read or modify their elements will generate a syntax error.

Collection instantiation can be done in one of the following ways:

- using the `newCollection` command,
- using the `[]` operator.

:::info

Several QodlyScript commands and functions return collections, for example [`lastErrors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) or [`collection.copy()`](../CollectionClass.md#copy). In this case, it is not necessary to instantiate explicitely the collection, the QodlyScript language does it for you.

:::

### `newCollection` command 

The [`newCollection`](../commands/newCollection) command creates a new empty or prefilled collection and returns its reference.

Examples:

```qs
 var colVar : collection //creation of collection type variable
  //instantiation of the collection and assignment to the variable
 colVar = newCollection 
 
 var colFilled : collection
  //instantiation and assignment of a prefilled collection
 colFilled = newCollection("a","b",1,42,{}) 

```

### `[]` operator

The `[]` operator allows you to create a **collection literal**. A collection literal is a list of zero or more expressions, each of which represents a collection element, enclosed in square brackets (`[]`). When you create a collection using a collection literal, it is instantiated with the specified values as its elements, and its length is set to the number of arguments specified.

Since any element is considered an expression, you can create sub-collections using `[]` in elements. You can also create and reference **object literals**.

If an element is undefined, it will appear as Null in the collection.

Examples:

```qs
var col1,col2,users : collection
col1 = [] //empty collection
col2 = [1,2,3,4,5,6] //collection of numbers
//collection of objects
users = [{name: "Alice", \
    height: 183, \
    eyecolor: "hazel", \
    id: col2[5]\
    }, \
    {name: "Bob", \
    height: 172, \
    eyecolor: "blue"\
    }]
```


### Regular or shared collection  

You can create two types of collections:

- regular (non-shared) collections, using the [`newCollection`](../commands/newCollection) command or collection literal syntax (`[]`). These collections can be edited without any specific access control but cannot be shared between processes. 
- shared collections, using the [`newSharedCollection`](../commands/newSharedCollection) command. These collections can be shared between processes, including preemptive threads. Access to these collections is controlled by [`use...end`](lang-shared.md#useend) structures. 

For more information, refer to the [Shared objects and collections](lang-shared.md) section.

## Collection functions  

Qodly collection references benefit from dedicated class functions. Collection functions are listed in the [Collection](../CollectionClass.md) class.

For example:

```qs
newCol = col.copy() //deep copy of col to newCol
col.push(10,100) //add 10 and 100 to the collection
```

Some functions return the original collection after modification, so that you can run the calls in a sequence:

```qs
 col = newCollection(5,20)
 col2 = col.push(10,100).sort() //col2 == [5,10,20,100]
```


### *propertyPath* parameter 


Several functions accept a *propertyPath* as parameter. This parameter stands for:

- either an object property name, for example "lastName"
- or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName".

