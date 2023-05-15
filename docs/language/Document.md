---
id: Document
title: Document Class
---

## Description


## .creationDate


**.creationDate** : Date

#### Description

The `.creationDate` property returns the creation date of the file.

This property is **read-only**.




## .creationTime


**.creationTime** : Time

#### Description

The `.creationTime` property  returns the creation  time of the file (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.




## .exists


**.exists** : Boolean

#### Description

The `.exists` property returns true if the file exists on disk, and false otherwise.

This property is **read-only**.





## .extension


**.extension** : Text

#### Description

The `.extension` property returns the extension of the file name (if any). An extension always starts with ".". The property returns an empty string if the file name does not have an extension.

This property is **read-only**.




## .fullName


**.fullName** : Text

#### Description

The `.fullName` property returns the full name of the file, including its extension (if any).

This property is **read-only**.




## .hidden


**.hidden** : Boolean

#### Description

The `.hidden` property returns true if the file is set as "hidden" at the system level, and false otherwise.

This property is **read/write**.




## .isAlias

**.isAlias** : Boolean

#### Description

The `.isAlias` property returns true if the file is an alias, a shortcut, or a symbolic link, and false otherwise.

This property is **read-only**.




## .isFile


**.isFile** : Boolean

#### Description

The `.isFile` property returns always true for a file.

This property is **read-only**.




## .isFolder


**.isFolder** : Boolean

#### Description

The `.isFolder` property returns always false for a file.

This property is **read-only**.




## .isWritable


**.isWritable** : Boolean

#### Description

The `.isWritable` property returns true if the file exists on disk and is writable.

>The property checks the ability of the application to write on the disk (access rights), it does not solely rely on the *writable* attribute of the file.

This property is **read-only**.

**Example**  

```4d
 myFile=File("C:\\Documents\\Archives\\ReadMe.txt",fk platform path)
 If(myFile.isWritable)
    myNewFile=myFile.setText("Added text")
 End if
```




## .modificationDate


**.modificationDate** : Date

#### Description

The `.modificationDate` property returns the date of the file's last modification.

This property is **read-only**.




## .modificationTime


**.modificationTime** : Time

##### Description

The `.modificationTime` property returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.




## .name


**.name** : Text

#### Description

The `.name` property returns the name of the file without extension (if any).

This property is **read-only**.




## .original


**.original** : 4D.File<br/>**.original** : 4D.Folder

#### Description

The `.original` property returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:

* a file object
* a folder object

For non-alias files, the property returns the same file object as the file.

This property is **read-only**.




## .parent


**.parent** : 4D.Folder

#### Description

The `.parent` property returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

This property is **read-only**.




## .path

**.path** : Text

#### Description

The `.path` property returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

This property is **read-only**.




## .platformPath


**.platformPath** : Text

#### Description

The `.platformPath` property returns the path of the file expressed with the current platform syntax.

This property is **read-only**.




## .size


**.size** : Real

#### Description

The `.size` property returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0.

This property is **read-only**.





## .copyTo()


**.copyTo**( *destinationFolder* : 4D.Folder { , *newName* : Text } { , *overwrite* : Integer } ) : 4D.File



|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder | 4D.Folder |->|Destination folder|
|newName|Text|->|Name for the copy|
|overwrite|Integer|->|`fk overwrite` to replace existing elements|
|Result|4D.File|<-|Copied file|

#### Description

The `.copyTo()` function copies the `File` object into the specified *destinationFolder* .

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file is copied with the name of the original file. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a file with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

|Constant|Value|Comment|
|---|---|---|
|`fk overwrite`|4|Overwrite existing elements, if any|

**Returned value**

The copied `File` object.

#### Example

You want to copy a picture *file* from the user's document folder to the application folder:

```4d
var source, copy : Object
source=Folder(fk documents folder).file("Pictures/photo.png")
copy=source.copyTo(Folder("/PACKAGE"),fk overwrite)
```




## .getContent()


**.getContent**() : 4D.Blob



|Parameter|Type||Description|
|---|----|---|---|
|Result | 4D.Blob |<-|File content|

#### Description

The `.getContent()` function  returns a `4D.Blob` object containing the entire content of a file. For information on BLOBs, please refer to the [BLOB](../basics/lang-blob.md) section.

**Returned value**

A `4D.Blob` object.

#### Example

To save a document's contents in a `Blob` attribute:

```4d
 var myFile : 4D.File
 var vEntity : cs.myClassEntity
 
 myFile=Folder(fk documents folder).file("Archives/data.txt")
 vEntity=ds.myClass.all().first() //get an entity
 vEntity.infoBlob=myFile.getContent()
 vEntity.save()

```




## .getIcon()


**.getIcon**( { *size* : Integer } ) : Picture



|Parameter|Type||Description|
|---|----|---|---|
|size|Integer|->|Side length for the returned picture (pixels)|
|Result|Picture|<-|Icon|

#### Description

The `.getIcon()` function returns the icon of the file.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels (“large icons”) or 16x16 pixels (“small icons”). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the file does not exist on disk, a default blank icon is returned.  

**Returned value**

File icon [picture](../basics/lang-picture.md).




## .getText()


**.getText**( { *charSetName* : Text { , *breakMode* : Integer } } ) : Text<br/>**.getText**( { *charSetNum* : Integer { , *breakMode* : Integer } } ) : Text



|Parameter|Type||Description|
|---|---|---|---|
|charSetName |Text |-> |Name of character set|
|charSetNum |Integer |-> |Number of character set|
|breakMode|Integer |-> |Processing mode for line breaks|
|Result |Text  |<- |Text from the document|

#### Description

The `.getText()` function returns the contents of the file as text .

Optionally, you can designate the character set to be used for reading the contents. You can pass either:

* in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
* or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by Qodly, refer to the description of the `convertFromText` command.

If the document contains a Byte Order Mark (BOM), Qodly uses the character set that it has set instead of the one specified in *charSetName* or *charSetNum* (this parameter is then ignored).
If the document does not contain a BOM and if *charSetName* or *charSetNum* is omitted, by default Qodly uses the "UTF-8" character set.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters in the document. The following constants of the "System Documents" theme are available:

|Constant | Value| Comment|
|---|---|---|
|`Document unchanged`|0|No processing|
|`Document with native format`|1|(Default) Line breaks are converted to the native format of the operating system: CR (carriage return) under OS X, CRLF (carriage return + line feed) under Windows|
|`Document with CRLF`|2|Line breaks are converted to Windows format: CRLF (carriage return + line feed)|
|`Document with CR`|3|Line breaks are converted to OS X format: CR (carriage return)|
|`Document with LF`|4|Line breaks are converted to Unix format: LF (line feed)|

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

**Returned value**

Text of the file.

#### Example

Given the following text document (fields are separated by tabs):

```4d
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

When you execute this code:

```4d
 var 
 myFile=Folder(fk documents folder).file("Billing.txt") //UTF-8 by default
 txt=myFile.getText()
```

... you get the following for `txt`:

"id\tname\tprice\tvat\r\n3\tthé\t1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"

with `\t` (tab) as separator and `\r\n` (CRLF) as line delimiter.

Here is another example with the same file, but a different line delimiter:

```4d
 txt=myFile.getText("UTF-8", Document with LF)
```

In this case, the contents of `txt` are as follows:

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

This time `\n` (LF) is used as line delimiter.


