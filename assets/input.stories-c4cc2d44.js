import{j as e}from"./jsx-runtime-9bc08dc0.js";import{c as j}from"./clsx-0839fdbe.js";import{R as y}from"./index-dccdcbde.js";const I={sm:"text-sm px-3 py-1.5 rounded-md",default:"text-base px-4 py-2 rounded-md",lg:"text-lg px-5 py-2.5 rounded-md"},r=y.forwardRef(({label:s,error:n,size:h="default",className:b,...g},z)=>e.jsxs("div",{className:"flex flex-col gap-1",children:[s&&e.jsx("label",{className:"text-sm font-medium text-zinc-900 dark:text-white",children:s}),e.jsx("input",{ref:z,className:j("border border-zinc-300 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white dark:border-zinc-700","placeholder:text-zinc-400 dark:placeholder:text-zinc-500","focus:outline focus:outline-zinc-900 focus:border-zinc-900 dark:focus:border-white",I[h],b),...g}),n&&e.jsx("p",{className:"text-sm text-red-500",children:n})]}));r.displayName="Input";r.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{defaultValue:{value:"'default'",computed:!1},required:!1}}};const v={title:"Components/Input",component:r,parameters:{layout:"centered"},args:{size:"default"},argTypes:{size:{control:"radio",options:["sm","default","lg"]}}},a={args:{label:"This is a label"}},t={args:{label:"This is a label",error:"This is an error"}},o={render:s=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{...s,size:"sm"}),e.jsx(r,{...s}),e.jsx(r,{...s})]})};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'This is a label'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'This is a label',
    error: 'This is an error'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
      <Input {...args} size="sm" />
      <Input {...args} />
      <Input {...args} />
    </div>
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const w=["Label","WithError","Sizes"];export{a as Label,o as Sizes,t as WithError,w as __namedExportsOrder,v as default};
