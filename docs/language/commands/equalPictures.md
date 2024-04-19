---
id: equalPictures
title: equalPictures
---


<!-- REF #_command_.equalPictures.Syntax -->**equalPictures** ( *picture1* : picture, *picture2* : picture, *mask* : picture ) : boolean <!-- END REF -->


<!-- REF #_command_.equalPictures.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|picture1|picture|->|Original source picture|
|picture2|picture|->|Picture to compare|
|mask|picture|<-|Resulting mask|
|Result|boolean|<-|True if both pictures are identical; otherwise, False|
<!-- END REF -->

#### Description

The `equalPictures` command <!-- REF #_command_.equalPictures.Summary -->precisely compares both the dimensions and the contents of two pictures<!-- END REF -->.

Pass the source picture in *picture1* and the picture you want to compare with it in *picture2*.

- If the pictures are not the same dimension, the command returns **False** and the *mask* parameter contains a blank picture.
- If the pictures are of the same dimension but with different contents, the command returns **False** and the *mask* parameter contains the resulting picture mask based on a comparison of the two pictures. This comparison is performed pixel by pixel, and each pixel that does not match appears white on a black background.
- If both pictures are exactly the same, the command returns **True** and the *mask* parameter contains a picture that is completely black.
