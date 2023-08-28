---
id: lang-null-undefined
title: Null and Undefined
---

Null and Undefined are data types that handle cases where the value of an expression is not known.  

## Null

Null is a special data type with only one possible value: **null**. This value is returned by an expression that does not contain any value.

In the QodlyScript language and for object attribute properties, null values are managed through the `null` function. This function can be used with the following expressions for setting or comparing the **null** value:

- object attributes
- collection elements
- variables of the object, collection, picture, or variant type.

### `null`

<!-- REF #_command_.null.Syntax -->**null** : null<!-- END REF -->


<!-- REF #_command_.null.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|null|<-|Null value|<!-- END REF -->

#### Description

`null`<!-- REF #_command_.null.Summary -->returns the null type value **null**<!-- END REF -->.

This function allows you to assign or compare the **null** value to the following language elements:

|Language elements|Comments|
|:----|:----|
|object property values|Comparing Null to an object property returns true if the property value is null, and false otherwise. To simplify code, comparing Null also returns true if the property does not exist in the object (i.e. is [`undefined`](#undefined)), see example 4.
|collection elements|When a collection is expanded by adding non-adjacent elements, any intermediary elements get automatically the `null` value.|
|object variables|Assigning the null value to such a variable type clears its contents. In this case, it has the same effect as calling the [`clearVariable`](#clearvariable) command.|
|collection variables|Assigning the null value to such a variable type clears its contents. In this case, it has the same effect as calling the [`clearVariable`](#clearvariable) command.|
|picture variables|Assigning the null value to such a variable type clears its contents. In this case, it has the same effect as calling the [`clearVariable`](#clearvariable) command.|
|variant variables| |


#### Example 1  

You assign and test the **null** value to an object property:

```qs
var vEmp : object
vEmp=newObject
vEmp.name="Smith"
vEmp.children=null
 
if(vEmp.children==null) //true
end
if(vEmp.name==null) //false
end
if(vEmp.parent==null) //true
end
```

#### Example 2 

You assign and compare the **null** value to a collection element:

```qs
var myCol : collection
myCol=newCollection(10,20,null)

if(myCol[2]==null)
  // if the 3rd element is null
...
end
```

#### Example 3  

These examples show the various ways to assign or compare the **null** value to variables: 

```qs

//Object variable
var o : object
o=newObject
o=null //equivalent to clearVariable(o)
if(o!=null) //equivalent to if(objectIsDefined(o))
end

//Collection variable
var c : collection
c=newCollection
c=null //equivalent to clearVariable(c)
if(c!=null)
end

//Picture variable
var i : picture
i=vpicture
i=null //equivalent to clearVariable(i)
if(i!=null) //equivalent to if(pictureSize(i)!=0)
end
```


#### Example 4  

Here are the different results of the `undefined` command as well as the `null` command with object properties, depending on the context:

```qs
var vEmp : object
var vUndefined, vNull : boolean
vEmp=newObject
vEmp.name="Smith"
vEmp.children=null
 
vUndefined=undefined(vEmp.name) // false
vNull=(vEmp.name=null) //false
 
vUndefined=undefined(vEmp.children) // false
vNull=(vEmp.children=null) //true
 
vUndefined=undefined(vEmp.parent) // true
vNull=(vEmp.parent=null) //true
```

### Null operators


|Operation |Syntax |Returns |Expression |Value|
|---|---|---|---|---|
|Equality |null `==` null |Boolean |a.nullProp `==` b.nullProp |true|
|  |null `==` undefined |Boolean|a.nullProp `==` b.undefinedProp |true|
|  |null `==` *scalar value* |Boolean|a.nullProp `==` 42 |false|
|Inequality |null `!=` null |Boolean |a.nullProp `!=` b.nullProp |false|
|  |null `!=` undefined |Boolean|a.nullProp `!=` b.undefinedProp |false|
|  |null `!=` *scalar value*|Boolean|a.nullProp `!=` 42 |true|

*scalar values* are values of type string, date, time, boolean, number, or blob. When declared, their [default value](lang-data-types.md) is neither undefined nor null. Other types (picture, object, collection) have undefined or null default value. Ex:

```qs
var object : Object
var text : Text

//object == null
//text == "" 
```

:::info

Comparisons with Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported with null values and return an error.

:::



## Undefined

Undefined is not actually a data type. It denotes a variable that has not yet been defined. A user function can return an undefined value if, within the method, the function result is assigned an undefined expression (an expression calculated with at least one undefined variable). An attribute cannot be **undefined** (the `undefined` command always returns false for an attribute). A variant variable has **undefined** as default value.


### `undefined`

<!-- REF #_command_.undefined.Syntax -->**undefined** ( expression : *any* )<!-- END REF -->


<!-- REF #_command_.undefined.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|any|->|Expression whose resulting value to be evaluated|
|Result|boolean|<-|true = undefined, false = not undefined|<!-- END REF -->


#### Description

`undefined`<!-- REF #_command_.undefined.Summary -->returns `true` if the result of the evaluation of *expression* is not a defined value, and `false` otherwise<!-- END REF -->.

- A variable is defined if it has been declared or if a value is assigned to it. It is undefined in all other cases.
- An object property is `undefined` if it does not exist in the object.
- A collection item is `undefined` if it does not exist in the collection.

:::note

Keep in mind that `undefined` evaluates *expression*. The following statements are equivalent:

```qs
var result : boolean
result=undefined(exp)
  // same result:
result=(valueType(exp)=kUndefined)
```

:::

#### Example

Here are the different results of the `undefined` command as well as the `null` command with object properties, depending on the context:

```qs
var vEmp : object
var vUndefined, vNull : boolean

vEmp=newObject
vEmp.name="Smith"
vEmp.children=null
 
vUndefined=undefined(vEmp.name) // false
vNull=(vEmp.name=null) //false
 
vUndefined=undefined(vEmp.children) // false
vNull=(vEmp.children=null) //true
 
vUndefined=undefined(vEmp.parent) // true
vNull=(vEmp.parent=null) //true
```




### Undefined operators


|Operation |Syntax |Returns |Expression |Value|
|---|---|---|---|---|
|Equality |undefined `==` undefined |Boolean|a.undefinedProp `==` b.undefinedProp |true|
| |undefined `==` null |Boolean |a.undefinedProp `==` c.nullProp |true|
| |undefined `==` *other values*  |Boolean|a.undefinedProp `==` 42 |false|
|Inequality |undefined `!=` undefined |Boolean|a.undefinedProp `!=` b.undefinedProp |false|
|  |undefined `!=` null |Boolean|a.undefinedProp `!=` b.nullProp |false|
|  |undefined `!=` *other values* |Boolean|a.undefinedProp `!=` 42 |true|
|Greater than |undefined `>` string, date, time, boolean, number |Boolean  |a.undefinedProp `>` "abc" |false|
|Less than |undefined `<` string, date, time, boolean, number |Boolean  |a.undefinedProp `<` "abc" |false|
|Greater than or equal to |undefined `>=` string, date, time, boolean, number |Boolean  |a.undefinedProp `>=` "abc" |false|
|Less than or equal to |undefined `<=` string, date, time, boolean, number |Boolean  |a.undefinedProp `<=` "abc" |false|

*other values* are expressions of any type with a value neither **undefined** nor **null**. 

:::info

Comparisons of `undefined` values with picture, blob, object, collection, undefined or null values using Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), and Less than or equal to (`<=`) operators are not supported and return an error.

:::
