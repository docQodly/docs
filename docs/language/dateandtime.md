---
id: dateandtime
title: Date and Time
---


## Date and Time Commands

||
|---|
|[<!-- INCLUDE #_command_.addToDate.Syntax -->](#addToDate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.addToDate.Summary -->|
|[<!-- INCLUDE #_command_.currentDate.Syntax -->](#currentDate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.currentDate.Summary -->|
|[<!-- INCLUDE #_command_.currentTime.Syntax -->](#currentTime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.currentTime.Summary -->|
|[<!-- INCLUDE #_command_.date.Syntax -->](#date)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.date.Summary -->|
|[<!-- INCLUDE #_command_.dayNumber.Syntax -->](#dayNumber)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.dayNumber.Summary -->|
|[<!-- INCLUDE #_command_.dayOf.Syntax -->](#dayOf)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.dayOf.Summary -->|
|[<!-- INCLUDE #_command_.milliseconds.Syntax -->](#milliseconds)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.milliseconds.Summary -->|
|[<!-- INCLUDE #_command_.monthOf.Syntax -->](#monthOf)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.monthOf.Summary -->|
|[<!-- INCLUDE #_command_.time.Syntax -->](#time)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.time.Summary -->|
|[<!-- INCLUDE #_command_.timeString.Syntax -->](#timeString)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.timeString.Summary -->|
|[<!-- INCLUDE #_command_.timestamp.Syntax -->](#timestamp)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.timestamp.Summary -->|
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

## currentDate

<!-- REF #_command_.currentDate.Syntax -->**currentDate** ( 	* : operator ) : date<!-- END REF -->


<!-- REF #_command_.currentDate.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|*|operator|->|Returns the current date from the server|
|Result|date|<-|Current date|<!-- END REF -->

#### Description

The `currentDate` command <!-- REF #_command_.currentDate.Summary --> returns the current date as kept by the system clock<!-- END REF -->.

If you use the asterisk (*) parameter when executing this function on a Qodly Client machine, it returns the current date from the server.

#### Example 1

In the following example we assign the the current date to a string variable:

```qs
 var vCurrentDate : string
 vCurrentDate="The date is "+string(currentDate)+"."
 
```

#### Example

If you write an application for the international market, you may need to know if the version of 4D that you run works with dates formatted as MM/DD/YYYY (US version) or DD/MM/YYYY (French version). This is useful to know for customizing data entry fields.

The following project method allows you to do so:

```qs
  // Sys date format global function
  // Sys date format -> String
  // Sys date format -> Default 4D data format
  
 var  vdDate : date
 var vsDate, vsDay, vsMonth, vsYear, vsMDY, myResult : string
 var vlPos : integer
 
  // Get a Date value where the month, day and year values are all different
 vdDate=currentDate
 repeat
    vsMonth=string(monthOf(vdDate))
    vsDay=string(dayOf(vdDate))
    vsDay=string(yearOf(vdDate)%100)
    if((vsMonth==vsDay)|(vsMonth==vsYear)|(vsDay==vsYear))
       vOK=0
       vdDate=vdDate+1
    else
       vOK=1
    end
 until(vOK==1)
 myResult="" // Initialize function result
 vsDate=string(vdDate)
 vlPos=position("/",vsDate) // Find the first / separator in the string ../../..
 vsMDY=substring(vsDate,1,vlPos-1) // Extract the first digits from the date
 vsDate=substring(vsDate,vlPos+1) // Eliminate the first digits as well as the first / separator
 switch
    :(vsMDY==vsMonth) // The digits express the month
       myResult="MM"
    :(vsMDY==vsDay) // The digits express the day
       myResult="DD"
    :(vsMDY==vsYear) // The digits express the year
       myResult="YYYY"
 end
 myResult=myResult+"/" // Start building the function result
 vlPos=position("/",vsDate) // Find the second separator in the string ../..
 vsMDY=substring(vsDate,1,vlPos-1) // Extract the next digits from the date
 vsDate=substring(vsDate,vlPos+1) // Reduce the string to the last digits from the date
 switch
    :(vsMDY==vsMonth) // The digits express the month
       myResult=myResult+"MM"
    :(vsMDY==vsDay) // The digits express the day
       myResult=myResult+"DD"
    :(vsMDY==vsYear) // The digits express the year
       myResult=myResult+"YYYY"
 end
 myResult=myResult+"/" // Pursue building the function result
 switch
    :(vsDate==vsMonth) // The digits express the month
       myResult=myResult+"MM"
    :(vsDate==vsDay) // The digits express the day
       myResult=myResult+"DD"
    :(vsDate==vsYear) // The digits express the year
       myResult=myResult+"YYYY"
 end
  // At this point myResult is equal to MM/DD/YYYY or DD/MM/YYYY or...
 
```

#### See also

[`dayOf`](#dayOf)<br/>
[`monthOf`](#monthOf)<br/>
[`yearOf`](#yearOf)

## currentTime

<!-- REF #_command_.currentTime.Syntax -->**currentTime** ( 	* : operator ) : time<!-- END REF -->


<!-- REF #_command_.currentTime.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|*|operator|->|Returns the current time from the server|
|Result|time|<-|Current time|<!-- END REF -->

#### Description

The `currentTime` command <!-- REF #_command_.currentTime.Summary --> returns the current time from the system clock<!-- END REF -->.

The current time is always between 00:00:00 and 23:59:59. Use [`string`](string.md#string) or [`timeString`](#timeString) to obtain the string form of the time expression returned by `currentTime`.

If you use the asterisk (*) parameter when executing this function on a Qodly Client machine, it returns the current date from the server.

#### Example 1

The following example shows you how to time the length of an operation. Here, *LongOperation* is a method that needs to be timed:

```qs
 var vhStartTime, vhEndTime : time
 var  vCurrentTime : string
  vhStartTime=((currentDate-!1980-01-01!)*86400)+currentTime //Save the start time, seconds after 1.1.1980
 LongOperation //Perform the operation
 vhEndTime=((currentDate-!1980-01-01!)*86400)+currentTime
 vCurrentTime="The operation took "+string(vhEndTime-vhStartTime)+" seconds." //how long it took
 
```

#### Example

The following example extracts the hours, minutes, and seconds from the current time:

```qs
 var  vhNow : time
 var  vCurrentTime : string
 vhNow=currentTime
 vCurrentTime="Current hour is: "+string(vhNow\3600)
 vCurrentTime="Current minute is: "+string((vhNow\60)%60)
 vCurrentTime="Current second is: "+string(vhNow%60)
 
```

#### See also

[`milliseconds`](#milliseconds)<br/>
[`string`](string.md#string)

## date

<!-- REF #_command_.date.Syntax -->**date** ( *expression* : string, date ) : date<!-- END REF -->


<!-- REF #_command_.date.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|string, date|->|String representing the date to be returned or Date expression|
|Result|date|<-|Date expression|<!-- END REF -->

#### Description

The `date` command <!-- REF #_command_.date.Summary -->evaluates *expression* and returns a date<!-- END REF -->. 

##### ISO date format
The string must be formatted as follows: "YYYY-MM-DDTHH:MM:SS", for example "2013-11-20T10:20:00". In this case, `date` evaluates the *expression* parameter correctly, regardless of the current language settings. Decimal seconds, preceded by a period, are supported (e.g.: "2013-11-20T10:20:00.9854").
If the *expression* format does not precisely fit this ISO format, the date is evaluated as a short date format based on the regional settings of the system.

##### Regional settings
When the *expression* does not match the ISO format, the regional settings defined in the operating system for a short date are used for the evaluation. For example, in the US version, by default the date must be in the order MM/DD/YY (month, day, year). The month and day can be one or two digits. The year can be two or four digits. If the year is two digits, then `date` considers whether the date belongs to the 21st or 20th century based on the value entered. By default, the pivotal value is 30:

* If the value is greater than or equal to 30, Qodly considers the century to be the 20th and adds 19 to the beginning of the value.
* If the value is less than 30, Qodly considers the century to be the 21st and adds 20 to the beginning of the value.
* If you pass an invalid date (such as "13/35/94" or "aa/12/94") in expression, Date returns an empty date (00/00/00). It is your responsibility to verify that expression is a valid date.
* If the expression evaluates to undefined, Date returns an empty date (00/00/00). This is useful when you expect the result to be a date, even if it can be undefined (e.g. an object attribute).

##### Date type expression
If *expression* is of date type, `date` returns the date passed in the parameter 'as is'. This is particularly useful in the context of generic programming using pointers or object attributes.

#### Example 1

The following examples show various cases:

```qs
 var vdDate, vdDate2, vdDate3, vdDate4, vdDate5 : date
 var vobj : object
 vdDate=date("12/25/94") //returns 12/25/94 on a US system
 vdDate2=date("40/40/94") //00/00/00
 vdDate3=date("It was the 6/30, we were in 2016") //06/30/16
 vobj=newObject("expDate","2020-11-17T00:00:00.0000")
 vdDate4=date(vobj.expDate) //11/17/20
 vdDate5=date(vobj.creationDate) //00/00/00
 
```

#### Example 2

`date` evaluation based on a date in ISO format

```qs
 var vDate : date
 var vtDateISO : string
 vtDateISO="2013-06-05T20:00:00"
 vDate=date(vtDateISO)
  //vDate represents June 5th, 2013 regardless of the system language
 
```

#### Example 3

You want to get a date from an object attribute, whatever the current attribute date storage option:

```qs
 var vDate : date
 var myObj : object
 if(valueType(myObj.myDate)==Is date) //it's stored as date, no need to convert
    vDate=myObj.myDate
 else //it's stored as string
    vDate=date(myObj.myDate)
 end
 
```

#### See also

[`bool`](boolean.md#bool)<br/>
[`string`](string.md#string)

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
 var myResult: stirng
 viDay=dayNumber(currentDate) // viDay gets the current day number
 switch
    :(viDay==1)
       myResult="Sunday"
    :(viDay==2)
       myResult="Monday"
    :(viDay==3)
       myResult="Tuesday"
    :(viDay==4)
       myResult="Wednesday"
    :(viDay==5)
       myResult="Thursday"
    :(viDay==6)
       myResult="Friday"
    :(viDay==7)
       myResult="Saturday"
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

## milliseconds

<!-- REF #_command_.milliseconds.Syntax -->**milliseconds** : integer<!-- END REF -->


<!-- REF #_command_.milliseconds.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|integer|<-|Number of milliseconds elasped since the machine was started|<!-- END REF -->

#### Description

`milliseconds` <!-- REF #_command_.milliseconds.Summary -->returns the number of milliseconds (1000th of a second) elapsed since the machine was started<!-- END REF -->.

The returned value is a signed integer, up to 2^31 (around 2 billion milliseconds or 24 days). When the machine has been running for more than 24 days, the number becomes negative.

The purpose of the command is to measure short periods of time with a high precision. A 24-day range is more than large enough for comparisons, but you need to be careful. When comparing values, always work with the difference between two values. Never compare the values directly since one could be negative and the other positive.

:::note

Always compare the difference between two calls of Milliseconds as shown above, never compare directly, e.g.:
```qs
 (milliseconds>(starttime+5000)) //never do it like this, as one could be positive, one negative
 
```

:::

#### See also

[`currentTime`](#currenttime)<br/>
[`timestamp`](#timestamp)

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

If you need the string form of a time expression in a variety of formats, use [`string`](string.md#string).

:::

#### Example

In the following example we assign the folowing string “46800 seconds is 13:00:00.” to a string variable.

```qs
 var vTimeString : string
 vTimeString="46800 seconds is "+timeString(46800)
 
```

#### See also

[`string`](string.md#string)<br/>
[`time`](#time)

## timestamp

<!-- REF #_command_.timestamp.Syntax -->**timestamp** : string<!-- END REF -->


<!-- REF #_command_.timestamp.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|string|<-|Current time returned using ISO format with milliseconds|<!-- END REF -->

#### Description

`timestamp` <!-- REF #_command_.timestamp.Summary -->returns the current UTC time in ISO format with milliseconds, i.e. yyyy-MM-ddTHH:mm:ss.SSSZ<!-- END REF -->.  Note that the "Z" character indicates the GMT time zone.

Each time returned by `timestamp` is expressed according to the ISO 8601 standard. For more information about this standard, refer to: https://en.wikipedia.org/wiki/ISO_8601

:::note

This function is not suitable for timing purposes; you should use [`milliseconds`](#milliseconds) when you want to measure elapsed time.

:::

#### Example

You can use `timestamp` in a log file to know precisely when the events occurred. As shown below, you may have several operations occurring during the same second:

```qs
var logWithTimestamp : string
var myFile : 4D.File
 
myFile=file("/LOGS/TimestampProject.log")
logWithTimestamp=timestamp+char(Tab)+"log with timestamp"+char(Carriage return)
myFile.setContent(logWithTimestamp)
 
```

Result:
```
2016-12-12T13:31:29.477Z   Log with timestamp
 
```

#### See also

[`milliseconds`](#milliseconds)<br/>
[`string`](string.md#string)<br/>
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

