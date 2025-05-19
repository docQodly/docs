---
id: createThumbnail
title: createThumbnail
---


<!-- REF #_command_.createThumbnail.Syntax -->**createThumbnail** ( *source* : picture , *dest* : picture , *width* : integer , *height* : integer , *mode* : integer , *depth* : integer )<!-- END REF -->


<!-- REF #_command_.createThumbnail.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|picture|&#8594;|Picture variable to convert as a thumbnail|
|dest|picture|&#8592;|Resulting thumbnail|
|width|integer|&#8594;|Thumbnail width in pixels, Default value = 48|
|height|integer|&#8594;|Thumbnail height in pixels, Default value = 48|
|mode|integer|&#8594;|Thumbnail creation mode Default value = Scaled to fit prop centered (6)|
|depth|integer|&#8594;|Obsolete, do not use|
<!-- END REF -->

#### Description

The `createThumbnail` command <!-- REF #_command_.createThumbnail.Summary -->returns a thumbnail from a given source picture<!-- END REF -->. Thumbnails are usually used for picture preview within multimedia software or Web sites.
