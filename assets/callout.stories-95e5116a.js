import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as k}from"./index-87df5591.js";import{a as y}from"./index-b1996593.js";import{B as q}from"./button-84d48078.js";import{c as D}from"./clsx-0839fdbe.js";import"./spinner-6592412a.js";function n({variant:a="primary",size:o="default",closable:r=!1,onClose:z,icon:c,className:w,children:N,...S}){const T="flex justify-between rounded-lg border shadow-sm transition-colors",O={primary:"bg-zinc-100 text-zinc-900 border-transparent",outline:"bg-white text-zinc-900 border border-zinc-300",danger:"bg-red-50 text-red-900 border border-red-300",warning:"bg-yellow-50 text-yellow-900 border border-yellow-300",success:"bg-green-50 text-green-900 border border-green-300"}[a],R={sm:"text-sm px-3 py-2",default:"text-base px-4 py-3",lg:"text-lg px-5 py-4"}[o];return e.jsxs("div",{className:D(T,O,R,w),...S,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[c&&e.jsx("span",{children:c}),e.jsx("span",{className:"flex-1",children:N})]}),r&&e.jsx("button",{type:"button","aria-label":"Close",className:"text-zinc-400 hover:text-zinc-600 rounded-md text-lg font-bold leading-none transition-colors cursor-pointer",onClick:z,children:"×"})]})}n.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'outline'
| 'danger'
| 'warning'
| 'success'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const L={title:"Components/Callout",component:n,tags:["autodocs"],argTypes:{variant:{control:"radio",options:["primary","outline","danger","warning","success"]},size:{control:"radio",options:["sm","default","lg"]},closable:{control:"boolean"},onClose:{action:"closed"}},args:{variant:"primary",size:"default",closable:!1}},s={render:a=>e.jsx(n,{...a,icon:e.jsx(y,{className:"w-5 h-5 text-zinc-600"}),children:"This is a basic callout."})},l={render:a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{...a,variant:"primary",icon:e.jsx("span",{children:"ℹ️"}),children:"Primary variant"}),e.jsx(n,{...a,variant:"outline",icon:e.jsx("span",{children:"📦"}),children:"Outline variant"}),e.jsx(n,{...a,variant:"danger",icon:e.jsx("span",{children:"❌"}),children:"Danger variant"}),e.jsx(n,{...a,variant:"warning",icon:e.jsx("span",{children:"⚠️"}),children:"Warning variant"}),e.jsx(n,{...a,variant:"success",icon:e.jsx("span",{children:"✅"}),children:"Success variant"})]})},t={render:a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{...a,size:"sm",icon:e.jsx("span",{children:"🔹"}),children:"Small size"}),e.jsx(n,{...a,size:"default",icon:e.jsx("span",{children:"🔸"}),children:"Default size"}),e.jsx(n,{...a,size:"lg",icon:e.jsx("span",{children:"🔷"}),children:"Large size"})]})},i={render:a=>{const[o,r]=k.useState(!0);return o?e.jsx(n,{...a,closable:!0,onClose:()=>r(!1),icon:e.jsx(y,{className:"w-5 h-5 text-zinc-600"}),children:"This callout can be closed by clicking ×."}):e.jsx(q,{variant:"link",onClick:()=>r(!0),children:"Show Callout"})}};var u,d,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Callout {...args} icon={<AiOutlineInfoCircle className="w-5 h-5 text-zinc-600" />}>
      This is a basic callout.
    </Callout>
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,x,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,v,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(v=t.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var h,b,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return open ? <Callout {...args} closable onClose={() => setOpen(false)} icon={<AiOutlineInfoCircle className="w-5 h-5 text-zinc-600" />}>
        This callout can be closed by clicking ×.
      </Callout> : <Button variant="link" onClick={() => setOpen(true)}>
        Show Callout
      </Button>;
  }
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const P=["Default","Variants","Sizes","Closable"];export{i as Closable,s as Default,t as Sizes,l as Variants,P as __namedExportsOrder,L as default};
