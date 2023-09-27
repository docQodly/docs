---
id: coding
title: Coding
---
import Column from '@site/src/components/Column'

Qodly is a groundbreaking hybrid **low-code** application development platform that redefines how you build applications. With Qodly, you'll find yourself needing only a minimal amount of code, and sometimes, no code at all. It's as simple as designing your application, and Qodly Studio takes care of generating all the necessary code on your behalf.


While Qodly empowers you with its low-code capabilities, there are situations where coding expertise becomes essential. Within Qodly Studio, you'll harness the power of [events](design-webforms/events.md) in combination with class functions to effectively manage the intricacies of your web application.


## Coding Structures

In **QodlyScript**, you can structure your code using two fundamental constructs: methods and classes.

### Methods

[Methods](../language/basics/lang-methods.md) are isolated blocks of code that serve various functions within your application. They can be invoked from class functions or other methods but cannot be directly accessed from components.


### Classes

[Classes](../language/basics/lang-classes.md) allow you to organize your code around objects. Only class functions can be accessed from components. Qodly offers two main types of classes:

- User Classes: Used for controlling component behavior, such as displaying or hiding components in response to events using the [4D.WebFormItem class functions](../language/WebForm.md#webformitem-class).

- [ORDA Classes](../orda/data-model.md): Employed to configure data models and implement business logic.


## Method and Function Management

When working with methods and classes in Qodly, it's essential to understand how to create, duplicate, rename, and delete them. Here's how you can effectively manage these aspects:

### Creating

To create a new method or class, follow these steps:

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
			<li>In the Explorer, navigate to the appropriate category (Methods or Classes).</li>
			<br/>
			<li>Click the <code>+</code> button on the right side of the title area.</li>
		</ul>
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/coding_Creating.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
			<li>A new entry, labeled as <code>UntitledN</code> appears in the list. You can provide a <a href="../language/basics/lang-identifiers">compliant name</a> and press <strong>Enter</strong> to confirm the modification.</li>
		</ul>
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/coding_namingMethod.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::info
Remember to press Enter to create the method or class function.
:::

### Duplicating

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        When duplicating existing methods or classes, Qodly suggests a naming convention in the <code>itemName_copy_N</code> format.
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/coding_duplicate.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

### Renaming

To rename a method or class, you can either:

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
			<li>Click on the icon at the right side of the item in the Explorer.</li>
			<br/>
			<li>Or, in the tab pop-up menu, select <code>Rename</code>. The tab name becomes editable, and you can give it a <a href="../language/basics/lang-identifiers">compliant name</a>.</li>
		</ul>
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/coding_rename.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

### Deleting

Deleting a method or class is straightforward:

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
			<li>In the Explorer, open the options menu for the item you wish to delete.</li>
			<br/>
			<li>Select <code>Delete</code>.</li>
		</ul>
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/coding_delete.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
			<li>Confirm the deletion in the subsequent warning dialog.</li>
		</ul>
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/coding_delete2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

### Tab Management


<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        To work on a method or class, you can open it in a tab by double-clicking its name in the <strong>Explorer</strong>. Only one instance of a method or class code can be open in the same code editor window. <br/> <br/>
		To close a tab, either click the <code>x</code> button or use the tab's pop-up menu
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/coding_tabManagement.png').default} style={{borderRadius: '6px', width: '70%'}} />
    </Column.Item>
</Column.List>

### Executing Methods

For testing purposes, a method can also be executed from the Explorer <img alt="explorer" src={require('./img/coding_execute.png').default} style={{borderRadius: '6px', width: '20%'}} />. For more details about how to debug your code, please refer to the [Debugger](./debugging.md) section.

## Code Preservation and Synchronization

Ensure the integrity and consistency of your method and class code in Qodly with these preservation and synchronization tools.

### Saving

Your code modifications are automatically saved at regular intervals. However, if you want to ensure immediate saving, you can click `Save all` to save all edited tabs. <img alt="explorer" src={require('./img/coding_save.png').default} style={{borderRadius: '6px', width: '10%'}} />

### Reloading code

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        If you're working on a class function or method, and it gets edited elsewhere, the tab displays <code>(outdated)</code>.  <br/> <br/>
		    To fetch the latest version, right-click the tab and choose <code>Reload</code>. This action initiates an immediate refresh of the code content directly from the server, ensuring that you are always working with the latest code, even if you haven't made any local edits.
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/coding_reload.png').default} style={{borderRadius: '6px', width: '70%'}} />
    </Column.Item>
</Column.List>

### Collaborative Editing Behavior

Methods and class functions in Qodly Studio feature real-time synchronization when multiple users are editing the same class function. These collaborative editing capabilities are accompanied by safeguards to prevent data loss in specific scenarios. Here's how it works:


- **Automatic Synchronization**: Whenever a user edits and saves a method or class function, those changes are instantly synchronized across all open tabs where other users are working on the same class function. This guarantees that every user has access to the most current version of the code.

- **Unsaved Changes and "Outdated" Status**: Consider the scenario where `User A` makes changes to a method or class function but neglects to save them, and then `User B`, who is also working on the same method or class function, makes different changes and saves them. In this scenario, `User A`'s method or class function tab, which contains unsaved changes, will recognize that it now holds outdated content compared to the version saved by `User B`. This recognition is indicated by an `outdated` status.

- **Page Refresh and Data Persistence**: Qodly Studio employs client-side data persistence through the browser's local storage to store and retrieve the state information. When `User A` initiates a page refresh, the following actions are performed:

	- **Checking Local Storage**: Qodly Studio checks the local storage for any saved state data associated with the tab that `User A` was working on.

	- **Retrieving Saved Data**: Upon discovery, Qodly Studio retrieves this stored data, which includes the current content of the method or class function that `User A` was editing.

	- **Assessing the "Outdated" Status**: Additionally, the application assesses the `outdated` status based on an attribute within the tab state flags section. This attribute serves as an indicator of whether the current state is outdated compared to the version stored on the server.

	- These measures ensure that even after a page refresh, `User A` remains fully informed about any changes made by others, such as `User B`, while preserving their own unsaved changes. 

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
          <li><strong>Reload Option</strong>: Within the method/class tab of Qodly Studio, you'll find the <a href="#reloading-code">Reload</a> feature. Upon selecting this option, a confirmation message will promptly appear, indicating that your local changes will be lost. Should <code>User A</code> choose to reload the content will trigger an immediate refresh of the code content directly from the server.</li>
        </ul>
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/codingCollaborative_reload.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

<Column.List align="center" justifyContent="between">
    <Column.Item width="65%">
        <ul>
          <li><strong>Save Confirmation</strong>: Should <code>User A</code> choose to save the outdated code in their tab, a confirmation message will appear, alerting them to the presence of new content saved by <code>User B</code>. This serves as a safeguard to prevent unintentional overwriting of more recent changes made by different users.</li>
        </ul>
    </Column.Item>
    <Column.Item width="30%">
		<img alt="explorer" src={require('./img/codingCollaborative_saveAll.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

- **Data Loss Prevention**: If `User A` proceeds to save the outdated code, the changes made in their tab become the current version, potentially overwriting `User B`'s changes.


This collaborative editing behavior aligns with common practices in collaborative environments, offering users flexibility while minimizing the risk of data loss or conflicts during concurrent edits.

## Code Editor

### LSP

Qodly Studio relies on the Language Server Protocol ([LSP technology](https://en.wikipedia.org/wiki/Language_Server_Protocol)) to offer advanced coding features like code completion and syntax highlighting. <img alt="explorer" src={require('./img/lsp.png').default} style={{borderRadius: '6px', width: '15%'}} />

:::info
Reloading is recommended in cases where a connection is not established. Without this connection, while you can still write and save your code, you will miss out on LSP-related features.
:::


### Type-ahead features

The Qodly Studio code editor includes helpful type-ahead and auto-completion features. You can easily incorporate these suggestions into your code using the following methods:

- The suggestion list automatically appears as you start typing.
- To insert the selected suggestion, simply press the `Tab` key.
- At any point, you can manually trigger the suggestion list by pressing `Ctrl + Space bar`.


### Command Palette

The Command Palette offers easy access to all available commands in the code editor, including any associated shortcuts. You can open it by right-clicking in the code editor window or pressing `F1`.

<img alt="explorer" src={require('./img/coding_palette.png').default} style={{borderRadius: '6px'}} />

The palette includes a filtering option to find specific commands quickly.

<img alt="explorer" src={require('./img/coding_palette2.png').default} style={{borderRadius: '6px'}} />

