"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["70218"],{20918:function(e,t,n){n.r(t),n.d(t,{metadata:()=>d,contentTitle:()=>o,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>r});var d=JSON.parse('{"id":"language/commands/addToDate","title":"addToDate","description":"addToDate ( aDate integer , months integer) : date","source":"@site/docs/language/commands/addToDate.md","sourceDirName":"language/commands","slug":"/language/commands/addToDate","permalink":"/docs/next/language/commands/addToDate","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2Fcommands%2FaddToDate.md%20(current)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"current","frontMatter":{"id":"addToDate","title":"addToDate"},"sidebar":"Develop","previous":{"title":"abs","permalink":"/docs/next/language/commands/abs"},"next":{"title":"arctan","permalink":"/docs/next/language/commands/arctan"}}'),a=n("85893"),s=n("50065");let r={id:"addToDate",title:"addToDate"},o=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}];function c(e){let t={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"addToDate"})," ( ",(0,a.jsx)(t.em,{children:"aDate"})," : date , ",(0,a.jsx)(t.em,{children:"years"})," : integer , ",(0,a.jsx)(t.em,{children:"months"})," : integer , ",(0,a.jsx)(t.em,{children:"days"})," : integer) : date"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{style:{textAlign:"center"}}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"aDate"}),(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,a.jsx)(t.td,{children:"Date to which to add days, months, and years"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"years"}),(0,a.jsx)(t.td,{children:"integer"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,a.jsx)(t.td,{children:"Number of years to add to the date"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"months"}),(0,a.jsx)(t.td,{children:"integer"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,a.jsx)(t.td,{children:"Number of months to add to the date"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"days"}),(0,a.jsx)(t.td,{children:"integer"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,a.jsx)(t.td,{children:"Number of days to add to the date"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Result"}),(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2190"}),(0,a.jsx)(t.td,{children:"Resulting date"})]})]})]}),"\n",(0,a.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"addToDate"})," command adds ",(0,a.jsx)(t.em,{children:"years"}),", ",(0,a.jsx)(t.em,{children:"months"}),", and ",(0,a.jsx)(t.em,{children:"days"})," to the date you pass in ",(0,a.jsx)(t.em,{children:"aDate"}),", then returns the result."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"addToDate"})," allows you to quickly add months and years without having to deal with the number of days per month or leap years (as you would when using the + date operator)."]}),"\n",(0,a.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-qs",children:" var vdInOneYear, vdNextMonth, vdTomorrow : date\n\n  // This line calculates the date in one year, same day\n vdInOneYear = addToDate(currentDate,1,0,0)\n\n  // This line calculates the date next month, same day\n vdNextMonth = addToDate(currentDate,0,1,0)\n\n  // This line does the same thing as vdTomorrow = currentDate+1\n vdTomorrow = addToDate(currentDate,0,0,1)\n\n"})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var d=n(67294);let a={},s=d.createContext(a);function r(e){let t=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);