"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[3004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},99327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={id:"length",title:"length"},o=void 0,i={unversionedId:"language/commands/length",id:"language/commands/length",title:"length",description:"length ( aString integer",source:"@site/docs/language/commands/length.md",sourceDirName:"language/commands",slug:"/language/commands/length",permalink:"/docs/language/commands/length",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/commands/length.md",tags:[],version:"current",frontMatter:{id:"length",title:"length"},sidebar:"Develop",previous:{title:"lastErrors",permalink:"/docs/language/commands/lastErrors"},next:{title:"log",permalink:"/docs/language/commands/log"}},p={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"length")," ( ",(0,a.kt)("em",{parentName:"p"},"aString")," : string ) : integer"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"aString"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"->"),(0,a.kt)("td",{parentName:"tr",align:null},"String for which to return length")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,a.kt)("td",{parentName:"tr",align:null},"Length of string")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"length")," is used to find the length of a ",(0,a.kt)("em",{parentName:"p"},"aString"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," returns the number of characters that are in a ",(0,a.kt)("em",{parentName:"p"},"aString"),".."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When you want to check whether a string contains any characters, including ignorable characters, you must use the test ",(0,a.kt)("inlineCode",{parentName:"p"},"if(length(vtAnyText) == 0)")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},'if(vtAnyText == "")'),". If the string contains for example ",(0,a.kt)("inlineCode",{parentName:"p"},"char(1)"),", which is an ignorable character, ",(0,a.kt)("inlineCode",{parentName:"p"},"length(vtAnyText)")," does return 1 but ",(0,a.kt)("inlineCode",{parentName:"p"},'vtAnyText == ""')," returns true.")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-qs"},' var vtResult : string\n vlResult = length("Topaz") // vlResult gets 5\n vlResult = length("Citizen") // vlResult gets 7\n\n')))}m.isMDXComponent=!0}}]);