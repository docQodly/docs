---
id: debugging
title: Debugging
---
import Column from '@site/src/components/Column'

Errors are a common occurrence when writing code. It is unusual to write a substantial amount of code without encountering any errors. Fortunately, dealing with and resolving errors is a routine part of the development process.


In the Qodly development environment, you have access to a range of debugging tools to help you tackle different types of errors effectively.


## Starting a debug session

To execute your code line-by-line and evaluate expressions, you must initiate a **debug session** on the server and **attach** it to your browser. Follow these steps:


1. Click the Debug button located in Qodly Studio toolbar. <img src={require('./img/debug1.png').default} style={{borderRadius: '6px', width: '10%'}} />

2. If the debug session starts successfully, a green bullet will appear on the button label. <img src={require('./img/debug2.png').default} style={{borderRadius: '6px', width: '10%'}} />

3. Once you begin executing code within the debug session, the bullet will turn orange. <img src={require('./img/debug3.png').default} style={{borderRadius: '6px', width: '10%'}} />


:::info
<Column.List align="center" justifyContent="between">
    <Column.Item width="75%">
        You can only have one active debug session per instance. If another instance of the application has an active debug session (e.g., started from another browser), the debug button will display a warning message.
    </Column.Item>
    <Column.Item width="20%">
        <img src={require('./img/debug4.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>
:::

In such cases, you must wait until the other debug session is closed before starting a new one.

:::tip
Verify that the method or function with the breakpoint is saved and not in [draft state](#breakpoint-status) for the breakpoint to take effect during debugging.
:::

## Stopping a debug session

If you wish to stop a debug session, follow these steps:

1. Click the **Debug** button in Qodly Studio toolbar while a debug session is active.

2. A warning dialog box will prompt you to confirm whether you want to detach the debugger, effectively closing the debug session attached to your browser. You will have several options:  

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <ul>
            <ul>
                <li><strong>Keep in progress</strong>: Qodly will continue evaluating the code until the end of the current method or function, and then the debugger will be detached.<br/></li>
                <li><strong>Stop</strong>: The debugger will be immediately detached.<br/></li>
                <li><strong>Cancel</strong>: The debugger will not be detached.<br/></li>                                        
            </ul>
        </ul>
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/debug5.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>



## Breakpoints

Breakpoints allow you to pause code execution at specific points in your code. You can set breakpoints on any line of code where you want the execution to halt. Here's how to create a breakpoint:

1. Click in the left margin of the code editor. This action will display a red bullet. <img src={require('./img/debug6.png').default} style={{borderRadius: '6px', width: '20%'}} />

2. When you launch the code, a yellow arrow will appear in the left margin to indicate where the execution paused and mark the next line to be executed. <img src={require('./img/debug7.png').default} style={{borderRadius: '6px', width: '20%'}} />

3. At this point, you can use the debugger panel at the bottom of the window to evaluate and debug your code.
<img src={require('./img/debug8.png').default} style={{borderRadius: '6px'}} />

:::warning
Should a function appear unexpectedly, even without any breakpoints in your code while the debugger is active, it implies the existence of an error within that specific code section.
:::

### Breakpoint Status

Breakpoints can have different statuses depending on the context, which are represented by their appearance and tip:


|Appearance|Status|Context|
|---|---|---|
| <img src={require('./img/debug9.png').default} style={{borderRadius: '6px'}}/>|Breakpoint|The breakpoint is validated in the debug session and will pause code execution as expected.| 
|<img src={require('./img/debug10.png').default} style={{borderRadius: '6px'}}/>|Draft breakpoint|The method or function where the breakpoint is set has not been correctly saved. Please ensure you save your changes first for the breakpoint to be validated and take effect.| 
|<img src={require('./img/debug11.png').default} style={{borderRadius: '6px'}}/>|Unverified breakpoint|The breakpoint is saved, but no debug session is currently active. It will not pause code execution until a debug session is started.| 
|<img src={require('./img/debug12.png').default} style={{borderRadius: '6px'}}/>|Disabled breakpoint|The breakpoint has been manually disabled. It remains visible but will not interrupt code execution until re-enabled.| 


### Breakpoints Management

Managing breakpoints is crucial for a streamlined debugging process. By using a specific button <img src={require('./img/managingBreakpoints1.png').default} style={{borderRadius: '6px', width: '3%'}} /> within the code editor, you can perform various actions to organize your breakpoints:

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <ul>
            <li><strong>Remove Breakpoints in the Current File</strong>: Clears all breakpoints from your active file.<br/></li>
            <li><strong>Remove Breakpoints in Other Files</strong>: Removes all breakpoints from non-active files.<br/></li>
            <li><strong>Remove Breakpoints in All Files</strong>: Eliminates all breakpoints across the entire project.<br/></li>                                        
        </ul>
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/managingBreakpoints2.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

## Managing Breakpoints

### Sidebar Overview

The **Breakpoints Sidebar** provides a centralized interface to monitor and manage all breakpoints across an application. It is designed to give developers full visibility into their active, disabled, or grouped breakpoints—regardless of which file or method they belong to.

You can open the Breakpoints Sidebar from the left-hand panel in the code editor:

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <ol>
            <li>Open Qodly Studio.<br/></li>
            <li>In the code editor, look for the vertical tab on the left side.<br/></li>
            <li>Click the sidebar icon to open the Breakpoints Sidebar<br/></li>                                        
        </ol>
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/managingBreakpoints3.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

:::info
You can interact with all breakpoints even if they’re in different files — no need to open each one manually. The Breakpoints Sidebar saves time and helps you stay focused when debugging large apps.
:::

### Sidebar Structure

The Breakpoints Sidebar displays all breakpoints grouped by file path and method or class name. For each breakpoint, the following information and actions are available:

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <ol>
            <li>Breakpoint label: Indicates the method or class and line number where the breakpoint is defined.<br/></li>
            <li>Status checkbox: Marks whether the breakpoint is currently active or disabled.<br/></li>
            <li>Line number: Shown on the right to indicate the exact position within the code.<br/></li> 
            <li>Action icons: Provide quick access to delete, or navigate to a breakpoint once you hover over a breakpoint.<br/></li>                                        
        </ol>
    </Column.Item>
    <Column.Item width="40%">
        <img src={require('./img/managingBreakpoints4.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>

### Breakpoint Activation

Each breakpoint is associated with an activation checkbox:

- When the checkbox is selected <img src={require('./img/managingBreakpoints5.png').default} style={{borderRadius: '6px', width:'10%'}} />, the breakpoint is active and will interrupt code execution during a debug session.
- When the checkbox is cleared <img src={require('./img/managingBreakpoints6.png').default} style={{borderRadius: '6px', width:'13%'}} />, the breakpoint remains listed but is temporarily disabled.

To manage breakpoints in bulk, a "Disable All" button <img src={require('./img/managingBreakpoints7.png').default} style={{borderRadius: '6px', width:'35%'}} /> is available at the top of the panel, allowing all breakpoints across the app to be disabled simultaneously without deletion.

### Breakpoint Deletion

Breakpoints can be removed individually or in groups:

- The trash icon beside a specific breakpoint <img src={require('./img/managingBreakpoints8.png').default} style={{borderRadius: '6px', width:'35%'}} /> removes only that breakpoint.
- The trash icon beside a method or class header <img src={require('./img/managingBreakpoints9.png').default} style={{borderRadius: '6px', width:'35%'}} /> removes all breakpoints defined within that method or class.

- An overflow menu (⋮) provides additional bulk removal options:
    <Column.List align="center" justifyContent="between">
        <Column.Item width="35%">
            <ul>
                <li>Remove breakpoints in the current file.<br/></li>
                <li>Remove breakpoints in other files.<br/></li>
                <li>Remove all breakpoints across the entire app.</li> 
            </ul>
        </Column.Item>
        <Column.Item width="60%">
            <img src={require('./img/managingBreakpoints10.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

### Breakpoint Navigation

Each breakpoint entry includes an edit icon <img src={require('./img/managingBreakpoints11.png').default} style={{borderRadius: '6px', width:'30%'}} /> that enables direct navigation to the corresponding line in the code editor. This function supports fast inspection or modification of the code surrounding the breakpoint location.


### Collapse/Expand Groups

To improve readability when working with a large number of breakpoints, the sidebar includes a "Collapse All" button <img src={require('./img/managingBreakpoints12.png').default} style={{borderRadius: '6px', width:'30%'}} /> . This feature collapses all method or class sections, minimizing the visual footprint of the list and helping developers focus only on relevant groups.
