---
id: FileHandleClass
title: FileHandle
---

The `FileHandle` class has functions that allow you to sequentially read from or append contents to an opened [`File`](FileClass.md) object. A file handle can access any part of a document.

File handle objects are created with the [`file.open()`](FileClass.md#open) function.

:::tip

To read or write a whole document at once, you might consider using the [file.getText()](FileClass.md#gettext) and [file.setText()](FileClass.md#settext) functions.

:::

Thanks to the Qodly object *refcounting*, a file handle is automatically deleted when it is no longer referenced and thus, the requested [`File`](FileClass.md) object is automatically closed. Consequently, with file handles you don't need to worry about closing documents.


### Example

```4d
var f : 4D.File
var fhandle : 4D.FileHandle
f=File("/PACKAGE/example.txt")

//Writing line by line from the start
fhandle=f.open("write")
text="Hello World"
For (line, 1, 4)
    fhandle.writeLine(text+String(line))
End for

//Writing line by line from the end
fhandle=f.open("append")
text="Hello New World!"
For (line, 1, 4)
    fhandle.writeLine(text+String(line))
End for

//Reading using a stop character and an object parameter
o=New object()
o.mode="read"
o.charset="UTF-8"
o.breakModeRead=Document with CRLF
stopChar="!"
fhandle=f.open(o)
text=fhandle.readText(stopChar)

//Reading line by line
lines=New collection
fhandle=f.open("read")
While (Not(fhandle.eof))
	lines.push(fhandle.readLine())
End while

```

### Functions and properties

File handle objects cannot be shared.

||
|---|
|[**.breakModeRead** : Text](#breakmoderead)&nbsp;&nbsp;&nbsp;&nbsp;the processing mode for line breaks used when reading the file|
|[**.breakModeWrite** : Text](#breakmodewrite)&nbsp;&nbsp;&nbsp;&nbsp;the processing mode for line breaks used when writing to the file|
|[**.charset** : Text](#charset)&nbsp;&nbsp;&nbsp;&nbsp;the charset used when reading from or writing to the file|
|[**.eof** : Boolean](#eof)&nbsp;&nbsp;&nbsp;&nbsp;True is the `offset` has reached the end of the file, and False otherwise|
|[**.getSize()** : Real ](#getsize)&nbsp;&nbsp;&nbsp;&nbsp;returns the current size of the document, expressed in bytes|
|[**.mode** : Text](#mode)&nbsp;&nbsp;&nbsp;&nbsp;the mode in which the file handle was created: "read", "write", or "append"|
|[**.offset** : Real](#offset)&nbsp;&nbsp;&nbsp;&nbsp;the current offset of the data stream (position inside the document)|
|[**.readBlob**( *bytes* : Real ) : [4D.Blob](BlobClass) ](#readblob)&nbsp;&nbsp;&nbsp;&nbsp;returns a blob a *bytes* size from the file, starting from the current position |
|[**.readLine()** : Text ](#readline)&nbsp;&nbsp;&nbsp;&nbsp;returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached|
|[**.readText**( { *stopChar* : Text } ) : Text ](#readtext)&nbsp;&nbsp;&nbsp;&nbsp;returns text from the file, starting from the current position until the first *stopChar* string is encountered (if passed) or the end of file is reached|
|[**.setSize**( *size* : Real )](#setsize)&nbsp;&nbsp;&nbsp;&nbsp;sets a new *size* in bytes for the document|
|[**.writeBlob**( *blob* : 4D.Blob ) ](#writeblob)&nbsp;&nbsp;&nbsp;&nbsp;writes *blob* into the file, starting from the current position |
|[**.writeLine**( *lineOfText* : Text ) ](#writeline)&nbsp;&nbsp;&nbsp;&nbsp;writes *lineOfText* content at the current position and inserts an end-of-line delimiter|
|[**.writeText**( *textToWrite* : Text )](#writetext)&nbsp;&nbsp;&nbsp;&nbsp;writes *textToWrite* content at the current position and does not insert a final end-of-line delimiter|




## .breakModeRead

**.breakModeRead** : Text


#### Description

The `.breakModeRead` property returns the processing mode for line breaks used when reading the file.


The `.breakModeRead` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Default is "native".

> The `.breakModeRead` property always contains a text value, even if the `.open()` option was set using a number (constant).


This property is **read-only**.





## .breakModeWrite


**.breakModeWrite** : Text


#### Description

The `.breakModeWrite` property returns the processing mode for line breaks used when writing to the file.

The `.breakModeWrite` property can be defined at the handle creation with the [`file.open()`](FileClass.md#open) function (see [the `.open()` function](FileClass.md#open) for more information). Default is "native".

> The `.breakModeWrite` property always contains a text value, even if the `.open()` option was set using a number (constant).


This property is **read-only**.






## .charset


**.charset** : Text


#### Description

The `.charset` property returns the charset used when reading from or writing to the file.

The charset can be defined at the handle creation with the [`file.open()`](FileClass#open) function. Default is "UTF-8".

This property is **read-only**.





## .eof

**.eof** : Boolean


#### Description

The `.eof` property returns True is the `offset` has reached the end of the file, and False otherwise.

This property is **read-only**.






## .getSize()


**.getSize()** : Real 



|Parameter|Type||Description|
|---|---|---|---|
|Result|Real|<-|Size of the document in bytes|

#### Description

The `.getSize()` function returns the current size of the document, expressed in bytes.

> This function returns the same value as the ([.size](FileClass#size)) property of the `File` class.

#### See also

[.setSize()](#setsize), [file.size](FileClass#size)





## .mode


**.mode** : Text


#### Description

The `.mode` property returns the mode in which the file handle was created: "read", "write", or "append".

The mode can be defined at the handle creation with the [`file.open()`](FileClass#open) function. Default is "read".

This property is **read-only**.






## .offset


**.offset** : Real


#### Description

The `.offset` property returns the current offset of the data stream (position inside the document). The offset value is automatically updated after read and write operations.

Setting the `.offset` will change its current value.

- If the passed value is negative, the `.offset` is set to the start of the file (zero).
- If the passed value is higher than the size of the file,  the `.offset` is set to the end of the file (size of file).

This property is **read/write**.







## .readBlob()

**.readBlob**( *bytes* : Real ) : [4D.Blob](BlobClass) 



|Parameter|Type||Description|
|---|---|---|---|
|*bytes*|Real|->|Number of bytes to be read|
|Result|[4D.Blob](BlobClass)|<-|Bytes read from the file|



#### Description

The `.readBlob()` function returns a blob a *bytes* size from the file, starting from the current position .

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte read.

#### See also

[.writeBlob()](#writeblob)







## .readLine()


**.readLine()** : Text 



|Parameter|Type||Description|
|---|---|---|---|
|Result|Text|<-|Line of text|



#### Description

The `.readLine()` function returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached.

When this function is executed, the current position ([.offset](#offset)) is updated.

> When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.


#### See also

[.readText()](#readtext), [.writeLine()](#writeline)





## .readText()


**.readText**( { *stopChar* : Text } ) : Text 



|Parameter|Type||Description|
|---|---|---|---|
|*stopChar*|Text|->|Character(s) at which to stop reading|
|Result|Text|<-|Text from the file|


#### Description

The `.readText()` function returns text from the file, starting from the current position until the first *stopChar* string is encountered (if passed) or the end of file is reached.

This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeRead`](#breakmoderead) property.  

The *stopChar* character string is not included in the returned text. If you omit the *stopChar* parameter, the whole document text is returned.  

When this function is executed, the ([.offset](#offset)) is placed just after the *stopChar* string.

If the *stopChar* parameter is passed and not found, `.readText()` returns an empty string and the [.offset](#offset) is left untouched.

> When this function is executed for the first time on a file handle, the whole document contents is loaded in a buffer.

#### See also

[.readLine()](#readline), [.writeText()](#writetext)





## .setSize()


**.setSize**( *size* : Real )



|Parameter|Type||Description|
|---|---|---|---|
|size|Real|->|New size of the document in bytes|


#### Description

The `.setSize()` function sets a new *size* in bytes for the document.

If the *size* value is less than the current document size, the document content is truncated from the beginning to get the new *size* .

#### See also

[.getSize()](#getsize), [file.size](FileClass#size)





## .writeBlob()


**.writeBlob**( *blob* : 4D.Blob ) 



|Parameter|Type||Description|
|---|---|---|---|
|*blob*|[4D.Blob](BlobClass)|->|Blob to write in the file|


#### Description

The `.writeBlob()` function writes *blob* into the file, starting from the current position .

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte written.

#### See also

[.readBlob()](#readblob)






## .writeLine()


**.writeLine**( *lineOfText* : Text ) 



|Parameter|Type||Description|
|---|---|---|---|
|*lineOfText*|Text|->|Text to write|


#### Description

The `.writeLine()` function writes *lineOfText* content at the current position and inserts an end-of-line delimiter (unlike the [.writeText()](#writetext) function). By default, a native end-of-line delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.  

When this function is executed, the current position ([.offset](#offset)) is updated after the end-of-line delimiter.

#### See also

[.breakModeWrite](#breakmodewrite), [.readLine()](#readline), [.writeText()](#writetext)





## .writeText()


**.writeText**( *textToWrite* : Text )



|Parameter|Type||Description|
|---|---|---|---|
|*textToWrite*|Text|->|Text to write|


#### Description

The `.writeText()` function writes *textToWrite* content at the current position and does not insert a final end-of-line delimiter (unlike the [.writeLine()](#writeline) function). This function replaces all original end-of-line delimiters. By default, the native delimiter is used, but you can define another delimiter when [opening the file handle](FileClass.md#open) by setting the [`.breakModeWrite`](#breakmodewrite) property.  

When this function is executed, the current position ([.offset](#offset)) is updated after the next end-of-line delimiter.

#### See also

[.breakModeWrite](#breakmodewrite), [.readText()](#readtext), [.writeLine()](#writeline)


