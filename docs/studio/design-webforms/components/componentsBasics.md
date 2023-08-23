---
id: componentsBasics
title: Components basics
---
import Column from '@site/src/components/Column'

<br/>

Components are the fundamental building blocks that constitute your application's user interface. These modular elements allow you to construct rich and dynamic interfaces by combining various functionalities and visual elements. 



## Locating Components

Components are conveniently accessible from the left side panel in the **Components** tab section. This panel serves as a hub where you can explore and select the components you need to design your application's interface.



## Adding Components

Incorporating components into your webform is a straightforward process that involves **drag-and-drop** functionality. Simply select a component and place it onto your working area or canvas. 

You have the flexibility to drop components directly onto the webform itself, as well as within other components that accept nested elements. This versatility allows you to construct complex layouts and hierarchies by combining different components within one another. 

<img alt="explorer" src={require('./img/addingComponents.gif').default} style={{borderRadius: '6px'}} />



## Tooltip

<Column.List align="center" justifyContent="between">
	<Column.Item width="65%">
        When you select a component on the canvas, a contextual tooltip becomes available, offering a variety of actions that can be performed on the chosen component. These actions provide you with the tools to efficiently manage and manipulate your webform's design. Here's a breakdown of the actions available in the tooltip:
	</Column.Item>
	<Column.Item width="25%">
        <img alt="explorer" src={require('./img/tooltip2.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>



### Essential Options

|Option|Description|
|---|---|
|Move| Reposition the selected component on the canvas.|
|Select Parent Component| Select the parent component of the current selection.|
|Delete Component| Remove the selected component from the canvas.|
|Export Styles| Export the overridden CSS properties to a new CSS class.|
|Open Events Panel| Binding events to the selected component.|
 

### More Options

|Option|Description|
|---|---|
|Copy| Make a copy of the selected component. As an alternative solution, you can use the shortcut **Alt + C (⌥ + C for Mac)**|
|Cut| Cuts the selected component so you can paste it elsewhere. As an alternative solution, you can use the shortcut **Alt + X (⌥ + X for Mac)**|
|Paste| Paste the copied component directly into your webform. As an alternative solution, you can use the shortcut **Alt + V (⌥ + V for Mac)**|
|Paste into| Paste the copied component into another component. As an alternative solution, you can use the shortcut **Alt + ⇧ + V (⌥ + ⇧ + V for Mac)**|
|Duplicate| Duplicate the selected component in the same parent component. As an alternative solution, you can use the shortcut **Alt + D (⌥ + D for Mac)**|
|Save as craft| Save the component, its child components, and their styles as a reusable component. As an alternative solution, you can use the shortcut **Alt + K (⌥ + K for Mac)**|
|Copy content| Copy content. As an alternative solution, you can use the shortcut **Alt + ⇧ + C (⌥ + ⇧ + C for Mac)**|
|Clear styles| Clear the styles of the selected component (resets the overridden CSS properties). As an alternative solution, you can use the shortcut **Alt + J (⌥ + J for Mac)**|
|Clear content| Clear content within the selected component. As an alternative solution, you can use the shortcut **Alt + E (⌥ + E for Mac)**|