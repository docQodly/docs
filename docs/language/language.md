---
id: language
title: Language
---


## Language Commands

||
|---|
|[<!-- INCLUDE #_command_.4D.Syntax -->](#4d)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.4D.Summary -->|
|[<!-- INCLUDE #_command_.callChain.Syntax -->](#callchain)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.callChain.Summary -->|
|[<!-- INCLUDE #_command_.copyParameters.Syntax -->](#copyparameters)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.copyParameters.Summary -->|
|[<!-- INCLUDE #_command_.countParameters.Syntax -->](#countparameters)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.countParameters.Summary -->|
|[<!-- INCLUDE #_command_.cs.Syntax -->](#cs)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.cs.Summary -->|
|[<!-- INCLUDE #_command_.currentMethodName.Syntax -->](#currentmethodname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.currentMethodName.Summary -->|
|[<!-- INCLUDE #_command_.null.Syntax -->](#null)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.null.Summary -->|
|[<!-- INCLUDE #_command_.super.Syntax -->](#super)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.super.Summary -->|
|[<!-- INCLUDE #_command_.this.Syntax -->](#this)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.this.Summary -->|
|[<!-- INCLUDE #_command_.trace.Syntax -->](#trace)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.trace.Summary -->|
|[<!-- INCLUDE #_command_.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.type.Summary -->|
|[<!-- INCLUDE #_command_.undefined.Syntax -->](#undefined)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.undefined.Summary -->|
|[<!-- INCLUDE #_command_.valueType.Syntax -->](#valuetype)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.valueType.Summary -->|

## 4D

<!-- REF #_command_.4D.Syntax -->**4D** : object<!-- END REF -->


<!-- REF #_command_.4D.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Class Store containing all built-in 4D classes|<!-- END REF -->

#### Description

The `4D` command <!-- REF #_command_.4D.Summary -->returns a *Class Store* object containing all available built-in classes in the 4D application<!-- END REF -->. 

A class store object contains a specific set of classes. 

#### See also

[`cs`](#cs)

## cs

<!-- REF #_command_.cs.Syntax -->**cs** : object<!-- END REF -->


<!-- REF #_command_.cs.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Class Store containing all classes of the current database|<!-- END REF -->

#### Description

The `cs` command <!-- REF #_command_.cs.Summary -->returns a Class Store object containing all user classes defined in the current database or component<!-- END REF -->. This command is necessary to instantiate an object from a user class. 

#### See also

[`4D`](#4d)<br/>
[`super`](#super)

## currentMethodName

<!-- REF #_command_.currentMethodName.Syntax -->**currentMethodName** : string<!-- END REF -->


<!-- REF #_command_.currentMethodName.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|string|<-|Calling method name|<!-- END REF -->

#### Description

The `currentMethodName` command <!-- REF #_command_.currentMethodName.Summary -->returns the method name where it has been invoked<!-- END REF -->. This command is useful for debugging generic methods.

According to the calling method type, the returned string can be as follows:

|Calling Method|Returned string|
|:----|:----|
|Database Method|MethodName|
|Trigger|Trigger on [TableName]|
|Project Method|MethodName|
|Table Form Method|[TableName].FormName|
|Project Form Method|FormName|
|Table Form Object Method|[TableName].FormName.ObjectName|
|Project Form Object Method|FormName.ObjectName|
|Class Constructor|ClassName:constructor|
|Class Function|ClassName.FunctionName|
|Component Project Method|MethodName|
|Component Project Form Method|FormName(ComponentName)|
|Component Project Form Object Method|FormName(ComponentName).ObjectName(ComponentName)|

This command cannot be called from within a Qodly formula.

:::note

For this command to be able to operate in compiled mode, it must not be included in code for which range checking has been disabled. 

:::

## null

<!-- REF #_command_.null.Syntax -->**null** : null<!-- END REF -->


<!-- REF #_command_.null.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|null|<-|Null value|<!-- END REF -->

#### Description

`null`<!-- REF #_command_.null.Summary -->returns the Null type value **null**<!-- END REF -->.

This function allows you to assign or compare the **null** value to the following language elements:

|Language elements|Comments|
|:----|:----|
|object property values|Comparing Null to an object property returns true if the property value is null, and false otherwise. To simplify code, comparing Null also returns true if the property does not exist in the object (i.e. is [`undefined`](#undefined)), see example 4.collection elements|When a collection is expanded by adding non-adjacent elements, any intermediary elements get automatically the null value.|
|object variables|See (*) below|
|collection variables|See (*) below|
|pointer variables|See (*) below|
|picture variables|(*) Assigning the null value to such a variable type clears its contents. In this case, it has the same effect as calling the [`clearVariable`](#clearvariable) command.|
|variant variables| |

## super

## this

<!-- REF #_command_.this.Syntax -->**this** : object<!-- END REF -->


<!-- REF #_command_.this.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-|Current element or object|<!-- END REF -->

#### Description

The `this` command <!-- REF #_command_.this.Summary -->returns a reference to the currently processed object<!-- END REF -->. 

The command is designed to be used in the following contexts:

* A list box associated to a collection or an entity selection, during the On Display Detail or the On Data Change events.
In this context, the command returns a reference to the collection element or entity accessed by the list box to display the current row.
* The execution of a formula object created by the Formula or Formula from string commands.
In this context, the command returns a reference to the object currently processed by the formula.

In any other context, the command returns **Null**.

Within supported contexts, you will access object/collection element properties or entity attributes through `This.<propertyPath>`. For example, This.name or This.employer.lastName are valid pathes to object, element or entity properties.

#### See also

[`super`](#super)

## trace

<!-- REF #_command_.trace.Syntax -->**trace** <!-- END REF -->


<!-- REF #_command_.trace.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|||||<!-- END REF -->

#### Description

You use `trace` <!-- REF #_command_.trace.Summary -->to trace methods during the development of a database<!-- END REF -->. 

The `trace` command turns on the Qodly debugger for the current process. The Debugger window is displayed before the next line of code is executed, and continues to be displayed for each line of code that is executed. You can also turn on the debugger by pressing Alt+Shift+right-click (Windows) or Control+Option+Command+click (Macintosh) while code is executing.

The `trace` command is ignored when the executing code is compiled. 

If you call `trace` from a project method executed within the context of a Stored Procedure, the debugger window appears on the Server machine.

Do not place `trace` calls when using a form whose On Activate and On Deactivate events have been enabled. Each time the debugger window appears, these events will be invoked; you will then loop infinitely between these events and the debugger window. If you end up in this situation, Shift+click on the No Trace button of the debugger in order to get out of it. Any subsequent calls to `trace` within the process will be ignored.

## type

<!-- REF #_command_.type.Syntax -->**type** ( *fieldVar* : field, variable ) : integer<!-- END REF -->


<!-- REF #_command_.type.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|vJson|object|->|field or variable to be tested|
|Result|integer|<-|Data type number|<!-- END REF -->

#### Description

The `type` command <!-- REF #_command_.type.Summary -->returns a numeric value that indicates the type of field or variable you have passed in the *fieldVar* parameter<!-- END REF -->. 

Qodly provides the following predefined constants:

|Constant|Type|Value|
|:----|:----|:----|
|Array 2D|integer|13|
|Blob array|integer|31|
|Boolean array|integer|22|
|Date array|integer|17|
|Integer array|integer|15|
|Is alpha field|integer|0|
|Is BLOB|integer|30|
|Is Boolean|integer|6|
|Is collection|integer|42|
|Is date|integer|4|
|Is integer|integer|8|
|Is integer 64 bits|integer|25|
|Is longint|integer|9|
|Is null|integer|255|
|Is object|integer|38|
|Is picture|integer|3|
|Is pointer|integer|23|
|Is real|integer|1|
|Is string var|integer|24|
|Is subtable|integer|7|
|Is text|integer|2|
|Is time|integer|11|
|Is undefined|integer|5|
|Is variant|integer|12|
|LongInt array|integer|16|
|Object array|integer|39|
|Picture array|integer|19|
|Pointer array|integer|20|
|Real array|integer|14|
|String array|integer|21|
|Text array|integer|18|
|Time array|integer|32|

You can apply the `type` function to fields, interprocess variables, process variables, local variables, and dereferenced pointers for these types of objects. You can apply `type` to the parameters ($1, $2 ... ${...}) of a project method or to the result of a function ($0).

:::note

You can not apply the Type function to scalar expressions such as object properties (emp.name) or collection elements (myColl[5]). To do this, you must use the Value type command.

:::

:::note

In compiled mode, calling Type on a method parameter ($0, $1...) declared as C_VARIANT does not return Is variant but the actual data type (same as calling Value type).

:::

#### See also

[`undefined`](#undefined)<br/>
[`valueType`](#valueType)

## undefined

<!-- REF #_command_.undefined.Syntax -->**undefined**<!-- END REF -->


#### Description.

## valueType

<!-- REF #_command_.valueType.Syntax -->**valueType**<!-- END REF -->

## callChain

## copyParameters

## countParameters