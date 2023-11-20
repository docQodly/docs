"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(67294),a=n(86010);const l={List:function(e){let{children:t,align:n="start",justifyContent:l="start"}=e;return r.createElement("div",{className:(0,a.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===l,"justify-center":"center"===l,"justify-end":"end"===l,"justify-between":"between"===l,"justify-around":"around"===l,"justify-evenly":"evenly"===l})},t)},Item:function(e){let{children:t,width:n}=e;const l=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,a]=(0,r.useState)(t.matches);return(0,r.useEffect)((()=>(t.onchange=e=>a(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return r.createElement("div",{className:(0,a.Z)({"flex-1":!n}),style:l?{}:{width:n}},t)}}},48643:(e,t,n)=>{var r=n(67294),a=n(86010);const l=e=>{let{children:t}=e;return r.createElement("div",{className:"release-notes"},t)};l.Items=e=>{let{children:t}=e;return r.createElement("div",{className:"release-notes-items"},t)},l.Item=e=>{let{children:t,width:n}=e;const l=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,a]=r.useState(t.matches);return r.useEffect((()=>(t.onchange=e=>a(e.matches),()=>t.onchange=null)),[]),n})("(max-width: 1024px)");return r.createElement("div",{className:(0,a.Z)("release-notes-item",{"flex-1":!n}),style:l?{}:{width:n}},t)},l.Timeline=e=>{let{children:t}=e;return r.createElement("div",{className:"release-notes-timeline"},r.createElement("div",null,t))},l.Meta=e=>{let{children:t}=e;return r.createElement("div",{className:"release-notes-meta"},t)},l.Version=e=>{let{children:t}=e;return r.createElement("div",{className:"release-notes-version"},t)},l.ReleaseDate=e=>{let{children:t}=e;return r.createElement("div",{className:"release-notes-release-date"},t)},l.Connector=()=>r.createElement("div",{className:"release-notes-connector"},r.createElement("div",null)),l.Content=e=>{let{children:t}=e;return r.createElement("div",{className:"release-notes-content"},t)}},82405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));n(52203),n(48643);const l={id:"v1.0.0-beta.2",title:"1.0.0 - beta.2",hide_table_of_contents:!0},i=void 0,o={unversionedId:"notes/v1.0.0-beta.2",id:"notes/v1.0.0-beta.2",title:"1.0.0 - beta.2",description:"20/11/2023",source:"@site/docs/notes/v1.0.0-beta-2.md",sourceDirName:"notes",slug:"/notes/v1.0.0-beta.2",permalink:"/docs/notes/v1.0.0-beta.2",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/notes/v1.0.0-beta-2.md",tags:[],version:"current",frontMatter:{id:"v1.0.0-beta.2",title:"1.0.0 - beta.2",hide_table_of_contents:!0},sidebar:"ReleaseNotes",next:{title:"1.0.0 - beta.1",permalink:"/docs/notes/v1.0.0-beta.1"}},s={},c=[{value:"20/11/2023",id:"20112023",level:4},{value:"What&#39;s New",id:"whats-new",level:2},{value:"Qodly Studio",id:"qodly-studio",level:3},{value:"Qodly Server",id:"qodly-server",level:3},{value:"Improvements",id:"improvements",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"20112023"},"20/11/2023"),(0,a.kt)("h2",{id:"whats-new"},"What's New"),(0,a.kt)("h3",{id:"qodly-studio"},"Qodly Studio"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h3",{id:"qodly-server"},"Qodly Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New ",(0,a.kt)("inlineCode",{parentName:"li"},"collection.multiSort")," function. "),(0,a.kt)("li",{parentName:"ul"},"Support of ",(0,a.kt)("em",{parentName:"li"},"context")," parameter in ",(0,a.kt)("inlineCode",{parentName:"li"},"Formula from string"),"."),(0,a.kt)("li",{parentName:"ul"},"Global modification stamp to help implementing data synchronization modules. New functions: ","[",(0,a.kt)("inlineCode",{parentName:"li"},"ds.getGlobalStamp"),"]"," and ","[",(0,a.kt)("inlineCode",{parentName:"li"},"ds.setGlobalStamp"),"]",". "),(0,a.kt)("li",{parentName:"ul"},"Assigning file references to picture/blob attributes is supported in ORDA."),(0,a.kt)("li",{parentName:"ul"},"Support for initializing the variable's value and data type in the declaration line."),(0,a.kt)("li",{parentName:"ul"},"New syntax for declaring variadic parameters")),(0,a.kt)("h2",{id:"improvements"},"Improvements"),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"))}u.isMDXComponent=!0}}]);