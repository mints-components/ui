import{j as e,r as l}from"./iframe-DokezX88.js";import{S as s}from"./select-B85KzBoH.js";import"./clsx-B-dksMZM.js";import"./button-EMhmQWRT.js";import"./spinner-DFgKuY17.js";import"./waypoints-wH3Somc0.js";const b={title:"Components/Select",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Select component supporting outline style, size, icon, disabled, and placeholder options."}}},args:{size:"default",disabled:!1,placeholder:"Select a fruit",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Disabled",value:"disabled",disabled:!0}]},argTypes:{disabled:{control:"boolean"},size:{control:"radio",options:["sm","default","lg"]},onChange:{action:"onChange"}}},n={render:a=>{const[t,r]=l.useState("");return e.jsx(s,{...a,value:t,onChange:r})}},o={render:a=>{const[t,r]=l.useState(""),[u,i]=l.useState(""),[p,m]=l.useState("");return e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(s,{...a,size:"sm",value:t,onChange:r}),e.jsx(s,{...a,size:"default",value:u,onChange:i}),e.jsx(s,{...a,size:"lg",value:p,onChange:m})]})}},c={args:{disabled:!0},render:a=>e.jsx("div",{className:"flex flex-wrap gap-4",children:e.jsx(s,{...a,value:"",onChange:()=>{}})})},d={render:a=>{const[t,r]=l.useState("banana");return e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(s,{...a,value:t,onChange:r}),e.jsxs("p",{className:"dark:text-white",children:["Selected value: ",e.jsx("b",{children:t||"None"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <Select {...args} value={value} onChange={setValue} />;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Select {...args} value="" onChange={() => {}} />
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('banana');
    return <div className="flex flex-col gap-4 items-start">
        <Select {...args} value={value} onChange={setValue} />
        <p className="dark:text-white">
          Selected value: <b>{value || 'None'}</b>
        </p>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const C=["Default","Sizes","Disabled","Controlled"];export{d as Controlled,n as Default,c as Disabled,o as Sizes,C as __namedExportsOrder,b as default};
