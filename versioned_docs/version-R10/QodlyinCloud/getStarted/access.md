---
id: access
title: User access
---

Users can connect to Qodly applications through two distinct access modes: **authenticated access** or **public access**.

## Authenticated access

For the authenticated access, the user must be registered in the **Qodly directory** (relying on [Amazon Cognito](https://aws.amazon.com/fr/cognito/) for authentication and storage). You add users to the Qodly directory using the [**Users management page**](../console/userAccountManagement.md) of the Console. In this page, the user is assigned a specific profile, i.e. a [role](../../4DQodlyPro/roles/rolesPrivilegesOverview.md) and allowed to access one or more [enviromnents](../console/environmentsOverview.md) (such as the Development environment).

The user connects to the application via the [**Authenticated URL**](../console/resourceMonitoring.md#application-access) (screen mode) or the [**Endpoint URL**](../console/apiKeys.md) (API mode) of the allowed environment. The [user session](../qodlyScript/SessionClass.md) gets automatically the privileges corresponding to its role at authentication step.


## Public access

For the public access, the user connects to the application through the **Public URL** (must be [activated explicitely](../console/resourceMonitoring.md#application-access) in the Console).

The user only has [Guest privilege](../../4DQodlyPro/roles/datastorePermissions.md#introducing-the-guest-privilege) by default ([`Session.isGuest`](../qodlyScript/SessionClass.md#isguest) returns true). 

It's up to the Qodly developer to [authenticate the user](../qodlyScript/guides/login.md) and grant them a privilege or role using the [Session class API](../qodlyScript/SessionClass.md). For example, you can get the list of privileges associated to the session using the [`getPrivileges()`](../qodlyScript/SessionClass.md#getprivileges) function, or store user information in the session's [`storage`](../qodlyScript/SessionClass.md#storage) property. 
