import{j as e,r as l}from"./iframe-DuJZxvSi.js";import{c as g}from"./clsx-B-dksMZM.js";const h={sm:{track:"w-9 h-5",knob:"w-4 h-4",translate:"translate-x-4"},default:{track:"w-11 h-6",knob:"w-5 h-5",translate:"translate-x-5"},lg:{track:"w-14 h-8",knob:"w-7 h-7",translate:"translate-x-6"}};function t({size:s="default",checked:a,onChange:n,disabled:r,className:p,...f}){const c=h[s];return e.jsx("button",{type:"button",role:"switch","aria-checked":a,disabled:r,tabIndex:r?-1:0,className:g("inline-flex items-center rounded-full transition-colors duration-200 focus:outline-none",c.track,a?"bg-zinc-900 dark:bg-zinc-600":"bg-zinc-300 dark:bg-zinc-400",r?"opacity-50 cursor-not-allowed":"cursor-pointer focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2",p),onClick:()=>{r||n(!a)},...f,children:e.jsx("span",{className:g("inline-block bg-white rounded-full shadow border border-zinc-200 transition-all duration-200",c.knob,a?c.translate:"translate-x-0"),style:{marginLeft:"2px",marginRight:"2px"}})})}t.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const S={title:"Components/Switch",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A simple Switch component supporting size and disabled props."}}},args:{size:"default",disabled:!1,checked:!1},argTypes:{disabled:{control:"boolean"},checked:{control:"boolean"},size:{control:"radio",options:["sm","default","lg"]},onChange:{action:"changed"}}},o={args:{checked:!1,size:"default"}},i={render:s=>{const[a,n]=l.useState(!1),[r,p]=l.useState(!1),[f,c]=l.useState(!1);return e.jsxs("div",{className:"flex flex-wrap gap-6 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{...s,size:"sm",checked:a,onChange:n}),e.jsx("span",{className:"dark:text-white",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{...s,size:"default",checked:r,onChange:p}),e.jsx("span",{className:"dark:text-white",children:"Default"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{...s,size:"lg",checked:f,onChange:c}),e.jsx("span",{className:"dark:text-white",children:"Large"})]})]})}},d={render:s=>{const[a,n]=l.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[e.jsx(t,{...s,checked:a,onChange:n}),e.jsx("span",{className:"dark:text-white",children:a?"On":"Off"})]})}},m={args:{disabled:!0},render:s=>e.jsxs("div",{className:"flex gap-6",children:[e.jsx(t,{...s,checked:!1}),e.jsx(t,{...s,checked:!0})]})},u={render:s=>{const[a,n]=l.useState(s.checked??!1);return e.jsx(t,{...s,checked:a,onChange:n})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: 'default'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [sm, setSm] = useState(false);
    const [md, setMd] = useState(false);
    const [lg, setLg] = useState(false);
    return <div className="flex flex-wrap gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <Switch {...args} size="sm" checked={sm} onChange={setSm} />
          <span className="dark:text-white">Small</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Switch {...args} size="default" checked={md} onChange={setMd} />
          <span className="dark:text-white">Default</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Switch {...args} size="lg" checked={lg} onChange={setLg} />
          <span className="dark:text-white">Large</span>
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(false);
    return <div className="flex flex-col gap-4 items-center">
        <Switch {...args} checked={on} onChange={setOn} />
        <span className="dark:text-white">{on ? 'On' : 'Off'}</span>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="flex gap-6">
      <Switch {...args} checked={false} />
      <Switch {...args} checked={true} />
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.checked ?? false);
    return <Switch {...args} checked={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}};const w=["Default","Sizes","Controlled","Disabled","Playground"];export{d as Controlled,o as Default,m as Disabled,u as Playground,i as Sizes,w as __namedExportsOrder,S as default};
