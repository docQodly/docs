---
id: selectbox
title: Select Box
---
import Column from '@site/src/components/Column'


The **Select Box** component is a UI element for item selection from a list of embedded Stylebox components. It streamlines selection through a dropdown-style interface, sourcing display data from a Qodly Source and allowing customization with multiple embedded components.

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

The **Select Box** component is data-bound, meaning it relies on an external Qodly Source to populate its options. This allows the component to display and interact with data.

:::info 
The qodlysource for the **Select Box** component can take the form of either an `ORDA entity selection` or a `collection`.
:::

### Data Binding

To associate data with the **Select Box** component, follow these steps:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ol>
            <li value="1"><strong>Navigate to the Properties Panel</strong>: Access the Data Access category located within the Properties panel for the Select Box component.<br/></li>
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

To associate data iterated over a Qodly Source, you can follow these additional steps:

1. **Access the Select Box**: Within the Select Box component, locate the embedded Stylebox.
2. **Add a Component**: Add a Text component or other relevant components within the Stylebox.
3. **Configure the Component**: Click on the component you've added to enter its editing mode. The process of configuring components varies based on their type:

    a. **Toggle Qodly Source**: Prepare to connect the component to the qodlysource in the next step by using the `Toggle Qodly Source` button.

    b. **Properties Panel**: In the next step, you'll configure them through the `Data Access` category in the Properties panel. 

<Column.List align="center" justifyContent="between">
	<Column.Item width="50%">
        <ol>
            <li value="4"><strong>Choose the Iterator</strong>: Choose the iterator corresponding to the iterated data (e.g., <code>$This</code>) to represent the current data item.<br/></li>
			<li value="5"><strong>Choose the Attribute</strong>: Once you've selected the iterator, choose the specific attribute that you want to display within the component. This could be attributes like the name of the destination, the country, or any other relevant information.</li>
        </ol>
	</Column.Item>
	<Column.Item width="45%">
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
2. Select a Qodly Source for the Select Box.
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

## Customizing Select Box Styles

The **Select Box** component offers additional customization options through CSS, allowing for a personalized appearance of its elements.

### Understanding Select Box CSS Classes

The Select Box component supports various CSS classes, enabling customization of the select box, container, menu, and virtual list. Below is a detailed list of the supported CSS classes and their corresponding elements.

#### Select Box Classes

| **Class Name**   | **Applies To**                 | **Description**                            |
|------------------|-------------------------------|--------------------------------------------|
| `.fd-selectbox`        | The select box header            | Styles the default view of the select box, displaying the selected option when the select box is closed.       |
| `.fd-selectbox__container`   |    The choices inside the select box          |  Applies styles to all available choices inside the select box.          |
| `.fd-selectbox__container > div:hover`   | Components within choices    | Styles individual components inside each choice when hovered. |
| `.FdVirtualList`   | The select box options list    | Applies styles to the list of choices in the select box. |
| `.fd-selectbox__menu`   | The select box menu    | Styles the entire select box menu, including the search area. |

### Custom styling examples
The following examples demonstrate how to customize the Select Box component's appearance.

#### Example 1: Select Box Header
This example styles the Select Box default view (Header), using a silver background color, rounded corners, and shadow effects to create a sense of depth.

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
	<pre>
        <code className="language-css">{`
self.fd-selectbox {
border-radius: 10px;
background-color: #E0E0E0; 
box-shadow: -4px 4px 10px rgba(220, 220, 220, 0.4), -2px 2px 10px rgba(192, 192, 192, 0.3);
		}`}
        </code>
	</pre>
	</Column.Item>
	<Column.Item width="40%">
         <img src={require('./img/selectbox_wrapper.png').default} style={{borderRadius: '6px', display: 'block', margin: '0 auto'}} />
	</Column.Item>
</Column.List>

