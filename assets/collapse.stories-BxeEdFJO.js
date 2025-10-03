import{j as n,r as m}from"./iframe-DokezX88.js";import{c as o}from"./clsx-B-dksMZM.js";import{b as C,d as z}from"./waypoints-wH3Somc0.js";function r({open:e,onOpenChange:s,disabled:a=!1,header:t,children:f,className:b,minimal:u=!1,iconPosition:g="left",...v}){const x=e?n.jsx(C,{size:20,className:"transition-transform duration-200"}):n.jsx(z,{size:20,className:"transition-transform duration-200"});return n.jsxs("div",{className:o(u?"bg-transparent":"bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm dark:shadow-zinc-950/40 rounded","w-full",b),...v,children:[n.jsxs("div",{className:o("flex items-center gap-3 w-full select-none rounded px-4",u?["py-2 text-base font-semibold",a?"text-zinc-400 cursor-not-allowed opacity-60":"text-zinc-900 dark:text-zinc-100 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-zinc-200 dark:focus-visible:ring-zinc-700"]:["px-6 py-4 text-base font-semibold transition-colors outline-none",a?"bg-zinc-50 dark:bg-zinc-900/40 text-zinc-400 cursor-not-allowed":"bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 cursor-pointer hover:bg-zinc-50 active:bg-zinc-100 dark:hover:bg-zinc-800 dark:active:bg-zinc-800/80"]),style:{userSelect:"none"},role:"button",tabIndex:a?-1:0,"aria-expanded":e,"aria-controls":"collapse-content",onClick:()=>{a||s(!e)},onKeyDown:h=>{a||(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),s(!e))},children:[g==="left"&&n.jsx("span",{className:o("flex items-center",a?"text-zinc-300":"text-zinc-400 dark:text-zinc-500"),children:x}),n.jsx("span",{className:"flex-1",children:t}),g==="right"&&n.jsx("span",{className:o("flex items-center",a?"text-zinc-300":"text-zinc-400 dark:text-zinc-500"),children:x})]}),n.jsx("div",{id:"collapse-content",className:o("overflow-hidden transition-all duration-200 ease-in-out",e?"max-h-[9999px] opacity-100":"max-h-0 opacity-0"),"aria-hidden":!e,children:n.jsx("div",{className:o(u?["pl-8 pr-4 py-2 flex flex-col gap-2"]:["px-6 py-4 text-zinc-900 dark:text-zinc-100 dark:bg-zinc-900",e&&"border-t border-zinc-100 dark:border-zinc-700"]),children:f})})]})}r.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},header:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},minimal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'left'",computed:!1}}}};const O={title:"Components/Collapse",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Collapse component supporting controlled open state, custom header, and disabled options."}}},args:{disabled:!1,minimal:!1,header:"Collapse Header",iconPosition:"left"},argTypes:{disabled:{control:"boolean"},open:{control:"boolean"},header:{control:"text"},minimal:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},i={args:{open:!1,header:"Click to expand",children:"This is the collapsible content."},render:e=>{const[s,a]=m.useState(e.open);return n.jsx(r,{...e,open:s,onOpenChange:a})}},l={args:{open:!1,header:"Disabled state",disabled:!0,children:"This collapse is disabled."},render:e=>n.jsx(r,{...e})},c={render:e=>{const[s,a]=m.useState(null);return n.jsx("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[1,2,3].map(t=>n.jsx(r,{...e,header:`Collapse Item ${t}`,open:s===t,onOpenChange:()=>a(s===t?null:t),children:`This is the content of panel ${t}.`},t))})}},d={args:{open:!1,minimal:!0,header:"Minimal collapse",children:n.jsx("span",{className:"dark:text-white",children:"This is minimal styled collapsible content."})},render:e=>{const[s,a]=m.useState(e.open);return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx(r,{...e,open:s,onOpenChange:a}),n.jsx(r,{...e,disabled:!0})]})}},p={args:{open:!1,children:n.jsx("span",{className:"dark:text-white",children:"This is content."})},render:e=>{const[s,a]=m.useState(e.open);return n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsx(r,{...e,header:"Left",open:s,onOpenChange:a}),n.jsx(r,{...e,header:"Right",iconPosition:"right",open:s,onOpenChange:a}),n.jsx(r,{...e,header:"None",iconPosition:"none",open:s,onOpenChange:a})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    header: 'Click to expand',
    children: 'This is the collapsible content.'
  },
  render: args => {
    const [open, setOpen] = useState(args.open);
    return <Collapse {...args} open={open} onOpenChange={setOpen} />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    header: 'Disabled state',
    disabled: true,
    children: 'This collapse is disabled.'
  },
  render: args => <Collapse {...args} />
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState<number | null>(null);
    return <div className="flex flex-col gap-4 w-full max-w-md">
        {[1, 2, 3].map(i => <Collapse key={i} {...args} header={\`Collapse Item \${i}\`} open={active === i} onOpenChange={() => setActive(active === i ? null : i)}>
            {\`This is the content of panel \${i}.\`}
          </Collapse>)}
      </div>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    minimal: true,
    header: 'Minimal collapse',
    children: <span className="dark:text-white">
        This is minimal styled collapsible content.
      </span>
  },
  render: args => {
    const [open, setOpen] = useState(args.open);
    return <div className="flex flex-col gap-4">
        <Collapse {...args} open={open} onOpenChange={setOpen} />
        <Collapse {...args} disabled />
      </div>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    children: <span className="dark:text-white">This is content.</span>
  },
  render: args => {
    const [open, setOpen] = useState(args.open);
    return <div className="flex flex-col gap-4">
        <Collapse {...args} header="Left" open={open} onOpenChange={setOpen} />
        <Collapse {...args} header="Right" iconPosition="right" open={open} onOpenChange={setOpen} />
        <Collapse {...args} header="None" iconPosition="none" open={open} onOpenChange={setOpen} />
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const j=["Default","Disabled","Accordion","Minimal","IconPosition"];export{c as Accordion,i as Default,l as Disabled,p as IconPosition,d as Minimal,j as __namedExportsOrder,O as default};
