---
id: eventsManagement
title: Events Management
---

import Column from '@site/src/components/Column'

The Contextual panel facilitates the association of class functions, navigation actions, and standard actions with distinct events within your application.

## Adding an Event

To bind class functions, navigation actions or standard actions with events, follow these steps:

1. **Select a Component or Qodly Source**: Begin by choosing the component or qodlysource to which you want to attach an event. This selection can be made using the canvas, the [outline](../pageLoaderOverview#outline), or, in the case of Qodly sources, either the [shared Qodly Sources](../qodlySources#from-a-namespace-shared-qodly-source) area or the [local Qodly Sources](../qodlySources#from-this-page) area.

2. **Expand the Contextual Panel**: Once your selection is made, expand the `Contextual panel` <img src={require('./img/events_contextualPanel.png').default} style={{borderRadius: '6px', width: '20%'}} />. It will provide you with a list of compatible events specifically tailored to your chosen component or qodlysource.


3. **Bind the Desired Action to the Event**: Next, select the type of action <img src={require('./img/events_actions.png').default} style={{borderRadius: '6px', width: '13%'}} /> you wish to bind to the event. You have three options:

    - [Standard Action](./bindingActionToEvents.md#binding-standard-actions-to-events): Configure automatic actions on qodlysources, such as create, save, drop, or order by, without the need for coding.
    - [Navigation Action](./bindingActionToEvents.md#binding-navigation-actions-to-events): Set up actions related to navigation within the application, such as opening another page or redirecting to an external URL.
    - [Class Function](./bindingActionToEvents.md#binding-class-functions-to-events): Use a custom function to handle the event.
    - [Dialog Action](./bindingActionToEvents.md#binding-dialog-actions-to-events): Configure to trigger dialog-related events. 

4. **Action Bound to Event**: In the list of available events, you will notice a purple bullet <img src={require('./img/events_purpleBullet.png').default} style={{borderRadius: '6px', width: '22%'}} /> displayed on the left side of events that have already been configured (if any).


5. **Configure Event Properties**: Complete the remaining steps specific to each action type, as detailed in the respective sections within the configuring events section.

:::tip
You can define different actions for the same event.
:::


## Removing an Event

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        To remove a defined action, simply click on the trash icon <img src={require('./img/trash.png').default} style={{borderRadius: '6px', width: '5%'}} /> located within the event box. This action will result in the removal of the event that is bound to an action.
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/events_deleteEvent.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

## Copying an Event Action

To facilitate easier management of repetitive event actions across various parts of your application, follow these steps:

1. <Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <strong>Locate the Event Action</strong>: Navigate to the event action you intend to copy.
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/copyEvent.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

2. **Copy the Event Action**: Click the copy button <img src={require('./img/copyEvent2.png').default} style={{borderRadius: '6px'}} /> associated with the event action. This copies the event action to your system clipboard.

## Pasting an Event Action

Once an [event action is copied](#copying-an-event-action), it can be pasted into another event. Here’s how:

1. **Access the Target Event**: Navigate to the component event panel where you wish to integrate the copied action.

2. **Paste the Event Action**: Click the paste button <img src={require('./img/pasteEvent.png').default} style={{borderRadius: '6px', width:'10%'}} /> in the action section of the contextual panel.

    :::tip
    If the paste button is inactive <img src={require('./img/pasteEvent2.png').default} style={{borderRadius: '6px', width: '5%'}} />, it indicates that there is no event action currently copied to your clipboard.
    :::

3. **Adjust Events**: Adapt the pasted event action to fit the new context. Modify it as necessary to ensure compatibility with the target component or Qodly Source.

    :::info Event Compatibility
    When pasting an event action, only those events that are compatible with the targeted component or Qodly Source will be retained. For example, if you copy an action designed for an `onClick` event from a button and paste it onto a Qodly Source that only supports `onChange`, you will need to define appropriate events manually.
    :::

## Modifying a Function Call

Customize your application by modifying the function calls within event actions without the need to recreate the action from scratch.


1. **Select the Event Action**: Identify and select the event action you need to modify.

2. <Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <strong>Edit the Function Call</strong>: To change the function, click the "Edit Function" button <img src={require('./img/edit.png').default} style={{borderRadius: '6px'}} /> next to the function name. This will open a dialog where you can select a new function.
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/modifyFuncCall2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


3. <Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <strong>Choose the Function</strong>: Use the typeahead dropdown to select the new function you wish to use. Options appear based on your input for easier selection.
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/modifyFuncCall3.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


4. <Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <strong>Confirm the Changes</strong>: Once you select the new function, click "Confirm" to update the event action. The event action will maintain its parameters and return values as closely as possible to the original configuration.
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/modifyFuncCall4.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

## Toggling Event Execution

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        To manage whether an event should execute during rendering, you can toggle its execution status using the toggle icon <img src={require('./img/toggle.png').default} style={{borderRadius: '6px', width: '7%'}} />. This allows you to enable or disable the event as needed to meet your specific requirements.
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/events_toggleExecution.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

This feature is valuable for scenarios like debugging or temporarily pausing specific event executions without removing them from your application entirely.

## Toggle Event Card Visibility

When the contextual panel is opened for a component or a qodlysource, all events are initially collapsed to provide a concise representation of their content. To expand all event cards, click the <img src={require('./img/expandAll.png').default} style={{borderRadius: '6px', width:'3%'}} /> button at the top right of the contextual panel, and to collapse them, click on the <img src={require('./img/collapseAll.png').default} style={{borderRadius: '6px', width:'3%'}} /> button.

:::tip
<Column.List align="center" justifyContent="between">
    <Column.Item width="54%">
        Choose between table (default) or line format by clicking the <img src={require('./img/expand.png').default} style={{borderRadius: '6px', width:'5%'}} /> button in the upper right corner of the event card.
    </Column.Item>
    <Column.Item width="46%">
        <img src={require('./img/toggleFunctionPrototype.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>
:::

### Standard Action

For events bound to Standard actions, the collapsed card displays the qodlysource name involved, followed by its namespace if it's shared or `Page` when local, on the left side. On the right side, the icon of the standard action is shown.

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
        <img src={require('./img/compactCard_standardAction1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
    <Column.Item width="49%">
        <img src={require('./img/compactCard_standardAction2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

However, in specific cases, there may be minor differences in the display. For instance, in the case of the standard `Copy` action, the right side, instead of showing the icon of the standard action, displays the targeted qodlysource where the copying is intended.

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
        <img src={require('./img/compactCard_standardAction3.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
    <Column.Item width="49%">
        <img src={require('./img/compactCard_standardAction4.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

### Navigation Action

For events bound to Navigation actions, the collapsed card displays only the targeted Page on the left side, with the icon of the transition method on the right side.

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
        <img src={require('./img/compactCard_navigationAction1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
    <Column.Item width="49%">
        <img src={require('./img/compactCard_navigationAction2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

### Class Functions

For events bound to Class functions, the collapsed card displays the function signature, including its name, parameters with filled values, and the returned result. The keyword displayed in the event card varies depending on the type:

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
        <ul>
            <li>Exposed <a href="../../../orda/data-model#datastoreimplementation-class">datastore class functions</a> distinguishable by the keyword <code>Datastore</code>.</li>
        </ul>
    </Column.Item>
    <Column.Item width="49%">
        <img src={require('./img/keyword_Datastore.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
        <ul>
            <li>Exposed <a href="../../../orda/data-model#dataclass-class">dataclass class functions</a> distinguishable by the keyword <code>Dataclass Name</code>.</li>
        </ul>
    </Column.Item>
    <Column.Item width="49%">
        <img src={require('./img/keyword_Dataclass.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
        <ul>
            <li>Exposed <a href="../../../orda/data-model#entity-class">entity class functions</a> and <a href="../../../orda/data-model#entityselection-class">entity selection class functions</a>, distinguished by the <code>Namespace Of Qodly Source</code> keyword, encompass shared functions when these entities serve as shared qodlysources.</li>
        </ul>
    </Column.Item>
    <Column.Item width="49%">
        <img src={require('./img/keyword_Namespace.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
        <ul>
            <li>Exposed <a href="../../../language/basics/lang-classes#singleton-classes">singleton class functions</a>, distinguished by the <code>Page</code> keyword.</li>
        </ul>
    </Column.Item>
    <Column.Item width="49%">
        <img src={require('./img/keyword_page.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


### Dialog

For events bound to Dialogs, the collapsed card displays the action type name, followed by the dialog name involved.

<Column.List align="center" justifyContent="between">
    <Column.Item width="50%">
        <img src={require('./img/compactCard_dialog1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
    <Column.Item width="49%">
        <img src={require('./img/compactCard_dialog2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

## Reload Event Function Prototype

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        When you make modifications to the function prototype in the code editor, such as adding or removing parameters or changing their types, and you want these changes to be applied to the Function event card, you can easily do so by clicking the reload button. Qodly will then re-parse the function prototype to reflect the updated information while preserving the already assigned qodlysources as parameters.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/refreshFunction.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

## Chaining actions

In event coordination, actions are linked together sequentially. Pay attention to the alignment of each action with its predecessor, contributing to the overall flow and effectiveness of the process.


## Preview Section

In the preview section, various capabilities are available when actions are bound to a specific event, depending on the type of action. It's worth mentioning that standard actions have no effect in this context.

- <Column.List align="center" justifyContent="between">
    <Column.Item width="40%">
        <strong>Preview Function Code</strong>: Selecting a function bound to a particular event allows you to preview its content within the preview section.
    </Column.Item>
    <Column.Item width="55%">
        <img src={require('./img/preview_previewFunctionCode.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<br/>

- <Column.List align="center" justifyContent="between">
    <Column.Item width="40%">
        <strong>Edit Function Code</strong>: To directly open and edit a function associated with a specific event, simply select the function and click on the function edit icon <img src={require('./img/preview_edit.png').default} style={{borderRadius: '6px', width: '7%'}} />.
    </Column.Item>
    <Column.Item width="55%">
        <img src={require('./img/preview_EditFunctionCode.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<br/>

- **Open Linked Page**: When dealing with a navigation action bound to a specific event, selecting it allows you to access and open the Page associated with that event, using the same icon <img src={require('./img/preview_edit.png').default} style={{borderRadius: '6px', width: '3%'}} />.
    <img src={require('./img/preview_OpenLinkedPage.png').default} style={{borderRadius: '6px'}} />
