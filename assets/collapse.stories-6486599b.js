import{j as n}from"./jsx-runtime-9bc08dc0.js";import{r as y}from"./index-87df5591.js";import{c as t}from"./clsx-0839fdbe.js";function s({open:e,onOpenChange:r,disabled:a=!1,header:o,children:C,className:w,...j}){return n.jsxs("div",{className:t("rounded-lg border border-zinc-200 shadow-sm bg-white transition-colors",a&&"opacity-50 cursor-not-allowed",w),...j,children:[n.jsxs("div",{className:t("flex items-center justify-between px-5 py-3 text-base font-medium select-none rounded-lg transition-colors",a?"cursor-not-allowed text-zinc-400 bg-zinc-100":"cursor-pointer hover:bg-zinc-50 active:bg-zinc-100"),style:{userSelect:"none"},role:"button",tabIndex:a?-1:0,"aria-expanded":e,"aria-controls":"collapse-content",onClick:()=>!a&&r(!e),onKeyDown:d=>{a||(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),r(!e))},children:[n.jsx("span",{children:o}),n.jsx("svg",{className:t("w-5 h-5 ml-2 transition-transform duration-200",e?"rotate-90":"rotate-0","text-zinc-400"),viewBox:"0 0 20 20",fill:"none",children:n.jsx("path",{d:"M7 7l3 3 3-3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),n.jsx("div",{id:"collapse-content",className:t("overflow-hidden transition-all duration-200",e?"max-h-96 opacity-100":"max-h-0 opacity-0"),"aria-hidden":!e,children:n.jsx("div",{className:"px-5 py-3",children:C})})]})}s.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},header:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/Collapse",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Collapse component supporting controlled open state, custom header, and disabled options."}}},args:{disabled:!1,header:"Collapse Header"},argTypes:{disabled:{control:"boolean"},open:{control:"boolean"},header:{control:"text"},onOpenChange:{action:"onOpenChange"}}},l={args:{open:!1,header:"Click to expand",children:"This is the collapsible content."},render:e=>{const[r,a]=y.useState(e.open);return n.jsx(s,{...e,open:r,onOpenChange:a})}},i={args:{open:!1,header:"Disabled state",disabled:!0,children:"This collapse is disabled."},render:e=>n.jsx(s,{...e})},c={render:e=>{const[r,a]=y.useState(null);return n.jsx("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[1,2,3].map(o=>n.jsx(s,{...e,header:`Collapse Item ${o}`,open:r===o,onOpenChange:()=>a(r===o?null:o),children:`This is the content of panel ${o}.`},o))})}};var p,u,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    open: false,
    header: 'Click to expand',
    children: 'This is the collapsible content.'
  },
  render: args => {
    const [open, setOpen] = useState(args.open);
    return <Collapse {...args} open={open} onOpenChange={setOpen} />;
  }
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,g,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    open: false,
    header: 'Disabled state',
    disabled: true,
    children: 'This collapse is disabled.'
  },
  render: args => <Collapse {...args} />
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,b,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState<number | null>(null);
    return <div className="flex flex-col gap-4 w-full max-w-md">
        {[1, 2, 3].map(i => <Collapse key={i} {...args} header={\`Collapse Item \${i}\`} open={active === i} onOpenChange={() => setActive(active === i ? null : i)}>
            {\`This is the content of panel \${i}.\`}
          </Collapse>)}
      </div>;
  }
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const R=["Default","Disabled","Accordion"];export{c as Accordion,l as Default,i as Disabled,R as __namedExportsOrder,O as default};
