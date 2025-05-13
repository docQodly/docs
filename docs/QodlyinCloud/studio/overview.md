---
id: overview
title: Overview
---

Development in Qodly relies on the use of **Qodly Studio**, an innovative platform for creating business web applications. Our primary goal with **Qodly Studio** is to provide developers with a seamless, 100% web-based development experience. This platform empowers developers to:

- Design and modify data models that align with your business logic.
- Effortlessly link data with [ORDA](../orda/data-model.md#the-orda-concept)  dataclasses.
- Visually craft Pages by simply dragging and dropping components onto a canvas.
- Instantly preview web pages.
- Execute QodlyScript code directly within web events or qodlysource events.
- Write and debug code directly within the browser.
- Fine-tune privileges and roles as per your requirements.

Ultimately, **Qodly Studio** allows developers to build comprehensive web-based business applications using just a web browser, significantly minimizing the need for extensive coding. Importantly, JavaScript is not a mandatory component in this process.

## Requirements

For development purposes, Qodly Studio supports the following web browsers:

- Chrome
- Edge
- FireFox

It is recommended to have a screen resolution of 1920x1080 for an optimal experience.

:::info
Deployed Qodly applications are accessible on all popular web browsers, with no specific requirements.
:::

## Accessing Qodly Studio

Access to Qodly Studio is granted to developers once they complete a series of authentication steps to enter the Qodly Cloud Management Console. From the Development or Staging [environment](../cloud/environmentsOverview.md) within the Qodly Console, you can access your application instance in Qodly Studio by either:

- Clicking on the [Studio](../cloud/consoleOverview.md#accessing-qodly-studio) button on the Overview page.
- Clicking on the [Studio URL](../cloud/resourceMonitoring.md#1-studio-url) in the General tab for the environment.




## Qodly Studio Home Page

When you first step into Qodly Studio, you'll immediately encounter a user-friendly interface. It's divided into three key sections: the `Explorer` ⓵ on the left, a `Header bar`⓶ at the top, and a `Grid container`⓷ in the center.

<img src={require('./img/qodly-studio-home-page-interface-explorer-header-grid.png').default} alt="Screenshot of the Qodly Studio home page highlighting the Explorer panel, top header bar with debug and preview options, and the central grid container for creating pages, data, classes, and methods." style={{borderRadius: '6px'}} />

1. **Explorer**: is where you'll find an overview of your project's essential elements:

    - <img src={require('./img/qodly-studio-pages-icon-project-overview.png').default} alt="Qodly Studio Pages icon representing the section for managing and viewing core project elements within the Explorer panel." style={{borderRadius: '6px'}} /> [Pages](./pageLoaders/pageLoaderOverview.md#page-editor-overview): Serve as containers, enveloping various components within your application. 
    - <img src={require('./img/qodly-studio-methods-icon-explorer-code-blocks.png').default} alt="Qodly Studio Methods icon in the Explorer panel, representing reusable blocks of code that define specific application logic and can be invoked by classes or other methods." style={{borderRadius: '6px'}} /> [Methods](./coding.md#methods): Function as distinct blocks of code that fulfill specific roles within your application. While they can be invoked from class functions or other methods, components can't directly interact with them.
    - <img src={require('./img/qodly-studio-classes-icon-explorer-object-structure.png').default} alt="Qodly Studio Classes icon in the Explorer panel, used to define object-oriented structures that components can directly interact with to manage application logic." style={{borderRadius: '6px'}} /> [Classes](./coding.md#classes): Serve as the cornerstone for organizing your code around objects, granting components the capability to directly interact with them.
    - <img src={require('./img/qodly-studio-shared-icon-explorer-assets-folder.png').default} alt="Qodly Studio Shared icon in the Explorer panel, representing the folder where developers store static assets like local images and downloadable files, accessible via /$shared or QodlyScript." style={{borderRadius: '6px'}} /> Shared: Use this folder to store any contents (local images, downloadable files...) you might need within your app. The contents of this folder can be accessed from Qodyy pages using the [`/$shared` link](pageLoaders/events/bindingActionToEvents.md#shared-folder) or from the QodlyScript language using the [`/SOURCES/Shared`](../language/basics/lang-pathnames.md#filesystem-pathnames) file path.
    - <img src={require('./img/qodly-studio-debugger-icon-explorer-error-tools.png').default} alt="Qodly Studio Debugger icon in the Explorer panel, giving access to built-in debugging tools that help identify and resolve development errors efficiently." style={{borderRadius: '6px'}} /> [Debugger](./debugging.md): Provides a suite of debugging tools that address different types of errors during the development phase.
    - <img src={require('./img/qodly-studio-roles-privileges-icon-explorer-access-control.png').default} alt="Qodly Studio Roles & Privileges icon in the Explorer panel, used to configure and manage access controls that restrict data visibility based on user roles." style={{borderRadius: '6px'}} /> [Roles And Privileges](./roles/rolesPrivilegesOverview.md): Plays a pivotal role in enforcing data access restrictions within your application, ensuring that the right users access the right data.
    - <img src={require('./img/qodly-studio-model-icon-explorer-datastore-structure.png').default} alt="Qodly Studio Model icon in the Explorer panel, representing the structure used to define how data is accessed and stored using datastore classes." style={{borderRadius: '6px', width: '5%'}} /> [Model](./model/model-editor-interface.md): Defines how data is accessed and stored within structures referred to as datastore classes.
    - <img src={require('./img/qodly-studio-settings-icon-explorer-app-configuration.png').default} alt="Qodly Studio Settings icon in the Explorer panel, used to access application-specific configuration options for managing app behavior and preferences." style={{borderRadius: '6px'}} /> [Settings](./settings.md): Offer options to configure application-specific settings.


2. **Header bar**: provides quick access to several project-related options:

    - <img src={require('./img/qodly-studio-debug-icon-headerbar-server-debugging.png').default} alt="Qodly Studio Debug icon in the header bar, used to initiate server-side debug sessions and attach debugging tools to the browser." style={{borderRadius: '6px', width: '5%'}} /> [Debug](./debugging.md#starting-a-debug-session): Initiate a debug session on the server, attaching it to your browser, and enable debugging for your app.
    - <img src={require('./img/qodly-studio-save-all-icon-headerbar-app-wide-changes.png').default} alt="Qodly Studio Save All icon in the header bar, allowing developers to save changes across all open windows and project components." style={{borderRadius: '6px', width: '5%'}} /> Save All: Save all changes made across all open windows within your app.
    - <img src={require('./img/qodly-studio-data-icon-headerbar-access-data-explorer.png').default} alt="Qodly Studio Data icon in the header bar, providing direct access to the Data Explorer for managing data-related operations." style={{borderRadius: '6px', width: '5%'}} /> [Data](../data-explorer/data-explorer.md): Provide access to the Data Explorer, facilitating data-related operations.
    - <img src={require('./img/qodly-studio-preview-icon-headerbar-site-rendering.png').default} alt="Qodly Studio Preview icon in the header bar, used to preview the full application for layout, styling, and functionality review." style={{borderRadius: '6px', width: '5%'}} /> [Preview](./rendering.md#preview-the-entire-site): Allows you to assess your application's appearance and functionality with ease.
    - <img src={require('./img/qodly-studio-settings-icon-headerbar-app-config-options.png').default} alt="Qodly Studio Settings icon in the header bar, offering quick access to configuration options for customizing the app environment." style={{borderRadius: '6px'}} /> [Settings](./settings.md): Present a range of options for configuring application-specific settings, tailoring the environment to your app's needs.

3. **Grid container**: houses a collection of swift shortcuts for a range of actions:

    - **Create New**: Offers convenient quick links for:
        - <img src={require('./img/qodly-studio-pages-icon-project-overview.png').default} alt="Qodly Studio Pages icon as seen in the Grid container, used as a shortcut to quickly create or access project pages." style={{borderRadius: '6px', width: '5%'}} /> [Pages](./pageLoaders/pageLoaderOverview.md#page-editor-overview): Speedily initiate the creation of a new Page.
        - <img src={require('./img/qodly-studio-classes-icon-grid-create-new-class.png').default} alt="Qodly Studio Classes icon in the Grid container, serving as a shortcut to generate a new class for organizing object-oriented code structures." style={{borderRadius: '6px'}} /> [Classes](./coding.md#creating): Generate a new Class.
        - <img src={require('./img/qodly-studio-methods-icon-grid-create-new-method.png').default} alt="Qodly Studio Methods icon in the Grid container, used as a shortcut to quickly create a new method that defines reusable blocks of application logic." style={{borderRadius: '6px'}} /> [Methods](./coding.md#creating): Generate a new Method.
        - <img src={require('./img/qodly-studio-data-icon-grid-access-data-explorer.png').default} alt="Qodly Studio Data icon in the Grid container, offering quick access to the Data Explorer for managing and interacting with data sources." style={{borderRadius: '6px', width: '5%'}} /> [Data](../data-explorer/data-explorer.md): Provide access to the [Data Explorer](../data-explorer/data-explorer.md), facilitating data-related operations.
    - **Recent Files**: Displays the most recently accessed files, allowing you to quickly revisit your recent work.
    - **What's New**: Keeps you updated with the latest news and announcements from the Qodly team.
  
  
## Tabs

Qodly Studio displays open items with tabs in the title area above the current editor.

<img src={require('./img/qodly-studio-open-tabs-title-bar-editor-navigation.png').default} alt="Qodly Studio interface showing the title bar with open tabs for pages, datastore, roles and privileges, and model, allowing quick navigation between active editor items." style={{borderRadius: '6px'}} /> 


[By default](#preview-mode), when you open a file, a new tab is added for that file. New tabs are added to the right of the existing tabs. All Qodly files and editors use tabs: model, Pages, methods, classes, roles and privileges, settings, pictures, and so on. 

Tabs let you quickly navigate between items and you can drag and drop tabs to reorder them. Only one instance of an item can be open in the same editor window.

When you have more open items than can fit in the title area, you can use the scroll bar between the tab and editor regions to drag tabs into view. 

<img src={require('./img/qodly-studio-tab-scrollbar-overflow-navigation-editor-tabs.png').default} alt="Qodly Studio showing a horizontal scrollbar beneath the title bar tabs, enabling users to scroll and access additional open items when the tab list exceeds the visible area." style={{borderRadius: '6px'}} /> 


### Contextual menu

Every tab provides access to a contextual menu that you can display with a **right-click** on the tab header:

<img src={require('./img/qodly-studio-tab-context-menu-options-right-click.png').default} alt="Qodly Studio contextual tab menu shown after right-clicking a tab, offering options like reload, rename, close, close others, and tab management actions." style={{borderRadius: '6px'}} /> 

The following actions are available:

-  **Reload**: reloads the tab contents from the server
-  **Rename** (not available with non-editable tabs such as Roles and Pivileges): makes the tab heading area editable so that you can rename the opened file.  
-  **Close**: closes the current tab and its associated file.
-  **Close others**: closes all the opened tabs except the current one.
-  **Close all**: closes all the opened tabs.
-  **Close saved**: closes all the tabs that contain saved contents. Tabs with unsaved contents are not closed. 
-  **Close tabs to the right/to the left**: closes all opened tabs located at the right side or the left side of the current tab.
-  **Switch to Text Editor** (only available with Page and model tabs): displays the [current Page](./pageLoaders/pageLoaderOverview.md#page-json-representation) or [model](model/model-editor-interface.md#model-json-representation) as JSON text. When called from the text editor, the menu command toggles to **Switch to Page Editor**/**Switch to Model Editor**. 

### Unsaved contents

When the contents of a tab has been modified locally but has not been saved, a colored spot is displayed on the right part of the tab header:

<img src={require('./img/qodly-studio-unsaved-tab-indicator-modified-content.png').default} alt="Qodly Studio tab labeled dashboard' showing a purple dot indicator, signaling that the tab contains unsaved local modifications." style={{borderRadius: '6px', width: '20%'}} /> 

When closing or reloading a tab, if it contains unsaved changes, an alert window is displayed, allowing you to ignore the changes and close the tab (**Confirm**) or cancel the closure and let you click the [**Save all**](./coding.md#saving) button to save the changes. 

<img src={require('./img/qodly-studio-unsaved-changes-warning-prompt-dialog.png').default} alt="Qodly Studio warning prompt displaying a confirmation dialog when closing a tab with unsaved changes, showing options to Confirm or Cancel the action." style={{borderRadius: '6px', width: '50%'}} /> 

### Preview mode

By default in Qodly Studio, clicking a file in the Explorer automatically opens it in a new tab, if not already opened. This can lead to open a large number of tabs. 

If you are browsing multiple files and don't want every opened file to have its own tab, you can enable the **tabs preview mode** using the [**Activate tabs preview mode** selector](settings.md#activate-tabs-preview-mode) of the User Settings. 

When the tabs preview mode is enabled, clicking a file in the Explorer displays a preview of its contents and reuses an existing tab. If you start editing the file or use double-click to open the file from the Explorer, a new tab is dedicated to that file. 

Preview mode tab is indicated by *italics* in the tab heading:

<img src={require('./img/qodly-studio-preview-mode-tab-italic-label-indicator.png').default} alt="Qodly Studio interface showing an italicized 'main' tab label to indicate that the tab is in preview mode." style={{borderRadius: '6px', width: '50%'}} /> 

If you'd prefer to not use preview mode and always create a new tab, just let the selector off (default mode). 