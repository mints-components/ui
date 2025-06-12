import{j as n}from"./jsx-runtime-9bc08dc0.js";import{A as i}from"./index-44ce40c8.js";import{B as t}from"./button-84d48078.js";import"./index-87df5591.js";import"./clsx-0839fdbe.js";import"./spinner-6592412a.js";const O={title:"Components/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Button component supporting primary, outline, and link variants, along with icon, size, and disabled options."}}},args:{size:"default",disabled:!1},argTypes:{disabled:{control:"boolean"},loading:{control:"boolean"},variant:{control:"radio",options:["primary","outline","link"]},size:{control:"radio",options:["sm","default","lg"]},onClick:{action:"clicked"}}},a={args:{children:"Button",variant:"primary"}},s={render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(t,{...e,children:"Primary"}),n.jsx(t,{...e,variant:"outline",children:"Outline"}),n.jsx(t,{...e,variant:"link",children:"Link"})]})},r={render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[n.jsx(t,{...e,size:"sm",children:"Small"}),n.jsx(t,{...e,size:"default",children:"Default"}),n.jsx(t,{...e,size:"lg",children:"Large"})]})},o={args:{disabled:!0},render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.jsx(t,{...e,children:"Primary"}),n.jsx(t,{...e,variant:"outline",children:"Outline"}),n.jsx(t,{...e,variant:"link",children:"Link"})]})},l={render:e=>n.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[n.jsx(t,{...e,icon:n.jsx(i,{})}),n.jsx(t,{...e,variant:"outline",icon:n.jsx(i,{})}),n.jsx(t,{...e,variant:"link",icon:n.jsx(i,{})}),n.jsx(t,{...e,icon:n.jsx(i,{}),children:"With Text"}),n.jsx(t,{...e,variant:"outline",icon:n.jsx(i,{}),children:"With Text"}),n.jsx(t,{...e,variant:"link",icon:n.jsx(i,{}),children:"With Text"})]})},c={args:{loading:!0},render:e=>n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,size:"sm",children:"Small"}),n.jsx(t,{...e,size:"default",children:"Default"}),n.jsx(t,{...e,size:"lg",children:"Large"})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,variant:"primary",children:"Primary"}),n.jsx(t,{...e,variant:"outline",children:"Outline"}),n.jsx(t,{...e,variant:"link",children:"Link"})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,size:"default",icon:n.jsx(i,{})}),n.jsx(t,{...e,size:"lg",icon:n.jsx(i,{})})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(t,{...e,size:"default",icon:n.jsx(i,{}),children:"With Text"}),n.jsx(t,{...e,size:"lg",icon:n.jsx(i,{}),children:"Large With Text"})]}),n.jsx("div",{className:"flex items-center gap-4",children:n.jsx(t,{...e,size:"default",disabled:!0,children:"Disabled + Loading"})})]})};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,p,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,v,B;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(B=(v=r.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var j,h,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(h=o.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var z,k,L;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(k=l.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var S,y,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const P=["Default","Variants","Sizes","DisabledStates","WithIcon","LoadingStates"];export{a as Default,o as DisabledStates,c as LoadingStates,r as Sizes,s as Variants,l as WithIcon,P as __namedExportsOrder,O as default};
