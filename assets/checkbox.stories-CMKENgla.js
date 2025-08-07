import{r as v,j as e}from"./iframe-DWCafqHe.js";import{c as p}from"./clsx-B-dksMZM.js";function s({label:r,size:f="default",indeterminate:t=!1,className:b,disabled:n,checked:a,children:u,...g}){const m=v.useId(),x={sm:{wrapper:"h-3.5 w-3.5 text-[13px]",icon:"w-2 h-2"},default:{wrapper:"h-4 w-4 text-[15px]",icon:"w-2.5 h-2.5"},lg:{wrapper:"h-5 w-5 text-base",icon:"w-3 h-3"}}[f],k=h=>{h&&(h.indeterminate=!!t&&!a)};return e.jsxs("label",{htmlFor:m,className:p("inline-flex items-center gap-1 cursor-pointer select-none",n&&"opacity-50 cursor-not-allowed",b),children:[e.jsxs("span",{className:"relative flex items-center justify-center",children:[e.jsx("input",{id:m,ref:k,type:"checkbox",className:"peer sr-only",disabled:n,checked:a,...g}),e.jsx("span",{className:p("flex items-center justify-center border rounded transition-colors bg-white dark:bg-zinc-900",x.wrapper,"border-zinc-400 dark:border-zinc-600",n?"cursor-not-allowed":"cursor-pointer",(a||t)&&"border-zinc-900 bg-zinc-900 dark:border-zinc-100 dark:bg-zinc-100",!n&&"peer-hover:shadow peer-hover:border-zinc-700 dark:peer-hover:border-white/60","peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-zinc-900 dark:peer-focus-visible:outline-zinc-100"),children:(a||t)&&e.jsx("svg",{className:p("pointer-events-none transition-opacity duration-200",x.icon,"text-white dark:text-zinc-900"),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:a?e.jsx("polyline",{points:"20 6 9 17 4 12"}):t?e.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12"}):null})})]}),(r||u)&&e.jsx("span",{className:"text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-100",children:r||u})]})}s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const j={title:"Components/Checkbox",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A versatile Checkbox component that supports standard checked and indeterminate states. It is styled to match the Button component's design, with unified focus ring, hover, and disabled styles. Supports labels, accessibility attributes, and server-side rendering (SSR) without relying on client-side effects."}}},args:{label:"Label",checked:!1,disabled:!1,indeterminate:!1,onChange:r=>console.log(r.target.checked)},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}}},o={args:{}},i={render:r=>e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(s,{...r,size:"sm",children:"Small"}),e.jsx(s,{...r,size:"default",children:"Default"}),e.jsx(s,{...r,size:"lg",children:"Large"})]})},c={args:{checked:!0}},l={args:{indeterminate:!0}},d={args:{disabled:!0},render:r=>e.jsxs("div",{className:"space-x-4",children:[e.jsx(s,{...r,label:"Default"}),e.jsx(s,{...r,label:"Indeterminate",indeterminate:!0}),e.jsx(s,{...r,label:"Checked",checked:!0})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4 items-start">
      <Checkbox {...args} size="sm">
        Small
      </Checkbox>
      <Checkbox {...args} size="default">
        Default
      </Checkbox>
      <Checkbox {...args} size="lg">
        Large
      </Checkbox>
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="space-x-4">
      <Checkbox {...args} label="Default" />
      <Checkbox {...args} label="Indeterminate" indeterminate />
      <Checkbox {...args} label="Checked" checked />
    </div>
}`,...d.parameters?.docs?.source}}};const C=["Default","Sizes","Checked","Indeterminate","Disabled"];export{c as Checked,o as Default,d as Disabled,l as Indeterminate,i as Sizes,C as __namedExportsOrder,j as default};
