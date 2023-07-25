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
f=file("/PACKAGE/example.txt")

//Writing line by line from the start
fhandle=f.open("write")
text="Hello World"
for (line, 1, 4)
    fhandle.writeLine(text+string(line))
end

//Writing line by line from the end
fhandle=f.open("append")
text="Hello New World!"
for (line, 1, 4)
    fhandle.writeLine(text+string(line))
end

//Reading using a stop character and an object parameter
o=newObject()
o.mode="read"
o.charset="UTF-8"
o.breakModeRead=Document with CRLF
stopChar="!"
fhandle=f.open(o)
text=fhandle.readText(stopChar)

//Reading line by line
lines=newCollection()
fhandle=f.open("read")
while (Not(fhandle.eof))
	lines.push(fhandle.readLine())
end

```

### Functions and properties

file handle objects cannot be shared.

||
|---|
|[<!-- INCLUDE #fileHandleClass.breakModeRead.Syntax -->](#breakmoderead)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.breakModeRead.Summary -->|
|[<!-- INCLUDE #fileHandleClass.breakModeWrite.Syntax -->](#breakmodewrite)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.breakModeWrite.Summary -->|
|[<!-- INCLUDE #fileHandleClass.charset.Syntax -->](#charset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.charset.Summary -->|
|[<!-- INCLUDE #fileHandleClass.eof.Syntax -->](#eof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.eof.Summary -->|
|[<!-- INCLUDE #FileHandleClass.file.Syntax -->](#file)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.file.Summary -->|
|[<!-- INCLUDE #fileHandleClass.getSize().Syntax -->](#getsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.getSize().Summary -->|
|[<!-- INCLUDE #fileHandleClass.mode.Syntax -->](#mode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.mode.Summary -->|
|[<!-- INCLUDE #fileHandleClass.offset.Syntax -->](#offset)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.offset.Summary -->|
|[<!-- INCLUDE #fileHandleClass.readBlob().Syntax -->](#readblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.readBlob().Summary -->|
|[<!-- INCLUDE #fileHandleClass.readLine().Syntax -->](#readline)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.readLine().Summary -->|
|[<!-- INCLUDE #fileHandleClass.readText().Syntax -->](#readtext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.readText().Summary -->|
|[<!-- INCLUDE #fileHandleClass.setSize().Syntax -->](#setsize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.setSize().Summary -->|
|[<!-- INCLUDE #fileHandleClass.writeBlob().Syntax -->](#writeblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.writeBlob().Summary -->|
|[<!-- INCLUDE #fileHandleClass.writeLine().Syntax -->](#writeline)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.writeLine().Summary -->|
|[<!-- INCLUDE #fileHandleClass.writeText().Syntax -->](#writetext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #fileHandleClass.writeText().Summary -->|



<!-- REF fileHandleClass.breakModeRead.Desc -->
## .breakModeRead

<!-- REF #fileHandleClass.breakModeRead.Syntax -->**.breakModeRead** : string<!-- END REF -->


#### Description

The `.breakModeRead` property returns <!-- REF #fileHandleClass.breakModeRead.Summary -->the processing mode for line breaks used when reading the file<!-- END REF -->.


The `.breakModeRead` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Default is "native".

> The `.breakModeRead` property always contains a text value, even if the `.open()` option was set using a number (constant).


This property is **read-only**.

<!-- END REF -->


<!-- REF fileHandleClass.breakModeWrite.Desc -->
## .breakModeWrite


<!-- REF #fileHandleClass.breakModeWrite.Syntax -->**.breakModeWrite** : string<!-- END REF -->


#### Description

The `.breakModeWrite` property returns <!-- REF #fileHandleClass.breakModeWrite.Summary -->the processing mode for line breaks used when writing to the file<!-- END REF -->.

The `.breakModeWrite` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Default is "native".

> The `.breakModeWrite` property always contains a text value, even if the `.open()` option was set using a number (constant).


This property is **read-only**.

<!-- END REF -->



<!-- REF fileHandleClass.charset.Desc -->
## .charset


<!-- REF #fileHandleClass.charset.Syntax -->**.charset** : string<!-- END REF -->


#### Description

The `.charset` property returns <!-- REF #fileHandleClass.charset.Summary -->the charset used when reading from or writing to the file<!-- END REF -->.

The charset can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function. Default is "UTF-8".

This property is **read-only**.

<!-- END REF -->


<!-- REF fileHandleClass.eof.Desc -->
## .eof

<!-- REF #fileHandleClass.eof.Syntax -->**.eof** : boolean<!-- END REF -->


#### Description

The `.eof` property returns <!-- REF #fileHandleClass.eof.Summary -->True is the `offset` has reached the end of the file, and False otherwise<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->


<!-- REF fileHandleClass.file.Desc -->
## .file

<!-- REF #fileHandleClass.file.Syntax -->**.file** : 4D.File<!-- END REF -->


#### Description

The `.file` property returns <!-- REF #fileHandleClass.file.Summary -->the [4D.File](FileClass.md) object on which the handle has been created<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->


<!-- REF fileHandleClass.getSize().Desc -->
## .getSize()


<!--REF #fileHandleClass.getSize().Syntax -->**.getSize()** : number <!-- END REF -->


<!--REF #fileHandleClass.getSize().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|number|<-|Size of the document in bytes|<!-- END REF -->

#### Description

The `.getSize()` function <!-- REF #fileHandleClass.getSize().Summary -->returns the current size of the document, expressed in bytes<!-- END REF -->.

> This function returns the same value as the ([.size](FileClass.md#size)) property of the `file` class.

#### See also

[.setSize()](#setsize), [file.size](FileClass.md#size)

<!-- END REF -->


<!-- REF fileHandleClass.mode.Desc -->
## .mode


<!-- REF #fileHandleClass.mode.Syntax -->**.mode** : string<!-- END REF -->


#### Description

The `.mode` property returns <!-- REF #fileHandleClass.mode.Summary -->the mode in which the file handle was created: "read", "write", or "append"<!-- END REF -->.

The mode can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function. Default is "read".

This property is **read-only**.

<!-- END REF -->



<!-- REF fileHandleClass.offset.Desc -->
## .offset


<!-- REF #fileHandleClass.offset.Syntax -->**.offset** : number<!-- END REF -->


#### Description

The `.offset` property returns <!-- REF #fileHandleClass.offset.Summary -->the current offset of the data stream (position inside the document)<!-- END REF -->. The offset value is automatically updated after read and write operations.

Setting the `.offset` will change its current value.

- If the passed value is negative, the `.offset` is set to the start of the file (zero).
- If the passed value is higher than the size of the file,  the `.offset` is set to the end of the file (size of file).

This property is **read/write**.


<!-- END REF -->



<!-- REF fileHandleClass.readBlob().Desc -->
## .readBlob()

<!--REF #fileHandleClass.readBlob().Syntax -->**.readBlob**( *bytes* : number ) : [4D.Blob](BlobClass) <!-- END REF -->


<!--REF #fileHandleClass.readBlob().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*bytes*|number|->|Number of bytes to be read|
|Result|[4D.Blob](BlobClass)|<-|Bytes read from the file|<!-- END REF -->



#### Description

The `.readBlob()` function <!-- REF #fileHandleClass.readBlob().Summary -->returns a blob a *bytes* size from the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte read.

#### See also

[.writeBlob()](#writeblob)

<!-- END REF -->




<!-- REF fileHandleClass.readLine().Desc -->
## .readLine()


<!--REF #fileHandleClass.readLine().Syntax -->**.readLine()** : string <!-- END REF -->


<!--REF #fileHandleClass.readLine().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|string|<-|Line of text|<!-- END REF -->



#### Description

The `.readLine()` function <!-- REF #fileHandleClass.readLine().Summary -->returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached<!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated.

> When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.


#### See also

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->


<!-- REF fileHandleClass.readText().Desc -->
## .readText()


<!--REF #fileHandleClass.readText().Syntax -->**.readText**( { *stopChar* : string } ) : string <!-- END REF -->


<!--REF #fileHandleClass.readText().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*stopChar*|string|->|Character(s) at which to stop reading|
|Result|string|<-|string from the file|<!-- END REF -->


#### Description

The `.readText()` function <!-- REF #fileHandleClass.readText().Summary -->returns text from the file, starting from the current position until the first *stopChar* string is encountered (if passed) or the end of file is reached<!-- END REF -->.

This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeRead`](#breakmoderead) property.  

The *stopChar* character string is not included in the returned text. If you omit the *stopChar* parameter, the whole document text is returned.  

When this function is executed, the ([.offset](#offset)) is placed just after the *stopChar* string.

If the *stopChar* parameter is passed and not found, `.readText()` returns an empty string and the [.offset](#offset) is left untouched.

> When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.

#### See also

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF fileHandleClass.setSize().Desc -->
## .setSize()


<!--REF #fileHandleClass.setSize().Syntax -->**.setSize**( *size* : number )<!-- END REF -->


<!--REF #fileHandleClass.setSize().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|size|number|->|New size of the document in bytes|<!-- END REF -->


#### Description

The `.setSize()` function <!-- REF #fileHandleClass.setSize().Summary -->sets a new *size* in bytes for the document<!-- END REF -->.

If the *size* value is less than the current document size, the document content is truncated from the beginning to get the new *size* .

#### See also

[.getSize()](#getsize), [file.size](FileClass.md#size)

<!-- END REF -->


<!-- REF fileHandleClass.writeBlob().Desc -->
## .writeBlob()


<!--REF #fileHandleClass.writeBlob().Syntax -->**.writeBlob**( *blob* : 4D.Blob ) <!-- END REF -->


<!--REF #fileHandleClass.writeBlob().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*blob*|[4D.Blob](BlobClass)|->|Blob to write in the file|<!-- END REF -->



#### Description

The `.writeBlob()` function <!-- REF #fileHandleClass.writeBlob().Summary -->writes *blob* into the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte written.

#### See also

[.readBlob()](#readblob)

<!-- END REF -->



<!-- REF fileHandleClass.writeLine().Desc -->
## .writeLine()


<!--REF #fileHandleClass.writeLine().Syntax -->**.writeLine**( *lineOfText* : string ) <!-- END REF -->


<!--REF #fileHandleClass.writeLine().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*lineOfText*|string|->|string to write|<!-- END REF -->


#### Description

The `.writeLine()` function <!-- REF #fileHandleClass.writeLine().Summary -->writes *lineOfText* content at the current position and inserts an end-of-line delimiter<!-- END REF --> (unlike the [.writeText()](#writetext) function). By default, a native end-of-line delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.  

When this function is executed, the current position ([.offset](#offset)) is updated after the end-of-line delimiter.

#### See also

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF fileHandleClass.writeText().Desc -->
## .writeText()


<!--REF #fileHandleClass.writeText().Syntax -->**.writeText**( *textToWrite* : string )<!-- END REF -->


<!--REF #fileHandleClass.writeText().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*textToWrite*|string|->|string to write|<!-- END REF -->


#### Description

The `.writeText()` function <!-- REF #fileHandleClass.writeText().Summary -->writes *textToWrite* content at the current position and does not insert a final end-of-line delimiter<!-- END REF --> (unlike the [.writeLine()](#writeline) function). This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.  

When this function is executed, the current position ([.offset](#offset)) is updated after the next end-of-line delimiter.

#### See also

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->
