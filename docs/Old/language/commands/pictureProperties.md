---
id: pictureProperties
title: pictureProperties
---


<!-- REF #_command_.pictureProperties.Syntax -->**pictureProperties** ( *aPicture* : picture , *width* : number , *height* : number , *hOffset* : integer , *vOffset* : integer , *mode* : integer )<!-- END REF -->


<!-- REF #_command_.pictureProperties.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|&#8594;|Picture for which to get information|
|width|number|&#8592;|Width of the picture expressed in pixels|
|height|reak|&#8592;|Height of the picture expressed in pixels|
|hOffset|integer|&#8592;|Horizontal offset when displayed on background|
|vOffset|integer|&#8592;|Vertical offset when displayed on background|
|mode|integer|&#8592;|Transfer mode when displayed on background|
<!-- END REF -->

#### Description

The `pictureProperties` command <!-- REF #_command_.pictureProperties.Summary -->returns information about the picture you pass in *aPicture*<!-- END REF -->.

The *width* and *height* parameters return the width and height of the picture.

The *hOffset*, *vOffset*, and *mode* parameters return the horizontal and vertical positions and the transfer mode of the picture when displayed on the background in a form (“On Background”).

#### See also

[`pictureSize`](pictureSize.md)
