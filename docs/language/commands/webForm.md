---
id: webForm
title: webForm
---



<!-- REF #_command_.webForm.Syntax -->**webForm** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.webForm.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.WebForm|<-|New `WebForm` proxy object
<!-- END REF -->

#### Description

The `webForm` command <!-- REF #_command_.webForm.Summary --> returns a `4D.WebForm` proxy object, providing a means to work with and effectively emulates the Page's properties and functions<!-- END REF -->.


:::info

Keep in mind that a `4D.WebForm` object  is a **proxy object**, and not a direct reference to the web form object itself. As a consequence for example, the `4D.WebForm` object does not expose all Page properties in the Debugger. 

:::

Each property of the returned object is an object of the [4D.WebFormItem](../WebFormItemClass.md) class.

The command returns `null` if it is called in a request that does not originate from Qodly Studio.



