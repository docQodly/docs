---
id: textinput
title: Text Input
---
import Column from '@site/src/components/Column'


The **Text Input** component serves as a crucial element for user interactions, allowing input of alphanumeric data within your webform. By offering various input types, this component caters to a wide range of data entry scenarios.



## Use Cases

The Text Input component provides a versatile solution for a wide range of scenarios:

- **User Profile Management**: Users can update their personal information, such as names, contact details, and addresses, ensuring accurate and up-to-date records.

- **Data Filtering**: Users can input search criteria, making it easier to locate specific records within large datasets.

- **Comments and Notes**: Employees can leave comments, feedback, or additional information on records, facilitating efficient communication and collaboration.




## Properties Customization

Enhance the **Text Input** component to align with your application's requirements using the following customization options:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Label Position</span>: Developers can tailor the label's position, placing it above, below, to the left, to the right, or even hidden.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/textInput_LabelPosition.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

Within the **Text Input** component, an embedded **Input** allows for further customization of the following properties:
- <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
                <span style={{fontWeight: 'bold'}}>Placeholder</span>: Set a placeholder to provide users with a hint or example of the expected input. This text appears within the input field and disappears as soon as users begin typing.<br/><br/>
                <li><span style={{fontWeight: 'bold'}}>Input Type</span>: Select the appropriate input type to match the nature of the expected data. Available types include:</li>
                &nbsp;&nbsp;&nbsp;&nbsp; &bull; <span style={{fontWeight: 'bold'}}>text</span>: Standard alphanumeric data.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &bull; <span style={{fontWeight: 'bold'}}>number</span>: Numerical values only.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &bull; <span style={{fontWeight: 'bold'}}>password</span>: Concealed input for sensitive data.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &bull; <span style={{fontWeight: 'bold'}}>date</span>: Restriction to date values with an associated date picker.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &bull; <span style={{fontWeight: 'bold'}}>time</span>: Limiting input to time values.
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputCustomization.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
                <span style={{fontWeight: 'bold'}}>Input Format</span>: Specify the desired format for the entered data. This is especially relevant for dates and times, where specific formatting ensures consistency and clarity.<br/>
                You can check the  <a href="https://date-fns.org/v2.30.0/docs/format">date-fns library</a> for a comprehensive range of format options and usage examples.
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputFormat.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>

- **Read-Only Option**: Toggle the readOnly property to prevent users from editing the input content. This is useful when displaying pre-filled or calculated data that should not be modified. <img alt="explorer" src={require('./img/textInput_readonly.png').default} style={{borderRadius: '6px', width: '15%'}} />




## Data Integration

The **Text Input** component allows for seamless integration of datasources, enabling dynamic data binding and interaction within the webform.

### <u>Data Binding</u>
To associate data with the Text Input component, follow these steps:

- **Navigate to the Properties Panel**: Access the Data Access category located within the Properties panel for the Text Input component.

- <Column.List align="center" justifyContent="between">
	<Column.Item width="50%">
        <li><span style={{fontWeight: 'bold'}}>Define the Datasource</span>: Specify the appropriate Datasource that contains the data you want to display within the Text Input or retrieve from user input. This can be an attribute from an entity, an array, or a direct datasource of type text. For instance, you can select an entity, such as <code>package</code>.</li>
	</Column.Item>
	<Column.Item width="50%">
        <img alt="explorer" src={require('./img/textInput_DataDisplay.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- **Choose the Attribute**: Choose the specific attribute that you want to display within the component when using an entity or an array type datasource, such as <code>package.name</code>.


### <u>Server-Side Interaction</u>

Retrieving user input data is equally effortless. By binding a datasource to the **Text Input** component, you can access and employ user-entered content.

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
        Imagine a search input where users type to find packages. Binding a datasource captures the input. 
	</Column.Item>
	<Column.Item width="50%">
        <img alt="explorer" src={require('./img/textInput_Server-SideInteraction.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
        Consequently, you can utilize this input value – for instance, within a standard action – to initiate a search for packages whose names match the entered value.
	</Column.Item>
	<Column.Item width="50%">
        <img alt="explorer" src={require('./img/textInput_standardAction.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

## Showcase

Here's a glimpse of how the **Text Input** component will look and behave in action:

<img alt="explorer" src={require('./img/textInput_Preview.gif').default} style={{borderRadius: '6px', height: '90%', width: '90%'}} />


## Triggers and Events

The **Text Input** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:


|Event|Description|
|---|---|
|On Change| Calls for an action when the value of the input changes. This typically occurs when the user enters or modifies text in the input field. |
|On Click| Calls for an action when the user clicks on the component. |
|On Keyup| Calls for an action when a keyboard key is released while the component is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the component is in focus. |
|On AuxClick| Calls for an action when the user performs an auxiliary action (e.g., right-click or middle-click) on the component.|
|On Blur| Calls for an action when the component loses focus (user clicks outside). |
|On Focus| Calls for an action when the component gains focus (user clicks on it). |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|