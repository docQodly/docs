---
id: bool
title: bool
---


<!-- REF #_command_.bool.Syntax -->**bool** ( *expression* : any ) : boolean<!-- END REF -->


<!-- REF #_command_.bool.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|any|->|Expression for which to return the boolean form|
|Result|boolean|<-|Boolean form of the expression|
<!-- END REF -->

#### Description

The `bool` command <!-- REF #_command_.bool.Summary -->returns the boolean form of the expression you passed in *expression*<!-- END REF -->.

The command can return the following values, depending on the *expression* result type:

|Expression result type|Return of the bool command|
|:----|:----|
|undefined|false|
|null|false|
|boolean|false if false, otherwise true|
|number|false if 0, other true|
|other types|false|

This command is useful when the code expects a boolean value, and when the evaluation of the expression could result in a different type (e.g. if it evaluates to **null** or **undefined**).

#### Examples

```qs
var result : boolean
result = bool(1)  //true
result = bool(0)  //false
result = bool("hello")  //false

var o : object
o = {test: 42}
result = bool(o.test)  //true
result = bool(o.otherTest)  //false

```

#### See also

[`date`](date.md)<br/>
[`num`](num.md)<br/>
[`string`](string.md)<br/>
[`time`](time.md)
