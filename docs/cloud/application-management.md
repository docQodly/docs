---
id: application-management
title: Application Management
---

When you select an application from the Apps list, it opens a dedicated panel where you can perform various actions:

## View Environment Status

You have two options to check the status of every environment:

- In the `Overview`, you can see the status of each [environment](getStarted.md#environments-and-services) represented by an icon:

![app](img/app1.png)

- Alternatively, you can click on the left-side tabs to manage your apps individually for each environment:

![app](img/app1.2.png)

## Stop or restart Qodly Server

Useful for resetting server memory.

![app](img/app2.png)

## Open Qodly Studio

You can directly access your application in Qodly Studio in two ways:

- By clicking the **Studio** button on the Overview page

![studio](img/studio1.png)

- Or, by clicking the "Studio URL" in the **General** tab for the current environment.

![studio](img/studio2.png)

## Monitor Resources

Access the **Metrics** tab of an environment to monitor its resources.

![metrics](img/metrics.png)

## Update Qodly Server

Click the cloud icon to update your Qodly Server with the latest provided by the Qodly Platform.

![update](img/update.png)

## Invite Developers and Users

In the **Team** tab, view the list of registered developers and users. Invite users by clicking the **Add user** button and providing their details, including "First Name", "Last Name", "Email Address", and "Profile" (a [role defined in Qodly Studio](../studio/roles/rolesPrivilegesOverview.md)).

![invite](img/invite1.png)

## Schedule and Restore Backups

![backup](img/backup.png)

## Preview Your App

Click the **Preview URL** in the Application Access area to open your application's [home page](../studio/settings.md#start-page).

![publish](img/publish.png)

## Add Custom Domain

Per app, you can add a domain for validation (details provided by QCMC).

![publish](img/publish.png)

## Access Files via SFTP

For every environment, access your files on the server using the **Secure File Transfer Protocol** (SFTP) by clicking the **Access files** button.

![access-files](img/sftp.png)

With your preferred FTP client (e.g., Filezilla), you can access and manage your files.

It includes the following connection details:

- Host: The unique SFTP URL assigned to your account.
- Port: The designated port number for your FTP connection.
- User: Your username.
- Password: The temporary password.

![access-files](img/sftpDialog.png)

the files contain :

![access-files](img/filename.png)

| Contents            | Format   | Description                                                                                |
| ------------------- | -------- | ------------------------------------------------------------------------------------------ |
| Shared              | `Folder` | The shared resources, such as visuals, custom components, shared css, shared datasource... |
| catalog.4DCatalog   | `XML`    | Table and field definitions                                                                |
| folders.json        | `JSON`   | Explorer folder definitions                                                                |
| menus.json          | `JSON`   | Menu definitions                                                                           |
| model.4DModel       | `JSON`   | Custom positions and colors of tables, fields, and links in the Model editor.              |
| qodlyApp.json       | `JSON`   | Configuration settings                                                                     |
| roles.json          | `JSON`   | The user roles and permissions within the application.                                     |
| settings.4DSettings | `XML`    | Structure database settings.                                                               |

Classes

| Contents      | Format | Description                                                |
| ------------- | ------ | ---------------------------------------------------------- |
| className.4qs | `Text` | Project classes defined in the project. One file per class |

Methods

| Contents       | Format | Description                                                 |
| -------------- | ------ | ----------------------------------------------------------- |
| methodName.4qs | `Text` | Project methods defined in the project. One file per method |

Webforms

| Contents            | Format | Description                            |
| ------------------- | ------ | -------------------------------------- |
| webformName.webForm | `JSON` | The JSON representation of the webform |

:::note
While it's possible to download all folders and files, certain restrictions apply to modifying them. Due to Permissions issues, certain folders/files cannot be modified or replaced directly. For instance, attempting to delete or replace the Catalog may result in denial, accompanied by a message prompting you to contact your web hosting service provider for assistance.
:::
