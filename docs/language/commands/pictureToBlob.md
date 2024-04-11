---
id: pictureToBlob
title: pictureToBlob
---



<!-- REF #_command_.pictureToBlob.Syntax -->**pictureToBlob** ( *aPicture* : picture , *pictureBlob* : blob , *codec* : string )<!-- END REF -->


<!-- REF #_command_.pictureToBlob.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|<-|Picture variable|
|pictureBlob|blob|->|Blob to receive the converted picture|
|codec|string|->|Picture codec ID|
<!-- END REF -->

#### Description

The `pictureToBlob` command<!-- REF #_command_.pictureToBlob.Summary --> converts a picture stored in a variable to another format and places the resulting picture in a blob<!-- END REF -->.

A picture variable is passed in the *aPicture* parameter. A blob variable containing the converted picture is passed in the *pictureBlob* parameter.

Pass in the *codec* parameter a string setting the conversion format.

A Codec can be an extension (for example, “.gif”) or a Mime type (for example “image/jpeg”).

Once the command has been executed, the *pictureBlob* contains the picture in the specified format.

If the conversion was successful, the system variable OK is set to 1. If the conversion has failed (converter not available), OK is set to 0 and the generated blob is empty (0 byte).

#### Example

You want to convert an image from a proprietary format to GIF format. You can use a code such as:


#### See also

[`blobToPicture`](#blobtopicture)
