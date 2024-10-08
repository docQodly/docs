---
id: textinput
title: Text Input
---
import Column from '@site/src/components/Column'


The **Text Input** component is an interactive UI element that enables user interactions by allowing the input of alphanumeric data within a Page. With support for various input types, this component accommodates diverse data entry scenarios.


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
                <img src={require('./img/textInput_LabelPosition.png').default} style={{borderRadius: '6px'}} />
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
                <img src={require('./img/textInput_label.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Embedded Input

Within the **Text Input** component, an embedded **Input** allows for further customization of the following properties:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
                <li><strong>Placeholder</strong>: Set a placeholder to provide users with a hint or example of the expected input. This text appears within the input field and disappears as soon as users begin typing.</li> <br/>
                <li><strong>Input Type</strong>: Select the appropriate input type to match the nature of the expected data. Available types include:</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
                <img src={require('./img/textInput_InputCustomization.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<ul>
        <ul>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>text</strong>: Standard alphanumeric data.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_text.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>text area</strong>: Larger text area for expanding and adjusting size.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_textArea.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>number</strong>: Numerical values only.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_number.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>password</strong>: Concealed input for sensitive data.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_password.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>date</strong>: Limits input to date values with a date picker.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_date.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>time</strong>: Limits input to time values with a widget for selection, allowing scrolling or clicking to choose values</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_time.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
                <Column.List align="center" justifyContent="between">
                        <Column.Item width="60%">
                                <li><strong>duration</strong>: Limits input to duration values with a widget, enabling scrolling, manual entry, or using the + and - icons.</li>
                        </Column.Item>
                        <Column.Item width="35%">
                                <img src={require('./img/inputType_duration.png').default} style={{borderRadius: '6px'}} />
                        </Column.Item>
                </Column.List>
        </ul>
</ul>

<br/>

- **Input Format**: Specify the desired format for the entered data. <br/>
See <a href="componentsBasics#data-formatting">Formats</a> for a description of available formats.

<br/>

- **Read-Only Option**: Toggle the readOnly property to prevent users from editing the input content. This is useful when displaying pre-filled or calculated data that should not be modified. <img src={require('./img/textInput_readonly.png').default} style={{borderRadius: '6px', width: '15%'}} />


## Data Integration

The **Text Input** component allows for seamless integration of Qodly Sources, enabling dynamic data binding and interaction within the Page.

:::info 
The qodlysource for the **Text Input** component should be of type `text`, `number`, `date`, or `duration`.
:::

### Data Binding
To associate data with the Text Input component, follow these steps:

1. **Navigate to the Properties Panel**: Access the Data Access category located within the Properties panel for the Text Input component.

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ol>
                <li value="2"><strong>Define the Qodly Source</strong>: Specify the appropriate qodlysource that contains the data you want to display within the Text Input or retrieve from user input. This can be an attribute from an entity, an array, or a direct qodlysource of type text. For instance, you can select an entity, such as <code>package</code>.</li>
        </ol>
	</Column.Item>
	<Column.Item width="40%">
                <img src={require('./img/textInput_DataDisplay.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


3. **Choose the Attribute**: Choose the specific attribute that you want to display within the component when using an entity or an array type qodlysource, such as <code>package.name</code>.

:::tip 
Alternatively, you can establish the connection by dragging and dropping the qodlysource onto the Text Input component.
:::

### Server-Side Interaction

Retrieving user input data is equally effortless. By binding a Qodly Source to the **Text Input** component, you can access and employ user-entered content.


<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
                Imagine a search input where users type to find packages. Binding a qodlysource captures the input. 
	</Column.Item>
	<Column.Item width="50%">
                <img src={require('./img/textInput_Server-SideInteraction.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
                Consequently, you can utilize this input value in various ways, such as within a standard action to initiate a search with matching attribute values.
	</Column.Item>
	<Column.Item width="50%">
                <img src={require('./img/textInput_standardAction.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

## Customizing Text Input Styles

The **Text Input** component offers extensive customization options through CSS, enabling adjustments to the appearance of the text input elements.

### Understanding Embedded HTML Tags in Text Input

The text input component supports a variety of CSS tags, allowing the customization of the label, and input areas. Below is a list of the available CSS tags and the elements they apply to.

| **Tag Name**   | **Applies To**                 | **Description**                            |
|------------------|-------------------------------|--------------------------------------------|
| `label`        |  The embedded label element           |   Applies styles to the embedded label tag.    |
| `input`        |  The embedded input element             |  Customizes the embedded input element.      |


### Custom styling examples
The following examples demonstrate how to customize the appearance of the Text Input component.

#### Example 1 - Blue Embedded Label

In this example, the embedded label of the Text Input component is customized with rounded corners and shadow effects for added depth. The text color is set to dark blue for contrast, and the font family is changed to Times with medium-sized text.

<Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
    <pre>
      <code className="language-css">
{`self label {
        color: rgb(5, 5, 49);
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size:medium;
        box-shadow: 4px 4px 10px rgba(226, 228, 232, 0.9),4px 4px 10px rgba(221, 221, 232, 0.9),4px 4px 10px rgba(240, 240, 244, 0.9),4px 4px 10px rgba(227, 227, 234, 0.9);
        border-radius: 5px;
}`}
      </code>
    </pre>
  </Column.Item>
 <Column.Item width="40%">
    <img
      src={require('./img/textInput_label_style.png').default}
      style={{ borderRadius: '6px', display: 'block', margin: '0 auto' }}
    />
  </Column.Item>
</Column.List>

#### Example 2 - Shadowed Embedded Input

This example customizes the embedded input field by applying a white background and a subtle shadow effect. The width is set to 100%, ensuring it fully expands to fill the container. 

<Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
    <pre>
      <code className="language-css">
{`self input {
	background-color: rgb(255, 255, 255);
	box-shadow: 4px 4px 10px rgba(229, 232, 239, 0.9), 4px 4px 10px rgba(221, 221, 232, 0.9), 4px 4px 10px rgba(240, 240, 244, 0.9),4px 4px 10px rgba(227, 227, 234, 0.9);
	width: 100%;
	margin: 2px;
}
`}
      </code>
    </pre>
  </Column.Item>
 <Column.Item width="40%">
    <img
      src={require('./img/textInput_input_style.png').default}
      style={{ borderRadius: '6px', display: 'block', margin: '0 auto' }}
    />
  </Column.Item>
</Column.List>

#### Example 3 - Grey Hover Effect on Embedded Input

In this example, the embedded input is styled to change on hover. When hovered, the background color transitions to light gray, and the text color changes to dark blue.

<Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
    <pre>
      <code className="language-css">
{`self input:hover {
	background-color: lightgray;
	margin: 2px;
	color: rgb(13, 13, 81);
}
`}
      </code>
    </pre>
  </Column.Item>
 <Column.Item width="40%">
    <img
      src={require('./img/textInput_inputHovered_style.png').default}
      style={{ borderRadius: '6px', display: 'block', margin: '0 auto' }}
    />
  </Column.Item>
</Column.List>

## Showcase

Here's a glimpse of how the **Text Input** component will look and behave in action:

<img src={require('./img/textInput_Preview.gif').default} style={{borderRadius: '6px', height: '90%', width: '90%'}} />


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