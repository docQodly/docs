---
id: structure
title: Project Structure
---

## Overview

The project structure is organized to facilitate the development and maintenance of Qodly custom components. Below is an outline of the main directories and files in a typical project:

- **node_modules**: Contains project dependencies installed via npm.
- **public**: Contains static assets like images, fonts, or any files that should be publicly accessible.
- **src**: The main source code directory.
  - [**components**](#custom-component-repository): The directory for custom components.
    - **ExampleComponent**: An example custom component directory.
      - [**ExampleComponent.build.tsx**](#examplecomponentbuildtsx-file): Component build logic.
      - [**ExampleComponent.render.tsx**](#examplecomponentrendertsx-file): Component rendering logic.
      - [**ExampleComponent.settings.tsx**](#examplecomponentsettingstsx-file): Component settings.
      - [**ExampleComponent.config.tsx**](#examplecomponentbuildconfig-file): Configuration for the component.
      - [**index.tsx**](#indextsx): Entry point for the component.
    - [**index.tsx**](#indextsx-file-in-components-repository): The entry point for the components directory.
  - [**App.tsx**](#apptsx-file): Main application component.
  - **index.css**: Global CSS styles.
  - [**main.tsx**](#maintsx-file): Entry point for the application.
  - **vite-env.d.ts**: TypeScript declaration file for Vite.
- **.eslintrc.cjs**: ESLint configuration file.
- **.gitignore**: Specifies intentionally untracked files that Git should ignore.
- **.prettierignore**: Specifies files and directories to ignore for formatting using Prettier.
- **.prettierrc**: Configuration file for Prettier.
- [**index.html**](#indexhtml-file): Main HTML file for the application.
- **package-lock.json**: Lock file for npm dependencies.
- **package.json**: Project metadata and npm dependencies.
- [**proxy.config.ts**](#proxyconfigts-file): Configuration for the development server proxy.
- **README.md**: Project documentation.
- **tsconfig.json**: TypeScript configuration file.
- **tsconfig.node.json**: TypeScript configuration file for Node.js.
- [**vite.config.ts**](#viteconfigts-file): Vite configuration file.


<!-- #####################################################
##################### vite.config.ts ##########################
##########################################################
-->

## vite.config.ts

This file configures Vite for the project, incorporating React support and a custom redirection middleware. It defines the development server settings, including the host, port, and proxy configurations. The use of environment variables allows flexibility, and the redirection middleware enhances the development server's behavior. 

Let's break down the contents of `vite.config.ts`:

1. **Imports**:

    ```typescript
    import { PluginOption, defineConfig } from 'vite';
    import react from '@vitejs/plugin-react-swc';
    import proxy from './proxy.config';
    ```

    The file begins by importing necessary modules. `PluginOption` and `defineConfig` are components from Vite, while `react` is a Vite plugin that adds support for React. Additionally, `proxy` is imported from [`proxy.config.ts`](#proxyconfigts) to set up server proxy configurations.


2. **Environment Variables**:

    ```typescript
    const port = process.env.PORT || 5001;
    const host = process.env.HOST || '0.0.0.0';
    ```

    These lines check for the existence of environment variables `PORT` and `HOST` and assign default values (5001 and '0.0.0.0', respectively) if they are not provided. 

3. **Redirect Middleware**:

    ```typescript
    const redirect = (opts: { from: string; to: string }): PluginOption => {
    return {
        name: 'redirect',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (req.url.startsWith(opts.from)) {
                    res.statusCode = 307;
                    res.setHeader('Location', opts.to);
                    res.setHeader('Content-Length', '0');
                    return res.end();
                }

                return next();
            });
        },
    };
    };
    ```

    This section defines a function named `redirect` that returns a Vite plugin (`PluginOption`). The plugin is designed to configure the development server with a redirection middleware. If a request URL starts with `opts.from`, it responds with a redirect to `opts.to`.

4. **Vite Configuration**:

    ```typescript
    export default defineConfig({
    plugins: [
        react(),
        redirect({
            from: '/studio/',
            to: '/',
        }),
    ],
    define: {
        'process.env': {},
    },
    server: {
        host,
        proxy,
        port: +port,
    },
    });
    ```

    The main Vite configuration is defined using `defineConfig`. Here are the key parts:
    - Plugins:
        - The `react` plugin is included to enable React support.
        - The custom `redirect` plugin is added to handle URL redirections (from `/studio/` to `/`).
    - Define:
        - An empty object is defined under `define`, which allows you to specify global constants accessible in your code.
    - Server:
        - The development server configurations are set, including the `host`, `proxy` settings, and `port`.


<!-- #####################################################
##################### proxy.config.ts ##########################
##########################################################
-->

## proxy.config.ts

This file serves the crucial role of configuring the development server proxy, enabling efficient routing of requests during the development phase. 

:::info
It is an integral part of the project configuration and is imported and utilized within the [`vite.config.ts`](#viteconfigts) file.
:::

Let's break down the contents of `proxy.config.ts`:

1. **Imports**:

    ```typescript
    /* eslint-disable @typescript-eslint/no-explicit-any */
    import { ProxyOptions } from 'vite';
    ```

    The file starts by importing the `ProxyOptions` type from Vite. Additionally, it disables TypeScript explicit any rule (`@typescript-eslint/no-explicit-any`) since it deals with dynamic objects often encountered in proxy configurations.


2. **Constants**:

    ```typescript
    const TARGET = process.env.PROXY_SERVER || 'https://127.0.0.1:7443';
    ```

    The `TARGET` constant is defined to store the target URL for the proxy. It defaults to `https://127.0.0.1:7443` but can be overridden by the `PROXY_SERVER` environment variable.

3. **Function**:

    ```typescript
    function sanitizeSetCookie(cookie = '') {
        return cookie.replace(/; secure/i, '');
    }
    ```

    The `sanitizeSetCookie` function is created to remove the "secure" attribute from cookies. It is used during the proxy response handling.

4. **Proxy Configuration Options**:

    ```typescript
    const proxyOpts = {
        target: TARGET,
        secure: false,
        ws: true,
        onProxyReq(proxyReq: any, req: any) {
            // Request handling logic...
        },
        onProxyRes(proxyRes: any) {
            // Response handling logic...
        },
    };
    ```

    The `proxyOpts` object contains various configuration options for the development server proxy:

    - target: The target URL to which requests will be proxied.

    - secure: Boolean indicating whether the target server uses HTTPS.
    
    - ws: Boolean indicating whether to proxy WebSocket connections.

    Two functions (`onProxyReq` and `onProxyRes` explained in points 4 & 5 below) are provided as options for handling request and response events during proxying.

5. **Request Handling Logic**:

    ```typescript
    onProxyReq(proxyReq: any, req: any) {
        let body = '';

        req.setEncoding('utf-8');
        req.on('data', (data: string) => (body += data));
        req.on('end', () => {
            req.body = body;
        });

        proxyReq.setHeader('Host', new URL(TARGET).host);
        proxyReq.setHeader('Origin', TARGET);
        proxyReq.setHeader('Referer', TARGET);
    },
    ```

    This code defines the logic executed when handling a request during the proxying process. Let's break it down step by step:

    - `onProxyReq` is an event triggered when a request is being sent to the target server through the proxy. It takes as parameters:

        - `proxyReq` is the HTTP request object being sent to the target server.

        - `req` is the original HTTP request object received from the client.

    -  The code reads the data from the original request (`req`) and assembles it into the `body`. It sets the encoding to `utf-8` for proper character handling and attaches the assembled `body` to `req.body`.

    - Additional headers are set on the `proxyReq` object to ensure the target server correctly interprets the request. Specifically, it sets the 'Host', 'Origin', and 'Referer' headers based on the target URL.

6. **Response Handling Logic**:

    ```typescript
    onProxyRes(proxyRes: any) {
        if (proxyRes.headers['Set-Cookie']) {
            if (Array.isArray(proxyRes.headers['Set-Cookie'])) {
                proxyRes.headers['Set-Cookie'] = proxyRes.headers['Set-Cookie'].map(sanitizeSetCookie);
            } else {
                proxyRes.headers['Set-Cookie'] = sanitizeSetCookie(proxyRes.headers['Set-Cookie']);
            }
        }
    },
    ```

    This code defines the logic executed when handling a response during the proxying process:

    - `onProxyRes` is an event triggered when a response is received from the target server through the proxy. It takes `proxyRes` as a parameter, which is the HTTP response object received from the target server.

    - The code checks if the response headers contain 'Set-Cookie'. If it is present:

        - It checks if 'Set-Cookie' is an array. If it is, it applies the `sanitizeSetCookie` function to each element using `map`.

        - If 'Set-Cookie' is not an array, it applies the `sanitizeSetCookie` function directly.

    - The `sanitizeSetCookie` function is responsible for removing the 'secure' flag from the 'Set-Cookie' header, ensuring it is compatible with non-secure connections.

    :::info
    This logic ensures that the 'Set-Cookie' header in the response is appropriately processed and modified before being sent back to the client, addressing security considerations related to cookie handling.
    :::

7. **Proxy Configuration Object**:

    ```typescript
    const proxy: Record<string, string | ProxyOptions> = [
        '/rest',
        '/$lib',
        '/api',
        '/login.html',
        '/css',
        '/img',
        '/js',
        '/LSP',
        '/remoteDebugger',
        '/dataexplorer',
        '/$shared',
    ].reduce(
        (prev, cur) => ({
            ...prev,
            [cur]: proxyOpts,
        }),
        {
            '/rest/$upload': {
            target: TARGET,
            secure: false,
            },
        },
    );
    ```

    A proxy configuration object is created by applying `proxyOpts` to specified paths. It utilizes the `reduce` function to accumulate the proxy configurations for various paths.

8. **Export**:

    ```typescript
    export default proxy;
    ```

    The `proxy` object, containing the proxy configurations, is exported as the default export of the `proxy.config.ts` file.



<!-- #####################################################
##################### index.html ##########################
##########################################################
-->

## index.html

This file serves as the main HTML file for the application, defining the structure and essential elements necessary for the web page. It acts as the entry point for the application when loaded in a web browser.

```html
<!doctype html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://use.fontawesome.com/107607b491.js"></script>
        <script src="/$lib/dist/bundle.min.js"></script>
        <title>qodly-example</title>
    </head>

    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
    </body>

</html>
```

Within the body section, the following key components are present:

- **Root Div**: A div element with the ID `root` is defined. This div typically serves as the mounting point for React components.

- **Script for Application Entry**: The main TypeScript module for the application ([`main.tsx`](#maintsx)), serving as the entry point to initialize and execute the core logic of the application.




<!-- #####################################################
##################### main.tsx ##########################
##########################################################
-->

## main.tsx

This file functions as the entry point for the application, initializing the React app by rendering the main application component. Let's break down the contents of `main.tsx`:

1. **React Imports**:

   ```typescript
   import React from 'react';
   import ReactDOM from 'react-dom';
   ```

   These imports bring in the necessary `React` and `ReactDOM` libraries for building and rendering React components.

2. **Styling Import**:

   ```typescript
   import './index.css';
   ```

   This line imports the styles from `index.css`, providing styling for the components in the application.

3. **Application Component Import**:

   ```typescript
   import App from './App.tsx';
   ```

   The main application component, `App`, is imported from the [`App.tsx`](#apptsx) file. This component serves as the root component for the entire application.

4. **Rendering the App**:

   ```typescript
   ReactDOM.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
     document.getElementById('root')!,
   );
   ```

   The `ReactDOM.render` function is called to render the `App` component. The entire application is enclosed in `React.StrictMode`, which performs additional runtime checks for potential issues. The rendered content is then injected into the HTML element with the ID `root`. This `root` element is the div specified in the [`index.html`](#indexhtml) file, where the React components will be mounted.



<!-- #####################################################
##################### App.tsx ##########################
##########################################################
-->

## App.tsx

This file serves as the core application component, employing the `WebformEditorStandalone` component and integrating custom components from the `components` directory. This underscores that the core functionality and user interface of the application reside within the `WebformEditorStandalone`.


Let's break down the contents of `App.tsx`:

1. **Imports**:

    ```typescript
    import { WebformEditorStandalone } from '@ws-ui/webform-editor-standalone';
    import components from './components';
    ```

    - The `WebformEditorStandalone` component is imported from the `@ws-ui/webform-editor-standalone` library, serving as a specialized editor for web forms.

    - The `components` import from the `./components` directory indicates the presence of custom components defined within that directory.

2. **App Function Component**:

   ```typescript
   function App() {
     return <WebformEditorStandalone userComponents={components} />;
   }
   ```

    The `App` function component is defined, returning the `WebformEditorStandalone` component. This component is responsible for rendering and managing the web form editor, with `userComponents` as a prop set to the imported `components`.

3. **Export Default**:

   ```typescript
   export default App;
   ```

   The `App` function component is the default export from the file, enabling other project files to effortlessly import and utilize it. In particular, it is used as the root component in [main.tsx](#maintsx).


<!-- #####################################################
##################### index.tsx ##########################
##########################################################
-->

## index.tsx - Component Index Entry

The `index.tsx` file in the `components` repository serves as the entry point for custom components, providing a centralized location for exporting and organizing multiple components. Let's delve into the details of this file:

1. **Imports**:

    ```typescript
    // imports
    import ExampleComponent from './ExampleComponent';
    ```

    The file begins with import statements, bringing in various components defined within the same directory. In this example, it specifically imports the `ExampleComponent` component.

2. **Export Default Object**:

    ```typescript
    export default {
      // components
      ExampleComponent,
    };
    ```

    The file exports a default object, functioning as a container for various components. This design facilitates easy access to components when the file is imported in the [App.tsx](#apptsx) file.


<!-- ########################################################################################################
##################################### Custom Component repository ###########################################
#############################################################################################################
-->

## Custom Component repository


<!-- #####################################################
##################### index.tsx ##########################
##########################################################
-->

### index.tsx

The `index.tsx` file serves as the epicenter of the `ExampleComponent` custom component, orchestrating its structure, behavior, and properties within the project. It dynamically renders either the `Build` or `Render` component based on the state of the enhanced editor, and it includes additional properties for crafting, information, and default props.


1. **Imports**:

   ```typescript
   import config, { IExampleComponentProps } from './ExampleComponent.config';
   import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
   import Build from './ExampleComponent.build';
   import Render from './ExampleComponent.render';
   ```

   - `config`: Imports the configuration ([`ExampleComponent.config`](#examplecomponentconfigtsx)) and the props type (`IExampleComponentProps`) for the `ExampleComponent`.

   - `T4DComponent`: Imports a custom component type for the Webform Editor.

   - `useEnhancedEditor`: Imports a hook from `@ws-ui/webform-editor` for handling enhanced editor features.

   - `Build` and `Render`: Import components responsible for building and rendering the `ExampleComponent`.

2. **Component Declaration**:

   ```typescript
   const ExampleComponent: T4DComponent<IExampleComponentProps> = (props) => {
   ```

   - Declares a constant variable `ExampleComponent` of type `T4DComponent<IExampleComponentProps>`, indicating that it is a custom component for the Webform Editor.

   - The component is a functional component that receives `props` of type `IExampleComponentProps`.

3. **Enhanced Editor State Check**:

   ```typescript
   const { enabled } = useEnhancedEditor((state) => ({
     enabled: state.options.enabled,
   }));
   ```

   - Utilizes the `useEnhancedEditor` hook to access the enhanced editor state.

   - The `state` object is destructured to obtain the `enabled` property, which represents whether the enhanced editor is enabled or not.

4. **Conditional Rendering**:

   ```typescript
   return enabled ? <Build {...props} /> : <Render {...props} />;
   ```

   Conditionally renders either the `Build` or `Render` component based on the value of `enabled`:

   - If `enabled` is `true`, it renders the `Build` component, passing the `props` to it using the spread operator (`{...props}`).

   - If `enabled` is `false`, it renders the `Render` component similarly.

5. **Component Properties**:

   ```typescript
   ExampleComponent.craft = config.craft;
   ExampleComponent.info = config.info;
   ExampleComponent.defaultProps = config.defaultProps;
   ```
  Sets additional properties on the `ExampleComponent`. These properties are defined in the [`ExampleComponent.config.tsx`](#examplecomponentconfigtsx) file:

   - `craft`: Specifies the crafting configuration for the component.

   - `info`: Provides information about the component.

   - `defaultProps`: Sets default properties for the component.

5. **Export Statement**:

   ```typescript
   export default ExampleComponent;
   ```

   Exports the `ExampleComponent` as the default export from the file, making it accessible for use in other parts of the project.



<!-- #####################################################
############## ExampleComponent.build.tsx ################
##########################################################
-->

### ExampleComponent.build.tsx

The `ExampleComponent.build.tsx` file defines the building logic for rendering the `ExampleComponent` within the context of the enhanced editor, utilizing the `useEnhancedNode` hook and applying provided styles and class names.


1. **Imports**:

   ```typescript
   import { useEnhancedNode } from '@ws-ui/webform-editor';
   import cn from 'classnames';
   import { FC } from 'react';
   
   import { IExampleComponentProps } from './ExampleComponent.config';
   ```

   - `useEnhancedNode`: Imports a hook from `@ws-ui/webform-editor` for handling enhanced node features.

   - `cn`: Imports the `classnames` library, which is used for conditionally applying class names.

   - `FC`: Imports the `FC` (Functional Component) type from React.

   - `IExampleComponentProps`: Imports the props interface specific to `ExampleComponent` from the [configuration file](#examplecomponentconfigtsx).

2. **Component Definition**:

   ```typescript
   const ExampleComponent: FC<IExampleComponentProps> = ({ name, style, className, classNames = [] }) => {
   ```

   - Declares a constant variable `ExampleComponent` as a functional component (`FC`) that takes `IExampleComponentProps` as its props type.

   - Destructures the props into individual variables (`name`, `style`, `className`, `classNames`), providing default values where necessary.

3. **Enhanced Node Connector**:

   ```typescript
   const {
     connectors: { connect },
   } = useEnhancedNode();
   ```

   Uses the `useEnhancedNode` hook to obtain a set of `connectors`, and by destructuring `{ connectors: { connect } }`, it specifically extracts the `connect` connector. This connector is then utilized to establish a connection between the `ExampleComponent` and the enhanced features of the web form editor. It's a way for the component to integrate and interact with the editor's functionality.


4. **Component Rendering**:

   ```typescript
   return (
     <span ref={connect} style={style} className={cn(className, classNames)}>
       Hello {name}!
     </span>
   );
   ```

   - Returns JSX to render the component.

   - The `span` element is connected to the enhanced node using `ref={connect}`, allowing it to leverage enhanced node features.

   - Applies the provided inline styles (`style`) and combines the class names (`className` and `classNames`) using the `classnames` library.
   
   - Displays a simple greeting message (`Hello {name}!`) inside the `span`.

5. **Export Statement**:

   ```typescript
   export default ExampleComponent;
   ```

   Exports the `ExampleComponent` as the default export from the file, making it accessible for use in other parts of the project.



<!-- #####################################################
############ ExampleComponent.config.tsx #################
##########################################################
-->

### ExampleComponent.config.tsx

The `ExampleComponent.config.tsx` file provides essential details for crafting, displaying information, and setting default props for the `ExampleComponent`. It plays a crucial role in defining how the component behaves within the web form editor.

1. **Imports**:

   ```typescript
   import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
   import { Settings } from '@ws-ui/webform-editor';
   import { MdOutlineTextSnippet } from 'react-icons/md';
   import ExampleComponentSettings, { BasicSettings } from './ExampleComponent.settings';
   ```

   - `EComponentKind` and `T4DComponentConfig`: Imports types from `@ws-ui/webform-editor` for defining component kind and configuration.

   - `Settings`: Imports a function from `@ws-ui/webform-editor` for managing component settings.

   - `MdOutlineTextSnippet`: Imports the icon component from `react-icons/md` for displaying an icon associated with the component.

   - `ExampleComponentSettings` and `BasicSettings` from './ExampleComponent.settings' for additional component settings.

2. **Default Export (Configuration Object)**:

   ```typescript
   export default {
     // ... configuration properties ...
   } as T4DComponentConfig<IExampleComponentProps>;
   ```

   Exports a configuration object as the default export. This object conforms to the `T4DComponentConfig` type and specifies the configuration for the `ExampleComponent` with properties related to crafting, information, default props, and more.


3. **Craft Configuration**:

   ```typescript
   craft: {
     displayName: 'ExampleComponent',
     kind: EComponentKind.BASIC,
     props: {
       name: '',
       classNames: [],
       events: [],
     },
     related: {
       settings: Settings(ExampleComponentSettings, BasicSettings),
     },
   },
   ```

   Defines the crafting configuration for the `ExampleComponent`:

     - `displayName`: The display name of the component.

     - `kind`: The kind of component, which is set to `EComponentKind.BASIC`, categorizes the `ExampleComponent` as a `BASIC` type within the web form editor. This classification determines its behavior, capabilities, and how it interacts with the editor, providing a foundation for customization and extensibility.

     - `props`: Default values for component props (`name`, `classNames`, `events`).
          
     - `related`: Establishes a connection to supplementary settings for the `ExampleComponent`. Within the `related` section, the `settings` property employs the `Settings` function to combine `ExampleComponentSettings` (specific settings) and `BasicSettings` (common settings). This facilitates a structured and modular strategy for managing different aspects of the component's behavior and visual presentation within the web form editor.

4. **Info Configuration**:

   ```typescript
   info: {
     displayName: 'ExampleComponent',
     exposed: true,
     icon: MdOutlineTextSnippet,
     events: [
       // ... event configurations ...
     ],
     datasources: {
       accept: ['string'],
     },
   },
   ```

   - Defines information configuration for the `ExampleComponent`:

     - `displayName`: Specifies the display name of the component.

     - `exposed`: Indicates whether the component is exposed or not.

     - `icon`: Specifies the display name of the component.

     - `events`: Defines a list of supported events for the component.

     - `datasources`: Describes the types of data sources accepted by the component.

5. **Default Props Configuration**:

   ```typescript
   defaultProps: {
     name: 'Qodly',
   },
   ```

   Specifies default props for the `ExampleComponent`. In this case, the default value for the `name` prop is set to 'Qodly'.

  :::tip Iterable Components 
    For custom components within iterable structures such as matrices or data tables, incorporating the `iterableChild` property into the `defaultProps` in the configuration file can resolve rendering issues. This property enables proper data binding and rendering in these contexts. Update the component's configuration as follows:

    ```ts
    export default {
      // ... other configurations ...
      defaultProps: {
        name: 'Qodly',
        iterableChild: true
      },
    }
    ```

    This addition ensures that custom components function correctly in iterable environments, addressing common data handling and rendering issues.
  :::

6. **Props Interface**:

   ```typescript
   export interface IExampleComponentProps extends webforms.ComponentProps {
     name?: string;
   }
   ```

   Defines an interface `IExampleComponentProps` that extends `webforms.ComponentProps` and includes an optional `name` prop. This interface represents the props that `ExampleComponent` can receive.



<!-- #####################################################
########### ExampleComponent.render.tsx ##################
##########################################################
-->

### ExampleComponent.render.tsx

The `ExampleComponent.render.tsx` file defines the rendering logic for the `ExampleComponent`, incorporating state management, data source access, and dynamic value updates based on changes in the web form editor.

1. **Imports**:

   ```typescript
   import { useRenderer, useSources } from '@ws-ui/webform-editor';
   import cn from 'classnames';
   import { FC, useEffect, useState } from 'react';
   import { IExampleComponentProps } from './ExampleComponent.config';
   ```

   - `useRenderer` and `useSources`: Hooks provided by `@ws-ui/webform-editor` for interacting with the web form renderer and accessing data sources.

   - `cn`: A utility for conditionally joining class names.

   - `FC`, `useEffect`, `useState`: React utilities for defining functional components, handling side effects, and managing state.

   - `IExampleComponentProps`: Import of the props interface defined in `ExampleComponent.config.tsx`.

2. **Functional Component Definition**:

   ```typescript
   const ExampleComponent: FC<IExampleComponentProps> = ({ name, style, className, classNames = [] }) => {
     // ... component logic ...
   };
   ```

   Defines a functional component named `ExampleComponent` that takes props conforming to the `IExampleComponentProps` interface.

3. **Renderer Connection**:

   ```typescript
   const { connect } = useRenderer();
   ```
   
   Uses the `useRenderer` hook to obtain a `connect` function, which establishes a connection between the component and the web form renderer.


4. **State Management**:

   ```typescript
   const [value, setValue] = useState(() => name);
   ```
   
   Initializes a state variable `value` with an initial value derived from the `name` prop. This state manages the content dynamically displayed by the component.

5. **Data Source Access**:

   ```typescript
   const {
     sources: { datasource: ds },
   } = useSources();
   ```
   
   Uses the `useSources` hook to obtain a data source (`ds`) from the web form editor. This data source allows dynamic updates to the displayed content.

6. **Effect for Data Source Changes**:

   ```typescript
   useEffect(() => {
     // ... effect logic ...
   }, [ds]);
   ```
   
   Utilizes the `useEffect` hook to perform side effects. In this case, it listens for changes in the data source (`ds`). The effect runs when `ds` changes.

7. **Data Source Listener Logic**:

   ```typescript
   const listener = async (/* event */) => {
      const v = await ds.getValue<string>();
      setValue(v || name);
   };
   ```
   
   Defines a listener function that asynchronously retrieves the current value from the data source (`ds`) and updates the component state (`setValue`) accordingly.

8. **Effect Cleanup**:

   ```typescript
   return () => {
     ds.removeListener('changed', listener);
   };
   ```
   
   Provides a cleanup function to remove the listener when the component is unmounted, ensuring efficient resource management.

9. **Render JSX**:

   ```typescript
   return (
     <span ref={connect} style={style} className={cn(className, classNames)}>
       Hello {value}!
     </span>
   );
   ```
   
   Returns JSX to render the component. The `span` element is connected to the web form renderer (`ref={connect}`) and displays the dynamically updated content (`Hello {value}!`).

10. **Export**:

    ```typescript
    export default ExampleComponent;
    ```
   
    Exports the `ExampleComponent` as the default export from the file, making it available for use in other parts of the project.



<!-- #####################################################
######### ExampleComponent.settings.tsx ##################
##########################################################
-->

### ExampleComponent.settings.tsx

The `ExampleComponent.settings.tsx` file defines the configurable properties of the `ExampleComponent`. It plays a crucial role in customizing and managing the settings associated with the component within the web form editor.

1. **Imports**:

   ```typescript
   import { ESetting, TSetting } from '@ws-ui/webform-editor';
   import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';
   ```

   - `ESetting` and `TSetting`: Imported types from `@ws-ui/webform-editor` for defining setting types and configurations.

   - `BASIC_SETTINGS`, `DEFAULT_SETTINGS`, `load`: Imported constants and functions from `@ws-ui/webform-editor` for managing default and basic settings.

2. **Common Settings**:

   ```typescript
   const commonSettings: TSetting[] = [
     {
       key: 'name',
       label: 'Name',
       type: ESetting.TEXT_FIELD,
       defaultValue: 'Qodly',
     },
   ];
   ```

   Defines an array `commonSettings` containing a `TEXT_FIELD` setting for the component's name. It includes properties such as `key`, `label`, `type`, and `defaultValue`.

3. **Component Settings**:

   ```typescript
   const Settings: TSetting[] = [
     {
       key: 'properties',
       label: 'Properties',
       type: ESetting.GROUP,
       components: commonSettings,
     },
     ...DEFAULT_SETTINGS,
   ];
   ```

   Creates an array `Settings` that includes a `GROUP` setting named `Properties`. This group encapsulates the common settings defined earlier (`commonSettings`). Additionally, it spreads `DEFAULT_SETTINGS` to include default settings provided by the `webform-editor` library.

4. **Basic Settings**:

   ```typescript
   export const BasicSettings: TSetting[] = [
     ...commonSettings,
     ...load(BASIC_SETTINGS).filter('style.overflow'),
   ];
   ```

   Exports an array `BasicSettings` that includes the common settings and additional settings loaded from `BASIC_SETTINGS`. It also filters out settings related to `style.overflow`, providing a subset of basic settings specific to the `ExampleComponent`.

5. **Default Export**:

   ```typescript
   export default Settings;
   ```

   Exports the `Settings` array as the default export of the module. This array serves as the complete set of settings for the `ExampleComponent`, encompassing both common and default settings. 