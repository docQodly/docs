---
id: access
title: User access
---

Users can connect to Qodly applications through two distinct access modes: **authenticated access** or **public access**.

## Authenticated access

For the authenticated access, the user must be registered in the **Qodly directory** (relying on [Amazon Cognito](https://aws.amazon.com/fr/cognito/) for authentication and storage). You add users to the Qodly directory using the [**Users management page**](../cloud/userAccountManagement.md) of the Console. In this page, the user is assigned a specific [role](../studio/roles/rolesPrivilegesOverview.md) (profile) and allowed to access one or more [enviromnents](../cloud/environmentsOverview.md) (including the Development environment). The *user session* gets automatically their defined role at authentication step. 

The user connects to the application via the [**Authenticated URL**](../cloud/resourceMonitoring.md#application-access) (screen mode) or the [**Endpoint URL**](../cloud/apiKeys.md) (API mode) of the allowed environment. The user session gets automatically their defined

The *user session* gets automatically their defined [role](../studio/roles/rolesPrivilegesOverview.md) according to the **Profile** [associated to the user in the console](../cloud/userAccountManagement.md#add-new-user).


## Public access

For the public access, the user connects to the application through the **Public URL** (must be [activated explicitely](../cloud/resourceMonitoring.md#application-access) in the Console).

The user only has [Guest role](../studio/roles/datastorePermissions.md#introducing-the-guest-privilege) by default. 

It's up to the Qodly developer to [authenticate the user](../language/guides/login.md) and grant them a privilege or role using the [Session class API](../language/SessionClass.md). For example, you can get the list of privileges associated to the session using the [`getPrivileges()`](../language/SessionClass.md#getprivileges) function, or store user information in the session's [`storage`](../language/SessionClass.md#storage) property.
