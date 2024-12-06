---
id: lowercase
title: lowercase
---

<!-- REF #_command_.lowercase.Syntax -->**lowercase** ( *aString* : string {, \*} ) : string<!-- END REF -->


<!-- REF #_command_.lowercase.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|&#8594;|String to convert to lowercase|
|*||&#8594;|If passed: keep accents|
|Result|string|&#8592;|String in lowercase|<!-- END REF -->

#### Description

`lowercase` <!-- REF #_command_.lowercase.Summary -->takes *aString* and returns the string with all alphabetic characters in lowercase<!-- END REF -->.

The optional `*` parameter, if passed, indicates that any accented characters present in *aString* must be returned as accented lowercase characters. By default, when this parameter is omitted, accented characters “lose” their accents after the conversion is carried out.

#### Example 1

The following project method capitalizes the string or text received as parameter. For instance, Caps ("john") would return "John".

```qs
 declare (myText : string) -> myCapText : string
 myCapText = lowercase(myText)
 if(length(myCapText)>0)
    myCapText[[1]] == uppercase(myCapText[[1]])
 end

```

#### Example 2

This example compares the results obtained according to whether or not the `*` parameter has been passed:

```qs
 var thestring : string
 thestring = lowercase("DÉJÀ VU") // thestring is "deja vu"
 thestring = lowercase("DÉJÀ VU",*) // thestring is "déjà vu"

```

#### See also

[`uppercase`](uppercase.md)
