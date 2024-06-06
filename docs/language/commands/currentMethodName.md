---
id: currentMethodName
title: currentMethodName
---


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
|Project Method|MethodName|
|Table Form Method|[TableName].FormName|
|Class Constructor|ClassName:constructor|
|Class Function|ClassName.FunctionName|

This command cannot be called from within a Qodly formula.
