"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[2809],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={id:"first-app",title:"Creating an Application"},i=void 0,p={unversionedId:"get-started/first-app",id:"get-started/first-app",title:"Creating an Application",description:"Here are the main steps in creating a Qodly application:",source:"@site/docs/get-started/first-app.md",sourceDirName:"get-started",slug:"/get-started/first-app",permalink:"/docs/get-started/first-app",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/get-started/first-app.md",tags:[],version:"current",frontMatter:{id:"first-app",title:"Creating an Application"},sidebar:"GetStarted",previous:{title:"Quickstart",permalink:"/docs/get-started/quickstart"},next:{title:"Testing and Debugging",permalink:"/docs/get-started/test-debug"}},l={},s=[],d={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Here are the main steps in creating a Qodly application:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/cloud/consoleOverview#managing-applications"},"Clone"),' an existing app by clicking on "Clone" or start a new app and choose an ',(0,n.kt)("a",{parentName:"li",href:"/docs/cloud/myApps#creating-a-new-application"},"application template"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/cloud/myApps#step-3-configure-application-details"},"Set Up App Details"),": Enter the project name, description, and other details."),(0,n.kt)("li",{parentName:"ol"},"Choose the ",(0,n.kt)("a",{parentName:"li",href:"/docs/cloud/myApps#environment-configuration"},"resources")," you need for your development environment."),(0,n.kt)("li",{parentName:"ol"},"Add your ",(0,n.kt)("a",{parentName:"li",href:"/docs/cloud/myApps#step-4-finalize-billing"},"billing details"),". You can add your own card or invite someone else to add theirs."),(0,n.kt)("li",{parentName:"ol"},"Subscribe."),(0,n.kt)("li",{parentName:"ol"},"Your development environment is installed. You can ",(0,n.kt)("a",{parentName:"li",href:"/docs/studio/overview"},"go to Studio")," and start building your app."),(0,n.kt)("li",{parentName:"ol"},"A welcome tour will begin for a quick overview of Qodly Studio."),(0,n.kt)("li",{parentName:"ol"},"Start from the frontend by ",(0,n.kt)("a",{parentName:"li",href:"/docs/studio/pageLoaders/pageLoaderOverview"},"dragging and dropping components")," (or widgets) or use ",(0,n.kt)("a",{parentName:"li",href:"/docs/studio/pageLoaders/templates"},"pre-made templates"),". Alternatively, begin by preparing your data using the ",(0,n.kt)("a",{parentName:"li",href:"/docs/studio/model/model-editor-interface"},"Data Model"),", ",(0,n.kt)("a",{parentName:"li",href:"/docs/studio/coding"},"code")," your functions, and then bind them with ",(0,n.kt)("a",{parentName:"li",href:"/docs/studio/pageLoaders/qodlySources"},"Qodly Sources")," to the frontend."),(0,n.kt)("li",{parentName:"ol"},"Manage ",(0,n.kt)("a",{parentName:"li",href:"/docs/studio/roles/overview"},"roles and privileges")," in the editor."),(0,n.kt)("li",{parentName:"ol"},"Your app is ready for ",(0,n.kt)("a",{parentName:"li",href:"/docs/studio/pageLoaders/pageLoaderOverview#preview"},"testing")," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/cloud/deployManagement"},"deployment"),".")))}c.isMDXComponent=!0}}]);