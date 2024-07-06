---
id: dialog
title: Dialog
---

import Column from '@site/src/components/Column'



A Dialog is an interactive, dynamic UI element designed as a popup overlay to streamline user engagement by rendering additional content or forms within the existing page context.


## Dialog Creation 

To initiate a dialog, navigate to the edited Page header panel and select the `Dialogs` button <img src={require('./img/dialogs.png').default} style={{borderRadius: '6px', width: '10%'}} />. 

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        Initially, it will indicate <code>There are no configured Dialogs yet</code>. However, once dialogs are created, they will be listed under this section.
        <br/><br/>
        To create a new dialog, click on the <code>New dialog</code> button within this panel. 
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/noConfiguredDialogs.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        This will trigger a modal where you can assign a name to the dialog.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/dialogCreationModal.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<br/>

After naming and confirming with the <code>create</code> button, the new dialog will appear both in the dialog's list and within the outline view. 

<Column.List align="center" justifyContent="between">
    <Column.Item width="45%">
        <img src={require('./img/dialogsList.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
    <Column.Item width="45%">
        <img src={require('./img/dialogsOutline.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


:::info
At runtime, dialogs are displayed at the center of the page. 
:::


## Dialog Deletion

There are two ways for removing Dialogs:

- <Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        <strong>Dialogs List</strong>: Click on the delete icon <img src={require('./img/dialogDelete2.png').default} style={{borderRadius: '6px', width: '5%'}} /> next to the dialog you intend to delete in the dialogs listt.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/dialogDelete1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


- <Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        <strong>Outline section</strong>: As an alternative method, dialogs can also be removed directly from the outline section..
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/dialogDelete3.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


:::info

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        Regardless of the chosen method, a confirmation step is required in a follow-up modal to finalize the deletion process.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/dialogDelete4.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::


## Dialog Renaming 

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        To change the name of a dialog, select the edit icon <img src={require('./img/dialogRename2.png').default} style={{borderRadius: '6px', width: '5%'}} /> next to the desired dialog in the dialogs list. This action activates the edit mode within the same interface, allowing you to rename the dialog.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/dialogRename1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>


## Dialog Content Editing

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        To edit a dialog, select it from the dialog list in the header panel:
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/dialogEdit1.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        Or, access it via the outline: 
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/dialogEditOutline.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

This will open the dialog within the current Page, providing a dedicated interface for modifying its content.

:::info

<Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        The dialog that is currently being edited in the Page will be highlighted in the dialog list, making it easy to identify which dialog is under modification.
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/dialogEdit2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::


Each dialog includes a style box that enables the integration and customization of various components. Components can be dragged and dropped directly into this style box, allowing for efficient customization of the dialog's appearance.

<img src={require('./img/dialogEdit3.png').default} style={{borderRadius: '6px'}} />


:::tip
To exit the dialog's editing mode, click the close button <img src={require('./img/dialogEdit4.png').default} style={{borderRadius: '6px', width: '2%'}} /> located at the top right corner.
:::


## Properties Customization

Enhance the Dialog component to align with your application's requirements using the following customization options:

- <Column.List align="center" justifyContent="between">
    <Column.Item width="60%">
        <li> <strong>Overlay (Boolean)</strong>: Activates a screen overlay when set to true.</li>
        <li> <strong>Draggable (Boolean)</strong>: Enables user-driven repositioning. Features a customizable move icon <img src={require('./img/dialogDraggable.png').default} style={{borderRadius: '6px', width: '3%'}} />.</li>
        <li> <strong>Closable (Boolean)</strong>: Integrates a close function, operable via the button or by clicking outside the dialog (if overlay is enabled). Features a customizable close icon <img src={require('./img/dialogClosable.png').default} style={{borderRadius: '6px', width: '4%'}} />.</li>
        <li> <strong>Animated</strong>: Implements an opening flicker effect for visual emphasis.</li>
    </Column.Item>
    <Column.Item width="35%">
        <img src={require('./img/dialogProperties.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>



## Server-Side Interaction

Every dialog is uniquely named, which acts as its server-side reference for server-side interactions. This allows you to control the Dialog's behavior, such as [hiding](../../../language/WebFormItemClass.md#hide), [showing](../../../language/WebFormItemClass.md#show), [adding CSS classes](../../../language/WebFormItemClass.md#addcssclass), or [removing CSS classes](../../../language/WebFormItemClass.md#removecssclass) from it.

:::tip
Employing the `.show()` method triggers the `On Open` event, whereas utilizing `.hide()` triggers the `On Close` event.
:::



## Display and Customization

The overlay style of dialogs can be further styled using the shared CSS class `fd-dialog-overlay`, such as:

```qs
self {
	background-color: rgba(137, 43, 226, 50%);
}
```

:::info
This shared CSS class takes precedence and cannot be superseded by any locally defined classes of the same name.
:::


## Showcase

Here's a glimpse of how the **Dialog** component will look and behave in action:

<img src={require('./img/dialog_Preview.gif').default} style={{borderRadius: '6px', height: '90%', width: '90%'}} />


## Triggers and Events

The Dialog component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

| Event     | Description                                                  |
|-----------|--------------------------------------------------------------|
| On Init   | Calls for an action when the dialog initially opens. It is used for the dialog's initialization. |
| On Loaded | Calls for an action once the dialog has completely mounted/loaded, indicating readiness for interaction. |
| On Close  | Calls for an action to be performed just before the dialog is closed. |

:::tip
In scenarios where the `Dialog` includes a `Page Loader`, these events are triggered before the `On Load` actions of the `Page Loader`.
:::
