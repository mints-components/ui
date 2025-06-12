import{j as e}from"./jsx-runtime-9bc08dc0.js";import{c as N}from"./clsx-0839fdbe.js";function s({width:t,height:v,rounded:n="md",className:j,style:k,...y}){return e.jsx("div",{className:N("relative overflow-hidden bg-zinc-200/80",{"rounded-sm":n==="sm","rounded-md":n==="md","rounded-lg":n==="lg","rounded-full":n==="full"},typeof n=="string"&&!["sm","md","lg","full"].includes(n)&&n,"animate-pulse",j),style:{width:t,height:v,...k},...y})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},rounded:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'full' | string",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'full'"},{name:"string"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/Skeleton",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Skeleton component for displaying loading placeholders. Supports custom width, height, border radius, and shape."}}},args:{width:120,height:20,rounded:"md"},argTypes:{width:{control:"text"},height:{control:"text"},rounded:{control:"radio",options:["sm","md","lg","full"]}}},r={args:{}},i={render:t=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(s,{...t,width:40,height:40,rounded:"full"}),e.jsx(s,{...t,width:80,height:40,rounded:"md"}),e.jsx(s,{...t,width:120,height:20,rounded:"lg"}),e.jsx(s,{...t,width:200,height:8,rounded:"sm"})]})},a={render:t=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{...t,width:80,height:12}),e.jsx(s,{...t,width:160,height:20}),e.jsx(s,{...t,width:240,height:32}),e.jsx(s,{...t,width:"100%",height:16})]})},d={render:t=>e.jsxs("div",{className:"w-64 space-y-4",children:[e.jsx(s,{...t,width:"100%",height:24}),e.jsx(s,{...t,width:"100%",height:16}),e.jsx(s,{...t,width:"60%",height:16}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{...t,width:40,height:40,rounded:"full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{...t,width:"100%",height:12}),e.jsx(s,{...t,width:"80%",height:12})]})]})]})};var l,o,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(h=(o=r.parameters)==null?void 0:o.docs)==null?void 0:h.source}}};var m,c,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center">
      <Skeleton {...args} width={40} height={40} rounded="full" />
      <Skeleton {...args} width={80} height={40} rounded="md" />
      <Skeleton {...args} width={120} height={20} rounded="lg" />
      <Skeleton {...args} width={200} height={8} rounded="sm" />
    </div>
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,p,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Skeleton {...args} width={80} height={12} />
      <Skeleton {...args} width={160} height={20} />
      <Skeleton {...args} width={240} height={32} />
      <Skeleton {...args} width="100%" height={16} />
    </div>
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var w,f,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const E=["Default","Shapes","Sizes","BlockExample"];export{d as BlockExample,r as Default,i as Shapes,a as Sizes,E as __namedExportsOrder,q as default};
