---
id: generateUUID
title: generateUUID
---


<!-- REF #_command_.generateUUID.Syntax -->**generateUUID** : string<!-- END REF -->


<!-- REF #_command_.generateUUID.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|string|<-|New UUID as non-canonical string (32 characters)|
<!-- END REF -->

#### Description

The `generateUUID` command <!-- REF #_command_.generateUUID.Summary -->returns a new 32-character UUID identifier in non-canonical form<!-- END REF -->.

An UUID is a 16-byte number (128 bits). It contains 32 hexadecimal characters. It can be expressed either in non-canonical form (series of 32 letters [A-F, a-f] and/or numbers [0-9], for example 550e8400e29b41d4a716446655440000) or in canonical form (groups of 8,4,4,4,12, for example 550e8400-e29b-41d4-a716-446655440000). 

#### Example

Generation of a UUID in a variable: 

```qs
 var MyUUID : string
 MyUUID = generateUUID
```

