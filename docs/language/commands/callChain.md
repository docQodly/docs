---
id: callChain
title: callChain
---


<!-- REF #_command_.callChain.Syntax -->**callChain** : collection<!-- END REF -->

<!-- REF #_command_.callChain.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|collection|&#8592;|Collection of objects describing the call chain within a process|
<!-- END REF -->


#### Description

The `callChain` command <!-- REF #_command_.callChain.Summary -->returns a collection of objects describing each step of the method call chain within the current process<!-- END REF -->.

It provides the same information as the *debugger*. It has the added benefit of being able to be executed from any environment.

The command facilitates debugging by enabling the identification of the method called, the component that called it, and the line number where the call was made. Each object in the returned collection contains the following properties:

|Property|Type|Description|Example|
|---|----|----|----|
|database|text|Name of the database calling the method|"database":"contactInfo"|
|line|integer|Line number of call to the method|"line":6|
|name|text|Name of the called method|"name":"moreThanAverage"|
|type|text|Type of the method:<li>"projectMethod" (method)</li><li>"executeFormula"</li><li>"classFunction"</li>|"type":"classFunction"|


#### Example

```qs

var currentCallChain : collection
currentCallChain = callChain()

```
