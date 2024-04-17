---
id: objectIsEmpty
title: objectIsEmpty
---


<!-- REF #_command_.objectIsEmpty.Syntax -->**objectIsEmpty** ( *object* : object ) : boolean<!-- END REF -->


<!-- REF #_command_.objectIsEmpty.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to check|
|Result|boolean|<-|true if object is empty or undefined, otherwise false|
<!-- END REF -->


#### Description

The `objectIsEmpty` command <!-- REF #_command_.objectIsEmpty.Summary -->returns `true` if *object* is undefined or empty, and `false` if *object* is defined (initialized) and contains at least one property<!-- END REF -->.

#### Example

```qs
 var ref : object
 var empty, def : boolean

 empty = objectIsEmpty(ref) // true
 def = objectIsDefined(ref) // false

 ref = {name : "Susie", age : 4}
 empty = objectIsEmpty(ref) // false
 def = objectIsDefined(ref) // true

 objectRemove(ref,"name")
 objectRemove(ref,"age")
 empty = objectIsEmpty(ref) // true
 def = objectIsDefined(ref) // true
```

#### See also

[objectIsDefined](objectIsDefined.md)
