---
id: random
title: random
---


<!-- REF #_command_.random.Syntax -->**random**: integer<!-- END REF -->


<!-- REF #_command_.random.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|integer|<-|Random number|<!-- END REF -->

#### Description

`random` <!-- REF #_command_.random.Summary -->returns a random integer value between 0 and 32,767 (inclusive)<!-- END REF -->.

To define a range of integers from which the random value will be chosen, use this formula:

```qs
 (random%(vEnd-vStart+1))+vStart

```

The value *vStart* is the first number in the range, and the value *vEnd* is the last.

#### Example

The following example assigns a random integer between 10 and 30 to the *vlResult* variable:

```qs
 var vlResult : integer
 vlResult = (random%21)+10

```
