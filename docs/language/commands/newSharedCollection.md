---
id: newSharedCollection
title: newSharedCollection
---



<!-- REF #_command_.newSharedCollection.Syntax -->**newSharedCollection** {( *...value* : any )} : collection<!-- END REF -->


<!-- REF #_command_.newSharedCollection.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|value|integer, number, string, date, time, boolean, object (shared), collection (shared)|->|Shared collection's value(s)|
|Result|collection|<-|New shared collection|
<!-- END REF -->


#### Description

The `newSharedCollection` command <!-- REF #_command_.newSharedcollection.Summary --> creates a new empty or prefilled shared collection<!-- END REF --> and returns its reference.

Adding an element to this collection using the assignment operator must be surrounded by the [`use...end`](../basics/lang-shared.md#useend) structure, otherwise an error is generated (this is not necessary when adding elements using functions such as [`push()`](#push) or [`map()`](#map) because they automatically trigger an internal *use...end*). Reading an element without a *use...end* structure is, however, possible.

:::info

For more information on shared collections, please refer to the [Shared objects and collections](../basics/lang-shared.md) page.

:::

If you do not pass any parameters, `newSharedcollection` creates an empty shared collection and returns its reference.

You must assign the returned reference to a variable or property of the collection type.

Optionally, you can prefill the new shared collection by passing one or several *value*(s) as parameter(s). Otherwise, you can add or modify elements subsequently through object notation assignment (see example). If the new element index is beyond the last existing element of the shared collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

You can pass any number of values of the following supported types:

*	number (number, integer...). Number values are always stored as numbers.
*	string
*	boolean
*	date
*	time (stored as number of milliseconds - number)
*	null
*	shared object
*	shared collection

:::note

Unlike standard (not shared) collections, shared collections do not support pictures and objects or collections that are not shared.  

:::


#### Example

```qs
 mySharedCol = newSharedCollection("alpha","omega")
 use(mySharedCol)
    mySharedCol[1] = "beta"
 end
```

#### See also

[objectIsShared](object.md#objectisshared)

