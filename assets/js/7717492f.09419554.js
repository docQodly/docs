"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["58593"],{66567:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"api/$timeout","title":"$timeout","description":"Functionality","source":"@site/docs/api/$timeout.md","sourceDirName":"api","slug":"/api/$timeout","permalink":"/docs/next/api/$timeout","draft":false,"unlisted":false,"editUrl":"https://github.com/docQodly/docs/edit/main/docs/api/$timeout.md","tags":[],"version":"current","frontMatter":{"id":"$timeout","title":"$timeout"},"sidebar":"API","previous":{"title":"$skip","permalink":"/docs/next/api/$skip"},"next":{"title":"$top/$limit","permalink":"/docs/next/api/$top$limit"}}'),s=n("85893"),r=n("50065");let o={id:"$timeout",title:"$timeout"},d=void 0,l={},c=[{value:"Functionality",id:"functionality",level:2},{value:"Definition",id:"definition",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Detailed Behavior",id:"detailed-behavior",level:2},{value:"Default Timeout",id:"default-timeout",level:3},{value:"Using the <code>$timeout</code> Parameter",id:"using-the-timeout-parameter",level:3},{value:"Using Specific Formats",id:"using-specific-formats",level:3},{value:"Combining with <code>$expand</code>",id:"combining-with-expand",level:3},{value:"Combining with Other Parameters",id:"combining-with-other-parameters",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Setting a Custom Timeout",id:"setting-a-custom-timeout",level:3},{value:"Default Timeout Behavior",id:"default-timeout-behavior",level:3},{value:"Accessing a Removed Entity Set",id:"accessing-a-removed-entity-set",level:3},{value:"Recreating an Entity Set with <code>$savedfilter</code>",id:"recreating-an-entity-set-with-savedfilter",level:3},{value:"Best Practices",id:"best-practices",level:2}];function a(e){let t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"functionality",children:"Functionality"}),"\n",(0,s.jsx)(t.h3,{id:"definition",children:"Definition"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"$timeout"})," endpoint defines the number of seconds to save an entity set in the server's cache. This parameter works in conjunction with ",(0,s.jsx)(t.code,{children:"$method=entityset"})," to control the lifespan of the cached entity set."]}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.p,{children:"To set a timeout for an entity set, use the following format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'GET /rest/{{dataClass}}?$filter="{{filterExpression}}"&$method=entityset&?$timeout={{seconds}}\n'})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"$timeout"})," endpoint accepts a numerical value representing the number of seconds the entity set should remain in the cache. For example, 1800 seconds for 30 minutes."]})}),"\n",(0,s.jsx)(t.h2,{id:"detailed-behavior",children:"Detailed Behavior"}),"\n",(0,s.jsx)(t.h3,{id:"default-timeout",children:"Default Timeout"}),"\n",(0,s.jsx)(t.p,{children:"By default, the timeout is set to two (2) hours."}),"\n",(0,s.jsxs)(t.h3,{id:"using-the-timeout-parameter",children:["Using the ",(0,s.jsx)(t.code,{children:"$timeout"})," Parameter"]}),"\n",(0,s.jsx)(t.p,{children:"When an entity set is created with a specified timeout, the following occurs:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The entity set is stored in the cache for the defined number of seconds."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Each time the entity set is accessed, the timeout is recalculated from the current time."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["If the entity set is recreated using ",(0,s.jsx)(t.code,{children:"$savedfilter"}),", the new default timeout is 10 minutes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"using-specific-formats",children:"Using Specific Formats"}),"\n",(0,s.jsxs)(t.p,{children:["To set different timeout durations for an entity set, adjust the number of seconds in the ",(0,s.jsx)(t.code,{children:"$timeout"})," parameter."]}),"\n",(0,s.jsxs)(t.h3,{id:"combining-with-expand",children:["Combining with ",(0,s.jsx)(t.code,{children:"$expand"})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"$timeout"})," parameter can be used alongside ",(0,s.jsx)(t.code,{children:"$expand"})," to manage the lifespan of expanded entity sets. Ensure that the ",(0,s.jsx)(t.code,{children:"$expand"})," parameter is properly defined to retrieve related entities within the specified timeout period."]}),"\n",(0,s.jsx)(t.h2,{id:"combining-with-other-parameters",children:"Combining with Other Parameters"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"$timeout"})," parameter can be combined with other parameters:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"$expand"}),": Retrieve related entities within the specified timeout period."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"$filter"}),": Define specific criteria for the entities included in the entity set."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"$orderby"}),": Sort the entities in the entity set."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"$top/$limit"}),": Limit the number of entities returned in the entity set."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"$skip"}),": Skip a specified number of entities in the result set."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"$savedfilter"})," and ",(0,s.jsx)(t.strong,{children:"$savedorderby"}),": Save the filter and order by criteria to recreate the entity set with the same reference ID."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsx)(t.h3,{id:"setting-a-custom-timeout",children:"Setting a Custom Timeout"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Request:"})}),"\n",(0,s.jsx)(t.p,{children:"To create an entity set that expires after 20 minutes:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'GET /rest/Employee?$filter="salary>50000"&$method=entityset&$timeout=1200\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Response:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "__ENTITYSET": "/rest/Employee/$entityset/3BA2B71499244F60A38CD51E11ACDDF8",\n    "__DATACLASS": "Employee",\n    "__entityModel": "Employee",\n    "__GlobalStamp": 0,\n    "__COUNT": 50,\n    "__SENT": 50,\n    "__ENTITIES": [ ... ],\n    "__FIRST": 0\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"default-timeout-behavior",children:"Default Timeout Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["If no ",(0,s.jsx)(t.code,{children:"$timeout"})," parameter is specified, the default timeout of 2 hours is applied:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Request:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"GET /rest/Employee?$filter=\"department='HR'\"&$method=entityset\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Response:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "__ENTITYSET": "/rest/Employee/$entityset/3BA2B71499244F60A38CD51E11ACDDF8",\n    "__DATACLASS": "Employee",\n    "__entityModel": "Employee",\n    "__GlobalStamp": 0,\n    "__COUNT": 50,\n    "__SENT": 50,\n    "__ENTITIES": [ ... ],\n    "__FIRST": 0\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"accessing-a-removed-entity-set",children:"Accessing a Removed Entity Set"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Request:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"GET /rest/Employee/$entityset/3BA2B71499244F60A38CD51E11ACDDF8\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Response:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "__ERROR": [\n        {\n            "message": "The \\"3BA2B71499244F60A38CD51E11ACDDF8\\" entity set cannot be found",\n            "componentSignature": "dbmg",\n            "errCode": 1802\n        }\n    ]\n}\n'})}),"\n",(0,s.jsxs)(t.h3,{id:"recreating-an-entity-set-with-savedfilter",children:["Recreating an Entity Set with ",(0,s.jsx)(t.code,{children:"$savedfilter"})]}),"\n",(0,s.jsxs)(t.p,{children:["If an entity set is removed and then recreated using ",(0,s.jsx)(t.code,{children:"$savedfilter"}),", the timeout is reset to 10 minutes:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Request:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'GET /rest/Employee?$filter="salary>50000"&$method=entityset&$savedfilter=true\n'})}),"\n",(0,s.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Set Appropriate Timeouts:"})," Choose a timeout duration that balances performance and resource utilization."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Monitor Cache Usage:"})," Regularly check the cache for expired or unused entity sets to optimize memory usage."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Handle Timeouts Gracefully:"})," Implement logic to handle cases where the entity set may have expired or been removed from the cache."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var i=n(67294);let s={},r=i.createContext(s);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);