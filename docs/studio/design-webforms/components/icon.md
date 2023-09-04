---
id: icon
title: Icon
---
import Column from '@site/src/components/Column'

The **Icon** component is a UI element that displays graphical symbols or icons in web applications.


## Use Cases

The **Icon** component serves various purposes within user interfaces, including:

- **Action Indicators**: Icons are used to represent actions, such as "Save," "Delete," or "Print".

- **Navigation Enhancements**: Icons can be employed to enhance navigation by representing menu items, links, or categories.

- **Information Presentation**: Icons are utilized to visually convey information, such as alerts, warnings, or success messages.


## Properties Customization

Enhance the **Icon** component to align with your application's requirements using the following customization options:

- <Column.List align="center" >
        <Column.Item width="50%">
                <span style={{fontWeight: 'bold'}}>Icon</span>: Select the desired icon from a predefined list of icons. 
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/button_icon.png').default} style={{borderRadius: '6px', width: '60%'}} />
        </Column.Item>
</Column.List>



## Data Binding

When it comes to data-binding, it's important to note that the **Icon** component itself is not inherently data-bound. Unlike components like the **DataTable** that derive their content from specified datasources, the main purpose of the **Icon** component is to provide a visual representation.


## Triggers and Events

The **Icon** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Keyup| Calls for an action when a keyboard key is released while the component is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the component is in focus. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|