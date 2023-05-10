---
id: DataStoreClass
title: DataStore
---

A [Datastore](../../concepts/orda/data-model.md#datastore) is the interface object provided by ORDA to reference and access a database. The `Datastore` object is returned by the [ds](#ds) command, a shortcut to the main datastore.


### Commands

||
|---|
|[<!-- INCLUDE #_command_.ds.Syntax -->](#ds)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.ds.Summary -->|



### Functions and properties

||
|---|
|[<!-- INCLUDE #DataStoreClass.cancelTransaction().Syntax -->](#canceltransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.cancelTransaction().Summary -->|
|[<!-- INCLUDE DataStoreClass.dataclassName.Syntax -->](#dataclassname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataStoreClass.dataclassName.Summary --> |
|[<!-- INCLUDE #DataStoreClass.isAdminProtected().Syntax -->](#isadminprotected)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.isAdminProtected().Summary --> |
|[<!-- INCLUDE #DataStoreClass.setAdminProtection().Syntax -->](#setadminprotection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.setAdminProtection().Summary --> |
|[<!-- INCLUDE #DataStoreClass.startRequestLog().Syntax -->](#startrequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startRequestLog().Summary --> |
|[<!-- INCLUDE #DataStoreClass.startTransaction().Syntax -->](#starttransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.startTransaction().Summary --> |
|[<!-- INCLUDE #DataStoreClass.stopRequestLog().Syntax -->](#stoprequestlog)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.stopRequestLog().Summary --> |
|[<!-- INCLUDE #DataStoreClass.validateTransaction().Syntax -->](#validatetransaction)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #DataStoreClass.validateTransaction().Summary --> |





## ds


<!-- REF #_command_.ds.Syntax -->
**ds** : cs.DataStore <!-- END REF -->

<!-- REF #_command_.ds.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result |cs.DataStore|<-|Reference to the datastore|
<!-- END REF -->


#### Description

The `ds` command <!-- REF #_command_.ds.Summary -->returns a reference to the datastore matching the current Qodly database<!-- END REF -->.

The datastore is opened automatically and available directly through `ds`.


#### Example

Using the datastore on the Qodly database:

```4d
 result=ds.Employee.query("firstName = :1","S@")
```


<!-- REF DataStoreClass.cancelTransaction().Desc -->

## .cancelTransaction()


<!-- REF #DataStoreClass.cancelTransaction().Syntax -->
**.cancelTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.cancelTransaction().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.cancelTransaction()` function <!-- REF #DataStoreClass.cancelTransaction().Summary -->cancels the transaction<!-- END REF --> opened by the [`.startTransaction()`](#starttransaction) function at the corresponding level in the current process for the specified datastore.

The `.cancelTransaction()` function cancels any changes made to the data during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using the [`.validateTransaction()`](#validatetransactions) function.


#### Example

See example for the [`.startTransaction()`](#starttransaction) function.


<!-- END REF -->


<!-- REF DataStoreClass.dataclassName.Desc -->
## *.dataclassName*

<!-- REF DataStoreClass.dataclassName.Syntax -->
***.dataclassName*** : 4D.DataClass<!-- END REF -->


#### Description

Each dataclass in a datastore is available as a property of the [DataStore object](../../concepts/orda/data-model.md#datastore). The returned object <!-- REF DataStoreClass.dataclassName.Summary -->contains a description of the dataclass<!-- END REF -->.


#### Example


```4d
 var emp : cs.Employee
 var sel : cs.EmployeeSelection
 emp=ds.Employee //emp contains the Employee dataclass
 sel=emp.all() //gets an entity selection of all employees

  //you could also write directly:
 sel=ds.Employee.all()
```


<!-- END REF -->






<!-- REF DataStoreClass.isAdminProtected().Desc -->
## .isAdminProtected()

<!-- REF #DataStoreClass.isAdminProtected().Syntax -->
**.isAdminProtected()** : Boolean<!-- END REF -->

<!-- REF #DataStoreClass.isAdminProtected().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Boolean|<-|True if the Data Explorer access is disabled, False if it is enabled (default)|
<!-- END REF -->


#### Description

The `.isAdminProtected()` function <!-- REF #DataStoreClass.isAdminProtected().Summary -->returns `True` if Data Explorer access has been disabled for the working session<!-- END REF -->.

By default, the Data Explorer access is granted for `webAdmin` sessions, but it can be disabled to prevent any data access from administrators (see the [`.setAdminProtection()`](#setadminprotection) function).

#### See also

[`.setAdminProtection()`](#setadminprotection)

<!-- END REF -->



<!-- REF DataStoreClass.setAdminProtection().Desc -->
## .setAdminProtection()


<!-- REF #DataStoreClass.setAdminProtection().Syntax -->**.setAdminProtection**( *status* : Boolean )<!-- END REF -->


<!-- REF #DataStoreClass.setAdminProtection().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|status|Boolean|->|True to disable Data Explorer access to data on the `webAdmin` port, False (default) to grant access|
<!-- END REF -->


#### Description

The `.setAdminProtection()` function <!-- REF #DataStoreClass.setAdminProtection().Summary -->allows disabling any data access on the [web admin port](https://developer.4d.com/docs/en/Admin/webAdmin.html#webadmin-settings), including for the [Data Explorer](https://developer.4d.com/docs/en/Admin/dataExplorer.html) in `WebAdmin` sessions<!-- END REF -->.

By default when the function is not called, access to data is always granted on the web administration port for a session with `WebAdmin` privilege using the Data Explorer. In some configurations, for example when the application server is hosted on a third-party machine, you might not want the administrator to be able to view your data, although they can edit the server configuration, including the [access key](https://developer.4d.com/docs/en/Admin/webAdmin.html#access-key) settings.

In this case, you can call this function to disable the data access from Data Explorer on the web admin port of the machine, even if the user session has the `WebAdmin` privilege. When this function is executed, the data file is immediately protected and the status is stored on disk: the data file will be protected even if the application is restarted.


#### Example

You create a *protectDataFile* project method to call before deployments for example:

```4d
 ds.setAdminProtection(True) //Disables the Data Explorer data access
```

#### See also

[`.isAdminProtected()`](#isadminprotected)

<!-- END REF -->


<!-- REF DataStoreClass.startRequestLog().Desc -->
## .startRequestLog()


<!-- REF #DataStoreClass.startRequestLog().Syntax -->
**.startRequestLog**()<br/>**.startRequestLog**( *file* : 4D.File )<br/>**.startRequestLog**( *reqNum* : Integer )<!-- END REF -->


<!-- REF #DataStoreClass.startRequestLog().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|file |4D.File|->|File object|
|reqNum |Integer|->|Number of requests to keep in memory|
<!-- END REF -->


#### Description

The `.startRequestLog()` function <!-- REF #DataStoreClass.startRequestLog().Summary -->starts the logging of ORDA requests on the client side<!-- END REF -->.

This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations.

The ORDA request log can be sent to a file or to memory, depending on the parameter type:

*	If you passed a *file* object created with the `File` command, the log data is written in this file as a collection of objects (JSON format). Each object represents a request.<br/>If the file does not already exist, it is created. Otherwise if the file already exists, the new log data is appended to it.
If `.startRequestLog( )` is called with a file while a logging was previously started in memory, the memory log is stopped and emptied.

> A \] character must be manually appended at the end of the file to perform a JSON validation

*	If you passed a *reqNum* integer, the log in memory is emptied (if any) and a new log is initialized. It will keep *reqNum* requests in memory until the number is reached, in which case the oldest entries are emptied (FIFO stack).<br/>If `.startRequestLog()` is called with a *reqNum* while a logging was previously started in a file, the file logging is stopped.

*	If you did not pass any parameter, the log is started in memory. If `.startRequestLog()` was previously called with a *reqNum* (before a `.stopRequestLog()`), the log data is stacked in memory until the next time the log is emptied or `.stopRequestLog()` is called.

For a description of the ORDA request log format, please refer to the [**ORDA client requests**](https://developer.4d.com/docs/en/Admin/debugLogFiles.html#orda-client-requests) section.

#### Example 1

You want to log ORDA client requests in a file and use the log sequence number:

```4d
 var $file : 4D.File
 var $e : cs.PersonsEntity

 $file:=File("/LOGS/ORDARequests.txt") //logs folder

 SET DATABASE PARAMETER(Client Log Recording;1) //to trigger the global log sequence number
 ds.startRequestLog($file)
 $e:=ds.Persons.get(30001) //send a request
 ds.stopRequestLog()
 SET DATABASE PARAMETER(Client Log Recording;0)
```

#### Example 2

You want to log ORDA client requests in memory:

```4d
 var $es : cs.PersonsSelection
 var $log : Collection

 ds.startRequestLog(3) //keep 3 requests in memory

 $es:=ds.Persons.query("name=:1";"Marie")
 $es:=ds.Persons.query("name IN :1";New collection("Marie"))
 $es:=ds.Persons.query("name=:1";"So@")

 $log:=ds.getRequestLog()
 ALERT("The longest request lasted: "+String($log.max("duration"))+" ms")
```

<!-- END REF -->




<!-- REF DataStoreClass.startTransaction().Desc -->
## .startTransaction()


<!-- REF #DataStoreClass.startTransaction().Syntax -->
**.startTransaction()**<!-- END REF -->

<!-- REF #DataStoreClass.startTransaction().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.startTransaction()` function <!-- REF #DataStoreClass.startTransaction().Summary -->starts a transaction in the current process on the database matching the datastore to which it applies<!-- END REF -->. Any changes made to the datastore's entities in the transaction's process are temporarily stored until the transaction is either validated or cancelled.

>If this method is called on the main datastore (i.e. the datastore returned by the `ds` command), the transaction is applied to all operations performed on the main datastore and on the underlying database, thus including ORDA and classic languages.

You can nest several transactions (sub-transactions). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all of its sub-transactions are also cancelled even if they were validated individually using the `.validateTransaction()` function.


#### Example


```4d
 var $connect; $status : Object
 var $person : cs.PersonsEntity
 var $ds : cs.DataStore
 var $choice : Text
 var $error : Boolean

 Case of
    :($choice="local")
       $ds:=ds
    :($choice="remote")
       $connect:=New object("hostname";"111.222.3.4:8044")
       $ds:=Open datastore($connect;"myRemoteDS")
 End case

 $ds.startTransaction()
 $person:=$ds.Persons.query("lastname=:1";"Peters").first()

 If($person#Null)
    $person.lastname:="Smith"
    $status:=$person.save()
 End if
 ...
 ...
 If($error)
    $ds.cancelTransaction()
 Else
    $ds.validateTransaction()
 End if
```


<!-- END REF -->





<!-- REF DataStoreClass.stopRequestLog().Desc -->
## .stopRequestLog()

<!-- REF #DataStoreClass.stopRequestLog().Syntax -->
**.stopRequestLog()**  <!-- END REF -->

<!-- REF #DataStoreClass.stopRequestLog().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.stopRequestLog()` function <!-- REF #DataStoreClass.stopRequestLog().Summary -->stops any logging of ORDA requests on the client side<!-- END REF --> (in file or in memory). It is particularly useful when logging in a file, since it actually closes the opened document on disk.

This function must be called on a remote 4D, otherwise it does nothing. It is designed for debugging purposes in client/server configurations.


#### Example

See examples for [`.startRequestLog()`](#startrequestlog).

<!-- END REF -->




<!-- REF DataStoreClass.validateTransaction().Desc -->
## .validateTransaction()


<!-- REF #DataStoreClass.validateTransaction().Syntax -->
**.validateTransaction()**  <!-- END REF -->

<!-- REF #DataStoreClass.validateTransaction().Params -->
|Parameter|Type||Description|
|---|---|---|---|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.validateTransaction()` function <!-- REF #DataStoreClass.validateTransaction().Summary -->accepts the transaction <!-- END REF -->that was started with [`.startTransaction()`](#starttransaction) at the corresponding level on the specified datastore.

The function saves the changes to the data on the datastore that occurred during the transaction.

You can nest several transactions (sub-transactions). If the main transaction is cancelled, all of its sub-transactions are also cancelled, even if they were validated individually using this function.


#### Example

See example for [`.startTransaction()`](#starttransaction).

<!-- END REF -->
