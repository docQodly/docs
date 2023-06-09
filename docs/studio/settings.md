---
id: settings
title: Settings
---

The Settings panel allows you to customize the Web Studio interface for the current project and the current user. 

To open the Settings panel, click on the **Settings** button from the Explorer or the toolbar:
 
![settings](img/settings-button.png)

The following pages are available:

- **User**: settings related to the user interface
- **Database**: settings related to the web project


## User

This page contains settings related to the Web Studio user interface.

#### Show Renderer Pop Over

Displays or not a pop over when the renderer and the Studio use [different URL schemes](configuration/license-usage.md#url-schemes) (which could lead to wrong licence counting).

#### Tooltip Behavior

Defines how to display the [component tooltip](design-webforms/components.md#tooltip) ![tooltip](img/tool-tip.png) when the mouse hovers a component area.

- **Show after timeout**: The tooltip is displayed after a the defined timeout (and kept onscreen until the user moves the mouse). 
- **Hide after timeout**: The tooltip is immediately displayed and hidden after a the defined timeout.

#### Tooltip timeout (in seconds)

Timeout for selected tooltip behavior.

#### Enable Helper Tips

Shows or hides the tips icons ![helper](img/helper-tip.png) in the webform editor.

## Application

#### Preview Page

Allows to select a webform to use as the home page of your application. 

The home page webform is automatically rendered when:

- you click on the **Preview** button in the webform editor - the webform is rendered in a new tab.
- you click on the **Preview URL** area in the Qodly Cloud dashboard of your application. 

This setting is defined at project level.

#### Default Display Mode

Allows to select the default mode for displaying multiple components in your webforms:

- **Neutral** (default): no specific margins are applied to components
- **Airy**: automatically incorporate default margins between components, for a better design. 

The display mode can also be selected at the webform level.