---
id: create-webform
title: Webform Editor
---
import Column from '@site/src/components/Column'

## Creating a webform

In Qodly, the foundation of your work begins with a webform, a container encompassing all other components (buttons, style boxes, etc.) within your application. You can create a webform using one of the three methods:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ol>
            <li>On the <a href="../overview#qodly-studio-homepage-overview">Qodly Studio Homepage</a>, select <code>Webform</code> and name the new webform in the creation modal.</li><br/><br/><br/><br/><br/>
            <li>In the <strong>Explorer</strong>, simply click the plus icon located next to <code>Webforms</code>. </li><br/><br/><br/><br/>
            <li>While in the <strong>Webform Editor</strong>, go to the <code>New +</code> tab and opt for <code>Webform</code>.</li>
        </ol>
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/homepageNewWebform.png').default} style={{borderRadius: '6px', width: '70%'}} /> <br/>
        <img alt="explorer" src={require('./img/plusWebform.png').default} style={{borderRadius: '6px', width: '70%'}} /> <br/>
        <img alt="explorer" src={require('./img/+New.png').default} style={{borderRadius: '6px', width: '50%'}} />
	</Column.Item>
</Column.List>



## Webform Editor Overview

Empowering your application's interface and content customization, the Webform Editor offers a versatile toolkit:

<img alt="explorer" src={require('./img/WebformEditorOverview.png').default} style={{borderRadius: '6px'}} />

