"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["41400"],{86984:function(e,t,s){s.r(t),s.d(t,{metadata:()=>d,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>i});var d=JSON.parse('{"id":"language/basics/lang-date","title":"Date","description":"A date type attribute, variable or expression can be in the range of 1/1/100 to 12/31/32,767.","source":"@site/versioned_docs/version-1.0.0/language/basics/lang-date.md","sourceDirName":"language/basics","slug":"/language/basics/lang-date","permalink":"/docs/language/basics/lang-date","draft":false,"unlisted":false,"editUrl":"https://github.com/docQodly/docs/edit/main/versioned_docs/version-1.0.0/language/basics/lang-date.md","tags":[],"version":"1.0.0","frontMatter":{"id":"lang-date","title":"Date"},"sidebar":"Develop","previous":{"title":"Collection","permalink":"/docs/language/basics/lang-collection"},"next":{"title":"Null and Undefined","permalink":"/docs/language/basics/lang-null-undefined"}}'),n=s("85893"),r=s("50065");let i={id:"lang-date",title:"Date"},l=void 0,a={},c=[{value:"Date literals",id:"date-literals",level:2},{value:"Date operators",id:"date-operators",level:2}];function o(e){let t={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.strong,{children:"date"})," type attribute, variable or expression can be in the range of 1/1/100 to 12/31/32,767."]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"In Qodly, a date can be stored in two data types:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["a ",(0,n.jsx)(t.strong,{children:"date type"}),", expressed in the ",(0,n.jsx)(t.code,{children:"yyyy-mm-dd"})," format, for example '2023-12-05'"]}),"\n",(0,n.jsxs)(t.li,{children:["an ",(0,n.jsx)(t.strong,{children:"ISO date format string"}),", expressed in the following format: ",(0,n.jsx)(t.code,{children:"yyyy-mm-ddThh:mm:ss.sssZ"}),' (e.g., "2023-12-05T23:00:00.000Z" for december 5, 2023 in the Central European Timezone). ',(0,n.jsx)(t.code,{children:"sss"})," represents the milliseconds and can be between 0 to 999."]}),"\n"]}),(0,n.jsxs)(t.p,{children:["You can select the data type for a Date attribute in your model. This page describes the handling of the ",(0,n.jsx)(t.strong,{children:"date type"}),"."]})]}),"\n",(0,n.jsx)(t.h2,{id:"date-literals",children:"Date literals"}),"\n",(0,n.jsx)(t.p,{children:"A date literal constant is enclosed by exclamation marks (!\u2026!). A date must be structured using the ISO format (!YYYY-MM-DD!). Here are some examples of date constants:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-qs",children:"!1976-01-01!\n!2004-09-29!\n!2023-12-31!\n"})}),"\n",(0,n.jsxs)(t.p,{children:["A null date is specified by ",(0,n.jsx)(t.em,{children:"!00-00-00!"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Qodly accepts two-digit years to be entered. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30."})}),"\n",(0,n.jsx)(t.h2,{id:"date-operators",children:"Date operators"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operation"}),(0,n.jsx)(t.th,{children:"Syntax"}),(0,n.jsx)(t.th,{children:"Returns"}),(0,n.jsx)(t.th,{children:"Expression"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Date difference"}),(0,n.jsx)(t.td,{children:"Date \u2013 Date"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"!2023-01-20! - !2023-01-01!"}),(0,n.jsx)(t.td,{children:"19"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Day addition"}),(0,n.jsx)(t.td,{children:"Date + Number"}),(0,n.jsx)(t.td,{children:"Date"}),(0,n.jsx)(t.td,{children:"!2023-01-20! + 9"}),(0,n.jsx)(t.td,{children:"!2023-01-29!"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Day subtraction"}),(0,n.jsx)(t.td,{children:"Date \u2013 Number"}),(0,n.jsx)(t.td,{children:"Date"}),(0,n.jsx)(t.td,{children:"!2023-01-20! - 9"}),(0,n.jsx)(t.td,{children:"!2023-01-11!"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Equality"}),(0,n.jsx)(t.td,{children:"Date  ==  Date"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"!2023-01-01!  ==  !2023-01-01!"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"!2023-01-20!  ==  !2023-01-01!"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Inequality"}),(0,n.jsx)(t.td,{children:"Date  !=  Date"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"!2023-01-20!  !=  !2023-01-01!"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"!2023-01-20!  !=  !2023-01-20!"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Greater than"}),(0,n.jsx)(t.td,{children:"Date >; Date"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"!2023-01-20! > !2023-01-01!"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"!2023-01-20! > !2023-01-20!"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Less than"}),(0,n.jsx)(t.td,{children:"Date < Date"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"!2023-01-01! < !2023-01-20!"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"!2023-01-20! < !2023-01-20!"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Greater than or equal to"}),(0,n.jsx)(t.td,{children:"Date >;=  Date"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"!2023-01-20! >;= !2023-01-01!"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"!2023-01-01!>;= !2023-01-20!"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Less than or equal to"}),(0,n.jsx)(t.td,{children:"Date <= Date"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"!2023-01-01!  <= !2023-01-20!"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"!2023-01-20!  <= !2023-01-01!"}),(0,n.jsx)(t.td,{children:"false"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return l},a:function(){return i}});var d=s(67294);let n={},r=d.createContext(n);function i(e){let t=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);