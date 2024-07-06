---
id: uploadCustomComponents
title: Upload Custom Component
---

import Column from '@site/src/components/Column'


## Overview

Qodly Studio offers an upload functionality to enhance the user experience and streamline the integration of custom components. This feature enables users to upload components generated using the [`npm run build` command](../../../customComponent/setup#building-the-project).


## Community's Custom Components

The Qodly developer community is actively expanding, with members continuously crafting innovative custom components. These components are generously shared for free download within the community. If you're interested in contributing your custom components to this collective effort, we invite you to do so on the [**Custom Components for Qodly Studio page**](https://github.com/qodly/custom-components).

## Uploading Custom Component


<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
      Qodly Studio provides a dedicated upload <img src={require('./img/customComponent_5.png').default} style={{borderRadius: '6px', width:'4%'}} /> button in the Component bar, allowing users to upload custom components. Hovering over the button displays a tooltip with the text "Upload Component".
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/customComponent_1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<br/>

Clicking the button opens a popup with two upload methods:

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        <ul>
            <li> Users can drag and drop a component file onto the designated area within the popup.</li>
            <br/>
            <li> Alternatively, users have the option to select a component file from their computer using a file explorer.</li>
        </ul>
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/customComponent_2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
      If a user drops a file in the ".zip" format, the name of the file is prominently displayed in the drop area, confirming the selection.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/customComponent_8.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::info
Attempting to drop a file in a format other than ".zip" leaves the popup unaffected.
:::


## Installing Custom Component

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
      The "Install Component" button remains inactive until a user selects a custom component for upload.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/customComponent_8.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
      Upon clicking the "Install Component" button, a progress icon <img src={require('./img/customComponent_9.png').default} style={{borderRadius: '6px', width:'4%'}} /> is displayed, indicating that the selected component is undergoing the upload process.
      <br/><br/>
      Clicking the "Cancel" button closes the upload interface, ensuring that no component is uploaded.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/customComponent_3.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
      After a successful installation, a page reload is necessary for the custom component to appear.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/customComponent_4.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        Clicking the reload button will close the popup and refresh the page. Subsequently, it adds a new entry to the component list in the "Custom Component" category, complete with the icon and name of the uploaded component.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/customComponent_6.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::info
If no specific icon is defined for the custom component, the default icon is displayed alongside the component name.
:::


<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
      In case of upload failure, an error message is displayed in the popup, stating that an error occurred during the upload.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/customComponent_10.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::info
To check relevant details about the error and address the issue, inspect the network activity in the browser console. The upload request will display precisely what the error is.
<img src={require('./img/customComponent_11.png').default} style={{borderRadius: '6px'}} />
:::


## Integration Process

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
      Upon successful upload and installation of a custom component, a structured process is executed to ensure integration into Qodly Studio.
      <br/><br/>
      This process involves the creation of a dedicated <code>CustomComponents</code> folder within the <code>Shared</code> directory in the Explorer panel, containing relevant metadata and the uploaded custom components.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/customComponent_7.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

### Manifest File Generation

Within the `CustomComponents` folder, a `manifest.json` file is generated, serving as a configuration document with information about the uploaded custom component.

```json
[
   {
      "scope": "qodly_381922b196e120e9eee5",
      "author": {
         "name": "Qodly Team",
         "email": "contact@qodly.com",
         "url": "https://qodly.com"
      },
      "module": "components",
      "remoteEntryFileName": "components.js",
      "url": "/$shared/CustomComponents/qodly_381922b196e120e9eee5/"
   }
]
```

### Component Folder Creation

Simultaneously, a folder is created with a name corresponding to the unique ID of the uploaded custom component. This folder encompasses various essential files, including JavaScript files and licenses dedicated to the custom component:

- **64.6f4d1ae1**: This file contains minified JavaScript code associated with the definition of the React component "ExampleComponent". It encompasses settings, component structure, event handling, and other functionalities crucial to the behavior of the component.

- **64.6f4d1ae1.js.LICENSE**: This file contains licensing information for the JavaScript file "64.6f4d1ae1". It provides details regarding the license under which the code is distributed.

- **693.a8434817**: This file holds minified JavaScript code responsible for defining various functions or features within the component. It plays a role in enhancing the overall functionality of the custom component.

- **693.a8434817.js.LICENSE**: Licensing information specific to the JavaScript file "693.a8434817". It includes details about the license under which the code is distributed.

- **components**: This file contains a minified and compressed file that encompasses functionality related to dynamic module loading, shared modules, dynamic script creation and loading, error handling, and references to Webpack chunks. It is crucial for efficient operation and integration of the custom component within Qodly Studio.

- **main.e029b478**: A minified JavaScript file containing code related to the React component "ExampleComponent". It includes modules for a web form editor (@ws-ui/webform-editor) and the React library itself. The code defines and exports components, settings, and other functionality.

- **main.e029b478.js.LICENSE**: Licensing information for the JavaScript file "main.e029b478". It includes details about the license under which the code is distributed.

- **manifest**: The "manifest" file includes important metadata about the custom component
