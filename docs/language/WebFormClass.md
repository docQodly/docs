---
id: WebFormClass
title: WebForm
---


The `4D.WebForm` class object provides an interface that allows you to handle your Page components. `4D.WebForm` objects are instantiated with the [`webForm`](commands/webForm) command.




### Functions and properties

||
|---|
|[<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.componentName.Summary -->|
|[<!-- INCLUDE #WebFormClass.disableState().Syntax -->](#disablestate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.disableState().Summary -->|
|[<!-- INCLUDE #WebFormClass.enableState().Syntax -->](#enablestate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.enableState().Summary -->|
|[<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setError().Summary -->|
|[<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setMessage().Summary -->|
|[<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setWarning().Summary -->|





### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass)<!-- END REF -->

#### Description

The components of Pages are <!-- REF #WebFormClass.componentName.Summary -->objects that are available directly as properties<!-- END REF --> of these Pages.

The returned objects are of the [`4D.WebFormItem`](WebFormItemClass) class. These objects have functions that you can use to manage your components dynamically.


#### Example

```qs
var myForm: 4D.WebForm
var component: 4D.WebFormItem

myForm = webForm //returns the page as an object, each property is a component
component = myForm.myImage //returns the myImage component of the page

```

:::info

While `myForm` may not display typical object properties when examined in the debugger, it behaves as if it were the actual `webForm` object. You can interact with the underlying `webForm` object's properties and functions through `myForm`. For example, you can dynamically manipulate page components or transmit messages to web pages using specialized functions like `myForm.setMessage()`.

:::


### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->
**.disableState**( *state* : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|state|string|->|Name of state to disable from the Page|
<!-- END REF -->

#### Description

The `.disableState()` function <!-- REF #WebFormClass.disableState().Summary -->disables the rendering of the *state* in the current Page<!-- END REF -->.

This function does nothing if:
- the *state* is currently not enabled in the Page,
- the *state* does not exist for the Page.

If you [enable](#enablestate) or disable several states in the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on Page states, please refer to the [States](../studio/pageLoaders/states/stateOverview.md) section.




### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->
**.enableState**( *state* : string)<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|state|string|->|Name of state to enable on the Page|
<!-- END REF -->

#### Description

The `.enableState()` function <!-- REF #WebFormClass.enableState().Summary -->enables the rendering of the *state* in the current Page<!-- END REF -->.

This function does nothing if:
- the *state* has already been enabled on the Page,
- the *state* does not exist for the Page.

If you enable or [disable](#disablestate) several states within the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on Page states, please refer to the [States](../studio/pageLoaders/states/stateOverview.md) section.




### .setError()

<!-- REF #WebFormClass.setError().Syntax -->
**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Error message to display in the Page|
<!-- END REF -->

#### Description

The `.setError()` function  <!-- REF #WebFormClass.setError().Summary -->sends *msg* as an error message to the Page<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "error".



#### Example

```qs
exposed function myError()

webForm.setError("My error message")

```

If the [**Provide feedback**](../studio/pageLoaders/events/bindingActionToEvents#providing-feedback) feature is enabled for the event, the *message* is automatically displayed as a red *toast* at the bottom of the Page and disappears automatically after 5 seconds:

![](img/message-error.png)


#### See also

[`throw`](commands/throw.md)


### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->
**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Information message to display in the Page|
<!-- END REF -->

#### Description

The `.setMessage()` function  <!-- REF #WebFormClass.setMessage().Summary -->sends *msg* as an information message to the Page<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "message".



#### Example

```qs
exposed function myMessage()

webForm.setMessage("My information message")

```

If the [**Provide feedback**](../studio/pageLoaders/events/bindingActionToEvents#providing-feedback) feature is enabled for the event, the *message* is automatically displayed as a green *toast* at the bottom of the Page and disappears automatically after 5 seconds:

![](img/message-info.png)


### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->
**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Warning message to display in the Page|
<!-- END REF -->

#### Description

The `.setWarning()` function  <!-- REF #WebFormClass.setWarning().Summary -->sends *msg* as a warning message to the Page<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "warning".



#### Example

```qs
exposed function myWarning()

webForm.setWarning("My warning message")

```

If the [**Provide feedback**](../studio/pageLoaders/events/bindingActionToEvents#providing-feedback) feature is enabled for the event, the *message* is automatically displayed as a yellow *toast* at the bottom of the Page and disappears automatically after 5 seconds:

![](img/message-warning.png)
