---
id: objectIsShared
title: objectIsShared
---


<!-- REF #_command_.objectIsShared.Syntax -->**objectIsShared** ( *object* : object ) : boolean&nbsp; **objectIsShared** ( *collection* : collection ) : boolean<!-- END REF -->


<!-- REF #_command_.objectIsShared.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|object|object|&#8594;|Object to check|
|collection|collection|&#8594;|Collection to check|
|Result|boolean|&#8592;|true if *object* or *collection* is shareable, false if it is alterable|
<!-- END REF -->


#### Description

The `objectIsShared` command <!-- REF #_command_.objectIsShared.Summary -->returns `true` if *object* or *collection* is shareable, and `false` if it is alterable<!-- END REF -->.

For more information, see [Shared objects and collections](../basics/lang-shared.md).

:::note

The command returns `true` if you pass a [shareable entity selection](../../orda/data.md#shareable-or-alterable-entity-selections)

:::
