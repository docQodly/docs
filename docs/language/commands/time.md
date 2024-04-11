---
id: time
title: time
---


<!-- REF #_command_.time.Syntax -->**time** ( *timeString* : string ) : time<br/>**time** ( *timeValue* : integer ) : time<!-- END REF -->


<!-- REF #_command_.time.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|timeString|string|->|String to return as a time|
|timeValue|integer|->|Number to return as a time|
|Result|time|<-|Time specified by *timeString* or *timeValue*|
<!-- END REF -->


#### Description

The `time` command <!-- REF #_command_.time.Summary -->returns a time expression equivalent to the time specified in the *timeString* or *timeValue* parameter<!-- END REF -->.

Pass in the *timeString* parameter a string containing a time expressed in one of the standard time formats (for more information, refer to the description of the [`string`](string.md#string) command).

Or, you can pass in the *timeValue* parameter a number that represents the number of seconds elapsed since 00:00:00.

:::note

If the *timeString* or *timeValue* parameter evaluates to undefined, `time` returns an empty time (00:00:00). This is useful when you expect the result of an expression (e.g. an object attribute) to be a time, even if it can be undefined.

:::

#### Example

You can express any numerical value as a time:

```qs
 var vTime : time
 vTime = time(10000)
  //vTime is 02:46:40
 vTime2 = time((60*60)+(20*60)+5200)
  //vTime2 is 02:46:40

```

#### See also

[`bool`](#../boolean#bool)<br/>[`string`](./string#string)<br/>[`timeString`](#timestring)<br/>[`timestamp`](#timestamp)
