"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[8193],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var A=r.createContext({}),s=function(e){var t=r.useContext(A),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(A.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,A=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),c=s(a),u=o,h=c["".concat(A,".").concat(u)]||c[u]||p[u]||i;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=u;var n={};for(var A in t)hasOwnProperty.call(t,A)&&(n[A]=t[A]);n.originalType=e,n[c]="string"==typeof e?e:o,l[1]=n;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3824:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>n,toc:()=>s});var r=a(7462),o=(a(7294),a(3905));const i={id:"model-editor-interface",title:"Model Editor Interface"},l=void 0,n={unversionedId:"studio/model/model-editor-interface",id:"studio/model/model-editor-interface",title:"Model Editor Interface",description:"The Data Model Editor allows you to define the Model",source:"@site/docs/studio/model/model-editor-interface.md",sourceDirName:"studio/model",slug:"/studio/model/model-editor-interface",permalink:"/docs/studio/model/model-editor-interface",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/model/model-editor-interface.md",tags:[],version:"current",frontMatter:{id:"model-editor-interface",title:"Model Editor Interface"},sidebar:"Studio",previous:{title:"Qodly Models",permalink:"/docs/studio/model/model-overview"},next:{title:"Datastore Classes",permalink:"/docs/studio/model/datastore-classes"}},A={},s=[{value:"Workspace",id:"workspace",level:3},{value:"Toolbar",id:"toolbar",level:3},{value:"Miniature Overview Area",id:"miniature-overview-area",level:3},{value:"Datastore Classes Area",id:"datastore-classes-area",level:3},{value:"Properties Area",id:"properties-area",level:3},{value:"Datastore Class Properties Area",id:"datastore-class-properties-area",level:4},{value:"Attribute Properties Area",id:"attribute-properties-area",level:4},{value:"Datastore Class Functions Properties Area",id:"datastore-class-functions-properties-area",level:4}],d={toc:s};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Data Model Editor allows you to define the Model\n( database structure) for your application."),(0,o.kt)("p",null,'A model is a description of how data will be accessed and stored into\nstructures called "datastore classes." In each datastore class, you\ncreate attributes that store, calculate data, or refer to data in other\ndatastore classes (relation attributes). As well as functions to\ninteract with the data in your model.'),(0,o.kt)("p",null,"To open your project\\'s active model you double click on  ",(0,o.kt)("img",{alt:"alt-text",src:a(7537).Z,width:"53",height:"23"})," in your project's sidebar menu."),(0,o.kt)("p",null,"The Data Model Editor is made up of the following areas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Workspace"),(0,o.kt)("li",{parentName:"ul"},"Toolbar"),(0,o.kt)("li",{parentName:"ul"},"Miniature Overview Area"),(0,o.kt)("li",{parentName:"ul"},"Datastore Classes Area"),(0,o.kt)("li",{parentName:"ul"},"Properties Area (coming soon)")),(0,o.kt)("h3",{id:"workspace"},"Workspace"),(0,o.kt)("p",null,"In the workspace is where you create a datastore model for your Qodly\nproject. A datastore model is made up of one or more datastore classes\ncontaining attributes, you can also create relation attributes , which\nare links between datastore classes."),(0,o.kt)("p",null,"Below is an example datastore model for a simple structure of employees\nand companies:"),(0,o.kt)("p",null,"*","*","screenshot of the datastore classes","*","*"),(0,o.kt)("p",null,"You can identify the currently selected datastore class by its\nhighlighted border in the workspace. In our example, the Company\ndatastore class is selected."),(0,o.kt)("p",null,"You can move a datastore class in the Workspace by a select and drag\naction."),(0,o.kt)("h3",{id:"toolbar"},"Toolbar"),(0,o.kt)("p",null,"The toolbar bordering the top of your workspace contains 3 actions:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On the left side:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fit view : By clicking on the ",(0,o.kt)("img",{alt:"alt-text",src:a(4037).Z,width:"23",height:"23"})," icon you will get a fitted view of your entire datastore classes Model in the Workspace area.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"alt-text",src:a(4037).Z,width:"23",height:"23"})," reload model :"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On the right side:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Zoom feature ",(0,o.kt)("img",{alt:"alt-text",src:a(4464).Z,width:"94",height:"37"})," : Controls the percentage of zoom in your workspace area, press either the + (Plus sign) or - (Minus sign) to make the Data model in your workspace larger or smaller.")),(0,o.kt)("h3",{id:"miniature-overview-area"},"Miniature Overview Area"),(0,o.kt)("p",null,"The Miniature Area allows you to view an overview of your model at a\nsmaller scale. This feature is especially useful when you have a large\nnumber of datastore classes and you want to quickly visualize them."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(7257).Z,width:"194",height:"138"})),(0,o.kt)("h3",{id:""}),(0,o.kt)("h3",{id:"datastore-classes-area"},"Datastore Classes Area"),(0,o.kt)("p",null,"All the datastore classes in your datastore model are listed in this\narea:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:a(8152).Z,width:"252",height:"87"})),(0,o.kt)("p",null,"You can select the datastore class in the workspace by clicking on it in\nthe list."),(0,o.kt)("p",null,"From this area, you can execute any of the following actions for a\nspecific datastore class:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"alt-text",src:a(4037).Z,width:"23",height:"23"})," fit to view : to show a fitted view of the selected datastore class in your workspace area.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"alt-text",src:a(5207).Z,width:"24",height:"22"})," import from CSV : Allows you to import data from a CSV file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can delete the datastore class completely by clicking on the ",(0,o.kt)("img",{alt:"alt-text",src:a(9605).Z,width:"25",height:"22"})," icon."))),(0,o.kt)("h3",{id:"properties-area"},"Properties Area"),(0,o.kt)("p",null,"The model properties area is coming soon."),(0,o.kt)("h4",{id:"datastore-class-properties-area"},"Datastore Class Properties Area"),(0,o.kt)("p",null,"For a datastore class, the Properties area contains ",(0,o.kt)("strong",{parentName:"p"},"Panel color"),",\n",(0,o.kt)("strong",{parentName:"p"},"Primary key"),", ",(0,o.kt)("strong",{parentName:"p"},"Class")," ",(0,o.kt)("strong",{parentName:"p"},"name")," and ",(0,o.kt)("strong",{parentName:"p"},"Section name"),", ",(0,o.kt)("strong",{parentName:"p"},"Scope"),",\n",(0,o.kt)("strong",{parentName:"p"},"Page size"),", a ",(0,o.kt)("strong",{parentName:"p"},"Records definitely deleted")," and ",(0,o.kt)("strong",{parentName:"p"},"Include in log\nfile")," check cases and an area ",(0,o.kt)("strong",{parentName:"p"},"Comment")," for writing comments."),(0,o.kt)("h4",{id:"attribute-properties-area"},"Attribute Properties Area"),(0,o.kt)("p",null,"For an attribute, the properties available differ depending on the\nattribute type (test this theory)."),(0,o.kt)("h4",{id:"datastore-class-functions-properties-area"},"Datastore Class Functions Properties Area"),(0,o.kt)("p",null,"The Properties tab is available for datastore class functions."))}c.isMDXComponent=!0},8152:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},9605:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAYAAAA1vze2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADFSURBVEhLYwwODv7PQGPABKVpCkYtIQnQxRKCqUuTnR1Me/PxMRhycoLZ579/Z9j66ROYff3nTzCND+C1BGRBjbg4lIcdrP3wgWEd1EJcgKBPgvj5oSzsYN3Hj1AWbkDQkiIREQZjLi4oDxWc/faNoe/NGygPNyAY8V/+43YDPjlkQNCSz3//QlmYAJ8cMiBsyb9/UBYmwCeHDAha8gmPa/HJIQPCluBxLT45ZEDQkse/f0NZmACfHDIYrU9IAqOWkAAYGABMzkb5ORlGhQAAAABJRU5ErkJggg=="},4037:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAEASURBVEhL7ZQhDoNAEEV/W4nGgwU0CsMRCAloNI4DkB4Cj0ejMKBRGDQYFAaDppkJadKw3bSiognPzGey+5md2ezF9/0NP+K6x59wmgv5X3PpVTRNE0EQsM7zHOM4QtM0RFHEuaIo0Pc9axFSczKmzSID+nEYhkjTdM8ckbZlnmes68ratm3EccyRoPwwDKzfITWv6/qlFU3TcKRvylOrZHw10G3bnif5hJthGPddH3BdlyNVSS1yHAdVVfEMqHrP89B1Ha8RIa1cVVUoisK6bVtkWcaRoLyu66zfIa2coBtBJ6DhLcvCFSdJAsuyUJYlpmnaVx45n1whp7mQfzUHHhOnZgSerrg4AAAAAElFTkSuQmCC"},5207:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADnSURBVEhL7ZQxCoQwEEW/W2ptrbbqbewVrK3t9TKCdxDsbfUAHsBS2yyTHdEibsIuWyz4YDAzgfz8maCVJInAD3nw92fcAlr+X8DomTqOA8/zEMcxV4BxHDHPM9Z15YoaI4G6rhGGIWcHdHiWZZyp0baoKAo0TYNhGLhysG0br665dEC3FkLA933ZorZtMU0T777aZts2+r7nipq3DizLkrETBAGqqpJRliXyPOeda7QzoBZ1XYdlWeC6LqIokk7IATlUte7MV0OmGaRpypkaIwGCbk6xQy7OM7nCWOBT7n+RlltAA/AEvXxUWPpdUUQAAAAASUVORK5CYII="},7257:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAACKCAYAAAD46pUwAAACF0lEQVR4nO3dwUrDQBRA0auj4v/lO/N3oiKkuhJEq9hUbYnnLKebocltU0hfLu7uH56Df+7y1BuAcyAEqK7eL4wxTrEP+BPLsuxd/xDC9RiN4YuC7VmW3achOOMhIUAlBKiEAJUQoBICVEKASghQCQEqIUAlBKiEAJUQoBICVEKASghQCQEqIUAlBKiEAJUQoBICVEKASghQCQEqIUAlBKiEAJUQoBICVEKASghQ7XlQyHfN8/yT+9i8aZpOvQW+cHAIrwE4sIeZ59l7dsZWXRo5oGyN3wiQEKASAlRCgEoIUAkBKiFAJQSohACVEKASAlRCgEoIUAkBKiFAJQSohACVEKASAlRCgEoIUAkBKiFAJQSohACVEKASAlRHTMPm95g0vt7aubxCOFMGLR/umA8Ql0aQEKASAlRCgEoIUAkBKiFAJQSohACVEKASAlRCgEoIUAkBqhW3YU/T5H55NmfV/xHcK8/WuDSChACVEKASAlRCgEoIUAkBKiFAJQSohACVEKASAlRCgEoIUAkBKiFAJQSohACVEKASAlRCgEoIUAkBKiFAJQQ24tjpixd39w/Pbxdub24aQx+nZqzmYb4zfXFZdj0+Pe19TQj8G1+F4IyHhACVEKASAlRCgEoIUAkBKiFAJQSohACVEKASAlRCgEoIUAkBKiFAJQSohACVEKASAlRCgEoIUAkBKiFAJQSohABVvQDxxTq9UHoC+QAAAABJRU5ErkJggg=="},7537:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAXCAYAAACrggdNAAACtElEQVRYhe2Wz2uScRzHX24+onOb2xTc07DDxtjBg+FlQUMXKEHHLt7Eyw52iq7FDqP+gCAK8hLeBtExig0SoYMEy2ARIhMq5qNkmk33w2exDo+/HqfbYgub7AUPPM/78/08z+f9fJ/Ph0fjdrsP6DH6ul3Av+DC1HmhJ01pAbLXH1K2XVMFjN/eYX17rytFnRYtQH9JQnxzRxUoX57rSkFngWKqUsKQjasCu+NXulLQWaAF+K0bZMfqUAV+6wbr5wVH4JBJfSbO6MfnbW4ZJOf3QWweS6JJngmRmgVreAHjicsLkrslYnq5iNBpyUyI9Mgyl2KrdakPYOTzC0DD3ug0e6PTgKaqKVTGFK35ULQOSEmwLyHXBQ9Fuxl96cRuToUWQFvKoC1lgNpnd4BstCIbrQAIxS+MrT1TJRYcgSNuu4Zhy8u2BUw5wOJC3lzBOOFsLJkJkZqtvZhkYwctS6RvutgFkJIMI9VTyt4IWVE5H279EppQjXRDNo4+E6d1V/6aIRHdh3XkKQ8A8pSIsJFsWhAkZ5ewheeZDM8z+Uqi6A0CHoouEVNN/wq/ml5ClmVFDz9AsIcod3i8Fo7vmf3BcQqOAPuGMSVpJ1/f2Y7kogguH2Wm2ZmQMMVguxaziFS2pEaf5CR0QyIyICMxUNMTawzbla2RR8wg+kj5fdVgHrPlCFONnmnQ3DNDG68BKNvm6GszKduzysDmbYpeJ3xaQMDTZLhhQlCZTCLgpNKsV1OEnz/QJ56oBgIA5g6mdPnkoUn2/epdpBuPVFp/ScLy/vEJDFULia2A34lhpTXyFEt0ibQ/ovQOSazhRQBMURdpf4QsQCmPnnUlJbGAyRsh5b+vXJei2DpMRY3b7T4oOAKHTLXTzgv16dc6zY7tmf8YLTR6plfoyb/0C1PnhQtT54U/QlDmILEuZcUAAAAASUVORK5CYII="},4464:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAAlCAYAAADLN15sAAACSUlEQVRoge2av2/aQBTHv67K4IlWQs5WYEWYsc5CWVhh8oq7sHc68Tegm7yzNFlvMn9Bw1KvNkumwpaiDDB58OAOIT/UGA4TizPt+0hIvuen5/OHp7MtndbtdhMQJ+ed6gn8r5B4RZB4RZB4RZB4RZB4RbyXJZRKJei6Dk3TTjGfsydJEkRRhDiO9+ZJO56kZ0PTNOi6Ls2Tiifp2TnEGa3xiiDxiiDxiiDxiiDxGbAsC5Zl5VKrkOKdsYAYO0/jNptACPHw28bTYhhwCCEwYe2HcYeBPx7ngGEYMAwjl1rSD6hT44wFzLmHX83n2IwPMdsetxkH6wA8Jfa7CXi2DTCGNmaofwY8Pvv7EoWgcB1/NbLBrnefr1c+HhTDgMO84yim9iM73jRN1Gq1vTmLxQJhGB41qZ10GL7gBsMfO2KfACEE1r6HiyYQ3k8gxAesfRfDIzq/1WqhWq0+jRuNxquc5XKJIAgy1y5cx+/GAR8A30dXu2PXDLZtY3hnwpj/xEXlFq7t4rZyifxW+nw4quPDMMy/m/figAsToc1eLB1pMQBogzVX8EbA5fhtVw2CILWbp9Pp2wqjgA/XNJxxH3UAdSHQB7D2XdxUXseGfAYM+jDm2z/j/iu+CQtr3wVXeQMpaLJdBuVy+VRzKTy9Xg/AYR2/2Wz2nj+Lji8Kq9Uqt1okPgO+7+dW64zeav4tSLwiSLwiSLwipOKThPa0ZuUQZ1LxURSR/Aw8bu+QIX2djONYukeEyA6t8Yog8Yog8Yog8Yog8Yr4A90lvT8gj4IPAAAAAElFTkSuQmCC"}}]);