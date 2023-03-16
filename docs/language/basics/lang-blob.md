---
id: lang-blob
title: BLOB
---

A BLOB (Binary Large OBject) attribute, variable or expression is a contiguous series of bytes that can be treated as one whole object, or whose bytes can be addressed individually.

A blob is loaded into memory in its entirety. A blob variable is held and exists in memory only. A blob attribute is loaded into memory from the disk, like the rest of the entity to which it belongs. Like other attribute types that can retain a large amount of data (such as the picture type), blob attributes are not duplicated in memory when you modify an entity. 

## Blob Types

Using the QodlyScript language, there are two ways to handle a blob:

- **as a scalar value**: a blob can be stored in a blob variable or attribute and altered.
- **as an object (`4D.Blob`)**: a `4D.Blob` is a blob object. You can encapsulate a blob or part of it in a `4D.Blob` without altering the original blob. This method is called [boxing](<https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing>). For more info on how to instantiate a `4D.Blob`, see [Blobs](blob.md).

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

Use the [`Value type`](XXX) command to determine if a value is of type Blob or Object.
To check that an object is a blob object (`4D.Blob`), use [`OB instance of`](XXX):

```4d
var myBlob: Blob
var myBlobObject: 4D.Blob
var is4DBlob: Boolean
var type: Number
myBlobObject=4D.Blob.new()

type=Value type(myblobObject) // 38 (object)
is4DBlob=OB Instance of(myblobObject,4D.Blob)  //True
```

## Passing blobs as parameters

You can pass a scalar blob or a `4D.Blob` to any QuodlyScript command that takes a blob as a parameter:

```4d
var myBlob: 4D.Blob
var myText: Text
CONVERT FROM TEXT("Hello, World!", "UTF-8", myBlob)
myText=BLOB to text(myBlob , UTF8 text without length )
```

Some commands alter the original blob, and thus do not support the `4D.Blob` type:

- [DELETE FROM BLOB](XXX)
- [INSERT IN BLOB](XXX)
- [INTEGER TO BLOB](XXX)
- [LONGINT TO BLOB](XXX)
- [REAL TO BLOB](XXX)
- [SET BLOB SIZE](XXX)
- [TEXT TO BLOB](XXX)
- [VARIABLE TO BLOB](XXX)


You can pass blobs and blob objects (`4D.Blob`) to methods. Keep in mind that unlike blob objects, which are passed by reference, scalar blobs are duplicated in memory when passed to methods.


## Assigning a blob variable to another

You can assign a Blob variable to another:

**Example:**

```4d
// Declare two variables of type Blob
 var vBlobA, vBlobB : Blob
// Set the size of the first blob to 10K
 SET BLOB SIZE(vBlobA,10*1024)
// Assign the first blob to the second one
 vBlobB=vBlobA
```

## Automatic conversion of blob type

QodlyScript automatically converts scalar blobs to blob objects, and vice versa, when they're assigned to each other. For example:

```4d
// Create a variable of type Blob and an object variable
var myBlob: Blob
var myObject : Object

// Assign that blob to a property of myObject named "blob"
myObject=New object("blob",myBlob)

// The blob stored in myBlob is automatically converted to a 4D.Blob
var type : Boolean
type=OB Instance of(myObject.blob,4D.Blob)  //True

// Conversion from 4D.Blob to Blob
myBlob=myObject.blob
type=Value type(myBlob) // Blob
```

:::note

When converting a `4D.Blob` to a scalar blob, if the size of the `4D.Blob` exceeds the maximum size for scalar blobs, the resulting scalar blob is empty. For example, when the maximum size for scalar blobs is 2GB, if you convert a `4D.Blob` of 2.5GB to a scalar blob, you obtain an empty blob.

:::

## Modifying a scalar blob

Unlike blob objects, scalar blobs can be altered. For example:

```4d
var myBlob : Blob
SET BLOB SIZE (myBlob,16*1024)
```

## Individually accessing bytes in a blob

#### Accessing a scalar blob's bytes

You can access individual bytes of a scalar blob using curly brackets `{}`. Within a blob, bytes are numbered from 0 to N-1, where N is the size of the BLOB:

```4d
  // Declare a variable of type Blob
 var vBlob : Blob
  // Set the size of the blob to 256 bytes
 SET BLOB SIZE(vBlob,256)
  // The following code loops through the blob to set each byte to zero
 var vByte : Integer
 For(vByte,0,BLOB size(vBlob)-1)
    vBlob{vByte}=0
 End for
```

Since you can address all the bytes of a blob individually, you can store whatever you want in a Blob variable or attribute.

#### Accessing a `4D.Blob`'s bytes

Use square brackets `[]` to directly access a specific byte in a `4D.Blob`

```4d
var myBlob: 4D.Blob
var myText: Text
var byte: Integer
CONVERT FROM TEXT("Hello, World!","UTF-8",myBlob)
myText=BLOB to text (myBlob,UTF8 text without length)
byte=myBlob[5]
```

Since a `4D.Blob` cannot be altered, you can read the bytes of a `4D.Blob` using this syntax, but not modify them.
