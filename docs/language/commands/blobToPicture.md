---
id: blobToPicture
title: blobToPicture
---


<!-- REF #_command_.blobToPicture.Syntax -->**blobToPicture** ( *pictureBlob* : blob , *aPicture* : picture , *codec* : string )<!-- END REF -->


<!-- REF #_command_.blobToPicture.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|pictureBlob|blob|->|Blob containing a picture|
|aPicture|picture|<-|Picture from blob|
|codec|string|->|Picture codec ID|<!-- END REF -->

#### Description

The `blobToPicture` command <!-- REF #_command_.blobToPicture.Summary -->inserts a picture stored in a blob into a Qodly picture variable, regardless of its original format<!-- END REF -->.

This command allows you to display pictures stored in native format into blobs. You can load a picture into a blob using, for example, the [`pictureToBlob`](pictureToBlob.md) command.

A blob variable containing a picture is passed in the *pictureBlob* parameter. The picture can be in any format supported natively by Qodly. If you pass the optional *codec* parameter, Qodly will use the value provided in this parameter to decode the blob (see the specific functioning of the command with this third parameter below).

Pass in the *picture* parameter the Qodly picture variable which should display the picture.

Once the command has been executed, if the blob was correctly decoded, the *picture* parameter contains the picture to display.

The optional *codec* parameter lets you specify the codec to be used for decoding the blob.

If you pass a codec recognized by QodlyScript in *codec*, it is applied to the blob and the picture is returned in the *picture* variable.

If you pass a codec that is not recognized by QodlyScript in *codec*, a new codec is recorded dynamically with the ID passed in the parameter. Qodly then returns a picture that encapsulates the blob and the OK variable is set to 1. In this case, to retrieve the blob, you will need to use the [`pictureToBlob`](pictureToBlob.md) command with the same custom ID. This particular mechanism can be used to meet two specific needs:

* Encapsulation of a blob (that is not a picture) into a picture,
* Loading a picture without using a codec.

#### System variables and sets

If the command has been executed correctly, the system variable OK is set to 1. If the conversion has failed (QuickTime is not installed, the blob does not contain a readable picture, the *codec* parameter recognized but blob not validated, etc.), OK is set to 0 and the Qodly picture variable is returned empty.

#### See also

[`pictureToBlob`](pictureToBlob.md)
