"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["3005"],{56620:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>c});var o=JSON.parse('{"id":"language/commands/objectRemove","title":"objectRemove","description":"objectRemove ( object string )","source":"@site/versioned_docs/version-1.0.0/language/commands/objectRemove.md","sourceDirName":"language/commands","slug":"/language/commands/objectRemove","permalink":"/docs/language/commands/objectRemove","draft":false,"unlisted":false,"editUrl":"https://github.com/docQodly/docs/edit/main/versioned_docs/version-1.0.0/language/commands/objectRemove.md","tags":[],"version":"1.0.0","frontMatter":{"id":"objectRemove","title":"objectRemove"},"sidebar":"Develop","previous":{"title":"objectKeys","permalink":"/docs/language/commands/objectKeys"},"next":{"title":"objectValues","permalink":"/docs/language/commands/objectValues"}}'),r=n("85893"),s=n("50065");let c={id:"objectRemove",title:"objectRemove"},i=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}];function a(e){let t={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"objectRemove"}),"* ( ",(0,r.jsx)(t.em,{children:"object"})," : object , ",(0,r.jsx)(t.em,{children:"property"})," : string )"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"}}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(t.td,{children:"Object to edit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"property"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name of property to remove"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"objectRemove"})," command removes ",(0,r.jsx)(t.em,{children:"property"})," from the ",(0,r.jsx)(t.em,{children:"object"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The command removes the property as well as its current value."}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"property"})," parameter, pass the label of the property to be removed. Note that the ",(0,r.jsx)(t.em,{children:"property"})," parameter is case sensitive."]}),"\n",(0,r.jsxs)(t.p,{children:["If the ",(0,r.jsx)(t.em,{children:"property"})," is not found at the first level of ",(0,r.jsx)(t.em,{children:"object"}),", the command does nothing."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-qs",children:' var obj : object\n\n obj = {name : "Smith", info: {a: 20, b: 30}}\n objectRemove(obj, "name")\n	//obj: {"info": {"a": 20, "b": 30}}\n objectRemove(obj.info, "b")\n	//obj: {"info": {"a": 20}}\n'})})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return c}});var o=n(67294);let r={},s=o.createContext(r);function c(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);