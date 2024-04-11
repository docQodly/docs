---
id: convertPicture
title: convertPicture
---


## Pictures Commands

||
|---|
|[<!-- INCLUDE #_command_.blobToPicture.Syntax -->](#blobtopicture)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.blobToPicture.Summary -->|
|[<!-- INCLUDE #_command_.combinePictures.Syntax -->](#combinepictures)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.combinePictures.Summary -->|
|[<!-- INCLUDE #_command_.convertPicture.Syntax -->](#convertpicture)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.convertPicture.Summary -->|
|[<!-- INCLUDE #_command_.createThumbnail.Syntax -->](#createthumbnail)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.createThumbnail.Summary -->|
|[<!-- INCLUDE #_command_.equalPictures.Syntax -->](#equalpictures)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.equalPictures.Summary -->|
|[<!-- INCLUDE #_command_.getPictureFileName.Syntax -->](#getpicturefilename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.getPictureFileName.Summary -->|
|[<!-- INCLUDE #_command_.getPictureMetadata.Syntax -->](#getpicturemetadata)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.getPictureMetadata.Summary -->|
|[<!-- INCLUDE #_command_.pictureProperties.Syntax -->](#pictureproperties)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.pictureProperties.Summary -->|
|[<!-- INCLUDE #_command_.pictureSize.Syntax -->](#picturesize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.pictureSize.Summary -->|
|[<!-- INCLUDE #_command_.pictureToBlob.Syntax -->](#picturetoblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.pictureToBlob.Summary -->|
|[<!-- INCLUDE #_command_.setPictureFileName.Syntax -->](#setpicturefilename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.setPictureFileName.Summary -->|
|[<!-- INCLUDE #_command_.setPictureMetadata.Syntax -->](#setpicturemetadata)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.setPictureMetadata.Summary -->|
|[<!-- INCLUDE #_command_.transformPicture.Syntax -->](#transformpicture)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.transformPicture.Summary -->|



<!-- REF #_command_.convertPicture.Syntax -->**convertPicture** ( *aPicture* : picture , *codec* : string )<br/>**convertPicture** ( *aPicture* : picture , *codec* : string , *compression* : number )<!-- END REF -->


<!-- REF #_command_.convertPicture.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|<-|Picture to be converted|
|||->|Converted picture|
|codec|string|->|Picture Codec ID|
|compression|number|->|Quality of compression|<!-- END REF -->

#### Description

The `convertPicture` command <!-- REF #_command_.convertPicture.Summary -->converts *aPicture* into a new type<!-- END REF -->.

The *codec* parameter indicates the type of picture to be generated. A Codec can be an extension (for example, ".gif") or a Mime type (for example, "image/jpeg"). You can get a list of Codecs that are available in the [Picture Codec IDs](./basics/lang-picture.md#picture-codec-ids) section.
