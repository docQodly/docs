"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["14352"],{46991:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>i,default:()=>a,assets:()=>c,toc:()=>o,frontMatter:()=>t});var s=JSON.parse('{"id":"language/FolderClass","title":"Folder","description":"Folder objects are created with the folder command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the folder command to create a new folder, a valid folder object is created but nothing is actually stored on disk until you call the folder.create() function.","source":"@site/versioned_docs/version-1.0.0/language/FolderClass.md","sourceDirName":"language","slug":"/language/FolderClass","permalink":"/docs/language/FolderClass","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2FFolderClass.md%20(1.0.0)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"1.0.0","frontMatter":{"id":"FolderClass","title":"Folder"},"sidebar":"Develop","previous":{"title":"FileHandle","permalink":"/docs/language/FileHandleClass"},"next":{"title":"Function","permalink":"/docs/language/FunctionClass"}}'),d=n("85893"),l=n("50065");let t={id:"FolderClass",title:"Folder"},i=void 0,c={},o=[{value:"Example",id:"example",level:3},{value:"Pathnames",id:"pathnames",level:3},{value:"Functions and properties",id:"functions-and-properties",level:3},{value:"4D.Folder.new()",id:"4dfoldernew",level:2},{value:"Description",id:"description",level:4},{value:".create()",id:"create",level:2},{value:"Description",id:"description-1",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:".createAlias()",id:"createalias",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-3",level:4},{value:".delete()",id:"delete",level:2},{value:"Description",id:"description-3",level:4},{value:".moveTo()",id:"moveto",level:2},{value:"Description",id:"description-4",level:4},{value:"Example",id:"example-4",level:4},{value:".rename()",id:"rename",level:2},{value:"Description",id:"description-5",level:4},{value:"Example",id:"example-5",level:4}];function h(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"Folder"})," objects are created with the ",(0,d.jsx)(r.a,{href:"commands/folder",children:(0,d.jsx)(r.code,{children:"folder"})})," command. They contain references to folders that may or may not actually exist on disk. For example, when you execute the ",(0,d.jsx)(r.code,{children:"folder"})," command to create a new folder, a valid ",(0,d.jsx)(r.code,{children:"folder"})," object is created but nothing is actually stored on disk until you call the ",(0,d.jsx)(r.a,{href:"#create",children:(0,d.jsx)(r.code,{children:"folder.create()"})})," function."]}),"\n",(0,d.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,d.jsx)(r.p,{children:'The following example creates a "JohnSmith" folder object:'}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-qs",children:'var curfolder : 4D.Folder\ncurfolder = folder("/PACKAGE/JohnSmith")\n'})}),"\n",(0,d.jsx)(r.h3,{id:"pathnames",children:"Pathnames"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"folder"})," objects support several pathnames, including ",(0,d.jsx)(r.code,{children:"filesystems"})," or ",(0,d.jsx)(r.code,{children:"posix"})," syntax. Supported pathnames are detailed in the ",(0,d.jsx)(r.a,{href:"/docs/language/basics/lang-pathnames",children:(0,d.jsx)(r.strong,{children:"Pathnames"})})," page."]}),"\n",(0,d.jsx)(r.h3,{id:"functions-and-properties",children:"Functions and properties"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsx)(r.tr,{children:(0,d.jsx)(r.th,{})})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#copyto"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#create"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#createalias"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#delete"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#exists"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#extension"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"./commands/file"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"./commands/file"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"commands/folder"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#folders"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#fullname"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#hidden"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#isalias"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#isfile"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#isfolder"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#ispackage"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#modificationdate"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#modificationtime"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#name"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#original"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#parent"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#path"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#moveto"}),"\xa0\xa0\xa0\xa0"]})}),(0,d.jsx)(r.tr,{children:(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.a,{href:"#rename"}),"\xa0\xa0\xa0\xa0"]})})]})]}),"\n",(0,d.jsx)(r.h2,{id:"4dfoldernew",children:"4D.Folder.new()"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"4D.Folder.new"})," ( ",(0,d.jsx)(r.em,{children:"path"})," : string ) : 4D.Folder"]}),"\n",(0,d.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(r.p,{children:["The ",(0,d.jsx)(r.code,{children:"4D.Folder.new()"})," function creates and returns a new object of the ",(0,d.jsx)(r.code,{children:"4D.Folder"})," type. It is identical to the ",(0,d.jsx)(r.a,{href:"/docs/language/commands/folder",children:(0,d.jsx)(r.code,{children:"folder"})})," command (shortcut)."]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:["It is recommended to use the ",(0,d.jsx)(r.a,{href:"/docs/language/commands/folder",children:(0,d.jsx)(r.code,{children:"folder"})})," shortcut command instead of ",(0,d.jsx)(r.code,{children:"4D.Folder.new()"}),"."]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"create",children:".create()"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.em,{children:".create()"}),"* : boolean"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Parameter"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Result"}),(0,d.jsx)(r.td,{children:"boolean"}),(0,d.jsx)(r.td,{children:"\u2190"}),(0,d.jsx)(r.td,{children:"true if the folder was created successfully, false otherwise"})]})})]}),"\n",(0,d.jsx)(r.h4,{id:"description-1",children:"Description"}),"\n",(0,d.jsxs)(r.p,{children:["The ",(0,d.jsx)(r.code,{children:".create()"})," function creates a folder on disk according to the properties of the ",(0,d.jsx)(r.code,{children:"folder"})," object."]}),"\n",(0,d.jsxs)(r.p,{children:["If necessary, the function creates the folder hierachy as described in the ",(0,d.jsx)(r.a,{href:"#platformpath",children:"platformPath"})," or ",(0,d.jsx)(r.a,{href:"#path",children:"path"})," properties. If the folder already exists on disk, the function does nothing (no error is thrown) and returns false."]}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Returned value"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.strong,{children:"true"})," if the folder is created successfully,"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.strong,{children:"false"})," if a folder with the same name already exists or if an error occured."]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"example-1",children:"Example 1"}),"\n",(0,d.jsx)(r.p,{children:"Create an empty folder in the database folder:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-qs",children:'var created : boolean\ncreated = folder("/PACKAGE/SpecialPrefs").create()\n'})}),"\n",(0,d.jsx)(r.h4,{id:"example-2",children:"Example 2"}),"\n",(0,d.jsx)(r.p,{children:'Creation of the "/Archives2019/January/" folder in the database folder:'}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-qs",children:'var newFolder : 4D.Folder\nvar info : string\nnewFolder = folder("/PACKAGE/Archives2019/January")\nif(newFolder.create())\n info = "The "+newFolder.name+" folder was created."\nelse\n info = "Impossible to create a "+newFolder.name+" folder."\nend\n'})}),"\n",(0,d.jsx)(r.h2,{id:"createalias",children:".createAlias()"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.em,{children:".createAlias"}),"*( ",(0,d.jsx)(r.em,{children:"destinationFolder"})," : 4D.Folder , ",(0,d.jsx)(r.em,{children:"aliasName"})," : string ) : 4D.File"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Parameter"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"destinationFolder"}),(0,d.jsx)(r.td,{children:"4D.Folder"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Destination folder for the alias or shortcut"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"aliasName"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Name of the symbolic link"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Result"}),(0,d.jsx)(r.td,{children:"4D.File"}),(0,d.jsx)(r.td,{children:"\u2190"}),(0,d.jsx)(r.td,{children:"Alias or shortcut reference"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"description-2",children:"Description"}),"\n",(0,d.jsxs)(r.p,{children:["The ",(0,d.jsx)(r.code,{children:".createAlias()"})," function creates a symbolic link to the folder with the specified ",(0,d.jsx)(r.em,{children:"aliasName"})," name in the folder designated by the ",(0,d.jsx)(r.em,{children:"destinationFolder"})," object."]}),"\n",(0,d.jsxs)(r.p,{children:["Pass the name of the symbolic link to create in the ",(0,d.jsx)(r.em,{children:"aliasName"})," parameter."]}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Returned object"})}),"\n",(0,d.jsxs)(r.p,{children:["A ",(0,d.jsx)(r.code,{children:"4D.File"})," object with the ",(0,d.jsx)(r.code,{children:"isAlias"})," property set to ",(0,d.jsx)(r.strong,{children:"true"}),"."]}),"\n",(0,d.jsx)(r.h4,{id:"example-3",children:"Example"}),"\n",(0,d.jsx)(r.p,{children:"You want to create a symbolic link to an archive folder in your database folder:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-qs",children:'var myFolder : 4D.Folder\nmyFolder = folder("/PACKAGE/Documents/Archives/2019/January")\naliasFile = myFolder.createAlias(folder("/PACKAGE"),"Jan2019")\n'})}),"\n",(0,d.jsx)(r.h2,{id:"delete",children:".delete()"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.em,{children:".delete"}),"*( { ",(0,d.jsx)(r.em,{children:"option"})," : integer } )"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Parameter"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"option"}),(0,d.jsx)(r.td,{children:"integer"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"folder deletion option"})]})})]}),"\n",(0,d.jsx)(r.h4,{id:"description-3",children:"Description"}),"\n",(0,d.jsxs)(r.p,{children:["The ",(0,d.jsx)(r.code,{children:".delete()"})," function deletes the folder."]}),"\n",(0,d.jsxs)(r.p,{children:["By default, for security reasons, if you omit the ",(0,d.jsx)(r.em,{children:"option"})," parameter, ",(0,d.jsx)(r.code,{children:".delete( )"})," only allows empty folders to be deleted. If you want the command to be able to delete folders that are not empty, you must use the ",(0,d.jsx)(r.em,{children:"option"})," parameter with one of the following constants:"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Constant"}),(0,d.jsx)(r.th,{children:"Value"}),(0,d.jsx)(r.th,{children:"Comment"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"kDeleteOnlyIfEmpty"})}),(0,d.jsx)(r.td,{children:"0"}),(0,d.jsx)(r.td,{children:"Deletes folder only when it is empty"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"kDeleteWithContents"})}),(0,d.jsx)(r.td,{children:"1"}),(0,d.jsx)(r.td,{children:"Deletes folder along with everything it contains"})]})]})]}),"\n",(0,d.jsxs)(r.p,{children:["When ",(0,d.jsx)(r.code,{children:"kDeleteOnlyIfEmpty"})," is passed or if you omit the ",(0,d.jsx)(r.em,{children:"option"})," parameter:"]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"The folder is only deleted if it is empty, otherwise, the command does nothing and an error -47 is generated."}),"\n",(0,d.jsx)(r.li,{children:"If the folder does not exist, the error -120 is generated."}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["When ",(0,d.jsx)(r.code,{children:"kDeleteWithContents"})," is passed:"]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["The folder, along with all of its contents, is deleted.\n",(0,d.jsx)(r.strong,{children:"Warning"}),": Even when this folder and/or its contents are locked or set to read-only, if the current user has suitable access rights, the folder (and contents) is still deleted."]}),"\n",(0,d.jsxs)(r.li,{children:["If this folder, or any of the files it contains, cannot be deleted, deletion is aborted as soon as the first inaccessible element is detected, and error -45 (The file is locked or the pathname is not correct) is returned. In this case, the folder may be only partially deleted. When deletion is aborted, you can use the ",(0,d.jsx)(r.a,{href:"/docs/language/commands/lastErrors",children:(0,d.jsx)(r.code,{children:"lastErrors"})})," command to retrieve the name and path of the offending file."]}),"\n",(0,d.jsx)(r.li,{children:"If the folder does not exist, the command does nothing and no error is returned."}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"moveto",children:".moveTo()"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.em,{children:".moveTo"}),"*( ",(0,d.jsx)(r.em,{children:"destinationFolder"})," : 4D.Folder { , ",(0,d.jsx)(r.em,{children:"newName"})," : string } ) : 4D.Folder"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Parameter"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"destinationFolder"}),(0,d.jsx)(r.td,{children:"4D.Folder"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Destination folder"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"newName"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Full name for the moved folder"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Result"}),(0,d.jsx)(r.td,{children:"4D.Folder"}),(0,d.jsx)(r.td,{children:"\u2190"}),(0,d.jsx)(r.td,{children:"Moved folder"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"description-4",children:"Description"}),"\n",(0,d.jsxs)(r.p,{children:["The ",(0,d.jsx)(r.code,{children:".moveTo()"})," function moves or renames the ",(0,d.jsx)(r.code,{children:"folder"})," object (source folder) into the specified ",(0,d.jsx)(r.em,{children:"destinationFolder"}),"."]}),"\n",(0,d.jsxs)(r.p,{children:["The ",(0,d.jsx)(r.em,{children:"destinationFolder"})," must exist on disk, otherwise an error is generated."]}),"\n",(0,d.jsxs)(r.p,{children:["By default, the folder retains its name when moved. If you want to rename the moved folder, pass the new full name in the ",(0,d.jsx)(r.em,{children:"newName"}),' parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.']}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Returned object"})}),"\n",(0,d.jsxs)(r.p,{children:["The moved ",(0,d.jsx)(r.code,{children:"folder"})," object."]}),"\n",(0,d.jsx)(r.h4,{id:"example-4",children:"Example"}),"\n",(0,d.jsx)(r.p,{children:"You want to move and rename a folder:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-qs",children:' var tomove, tomove2 : 4D.Folder\n tomove = folder("/SOURCES/Shared/Pictures")\n tomove2 = tomove.moveTo(folder("/SOURCES/Shared/Archives"),"Pic_Archives")\n'})}),"\n",(0,d.jsx)(r.h2,{id:"rename",children:".rename()"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.em,{children:".rename"}),"*( ",(0,d.jsx)(r.em,{children:"newName"})," : string ) : 4D.Folder"]}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Parameter"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"newName"}),(0,d.jsx)(r.td,{children:"string"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"New full name for the folder"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Result"}),(0,d.jsx)(r.td,{children:"4D.Folder"}),(0,d.jsx)(r.td,{children:"\u2190"}),(0,d.jsx)(r.td,{children:"Renamed folder"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"description-5",children:"Description"}),"\n",(0,d.jsxs)(r.p,{children:["The ",(0,d.jsx)(r.code,{children:".rename()"})," function renames the folder with the name you passed in ",(0,d.jsx)(r.em,{children:"newName"})," and returns the renamed ",(0,d.jsx)(r.code,{children:"folder"})," object."]}),"\n",(0,d.jsxs)(r.p,{children:["The ",(0,d.jsx)(r.em,{children:"newName"}),' parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.']}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Returned object"})}),"\n",(0,d.jsxs)(r.p,{children:["The renamed ",(0,d.jsx)(r.code,{children:"folder"})," object."]}),"\n",(0,d.jsx)(r.h4,{id:"example-5",children:"Example"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-qs",children:' var toRename : 4D.Folder\n toRename = folder("/SOURCES/Shared/Pictures").rename("Images")\n'})})]})}function a(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return t}});var s=n(67294);let d={},l=s.createContext(d);function t(e){let r=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);