import{j as s}from"./iframe-CSs8NUEU.js";import{c as v}from"./clsx-B-dksMZM.js";const d={sm:{box:"w-8 h-8",text:"text-sm"},md:{box:"w-10 h-10",text:"text-base"},lg:{box:"w-16 h-16",text:"text-xl"}};function a({src:e,alt:i,name:n,size:l="md",rounded:m=!0,className:c,...u}){const p=n?.charAt(0).toUpperCase()??"?",f=!!e,{box:x,text:g}=d[l]??d.md;return s.jsx("div",{className:v("inline-flex items-center justify-center bg-gray-200 text-gray-600 font-medium overflow-hidden",x,g,m?"rounded-full":"rounded-md",c),...u,children:f?s.jsx("img",{src:e,alt:i||n||"Avatar",className:"w-full h-full object-cover"}):p})}a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const j={title:"Components/Avatar",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Avatar is a simple component for displaying user profile pictures or initials. It supports different sizes (`sm`, `md`, `lg`) and allows optional rounding (`rounded=true` by default). If no image is provided, it displays the first letter of the `name` as fallback."}}},args:{name:"Mints",size:"md",rounded:!0},argTypes:{rounded:{control:"boolean"}}},r={args:{}},t={render:e=>s.jsxs("div",{className:"space-x-4",children:[s.jsx(a,{...e,size:"sm"}),s.jsx(a,{...e,size:"md"}),s.jsx(a,{...e,size:"lg"})]})},o={render:e=>s.jsxs("div",{className:"space-x-4",children:[s.jsx(a,{...e,size:"md",rounded:!1}),s.jsx(a,{...e,size:"md",rounded:!0})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-x-4">
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-x-4">
      <Avatar {...args} size="md" rounded={false} />
      <Avatar {...args} size="md" rounded />
    </div>
}`,...o.parameters?.docs?.source}}};const b=["Default","Size","Rounded"];export{r as Default,o as Rounded,t as Size,b as __namedExportsOrder,j as default};
