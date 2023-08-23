---
id: textinput
title: Text Input
---


The **Text Input** component serves as a crucial element for user interactions, allowing seamless input of alphanumeric data within your webform. By offering various input types, this component caters to a wide range of data entry scenarios.


## Use Cases

The Text Input component provides a versatile solution for a wide range of backoffice scenarios, streamlining data entry and enhancing user interactions:

- **User Profile Management**: Incorporate the Text Input component in user profile management interfaces. Users can conveniently update their personal information, such as names, contact details, and addresses, ensuring accurate and up-to-date records.

- **Data Filtering**: Enhance data filtering capabilities within backoffice applications. Implement Text Input components to allow users to input search criteria, making it easier to locate specific records within large datasets.

- **Comments and Notes**: Integrate Text Input components within comment or note sections of backoffice systems. Employees can leave comments, feedback, or additional information on records, facilitating efficient communication and collaboration.


## Customization Through Properties Panel

Enhance the **Text Input** component to align with your application's requirements using the following customization options:

- **Label Position**: Developers can tailor the label's position, placing it above, below, to the left, to the right, or even hidden.

- **Input Customization**: The input field allows for personalized configurations, including :
    
    - **Placeholder**: Set a placeholder to provide users with a hint or example of the expected input. This text appears within the input field and disappears as soon as users begin typing.

    - **Input Type**: Select the appropriate input type to match the nature of the expected data. Available types include:

        - **text**: Standard alphanumeric data.
        - **number**: Numerical values only.
        - **password**: Concealed input for sensitive data.
        - **date**: Restriction to date values with an associated date picker.
        - **time**: Limiting input to time values (if supported by the component).
    
    - **Input Format**: Specify the desired format for the entered data. This is especially relevant for dates and times, where specific formatting ensures consistency and clarity.

    - **Read-Only Option**: Toggle the readOnly property to prevent users from editing the input content. This is useful when displaying pre-filled or calculated data that should not be modified.


## Data-Binding

The **Text Input** component allows for seamless integration of datasources, enabling dynamic data binding and interaction within the webform. This feature empowers developers to create responsive and data-driven user experiences.

### Data Display
( ☢️ to be done ☢️ )

### Data Interaction
( ☢️ to be done ☢️ )


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