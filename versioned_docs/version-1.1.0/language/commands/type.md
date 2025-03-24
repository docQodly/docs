---
id: type
title: type
---



<!-- REF #_command_.type.Syntax -->**type** ( *var* : any ) : integer<!-- END REF -->


<!-- REF #_command_.type.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|var|any|&#8594;|Variable to be tested|
|Result|integer|&#8592;|Data type number|<!-- END REF -->

#### Description

The `type` command <!-- REF #_command_.type.Summary -->returns a numeric value that indicates the type of variable you have passed in the *var* parameter<!-- END REF -->. 

Qodly provides the following predefined constants:

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

You can apply the `type` function to variables and parameters of a method.

:::note

You cannot apply the `type` function to scalar expressions such as object properties (emp.name) or collection elements (myColl[5]). To do this, you must use the [`valueType`](#valuetype) command.

:::



