---
id: WebFormClass
title: WebForm
---


The `4D.WebForm` class object provides an interface that allows you to handle your webform components. `4D.WebForm` objects are instantiated with the [`webForm`](#webform) command.



### Commands

||
|---|
|[<!-- INCLUDE #_command_.webEvent.Syntax -->](#webevent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.webEvent.Summary -->|
|[<!-- INCLUDE #_command_.webForm.Syntax -->](#webform)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.webForm.Summary -->|



### Functions and properties

||
|---|
|[<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.componentName.Summary -->|
|[<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setError().Summary -->|
|[<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setMessage().Summary -->|
|[<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setWarning().Summary -->|



## webEvent

<!-- REF #_command_.webEvent.Syntax -->**webEvent** : object<!-- END REF -->

<!-- REF #_command_.webEvent.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|object|<-| object
<!-- END REF -->

#### Description

`webEvent` <!-- REF #_command_.webEvent.Summary -->returns an object with information on a triggered event linked to a webform component<!-- END REF -->.

The command must be called in the context of a web form handled by the Qodly web server.

**Result**

The returned object contains the following properties:

| Property | Type | Description |
|----|----|----|
| caller | string | Server-side reference of the component triggering the event |
| eventType | string | Event type: onclick, onchange, onmouseover...(see below) |
| data	| object| For Tabs component: contains an index property (Number) with the index of the clicked Tab (indexing starts at 0) |

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

This is done by attaching an `onmouseover` event to an **Input string** component that displays the information:

![alt-text](img/web-event-1.png)

In the above image: 

* The string Input component has `orderNumber` as server reference
* The component has an `onmouseover` event attached to it
* The exposed function `help` attached to the `onmouseover` event contains the following code: 

```qs
var event : object
var myForm : 4D.WebForm

myForm=webForm
event=webEvent
componentRef=event.caller

if (event.eventType=="onmouseover")  // event is onmouseover 
	myForm["helpOn_"+componentRef].show()  // show the help on "orderNumber" by showing  
	// the text component with reference "helpOn_orderNumber" 
else 
	myForm["helpOn_"+componentRef].hide()  // hide the help on orderNumber
end 
```


## webForm

<!-- REF #_command_.webForm.Syntax -->**webForm** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.webForm.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.WebForm|<-|New `WebForm` proxy object
<!-- END REF -->

#### Description

The `webForm` command <!-- REF #_command_.webForm.Summary --> returns a `4D.WebForm` proxy object, providing a means to work with and effectively emulates the web form's properties and functions<!-- END REF -->.


:::info

Keep in mind that a `4D.WebForm`object  is a **proxy object**, and not a direct reference to the web form object itself. As a result for example, the `4D.WebForm` object does not expose all web form properties in the Debugger. 

:::

Each property of the returned object is an object of the [4D.WebFormItem](WebFormItemClass.md) class.

The command returns `null` if it is called in a request that does not originate from Qodly Studio.





### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](#webformitem-class)<!-- END REF -->

#### Description

The components of webforms are <!-- REF #WebFormClass.componentName.Summary -->objects that are available directly as properties<!-- END REF --> of these webforms.

The returned objects are of the [`4D.WebFormItem`](#webformitem-class) class. These objects have functions that you can use to manage your components dynamically.


#### Example

```qs
var myForm: 4D.WebForm
var component: 4D.WebFormItem

myForm=webForm //returns the web form as an object, each property is a component
component=myForm.myImage //returns the myImage component of the web form

```

:::info

While `myForm` may not display typical object properties when examined in the debugger, it behaves as if it were the actual `webForm` object. You can interact with the underlying `webForm` object's properties and functions through `myForm`. For example, you can dynamically manipulate web form components or transmit messages to web pages using specialized functions like `myForm.setMessage()`.

:::

### .setError()

<!-- REF #WebFormClass.setError().Syntax -->
**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Error message to display in the web form|
<!-- END REF -->

#### Description

The `.setError()` function  <!-- REF #WebFormClass.setError().Summary -->sends *msg* as an error message to the web form<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "error".


 
#### Example

```qs 
exposed Function myError()

webForm.setError("My error message")

```

If the [**Provide feedback**](../studio/design-webforms/events.md#provide-feedback) feature is enabled for the event, the *message* is automatically displayed as a red *toast* at the bottom of the web form and disappears automatically after 5 seconds:

![](img/message-error.png)


#### See also

[`throw`](debug.md#throw)


### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->
**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Information message to display in the web form|
<!-- END REF -->

#### Description

The `.setMessage()` function  <!-- REF #WebFormClass.setMessage().Summary -->sends *msg* as an information message to the web form<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "message".


 
#### Example

```qs 
exposed Function myMessage()

webForm.setMessage("My information message")

```

If the [**Provide feedback**](../studio/design-webforms/events.md#provide-feedback) feature is enabled for the event, the *message* is automatically displayed as a green *toast* at the bottom of the web form and disappears automatically after 5 seconds:

![](img/message-info.png)


### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->
**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Warning message to display in the web form|
<!-- END REF -->

#### Description

The `.setWarning()` function  <!-- REF #WebFormClass.setWarning().Summary -->sends *msg* as a warning message to the web form<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "warning".


 
#### Example

```qs 
exposed Function myWarning()

webForm.setWarning("My warning message")

```

If the [**Provide feedback**](../studio/design-webforms/events.md#provide-feedback) feature is enabled for the event, the *message* is automatically displayed as a green *toast* at the bottom of the web form and disappears automatically after 5 seconds:

![](img/message-warning.png)
