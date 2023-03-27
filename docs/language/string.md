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
|[<!-- INCLUDE #_command_.Change string.Syntax -->](#copyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.Change string.Summary -->|
|[<!-- INCLUDE #FileClass.create().Syntax -->](#create)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.create().Summary -->|


## Change string

<!-- REF #_command_.Change string.Syntax -->**Change string** ( *source* : Text , *newChars* : Text , *where* : Integer ) : Text<!-- END REF -->


<!-- REF #_command_.Change string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|Text|->|Original string|
|newChars|Text|->|New characters|
|where|Integer|->|Where to start the changes|
|Result|Text|<-|Resulting string|<!-- END REF -->

#### Description

The `Change string` command <!-- REF #_command_.Change string.Summary -->changes a group of characters in *source* and returns the resulting string<!-- END REF -->. The command overlays *source*, with the characters in *newChars*, at the character described by *where*.

If *newChars* is an empty string (""), `Change string` returns *source* unchanged. `Change string` always returns a string of the same length as `source`. If *where* is less than one or greater than the length of *source*, `Change string` returns *source*.

`Change string` is different from [`Insert string`](#insert-string) in that it overwrites characters instead of inserting them.

#### Example

```4d
var vtResult : Text
vtResult=Change string("Acme","CME",2) //vtResult gets "ACME"
vtResult=Change string("November","Dec",1) //vtResult gets "December"

```

#### See also

[`Delete string`](#delete-string)<br/>
[`Insert string`](#insert-string)<br/>
[`Replace string`](#replace-string)

## Char

<!-- REF #_command_.Char.Syntax -->**Char** ( *charCode* : Integer ) : Text<!-- END REF -->


<!-- REF #_command_.Char.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|charCode|Integer|->|Character code|
|Result|Text|<-|Character represented by the charCode|<!-- END REF -->

#### Description

The `Char` command <!-- REF #_command_.Char.Summary -->returns the character whose code is *charCode*.<!-- END REF -->. 

Pass a UTF-16 value (included between 1 and 65535) in *charCode*.

**Tip:** In editing a method, the command `Char` is commonly used to specify characters that cannot be entered from the keyboard or that would be interpreted as an editing command in the Method editor.


#### Example

```4d

var myText : Text
myText ="hello"+Char(Carriage return)+"world"
```

#### See also

[`Character code`](#character-code)<br/>
[`Character Reference Symbols`](../basics/lang-text#character-reference-symbols)

## Character code

<!-- REF #_command_.Character code.Syntax -->**Character code** ( *character* : String ) : Integer<!-- END REF -->


<!-- REF #_command_.Character code.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|character|Text|->|Character for which you want to get the code|
|Result|Integer|<-|Character code|<!-- END REF -->

#### Description

The `Character code` command <!-- REF #_command_.Character code.Summary -->returns the Unicode UTF-16 code (included between 1 and 65535) of *character*<!-- END REF -->. 

If there is more than one character in the string, `Character code` returns only the code of the first character.

The [`Char`](#char) function is the counterpart of `Character code`. It returns the character that the UTF-16 code represents.


#### Example 1

Uppercase and lowercase characters are considered equal within a comparison. You can use Character code to differentiate between uppercase and lowercase characters. Thus, this line returns True:

```4d
("A"=="a")

```

On the other hand, this line returns False:

```4d
 (Character code("A")==Character code("a"))

```

#### Example 2

This example returns the code of the first character of the string "ABC":

```4d
 var GetCode : Integer
 GetCode=Character code("ABC") //GetCode gets 65, the character code of A

```

#### Example 3

The following example tests for carriage returns and tabs:

```4d
 var vlChar : Integer
 var vtText : Text
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
 var vlChar, vlCode  : Integer
 var vtText : Text
 for(vlChar,1,Length(vtText))
    vlCode=Character code(vtText[[vlChar]])
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

The second piece of code runs faster for two reasons: it does only one character reference by iteration and uses LongInt comparisons instead of string comparisons to test for carriage returns and tabs. Use this technique when working with common codes such as CR and TAB

#### See also

[`Char`](#char)<br/>
[`Character Reference Symbols`](#character-reference-symbols)

## Convert to text

<!-- REF #_command_.Convert to text.Syntax -->**Convert to text** ( *blob* : BLOB , *charSet* : Text, Integer ) : Text<!-- END REF -->


<!-- REF #_command_.Convert to text.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|blob|BLOB|->|BLOB containing text expressed in a specific character set|
|charSet|Text, Integer|->|Name or Number of BLOB character set|
|Result|Text|<-|Contents of BLOB expressed in 4D character set|<!-- END REF -->

#### Description

The `Convert to text` command <!-- REF #_command_.Convert to text.Summary -->converts the text contained in the *blob* parameter and returns it in text expressed in the character set of 4D<!-- END REF -->. 4D uses the UTF-16 character set by default.

In *charSet*, pass the character set of the text contained in *blob*, which will be used for the conversion. If the BLOB contains text copied from within 4D, then the BLOB’s text is likely to be in the UTF-16 character set. You can pass a string providing the standard name of the character set, or one of its aliases (for example, “ISO-8859-1” or “UTF-8”), or its identifier (longint). For more information, please refer to the description of the [`CONVERT FROM TEXT`](#convert-from-text) command.

`Convert to text` supports Byte Order Marks (BOMs). If the character set specified is of the Unicode type (UTF-8, UTF-16 or UTF-32), 4D attempts to identify a BOM among the first bytes received. If one is detected, it is filtered out of the result and 4D uses the character set that it defines instead of the one specified.

#### System variables and sets

If the command has been correctly executed, the OK variable is set to 1. Otherwise, it is set to 0.

#### See also

[`CONVERT FROM TEXT`](#convert-from-text)

## Delete string

<!-- REF #_command_.Delete string.Syntax -->**Delete string** ( *source* : Text , *where * : Integer , *numChars* : Integer ) : Text<!-- END REF -->


<!-- REF #_command_.Delete string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|Text|->|String from which to delete characters|
|where |Integer|->|First character to delete|
|numChars|Integer|->|Number of characters to delete|
|Result|Text|<-|Resulting string|<!-- END REF -->

#### Description

`Delete string` <!-- REF #_command_.Delete string.Summary -->deletes *numChars* from *source*, starting at *where*, and returns the resulting string<!-- END REF -->. 

`Delete string` returns the same string as `*source*` when:

* *source* is an empty string
* *where* is greater than the length of *source*
* *numChars* is zero (0)

If *where* is less than one, the characters are deleted from the beginning of the string.

If *where* plus *numChars* is equal to or greater than the length of *source*, the characters are deleted from *where* to the end of *source*.

#### Example

```4d
var vtResult, vtOtherVar : Text
 vtResult=Delete string("Lamborghini",6,6) // vtResult gets "Lambo"
 vtResult=Delete string("Indentation",6,2) // vtResult gets "Indention"
 vtResult=Delete string(vtOtherVar,3,32000) // vtResult gets the first two characters of vtOtherVar
 
```

#### See also

[`Change string`](#change-string)<br/>
[`Insert string`](#insert-string)<br/>
[`Replace string`](#replace-string)


## Insert string

<!-- REF #_command_.Insert string.Syntax -->**Insert string** ( *source* : Text , *what* : Text , *where* : Integer ) : Text<!-- END REF -->


<!-- REF #_command_.Insert string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|Text|->|String in which to insert the other string|
|what|Text|->|String to insert|
|where|Integer|->|Where to insert|
|Result|Text|<-|Resulting string|<!-- END REF -->

#### Description

The `Insert string` command <!-- REF #_command_.Insert string.Summary -->inserts a string into *source* and returns the resulting string<!-- END REF -->. The command inserts the string *what* before the character at position *where*.

If *what* is an empty string (""), `Insert string` returns source unchanged.

If *where* is greater than the length of *source*, then *what* is appended to *source*. If *where* is less than one (1), then *what* is inserted before *source*.

`Insert string` is different from [`Change string`](#change-string) in that it inserts characters instead of overwriting them.

#### Example

```4d
 var vtResult : Text
 vtResult=Insert string("The tree"," green",4) // vtResult gets "The green  tree"
 vtResult=Insert string("Shut","o",3) // vtResult gets "Shout"
 vtResult=Insert string("Indention","ta",6) // vtResult gets "Indentation"
 
```

#### See also

[`Change string`](#change-string)<br/>
[`Delete string`](#delete-string)<br/>
[`Replace string`](#replace-string)

## Length

<!-- REF #_command_.Length.Syntax -->**Length** ( *string* : Text ) : Integer<!-- END REF -->


<!-- REF #_command_.Length.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|string|Text|->|String for which to return length|
|Result|Integer|<-|Length of string|<!-- END REF -->

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


## Lowercase

<!-- REF #_command_.Lowercase.Syntax -->**Lowercase** ( *aString* : Text , *** : Operator ) : Text<!-- END REF -->


<!-- REF #_command_.Lowercase.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aString|Text|->|String to convert to lowercase|
|*|Operator|->|If passed: keep accents|
|Result|Text|<-|String in lowercase|<!-- END REF -->

#### Description

`Lowercase` <!-- REF #_command_.Lowercase.Summary -->takes *aString* and returns the string with all alphabetic characters in lowercase.<!-- END REF -->. 

The optional * parameter, if passed, indicates that any accented characters present in *aString* must be returned as accented lowercase characters. By default, when this parameter is omitted, accented characters “lose” their accents after the conversion is carried out.

#### Example 1

The following project method capitalizes the string or text received as parameter. For instance, Caps ("john") would return "John".

```4d
  //Caps project method
  //Caps ( String ) -> String
  //Caps ( Any text  ) -> Capitalized text
 #declare (myText : Text) -> myCapText : Text
 myCapText=Lowercase(myText)
 if(Length(myCapText)>0)
    myCapText[[1]]==Uppercase(myCapText[[1]])
 end if

```

#### See also

[`Uppercase`](#Uppercase)

## Replace string

<!-- REF #_command_.Replace string.Syntax -->**Replace string** ( *source* : Text , *oldString* : Text , *newString* : Text , *howMany* : Integer , *\** : Operator) : Text<!-- END REF -->


<!-- REF #_command_.Replace string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|Text|->|Original string|
|oldString|Text|->|Characters to replace|
|newString|Text|->|Replacement string (if empty string, occurrences are deleted)|
|howMany|Integer|->|How many times to replace If omitted, all occurrences are replaced|
|*||->|If passed: evaluation based on character codes|
|Result|Text|<-|Resulting string|<!-- END REF -->

#### Description

`Replace string` <!-- REF #_command_.Replace string.Summary -->replaces *howMany* occurrences of *oldString* in *source* with *newString*<!-- END REF -->. 

If *newString* is an empty string (""), `Replace string` deletes each occurrence of *oldString* in *source*.

If *howMany* is specified, `Replace string` will replace only the number of occurrences of *oldString* specified, starting at the first character of *source*. If *howMany* is not specified, then all occurrences of *oldString* are replaced.

If *oldString* is an empty string, `Replace string` returns the unchanged *source*.

By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example æ = ae) into account. On the other hand, it is not diacritical (a=A, a=à and so on) and does not take "ignorable" characters such as characters whose code < 9 into account (Unicode specification).

To modify this functioning, pass the asterisk * as the last parameter. In this case, comparisons will be based on character codes. You must pass the * parameter:

* If you want to replace special characters, used for example as delimiters (`Char`(1), etc.),
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

[`Change string`](#change-string)<br/>
[`Delete string`](#delete-string)<br/>
[`Insert string`](#insert-string)

