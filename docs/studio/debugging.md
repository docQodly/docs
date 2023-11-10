---
id: debugging
title: Debugging
---
import Column from '@site/src/components/Column'

Errors are a common occurrence when writing code. It is unusual to write a substantial amount of code without encountering any errors. Fortunately, dealing with and resolving errors is a routine part of the development process.


In the Qodly development environment, you have access to a range of debugging tools to help you tackle different types of errors effectively.


## Starting a debug session

To execute your code line-by-line and evaluate expressions, you must initiate a **debug session** on the server and **attach** it to your browser. Follow these steps:


1. Click the Debug button located in the Studio toolbar. <img alt="explorer" src={require('./img/debug1.png').default} style={{borderRadius: '6px', width: '10%'}} />

2. If the debug session starts successfully, a green bullet will appear on the button label. <img alt="explorer" src={require('./img/debug2.png').default} style={{borderRadius: '6px', width: '10%'}} />

3. Once you begin executing code within the debug session, the bullet will turn orange. <img alt="explorer" src={require('./img/debug3.png').default} style={{borderRadius: '6px', width: '10%'}} />


:::info
<Column.List align="center" justifyContent="between">
    <Column.Item width="75%">
        You can only have one active debug session per instance. If another instance of the application has an active debug session (e.g., started from another browser), the debug button will display a warning message.
    </Column.Item>
    <Column.Item width="20%">
        <img alt="explorer" src={require('./img/debug4.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>
:::

In such cases, you must wait until the other debug session is closed before starting a new one.

:::tip
Verify that the method or function with the breakpoint is saved and not in [draft state](#breakpoint-status) for the breakpoint to take effect during debugging.
:::

## Stopping a debug session

If you wish to stop a debug session, follow these steps:

1. Click the **Debug** button in the Studio toolbar while a debug session is active.

2. A warning dialog box will prompt you to confirm whether you want to detach the debugger, effectively closing the debug session attached to your browser. You will have several options:  

<Column.List align="center" justifyContent="between">
    <Column.Item width="55%">
        <ul>
            <ul>
                <li><strong>Keep in progress</strong>: Qodly will continue evaluating the code until the end of the current method or function, and then the debugger will be detached.</li><br/>
                <li><strong>Stop</strong>: The debugger will be immediately detached.</li><br/>
                <li><strong>Cancel</strong>: The debugger will not be detached.</li><br/>                                        
            </ul>
        </ul>
    </Column.Item>
    <Column.Item width="40%">
        <img alt="explorer" src={require('./img/debug5.png').default} style={{borderRadius: '6px'}} />
    </Column.Item>
</Column.List>



## Breakpoints

Breakpoints allow you to pause code execution at specific points in your code. You can set breakpoints on any line of code where you want the execution to halt. Here's how to create a breakpoint:

1. Click in the left margin of the code editor. This action will display a red bullet. <img alt="explorer" src={require('./img/debug6.png').default} style={{borderRadius: '6px', width: '40%'}} />

2. When you launch the code, a yellow arrow will appear in the left margin to indicate where the execution paused and mark the next line to be executed. <img alt="explorer" src={require('./img/debug7.png').default} style={{borderRadius: '6px', width: '40%'}} />

3. At this point, you can use the debugger panel at the bottom of the window to evaluate and debug your code.
<img alt="explorer" src={require('./img/debug8.png').default} style={{borderRadius: '6px'}} />

:::warning
Should a function appear unexpectedly, even without any breakpoints in your code while the debugger is active, it implies the existence of an error within that specific code section.
:::

### Breakpoint Status

Breakpoints can have different statuses depending on the context, which are represented by their appearance and tip:


|Appearance|Status|Context|
|---|---|---|
| <img alt="explorer" src={require('./img/debug9.png').default} style={{borderRadius: '6px'}}/>|Breakpoint|The breakpoint is validated in the debug session and will pause code execution as expected.| 
|<img alt="explorer" src={require('./img/debug10.png').default} style={{borderRadius: '6px'}}/>|Draft breakpoint|The method or function where the breakpoint is set has not been correctly saved. Please ensure you save your changes first for the breakpoint to be validated and take effect.| 
|<img alt="explorer" src={require('./img/debug11.png').default} style={{borderRadius: '6px'}}/>|Unverified breakpoint|The breakpoint is saved, but no debug session is currently active. It will not pause code execution until a debug session is started.| 


