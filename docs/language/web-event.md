---
id: web-event
title: Web Event
---

<!-- REF #_command_.Web Event.Syntax -->
**Web Form** : Object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-| Object
<!-- END REF -->

#### Description

**Web Event** <!-- REF #_command_.Web Event.Summary --> returns an object with information on a triggered event linked to a webform component.<!-- END REF --> 

The function must be called in the context of a web form handled by the main 4D web server

The returned object contains the following properties:

| Property | Type | Description |
|----|----|----|
| caller | Text | Server-side reference of the component triggering the event |
| eventType | Text | Event type (onclick, onchange, onmouseover...) |
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

The On Load event is triggered when the `WebForm` component loads.

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
var $event : Object
var $webForm : 4D.WebForm

$webForm:=Web Form
$event:=Web Event
$componentRef:=$event.caller

If ($event.eventType="onmouseover")  // event is onmouseover 
$webForm["helpOn_"+$componentRef].show()  // show the help on "orderNumber" by showing the text component with reference "helpOn_orderNumber" 
Else 
$webForm["helpOn_"+$componentRef].hide()  // hide the help on orderNumber
End if 
```