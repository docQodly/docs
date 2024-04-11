---
id: characterCode
title: characterCode
---


<!-- REF #_command_.characterCode.Syntax -->**characterCode** ( *character* : string ) : integer<!-- END REF -->


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
 ("A" == "a") //true

```

On the other hand, this line returns False:

```qs
 (characterCode("A") == characterCode("a")) //false

```

#### Example 2

This example returns the code of the first character of the string "ABC":

```qs
 var getCode : integer
 getCode = characterCode("ABC") //GetCode gets 65, the characterCode of A

```

#### Example 3

The following example tests for carriage returns and tabs:

```qs
 var vlChar, vlCode  : integer
 var vtText : string
 for(vlChar,1,length(vtText))
    vlCode = characterCode(vtText[[vlChar]])
    switch
       :(vlCode == Carriage return)
  //do something
       :(vlCode == Tab)
  //do something else
       :(...)
  //...
    end
 end

```

#### See also

[`char`](#char)<br/>
[`Character Reference Symbols`](#character-reference-symbols)
