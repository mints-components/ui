import{j as e}from"./jsx-runtime-9bc08dc0.js";import{c as T}from"./clsx-0839fdbe.js";import{e as v}from"./index-87df5591.js";const w={sm:"text-sm px-3 py-1.5 rounded-md",default:"text-base px-4 py-2 rounded-md",lg:"text-lg px-5 py-2.5 rounded-md"},a=v.forwardRef(({label:s,error:n,size:I="default",className:E,...W},k)=>e.jsxs("div",{className:"flex flex-col gap-1",children:[s&&e.jsx("label",{className:"text-sm font-medium text-zinc-900 dark:text-white",children:s}),e.jsx("input",{ref:k,className:T("border border-zinc-300 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white dark:border-zinc-700","placeholder:text-zinc-400 dark:placeholder:text-zinc-500","focus:outline focus:outline-zinc-900 focus:border-zinc-900 dark:focus:border-white",w[I],E),...W}),n&&e.jsx("p",{className:"text-sm text-red-500",children:n})]}));a.displayName="Input";a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{defaultValue:{value:"'default'",computed:!1},required:!1}}};const _={title:"Components/Input",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Input component supporting label, size variants, and error message display. Styled using the zinc color palette with full dark mode support. Accepts JSX as label."}}},args:{size:"default"},argTypes:{size:{control:"radio",options:["sm","default","lg"]}}},r={args:{placeholder:"Enter something..."}},l={args:{label:"This is a label",placeholder:"With label"}},t={args:{label:"This is a label",error:"This is an error",placeholder:"With error"}},o={render:s=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{...s,size:"sm",placeholder:"Small size"}),e.jsx(a,{...s,size:"default",placeholder:"Default size"}),e.jsx(a,{...s,size:"lg",placeholder:"Large size"})]})},c={args:{label:e.jsxs("span",{className:"flex items-center gap-1",children:["Email ",e.jsx("span",{className:"text-red-500",children:"*"})]}),placeholder:"you@example.com"}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter something...'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'This is a label',
    placeholder: 'With label'
  }
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,g,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'This is a label',
    error: 'This is an error',
    placeholder: 'With error'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var z,b,j;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Input {...args} size="sm" placeholder="Small size" />
      <Input {...args} size="default" placeholder="Default size" />
      <Input {...args} size="lg" placeholder="Large size" />
    </div>
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var N,y,S;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: <span className="flex items-center gap-1">
        Email <span className="text-red-500">*</span>
      </span>,
    placeholder: 'you@example.com'
  }
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const A=["Default","Label","WithError","Sizes","WithCustomLabel"];export{r as Default,l as Label,o as Sizes,c as WithCustomLabel,t as WithError,A as __namedExportsOrder,_ as default};
