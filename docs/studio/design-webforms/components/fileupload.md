---
id: fileupload
title: File Upload
hide_title: true
---

## Component Overview

The File Upload component offers a streamlined approach for users to upload files to the server, providing a practical solution for handling binary or picture file transfers. This component enables users to effortlessly upload files, which are then securely stored within an allocated entity attribute.

## Use Cases

The File Upload component finds valuable application in diverse scenarios, including:

- Document Management: Facilitate efficient document uploads and storage for improved organization.

- Media Sharing: Allow users to upload images, videos, or audio files for seamless sharing with others.

- File Archiving: Provide users with a means to securely store and retrieve essential files or records.


## Customization

Enhance the File Upload component to align with your application's requirements using the following customization options:

- Label: Personalize the label to offer clear instructions or guidance.

- Icon Position: Choose the position of the icon in relation to the label, allowing options for top, bottom, left, right, or even hidden for a seamless integration into your design.

- Size Limit: Define the maximum file size users are allowed to upload, providing granular control over file dimensions. Choose from units such as KB, MB, and GB. If a user attempts to upload a file exceeding the specified size, an error message is displayed in the browser.

- Media Type: Specify the supported file types that can be uploaded using the component. Supported types include text, image, video, and audio.

## Data-Bounding

The File Upload component harnesses the power of data-binding to establish a dynamic connection between user interactions and the underlying data structure. This ensures a seamless integration of uploaded files into your application's data ecosystem. The File Upload component's data-binding capabilities include:

   - Entity Datasource: To fully utilize the File Upload component, associate it with an attribute of type Blob or picture within an ORDA entity. This attribute serves as the destination where the uploaded file will be stored.

( ☢️ to be done ☢️ )


## Triggers and Events

The File Upload component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Blur| Calls for an action when the component loses focus (user clicks outside). |
|On Focus| Calls for an action when the component gains focus (user clicks on it). |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the component is in focus. |
|On Keyup| Calls for an action when a keyboard key is released while the component is in focus|
