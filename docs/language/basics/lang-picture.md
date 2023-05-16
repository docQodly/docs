---
id: lang-picture
title: Picture
---

A Picture attribute, variable or expression can be any valid image. In general, this includes any picture that can be put on the pasteboard or read from a file. 

QodlyScript uses native APIs to encode (write) and decode (read) picture. These implementations provide access to numerous native formats. 

QodlyScript supports metadata in pictures. Two commands, [`setPictureMetadata`](../picture.md#setpicturemetadata) and [`getPictureMetadata`](../picture.md#getpicturemetadata), let you benefit from metadata in your developments.

## Picture Codec IDs  

QodlyScript supports natively a set of picture formats. A picture format is defined through a *codecID*. Several [picture management commands](picture.md) can receive a *codecID* as a parameter. 

The following codec IDs are supported:

- .jpg
- .png
- .bmp
- .gif
- .tif
- .emf
- .svg
- .pdf




## Picture operators

|Operation	|Syntax	|Returns	|Action|
|---|---|---|---|
|Horizontal concatenation	|Pict1 + Pict2	|Picture	|Add Pict2 to the right of Pict1
|Vertical concatenation	|Pict1 / Pict2	|Picture	|Add Pict2 to the bottom of Pict1|
|Exclusive superimposition	|Pict1 & Pict2	|Picture	|Superimposes Pict2 on top of Pict1 (Pict2 in foreground). Produces the same result as `COMBINE PICTURES(pict3,pict1,Superimposition,pict2)`
|Inclusive superimposition	|Pict1 &#124; Pict2	|Picture	|Superimposes Pict2 on Pict1 and returns resulting mask if both pictures are the same size. Produces the same result as `equal=Equal pictures(Pict1,Pict2,Pict3)`|
|Horizontal move	|Picture + Number	|Picture	|Move Picture horizontally Number pixels|
|Vertical move	|Picture / Number	|Picture	|Move Picture vertically Number pixels|
|Resizing	|Picture * Number	|Picture	|Resize Picture by Number ratio|
|Horizontal scaling	|Picture *+ Number	|Picture	|Resize Picture horizontally by Number ratio|
|Vertical scaling	|Picture *&#124; Number	|Picture	|Resize Picture vertically by Number ratio|


:::note Notes

- In order to use the `|` operator, Pict1 and Pict2 must have exactly the same dimension. If both pictures are a different size, the operation Pict1 | Pict2 produces a blank picture.
- The [`combinePictures`](../picture.md#combinePicture) command can be used to superimpose pictures while keeping the characteristics of each source picture in the resulting picture.
- Additional operations can be performed on pictures using the [`transformPicture`](../picture.md#transformPicture) command.
- There is no comparison operators on pictures, however QodlyScript proposes the [`equalPicture`](../picture.md#equalPicture) command to compare two pictures.

::: 

### Examples

Horizontal concatenation
```4d
 circle+rectangle //Place the rectangle to the right of the circle
 rectangle+circle //Place the circle to the right of the rectangle
```
![](img/concatHor.en.png)
![](img/concatHor2.en.png)

Vertical concatenation
```4d
 circle/rectangle //Place the rectangle under the circle
 rectangle/circle //Place the circle under the rectangle
```
![](img/concatVer.en.png)
![](img/concatVer2.en.png)

Exclusive superimposition
```4d
Pict3=Pict1 & Pict2 // Superimposes Pict2 on top of  Pict1
```
![](img/superimpoExc.fr.png)

Inclusive superimposition
```4d
Pict3=Pict1|Pict2 // Recovers resulting mask from superimposing two pictures of the same size
```
![](img/superimpoInc.fr.png)

Horizontal move
```4d
rectangle+50 //Move the rectangle 50 pixels to the right
rectangle-50 //Move the rectangle 50 pixels to the left
```
![](img/hormove.en.png)

Vertical move

```4d
rectangle/50 //Move the rectangle down by 50 pixels
rectangle/-20 //Move the rectangle up by 20 pixels
```

![](img/vertmove.en.png)![](img/vertmove2.en.png)

Resize

```4d
rectangle*1.5 //The rectangle becomes 50% bigger
rectangle*0.5 //The rectangle becomes 50% smaller
```
![](img/resize.en.png)![](img/resisze2.en.png)

Horizontal scaling

```4d
circle*+3 //The circle becomes 3 times wider
circle*+0.25 //The circle's width becomes a quarter of what it was
```

![](img/Horscaling.en.png)![](img/Horscaling2.en.png)

Vertical scaling

```4d
circle*|2 //The circle becomes twice as tall
circle*|0.25 //The circle's height becomes a quarter of what it was
```

![](img/vertscaling.en.png)![](img/veticalscaling2.en.png)
