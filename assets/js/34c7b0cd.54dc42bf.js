"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["17673"],{1063:function(e,s,t){t.r(s),t.d(s,{metadata:()=>n,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>i});var n=JSON.parse('{"id":"language/commands/generatePasswordHash","title":"generatePasswordHash","description":"generatePasswordHash ( password object ) : string","source":"@site/docs/language/commands/generatePasswordHash.md","sourceDirName":"language/commands","slug":"/language/commands/generatePasswordHash","permalink":"/docs/next/language/commands/generatePasswordHash","draft":false,"unlisted":false,"editUrl":"https://github.com/docQodly/docs/edit/main/docs/language/commands/generatePasswordHash.md","tags":[],"version":"current","frontMatter":{"id":"generatePasswordHash","title":"generatePasswordHash"},"sidebar":"Develop","previous":{"title":"generateDigest","permalink":"/docs/next/language/commands/generateDigest"},"next":{"title":"generateUUID","permalink":"/docs/next/language/commands/generateUUID"}}'),r=t("85893"),a=t("50065");let i={id:"generatePasswordHash",title:"generatePasswordHash"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Error management",id:"error-management",level:5},{value:"About bcrypt",id:"about-bcrypt",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let s={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"generatePasswordHash"})," ( ",(0,r.jsx)(s.em,{children:"password"})," : string , ",(0,r.jsx)(s.em,{children:"options"})," : object ) : string"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"}}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"password"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(s.td,{children:"The user's password. Only the first 72 characters are used"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"options"}),(0,r.jsx)(s.td,{children:"object"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2192"}),(0,r.jsx)(s.td,{children:"An object containing options"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Result"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2190"}),(0,r.jsx)(s.td,{children:"Returns the hashed password"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"generatePasswordHash"})," function  returns a secure password hash generated by a cryptographic hash algorithm."]}),"\n",(0,r.jsxs)(s.p,{children:["Pass a string value in the ",(0,r.jsx)(s.em,{children:"password"})," parameter. The ",(0,r.jsx)(s.code,{children:"generatePasswordHash"})," returns a hashed string for the password. Multiple passes of the same password will result in different hashed strings."]}),"\n",(0,r.jsxs)(s.p,{children:["In the ",(0,r.jsx)(s.em,{children:"options"})," object, pass the properties to use when generating the password hash. The available values are listed in the table below:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Value Type"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Default Value"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"algorithm"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:'algorithm to be used. Currently only "bcrypt" (case sensitive) is supported.'}),(0,r.jsx)(s.td,{children:"bcrypt"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"cost"}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsx)(s.td,{children:"speed to be used. The supported values for bcrypt are between 4 and 31."}),(0,r.jsx)(s.td,{children:"10"})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["If either value in the ",(0,r.jsx)(s.em,{children:"options"})," object is invalid, an error message and an empty string will be returned."]})}),"\n",(0,r.jsx)(s.h5,{id:"error-management",children:"Error management"}),"\n",(0,r.jsxs)(s.p,{children:["The following errors may be returned. You can review an error with the ",(0,r.jsx)(s.code,{children:"onErrCall"})," command."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Number"}),(0,r.jsx)(s.th,{children:"Message"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"850"}),(0,r.jsx)(s.td,{children:"Password-hash: Unsupported algorithm."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"852"}),(0,r.jsx)(s.td,{children:"Password-hash: Unavailable bcrypt cost parameter, please provide a value between 4 and 31."})]})]})]}),"\n",(0,r.jsx)(s.h5,{id:"about-bcrypt",children:"About bcrypt"}),"\n",(0,r.jsx)(s.p,{children:"bcrypt is a password hashing function based on the Blowfish cipher. In addition to incorporating a salt to protect against rainbow table attacks, it's an adaptive function in which the iteration count can be increased to make it slower, so it remains resistant to brute-force attacks even with increasing computation power because it takes longer and becomes too time consuming and expensive."}),"\n",(0,r.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:"This example generates a password hash using bcrypt with a cost factor 4."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-qs",children:' declare(password : string , userId : integer)\n var hash : string\n var options : object\n var user : cs.UserEntity\n\n options = newObject("algorithm","bcrypt","cost",4)\n\n hash = generatePasswordHash(password,options)\n user = ds.User.get(userId)\n user.hash = hash\n user.save()\n\n'})}),"\n",(0,r.jsx)(s.admonition,{title:"Reminder",type:"caution",children:(0,r.jsxs)(s.p,{children:["Multiple passes of the same password will result in different hashed strings. This is a standard behavior for algorithms such as bcrypt, since the best practice is to create a new, random salt for every hash. Refer to the ",(0,r.jsx)(s.a,{href:"/docs/next/language/commands/verifyPasswordHash",children:(0,r.jsx)(s.code,{children:"verifyPasswordHash"})})," description for an example of how to check the passwords"]})}),"\n",(0,r.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/next/language/commands/generateDigest",children:(0,r.jsx)(s.code,{children:"generateDigest"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.a,{href:"/docs/next/language/commands/verifyPasswordHash",children:(0,r.jsx)(s.code,{children:"verifyPasswordHash"})})]})]})}function h(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,s,t){t.d(s,{Z:function(){return d},a:function(){return i}});var n=t(67294);let r={},a=n.createContext(r);function i(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);