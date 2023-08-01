"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[6233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(a,".").concat(f)]||u[f]||p[f]||l;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2203:(e,t,n)=>{n.d(t,{ZP:()=>l});var o=n(7294),r=n(6010);const l={List:function(e){let{children:t,align:n="start",justifyContent:l="start"}=e;return o.createElement("div",{className:(0,r.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===l,"justify-center":"center"===l,"justify-end":"end"===l,"justify-between":"between"===l,"justify-around":"around"===l,"justify-evenly":"evenly"===l})},t)},Item:function(e){let{children:t,width:n}=e;const l=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,r]=(0,o.useState)(t.matches);return(0,o.useEffect)((()=>(t.onchange=e=>r(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return o.createElement("div",{className:(0,r.Z)({"flex-1":!n}),style:l?{}:{width:n}},t)}}},3845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(7462),r=(n(7294),n(3905)),l=n(2203);const i={id:"fileInput",title:"File Input",hide_title:!0},c=void 0,a={unversionedId:"qodlyHeroHandbook/qodlyStudio/webforms/components/components/fileInput",id:"qodlyHeroHandbook/qodlyStudio/webforms/components/components/fileInput",title:"File Input",description:"File Input",source:"@site/docs/qodlyHeroHandbook/qodlyStudio/webforms/components/components/fileInput.md",sourceDirName:"qodlyHeroHandbook/qodlyStudio/webforms/components/components",slug:"/qodlyHeroHandbook/qodlyStudio/webforms/components/components/fileInput",permalink:"/docs/qodlyHeroHandbook/qodlyStudio/webforms/components/components/fileInput",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/qodlyHeroHandbook/qodlyStudio/webforms/components/components/fileInput.md",tags:[],version:"current",frontMatter:{id:"fileInput",title:"File Input",hide_title:!0},sidebar:"GetStarted",previous:{title:"DataTable",permalink:"/docs/qodlyHeroHandbook/qodlyStudio/webforms/components/components/dataTable"},next:{title:"Crafted components",permalink:"/docs/qodlyHeroHandbook/qodlyStudio/webforms/components/craftedComponents/intro"}},s={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)(l.ZP.List,{align:"center"},(0,r.kt)(l.ZP.Item,{width:"7%"},(0,r.kt)("div",{class:"fileInputComponentSVG"})),(0,r.kt)(l.ZP.Item,null,(0,r.kt)("h2",{style:{color:"#B174E5",margin:"0"}},"File Input"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"test "),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);