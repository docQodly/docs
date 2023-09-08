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

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
                <li><strong>Label Position</strong>: Developers can tailor the label's position, placing it above, below, to the left, to the right, or even hidden.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_LabelPosition.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### Embedded Label

Within the **Text Input** component, an embedded **Label** allows for further customization of the following properties:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
                <li><strong>Label</strong>: Personalize the label to offer clear instructions or guidance.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_label.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### Embedded Input

Within the **Text Input** component, an embedded **Input** allows for further customization of the following properties:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
                <li><strong>Placeholder</strong>: Set a placeholder to provide users with a hint or example of the expected input. This text appears within the input field and disappears as soon as users begin typing.</li> <br/>
                <li><strong>Input Type</strong>: Select the appropriate input type to match the nature of the expected data. Available types include:</li> <br/>
                <ul>
                        <li><strong>text</strong>: Standard alphanumeric data.</li> 
                        <li><strong>number</strong>: Numerical values only.</li>
                        <li><strong>password</strong>: Concealed input for sensitive data.</li> 
                        <li><strong>date</strong>: Restriction to date values with an associated date picker.</li> 
                        <li><strong>time</strong>: Limiting input to time values.</li>
                </ul>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputCustomization.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br/>

- **Input Format**: Specify the desired format for the entered data. Formats include:

<Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
        <ul>
                <ul>
                        <li>For <strong>Text Input</strong>:</li> <br/>
                        <ul>
                                <li><strong>UPPERCASE</strong>: Converts all characters to uppercase.</li> 
                                <li><strong>lowercase</strong>: Converts all characters to lowercase.</li>
                                <li><strong>Capitalize</strong>: Capitalizes the first letter of the text.</li> 
                                <li><strong>Capitalize Each Word</strong>: Capitalizes the first letter of each word.</li> 
                        </ul>
                </ul>
        </ul>
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputFomat_Text.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>

<br/>

<Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
        <ul>
                <ul>
                        <li>For <strong>Number Input</strong>:</li> <br/>
                        <ul>
                                <li><strong>0</strong>: Standard numerical format.</li> 
                                <li><strong>0%</strong>: Displays the number as a percentage.</li>
                                <li><strong>#,##0</strong>: Adds thousands separators to the number.</li> 
                                <li><strong>#,##0.00</strong>: Adds thousands separators and displays two decimal places.</li> 
                        </ul>
                        <br/>
                        Refer to the <a href="https://support.microsoft.com/en-us/office/review-guidelines-for-customizing-a-number-format-c0a1d1fa-d3f4-4018-96b7-9c9354dd99f5">Review guidelines</a> for customizing <code>number formats</code>.
                </ul>
        </ul>
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputFomat_Number.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>

<br/>

<Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
        <ul>
                <ul>
                        <li>For <strong>Date Input</strong>:</li> <br/>
                        <ul>
                                <li><strong>Date short</strong>: Displays the date in a short format.</li> 
                                <li><strong>Date long</strong>: Displays the date in a long format.</li>
                                <li><strong>Date abbreviated</strong>: Displays the date with abbreviated month name.</li> 
                                <li><strong>ISO date GMT</strong>: Displays the date in ISO 8601 format with GMT time zone.</li> 
                                <li><strong>UTC String</strong>: Displays the date in a UTC format.</li>
                        </ul>
                        <br/>
                        You can check the  <a href="https://date-fns.org/v2.30.0/docs/format">date-fns library</a> for a comprehensive range of <code>date format</code> options and usage examples. <br/>
                        For instance, you can format your date as <code>EEE, MMM dd</code> to achieve a different format from <code>date abbreviated</code>, which has the format <code>EEE, MMM dd, yyyy</code>.
                </ul>
        </ul>
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputFomat_Date.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>

<br/>

<Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
        <ul>
                <ul>
                        <li>For <strong>Time Input</strong>:</li> <br/>
                        <ul>
                                <li><strong>without seconds</strong>: Displays the time without seconds.</li> 
                                <li><strong>with seconds</strong>: Displays the time with seconds.</li>
                        </ul>
                </ul>
        </ul>
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputFomat_Time.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>


<br/>

- **Read-Only Option**: Toggle the readOnly property to prevent users from editing the input content. This is useful when displaying pre-filled or calculated data that should not be modified. <img alt="explorer" src={require('./img/textInput_readonly.png').default} style={{borderRadius: '6px', width: '15%'}} />


## Data Integration

The **Text Input** component allows for seamless integration of datasources, enabling dynamic data binding and interaction within the webform.

:::info 
The datasource for the **Text Input** component should be of type `text`, `number`, `date`, or `time`.
:::

### Data Binding
To associate data with the Text Input component, follow these steps:

- **Navigate to the Properties Panel**: Access the Data Access category located within the Properties panel for the Text Input component.

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
                <li><strong>Define the Datasource</strong>: Specify the appropriate Datasource that contains the data you want to display within the Text Input or retrieve from user input. This can be an attribute from an entity, an array, or a direct datasource of type text. For instance, you can select an entity, such as <code>package</code>.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
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