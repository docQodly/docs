---
id: datastorePermissions
title: Datastore Permissions
---

import Column from '@site/src/components/Column'   

## Purpose and Scope

**Datastore** permissions are crucial for controlling access to your entire **Datastore**. By configuring these permissions, you establish a primary defense mechanism against unauthorized access and alterations to critical mission data.

## Risk of Unrestricted Access

Without proper setup, your application faces the risk of unregulated access. In this scenario, every user gains unrestricted access to all **Datastore** resources, posing inherent risks.

To illustrate, envision an unauthorized user attempting an HTTP request to the `Package` Dataclass REST API endpoint. This unchecked data access allows unauthorized actions, including accessing confidential user information, posing a uniform risk across all Dataclasses.

<img alt="explorer" src={require('./img/unrestrictedAccess.png').default} style={{borderRadius: '6px'}} />

## Configuring Datastore Permissions 

To set **Datastore** permissions for a specific privilige:

- Selecting the resource name, `ds`, from the dropdown list to signify the Datastore resource.
- Typing the resource name, `ds`, directly into the search bar.

:::info
The <img alt="explorer" src={require('./img/datastore.png').default} style={{borderRadius: '6px', width:'3%'}} /> icon in the dropdown list indicates the **Datastore** ressource.
:::

## Max Restriction to Gradual Expansion

To address the risks of unrestricted access, Qodly employs an utmost controlled data interaction strategy called `All Data Inaccessible by Default`. This approach restricts access to the entire **Datastore** by default, gradually expanding access to specific **Dataclasses** through other privileges achieved by applying [Dataclasses Permissions](dataClassPermissions.md).


### Introducing Restricted Privilege  

At the core of the **Datastore** Lockdown strategy lies the concept of the `Restricted` privilege. This privilege operates as a safeguarding mechanism. It restricts all actions on the Datastore, thereby rendering it inaccessible until specific permissions are meticulously set up. 

:::info
This ensures that users, even without defined roles or privileges, cannot access any resources within the **Datastore**.
:::

### Configuring Permissions  

Having established a privilege, like `Restricted`, assigning permissions to the **Datastore** involves a range of permissions, spanning from `Read` to `Execute`.

