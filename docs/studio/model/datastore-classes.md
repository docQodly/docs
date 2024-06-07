---
id: datastore-classes
title: Datastore Classes
---

The datastore class is a type of structure that can contain attributes and relation attributes (links between datastore classes) in order to conceptually describe its data and how they all interact with each other as well as functions to interact with the data in your model.

![alt-text](img/dataclass1.png)

Once you create a datastore class, you can add [attributes](attributes.md) and functions to it.

All datastores classes are automatically listed in the [Outline](model-editor-interface.md#outline) area.

## Handling datastore classes

### Create a datastore class

To add a new datastore class, follow these steps:

1. Click on the **+** button in the [Outline area](model-editor-interface.md#outline).

   ![alt-text](img/dataclass2.png)

2. Enter the name of the new data class, adhering to the general [naming rules](../../language/basics/lang-identifiers.md#classes).

The datastore class is created and displayed in the model area with its ID attribute. You can start adding [attributes](attributes.md) to it.

### Delete a datastore class

To delete a datastore class and all its attributes:

- Click on the ![alt-text](img/deletedatastoreclass-icon.png) icon in the title bar of the data class or in the [Outline area](model-editor-interface.md#outline).

:::info

Removing a dataclass from the model does not remove its associated functions.

:::

### Rename a datastore class

To rename a datastore class:

1. Double-click on the datastore class name in the title bar to make it editable, or select the datastore class and, in the Properties area, click on the **Edit** button (pencil icon) in the right side of the [Class name area](#class-name).
2. Type in the new name and press **Enter** key (title bar) or **Confirm** button (Property area) to validate the change.

:::info

When you rename a datastore class, Qodly Studio renames automatically the [Data Model classes](../../orda/data-model.md) associated to the dataclass. For example, if you rename "Emp" to "Employee", the associated "Emp", "EmpEntity", and "EmpSelection" classes will be renamed respectively "Employee", "EmployeeEntity", and "EmployeeSelection". Note that the entity selection class can be [renamed separately in the Properties](#selection-name).

:::

## Datastore Class Properties

In the Properties tab, you can modify the properties of the selected datastore class:

![alt-text](img/datastoreclass-properties.png)

### Panel color

Defines the color of the datastore class title area. You can click in the color selector or enter a value in the color area.

### Primary key

Defines one of the attributes as the primary key attribute for the datastore class. By default, each datastore class is created with an `ID` attribute as the primary key, having the **Mandatory**, **Autosequence** and **Unique** properties checked as well as the Index kind set to Autoamtic by default. In the datastore class’s panel, the attribute defined as the primary key is bold and underlined with a key icon next to it.

To change the primary key, you can select an attribute in the Primary Key drop-down menu. Only the attributes with valid types (Long, Number, String, or UUID) are displayed in the drop-down menu.

### Class name

Datastore class name. Allows you to [rename the datastore class](#rename-a-datastore-class) and its [associated model classes](../../orda/data-model.md).

### Selection name

Name of the entity selection for the datastore class. This name is used for the [entity selection class](../../orda/data-model.md) as well as related entity selections in related attributes.

:::info
You can modify the default name of the entity selection , however it will be overriden if you change the Datastore class name afterwards.
:::

### Scope

An exposed dataclass can be used from anywhere and its attribute values can be displayed using REST requests. A not-exposed dataclass can only be used by code called from inside the datastore class, including calculated attributes, functions, methods, and events, executed on the server. Select "Do not expose as REST" for dataclasses that should not be accessed directly, e.g. "Users".

:::info
This property can be selected at the [attribute level](attributes.md#scope), and attributes inherit from this level. An attribute can override the parent dataclass level with "Do not expose as REST" if the parent was exposed; however, it the parent dataclass property is "Do not expose as REST", the attribute cannot override it.
:::

### Page size

Default top page size for REST requests made to the server. The number you specify is the number of entities retrieved per request for the datastore class. If this property is left blank, the default value of 40 is used.

### Records definitely deleted

This option lets you control an optimization for the deletion of a selection of records. When Qodly deletes a selection, the record markers are not deleted by default. A record marker is a header attached to the record that contains information relating to this record. Deleting both markers and records is slower than deleting only records but in certain cases, it may be desirable to delete the record markers.
To delete record markers when deleting a large selection of records, select the **Records definitively deleted** option.

### Include in log file

Check this option in order for operations performed on the table’s data to be included in the database log file (when it is generated). It is important to note that this option only indicates that the table’s data must be journaled if the database uses a log file; it does not enable the journaling procedure itself at the database level.

### Comment

Comments that you can store with your datastore class for private use.

## Permissions

This area allows you to define the permissions at the dataclass level. Permissions can also be set at the datastore and attribute levels.

Dataclass permissions are described in [this section](../roles/dataClassPermissions.md).
