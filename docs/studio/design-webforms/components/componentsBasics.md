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
|Delete Component| Remove the selected component from the canvas. As an alternative solution, you can use the shortcut **Alt + Shift + Delete (⌥ + ⇧ + Delete for Mac)**.|
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


## Data Formatting

<Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
                Your webforms can incorporate datasource attributes with data types such as string, number, date, time, or duration. When these attributes are presented within components, you have the option to choose their display format in the Properties section.
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/formats.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>

:::info
Formatting options may vary based on the specific data type of the attribute and the type of component being used.
:::

<Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
                <ul>
                        <li>For <strong>Text (string)</strong>:</li> <br/>
                        <ul>
                                <li><strong>UPPERCASE</strong>: Converts all characters to uppercase.</li> 
                                <li><strong>lowercase</strong>: Converts all characters to lowercase.</li>
                                <li><strong>Capitalize</strong>: Capitalizes the first letter of the text.</li> 
                                <li><strong>Capitalize Each Word</strong>: Capitalizes the first letter of each word.</li> 
                        </ul>
                </ul>
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputFomat_Text.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>

<br/>

<Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
                <ul>
                        <li>For <strong>Number</strong>:</li> <br/>
                        <ul>
                                <li><strong>0</strong>: Standard numerical format.</li> 
                                <li><strong>0%</strong>: Displays the number as a percentage.</li>
                                <li><strong>#,##0</strong>: Adds thousands separators to the number.</li> 
                                <li><strong>#,##0.00</strong>: Adds thousands separators and displays two decimal places.</li> 
                        </ul>
                        <br/>
                        Refer to the <a href="https://support.microsoft.com/en-us/office/review-guidelines-for-customizing-a-number-format-c0a1d1fa-d3f4-4018-96b7-9c9354dd99f5">Review guidelines</a> for customizing <code>number formats</code>.
                </ul>
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputFomat_Number.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>

<br/>

<Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
                <ul>
                        <li>For <strong>Date</strong>:</li> <br/>
                        <ul>
                                <li><strong>Date short</strong>: Displays the date in a short format.</li> 
                                <li><strong>Date long</strong>: Displays the date in a long format.</li>
                                <li><strong>Date abbreviated</strong>: Displays the date with abbreviated month name.</li> 
                                <li><strong>ISO date GMT</strong>: Displays the date in ISO 8601 format with GMT time zone.</li> 
                                <li><strong>UTC String</strong>: Displays the date in a UTC format.</li>
                        </ul>
                        <br/>
                        Check the <a href="https://date-fns.org/v2.30.0/docs/format">date-fns library</a> for a comprehensive range of <code>date format</code> options and usage examples. <br/>
                        For instance, you can format your date as <code>EEE, MMM dd</code> to achieve a different format from <code>date abbreviated</code>, which has the format <code>EEE, MMM dd, yyyy</code>.
                </ul>
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputFomat_Date.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>

<br/>

<Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
                <ul>
                        <li>For <strong>Duration</strong>:</li> <br/>
                        <ul>
                                <li><strong>without seconds</strong>: Displays the time without seconds.</li> 
                                <li><strong>with seconds</strong>: Displays the time with seconds.</li>
                        </ul>
                </ul>
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/textInput_InputFomat_Time.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>

## Data Integration

This section serves as a fundamental introduction to the integration of data sources with components. It's essential to note that each component has its own dedicated section on its respective page, including the following subsections:

- **Data Binding**: This step configures the connection between a component and a data source, determining where the component retrieves its data.

- **Data Display**: After binding data, this section guides you in visually presenting data within the component, including configuring its appearance and additional components.

- **Dynamic Attribute Display**: This section explains how a component can automatically display attributes of a selected data source, offering detailed information without extra interactions.

- **Server-Side Interaction**: This section explains obtaining user selections in a server-side context when a datasource is bound to a component, enabling content retrieval and use.

:::note
Please note that the following subsections (Data Binding, Data Display, Dynamic Attribute Display, and Server-Side Interaction) may or may not be applicable to all components. Their presence or absence depends on the specific component's functionality and use case. 
:::