---
id: lang-pathnames
title: Pathnames
---

File and folder functions, properties, and commands allow you to handle files and folders as objects. This makes file and folder management powerful and flexible. For example, to create a new file in the resources folder, you can write:

```qs
ok = file("/RESOURCES/Archives/JohnQ.prefs").create()
```

File and folder objects support `fileSystem pathnames`, which provide contextual path to main application folders.


## Filesystem pathnames

QodlyScript accepts several `filesystem` pathnames that designate specific folders. Filesystem pathnames are useful for two main reasons:

- Independence: You can move your solution from one place to another regardless of the environment, without having to worry about paths,
- Security: No code can access elements located above the file system root on the disk (sandboxing).

The following filesystem pathnames are supported:

|filesystem|Designates|
|---|---|
|"/PACKAGE"|Project root folder|
|"/DATA"|Current data folder|
|"/LOGS"|Logs folder|
|"/PROJECT"|Project folder|
|"/SOURCES"|Current project sources folder|
|"/RESOURCES"|Current project ressources folder|


## POSIX syntax

QodlyScript uses the POSIX syntax. With this syntax:

- folders are separated by "/"
- absolute pathnames start with a "/"
- to move up one folder in a relative path, use "../" in front of the pathname (for security, you cannot move up the filesystem).

In POSIX syntax, you will generally use `filesystem` pathnames with [`file`](../commands/file) and [`folder`](../commands/folder) commands, for example:

```qs
pathFile = file("/DATA/Archives/file 2.txt")
pathFolder = folder("/RESOURCES/Pictures")
```



## `file` and `folder` constructors

[`file`](../commands/file) and [`Folder`](../commands/folder) commands only accept **absolute pathnames**. Relative pathnames are not supported and will return errors. For example, the following code is not allowed:

```qs
	//ERROR
ko = folder("myFolder").create() //relative pathname with constructor
```

If you want to handle files or folders in various locations (project folder, system folders, etc.), you must use [`filesystems`](#filesystem-pathnames). For example, you can write:

```qs
okFolder = folder("/PACKAGE/myFolder").create() //folder created at the project level
okFile = file("/DATA/Prefs/tempo.txt").create() //file created in the data folder
```


## Examples

The flexibility of file and folder functions offers you various possibilities for handling files and folders, like in the following examples:

```qs
f = folder("/DATA").folder("archive/jan2023")

f2 = folder("/DATA/archive/jan2023").file("total.txt")

f3 = folder("/DATA/archive/jan2023")

f4 = file("/DATA/info.txt")

```
