---
id: webformloader
title: Webform Loader
---

The **Webform Loader** component is a versatile tool designed to seamlessly integrate one webform into another within the context of your application. By utilizing this component, you can efficiently embed and manage dynamic content, enhancing the overall user experience.



## Use Cases

The **Webform Loader** component offers a multitude of applications, enhancing the modularity and interactivity of your webforms:

- **Nested Webforms**: Seamlessly nest one webform within another to facilitate complex UI structures and content hierarchies.

- **Dynamic Content**: Utilize the Webform Loader to display dynamic content that can be updated on-the-fly through data binding, allowing you to provide users with the latest information.

- **Conditional Loading**: Implement conditional loading of webforms based on user interactions or specific conditions, enhancing the adaptability of your application's interface.


## Loading Mechanism and Configuration

The **Webform Loader** component functions by displaying a designated webform within the current webform. The webform to be displayed is determined based on the initial value set for the Webform Loader component. This initial value can be configured using either of the following methods:

- **Direct Configuration**: Utilize the Properties panel of the Webform Loader to directly choose the target webform from a dropdown list.

- **Dynamic Binding**: Establish a binding with a local datasource of type Text. By binding the component to this datasource and assigning it an initial value, you gain the flexibility to dynamically update the contents of the Webform Loader. In the case of concurrent application of both methods, the content sourced from the bound datasource takes priority.

The initial value should correspond to the name of the target webform you intend to display within the **Webform Loader**. 


:::info 

It's important to note that while both methods achieve the same goal, the data-bound approach enables real-time updates of the loaded webform contents as the bound datasource's value changes.

:::

## Webform Navigation

When implementing navigation actions involving the Webform Loader component, it's essential to utilize the "Ref" property to designate the components that need to be processed during the navigation event. This property ensures that the target webform is loaded and its contents are seamlessly integrated into the current webform, providing users with a seamless navigation experience.

( ☢️ to be done ☢️ )

## Triggers and Events

The **Webform Loader** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On DblClick| Calls for an action when the user double-clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|
