---
id: conditionalStates
title: Conditional States
---

import Column from '@site/src/components/Column'



Conditional states empower webforms to dynamically adapt based on specified conditions, significantly enhancing interactivity and user-specific functionality.



## Scope of Conditions

Conditions are categorized into two types:

### Saved Conditions

Saved Conditions are reusable conditions that can be applied across different states and are stored in the `Saved Conditions` area.

:::info
For additional details, please refer to the [Saved Conditions](#saved-conditions) area.
:::

### Local Conditions

Local Conditions are specific to the currently selected state and can be customized to meet the state's unique logic requirements.


## Conditions Interface

The Conditions Interface is crucial for the visualization and management of the conditions that define the behavior of webform states. This interface is accessible through the `Conditions` button <img alt="explorer" src={require('./img/statesConditions.png').default} style={{borderRadius: '6px', width:'25%'}} /> situated adjacent to the `States` header. It provides users with a suite of features:

### States Area

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    The States section is organized with tabs representing each available state, allowing for straightforward navigation and modification of the respective state conditions. The tab corresponding to the active state is highlighted, making it clear which state is currently being edited.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/conditionsInterface_states.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Saved Conditions Area

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    Positioned directly below the States section, the Saved Conditions area is where users can craft and archive conditions, which can then be applied and re-utilized across various states within the webform. 
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/conditionsInterface_savedConditions.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip
The tab representing the condition currently being modified is distinctly highlighted, providing users with a clear visual indication of the active condition.
:::

Adding a new saved condition involves clicking the <img alt="explorer" src={require('./img/addCssClass.png').default} style={{borderRadius: '6px', width:'3%'}} /> button, which initializes it with a generic name.


### Schema Editor

At the heart of the Conditions Interface is the Schema Section, which presents a flowchart-like visualization crucial for the conceptualization and manipulation of conditions. This allows users to:


- <Column.List align="center" justifyContent="between">
	<Column.Item width="40%">
    <strong>Access Default Options</strong>: In the absence of any conditions for the selected state, the Schema Section defaults to displaying an <code>Add condition</code> button.
	</Column.Item>
	<Column.Item width="55%">
		<img src={require('./img/conditionsInterface_schema.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="40%">
    <strong>Drag and Drop Saved Conditions</strong>: To incorporate a saved condition into the current state's logic structure, users can simply click and drag it from the Saved Conditions Section. 
	</Column.Item>
	<Column.Item width="55%">
		<img src={require('./img/conditionsInterface_schema0.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip
To add the `Saved condition` at a specific hierarchical level, drag it over to the ellipsis <img alt="explorer" src={require('./img/conditionsInterface_schema1.png').default} style={{borderRadius: '6px', width:'3%'}} /> icon representing the condition's side menu. You must drop the saved condition directly onto this icon for it to assimilate at the desired level within the existing logical structure. If dropped elsewhere, the addition will not take effect. 

When multiple conditions are present, dropping it onto the connecting logical operator square <img alt="explorer" src={require('./img/conditionsInterface_schema2.png').default} style={{borderRadius: '6px', width:'3%'}} /> will integrate it as well.
:::

- <Column.List align="center" justifyContent="between">
	<Column.Item width="40%">
    <strong>Combine Conditions by Logical Operator</strong>: Merge conditions using visual connectors that represent logical operators within the schema. To stipulate that both conditions must be satisfied, connect them using the <code>&</code> operator symbol. Alternatively, to indicate that at least one of the conditions should be met, use the <code>|</code> operator. 
	</Column.Item>
	<Column.Item width="50%">
		<img src={require('./img/conditionsInterface_schema3.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


- **Global Expand/Collapse**: Ability to expand or collapse all condition cards simultaneously to toggle between an overarching view of all conditions and a more detailed, individual configuration view with ease.. It can be accessed using the <img alt="explorer" src={require('./img/conditionsInterface_schema4.png').default} style={{borderRadius: '6px', width:'3%'}} /> button located within the header section <img alt="explorer" src={require('./img/conditionsInterface_schema7.png').default} style={{borderRadius: '6px', width:'25%'}} />.


- <Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
    <strong>Condition Configuration</strong>: Each condition card within the schema serves as an access point for configuring the specific properties of a condition. When a card is collapsed, it displays essential information at a glance, such as the condition's type and the data source it is connected to. 
	</Column.Item>
	<Column.Item width="50%">
		<img src={require('./img/conditionsInterface_schema6.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

  For additional details, please refer to the [X](#) area.


- <Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
    <strong>Condition Actions</strong>: Every condition card is equipped with a set of actions, facilitating modifications like renaming or deleting the condition. These actions are designed to enhance the ease of condition management directly from the schema view. 
	</Column.Item>
	<Column.Item width="50%">
		<img src={require('./img/conditionsInterface_schema5.png').default} style={{borderRadius: '6px', width:'53%'}} />
	</Column.Item>
</Column.List>

  For additional details, please refer to the [X](#) area.

### JSON Editor

<Column.List align="center" justifyContent="between">
	<Column.Item width="40%">
    The JSON Editor is for advanced users who need to directly manipulate the condition's properties through JSON code. This section of the interface is especially useful for complex configurations or batch edits.
	</Column.Item>
	<Column.Item width="55%">
		<img src={require('./img/conditionsInterface_json.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>




## Conditions Actions

### Add Local Condition

Local Conditions are intimately tied to the currently active state and allow for state-specific conditions customization. To add a Local Condition to your state:

- **From the Schema Window**: If no conditions are currently set up, simply click the "Add condition" button in the schema window to insert a new condition at the base level of the state’s logic hierarchy.
  
- **Using the Side Menu**: For contextual additions within a specific logic level, select the "Add condition" option from the side menu. This will introduce a new condition card at the same hierarchical level as the location where you invoked the command.

:::info
For instance, in the visual example provided, if "Add condition" is selected from the side menu at the position of conditions "c1" and "c2," the new condition will be placed on the same level as these conditions. It ensures that your new condition is logically organized within the same group, maintaining the consistency and flow of the state's configuration.
:::


### Rename Condition

When a condition’s default name does not suffice, users can opt to rename it to better reflect its function within the webform. This is achieved through the "Rename condition" option, facilitating clearer identification and management of the various conditions.

### Duplicate Condition

Users can duplicate an existing condition using the "Duplicate condition" option. This option creates an exact copy of the selected condition, preserving all its configurations.

### Remove Condition

If a condition is no longer needed or if a user wishes to declutter the schema, the "Remove condition" option can be utilized to delete the selected condition.




## Building Logical Structures

Logical structures within states are hierarchically organized. Conditions linked by "AND" operators illustrate a dependency chain, where each sub-condition must be met for the overall condition to be triggered. This setup supports the creation of sophisticated logical frameworks necessary for complex webform behaviors.


## Configuring Conditions

### Interactive Condition Configuration

Conditions are represented by interactive cards that can be expanded or collapsed, optimizing the workspace for focused configuration tasks. Each card serves as a gateway to set critical properties like condition type, associated data source, operator, and comparative values.

### Condition Types

The condition card includes a dropdown menu for selecting the type of condition to configure, with options such as:

- **Datasource**: Tailors conditions based on data values, requiring details like the data source, operator, and comparison value.
- **Parent State**: Establishes dependency on the state of an upper hierarchy element for nested state logic creation.
- **Privilege**: Facilitates access control by adjusting conditions according to user permissions or roles.
- **Combination**: Allows the combination of multiple conditions into a singular, more complex condition.
- **Reference**: Enables the reuse of predefined conditions within the system, enhancing the condition creation process's efficiency and coherence.




## JSON Structure of Conditions

### Initial JSON Blueprint

Upon addition, each condition's initial JSON structure appears in the editor as follows:

```json
{
  "id": "auto_generated_unique_identifier",
  "name": "default_condition_name",
  "type": "unspecified"
}
```

This blueprint provides a starting point for condition customization.

### Unique Identifier

Every condition is automatically assigned a unique id that serves as its identifier, crucial for distinguishing between various conditions in the system.

### Editable Condition Names

The `name` field, initially set to a placeholder, is intended to be updated by the user to reflect the condition's specific purpose and logic.


### Specifying Condition Type

The `type` field is initially blank and should be updated with the appropriate condition type selected from the interface's dropdown menu.





## Implementing Conditional States

### Privilege-Based Conditional State

This approach activates different states based on privileges. When a user session includes a certain privilege, it triggers a corresponding state, thereby aligning the webform with the user's access level.

:::info Example
In a corporate app, employees and managers see different webform settings, tailored to their respective privileges.
:::



### Data-Driven Conditional State

In this approach, webform states change in response to alterations in data source values. This creates context-aware adjustments in the webform, responding to real-time data dynamics.

:::info Example
In an e-commerce app, the checkout process is adjusted offering incentives like free shipping when the shopping cart reaches a designated value.
:::


<!--
Each time a datasource value used in an Conditional state rule changes, the rule is evaluated to TRUE or FALSE

conditions employ comparators specific to data types, such as:

  - **Strings:** Comparators like EQUAL, DIFFERENT, CONTAINS, STARTSWITH, IN, ISNULL, and REGEX.

  - **Numbers, Dates, Duration:** Utilizes GREATER THAN, LOWER THAN, BETWEEN, ISNULL, and their variants.

  - **Boolean:** Options include ISTRUE, ISFALSE, ISNULL, and EQUALS.
-->

:::tip
Conditions are re-evaluated automatically when data source values change.
:::


### Dependency on Parent Webform's State

Webforms within Webform loaders react dynamically to the state of their parent webform, ensuring that changes in the parent webform directly affect the behavior of nested webforms. This interaction leads to more integrated and contextually aware applications, where changes in one section can appropriately influence related areas.

For instance, in a webform loader, a particular state, "childState", is applied only when its parent webform achieves a specific state, "parentState". 

:::info Example
In a healthcare app, relevant patient history is displayed during active consultations, adjusting content based on the broader context of the patient's current engagement with the clinic.
:::

