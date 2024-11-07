---
id: application-management
title: Managing Applications
---

import Column from '@site/src/components/Column'


When you click on an application from the Apps list, it opens a dedicated panel where you can perform various actions. 

   <img src={require('./img/app-manager.png').default} style={{borderRadius: '6px'}} />


## Open Qodly Studio

You can directly access your application in Qodly Studio in two ways:

- By clicking the **Studio** button on the Overview page

    <img src={require('./img/studio1.png').default} style={{borderRadius: '6px'}} />

- Or, by clicking the "Studio URL" in the **General** tab for the current environment.

    <img src={require('./img/studio2.png').default} style={{borderRadius: '6px'}} />


## Environment Overview

In the Overview page, you can see essential information on each [environment](getStarted.md#environments) of your application:

   <img src={require('./img/app1.png').default} style={{borderRadius: '6px'}} />

#### Name

Name of the environment as defined when you [created](creating-apps.md#add-environment) it. The default development environment name cannot be modified.

You can click on the name to access the a detailed view for this environment.

#### Refresh button

Click this button to refresh and reload the information about the environment.


#### Instance

Current status of the application instance. Most common statuses are:

- **Running**: The instance is correctly configured and loaded by the server.
- **Pending**: The instance is being configured, it is not already loaded.
- **Offline**: The instance cannot be loaded for some reason.

#### Server

Current status of the Qodly server. Most common statuses are:

- **Online**: The server is online and can be reached.
- **Offline**: The server is offline and cannot be reached.

#### Disk

Percentage of disk used. The allocated disk size is defined in the [application configuration](creating-apps.md#configuration).

#### Memory

Percentage of the memory currently in use. The allocated memory size is defined in the [application configuration](creating-apps.md#configuration).


#### Outbound

Used outbound data from Qodly to the Internet. It resets to 0 each beginning of the month. 

You can click on **Edit alert** to set a threshold to get notified if the usage approaches the upper limit (enter a value in percentage): 

   <img src={require('./img/outbound.png').default} style={{borderRadius: '6px'}} />


Note that there is a specific charge for exceeding the initial [data configuration](creating-apps.md#configuration).

#### Users

Number of users registered for the environment. 

#### Version

The current Qodly version in the instance. when a new version is available, you can see a button allowing you to upgrade to the latest version.

### Activity

Logs all activities related to the whole application (creation, start/stop, backup...) ordered from newest to oldest. 

## Environment Detail

When you click on the name of an environment or select an environment in the sidebar, a detailed panel is displayed:

 <img src={require('./img/app1.2.png').default} style={{borderRadius: '6px'}} />

You can monitor the environment using several tabs.

### General

#### Usage and Users

Same values as in the [overview](#overview) (see above).

#### Server status

Current [status](#server-status) of the Qodly server, as well as 3 buttons allowing you to control the server:

- **start**/**stop** (toggle button): to start or stop the server
- **restart**: to restart the server
- **refresh**: to refresh and refetch the current server status

Restarting the server could be useful for resetting server memory.

<img src={require('./img/app2.png').default} style={{borderRadius: '6px'}} />


#### Studio URL

Only visible on Development environment. Allows access to Qodly Studio to edit your code.

#### Authenticated URL

Allows access to your Qodly app through an authentication window managed by Qodly.

#### Public URL

In deployed environments, you can activate the access to your app through a public URL (without authentication). This URL exposes publicly the pages, you can then add your own authentication flow. Click on **Activate public access** to enable this access. 

In the development environment, the access is activated by default, this area allows to get the public URL. 

#### Custom doimain

Only visible in deployment environments.

Allows you to add your custom domain to use it as the base URL of your application. You can either add your own certification and private key, or let qodly handle everything for you. Once you add your custom domain you should also update your DNS provider with the provided CNAME and value.

#### Activity

Same information as in the [overview](#overview) (see above).


### Monitor Resources

Access the **Metrics** tab of an environment to monitor its resources.

<img src={require('./img/metrics.png').default} style={{borderRadius: '6px'}} />



## Invite Developers and Users

In the **Team** tab, view the list of registered developers and users. Invite users by clicking the **Add user** button and providing their details, including "First Name", "Last Name", "Email Address", and "Profile" (a [role defined in Qodly Studio](../studio/roles/rolesPrivilegesOverview.md)).

<img src={require('./img/invite1.png').default} style={{borderRadius: '6px'}} />

## Schedule and Restore Backups

<img src={require('./img/backup.png').default} style={{borderRadius: '6px'}} />

## Preview Your App

Click the **Preview URL** in the Application Access area to open your application's [home page](../studio/settings.md#start-page).

<img src={require('./img/publish.png').default} style={{borderRadius: '6px'}} />

## Add Custom Domain

Per app, you can add a domain for validation (details provided by QCMC).

<img src={require('./img/publish.png').default} style={{borderRadius: '6px'}} />


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