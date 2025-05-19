---
id: rendering
title: Page Rendering
---
import Column from '@site/src/components/Column'


The concept of rendering plays a fundamental role in bringing digital interfaces to life. However, Qodly Studio has a unique approach to rendering that sets it apart from traditional methods.


## What is Rendering?

At its core, rendering represents the pivotal stage where the abstract blueprint of a digital interface takes its final form. It encompasses the intricate process of translating design layouts, data connections, and interactive behaviors into a visually appealing and functional user interface that end-users can interact with.


## Understanding the Qodly Approach

In the case of Qodly Studio, rendering takes a different path compared to conventional web development. Here's how it works:

- **Design and Configuration**: Users initiate the Page creation process within **Qodly Studio** by arranging components, mapping qodlysources to these components, and configuring event-driven behaviors. This design phase captures the form's layout and desired functionality.

- **JSON Representation**: Instead of generating conventional HTML code, **Qodly Studio** encapsulates the entire Page, including layout, data connections, and event-driven logic, in a structured JSON file. This JSON file serves as the representation of the Page.

- **Rendering Trigger**: Accessing the Page directly in a web browser is not an option. Instead, the Page is "**rendered**" when users initiate the rendering process, which can be done in one of two ways:

    - **Preview in Qodly Studio**: Users have the option to [preview the Page within Qodly Studio interface](#preview-in-qodly-studio).

    - **Dedicated Browser Tab**: Alternatively, users can opt to [render the Page in a separate browser tab](#preview-in-a-browser-window).



When a Page is rendered for the end user, what is returned is the final HTML code and CSS that represent the Page's visual appearance and functionality.


:::info
The Page is transformed into an HTML/CSS representation that can be displayed and interacted with in a web browser. JSON is used internally for data representation and configuration but is not what the end user receives when viewing the Page.
:::

## Runtime Rendering

At **runtime**, Pages are generated and interpreted by the built-in renderer engine. This engine takes the JSON representation and transforms it into a functional, interactive form that end-users can engage with.


## Unique Page URLs

Crucially, each Page is assigned a **unique URL** on the Qodly Web server. These URLs serve as access points for end-users to interact with and render the Pages they require.


## Data Flow and Server Architecture

The flow of data within Qodly Studio ecosystem is carefully orchestrated, ensuring a seamless rendering experience:

<img src={require('./img/workflow.png').default} style={{borderRadius: '6px'}} />

- Qodly Studio operates with an embedded Studio web server, providing secure web access. Users can conveniently preview Pages within the protected confines of Qodly Studio.

- Additionally, the Qodly web server functions as a REST server, facilitating communication between the rendering engine and the web server through REST requests.

- After deployment, Pages become readily accessible to end-users, who can render and interact with them directly in their web browsers.


## Page Rendering Options

Rendering a Page in Qodly Studio provides versatile control and accessibility. You can preview it in Qodly Studio or a separate browser window, but It's important to note that:

:::info
Database resource access control depends on the chosen rendering method.
:::


### Preview in Qodly Studio

<Column.List align="center" justifyContent="between">
    <Column.Item width="75%">
        This option enables you to render the current page directly within the Page Editor window. Here, the Page is rendered by Qodly Studio's embedded web server. <br/><br/>
        This approach provides a comprehensive view of data classes, functions, and attributes, even if they are not exposed as REST resources.
    </Column.Item>
    <Column.Item width="20%">
        <img src={require('./img/preview-ide.png').default} style={{borderRadius: '6px', height: '70%', width: '70%'}} />
    </Column.Item>
</Column.List>

<br/>

Please keep in mind that:

:::info
This preview is conducted with **Administrative** privileges, utilizing the **Admin** account you registered with. To conduct a preview based on a specific user's perspective, explore the options for **Previewing in a new tab** or **Previewing the entire site**.
:::


### Preview in a Browser Window

You have the flexibility to render the current Page or the entire website in a browser window. In both scenarios, the Page is rendered by the Qodly web renderer engine. This engine diligently applies **REST resource restrictions and permission actions** defined in your Qodly project, ensuring that only exposed resources are rendered in the browser.

It's worth noting that:

:::info
This preview operates under the logged-in user's privileges. During your initial preview or when your session expires, your browser will prompt you to log in with a Qodly user account, utilizing this account's privileges for rendering your application.
:::


#### Preview Page in a New Tab

<Column.List align="center" justifyContent="between">
    <Column.Item width="75%">
        This option allows you to display the current Page in a browser window tab, offering a convenient way to assess its appearance and functionality.
    </Column.Item>
    <Column.Item width="20%">
        <img src={require('./img/preview-tab.png').default} style={{borderRadius: '6px', height: '70%', width: '70%'}} />
    </Column.Item>
</Column.List>


#### Preview the Entire Site

<Column.List align="center" justifyContent="between">
    <Column.Item width="75%">
        The <code>Preview</code> button on the Qodly toolbar presents the start page, as <a href="settings#application">defined in the Settings</a> within a browser window tab. This option provides a holistic view of the application's initial landing page.
    </Column.Item>
    <Column.Item width="20%">
        <img src={require('./img/preview-main.png').default} style={{borderRadius: '6px', height: '70%', width: '70%'}} />
    </Column.Item>
</Column.List>

:::info

When the **Preview** button is clicked and unsaved changes are present in open Pages, a popup is displayed to ensure users are aware of their unsaved work. This popup prevents the application from rendering until the unsaved changes are addressed.

<img src={require('./img/preview-pop.png').default} style={{borderRadius: '6px', width: '50%'}} />

Users can choose to save all changes in open Pages before rendering, without seeing this popup again, by checking the "Memorize..." checkbox at the popup's bottom. Alternatively, this alert can be controlled through the ["**Show Unsaved Files Pop Over**" setting](settings.md#show-unsaved-files-pop-over) in user preferences.

:::


## Page/Renderer Lifecycle

Understanding the lifecycle of a page is crucial for diagnosing and fixing rendering issues. Here’s a detailed breakdown:

1. **Initialization**:

    - **Fetching Data**: The lifecycle begins with fetching essential user-specific data, such as user privileges and catalog information, to determine the content and features accessible to the user.

    - **Fetching Assets**: Necessary assets are also retrieved, including `shared_css.json`, `shared_datasources.json`, `saved_conditions.json`, and `CustomComponents/manifest.json`. These files provide shared CSS styles, shared Qodly sources, predefined conditions, and details about custom components.


2. **Loading**:

    - **Fetching Custom Components JavaScript Files**: In this phase, the system retrieve JavaScript files for custom components used within the page, ensuring custom behaviors and interactive elements are ready to be initialized.

    - **Loading the Main Page**: Once all necessary assets and custom component files are fetched, the main structure of the page is loaded. This involves initializing the primary layout and placeholders for content and interactive elements, preparing the page to be populated with data and components.


3. **Rendering**:

    - **Initializing Shared Qodly Sources**: During rendering, shared Qodly sources are initialized. These sources provide data that multiple parts of the page can access and use.

    :::info
    Since Qodly treats each page load or tab navigation as a new rendering cycle, these shared sources are reinitialized every time the page renders. This ensures that the page always reflects the most up-to-date data. However, this also means that Shared Qodly Sources are reset during each re-render **unless navigation is done through a page loader**. When [**Binding Navigation Actions to Events**](./pageLoaders/events/bindingActionToEvents.md#binding-navigation-actions-to-events) and using a **Page Loader** or **Page Loader (Self)**, the Shared Qodly Source persist across navigations. The [Page Loader](./pageLoaders/pageLoaderOverview) manages state in a way that prevents full reinitialization, maintaining the Shared Qodly Sources and ensuring continuity across navigations without resetting the data.
    :::

    - **Initializing Local Qodly Sources**: Following the initialization of shared Qodly sources, local Qodly sources specific to individual components are set up, ensuring each component has access to the data it needs.

    - **Executing `onInit` Event**: The `onInit` event is executed for the component at this point. This event is used to perform any necessary setup actions when the component is first created. Actions may include fetching initial data, setting default values, or any other initialization tasks required to prepare the component for use.

    - **Initial Rendering**: The page renders its initial state, which often defaults to the Base state.


4. **Post-Render Updates**:

    - **Initializing States Conditions**: This phase involves evaluating conditions to track state changes. By setting up conditional states, the page can dynamically react to changes in data and user interactions. This ensures that the page remains interactive and responsive by updating its state and re-rendering as needed.

5. **Interaction**:

    - **Displaying the Page**: Finally, the page is rendered and displayed to the user, combining all fetched data, initialized components, and evaluated conditions to produce the final interactive page.

    - **Executing `onLoaded` Event**: After the page has fully loaded, the `onLoaded` event is triggered. This event can be used to perform any final setup actions, such as starting animations, or fetching additional data. The `onLoaded` event ensures that the page is fully prepared for user interaction and any additional tasks are completed.

    - **Loading JSON of Sub Pages**: In some cases, additional sub pages need to be loaded dynamically based on user interactions or specific conditions. This involves fetching and loading JSON files for sub pages, allowing for the dynamic expansion of content.

    - **Restarting Initialization for Sub Pages**: Once the JSON of sub pages is loaded, the initialization process restarts from **initializing local Qodly sources** for these sub pages. This ensures that each sub page has access to the necessary data and components, repeating the initialization steps to prepare the sub page for display.