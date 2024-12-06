---
id: storage
title: storage
---


<!-- REF #_command_.storage.Syntax -->**storage** : object<!-- END REF -->


<!-- REF #_command_.storage.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|&#8592;|Catalog of shared objects and shared collections registered in `storage`|
<!-- END REF -->



#### Description

The `storage` command <!-- REF #_command_.storage.Summary -->returns the catalog of shared objects or shared collections that you have registered in the `storage` object on the current application<!-- END REF -->.

The catalog returned by `storage` is automatically created by Qodly and is available to all processes of the application, including preemptive processes. There is one `storage` shared object per server.

Use the `storage` catalog to reference any shared objects or shared collections that you want to be used from any preemptive or standard process. To register a shared object or a shared collection in the catalog, add its reference to the shared object returned by `storage`.

Since the catalog returned by `storage` is a shared object, it follows the rules described in the [Shared objects and shared collections](../basics/lang-shared.md) section (but with some specificities):

- This object can only contain shared objects and shared collections. Trying to add other kinds of values (non-shared objects or collections, null, scalar values) will generate an error.
- Adding a property to this object must be surrounded by the `use...end` structure, otherwise an error is returned. Reading an attribute outside of a `use...end` structure is, however, possible.
- When surrounded by the `use...end` structure, first-level attributes of `storage` are locked for other processes.
- Unlike standard shared objects, the object returned by `storage` will NOT share its locking identifier with shared objects or collections added as attributes (and thus will not be locked).

#### Example 1

Initializing the `storage` object:

```qs
 use(storage)
    storage.counters = newSharedObject("customers",0,"invoices",0)
 end
```

#### Example 2

A standard way to set `storage` values:

```qs
 use(storage)
    storage.mydata: = newSharedObject
    use(storage.mydata)
       storage.mydata.prop1 = "Smith"
       storage.mydata.prop2 = 100
    end
 end
```

#### Example 3

`storage` allows implementing a singleton with a *lazy initialization*, as shown in the following example.


 declare -> counterValue : integer
 var counter : object //create a reference to counter for the process

 if(counter == null) //if this reference is null, get if from storage
    use(storage) //Use of storage needed only once!
       if(storage.counter == null)
          storage.counter = newSharedObject("operation",0)
       end
       counter = storage.counter //Get the reference of the counter shared object
    end
 end
 use(counter) //directly use the shared object counter (no need to use storage!)
    counter.operation = counter.operation+1
    counterValue = counter.operation
 end

:::note

For more information about singleton patterns, you can refer to [this Wikipedia page](https://en.wikipedia.org/wiki/Singleton_pattern).

:::
