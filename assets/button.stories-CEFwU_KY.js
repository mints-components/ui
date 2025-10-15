import{j as n}from"./iframe-Dql1y_Ga.js";import{M as a}from"./waypoints-Pb8qTe8v.js";import{B as t}from"./button-BKYh4LfT.js";import"./clsx-B-dksMZM.js";import"./spinner-D1Cr3-cF.js";const B={title:"Components/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Button component supporting primary, outline, and link variants, along with icon, size, and disabled options."}}},args:{size:"default",disabled:!1},argTypes:{disabled:{control:"boolean"},loading:{control:"boolean"},variant:{control:"radio",options:["primary","outline","link"]},size:{control:"radio",options:["sm","default","lg"]},onClick:{action:"clicked"}}},s={args:{children:"Button",variant:"primary"}},i={render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[n.jsx(t,{...e,size:"xs",children:"XS"}),n.jsx(t,{...e,size:"sm",children:"Small"}),n.jsx(t,{...e,size:"default",children:"Default"}),n.jsx(t,{...e,size:"lg",children:"Large"})]})},r={render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(t,{...e,children:"Primary"}),n.jsx(t,{...e,variant:"outline",children:"Outline"}),n.jsx(t,{...e,variant:"dashed",children:"Dashed"}),n.jsx(t,{...e,variant:"link",children:"Link"})]})},o={args:{disabled:!0},render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(t,{...e,children:"Primary"}),n.jsx(t,{...e,variant:"outline",children:"Outline"}),n.jsx(t,{...e,variant:"dashed",children:"Dashed"}),n.jsx(t,{...e,variant:"link",children:"Link"})]})},l={args:{danger:!0},render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(t,{...e,children:"Primary"}),n.jsx(t,{...e,variant:"outline",children:"Outline"}),n.jsx(t,{...e,variant:"dashed",children:"Dashed"}),n.jsx(t,{...e,variant:"link",children:"Link"})]})},d={render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[n.jsx(t,{...e,size:"xs",icon:n.jsx(a,{})}),n.jsx(t,{...e,size:"sm",icon:n.jsx(a,{})}),n.jsx(t,{...e,icon:n.jsx(a,{})}),n.jsx(t,{...e,size:"lg",icon:n.jsx(a,{})}),n.jsx(t,{...e,variant:"outline",icon:n.jsx(a,{})}),n.jsx(t,{...e,variant:"link",icon:n.jsx(a,{})}),n.jsx(t,{...e,icon:n.jsx(a,{}),children:"With Text"}),n.jsx(t,{...e,variant:"outline",icon:n.jsx(a,{}),children:"With Text"}),n.jsx(t,{...e,variant:"link",icon:n.jsx(a,{}),children:"With Text"})]})},c={args:{loading:!0},render:e=>n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,size:"xs",children:"XS"}),n.jsx(t,{...e,size:"sm",children:"Small"}),n.jsx(t,{...e,size:"default",children:"Default"}),n.jsx(t,{...e,size:"lg",children:"Large"})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,variant:"primary",children:"Primary"}),n.jsx(t,{...e,variant:"outline",children:"Outline"}),n.jsx(t,{...e,variant:"dashed",children:"Outline"}),n.jsx(t,{...e,variant:"link",children:"Link"})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,danger:!0,children:"Primary"}),n.jsx(t,{...e,variant:"outline",danger:!0,children:"Outline"}),n.jsx(t,{...e,variant:"dashed",danger:!0,children:"Dashed"}),n.jsx(t,{...e,variant:"link",danger:!0,children:"Link"})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,size:"xs",icon:n.jsx(a,{})}),n.jsx(t,{...e,size:"sm",icon:n.jsx(a,{})}),n.jsx(t,{...e,size:"default",icon:n.jsx(a,{})}),n.jsx(t,{...e,size:"lg",icon:n.jsx(a,{})})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,size:"default",icon:n.jsx(a,{}),children:"With Text"}),n.jsx(t,{...e,size:"lg",icon:n.jsx(a,{}),children:"Large With Text"})]}),n.jsx("div",{className:"flex items-center gap-4",children:n.jsx(t,{...e,size:"default",disabled:!0,children:"Disabled + Loading"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} size="xs">
        XS
      </Button>
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="dashed">
        Dashed
      </Button>
      <Button {...args} variant="link">
        Link
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
      <Button {...args} variant="dashed">
        Dashed
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    danger: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="dashed">
        Dashed
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} size="xs" icon={<Message />} />
      <Button {...args} size="sm" icon={<Message />} />
      <Button {...args} icon={<Message />} />
      <Button {...args} size="lg" icon={<Message />} />
      <Button {...args} variant="outline" icon={<Message />} />
      <Button {...args} variant="link" icon={<Message />} />
      <Button {...args} icon={<Message />}>
        With Text
      </Button>
      <Button {...args} variant="outline" icon={<Message />}>
        With Text
      </Button>
      <Button {...args} variant="link" icon={<Message />}>
        With Text
      </Button>
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button {...args} size="xs">
          XS
        </Button>
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
        <Button {...args} variant="dashed">
          Outline
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} danger>
          Primary
        </Button>
        <Button {...args} variant="outline" danger>
          Outline
        </Button>
        <Button {...args} variant="dashed" danger>
          Dashed
        </Button>
        <Button {...args} variant="link" danger>
          Link
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="xs" icon={<Message />} />
        <Button {...args} size="sm" icon={<Message />} />
        <Button {...args} size="default" icon={<Message />} />
        <Button {...args} size="lg" icon={<Message />} />
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="default" icon={<Message />}>
          With Text
        </Button>
        <Button {...args} size="lg" icon={<Message />}>
          Large With Text
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="default" disabled>
          Disabled + Loading
        </Button>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const v=["Default","Sizes","Variants","DisabledStates","DangerStates","WithIcon","LoadingStates"];export{l as DangerStates,s as Default,o as DisabledStates,c as LoadingStates,i as Sizes,r as Variants,d as WithIcon,v as __namedExportsOrder,B as default};
