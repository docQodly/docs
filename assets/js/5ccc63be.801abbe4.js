"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["62163"],{56398:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>c});var t=JSON.parse('{"id":"language/commands/zipReadArchive","title":"zipReadArchive","description":"zipReadArchive ( zipFile string \\\\}) : 4D.ZipArchive","source":"@site/versioned_docs/version-1.0.0/language/commands/zipReadArchive.md","sourceDirName":"language/commands","slug":"/language/commands/zipReadArchive","permalink":"/docs/language/commands/zipReadArchive","draft":false,"unlisted":false,"editUrl":"https://github.com/docQodly/docs/edit/main/versioned_docs/version-1.0.0/language/commands/zipReadArchive.md","tags":[],"version":"1.0.0","frontMatter":{"id":"zipReadArchive","title":"zipReadArchive"},"sidebar":"Develop","previous":{"title":"zipCreateArchive","permalink":"/docs/language/commands/zipCreateArchive"},"next":{"title":"Classes","permalink":"/docs/category/classes"}}'),r=n("85893"),s=n("50065");let c={id:"zipReadArchive",title:"zipReadArchive"},o=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}];function a(e){let i={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.em,{children:"zipReadArchive"}),"* ( ",(0,r.jsx)(i.em,{children:"zipFile"})," : 4D.File { , ",(0,r.jsx)(i.em,{children:"password"})," : string }) : 4D.ZipArchive"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Parameter"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{style:{textAlign:"center"}}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"zipFile"}),(0,r.jsx)(i.td,{children:"4D.File"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(i.td,{children:"Zip archive file"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"password"}),(0,r.jsx)(i.td,{children:"string"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(i.td,{children:"ZIP archive password if any"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Result"}),(0,r.jsx)(i.td,{children:"4D.ZipArchive"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"\u2190"}),(0,r.jsx)(i.td,{children:"Archive object"})]})]})]}),"\n",(0,r.jsx)(i.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"zipReadArchive"})," command retrieves the contents of ",(0,r.jsx)(i.em,{children:"zipFile"})," and returns it as a ",(0,r.jsx)(i.code,{children:"4D.ZipArchive"})," object."]}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use functions such as ",(0,r.jsx)(i.a,{href:"/docs/language/Document#copyto",children:"file.copyTo()"})," or ",(0,r.jsx)(i.a,{href:"/docs/language/Directory#copyto",children:"folder.copyTo()"}),"."]})}),"\n",(0,r.jsxs)(i.p,{children:["Pass a ",(0,r.jsx)(i.code,{children:"4D.File"})," object referencing the compressed ZIP archive in the ",(0,r.jsx)(i.em,{children:"zipFile"})," parameter. The target archive file will be opened until the ",(0,r.jsx)(i.code,{children:"zipReadArchive"})," has finished executing and all contents/references have been extracted/released, then it will be closed automatically."]}),"\n",(0,r.jsxs)(i.p,{children:["If the ",(0,r.jsx)(i.em,{children:"zipFile"})," is password protected, you need to use the optional ",(0,r.jsx)(i.em,{children:"password"})," parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Archive object"})}),"\n",(0,r.jsxs)(i.p,{children:["The returned ",(0,r.jsx)(i.code,{children:"4D.ZipArchive"})," object contains a single ",(0,r.jsx)(i.a,{href:"../ZipArchiveClass#root",children:(0,r.jsx)(i.code,{children:"root"})})," property whose value is a ",(0,r.jsx)(i.code,{children:"4D.ZipFolder"})," object. This folder describes the whole contents of the ZIP archive."]}),"\n",(0,r.jsx)(i.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(i.p,{children:"To retrieve and view the contents of a ZIP file object:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-qs",children:' var archive : 4D.ZipArchive\n var path : 4D.File\n\n path = file("/SOURCES/MyDocs/Archive.zip")\n archive = zipReadArchive(path)\n'})}),"\n",(0,r.jsx)(i.p,{children:"To retrieve the list of the files and folders in the archive:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-qs",children:" folders = archive.root.folders()\n files = archive.root.files()\n"})}),"\n",(0,r.jsx)(i.p,{children:"To read the contents of a file without extracting it from the root folder:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-qs",children:'\n if(files[i].extension == ".txt")\n    txt = files[i].getText()\n else\n    blob = files[i].getContent()\n end\n'})}),"\n",(0,r.jsx)(i.p,{children:"To extract from the root folder:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-qs",children:'  //extract a file\n folderResult = files[i].copyTo(folder("/SOURCES/MyDocs"))\n\n  //extract all files\n folderResult = archive.root.copyTo(folder("/SOURCES/MyDocs"))\n'})})]})}function h(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return c}});var t=n(67294);let r={},s=t.createContext(r);function c(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);