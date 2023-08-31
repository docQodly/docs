---
id: dataClassPermissions
title: DataClass Permissions
---

<br/>

With the presence of the `Guest` privilege, users with no role affected access non-restricted resources such as package details, related information, and destinations. 

However, refining this privilege's scope involves Dataclasses permissions. Agents whose sessions haven't been verified should encounter an error, prompting them to contact their admin to finalize the setup of their account before proceeding with client bookings.

 
## Understanding DataClass Permissions 

DataClass Permissions empower you with the ability to finely shape and control access to specific DataClasses within your application's Datastore. These permissions dictate what actions and interactions users are allowed to perform on individual DataClasses.



##  Implementing DataClass Permissions 

Building upon the previous transition from the `Restricted` to `Guest` privilege with read access extension, careful data exposure management is imperative. Achieved through precise DataClass permissions, this involves excluding the `Guest` privilege from specific Dataclasses, effectively blocking access to designated resources.

### Inherited Permissions 

Permissions of the `Guest` privilege are automatically inherited across various privileges. This parallels the behavior observed in the `Restricted` privilege, where the capability of reading from the Datastore is evident.

<img alt="explorer" src={require('./img/inheritedPermissions.png').default} style={{borderRadius: '6px'}} />

### Setting DataClass Permissions 

DataClass-level permissions possess the power to supersede those set at the DataStore level. Consider the example of sensitive Dataclasses such as Employee, efficiently controlled through the `Restricted` privilege. 

Setting permissions for the Employee resource, added in a manner akin to the intuitive `ds` resource addition from the dropdown list ensures restricted access unless the pertinent role asserts control. Here, the inheritance of privileges set at the DataStore level ( `Guest` ) is overridden by the `Restricted` privilege.

<img alt="explorer" src={require('./img/implementingDataClassPermissions.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

:::info 
Strategically setting DataClass permissions in the `Restricted` privilege grants the `Guest` privilege the freedom to explore the Datastore while restricting access to confidential resources. This controlled approach ensures open discovery while maintaining data security.
:::

A similar approach applies to confidential Reporting documents and Bookings. The `ManageReports` privilege is granted total permissions for the Reporting resource, and `ManageBookings` similarly gains full control over the Booking resource. 


### Hierarchy and Overrides 

While higher-level permissions cascade down to more specific levels, they remain adaptable. These permissions can be overridden or supplemented as required, affording a dynamic approach to access control.



## Model Editor Approach

Using the Model Editor, effortlessly configure Dataclass permissions by linking privileges to permissions like "create", "read", "update", and "delete". This interface empowers control over entity operations within specific Dataclasses. Permissions management for Dataclasses becomes straightforward through the Model Editor's streamlined dropdown selection, allowing easy allocation of desired privileges.

<img alt="explorer" src={require('./img/ModelEditor_dataclassPermissions.png').default} style={{borderRadius: '6px'}} />


