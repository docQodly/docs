---
id: lang-text
title: Text
---

A text (or string) value is an attribute, variable, or expression that may contain from 0 to 2 GB of text.

## Literals

A string literal is enclosed in double, straight quotation marks ("..."). Here are some examples of string literals:

```4d
"Add Profile"
"No entities found."
"Invoice"
```

An empty string is specified by two quotation marks with nothing between them ("").

### Escape sequences

The following escape sequences can be used within strings:

|Escape sequence|Character replaced|
|---|----|
|\n|LF (Line feed)|
|\t|HT (Tab)|
|\r|CR (Carriage return)|
|\\\|\ (Backslash)|
|\\"|" (Quotation marks)|


## String operators

|Operation |Syntax |Returns |Expression |Value|
|---|---|---|---|---|
|Concatenation |String + String |String |"abc" + "def" |"abcdef"|
|Repetition |String * Number |String  |"ab" * 3 |"ababab"|
|Equality |String == String |Boolean |"abc" == "abc" |True|
|  | ||"abc" == "abd" |False|
|Inequality |String != String |Boolean |"abc" != "abd" |True|
|   |||"abc" != "abc" |False|
|Greater than |String > String |Boolean  |"abd" > "abc" |True
|   |||"abc" > "abc" |False|
|Less than |String < String |Boolean |"abc" < "abd" |True|
|   |||"abc" < "abc" |False|
|Greater than or equal to |String >= String |Boolean  |"abd" >= "abc" |True|
|   |||"abc" >= "abd" |False|
|Less than or equal to |String <= String |Boolean  |"abc" <= "abd" |True|
|   |||"abd" <= "abc" |False|
|Contains keyword |String % String |Boolean  |"Alpha Bravo" % "Bravo" |True|
|   |||"Alpha Bravo" % "ravo" |False|
| |Picture % String |Boolean |Picture_expr % "Mer" |True (1)|

(1) If the keyword "Mer" is associated with the picture stored in the picture expression (attribute or variable).

## String comparisons

- Strings are compared on a character-by-character basis (except in the case of searching by [keywords](#keywords), see below).
- When strings are compared, the case of the characters is ignored; thus, `"a"=="A"` returns `TRUE`.
- When strings are compared, diacritical characters are ignored. For example, the following expressions return `TRUE`:

```4d
     "n"=="ñ"
     "n"=="Ñ"
     "A"=="å"
      // and so on
```

To test if the case of two characters is different or to take diacritical characters into account, compare their character codes. For example, the following expression returns `FALSE`:

```4d
Character code("A")==Character code("a") // false because 65 is not equal to 97
```


### Wilcard character (@)

The QodlyScript supports **@** as a wildcard character. This character can be used in any string comparison to match any number of characters. For example, the following expression is `true`:

```4d
"abcdefghij"=="abc@" //true
```

The wildcard character must be used within the second operand (the string on the right side) in order to match any number of characters. The following expression is `false`, because the `@` is considered only as one character in the first operand:

```4d
    "abc@"=="abcdefghij" //false
```

The wildcard means "one or more characters or nothing". The following expressions are `true`:

```4d
     "abcdefghij"=="abcdefghij@" //true
     "abcdefghij"=="@abcdefghij" //true
     "abcdefghij"=="abcd@efghij" //true
     "abcdefghij"=="@abcdefghij@"//true
     "abcdefghij"=="@abcde@fghij@"//true
```

On the other hand, whatever the case, a string comparison with two consecutive wildcards will always return `false`:

```4d
"abcdefghij"=="abc@@fg" //false
```

When the comparison operator is or contains a `<` or `>` symbol, only comparison with a single wildcard located at the end of the operand is supported:

```4d
     "abcd"<="abc@" // Valid comparison
     "abcd"<="abc@ef" //Not a valid comparison
```

If you want to execute comparisons or queries using `@` as a character (and not as a wildcard), you need to use the `Character code(At sign)` instruction. Imagine, for example, that you want to know if a string ends with the `@` character. The following expression (if `vsValue` is not empty) is always `true`:

```4d
(vsValue[[Length(vsValue)]]=="@") //always true
```

The following expression will be evaluated correctly:

```4d
(Character code(vsValue[[Length(vsValue)]])!=64)  
```


### Keywords

Unlike other string comparisons, searching by keywords looks for "words" in "texts": words are considered both individually and as a whole. The **%** operator always returns `False` if the query concerns several words or only part of a word (for example, a syllable). The "words" are character strings surrounded by "separators", which are spaces and punctuation characters and dashes. An apostrophe, like in "Today's", is usually considered as part of the word, but will be ignored in certain cases (see the rules below). Numbers can be searched for because they are evaluated as a whole (including decimal symbols). Other symbols (currency, temperature, and so on) will be ignored.

```4d
     "Alpha Bravo Charlie"%"Bravo" // Returns True
     "Alpha Bravo Charlie"%"vo" // Returns False
     "Alpha Bravo Charlie"%"Alpha Bravo" // Returns False
     "Alpha,Bravo,Charlie"%"Alpha" // Returns True
     "Software and Computers"%"comput@" // Returns True
```

:::note

QodlyScript uses the ICU library for comparing strings (using `<>==!=` operators) and detecting keywords. For more information about the rules implemented, please refer to the following address: <http://www.unicode.org/reports/tr29/#Word_Boundaries>.

:::

## Character Reference Symbols  

The character reference symbols: `[[...]]`

These symbols are used to refer to a single character within a string. This syntax allows you to individually address the characters of a text variable, string variable, or attribute.

If the character reference symbols appear on the left side of the assignment operator (`=`), a character is assigned to the referenced position in the string. For example, if `vsName` is not an empty string, the following line sets the first character of `vsName` to uppercase:

```4d
if(vsName!="")
    vsName[[1]]=Uppercase(vsName[[1]])
end if
```

Otherwise, if the character reference symbols appear within an expression, they return the character (to which they refer) as a 1-character string. For example:

```4d
//The following example tests if the last character of vtText is an At sign "@"
 if(vtText!="")
    if(Character code(Substring(vtText,Length(vtText),1))==At sign)
  //...
    end if
 end if
```

```4d 
  //Using the character reference syntax, you would write in a simpler manner:
 if(vtText!="")
    if(Character code(vtText[[Length(vtText)]])==At sign)
  // ...
    end if
 end if
```

### Example

The following method capitalizes the first character of each word of the text received as parameter and returns the resulting capitalized text:

```4d
  //Capitalize_text ( Source text ) -> Capitalized text
 
 #declare (source : Text) -> capitalized : Text
 var vlLen,vlChar : Integer
 capitalized=source
 vlLen:=Length(capitalized)
 if(vlLen>0)
    capitalized[[1]]=Uppercase(capitalized[[1]])
    for(vlChar,1,vlLen-1)
       if(Position(capitalized[[vlChar]]," !&()-{}:;<>?/,.=+*")>0)
          capitalized[[vlChar+1]]=Uppercase(capitalized[[vlChar+1]])
       end if
    end for
 end if
```

For example, the line:

```4d
var cap : Text
cap=Capitalize_text("hello, my name is jane doe and i'm running for president!")
//cap: "Hello, My Name Is Jane Doe And I'm Running For President!"
```
