---
id: example-of-configuration
title: Example of configuration 
---
import Column from '@site/src/components/Column'

This section is a tutorial that will show you how to configure roles and privileges for a HealthCare application handling patients and appointments, including confidential data. 

It includes the support of both **public** and **authenticated** [application accesses](../../cloud/resourceMonitoring.md#application-access). 


## Application overview

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

<img src={require('./img/example-startup.png').default} style={{borderRadius: '6px', width:'80%'}} />

The first step in activating safety is to **protect all data** by default. Accesses will then be opened for each resource.  

1. Create a **None** privilege with a granted **Read** action on the Datastore​. 

<img src={require('./img/example-config1.png').default} style={{borderRadius: '6px', width:'100%'}} />

By the inheritance principles, the **whole datastore** is then protected. 

<img src={require('./img/example-none.png').default} style={{borderRadius: '6px', width:'80%'}} />

2. Do **never** assign this privilege to any role, so that the whole datastore will always remain protected by default​. 

### Creating the viewPatient privilege

*Doctor* and *Secretary* roles can read patient's data. 

1. Create the *viewPatient* privilege with a granted **Read** action on the `Patients` dataclass.​ 

<img src={require('./img/example-config2.png').default} style={{borderRadius: '6px', width:'100%'}} />

2. Assign it to the *Doctor* and *Secretary* roles (see [roles](#roles) below).​


<img src={require('./img/example-viewpatient.png').default} style={{borderRadius: '6px', width:'80%'}} />

However, this privilege will give access to all patient data to the *Secretary* role, including by default any confidential. You still need to restrict access to this level of information.  

### Creating the viewConfidentialInfo privilege

Only the *Doctor* role can view the patient's confidential data (gathered in a *confidentialInfo* attribute). 

1. Create the *viewConfidentialInfo* privilege with a granted **Read** action on the `Patients.confidentialInfo` attribute.​ 

<img src={require('./img/example-config4.png').default} style={{borderRadius: '6px', width:'100%'}} />

2. Assign it to the *Doctor* role (see [roles](#roles) below). This will exclude all other roles. ​

<img src={require('./img/example-viewsecretinfo.png').default} style={{borderRadius: '6px', width:'80%'}} />

:::info Why are all other roles excluded?

Once a resource is associated with a privilege, that privilege is required to access the resource, which blocks roles that do not have that privilege. It's like putting a lock on a door: you need to have the key to open it. In this case, we created the *viewConfidentialInfo* privilege and associated it to the `Patients.confidentialInfo` attribute, so it automatically impacts roles that do not have this privilege (i.e., Secretary). 
Usually, when reading entities, if a privilege is missing to read certain attributes, they are excluded (filtered) from the query response.

:::

### Roles

Here are the corresponding role definitions.

#### Secretary

<img src={require('./img/example-config3.png').default} style={{borderRadius: '6px', width:'100%'}} />

#### Doctor

<img src={require('./img/example-config-doctor.png').default} style={{borderRadius: '6px', width:'100%'}} />



## Configuring public access 

By default in new Qodly applications, the public access is **disabled**. The public access is the access granted for public users (like **X**) without any role.

1. [Activate the Public access explicitely](../../cloud/resourceMonitoring.md#3-public-url-development-environment-only) in the console. 


2. Allow the *guest* privilege to read the appointments. 

<img src={require('./img/example-config5.png').default} style={{borderRadius: '6px', width:'100%'}} />

<img src={require('./img/example-guest.png').default} style={{borderRadius: '6px', width:'80%'}} />


By default, **all users, including public users** have the [*guest* privilege](./datastorePermissions.md#introducing-the-guest-privilege). By simply allowing the *guest* privilege to read appointments, we allow all users, registered and not registered, to read the appointments. 

## The final picture

Here is a complete overview of the roles and privileges for our HealthCare application:

<img src={require('./img/example-full.png').default} style={{borderRadius: '6px', width:'80%'}} />


