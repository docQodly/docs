"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[4342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(67294),a=n(86010);const o={List:function(e){let{children:t,align:n="start",justifyContent:o="start"}=e;return r.createElement("div",{className:(0,a.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===o,"justify-center":"center"===o,"justify-end":"end"===o,"justify-between":"between"===o,"justify-around":"around"===o,"justify-evenly":"evenly"===o})},t)},Item:function(e){let{children:t,width:n}=e;const o=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,a]=(0,r.useState)(t.matches);return(0,r.useEffect)((()=>(t.onchange=e=>a(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return r.createElement("div",{className:(0,a.Z)({"flex-1":!n}),style:o?{}:{width:n}},t)}}},34442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(52203);const i={id:"icon",title:"Icon"},s=void 0,l={unversionedId:"studio/pageLoaders/components/icon",id:"studio/pageLoaders/components/icon",title:"Icon",description:"The Icon component is a UI element that displays graphical symbols or icons in web applications.",source:"@site/docs/studio/pageLoaders/components/icon.md",sourceDirName:"studio/pageLoaders/components",slug:"/studio/pageLoaders/components/icon",permalink:"/docs/studio/pageLoaders/components/icon",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/pageLoaders/components/icon.md",tags:[],version:"current",frontMatter:{id:"icon",title:"Icon"},sidebar:"Develop",previous:{title:"Select Input",permalink:"/docs/studio/pageLoaders/components/selectinput"},next:{title:"Checkbox",permalink:"/docs/studio/pageLoaders/components/checkbox"}},c={},p=[{value:"Use Cases",id:"use-cases",level:2},{value:"Properties Customization",id:"properties-customization",level:2},{value:"Data Integration",id:"data-integration",level:2},{value:"Triggers and Events",id:"triggers-and-events",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Icon")," component is a UI element that displays graphical symbols or icons in web applications."),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Icon")," component serves various purposes within user interfaces, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Action Indicators"),': Icons are used to represent actions, such as "Save," "Delete," or "Print".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Navigation Enhancements"),": Icons can be employed to enhance navigation by representing menu items, links, or categories.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Information Presentation"),": Icons are utilized to visually convey information, such as alerts, warnings, or success messages."))),(0,a.kt)("h2",{id:"properties-customization"},"Properties Customization"),(0,a.kt)("p",null,"Enhance the ",(0,a.kt)("strong",{parentName:"p"},"Icon")," component to align with your application's requirements using the following customization options:"),(0,a.kt)(o.ZP.List,{align:"center",justifyContent:"between"},(0,a.kt)(o.ZP.Item,{width:"60%"},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("strong",null,"Icon"),": Select the desired icon from a predefined list of icons. "))),(0,a.kt)(o.ZP.Item,{width:"30%"},(0,a.kt)("img",{src:n(80509).Z,style:{borderRadius:"6px"}}))),(0,a.kt)("h2",{id:"data-integration"},"Data Integration"),(0,a.kt)("p",null,"When it comes to data-binding, it's important to note that the ",(0,a.kt)("strong",{parentName:"p"},"Icon")," component itself is not inherently data-bound. Unlike components like the ",(0,a.kt)("strong",{parentName:"p"},"DataTable")," that derive their content from specified qodlysources, the main purpose of the ",(0,a.kt)("strong",{parentName:"p"},"Icon")," component is to provide a visual representation."),(0,a.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Icon")," component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On Click"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the component.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On Keyup"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is released while the component is in focus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On KeyDown"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is pressed down while the component is in focus.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the component.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,a.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the component.")))))}d.isMDXComponent=!0},80509:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/button_icon-d0a1ce44adf28e60455673792bd08590.png"}}]);