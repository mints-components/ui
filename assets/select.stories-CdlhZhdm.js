import{r as n,j as e}from"./iframe-C7E9HDRz.js";import{b as j}from"./index-BbMGqUpm.js";import{c as d}from"./clsx-B-dksMZM.js";import{B as y}from"./button-CqOQd_pX.js";import{a as N}from"./waypoints-D38rrZvl.js";import"./spinner-D_7DnzJa.js";function l({value:s,onChange:t,options:r,placeholder:v="Please select",disabled:o=!1,className:x,size:b="default",icon:w}){const[i,h]=n.useState(!1),z=n.useRef(null),c=r.find(a=>a.value===s);n.useEffect(()=>{if(!i)return;const a=S=>{z.current&&!z.current.contains(S.target)&&h(!1)};return window.addEventListener("mousedown",a),()=>window.removeEventListener("mousedown",a)},[i]);function C(a,S){S.disabled||(t(a),h(!1))}return e.jsxs("div",{ref:z,className:d("relative",x),children:[e.jsxs(y,{type:"button",variant:"outline",size:b,icon:w,className:d("w-full justify-between font-medium transition-colors",i?"border-zinc-900 bg-zinc-50 dark:bg-zinc-800":"border-zinc-300 bg-white dark:bg-zinc-900",!c&&"text-zinc-400",o&&"bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-300 dark:text-zinc-500 cursor-not-allowed opacity-60"),style:c?void 0:{fontWeight:400},disabled:o,onClick:()=>!o&&h(a=>!a),"aria-haspopup":"listbox","aria-expanded":i,children:[e.jsx("span",{className:d("truncate flex-1 text-left",!c&&"text-zinc-400",o&&"text-zinc-300 dark:text-zinc-500"),children:c?c.label:v}),e.jsx(N,{size:20})]}),i&&!o&&e.jsx("ul",{className:d("absolute z-10 mt-1 w-full border shadow-lg rounded-md max-h-60 overflow-auto animate-fade-in","bg-white dark:bg-zinc-800","border-zinc-200 dark:border-zinc-700"),role:"listbox",children:r.map(a=>e.jsx("li",{className:d("px-4 py-2 select-none",a.disabled?"text-zinc-300 dark:text-zinc-600 bg-transparent cursor-not-allowed":"cursor-pointer dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700",a.value===s&&"bg-zinc-100 dark:bg-zinc-700 font-medium"),onClick:()=>C(a.value,a),"aria-selected":a.value===s,role:"option","aria-disabled":a.disabled,children:a.label},a.value))})]})}l.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Please select'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"ButtonProps['size']",raw:"ButtonProps['size']"},description:"",defaultValue:{value:"'default'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const D={title:"Components/Select",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Select component supporting outline style, size, icon, disabled, and placeholder options."}}},args:{size:"default",disabled:!1,placeholder:"Select a fruit",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Disabled",value:"disabled",disabled:!0}]},argTypes:{disabled:{control:"boolean"},size:{control:"radio",options:["sm","default","lg"]},onChange:{action:"onChange"}}},u={render:s=>{const[t,r]=n.useState("");return e.jsx(l,{...s,value:t,onChange:r})}},p={render:s=>{const[t,r]=n.useState(""),[v,o]=n.useState(""),[x,b]=n.useState("");return e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(l,{...s,size:"sm",value:t,onChange:r}),e.jsx(l,{...s,size:"default",value:v,onChange:o}),e.jsx(l,{...s,size:"lg",value:x,onChange:b})]})}},m={args:{disabled:!0},render:s=>e.jsx("div",{className:"flex flex-wrap gap-4",children:e.jsx(l,{...s,value:"",onChange:()=>{}})})},g={render:s=>{const[t,r]=n.useState("");return e.jsx(l,{...s,icon:e.jsx(j,{}),value:t,onChange:r})}},f={render:s=>{const[t,r]=n.useState("banana");return e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(l,{...s,value:t,onChange:r}),e.jsxs("p",{className:"dark:text-white",children:["Selected value: ",e.jsx("b",{children:t||"None"})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <Select {...args} value={value} onChange={setValue} />;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Select {...args} value="" onChange={() => {}} />
    </div>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <Select {...args} icon={<AiFillApple />} value={value} onChange={setValue} />;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('banana');
    return <div className="flex flex-col gap-4 items-start">
        <Select {...args} value={value} onChange={setValue} />
        <p className="dark:text-white">
          Selected value: <b>{value || 'None'}</b>
        </p>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const E=["Default","Sizes","Disabled","WithIcon","Controlled"];export{f as Controlled,u as Default,m as Disabled,p as Sizes,g as WithIcon,E as __namedExportsOrder,D as default};
