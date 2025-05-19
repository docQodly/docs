---
id: ZipArchiveClass
title: ZIPArchive
---


A QodlyScript ZIP archive is a `File` or `folder` object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save space or transfer files via mediums which may have size limitations (e.g., email or network).

- You create a ZIP archive with the [zipCreateArchive](./commands/zipCreateArchive.md) command.
- [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [zipReadArchive](./commands/zipReadArchive.md) command.

### Example

To retrieve and view the contents of a ZIP file object:

```qs
var path, archive : 4D.File
var zipFile : 4D.ZipFile
var zipFolder : 4D.ZipFolder
var txt : string

path = folder(fk desktop folder).file("MyDocs/Archive.zip")
archive = zipReadArchive(path)
zipFolder = archive.root // store the zip main folder
zipFile = zipFolder.files()[0] //read the first zipped file

If(zipFile.extension = ".txt")
 txt = zipFile.getText()
End if
```


### Properties

||
|---|
|[<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary -->|


## .root

<!-- REF #ZipArchiveClass.root.Syntax -->**.root** : 4D.ZipFolder<!-- END REF -->

#### Description

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

The `root` folder and its contents can be manipulated with the [ZipFile](ZipFileClass.md) and [ZipFolder](ZipFolderClass.md) functions and properties.

This property is **read-only**.
