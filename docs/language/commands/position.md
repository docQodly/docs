---
id: position
title: position
---

<!-- REF #_command_.position.Syntax -->**position** ( *find* : string , *aString* : string , *start* : integer \{, \*} ) : integer <br/>**position** ( *find* : string , *aString* : string , *start* : integer , *lengthFound * : integer \{, \*\} ) : integer <br/>**position** ( *find* : string , *aString* : string , *start* : integer , *lengthFound* : integer , *options* : integer ) : integer<!-- END REF -->

<!-- REF #_command_.position.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|find|string|&#8594;|String to find|
|aString|string|&#8594;|String in which to search|
|start|integer|&#8594;|Position in string where search will start|
|lengthFound|integer|&#8592;|Length of string found|
|*||&#8594;|If passed: evaluation based on character codes|
|options|integer|&#8594;|Search condition(s)|
|Result|integer|&#8592;|Position of first occurrence|
<!-- END REF -->

#### Description

The `position` <!-- REF #_command_.position.Summary -->returns the position of the first occurrence of *find* in *aString*<!-- END REF -->.

If *aString* does not contain *find*, it returns a zero (0).   

If `position` locates an occurrence of *find*, it returns the position of the first character of the occurrence in *aString*.

If you ask for the position of an empty string within an empty string, `position` returns zero (0).

By default, the search begins at the first character of *aString*. The *start* parameter can be used to specify the character where the search will begin in *aString*.

The *lengthFound* parameter, returns the length of the string actually found by the search. This parameter is necessary to be able to correctly manage letters that can be written using one or more characters (e.g.: æ and ae, ß and ss, etc.).
If the * parameter is passed (see below), these letters are not considered as equivalent (æ # ae); in this mode, *lengthFound* is always equal to the length of *find* (if an occurrence is found).

By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example æ = ae) into account. On the other hand, it is not diacritical (a = A, a = à and so on) and does not take "ignorable" characters into account (Unicode specification). Ignorable characters include all characters in unicode C0 Control subset (U+0000 to U+001F, ascii character control set) except printable ones (U+0009 TAB, U+0010 LF, U+0011 VT, U+0012 FF and U+0013 CR).

To modify this functioning, you can pass:

* first syntax (`*` parameter): In this case, comparisons will be based on character codes. You must pass the `*` parameter:
	* If you want to take special characters into account, used for example as delimiters (`Char(1)`, etc.)
	* If the evaluation of characters must be case sensitive and take accented characters into account (`a#A`, `a#à` and so on). Note that in this mode, the evaluation does not handle variations in the way words are written.

		:::note

		In certain cases, using the `*` parameter can significantly accelerate the execution of the command.

		:::

* second syntax (`options` parameter): Pass one or a combination of the following constants:

