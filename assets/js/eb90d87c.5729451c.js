"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["17712"],{82411:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>i,toc:()=>d,frontMatter:()=>c});var r=JSON.parse('{"id":"language/commands/lowercase","title":"lowercase","description":"lowercase ( aString string","source":"@site/docs/language/commands/lowercase.md","sourceDirName":"language/commands","slug":"/language/commands/lowercase","permalink":"/docs/next/language/commands/lowercase","draft":false,"unlisted":false,"editUrl":"https://github.com/docQodly/docs/edit/main/docs/language/commands/lowercase.md","tags":[],"version":"current","frontMatter":{"id":"lowercase","title":"lowercase"},"sidebar":"Develop","previous":{"title":"logEvent","permalink":"/docs/next/language/commands/logEvent"},"next":{"title":"mailConvertFromMIME","permalink":"/docs/next/language/commands/mailConvertFromMIME"}}'),s=n("85893"),a=n("50065");let c={id:"lowercase",title:"lowercase"},l=void 0,i={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"lowercase"})," ( ",(0,s.jsx)(t.em,{children:"aString"})," : string {, *} ) : string"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"}}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"aString"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(t.td,{children:"String to convert to lowercase"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2192"}),(0,s.jsx)(t.td,{children:"If passed: keep accents"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Result"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2190"}),(0,s.jsx)(t.td,{children:"String in lowercase"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"lowercase"})," takes ",(0,s.jsx)(t.em,{children:"aString"})," and returns the string with all alphabetic characters in lowercase."]}),"\n",(0,s.jsxs)(t.p,{children:["The optional ",(0,s.jsx)(t.code,{children:"*"})," parameter, if passed, indicates that any accented characters present in ",(0,s.jsx)(t.em,{children:"aString"})," must be returned as accented lowercase characters. By default, when this parameter is omitted, accented characters \u201Close\u201D their accents after the conversion is carried out."]}),"\n",(0,s.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.p,{children:'The following project method capitalizes the string or text received as parameter. For instance, Caps ("john") would return "John".'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-qs",children:" declare (myText : string) -> myCapText : string\n myCapText = lowercase(myText)\n if(length(myCapText)>0)\n    myCapText[[1]] == uppercase(myCapText[[1]])\n end\n\n"})}),"\n",(0,s.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(t.p,{children:["This example compares the results obtained according to whether or not the ",(0,s.jsx)(t.code,{children:"*"})," parameter has been passed:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-qs",children:' var thestring : string\n thestring = lowercase("D\xc9J\xc0 VU") // thestring is "deja vu"\n thestring = lowercase("D\xc9J\xc0 VU",*) // thestring is "d\xe9j\xe0 vu"\n\n'})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/next/language/commands/uppercase",children:(0,s.jsx)(t.code,{children:"uppercase"})})})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return c}});var r=n(67294);let s={},a=r.createContext(s);function c(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);