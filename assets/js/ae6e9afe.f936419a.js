"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["22288"],{95198:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>c});var s=JSON.parse('{"id":"language/commands/objectEntries","title":"objectEntries","description":"objectEntries ( object collection","source":"@site/docs/language/commands/objectEntries.md","sourceDirName":"language/commands","slug":"/language/commands/objectEntries","permalink":"/docs/next/language/commands/objectEntries","draft":false,"unlisted":false,"editUrl":"https://github.com/docQodly/docs/edit/main/docs/language/commands/objectEntries.md","tags":[],"version":"current","frontMatter":{"id":"objectEntries","title":"objectEntries"},"sidebar":"Develop","previous":{"title":"objectCopy","permalink":"/docs/next/language/commands/objectCopy"},"next":{"title":"objectIsDefined","permalink":"/docs/next/language/commands/objectIsDefined"}}'),r=n("85893"),o=n("50065");let c={id:"objectEntries",title:"objectEntries"},i=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function d(e){let t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"objectEntries"})," ( ",(0,r.jsx)(t.em,{children:"object"})," : object ) : collection"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"}}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(t.td,{children:"Object to return contents"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Result"}),(0,r.jsx)(t.td,{children:"collection"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2190"}),(0,r.jsx)(t.td,{children:"Collection of objects with key / value properties"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"objectEntries"})," command returns a collection of objects containing the contents of the ",(0,r.jsx)(t.em,{children:"object"})," as key / value property pairs."]}),"\n",(0,r.jsx)(t.p,{children:"Each returned object contains the following properties:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Enumerable property name of the object"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"variant"}),(0,r.jsx)(t.td,{children:"Enumerable property value of the object"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Only first-level property names are returned (property names of sub-objects are not returned). The order of properties within the returned collection follows the definition order of the properties."}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["Using an object as an hash map (key / value system) provides a quick and direct access to data, just like when using an index (e.g., if we need Mary's age, we can write: ",(0,r.jsx)(t.code,{children:'persons["Mary"]'}),")"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-qs",children:'var individual, persons : object\nvar names, ages : collection\nvar result1, result2 : string\n\npersons = newObject\npersons["John"] = 42\npersons["Andy"] = 24\npersons["Mary"] = 30\npersons["Paul"] = 50\n\nresult1 = "The average age is "+string(objectValues(persons).average())\nresult1 = result1+"/rThere are "+string(objectKeys(persons).length)+" persons"\n\nages = objectEntries(persons).query("value>:1",25)\nresult2 = "There are "+string(ages.length)+" persons who are over 25"\nresult2 = result2+"/rTheir names are: "+ages.extract("key").join("-")\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/language/commands/objectKeys",children:"objectKeys"}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.a,{href:"/docs/next/language/commands/objectValues",children:"objectValues"})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return c}});var s=n(67294);let r={},o=s.createContext(r);function c(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);