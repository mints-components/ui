import{r as f,j as e}from"./iframe-ChMP4v6q.js";import{c as t}from"./clsx-B-dksMZM.js";function s({children:r,size:n="default",className:p,disabled:d,checked:u,...m}){const c=f.useId(),l={sm:{wrapper:"h-3.5 w-3.5",inner:"h-1.5 w-1.5"},default:{wrapper:"h-4 w-4",inner:"h-2 w-2"},lg:{wrapper:"h-5 w-5",inner:"h-2.5 w-2.5"}}[n];return e.jsxs("label",{htmlFor:c,className:t("inline-flex items-center gap-2 select-none",d?"opacity-50 cursor-not-allowed":"cursor-pointer",p),children:[e.jsxs("span",{className:"relative flex items-center justify-center",children:[e.jsx("input",{id:c,type:"radio",className:"peer sr-only",disabled:d,checked:u,...m}),e.jsx("span",{className:t("rounded-full border flex items-center justify-center transition-colors",l.wrapper,"border-zinc-400 dark:border-zinc-600",d?"cursor-not-allowed":"cursor-pointer","peer-checked:border-zinc-900 peer-checked:bg-zinc-900","dark:peer-checked:border-zinc-100 dark:peer-checked:bg-zinc-100","peer-checked:disabled:border-zinc-400 peer-checked:disabled:bg-zinc-400","dark:peer-checked:disabled:border-zinc-600 dark:peer-checked:disabled:bg-zinc-700","peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-zinc-900 dark:peer-focus-visible:outline-zinc-100"),children:e.jsx("span",{className:t("rounded-full",l.inner,"bg-white peer-checked:bg-white dark:bg-zinc-900 dark:peer-checked:bg-zinc-900")})})]}),r&&e.jsx("span",{className:"dark:text-zinc-100",children:r})]})}s.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const b={title:"Components/Radio",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Radio component for selecting a single option from a group. Supports different sizes, disabled states, and works with any `children` as the label. Designed for accessible forms with support for controlled and uncontrolled modes."}}},args:{size:"default",disabled:!1},argTypes:{disabled:{control:"boolean"},size:{control:"radio",options:["sm","default","lg"]}}},a={args:{children:"Option 1"}},i={args:{children:"Option"},render:r=>e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(s,{...r,size:"sm",children:"Small"}),e.jsx(s,{...r,size:"default",children:"Default"}),e.jsx(s,{...r,size:"lg",children:"Large"})]})},o={args:{children:"Option",disabled:!0},render:r=>e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(s,{...r,children:"Disabled"}),e.jsx(s,{...r,checked:!0,children:"Disabled & Checked"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Option 1'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Option'
  },
  render: args => <div className="flex flex-col gap-4 items-start">
      <Radio {...args} size="sm">
        Small
      </Radio>
      <Radio {...args} size="default">
        Default
      </Radio>
      <Radio {...args} size="lg">
        Large
      </Radio>
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Option',
    disabled: true
  },
  render: args => <div className="flex flex-col gap-4 items-start">
      <Radio {...args}>Disabled</Radio>
      <Radio {...args} checked>
        Disabled & Checked
      </Radio>
    </div>
}`,...o.parameters?.docs?.source}}};const x=["Default","Sizes","DisabledStates"];export{a as Default,o as DisabledStates,i as Sizes,x as __namedExportsOrder,b as default};
