"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5426],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||g[u]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={id:"ZipFileClass",title:"ZIPFile"},i=void 0,o={unversionedId:"language/ZipFileClass",id:"language/ZipFileClass",title:"ZIPFile",description:"The following properties and functions from the File class are available to ZIPFile objects:",source:"@site/docs/language/ZipFileClass.md",sourceDirName:"language",slug:"/language/ZipFileClass",permalink:"/docs/language/ZipFileClass",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/ZipFileClass.md",tags:[],version:"current",frontMatter:{id:"ZipFileClass",title:"ZIPFile"},sidebar:"QodlyScript",previous:{title:"ZIPArchive",permalink:"/docs/language/ZipArchiveClass"},next:{title:"ZIPFolder",permalink:"/docs/language/ZipFolderClass"}},p={},s=[],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following properties and functions from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/FileClass"},"File")," class are available to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIPFile")," objects:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Available ",(0,r.kt)("a",{parentName:"th",href:"/docs/language/FileClass"},"File")," APIs for ZIPFile"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#copyto"},(0,r.kt)("strong",{parentName:"a"},".copyTo"),"( ",(0,r.kt)("em",{parentName:"a"},"destinationFolder")," : 4D.Folder { , ",(0,r.kt)("em",{parentName:"a"},"newName")," : string } { , ",(0,r.kt)("em",{parentName:"a"},"overwrite")," : integer } ) : 4D.File")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#exists"},(0,r.kt)("strong",{parentName:"a"},".exists")," : boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#extension"},(0,r.kt)("strong",{parentName:"a"},".extension")," : string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#fullname"},(0,r.kt)("strong",{parentName:"a"},".fullName")," : string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#getcontent"},(0,r.kt)("strong",{parentName:"a"},".getContent"),"() : 4D.Blob")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#gettext"},(0,r.kt)("strong",{parentName:"a"},".getText"),"( { ",(0,r.kt)("em",{parentName:"a"},"charSetName")," : string { , ",(0,r.kt)("em",{parentName:"a"},"breakMode")," : integer } } ) : string",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},".getText"),"( { ",(0,r.kt)("em",{parentName:"a"},"charSetNum")," : integer { , ",(0,r.kt)("em",{parentName:"a"},"breakMode")," : integer } } ) : string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#hidden"},(0,r.kt)("strong",{parentName:"a"},".hidden")," : boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#isalias"},(0,r.kt)("strong",{parentName:"a"},".isAlias")," : boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#isfile"},(0,r.kt)("strong",{parentName:"a"},".isFile")," : boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#isfolder"},(0,r.kt)("strong",{parentName:"a"},".isFolder")," : boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#iswritable"},(0,r.kt)("strong",{parentName:"a"},".isWritable")," : boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Always false with ZIP archive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#modificationdate"},(0,r.kt)("strong",{parentName:"a"},".modificationDate")," : date")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#modificationtime"},(0,r.kt)("strong",{parentName:"a"},".modificationTime")," : time")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#name"},(0,r.kt)("strong",{parentName:"a"},".name")," : string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#original"},(0,r.kt)("strong",{parentName:"a"},".original")," : 4D.File",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},".original")," : 4D.Folder")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#parent"},(0,r.kt)("strong",{parentName:"a"},".parent")," : 4D.Folder")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/language/FileClass#path"},(0,r.kt)("strong",{parentName:"a"},".path")," : string")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns a path relative to the archive")))))}d.isMDXComponent=!0}}]);