---
id: file
title: file
---


<!-- REF #_command_.file.Syntax -->**file** ( *path* : string ) : 4D.File<!-- END REF -->


<!-- REF #_command_.file.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|path|string|&#8594;|File path|
|Result|4D.File|&#8592;|New file object|
<!-- END REF -->

#### Description

The `file` command <!-- REF #_command_.file.Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->.

In the *path* parameter, pass a [filesystem path string](../basics/lang-pathnames.md) (e.g., "/DATA/myfile.txt").

Qodly expects a path expressed with the POSIX syntax.
