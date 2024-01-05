"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[6814],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>A});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(n),m=o,A=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(A,l(l({ref:e},p),{},{components:n})):a.createElement(A,l({ref:e},p))}));function A(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52203:(t,e,n)=>{n.d(e,{ZP:()=>r});var a=n(67294),o=n(86010);const r={List:function(t){let{children:e,align:n="start",justifyContent:r="start"}=t;return a.createElement("div",{className:(0,o.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===r,"justify-center":"center"===r,"justify-end":"end"===r,"justify-between":"between"===r,"justify-around":"around"===r,"justify-evenly":"evenly"===r})},e)},Item:function(t){let{children:e,width:n}=t;const r=(t=>{const e="undefined"!=typeof window&&window.matchMedia(t),[n,o]=(0,a.useState)(e.matches);return(0,a.useEffect)((()=>(e.onchange=t=>o(t.matches),()=>e.onchange=null))),n})("(max-width: 1024px)");return a.createElement("div",{className:(0,o.Z)({"flex-1":!n}),style:r?{}:{width:n}},e)}}},76425:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(52203);const l={id:"componentsBasics",title:"Components basics"},i=void 0,s={unversionedId:"studio/design-webforms/components/componentsBasics",id:"studio/design-webforms/components/componentsBasics",title:"Components basics",description:"Components are the fundamental building blocks that constitute your application's user interface. These modular elements allow you to construct rich and dynamic interfaces by combining various functionalities and visual elements.",source:"@site/docs/studio/design-webforms/components/componentsBasics.md",sourceDirName:"studio/design-webforms/components",slug:"/studio/design-webforms/components/componentsBasics",permalink:"/docs/studio/design-webforms/components/componentsBasics",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/design-webforms/components/componentsBasics.md",tags:[],version:"current",frontMatter:{id:"componentsBasics",title:"Components basics"},sidebar:"Develop",previous:{title:"Webform Editor",permalink:"/docs/studio/design-webforms/create-webform"},next:{title:"Upload Custom Component",permalink:"/docs/studio/design-webforms/components/uploadCustomComponents"}},c={},p=[{value:"Locating Components",id:"locating-components",level:2},{value:"Adding Components",id:"adding-components",level:2},{value:"Uploading Custom Components",id:"uploading-custom-components",level:2},{value:"Tooltip",id:"tooltip",level:2},{value:"Essential Options",id:"essential-options",level:3},{value:"More Options",id:"more-options",level:3},{value:"Data Formatting",id:"data-formatting",level:2},{value:"Data Integration",id:"data-integration",level:2}],u={toc:p};function d(t){let{components:e,...l}=t;return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Components are the fundamental building blocks that constitute your application's user interface. These modular elements allow you to construct rich and dynamic interfaces by combining various functionalities and visual elements. "),(0,o.kt)("h2",{id:"locating-components"},"Locating Components"),(0,o.kt)("p",null,"Components are conveniently accessible from the left side panel in the ",(0,o.kt)("strong",{parentName:"p"},"Components")," tab section. This panel serves as a hub where you can explore and select the components you need to design your application's interface."),(0,o.kt)("h2",{id:"adding-components"},"Adding Components"),(0,o.kt)("p",null,"Incorporating components into your webform is a straightforward process that involves ",(0,o.kt)("strong",{parentName:"p"},"drag-and-drop")," functionality. Simply select a component and place it onto your working area or canvas. "),(0,o.kt)("p",null,"You have the flexibility to drop components directly onto the webform itself, as well as within other components that accept nested elements. This versatility allows you to construct complex layouts and hierarchies by combining different components within one another. "),(0,o.kt)("img",{alt:"explorer",src:n(24433).Z,style:{borderRadius:"6px"}}),(0,o.kt)("h2",{id:"uploading-custom-components"},"Uploading Custom Components"),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"60%"},"Qodly Studio provides a dedicated upload ",(0,o.kt)("img",{src:n(10356).Z,style:{borderRadius:"6px",width:"4%"}})," button in the Component bar, allowing users to upload ",(0,o.kt)("a",{href:"uploadCustomComponents"},"Custom Components"),"."),(0,o.kt)(r.ZP.Item,{width:"35%"},(0,o.kt)("img",{src:n(62945).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("h2",{id:"tooltip"},"Tooltip"),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"65%"},"When you select a component on the canvas, a contextual tooltip becomes available, offering a variety of actions that can be performed on the chosen component. These actions provide you with the tools to efficiently manage and manipulate your webform's design. Here's a breakdown of the actions available in the tooltip:"),(0,o.kt)(r.ZP.Item,{width:"25%"},(0,o.kt)("img",{alt:"explorer",src:n(65778).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("h3",{id:"essential-options"},"Essential Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Move"),(0,o.kt)("td",{parentName:"tr",align:null},"Reposition the selected component on the canvas.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Select Parent Component"),(0,o.kt)("td",{parentName:"tr",align:null},"Select the parent component of the current selection.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Delete Component"),(0,o.kt)("td",{parentName:"tr",align:null},"Remove the selected component from the canvas. As an alternative solution, you can use the shortcut ",(0,o.kt)("strong",{parentName:"td"},"Alt + Shift + Delete (\u2325 + \u21e7 + Delete for Mac)"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Export Styles"),(0,o.kt)("td",{parentName:"tr",align:null},"Export the overridden CSS properties to a new CSS class.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Open Events Panel"),(0,o.kt)("td",{parentName:"tr",align:null},"Binding events to the selected component.")))),(0,o.kt)("h3",{id:"more-options"},"More Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Copy"),(0,o.kt)("td",{parentName:"tr",align:null},"Make a copy of the selected component. As an alternative solution, you can use the shortcut ",(0,o.kt)("strong",{parentName:"td"},"Alt + C (\u2325 + C for Mac)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cut"),(0,o.kt)("td",{parentName:"tr",align:null},"Cuts the selected component so you can paste it elsewhere. As an alternative solution, you can use the shortcut ",(0,o.kt)("strong",{parentName:"td"},"Alt + X (\u2325 + X for Mac)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Paste"),(0,o.kt)("td",{parentName:"tr",align:null},"Paste the copied component directly into your webform. As an alternative solution, you can use the shortcut ",(0,o.kt)("strong",{parentName:"td"},"Alt + V (\u2325 + V for Mac)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Paste into"),(0,o.kt)("td",{parentName:"tr",align:null},"Paste the copied component into another component. As an alternative solution, you can use the shortcut ",(0,o.kt)("strong",{parentName:"td"},"Alt + \u21e7 + V (\u2325 + \u21e7 + V for Mac)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Duplicate"),(0,o.kt)("td",{parentName:"tr",align:null},"Duplicate the selected component in the same parent component. As an alternative solution, you can use the shortcut ",(0,o.kt)("strong",{parentName:"td"},"Alt + D (\u2325 + D for Mac)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Save as craft"),(0,o.kt)("td",{parentName:"tr",align:null},"Save the component, its child components, and their styles as a reusable component. As an alternative solution, you can use the shortcut ",(0,o.kt)("strong",{parentName:"td"},"Alt + K (\u2325 + K for Mac)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Copy content"),(0,o.kt)("td",{parentName:"tr",align:null},"Copy content. As an alternative solution, you can use the shortcut ",(0,o.kt)("strong",{parentName:"td"},"Alt + \u21e7 + C (\u2325 + \u21e7 + C for Mac)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Clear styles"),(0,o.kt)("td",{parentName:"tr",align:null},"Clear the styles of the selected component (resets the overridden CSS properties). As an alternative solution, you can use the shortcut ",(0,o.kt)("strong",{parentName:"td"},"Alt + J (\u2325 + J for Mac)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Clear content"),(0,o.kt)("td",{parentName:"tr",align:null},"Clear content within the selected component. As an alternative solution, you can use the shortcut ",(0,o.kt)("strong",{parentName:"td"},"Alt + E (\u2325 + E for Mac)"))))),(0,o.kt)("h2",{id:"data-formatting"},"Data Formatting"),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"60%"},"Your webforms can incorporate datasource attributes with data types such as string, number, date, time, or duration. When these attributes are presented within components, you have the option to choose their display format in the Properties section."),(0,o.kt)(r.ZP.Item,{width:"35%"},(0,o.kt)("img",{alt:"explorer",src:n(87942).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Formatting options may vary based on the specific data type of the attribute and the type of component being used.")),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"60%"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"For ",(0,o.kt)("strong",null,"Text (string)"),":")," ",(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",null,"UPPERCASE"),": Converts all characters to uppercase."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"lowercase"),": Converts all characters to lowercase."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"Capitalize"),": Capitalizes the first letter of the text."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"Capitalize Each Word"),": Capitalizes the first letter of each word.")))),(0,o.kt)(r.ZP.Item,{width:"35%"},(0,o.kt)("img",{alt:"explorer",src:n(49219).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("br",null),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"60%"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"For ",(0,o.kt)("strong",null,"Number"),":")," ",(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",null,"0"),": Standard numerical format."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"0%"),": Displays the number as a percentage."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"#,##0"),": Adds thousands separators to the number."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"#,##0.00"),": Adds thousands separators and displays two decimal places.")),(0,o.kt)("br",null),"Refer to the ",(0,o.kt)("a",{href:"https://support.microsoft.com/en-us/office/review-guidelines-for-customizing-a-number-format-c0a1d1fa-d3f4-4018-96b7-9c9354dd99f5"},"Review guidelines")," for customizing ",(0,o.kt)("code",null,"number formats"),".")),(0,o.kt)(r.ZP.Item,{width:"35%"},(0,o.kt)("img",{alt:"explorer",src:n(362).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("br",null),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"60%"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"For ",(0,o.kt)("strong",null,"Date"),":")," ",(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",null,"Date short"),": Displays the date in a short format."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"Date long"),": Displays the date in a long format."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"Date abbreviated"),": Displays the date with abbreviated month name."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"ISO date GMT"),": Displays the date in ISO 8601 format with GMT time zone."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"UTC String"),": Displays the date in a UTC format.")),(0,o.kt)("br",null),"Check the ",(0,o.kt)("a",{href:"https://date-fns.org/v2.30.0/docs/format"},"date-fns library")," for a comprehensive range of ",(0,o.kt)("code",null,"date format")," options and usage examples. ",(0,o.kt)("br",null),"For instance, you can format your date as ",(0,o.kt)("code",null,"EEE, MMM dd")," to achieve a different format from ",(0,o.kt)("code",null,"date abbreviated"),", which has the format ",(0,o.kt)("code",null,"EEE, MMM dd, yyyy"),".")),(0,o.kt)(r.ZP.Item,{width:"35%"},(0,o.kt)("img",{alt:"explorer",src:n(24289).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("br",null),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"60%"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"For ",(0,o.kt)("strong",null,"Duration"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("strong",null,"Simple"),": 14:40:30."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"Distance"),": about 15 hours."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"Distance with Suffix"),": in about 15 hours."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"Strict Distance"),": 15 hours."),(0,o.kt)("li",null,(0,o.kt)("strong",null,"Strict Distance with Suffix"),": in 15 hours.")),(0,o.kt)("i",null,(0,o.kt)("b",null,"Note:")," Examples with duration 52 830 000 ms."))),(0,o.kt)(r.ZP.Item,{width:"35%"},(0,o.kt)("img",{alt:"explorer",src:n(59117).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("h2",{id:"data-integration"},"Data Integration"),(0,o.kt)("p",null,"This section serves as a fundamental introduction to the integration of data sources with components. It's essential to note that each component has its own dedicated section on its respective page, including the following subsections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data Binding"),": This step configures the connection between a component and a data source, determining where the component retrieves its data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data Display"),": After binding data, this section guides you in visually presenting data within the component, including configuring its appearance and additional components.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dynamic Attribute Display"),": This section explains how a component can automatically display attributes of a selected data source, offering detailed information without extra interactions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Server-Side Interaction"),": This section explains obtaining user selections in a server-side context when a datasource is bound to a component, enabling content retrieval and use."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please note that the following subsections (Data Binding, Data Display, Dynamic Attribute Display, and Server-Side Interaction) may or may not be applicable to all components. Their presence or absence depends on the specific component's functionality and use case. ")))}d.isMDXComponent=!0},24433:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/addingComponents-28028aa8ca5e0500ea47271d2cd3060a.gif"},62945:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/customComponent_1-3a8a4606167f9571f323822446fb8ab7.png"},10356:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,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"},87942:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/formats-e682987fbcbbc9e567bf58a216bf61dd.png"},24289:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/textInput_InputFomat_Date-52d2a8572d077b6c93a9aecbf40239e9.png"},362:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/textInput_InputFomat_Number-a1eccf6c68210bdcb48b3804792c2afc.png"},49219:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/textInput_InputFomat_Text-54f74cc9bac8d2295192abae9fff93bc.png"},59117:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/textInput_InputFomat_Time-97943fbea84d8f906c2aa6089da1854e.png"},65778:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/tooltip2-fdd6072bd21e9eff4ee0e47e9431a894.png"}}]);