---
id: events
title: Events and standard actions
---

Events are usually used as a means of triggering certain behaviors. They are used in conjunction with different actions to create interactions in an application.

For example, if the user clicks a button on a webpage, you can choose how to react by calling a function or opening another webpage. Events can also be triggered [when a datasource is updated](#datasource-events). 

With Qodly Studio, events are used to execute code on the Qodly web server. No additional Javascript is needed.

## Configuring an event

You can bind your webform events to different actions such as executing a function or navigating to another webform.

### Bind a class function to an event

1. Select a component or a datasource. The Contextual panel displays the events that are compatible with the element you selected.

2. Click a **Add a Function Event** to attach the corresponding event to the component or datasource.

3. Select a function in the list. 

4. Add parameters (datasources or values) and point at a local or remote datasource to update:

    ![search](img/toggle-value.png)

    :::note Tip

    Passing values as parameters lets you test the behavior of a function without creating a datasource.

    :::

A class function can be mapped to several events, and you can assign several events to the same class function.

> When configuring events,the functions that have namespaces displayed next to them are [shared functions](../datasources.md/#shared-functions).

### Bind a navigation action to an event

Inside your application, you can create navigation between pages or update the contents of a page by binding navigation actions to events.

To do this: 

1. Select a component or a datasource and select **Add a Navigation Event** in the Contextual panel.
2. Select a target webform to navigate to.
3. Define where the target webform opens:
    * **New Tab**: Opens in a new browser tab 
    * **Current Tab**: Opens in the current browser tab, replacing the current webform
    * **Webform Loader**: Opens in the selected [Webform loader](../components.md#component-list)
    * **Webform Loader (Self)**: Opens in the current [Webform loader](../components.md#component-list)

![search](img/navigation-event.png)

### Chaining actions

You can attach several events to a component or datasource. 

Events are executed in their defined order. When an event triggers, its actions are executed sequentially. This means that each action starts only when the previous one has finished executing.

## Event types

Events can be set to trigger when end-users perform certain actions or when datasources are updated.

### User events

You can set events to trigger when end-users perform certain actions, such as clicking a button.

#### Example: Hello User

This 5-minute video provides a "Hello User" example. Starting from a simple database, it covers how to enable access to the studio, create a basic interface, and trigger a search to greet the user by their name:

<iframe width="560" height="315" src="https://www.youtube.com/embed/GwIdic4OhPQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Example: Search feature using the `onChange` event

The objective is to update a list of students displayed in a **Matrix** component according to what the end-user types in an input area.

In the image below: 
* The **Input** element is bound to the local datasource `search` (of type Text)
* The **Matrix** component displays a list of students based on the `students` datasource, which is an entity selection

![search](img/search-component.png)

To display results corresponding to the text typed in the **Input** component, we need a `search` function that performs a query:

```qs
exposed Function search($search : Text)->$result : cs.StudentsSelection
	
$search:="@"+$search+"@"
	
$result:=This.query("firstname = :1 or lastname = :1"; $search)   
```

An **onChange** event calls the `search` function and passes the text typed in the **Input** element as a parameter. This updates the `students` datasource:

![search](img/search-event.png)

Now everytime the text changes inside the **Input** element, a query is sent and the list of students displayed in the **Matrix** component is updated.

### Datasource events

Aside from events triggered by end-user actions, events can trigger automatically when datasources are updated.

For a list of datasource events, see [List of available events](#list-of-datasource-events).

#### Example - Updating an entity selection

In the image below: 

* The employee [Datatable component](components.md#datatable) displays a list of employees, based on an entity selection (the *employees* catalog datasource is attached).
* The "General statistics/Detailed statistics" [radio component](components.md#radio) is bound to the *choice* webfom datasource. 
* Buttons are bound to standard actions that execute queries on the employee datasource (e.g. "salary < 23000").
* An `onChange` event is attached to the `employees` datasource and another `onChange` event is attached to the `choice` datasource. Both events call the same function from the `EmployeeSelection` class, named *statistics*.
* For simplicity, the "statistics" scalar datasource (object) is displayed as a [Text component](components.md#text).

![event-datasource](img/event-datasource.png)

When the user clicks a button or select a radio button, the `employees` datasource is updated, triggering the `onChange` event. This function takes the value of the *choice* datasource as parameter, and returns general or detailed statistics as an object depending on the parameter value.  

![event-datasource-event](img/event-datasource-event.png)

Here's what you obtain after the button is clicked:

![event-datasource-result](img/event-datasource-result.png)

### List of datasource events  

### On Change

An `On Change` event attached a datasource triggers in the following cases:

|Trigger|Description|
|---|---|
|Datasource|<ul><li>The reference pointed by the datasource changes in the web browser (not on the server)</li><li>The entity is [touched](https://developer.4d.com/docs/en/API/EntityClass.html#touched)</li></ul>|
|Entity attribute|The contents of the entity attribute change|
|Scalar datasource|The contents of the scalar datasource change|
|Entity selection datasource| <li>The reference pointed by the datasource changes in the web browser (not on the server)</li><li>An entity is added to the entity selection</li>|


### Provide feedback

This selector allows you to provide customized feedback to the user for any function events. This feedback is related to the business rules of the application, they do not interact with the application navigation flow. 

When the selector is enabled for a function event, an internal hidden feedback element is added to the web form. This element will automatically display messages sent by the application code as a response to the event using [dedicated `webForm` functions](../language/WebForm.md#webform-class). 

Three levels of feedbacks are available, and will be displayed as colored "toasts":

- [`setMessage()`](../../language/WebForm.md#setmessage), to send information messages
![feedback-info](img/message-info.png)

- [`setWarning()`](../../language/WebForm.md#setwarning), to send warning messages
![feedback-warning](img/message-warning.png)

- [`setError()`](../../language/WebForm.md#seterror), to send error messages
![feedback-error](img/message-error.png)

Toasts are displayed during 5 seconds and are automatically closed. They can also be closed by the user with a click on the **x**.


 
## Standard actions

You can define standard actions to apply to datasources in response to specific events. Available actions depend on the datasource kind.
For example, you can associate the **Order By** action to an entity selection datasource, or the **Save** action to an entity datasource.

To attach a standard action to the selected component:

1. Select an event.
2. In the Action area, enter the datasource name.
3. Click on the desired standard action icon.

![datasource-action](img/datasource-action.png)


### List of standard actions

The following standard actions are available, depending on the datasource kind:

|Datasource kind|Action|Description|
|---|---|---|
|Entity|New|Creates a new entity from the same dataclass|
||Save|Saves the entity|
||Refresh|Reloads the entity values from the server|
||Remove|Deletes the entity|
||First|Goes to the first entity of the entity selection. Available if the entity belongs to an entity selection|
||Previous|Goes to the previous entity in the entity selection. Available if the entity belongs to an entity selection|
||Next|Goes to the next entity in the entity selection. Available if the entity belongs to an entity selection|
||Last|Goes to the last entity of the entity selection. Available if the entity belongs to an entity selection|
|Entity selection|Order By|You can enter several attributes to sort and select direction|
||Query|The query is given as a string and supports the same syntax as an [ORDA query](https://developer.4d.com/docs/API/DataClassClass#query) except the use of formula (eval) and the settings object. Placeholders can be given with datasources or data as is|
||Refresh|Reloads the whole entity selection from the server|
||All|Loads all the entities of the same dataclass|
||Empty|Creates a new, empty selection of the same dataclass|


