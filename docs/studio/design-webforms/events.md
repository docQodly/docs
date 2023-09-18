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

You can configure events to activate in response to specific actions carried out by end-users, like clicking buttons.

### Datasource events

In addition to events triggered by end-user actions, events can also be automated to respond when datasources undergo changes. The primary event available for datasources is the `On Change` event.

The `On Change` event, when attached to a datasource, triggers in the following cases:

|Trigger|Description|
|---|---|
|Datasource|<li>The reference pointed to by the datasource changes in the web browser (not on the server)</li><li>The entity is [touched](../../language/EntityClass.md#touched)</li>|
|Entity attribute|The contents of the entity attribute change|
|Scalar datasource|The contents of the scalar datasource change|
|Entity selection datasource| <li>The reference pointed by the datasource changes in the web browser (not on the server)</li><li>An entity is added to the entity selection</li>|


## Configuring an event

The Contextual panel facilitates the association of class functions, navigation actions, and standard actions with distinct events within your application. To streamline the configuration of event actions, refer to the subsequent guidelines:

### Bind Class Functions to Events

To associate class functions with events, follow these steps:

- **Select a component or a datasource**: The Contextual panel will present you with a list of compatible events tailored to your selection.

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <span style={{fontWeight: 'bold'}}>Add a Function Event</span>: Click on <code>Add a Function Event</code> to assign a class function to a desired event.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/contextualPanel_addFuctionEvent.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <span style={{fontWeight: 'bold'}}>Select a Function</span>: Browse through the list of available functions. Choose a suitable class function like <code>onLoad</code> which perform various setup actions and user interface adjustments when an employee logs into the system. This data can then be stored in a local or shared datasource, such as the <code>user</code> datasource.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/contextualPanel_classFunctionWithoutParams.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- **Pass Parameters**: You can expand the capabilities of class functions by passing parameters in two ways:

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            <span style={{fontWeight: 'bold'}}>Values</span>: Provide different types of values directly to the class function as parameters. Whether it's a string, number, boolean, or any other supported data type, simply select the desired type from the dropdown list, and your class function will receive the value with precision and accuracy.
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/contextualPanel_classFunctionWithValuesParams.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

    <br />

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            <span style={{fontWeight: 'bold'}}>Datasources</span>: Pass local or shared datasources as parameters to the class function. The scope of the datasource is indicated by a name tag. If the tag reads <code>webform</code>, it signifies a local datasource visible only within the current webform. On the other hand, if there is a tag with a specific name <code>shared</code>, it implies that you have passed a shared datasource belonging to a namespace. These shared variables can be accessed and utilized across multiple webforms, ensuring consistent states and data sharing.
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/contextualPanel_classFunctionWithDatasourcesParams.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>



- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
		<span style={{fontWeight: 'bold'}}>Provide Feedback</span>: Enable the <code>Provide Feedback</code> checkbox to display backend feedback on the user interface. For more detailed information, refer to the <a href="#provide-feedback">Provide Feedback</a> section. 
	</Column.Item>
	<Column.Item width="35%">
		<img alt="explorer" src={require('./img/contextualPanel_provideFeedback.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


On top of that:

:::tip 
A single class function can be utilized across multiple events, allowing you to assign multiple events to a single function and observe a coordinated sequence of actions taking place.
:::

### Bind Navigation Actions to Events

To associate navigation actions with events, follow these steps:

- **Select a component or a datasource**: The Contextual panel will present you with a list of compatible events tailored to your selection.

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <span style={{fontWeight: 'bold'}}>Add a Navigation Event</span>: Click on <code>Add a Navigation Event</code> to assign a navigation action to a desired event.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/contextualPanel_addNavigationEvent.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- **Explore Target Webforms**: Navigate through the available selection of target webforms, each representing a distinct destination for navigation actions.

- **Define Transition Method**: Define the approach through which the target webform will be presented based on the following options:

    <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
                - <code>New Tab</code>: Induce the opening of a new browser tab.<br />
                - <code>Current Tab</code>: Replace the ongoing browser tab with the chosen webform.<br />
                - <code>Webform Loader</code>: Access the intended webform through a dedicated <a href="components/webformloader">Webform loader</a>.<br />
                - <code>Webform Loader (Self)</code>: Reveals content within the existing <a href="components/webformloader">Webform loader</a>.
        </Column.Item>
        <Column.Item width="35%">
            <img alt="explorer" src={require('./img/contextualPanel_navigationAction.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>
 
Please be aware that:

:::tip 
The feature for providing feedback is not applicable in the context of navigation events. This implies that users will not have the option to provide feedback regarding their navigation experience.
:::


### Bind Standard Actions to Events

To link standard actions with events, follow these steps:

- **Select a component or a datasource**: The Contextual panel will present you with a list of compatible events tailored to your selection. 

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <span style={{fontWeight: 'bold'}}>Standard Actions</span>: Click on <code>Add a Standard Action</code> to assign a standard action to a desired event.
	</Column.Item>
	<Column.Item width="40%">
		<img alt="explorer" src={require('./img/contextualPanel_addStandardActionEvent.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- **Define Action**: In the designated Action area, provide the name of the datasource, thus unveiling its inherent capabilities. The available actions vary, contingent on the type of datasource:

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
           For <span style={{fontWeight: 'bold'}}>Entities</span>: you can create new ones, save them, reload them, or even drop them. You have the ability to navigate through the entity selection, traversing to the first, previous, next, or last entity.
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/contextualPanel_entityStandardActions.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

    <br />

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            While <span style={{fontWeight: 'bold'}}>Entity selections</span>: offer the ability to arrange and choose attributes for sorting. You can query, refresh, load all entities of a particular data class, and create new empty selections.
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/contextualPanel_entitySelectionStandardActions.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

- **Provide Feedback**: Enable the <code>Provide Feedback</code> checkbox to customize the handling of unexpected error messages, determining what will be displayed to end users. For more detailed information, refer to the <a href="#provide-feedback">Provide Feedback</a> section. Here, you have the ability to:

    <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
            - Provide simple UI feedback on a Save, Reload, or Drop standard action on an entity.<br /><br />
            - Provide simple UI feedback on a Reload, Order by, or Query standard action on an EntitySelection.
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/contextualPanel_provideFeedbackStandardAction.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>


###  List of standard actions

Depending on the type of datasource, the following standard actions are accessible:

|Datasource type|Action|Description|
|---|---|---|
|Entity|New| Generate a new entity from the corresponding dataclass|
||Save|Save the entity|
||Refresh|Reload entity values from the server|
||Remove|Delete the entity|
||First|Navigate to the first entity within the entity selection|
||Previous|Move to the previous entity within the entity selection|
||Next|Advance to the next entity within the entity selection|
||Last|Navigate to the last entity within the entity selection|
|Entity selection|Order By|Specify multiple attributes to sort and select direction|
||Query|The query is provided as a string and supports the same syntax as an [ORDA query](https://developer.4d.com/docs/API/DataClassClass#query), except for formula (eval) and the settings object. Placeholders can be used with datasources or data as-is|
||Refresh|Reload the entire entity selection from the server|
||All|Load all entities of the same dataclass|
||Empty|Create a new, empty selection of the same dataclass|


### Chaining actions

Keep in mind that:

:::tip 
In event coordination, actions are linked together sequentially. Pay attention to the alignment of each action with its predecessor, contributing to the overall flow and effectiveness of the process.
:::

## Provide feedback

Enable the `Provide Feedback` checkbox to exhibit backend feedback on the user interface. This functionality informs users about function outcomes. By integrating the .setMessage() function within the backend logic, developers can display messages corresponding to successful, cautionary, or erroneous scenarios. This tailored feedback is aligned with the application's business rules and doesn't interfere with the application's navigation flow.


Once activated for a function event, a concealed internal feedback element is introduced to the webform. This element automatically showcases messages dispatched by the application code as responses to events using [dedicated webForm functions](../../language/WebForm.md#webform-class). 

Three tiers of feedback are accessible and will be displayed as colored "toasts":

- [`setMessage()`](../../language/WebForm.md#setmessage): Dispatches informative messages. <img alt="explorer" src={require('./img/message-info.png').default} style={{borderRadius: '6px', height: '20%', width: '20%'}} />

- [`setWarning()`](../../language/WebForm.md#setwarning): Sends out cautionary messages. <img alt="explorer" src={require('./img/message-warning.png').default} style={{borderRadius: '6px', height: '20%', width: '20%'}} />

- [`setError()`](../../language/WebForm.md#seterror): Issues error messages. <img alt="explorer" src={require('./img/message-error.png').default} style={{borderRadius: '6px', height: '18%', width: '18%'}} />

These "toasts" remain visible for 5 seconds and close automatically. Users can also dismiss them by clicking on the **x** icon.


## Examples

### User events 

In this 5-minute video example, the process of creating a "Hello User" scenario is demonstrated. Beginning with a basic database, the tutorial walks through enabling access to the studio, establishing a simple interface, and triggering a search to greet the user by their name.


<iframe width="560" height="315" src="https://www.youtube.com/embed/GwIdic4OhPQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


The objective here is to dynamically update a list of students displayed within a **Matrix** component based on what the end-user enters into an input field.

In the provided scenario:

* The **Input** element is bound to the local datasource `search` (of type Text).
* The **Matrix** component presents a list of students through the `students` datasource, which is an entity selection.

![search](img/search-component.png)

To achieve the display of search results corresponding to the text entered into the **Text Input** component, a `search` function is required to execute a query:

```qs
exposed Function search($search : Text)->$result : cs.StudentsSelection
	
$search:="@"+$search+"@"
	
$result:=This.query("firstname = :1 or lastname = :1"; $search)   
```

An **on Change** event triggers the `search` function, passing the text input from the **Input** element as a parameter. 

![search](img/search-event.png)

This update to the `students` datasource leads to the **Matrix** component reflecting the updated list of students.


### Datasource events 

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





