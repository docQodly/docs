---
id: dataClassPermissions
title: DataClass Permissions
---

<br/>

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

### Hierarchy and Overrides 

While higher-level permissions cascade down to more specific levels, they remain adaptable. These permissions can be overridden or supplemented as required, affording a dynamic approach to access control.


### Setting DataClass Permissions 

**DataClass**-level permissions hold the power to override those set at the **DataStore** level. Take, for instance, sensitive Dataclasses like `Employee`, efficiently managed through the `Restricted` privilege by:

1. Selecting the resource name, like the `Employee` dataclass, from the dropdown list.
2. Typing the resource name, such as `Employee` dataclass, directly into the search bar.

<img alt="explorer" src={require('./img/implementingDataClassPermissions.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

Setting DataClass permissions in the `Restricted` privilege grants the `Guest` privilege the freedom to explore the Datastore while restricting access to confidential resources. 

:::info 
Here, the inheritance of privileges set at the DataStore level ( `Guest` ) is overridden by the `Restricted` privilege.
:::


A similar approach applies to confidential Reporting documents and Bookings. The `ManageReports` privilege is granted total permissions for the Reporting resource, and `ManageBookings` similarly gains full control over the Booking resource. 

## Model Editor Approach

Using the **Model Editor**, configure Dataclass permissions by linking privileges to permissions like `create`, `read`, `update`, and `delete`. This interface empowers control over entity operations within specific **Dataclasses**. 

Permissions management for the **Dataclasses** becomes straightforward through the Model Editor's streamlined dropdown selection, allowing easy allocation of desired privileges.

<img alt="explorer" src={require('./img/ModelEditor_dataclassPermissions.png').default} style={{borderRadius: '6px'}} />