#### Example 2: Select Box Container
This example styles the Select Box Container with rounded corners, a soft text color, the Georgia font, and shadow effect to enhance its appearance.
<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
	<pre>
		<code className="language-css">
			{`
self .fd-selectbox__container {
border-radius: 10px;
box-shadow: -4px -4px 10px rgba(220, 220, 220, 0.4), 4px -4px 10px rgba(192, 192, 192, 0.3);  
color: rgba(28, 32, 157, 0.8); 
font-family:Georgia, 'Times New Roman', Times, serif;
margin: 0 5% 5% 5%;
			}`}
		</code>
	</pre>
	</Column.Item>
	<Column.Item width="40%">
			<img src={require('./img/selectbox_container.png').default} style={{borderRadius: '6px', display: 'block', margin: '0 auto'}} />
	</Column.Item>
</Column.List>

#### Example 3: Select Box Container Hovered
In this example each choice within the select box is customized with rounded corners, a Gill Sans font, and a shadow effect to highlight it when hovered.

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
	<pre>
		<code className="language-css">
			{`
self.fd-selectbox {
border-radius: 10px;
background-color: #E0E0E0; 
box-shadow: -4px 4px 10px rgba(220, 220, 220, 0.4), -2px 2px 10px rgba(192, 192, 192, 0.3);
}
self .fd-selectbox__container > div:hover{
border-radius: 5px;
box-shadow:  -4px 4px 10px rgba(185, 168, 208, 0.949), -2px 2px 10px rgba(179, 132, 188, 0.3);
color: rgba(6, 5, 5, 0.963); 
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size:50px;
}`}
		</code>
	</pre>
	</Column.Item>
	<Column.Item width="40%">
			<img src={require('./img/selectbox_container_hover.png').default} style={{borderRadius: '6px', display: 'block', margin: '0 auto'}} />
	</Column.Item>
</Column.List>

#### Example 4: Select Box Virtual List
In this example, the virtual list of the Select Box is customized by applying a background color in purple  and text color that contrasts well. The font is set to "Gill Sans" for a clean, modern appearance. 

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
	<pre>
		<code className="language-css">
			{`
self.fd-selectbox {
border-radius: 10px;
background-color: #E0E0E0; 
box-shadow: -4px 4px 10px rgba(220, 220, 220, 0.4), -2px 2px 10px rgba(192, 192, 192, 0.3);
}
self .FdVirtualList {
	background-color: rgb(206, 174, 224);
	color: rgb(25, 34, 128);
	font-family: "Gill Sans", sans-serif;
}`}
		</code>
	</pre>
	</Column.Item>
	<Column.Item width="40%">
			<img src={require('./img/selectbox_fd_virtual_list.png').default} style={{borderRadius: '6px', display: 'block', margin: '0 auto'}} />
	</Column.Item>
</Column.List>

#### Example 5: Select Box menu
This example customizes the Select Box menu by applying a light gray background, a cursive font for the text, and a soft shadow for added depth.

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
	<pre>
		<code className="language-css">
			{`
self.fd-selectbox__menu {
	color:rgb(152, 92, 8);
	background-color: #E0E0E0; 
	font-family: cursive;
	box-shadow:  -4px 4px 10px rgba(184, 184, 185, 0.949), -2px 2px 10px rgba(152, 151, 152, 0.3);
}`}
		</code>
	</pre>
	</Column.Item>
	<Column.Item width="40%">
			<img src={require('./img/selectbox_menu_wrapper.png').default} style={{borderRadius: '6px', display: 'block', margin: '0 auto'}} />
	</Column.Item>
</Column.List>

:::tip 
For smooth application of CSS Classes, both `.fd-selectbox` and `.fd-selectbox__menu` should be attached to `self` **without an extra space** unlike other classNames.
:::

## Showcase

Here's a glimpse of how the **Select Box** component will look and behave in action:

<img src={require('./img/selectBox_Preview.gif').default} style={{borderRadius: '6px'}} />


## Triggers and Events

The **Select Box** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Select| Calls for an action when an item within the component is selected. |
|On Clear| Calls for an action when the selected item is cleared. |
