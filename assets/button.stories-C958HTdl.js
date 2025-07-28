import{j as n}from"./iframe-DSdqhFR-.js";import{A as i}from"./index-D-BXBPGd.js";import{B as t}from"./button-BtGSe2Q9.js";import"./clsx-B-dksMZM.js";import"./spinner-DhZIe2SR.js";const g={title:"Components/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Button component supporting primary, outline, and link variants, along with icon, size, and disabled options."}}},args:{size:"default",disabled:!1},argTypes:{disabled:{control:"boolean"},loading:{control:"boolean"},variant:{control:"radio",options:["primary","outline","link"]},size:{control:"radio",options:["sm","default","lg"]},onClick:{action:"clicked"}}},a={args:{children:"Button",variant:"primary"}},s={render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(t,{...e,children:"Primary"}),n.jsx(t,{...e,variant:"outline",children:"Outline"}),n.jsx(t,{...e,variant:"dashed",children:"Outline"}),n.jsx(t,{...e,variant:"link",children:"Link"})]})},r={render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[n.jsx(t,{...e,size:"sm",children:"Small"}),n.jsx(t,{...e,size:"default",children:"Default"}),n.jsx(t,{...e,size:"lg",children:"Large"})]})},o={args:{disabled:!0},render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(t,{...e,children:"Primary"}),n.jsx(t,{...e,variant:"outline",children:"Outline"}),n.jsx(t,{...e,variant:"link",children:"Link"})]})},l={render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[n.jsx(t,{...e,icon:n.jsx(i,{})}),n.jsx(t,{...e,variant:"outline",icon:n.jsx(i,{})}),n.jsx(t,{...e,variant:"link",icon:n.jsx(i,{})}),n.jsx(t,{...e,icon:n.jsx(i,{}),children:"With Text"}),n.jsx(t,{...e,variant:"outline",icon:n.jsx(i,{}),children:"With Text"}),n.jsx(t,{...e,variant:"link",icon:n.jsx(i,{}),children:"With Text"})]})},c={args:{loading:!0},render:e=>n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,size:"sm",children:"Small"}),n.jsx(t,{...e,size:"default",children:"Default"}),n.jsx(t,{...e,size:"lg",children:"Large"})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,variant:"primary",children:"Primary"}),n.jsx(t,{...e,variant:"outline",children:"Outline"}),n.jsx(t,{...e,variant:"link",children:"Link"})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,size:"default",icon:n.jsx(i,{})}),n.jsx(t,{...e,size:"lg",icon:n.jsx(i,{})})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,size:"default",icon:n.jsx(i,{}),children:"With Text"}),n.jsx(t,{...e,size:"lg",icon:n.jsx(i,{}),children:"Large With Text"})]}),n.jsx("div",{className:"flex items-center gap-4",children:n.jsx(t,{...e,size:"default",disabled:!0,children:"Disabled + Loading"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="dashed">
        Outline
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} icon={<AiFillNotification />} />
      <Button {...args} variant="outline" icon={<AiFillNotification />} />
      <Button {...args} variant="link" icon={<AiFillNotification />} />
      <Button {...args} icon={<AiFillNotification />}>
        With Text
      </Button>
      <Button {...args} variant="outline" icon={<AiFillNotification />}>
        With Text
      </Button>
      <Button {...args} variant="link" icon={<AiFillNotification />}>
        With Text
      </Button>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button {...args} size="sm">
          Small
        </Button>
        <Button {...args} size="default">
          Default
        </Button>
        <Button {...args} size="lg">
          Large
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} variant="primary">
          Primary
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="default" icon={<AiFillNotification />} />
        <Button {...args} size="lg" icon={<AiFillNotification />} />
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="default" icon={<AiFillNotification />}>
          With Text
        </Button>
        <Button {...args} size="lg" icon={<AiFillNotification />}>
          Large With Text
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="default" disabled>
          Disabled + Loading
        </Button>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const f=["Default","Variants","Sizes","DisabledStates","WithIcon","LoadingStates"];export{a as Default,o as DisabledStates,c as LoadingStates,r as Sizes,s as Variants,l as WithIcon,f as __namedExportsOrder,g as default};
