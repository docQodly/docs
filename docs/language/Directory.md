---
id: Directory
title: Directory Class
---



<!-- REF directory.exists.Desc -->
## .exists


<!-- REF #directory.exists.Syntax -->**.exists** : boolean<!-- END REF -->

#### Description

The `.exists` property returns <!-- REF #directory.exists.Summary -->true if the folder exists on disk<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.extension.Desc -->
## .extension


<!-- REF #directory.extension.Syntax -->**.extension** : string<!-- END REF -->

#### Description

The `.extension` property <!-- REF #directory.extension.Summary -->returns the extension of the folder name (if any)<!-- END REF -->. An extension always starts with ".". The property returns an empty string if the folder name does not have an extension.

This property is **read-only**.

<!-- END REF -->



---

<!-- REF directory.fullName.Desc -->
## .fullName

<!-- REF #directory.fullName.Syntax -->**.fullName** : string<!-- END REF -->

#### Description

The `.fullName` property <!-- REF #directory.fullName.Summary -->returns the full name of the folder, including its extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.hidden.Desc -->
## .hidden


<!-- REF #directory.hidden.Syntax -->**.hidden** : boolean<!-- END REF -->

#### Description

The `.hidden` property returns <!-- REF #directory.hidden.Summary --> true if the folder is set as "hidden" at the system level<!-- END REF -->, and false otherwise.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.isAlias.Desc -->
## .isAlias

<!-- REF #directory.isAlias.Syntax -->**.isAlias** : boolean<!-- END REF -->

#### Description

The `.isAlias` property returns <!-- REF #directory.isAlias.Summary -->always **false** for a `Folder` object<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.isFile.Desc -->
## .isFile


<!-- REF #directory.isFile.Syntax -->**.isFile** : boolean<!-- END REF -->

#### Description

The `.isFile` property returns <!-- REF #directory.isFile.Summary -->always **false** for a folder<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.isFolder.Desc -->
## .isFolder


<!-- REF #directory.isFolder.Syntax -->**.isFolder** : boolean<!-- END REF -->

#### Description

The `.isFolder` property returns <!-- REF #directory.isFolder.Summary -->always **true** for a folder<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.isPackage.Desc -->
## .isPackage


<!-- REF #directory.isPackage.Syntax -->**.isPackage** : boolean<!-- END REF -->

#### Description

The `.isPackage` property returns <!-- REF #directory.isPackage.Summary -->true if the folder is a package on macOS  (and exists on disk)<!-- END REF -->. Otherwise, it returns false.

On Windows, `.isPackage` always returns **false**.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.modificationDate.Desc -->
## .modificationDate

<!-- REF #directory.modificationDate.Syntax -->**.modificationDate** : date<!-- END REF -->

#### Description

The `.modificationDate` property returns <!-- REF #directory.modificationDate.Summary --> the date of the folder's last modification<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.modificationTime.Desc -->
## .modificationTime


<!-- REF #directory.modificationTime.Syntax -->**.modificationTime** : time<!-- END REF -->

#### Description

The `.modificationTime` property returns <!-- REF #directory.modificationTime.Summary -->the time of the folder's last modification<!-- END REF --> (expressed as a number of seconds beginning at 00:00).

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.name.Desc -->
## .name


<!-- REF #directory.name.Syntax -->**.name** : string<!-- END REF -->

#### Description

The `.name` property returns <!-- REF #directory.name.Summary --> the name of the folder, without extension (if any)<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.original.Desc -->
## .original


<!-- REF #directory.original.Syntax -->**.original** : 4D.Folder<!-- END REF -->

#### Description

The `.original` property returns <!-- REF #directory.original.Summary -->the same Folder object as the folder<!-- END REF -->.

This property is **read-only**.

>This property is available on folders to allow generic code to process folders or files.

<!-- END REF -->

---

<!-- REF directory.parent.Desc -->
## .parent


<!-- REF #directory.parent.Syntax -->**.parent** : 4D.Folder<!-- END REF -->

#### Description

The `.parent` property returns <!-- REF #directory.parent.Summary -->the parent folder object of the folder<!-- END REF -->. If the path represents a system path (e.g., "/DATA/"), the system path is returned.

If the folder does not have a parent (root), the null value is returned.

This property is **read-only**.

<!-- END REF -->

---

<!-- REF directory.path.Desc -->
## .path


<!-- REF #directory.path.Syntax -->**.path** : string<!-- END REF -->

#### Description

The `.path` property returns <!-- REF #directory.path.Summary -->the POSIX path of the folder<!-- END REF -->. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.

This property is **read-only**.

<!-- END REF -->


---

<!-- REF directory.copyTo().Desc -->
## .copyTo()


<!-- REF #directory.copyTo().Syntax -->**.copyTo**( *destinationFolder* : 4D.Folder { , *newName* : string } { , *overwrite* : integer } ) : 4D.Folder<!-- END REF -->


<!-- REF #directory.copyTo().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|destinationFolder |4D.Folder |&#8594;|Destination folder|
|newName|string|&#8594;|Name for the copy|
|overwrite|integer|&#8594;|`fk overwrite` to replace existing elements|
|Result|4D.Folder|&#8592;|Copied file or folder|<!-- END REF -->

