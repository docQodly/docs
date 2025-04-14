---
id: currentTime
title: currentTime
---


<!-- REF #_command_.currentTime.Syntax -->**currentTime** : time<!-- END REF -->


<!-- REF #_command_.currentTime.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|time|&#8592;|Current time|
<!-- END REF -->

#### Description

The `currentTime` command <!-- REF #_command_.currentTime.Summary -->returns the current time from the server (GMT)<!-- END REF -->.

The current time is always between 00:00:00 and 23:59:59. Use [`string`](string.md) or [`timeString`](timeString.md) to obtain the string form of the time expression returned by `currentTime`.


#### Example 1

The following example shows you how to time the length of an operation. Here, *LongOperation* is a method that needs to be timed:

```qs
 var vhStartTime, vhEndTime : time
 var vCurrentTime : string
 vhStartTime = ((currentDate-!1980-01-01!)*86400)+currentTime //Save the start time, seconds after 1.1.1980
 LongOperation //Perform the operation
 vhEndTime = ((currentDate-!1980-01-01!)*86400)+currentTime
 vCurrentTime = "The operation took "+string(vhEndTime-vhStartTime)+" seconds." //how long it took

```

#### Example 2

The following example extracts the hours, minutes, and seconds from the current time:

```qs
 var vhNow : time
 var vCurrentTime : string
 vhNow = currentTime
 vCurrentTime = "Current hour is: "+string(vhNow\3600)
 vCurrentTime = "Current minute is: "+string((vhNow\60)%60)
 vCurrentTime = "Current second is: "+string(vhNow%60)

```

#### See also

[`milliseconds`](milliseconds.md)&nbsp; 
[`string`](string.md)
