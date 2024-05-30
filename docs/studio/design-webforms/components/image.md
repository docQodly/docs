---
id: image
title: Image
---
import Column from '@site/src/components/Column'


The **Image** component is a UI element that enables you to integrate images into your webform. 

## Use Cases

The **Image** component offers versatile solutions for enhancing your web application's visual experience:

- **Static Images**: Display fixed visual elements, such as logos, icons, and decorative images.
- **Dynamic Content**: Display dynamic content fetched from datasources.
- **Data Visualization**: Display charts, graphs, and diagrams as images, enabling the visualization of complex data in a more accessible and engaging manner.


## Display Options
The **Image** component offers multiple options for displaying images:

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ul>
            <li><strong>Datasource Binding</strong>: You can bind the Image component to a datasource of type <code>image</code>, causing the displayed image to update according to the value within the datasource.</li>
        </ul>
	</Column.Item>
	<Column.Item width="45%">
         <img src={require('./img/image_DatasourceBinding.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


<br/>

<Column.List align="center" justifyContent="between">
	<Column.Item width="55%">
        <ul>
            <li><strong>Image Source</strong>: Alternatively, you can specify an image source directly. This source can be a URL or a path to the image stored in the Shared folder.</li>
        </ul>
	</Column.Item>
	<Column.Item width="45%">
         <img src={require('./img/image_ImageSource.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

:::info 
For instance, if you've uploaded an image named "booking.png" in a "visuals" folder, you can set the image source as `/$shared/visuals/booking.png`.
:::

<br/>

- **Direct Image Upload**: The Image component simplifies the process of adding new images. By clicking on the image component and uploading the desired picture, the image is automatically added to the Shared folder's <code>/$shared/assets/images</code> subdirectory. The component's image source is updated accordingly.

<br/>

:::tip 
Alternatively, you can establish the connection by dragging and dropping an image datasource onto the webform, which will automatically add an Image component with the datasource bound to it.
:::


- **Default Image Source**: In Image components, by default Qodly displays a "missing image" placeholder when the bound image datasource is null:

	![default-image-placeholder](img/image_Default_factory.png)

	This is the case for example when the "photo" attribute of and "Employee" entity was not uploaded. You can use the **Default Image Source** property to define your own default image: 

	![default-image](img/image_Default.png)


## Triggers and Events

The **Image** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component. |
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component. |
