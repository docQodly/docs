---
id: WebFormItemClass
title: WebFormItem
---

When working in 4D Web Studio, the `WebFormItem` class allows you to handle the behavior of webform components on the server side.

### WebFormItem Objects

`4D.WebFormItem` objects are properties of the `4D.WebForm` object returned by the `Web Form` command. 

When you call the `Web Form` command, the returned `4D.WebForm` object holds as many `4D.WebFormItems` as there are components with [server-side references](../design-webforms/create-webform.md#server-side-reference) in your webform.

For example, `WebFormObject.myImage` refers to the image component with `myImage` as server reference.

`4D.WebFormItem` objects have class functions that allow you to modify the behavior of webforms and their components.

## .hide()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R3|Added|
</details>

<!-- REF #WebFormItemClass.hide().Syntax -->
**.hide()**<!-- END REF -->

#### Description

The **.hide()** function <!-- REF #WebFormItemClass.hide().Summary -->hides the component<!-- END REF -->.

#### Example

To call a function that hides an image when the user clicks a button: 

1. Select the image component on the canvas, and enter a server-side reference in the Properties Panel > Server Side, for example `myImage`.
2. Create an exposed function named `isHidden` that contains the following code:

```4d 
var $myComponent: 4D.WebFormItem

$myComponent:=Web Form.myImage
$myComponent.hide() // Hide the component that has "myImage" as server reference 
```

3. Select the Button component and add an `onclick` event to it.
4. Attach the `isHidden` function to the event.

## .show()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R3|Added|
</details>

<!-- REF #WebFormItemClass.show().Syntax -->
**.show()**<!-- END REF -->

#### Description

The **.show** function <!-- REF #WebFormItemClass.show().Summary -->makes the component visible<!-- END REF -->.

## .addCSSClass()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R3|Added|
</details>

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->
**.addCSSClass**(*className* : Text)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|className|Text|->|Name of the CSS class to add to the component|
<!-- END REF -->

#### Description

The **.addCSSClass** function <!-- REF #WebFormItemClass.addCSSClass().Summary -->adds the class specified in *className* to the component<!-- END REF -->.

## .removeCSSClass()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R3|Added|
</details>

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->
**.removeCSSClass**(*className*: Text)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|className|Text|->|Name of the CSS class to remove from the component|
<!-- END REF -->

#### Description

The **.removeCSSClass()** function <!-- REF #WebFormItemClass.removeCSSClass().Summary -->removes the class specified in *className* from the component<!-- END REF -->.

