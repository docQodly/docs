---
id: squareRoot
title: squareRoot
---


<!-- REF #_command_.squareRoot.Syntax -->**squareRoot** ( *number* : number) : number<!-- END REF -->


<!-- REF #_command_.squareRoot.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|&#8594;|Number whose square root is calculated|
|Result|number|&#8592;|Square root of the number|<!-- END REF -->

#### Description

`squareRoot` <!-- REF #_command_.squareRoot.Summary -->returns the square root of *number*<!-- END REF -->.

#### Example 1

The following example assigns the value 1.414213562373 to the variable *vrSquareRootOfTwo*.

```qs
 var vrSquareRootOfTwo : number
 vrSquareRootOfTwo = squareRoot(2)

```

#### Example 2

The following method returns the hypotenuse of the right triangle whose two legs are passed as parameters:


```qs
 declare ( legA : number , legB : number) -> hypothenuse : number
 hypothenuse: = squareRoot((legA^2)+(legB^2))
```
