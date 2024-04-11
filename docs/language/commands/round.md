---
id: round
title: round
---

<!-- REF #_command_.round.Syntax -->**round** ( *round* : number, *places* : integer) : number<!-- END REF -->


<!-- REF #_command_.round.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aRound|number|->|Number to be rounded|
|places|integer|->|Number of decimal places used for rounding|
|Result|number|<-|Number rounded to the number of decimal places specified by *places*|<!-- END REF -->

#### Description

`round` <!-- REF #_command_.round.Summary -->returns *number* rounded to the number of decimal places specified by *places*<!-- END REF -->.

If *places* is positive, *number* is rounded to *places* decimal places. If *places* is negative, *number* is rounded on the left of the decimal point.

If the digit following places is 5 though 9, `round` rounds toward positive infinity for a positive number, and toward negative infinity for a negative number. If the digit following places is 0 through 4, `round` rounds toward zero.

#### Example

The following example illustrates how `round` works with different arguments:

```qs
 var vlResult : number
 vlResult = round(16.857,2) // vlResult gets 16.86
 vlResult = round(32345.67,-3) // vlResult gets 32000
 vlResult = round(29.8725,3) // vlResult gets 29.873
 vlResult = round(-1.5,0) // vlResult gets –2

```

#### See also

[`trunc`](#trunc)
