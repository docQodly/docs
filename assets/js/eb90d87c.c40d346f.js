"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5132],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={id:"lowercase",title:"lowercase"},o=void 0,i={unversionedId:"language/commands/lowercase",id:"language/commands/lowercase",title:"lowercase",description:"lowercase ( aString string",source:"@site/docs/language/commands/lowercase.md",sourceDirName:"language/commands",slug:"/language/commands/lowercase",permalink:"/docs/language/commands/lowercase",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/commands/lowercase.md",tags:[],version:"current",frontMatter:{id:"lowercase",title:"lowercase"},sidebar:"Develop",previous:{title:"log",permalink:"/docs/language/commands/log"},next:{title:"mailConvertFromMIME",permalink:"/docs/language/commands/mailConvertFromMIME"}},c={},s=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"lowercase")," ( ",(0,n.kt)("em",{parentName:"p"},"aString")," : string {, ","*","} ) : string"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"aString"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"String to convert to lowercase")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"*"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:"center"},"->"),(0,n.kt)("td",{parentName:"tr",align:null},"If passed: keep accents")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,n.kt)("td",{parentName:"tr",align:null},"String in lowercase")))),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"lowercase")," takes ",(0,n.kt)("em",{parentName:"p"},"aString")," and returns the string with all alphabetic characters in lowercase."),(0,n.kt)("p",null,"The optional ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," parameter, if passed, indicates that any accented characters present in ",(0,n.kt)("em",{parentName:"p"},"aString")," must be returned as accented lowercase characters. By default, when this parameter is omitted, accented characters \u201close\u201d their accents after the conversion is carried out."),(0,n.kt)("h4",{id:"example-1"},"Example 1"),(0,n.kt)("p",null,'The following project method capitalizes the string or text received as parameter. For instance, Caps ("john") would return "John".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-qs"}," declare (myText : string) -> myCapText : string\n myCapText = lowercase(myText)\n if(length(myCapText)>0)\n    myCapText[[1]] == uppercase(myCapText[[1]])\n end\n\n")),(0,n.kt)("h4",{id:"example-2"},"Example 2"),(0,n.kt)("p",null,"This example compares the results obtained according to whether or not the ",(0,n.kt)("inlineCode",{parentName:"p"},"*")," parameter has been passed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-qs"},' var thestring : string\n thestring = lowercase("D\xc9J\xc0 VU") // thestring is "deja vu"\n thestring = lowercase("D\xc9J\xc0 VU",*) // thestring is "d\xe9j\xe0 vu"\n\n')),(0,n.kt)("h4",{id:"see-also"},"See also"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/language/commands/uppercase"},(0,n.kt)("inlineCode",{parentName:"a"},"uppercase"))))}m.isMDXComponent=!0}}]);