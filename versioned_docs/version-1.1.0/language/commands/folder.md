---
id: folder
title: folder
---



<!-- REF #_command_.folder.Syntax -->**folder** ( *path* : string ) : 4D.Folder<!-- END REF -->


<!-- REF #_command_.folder.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|path|string|&#8594;|folder path|
|Result|4D.Folder|&#8592;|New folder object|
<!-- END REF -->

#### Description

The `folder` command <!-- REF #_command_.folder.Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->.

In the *path* parameter, pass a [folder filesystem string](../basics/lang-pathnames.md) (e.g., "/DATA").

Qodly expects a path expressed with the POSIX syntax.
