---
id: FileClass
title: File
---

`File` objects are created with the [`file`](../commands/file) command. They contain references to disk files that may or may not actually exist on disk. For example, when you execute the `file` command to create a new file, a valid `file` object is created but nothing is actually stored on disk until you call the [`file.create()`](#create) function.

### Example

The following example creates a preferences file in the project folder:

```code4d
var created : boolean
created = file("/PACKAGE/SpecialPrefs/"+storage.users[2].name+".myPrefs").create()
```

### Pathnames

`File` objects support several pathnames, including `filesystems` or `posix` syntax. Supported pathnames are detailed in the [**Pathnames**](basics/lang-pathnames.md) page.


### Functions and properties

||
|---|
|[<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.copyTo().Summary -->|
|[<!-- INCLUDE #FileClass.create().Syntax -->](#create)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.create().Summary -->|
|[<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.createAlias().Summary -->|
|[<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.delete().Summary -->|
|[<!-- INCLUDE #document.exists.Syntax -->](#exists)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.exists.Summary -->|
|[<!-- INCLUDE #document.extension.Syntax -->](#extension)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.extension.Summary -->|
|[<!-- INCLUDE #document.fullName.Syntax -->](#fullname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.fullName.Summary -->|
|[<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->|
|[<!-- INCLUDE #document.getText().Syntax -->](#gettext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getText().Summary -->|
|[<!-- INCLUDE #document.hidden.Syntax -->](#hidden)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.hidden.Summary -->|
|[<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isAlias.Summary -->|
|[<!-- INCLUDE #document.isFile.Syntax -->](#isfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFile.Summary -->|
|[<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFolder.Summary -->|
|[<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isWritable.Summary -->|
|[<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationDate.Summary -->|
|[<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationTime.Summary -->|
|[<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.moveTo().Summary -->|
|[<!-- INCLUDE #document.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.name.Summary -->|
|[<!-- INCLUDE #FileClass.open().Syntax -->](#open)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.open().Summary -->|
|[<!-- INCLUDE #document.original.Syntax -->](#original)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.original.Summary -->|
|[<!-- INCLUDE #document.parent.Syntax -->](#parent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.parent.Summary -->|
|[<!-- INCLUDE #document.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.path.Summary -->|
|[<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.rename().Summary -->|
|[<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setContent().Summary -->|
|[<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setText().Summary -->|
|[<!-- INCLUDE #document.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.size.Summary -->|




## 4D.File.new()


<!-- REF #4D.File.new().Syntax -->
**4D.File.new** ( *path* : string ) : 4D.File<!-- END REF -->

#### Description

The `4D.File.new()` function <!-- REF #4D.File.new().Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. It is identical to the [`file`](commands/file.md) command (shortcut).

> It is recommended to use the [`file`](commands/file.md) shortcut command instead of `4D.File.new()`.

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->
## .create()


<!--REF file.create().Note -->
**Not available for ZIP archives**<!-- END REF -->


<!--REF #FileClass.create().Syntax -->**.create**() : boolean <!-- END REF -->


<!--REF #FileClass.create().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|boolean|<-|true if the file was created successfully, false otherwise|<!-- END REF -->

#### Description

The `.create()` function <!-- REF #FileClass.create().Summary -->creates a file on disk according to the properties of the `file` object<!-- END REF -->.

if necessary, the function creates the folder hierachy as described in the [path](#path) property. if the file already exists on disk, the function does nothing (no error is thrown) and returns false.

**Returned value**

* **true** if the file is created successfully,
* **false** if a file with the same name already exists or if an error occured.

#### Example

Creation of a preferences file in the project folder:

```qs
 var created : boolean
 created = File("/PACKAGE/SpecialPrefs/settings.myPrefs").create()
```
<!-- END REF -->

<!-- REF file.createAlias().Desc -->
## .createAlias()


<!--REF #FileClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder , *aliasName* : string ) : 4D.File<!-- END REF -->


<!--REF #FileClass.createAlias().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|4D.Folder|->|Destination folder for the alias or shortcut|
|aliasName|string|->|Name of the alias or shortcut|
|Result|4D.File|<-|Alias or shortcut file reference|<!-- END REF -->

#### Description

The `.createAlias()` function <!-- REF #FileClass.createAlias().Summary -->creates a symbolic link<!-- END REF --> to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the symbolic link in the *aliasName* parameter.

**Returned object**

A `4D.File` object with the `isAlias` property set to **true**.

#### Example

You want to create a symbolic link to a file in your resources folder:

```qs
 myFile = file("/RESOURCES/Archives/ReadMe.txt")
 aliasFile = myFile.createAlias(file("/RESOURCES"),"ReadMe")
```
<!-- END REF -->


<!-- REF file.delete().Desc -->
## .delete()

<!--REF #FileClass.delete().Syntax -->**.delete**()<!-- END REF -->


<!-- REF #FileClass.delete().Params -->
|Parameter|Type||Description|
|---|----|---|---|
| |  ||Does not require any parameters|<!-- END REF -->

#### Description






The `.delete()` function <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->.

if the file does not exist on disk, the function does nothing (no error is generated).

>**WARNING**: `.delete()` can delete any file on a disk. This includes documents created with other applications, as well as the applications themselves. `.delete()` should be used with extreme caution. Deleting a file is a permanent operation and cannot be undone.

#### Example

You want to delete a specific file in the project folder:

```qs
 var tempo : 4D.File
 var info : string
 tempo = file("PACKAGE/SpecialPrefs/settings.prefs")
 if(tempo.exists)
    tempo.delete()
    info = "User preference file deleted."
 end
```
<!-- END REF -->

<!-- INCLUDE document.exists.Desc -->

<!-- INCLUDE document.extension.Desc -->

<!-- INCLUDE document.fullName.Desc -->

<!-- REF file.getAppInfo().Desc -->

<!-- INCLUDE document.getContent().Desc -->

<!-- INCLUDE document.getText().Desc -->

<!-- INCLUDE document.hidden.Desc -->

<!-- INCLUDE document.isAlias.Desc -->

<!-- INCLUDE document.isFile.Desc -->

<!-- INCLUDE document.isFolder.Desc -->


<!-- INCLUDE document.isWritable.Desc -->

<!-- INCLUDE document.modificationDate.Desc -->

<!-- INCLUDE document.modificationTime.Desc -->

<!-- REF file.moveTo().Desc -->
## .moveTo()



<!--REF #FileClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { , *newName* : string } ) : 4D.File<!-- END REF -->


<!--REF #FileClass.moveTo().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|4D.Folder|->|Destination folder|
|newName|string|->|Full name for the moved file|
|Result|4D.File|<-|Moved file|<!-- END REF -->


#### Description

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `file` object into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.  


By default, the file retains its name when moved. if you want to rename the moved file, pass the new full name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

**Returned object**

The moved `file` object.

#### Example

```qs
myFolder = folder("/RESOURCES/Contents")
myFile = myFolder.file("Infos.txt")
myFile.moveTo(myFolder.folder("Archives"),"Infos_old.txt")
```
<!-- END REF -->

<!-- INCLUDE document.name.Desc -->

<!-- REF file.open().Desc -->
## .open()


<!--REF #FileClass.open().Syntax -->**.open**( { *mode* : string } ) : 4D.FileHandle<br/>**.open**( { *options* : object } ) : 4D.FileHandle<!-- END REF -->


<!--REF #FileClass.open().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|mode|string|->|Opening mode: "read", "write", "append"|
|options|object|->|Opening options|
|Result|[4D.FileHandle](FileHandleClass)|<-|New File handle object|<!-- END REF -->

#### Description

The `.open()` function <!-- REF #FileClass.open().Summary -->creates and returns a new [4D.FileHandle](FileHandleClass) object on the file, in the specified *mode* or with the specified *options*<!-- END REF -->. You can use functions and properties of the [4D.FileHandle](FileHandleClass) class to write, read, or append contents to the file.

if you use the *mode* (string) parameter, pass the opening mode for the file handle:



|*mode*|Description|
|---|---|
|"read"|(Default) Creates a file handle to read values from the file. if the file does not exist on disk, an error is returned. You can open as many file handles as you want in "read" mode on the same file object.|
|"write"|Creates a file handle to write values to the file (starting at the beginning of the file content). if the file does not exist on disk, it is created. You can open only one file handle in "write" mode on the same file object.|
|"append"|Creates a file handle to write values to the file (starting at the end of the file content). if the file does not exist on disk, it is created. You can open only one file handle in "append" mode on the same file object.|

> The *mode* value is case sensitive.

If you use the *options* (object) parameter, you can pass more options for the file handle through the following properties (these properties can be read afterwards from the opened [file handle object](FileHandleClass)):

|*options*|Type|Description|Default|
|---|---|---|---|
|`.mode`|string|Opening mode (see *mode* above)|"read"|
|`.charset`|string|Charset used when reading from or writing to the file. Use the standard name of the set (for example "ISO-8859-1" or "UTF-8")|"UTF-8"|
|`.breakModeRead`|string or number|Processing mode for line breaks used when reading in the file (see below)|"native" or 1|
|`.breakModeWrite`|string or number|Processing mode for line breaks used when writing to the file (see below)|"native" or 1|

This function replaces all original end-of-line delimiters. The `.breakModeRead` and `.breakModeWrite` indicate the processing to apply to end-of-line characters in the document. You can use one of the following values (string or number):

|Break mode as text|Break mode as number (constant)|Description|
|---|---|---|
|"native"|1 (`kDocumentWithNativeFormat`)|(Default) Line breaks are converted to the native format of the operating system: LF (line feed) under Unix and macOS, CRLF (carriage return + line feed) under Windows|
|"crlf"|2 (`kDocumentWithCRLF`)|Line breaks are converted to CRLF (carriage return + line feed), the default Windows format|
|"cr"|3 (`kDocumentWithCR`)|Line breaks are converted to CR (carriage return), the default Classic Mac OS format|
|"lf"|4 (`kDocumentWithLF`)|Line breaks are converted to LF (line feed), the default Unix and macOS format|

> The *Break mode as text* value is case sensitive.

#### Example

You want to create a file handle for reading the "ReadMe.txt" file:

```qs
var f : 4D.File
var fhandle : 4D.FileHandle

f = file("/SOURCES/ReadMe.txt")
fhandle = f.open("read")

```
<!-- END REF -->

<!-- INCLUDE document.original.Desc -->

<!-- INCLUDE document.parent.Desc -->

<!-- INCLUDE document.path.Desc -->

<!-- REF file.rename().Desc -->
## .rename()


<!--REF #FileClass.rename().Syntax -->**.rename**( *newName* : string ) : 4D.File<!-- END REF -->


<!--REF #FileClass.rename().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|newName|string|->|New full name for the file|
|Result|4D.File|<-|Renamed file|<!-- END REF -->

#### Description

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `file` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. if a file with the same name already exists, an error is returned.

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.

**Returned object**

The renamed `file` object.

#### Example

You want to rename "ReadMe.txt" in "ReadMe_new.txt":

```qs
 toRename = file("/SOURCES/ReadMe.txt")
 newName = toRename.rename(toRename.name+"_new"+toRename.extension)
```
<!-- END REF -->


<!-- REF file.setContent().Desc -->
## .setContent()


<!--REF #FileClass.setContent().Syntax -->**.setContent** ( *content* : blob ) <!-- END REF -->


<!--REF #FileClass.setContent().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|content|blob|->|New contents for the file|<!-- END REF -->

#### Description

The `.setContent()` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* blob<!-- END REF -->. For information on blobs, please refer to the [Blob](basics/lang-blob.md) section.

#### Example

```qs
 var myFile : 4D.File
 var vEntity : cs.myClassEntity

 myFile = "/SOURCES/Archives/data.txt")
 vEntity = ds.myClass.all().first() //get an entity
 myFile.setContent(vEntity.infoBlob)
 vEntity.save()

```
<!-- END REF -->

<!-- REF file.setText().Desc -->
## .setText()


<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : string {, *charSetName* : string { , *breakMode* : integer } } )<br/>**.setText** ( *text* : string {, *charSetNum* : integer { , *breakMode* : integer } } )<!-- END REF -->



<!--REF #FileClass.setText().Params -->
|Parameter|Type||Description|
|---------|----|---|--------|
|text|string|->|string to store in the file|
|charSetName|string|->|Name of character set|
|charSetNum|integer|->|Number of character set|
|breakMode|integer|->|Processing mode for line breaks|<!-- END REF -->


#### Description

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->.

if the file referenced in the `file` object does not exist on the disk, it is created by the function. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

In *text*, pass the text to write to the file. It can be a literal ("my text"), or a 4D text field or variable.

Optionally, you can designate the character set to be used for writing the contents. You can pass either:

* in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
* or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by Qodly, refer to the description of the `convertFromText` command.

if a Byte Order Mark (BOM) exists for the character set, Qoldy inserts it into the file unless the character set used contains the suffix "-no-bom" (e.g. "UTF-8-no-bom"). if you do not specify a character set, by default 4D uses the "UTF-8" character set without BOM.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants are available:

|Constant|Value|Comment|
|--------|-----|-------|
|`kDocumentUnchanged`|0|No processing|
|`kDocumentWithNativeFormat`|1|(Default) Line breaks are converted to the native format of the operating system (line feed on Unix)|
|`kDocumentWithCRLF`|2|Line breaks are converted to CRLF (carriage return + line feed), the default Windows format|
|`kDocumentWithCR`|3|Line breaks are converted to CR (carriage return), the default Classic Mac OS format|
|`kDocumentWithLF`|4|Line breaks are converted to LF (line feed), the default Unix and macOS format|

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).


#### Example

```qs
var myFile : 4D.File
myFile = file("/SOURCES/Hello.txt")
myFile.setText("Hello world")
```
<!-- END REF -->


<!-- INCLUDE document.size.Desc -->
