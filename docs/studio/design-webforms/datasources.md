---
id: datasources
title: Datasources
---
import Column from '@site/src/components/Column'

Datasources are integral to Qodly's architectural design, simplifying the development of web applications. They act as **data connectors, serving as references** that automatically activate events upon data changes. These datasources can be **linked** to webform components, providing an intuitive way to display and manage data within your application.

## Understanding Datasources

### Components and Datasources

[Components](./components/componentsBasics.md) are UI elements that can be bound to datasources, allowing them to display attributes from these datasources. When a datasource changes, the component automatically reflects the updated data. For instance, if a function returns a datasource as a result, any changes to that datasource will be immediately reflected in the associated component.

![components](./img/datasource-1.1.png)

### Events and Datasources 

You can also attach events to datasources, triggering specific actions when these datasources are updated in the web browser. Please refer to [Datasource Events](events.md#datasource-events) for more details.

![components](./img/datasource-1.2.png)

## Datasource Types

### Catalog Datasources

Catalog datasources (also known as **ORDA datasources**), serve as references to entities and entity selections that originate from the server and are based on the data model.

:::info 
These datasources optimize data exchange by selectively requesting only the attributes displayed by the component from the server and then making them available in the browser.
:::

### Scalar Datasources

Scalar datasources, on the other hand, are confined to the browser's local environment. They can be generated directly within the browser and subsequently transmitted to the server during a function call. Scalar datasources are versatile and can take on various data types, including String, Number, Boolean, Date, Object, or Collection.

:::info 
It's crucial to emphasize that Scalar datasources do not originate from the Data model and, consequently, do not possess persistence.
:::

## Datasource Scopes

### Webform Datasources

Webform Datasources are scoped to the webform where they are defined. They can only be used within that specific webform.

### Shared Datasources

Shared Datasources, on the other hand, are scoped to the entire application and can be utilized in multiple webforms within the same project.

:::info 
By default, when you [**create a datasource**](#creating-a-datasource) without specifying a namespace, you define a webform datasource.
:::

#### Shared functions 

Shared functions are also accessible when Entity and Entity Selection serve as shared datasources, making them available for use in multiple webforms within the same project. 

### Determining the Scope of Datasources

When selecting a component bound to a datasource, the Properties panel provides information about whether the datasource is shared:

- If the tag reads **webform**, it signifies a local datasource visible only within the current webform. 

- On the other hand, if there is a tag with **a specific name**, it implies that you have passed a shared datasource belonging to a namespace.

:::info 
When configuring a function event, the Contextual panel indicates whether the function is shared.
:::

## Creating a datasource 

Within the Webform Editor, the **Datasources** section conveniently organizes available datasources. This section includes:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li>A <strong>Search</strong> area for filtering the datasource list.</li>
            <br/>
            <li>The <strong>Catalog</strong>, containing:</li>
            <br/>
            <ul>
                <li>Dataclasses from your application. Here, you can designate entities or entity selections from your Datastore, which will be handled by the server as datasources.</li>
                <br/>
                <li>Functions defined at the datastore level and within each dataclass.</li>
            </ul>
            <br/>
            <li><strong>This Webform</strong>: Datasources exclusive to the current webform.</li>
            <br/>
            <li><strong>Namespaces</strong>: Shared datasources organized by namespaces. You can create a namespace by clicking the <code>+</code> icon or when defining a shared datasource.</li>
        </ul>        
	</Column.Item>
	<Column.Item width="30%">
        <img alt="explorer" src={require('./img/data-sources.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### From the Catalog

To create Webform or Shared datasources directly from the Catalog, follow these steps:

<Column.List align="center" justifyContent="between">
	<Column.Item width="50%">
                <ul>
                        <li>In the Datasources section, choose <strong>Catalog</strong> > <strong>Data Classes</strong>.</li>
                        <br/>
                        <li>Click the <code>+</code> icon next to a defined Dataclass.</li>
                        <br/>
                        <li>Enter the name of the datasource. </li>
                        <br/>
                        <li>Select the datasource type, either through <code>Entity selection</code> or <code>Entity</code>, to establish an ORDA data source. Afterward, proceed to choose its Dataclass and configure its settings, including initial values, page size, and depth.</li>
                        <br/>
                        <li>To create a shared datasource, specify a <code>Namespace</code>, for a webform (non-shared) datasource, leave the field empty.</li>
                </ul>        
	</Column.Item>
	<Column.Item width="45%">
                <img alt="explorer" src={require('./img/Catalog.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::info 
Specifying a namespace places the datasource in the **Namespaces** section, while without a namespace, it is situated in the **This Webform** section.
:::

### From This Webform

To create Webform datasources, follow these steps:

<Column.List align="center" justifyContent="between">
	<Column.Item width="50%">
                <ul>
                        <li>Click the <code>+</code> icon in the header of the <strong>This Webform</strong> section.</li>
                        <br/>
                        <li>Enter the name of the datasource. </li>
                        <br/>
                        <li>Choose the datasource type and configure its initial value according to the selected type.</li>
                </ul>        
	</Column.Item>
	<Column.Item width="45%">
                <img alt="explorer" src={require('./img/ThisWebform.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br/>

:::info 
For Entity Selection or Entity types, make sure to also configure additional settings such as Dataclass, page size, or depth for the ORDA data source.
:::


### From a Namespace

To create Shared datasources, follow these steps:

<Column.List align="center" justifyContent="between">
	<Column.Item width="50%">
                <ul>
                        <li>Click the <code>+</code> icon next to a defined <strong>Namespace</strong>. <br/><br/>
                        If you haven't created a Namespace yet or want to create an additional one, click the <code>+</code> icon in the header of the <strong>Namespaces</strong> section to establish one before proceeding to create a shared datasource within it.</li>
                        <br/>
                        <li>Enter the name of the datasource. </li>
                        <br/>
                        <li>Choose the datasource type and configure its initial value according to the selected type.</li>
                </ul>        
	</Column.Item>
	<Column.Item width="45%">
                <img alt="explorer" src={require('./img/Namespace.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br/>

:::info 
For Entity Selection or Entity types, make sure to also configure additional settings such as Dataclass, page size, or depth for the ORDA data source.
:::

### Renaming a datasource

You can easily rename a datasource from the contextual panel. In doing so, Qodly Studio will automatically update references to the renamed datasource:

- Within components bound to the datasource.

- In other datasources where the renamed datasource serves as the origin.

:::caution
Please note that when renaming a shared datasource, only opened web forms can have their references renamed.
:::

### Tracking Datasource Usage


<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        The <strong>Inspect</strong> option allows you to see where your datasources are used within your webforms. 
        <br/><br/>
        Toggle the option by clicking the icon, then hover over a datasource to highlight its location in your webform.
	</Column.Item>
	<Column.Item width="40%">
        <img alt="explorer" src={require('./img/inspect-button.png').default} style={{borderRadius: '6px'}} />
		<img alt="explorer" src={require('./img/inspect-button.gif').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


## Binding a Datasource to a Component

Binding a datasource to a component can be accomplished through several methods:

- Dragging and dropping it from the **Data Sources** section onto a component.

- Selecting a component and entering the name of the datasource in the **Properties panel** > **Data Access** > **DataSource**.

:::info Shortcuts

For efficiency, if you drag and drop an Entity Selection attribute onto a [**Select Box**](components/selectbox.md) or [**Matrix**](components/matrix.md) component, the **$This.attributeName** binding is automatically established:


For [**images**](components/image.md), the binding is automatically displayed in the Data Access panel:

<img alt="explorer" src={require('./img/BindingDatasourceToComponent.gif').default} style={{borderRadius: '6px'}} />

:::


### Iterative components

Iterative components enable you to work with data by iterating through it. These components provide the flexibility to select individual items from the data as independent datasources.


:::info
The following components fall into the category of iterative components: [**Datatable**](components/datatable.md), [**Matrix**](components/matrix.md), and [**Select Box**](components/selectbox.md).
:::

Iterative components can be bound to two types of datasources:

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ul>
            <li><strong>DataSource</strong>: This is the primary data source used for iterating through data. Its attributes are bound to the component, allowing you to display and work with the iterative data. Typically, this data source represents an entity selection or a array. </li>
            <br/>
            <li><strong>Selected Element</strong>: This secondary data source is used to retrieve the currently selected item within the iterative component. In most cases, it represents an entity or a array element.</li>
        </ul>        
	</Column.Item>
	<Column.Item width="40%">
        <img alt="explorer" src={require('./img/DataAccessPanel.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Capturing Function Results in a Datasource

You can capture the results of a function call and store them in a datasource. For example, you can configure an event that calls a function and then captures the outcome, saving it in a datasource. 
