"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["53795"],{16324:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"api/$binary","title":"$binary","description":"Functionality","source":"@site/docs/api/$binary.md","sourceDirName":"api","slug":"/api/$binary","permalink":"/docs/next/api/$binary","draft":false,"unlisted":false,"editUrl":"https://github.com/docQodly/docs/edit/main/docs/api/$binary.md","tags":[],"version":"current","frontMatter":{"id":"$binary","title":"$binary"},"sidebar":"API","previous":{"title":"$attributes","permalink":"/docs/next/api/$attributes"},"next":{"title":"$clean","permalink":"/docs/next/api/$clean"}}'),r=t("85893"),a=t("50065");let s={id:"$binary",title:"$binary"},d=void 0,o={},c=[{value:"Functionality",id:"functionality",level:2},{value:"Definition",id:"definition",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Mandatory Use of <code>$expand</code>",id:"mandatory-use-of-expand",level:3},{value:"Combining with Other Parameters",id:"combining-with-other-parameters",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Saving an Image BLOB",id:"saving-an-image-blob",level:3},{value:"Saving a PDF BLOB",id:"saving-a-pdf-blob",level:3},{value:"Best Practices",id:"best-practices",level:2}];function l(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"functionality",children:"Functionality"}),"\n",(0,r.jsx)(n.h3,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"$binary"})," endpoint enables you to save the BLOB data as a document. When making a request with ",(0,r.jsx)(n.code,{children:"$binary=true"}),", the BLOB data will be saved to disk. This is particularly useful for handling files such as images, PDFs, and other binary data."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To use ",(0,r.jsx)(n.code,{children:"$binary"}),", you must also include the ",(0,r.jsx)(n.code,{children:"$expand"})," parameter with the name of the BLOB attribute."]})}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /rest/{{dataClass}}(id)/{{blobAttributeName}}?$binary=true&$expand={{blobAttributeName}}\n"})}),"\n",(0,r.jsx)(n.p,{children:"When the request is made, the user will be prompted to choose a location on their disk to save the BLOB data."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"If viewed in a text editor or console, the response may appear as a long string of characters representing the binary data."})}),"\n",(0,r.jsxs)(n.h3,{id:"mandatory-use-of-expand",children:["Mandatory Use of ",(0,r.jsx)(n.code,{children:"$expand"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"$expand"})," parameter is mandatory when using ",(0,r.jsx)(n.code,{children:"$binary=true"}),". This ensures that the BLOB data is correctly expanded and retrieved from the specified attribute."]}),"\n",(0,r.jsx)(n.h2,{id:"combining-with-other-parameters",children:"Combining with Other Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["While ",(0,r.jsx)(n.code,{children:"$binary=true"})," is primarily used for saving BLOB data, it can be combined with other parameters to refine the request:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"$filter:"})," Ensure that the BLOB data is retrieved from a filtered set of records."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"$orderby:"})," Retrieve and save BLOB data from a sorted set of records."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsx)(n.h3,{id:"saving-an-image-blob",children:"Saving an Image BLOB"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request:"})}),"\n",(0,r.jsxs)(n.p,{children:["To save an image BLOB from the ",(0,r.jsx)(n.code,{children:"profilePicture"})," attribute of the ",(0,r.jsx)(n.code,{children:"User"})," dataclass with ID ",(0,r.jsx)(n.code,{children:"5"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /rest/User(5)/profilePicture?$binary=true&$expand=profilePicture\n"})}),"\n",(0,r.jsx)(n.h3,{id:"saving-a-pdf-blob",children:"Saving a PDF BLOB"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request:"})}),"\n",(0,r.jsxs)(n.p,{children:["To save a PDF BLOB from the ",(0,r.jsx)(n.code,{children:"contract"})," attribute of the ",(0,r.jsx)(n.code,{children:"Documents"})," dataclass with ID ",(0,r.jsx)(n.code,{children:"42"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /rest/Documents(42)/contract?$binary=true&$expand=contract\n"})}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["Always Include ",(0,r.jsx)(n.code,{children:"$expand"}),":"]})," Ensure that the ",(0,r.jsx)(n.code,{children:"$expand"})," parameter is included with the BLOB attribute name to retrieve the correct data."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Handle Errors Gracefully:"})," Implement proper error handling to manage cases where the BLOB data cannot be retrieved or saved."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Specify Only Necessary Data:"})," Limit the request to only the necessary BLOB data to optimize performance and reduce payload size."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var i=t(67294);let r={},a=i.createContext(r);function s(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);