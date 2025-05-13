---
id: qodlyEventsClass
title: QodlyEvents Class Interface
---

import Column from '@site/src/components/Column'

## Overview

The QodlyEvents class interface provides a structured way to define application lifecycle logic in Qodly Server. It allows developers to implement startup and shutdown logic that is executed automatically when the server starts or stops.

## Accessing QodlyEvents

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        The QodlyEvents class is visible under the classes folder in the explorer structure. By default, it appears greyed out until activated. Once activated, the class is created with predefined methods to handle application events.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/QodlyEvents1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

When activated, QodlyEvents is initialized with the following structure:

```qs
shared singleton Class constructor()

shared function onStartup()

shared function onStop()
```

These methods enable the execution of custom logic when the application starts or stops. 


Developers can modify the onStartup() and onStop() functions inside the QodlyEvents class interface to define custom behavior. For example:

```qs
shared singleton Class constructor()

shared function onStartup()
	logEvent("Application startup completed successfully.", 0)

shared function onStop()
	logEvent("Application is shutting down.", 0)
```


## Automatic Execution of QodlyEvents

The onStartup() and onStop() functions execute automatically as part of the Qodly Server lifecycle.

### Execution at Server Startup

When the Qodly Server starts, it automatically triggers the onStartup() function logic defined inside the QodlyEvents class interface by calling `cs.QodlyEvents.me.onStartup()`:

- This ensures that any initialization logic inside the onStartup() function is executed at startup.

- Developers do not need to manually call cs.QodlyEvents.me.onStartup() in normal operations.

:::info
The `onStartup()` function is executed automatically before any remote connections can occur.
:::

### Execution at Server Shutdown

When the Qodly Server stops, it automatically triggers the onStop() function logic defined inside the QodlyEvents class interface by calling `cs.QodlyEvents.me.onStop()`:

- This ensures that any cleanup logic inside the onStop() function is executed at shutdown.

- Developers do not need to manually call cs.QodlyEvents.me.onStop() in normal operations.


## Behavior and Restrictions

The QodlyEvents class has several key properties:

- Non-Visible Database Methods: The database methods associated with QodlyEvents are not visible in the Explorer.

- Non-Deletable: Users cannot delete the QodlyEvents class.

- Non-Renameable: The name QodlyEvents is fixed and cannot be changed.

- Execution at Server Events:

    - The onStartup() function runs at server startup.

    - The onStop() function runs at server shutdown.

## QodlyEvents (Interface) vs cs.QodlyEvents (Singleton)

| **Aspect** | **QodlyEvents Class (Interface - Defined Logic)** | **`cs.QodlyEvents` Singleton (Executor)** |
|------------|-------------------------------------------------|-------------------------------------------|
| **Where it Exists** | Visible inside the **Classes folder** in the Explorer | Exists as a system-managed singleton instance |
| **What it Does** | Stores the logic for `onStartup()` and `onStop()` | Executes the logic by calling `onStartup()` and `onStop()` |
| **Execution** | `onStartup()` and `onStop()` functions hold logic that executes when triggered | Calls `onStartup()` and `onStop()` automatically at lifecycle events or when manually invoked |

:::tip
The interface holds the logic, while the singleton executes it automatically or when explicitly called by a developer.
:::