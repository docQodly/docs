---
id: setPictureMetadata
title: setPictureMetadata
---


<!-- REF #_command_.setPictureMetadata.Syntax -->**setPictureMetadata** ( *aPicture * : picture , *metaName* : string , *metaContents* : variable )<!-- END REF -->


<!-- REF #_command_.setPictureMetadata.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|->|Picture whose metadata you want to set|
|metaName|string|->|Name or path of block to set|
|metaContents|variable|<-|Metadata contents|
<!-- END REF -->

#### Description

The `setPictureMetadata` command <!-- REF #_command_.setPictureMetadata.Summary -->lets you set or modify the contents of the metadata (or meta-tags) found in the picture (Qodly picture variable), when they are modifiable<!-- END REF -->.

Metadata are additional information inserted into pictures. Qoldy lets you handle four types of standard metadata: EXIF, GPS, IPTC and TIFF.

::: note

For a detailed description of these metadata types, you can consult the following documents: http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf (IPTC) and http://exif.org/Exif2-2.PDF (TIFF, EXIF and GPS).

:::

#### Note

When all the metadata are handled via a DOM element reference, the tags are stored as attributes attached to an element (a child of the referenced element) whose name is the block name (TIFF, IPTC, etc.). When a specific metadata block is manipulated, the block tags are stored as attributes that are directly attached to the element referenced by the command.

#### See also

[`getPictureMetadata`](#getpicturemetadata)
