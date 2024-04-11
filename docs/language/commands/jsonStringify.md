---
id: jsonStringify
title: jsonStringify
---


<!-- REF #_command_.jsonStringify.Syntax -->**jsonStringify** ( *value* : any {, \*} ) : string<!-- END REF -->


<!-- REF #_command_.jsonStringify.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|value|any|->|Data to convert into JSON string|
|*||->|Pretty printing|
|Result|string|<-|String containing serialized JSON string|
<!-- END REF -->

#### Description

The `jsonStringify` command <!-- REF #_command_.jsonStringify.Summary -->converts the *value* parameter into a JSON string<!-- END REF -->. This command performs the opposite action of the [`jsonParse`](#jsonparse) command.

Pass the data to be serialized in *value*. It can be expressed in scalar form (string, number, date or time) or by means of a Qodly object or collection

:::note

Qodly dates will be converted either in "yyyy-mm-dd" or "YYYY-MM-DDThh:mm:sssZ" format according to the current database date setting.

:::

You can pass the optional * parameter to include formatting characters in the resulting string. This improves the presentation of JSON data (known as pretty formatting).

#### Example 1

Conversion of scalar values:

```qs

 var vc, vel, vh, vd : string

 vc = jsonStringify("Eureka!") // "Eureka!"
 vel = jsonStringify(120) // "120"

 vh = jsonStringify(?20:00:00?) // "72000" seconds since midnight


 vd = jsonStringify(!28/08/2013!) // "2013-08-27T22:00:00.000Z" (Paris timezone)

```

#### Example 2

Conversion of a string containing special characters:

```qs
var s, p : string

 s = jsonStringify("{\"name\":\"john\"}")
  // s = "{\\"name\\":\\"john\\"}"
 p = jsonParse(s)
  // p = {"name":"john"}

```

#### See also

[`jsonParse`](#jsonparse)
