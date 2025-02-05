---
id: QodlyEvents
title: QodlyEvents
---


## Overview

The **QodlyEvents** class provides a structured approach to handling application lifecycle events in a Qodly Server (Cloud) environment. It enables developers to execute specific logic during application startup and shutdown.

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

<!--REF #QodlyEvents.onStartup().Syntax -->**.onStartup**() : void<!-- END REF -->

<!--REF #QodlyEvents.onStartup().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|void|&#8592;|__|<!-- END REF -->

#### Description

The `.onStartup()` function <!-- REF #QodlyEvents.onStartup().Summary -->executes once when the server starts.<!-- END REF --> This function is best used to:

- Initialize shared variables for the session.
- Load preferences or settings from a previous session.
- Prevent database opening if conditions are not met (e.g., missing resources).
- Execute any other setup logic required on startup.

:::info
The `.onStartup()` function is executed automatically before any remote connections can occur.
:::

#### Example

```qs
shared function onStartup()
	logEvent("Application startup completed successfully.", 0)
```


## .onStop()

<!--REF #QodlyEvents.onStop().Syntax -->**.onStop**() : void<!-- END REF -->

<!--REF #QodlyEvents.onStop().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|void|&#8592;|__|<!-- END REF -->

#### Description

The `.onStop()` function <!-- REF #QodlyEvents.onStop().Summary -->executes once when the server stops.<!-- END REF --> This function is best used to:

- Save settings for the next startup session.
- Perform any necessary cleanup operations.
- Log shutdown events.

:::info
When the server stops, Qodly performs these actions:
- If no `.onStop()` function exists, all running processes are aborted.
- If an `.onStop()` function exists, it runs within a new local process, allowing controlled termination of other processes.
:::

#### Example

```qs
shared function onStop()
	logEvent("Application is shutting down.", 0)
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