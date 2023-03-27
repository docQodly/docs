"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[3403],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=m(a),k=r,h=d["".concat(s,".").concat(k)]||d[k]||c[k]||l;return a?n.createElement(h,i(i({ref:t},o),{},{components:a})):n.createElement(h,i({ref:t},o))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7848:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={id:"string",title:"String"},i=void 0,p={unversionedId:"language/string",id:"language/string",title:"String",description:"String is a generic term that stands for both text and string data types.",source:"@site/docs/language/string.md",sourceDirName:"language",slug:"/language/string",permalink:"/docs/language/string",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/string.md",tags:[],version:"current",frontMatter:{id:"string",title:"String"},sidebar:"QodlyScript",previous:{title:"Pathnames",permalink:"/docs/language/basics/lang-pathnames"}},s={},m=[{value:"String Commands",id:"string-commands",level:2},{value:"Change string",id:"change-string",level:2},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Char",id:"char",level:2},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example-1",level:4},{value:"See also",id:"see-also-1",level:4},{value:"Character code",id:"character-code",level:2},{value:"Description",id:"description-2",level:4},{value:"Example 1",id:"example-1-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also-2",level:4},{value:"Convert to text",id:"convert-to-text",level:2},{value:"Description",id:"description-3",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also-3",level:4},{value:"Delete string",id:"delete-string",level:2},{value:"Description",id:"description-4",level:4},{value:"Example",id:"example-4",level:4},{value:"See also",id:"see-also-4",level:4},{value:"Insert string",id:"insert-string",level:2},{value:"Description",id:"description-5",level:4},{value:"Example",id:"example-5",level:4},{value:"See also",id:"see-also-5",level:4},{value:"Length",id:"length",level:2},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example-6",level:4},{value:"Lowercase",id:"lowercase",level:2},{value:"Description",id:"description-7",level:4},{value:"Example 1",id:"example-1-2",level:4},{value:"See also",id:"see-also-6",level:4},{value:"Replace string",id:"replace-string",level:2},{value:"Description",id:"description-8",level:4},{value:"Example 1",id:"example-1-3",level:4},{value:"Example 2",id:"example-2-1",level:4},{value:"Example 3",id:"example-3-1",level:4},{value:"See also",id:"see-also-7",level:4}],o={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"String")," is a generic term that stands for both ",(0,r.kt)("a",{parentName:"p",href:"../concepts/lang-text.md"},(0,r.kt)("strong",{parentName:"a"},"text and string data types")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See also:")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../concepts/lang-text.md#string-operators"},(0,r.kt)("strong",{parentName:"a"},"String operators"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../concepts/lang-text.md#character-reference-symbols"},(0,r.kt)("strong",{parentName:"a"},"Character Reference Symbols")))),(0,r.kt)("h2",{id:"string-commands"},"String Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#copyto"},(0,r.kt)("strong",{parentName:"a"},"Change string")," ( ",(0,r.kt)("em",{parentName:"a"},"source")," : Text , ",(0,r.kt)("em",{parentName:"a"},"newChars")," : Text , ",(0,r.kt)("em",{parentName:"a"},"where")," : Integer ) : Text"),"\xa0","\xa0","\xa0","\xa0","changes a group of characters in ",(0,r.kt)("em",{parentName:"td"},"source")," and returns the resulting string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#create"}),"\xa0","\xa0","\xa0","\xa0")))),(0,r.kt)("h2",{id:"change-string"},"Change string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Change string")," ( ",(0,r.kt)("em",{parentName:"p"},"source")," : Text , ",(0,r.kt)("em",{parentName:"p"},"newChars")," : Text , ",(0,r.kt)("em",{parentName:"p"},"where")," : Integer ) : Text"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Original string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newChars"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"New characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"where"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Where to start the changes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Resulting string")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Change string")," command changes a group of characters in ",(0,r.kt)("em",{parentName:"p"},"source")," and returns the resulting string. The command overlays ",(0,r.kt)("em",{parentName:"p"},"source"),", with the characters in ",(0,r.kt)("em",{parentName:"p"},"newChars"),", at the character described by ",(0,r.kt)("em",{parentName:"p"},"where"),"."),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"newChars"),' is an empty string (""), ',(0,r.kt)("inlineCode",{parentName:"p"},"Change string")," returns ",(0,r.kt)("em",{parentName:"p"},"source")," unchanged. ",(0,r.kt)("inlineCode",{parentName:"p"},"Change string")," always returns a string of the same length as ",(0,r.kt)("inlineCode",{parentName:"p"},"source"),". If ",(0,r.kt)("em",{parentName:"p"},"where")," is less than one or greater than the length of ",(0,r.kt)("em",{parentName:"p"},"source"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Change string")," returns ",(0,r.kt)("em",{parentName:"p"},"source"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Change string")," is different from ",(0,r.kt)("a",{parentName:"p",href:"#insert-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Insert string"))," in that it overwrites characters instead of inserting them."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'var vtResult : Text\nvtResult=Change string("Acme","CME",2) //vtResult gets "ACME"\nvtResult=Change string("November","Dec",1) //vtResult gets "December"\n\n')),(0,r.kt)("h4",{id:"see-also"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#delete-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Delete string")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"#insert-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Insert string")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"#replace-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Replace string"))),(0,r.kt)("h2",{id:"char"},"Char"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Char")," ( ",(0,r.kt)("em",{parentName:"p"},"charCode")," : Integer ) : Text"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"charCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Character code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Character represented by the charCode")))),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Char")," command returns the character whose code is ",(0,r.kt)("em",{parentName:"p"},"charCode"),".. "),(0,r.kt)("p",null,"Pass a UTF-16 value (included between 1 and 65535) in ",(0,r.kt)("em",{parentName:"p"},"charCode"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tip:")," In editing a method, the command ",(0,r.kt)("inlineCode",{parentName:"p"},"Char")," is commonly used to specify characters that cannot be entered from the keyboard or that would be interpreted as an editing command in the Method editor."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'\nvar myText : Text\nmyText ="hello"+Char(Carriage return)+"world"\n')),(0,r.kt)("h4",{id:"see-also-1"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#character-code"},(0,r.kt)("inlineCode",{parentName:"a"},"Character code")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"../basics/lang-text#character-reference-symbols"},(0,r.kt)("inlineCode",{parentName:"a"},"Character Reference Symbols"))),(0,r.kt)("h2",{id:"character-code"},"Character code"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Character code")," ( ",(0,r.kt)("em",{parentName:"p"},"character")," : String ) : Integer"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"character"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Character for which you want to get the code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Character code")))),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Character code")," command returns the Unicode UTF-16 code (included between 1 and 65535) of ",(0,r.kt)("em",{parentName:"p"},"character"),". "),(0,r.kt)("p",null,"If there is more than one character in the string, ",(0,r.kt)("inlineCode",{parentName:"p"},"Character code")," returns only the code of the first character."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#char"},(0,r.kt)("inlineCode",{parentName:"a"},"Char"))," function is the counterpart of ",(0,r.kt)("inlineCode",{parentName:"p"},"Character code"),". It returns the character that the UTF-16 code represents."),(0,r.kt)("h4",{id:"example-1-1"},"Example 1"),(0,r.kt)("p",null,"Uppercase and lowercase characters are considered equal within a comparison. You can use Character code to differentiate between uppercase and lowercase characters. Thus, this line returns True:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'("A"=="a")\n\n')),(0,r.kt)("p",null,"On the other hand, this line returns False:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' (Character code("A")==Character code("a"))\n\n')),(0,r.kt)("h4",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,'This example returns the code of the first character of the string "ABC":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var GetCode : Integer\n GetCode=Character code("ABC") //GetCode gets 65, the character code of A\n\n')),(0,r.kt)("h4",{id:"example-3"},"Example 3"),(0,r.kt)("p",null,"The following example tests for carriage returns and tabs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," var vlChar : Integer\n var vtText : Text\n for(vlChar,1,Length(vtText))\n    case of\n       :(vtText[[vlChar]]==Char(Carriage return))\n  //do something\n       :(vtText[[vlChar]]==Char(Tab))\n  // do something else\n       :(...)\n  //...\n    end case\n end for\n\n")),(0,r.kt)("p",null,"When executed multiple times on large texts, this test will run faster when compiled if it is written this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," var vlChar, vlCode  : Integer\n var vtText : Text\n for(vlChar,1,Length(vtText))\n    vlCode=Character code(vtText[[vlChar]])\n    case of\n       :(vlCode==Carriage return)\n  //do something\n       :(vlCode==Tab)\n  //do something else\n       :(...)\n  //...\n    end case\n end for\n\n")),(0,r.kt)("p",null,"The second piece of code runs faster for two reasons: it does only one character reference by iteration and uses LongInt comparisons instead of string comparisons to test for carriage returns and tabs. Use this technique when working with common codes such as CR and TAB"),(0,r.kt)("h4",{id:"see-also-2"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#char"},(0,r.kt)("inlineCode",{parentName:"a"},"Char")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"#character-reference-symbols"},(0,r.kt)("inlineCode",{parentName:"a"},"Character Reference Symbols"))),(0,r.kt)("h2",{id:"convert-to-text"},"Convert to text"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Convert to text")," ( ",(0,r.kt)("em",{parentName:"p"},"blob")," : BLOB , ",(0,r.kt)("em",{parentName:"p"},"charSet")," : Text, Integer ) : Text"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blob"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOB"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"BLOB containing text expressed in a specific character set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"charSet"),(0,r.kt)("td",{parentName:"tr",align:null},"Text, Integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Name or Number of BLOB character set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Contents of BLOB expressed in 4D character set")))),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Convert to text")," command converts the text contained in the ",(0,r.kt)("em",{parentName:"p"},"blob")," parameter and returns it in text expressed in the character set of 4D. 4D uses the UTF-16 character set by default."),(0,r.kt)("p",null,"In ",(0,r.kt)("em",{parentName:"p"},"charSet"),", pass the character set of the text contained in ",(0,r.kt)("em",{parentName:"p"},"blob"),", which will be used for the conversion. If the BLOB contains text copied from within 4D, then the BLOB\u2019s text is likely to be in the UTF-16 character set. You can pass a string providing the standard name of the character set, or one of its aliases (for example, \u201cISO-8859-1\u201d or \u201cUTF-8\u201d), or its identifier (longint). For more information, please refer to the description of the ",(0,r.kt)("a",{parentName:"p",href:"#convert-from-text"},(0,r.kt)("inlineCode",{parentName:"a"},"CONVERT FROM TEXT"))," command."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Convert to text")," supports Byte Order Marks (BOMs). If the character set specified is of the Unicode type (UTF-8, UTF-16 or UTF-32), 4D attempts to identify a BOM among the first bytes received. If one is detected, it is filtered out of the result and 4D uses the character set that it defines instead of the one specified."),(0,r.kt)("h4",{id:"system-variables-and-sets"},"System variables and sets"),(0,r.kt)("p",null,"If the command has been correctly executed, the OK variable is set to 1. Otherwise, it is set to 0."),(0,r.kt)("h4",{id:"see-also-3"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#convert-from-text"},(0,r.kt)("inlineCode",{parentName:"a"},"CONVERT FROM TEXT"))),(0,r.kt)("h2",{id:"delete-string"},"Delete string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delete string")," ( ",(0,r.kt)("em",{parentName:"p"},"source")," : Text , ",(0,r.kt)("em",{parentName:"p"},"where ")," : Integer , ",(0,r.kt)("em",{parentName:"p"},"numChars")," : Integer ) : Text"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"String from which to delete characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"where"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"First character to delete")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numChars"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of characters to delete")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Resulting string")))),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Delete string")," deletes ",(0,r.kt)("em",{parentName:"p"},"numChars")," from ",(0,r.kt)("em",{parentName:"p"},"source"),", starting at ",(0,r.kt)("em",{parentName:"p"},"where"),", and returns the resulting string. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Delete string")," returns the same string as ",(0,r.kt)("inlineCode",{parentName:"p"},"*source*")," when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"source")," is an empty string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"where")," is greater than the length of ",(0,r.kt)("em",{parentName:"li"},"source")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"numChars")," is zero (0)")),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"where")," is less than one, the characters are deleted from the beginning of the string."),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"where")," plus ",(0,r.kt)("em",{parentName:"p"},"numChars")," is equal to or greater than the length of ",(0,r.kt)("em",{parentName:"p"},"source"),", the characters are deleted from ",(0,r.kt)("em",{parentName:"p"},"where")," to the end of ",(0,r.kt)("em",{parentName:"p"},"source"),"."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'var vtResult, vtOtherVar : Text\n vtResult=Delete string("Lamborghini",6,6) // vtResult gets "Lambo"\n vtResult=Delete string("Indentation",6,2) // vtResult gets "Indention"\n vtResult=Delete string(vtOtherVar,3,32000) // vtResult gets the first two characters of vtOtherVar\n \n')),(0,r.kt)("h4",{id:"see-also-4"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#change-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Change string")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"#insert-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Insert string")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"#replace-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Replace string"))),(0,r.kt)("h2",{id:"insert-string"},"Insert string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Insert string")," ( ",(0,r.kt)("em",{parentName:"p"},"source")," : Text , ",(0,r.kt)("em",{parentName:"p"},"what")," : Text , ",(0,r.kt)("em",{parentName:"p"},"where")," : Integer ) : Text"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"String in which to insert the other string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"what"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"String to insert")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"where"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Where to insert")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Resulting string")))),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Insert string")," command inserts a string into ",(0,r.kt)("em",{parentName:"p"},"source")," and returns the resulting string. The command inserts the string ",(0,r.kt)("em",{parentName:"p"},"what")," before the character at position ",(0,r.kt)("em",{parentName:"p"},"where"),"."),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"what"),' is an empty string (""), ',(0,r.kt)("inlineCode",{parentName:"p"},"Insert string")," returns source unchanged."),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"where")," is greater than the length of ",(0,r.kt)("em",{parentName:"p"},"source"),", then ",(0,r.kt)("em",{parentName:"p"},"what")," is appended to ",(0,r.kt)("em",{parentName:"p"},"source"),". If ",(0,r.kt)("em",{parentName:"p"},"where")," is less than one (1), then ",(0,r.kt)("em",{parentName:"p"},"what")," is inserted before ",(0,r.kt)("em",{parentName:"p"},"source"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Insert string")," is different from ",(0,r.kt)("a",{parentName:"p",href:"#change-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Change string"))," in that it inserts characters instead of overwriting them."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var vtResult : Text\n vtResult=Insert string("The tree"," green",4) // vtResult gets "The green  tree"\n vtResult=Insert string("Shut","o",3) // vtResult gets "Shout"\n vtResult=Insert string("Indention","ta",6) // vtResult gets "Indentation"\n \n')),(0,r.kt)("h4",{id:"see-also-5"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#change-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Change string")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"#delete-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Delete string")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"#replace-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Replace string"))),(0,r.kt)("h2",{id:"length"},"Length"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Length")," ( ",(0,r.kt)("em",{parentName:"p"},"string")," : Text ) : Integer"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"String for which to return length")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Length of string")))),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Length")," is used to find the length of a ",(0,r.kt)("em",{parentName:"p"},"string"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Length")," returns the number of characters that are in a ",(0,r.kt)("em",{parentName:"p"},"string"),".. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'When you want to check whether a string contains any characters, including ignorable characters, you must use the test If(Length(vtAnyText)=0) rather than If(vtAnyText=""). If the string contains for example Char(1), which is an ignorable character, Length(vtAnyText) does return 1 but vtAnyText="" returns True.')),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var vtResult : Text\n vlResult=Length("Topaz") // vlResult gets 5\n vlResult=Length("Citizen") // vlResult gets 7\n \n')),(0,r.kt)("h2",{id:"lowercase"},"Lowercase"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Lowercase")," ( ",(0,r.kt)("em",{parentName:"p"},"aString")," : Text , *** : Operator ) : Text"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aString"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"String to convert to lowercase")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Operator"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"If passed: keep accents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"String in lowercase")))),(0,r.kt)("h4",{id:"description-7"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Lowercase")," takes ",(0,r.kt)("em",{parentName:"p"},"aString")," and returns the string with all alphabetic characters in lowercase.. "),(0,r.kt)("p",null,"The optional ",(0,r.kt)("em",{parentName:"p"}," parameter, if passed, indicates that any accented characters present in "),"aString* must be returned as accented lowercase characters. By default, when this parameter is omitted, accented characters \u201close\u201d their accents after the conversion is carried out."),(0,r.kt)("h4",{id:"example-1-2"},"Example 1"),(0,r.kt)("p",null,'The following project method capitalizes the string or text received as parameter. For instance, Caps ("john") would return "John".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"  //Caps project method\n  //Caps ( String ) -> String\n  //Caps ( Any text  ) -> Capitalized text\n #declare (myText : Text) -> myCapText : Text\n myCapText=Lowercase(myText)\n if(Length(myCapText)>0)\n    myCapText[[1]]==Uppercase(myCapText[[1]])\n end if\n\n")),(0,r.kt)("h4",{id:"see-also-6"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#Uppercase"},(0,r.kt)("inlineCode",{parentName:"a"},"Uppercase"))),(0,r.kt)("h2",{id:"replace-string"},"Replace string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Replace string")," ( ",(0,r.kt)("em",{parentName:"p"},"source")," : Text , ",(0,r.kt)("em",{parentName:"p"},"oldString")," : Text , ",(0,r.kt)("em",{parentName:"p"},"newString")," : Text , ",(0,r.kt)("em",{parentName:"p"},"howMany")," : Integer , *","*","* : Operator) : Text"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Original string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"oldString"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Characters to replace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"newString"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Replacement string (if empty string, occurrences are deleted)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"howMany"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"How many times to replace If omitted, all occurrences are replaced")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"If passed: evaluation based on character codes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Resulting string")))),(0,r.kt)("h4",{id:"description-8"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Replace string")," replaces ",(0,r.kt)("em",{parentName:"p"},"howMany")," occurrences of ",(0,r.kt)("em",{parentName:"p"},"oldString")," in ",(0,r.kt)("em",{parentName:"p"},"source")," with ",(0,r.kt)("em",{parentName:"p"},"newString"),". "),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"newString"),' is an empty string (""), ',(0,r.kt)("inlineCode",{parentName:"p"},"Replace string")," deletes each occurrence of ",(0,r.kt)("em",{parentName:"p"},"oldString")," in ",(0,r.kt)("em",{parentName:"p"},"source"),"."),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"howMany")," is specified, ",(0,r.kt)("inlineCode",{parentName:"p"},"Replace string")," will replace only the number of occurrences of ",(0,r.kt)("em",{parentName:"p"},"oldString")," specified, starting at the first character of ",(0,r.kt)("em",{parentName:"p"},"source"),". If ",(0,r.kt)("em",{parentName:"p"},"howMany")," is not specified, then all occurrences of ",(0,r.kt)("em",{parentName:"p"},"oldString")," are replaced."),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"oldString")," is an empty string, ",(0,r.kt)("inlineCode",{parentName:"p"},"Replace string")," returns the unchanged ",(0,r.kt)("em",{parentName:"p"},"source"),"."),(0,r.kt)("p",null,'By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example \xe6 = ae) into account. On the other hand, it is not diacritical (a=A, a=\xe0 and so on) and does not take "ignorable" characters such as characters whose code < 9 into account (Unicode specification).'),(0,r.kt)("p",null,"To modify this functioning, pass the asterisk ",(0,r.kt)("em",{parentName:"p"}," as the last parameter. In this case, comparisons will be based on character codes. You must pass the ")," parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you want to replace special characters, used for example as delimiters (",(0,r.kt)("inlineCode",{parentName:"li"},"Char"),"(1), etc.),"),(0,r.kt)("li",{parentName:"ul"},"If the replacement of characters must be case sensitive and take accented characters into account (a#A, a#\xe0 and so on).\nNote that in this mode, the evaluation does not handle variations in the way words are written.")),(0,r.kt)("h4",{id:"example-1-3"},"Example 1"),(0,r.kt)("p",null,"The following example illustrates the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"Replace string"),". The results, described in the comments, are assigned to the variable ",(0,r.kt)("em",{parentName:"p"},"vtResult"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var vtResult, vtOtherVar : Text\n vtResult=Replace string("Willow"," ll","d") // Result gets "Widow"\n vtResult=Replace string("Shout","o","") // Result gets "Shut"\n vtResult=Replace string(vtOtherVar,Char(Tab),",",*) // Replaces all tabs in vtOtherVar with commas\n\n')),(0,r.kt)("h4",{id:"example-2-1"},"Example 2"),(0,r.kt)("p",null,"The following example eliminates CRs and TABs from the text in ",(0,r.kt)("em",{parentName:"p"},"vtResult"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var vtResult : Text\n vtResult=Replace string(Replace string(vtResult,Char(Carriage return),"",*),Char(Tab),"",*)\n\n')),(0,r.kt)("h4",{id:"example-3-1"},"Example 3"),(0,r.kt)("p",null,"The following example illustrates the use of the * parameter in the case of a diacritical evaluation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},' var vtResult : Text\n vtResult=Replace string("Cr\xe8me br\xfbl\xe9e","Brulee","caramel") //Result gets "Cr\xe8me caramel"\n vtResult=Replace string("Cr\xe8me br\xfbl\xe9e","Brulee","caramel",*) //Result gets "Cr\xe8me br\xfbl\xe9e"\n\n')),(0,r.kt)("h4",{id:"see-also-7"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#change-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Change string")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"#delete-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Delete string")),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"#insert-string"},(0,r.kt)("inlineCode",{parentName:"a"},"Insert string"))))}d.isMDXComponent=!0}}]);