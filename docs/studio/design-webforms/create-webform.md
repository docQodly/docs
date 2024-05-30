---
id: create-webform
title: Webform Editor
---
import Column from '@site/src/components/Column'

## Creating a webform

In Qodly, a project's groundwork starts with a webform, which acts as the primary container integrating various components such as buttons and style boxes. There are three methods available for creating a webform:

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <ol>
            <li>On the <a href="../overview#qodly-studio-homepage-overview">Qodly Studio Homepage</a>, select <code>Webform</code> and name the new webform in the creation modal.</li><br/><br/><br/><br/><br/>
            <li>In the <strong>Explorer</strong>, simply click the plus icon located next to <code>Webforms</code>. </li><br/><br/><br/><br/>
            <li>While in the <strong>Webform Editor</strong>, go to the <code>New +</code> tab and opt for <code>Webform</code>.</li>
        </ol>
	</Column.Item>
	<Column.Item width="35%">
        <img src={require('./img/homepageNewWebform.png').default} style={{borderRadius: '6px', width: '70%'}} /> <br/>
        <img src={require('./img/plusWebform.png').default} style={{borderRadius: '6px', width: '70%'}} /> <br/>
        <img src={require('./img/+New.png').default} style={{borderRadius: '6px', width: '50%'}} />
	</Column.Item>
</Column.List>



## Webform Editor Overview

The Webform Editor enhances your application by providing a versatile toolkit for interface and content customization:

<img src={require('./img/WebformEditorOverview.png').default} style={{borderRadius: '6px'}} />

