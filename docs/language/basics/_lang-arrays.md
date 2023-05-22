---
id: lang-arrays
title: Arrays
---

An **array** is an ordered series of **variables** of the same type. Each variable is called an **element** of the array. An array is given its size when it is created; you can then resize it as many times as needed by adding, inserting, or deleting elements, or by resizing the array using the same command used to create it. Array elements are numbered from 1 to N, where N is the size of the array. An array always has a special [element zero](#using-the-element-zero-of-an-array). 

Arrays are variables. Like any variable, an array has a local scope and follows the rules of the Qodly language, though with some unique differences. 

:::tip

In most cases, it is recommended to use **collections** instead of **arrays**. Collections are more flexible and provide a wide range of dedicated methods. For more information, please refer to the [Collection](Concepts/dt_collection.md) section.

:::

## Creating Arrays 

You create an array with one of the array declaration commands. Each array declaration command can create or resize one-dimensional or two-dimensional arrays. For more information about two-dimensional arrays, see the [two dimensional arrays](#two-dimensional-arrays) section.

The following line of code creates (declares) an Integer array of 10 elements:

```qs
 ARRAY INTEGER(aiAnArray,10)
```

Then, the following code resizes that same array to 20 elements:
```qs
ARRAY INTEGER(aiAnArray,20)
```

Then, the following code resizes that same array to no elements:
```qs
ARRAY INTEGER(aiAnArray,0)
```

## Assigning values in arrays

You reference the elements in an array by using curly braces ({…}). A number is used within the braces to address a particular element; this number is called the element number. The following lines put five names into the array called *atNames* and then write them in a text variable, separated by /:

```qs
 var vText : Text
 ARRAY TEXT(atNames;5)
 atNames{1}="Richard"
 atNames{2}="Sarah"
 atNames{3}="Sam"
 atNames{4}="Jane"
 atNames{5}="John"
 For(vlElem,1,5)
    vText=String(vlElem)+" "+atNames{vlElem}+"/")
 End for
```
Note the syntax atNames{vlElem}. Rather than specifying a numeric literal such as atNames{3}, you can use a numeric variable to indicate which element of an array you are addressing. Using the iteration provided by a loop structure (`For...End for`, `Repeat...Until` or `While...End while`), compact pieces of code can address all or part of the elements in an array.


### Assigning an array to another array 

Unlike text or string variables, you cannot assign one array to another. To copy (assign) an array to another one, use `COPY ARRAY`.


## Using the element zero of an array 

An array always has an element zero. There is no restriction in using it with the language, except that it is not included in the array size. You can set or get the value of the element zero of an array:

```qs
ARRAY TEXT(atName,2)
atName{0}="Array of names"
atName{1}="Smith" 
atName{2}="Wesson" 
...
``` 


## Two-dimensional Arrays 

Each of the array declaration commands can create or resize one-dimensional or two-dimensional arrays. Example:

```qs
 ARRAY TEXT(atTopics,100,50) // Creates a text array composed of 100 rows of 50 columns
```

Two-dimensional arrays are essentially language objects; you can neither display nor print them.

In the previous example:

- `atTopics` is a two-dimensional array
- `atTopics{8}{5}` is the 5th element (5th column...) of the 8th row
- `atTopics{20}` is the 20th row and is itself a one-dimensional array
- `Size of array(atTopics)` returns 100, which is the number of rows
- `Size of array(atTopics{17})` returns 50, which the number of columns for the 17th row

Rows of a two-dimensional arrays can be the same size or different sizes.

## Arrays and Memory

Unlike the data you store in the database, an array is always held in memory in its entirety.

For example, if all US zip codes were entered in a `ZipCodes` dataclass, it would contain about 100,000 entities. In addition, that dataclass would include several attributes: the zip code itself and the corresponding city, county, and state. If you select only the zip codes from California, the database engine creates the corresponding entity selection within the ZipCodes dataclass, and then loads the entities only when they are needed (i.e., when they are used, displayed or printed). In order words, you work with an ordered series of values (of the same type for each attribute) that is partially loaded from the datastore into the memory by the database engine of Qodly.

Doing the same thing with arrays would be prohibitive for the following reasons:

- In order to maintain the four information types (zip code, city, county, state), you would have to maintain four large arrays in memory.
- Because an array is always held in memory in its entirety, you would have to keep all the zip codes information in memory throughout the whole working session, even though the data is not always in use.
- Again, because an array is always held in memory in its entirety, each time the application is started and then quit, the four arrays would have to be loaded and then saved on the disk, even though the data is not used or modified during the working session.

**Conclusion:** Arrays are intended to hold reasonable amounts of data for a short period of time. On the other hand, because arrays are held in memory, they are easy to handle and quick to manipulate.

However, in some circumstances, you may need to work with arrays holding hundreds or thousands of elements. The following table lists the formulas used to calculate the amount of memory used for each array type:

|Array Type	|Formula for determining Memory Usage in Bytes|  
|---|---|
|Blob|(1+number of elements) * 12 + Sum of the size of each blob
|Boolean|(31+number of elements)\8
|Date	|(1+number of elements) * 6
|Integer	|(1+number of elements) * 2
|Long Integer	|(1+number of elements) * 4  
|Object|(1+number of elements) * 8 + Sum of the size of each object
|Picture	|(1+number of elements) * 8 + Sum of the size of each picture
|Real	|(1+number of elements) * 8
|Text	|(1+number of elements) * 20 + (Sum of the length of each text) * 2
|Time|(1+number of elements) * 4
|Two-dimensional	|(1+number of elements) * 16 + Sum of the size of each array

**Notes:**

- The size of a text in memory is calculated using this formula: ((Length + 1) * 2)
- A few additional bytes are required to keep track of the selected element, the number of elements, and the array itself.