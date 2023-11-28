---
id: datastorePermissions
title: Datastore Permissions
---

**Datastore** permissions are crucial for controlling access to your entire **Datastore**, acting as sentinels that guard all **Dataclasses** and **Entities**. Strategically setting these permissions at the **Datastore** level is paramount, serving as the primary defense against unauthorized access and alterations to mission-critical data.

## Risk of Unrestricted Access

Without proper setup, your application faces the risk of unregulated access. In this scenario, every user gains unrestricted access to all **Datastore** resources, posing inherent risks.

To illustrate, envision an unauthorized user attempting an HTTP request to the `Package` Dataclass REST API endpoint. This unchecked data access allows unauthorized actions, including accessing confidential user information, posing a uniform risk across all Dataclasses.

<img alt="explorer" src={require('./img/unrestrictedAccess.png').default} style={{borderRadius: '6px'}} />


## 1st Solution: Max Restriction to Gradual Expansion

To address the risks of unrestricted access, Qodly employs an utmost controlled data interaction strategy called `All Data Inaccessible by Default`. This approach restricts access to the entire **Datastore** by default, gradually expanding access to specific **Dataclasses** through other privileges achieved by applying [Dataclasses Permissions](dataClassPermissions.md).


### Introducing Restricted Privilege  

At the core of the **Datastore** Lockdown strategy lies the concept of the `Restricted` privilege. This privilege operates as a safeguarding mechanism. It restricts all actions on the Datastore, thereby rendering it inaccessible until specific permissions are meticulously set up. 

:::info
This ensures that users, even without defined roles or privileges, cannot access any resources within the **Datastore**.
:::

### Setting Datastore Permissions  

Having established a privilege, like `Restricted`, you can explore resources through the intuitive user interface by:

- Selecting the resource name, like `ds`, from the dropdown list to signify the Datastore resource.
- Typing the resource name, such as `ds`, directly into the search bar.

<img alt="explorer" src={require('./img/restrictedPrivilege.png').default} style={{borderRadius: '6px'}} />

Assigning permissions to the **Datastore** involves comprehensive permissions, ranging from `Read` to `Execute`.

:::info
By applying all permissions to the `ds` resource without tying it to any role, malicious access attempts are stopped. This safeguard transforms the website into a secure vault, true to its name.
:::

Attempting to access the same REST API Endpoints will result in a `No permission to read for the Package dataclass` response, a rule that extends across all Dataclasses.

<img alt="explorer" src={require('./img/restrictedAccess.png').default} style={{borderRadius: '6px'}} />

## 2nd Solution: Full Access to Gradual Restriction

In the pursuit of strict access control, the `Guest` privilege emerges as an alternative strategy for unauthorized users. This privilege allows full access to the entire **Datastore**, gradually restricting access to specific resources through other privileges achieved by applying [Dataclasses Permissions](dataClassPermissions.md).


### Introducing the Guest Privilege  

When a role lacks specific privileges, Qodly assigns the `Guest` privilege to that `Session`. This allows users without defined privileges to access non-restricted resources while preventing potentially harmful activities with other resources. This ensures users interact within well-defined boundaries.

:::info
The `Guest` privilege grants access to all resources if no explicit permissions are in place.
:::

### Configuring the Guest Privilege  

The `Guest` privilege is established in the `Privileges` tab by default, ready to extend a welcoming hand to users without yet having established a formal identity.

<img alt="explorer" src={require('./img/guestPrivilege.png').default} style={{borderRadius: '6px'}} />

### Setting Datastore Read Access Permission

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

Using the **Model Editor**, configure Datastore permissions by linking privileges to permissions like `create`, `read`, `update`, and `delete`. This interface empowers control over operations within the **Datastore**. 

Permissions management for the **Datastore** becomes straightforward through the Model Editor's streamlined dropdown selection, allowing easy allocation of desired privileges.

<img alt="explorer" src={require('./img/ModelEditor_datastorePermissions.png').default} style={{borderRadius: '6px'}} />
