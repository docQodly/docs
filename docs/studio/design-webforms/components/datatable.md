---
id: datatable
title: Data Table
---
import Column from '@site/src/components/Column'

The **DataTable** component is a versatile UI element used to display data in a tabular format, resembling a table. It efficiently iterates through a designated datasource, converting it into an organized list comprising rows and columns. In the DataTable, columns represent attributes, rows represent entities, and a header row labels the columns.



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
                <img alt="explorer" src={require('./img/dataTable_HeaderHeight.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Row Height</strong>: Set the height of each row (excluding the header) in pixels.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img alt="explorer" src={require('./img/dataTable_RowHeight.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


- **Columns Area**: The columns area is where developers can manage the columns within the DataTable. It provides options for adding, moving, or removing columns to customize the structure of the table.

    - **Adding Columns**: To add a new column, click on the `+` icon. This action triggers the appearance of a new column configuration area located at the bottom of the column list. This area allows you to define properties for the new column:
        <Column.List align="center" justifyContent="between">
                <Column.Item width="60%">
                        <ul>
                                <li><strong>Title</strong>: The title is the text displayed in the header row as the label for the column. It also appears as the column name in the properties area.</li><br/>
                                <li><strong>Source</strong>: The source attribute specifies the datasource for the column. Typically, it refers to an attribute whose value depends on each element of the DataTable's DataSource. This determines the content to be displayed in the column cells.</li><br/>
                                <li><strong>Format</strong>: The format property allows you to define how the data in the column should be displayed, depending on its type. It specifies the visual representation of the data, such as date formatting or decimal places. See <a href="componentsBasics#formats">Formats</a> for a description of available formats.</li><br/>
                                <li><strong>Width</strong>: The width of the column can be customized. You have the option to define the width in pixels or as a percentage. The unit menu at the right side of the entry area lets you choose between PX (pixels) or % (percentage).</li><br/>
                                <li><strong>Sorting</strong>: The sorting selector enables users to interactively sort the column. When this selector is activated, users can click on the header area of the column to perform ascending or descending sorting at runtime.</li>
                        </ul>
                </Column.Item>
                <Column.Item width="35%">
                        <img alt="explorer" src={require('./img/dataTable_ColumnsArea.png').default} style={{borderRadius: '6px'}} />
                </Column.Item>
        </Column.List>

    - **Column Duplication**: Duplicate existing columns to replicate configurations quickly by clicking on the <img alt="explorer" src={require('./img/duplicate.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon.
    - **Column Removal**: Delete columns that no longer serve a purpose by clicking on the <img alt="explorer" src={require('./img/delete.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon.

    - **Moving Column**: Arrange columns to your preferred position by clicking on the <img alt="explorer" src={require('./img/arrange.png').default} style={{borderRadius: '6px', height: '25px', width: '25px'}}/> icon

## Data Integration

The **DataTable** component is data-bound, meaning it relies on an external data source to populate its options. This allows the component to display and interact with data.

:::info 
The datasource for the **DataTable** component can take the form of either an `ORDA entity selection` or an `array`.
:::

### Data Binding

To associate data with the **DataTable** component, follow these steps:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
                <ul>
                        <li><strong>Navigate to the Properties Panel</strong>: Access the Data Access category located within the Properties panel for the Data Table component.</li><br/>
                        <li><strong>Define the Datasource</strong>: Specify the appropriate Datasource that contains the data you want to display within the DataTable. For instance, you can select an entity selection, such as the <code>Packages</code> dataclass.</li>
                </ul>
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/dataTable_DataBinding.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip 
Alternatively, you can establish the connection by dragging and dropping the datasource onto the DataTable component.
:::

### Data Display

When it comes to displaying columns in the DataTable component, you have two options:

- **Property Customization in the Columns Area**: Modify column settings according to your preferences directly from the [Columns Area](#properties-customization).

- **Attribute Drag-and-Drop**: Alternatively, you can include columns by dragging and dropping attributes from the datasource onto the DataTable.



### Server-Side Interaction

Enhance DataTable interactivity by binding functions to events like `onheaderclick` and `oncellclick`. These events respond to user actions and retrieve event-specific details using the [webEvent](../../../language/WebFormClass.md#webevent) command.

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
|name| Text | The datasource of the column.|


- **oncellclick**: Triggered when a user clicks a cell in a row. The data object attribute includes:

|Attribute|Type|Description|
|---|---|---|
|index| Number | The index of the clicked column header (starting from 0).|
|name| Text | The datasource of the column.|
|row| Number | The number of the clicked row.|

### Dynamic Attribute Display


<Column.List align="center" justifyContent="between">
	<Column.Item width="65%">
                The <code>Data Table</code> component can link its currently selected entity to a datasource in the <code>Selected Element</code> field. This feature allows the component to automatically display the attributes of the selected element whenever a new entity is chosen. 
	</Column.Item>
	<Column.Item width="30%">
                <img alt="explorer" src={require('./img/dynamicAttributeDisplay_SelectedElement.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
                These attributes can be showcased in other configured components, such as a <code>Text</code> component, to display the corresponding attribute values.
	</Column.Item>
	<Column.Item width="25%">
                <img alt="explorer" src={require('./img/dynamicAttributeDisplay_attributeValue.png').default} style={{borderRadius: '6px', width: '100%'}} />
	</Column.Item>
</Column.List>


## User Experience Features

The **DataTable** component provides a range of user-friendly features:

- **Column Sorting**: Users can sort data by clicking column headers <img alt="explorer" src={require('./img/dataTable_sort.png').default} style={{borderRadius: '6px', height: '25px'}}/>.

- **Resizable Columns**: Adjust column widths to fit content <img alt="explorer" src={require('./img/dataTable_resize.png').default} style={{borderRadius: '6px', height: '25px'}}/>.

- **Drag-and-Drop Column Movement**: Rearrange columns with ease <img alt="explorer" src={require('./img/dataTable_rearrange.png').default} style={{borderRadius: '6px', height: '25px'}}/>.

- **Selectable/Tabbable Rows**: Navigate and select rows using keyboard tabbing. 



## Showcase

Here's a glimpse of how the **DataTable** component will look and behave in action:

<img alt="explorer" src={require('./img/dataTable_Preview.gif').default} style={{borderRadius: '6px'}} />


## Triggers and Events

The **DataTable** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Select| Calls for an action when an item within the component is selected. |
|On Click| Calls for an action when the user clicks on the component. |
|On HeaderClick| Calls for an action when the user clicks on the header of a column. |
|On CellClick| Calls for an action when the user clicks on a cell within the component. |
|On Keyup| Calls for an action when a keyboard key is released while the component is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the component is in focus. |
|On CellMouseEnter| Calls for an action when the user's mouse cursor enters a cell within the component.|
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|