1. **Canvas**: The workspace for assembling components, styles, and datasources. You can drag and drop components, apply CSS, and preview webforms.
2. [**Components**](components/componentsBasics.md):  Fundamental building blocks for dynamic user interfaces.
3. [**Data Sources**](datasources.md):Connectors linked to components for data display and management.
4. **States**: Coming Soon.
5. [**Styles Library**](styling.md): Stores pre-defined and customized styles for easy application.
6. [**Outline**](#outline): Visual hierarchy representation, aiding structural understanding and element repositioning.
7. [**Contextual panel**](#contextual-panel): Binds functions, actions to events as well as serves as an interface for css class modifications.
8. [**Properties panel**](#properties-panel): Customizes component attributes for tailored behavior and appearance.
9. [**Header panel**](#header-panel): Simplifies project management for streamlined tracking.
10. **Device toolbar**: Coming Soon.
<!-- Simulates how a website looks and functions on various devices and screen sizes for testing and optimization. -->
11. [**Breadcrumbs**](#breadcrumbs): Displays component hierarchy for navigation.
12. [**Tabs**](../overview.md#tabs): Organizes open webforms and all other open elements, including [class functions](../coding#classes), [model](../model/model-editor-interface.md), etc. 
13. [**Tooltip**](components/componentsBasics#tooltip): Offers efficient component management and manipulation actions.

## Breadcrumbs

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        The Breadcrumbs feature showcases the hierarchy of your selected components. As you follow the trail, you can click on any parent component's name to choose it.
	</Column.Item>
	<Column.Item width="30%">
        <img src={require('./img/breadcrumbs.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>



## Outline

<Column.List align="center" justifyContent="between">
	<Column.Item width="65%">
        The outline section provides a visual representation of your webform's hierarchy, allowing you to grasp the structural arrangement. 
        By clicking on an element within the list, you can select it for further action, or utilize the drag-and-drop functionality within the outline to reposition elements. To manage the visibility of specific elements, simply click the eye icon <img src={require('./img/eye.png').default} style={{borderRadius: '6px',height: '4%', width: '4%'}} />, toggling their display on or off as needed.
	</Column.Item>
	<Column.Item width="30%">
        <img src={require('./img/outline.png').default} style={{borderRadius: '6px',height: '70%', width: '70%'}} />
	</Column.Item>
</Column.List>



## Header panel

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        For simplified project tracking, utilize the Project Management tools. Here are the key features:
	</Column.Item>
	<Column.Item width="30%">
        <img src={require('./img/headerPanel.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

<br/>

### Dialogs

The Dialog button <img alt="Dialog Icon" src={require('./img/headerPanel_Dialogs.png').default} style={{borderRadius: '6px', width: '3%'}} /> in the header panel provides access to a list of Dialogs. Each Dialog is designed as a popup overlay, aimed at enhancing user engagement by displaying additional content  within the existing webform.

:::info
For further details, refer to the [Dialog](./components/dialog.md) section.
:::

### Toggle Airy Layout

The Airy mode button <img alt="Dialog Icon" src={require('./img/headerPanel_Airy.png').default} style={{borderRadius: '6px', width: '3%'}} /> in the header panel is a feature that enhances the creation of user-friendly web forms. When activated, this mode automatically applies default margins between components, fostering a more spacious and aesthetically pleasing layout. By introducing gaps between form components, Airy mode streamlines the design process, producing visually appealing web forms with minimal need for manual style adjustments.

To reflect the selected mode, a toggle is incorporated on the canvas, allowing developers to switch between Airy mode and Neutral mode. 

:::info
The initial state of the toggle is context-dependent, adapting to the specific form being worked on.
:::

### Sanity Check

The Sanity Check button <img alt="Dialog Icon" src={require('./img/headerPanel_sanity-ok.png').default} style={{borderRadius: '6px', width: '3%'}} /> in the header panel plays a role in upholding the integrity and consistency of your Webforms. It is automatically engaged when editing an open webform. 

When the form is error-free, the icon appears as <img alt="Sanity Check OK" src={require('./img/headerPanel_sanity-ok.png').default} style={{borderRadius: '6px', height: '26px', width: '3%' }} />, serving as a vital signifier of the form's health.

When discrepancies arise, the icon's color changes to reflect the error category. By clicking on this icon, you gain access to a comprehensive analysis of the issues, organized into three distinct categories:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
    <strong>Errors</strong>: Errors are displayed in red and occur, for instance, when a component is linked to a non-existent data source.
	</Column.Item>
	<Column.Item width="35%">
        <img src={require('./img/sanityCheck_error.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
    <strong>Warnings</strong>: Warnings are shown in yellow, such as when a component needs to be bound to a data source.
	</Column.Item>
	<Column.Item width="35%">
        <img src={require('./img/sanityCheck_warning.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
    <strong>Informational</strong>: Informational notices are in grey, like when a data source is created but not utilized.
	</Column.Item>
	<Column.Item width="35%">
        <img src={require('./img/sanityCheck_info.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::info
The Sanity Check serves as an informative tool. Even if errors are present, a webform can still be saved. 
:::


### Datasources Color

The Datasources Color button <img alt="Dialog Icon" src={require('./img/headerPanel_dtscolor.png').default} style={{borderRadius: '6px', width: '3%'}} /> in the header panel allows easy identification of the background color of datasources linked to a component.


### Preview

The Preview buttons <img alt="Dialog Icon" src={require('./img/headerPanel_render1.png').default} style={{borderRadius: '6px', width: '3%'}} /> and <img alt="Dialog Icon" src={require('./img/headerPanel_render2.png').default} style={{borderRadius: '6px', width: '3%'}} /> in the header panel render a webform either directly in Qodly Studio or using the webform URL.

:::info
For further details, refer to the [Rendering a webform](../rendering.md) section.
:::

## Contextual panel

The **Contextual Panel** is a multifaceted interface, consisting of three distinct tabs: the Component tab, the Datasource tab, and the CSS tab.

:::tip Memory Functionality for Enhanced User Experience

The intuitive design of Qodly includes a feature that memorizes the last active tab in the Contextual Panel. When there is a switch between components, the panel automatically displays the last tab that was in use.

:::

### Component Tab


<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
    The Component tab enables linking actions like <a href="./events#binding-class-functions-to-events">Class Functions</a>, <a href="./events#binding-navigation-actions-to-events">Navigation Actions</a>, <a href="./events#binding-standard-actions-to-events">Standard Actions</a> and <a href="./events#binding-dialog-actions-to-events">Dialog Actions</a> to a component's specific events, streamlining event-driven functionalities.
	</Column.Item>
	<Column.Item width="50%">
        <img src={require('./img/contextualPanel_tabComponent.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### Datasource Tab

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
    The Datasource tab facilitates management of actions such as <a href="./events#binding-class-functions-to-events">Class Functions</a>, <a href="./events#binding-navigation-actions-to-events">Navigation Actions</a>, <a href="./events#binding-standard-actions-to-events">Standard Actions</a> and <a href="./events#binding-dialog-actions-to-events">Dialog Actions</a> tied to events linked with a datasource, providing a centralized interface for coordinating components and their data interactions.
	</Column.Item>
	<Column.Item width="50%">
        <img src={require('./img/contextualPanel_tabDatasource.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::tip
The Datasource tab becomes accessible only when a component is linked to a datasource.
:::

### CSS Tab

<Column.List align="center" justifyContent="between">
	<Column.Item width="45%">
    The CSS tab focuses on managing CSS classes applied to components, displaying them in a list on the left-hand side. Selecting a class from this list opens it in the CSS editing area for modification and highlights it.
	</Column.Item>
	<Column.Item width="50%">
        <img src={require('./img/contextualPanel_tabCSS.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::info Important Considerations:

- **CSS Class Deletion**: Direct deletion of CSS classes from the Contextual Panel is not possible. For complete removal, navigate to the Styles Library.

- **Removing CSS Classes from Components**: Unapplying a CSS class from a component requires alterations in the component's Properties Panel, not via the Contextual Panel.
:::


For further details about styling components, refer to the [Styling](styling.md) section.

:::tip
The CSS tab becomes accessible only when there are CSS classes applied to a component.
:::


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
        <img src={require('./img/propertiesPanel_displayMode.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


### Component Reference (Ref)

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        This section introduces the internal ID assigned to the chosen component during creation. This unique identifier is utilized for referencing during <a href="components/webformloader">Webform loader component</a> navigation actions. The reference for a webform component is consistently set to ROOT <img src={require('./img/propertiesPanel_refRoot.png').default} style={{borderRadius: '6px', height: '20%', width: '20%' }} />.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/propertiesPanel_ref.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


### Search box

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        The search box feature streamlines property name searches, ensuring swift and convenient access. As you input characters, the property list dynamically updates, displaying only properties with corresponding names.
    </Column.Item>
    <Column.Item width="30%">
        <img src={require('./img/propertiesPanel_searchBox.png').default} style={{borderRadius: '6px'}} />
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
        <img src={require('./img/serverSide.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::info 
Server Side allows you to control the component's behavior, such as [hiding](../../language/WebFormItemClass.md#hide), [showing](../../language/WebFormItemClass.md#show), [adding CSS classes](../../language/WebFormItemClass.md#addcssclass), or [removing CSS classes](../../language/WebFormItemClass.md#removecssclass) from it.
:::


### Style Category

Discover numerous customization avenues that empower you to fine-tune components according to distinct needs. 

:::info
Every style property is visible for all components, even though specific properties, like text alignment under the Font category for the icon component, will not impact the appearance of the component.
:::

Explore below for specific options:

| Section       | Description |
|-----------------|-------------|
| CSS             | The CSS class contains styles influencing visual attributes, affecting the component's appearance and positioning. Refer to the [Styles Library](styling.md) for additional details. |
| Color scheme    | Customize the component's color palette including background colors, text colors, and box shadows.         |
| Background      | Assign a background image to the component with options like position, size, attachment, and repeat settings. If you use a picture stored in the [**Shared**](events.md#navigation---shared-folder) folder, you can drag and drop the file on the property area to enter its path automatically (e.g., `/$shared/visuals/background.png`).                                   |
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
        <img src={require('./img/resetValue.png').default} style={{borderRadius: '6px'}} />
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
        <img src={require('./img/textEditor.png').default} style={{borderRadius: '6px'}} />
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

<img src={require('./img/webformJSONRepresentation.png').default} style={{borderRadius: '6px'}} />

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
      <img src={require('./img/syntaxCheck_comma.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
      <strong>Expected closing brace</strong>: This error occurs when the parser anticipates a closing curly brace <code>}</code> to conclude an object but does not find it.
	</Column.Item>
	<Column.Item width="30%">
      <img src={require('./img/syntaxCheck_brace.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
      <strong>Value expected</strong>: This error arises when an object key is succeeded by a colon, but the corresponding value is missing, indicating an incomplete JSON representation.
	</Column.Item>
	<Column.Item width="30%">
      <img src={require('./img/syntaxCheck_value.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
      <strong>Colon expected</strong>: This error suggests that a colon <code>:</code> is required to separate the key and value in an object, but it is missing from the code.
	</Column.Item>
	<Column.Item width="30%">
      <img src={require('./img/syntaxCheck_colon.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
      <strong>Unexpected end of string json</strong>: This error is triggered when the parser encounters the end of a string without coming across a closing double quote <code>"</code>, indicating an unfinished string value or when the opening double quote is missing at the beginning of the string.
	</Column.Item>
	<Column.Item width="30%">
      <img src={require('./img/syntaxCheck_string.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::warning
It is essential to exercise caution when editing the JSON representation, as the syntax check does not validate whether attribute names match the expected ones or if there are issues with the attribute names. Similarly, it does not necessarily catch issues where a boolean value is used in place of a string value. 

These discrepancies may not trigger errors, but they can potentially corrupt your webform or, in more severe cases, break it until the errors are rectified. Therefore, thorough validation of attribute names and values is crucial to ensure the integrity and functionality of your webform.
:::
