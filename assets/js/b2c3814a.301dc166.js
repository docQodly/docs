"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[2910],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=a,b=s["".concat(m,".").concat(u)]||s[u]||d[u]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"webForm",title:"webForm"},i=void 0,l={unversionedId:"language/commands/webForm",id:"language/commands/webForm",title:"webForm",description:"webForm : 4D.WebForm",source:"@site/docs/language/commands/webForm.md",sourceDirName:"language/commands",slug:"/language/commands/webForm",permalink:"/docs/language/commands/webForm",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/commands/webForm.md",tags:[],version:"current",frontMatter:{id:"webForm",title:"webForm"},sidebar:"Develop",previous:{title:"webEvent",permalink:"/docs/language/commands/webEvent"},next:{title:"webServer",permalink:"/docs/language/commands/webServer"}},m={},p=[{value:"Description",id:"description",level:4}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"webForm")," : 4D.WebForm"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result"),(0,a.kt)("td",{parentName:"tr",align:null},"4D.WebForm"),(0,a.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,a.kt)("td",{parentName:"tr",align:null},"New ",(0,a.kt)("inlineCode",{parentName:"td"},"WebForm")," proxy object")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"webForm")," command  returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," proxy object, providing a means to work with and effectively emulates the Page's properties and functions."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Keep in mind that a ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," object  is a ",(0,a.kt)("strong",{parentName:"p"},"proxy object"),", and not a direct reference to the web form object itself. As a consequence for example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," object does not expose all Page properties in the Debugger. ")),(0,a.kt)("p",null,"Each property of the returned object is an object of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/language/WebFormItemClass"},"4D.WebFormItem")," class."),(0,a.kt)("p",null,"The command returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if it is called in a request that does not originate from Qodly Studio."))}s.isMDXComponent=!0}}]);