---
id: text
title: Text
---
import Column from '@site/src/components/Column'

The **Text** component is a UI element designed to display text content on webforms.


## Use Cases

The **Text** component is capable of fulfilling various text display needs:

- **Static Text**: Use it to display unchanging content such as instructions, labels, and consistent information.

- **Dynamic Content**: The Text component is not limited to static text. It can display dynamic content pulled from your datasources. This dynamic feature allows you to show text that adapts and updates based on data values.


## Properties Customization

Enhance the **Text** component to align with your application's requirements using the following customization options:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Style Buttons</strong>: Apply various text styles such as Bold, Italic, Underline, and Strikethrough to the selected portion of text. </li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img alt="explorer" src={require('./img/text_StyleButtons.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Toggle DataSource</strong>: Bind the Text component's content to a datasource, making the text content dynamic and data-driven. By inserting a placeholder in the text on the canvas and specifying the datasource path (using keywords like <code>package.description</code> or <code>$This</code> in iterative components), you can dynamically populate the text content. </li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img alt="explorer" src={require('./img/text_ToggleDataSource.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Format Support</strong>: Depending on the chosen datasource, the Text component may offer format options to ensure the displayed data is presented in the desired manner like date formats. </li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img alt="explorer" src={require('./img/text_FormatSupport.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Toggle Link</strong>: Insert hyperlinks within the text content, binding them to specific text labels. You can choose whether the link opens in the same browser tab or a new tab. The link itself can be either a static URL or a dynamic value derived from datasources. </li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img alt="explorer" src={require('./img/text_ToggleLink.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


## Data Binding

The **Text** component's content can be dynamically bound to datasources through the [properties customization](#properties-customization) using the Toggle DataSource option. 

## Triggers and Events

The **Text** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On DblClick| Calls for an action when the user double-clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component. |
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component. |
