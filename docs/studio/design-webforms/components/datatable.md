---
id: datatable
title: Data Table
hide_title: true
---

## Component Overview

The DataTable component is a versatile element designed to present data in a tabular format, akin to a table. It excels at iterating over a specified datasource, transforming it into a structured list composed of rows and columns. In the DataTable, attributes are represented as columns, and entities are represented as rows. Additionally, a DataTable includes a header row for labeling columns.

By converting data into a visually organized layout, the DataTable simplifies the presentation of complex datasets, making it easier for users to analyze and interact with information.

## Use Cases

The DataTable component proves invaluable across a multitude of scenarios where data needs to be comprehensively displayed, including:

- Data Analysis: Utilize the DataTable to showcase datasets, enabling users to perform in-depth analysis, exploration, and comparison of various attributes.

- Inventory Management: Employ the DataTable in inventory management systems to present product details, quantities, and availability.

- Sales Reports: For tracking sales performance, the DataTable effectively displays revenue, product sales, and other relevant metrics.

## Customization

Enhance the DataTable component to align with your application's requirements using the following customization options:

- Header Height: Define the height of the header row in pixels.

- Row Height: Set the height of each row (excluding the header) in pixels.

- Columns Area: The columns area is where developers can manage the columns within the DataTable. It provides options for adding, moving, or removing columns to customize the structure of the table.

    - Adding Columns: To add a new column, click on the "+" icon. This action triggers the appearance of a new column configuration area located at the bottom of the column list. This area allows you to define properties for the new column:

        - Title: The title is the text displayed in the header row as the label for the column. It also appears as the column name in the properties area.

        - Source: The source attribute specifies the datasource for the column. Typically, it refers to an attribute whose value depends on each element of the DataTable's DataSource. This determines the content to be displayed in the column cells.

        - Format: The format property allows you to define how the data in the column should be displayed. It specifies the visual representation of the data, such as date formatting or decimal places.

        - Width: The width of the column can be customized. You have the option to define the width in pixels or as a percentage. The unit menu at the right side of the entry area lets you choose between PX (pixels) or % (percentage).

        - Sorting: The sorting selector enables users to interactively sort the column. When this selector is activated, users can click on the header area of the column to perform ascending or descending sorting at runtime.

    - Removing Columns: To remove a column, click on the trash icon associated with the specific column. This action removes the selected column from the DataTable.

    - Moving Columns: Columns can be rearranged within the DataTable using drag-and-drop functionality. To move a column, select the icon on the left side of the column name, then drag and drop the column to the desired position.


## Enhanced User Experience Features

The DataTable component offers a suite of features tailored to enhance usability and data manipulation for end users:

- Column Sorting: Users can easily sort data based on specific columns by simply clicking the header of the desired column. This intuitive action instantly reorganizes the data to facilitate quick analysis.

- Resizable Columns: Columns within the DataTable can be dynamically resized to accommodate varying content lengths. This ensures that users can adjust the display to view data comfortably, avoiding content truncation.

- Drag-and-Drop Column Movement: Enhancing flexibility, users can rearrange columns through drag-and-drop actions. This enables effortless customization of the display order according to individual preferences.

- Selectable/Tabbable Rows: Users can effortlessly select and navigate through rows within the DataTable using keyboard tabbing. This feature simplifies the process of interacting with data rows, promoting accessibility and efficiency.

## Data-Bounding

The DataTable component derives its content from a specified datasource, which can include ORDA entity selections or other structured datasources. This enables the display of structured rows and columns, streamlining data representation.

### <u>Data Display</u>
( ☢️ to be done ☢️ )

### <u>Server-Side Interaction</u>
( ☢️ to be done ☢️ )


## Triggers and Events

The DataTable component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

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



