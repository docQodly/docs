---
id: compareStrings
title: compareStrings
---


<!-- REF #_command_.compareStrings.Syntax -->**compareStrings** ( *aString* : string , *bString* : string { , *options* : integer } ) : integer<!-- END REF -->


<!-- REF #_command_.compareStrings.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|&#8594;|String to compare|
|bString|string|&#8594;|String to compare|
|options|integer|&#8594;|Comparison rule(s)|
|Result|integer|&#8592;|Result of string comparison|
<!-- END REF -->

#### Description

The `compareStrings` command <!-- REF #_command_.compareStrings.Summary -->returns a negative, zero, or positive value depending on if *aString* is evaluated as lower, equal, or higher than *bString*.<!-- END REF -->.

In the *aString* parameter, pass a string value.

In the *bString* parameter, pass a string value to be compared to *aString*.

By default, `compareStrings` functions as if the "<" (less than) operator is used. This can be modified with the options parameter. You can pass one or a combination of the following constants:

|Constant|Comment|
|:----|:----|
|kCaseInsensitive|<p>Strings are compared according to the current data language with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however&nbsp;"a" is not considered the same as "&agrave;" .&nbsp;By default, Qodly string comparison is case insensitive.&nbsp;</p><p>Can be combined with:&nbsp;</p><ul><li><u>kCharCodes</u> OR <u>kDiacriticInsensitive</u></li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>kKanaInsensitive</u></li><li><u>kWidthInsensitive</u></li><li><u>kStrict</u></li></ul>|
|kCharCodes|<p>Strings are compared according to character codes. Current data language settings are not taken into account during the comparison.&nbsp;</p><p>&nbsp;</p><p>Can be combined with:<span>&nbsp;</span><u>kCaseInsensitive</u>&nbsp;</p><p>Only for "a-z" or "A-Z" ranges. (e.g., Alpha = alpha, but Alpha # &acirc;lph&agrave;)</p>|
|kDiacriticInsensitive|<p>Strings are compared according to the current data language, however the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "&agrave;".&nbsp;</p><p>Can be combined with:</p><ul><li><u>kCaseInsensitive</u></li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>kKanaInsensitive</u></li><li><u>kWidthInsensitive</u></li><li><u>kStrict</u></li></ul>|
|kKanaInsensitive|<p>For Japanese language. Controls the distinction between Hiragana and Katakana syllables.&nbsp;From a semantic point of view, the difference between Hiragana and Katakana is usually significant, but to capture as many results as possible, the default mode in Qodly is to ignore the difference (kana insensitive). For example, "あ" is considered the same as "ア".&nbsp;The<span>&nbsp;</span><u>kStrict</u><span>&nbsp;</span>option performs a kana sensitive comparison.<span>&nbsp;</span><span>kKanaInsensitive</span><span>&nbsp;</span>can be used to partially relax the rule to be kana insensitive.&nbsp;</p><p><strong>Note:</strong><span>&nbsp;</span>The data language must be set to Japanese to use this option. For all other languages, the option is ignored and<span>&nbsp;</span>[`compareStrings`](compareStrings.md)<span>&nbsp;</span>will work as if<span>&nbsp;</span><u>kStrict</u>&nbsp;was specified. In other words, setting this option in a non-Japanese context would actually make the comparison kana sensitive (the opposite effect).</p><p>Can be combined with:</p><ul><li><u>kCaseInsensitive</u></li><li><u>kDiacriticInsensitive</u></li></ul>|
|kStrict|<p>Strings are compared for exact matches according to the current data language.&nbsp;In most cases, capitalization and diacritical marks of letters are taken into account during the comparison.&nbsp;</p><p>Can be combined with:</p><ul><li><u>kCaseInsensitive</u></li><li><u>kDiacriticInsensitive</u></li><li><u>kKanaInsensitive</u></li></ul><p>This constant implies the use of the following constant (which can also be combined for improved readability):</p><ul><li><u>kWidthInsensitive</u></li></ul>|
|kWidthInsensitive|<p>For Japanese language. Corresponds to the "East Asian Width" Unicode standard, as defined in <a href = "http://www.unicode.org/reports/tr11/">Unicode Standard Annex #11</a>. From a semantic point of view, the difference between a "narrow" and "wide" character or a "full width" and "half width" character is usually insignificant, which is the default mode in Qodly. For example, "ｱ" is considered the same as "ア". The&nbsp;<u>kStrict</u><span>&nbsp;</span>option performs a width sensitive comparison.&nbsp;</p><p><strong>Note:</strong> The data language must be set to Japanese to use this option. For all other languages, the option is ignored and [`compareStrings`](compareStrings.md) will work as if <u>kStrict</u> was specified. In other words, setting this option in a non-Japanese context would actually make the comparison width sensitive (the opposite effect).</p><p>Can be combined with:</p><ul><li><u>kCaseInsensitive</u></li><li><u>kDiacriticInsensitive</u></li><li><u>kKanaInsensitive</u></li></ul><p>This constant implies the use of the following constant (which can also be combined for improved readability):</p><ul><li><u>kStrict</u></li></ul>|

:::caution

You cannot use the @ wildcard character with `compareStrings`. For example, if you pass "*abc@*" in *aString* or *bString* the command will actually evaluate the "*abc@*" string and not an "abc" string plus any character.

:::

**Returned value**

The command returns the following integer values:

|Value |Description|
|:----|:----|
|-1|*aString* is lower than *bString*|
|0|*aString* is equal to *bString*|
|1 |*aString* is higher *bString*|

#### Example 1

You want to compare the following strings:

```qs
 var string1, string2 : string
 var myResult : integer
 string1 = "alpha Bravo charlie Delta Echo Fox-Trot"
 string2 = "Alpha Bravo Charlie Delta Echo Fox-Trot"

  //compare the strings using the character code
 myResult = compareStrings(string1,string2,kCharCodes)
  // myResult = 1

  //compare the strings using the character code but ignoring any capitalization
 myResult = compareStrings(string1,string2,kCharCodes+kCaseInsensitive)
  // myResult = 0

```

#### Example 2

The following examples illustrate the specific impact of options in **Japanese data language context**:

```qs
 var myResult : integer
//default is kana insensitive
 myResult = compareStrings("イロハ","いろは") // equal
 myResult = compareStrings("イロハ","いろは",kStrict)      // not equal
 result = compareStrings("イロハ","いろは",kKanaInsensitive) // equal

```

```qs
 var myResult : integer
//default is case insensitive
 myResult = compareStrings("さつき","さっき") // equal
 myResult = compareStrings("さつき","さっき",kStrict) // not equal
 myResult = compareStrings("さつき","さっき",kCaseInsensitive) // equal

```

```qs
 var myResult : integer
 //default is diacritic sensitive when the data language is set to Japanese (different to all other languages)
 myResult = compareStrings("ete","été") // equal in non-Japanese data language
 myResult = compareStrings("ete","été") // not equal in Japanese data language
 myResult = compareStrings("うがい","うかい") // not equal
 myResult = compareStrings("うがい","うかい",kStrict) // not equal
 myResult = compareStrings("うがい","うかい",kDiacriticInsensitive) // equal

```

:::note

The "Sorting order appropriate for searching" setting has an impact on the `compareStrings` command. In particular, the "Katakana-Hiragana Prolonged Sound Mark" or "長音記号" will be interpreted differently. The setting also has an impact on "Japanese Iteration Marks" such as "ゝ" or "ゞ".

:::

For example:


```qs
 var myResult : integer
 myResult = compareStrings("いすず","いすゞ") // equal if setting is disabled
 myResult = compareStrings("いすず","いすゞ") // not equal if setting is enabled
 myResult = compareStrings("ラーメン","ﾗｰﾒﾝ") // equal if setting is enabled
 myResult = compareStrings("ラーメン",&NBSP,"ﾗｰﾒﾝ") // not equal if setting is disabled

```

#### See also

[`position`](position.md)
