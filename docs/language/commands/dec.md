---
id: dec
title: dec
---


<!-- REF #_command_.dec.Syntax -->**dec** ( *number* : number ) : number<!-- END REF -->


<!-- REF #_command_.dec.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|number|number|->|Number whose decimal portion is returned|
|Result|number|<-|Decimal part of number|
<!-- END REF -->

#### Description

`dec` <!-- REF #_command_.dec.Summary -->returns the decimal (fractional) portion of *number*<!-- END REF -->. The value returned is always positive or zero.

#### Example

The following example takes a monetary value expressed as a number, and extracts the dollar part and the cents part. If *vAmount* is 7.31, then *vDollars* is set to 7 and *vCents* is set to 31:

```qs
 var vDollars, vCents, vAmount : number
 vDollars = int(vAmount) //Get the dollars
 vCents = dec(vAmount)*100 // Get the fractional part

```

#### See also

[`int`](int.md)
