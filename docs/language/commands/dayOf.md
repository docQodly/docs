---
id: dayOf
title: dayOf
---



<!-- REF #_command_.dayOf.Syntax -->**dayOf** ( *aDate* : date ) : integer<!-- END REF -->


<!-- REF #_command_.dayOf.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aDate|date|&#8594;|Date for which to return the day|
|Result|integer|&#8592;|Day of the month of *aDate*|
<!-- END REF -->


#### Description

The `dayOf` command <!-- REF #_command_.dayOf.Summary -->returns the day of the month of *aDate*<!-- END REF -->.

:::note

`dayOf` returns a value between 1 and 31. To get the day of the week for a date, use the command [`dayNumber`](dayNumber.md).

:::


#### Example

The following example illustrates the use of `dayOf`. The results are assigned to the variable *vResult*. The comments describe what is put in *vResult*:

```qs
 var vResult : integer
 vResult = dayOf(!12/25/92!) // vResult gets 25
 vResult = dayOf(currentDate) // vResult gets day of current date

```


#### See also

[`dayNumber`](dayNumber.md)&nbsp; 
[`monthOf`](monthOf.md)&nbsp; 
[`yearOf`](yearOf.md)
