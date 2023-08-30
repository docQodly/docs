---
id: matrix
title: Matrix
---
import Column from '@site/src/components/Column'


The **Matrix** component is a UI element categorized as an iterative component, designed to present a dynamic array of Stylebox components. These Stylebox elements are populated dynamically based on data retrieved from the component's datasource.

:::info 

Upon being placed on the canvas, the Matrix component includes a single Stylebox component, and this Stylebox is duplicated for each iteration of data.

:::


## Use Cases

The **Matrix** component finds application in various scenarios where data needs to be displayed iteratively and can be customized. Common use cases include:

- **Product Gallery**: Create an interactive product gallery where each Stylebox represents a product with its image, name, and price. 

- **News Feed**: Design a dynamic news feed by using the Matrix component to iterate over news articles. Each Stylebox can display the headline and a brief excerpt.

- **User Profile Showcase**: Build a user profile showcase where the Matrix iterates over user profiles, displaying profile images and usernames.


## Properties Customization

Enhance the **Matrix** component to align with your application's requirements using the following customization options:

- **Orientation**: Developers can choose between horizontal and vertical orientations for the Matrix. This choice affects the arrangement of Stylebox components and the presence of scrollbars.

    - <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
            <li><span style={{fontWeight: 'bold'}}>Vertical Orientation (Default)</span>: By default, the Matrix component is oriented vertically. This means that Stylebox components are stacked from top to bottom. If the content surpasses the defined height, a vertical scrollbar will automatically be shown, facilitating vertical scrolling to access all the content.</li> <br/>
            <li><span style={{fontWeight: 'bold'}}>Horizontal Orientation</span>: When the Matrix component is configured with a horizontal orientation, Stylebox components are arranged from left to right. If the content exceeds the available width, a horizontal scrollbar will automatically appear, enabling users to scroll through the content horizontally.</li>
        </Column.Item>
        <Column.Item width="35%">
            <img alt="explorer" src={require('./img/matrix_orientations.gif').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>


## Data Integration

The **Matrix** component is data-bound, meaning it relies on an external data source to populate its options. This allows the component to display and interact with data.


### <u>Data Binding</u>

To associate data with the **Matrix** component, follow these steps:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <li><span style={{fontWeight: 'bold'}}>Navigate to the Properties Panel</span>: Access the Data Access category located within the Properties panel for the Matrix component.</li>
        <br/>
        <li><span style={{fontWeight: 'bold'}}>Define the Datasource</span>: Specify the appropriate Datasource that contains the data you want to display within the Matrix. For instance, you can select an entity selection from a relevant dataclass, such as <code>roomSelection</code>.</li>
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/matrix_DataBinding.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### <u>Data Display</u>

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
