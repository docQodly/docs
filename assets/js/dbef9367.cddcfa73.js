"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,g=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(67294),r=n(86010);const o={List:function(e){let{children:t,align:n="start",justifyContent:o="start"}=e;return a.createElement("div",{className:(0,r.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===o,"justify-center":"center"===o,"justify-end":"end"===o,"justify-between":"between"===o,"justify-around":"around"===o,"justify-evenly":"evenly"===o})},t)},Item:function(e){let{children:t,width:n}=e;const o=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,r]=(0,a.useState)(t.matches);return(0,a.useEffect)((()=>(t.onchange=e=>r(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return a.createElement("div",{className:(0,r.Z)({"flex-1":!n}),style:o?{}:{width:n}},t)}}},96188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),o=n(52203);const i={id:"image",title:"Image"},s=void 0,l={unversionedId:"studio/design-webforms/components/image",id:"studio/design-webforms/components/image",title:"Image",description:"The Image component is a UI element that enables you to integrate images into your webform.",source:"@site/docs/studio/design-webforms/components/image.md",sourceDirName:"studio/design-webforms/components",slug:"/studio/design-webforms/components/image",permalink:"/docs/studio/design-webforms/components/image",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/design-webforms/components/image.md",tags:[],version:"current",frontMatter:{id:"image",title:"Image"},sidebar:"Studio",previous:{title:"Text Input",permalink:"/docs/studio/design-webforms/components/textinput"},next:{title:"File Upload",permalink:"/docs/studio/design-webforms/components/fileupload"}},c={},m=[{value:"Use Cases",id:"use-cases",level:2},{value:"Display Options",id:"display-options",level:2},{value:"Triggers and Events",id:"triggers-and-events",level:2}],d={toc:m};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Image")," component is a UI element that enables you to integrate images into your webform. "),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Image")," component offers versatile solutions for enhancing your web application's visual experience:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Static Images"),": Display fixed visual elements, such as logos, icons, and decorative images."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dynamic Conten"),": Display dynamic content fetched from datasources."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Visualization"),": Display charts, graphs, and diagrams as images, enabling the visualization of complex data in a more accessible and engaging manner.")),(0,r.kt)("h2",{id:"display-options"},"Display Options"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Image")," component offers multiple options for displaying images:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(o.ZP.List,{align:"center",justifyContent:"between"},(0,r.kt)(o.ZP.Item,{width:"55%"},(0,r.kt)("span",{style:{fontWeight:"bold"}},"Datasource Binding"),": You can bind the Image component to a datasource, causing the displayed image to update according to the values within the datasource. When using datasource binding, make sure to include ",(0,r.kt)("code",null,".__deferred.uri")," to access the image's URI."),(0,r.kt)(o.ZP.Item,{width:"45%"},(0,r.kt)("img",{alt:"explorer",src:n(88050).Z,style:{borderRadius:"6px"}})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(o.ZP.List,{align:"center",justifyContent:"between"},(0,r.kt)(o.ZP.Item,{width:"55%"},(0,r.kt)("span",{style:{fontWeight:"bold"}},"Image Source"),': Alternatively, you can specify an image source directly. This source can be a URL or a path to the image stored in the Shared folder. For instance, if you\'ve uploaded an image named "booking.png", you can set the image source as ',(0,r.kt)("code",null,"/$shared/visuals/booking.png"),"."),(0,r.kt)(o.ZP.Item,{width:"45%"},(0,r.kt)("img",{alt:"explorer",src:n(8298).Z,style:{borderRadius:"6px"}})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Direct Image Upload"),": The Image component simplifies the process of adding new images. By clicking on the image component and uploading the desired picture, the image is automatically added to the Shared folder's ",(0,r.kt)("code",null,"/$shared/assets/images")," subdirectory. The component's image source is updated accordingly."))),(0,r.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Image")," component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On Click"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the component.")))))}u.isMDXComponent=!0},88050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image_DatasourceBinding-b0690bac69108ff81be1b757c0a9b80f.png"},8298:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image_ImageSource-024cbe280b131cbada6c72817d9aef15.png"}}]);