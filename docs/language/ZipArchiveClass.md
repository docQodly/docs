---
id: ZipArchiveClass
title: ZIPArchive
---


A QodlyScript ZIP archive is a `File` or `folder` object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save space or transfer files via mediums which may have size limitations (e.g., email or network).

- You create a ZIP archive with the [zipCreateArchive](#zipcreatearchive) command.
- [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [zipReadArchive](#zipreadearchive) command.

### Example

To retrieve and view the contents of a ZIP file object:

```qs
var path, archive : 4D.File
var zipFile : 4D.ZipFile
var zipFolder : 4D.ZipFolder
var txt : string

path=folder(fk desktop folder).file("MyDocs/Archive.zip")
archive=zipReadArchive(path)
zipFolder=archive.root // store the zip main folder
zipFile=zipFolder.files()[0] //read the first zipped file

If(zipFile.extension=".txt")
 txt=zipFile.getText()
End if
```

### Commands

||
|---|
|[<!-- INCLUDE #_command_.zipCreateArchive.Syntax -->](#zipcreatearchive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.zipCreateArchive.Summary -->|
|[<!-- INCLUDE #_command_.zipReadArchive.Syntax -->](#zipreadarchive)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.zipReadArchive.Summary -->|


### Properties

||
|---|
|[<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)&nbsp,&nbsp,&nbsp,&nbsp,<!-- INCLUDE #ZipArchiveClass.root.Summary -->|

## zipCreateArchive


<!-- REF #_command_.zipCreateArchive.Syntax -->**zipCreateArchive** ( *fileToZip* : 4D.File , *destinationFile* : 4D.File ) : object<br/>**zipCreateArchive** ( *folderToZip* : 4D.Folder , *destinationFile* : 4D.File { , *options* : integer }) : object<br/>**zipCreateArchive** ( *zipStructure* : object , *destinationFile* : 4D.File ) : object<!-- END REF -->


<!-- REF #_command_.zipCreateArchive.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|fileToZip|4D.File|->|File or folder object to compress|
|folderToZip|4D.Folder|->|File or folder object to compress|
|zipStructure|object|->|File or folder object to compress|
|destinationFile|4D.File|->|Destination file for the archive|
|options|integer|->|*folderToZip* option: `ZIP Without enclosing folder`|
|Result|object|<-|Status object|<!-- END REF -->

#### Description

The `zipCreateArchive` command <!-- REF #_command_.zipCreateArchive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

You can pass a 4D.File, a 4D.Folder, or a zip structure object as first parameter:

- *fileToZip*: You simply pass a `4D.File` to compress.

- *folderToZip*: You pass a `4D.Folder` to compress. In this case, the *options* parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, `zipCreateArchive` will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the `ZIP Without enclosing folder` constant in the *options* parameter.

- *zipStructure*: You pass an object describing the ZIP archive object. The following properties are available to define the structure:

|Property|Type|Description|
|---|---|---|
|compression|integer|<li>`ZIP Compression standard`: Deflate compression (default)</li><li>`ZIP Compression LZMA`: LZMA compression</li><li>`ZIP Compression XZ`: XZ compression</li><li>`ZIP Compression none`: No compression</li>|
|level|integer|Compression level. Possible values: 1 to 10. A lower value will produce a larger file, while a higher value will produce a smaller file. Compression level has however an impact on performance. Default values if omitted: <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li>|
|encryption|integer|The encryption to use if a password is set:<li>`ZIP Encryption AES128`: AES encryption using 128-bit key.</li><li>`ZIP Encryption AES192`: AES encryption using 192-bit key.</li><li>`ZIP Encryption AES256`: AES encryption using 256-bit key (default if password is set).</li><li>`ZIP Encryption none`: Data is not encrypted (default if no password is set)</li>|
|password|string|A password to use if encryption is required.|
|files|Collection|<li>a collection of `4D.File` or `4D.Folder` objects or</li><li>a collection of objects with the following properties:</li><table><tr><td>Property</td><td>Type</td><td>Description</td></tr><tr><td>source</td><td>4D.File or 4D.Folder</td><td>File or folder</td></tr><tr><td>destination</td><td>string</td><td>(optional) - Specify a relative filepath to change the organization of the contents of the archive</td></tr><tr><td>option</td><td>number</td><td>(optional) - `ZIP Ignore invisible files` or 0 to compress all of the file</td></tr></table>|
|callback|4D.Function|A callback formula that will receive the compression progress (0 - 100) in $1.|

In the *destinationFile* parameter, pass a `4D.File` object describing the ZIP archive to create (name, location, etc.). It is advised to use the ".zip" extension if you want the ZIP archive to be processed automatically by any software.

Once an archive is created, you can use the [zipReadArchive](#zip-read-archive) command to access it.

**Status object**

The returned status object contains the following properties:

|Property|Type|Description|
|---|---|---|
|statusText|string|Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption</li>
|status|integer|Status code|
|success|boolean|True if archive created successfully, else false|

#### Example 1

To compress a `4D.File`:

```qs
 var zfile, destination : 4D.File
 var status : object

 destination=file("/SOURCES/MyDocs/file.zip")
 zfile=file("/SOURCES/MyDocs/text.txt")

 status=zipCreateArchive(zfile,destination)
```

#### Example 2

To compress a `4D.Folder` without the folder itself:

```qs
 var zfolder : 4D.Folder
 var destination : 4D.File
 var status : object

 destination=file("/SOURCES/MyDocs/Images.zip")
 zfolder=folder("/SOURCES/MyDocs/Images")

 status=zipCreateArchive(zfolder,destination,ZIP Without enclosing folder)
```

#### Example 3

To compress a ZIP archive structure with a password:

```qs
 var destination : 4D.File
 var zip,status : object

 destination=file("/SOURCES/MyDocs/Archive.zip")

 zip=newObject
 zip.files=folder("/SOURCES/MyDocs/Resources").folders()
 zip.password="password"

 status=zipCreateArchive(zip,destination)

```

#### Example 4

You want to pass a collection of folders and files to compress to the *zipStructure* object:

```qs
 var destination : 4D.File
 var zip,err : object
 zip=newObject
 zip.files=newCollection
 zip.files.push(newObject("source",file("/SOURCES/Tests/text.txt")))
 zip.files.push(newObject("source",file("/SOURCES/Tests/text2.txt")))
 zip.files.push(newObject("source",file("/SOURCES/Images/image.png")))

 destination=file("/SOURCES/file.zip")
 err=zipCreateArchive(zip,destination)
```

#### Example 5

You want to use an alternative compression algorithm with a high compression level:

```qs
var destination : 4D.File
var zip, err : object

zip=newObject
zip.files=newCollection
zip.files.push(folder("/SOURCES/images"))
zip.compression=ZIP Compression LZMA
zip.level=7 //default is 4

destination=file("/SOURCES/images.zip")
err=zipCreateArchive(zip, destination)
```

## zipReadArchive

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

This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use functions such as [file.copyTo()](Document.md#copyto) or [folder.copyTo()](Directory.md#copyto).

:::

Pass a `4D.File` object referencing the compressed ZIP archive in the *zipFile* parameter. The target archive file will be opened until the `zipReadArchive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically.

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated.

**Archive object**

The returned `4D.ZipArchive` object contains a single [`root`](#root) property whose value is a `4D.ZipFolder` object. This folder describes the whole contents of the ZIP archive.

#### Example

To retrieve and view the contents of a ZIP file object:

```qs
 var archive : 4D.ZipArchive
 var path : 4D.File

 path=file("/SOURCES/MyDocs/Archive.zip")
 archive=zipReadArchive(path)
```

To retrieve the list of the files and folders in the archive:

```qs
 folders=archive.root.folders()
 files=archive.root.files()
```

To read the contents of a file without extracting it from the root folder:

```qs

 if(files[i].extension==".txt")
    txt=files[i].getText()
 else
    blob=files[i].getContent()
 end
```

To extract from the root folder:

```qs
  //extract a file
 folderResult=files[i].copyTo(folder("/SOURCES/MyDocs"))

  //extract all files
 folderResult=archive.root.copyTo(folder("/SOURCES/MyDocs"))
```

## .root

<!-- REF #ZipArchiveClass.root.Syntax -->**.root** : 4D.ZipFolder<!-- END REF -->

#### Description

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

The `root` folder and its contents can be manipulated with the [ZipFile](ZipFileClass.md) and [ZipFolder](ZipFolderClass.md) functions and properties.

This property is **read-only**.
