---
id: matrix
title: Matrix
---
import Column from '@site/src/components/Column'


The **Matrix** component is a UI element designed to display a dynamic array of Stylebox components. 

:::info 

Categorized under iterative components, the **Matrix** component is specialized in showcasing dynamic arrays of **Stylebox** components based on the component's designated datasource.

:::


Upon being placed on the canvas, the Matrix component includes a single Stylebox component, and this Stylebox is duplicated for each iteration of data.


## Use Cases

The **Matrix** component finds application in various scenarios where data needs to be displayed iteratively and can be customized. Common use cases include:

- **Product Gallery**: Create an interactive product gallery where each Stylebox represents a product with its image, name, and price. 

- **News Feed**: Design a dynamic news feed by using the Matrix component to iterate over news articles. Each Stylebox can display the headline and a brief excerpt.

- **User Profile Showcase**: Build a user profile showcase where the Matrix iterates over user profiles, displaying profile images and usernames.


## Properties Customization

Enhance the **Matrix** component to align with your application's requirements using the following customization options:

- **Orientation**: Developers can choose between horizontal and vertical orientations for the Matrix. This choice affects the arrangement of Stylebox components and the presence of scrollbars.

    <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
            <ul>
                <li><strong>Vertical Orientation (Default)</strong>: By default, the Matrix component is oriented vertically. This means that Stylebox components are stacked from top to bottom. If the content surpasses the defined height, a vertical scrollbar will automatically be shown, facilitating vertical scrolling to access all the content.</li>
                <li><strong>Horizontal Orientation</strong>: When the Matrix component is configured with a horizontal orientation, Stylebox components are arranged from left to right. If the content exceeds the available width, a horizontal scrollbar will automatically appear, enabling users to scroll through the content horizontally.</li>
            </ul>
        </Column.Item>
        <Column.Item width="35%">
            <img alt="explorer" src={require('./img/matrix_orientations.gif').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>


## Data Integration

The **Matrix** component is data-bound, meaning it relies on an external datasource to populate its options. This allows the component to display and interact with data.

:::info 
The datasource for the **Matrix** component can take the form of either an `ORDA entity selection` or an `array`.
:::

### Data Binding

To associate data with the **Matrix** component, follow these steps:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Navigate to the Properties Panel</strong>: Access the Data Access category located within the Properties panel for the Matrix component.</li>
            <br/>
            <li><strong>Define the Datasource</strong>: Specify the appropriate Datasource that contains the data you want to display within the Matrix. For instance, you can select an entity selection from a relevant dataclass, such as <code>roomSelection</code>.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/matrix_DataBinding.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip 
Alternatively, you can establish the connection by dragging and dropping the datasource onto the Matrix component.
:::

### Data Display

To display data iterated over a datasource, you can follow these additional steps:

- **Access the Matrix**: Within the Matrix component, locate the embedded Stylebox.
- **Add a Component**: Add a Text component or other relevant components within the Stylebox.
<img alt="explorer" src={require('./img/matrix_DataDisplay.png').default} style={{borderRadius: '6px', borderStyle: 'solid'}} />

- **Configure the Component**: Click on the component you've added to enter its editing mode. The process of configuring components varies based on their type:

    - **Toggle Datasource**: Prepare to connect the component to the datasource in the next step by using the `Toggle Datasource` button.

    - **Properties Panel**: In the next step, you'll configure them through the `Data Access` category in the Properties panel. 

- **Choose the Iterator**: Choose the iterator corresponding to the iterated data (e.g., <code>$This</code>) to represent the current data item.


- **Choose the Attribute**: Once you've selected the iterator, choose the specific attribute that you want to display within the component. This could include related entity selections. For example, use an embedded Matrix within the same Matrix to present various choices like room options (with/without breakfast).

    <img alt="explorer" src={require('./img/matrix_DataDisplay_embeddedMatrix.png').default} style={{borderRadius: '6px', borderStyle: 'solid'}} />


### Server-Side Interaction

- **Direct Datasource Interaction**: When using a direct datasource like `Rooms`, you can bind functions to button clicks using `$This`. This functionality enables the execution of functions such as "selectRoom" upon button clicks.

    Follow these steps to achieve this functionality:

    - Integrate the Matrix component within the interface.
    - Select a direct datasource like <code>Rooms</code> for the Matrix.
    - Embed buttons within the Matrix for each iterated data.
    - Bind the desired function, , e.g., <code>selectRoom</code>, to the button click event using <code>$This</code>.


- **Related Entity Interaction**: Alternatively, you can leverage related entity selections from the primary datasource, such as `$This.roomOptionsSelection`. This method involves embedding another Matrix within the main Matrix to handle each iterated data. This allows you to access options associated with a particular room, such as services offered.

    Follow these steps to implement this approach:

    <Column.List align="center" justifyContent="between">
        <Column.Item width="50%">
            <ul>
                <li> Integrate the Matrix component within the interface.</li>
                <li> Select a direct datasource like <code>Rooms</code> for the main Matrix.</li> 
                <li> Embed another Matrix for each iterated data within the main Matrix.</li> 
                <li> Choose a Related Entity datasource like <code>$This.roomOptionsSelection</code> for the embedded Matrix.</li>
                <li> Integrate buttons within the embeded Matrix for each iterated data.</li> 
                <li> Bind the desired function, e.g., <code>selectRoomOption</code>, to the button click event using <code>This</code>.</li> 
            </ul>
        </Column.Item>
        <Column.Item width="50%">
            <img alt="explorer" src={require('./img/matrix_ServerSideInteraction_RelatedEntity.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>


### Dynamic Attribute Display


<Column.List align="center" justifyContent="between">
	<Column.Item width="65%">
        The <code>Matrix</code> component can link its currently selected entity to a datasource in the <code>Selected Element</code> field. This feature allows the component to automatically display the attributes of the selected element whenever a new entity is chosen. 
	</Column.Item>
	<Column.Item width="30%">
        <img alt="explorer" src={require('./img/dynamicAttributeDisplay_SelectedElement.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        These attributes can be showcased in other configured components, such as a <code>Text</code> component, to display the corresponding attribute values.
	</Column.Item>
	<Column.Item width="25%">
        <img alt="explorer" src={require('./img/dynamicAttributeDisplay_attributeValue.png').default} style={{borderRadius: '6px', width: '100%'}} />
	</Column.Item>
</Column.List>


## Showcase

Here's a glimpse of how the **Matrix** component will look and behave in action:

<img alt="explorer" src={require('./img/matrix_Preview.gif').default} style={{borderRadius: '6px'}} />


## Triggers and Events

The **Matrix** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Keyup| Calls for an action when a keyboard key is released while the component is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the component is in focus. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|
|On Select| Calls for an action when an item within the component is selected. |
