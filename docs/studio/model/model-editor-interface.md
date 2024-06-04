---
id: model-editor-interface
title: Model Editor
---

import Column from '@site/src/components/Column'

The Data Model Editor allows you to create and modify the **model** for your application. A model is a description of how data will be accessed and stored into structures called "datastore classes".

In Qodly, following the [ORDA concepts](../../concepts/platform.md#the-orda-concept), in each datastore class, you create attributes that store, calculate data, or refer to data in other datastore classes (relation attributes), as well as functions to interact with the data in your model.

Included in the model view are also the permissions, allowing you to assign access right at any level of the model (datastore, dataclass, attributes and functions).

You access your current project's model in the **Model Editor** by clicking on ![alt-text](img/model-icon.png) in your project's sidebar.

:::note

You can also open your model as a [json file](#json-view).

:::

By default in blank applications, the model does not contain any default dataclasses; you have to create the datastore classes.

The Data Model Editor is made up of several areas, including a workspace, a toolbar with a contextual menu, a miniature overview area, an outline and a properties area.

## Workspace

In the workspace, you create a datastore model for your Qodly project. A datastore model is made up of one or more datastore classes, containing attributes and functions, and you can also create relation attributes which are links between datastore classes. Below is an example datastore model for a simple structure of employees and companies:

![model](img/model-example.png)

You can identify the currently selected datastore class by its highlighted border in the workspace. In our example, the Employee datastore class is selected. Note that the panel color of datastore classes can be customized. You can move a datastore class in the workspace by a select and drag action.

## Toolbar

The toolbar bordering the top of your workspace contains the following buttons:

##### Fit view

- By clicking on the ![alt-text](img/fitview-icon.png) icon, you will get a fitted view of your entire model in the workspace area.

##### Zoom setting

- The **zoom setting** ![alt-text](img/zoom-feature.png) controls the percentage of zoom in your workspace area. Note that you can also use the **mouse wheel** to modify the zoom setting.

:::info
Resizing the view is not achievable through the "Zoom setting" alone but also through your trackpad or mouse wheel.
:::

##### Reload

![alt-text](img/reloadmodel-icon.png)

- The **Reload** command of the model tab contextual menu reloads the model definition from the server. This button is useful when you modify model functions or properties in different browser windows.

## Miniature Overview Area

The Miniature Area allows you to view an overview of your model at a smaller scale. This feature is especially useful when you have a large number of datastore classes and you want to quickly visualize them.

![alt-text](img/miniature-overview-area.png)

## Outline

On the left side of the model editor, the Outline lists all **datastore classes** and **datastore functions** (i.e. functions defined at the [cs.DataStore](../../orda/data-model#datastore) class level) defined in your model:

![alt-text](img/outline.png)

Use the **Search** area to dynamically reduce the list of displayed datastore classes and datastore functions to those that contain the entered character(s).

![alt-text](img/search.png)

You can expand a dataclass name to display its attributes:

![alt-text](img/attributeExpand.png)

You can select the datastore class in the workspace by clicking on it in the list.

From this area, you can execute any of the following actions for a specific datastore class:

- ![alt-text](img/fitview-icon.png) fit to view: to show a fitted view of the selected datastore class in your workspace area.
- ![alt-text](img/importfromcvs-icon.png) import from CSV: Allows you to [import data](import.md) from a CSV file in this dataclass.
- ![alt-text](img/deletedatastoreclass-icon.png): Removes the dataclass from the project.

:::info

Removing a dataclass from the model does not remove its associated functions.

:::

## Data Model Classes Button

The Data Model Classes button allows you to generate the [QodlyScript classes](../../orda/data-model.md) related to your data model. You can generate only the datastore class.

![model-classes](img/class-button.png)

For more information, please refer to [this section](../../orda/data-model.md#creating-data-model-classes).

## Properties Area

The Properties area displays the properties for the selected element: [datastore class](datastore-classes.md#datastore-class-properties), [attribute](attributes.md#properties), or [function](functions.md#permissions).

## Model JSON Representation

In Qodly Studio, the model possesses a JSON representation that is useful for troubleshooting or to copy/paste selected parts.

<Column.List align="center" justifyContent="between">
<Column.Item width="50%">
This representation can be accessed through a text editor by selecting the <code>Model</code> in the <code>Explorer</code> and choosing <code>Open With</code> a <code>Text Editor</code>.
</Column.Item>
<Column.Item width="45%">
<img alt="json" src={require('./img/openastext.png').default} style={{borderRadius: '6px'}} />
</Column.Item>
</Column.List>

<br/>

### Dissection

The model is opened in JSON format in the text editor:

![json](img/code-view.png)

In this JSON structure:

- **toJSON**: This flag indicates whether the JSON representation is enabled (true) or not (false). When set to true, the model can be serialized to JSON.

- **extraProperties** : This section contains additional properties that are not part of the primary model structure. In this case, it includes viewport properties such as zoom level and coordinates.

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
    <li>Within the <strong>attributes</strong> array, each attribute definition includes:</li>
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

The syntax check feature identifies and corrects syntax errors and formatting issues within the JSON representation. These errors are not only highlighted but also accompanied by descriptive messages that help pinpoint the exact problem. Below are some common examples of syntax errors that can be detected:

- <Column.List align="end" justifyContent="between">
  <Column.Item width="60%">
  <strong>Expected comma</strong>: This error typically occurs when a comma <code>,</code> is absent between key-value pairs in an object or elements in an array.
  </Column.Item>
  <Column.Item width="30%">
  <img src={require('./img/syntaxCheck_comma.png').default} style={{borderRadius: '6px'}} />
  </Column.Item>
  </Column.List>
- <Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
  <strong>Expected closing brace</strong>: This error occurs when the parser anticipates a closing curly brace <code>}</code> to conclude an object but does not find it.
  </Column.Item>
  <Column.Item width="30%">
  <img src={require('./img/syntaxCheck_brace.png').default} style={{borderRadius: '6px'}} />
  </Column.Item>
  </Column.List>

- <Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
  <strong>Value expected</strong>: This error arises when an object key is succeeded by a colon, but the corresponding value is missing, indicating an incomplete JSON representation.
  </Column.Item>
  <Column.Item width="30%">
  <img src={require('./img/syntaxCheck_value.png').default} style={{borderRadius: '6px'}} />
  </Column.Item>
  </Column.List>

- <Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
  <strong>Colon expected</strong>: This error suggests that a colon <code>:</code> is required to separate the key and value in an object, but it is missing from the code.
  </Column.Item>
  <Column.Item width="30%">
  <img src={require('./img/syntaxCheck_colon.png').default} style={{borderRadius: '6px'}} />
  </Column.Item>
  </Column.List>

- <Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
  <strong>Unexpected end of string json</strong>: This error is triggered when the parser encounters the end of a string without coming across a closing double quote <code>"</code>, indicating an unfinished string value or when the opening double quote is missing at the beginning of the string.
  </Column.Item>
  <Column.Item width="30%">
  <img src={require('./img/syntaxCheck_string.png').default} style={{borderRadius: '6px'}} />
  </Column.Item>
  </Column.List>
  :::warning

Editing the model through the JSON code must be done with care since data model integrity rules are not checked in the Text Editor. In particular, you must pay attention to [naming rules](attributes.md#attribute-name), or [renaming issues](datastore-classes.md#rename-a-datastore-class).

:::
