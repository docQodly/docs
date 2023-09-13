"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[1281],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(a),N=r,g=d["".concat(p,".").concat(N)]||d[N]||k[N]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},19012:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"json",title:"JSON"},i=void 0,o={unversionedId:"language/json",id:"language/json",title:"JSON",description:"JSON Commands",source:"@site/docs/language/json.md",sourceDirName:"language",slug:"/language/json",permalink:"/docs/language/json",draft:!1,editUrl:"https://github.com/qodly/docs/edit/main/docs/language/json.md",tags:[],version:"current",frontMatter:{id:"json",title:"JSON"},sidebar:"Develop",previous:{title:"IMAPTransporter",permalink:"/docs/language/IMAPTransporterClass"},next:{title:"MailAttachment",permalink:"/docs/language/MailAttachmentClass"}},p={},s=[{value:"JSON Commands",id:"json-commands",level:2},{value:"jsonParse",id:"jsonparse",level:2},{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"jsonResolvePointers",id:"jsonresolvepointers",level:2},{value:"Description",id:"description-1",level:4},{value:"Defining JSON Pointers",id:"defining-json-pointers",level:4},{value:"Description",id:"description-2",level:5},{value:"jsonStringify",id:"jsonstringify",level:2},{value:"Description",id:"description-3",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also-1",level:4},{value:"jsonValidate",id:"jsonvalidate",level:2},{value:"Description",id:"description-4",level:4},{value:"Error management",id:"error-management",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also-2",level:4}],m={toc:s};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"json-commands"},"JSON Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#jsonparse"},(0,r.kt)("strong",{parentName:"a"},"jsonParse")," ( ",(0,r.kt)("em",{parentName:"a"},"jsonString")," : string , ",(0,r.kt)("em",{parentName:"a"},"type")," : integer {, ","*","} ) : object, mixed"),"\xa0","\xa0","\xa0","\xa0","parses the contents of a JSON-formatted string and extracts values that you can store in a Qodly field or variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#jsonresolvepointers"},(0,r.kt)("strong",{parentName:"a"},"jsonResolvePointers")," ( ",(0,r.kt)("em",{parentName:"a"},"aOject")," : object , ",(0,r.kt)("em",{parentName:"a"},"options")," : object) : object"),"\xa0","\xa0","\xa0","\xa0","resolves all the JSON pointers found in the ",(0,r.kt)("em",{parentName:"td"},"aObject"),", with regards to ",(0,r.kt)("em",{parentName:"td"},"options")," settings (if any)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#jsonstringify"},(0,r.kt)("strong",{parentName:"a"},"jsonStringify")," ( ",(0,r.kt)("em",{parentName:"a"},"value")," : object, mixed {, ","*","} ) : string"),"\xa0","\xa0","\xa0","\xa0","converts the ",(0,r.kt)("em",{parentName:"td"},"value")," parameter into a JSON string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#jsonvalidate"},(0,r.kt)("strong",{parentName:"a"},"jsonValidate")," ( ",(0,r.kt)("em",{parentName:"a"},"vJson")," : object , ",(0,r.kt)("em",{parentName:"a"},"vSchema")," : object) : object"),"\xa0","\xa0","\xa0","\xa0","checks the compliance of the ",(0,r.kt)("em",{parentName:"td"},"vJson")," JSON contents with the rules defined in the ",(0,r.kt)("em",{parentName:"td"},"vSchema")," JSON schema")))),(0,r.kt)("h2",{id:"jsonparse"},"jsonParse"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"jsonParse")," ( ",(0,r.kt)("em",{parentName:"p"},"jsonString")," : string , ",(0,r.kt)("em",{parentName:"p"},"type")," : integer {, ","*","} ) : object, mixed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jsonString"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON string to parse")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Type in which to convert the values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds line position and offset of each property if returned value is an object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"object, mixed"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Values extracted from JSON string")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonParse")," command parses the contents of a JSON-formatted string and extracts values that you can store in a Qodly field or variable. "),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonString"),", pass the JSON-formatted string whose contents you want to parse. This string must be formatted correctly, otherwise a parsing error is generated. ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonParse")," can therefore be used to validate JSON strings. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you use pointers, you must call the ",(0,r.kt)("a",{parentName:"p",href:"#jsonstringify"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonStringify"))," command before calling ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonParse"),".")),(0,r.kt)("p",null,"By default, if you omit the ",(0,r.kt)("em",{parentName:"p"},"type")," parameter, Qodly attempts to convert the value obtained into the type of the variable or field used to store the results (if one is defined). Otherwise, Qodly attempts to infer its type. You can also force the type interpretation by passing the ",(0,r.kt)("em",{parentName:"p"},"type")," parameter: pass one of the following constants:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Constant"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Is Boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Is collection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Is date"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Is longint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Is object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Is real"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Is text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Is time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"11")))),(0,r.kt)("p",null,"If you pass the * optional parameter and if the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonString")," parameter represents an object, the returned object contains an additional property named ",(0,r.kt)("strong",{parentName:"p"},"symbols that provides path, line position, and line offset of each property and sub-property of the object. This information can be useful for debugging purposes. The structure of the "),"symbols property is:"),(0,r.kt)("p",null,"__symbols:{//object description    myAtt.mySubAtt...:{ //property path       line:10, //line number of the property       offset:35 //offset of the property from the beginning of the line       }    }"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("em",{parentName:"p"}," parameter is ignored if the returned value is not of the object "),"type*.")),(0,r.kt)("h4",{id:"see-also"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#jsonstringify"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonStringify")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"#jsonvalidate"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonValidate"))),(0,r.kt)("h2",{id:"jsonresolvepointers"},"jsonResolvePointers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"jsonResolvePointers")," ( ",(0,r.kt)("em",{parentName:"p"},"aOject")," : object , ",(0,r.kt)("em",{parentName:"p"},"options")," : object) : object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aOject"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Object containing JSON pointers to resolve")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Object with JSON pointers resolved (only if result is an object)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Options for pointer resolution")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Object containing the result of the processing")))),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonResolvePointers")," command resolves all the JSON pointers found in the ",(0,r.kt)("em",{parentName:"p"},"aObject"),", with regards to ",(0,r.kt)("em",{parentName:"p"},"options")," settings (if any). "),(0,r.kt)("p",null,"JSON pointers are particularily useful to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"embed some part of an external JSON document or reuse a part of a JSON document in other places in the same JSON document, in order to factorize information,"),(0,r.kt)("li",{parentName:"ul"},"express a cyclic structure in JSON,"),(0,r.kt)("li",{parentName:"ul"},"define a template object containing default properties stored in JSON.")),(0,r.kt)("p",null,"Pass in the ",(0,r.kt)("em",{parentName:"p"},"aObject")," parameter an object containing JSON pointers to be resolved (for information on ",(0,r.kt)("a",{parentName:"p",href:"#jsonpointersyntax"},(0,r.kt)("inlineCode",{parentName:"a"},"JSON pointer syntax")),", please refer to the Defining JSON Pointers paragraph below)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The source ",(0,r.kt)("em",{parentName:"p"},"aObject")," will be updated with the result of pointer resolution after the command is executed (except if the result is not an object, see below). If you want to keep an original version of ",(0,r.kt)("em",{parentName:"p"},"aObject"),", you may consider using the objectCopy beforehand.")),(0,r.kt)("p",null,"Optionally, you can pass in options an ",(0,r.kt)("em",{parentName:"p"},"aObject")," containing specific properties to be used when resolving pointers. The following properties are supported:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rootFolder"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Absolute path (using standard Qodly syntax) to the folder to be used to resolve relative pointers in ",(0,r.kt)("em",{parentName:"td"},"aObject"),". Default is the database Resources folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"merge"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Merge objects with pointer objects (true) instead of replacing them (false). Default is false")))),(0,r.kt)("p",null,"After the command is executed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if the result of pointer resolution is an object, ",(0,r.kt)("em",{parentName:"li"},"aObject")," is updated and contains the resulting object."),(0,r.kt)("li",{parentName:"ul"},"if the result of pointer resolution is a scalar value (i.e. a text, a number...), ",(0,r.kt)("em",{parentName:"li"},"aObject"),' is left untouched and the resulting value is returned in the "value" property of the function result.')),(0,r.kt)("p",null,"In any cases, the command returns an object containing the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"any"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Result of the command processing on object. If the result is an object, it is equal to output object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"success"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true if all pointers have been resolved successfully")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errors"),(0,r.kt)("td",{parentName:"tr",align:"left"},"collection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Collection of errors if any")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errors[].code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"error code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errors[].message"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"error message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errors[].pointerURI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"pointer value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"errors[].referredPath"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"document fullpath")))),(0,r.kt)("h4",{id:"defining-json-pointers"},"Defining JSON Pointers"),(0,r.kt)("p",null,"JSON Pointer is a standard that defines a string syntax which can be used to access a particular field or key value in the entire JSON document. The standard has been described in the ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6901"},(0,r.kt)("inlineCode",{parentName:"a"},"RFC 6901")),"."),(0,r.kt)("p",null,"A JSON pointer is, strictly speaking, a string composed of parts separated by '/'. A JSON pointer is usually found in a URI that specifies the document into which the pointer will be resolved. The fragment character \"#' is used in the URI to specify the JSON pointer. By convention, a URI containing a JSON pointer can be found in a JSON object property that must be named \"ref\"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{    "ref":<path>#<json_pointer> }\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'Qodly does not support the "-" character as reference to nonexistent arrray elements.')),(0,r.kt)("h5",{id:"description-2"},"Description"),(0,r.kt)("p",null,"JSON pointers are resolved recursively, which means that if a resolved pointer also contains pointers, they are resolved recursively and so on, until all pointers are resolved. In this context, all file paths found in JSON pointer URIs can be relative or absolute. They must use '/' as path delimiter and are resolved the following way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A relative path must not start with '/'. It is resolved relatively to the JSON document where the path string has been found,"),(0,r.kt)("li",{parentName:"ul"},'An absolute path starts with \'/\'. Only filesystem pathnames are accepted as absolute paths. For example, "/RESOURCES/templates/myfile.json" points to the file "myfile.json" located in the current database resources folder.')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The name resolution is case sensitive."),(0,r.kt)("li",{parentName:"ul"},'Qodly does not resolve a path to a json file located over the network (starting with "http/https").'))),(0,r.kt)("h2",{id:"jsonstringify"},"jsonStringify"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"jsonStringify")," ( ",(0,r.kt)("em",{parentName:"p"},"value")," : object, mixed {, ","*","} ) : string"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"object, mixed"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Data to convert into JSON string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Pretty printing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"String containing serialized JSON text")))),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonStringify")," command converts the ",(0,r.kt)("em",{parentName:"p"},"value")," parameter into a JSON string. This command performs the opposite action of the ",(0,r.kt)("a",{parentName:"p",href:"#jsonparse"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonParse"))," command."),(0,r.kt)("p",null,"Pass the data to be serialized in ",(0,r.kt)("em",{parentName:"p"},"value"),". It can be expressed in scalar form (string, number, date or time) or by means of a Qodly object or collection"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'Qodly dates will be converted either in "yyyy-mm-dd" or "YYYY-MM-DDThh:mm:sssZ" format according to the current database date setting.')),(0,r.kt)("p",null,"You can pass the optional * parameter to include formatting characters in the resulting string. This improves the presentation of JSON data (known as pretty formatting)."),(0,r.kt)("h4",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"Conversion of scalar values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'\n var vc, vel, vh, vd : string\n\n vc=jsonStringify("Eureka!") // "Eureka!"\n vel=jsonStringify(120) // "120"\n \n vh=jsonStringify(?20:00:00?) // "72000" seconds since midnight\n\n \n vd=jsonStringify(!28/08/2013!) // "2013-08-27T22:00:00.000Z" (Paris timezone)\n\n')),(0,r.kt)("h4",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"Conversion of a string containing special characters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var s, p : string\n\n s=jsonStringify("{\\"name\\":\\"john\\"}")\n  // s="{\\\\"name\\\\":\\\\"john\\\\"}"\n p=jsonParse(s)\n  // p={"name":"john"}\n\n')),(0,r.kt)("h4",{id:"see-also-1"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#jsonparse"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonParse"))),(0,r.kt)("h2",{id:"jsonvalidate"},"jsonValidate"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"jsonValidate")," ( ",(0,r.kt)("em",{parentName:"p"},"vJson")," : object , ",(0,r.kt)("em",{parentName:"p"},"vSchema")," : object) : object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vJson"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON object to validate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vSchema"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON schema used to validate JSON objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Validation status and errors (if any)")))),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonValidate")," command checks the compliance of the ",(0,r.kt)("em",{parentName:"p"},"vJson")," JSON contents with the rules defined in the ",(0,r.kt)("em",{parentName:"p"},"vSchema")," JSON schema. If the JSON is invalid, the command returns a detailed description of error(s)."),(0,r.kt)("p",null,"In ",(0,r.kt)("em",{parentName:"p"},"vJson"),", pass a JSON object containing the JSON contents to be validated. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Validating a JSON string consists of checking that it follows the rules defined in a JSON schema. This is different from checking that the JSON is well-formed, which is done by the ",(0,r.kt)("a",{parentName:"p",href:"#jsonparse"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonParse"))," command.")),(0,r.kt)("p",null,"In ",(0,r.kt)("em",{parentName:"p"},"vSchema"),", pass the JSON schema to use for the validation. For more information on how to create a JSON schema, you may consult the ",(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"json-schema.org"))," web site."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To validate a JSON object, Qodly uses the norm described in the ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/draft-wright-json-schema-validation-00"},(0,r.kt)("inlineCode",{parentName:"a"},"JSON Schema Validation"))," document (this draft is still being written and can evolve in the future). Qodly's current implementation is based upon the version 4 of the draft.")),(0,r.kt)("p",null,"If the JSON schema is not valid, Qodly returns a null object and throws an error that can be caught by an on error call method."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"jsonValidate")," returns an object that provides the status of the validation. This object can contain the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"success")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True if ",(0,r.kt)("em",{parentName:"td"},"vJson")," is validated, false otherwise. If false, the ",(0,r.kt)("em",{parentName:"td"},"errors")," property is also returned")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"errors")),(0,r.kt)("td",{parentName:"tr",align:"left"},"object collection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of error objects if the ",(0,r.kt)("em",{parentName:"td"},"vJson")," is not validated (see below)")))),(0,r.kt)("p",null,"Each error object of the ",(0,r.kt)("em",{parentName:"p"},"errors")," collection contains the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"jsonPath")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON path that cannot be validated in ",(0,r.kt)("em",{parentName:"td"},"vJson"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"line")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Line number of the error in the JSON file. This property is filled if the JSON has been parsed by ",(0,r.kt)("a",{parentName:"td",href:"#jsonparse"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonParse"))," with the * parameter. Otherwise, the property is omitted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"offset")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Line offset of the error in the JSON file. This property is filled if the JSON has been parsed by ",(0,r.kt)("a",{parentName:"td",href:"#jsonparse"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonParse"))," with the * parameter. Otherwise, the property is omitted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"schemaPaths")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON path in the schema that causes the validation error")))),(0,r.kt)("h5",{id:"error-management"},"Error management"),(0,r.kt)("p",null,"The following errors may be returned  :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"JSON Keyword"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Message"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"multipleOf"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error while validating against 'multipleOf' key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"maximum"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The value provided should not be greater than specified in the schema ("{s1}").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"exclusiveMaximum"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The value provided should be less than specified in the schema ("{s1}").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"minimum"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The value provided should not be less than specified in the schema ("{s1}").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"exclusiveMinimum"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The value provided should be greater than specified in the schema ("{s1}").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"maxLength"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The string is longer than specified in the schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"minLength"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The string is shorter than specified in the schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"pattern"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The string "{s1}" does not match the pattern in the schema:{s2}.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"additionalItems"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error while validating an array. JSON contains more elements than specified in the schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"maxItems"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The array contains more items than specified in the schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"minItems"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The array contains less items than specified in the schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"uniqueItems"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Error while validating an array. Elements are not unique. Another instance of "{s1}" is already in the array.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"14"),(0,r.kt)("td",{parentName:"tr",align:"left"},"maxProperties"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of properties is greater than specified in the schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"15"),(0,r.kt)("td",{parentName:"tr",align:"left"},"minProperties"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of properties is less than specified in the schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"required"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The required property "{s1}" is missing.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"17"),(0,r.kt)("td",{parentName:"tr",align:"left"},"additionalProperties"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No additional properties allowed by the schema. The property(ies) {s1} should be removed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"18"),(0,r.kt)("td",{parentName:"tr",align:"left"},"dependencies"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The property "{s1}" requires the property "{s2}".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"19"),(0,r.kt)("td",{parentName:"tr",align:"left"},"enum"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error while validating against 'enum' key. \"{s1}\" does not match any enum element in the schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incorrect type. Expected type is: {s1}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"oneOf"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The JSON matches more than one value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"22"),(0,r.kt)("td",{parentName:"tr",align:"left"},"oneOf"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The JSON does not match any value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"23"),(0,r.kt)("td",{parentName:"tr",align:"left"},"not"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The JSON is valid against the value of 'not'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"format"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The string does not match ("{s1}")')))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"You want to validate a JSON object with a schema and get the list of validation errors, if any, and store error lines and messages in a text variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var oResult : object\nvar vLNbErr : integer\nvar vTerrLine : string\n\noResult = jsonValidate(jsonParse(myJson; *), mySchema)\n\nif (oResult.success) // validation successful\n  // ...\nelse // validation failed\n  vLNbErr = oResult.errors.length // get the number of error(s)\n  ALERT(String($vLNbErr) + " validation error(s) found.")\n  for (i, 0, vLNbErr)\n    vTerrLine = vTerrLine + oResult.errors[i].message + " " + String(oResult.errors[i].line) + Carriage return\n  end for\nend if\n\n')),(0,r.kt)("h4",{id:"see-also-2"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"How to create a JSON schema")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"#jsonparse"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonParse")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/latest/json-schema-validation.html"},(0,r.kt)("inlineCode",{parentName:"a"},"JSON schema validation keywords on json-schema.org"))))}d.isMDXComponent=!0}}]);