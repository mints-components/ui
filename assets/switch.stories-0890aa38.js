import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as o}from"./index-87df5591.js";import{c as g}from"./clsx-0839fdbe.js";const T={sm:{track:"w-9 h-5",knob:"w-4 h-4",translate:"translate-x-4"},default:{track:"w-11 h-6",knob:"w-5 h-5",translate:"translate-x-5"},lg:{track:"w-14 h-8",knob:"w-7 h-7",translate:"translate-x-6"}};function n({size:s="default",checked:a,onChange:t,disabled:r,className:p,...f}){const c=T[s];return e.jsx("button",{type:"button",role:"switch","aria-checked":a,disabled:r,tabIndex:r?-1:0,className:g("inline-flex items-center rounded-full transition-colors duration-200 focus:outline-none",c.track,a?"bg-zinc-900":"bg-zinc-300 dark:bg-zinc-700",r?"opacity-50 cursor-not-allowed":"cursor-pointer focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2",p),onClick:()=>{r||t(!a)},...f,children:e.jsx("span",{className:g("inline-block bg-white rounded-full shadow border border-zinc-200 transition-all duration-200",c.knob,a?c.translate:"translate-x-0"),style:{marginLeft:"2px",marginRight:"2px"}})})}n.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const E={title:"Components/Switch",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A simple Switch component supporting size and disabled props."}}},args:{size:"default",disabled:!1,checked:!1},argTypes:{disabled:{control:"boolean"},checked:{control:"boolean"},size:{control:"radio",options:["sm","default","lg"]},onChange:{action:"changed"}}},l={args:{checked:!1,size:"default"}},i={render:s=>{const[a,t]=o.useState(!1),[r,p]=o.useState(!1),[f,c]=o.useState(!1);return e.jsxs("div",{className:"flex flex-wrap gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...s,size:"sm",checked:a,onChange:t}),e.jsx("span",{children:"Small"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...s,size:"default",checked:r,onChange:p}),e.jsx("span",{children:"Default"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...s,size:"lg",checked:f,onChange:c}),e.jsx("span",{children:"Large"})]})]})}},d={render:s=>{const[a,t]=o.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[e.jsx(n,{...s,checked:a,onChange:t}),e.jsx("span",{children:a?"On":"Off"})]})}},u={args:{disabled:!0},render:s=>e.jsxs("div",{className:"flex gap-6",children:[e.jsx(n,{...s,checked:!1}),e.jsx(n,{...s,checked:!0})]})},m={render:s=>{const[a,t]=o.useState(s.checked??!1);return e.jsx(n,{...s,checked:a,onChange:t})}};var h,x,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: 'default'
  }
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,v,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [sm, setSm] = useState(false);
    const [md, setMd] = useState(false);
    const [lg, setLg] = useState(false);
    return <div className="flex flex-wrap gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <Switch {...args} size="sm" checked={sm} onChange={setSm} />
          <span>Small</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Switch {...args} size="default" checked={md} onChange={setMd} />
          <span>Default</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Switch {...args} size="lg" checked={lg} onChange={setLg} />
          <span>Large</span>
        </div>
      </div>;
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,j,z;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(false);
    return <div className="flex flex-col gap-4 items-center">
        <Switch {...args} checked={on} onChange={setOn} />
        <span>{on ? 'On' : 'Off'}</span>
      </div>;
  }
}`,...(z=(j=d.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var y,C,N;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="flex gap-6">
      <Switch {...args} checked={false} />
      <Switch {...args} checked={true} />
    </div>
}`,...(N=(C=u.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var O,D,L;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.checked ?? false);
    return <Switch {...args} checked={value} onChange={setValue} />;
  }
}`,...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const M=["Default","Sizes","Controlled","Disabled","Playground"];export{d as Controlled,l as Default,u as Disabled,m as Playground,i as Sizes,M as __namedExportsOrder,E as default};
