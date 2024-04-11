---
id: splitString
title: splitString
---

<!-- REF #_command_.splitString.Syntax -->**splitString** ( *stringToSplit* : string , *separator* : string {, *options* : integer }) : collection <!-- END REF -->


<!-- REF #_command_.splitString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|stringToSplit|string|->|String value|
|separator|string|->|String at which stringToSplit splits. If empty string (""), each character of stringToSplit is a substring|
|options|integer|->|Option(s) regarding empty strings and spaces|
|Result|collection|<-|Collection of substrings|
<!-- END REF -->

#### Description

The `splitString` command <!-- REF #_command_.splitString.Summary -->returns a collection of strings, created by splitting *stringToSplit* into substrings at the boundaries specified by the *separator* parameter<!-- END REF -->. The substrings in the returned collection do not include *separator* itself.

If no *separator* is found in *stringToSplit*, `splitString` returns a collection containing a single element, *stringToSplit*. If you passed an empty string in *separator*, `splitString` returns a collection of each character of *stringToSplit*.

In the *options* parameter, you can pass one or a combination of the following constants:

|Constant|Comment|
|------|------|
|kIgnoreEmptyStrings|Remove empty strings from the resulting collection (they are ignored)|
|kTrimSpaces|Trim space characters at the beginning and end of substrings|

#### Example 1

```qs
 var myText : string
 var myCol : collection
 col = newCollection

 myText = "John,Doe,120 jefferson st.,Riverside,, NJ, 08075"
 myCol = splitString(myText,",") //["John","Doe","120 jefferson st.","Riverside",""," NJ"," 08075"]
 myCol = splitString(myText,",",kIgnoreEmptyStrings) //["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"]
 myCol = splitString(myText,",",kIgnoreEmptyStrings+kTrimSpaces) //["John","Doe","120 jefferson st.","Riverside","NJ","08075"]

```

#### Example 2

The *separator* parameter can be a multiple-character string:

```qs
 var myText : string
 var myCol : collection
 myText = "Name<tab>Smith<tab>age<tab>40"
 myCol = splitString(myText,"<tab>")
  //myCol = ["Name","Smith","age","40"]

```

#### See also

[`collection.join()`](#collection.join)<br/>
