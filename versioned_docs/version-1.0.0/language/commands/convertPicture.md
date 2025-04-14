---
id: convertPicture
title: convertPicture
---



<!-- REF #_command_.convertPicture.Syntax -->**convertPicture** ( *aPicture* : picture , *codec* : string )<br/>**convertPicture** ( *aPicture* : picture , *codec* : string , *compression* : number )<!-- END REF -->


<!-- REF #_command_.convertPicture.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|&#8592;|Picture to be converted|
|||&#8594;|Converted picture|
|codec|string|&#8594;|Picture Codec ID|
|compression|number|&#8594;|Quality of compression|<!-- END REF -->

#### Description

The `convertPicture` command <!-- REF #_command_.convertPicture.Summary -->converts *aPicture* into a new type<!-- END REF -->.

The *codec* parameter indicates the type of picture to be generated. A Codec can be an extension (for example, ".gif") or a Mime type (for example, "image/jpeg"). You can get a list of Codecs that are available in the [Picture Codec IDs](../basics/lang-picture.md#picture-codec-ids) section.
