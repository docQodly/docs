---
id: combinePictures
title: combinePictures
---

<!-- REF #_command_.combinePictures.Syntax -->**combinePictures** ( *resultingPict* : picture , *pict1* : picture  , *operator* : integer , *pict2* : picture , *horOffset* : integer , *vertOffset* : integer )<!-- END REF -->


<!-- REF #_command_.combinePictures.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|resultingPict|picture|<-|Picture resulting from combination|
|pict1|picture|->|First picture to combine|
|operator|integer|->|Type of combination to be done|
|pict2|picture|->|Second picture to combinee|
|horOffset|integer|->|Horizontal offset for superimposition|
|vertOffset|integer|->|Vertical offset for superimposition|
<!-- END REF -->

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
