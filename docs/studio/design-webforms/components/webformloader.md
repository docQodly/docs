---
id: webformloader
title: Webform Loader
---
import Column from '@site/src/components/Column'

The **Webform Loader** component is a versatile UI element designed to integrate one webform into another within the context of your application.


## Use Cases

The **Webform Loader** component offers a multitude of applications, enhancing the modularity and interactivity of your webforms:

- **Nested Webforms**: Nest one webform within another to facilitate complex UI structures and content hierarchies.

- **Dynamic Content**: Utilize the Webform Loader to display dynamic content that can be updated on-the-fly through data binding

- **Conditional Loading**: Implement conditional loading of webforms based on user interactions or specific conditions.


## Properties Customization

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        The <strong>Webform Loader</strong> component functions by displaying a designated webform within the current webform. The webform to be displayed is determined based on the initial value set for the Webform Loader component. This initial value can be configured using either of the following methods:
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/webformLoader_InitialValue.png').default} style={{borderRadius: '6px', borderStyle: 'solid'}} />
    </Column.Item>
</Column.List>

<br/>

- <Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        <strong>Direct Configuration</strong>: Utilize the Properties panel of the Webform Loader to directly choose the target webform from a dropdown list.<br/><br/>
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/webformLoader_DirectConfiguration.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        <strong>Dynamic Binding</strong>: Establish a binding with a <strong>datasource of type Text</strong>. By binding the component to this datasource and assigning it an initial value, you gain the flexibility to dynamically update the contents of the Webform Loader. The initial value should correspond to the name of the target webform you intend to display. 
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/webformLoader_DynamicBinding.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

 
Note that:
:::info 
In the case of concurrent application of both methods, the content sourced from the bound datasource takes priority.
:::

## Navigating with Webform Loader

When orchestrating navigation actions through the Webform Loader component, it's crucial to employ the `Ref` property to specify the components requiring processing during the navigation event. This property guarantees that the target webform is loaded, and its contents are integrated into the current webform.

<img src={require('./img/webformLoader_Navigation.png').default} style={{borderRadius: '6px'}} />

Consider a travel agency's backoffice solution, where a content manager needs to manage various aspects of travel packages. For instance, when the content manager attempts to delete a specific flight associated with a package, clicking on the delete button can trigger a navigation action. This action could lead to the loading of the webform `modal_removeFlight` using the **Webform Loader** component with the reference `0FW_eM-2g1`.

<img src={require('./img/webformLoader_Navigation_Preview.gif').default} style={{borderRadius: '6px'}} />

## Triggers and Events

The **Webform Loader** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On DblClick| Calls for an action when the user double-clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|
