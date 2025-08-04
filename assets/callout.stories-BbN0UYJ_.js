import{j as e,r as b}from"./iframe-D8N3RYSr.js";import{a as d}from"./index-cvm8qtC0.js";import{B as u}from"./button-BUxC6vhk.js";import{c as h}from"./clsx-B-dksMZM.js";import"./spinner-BvJ1cyDI.js";function n({variant:a="primary",size:o="default",closable:r=!1,onClose:p,icon:c,className:m,children:g,...x}){const f={primary:"bg-zinc-100 text-zinc-900 dark:bg-zinc-800/80 dark:text-zinc-100",outline:"bg-white text-zinc-900 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700/80",danger:"bg-red-50 text-red-900 border border-red-200 dark:bg-red-950/60 dark:text-red-100 dark:border-red-700/80",warning:"bg-yellow-50 text-yellow-900 border border-yellow-200 dark:bg-yellow-900/40 dark:text-yellow-100 dark:border-yellow-700/80",success:"bg-green-50 text-green-900 border border-green-200 dark:bg-green-950/60 dark:text-green-100 dark:border-green-700/80"}[a],v="flex items-center rounded-xl transition-colors shadow-sm dark:shadow-lg",C={sm:"text-sm px-3 py-2",default:"text-base px-4 py-3",lg:"text-lg px-5 py-4"}[o];return e.jsxs("div",{className:h(v,f,C,m),...x,children:[c&&e.jsx("span",{className:"flex items-center text-zinc-400 dark:text-zinc-400",children:c}),e.jsx("span",{className:"flex-1 ml-2",children:g}),r&&e.jsx(u,{variant:"link",type:"button","aria-label":"Close",className:"ml-2 text-zinc-400 hover:text-zinc-200 dark:text-zinc-400 dark:hover:text-white rounded-md text-lg font-bold leading-none transition-colors cursor-pointer",onClick:p,children:"×"})]})}n.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'outline'
| 'danger'
| 'warning'
| 'success'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const T={title:"Components/Callout",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A flexible Callout component for displaying prominent inline messages or alerts. Supports primary, outline, danger, warning, and success variants, as well as icon, size, and closable options. Designed for both light and dark themes."}}},argTypes:{variant:{control:"radio",options:["primary","outline","danger","warning","success"]},size:{control:"radio",options:["sm","default","lg"]},closable:{control:"boolean"},onClose:{action:"closed"}},args:{variant:"primary",size:"default",closable:!1}},s={render:a=>e.jsx(n,{...a,icon:e.jsx(d,{className:"w-5 h-5 text-zinc-600"}),children:"This is a basic callout."})},l={render:a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{...a,variant:"primary",icon:e.jsx("span",{children:"ℹ️"}),children:"Primary variant"}),e.jsx(n,{...a,variant:"outline",icon:e.jsx("span",{children:"📦"}),children:"Outline variant"}),e.jsx(n,{...a,variant:"danger",icon:e.jsx("span",{children:"❌"}),children:"Danger variant"}),e.jsx(n,{...a,variant:"warning",icon:e.jsx("span",{children:"⚠️"}),children:"Warning variant"}),e.jsx(n,{...a,variant:"success",icon:e.jsx("span",{children:"✅"}),children:"Success variant"})]})},t={render:a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{...a,size:"sm",icon:e.jsx("span",{children:"🔹"}),children:"Small size"}),e.jsx(n,{...a,size:"default",icon:e.jsx("span",{children:"🔸"}),children:"Default size"}),e.jsx(n,{...a,size:"lg",icon:e.jsx("span",{children:"🔷"}),children:"Large size"})]})},i={render:a=>{const[o,r]=b.useState(!0);return o?e.jsx(n,{...a,closable:!0,onClose:()=>r(!1),icon:e.jsx(d,{className:"w-5 h-5 text-zinc-600"}),children:"This callout can be closed by clicking ×."}):e.jsx(u,{variant:"link",onClick:()=>r(!0),children:"Show Callout"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Callout {...args} icon={<AiOutlineInfoCircle className="w-5 h-5 text-zinc-600" />}>
      This is a basic callout.
    </Callout>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Callout {...args} variant="primary" icon={<span>ℹ️</span>}>
        Primary variant
      </Callout>
      <Callout {...args} variant="outline" icon={<span>📦</span>}>
        Outline variant
      </Callout>
      <Callout {...args} variant="danger" icon={<span>❌</span>}>
        Danger variant
      </Callout>
      <Callout {...args} variant="warning" icon={<span>⚠️</span>}>
        Warning variant
      </Callout>
      <Callout {...args} variant="success" icon={<span>✅</span>}>
        Success variant
      </Callout>
    </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Callout {...args} size="sm" icon={<span>🔹</span>}>
        Small size
      </Callout>
      <Callout {...args} size="default" icon={<span>🔸</span>}>
        Default size
      </Callout>
      <Callout {...args} size="lg" icon={<span>🔷</span>}>
        Large size
      </Callout>
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return open ? <Callout {...args} closable onClose={() => setOpen(false)} icon={<AiOutlineInfoCircle className="w-5 h-5 text-zinc-600" />}>
        This callout can be closed by clicking ×.
      </Callout> : <Button variant="link" onClick={() => setOpen(true)}>
        Show Callout
      </Button>;
  }
}`,...i.parameters?.docs?.source}}};const O=["Default","Variants","Sizes","Closable"];export{i as Closable,s as Default,t as Sizes,l as Variants,O as __namedExportsOrder,T as default};
