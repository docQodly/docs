---
id: events
title: Events
---
import Column from '@site/src/components/Column'

Events serve as a mechanism for initiating specific actions, often employed to trigger particular behaviors. They collaborate with various actions to establish dynamic interactions within an application.

For instance, when a user interacts with a webpage by clicking a button, you have the flexibility to determine the response, whether it involves invoking a function or opening another webpage. Furthermore, events can be activated in response to [updates in a datasource](#datasource-events).

Within Qodly Studio, events play a pivotal role in executing code on the Qodly web server, without requiring any supplementary JavaScript.



## Types of Events

Events can be set to trigger either when end-users perform specific actions or when datasources are updated.

### User events

You can configure events to activate in response to specific actions performed by end-users, such as clicking buttons, moving the mouse cursor, and more. 

Typical user events include `On Click`, `On DblClick`, `On MouseEnter`, `On Keyup`, and others. The available events may vary depending on the selected component, and detailed documentation can be found in the **Triggers and Events section** on [each component's page](create-webform.md).

### Datasource events

Besides events triggered by end-user actions, events can also be automated to respond when datasources undergo changes. The primary event for datasources is the `On Change` event.

When the `On Change` event is linked to a datasource, it will trigger in the following scenarios:

|Trigger|Description|
|---|---|
|Datasource|<li>The reference pointed to by the datasource changes in the web browser (not on the server)</li><li>The entity is [touched](../../language/EntityClass.md#touched)</li>|
|Entity datasource|The contents of the entity attribute change|
|Entity selection datasource| <li>The reference pointed by the datasource changes in the web browser (not on the server)</li><li>An entity is added to the entity selection</li>|
|Scalar datasource|The contents of the scalar datasource change|

## Managing events

The Contextual panel facilitates the association of class functions, navigation actions, and standard actions with distinct events within your application.

### Adding an Event

To bind class functions, navigation actions or standard actions with events, follow these steps:

- **Select a Component or Datasource**: Begin by choosing the component or datasource to which you want to attach an event. This selection can be made using the canvas, the [outline](./create-webform.md#outline), or, in the case of datasources, either the [shared datasources](datasources.md#from-a-namespace) area or the [local datasources](datasources.md#from-this-webform) area.

- **Expand the Contextual Panel**: Once your selection is made, expand the `Contextual panel` <img alt="explorer" src={require('./img/events_contextualPanel.png').default} style={{borderRadius: '6px', width: '20%'}} />. It will provide you with a list of compatible events specifically tailored to your chosen component or datasource. 


- **Bind the Desired Action to the Event**: Next, select the type of action <img alt="explorer" src={require('./img/events_actions.png').default} style={{borderRadius: '6px', width: '10%'}} /> you wish to bind to the event. You have three options:

    - **Standard Action**: Configure automatic actions on datasources, such as create, save, drop, or order by, without the need for coding.
    - **Navigation Action**: Set up actions related to navigation within the application, such as opening another page or redirecting to an external URL.
    - **Class Function**: Use a custom function to handle the event.

- **Action Bound to Event**: In the list of available events, you will notice a purple bullet <img alt="explorer" src={require('./img/events_purpleBullet.png').default} style={{borderRadius: '6px', width: '20%'}} /> displayed on the left side of events that have already been configured (if any).


- **Configure Event Properties**: Complete the remaining steps specific to each action type, as detailed in the respective sections within the [Configuring Events](#configuring-events) section.

:::tip
You can define different actions for the same event.
:::


### Removing an Event

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        To remove a defined action, simply click on the trash icon <img alt="explorer" src={require('./img/trash.png').default} style={{borderRadius: '6px', width: '5%'}} /> located within the event box. This action will result in the removal of the event that is bound to an action.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/events_deleteEvent.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### Toggling Event Execution

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        To manage whether an event should execute during rendering, you can toggle its execution status using the toggle icon <img alt="explorer" src={require('./img/toggle.png').default} style={{borderRadius: '6px', width: '7%'}} />. This allows you to enable or disable the event as needed to meet your specific requirements.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/events_toggleExecution.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

This feature is valuable for scenarios like debugging or temporarily pausing specific event executions without removing them from your application entirely.

### Chaining actions

Keep in mind that:

:::tip 
In event coordination, actions are linked together sequentially. Pay attention to the alignment of each action with its predecessor, contributing to the overall flow and effectiveness of the process.
:::

## Configuring events

The Contextual panel facilitates the association of class functions, navigation actions, and standard actions with distinct events within your application.

### Bind Standard Actions to Events

Standard actions apply to datasources, and their availability depends on the type of datasource. Datasources can be categorized into three types: Entity, Entity Selection, and Scalar. To bind standard actions with events, follow these steps:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <strong>Select and Assign</strong>: Choose a component or datasource to access compatible events in the Contextual panel. Then, assign a standard action to your desired event by clicking <code>Add a Standard Action</code>.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/contextualPanel_addStandardActionEvent.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- **Define Action**: In the designated Action area, provide the name of the `datasource`, thus unveiling its inherent capabilities. The available actions vary, contingent on the type of datasource:

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            For <strong>Scalar datasources</strong>: offer the ability either copy its content into another datasrouce of the same type or clear its content.
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/contextualPanel_scalarDatasourcesStandardActions.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            For <strong>Entity selections</strong>: offer the ability to arrange and choose attributes for sorting. You can query, refresh, load all entities of a particular data class, and create new empty selections.
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/contextualPanel_entitySelectionStandardActions.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
           For <strong>Entities from Entity Selections Datasources</strong>: you can create new ones, save them, reload them, or even drop them. You have the ability to navigate through the entity selection, traversing to the first, previous, next, or last entity.
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/contextualPanel_entityStandardActions.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            While <strong>Independently Created Standalone Entities</strong>: permits only direct actions like create, remove, or reload, as navigation actions are not applicable in this context, with the possibility to even clear it.
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/contextualPanel_entityStandaloneStandardActions.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

<br />

:::info
[Entities originating from an entity selection datasource](datasources.md#standalone-entity-vs-entity-from-es) enable iterative navigation within the selection, while [Independently Created Standalone Entities](datasources.md#standalone-entity-vs-entity-from-es) are generated independently and lack any selection affiliation.
:::

<br />

- **Provide Feedback**: Enable the <code>Provide Feedback</code> checkbox to customize the handling of unexpected error messages, determining what will be displayed to end users. For more detailed information, refer to the <a href="#providing-feedback">Provide Feedback</a> section. Here, you have the ability to:

    <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            <ul>
                <li>Provide simple UI feedback on a <code>Save</code>, <code>Reload</code>, or <code>Drop</code> standard action on an entity.</li><br/>
                <li>Provide simple UI feedback on a <code>Reload</code>, <code>Order by</code>, or <code>Query</code> standard action on an EntitySelection.</li>
            </ul>
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/contextualPanel_provideFeedbackStandardAction.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

<br />


Here's an overview of available standard actions:

|Datasource type|Action|Description|
|---|---|---|
|Entity|Create a new entity| Generate a new entity from the corresponding dataclass|
||Save the entity|Save the entity on the server|
||Reload|Reload entity values from the server|
||Drop|Delete the entity on the server|
||Copy|Copy the entity to a target entity datasource|
||Clear|Put `null` in the datasource. If the datasource is the selected element of a component (Matrix, Select box, Datatable), clearing the datasource also unselects the selected element|
||First (*)| Navigate to the first entity within the entity selection|
||Previous (*)|Move to the previous entity within the entity selection|
||Next (*)|Advance to the next entity within the entity selection|
||Last (*)|Navigate to the last entity within the entity selection|
|Entity selection|Order By|Specify one or more attributes to sort and select direction|
||Query|The query is provided as a string and supports the same syntax as an [ORDA query](../../orda/queries.md), except for formula (`eval`) and the `settings` object. Placeholders can be used with datasources or data as-is|
||Reload|Reload the entire entity selection from the server|
||All|Load all entities of the same dataclass|
||Clear|Remove any content and create a new, empty selection of the same dataclass|
||Copy|Copy the entity selection to a target entity selection datasource|
|Scalar|Copy|Copy the content of the datasource to a target datasource|
||Clear|Erase the content within the datasource|

(*) Only available for Entities from Entity Selection Datasources.


### Bind Navigation Actions to Events

Navigation actions allow you to navigate to a target webform. To bind navigation actions with events, follow these steps:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <strong>Select and Assign</strong>: Choose a component or datasource to access compatible events in the Contextual panel. Then, assign a navigation action to your desired event by clicking <code>Add a Navigation Action</code>.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/contextualPanel_addNavigationEvent.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- **Explore Target Webforms**: Navigate through the available selection of target webforms, each representing a distinct destination for navigation actions.

- **Define Transition Method**: Define the approach through which the target webform will be presented based on the following options:

    <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
            <ul>
                <li> <code>New Tab</code>: Induce the opening of a new browser tab.</li>
                <li> <code>Current Tab</code>: Replace the ongoing browser tab with the chosen webform.</li>
                <li> <code>Webform Loader</code>: Access the intended webform through a dedicated <a href="components/webformloader">Webform loader</a>.</li>
                <li> <code>Webform Loader (Self)</code>: Reveals content within the existing <a href="components/webformloader">Webform loader</a></li>.
            </ul>
        </Column.Item>
        <Column.Item width="35%">
            <img alt="explorer" src={require('./img/contextualPanel_navigationAction.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>
 
Please be aware that:

:::tip 
The feature for providing feedback is not applicable in the context of navigation events. This implies that users will not have the option to provide feedback regarding their navigation experience.
:::


### Bind Class Functions to Events

Data model class functions can be linked to events, utilizing parameters from datasources or static values, with the option to assign the result to a datasource as needed. To bind class functions with events, follow these steps:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <strong>Select and Assign</strong>: Choose a component or datasource to access compatible events in the Contextual panel. Then, assign a class function to your desired event by clicking <code>Add a Function Event</code>.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/contextualPanel_addFuctionEvent.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <strong>Select a Function</strong>: Browse through the list of available functions. Choose a suitable class function like <code>onLoad</code> and store the returned result in a local or shared datasource, such as <code>user</code> datasource. <br/><br/>
        You can link the following class functions to events:
        <ul>
            <li>Exposed <a href="../../orda/data-model#datastoreimplementation-class">datastore class functions</a></li>
            <li>Exposed <a href="../../orda/data-model#dataclass-class">dataclass class functions</a></li>
            <li>Exposed <a href="../../orda/data-model#entity-class">entity class functions</a> and <a href="../../orda/data-model#entityselection-class">entity selection class functions</a></li>
        </ul>
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/contextualPanel_classFunctionWithoutParams.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br/>

- **Pass Parameters**: After selecting a class function, Qodly Studio automatically parses it, extracting its declared prototype. This allows you to visualize and configure its parameter(s) and return value. You can enhance the functionality of class functions by configuring parameters in two ways using the toggle <img alt="explorer" src={require('./img/datasourceToggle.png').default} style={{borderRadius: '6px', width:'5%'}} /> to define how the function parameter(s) should be filled:

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            <img alt="explorer" src={require('./img/toggleHardCodedValue.png').default} style={{borderRadius: '66px', width:'10%'}} /> <strong>Hardcoded values</strong>: Provide various types of values directly to the class function as parameters by selecting the type through the value icon <img alt="explorer" src={require('./img/hardcodedValueTyoe.png').default} style={{borderRadius: '6px', width:'5%'}} />. Whether it's a string, number, boolean, or any other supported data type, simply choose the desired type from the dropdown list ensuring compatibility with the expected parameter type for precise and accurate results.
        </Column.Item>
        <Column.Item width="42%">
            <img alt="explorer" src={require('./img/contextualPanel_classFunctionWithValuesParams.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

    The following types are supported as hard-coded values:
    <table>
        <thead>
            <tr> <th>Type</th> <th>Description</th> <th>Example</th> </tr>
        </thead>
        <tbody>
            <tr> <td>String</td> <td>Any string value</td> <td>Hello World</td> </tr>
            <tr> <td>Object</td> <td>JSON syntax</td> <td>&#123;"age": 12, "name": "Smith"&#125;</td> </tr>
            <tr> <td>Array</td> <td>Collection of values</td> <td>[10, 20, 30]</td> </tr>
            <tr> <td>Number</td> <td>Any numeric value</td> <td>42</td> </tr>
            <tr> <td>Date</td> <td>A short-format date</td> <td>20/12/2024</td> </tr>
            <tr> <td>Boolean</td> <td>True or False</td> <td>False</td> </tr>
        </tbody>
    </table>

    <br />

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            <img alt="explorer" src={require('./img/toggleDatasource.png').default} style={{borderRadius: '66px', width:'10%'}} /> <strong>Datasources</strong>: Pass <a href="datasources#webform-datasources">local</a> or <a href="datasources#shared-datasources">shared datasources</a> as parameters to the class function. The scope of the datasource is indicated by a name tag. If the tag reads <code>webform</code>, it signifies a local datasource visible only within the current webform. On the other hand, if there is a tag with a specific name <code>shared</code>, it implies that you have passed a shared datasource belonging to a namespace. <br/>
            Make sure the datasource value is of the same type as expected for the parameter by the function, otherwise an error will be returned.
        </Column.Item>
        <Column.Item width="42%">
            <img alt="explorer" src={require('./img/contextualPanel_classFunctionWithDatasourcesParams.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

- **Selecting a Datasource for the returned result**: In the return parameter section, choose a datasource to store the function's returned result. <br/>
    <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            <ul>
                <li>If your class function defines a specific name for the result, that name will be displayed in the label within the return parameter section. For example, if you have a function like <code> exposed function toggleComponent() -> isComponentVisible: boolean</code>, the result label would be <code>isComponentVisible</code>.</li> <br/>
                <li>However, if your class function does not specify a result name, the default label <code>$0</code> will be used in the return parameter section.</li>
            </ul>
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/returnValue_$0.png').default} style={{borderRadius: '6px'}} />
            <br/><br/><br/><br/><br/>
            <img alt="explorer" src={require('./img/returnValue_named.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

<br/>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
		<strong>Provide Feedback</strong>: Enable the <code>Provide Feedback</code> checkbox to display backend feedback on the user interface. For more detailed information, refer to the <a href="#providing-feedback">Provide Feedback</a> section. 
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/contextualPanel_provideFeedback.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


On top of that:

:::tip 
A single class function can be utilized across multiple events, allowing you to assign multiple events to a single function and observe a coordinated sequence of actions taking place.
:::


### Navigate to External Links

In addition to navigating to webforms, Qodly Studio offers a convenient way to direct users to external links. The process follows the same steps as outlined for [associating navigation actions with events](#bind-navigation-actions-to-events), with a slight variation in the "Select Target" step:


<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Select Target</strong>: Paste the desired external link URL into the "Select Target" field.</li>
            <br/>
            <li><strong>Choose External Link</strong>: Within the "Select Target" field's dropdown list, select <code>External Link</code>.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
		<img alt="explorer" src={require('./img/externalLink.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        <ul>
            <li><strong>Define Transition Method</strong>: Similar to configuring webform navigation, you can specify how the external link will be presented. However, for external links, you have two options:</li>
            <br/>
            <ul>
                <li><strong>New Tab</strong>: Induce the opening of a new browser tab.</li>
                <br/>
                <li><strong>Current Tab</strong>: Replace the ongoing browser tab with the chosen external link.</li>
            </ul>
        </ul>
    </Column.Item>
    <Column.Item width="35%">
        <img alt="explorer" src={require('./img/externalLink2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>
 


### Navigate to Shared Folder Content

Accessing content stored in the **Shared** folder follows a process similar to [navigating to external links](#navigate-to-external-links). You have the option to display items from this folder, like images, in either a new tab or the current tab by specifying the image path (e.g., `/$shared/visuals/banner.png`) in the "Select Target" field. Ensure that the path begins with `/$shared`.

:::tip 
When the path points to a file, it doesn't open it in a new tab but instead initiates a download.
:::


## Providing feedback

To provide feedback within the user interface, enable the `Provide Feedback` checkbox. This feature allows the backend to communicate with the user by displaying relevant messages regarding the outcomes of different functions or standard actions. 

:::info 
Importantly, this customized feedback aligns with the application's business rules and does not disrupt the application's navigation flow.
:::

### Toast Notifications

When the `Provide Feedback` checkbox is enabled, it introduces a **hidden internal feedback element** into the web page, known as a **toast** notification. This element automatically showcases messages generated by the application code in response to events, using [dedicated webForm functions](../../language/WebFormClass.md). 


:::info 
If this feature is not enabled, feedback sent from the backend through the use of the [dedicated webForm functions](../../language/WebFormClass.md) will not be displayed within the user interface.
:::

### Control of Feedback Display

The `Provide Feedback` checkbox offers manual control over the display of feedback messages when executing a specific function. This manual control is designed to determine when to provide and display feedback, ensuring that messages precisely align with the specific needs of the user and the context.

For example, in the context of a technical document, regular users may require feedback messages to stay informed about the status of their requests, such as waiting for admin approval. However, administrators using a different interface to make modifications to the same technical document, which invokes the same function, might not need to receive the same message due to their administrative roles.


### Three Tiers of Feedback

Three tiers of feedback are accessible and will be displayed as colored **toasts**:

- [`setMessage()`](../../language/WebFormClass.md#setmessage): Dispatches informative messages. <img alt="explorer" src={require('./img/message-info.png').default} style={{borderRadius: '6px', height: '20%', width: '20%'}} />

- [`setWarning()`](../../language/WebFormClass.md#setwarning): Sends out cautionary messages. <img alt="explorer" src={require('./img/message-warning.png').default} style={{borderRadius: '6px', height: '20%', width: '20%'}} />

- [`setError()`](../../language/WebFormClass.md#seterror): Issues error messages. <img alt="explorer" src={require('./img/message-error.png').default} style={{borderRadius: '6px', height: '18%', width: '18%'}} />

<br/>

:::info 
The time these **toast notifications** remain visible is typically managed by Qodly Studio's internal logic. They will automatically disappear after a preset **5-second** period. Users can also manually dismiss them by clicking on the `x` icon.
:::


## Example of datasource events

In this scenario: 

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        &nbsp; &bull; The Employee <a href="./components/datatable">Datatable component</a> displays a list of employees, utilizing an entity selection (bound to the <code>employees</code> catalog datasource). <br/><br/>
        &nbsp; &bull; The "General statistics/Detailed statistics" <a href="./components/radio">Radio component</a> is linked to the <code>choice</code> webform datasource.<br/><br/>
        &nbsp; &bull; Buttons are bound to standard actions that perform queries on the <code>employee</code> datasource (e.g., "salary &lt; 23000").<br/><br/>
        &nbsp; &bull; An <code>on Change</code> event is assigned to both the <code>employees</code> and <code>choice</code> datasources. These events call the same function from the <code>EmployeeSelection</code> class, named <code>statistics</code>.<br/><br/>
        &nbsp; &bull; For simplicity, the <code>statistics</code> scalar datasource (object) is visualized as a <a href="./components/text">Text component</a>
    </Column.Item>
    <Column.Item width="40%">
        <img alt="explorer" src={require('./img/event-datasource.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<br/>

When a button is clicked or a radio button is selected, the `employees` datasource updates, prompting the `on Change` event. This function receives the value of the **choice** datasource as a parameter and produces general or detailed statistics as an object based on the parameter value.

![event-datasource-event](img/event-datasource-event.png)

Here's what you obtain after the button is clicked:

![event-datasource-result](img/event-datasource-result.png)





