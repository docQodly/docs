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
|[<!-- INCLUDE #_command_.pictureToBlob.Syntax -->](#picturetoblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.pictureToBlob.Summary -->|
|[<!-- INCLUDE #_command_.setPictureFileName.Syntax -->](#setpicturefilename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.setPictureFileName.Summary -->|
|[<!-- INCLUDE #_command_.setPictureMetadata.Syntax -->](#setpicturemetadata)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.setPictureMetadata.Summary -->|
|[<!-- INCLUDE #_command_.transformPicture.Syntax -->](#transformpicture)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.transformPicture.Summary -->|


## blobToPicture

<!-- REF #_command_.blobToPicture.Syntax -->**blobToPicture** ( *pictureBlob* : blob , *aPicture* : picture , *codec* : string )<!-- END REF -->


<!-- REF #_command_.blobToPicture.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|pictureBlob|blob|->|Blob containing a picture|
|aPicture|picture|<-|Picture from blob|
|codec|string|->|Picture codec ID|<!-- END REF -->

#### Description

The `blobToPicture` command <!-- REF #_command_.blobToPicture.Summary -->inserts a picture stored in a blob into a Qodly picture variable, regardless of its original format<!-- END REF -->.

This command allows you to display pictures stored in native format into blobs. You can load a picture into a blob using, for example, the [`pictureToBlob`](#picturetoblob) command.

A blob variable containing a picture is passed in the *pictureBlob* parameter. The picture can be in any format supported natively by Qodly. If you pass the optional *codec* parameter, Qodly will use the value provided in this parameter to decode the blob (see the specific functioning of the command with this third parameter below).

Pass in the *picture* parameter the Qodly picture variable which should display the picture.

Once the command has been executed, if the blob was correctly decoded, the *picture* parameter contains the picture to display.

The optional *codec* parameter lets you specify the codec to be used for decoding the blob.

If you pass a codec recognized by QodlyScript in *codec*, it is applied to the blob and the picture is returned in the *picture* variable.

If you pass a codec that is not recognized by QodlyScript in *codec*, a new codec is recorded dynamically with the ID passed in the parameter. Qodly then returns a picture that encapsulates the blob and the OK variable is set to 1. In this case, to retrieve the blob, you will need to use the [`pictureToBlob`](#picturetoblob) command with the same custom ID. This particular mechanism can be used to meet two specific needs:

* Encapsulation of a blob (that is not a picture) into a picture,
* Loading a picture without using a codec.

#### System variables and sets

If the command has been executed correctly, the system variable OK is set to 1. If the conversion has failed (QuickTime is not installed, the blob does not contain a readable picture, the *codec* parameter recognized but blob not validated, etc.), OK is set to 0 and the Qodly picture variable is returned empty.

#### See also

[`pictureToBlob`](#picturetoblob)

## combinePictures

<!-- REF #_command_.combinePictures.Syntax -->**combinePictures** ( *resultingPict* : picture , *pict1* : picture  , *operator* : integer , *pict2* : picture , *horOffset* : integer , *vertOffset* : integer )<!-- END REF -->


<!-- REF #_command_.combinePictures.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|resultingPict|picture|<-|Picture resulting from combination|
|pict1|picture|->|First picture to combine|
|operator|integer|->|Type of combination to be done|
|pict2|picture|->|Second picture to combinee|
|horOffset|integer|->|Horizontal offset for superimposition|
|vertOffset|integer|->|Vertical offset for superimposition|<!-- END REF -->

#### Description

The `combinePictures` command <!-- REF #_command_.combinePictures.Summary -->combines the *pict1* and *pict2* pictures in *operator* mode in order to produce a third, *resultingPict*<!-- END REF -->.  The resulting picture is of the compound type and keeps all the characteristics of the source pictures.

In *operator*, pass the type of combination to be applied. Three types of combinations are proposed, you can use the following constants:

|Constant|Value|Description|
|---|----|---|
|kHorizontalConcatenation|1| *pict2* is attached to *pict1*, the top left corner of *pict2* coincides with the top right corner of *pict1*.|
|kVerticalConcatenation|2|  *pict2* is attached to *pict1*, the top left corner of *pict2* coincides with the lower left corner of *pict1*.|
|kSuperimposition|3|*pict2* is placed over *pict1*, the top left corner of *pict2* coincides with the top left corner of *pict1*.|

If the optional *horOffset* and *vertOffset* parameters are used, a translation is applied to *pict2* before superimposition. The values passed in *horOffset* and *vertOffset* must correspond to pixels. Pass positive values for an offset to the right or towards the bottom and a negative value for an offset to the left or towards the top.


#### See also

[`transformPicture`](#transformpicture), [picture operators](./basics/lang-picture.md#picture-operators). 

## convertPicture

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


## createThumbnail

<!-- REF #_command_.createThumbnail.Syntax -->**createThumbnail** ( *source* : picture , *dest* : picture , *width* : integer , *height* : integer , *mode* : integer , *depth* : integer )<!-- END REF -->


<!-- REF #_command_.createThumbnail.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|source|picture|->|Picture variable to convert as a thumbnail|
|dest|picture|<-|Resulting thumbnail|
|width|integer|->|Thumbnail width in pixels, Default value = 48|
|height|integer|->|Thumbnail height in pixels, Default value = 48|
|mode|integer|->|Thumbnail creation mode Default value = Scaled to fit prop centered (6)|
|depth|integer|->|Obsolete, do not use|<!-- END REF -->

#### Description

The `createThumbnail` command <!-- REF #_command_.createThumbnail.Summary -->returns a thumbnail from a given source picture<!-- END REF -->. Thumbnails are usually used for picture preview within multimedia software or Web sites.

## equalPictures

<!-- REF #_command_.equalPictures.Syntax -->**equalPictures** ( *picture1* : picture, *picture2* : picture, *mask* : picture ) : boolean <!-- END REF -->


<!-- REF #_command_.equalPictures.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|picture1|picture|->|Original source picture|
|picture2|picture|->|Picture to compare|
|mask|picture|<-|Resulting mask|
|Result|boolean|<-|True if both pictures are identical; otherwise, False|<!-- END REF -->

#### Description

The `equalPictures` command <!-- REF #_command_.equalPictures.Summary -->precisely compares both the dimensions and the contents of two pictures<!-- END REF -->. 

Pass the source picture in *picture1* and the picture you want to compare with it in *picture2*. 

- If the pictures are not the same dimension, the command returns **False** and the *mask* parameter contains a blank picture. 
- If the pictures are of the same dimension but with different contents, the command returns **False** and the *mask* parameter contains the resulting picture mask based on a comparison of the two pictures. This comparison is performed pixel by pixel, and each pixel that does not match appears white on a black background. 
- If both pictures are exactly the same, the command returns **True** and the *mask* parameter contains a picture that is completely black.

## getPictureFileName

<!-- REF #_command_.getPictureFileName.Syntax -->**getPictureFileName** ( *aPicture * : picture) : string <!-- END REF -->


<!-- REF #_command_.getPictureFileName.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|->|Picture for which to get default name|
|Result|string|<-|Default name of picture file|<!-- END REF -->

#### Description

The `getPictureFileName` command <!-- REF #_command_.getPictureFileName.Summary -->returns the current default name of the picture passed as paramete<!-- END REF -->. 

The default name is used when exporting the picture to a disk file. It can be set automatically based on the original name of the picture file imported into the picture variable, or using the [`setPictureFileName`](#setpicturefilename) command.

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

The `getPictureMetadata` command <!-- REF #_command_.getPictureMetadata.Summary -->can be used to read the contents of the metadata (or meta-tags) found in *aPicture* (picture variable)<!-- END REF -->. For more information about metadata, please refer to the description of the [`setPictureMetadata`](#setpicturemetadata) command.

In the metaName parameter, pass a string specifying the type of metadata to retrieve. You can pass:

a constant from the Picture Metadata Names theme containing a tag path,
the name of a complete block of metadata ("TIFF", "EXIF", "GPS" or "IPTC"),
an empty string ("").

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

## pictureToBlob

<!-- REF #_command_.pictureToBlob.Syntax -->**pictureToBlob** ( *aPicture* : picture , *pictureBlob* : blob , *codec* : string )<!-- END REF -->


<!-- REF #_command_.pictureToBlob.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|<-|Picture variable|
|pictureBlob|blob|->|Blob to receive the converted picture|
|codec|string|->|Picture codec ID|<!-- END REF -->

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

## setPictureFileName

<!-- REF #_command_.setPictureFileName.Syntax -->**setPictureFileName** ( *aPicture * : picture , *fileName* : string) <!-- END REF -->


<!-- REF #_command_.setPictureFileName.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|->|Picture for which to set default name|
|fileName|string|<-|Default picture name|<!-- END REF -->

#### Description

The `setPictureFileName` command <!-- REF #_command_.setPictureFileName.Summary -->sets or changes the default file name for the picture passed as parameter<!-- END REF -->. 

This name may have been set automatically based on the original name of the picture file imported into the picture variable or during a prior call to `setPictureFileName`.

#### See also

[`getPictureFileName`](#getpicturefilename)

## setPictureMetadata

<!-- REF #_command_.setPictureMetadata.Syntax -->**setPictureMetadata** ( *aPicture * : picture , *metaName* : string , *metaContents* : variable )<!-- END REF -->


<!-- REF #_command_.setPictureMetadata.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|->|Picture whose metadata you want to set|
|metaName|string|->|Name or path of block to set|
|metaContents|variable|<-|Metadata contents|<!-- END REF -->

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

## transformPicture

<!-- REF #_command_.transformPicture.Syntax -->**transformPicture** ( *aPicture* : picture , *operator* : integer  , *param1* : real , *param2* : real , *param3* : real , *param4* : real ) : picture<!-- END REF -->


<!-- REF #_command_.transformPicture.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|->|Source picture to be transformed|
|operator|integer|->|Type of transformation to be done|
|param1|real|->|Transformation parameter|
|param2|real|->|Transformation parameter|
|param3|real|->|Transformation parameter|
|param4|real|->|Transformation parameter|
|Result|picture|<-|Resulting picture after transformatione|<!-- END REF -->

#### Description

The `transformPicture` command <!-- REF #_command_.transformPicture.Summary -->applies a transformation of the *operator* type to the picture passed in the *aPicture* parameter<!-- END REF -->.

The source picture is modified directly after execution of the command. Note that certain operations are not destructive and can be reversed by performing the opposite operation or by means of the “Reset” operation. For example, a picture reduced to 1% will regain its original size with no alteration if it is enlarged by a factor of 100 subsequently. Transformations do not modify the original picture type: for example, a vectorial picture will remain vectorial after its transformation.

#### See also

[`combinePictures`](#combinepictures)