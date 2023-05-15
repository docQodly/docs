---
id: UsersClass
title: Users
---



The Users class allows you to get information about users of your Qodly application. It can be used, for example, to display the name of the currently connected user.



### Instantiation

To use the Users class functions, you must instantiate a Qodly users interface object using the [`cs.Qodly.Users.new()`](#csqodlyusersnew) constructor. For example:

```4d
	//instantiate the Users interface
var usersInterface : cs.Qodly.Users
usersInterface=cs.Qodly.Users.new()
```



### Functions and properties

||
|---|
|[**cs.Qodly.Users.new**() : cs.Qodly.Users](#csqodlyusersnew)&nbsp;&nbsp;&nbsp;&nbsp;creates and returns a new object of the `cs.Qodly.Users` type|
|[**.getCurrentUser**() : Object](#getcurrentuser)&nbsp;&nbsp;&nbsp;&nbsp;returns an object containing all information on the current Qodly user|
|[**.getAllUsers**() : Collection](#getallusers)&nbsp;&nbsp;&nbsp;&nbsp;returns a collection of all Qodly users (objects) currently connected to the application|


## cs.Qodly.Users.new()

**cs.Qodly.Users.new**() : cs.Qodly.Users



|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|cs.Qodly.Users|<-|Users component object|

#### Description

The `cs.Qodly.Users.new()` function creates and returns a new object of the `cs.Qodly.Users` type. The returned object will then be used to call user information functions.









## .getCurrentUser()

**.getCurrentUser**() : Object



|Parameter|Type||Description|
|---|---|---|---|
|Result|Object|<-|Current Qodly user information|


#### Description

The `.getCurrentUser()` function returns an object containing all information on the current Qodly user.

#### Qodly user object

The function returns a Qodly user object that contains the following properties:

|Property|Type|Description|
|---|---|---|
|email|String|Email of the user used to create their account|
|role|String|Role defined in the roles and privileges of the application|
|firstname|String|First name of the user|
|lastname|String|Last name of the user|


#### Example

To implement a `getCurrentUser()` function in a custom class:

```4d
exposed Function getCurrentUser() : Object

    var user : Object
    var usersInterface : cs.Qodly.Users

usersInterface=cs.Qodly.Users.new()
user=usersInterface.getCurrentUser()
return user
```




## .getAllUsers()

**.getAllUsers**() : Collection



|Parameter|Type||Description|
|---|---|---|---|
|Result|Collection|<-|Collection of Qodly user objects|


#### Description

The `.getAllUsers()` function returns a collection of all Qodly users (objects) currently connected to the application.


**Returned value**

The function returns a collection of [Qodly user objects](#qodly-user-object).


#### Example

To implement a `getAllUsers()` function in a custom class:


```4d
exposed Function getAllUsers() : Collection
   
    var users:Collection
    var usersInterface:cs.Qodly.Users 

usersInterface=cs.Qodly.Users.new()
users=usersInterface.getAllUsers()

return users
```


