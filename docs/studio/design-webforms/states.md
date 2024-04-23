---
id: states
title: Normal States
---

import Column from '@site/src/components/Column'


Webform states offer a versatile solution for developers to apply diverse changes to webforms. This feature is particularly useful for altering the user interface (UI), styling, and other properties dynamically. It enables the tailoring of webforms to meet specific privileges or scenarios without requiring heavy reliance on server-side processing.


## State Characteristics

Each state is characterized by its differences from the original, or base, webform. The key characteristics of these states include:

- **Dynamic UI Customization**:

    - **Conditional Visibility**: Adapt element visibility to user inputs or conditions.

    :::info Example
    In an online survey tool, questions are displayed or hidden based on previous answers.
    :::

    - **Style Modifications**: Apply dynamic style changes, such as color or font adjustments.

    :::info Example
    A music streaming service changes the theme and colors of its user interface based on the genre the user is currently exploring.
    :::

    - **Interactive Elements**: Modify properties like "Read Only" in components based on current state.

    :::info Example
    On a real estate website, property listing forms change to 'Read Only' mode once the listing is published.
    :::

- **User-Centric Design**:

    - **Tailored Experiences**: Configure webforms for varied privileges.

    :::info Example
    In a company intranet portal, the webform displays different fields for submitting IT requests based on whether the user is an employee or a department head.
    :::

    - **Real-Time Feedback**: Offer instant UI updates as users interact.

    :::info Example
    A financial application provides immediate updates in investment forms, showing real-time calculations of potential returns or risks based on the user’s inputted investment amounts and choices.
    :::

- **Reduced Server Load**:

    - **Client-Side Logic**:  Process most of the conditional logic on the client side, reducing server requests.

    :::info Example
    An online custom product builder, like for custom t-shirts, processes user selections like size, color, and design on the client side, quickly showing them a preview without needing to communicate with the server.
    :::

    - **Faster Response Times**: Achieve quicker UI updates, enhancing user experience.

    :::info Example
    A flight booking website rapidly updates available seats and prices as users filter their preferences, such as departure times and airlines, without reloading the entire page.
    :::


## State Classifications

Webforms typically operate in one of two primary states:

### Normal State

This is the default mode of a webform. In the **Normal State**, the webform functions in its basic form without any special conditions or triggers. It represents the standard layout and behavior before any specific conditions are applied.

### Conditional State

The **Conditional State** activates when predefined conditions are met, unlike the Normal State. These conditions are based on criteria such as privilege levels or data source value changes. The state changes dynamically, triggered or deactivated according to the evaluation of these conditions as TRUE or FALSE.

:::info
For additional details on how to implement the Conditional State, please refer to the [Conditional States](./conditionalStates.md) section.
:::


## Creating a New State

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    To create a new state, one must click the <img src={require('./img/state_add.png').default} style={{borderRadius: '6px', width:'5%'}} /> button in the states section.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/state_create1.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    This action triggers the creation dialog, involving the assignment of a distinctive name to the state.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/state_create2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    Upon creation, the new state becomes visible in the states section and automatically opens in the canvas, ready for modifications.
    <br/><br/>
    The selected state is highlighted with a checked box <img src={require('./img/state_create4.png').default} style={{borderRadius: '6px', width:'5%'}} /> in the states list.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/state_create3.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


:::info
There is no restriction on the number of states that can be associated with a single webform.
:::


## Editing a State

Start editing a state by selecting it from the states panel, which then opens it on the canvas for customization. Notably, the `Editing stateName` tag will appear at the far right of the Contextual panel's header, indicating the current state under modification.


<img src={require('./img/state_editing.png').default} style={{borderRadius: '6px'}} />


The editing process involves:

- **CSS Class Editinn**: Alter CSS classes linked to components.

- **Component Visibility**: Dynamically display or hide components.

  :::info
  Adding or deleting components is not allowed. This limitation is reflected by disabling specific keyboard shortcuts like remove, cut, paste into, clear content, duplicate, and clear styles.
  :::

