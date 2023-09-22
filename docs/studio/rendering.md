---
id: rendering
title: Webform Rendering
---
import Column from '@site/src/components/Column'


The concept of rendering plays a fundamental role in bringing digital interfaces to life. However, Qodly Studio has a unique approach to rendering that sets it apart from traditional methods.


## What is Rendering?

At its core, rendering represents the pivotal stage where the abstract blueprint of a digital interface takes its final form. It encompasses the intricate process of translating design layouts, data connections, and interactive behaviors into a visually appealing and functional user interface that end-users can interact with.


## Understanding the Qodly Approach

In the case of Qodly Studio, rendering takes a different path compared to conventional web development. Here's how it works:

- **Design and Configuration**: Users initiate the webform creation process within **Qodly Studio** by arranging components, mapping datasources to these components, and configuring event-driven behaviors. This design phase captures the form's layout and desired functionality.

- **JSON Representation**: Instead of generating conventional HTML code, **Qodly Studio** encapsulates the entire webform, including layout, data connections, and event-driven logic, in a structured JSON file. This JSON file serves as the representation of the webform.

- **Rendering Trigger**: Accessing the webform directly in a web browser is not an option. Instead, the webform is "**rendered**" when users initiate the rendering process, which can be done in one of two ways:

    - **Preview in the Studio**: Users have the option to [preview the webform within the Qodly Studio interface](#preview-in-the-studio).

    - **Dedicated Browser Tab**: Alternatively, users can opt to [render the webform in a separate browser tab](#preview-in-a-browser-window).



When a webform is rendered for the end user, what is returned is the final HTML code and CSS that represent the webform's visual appearance and functionality.

:::info
The webform is transformed into an HTML/CSS representation that can be displayed and interacted with in a web browser. JSON is used internally for data representation and configuration but is not what the end user receives when viewing the webform.
:::

## Runtime Rendering

At **runtime**, webforms are generated and interpreted by the built-in renderer engine. This engine takes the JSON representation and transforms it into a functional, interactive form that end-users can engage with.


## Unique Webform URLs

Crucially, each webform is assigned a **unique URL** on the Qodly Web server. These URLs serve as access points for end-users to interact with and render the webforms they require.


## Data Flow and Server Architecture

The flow of data within the Qodly Studio ecosystem is carefully orchestrated, ensuring a seamless rendering experience:

<img alt="explorer" src={require('./img/workflow.png').default} style={{borderRadius: '6px'}} />

- Qodly Studio operates with an embedded Studio web server, providing secure web access. Users can conveniently preview webforms within the protected confines of Qodly Studio.

- Additionally, the Qodly web server functions as a REST server, facilitating communication between the rendering engine and the web server through REST requests.

- After deployment, webforms become readily accessible to end-users, who can render and interact with them directly in their web browsers.


## Webform Rendering Options

Rendering a webform in Qodly Studio provides versatile control and accessibility. You can preview it in the Studio or a separate browser window, but It's important to note that:

:::info 
Database resource access control depends on the chosen rendering method.
:::


### Preview in the Studio

<Column.List align="center" justifyContent="between">
    <Column.Item width="75%">
        This option enables you to render the current page directly within the webform editor window. Here, the webform is rendered by the Qodly Studio's embedded web server. <br/><br/>
        This approach provides a comprehensive view of data classes, functions, and attributes, even if they are not exposed as REST resources.
    </Column.Item>
    <Column.Item width="20%">
        <img alt="explorer" src={require('./img/preview-ide.png').default} style={{borderRadius: '6px', height: '70%', width: '70%'}} />
    </Column.Item>
</Column.List>

<br/>

Please keep in mind that:

:::info 
This preview is conducted with **Administrative** privileges, utilizing the **Admin** account you registered with. To conduct a preview based on a specific user's perspective, explore the options for **Previewing in a new tab** or **Previewing the entire site**.
:::


### Preview in a Browser Window

You have the flexibility to render the current webform or the entire website in a browser window. In both scenarios, the webform is rendered by the Qodly web renderer engine. This engine diligently applies **REST resource restrictions and permission actions** defined in your Qodly project, ensuring that only exposed resources are rendered in the browser. 

It's worth noting that:

:::info 
This preview operates under the logged-in user's privileges. During your initial preview or when your session expires, your browser will prompt you to log in with a Qodly user account, utilizing this account's privileges for rendering your application.
:::


#### Preview Webform in a New Tab

<Column.List align="center" justifyContent="between">
    <Column.Item width="75%">
        This option allows you to display the current webform in a browser window tab, offering a convenient way to assess its appearance and functionality.
    </Column.Item>
    <Column.Item width="20%">
        <img alt="explorer" src={require('./img/preview-tab.png').default} style={{borderRadius: '6px', height: '70%', width: '70%'}} />
    </Column.Item>
</Column.List>


#### Preview the Entire Site

<Column.List align="center" justifyContent="between">
    <Column.Item width="75%">
        The <code>Preview</code> button on the Qodly toolbar presents the start page, as <a href="./settings#application">defined in the Settings</a> within a browser window tab. This option provides a holistic view of the application's initial landing page.
    </Column.Item>
    <Column.Item width="20%">
        <img alt="explorer" src={require('./img/preview-main.png').default} style={{borderRadius: '6px', height: '70%', width: '70%'}} />
    </Column.Item>
</Column.List>

