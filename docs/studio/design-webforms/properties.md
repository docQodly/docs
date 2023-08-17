---
id: properties
title: Properties
---


Available properties depend on the selected component. 

:::info

The following properties are **generic**, they are used by several components. **Specific** properties are proposed per component (see the documentation for each component). 

:::

![panel](img/propertie.png)

## Graphical control 

Some of the key features that can be accessed through the Properties panel include:

- CSS: The CSS class contains styles that are applied to the component, encompassing font sizes, colors, and layout styles, which influence its appearance and layout. You can refer to the Style Library for more information and available style options.
- Color scheme: The color scheme feature permits the customization of the component's color scheme, encompassing background colors, text colors, and border colors. This functionality provides flexibility in adapting the component's visual aesthetics to match the desired design.
- Background image: With the background image feature, you have the ability to assign a background image to the component. This capability enhances the visual appeal of the component and facilitates conveying a specific theme or mood effectively.
- Dimensions: The dimensions feature enables you to define the width, height, and other size-related properties of the component. By utilizing this feature, you can ensure that the component fits seamlessly within the layout of the webpage.
- Layout: The layout feature empowers you to specify the position of the component within the page, align it with other elements, and define its behavior when the page is resized. This functionality provides control over the overall structure and arrangement of the component.
- Appearance: The appearance attribute encompasses the component's position (relative, absolute, etc.), overflow behavior, and display style (block, flex, etc.). By adjusting these attributes, you can effectively control how the component is presented and interacted with on the webpage.
- Font: The font feature allows you to choose the font type, size, alignment, and style for the component's text. This versatility enables you to achieve the desired visual look and feel for the component's textual content.
- Borders and Border radius: You can define borders around the component, specifying attributes such as thickness, color, and style. The border radius feature enables you to determine the curvature or roundness of the component's corners. By adjusting this attribute, you can create various shapes and styles, adding aesthetic appeal to the component's design.

### Data access

In essence, the Properties panel is the heart of the component, offering the ability to customize it to suit preferences and create a visually appealing and unique web application. But it goes far furthur with the **Data Access** properties. This feature is available in all components, except for the  WebForm, and it's a complete game-changer. With Data Access, developers can access and manipulate the component's properties directly from the server, giving them complete control over the component's behavior.

The **Data Access** properties contain a `Server Side` field, which displays a reference to the component on the server side. This reference is like the component's address, allowing developers to access the component from anywhere in the application. These properties can be used to dynamically change the content of the website without any manual intervention, making it truly interactive by responding to user actions in real-time.

The **Data Access** properties contains other options/fields as well, depending on the component at hand. For instance:

- The `DataSource` field allows developers to define the source of data for the component to iterate on.
- The `Selected Element` field allows them to specify which element in the component is selected. 
- The `Iterate field` is available for developers to loop through that same set of data.

