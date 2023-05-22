---
id: dateandtime
title: Date and Time
---


## Date and Time Commands

||
|---|
|[<!-- INCLUDE #_command_.addToDate.Syntax -->](#addToDate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.addToDate.Summary -->|
|[<!-- INCLUDE #_command_.dayNumber.Syntax -->](#dayNumber)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.dayNumber.Summary -->|
|[<!-- INCLUDE #_command_.dayOf.Syntax -->](#dayOf)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.dayOf.Summary -->|
|[<!-- INCLUDE #_command_.monthOf.Syntax -->](#monthOf)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.monthOf.Summary -->|
|[<!-- INCLUDE #_command_.time.Syntax -->](#time)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.time.Summary -->|
|[<!-- INCLUDE #_command_.timeString.Syntax -->](#timeString)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.timeString.Summary -->|
|[<!-- INCLUDE #_command_.yearOf.Syntax -->](#yearOf)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.yearOf.Summary -->|

## addToDate

<!-- REF #_command_.addToDate.Syntax -->**addToDate** ( *aDate* : date , *years* : integer , *months* : integer , *days * : integer) : date<!-- END REF -->


<!-- REF #_command_.addToDate.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aDate|date|->|Date to which to add days, months, and years|
|years|integer|->|Number of years to add to the date|
|months|integer|->|Number of months to add to the date|
|days|integer|->|Number of days to add to the date|
|Result|date|<-|Resulting date|<!-- END REF -->

#### Description

The `addToDate` command <!-- REF #_command_.addToDate.Summary -->adds *years*, *months*, and *days* to the date you pass in *aDate*, then returns the result<!-- END REF -->. 

`addToDate` allows you to quickly add months and years without having to deal with the number of days per month or leap years (as you would when using the + date operator).

#### Example

```qs
 var vdInOneYear, vdNextMonth, vdTomorrow : date

  // This line calculates the date in one year, same day
 vdInOneYear=addToDate(currentDate,1,0,0)
 
  // This line calculates the date next month, same day
 vdNextMonth=addToDate(currentDate,0,1,0)
 
  // This line does the same thing as vdTomorrow=currentDate+1
 vdTomorrow=addToDate(currentDate,0,0,1)
 
```

## dayNumber

<!-- REF #_command_.dayNumber.Syntax -->**dayNumber** ( *aDate* : date ) : integer<!-- END REF -->


<!-- REF #_command_.dayNumber.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aDate|date|->|Date for which to return the number|
|Result|integer|<-|Number representing the weekday on which date falls|<!-- END REF -->

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

`dayNumber`" "returns a value between 1 and 7. To get the day number within the month for a date, use the command [`dayOf`](#dayOf).

:::

#### Example

The following example is a function that returns the current day as a string:

```qs
 var viDay : integer
 viDay=dayNumber(currentDate) // viDay gets the current day number
 switch
    :(viDay==1)
       $0="Sunday"
    :(viDay==2)
       $0="Monday"
    :(viDay==3)
       $0="Tuesday"
    :(viDay==4)
       $0="Wednesday"
    :(viDay==5)
       $0="Thursday"
    :(viDay==6)
       $0:="Friday"
    :(viDay==7)
       $0="Saturday"
 end
 
```

#### See also

[`dayOf`](#dayOf)

## dayOf

<!-- REF #_command_.dayOf.Syntax -->**dayOf** ( *aDate* : date ) : integer<!-- END REF -->


<!-- REF #_command_.dayOf.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aDate|date|->|Date for which to return the day|
|Result|integer|<-|Day of the month of date|<!-- END REF -->

#### Description

The `dayOf` command <!-- REF #_command_.dayOf.Summary -->returns the day of the month of *aDate*<!-- END REF -->. 

:::note

`dayOf` returns a value between 1 and 31. To get the day of the week for a date, use the command [`dayNumber`](#dayNumber).

:::


#### Example 1

The following example illustrates the use of `dayOf`. The results are assigned to the variable *vResult*. The comments describe what is put in *vResult*:

```qs
 var vResult : integer
 vResult=dayOf(!12/25/92!) // vResult gets 25
 vResult=dayOf(currentDate) // vResult gets day of current date
 
```

#### Example 2

See the example for the [`currentDate`](#currentDate) command.

#### See also

[`dayNumber`](#dayNumber)<br/>
[`monthOf`](#monthOf)<br/>
[`yearOf`](#yearOf)

## monthOf

<!-- REF #_command_.monthOf.Syntax -->**monthOf** ( *aDate* : date ) : integer<!-- END REF -->


<!-- REF #_command_.monthOf.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aDate|date|->|Date for which to return the month|
|Result|integer|<-|Number indicating the month of date|<!-- END REF -->

#### Description

The `monthOf` command <!-- REF #_command_.monthOf.Summary -->returns the month of *aDate*<!-- END REF -->. 

:::note

`monthOf` returns the number of the month, not the name (see Example 1).

:::

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

#### Example 1

The following example illustrates the use of `monthOf`. The results are assigned to the variable *vResult*. The comments describe what is put in *vResult*:

```qs
 var vResult : integer
 vResult=monthOf(!12/25/92!) // vResult gets 12
 vResult=monthOf(currentDate) // vResult gets month of current date
 
```

#### Example 2

See the example for the [`currentDate`](#currentDate) command.

#### See also

[`dayOf`](#dayOf)<br/>
[`yearOf`](#yearOf)

## time

<!-- REF #_command_.time.Syntax -->**time** ( *timeValue * : string, integer ) : time <!-- END REF -->


<!-- REF #_command_.time.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|timeValue|string, integer|->|Value to return as a time|
|Result|time|<-|Time specified by timeValue|<!-- END REF -->

#### Description

The `time` command <!-- REF #_command_.time.Summary --> returns a time expression equivalent to the time specified in the *timeValue* parameter<!-- END REF -->. 

The *timeValue* parameter can contain either:

* a string containing a time expressed in one of the standard time formats corresponding to the language of your system (for more information, refer to the description of the [`string`](../string#string) command).
* a longint that represents the number of seconds elapsed since 00:00:00.

:::note

If the *timeValue* expression evaluates to undefined, `time` returns an empty time (00:00:00). This is useful when you expect the result of an expression (e.g. an object attribute) to be a time, even if it can be undefined.

:::

#### Example

You can express any numerical value as a time:

```qs
 var vTime : time
 vTime=time(10000)
  //vTime is 02:46:40
 vTime2=time((60*60)+(20*60)+5200)
  //vTime2 is 02:46:40
 
```

#### See also

[`bool`](#../boolean#bool)<br/>[`string`](../string#string)<br/>[`timeString`](#timeString)<br/>[`timestamp`](#timestamp)

## timeString

<!-- REF #_command_.timeString.Syntax -->**timeString** ( *seconds* : integer, time ) : string<!-- END REF -->


<!-- REF #_command_.timeString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|seconds|integer, time|->|Seconds from midnight|
|Result|string|<-|Time as a string in 24-hour format|<!-- END REF -->

#### Description

The `timeString` command <!-- REF #_command_.timeString.Summary -->returns the string form of the time expression you pass in *seconds*<!-- END REF -->. 

If you go beyond the number of seconds in a day (86,400), `timeString` continues to add hours, minutes, and seconds. For example, `timeString` (86401) returns 24:00:01.

:::note

If you need the string form of a time expression in a variety of formats, use [`string`](../string#string).

:::

#### Example

In the following example we assign the folowing string “46800 seconds is 13:00:00.” to a string variable.

```qs
 var vTimeString : string
 vTimeString="46800 seconds is "+timeString(46800)
 
```

#### See also

[`string`](../string#string)<br/>
[`time`](#time)

## yearOf

<!-- REF #_command_.yearOf.Syntax -->**yearOf** ( *aDate* : date ) : integer<!-- END REF -->


<!-- REF #_command_.yearOf.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aDate|date|->|Date for which to return the year|
|Result|integer|<-|Number indicating the year of date|<!-- END REF -->

#### Description

The `yearOf` command <!-- REF #_command_.yearOf.Summary -->returns the year of *aDate*<!-- END REF -->. 

#### Example 1

The following example illustrates the use of `yearOf`. The results are assigned to the variable *vResult*:

```qs
 var vResult : integer
 vResult=yearOf(!12/25/92!) // vResult gets 1992
 vResult=yearOf(!12/25/1992!) // vResult gets 1992
 vResult=yearOf(!12/25/1892!) // vResult gets 1892
 vResult=yearOf(!12/25/2092!) // vResult gets 2092
 vResult=yearOf(currentDate) // vResult gets year of current date
 
```

#### Example 2

See the example for the [`currentDate`](#currentDate) command.

#### See also

[`dayOf`](#dayOf)<br/>
[`monthOf`](#monthOf)

