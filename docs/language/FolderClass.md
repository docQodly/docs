---
id: FolderClass
title: Folder
---



`Folder` objects are created with the [`folder`](#folder) command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the `folder` command to create a new folder, a valid `folder` object is created but nothing is actually stored on disk until you call the [`folder.create()`](#create) function.

### Example

The following example creates a "JohnSmith" folder object:

```qs
var curfolder : 4D.Folder
curfolder = folder("/PACKAGE/JohnSmith")
```

### Pathnames

`folder` objects support several pathnames, including `filesystems` or `posix` syntax. Supported pathnames are detailed in the [**Pathnames**](basics/lang-pathnames.md) page.


### Functions and properties

||
|---|
|[<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.copyTo().Summary -->|
|[<!-- INCLUDE #FolderClass.create().Syntax -->](#create)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.create().Summary -->|
|[<!-- INCLUDE #FolderClass.createAlias().Syntax -->](#createalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.createAlias().Summary --> |
|[<!-- INCLUDE #FolderClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.delete().Summary -->|
|[<!-- INCLUDE #directory.exists.Syntax -->](#exists)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.exists.Summary -->|
|[<!-- INCLUDE #directory.extension.Syntax -->](#extension)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.extension.Summary -->|  
|[<!-- INCLUDE #directory.file().Syntax -->](#file)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.file().Summary -->|  
|[<!-- INCLUDE #directory.files().Syntax -->](#files)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.files().Summary -->|  
|[<!-- INCLUDE #directory.folder().Syntax -->](#folder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.folder().Summary -->|  
|[<!-- INCLUDE #directory.folders().Syntax -->](#folders)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.folders().Summary -->|  
|[<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.fullName.Summary -->|
|[<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.hidden.Summary -->|
|[<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isAlias.Summary -->|
|[<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFile.Summary -->|
|[<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFolder.Summary -->|
|[<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isPackage.Summary -->|
|[<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationDate.Summary -->|
|[<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationTime.Summary -->|
|[<!-- INCLUDE #directory.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.name.Summary -->|
|[<!-- INCLUDE #directory.original.Syntax -->](#original)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.original.Summary -->|
|[<!-- INCLUDE #directory.parent.Syntax -->](#parent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.parent.Summary -->|
|[<!-- INCLUDE #directory.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.path.Summary -->|
|[<!-- INCLUDE #FolderClass.moveTo().Syntax -->](#moveto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.moveTo().Summary -->|
|[<!-- INCLUDE #FolderClass.rename().Syntax -->](#rename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.rename().Summary -->|



## 4D.Folder.new()


<!-- REF #4D.Folder.new().Syntax -->
**4D.Folder.new** ( *path* : string { , * } ) : 4D.Folder<!-- END REF -->


#### Description

The `4D.Folder.new()` function <!-- REF #4D.Folder.new().Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. It is identical to the [`folder`](#folder) command (shortcut).

> It is recommended to use the [`folder`](#folder) shortcut command instead of `4D.Folder.new()`.

<!-- INCLUDE directory.copyTo().Desc -->

<!-- REF folder.create().Desc -->
## .create()

<!--REF #FolderClass.create().Syntax -->**.create()** : boolean<!-- END REF -->


<!--REF #FolderClass.create().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|boolean|<-|true if the folder was created successfully, false otherwise|<!-- END REF -->



#### Description

The `.create()` function <!-- REF #FolderClass.create().Summary -->creates a folder on disk according to the properties of the `folder` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. If the folder already exists on disk, the function does nothing (no error is thrown) and returns false.

**Returned value**

* **true** if the folder is created successfully,
* **false** if a folder with the same name already exists or if an error occured.

#### Example 1

Create an empty folder in the database folder:

```qs
var created : boolean
created = folder("/PACKAGE/SpecialPrefs").create()
```

#### Example 2

Creation of the "/Archives2019/January/" folder in the database folder:

```qs
var newFolder : 4D.Folder
var info : string
newFolder = folder("/PACKAGE/Archives2019/January")
if(newFolder.create())
 info = "The "+newFolder.name+" folder was created."
else
 info = "Impossible to create a "+newFolder.name+" folder."
end
```

<!-- END REF -->

<!-- REF folder.createAlias().Desc -->
## .createAlias()

<!--REF #FolderClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder , *aliasName* : string ) : 4D.File<!-- END REF -->


<!--REF #FolderClass.createAlias().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|4D.Folder|->|Destination folder for the alias or shortcut|
|aliasName|string|->|Name of the symbolic link|
|Result|4D.File|<-|Alias or shortcut reference|<!-- END REF -->

#### Description

The `.createAlias()` function <!-- REF #FolderClass.createAlias().Summary -->creates a symbolic link<!-- END REF --> to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the symbolic link to create in the *aliasName* parameter.

**Returned object**

A `4D.File` object with the `isAlias` property set to **true**.

#### Example

You want to create a symbolic link to an archive folder in your database folder:

```qs
var myFolder : 4D.Folder
myFolder = folder("/PACKAGE/Documents/Archives/2019/January")
aliasFile = myFolder.createAlias(folder("/PACKAGE"),"Jan2019")
```
<!-- END REF -->

<!-- REF folder.delete().Desc -->
## .delete()

<!--REF #FolderClass.delete().Syntax -->**.delete**( { *option* : integer } )<!-- END REF -->


<!-- REF #FolderClass.delete().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|option |integer|->|folder deletion option|<!-- END REF -->

#### Description

The `.delete()` function <!-- REF #FolderClass.delete().Summary -->deletes the folder<!-- END REF -->.

By default, for security reasons, if you omit the *option* parameter, `.delete( )` only allows empty folders to be deleted. If you want the command to be able to delete folders that are not empty, you must use the *option* parameter with one of the following constants:

|Constant| Value| Comment|
|---|---|---|
|`kDeleteOnlyIfEmpty`| 0| Deletes folder only when it is empty|
|`kDeleteWithContents`| 1| Deletes folder along with everything it contains|

When `kDeleteOnlyIfEmpty` is passed or if you omit the *option* parameter:

* The folder is only deleted if it is empty, otherwise, the command does nothing and an error -47 is generated.
* If the folder does not exist, the error -120 is generated.

When `kDeleteWithContents` is passed:

* The folder, along with all of its contents, is deleted.
**Warning**: Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, the folder (and contents) is still deleted.
* If this folder, or any of the files it contains, cannot be deleted, deletion is aborted as soon as the first inaccessible element is detected, and error -45 (The file is locked or the pathname is not correct) is returned. In this case, the folder may be only partially deleted. When deletion is aborted, you can use the [`lastErrors`](commands/lastErrors.md) command to retrieve the name and path of the offending file.
* If the folder does not exist, the command does nothing and no error is returned.

<!-- END REF -->

<!-- INCLUDE directory.exists.Desc -->

<!-- INCLUDE directory.extension.Desc -->

<!-- INCLUDE directory.file().Desc -->

<!-- INCLUDE directory.files().Desc -->

<!-- INCLUDE directory.folder().Desc -->

<!-- INCLUDE directory.folders().Desc -->

<!-- INCLUDE directory.fullName.Desc -->

<!-- INCLUDE directory.hidden.Desc -->

<!-- INCLUDE directory.isAlias.Desc -->

<!-- INCLUDE directory.isFile.Desc -->

<!-- INCLUDE directory.isFolder.Desc -->

<!-- INCLUDE directory.isPackage.Desc -->

<!-- INCLUDE directory.modificationDate.Desc -->

<!-- INCLUDE directory.modificationTime.Desc -->

<!-- REF folder.moveTo().Desc -->
## .moveTo()


<!--REF #FolderClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { , *newName* : string } ) : 4D.Folder<!-- END REF -->


<!--REF #FolderClass.moveTo().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|4D.Folder|->|Destination folder|
|newName|string|->|Full name for the moved folder|
|Result|4D.Folder|<-|Moved folder|<!-- END REF -->

#### Description

The `.moveTo()` function <!-- REF #FolderClass.moveTo().Summary -->moves or renames the `folder` object (source folder) into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the folder retains its name when moved. If you want to rename the moved folder, pass the new full name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

**Returned object**

The moved `folder` object.

#### Example

You want to move and rename a folder:

```qs
 var tomove, tomove2 : 4D.Folder
 tomove = folder("/RESOURCES/Pictures")
 tomove2 = tomove.moveTo(folder("/RESOURCES/Archives"),"Pic_Archives")
```
<!-- END REF -->

<!-- INCLUDE directory.name.Desc -->

<!-- INCLUDE directory.original.Desc -->

<!-- INCLUDE directory.parent.Desc -->

<!-- INCLUDE directory.path.Desc -->


<!-- REF folder.rename().Desc -->
## .rename()

<!--REF #FolderClass.rename().Syntax -->**.rename**( *newName* : string ) : 4D.Folder<!-- END REF -->


<!--REF #FolderClass.rename().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|newName|string|->|New full name for the folder|
|Result|4D.Folder|<-|Renamed folder|<!-- END REF -->

#### Description

The `.rename()` function <!-- REF #FolderClass.rename().Summary -->renames the folder with the name you passed in *newName* and returns the renamed `folder` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

**Returned object**

The renamed `folder` object.

#### Example

```qs
 var toRename : 4D.Folder
 toRename = folder("/RESOURCES/Pictures").rename("Images")
```
<!-- END REF -->
