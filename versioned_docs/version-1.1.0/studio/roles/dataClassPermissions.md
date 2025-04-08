---
id: dataClassPermissions
title: DataClass Permissions
---

import Column from '@site/src/components/Column'


## Purpose and Scope

**DataClass** Permissions empower you to shape and control access to specific DataClasses within your datastore. These permissions dictate what actions users are allowed to perform on individual DataClasses, enabling fine-grained access control over your data.

## Configuring DataClass Permissions 

DataClass-level permissions can override or supplement those set at the datastore level. To set DataClass permissions for a specific privilege:

- Select the resource name, like the `Employee` dataclass, from the dropdown list.
- Or, type the resource name directly into the search bar.

:::info
The <img src={require('./img/dataclass.png').default} style={{borderRadius: '6px', width:'3%'}} /> icon in the dropdown list indicates **DataClass** ressources.
:::

## Example: DataClass-Level Access Control

Building on the approach where the [Guest privilege is granted initial read access to the entire datastore](datastorePermissions.md#2nd-solution-full-access-to-gradual-restriction), you can gradually restrict access to specific resources by configuring **DataClass** permissions. This involves excluding the `Guest` privilege from certain DataClasses.

:::tip
While datastore permissions cascade down to DataClasses, they remain adaptable. DataClass permissions allow you to override or supplement the broader settings as needed.
:::

<img src={require('./img/overriddingDataStore.png').default} style={{borderRadius: '6px'}} />

<br/><br/>

By setting specific permissions in the `Restricted` privilege for the `Employee` DataClass, you prevent users with the `Guest` privilege from accessing sensitive employee data.

:::info 
In this context, the permissions set at the datastore level for the Guest privilege are overridden by the Restricted privilege at the DataClass level. As a result, users with the Guest role no longer have access to the Employee DataClass.
:::