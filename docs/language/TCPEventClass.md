---
id: TCPEventClass
title: TCPEvent
---

The `TCPEvent` class provides information about events occurring during the lifecycle of a TCP connection. It is generated when a [TCPConnection](TCPConnectionClass.md) is opened and is typically utilized in callbacks such as `onConnection`, `onData`, `onError`, and others.



### TCPEvent Object

A `TCPEvent` object is immutable and non-streamable.

The following properties are available:

||
|---|
|[<!-- INCLUDE #4D.TCPEvent.data.Syntax -->](#data)<br/><!-- INCLUDE #4D.TCPEvent.data.Summary -->|
|[<!-- INCLUDE #4D.TCPEvent.type.Syntax -->](#type)<br/><!-- INCLUDE #4D.TCPEvent.type.Summary -->|

<!-- REF #4D.TCPEvent.type.Desc -->

<!-- REF #4D.TCPEvent.data.Desc -->
## .data

<!-- REF #4D.TCPEvent.data.Syntax -->**data** : blob<!-- END REF -->

#### Description

The `.data` property contains <!-- REF #4D.TCPEvent.data.Summary -->the data associated with the event<!-- END REF -->. It is only valid for events of type `"data"`.

:::note

When working with low-level TCP/IP connections, keep in mind there is no guarantee that all data will arrive in a single packet. Data arrives in order but may be fragmented across multiple packets. 

:::

<!-- END REF -->

## .type

<!-- REF #4D.TCPEvent.type.Syntax -->**type** : string<!-- END REF -->

#### Description

The `.type` property contains <!-- REF #4D.TCPEvent.type.Summary -->the type of the event<!-- END REF -->. Possible values are:
- `"connection"`: Indicates that a TCPConnection was successfully established.
- `"data"`: Indicates that data has been received.
- `"error"`: Indicates that an error occurred during the TCPConnection.
- `"close"`: Indicates that the TCPConnection has been properly closed.
- `"terminate"`: Indicates that the TCPConnection is about to be released.

<!-- END REF -->




