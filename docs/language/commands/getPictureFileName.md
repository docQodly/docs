---
id: getPictureFileName
title: getPictureFileName
---


<!-- REF #_command_.getPictureFileName.Syntax -->**getPictureFileName** ( *aPicture * : picture) : string <!-- END REF -->


<!-- REF #_command_.getPictureFileName.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aPicture|picture|->|Picture for which to get default name|
|Result|string|<-|Default name of picture file|
<!-- END REF -->

#### Description

The `getPictureFileName` command <!-- REF #_command_.getPictureFileName.Summary -->returns the current default name of the picture passed as paramete<!-- END REF -->.

The default name is used when exporting the picture to a disk file. It can be set automatically based on the original name of the picture file imported into the picture variable, or using the [`setPictureFileName`](#setpicturefilename) command.

If the picture does not have a default name, the command returns an empty string.

#### See also

[`setPictureFileName`](#setpicturefilename)
