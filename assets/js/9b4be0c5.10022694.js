"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[2127],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),s=a,g=m["".concat(i,".").concat(s)]||m[s]||d[s]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},73040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={id:"currentDate",title:"currentDate"},o=void 0,c={unversionedId:"language/commands/currentDate",id:"language/commands/currentDate",title:"currentDate",description:"currentDate : date",source:"@site/docs/language/commands/currentDate.md",sourceDirName:"language/commands",slug:"/language/commands/currentDate",permalink:"/docs/language/commands/currentDate",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/commands/currentDate.md",tags:[],version:"current",frontMatter:{id:"currentDate",title:"currentDate"},sidebar:"Develop",previous:{title:"createThumbnail",permalink:"/docs/language/commands/createThumbnail"},next:{title:"currentMethodName",permalink:"/docs/language/commands/currentMethodName"}},i={},u=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"currentDate")," : date"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result"),(0,a.kt)("td",{parentName:"tr",align:null},"date"),(0,a.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,a.kt)("td",{parentName:"tr",align:null},"Current date")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"currentDate")," command returns the current date from the server."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("p",null,"In the following example we assign the current date to a string variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-qs"},' var vCurrentDate : string\n vCurrentDate = "The date is "+string(currentDate)+"."\n\n')),(0,a.kt)("h4",{id:"see-also"},"See also"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/language/commands/dayOf"},(0,a.kt)("inlineCode",{parentName:"a"},"dayOf")),(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/language/commands/monthOf"},(0,a.kt)("inlineCode",{parentName:"a"},"monthOf")),(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/language/commands/yearOf"},(0,a.kt)("inlineCode",{parentName:"a"},"yearOf"))))}m.isMDXComponent=!0}}]);