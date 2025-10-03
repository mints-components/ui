import{j as e,r as b}from"./iframe-DokezX88.js";import{B as c}from"./button-EMhmQWRT.js";import{i as C,I as d}from"./waypoints-wH3Somc0.js";import{c as h}from"./clsx-B-dksMZM.js";import"./spinner-DFgKuY17.js";function s({variant:a="primary",size:o="default",closable:n=!1,onClose:m,className:u,children:p,...g}){const x={primary:"bg-zinc-100 text-zinc-900 dark:bg-zinc-800/80 dark:text-zinc-100",outline:"bg-white text-zinc-900 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700/80",danger:"bg-red-50 text-red-900 border border-red-200 dark:bg-red-950/60 dark:text-red-100 dark:border-red-700/80",warning:"bg-yellow-50 text-yellow-900 border border-yellow-200 dark:bg-yellow-900/40 dark:text-yellow-100 dark:border-yellow-700/80",success:"bg-green-50 text-green-900 border border-green-200 dark:bg-green-950/60 dark:text-green-100 dark:border-green-700/80"}[a],f="flex items-center rounded-xl transition-colors shadow-sm dark:shadow-lg",v={sm:"text-sm px-3 py-2",default:"text-base px-4 py-3",lg:"text-lg px-5 py-4"}[o];return e.jsxs("div",{className:h(f,x,v,u),...g,children:[e.jsx("span",{className:"flex-1",children:p}),n&&e.jsx(c,{icon:e.jsx(C,{}),size:"xs",variant:"link",type:"button","aria-label":"Close",onClick:m})]})}s.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'outline'
| 'danger'
| 'warning'
| 'success'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const w={title:"Components/Callout",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A flexible Callout component for displaying prominent inline messages or alerts. Supports primary, outline, danger, warning, and success variants, as well as icon, size, and closable options. Designed for both light and dark themes."}}},argTypes:{variant:{control:"radio",options:["primary","outline","danger","warning","success"]},size:{control:"radio",options:["sm","default","lg"]},closable:{control:"boolean"},onClose:{action:"closed"}},args:{variant:"primary",size:"default",closable:!1}},r={render:a=>e.jsx(s,{...a,children:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(d,{size:20}),"This is a basic callout."]})})},l={render:a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{...a,variant:"primary",children:[e.jsx("span",{className:"mr-1.5",children:"ℹ️"}),"Primary variant"]}),e.jsxs(s,{...a,variant:"outline",children:[e.jsx("span",{className:"mr-1.5",children:"📦"}),"Outline variant"]}),e.jsxs(s,{...a,variant:"danger",children:[e.jsx("span",{className:"mr-1.5",children:"❌"}),"Danger variant"]}),e.jsxs(s,{...a,variant:"warning",children:[e.jsx("span",{className:"mr-1.5",children:"⚠️"}),"Warning variant"]}),e.jsxs(s,{...a,variant:"success",children:[e.jsx("span",{className:"mr-1.5",children:"✅"}),"Success variant"]})]})},t={render:a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{...a,size:"sm",children:[e.jsx("span",{className:"mr-1.5",children:"🔹"}),"Small size"]}),e.jsxs(s,{...a,size:"default",children:[e.jsx("span",{className:"mr-1.5",children:"🔸"}),"Default size"]}),e.jsxs(s,{...a,size:"lg",children:[e.jsx("span",{className:"mr-1.5",children:"🔷"}),"Large size"]})]})},i={render:a=>{const[o,n]=b.useState(!0);return o?e.jsx(s,{...a,closable:!0,onClose:()=>n(!1),children:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(d,{size:20}),"This callout can be closed by clicking ×."]})}):e.jsx(c,{variant:"link",onClick:()=>n(!0),children:"Show Callout"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Callout {...args}>
      <span className="flex items-center gap-1">
        <Info size={20} />
        This is a basic callout.
      </span>
    </Callout>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Callout {...args} variant="primary">
        <span className="mr-1.5">ℹ️</span>
        Primary variant
      </Callout>
      <Callout {...args} variant="outline">
        <span className="mr-1.5">📦</span>
        Outline variant
      </Callout>
      <Callout {...args} variant="danger">
        <span className="mr-1.5">❌</span>
        Danger variant
      </Callout>
      <Callout {...args} variant="warning">
        <span className="mr-1.5">⚠️</span>
        Warning variant
      </Callout>
      <Callout {...args} variant="success">
        <span className="mr-1.5">✅</span>
        Success variant
      </Callout>
    </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Callout {...args} size="sm">
        <span className="mr-1.5">🔹</span>
        Small size
      </Callout>
      <Callout {...args} size="default">
        <span className="mr-1.5">🔸</span>
        Default size
      </Callout>
      <Callout {...args} size="lg">
        <span className="mr-1.5">🔷</span>
        Large size
      </Callout>
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return open ? <Callout {...args} closable onClose={() => setOpen(false)}>
        <span className="flex items-center gap-1">
          <Info size={20} />
          This callout can be closed by clicking ×.
        </span>
      </Callout> : <Button variant="link" onClick={() => setOpen(true)}>
        Show Callout
      </Button>;
  }
}`,...i.parameters?.docs?.source}}};const S=["Default","Variants","Sizes","Closable"];export{i as Closable,r as Default,t as Sizes,l as Variants,S as __namedExportsOrder,w as default};