|Constant|Comment|
|:----|:----|
|kCaseInsensitive|<p>Strings are compared according to the current data language with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however&nbsp;"a" is not considered the same as "&agrave;" .&nbsp;By default, Qodly string comparison is case insensitive.&nbsp;</p><p>Can be combined with:&nbsp;</p><ul><li><u>kCharCodes</u> OR <u>kDiacriticInsensitive</u></li><li><u>kWholeWord</u></li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>kKanaInsensitive</u></li><li><u>kWidthInsensitive</u></li><li><u>kStrict</u></li></ul>|
|kCharCodes|<p>Strings are compared according to character codes. Current data language settings are not taken into account during the comparison.&nbsp;</p><p>Can be combined with: <u>kCaseInsensitive</u></p><p>Only for "a-z" or "A-Z" ranges. (e.g., Alpha = alpha, but Alpha # &acirc;lph&agrave;)</p>|
|kDiacriticInsensitive|<p>Strings are compared according to the current data language, however the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "&agrave;".&nbsp;</p><p>Can be combined with:</p><ul><li><u>kCaseInsensitive</u></li><li><u>kWholeWord</u></li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>kKanaInsensitive</u></li><li><u>kWidthInsensitive</u></li><li><u>kStrict</u></li></ul>|
|kKanaInsensitive|<p>For Japanese language. Controls the distinction between Hiragana and Katakana syllables.&nbsp;From a semantic point of view, the difference between Hiragana and Katakana is usually significant, but to capture as many results as possible, the default mode in Qodly is to ignore the difference (kana insensitive). For example, "あ" is considered the same as "ア".&nbsp;The<span>&nbsp;</span><u>kStrict</u><span>&nbsp;</span>option performs a kana sensitive comparison.<span>&nbsp;</span><span>kKanaInsensitive</span><span>&nbsp;</span>can be used to partially relax the rule to be kana insensitive.&nbsp;</p><p><strong>Note:</strong><span>&nbsp;</span>The data language must be set to Japanese to use this option. For all other languages, the option is ignored and<span>&nbsp;</span>[`compareStrings`](compareStrings.md)<span>&nbsp;</span>will work as if<span>&nbsp;</span><u>kStrict</u>&nbsp;was specified. In other words, setting this option in a non-Japanese context would actually make the comparison kana sensitive (the opposite effect).</p><p>Can be combined with:</p><ul><li><u>kCaseInsensitive</u></li><li><u>kDiacriticInsensitive</u></li></ul>|
|kStrict|<p>Strings are compared for exact matches according to the current data language.&nbsp;In most cases, capitalization and diacritical marks of letters are taken into account during the comparison.&nbsp;</p><p>Can be combined with:</p><ul><li><u>kCaseInsensitive</u></li><li><u>kDiacriticInsensitive</u></li><li><u>kKanaInsensitive</u></li></ul><p>This constant implies the use of the following constant (which can also be combined for improved readability):</p><ul><li><u>kWidthInsensitive</u></li></ul>|
|kWholeWord|<p>Strings are compared according to the current data language. Only strings that are complete words are considered. Matching strings within other strings are not considered. For example, "where" is not considered when found within "somewhere".</p><p>Can be combined with:&nbsp;</p><ul><li><u>kCaseInsensitive</u></li><li><u>kDiacriticInsensitive</u></li></ul>|

:::caution

You cannot use the @ wildcard character with `position`. For example, if you pass "*abc@*" in *find*, the command will actually evaluate the "*abc@*" string and not an "abc" plus any character.

:::

#### Example 1


```qs
 var length, vlResult : integer
 var vtText1, vtText2  : string
 vlResult = position("ll","Willow") // vlResult gets 3
 vlResult = position(vtText1,vtText2) // Returns first occurrence of vtText1 in vtText2
 vlResult = position("day","Today is the first day",1) // vlResult gets 3
 vlResult = position("day","Today is the first day",4) // vlResult gets 20
 vlResult = position("DAY","Today is the first day",1,*) // vlResult gets 0

 vlResult = position("œ","Bœuf",1,length) // vlResult  = 2, length = 1

```

#### Example 2

In the following example, the *lengthFound* parameter can be used to search for all the occurrences of "aegis" in a text, regardless of how it is written:

```qs
 var start, lengthfound, vlResult : integer
 var myText : string
 start = 1
 repeat
    vlResult = position("aegis",myText,start,lengthfound)
    start = start+lengthfound
 until(vlResult == 0)

```

#### Example 3

In the following example, you want to find all instances of a string and replace it:

```qs
 var lengthFound, find, replace, option, p  : integer
 var myText : string
 myText = "Hello Joelle et joel!"
 find = "joel"
 replace = "Joël"
 option = kCaseInsensitive+kDiacriticInsensitive

 p = 0
 repeat
    p = position(find,myText,p+1,lengthFound,option)
    if(p>0)
       myText = substring(myText,1,p-1)+replace+substring(myText,p+lengthFound)
    end
 until(p <= 0) //result: myText -> Hello Joëlle and Joël!

```

#### See also

[`compareStrings`](compareStrings.md)<br/>
[`substring`](substring.md)
