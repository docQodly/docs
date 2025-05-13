---
id: UsersClass
title: Users
---


## Overview

The **Users** class provides streamlined access to user information within a Qodly application, including the currently authenticated user and all users added to the Qodly app.

:::tip
The **Users** class is a **shared singleton**, meaning a single instance is globally available without needing manual creation. You can access it directly via the [.me](#me) property without instantiating a new instance.
:::


## Functions and properties

||
|---|
|[<!-- INCLUDE #Users.allUsers().Syntax -->](#allusers)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Users.allUsers().Summary -->|
|[<!-- INCLUDE #Users.currentUser().Syntax -->](#currentuser)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Users.currentUser().Summary -->|
|[<!-- INCLUDE #Users.me.Syntax -->](#me)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Users.me.Summary -->|



## .allUsers()

<!--REF #Users.allUsers().Syntax -->**.allUsers**() : Collection<!-- END REF -->


<!--REF #Users.allUsers().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|collection|&#8592;|Collection of Qodly user objects|<!-- END REF -->


#### Description

The `.allUsers()` function <!-- REF #Users.allUsers().Summary -->returns a collection of all users (objects) within the Qodly application.<!-- END REF -->.

**Returned value**

The function returns a collection of [User objects](#user-object).


#### Example

To implement a `allUsers()` function in a custom class:


```qs
var users : collection
users = cs.Qodly.Users.me.allUsers()
```


## .currentUser()

<!--REF #Users.currentUser().Syntax -->**.currentUser**() : Object<!-- END REF -->


<!--REF #Users.currentUser().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Object|&#8592;|Current Qodly user information.|<!-- END REF -->


#### Description

The `.currentUser()` function <!-- REF #Users.currentUser().Summary -->returns an object containing all information on the current Qodly user.<!-- END REF -->

If a user is authenticated, it returns a [User object](#user-object) containing detailed user information. If no user is authenticated, it returns null.


#### User object

The User object returned by the function above contains the following properties:

|Property|Type|Description|
|---|---|---|
|email|String|The user's email used for account creation.The user's email used for account creation.|
|role|String|The user's role within the application [Roles & Privileges](../studio/roles/rolesPrivilegesOverview.md).|
|firstname|String|The user's first name.|
|lastname|String|The user's last name.|


#### Example

To implement a `currentUser()` function in a custom class:

```qs
var currentUser : object
currentUser = cs.Qodly.Users.me.currentUser()
```


## .me

<!--REF #Users.me.Syntax -->**.me** : cs.Qodly.Users<!-- END REF -->


<!--REF #Users.me.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|cs.Qodly.Users|&#8592;|The Users Singleton Object containing system properties and the current user details.|<!-- END REF -->


#### Description

The `.me` property <!-- REF #Users.me.Summary -->returns the current instance of the Users singleton.<!-- END REF -->  It provides direct access to the currently authenticated user and the available system properties.

It must be used when calling functions like [currentUser()](#currentuser) or [`allUsers()`](#allusers).

:::tip Why .me is Required:
If you attempt to call:

```qs
var user : object
user = cs.Qodly.Users.currentUser()
```

You will encounter an error: `function call error (is not a function)`.

The correct way to access the current user is:

```qs
var user : object
user = cs.Qodly.Users.me.currentUser()
```

The `.me` ensures the function is being called from the current active instance of the Users singleton.
:::