1. **Canvas**: The workspace for assembling components, styles, and datasources. You can drag and drop components, apply CSS, and preview webforms.
2. [**Components**](components/componentsBasics.md):  Fundamental building blocks for dynamic user interfaces.
3. [**Data Sources**](datasources.md):Connectors linked to components for data display and management.
4. [**Styles Library**](styling.md): Stores pre-defined and customized styles for easy application.
5. [**Outline**](#outline): Visual hierarchy representation, aiding structural understanding and element repositioning.
6. [**Contextual panel**](#contextual-panel): Binds functions, actions to events as well as serves as an interface for css class modifications.
7. [**Properties panel**](#properties-panel): Customizes component attributes for tailored behavior and appearance.
8. [**Header panel**](#header-panel): Simplifies project management for streamlined tracking.
9. **Device toolbar**: Coming Soon.
<!-- Simulates how a website looks and functions on various devices and screen sizes for testing and optimization. -->
10. [**Breadcrumbs**](#breadcrumbs): Displays component hierarchy for navigation.
11. [**Tooltip**](components/componentsBasics#tooltip): Offers efficient component management and manipulation actions.
12. **Tabs**: Organizes open elements, including webforms, [class functions](../coding#classes), [methods](../coding#methods), [model](../model/model-editor-interface.md), [roles and priviliges](../roles/rolesPrivilegesOverview.md) and [settings](../settings.md).

## Breadcrumbs

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        The Breadcrumbs feature showcases the hierarchy of your selected components. As you follow the trail, you can click on any parent component's name to choose it.
	</Column.Item>
	<Column.Item width="30%">
        <img alt="explorer" src={require('./img/breadcrumbs.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>



## Outline

<Column.List align="center" justifyContent="between">
	<Column.Item width="65%">
        The outline section provides a visual representation of your webform's hierarchy, allowing you to grasp the structural arrangement. 
        By clicking on an element within the list, you can select it for further action, or utilize the drag-and-drop functionality within the outline to reposition elements. To manage the visibility of specific elements, simply click the eye icon <img alt="explorer" src={require('./img/eye.png').default} style={{borderRadius: '6px',height: '4%', width: '4%'}} />, toggling their display on or off as needed.
	</Column.Item>
	<Column.Item width="30%">
        <img alt="explorer" src={require('./img/outline.png').default} style={{borderRadius: '6px',height: '70%', width: '70%'}} />
	</Column.Item>
</Column.List>



## Header panel

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        For simplified project tracking, utilize the Project Management tools. Here are the key features:
	</Column.Item>
	<Column.Item width="30%">
        <img alt="explorer" src={require('./img/headerPanel.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br/>

- **Toggle Airy Layout:** Airy mode is a specially crafted feature that enriches the creation of user-friendly web forms by automatically incorporating default margins between components. When enabled, it introduces a spacious layout by inserting a gap between the components within the form. This not only streamlines the process of designing visually appealing and user-friendly web forms but also significantly reduces the necessity for manual adjustments to style properties. To reflect the selected mode, a convenient toggle is incorporated on the canvas, allowing developers to easily switch between Airy mode and Neutral mode. The initial state of the toggle is context-dependent, adapting to the specific form being worked on.

- **Sanity Check**: The Sanity Check tool ensures your Webforms's consistency and saves time by identifying errors before runtime. Particularly, it spots components bound with nonexistent datasources. It's automatically activated while editing an opened webform, visible as an icon in the upper right corner above the canvas. 
    - The icon appears like this when there are no errors <img alt="explorer" src={require('./img/headerPanel_sanity-ok.png').default} style={{borderRadius: '6px', height: '26px', width: '26px' }} />
    - When errors arise, the icon displays the error count, and clicking on it provides detailed error information.

    <img alt="explorer" src={require('./img/headerPanel_sanityErrors.png').default} style={{borderRadius: '6px', height: '40%', width: '40%' }} />
    
    <br/>

    :::info
    The Sanity Check serves as an informative tool. Even if errors are present, a webform can still be saved. 
    :::

- **Datasources Color**: Simplify component management with the Datasources Color feature. Easily identify the background color of datasources bound to the component, streamlining your workflow.

- **Preview in Studio** and Preview in a new Tab: Render your webform either directly in Qodly Studio or using the webform URL. See [Rendering a webform](../rendering.md). 



## Contextual panel

The **Contextual** panel allows you to bind class functions, navigation actions, and standard actions to specific events within your application. Additionally, you can modify CSS classes directly from the Contextual panel to fine-tune your application's appearance.

### Modifying CSS Classes

You can adjust CSS classes right from the Contextual panel, offering you granular control over your application's visual styling. For more detailed information, refer to the [Styling](styling.md) section.

### Bind Class Functions to Events
Connect class functions to events for streamlined interactions. For more detailed information, refer to the [Bind Class Functions to Events](events.md#bind-class-functions-to-events) section.

### Bind Navigation Actions to Events
Associate navigation actions with events to enable navigation based on user interactions. For more detailed information, refer to the [Bind Navigation Actions to Events](events.md#bind-navigation-actions-to-events) section.

### Bind Standard Actions to Events
Link standard actions to events, ensuring consistent actions in response to specific events. For more detailed information, refer to the [Bind Standard Actions to Events](events.md#bind-standard-actions-to-events) section.


## Properties panel

The Properties panel is a powerful tool for customizing a wide array of component attributes, enabling you to shape their behavior and appearance to suit your needs. The available properties are contingent upon the specific component you have selected.

### Display Modes

The Properties Panel offers a pair of distinctive modes:

- **Standard mode**: This mode presents a concise and straightforward view, ideal for configuring essential properties swiftly. Utilize it to quickly set up key attributes for your webform components. 
- **Advanced mode**: In this mode, a comprehensive view showcasing all available properties is provided. Choose this mode for intricate property definition, enabling meticulous configuration of design choices and parameters.

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        To toggle between modes, utilize the switch located in the top-right corner of the editor.
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/propertiesPanel_displayMode.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


### Component Reference (Ref)

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        This section introduces the internal ID assigned to the chosen component during creation. This unique identifier is utilized for referencing during <a href="components/webformloader">Webform loader component</a> navigation actions. The reference for a webform component is consistently set to ROOT <img alt="explorer" src={require('./img/propertiesPanel_refRoot.png').default} style={{borderRadius: '6px', height: '20%', width: '20%' }} />.
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/propertiesPanel_ref.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


### Search box

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        The search box feature streamlines property name searches, ensuring swift and convenient access. As you input characters, the property list dynamically updates, displaying only properties with corresponding names.
    </Column.Item>
    <Column.Item width="30%">
        <img alt="explorer" src={require('./img/propertiesPanel_searchBox.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


### Properties Category

Enhance a component to align with your application's requirements using the available customization options, depending on the component selected.

:::info 
Each component's documentation contains its own dedicated section explaining these customization possibilities.
:::

### Data Access Category

Configure the interaction between your chosen component and its associated datasource, if applicable. These property details are extensively covered in the [**Datasources**](datasources.md) section.

The Data Access properties encompass distinct options and fields tailored to each specific component, including:

- **DataSource**: Identifies the data source for component iteration.
- **Selected Element**: Specifies the currently selected element within the component.
- **Iterate with**: Utilizes a datasource for looping through the same dataset.

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ul>
            <li><strong>Server Side</strong>: Provides the means to exercise server-side control over a component's behavior. This involves assigning a <code>Server Side</code> reference, essentially an "address" on the server, to a specific component. By doing so, you enable the utilization of this reference in class functions, thereby governing the component's actions.</li>
        </ul>        
	</Column.Item>
	<Column.Item width="40%">
        <img alt="explorer" src={require('./img/serverSide.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::info 
Server Side allows you to control the component's behavior, such as [hiding](../../language/WebFormItemClass.md#hide), [showing](../../language/WebFormItemClass.md#show), [adding CSS classes](../../language/WebFormItemClass.md#addcssclass), or [removing CSS classes](../../language/WebFormItemClass.md#removecssclass) from it.
:::


### Style Category

Discover numerous customization avenues that empower you to fine-tune components according to distinct needs. Explore below for specific options:

| Section       | Description |
|-----------------|-------------|
| CSS             | The CSS class contains styles influencing visual attributes, affecting the component's appearance and positioning. Refer to the [Styles Library](styling.md) for additional details. |
| Color scheme    | Customize the component's color palette including background colors, text colors, and box shadows.         |
| Background      | Assign a background image to the component with options like position, size, attachment, and repeat settings.                                              |
| Dimensions      | Define component dimensions: width, height, and other size properties for seamless integration into the webpage layout.                                                         |
| Layout          | Gain control over component alignment using margins and paddings.                             |
| Appearance      | The appearance attribute covers position (e.g., relative, absolute), overflow behavior, and display styles (e.g., block, flex), shaping component presentation and interaction.|
| Font            | Tailor font type, size, alignment, and style achieving desired textual visual style.                                         |
| Borders         | Define borders using attributes like thickness, color, and style to visually distinguish the component.                                   |
| Border radius   | Adjust component corner curvature for various shapes and styles. |

:::info
<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
      To restore the value of an attribute within the Style category to its default value, simply click on the attribute's name and select <code>Reset Value</code>.
	</Column.Item>
	<Column.Item width="40%">
        <img alt="explorer" src={require('./img/resetValue.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>
:::

## Webform JSON Representation

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        In Qodly Studio, every webform possesses a unique JSON representation. <br/><br/>
        This representation can be accessed through a text editor by selecting the webform in the <code>Explorer</code> and choosing <code>Open With</code> a <code>Text Editor</code>.
	</Column.Item>
	<Column.Item width="40%">
        <img alt="explorer" src={require('./img/textEditor.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### Purpose

The JSON representation serves as a fundamental blueprint for the webform. Its primary purposes include:

- **Secure Preservation**: It securely preserves the webform in a structured, machine-readable format.

- **Consistent Modification**: It simplifies the process of modifying component-related details to customize the webform, resolve issues, or perform global search and replace operation.

- **Easy Replication**: It allows users to effortlessly replicate the entire webform, including its design and functionality, by copying and pasting it into another web form's text editor.

:::tip Notably:
This process ensures the seamless replication of even local datasources and locally defined CSS classes, guaranteeing a consistent visual style and behavior across the target webform.
:::

### Example

Let's explore the JSON representation of a webform that includes a [Webform Loader](./components/webformloader.md) component and a [Stylebox](./components/stylebox.md) component encapsulating a [Text](./components/text.md) component and a [Radio](./components/radio.md) component.

<img alt="explorer" src={require('./img/webformJSONRepresentation.png').default} style={{borderRadius: '6px'}} />

The JSON representation of the webform is structured as follows:

<div class="longCode-block">

```javascript
{
  "metadata": {
    "v": "1.0",
    "datasources": [
      {
        "id": "homeWebform",
        "type": "scalar",
        "namespace": "",
        "dataType": "string",
        "initialValue": "home"
      },
      {
        "id": "version",
        "type": "scalar",
        "namespace": "",
        "dataType": "string",
        "initialValue": ""
      }
    ],
    "styles": [
      {
        "name": "comforterBrush",
        "content": "self {\n\tfont-family: \"Comforter Brush\", cursive !important;\n}",
        "parentId": null,
        "id": "Ub8fl59kqIYbend2op18M"
      }
    ]
  },
  "components": {
    "ROOT": {
      "type": {
        "resolvedName": "Container"
      },
      "isCanvas": true,
      "props": {
        "classNames": [],
        "events": [
          {
            "type": "method",
            "dataclass": "DataStore",
            "events": [
              "onload"
            ],
            "id": "77VxabQYTbMyky6JW2MmJm",
            "method": "ds.loadUser",
            "params": [],
            "returns": {
              "name": "$0",
              "type": "Variable",
              "datasource": "userManagement:user"
            }
          }
        ],
        "className": "bg-white h-full w-full px-6",
        "airyMode": false,
        "style": {
          "paddingTop": "0px",
          "paddingRight": "0px",
          "paddingBottom": "0px",
          "paddingLeft": "0px"
        },
        "serverSideRef": "webformRef"
      },
      "displayName": "Webform",
      "custom": {},
      "parent": "",
      "hidden": false,
      "nodes": [
        "JT1BLTebtT",
        "bXx3gBHhJA"
      ],
      "linkedNodes": {}
    },
    "JT1BLTebtT": {
      "type": {
        "resolvedName": "StyleBox"
      },
      "isCanvas": true,
      "props": {
        "events": [],
        "style": {
          "backgroundColor": "#ffffffff",
          "display": "flex",
          "paddingLeft": "0px",
          "paddingRight": "0px",
          "gap": "20px",
          "paddingTop": "0px",
          "paddingBottom": "0px",
          "borderBottomColor": "#FFBC00",
          "borderBottomWidth": "4px",
          "alignItems": "center",
          "justifyContent": "center",
          "flexWrap": "wrap",
          "alignContent": "center",
          "width": "100%",
          "minWidth": "100%",
          "height": "10%"
        },
        "serverSideRef": ""
      },
      "displayName": "Stylebox",
      "custom": {
        "displayName": "Header"
      },
      "parent": "ROOT",
      "hidden": false,
      "nodes": [
        "0aNlvNGY8X",
        "KeLZVvKaHp"
      ],
      "linkedNodes": {}
    },
    "0aNlvNGY8X": {
      "type": {
        "resolvedName": "Text"
      },
      "isCanvas": false,
      "props": {
        "events": [],
        "doc": [
          {
            "type": "paragraph",
            "children": [
              {
                "text": "TravelTrove ",
                "italic": false,
                "underlined": false,
                "strikethrough": false,
                "bold": true
              },
              {
                "type": "datasource",
                "datasource": "version",
                "children": [
                  {
                    "italic": false,
                    "underlined": false,
                    "strikethrough": false,
                    "bold": true,
                    "text": "v"
                  }
                ],
                "dsType": "string",
                "format": ""
              },
              {
                "text": ""

              }
            ]
          }
        ],
        "datasource": "version",
        "style": {
          "fontSize": "40px",
          "textAlign": "center",
          "fontFamily": "New Tegomin",
          "paddingLeft": "10px",
          "paddingRight": "10px",
          "paddingBottom": "10px",
          "paddingTop": "10px"
        },
        "classNames": [
          "comforterBrush"
        ],
        "serverSideRef": "textRef"
      },
      "displayName": "Text",
      "custom": {},
      "parent": "JT1BLTebtT",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "vQwIVqfzaG": {
      "type": {
        "resolvedName": "StyleBox"
      },
      "isCanvas": true,
      "props": {
        "events": [],
        "style": {
          "minHeight": "40px",
          "display": "flex",
          "alignItems": "center"
        }
      },
      "displayName": "Stylebox",
      "custom": {},
      "parent": "vt5ll-8J-n",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "KeLZVvKaHp": {
      "type": {
        "resolvedName": "Radio"
      },
      "isCanvas": false,
      "props": {
        "classNames": [
          "radio-selectedItem"
        ],
        "events": [],
        "defaultValue": "home",
        "mode": "single",
        "type": "tabs",
        "options": [
          {
            "label": "HOME",
            "value": "home",
            "id": "8SFueBkpxWtmqTmEHa92ew"
          },
          {
            "label": "TOURS",
            "value": "tours",
            "id": "fLxd7NcKBA9xzUTwf8NXPj"
          },
          {
            "label": "DESTINATIONS",
            "value": "destinations",
            "id": "f9mqtjJG2nap5EJKaMqKM5"
          }
        ],
        "datasource": "Ui:mainWebform",
        "style": {
          "color": "#000000ff",
          "textTransform": "uppercase",
          "fontWeight": "700"
        },
        "serverSideRef": "radioOptionsRef"
      },
      "displayName": "Radio",
      "custom": {},
      "parent": "JT1BLTebtT",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    },
    "bXx3gBHhJA": {
      "type": {
        "resolvedName": "WebformLoader"
      },
      "isCanvas": false,
      "props": {
        "events": [],
        "style": {
          "width": "100%",
          "height": "90%",
          "paddingLeft": "0px",
          "paddingRight": "0px",
          "paddingBottom": "0px",
          "paddingTop": "0px"
        },
        "datasource": "Ui:mainWebform",
        "webform": "home",
        "classNames": [],
        "serverSideRef": "webformLoaderRef"
      },
      "displayName": "Webform Loader",
      "custom": {},
      "parent": "ROOT",
      "hidden": false,
      "nodes": [],
      "linkedNodes": {}
    }
  }
}
```

</div>

### Dissection

The JSON representation of the webform consists of two major elements: `metadata` and `components`.

1. **metadata**: Contains metadata related to the webform.
<ul>
    <li><code>v</code> : Version of the webform.</li> 
    <br/>
    <li><code>datasources</code> : An array of local datasources scoped to the webform, with the following sub-attributes:</li>
    <ul>
        <li><code>id</code> : Identifier for each datasource.</li>
        <li><code>type</code> : Specifies the type of the datasource.</li>
        <li><code>namespace</code> : Denotes the namespace of the datasource, which is empty if the datasource is local.</li>
        <li><code>dataType</code> : Represents the data type of the datasource.</li>
        <li><code>initialValue</code> : Indicates the initial value of the datasource name.</li>
    </ul> 
    <br/>
    <li><code>styles</code> : An array of local css classes scoped to the webform. It includes the following sub-attributes:</li>
    <ul>
        <li><code>name</code> : Name of the css class.</li>
        <li><code>content</code> : The actual CSS content of the CSS class.</li>
        <li><code>parentId</code> : Identifier of the parent CSS class, if applicable.</li>
        <li><code>id</code> : Unique identifier for each CSS class.</li>
        <li><code>scope</code> : Defines the scope in which the style operates, remaining local at all times, as the styles exclusively represent an array of local CSS classes confined to the webform.</li>
    </ul> 
</ul> 

2. **components**: Represents the individual components used in the webform. Each component shares these common attributes:

    - `type`: 
        - `resolvedName`: Specifies the component's type.<br/><br/>
    - `isCanvas`: Indicates if the component functions as a canvas.<br/><br/>
    - `props`:
        - `classNames`: An array of CSS classes applied to the component, whether they are local, shared, or theme-specific.
        - `events`: An array of events associated with the component.
        - `style`: Defines CSS styling properties for the component.
        - `serverSideRef`: Refers to a server-side resource.<br/><br/>
    - `displayName`: Represents the name of the component.<br/><br/>
    - `custom`:
        - `displayName`: The name of a custom component, particularly when it's a component used from existing templates.<br/><br/>
    - `parent`: Identifies the parent component.
    - `hidden`: Indicates if the component is hidden.
    - `nodes`: An array of child components nested within the current component.
    - `linkedNodes`: An object of component elements linked to this particular component.

    <br/><br/>

    :::info
    Each specific component may have additional attributes under the `props` section, such as airyMode for the `ROOT` component, or other component-specific details.
    :::
    Specific components may have additional attributes under the `props` section, like: 

    - **ROOT** (Container):
        - `className`: The CSS class name for styling.
        - `airyMode`: Indicates whether airy mode is enabled for the webform.

    - **0ANLVNGY8X** (TEXT):
        - `doc`:
            - `type`: Describe the type of the Text component.
            - `children`: 
                - `type`: If this attribute is visible with a value of "datasource", it means that portion of the text content is bound to a datasource. If not, then it's static text.
                - `datasource`: The name of the datasource bound to the portion of the text content.
                - `children`: Specifies the text content visual formatting.
                - `dsType`: The data type of the datasource.
                - `format`: Specifies the data formatting for the datasource.
        - `datasource`: The name of the datasource bound to the component.

    - **KELZVVKAHP** (RADIO):
        - `defaultValue`: Sets the default value for the radio.
        - `mode`: Specifies the radio selection mode.
        - `type`: Determines the display type of the radio.
        - `options`: Lists the available radio options.
        - `datasource`: The name of the datasource bound to the component.

    - **bXx3gBHhJA** (Webform Loader):
        - `webform`: The name of the webform set as an initial value.
        - `datasource`: The name of the datasource bound to the component.

### Syntax Check

The syntax check identify and rectify syntax errors and other formatting issues within the JSON representation. These errors are not only highlighted but also accompanied by descriptive messages that facilitate pinpointing the exact problem. Below are some common examples of syntax errors that can be detected:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
      <strong>Expected comma</strong>: This error typically occurs when a comma <code>,</code>  is absent between key-value pairs in an object or elements in an array.
	</Column.Item>
	<Column.Item width="30%">
      <img alt="explorer" src={require('./img/syntaxCheck_comma.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
      <strong>Expected closing brace</strong>: This error occurs when the parser anticipates a closing curly brace <code>}</code> to conclude an object but does not find it.
	</Column.Item>
	<Column.Item width="30%">
      <img alt="explorer" src={require('./img/syntaxCheck_brace.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
      <strong>Value expected</strong>: This error arises when an object key is succeeded by a colon, but the corresponding value is missing, indicating an incomplete JSON representation.
	</Column.Item>
	<Column.Item width="30%">
      <img alt="explorer" src={require('./img/syntaxCheck_value.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
      <strong>Colon expected</strong>: This error suggests that a colon <code>:</code> is required to separate the key and value in an object, but it is missing from the code.
	</Column.Item>
	<Column.Item width="30%">
      <img alt="explorer" src={require('./img/syntaxCheck_colon.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
      <strong>Unexpected end of string json</strong>: This error is triggered when the parser encounters the end of a string without coming across a closing double quote <code>"</code>, indicating an unfinished string value or when the opening double quote is missing at the beginning of the string.
	</Column.Item>
	<Column.Item width="30%">
      <img alt="explorer" src={require('./img/syntaxCheck_string.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::warning
It is essential to exercise caution when editing the JSON representation, as the syntax check does not validate whether attribute names match the expected ones or if there are issues with the attribute names. Similarly, it does not necessarily catch issues where a boolean value is used in place of a string value. 

These discrepancies may not trigger errors, but they can potentially corrupt your webform or, in more severe cases, break it until the errors are rectified. Therefore, thorough validation of attribute names and values is crucial to ensure the integrity and functionality of your webform.
:::