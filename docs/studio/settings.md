---
id: settings
title: Settings
---

The Settings panel allows you to customize the Qodly Studio interface for the current user and the current application. 

To open the Settings panel, click on the **Settings** button <img src={require('./img/settings-button.png').default} style={{borderRadius: '6px', width: '10%'}} /> from the Explorer or the toolbar:
 
The panel includes two main sections:

- **User Settings**: Interface customizations.
- **Application Settings**: Application configurations.

Navigate by selecting labels in the top left area of the panel:

<img src={require('./img/settings-user.png').default} style={{borderRadius: '6px'}} />


## User Settings

Adjustments for Qodly Studio's user interface.

### Show Renderer Pop Over

Toggle the pop-up for different URL schemes in the [renderer](rendering.md) and Qodly Studio.

### Show Unsaved Files Pop Over

Toggle the warning pop-up for unsaved Page changes when rendering, when you click on the [**Preview** button](rendering.md#preview-the-entire-site).

<img src={require('./img/preview-pop.png').default} style={{borderRadius: '6px', width: '40%'}} />

### Tooltip Behavior

Set [tooltip display on component hover](pageLoaders/components/componentsBasics.md#tooltip) <img src={require('./img/tool-tip.png').default} style={{borderRadius: '6px', width: '10%'}} />. Options include show/hide after a timeout.

- **Show after timeout**: The tooltip appears following a specified delay and remains visible until the mouse is moved.
- **Hide after timeout**: The tooltip shows up instantly and then disappears after the set duration.

### Tooltip timeout (in seconds)

Duration before the tooltip behavior activates, in seconds.

### Enable Helper Tips

Show/hide helper tip icons <img src={require('./img/helper-tip.png').default} style={{borderRadius: '6px', width: '3%'}} /> in the Page Editor.

### Activate Welcome Tour

Turn on/off the [Welcome tour dialogs](../concepts/quickstart.md#step-3-navigate-qodly-studio-and-begin-the-welcome-tour) for Qodly Studio.

### Activate tabs preview mode

Enables or disables the [**Tabs preview mode**](overview.md#preview-mode), which allows you to open and preview your Qodly files (Pages, model, classes, methods, or any other file) in a single tab. As a result, this option can reduce drastically the number of opened tabs in your project.



## Application Settings

Configure settings specific to your web application.

<img src={require('./img/settings-application.png').default} style={{borderRadius: '6px'}} />


### Start Page

Enables selection of a Page to serve as the application’s start page. This chosen Page will automatically render in the following situations:

- When the **Preview** button is clicked in the Page Editor, the Page opens in a new tab.
- When the **Authenticated URL** area in the Qodly Cloud console is clicked, the Page is displayed.

### Default Display Mode

Choose the default mode for displaying components in Pages:

- **Neutral** (default): No extra margins.
- **Airy**: Adds default margins for enhanced design.

The **Airy** mode can also be selected at the Page level.