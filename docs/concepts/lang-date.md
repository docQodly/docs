---
id: lang-date
title: Date
---


A Date type attribute, variable or expression can be in the range of 1/1/100 to 12/31/32,767.

:::info

In Qodly, a date can be stored in two data types:

- a date type, expressed in the `yyyy-mm-dd` format, for example '2023-12-05'
- an ISO date format string, expressed in the following format: 'yyyy-mm-ddThh:mm:ss.sssZ' (e.g., "2023-12-05T23:00:00.000Z" for december 5, 2023 in the Central European Timezone). `sss` represents the milliseconds and can be between 0 to 999. 

You can select the data type for a Date attribute in your model. This page describes the handling of the **date type**.

:::


## Date literals  

A date literal constant is enclosed by exclamation marks (!…!). A date must be structured using the ISO format (!YYYY-MM-DD!). Here are some examples of date constants:

```4d
!1976-01-01!
!2004-09-29!
!2023-12-31!
```

A null date is specified by *!00-00-00!*.


:::note

Qodly accepts two-digit years to be entered. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the `SET DEFAULT CENTURY` command.

:::


## Date operators 

|Operation	|Syntax	|Returns	|Expression	|Value|
|---|---|---|---|---|
|Date difference	|Date – Date	|Number	|!2023-01-20! - !2023-01-01!	|19|
|Day addition	|Date + Number	|Date	|!2023-01-20! + 9	|!2023-01-29!|
|Day subtraction	|Date – Number	|Date	|!2023-01-20! - 9	|!2023-01-11!|
|Equality	|Date == Date	|Boolean	|!2023-01-01! == !2023-01-01!	|True|
		||	||!2023-01-20! == !2023-01-01!	|False|
|Inequality	|Date != Date	|Boolean	|!2023-01-20! != !2023-01-01!	|True|
			||||!2023-01-20! != !2023-01-20!	|False|
|Greater than	|Date > Date	|Boolean	|!2023-01-20! > !2023-01-01!	|True|
			||||!2023-01-20! > !2023-01-20!	|False|
|Less than	|Date < Date	|Boolean	|!2023-01-01! < !2023-01-20!	|True|
			||||!2023-01-20! < !2023-01-20!	|False|
|Greater than or equal to	|Date >= Date	|Boolean	|!2023-01-20! >=!2023-01-01!	|True|
			||||!2023-01-01!>=!2023-01-20!	|False|
|Less than or equal to	|Date <= Date	|Boolean	|!2023-01-01!<=!2023-01-20!|	True|
		||||	!2023-01-20!<=!2023-01-01!|	False|
