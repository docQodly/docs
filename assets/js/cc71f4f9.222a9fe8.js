"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[3876],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(n),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52203:(t,e,n)=>{n.d(e,{ZP:()=>r});var a=n(67294),o=n(86010);const r={List:function(t){let{children:e,align:n="start",justifyContent:r="start"}=t;return a.createElement("div",{className:(0,o.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===r,"justify-center":"center"===r,"justify-end":"end"===r,"justify-between":"between"===r,"justify-around":"around"===r,"justify-evenly":"evenly"===r})},e)},Item:function(t){let{children:e,width:n}=t;const r=(t=>{const e="undefined"!=typeof window&&window.matchMedia(t),[n,o]=(0,a.useState)(e.matches);return(0,a.useEffect)((()=>(e.onchange=t=>o(t.matches),()=>e.onchange=null))),n})("(max-width: 1024px)");return a.createElement("div",{className:(0,o.Z)({"flex-1":!n}),style:r?{}:{width:n}},e)}}},86381:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(52203);const i={id:"button",title:"Button"},s=void 0,l={unversionedId:"studio/pageLoaders/components/button",id:"studio/pageLoaders/components/button",title:"Button",description:"The Button  component is a UI element that prompts user engagement and triggers actions within your Page.",source:"@site/docs/studio/pageLoaders/components/button.md",sourceDirName:"studio/pageLoaders/components",slug:"/studio/pageLoaders/components/button",permalink:"/docs/studio/pageLoaders/components/button",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/pageLoaders/components/button.md",tags:[],version:"current",frontMatter:{id:"button",title:"Button"},sidebar:"Develop",previous:{title:"Text",permalink:"/docs/studio/pageLoaders/components/text"},next:{title:"Text Input",permalink:"/docs/studio/pageLoaders/components/textinput"}},u={},p=[{value:"Use Cases",id:"use-cases",level:2},{value:"Properties Customization",id:"properties-customization",level:2},{value:"Button Component",id:"button-component",level:3},{value:"Embedded Icon",id:"embedded-icon",level:3},{value:"Data Integration",id:"data-integration",level:2},{value:"Customizing Button Styles",id:"customizing-button-styles",level:2},{value:"Example 1 - Overall Component Style",id:"example-1---overall-component-style",level:3},{value:"Example 2 - Active Button Style",id:"example-2---active-button-style",level:3},{value:"Triggers and Events",id:"triggers-and-events",level:2},{value:"Button Component",id:"button-component-1",level:3},{value:"Embedded Icon",id:"embedded-icon-1",level:3}],c={toc:p};function d(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Button"),"  component is a UI element that prompts user engagement and triggers actions within your Page. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"Button")," component has an ",(0,o.kt)("strong",{parentName:"p"},"Icon")," element embedded within it. This is of great importance as configuring the ",(0,o.kt)("strong",{parentName:"p"},"Button")," component may require adjusting properties within the embedded element. This applies to the visual style, triggers, and actions as they may differ.")),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"Buttons are indispensable in a wide range of scenarios where user engagement and interaction are paramount:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Form Submission"),": Utilize buttons to allow users to submit forms after providing necessary input.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Navigation"),": Implement buttons to facilitate navigation between different sections or pages of your application.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data Manipulation"),": Enable users to perform operations such as adding, editing, or deleting data entries through buttons."))),(0,o.kt)("h2",{id:"properties-customization"},"Properties Customization"),(0,o.kt)("h3",{id:"button-component"},"Button Component"),(0,o.kt)("p",null,"Enhance the ",(0,o.kt)("strong",{parentName:"p"},"Button")," component to align with your application's requirements using the following customization options:"),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"65%"},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",null,"Label"),": Personalize the label to offer clear instructions or guidance."),(0,o.kt)("br",null),(0,o.kt)("li",null,(0,o.kt)("strong",null,"Icon Position"),": Choose the position of the icon in relation to the label, allowing options for top, bottom, left, right, or even hidden for a seamless integration into your design."))),(0,o.kt)(r.ZP.Item,{width:"30%"},(0,o.kt)("img",{src:n(82420).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("h3",{id:"embedded-icon"},"Embedded Icon"),(0,o.kt)("p",null,"Within the ",(0,o.kt)("strong",null,"Button")," component, an embedded ",(0,o.kt)("strong",null,"Icon")," allows for further customization of the following properties:"),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"65%"},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",null,"Icon"),": When the icon visibility is configured in the Button component's customization properties, you can select an icon from an icon picker list."))),(0,o.kt)(r.ZP.Item,{width:"30%"},(0,o.kt)("img",{src:n(80509).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("h2",{id:"data-integration"},"Data Integration"),(0,o.kt)("p",null,"When it comes to data-binding, it's important to note that the ",(0,o.kt)("strong",{parentName:"p"},"Button")," component itself is not inherently data-bound. Unlike components like the ",(0,o.kt)("strong",{parentName:"p"},"DataTable")," that derive their content from specified Qodly Sources, the ",(0,o.kt)("strong",{parentName:"p"},"Button")," component primarily focuses on initiating actions and interactions within the user interface."),(0,o.kt)("h2",{id:"customizing-button-styles"},"Customizing Button Styles"),(0,o.kt)("h3",{id:"example-1---overall-component-style"},"Example 1 - Overall Component Style"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"self")," selector targets the entire Button component, allowing you to customize its size, shape, and appearance with background color and shadows."),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"58%"},(0,o.kt)("pre",null,(0,o.kt)("code",{className:"language-css"},"/* Main component styling*/\nself {\n    width: 15rem;\n    height: 4rem;\n    border-radius: 1rem;\n    cursor: pointer;\n    background: #6d5dfc;\n    box-shadow:inset .2rem .2rem 1rem #8abdff, inset -.2rem -.2rem 1rem #5b0eeb, 0rem 0rem 1rem #c8d0e7, 0rem 0rem 0.5rem #FFFFFF;\n}"))),(0,o.kt)(r.ZP.Item,{width:"40%"},(0,o.kt)("img",{src:n(62072).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("h3",{id:"example-2---active-button-style"},"Example 2 - Active Button Style"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"self:active"),' selector applies when the button is actively pressed or clicked, providing visual feedback with a change in shadow effect to simulate a "pressed-in" appearance.'),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"58%"},(0,o.kt)("pre",null,(0,o.kt)("code",{className:"language-css"},"/* Button active (pressed) styling */\nself:active{\n    box-shadow:inset .2rem .2rem 1rem #5b0eeb, inset -.2rem -.2rem 1rem #8abdff;\n}"))),(0,o.kt)(r.ZP.Item,{width:"40%"},(0,o.kt)("img",{src:n(5196).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,o.kt)("h3",{id:"button-component-1"},"Button Component"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Button")," component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Event"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On Click"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On Blur"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the component loses focus (user clicks outside).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On Focus"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the component gains focus (user clicks on it).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On Keyup"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is released while the component is in focus")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On KeyDown"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is pressed down while the component is in focus.")))),(0,o.kt)("h3",{id:"embedded-icon-1"},"Embedded Icon"),(0,o.kt)("p",null,"The embedded ",(0,o.kt)("strong",{parentName:"p"},"Icon")," can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Event"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On Click"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the Icon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On Keyup"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is released while the Icon is in focus")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On KeyDown"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is pressed down while the Icon is in focus.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the Icon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,o.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the Icon.")))))}d.isMDXComponent=!0},82420:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/button_PropertiesCustomization-78f975ab6b806e2d8716d467e30f5378.png"},80509:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/button_icon-d0a1ce44adf28e60455673792bd08590.png"},62072:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/button_style1-2892c0fdf5fee3588a9fc37b1c8ab4fd.png"},5196:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/button_style2-865f2728c63969b2bc90fd08974419ef.png"}}]);