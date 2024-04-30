---
id: CollectionClass
title: Collection
---


The Collection class manages [collection](basics/lang-collection.md) type elements.



### Example

```qs
 var c : collection //declaration of collection type variable
 c = newCollection() //initialization of the collection and assignment to the variable
 c.push("Hello",42,{o : "World"}) // c contains [Hello,42,{"o":"World"}]
```


### Functions and properties


||
|---|
|[<!-- INCLUDE #collection.at().Syntax -->](#at)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.at().Summary -->|
|[<!-- INCLUDE #collection.average().Syntax -->](#average)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.average().Summary -->|
|[<!-- INCLUDE #collection.clear().Syntax -->](#clear)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.clear().Summary --> |
|[<!-- INCLUDE #collection.combine().Syntax -->](#combine)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.combine().Summary --> |
|[<!-- INCLUDE #collection.concat().Syntax -->](#concat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.concat().Summary -->|
|[<!-- INCLUDE #collection.copy().Syntax -->](#copy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.copy().Summary -->|
|[<!-- INCLUDE #collection.count().Syntax -->](#count)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.count().Summary -->|
|[<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.countValues().Summary -->|
|[<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.distinct().Summary -->|
|[<!-- INCLUDE #collection.equal().Syntax -->](#equal)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.equal().Summary -->|
|[<!-- INCLUDE #collection.every().Syntax -->](#every)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.every().Summary -->|
|[<!-- INCLUDE #collection.extract().Syntax -->](#extract)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.extract().Summary -->|
|[<!-- INCLUDE #collection.fill().Syntax -->](#fill)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.fill().Summary -->|
|[<!-- INCLUDE #collection.filter().Syntax -->](#filter)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.filter().Summary -->|
|[<!-- INCLUDE #collection.find().Syntax -->](#find)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.find().Summary -->|
|[<!-- INCLUDE #collection.findIndex().Syntax -->](#find)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.findIndex().Summary -->|
|[<!-- INCLUDE #collection.first().Syntax -->](#first)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.first().Summary -->|
|[<!-- INCLUDE #collection.flat().Syntax -->](#flat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.flat().Summary -->|
|[<!-- INCLUDE #collection.flatMap().Syntax -->](#flatMap)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.flatMap().Summary -->|
|[<!-- INCLUDE #collection.includes().Syntax -->](#includes)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.includes().Summary -->|
|[<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indexOf().Summary -->|
|[<!-- INCLUDE #collection.indices().Syntax -->](#indices)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indices().Summary -->|
|[<!-- INCLUDE #collection.insert().Syntax -->](#insert)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.insert().Summary -->|
|[<!-- INCLUDE #collection.join().Syntax -->](#join)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.join().Summary -->|
|[<!-- INCLUDE #collection.last().Syntax -->](#last)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.last().Summary -->|
|[<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.lastIndexOf().Summary -->|
|[<!-- INCLUDE #collection.length.Syntax -->](#length)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.length.Summary -->|
|[<!-- INCLUDE #collection.map().Syntax -->](#map)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.map().Summary -->|
|[<!-- INCLUDE #collection.max().Syntax -->](#max)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.max().Summary -->|
|[<!-- INCLUDE #collection.min().Syntax -->](#min)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.min().Summary -->|
|[<!-- INCLUDE #collection.multiSort().Syntax -->](#multisort)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.multiSort().Summary -->|
|[<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderBy().Summary -->|
|[<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderByMethod().Summary -->|
|[<!-- INCLUDE #collection.pop().Syntax -->](#pop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.pop().Summary -->|
|[<!-- INCLUDE #collection.push().Syntax -->](#push)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.push().Summary -->|
|[<!-- INCLUDE #collection.query().Syntax -->](#query)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.query().Summary -->|
|[<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reduce().Summary -->|
|[<!-- INCLUDE #collection.reduceRight().Syntax -->](#reduceRight)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reduceRight().Summary -->|
|[<!-- INCLUDE #collection.remove().Syntax -->](#remove)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.remove().Summary -->|
|[<!-- INCLUDE #collection.resize().Syntax -->](#resize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.resize().Summary -->|
|[<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reverse().Summary -->|
|[<!-- INCLUDE #collection.shift().Syntax -->](#shift)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.shift().Summary -->|
|[<!-- INCLUDE #collection.slice().Syntax -->](#slice)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.slice().Summary -->|
|[<!-- INCLUDE #collection.some().Syntax -->](#some)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.some().Summary -->|
|[<!-- INCLUDE #collection.sort().Syntax -->](#sort)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sort().Summary -->|
|[<!-- INCLUDE #collection.sum().Syntax -->](#sum)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sum().Summary -->|
|[<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.unshift().Summary -->|



<!-- REF collection.at().Desc -->
## .at()

<!-- REF #collection.at().Syntax -->**.at**( *index* : integer ) : any <!-- END REF -->


<!-- REF #collection.at().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|index|integer|->|Index of element to return|
|Result|any |<-|The element at that index|<!-- END REF -->


#### Description

The `.at()` function <!-- REF #collection.at().Summary -->returns the item at position *index*, allowing for positive and negative integers<!-- END REF -->.



>This function does not modify the original collection.

Negative integers count back from the last item in the collection.

The function returns Undefined if *index* is beyond collection limits.

#### Example



```qs
var col : collection
col = newCollection(10, 20, 30, 40, 50)
element = col.at(0) // 10
element = col.at(1) // 20
element = col.at(-1) // 50
element = col.at(-2) // 40
element = col.at(10) // undefined
```

<!-- END REF -->


<!-- REF collection.average().Desc -->
## .average()

<!-- REF #collection.average().Syntax -->**.average**( {*propertyPath* : string } ) : number<!-- END REF -->


<!-- REF #collection.average().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|propertyPath|string|->|object property path to be used for calculation|
|Result|number, undefined|<-|Arithmetic mean (average) of collection values|<!-- END REF -->



#### Description

The `.average()` function <!-- REF #collection.average().Summary -->returns the arithmetic mean (average) of defined values in the collection instance<!-- END REF -->.



Only numerical elements are taken into account for the calculation (other element types are ignored).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property to take into account.

`.average()` returns `undefined` if:

*	the collection is empty,
*	the collection does not contain numerical elements,
*	*propertyPath* is not found in the collection.


#### Example 1

```qs
 var col : collection
 var vAvg : integer
 col = newCollection(10,20,"Monday",true,6)
 vAvg = col.average() //12
```

#### Example 2

```qs
 var col : collection
 var vAvg : integer
 col = newCollection()
 col.push(newObject("name","Smith","salary",10000))
 col.push(newObject("name","Wesson","salary",50000))
 col.push(newObject("name","Gross","salary",10500))
 vAvg = col.average("salary") //23500
```

<!-- END REF -->



<!-- REF collection.clear().Desc -->
## .clear()

<!-- REF #collection.clear().Syntax -->**.clear**() : collection<!-- END REF -->


<!-- REF #collection.clear().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|collection|<-|Original collection with all elements removed|<!-- END REF -->


#### Description

The `.clear()` function <!-- REF #collection.clear().Summary -->removes all elements from the collection instance and returns an empty collection<!-- END REF -->.

>This function modifies the original collection.

#### Example

```qs
var col : collection
col = newCollection(1,2,5)
col.clear()
//col.length: 0
```

<!-- END REF -->





<!-- REF collection.combine().Desc -->
## .combine()

<!-- REF #collection.combine().Syntax -->**.combine**( *col2* : collection {, *index* : integer } ) : collection<!-- END REF -->


<!-- REF #collection.combine().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|col2|collection|->|collection to combine|
|index|integer|->|Position to which insert elements to combine in collection (default = length+1)|
|Result|collection|<-|Original collection containing combined element(s)|<!-- END REF -->


#### Description

The `.combine()` function <!-- REF #collection.combine().Summary -->inserts *col2* elements at the end or at the specified *index* position in the collection instance and returns the edited collection<!-- END REF -->. Unlike the `.insert()` function, `.combine()` adds each value of *col2* in the original collection, and not as a single collection element.

>This function modifies the original collection.

By default, *col2* elements are added at the end of the orginal collection. You can pass in *index* the position where you want the *col2* elements to be inserted in the collection.

>**Warning**: Keep in mind that collection elements are numbered from 0.

*	If *index* > the length of the collection, the actual starting *index* will be set to the length of the collection.
*	If *index* < 0, it is recalculated as *index = index+length* (it is considered as the offset from the end of the collection).
*	If the calculated value is negative, *index* is set to 0.


#### Example

```qs
var c, fruits : collection
c = newCollection(1,2,3,4,5,6)
fruits = newCollection("Orange","Banana","Apple","Grape")
c.combine(fruits,3) //[1,2,3,"Orange","Banana","Apple","Grape",4,5,6]
```

<!-- END REF -->





<!-- REF collection.concat().Desc -->
## .concat()

<!-- REF #collection.concat().Syntax -->**.concat**( *value* : any { *,...valueN* } ) : collection<!-- END REF -->


<!-- REF #collection.concat().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|value|integer, number, string, object, collection, date, time, boolean, picture|->|Value(s) to concatenate. If *value* is a collection, all collection elements are added to the original collection|
|Result|collection|<-|New collection with value(s) added to the original collection|<!-- END REF -->


#### Description

The `.concat()` function <!-- REF #collection.concat().Summary -->returns a new collection containing the elements of the original collection with all elements of the *value* parameter added to the end<!-- END REF -->.

>This function does not modify the original collection.

If *value* is a collection, all its elements are added as new elements at the end of the original collection. If *value* is not a collection, it is added itself as a new element.


#### Example

```qs
var c,c2, fruits : collection
c = newCollection(1,2,3,4,5)
fruits = newCollection("Orange","Banana","Apple","Grape")
fruits.push(newObject("Intruder","Tomato"))
c2 = c.concat(fruits) //[1,2,3,4,5,"Orange","Banana","Apple","Grape",{"Intruder":"Tomato"}]
c2 = c.concat(6,7,8) //[1,2,3,4,5,6,7,8]
```

<!-- END REF -->




<!-- REF collection.copy().Desc -->
## .copy()

<!-- REF #collection.copy().Syntax -->**.copy**() : collection<br/>**.copy**( *option* : integer ) : collection<br/>**.copy**( *option* : integer , *groupWithCol* : collection ) : collection<br/>**.copy**( *option* : integer , *groupWithObj* : object ) : collection<!-- END REF -->


<!-- REF #collection.copy().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|option|integer|->|`kShared`: return a shared collection|
|groupWithCol |collection|->|Shared collection to be grouped with the resulting collection|
|groupWithObj |object|->|Shared object to be grouped with the resulting collection|
|Result|collection|<-|Deep copy of the original collection|<!-- END REF -->


#### Description

The `.copy()` function <!-- REF #collection.copy().Summary --> returns a deep copy of the collection instance<!-- END REF -->.***Deep copy*** means that objects or collections within the original collection are duplicated and do not share any reference with the returned collection.


>This function does not modify the original collection.

If passed, the *option* parameter can contain the following constant:

|option	|Description|
|---|---|
|`kShared`|By default, `copy()` returns a regular (not shared) collection, even if the command is applied to a shared collection. Pass the `kShared` constant to create a shared collection. In this case, you can use the *groupWith* parameter to associate the shared collection with another collection or object (see below).|

The *groupWithCol* or *groupWithObj* parameters allow you to designate a collection or an object with which the resulting collection should be associated.

:::note

Datastore, dataclass, and entity objects are not copiable. If `.copy()` is called with them, `null` values are returned.

:::

#### Example 1

We want to copy the *lastnames* regular (non shared) collection into the *sharedobject* shared object. To do this, we must create a shared copy of the collection (*sharedLastnames*).

```qs
var sharedobject : object
var lastnames,sharedLastnames : collection
var text : string

sharedobject = newSharedObject

text = file("/SOURCES/lastnames.txt").getText()
lastnames = jsonParse(text) //lastnames is a regular collection

sharedLastnames = lastnames.copy(kShared) //sharedLastnames is a shared collection

//Now we can put sharedLastnames into sharedobject
use(sharedobject)
    sharedobject.lastnames = sharedLastnames
end
```


#### Example 2

We want to combine *sharedColl1* and *sharedColl2*. Since they belong to different shared groups, a direct combination would result in an error. Therefore, we must make a shared copy of *sharedColl1* and designate *sharedColl2* as a shared group for the copy.

```qs
var sharedColl1,sharedColl2,copyColl : collection

sharedColl1 = newSharedcollection(newSharedObject("lastname","Smith"))
sharedColl2 = newSharedcollection(newSharedObject("lastname","Brown"))

//copyColl belongs to the same shared group as sharedColl2
 copyColl = sharedColl1.copy(kShared,sharedColl2)
 use(sharedColl2)
    sharedColl2.combine(copyColl)
 end
```

#### Example 3

We have a regular collection (*lastnames*) and we want to put it in the **Storage** of the application. To do this, we must create a shared copy beforehand (*sharedLastnames*).

```qs
var lastnames,sharedLastnames : collection
var text : string

text = file("/SOURCES/lastnames.txt").getText()
lastnames = jsonParse(text) //lastnames is a regular collection

sharedLastnames = lastnames.copy(kShared) // shared copy

use(storage)
    storage.lastnames = sharedLastnames
end
```


<!-- END REF -->





<!-- REF collection.count().Desc -->
## .count()

<!-- REF #collection.count().Syntax -->**.count**( { *propertyPath* : string } ) : number<!-- END REF -->


<!-- REF #collection.count().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|propertyPath|string|->|object property path to be used for calculation|
|Result|number|<-|Number of elements in the collection|<!-- END REF -->


#### Description

The `.count()` function <!-- REF #collection.count().Summary -->returns the number of non-null elements in the collection<!-- END REF -->.

If the collection contains objects, you can pass the *propertyPath* parameter. In this case, only elements that contain the *propertyPath* are taken into account.

#### Example

```qs
 var col : collection
 var count1,count2 : number
 col = newCollection(20,30,null,40)
 col.push(newObject("name","Smith","salary",10000))
 col.push(newObject("name","Wesson","salary",50000))
 col.push(newObject("name","Gross","salary",10500))
 col.push(newObject("lastName","Henry","salary",12000))
 count1 = col.count() //count1: 7
 count2 = col.count("name") //count2: 3

```

<!-- END REF -->





<!-- REF collection.countValues().Desc -->
## .countValues()


<!-- REF #collection.countValues().Syntax -->**.countValues**( *value* : any {, *propertyPath* : string } ) : number<!-- END REF -->


<!-- REF #collection.countValues().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|value|string, Number, boolean, date, object, collection|->|Value to count|
|propertyPath|string|->|Object property path to be used for calculation|
|Result|number|<-|Number of occurrences of the value	|<!-- END REF -->


#### Description

The `.countValues()` function <!-- REF #collection.countValues().Summary -->returns the number of times *value* is found in the collection<!-- END REF -->.

You can pass in *value*:

*	a scalar value (text, number, boolean, date),
*	an object or a collection reference.


For an element to be found, the type of *value* must be equivalent to the type of the element, the method uses the equality operator.

The optional *propertyPath* parameter allows you to count values inside a collection of objects: pass in *propertyPath* the path of the property whose values you want to count.

>This function does not modify the original collection.

#### Example 1

```qs
 var col : collection
 var vCount : integer
 col = newCollection(1,2,5,5,5,3,6,4)
 vCount = col.countValues(5) // vCount: 3
```


#### Example 2

```qs
 var col : collection
 var vCount : integer
 col = newCollection()
 col.push(newObject("name","Smith","age",5))
 col.push(newObject("name","Wesson","age",2))
 col.push(newObject("name","Jones","age",3))
 col.push(newObject("name","Henry","age",4))
 col.push(newObject("name","Gross","age",5))
 vCount = col.countValues(5,"age") //vCount = 2
```


#### Example 3

```qs
 var numbers, letters : collection
 var vCount : integer

 letters = newCollection("a","b","c")
 numbers = newCollection(1,2,letters,3,4,5)

 vCount = numbers.countValues(letters) //vCount: 1
```


<!-- END REF -->





<!-- REF collection.distinct().Desc -->
## .distinct()

<!-- REF #collection.distinct().Syntax -->**.distinct**( {*options* : integer} ) : collection<br/>**.distinct**( *propertyPath* : string {, *options* : integer } ) : collection<!-- END REF -->


<!-- REF #collection.distinct().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|propertyPath|string|->|Path of attribute whose distinct values you want to get|
|options|integer|->|`kDiacritical`, `kCountValues`|
|Result|collection|<-|New collection with only distinct values|<!-- END REF -->


#### Description

The `.distinct()` function <!-- REF #collection.distinct().Summary -->returns a collection containing only distinct (different) values from the original collection<!-- END REF -->.

>This function does not modify the original collection.

The returned collection is automatically sorted. **null** values are not returned.

If the collection contains objects, you can pass the *propertyPath* parameter to indicate the object property whose distinct values you want to get.

In the *options* parameter, you can pass one or a combination of the following constants:

|Constant|Value|Comment|
|---|---|---|
|`kDiacritical`|8|Evaluation is case sensitive and differentiates accented characters. By default if omitted, a non-diacritical evaluation is performed|
|`kCountValues`|32|Return the count of elements for every distinct value. When this option is passed, `.distinct()` returns a collection of objects containing a pair of `{"value":value,"count":count}` attributes.|


#### Examples

```qs
 var c, c2, c3 : collection
 c = newCollection()
 c.push("a","b","c","A","B","c","b","b")
 c.push(newObject("size",1))
 c.push(newObject("size",3))
 c.push(newObject("size",1))
 c2 = c.distinct() //c2 = ["a","b","c",{"size":1},{"size":3},{"size":1}]
 c2 = c.distinct(kDiacritical) //c2: ["a","A","b","B","c",{"size":1},{"size":3},{"size":1}]
 c2 = c.distinct("size") //c2: [1,3]
 c3 = c.distinct("size",kCountValues) //c3: [{value:1,count:2},{value:3,count:1}]

```

<!-- END REF -->





<!-- REF collection.equal().Desc -->
## .equal()

<!-- REF #collection.equal().Syntax -->**.equal**( *collection2* : collection {, *option* : integer } ) : boolean<!-- END REF -->


<!-- REF #collection.equal().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|collection2|collection|->|collection to compare|
|option|integer|->|`kDiacritical`: diacritical evaluation ("A" # "a" for example)
|Result|boolean|<-|true if collections are identical, false otherwise|<!-- END REF -->


#### Description

The `.equal()` function <!-- REF #collection.equal().Summary -->compares the collection with collection2 <!-- END REF -->and returns **true** if they are identical (deep comparison).

By default, a non-diacritical evaluation is performed. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `kDiacritical` constant in the option parameter.

>Elements with **null** values are not equal to Undefined elements.

#### Example

```qs
 var c, c2 : collection
 var b : boolean

 c = newCollection(newObject("a",1,"b","orange"),2,3)
 c2 = newCollection(newObject("a",1,"b","orange"),2,3,4)
 b = c.equal(c2) // false

 c = newCollection(newObject("1","a","b","orange"),2,3)
 c2 = newCollection(newObject("a",1,"b","orange"),2,3)
 b = c.equal(c2) // false

 c = newCollection(newObject("a",1,"b","orange"),2,3)
 c2 = newCollection(newObject("a",1,"b","ORange"),2,3)
 b = c.equal(c2) // true

 c = newCollection(newObject("a",1,"b","orange"),2,3)
 c2 = newCollection(newObject("a",1,"b","ORange"),2,3)
 b = c.equal(c2,kDiacritical) //false
```

<!-- END REF -->




<!-- REF collection.every().Desc -->
## .every()


<!-- REF #collection.every().Syntax -->**.every**( { *startFrom* : integer , } *formula* : 4D.Function { ,*...param* : any } ) : boolean<br/>**.every**( { *startFrom* : integer , } *methodName* : string { ,*...param* : any } ) : boolean<!-- END REF -->


<!-- REF #collection.every().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|startFrom|integer|->|Index to start the test at|
|formula|4D.Function|->|formula object|
|methodName|string|->|Name of a method|
|param|any|->|Parameter(s) to pass to *formula* or *methodName*|
|Result|boolean|<-|true if all elements successfully passed the test|<!-- END REF -->


#### Description

The `.every()` function <!-- REF #collection.every().Summary -->returns **true** if all elements in the collection successfully passed a test implemented in the provided *formula* object or *methodName* name<!-- END REF -->.

You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods,
- or *methodName*, the name of a project method (string).

The callback is called with the parameter(s) passed in *param* (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. It receives an `object` in first parameter named `$1`.

The callback receives the following parameters:

*	in *$1.value*: element value to be evaluated
*	in *$2*: param
*	in *$N...*: paramN...

It can set the following parameter(s):

*	(mandatory if you used a method) *$1.result* (boolean): **true** if the element value evaluation is successful, **false** otherwise.
*	*$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

In all cases, at the point when the `.every()` function encounters the first collection element evaluated to **false**, it stops calling the callback and returns **false**.

By default, `.every()` tests the whole collection. Optionally, you can pass in *startFrom* the index of the element from which to start the test.

*	If *startFrom* >=  the collection's length, **false** is returned, which means the collection is not tested.
*	If *startFrom* < 0, it is considered as the offset from the end of the collection ( *startFrom = startFrom+length*).
*	If *startFrom*  ==  0, the whole collection is searched (default).


#### Example 1

```qs
var c : collection  
var b : boolean
var f : 4D.Function

f = formula($1.value>0)
c = newCollection()
c.push(5,3,1,4,6,2)
b = c.every(f) //returns true
c.push(-1)
b = c.every(f) //returns false
```

#### Example 2

This example tests that all elements of a collection are of the number type:

```qs
var c : collection
var b : boolean
var f : 4D.Function

f = formula(valueType($1.value) == $2
c = newCollection()
c.push(5,3,1,4,6,2)
b = c.every(f,Is number) //b = true
c = c.push(newObject("name","Cleveland","zc",35049))
c = c.push(newObject("name","Blountsville","zc",35031))
b = c.every(f,Is number) //b = false
```


<!-- END REF -->




<!-- REF collection.extract().Desc -->
## .extract()

<!-- REF #collection.extract().Syntax -->**.extract**( *propertyPath* : string { , *option* : integer } ) : collection<br/>**.extract**( *propertyPath* : string ,  *targetPath* : string  { ,...*propertyPathN* : string ,... *targetPathN* : string } ) : collection<!-- END REF -->


<!-- REF #collection.extract().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|propertyPath|string|->|Object property path whose values must be extracted to the new collection|
|targetpath|string|->|Target property path or property name|

|option|integer|->|`kKeepNull`: include null properties in the returned collection (ignored by default). Parameter ignored if *targetPath* passed.|
|Result|collection|<-|new collection containing extracted values|<!-- END REF -->


#### Description

The `.extract()` function <!-- REF #collection.extract().Summary -->creates and returns a new collection containing *propertyPath* values extracted from the original collection of objects<!-- END REF -->.

>This function does not modify the original collection.

The contents of the returned collection depends on the *targetPath* parameter:

*	If the *targetPath* parameter is omitted, `.extract()` populates the new collection with the *propertyPath* values of the original collection.

	By default, elements for which *propertyPath* is null or undefined are ignored in the resulting collection. You can pass the `kKeepNull` constant in the *option* parameter to include these values as null elements in the returned collection.


*	If one or more *targetPath* parameter(s) are passed, `.extract()` populates the new collection with the *propertyPath* properties and each element of the new collection is an object with *targetPath* properties filled with the corresponding *propertyPath* properties. null values are kept (*option* parameter is ignored with this syntax).


#### Example 1

```qs
var c : collection
c = newCollection()
c.push(newObject("name","Cleveland"))
c.push(newObject("zip",5321))
c.push(newObject("name","Blountsville"))
c.push(42)
c2 = c.extract("name") // c2: [Cleveland,Blountsville]
c2 = c.extract("name",kKeepNull) //c2: [Cleveland,null,Blountsville,null]
```


#### Example 2


```qs
var c : collection
c = newCollection()
c.push(newObject("zc",35060))
c.push(newObject("name",null,"zc",35049))
c.push(newObject("name","Cleveland","zc",35049))
c.push(newObject("name","Blountsville","zc",35031))
c.push(newObject("name","Adger","zc",35006))
c.push(newObject("name","Clanton","zc",35046))
c.push(newObject("name","Clanton","zc",35045))
c2 = c.extract("name","City") //c2: [{City:null},{City:Cleveland},{City:Blountsville},{City:Adger},{City:Clanton},{City:Clanton}]
c2 = c.extract("name","City","zc","Zip") //c2: [{Zip:35060},{City:null,Zip:35049},{City:Cleveland,Zip:35049},{City:Blountsville,Zip:35031},{City:Adger,Zip:35006},{City:Clanton,Zip:35046},{City:Clanton,Zip:35045}]
```


<!-- END REF -->




<!-- REF collection.fill().Desc -->
## .fill()

<!-- REF #collection.fill().Syntax -->**.fill**( *value* : any ) : collection<br/>**.fill**( *value* : any ,  *startFrom*  : integer { , *end* : integer } ) : collection<!-- END REF -->



<!-- REF #collection.fill().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|value|number, string, collection, object, date, boolean|->|Filling value|
|startFrom|integer|->|Start index (included)|
|end|integer|->|End index (not included)|
|Result|collection|<-|Original collection with filled values|<!-- END REF -->


#### Description

The `.fill()` function <!-- REF #collection.fill().Summary -->fills the collection with the specified *value*, optionally from *startFrom* index to *end* index, and returns the resulting collection<!-- END REF -->.

>This function modifies the original collection.

*	If the *startFrom* parameter is omitted, *value* is set to all collection elements (*startFrom* = 0).
*	If the *startFrom* parameter is passed and *end* omitted, *value* is set to collection elements starting at *startFrom* to the last element of the collection (*end* == length).
*	If both the *startFrom* parameter and *end* are passed, *value* is set to collection elements starting at *startFrom* to the element *end*.

In case of inconsistency, the following rules apply:

*	If *startFrom* < 0, it is recalculated as *startFrom = startFrom+length* (it is considered as the offset from the end of the collection). If the calculated value is negative, *startFrom* is set to 0.
*	If *end* < 0 , it is recalculated as *end = end+length*.
*	If *end* < *startFrom* (passed or calculated values), the method does nothing.


#### Example

```qs
 var c : collection
 c = newCollection(1,2,3,"Lemon",null,"",4,5)
 c.fill("2") // c:[2,2,2,2,2,2,2,2]
 c.fill("Hello",5) // c:[2,2,2,2,2,Hello,Hello,Hello]
 c.fill(0,1,5) // c:[2,0,0,0,0,Hello,Hello,Hello]
 c.fill("world",1,-5) //-5+8 = 3 -> c:[2,"world","world",0,0,Hello,Hello,Hello]
```


<!-- END REF -->




<!-- REF collection.filter().Desc -->
## .filter()

<!-- REF #collection.filter().Syntax -->**.filter**( *formula* : 4D.Function { , *...param* : any } ) : collection<br/>**.filter**( *methodName* : string { , *...param* : any } ) : collection<!-- END REF -->


<!-- REF #collection.filter().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formula|4D.Function|->|formula object|
|methodName|string|->|Name of a method|
|param|any|->|Parameter(s) to pass to *formula* or *methodName*|
|Result|collection|<-|new collection containing filtered elements (shallow copy)|<!-- END REF -->


#### Description

The `.filter()` function <!-- REF #collection.filter().Summary -->returns a new collection containing all elements of the original collection for which the *formula* or *methodName* result is **true**<!-- END REF -->. This function returns a ***shallow copy***, which means that objects or collections in both collections share the same reference. If the original collection is a shared collection, the returned collection is also a shared collection.

>This function does not modify the original collection.

You designate the callback to be executed to filter collection elements using either:

- *formula* (recommended syntax), a [formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods,
- or *methodName*, the name of a project method (string).

The callback is called with the parameter(s) passed in *param* (optional) and an object in first parameter (*$1*). The callback can perform any test, with or without the parameter(s) and must return **true** for each element fulfilling the condition and thus, to push to the new collection.  

The callback receives the following parameters:

*	in *$1.value*: element value to be evaluated
*	in *$2*: param
*	in *$N...*: paramN...

It can set the following parameter(s):

*	*$1.result* (boolean): **true** if the element value matches the filter condition and must be kept, **false** otherwise.
*	*$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

:::note

When using *methodName* as callback, and if the method does not return any value, `.filter()` will look at the property *$1.result* that you must set to **true** for each element fulfilling the condition.

:::

#### Example 1

You want to get the collection of text elements whose length is smaller than 6:

```qs
var col,colNew : collection
col = newCollection("hello","world","red horse",66,"tim","san jose","miami")
colNew = col.filter(formula((valueType($1.value) == Is text) && (length($1.value)<$2)), 6)
  //colNew:["hello","world","tim","miami"]
```

#### Example 2

You want to filter elements according to their value type:

```qs
 var c,c2,c3 : collection
 var f : 4D.Function

 f = formula(valueType($1.value) == $2)
 c = newCollection(5,3,1,4,6,2)
 c.push(newObject("name","Cleveland","zc",35049))
 c.push(newObject("name","Blountsville","zc",35031))
 c2 = c.filter(f,Is number) // c2 = [5,3,1,4,6,2]
 c3 = c.filter(f,Is object)
  // c3 = [{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]
```

<!-- END REF -->





<!-- REF collection.find().Desc -->
## .find()


<!-- REF #collection.find().Syntax -->**.find**( { *startFrom* : integer , }  *formula* : 4D.Function { , *...param* : any } ) : any<br/>**.find**( { *startFrom* : integer , }  *methodName* : string { , *...param* : any } ) : any<!-- END REF -->


<!-- REF #collection.find().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|startFrom|integer|->|Index to start the search at|
|formula|4D.Function|->|formula object|
|methodName|string|->|Name of a method|
|param|any|->|Parameter(s) to pass to *formula* or *methodName*|
|Result|any |<-|First value found, or Undefined if not found|<!-- END REF -->


#### Description

The `.find()` function <!-- REF #collection.find().Summary -->returns the first value in the collection for which *formula* or *methodName* result, applied on each element, returns **true**<!-- END REF -->.

>This function does not modify the original collection.

You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods,
- or *methodName*, the name of a project method (string).

The callback is called with the parameter(s) passed in *param* (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for the first element fulfilling the condition. It receives an `object` in first parameter ($1).

The callback receives the following parameters:

*	in *$1.value*: element value to be evaluated
*	in *$2*: param
*	in *$N...*: paramN...

It can set the following parameter(s):

*	(mandatory if you used a method) *$1.result* (boolean): **true** if the element value matches the search condition, **false** otherwise.
*	*$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.


By default, `.find()` searches in the whole collection. Optionally, you can pass in *startFrom* the index of element from which to start the search.

*	If *startFrom* >=  the collection's length, -1 is returned, which means the collection is not searched.
*	If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom = startFrom+length*).
	**Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*	If *startFrom*  ==  0, the whole collection is searched (default).


#### Example 1

You want to get the first text element with a length smaller than 5:

```qs
var col : collection
col = newCollection("hello","world",4,"red horse","tim","san jose")
value = col.find(formula((valueType($1.value) == Is text) && (length($1.value)<$2)), 5) //value: "tim"
```

#### Example 2

You want to find a city name within a collection:

```qs
var c : collection
var c2 : object
c = newCollection()
c.push(newObject("name", "Cleveland", "zc", 35049))
c.push(newObject("name", "Blountsville", "zc", 35031))
c.push(newObject("name", "Adger", "zc", 35006))
c.push(newObject("name", "Clanton", "zc", 35046))
c.push(newObject("name", "Clanton", "zc", 35045))

c2 = c.find(formula($1.value.name == $2), "Clanton")  //c2 = {name:Clanton,zc:35046}

```
<!-- END REF -->





<!-- REF collection.findIndex().Desc -->
## .findIndex()


<!-- REF #collection.findIndex().Syntax -->**.findIndex**( { *startFrom* : integer , }  *formula* : 4D.Function { , *...param* : any } ) : integer<br/>**.findIndex**( { *startFrom* : integer , }  *methodName* : string { , *...param* : any } ) : integer<!-- END REF -->


<!-- REF #collection.findIndex().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|startFrom|integer|->|Index to start the search at|
|formula|4D.Function|->|formula object|
|methodName|string|->|Name of a method|
|param|any|->|Parameter(s) to pass to *formula* or *methodName*|
|Result|integer |<-|Index of first value found, or -1 if not found|<!-- END REF -->


#### Description

The `.findIndex()` function <!-- REF #collection.findIndex().Summary -->returns the index, in the collection, of the first value for which *formula* or *methodName*, applied on each element, returns **true**<!-- END REF -->.

>This function does not modify the original collection.

You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods,
- *methodName*, the name of a project method (string).

The callback is called with the parameter(s) passed in *param* (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for the first element fulfilling the condition. It receives an `object` in the first parameter named *$1*.

The callback receives the following parameters:

*	in *$1.value*: element value to be evaluated
*	in *$2*: param
*	in *$N...*: paramN...

It can set the following parameter(s):

*	(mandatory if you used a method) *$1.result* (boolean): **true** if the element value matches the search condition, **false** otherwise.
*	*$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

By default, `.findIndex()` searches in the whole collection. Optionally, you can pass in *startFrom* the index of element from which to start the search.

*	If *startFrom* >=  the collection's length, -1 is returned, which means the collection is not searched.
*	If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom = startFrom+length*).
	**Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*	If *startFrom*  ==  0, the whole collection is searched (default).

#### Example

You want to find the position of the first city name within a collection:

```qs
var c : collection
var val2,val3 : integer
c = newCollection()
c.push(newObject("name","Cleveland","zc",35049))
c.push(newObject("name","Blountsville","zc",35031))
c.push(newObject("name","Adger","zc",35006))
c.push(newObject("name","Clanton","zc",35046))
c.push(newObject("name","Clanton","zc",35045))
val2 = c.findIndex(formula($1.value.name == $2),"Clanton") // val2: 3
val3 = c.findIndex(val2+1,formula($1.value.name == $2),"Clanton") //val3:4
```

<!-- END REF -->



<!-- REF collection.first().Desc -->
## .first()

<!-- REF #collection.first().Syntax -->**.first**() : any <!-- END REF -->


<!-- REF #collection.first().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|any|<-|First element of collection|<!-- END REF -->


#### Description

The `.first()` function <!-- REF #collection.first().Summary -->returns the first element of the collection<!-- END REF -->.


>This function does not modify the original collection.

The function returns Undefined if the collection is empty.

#### Example


```qs
var col, emptyCol : collection
var first : variant
col = newCollection(10, 20, 30, "hello", 50)
first = col.first() // 10

emptyCol = newCollection() //empty
// first = emptyCol[0] //would return error
first = emptyCol.first() // returns undefined
```
<!-- END REF -->




<!-- REF collection.flat().Desc -->
## .flat()


<!-- REF #collection.flat().Syntax -->**.flat**( { *depth* : integer } ) : collection<!-- END REF -->


<!-- REF #collection.flat().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|depth|integer |->|How deep a nested collection structure should be flattened. Default = 1|
|Result|collection |<-|Flattened collection|<!-- END REF -->


#### Description

The `.flat()` function <!-- REF #collection.flat().Summary -->creates a new collection with all sub-collection elements concatenated into it recursively up to the specified *depth*<!-- END REF -->.

By default, if the *depth* parameter is omitted, only the first level of the nested collection structure will be flattened.

>This function does not modify the original collection.


#### Example


```qs
col = newCollection(1, 2, newCollection(3, 4))
col.flat()
// [1, 2, 3, 4]

col = newCollection(1, 2, newCollection(3, 4, newCollection(5, 6)))
col.flat()
// [1, 2, 3, 4, [5, 6]]

col = newCollection(1, 2, newCollection(3, 4, newCollection(5, 6)))
col.flat(2)
// [1, 2, 3, 4, 5, 6]

col = newCollection(1, 2, newCollection(3, 4, 5, 6, newCollection(7, 8, newCollection(9, 10))))
col.flat(MAXLONG)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

<!-- END REF -->



<!-- REF collection.flatMap().Desc -->
## .flatMap()

<!-- REF #collection.flatMap().Syntax -->**.flatMap**( *formula* : 4D.Function { , *...param* : any } ) : collection<br/>**.flatMap**( *methodName* : string { , *...param* : any } ) : collection <!-- END REF -->

<!-- REF #collection.flatMap().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formula|4D.Function|->|formula object|
|methodName|string|->|Name of a method|
|param|any|->|Parameter(s) to pass to *formula* or *methodName*|
|Result|collection |<-|Collection of transformed values and flattened by a depth of 1|<!-- END REF -->

#### Description

The `.flatMap()` function <!-- REF #collection.flatMap().Summary -->creates a new collection based upon the result of the call of the *formula* 4D function or *methodName* method on each element of the original collection and flattened by a depth of 1<!-- END REF -->. Optionally, you can pass parameters to *formula* or *methodName* using the *param* parameter(s).

This function is identical to a [`map()`](#map) call followed by a [`flat()`](#flat) call of depth 1.

>This function does not modify the original collection.


You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods,
- or *methodName*, the name of a project method (string).

The callback is called with the parameter(s) passed in *param* (optional). The callback can perform any operation, with or without the parameter(s) and must return new transformed value to add to the resulting collection. It receives an `object` in first parameter named *$1*.

The callback receives the following parameters:

*	in *$1.value*: element value to be evaluated
*	in *$2*: param
*	in *$N...*: paramN...

It can set the following parameter(s):

*	(mandatory if you used a method) *$1.result* (any type): new transformed value to add to the resulting collection
*	*$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.


#### Example 1

```qs
var col , result : collection
col = newCollection(1, 2, 3, 4)

result = col.map(formula(newCollection($1.value*2))
 // [[2],[4],[6],[8]]

result = col.flatMap(formula(newCollection($1.value*2))
// [2,4,6,8]
```

#### Example 2

```
var col, result : collection
col = newCollection("Hello how", "", "are you ?")

result = col.map(formula(splitString($1.value, " ")))
// [["Hello", "how"], [], ["are", "you", "?"]]

result = col.flatMap(formula(splitString($1.value, " ")))
// ["Hello", "how", "are", "you", "?"]
```

#### Example 3

You want to compute the percentage of each value in the collection to the total:

```qs
var c, c2 : collection
var f : 4D.Function
c = newCollection(1, 4, 9, 10, 20)
f = formula(newCollection($1.value,round(($1.value/$2)*100, 2)))
c2 = c.flatMap(f, c.sum())
  //c2: [1, 2.27, 4, 9.09,9, 20.45,10, 22.73, 20, 45.45]
```

<!-- END REF -->




<!-- REF collection.includes().Desc -->
## .includes()


<!-- REF #collection.includes().Syntax -->**.includes**( *toSearch* : expression { , *startFrom* : integer } ) : boolean<!-- END REF -->


<!-- REF #collection.includes().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|toSearch|expression|->|Expression to search in the collection|
|startFrom|integer|->|Index to start the search at|
|Result|boolean |<-|true if *toSearch* is found in the collection|<!-- END REF -->


#### Description

The `.includes()` function <!-- REF #collection.includes().Summary -->returns true if the *toSearch* expression is found among collection elements, otherwise False<!-- END REF -->.


>This function does not modify the original collection.

In *toSearch*, pass the expression to find in the collection. You can pass:

*	a scalar value (text, number, boolean, date),
*	the null value,
*	an object or a collection reference.

*toSearch* must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in *startFrom*.

*	If *startFrom* >=  collection's length, False is returned, which means the collection is not searched.
*	If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom = startFrom+length*). Note that even if *startFrom* is negative, the collection is still searched from left to right.
*	If *startFrom*  ==  0, the whole collection is searched (default).

#### Example



```qs
 var col : collection
 var in : boolean
 var obj : object
 obj = newObject("value", 10)
 col = newCollection(1,2,"Henry",5,3,"Albert",6,4,"Alan",5,obj)
 in = col.includes(3) //true
 in = col.includes(5,6) //true
 in = col.includes("al@") //true
 in = col.includes("Hello") //false
 in = col.includes(obj)  //true
 in = col.includes(newObject("value", 10)) //false
```

<!-- END REF -->






<!-- REF collection.indexOf().Desc -->
## .indexOf()


<!-- REF #collection.indexOf().Syntax -->**.indexOf**(  *toSearch* : expression { , *startFrom* : integer } ) : integer <!-- END REF -->


<!-- REF #collection.indexOf().Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|toSearch|expression|->|Expression to search in the collection|
|startFrom|integer|->|Index to start the search at|
|Result|integer |<-|Index of the first occurrence of toSearch in the collection, -1 if not found|<!-- END REF -->


#### Description

The `.indexOf()` function <!-- REF #collection.indexOf().Summary -->searches the *toSearch* expression among collection elements and returns the index of the first found occurrence, or -1 if it was not found<!-- END REF -->.


>This function does not modify the original collection.

In *toSearch*, pass the expression to find in the collection. You can pass:

*	a scalar value (string, number, boolean, date),
*	the null value,
*	an object or a collection reference.

*toSearch* must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in *startFrom*.

*	If *startFrom* >=  the collection's length, -1 is returned, which means the collection is not searched.
*	If *startFrom* < 0, it is considered as the offset from the end of the collection (*startFrom = startFrom+length*).
	**Note**: Even if *startFrom* is negative, the collection is still searched from left to right.
*	If *startFrom*  ==  0, the whole collection is searched (default).

#### Example

```qs
 var col : collection
 var i : integer
 col = newCollection(1,2,"Henry",5,3,"Albert",6,4,"Alan",5)
 i = col.indexOf(3) //i = 4
 i = col.indexOf(5,5) //i = 9
 i = col.indexOf("al@") //i = 5
 i = col.indexOf("Hello") //i = -1
```

<!-- END REF -->



<!-- REF collection.indices().Desc -->
## .indices()


<!-- REF #collection.indices().Syntax -->**.indices**(  *queryString* : string { , *...value* : any } ) : collection <!-- END REF -->


<!-- REF #collection.indices().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|queryString|string|->|Search criteria|
|value|any|->|Value(s) to compare when using placeholder(s)|
|Result|collection |<-|Element index(es) matching queryString in the collection|<!-- END REF -->


#### Description

The `.indices()` function works exactly the same as the [`.query()`](#query) function but <!-- REF #collection.indices().Summary -->returns indexes, in the original collection, of object collection elements that match the *queryString* search conditions<!-- END REF -->, and not elements themselves. Indexes are returned in ascending order.

>This function does not modify the original collection.

The *queryString* parameter uses the following syntax:

```qs
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

For a detailed description of the *queryString* and *value* parameters, please refer to the [`dataClass.query()`](DataClassClass.md#query) function.

#### Example


```qs
 var c, icol : collection
 c = newCollection()
 c.push(newObject("name","Cleveland","zc",35049))
 c.push(newObject("name","Blountsville","zc",35031))

 c.push(newObject("name","Adger","zc",35006))
 c.push(newObject("name","Clanton","zc",35046))
 c.push(newObject("name","Clanton","zc",35045))
 icol = c.indices("name = :1","Cleveland") // icol: [0]
 icol = c.indices("zc > 35040") // icol: [0,3,4]
```

<!-- END REF -->




<!-- REF collection.insert().Desc -->
## .insert()


<!-- REF #collection.insert().Syntax -->**.insert**( *index* : integer , *element* : any ) : collection <!-- END REF -->


<!-- REF #collection.insert().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|index|integer|->|Where to insert the element|
|element|any|->|Element to insert in the collection|
|Result|collection |<-|Original collection containing inserted element|<!-- END REF -->


#### Description

The `.insert()` function <!-- REF #collection.insert().Summary -->inserts *element* at the specified *index* position in the collection instance and returns the edited collection<!-- END REF -->.

>This function modifies the original collection.

In *index*, pass the position where you want the element to be inserted in the collection.

>**Warning**: Keep in mind that collection elements are numbered from 0.

*	If *index* > the length of the collection, actual starting index will be set to the length of the collection.
*	If *index* <0, it is recalculated as *index = index+length* (it is considered as the offset from the end of the collection).
*	If the calculated value is negative, index is set to 0.

Any type of element accepted by a collection can be inserted, even another collection.

#### Example

```qs
 var col : collection
 col = newCollection("a","b","c","d") //col:["a","b","c","d"]
 col.insert(2,"X") //col:["a","b","X","c","d"]
 col.insert(-2,"Y") //col:["a","b","X","Y","c","d"]
 col.insert(-10,"Hi") //col:["Hi","a","b","X","Y","c","d"]
```

<!-- END REF -->





<!-- REF collection.join().Desc -->
## .join()

<!-- REF #collection.join().Syntax -->**.join**( *delimiter* : string { , *option* : integer } ) : string <!-- END REF -->


<!-- REF #collection.join().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|delimiter|string|->|Separator to use between elements|
|option|integer|->|`kIgnoreNullOrEmpty`: ignore null and empty strings in the result|
|Result|string |<-|String containing all elements of the collection, separated by delimiter|<!-- END REF -->


#### Description

The `.join()` function <!-- REF #collection.join().Summary -->converts all elements of the collection to strings and concatenates them using the specified *delimiter* string as separator<!-- END REF -->.The function returns the resulting string.

>This function does not modify the original collection.

By default, null or empty elements of the collection are returned in the resulting string. Pass the `kIgnoreNullOrEmpty` constant in the *option* parameter if you want to remove them from the resulting string.

#### Example


```qs
 var c : collection
 var t1,t2 : string
 c = newCollection(1,2,3,"Paris",null,"",4,5)
 t1 = c.join("|") //1|2|3|Paris|null||4|5
 t2 = c.join("|",kIgnoreNullOrEmpty) //1|2|3|Paris|4|5
```

<!-- END REF -->




<!-- REF collection.last().Desc -->
## .last()

<!-- REF #collection.last().Syntax -->**.last**() : any <!-- END REF -->


<!-- REF #collection.last().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|any |<-|Last element of collection|<!-- END REF -->


#### Description

The `.last()` function <!-- REF #collection.last().Summary -->returns the last element of the collection<!-- END REF -->.


>This function does not modify the original collection.

The function returns undefined if the collection is empty.

#### Example


```qs
var col, emptyCol : collection
var last : variant
col = newCollection(10, 20, 30, "hello", 50)
last = col.last() // 50

emptyCol = newCollection() //empty
// last = emptyCol[emptyCol.length-1] //returns an error
last = emptyCol.last() // returns Undefined

```

<!-- END REF -->





<!-- REF collection.lastIndexOf().Desc -->
## .lastIndexOf()


<!-- REF #collection.lastIndexOf().Syntax -->**.lastIndexOf**( *toSearch* : expression { , *startFrom* : integer } ) : integer <!-- END REF -->


<!-- REF #collection.lastIndexOf().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|toSearch|expression|->|The element that is to be searched for within the collection|
|startFrom|integer|->|Index to start the search at|
|Result|integer |<-|Index of last occurrence of toSearch in the collection, -1 if not found|<!-- END REF -->


#### Description

The `.lastIndexOf()` function <!-- REF #collection.lastIndexOf().Summary -->searches the *toSearch* expression among collection elements and returns the index of the last occurrence<!-- END REF -->, or -1 if it was not found.

>This function does not modify the original collection.

In *toSearch*, pass the expression to find in the collection. You can pass:

*	a scalar value (string, number, boolean, date),
*	the null value,
*	an object or a collection reference.

*toSearch* must match exactly the element to find (the same rules as for the equality operator are applied).

Optionally, you can pass the index of collection from which to start a reverse search in *startFrom*.

*	If *startFrom* >=  the collection's length minus one (coll.length-1), the whole collection is searched (default).
*	If *startFrom* < 0, it is recalculated as *startFrom = startFrom+length* (it is considered as the offset from the end of the collection). If the calculated value is negative, -1 is returned (the collection is not searched).
	**Note:** Even if *startFrom* is negative, the collection is still searched from right to left.
*	If *startFrom*  ==  0, -1 is returned, which means the collection is not searched.

#### Example


```qs
 var col : collection
 var pos1,pos2,pos3,pos4,pos5 : integer
 col = splitString("a,b,c,d,e,f,g,h,i,j,e,k,e",",") //col.length: 13
 pos1 = col.lastIndexOf("e") //returns 12
 pos2 = col.lastIndexOf("e",6) //returns 4
 pos3 = col.lastIndexOf("e",15) //returns 12
 pos4 = col.lastIndexOf("e",-2) //returns 10
 pos5 = col.lastIndexOf("x") //returns -1
```

<!-- END REF -->




<!-- REF collection.length.Desc -->
## .length


<!-- REF #collection.length.Syntax -->**.length** : integer<!-- END REF -->



#### Description

The `.length` property <!-- REF #collection.length.Summary -->returns the number of elements in the collection<!-- END REF -->.

The `.length` property is initialized when the collection is created. Adding or removing elements updates the length, if necessary. This property is **read-only** (you cannot use it to set the size of the collection).

#### Example


```qs
 var col : collection //col.length initialized to 0
 var vSize : integer
 col = newCollection("one","two","three") //col.length updated to 3
 col[4] = "five" //col.length updated to 5
 vSize = col.remove(0,3).length //vSize: 2
```

<!-- END REF -->




<!-- REF collection.map().Desc -->
## .map()


<!-- REF #collection.map().Syntax -->**.map**( *formula* : 4D.Function { , *...param* : any } ) : collection<br/>**.map**( *methodName* : string { , *...param* : any } ) : collection <!-- END REF -->


<!-- REF #collection.map().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formula|4D.Function|->|formula object|
|methodName|string|->|Name of a method|
|param|any|->|Parameter(s) to pass to *formula* or *methodName*|
|Result|collection |<-|collection of transformed values|<!-- END REF -->


#### Description

The `.map()` function <!-- REF #collection.map().Summary -->creates a new collection based upon the result of the call of the *formula* 4D function or *methodName* method on each element of the original collection<!-- END REF -->. Optionally, you can pass parameters to *formula* or *methodName* using the *param* parameter(s). `.map()` always returns a collection with the same size as the original collection, except if *$1.stop* was used (see below).

>This function does not modify the original collection.


You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods,
- or *methodName*, the name of a project method (text).

The callback is called with the parameter(s) passed in *param* (optional). The callback can perform any operation, with or without the parameter(s) and must return new transformed value to add to the resulting collection. It receives an `object` in first parameter, named *$1*.

The callback receives the following parameters:

*	in *$1.value*: element value to be evaluated
*	in *$2*: param
*	in *$N...*: paramN...

It can set the following parameter(s):

*	(mandatory if you used a method) *$1.result* (any type): new transformed value to add to the resulting collection
*	*$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.


#### Example


```qs
var c, c2 : collection
c = newCollection(1, 4, 9, 10, 20)
c2 = c.map(formula(round(($1.value/$2)*100, 2)), c.sum())
  //c2: [2.27,9.09,20.45,22.73,45.45]
```

<!-- END REF -->





<!-- REF collection.max().Desc -->
## .max()


<!-- REF #collection.max().Syntax -->**.max**( { *propertyPath* : string } ) : any <!-- END REF -->


<!-- REF #collection.max().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|propertyPath|string|->|object property path to be used for evaluation|
|Result|boolean, string, Number, collection, object, date |<-|Maximum value in the collection|<!-- END REF -->


#### Description

The `.max()` function <!-- REF #collection.max().Summary -->returns the element with the highest value in the collection<!-- END REF --> (the last element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).

>This function does not modify the original collection.

If the collection contains different types of values, the `.max()` function will return the maximum value within the last element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property whose maximum value you want to get.

If the collection is empty, `.max()` returns `undefined`.

#### Example


```qs
 var col : collection
 var max, maxSal, maxName : variant
 col = newCollection(200,150,55)
 col.push(newObject("name","Smith","salary",10000))
 col.push(newObject("name","Wesson","salary",50000))
 col.push(newObject("name","Alabama","salary",10500))
 max = col.max() //{name:Alabama,salary:10500}
 maxSal = col.max("salary") //50000
 maxName = col.max("name") //"Wesson"
```

<!-- END REF -->




<!-- REF collection.min().Desc -->
## .min()

<!-- REF #collection.min().Syntax -->**.min**( { *propertyPath* : string } ) : any <!-- END REF -->


<!-- REF #collection.min().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|propertyPath|string|->|object property path to be used for evaluation|
|Result|boolean, string, Number, collection, object, date |<-|Minimum value in the collection|<!-- END REF -->


#### Description

The `.min()` function <!-- REF #collection.min().Summary -->returns the element with the smallest value in the collection<!-- END REF --> (the first element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).

>This function does not modify the original collection.


If the collection contains different types of values, the `.min()` function will return the minimum value within the first element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property whose minimum value you want to get.

If the collection is empty, `.min()` returns `undefined`.

#### Example


```qs
 var col : collection
 var min, minSal, minName : variant
 col = newCollection(200,150,55)
 col.push(newObject("name","Smith","salary",10000))
 col.push(newObject("name","Wesson","salary",50000))
 col.push(newObject("name","Alabama","salary",10500))
 min = col.min() //55
 minSal = col.min("salary") //10000
 minName = col.min("name") //"Alabama"
```

<!-- END REF -->


<!-- REF collection.multiSort().Desc -->
## .multiSort()

<!-- REF #collection.multiSort().Syntax -->**.multiSort**() : collection<br/>**.multiSort**( *colsToSort* : collection ) : collection<br/>**.multiSort**( *formula* : 4D.Function , *colsToSort* : collection ) : collection<!-- END REF -->


<!-- REF #collection.multiSort().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formula|4D.Function|->|Formula object|
|colsToSort|collection|->|Collection of collections and/or objects with {`collection`:*colToSort*,`order`:`ck ascending` or `ck descending`} properties|
|Result|collection |<-|Original collection sorted|<!-- END REF -->


#### Description

The `.multiSort()` function <!-- REF #collection.multiSort().Summary -->enables you to carry out a multi-level synchronized sort on a set of collections<!-- END REF -->.

>This function modifies the original collection as well as all collections used in *colsToSort* parameter.

If `.multiSort()` is called with no parameters, the function has the same effect as the [`.sort()`](#sort) function: the collection is sorted (only scalar values) in ascending order by default, according to their type. If the collection contains values of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1. null
2. booleans
3. strings
4. numbers
5. objects
6. collections
7. dates


**Single-level synchronized sort**

To sort several collections synchronously, just pass in *colsToSort* a collection of collections to sort. You can pass an unlimited number of collections. The original collection will be sorted in ascending order and all *colsToSort* collections will be sorted in a synchronized manner. 

:::note

All *colsToSort* collections must have the same number of elements, otherwise an error is returned.

:::

If you want to sort the collections in some other order than ascending, you must supply a *formula* ([Formula object](FunctionClass.md#formula) that defines the sort order. The return value should be a boolean that indicates the relative order of the two elements: **true** if *$1.value* is less than *$1.value2*, **false** if *$1.value* is greater than *$1.value2*. You can provide additional parameters to the formula if necessary.

The formula receives the following parameters:

- $1 (object), where:
	- *$1.value* (any type): first element value to be compared
	- *$1.value2* (any type): second element value to be compared
- $2...$N (any type): extra parameters

**Multi-level synchronized sort**

Defining a multi-level synchronized sort requires that you pass an object containing {`collection`:*colToSort*,`order`:`ck ascending` or `ck descending`} properties instead of the *colToSort* itself for every collection to use as sub-level. 

The sort levels are determined by the order in which the collections are passed in the *colsToSort* parameter: the position of a `collection`/`order` object in the syntax determines its sort level.

:::note

The `.multiSort()` function uses a [stable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability) sort algorithm. 

:::

#### Example 1

A simple synchronized sort of collections with different value types:

```4d
var col,col2,col3 : collection
col = ["A", "C", "B"]
col2 = [1, 2, 3]
col3 = [["Jim", "Philip", "Maria"], ["blue", "green"], ["11", 22, "33"]]

col.multiSort([col2 , col3])
//col : ["A","B","C"]
//col2 : [1,3,2]
//col3[0] : ["Jim","Philip","Maria"]
//col3[1] : ["11",22,"33"]
//col3[2] : ["blue","green"]

```

#### Example 2

You want to sort three synchronized collections: city, country, and continent. You want an ascending sort of the first and the third collections, and synchronization for the second collection:

```4d
var city, country, continent : collection

city = ["Paris", "Lyon", "Rabat", "Eching", "San Diego"]
country = ["France", "France", "Morocco", "Germany", "US"]
continent = ["Europe", "Europe", "Africa", "Europe", "America"]

continent.multiSort(country, {collection : city , order : ck ascending})
//continent : ["Africa", "America","Europe","Europe","Europe"]
//country : ["Morocco", "US","Germany","France","France"]
//city : ["Rabat","San Diego","Eching","Lyon","Paris"]

```

#### Example 3

You can also synchronize collections of objects.

```4d
var name, address : collection
name = []
name.push({firstname: "John", lastname: "Smith"})
name.push({firstname: "Alain", lastname: "Martin"})
name.push({firstname: "Jane", lastname: "Doe"})
name.push({firstname: "John", lastname: "Doe"})
address = []
address.push({city: "Paris", country: "France"})
address.push({city: "Lyon", country: "France"})
address.push({city: "Eching", country: "Germany"})
address.push({city: "Berlin", country: "Germany"})

name.multiSort(formula($1.value.firstname < $1.value2.firstname), [address])
//"Alain Martin","Jane Doe","John Smith","John Doe"
//"Lyon France","Eching Germany","Paris France","Berlin Germany"

```


<!-- END REF -->


<!-- REF collection.orderBy().Desc -->
## .orderBy()


<!-- REF #collection.orderBy().Syntax -->**.orderBy**() : collection<br/>**.orderBy**( *pathStrings* : string ) : collection<br/>**.orderBy**( *pathobjects* : collection ) : collection<br/>**.orderBy**( *ascOrDesc* : integer ) : collection <!-- END REF -->


<!-- REF #collection.orderBy().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|pathStrings|string|->|Property path(s) on which to order the collection|
|pathobjects|collection|->|collection of criteria objects|
|ascOrDesc|integer|->|`kAscending` or `kDescending` (scalar values)|
|Result|collection |<-|Ordered copy of the collection (shallow copy)|<!-- END REF -->


#### Description

The `.orderBy()` function <!-- REF #collection.orderBy().Summary -->returns a new collection containing all elements of the collection in the specified order<!-- END REF -->.

This function returns a *shallow copy*, which means that objects or collections in both collections share the same reference. If the original collection is a shared collection, the returned collection is also a shared collection.


>This function does not modify the original collection.

If you pass no parameter, the function orders scalar values in the collection in ascending order (other element types such as objects or collections are returned unordered). You can modify this automatic order by passing the `kAscending` or `kDescending` constants in the *ascOrDesc* parameter (see below).

You can also pass a criteria parameter to define how the collection elements must be sorted. Three syntaxes are supported for this parameter:

*	*pathStrings*: string (formula). **Syntax**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (default order: asc). *pathStrings* contains a formula made of 1 to x property paths and (optionally) sort orders, separated by commas. The order in which the properties are passed determines the sorting priority of the collection elements. By default, properties are sorted in ascending order. You can set the sort order of a property in the criteria string, separated from the property path by a single space: pass "asc" to sort in ascending order or "desc" in descending order.

*	*pathobjects*: collection. You can add as many objects in the *pathobjects* collection as necessary. By default, properties are sorted in ascending order ("descending" is false). Each element of the collection contains an object structured in the following way:  

```json
{
    "propertyPath": string,
    "descending": boolean
}
```

*	*ascOrDesc*: integer. You pass one of the following constants:

	|Constant|Value|Comment|
	|---|---|---|
	|kAscending|0|Elements are ordered in ascending order (default)|
	|kDescending|1|Elements are ordered in descending order

	This syntax orders scalar values in the collection only (other element types such as objects or collections are returned unordered).

If the collection contains elements of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.	null
2.	booleans
3.	strings
4.	numbers
5.	objects
6.	collections
7.	dates

#### Example 1


Ordering a collection of numbers in ascending and descending order:

```qs
 var c, c2, c3 : collection
 c = newCollection()
 for(vCounter,1,10)
    c.push(Random)
 end
 c2 = c.orderBy(kAscending)
 c3 = c.orderBy(kDescending)
```


#### Example 2

Ordering a collection of objects based on a text formula with property names:

```qs
 var c, c2 : collection
 c = newCollection()
 for(vCounter,1,10)
    c.push(newObject("id",vCounter,"value",random))
 end
 c2 = c.orderBy("value desc")
 c2 = c.orderBy("value desc, id")
 c2 = c.orderBy("value desc, id asc")
```

Ordering a collection of objects with a property path:

```qs
 var c, c2 : collection
 c = newCollection()
 c.push(newObject("name","Cleveland","phones",newObject("p1","01","p2","02")))
 c.push(newObject("name","Blountsville","phones",newObject("p1","00","p2","03")))

 c2 = c.orderBy("phones.p1 asc")
```


#### Example 3

Ordering a collection of objects using a collection of criteria objects:

```qs
 var crit, c, c2 : collection
 crit = newCollection()
 c = newCollection()
 for(vCounter,1,10)
    c.push(newObject("id",vCounter,"value",random))
 end
 crit.push(newObject("propertyPath","value","descending",true))
 crit.push(newObject("propertyPath","id","descending",false))
 c2 = c.orderBy(crit)
```

Ordering with a property path:

```qs
 var crit, c, c2 : collection
 c = newCollection()
 c.push(newObject("name","Cleveland","phones",newObject("p1","01","p2","02")))
 c.push(newObject("name","Blountsville","phones",newObject("p1","00","p2","03")))
 crit = newCollection(newObject("propertyPath","phones.p2","descending",true))
 c2 = c.orderBy(crit)
```


<!-- END REF -->





<!-- REF collection.orderByMethod().Desc -->
## .orderByMethod()


<!-- REF #collection.orderByMethod().Syntax -->**.orderByMethod**( *formula* : 4D.Function { , ...*extraParam* : expression } ) : collection<br/>**.orderByMethod**( *methodName* : string { , ...*extraParam* : expression } ) : collection<!-- END REF -->



<!-- REF #collection.orderByMethod().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formula|4D.Function|->|formula object|
|methodName|string|->|Name of a method|
|extraParam|any|->|Parameter(s) to pass |
|Result|collection |<-|Sorted copy of the collection (shallow copy)|<!-- END REF -->


#### Description

The `.orderByMethod()` function <!-- REF #collection.orderByMethod().Summary -->returns a new collection containing all elements of the collection in the order defined through the *formula* function or *methodName* method<!-- END REF -->.

This function returns a *shallow copy*, which means that objects or collections in both collections share the same reference. If the original collection is a shared collection, the returned collection is also a shared collection.

>This function does not modify the original collection.


You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods,

- or *methodName*, the name of a project method (string).

In the callback, pass some code that compares two values and returns **true** if the first value is lower than the second value. You can provide *extraParam* parameters to the callback if necessary.

The callback receives the following parameters:

- $1 (object), where:
	- *$1.value* (any type): first element value to be compared
	- *$1.value2* (any type): second element value to be compared
- $2...$N (any type): extra parameters

If you used a method, it must set the following parameter:

- *$1.result* (boolean): **true** if *$1.value < $1.value2*, **false** otherwise

#### Example 1

You want to sort a collection of strings in numerical order rather than alphabetical order:

```qs
 var c, c2, c3 : collection
 c = newCollection()
 c.push("33","4","1111","222")
 c2 = c.orderBy() //c2: ["1111","222","33","4"], alphabetical order
 c3 = c.orderByMethod(formula(num($1.value)<num($1.value2))) // c3: ["4","33","222","1111"]
```


#### Example 2

You want to sort a collection of strings on their length:

```qs
 var fruits, c2 : collection
 fruits = newCollection("Orange","Apple","Grape","pear","Banana","fig","Blackberry","Passion fruit")
 c2 = fruits.orderByMethod(formula(length(string($1.value))>length(string($1.value2))))
  //c2:[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

#### Example 3

You want to sort a collection by character code or language:

```qs
var strings1, strings2 : collection
strings1 = newCollection("Alpha","Charlie","alpha","bravo","Bravo","charlie")

//using the character code:
strings2 = strings1.orderByMethod(formula(sortcollection),sk character codes)
// result : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

//using the language:
strings2 = strings1.orderByMethod(formula(sortcollection),sk strict)
// result : ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

The ***sortcollection*** method:

```qs
var $1: object
var $2: integer // sort option

$1.result = (compareStrings($1.value,$1.value2,$2)<0)
```

<!-- END REF -->





<!-- REF collection.pop().Desc -->
## .pop()


<!-- REF #collection.pop().Syntax -->**.pop**() : any <!-- END REF -->


<!-- REF #collection.pop().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|any |<-|Last element of collection|<!-- END REF -->


#### Description

The `.pop()` function <!-- REF #collection.pop().Summary -->removes the last element from the collection and returns it as the function result<!-- END REF -->.

>This function modifies the original collection.

When applied to an empty collection, `.pop()` returns ***undefined***.

#### Example

`.pop()`, used in conjunction with [`.push()`](#push), can be used to implement a first-in, last-out stack feature:

```qs
 var stack : collection
 var result : variant
 stack = newCollection() //stack:[]
 stack.push(1,2) //[1,2]
 result = stack.pop() //[1], returns 2
 stack.push(newCollection(4,5)) //[1,[4,5]]
 result = stack.pop() //[1], returns [4,5]
 result = stack.pop() //[], returns 1
```


<!-- END REF -->





<!-- REF collection.push().Desc -->
## .push()

<!-- REF #collection.push().Syntax -->**.push**( *element* : any { ,...*elementN* } ) : collection <!-- END REF -->


<!-- REF #collection.push().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|element|any|->|Element(s) to add to the collection|
|Result|collection |<-|Original collection containing added elements|<!-- END REF -->


#### Description

The `.push()` function <!-- REF #collection.push().Summary -->appends one or more *element*(s) to the end of the collection instance and returns the edited collection<!-- END REF -->.

>This function modifies the original collection.


#### Example 1

```qs
 var col : collection
 col = newCollection(1,2) //col:[1,2]
 col.push(3) //[1,2,3]
 col.push(6,newObject("firstname","John","lastname","Smith"))
  //col:[1,2,3,6,{firstname:John,lastname:Smith}
```



#### Example 2

You want to sort the resulting collection:

```qs
 var col, sortedCol : collection
 col = newCollection(5,3,9) //col:[5,3,9]
 sortedCol = col.push(7,50).sort()
  //col:[5,3,9,7,50]
  //sortedCol:[3,5,7,9,50]
```



<!-- END REF -->





<!-- REF collection.query().Desc -->
## .query()

<!-- REF #collection.query().Syntax -->**.query**( *queryString* : string , *...value* : any ) : collection<br/>**.query**( *queryString* : string , *querySettings* : object ) : collection <!-- END REF -->


<!-- REF #collection.query().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|queryString|string|->|Search criteria|
|value|any|->|Value(s) to compare when using placeholder(s)|
|querySettings|object|->|Query options: parameters, attributes|
|Result|collection |<-|Element(s) matching *queryString* in the collection|<!-- END REF -->


#### Description


The `.query()` function <!-- REF #collection.query().Summary -->returns all elements of a collection of objects that match the search conditions <!-- END REF -->defined by *queryString* and (optionally) *value* or *querySettings*. If the original collection is a shared collection, the returned collection is also a shared collection.

>This function does not modify the original collection.

The *queryString* parameter uses the following syntax:

```qs
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

For detailed information on how to build a query using *queryString*, *value* and *querySettings* parameters, please refer to the [`dataClass.query()`](DataClassClass.md#query) function description.

:::info

Formulas are not supported by the `collection.query()` function, neither in the *queryString* parameter nor as *formula* object parameter.

:::


#### Example 1



```qs
 var c, c2, c3 : collection
 c = newCollection()
 c.push(newObject("name","Cleveland","zc",35049))
 c.push(newObject("name","Blountsville","zc",35031))
 c.push(newObject("name","Adger","zc",35006))
 c.push(newObject("name","Clanton","zc",35046))
 c.push(newObject("name","Clanton","zc",35045))
 c2 = c.query("name = :1","Cleveland") //c2:[{name:Cleveland,zc:35049}]
 c3 = c.query("zc > 35040") //c3:[{name:Cleveland,zc:35049},{name:Clanton,zc:35046},{name:Clanton,zc:35045}]
```


#### Example 2



```qs
 var c : collection
 c = newCollection()
 c.push(newObject("name","Smith","dateHired",!22-05-2002!,"age",45))
 c.push(newObject("name","Wesson","dateHired",!30-11-2017!))
 c.push(newObject("name","Winch","dateHired",!16-05-2018!,"age",36))

 c.push(newObject("name","Sterling","dateHired",!10-5-1999!,"age",null))
 c.push(newObject("name","Mark","dateHired",!01-01-2002!))
```

This example returns persons whose name contains "in":

```qs
 col = c.query("name = :1","@in@")
  //col:[{name:Winch...},{name:Sterling...}]
```

This example returns persons whose name does not begin with a string from a variable (entered by the user, for example):

```qs
 col = c.query("name  !=  :1",aString+"@")
  //if astring = "W"
  //col:[{name:Smith...},{name:Sterling...},{name:Mark...}]
```

This example returns persons whose age is not known (property set to null or undefined):

```qs
 col = c.query("age = null") //placeholders not allowed with "null"
  //col:[{name:Wesson...},{name:Sterling...},{name:Mark...}]
```

This example returns persons hired more than 90 days ago:

```qs
 col = c.query("dateHired < :1",(currentDate-90))
  //col:[{name:Smith...},{name:Sterling...},{name:Mark...}] if today is 01/10/2018
```



More examples of queries can be found in the [`dataClass.query()`](DataClassClass.md#query) section.

<!-- END REF -->





<!-- REF collection.reduce().Desc -->
## .reduce()


<!-- REF #collection.reduce().Syntax -->**.reduce**( *formula* : 4D.Function { , *initValue* : any { , *...param* : expression }} ) : any<br/>**.reduce**( *methodName* : string { , *initValue* : any { , *...param* : expression }} ) : any <!-- END REF -->


<!-- REF #collection.reduce().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formula|4D.Function|->|formula object|
|methodName|string|->|Name of a method|
|initValue |string, Number, object, collection, date, boolean|->|Value to use as the first argument to the first call of *formula* or *methodName*|
|param |expression|->|Parameter(s) to pass|
|Result|string, Number, object, collection, date, boolean |<-|Result of the accumulator value|<!-- END REF -->


#### Description


The `.reduce()` function <!-- REF #collection.reduce().Summary -->applies the *formula* or *methodName* callback against an accumulator and each element in the collection (from left to right) to reduce it to a single value<!-- END REF -->.

>This function does not modify the original collection.

You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods,
- or *methodName*, the name of a project method (string).

The callback takes each collection element and performs any desired operation to accumulate the result into *$1.accumulator*, which is returned in *$1.value*.

You can pass the value to initialize the accumulator in *initValue*. If omitted, *$1.accumulator* starts with `undefined`.

The callback receives the following parameters:

*	in *$1.value*: element value to be processed
*	in *$2: param*
*	in *$N...*: *paramN...*

The callback sets the following parameter(s):

*	*$1.accumulator*: value to be modified by the function and which is initialized by *initValue*.
*	*$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.


#### Example 1


```qs
var c : collection
c = newCollection(5,3,5,1,3,4,4,6,2,2)
r = c.reduce(formula($1.accumulator* = $1.value), 1)  //returns 86400
```


#### Example 2

This example allows reducing several collection elements to a single one:

```qs
 var c,r : collection
 c = newCollection()
 c.push(newCollection(0,1))
 c.push(newCollection(2,3))
 c.push(newCollection(4,5))
 c.push(newCollection(6,7))
 r = c.reduce(formula(Flatten)) //r:[0,1,2,3,4,5,6,7]
```

With the following ***Flatten*** method:

```qs
 if($1.accumulator = null)
    $1.accumulator = newCollection()
 end
 $1.accumulator.combine($1.value)
```

<!-- END REF -->





<!-- REF collection.reduceRight().Desc -->
## .reduceRight()

<!-- REF #collection.reduceRight().Syntax -->**.reduceRight**( *formula* : 4D.Function { , *initValue* : any { , *...param* : expression }} ) : any<br/>**.reduceRight**( *methodName* : string { , *initValue* : any { , *...param* : expression }} ) : any <!-- END REF -->


<!-- REF #collection.reduceRight().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formula|4D.Function|->|formula object|
|methodName|string|->|Name of a method|
|initValue |string, Number, object, collection, date, boolean|->|Value to use as the first argument to the first call of *formula* or *methodName*|
|param |expression|->|Parameter(s) to pass|
|Result|string, Number, object, collection, date, boolean |<-|Result of the accumulator value|<!-- END REF -->


#### Description


The `.reduceRight()` function <!-- REF #collection.reduceRight().Summary -->applies the *formula* or *methodName* callback against an accumulator and each element in the collection (from right to left) to reduce it to a single value<!-- END REF -->.

>This function does not modify the original collection.

You designate the callback to be executed to evaluate collection elements using either:

- *formula* (recommended syntax), a [formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods,
- or *methodName*, the name of a project method (string).

The callback takes each collection element and performs any desired operation to accumulate the result into *$1.accumulator*, which is returned in *$1.value*.

You can pass the value to initialize the accumulator in *initValue*. If omitted, *$1.accumulator* starts with `undefined`.

The callback receives the following parameters:

*	in *$1.value*: element value to be processed
*	in *$2: param*
*	in *$N...*: *paramN...*

The callback sets the following parameter(s):

*	*$1.accumulator*: value to be modified by the function and which is initialized by *initValue*.
*	*$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.


#### Example 1


```qs
var c : collection
c = newCollection(5,3,5,1,3,4,4,6,2,2)
r = c.reduceRight(formula($1.accumulator* = $1.value), 1)  //returns 86400

```




#### Example 2

This example allows reducing several collection elements to a single one:

```qs
 var c,r : collection
 c = newCollection()
 c.push(newCollection(0,1))
 c.push(newCollection(2,3))
 c.push(newCollection(4,5))
 c.push(newCollection(6,7))
 r = c.reduceRight(formula(Flatten)) //r:[6,7,4,5,2,3,0,1]
```

With the following ***Flatten*** method:

```qs
	//Flatten project method
 if($1.accumulator = null)
    $1.accumulator = newCollection()
 end
 $1.accumulator.combine($1.value)
```

<!-- END REF -->



<!-- REF collection.remove().Desc -->
## .remove()


<!-- REF #collection.remove().Syntax -->**.remove**( *index* : integer { , *howMany* : integer } ) : collection <!-- END REF -->


<!-- REF #collection.remove().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|index |integer|->|Element at which to start removal|
|howMany |integer|->|Number of elements to remove, or 1 element if omitted|
|Result|collection|<-|Original collection without removed element(s)|<!-- END REF -->


#### Description

The `.remove()` function <!-- REF #collection.remove().Summary -->removes one or more element(s) from the specified *index* position in the collection and returns the edited collection<!-- END REF -->.

>This function modifies the original collection.

In *index*, pass the position where you want the element to be removed from the collection.

>**Warning**: Keep in mind that collection elements are numbered from 0. If *index* is greater than the length of the collection, actual starting index will be set to the length of the collection.

*	If *index* < 0, it is recalculated as *index = index+length* (it is considered as the offset from the end of the collection).
*	If the calculated value < 0, *index* is set to 0.
*	If the calculated value > the length of the collection, *index* is set to the length.

In *howMany*, pass the number of elements to remove from *index*. If *howMany* is not specified, then one element is removed.



If you try to remove an element from an empty collection, the method does nothing (no error is generated).


#### Example


```qs
 var col : collection
 col = newCollection("a","b","c","d","e","f","g","h")
 col.remove(3) // ["a","b","c","e","f","g","h"]
 col.remove(3,2) // ["a","b","c","g","h"]
 col.remove(-8,1) // ["b","c","g","h"]
 col.remove(-3,1) // ["b","g","h"]
```

<!-- END REF -->






<!-- REF collection.resize().Desc -->
## .resize()



<!-- REF #collection.resize().Syntax -->**.resize**( *size* : integer { , *defaultValue* : any } ) : collection <!-- END REF -->


<!-- REF #collection.resize().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|size |integer|->|New size of the collection|
|defaultValue |Number, string, object, collection, date, boolean|->|Default value to fill new elements|
|Result|collection|<-|Resized original collection|<!-- END REF -->


#### Description

The `.resize()` function <!-- REF #collection.resize().Summary -->sets the collection length to the specified new *size* and returns the resized collection<!-- END REF -->.

>This function modifies the original collection.

*	If *size* < collection length, exceeding elements are removed from the collection.
*	If *size* > collection length, the collection length is increased to size.

By default, new elements are filled will **null** values. You can specify the value to fill in added elements using the *defaultValue* parameter.

#### Example


```qs
 var c : collection
 c = newCollection()
 c.resize(10) // c:[null,null,null,null,null,null,null,null,null,null]

 c = newCollection()
 c.resize(10,0) // c:[0,0,0,0,0,0,0,0,0,0]

 c = newCollection(1,2,3,4,5)
 c.resize(10,newObject("name","X")) //c:[1,2,3,4,5,{name:X},{name:X},{name:X},{name:X},{name:X}]

 c = newCollection(1,2,3,4,5)
 c.resize(2) //c:[1,2]

```

<!-- END REF -->






<!-- REF collection.reverse().Desc -->
## .reverse()

<!-- REF #collection.reverse().Syntax -->**.reverse**() : collection <!-- END REF -->


<!-- REF #collection.reverse().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|collection|<-|Inverted copy of the collection|<!-- END REF -->


#### Description

The `.reverse()` function <!-- REF #collection.reverse().Summary -->returns a deep copy of the collection with all its elements in reverse order<!-- END REF -->. If the original collection is a shared collection, the returned collection is also a shared collection.

>This function does not modify the original collection.

#### Example


```qs
 var c, c2 : collection
 c = newCollection(1,3,5,2,4,6)
 c2 = c.reverse() //c2:[6,4,2,5,3,1]
```

<!-- END REF -->





<!-- REF collection.shift().Desc -->
## .shift()


<!-- REF #collection.shift().Syntax -->**.shift**() : any<!-- END REF -->


<!-- REF #collection.shift().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|any|<-|First element of collection|<!-- END REF -->


#### Description

The `.shift()` function <!-- REF #collection.shift().Summary -->removes the first element of the collection and returns it as the function result<!-- END REF -->.

>This function modifies the original collection.

If the collection is empty, this function does nothing.

#### Example


```qs
 var c : collection
 var val : variant
 c = newCollection(1,2,4,5,6,7,8)
 val = c.shift()
  // val:1
  // c:[2,4,5,6,7,8]
```

<!-- END REF -->







<!-- REF collection.slice().Desc -->
## .slice()

<!-- REF #collection.slice().Syntax -->**.slice**( *startFrom* : integer { , *end* : integer } ) : collection<!-- END REF -->


<!-- REF #collection.slice().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|startFrom |integer |->|Start index (included)|
|end |integer |->|End index (not included)|
|Result|collection|<-|new collection containing sliced elements (shallow copy)|<!-- END REF -->


#### Description

The `.slice()` function <!-- REF #collection.slice().Summary -->returns a portion of a collection into a new collection<!-- END REF -->, selected from *startFrom* index to *end* index (*end* not included). This function returns a *shallow copy* of the collection. If the original collection is a shared collection, the returned collection is also a shared collection.

>This function does not modify the original collection.

The returned collection contains the element specified by *startFrom* and all subsequent elements up to, but not including, the element specified by *end*. If only the *startFrom* parameter is specified, the returned collection contains all elements from *startFrom* to the last element of the original collection.

*	If *startFrom* < 0, it is recalculated as *startFrom = startFrom+length* (it is considered as the offset from the end of the collection).
*	If the calculated value < 0, *startFrom* is set to 0.
*	If *end* < 0 , it is recalculated as *end = end+length*.
*	If *end < startFrom* (passed or calculated values), the method does nothing.

#### Example


```qs
 var c, nc : collection
 c = newCollection(1,2,3,4,5)
 nc = c.slice(0,3) //nc:[1,2,3]
 nc = c.slice(3) //nc:[4,5]
 nc = c.slice(1,-1) //nc:[2,3,4]
 nc = c.slice(-3,-2) //nc:[3]
```

<!-- END REF -->





<!-- REF collection.some().Desc -->
## .some()


<!-- REF #collection.some().Syntax -->**.some**( { *startFrom* : integer , } *formula* : 4D.Function { , *...param* : any } ) : boolean<br/>**.some**( { *startFrom* : integer , } *methodName* : string { , *...param* : any } ) : boolean<!-- END REF -->


<!-- REF #collection.some().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|startFrom |integer |->|Index to start the test at|
|formula|4D.Function|->|formula object|
|methodName|string|->|Name of a method|
|param |Mixed |->|Parameter(s) to pass|
|Result|boolean|<-|true if at least one element successfully passed the test|<!-- END REF -->


#### Description

The `.some()` function <!-- REF #collection.some().Summary -->returns true if at least one element in the collection successfully passed a test implemented in the provided *formula* or *methodName* code<!-- END REF -->.

You designate the QodlyScript code (callback) to be executed to evaluate collection elements using either:


- *formula* (recommended syntax), a [formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods,
- or *methodName*, the name of a project method (string).

The callback is called with the parameter(s) passed in *param* (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. It receives an `object` in first parameter, named `$1`.


The callback receives the following parameters:

*	in *$1.value*: element value to be processed
*	in *$2: param*
*	in *$N...*: *paramN...*

It can set the following parameter(s):

*	(mandatory if you used a method) *$1.result* (boolean): **true** if the element value evaluation is successful, **false** otherwise.
*	*$1.stop* (boolean, optional): **true** to stop the method callback. The returned value is the last calculated.

In any case, at the point where `.some()` function encounters the first collection element returning true, it stops calling the callback and returns **true**.

By default, `.some()` tests the whole collection. Optionally, you can pass the index of an element from which to start the test in *startFrom*.

*	If *startFrom* >=  the collection's length, **False** is returned, which means the collection is not tested.
*	If *startFrom* < 0, it is considered as the offset from the end of the collection.
*	If *startFrom*  ==  0, the whole collection is searched (default).


#### Example


You want to know if at least one collection value is >0.

```qs
 var c : collection
 var b : boolean
 c = newCollection()
 c.push(-5,-3,-1,-4,-6,-2)
 b = c.some(formula($1.value>0)) // b:false
 c.push(1)
 b = c.some(formula($1.value>0)) // b:true

 c = newCollection()
 c.push(1,-5,-3,-1,-4,-6,-2)
 b = c.some(formula($1.value>0)) //b:true
 b = c.some(1,formula($1.value>0)) //b:false
```



<!-- END REF -->





<!-- REF collection.sort().Desc -->
## .sort()


<!-- REF #collection.sort().Syntax -->**.sort**() : collection<br/>**.sort**( *formula* : 4D.Function { , *...extraParam* : any } ) : collection<br/>**.sort**( *methodName* : string { , *...extraParam* : any } ) : collection <!-- END REF -->


<!-- REF #collection.sort().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formula|4D.Function|->|formula object|
|methodName|string|->|Name of a method|
|extraParam |any |->|Parameter(s) for the method|
|Result|collection|<-|Original collection sorted|<!-- END REF -->


#### Description

The `.sort()` function <!-- REF #collection.sort().Summary -->sorts the elements of the original collection and also returns the sorted collection<!-- END REF --> .

>This function modifies the original collection.

If `.sort()` is called with no parameters, only scalar values (number, text, date, booleans) are sorted. Elements are sorted by default in ascending order, according to their type. If the collection contains elements of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.	null
2.	booleans
3.	strings
4.	numbers
5.	objects
6.	collections
7.	dates


If you want to sort the collection elements in some other order or sort any type of element, you must supply in *formula* ([formula object](FunctionClass.md)) or *methodName* (string) a callback that defines the sort order.  The return value should be a boolean that indicates the relative order of the two elements: **true** if *$1.value* is less than *$1.value2*, **false** if *$1.value* is greater than *$1.value2*. You can provide additional parameters to the callback if necessary.

The callback receives the following parameters:

- $1 (object), where:
	- *$1.value* (any type): first element value to be compared
	- *$1.value2* (any type): second element value to be compared
- $2...N (any type): extra parameters

If you used a method, you must set the following parameter:

- *$1.result* (boolean): **true** if *$1.value < $1.value2*, **false** otherwise.


#### Example 1


```qs
 var col, col2 : collection
 col = newCollection("Tom",5,"Mary",3,"Henry",1,"Jane",4,"Artie",6,"Chip",2)
 col2 = col.sort() // col2:["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
  // col:["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
```

#### Example 2

```qs
 var col, col2 : collection
 col = newCollection(10,20)
 col2 = col.push(5,3,1,4,6,2).sort() //col2:[1,2,3,4,5,6,10,20]
```

#### Example 3

```qs
var col, col2, col3 : collection
col = newCollection(33,4,66,1111,222)
col2 = col.sort() //numerical sort: [4,33,66,222,1111]
col3 = col.sort(formula(String($1.value)<String($1.value2))) //alphabetical sort: [1111,222,33,4,66]
```

<!-- END REF -->




<!-- REF collection.sum().Desc -->
## .sum()


<!-- REF #collection.sum().Syntax -->**.sum**( { *propertyPath* : string } ) : number<!-- END REF -->


<!-- REF #collection.sum().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|propertyPath |string |->|object property path to be used for calculation|
|Result|number|<-|Sum of collection values|<!-- END REF -->


#### Description

The `.sum()` function <!-- REF #collection.sum().Summary -->returns the sum for all values in the collection instance<!-- END REF -->.

Only numerical elements are taken into account for the calculation (other element types are ignored).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property to take into account.

`.sum()` returns 0 if:

*	the collection is empty,
*	the collection does not contain numerical elements,
*	*propertyPath* is not found in the collection.

#### Example 1


```qs
 var col : collection
 var vSum : number
 col = newCollection(10,20,"Monday",true,2)
 vSum = col.sum() //32
```

#### Example 2

```qs
 var col : collection
 var vSum : number
 col = newCollection()
 col.push(newObject("name","Smith","salary",10000))
 col.push(newObject("name","Wesson","salary",50000))
 col.push(newObject("name","Gross","salary",10500,5))
 vSum = col.sum("salary") //vSum:70500,5
```

<!-- END REF -->





<!-- REF collection.unshift().Desc -->

## .unshift()

<!-- REF #collection.unshift().Syntax -->**.unshift**( *value* : any { ,...*valueN* : any } ) : collection<!-- END REF -->


<!-- REF #collection.unshift().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|value |string, Number, object, collection, date |->|Value(s) to insert at the beginning of the collection|
|Result|number|<-|collection containing added element(s)
|<!-- END REF -->


#### Description

The `.unshift()` function <!-- REF #collection.unshift().Summary -->inserts the given *value*(s) at the beginning of the collection <!-- END REF -->and returns the modified collection.

>This function modifies the original collection.

If several values are passed, they are inserted all at once, which means that they appear in the resulting collection in the same order as in the argument list.


#### Example


```qs
 var c : collection
 c = newCollection(1,2)
 c.unshift(4) // c:[4,1,2]
 c.unshift(5) //c:[5,4,1,2]
 c.unshift(6,7) // c:[6,7,5,4,1,2]
```

<!-- END REF -->
