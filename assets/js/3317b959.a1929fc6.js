"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[1969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,g=m["".concat(l,".").concat(s)]||m[s]||d[s]||o;return r?n.createElement(g,c(c({ref:t},u),{},{components:r})):n.createElement(g,c({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},12331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"convertPicture",title:"convertPicture"},c=void 0,i={unversionedId:"language/commands/convertPicture",id:"language/commands/convertPicture",title:"convertPicture",description:"convertPicture ( aPicture string )convertPicture ( aPicture string , compression : number )",source:"@site/docs/language/commands/convertPicture.md",sourceDirName:"language/commands",slug:"/language/commands/convertPicture",permalink:"/docs/language/commands/convertPicture",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/commands/convertPicture.md",tags:[],version:"current",frontMatter:{id:"convertPicture",title:"convertPicture"},sidebar:"Develop",previous:{title:"convertFromString",permalink:"/docs/language/commands/convertFromString"},next:{title:"convertToString",permalink:"/docs/language/commands/convertToString"}},l={},p=[{value:"Description",id:"description",level:4}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"convertPicture")," ( ",(0,a.kt)("em",{parentName:"p"},"aPicture")," : picture , ",(0,a.kt)("em",{parentName:"p"},"codec")," : string )",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"p"},"convertPicture")," ( ",(0,a.kt)("em",{parentName:"p"},"aPicture")," : picture , ",(0,a.kt)("em",{parentName:"p"},"codec")," : string , ",(0,a.kt)("em",{parentName:"p"},"compression")," : number )"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"aPicture"),(0,a.kt)("td",{parentName:"tr",align:null},"picture"),(0,a.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,a.kt)("td",{parentName:"tr",align:null},"Picture to be converted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:"center"},"->"),(0,a.kt)("td",{parentName:"tr",align:null},"Converted picture")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"codec"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"->"),(0,a.kt)("td",{parentName:"tr",align:null},"Picture Codec ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compression"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"->"),(0,a.kt)("td",{parentName:"tr",align:null},"Quality of compression")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"convertPicture")," command converts ",(0,a.kt)("em",{parentName:"p"},"aPicture")," into a new type."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"codec"),' parameter indicates the type of picture to be generated. A Codec can be an extension (for example, ".gif") or a Mime type (for example, "image/jpeg"). You can get a list of Codecs that are available in the ',(0,a.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-picture#picture-codec-ids"},"Picture Codec IDs")," section."))}m.isMDXComponent=!0}}]);