#### Description

The `.copyTo()` function <!-- REF #directory.copyTo().Summary -->copies the `Folder` object into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the folder is copied with the name of the original folder. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a folder with the same name already exists in the *destinationFolder*, by default Qodly generates an error. You can pass the `kOverwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

|Constant|Value|Comment|
|---|---|---|
|`kOverwrite`|4|Overwrite existing elements, if any|

**Returned value**

The copied `Folder` object.

#### Example

You want to copy a Pictures *folder* from the resources folder to the data folder:

```qs
var userImages, copiedImages : 4D.Folder
userImages = folder("/SOURCES/Shared/Pictures/")
copiedImages = userImages.copyTo(folder("/DATA"),kOverwrite)
```

<!-- END REF -->

---

<!-- REF directory.file().Desc -->
## .file()

<!-- REF #directory.file().Syntax -->**.file**( *path* : string ) : 4D.File<!-- END REF -->


<!-- REF #directory.file().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|path|string|&#8594;|Relative POSIX file pathname|
|Result|4D.File|&#8592;|`File` object (null if invalid path)|<!-- END REF -->

#### Description

The `.file()` function creates <!-- REF #directory.file().Summary -->a `File` object inside the `Folder` object and returns its reference<!-- END REF -->.

In *path*, pass a relative POSIX path to designate the file to return. The path will be evaluated from the parent folder as root.  

**Returned value**

A `File` object or null if *path* is invalid.

#### Example

```qs
var myPDF : 4D.File
myPDF = folder("/DATA").file("Pictures/info.pdf")
```

<!-- END REF -->

---

<!-- REF directory.files().Desc -->
## .files()


<!-- REF #directory.files().Syntax -->**.files**( { *options* : integer } ) : collection<!-- END REF -->


<!-- REF #directory.files().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|options|integer|&#8594;|File list options|
|Result|collection|&#8592;|collection of children file objects|<!-- END REF -->

#### Description

The `.files()` function returns <!-- REF #directory.files().Summary -->a collection of `File` objects contained in the folder<!-- END REF -->.

>Aliases or symbolic links are not resolved.

By default, if you omit the *options* parameter, only the files at the first level of the folder are returned in the collection, as well as invisible files or folders. You can modify this by passing, in the *options* parameter, one or more of the following constants:

|Constant| Value| Comment|
|---|---|---|
|`kRecursive`|1|The collection contains files of the specified folder and its subfolders|
|`kIgnoreInvisible`| 8|Invisible files are not listed|

**Returned value**

Collection of `file` objects.

#### Example 1

You want to know if there are invisible files in the project folder:

```qs
 var all, noInvisible : collection
 var info : string
 all = folder("/PACKAGE").files()
 noInvisible = folder("/PACKAGE").files(kIgnoreInvisible)
 if(all.length != noInvisible.length)
    info = "Project folder contains hidden files."
 end
```

#### Example 2  

You want to get all files that are not invisible in the Resources folder:

```qs
 var recursive : collection
 recursive = folder("/RESOURCES").files(kRecursive+kIgnoreInvisible)
```

<!-- END REF -->

---

<!-- REF directory.folder().Desc -->
## .folder()


<!-- REF #directory.folder().Syntax -->**.folder**( *path* : string ) : 4D.Folder<!-- END REF -->


<!-- REF #directory.folder().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|path|string|&#8594;|Relative POSIX file pathname|
|Result|4D.Folder|&#8592;|Created folder object (null if invalid *path*)|<!-- END REF -->

#### Description

The `.folder()` function <!-- REF #directory.folder().Summary -->creates a `folder` object inside the parent `folder` object and returns its reference<!-- END REF -->.

In *path*, pass a relative POSIX path to designate the folder to return. The path will be evaluated from the parent folder as root.  

**Returned value**

A `folder` object or null if *path* is invalid.

#### Example

```qs
 var mypicts : 4D.Folder
 mypicts = folder("/RESOURCES").folder("Pictures")
```

<!-- END REF -->

---

<!-- REF directory.folders().Desc -->
## .folders()


<!-- REF #directory.folders().Syntax -->**.folders**( { *options* : integer } ) : collection<!-- END REF -->


<!-- REF #directory.folders().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|options|integer|&#8594;|Folder list options|
|Result|collection|&#8592;|Collection of children folder objects|<!-- END REF -->

#### Description

The `.folders()` function <!-- REF #directory.folders().Summary -->returns a collection of `folder` objects contained in the parent folder<!-- END REF -->.

By default, if you omit the *options* parameter, only the folders at the first level of the folder are returned in the collection. You can modify this by passing, in the *options* parameter, one or more of the following constants:

|Constant| Value| Comment|
|---|---|---|
|`kRecursive`| 1|The collection contains folders of the specified folder and its subfolders|
|`kIgnoreInvisible`| 8|Invisible folders are not listed|

**Returned value**

collection of `folder` objects.

#### Example

You want the collection of all folders and subfolders of the database folder:

```qs
 var allFolders : collection
 allFolders = folder("/PACKAGE").folders(kRecursive)
```

<!-- END REF -->

---
