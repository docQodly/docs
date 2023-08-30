---
id: fileupload
title: File Upload
---
import Column from '@site/src/components/Column'


The **File Upload** component is an interactive UI element that simplifies file transfers by allowing users to easily upload files to the server.


:::info 

The **File Upload** component has an **Icon** element embedded within it. This is of great importance as configuring the **File Upload** component may require adjusting properties within the embedded element. This applies to the visual style, triggers, and actions as they may differ.

:::


## Use Cases

The **File Upload** component finds valuable application in diverse scenarios, including:

- **Document Management**: Facilitate efficient document uploads and storage for improved organization.

- **Media Sharing**: Allow users to upload images, videos, or audio files for seamless sharing with others.

- **File Archiving**: Provide users with a means to securely store and retrieve essential files or records.



## Properties Customization

### <u>File Upload Component</u>

Enhance the **File Upload** component to align with your application's requirements using the following customization options:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Label</span>: Personalize the label to offer clear instructions or guidance.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/fileUpload_Label.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Icon Position</span>: Choose the position of the icon in relation to the label, allowing options for top, bottom, left, right, or even hidden.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/fileUpload_IconPosition.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Size Limit</span>: Define the maximum file size users are allowed to upload. Choose from units such as KB, MB, and GB. If a user attempts to upload a file exceeding the specified size, an error message is displayed in the browser.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/fileUpload_SizeLimit.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Media Type</span>: Specify the supported file types that can be uploaded using the component. Supported types include text, image, video, and audio.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/fileUpload_MediaType.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

### <u>Embedded Icon</u>

<Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
                Within the <span style={{fontWeight: 'bold'}}>File Upload</span> component, an embedded <span style={{fontWeight: 'bold'}}>Icon</span> allows for further customization of the following properties: <br/><br/>
                <li><span style={{fontWeight: 'bold'}}>Icon</span>: When the icon visibility is configured in the File Upload component's customization properties, you can select an icon from an icon picker list.</li>
        </Column.Item>
        <Column.Item width="35%">
                <img alt="explorer" src={require('./img/button_icon.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
</Column.List>


## Data Integration

The **File Upload** component utilizes data-binding to create a dynamic link between user actions and the underlying data structure. 

### <u>Data Binding</u>

<Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        For optimal use of the File Upload component, bind it with an attribute of type Blob or Picture within an entity datasource. This attribute acts as the storage location for the uploaded file.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/fileUpload_dataBinding.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


## Showcase

Here's a glimpse of how the **File Upload** component will look and behave in action:

<img alt="explorer" src={require('./img/fileUpload_Preview.gif').default} style={{borderRadius: '6px', height: '90%', width: '90%'}} />


## Triggers and Events

### <u>File Upload Component</u>

The **File Upload** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Blur| Calls for an action when the component loses focus (user clicks outside). |
|On Focus| Calls for an action when the component gains focus (user clicks on it). |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the component is in focus. |
|On Keyup| Calls for an action when a keyboard key is released while the component is in focus|

### <u>Embedded Icon</u>

The embedded **Icon** can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the Icon. |
|On Keyup| Calls for an action when a keyboard key is released while the Icon is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the Icon is in focus. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the Icon.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the Icon.|