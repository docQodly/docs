---
id: ds
title: ds
---

<!-- REF #_command_.ds.Syntax -->
**ds** : cs.DataStore <!-- END REF -->

<!-- REF #_command_.ds.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result |cs.DataStore|<-|Reference to the datastore|
<!-- END REF -->


#### Description

The `ds` command <!-- REF #_command_.ds.Summary -->returns a reference to the datastore matching the current Qodly database<!-- END REF -->.

The datastore is opened automatically and available directly through `ds`.


#### Example

Using the datastore on the Qodly database:

```qs
 result = ds.Employee.query("firstName = :1","S@")
```
