---
id: newSharedObject
title: newSharedObject
---

<!-- REF #_command_.newSharedObject.Syntax -->**newSharedObject** {( *property* : string , *value* : any {, *...property* : string , *...value* : any} ) } : object<!-- END REF -->


<!-- REF #_command_.newSharedObject.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|property|string|&#8594;|Name of property to create|
|value|integer, number, string, date, time, boolean, object, collection, picture|&#8594;|Value of property|
|Result|object|&#8592;|New shared object|<!-- END REF -->

#### Description

The `newSharedObject` command <!-- REF #_command_.newSharedObject.Summary -->creates a new empty or prefilled shared object and returns its reference<!-- END REF -->. Adding or editing a property to this object must be surrounded by the `use...end` structure, otherwise an error is generated. Reading a property without a `use...end` structure is, however, possible. For more information, see the [Shared objects and shared collections](../basics/lang-shared.md) page.

If you do not pass any parameters, `newSharedObject` creates an empty object and returns its reference.

Optionally, you can prefill the new object by passing one or several *property/value* pairs as parameters:

- In the *property* parameter, pass the label of the property to be created (up to 255 characters). Note that the property parameter is case sensitive and must comply with [Qodly rules for property names](../basics/lang-identifiers.md#object-properties).
- In the *value* parameter, pass the value you want to set for the property. Shared objects can only contain values of the following types:
	- number (all numeric values are stored as numbers)
	- string
	- boolean
	- date
	- time (stored as number of milliseconds)
	- null
	- shared object
	- shared collection

:::info

Unlike standard (not shared) objects, shared objects do not support pictures and objects or collections that are not shared.

:::

#### Example 1

```qs
var contact : object
contact = newSharedObject("name","Smith","firstname","John")
```

#### Example 2

```qs
var s_obj : object
s_obj = newSharedObject("prop1","alpha")
use(s_obj)
    s_obj.prop1 = "omega"
end
```

#### See also

[objectIsShared](objectIsShared.md)
