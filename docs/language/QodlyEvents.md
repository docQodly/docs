---
id: QodlyEvents
title: QodlyEvents
---


## Overview

The **QodlyEvents** class provides a structured approach to handling application lifecycle events in a Qodly Server environment. It enables developers to execute specific logic during application startup and shutdown.

:::tip
The **QodlyEvents** class is a **shared singleton**, meaning a single instance is globally available without needing manual creation. You can access it directly via the [.me](#me) property without instantiating a new instance.
:::

## Functions and properties

||
|---|
|[<!-- INCLUDE #QodlyEvents.onStartup().Syntax -->](#onStartup)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #QodlyEvents.onStartup().Summary -->|
|[<!-- INCLUDE #QodlyEvents.onStop().Syntax -->](#onStop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #QodlyEvents.onStop().Summary -->|
|[<!-- INCLUDE #QodlyEvents.me.Syntax -->](#me)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #QodlyEvents.me.Summary -->|


## .onStartup()

<!--REF #QodlyEvents.onStartup().Syntax -->**.onStartup**( \{ *...param* : any \} ) : void<!-- END REF -->

<!--REF #QodlyEvents.onStartup().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|param|any|&#8594;|Parameter(s) to pass to the function|<!-- END REF -->

#### Description

The `.onStartup()` function <!-- REF #QodlyEvents.onStartup().Summary -->triggers the [onStartup() function](../studio/qodlyEventsClassInterface#accessing-qodlyevents) logic defined in the QodlyEvents class interface.<!-- END REF -->  The .onStartup() function executes automatically when the server starts by calling cs.QodlyEvents.me.onStartup(). 

Additionally, developers can manually execute .onStartup() when needed, such as:
- Explicitly triggering the startup logic from another function.
- Running initialization logic without restarting the server.

#### Example

```qs
cs.QodlyEvents.me.onStartup({ config: "default" })
```


## .onStop()

<!--REF #QodlyEvents.onStop().Syntax -->**.onStop**( \{ *...param* : any \} ) : void<!-- END REF -->

<!--REF #QodlyEvents.onStop().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|param|any|&#8594;|Parameter(s) to pass to the function|<!-- END REF -->

#### Description

The `.onStop()` function <!-- REF #QodlyEvents.onStop().Summary -->triggers the [onStop()](../studio/qodlyEventsClassInterface#accessing-qodlyevents) function logic defined in the QodlyEvents class interface.<!-- END REF --> The .onStop() function executes automatically when the server shuts down by calling cs.QodlyEvents.me.onStop(). 

Additionally, developers can manually execute .onStop() when needed, such as:
- Explicitly triggering the shutdown logic before stopping the server.
- Running cleanup operations without actually stopping the server.


#### Example

```qs
cs.QodlyEvents.me.onStop({ saveState: true })
```



## .me

<!--REF #QodlyEvents.me.Syntax -->**.me** : cs.QodlyEvents<!-- END REF -->


<!--REF #QodlyEvents.me.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|cs.QodlyEvents|&#8592;|Reference to the QodlyEvents singleton instance.|<!-- END REF -->


#### Description

The `.me` property <!-- REF #QodlyEvents.me.Summary -->returns the current instance of the QodlyEvents singleton.<!-- END REF --> 

It must be used when calling functions like [onStartup()](#onStartup) or [`onStop()`](#onStop).

:::tip Why .me is Required:
If you attempt to call:

```qs
cs.QodlyEvents.onStartup()
```

You will encounter an error: `The function or property onStartup does not exist on type cs.QodlyEvents. (550.2)`.

The correct way is:

```qs
cs.QodlyEvents.me.onStartup()
```

The `.me` ensures the function is being called from the current active instance of the QodlyEvents singleton.
:::