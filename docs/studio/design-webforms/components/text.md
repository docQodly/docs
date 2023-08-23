---
id: text
title: Text
hide_title: true
---

## Component Overview

The Text component serves as a fundamental element for displaying text content on web pages. Whether conveying static information or dynamically generated content, the Text component offers a versatile solution for presenting textual data.

## Use Cases

The Text component is capable of fulfilling various text display needs:

- Static Text: The Text component excels at showcasing static text content. You can utilize this component to present fixed information, instructions, labels, and any text that remains constant throughout the user's interaction with the web page.

- Dynamic Content: Beyond static text, the Text component has the flexibility to display dynamic content sourced from your data. This dynamic approach allows you to render text content that updates based on the values of datasources, enabling a more personalized and adaptive user experience.

## Customization

Enhance the Text component to align with your application's requirements using the following customization options:

- Style Buttons: Users can apply various text styles such as Bold, Italic, Underline, and Strikethrough to the selected portion of text. This feature enhances the visual presentation of the content.

- Toggle DataSource: This powerful feature enables you to bind the Text component's content to a datasource, making the text content dynamic and data-driven. By inserting placeholders in the text on the canvas and specifying the datasource path (using keywords like "employer.name" or $This in iterative components), you can dynamically populate the text content.

    - Format Support: Depending on the chosen datasource, the Text component may offer format options to ensure the displayed data is presented in the desired manner like date formats.

- Toggle Link: Users can insert hyperlinks within the text content, binding them to specific text labels. You can choose whether the link opens in the same browser tab or a new tab. The link itself can be either a static URL or a dynamic value derived from datasources.

## Data-Bounding

The Text component's content can be bound to datasources, enriching its capabilities with dynamic and data-driven content presentation.

### <u>Data Display</u>
( ☢️ to be done ☢️ )

### <u>Data Interaction</u>
( ☢️ to be done ☢️ )

## Triggers and Events

The Text component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On DblClick| Calls for an action when the user double-clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component. |
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component. |
