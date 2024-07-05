---
id: conditionalStates
title: Conditional States
---

import Column from '@site/src/components/Column'

## Overview

Conditional states enhance Pages by allowing dynamic adaptation based on specified conditions, significantly improving interactivity and user-specific functionality.

:::info
Once a condition is associated with a state, it becomes a `Conditional` state.
:::

:::tip
As soon as the condition is `True`, the state is enabled. If the condition is `False`, the state is disabled.
:::

## Scope of Conditions

Conditions within Qodly are classified into two types:

### Local Conditions

Local Conditions are specific to the currently selected state and can be customized to meet unique logic requirements of that state.


### Saved Conditions

Saved Conditions are reusable and can be applied across different states, stored within the `Saved Conditions` area for easy access and application.

:::info
For more details, please refer to the [Saved Conditions](#saved-conditions-area) area section.
:::



## Conditions Interface

Accessible via the `Conditions` button <img alt="explorer" src={require('./img/statesConditions.png').default} style={{borderRadius: '6px', width:'25%'}} /> next to the `States` header, this interface is pivotal in visualizing and managing conditions that define the behavior of Page states. It includes major tools such as the `States Area`, `Saved Conditions Area`, `Schema Editor`, and `JSON Editor`, each designed to facilitate specific aspects of condition management.

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
	This area allows users to create, store, and manage conditions that can be reused across various states within the Page.
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


### Condition Configuration Card

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
    Each condition card within the schema serves as an access point for configuring the specific properties of a condition. When a card is collapsed, it displays essential information at a glance, such as the condition's type and the data source it is connected to. 
	</Column.Item>
	<Column.Item width="50%">
		<img src={require('./img/conditionsInterface_schema6.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::info
For additional details, please refer to the [Condition Types](#condition-types) section.
:::

### Condition Actions

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
    Every condition card is equipped with a set of actions, facilitating modifications like renaming or deleting the condition. 
	</Column.Item>
	<Column.Item width="50%">
		<img src={require('./img/conditionsInterface_schema5.png').default} style={{borderRadius: '6px', width:'53%'}} />
	</Column.Item>
</Column.List>

  For additional details, please refer to the [Conditions Actions](#condition-management) section.



## Condition Types

Each condition within the schema is represented by an interactive card, providing a user-friendly interface for configuring specific properties. These cards can be expanded or collapsed to display key details and settings.

### Qodly Source

| Name         | Icon | Description | Available Operators                                   |
|--------------|------|-------------|-------------------------------------------------------|
| Qodly Source | <img src={require('./img/typeQodlySource.png').default} style={{borderRadius: '6px', width: '60%'}} /> | Evaluates data from a specified datasource. | `=`, `!=`, `>`, `>=`, `<`, `<=`, `in`, `not in`, `regex` |

:::info Comparators vary depending on the datasource type:

String:
- EQUAL: hardcoded value or datasource
- DIFFERENT: hardcoded value or datasource
- CONTAINS: hardcoded value or datasource
- STARTSWITH: hardcoded value or datasource
- IN (value1, value2, ...): hardcoded values or datasources
- ISNULL
- REGEX: hardcoded value only

Number, Dates, Duration:
- GREATER THAN: hardcoded value or datasource
- GREATER THAN OR EQUAL: hardcoded value or datasource
- LOWER THAN: hardcoded value or datasource
- LOWER THAN OR EQUAL: hardcoded value or datasource
- BETWEEN (value1, value2): hardcoded values or datasources
- ISNULL

Boolean:
- ISTRUE
- ISFALSE
- ISNULL
- EQUALS (datasource): another boolean datasource

:::

#### Example

<Tabs groupId="condition-types">
<TabItem value="Visual Representation">

<img src={require('./img/typeQodlySource2.png').default} style={{borderRadius: '6px', width: '40%'}} />

</TabItem>
<TabItem value="Json Code">

```json
{
  "type": "combination",
  "id": "auto_generated_unique_identifier_1",
  "op": "and",
  "conditions": [
    {
      "type": "datasource",
      "id": "auto_generated_unique_identifier_2",
      "name": "Age over 25",
      "path": "employee.age",
      "op": "gt",
      "value": 25
    },
    {
      "type": "datasource",
      "id": "auto_generated_unique_identifier_3",
      "name": "Lastname starts with D",
      "path": "employee.lastname",
      "op": "regex",
      "value": "^D"
    }
  ]
}
```

</TabItem>
</Tabs>


### Current State Condition

| Name          | Icon | Description | Available Operators       |
|---------------|------|-------------|---------------------------|
| Current State | <img src={require('./img/typeQodlySource.png').default} style={{borderRadius: '6px', width: '60%'}} /> | Evaluates the state of the current element. | `=`, `!=`, `regex` |

#### Example

<Tabs groupId="condition-types"groupId="condition-types">
<TabItem value="Visual Representation">

<img src={require('./img/typeCurrentState2.png').default} style={{borderRadius: '6px', width: '40%'}} />

</TabItem>
<TabItem value="Json Code">

```json
{
  "type": "combination",
  "id": "auto_generated_unique_identifier_13",
  "op": "and",
  "conditions": [
    {
      "type": "currentState",
      "id": "auto_generated_unique_identifier_14",
      "name": "Current state is State_1",
      "op": "eq",
      "value": "State_1"
    },
    {
      "type": "currentState",
      "id": "auto_generated_unique_identifier_15",
      "name": "Current state matches regex",
      "op": "regex",
      "value": "^State"
    }
  ]
}
```

</TabItem>
</Tabs>


### Parent State Condition

| Name        | Icon | Description | Available Operators       |
|-------------|------|-------------|---------------------------|
| Parent State| <img src={require('./img/typeParentState.png').default} style={{borderRadius: '6px', width: '60%'}} /> | Evaluates the state of a parent element. | `=`, `!=`, `regex` |

#### Example

<Tabs groupId="condition-types">
<TabItem value="Visual Representation">

<img src={require('./img/typeParentState2.png').default} style={{borderRadius: '6px', width: '40%'}} />

</TabItem>
<TabItem value="Json Code">

```json
{
  "type": "combination",
  "id": "auto_generated_unique_identifier_10",
  "op": "and",
  "conditions": [
    {
      "type": "parentState",
      "id": "auto_generated_unique_identifier_11",
      "name": "Parent state is Active",
      "op": "eq",
      "value": "Active"
    },
    {
      "type": "parentState",
      "id": "auto_generated_unique_identifier_12",
      "name": "Parent state starts with A",
      "op": "regex",
      "value": "^A"
    }
  ]
}
```

</TabItem>
</Tabs>


### Privilege Condition

| Name         | Icon | Description | Available Operators       |
|--------------|------|-------------|---------------------------|
| Privilege    | <img src={require('./img/typePrivilege.png').default} style={{borderRadius: '6px', width: '70%'}} /> | Evaluates the user's privilege level. | `=`, `!=`, `regex` |

#### Example

<Tabs groupId="condition-types">
<TabItem value="Visual Representation">

<img src={require('./img/typePrivilege2.png').default} style={{borderRadius: '6px', width: '40%'}} />

</TabItem>
<TabItem value="Json Code">

```json
{
  "type": "combination",
  "id": "auto_generated_unique_identifier_7",
  "op": "and",
  "conditions": [
    {
      "type": "privilege",
      "id": "auto_generated_unique_identifier_8",
      "name": "User is guest",
      "op": "eq",
      "value": "guest"
    },
    {
      "type": "privilege",
      "id": "auto_generated_unique_identifier_9",
      "name": "Not restricted",
      "op": "neq",
      "value": "restricted"
    }
  ]
}
```

</TabItem>
</Tabs>


### Saved Condition

| Name         | Icon | Description | Available Operators |
|--------------|------|-------------|---------------------|
| Saved Condition | <img src={require('./img/typeSavedCondition.png').default} style={{borderRadius: '6px', width: '70%'}} /> | References a pre-defined condition stored in the `Saved Conditions` area, allowing for reuse across different states. | N/A |

#### Example

<Tabs groupId="condition-types">
<TabItem value="Visual Representation">

<img src={require('./img/typeSavedCondition2.png').default} style={{borderRadius: '6px', width: '40%'}} />

</TabItem>
<TabItem value="Json Code">

```json
{
  "type": "combination",
  "id": "iiq55CwnDbkEbqtZ46HmuN",
  "op": "or",
  "conditions": [
    {
      "type": "reference",
      "id": "auto_generated_unique_identifier_5",
      "name": "Condition 2",
      "ref": "7EhcZvWyNCr6AqPqS139Mz"
    },
    {
      "type": "reference",
      "id": "auto_generated_unique_identifier_6",
      "name": "Condition 3",
      "ref": "7ymDgJc1iL6ca1Q8WzL43z"
    }
  ]
}
```

</TabItem>
</Tabs>




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
		To better reflect a condition's role within the Page, the <code>Rename condition</code> option enables users to change its default name.
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

This initial blueprint provides a template that users can modify to fit the specific requirements of their Page conditions.


### Common JSON Fields

When working with conditions in the JSON Editor, users will encounter several common fields:

- **id**: A unique identifier for the condition (type: string).
- **name**: The name of the condition (type: string).
- **type**: Specifies the type of condition (e.g., datasource, privilege, parentState, reference, combination).
- **path**: The data path within the datasource (for datasource conditions).
- **value**: The value to compare against, which can be of various types (number, string, boolean, object, array, or null).
- **op**: The operator for comparison (e.g., eq, neq, regex, in, nin, gt, gte, lt, lte).