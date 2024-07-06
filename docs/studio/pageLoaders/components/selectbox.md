---
id: selectbox
title: Select Box
---
import Column from '@site/src/components/Column'


The **Select Box** component is a UI element for item selection from a list of embedded Stylebox components. It streamlines selection through a dropdown-style interface, sourcing display data from a qodlysource and allowing customization with multiple embedded components.

:::info 

Categorized as part of iterative components, the **Select Box** facilitates user selections by iterating over a qodlysource.

:::

<br/>

The **Select Box** component is notable for its capacity to present complex options as a dropdown list using embedded components, distinguishing it from the [**Select Input**](./selectinput.md) component that offers less versatile option displays.
 

## Use Cases

The Select Box component finds application in various scenarios where a single value needs to be selected from a predefined list. Common use cases include:

- **Employee Allocation**: In resource management applications, the Select Box component can assist in assigning employees to projects or tasks by providing a dropdown list of available team members.

- **Task Priority Selection**: When managing tasks within a backoffice application, users might need to assign priorities to tasks. The Select Box component can offer a dropdown list of priority levels, simplifying the process of assigning importance to tasks.

- **Department Selection for Ticketing**: In a support ticketing system, users can choose the department or category to which a ticket belongs. The Select Box component streamlines this process by offering a dropdown menu of available departments, ensuring that tickets are routed to the appropriate team.

## Properties Customization

Enhance the Select Box component to align with your application's requirements using the following customization options:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Placeholder</strong>: Display a text as a dimmed placeholder in the select box.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/selectBox_Placeholder.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Number of items</strong>: Specify the maximum number of items to display simultaneously in the component.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/selectBox_NumberOfItems.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::info 
The select box can display a maximum of 15 items.
:::

<br/>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Show length</strong>: Adds a string indicating the total number of items within the component. You can customize this pattern to suit your requirements, ensuring users have a clear understanding of the available options.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/selectBox_ShowLength.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Enable search</strong>: Adds a search area to the top of the component. This empowers users to filter the displayed options by entering specific characters. Developers have the flexibility to define the qodlysource attribute(s) to be searched within, enhancing the efficiency of option discovery.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/selectBox_EnableSearch.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


## Data Integration

The **Select Box** component is data-bound, meaning it relies on an external qodlysource to populate its options. This allows the component to display and interact with data.

:::info 
The qodlysource for the **Select Box** component can take the form of either an `ORDA entity selection` or a `collection`.
:::

### Data Binding

To associate data with the **Select Box** component, follow these steps:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ol>
            <li value="1"><strong>Navigate to the Properties Panel</strong>: Access the Data Access category located within the Properties panel for the Select Box component.</li> <br/>
			<li value="2"><strong>Define the Qodly Source</strong>: Specify the appropriate qodlysource that contains the data you want to display within the Select Box. For instance, you can select an entity selection, such as the <code>Destination</code> dataclass.</li>
        </ol>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/selectBox_DataBinding.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip 
Alternatively, you can establish the connection by dragging and dropping the qodlysource onto the Select Box component.
:::

### Data Display

To associate data iterated over a qodlysource, you can follow these additional steps:

1. **Access the Select Box**: Within the Select Box component, locate the embedded Stylebox.
2. **Add a Component**: Add a Text component or other relevant components within the Stylebox.
3. **Configure the Component**: Click on the component you've added to enter its editing mode. The process of configuring components varies based on their type:

    a. **Toggle Qodly Source**: Prepare to connect the component to the qodlysource in the next step by using the `Toggle Qodly Source` button.

    b. **Properties Panel**: In the next step, you'll configure them through the `Data Access` category in the Properties panel. 

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ol>
            <li value="4"><strong>Choose the Iterator</strong>: Choose the iterator corresponding to the iterated data (e.g., <code>$This</code>) to represent the current data item.</li> <br/>
			<li value="5"><strong>Choose the Attribute</strong>: Once you've selected the iterator, choose the specific attribute that you want to display within the component. This could be attributes like the name of the destination, the country, or any other relevant information.</li>
        </ol>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/selectBox_DataDisplay.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### Dynamic Attribute Display


<Column.List align="center" justifyContent="between">
	<Column.Item width="65%">
        The <code>Select Box</code> component can link its currently selected entity to a qodlysource in the <code>Selected Element</code> field. This feature allows the component to automatically display the attributes of the selected element whenever a new entity is chosen. 
	</Column.Item>
	<Column.Item width="30%">
        <img src={require('./img/dynamicAttributeDisplay_SelectedElement.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        These attributes can be showcased in other configured components, such as a <code>Text</code> component, to display the corresponding attribute values.
	</Column.Item>
	<Column.Item width="25%">
        <img src={require('./img/dynamicAttributeDisplay_attributeValue.png').default} style={{borderRadius: '6px', width: '100%'}} />
	</Column.Item>
</Column.List>

For more information, see the [Iterative components](../qodlySources.md#iterative-components) section.

### Server-Side Interaction

You can associate functions with embedded components in the **Select Box** component using `$This`. This capability enables the execution of functions from the entity class of the qodlysource that is providing data and being iterated upon in response to event triggers, such as button clicks.

To implement this functionality, follow these steps:

1. Integrate the Select Box component into the interface.
2. Select a qodlysource for the Select Box.
3. Embed a component (e.g., a button) within the Select Box for each iterated data.

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
		<ol start="4">
			<li>Bind the desired function to the component's event, such as a button click, using <code>$This</code>.</li> 
		</ol>
	</Column.Item>
	<Column.Item width="40%">
        <img src={require('./img/selectBox_ServerSideInteraction_RelatedEntity.png').default} style={{borderRadius: '6px', width: '100%'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
		<ol start="5">
			<li>In the code editor, within the function, you can directly retrieve the data of the currently selected element without the need to pass the selected element qodlysource as a parameter to the function.</li> 
		</ol>
	</Column.Item>
	<Column.Item width="40%">
        <img src={require('./img/currrentElem.png').default} style={{borderRadius: '6px', width: '100%'}} />
	</Column.Item>
</Column.List>

## Showcase

Here's a glimpse of how the **Select Box** component will look and behave in action:

<img src={require('./img/selectBox_Preview.gif').default} style={{borderRadius: '6px'}} />


## Triggers and Events

The **Select Box** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Select| Calls for an action when an item within the component is selected. |