- **Component Properties**: Adjust component properties like datatable columns, with limitations to ensure state integrity.

  :::info
  To maintain state integrity, the "Data Access" category within component properties is deactivated during state editing.
  :::

- **Contextual Panel Update**: The panel reflects the current state being edited, providing relevant information and limitations.

  :::info
  Initially, the contextual panel notes that `You can only view/modify CSS classes when editing a state`.
  :::

- **Airy Mode Restrictions**: Once established in the base state, "Airy Mode" becomes disabled in subsequent states, ensuring its settings are not altered.


## Removing a State

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    To remove a state, click on the <img src={require('./img/state_delete.png').default} style={{borderRadius: '6px', width:'5%'}} /> button located adjacent to the state's name within the states panel.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/state_delete1.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    Upon initiating deletion, a confirmation popup will appear, requiring user confirmation to proceed.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/state_delete2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip
Once a state is successfully deleted, it is automatically disassociated from any related standard actions it was previously involved in. This includes the removal of the state's tag from the states field.
:::

## Renaming a State

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    To rename a state, click on the <img src={require('./img/state_edit.png').default} style={{borderRadius: '6px', width:'5%'}} /> button located adjacent to the state's name within the states panel.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/state_rename1.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    Upon initiating renaming, the state name switches to an editable input field.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/state_rename2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip
All references to the state in the events are automatically updated post-renaming, preserving the webform’s functional integrity.
:::


## Event and Function Handling


### Standard Actions

Standard actions in webform states are integral to defining the webform’s behavior in response to user interactions:


- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    <strong>Add Action</strong>: Utilized for incorporating modifications from selected states into the base state.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/state_standardAction_add.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
    <strong>Delete Action</strong>: This action facilitates the removal of selected states, along with their changes, in relation to the base state.
	</Column.Item>
	<Column.Item width="40%">
		<img src={require('./img/state_standardAction_delete.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


:::tip
When a new state is applied or removed as a user interacts with an input field, the interaction remains uninterrupted ensuring that the focus on the input field is not lost by the state change.
:::


  <Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
      When triggering these actions, users can select from available states, which are then tagged in the state field. The base state, however, is not included among these selectable options.
    </Column.Item>
    <Column.Item width="40%">
      <img src={require('./img/state_standardAction.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
  </Column.List>

<br/>

:::warning
These standard actions are designed to be used solely with "Normal" states. Applying them to "Conditional" states will lead to errors.

Additionally, if a state is initially "Normal" but later transitions to a "Conditional" state, any standard actions previously applied to this state will trigger errors in the sanity check.
:::



### Webform Object Functions

In addition to the standard actions, webform object exposes several states related functions with error handling for "Conditional" states, like:

- `addState`: Applies the differences from selected states to the current webform.
- `removeState`: Removes the applied differences from the webform.
- `clearState`: Returns the webform to its base state.
- `getCurrentStates`: Returns a collection of state names currently applied to the webform.
- `getStates`: Provides a list of all state names defined for the webform.

:::info
These functions are designed to target only "Normal" states. In the event a "Conditional" state is used, the function will either return an error or not execute any action.
:::

### Event Handling

The `onLoad` event triggers when the webform initially loads. However, it's designed not to re-trigger with subsequent state applications because:

- **Performance**: Preventing re-triggering maintains webform responsiveness and avoids unnecessary processing.

- **State Integrity**: This ensures modifications due to state changes don’t reset the webform’s initial setup.


## Conflict Resolution

When a webform has multiple states applied, the most recently applied state will take priority in the event of any conflicts. This approach is essential to ensure that the webform accurately reflects the most up-to-date modifications.

## Preview and Rendering

During state editing, the `Preview in Studio` button allows developers to see real-time changes, offering an immediate glimpse of how state modifications impact the webform. However, when it comes to `Rendering`, it defaults to displaying the base state. 

:::tip
To prevent any confusion between the editable and base states, the `Preview` button is disabled while editing states.
:::