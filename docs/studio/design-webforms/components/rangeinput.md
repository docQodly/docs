---
id: rangeinput
title: Range Input
---
import Column from '@site/src/components/Column'

The **Range Input** component is an interactive UI element enabling users to choose a numeric value from a defined range.

:::info 

The **Range Input** component contains an embedded **Slider Container** and a **Label** element. This is of great importance as configuring the **Range Input** component may require adjusting properties within the embedded elements. This applies to the visual style, triggers, and actions as they may differ.

:::



## Use Cases

**Range Input** component can be applied in various scenarios:

- **Volume Control**: Use it to control audio or video volume levels.

- **Data Filtering**: Implement it to allow users to filter results based on a numeric range, such as prices or quantities.

- **Configuration Settings**: Utilize it for user-configurable settings that require selecting a specific numeric value within a range.



## Properties Customization

### Range Input Component

Enhance the **Range Input** component to align with your application's requirements using the following customization options:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Label Position</strong>: Developers can tailor the label's position, placing it above, below, to the left, to the right, or even hidden.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img alt="explorer" src={require('./img/rangeInput_LabelPosition.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- **Orientation**: Developers can choose between horizontal and vertical orientations for the Matrix. This choice affects the arrangement of Stylebox components and the presence of scrollbars.

    <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
            <ul>
                <li><strong>Vertical Orientation (Default)</strong>: By default, the Range Input component is oriented vertically. This means that Slider container is stacked from top to bottom.</li> <br/>
                <li><strong>Horizontal Orientation</strong>: When the Range Input component is configured with a horizontal orientation, Slider container is arranged from left to right.</li>
            </ul>
        </Column.Item>
        <Column.Item width="35%">
            <img alt="explorer" src={require('./img/rangeInput_orientation.gif').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>


### Embedded Label

Within the **Range Input** component, an embedded **Label** allows for further customization of the following properties:

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


### Embedded Slider Container

Within the **Range Input** component, an embedded **Slider Container** allows for further customization of the following properties:

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        <ul>
            <li><strong>Minimum Value</strong>: Set the minimum value that users can select within the range.</li> <br/>
            <li><strong>Maximum Value</strong>: Define the maximum value that users can select within the range.</li> <br/>
            <li><strong>Step</strong>: Determine the increment value when users interact with the component.</li> <br/>
        </ul>
    </Column.Item>
    <Column.Item width="35%">
        <img alt="explorer" src={require('./img/rangeInput_sliderProperties.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


## Data Integration

The **Range Input** component allows for seamless integration of datasources, enabling dynamic data binding and interaction within the webform.

:::info 
The datasource for the **Range Input** component should be a numeric value.
:::

### Data Binding
To associate data with the Range Input component, follow these steps:

- **Navigate to the Properties Panel**: Access the Data Access category located within the Properties panel for the Range Input component.

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <ul>
            <li><strong>Define the Datasource</strong>: Specify the appropriate Datasource that contains the data you want to display within the Range Input or retrieve from user input. This can be an attribute from an entity, an array, or a direct datasource of type number. For instance, you can select an entity, such as <code>dayplan.hotel_ID</code>.</li>
        </ul>
    </Column.Item>
    <Column.Item width="45%">
        <img alt="explorer" src={require('./img/rangeInput_DataDisplay.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


- **Choose the Attribute**: Choose the specific attribute that you want to display within the component when using an entity or an array type datasource, such as <code>dayplan.hotel_ID.rating</code>.

:::tip 
Alternatively, you can establish the connection by dragging and dropping the datasource onto the Range Input component.
:::

### Server-Side Interaction

Interacting with user input data is straightforward. When you bind a datasource to the **Range Input** component, you can access and make use of the input content.

Subsequently, you can utilize this input value in various ways, such as within a standard action to initiate a search with matching attribute values.


## Showcase

Here's a glimpse of how the **Range Input** component will look and behave in action:

<img alt="explorer" src={require('./img/rangeInput_Preview.gif').default} style={{borderRadius: '6px', height: '90%', width: '90%'}} />

## Triggers and Events

### Range Input Component

The **Range Input** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Keyup| Calls for an action when a keyboard key is released while the component is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the component is in focus. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|
|On Change| Calls for an action when the value of the Input changes. This typically occurs when the user enters or modifies text in the Input field. |


### Embedded Slider Container

The embedded **Slider Container** can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the Slider Container. |
|On Blur| Calls for an action when the Slider Container loses focus (user clicks outside). |
|On Focus| Calls for an action when the Slider Container gains focus (user clicks on it). |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the Slider Container.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the Slider Container.|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the Slider Container is in focus. |
|On Keyup| Calls for an action when a keyboard key is released while the Slider Container is in focus|


### Embedded Label

The embedded **Label** can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the Label. |
|On Keyup| Calls for an action when a keyboard key is released while the Label is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the Label is in focus. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the Label.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the Label.|
