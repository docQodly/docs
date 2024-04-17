---
id: formula
title: formula
---


<!-- REF #_command_.formula.Syntax -->**formula** ( *formulaExp* : expression ) : 4D.Function<!-- END REF -->


<!-- REF #_command_.formula.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formulaExp|expression|->|formula to be returned as object|
|Result|4D.Function|<-|Native function encapsulating the formula|
<!-- END REF -->


#### Description

The `formula` command <!-- REF #_command_.formula.Summary -->creates a `4D Function` object based upon the *formulaExp* expression<!-- END REF -->. *formulaExp* [expression](../basics/lang-expressions.md) can be as simple as a single value or complex, such as a project method with parameters.

The returned formula can be called with:

*	[`.call()`](../FunctionClass.md#call) or [`.apply()`](../FunctionClass.md#apply) functions, or
*	object notation syntax (see [formula objects](../FunctionClass.md#formula-objects)).

```qs
 var f : 4D.Function
 f = formula(1+2)
 o = newObject("myFormula",f)

  //three different ways to call the formula
 f.call(o) //returns 3
 f.apply(o) //returns 3
 o.myFormula() //returns 3
```

You can pass [parameters](../FunctionClass.md#passing-parameters) to the `formula`, as seen below in [example 4](#example-4).

You can specify the object on which the formula is executed, as seen in [example 5](#example-5). The properties of the object can then be accessed via [`this`](../basics/lang-classes.md#this).

If *formulaExp* uses variables, their values are copied and stored in the returned formula object when it is created. When executed, the formula uses these copied values rather than the current value of the variables.

The object created by `formula` can be saved, for example, in a datastore attribute or in a blob document.


#### Example 1

A simple formula:

```qs
 var f : 4D.Function
 f = formula(1+2)

 var o : object
 o = newObject("f",f)

 result = o.f() // returns 3
```

#### Example 2

A formula using variables:

```qs
 var value : integer

 value = 10
 o = newObject("f",formula(value))
 value = 20

 result = o.f() // returns 10
```


#### Example 3

A simple formula using parameters:

```qs
 o = newObject("f",formula($1+$2))
 result = o.f(10,20) //returns 30
```


#### Example 4

A formula using a method with parameters:

```qs
 o = newObject("f",formula(myMethod))
 result = o.f("param1","param2") // equivalent to result = myMethod("param1","param2")
```


#### Example 5

Using `this`:

```qs
 o = newObject("fullName",formula(this.firstName+" "+this.lastName))
 o.firstName = "John"
 o.lastName = "Smith"
 result = o.fullName() //returns "John Smith"
```

#### Example 6

Calling a formula using object notation:

```qs
 var feta, robot : object
 var calc : 4D.Function
 robot = newObject("name","Robot","price",543,"quantity",2)
 feta = newObject("name","Feta","price",12.5,"quantity",5)

 calc = formula(this.total = this.price*this.quantity)

  //sets the formula to object properties
 feta.calc = calc
 robot.calc = calc

  //call the formula
 feta.calc() // feta = {name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object formula]"}
 robot.calc() // robot = {name:Robot,price:543,quantity:2,total:1086,calc:"[object formula]"}
```
