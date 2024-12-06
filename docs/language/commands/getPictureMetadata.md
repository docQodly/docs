---
id: getPictureMetadata
title: getPictureMetadata
---



<!-- REF #_command_.getPictureMetadata.Syntax -->**getPictureMetadata** ( *aPicture * : picture , *metaName* : string , *metaContents* : variable )<!-- END REF -->


<!-- REF #_command_.getPictureMetadata.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|&#8594;|Picture whose metadata you want to get|
|metaName|string|&#8594;|Name or path of block to get|
|metaContents|variable|&#8592;|Metadata contents|
<!-- END REF -->

#### Description

The `getPictureMetadata` command <!-- REF #_command_.getPictureMetadata.Summary -->can be used to read the contents of the metadata (or meta-tags) found in *aPicture* (picture variable)<!-- END REF -->. For more information about metadata, please refer to the description of the [`setPictureMetadata`](setPictureMetadata.md) command.

In the *metaName* parameter, pass a string specifying the type of metadata to retrieve. You can pass:

a constant from the Picture Metadata Names theme containing a tag path,
the name of a complete block of metadata ("TIFF", "EXIF", "GPS" or "IPTC"),
an empty string ("").

#### See also

[`setPictureMetadata`](setPictureMetadata.md)
