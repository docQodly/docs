"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["18930"],{89939:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"language/basics/lang-text","title":"String","description":"A string (or text) value is an attribute, variable, or expression that may contain from 0 to 2 GB of text.","source":"@site/docs/language/basics/lang-text.md","sourceDirName":"language/basics","slug":"/language/basics/lang-text","permalink":"/docs/next/language/basics/lang-text","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20language%2Fbasics%2Flang-text.md%20(current)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"current","frontMatter":{"id":"lang-text","title":"String"},"sidebar":"Develop","previous":{"title":"Time","permalink":"/docs/next/language/basics/lang-time"},"next":{"title":"Variant","permalink":"/docs/next/language/basics/lang-variant"}}'),a=n("85893"),t=n("50065");let i={id:"lang-text",title:"String"},c=void 0,d={},l=[{value:"Literals",id:"literals",level:2},{value:"Escape sequences",id:"escape-sequences",level:2},{value:"String operators",id:"string-operators",level:2},{value:"String comparisons",id:"string-comparisons",level:2},{value:"Wilcard character (@)",id:"wilcard-character-",level:3},{value:"Keywords",id:"keywords",level:3},{value:"String functions",id:"string-functions",level:2},{value:"Character Reference Symbols",id:"character-reference-symbols",level:2},{value:"Example",id:"example",level:3}];function o(e){let r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"A string (or text) value is an attribute, variable, or expression that may contain from 0 to 2 GB of text."}),"\n",(0,a.jsx)(r.h2,{id:"literals",children:"Literals"}),"\n",(0,a.jsx)(r.p,{children:'A string literal is enclosed in double, straight quotation marks ("..."). Here are some examples of string literals:'}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'"Add Profile"\n"No entities found."\n"Invoice"\n'})}),"\n",(0,a.jsx)(r.p,{children:'An empty string is specified by two quotation marks with nothing between them ("").'}),"\n",(0,a.jsx)(r.h2,{id:"escape-sequences",children:"Escape sequences"}),"\n",(0,a.jsx)(r.p,{children:'The QodlyScript language allows you to use escape sequences (also called escape characters). An escape sequence is a sequence of characters that can be used to replace a "special" character.'}),"\n",(0,a.jsxs)(r.p,{children:["The sequence consists of a backslash ",(0,a.jsx)(r.code,{children:"\\"}),", followed by a character. For instance, ",(0,a.jsx)(r.code,{children:"\\t"})," is an escape sequence for the ",(0,a.jsx)(r.strong,{children:"Tab"})," character. Escape sequences facilitate the entry of special characters: the previous example (",(0,a.jsx)(r.code,{children:"\\t"}),") replaces the code entry ",(0,a.jsx)(r.code,{children:"character(Tab)"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"In QodlyScript, the following escape sequences can be used:"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Escape sequence"}),(0,a.jsx)(r.th,{children:"Character replaced"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"\\n"})}),(0,a.jsx)(r.td,{children:"LF (Line feed)"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"\\t"})}),(0,a.jsx)(r.td,{children:"HT (Tab)"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"\\r"})}),(0,a.jsx)(r.td,{children:"CR (Carriage return)"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"\\\\"})}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.code,{children:"\\"})," (Backslash)"]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:'\\"'})}),(0,a.jsx)(r.td,{children:'" (Quotation marks)'})]})]})]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"It is possible to use either upper or lower case in escape sequences."}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["In the following example, the ",(0,a.jsx)(r.strong,{children:"Carriage return"})," character (escape sequence ",(0,a.jsx)(r.code,{children:"\\r"}),") is inserted in a statement in order to obtain a message on two lines:"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:'myDoc.setMessage("The operation has been completed successfully.\\rYou may now disconnect.")'})}),"\n",(0,a.jsx)(r.h2,{id:"string-operators",children:"String operators"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Operation"}),(0,a.jsx)(r.th,{children:"Syntax"}),(0,a.jsx)(r.th,{children:"Returns"}),(0,a.jsx)(r.th,{children:"Expression"}),(0,a.jsx)(r.th,{children:"Value"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Concatenation"}),(0,a.jsx)(r.td,{children:"String + String"}),(0,a.jsx)(r.td,{children:"String"}),(0,a.jsx)(r.td,{children:'"abc" + "def"'}),(0,a.jsx)(r.td,{children:'"abcdef"'})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Repetition"}),(0,a.jsx)(r.td,{children:"String * Number"}),(0,a.jsx)(r.td,{children:"String"}),(0,a.jsx)(r.td,{children:'"ab" * 3'}),(0,a.jsx)(r.td,{children:'"ababab"'})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Equality"}),(0,a.jsx)(r.td,{children:"String  ==  String"}),(0,a.jsx)(r.td,{children:"Boolean"}),(0,a.jsx)(r.td,{children:'"abc"  ==  "abc"'}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{children:'"abc"  ==  "abd"'}),(0,a.jsx)(r.td,{children:"False"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Inequality"}),(0,a.jsx)(r.td,{children:"String  !=  String"}),(0,a.jsx)(r.td,{children:"Boolean"}),(0,a.jsx)(r.td,{children:'"abc"  !=  "abd"'}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{children:'"abc"  !=  "abc"'}),(0,a.jsx)(r.td,{children:"False"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Greater than"}),(0,a.jsx)(r.td,{children:"String >; String"}),(0,a.jsx)(r.td,{children:"Boolean"}),(0,a.jsx)(r.td,{children:'"abd" > "abc"'}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{children:'"abc" > "abc"'}),(0,a.jsx)(r.td,{children:"False"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Less than"}),(0,a.jsx)(r.td,{children:"String < String"}),(0,a.jsx)(r.td,{children:"Boolean"}),(0,a.jsx)(r.td,{children:'"abc" < "abd"'}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{children:'"abc" < "abc"'}),(0,a.jsx)(r.td,{children:"False"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Greater than or equal to"}),(0,a.jsx)(r.td,{children:"String >;=  String"}),(0,a.jsx)(r.td,{children:"Boolean"}),(0,a.jsx)(r.td,{children:'"abd" >;=  "abc"'}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{children:'"abc" >;=  "abd"'}),(0,a.jsx)(r.td,{children:"False"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Less than or equal to"}),(0,a.jsx)(r.td,{children:"String <= String"}),(0,a.jsx)(r.td,{children:"Boolean"}),(0,a.jsx)(r.td,{children:'"abc" <= "abd"'}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{children:'"abd" <= "abc"'}),(0,a.jsx)(r.td,{children:"False"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Contains keyword"}),(0,a.jsx)(r.td,{children:"String % String"}),(0,a.jsx)(r.td,{children:"Boolean"}),(0,a.jsx)(r.td,{children:'"Alpha Bravo" % "Bravo"'}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{children:'"Alpha Bravo" % "ravo"'}),(0,a.jsx)(r.td,{children:"False"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"string-comparisons",children:"String comparisons"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Strings are compared on a character-by-character basis (except in the case of searching by ",(0,a.jsx)(r.a,{href:"#keywords",children:"keywords"}),", see below)."]}),"\n",(0,a.jsxs)(r.li,{children:["When strings are compared, the case of the characters is ignored; thus, ",(0,a.jsx)(r.code,{children:'"a" == "A"'})," returns ",(0,a.jsx)(r.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["When strings are compared, diacritical characters are ignored. For example, the following expressions return ",(0,a.jsx)(r.code,{children:"true"}),":"]}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'     "n" == "\xf1"\n     "n" == "\xd1"\n     "A" == "\xe5"\n      // and so on\n'})}),"\n",(0,a.jsxs)(r.p,{children:["To test if the case of two characters is different or to take diacritical characters into account, compare their character codes. For example, the following expression returns ",(0,a.jsx)(r.code,{children:"false"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'characterCode("A") == characterCode("a") // false because 65 is not equal to 97\n'})}),"\n",(0,a.jsx)(r.h3,{id:"wilcard-character-",children:"Wilcard character (@)"}),"\n",(0,a.jsxs)(r.p,{children:["The QodlyScript supports ",(0,a.jsx)(r.strong,{children:"@"})," as a wildcard character. This character can be used in any string comparison to match any number of characters. For example, the following expression is ",(0,a.jsx)(r.code,{children:"true"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'	"abcdefghij" == "abc@" //true\n'})}),"\n",(0,a.jsxs)(r.p,{children:["The wildcard character must be used within the second operand (the string on the right side) in order to match any number of characters. The following expression is ",(0,a.jsx)(r.code,{children:"false"}),", because the ",(0,a.jsx)(r.code,{children:"@"})," is considered only as one character in the first operand:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'    "abc@" == "abcdefghij" //false\n'})}),"\n",(0,a.jsxs)(r.p,{children:['The wildcard means "one or more characters or nothing". The following expressions are ',(0,a.jsx)(r.code,{children:"true"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'     "abcdefghij" == "abcdefghij@" //true\n     "abcdefghij" == "@abcdefghij" //true\n     "abcdefghij" == "abcd@efghij" //true\n     "abcdefghij" == "@abcdefghij@"//true\n     "abcdefghij" == "@abcde@fghij@"//true\n'})}),"\n",(0,a.jsxs)(r.p,{children:["On the other hand, whatever the case, a string comparison with two consecutive wildcards will always return ",(0,a.jsx)(r.code,{children:"false"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'	"abcdefghij" == "abc@@fg" //false\n'})}),"\n",(0,a.jsxs)(r.p,{children:["When the comparison operator is or contains a ",(0,a.jsx)(r.code,{children:"<"})," or ",(0,a.jsx)(r.code,{children:">"})," symbol, only comparison with a single wildcard located at the end of the operand is supported:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'     "abcd"  <= "abc@" // Valid comparison\n     "abcd"  <= "abc@ef" //Not a valid comparison\n'})}),"\n",(0,a.jsxs)(r.p,{children:["If you want to execute comparisons or queries using ",(0,a.jsx)(r.code,{children:"@"})," as a character (and not as a wildcard), you need to use the ",(0,a.jsx)(r.code,{children:"characterCode(At sign)"})," instruction. Imagine, for example, that you want to know if a string ends with the ",(0,a.jsx)(r.code,{children:"@"})," character. The following expression (if ",(0,a.jsx)(r.code,{children:"vsValue"})," is not empty) is always ",(0,a.jsx)(r.code,{children:"true"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'(vsValue[[length(vsValue)]] == "@") //always true\n'})}),"\n",(0,a.jsx)(r.p,{children:"The following expression will be evaluated correctly:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:"(characterCode(vsValue[[length(vsValue)]]) != 64)  \n"})}),"\n",(0,a.jsx)(r.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsxs)(r.p,{children:['Unlike other string comparisons, searching by keywords looks for "words" in "texts": words are considered both individually and as a whole. The ',(0,a.jsx)(r.strong,{children:"%"})," operator always returns ",(0,a.jsx)(r.code,{children:"false"}),' if the query concerns several words or only part of a word (for example, a syllable). The "words" are character strings surrounded by "separators", which are spaces, punctuation characters, and dashes. An apostrophe, like in "Today\'s", is usually considered as part of the word, but will be ignored in certain cases (see the rules below). Numbers can be searched for because they are evaluated as a whole (including decimal symbols). Other symbols (currency, temperature, and so on) will be ignored.']}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'     "Alpha Bravo Charlie"%"Bravo" // true\n     "Alpha Bravo Charlie"%"vo" // false\n     "Alpha Bravo Charlie"%"Alpha Bravo" // false\n     "Alpha,Bravo,Charlie"%"Alpha" // true\n     "Software and Computers"%"comput@" // true\n'})}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["QodlyScript uses the ICU library for comparing strings (using ",(0,a.jsx)(r.code,{children:"<>==  != "})," operators) and detecting keywords. For more information about the rules implemented, please refer to the following address: ",(0,a.jsx)(r.a,{href:"http://www.unicode.org/reports/tr29/#Word_Boundaries",children:"http://www.unicode.org/reports/tr29/#Word_Boundaries"}),"."]})}),"\n",(0,a.jsx)(r.h2,{id:"string-functions",children:"String functions"}),"\n",(0,a.jsxs)(r.p,{children:["QodlyScript provides several functions such as ",(0,a.jsx)(r.a,{href:"/docs/next/language/commands/replaceString",children:(0,a.jsx)(r.code,{children:"replaceString"})})," or ",(0,a.jsx)(r.a,{href:"/docs/next/language/commands/substring",children:(0,a.jsx)(r.code,{children:"substring"})})," to handle string values."]}),"\n",(0,a.jsx)(r.h2,{id:"character-reference-symbols",children:"Character Reference Symbols"}),"\n",(0,a.jsxs)(r.p,{children:["The character reference symbols: ",(0,a.jsx)(r.code,{children:"[[...]]"})]}),"\n",(0,a.jsx)(r.p,{children:"These symbols are used to refer to a single character within a string. This syntax allows you to individually address the characters of a text variable or attribute."}),"\n",(0,a.jsxs)(r.p,{children:["If the character reference symbols appear on the left side of the assignment operator (",(0,a.jsx)(r.code,{children:"="}),"), a character is assigned to the referenced position in the string. For example, the following line sets the first character of ",(0,a.jsx)(r.code,{children:"vsName"})," to uppercase:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'var vsName : string\nvsName = "hello"\nif(vsName != "")\n    vsName[[1]] = uppercase(vsName[[1]])\nend  \n//"Hello"\n'})}),"\n",(0,a.jsx)(r.p,{children:"Otherwise, if the character reference symbols appear within an expression, they return the character (to which they refer) as a 1-character string. For example:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'//The following example tests if the last character of vtText is an At sign "@"\n if(vtText != "")\n    if(characterCode(substring(vtText,length(vtText),1)) == At sign)\n  //...\n    end\n end\n'})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'  //Using the character reference syntax, you would write in a simpler manner:\n if(vtText != "")\n    if(characterCode(vtText[[length(vtText)]]) == At sign)\n  // ...\n    end\n end\n'})}),"\n",(0,a.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(r.p,{children:"The following method capitalizes the first character of each word of the text received as parameter and returns the resulting capitalized text:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'  //Capitalize_text ( Source text ) -> Capitalized text\n \n declare (source : string) -> capitalized : string\n var vlLen,vlChar : integer\n capitalized = source\n vlLen = length(capitalized)\n if(vlLen>0)\n    capitalized[[1]] = uppercase(capitalized[[1]])\n    for(vlChar,1,vlLen-1)\n       if(position(capitalized[[vlChar]]," !&()-{}:;<>?/,. = +*")>0)\n          capitalized[[vlChar+1]] = uppercase(capitalized[[vlChar+1]])\n       end\n    end\n end\n'})}),"\n",(0,a.jsx)(r.p,{children:"For example, the line:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-qs",children:'var cap : string\ncap = Capitalize_text("hello, my name is jane doe and i\'m running for president!")\n//cap: "Hello, My Name Is Jane Doe And I\'m Running For President!"\n'})})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var s=n(67294);let a={},t=s.createContext(a);function i(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);