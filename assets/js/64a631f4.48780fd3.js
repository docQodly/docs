"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["37314"],{90027:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"language/commands/asserted","title":"asserted","description":"asserted( boolExpression booleanasserted( boolExpression string ) : boolean","source":"@site/versioned_docs/version-1.0.0/language/commands/asserted.md","sourceDirName":"language/commands","slug":"/language/commands/asserted","permalink":"/docs/language/commands/asserted","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2Fcommands%2Fasserted.md%20(1.0.0)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"1.0.0","frontMatter":{"id":"asserted","title":"asserted"},"sidebar":"Develop","previous":{"title":"assert","permalink":"/docs/language/commands/assert"},"next":{"title":"base64Decode","permalink":"/docs/language/commands/base64Decode"}}'),r=n("85893"),o=n("50065");let a={id:"asserted",title:"asserted"},i=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let s={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"asserted"}),"*( ",(0,r.jsx)(s.em,{children:"boolExpression"})," : boolean ) : boolean",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"asserted"}),"( ",(0,r.jsx)(s.em,{children:"boolExpression"})," : boolean, ",(0,r.jsx)(s.em,{children:"msg"})," : string ) : boolean"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"}}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"boolExpression"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(s.td,{children:"Boolean expression"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"msg"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(s.td,{children:"Text of error message"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"result"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2190"}),(0,r.jsx)(s.td,{children:"Result of evaluation of boolExpression"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"asserted"})," command returns the result of the evaluation of the ",(0,r.jsx)(s.em,{children:"boolExpression"})," parameter. If ",(0,r.jsx)(s.em,{children:"boolExpression"})," is ",(0,r.jsx)(s.code,{children:"false"})," and if assertions ",(0,r.jsx)(s.a,{href:"/docs/language/commands/setAssertEnabled",children:"are enabled"}),", the error -10518 is generated, exactly as for the ",(0,r.jsx)(s.a,{href:"/docs/language/commands/assert",children:(0,r.jsx)(s.code,{children:"assert"})})," command. If the assertions are disabled, ",(0,r.jsx)(s.code,{children:"asserted"})," returns the result of the expression that was passed without triggering an error."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"asserted"})," has an operation similar to that of the ",(0,r.jsx)(s.a,{href:"/docs/language/commands/assert",children:(0,r.jsx)(s.code,{children:"assert"})})," command, with one difference in that it returns a value which is the result of the evaluation of the ",(0,r.jsx)(s.em,{children:"boolExpression"})," parameter. It therefore allows the use of an assertion during the evaluation of a condition (see the example). For more information about the operation of assertions and the parameters of this command, please refer to the description of the ",(0,r.jsx)(s.a,{href:"/docs/language/commands/assert",children:(0,r.jsx)(s.code,{children:"assert"})})," command."]}),"\n",(0,r.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:"Insertion of an assertion in the evaluation of an expression:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-qs",children:" var employee : cs.EmployeeEntity\n var status : Object\n employee = ds.Employee.get(717)\n status = employee.lock()\n if(asserted(not(status.success)))\n  // triggers error -10518 if entity cannot be locked\n end\n"})}),"\n",(0,r.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/language/commands/assert",children:(0,r.jsx)(s.code,{children:"assert"})}),(0,r.jsx)("br",{}),(0,r.jsx)(s.a,{href:"/docs/language/commands/onErrCall",children:(0,r.jsx)(s.code,{children:".onErrCall()"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.a,{href:"/docs/language/commands/setAssertEnabled",children:(0,r.jsx)(s.code,{children:"setAssertEnabled"})})]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return a}});var t=n(67294);let r={},o=t.createContext(r);function a(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);