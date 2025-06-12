import{j as e}from"./jsx-runtime-9bc08dc0.js";import{A as n}from"./index-44ce40c8.js";import{c as W}from"./clsx-0839fdbe.js";import"./index-87df5591.js";const F={default:{solid:"bg-zinc-900 text-white",outline:"border border-zinc-900 text-zinc-900 bg-transparent",soft:"bg-zinc-100 text-zinc-900"},success:{solid:"bg-green-600 text-white",outline:"border border-green-600 text-green-600 bg-transparent",soft:"bg-green-100 text-green-800"},warning:{solid:"bg-yellow-500 text-white",outline:"border border-yellow-500 text-yellow-700 bg-transparent",soft:"bg-yellow-100 text-yellow-800"},danger:{solid:"bg-red-600 text-white",outline:"border border-red-600 text-red-600 bg-transparent",soft:"bg-red-100 text-red-800"}},R={sm:"text-xs px-2 py-0.5 rounded",default:"text-sm px-2.5 py-1 rounded-md",lg:"text-base px-3 py-1.5 rounded-lg"};function r({variant:a="solid",color:S="default",size:y="default",icon:d,className:D,children:A,...T}){return e.jsxs("span",{className:W("inline-flex items-center font-medium select-none",F[S][a],R[y],D),...T,children:[d&&e.jsx("span",{className:"mr-1.5",children:d}),A]})}r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'soft'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I={title:"Components/Badge",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Badge component for status and labeling, supporting solid, outline, and soft variants, multiple colors, sizes, and optional icons."}}},args:{size:"default",variant:"solid",color:"default"},argTypes:{variant:{control:"radio",options:["solid","outline","soft"]},color:{control:"radio",options:["default","success","warning","danger"]},size:{control:"radio",options:["sm","default","lg"]},icon:{control:!1}}},s={args:{children:"Badge"}},t={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,variant:"solid",children:"Solid"}),e.jsx(r,{...a,variant:"outline",children:"Outline"}),e.jsx(r,{...a,variant:"soft",children:"Soft"})]})},o={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,color:"default",children:"Default"}),e.jsx(r,{...a,color:"success",children:"Success"}),e.jsx(r,{...a,color:"warning",children:"Warning"}),e.jsx(r,{...a,color:"danger",children:"Danger"})]})},l={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,size:"sm",children:"Small"}),e.jsx(r,{...a,size:"default",children:"Default"}),e.jsx(r,{...a,size:"lg",children:"Large"})]})},i={render:a=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{...a,icon:e.jsx(n,{})}),e.jsx(r,{...a,icon:e.jsx(n,{}),children:"With Text"}),e.jsx(r,{...a,color:"success",variant:"outline",icon:e.jsx(n,{}),children:"Success"}),e.jsx(r,{...a,color:"danger",variant:"soft",icon:e.jsx(n,{}),children:"Danger"})]})};var c,g,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,p,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var x,v,B;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(v=o.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var h,w,j;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var b,z,N;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(N=(z=i.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const O=["Default","Variants","Colors","Sizes","WithIcon"];export{o as Colors,s as Default,l as Sizes,t as Variants,i as WithIcon,O as __namedExportsOrder,I as default};
