"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[9766],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(i,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"openDatastore",title:"openDatastore"},l=void 0,s={unversionedId:"language/commands/openDatastore",id:"language/commands/openDatastore",title:"openDatastore",description:"openDatastore( connectionInfo text ) : cs.DataStore",source:"@site/docs/language/commands/openDatastore.md",sourceDirName:"language/commands",slug:"/language/commands/openDatastore",permalink:"/docs/language/commands/openDatastore",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/commands/openDatastore.md",tags:[],version:"current",frontMatter:{id:"openDatastore",title:"openDatastore"},sidebar:"Develop",previous:{title:"onErrCall",permalink:"/docs/language/commands/onErrCall"},next:{title:"pictureProperties",permalink:"/docs/language/commands/pictureProperties"}},i={},p=[{value:"Description",id:"description",level:4},{value:"4D Server datastore",id:"4d-server-datastore",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"openDatastore"),"( ",(0,r.kt)("em",{parentName:"p"},"connectionInfo")," : object , ",(0,r.kt)("em",{parentName:"p"},"localID")," : text ) : cs.DataStore "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connectionInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection properties used to reach the remote datastore")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"localID"),(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Id to assign to the opened datastore on the current Cloud instance (mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},"cs.DataStore"),(0,r.kt)("td",{parentName:"tr",align:null},"<-"),(0,r.kt)("td",{parentName:"tr",align:null},"Datastore object")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"openDatastore")," command connects the application to a remote datastore identified by the ",(0,r.kt)("em",{parentName:"p"},"connectionInfo")," parameter and returns a matching ",(0,r.kt)("inlineCode",{parentName:"p"},"cs.DataStore")," object associated with the ",(0,r.kt)("em",{parentName:"p"},"localID")," alias on the Qodly Cloud instance. All objects exposed in the remote datastore are available as properties of the ",(0,r.kt)("inlineCode",{parentName:"p"},"cs.DataStore")," returned object."),(0,r.kt)("p",null,"The configuration of parameters depends on the target datastore. In the current Qodly implementation, the following target datastore type is supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4D Server ")),(0,r.kt)("h4",{id:"4d-server-datastore"},"4D Server datastore"),(0,r.kt)("p",null,"Pass in ",(0,r.kt)("em",{parentName:"p"},"connectionInfo")," an object describing the 4D Server remote datastore you want to connect to. It can contain the following properties (all properties are optional except ",(0,r.kt)("em",{parentName:"p"},"hostname"),"):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Name or IP address of the remote datastore + ":" + port number (port number is mandatory)')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"User name (1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"User password (1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idleTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Inactivity session timeout (in minutes), after which the session is automatically closed by 4D Server. If omitted, default value is 60 (1h). The value cannot be < 60 (if a lower value is passed, the timeout is set to 60). For more information, see ",(0,r.kt)("a",{parentName:"td",href:"https://developer.4d.com/docs/ORDA/datastores#closing-sessions"},"Closing sessions"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tls"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Use secured connection (2). If omitted, false by default. Using a secured connection is recommended whenever possible.")))),(0,r.kt)("p",null,"(1) See the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/REST/authUsers"},"4D Server documentation")," to know how to authenticate REST connection requests"),(0,r.kt)("p",null,"(2) If ",(0,r.kt)("inlineCode",{parentName:"p"},"tls")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the HTTPS protocol is used if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTPS is enabled on the remote datastore"),(0,r.kt)("li",{parentName:"ul"},"the given port is the right ",(0,r.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/WebServer/webServerConfig#https-port"},"HTTPS port")," configured in the remote datastore settings"),(0,r.kt)("li",{parentName:"ul"},'a valid certificate and private encryption key are installed in the project. Otherwise, an error "1610 - A remote request to host xxx has failed" is raised.')),(0,r.kt)("admonition",{title:"4D Server configuration",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("em",{parentName:"p"},"connectionInfo")," remote datastore designates a 4D Server database with the following configuration:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"its web server must be launched with http and/or https enabled,"),(0,r.kt)("li",{parentName:"ul"},"its ",(0,r.kt)("a",{parentName:"li",href:"https://developer.4d.com/docs/REST/configuration#starting-the-rest-server"},(0,r.kt)("strong",{parentName:"a"},"Expose as REST server"))," option must be checked,"),(0,r.kt)("li",{parentName:"ul"},"at least one client license is available,"),(0,r.kt)("li",{parentName:"ul"},"run with 4D Server v20 or higher.")),(0,r.kt)("p",{parentName:"admonition"},"If no matching 4D Server database is found, ",(0,r.kt)("inlineCode",{parentName:"p"},"openDatastore")," returns ",(0,r.kt)("strong",{parentName:"p"},"null"),".")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"localID")," is a local alias on the current Cloud instance for the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/ORDA/datastores#opening-sessions"},"session opened on remote 4D datastore"),". If ",(0,r.kt)("em",{parentName:"p"},"localID")," already exists on the instance, it is used. Otherwise, a new ",(0,r.kt)("em",{parentName:"p"},"localID")," session is created when the datastore object is used. For a detailed description of remote session support on 4D Server, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/ORDA/datastores"},"4D documentation"),". "),(0,r.kt)("p",null,"Once the session is opened on the remote 4D datastore, the following statements become equivalent and return a reference on the same datastore object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var mysd, myds2 : cs.DataStore\n myds = openDatastore(connectionInfo,"myLocalId")\n myds2 = ds("myLocalId")\n  //myds and myds2 are equivalent\n')),(0,r.kt)("h4",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"Connection to a remote datastore without user / password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var connectTo = {hostname : "192.168.18.11:8044"}\n var remoteDS : cs.DataStore\n var allStudents : cs.StudentsSelection\n remoteDS = openDatastore(connectTo , "students")\n allStudents = remoteDS.Students.all() \n')),(0,r.kt)("h4",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"Connection to a remote datastore with user / password / timeout / tls:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-qs"},' var connectTo = {hostname : "192.168.18.11:4443", user : "marie",\\  \n    password : "123", idleTimeout : 70 , tls : true}\n var remoteDS : cs.DataStore\n var allStudents : cs.StudentsSelection\n remoteDS = openDatastore(connectTo , "students")\n allStudents = remoteDS.Students.all()\n')),(0,r.kt)("h4",{id:"error-management"},"Error management"),(0,r.kt)("p",null,"In case of error, the command returns ",(0,r.kt)("strong",{parentName:"p"},"null"),'. If the remote datastore cannot be reached (wrong address, web server not started, http and https not enabled...), error 1610 "A remote request to host XXX has failed" is raised. You can intercept this error with a method installed by ',(0,r.kt)("inlineCode",{parentName:"p"},"onErrCall"),"."),(0,r.kt)("h4",{id:"see-also"},"See also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/ORDA/datastores"},"Using a remote datastore")," section on developer.4d.com."))}m.isMDXComponent=!0}}]);