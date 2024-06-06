---
id: zipReadArchive
title: zipReadArchive
---


<!-- REF #_command_.zipReadArchive.Syntax -->**zipReadArchive** ( *zipFile* : 4D.File { , *password* : string }) : 4D.ZipArchive<!-- END REF -->


<!-- REF #_command_.zipReadArchive.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|zipFile|4D.File|->|Zip archive file|
|password|string|->|ZIP archive password if any|
|Result|4D.ZipArchive|<-|Archive object|<!-- END REF -->

#### Description

The `zipReadArchive` command <!-- REF #_command_.zipReadArchive.Summary -->retrieves the contents of *zipFile* and returns it as a `4D.ZipArchive` object<!-- END REF -->.

:::note

This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use functions such as [file.copyTo()](../Document.md#copyto) or [folder.copyTo()](../Directory.md#copyto).

:::

Pass a `4D.File` object referencing the compressed ZIP archive in the *zipFile* parameter. The target archive file will be opened until the `zipReadArchive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically.

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated.

**Archive object**

The returned `4D.ZipArchive` object contains a single [`root`](../ZipArchiveClass#root) property whose value is a `4D.ZipFolder` object. This folder describes the whole contents of the ZIP archive.

#### Example

To retrieve and view the contents of a ZIP file object:

```qs
 var archive : 4D.ZipArchive
 var path : 4D.File

 path = file("/SOURCES/MyDocs/Archive.zip")
 archive = zipReadArchive(path)
```

To retrieve the list of the files and folders in the archive:

```qs
 folders = archive.root.folders()
 files = archive.root.files()
```

To read the contents of a file without extracting it from the root folder:

```qs

 if(files[i].extension == ".txt")
    txt = files[i].getText()
 else
    blob = files[i].getContent()
 end
```

To extract from the root folder:

```qs
  //extract a file
 folderResult = files[i].copyTo(folder("/SOURCES/MyDocs"))

  //extract all files
 folderResult = archive.root.copyTo(folder("/SOURCES/MyDocs"))
```
