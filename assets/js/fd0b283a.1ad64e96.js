"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[4813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(67294),o=n(86010);const r={List:function(e){let{children:t,align:n="start",justifyContent:r="start"}=e;return a.createElement("div",{className:(0,o.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===r,"justify-center":"center"===r,"justify-end":"end"===r,"justify-between":"between"===r,"justify-around":"around"===r,"justify-evenly":"evenly"===r})},t)},Item:function(e){let{children:t,width:n}=e;const r=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,o]=(0,a.useState)(t.matches);return(0,a.useEffect)((()=>(t.onchange=e=>o(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return a.createElement("div",{className:(0,o.Z)({"flex-1":!n}),style:r?{}:{width:n}},t)}}},90921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(52203);const i={id:"sandbox",title:"Sandbox"},l=void 0,s={unversionedId:"cloud/sandbox",id:"cloud/sandbox",title:"Sandbox",description:"Overview",source:"@site/docs/cloud/sandbox.md",sourceDirName:"cloud",slug:"/cloud/sandbox",permalink:"/docs/cloud/sandbox",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/cloud/sandbox.md",tags:[],version:"current",frontMatter:{id:"sandbox",title:"Sandbox"},sidebar:"Run",previous:{title:"Console Overview",permalink:"/docs/cloud/consoleOverview"},next:{title:"My Apps",permalink:"/docs/cloud/myApps"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Usage Rules",id:"usage-rules",level:2},{value:"Creating the Sandbox",id:"creating-the-sandbox",level:2},{value:"Sleep Mode",id:"sleep-mode",level:2},{value:"Deletion Policy",id:"deletion-policy",level:2}],c={toc:d};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Sandbox in Qodly is a free environment designed for exploring, testing, and learning. It\u2019s ideal for trying out new templates, previewing Qodly features, and experimenting with the platform without any cost or commitment. However, it has limitations to ensure it's used for trial purposes only:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Sandbox environment is restricted and has specific limitations to prevent long-term use or complex deployment scenarios.")),(0,o.kt)("h2",{id:"usage-rules"},"Usage Rules"),(0,o.kt)("p",null,"Using the Sandbox environment comes with certain rules and limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Trial Usage"),": Ideal for trying out Qodly features, familiarizing yourself with the platform, or creating a demo for stakeholders.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Limited to One Sandbox per User"),": Each user can only create one Sandbox application. However, if needed, you can delete your current Sandbox and create a new one at any time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Single Development Environment"),": Unlike regular applications, the Sandbox only includes a single development environment. Additional environments cannot be added.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"No Backup or Support"),": The Sandbox environment is not backed up, and no official support is provided. It is designed for exploration and testing.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Watermarked Pages"),": All pages within the Sandbox display a watermark, indicating that it is a trial environment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resource Restrictions"),": The Sandbox environment is set to the default configuration, similar to the lowest-tier paid environment (Power 1, 100GB storage, and 1GB data outbound)."))),(0,o.kt)("h2",{id:"creating-the-sandbox"},"Creating the Sandbox"),(0,o.kt)("p",null,"To create a new Sandbox, follow these steps:"),(0,o.kt)(r.ZP.List,{align:"center",justifyContent:"between"},(0,o.kt)(r.ZP.Item,{width:"50%"},(0,o.kt)("ul",null,(0,o.kt)("li",null," ",(0,o.kt)("strong",null,"Access the Console"),": Open the Console."),(0,o.kt)("br",null),(0,o.kt)("li",null," ",(0,o.kt)("strong",null,'Click on "New Sandbox"'),': Select the "New Sandbox" button to initiate the creation process.'))),(0,o.kt)(r.ZP.Item,{width:"45%"},(0,o.kt)("img",{src:n(63482).Z,style:{borderRadius:"6px"}}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Select a Template"),": "),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Browse through the list of templates to find one that fits your project needs. Templates come with pre-configured code and settings suited for different types of projects."),(0,o.kt)("img",{src:n(3889).Z,style:{borderRadius:"6px"}})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Blank Template"),": If you prefer a completely custom setup without any pre-built code, select the Blank Template.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"More Info"),": Click ",(0,o.kt)("strong",{parentName:"p"},"More Info")," under a template to view additional details, such as images, a description, author information, and the supported language."),(0,o.kt)("img",{src:n(54693).Z,style:{borderRadius:"6px"}})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you\u2019ve chosen a template, click ",(0,o.kt)("strong",{parentName:"p"},"Create")," to proceed."))))),(0,o.kt)("p",null,"Once created, you\u2019ll see an overview of your Sandbox in the cosole homepage."),(0,o.kt)("h2",{id:"sleep-mode"},"Sleep Mode"),(0,o.kt)("p",null,"To optimize resource usage, the Sandbox utilize an automatic Sleep Mode feature, which helps conserve resources when the environment is inactive:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Automatic Sleep Mode"),": If the Sandbox remains inactive for more than 7 days, it will automatically enter Sleep Mode.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Manual Wake Up"),": You can reactivate the Sandbox by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Wake Up")," button, making it operational immediately. Each manual wake-up action is documented in the Activity log, including the time and user information.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Notifications"),": Qodly sends email notifications to inform you when your Sandbox enters or exits Sleep Mode."))),(0,o.kt)("h2",{id:"deletion-policy"},"Deletion Policy"),(0,o.kt)("p",null,"If a Sandbox environment remains inactive for an extended period, Qodly may permanently delete it according to the following policy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"3-Month Inactivity Threshold"),": If the Sandbox is not reactivated within 3 months, it will be permanently deleted.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Notification Prior to Deletion"),": Before deletion, Qodly will send an email notification, giving you an opportunity to save any necessary data or take other actions."))))}u.isMDXComponent=!0},63482:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/newSandbox-6b55ac547e1c5b438ced565c29008d76.png"},54693:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/templateMoreInfo-79e8b2d4be40779351e59f6e720f4fe4.png"},3889:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/templates-a4941cae2ee7766d0fba6b50e82d16a4.png"}}]);