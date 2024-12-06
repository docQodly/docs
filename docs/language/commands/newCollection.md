---
id: newCollection
title: newCollection
---


<!-- REF #_command_.newCollection.Syntax -->**newCollection** {( *...value* : any )} : collection<!-- END REF -->


<!-- REF #_command_.newCollection.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|value|integer, number, string, date, time, boolean, object, collection, picture|&#8594;|collection's value(s)|
|Result|collection|&#8592;|New collection|
<!-- END REF -->


#### Description

The `newCollection` command <!-- REF #_command_.newCollection.Summary --> creates a new empty or prefilled collection<!-- END REF --> and returns its reference.

If you do not pass any parameters, `newCollection` creates an empty collection and returns its reference.

You must assign the returned reference to a variable or a property of the collection type.

Optionally, you can prefill the new collection by passing one or several *value*(s) as parameter(s).

Otherwise, you can add or modify elements subsequently through assignment. For example:

```qs
 myCol[10] = "My new element"
```

If the new element index is beyond the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

You can pass any number of values of any supported type (number, text, date, picture, object, collection...). Unlike arrays, collections can mix data of different types.

You must pay attention to the following conversion issues:

*	dates are stored as "yyyy-mm-dd" dates or strings with the "YYYY-MM-DDTHH:mm:ss.SSSZ" format, according to the current "dates inside objects" setting. When converting dates into text prior to storing them in the collection, by default the program takes the local time zone into account. You can modify this behavior using the `dates inside objects` selector of the `SET DATABASE PARAMETER` command.
*	If you pass a time, it is stored as a number of milliseconds (number).

#### Example 1



You want to create a new empty collection and assign it to a collection variable:

```qs
 var myCol : collection
 myCol = newCollection()
  //myCol: []
```

#### Example 2

You want to create a prefilled collection:

```qs
 var filledColl : collection
 filledColl = newCollection(33,"mike","november",currentdate)
  //filledColl:[33,"mike","november","2023-04-28T00:00:00.000Z"]
```

#### Example 3

You create a new collection and then add a new element:

```qs
 var coll : collection
 coll = newCollection("a","b","c")
  //coll:["a","b","c"]
 coll[9] = "z" //add a 10th element with value "z"
  //coll.length: 10
  //coll: ["a","b","c",null,null,null,null,null,null,"z"]
```

