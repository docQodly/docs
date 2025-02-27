---
id: FileHandleClass
title: FileHandle
---

The `FileHandle` class has functions that allow you to sequentially read from or append contents to an opened [`file`](FileClass.md) object. A file handle can access any part of a document.

File handle objects are created with the [`file.open()`](FileClass.md#open) function.

:::tip

To read or write a whole document at once, you might consider using the [file.getText()](FileClass.md#gettext) and [file.setText()](FileClass.md#settext) functions.

:::

Thanks to the Qodly object *refcounting*, a file handle is automatically deleted when it is no longer referenced and thus, the requested [`file`](FileClass.md) object is automatically closed. Consequently, with file handles you don't need to worry about closing documents.


### Example

```qs
var f : 4D.File
var fhandle : 4D.FileHandle
f = file("/PACKAGE/example.txt")

//Writing line by line from the start
fhandle = f.open("write")
text = "Hello World"
for (line, 1, 4)
    fhandle.writeLine(text+string(line))
end

//Writing line by line from the end
fhandle = f.open("append")
text = "Hello New World!"
for (line, 1, 4)
    fhandle.writeLine(text+string(line))
end

//Reading using a stop character and an object parameter
o = newObject()
o.mode = "read"
o.charset = "UTF-8"
o.breakModeRead = Document with CRLF
stopChar = "!"
fhandle = f.open(o)
text = fhandle.readText(stopChar)

//Reading line by line
lines = newCollection()
fhandle = f.open("read")
while (Not(fhandle.eof))
	lines.push(fhandle.readLine())
end

```

### Functions and properties

File handle objects cannot be shared.

||
|---|
|[<!-- INCLUDE #FileHandleClass.breakModeRead.Syntax -->](#breakmoderead)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.breakModeRead.Summary -->|
|[<!-- INCLUDE #FileHandleClass.breakModeWrite.Syntax -->](#breakmodewrite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.breakModeWrite.Summary -->|
|[<!-- INCLUDE #FileHandleClass.charset.Syntax -->](#charset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.charset.Summary -->|
|[<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.eof.Summary -->|
|[<!-- INCLUDE #FileHandleClass.file.Syntax -->](./commands/file)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.file.Summary -->|
|[<!-- INCLUDE #FileHandleClass.getSize().Syntax -->](#getsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.getSize().Summary -->|
|[<!-- INCLUDE #FileHandleClass.mode.Syntax -->](#mode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.mode.Summary -->|
|[<!-- INCLUDE #FileHandleClass.offset.Syntax -->](#offset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.offset.Summary -->|
|[<!-- INCLUDE #FileHandleClass.readBlob().Syntax -->](#readblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readBlob().Summary -->|
|[<!-- INCLUDE #FileHandleClass.readLine().Syntax -->](#readline)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readLine().Summary -->|
|[<!-- INCLUDE #FileHandleClass.readText().Syntax -->](#readtext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readText().Summary -->|
|[<!-- INCLUDE #FileHandleClass.setSize().Syntax -->](#setsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.setSize().Summary -->|
|[<!-- INCLUDE #FileHandleClass.writeBlob().Syntax -->](#writeblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeBlob().Summary -->|
|[<!-- INCLUDE #FileHandleClass.writeLine().Syntax -->](#writeline)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeLine().Summary -->|
|[<!-- INCLUDE #FileHandleClass.writeText().Syntax -->](#writetext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeText().Summary -->|



<!-- REF FileHandleClass.breakModeRead.Desc -->
## .breakModeRead

<!-- REF #FileHandleClass.breakModeRead.Syntax -->**.breakModeRead** : string<!-- END REF -->


#### Description

The `.breakModeRead` property returns <!-- REF #FileHandleClass.breakModeRead.Summary -->the processing mode for line breaks used when reading the file<!-- END REF -->.


The `.breakModeRead` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Default is "native".

> The `.breakModeRead` property always contains a text value, even if the `.open()` option was set using a number (constant).


This property is **read-only**.

<!-- END REF -->


<!-- REF FileHandleClass.breakModeWrite.Desc -->
## .breakModeWrite


<!-- REF #FileHandleClass.breakModeWrite.Syntax -->**.breakModeWrite** : string<!-- END REF -->


#### Description

The `.breakModeWrite` property returns <!-- REF #FileHandleClass.breakModeWrite.Summary -->the processing mode for line breaks used when writing to the file<!-- END REF -->.

The `.breakModeWrite` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Default is "native".

> The `.breakModeWrite` property always contains a text value, even if the `.open()` option was set using a number (constant).


This property is **read-only**.

<!-- END REF -->



<!-- REF FileHandleClass.charset.Desc -->
## .charset


<!-- REF #FileHandleClass.charset.Syntax -->**.charset** : string<!-- END REF -->


#### Description

The `.charset` property returns <!-- REF #FileHandleClass.charset.Summary -->the charset used when reading from or writing to the file<!-- END REF -->.

The charset can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function. Default is "UTF-8".

This property is **read-only**.

<!-- END REF -->


<!-- REF FileHandleClass.eof.Desc -->
## .eof

<!-- REF #FileHandleClass.eof.Syntax -->**.eof** : boolean<!-- END REF -->


#### Description

The `.eof` property returns <!-- REF #FileHandleClass.eof.Summary -->True is the `offset` has reached the end of the file, and False otherwise<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->


<!-- REF FileHandleClass.file.Desc -->
## .file

<!-- REF #FileHandleClass.file.Syntax -->**.file** : 4D.File<!-- END REF -->


#### Description

The `.file` property returns <!-- REF #FileHandleClass.file.Summary -->the [4D.File](FileClass.md) object on which the handle has been created<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->


<!-- REF FileHandleClass.getSize().Desc -->
## .getSize()


<!--REF #FileHandleClass.getSize().Syntax -->**.getSize()** : number <!-- END REF -->


<!--REF #FileHandleClass.getSize().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|number|&#8592;|Size of the document in bytes|<!-- END REF -->

#### Description

The `.getSize()` function <!-- REF #FileHandleClass.getSize().Summary -->returns the current size of the document, expressed in bytes<!-- END REF -->.

> This function returns the same value as the ([.size](FileClass.md#size)) property of the `file` class.

#### See also

[.setSize()](#setsize), [file.size](FileClass.md#size)

<!-- END REF -->


<!-- REF FileHandleClass.mode.Desc -->
## .mode


<!-- REF #FileHandleClass.mode.Syntax -->**.mode** : string<!-- END REF -->


#### Description

The `.mode` property returns <!-- REF #FileHandleClass.mode.Summary -->the mode in which the file handle was created: "read", "write", or "append"<!-- END REF -->.

The mode can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function. Default is "read".

This property is **read-only**.

<!-- END REF -->



<!-- REF FileHandleClass.offset.Desc -->
## .offset


<!-- REF #FileHandleClass.offset.Syntax -->**.offset** : number<!-- END REF -->


#### Description

The `.offset` property returns <!-- REF #FileHandleClass.offset.Summary -->the current offset of the data stream (position inside the document)<!-- END REF -->. The offset value is automatically updated after read and write operations.

Setting the `.offset` will change its current value.

- If the passed value is negative, the `.offset` is set to the start of the file (zero).
- If the passed value is higher than the size of the file,  the `.offset` is set to the end of the file (size of file).

This property is **read/write**.


:::caution

When a file handle is created, the `.offset` value is a number of bytes. However, the unit of offset measurement differs according to the reading function: with [`readBlob()`](#readblob), `.offset` is a number of bytes, whereas with [`readText()`](#readtext)/[`readLine()`](#readline) it is a number of characters. Depending on the file's character set, a character corresponds to one or more bytes. So, if you start reading with `readBlob()` and then call `readText()`, text reading will start at an inconsistent position. It is therefore essential to set the `.offset` property yourself if you switch from reading/writing blob to reading/writing text in the same filehandle. For example:

```4d
  // Open a european text file using utf-16 encoding (two bytes per character)
  // We want to read the first 10 characters as bytes, then the remaining as text.
var vFileHandle : 4D.File
var vBlob : 4D.Blob
var vString : string
vFileHandle = file("/SOURCES/Shared/sample_utf_16.txt").open()
  // read the 20 first bytes (i.e. 10 characters)
vBlob = vFileHandle.readBlob(20) // vFileHandle.offset=20
  // then read all text skipping the first 10 characters we just read in previous blob
  // because we are now reading text instead of bytes, the meaning of 'offset' is not the same.
  // We need to translate it from bytes to characters.
vFileHandle.offset = 10 // ask to skip 10 utf-16 characters (20 bytes)
vString = vFileHandle.readText()
```

:::


<!-- END REF -->



<!-- REF FileHandleClass.readBlob().Desc -->
## .readBlob()

<!--REF #FileHandleClass.readBlob().Syntax -->**.readBlob**( *bytes* : number ) : [4D.Blob](BlobClass) <!-- END REF -->


<!--REF #FileHandleClass.readBlob().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*bytes*|number|&#8594;|Number of bytes to be read|
|Result|[4D.Blob](BlobClass)|&#8592;|Bytes read from the file|<!-- END REF -->



#### Description

The `.readBlob()` function <!-- REF #FileHandleClass.readBlob().Summary -->returns a blob a *bytes* size from the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte read.

#### See also

[.writeBlob()](#writeblob)

<!-- END REF -->




<!-- REF FileHandleClass.readLine().Desc -->
## .readLine()


<!--REF #FileHandleClass.readLine().Syntax -->**.readLine()** : string <!-- END REF -->


<!--REF #FileHandleClass.readLine().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|string|&#8592;|Line of text|<!-- END REF -->



#### Description

The `.readLine()` function <!-- REF #FileHandleClass.readLine().Summary -->returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached<!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated.

:::caution Warning

This function assumes that the [`.offset`](#offset) property is a number of characters, not a number of bytes. For more information, see the [.offset description](#offset).

:::


> When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.


#### See also

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->


<!-- REF FileHandleClass.readText().Desc -->
## .readText()


<!--REF #FileHandleClass.readText().Syntax -->**.readText**( \{ *stopChar* : string \} ) : string <!-- END REF -->


<!--REF #FileHandleClass.readText().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*stopChar*|string|&#8594;|Character(s) at which to stop reading|
|Result|string|&#8592;|string from the file|<!-- END REF -->


#### Description

The `.readText()` function <!-- REF #FileHandleClass.readText().Summary -->returns text from the file, starting from the current position until the first *stopChar* string is encountered (if passed) or the end of file is reached<!-- END REF -->.

The *stopChar* character string is not included in the returned text. If you omit the *stopChar* parameter, the whole document text is returned.  

When this function is executed, the ([.offset](#offset)) is placed just after the *stopChar* string.

:::caution Warning

This function assumes that the [`.offset`](#offset) property is a number of characters, not a number of bytes. For more information, see the [.offset description](#offset).

:::

If the *stopChar* parameter is passed and not found, `.readText()` returns an empty string and the [.offset](#offset) is left untouched.

> When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.

#### See also

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF FileHandleClass.setSize().Desc -->
## .setSize()


<!--REF #FileHandleClass.setSize().Syntax -->**.setSize**( *size* : number )<!-- END REF -->


<!--REF #FileHandleClass.setSize().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|size|number|&#8594;|New size of the document in bytes|<!-- END REF -->


#### Description

The `.setSize()` function <!-- REF #FileHandleClass.setSize().Summary -->sets a new *size* in bytes for the document<!-- END REF -->.

If the *size* value is less than the current document size, the document content is truncated from the beginning to get the new *size* .

#### See also

[.getSize()](#getsize), [file.size](FileClass.md#size)

<!-- END REF -->


<!-- REF FileHandleClass.writeBlob().Desc -->
## .writeBlob()


<!--REF #FileHandleClass.writeBlob().Syntax -->**.writeBlob**( *blob* : 4D.Blob ) <!-- END REF -->


<!--REF #FileHandleClass.writeBlob().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*blob*|[4D.Blob](BlobClass)|&#8594;|Blob to write in the file|<!-- END REF -->



#### Description

The `.writeBlob()` function <!-- REF #FileHandleClass.writeBlob().Summary -->writes *blob* into the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte written.

#### See also

[.readBlob()](#readblob)

<!-- END REF -->



<!-- REF FileHandleClass.writeLine().Desc -->
## .writeLine()


<!--REF #FileHandleClass.writeLine().Syntax -->**.writeLine**( *lineOfText* : string ) <!-- END REF -->


<!--REF #FileHandleClass.writeLine().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*lineOfText*|string|&#8594;|string to write|<!-- END REF -->


#### Description

The `.writeLine()` function <!-- REF #FileHandleClass.writeLine().Summary -->writes *lineOfText* content at the current position and inserts an end-of-line delimiter<!-- END REF --> (unlike the [.writeText()](#writetext) function). By default, a native end-of-line delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.  

When this function is executed, the current position ([.offset](#offset)) is updated after the end-of-line delimiter.

#### See also

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF FileHandleClass.writeText().Desc -->
## .writeText()


<!--REF #FileHandleClass.writeText().Syntax -->**.writeText**( *textToWrite* : string )<!-- END REF -->


<!--REF #FileHandleClass.writeText().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*textToWrite*|string|&#8594;|string to write|<!-- END REF -->


#### Description

The `.writeText()` function <!-- REF #FileHandleClass.writeText().Summary -->writes *textToWrite* content at the current position and does not insert a final end-of-line delimiter<!-- END REF --> (unlike the [.writeLine()](#writeline) function). This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.  

When this function is executed, the current position ([.offset](#offset)) is updated after the next end-of-line delimiter.

#### See also

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->
