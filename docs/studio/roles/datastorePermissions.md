---
id: datastorePermissions
title: Datastore Permissions
hide_title: true
---


## Understanding Datastore Permissions

Datastore permissions play a pivotal role in controlling access to the entirety of your website's Datastore. These permissions act as sentinels, guarding your website's Datastore, which encompasses all Dataclasses and Entities. The strategic establishment of these permissions at the Datastore level assumes paramount importance, as it serves as the first line of defense against unauthorized entry and unauthorized alterations to mission-critical data. 

---

## Risk of Unrestricted Access

However, when these permissions are not thoughtfully set up, your application operates under the specter of unregulated access. In this unsettling scenario, every user enjoys unregulated access to all resources within the Datastore, which, unfortunately, brings with it inherent risks. 

To highlight this vulnerability, let's illustrate it practically: Imagine yourself as an unauthorized user without profile verification. Should you attempt an HTTP request to the REST API endpoint corresponding to the `User` Dataclass, you will promptly grasp the substantial threat of unchecked data access. This scenario grants you the ability to execute various actions at will, including accessing confidential information of users, a risk that extends uniformly to all other Dataclasses.

<img alt="explorer" src={require('./img/unrestrictedAccess.png').default} style={{borderRadius: '6px'}} />

---

## Achieving Utmost Access Control

In response to the potential risks posed by unrestricted access, Qodly offers a robust remedy – a strategy underpinned by controlled and fortified data interactions. This approach, known as "All Data Inaccessible by Default", shifts the paradigm to a more proactive and vigilant stance, mitigating the inherent vulnerabilities of unregulated access.

### <u> Introducing Restricted Privilege </u> 

At the core of the Datastore Lockdown strategy lies the concept of the `Restricted` privilege. This privilege operates as a safeguarding mechanism. It restricts all actions on the Datastore, thereby rendering it inaccessible until specific permissions are meticulously set up. This ensures that users, even those without explicitly defined roles or privileges, are unable to access any resources within the Datastore.

### <u> Setting Datastore Permissions </u> 

With the `Restricted` privilege created, as shown in the [**Roles and Privileges**](../roles/rolesPrivilegesOverview.md) section, your next step involves selecting it. You can navigate resources through the intuitive user interface by either choosing `ds` from the dropdown list to signify the Datastore resource or directly typing `ds` into the search bar.

<img alt="explorer" src={require('./img/restrictedPrivilege.png').default} style={{borderRadius: '6px'}} />

Setting permissions to the Datastore itself entails associating comprehensive permissions, ranging from `Read` to `Execute`. By setting all permissions for the `ds` ressource and not associating this privilege with any role, the Datastore is protected against malicious access attempts. This safeguarding mechanism effectively transforms the website into a trove, living up to its name. 

Attempting to access the same REST API Endpoints will result in a "No permission to read for the User dataclass" response, a rule that extends across all Dataclasses.

<img alt="explorer" src={require('./img/restrictedAccess.png').default} style={{borderRadius: '6px'}} />


---

## Guest Privilege: A Balancing Act

While the pursuit of utmost access control is a foundational goal, there arise situations demanding an alternative strategy – one attuned to unconnected users or visitors and fleeting interactions. That's when the concept of the `Guest` privilege emerges, a central figure in the path toward all-encompassing data access control, skillfully poised to navigate this nuanced equilibrium.

### <u> Introducing the Guest Privilege </u> 

When a role lacks specific privileges, Qodly seamlessly bestows the `Guest` privilege upon that `Session`. It allows users lacking defined privileges to engage in controlled actions, such as accessing non-restricted resources, while curbing their ability to partake in potentially harmful activities involving other resources. This measured and cautious approach ensures that users interact with your application within well-defined boundaries.

:::info

The `Guest` privilege grants access to all resources if no explicit permissions are in place.

:::

### <u> Configuring the Guest Privilege </u> 

It's worth noting that the groundwork for such interactions is already laid within the `Privileges` tab. Here, the `Guest` privilege comes into existence as a default presence, ready to extend a welcoming hand to those sojourners who grace your digital corridors without without yet having established a formal identity.

<img alt="explorer" src={require('./img/guestPrivilege.png').default} style={{borderRadius: '6px'}} />

### <u> Guest Privilege Read Access </u> 

To grant the read access to the `Guest` privilege, a deliberate transition is required. This procedure entails relinquishing complete permissions control over the Datastore from the `Restricted` privilege. Subsequently, the focus shifts to specifically assigning the read permission to the Datastore, thereby endowing the `Guest` privilege with the sole capability of read access.

<img alt="explorer" src={require('./img/readAccessGuestPrivilege.png').default} style={{borderRadius: '6px'}} />

Through this transition, you bestow the `Guest` privilege with the ability for informed discovery, enabling access to a wealth of data, including details about flights, hotels, activities, and more, all while ensuring that critical information remains safeguarded against unauthorized modifications. 

<img alt="explorer" src={require('./img/packages.png').default} style={{borderRadius: '6px'}} />


<br/><br/>

:::danger 
However, it's essential to acknowledge that not all data should be made accessible to unconnected users. Sensitive User data, confidential Reporting documents, and other private information must remain restricted.
:::

To navigate this intricate balance between data accessibility and security, we turn our attention to the next crucial step: utilizing [**DataClass Permissions**](../roles/dataClassPermissions.md) to selectively shape and control access to specific sets of data.

---

## Model Editor Approach

Using the Model Editor, effortlessly configure Datastore permissions by linking privileges to permissions like "create", "read", "update", and "delete". This interface empowers control over operations within the Datastore. Permissions management for the Datastore becomes straightforward through the Model Editor's streamlined dropdown selection, allowing easy allocation of desired privileges.

<img alt="explorer" src={require('./img/ModelEditor_datastorePermissions.png').default} style={{borderRadius: '6px'}} />
