"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["65339"],{85533:function(e,i,n){n.r(i),n.d(i,{metadata:()=>s,contentTitle:()=>t,default:()=>a,assets:()=>o,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"language/Directory","title":"Directory Class","description":".exists","source":"@site/docs/language/Directory.md","sourceDirName":"language","slug":"/language/Directory","permalink":"/docs/next/language/Directory","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2FDirectory.md%20(current)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"current","frontMatter":{"id":"Directory","title":"Directory Class"}}'),r=n("85893"),l=n("50065");let d={id:"Directory",title:"Directory Class"},t=void 0,o={},c=[{value:".exists",id:"exists",level:2},{value:"Description",id:"description",level:4},{value:".extension",id:"extension",level:2},{value:"Description",id:"description-1",level:4},{value:".fullName",id:"fullname",level:2},{value:"Description",id:"description-2",level:4},{value:".hidden",id:"hidden",level:2},{value:"Description",id:"description-3",level:4},{value:".isAlias",id:"isalias",level:2},{value:"Description",id:"description-4",level:4},{value:".isFile",id:"isfile",level:2},{value:"Description",id:"description-5",level:4},{value:".isFolder",id:"isfolder",level:2},{value:"Description",id:"description-6",level:4},{value:".isPackage",id:"ispackage",level:2},{value:"Description",id:"description-7",level:4},{value:".modificationDate",id:"modificationdate",level:2},{value:"Description",id:"description-8",level:4},{value:".modificationTime",id:"modificationtime",level:2},{value:"Description",id:"description-9",level:4},{value:".name",id:"name",level:2},{value:"Description",id:"description-10",level:4},{value:".original",id:"original",level:2},{value:"Description",id:"description-11",level:4},{value:".parent",id:"parent",level:2},{value:"Description",id:"description-12",level:4},{value:".path",id:"path",level:2},{value:"Description",id:"description-13",level:4},{value:".copyTo()",id:"copyto",level:2},{value:"Description",id:"description-14",level:4},{value:"Example",id:"example",level:4},{value:".file()",id:"file",level:2},{value:"Description",id:"description-15",level:4},{value:"Example",id:"example-1",level:4},{value:".files()",id:"files",level:2},{value:"Description",id:"description-16",level:4},{value:"Example 1",id:"example-1-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:".folder()",id:"folder",level:2},{value:"Description",id:"description-17",level:4},{value:"Example",id:"example-3",level:4},{value:".folders()",id:"folders",level:2},{value:"Description",id:"description-18",level:4},{value:"Example",id:"example-4",level:4}];function h(e){let i={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"exists",children:".exists"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".exists"})," : boolean"]}),"\n",(0,r.jsx)(i.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".exists"})," property returns true if the folder exists on disk, and false otherwise."]}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"extension",children:".extension"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".extension"})," : string"]}),"\n",(0,r.jsx)(i.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".extension"}),' property returns the extension of the folder name (if any). An extension always starts with ".". The property returns an empty string if the folder name does not have an extension.']}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"fullname",children:".fullName"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".fullName"})," : string"]}),"\n",(0,r.jsx)(i.h4,{id:"description-2",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".fullName"})," property returns the full name of the folder, including its extension (if any)."]}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"hidden",children:".hidden"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".hidden"})," : boolean"]}),"\n",(0,r.jsx)(i.h4,{id:"description-3",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".hidden"}),' property returns  true if the folder is set as "hidden" at the system level, and false otherwise.']}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"isalias",children:".isAlias"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".isAlias"})," : boolean"]}),"\n",(0,r.jsx)(i.h4,{id:"description-4",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".isAlias"})," property returns always ",(0,r.jsx)(i.strong,{children:"false"})," for a ",(0,r.jsx)(i.code,{children:"Folder"})," object."]}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"isfile",children:".isFile"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".isFile"})," : boolean"]}),"\n",(0,r.jsx)(i.h4,{id:"description-5",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".isFile"})," property returns always ",(0,r.jsx)(i.strong,{children:"false"})," for a folder."]}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"isfolder",children:".isFolder"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".isFolder"})," : boolean"]}),"\n",(0,r.jsx)(i.h4,{id:"description-6",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".isFolder"})," property returns always ",(0,r.jsx)(i.strong,{children:"true"})," for a folder."]}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"ispackage",children:".isPackage"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".isPackage"})," : boolean"]}),"\n",(0,r.jsx)(i.h4,{id:"description-7",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".isPackage"})," property returns true if the folder is a package on macOS  (and exists on disk). Otherwise, it returns false."]}),"\n",(0,r.jsxs)(i.p,{children:["On Windows, ",(0,r.jsx)(i.code,{children:".isPackage"})," always returns ",(0,r.jsx)(i.strong,{children:"false"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"modificationdate",children:".modificationDate"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".modificationDate"})," : date"]}),"\n",(0,r.jsx)(i.h4,{id:"description-8",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".modificationDate"})," property returns  the date of the folder's last modification."]}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"modificationtime",children:".modificationTime"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".modificationTime"})," : time"]}),"\n",(0,r.jsx)(i.h4,{id:"description-9",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".modificationTime"})," property returns the time of the folder's last modification (expressed as a number of seconds beginning at 00:00)."]}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"name",children:".name"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".name"})," : string"]}),"\n",(0,r.jsx)(i.h4,{id:"description-10",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".name"})," property returns  the name of the folder, without extension (if any)."]}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"original",children:".original"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".original"})," : 4D.Folder"]}),"\n",(0,r.jsx)(i.h4,{id:"description-11",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".original"})," property returns the same Folder object as the folder."]}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:"This property is available on folders to allow generic code to process folders or files."}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"parent",children:".parent"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".parent"})," : 4D.Folder"]}),"\n",(0,r.jsx)(i.h4,{id:"description-12",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".parent"}),' property returns the parent folder object of the folder. If the path represents a system path (e.g., "/DATA/"), the system path is returned.']}),"\n",(0,r.jsx)(i.p,{children:"If the folder does not have a parent (root), the null value is returned."}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"path",children:".path"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".path"})," : string"]}),"\n",(0,r.jsx)(i.h4,{id:"description-13",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".path"}),' property returns the POSIX path of the folder. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned.']}),"\n",(0,r.jsxs)(i.p,{children:["This property is ",(0,r.jsx)(i.strong,{children:"read-only"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"copyto",children:".copyTo()"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".copyTo"}),"( ",(0,r.jsx)(i.em,{children:"destinationFolder"})," : 4D.Folder { , ",(0,r.jsx)(i.em,{children:"newName"})," : string } { , ",(0,r.jsx)(i.em,{children:"overwrite"})," : integer } ) : 4D.Folder"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Parameter"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{style:{textAlign:"center"}}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"destinationFolder"}),(0,r.jsx)(i.td,{children:"4D.Folder"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(i.td,{children:"Destination folder"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"newName"}),(0,r.jsx)(i.td,{children:"string"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(i.td,{children:"Name for the copy"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"overwrite"}),(0,r.jsx)(i.td,{children:"integer"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"fk overwrite"})," to replace existing elements"]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Result"}),(0,r.jsx)(i.td,{children:"4D.Folder"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"\u2190"}),(0,r.jsx)(i.td,{children:"Copied file or folder"})]})]})]}),"\n",(0,r.jsx)(i.h4,{id:"description-14",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".copyTo()"})," function copies the ",(0,r.jsx)(i.code,{children:"Folder"})," object into the specified ",(0,r.jsx)(i.em,{children:"destinationFolder"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.em,{children:"destinationFolder"})," must exist on disk, otherwise an error is generated."]}),"\n",(0,r.jsxs)(i.p,{children:["By default, the folder is copied with the name of the original folder. If you want to rename the copy, pass the new name in the ",(0,r.jsx)(i.em,{children:"newName"}),' parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.']}),"\n",(0,r.jsxs)(i.p,{children:["If a folder with the same name already exists in the ",(0,r.jsx)(i.em,{children:"destinationFolder"}),", by default Qodly generates an error. You can pass the ",(0,r.jsx)(i.code,{children:"kOverwrite"})," constant in the ",(0,r.jsx)(i.em,{children:"overwrite"})," parameter to ignore and overwrite the existing file"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Constant"}),(0,r.jsx)(i.th,{children:"Value"}),(0,r.jsx)(i.th,{children:"Comment"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"kOverwrite"})}),(0,r.jsx)(i.td,{children:"4"}),(0,r.jsx)(i.td,{children:"Overwrite existing elements, if any"})]})})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Returned value"})}),"\n",(0,r.jsxs)(i.p,{children:["The copied ",(0,r.jsx)(i.code,{children:"Folder"})," object."]}),"\n",(0,r.jsx)(i.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(i.p,{children:["You want to copy a Pictures ",(0,r.jsx)(i.em,{children:"folder"})," from the resources folder to the data folder:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-qs",children:'var userImages, copiedImages : 4D.Folder\nuserImages = folder("/SOURCES/Shared/Pictures/")\ncopiedImages = userImages.copyTo(folder("/DATA"),kOverwrite)\n'})}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"file",children:".file()"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".file"}),"( ",(0,r.jsx)(i.em,{children:"path"})," : string ) : 4D.File"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Parameter"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"path"}),(0,r.jsx)(i.td,{children:"string"}),(0,r.jsx)(i.td,{children:"\u2192"}),(0,r.jsx)(i.td,{children:"Relative POSIX file pathname"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Result"}),(0,r.jsx)(i.td,{children:"4D.File"}),(0,r.jsx)(i.td,{children:"\u2190"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"File"})," object (null if invalid path)"]})]})]})]}),"\n",(0,r.jsx)(i.h4,{id:"description-15",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".file()"})," function creates a ",(0,r.jsx)(i.code,{children:"File"})," object inside the ",(0,r.jsx)(i.code,{children:"Folder"})," object and returns its reference."]}),"\n",(0,r.jsxs)(i.p,{children:["In ",(0,r.jsx)(i.em,{children:"path"}),", pass a relative POSIX path to designate the file to return. The path will be evaluated from the parent folder as root."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Returned value"})}),"\n",(0,r.jsxs)(i.p,{children:["A ",(0,r.jsx)(i.code,{children:"File"})," object or null if ",(0,r.jsx)(i.em,{children:"path"})," is invalid."]}),"\n",(0,r.jsx)(i.h4,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-qs",children:'var myPDF : 4D.File\nmyPDF = folder("/DATA").file("Pictures/info.pdf")\n'})}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"files",children:".files()"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".files"}),"( { ",(0,r.jsx)(i.em,{children:"options"})," : integer } ) : collection"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Parameter"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"options"}),(0,r.jsx)(i.td,{children:"integer"}),(0,r.jsx)(i.td,{children:"\u2192"}),(0,r.jsx)(i.td,{children:"File list options"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Result"}),(0,r.jsx)(i.td,{children:"collection"}),(0,r.jsx)(i.td,{children:"\u2190"}),(0,r.jsx)(i.td,{children:"collection of children file objects"})]})]})]}),"\n",(0,r.jsx)(i.h4,{id:"description-16",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".files()"})," function returns a collection of ",(0,r.jsx)(i.code,{children:"File"})," objects contained in the folder."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:"Aliases or symbolic links are not resolved."}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["By default, if you omit the ",(0,r.jsx)(i.em,{children:"options"})," parameter, only the files at the first level of the folder are returned in the collection, as well as invisible files or folders. You can modify this by passing, in the ",(0,r.jsx)(i.em,{children:"options"})," parameter, one or more of the following constants:"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Constant"}),(0,r.jsx)(i.th,{children:"Value"}),(0,r.jsx)(i.th,{children:"Comment"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"kRecursive"})}),(0,r.jsx)(i.td,{children:"1"}),(0,r.jsx)(i.td,{children:"The collection contains files of the specified folder and its subfolders"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"kIgnoreInvisible"})}),(0,r.jsx)(i.td,{children:"8"}),(0,r.jsx)(i.td,{children:"Invisible files are not listed"})]})]})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Returned value"})}),"\n",(0,r.jsxs)(i.p,{children:["Collection of ",(0,r.jsx)(i.code,{children:"file"})," objects."]}),"\n",(0,r.jsx)(i.h4,{id:"example-1-1",children:"Example 1"}),"\n",(0,r.jsx)(i.p,{children:"You want to know if there are invisible files in the project folder:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-qs",children:' var all, noInvisible : collection\n var info : string\n all = folder("/PACKAGE").files()\n noInvisible = folder("/PACKAGE").files(kIgnoreInvisible)\n if(all.length != noInvisible.length)\n    info = "Project folder contains hidden files."\n end\n'})}),"\n",(0,r.jsx)(i.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(i.p,{children:"You want to get all files that are not invisible in the Resources folder:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-qs",children:' var recursive : collection\n recursive = folder("/RESOURCES").files(kRecursive+kIgnoreInvisible)\n'})}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"folder",children:".folder()"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".folder"}),"( ",(0,r.jsx)(i.em,{children:"path"})," : string ) : 4D.Folder"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Parameter"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"path"}),(0,r.jsx)(i.td,{children:"string"}),(0,r.jsx)(i.td,{children:"\u2192"}),(0,r.jsx)(i.td,{children:"Relative POSIX file pathname"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Result"}),(0,r.jsx)(i.td,{children:"4D.Folder"}),(0,r.jsx)(i.td,{children:"\u2190"}),(0,r.jsxs)(i.td,{children:["Created folder object (null if invalid ",(0,r.jsx)(i.em,{children:"path"}),")"]})]})]})]}),"\n",(0,r.jsx)(i.h4,{id:"description-17",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".folder()"})," function creates a ",(0,r.jsx)(i.code,{children:"folder"})," object inside the parent ",(0,r.jsx)(i.code,{children:"folder"})," object and returns its reference."]}),"\n",(0,r.jsxs)(i.p,{children:["In ",(0,r.jsx)(i.em,{children:"path"}),", pass a relative POSIX path to designate the folder to return. The path will be evaluated from the parent folder as root."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Returned value"})}),"\n",(0,r.jsxs)(i.p,{children:["A ",(0,r.jsx)(i.code,{children:"folder"})," object or null if ",(0,r.jsx)(i.em,{children:"path"})," is invalid."]}),"\n",(0,r.jsx)(i.h4,{id:"example-3",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-qs",children:' var mypicts : 4D.Folder\n mypicts = folder("/RESOURCES").folder("Pictures")\n'})}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"folders",children:".folders()"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:".folders"}),"( { ",(0,r.jsx)(i.em,{children:"options"})," : integer } ) : collection"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Parameter"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"options"}),(0,r.jsx)(i.td,{children:"integer"}),(0,r.jsx)(i.td,{children:"\u2192"}),(0,r.jsx)(i.td,{children:"Folder list options"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Result"}),(0,r.jsx)(i.td,{children:"collection"}),(0,r.jsx)(i.td,{children:"\u2190"}),(0,r.jsx)(i.td,{children:"Collection of children folder objects"})]})]})]}),"\n",(0,r.jsx)(i.h4,{id:"description-18",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:".folders()"})," function returns a collection of ",(0,r.jsx)(i.code,{children:"folder"})," objects contained in the parent folder."]}),"\n",(0,r.jsxs)(i.p,{children:["By default, if you omit the ",(0,r.jsx)(i.em,{children:"options"})," parameter, only the folders at the first level of the folder are returned in the collection. You can modify this by passing, in the ",(0,r.jsx)(i.em,{children:"options"})," parameter, one or more of the following constants:"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Constant"}),(0,r.jsx)(i.th,{children:"Value"}),(0,r.jsx)(i.th,{children:"Comment"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"kRecursive"})}),(0,r.jsx)(i.td,{children:"1"}),(0,r.jsx)(i.td,{children:"The collection contains folders of the specified folder and its subfolders"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"kIgnoreInvisible"})}),(0,r.jsx)(i.td,{children:"8"}),(0,r.jsx)(i.td,{children:"Invisible folders are not listed"})]})]})]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Returned value"})}),"\n",(0,r.jsxs)(i.p,{children:["collection of ",(0,r.jsx)(i.code,{children:"folder"})," objects."]}),"\n",(0,r.jsx)(i.h4,{id:"example-4",children:"Example"}),"\n",(0,r.jsx)(i.p,{children:"You want the collection of all folders and subfolders of the database folder:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-qs",children:' var allFolders : collection\n allFolders = folder("/PACKAGE").folders(kRecursive)\n'})}),"\n",(0,r.jsx)(i.hr,{})]})}function a(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return t},a:function(){return d}});var s=n(67294);let r={},l=s.createContext(r);function d(e){let i=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);