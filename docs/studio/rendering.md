---
id: rendering
title: Rendering a webform
---

A webform describes your application's look and behavior. After or while you design a webform, you can *render* it to see its final result.

## Overview

4D Web Studio does not generate HTML code directly. When you drop components on the canvas, when you map datasources to components, or when you configure an event, 4D Web Studio places your work in a JSON file. This JSON file, the webform, cannot directly be opened in a web browser. It is “rendered” either when you preview it in the webstudio, or when you choose to render it in a dedicated browser tab.

At runtime, webforms are generated and interpreted by a built-in renderer engine.

Each webform has its own URL on the [4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html).

The following diagram describes how data flows to and from the studio:

![workflow-diagram](img/workflow.png)

* The 4D WebAdmin web server provides a secured web access to 4D Web Studio and allows previewing webforms inside the studio.
* The main 4D web server is [exposed as REST server](https://developer.4d.com/docs/en/REST/configuration.html#starting-the-rest-server), and the renderer communicates with it using [REST requests](https://developer.4d.com/docs/en/REST/gettingStarted.html).
* The webforms are deployed with the application, and end-users render them in their browsers. 


## How to render a webform

Webforms can be rendered from the 4D Web Studio IDE, or directly from a browser window. 

### From the 4D Web Studio IDE

To open a browser tab and render a webform, click the **Render** button (![render-button](img/render-button.png)).

A tab will open at `IP:port/$lib/renderer/?w=WebFormName`.

:::note

The button is displayed only when the [configuration options](#configuration) are activated.

:::

### From a browser window

Webforms can be rendered directly from a browser window, by typing the following address:

`IP:port/$lib/renderer/?w=WebFormName`


## Exposed and non-exposed assets

4D Web Studio runs through the [4D WebAdmin web server](https://developer.4d.com/docs/en/Admin/webAdmin.html). When you use 4D Web Studio as a developer, even when you preview a webform in the studio, you’re using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out).

However, webform rendering happens outside 4D Web Studio, and is served by the [standard 4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html). In this situation, your web application cannot access assets that are not exposed as REST resources.

See [Exposed vs non-exposed functions](https://developer.4d.com/docs/en/ORDA/ordaClasses.html#exposed-vs-non-exposed-functions) and [Exposing tables](https://developer.4d.com/docs/en/REST/configuration.html#exposing-tables) for more information on how to expose assets.


