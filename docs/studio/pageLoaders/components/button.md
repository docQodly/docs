---
id: button
title: Button
---
import Column from '@site/src/components/Column'


The **Button**  component is a UI element that prompts user engagement and triggers actions within your Page. 


:::info 

The **Button** component has an **Icon** element embedded within it. This is of great importance as configuring the **Button** component may require adjusting properties within the embedded element. This applies to the visual style, triggers, and actions as they may differ.

:::


## Use Cases

Buttons are indispensable in a wide range of scenarios where user engagement and interaction are paramount:

- **Form Submission**: Utilize buttons to allow users to submit forms after providing necessary input.

- **Navigation**: Implement buttons to facilitate navigation between different sections or pages of your application.

- **Data Manipulation**: Enable users to perform operations such as adding, editing, or deleting data entries through buttons.


## Properties Customization

### Button Component

Enhance the **Button** component to align with your application's requirements using the following customization options:

<Column.List align="center" justifyContent="between">
	<Column.Item width="65%">
        <ul>
            <li><strong>Label</strong>: Personalize the label to offer clear instructions or guidance.<br/></li>
            <li><strong>Icon Position</strong>: Choose the position of the icon in relation to the label, allowing options for top, bottom, left, right, or even hidden for a seamless integration into your design.</li>
        </ul>
	</Column.Item>
	<Column.Item width="30%">
        <img src={require('./img/button_PropertiesCustomization.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### Embedded Icon

Within the <strong>Button</strong> component, an embedded <strong>Icon</strong> allows for further customization of the following properties:

<Column.List align="center" justifyContent="between">
	<Column.Item width="65%">
        <ul>
            <li><strong>Icon</strong>: When the icon visibility is configured in the Button component's customization properties, you can select an icon from an icon picker list.</li>
        </ul>
	</Column.Item>
	<Column.Item width="30%">
        <img src={require('./img/button_icon.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

## Data Integration

When it comes to data-binding, it's important to note that the **Button** component itself is not inherently data-bound. Unlike components like the **DataTable** that derive their content from specified Qodly Sources, the **Button** component primarily focuses on initiating actions and interactions within the user interface.

## Customizing Button Styles

### Example 1 - Overall Component Style

The `self` selector targets the entire Button component, allowing you to customize its size, shape, and appearance with background color and shadows.

<Column.List align="center" justifyContent="between">
  <Column.Item width="58%">
    <pre>
      <code className="language-css">
{`/* Main component styling*/
self {
    width: 15rem;
    height: 4rem;
    border-radius: 1rem;
    cursor: pointer;
    background: #6d5dfc;
    box-shadow:inset .2rem .2rem 1rem #8abdff, inset -.2rem -.2rem 1rem #5b0eeb, 0rem 0rem 1rem #c8d0e7, 0rem 0rem 0.5rem #FFFFFF;
}`}
      </code>
    </pre>
  </Column.Item>
 <Column.Item width="40%">
    <img
      src={require('./img/button_style1.png').default} style={{ borderRadius: '6px' }}/>
  </Column.Item>
</Column.List>

### Example 2 - Active Button Style

The `self:active` selector applies when the button is actively pressed or clicked, providing visual feedback with a change in shadow effect to simulate a "pressed-in" appearance.

<Column.List align="center" justifyContent="between">
  <Column.Item width="58%">
    <pre>
      <code className="language-css">
{`/* Button active (pressed) styling */
self:active{
    box-shadow:inset .2rem .2rem 1rem #5b0eeb, inset -.2rem -.2rem 1rem #8abdff;
}`}
      </code>
    </pre>
  </Column.Item>
 <Column.Item width="40%">
    <img
      src={require('./img/button_style2.png').default} style={{ borderRadius: '6px' }}/>
  </Column.Item>
</Column.List>


## Triggers and Events

### Button Component

The **Button** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Blur| Calls for an action when the component loses focus (user clicks outside). |
|On Focus| Calls for an action when the component gains focus (user clicks on it). |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|
|On Keyup| Calls for an action when a keyboard key is released while the component is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the component is in focus. |

### Embedded Icon

The embedded **Icon** can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the Icon. |
|On Keyup| Calls for an action when a keyboard key is released while the Icon is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the Icon is in focus. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the Icon.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the Icon.|