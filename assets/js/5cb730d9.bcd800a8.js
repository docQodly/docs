"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["23923"],{73744:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>d,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"language/commands/yearOf","title":"yearOf","description":"yearOf ( aDate integer","source":"@site/versioned_docs/version-1.0.0/language/commands/yearOf.md","sourceDirName":"language/commands","slug":"/language/commands/yearOf","permalink":"/docs/language/commands/yearOf","draft":false,"unlisted":false,"editUrl":"https://github.com/docQodly/docs/edit/main/versioned_docs/version-1.0.0/language/commands/yearOf.md","tags":[],"version":"1.0.0","frontMatter":{"id":"yearOf","title":"yearOf"},"sidebar":"Develop","previous":{"title":"webServerList","permalink":"/docs/language/commands/webServerList"},"next":{"title":"zipCreateArchive","permalink":"/docs/language/commands/zipCreateArchive"}}'),s=n("85893"),a=n("50065");let l={id:"yearOf",title:"yearOf"},d=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"yearOf"}),"* ( ",(0,s.jsx)(t.em,{children:"aDate"})," : date ) : integer"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"}}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"aDate"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(t.td,{children:"Date for which to return the year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Result"}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsxs)(t.td,{children:["Number indicating the year of ",(0,s.jsx)(t.em,{children:"aDate"})]})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"yearOf"})," command returns the year of ",(0,s.jsx)(t.em,{children:"aDate"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-qs",children:" var vResult : integer\n vResult = yearOf(!12/25/92!) // vResult gets 1992\n vResult = yearOf(!12/25/1992!) // vResult gets 1992\n vResult = yearOf(!12/25/1892!) // vResult gets 1892\n vResult = yearOf(!12/25/2092!) // vResult gets 2092\n vResult = yearOf(currentDate) // vResult gets year of current date\n\n"})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/language/commands/dayOf",children:(0,s.jsx)(t.code,{children:"dayOf"})}),(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.a,{href:"/docs/language/commands/monthOf",children:(0,s.jsx)(t.code,{children:"monthOf"})})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var r=n(67294);let s={},a=r.createContext(s);function l(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);