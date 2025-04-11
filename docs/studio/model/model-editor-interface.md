---
id: model-editor-interface
title: Model Editor
---

import Column from '@site/src/components/Column'

## Overview

The Data Model Editor in Qodly enables you to create and modify the **model** for your application. A model describes how data will be accessed and stored in structures called "**datastore classes**".


## Key Features

### ORDA Concepts

In Qodly, each datastore class can have attributes that store or calculate data, or refer to data in other datastore classes (relation attributes). You can also create functions to interact with the data in your model, following the [ORDA concepts](../../orda/data-model.md#the-orda-concept).

### Permissions

The model view includes permissions, allowing you to assign access rights at any level of the model (datastore, dataclass, attributes, and functions).

### Accessing the Model Editor

You can access your current project's model in the **Model Editor** by clicking on the <img src={require('./img/model-icon.png').default} style={{borderRadius: '6px'}} /> in your project's sidebar.

:::note
You can also open your model as a [JSON file](#model-json-representation).
:::

### Default State

By default in blank applications, the model does not contain any default dataclasses; you have to create the datastore classes.


## Model Editor Components

The Data Model Editor is composed of several areas, including a workspace, a toolbar with a contextual menu, a miniature overview area, an outline, and a properties area.


### Workspace

In the workspace, you create a datastore model for your Qodly project. A datastore model is made up of one or more datastore classes containing attributes and functions. You can also create relation attributes, which are links between datastore classes. Below is an example datastore model for a simple structure of employees and companies:

<img src={require('./img/model-example.png').default} style={{borderRadius: '6px'}} />

You can identify the currently selected datastore class by its highlighted border in the workspace. In the example, the Employee datastore class is selected. The panel color of datastore classes can be customized, and you can move a datastore class in the workspace by selecting and dragging it.

### Toolbar

The toolbar at the top of your workspace contains the following buttons:

#### Fit view

Clicking on the on the <img src={require('./img/fitview-icon.png').default} style={{borderRadius: '6px'}} /> icon will fit the entire model into the workspace area.


#### Zoom setting

The **zoom setting** <img src={require('./img/zoom-feature.png').default} style={{borderRadius: '6px'}} /> controls the percentage of zoom in your workspace area. You can also use the mouse wheel to modify the zoom setting.


:::tip
Resizing the view is achievable not only through the "Zoom setting" but also through your trackpad or mouse wheel.
:::

#### Reload

The **Reload** <img src={require('./img/reloadmodel-icon.png').default} style={{borderRadius: '6px'}} /> button in the model tab's contextual menu reloads the model definition from the server. This is useful when you modify model functions or properties in different browser windows.


## Miniature Overview Area

The Miniature Overview Area allows you to view an overview of your model at a smaller scale. This feature is especially useful when you have a large number of datastore classes and want to quickly visualize them.

<img src={require('./img/miniature-overview-area.png').default} style={{borderRadius: '6px'}} />

## Outline

The Outline panel in the model editor provides a structured view of all datastore classes, datastore functions, and singletons. This panel is designed to facilitate navigation and management of the model's components.

### Search Functionality

<Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
    The Outline includes a search bar that allows filtering of datastore classes, attributes, and functions by entering keywords. 
    <br/>
    This functionality is particularly useful for large and complex models.
  </Column.Item>
  <Column.Item width="30%">
    <img src={require('./img/search.png').default} style={{borderRadius: '6px'}} />
  </Column.Item>
</Column.List>


### Datastore Classes and Attributes

<Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
    Datastore classes represent the entities in the model and are listed in the Outline. Attributes of each class can be expanded to display their details, including data types such as text, date, and image. Attributes are visually distinct with icons indicating their respective data types.
  </Column.Item>
  <Column.Item width="30%">
    <img src={require('./img/attributeExpand.png').default} style={{borderRadius: '6px'}} />
  </Column.Item>
</Column.List>

<br/>

Datastore classes can also be added directly from the Outline by clicking the Add Dataclass button: <img src={require('./img/outline_addDataclass.png').default} style={{borderRadius: '6px', width: '25%'}} />

Each datastore class in the Outline offers the following actions: <img src={require('./img/outline_optionsDataclass.png').default} style={{borderRadius: '6px', width: '25%'}} />

- <img src={require('./img/fitview-icon.png').default} style={{borderRadius: '6px'}} /> Fit to View: Displays a fitted view of the selected datastore class in the workspace.

- <img src={require('./img/importfromcvs-icon.png').default} style={{borderRadius: '6px'}} /> Import from CSV: Allows importing data from a CSV file into the datastore class. Refer to the [data import documentation](./import.md) for more details.

- <img src={require('./img/deletedatastoreclass-icon.png').default} style={{borderRadius: '6px'}} /> Remove: Deletes the datastore class from the project. Note that removing a datastore class does not delete its associated functions.

:::info
Removing a dataclass from the model does not remove its associated functions.
:::

### Datastore Functions

The Datastore Functions section lists all functions defined at the [cs.DataStore](../../orda/data-model.md#datastore) class level. These functions can be managed directly from the Outline panel.

Functions can be opened and edited by clicking on the edit icon next to the function name <img src={require('./img/outline_editDatastoreFunction.png').default} style={{borderRadius: '6px', width: '25%'}} />. New functions can be added by clicking the Add Function button <img src={require('./img/outline_addDatastoreFunction.png').default} style={{borderRadius: '6px', width: '25%'}} />.


### Singletons

Singletons represent unique instances within the model. These instances are listed in the Outline with associated functions, providing a centralized location for their management.

:::tip
Only singleton classes with at least one exposed function are visible. New singletons can also be added to the model.
:::

New singletons can also be added directly from the Outline by clicking the `+` button next to the Singleton section header <img src={require('./img/outline_addSingleton.png').default} style={{borderRadius: '6px', width: '25%'}} />.

Singletons can be expanded to reveal their associated functions. These functions can be edited by clicking on the edit icon <img src={require('./img/outline_editSingletonFunction.png').default} style={{borderRadius: '6px', width: '25%'}} />, and new functions can be added by clicking on the Add Function button <img src={require('./img/outline_addSingletonFunction.png').default} style={{borderRadius: '6px', width: '25%'}} />.


## Properties Area

The Properties area displays the properties for the selected element: [datastore class](datastore-classes.md#datastore-class-properties), [attribute](attributes.md#properties), or [function](functions.md#permissions).


## Model JSON Representation

In Qodly Studio, the model possesses a JSON representation that is useful for troubleshooting or copying/pasting selected parts.

<Column.List align="center" justifyContent="between">
<Column.Item width="50%">
This representation can be accessed through a text editor by selecting the <code>Model</code> in the <code>Explorer</code> and choosing <code>Open With</code> a <code>Text Editor</code>.
</Column.Item>
<Column.Item width="45%">
<img alt="json" src={require('./img/openastext.png').default} style={{borderRadius: '6px'}} />
</Column.Item>
</Column.List>


### Dissection

The model is opened in JSON format in the text editor:

<img src={require('./img/code-view.png').default} style={{borderRadius: '6px'}} />

In this JSON structure:

- **toJSON**: Indicates whether the JSON representation is enabled (true) or not (false). When set to true, the model can be serialized to JSON.

- **extraProperties** : Contains additional properties not part of the primary model structure, such as viewport properties like zoom level and coordinates.

<ul>
    <li><strong>dataClasses</strong> : An array containing definitions for each data class in the model. Each data class definition includes:</li>
    <ul>
        <li><code>name</code> : The display name of the data class.</li>
        <li><code>className</code> : The actual class name used internally.</li>
        <li><code>collectionName</code> : The name of the collection associated with this data class.</li>
        <li><code>scope</code> : The visibility scope of the data class (<code>public</code>, <code>private</code>, etc.).</li>
        <li><code>attributes</code> : An array containing detailed definitions of each attribute of the data class.</li>
        <li><code>extraProperties</code> : Additional properties specific to this data class, such as position and panel color for visualization purposes.</li>
    </ul> 
    <br/>
    <li><strong>attributes</strong>: Within the <strong>attributes</strong> array, each attribute definition includes:</li>
    <ul>
        <li><code>name</code> : The name of the attribute.</li>
        <li><code>kind</code> : The kind of attribute (<code>storage</code>, <code>relatedEntity</code>, etc.).</li>
        <li><code>type</code> : The data type of the attribute (<code>long</code>, <code>string</code>, <code>date</code>, etc.).</li>
        <li><code>scope</code> : The visibility scope of the attribute (<code>public</code>, <code>private</code>, etc.).</li>
        <li><code>indexKind</code> : The index type for the attribute (<code>auto</code>, <code>manual</code>, etc.).</li>
        <li><code>unique</code> : Indicates whether the attribute values must be unique (<code>true</code> or <code>false</code>).</li>
        <li><code>not_null</code> : Indicates whether the attribute values cannot be null (<code>true</code> or <code>false</code>).</li>
        <li><code>autosequence</code> : Indicates whether the attribute should auto-increment (<code>true</code> or <code>false</code>).</li>
        <li><code>primKey</code> : Indicates whether the attribute is the primary key (<code>true</code> or <code>false</code>).</li>
    </ul>
</ul>

### Syntax Check

The syntax check feature identifies and corrects syntax errors and formatting issues within the JSON representation. Errors are highlighted and accompanied by descriptive messages that help pinpoint the exact problem. Below are some common examples of syntax errors that can be detected:

<Column.List align="end" justifyContent="between">
    <Column.Item width="60%">
      - <strong>Expected comma</strong>: This error typically occurs when a comma <code>,</code> is absent between key-value pairs in an object or elements in an array.
    </Column.Item>
    <Column.Item width="30%">
      <img src={require('./img/syntaxCheck_comma.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
  </Column.List>
<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
      - <strong>Expected closing brace</strong>: This error occurs when the parser anticipates a closing curly brace <code>}</code> to conclude an object but does not find it.
    </Column.Item>
    <Column.Item width="30%">
      <img src={require('./img/syntaxCheck_brace.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
  </Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
      - <strong>Value expected</strong>: This error arises when an object key is succeeded by a colon, but the corresponding value is missing, indicating an incomplete JSON representation.
    </Column.Item>
    <Column.Item width="30%">
      <img src={require('./img/syntaxCheck_value.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
  </Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
      - <strong>Colon expected</strong>: This error suggests that a colon <code>:</code> is required to separate the key and value in an object, but it is missing from the code.
    </Column.Item>
    <Column.Item width="30%">
      <img src={require('./img/syntaxCheck_colon.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
  </Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
      - <strong>Unexpected end of string json</strong>: This error is triggered when the parser encounters the end of a string without coming across a closing double quote <code>"</code>, indicating an unfinished string value or when the opening double quote is missing at the beginning of the string.
    </Column.Item>
    <Column.Item width="30%">
      <img src={require('./img/syntaxCheck_string.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
  </Column.List>

:::warning

Editing the model through the JSON code must be done with care since data model integrity rules are not checked in the Text Editor. In particular, you must pay attention to [naming rules](attributes.md#attribute-name), or [renaming issues](datastore-classes.md#renaming-a-datastore-class).

:::
