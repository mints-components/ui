import{j as e}from"./iframe-C78YY8BI.js";import{D as s}from"./divider-DYjubRjd.js";import"./clsx-B-dksMZM.js";const m={title:"Components/Divider",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Divider component used to separate content, supporting optional children (text), horizontal or vertical orientation, and variants (solid, dashed)."}}},args:{variant:"solid",orientation:"horizontal"},argTypes:{variant:{control:"radio",options:["solid","dashed"]},orientation:{control:"radio",options:["horizontal","vertical"]}}},r=()=>e.jsx("p",{className:"dark:text-white",children:"In today' fast-paced digital world, staying connected and informed is more important than ever. Whether through social media, online news, or virtual meetings, technology continues to shape the way we communicate and interact. From remote work to e-learning, the convenience of digital tools has transformed our daily routines, making it easier to stay productive and engaged no matter where we are."}),i={args:{},render:a=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx(r,{}),e.jsx(s,{...a}),e.jsx(r,{})]})},t={args:{},render:a=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx(r,{}),e.jsx(s,{...a,children:"Text"}),e.jsx(r,{})]})},n={render:a=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx(r,{}),e.jsx(s,{...a,children:"Solid Divider"}),e.jsx(r,{}),e.jsx(s,{...a,variant:"dashed",children:"Dashed Divider"}),e.jsx(r,{})]})},o={args:{orientation:"vertical"},render:a=>e.jsxs("div",{children:[e.jsx("span",{className:"dark:text-white",children:"Left"}),e.jsx(s,{...a}),e.jsx("span",{className:"dark:text-white",children:"Right"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="max-w-2xl">
      <Paragraph />
      <Divider {...args} />
      <Paragraph />
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="max-w-2xl">
      <Paragraph />
      <Divider {...args}>Text</Divider>
      <Paragraph />
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="max-w-2xl">
      <Paragraph />
      <Divider {...args}>Solid Divider</Divider>
      <Paragraph />
      <Divider {...args} variant="dashed">
        Dashed Divider
      </Divider>
      <Paragraph />
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <div>
      <span className="dark:text-white">Left</span>
      <Divider {...args} />
      <span className="dark:text-white">Right</span>
    </div>
}`,...o.parameters?.docs?.source}}};const p=["Default","WithText","Variants","VerticalDivider"];export{i as Default,n as Variants,o as VerticalDivider,t as WithText,p as __namedExportsOrder,m as default};
