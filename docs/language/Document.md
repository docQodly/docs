---
id: Document
title: Document Class
---

## Description


<!-- REF document.exists.Desc -->
## .exists


<!-- REF #document.exists.Syntax -->**.exists** : boolean<!-- END REF -->

#### Description

The `.exists` property returns <!-- REF #document.exists.Summary -->true if the file exists on disk<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.extension.Desc -->

## .extension


<!-- REF #document.extension.Syntax -->**.extension** : string<!-- END REF -->

#### Description

The `.extension` property returns <!-- REF #document.extension.Summary -->the extension of the file name (if any)<!-- END REF -->. An extension always starts with ".". The property returns an empty string if the file name does not have an extension.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.fullName.Desc -->
## .fullName


<!-- REF #document.fullName.Syntax -->**.fullName** : string<!-- END REF -->

#### Description

The `.fullName` property returns <!-- REF #document.fullName.Summary -->the full name of the file, including its extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.hidden.Desc -->
## .hidden



<!-- REF #document.hidden.Syntax -->**.hidden** : boolean<!-- END REF -->

#### Description

The `.hidden` property returns <!-- REF #document.hidden.Summary -->true if the file is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

This property is **read/write**.

<!-- END REF -->

<!-- REF document.isAlias.Desc -->
## .isAlias

<!-- REF #document.isAlias.Syntax -->**.isAlias** : boolean<!-- END REF -->

#### Description

The `.isAlias` property returns <!-- REF #document.isAlias.Summary -->true if the file is an alias, a shortcut, or a symbolic link<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.isFile.Desc -->
## .isFile


<!-- REF #document.isFile.Syntax -->**.isFile** : boolean<!-- END REF -->

#### Description

The `.isFile` property returns <!-- REF #document.isFile.Summary -->always true for a file<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.isFolder.Desc -->
## .isFolder


<!-- REF #document.isFolder.Syntax -->**.isFolder** : boolean<!-- END REF -->

#### Description

The `.isFolder` property returns <!-- REF #document.isFolder.Summary -->always false for a file<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.isWritable.Desc -->
## .isWritable


<!-- REF #document.isWritable.Syntax -->**.isWritable** : boolean<!-- END REF -->

#### Description

The `.isWritable` property returns <!-- REF #document.isWritable.Summary -->true if the file exists on disk and is writable<!-- END REF -->.

>The property checks the ability of the application to write on the disk (access rights), it does not solely rely on the *writable* attribute of the file.

This property is **read-only**.

**Example**  

```qs
 myFile=file("/RESOURCES/Archives/ReadMe.txt")
 if(myFile.isWritable)
    myNewFile=myFile.setText("Added text")
 end
```

<!-- END REF -->

<!-- REF document.modificationDate.Desc -->
## .modificationDate


<!-- REF #document.modificationDate.Syntax -->**.modificationDate** : date<!-- END REF -->

#### Description

The `.modificationDate` property returns <!-- REF #document.modificationDate.Summary -->the date of the file's last modification<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.modificationTime.Desc -->
## .modificationTime


<!-- REF #document.modificationTime.Syntax -->**.modificationTime** : time<!-- END REF -->

##### Description

The `.modificationTime` property returns <!-- REF #document.modificationTime.Summary -->the time of the file's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.

<!-- END REF -->

<!-- REF document.name.Desc -->
## .name


<!-- REF #document.name.Syntax -->**.name** : string<!-- END REF -->

#### Description

The `.name` property returns <!-- REF #document.name.Summary -->the name of the file without extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.original.Desc -->
## .original


<!-- REF #document.original.Syntax -->**.original** : 4D.File<br/>**.original** : 4D.Folder<!-- END REF -->

#### Description

The `.original` property returns <!-- REF #document.original.Summary -->the target element for an alias, a shortcut, or a symbolic link file<!-- END REF -->. The target element can be:

* a file object
* a folder object

For non-alias files, the property returns the same file object as the file.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.parent.Desc -->
## .parent


<!-- REF #document.parent.Syntax -->**.parent** : 4D.Folder<!-- END REF -->

#### Description

The `.parent` property returns <!-- REF #document.parent.Summary -->the parent folder object of the file<!-- END REF -->. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

This property is **read-only**.

<!-- END REF -->

<!-- REF document.path.Desc -->
## .path

