import{j as e}from"./jsx-runtime-9bc08dc0.js";import{c as k}from"./clsx-0839fdbe.js";import{e as y}from"./index-87df5591.js";const A={sm:"text-sm px-3 py-1.5 rounded-md",default:"text-base px-4 py-2 rounded-md",lg:"text-lg px-5 py-2.5 rounded-md"},D={none:"resize-none",both:"resize",x:"resize-x",y:"resize-y"},a=y.forwardRef(({label:o,error:t,size:N="default",resize:w="y",className:v,...j},T)=>e.jsxs("div",{className:"flex flex-col gap-1",children:[o&&e.jsx("label",{className:"text-sm font-medium text-zinc-900 dark:text-white",children:o}),e.jsx("textarea",{ref:T,className:k("border border-zinc-300 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white dark:border-zinc-700","placeholder:text-zinc-400 dark:placeholder:text-zinc-500","focus:outline focus:outline-zinc-900 focus:border-zinc-900 dark:focus:border-white",A[N],D[w],v),...j}),t&&e.jsx("p",{className:"text-sm text-red-500",children:t})]}));a.displayName="TextArea";a.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{size:{defaultValue:{value:"'default'",computed:!1},required:!1},resize:{defaultValue:{value:"'y'",computed:!1},required:!1}}};const V={title:"Components/TextArea",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A flexible TextArea component supporting label, error message, size and resize control. Built with the zinc color palette and styled for both light and dark themes. The label prop supports JSX."}}}},l={args:{label:"Description",placeholder:"Enter your text..."}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(a,{label:"Small",placeholder:"Small size",size:"sm"}),e.jsx(a,{label:"Default",placeholder:"Default size"}),e.jsx(a,{label:"Large",placeholder:"Large size",size:"lg"})]})},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"inline-block",children:e.jsx(a,{label:"No Resize",placeholder:"Cannot resize",resize:"none",className:"w-[200px] max-w-full"})}),e.jsx("div",{className:"inline-block",children:e.jsx(a,{label:"Vertical Resize",placeholder:"Vertical resize",resize:"y",className:"w-[200px] max-w-full"})}),e.jsx("div",{className:"inline-block",children:e.jsx(a,{label:"Horizontal Resize",placeholder:"Horizontal resize",resize:"x",className:"w-[200px] max-w-full"})}),e.jsx("div",{className:"inline-block",children:e.jsx(a,{label:"Both Directions",placeholder:"Resize in both directions",resize:"both",className:"w-[200px] max-w-full"})})]})},i={args:{label:"Description",placeholder:"This field has an error",error:"This field is required"}};var n,c,d;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter your text...'
  }
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">
      <TextArea label="Small" placeholder="Small size" size="sm" />
      <TextArea label="Default" placeholder="Default size" />
      <TextArea label="Large" placeholder="Large size" size="lg" />
    </div>
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,z,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="inline-block">
        <TextArea label="No Resize" placeholder="Cannot resize" resize="none" className="w-[200px] max-w-full" />
      </div>
      <div className="inline-block">
        <TextArea label="Vertical Resize" placeholder="Vertical resize" resize="y" className="w-[200px] max-w-full" />
      </div>
      <div className="inline-block">
        <TextArea label="Horizontal Resize" placeholder="Horizontal resize" resize="x" className="w-[200px] max-w-full" />
      </div>
      <div className="inline-block">
        <TextArea label="Both Directions" placeholder="Resize in both directions" resize="both" className="w-[200px] max-w-full" />
      </div>
    </div>
}`,...(h=(z=r.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var f,b,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'This field has an error',
    error: 'This field is required'
  }
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const C=["Default","Sizes","Resizes","WithError"];export{l as Default,r as Resizes,s as Sizes,i as WithError,C as __namedExportsOrder,V as default};
