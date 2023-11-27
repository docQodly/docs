---
id: dataClassPermissions
title: DataClass Permissions
---

import Column from '@site/src/components/Column'

With the presence of the `Guest` privilege, which grants read access to the entire **Datastore**, users without assigned roles have unrestricted access to resources. This emphasizes the necessity of refining the scope of this privilege, a process that includes adjusting **Dataclasses** permissions.

:::info
Agents whose sessions haven't been verified should encounter an error, prompting them to contact their admin to finalize the setup of their account.
:::
 
## Understanding DataClass Permissions 

**DataClass** Permissions empower you with the ability to shape and control access to specific **DataClasses** within your **Datastore**. These permissions dictate what actions and interactions users are allowed to perform on individual **DataClasses**.



##  Implementing DataClass Permissions 

Expanding on the [second solution](datastorePermissions#2nd-solution-full-access-to-gradual-restriction), which begins by providing the `Guest` privilege with initial read access to the whole **Datastore** before progressively limiting access to other ressources. This is achieved through **DataClass permissions**, which involve excluding the `Guest` privilege from specific **Dataclasses**, preventing access to designated resources.

### Inherited Permissions 

Permissions of the `Guest` privilege are automatically inherited across various privileges. This parallels the behavior observed in the `Restricted` privilege, where the capability of reading from the Datastore is evident.

<img alt="explorer" src={require('./img/inheritedPermissions.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

The <img alt="explorer" src={require('./img/inherit.png').default} style={{borderRadius: '6px', width:'2%'}} /> icon indicates that the permission is inherited, granting access to the resource. However, when you remove this privilege, the inherited permissions also vanish from the privilege that was receiving them.


:::tip
You can retain the inherited permission by checking the checkbox <img alt="explorer" src={require('./img/check.png').default} style={{borderRadius: '6px', width:'2%'}} />, ensuring that even if the originating privilege is deleted, the permission set on the resource remains intact.
:::

### Setting DataClass Permissions 

**DataClass**-level permissions hold the power to override or supplement those set at the **DataStore** level. To set DataClass permissions:

- Choose the resource name, like the `Employee` dataclass, from the dropdown list.
- Alternatively, type the resource name, such as `Employee` dataclass, directly into the search bar.

### Hierarchy and Overrides 

While **Datastore** permissions cascade down to more specific **Dataclasses** levels, they retain flexibility. These permissions can be overridden or supplemented as needed, offering a dynamic approach to access control.

<img alt="explorer" src={require('./img/overridding.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

Setting DataClass permissions in the `Restricted` privilege grants the `Guest` privilege the freedom to explore the Datastore while restricting access to confidential resources. 

:::info 
Here, the inheritance of privileges set at the DataStore level ( `Guest` ) is overridden by the `Restricted` privilege. As a result, those with a `Guest` role no longer have access to the `Employee` dataclass.
:::

A similar approach applies to confidential Reporting documents and Bookings. The `ManageReports` privilege is granted total permissions for the `Reporting` resource, and `ManageBookings` similarly gains full control over the `Booking` resource. 

## Model Editor Approach

Using the **Model Editor**, configure Dataclass permissions by linking privileges to permissions like `create`, `read`, `update`, and `delete`. This interface empowers control over entity operations within specific **Dataclasses**. 

Permissions management for the **Dataclasses** becomes straightforward through the Model Editor's streamlined dropdown selection, allowing easy allocation of desired privileges.

<img alt="explorer" src={require('./img/ModelEditor_dataclassPermissions.png').default} style={{borderRadius: '6px'}} />


