"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["92149"],{85301:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>r,default:()=>j,assets:()=>a,toc:()=>i,frontMatter:()=>o});var t=JSON.parse('{"id":"language/commands/objectClass","title":"objectClass","description":"objectClass ( object object","source":"@site/versioned_docs/version-1.0.0/language/commands/objectClass.md","sourceDirName":"language/commands","slug":"/language/commands/objectClass","permalink":"/docs/language/commands/objectClass","draft":false,"unlisted":false,"editUrl":"https://github.com/docQodly/docs/edit/main/versioned_docs/version-1.0.0/language/commands/objectClass.md","tags":[],"version":"1.0.0","frontMatter":{"id":"objectClass","title":"objectClass"},"sidebar":"Develop","previous":{"title":"num","permalink":"/docs/language/commands/num"},"next":{"title":"objectCopy","permalink":"/docs/language/commands/objectCopy"}}'),c=n("85893"),l=n("50065");let o={id:"objectClass",title:"objectClass"},r=void 0,a={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function d(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.em,{children:"objectClass"}),"* ( ",(0,c.jsx)(s.em,{children:"object"})," : object ) : object"]}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Parameter"}),(0,c.jsx)(s.th,{children:"Type"}),(0,c.jsx)(s.th,{style:{textAlign:"center"}}),(0,c.jsx)(s.th,{children:"Description"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"object"}),(0,c.jsx)(s.td,{children:"object"}),(0,c.jsx)(s.td,{style:{textAlign:"center"},children:"\u2192"}),(0,c.jsx)(s.td,{children:"Object whose class is to be returned"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"Result"}),(0,c.jsx)(s.td,{children:"object"}),(0,c.jsx)(s.td,{style:{textAlign:"center"},children:"\u2190"}),(0,c.jsxs)(s.td,{children:["Class of object or ",(0,c.jsx)(s.code,{children:"null"})," if not found"]})]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(s.p,{children:["The ",(0,c.jsx)(s.code,{children:"objectClass"})," command returns the class of the ",(0,c.jsx)(s.em,{children:"object"})," passed in parameter."]}),"\n",(0,c.jsxs)(s.p,{children:["All objects inherit from the Object class. If ",(0,c.jsx)(s.em,{children:"object"})," is not an existing object, ",(0,c.jsx)(s.code,{children:"objectClass"})," returns ",(0,c.jsx)(s.code,{children:"null"}),"."]}),"\n",(0,c.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,c.jsx)(s.p,{children:"You created the Polygon class:"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-qs",children:"  //Class: Polygon\n\n constructor(size1 : integer, size2 : integer)\n this.area = size1*size2\n"})}),"\n",(0,c.jsx)(s.p,{children:"Then, in a method, you can write:"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-qs",children:" var poly, class : object\n poly = cs.Polygon.new(4,3)\n\n class = objectClass(poly)\n  //class contains Class: Polygon\n"})}),"\n",(0,c.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"/docs/language/commands/objectEntries",children:"objectEntries"}),(0,c.jsx)("br",{}),"\n",(0,c.jsx)(s.a,{href:"/docs/language/commands/objectValues",children:"objectValues"})]})]})}function j(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return o}});var t=n(67294);let c={},l=t.createContext(c);function o(e){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);