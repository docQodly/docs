---
id: rangeinput
title: Range Input
---
import Column from '@site/src/components/Column'

The **Range Input** component is an interactive user interface element that allows users to select a numeric value within a specified range. This component is commonly used for inputting values such as sliders, volume controls, and other settings that require a range selection.


## Use Cases

**Range Input** component can be applied in various scenarios:

- **Volume Control**: Use it to control audio or video volume levels.

- **Data Filtering**: Implement it to allow users to filter results based on a numeric range, such as prices or quantities.

- **Configuration Settings**: Utilize it for user-configurable settings that require selecting a specific numeric value within a range.



## Properties Customization

Enhance the **Range Input** component to align with your application's requirements using the following customization options:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Label Position</span>: Developers can tailor the label's position, placing it above, below, to the left, to the right, or even hidden.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/rangeInput_LabelPosition.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- **Orientation**: Developers can choose between horizontal and vertical orientations for the Matrix. This choice affects the arrangement of Stylebox components and the presence of scrollbars.

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
            <li><span style={{fontWeight: 'bold'}}>Vertical Orientation (Default)</span>: By default, the Range Input component is oriented vertically. This means that Slider container is stacked from top to bottom.</li> <br/>
            <li><span style={{fontWeight: 'bold'}}>Horizontal Orientation</span>: When the Range Input component is configured with a horizontal orientation, Slider container is arranged from left to right.</li>
        </Column.Item>
        <Column.Item width="35%">
            <img alt="explorer" src={require('./img/rangeInput_orientation.gif').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

Within the **Range Input** component, an embedded **Slider container** allows for further customization of the following properties:

- <Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        <li><span style={{fontWeight: 'bold'}}>Minimum Value</span>: Set the minimum value that users can select within the range.</li> <br/>
        <li><span style={{fontWeight: 'bold'}}>Maximum Value</span>: Define the maximum value that users can select within the range.</li> <br/>
        <li><span style={{fontWeight: 'bold'}}>Step</span>: Determine the increment value when users interact with the component.</li>
    </Column.Item>
    <Column.Item width="35%">
        <img alt="explorer" src={require('./img/rangeInput_sliderProperties.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


## Data Integration

The **Range Input** component allows for seamless integration of datasources, enabling dynamic data binding and interaction within the webform.

### <u>Data Binding</u>
To associate data with the Range Input component, follow these steps:

- **Navigate to the Properties Panel**: Access the Data Access category located within the Properties panel for the Range Input component.

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <li><span style={{fontWeight: 'bold'}}>Define the Datasource</span>: Specify the appropriate Datasource that contains the data you want to display within the Range Input or retrieve from user input. This can be an attribute from an entity, an array, or a direct datasource of type number. For instance, you can select an entity, such as <code>dayplan.hotel_ID</code>.</li>
	</Column.Item>
	<Column.Item width="45%">
        <img alt="explorer" src={require('./img/rangeInput_DataDisplay.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- **Choose the Attribute**: Choose the specific attribute that you want to display within the component when using an entity or an array type datasource, such as <code>dayplan.hotel_ID.rating</code>.


### <u>Server-Side Interaction</u>

Retrieving user input data is equally effortless. By binding a datasource to the **Range Input** component, you gain access to and can utilize the content input by the user.

Consider a rating slider scenario, where users interact by dragging the slider to a specific value. Binding a datasource captures this selected value.

Consequently, you can utilize this input value – for instance, within a standard action – to initiate a search for hotels whose rating match the entered value.

## Showcase

Here's a glimpse of how the **Range Input** component will look and behave in action:

<img alt="explorer" src={require('./img/rangeInput_Preview.gif').default} style={{borderRadius: '6px', height: '90%', width: '90%'}} />

## Triggers and Events

The **Range Input** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Blur| Calls for an action when the component loses focus (user clicks outside). |
|On Focus| Calls for an action when the component gains focus (user clicks on it). |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the component is in focus. |
|On Keyup| Calls for an action when a keyboard key is released while the component is in focus|

