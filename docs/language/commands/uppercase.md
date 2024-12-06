---
id: uppercase
title: uppercase
---

<!-- REF #_command_.uppercase.Syntax -->**uppercase** ( *aString* : string \{, \*\} ) : string<!-- END REF -->


<!-- REF #_command_.uppercase.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|&#8594;|String to convert to uppercase|
|*||&#8594;|If passed: keep accents|
|Result|string|&#8592;|String in uppercase|<!-- END REF -->

#### Description

`uppercase` <!-- REF #_command_.uppercase.Summary -->takes *aString* and returns the string with all alphabetic characters in uppercase.<!-- END REF -->.

The optional `*` parameter, if passed, indicates that any accented characters present in *aString* must be returned as accented uppercase characters. By default, when this parameter is omitted, accented characters “lose” their accents after the conversion is carried out.

#### Example 1

This example compares the results obtained according to whether or not the * parameter has been passed:

```qs
 var thestring : string
 thestring = uppercase("hélène") // thestring is "HELENE"
 thestring = uppercase("hélène",*) // thestring is "HÉLÈNE"

```

#### Example 2

See the example for [`lowercase`](lowercase.md).

#### See also

[`lowercase`](lowercase.md)
