---
id: datastorePermissions
title: Datastore Permissions
---

import Column from '@site/src/components/Column'   

## Purpose and Scope

Datastore permissions are essential for controlling access to your entire **Datastore**. By configuring these permissions, you establish a primary defense mechanism against unauthorized access and alterations to critical mission data.

## Risk of Unrestricted Access

Without proper setup, your application is vulnerable to unregulated access. In such scenarios, every user gains unrestricted access to all **datastore resources**, posing significant risks.

To illustrate, imagine an unauthorized user attempting an HTTP request to the **Package dataclass** REST API endpoint. This unchecked data access allows unauthorized actions, including accessing confidential user information, and poses a uniform risk across all dataclasses.

<img src={require('./img/unrestrictedAccess.png').default} style={{borderRadius: '6px'}} />

## Configuring Datastore Permissions 

To set permissions for the datastore:

- Select the resource name `ds`, from the dropdown list to signify the Datastore resource.
- Or, type the resource name `ds`, directly into the search bar.

:::info
The <img src={require('./img/datastore.png').default} style={{borderRadius: '6px', width:'3%'}} /> icon in the dropdown list indicates the **Datastore** ressource.
:::

## Max Restriction to Gradual Expansion

To address the risks of unrestricted access, an approach called `All Data Inaccessible by Default` is employed. This strategy restricts access to the entire datastore by default, gradually expanding access to specific dataclasses through other privileges achieved by applying [Dataclasses Permissions](dataClassPermissions.md).

### Introducing Restricted Privilege  

At the core of the datastore lockdown strategy lies the concept of the `Restricted` privilege. This privilege acts as a safeguard, restricting all actions on the datastore and rendering it inaccessible until specific permissions are meticulously set up.

:::info
This ensures that users, even without defined roles or privileges, cannot access any resources within the datastore.
:::

### Configuring Permissions  

After establishing a privilege like `Restricted`, you assign permissions to the datastore, covering a range of actions from `Read` to `Execute`.

<img src={require('./img/restrictedPrivilege.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::info
By applying all permissions to the `ds` resource within the Restricted privilege and not assigning it to any role, you prevent malicious access attempts. This safeguard transforms the application into a secure vault.
:::

Attempting to access the REST API endpoints will result in a `No permission to read for the Package dataclass` response, a rule that extends across all dataclasses.

<img src={require('./img/restrictedAccess.png').default} style={{borderRadius: '6px'}} />

## Full Access to Gradual Restriction

Alternatively, the `Guest` privilege provides another strategy for managing unauthorized users. This privilege allows full access to the entire datastore by default, with specific resources being restricted through other privileges achieved by applying [Dataclasses Permissions](dataClassPermissions.md).


### Introducing the Guest Privilege  

When a role lacks specific privileges, the `Guest` privilege is assigned to that `Session`. This allows users without defined privileges to access non-restricted resources while preventing potentially harmful activities with other resources, ensuring that users interact within well-defined boundaries.

:::info
The `Guest` privilege grants access to all resources if no explicit permissions are in place.
:::

### Configuring the Guest Privilege  

The `Guest` privilege is established in the `Privileges` tab by default, ready to welcome users who have not yet established a formal identity.

<img src={require('./img/guestPrivilege.png').default} style={{borderRadius: '6px'}} />

### Configuring Read Access

To grant read access to the `Guest` privilege, follow these steps:

1. Remove complete permissions control over the Datastore from the `Restricted` privilege. 
2. Assign the Read permission specifically to the datastore within the `Guest` privilege, thereby endowing it with the capability of read-only access.

<img src={require('./img/readAccessGuestPrivilege.png').default} style={{borderRadius: '6px'}} />

By making this change, the `Guest` privilege now allows users to access a wealth of data, including details about flights, hotels, and activities, while ensuring that critical information remains safeguarded against unauthorized modifications.

<img src={require('./img/packages.png').default} style={{borderRadius: '6px'}} />


<br/><br/>

:::danger 
Not all data should be accessible to users. Sensitive user data, confidential reports, and other private information must remain restricted.
:::

To balance data accessibility and security, the next crucial step is to utilize [**DataClass Permissions**](../roles/dataClassPermissions.md) to selectively control access to specific sets of data.


## Guest Inherited Permission

Permissions of the `Guest` privilege are automatically inherited across various privileges. This parallels the behavior observed in the `Restricted` privilege, where the capability of reading from the **Datastore** is evident.

<img src={require('./img/inheritedPermissions.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

The <img src={require('./img/inherit.png').default} style={{borderRadius: '6px', width:'2%'}} /> icon indicates that the permission is inherited, granting access to the resource. However, when you remove this privilege, the inherited permissions also vanish from the privilege that was receiving them.


:::tip
You can retain the inherited permission by checking the checkbox <img src={require('./img/check.png').default} style={{borderRadius: '6px', width:'2%'}} />, ensuring that even if the originating privilege is deleted, the permission set on the resource remains intact.
:::