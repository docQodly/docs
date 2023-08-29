"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[8010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"fileupload",title:"File Upload"},i=void 0,l={unversionedId:"studio/design-webforms/components/fileupload",id:"studio/design-webforms/components/fileupload",title:"File Upload",description:"The File Upload component offers a streamlined approach for users to upload files to the server, providing a practical solution for handling binary or picture file transfers. This component enables users to effortlessly upload files, which are then securely stored within an allocated entity attribute.",source:"@site/docs/studio/design-webforms/components/fileupload.md",sourceDirName:"studio/design-webforms/components",slug:"/studio/design-webforms/components/fileupload",permalink:"/docs/studio/design-webforms/components/fileupload",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/design-webforms/components/fileupload.md",tags:[],version:"current",frontMatter:{id:"fileupload",title:"File Upload"},sidebar:"Studio",previous:{title:"Image",permalink:"/docs/studio/design-webforms/components/image"},next:{title:"Radio",permalink:"/docs/studio/design-webforms/components/radio"}},s={},p=[{value:"Use Cases",id:"use-cases",level:2},{value:"Customization Through Properties Panel",id:"customization-through-properties-panel",level:2},{value:"Data-Bounding",id:"data-bounding",level:2},{value:"Triggers and Events",id:"triggers-and-events",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"File Upload")," component offers a streamlined approach for users to upload files to the server, providing a practical solution for handling binary or picture file transfers. This component enables users to effortlessly upload files, which are then securely stored within an allocated entity attribute."),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"File Upload")," component finds valuable application in diverse scenarios, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Document Management"),": Facilitate efficient document uploads and storage for improved organization.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Media Sharing"),": Allow users to upload images, videos, or audio files for seamless sharing with others.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"File Archiving"),": Provide users with a means to securely store and retrieve essential files or records."))),(0,r.kt)("h2",{id:"customization-through-properties-panel"},"Customization Through Properties Panel"),(0,r.kt)("p",null,"Enhance the ",(0,r.kt)("strong",{parentName:"p"},"File Upload")," component to align with your application's requirements using the following customization options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Label"),": Personalize the label to offer clear instructions or guidance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Icon Position"),": Choose the position of the icon in relation to the label, allowing options for top, bottom, left, right, or even hidden for a seamless integration into your design.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Size Limit"),": Define the maximum file size users are allowed to upload, providing granular control over file dimensions. Choose from units such as KB, MB, and GB. If a user attempts to upload a file exceeding the specified size, an error message is displayed in the browser.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Media Type"),": Specify the supported file types that can be uploaded using the component. Supported types include text, image, video, and audio."))),(0,r.kt)("h2",{id:"data-bounding"},"Data-Bounding"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"File Upload")," component harnesses the power of data-binding to establish a dynamic connection between user interactions and the underlying data structure. The File Upload component's data-binding capabilities include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Entity Datasource"),": To fully utilize the File Upload component, associate it with an attribute of type Blob or picture within an ORDA entity. This attribute serves as the destination where the uploaded file will be stored.")),(0,r.kt)("p",null,"( \u2622\ufe0f to be done \u2622\ufe0f )"),(0,r.kt)("h2",{id:"triggers-and-events"},"Triggers and Events"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"File Upload")," component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On Click"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user clicks on the component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On Blur"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls for an action when the component loses focus (user clicks outside).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On Focus"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls for an action when the component gains focus (user clicks on it).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On MouseEnter"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor enters the area of the component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On MouseLeave"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls for an action when the user's mouse cursor exits the area of the component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On KeyDown"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is pressed down while the component is in focus.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On Keyup"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls for an action when a keyboard key is released while the component is in focus")))))}d.isMDXComponent=!0}}]);