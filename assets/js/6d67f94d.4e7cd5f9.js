"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[3820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"FunctionClass",title:"Function"},o=void 0,p={unversionedId:"language/FunctionClass",id:"language/FunctionClass",title:"Function",description:"A 4D.Function object contains a piece of code that can be executed from an object, either using the () operator, or using the apply() and call() functions. QodlyScript proposes three kinds of Function objects:",source:"@site/docs/language/FunctionClass.md",sourceDirName:"language",slug:"/language/FunctionClass",permalink:"/docs/language/FunctionClass",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/FunctionClass.md",tags:[],version:"current",frontMatter:{id:"FunctionClass",title:"Function"},sidebar:"Develop",previous:{title:"Folder",permalink:"/docs/language/FolderClass"},next:{title:"HTTPRequest",permalink:"/docs/language/HTTPRequestClass"}},i={},s=[{value:"formula objects",id:"formula-objects",level:3},{value:"Passing parameters",id:"passing-parameters",level:4},{value:"Parameters to a single method",id:"parameters-to-a-single-method",level:4},{value:"Functions and properties",id:"functions-and-properties",level:3},{value:".apply()",id:"apply",level:2},{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:".call()",id:"call",level:2},{value:"Description",id:"description-1",level:4},{value:"Example 1",id:"example-1-1",level:4},{value:"Example 2",id:"example-2-1",level:4},{value:".source",id:"source",level:2},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example",level:4}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"4D.Function"))," object contains a piece of code that can be executed from an object, either using the ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," operator, or using the ",(0,r.kt)("a",{parentName:"p",href:"#apply"},(0,r.kt)("inlineCode",{parentName:"a"},"apply()"))," and ",(0,r.kt)("a",{parentName:"p",href:"#call"},(0,r.kt)("inlineCode",{parentName:"a"},"call()"))," functions. QodlyScript proposes three kinds of ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"native functions"),", i.e. built-in functions from various 4D classes such as ",(0,r.kt)("inlineCode",{parentName:"li"},"collection.sort()")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"file.copyTo()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"user functions"),", created in user ",(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-classes"},"classes")," using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/language/basics/lang-classes#function"},"Function keyword"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"formula functions"),", i.e. functions that can execute any formula.  ")),(0,r.kt)("h3",{id:"formula-objects"},"formula objects"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/commands/formula"},"formula")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/commands/formulaFromString"},"formulaFromString")," commands allow you to create ",(0,r.kt)("strong",{parentName:"p"},"formula functions,")," i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.Function")," objects to execute any expression or code expressed as text."),(0,r.kt)("p",null,"formula objects can be encapsulated in object properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," var f : 4D.Function\n f = newObject\n f.comp = formula(1+2)\n")),(0,r.kt)("p",null,'This property is an "object function", i.e. a function which is bound to its parent object. To execute a function stored in an object property, use the ',(0,r.kt)("strong",{parentName:"p"},"()")," operator after the property name, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," f.comp() //returns 3\n")),(0,r.kt)("p",null,"Syntax with brackets is also supported:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' f["comp"]() //returns 3\n')),(0,r.kt)("p",null,"Note that, even if it does not have parameters (see below), an object function to be executed must be called with () parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," o = f.comp //returns the formula object in o\n")),(0,r.kt)("p",null,"You can also execute a function using the ",(0,r.kt)("a",{parentName:"p",href:"#apply"},(0,r.kt)("inlineCode",{parentName:"a"},"apply()"))," and ",(0,r.kt)("a",{parentName:"p",href:"#call"},(0,r.kt)("inlineCode",{parentName:"a"},"call()"))," functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," f.comp.apply() //returns 3\n")),(0,r.kt)("h4",{id:"passing-parameters"},"Passing parameters"),(0,r.kt)("p",null,'You can pass parameters to your formulas using sequentially numbered "$" variables: ',(0,r.kt)("strong",{parentName:"p"},"$1"),", ",(0,r.kt)("strong",{parentName:"p"},"$2"),", ",(0,r.kt)("strong",{parentName:"p"},"$3"),", and so on. The numbering of the variables represents the order of the parameters."),(0,r.kt)("p",null," For example, you can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"\n var f : object\n f = newObject\n f.comp = formula(1+$1)\n f.comp(5) //returns 6\n")),(0,r.kt)("p",null,"Or using the ",(0,r.kt)("a",{parentName:"p",href:"#call"},".call()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," var f : 4D.Function\n var r : integer\n f = formula($1+$2)\n r = f.call(null,5,5) //r: 10\n r = f.call(null,10,yearOf(currentDate)) //r: 2033\n")),(0,r.kt)("h4",{id:"parameters-to-a-single-method"},"Parameters to a single method"),(0,r.kt)("p",null,"For more convenience, when the formula is made of a single method, parameters can be omitted in the formula object initialization. They can just be passed when the formula is called. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var f : 4D.Function\n var t : string\n\n f = formula(myMethod)\n  //Writing formula(myMethod($1,$2)) is not necessary\n t = f.call(null,"Hello","World") //returns "Hello World"\n t = f.call() //returns "How are you?"\n\n  //myMethod\n declare (param1 : string, param2 : string)->return : string\n if(countParameters = 2)\n    return = param1+" "+param2\n else\n    return = "How are you?"\n end\n')),(0,r.kt)("p",null,"Parameters are received within the method, in the order they are specified in the call."),(0,r.kt)("h3",{id:"functions-and-properties"},"Functions and properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#apply"},(0,r.kt)("strong",{parentName:"a"},".apply"),"() : any",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},".apply"),"( ",(0,r.kt)("em",{parentName:"a"},"thisObj")," : object { , ",(0,r.kt)("em",{parentName:"a"},"formulaParams")," : collection } ) : any"),"\xa0","\xa0","\xa0","\xa0","executes the ",(0,r.kt)("inlineCode",{parentName:"td"},"formula")," object to which it is applied and returns the resulting value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#call"},(0,r.kt)("strong",{parentName:"a"},".call"),"() : any",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"a"},".call"),"( ",(0,r.kt)("em",{parentName:"a"},"thisObj")," : object { , ...",(0,r.kt)("em",{parentName:"a"},"params")," : any } ) : any"),"\xa0","\xa0","\xa0","\xa0","executes the ",(0,r.kt)("inlineCode",{parentName:"td"},"formula")," object to which it is applied and returns the resulting value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#source"},(0,r.kt)("strong",{parentName:"a"},".source")," : string "),"\xa0","\xa0","\xa0","\xa0","contains the source expression of the ",(0,r.kt)("inlineCode",{parentName:"td"},"formula")," as text")))),(0,r.kt)("h2",{id:"apply"},".apply()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".apply"),"() : any",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},".apply"),"( ",(0,r.kt)("em",{parentName:"p"},"thisObj")," : object { , ",(0,r.kt)("em",{parentName:"p"},"formulaParams")," : collection } ) : any"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thisObj"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Object to be returned by ",(0,r.kt)("inlineCode",{parentName:"td"},"this")," in the formula")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formulaParams"),(0,r.kt)("td",{parentName:"tr",align:null},"collection"),(0,r.kt)("td",{parentName:"tr",align:"center"},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of values to be passed as $1...$n when ",(0,r.kt)("inlineCode",{parentName:"td"},"formula")," is executed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:"center"},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Value from formula execution")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".apply()")," function executes the ",(0,r.kt)("inlineCode",{parentName:"p"},"formula")," object to which it is applied and returns the resulting value. The formula object can be created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"formula")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"formulaFromString")," commands."),(0,r.kt)("p",null,"In the ",(0,r.kt)("em",{parentName:"p"},"thisObj")," parameter, you can pass a reference to the object to be used as ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," within the formula."),(0,r.kt)("p",null,"You can also pass a collection to be used as $1...$n parameters in the formula using the optional ",(0,r.kt)("em",{parentName:"p"},"formulaParams")," parameter."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},".apply()")," is similar to ",(0,r.kt)("a",{parentName:"p",href:"#call"},(0,r.kt)("inlineCode",{parentName:"a"},".call()"))," except that parameters are passed as a collection. This can be useful for passing calculated results."),(0,r.kt)("h4",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"}," var f : 4D.Function\n f = formula($1+$2+$3)\n\n c = newCollection(10,20,30)\n result = f.apply(null,c) // returns 60\n")),(0,r.kt)("h4",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var calc : 4D.Function\n var feta, robot : object\n robot = newObject("name","Robot","price",543,"quantity",2)\n feta = newObject("name","Feta","price",12.5,"quantity",5)\n\n calc = formula(this.total = this.price*this.quantity)\n\n calc.apply(feta) // feta = {name:Feta,price:12.5,quantity:5,total:62.5}\n calc.apply(robot) // robot = {name:Robot,price:543,quantity:2,total:1086}\n')),(0,r.kt)("h2",{id:"call"},".call()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".call"),"() : any",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},".call"),"( ",(0,r.kt)("em",{parentName:"p"},"thisObj")," : object { , ...",(0,r.kt)("em",{parentName:"p"},"params")," : any } ) : any"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thisObj"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"object to be returned by ",(0,r.kt)("inlineCode",{parentName:"td"},"this")," in the formula")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Value(s) to be passed as $1...$n when formula is executed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Value from formula execution")))),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".call()")," function executes the ",(0,r.kt)("inlineCode",{parentName:"p"},"formula")," object to which it is applied and returns the resulting value. The formula object can be created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"formula")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"formulaFromString")," commands."),(0,r.kt)("p",null,"In the ",(0,r.kt)("em",{parentName:"p"},"thisObj")," parameter, you can pass a reference to the object to be used as ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," within the formula."),(0,r.kt)("p",null,"You can also pass values to be used as ",(0,r.kt)("em",{parentName:"p"},"$1...$n")," parameters in the formula using the optional ",(0,r.kt)("em",{parentName:"p"},"params")," parameter(s)."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},".call()")," is similar to ",(0,r.kt)("a",{parentName:"p",href:"#apply"},(0,r.kt)("inlineCode",{parentName:"a"},".apply()"))," except that parameters are passed directly."),(0,r.kt)("h4",{id:"example-1-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var f : 4D.Function\n var result : string\n f = formula(uppercase($1))\n result = f.call(null,"hello") // returns "HELLO"\n')),(0,r.kt)("h4",{id:"example-2-1"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var f : 4D.Function\n var o : object\n var result : integer\n o = newObject("value",50)\n f = formula(this.value*2)\n result = f.call(o) // returns 100\n')),(0,r.kt)("h2",{id:"source"},".source"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".source")," : string "),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".source")," property contains the source expression of the ",(0,r.kt)("inlineCode",{parentName:"p"},"formula")," as text."),(0,r.kt)("p",null,"This property is ",(0,r.kt)("strong",{parentName:"p"},"read-only"),"."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var of : 4D.Function\n var tf : string\n of = formula(string(currentTime,HH MM AM PM))\n tf = of.source //"string(currentTime,HH MM AM PM)"\n')))}c.isMDXComponent=!0}}]);