---
id: environmentsOverview
title: Overview 
---

import Column from '@site/src/components/Column'


By default, Qodly applications come with a Development environment, but you can add additional environments as needed for Staging, Production, or other custom purposes. Following best practices, environments are typically named according to their role.

:::tip Notes on Environment-Specific Access

- **Development Environment**: Since the **Studio** is only available here, developers assigned to the development environment can actively work on the application code and configuration. This environment is ideal for users with development responsibilities.
  
- **Others Environments**: These environments do not provide Studio access. They are used for testing and final deployment, where roles like Viewer or limited Admin access may be more common, ensuring stable and controlled use of the application without modification risks.

:::


## Access Files via SFTP

### Overview 

For every environment, you can access your files on the server using the **Secure File Transfer Protocol** (SFTP). This is achieved by clicking the **Access files** button.

<img src={require('./img/sftp.png').default} style={{borderRadius: '6px'}} />

### Steps to Access Files

<Column.List align="center" justifyContent="between">
	<Column.Item width="40%">
        <ol>
            <li><strong>Click the Access files button</strong>: Navigate to the specific environment you want to manage and click the Access files button.</li><br/>
            <li><strong>Open your FTP Client</strong>: Use your preferred FTP client (e.g., Filezilla). This client will allow you to manage and transfer files securely.</li><br/>
        </ol>
	</Column.Item>
	<Column.Item width="55%">
        <img src={require('./img/sftpDialog.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>

3. **Enter Connection Details**: Use the following details to establish the connection:

    - Host: The unique SFTP URL assigned to your account.
    - Port: The designated port number for your FTP connection.
    - User: Your username.
    - Password: The temporary password provided to you.


### File Contents


<Column.List align="center" justifyContent="between">
	<Column.Item width="50%">
        Upon accessing your server via SFTP, you will find a variety of files and folders, each serving a distinct purpose. Below is a summary of the contents you may encounter:
	</Column.Item>
	<Column.Item width="45%">
        <img src={require('./img/filename.png').default} style={{borderRadius: '6px', width:'60%'}} />
	</Column.Item>
</Column.List>

#### General Files

| Contents            | Format   | Description                                                                                |
| ------------------- | -------- | ------------------------------------------------------------------------------------------ |
| Shared              | `Folder` | The shared resources, such as visuals, custom components, shared css, shared qodlysource... |
| catalog.4DCatalog   | `XML`    | Table and field definitions                                                                |
| folders.json        | `JSON`   | Explorer folder definitions                                                                |
| menus.json          | `JSON`   | Menu definitions                                                                           |
| model.4DModel       | `JSON`   | Custom positions and colors of tables, fields, and links in the Model editor.              |
| qodlyApp.json       | `JSON`   | Configuration settings                                                                     |
| roles.json          | `JSON`   | The user roles and permissions within the application.                                     |
| settings.4DSettings | `XML`    | Structure database settings.                                                               |


#### Classes

| Contents      | Format | Description                                                |
| ------------- | ------ | ---------------------------------------------------------- |
| className.4qs | `Text` | Project classes defined in the project. One file per class |


#### Methods

| Contents       | Format | Description                                                 |
| -------------- | ------ | ----------------------------------------------------------- |
| methodName.4qs | `Text` | Project methods defined in the project. One file per method |


#### Pages

| Contents            | Format | Description                            |
| ------------------- | ------ | -------------------------------------- |
| pageName.page | `JSON` | The JSON representation of the Page |

:::info
While it is possible to download all folders and files, some restrictions apply to modifying them. Due to Permissions issues, some folders/files cannot be modified or replaced directly. For instance, attempting to delete or replace the Catalog may result in denial, accompanied by a message prompting you to contact your web hosting service provider for assistance.
:::