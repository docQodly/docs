---
id: transformPicture
title: transformPicture
---


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
|Result|picture|<-|Resulting picture after transformatione|
<!-- END REF -->

#### Description

The `transformPicture` command <!-- REF #_command_.transformPicture.Summary -->applies a transformation of the *operator* type to the picture passed in the *aPicture* parameter<!-- END REF -->.

The source picture is modified directly after execution of the command. Note that certain operations are not destructive and can be reversed by performing the opposite operation or by means of the “Reset” operation. For example, a picture reduced to 1% will regain its original size with no alteration if it is enlarged by a factor of 100 subsequently. Transformations do not modify the original picture type: for example, a vectorial picture will remain vectorial after its transformation.

#### See also

[`combinePictures`](combinePictures.md)
