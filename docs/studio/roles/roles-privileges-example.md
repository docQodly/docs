---
id: roles-privileges-example
title: Example
---
import Column from '@site/src/components/Column'

This section shows a detailed example of roles and privileges configuration for a HealthCare application handling patients and appointments, including sensible data. 

It includes the support of both **public** and **authenticated** [application accesses](../../cloud/resourceMonitoring.md#application-access) through their respective endpoints. 


## Presentation of the application

Here are the main characteristics of the HealthCare application.

### Model

The data model contains the following dataclasses:

<img src={require('./img/example-model.png').default} style={{borderRadius: '6px', width:'50%'}} />

:::note

The `AppSettings` dataclass is used only by the administrator to set up application settings, no external access is ever allowed.

:::

### Users

The following personaes are identified, along with their access:

<img src={require('./img/example-personae.png').default} style={{borderRadius: '6px', width:'70%'}} />

**Mary** and **Arthur** are registered as [Qodly users](../../cloud/userAccountManagement.md#users-page) and use the authenticated endpoint. The administrator [assigns them a role in the console](../../cloud/userAccountManagement.md#edit-user-details).​

<img src={require('./img/example-users.png').default} style={{borderRadius: '6px', width:'70%'}} />

Once a Qodly app user is authentified, they can only run the actions allowed for the assigned role (because the privileges assigned to this role have the permissions to run specific actions on some resources). 

**X** will use the public access without any role and will be only able to run actions allowed for the public access.​

:::note

The developer is free to implement an authentication for public users and to assign them a role. This case is not covered here.​

:::


### Actions

In this example, only the **read** action is considered, to simplify the story. However, the exposed principles are the same for other actions (create, update...) ​


### Configuration target

We want to configure the following accesses:

<img src={require('./img/example-target.png').default} style={{borderRadius: '6px', width:'70%'}} />


## Configuring registered users

### Protecting all data

By default in new Qodly applications, **no permissions** are set up, which means that all data are available for any Qodly app registered user (Reminder: public endpoint is disabled by default).​ Thus, the initial configuration is:

<img src={require('./img/example-startup.png').default} style={{borderRadius: '6px', width:'70%'}} />

The first step in activating safety is to **protect all data** by default. Accesses will then be opened for each resource.  

1. Create a **None** privilege with a granted **Read** action on the Datastore​. By the inheritance principles, the **whole datastore** is then protected. 

<img src={require('./img/example-none.png').default} style={{borderRadius: '6px', width:'70%'}} />

2. Do never assign this privilege to any role, so that the whole datastore will always remain protected by default​. 

### Creating the viewPatient privilege

*Doctor* and *Secretary* roles can read patient's data. 

1. Create the *viewPatient* privilege with a granted **Read** action on the `Patients` dataclass.​ 
2. Assign it to the *Doctor* and *Secretary* roles.​

<img src={require('./img/example-viewpatient.png').default} style={{borderRadius: '6px', width:'70%'}} />

However, this privilege will give access to all patient data to the *Secretary* role, including by default any confidential. You still need to restrict access to this level of information.  

### Creating the viewSecretInfo privilege

Only the *Doctor* role can view the patient's confidential data (gathered in a *confidentialInfo* attribute). 

1. Create the *viewSecretInfo* privilege with a granted **Read** action on the `Patients.confidentialInfo` attribute.​ 
2. Assign it to the *Doctor* role (this will exclude all other roles). ​

<img src={require('./img/example-viewsecretinfo.png').default} style={{borderRadius: '6px', width:'70%'}} />

## Configuring public access 

By default in new Qodly applications, the public access is **disabled**. The public access is the access granted for public users  (like **X**) without any role. However, by default, public users have the [*Guest* privilege](./datastorePermissions.md#introducing-the-guest-privilege). 

1. [Activate the Public access explicitely](../../cloud/resourceMonitoring.md#3-public-url-development-environment-only) in the console. 
2. Allow the *guest* privilege to read the appointments. 

<img src={require('./img/example-guest.png').default} style={{borderRadius: '6px', width:'70%'}} />

A a consequence, the *guest* privilege is always present in any role for Qodly app registered users. 

Here is a complete overview of the roles and privileges:

<img src={require('./img/example-full.png').default} style={{borderRadius: '6px', width:'70%'}} />
