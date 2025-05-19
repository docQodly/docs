---
id: permissionsOverview
title: Overview
---

import Column from '@site/src/components/Column'

In managing access control within your application, understanding the hierarchy and how permissions can override one another is crucial. Permissions can be set at various levels—**Datastore**, **DataClass**, and **Attribute**—each with the ability to override or supplement permissions set at higher levels. This hierarchical structure allows for granular control over user access to resources.


## Permissions

### Permission Types

Permissions define essential actions on resources, covering tasks such as creation, reading, updating, deletion, description, execution (for functions), and promotion (also for functions).

| Permission | Datastore | Dataclass | Attribute | Function |
|------------|-----------|-----------|-----------|----------|
| Create | Create an Entity in any Dataclass. | Create a new Entity in the chosen Dataclass. | Create a new Entity with a value different from the default allowed for the chosen Attribute. | n/a |
| Read | Read Attributes in any Dataclass. | Read attributes in the chosen Dataclass. | Read the content of the chosen Attribute. | n/a |
| Update | Update Attributes in any Dataclass. | Update attributes in the chosen Dataclass. | Update the content of the chosen Attribute. | n/a |
| Delete | Delete data throughout the Model. | Delete data in the chosen Dataclass. | Delete a non-null value for the chosen Attribute. | n/a |
| Describe | Provides metadata access throughout the Model. | Provides metadata access for the chosen Dataclass. | Provides metadata access for the selected Attribute. | Provides metadata access for the chosen Dataclass function. |
| Execute | Execute all functions throughout the Model, including DataStore, Dataclasses, Entity selections, and Entities. | Execute any function on the chosen dataclass (Dataclass functions, entity functions, and entity selection functions). | n/a | Execute the selected function. |
| Promote    | n/a | n/a | n/a | Temporarily adds a specific privilege to the session during function execution, primarily for secure privilege escalation. |

### How to Assign Permissions

Permissions for specific resources—such as Datastore, DataClass, and Attribute—are easily set by checking the corresponding boxes in the permissions grid. Each permission (such as Read, Create, Update, Delete, Describe, Execute, and Promote) can be granted by selecting the checkbox under the relevant column for each resource.

<img src={require('./img/Permissions.png').default} style={{borderRadius: '6px'}} />


## Inheritance

### General Principle

The permissions hierarchy is structured as follows:

1. **Datastore Level**: This is the broadest level of permissions. Permissions set at the datastore level apply to all resources within the datastore unless specifically overridden at a lower level.

2. **DataClass Level**: Permissions set at the DataClass level apply to all attributes and functions within that DataClass. These permissions can override or supplement those set at the datastore level for that specific DataClass.

3. **Attribute Level**: This is the most granular level. Permissions set at the attribute level apply to individual attributes within a DataClass. These permissions can override or supplement those set at both the datastore and DataClass levels for that specific attribute.


### Inheritance Flow

Permissions set at a higher level are automatically inherited by lower levels unless explicitly modified. This means:

- **DataClass-level permissions inherit from datastore permissions** for that DataClass and its attributes.
- **Attribute-level permissions inherit from both datastore and DataClass permissions** for that attribute.

:::info Example: Inheritance from Datastore to DataClass**

- **Scenario**: The datastore grants `Read` permission to all users.

- **Result**: All DataClasses and their attributes inherit the `Read` permission, allowing users to read data from any DataClass unless overridden.
:::

If you don't set specific permissions at a lower level, the resource will inherit the permissions from the higher level.

### Show/Hide Inherited Permissions

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        When managing permissions, you can toggle between showing and hiding inherited permissions. By default, inherited permissions are visible, allowing you to see which permissions a privilege has inherited from other privileges for a resource. You can toggle off this option to hide any inherited permissions and focus only on permissions explicitly defined within the current privilege.
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/showInheritedPermissions.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

- **Enabled**: Displays all permissions defined for resources, including those inherited from other privileges.

- **Disabled**: Hides inherited permissions defined for resources. If a resource's permissions are entirely inherited and no explicit permissions are defined in the current privilege, the entire resource row will be hidden. If an explicit permission exists (e.g., Describe) for a resource, only the inherited permissions (e.g., Create) are unchecked while the resource row remains visible.

## Overrides

### General Principle

While permissions inherit from higher levels, you can override them at more specific levels. This means:

- **Attribute-level permissions can override DataClass and datastore permissions for that attribute.**
- **DataClass-level permissions can override datastore permissions for that DataClass and its attributes.**

Overrides allow you to refine access control by setting exceptions to the inherited permissions.

### Overrides Flow

- **Override at DataClass Level**: If you need a DataClass to have different permissions from the datastore defaults, you can set permissions specifically for that DataClass.

- **Override at Attribute Level**: For individual attributes that require different permissions from their DataClass, you can set permissions specifically for those attributes.

:::info Example: Overriding Datastore Permissions at the DataClass Level
- **Scenario**: You want to restrict access to the `Employee` DataClass, despite the datastore granting `Read` permission.

- **Action**: At the DataClass level for `Employee`, remove the `Read` permission.

- **Result**: Users cannot read data from the `Employee` DataClass, even though the datastore allows reading from other DataClasses.

:::