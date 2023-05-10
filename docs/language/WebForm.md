---
id: WebForm
title: WebForm
---


Qodly proposes several commands and functions allowing to handle your webform components. 


### Commands

||
|---|
|[<!-- INCLUDE #_command_.webEvent.Syntax -->](#webevent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.webEvent.Summary -->|
|[<!-- INCLUDE #_command_.webForm.Syntax -->](#webform)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.webForm.Summary -->|



### Functions and properties

||
|---|
|[<!-- INCLUDE WebFormClass.componentName.Syntax -->](#componentname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE WebFormClass.componentName.Summary -->|
|[<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.hide().Summary -->|
|[<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.show().Summary -->|
|[<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->|
|[<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removeclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary -->|



## webEvent

<!-- REF #_command_.webEvent.Syntax -->
**webEvent** : Object<!-- END REF -->

<!-- REF #_command_.webEvent.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-| Object
<!-- END REF -->

#### Description

**webEvent** <!-- REF #_command_.webEvent.Summary -->returns an object with information on a triggered event linked to a webform component<!-- END REF -->.

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

<!-- REF #_command_.webForm.Syntax -->
**webForm** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.webForm.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.WebForm|<-|New `WebForm` object
<!-- END REF -->

#### Description

The `webForm` command <!-- REF #_command_.webForm.Summary --> returns a `4D.WebForm` object that references a webform<!-- END REF -->.

Each property of the returned object is an object of the [4D.WebFormItem](WebFormItemClass.md) class.

The command returns `Null` if it is called in a request that does not originate from Qodly Studio.

<!-- END REF -->


## WebForm Class

The `4D.WebForm` class object provides an interface that allows you to handle your webform components. `4D.WebForm` objects are instantiated with the [webForm](#webform) command.


<!-- REF WebFormClass.componentName.Desc -->

### *.componentName*

<!-- REF WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](#webformitem-class)<!-- END REF -->

#### Description

The components of webforms are <!-- REF WebFormClass.componentName.Summary -->objects that are available directly as properties<!-- END REF --> of these webforms.

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

<!-- REF #WebFormItemClass.hide().Syntax -->
**.hide**()<!-- END REF -->

#### Description

The **.hide**() function <!-- REF #WebFormItemClass.hide().Summary -->hides the component<!-- END REF -->.

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

<!-- REF #WebFormItemClass.show().Syntax -->
**.show**()<!-- END REF -->

#### Description

The **.show()** function <!-- REF #WebFormItemClass.show().Summary -->makes the component visible<!-- END REF -->. If the component was already visible, the function does nothing.


### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->
**.addCSSClass**(*className* : Text)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|className|Text|->|Name of the CSS class to add to the component|
<!-- END REF -->

#### Description

The **.addCSSClass** function <!-- REF #WebFormItemClass.addCSSClass().Summary -->adds the class specified in *className* to the component<!-- END REF -->.


### .removeCSSClass()


<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->
**.removeCSSClass**(*className*: Text)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|className|Text|->|Name of the CSS class to remove from the component|
<!-- END REF -->

#### Description

The **.removeCSSClass()** function <!-- REF #WebFormItemClass.removeCSSClass().Summary -->removes the class specified in *className* from the component<!-- END REF -->.

