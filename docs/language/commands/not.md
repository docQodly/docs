---
id: not
title: not
---


<!-- REF #_command_.not.Syntax -->**not** ( *aBoolean* : boolean ) : boolean<!-- END REF -->


<!-- REF #_command_.not.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aBoolean|boolean|->|Boolean value to negate|
|Result|boolean|<-|Opposite of aBoolean|
<!-- END REF -->

#### Description

The `not` function <!-- REF #_command_.not.Summary -->returns the negation of *aBoolean*, changing true to false or false to true<!-- END REF -->.

#### Example

This example first assigns **true** to a variable, then changes the variable value to **false**, and then back to **true**.

```qs
 var vResult : boolean
 vResult = true // vResult is set to true
 vResult = not(vResult) // vResult is set to false
 vResult = not(vResult) // vResult is set to true
```

#### See also

[`false`](false.md)<br/>
[`true`](true.md)
