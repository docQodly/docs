"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[7077],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,k=d["".concat(m,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3318:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"WebFormItemClass",title:"WebFormItem"},o=void 0,i={unversionedId:"language/WebFormItemClass",id:"language/WebFormItemClass",title:"WebFormItem",description:"The 4D.WebFormItem class allows you to handle the behavior of your webform components.",source:"@site/docs/language/WebFormItemClass.md",sourceDirName:"language",slug:"/language/WebFormItemClass",permalink:"/docs/language/WebFormItemClass",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/WebFormItemClass.md",tags:[],version:"current",frontMatter:{id:"WebFormItemClass",title:"WebFormItem"},sidebar:"Develop",previous:{title:"WebForm",permalink:"/docs/language/WebFormClass"},next:{title:"WebServer",permalink:"/docs/language/WebServerClass"}},m={},p=[{value:"Functions and properties",id:"functions-and-properties",level:3},{value:".hide()",id:"hide",level:3},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:".show()",id:"show",level:3},{value:"Description",id:"description-1",level:4},{value:".addCSSClass()",id:"addcssclass",level:3},{value:"Description",id:"description-2",level:4},{value:".removeCSSClass()",id:"removecssclass",level:3},{value:"Description",id:"description-3",level:4}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.WebFormItem")," class allows you to handle the behavior of your webform components."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"4D.WebFormItem")," objects are properties of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/WebFormClass"},(0,r.kt)("inlineCode",{parentName:"a"},"4D.WebForm"))," object returned by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/WebFormClass#webform"},(0,r.kt)("inlineCode",{parentName:"a"},"webForm"))," command. "),(0,r.kt)("p",null,"When you call the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/WebFormClass#webform"},(0,r.kt)("inlineCode",{parentName:"a"},"webForm"))," command, the returned ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," proxy object holds as many ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.WebFormItems")," as there are components with ",(0,r.kt)("a",{parentName:"p",href:"/docs/studio/design-webforms/create-webform#data-access-category"},(0,r.kt)("strong",{parentName:"a"},"server-side references"))," in your webform."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"WebFormObject.myImage")," refers to the image component with ",(0,r.kt)("inlineCode",{parentName:"p"},"myImage")," as server reference."),(0,r.kt)("h3",{id:"functions-and-properties"},"Functions and properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#addclass"},(0,r.kt)("strong",{parentName:"a"},".addCSSClass"),"(",(0,r.kt)("em",{parentName:"a"},"className")," : string)"),"\xa0","\xa0","\xa0","\xa0","adds the class specified in ",(0,r.kt)("em",{parentName:"td"},"className")," to the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#hide"},(0,r.kt)("strong",{parentName:"a"},".hide"),"()"),"\xa0","\xa0","\xa0","\xa0","hides the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#removeclass"},(0,r.kt)("strong",{parentName:"a"},".removeCSSClass"),"(",(0,r.kt)("em",{parentName:"a"},"className"),": string)"),"\xa0","\xa0","\xa0","\xa0","removes the class specified in ",(0,r.kt)("em",{parentName:"td"},"className")," from the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#show"},(0,r.kt)("strong",{parentName:"a"},".show"),"()"),"\xa0","\xa0","\xa0","\xa0","makes the component visible")))),(0,r.kt)("h3",{id:"hide"},".hide()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".hide"),"()"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null},"Does not require any parameters")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".hide()")," function hides the component."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"To call a function that hides an image when the user clicks a button: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Select the image component on the canvas, and enter a server-side reference in the Properties Panel > Server Side, for example "myImage".'),(0,r.kt)("li",{parentName:"ol"},"Create an exposed function named ",(0,r.kt)("inlineCode",{parentName:"li"},"isHidden")," that contains the following code:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'exposed function isHidden()\n\nvar myComponent : 4D.WebFormItem\n\nmyComponent = webForm.myImage\nmyComponent.hide() // Hide the component that has "myImage" as server reference \n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Select the Button component and add an ",(0,r.kt)("inlineCode",{parentName:"li"},"onclick")," event to it."),(0,r.kt)("li",{parentName:"ol"},"Attach the ",(0,r.kt)("inlineCode",{parentName:"li"},"isHidden")," function to the event.")),(0,r.kt)("h3",{id:"show"},".show()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".show"),"()"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null},"Does not require any parameters")))),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".show()")," function makes the component visible. If the component was already visible, the function does nothing."),(0,r.kt)("h3",{id:"addcssclass"},".addCSSClass()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".addCSSClass"),"(",(0,r.kt)("em",{parentName:"p"},"className")," : string)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"className"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the CSS class to add to the component")))),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},".addCSSClass")," function adds the class specified in ",(0,r.kt)("em",{parentName:"p"},"className")," to the component."),(0,r.kt)("h3",{id:"removecssclass"},".removeCSSClass()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".removeCSSClass"),"(",(0,r.kt)("em",{parentName:"p"},"className"),": string)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"className"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the CSS class to remove from the component")))),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".removeCSSClass()")," function removes the class specified in ",(0,r.kt)("em",{parentName:"p"},"className")," from the component."))}d.isMDXComponent=!0}}]);