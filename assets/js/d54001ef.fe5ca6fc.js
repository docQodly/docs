"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[2047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(n),k=r,N=m["".concat(d,".").concat(k)]||m[k]||s[k]||l;return n?a.createElement(N,i(i({ref:t},u),{},{components:n})):a.createElement(N,i({ref:t},u))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={id:"$queryplan",title:"$queryplan"},i=void 0,p={unversionedId:"api/$queryplan",id:"api/$queryplan",title:"$queryplan",description:"Overview",source:"@site/docs/api/$queryplan.md",sourceDirName:"api",slug:"/api/$queryplan",permalink:"/docs/api/$queryplan",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/api/$queryplan.md",tags:[],version:"current",frontMatter:{id:"$queryplan",title:"$queryplan"},sidebar:"API",previous:{title:"$orderby",permalink:"/docs/api/$orderby"},next:{title:"$querypath",permalink:"/docs/api/$querypath"}},d={},o=[{value:"Overview",id:"overview",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Properties Returned",id:"properties-returned",level:2},{value:"General Properties",id:"general-properties",level:3},{value:"<code>__queryPlan</code> Details",id:"__queryplan-details",level:3},{value:"Within <code>And</code> Array",id:"within-and-array",level:4},{value:"<code>__extendedQueryPlan</code> Details",id:"__extendedqueryplan-details",level:3},{value:"Within <code>parts</code> Array",id:"within-parts-array",level:4},{value:"<code>__ENTITIES</code> Details",id:"__entities-details",level:3},{value:"Sample Usage in Postman",id:"sample-usage-in-postman",level:2},{value:"Sample Response",id:"sample-response",level:2}],u={toc:o};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$queryplan")," endpoint is designed to provide insights into the execution strategy of queries processed by the server. This endpoint helps developers and database administrators to analyze and optimize query performance by returning a detailed breakdown of the query execution plan."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For additional information, please consult the ",(0,r.kt)("a",{parentName:"p",href:"../language/DataClassClass#about-queryplan-and-querypath"},'"About queryPlan and queryPath"')," documentation.")),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("p",null,"Key features of the query plan:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Detailed Description"),": The query plan contains a detailed description of the query just before it was executed, illustrating the server's planned approach to handling the query.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optimization Insights"),": It offers insights into potential optimizations made by the server. For example, the server may convert an indexed query into a sequential one if it estimates that it would yield faster results based on the number of entities involved."))),(0,r.kt)("h2",{id:"properties-returned"},"Properties Returned"),(0,r.kt)("h3",{id:"general-properties"},"General Properties"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$queryplan")," endpoint returns structured information as outlined in the following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#__queryplan-details"},(0,r.kt)("inlineCode",{parentName:"a"},"__queryPlan"))),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Simplified overview of the query execution plan.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#__extendedqueryplan-details"},(0,r.kt)("inlineCode",{parentName:"a"},"__extendedQueryPlan"))),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Detailed structured representation of the query execution plan.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__DATACLASS")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the data class targeted by the query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__entityModel")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the entity model used in the query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__GlobalStamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Server-wide modification timestamp.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__COUNT")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of entities affected by the query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__FIRST")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Index of the first entity in the query results.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#__entities-details"},(0,r.kt)("inlineCode",{parentName:"a"},"__ENTITIES"))),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Detailed data about the entities affected by the query.")))),(0,r.kt)("h3",{id:"__queryplan-details"},(0,r.kt)("inlineCode",{parentName:"h3"},"__queryPlan")," Details"),(0,r.kt)("p",null,"This section simplifies the query execution paths:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#within-and-array"},(0,r.kt)("inlineCode",{parentName:"a"},"And"))),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of conditions combined with a logical AND operator.")))),(0,r.kt)("h4",{id:"within-and-array"},"Within ",(0,r.kt)("inlineCode",{parentName:"h4"},"And")," Array"),(0,r.kt)("p",null,"Details of conditions and subqueries:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"item")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the query condition or join operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subquery")),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Details of any subqueries related to the condition.")))),(0,r.kt)("h3",{id:"__extendedqueryplan-details"},(0,r.kt)("inlineCode",{parentName:"h3"},"__extendedQueryPlan")," Details"),(0,r.kt)("p",null,"Provides a more intricate view of the query execution strategy:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of node in the query plan, e.g., ",(0,r.kt)("inlineCode",{parentName:"td"},"LogicOperatorNode"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logicOper")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Logical operator used, e.g., ",(0,r.kt)("inlineCode",{parentName:"td"},"And"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#within-parts-array"},(0,r.kt)("inlineCode",{parentName:"a"},"parts"))),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Details of operations performed in the query plan.")))),(0,r.kt)("h4",{id:"within-parts-array"},"Within ",(0,r.kt)("inlineCode",{parentName:"h4"},"parts")," Array"),(0,r.kt)("p",null,"Complex operations within the query:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Specific type of operation, e.g., ",(0,r.kt)("inlineCode",{parentName:"td"},"JoinNode"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"targetTable")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Target table for the operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"joinPath")),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Details of the join path used in the operation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filter")),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter conditions applied within the operation.")))),(0,r.kt)("h3",{id:"__entities-details"},(0,r.kt)("inlineCode",{parentName:"h3"},"__ENTITIES")," Details"),(0,r.kt)("p",null,"Information about the entities affected by the query:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__KEY")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique key for the entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__TIMESTAMP")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp of the last update to the entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__STAMP")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Version stamp for the entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ID")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifier of the entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Example attribute, e.g., quantity in an order.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Purchaser")),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Example attribute, e.g., details about the purchaser, using deferred loading.")))),(0,r.kt)("h2",{id:"sample-usage-in-postman"},"Sample Usage in Postman"),(0,r.kt)("p",null,"How to Use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method"),": GET"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL"),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{{ApiEndpoint}}/rest/Orders/?$filter="Quantity > 4 AND Purchaser.Name = user2"&$queryplan=true'))),(0,r.kt)("img",{alt:"explorer",src:n(77427).Z,style:{borderRadius:"6px"}}),(0,r.kt)("h2",{id:"sample-response"},"Sample Response"),(0,r.kt)("p",null,"The response structure for the ",(0,r.kt)("inlineCode",{parentName:"p"},"$queryplan")," endpoint looks something like this in practice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "__queryPlan": {\n        "And": [\n            {\n                "item": "Join on Table : Users  :  Orders.Purchaser = Users.ID",\n                "subquery": [\n                    {\n                        "item": "Users.Name === user2"\n                    }\n                ]\n            },\n            {\n                "item": "Orders.Quantity > 4"\n            }\n        ]\n    },\n    "__extendedQueryPlan": {\n        "type": "LogicOperatorNode",\n        "logicOper": "And",\n        "parts": [\n            {\n                "type": "JoinNode",\n                "targetTable": "Users",\n                "instance": 0,\n                "joinPath": [\n                    {\n                        "leftTable": "Orders",\n                        "leftField": "Purchaser",\n                        "leftInstance": 0,\n                        "rightTable": "Users",\n                        "rightField": "ID",\n                        "rightInstance": 0\n                    }\n                ],\n                "filter": {\n                    "type": "SeqNode",\n                    "field": "Name",\n                    "table": "Users",\n                    "instance": 0,\n                    "oper": " === ",\n                    "value": "user2"\n                }\n            },\n            {\n                "type": "SeqNode",\n                "field": "Quantity",\n                "table": "Orders",\n                "instance": 0,\n                "oper": " > ",\n                "value": 4\n            }\n        ]\n    },\n    "__DATACLASS": "Orders",\n    "__entityModel": "Orders",\n    "__GlobalStamp": 0,\n    "__COUNT": 1,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "20",\n            "__TIMESTAMP": "2024-05-09T17:01:36.995Z",\n            "__STAMP": 1,\n            "ID": 20,\n            "Quantity": 5,\n            "Purchaser": {\n                "__deferred": {\n                    "uri": "/rest/Users[2]",\n                    "__KEY": "2"\n                }\n            },\n            "OrderedProduct": {\n                "__deferred": {\n                    "uri": "/rest/Products[2]",\n                    "__KEY": "2"\n                }\n            },\n            "paymentsSelection": {\n                "__deferred": {\n                    "uri": "/rest/Orders[20]/paymentsSelection?$expand=paymentsSelection"\n                }\n            }\n        }\n    ],\n    "__SENT": 1\n}\n')))}m.isMDXComponent=!0},77427:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/restQueryPlan-f3832d83a03409b5cf2306182a57e461.png"}}]);