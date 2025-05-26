import{j as e}from"./jsx-runtime-9bc08dc0.js";import{c as l}from"./clsx-0839fdbe.js";import{r as v}from"./index-87df5591.js";function r({children:s,size:w="default",className:z,disabled:t,checked:R,...j}){const d=v.useId(),n={sm:{wrapper:"h-3.5 w-3.5",inner:"h-1.5 w-1.5"},default:{wrapper:"h-4 w-4",inner:"h-2 w-2"},lg:{wrapper:"h-5 w-5",inner:"h-2.5 w-2.5"}}[w];return e.jsxs("label",{htmlFor:d,className:l("inline-flex items-center gap-2 select-none",t?"opacity-50 cursor-not-allowed":"cursor-pointer",z),children:[e.jsxs("span",{className:"relative flex items-center justify-center",children:[e.jsx("input",{id:d,type:"radio",className:"peer sr-only",disabled:t,checked:R,...j}),e.jsx("span",{className:l("rounded-full border border-zinc-400 flex items-center justify-center transition-colors",n.wrapper,t?"cursor-not-allowed":"cursor-pointer","peer-checked:border-zinc-900 peer-checked:bg-zinc-900","peer-checked:disabled:border-zinc-400 peer-checked:disabled:bg-zinc-400","peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-zinc-900"),children:e.jsx("span",{className:l("rounded-full bg-white peer-checked:bg-white",n.inner)})})]}),s&&e.jsx("span",{children:s})]})}r.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const S={title:"Components/Radio",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Radio component for selecting a single option from a group. Supports different sizes, disabled states, and works with any `children` as the label. Designed for accessible forms with support for controlled and uncontrolled modes."}}},args:{size:"default",disabled:!1},argTypes:{disabled:{control:"boolean"},size:{control:"radio",options:["sm","default","lg"]}}},a={args:{children:"Option 1"}},i={args:{children:"Option"},render:s=>e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(r,{...s,size:"sm",children:"Small"}),e.jsx(r,{...s,size:"default",children:"Default"}),e.jsx(r,{...s,size:"lg",children:"Large"})]})},o={args:{children:"Option",disabled:!0},render:s=>e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(r,{...s,children:"Disabled"}),e.jsx(r,{...s,checked:!0,children:"Disabled & Checked"})]})};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Option 1'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,f,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Option'
  },
  render: args => <div className="flex flex-col gap-4 items-start">
      <Radio {...args} size="sm">
        Small
      </Radio>
      <Radio {...args} size="default">
        Default
      </Radio>
      <Radio {...args} size="lg">
        Large
      </Radio>
    </div>
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,x,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Option',
    disabled: true
  },
  render: args => <div className="flex flex-col gap-4 items-start">
      <Radio {...args}>Disabled</Radio>
      <Radio {...args} checked>
        Disabled & Checked
      </Radio>
    </div>
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const D=["Basic","Sizes","DisabledStates"];export{a as Basic,o as DisabledStates,i as Sizes,D as __namedExportsOrder,S as default};
