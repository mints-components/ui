import{j as e}from"./iframe-B87UtO8E.js";import{c}from"./clsx-B-dksMZM.js";function s({width:t,height:l,rounded:n="md",className:o,style:h,...m}){return e.jsx("div",{className:c("relative overflow-hidden","bg-zinc-200/80 dark:bg-zinc-600/80",{"rounded-sm":n==="sm","rounded-md":n==="md","rounded-lg":n==="lg","rounded-full":n==="full"},typeof n=="string"&&!["sm","md","lg","full"].includes(n)&&n,"animate-pulse",o),style:{width:t,height:l,...h},...m})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},rounded:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'full' | string",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'full'"},{name:"string"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const p={title:"Components/Skeleton",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Skeleton component for displaying loading placeholders. Supports custom width, height, border radius, and shape."}}},args:{width:120,height:20,rounded:"md"},argTypes:{width:{control:"text"},height:{control:"text"},rounded:{control:"radio",options:["sm","md","lg","full"]}}},r={args:{}},i={render:t=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(s,{...t,width:40,height:40,rounded:"full"}),e.jsx(s,{...t,width:80,height:40,rounded:"md"}),e.jsx(s,{...t,width:120,height:20,rounded:"lg"}),e.jsx(s,{...t,width:200,height:8,rounded:"sm"})]})},a={render:t=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{...t,width:80,height:12}),e.jsx(s,{...t,width:160,height:20}),e.jsx(s,{...t,width:240,height:32}),e.jsx(s,{...t,width:"100%",height:16})]})},d={render:t=>e.jsxs("div",{className:"w-64 space-y-4",children:[e.jsx(s,{...t,width:"100%",height:24}),e.jsx(s,{...t,width:"100%",height:16}),e.jsx(s,{...t,width:"60%",height:16}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{...t,width:40,height:40,rounded:"full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{...t,width:"100%",height:12}),e.jsx(s,{...t,width:"80%",height:12})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Skeleton {...args} width={40} height={40} rounded="full" />
      <Skeleton {...args} width={80} height={40} rounded="md" />
      <Skeleton {...args} width={120} height={20} rounded="lg" />
      <Skeleton {...args} width={200} height={8} rounded="sm" />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Skeleton {...args} width={80} height={12} />
      <Skeleton {...args} width={160} height={20} />
      <Skeleton {...args} width={240} height={32} />
      <Skeleton {...args} width="100%" height={16} />
    </div>
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-64 space-y-4">
      <Skeleton {...args} width="100%" height={24} />
      <Skeleton {...args} width="100%" height={16} />
      <Skeleton {...args} width="60%" height={16} />
      <div className="flex items-center gap-3">
        <Skeleton {...args} width={40} height={40} rounded="full" />
        <div className="flex-1 space-y-2">
          <Skeleton {...args} width="100%" height={12} />
          <Skeleton {...args} width="80%" height={12} />
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const x=["Default","Shapes","Sizes","BlockExample"];export{d as BlockExample,r as Default,i as Shapes,a as Sizes,x as __namedExportsOrder,p as default};
