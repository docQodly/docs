---
id: asserted
title: asserted
---


<!-- REF #_command_.asserted.Syntax -->**asserted**( *boolExpression* : boolean ) : boolean<br/>**asserted**( *boolExpression* : boolean, *msg* : string ) : boolean<!-- END REF -->


<!-- REF #_command_.asserted.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|boolExpression|boolean|&#8594;|Boolean expression|
|msg|string|&#8594;|Text of error message|
|result|boolean|&#8592;|Result of evaluation of boolExpression|
<!-- END REF -->


#### Description

The `asserted` command <!-- REF #_command_.asserted.Summary -->returns the result of the evaluation of the *boolExpression* parameter. If *boolExpression* is `false` and if assertions [are enabled](setAssertEnabled.md), the error -10518 is generated<!-- END REF -->, exactly as for the [`assert`](assert.md) command. If the assertions are disabled, `asserted` returns the result of the expression that was passed without triggering an error.

`asserted` has an operation similar to that of the [`assert`](assert.md) command, with one difference in that it returns a value which is the result of the evaluation of the *boolExpression* parameter. It therefore allows the use of an assertion during the evaluation of a condition (see the example). For more information about the operation of assertions and the parameters of this command, please refer to the description of the [`assert`](assert.md) command.


#### Example

Insertion of an assertion in the evaluation of an expression:

```qs
 var employee : cs.EmployeeEntity
 var status : Object
 employee = ds.Employee.get(717)
 status = employee.lock()
 if(asserted(not(status.success)))
  // triggers error -10518 if entity cannot be locked
 end
```


#### See also

[`assert`](assert.md)<br/>[`.onErrCall()`](onErrCall.md)<br/>
[`setAssertEnabled`](setAssertEnabled.md)
