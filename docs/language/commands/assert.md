---
id: assert
title: assert
---


<!-- REF #_command_.assert.Syntax -->**assert**( *boolExpression* : boolean )&nbsp; **assert**( *boolExpression* : boolean, *msg* : string )<!-- END REF -->


<!-- REF #_command_.assert.Params -->

|Parameter|Type||Description|
|---------|--- |:---:|------|
|boolExpression|boolean|&#8594;|Boolean expression|
|msg|string|&#8594;|Text of error message|
<!-- END REF -->


#### Description

The `assert` command <!-- REF #_command_.assert.Summary -->evaluates the *boolExpression* assertion passed in parameter and, if it returns `false`, stops the code execution with an error message<!-- END REF -->.

If *boolExpression* is `true`, nothing happens. If it is `false`, the command triggers the error -10518 and displays by default the text of the assertion preceded by the message "Assert failed:". You can intercept this error via a method installed using the [`onErrCall`](onErrCall.md) command, in order, for example, to provide info for a log file.

Optionally, you can pass a *msg* parameter to display a custom error message instead of the text of the assertion.

It is possible to globally enable or disable all the assertions of the application (for example according to the type of version) via the [`setAssertEnabled`](setAssertEnabled.md) command.

:::info

An assertion is an instruction inserted in the code that is responsible for detecting any anomalies during its execution. The principle consists in verifying that an expression is true at a given moment and, should the opposite occur, to cause an exception. Assertions are above all used to detect cases that should usually not ever occur. They are mainly used to detect programming bugs. For more information about assertions in programming, please refer to the [article concerning them on Wikipedia](http://en.wikipedia.org/wiki/Assertion_(computing))

:::


#### Example 1

Before carrying out operations on an entity, the developer wants to make sure that it is actually loaded in read/write mode:


```qs
 var employee : cs.EmployeeEntity
 var status : Object
 employee = ds.Employee.get(717)
 status = employee.lock()
 assert(not(status.success))
  // triggers error -10518 if entity cannot be locked
```

#### Example 2

An assertion can allow parameters passed to a project method to be tested in order to detect aberrant values. In this example, a custom warning message is used.

```qs
  // Method that returns the number of a client according to its name passed in parameter
 declare (vName : string) // Name of client
 assert(vName != "","Search for a blank client name")
  // A blank name in this case is an aberrant value
  // If the assertion is false, the following error is thrown:
  // "Assert failed: Search for a blank client name"
```


#### See also

[`asserted`](asserted.md)&nbsp; [`.onErrCall()`](onErrCall.md)&nbsp; 
[`setAssertEnabled`](setAssertEnabled.md)
