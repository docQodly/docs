---
id: lang-shared
title: Shared objects and collections
---

**Shared objects** and **shared collections** are specific [objects](lang-object.md) and [collections](lang-collection.md) whose contents are shared between processes. Shared objects and shared collections are compatible with **preemptive processes**: they can be passed by reference as parameters to commands such as `callWorker`.

Shared objects and shared collections can be stored in standard `object` and `collection` type [variables](lang-variables.md), but must be instantiated using specific commands:

- to create a shared object, use the [`newSharedObject`](../object.md#newsharedobject) command or call the [`new()`](../ClassClass.md#new) function of a [shared class](lang-classes.md#shared-classes),
- to create a shared collection, use the [`newSharedCollection`](../CollectionClass.md#newsharedcollection) command.

:::note

Shared objects and collections can be set as properties of standard (not shared) objects or collections.

:::

In order to modify a shared object/collection, the **use...end** structure must be called. Reading a shared object/collection value does not require **use...end**.

To know if an object or a collection is shared, use the [`objectIsShared`](../object.md#objectisshared) command.

A unique, global catalog returned by the [`storage`](../object.md#storage) command is always available throughout the project, and can be used to store all shared objects and collections.

## Using shared objects or collections

Once instantiated with the `newSharedObject` or `newSharedCollection` command, shared object/collection properties and elements can be modified or read from any process of the application.

### Modification

Modifications can be applied to shared objects and shared collections:

- adding or removing object properties,
- adding or editing values (provided they are supported in shared objects), including other shared objects or collections (which creates a shared group, see below).

However, all modification instructions in a shared object or collection must be surrounded by the `use...end` keywords, otherwise an error is generated.

```qs
s_obj = newSharedObject("prop1","alpha")
use(s_obj)
   s_obj.prop1 = "omega"
end
```

A shared object/collection can only be modified by one process at a time. `use` locks the shared object/collection from other threads, while `end` unlocks the shared object/collection (if the locking counter is at 0, see below). Trying to modify a shared object/collection without at least one `use...end` generates an error. When a process calls `use...end` on a shared object/collection that is already in use by another process, it is simply put on hold until the `end` unlocks it (no error is generated). Consequently, instructions within `use...end` structures should execute quickly and unlock the elements as soon as possible. Thus, it is strongly advised to avoid modifying a shared object or collection directly from the interface, e.g. through a web form.

Assigning shared objects/collections to properties or elements of other shared objects/collections is allowed and creates **shared groups**. A shared group is automatically created when a shared object/collection is set as property value or element of another shared object/collection. Shared groups allow nesting shared objects and collections but enforce additional rules:

- Calling `use` on a shared object/collection belonging to a group locks properties/elements of all shared objects/collections of the group and increments its locking counter. Calling `end` decrements the locking counter of the group and when the counter is at 0, all the linked shared objects/collections are unlocked.
- A shared object/collection can only belong to one shared group. An error is returned if you try to set an already grouped shared object/collection to a different group.
- Grouped shared objects/collections cannot be ungrouped. Once included in a shared group, a shared object/collection is linked permanently to that group during the whole session. Even if all references of an object/collection are removed from the parent object/collection, they will remain linked.

Please refer to example 2 for an illustration of shared group rules.

:::info

Shared groups are managed through an internal property named *locking identifier*.

:::


### Read

Reading properties or elements of a shared object/collection is allowed without having to call the `use...end` structure, even if the shared object/collection is in use by another process.

However, it is necessary to read a shared object/collection within `use...end` when several values are linked together and must be read at once, for consistency reasons.

### Duplication

Calling [`objectCopy`](../object.md#objectcopy) with a shared object or with an object containing shared object(s) as properties is possible, but will return a standard (not shared) object including its contained objects (if any).

### Storage

**storage** is a unique shared object, automatically available on each project. This shared object is returned by the [`storage`](../object.md#storage) command. You can use this object to reference all shared objects/collections defined during the session that you want to be available from any preemptive or standard processes.

Note that, unlike standard shared objects, the **storage** object does not create a shared group when shared objects/collections are added as its properties. This exception allows the **storage** object to be used without locking all connected shared objects or collections.

For more information, refer to the [`storage` command description](../object.md#storage).

## use...end

The formal syntax of the `use...end` structure is:

```qs
 use(Shared_object_or_Shared_collection)
    statement(s)
 end
```

The `use...end` structure defines a sequence of statements that will execute tasks on the *Shared_object_or_Shared_collection* parameter under the protection of an internal semaphore. *Shared_object_or_Shared_collection* can be any valid shared object or shared collection.

Shared objects and shared collections are designed to allow communication between processes, in particular, **preemptive processes**. They can be passed by reference as parameters from a process to another one. Surrounding modifications on shared objects or shared collections by the `use...end` keywords is mandatory to prevent concurrent access between processes.

- Once the **use** line is successfully executed, all *Shared_object_or_Shared_collection* properties/elements are locked for all other process in write access until the corresponding `end` line is executed.
- The *statement(s)* sequence can execute any modification on the *Shared_object_or_Shared_collection* properties/elements without risk of concurrent access.
- If another shared object or collection is added as a property of the *Shared_object_or_Shared_collection* parameter, they become connected within the same shared group.
- If another process tries to access one of the *Shared_object_or_Shared_collection* properties or connected properties while a **use...end** sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated.
- The **end** line unlocks the *Shared_object_or_Shared_collection* properties and all objects of the same group.
- Several **use...end** structures can be nested in the QodlyScript code. In the case of a group, each **use** increments the locking counter of the group and each **end** decrements it; all properties/elements will be released only when the last **end** call sets the locking counter to 0.

:::note

If a function of the [collection class](../CollectionClass.md) modifies a shared collection, an internal **use** is automatically called for this shared collection while the function is executed.

:::


## Examples

The following examples highlight specific rules when handling shared groups:

```qs
 ob1 = newSharedObject
 ob2 = newSharedObject
 use(ob1)
    ob1.a = ob2  //group 1 is created
 end

 ob3 = newSharedObject
 ob4 = newSharedObject
 use(ob3)
    ob3.a = ob4  //group 2 is created
 end

 use(ob1) //use an object from group 1
    ob1.b = ob4  //ERROR
  //ob4 already belongs to another group
  //assignment is not allowed
 end

 use(ob3)
    ob3.a = null //remove any reference to ob4 from group 2
 end

 use(ob1) //use an object from group 1
    ob1.b = ob4  //ERROR
  //ob4 still belongs to group 2
  //assignment is not allowed
 end
```
