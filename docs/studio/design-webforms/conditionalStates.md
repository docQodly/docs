---
id: conditionalStates
title: Conditional States
---

import Column from '@site/src/components/Column'




Conditional states enhance webforms by allowing dynamic adaptation based on specified conditions, significantly improving interactivity and user-specific functionality.


## Scope of Conditions

Conditions within Qodly are classified into two types:

### Saved Conditions

Saved Conditions are reusable and can be applied across different states, stored within the `Saved Conditions` area for easy access and application.

:::info
For more details, please refer to the [Saved Conditions](#saved-conditions-area) area.
:::

### Local Conditions

Local Conditions are specific to the currently selected state and can be customized to meet unique logic requirements of that state.


## Conditions Interface

Accessible via the `Conditions` button <img alt="explorer" src={require('./img/statesConditions.png').default} style={{borderRadius: '6px', width:'25%'}} /> next to the `States` header, this interface is pivotal in visualizing and managing conditions that define the behavior of webform states. It includes major tools such as the `States Area`, `Saved Conditions Area`, `Schema Editor`, and `JSON Editor`, each designed to facilitate specific aspects of condition management.

### States Area

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
	The States section is organized with tabs for each available state, allowing straightforward navigation and modification of state conditions. The tab for the currently active state is highlighted to clearly indicate which state is being edited.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/conditionsInterface_states.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Saved Conditions Area

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
	This area allows users to create, store, and manage conditions that can be reused across various states within the webform.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/conditionsInterface_savedConditions.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip
The tab representing the condition currently being modified is distinctly highlighted, providing users with a clear visual indication of the active condition.
:::

Adding a new saved condition involves clicking the <img alt="explorer" src={require('./img/addCssClass.png').default} style={{borderRadius: '6px', width:'3%'}} /> button, which initializes it with a generic name.


### Schema Area

The Schema Editor is introduced here as a central tool for visualizing and editing the logical connections between conditions. For detailed information on utilizing this tool, see the [Schema Editor](#conditions-schema-editor) section.

### JSON Area

<Column.List align="center" justifyContent="between">
	<Column.Item width="40%">
	The JSON Editor is an advanced tool for those who need to directly manipulate the condition's properties in JSON format. For more details on how to use this feature, refer to the <a href="#conditions-json-editor">JSON Editor</a> section.
	</Column.Item>
	<Column.Item width="55%">
		<img src={require('./img/conditionsInterface_json.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>




## Conditions Schema Editor

At the core of the Conditions Interface is the Schema Editor, a dynamic visualization tool essential for mapping out and manipulating condition logic in a flowchart-like format. This interface allows for intuitive operations such as:

### Default Options

<Column.List align="center" justifyContent="between">
	<Column.Item width="40%">
	If no conditions are pre-set for the selected state, the Schema Editor provides an <code>Add condition</code> button by default, facilitating quick starts in condition creation.
	</Column.Item>
	<Column.Item width="55%">
		<img src={require('./img/conditionsInterface_schema.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Saved Condition Integration

<Column.List align="center" justifyContent="between">
	<Column.Item width="40%">
	Users can integrate a <code>Saved Condition</code> into the current state's logic by clicking and dragging from the Saved Conditions Section directly into the schema.
	</Column.Item>
	<Column.Item width="55%">
		<img src={require('./img/conditionsInterface_schema0.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip

Ensure proper placement by dragging the `Saved condition` to the ellipsis icon <img alt="explorer" src={require('./img/conditionsInterface_schema1.png').default} style={{borderRadius: '6px', width:'3%'}} />, which represents the condition's specific level within the schema. Dropping it elsewhere might not integrate the condition correctly.

When multiple conditions are present, dropping it onto the connecting logical operator square <img alt="explorer" src={require('./img/conditionsInterface_schema2.png').default} style={{borderRadius: '6px', width:'3%'}} /> will integrate it as well.
:::


### Logical Condition Combination

<Column.List align="center" justifyContent="between">
	<Column.Item width="40%">
	Link conditions with visual connectors representing logical operators. Use the <code>&</code> operator for combined fulfillment, or the <code>|</code> operator for partial fulfillment.
	</Column.Item>
	<Column.Item width="50%">
		<img src={require('./img/conditionsInterface_schema3.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### Comprehensive View Controls

Facilitate a switch between detailed and overview modes by using the global expand/collapse button <img alt="explorer" src={require('./img/conditionsInterface_schema4.png').default} style={{borderRadius: '6px', width:'3%'}} />, accessible via the designated button in the schema header <img alt="explorer" src={require('./img/conditionsInterface_schema7.png').default} style={{borderRadius: '6px', width:'25%'}} />.


### Condition Configuration

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
    Each condition card within the schema serves as an access point for configuring the specific properties of a condition. When a card is collapsed, it displays essential information at a glance, such as the condition's type and the data source it is connected to. 
	</Column.Item>
	<Column.Item width="50%">
		<img src={require('./img/conditionsInterface_schema6.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

  For additional details, please refer to the [X](#) area.


### Condition Actions

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
    Every condition card is equipped with a set of actions, facilitating modifications like renaming or deleting the condition. 
	</Column.Item>
	<Column.Item width="50%">
		<img src={require('./img/conditionsInterface_schema5.png').default} style={{borderRadius: '6px', width:'53%'}} />
	</Column.Item>
</Column.List>

  For additional details, please refer to the [Conditions Actions](#managing-conditions) section.



## Condition Management

### Add Condition (Local)

Local Conditions are specific to the currently active state and allow for state-specific conditions customization. To add a Local Condition to your state:

- **From the Schema Window**: If no conditions are currently set up, simply click the `Add condition` button in the schema window to insert a new condition at the base level of the state’s logic hierarchy.
  
- **Using the Side Menu**: For contextual additions within a specific logic level, select the `Add condition` option from the side menu. This will introduce a new condition card at the same hierarchical level as the location where you invoked the command.

	:::info

	<Column.List align="center" justifyContent="between">
		<Column.Item width="70%">
			For instance, in the visual example provided, if <code>Add condition</code> is selected from the side menu at the position of conditions <code>c1</code> and <code>c2</code>, the new condition will be placed on the same level as these conditions. 
		</Column.Item>
		<Column.Item width="25%">
			<img src={require('./img/addLocalCondition1.png').default} style={{borderRadius: '6px'}} />
		</Column.Item>
	</Column.List>

	<Column.List align="center" justifyContent="between">
		<Column.Item width="70%">
			It ensures that your new condition is logically organized within the same group, maintaining the consistency and flow of the state's configuration.
		</Column.Item>
		<Column.Item width="25%">
			<img src={require('./img/addLocalCondition2.png').default} style={{borderRadius: '6px'}} />
		</Column.Item>
	</Column.List>

	:::

### Duplicate Condition

The <code>Duplicate condition</code> option allows users to create an exact copy of an existing condition or groups of conditions, preserving all configurations.


<Column.List align="center" justifyContent="between">
	<Column.Item width="40%">
		<img src={require('./img/duplicateCondition1.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/duplicateCondition2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Rename Condition

<Column.List align="center" justifyContent="between">
	<Column.Item width="70%">
		To better reflect a condition's role within the webform, the <code>Rename condition</code> option enables users to change its default name.
		<br/><br/>
		Alternatively, users can click on the <img alt="explorer" src={require('./img/state_edit.png').default} style={{borderRadius: '6px', width:'4%'}} /> button next to the condition's name to initiate renaming
		<br/><br/><br/>
		Upon initiating renaming, the condition name switches to an editable input field. 
	</Column.Item>
	<Column.Item width="25%">
		<img src={require('./img/renameCondition.png').default} style={{borderRadius: '6px'}} />
		<br/>
		<img alt="explorer" src={require('./img/renameCondition2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### Save Condition

<Column.List align="center" justifyContent="between">
	<Column.Item width="70%">
		Using the <code>Save condition</code> option, conditions or groups of conditions can be stored as saved conditions accessible in the <code>Saved States</code> area. 
		<br/><br/><br/>
		Upon saving, a prompt will appear requesting a name for the saved condition.
	</Column.Item>
	<Column.Item width="25%">
		<img src={require('./img/saveCondition.png').default} style={{borderRadius: '6px'}} />
		<br/>
		<img alt="explorer" src={require('./img/saveCondition2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Remove Condition

<Column.List align="center" justifyContent="between">
	<Column.Item width="70%">
		The <code>Remove condition</code> option is available for users needing to clear out unused or unwanted conditions from the schema. This tool helps declutter the configuration space by removing selected conditions or groups of conditions.
		<br/><br/><br/>
		Upon initiating deletion, a confirmation popup will appear, requiring user confirmation to proceed.
	</Column.Item>
	<Column.Item width="25%">
		<img src={require('./img/removeCondition.png').default} style={{borderRadius: '6px'}} />
		<br/>
		<img alt="explorer" src={require('./img/removeCondition2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


## Conditions JSON Editor


### Accessing the JSON Editor

<Column.List align="center" justifyContent="between">
	<Column.Item width="50%">
		The JSON Editor can be accessed through the Conditions Interface by clicking on the JSON Editor button. This opens a dedicated editing area where users can view and edit the JSON representation of their conditions.
	</Column.Item>
	<Column.Item width="45%">
		<img src={require('./img/accessJsonEditor.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Initial JSON Blueprint

Upon addition, each condition's initial JSON structure appears in the editor as follows:

```json
{
  "id": "auto_generated_unique_identifier",
  "name": "default_condition_name",
  "type": "unspecified"
}
```

This initial blueprint provides a template that users can modify to fit the specific requirements of their webform conditions.


### Common JSON Fields

When working with conditions in the JSON Editor, users will encounter several common fields:

- **id**: A unique identifier for the condition (type: string).
- **name**: The name of the condition (type: string).
- **type**: Specifies the type of condition (e.g., datasource, privilege, parentState, reference, combination).
- **path**: The data path within the datasource (for datasource conditions).
- **value**: The value to compare against, which can be of various types (number, string, boolean, object, array, or null).
- **op**: The operator for comparison (e.g., eq, neq, regex, in, nin, gt, gte, lt, lte).



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

