import{j as e}from"./iframe-C-9OxYX0.js";import{I as i}from"./input-B7ZeHYQb.js";import"./clsx-B-dksMZM.js";const m={title:"Components/Input",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Input component supporting label, required, size variants, and error message display. Styled using the zinc color palette with full dark mode support. Accepts JSX as label."}}},args:{size:"default"},argTypes:{size:{control:"radio",options:["sm","default","lg"]}}},r={args:{placeholder:"Enter something..."}},a={args:{label:"This is a label",placeholder:"With label"}},s={args:{label:"Required Field",required:!0,placeholder:"This field is required"}},l={args:{label:"This is a label",error:"This is an error",placeholder:"With error"}},o={render:c=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(i,{...c,size:"sm",label:"Small",placeholder:"Small size"}),e.jsx(i,{...c,size:"default",label:"Default",placeholder:"Default size"}),e.jsx(i,{...c,size:"lg",label:"Large",placeholder:"Large size"})]})},t={args:{label:e.jsxs("span",{className:"flex items-center gap-1",children:["Email ",e.jsx("span",{className:"text-red-500",children:"*"})]}),placeholder:"you@example.com"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter something...'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This is a label',
    placeholder: 'With label'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This field is required'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This is a label',
    error: 'This is an error',
    placeholder: 'With error'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Input {...args} size="sm" label="Small" placeholder="Small size" />
      <Input {...args} size="default" label="Default" placeholder="Default size" />
      <Input {...args} size="lg" label="Large" placeholder="Large size" />
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: <span className="flex items-center gap-1">
        Email <span className="text-red-500">*</span>
      </span>,
    placeholder: 'you@example.com'
  }
}`,...t.parameters?.docs?.source}}};const u=["Default","Label","Required","WithError","Sizes","WithCustomLabel"];export{r as Default,a as Label,s as Required,o as Sizes,t as WithCustomLabel,l as WithError,u as __namedExportsOrder,m as default};
