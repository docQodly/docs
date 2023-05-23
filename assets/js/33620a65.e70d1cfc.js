"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5381],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var l=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=l.createContext({}),s=function(e){var n=l.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return l.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return t?l.createElement(g,r(r({ref:n},p),{},{components:t})):l.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var s=2;s<a;s++)r[s]=t[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=t(7462),o=(t(7294),t(3905));const a={id:"lang-collection",title:"Collection"},r=void 0,i={unversionedId:"language/basics/lang-collection",id:"language/basics/lang-collection",title:"Collection",description:"Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).",source:"@site/docs/language/basics/lang-collection.md",sourceDirName:"language/basics",slug:"/language/basics/lang-collection",permalink:"/docs/language/basics/lang-collection",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-collection.md",tags:[],version:"current",frontMatter:{id:"lang-collection",title:"Collection"},sidebar:"Development",previous:{title:"Boolean",permalink:"/docs/language/basics/lang-boolean"},next:{title:"Date",permalink:"/docs/language/basics/lang-date"}},c={},s=[{value:"Instantiation",id:"instantiation",level:2},{value:"<code>newCollection</code> command",id:"newcollection-command",level:3},{value:"<code>[]</code> operator",id:"-operator",level:3},{value:"Regular or shared collection",id:"regular-or-shared-collection",level:3},{value:"Collection functions",id:"collection-functions",level:2},{value:"<em>propertyPath</em> parameter",id:"propertypath-parameter",level:3}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null)."),(0,o.kt)("p",null,"Collection type variables are managed using ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-object#syntax-basics"},"object notation"),"."),(0,o.kt)("p",null,"To access a collection element, you need to pass the element number inside square brackets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-qs"},"collectionRef[expression]\n")),(0,o.kt)("p",null,"You can pass any valid expression which returns a positive integer in ",(0,o.kt)("em",{parentName:"p"},"expression"),". Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-qs"}," myCollection[5]  //access to 6th element of the collection\n myCollection[myVar]\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Collection elements are numbered from 0.")),(0,o.kt)("p",null,"You can assign a value to a collection element or get a collection element value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-qs"},' myCol[10]="My new element"\n myVar=myCol[0]\n')),(0,o.kt)("p",null,"If you assign an element's index that surpasses the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a null value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-qs"},' var myCol : collection\n myCol=newCollection("A","B")\n myCol[5]="Z"\n  //myCol[2]: null\n  //myCol[3]: null\n  //myCol[4]: null\n')),(0,o.kt)("h2",{id:"instantiation"},"Instantiation"),(0,o.kt)("p",null,"Collections must be instantiated, otherwise trying to read or modify their elements will generate a syntax error."),(0,o.kt)("p",null,"Collection instantiation can be done in one of the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"using the ",(0,o.kt)("inlineCode",{parentName:"li"},"newCollection")," command,"),(0,o.kt)("li",{parentName:"ul"},"using the ",(0,o.kt)("inlineCode",{parentName:"li"},"[]")," operator.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Several QodlyScript commands and functions return collections, for example ",(0,o.kt)("a",{parentName:"p",href:"https://doc.4d.com/4dv20/help/command/en/page1799.html"},(0,o.kt)("inlineCode",{parentName:"a"},"lastErrors"))," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/CollectionClass#copy"},(0,o.kt)("inlineCode",{parentName:"a"},"collection.copy()")),". In this case, it is not necessary to instantiate explicitely the collection, the QodlyScript language does it for you.")),(0,o.kt)("h3",{id:"newcollection-command"},(0,o.kt)("inlineCode",{parentName:"h3"},"newCollection")," command"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/CollectionClass#newcollection"},(0,o.kt)("inlineCode",{parentName:"a"},"newCollection"))," command creates a new empty or prefilled collection and returns its reference."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-qs"},' var colVar : collection //creation of collection type variable\n  //instantiation of the collection and assignment to the variable\n colVar=newCollection \n \n var colFilled : collection\n  //instantiation and assignment of a prefilled collection\n colFilled=newCollection("a","b",1,42,{}) \n\n')),(0,o.kt)("h3",{id:"-operator"},(0,o.kt)("inlineCode",{parentName:"h3"},"[]")," operator"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")," operator allows you to create a ",(0,o.kt)("strong",{parentName:"p"},"collection literal"),". A collection literal is a list of zero or more expressions, each of which represents a collection element, enclosed in square brackets (",(0,o.kt)("inlineCode",{parentName:"p"},"[]"),"). When you create a collection using a collection literal, it is instantiated with the specified values as its elements, and its length is set to the number of arguments specified."),(0,o.kt)("p",null,"Since any element is considered an expression, you can create sub-collections using ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")," in elements. You can also create and reference ",(0,o.kt)("strong",{parentName:"p"},"object literals"),"."),(0,o.kt)("p",null,"If an element is undefined, it will appear as Null in the collection."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-qs"},'var col1,col2,users : collection\ncol1=[] //empty collection\ncol2=[1,2,3,4,5,6] //collection of numbers\n//collection of objects\nusers=[{name: "Alice", \\\n    height: 183, \\\n    eyecolor: "hazel", \\\n    id: col2[5]\\\n    }, \\\n    {name: "Bob", \\\n    height: 172, \\\n    eyecolor: "blue"\\\n    }]\n')),(0,o.kt)("h3",{id:"regular-or-shared-collection"},"Regular or shared collection"),(0,o.kt)("p",null,"You can create two types of collections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"regular (non-shared) collections, using the ",(0,o.kt)("a",{parentName:"li",href:"collection.md#new-collection"},(0,o.kt)("inlineCode",{parentName:"a"},"newCollection"))," command or collection literal syntax (",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"). These collections can be edited without any specific access control but cannot be shared between processes. "),(0,o.kt)("li",{parentName:"ul"},"shared collections, using the ",(0,o.kt)("a",{parentName:"li",href:"/docs/language/CollectionClass#newsharedcollection"},(0,o.kt)("inlineCode",{parentName:"a"},"newSharedCollection"))," command. These collections can be shared between processes, including preemptive threads. Access to these collections is controlled by ",(0,o.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-shared#useend"},(0,o.kt)("inlineCode",{parentName:"a"},"use...end"))," structures. ")),(0,o.kt)("p",null,"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-shared"},"Shared objects and collections")," section."),(0,o.kt)("h2",{id:"collection-functions"},"Collection functions"),(0,o.kt)("p",null,"Qodly collection references benefit from dedicated class functions. Collection functions are listed in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/CollectionClass"},"Collection")," class."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-qs"},"newCol=col.copy() //deep copy of col to newCol\ncol.push(10,100) //add 10 and 100 to the collection\n")),(0,o.kt)("p",null,"Some functions return the original collection after modification, so that you can run the calls in a sequence:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-qs"}," col=newCollection(5,20)\n col2=col.push(10,100).sort() //col2==[5,10,20,100]\n")),(0,o.kt)("h3",{id:"propertypath-parameter"},(0,o.kt)("em",{parentName:"h3"},"propertyPath")," parameter"),(0,o.kt)("p",null,"Several functions accept a ",(0,o.kt)("em",{parentName:"p"},"propertyPath")," as parameter. This parameter stands for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'either an object property name, for example "lastName"'),(0,o.kt)("li",{parentName:"ul"},'or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName".')))}u.isMDXComponent=!0}}]);