---
id: pictures
title: Pictures
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


## blobToPicture

<!-- REF #_command_.blobToPicture.Syntax -->**combinePictures** ( *pictureBlob* : blob , *aPicture* : picture , *codec* : string )<!-- END REF -->


<!-- REF #_command_.blobToPicture.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|pictureBlob|blob|->|Blob containing a picture|
|aPicture|picture|<-|Picture from blob|
|codec|string|->|Picture codec ID|<!-- END REF -->

#### Description

The `blobToPicture` command <!-- REF #_command_.blobToPicture.Summary -->inserts a picture stored in a blob into a Qodly picture variable or field, regardless its original format<!-- END REF -->.

#### See also

[`pictureToBlob`](#picturetoblob)

## combinePictures

<!-- REF #_command_.combinePictures.Syntax -->**combinePictures** ( *resultingPict* : picture , *pict1* : picture  , *operator* : integer , *pict2* : picture , *horOffset* : integer , *vertOffset* : integer )<!-- END REF -->


<!-- REF #_command_.combinePictures.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|resultingPict|picture|<-|Picture resulting from combination|
|pict1|picture|->|Blob containing a picture|
|operator|integer|->|First picture to combine|
|pict2|picture|->|Second picture to combinee|
|horOffset|integer|->|Horizontal offset for superimposition|
|vertOffset|integer|->|Vertical offset for superimposition|<!-- END REF -->

#### Description

The `combinePictures` command <!-- REF #_command_.combinePictures.Summary -->combines the *pict1* and *pict2* pictures in operator mode in order to produce a third, *resultingPict*<!-- END REF -->.

#### See also

[`transformPicture`](#transformpicture)

## convertPicture

<!-- REF #_command_.convertPicture.Syntax -->**convertPicture** ( *aPicture* : picture , ** :   , *codec* : string , *compression* : number )<!-- END REF -->


<!-- REF #_command_.convertPicture.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|<-|Picture to be converted|
|||->|Converted picture|
|codec|string|->|Picture Codec ID|
|compression|number|->|Quality of compression|<!-- END REF -->

#### Description

The `convertPicture` command <!-- REF #_command_.convertPicture.Summary -->converts *aPicture* into a new type<!-- END REF -->.

## createThumbnail

<!-- REF #_command_.createThumbnail.Syntax -->**createThumbnail** ( *source* : picture , *dest* : picture , *width* : integer , *height* : integer , *mode* : integer , *depth* : integer )<!-- END REF -->


<!-- REF #_command_.createThumbnail.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|picture|->|4D picture field or variable to convert as a thumbnail|
|dest|picture|<-|Resulting thumbnail|
|width|integer|->|Thumbnail width in pixels, Default value = 48|
|height|integer|->|Thumbnail height in pixels, Default value = 48|
|mode|integer|->|Thumbnail creation mode Default value = Scaled to fit prop centered (6)|
|depth|integer|->|Obsolete, do not use|<!-- END REF -->

#### Description

The `createThumbnail` command <!-- REF #_command_.createThumbnail.Summary -->returns a thumbnail from a given source picture<!-- END REF -->. Thumbnails are usually used for picture preview within multimedia software or Web sites.

## equalPictures

<!-- REF #_command_.equalPictures.Syntax -->**equalPictures** ( *picture1* : picture field, picture variable , *picture2* : picture field, picture variable , *mask* : picture field, picture variable ) : boolean <!-- END REF -->


<!-- REF #_command_.equalPictures.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|picture1|picture field, picture variable|->|Original source picture|
|picture2|picture field, picture variable|->|Picture to compare|
|mask|picture field, picture variable|<-|Resulting mask|
|Result|boolean|<-|True if both pictures are identical; otherwise, False|<!-- END REF -->

#### Description

The `equalPictures` command <!-- REF #_command_.equalPictures.Summary -->precisely compares both the dimensions and the contents of two pictures<!-- END REF -->. 

## getPictureFileName

<!-- REF #_command_.getPictureFileName.Syntax -->**getPictureFileName** ( *aPicture * : picture field, picture variable ) : string <!-- END REF -->


<!-- REF #_command_.getPictureFileName.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture field, picture variable|->|Picture for which to get default name|
|Result|string|<-|Default name of picture file|<!-- END REF -->

#### Description

The `getPictureFileName` command <!-- REF #_command_.getPictureFileName.Summary -->returns the current default name of the picture passed as paramete<!-- END REF -->. 

The default name is used when exporting the picture to a disk file. It can be set automatically based on the original name of the picture file imported into the picture field or variable, or using the [`setPictureFileName`](#setpicturefilename) command.

If the picture does not have a default name, the command returns an empty string.

#### See also

[`setPictureFileName`](#setpicturefilename)

## getPictureMetadata

<!-- REF #_command_.getPictureMetadata.Syntax -->**getPictureMetadata** ( *aPicture * : picture , *metaName* : string , *metaContents* : variable )<!-- END REF -->


<!-- REF #_command_.getPictureMetadata.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|->|Picture whose metadata you want to get|
|metaName|string|->|Name or path of block to get|
|metaContents|variable|<-|Metadata contents|<!-- END REF -->

#### Description

The `getPictureMetadata` command <!-- REF #_command_.getPictureMetadata.Summary -->can be used to read the contents of the metadata (or meta-tags) found in *aPicture* (picture field or variable)<!-- END REF -->. For more information about metadata, please refer to the description of the [`setPictureMetadata`](#setpicturemetadata) command.

#### See also

[`setPictureMetadata`](#setpicturemetadata)

## pictureProperties

<!-- REF #_command_.pictureProperties.Syntax -->**pictureProperties** ( *aPicture* : picture , *width* : number , *height* : number , *hOffset* : integer , *vOffset* : integer , *mode* : integer )<!-- END REF -->


<!-- REF #_command_.pictureProperties.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|->|Picture for which to get information|
|width|number|<-|Width of the picture expressed in pixels|
|height|reak|<-|Height of the picture expressed in pixels|
|hOffset|integer|<-|Horizontal offset when displayed on background|
|vOffset|integer|<-|Vertical offset when displayed on background|
|mode|integer|<-|Transfer mode when displayed on background|<!-- END REF -->

#### Description

The `pictureProperties` command <!-- REF #_command_.pictureProperties.Summary -->returns information about the picture you pass in *aPicture*<!-- END REF -->. 

The *width* and *height* parameters return the width and height of the picture.

The *hOffset*, *vOffset*, and *mode* parameters return the horizontal and vertical positions and the transfer mode of the picture when displayed on the background in a form (“On Background”).

#### See also

[`pictureSize`](#picturesize)

## pictureSize

<!-- REF #_command_.pictureSize.Syntax -->**pictureSize** ( *aPicture* : picture) : integer<!-- END REF -->


<!-- REF #_command_.pictureSize.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|->|Picture for which to return the size in bytes|
|Result|integer|<-|Size in bytes of the picture|<!-- END REF -->

#### Description

`pictureSize` <!-- REF #_command_.pictureSize.Summary -->returns the size of *aPicture* in bytes<!-- END REF -->. 

#### See also

[`pictureProperties`](#pictureproperties)

