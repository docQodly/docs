---
id: addToDate
title: addToDate
---

<!-- REF #_command_.addToDate.Syntax -->**addToDate** ( *aDate* : date , *years* : integer , *months* : integer , *days* : integer) : date<!-- END REF -->


<!-- REF #_command_.addToDate.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aDate|date|&#8594;|Date to which to add days, months, and years|
|years|integer|&#8594;|Number of years to add to the date|
|months|integer|&#8594;|Number of months to add to the date|
|days|integer|&#8594;|Number of days to add to the date|
|Result|date|&#8592;|Resulting date|
<!-- END REF -->

#### Description

The `addToDate` command <!-- REF #_command_.addToDate.Summary -->adds *years*, *months*, and *days* to the date you pass in *aDate*, then returns the result<!-- END REF -->.

`addToDate` allows you to quickly add months and years without having to deal with the number of days per month or leap years (as you would when using the + date operator).

#### Example

```qs
 var vdInOneYear, vdNextMonth, vdTomorrow : date

  // This line calculates the date in one year, same day
 vdInOneYear = addToDate(currentDate,1,0,0)

  // This line calculates the date next month, same day
 vdNextMonth = addToDate(currentDate,0,1,0)

  // This line does the same thing as vdTomorrow = currentDate+1
 vdTomorrow = addToDate(currentDate,0,0,1)

```
