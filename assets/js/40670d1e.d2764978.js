"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[6153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||n;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},87051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var r=a(87462),l=(a(67294),a(3905));const n={id:"$filter",title:"$filter"},i=void 0,p={unversionedId:"api/$filter",id:"api/$filter",title:"$filter",description:"Functionality",source:"@site/docs/api/$filter.md",sourceDirName:"api",slug:"/api/$filter",permalink:"/docs/api/$filter",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/api/$filter.md",tags:[],version:"current",frontMatter:{id:"$filter",title:"$filter"},sidebar:"API",previous:{title:"$expand",permalink:"/docs/api/$expand"},next:{title:"$format",permalink:"/docs/api/$format"}},o={},s=[{value:"Functionality",id:"functionality",level:2},{value:"Definition",id:"definition",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Attribute",id:"attribute",level:3},{value:"Comparator",id:"comparator",level:3},{value:"Handling Special Characters",id:"handling-special-characters",level:3},{value:"Example",id:"example",level:4},{value:"Use Cases",id:"use-cases",level:2},{value:"Using a Simple Filter",id:"using-a-simple-filter",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Using a Complex Filter",id:"using-a-complex-filter",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Using the Params Property",id:"using-the-params-property",level:3},{value:"Syntax",id:"syntax-3",level:4},{value:"Example",id:"example-3",level:4},{value:"Best Practices",id:"best-practices",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functionality"},"Functionality"),(0,l.kt)("h3",{id:"definition"},"Definition"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"$filter")," endpoint allows you to query data within a dataclass or method using various criteria. This endpoint is versatile, supporting both simple and complex filters, as well as filters using parameters. "),(0,l.kt)("h3",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"To use the ",(0,l.kt)("inlineCode",{parentName:"p"},"$filter")," parameter, follow this format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'GET {{ApiEndpoint}}/rest/{{dataClass}}?$filter="{{filterExpression}}"\n')),(0,l.kt)("h3",{id:"attribute"},"Attribute"),(0,l.kt)("p",null,"Attributes can be directly specified if they belong to the same dataclass. For attributes from related dataclasses, you must include the relation path. The attribute names are case-sensitive."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Filtering by a related dataclass attribute:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'GET /rest/Employee?$filter="employer.name=Acme"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Filtering by an object attribute using dot notation:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'GET /rest/Person?$filter="objAttribute.prop2=9181"\n')))),(0,l.kt)("h3",{id:"comparator"},"Comparator"),(0,l.kt)("p",null,"The comparator in a filter specifies the type of comparison to be made. The following comparators are supported:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Comparator"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"="),(0,l.kt)("td",{parentName:"tr",align:null},"Equals to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"!="),(0,l.kt)("td",{parentName:"tr",align:null},"Not equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">"),(0,l.kt)("td",{parentName:"tr",align:null},"Greater than")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">="),(0,l.kt)("td",{parentName:"tr",align:null},"Greater than or equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<"),(0,l.kt)("td",{parentName:"tr",align:null},"Less than")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"<="),(0,l.kt)("td",{parentName:"tr",align:null},"Less than or equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"begin"),(0,l.kt)("td",{parentName:"tr",align:null},"Begins with")))),(0,l.kt)("h3",{id:"handling-special-characters"},"Handling Special Characters"),(0,l.kt)("p",null,"When using quotes in filter values, you must escape them using their character codes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Single quotes ('): ",(0,l.kt)("inlineCode",{parentName:"li"},"\\u0027")),(0,l.kt)("li",{parentName:"ul"},'Double quotes ("): ',(0,l.kt)("inlineCode",{parentName:"li"},"\\u0022"))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("p",null,'To filter by last name "O\'Reilly":'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Using the params property:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'GET /rest/Person?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\'\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Directly in the filter expression:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'GET /rest/Person?$filter="lastName=O\'Reilly"\n')))),(0,l.kt)("h2",{id:"use-cases"},"Use Cases"),(0,l.kt)("h3",{id:"using-a-simple-filter"},"Using a Simple Filter"),(0,l.kt)("p",null,"A simple filter consists of an attribute, a comparator, and a value."),(0,l.kt)("h4",{id:"syntax-1"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{attribute} {comparator} {value}\n")),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("p",null,'To filter employees with the first name "John":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'GET /rest/Employee?$filter="firstName=john"\n')),(0,l.kt)("h3",{id:"using-a-complex-filter"},"Using a Complex Filter"),(0,l.kt)("p",null,"A complex filter joins two or more conditions using logical operators (AND, OR, EXCEPT)."),(0,l.kt)("h4",{id:"syntax-2"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}\n")),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("p",null,"To filter employees named John with a salary greater than 20,000:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'GET /rest/Employee?$filter="firstName=john AND salary>20000"\n')),(0,l.kt)("h3",{id:"using-the-params-property"},"Using the Params Property"),(0,l.kt)("p",null,"You can use placeholders in your filter expressions and provide their values using the ",(0,l.kt)("inlineCode",{parentName:"p"},"$params")," property. This method is useful for dynamic queries where values are provided at runtime."),(0,l.kt)("h4",{id:"syntax-3"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params=\'["{value1}","{value2}"]\'\n')),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("p",null,"To filter employees named John with a salary greater than 20,000 using placeholders:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'GET /rest/Employee?$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\'\n')),(0,l.kt)("h2",{id:"best-practices"},"Best Practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Combine Filters:")," Use logical operators to combine multiple conditions and refine your queries.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Use Placeholders:")," Utilize the ",(0,l.kt)("inlineCode",{parentName:"p"},"$params")," property for dynamic queries to improve readability and maintainability.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Escape Special Characters:")," Ensure proper escaping of quotes in filter values to avoid syntax errors.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Specify Relation Paths:")," When querying related dataclass attributes, always include the correct relation path."))))}m.isMDXComponent=!0}}]);