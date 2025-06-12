import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as n}from"./index-87df5591.js";import{b as P}from"./index-44ce40c8.js";import{c as i}from"./clsx-0839fdbe.js";import{B as W}from"./button-84d48078.js";import"./spinner-6592412a.js";function l({value:s,onChange:t,options:r,placeholder:v="Please select",disabled:d=!1,className:x,size:h="default",icon:D}){const[c,b]=n.useState(!1),S=n.useRef(null),o=r.find(a=>a.value===s);n.useEffect(()=>{if(!c)return;const a=z=>{S.current&&!S.current.contains(z.target)&&b(!1)};return window.addEventListener("mousedown",a),()=>window.removeEventListener("mousedown",a)},[c]);function M(a,z){z.disabled||(t(a),b(!1))}return e.jsxs("div",{ref:S,className:i("relative",x),children:[e.jsxs(W,{type:"button",variant:"outline",size:h,icon:D,className:i("w-full justify-between font-medium",c?"border-zinc-900 bg-zinc-50 dark:bg-zinc-800":"border-zinc-300 bg-white dark:bg-zinc-900",!o&&"text-zinc-400"),style:o?void 0:{fontWeight:400},disabled:d,onClick:()=>!d&&b(a=>!a),"aria-haspopup":"listbox","aria-expanded":c,children:[e.jsx("span",{className:i("truncate flex-1 text-left",!o&&"text-zinc-400"),children:o?o.label:v}),e.jsx("span",{className:i("ml-2 w-4 h-4 flex items-center",o?"text-zinc-500":"text-zinc-400"),children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M5 8L10 13L15 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),c&&e.jsx("ul",{className:i("absolute z-10 mt-1 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-lg rounded-md max-h-60 overflow-auto animate-fade-in"),role:"listbox",children:r.map(a=>e.jsx("li",{className:i("px-4 py-2 cursor-pointer select-none",a.disabled?"opacity-40 cursor-not-allowed":"hover:bg-zinc-100 dark:hover:bg-zinc-800",a.value===s&&"bg-zinc-100 dark:bg-zinc-800 font-medium"),onClick:()=>M(a.value,a),"aria-selected":a.value===s,role:"option","aria-disabled":a.disabled,children:a.label},a.value))})]})}l.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Please select'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"ButtonProps['size']",raw:"ButtonProps['size']"},description:"",defaultValue:{value:"'default'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const K={title:"Components/Select",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Select component supporting outline style, size, icon, disabled, and placeholder options."}}},args:{size:"default",disabled:!1,placeholder:"Select a fruit",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Disabled",value:"disabled",disabled:!0}]},argTypes:{disabled:{control:"boolean"},size:{control:"radio",options:["sm","default","lg"]},onChange:{action:"onChange"}}},u={render:s=>{const[t,r]=n.useState("");return e.jsx(l,{...s,value:t,onChange:r})}},p={render:s=>{const[t,r]=n.useState(""),[v,d]=n.useState(""),[x,h]=n.useState("");return e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(l,{...s,size:"sm",value:t,onChange:r}),e.jsx(l,{...s,size:"default",value:v,onChange:d}),e.jsx(l,{...s,size:"lg",value:x,onChange:h})]})}},m={args:{disabled:!0},render:s=>e.jsx("div",{className:"flex flex-wrap gap-4",children:e.jsx(l,{...s,value:"",onChange:()=>{}})})},g={render:s=>{const[t,r]=n.useState("");return e.jsx(l,{...s,icon:e.jsx(P,{}),value:t,onChange:r})}},f={render:s=>{const[t,r]=n.useState("banana");return e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(l,{...s,value:t,onChange:r}),e.jsxs("div",{children:["Selected value: ",e.jsx("b",{children:t||"None"})]})]})}};var j,w,C;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <Select {...args} value={value} onChange={setValue} />;
  }
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var y,N,k;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [sm, setSm] = useState('');
    const [md, setMd] = useState('');
    const [lg, setLg] = useState('');
    return <div className="flex flex-wrap gap-4 items-center">
        <Select {...args} size="sm" value={sm} onChange={setSm} />
        <Select {...args} size="default" value={md} onChange={setMd} />
        <Select {...args} size="lg" value={lg} onChange={setLg} />
      </div>;
  }
}`,...(k=(N=p.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var V,L,T;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Select {...args} value="" onChange={() => {}} />
    </div>
}`,...(T=(L=m.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var q,A,R;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <Select {...args} icon={<AiFillApple />} value={value} onChange={setValue} />;
  }
}`,...(R=(A=g.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var B,E,O;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('banana');
    return <div className="flex flex-col gap-4 items-start">
        <Select {...args} value={value} onChange={setValue} />
        <div>
          Selected value: <b>{value || 'None'}</b>
        </div>
      </div>;
  }
}`,...(O=(E=f.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const Q=["Default","Sizes","Disabled","WithIcon","Controlled"];export{f as Controlled,u as Default,m as Disabled,p as Sizes,g as WithIcon,Q as __namedExportsOrder,K as default};
