---
id: templates
title: Templates
---
import Column from '@site/src/components/Column'

Templates serve as a dynamic resource, offering pre-designed structures to kickstart your Page building process. These templates are carefully crafted to cater to various design needs, from minimalist landing pages to intricate multi-page forms. 

These templates come ready-made, though they may require some customization to perfectly align with your project's unique needs.

:::note
The current list of available templates is not exhaustive and will continue to expand as Qodly Studio evolves.
:::

## Explore Templates

Navigate to the Components section and locate the Templates tab to explore the available options:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ol>
            <li> <strong>Navigate to the Components Section</strong>: Find the Templates tab within the Components section.<br/></li>
            <li> <strong>Select a Category</strong>: Once in the Templates tab, browse through the available categories. Choose the category that aligns with your project's requirements. For example, you might opt for the <code>Business Trip</code> category <img alt="styles-library" src={require('./img/templates_category.png').default} style={{borderRadius: '6px', width: '8%'}} />. </li>
        </ol>
	</Column.Item>
	<Column.Item width="25%">
        <img alt="styles-library" src={require('./img/templates_tab.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::info
- Quickly find categories by name using the search box <img alt="styles-library" src={require('./img/templates_search.png').default} style={{borderRadius: '6px', width: '3%'}} />. 
- Customize the display format by toggling between grid <img alt="styles-library" src={require('./img/templates_grid.png').default} style={{borderRadius: '6px', width: '3%'}} /> and list <img alt="styles-library" src={require('./img/templates_list.png').default} style={{borderRadius: '6px', width: '3%'}} /> views with the respective buttons.
:::

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ol start="3">
            <li> <strong>Explore Templates</strong>: Upon selection, a panel opens, presenting various templates.<br/></li>
            Each template is accompanied by a <code>Preview Image</code> to visualize the template's content and a <code>Title and Description</code> to understand the template's purpose and functionality.
            <br/><br/>
            <img alt="styles-library" src={require('./img/templates_description.png').default} style={{borderRadius: '6px'}} />
        </ol>
	</Column.Item>
	<Column.Item width="40%">
        <img alt="styles-library" src={require('./img/templates_categoryTemplates.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


## Using Templates

To use a template from the selected category, for instance, the datatable category <img alt="styles-library" src={require('./img/templates_datatableCategory.png').default} style={{borderRadius: '6px', width: '3%'}} />, follow these steps: 

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ol>
            <li> <strong>Select a Category</strong>: Click on the desired category (e.g., Datatables, Travel, or Business). This will open a panel displaying all the templates available within that category.<br/></li>
            <li> <strong>Choose a Template</strong>: Browse the templates shown in the panel. Each template includes a preview image and a brief description.<br/></li>
            <li> <strong>Drag the Template (Not the Category!)</strong>: Click and drag a specific template from the panel directly onto the canvas. </li>
        </ol>
	</Column.Item>
	<Column.Item width="40%">
        <img alt="styles-library" src={require('./img/templates_datatabbleBlueheader.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::warning
Make sure to drag the template itself from the right-side panel and not the category icon on the left side.
:::

## Customizing Templates


While templates provide a solid starting point, customization is essential for aligning your design with your unique vision and project requirements. Even in seemingly ready-to-use templates, like the datatable with the blue header, specific configurations may need adjustment. Here are key elements to customize:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        - <strong>Qodly Source</strong>: Identify and set the appropriate qodlysource for the component.
	</Column.Item>
	<Column.Item width="30%">
        <img alt="styles-library" src={require('./img/templates_datatableCustomizeQodlySource.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
         - <strong>Properties Customization</strong>: Customize component properties, such as the column source, to accurately represent the data you want to showcase.
	</Column.Item>
	<Column.Item width="30%">
        <img alt="styles-library" src={require('./img/templates_datatableCustomizeColumnSource.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
         - <strong>Css class</strong>: Tailor the CSS class code to match your desired styling preferences. 
	</Column.Item>
	<Column.Item width="30%">
        <img alt="styles-library" src={require('./img/templates_datatableCustomizeCss.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

