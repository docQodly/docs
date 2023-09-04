---
id: image
title: Image
---
import Column from '@site/src/components/Column'


The **Image** component is a UI element that enables you to integrate images into your webform. 

## Use Cases

The **Image** component offers versatile solutions for enhancing your web application's visual experience:

- **Static Images**: Display fixed visual elements, such as logos, icons, and decorative images.
- **Dynamic Conten**: Display dynamic content fetched from datasources.
- **Data Visualization**: Display charts, graphs, and diagrams as images, enabling the visualization of complex data in a more accessible and engaging manner.


## Display Options
The **Image** component offers multiple options for displaying images:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <span style={{fontWeight: 'bold'}}>Datasource Binding</span>: You can bind the Image component to a datasource, causing the displayed image to update according to the values within the datasource. When using datasource binding, make sure to include <code>.__deferred.uri</code> to access the image's URI.
	</Column.Item>
	<Column.Item width="45%">
        <img alt="explorer" src={require('./img/image_DatasourceBinding.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <span style={{fontWeight: 'bold'}}>Image Source</span>: Alternatively, you can specify an image source directly. This source can be a URL or a path to the image stored in the Shared folder. For instance, if you've uploaded an image named "booking.png", you can set the image source as <code>/$shared/visuals/booking.png</code>.
	</Column.Item>
	<Column.Item width="45%">
        <img alt="explorer" src={require('./img/image_ImageSource.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

- **Direct Image Upload**: The Image component simplifies the process of adding new images. By clicking on the image component and uploading the desired picture, the image is automatically added to the Shared folder's <code>/$shared/assets/images</code> subdirectory. The component's image source is updated accordingly.



## Triggers and Events

The **Image** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component. |
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component. |
