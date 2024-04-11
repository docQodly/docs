---
id: dayNumber
title: dayNumber
---


<!-- REF #_command_.dayNumber.Syntax -->**dayNumber** ( *aDate* : date ) : integer<!-- END REF -->


<!-- REF #_command_.dayNumber.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aDate|date|->|Date for which to return the number|
|Result|integer|<-|Number representing the weekday on which date falls|
<!-- END REF -->

#### Description

The `dayNumber` command <!-- REF #_command_.dayNumber.Summary -->returns a number representing the weekday on which *aDate* falls<!-- END REF -->.

:::note

`dayNumber` returns 2 for null dates.

:::

Qodly provides the following predefined constants:

|Constant|Type|Value|
|:----|:----|:----|
|Sunday|integer|1|
|Monday|integer|2|
|Tuesday|integer|3|
|Wednesday|integer|4|
|Thursday|integer|5|
|Friday|integer|6|
|Saturday|integer|7|

:::note

`dayNumber` returns a value between 1 and 7. To get the day number within the month for a date, use the command [`dayOf`](#dayof).

:::

#### Example

The following example is a function that returns the current day as a string:

```qs
 var viDay : integer
 var myResult: string
 viDay = dayNumber(currentDate) // viDay gets the current day number
 switch
    :(viDay == 1)
       myResult = "Sunday"
    :(viDay == 2)
       myResult = "Monday"
    :(viDay == 3)
       myResult = "Tuesday"
    :(viDay == 4)
       myResult = "Wednesday"
    :(viDay == 5)
       myResult = "Thursday"
    :(viDay == 6)
       myResult = "Friday"
    :(viDay == 7)
       myResult = "Saturday"
 end

```

#### See also

[`dayOf`](#dayof)