<!-- REF #document.path.Syntax -->**.path** : string<!-- END REF -->

#### Description

The `.path` property returns <!-- REF #document.path.Summary -->the POSIX path of the file<!-- END REF -->. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

This property is **read-only**.

<!-- END REF -->


<!-- REF document.size.Desc -->
## .size


<!-- REF #document.size.Syntax -->**.size** : number<!-- END REF -->

#### Description

The `.size` property returns <!-- REF #document.size.Summary -->the size of the file expressed in bytes<!-- END REF -->. If the file does not exist on disk, the size is 0.

This property is **read-only**.

<!-- END REF -->


<!-- REF document.copyTo().Desc -->
## .copyTo()


<!-- REF #document.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D.Folder { , *newName* : string } { , *overwrite* : integer } ) : 4D.File<!-- END REF -->


<!-- REF #document.copyTo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder | 4D.Folder |->|Destination folder|
|newName|string|->|Name for the copy|
|overwrite|integer|->|`fk overwrite` to replace existing elements|
|Result|4D.File|<-|Copied file|<!-- END REF -->

#### Description

The `.copyTo()` function <!-- REF #document.copyTo().Summary -->copies the `file` object into the specified *destinationFolder* <!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file is copied with the name of the original file. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a file with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

|Constant|Value|Comment|
|---|---|---|
|`fk overwrite`|4|Overwrite existing elements, if any|

**Returned value**

The copied `file` object.

#### Example

You want to copy a picture *file* from the user's document folder to the application folder:

```qs
var source, copy : 4D.File
source=file("/RESOURCES/Pictures/photo.png")
copy=source.copyTo(folder("/PACKAGE"),fk overwrite)
```

<!-- END REF -->

<!-- REF document.getContent().Desc -->
## .getContent()


<!-- REF #document.getContent().Syntax -->**.getContent**() : 4D.Blob<!-- END REF -->


<!-- REF #document.getContent().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|Result | 4D.Blob |<-|File content|<!-- END REF -->

#### Description

The `.getContent()` function  <!-- REF #document.getContent().Summary -->returns a `4D.Blob` object containing the entire content of a file<!-- END REF -->. For information on blobs, please refer to the [blob](basics/lang-blob.md) section.

**Returned value**

A `4D.Blob` object.

#### Example

To save a document's contents in a `Blob` attribute:

```qs
 var myFile : 4D.File
 var vEntity : cs.myClassEntity
 
 myFile=file("/RESOURCES/Archives/data.txt")
 vEntity=ds.myClass.all().first() //get an entity
 vEntity.infoBlob=myFile.getContent()
 vEntity.save()

```

<!-- END REF -->


<!-- REF document.getText().Desc -->
## .getText()


<!-- REF #document.getText().Syntax -->**.getText**( { *charSetName* : string { , *breakMode* : integer } } ) : string<br/>**.getText**( { *charSetNum* : integer { , *breakMode* : integer } } ) : string<!-- END REF -->


<!-- REF #document.getText().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|charSetName |string |-> |Name of character set|
|charSetNum |integer |-> |Number of character set|
|breakMode|integer |-> |Processing mode for line breaks|
|Result |string  |<- |String from the document|<!-- END REF -->

#### Description

The `.getText()` function <!-- REF #document.getText().Summary -->returns the contents of the file as text <!-- END REF -->.

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

```qs
id name price vat
3 thé 1.06€ 19.6
2 café 1.05€ 19.6
```

When you execute this code:

```qs
 var myFile : 4D.File
 var txt : string
 myFile=file("/RESOURCES/Billing.txt") //UTF-8 by default
 txt=myFile.getText()
```

... you get the following for `txt`:

"id\tname\tprice\tvat\r\n3\tthé\t1.06€\t19.6\r\n2\tcafé\t1.05€\t19.6"

with `\t` (tab) as separator and `\r\n` (CRLF) as line delimiter.

Here is another example with the same file, but a different line delimiter:

```qs
 txt=myFile.getText("UTF-8", Document with LF)
```

In this case, the contents of `txt` are as follows:

"id\tname\tprice\tvat\n3\tthé\t1.06€\t19.6\n2\tcafé\t1.05€\t19.6"

This time `\n` (LF) is used as line delimiter.

<!-- END REF -->
