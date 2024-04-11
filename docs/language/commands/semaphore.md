---
id: semaphore
title: semaphore
---


<!-- REF #_command_.semaphore.Syntax -->**semaphore** ( *semaphore* : string { , *tickCount* : integer } ) : boolean<!-- END REF -->


<!-- REF #_command_.semaphore.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|semaphore|string|->|Semaphore to test and set|
|tickCount|integer|->|Maximum waiting time|
|Result|boolean|<-|false: semaphore has been successfully set, true: semaphore was already set|
<!-- END REF -->

#### Description

The `semaphore` command <!-- REF #_command_.semaphore.Summary -->returns `true` and does nothing if *semaphore* already exists, or creates *semaphore* and returns `false` if it does not exist<!-- END REF -->.

:::info

A **semaphore** is a flag shared among processes. A semaphore simply exists or does not exist. The methods that each process is running can test for the existence of a semaphore. A semaphore can only be removed by the process that created it. By creating and testing semaphores, methods can communicate between processes. You do not use semaphores to protect data access (this is automatically done by the Qodly Server), you use semaphores to prevent several processes from performing the same operation at the same time.

:::


Only one process at a time can create a semaphore. If `semaphore` returns `false`, it means that the semaphore did not exist, but it also means that the *semaphore* has been set for the process in which the call has been made.

`semaphore` returns `false` if the *semaphore* was not set. It also returns `false` if the semaphore is already set by the same process in which the call has been made.

The *semaphore* name is limited to 255 characters. If you pass a longer string, the semaphore will be tested with the truncated string. Keep in mind that semaphore names are case-sensitive.

The optional parameter *tickCount* allows you to specify a waiting time (in ticks) if *semaphore* is already set. In this case, the function will wait either for the semaphore to be freed or the waiting time to expire before returning `true`.


#### Example 1

Here is typical code for using a semaphore:

```qs
while(semaphore("MySemaphore",300))

end
  // place code protected by semaphore here
clearSemaphore("MySemaphore")
```

#### Example 2  

This method allows you to not execute a method when a semaphore is present; the method alerts the calling method with an error code and plain text.

```qs
// calling code
declare -> result : object
result = semaphore_proof
// result.code: error code
// result.message: error text
```

```qs
  // Protective structure using semaphores
 var result : object


  // Start of method
 var L_MyError : integer
 L_MyError = 1

 var t_Sema : string
 t_Sema = "tictac"

 if(semaphore(t_Sema,300))
  // We expected 300 ticks but the semaphore
  // was not released by the one that placed it:
  // we end up here
    L_MyError = -1

 else

  // This method is only run by one process at a time
  // We placed the semaphore as we entered
  // so we're the only ones that can remove it

  // Do something
    ...
  // Then finish by removing the semaphore
    clearSemaphore(t_Sema)
 end

 var t_Message : string
 if(L_MyError == -1)
    t_Message = "The semaphore "+t_Sema+" has blocked access to the rest of the code"
 else
    t_Message = "OK"
 end

 result = {code : L_MyError, message : t_Message)
  // The calling method receives an error code and an explanation in plain text
```

#### See also

[`clearSemaphore`](#clearsemaphore)<br/>
[`Signal` class](SignalClass.md)