<img alt="explorer" src={require('./img/restrictedPrivilege.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::info
By applying all permissions to the `ds` resource without tying it to any role, malicious access attempts are stopped. This safeguard transforms the website into a secure vault, true to its name.
:::

Attempting to access the same REST API Endpoints will result in a `No permission to read for the Package dataclass` response, a rule that extends across all Dataclasses.

<img alt="explorer" src={require('./img/restrictedAccess.png').default} style={{borderRadius: '6px'}} />

## Full Access to Gradual Restriction

In the pursuit of strict access control, the `Guest` privilege emerges as an alternative strategy for unauthorized users. This privilege allows full access to the entire **Datastore**, gradually restricting access to specific resources through other privileges achieved by applying [Dataclasses Permissions](dataClassPermissions.md).


### Introducing the Guest Privilege  

When a role lacks specific privileges, Qodly assigns the `Guest` privilege to that `Session`. This allows users without defined privileges to access non-restricted resources while preventing potentially harmful activities with other resources. This ensures users interact within well-defined boundaries.

:::info
The `Guest` privilege grants access to all resources if no explicit permissions are in place.
:::

### Configuring the Guest Privilege  

The `Guest` privilege is established in the `Privileges` tab by default, ready to extend a welcoming hand to users without yet having established a formal identity.

<img alt="explorer" src={require('./img/guestPrivilege.png').default} style={{borderRadius: '6px'}} />

### Configuring Read Access

To grant the read access to the `Guest` privilege, a deliberate transition is required, by:

1. Cease complete permissions control over the Datastore from the `Restricted` privilege. 
2. Subsequently, the focus shifts to specifically assigning the read permission to the Datastore, thereby endowing the `Guest` privilege with the sole capability of read access.

<img alt="explorer" src={require('./img/readAccessGuestPrivilege.png').default} style={{borderRadius: '6px'}} />

Through this transition, you bestow the `Guest` privilege with the ability for informed discovery, enabling access to a wealth of data, including details about flights, hotels, activities, and more, all while ensuring that critical information remains safeguarded against unauthorized modifications. 

<img alt="explorer" src={require('./img/packages.png').default} style={{borderRadius: '6px'}} />


<br/><br/>

:::danger 
However, it's essential to acknowledge that not all data should be made accessible to users. Sensitive User data, confidential Reporting documents, and other private information must remain restricted.
:::

To navigate this intricate balance between data accessibility and security, we turn our attention to the next crucial step: utilizing [**DataClass Permissions**](../roles/dataClassPermissions.md) to selectively shape and control access to specific sets of data.


## Permission Management

### Inherited Permissions 

Permissions of the `Guest` privilege are automatically inherited across various privileges. This parallels the behavior observed in the `Restricted` privilege, where the capability of reading from the **Datastore** is evident.

<img alt="explorer" src={require('./img/inheritedPermissions.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

The <img alt="explorer" src={require('./img/inherit.png').default} style={{borderRadius: '6px', width:'2%'}} /> icon indicates that the permission is inherited, granting access to the resource. However, when you remove this privilege, the inherited permissions also vanish from the privilege that was receiving them.


:::tip
You can retain the inherited permission by checking the checkbox <img alt="explorer" src={require('./img/check.png').default} style={{borderRadius: '6px', width:'2%'}} />, ensuring that even if the originating privilege is deleted, the permission set on the resource remains intact.
:::

### Supplementing Permissions 

**Datastore** permissions maintain adaptability, allowing for supplementation as necessary.

<img alt="explorer" src={require('./img/supplementing.png').default} style={{borderRadius: '6px'}} />

Augmenting **Datastore** permissions within the `ManageContent` privilege provides the `Guest` privilege with the freedom to have read access to the entire **Datastore**. However, it restricts editing, updating, and creating access to specific users who have the `ManageContent` privilege.

## Model Editor Approach

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        In the <strong>Model Editor</strong>, link privileges to permissions (e.g., Create, Read, Update, Delete, Describe, and Execute) to configure Datastore permissions. 
        <br/><br/>
        Simply click on the Model for a streamlined dropdown selection to allocate desired privileges.
        <br/><br/>
        Adding permissions is simple — click on the <img alt="explorer" src={require('./img/ModelEditor_addPermission.png').default} style={{borderRadius: '6px', width:'3%'}} /> button in the dropdown list. Conversely, to remove an affected privilege, click on the <img alt="explorer" src={require('./img/ModelEditor_removePermission.png').default} style={{borderRadius: '6px', width:'2%'}} /> button next to the privilege.
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/ModelEditor_datastorePermissions.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::info

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>A purple tag signifies that the privilege is directly linked to that specific permission.</li>
        </ul>
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/purpleTag.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>A dark grey tag suggests control over that permission by an unlinked privilege, reflecting a granularity hierarchy where the permission is governed by a higher-level resource. For instance, allowing read access to the entire Datastore for the Guest privilege would result in the Guest privilege tag being displayed when checking the read permission for all Dataclasses.</li>
        </ul>
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/darkGreyTag.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
            <li>If a privilege is both purple-tagged and accompanied by the <img alt="explorer" src={require('./img/includedTag.png').default} style={{borderRadius: '6px', width:'5%'}} /> icon, it indicates the <a href="includingPrivileges">inclusion of an extra privilege</a>.</li>
            <br/>
            Obtaining permission for that resource requires having one of the additional privileges.
        </ul>
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/purpleTagged&icon.png').default} style={{borderRadius: '6px'}} />
        <br/><br/>
        <img alt="explorer" src={require('./img/privilegeRequired.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::