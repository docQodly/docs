"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[6594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=d(r),u=a,g=c["".concat(i,".").concat(u)]||c[u]||s[u]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[c]="string"==typeof e?e:a,o[1]=m;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={id:"methodCalledOnError",title:"methodCalledOnError"},o=void 0,m={unversionedId:"language/commands/methodCalledOnError",id:"language/commands/methodCalledOnError",title:"methodCalledOnError",description:"methodCalledOnError( { scope string",source:"@site/docs/language/commands/methodCalledOnError.md",sourceDirName:"language/commands",slug:"/language/commands/methodCalledOnError",permalink:"/docs/language/commands/methodCalledOnError",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/commands/methodCalledOnError.md",tags:[],version:"current",frontMatter:{id:"methodCalledOnError",title:"methodCalledOnError"},sidebar:"Develop",previous:{title:"matchRegex",permalink:"/docs/language/commands/matchRegex"},next:{title:"milliseconds",permalink:"/docs/language/commands/milliseconds"}},i={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"methodCalledOnError"),"( { ",(0,a.kt)("em",{parentName:"p"},"scope")," : integer } ) : string"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scope"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"->"),(0,a.kt)("td",{parentName:"tr",align:null},"Scope of the error method")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"result"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of method called on error")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"methodCalledOnError")," command returns the name of the method installed by ",(0,a.kt)("a",{parentName:"p",href:"/docs/language/commands/onErrCall"},(0,a.kt)("inlineCode",{parentName:"a"},"onErrCall"))," for the current process or the defined ",(0,a.kt)("em",{parentName:"p"},"scope"),"."),(0,a.kt)("p",null,"In the ",(0,a.kt)("em",{parentName:"p"},"scope")," parameter, pass the execution context for which you want to get the name of the error handler method. You can use one of the following constants:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Constant"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ek errors from components"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"Errors that occurred in components")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ek global"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"Errors that occurred in the global execution context of the project")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ek local"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Errors that occurred in the local execution context (default if ",(0,a.kt)("em",{parentName:"td"},"scope")," parameter is omitted)")))),(0,a.kt)("p",null,"If no method has been installed for the ",(0,a.kt)("em",{parentName:"p"},"scope"),', an empty string ("") is returned.'),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-qs"},' var methCurrent, refs : string\n methCurrent = methodCalledOnError\n onErrCall("NewMethod")\n  //If the file cannot be opened, an error is generated\n refs = jsonParse(file("/PACKAGE/Project/Sources/Shared/assets/files/i18n.json").getText())\n  //Reinstallation of previous method\n onErrCall(methCurrent)\n')),(0,a.kt)("h4",{id:"see-also"},"See also"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/language/commands/onErrCall"},(0,a.kt)("inlineCode",{parentName:"a"},".onErrCall()"))))}c.isMDXComponent=!0}}]);