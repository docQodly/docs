"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([["25187"],{36753:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"customComponent/api-reference/webform-editor/v0.2.24","title":"v0.2.24","description":"useNavigation","source":"@site/docs/customComponent/api-reference/webform-editor/v0.2.24.mdx","sourceDirName":"customComponent/api-reference/webform-editor","slug":"/customComponent/api-reference/webform-editor/v0.2.24","permalink":"/docs/next/customComponent/api-reference/webform-editor/v0.2.24","draft":false,"unlisted":false,"editUrl":"https://github.com/qodly/docs/issues/new?title=Comment%20on%20customComponent%2Fapi-reference%2Fwebform-editor%2Fv0.2.24.mdx%20(current)&body=Share%20any%20feedback%20about%20this%20page%20%E2%80%94%20report%20issues%2C%20suggest%20improvements%2C%20or%20tell%20us%20what%E2%80%99s%20helpful.%0A%0AIf%20it%E2%80%99s%20an%20issue%3A%0A-%20What%E2%80%99s%20the%20issue%3F%20(e.g.%2C%20typo%2C%20incorrect%20information%2C%20unclear%20explanation)%0A-%20Where%20is%20it%3F%20(e.g.%2C%20section%20name%2C%20specific%20paragraph%2C%20or%20line)%0A%0AThank%20you%20for%20helping%20us%20improve!%20%F0%9F%9A%80%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20","tags":[],"version":"current","frontMatter":{"id":"v0.2.24","title":"v0.2.24"},"sidebar":"ReactComponent","previous":{"title":"Project Structure","permalink":"/docs/next/customComponent/structure"},"next":{"title":"v0.2.16","permalink":"/docs/next/customComponent/api-reference/webform-editor/v0.2.16"}}'),r=t("85893"),i=t("50065");let d={id:"v0.2.24",title:"v0.2.24"},o="Hooks",a={},c=[{value:"useNavigation",id:"usenavigation",level:2},{value:"useStudioPanel",id:"usestudiopanel",level:2},{value:"<em>Returns</em>",id:"returns",level:3},{value:"useRenderer",id:"userenderer",level:2},{value:"<em>Parameters</em>",id:"parameters",level:3},{value:"<em>Returns</em>",id:"returns-1",level:3},{value:"useLayout",id:"uselayout",level:2},{value:"<em>Returns</em>",id:"returns-2",level:3},{value:"useDatasourceSub",id:"usedatasourcesub",level:2},{value:"useSources",id:"usesources",level:2},{value:"<em>Parameters</em>",id:"parameters-1",level:3},{value:"<em>Returns</em>",id:"returns-3",level:3},{value:"useEnhancedNode",id:"useenhancednode",level:2},{value:"<em>Parameters</em>",id:"parameters-2",level:3},{value:"<em>Returns</em>",id:"returns-4",level:3},{value:"useEnhancedEditor",id:"useenhancededitor",level:2},{value:"<em>Parameters</em>",id:"parameters-3",level:3},{value:"<em>Returns</em>",id:"returns-5",level:3},{value:"useDataLoader",id:"usedataloader",level:2},{value:"<em>Parameters</em>",id:"parameters-4",level:3},{value:"<em>Returns</em>",id:"returns-6",level:3},{value:"useEntity",id:"useentity",level:2},{value:"<em>Returns</em>",id:"returns-7",level:3}];function l(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{TabItem:t,Tabs:s}=n;return!t&&u("TabItem",!0),!s&&u("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"hooks",children:"Hooks"})}),"\n",(0,r.jsx)(n.h2,{id:"usenavigation",children:"useNavigation"}),"\n",(0,r.jsx)(n.p,{children:"Allows navigating when we are inside a Page loader, or it can be simply used to know if the component is inside a Page loader"}),"\n",(0,r.jsx)(n.h2,{id:"usestudiopanel",children:"useStudioPanel"}),"\n",(0,r.jsx)(n.p,{children:"A hook that provides state information and actions for managing Qodly Studio panel in a web form editor. Qodly Studio panel represents a dynamic side panel that displays information related to the selected element or component."}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:(0,r.jsx)(n.em,{children:"Returns"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"{StudioPanelReturnType}"})," -  An object containing the type, open state, current state, and actions to manipulate Qodly Studio panel."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"useStudioPanel"})," function returns an object with properties ",(0,r.jsx)(n.a,{href:"#type",children:(0,r.jsx)(n.code,{children:"type"})}),", ",(0,r.jsx)(n.a,{href:"#isopen",children:(0,r.jsx)(n.code,{children:"isOpen"})}),", ",(0,r.jsx)(n.a,{href:"#current-1",children:(0,r.jsx)(n.code,{children:"current"})}),", and ",(0,r.jsx)(n.code,{children:"actions"})," to manipulate Qodly Studio panel state."]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"actions"})," object includes methods for ",(0,r.jsx)(n.a,{href:"#setstate",children:"updating the state"}),", ",(0,r.jsx)(n.a,{href:"#setcurrent",children:"setting the current type and value"}),", ",(0,r.jsx)(n.a,{href:"#close",children:"closing"}),", ",(0,r.jsx)(n.a,{href:"#open",children:"opening"}),", and ",(0,r.jsx)(n.a,{href:"#openwithcurrent",children:"opening with a specific type and current value"}),"."]})]}),"\n",(0,r.jsx)(n.h2,{id:"userenderer",children:"useRenderer"}),"\n",(0,r.jsx)(n.p,{children:"A hook that facilitates rendering and event handling for a Craft.js node. It manages server-side references (ssRef) and auto-binds events to the corresponding DOM element."}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:(0,r.jsx)(n.em,{children:"Parameters"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"autoBindEvents"}),(0,r.jsx)(n.td,{children:"Specifies whether events should be auto-bound."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"omittedEvents"}),(0,r.jsx)(n.td,{children:"An array of event names to be omitted."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"returns-1",children:(0,r.jsx)(n.em,{children:"Returns"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"{[HTMLElement | null, { connectRenderer, eventsToHandle, emit} ] }"})," -  An object with methods for connecting, handling events, and emitting custom events."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"useRenderer"})," function returns a tuple with two elements:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HTMLElement | null"}),": The current DOM element or null. This represents the element to which the renderer is currently connected."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"An object providing methods to:"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"#connectrenderer",children:"Connect the renderer"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"eventsToHandle"}),": An object mapping event names to their corresponding handler functions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"emit"}),": A function to emit a custom event with the specified name and payload."]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"uselayout",children:"useLayout"}),"\n",(0,r.jsx)(n.p,{children:"A hook that provides methods and properties related to the layout mode of a Page."}),"\n",(0,r.jsx)(n.h3,{id:"returns-2",children:(0,r.jsx)(n.em,{children:"Returns"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"{LayoutReturnType}"})," - An object containing properties and methods related to the layout mode."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The useLayout function returns an object with properties ",(0,r.jsx)(n.a,{href:"#layout",children:(0,r.jsx)(n.code,{children:"layout"})})," and ",(0,r.jsx)(n.a,{href:"#isairymode",children:(0,r.jsx)(n.code,{children:"isAiryMode"})}),", along with methods ",(0,r.jsx)(n.code,{children:"getClassName"})," and ",(0,r.jsx)(n.code,{children:"toggle"}),"."]})}),"\n",(0,r.jsx)(s,{children:(0,r.jsxs)(t,{value:"Example 1",children:[(0,r.jsx)(n.p,{children:"Basic usage:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useLayout } from \"@ws-ui/webform-editor\";\n\nconst Example = () => {\nhighlight-next-line\nconst { layout, isAiryMode, getClassName } = useLayout();\n\nreturn (\n    <div>\n       <p>Current Layout: {layout}</p>\n       <p>Is Airy Mode: {isAiryMode ? 'Yes' : 'No'}</p>\n       <p>Modified Class Name: {getClassName('my-container')}</p>\n    </div>\n);\n}\n"})})]})}),"\n",(0,r.jsx)(n.h2,{id:"usedatasourcesub",children:"useDatasourceSub"}),"\n",(0,r.jsx)(n.p,{children:"A hook that subscribes to changes in datasources and performs replacements in the webform based on specified actions."}),"\n",(0,r.jsx)(s,{children:(0,r.jsx)(t,{value:"Example 1",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import useDatasourceSub from "@ws-ui/webform-editor"\n\nconst ExampleComponent = () => {\nhighlight-next-line\nuseDatasourceSub();\n};\n'})})})}),"\n",(0,r.jsx)(n.h2,{id:"usesources",children:"useSources"}),"\n",(0,r.jsx)(n.p,{children:"A hook that facilitates managing datasources and current elements associated with a web form. It provides methods for setting, fetching, and listening to changes in datasource values."}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:(0,r.jsx)(n.em,{children:"Parameters"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"UseSourcesOptions"})," An object allowing configuration of the hook behavior. Includes options such as ",(0,r.jsx)(n.a,{href:"#datasourcechange",children:(0,r.jsx)(n.code,{children:"datasourceChange"})}),", ",(0,r.jsx)(n.a,{href:"#currentelementchange",children:(0,r.jsx)(n.code,{children:"currentElementChange"})})," and ",(0,r.jsx)(n.a,{href:"#acceptiteratorsel",children:(0,r.jsx)(n.code,{children:"acceptIteratorSel"})}),"."]})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"returns-3",children:(0,r.jsx)(n.em,{children:"Returns"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"{UseSourcesReturnType}"})," - An object containing datasources, current elements, and methods for manipulating their values."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"useSources"})," function returns an object with the following structure:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sources"}),": An object containing ",(0,r.jsx)(n.code,{children:"datasource"})," and ",(0,r.jsx)(n.code,{children:"currentElement"}),", representing the current values of datasources and current elements."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"actions"}),": An object containing methods for manipulating datasource values, including ",(0,r.jsx)(n.a,{href:"#actionssetdatasourcevalue",children:(0,r.jsx)(n.code,{children:"setDatasourceValue"})}),", ",(0,r.jsx)(n.a,{href:"#actionssetcurrentelementvalue",children:(0,r.jsx)(n.code,{children:"setCurrentElementValue"})}),", ",(0,r.jsx)(n.a,{href:"#actionsfetchdatasourcevalue",children:(0,r.jsx)(n.code,{children:"fetchDatasourceValue"})}),", and ",(0,r.jsx)(n.a,{href:"#actionsfetchcurrentelementvalue",children:(0,r.jsx)(n.code,{children:"fetchCurrentElementValue"})}),"."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"useenhancednode",children:"useEnhancedNode"}),"\n",(0,r.jsx)(n.p,{children:"A hook that enhances the functionality of a Craft.js node, providing features for handling data transfer, managing datasources, and styling components."}),"\n",(0,r.jsx)(n.h3,{id:"parameters-2",children:(0,r.jsx)(n.em,{children:"Parameters"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"collector"}),(0,r.jsxs)(n.td,{children:["(optional) ",(0,r.jsx)(n.code,{children:"(args: Node) => K"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:["(optional) ",(0,r.jsx)(n.code,{children:"{ stopPropagation?: (data: IDataTransfer) => boolean; onDrop?: (e: any) => void; }"})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"returns-4",children:(0,r.jsx)(n.em,{children:"Returns"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"{UseEnhancedNodeReturnType}"})," - An object containing enhanced node information, connectors, and actions."]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)(t,{value:"Example 1",children:[(0,r.jsx)(n.p,{children:"Basic usage:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useEnhancedNode } from '@ws-ui/webform-editor';\nimport { useState, useEffect } from 'react';\n\nconst ExampleDelayedState = () => {\n  // highlight-next-line\n  const { actions, connectors, linkedNodes } = useEnhancedNode((node) => ({\n    nodes: node.data.nodes,\n    linkedNodes: node.data.linkedNodes,\n    node,\n  }));\n\n  const [delayedState, setDelayedState] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      // Fetch your data, e.g., from an API\n      const result = await fetch('https://api.example.com/data');\n      const data = await result.json();\n\n      setDelayedState(data);\n\n      actions.setDatasourceValue({ key: 'yourDatasourceKey', value: data });\n    };\n\n    fetchData();\n  }, [actions]);\n\n  return (\n    <div ref={connectors.connect}>\n\n      {delayedState && (\n        <div>\n          {JSON.stringify(delayedState)}\n        </div>\n      )}\n    </div>\n  );\n};\n"})})]}),(0,r.jsxs)(t,{value:"Example 2",children:[(0,r.jsx)(n.p,{children:"Handling drop events:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useEnhancedNode } from '@ws-ui/webform-editor';\n\nconst DraggableComponent = () => {\n  // highlight-next-line\n const { actions, connectors, linkedNodes } = useEnhancedNode((node) => ({\n   nodes: node.data.nodes,\n    linkedNodes: node.data.linkedNodes,\n    node,\n  }), {\n    onDrop: (event) => {\n      console.log('Dropped:', event);\n    },\n  });\n\n  return (\n    <div\n      ref={connectors.connect}\n      draggable\n      onDragStart={(event) => {\n        event.dataTransfer.setData('text', 'your data here');\n      }}\n    >\n\n      </div>\n      );\n    };\n"})})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"useEnhancedNode"})," function returns an object with the following structure:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"id"}),": The ID of the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"store"}),": The store associated with the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"connectors"})}),": Object containing connectors to interact with the Craft.js editor."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"...collected"}),": Additional data collected by the collector function."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"actions"}),": An object containing methods for manipulating node values, including ",(0,r.jsx)(n.code,{children:"setProp"}),", ",(0,r.jsx)(n.code,{children:"setStyle"}),", ",(0,r.jsx)(n.code,{children:"setDatasource"}),", and ",(0,r.jsx)(n.code,{children:"setIterator"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"useenhancededitor",children:"useEnhancedEditor"}),"\n",(0,r.jsx)(n.p,{children:"A Hook that provides methods and state information associated with the entire editor."}),"\n",(0,r.jsx)(n.h3,{id:"parameters-3",children:(0,r.jsx)(n.em,{children:"Parameters"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"collect"}),(0,r.jsx)(n.td,{children:"A function that collects relevant state information from the editor state. The component will re-render when the values returned by this function changes."})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"returns-5",children:(0,r.jsx)(n.em,{children:"Returns"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"{useEditorReturnType<S>}"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)(t,{value:"Example 1",children:[(0,r.jsx)(n.p,{children:"Basic usage:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useEnhancedEditor } from \"@ws-ui/webform-editor\";\n\nconst BasicUsageExample = () => {\n// highlight-next-line\nconst { isActive, enabled, canvas } = useEnhancedEditor();\n\n // Your component logic based on the editor state\n return (\n   <div>\n    <p>Is Active: {isActive ? 'Yes' : 'No'}</p>\n    <p>Editor Enabled: {enabled ? 'Yes' : 'No'}</p>\n    <p>Canvas Element: {canvas}</p>\n\n   // Additional logic and components based on the editor state\n    </div>\n    );\n  };\n"})})]}),(0,r.jsxs)(t,{value:"Example 2",children:[(0,r.jsx)(n.p,{children:"Basic usage with collector:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useEnhancedEditor } from \"@ws-ui/webform-editor\";\n\nconst CollectorUsageExample = () => {\n const collect = (state, query) => ({\n    enabled: state.options.enabled,\n   isActive: query.getEvent('selected').some(),\n });\n // highlight-next-line\n const { isActive, enabled, actions } = useEnhancedEditor(collect);\n\n // Your component logic based on the collected data\n return (\n   <div>\n     <p>Is Active: {isActive ? 'Yes' : 'No'}</p>\n     <p>Editor Enabled: {enabled ? 'Yes' : 'No'}</p>\n\n     // Additional logic and components based on the collected data\n    </div>\n   );\n  };\n"})})]}),(0,r.jsxs)(t,{value:"Example 3",children:[(0,r.jsx)(n.p,{children:"Usage with a custom collector function:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useEnhancedEditor } from \"@ws-ui/webform-editor\";\n\nconst CustomUsageExample = ({ id }) => {\n const { hidden, selected, hovered, topLevel } =\n  useEnhancedEditor((state, query) => {\n    const node = state.nodes[id];\n    const nodeActions = query.node(id);\n\n    return {\n      hidden: node?.data.hidden,\n      selected: state.events.selected.has(id),\n       topLevel: node ? nodeActions.isTopLevelCanvas() : false,\n      hovered: state.events.hovered.has(id),\n };\n});\n\n// Your component logic based on the useEnhancedEditor results\nreturn (\n <div>\n    <p>Is Hidden: {hidden ? 'Yes' : 'No'}</p>\n    <p>Is Selected: {selected ? 'Yes' : 'No'}</p>\n    <p>Is Top Level: {topLevel ? 'Yes' : 'No'}</p>\n    <p>Is Hovered: {hovered ? 'Yes' : 'No'}</p>\n</div>\n);\n };\n"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"usedataloader",children:"useDataLoader"}),"\n",(0,r.jsx)(n.p,{children:"Returns an easy to use API to fecth a page(s) of data"}),"\n",(0,r.jsx)(n.h3,{id:"parameters-4",children:(0,r.jsx)(n.em,{children:"Parameters"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"props"}),(0,r.jsx)(n.td,{children:"An object containing source i.e the datasource and the initial step"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"returns-6",children:(0,r.jsx)(n.em,{children:"Returns"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"{page: IPage; entities: datasources.IEntity[]; setStep: (step: IStep) => void; fetchIndex: (index: number) => void; }"})," - DataLoader return type"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)(t,{value:"Example 1",children:[(0,r.jsxs)(n.p,{children:["This example is using useSource and useDataloader to fetch simple list of people with ",(0,r.jsx)(n.code,{children:"firstName"})," and ",(0,r.jsx)(n.code,{children:"lastName"})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import {\n  useDataLoader,\n  useSources,\n} from "@ws-ui/webform-editor";\nimport { FC } from "react";\n\ntype Person = {\n firstName: string;\n lastName: string;\n id: string\n}\n\nconst Example: FC = () => {\n  const {\n    sources: { datasource: ds },\n  } = useSources();\n  const { entities } = useDataLoader<Person>({\n    source: ds,\n  });\n\n  // assuming that the source has two attributes firstName and lastName\n  return (\n      <div className="flex">\n        {entities.map((entity, index) => (\n          <div key={entity.id} className="flex items-center">\n              <span>{entity.firstName}</span> -\n              <span>{entity.lastName}</span>\n          </div>\n        ))}\n      </div>\n  );\n};\n\nexport default Example;\n\n'})})]}),(0,r.jsxs)(t,{value:"Example 2",children:[(0,r.jsx)(n.p,{children:"This example is using useSource and useDataloader and fetches the initial entities for the first Index"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import {\n  useDataLoader,\n  useSources,\n} from "@ws-ui/webform-editor";\nimport { FC, useEffect } from "react";\n\ntype Person = {\n firstName: string;\n lastName: string;\n id: string\n}\n\nconst Example: FC = () => {\n  const {\n    sources: { datasource: ds },\n  } = useSources();\n  const { entities } = useDataLoader<Person>({\n    source: ds,\n  });\n\n   // fetch the first page of entities on component mount\n   useEffect(() => {\n       fetchIndex(0)\n   }, [])\n\n  return (\n      <div className="flex">\n        {entities.map((entity, index) => (\n          <div key={entity.id} className="flex items-center">\n              <span>{entity.firstName}</span> -\n              <span>{entity.lastName}</span>\n          </div>\n        ))}\n      </div>\n  );\n};\n\nexport default Example;\n\n'})}),(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"useDataLoader"})," hook returns an object containing:"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"page"}),": object containing the info about the current page of entities"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"start: start index"}),"\n",(0,r.jsx)(n.li,{children:"end: end index"}),"\n",(0,r.jsx)(n.li,{children:"fetching: wether the it's fetching new pages or not, useful to render loading states using JSX"}),"\n"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"setStep"}),": a function to set the current step of tha page, takes an object with start and end properties"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"fetchIndex"}),": a function that fetches the page containg for the specified index, takes an index as its parameter"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"useentity",children:"useEntity"}),"\n",(0,r.jsx)(n.p,{children:"Gets current entity context from parant Element"}),"\n",(0,r.jsx)(n.h3,{id:"returns-7",children:(0,r.jsx)(n.em,{children:"Returns"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"{EntityContextType}"})," - Entity information including index, selection, current, iterator and parent"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(67294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);