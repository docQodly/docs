"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||p[m]||c;return n?o.createElement(f,l(l({ref:t},d),{},{components:n})):o.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52203:(e,t,n)=>{n.d(t,{ZP:()=>c});var o=n(67294),r=n(86010);const c={List:function(e){let{children:t,align:n="start",justifyContent:c="start"}=e;return o.createElement("div",{className:(0,r.Z)("flex flex-col lg:flex-row flex-wrap",{"items-start":"start"===n,"items-center":"center"===n,"items-end":"end"===n},{"justify-start":"start"===c,"justify-center":"center"===c,"justify-end":"end"===c,"justify-between":"between"===c,"justify-around":"around"===c,"justify-evenly":"evenly"===c})},t)},Item:function(e){let{children:t,width:n}=e;const c=(e=>{const t="undefined"!=typeof window&&window.matchMedia(e),[n,r]=(0,o.useState)(t.matches);return(0,o.useEffect)((()=>(t.onchange=e=>r(e.matches),()=>t.onchange=null))),n})("(max-width: 1024px)");return o.createElement("div",{className:(0,r.Z)({"flex-1":!n}),style:c?{}:{width:n}},t)}}},61363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),c=n(52203);const l={id:"checkBox",title:"Checkbox",hide_title:!0},i=void 0,a={unversionedId:"qodlyHeroHandbook/qodlyStudio/webforms/components/components/checkBox",id:"qodlyHeroHandbook/qodlyStudio/webforms/components/components/checkBox",title:"Checkbox",description:"Check Box",source:"@site/docs/qodlyHeroHandbook/qodlyStudio/webforms/components/components/checkbox.md",sourceDirName:"qodlyHeroHandbook/qodlyStudio/webforms/components/components",slug:"/qodlyHeroHandbook/qodlyStudio/webforms/components/components/checkBox",permalink:"/docs/qodlyHeroHandbook/qodlyStudio/webforms/components/components/checkBox",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/qodlyHeroHandbook/qodlyStudio/webforms/components/components/checkbox.md",tags:[],version:"current",frontMatter:{id:"checkBox",title:"Checkbox",hide_title:!0}},s={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)(c.ZP.List,{align:"center"},(0,r.kt)(c.ZP.Item,{width:"7%"},(0,r.kt)("div",{class:"checkBoxComponentSVG"})),(0,r.kt)(c.ZP.Item,null,(0,r.kt)("h2",{style:{color:"#B174E5",margin:"0"}},"Check Box"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"test "),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);