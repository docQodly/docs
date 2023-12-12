---
id: SessionClass
title: Session
---

Session objects are returned by the [`Session`](#session) command. The Session object is automatically created and maintained by the Qodly web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes.


### Commands

||
|---|
|[<!-- INCLUDE #_command_.session.Syntax -->](#session)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.session.Summary -->|


### Functions and properties

||
|---|
|[<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
|[<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
|[<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
|[<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
|[<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
|[<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
|[<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
|[<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|




## session

<!-- REF #_command_.session.Syntax -->**session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.session.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.Session|<-|Session object|<!-- END REF -->


#### Description

The `session` command <!-- REF #_command_.session.Summary -->returns the `Session` object corresponding to the current scalable user web session<!-- END REF -->.

The `Session` object is available from any web processes in ORDA [Data Model Class functions](../orda/data-model.md) called with REST requests.




<!-- REF SessionClass.clearPrivileges().Desc -->
## .clearPrivileges()


<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges**()<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|<!-- END REF -->


#### Description

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session<!-- END REF -->. As a result, the session automatically becomes a Guest session.


#### Example

```qs
//Invalidate a session
var isGuest : boolean  

session.clearPrivileges()
isGuest = session.isGuest() //isGuest is True
```

<!-- END REF -->



<!-- REF SessionClass.expirationDate.Desc -->
## .expirationDate

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : string<!-- END REF -->

#### Description

The `.expirationDate` property contains <!-- REF #SessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. The value is expressed as text in the ISO 8601 format: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

This property is **read-only**. It is automatically recomputed if the [`.idleTimeout`](#idletimeout) property value is modified.

#### Example

```qs
var expiration : string
expiration = session.expirationDate //eg "2021-11-05T17:10:42Z"
```

<!-- END REF -->




<!-- REF SessionClass.hasPrivilege().Desc -->
## .hasPrivilege()


<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : string ) : boolean<!-- END REF -->


<!-- REF #SessionClass.hasPrivilege().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|privilege|string|<-|Name of the privilege to verify|
|Result|boolean|<-|True if session has *privilege*, false otherwise|<!-- END REF -->


#### Description

The `.hasPrivilege()` function <!-- REF #SessionClass.hasPrivilege().Summary -->returns true if the privilege is associated to the session, and false otherwise<!-- END REF -->.


#### Example

You want to check if the "WebAdmin" privilege is associated to the session:

```qs
if (session.hasPrivilege("WebAdmin"))
	//Access is granted, do nothing
else
	//Display an authentication page

end
```

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout


<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : integer<!-- END REF -->

#### Description

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by Qodly<!-- END REF -->.

If this property is not set, the default value is 60 (1h).

When this property is set, the [`.expirationDate`](#expirationdate) property is updated accordingly.

> The value cannot be less than 60: if a lower value is set, the timeout is raised up to 60.


This property is **read write**.

#### Example

```qs
if (session.isGuest())
		// A Guest session will close after 60 minutes of inactivity
	session.idleTimeout = 60
else
		// Other sessions will close after 120 minutes of inactivity
	session.idleTimeout = 120
end

```

<!-- END REF -->


<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()


<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest**() : boolean<!-- END REF -->


<!-- REF #SessionClass.isGuest().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|True if session is a Guest one, false otherwise|<!-- END REF -->

#### Description

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns `true` if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.


#### Example


```qs
if (session.isGuest())
	//Do something for Guest user
end
```


<!-- END REF -->


<!-- REF SessionClass.setPrivileges().Desc -->
## .setPrivileges()


<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : string )<br/>**.setPrivileges**( *privileges* : collection )<br/>**.setPrivileges**( *settings* : object )<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|privilege|string|->|Privilege name|
|privileges|collection|->|Collection of privilege names|
|settings|Object|->|object with a "privileges" property (string or collection)|<!-- END REF -->

#### Description

The `.setPrivileges()` function <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) and/or role(s) defined in the parameter to the session<!-- END REF -->.

- In the *privilege* parameter, pass a string containing a privilege name (or several comma-separated privilege names).

- In the *privileges* parameter, pass a collection of strings containing privilege names.

- In the *settings* parameter, pass an object containing the following properties:

|Property|Type|Description|
|---|---|---|
|privileges|string or collection|<li>String containing a privilege name, or</li><li>Collection of strings containing privilege names</li>|
|roles|string or collection|<li>String containing a role, or</li><li>Collection of strings containing roles</li>|
|userName|string|User name to associate to the session (optional)|

:::info

For more information, please refer to the [**Privileges**](../studio/roles/rolesPrivilegesOverview.md) section.

:::

If the `privileges` or `roles` property contains a name that is not declared, it is ignored.

By default when no privilege or role is associated to the session, the session is a [Guest session](#isguest).

The [`userName`](#username) property is available at session object level (read-only).

#### Example

In a custom authentication method, you set the "WebAdmin" privilege to the user:

```qs
var userOK : boolean

... //Authenticate the user

if (userOK) //The user has been approved
  var info : object
  info = newObject
  info.privileges = newCollection("WebAdmin")
  session.setPrivileges(info)
end

```


<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->
## .storage

<!-- REF #SessionClass.storage.Syntax -->**.storage** : object<!-- END REF -->

#### Description

The `.storage` property contains <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all requests of the web client<!-- END REF -->.

When a `session` object is created, the `.storage` property is empty. Since it is a shared object, this property will be available in the `storage` object of the server.

> Like the `storage` object of the server, the `.storage` property is always "single": adding a shared object or a shared collection to `.storage` does not create a shared group.

This property is **read only** itself but it returns a read-write object.

#### Example

You want to store the client IP in the `.storage` property:

```qs
if (session.storage.clientIP == null) //first access
    use (session.storage)
        session.storage.clientIP = newSharedObject("value", clientIP)
    end
end

```

<!-- END REF -->





<!-- REF SessionClass.userName.Desc -->
## .userName


<!-- REF #SessionClass.userName.Syntax -->**.userName** : string<!-- END REF -->

#### Description

The `.userName` property contains <!-- REF #SessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. You can use it to identify the user within your code.

This property is an empty string by default. It can be set using the `privileges` property of the [`setPrivileges()`](#setprivileges) function.

This property is **read only**.



<!-- END REF -->
