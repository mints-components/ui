import{r as d,j as e,e as y}from"./iframe-BkgBW82e.js";import{B as n}from"./button-BsubSHUb.js";import{c as P}from"./clsx-B-dksMZM.js";import{A as T}from"./arrow-DEaCR_ch.js";import"./spinner-CVCcAx2x.js";function r({children:t,title:p,description:m,confirmText:f="Yes",cancelText:x="No",onConfirm:g,onCancel:h,placement:u="top"}){const[v,o]=d.useState(!1),l=d.useRef(null);d.useEffect(()=>{const a=C=>{l.current&&!l.current.contains(C.target)&&o(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const j=()=>{switch(u){case"top":return"left-1/2 bottom-full -translate-x-1/2 mb-2";case"bottom":return"left-1/2 top-full -translate-x-1/2 mt-2";case"left":return"right-full top-1/2 -translate-y-1/2 mr-2";case"right":return"left-full top-1/2 -translate-y-1/2 ml-2";default:return""}};return e.jsxs("div",{ref:l,className:"relative inline-flex",children:[y.cloneElement(t,{onClick:()=>o(a=>!a)}),v&&e.jsxs("div",{className:P("absolute z-50 w-64 p-4 rounded-md bg-white dark:bg-zinc-900 border border-zinc-500",j()),children:[e.jsx(T,{placement:u,className:"bg-zinc-500"}),e.jsx("div",{className:"font-medium text-zinc-900 dark:text-zinc-100",children:p}),m&&e.jsx("div",{className:"mt-1 text-zinc-600 dark:text-zinc-400 text-sm",children:m}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(n,{size:"xs",variant:"outline",onClick:()=>{h?.(),o(!1)},children:x}),e.jsx(n,{size:"xs",onClick:()=>{g(),o(!1)},children:f})]})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"PopConfirm",props:{children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Yes'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No'",computed:!1}},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}}}};const z={title:"Components/PopConfirm",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A confirmation popover that prompts user for confirmation before taking an action."}}},argTypes:{title:{control:"text"},description:{control:"text"},confirmText:{control:"text"},cancelText:{control:"text"},onConfirm:{action:"confirmed"},onCancel:{action:"cancelled"}},args:{title:"Are you sure?",description:"This action cannot be undone.",confirmText:"Yes",cancelText:"No"}},s={render:t=>e.jsx(r,{...t,children:e.jsx(n,{danger:!0,children:"Delete"})})},i={render:t=>e.jsxs("div",{className:"flex flex-wrap gap-8 items-center justify-center",children:[e.jsx(r,{...t,placement:"top",children:e.jsx(n,{danger:!0,children:"Top"})}),e.jsx(r,{...t,placement:"right",children:e.jsx(n,{danger:!0,children:"Right"})}),e.jsx(r,{...t,placement:"bottom",children:e.jsx(n,{danger:!0,children:"Bottom"})}),e.jsx(r,{...t,placement:"left",children:e.jsx(n,{danger:!0,children:"Left"})})]})},c={render:t=>e.jsx(r,{...t,description:void 0,children:e.jsx(n,{variant:"outline",danger:!0,children:"Archive"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <PopConfirm {...args}>
      <Button danger>Delete</Button>
    </PopConfirm>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-8 items-center justify-center">
      <PopConfirm {...args} placement="top">
        <Button danger>Top</Button>
      </PopConfirm>
      <PopConfirm {...args} placement="right">
        <Button danger>Right</Button>
      </PopConfirm>
      <PopConfirm {...args} placement="bottom">
        <Button danger>Bottom</Button>
      </PopConfirm>
      <PopConfirm {...args} placement="left">
        <Button danger>Left</Button>
      </PopConfirm>
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <PopConfirm {...args} description={undefined}>
      <Button variant="outline" danger>
        Archive
      </Button>
    </PopConfirm>
}`,...c.parameters?.docs?.source}}};const E=["Default","Placement","WithoutDescription"];export{s as Default,i as Placement,c as WithoutDescription,E as __namedExportsOrder,z as default};
