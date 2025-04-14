---
id: datatable
title: Data Table
---
import Column from '@site/src/components/Column'

The **DataTable** component is a versatile UI element used to display data in a tabular format, resembling a table. It efficiently iterates through a designated Qodly Source, converting it into an organized list comprising rows and columns. In the DataTable, columns represent attributes, rows represent entities, and a header row labels the columns.



## Use Cases

The **DataTable** component proves invaluable across a multitude of scenarios where data needs to be comprehensively displayed, including:

- **Data Analysis**: Utilize the DataTable to showcase datasets, enabling users to perform in-depth analysis, exploration, and comparison of various attributes.

- **Inventory Management**: Employ the DataTable in inventory management systems to present product details, quantities, and availability.

- **Sales Reports**: For tracking sales performance, the DataTable effectively displays revenue, product sales, and other relevant metrics.



## Properties Customization

Enhance the **DataTable** component to align with your application's requirements using the following customization options:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Header Height</strong>: Define the height of the header row in pixels.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
                <img src={require('./img/dataTable_HeaderHeight.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Row Height</strong>: Set the height of each row (excluding the header) in pixels.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/dataTable_RowHeight.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Show Borders</strong>: Enable or disable the display of line and column borders within the DataTable.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/dataTable_ShowBorders.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- **Columns Area**: The columns area is where developers can manage the columns within the DataTable. It provides options for adding, moving, or removing columns to customize the structure of the table.

    - **Adding Columns**: To add a new column, click on the `+` icon. This action triggers the appearance of a new column configuration area located at the bottom of the column list. This area allows you to define properties for the new column:
        <Column.List align="center" justifyContent="between">
                <Column.Item width="60%">
                        <ul>
                                <li><strong>Title</strong>: The title is the text displayed in the header row as the label for the column. It also appears as the column name in the properties area.</li> &nbsp;
                                <li><strong>Source</strong>: The source attribute specifies the qodlysource for the column. Typically, it refers to an attribute whose value depends on each element of the DataTable's qodlysource. This determines the content to be displayed in the column cells.</li> &nbsp;
                                <li><strong>Format</strong>: The format property allows you to define how the data in the column should be displayed, depending on its type. It specifies the visual representation of the data, such as date formatting or decimal places. See <a href="componentsBasics#data-formatting">Formats</a> for a description of available formats.</li> &nbsp;
                                <li><strong>Width</strong>: The width of the column can be customized. You have the option to define the width in pixels or as a percentage. The unit menu at the right side of the entry area lets you choose between PX (pixels) or % (percentage).</li> &nbsp;
                                <li><strong>Sorting</strong>: The sorting selector enables users to interactively sort the column. When this selector is activated, users can click on the header area of the column to perform ascending or descending sorting at runtime.</li>
                        </ul>
                </Column.Item>
                <Column.Item width="35%">
                        <img src={require('./img/dataTable_ColumnsArea.png').default} style={{borderRadius: '6px'}} />
                </Column.Item>
        </Column.List>

    - **Column Duplication**: Duplicate existing columns to replicate configurations quickly by clicking on the <img src={require('./img/duplicate.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon.
    - **Column Removal**: Delete columns that no longer serve a purpose by clicking on the <img src={require('./img/delete.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon.

    - **Moving Column**: Arrange columns to your preferred position by clicking on the <img src={require('./img/arrange.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon

## Data Integration

The **DataTable** component is data-bound, meaning it relies on an external Qodly Source to populate its options. This allows the component to display and interact with data.

:::info 
The qodlysource for the **DataTable** component can take the form of either an `ORDA entity selection` or an `array`.
:::

### Data Binding

To associate data with the **DataTable** component, follow these steps:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
                <ol>
                        <li value="1"><strong>Navigate to the Properties Panel</strong>: Access the Data Access category located within the Properties panel for the Data Table component.</li> &nbsp;
                        <li value="2"><strong>Define the Qodly Source</strong>: Specify the appropriate qodlysource that contains the data you want to display within the DataTable. For instance, you can select an entity selection, such as the <code>Packages</code> dataclass.</li>
                </ol>
	</Column.Item>
	<Column.Item width="35%">
        <img src={require('./img/dataTable_DataBinding.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip 
Alternatively, you can establish the connection by dragging and dropping the qodlysource onto the DataTable component.
:::

### Data Display

When it comes to displaying columns in the DataTable component, you have two options:

- **Property Customization in the Columns Area**: Modify column settings according to your preferences directly from the [Columns Area](#properties-customization).

- **Attribute Drag-and-Drop**: Alternatively, you can include columns by dragging and dropping attributes from the Qodly Source onto the DataTable.

### Dynamic Attribute Display


<Column.List align="center" justifyContent="between">
	<Column.Item width="65%">
                The <code>Data Table</code> component can link its currently selected entity to a qodlysource in the <code>Selected Element</code> field. This feature allows the component to automatically display the attributes of the selected element whenever a new entity is chosen. 
	</Column.Item>
	<Column.Item width="30%">
                <img src={require('./img/dynamicAttributeDisplay_SelectedElement.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
                These attributes can be showcased in other configured components, such as a <code>Text</code> component, to display the corresponding attribute values.
	</Column.Item>
	<Column.Item width="25%">
                <img src={require('./img/dynamicAttributeDisplay_attributeValue.png').default} style={{borderRadius: '6px', width: '100%'}} />
	</Column.Item>
</Column.List>

### Server-Side Interaction

Enhance DataTable interactivity by binding functions to events like `onheaderclick` and `oncellclick`. These events respond to user actions and retrieve event-specific details using the [webEvent](../../../language/commands/webEvent) command.

Common attributes for `onheaderclick` and `oncellclick`:

|Attribute|Type|Description|
|---|---|---|
|caller| Text | Server-side reference of the DataTable component.|
|data| Object | The data object containing event-specific information.|
|eventType| Text | Type of event that has been triggered ("onheaderclick" or "oncellclick")|

- **onheaderclick**: Triggered when a user clicks a column header. The data object attribute includes:

|Attribute|Type|Description|
|---|---|---|
|index| Number | The index of the clicked column header (starting from 0).|
|name| Text | The qodlysource of the column.|


- **oncellclick**: Triggered when a user clicks a cell in a row. The data object attribute includes:

|Attribute|Type|Description|
|---|---|---|
|index| Number | The index of the clicked column header (starting from 0).|
|name| Text | The qodlysource of the column.|
|row| Number | The number of the clicked row.|


## User Experience Features

The **DataTable** component provides a range of user-friendly features:

- **Column Sorting**: Users can sort data by clicking column headers <img src={require('./img/dataTable_sort.png').default} style={{borderRadius: '6px', height: '25px'}}/>.

- **Resizable Columns**: Adjust column widths to fit content <img src={require('./img/dataTable_resize.png').default} style={{borderRadius: '6px', height: '25px'}}/>.

- **Drag-and-Drop Column Movement**: Rearrange columns with ease <img src={require('./img/dataTable_rearrange.png').default} style={{borderRadius: '6px', height: '25px'}}/>.

- **Selectable/Tabbable Rows**: Navigate and select rows using keyboard tabbing. 



## Customizing DataTable Styles

The **DataTable** component offers extensive customization options through CSS, enabling adjustments to the appearance of various table elements.

<img src={require('./img/datatable-schema.jpg').default} style={{borderRadius: '6px'}}/>

### Component-Specific CSS Classes

The DataTable component supports a range of CSS classes, allowing customization of the appearance of headers, rows, cells, and columns. Below is a detailed list of supported CSS classes and the elements they apply to.

#### Table Header Classes

| **Class Name**   | **Applies To**                 | **Description**                            |
|------------------|-------------------------------|--------------------------------------------|
| `.header`        | The entire header              | Styles the entire table header area.       |
| `.header-cell`   | All header cells               | Targets individual header cells.           |
| `.header-even`   | Even-numbered header cells     | Applies styles to header cells in even columns. |
| `.header-qodlysourceName` | The header of a specific column | Targets the header of a specific column, where `qodlysourceName` refers to the associated data field (e.g., `.header-lastname`). |

#### Table Row Classes

| **Class Name**   | **Applies To**                 | **Description**                            |
|------------------|-------------------------------|--------------------------------------------|
| `.row`           | All rows                      | Applies styles to all rows in the table.   |
| `.selected`      | The selected row              | Highlights the currently selected row.     |
| `.row-even`      | Even-numbered rows            | Styles the even rows in the table.         |
| `.hover`         | The hovered row               | Styles the row that is currently hovered.  |

#### Table Cell Classes

| **Class Name**   | **Applies To**                 | **Description**                            |
|------------------|-------------------------------|--------------------------------------------|
| `.cell`          | All cells                     | Targets all cells within the rows.         |

#### Table Column Classes

| **Class Name**   | **Applies To**                 | **Description**                            |
|------------------|-------------------------------|--------------------------------------------|
| `.col-qodlysourceName` | A specific column        | Targets the column associated with a particular data field (e.g., `.col-lastname`). |
| `.col-even`      | Even-numbered columns          | Styles columns that are even-numbered.     |
| `.sorted`        | Sorted columns                | Highlights columns that are sorted.        |
| `.sorted-asc`    | Ascending sorted columns      | Applies styles to columns sorted in ascending order. |
| `.sorted-desc`   | Descending sorted columns     | Applies styles to columns sorted in descending order. |

:::tip
For fields associated with relationships, use a dash (`-`) instead of a dot (`.`) in class names (e.g., `.header-employer-name`).
:::

### Example 1 – Blue Headers

This example customizes the DataTable to feature blue-colored headers with rounded borders, and shadow effects. Additionally, a soft blue background is applied to the header cells, and a light shade is used for even-numbered rows.

<img src={require('./img/BlueHeaders.png').default} style={{borderRadius: '6px'}}/>


```css
self {
  border-radius: 10px;
  box-shadow: 0 0 40px 0 rgb(0 0 0 / 15%);
}

self .header .header-cell {
  background-color: #6c7ae0;
  color: #fff;
  font-weight: bold;
  padding: 1.25rem 2rem;
}

self .row {
  align-items: center;
}

self .row .cell {
  padding: 0.5rem 2rem;
}

self .row.selected {
  background-color: #d2d7f5;
}

self .row-even:not(.selected):not(:hover) {
  background-color: #f8f6ff;
}
```

### Example 2 – Green Headers

This example customizes the DataTable to feature a green color scheme, with specific styles for even-numbered header cells.

<img src={require('./img/GreenHeaders.png').default} style={{borderRadius: '6px'}}/>

```css
self .header .header-cell {
  background-color: #324960;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

self .header .header-even {
  background-color: #4fc3a1;
}

self .row {
  align-items: center;
}

self .row.selected {
  background-color: #caede2;
}
```

This example highlights alternating header cells with a green background and provides custom styling for selected rows.


### Example 3 – Dark Mode DataTable

This example demonstrates a dark mode design for the DataTable, where the background and text colors are adjusted for better visibility in low-light environments.

<img src={require('./img/Dark-mode.png').default} style={{borderRadius: '6px'}}/>

```css
self {
  background-color: rgb(61, 54, 61);
}

self .row {
  align-items: center;
}

self .header .header-cell {
  background-color: transparent;
  color: #fff;
  font-size: 11px;
  text-transform: uppercase;
}

self .row:hover .col-lastname {
  color: #b474e4;
  font-weight: bold;
}
```

This dark theme provides a sleek and modern look, with specific styles applied to hovered rows and the `lastname` column.


## Showcase

Here's a glimpse of how the **DataTable** component will look and behave in action:

<img src={require('./img/dataTable_Preview.gif').default} style={{borderRadius: '6px'}} />

:::info
Customize the styles of the DataTable component by utilizing specific CSS classes that target various elements of the DataTable. For more details, refer to the section on [Customizing DataTable Styles](#customizing-datatable-styles).
:::

## Triggers and Events

The **DataTable** component can respond to various events, enabling dynamic user experiences. 

Additional information including the **column number**, **row number**, and **column qodlysource name** are returned by the [`webEvent` command](../../../language/commands/webEvent.md) when called in an event function triggered by a **DataTable** component.

Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Select| Calls for an action when an item within the component is selected. |
|On Click| Calls for an action when the user clicks on the component. |
|On DoubleClick| Calls for an action when the user double-clicks on the component. |
|On HeaderClick| Calls for an action when the user clicks on the header of a column. |
|On HeaderDoubleClick| Calls for an action when the user double-clicks on the header of a column. |
|On CellClick| Calls for an action when the user clicks on a cell within the component. |
|On CellDoubleClick| Calls for an action when the user double-clicks on a cell within the component. |
|On Keyup| Calls for an action when a keyboard key is released while the component is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the component is in focus. |
|On CellMouseEnter| Calls for an action when the user's mouse cursor enters a cell within the component.|
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|



