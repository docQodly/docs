---
id: string
title: string
---


<!-- REF #_command_.string.Syntax -->**string** ( *expression* : number \{ , *format* : string \} ) : string<br/>**string** ( *expression* : any \{ , *format* : integer \{ , *addTime* : time \}\} ) : string<!-- END REF -->




<!-- REF #_command_.string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|any|&#8594;|Expression for which to return the string form (can be number, date, time, string, boolean, undefined, or null)|
|format|string, integer|&#8594;|Format to use|
|addTime|time|&#8594;|Time to add on if expression is a date|
|Result|string|&#8592;|String form of the expression|
<!-- END REF -->

#### Description

The `string` command <!-- REF #_command_.string.Summary --> returns the string form of the numeric, date, time, string or boolean expression you pass in *expression*<!-- END REF -->.

If you do not pass the optional *format* parameter, the string is returned with the appropriate default format. If you pass *format*, you can force the result string to be of a specific format.

The optional *addTime* parameter adds a time to a date in a combined format. It can only be used when the *expression* parameter is a date (see below).

#### Numeric Expressions

If *expression* is a numeric expression (number or integer), you can pass an optional string *format*. The following elements are supported in *format*:

|Elements in *format*|Name|Description|
|---|---|---|
|#|Placeholder|Returns nothing for a leading or trailing zero|
|0|Placeholder|Returns 0 for a leading or trailing zero|
|^|Placeholder|Returns a space for a leading or trailing zero|
|*|Placeholder|Returns an asterisk for a leading or trailing zero|
|any|Static characters|You can use any characters in *format*. When used alone, or placed before or after placeholders, the characters are always returned. For example, with a "$##0" *format*, a dollar sign is always returned because it is placed before the placeholders. If characters are placed between placeholders, they are returned only if there are digits are on both sides. For example, with a "###.##0" *format*, a comma is returned only if the *expression* contains at least four digits. Spaces are treated as characters.|
|"*positive*;*negative*;*zero*"|Three-parts format to handle positive, negative, and zero values|You specify up to three parts by separating them with semicolons. If you use just one part, Qodly uses it for all numbers, placing a minus sign in front of negative numbers. If you use two parts, Qodly uses the first part for positive numbers and zero, and the second part for negative numbers. Here is an example of a number display format that shows dollar signs and commas, places negative values in parentheses, and does not display zeros: "$###,##0.00;($###,##0.00);". Notice that the presence of the second semicolon instructs Qodly to use nothing to return zero. The following format is similar except that the absence of the second semicolon instructs Qodly to use the positive number format for zero: "$###,##0.00;($###,##0.00)". In this case, the returned string for zero would be "$0.00.". Note that the third part (zero) is not interpreted and does not accept replacement characters. If you enter "###;###;#", a zero value will be returned "#". In other words, what you actually enter is what will be returned for the zero value.|
|"&"+number|Scientific notation|A "&" followed by a number to specify the number of digits you want to return. For example, the format "&3" would return "759.62e as "7.60e+2". The scientific notation format is the only format that will automatically round the number. Note in the example that the number is rounded up to 7.60e+2 instead of truncating to 7.59e+2.|
|"&x"|Hexadecimal|Returns hexadecimal numbers using the "0xFFFF" format|
|"&$"|Hexadecimal|Returns hexadecimal numbers using the "$FFFF" format.|
|"&xml"|XML notation|Returns a number compliant with XML standard rules. In particular, the decimal separator character will be a period "." in all cases|


 Following are some examples:

|Example|Result|Comments|
|:----|:----|:----|
|string(2^15)|"32768"|Default format|
|string(2^15;"###,##0 Inhabitants")|"32,768 Inhabitants"|
|string(1/3;"##0.00000")|"0.33333"|
|string(1/3)|"0.3333333333333"|Default format (13 digits)|
|string(Arctan(1)*4)|"3.14159265359"|Default format (13 digits)|
|string(Arctan(1)*4;"##0.00")|"3.14"|
|string(-1;"&x")|"0xFFFFFFFF"|
|string(-1;"&$")|"$FFFFFFFF"|
|string(0 ?+ 7;"&x")|"0x0080"|
|string(0 ?+ 7;"&$")|"$80"|
|string(0 ?+ 14;"&x")|"0x4000"|
|string(0 ?+ 14;"&$")|"$4000"|
|string(50.3;"&xml")|"50.3"|Always "." as decimal separator|
|string(num(1 = 1);"True;;False")|"True"|
|string(num(1 = 2);"True;;False")|"False"|
|string(log(-1))|""|Undefined number|
|string(1/0)|"INF"|Positive infinite number|
|string(-1/0)|"-INF"|Negative infinite number|


#### Date Expressions

If *expression* is a date expression and if you omit the *format* parameter, the string is returned using the default format.

In the *format* parameter, you can pass:

- either one of the following predefined format constants (integer value):

|Constant|Comment|
|:----|:----|
|kBlankIfNullDate|must be added to the format, indicates that in the case of a null value, Qodly must return an empty string instead of zeros|
|kDateRFC1123| |
|kInternalDateAbbreviated||Feb 18, 2023|
|kInternalDateLong|February 18, 2023|
|kInternalDateShort|02/18/2023|
|kInternalDateShortSpecial|02/18/23 (but 02/18/1896 or 02/18/2096)|
|kISODate|2023-02-18T00:00:00|
|kISODateGMT|2023-02-18T16:11:53Z|
|kSystemDateAbbreviated|Sat, February 18, 2023|
|kSystemDateLong|Saturday, February 18, 2023|
|kSystemDateShort|02/18/2023|

