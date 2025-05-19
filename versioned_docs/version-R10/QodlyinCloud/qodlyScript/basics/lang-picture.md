---
id: lang-picture
title: Picture
---

A Picture attribute, variable or expression can be any valid image. In general, this includes any picture that can be put on the pasteboard or read from a file.

QodlyScript uses native APIs to encode (write) and decode (read) picture. These implementations provide access to numerous native formats.

QodlyScript supports metadata in pictures. Two commands, [`setPictureMetadata`](../commands/setPictureMetadata.md) and [`getPictureMetadata`](../commands/getPictureMetadata.md), let you benefit from metadata in your developments.

## Picture Codec IDs  

QodlyScript supports natively a set of picture formats. A picture format is defined through a *codecID*. Several picture management commands can receive a *codecID* as a parameter.

The following codec IDs are supported:

- .jpg
- .png
- .bmp
- .gif
- .tif


:::info

.svg and .pdf are supported in picture attributes or variables but cannot be processed by picture management commands or operators.

:::

