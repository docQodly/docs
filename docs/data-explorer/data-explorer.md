---
id: data-explorer
title: Data Explorer
---

import Column from '@site/src/components/Column'

## Overview

The Data Explorer provides a comprehensive web interface for viewing, querying, and editing data within your project's datastore. This tool allows you to browse all entities, search, sort, and filter attribute values, facilitating the identification and resolution of issues during the development process. Additionally, it offers control over and editing capabilities for your data.


## Requirements

### Supported Browsers

The Data Explorer supports the following web browsers:

- Chrome

- Safari

- Edge

- Firefox

### Resolution

- Minimum: 1280x720

- Recommended: 1920x1080


## Opening the Data Explorer

To open the Data Explorer web page for a Qodly application:

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <ol>
          <li> Open your application in Qodly Studio. </li> &nbsp;
          <li> Click on the <code>Data</code> button on Qodly Studio home page: </li> &nbsp;
          Or, click on the <code>Data</code> button in the header bar:  <img src={require('./img/data-button.png').default} style={{borderRadius: '6px'}} />
        </ol>
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/dataExplorerButton.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

&nbsp; 

The Data Explorer window will open in a new tab, displaying the available data in your application.


## Data Explorer Interface

The Data Explorer interface consists of several key areas:

<img alt="data-explorer-areas" src={require('./img/dataExplorerAreas.png').default} style={{borderRadius: '6px',width:'90%' }} />

1. **DataClasses Area** : Located on the left side, this area allows selection and display of dataclasses. You can select which dataclasses to display and Use the search areas to filter dataclass names.

2. **Attributes Area** : Located on the left side, this area allows selection and display of the attributes of the selected dataclass. Attributes are ordered by creation, with specific icons for primary key and indexed attributes. Use the search areas to filter attribute names and you can reduce the number of columns in the data grid by unchecking attributes.

3. **Dark Mode** : Switch to dark mode using the selector at the bottom of the page.

4. **Search Area** : Two query modes are available: 

    - Query on attributes: The default mode
    
    - Advanced query with expression: Selected using the corresponding button <img alt="data-explorer-query" src={require('./img/queryMode.png').default} style={{borderRadius: '6px',width:'10%' }} /> (the X button allows you to reset the query area and thus stop filtering).


5. **Data Grid** : The central part displays the data grid with entities of the selected dataclass, with each column representing an attribute. The default view shows all entities, which can be filtered using the search area.

6. **Details Area** : On the right side, displaying attribute values of the selected entity and related data. Navigation between entities is facilitated by **First** / **Previous** / **Next** / **Last** links.

    - All attribute types, including pictures, JSON objects, calculated, and alias attributes are displayed. Related data can be viewed in expandable/collapsible areas.

    - Ctrl+Click (Windows) or Command+Click (macOS) on related attribute names opens their values in a floating area.

:::info
The name of the selected dataclass is added as a tab above the data grid. Using these tabs, you can switch between dataclasses that have been already selected. You can remove a referenced dataclass by clicking the "remove" icon (X) after the dataclass name.
:::



## Browsing Data

The Data Explorer provides a detailed and customizable view of your data, allowing you to query and sort it effectively.


### Ordering entities

Entities can be reordered based on attribute values (excluding picture and object attributes):

- Click on a column header to sort entities. By default, the sort is ascending. Clicking twice reverses the sort order (descending). Sorted columns are marked with an icon <img src={require('./img/dataExplorer7.png').default} style={{borderRadius: '6px', width: '5%'}} /> and italicized names _italics_. 

:::info
Multi-level sorting is available by holding the **Shift** key and clicking sequentially on column headers.
:::


### Query on attributes

Filter entities by entering values to find (or to exclude) in the areas above the attribute list. Filters are applied across multiple attributes with an implicit AND operation. The entity list is automatically updated when you type in.

Different operators are available based on the data type:

<Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
      - <strong>Text:</strong> Text filters are case-insensitive and of the "starts with" type. Wildcard character (@) can be used for more specific queries:
  </Column.Item>
  <Column.Item width="35%">
    <img src={require('./img/dataExplorer6.png').default} style={{borderRadius: '6px', width: '60%'}} />&nbsp; 
  </Column.Item>
</Column.List>

  |A filter with|Finds|
  |---|---|
  |Bel|All values beginning with “Bel”|
  |@do|All values containing “do”|
  |Bel@do|All values starting with “Bel” and containing “do”|

<Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
    - <strong>Dates:</strong> Use the datepicker widget for date attributes (Click on the date area to display the widget).
  </Column.Item>
  <Column.Item width="35%">
    <img src={require('./img/DEFilter2.png').default} style={{borderRadius: '6px', width: '60%'}} />&nbsp; 
  </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
    - <strong>Booleans:</strong> Boolean attributes can be filtered on true, false, null, or not null.
    &nbsp; &nbsp; 
    <ul>
      <li>null: Attribute value not defined.</li> &nbsp;
      <li>not null: Attribute value defined (true or false).</li>
    </ul>
  </Column.Item>
  <Column.Item width="35%">
    <img src={require('./img/DEFilter3.png').default} style={{borderRadius: '6px', width: '30%'}} />&nbsp; 
  </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
    - <strong>Numeric operators:</strong> Select operators (default is "=") for numeric, date, and time attributes. You can select another operator from the operator list.
  </Column.Item>
  <Column.Item width="35%">
    <img src={require('./img/DEFilter1.png').default} style={{borderRadius: '6px', width: '30%'}} />
  </Column.Item>
</Column.List>

:::info

<Column.List align="center" justifyContent="between">
  <Column.Item width="60%">
    If you enter several attributes, a <code>AND</code> is automatically applied. For example, the following filter displays entities with <code>firstname</code> attribute starting with "flo" AND <code>salary</code> attribute value > 50000.
  </Column.Item>
  <Column.Item width="35%">
    <img src={require('./img/dataExplorer9.png').default} style={{borderRadius: '6px'}} />
  </Column.Item>
</Column.List>

:::

:::note
You cannot filter on picture or object attributes.
:::

### Advanced Queries With Expression

<Column.List align="center" justifyContent="between">
  <Column.Item width="50%">
    Enter any expression to filter entities in the advanced query area:
  </Column.Item>
  <Column.Item width="45%">
    <img src={require('./img/dataExplorer8.png').default} style={{borderRadius: '6px'}} />
  </Column.Item>
</Column.List>


:::tip
Use [documented query expressions](../orda/queries.md), with limitations:

- No `eval()` formulas for security.

- No placeholders, use `queryString` with values.

- String values with spaces must be in double quotes ("").
:::


#### Example

For example:

```
Quantity > 4 AND Purchaser.Name= "Harry"
```

Display both [`queryPlan` and `queryPath`](../orda/queries.md#about-queryplan-and-querypath) details by clicking the expand <img src={require('./img/expand.png').default} style={{borderRadius: '6px', width:'30%'}} /> button:

<img src={require('./img/dataExplorer12.png').default} style={{borderRadius: '6px'}} />

Hover over subquery blocks for details.

Right-click in the query area to display previous valid queries:

<img src={require('./img/dataExplorer11.png').default} style={{borderRadius: '6px'}} />


## Editing Data

Modify attribute values, and add or delete entities through the Data Explorer. These features are intended for administrators to test implementations or fix invalid data.

### Allow Editing

Enable editing mode using the **Allow editing** selector to display edit action buttons: <img src={require('./img/editing.png').default} style={{borderRadius: '6px', width:'30%'}} />


:::info
The selector is enabled per dataclass and per browser session to prevent accidental modifications, as no confirmation dialogs are displayed.
:::


### Entering Values

With editing enabled, enter values for new or selected entities through input widgets in the **Details** area. Editable attributes include:

- text
- boolean
- numeric
- date
- time
- image (upload or drag and drop)
- object (JSON string)

:::info
Blob attributes cannot be modified. 
:::

:::tip
New or modified values are stored in the local cache and must be [explicitly saved](#saving-modifications).
:::


### Creating Entities

Create a new entity by clicking the creation button <img src={require('./img/data-explorer-new.png').default} style={{borderRadius: '6px', width:'3%'}} />. [Enter values](#entering-values) for the entity, which is stored in the local cache and must be [explicitly saved](#saving-modifications).


:::info
Attribute values that need to be calculated by Qodly (autogenerated IDs, computed attributes) will be returned only after you saved the entity.
:::

### Reloading Values

The **reload** button <img src={require('./img/data-explorer-reload.png').default} style={{borderRadius: '6px', width:'3%'}} /> updates the entity attribute values from the data file, ensuring the most recent saved values are displayed.


### Saving Modifications

Modifications are done locally and need to be saved to be stored in the data file. Click the Save button <img src={require('./img/data-explorer-save.png').default} style={{borderRadius: '6px', width:'3%'}} /> to save changes. 


:::info
Existing entity modifications are automatically saved when selecting another entity of the same dataclass. In case of conflicts, an error message is displayed, and you can [reload values](#reloading-values) to get the new value and apply your modifications.
:::

### Deleting Entities

Delete entities by clicking the delete button <img src={require('./img/data-explorer-delete.png').default} style={{borderRadius: '6px', width:'3%'}} />.

To delete multiple entities, select them using **Shift+click** (continuous selection) or **Ctrl/Command+click** (discontinuous selection) and click the **delete** button.


:::note
If entities cannot be deleted due to conflicts (e.g., locked on the server), they are highlighted in the list.
:::

:::caution
No confirmation dialog is displayed when deleting entities. Selected entities are immediately deleted from the data.
:::
