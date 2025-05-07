import{j as e}from"./jsx-runtime-9bc08dc0.js";import{c as i}from"./clsx-0839fdbe.js";function s({children:r,variant:l="solid",orientation:N="horizontal",className:c}){const m=l==="solid"?"border-zinc-200":"border-dashed border-zinc-200";return N==="vertical"?e.jsx("span",{className:i("inline-block w-px h-4 align-middle mx-2",l==="solid"?"bg-zinc-200":"border-l border-dashed border-zinc-200",c)}):e.jsxs("div",{className:i("flex items-center w-full text-sm text-zinc-900 my-2",c),children:[e.jsx("div",{className:i("flex-grow border-t",m)}),r&&e.jsx("span",{className:"mx-3 text-sm text-zinc-500 whitespace-nowrap",children:r}),e.jsx("div",{className:i("flex-grow border-t",m)})]})}s.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"Components/Divider",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Divider component used to separate content, supporting optional children (text), horizontal or vertical orientation, and variants (solid, dashed)."}}},args:{variant:"solid",orientation:"horizontal"},argTypes:{variant:{control:"radio",options:["solid","dashed"]},orientation:{control:"radio",options:["horizontal","vertical"]}}},a=()=>e.jsx("p",{children:"In today' fast-paced digital world, staying connected and informed is more important than ever. Whether through social media, online news, or virtual meetings, technology continues to shape the way we communicate and interact. From remote work to e-learning, the convenience of digital tools has transformed our daily routines, making it easier to stay productive and engaged no matter where we are."}),n={args:{},render:r=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx(a,{}),e.jsx(s,{...r}),e.jsx(a,{})]})},t={args:{},render:r=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx(a,{}),e.jsx(s,{...r,children:"Text"}),e.jsx(a,{})]})},o={render:r=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx(a,{}),e.jsx(s,{...r,children:"Solid Divider"}),e.jsx(a,{}),e.jsx(s,{...r,variant:"dashed",children:"Dashed Divider"}),e.jsx(a,{})]})},d={args:{orientation:"vertical"},render:r=>e.jsxs("div",{children:[e.jsx("span",{children:"Left"}),e.jsx(s,{...r}),e.jsx("span",{children:"Right"})]})};var p,x,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="max-w-2xl">
      <Paragraph />
      <Divider {...args} />
      <Paragraph />
    </div>
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,g,u;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="max-w-2xl">
      <Paragraph />
      <Divider {...args}>Text</Divider>
      <Paragraph />
    </div>
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var j,f,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div className="max-w-2xl">
      <Paragraph />
      <Divider {...args}>Solid Divider</Divider>
      <Paragraph />
      <Divider {...args} variant="dashed">
        Dashed Divider
      </Divider>
      <Paragraph />
    </div>
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var D,y,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <div>
      <span>Left</span>
      <Divider {...args} />
      <span>Right</span>
    </div>
}`,...(z=(y=d.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};const S=["Basic","WithText","Variants","VerticalDivider"];export{n as Basic,o as Variants,d as VerticalDivider,t as WithText,S as __namedExportsOrder,P as default};
