---
id: lang-blob
title: BLOB
---

A BLOB (Binary Large OBject) attribute, variable or expression is a contiguous series of bytes that can be treated as one whole object, or whose bytes can be addressed individually.

A blob is loaded into memory in its entirety. A blob variable is held and exists in memory only. A blob attribute is loaded into memory from the disk, like the rest of the entity to which it belongs. Like other attribute types that can retain a large amount of data (such as the picture type), blob attributes are not duplicated in memory when you modify an entity. 

## Blob Types

Using the QodlyScript language, there are two ways to handle a blob:

- **as a scalar value**: a blob can be stored in a blob variable or attribute and altered.
- **as an object (`4D.Blob`)**: a `4D.Blob` is a blob object. You can encapsulate a blob or part of it in a `4D.Blob` without altering the original blob. This method is called [boxing](<https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing>). For more info on how to instantiate a `4D.Blob`, see [Blob class](../BlobClass.md).

Each blob type has its advantages. Use the following table to determine which one suits your needs:

|                                      | Blob | 4D.Blob |
| ------------------------------------ | :--: | :-----: |
| Alterable                            | Yes  |   No    |
| Shareable in objects and collections |  No  |   Yes   |
| Passed by reference\*                |  No  |   Yes   |
| Performance when accessing bytes     |  +   |    -    |
| Maximum size                         | 2GB  | Memory  |

\*Unlike the QodlyScript commands designed to take a scalar blob as a parameter, passing a scalar blob to a method duplicates it in memory. When working with methods, using blob objects (`4D.Blob`) is more efficient, as they are passed by reference.

:::note

By default, the maximum size of scalar blobs is set to 2GB, but this size limit may be lower depending on the available space.

:::

You cannot use operators on blobs.

## Checking if a variable holds a scalar blob or a `4D.Blob`

Use the [`valueType`](../language.md#valuetype) command to determine if a value is of type Blob or Object.
To check that an object is a blob object (`4D.Blob`), use [`instanceOf`](../objects.md#instanceof):

```qs
var myBlob: blob
var myBlobObject: 4D.Blob
var is4DBlob: boolean
var type: integer
myBlobObject=4D.Blob.new()

type=valueType(myblobObject) // 38 (object)
is4DBlob=instanceOf(myblobObject,4D.Blob) //True
```

## Passing blobs as parameters

You can pass a scalar blob or a `4D.Blob` to any QodlyScript command that takes a blob as a parameter:

```qs
var myBlob, myNewBlob: 4D.Blob
var myString: string
convertFromString("Hello, World!", "UTF-8", myBlob)
myString=convertToText(myBlob,"UTF-8")
 //myString contains "Hello, World!"
myNewBlob=myBlob.slice(0,5)
myString=convertToText(myNewBlob,"UTF-8")
 //myString contains "Hello"
```


You can pass blobs and blob objects (`4D.Blob`) to methods. Keep in mind that unlike blob objects, which are passed by reference, scalar blobs are duplicated in memory when passed to methods.



## Automatic conversion of blob type

QodlyScript automatically converts scalar blobs to blob objects, and vice versa, when they're assigned to each other. For example:

```qs
// Create a variable of type Blob and an object variable
var myBlob: blob
var myObject : object

// Assign that blob to a property of myObject named "blob"
myObject=newObject("blob",myBlob)

// The blob stored in myBlob is automatically converted to a 4D.Blob
var type : boolean
type=instanceOf(myObject.blob,4D.Blob)  //true

// Conversion from 4D.Blob to blob
myBlob=myObject.blob
type=valueType(myBlob) // blob
```

:::note

When converting a `4D.Blob` to a scalar blob, if the size of the `4D.Blob` exceeds the maximum size for scalar blobs, the resulting scalar blob is empty. For example, when the maximum size for scalar blobs is 2GB, if you convert a `4D.Blob` of 2.5GB to a scalar blob, you obtain an empty blob.

:::


## Individually accessing bytes in a blob

#### Accessing a scalar blob's bytes

You can access individual bytes of a scalar blob using curly brackets `{}`. Within a blob, bytes are numbered from 0 to N-1, where N is the size of the blob:

```qs
  // Declare a variable of type Blob
var myBlob : blob
var byte : integer
convertFromText("Hello, World!", "UTF-8", myBlob)
byte=myBlob{1} //101 (character code for "e")

```

Since you can address all the bytes of a blob individually, you can store whatever you want in a Blob variable or attribute.

#### Accessing a `4D.Blob`'s bytes

Use square brackets `[]` to directly access a specific byte in a `4D.Blob`

```qs
var myBlob : 4D.Blob
var byte : integer
convertFromText("Hello, World!", "UTF-8", myBlob)
byte=myBlob[1] //101 
```

Since a `4D.Blob` cannot be altered, you can read the bytes of a `4D.Blob` using this syntax, but not modify them.

## Modifying a scalar blob

Unlike blob objects, scalar blobs can be altered. For example:

```qs
var myBlob : blob
var myString : string
convertFromText("Hello, World!", "UTF-8", myBlob)
myBlob{1}=characterCode("A") //replace the 1st byte
myString=convertToText(myBlob,"UTF-8") //HAllo, World!
```
