"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["79528"],{89933:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"language/commands/dec","title":"dec","description":"dec ( number number","source":"@site/docs/language/commands/dec.md","sourceDirName":"language/commands","slug":"/language/commands/dec","permalink":"/docs/next/language/commands/dec","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2Fcommands%2Fdec.md%20(current)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"current","frontMatter":{"id":"dec","title":"dec"},"sidebar":"Develop","previous":{"title":"dayOf","permalink":"/docs/next/language/commands/dayOf"},"next":{"title":"delayProcess","permalink":"/docs/next/language/commands/delayProcess"}}'),r=t("85893"),l=t("50065");let a={id:"dec",title:"dec"},d=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"dec"})," ( ",(0,r.jsx)(n.em,{children:"number"})," : number ) : number"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(n.td,{children:"Number whose decimal portion is returned"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,r.jsx)(n.td,{children:"Decimal part of number"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"dec"})," returns the decimal (fractional) portion of ",(0,r.jsx)(n.em,{children:"number"}),". The value returned is always positive or zero."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following example takes a monetary value expressed as a number, and extracts the dollar part and the cents part. If ",(0,r.jsx)(n.em,{children:"vAmount"})," is 7.31, then ",(0,r.jsx)(n.em,{children:"vDollars"})," is set to 7 and ",(0,r.jsx)(n.em,{children:"vCents"})," is set to 31:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-qs",children:" var vDollars, vCents, vAmount : number\n vDollars = int(vAmount) //Get the dollars\n vCents = dec(vAmount)*100 // Get the fractional part\n\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/language/commands/int",children:(0,r.jsx)(n.code,{children:"int"})})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(67294);let r={},l=s.createContext(r);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);