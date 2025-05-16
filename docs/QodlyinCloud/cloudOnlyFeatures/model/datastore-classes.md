---
id: datastore-classes
title: Datastore Classes
---

The datastore class is a specialized structure designed to encapsulate both attributes and relational attributes, effectively modeling the data and its interactions within the system. Additionally, it provides functions for data manipulation within your model.

<img src={require('./img/dataclass1.png').default} style={{borderRadius: '6px'}} />


:::info
Once a datastore class is created, you can add [attributes](attributes.md) and functions to it.

All datastores classes are automatically listed in the [Outline](model-editor-interface.md#outline) area.
:::


## Handling Datastore Classes

### Creating a Datastore Class

To create a new datastore class, follow these steps:

1. Click on the **+** button in the [Outline area](model-editor-interface.md#outline).

   <img src={require('./img/dataclass2.png').default} style={{borderRadius: '6px'}} />

2. Enter the name of the new data class, adhering to the general [naming rules](../../qodlyScript/basics/lang-identifiers.md#classes).

The datastore class is now created and displayed in the model area with its ID attribute. You can proceed to add [attributes](attributes.md) to it.


### Deleting a Datastore Class

To delete a datastore class and all its attributes:

- Click on the <img src={require('./img/deletedatastoreclass-icon.png').default} style={{borderRadius: '6px'}} /> icon in the title bar of the data class or in the [Outline area](model-editor-interface.md#outline).

:::info

Removing a dataclass from the model does not remove its associated functions.

:::

### Renaming a Datastore Class

To rename a datastore class:

1. Double-click on the datastore class name in the title bar to make it editable, or select the datastore class and, in the Properties area, click on the **Edit** button (pencil icon) in the right side of the [Class name area](#class-name).

2. Enter the new name and press **Enter** key (title bar) or the **Confirm** button (Property area) to apply the change.

:::info

When you rename a datastore class, Qodly Studio automatically renames the associated [Data Model classes](../../../QodlyinCloud/qodlyScript/guides/data-model.md). For instance, renaming "Emp" to "Employee" will result in "Emp", "EmpEntity", and "EmpSelection" being renamed to "Employee", "EmployeeEntity", and "EmployeeSelection" respectively. Note that the entity selection class can be [renamed separately in the Properties](#selection-name).

:::

## Datastore Class Properties

In the Properties tab, you can modify the selected datastore class's properties:

<img src={require('./img/datastoreclass-properties.png').default} style={{borderRadius: '6px'}} />

### Panel Color

Defines the color of the datastore class title area. You can click in the color selector or enter a value in the color area.

### Primary Key

Defines an attributes as the primary key for the datastore class. By default, each datastore class is created with an `ID` attribute as the primary key, with the **Mandatory**, **Autosequence** and **Unique** properties checked and the Index kind set to Autoamtic. The primary key attribute is bold and underlined with a key icon in the datastore class panel.

:::tip
To change the primary key, select an attribute from the Primary Key drop-down menu. Only the attributes with valid types (Long, Number, String, or UUID) are displayed in the drop-down menu.
:::

### Class Name

The name of the datastore class, which allows you to [rename the datastore class](#renaming-a-datastore-class) and its [associated model classes](../../../QodlyinCloud/qodlyScript/guides/data-model.md).


### Selection Name

The name of the entity selection for the datastore class, used for the [entity selection class](../../../QodlyinCloud/qodlyScript/guides/data-model.md) and related entity selections in relational attributes.

:::info
You can modify the default name of the entity selection , but it will be overriden if you change the Datastore class name afterwards.
:::

### Scope

Specifies whether the dataclass is exposed for external access via REST requests. An exposed datastore class can be accessed from anywhere, whereas a not-exposed datastore class can only be used internally, including calculated attributes, functions, methods, and events executed on the server. Select "Do not expose as REST" for dataclasses that should not be accessed directly, such as "Users".


:::tip
This property can also be set at the [attribute level](attributes.md#overview), and attributes inherit this property from their parent datastore class. An attribute can override this with "Do not expose as REST" if the parent is exposed, but cannot do so if the parent is not exposed.
:::

### Page size

Defines the default number of entities retrieved per request for REST requests made to the server. . If left blank, the default value of 40 is used.

### Records definitely deleted

Controls an optimization for deleting a selection of records. By default, Qodly deletes record markers rather than the records themselves, which is faster. 

:::tip
A record marker is a header attached to the record that contains information relating to this record. Deleting both markers and records is slower than deleting only records but in certain cases, it may be desirable to delete the record markers.
:::

To do this, select the **Records definitively deleted** option.

### Include in log file

Enables operations performed on the table’s data to be included in the database log file (when it is generated). 

:::note
This option only indicates that the table’s data must be journaled if the database uses a log file; it does not enable journaling itself at the database level.
:::

### Comment

Allows you to store comments with your datastore class for private use.

## Permissions

Defines the permissions at the dataclass level. Permissions can also be set at the datastore and attribute levels.

Dataclass permissions are described in [this section](../roles/dataClassPermissions.md).
