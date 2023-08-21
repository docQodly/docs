---
id: FunctionClass
title: Function
---


A **`4D.Function`** object contains a piece of code that can be executed from an object, either using the `()` operator, or using the [`apply()`](#apply) and [`call()`](#call) functions. QodlyScript proposes three kinds of `Function` objects:

- **native functions**, i.e. built-in functions from various 4D classes such as `collection.sort()` or `file.copyTo()`.
- **user functions**, created in user [classes](basics/lang-classes.md) using the [Function keyword](basics/lang-classes.md#function).
- **formula functions**, i.e. functions that can execute any formula.  



### formula objects

The [formula](#formula) and [formulaFromString](#formulafromstring) commands allow you to create **formula functions,** i.e. `4D.Function` objects to execute any expression or code expressed as text.

formula objects can be encapsulated in object properties:

```qs
 var f : 4D.Function
 f=newObject
 f.comp=formula(1+2)
```

This property is an "object function", i.e. a function which is bound to its parent object. To execute a function stored in an object property, use the **()** operator after the property name, such as:

```qs
 f.comp() //returns 3
```

Syntax with brackets is also supported:

```qs
 f["comp"]() //returns 3
```

Note that, even if it does not have parameters (see below), an object function to be executed must be called with () parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):

```qs
 o=f.comp //returns the formula object in o
```

You can also execute a function using the [`apply()`](#apply) and [`call()`](#call) functions:

```qs
 f.comp.apply() //returns 3
```

#### Passing parameters

You can pass parameters to your formulas using sequentially numbered "$" variables: **$1**, **$2**, **$3**, and so on. The numbering of the variables represents the order of the parameters.

 For example, you can write:

```qs

 var f : object
 f=newObject
 f.comp=formula(1+$1)
 f.comp(5) //returns 6
```

Or using the [.call()](#call) function:

```qs
 var f : 4D.Function
 var r : integer
 f=formula($1+$2)
 r=f.call(null,5,5) //r: 10
 r=f.call(null,10,yearOf(currentDate)) //r: 2033
```

#### Parameters to a single method

For more convenience, when the formula is made of a single method, parameters can be omitted in the formula object initialization. They can just be passed when the formula is called. For example:

```qs
 var f : 4D.Function
 var t : string

 f=formula(myMethod)
  //Writing formula(myMethod($1,$2)) is not necessary
 t=f.call(null,"Hello","World") //returns "Hello World"
 t=f.call() //returns "How are you?"

  //myMethod
 declare (param1 : string, param2 : string)->return : string
 if(countParameters=2)
    return=param1+" "+param2
 else
    return="How are you?"
 end
```

Parameters are received within the method, in the order they are specified in the call.


### Commands


||
|---|
|[<!-- INCLUDE #_command_.formula.Syntax -->](#formula)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.formula.Summary -->|
|[<!-- INCLUDE #_command_.formula from string.Syntax -->](#formulafromstring)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.formula from string.Summary --> |


### Functions and properties


||
|---|
|[<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.apply().Summary -->|
|[<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.call().Summary --> |
|[<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.source.Summary --> |




## formula


<!-- REF #_command_.formula.Syntax -->**formula** ( *formulaExp* : expression ) : 4D.Function<!-- END REF -->


<!-- REF #_command_.formula.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formulaExp|expression|->|formula to be returned as object|
|Result|4D.Function|<-|Native function encapsulating the formula|<!-- END REF -->


#### Description

The `formula` command <!-- REF #_command_.formula.Summary -->creates a `4D Function` object based upon the *formulaExp* expression<!-- END REF -->. *formulaExp* [expression](basics/lang-expressions.md) can be as simple as a single value or complex, such as a project method with parameters.

The returned formula can be called with:

*	[`.call()`](#call) or [`.apply()`](#apply) functions, or
*	object notation syntax (see [formula object](#formula-object)).

```qs
 var f : 4D.Function
 f=formula(1+2)
 o=newObject("myFormula",f)

  //three different ways to call the formula
 f.call(o) //returns 3
 f.apply(o) //returns 3
 o.myFormula() //returns 3
```

You can pass [parameters](#passing-parameters) to the `formula`, as seen below in [example 4](#example-4).

You can specify the object on which the formula is executed, as seen in [example 5](#example-5). The properties of the object can then be accessed via [`this`](language.md#this).

If *formulaExp* uses variables, their values are copied and stored in the returned formula object when it is created. When executed, the formula uses these copied values rather than the current value of the variables. 

The object created by `formula` can be saved, for example, in a datastore attribute or in a blob document.


#### Example 1

A simple formula:

```qs
 var f : 4D.Function
 f=formula(1+2)

 var o : object
 o=newObject("f",f)

 result=o.f() // returns 3
```

#### Example 2

A formula using variables:

```qs
 var value : integer

 value=10
 o=newObject("f",formula(value))
 value=20

 result=o.f() // returns 10
```


#### Example 3

A simple formula using parameters:

```qs
 o=newObject("f",formula($1+$2))
 result=o.f(10,20) //returns 30
```


#### Example 4

A formula using a method with parameters:

```qs
 o=newObject("f",formula(myMethod))
 result=o.f("param1","param2") // equivalent to result=myMethod("param1","param2")
```


#### Example 5

Using `this`:

```qs
 o=newObject("fullName",formula(this.firstName+" "+this.lastName))
 o.firstName="John"
 o.lastName="Smith"
 result=o.fullName() //returns "John Smith"
```

#### Example 6

Calling a formula using object notation:

```qs
 var feta, robot : object
 var calc : 4D.Function
 robot=newObject("name","Robot","price",543,"quantity",2)
 feta=newObject("name","Feta","price",12.5,"quantity",5)

 calc=formula(this.total=this.price*this.quantity)

  //sets the formula to object properties
 feta.calc=calc
 robot.calc=calc

  //call the formula
 feta.calc() // feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object formula]"}
 robot.calc() // robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object formula]"}
```




## formulaFromString

<!-- REF #_command_.formula from string.Syntax -->**formulaFromString**( *formulaString* : string ) : 4D.Function<!-- END REF -->


<!-- REF #_command_.formula from string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formulaString|string|->|string formula to be returned as object|
|Result|4D.Function|<-|Native object encapsulating the formula|<!-- END REF -->


#### Description

The `formula from string` command <!-- REF #_command_.formula from string.Summary -->creates a `4D.Function` object based upon *formulaString*<!-- END REF -->. The *formulaString* [expression](basics/lang-expressions.md) can be as simple as a single value or complex, such as a project method with parameters.

This command is similar to [`formula`](#formula), except that it handles a text-based formula. In most cases, it is recommended to use the `formula` command. `formulaFromString` should only be used when the original formula was expressed as text (e.g., stored externally in a JSON file). 

:::note

This command does not support the use of variables in *formulaString*. An attempt to access a variable with `formulaFromString` will result in an error (-10737).

:::

<!-- REF FunctionClass.apply().Desc -->
## .apply()

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : object { , *formulaParams* : collection } ) : any<!-- END REF -->


<!-- REF #FunctionClass.apply().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|thisObj|object|->|Object to be returned by `this` in the formula|
|formulaParams |collection|->|Collection of values to be passed as $1...$n when `formula` is executed|
|Result|any|<-|Value from formula execution|<!-- END REF -->


#### Description

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `formula` or `formulaFromString` commands.


In the *thisObj* parameter, you can pass a reference to the object to be used as `this` within the formula.

You can also pass a collection to be used as $1...$n parameters in the formula using the optional *formulaParams* parameter.

Note that `.apply()` is similar to [`.call()`](#call) except that parameters are passed as a collection. This can be useful for passing calculated results.


#### Example 1

```qs
 var f : 4D.Function
 f=formula($1+$2+$3)

 c=newCollection(10,20,30)
 result=f.apply(null,c) // returns 60
```


#### Example 2

```qs
 var calc : 4D.Function
 var feta, robot : object
 robot=newObject("name","Robot","price",543,"quantity",2)
 feta=newObject("name","Feta","price",12.5,"quantity",5)

 calc=formula(this.total=this.price*this.quantity)

 calc.apply(feta) // feta={name:Feta,price:12.5,quantity:5,total:62.5}
 calc.apply(robot) // robot={name:Robot,price:543,quantity:2,total:1086}
```

<!-- END REF -->


<!-- REF FunctionClass.call().Desc -->
## .call()


<!-- REF #FunctionClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : object { , ...*params* : any } ) : any<!-- END REF -->


<!-- REF #FunctionClass.call().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|thisObj|object|->|object to be returned by `this` in the formula|
|params |any|->|Value(s) to be passed as $1...$n when formula is executed|
|Result|any|<-|Value from formula execution|<!-- END REF -->


#### Description

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `formula` or `formulaFromString` commands.

In the *thisObj* parameter, you can pass a reference to the object to be used as `this` within the formula.

You can also pass values to be used as *$1...$n* parameters in the formula using the optional *params* parameter(s).

Note that `.call()` is similar to [`.apply()`](#apply) except that parameters are passed directly.

#### Example 1

```qs
 var f : 4D.Function
 var result : string
 f=formula(uppercase($1))
 result=f.call(null,"hello") // returns "HELLO"
```

#### Example 2

```qs
 var f : 4D.Function
 var o : object
 var result : integer
 o=newObject("value",50)
 f=formula(this.value*2)
 result=f.call(o) // returns 100
```

<!-- END REF -->



<!-- REF FunctionClass.source.Desc -->
## .source

<!-- REF #FunctionClass.source.Syntax -->**.source** : string <!-- END REF -->


#### Description

The `.source` property <!-- REF #FunctionClass.source.Summary -->contains the source expression of the `formula` as text<!-- END REF -->.

This property is **read-only**.

#### Example

```qs
 var of : 4D.Function
 var tf : string
 of=formula(string(currentTime,HH MM AM PM))
 tf=of.source //"string(currentTime,HH MM AM PM)"
```



<!-- END REF -->
