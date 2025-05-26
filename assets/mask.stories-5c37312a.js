import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as f}from"./index-87df5591.js";import{B as l}from"./button-84d48078.js";import{c as x}from"./clsx-0839fdbe.js";import"./spinner-6592412a.js";function o({open:a,opacity:n=.6,zIndex:s=1e3,children:p,closable:d=!0,onClose:u}){if(!a)return null;const m=Math.max(.05,n);return e.jsxs("div",{className:x("fixed inset-0 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm",a?"opacity-100":"opacity-0 pointer-events-none"),style:{backgroundColor:`rgba(255, 255, 255, ${m})`,zIndex:s},children:[d&&e.jsx(l,{onClick:u,size:"sm",variant:"link",className:"absolute top-4 right-4",children:"✕"}),p]})}o.__docgenInfo={description:"",methods:[],displayName:"Mask",props:{open:{required:!0,tsType:{name:"boolean"},description:""},opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.6",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const h={title:"Components/Mask",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"A full-screen mask overlay component that supports customizable opacity, z-index, and a closable button."}}},argTypes:{opacity:{control:{type:"range",min:0,max:1,step:.1}},zIndex:{control:"number"},closable:{control:"boolean"}}},t={args:{open:!1,opacity:.6,zIndex:1e3,closable:!0},render:a=>{const[n,s]=f.useState(!1);return e.jsxs("div",{className:"p-8 space-y-4",children:[e.jsx(l,{onClick:()=>s(!0),children:"Open Mask"}),e.jsx(o,{...a,open:n,onClose:()=>s(!1),children:e.jsx("div",{className:"text-xl",children:"Loading..."})})]})}};var r,i,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    open: false,
    opacity: 0.6,
    zIndex: 1000,
    closable: true
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="p-8 space-y-4">
        <Button onClick={() => setOpen(true)}>Open Mask</Button>

        <Mask {...args} open={open} onClose={() => setOpen(false)}>
          <div className="text-xl">Loading...</div>
        </Mask>
      </div>;
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const j=["Basic"];export{t as Basic,j as __namedExportsOrder,h as default};