Examples:

```qs
 var vsResult : string
 vsResult = string(!2023-18-02!) //vsResult gets "02/18/23"
 vsResult = string(!2023-18-02!,kInternalDateLong) // vsResult gets "February 18, 2023"
 vsResult = string(!2023-18-02!,kISODateGMT) // vsResult gets "2023-02-18T00:00:00" in France
```

- or a [**customized format built upon a pattern**](../../studio/pageLoaders/date-time-formats.md) (string value)

Examples:

```qs
 var vsResult : string
 vsResult = string(!2023-11-27!,"EEEE d MMMM y GGGG") //"Monday 27 November 2023 Anno Domini"
 vsResult = string(!2023-11-27!,"E dd/MM/yyyy zzzz") //"Mon 27/11/2023 GMT+01:00" in French timezone
```

**addTime** parameter

You can also pass a time in the *addTime* parameter. This parameter lets you combine a date with a time so that you can generate time stamps in compliance with current standards (`kISODateGMT` and `kDateRFC1123` constants). The *addTime* parameter can only be used when the *expression* parameter is a date.


**Notes for combined date/time formats:**

* The `kISODateGMT` format corresponds to the ISO8601 standard, containing a date and a time expressed with respect to the time zone (GMT).

   ```qs
	 var mydate : string
	 mydate = string(currentDate,kISODateGMT,currentTime) // returns, for instance, 2023-02-18T16:11:53Z

	```

	Note that the "Z" character at the end indicates the GMT format. If you do not pass the *addTime* parameter, the command returns the date at midnight (local time) expressed in GMT time, which may cause the date to be moved forward or back depending on the local time zone:

	```qs
	 var mydate : string
	 mydate = string(!18/02/2023!,kISODateGMT) // returns 2023-02-17T22:00:00Z in France
	```

* The `kISODate` format is similar to the `kISODateGMT`, except that it expresses the date and time without respect to the time zone. Note that since this format does not comply with the ISO8601 standard, its use should be reserved for very specific purposes.

	```qs
	 var mydate : string
	 mydate = string(!18/02/2023!,kISODate) // returns 2023-02-18T00:00:00 regardless of the time zone
     mydate = string(currentDate,kISODate,currentTime) // returns 2023-02-18T18:11:53

	```

* The `kDateRFC1123` format formats a date/time combination according to the standard defined by RFC 822 and 1123. You need this format for example to set the expiration date for cookies in an HTTP header.

	```qs
	 var mydate : string
	 mydate = string(currentDate,kDateRFC1123,currentTime) // returns, for example Sat, 18 Feb 2023 13:07:20 GMT

	```

	The time expressed takes the time zone into account (GMT zone). If you only pass a date, the command returns the date at midnight (local time) expressed in GMT time which may cause the date to be moved forward or back depending on the local time zone:

	```qs
	 var mydate : string
	 mydate = string(currentDate,kDateRFC1123) // returns Fri, 17 Feb 2023 22:00:00 GMT

	```

#### Time Expressions

If *expression* is a time expression, the string is returned using the default **HH:MM:SS** format. In the *format* parameter, you can pass:

- either one of the following predefined format constants (integer value):

|Constant|Comment|
|:----|:----|
|kBlankIfNullTime|must be added to the format, indicates that in the case of a null value, Qodly must return an empty string instead of zeros|
|kHHMM|01:02|
|kHHMMAMPM|01:02|
|kHHMMSS|01:02:03|
|kHourMin|1 hour 2 minutes|
|kHourMinSec|1 hour 2 minutes 3 seconds|
|kISOTime|0000-00-00T01:02:03. Corresponds to the ISO8601 standard and contains, in theory, a date and a time. Since this format does not support combined dates/times, the date part is filled with 0s|
|kMinSec|62 minutes 3 seconds|
|kMMSS|62:03:00|
|kSystemTimeLong|1:02:03 AM HNEC (Mac only)|
|kSystemTimeLongAbbreviated|1•02•03 AM (Mac only)|
|kSystemTimeShort|01:02:03|


Examples:

```qs
 var vsResult : string
 vsResult = string(?17:30:45?,kHHMMAMPM) // "5:30 PM"
 vsResult = string(?17:30:45?,kHourMinSec) // "17 hours 30 minutes 45 seconds"

```

- or a [**customized format built upon a pattern**](../../studio/pageLoaders/date-time-formats.md) (string value)

Examples:

```qs
 var vsResult : string
 vsResult = string(!2023-11-27!,"EEEE d MMMM y GGGG") //"Monday 27 November 2023 Anno Domini"
 vsResult = string(!2023-11-27!,"E dd/MM/yyyy zzzz") //"Mon 27/11/2023 GMT+01:00" in French timezone
```


#### String Expressions

If *expression* is of the string type, the command returns the same value as the one passed in the parameter. This can be useful more particularly in generic programming using pointers.
In this case, the *format* parameter, if passed, is ignored.

#### Boolean Expressions

If *expression* is of the boolean type, the command returns the string "True" or "False".
In this case, the *format* parameter, if passed, is ignored.

#### Undefined Expressions

If *expression* is evaluated to undefined, the command returns an empty string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be undefined.
In this case, the *format* parameter, if passed, is ignored.

#### Null Expressions

If *expression* is evaluated to null, the command returns the "null" string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be null.
In this case, the *format* parameter, if passed, is ignored.

#### See also

[`bool`](bool)<br/>
[`date`](date)<br/>
[`num`](num)<br/>
[`timeString`](timeString.md)<br/>
[`timestamp`](timestamp.md)
