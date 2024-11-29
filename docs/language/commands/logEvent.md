---
id: logEvent
title: logEvent
---

<!--REF #_command_.logEvent.Syntax-->**logEvent** ( *message* {; *importance*} )<!-- END REF-->

<!--REF #_command_.logEvent.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| message | Text | ->  | Contents of the message |
| importance | Integer | ->  | Message’s importance level |<!-- END REF-->



#### Description 

The `logEvent` command <!--REF #_command_.logEvent.Summary-->writes *message* in the diagnostic log file in response to events that occur during the use of your application<!-- END REF-->.

Pass in *message* the custom information to be written in the diagnostic log file according to the event. 

You can attribute a level of importance to *message*, via the optional *importance* parameter which helps you to read and understand the log events. There are three levels of importance: Information (default), Warning, and Error. You can use the following constants:

| Constant             | Value |
| -------------------  | ----- |
| kInformationMessage  | 0     |
| kWarningMessage      | 1     |
| kErrorMessage        | 2     |

If you don't pass the *importance* parameter or pass an invalid value, the default value (0) is used.

#### Example 

You want to log each user search string that did not match anything on your application: 

```qs

if(searchResult == false)
    logEvent("Unsuccessful search: "+searchString)
end
```
