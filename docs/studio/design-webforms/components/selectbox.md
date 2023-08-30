---
id: selectbox
title: Select Box
---
import Column from '@site/src/components/Column'


The **Select Box** component is a UI element designed for users to choose an item from a list of Stylebox components. It provides a streamlined way to select from various options within a dropdown-style interface. Each option in the list is represented as a Stylebox component.


:::info 

The **Select Box** component is part of the iterative components category, which enables you to iterate over a dataset to facilitate user selections.

:::

## Use Cases

The Select Box component finds application in various scenarios where a single value needs to be selected from a predefined list. Common use cases include:

- **Employee Allocation**: In resource management applications, the Select Box component can assist in assigning employees to projects or tasks by providing a dropdown list of available team members.

- **Task Priority Selection**: When managing tasks within a backoffice application, users might need to assign priorities to tasks. The Select Box component can offer a dropdown list of priority levels, simplifying the process of assigning importance to tasks.

- **Department Selection for Ticketing**: In a support ticketing system, users can choose the department or category to which a ticket belongs. The Select Box component streamlines this process by offering a dropdown menu of available departments, ensuring that tickets are routed to the appropriate team.

## Properties Customization

Enhance the Select Box component to align with your application's requirements using the following customization options:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Placeholder</span>: Display a text as a dimmed placeholder in the select box. 
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/selectBox_Placeholder.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Number of items</span>: Specify the maximum number of items to display simultaneously in the component.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/selectBox_NumberOfItems.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Show length</span>: Adds a string indicating the total number of items within the component. You can customize this pattern to suit your requirements, ensuring users have a clear understanding of the available options.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/selectBox_ShowLength.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Enable search</span>: Adds a search area to the top of the component. This empowers users to filter the displayed options by entering specific characters. Developers have the flexibility to define the datasource attribute(s) to be searched within, enhancing the efficiency of option discovery.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/selectBox_EnableSearch.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


## Data Integration

The **Select Box** component is data-bound, meaning it relies on an external data source to populate its options. This allows the component to display and interact with data.

### <u>Data Binding</u>

To associate data with the **Select Box** component, follow these steps:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <li><span style={{fontWeight: 'bold'}}>Navigate to the Properties Panel</span>: Access the Data Access category located within the Properties panel for the Select Box component.</li>
        <br/>
        <li><span style={{fontWeight: 'bold'}}>Define the Datasource</span>: Specify the appropriate Datasource that contains the data you want to display within the Select Box. For instance, you can select an entity selection, such as the <code>Destination</code> dataclass.</li>
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/selectBox_DataBinding.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### <u>Data Display</u>

To associate data iterated over a datasource, you can follow these additional steps:

- **Access the Select Box**: Within the Select Box component, locate the embedded Stylebox.
- **Add a Component**: Add a Text component or other relevant components within the Stylebox.
- **Configure the Component**: Click on the component you've added to enter its editing mode. The process of configuring components varies based on their type:

    - **Toggle Datasource**: Prepare to connect the component to the datasource in the next step by using the `Toggle Datasource` button.

    - **Properties Panel**: In the next step, you'll configure them through the `Data Access` category in the Properties panel. 

- <Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        <li><span style={{fontWeight: 'bold'}}>Choose the Iterator</span>: Choose the iterator corresponding to the iterated data (e.g., <code>$This</code>) to represent the current data item.</li> <br/>
        <li><span style={{fontWeight: 'bold'}}>Choose the Attribute</span>: Once you've selected the iterator, choose the specific attribute that you want to display within the component. This could be attributes like the name of the destination, the country, or any other relevant information. </li>
    </Column.Item>
    <Column.Item width="35%">
        <img alt="explorer" src={require('./img/selectBox_DataDisplay.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


## Showcase

Here's a glimpse of how the **Select Box** component will look and behave in action:

<img alt="explorer" src={require('./img/selectBox_Preview.gif').default} style={{borderRadius: '6px'}} />


## Triggers and Events

The **Select Box** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Select| Calls for an action when an item within the component is selected. |

