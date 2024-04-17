---
id: monthOf
title: monthOf
---


<!-- REF #_command_.monthOf.Syntax -->**monthOf** ( *aDate* : date ) : integer<!-- END REF -->


<!-- REF #_command_.monthOf.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aDate|date|->|Date for which to return the month|
|Result|integer|<-|Number indicating the month of *aDate*|
<!-- END REF -->

#### Description

The `monthOf` command <!-- REF #_command_.monthOf.Summary -->returns the month number of *aDate*<!-- END REF -->.

`monthOf` returns the number of the month, not the name (see example).

To compare the value returned by this function, Qodly provides the following predefined constants:

|Constant|Type|Value|
|:----|:----|:----|
|January|integer|1|
|February|integer|2|
|March|integer|3|
|April|integer|4|
|May|integer|5|
|June|integer|6|
|July|integer|7|
|August|integer|8|
|September|integer|9|
|October|integer|10|
|November|integer|11|
|December|integer|12|


#### Example

```qs
 var vResult : integer
 vResult = monthOf(!12/25/92!) // vResult gets 12
 vResult = monthOf(currentDate) // vResult gets month of current date

```


#### See also

[`dayOf`](dayOf.md)<br/>
[`yearOf`](yearOf.md)
