---
id: WebForm
title: WebForm
---


Qodly proposes several commands and functions allowing to handle your webform components. 


### Commands

||
|---|
|[**webEvent** : Object](#webevent)&nbsp;&nbsp;&nbsp;&nbsp;returns an object with information on a triggered event linked to a webform component|
|[**webForm** : 4D.WebForm](#webform)&nbsp;&nbsp;&nbsp;&nbsp; returns a `4D.WebForm` object that references a webform|



### Functions and properties

||
|---|
|[***.componentName*** : [4D.WebFormItem](#webformitem-class)](#componentname)&nbsp;&nbsp;&nbsp;&nbsp;objects that are available directly as properties|
|[**.hide**()](#hide)&nbsp;&nbsp;&nbsp;&nbsp;hides the component|
|[**.show**()](#show)&nbsp;&nbsp;&nbsp;&nbsp;makes the component visible|
|[**.addCSSClass**(*className* : Text)](#addclass)&nbsp;&nbsp;&nbsp;&nbsp;adds the class specified in *className* to the component|
|[**.removeCSSClass**(*className*: Text)](#removeclass)&nbsp;&nbsp;&nbsp;&nbsp;removes the class specified in *className* from the component|



## webEvent


**webEvent** : Object


|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-| Object


#### Description

**webEvent** returns an object with information on a triggered event linked to a webform component.

The function must be called in the context of a web form handled by the Qodly web server

**Result**

The returned object contains the following properties:

| Property | Type | Description |
|----|----|----|
| caller | Text | Server-side reference of the component triggering the event |
| eventType | Text | Event type: onclick, onchange, onmouseover...(see below) |
| data	| Object| For Tabs component: contains an index property (Number) with the index of the clicked Tab (indexing starts at 0) |

*eventType* can contain the following events: 

* blur
* focus
* auxclick
* click
* dblclick
* mouseenter
* mouseleave
* mouseover
* keydown
* keyup
* change
* On Load

The "On Load" event is triggered when the `WebForm` component loads.

#### Example

The objective is to display help when the user hovers over the component:

![alt-text](img/web-event-2.png)

This is done by attaching an `onmouseover` event to an **Input Text** component that displays the information:

![alt-text](img/web-event-1.png)

In the above image: 

* The Text Input component has `orderNumber` as server reference
* The component has an `onmouseover` event attached to it
* The exposed function `help` attached to the `onmouseover` event contains the following code: 

```4d
var event : Object
var myForm : 4D.WebForm

myForm=webForm
event=webEvent
componentRef=event.caller

If (event.eventType=="onmouseover")  // event is onmouseover 
	myForm["helpOn_"+componentRef].show()  // show the help on "orderNumber" by showing  
	// the text component with reference "helpOn_orderNumber" 
Else 
	myForm["helpOn_"+componentRef].hide()  // hide the help on orderNumber
End if 
```


## webForm


**webForm** : 4D.WebForm


|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.WebForm|<-|New `WebForm` object


#### Description

The `webForm` command  returns a `4D.WebForm` object that references a webform.

Each property of the returned object is an object of the [4D.WebFormItem](WebFormItemClass.md) class.

The command returns `Null` if it is called in a request that does not originate from Qodly Studio.




## WebForm Class

The `4D.WebForm` class object provides an interface that allows you to handle your webform components. `4D.WebForm` objects are instantiated with the [webForm](#webform) command.




### *.componentName*

***.componentName*** : [4D.WebFormItem](#webformitem-class)

#### Description

The components of webforms are objects that are available directly as properties of these webforms.

The returned objects are of the [`4D.WebFormItem`](WebFormItemClass.md) class. These objects have functions that you can use to manage your components dynamically.


#### Example

```4d
var myForm: 4D.WebForm
var component: 4D.WebFormItem

myForm=webForm //returns the web form as an object, each property is a component
component=myForm.myImage //returns the myImage component of the web form

```


## WebFormItem Class

The `4D.WebFormItem` class allows you to handle the behavior of your webform components.

`4D.WebFormItem` objects are properties of the [`4D.WebForm`](WebFormClass.md) object returned by the [`webForm`](#webform) command. 

When you call the [`webForm`](#webform) command, the returned `4D.WebForm` object holds as many `4D.WebFormItems` as there are components with `[server-side references](XXX)` in your webform.

For example, `WebFormObject.myImage` refers to the image component with `myImage` as server reference.


### .hide()


**.hide**()

#### Description

The **.hide**() function hides the component.

#### Example

To call a function that hides an image when the user clicks a button: 

1. Select the image component on the canvas, and enter a server-side reference in the Properties Panel > Server Side, for example "myImage".
2. Create an exposed function named `isHidden` that contains the following code:

```4d 
exposed Function isHidden()

var myComponent: 4D.WebFormItem

myComponent=Web Form.myImage
myComponent.hide() // Hide the component that has "myImage" as server reference 
```

3. Select the Button component and add an `onclick` event to it.
4. Attach the `isHidden` function to the event.


### .show()


**.show**()

#### Description

The **.show()** function makes the component visible. If the component was already visible, the function does nothing.


### .addCSSClass()


**.addCSSClass**(*className* : Text)


|Parameter|Type||Description|
|---------|--- |:---:|------|
|className|Text|->|Name of the CSS class to add to the component|


#### Description

The **.addCSSClass** function adds the class specified in *className* to the component.


### .removeCSSClass()



**.removeCSSClass**(*className*: Text)


|Parameter|Type||Description|
|---------|--- |:---:|------|
|className|Text|->|Name of the CSS class to remove from the component|


#### Description

The **.removeCSSClass()** function removes the class specified in *className* from the component.

