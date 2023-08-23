---
id: image
title: Image
---


The **Image** component provides a straightforward solution for incorporating images into your webform. Whether showcasing product visuals, user avatars, or any other imagery, the Image component enables you to seamlessly integrate images into your application's interface.



## Display Options
The **Image** component offers multiple options for displaying images, providing developers with flexibility in presenting visual content:

- **Datasource Binding**: You can bind the Image component to a datasource, allowing for dynamic image presentation. By connecting the component to a datasource, the displayed image can change based on the values within the datasource. This dynamic approach is particularly useful for scenarios where images need to adapt to changing data.

- **Image Source**: Alternatively, you can specify an image source directly. This source can be a URL or a path to the image stored in the Shared folder. For instance, if you've uploaded an image named "path.png" using the direct upload feature, you can set the image source as /$shared/assets/images/name.png. This approach allows for the integration of static images that don't require a datasource connection.

- **Direct Image Upload**: The Image component simplifies the process of adding new images. By clicking on the image component and uploading the desired picture, the image is automatically added to the Shared folder's assets/images subdirectory. The component's image source is updated accordingly, ensuring quick and seamless integration of new visual content.



## Triggers and Events

The **Image** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component. |
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component. |
