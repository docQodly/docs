---
id: text
title: Text
---
import Column from '@site/src/components/Column'

The **Text** component is a UI element designed to display text content on Pages.


## Use Cases

The **Text** component is capable of fulfilling various text display needs:

- **Static Text**: Use it to display unchanging content such as instructions, labels, and consistent information.

- **Dynamic Content**: The Text component is not limited to static text. It can display dynamic content pulled from your Qodly Sources. This dynamic feature allows you to show text that adapts and updates based on data values.


## Properties Customization

Enhance the **Text** component to align with your application's requirements using the following customization options:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Style Buttons</strong>: Apply various text styles such as Bold, Italic, Underline, and Strikethrough to the selected portion of text. </li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/text_StyleButtons.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Toggle Qodly Source</strong>: Bind the Text component's content to a qodlysource, making the text content dynamic and data-driven. By inserting a placeholder in the text on the canvas and specifying the qodlysource path (using keywords like <code>package.description</code> or <code>$This</code> in iterative components), you can dynamically populate the text content. </li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/text_ToggleqodlySource.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Format Support</strong>: Depending on the chosen qodlysource, the Text component may offer format options to ensure the displayed data is presented in the desired manner like date formats. See <a href="componentsBasics#data-formatting">Formats</a> for a description of available formats.</li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/text_FormatSupport.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ul>
            <li><strong>Toggle Link</strong>: Insert hyperlinks within the text content, binding them to specific text labels. You can choose whether the link opens in the same browser tab or a new tab. The link itself can be either a static URL or a dynamic value derived from qodlysources. </li>
        </ul>
	</Column.Item>
	<Column.Item width="35%">
         <img src={require('./img/text_ToggleLink.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip 
When the hyperlink directs to a file path within the `Shared` folder, it doesn't open in a new tab; instead, the browser triggers a download.
This follows the same concept as [Navigate to Shared Folder Content](../events/bindingActionToEvents#shared-folder) through the [External Link](../events/bindingActionToEvents#external-links) option.
:::

## Data Integration

The **Text** component is not limited to static text, it is also data-bound, which means it depends on a qodlysource to populate its options.

### Data Binding

The **Text** component's content can be dynamically bound to Qodly Sources through the [properties customization](#properties-customization) using the Toggle Qodly Source option. 

:::tip 
Alternatively, you can establish the connection by dragging and dropping a qodlysource of type `text`, `number`, `date`, or `duration` onto the Page, resulting in the automatic addition of a Text component with the qodlysource bound to it.
:::

## Triggers and Events

The **Text** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On DblClick| Calls for an action when the user double-clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component. |
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component. |
