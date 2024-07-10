---
id: dataClassPermissions
title: DataClass Permissions
---

import Column from '@site/src/components/Column'


## Purpose and Scope

**DataClass** Permissions empower you with the ability to shape and control access to specific **DataClasses** within your **Datastore**. These permissions dictate what actions and interactions users are allowed to perform on individual **DataClasses**.


## Configuring DataClass Permissions 

**DataClass**-level permissions hold the power to override or supplement those set at the **DataStore** level. To set **DataClass** permissions for a specific privilige:

- Choose the resource name, like the `Employee` dataclass, from the dropdown list.
- Alternatively, type the resource name, such as `Employee` dataclass, directly into the search bar.

:::info
The <img src={require('./img/dataclass.png').default} style={{borderRadius: '6px', width:'3%'}} /> icon in the dropdown list indicates **DataClass** ressources.
:::

## Hierarchy and Overrides 

Expanding on the [second solution](datastorePermissions#2nd-solution-full-access-to-gradual-restriction), it starts by granting the `Guest` privilege initial read access to the entire **Datastore** before gradually restricting access to other resources through **DataClass** permissions, excluding the `Guest` privilege from specific **Dataclasses**.

While **Datastore** permissions cascade down to more specific **Dataclasses** levels, they remain adaptable, allowing for overrides or supplements as required. 

<img src={require('./img/overriddingDataStore.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

Setting DataClass permissions in the `Restricted` privilege grants the `Guest` privilege the freedom to explore the Datastore while restricting access to confidential resources. 

:::info 
In this context, the permissions set at the DataStore level ( `Guest` ) is overridden by the `Restricted` privilege. As a result, those with a `Guest` role no longer have access to the `Employee` dataclass.
:::

A similar approach applies to confidential Reporting documents and Bookings. The `ManageReports` privilege is granted total permissions for the `Reporting` resource, and `ManageBookings` similarly gains full control over the `Booking` resource. 
