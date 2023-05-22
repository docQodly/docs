---
id: lang-pathnames
title: Pathnames
---

File and folder functions, properties, and commands allow you to handle files and folders as objects. This makes file and folder management powerful and flexible. For example, to create a new file in the current user's Documents folder, you can write:

```qs
ok=Folder(fk documents folder).file("Archives/JohnQ.prefs").create()
```

In addition, file and folder objects support `fileSystems`, which provide contextual path to main application folders.


## Filesystem pathnames

Qodly accepts several `filesystem` pathnames that designate specific folders. Filesystem pathnames are useful for two main reasons:

- Independence: You can move your solution from one place to another regardless of the environment, without having to worry about paths,
- Security: No code can access elements located above the file system root on the disk (sandboxing).

The following filesystem pathnames are supported: 

|filesystem|Designates|
|---|---|
|"/DATA"|Current data folder|
|"/LOGS"|Logs folder|
|"/PROJECT"|Project folder|
|"/SOURCES"|Current project resources folder|

## POSIX syntax

QodlyScript uses the POSIX syntax. With this syntax:

- folders are separated by "/"
- absolute pathnames start with a "/"
- to move up one folder in a relative path, use "../" in front of the pathname (for security, you cannot move up the filesystem).

In POSIX syntax, you will generally use `filesystem` pathnames with [`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands, for example:

```qs
pathFile=File("/DATA/Archives/file 2.txt")
pathFolder=Folder("/RESOURCES/Pictures")
```


## Absolute and relative pathnames

### `File` and `Folder` constructors

[`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands only accept **absolute pathnames**. Relative pathnames are not supported and will return errors. For example, the following code is not allowed:

```qs
	//ERROR
ko=Folder("myFolder").create() //relative pathname with constructor
```

If you want to handle files or folders in various locations (project folder, system folders, etc.), you must use `filesystems` (see above). For example, you can write:

```qs
okFolder=Folder("/PACKAGE/myFolder").create() //folder created at the structure level
okFile=File("/DATA/Prefs/tempo.txt").create() //file created in the data folder
```

### `.file()` and `.folder()` folder functions

Functions of folder objects such as [`folder.file()`](../API/FolderClass.md#file) and [`folder.folder()`](../API/FolderClass.md#folder-1) expect relative POSIX pathnames. For example:

```qs
  //to reference a "Picture" folder within the user documents folder
userImages:=Folder(fk documents folder).folder("Pictures")
  //to create a folder on the desktop
ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Absolute pathnames are not supported and will return errors.


## Examples

The flexibility of file and folder functions offers you various possibilities for handling files and folders, like in the following examples:

```qs
f=Folder(fk desktop folder).folder("archive/jan2023")
 
f2=Folder("/DATA/archive/jan2023").file("total.txt")
 
f3=Folder("/DATA/archive/jan2023")
 
f4=File("/DATA/info.txt")
 
```
