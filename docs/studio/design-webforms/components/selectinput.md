---
id: selectinput
title: Select Input
---
import Column from '@site/src/components/Column'

The **Select Input** component is an interactive UI element that allows users to pick an option from a predefined list using a dropdown-style interface. Users can select only one option from the list.

:::info 

The **Select Input** component contains an embedded **Select** and a **Label** element. This is of great importance as configuring the **Select Input** component may require adjusting properties within the embedded elements. This applies to the visual style, triggers, and actions as they may differ.

:::

<br/>

The **Select Input** component is notable for its options that are easily configured directly within the properties panel. Unlike the [**Select Box**](./selectbox.md) component, it doesn't rely on a datasource for options. Furthermore, while the **Select Input** component doesn't support embedding components within the list for customized displays alongside other elements, it efficiently serves its purpose.



## Use Cases

The **Select Input** component serve various purposes in user interfaces, including:

- **Country and Region Selection**: Allowing users to pick their country, state, or region from a predefined list when collecting location-based information.

- **Categorization**: Enabling users to categorize items or content by selecting a category from the list.

- **Filtering and Sorting**: Facilitating data table or list filtering and sorting based on specific attributes or criteria.


## Properties Customization

### <u>Select Input Component</u>

Enhance the **Select Input** component to align with your application's requirements using the following customization options:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Label Position</span>: Developers can tailor the label's position, placing it above, below, to the left, to the right, or even hidden.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/textInput_LabelPosition.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### <u>Embedded Label</u>

Within the **Select Input** component, an embedded **Label** allows for further customization of the following properties:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Label</span>: Personalize the label to offer clear instructions or guidance.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/textInput_label.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### <u>Embedded Input</u>

Within the **Select Input** component, an embedded **Select** allows for further customization of the following properties:

- **Options**: 
    - **Adding Options**: Incorporate new options by utilizing the `+` button within the Select Input component. Each option can be customized with a label and a corresponding value, enhancing the clarity of user selections.
        - <Column.List align="center" justifyContent="between">
            <Column.Item width="60%">
                <li> <span style={{fontWeight: 'bold'}}>Label</span>: A descriptive text label for each option.</li> <br/>
                <li> <span style={{fontWeight: 'bold'}}>Value</span>: A distinct value to each option, enabling effective data handling based on the selections made by users.</li>
            </Column.Item>
            <Column.Item width="35%">
                <img alt="explorer" src={require('./img/selectInput_Options.png').default} style={{borderRadius: '6px'}} />
            </Column.Item>
        </Column.List>

    - **Option Duplication**: Duplicate existing options to replicate configurations quickly by clicking on the <img alt="explorer" src={require('./img/duplicate.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon.

    - **Option Removal**: Delete options that no longer serve a purpose by clicking on the <img alt="explorer" src={require('./img/delete.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon.

    - **Moving Option**: Arrange options to your preferred position by clicking on the <img alt="explorer" src={require('./img/arrange.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon


## Data Integration

The **Select Input** component allows for seamless integration of datasources, enabling dynamic data binding and interaction within the webform.

### <u>Data Binding</u>
To associate data with the Select Input component, follow these steps:

- **Navigate to the Properties Panel**: Access the Data Access category located within the Properties panel for the Select Input component.

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <li><span style={{fontWeight: 'bold'}}>Define the Datasource</span>: Specify the relevant Datasource that will capture the user's selected input.</li>
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/selectInput_DataBinding.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### <u>Server-Side Interaction</u>

Retrieving user choices is straightforward. By binding a datasource to the **Select Input** component, you can access and utilize the selected content.

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
        For example, when users make a single choice from a set of options, binding a datasource captures the selected option. <br/> <br/>
        Consequently, you can utilize this option value in various ways, such as within a standard action to initiate a search with matching attribute values.
	</Column.Item>
	<Column.Item width="50%">
        <img alt="explorer" src={require('./img/selectInput_standardAction.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


Additionally: 

:::tip 
The **Select Input** component's datasource can also be linked to the value of an attribute in the currently selected entity of another datasource. This enables the component to automatically display the saved value of the selected option whenever a new entity is chosen.
:::


## Showcase

Here's a glimpse of how the **Select Input** component will look and behave in action:

<img alt="explorer" src={require('./img/selectInput_Preview.gif').default} style={{borderRadius: '6px', height: '90%', width: '90%'}} />



## Triggers and Events

### <u>Select Input Component</u>

The **Select Input** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|

### <u>Embedded Select</u>

The embedded **Select** can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:

|Event|Description|
|---|---|
|On Change| Calls for an action when the value of the Input changes. This typically occurs when the user enters or modifies text in the Input field. |
|On Click| Calls for an action when the user clicks on the Input. |

### <u>Embedded Label</u>

The embedded **Label** can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the Label. |
|On Keyup| Calls for an action when a keyboard key is released while the Label is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the Label is in focus. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the Label.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the Label.|


