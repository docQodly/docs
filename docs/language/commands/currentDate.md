---
id: currentDate
title: currentDate
---


<!-- REF #_command_.currentDate.Syntax -->**currentDate** : date<!-- END REF -->


<!-- REF #_command_.currentDate.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|date|<-|Current date|
<!-- END REF -->

#### Description

The `currentDate` command <!-- REF #_command_.currentDate.Summary -->returns the current date from the server<!-- END REF -->.


#### Example

In the following example we assign the current date to a string variable:

```qs
 var vCurrentDate : string
 vCurrentDate = "The date is "+string(currentDate)+"."

```

#### See also

[`dayOf`](dayOf.md)<br/>
[`monthOf`](monthOf.md)<br/>
[`yearOf`](yearOf.md)
