import{r as n,j as a}from"./iframe-dC1saC9w.js";import{c as d}from"./clsx-B-dksMZM.js";import{B as w}from"./button-DUVqhzzm.js";import{a as C}from"./waypoints-DSHzG6H_.js";import"./spinner-ByZ86-gy.js";function l({value:s,onChange:t,options:r,placeholder:f="Please select",disabled:o=!1,className:b,size:v="default"}){const[i,x]=n.useState(!1),h=n.useRef(null),c=r.find(e=>e.value===s);n.useEffect(()=>{if(!i)return;const e=z=>{h.current&&!h.current.contains(z.target)&&x(!1)};return window.addEventListener("mousedown",e),()=>window.removeEventListener("mousedown",e)},[i]);function S(e,z){z.disabled||(t(e),x(!1))}return a.jsxs("div",{ref:h,className:d("relative",b),children:[a.jsxs(w,{type:"button",variant:"outline",size:v,className:d("w-full justify-between font-medium transition-colors",i?"border-zinc-900 bg-zinc-50 dark:bg-zinc-800":"border-zinc-300 bg-white dark:bg-zinc-900",!c&&"text-zinc-400",o&&"bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-300 dark:text-zinc-500 cursor-not-allowed opacity-60"),style:c?void 0:{fontWeight:400},disabled:o,onClick:()=>!o&&x(e=>!e),"aria-haspopup":"listbox","aria-expanded":i,children:[a.jsx("span",{className:d("truncate flex-1 text-left",!c&&"text-zinc-400",o&&"text-zinc-300 dark:text-zinc-500"),children:c?c.label:f}),a.jsx(C,{size:20})]}),i&&!o&&a.jsx("ul",{className:d("absolute z-10 mt-1 w-full border shadow-lg rounded-md max-h-60 overflow-auto animate-fade-in","bg-white dark:bg-zinc-800","border-zinc-200 dark:border-zinc-700"),role:"listbox",children:r.map(e=>a.jsx("li",{className:d("px-4 py-2 select-none",e.disabled?"text-zinc-300 dark:text-zinc-600 bg-transparent cursor-not-allowed":"cursor-pointer dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700",e.value===s&&"bg-zinc-100 dark:bg-zinc-700 font-medium"),onClick:()=>S(e.value,e),"aria-selected":e.value===s,role:"option","aria-disabled":e.disabled,children:e.label},e.value))})]})}l.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: SelectValue) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Please select'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"ButtonProps['size']",raw:"ButtonProps['size']"},description:"",defaultValue:{value:"'default'",computed:!1}}}};const T={title:"Components/Select",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Select component supporting outline style, size, icon, disabled, and placeholder options."}}},args:{size:"default",disabled:!1,placeholder:"Select a fruit",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Disabled",value:"disabled",disabled:!0}]},argTypes:{disabled:{control:"boolean"},size:{control:"radio",options:["sm","default","lg"]},onChange:{action:"onChange"}}},u={render:s=>{const[t,r]=n.useState("");return a.jsx(l,{...s,value:t,onChange:r})}},m={render:s=>{const[t,r]=n.useState(""),[f,o]=n.useState(""),[b,v]=n.useState("");return a.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[a.jsx(l,{...s,size:"sm",value:t,onChange:r}),a.jsx(l,{...s,size:"default",value:f,onChange:o}),a.jsx(l,{...s,size:"lg",value:b,onChange:v})]})}},p={args:{disabled:!0},render:s=>a.jsx("div",{className:"flex flex-wrap gap-4",children:a.jsx(l,{...s,value:"",onChange:()=>{}})})},g={render:s=>{const[t,r]=n.useState("banana");return a.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[a.jsx(l,{...s,value:t,onChange:r}),a.jsxs("p",{className:"dark:text-white",children:["Selected value: ",a.jsx("b",{children:t||"None"})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <Select {...args} value={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Select {...args} value="" onChange={() => {}} />
    </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('banana');
    return <div className="flex flex-col gap-4 items-start">
        <Select {...args} value={value} onChange={setValue} />
        <p className="dark:text-white">
          Selected value: <b>{value || 'None'}</b>
        </p>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};const q=["Default","Sizes","Disabled","Controlled"];export{g as Controlled,u as Default,p as Disabled,m as Sizes,q as __namedExportsOrder,T as default};
