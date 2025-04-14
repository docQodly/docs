---
id: matchRegex
title: matchRegex
---

<!-- REF #_command_.matchRegex.Syntax -->**matchRegex** ( *pattern* : string , *aString* : string ) : boolean &nbsp; **matchRegex** ( *pattern* : string , *aString* : string , *start* : integer \{, \*} ) : boolean &nbsp; **matchRegex** ( *pattern* : string , *aString* : string , *start* : integer , *pos_found* : integer , *length_found* : integer \{, \*\} ) : boolean<!-- END REF -->

<!-- REF #_command_.matchRegex.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|pattern|string|&#8594;|Regular expression (complete equality when using two parameters only)|
|aString|string|&#8594;|String in which search will be done|
|start|integer|&#8594;|Position in aString where search will start|
|pos_found|integer |&#8592;|Position of occurrence|
|length_found|integer |&#8592;|Length of occurrence|
|*||&#8594;|If passed: only searches at position indicated|
|Result|boolean|&#8592;|True = search has found an occurrence; Otherwise, False|<!-- END REF -->

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

Search in text by position. You want to find all tags in a text:

```qs
 declare (myText : string) -> result : collection
 var start : integer
 var vfound : boolean
 start = 1
 result = newCollection
 repeat
    vfound = matchRegex("<.*>",myText,start,pos_found,length_found)
    if(vfound)
       result.push(substring(myText,pos_found,length_found))
       start = pos_found+length_found
    end
 until(not(vfound))

```


#### Example 2

Search limiting the comparison of the pattern to the position indicated:
Add a star to the end of one of the two previous syntaxes.

```qs
 var pos_found, length_found : integer
 var vfound : string

 vfound = matchRegex("a.b","---a-b---",1,pos_found,length_found)
  // returns true
 vfound = matchRegex("a.b","---a-b---",1,pos_found,length_found,*)
  // returns false
 vfound = matchRegex("a.b","---a-b---",4,pos_found,length_found,*)
  // returns true

```



#### Error management

In the event of an error, the command generates an error that you can intercept via a method installed by the `onErrCall` command.
