import{j as e}from"./iframe-DWCafqHe.js";import{A as n}from"./index-DbdhefCR.js";import{c as f}from"./clsx-B-dksMZM.js";const x={default:{solid:"bg-zinc-900 text-white dark:bg-zinc-200 dark:text-zinc-900",outline:"border border-zinc-900 text-zinc-900 bg-transparent dark:border-zinc-200 dark:text-zinc-200",soft:"bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"},success:{solid:"bg-green-600 text-white dark:bg-green-400 dark:text-green-900",outline:"border border-green-600 text-green-600 bg-transparent dark:border-green-400 dark:text-green-400",soft:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"},warning:{solid:"bg-yellow-500 text-white dark:bg-yellow-400 dark:text-yellow-900",outline:"border border-yellow-500 text-yellow-700 bg-transparent dark:border-yellow-400 dark:text-yellow-400",soft:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"},danger:{solid:"bg-red-600 text-white dark:bg-red-400 dark:text-red-900",outline:"border border-red-600 text-red-600 bg-transparent dark:border-red-400 dark:text-red-400",soft:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"}},v={sm:"text-xs px-2 py-0.5 rounded",default:"text-sm px-2.5 py-1 rounded-md",lg:"text-base px-3 py-1.5 rounded-lg"};function r({variant:a="solid",color:c="default",size:g="default",icon:d,className:u,children:m,...p}){return e.jsxs("span",{className:f("inline-flex items-center font-medium select-none",x[c][a],v[g],u),...p,children:[d&&e.jsx("span",{className:"mr-1.5",children:d}),m]})}r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'soft'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const h={title:"Components/Badge",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Badge component for status and labeling, supporting solid, outline, and soft variants, multiple colors, sizes, and optional icons."}}},args:{size:"default",variant:"solid",color:"default"},argTypes:{variant:{control:"radio",options:["solid","outline","soft"]},color:{control:"radio",options:["default","success","warning","danger"]},size:{control:"radio",options:["sm","default","lg"]},icon:{control:!1}}},t={args:{children:"Badge"}},s={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,variant:"solid",children:"Solid"}),e.jsx(r,{...a,variant:"outline",children:"Outline"}),e.jsx(r,{...a,variant:"soft",children:"Soft"})]})},l={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,color:"default",children:"Default"}),e.jsx(r,{...a,color:"success",children:"Success"}),e.jsx(r,{...a,color:"warning",children:"Warning"}),e.jsx(r,{...a,color:"danger",children:"Danger"})]})},o={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,size:"sm",children:"Small"}),e.jsx(r,{...a,size:"default",children:"Default"}),e.jsx(r,{...a,size:"lg",children:"Large"})]})},i={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,icon:e.jsx(n,{})}),e.jsx(r,{...a,icon:e.jsx(n,{}),children:"With Text"}),e.jsx(r,{...a,color:"success",variant:"outline",icon:e.jsx(n,{}),children:"Success"}),e.jsx(r,{...a,color:"danger",variant:"soft",icon:e.jsx(n,{}),children:"Danger"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} variant="solid">
        Solid
      </Badge>
      <Badge {...args} variant="outline">
        Outline
      </Badge>
      <Badge {...args} variant="soft">
        Soft
      </Badge>
    </div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} color="default">
        Default
      </Badge>
      <Badge {...args} color="success">
        Success
      </Badge>
      <Badge {...args} color="warning">
        Warning
      </Badge>
      <Badge {...args} color="danger">
        Danger
      </Badge>
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} size="sm">
        Small
      </Badge>
      <Badge {...args} size="default">
        Default
      </Badge>
      <Badge {...args} size="lg">
        Large
      </Badge>
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Badge {...args} icon={<AiFillNotification />} />
      <Badge {...args} icon={<AiFillNotification />}>
        With Text
      </Badge>
      <Badge {...args} color="success" variant="outline" icon={<AiFillNotification />}>
        Success
      </Badge>
      <Badge {...args} color="danger" variant="soft" icon={<AiFillNotification />}>
        Danger
      </Badge>
    </div>
}`,...i.parameters?.docs?.source}}};const j=["Default","Variants","Colors","Sizes","WithIcon"];export{l as Colors,t as Default,o as Sizes,s as Variants,i as WithIcon,j as __namedExportsOrder,h as default};
