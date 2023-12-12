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
The <img alt="explorer" src={require('./img/dataclass.png').default} style={{borderRadius: '6px', width:'3%'}} /> icon in the dropdown list indicates **DataClass** ressources.
:::

## Hierarchy and Overrides 

Expanding on the [second solution](datastorePermissions#2nd-solution-full-access-to-gradual-restriction), it starts by granting the `Guest` privilege initial read access to the entire **Datastore** before gradually restricting access to other resources through **DataClass** permissions, excluding the `Guest` privilege from specific **Dataclasses**.

While **Datastore** permissions cascade down to more specific **Dataclasses** levels, they remain adaptable, allowing for overrides or supplements as required. 

<img alt="explorer" src={require('./img/overriddingDataStore.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

Setting DataClass permissions in the `Restricted` privilege grants the `Guest` privilege the freedom to explore the Datastore while restricting access to confidential resources. 

:::info 
In this context, the permissions set at the DataStore level ( `Guest` ) is overridden by the `Restricted` privilege. As a result, those with a `Guest` role no longer have access to the `Employee` dataclass.
:::

A similar approach applies to confidential Reporting documents and Bookings. The `ManageReports` privilege is granted total permissions for the `Reporting` resource, and `ManageBookings` similarly gains full control over the `Booking` resource. 

## Model Editor Approach

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        In the <strong>Model Editor</strong>, link privileges to permissions (e.g., Create, Read, Update, Delete, Describe, and Execute) to configure Dataclass permissions. 
        <br/><br/>
        Simply click on a Dataclass for a streamlined dropdown selection to allocate desired privileges.
        <br/><br/>
        Adding permissions is simple — click on the <img alt="explorer" src={require('./img/ModelEditor_addPermission.png').default} style={{borderRadius: '6px', width:'3%'}} /> button in the dropdown list. Conversely, to remove an affected privilege, click on the <img alt="explorer" src={require('./img/ModelEditor_removePermission.png').default} style={{borderRadius: '6px', width:'2%'}} /> button next to the privilege.
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/ModelEditor_dataclassPermissions.png').default} style={{borderRadius: '6px'}} />
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