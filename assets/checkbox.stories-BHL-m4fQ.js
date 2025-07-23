import{j as e}from"./iframe-ChMP4v6q.js";import{c as l}from"./clsx-B-dksMZM.js";function a({label:r,indeterminate:s=!1,className:m,disabled:n,children:u,...t}){const h=p=>{p&&(p.indeterminate=!!s&&!t.checked)};return e.jsxs("label",{className:l("inline-flex items-center gap-2 cursor-pointer select-none",n&&"opacity-50 cursor-not-allowed",m),children:[e.jsxs("span",{className:"relative w-5 h-5",children:[e.jsx("input",{ref:h,type:"checkbox",disabled:n,className:l("peer appearance-none w-full h-full border rounded transition-all","focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 dark:focus:ring-zinc-300",t.checked||s?"bg-zinc-900 border-zinc-900 dark:bg-white/10 dark:border-white/40":"bg-white border-zinc-400 dark:bg-zinc-900 dark:border-zinc-500",!n&&"peer-hover:scale-[1.04] peer-hover:shadow peer-hover:border-zinc-700 dark:peer-hover:border-white/60",n&&"bg-zinc-200 border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700"),...t}),e.jsx("svg",{className:l("absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 text-white transition-opacity duration-200 pointer-events-none",t.checked||s?"opacity-100":"opacity-0"),viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:t.checked?e.jsx("polyline",{points:"20 6 9 17 4 12"}):s?e.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12"}):null})]}),(r||u)&&e.jsx("span",{className:"text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-100",children:r||u})]})}a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const f={title:"Components/Checkbox",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A versatile Checkbox component that supports standard checked and indeterminate states. It is styled to match the Button component's design, with unified focus ring, hover, and disabled styles. Supports labels, accessibility attributes, and server-side rendering (SSR) without relying on client-side effects."}}},args:{label:"Label",checked:!1,disabled:!1,indeterminate:!1,onChange:r=>console.log(r.target.checked)},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}}},o={args:{}},c={args:{checked:!0}},i={args:{indeterminate:!0}},d={args:{disabled:!0},render:r=>e.jsxs("div",{className:"space-x-4",children:[e.jsx(a,{...r,label:"Default"}),e.jsx(a,{...r,label:"Indeterminate",indeterminate:!0}),e.jsx(a,{...r,label:"Checked",checked:!0})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="space-x-4">
      <Checkbox {...args} label="Default" />
      <Checkbox {...args} label="Indeterminate" indeterminate />
      <Checkbox {...args} label="Checked" checked />
    </div>
}`,...d.parameters?.docs?.source}}};const k=["Default","Checked","Indeterminate","Disabled"];export{c as Checked,o as Default,d as Disabled,i as Indeterminate,k as __namedExportsOrder,f as default};
