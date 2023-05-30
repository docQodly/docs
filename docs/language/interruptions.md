---
id: interruptions
title: Interruptions
---

These commands allow you to control the execution of your code. 



### Commands

||
|---|
|[<!-- INCLUDE #_command_.throwError.Syntax -->](#throwerror)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.throwError.Summary -->|



## throwError


<!-- REF #_command_.throwError.Syntax -->**throwError**( *msg* : string )<!-- END REF -->


<!-- REF #_command_.throwError.Syntax -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Attachment file|
<!-- END REF -->


#### Description

The `throwError` command <!-- REF #_command_.throwError.Summary -->allows you to send a custom error to the web form<!-- END REF -->.

The command returns a response with a `500 Internal Server Error` status and an `__ERROR` collection in the body with an object that has a "errCode" property set to "errorCode" and a "message" property set to "message".

#### See also

[`.setError()`](WebForm.md#seterror)
