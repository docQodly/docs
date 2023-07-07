---
id: coding-and-debugging
title: Coding and debugging
---

In Qodly Studio, you use [events](design-webforms/events/events.md) in conjunction with class functions and project methods to manage the information inside your web application.

## Code Editor

Qodly Studio has an embedded code editor that allows you to edit your class functions and methods.  

### Reload

When a class function or a method is open in the studio, and that class function or method is edited elsewhere, its Tab displays *(outdated)*, meaning that the code displayed is not the latest version. To obtain the latest version, right click the Tab and then choose **Reload**.

![code-editor](img/code-editor.png)

### Type-ahead features

The Qodly Studio code editor includes standard type-ahead features, i.e. accurate contents is suggested in a list while you enter code. 

- The suggestion list appears automatically when you enter text.
- Press the **Tab** key to write down the selected entry from the suggestion list. 
- To display the suggestion list at any moment, press **Ctrl+Space bar**.


### Command Palette

Right-click in the code editor window and select **Command Palette** or press **F1** to display a palette containing all commands availabla in the code editor window, along with their shortcuts (if any). 

![code-editor](img/palette1.png)

The entry area at the top of the palette allows you to filter the list of commands: 

![code-editor](img/palette2.png)


## Methods and Classes

In QodlyScript, you can organize your code in two kinds of structures: **methods** and **classes**.

### Methods

Methods are independant pieces of code. They are not related to an object or a context. 

They can be executed from other methods or functions. They can receive one or more parameter(s) and can return a single parameter. To call a method from your code, just enter its name without namespace:

```qs
//calling the myMethod method with a parameter
//it returns a value, assigned to a variable

var returnValue : String
returnValue=myMethod("Hello world")
```

For testing purposes, methods can also be executed directly from the Explorer :

![code-editor](img/method-exec.png)

### ORDA Classes

The flow of data in the studio is handled through data model classes that allow you to manage your business logic. See [ORDA classes](../concepts/orda/orda-classes.md) for more information.

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