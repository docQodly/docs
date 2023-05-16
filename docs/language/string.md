---
id: string
title: String
---

`String` is a generic term that stands for both [**text and string data types**](../concepts/lang-text.md).

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
|[<!-- INCLUDE #_command_.splitString.Syntax -->](#splitString)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.splitString.Summary -->|
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

`changeString` is different from [`Insert string`](#insert-string) in that it overwrites characters instead of inserting them.

#### Example

```4d
var vtResult : string
vtResult=changeString("Acme","CME",2) //vtResult gets "ACME"
vtResult=changeString("November","Dec",1) //vtResult gets "December"

```

#### See also

[`deleteString`](#deletestring)<br/>
[`Insert string`](#insert-string)<br/>
[`Replace string`](#replace-string)

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

**Tip:** In editing a method, the command `char` is commonly used to specify characters that cannot be entered from the keyboard or that would be interpreted as an editing command in the Method editor.


#### Example

```4d

var myText : string
myText ="hello"+char(Carriage return)+"world"
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

Uppercase and lowercase characters are considered equal within a comparison. You can use characterCode to differentiate between uppercase and lowercase characters. Thus, this line returns True:

```4d
("A"=="a")

```

On the other hand, this line returns False:

```4d
 (characterCode("A")==characterCode("a"))

```

#### Example 2

This example returns the code of the first character of the string "ABC":

```4d
 var GetCode : integer
 GetCode=characterCode("ABC") //GetCode gets 65, the characterCode of A

```

#### Example 3

The following example tests for carriage returns and tabs:

```4d
 var vlChar : integer
 var vtText : string
 for(vlChar,1,Length(vtText))
    case of
       :(vtText[[vlChar]]==Char(Carriage return))
  //do something
       :(vtText[[vlChar]]==Char(Tab))
  // do something else
       :(...)
  //...
    end case
 end for

```

When executed multiple times on large texts, this test will run faster when compiled if it is written this way:

```4d
 var vlChar, vlCode  : integer
 var vtText : string
 for(vlChar,1,Length(vtText))
    vlCode=characterCode(vtText[[vlChar]])
    case of
       :(vlCode==Carriage return)
  //do something
       :(vlCode==Tab)
  //do something else
       :(...)
  //...
    end case
 end for

```

The second piece of code runs faster for two reasons: it does only one character reference by iteration and uses integer comparisons instead of string comparisons to test for carriage returns and tabs. Use this technique when working with common codes such as CR and TAB

#### See also

[`char`](#char)<br/>
[`Character Reference Symbols`](#character-reference-symbols)

## compareStrings

<!-- REF #_command_.Compare strings.Syntax -->**Compare strings** ( *aString* : string , *bString* : string , *options* : integer ) : integer<!-- END REF -->


<!-- REF #_command_.Compare strings.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|string|->|String to compare|
|bString|string|->|String to compare|
|options|integer|->|Comparison rule(s)|
|Result|integer|<-|Result of string comparison|<!-- END REF -->

#### Description

The `Compare strings` command <!-- REF #_command_.Compare strings.Summary -->returns a negative, zero, or positive value depending on if *aString* is evaluated as lower, equal, or higher than *bString*.<!-- END REF -->. 

In the *aString* parameter, pass a *string* value.

In the *bString* parameter, pass a *string* value to be compared to *aString*.

By default, `Compare strings` functions as if the "<" (less than) operator is used. This can be modified with the options parameter. You can pass one or a combination of the following constants: 

|Constant|Value|Comment|
|:----|:----|:----|
|sk case insensitive|2|<p>Strings are compared according to the current data language with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however&nbsp;"a" is not considered the same as "&agrave;" .&nbsp;By default, 4D string comparison is case insensitive.&nbsp;</p><p>Can be combined with:&nbsp;</p><ul><li><u>sk char codes</u><span>&nbsp;</span>OR&nbsp;<u>sk diacritic insensitive</u></li><li><u>sk whole word</u>&nbsp;([`Position`](#position)&nbsp;command only)</li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>sk kana insensitive</u></li><li><u>sk width insensitive</u></li><li><u>sk strict</u></li></ul>|
|sk char codes|1|<p>Strings are compared according to character codes. Current data language settings are not taken into account during the comparison.&nbsp;</p><p>&nbsp;</p><p>Can be combined with:<span>&nbsp;</span><u>sk case insensitive</u>&nbsp;</p><p>Only for "a-z" or "A-Z" ranges. (e.g., Alpha = alpha, but Alpha # &acirc;lph&agrave;)</p>|
|sk diacritic insensitive|4|<p>Strings are compared according to the current data language, however the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "&agrave;".&nbsp;</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk whole word</u>&nbsp;([`Position`](#position)&nbsp;command only)</li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>sk kana insensitive</u></li><li><u>sk width insensitive</u></li><li><u>sk strict</u></li></ul>|
|sk kana insensitive|8|<p>For Japanese language. Controls the distinction between Hiragana and Katakana syllables.&nbsp;From a semantic point of view, the difference between Hiragana and Katakana is usually significant, but to capture as many results as possible, the default mode in 4D is to ignore the difference (kana insensitive). For example, "あ" is considered the same as "ア".&nbsp;The<span>&nbsp;</span><u>sk strict</u><span>&nbsp;</span>option performs a kana sensitive comparison.<span>&nbsp;</span><span>sk kana insensitive</span><span>&nbsp;</span>can be used to partially relax the rule to be kana insensitive.&nbsp;</p><p><strong>Note:</strong><span>&nbsp;</span>The data language must be set to Japanese to use this option. For all other languages, the option is ignored and<span>&nbsp;</span>[`Compare strings`](#compare-strings)<span>&nbsp;</span>will work as if<span>&nbsp;</span><u>sk strict</u>&nbsp;was specified. In other words, setting this option in a non-Japanese context would actually make the comparison kana sensitive (the opposite effect).</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li></ul>|
|sk strict|0|<p>Strings are compared for exact matches according to the current data language.&nbsp;In most cases, capitalization and diacritical marks of letters are taken into account during the comparison.&nbsp;</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li><li><u>sk kana insensitive</u></li></ul><p>This constant implies the use of the following constant (which can also be combined for improved readability):</p><ul><li><u>sk width insensitive</u></li></ul>|
|sk width insensitive|16|<p>For Japanese language. Corresponds to the "East Asian Width" Unicode standard, as defined in<span>&nbsp;</span><a href="http://www.unicode.org/reports/tr11/">Unicode Standard Annex #11</a>. From a semantic point of view, the difference between a "narrow" and "wide" character or a "full width" and "half width" character is usually insignificant, which is the default mode in 4D. For example, "ｱ" is considered the same as "ア". The&nbsp;<u>sk strict</u><span>&nbsp;</span>option performs a width sensitive comparison.&nbsp;</p><p><strong>Notes:</strong>&nbsp;</p><ul><li>The data language must be set to Japanese to use this option. For all other languages, the option is ignored and<span>&nbsp;</span>[`Compare strings`](#compare-strings)<span>&nbsp;</span>will work as if<span>&nbsp;</span><u>sk strict</u>&nbsp;was specified. In other words, setting this option in a non-Japanese context would actually make the comparison width sensitive (the opposite effect).</li><li>This option is ignored by the<span>&nbsp;</span>[`Position`](#position)<span>&nbsp;</span>function. Unicode width insensitive collation is asymmetric and impossible to locate by position or length.&nbsp;</li></ul><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li><li><u>sk kana insensitive</u></li></ul><p>This constant implies the use of the following constant (which can also be combined for improved readability):</p><ul><li><u>sk strict</u></li></ul>|

:::caution

You cannot use the @ wildcard character with `Compare strings`. For example, if you pass "*abc@*" in *aString* or *bString* the command will actually evaluate the "*abc@*" string and not an "abc" string plus any character.

:::

**Returned value**

The command returns the following integer values:

|Value |Description|
|:----|:----|
|-1|aString is lower than bString|
|0|aString is equal to bString|
|1 |aString is higher bString|

#### Example 1

You want to compare the following strings:

```4d
 var string1, string2 : string
 var myResult : integer
 string1="alpha Bravo charlie Delta Echo Fox-Trot"
 string2="Alpha Bravo Charlie Delta Echo Fox-Trot"
 
  //compare the strings using the character code
 myResult=Compare strings(string1,string2,sk char codes)
  // myResult = 1
 
  //compare the strings using the character code but ignoring any capitalization
 myResult=Compare strings(string1,string2,sk char codes+sk case insensitive)
  // myResult = 0
 
```

#### Example 2

The following examples illustrate the specific impact of options in **Japanese data language context**:

```4d
 var myResult : integer
//default is kana insensitive
 myResult=Compare strings("イロハ","いろは") // equal
 myResult=Compare strings("イロハ","いろは",sk strict)      // not equal
 result=Compare strings("イロハ","いろは",sk kana insensitive) // equal
 
```

```4d
 var myResult : integer
//default is case insensitive
 myResult=Compare strings("さつき","さっき") // equal
 myResult=Compare strings("さつき","さっき",sk strict) // not equal
 myResult=Compare strings("さつき","さっき",sk case insensitive) // equal
 
```

```4d
 var myResult : integer
 //default is diacritic sensitive when the data language is set to Japanese (different to all other languages)
 myResult=Compare strings("ete","été") // equal in non-Japanese data language
 myResult=Compare strings("ete","été") // not equal in Japanese data language
 myResult=Compare strings("うがい","うかい") // not equal
 myResult=Compare strings("うがい","うかい",sk strict) // not equal
 myResult=Compare strings("うがい","うかい",sk diacritic insensitive) // equal
 
```

:::note

The "Sorting order appropriate for searching" setting has an impact on the `Compare strings` command. In particular, the "Katakana-Hiragana Prolonged Sound Mark" or "長音記号" will be interpreted differently. The setting also has an impact on "Japanese Iteration Marks" such as "ゝ" or "ゞ". 

:::

For example:


```4d
 var myResult : integer
 myResult=Compare strings("いすず","いすゞ") // equal if setting is disabled
 myResult=Compare strings("いすず","いすゞ") // not equal if setting is enabled
 myResult=Compare strings("ラーメン","ﾗｰﾒﾝ") // equal if setting is enabled
 myResult=Compare strings("ラーメン",&NBSP,"ﾗｰﾒﾝ") // not equal if setting is disabled
 
```

#### See also

[`Position`](#position)

## convertFromString

<!-- REF #_command_.CONVERT FROM TEXT.Syntax -->**CONVERT FROM TEXT** ( *4Dtext* : Text , *charSet* : Text, integer ) : BLOB<!-- END REF -->


<!-- REF #_command_.CONVERT FROM TEXT.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|atext|Text|->|Text expressed in current character set|
|charSet|Text, integer|->|Name or Number of character set|
|Result|BLOB|<-|BLOB containing converted text|<!-- END REF -->

#### Description

The `CONVERT FROM TEXT` command <!-- REF #_command_.CONVERT FROM TEXT.Summary -->can be used to convert a text expressed in the current character set to a text expressed in another character set<!-- END REF -->. 

In the *atext* parameter, pass the text to be converted. This text is expressed in the current character set (Unicode by default).

In *charSet*, pass the character set to be used for the conversion. You can pass a string containing the standard name of the set (for example “ISO-8859-1” or “UTF-8”), or its MIBEnum identifier.

Here is a list of character sets supported by the CONVERT FROM TEXT and [`Convert to text`](#convert-to-text) commands:

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

After execution of the command, the converted text will be returned in the *convertedBLOB* BLOB. This BLOB can be read by the [`Convert to text`](#convert-to-text) command.

#### System variables and sets

If the command has been correctly executed, the OK variable is set to 1. Otherwise, it is set to 0.

#### See also

[`Convert to text`](#convert-to-text)

## convertToString

<!-- REF #_command_.Convert to text.Syntax -->**Convert to text** ( *blob* : BLOB , *charSet* : Text, integer ) : Text<!-- END REF -->


<!-- REF #_command_.Convert to text.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|blob|BLOB|->|BLOB containing text expressed in a specific character set|
|charSet|Text, integer|->|Name or Number of BLOB character set|
|Result|Text|<-|Contents of BLOB expressed in 4D character set|<!-- END REF -->

#### Description

The `Convert to text` command <!-- REF #_command_.Convert to text.Summary -->converts the text contained in the *blob* parameter and returns it in text expressed in the character set of 4D<!-- END REF -->. 4D uses the UTF-16 character set by default.

In *charSet*, pass the character set of the text contained in *blob*, which will be used for the conversion. If the BLOB contains text copied from within 4D, then the BLOB’s text is likely to be in the UTF-16 character set. You can pass a string providing the standard name of the character set, or one of its aliases (for example, “ISO-8859-1” or “UTF-8”), or its identifier (integer). For more information, please refer to the description of the [`CONVERT FROM TEXT`](#convert-from-text) command.

`Convert to text` supports Byte Order Marks (BOMs). If the character set specified is of the Unicode type (UTF-8, UTF-16 or UTF-32), 4D attempts to identify a BOM among the first bytes received. If one is detected, it is filtered out of the result and 4D uses the character set that it defines instead of the one specified.

#### System variables and sets

If the command has been correctly executed, the OK variable is set to 1. Otherwise, it is set to 0.

#### See also

[`CONVERT FROM TEXT`](#convert-from-text)

## deleteString

<!-- REF #_command_.deleteString.Syntax -->**deleteString** ( *source* : Text , *where * : integer , *numChars* : integer ) : Text<!-- END REF -->


<!-- REF #_command_.deleteString.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|Text|->|String from which to delete characters|
|where |integer|->|First character to delete|
|numChars|integer|->|Number of characters to delete|
|Result|Text|<-|Resulting string|<!-- END REF -->

#### Description

`deleteString` <!-- REF #_command_.deleteString.Summary -->deletes *numChars* from *source*, starting at *where*, and returns the resulting string<!-- END REF -->. 

`deleteString` returns the same string as `*source*` when:

* *source* is an empty string
* *where* is greater than the length of *source*
* *numChars* is zero (0)

If *where* is less than one, the characters are deleted from the beginning of the string.

If *where* plus *numChars* is equal to or greater than the length of *source*, the characters are deleted from *where* to the end of *source*.

#### Example

```4d
var vtResult, vtOtherVar : Text
 vtResult=deleteString("Lamborghini",6,6) // vtResult gets "Lambo"
 vtResult=deleteString("Indentation",6,2) // vtResult gets "Indention"
 vtResult=deleteString(vtOtherVar,3,32000) // vtResult gets the first two characters of vtOtherVar
 
```

#### See also

[`changeString`](#changestring)<br/>
[`Insert string`](#insert-string)<br/>
[`Replace string`](#replace-string)


## insertString

<!-- REF #_command_.Insert string.Syntax -->**Insert string** ( *source* : Text , *what* : Text , *where* : integer ) : Text<!-- END REF -->


<!-- REF #_command_.Insert string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|Text|->|String in which to insert the other string|
|what|Text|->|String to insert|
|where|integer|->|Where to insert|
|Result|Text|<-|Resulting string|<!-- END REF -->

#### Description

The `Insert string` command <!-- REF #_command_.Insert string.Summary -->inserts a string into *source* and returns the resulting string<!-- END REF -->. The command inserts the string *what* before the character at position *where*.

If *what* is an empty string (""), `Insert string` returns source unchanged.

If *where* is greater than the length of *source*, then *what* is appended to *source*. If *where* is less than one (1), then *what* is inserted before *source*.

`Insert string` is different from [`changeString`](#changestring) in that it inserts characters instead of overwriting them.

#### Example

```4d
 var vtResult : Text
 vtResult=Insert string("The tree"," green",4) // vtResult gets "The green  tree"
 vtResult=Insert string("Shut","o",3) // vtResult gets "Shout"
 vtResult=Insert string("Indention","ta",6) // vtResult gets "Indentation"
 
```

#### See also

[`changeString`](#changestring)<br/>
[`deleteString`](#deletestring)<br/>
[`Replace string`](#replace-string)

## length

<!-- REF #_command_.Length.Syntax -->**Length** ( *string* : Text ) : integer<!-- END REF -->


<!-- REF #_command_.Length.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|string|Text|->|String for which to return length|
|Result|integer|<-|Length of string|<!-- END REF -->

#### Description

`Length` is used to find the length of a *string*. `Length` <!-- REF #_command_.Length.Summary -->returns the number of characters that are in a *string*.<!-- END REF -->. 

:::note

When you want to check whether a string contains any characters, including ignorable characters, you must use the test If(Length(vtAnyText)=0) rather than If(vtAnyText=""). If the string contains for example Char(1), which is an ignorable character, Length(vtAnyText) does return 1 but vtAnyText="" returns True.

:::

#### Example

```4d
 var vtResult : Text
 vlResult=Length("Topaz") // vlResult gets 5
 vlResult=Length("Citizen") // vlResult gets 7
 
```


## lowercase

<!-- REF #_command_.lowercase.Syntax -->**lowercase** ( *aString* : Text {, \*} ) : Text<!-- END REF -->


<!-- REF #_command_.lowercase.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|Text|->|String to convert to lowercase|
|*||->|If passed: keep accents|
|Result|Text|<-|String in lowercase|<!-- END REF -->

#### Description

`lowercase` <!-- REF #_command_.lowercase.Summary -->takes *aString* and returns the string with all alphabetic characters in lowercase.<!-- END REF -->. 

The optional * parameter, if passed, indicates that any accented characters present in *aString* must be returned as accented lowercase characters. By default, when this parameter is omitted, accented characters “lose” their accents after the conversion is carried out.

#### Example 1

The following project method capitalizes the string or text received as parameter. For instance, Caps ("john") would return "John".

```4d
  //Caps project method
  //Caps ( String ) -> String
  //Caps ( Any text  ) -> Capitalized text
 #declare (myText : Text) -> myCapText : Text
 myCapText=lowercase(myText)
 if(Length(myCapText)>0)
    myCapText[[1]]==uppercase(myCapText[[1]])
 end if

```

#### Example 2

This example compares the results obtained according to whether or not the * parameter has been passed:

```4d
 var thestring : Text 
 thestring=lowercase("DÉJÀ VU") // thestring is "deja vu"
 thestring=lowercase("DÉJÀ VU",*) // thestring is "déjà vu"

```

#### See also

[`uppercase`](#uppercase)

## matchRegex

<!-- REF #_command_.Match regex.Syntax -->**Match regex** ( *pattern* : Text , *aString* : Text ) : Boolean <br/>**Match regex** ( *pattern* : Text , *aString* : Text , *start* : integer {, \*} ) : Boolean <br/>**Match regex** ( *pattern* : Text , *aString* : Text , *start* : integer , *pos_found* : integer , *length_found* : integer {, \*} ) : Boolean<!-- END REF -->

<!-- REF #_command_.Match regex.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|pattern|Text|->|Regular expression (complete equality when using two parameters only)|
|aString|Text|->|String in which search will be done|
|start|integer|->|Position in aString where search will start|
|pos_found| |<-|Position of occurrence|
|length_found| |<-|Length of occurrence|
|*||->|If passed: only searches at position indicated|
|Result|Boolean|<-|True = search has found an occurrence; Otherwise, False|<!-- END REF -->

#### Description

The `Match regex` <!-- REF #_command_.Match regex.Summary -->searches for the regular expression pattern in aString<!-- END REF -->, this command checks the conformity of a character string with respect to a set of synthesized rules by means of a meta-language called “regular expression” or “rational expression.” The regex abbreviation is commonly used to indicate these types of notations. 

Pass the regular expression to search for in *pattern*. This consists of a set of characters used for describing a character string, using special characters.

Pass the string where you want to search for the regular expression in *aString*.

In start, pass the position at which to start the search in *aString*.

If *pos_found* and *length_found* are variables, the command returns the position and length of the occurrence in these variables. If you pass arrays, the command returns the position and length of the occurrence in the element zero of the arrays and the positions and lengths of the groups captured by the regular expression in the following elements.

The optional * parameter indicates, when it is passed, that the search must be carried out at the position specified by *start* without searching any further in the case of failure.

The command returns **True** if the search has found an occurrence.

For more information about regex, refer to the following address:
http://en.wikipedia.org/wiki/Regular_expression

For more information about the syntax of the regular expression passed in the *pattern* parameter, refer to the following address:
https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions

#### Example 1

Search in text by position:

```4d
vfound=Match regex(pattern, mytext, start, pos_found, length_found)
```

```4d
 #declare (myText : Text)
 var start : integer
 var vfound : Boolean
 start=1
 repeat
    vfound=Match regex("<.*>",myText,start,pos_found,length_found)
    if(vfound)
       ALERT(Substring(myText,pos_found,length_found))
       start=pos_found+length_found
    end if
 until(Not(vfound))

```

#### Example 2

Search with support of “capture groups” via parentheses. ( ) are used to specify groups in the regexes:

```4d
vfound=Match regex( pattern,mytext, start, pos_found_array, length_found_array)
```


```4d
 #declare (myText : Text)
 var start : integer
 var vfound : Boolean
 var group1, group2 : Text
 ARRAY LONGINT(pos_found_array,0)
 ARRAY LONGINT(length_found_array,0)
 vfound=Match regex("(.*)stuff(.*)",myText,1,pos_found_array,length_found_array)
 if(vfound)
    group1=Substring(myText,pos_found_array{1},length_found_array{1})
    group2=Substring(myText,pos_found_array{2},length_found_array{2})
 end if

```

#### Example 3

Search limiting the comparison of the pattern to the position indicated:
Add a star to the end of one of the two previous syntaxes.

```4d
 var start, pos_found, length_found : integer
 var vfound : Text

 vfound=Match regex("a.b","---a-b---",1,pos_found,length_found)
  // returns True
 vfound=Match regex("a.b","---a-b---",1,pos_found,length_found,*)
  // returns False
 vfound=Match regex("a.b","---a-b---",4,pos_found,length_found,*)
  // returns True

```

:::note

The positions and lengths returned are only meaningful in Unicode mode or if the text being worked with is of the 7-bit ASCII type.

:::

#### Error management

In the event of an error, the command generates an error that you can intercept via a method installed by the ON ERR CALL command.

## num

<!-- REF #_command_.num.Syntax -->**num** ( *expression* : Text,Boolean,integer , *separator* : Text ) : Real <!-- END REF -->


<!-- REF #_command_.num.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|Text,Boolean,integer|->|Character for which you want to get the code|
|separator|Text|->|Character for which you want to get the code|
|Result|Real|<-|Character code|<!-- END REF -->

#### Description

The `num` command <!-- REF #_command_.num.Summary -->returns the numeric form of the String, Boolean or numeric expression you pass in *expression*<!-- END REF -->. The optional *separator* parameter designates a decimal separator for evaluating string type expressions.

**String Expressions**

If *expression* consists only of one or more alphabetic characters, `num` returns a zero. If *expression* includes alphabetic and numeric characters, the command ignores the alphabetic characters. Thus, it transforms the string "a1b2c3" into the number 123.

There are three reserved characters that `num` treats specially: the decimal separator as defined in the system (if the *separator* parameter is not passed), the hyphen “-”, and “e” or “E”. These characters are interpreted as numeric format characters.

* The decimal separator is interpreted as a decimal place and must appear embedded in a numeric string. By default, the command uses the decimal separator set by the operating system. You can modify this character using the *separator* parameter (see below).
* The hyphen causes the number or exponent to be negative. The hyphen must appear before any negative numeric characters or after the “e” for an exponent. Except for the “e” character, if a hyphen is embedded in a numeric string, the portion of the string after the hyphen is ignored. For example, `num`("123-456") returns 123, but `num`("-9") returns -9.
* The e or E causes any numeric characters to its right to be interpreted as the power of an exponent. The “e” must be embedded in a numeric string. Thus, `num`("123e–2") returns 1.23.
Note that when the string includes more than one "e", conversion might give different results under Mac OS and under Windows.

The *separator* parameter designates a custom decimal separator for evaluating the *expression*. When the string to be evaluated is expressed with a decimal separator different from the system operator, the command returns an incorrect result. The *separator* parameter can be used in this case to obtain a correct evaluation. When this parameter is passed, the command does not take the system decimal separator into account. You can pass one or more characters.

:::note

The GET SYSTEM FORMAT command can be used to find out the current decimal separator as well as several other regional system parameters.

:::

**Boolean Expressions**

If you pass a Boolean expression, `num` returns 1 if the expression is True; otherwise, it returns 0 (zero).

**Numeric Expressions**

If you pass a numeric expression in the *expression* parameter, `num` returns the value passed in the *expression* parameter as is. This can be useful more particularly in the case of generic programming using pointers.

**Undefined Expressions**

If *expression* evaluates to undefined, the command returns 0 (zero). This is useful when you expect the result of an expression (e.g. an object attribute) to be a number, even if it can be undefined.


#### Example 1

The following example illustrates how `num` works when passed a string argument. Each line assigns a number to the *vResult* variable. The comments describe the results:

```4d
 var vResult : Real
 vResult=num("ABCD") // vResult gets 0
 vResult=num("A1B2C3") // vResult gets 123
 vResult=num("123") // vResult gets 123
 vResult=num("123.4") // vResult gets 123.4
 vResult=num("–123") // vResult gets –123
 vResult=num("–123e2") // vResult gets –12300

```

#### Example 2

This example compares the results obtained depending on the “current” separator:

```4d
 var thestring : Text
 var thenum : Real
 thestring="33,333.33"
 thenum=num(thestring)
  // by default, thenum equals 33,33333 on a French system
 thenum=num(thestring,".")
  // thenum will be correctly evaluated regardless of the system
  // for example, 33 333,33 on a French system

```

#### See also

[`Bool`](#bool)<br/>
[`GET SYSTEM FORMAT`](#get-system-format)<br/>
[`String`](#string)

## position

<!-- REF #_command_.Position.Syntax -->**Position** ( *find* : Text , *aString* : Text , *start* : integer {, \*} ) : integer <br/>**Position** ( *find* : Text , *aString* : Text , *start* : integer , *lengthFound * : integer {, \*} ) : integer <br/>**Position** ( *find* : Text , *aString* : Text , *start* : integer , *lengthFound* : integer , *options* : integer ) : integer<!-- END REF -->

<!-- REF #_command_.Position.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|find|Text|->|String to find|
|aString|Text|->|String in which to search|
|start|integer|->|Position in string where search will start|
|lengthFound|integer|<-|Length of string found|
|*||->|If passed: evaluation based on character codes|
|options|integer|->|Search condition(s)|
|Result|integer|<-|Position of first occurrence|<!-- END REF -->

#### Description

The `Position` <!-- REF #_command_.Position.Summary -->returns the position of the first occurrence of *find* in *aString*<!-- END REF -->. 

If *aString* does not contain *find*, it returns a zero (0).   

If `Position` locates an occurrence of *find*, it returns the position of the first character of the occurrence in *aString*.

If you ask for the position of an empty string within an empty string, `Position` returns zero (0). 

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
|sk case insensitive|2|<p>Strings are compared according to the current data language with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however&nbsp;"a" is not considered the same as "&agrave;" .&nbsp;By default, 4D string comparison is case insensitive.&nbsp;</p><p>Can be combined with:&nbsp;</p><ul><li><u>sk char codes</u><span>&nbsp;</span>OR&nbsp;<u>sk diacritic insensitive</u></li><li><u>sk whole word</u>&nbsp;([`Position`](#position)&nbsp;command only)</li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>sk kana insensitive</u></li><li><u>sk width insensitive</u></li><li><u>sk strict</u></li></ul>|
|sk char codes|1|<p>Strings are compared according to character codes. Current data language settings are not taken into account during the comparison.&nbsp;</p><p>&nbsp;</p><p>Can be combined with:<span>&nbsp;</span><u>sk case insensitive</u>&nbsp;</p><p>Only for "a-z" or "A-Z" ranges. (e.g., Alpha = alpha, but Alpha # &acirc;lph&agrave;)</p>|
|sk diacritic insensitive|4|<p>Strings are compared according to the current data language, however the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "&agrave;".&nbsp;</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk whole word</u>&nbsp;([`Position`](#position)&nbsp;command only)</li></ul><p>This constant implies the use of the following constants (which can also be combined for improved readability):</p><ul><li><u>sk kana insensitive</u></li><li><u>sk width insensitive</u></li><li><u>sk strict</u></li></ul>|
|sk kana insensitive|8|<p>For Japanese language. Controls the distinction between Hiragana and Katakana syllables.&nbsp;From a semantic point of view, the difference between Hiragana and Katakana is usually significant, but to capture as many results as possible, the default mode in 4D is to ignore the difference (kana insensitive). For example, "あ" is considered the same as "ア".&nbsp;The<span>&nbsp;</span><u>sk strict</u><span>&nbsp;</span>option performs a kana sensitive comparison.<span>&nbsp;</span><span>sk kana insensitive</span><span>&nbsp;</span>can be used to partially relax the rule to be kana insensitive.&nbsp;</p><p><strong>Note:</strong><span>&nbsp;</span>The data language must be set to Japanese to use this option. For all other languages, the option is ignored and<span>&nbsp;</span>[`Compare strings`](#compare-strings)<span>&nbsp;</span>will work as if<span>&nbsp;</span><u>sk strict</u>&nbsp;was specified. In other words, setting this option in a non-Japanese context would actually make the comparison kana sensitive (the opposite effect).</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li></ul>|
|sk strict|0|<p>Strings are compared for exact matches according to the current data language.&nbsp;In most cases, capitalization and diacritical marks of letters are taken into account during the comparison.&nbsp;</p><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li><li><u>sk kana insensitive</u></li></ul><p>This constant implies the use of the following constant (which can also be combined for improved readability):</p><ul><li><u>sk width insensitive</u></li></ul>|
|sk whole word|32|<p>Strings are compared according to the current data language. Only strings that are complete words are considered. Matching strings within other strings are not considered. For example, "where" is not considered when found within "somewhere".</p><p>Can be combined with:&nbsp;</p><ul><li><u>sk case insensitive</u><span>&nbsp;</span>([`Position`](#position)<span>&nbsp;</span>command only)</li><li><u>sk diacritic insensitive</u><span>&nbsp;</span>([`Position`](#position)<span>&nbsp;</span>command only)</li></ul>|
|sk width insensitive|16|<p>For Japanese language. Corresponds to the "East Asian Width" Unicode standard, as defined in<span>&nbsp;</span><a href="http://www.unicode.org/reports/tr11/">Unicode Standard Annex #11</a>. From a semantic point of view, the difference between a "narrow" and "wide" character or a "full width" and "half width" character is usually insignificant, which is the default mode in 4D. For example, "ｱ" is considered the same as "ア". The&nbsp;<u>sk strict</u><span>&nbsp;</span>option performs a width sensitive comparison.&nbsp;</p><p><strong>Notes:</strong>&nbsp;</p><ul><li>The data language must be set to Japanese to use this option. For all other languages, the option is ignored and<span>&nbsp;</span>[`Compare strings`](#compare-strings)<span>&nbsp;</span>will work as if<span>&nbsp;</span><u>sk strict</u>&nbsp;was specified. In other words, setting this option in a non-Japanese context would actually make the comparison width sensitive (the opposite effect).</li><li>This option is ignored by the<span>&nbsp;</span>[`Position`](#position)<span>&nbsp;</span>function. Unicode width insensitive collation is asymmetric and impossible to locate by position or length.&nbsp;</li></ul><p>Can be combined with:</p><ul><li><u>sk case insensitive</u></li><li><u>sk diacritic insensitive</u></li><li><u>sk kana insensitive</u></li></ul><p>This constant implies the use of the following constant (which can also be combined for improved readability):</p><ul><li><u>sk strict</u></li></ul>|

:::caution

You cannot use the @ wildcard character with `Position`. For example, if you pass "*abc@*" in *find*, the command will actually evaluate the "*abc@*" string and not an "abc" plus any character.

:::

#### Example 1

This example illustrates the use of Position. The results, described in the comments, are assigned to the variable vlResult.

```4d
 var length, vlResult : integer
 var vtText1, vtText2  : Text
 vlResult=Position("ll","Willow") // vlResult gets 3
 vlResult=Position(vtText1,vtText2) // Returns first occurrence of vtText1 in vtText2
 vlResult=Position("day","Today is the first day",1) // vlResult gets 3
 vlResult=Position("day","Today is the first day",4) // vlResult gets 20
 vlResult=Position("DAY","Today is the first day",1,*) // vlResult gets 0
 
 vlResult=Position("œ","Bœuf",1,length) // vlResult =2, length = 1

```

#### Example 2

In the following example, the lengthFound parameter can be used to search for all the occurrences of "aegis" in a text, regardless of how it is written:

```4d
 var start, lengthfound, vlResult : integer
 var myText : Text
 start=1
 repeat
    vlResult=Position("aegis",myText,start,lengthfound)
    start=start+lengthfound
 until(vlResult==0)

```

#### Example 3

In the following example, you want to find all instances of a string and replace it:

```4d
 var lengthFound, find, replace, option, p  : integer
 var myText : Text
 myText="Hello Joelle et joel!"
 find="joel"
 replace="Joël"
 option=sk case insensitive+sk diacritic insensitive
 
 p=0
 repeat
    p=Position(find,myText,p+1,lengthFound,option)
    if(p>0)
       myText=Substring(myText,1,p-1)+replace+Substring(myText,p+lengthFound)
    end if
 until(p<=0) //result: myText -> Hello Joëlle and Joël!

```

#### See also

[`Compare strings`](#compare-strings)<br/>
[`Substring`](#substring)

## replaceString

<!-- REF #_command_.Replace string.Syntax -->**Replace string** ( *source* : Text , *oldString* : Text , *newString* : Text , *howMany* : integer {, \*}) : Text<!-- END REF -->


<!-- REF #_command_.Replace string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|Text|->|Original string|
|oldString|Text|->|Characters to replace|
|newString|Text|->|Replacement string (if empty string, occurrences are deleted)|
|howMany|integer|->|How many times to replace If omitted, all occurrences are replaced|
|*||->|If passed: evaluation based on character codes|
|Result|Text|<-|Resulting string|<!-- END REF -->

#### Description

`Replace string` <!-- REF #_command_.Replace string.Summary -->replaces *howMany* occurrences of *oldString* in *source* with *newString*<!-- END REF -->. 

If *newString* is an empty string (""), `Replace string` deletes each occurrence of *oldString* in *source*.

If *howMany* is specified, `Replace string` will replace only the number of occurrences of *oldString* specified, starting at the first character of *source*. If *howMany* is not specified, then all occurrences of *oldString* are replaced.

If *oldString* is an empty string, `Replace string` returns the unchanged *source*.

By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example æ = ae) into account. On the other hand, it is not diacritical (a=A, a=à and so on) and does not take "ignorable" characters such as characters whose code < 9 into account (Unicode specification).

To modify this functioning, pass the asterisk * as the last parameter. In this case, comparisons will be based on character codes. You must pass the * parameter:

* If you want to replace special characters, used for example as delimiters (`Char(1)`, etc.),
* If the replacement of characters must be case sensitive and take accented characters into account (a#A, a#à and so on).
Note that in this mode, the evaluation does not handle variations in the way words are written.

#### Example 1

The following example illustrates the use of `Replace string`. The results, described in the comments, are assigned to the variable *vtResult*.

```4d
 var vtResult, vtOtherVar : Text
 vtResult=Replace string("Willow"," ll","d") // Result gets "Widow"
 vtResult=Replace string("Shout","o","") // Result gets "Shut"
 vtResult=Replace string(vtOtherVar,Char(Tab),",",*) // Replaces all tabs in vtOtherVar with commas

```

#### Example 2

The following example eliminates CRs and TABs from the text in *vtResult*:

```4d
 var vtResult : Text
 vtResult=Replace string(Replace string(vtResult,Char(Carriage return),"",*),Char(Tab),"",*)

```

#### Example 3

The following example illustrates the use of the * parameter in the case of a diacritical evaluation:

```4d
 var vtResult : Text
 vtResult=Replace string("Crème brûlée","Brulee","caramel") //Result gets "Crème caramel"
 vtResult=Replace string("Crème brûlée","Brulee","caramel",*) //Result gets "Crème brûlée"

```

#### See also

[`changeString`](#changestring)<br/>
[`deleteString`](#deletestring)<br/>
[`Insert string`](#insert-string)

## splitString

<!-- REF #_command_.Split string.Syntax -->**Split string** ( *stringToSplit* : Text , *separator* : Text , *options* : integer ) : Collection <!-- END REF -->


<!-- REF #_command_.Split string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|stringToSplit|Text|->|String value|
|separator|Text|->|String at which stringToSplit splits. If empty string (""), each character of stringToSplit is a substring|
|options|integer|->|Option(s) regarding empty strings and spaces|
|Result|Collection|<-|Collection of substrings|<!-- END REF -->

#### Description

The `Split string` command <!-- REF #_command_.Split string.Summary -->returns a collection of strings, created by splitting *stringToSplit* into substrings at the boundaries specified by the *separator* parameter<!-- END REF -->. The substrings in the returned collection do not include *separator* itself.

If no *separator* is found in *stringToSplit*, `Split string` returns a collection containing a single element, *stringToSplit*. If you passed an empty string in *separator*, `Split string` returns a collection of each character of *stringToSplit*.

In the *options* parameter, you can pass one or a combination of the following constants:

|Constant|Type|Value|Comment|
|---------|--- |---|------|
|sk ignore empty strings|integer|1|Remove empty strings from the resulting collection (they are ignored)|
|sk trim spaces|integer|2|Trim space characters at the beginning and end of substrings|

#### Example 1

```4d
 var myText : Text
 var myCol : Collection 
 col=New collection
 
 myText="John,Doe,120 jefferson st.,Riverside,, NJ, 08075"
 myCol=Split string(myText,",") //["John","Doe","120 jefferson st.","Riverside",""," NJ"," 08075"]
 myCol=Split string(myText,",",sk ignore empty strings) //["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"]
 myCol=Split string(myText,",",sk ignore empty strings+sk trim spaces) //["John","Doe","120 jefferson st.","Riverside","NJ","08075"]
 
```

#### Example 2

The *separator* parameter can be a multiple-character string:

```4d
 var myText : Text
 var myCol : Collection
 myText="Name<tab>Smith<tab>age<tab>40"
 myCol=Split string(myText,"<tab>")
  //myCol=["Name","Smith","age","40"]
 
```

#### See also

[`collection.join( )`](#collection.join)<br/>
[`TEXT TO ARRAY`](#text-to-array)

## string

<!-- REF #_command_.String.Syntax -->**String** ( *expression* : any , *format* : Text, integer , *addTime* : Time ) : Text<!-- END REF -->


<!-- REF #_command_.String.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|any|->|Expression for which to return the string form (can be Real, integer, Date, Time, Text, Boolean, Undefined, or Null)|
|format|Text, integer|->|Display format|
|addTime|Time|->|Time to add on if expression is a date|
|Result|Text|<-|String form of the expression|<!-- END REF -->

#### Description

The `String` command <!-- REF #_command_.String.Summary --> returns the string form of the numeric, Date, Time, string or Boolean expression you pass in *expression*<!-- END REF -->. 

If you do not pass the optional *format* parameter, the string is returned with the appropriate default format. If you pass *format*, you can force the result string to be of a specific format.

The optional *addTime* parameter adds a time to a date in a combined format. It can only be used when the *expression* parameter is a date (see below).

**Numeric Expressions**

If *expression* is a numeric expression (Real, integer, Long integer), you can pass an optional string format. Following are some examples:

|Example|Result|Comments|
|:----|:----|:----|
|String(2^15)|32768|Default format|
|String(2^15;"###,##0 Inhabitants")|32,768 Inhabitants|
|String(1/3;"##0.00000")|0.33333|
|String(1/3)|0.3333333333333|Default format|
|String(Arctan(1)*4)|3.14159265359|Default format|
|String(Arctan(1)*4;"##0.00")|3.14|
|String(-1;"&x")|0xFFFFFFFF|
|String(-1;"&$")|$FFFFFFFF|
|String(0 ?+ 7;"&x")|0x0080|
|String(0 ?+ 7;"&$")|$80|
|String(0 ?+ 14;"&x")|0x4000|
|String(0 ?+ 14;"&$")|$4000|
|String(50.3;"&xml")|50.3|Always "." as decimal separator|
|String(num(1=1);"True;;False")|True|
|String(num(1=2);"True;;False")|False|
|String(log(-1))| |Undefined number|
|String(1/0)|INF|Positive infinite number|
|String(-1/0)|-INF|Negative infinite number|

:::note

The `String` function is not compatible with "Integer 64 bits" type fields in compiled mode.

:::

**Date Expressions**

If *expression* is a Date expression, the string is returned using the default format specified in the system.
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

```4d
 var vtResult : Text
 vsResult=String(Current date) //vsResult gets "02/18/23"
 vsResult=String(Current date,Internal date long) // vsResult gets "February 18, 2023"
 vsResult=String(Current date,ISO Date GMT) // vsResult gets "2023-02-18T00:00:00" in France

```

**Notes for combined date/time formats:**

* The `ISO Date GMT` format corresponds to the ISO8601 standard, containing a date and a time expressed with respect to the time zone (GMT).

	 ```4d
	 var mydate : Text
	 mydate=String(Current date,ISO Date GMT,Current time) // returns, for instance, 2023-02-18T16:11:53Z
	
	```

	Note that the "Z" character at the end indicates the GMT format.
If you do not pass the *addTime* parameter, the command returns the date at midnight (local time) expressed in GMT time, which may cause the date to be moved forward or back depending on the local time zone:

	```4d
	 var mydate : Text
	 mydate=String(!18/02/2023!,ISO Date GMT) // returns 2023-02-17T22:00:00Z in France
	
	```

* The `ISO Date` format is similar to the `ISO Date GMT`, except that it expresses the date and time without respect to the time zone. Note that since this format does not comply with the ISO8601 standard, its use should be reserved for very specific purposes.

	```4d
	 var mydate : Text
	 mydate=String(!18/02/2023!,ISO Date) // returns 2023-02-18T00:00:00 regardless of the time zone
     mydate=String(Current date,ISO Date,Current time) // returns 2023-02-18T18:11:53
	
	```
 
* The `Date RFC 1123` format formats a date/time combination according to the standard defined by RFC 822 and 1123. You need this format for example to set the expiration date for cookies in an HTTP header.

	```4d
	 var mydate : Text
	 mydate=String(Current date,Date RFC 1123,Current time) // returns, for example Sat, 18 Feb 2023 13:07:20 GMT
	
	```

	The time expressed takes the time zone into account (GMT zone). If you only pass a date, the command returns the date at midnight (local time) expressed in GMT time which may cause the date to be moved forward or back depending on the local time zone:
	
	```4d
	 var mydate : Text
	 mydate=String(Current date,Date RFC 1123) // returns Fri, 17 Feb 2023 22:00:00 GMT
	
	```

**Time Expressions**

If *expression* is a Time expression, the string is returned using the default **HH:MM:SS** format. In the format parameter, you can pass one of the following constants:

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
* The `Blank if null time` constant must be added to the format; it indicates that in the case of a null value, 4D must return an empty string instead of zeros.

These examples assume that the current time is 5:30 PM and 45 seconds:

```4d
	 var vsResult : Text
	 vsResult=String(Current time) // $vsResult gets "17:30:45"
 	 vsResult=String(Current time,Hour Min Sec) // $vsResult gets "17 hours 30 minutes 45 seconds"
	
```

**String Expressions**

If *expression* is of the String or Text type, the command returns the same value as the one passed in the parameter. This can be useful more particularly in generic programming using pointers.
In this case, the *format* parameter, if passed, is ignored.

**Boolean Expressions**

If *expression* is of the Boolean type, the command returns the string “True” or “False” in the language of the application.
In this case, the *format* parameter, if passed, is ignored.

**Undefined Expressions** 

If *expression* is evaluated to undefined, the command returns an empty string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be undefined.

**Null Expressions**

If *expression* is evaluated to Null, the command returns the "null" string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be null.

#### See also

[`Bool`](#bool)<br/>
[`Date`](#date)<br/>
[`num`](#num)<br/>
[`Time string`](#time-string)<br/>
[`Timestamp`](#timestamp)

## substring

<!-- REF #_command_.Substring.Syntax -->**Substring** ( *source* : Text , *firstChar* : integer , *numChars* : integer ) : Text <!-- END REF -->


<!-- REF #_command_.Substring.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|Text|->|String from which to get substring|
|firstChar|integer|->|Position of first character|
|numChars|integer|->|Number of characters to get|
|Result|Text|<-|Substring of source|<!-- END REF -->

#### Description

The `Substring` command <!-- REF #_command_.Substring.Summary -->returns the portion of source defined by *firstChar* and *numChars*<!-- END REF -->. 

The *firstChar* parameter points to the first character in the string to return, and *numChars* specifies how many characters to return.

If *firstChar* plus *numChars* is greater than the number of characters in the string, or if *numChars* is not specified, `Substring` returns the last character(s) in the string, starting with the character specified by *firstChar*. If *firstChar* is greater than the number of characters in the string, `Substring` returns an empty string ("").

:::caution

When you use this command in a multi-style context, you need to convert any Window end-of-line characters ('\r\n') into single ('\r') characters in order for processing to be valid. This is due to the mechanism which normalizes 4D line endings to ensure multi-platform compatibility for texts.

:::

#### Example 1

This example illustrates the use of Substring. The results, described in the comments, are assigned to the variable vsResult.

```4d
 var vsResult : Text
 vsResult=Substring("08/04/62",4,2) // vsResult gets "04"
 vsResult=Substring("Emergency",1,6) // vsResult gets "Emerge"
 vsResult=Substring(var,2) // vsResult gets all characters except the first
 
```

#### Example 2

The following project method appends the paragraphs found in the text (passed as first parameter) to a string or text array (the pointer of which is passed as second parameter):

```4d
  // EXTRACT PARAGRAPHS
  // EXTRACT PARAGRAPHS ( text , Pointer )
  // EXTRACT PARAGRAPHS ( Text to parse , -> Array of ¶s )
 
 #declare (myText : Text, myPointer : Pointer ) 
 var vlElem, vlPos : integer
 
 vlElem=Size of array(myPointer->)
 repeat
    vlElem=vlElem+1
    INSERT IN ARRAY(myPointer->,vlElem)
    vlPos=Position(Char(Carriage return),$1)
    if(vlPos>0)
       myPointer->{vlElem}=Substring(myText,1,vlPos-1)
       myText=Substring(myText,vlPos+1)
    else
       myPointer->{vlElem}=myText
    end if
 until(myText=="")
 
```

#### See also

[`Position`](#position)

## uppercase 

<!-- REF #_command_.uppercase.Syntax -->**uppercase** ( *aString* : Text {, \*} ) : Text<!-- END REF -->


<!-- REF #_command_.uppercase.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|Text|->|String to convert to uppercase|
|*||->|If passed: keep accents|
|Result|Text|<-|String in uppercase|<!-- END REF -->

#### Description

`uppercase` <!-- REF #_command_.uppercase.Summary -->takes *aString* and returns the string with all alphabetic characters in uppercase.<!-- END REF -->. 

The optional * parameter, if passed, indicates that any accented characters present in *aString* must be returned as accented uppercase characters. By default, when this parameter is omitted, accented characters “lose” their accents after the conversion is carried out.

#### Example 1

This example compares the results obtained according to whether or not the * parameter has been passed:

```4d
 var thestring : Text 
 thestring=uppercase("hélène") // thestring is "HELENE"
 thestring=uppercase("hélène",*) // thestring is "HÉLÈNE"

```

#### Example 2

See the example for [`lowercase`](#lowercase).

#### See also

[`lowercase`](#lowercase)