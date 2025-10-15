import{j as r}from"./iframe-Bj9QNqzA.js";import{c}from"./clsx-B-dksMZM.js";function a({value:e,max:d=100,size:m="default",variant:u="primary",color:l,className:g,...p}){const v=Math.min(Math.max((e??0)/d*100,0),100),f={sm:"h-1.5",default:"h-2.5",lg:"h-4"}[m],x={primary:"bg-zinc-900 dark:bg-zinc-100",success:"bg-green-500",warning:"bg-yellow-500",danger:"bg-red-500"}[u];return r.jsx("div",{role:"progressbar","aria-valuenow":e,"aria-valuemin":0,"aria-valuemax":d,className:c("w-full rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden",f,g),...p,children:r.jsx("div",{className:c("h-full transition-all duration-300 ease-in-out",!l&&x,e===void 0&&"animate-pulse"),style:{width:e===void 0?"100%":`${v}%`,...l?{backgroundColor:l}:{}}})})}a.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Components/Progress",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A progress bar supporting determinate/indeterminate states, size and variant options, dark mode, and custom color override."}}},args:{value:50,max:100,size:"default",variant:"primary"},argTypes:{value:{control:{type:"number",min:0,max:100,step:1}},max:{control:{type:"number",min:1}},size:{control:"radio",options:["sm","default","lg"]},variant:{control:"radio",options:["primary","success","warning","danger"]},color:{control:"color"}}},s={render:e=>r.jsx("div",{className:"w-64",children:r.jsx(a,{...e})})},n={render:e=>r.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[r.jsx(a,{...e,size:"sm"}),r.jsx(a,{...e,size:"default"}),r.jsx(a,{...e,size:"lg"})]})},o={render:e=>r.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[r.jsx(a,{...e,variant:"primary"}),r.jsx(a,{...e,variant:"success"}),r.jsx(a,{...e,variant:"warning"}),r.jsx(a,{...e,variant:"danger"})]})},i={args:{value:void 0},render:e=>r.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[r.jsx(a,{...e,variant:"primary"}),r.jsx(a,{...e,variant:"success"}),r.jsx(a,{...e,variant:"warning"}),r.jsx(a,{...e,variant:"danger"})]})},t={args:{color:"#7c3aed"},render:e=>r.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[r.jsx(a,{...e,value:20}),r.jsx(a,{...e,value:60}),r.jsx(a,{...e,value:90})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-64">
      <Progress {...args} />
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 w-64">
      <Progress {...args} size="sm" />
      <Progress {...args} size="default" />
      <Progress {...args} size="lg" />
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 w-64">
      <Progress {...args} variant="primary" />
      <Progress {...args} variant="success" />
      <Progress {...args} variant="warning" />
      <Progress {...args} variant="danger" />
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined
  },
  render: args => <div className="flex flex-col gap-4 w-64">
      <Progress {...args} variant="primary" />
      <Progress {...args} variant="success" />
      <Progress {...args} variant="warning" />
      <Progress {...args} variant="danger" />
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#7c3aed'
  },
  render: args => <div className="flex flex-col gap-4 w-64">
      <Progress {...args} value={20} />
      <Progress {...args} value={60} />
      <Progress {...args} value={90} />
    </div>
}`,...t.parameters?.docs?.source}}};const P=["Default","Sizes","Variants","Indeterminate","CustomColor"];export{t as CustomColor,s as Default,i as Indeterminate,n as Sizes,o as Variants,P as __namedExportsOrder,y as default};
