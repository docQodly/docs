---
id: textinput
title: Text Input
---
import Column from '@site/src/components/Column'


The **Text Input** component is an interactive UI element that enables user interactions by allowing the input of alphanumeric data within a webform. With support for various input types, this component accommodates diverse data entry scenarios.


:::info 

The **Text Input** component contains an embedded **Input** and a **Label** element. This is of great importance as configuring the **Text Input** component may require adjusting properties within the embedded elements. This applies to the visual style, triggers, and actions as they may differ.

:::

## Use Cases

The Text Input component provides a versatile solution for a wide range of scenarios:

- **User Profile Management**: Users can update their personal information, such as names, contact details, and addresses, ensuring accurate and up-to-date records.

- **Data Filtering**: Users can input search criteria, making it easier to locate specific records within large datasets.

- **Comments and Notes**: Employees can leave comments, feedback, or additional information on records, facilitating efficient communication and collaboration.




## Properties Customization

### Text Input Component

Enhance the **Text Input** component to align with your application's requirements using the following customization options:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Label Position</span>: Developers can tailor the label's position, placing it above, below, to the left, to the right, or even hidden.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/textInput_LabelPosition.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Embedded Label

Within the **Text Input** component, an embedded **Label** allows for further customization of the following properties:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Label</span>: Personalize the label to offer clear instructions or guidance.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/textInput_label.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Embedded Input

Within the **Text Input** component, an embedded **Input** allows for further customization of the following properties:
- <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
                <span style={{fontWeight: 'bold'}}>Placeholder</span>: Set a placeholder to provide users with a hint or example of the expected input. This text appears within the input field and disappears as soon as users begin typing.<br/><br/>
                <li><span style={{fontWeight: 'bold'}}>Input Type</span>: Select the appropriate input type to match the nature of the expected data. Available types include:</li>
                &nbsp;&nbsp;&nbsp;&nbsp; &bull; &nbsp; <span style={{fontWeight: 'bold'}}>text</span>: Standard alphanumeric data.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &bull; &nbsp; <span style={{fontWeight: 'bold'}}>number</span>: Numerical values only.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &bull; &nbsp; <span style={{fontWeight: 'bold'}}>password</span>: Concealed input for sensitive data.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &bull; &nbsp; <span style={{fontWeight: 'bold'}}>date</span>: Restriction to date values with an associated date picker.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp; &bull; &nbsp; <span style={{fontWeight: 'bold'}}>time</span>: Limiting input to time values.
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputCustomization.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>

- **Input Format**: Specify the desired format for the entered data. Formats include:

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
           For <span style={{fontWeight: 'bold'}}>Text Input</span>: <br/>
                -  UPPERCASE : Converts all characters to uppercase.<br/>
                -  lowercase : Converts all characters to lowercase.<br/>
                -  Capitalize : Capitalizes the first letter of the text.<br/>
                -  Capitalize Each Word : Capitalizes the first letter of each word.<br/>
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/textInput_InputFomat_Text.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

    <br />

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
           For <span style={{fontWeight: 'bold'}}>Number Input</span>: <br/>
                -  0 : Standard numerical format.<br/>
                -  0% : Displays the number as a percentage.<br/>
                -  #,##0 : Adds thousands separators to the number.<br/>
                -  #,##0.00 : Adds thousands separators and displays two decimal places.<br/><br/>
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/textInput_InputFomat_Number.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>
    <br/>
        Refer to the <a href="https://support.microsoft.com/en-us/office/review-guidelines-for-customizing-a-number-format-c0a1d1fa-d3f4-4018-96b7-9c9354dd99f5">Review guidelines</a> for customizing <code>number formats</code>.
    <br/><br/>

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
           For <span style={{fontWeight: 'bold'}}>Date Input</span>: <br/>
                -  Date short : Displays the date in a short format.<br/>
                -  Date long : Displays the date in a long format.<br/>
                -  Date abbreviated : Displays the date with abbreviated month name.<br/>
                -  ISO date GMT : Displays the date in ISO 8601 format with GMT time zone.<br/>
                -  UTC String : Displays the date in a UTC format.<br/>
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/textInput_InputFomat_Date.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>
    <br/>
        You can check the  <a href="https://date-fns.org/v2.30.0/docs/format">date-fns library</a> for a comprehensive range of <code>date format</code> options and usage examples. For instance, you can format your date as <code>EEE, MMM dd</code> to achieve a different format from <code>date abbreviated</code>, which has the format <code>EEE, MMM dd, yyyy</code>.

    <br/><br/>

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="55%">
           For <span style={{fontWeight: 'bold'}}>Time Input</span>: <br/>
           -  without seconds : Displays the time without seconds.<br/>
           -  with seconds : Displays the time with seconds.<br/>
        </Column.Item>
        <Column.Item width="40%">
            <img alt="explorer" src={require('./img/textInput_InputFomat_Time.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>





- **Read-Only Option**: Toggle the readOnly property to prevent users from editing the input content. This is useful when displaying pre-filled or calculated data that should not be modified. <img alt="explorer" src={require('./img/textInput_readonly.png').default} style={{borderRadius: '6px', width: '15%'}} />


## Data Integration

The **Text Input** component allows for seamless integration of datasources, enabling dynamic data binding and interaction within the webform.

### Data Binding
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


### Server-Side Interaction

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
        Consequently, you can utilize this input value in various ways, such as within a standard action to initiate a search with matching attribute values.
	</Column.Item>
	<Column.Item width="50%">
        <img alt="explorer" src={require('./img/textInput_standardAction.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

## Showcase

Here's a glimpse of how the **Text Input** component will look and behave in action:

<img alt="explorer" src={require('./img/textInput_Preview.gif').default} style={{borderRadius: '6px', height: '90%', width: '90%'}} />


## Triggers and Events

### Text Input Component

The **Text Input** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|

### Embedded Input

The embedded **Input** can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:

|Event|Description|
|---|---|
|On Change| Calls for an action when the value of the Input changes. This typically occurs when the user enters or modifies text in the Input field. |
|On Click| Calls for an action when the user clicks on the Input. |
|On Keyup| Calls for an action when a keyboard key is released while the Input is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the Input is in focus. |
|On AuxClick| Calls for an action when the user performs an auxiliary action (e.g., right-click or middle-click) on the Input.|
|On Blur| Calls for an action when the Input loses focus (user clicks outside). |
|On Focus| Calls for an action when the Input gains focus (user clicks on it). |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the Input.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the Input.|

### Embedded Label

The embedded **Label** can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the Label. |
|On Keyup| Calls for an action when a keyboard key is released while the Label is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the Label is in focus. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the Label.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the Label.|