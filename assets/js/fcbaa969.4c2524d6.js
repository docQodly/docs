"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[1483],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>h});var i=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,i,r=function(e,t){if(null==e)return{};var s,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)s=n[i],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)s=n[i],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var s=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(s),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||n;return s?i.createElement(h,a(a({ref:t},p),{},{components:s})):i.createElement(h,a({ref:t},p))}));function h(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=s.length,a=new Array(n);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var d=2;d<n;d++)a[d]=s[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,s)}u.displayName="MDXCreateElement"},14302:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var i=s(87462),r=(s(67294),s(3905));const n={id:"dataClassPermissions",title:"DataClass Permissions"},a=void 0,o={unversionedId:"studio/roles/dataClassPermissions",id:"studio/roles/dataClassPermissions",title:"DataClass Permissions",description:"With the presence of the Guest privilege, users with no role affected access non-restricted resources such as package details, related information, and destinations.",source:"@site/docs/studio/roles/dataClassPermissions.md",sourceDirName:"studio/roles",slug:"/studio/roles/dataClassPermissions",permalink:"/docs/studio/roles/dataClassPermissions",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/studio/roles/dataClassPermissions.md",tags:[],version:"current",frontMatter:{id:"dataClassPermissions",title:"DataClass Permissions"},sidebar:"Studio",previous:{title:"Datastore Permissions",permalink:"/docs/studio/roles/datastorePermissions"},next:{title:"Attributes Permissions",permalink:"/docs/studio/roles/attributesPermissions"}},l={},d=[{value:"Understanding DataClass Permissions",id:"understanding-dataclass-permissions",level:2},{value:"Implementing DataClass Permissions",id:"implementing-dataclass-permissions",level:2},{value:"Inherited Permissions",id:"inherited-permissions",level:3},{value:"Setting DataClass Permissions",id:"setting-dataclass-permissions",level:3},{value:"Hierarchy and Overrides",id:"hierarchy-and-overrides",level:3},{value:"Model Editor Approach",id:"model-editor-approach",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"With the presence of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege, users with no role affected access non-restricted resources such as package details, related information, and destinations. "),(0,r.kt)("p",null,"However, refining this privilege's scope involves Dataclasses permissions. Agents whose sessions haven't been verified should encounter an error, prompting them to contact their admin to finalize the setup of their account before proceeding with client bookings."),(0,r.kt)("h2",{id:"understanding-dataclass-permissions"},"Understanding DataClass Permissions"),(0,r.kt)("p",null,"DataClass Permissions empower you with the ability to finely shape and control access to specific DataClasses within your application's Datastore. These permissions dictate what actions and interactions users are allowed to perform on individual DataClasses."),(0,r.kt)("h2",{id:"implementing-dataclass-permissions"},"Implementing DataClass Permissions"),(0,r.kt)("p",null,"Building upon the previous transition from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Restricted")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege with read access extension, careful data exposure management is imperative. Achieved through precise DataClass permissions, this involves excluding the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege from specific Dataclasses, effectively blocking access to designated resources."),(0,r.kt)("h3",{id:"inherited-permissions"},"Inherited Permissions"),(0,r.kt)("p",null,"Permissions of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege are automatically inherited across various privileges. This parallels the behavior observed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Restricted")," privilege, where the capability of reading from the Datastore is evident."),(0,r.kt)("img",{alt:"explorer",src:s(99494).Z,style:{borderRadius:"6px"}}),(0,r.kt)("h3",{id:"setting-dataclass-permissions"},"Setting DataClass Permissions"),(0,r.kt)("p",null,"DataClass-level permissions possess the power to supersede those set at the DataStore level. Consider the example of sensitive Dataclasses such as Employee, efficiently controlled through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Restricted")," privilege. "),(0,r.kt)("p",null,"Setting permissions for the Employee resource, added in a manner akin to the intuitive ",(0,r.kt)("inlineCode",{parentName:"p"},"ds")," resource addition from the dropdown list ensures restricted access unless the pertinent role asserts control. Here, the inheritance of privileges set at the DataStore level ( ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," ) is overridden by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Restricted")," privilege."),(0,r.kt)("img",{alt:"explorer",src:s(50313).Z,style:{borderRadius:"6px"}}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Strategically setting DataClass permissions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Restricted")," privilege grants the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," privilege the freedom to explore the Datastore while restricting access to confidential resources. This controlled approach ensures open discovery while maintaining data security.")),(0,r.kt)("p",null,"A similar approach applies to confidential Reporting documents and Bookings. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ManageReports")," privilege is granted total permissions for the Reporting resource, and ",(0,r.kt)("inlineCode",{parentName:"p"},"ManageBookings")," similarly gains full control over the Booking resource. "),(0,r.kt)("h3",{id:"hierarchy-and-overrides"},"Hierarchy and Overrides"),(0,r.kt)("p",null,"While higher-level permissions cascade down to more specific levels, they remain adaptable. These permissions can be overridden or supplemented as required, affording a dynamic approach to access control."),(0,r.kt)("h2",{id:"model-editor-approach"},"Model Editor Approach"),(0,r.kt)("p",null,'Using the Model Editor, effortlessly configure Dataclass permissions by linking privileges to permissions like "create", "read", "update", and "delete". This interface empowers control over entity operations within specific Dataclasses. Permissions management for Dataclasses becomes straightforward through the Model Editor\'s streamlined dropdown selection, allowing easy allocation of desired privileges.'),(0,r.kt)("img",{alt:"explorer",src:s(50644).Z,style:{borderRadius:"6px"}}))}c.isMDXComponent=!0},50644:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/ModelEditor_dataclassPermissions-9a2b51c1a5a98dfee60ed94f67b5f0b2.png"},50313:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/implementingDataClassPermissions-44917328bad0349ac34d9e0c11f61510.png"},99494:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/inheritedPermissions-8749b68a45ff5bb3627063458ff84b8f.png"}}]);