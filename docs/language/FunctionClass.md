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
 f = newObject
 f.comp = formula(1+2)
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
 o = f.comp //returns the formula object in o
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
 f = newObject
 f.comp = formula(1+$1)
 f.comp(5) //returns 6
```

Or using the [.call()](#call) function:

```qs
 var f : 4D.Function
 var r : integer
 f = formula($1+$2)
 r = f.call(null,5,5) //r: 10
 r = f.call(null,10,yearOf(currentDate)) //r: 2033
```

#### Parameters to a single method

For more convenience, when the formula is made of a single method, parameters can be omitted in the formula object initialization. They can just be passed when the formula is called. For example:

```qs
 var f : 4D.Function
 var t : string

 f = formula(myMethod)
  //Writing formula(myMethod($1,$2)) is not necessary
 t = f.call(null,"Hello","World") //returns "Hello World"
 t = f.call() //returns "How are you?"

  //myMethod
 declare (param1 : string, param2 : string)->return : string
 if(countParameters = 2)
    return = param1+" "+param2
 else
    return = "How are you?"
 end
```

Parameters are received within the method, in the order they are specified in the call.


### Functions and properties


||
|---|
|[<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.apply().Summary -->|
|[<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.call().Summary --> |
|[<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.source.Summary --> |




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
 f = formula($1+$2+$3)

 c = newCollection(10,20,30)
 result = f.apply(null,c) // returns 60
```


#### Example 2

```qs
 var calc : 4D.Function
 var feta, robot : object
 robot = newObject("name","Robot","price",543,"quantity",2)
 feta = newObject("name","Feta","price",12.5,"quantity",5)

 calc = formula(this.total = this.price*this.quantity)

 calc.apply(feta) // feta = {name:Feta,price:12.5,quantity:5,total:62.5}
 calc.apply(robot) // robot = {name:Robot,price:543,quantity:2,total:1086}
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
 f = formula(uppercase($1))
 result = f.call(null,"hello") // returns "HELLO"
```

#### Example 2

```qs
 var f : 4D.Function
 var o : object
 var result : integer
 o = newObject("value",50)
 f = formula(this.value*2)
 result = f.call(o) // returns 100
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
 of = formula(string(currentTime,HH MM AM PM))
 tf = of.source //"string(currentTime,HH MM AM PM)"
```



<!-- END REF -->
