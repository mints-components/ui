import{j as e}from"./iframe-BgYek-kT.js";import{I as a}from"./input-DeFGOSdR.js";import"./clsx-B-dksMZM.js";const m={title:"Components/Input",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Input component supporting label, required, size variants, and error message display. Styled using the zinc color palette with full dark mode support. Accepts JSX as label."}}},args:{size:"default"},argTypes:{size:{control:"radio",options:["sm","default","lg"]}}},s={args:{placeholder:"Enter something..."}},l={args:{label:"This is a label",placeholder:"With label"}},o={args:{label:"Required Field",required:!0,placeholder:"This field is required"}},t={args:{label:"This is a label",error:"This is an error",placeholder:"With error"}},i={render:r=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{...r,size:"xs",label:"Extra Samll",placeholder:"Extra Samll"}),e.jsx(a,{...r,size:"sm",label:"Small",placeholder:"Small size"}),e.jsx(a,{...r,size:"default",label:"Default",placeholder:"Default size"}),e.jsx(a,{...r,size:"lg",label:"Large",placeholder:"Large size"})]})},c={args:{label:e.jsxs("span",{className:"flex items-center gap-1",children:["Email ",e.jsx("span",{className:"text-red-500",children:"*"})]}),placeholder:"you@example.com"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter something...'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This is a label',
    placeholder: 'With label'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This field is required'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This is a label',
    error: 'This is an error',
    placeholder: 'With error'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Input {...args} size="xs" label="Extra Samll" placeholder="Extra Samll" />
      <Input {...args} size="sm" label="Small" placeholder="Small size" />
      <Input {...args} size="default" label="Default" placeholder="Default size" />
      <Input {...args} size="lg" label="Large" placeholder="Large size" />
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: <span className="flex items-center gap-1">
        Email <span className="text-red-500">*</span>
      </span>,
    placeholder: 'you@example.com'
  }
}`,...c.parameters?.docs?.source}}};const u=["Default","Label","Required","WithError","Sizes","WithCustomLabel"];export{s as Default,l as Label,o as Required,i as Sizes,c as WithCustomLabel,t as WithError,u as __namedExportsOrder,m as default};
