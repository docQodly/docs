---
id: timestamp
title: timestamp
---


<!-- REF #_command_.timestamp.Syntax -->**timestamp** : string<!-- END REF -->


<!-- REF #_command_.timestamp.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|string|<-|Current time returned using ISO format with milliseconds|
<!-- END REF -->


#### Description

`timestamp` <!-- REF #_command_.timestamp.Summary -->returns the current UTC time in ISO format with milliseconds, i.e. yyyy-MM-ddTHH:mm:ss.SSSZ<!-- END REF -->.  Note that the "Z" character indicates the GMT time zone.

Each time returned by `timestamp` is expressed according to the [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601).

:::note

This function is not suitable for timing purposes; you should use [`milliseconds`](#milliseconds) when you want to measure elapsed time.

:::

#### Example

You can use `timestamp` in a log file to know precisely when the events occurred. As shown below, you may have several operations occurring during the same second:

```qs
var logWithTimestamp : string
var myFile : 4D.File

myFile = file("/LOGS/TimestampProject.log")
logWithTimestamp = timestamp+char(Tab)+"log with timestamp"+char(Carriage return)
myFile.setContent(logWithTimestamp)

```

Result:
```
2023-12-12T13:31:29.477Z   Log with timestamp

```

#### See also

[`milliseconds`](#milliseconds)<br/>
[`string`](string.md#string)<br/>
[`time`](#time)
