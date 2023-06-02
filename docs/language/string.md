---
id: string
title: String
---

`String` is a generic term that stands for string and text values. 

**See also:** 

- [**String operators**](../concepts/lang-text.md#string-operators)
- [**Character Reference Symbols**](../concepts/lang-text.md#character-reference-symbols)


## String Commands

||
|---|
|[<!-- INCLUDE #_command_.changeString.Syntax -->](#changeString)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.changeString.Summary -->|
|[<!-- INCLUDE #_command_.char.Syntax -->](#char)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.char.Summary -->|
|[<!-- INCLUDE #_command_.characterCode.Syntax -->](#characterCode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.characterCode.Summary -->|
|[<!-- INCLUDE #_command_.compareStrings.Syntax -->](#compareStrings)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.compareStrings.Summary -->|
|[<!-- INCLUDE #_command_.convertFromString.Syntax -->](#convertFromString)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.convertFromString.Summary -->|
|[<!-- INCLUDE #_command_.convertToString.Syntax -->](#convertToString)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.convertToString.Summary -->|
|[<!-- INCLUDE #_command_.deleteString.Syntax -->](#deleteString)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.deleteString.Summary -->|
|[<!-- INCLUDE #_command_.insertString.Syntax -->](#insertString)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.insertString.Summary -->|
|[<!-- INCLUDE #_command_.length.Syntax -->](#length)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.length.Summary -->|
|[<!-- INCLUDE #_command_.lowercase.Syntax -->](#lowercase)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.lowercase.Summary -->|
|[<!-- INCLUDE #_command_.matchRegex.Syntax -->](#matchRegex)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.matchRegex.Summary -->|
|[<!-- INCLUDE #_command_.num.Syntax -->](#num)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.num.Summary -->|
|[<!-- INCLUDE #_command_.position.Syntax -->](#position)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.position.Summary -->|
|[<!-- INCLUDE #_command_.replaceString.Syntax -->](#replaceString)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.replaceString.Summary -->|
|[<!-- INCLUDE #_command_.splitString.Syntax -->](#splitstring)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.splitString.Summary -->|
|[<!-- INCLUDE #_command_.string.Syntax -->](#string)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.string.Summary -->|
|[<!-- INCLUDE #_command_.substring.Syntax -->](#substring)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.substring.Summary -->|
|[<!-- INCLUDE #_command_.uppercase.Syntax -->](#uppercase)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.uppercase.Summary -->|



## changeString

<!-- REF #_command_.changeString.Syntax -->**changeString** ( *source* : string , *newChars* : string , *where* : integer ) : string<!-- END REF -->


<!-- REF #_command_.changeString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|->|Original string|
|newChars|string|->|New characters|
|where|integer|->|Where to start the changes|
|Result|string|<-|Resulting string|<!-- END REF -->

#### Description

The `changeString` command <!-- REF #_command_.changeString.Summary -->changes a group of characters in *source* and returns the resulting string<!-- END REF -->. The command overlays *source*, with the characters in *newChars*, at the character described by *where*.

If *newChars* is an empty string (""), `changeString` returns *source* unchanged. `changeString` always returns a string of the same length as `source`. If *where* is less than one or greater than the length of *source*, `changeString` returns *source*.

`changeString` is different from [`insertString`](#insertstring) in that it overwrites characters instead of inserting them.

#### Example

```qs
var vtResult : string
vtResult=changeString("Acme","CME",2) //vtResult gets "ACME"
vtResult=changeString("November","Dec",1) //vtResult gets "December"

```

#### See also

[`deleteString`](#deletestring)<br/>
[`insertString`](#insertstring)<br/>
[`replaceString`](#replacestring)

## char

<!-- REF #_command_.char.Syntax -->**char** ( *charCode* : integer ) : string<!-- END REF -->


<!-- REF #_command_.char.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|charCode|integer|->|Character code|
|Result|string|<-|Character represented by the charCode|<!-- END REF -->

#### Description

The `char` command <!-- REF #_command_.char.Summary -->returns the character whose code is *charCode*<!-- END REF -->. 

Pass a UTF-16 value (included between 1 and 65535) in *charCode*.

:::tip

In editing a method, the command `char` is commonly used to specify characters that cannot be entered from the keyboard or that would be interpreted as an editing command in the code editor.

:::

#### Example

```qs

var myText : string
myText ="hello"+char(carriageReturn)+"world"
```

#### See also

[`characterCode`](#charactercode)<br/>
[`Character Reference Symbols`](../basics/lang-text#character-reference-symbols)

## characterCode

<!-- REF #_command_.characterCode.Syntax -->**characterCode** ( *character* : String ) : integer<!-- END REF -->


<!-- REF #_command_.characterCode.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|character|string|->|Character for which you want to get the code|
|Result|integer|<-|Character code|<!-- END REF -->

#### Description

The `characterCode` command <!-- REF #_command_.characterCode.Summary -->returns the Unicode UTF-16 code (included between 1 and 65535) of *character*<!-- END REF -->. 

If there is more than one character in the string, `characterCode` returns only the code of the first character.

The [`char`](#char) function is the counterpart of `characterCode`. It returns the character that the UTF-16 code represents.


#### Example 1

Uppercase and lowercase characters are considered equal within a comparison. You can use `characterCode` to differentiate between uppercase and lowercase characters. Thus, this line returns true:

```qs
("A"=="a")

```

On the other hand, this line returns False:

```qs
 (characterCode("A")==characterCode("a"))

```

#### Example 2

This example returns the code of the first character of the string "ABC":

```qs
 var GetCode : integer
 GetCode=characterCode("ABC") //GetCode gets 65, the characterCode of A

```

#### Example 3

The following example tests for carriage returns and tabs:

```qs
 var vlChar : integer
 var vtText : string
 for(vlChar,1,length(vtText))
    switch
       :(vtText[[vlChar]]==char(Carriage return))
  //do something
       :(vtText[[vlChar]]==char(Tab))
  // do something else
       :(...)
  //...
    end
 end

```

When executed multiple times on large texts, this test will run faster when compiled if it is written this way:

```qs
 var vlChar, vlCode  : integer
 var vtText : string
 for(vlChar,1,length(vtText))
    vlCode=characterCode(vtText[[vlChar]])
    switch
       :(vlCode==Carriage return)
  //do something
       :(vlCode==Tab)
  //do something else
       :(...)
  //...
    end
 end

```

The second piece of code runs faster for two reasons: it does only one character reference by iteration and uses integer comparisons instead of string comparisons to test for carriage returns and tabs. Use this technique when working with common codes such as CR and TAB

#### See also

[`char`](#char)<br/>
[`Character Reference Symbols`](#character-reference-symbols)

## compareStrings

<!-- REF #_command_.compareStrings.Syntax -->**compareStrings** ( *aString* : string , *bString* : string { , *options* : integer } ) : integer<!-- END REF -->


<!-- REF #_command_.compareStrings.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|->|String to compare|
|bString|string|->|String to compare|
|options|integer|->|Comparison rule(s)|
|Result|integer|<-|Result of string comparison|<!-- END REF -->

#### Description

The `compareStrings` command <!-- REF #_command_.compareStrings.Summary -->returns a negative, zero, or positive value depending on if *aString* is evaluated as lower, equal, or higher than *bString*.<!-- END REF -->. 

In the *aString* parameter, pass a string value.

In the *bString* parameter, pass a string value to be compared to *aString*.

By default, `compareStrings` functions as if the "<" (less than) operator is used. This can be modified with the options parameter. You can pass one or a combination of the following constants: 

|Constant|Value|Comment|
|:----|:----|:----|
|sk case insensitive|2|<p>Strings are compared according to the current data language with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however&nbsp;"a" is not considered the same as "&agrave;" .&nbsp;By default, Qodly string comparison is case insensitive.&nbsp;</p><p>Can be combined with:&nbsp;</p><ul><li><u>sk char codes</u> OR <u>sk diacritic insensitive</u></li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>sk kana insensitive</u></li><li><u>sk width insensitive</u></li><li><u>sk strict</u></li></ul>|
|sk char codes|1|<p>Strings are compared according to character codes. Current data language settings are not taken into account during the comparison.&nbsp;</p><p>&nbsp;</p><p>Can be combined with:<span>&nbsp;</span><u>sk case insensitive</u>&nbsp;</p><p>Only for "a-z" or "A-Z" ranges. (e.g., Alpha = alpha, but Alpha # &acirc;lph&agrave;)</p>|
|sk diacritic insensitive|4|<p>Strings are compared according to the current data language, however the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "&agrave;".&nbsp;</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>sk kana insensitive</u></li><li><u>sk width insensitive</u></li><li><u>sk strict</u></li></ul>|
|sk kana insensitive|8|<p>For Japanese language. Controls the distinction between Hiragana and Katakana syllables.&nbsp;From a semantic point of view, the difference between Hiragana and Katakana is usually significant, but to capture as many results as possible, the default mode in Qodly is to ignore the difference (kana insensitive). For example, "あ" is considered the same as "ア".&nbsp;The<span>&nbsp;</span><u>sk strict</u><span>&nbsp;</span>option performs a kana sensitive comparison.<span>&nbsp;</span><span>sk kana insensitive</span><span>&nbsp;</span>can be used to partially relax the rule to be kana insensitive.&nbsp;</p><p><strong>Note:</strong><span>&nbsp;</span>The data language must be set to Japanese to use this option. For all other languages, the option is ignored and<span>&nbsp;</span>[`compareStrings`](#comparestrings)<span>&nbsp;</span>will work as if<span>&nbsp;</span><u>sk strict</u>&nbsp;was specified. In other words, setting this option in a non-Japanese context would actually make the comparison kana sensitive (the opposite effect).</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li></ul>|
|sk strict|0|<p>Strings are compared for exact matches according to the current data language.&nbsp;In most cases, capitalization and diacritical marks of letters are taken into account during the comparison.&nbsp;</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li><li><u>sk kana insensitive</u></li></ul><p>This constant implies the use of the following constant (which can also be combined for improved readability):</p><ul><li><u>sk width insensitive</u></li></ul>|
|sk width insensitive|16|<p>For Japanese language. Corresponds to the "East Asian Width" Unicode standard, as defined in <a href="http://www.unicode.org/reports/tr11/">Unicode Standard Annex #11</a>. From a semantic point of view, the difference between a "narrow" and "wide" character or a "full width" and "half width" character is usually insignificant, which is the default mode in Qodly. For example, "ｱ" is considered the same as "ア". The&nbsp;<u>sk strict</u><span>&nbsp;</span>option performs a width sensitive comparison.&nbsp;</p><p><strong>Note:</strong> The data language must be set to Japanese to use this option. For all other languages, the option is ignored and [`compareStrings`](#comparestrings) will work as if <u>sk strict</u> was specified. In other words, setting this option in a non-Japanese context would actually make the comparison width sensitive (the opposite effect).</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li><li><u>sk kana insensitive</u></li></ul><p>This constant implies the use of the following constant (which can also be combined for improved readability):</p><ul><li><u>sk strict</u></li></ul>|

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
 string1="alpha Bravo charlie Delta Echo Fox-Trot"
 string2="Alpha Bravo Charlie Delta Echo Fox-Trot"
 
  //compare the strings using the character code
 myResult=compareStrings(string1,string2,sk char codes)
  // myResult = 1
 
  //compare the strings using the character code but ignoring any capitalization
 myResult=compareStrings(string1,string2,sk char codes+sk case insensitive)
  // myResult = 0
 
```

#### Example 2

The following examples illustrate the specific impact of options in **Japanese data language context**:

```qs
 var myResult : integer
//default is kana insensitive
 myResult=compareStrings("イロハ","いろは") // equal
 myResult=compareStrings("イロハ","いろは",sk strict)      // not equal
 result=compareStrings("イロハ","いろは",sk kana insensitive) // equal
 
```

```qs
 var myResult : integer
//default is case insensitive
 myResult=compareStrings("さつき","さっき") // equal
 myResult=compareStrings("さつき","さっき",sk strict) // not equal
 myResult=compareStrings("さつき","さっき",sk case insensitive) // equal
 
```

```qs
 var myResult : integer
 //default is diacritic sensitive when the data language is set to Japanese (different to all other languages)
 myResult=compareStrings("ete","été") // equal in non-Japanese data language
 myResult=compareStrings("ete","été") // not equal in Japanese data language
 myResult=compareStrings("うがい","うかい") // not equal
 myResult=compareStrings("うがい","うかい",sk strict) // not equal
 myResult=compareStrings("うがい","うかい",sk diacritic insensitive) // equal
 
```

:::note

The "Sorting order appropriate for searching" setting has an impact on the `compareStrings` command. In particular, the "Katakana-Hiragana Prolonged Sound Mark" or "長音記号" will be interpreted differently. The setting also has an impact on "Japanese Iteration Marks" such as "ゝ" or "ゞ". 

:::

For example:


```qs
 var myResult : integer
 myResult=compareStrings("いすず","いすゞ") // equal if setting is disabled
 myResult=compareStrings("いすず","いすゞ") // not equal if setting is enabled
 myResult=compareStrings("ラーメン","ﾗｰﾒﾝ") // equal if setting is enabled
 myResult=compareStrings("ラーメン",&NBSP,"ﾗｰﾒﾝ") // not equal if setting is disabled
 
```

#### See also

[`position`](#position)

## convertFromString

<!-- REF #_command_.convertFromString.Syntax -->**convertFromString** ( *aString* : string , *charSetString* : string ) : blob<br/>**convertFromString** ( *aString* : string , *charSetInt* : integer ) : blob<!-- END REF -->


<!-- REF #_command_.convertFromString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|->|string expressed in current character set|
|charSetString|string|->|Name of character set|
|charSetInt|integer|->|Number of character set|
|Result|blob|<-|blob containing converted string|<!-- END REF -->

#### Description

The `convertFromString` command <!-- REF #_command_.convertFromString.Summary -->can be used to convert a string expressed in the current character set to a string expressed in another character set<!-- END REF -->. 

In the *aString* parameter, pass the text to be converted. This text is expressed in the current character set (Unicode by default).

In *charSetString* or *charSetInt*, pass the character set to be used for the conversion. You can pass a string containing the standard name of the set (for example "ISO-8859-1" or "UTF-8"), or its MIBEnum identifier.

Here is a list of character sets supported by the convertFromString and [`convertToString`](#converttostring) commands:

|MIBEnum|Name(s)|
|:----|:----|
|1017|UTF-32|
|1018|UTF-32BE|
|1019|UTF-32LE|
|1015|UTF-16|
|1013|UTF-16BE|
|1014|UTF-16LE|
|106|UTF-8|
|1012|UTF-7|
|3|US-ASCII|
|3|ANSI_X3.4-1968|
|3|ANSI_X3.4-1986|
|3|ASCII|
|3|cp367|
|3|csASCII|
|3|IBM367|
|3|iso-ir-6|
|3|ISO_646.irv:1991|
|3|ISO646-US|
|3|us|
|2011|IBM437|
|2011|cp437|
|2011|437|
|2011|csPC8CodePage437|
|2028|ebcdic-cp-us|
|2028|cp037|
|2028|csIBM037|
|2028|ebcdic-cp-ca|
|2028|ebcdic-cp-n|
|2028|ebcdic-cp-wt|
|2028|IBM037|
|2027|MacRoman|
|2027|x-mac-roman|
|2027|mac|
|2027|macintosh|
|2027|csMacintosh|
|2252|windows-1252|
|1250|MacCE|
|1250|x-mac-ce|
|2250|windows-1250|
|1251|x-mac-cyrillic|
|2251|windows-1251|
|1253|x-mac-greek|
|2253|windows-1253|
|1254|x-mac-turkish|
|2254|windows-1254|
|1256|x-mac-arabic|
|2256|windows-1256|
|1255|x-mac-hebrew|
|2255|windows-1255|
|1257|x-mac-ce|
|2257|windows-1257|
|17|Shift_JIS|
|17|csShiftJIS|
|17|MS_Kanji|
|17|Shift-JIS|
|39|ISO-2022-JP|
|39|csISO2022JP|
|2026|Big5|
|2026|csBig5|
|38|EUC-KR|
|38|csEUCKR|
|2084|KOI8-R|
|2084|csKOI8R|
|4|ISO-8859-1|
|4|CP819|
|4|csISOLatin1|
|4|IBM819|
|4|iso-ir-100|
|4|ISO_8859-1|
|4|ISO_8859-1:1987|
|4|l1|
|4|latin1|
|5|ISO-8859-2|
|5|csISOLatin2|
|5|iso-ir-101|
|5|ISO_8859-2|
|5|ISO_8859-2:1987|
|5|l2|
|5|latin2|
|6|ISO-8859-3|
|6|csISOLatin3|
|6|ISO-8859-3:1988|
|6|iso-ir-109|
|6|ISO_8859-3|
|6|l3|
|6|latin3|
|7|ISO-8859-4|
|7|csISOLatin4|
|7|ISO-8859-4:1988|
|7|iso-ir-110|
|7|ISO_8859-4|
|7|l4|
|7|latin4|
|8|ISO-8859-5|
|8|csISOLatinCyrillic|
|8|cyrillic|
|8|ISO-8859-5:1988|
|8|iso-ir-144|
|8|ISO_8859-5|
|9|ISO-8859-6|
|9|arabic|
|9|ASMO-708|
|9|csISOLatinArabic|
|9|ECMA-114|
|9|ISO-8859-6:1987|
|9|iso-ir-127|
|9|ISO_8859-6|
|10|ISO-8859-7|
|10|csISOLatinGreek|
|10|ECMA-118|
|10|ELOT_928|
|10|greek|
|10|greek8|
|10|iso-ir-126|
|10|ISO_8859-7|
|10|ISO_8859-7:1987|
|11|ISO-8859-8|
|11|csISOLatinHebrew|
|11|hebrew|
|11|iso-ir-138|
|11|ISO_8859-8|
|11|ISO_8859-8:1988|
|12|ISO-8859-9|
|12|csISOLatin5|
|12|iso-ir-148|
|12|ISO_8859-9|
|12|ISO_8859-9:1989|
|12|l5|
|12|latin5|
|13|ISO-8859-10|
|13|csISOLatin6|
|13|iso-ir-157|
|13|ISO_8859-10|
|13|ISO_8859-10:1992|
|13|l6|
|13|latin6|
|109|ISO-8859-13|
|111|ISO-8859-15|
|111|Latin-9|
|113|GBK|
|2025|GB2312|
|2025|csGB2312|
|2025|x-mac-chinesesimp|
|2024|Windows-31J|
|57|GB_2312-80|
|57|csISO58GB231280|

:::note

Several rows have the same MIBEnum identifier because a character set can have more than one name (alias).

:::

For more information about the names of character sets, please refer to the following address: *http://www.iana.org/assignments/character-sets*

After execution of the command, the converted text will be returned in the *convertedBLOB* blob. This blob can be read by the [`convertToString`](#converttostring) command.


#### See also

[`convertToString`](#converttostring)

## convertToString

<!-- REF #_command_.convertToString.Syntax -->**convertToString** ( *aBlob* : blob , *charSetString* : string ) : string<br/>**convertToString** ( *aBlob* : blob , *charSetInt* : integer ) : string<!-- END REF -->

<!-- REF #_command_.convertToString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aBlob|blob|->|blob containing text expressed in a specific character set|
|charSetString|string|->|Name of blob character set|
|charSetInt|integer|->|Number of blob character set|
|Result|string|<-|Contents of blob expressed in Qodly character set|<!-- END REF -->

#### Description

The `convertToString` command <!-- REF #_command_.convertToString.Summary -->converts the text contained in the *aBlob* parameter and returns it in text expressed in the character set of Qodly<!-- END REF -->. Qodly uses the UTF-16 character set by default.

In *charSetString* or *charSetInt*, pass the character set of the text contained in *aBlob*, which will be used for the conversion. If the blob contains text copied from within Qodly, then the blob’s text is likely to be in the UTF-16 character set. You can pass a string providing the standard name of the character set, or one of its aliases (for example, “ISO-8859-1” or “UTF-8”), or its identifier (integer). For more information, please refer to the description of the [`convertFromString`](#convertfromstring) command.

`convertToString` supports Byte Order Marks (BOMs). If the character set specified is of the Unicode type (UTF-8, UTF-16 or UTF-32), Qodly attempts to identify a BOM among the first bytes received. If one is detected, it is filtered out of the result and Qodly uses the character set that it defines instead of the one specified.

#### See also

[`convertFromString`](#convertfromstring)

## deleteString

<!-- REF #_command_.deleteString.Syntax -->**deleteString** ( *source* : string , *where* : integer , *numChars* : integer ) : string<!-- END REF -->


<!-- REF #_command_.deleteString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|->|String from which to delete characters|
|where |integer|->|First character to delete|
|numChars|integer|->|Number of characters to delete|
|Result|string|<-|Resulting string|<!-- END REF -->

#### Description

`deleteString` <!-- REF #_command_.deleteString.Summary -->deletes *numChars* from *source*, starting at *where*, and returns the resulting string<!-- END REF -->. 

`deleteString` returns the same string as *source* when:

* *source* is an empty string
* *where* is greater than the length of *source*
* *numChars* is zero (0)

If *where* is less than one, the characters are deleted from the beginning of the string.

If *where* plus *numChars* is equal to or greater than the length of *source*, the characters are deleted from *where* to the end of *source*.

#### Example

```qs
 var vtResult, vtOtherVar : string
 vtResult=deleteString("Lamborghini",6,6) // vtResult gets "Lambo"
 vtResult=deleteString("Indentation",6,2) // vtResult gets "Indention"
 vtResult=deleteString(vtOtherVar,3,32000) // vtResult gets the first two characters of vtOtherVar
 
```

#### See also

[`changeString`](#changestring)<br/>
[`insertString`](#insertstring)<br/>
[`replaceString`](#replacestring)


## insertString

<!-- REF #_command_.insertString.Syntax -->**insertString** ( *source* : string , *what* : string , *where* : integer ) : string<!-- END REF -->


<!-- REF #_command_.insertString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|->|String in which to insert the other string|
|what|string|->|String to insert|
|where|integer|->|Where to insert|
|Result|string|<-|Resulting string|<!-- END REF -->

#### Description

The `insertString` command <!-- REF #_command_.insertString.Summary -->inserts a string into *source* and returns the resulting string<!-- END REF -->. The command inserts the string *what* before the character at position *where*.

If *what* is an empty string (""), `insertString` returns source unchanged.

If *where* is greater than the length of *source*, then *what* is appended to *source*. If *where* is less than one (1), then *what* is inserted before *source*.

`insertString` is different from [`changeString`](#changestring) in that it inserts characters instead of overwriting them.

#### Example

```qs
 var vtResult : string
 vtResult=insertString("The tree"," green",4) // vtResult gets "The green  tree"
 vtResult=insertString("Shut","o",3) // vtResult gets "Shout"
 vtResult=insertString("Indention","ta",6) // vtResult gets "Indentation"
 
```

#### See also

[`changeString`](#changestring)<br/>
[`deleteString`](#deletestring)<br/>
[`replaceString`](#replacestring)

## length

<!-- REF #_command_.length.Syntax -->**length** ( *aString* : string ) : integer<!-- END REF -->


<!-- REF #_command_.length.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|->|String for which to return length|
|Result|integer|<-|Length of string|<!-- END REF -->

#### Description

`length` is used to find the length of a *aString*. `length` <!-- REF #_command_.length.Summary -->returns the number of characters that are in a *aString*.<!-- END REF -->. 

:::note

When you want to check whether a string contains any characters, including ignorable characters, you must use the test `if(length(vtAnyText)==0)` rather than `if(vtAnyText=="")`. If the string contains for example `char(1)`, which is an ignorable character, `length(vtAnyText)` does return 1 but `vtAnyText==""` returns true.

:::

#### Example

```qs
 var vtResult : string
 vlResult=length("Topaz") // vlResult gets 5
 vlResult=length("Citizen") // vlResult gets 7
 
```


## lowercase

<!-- REF #_command_.lowercase.Syntax -->**lowercase** ( *aString* : string {, \*} ) : string<!-- END REF -->


<!-- REF #_command_.lowercase.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|->|String to convert to lowercase|
|*||->|If passed: keep accents|
|Result|string|<-|String in lowercase|<!-- END REF -->

#### Description

`lowercase` <!-- REF #_command_.lowercase.Summary -->takes *aString* and returns the string with all alphabetic characters in lowercase<!-- END REF -->. 

The optional `*` parameter, if passed, indicates that any accented characters present in *aString* must be returned as accented lowercase characters. By default, when this parameter is omitted, accented characters “lose” their accents after the conversion is carried out.

#### Example 1

The following project method capitalizes the string or text received as parameter. For instance, Caps ("john") would return "John".

```qs
 declare (myText : string) -> myCapText : string
 myCapText=lowercase(myText)
 if(length(myCapText)>0)
    myCapText[[1]]==uppercase(myCapText[[1]])
 end

```

#### Example 2

This example compares the results obtained according to whether or not the `*` parameter has been passed:

```qs
 var thestring : string 
 thestring=lowercase("DÉJÀ VU") // thestring is "deja vu"
 thestring=lowercase("DÉJÀ VU",*) // thestring is "déjà vu"

```

#### See also

[`uppercase`](#uppercase)

## matchRegex

<!-- REF #_command_.matchRegex.Syntax -->**matchRegex** ( *pattern* : string , *aString* : string ) : boolean <br/>**matchRegex** ( *pattern* : string , *aString* : string , *start* : integer {, \*} ) : boolean <br/>**matchRegex** ( *pattern* : string , *aString* : string , *start* : integer , *pos_found* : integer , *length_found* : integer {, \*} ) : boolean<!-- END REF -->

<!-- REF #_command_.matchRegex.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|pattern|string|->|Regular expression (complete equality when using two parameters only)|
|aString|string|->|String in which search will be done|
|start|integer|->|Position in aString where search will start|
|pos_found|integer |<-|Position of occurrence|
|length_found|integer |<-|Length of occurrence|
|*||->|If passed: only searches at position indicated|
|Result|boolean|<-|True = search has found an occurrence; Otherwise, False|<!-- END REF -->

#### Description

The `matchRegex` command <!-- REF #_command_.matchRegex.Summary -->searches for the regular expression *pattern* in *aString*<!-- END REF -->. It checks the conformity of a character string with respect to a set of synthesized rules by means of a meta-language called "regular expression" or "rational expression". The *regex* abbreviation is commonly used to indicate these types of notations. 

Pass the regular expression to search for in *pattern*. This consists of a set of characters used for describing a character string, using special characters.

Pass the string where you want to search for the regular expression in *aString*.

In *start*, pass the position at which to start the search in *aString*.

In *pos_found* and *length_found* variables, the command returns the position and length of the first occurrence found.

The optional `*` parameter indicates, when it is passed, that the search must be carried out at the position specified by *start* without searching any further in the case of failure.

The command returns **true** if the search has found an occurrence.

For more information about regex, refer to the dedicated [Wikipedia page](http://en.wikipedia.org/wiki/Regular_expression). 

For more information about the syntax of the regular expression passed in the *pattern* parameter, refer to [this page](https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions).

#### Example 1

Search in text by position. You want to fidn all tags in a text:

```qs
 declare (myText : string) -> result : collection
 var start : integer
 var vfound : boolean
 start=1
 result=newCollection
 repeat
    vfound=matchRegex("<.*>",myText,start,pos_found,length_found)
    if(vfound)
       result.push(substring(myText,pos_found,length_found))
       start=pos_found+length_found
    end
 until(not(vfound))

```


#### Example 2

Search limiting the comparison of the pattern to the position indicated:
Add a star to the end of one of the two previous syntaxes.

```qs
 var pos_found, length_found : integer
 var vfound : string

 vfound=matchRegex("a.b","---a-b---",1,pos_found,length_found)
  // returns true
 vfound=matchRegex("a.b","---a-b---",1,pos_found,length_found,*)
  // returns false
 vfound=matchRegex("a.b","---a-b---",4,pos_found,length_found,*)
  // returns true

```

:::note

The positions and lengths returned are only meaningful in Unicode mode or if the text being worked with is of the 7-bit ASCII type.

:::

#### Error management

In the event of an error, the command generates an error that you can intercept via a method installed by the `onErrCall` command.


## num

<!-- REF #_command_.num.Syntax -->**num** ( *expression* : string {, *separator* : string } ) : number <br/>**num** ( *expression* : number ) : number <br/>**num** ( *expression* : boolean ) : number <!-- END REF -->


<!-- REF #_command_.num.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|mixed|->|Character for which you want to get the code|
|separator|string|->|Decimal separator|
|Result|number|<-|Numeric form of the expression parameter|<!-- END REF -->

#### Description

The `num` command <!-- REF #_command_.num.Summary -->returns the numeric form of the string, boolean or numeric expression you pass in *expression*<!-- END REF -->. The optional *separator* parameter designates a decimal separator for evaluating string type expressions.

**String Expressions**

If *expression* consists only of one or more alphabetic characters, `num` returns a zero. If *expression* includes alphabetic and numeric characters, the command ignores the alphabetic characters. Thus, it transforms the string "a1b2c3" into the number 123.

There are three reserved characters that `num` treats specially: the decimal separator as defined in the system (if the *separator* parameter is not passed), the hyphen “-”, and “e” or “E”. These characters are interpreted as numeric format characters.

* The decimal separator is interpreted as a decimal place and must appear embedded in a numeric string. By default, the command uses the decimal separator set by the operating system. You can modify this character using the *separator* parameter (see below).
* The hyphen causes the number or exponent to be negative. The hyphen must appear before any negative numeric characters or after the “e” for an exponent. Except for the “e” character, if a hyphen is embedded in a numeric string, the portion of the string after the hyphen is ignored. For example, `num`("123-456") returns 123, but `num`("-9") returns -9.
* The e or E causes any numeric characters to its right to be interpreted as the power of an exponent. The “e” must be embedded in a numeric string. Thus, `num`("123e–2") returns 1.23.
Note that when the string includes more than one "e", conversion might give different results under Mac OS and under Windows.

The *separator* parameter designates a custom decimal separator for evaluating the *expression*. When the string to be evaluated is expressed with a decimal separator different from the system operator, the command returns an incorrect result. The *separator* parameter can be used in this case to obtain a correct evaluation. When this parameter is passed, the command does not take the system decimal separator into account. You can pass one or more characters.

**Boolean Expressions**

If you pass a boolean expression, `num` returns 1 if the expression is true; otherwise, it returns 0 (zero).

**Numeric Expressions**

If you pass a numeric expression in the *expression* parameter, `num` returns the value passed in the *expression* parameter as is. This can be useful more particularly in the case of generic programming.

**Undefined Expressions**

If *expression* evaluates to undefined, the command returns 0 (zero). This is useful when you expect the result of an expression (e.g. an object attribute) to be a number, even if it can be undefined.


#### Example 1

The following example illustrates how `num` works when passed a string argument. 

```qs
 var vResult : number
 vResult=num("ABCD") // vResult gets 0
 vResult=num("A1B2C3") // vResult gets 123
 vResult=num("123") // vResult gets 123
 vResult=num("123.4") // vResult gets 123.4
 vResult=num("–123") // vResult gets –123
 vResult=num("–123e2") // vResult gets –12300

```

#### Example 2

This example compares the results obtained depending on the separator:

```qs
 var thestring : string
 var thenum : number
 thestring="33 333,33"
 thenum=num(thestring) // 3333333
 thenum=num(thestring,",") // 33333.33

```

#### See also

[`bool`](#bool)<br/>
[`string`](#string)

## position

<!-- REF #_command_.position.Syntax -->**position** ( *find* : string , *aString* : string , *start* : integer {, \*} ) : integer <br/>**position** ( *find* : string , *aString* : string , *start* : integer , *lengthFound * : integer {, \*} ) : integer <br/>**position** ( *find* : string , *aString* : string , *start* : integer , *lengthFound* : integer , *options* : integer ) : integer<!-- END REF -->

<!-- REF #_command_.position.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|find|string|->|String to find|
|aString|string|->|String in which to search|
|start|integer|->|Position in string where search will start|
|lengthFound|integer|<-|Length of string found|
|*||->|If passed: evaluation based on character codes|
|options|integer|->|Search condition(s)|
|Result|integer|<-|Position of first occurrence|<!-- END REF -->

#### Description

The `position` <!-- REF #_command_.position.Summary -->returns the position of the first occurrence of *find* in *aString*<!-- END REF -->. 

If *aString* does not contain *find*, it returns a zero (0).   

If `position` locates an occurrence of *find*, it returns the position of the first character of the occurrence in *aString*.

If you ask for the position of an empty string within an empty string, `position` returns zero (0). 

By default, the search begins at the first character of *aString*. The *start* parameter can be used to specify the character where the search will begin in *aString*. 

The *lengthFound* parameter, returns the length of the string actually found by the search. This parameter is necessary to be able to correctly manage letters that can be written using one or more characters (e.g.: æ and ae, ß and ss, etc.).
If the * parameter is passed (see below), these letters are not considered as equivalent (æ # ae); in this mode, *lengthFound* is always equal to the length of *find* (if an occurrence is found). 

By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example æ = ae) into account. On the other hand, it is not diacritical (a=A, a=à and so on) and does not take "ignorable" characters into account (Unicode specification). Ignorable characters include all characters in unicode C0 Control subset (U+0000 to U+001F, ascii character control set) except printable ones (U+0009 TAB, U+0010 LF, U+0011 VT, U+0012 FF and U+0013 CR). 

To modify this functioning, you can pass: 

* first syntax (`*` parameter): In this case, comparisons will be based on character codes. You must pass the `*` parameter:
	* If you want to take special characters into account, used for example as delimiters (`Char(1)`, etc.)
	* If the evaluation of characters must be case sensitive and take accented characters into account (`a#A`, `a#à` and so on). Note that in this mode, the evaluation does not handle variations in the way words are written.

		:::note

		In certain cases, using the `*` parameter can significantly accelerate the execution of the command. 

		:::

* second syntax (`options` parameter): one or a combination of the following constants:

|Constant|Value|Comment|
|:----|:----|:----|
|sk case insensitive|2|<p>Strings are compared according to the current data language with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however&nbsp;"a" is not considered the same as "&agrave;" .&nbsp;By default, Qodly string comparison is case insensitive.&nbsp;</p><p>Can be combined with:&nbsp;</p><ul><li><u>sk char codes</u> OR <u>sk diacritic insensitive</u></li><li><u>sk whole word</u></li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>sk kana insensitive</u></li><li><u>sk width insensitive</u></li><li><u>sk strict</u></li></ul>|
|sk char codes|1|<p>Strings are compared according to character codes. Current data language settings are not taken into account during the comparison.&nbsp;</p><p>Can be combined with: <u>sk case insensitive</u></p><p>Only for "a-z" or "A-Z" ranges. (e.g., Alpha = alpha, but Alpha # &acirc;lph&agrave;)</p>|
|sk diacritic insensitive|4|<p>Strings are compared according to the current data language, however the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "&agrave;".&nbsp;</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk whole word</u></li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>sk kana insensitive</u></li><li><u>sk width insensitive</u></li><li><u>sk strict</u></li></ul>|
|sk kana insensitive|8|<p>For Japanese language. Controls the distinction between Hiragana and Katakana syllables.&nbsp;From a semantic point of view, the difference between Hiragana and Katakana is usually significant, but to capture as many results as possible, the default mode in Qodly is to ignore the difference (kana insensitive). For example, "あ" is considered the same as "ア".&nbsp;The<span>&nbsp;</span><u>sk strict</u><span>&nbsp;</span>option performs a kana sensitive comparison.<span>&nbsp;</span><span>sk kana insensitive</span><span>&nbsp;</span>can be used to partially relax the rule to be kana insensitive.&nbsp;</p><p><strong>Note:</strong><span>&nbsp;</span>The data language must be set to Japanese to use this option. For all other languages, the option is ignored and<span>&nbsp;</span>[`compareStrings`](#comparestrings)<span>&nbsp;</span>will work as if<span>&nbsp;</span><u>sk strict</u>&nbsp;was specified. In other words, setting this option in a non-Japanese context would actually make the comparison kana sensitive (the opposite effect).</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li></ul>|
|sk strict|0|<p>Strings are compared for exact matches according to the current data language.&nbsp;In most cases, capitalization and diacritical marks of letters are taken into account during the comparison.&nbsp;</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li><li><u>sk kana insensitive</u></li></ul><p>This constant implies the use of the following constant (which can also be combined for improved readability):</p><ul><li><u>sk width insensitive</u></li></ul>|
|sk whole word|32|<p>Strings are compared according to the current data language. Only strings that are complete words are considered. Matching strings within other strings are not considered. For example, "where" is not considered when found within "somewhere".</p><p>Can be combined with:&nbsp;</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li></ul>|

:::caution

You cannot use the @ wildcard character with `position`. For example, if you pass "*abc@*" in *find*, the command will actually evaluate the "*abc@*" string and not an "abc" plus any character.

:::

#### Example 1


```qs
 var length, vlResult : integer
 var vtText1, vtText2  : string
 vlResult=position("ll","Willow") // vlResult gets 3
 vlResult=position(vtText1,vtText2) // Returns first occurrence of vtText1 in vtText2
 vlResult=position("day","Today is the first day",1) // vlResult gets 3
 vlResult=position("day","Today is the first day",4) // vlResult gets 20
 vlResult=position("DAY","Today is the first day",1,*) // vlResult gets 0
 
 vlResult=position("œ","Bœuf",1,length) // vlResult =2, length = 1

```

#### Example 2

In the following example, the *lengthFound* parameter can be used to search for all the occurrences of "aegis" in a text, regardless of how it is written:

```qs
 var start, lengthfound, vlResult : integer
 var myText : string
 start=1
 repeat
    vlResult=position("aegis",myText,start,lengthfound)
    start=start+lengthfound
 until(vlResult==0)

```

#### Example 3

In the following example, you want to find all instances of a string and replace it:

```qs
 var lengthFound, find, replace, option, p  : integer
 var myText : string
 myText="Hello Joelle et joel!"
 find="joel"
 replace="Joël"
 option=sk case insensitive+sk diacritic insensitive
 
 p=0
 repeat
    p=position(find,myText,p+1,lengthFound,option)
    if(p>0)
       myText=substring(myText,1,p-1)+replace+substring(myText,p+lengthFound)
    end
 until(p<=0) //result: myText -> Hello Joëlle and Joël!

```

#### See also

[`compareStrings`](#comparestrings)<br/>
[`substring`](#substring)

## replaceString

<!-- REF #_command_.replaceString.Syntax -->**replaceString** ( *source* : string , *oldString* : string , *newString* : string , *howMany* : integer {, \*}) : string<!-- END REF -->


<!-- REF #_command_.replaceString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|->|Original string|
|oldString|string|->|Characters to replace|
|newString|string|->|Replacement string (if empty string, occurrences are deleted)|
|howMany|integer|->|How many times to replace If omitted, all occurrences are replaced|
|*||->|If passed: evaluation based on character codes|
|Result|string|<-|Resulting string|<!-- END REF -->

#### Description

`replaceString` <!-- REF #_command_.replaceString.Summary -->replaces *howMany* occurrences of *oldString* in *source* with *newString*<!-- END REF -->. 

If *newString* is an empty string (""), `replaceString` deletes each occurrence of *oldString* in *source*.

If *howMany* is specified, `replaceString` will replace only the number of occurrences of *oldString* specified, starting at the first character of *source*. If *howMany* is not specified, then all occurrences of *oldString* are replaced.

If *oldString* is an empty string, `replaceString` returns the unchanged *source*.

By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example æ = ae) into account. On the other hand, it is not diacritical (a=A, a=à and so on) and does not take "ignorable" characters such as characters whose code < 9 into account (Unicode specification).

To modify this functioning, pass the asterisk * as the last parameter. In this case, comparisons will be based on character codes. You must pass the * parameter:

* If you want to replace special characters, used for example as delimiters (`Char(1)`, etc.),
* If the replacement of characters must be case sensitive and take accented characters into account (a#A, a#à and so on).
Note that in this mode, the evaluation does not handle variations in the way words are written.

#### Example 1

The following example illustrates the use of `replaceString`. The results, described in the comments, are assigned to the variable *vtResult*.

```qs
 var vtResult, vtOtherVar : string
 vtResult=replaceString("Willow"," ll","d") // Result gets "Widow"
 vtResult=replaceString("Shout","o","") // Result gets "Shut"
 vtResult=replaceString(vtOtherVar,Char(Tab),",",*) // Replaces all tabs in vtOtherVar with commas

```

#### Example 2

The following example eliminates CRs and TABs from the text in *vtResult*:

```qs
 var vtResult : string
 vtResult=replaceString(replaceString(vtResult,Char(Carriage return),"",*),Char(Tab),"",*)

```

#### Example 3

The following example illustrates the use of the * parameter in the case of a diacritical evaluation:

```qs
 var vtResult : string
 vtResult=replaceString("Crème brûlée","Brulee","caramel") //Result gets "Crème caramel"
 vtResult=replaceString("Crème brûlée","Brulee","caramel",*) //Result gets "Crème brûlée"

```

#### See also

[`changeString`](#changestring)<br/>
[`deleteString`](#deletestring)<br/>
[`insertString`](#insertstring)

## splitString

<!-- REF #_command_.splitString.Syntax -->**splitString** ( *stringToSplit* : string , *separator* : string {, *options* : integer }) : collection <!-- END REF -->


<!-- REF #_command_.splitString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|stringToSplit|string|->|String value|
|separator|string|->|String at which stringToSplit splits. If empty string (""), each character of stringToSplit is a substring|
|options|integer|->|Option(s) regarding empty strings and spaces|
|Result|collection|<-|Collection of substrings|<!-- END REF -->

#### Description

The `splitString` command <!-- REF #_command_.splitString.Summary -->returns a collection of strings, created by splitting *stringToSplit* into substrings at the boundaries specified by the *separator* parameter<!-- END REF -->. The substrings in the returned collection do not include *separator* itself.

If no *separator* is found in *stringToSplit*, `splitString` returns a collection containing a single element, *stringToSplit*. If you passed an empty string in *separator*, `splitString` returns a collection of each character of *stringToSplit*.

In the *options* parameter, you can pass one or a combination of the following constants:

|Constant|Value|Comment|
|---------|--- |---|------|
|sk ignore empty strings|1|Remove empty strings from the resulting collection (they are ignored)|
|sk trim spaces|2|Trim space characters at the beginning and end of substrings|

#### Example 1

```qs
 var myText : string
 var myCol : collection 
 col=newCollection
 
 myText="John,Doe,120 jefferson st.,Riverside,, NJ, 08075"
 myCol=splitString(myText,",") //["John","Doe","120 jefferson st.","Riverside",""," NJ"," 08075"]
 myCol=splitString(myText,",",sk ignore empty strings) //["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"]
 myCol=splitString(myText,",",sk ignore empty strings+sk trim spaces) //["John","Doe","120 jefferson st.","Riverside","NJ","08075"]
 
```

#### Example 2

The *separator* parameter can be a multiple-character string:

```qs
 var myText : string
 var myCol : collection
 myText="Name<tab>Smith<tab>age<tab>40"
 myCol=splitString(myText,"<tab>")
  //myCol=["Name","Smith","age","40"]
 
```

#### See also

[`collection.join()`](#collection.join)<br/>

## string

<!-- REF #_command_.string.Syntax -->**string** ( *expression* : any { , *format* : integer { , *addTime* : time }} ) : string<!-- END REF -->



<!-- REF #_command_.string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|any|->|Expression for which to return the string form (can be number, integer, date, time, string, boolean, undefined, or null)|
|format|string, integer|->|Display format|
|addTime|time|->|Time to add on if expression is a date|
|Result|string|<-|String form of the expression|<!-- END REF -->

#### Description

The `string` command <!-- REF #_command_.string.Summary --> returns the string form of the numeric, date, time, string or boolean expression you pass in *expression*<!-- END REF -->. 

If you do not pass the optional *format* parameter, the string is returned with the appropriate default format. If you pass *format*, you can force the result string to be of a specific format.

The optional *addTime* parameter adds a time to a date in a combined format. It can only be used when the *expression* parameter is a date (see below).

**Numeric Expressions**

If *expression* is a numeric expression (number or integer), you can pass an optional string *format*. Following are some examples:

|Example|Result|Comments|
|:----|:----|:----|
|string(2^15)|32768|Default format|
|string(2^15;"###,##0 Inhabitants")|32,768 Inhabitants|
|string(1/3;"##0.00000")|0.33333|
|string(1/3)|0.3333333333333|Default format|
|string(Arctan(1)*4)|3.14159265359|Default format|
|string(Arctan(1)*4;"##0.00")|3.14|
|string(-1;"&x")|0xFFFFFFFF|
|string(-1;"&$")|$FFFFFFFF|
|string(0 ?+ 7;"&x")|0x0080|
|string(0 ?+ 7;"&$")|$80|
|string(0 ?+ 14;"&x")|0x4000|
|string(0 ?+ 14;"&$")|$4000|
|string(50.3;"&xml")|50.3|Always "." as decimal separator|
|string(num(1=1);"True;;False")|True|
|string(num(1=2);"True;;False")|False|
|string(log(-1))| |Undefined number|
|string(1/0)|INF|Positive infinite number|
|string(-1/0)|-INF|Negative infinite number|


**Date Expressions**

If *expression* is a date expression, the string is returned using the default format specified in the system.
In the *format* parameter, you can pass one of the constants described below.

In this case, you can also pass a time in the *addTime* parameter. This parameter lets you combine a date with a time so that you can generate time stamps in compliance with current standards (`ISO Date GMT` and `Date RFC 1123` constants). These formats are particularly useful in the context of XML and Web processing. The *addTime* parameter can only be used when the *expression* parameter is a date. 

|Constant|Type|Value|Comment|
|:----|:----|:----|:----|
|Blank if null date|integer|100|- instead of 0|
|Date RFC 1123|integer|10| |
|Internal date abbreviated|integer|6|Feb 18, 2023|
|Internal date long|integer|5|February 18, 2023|
|Internal date short|integer|7|02/18/2023|
|Internal date short special|integer|4|02/18/23 (but 02/18/1896 or 02/18/2096)|
|ISO Date|integer|8|2023-02-18T00:00:00|
|ISO Date GMT|integer|9|2023-02-18T16:11:53Z|
|System date abbreviated|integer|2|Sat, February 18, 2023|
|System date long|integer|3|Saturday, February 18, 2023|
|System date short|integer|1|02/18/2023|

:::note

Formats can vary depending on system settings.

:::

Here are a few examples of simple formats (assuming that the current date is 02/18/2023):

```qs
 var vtResult : string
 vsResult=string(currentDate) //vsResult gets "02/18/23"
 vsResult=string(currentDate,Internal date long) // vsResult gets "February 18, 2023"
 vsResult=string(currentDate,ISO Date GMT) // vsResult gets "2023-02-18T00:00:00" in France

```

**Notes for combined date/time formats:**

* The `ISO Date GMT` format corresponds to the ISO8601 standard, containing a date and a time expressed with respect to the time zone (GMT).

	 ```qs
	 var mydate : string
	 mydate=string(currentDate,ISO Date GMT,currentTime) // returns, for instance, 2023-02-18T16:11:53Z
	
	```

	Note that the "Z" character at the end indicates the GMT format.
If you do not pass the *addTime* parameter, the command returns the date at midnight (local time) expressed in GMT time, which may cause the date to be moved forward or back depending on the local time zone:

	```qs
	 var mydate : string
	 mydate=string(!18/02/2023!,ISO Date GMT) // returns 2023-02-17T22:00:00Z in France
	
	```

* The `ISO Date` format is similar to the `ISO Date GMT`, except that it expresses the date and time without respect to the time zone. Note that since this format does not comply with the ISO8601 standard, its use should be reserved for very specific purposes.

	```qs
	 var mydate : string
	 mydate=string(!18/02/2023!,ISO Date) // returns 2023-02-18T00:00:00 regardless of the time zone
     mydate=string(currentDate,ISO Date,currentTime) // returns 2023-02-18T18:11:53
	
	```
 
* The `Date RFC 1123` format formats a date/time combination according to the standard defined by RFC 822 and 1123. You need this format for example to set the expiration date for cookies in an HTTP header.

	```qs
	 var mydate : string
	 mydate=string(currentDate,Date RFC 1123,currentTime) // returns, for example Sat, 18 Feb 2023 13:07:20 GMT
	
	```

	The time expressed takes the time zone into account (GMT zone). If you only pass a date, the command returns the date at midnight (local time) expressed in GMT time which may cause the date to be moved forward or back depending on the local time zone:
	
	```qs
	 var mydate : string
	 mydate=string(currentDate,Date RFC 1123) // returns Fri, 17 Feb 2023 22:00:00 GMT
	
	```

**Time Expressions**

If *expression* is a time expression, the string is returned using the default **HH:MM:SS** format. In the format parameter, you can pass one of the following constants:

|Constant|Type|Value|Comment|
|:----|:----|:----|:----|
|Blank if null time|integer|100| instead of 0|
|HH MM|integer|2|01:02|
|HH MM AM PM|integer|5|01:02|
|HH MM SS|integer|1|01:02:03|
|Hour min|integer|4|1 hour 2 minutes|
|Hour min sec|integer|3|1 hour 2 minutes 3 seconds|
|ISO time|integer|8|0000-00-00T01:02:03|
|Min sec|integer|7|62 minutes 3 seconds|
|MM SS|integer|6|62:03:00|
|System time long|integer|11|1:02:03 AM HNEC (Mac only)|
|System time long abbreviated|integer|10|1•02•03 AM (Mac only)|
|System time short|integer|9|01:02:03|

Notes:

* The `ISO Time` format corresponds to the ISO8601 standard and contains, in theory, a date and a time. Since this format does not support combined dates/times; the date part is filled with 0s. This format expresses the local time.
* The `Blank if null time` constant must be added to the format; it indicates that in the case of a null value, Qodly must return an empty string instead of zeros.

These examples assume that the current time is 5:30 PM and 45 seconds:

```qs
	 var vsResult : string
	 vsResult=string(currentTime) // $vsResult gets "17:30:45"
 	 vsResult=string(currentTime,Hour Min Sec) // $vsResult gets "17 hours 30 minutes 45 seconds"
	
```

**String Expressions**

If *expression* is of the string type, the command returns the same value as the one passed in the parameter. This can be useful more particularly in generic programming using pointers.
In this case, the *format* parameter, if passed, is ignored.

**Boolean Expressions**

If *expression* is of the boolean type, the command returns the string “True” or “False”.
In this case, the *format* parameter, if passed, is ignored.

**Undefined Expressions** 

If *expression* is evaluated to undefined, the command returns an empty string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be undefined.

**Null Expressions**

If *expression* is evaluated to null, the command returns the "null" string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be null.

#### See also

[`bool`](#bool)<br/>
[`date`](#date)<br/>
[`num`](#num)<br/>
[`timeString`](#timestring)<br/>
[`timeStamp`](#timestamp)

## substring

<!-- REF #_command_.substring.Syntax -->**substring** ( *source* : string , *firstChar* : integer , *numChars* : integer ) : string <!-- END REF -->


<!-- REF #_command_.substring.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|string|->|String from which to get substring|
|firstChar|integer|->|Position of first character|
|numChars|integer|->|Number of characters to get|
|Result|string|<-|Substring of source|<!-- END REF -->

#### Description

The `substring` command <!-- REF #_command_.substring.Summary -->returns the portion of source defined by *firstChar* and *numChars*<!-- END REF -->. 

The *firstChar* parameter points to the first character in the string to return, and *numChars* specifies how many characters to return.

If *firstChar* plus *numChars* is greater than the number of characters in the string, or if *numChars* is not specified, `substring` returns the last character(s) in the string, starting with the character specified by *firstChar*. If *firstChar* is greater than the number of characters in the string, `substring` returns an empty string ("").

:::caution

When you use this command in a multi-style context, you need to convert any Window end-of-line characters ('\r\n') into single ('\r') characters in order for processing to be valid. This is due to the mechanism which normalizes Qodly line endings to ensure multi-platform compatibility for texts.

:::

#### Example

```qs
 var vsResult : string
 vsResult=substring("08/04/62",4,2) // vsResult gets "04"
 vsResult=substring("Emergency",1,6) // vsResult gets "Emerge"
 vsResult=substring(var,2) // vsResult gets all characters except the first
 
```


#### See also

[`position`](#position)

## uppercase 

<!-- REF #_command_.uppercase.Syntax -->**uppercase** ( *aString* : string {, \*} ) : string<!-- END REF -->


<!-- REF #_command_.uppercase.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|->|String to convert to uppercase|
|*||->|If passed: keep accents|
|Result|string|<-|String in uppercase|<!-- END REF -->

#### Description

`uppercase` <!-- REF #_command_.uppercase.Summary -->takes *aString* and returns the string with all alphabetic characters in uppercase.<!-- END REF -->. 

The optional `*` parameter, if passed, indicates that any accented characters present in *aString* must be returned as accented uppercase characters. By default, when this parameter is omitted, accented characters “lose” their accents after the conversion is carried out.

#### Example 1

This example compares the results obtained according to whether or not the * parameter has been passed:

```qs
 var thestring : string 
 thestring=uppercase("hélène") // thestring is "HELENE"
 thestring=uppercase("hélène",*) // thestring is "HÉLÈNE"

```

#### Example 2

See the example for [`lowercase`](#lowercase).

#### See also

[`lowercase`](#lowercase)