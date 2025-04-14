---
id: milliseconds
title: milliseconds
---


<!-- REF #_command_.milliseconds.Syntax -->**milliseconds** : integer<!-- END REF -->


<!-- REF #_command_.milliseconds.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|integer|&#8592;|Number of milliseconds elasped since the machine was started|
<!-- END REF -->


#### Description

`milliseconds` <!-- REF #_command_.milliseconds.Summary -->returns the number of milliseconds (1000th of a second) elapsed since the server was started<!-- END REF -->.

The returned value is a signed integer, up to 2^31 (around 2 billion milliseconds or 24 days). When the machine has been running for more than 24 days, the number becomes negative.

The purpose of the command is to measure short periods of time with a high precision. A 24-day range is more than large enough for comparisons, but you need to be careful. When comparing values, always work with the difference between two values. Never compare the values directly since one could be negative and the other positive.

:::caution

Always compare the difference between two calls of `milliseconds`, never compare directly, e.g.:

```qs
(milliseconds>(starttime+5000)) //never do it like this, as one could be positive, one negative

```
:::


#### See also

[`currentTime`](currentTime.md)&nbsp; 
[`timestamp`](timestamp.md)
