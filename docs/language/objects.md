---
id: objects
title: Object
---

The Object commands manage [object](../basics/lang-object.md) type elements.

## Commands

||
|---|
|[<!-- INCLUDE #_command_.newSharedObject.Syntax -->](#newsharedobject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.newSharedObject.Summary -->|
|[<!-- INCLUDE #_command_.objectCopy.Syntax -->](#objectcopy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectCopy.Summary -->|
|[<!-- INCLUDE #_command_.objectIsDefined.Syntax -->](#objectisdefined)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectIsDefined.Summary -->|
|[<!-- INCLUDE #_command_.objectRemove.Syntax -->](#objectremove)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.objectRemove.Summary -->|
|[<!-- INCLUDE #_command_.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.storage.Summary -->|
|[<!-- INCLUDE #_command_.int.Syntax -->](#int)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.int.Summary -->|
|[<!-- INCLUDE #_command_.log.Syntax -->](#log)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.log.Summary -->|
|[<!-- INCLUDE #_command_.mod.Syntax -->](#mod)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.mod.Summary -->|
|[<!-- INCLUDE #_command_.random.Syntax -->](#random)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.random.Summary -->|
|[<!-- INCLUDE #_command_.round.Syntax -->](#round)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.round.Summary -->|
|[<!-- INCLUDE #_command_.setRealComparisonLevel.Syntax -->](#setRealComparisonLevel)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.setRealComparisonLevel.Summary -->|
|[<!-- INCLUDE #_command_.sin.Syntax -->](#sin)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.sin.Summary -->|
|[<!-- INCLUDE #_command_.squareRoot.Syntax -->](#squareRoot)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.squareRoot.Summary -->|
|[<!-- INCLUDE #_command_.tan.Syntax -->](#tan)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.tan.Summary -->|
|[<!-- INCLUDE #_command_.trunc.Syntax -->](#trunc)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.trunc.Summary -->|



## newSharedObject

<!-- REF #_command_.newSharedObject.Syntax -->**newSharedObject** {( *property* : string , *value* : any {, *...property* : string , *...value* : any} ) } : object<!-- END REF -->


<!-- REF #_command_.newSharedObject.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|property|string|->|Name of property to create|
|value|integer, number, string, date, time, boolean, object, collection, picture|->|Value of property|
|Result|object|<-|New shared object|<!-- END REF -->

#### Description

The `newSharedObject` command <!-- REF #_command_.newSharedObject.Summary -->creates a new empty or prefilled shared object and returns its reference<!-- END REF -->. Adding or editing a property to this object must be surrounded by the `use...end` structure, otherwise an error is generated. Reading a property without a `use...end` structure is, however, possible. For more information, see the [Shared objects and shared collections](../basics/lang-shared) page.

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


#### Example 1

```qs
var contact : object
contact=newSharedObject("name","Smith","firstname","John")
```

#### Example 2

```qs
var s_obj : object
s_obj=newSharedObject("prop1","alpha")
use(s_obj)
    s_obj.prop1="omega"
end
```





## objectCopy

<!-- REF #_command_.objectCopy.Syntax -->**objectCopy** ( *object* : object ) : object<br/>**objectCopy** ( *object* : object , *option* : integer ) : object<br/>**objectCopy** ( *object* : object , *option* : integer , *groupWith* : object ) : object<br/>**objectCopy** ( *object* : object , *option* : integer , *groupWith* : collection ) : object<!-- END REF -->


<!-- REF #_command_.abs.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to copy|
|option |integer|->|ck shared: return a shared object|
|groupWith|object|->|Shared object to be grouped with the resulting object|
|groupWith|collection|->|Shared collection to be grouped with the resulting object|
|Result|object|<-|Deep copy of *object*|<!-- END REF -->

#### Description

The `objectCopy` command <!-- REF #_command_.objectCopy.Summary -->returns an object containing a complete (deep) copy of the properties, sub-objects and values for the *object*<!-- END REF -->.

By default, `objectCopy` returns a regular (not shared) object, even if the command is applied to a shared object. Pass the `ck shared` constant in the *option* parameter to create a shared object. In this case, you can use the *groupWith* parameter to associate the shared object with another collection or object.

The *groupWith* parameter allows you to designate a collection or an object with which the resulting object should be associated. 

:::note Notes

- `objectCopy` can be used with an entity selection object. By default if `ck shared` is omitted, a non-shareable entity selection is returned. If `ck shared` is passed, a shareable entity selection is returned. In this context, the *groupWith* option is useless since an entity selection does not have a locking identifier. 
- The same principle applies to entity selections stored inside properties of *object*. However, the command is optimized when `ck shared` is passed and a nested entity selection is shareable: the same entity selection reference is returned in the resulting object. 
- Datastore, dataclass, and entity objects are not copiable. If `objectCopy` command is called with them, a `null` value is returned

:::


#### Example 1

This example illustrates the deep copy of an object containing a sub-object:

```qs
var ob1, ob2, ob3 : object

ob1={info: {a: 20; b: 30}}  
	//ob1: {"info":{"a":20,"b":30}}
ob2=ob1 //another reference to the same object 
	//ob2: {"info":{"a":20,"b":30}}
ob3=objectCopy(ob1) //deep copy of the object
	//ob3: {"info":{"a":20,"b":30}}
	
ob1.info.b=1000 //modify ob1 and thus ob2
ob3.info.a=5000 //modify the deep copy
	//ob1: {"info":{"a":20,"b":1000}}
	//ob2: {"info":{"a":20,"b":1000}}
	//ob3: {"info":{"a":5000,"b":30}}

```


#### Example 2

We want to copy the regular (non shared) *person* object into the *sharedPerson* shared object. To do this, we must create a shared copy of the object (*sharedPerson*).


```qs
 var person, copy, sharedPerson : object
 var text : string
 
 text=documentToString(file("/SOURCES/person.txt")
 person=jsonParse(text) //person is a standard object
 sharedPerson=newSharedObject()
 copy=objectCopy(person,ck shared) //copy is a shared object
 
  //So it can be put in sharedPerson
 use(sharedObject)
    sharedObject.person=copy
 end

```

#### Example 3

We want to copy *sharedObj* in *sharedColl* but since they belong to different shared groups, a direct copy would result in an error. We must make a copy of *sharedObj* and designate sharedColl* as shared group for the copy. 

```qs
 var sharedObj, objCopy : object
 var sharedColl : collection
 
  //sharedObj belongs to a shared group
 sharedObj=newSharedObject("lastname","Smith","address",newSharedObject("city","New York"))
  //sharedColl belongs to another shared group
 sharedColl=newSharedCollection(newSharedObject("lastname","Brown"))
 
 objCopy=objectCopy(sharedObj,ck shared,sharedColl)
  //objCopy is now in the same shared group as sharedColl
 
  //So objCopy can be put in sharedColl without error
 use(sharedColl)
    sharedColl.push(objCopy)
 end
```

## objectIsDefined

<!-- REF #_command_.objectIsDefined.Syntax -->**objectIsDefined** ( *object* : object {, *property* : string } ) : boolean<!-- END REF -->


<!-- REF #_command_.objectIsDefined.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to work with|
|property |string|->|If passed = property to check, if omitted = check object|
|Result|boolean|<-|<li>If *property* omitted: true if *object* is defined, otherwise false.</li><li>If *property* passed: true if *property* is defined, otherwise false.</li>|<!-- END REF -->

<!-- END REF -->

#### Description

The `objectIsDefined` command <!-- REF #_command_.objectIsDefined.Summary -->returns `true` if *object* or *property* is defined, and `false` otherwise<!-- END REF -->.

By default, if you omit the *property* parameter, the command checks whether the *object* is defined. An object is defined if its contents has been initialized. 

:::note

An object can be **defined** but **empty**. To find out if an object is undefined or empty, use the `objectIsEmpty` command. 

:::

If you pass the *property* parameter, the command checks whether this property exists in *object*. Note that the *property* parameter is case sensitive. If the *property* is not found at the first level of *object*, the command does nothing. 

#### Example 1 

```qs
 var obj : object
 var def : boolean
 def=objectIsDefined(obj) //false, obj is not initialized
 
 obj=newObject("Name","Martin")
 objectRemove(obj, "Name")
 def=objectIsDefined(obj) //true, obj is empty but initialized
```

#### Example 2 

```qs
 var obj : object
 
 obj=newObject("Name","Smith", "Age", 42)  
 ...
 if(objectIsDefined(obj,"Age")
 	...
 end
```

This test is equivalent to:

```qs
 if(valueType(obj,"Age")!=Is undefined)
```

#### See also

[objectIsEmpty](#objectisempty)


## objectRemove

<!-- REF #_command_.objectRemove.Syntax -->**objectRemove** ( *object* : object , *property* : string )<!-- END REF -->


<!-- REF #_command_.objectRemove.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|->|Object to edit|
|property |string|->|Name of property to remove|
<!-- END REF -->

#### Description

The `objectRemove` command <!-- REF #_command_.objectRemove.Summary -->removes *property* from the *object*<!-- END REF -->.

The command removes the property as well as its current value. 

In the *property* parameter, pass the label of the property to be removed. Note that the *property* parameter is case sensitive. 

If the *property* is not found at the first level of *object*, the command does nothing. 

#### Example  

```qs
 var obj : object
 obj={name : "Smith", info: {a: 20, b: 30}}
 objectRemove(obj, "name")
	//obj: {"info": {"a": 20, "b": 30}} 
 objectRemove(obj.info, "b")
	//obj: {"info": {"a": 20}} 
```




## storage

<!-- REF #_command_.storage.Syntax -->**storage** : object<!-- END REF -->


<!-- REF #_command_.storage.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Catalog of shared objects and shared collections registered in `storage`|<!-- END REF -->

<!-- END REF -->

#### Description

The `storage` command <!-- REF #_command_.storage.Summary -->returns the catalog of shared objects or shared collections that you have registered in the `storage` object on the current application<!-- END REF -->.

The catalog returned by `storage` is automatically created by Qodly and is available to all processes of the application, including preemptive processes. There is one `storage` shared object per server.

Use the `storage` catalog to reference any shared objects or shared collections that you want to be used from any preemptive or standard process. To register a shared object or a shared collection in the catalog, add its reference to the shared object returned by `storage`.

Since the catalog returned by `storage` is a shared object, it follows the rules described in the [Shared objects and shared collections](../basics/lang-shared) section (but with some specificities):

- This object can only contain shared objects and shared collections. Trying to add other kinds of values (non-shared objects or collections, null, scalar values) will generate an error.
- Adding a property to this object must be surrounded by the `use...end` structure, otherwise an error is returned. Reading an attribute outside of a `use...end` structure is, however, possible.
- When surrounded by the `use...end` structure, first-level attributes of `storage` are locked for other processes.
- Unlike standard shared objects, the object returned by `storage` will NOT share its locking identifier with shared objects or collections added as attributes (and thus will not be locked).

#### Example 1 

Initializing the `storage` object:

```qs
 use(storage)
    storage.counters=newSharedObject("customers",0,"invoices",0)
 end
```

#### Example 2 

A standard way to set `storage` values:

```qs
 use(storage)
    storage.mydata:=newSharedObject
    use(storage.mydata)
       storage.mydata.prop1="Smith"
       storage.mydata.prop2=100
    end
 end
```

#### Example 3

`storage` allows implementing a singleton with a *lazy initialization*, as shown in the following example.


 declare -> counterValue : integer
 var counter : object //create a reference to counter for the process
 
 if(counter==null) //if this reference is null, get if from storage
    use(storage) //Use of storage needed only once!
       if(storage.counter==null)
          storage.counter=newSharedObject("operation",0)
       end
       counter=storage.counter //Get the reference of the counter shared object
    end
 end
 use(counter) //directly use the shared object counter (no need to use storage!)
    counter.operation=counter.operation+1
    counterValue=counter.operation
 end

:::note

For more information about singleton patterns, you can refer to [this Wikipedia page](https://en.wikipedia.org/wiki/Singleton_pattern).

:::



## cos

<!-- REF #_command_.cos.Syntax -->**cos** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.cos.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number, in radians, whose cosine is returned|
|Result|number|<-|Cosine of number|<!-- END REF -->

#### Description

`cos` <!-- REF #_command_.cos.Summary --> returns the cosine of *number*, where *number* is expressed in radians<!-- END REF -->. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### See also

[`arctan`](#arctan)<br/>
[`sin`](#sin)<br/>
[`tan`](#tan)

## dec

<!-- REF #_command_.dec.Syntax -->**dec** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.dec.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number whose decimal portion is returned|
|Result|number|<-|Decimal part of number|<!-- END REF -->

#### Description

`dec` <!-- REF #_command_.dec.Summary -->returns the decimal (fractional) portion of *number*<!-- END REF -->. The value returned is always positive or zero.

#### Example

The following example takes a monetary value expressed as a number, and extracts the dollar part and the cents part. If *vAmount* is 7.31, then *vDollars* is set to 7 and *vCents* is set to 31:

```qs
 var vDollars, vCents, vAmount : number
 vDollars=int(vAmount) //Get the dollars
 vCents=dec(vAmount)*100 // Get the fractional part

```

#### See also

[`int`](#int)

## exp

<!-- REF #_command_.exp.Syntax -->**exp** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.exp.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number to evaluate|
|Result|number|<-|Natural log base by the power of number|<!-- END REF -->

#### Description

`exp` <!-- REF #_command_.exp.Summary -->raises the natural log base (e = 2.71828...) by the power of *number*<!-- END REF -->. `exp` is the inverse function of [`log`](#log).

:::note

Qodly provides the predefined constant *e number* (2.71828...).

:::

#### Example

The following example assigns the exponential of 1 to vrE (the log of vrE is 1):

```qs
 var vrE : number
 vrE=exp(1) // vrE gets 2.17828...
```

#### See also

[`log`](#log)

## int

<!-- REF #_command_.int.Syntax -->**int** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.int.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number whose integer portion is returned|
|Result|number|<-|Integer portion of number|<!-- END REF -->

#### Description

`int` <!-- REF #_command_.int.Summary -->returns the integer portion of *number*<!-- END REF -->. `int` truncates a negative *number* away from zero.

#### Example

The following example illustrates how `int` works for both positive and negative numbers. Note that the decimal portion of the number is removed:

```qs
 var vlResult : number
 vlResult=int(123.4) // vlResult gets 123
 vlResult=int(-123.4) // vlResult gets –124
```

#### See also

[`dec`](#dec)

## log

<!-- REF #_command_.log.Syntax -->**log** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.log.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number for which to return the log|
|Result|number|<-|Log of number|<!-- END REF -->

#### Description

`log` <!-- REF #_command_.log.Summary -->returns the natural (Napierian) log of *number*<!-- END REF -->. `log` is the inverse function of [`exp`](#exp).

:::note

Qodly provides the predefined constant *e number* (2.71828...).

:::

#### Example

```qs
 var vLog : string
 vLog=string(log(exp(1))
 
```

#### See also

[`exp`](#exp)

## mod

<!-- REF #_command_.mod.Syntax -->**mod** ( *number1* : integer, *number2* : integer) : number<!-- END REF -->


<!-- REF #_command_.mod.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number1|integer|->|Number to divide|
|number2|integer|->|Number to divide by|
|Result|number|<-|Returns the remainder|<!-- END REF -->

#### Description

The `mod` command <!-- REF #_command_.mod.Summary -->returns the remainder of the integer division of *number1* by *number2*<!-- END REF -->.

Notes:

* `mod` accepts integer and number expressions. However, if *number1* or *number2* are real numbers, the numbers are first rounded and then `mod` is calculated.

* Be careful when using `mod` with real numbers of a large size (above 2^31) since, in this case, its operation may reach the limits of the calculation capacities of standard processors.

You can also use the % operator to calculate the remainder.

:::caution

The % operator returns valid results with integer expressions. To calculate the modulo of real values, you must use the `mod` command.

:::

#### Example

The following example illustrates how the `mod` function works with different arguments. Each line assigns a number to the vlResult variable. The comments describe the results:

```qs
 var vlResult : number
 vlResult=mod(3,2) // vlResult gets 1
 vlResult=mod(4,2) // vlResult gets 0
 vlResult=mod(3.5,2) // vlResult gets 0
 
```

## round

<!-- REF #_command_.round.Syntax -->**round** ( *round* : number, *places* : integer) : number<!-- END REF -->


<!-- REF #_command_.round.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aRound|number|->|Number to be rounded|
|places|integer|->|Number of decimal places used for rounding|
|Result|number|<-|Number rounded to the number of decimal places specified by *places*|<!-- END REF -->

#### Description

`round` <!-- REF #_command_.round.Summary -->returns *number* rounded to the number of decimal places specified by *places*<!-- END REF -->.

If *places* is positive, *number* is rounded to *places* decimal places. If *places* is negative, *number* is rounded on the left of the decimal point.

If the digit following places is 5 though 9, `round` rounds toward positive infinity for a positive number, and toward negative infinity for a negative number. If the digit following places is 0 through 4, `round` rounds toward zero.

#### Example

The following example illustrates how `round` works with different arguments:

```qs
 var vlResult : number
 vlResult=round(16.857,2) // vlResult gets 16.86
 vlResult=round(32345.67,-3) // vlResult gets 32000
 vlResult=round(29.8725,3) // vlResult gets 29.873
 vlResult=round(-1.5,0) // vlResult gets –2
 
```

#### See also

[`trunc`](#trunc)

## random

<!-- REF #_command_.random.Syntax -->**random**: integer<!-- END REF -->


<!-- REF #_command_.random.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|integer|<-|Random number|<!-- END REF -->

#### Description

`random` <!-- REF #_command_.random.Summary -->returns a random integer value between 0 and 32,767 (inclusive)<!-- END REF -->.

To define a range of integers from which the random value will be chosen, use this formula:

```qs
 (random%(vEnd-vStart+1))+vStart
 
```

The value *vStart* is the first number in the range, and the value *vEnd* is the last.

#### Example

The following example assigns a random integer between 10 and 30 to the *vlResult* variable:

```qs
 var vlResult : integer
 vlResult=(random%21)+10
 
```

## setRealComparisonLevel

<!-- REF #_command_.setRealComparisonLevel.Syntax -->**setRealComparisonLevel** ( *epsilon* : number )<!-- END REF -->


<!-- REF #_command_.setRealComparisonLevel.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|epsilon|number|->|Epsilon value for real equality comparisons|<!-- END REF -->

#### Description

The `setRealComparisonLevel` command <!-- REF #_command_.setRealComparisonLevel.Summary -->sets the *epsilon* value used by Qodly to compare real values and expressions for equality<!-- END REF -->.

A computer always performs approximative real computations; therefore, testing real numbers for equality should take this approximation into account. Qodly does this when comparing real numbers by testing whether or not the difference between the two numbers exceeds a certain value. This value is called the epsilon and works this way:

Given two real numbers *a* and *b*, if `abs(a-b)` is greater than the epsilon, the numbers are considered not equal; otherwise, the numbers are considered equal.

By default, Qodly sets the epsilon value to 10 power minus 6 (10^-6). Please note that the epsilon value should always be positive. Examples:

* 0.00001=0.00002 returns false, because the difference 0.00001 is greater than 10^-6.
* 0.000001=0.000002 returns true, because the difference 0.000001 is not greater than 10^-6.
* 0.000001=0.000003 returns false, because the difference 0.000002 is greater than 10^-6.

Using `setRealComparisonLevel`, you can increase or decrease the epsilon value as you require.

:::note

The command will have no effect if *epsilon* > 10^-3 or if *epsilon* < 0.

:::


Changing the epsilon only affects real number comparison for equality. It has no effect on other real computations nor on the display of real values. 


:::caution

This command should be used in specific cases, such as sorting on an attribute with values less than 10^-6. Usually, you will not need to change the default epsilon value.

:::


:::note

The `setRealComparisonLevel` command has no effect on queries and sorts performed with attributes of the Number type. It only applies the Qodly language.

:::

## sin

<!-- REF #_command_.sin.Syntax -->**sin** ( *number* : number ) : number <!-- END REF -->


<!-- REF #_command_.sin.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number, in radians, whose sine is returned|
|Result|number|<-|Sine of number|<!-- END REF -->

#### Description

`sin` <!-- REF #_command_.sin.Summary --> returns the sine of *number*, where *number* is expressed in radians<!-- END REF -->. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### See also

[`arctan`](#arctan)<br/>
[`cos`](#cos)<br/>
[`tan`](#tan)

## squareRoot

<!-- REF #_command_.squareRoot.Syntax -->**squareRoot** ( *number* : number) : number<!-- END REF -->


<!-- REF #_command_.squareRoot.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number whose square root is calculated|
|Result|number|<-|Square root of the number|<!-- END REF -->

#### Description

`squareRoot` <!-- REF #_command_.squareRoot.Summary -->returns the square root of *number*<!-- END REF -->.

#### Example 1

The following example assigns the value 1.414213562373 to the variable *vrSquareRootOfTwo*.

```qs
 var vrSquareRootOfTwo : number
 vrSquareRootOfTwo=squareRoot(2)
 
```

#### Example 2

The following method returns the hypotenuse of the right triangle whose two legs are passed as parameters:


```qs
 declare ( legA : number , legB : number) -> hypothenuse : number
 hypothenuse=squareRoot((legA^2)+(legB^2)) 
```


## tan

<!-- REF #_command_.tan.Syntax -->**tan** ( *number* : number ) : number <!-- END REF -->


<!-- REF #_command_.tan.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number, in radians, whose tangent is returned|
|Result|number|<-|Tangent of number|<!-- END REF -->

#### Description

`tan` <!-- REF #_command_.tan.Summary --> returns the tangent of *number*, where *number* is expressed in radians<!-- END REF -->. 

:::note

Qodly provides the predefined constants `Pi`, `Degree`, and `Radian`. `Pi` returns the Pi number (3.14159...), `Degree` returns one degree expressed in radians (0.01745...), and `Radian` returns one radian expressed in degrees (57.29577...).

:::

#### See also

[`arctan`](#arctan)<br/>
[`cos`](#cos)<br/>
[`sin`](#sin)

## trunc

<!-- REF #_command_.trunc.Syntax -->**trunc** ( *number* : number, *places* : integer) : number<!-- END REF -->


<!-- REF #_command_.trunc.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number to be truncated|
|places|integer|->|Number of decimal places used for truncating|
|Result|number|<-|Number with its decimal part truncated to the number of decimal places specified by *places*|<!-- END REF -->

#### Description

`trunc` <!-- REF #_command_.trunc.Summary -->returns *number* with its decimal part truncated to the number of decimal places specified by *places*<!-- END REF -->. `trunc` always truncates toward negative infinity.

If *places* is positive, *number* is truncated to *places* decimal places. If *places* is negative, number is truncated on the left of the decimal point.

#### Example

```qs
 var vlResult : number
 vlResult=trunc(216.897,1) // vlResult gets 216.8
 vlResult=trunc(216.897,-1) // vlResult gets 210
 vlResult=trunc(-216.897,1) // vlResult gets –216.9
 vlResult=trunc(-216.897,-1) // vlResult gets –220
 
```

#### See also

[`round`](#round) 