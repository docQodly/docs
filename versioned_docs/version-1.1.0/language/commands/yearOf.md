---
id: yearOf
title: yearOf
---

<!-- REF #_command_.yearOf.Syntax -->**yearOf** ( *aDate* : date ) : integer<!-- END REF -->


<!-- REF #_command_.yearOf.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aDate|date|&#8594;|Date for which to return the year|
|Result|integer|&#8592;|Number indicating the year of *aDate*|
<!-- END REF -->

#### Description

The `yearOf` command <!-- REF #_command_.yearOf.Summary -->returns the year of *aDate*<!-- END REF -->.

#### Example

```qs
 var vResult : integer
 vResult = yearOf(!12/25/92!) // vResult gets 1992
 vResult = yearOf(!12/25/1992!) // vResult gets 1992
 vResult = yearOf(!12/25/1892!) // vResult gets 1892
 vResult = yearOf(!12/25/2092!) // vResult gets 2092
 vResult = yearOf(currentDate) // vResult gets year of current date

```


#### See also

[`dayOf`](dayOf.md)&nbsp; 
[`monthOf`](monthOf.md)
