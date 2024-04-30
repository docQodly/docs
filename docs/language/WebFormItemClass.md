---
id: WebFormItemClass
title: WebFormItem
---


The `4D.WebFormItem` class allows you to handle the behavior of your webform components.

`4D.WebFormItem` objects are properties of the [`4D.WebForm`](WebFormClass.md) object returned by the [`webForm`](WebFormClass.md#webform) command. 

When you call the [`webForm`](WebFormClass.md#webform) command, the returned `4D.WebForm` proxy object holds as many `4D.WebFormItems` as there are components with [**server-side references**](../studio/design-webforms/create-webform.md#data-access-category) in your webform.

For example, `WebFormObject.myImage` refers to the image component with `myImage` as server reference.




### Functions and properties

||
|---|
|[<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->|
|[<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.hide().Summary -->|
|[<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removeclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary -->|
|[<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.show().Summary -->|



### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->
**.addCSSClass**(*className* : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|className|string|->|Name of the CSS class to add to the component|
<!-- END REF -->

#### Description

The **.addCSSClass** function <!-- REF #WebFormItemClass.addCSSClass().Summary -->adds the class specified in *className* to the component<!-- END REF -->.



### .removeCSSClass()


<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->
**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|className|string|->|Name of the CSS class to remove from the component|
<!-- END REF -->

#### Description

The `.removeCSSClass()` function <!-- REF #WebFormItemClass.removeCSSClass().Summary -->removes the class specified in *className* from the component<!-- END REF -->.



### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->
**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.hide()` function <!-- REF #WebFormItemClass.hide().Summary -->hides the component<!-- END REF -->.

#### Example

To call a function that hides an image when the user clicks a button: 

1. Select the image component on the canvas, and enter a server-side reference in the Properties Panel > Server Side, for example "myImage".
2. Create an exposed function named `isHidden` that contains the following code:

```qs 
exposed function isHidden()

var myComponent : 4D.WebFormItem

myComponent = webForm.myImage
myComponent.hide() // Hide the component that has "myImage" as server reference 
```

3. Select the Button component and add an `onclick` event to it.
4. Attach the `isHidden` function to the event.


### .show()

<!-- REF #WebFormItemClass.show().Syntax -->
**.show**()<!-- END REF -->


<!-- REF #WebFormItemClass.show().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.show()` function <!-- REF #WebFormItemClass.show().Summary -->makes the component visible<!-- END REF -->. If the component was already visible, the function does nothing.




