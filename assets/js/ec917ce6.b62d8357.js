"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["43375"],{66415:function(e,t,s){s.r(t),s.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>o,assets:()=>h,toc:()=>c,frontMatter:()=>d});var i=JSON.parse('{"id":"language/basics/lang-number","title":"Numeric","description":"Numeric is a generic term that stands for:","source":"@site/versioned_docs/version-1.0.0/language/basics/lang-number.md","sourceDirName":"language/basics","slug":"/language/basics/lang-number","permalink":"/docs/language/basics/lang-number","draft":false,"unlisted":false,"editUrl":"https://github.com/docQodly/docs/edit/main/versioned_docs/version-1.0.0/language/basics/lang-number.md","tags":[],"version":"1.0.0","frontMatter":{"id":"lang-number","title":"Numeric"},"sidebar":"Develop","previous":{"title":"Null and Undefined","permalink":"/docs/language/basics/lang-null-undefined"},"next":{"title":"Object","permalink":"/docs/language/basics/lang-object"}}'),n=s("85893"),r=s("50065");let d={id:"lang-number",title:"Numeric"},l=void 0,h={},c=[{value:"Numeric literals",id:"numeric-literals",level:2},{value:"Numeric operators",id:"numeric-operators",level:2},{value:"Precedence",id:"precedence",level:3},{value:"Bitwise operators",id:"bitwise-operators",level:2},{value:"Notes",id:"notes",level:4},{value:"Examples",id:"examples",level:3}];function a(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Numeric is a generic term that stands for:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Number attribute, variable or expression. The range for the number data type is \xb11.7e\xb1308 (13 significant digits)."}),"\n",(0,n.jsx)(t.li,{children:"Integer attribute, variable or expression. The range for the integer data type (4-byte Long integer) is -2^31..(2^31)-1."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can assign any numeric data type to another; Qodly does the conversion, truncating or rounding if necessary. However, when values are out of range, the conversion will not return a valid value. You can mix numeric data types in expressions."}),"\n",(0,n.jsx)(t.h2,{id:"numeric-literals",children:"Numeric literals"}),"\n",(0,n.jsx)(t.p,{children:"A numeric literal constant is written as a real number with a period (.) as decimal separator. Here are some examples of numeric constants:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-qs",children:"27\n123.76\n0.0076\n"})}),"\n",(0,n.jsx)(t.p,{children:"Negative numbers are specified with the minus sign (-). For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-qs",children:"-27\n-123.76\n-0.0076\n"})}),"\n",(0,n.jsx)(t.h2,{id:"numeric-operators",children:"Numeric operators"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operation"}),(0,n.jsx)(t.th,{children:"Syntax"}),(0,n.jsx)(t.th,{children:"Returns"}),(0,n.jsx)(t.th,{children:"Expression"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Addition"}),(0,n.jsx)(t.td,{children:"Number + Number"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"2 + 3"}),(0,n.jsx)(t.td,{children:"5"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Subtraction"}),(0,n.jsx)(t.td,{children:"Number - Number"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"3 \u2013 2"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Multiplication"}),(0,n.jsx)(t.td,{children:"Number * Number"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"5 * 2"}),(0,n.jsx)(t.td,{children:"10"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Division"}),(0,n.jsx)(t.td,{children:"Number / Number"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"5 / 2"}),(0,n.jsx)(t.td,{children:"2.5"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Longint division"}),(0,n.jsx)(t.td,{children:"Number \\ Number"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"5 \\ 2"}),(0,n.jsx)(t.td,{children:"2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Modulo"}),(0,n.jsx)(t.td,{children:"Number % Number"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"5 % 2"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Exponentiation"}),(0,n.jsx)(t.td,{children:"Number ^ Number"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"2 ^ 3"}),(0,n.jsx)(t.td,{children:"8"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Equality"}),(0,n.jsx)(t.td,{children:"Number  ==  Number"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"10  ==  10"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"10  ==  11"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Inequality"}),(0,n.jsx)(t.td,{children:"Number  !=  Number"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"10  !=  11"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"10  !=  10"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Greater than"}),(0,n.jsx)(t.td,{children:"Number >; Number"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"11 >; 10"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"10 >; 11"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Less than"}),(0,n.jsx)(t.td,{children:"Number < Number"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"10 < 11"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"11 < 10"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Greater than or equal to"}),(0,n.jsx)(t.td,{children:"Number >;=  Number"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"11 >;=  10"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"10 >;=  11"}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Less than or equal to"}),(0,n.jsx)(t.td,{children:"Number <= Number"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"10 <= 11"}),(0,n.jsx)(t.td,{children:"true"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"11 <= 10"}),(0,n.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The modulo operator % divides the first number by the second number and returns a whole number remainder. Here are some examples:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"10 % 2 returns 0 because 10 is evenly divided by 2."}),"\n",(0,n.jsx)(t.li,{children:"10 % 3 returns 1 because the remainder is 1."}),"\n",(0,n.jsx)(t.li,{children:"10.5 % 2 returns 0 because the remainder is not a whole number."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The modulo operator ",(0,n.jsx)(t.code,{children:"%"})," returns significant values with numbers that are in the integer range (from minus 2^31 to 2^31 minus one). To calculate the modulo with numbers outside of this range, use the ",(0,n.jsx)(t.a,{href:"/docs/language/commands/mod",children:(0,n.jsx)(t.code,{children:"mod"})})," command."]}),"\n",(0,n.jsxs)(t.li,{children:["The longint division operator ",(0,n.jsx)(t.code,{children:"\\"})," returns significant values with integer numbers only."]}),"\n"]})}),"\n",(0,n.jsx)(t.h3,{id:"precedence",children:"Precedence"}),"\n",(0,n.jsx)(t.p,{children:"The order in which an expression is evaluated is called precedence. Qodly has a strict left-to-right precedence, in which algebraic order is not observed. For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-qs",children:" 3+4*5\n"})}),"\n",(0,n.jsx)(t.p,{children:"returns 35, because the expression is evaluated as 3 + 4, yielding 7, which is then multiplied by 5, with the final result of 35."}),"\n",(0,n.jsx)(t.p,{children:"To override the left-to-right precedence, you MUST use parentheses. For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-qs",children:" 3+(4*5)\n"})}),"\n",(0,n.jsx)(t.p,{children:"returns 23 because the expression (4 * 5) is evaluated first, because of the parentheses. The result is 20, which is then added to 3 for the final result of 23."}),"\n",(0,n.jsx)(t.p,{children:"Parentheses can be nested inside other sets of parentheses. Be sure that each left parenthesis has a matching right parenthesis to ensure proper evaluation of expressions. Lack of, or incorrect use of parentheses can cause unexpected results or invalid expressions. Furthermore, if you intend to compile your applications, you must have matching parentheses\u2014the compiler detects a missing parenthesis as a syntax error."}),"\n",(0,n.jsx)(t.h2,{id:"bitwise-operators",children:"Bitwise operators"}),"\n",(0,n.jsxs)(t.p,{children:["The bitwise operators operates on ",(0,n.jsx)(t.strong,{children:"integer"})," expressions or values. If you pass a real value to a bitwise operator, Qodly evaluates the value as a integer value before calculating the expression that uses the bitwise operator."]}),"\n",(0,n.jsx)(t.p,{children:"While using the bitwise operators, you must think about an integer value as an array of 32 bits. The bits are numbered from 0 to 31, from right to left."}),"\n",(0,n.jsxs)(t.p,{children:["Because each bit can equal 0 or 1, you can also think about an integer value as a value where you can store 32 boolean values. A bit equal to 1 means ",(0,n.jsx)(t.strong,{children:"true"})," and a bit equal to 0 means ",(0,n.jsx)(t.strong,{children:"false"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"An expression that uses a bitwise operator returns an integer value, except for the Bit Test operator, where the expression returns a boolean value. The following table lists the bitwise operators and their syntax:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operation"}),(0,n.jsx)(t.th,{children:"Operator"}),(0,n.jsx)(t.th,{children:"Syntax"}),(0,n.jsx)(t.th,{children:"Returns"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise AND"}),(0,n.jsx)(t.td,{children:"&"}),(0,n.jsx)(t.td,{children:"integer & integer"}),(0,n.jsx)(t.td,{children:"integer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise OR (inclusive)"}),(0,n.jsx)(t.td,{children:"|"}),(0,n.jsx)(t.td,{children:"integer | integer"}),(0,n.jsx)(t.td,{children:"integer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise OR (exclusive)"}),(0,n.jsx)(t.td,{children:"^|"}),(0,n.jsx)(t.td,{children:"integer ^| integer"}),(0,n.jsx)(t.td,{children:"integer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Left Bit Shift"}),(0,n.jsx)(t.td,{children:"<<"}),(0,n.jsx)(t.td,{children:"integer << integer"}),(0,n.jsx)(t.td,{children:"integer (see note 1)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Right Bit Shift"}),(0,n.jsx)(t.td,{children:">>"}),(0,n.jsx)(t.td,{children:"integer >;>; integer"}),(0,n.jsx)(t.td,{children:"integer (see note 1)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bit Set"}),(0,n.jsx)(t.td,{children:"?+"}),(0,n.jsx)(t.td,{children:"integer ?+ integer"}),(0,n.jsx)(t.td,{children:"integer (see note 2)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bit Clear"}),(0,n.jsx)(t.td,{children:"?-"}),(0,n.jsx)(t.td,{children:"integer ?- integer"}),(0,n.jsx)(t.td,{children:"integer (see note 2)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bit Test"}),(0,n.jsx)(t.td,{children:"??"}),(0,n.jsx)(t.td,{children:"integer ?? integer"}),(0,n.jsx)(t.td,{children:"boolean (see note 2)"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["For the ",(0,n.jsx)(t.code,{children:"Left Bit Shift"})," and ",(0,n.jsx)(t.code,{children:"Right Bit Shift"})," operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Therefore, this second operand should be between 0 and 31. Note however, that shifting by 0 returns an unchanged value and shifting by more than 31 bits returns 0x00000000 because all the bits are lost. If you pass another value as second operand, the result is non-significant."]}),"\n",(0,n.jsxs)(t.li,{children:["For the ",(0,n.jsx)(t.code,{children:"Bit Set"}),", ",(0,n.jsx)(t.code,{children:"Bit Clear"})," and ",(0,n.jsx)(t.code,{children:"Bit Test"})," operations , the second operand indicates the number of the bit on which to act. Therefore, this second operand must be between 0 and 31; otherwise, the result of the expression is non-significant."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The following table lists the bitwise operators and their effects:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operation"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise AND"}),(0,n.jsxs)(t.td,{children:["Each resulting bit is the logical AND of the bits in the two operands. Here is the logical AND table:",(0,n.jsx)("li",{children:"1 & 1 \u2192 1"}),(0,n.jsx)("li",{children:"0 & 1 \u2192 0"}),(0,n.jsx)("li",{children:"1 & 0 \u2192 0"}),(0,n.jsx)("li",{children:"0 & 0 \u2192 0"}),"In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise OR (inclusive)"}),(0,n.jsxs)(t.td,{children:["Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:",(0,n.jsx)("li",{children:"1 | 1 \u2192 1"}),(0,n.jsx)("li",{children:"0 | 1 \u2192 1"}),(0,n.jsx)("li",{children:"1 | 0 \u2192 1"}),(0,n.jsx)("li",{children:"0 | 0 \u2192 0"}),"In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise OR (exclusive)"}),(0,n.jsxs)(t.td,{children:["Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:",(0,n.jsx)("li",{children:"1 ^| 1 \u2192 0"}),(0,n.jsx)("li",{children:"0 ^| 1 \u2192 1"}),(0,n.jsx)("li",{children:"1 ^| 0 \u2192 1"}),(0,n.jsx)("li",{children:"0 ^| 0 \u2192 0"}),"In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Left Bit Shift"}),(0,n.jsxs)(t.td,{children:["The resulting value is set to the first operand value, then the resulting bits are shifted to the left by the number of positions indicated by the second operand. The bits on the left are lost and the new bits on the right are set to 0. ",(0,n.jsx)(t.strong,{children:"Note:"})," Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Right Bit Shift"}),(0,n.jsxs)(t.td,{children:["The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.",(0,n.jsx)(t.strong,{children:"Note:"})," Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bit Set"}),(0,n.jsx)(t.td,{children:"The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. The other bits are left unchanged."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bit Clear"}),(0,n.jsx)(t.td,{children:"The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. The other bits are left unchanged."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bit Test"}),(0,n.jsx)(t.td,{children:"Returns true if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Returns false if, in the first operand, the bit whose number is indicated by the second operand is equal to 0."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operation"}),(0,n.jsx)(t.th,{children:"Example"}),(0,n.jsx)(t.th,{children:"Result"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise AND"}),(0,n.jsx)(t.td,{children:"0x0000FFFF & 0xFF00FF00"}),(0,n.jsx)(t.td,{children:"0x0000FF00"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise OR (inclusive)"}),(0,n.jsx)(t.td,{children:"0x0000FFFF | 0xFF00FF00"}),(0,n.jsx)(t.td,{children:"0xFF00FFFF"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bitwise OR (exclusive)"}),(0,n.jsx)(t.td,{children:"0x0000FFFF ^| 0xFF00FF00"}),(0,n.jsx)(t.td,{children:"0xFF0000FF"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Left Bit Shift"}),(0,n.jsx)(t.td,{children:"0x0000FFFF << 8"}),(0,n.jsx)(t.td,{children:"0x00FFFF00"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Right Bit Shift"}),(0,n.jsx)(t.td,{children:"0x0000FFFF >;>; 8"}),(0,n.jsx)(t.td,{children:"0x000000FF"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bit Set"}),(0,n.jsx)(t.td,{children:"0x00000000 ?+ 16"}),(0,n.jsx)(t.td,{children:"0x00010000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bit Clear"}),(0,n.jsx)(t.td,{children:"0x00010000 ?- 16"}),(0,n.jsx)(t.td,{children:"0x00000000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bit Test"}),(0,n.jsx)(t.td,{children:"0x00010000 ?? 16"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return l},a:function(){return d}});var i=s(67294);let n={},r=i.createContext(n);function d(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);