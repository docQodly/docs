---
id: selectbox
title: Select Box
---

The **Select Box** component is designed to allow users to select an item from a list of Stylebox components. It is particularly useful for providing a streamlined way to choose from various options within a dropdown-style interface.

:::info 

The **Select Box** component is part of the iterative components category, which enables you to iterate over a dataset to facilitate user selections.

:::

## Use Cases

The Select Box component finds application in various scenarios where a single value needs to be selected from a predefined list. Common use cases include:

- **Employee Allocation**: In resource management applications, the Select Box component can assist in assigning employees to projects or tasks by providing a dropdown list of available team members.

- **Task Priority Selection**: When managing tasks within a backoffice application, users might need to assign priorities to tasks. The Select Box component can offer a dropdown list of priority levels, simplifying the process of assigning importance to tasks.

- **Department Selection for Ticketing**: In a support ticketing system, users can choose the department or category to which a ticket belongs. The Select Box component streamlines this process by offering a dropdown menu of available departments, ensuring that tickets are routed to the appropriate team.

## Customization Through Properties Panel

Enhance the Select Box component to align with your application's requirements using the following customization options:

- **Placeholder**: Display a text as a dimmed placeholder in the select box. 

- **Number of items**: Specify the maximum number of items to display simultaneously in the component.

- **Show length**: Adds a string indicating the total number of items within the component. You can customize this pattern to suit your requirements, ensuring users have a clear understanding of the available options.

- **Enable search**: Adds a search area to the top of the component. This empowers users to filter the displayed options by entering specific characters. Developers have the flexibility to define the datasource attribute(s) to be searched within, enhancing the efficiency of option discovery.

## Data-Bounding

The **Select Box** component is data-bound, meaning it relies on an external data source to populate its options. This allows the component to display and interact with data seamlessly.

### <u>Data Display</u>
( ☢️ to be done ☢️ )

### <u>Server-Side Interaction</u>
( ☢️ to be done ☢️ )


## Triggers and Events

The **Select Box** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Select| Calls for an action when an item within the component is selected. |

