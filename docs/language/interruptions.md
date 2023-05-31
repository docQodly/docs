---
id: interruptions
title: Interruptions
---

These commands allow you to control the execution of your code. 



### Commands

||
|---|
|[<!-- INCLUDE #_command_.throw.Syntax -->](#throw)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.throw.Summary -->|



## throw


<!-- REF #_command_.throw.Syntax -->**throw**( *msg* : string )<!-- END REF -->


<!-- REF #_command_.throw.Syntax -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Attachment file|
<!-- END REF -->


#### Description

The `throw` command <!-- REF #_command_.throw.Summary -->allows you to send a custom system error to the web form<!-- END REF -->.

The command returns a response with a `500 Internal Server Error` status and an `__ERROR` collection in the body with an object that has a "errCode" property set to "errorCode" and a "message" property set to "message".

#### See also

[`.setError()`](WebForm.md#seterror)
