"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["51769"],{99108:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>d});var t=JSON.parse('{"id":"api/$info","title":"$info","description":"Overview","source":"@site/docs/api/$info.md","sourceDirName":"api","slug":"/api/$info","permalink":"/docs/next/api/$info","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20api%2F%24info.md%20(current)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"current","frontMatter":{"id":"$info","title":"$info"},"sidebar":"API","previous":{"title":"$catalog","permalink":"/docs/next/api/$catalog"},"next":{"title":"Endpoints and Data Access","permalink":"/docs/next/api/dataclassEndpoints"}}'),i=s("85893"),r=s("50065");let d={id:"$info",title:"$info"},c="Gaining Insights into Server Cache",l={},o=[{value:"Overview",id:"overview",level:2},{value:"Properties Returned",id:"properties-returned",level:2},{value:"General Properties",id:"general-properties",level:3},{value:"<code>entitySet</code> Details",id:"entityset-details",level:3},{value:"<code>ProgressInfo</code> Details",id:"progressinfo-details",level:3},{value:"<code>sessionInfo</code> Details",id:"sessioninfo-details",level:3},{value:"<code>memMetrics</code> Details",id:"memmetrics-details",level:3},{value:"Example Context: Client Manager and REST Handler",id:"example-context-client-manager-and-rest-handler",level:4},{value:"Sample Usage Example in Postman",id:"sample-usage-example-in-postman",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"gaining-insights-into-server-cache",children:"Gaining Insights into Server Cache"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"$info"})," endpoint offers comprehensive insights into the server's cache usage, active user sessions, and internal server metrics. This endpoint is instrumental for developers and administrators to monitor and manage the application's performance and data accessibility effectively."]}),"\n",(0,i.jsx)(n.h2,{id:"properties-returned",children:"Properties Returned"}),"\n",(0,i.jsx)(n.h3,{id:"general-properties",children:"General Properties"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"$info"})," endpoint returns structured information as outlined in the following table:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cacheSize"})}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Total allocated cache size in bytes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"usedCache"})}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Amount of cache currently used in bytes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"entitySetCount"})}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Number of entity selections currently stored."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#entityset-details",children:(0,i.jsx)(n.code,{children:"entitySet"})})}),(0,i.jsx)(n.td,{children:"Array"}),(0,i.jsx)(n.td,{children:"Information on active entity selections stored within the server's cache."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#progressinfo-details",children:(0,i.jsx)(n.code,{children:"ProgressInfo"})})}),(0,i.jsx)(n.td,{children:"Array"}),(0,i.jsx)(n.td,{children:"Operational progress indicators that may impact server performance."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#sessioninfo-details",children:(0,i.jsx)(n.code,{children:"sessionInfo"})})}),(0,i.jsx)(n.td,{children:"Array"}),(0,i.jsx)(n.td,{children:"Data on active user sessions, including session duration and expiration."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#memmetrics-details",children:(0,i.jsx)(n.code,{children:"memMetrics"})})}),(0,i.jsx)(n.td,{children:"Array"}),(0,i.jsx)(n.td,{children:"Detailed memory usage statistics related to client and server processes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"privileges"})}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:'An object with a "privileges" property (collection of objects). Each object of the collection has a "privilege" property with a privilege name of the user session as value.'})]})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"entityset-details",children:[(0,i.jsx)(n.code,{children:"entitySet"})," Details"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"entitySet"})," provides detailed information about each entity set stored in the cache:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Unique identifier for the entity set."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"dataClass"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Name of the dataclass associated with the entity set."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"selectionSize"})}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Number of entities within the set."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"sorted"})}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"Indicates if the set is sorted."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"refreshed"})}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"Timestamp when the entity set was last accessed or refreshed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"expires"})}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"Expiry timestamp after which the entity set may be cleared from cache."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Additionally, for creating or releasing an entity set from the cache:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Creating an Entity Set"}),": Use ",(0,i.jsx)(n.code,{children:"$method=entityset"})," to initiate a new entity selection within the cache, specifying the desired parameters for entity retrieval."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Releasing an Entity Set"}),": To remove an entity set from the cache, employ ",(0,i.jsx)(n.code,{children:"$method=release"}),", ensuring the specific set is targeted for clearance."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsx)(n.p,{children:"The server automatically generates certain entity selections for internal optimizations. Therefore, the entity sets you manually create are part of a broader collection managed by the system."})]}),"\n",(0,i.jsxs)(n.h3,{id:"progressinfo-details",children:[(0,i.jsx)(n.code,{children:"ProgressInfo"})," Details"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ProgressInfo"})," provides information about ongoing operations that may affect server performance:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"UserInfo"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Identifier for the type of progress (e.g., index or flush)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"SessionCount"})}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Number of sessions affected by this operation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Title"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Title or name of the operation, if applicable."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CanInterrupt"})}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"Indicates whether the operation can be interrupted."})]})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"sessioninfo-details",children:[(0,i.jsx)(n.code,{children:"sessionInfo"})," Details"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"sessionInfo"})," details each active user session to help monitor access and system usage:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"sessionID"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Unique identifier for the user session."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"lifeTime"})}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Duration the session is set to remain active, in seconds."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"expiration"})}),(0,i.jsx)(n.td,{children:"Date"}),(0,i.jsx)(n.td,{children:"Timestamp when the session is scheduled to expire."})]})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"memmetrics-details",children:[(0,i.jsx)(n.code,{children:"memMetrics"})," Details"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"memMetrics"})," provides a detailed breakdown of memory usage across different server processes, particularly focusing on client interactions and REST API handlers:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"clients"})}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"An object that currently has no data (empty). Future implementations may populate this with client-specific memory usage data."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"processes"})}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"Memory usage broken down by server processes such as the Client Manager and REST Handler."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"methods"})}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"Memory usage associated with internal methods."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"total"})}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"Cumulative memory metrics across all processes and methods."})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"example-context-client-manager-and-rest-handler",children:"Example Context: Client Manager and REST Handler"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"processes"})," section, memory usage is detailed for key server components like the Client Manager and the REST Handler:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Client Manager"}),": Manages client connections and data transactions."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"methods"}),": Details internal methods and their memory usage."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"total"}),": Aggregates the memory usage for the entire process."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"REST Handler"}),": Manages REST API requests and responses."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"methods"}),": Specific to handling REST requests, including caching and entity management."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"total"}),": Summarizes memory usage directly attributed to REST operations."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sample-usage-example-in-postman",children:"Sample Usage Example in Postman"}),"\n",(0,i.jsx)(n.p,{children:"How to Use:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Method"}),": GET"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"URL"}),": ",(0,i.jsx)(n.code,{children:"{{ApiEndpoint}}/rest/$info"})]}),"\n"]}),"\n",(0,i.jsx)("img",{src:s(59230).Z,style:{borderRadius:"6px"}}),"\n",(0,i.jsxs)(n.p,{children:["The response structure for the ",(0,i.jsx)(n.code,{children:"$info"})," endpoint looks something like this in practice:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "cacheSize": 209715200,\n    "usedCache": 328760,\n    "entitySetCount": 1,\n    "entitySet": [\n        {\n            "id": "9BCEC36AD6ED4104BE817C47C360AB0D",\n            "dataClass": "Users",\n            "selectionSize": 10,\n            "sorted": false,\n            "refreshed": "2024-05-12T00:21:38.575Z",\n            "expires": "2024-05-12T02:21:38.575Z"\n        }\n    ],\n    "ProgressInfo": [\n        {\n            "UserInfo": "flushProgressIndicator",\n            "SessionCount": 0,\n            "Title": "",\n            "CanInterrupt": false\n        },\n        {\n            "UserInfo": "indexProgressIndicator",\n            "SessionCount": 0,\n            "Title": "",\n            "CanInterrupt": true\n        }\n    ],\n    "sessionInfo": [\n        {\n            "sessionID": "00130D6E779E4681873A8B46B694C2DD",\n            "lifeTime": 60,\n            "expiration": "2024-05-12T01:03:34.942Z"\n        },\n        {\n            "sessionID": "0024480DF07143F995C445C20470E901",\n            "lifeTime": 60,\n            "expiration": "2024-05-12T00:53:48.042Z"\n        },\n    ],\n    "HTTPConnections": [],\n    "privileges": [\n        {\n            "privilege": "guest"\n        }\n    ],\n    "memMetrics": [\n        {\n            "clients": {},\n            "processes": {\n                "Client Manager": {\n                    "methods": {\n                        "[internal]": {\n                            "entities": 0,\n                            "entitySelections": 0,\n                            "records": 0,\n                            "selections": 0,\n                            "bittables": 8\n                        }\n                    },\n                    "total": {\n                        "entities": 0,\n                        "entitySelections": 0,\n                        "records": 0,\n                        "selections": 0,\n                        "bittables": 8\n                    }\n                },\n                "REST Handler: ": {\n                    "methods": {\n                        "[internal]": {\n                            "entities": 0,\n                            "entitySelections": 1,\n                            "records": 0,\n                            "selections": 1,\n                            "bittables": 1\n                        }\n                    },\n                    "total": {\n                        "entities": 0,\n                        "entitySelections": 1,\n                        "records": 0,\n                        "selections": 1,\n                        "bittables": 1\n                    }\n                }\n            },\n            "methods": {\n                "[internal]": {\n                    "entities": 0,\n                    "entitySelections": 0,\n                    "records": 0,\n                    "selections": 0,\n                    "bittables": 8\n                }\n            },\n            "total": {\n                "entities": 0,\n                "entitySelections": 1,\n                "records": 0,\n                "selections": 1,\n                "bittables": 9\n            }\n        }\n    ]\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},59230:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/restInfo-652ca361b7d2984561790b60f2dcd816.png"},50065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(67294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);