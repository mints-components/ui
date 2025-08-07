import{e as b,j as e}from"./iframe-C7E9HDRz.js";import{c as m}from"./clsx-B-dksMZM.js";const g={sm:"text-sm px-3 py-1.5 rounded-md",default:"text-base px-4 py-2 rounded-md",lg:"text-lg px-5 py-2.5 rounded-md"},N={none:"resize-none",both:"resize",x:"resize-x",y:"resize-y"},a=b.forwardRef(({label:c,error:d,size:p="default",resize:u="y",className:x,textareClassName:h,required:n,...f},z)=>e.jsxs("div",{className:m("flex flex-col gap-1",x),children:[c&&e.jsxs("label",{className:"text-sm font-medium text-zinc-900 dark:text-white flex items-center gap-1",children:[c,n&&e.jsx("span",{className:"text-red-500","aria-label":"required",children:"*"})]}),e.jsx("textarea",{ref:z,required:n,"aria-required":n,className:m("border border-zinc-300 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white dark:border-zinc-700","placeholder:text-zinc-400 dark:placeholder:text-zinc-500","focus:outline focus:outline-zinc-900 focus:border-zinc-900 dark:focus:border-white",g[p],N[u],h),...f}),d&&e.jsx("p",{className:"text-sm text-red-500",children:d})]}));a.displayName="TextArea";a.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},resize:{required:!1,tsType:{name:"union",raw:"'none' | 'both' | 'x' | 'y'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'both'"},{name:"literal",value:"'x'"},{name:"literal",value:"'y'"}]},description:"",defaultValue:{value:"'y'",computed:!1}},textareClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["NativeTextAreaProps"]};const T={title:"Components/TextArea",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A flexible TextArea component supporting label, required, error message, size, and resize control. Built with the zinc color palette and styled for both light and dark themes. The label prop supports JSX."}}}},r={args:{label:"Description",placeholder:"Enter your text..."}},s={args:{label:"Required Field",required:!0,placeholder:"This field is required"}},l={args:{label:"Description",placeholder:"This field has an error",error:"This field is required"}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(a,{label:"Small",placeholder:"Small size",size:"sm"}),e.jsx(a,{label:"Default",placeholder:"Default size"}),e.jsx(a,{label:"Large",placeholder:"Large size",size:"lg"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"inline-block",children:e.jsx(a,{label:"No Resize",placeholder:"Cannot resize",resize:"none",className:"w-[200px] max-w-full"})}),e.jsx("div",{className:"inline-block",children:e.jsx(a,{label:"Vertical Resize",placeholder:"Vertical resize",resize:"y",className:"w-[200px] max-w-full"})}),e.jsx("div",{className:"inline-block",children:e.jsx(a,{label:"Horizontal Resize",placeholder:"Horizontal resize",resize:"x",className:"w-[200px] max-w-full"})}),e.jsx("div",{className:"inline-block",children:e.jsx(a,{label:"Both Directions",placeholder:"Resize in both directions",resize:"both",className:"w-[200px] max-w-full"})})]})},o={args:{label:e.jsxs("span",{className:"flex items-center gap-1",children:["Description ",e.jsx("span",{className:"text-red-500",children:"*"})]}),placeholder:"With custom label"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter your text...'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This field is required'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'This field has an error',
    error: 'This field is required'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">
      <TextArea label="Small" placeholder="Small size" size="sm" />
      <TextArea label="Default" placeholder="Default size" />
      <TextArea label="Large" placeholder="Large size" size="lg" />
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: <span className="flex items-center gap-1">
        Description <span className="text-red-500">*</span>
      </span>,
    placeholder: 'With custom label'
  }
}`,...o.parameters?.docs?.source}}};const R=["Default","Required","WithError","Sizes","Resizes","WithCustomLabel"];export{r as Default,s as Required,t as Resizes,i as Sizes,o as WithCustomLabel,l as WithError,R as __namedExportsOrder,T as default};
