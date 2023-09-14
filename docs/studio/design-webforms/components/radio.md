---
id: radio
title: Radio
---
import Column from '@site/src/components/Column'

The **Radio** component is an interactive UI element that enables users to make single or multiple selections from a predefined set of options. Users can choose one or more options using radio buttons associated with each value in the set.


:::info 

Unlike certain other components, the **Radio** component cannot be linked to a datasource to display data, instead, options must be configured through the properties panel.

:::


## Use Cases

**Radio** component serve various purposes in user interfaces, including:

- **User Preferences**: Select preferred theme, language, or notification settings.

- **Content Filtering**: Filter content based on specific categories or criteriay.

- **Survey Management**: Manage survey questions with predefined answer choices for collecting feedback and insights.



## Properties Customization

Enhance the **Radio** component to align with your application's requirements using the following customization options:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Type</strong>: Choose the appearance style of the radio buttons. You can select either "Radio" for standard radio buttons or "Tab" for a tab-like appearance.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img alt="explorer" src={require('./img/radio_type.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


- **Mode**: The Radio Button component offers two distinct selection modes:

    <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
            <ul>
                <li><strong>Single Selection</strong>: Users can choose only one option at a time, ensuring that their selections are distinct and non-overlapping.</li> <br/>
                <li><strong>Multiple Selection</strong>: Users can choose multiple options that are relevant to their needs.</li>
            </ul>
        </Column.Item>
        <Column.Item width="36%">
            <img alt="explorer" src={require('./img/radio_mode.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

<br/>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Default Value</strong>: Set a default value for the radio component, ensuring that a specific option is pre-selected when the component is loaded.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img alt="explorer" src={require('./img/radio_defaultValue.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


- **Options**: 
    - **Adding Options**: Incorporate new options by utilizing the "+" button within the Radio component. Each option can be customized with a label and a corresponding value, enhancing the clarity of user selections.
        <Column.List align="center" justifyContent="between">
            <Column.Item width="60%">
                <ul>
                    <li><strong>Label</strong>: A descriptive text label for each option.</li> <br/>
                    <li><strong>Value</strong>: A distinct value to each option, enabling effective data handling based on the selections made by users.</li>
                </ul>
            </Column.Item>
            <Column.Item width="35%">
                <img alt="explorer" src={require('./img/radio_Options.png').default} style={{borderRadius: '6px'}} />
            </Column.Item>
        </Column.List>

    - **Option Duplication**: Duplicate existing options to replicate configurations quickly by clicking on the <img alt="explorer" src={require('./img/duplicate.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon.

    - **Option Removal**: Delete options that no longer serve a purpose by clicking on the <img alt="explorer" src={require('./img/delete.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon.

    - **Moving Option**: Arrange options to your preferred position by clicking on the <img alt="explorer" src={require('./img/arrange.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon



## Data Integration

The **Radio** component captures and reflects the user's choice within this set.

:::info 
The **Radio** component provides selections from a predefined set of options within the [properties panel](#properties-customization), without relying on datasources.
:::

### Data Binding

To enable data capture for the Radio component, follow these steps:

- **Navigate to the Properties Panel**: Access the Data Access category located within the Properties panel for the Radio component.

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Define the Datasource</strong>: Specify the relevant Datasource that will capture the user's selected choice.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img alt="explorer" src={require('./img/radio_DataBinding.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### Server-Side Interaction

Retrieving user choices is straightforward. By binding a datasource to the **Radio** component, you can access and utilize the selected content.

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
        For example, when users make a single choice from a set of options, binding a datasource captures the selected option. <br/> <br/> <br/>
        Consequently, you can utilize this option value in various ways, such as within a standard action to initiate a search with matching attribute values.
	</Column.Item>
	<Column.Item width="50%">
        <img alt="explorer" src={require('./img/radio_standardAction.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

Additionally: 

:::tip 
The **Radio** component's datasource can also be linked to the value of an attribute in the currently selected entity of another datasource. This enables the component to automatically display the saved value of the selected option whenever a new entity is chosen.
:::

## Showcase

Here's a glimpse of how the **Radio** component will look and behave in action:

<img alt="explorer" src={require('./img/radio_Preview.gif').default} style={{borderRadius: '6px', height: '90%', width: '90%'}} />


## Triggers and Events

The **Radio Button** component primarily responds to the "**On Change**" event, triggering actions when users select different options. This interaction allows you to create dynamic and responsive interfaces based on user choices.

