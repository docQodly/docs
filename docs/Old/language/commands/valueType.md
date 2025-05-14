---
id: valueType
title: valueType
---


<!-- REF #_command_.valueType.Syntax -->**valueType** ( *expression* : any ) : integer<!-- END REF -->

<!-- REF #_command_.valueType.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|any|&#8594;|Expression whose resulting value to be tested|
|Result|integer|&#8592;|Data type number|<!-- END REF -->


#### Description

The `valueType` command <!-- REF #_command_.valueType.Summary -->returns the type of the value resulting from the evaluation of the *expression* you passed as parameter<!-- END REF -->. 

The command returns a numeric value that can be compared with one of the following constants provided by Qodly:

|Constant|Value|
|:----|:----|
|kBlob|30|
|kBoolean|6|
|kCollection|42|
|kDate|4|
|kInteger|9|
|kNull|255|
|kObject|38|
|kPicture|3|
|kNumber|1|
|kString|2|
|kTime|11|
|kUndefined|5|
|kVariant|12|


This command is designed to return the type of a scalar expression, i.e. the value stored in or returned by the *expression* parameter. In particular, it can be applied to the following Qodly expressions:

- object properties (emp.name),
- collection elements (myCol[5]).

:::note

Numerical object properties are always considered number values:

```
var o : object
var vType : integer
o = newObject("value",42)
vType = valueType(o.value) //vType = kNumber
```

::: 

#### Example 1

You want to handle the various possible types of an object property value:

```qs
switch
	:(valueType(o.value) == kNumber)
  //handle a numeric value
    :(valueType(o.value) == kString)
  //handle a string
    :(valueType(o.value) == kObject)
  //handle a sub-object
       ...
end
```

#### Example 2

You want to sum up all numeric values in a collection:

```qs
var col : collection
var colSum : number
col = newCollection("Hello",20,"World2",15,50,currentDate,true,10)
for(i,0,col.length-1) //-1 since collections start at 0
	if(valueType(col[i]) == kNumber)
       colSum = colSum+col[i]
    end
end
```


