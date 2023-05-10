---
id: coding-and-debugging
title: Coding and debugging
---

In 4D Web Studio, you use [events](design-webforms/events/events.md) in conjunction with class functions or project methods to manage the information inside your web application.

## Code Editor

4D Web Studio has an embedded code editor that allows you to edit your class function and methods. The code can still be edited from a 4D Desktop application. 

#### Class function reload

When a class function is open in the studio, and that class function is edited elsewhere, its Tab will display "Outdated", meaning that the code displayed is not the latest version. To obtain the latest version, right click the Tab and then choose **Reload**.

![code-editor](img/code-editor.png)
## Debugging 4D Code
Until the online debugger is available, if you use 4D Web Studio on your local workstation together with 4D, placing a breakpoint in your code makes it possible for you to debug 4D code triggered from a 4D webform.
## ORDA Classes

The flow of data in the studio is handled through data model classes that allow you to manage your business logic. See [ORDA classes](https://developer.4d.com/docs/en/ORDA/ordaClasses.html) for more information.

## 4D classes

Some classes available only in the studio allow you to set the behavior of your components. They are instantiated using 4D commands.

For example, to display or hide a component when an event occurs, you can use the [4D.WebFormItem class functions](API/WebFormItemClass.md).

## Using project methods

We recommend using class functions over methods, but you can still use your project methods as REST functions in the studio.

To be used in 4D Web Studio, project methods must be defined as Datastore, Dataclass, Entity or Entity selection class functions. 

To check if a method is available as REST function: 
1. In the Explorer of your 4D application, **right-click a project method** > **Edit Properties...** to open the Method Properties dialog. 
2. Check that the **REST Server** option is checked.

Selecting **Scope** > **Catalog** designates the project method as a function of the Datastore class. No table (dataclass) is assigned in this case.