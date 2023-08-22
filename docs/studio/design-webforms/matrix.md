---
id: matrix
title: Matrix
hide_title: true
---
import Column from '@site/src/components/Column'

## Component Overview

The Matrix component serves as an **iterative** element designed to exhibit a dynamic number of Stylebox components. These Stylebox components are populated based on the data contained within the component's datasource.

Upon its placement on the canvas, the Matrix component comes equipped with a single Stylebox component, which is replicated for every iteration of data.

This component proves highly beneficial for structured and customizable data presentation, allowing for the display of attributes associated with entity selections and similar scenarios.

## Use Cases

The Matrix component finds application in various scenarios where data needs to be displayed iteratively and can be customized. Common use cases include:

- Product Gallery: Create an interactive product gallery where each Stylebox represents a product with its image, name, and price. Users can click on Styleboxes to view more details.

- News Feed: Design a dynamic news feed by using the Matrix component to iterate over news articles. Each Stylebox can display the headline and a brief excerpt. Clicking on a Stylebox could open the full article.

- User Profile Showcase: Build a user profile showcase where the Matrix iterates over user profiles, displaying profile images and usernames. Clicking on a profile could lead to a detailed profile view.


## Customization

Developers have the flexibility to configure and customize the appearance and behavior of the Matrix component to match their specific requirements. Configuration options include:

- Orientation: Developers can choose between horizontal and vertical orientations for the Matrix. This choice affects the arrangement of Stylebox components and the presence of scrollbars.

    - Vertical Orientation (Default): By default, the Matrix component is oriented vertically. This means that Stylebox components are stacked from top to bottom. If the content surpasses the defined height, a vertical scrollbar will automatically be shown, facilitating vertical scrolling to access all the content.

    - Horizontal Orientation: When the Matrix component is configured with a horizontal orientation, Stylebox components are arranged from left to right. If the content exceeds the available width, a horizontal scrollbar will automatically appear, enabling users to scroll through the content horizontally.

    <img alt="explorer" src={require('./img/matrix_orientations.gif').default} style={{borderRadius: '6px'}} />

## Data-Bounding

The Matrix component is data-bound, which means it relies on a datasource for its content. This enables the component to display, interact with, and fetch data seamlessly.

### <u>Data Display</u>

//

### <u>Data Interaction</u>

// 

## Triggers and Events

The Matrix component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Keyup| Calls for an action when a keyboard key is released while the component is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the component is in focus. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|
|On Select| Calls for an action when an item within the component is selected. |
