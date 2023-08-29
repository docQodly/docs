"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[321],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"lang-quicktour",title:"A Quick Tour"},l=void 0,s={unversionedId:"language/basics/lang-quicktour",id:"language/basics/lang-quicktour",title:"A Quick Tour",description:'Since the QodlyScript language is highly related to web development, printing the traditional "Hello, world!" message on screen only requires a web form to be displayed and the following line:',source:"@site/docs/language/basics/lang-quicktour.md",sourceDirName:"language/basics",slug:"/language/basics/lang-quicktour",permalink:"/docs/language/basics/lang-quicktour",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-quicktour.md",tags:[],version:"current",frontMatter:{id:"lang-quicktour",title:"A Quick Tour"},sidebar:"Programming",previous:{title:"QodlyScript Reference",permalink:"/docs/category/qodlyscript"},next:{title:"Basics",permalink:"/docs/category/language"}},i={},p=[{value:"Assigning Values",id:"assigning-values",level:2},{value:"Variables",id:"variables",level:2},{value:"Commands",id:"commands",level:2},{value:"Constants",id:"constants",level:2},{value:"Methods",id:"methods",level:2},{value:"Data Types",id:"data-types",level:2},{value:"Objects and collections",id:"objects-and-collections",level:2},{value:"Classes",id:"classes",level:2},{value:"Operators",id:"operators",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Since the QodlyScript language is highly related to web development, printing the traditional "Hello, world!" message on screen only requires a web form to be displayed and the following line:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'webForm.setMessage("Hello, World!")\n')),(0,r.kt)("p",null,'This code will display a "Hello, World!" message at the bottom of your web form.'),(0,r.kt)("h2",{id:"assigning-values"},"Assigning Values"),(0,r.kt)("p",null,"Data can be put into and copied out of variables, attributes, collection items... Putting data into a variable is called assigning the data to the variable and is done with the assignment operator (=). The assignment operator is also used to assign data to attributes, collection items, etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'MyNumber=3 //assigns 3 to MyNumber variable  \nmyEntity.size=myNumber //assigns myNumber variable to size entity attribute\nMyVar=length("Acme") //assigns the result of the function (4) to MyVar\nmyDate=!2023/01/21! //assigns a date literal\nmyColl[2].hours=?08:12:55? //assigns a time literal\narrDays{2}="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element\n')),(0,r.kt)("p",null,"You must distinguish the assignment operator = from the other operators. Rather than combining expressions into a new one, the assignment operator copies the value of the expression to the right of the assignment operator into the variable or attribute to the left of the operator."),(0,r.kt)("p",null,"For efficiency, QodlyScript also supports compound assignment operators, allowing to combine assignment with another operation, for example the addition assignment operator (",(0,r.kt)("inlineCode",{parentName:"p"},"+="),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"a=1 //1\na+=2 //3\n")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,"The QodlyScript language is strongly typed, although some flexibility is allowed in many cases. You create a typed variable using the ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," keyword. For example, to create a variable of the date type, you can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"var MyDate : date \n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," keyword allows declaring object variables of a defined class type, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"var myPerson : cs.Person \n//variable of the Person user class\n")),(0,r.kt)("p",null,"A declared variable cannot change of type. "),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,"QodlyScript commands are built-in methods to perform an action. Commands are often used with parameters, which are passed in brackets () and separated by commas ",(0,r.kt)("inlineCode",{parentName:"p"},","),". Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'convertFromString(vText,"UTF-8",vBlob)\n')),(0,r.kt)("p",null,"Some commands are attached to collections or objects, in which case they are named functions and are used using the dot notation. For example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"c=newCollection(1,2,3,4,5)\nnc=c.slice(0,3) //nc=[1,2,3]  \n\nlastEmployee=employee.last()\n")),(0,r.kt)("h2",{id:"constants"},"Constants"),(0,r.kt)("p",null,"QodlyScript proposes an extensed set of predefined constants, whose values are accessible by name. They allow writing more readable code. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"kCharCodes")," is a constant (value 1). "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'a="alpha bravo charlie"\nb="Alpha Bravo Charlie"  \nvResult=compareStrings(a,b,kCharCodes) // vResult: 1\n')),(0,r.kt)("p",null,"Constants can be added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"vResult=compareStrings(a,b,kCharCodes+kCaseInsensitive) // vResult: 0\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"QodlyScript provides a large number of built-in methods (or ",(0,r.kt)("em",{parentName:"p"},"commands"),") but also lets you can create your own ",(0,r.kt)("strong",{parentName:"p"},"methods"),". User-defined methods can contain commands, operators, and any other parts of the language. "),(0,r.kt)("p",null,"A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex."),(0,r.kt)("p",null,"For example, the following line is a statement that will crop a picture:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"transformPicture(vpGears,Crop,50,50,100,100))\n")),(0,r.kt)("p",null,"A method also contains tests and loops that control the flow of the execution. QodlyScript methods support ",(0,r.kt)("inlineCode",{parentName:"p"},"if...else...end")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"case of...else...end")," branching structures as well as looping structures: ",(0,r.kt)("inlineCode",{parentName:"p"},"while...end"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"repeat...until"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"for...end"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"forEach...end"),":"),(0,r.kt)("p",null,"The following example goes through all the characters of the text ",(0,r.kt)("em",{parentName:"p"},"vtSomeText"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"for(vlChar,1,length(vtSomeText))\n    //Do something with the character if it is a TAB\n\n\n    if(characterCode(vtSomeText[[vlChar]])==tab)\n        //...\n    end\nend\n")),(0,r.kt)("p",null,"A method can call another method with or without parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a comma ",(0,r.kt)("inlineCode",{parentName:"p"},","),". The parameters are directly available within the called method if they are declared. A method can return a single parameter. "),(0,r.kt)("p",null,"When you call a method, you just type its name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'myText="hello"\nmyText=Do_Something(myText) //Call the Do_Something method\nfile("/RESOURCES/Hello.txt").setText(myText) //writes "HELLO"\n \n  //code of the method Do_Something  \ndeclare ( input : string) -> output : string \noutput=uppercase(input)\n')),(0,r.kt)("h2",{id:"data-types"},"Data Types"),(0,r.kt)("p",null,"In QodlyScript, the various types of data that can be handled are referred to as data types. There are scalar data types (string, numeric, date, time, boolean, picture), and also composite data types (objects, collections, blobs)."),(0,r.kt)("p",null,"Note that string and numeric data types can be associated with more than one type of datastore attributes. When data is put into an attribute, QodlyScript automatically converts the data to the correct type for the attribute. For example, if an Long attribute is used, its data is automatically treated as integer. In other words, you need not worry about mixing similar attribute types when using the QodlyScript; it will manage them for you."),(0,r.kt)("p",null,'However, when using QodlyScript it is important that you do not mix different data types. In the same way that it makes no sense to store "ABC" in a Date attribute, it makes no sense to put "ABC" in a variable used for dates. In most cases, QodlyScript is very tolerant and will try to make sense of what you are doing. For example, if you add a number to a date, QodlyScript will assume that you want to add that number of days to the date, but if you try to add a string to a date, QodlyScript will tell you that the operation cannot work.'),(0,r.kt)("p",null,'There are cases in which you need to store data as one type and use it as another type. The language contains a full complement of commands that let you convert from one data type to another. For example, you may need to create a part number that starts with a number and ends with characters such as "abc". In this case, you might write:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'myEntity.Product.partNumber=string(number)+"abc"\n')),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"number")," is 17, then ",(0,r.kt)("em",{parentName:"p"},"myEntity.partNumber"),' will get the string "17abc".'),(0,r.kt)("p",null,"The data types are fully defined in the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-data-types"},"Data Types"),"."),(0,r.kt)("h2",{id:"objects-and-collections"},"Objects and collections"),(0,r.kt)("p",null,"You can handle objects and collections using the object notation to get or to set their values. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'employee.name="Smith"\n')),(0,r.kt)("p",null,"You can also use a string within square brackets, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'vName=employee["name"]\n')),(0,r.kt)("p",null,"Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"vAge=employee.children[2].age\n")),(0,r.kt)("p",null,"Note that if the object property value is an object that encapsulates a method (a formula), you need to add parenthesis ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," to the property name to execute the method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"f=newObject\nf.add=formula(1+2)\nf.add() //returns 3\n")),(0,r.kt)("p",null,"To access a collection element, you have to pass the element number embedded in square brackets:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'var myColl : collection\nmyColl=newCollection("A","B",1,2,currentTime)\nmyColl[3] //access to 4th element of the collection\n')),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("p",null,"The QodlyScript language supports classes. "),(0,r.kt)("p",null,'You can create a class named "myClass" for example. To instantiate an object of this class in a method, call the class from the user ',(0,r.kt)("em",{parentName:"p"},"class store")," (",(0,r.kt)("inlineCode",{parentName:"p"},"cs"),") and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"new()")," member function. You can pass parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"// in a QodlyScript method\no=cs.myClass.new() \n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"myClass")," class method, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"function <methodName>")," statement to define the ",(0,r.kt)("em",{parentName:"p"},"methodName")," class member function. A class member function can receive and return parameters like any method, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," as the object instance. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'//in the myClass definition\nfunction hello -> welcome : string\n  welcome="Hello "+this.who\n')),(0,r.kt)("p",null,"To execute a class member function, just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," operator on the member function of the object instance. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'o=cs.myClass.new()\no.who="World"\nmessage=o.myClass.hello()  \n//message: "Hello World"\n')),(0,r.kt)("p",null,"Optionally, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"constructor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"property")," keywords to declare properties for the object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},'//in the Rectangle class\nconstructor(height : integer, width : integer)\n this.height=height\n this.width=width\n \n property name : string\n this.name="Rectangle"\n')),(0,r.kt)("p",null,"A class can extend another class by using ",(0,r.kt)("inlineCode",{parentName:"p"},"extends <ClassName>"),". Superclasses can be called using the ",(0,r.kt)("inlineCode",{parentName:"p"},"super")," command. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},"//in the Square class\nextends Rectangle\n \nconstructor(size : integer)\n \n  // It calls the parent class's constructor with sizes   \n  // provided for the Rectangle's width and height\nsuper(size,size)\n\nthis.name=\"Square\"\n")),(0,r.kt)("h2",{id:"operators"},"Operators"),(0,r.kt)("p",null,"When you use a language, it is rare that you will simply want a piece of data. It is more likely that you will want to do something to or with that data. You perform such calculations with operators. Operators, in general, take two pieces of data and perform an operation on them that results in a new piece of data. You are already familiar with many operators. For example, 1 + 2 uses the addition operator (or plus sign) to add two numbers together, and the result is 3. This table shows some familiar numeric operators:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"Addition"),(0,r.kt)("td",{parentName:"tr",align:null},"1 + 2 results in 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2013"),(0,r.kt)("td",{parentName:"tr",align:null},"Subtraction"),(0,r.kt)("td",{parentName:"tr",align:null},"3 \u2013 2 results in 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiplication"),(0,r.kt)("td",{parentName:"tr",align:null},"2 * 3 results in 6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"Division"),(0,r.kt)("td",{parentName:"tr",align:null},"6 / 2 results in 3")))),(0,r.kt)("p",null,"Numeric operators are just one type of operator available to you. QodlyScript supports many different types of data, such as numbers, strings, dates, and pictures, so there are operators that perform operations on these different data types."),(0,r.kt)("p",null,"The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Addition"),(0,r.kt)("td",{parentName:"tr",align:null},"1 + 2 adds the numbers and results in 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Concatenation"),(0,r.kt)("td",{parentName:"tr",align:null},'"Hello " + "there" concatenates (joins together) the strings and results in "Hello there"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date and Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Date addition"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-01! + 20 adds 20 days to the date January 1, 2023, and results in the date January 21, 2023")))))}d.isMDXComponent=!0}}]);