---
id: timeString
title: timeString
---

<!-- REF #_command_.timeString.Syntax -->**timeString** ( *secondsTime* : time ) : string<br/>**timeString** ( *secondsValue* : integer ) : string<!-- END REF -->


<!-- REF #_command_.timeString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|secondsTime|time|&#8594;|Time expressing seconds from midnight|
|secondsValue|integer|&#8594;|Number expressing seconds from midnight|
|Result|string|&#8592;|Time as a string in 24-hour format|
<!-- END REF -->

#### Description

The `timeString` command <!-- REF #_command_.timeString.Summary -->returns the string form of the time expression you pass in *secondsTime* or *secondsValue*<!-- END REF -->.


If you go beyond the number of seconds in a day (86,400), `timeString` continues to add hours, minutes, and seconds. For example, `timeString(86401)` returns 24:00:01.

:::note

If you need the string form of a time expression in a variety of formats, use [`string`](string.md).

:::

#### Example

In the following example we assign the folowing string “46800 seconds is 13:00:00.” to a string variable.

```qs
 var vTimeString : string
 vTimeString = "46800 seconds is "+timeString(46800)

```

#### See also

[`string`](string.md)<br/>
[`time`](time.md)
