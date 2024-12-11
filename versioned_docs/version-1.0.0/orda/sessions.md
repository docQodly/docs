---
id: sessions
title: User sessions
---




When a user connects to a Qodly application, a *user session* is automatically opened on the Qodly server to manage their access with regards to their privileges. A session cookie is generated.

The session automatically gets [privileges](../studio/roles/rolesPrivilegesOverview.md) according to the **Profile** [associated to the user in the console](../cloud/userAccountManagement.md#add-new-user).

The Qodly developer can also handle a user session through the [`Session` class](../language/SessionClass.md). For example, you can get the list of privileges associated to the session using the [`getPrivileges()`](../language/SessionClass.md#getprivileges) function, or store user information in the session's [`storage`](../language/SessionClass.md#storage) property.

:::info

A Qodly user session never expires, however the parent **Amazon Cognito** session expires after one week of inactivity.

:::
