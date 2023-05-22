---
id: UsersClass
title: Users
---



The Users class allows you to get information about users of your Qodly application. It can be used, for example, to display the name of the currently connected user.



### Instantiation

To use the Users class functions, you must instantiate a Qodly users interface object using the [`cs.Qodly.Users.new()`](#csqodlyusersnew) constructor. For example:

```qs
	//instantiate the Users interface
var usersInterface : cs.Qodly.Users
usersInterface=cs.Qodly.Users.new()
```



### Functions and properties

||
|---|
|[<!-- INCLUDE #cs.Qodly.Users.new().Syntax -->](#csqodlyusersnew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cs.Qodly.Users.new().Summary -->|
|[<!-- INCLUDE #Users.getCurrentUser().Syntax -->](#getcurrentuser)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Users.getCurrentUser().Summary -->|
|[<!-- INCLUDE #Users.getAllUsers().Syntax -->](#getallusers)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #Users.getAllUsers().Summary -->|


## cs.Qodly.Users.new()

<!-- REF #cs.Qodly.Users.new().Syntax -->**cs.Qodly.Users.new**() : cs.Qodly.Users<!-- END REF -->


<!-- REF #cs.Qodly.Users.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|cs.Qodly.Users|<-|Users component object|<!-- END REF -->

#### Description

The `cs.Qodly.Users.new()` function <!-- REF #cs.Qodly.Users.new().Summary -->creates and returns a new object of the `cs.Qodly.Users` type<!-- END REF -->. The returned object will then be used to call user information functions.


<!-- END REF -->





<!-- REF Users.getCurrentUser().Desc -->
## .getCurrentUser()

<!--REF #Users.getCurrentUser().Syntax -->**.getCurrentUser**() : Object<!-- END REF -->


<!--REF #UserClass.getCurrentUser().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Object|<-|Current Qodly user information|<!-- END REF -->


#### Description

The `.getCurrentUser()` function <!-- REF #Users.getCurrentUser().Summary -->returns an object containing all information on the current Qodly user<!-- END REF -->.

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

```qs
exposed Function getCurrentUser() : Object

    var user : Object
    var usersInterface : cs.Qodly.Users

usersInterface=cs.Qodly.Users.new()
user=usersInterface.getCurrentUser()
return user
```

<!-- END REF -->

<!-- REF Users.getAllUsers().Desc -->
## .getAllUsers()

<!--REF #Users.getAllUsers().Syntax -->**.getAllUsers**() : Collection<!-- END REF -->


<!--REF #Users.getAllUsers().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Collection|<-|Collection of Qodly user objects|<!-- END REF -->


#### Description

The `.getAllUsers()` function <!-- REF #Users.getAllUsers().Summary -->returns a collection of all Qodly users (objects) currently connected to the application<!-- END REF -->.


**Returned value**

The function returns a collection of [Qodly user objects](#qodly-user-object).


#### Example

To implement a `getAllUsers()` function in a custom class:


```qs
exposed Function getAllUsers() : Collection
   
    var users:Collection
    var usersInterface:cs.Qodly.Users 

usersInterface=cs.Qodly.Users.new()
users=usersInterface.getAllUsers()

return users
```

<!-- END REF -->
