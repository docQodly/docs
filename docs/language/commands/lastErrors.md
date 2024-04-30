---
id: lastErrors
title: lastErrors
---


<!-- REF #_command_.lastErrors.Syntax -->**lastErrors** : collection<!-- END REF -->


<!-- REF #_command_.lastErrors.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|result|collection|->|Collection of error objects|
<!-- END REF -->


#### Description

The `lastErrors` command <!-- REF #_command_.lastErrors.Summary -->returns the current stack of errors of the Qodly application as a collection of error objects, or `null` if no error occurred<!-- END REF -->.

Each error object contains the following properties:

|Property|Type|Description|
|---|---|---|
|errCode|number|Error code|
|message|string|Description of the error|
|componentSignature|string|Signature of the internal component which returned the error|

This command must be called from an error-handling method installed by the [`onErrCall`](onErrCall.md) command.


#### See also

[`onErrCall`](onErrCall.md)
