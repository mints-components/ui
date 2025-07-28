import{r as b,e as L,j as e}from"./iframe-DSdqhFR-.js";import{c as g}from"./clsx-B-dksMZM.js";function o({content:t,placement:a="top",delay:T=100,className:y,children:r,disabled:m=!1}){const[d,u]=b.useState(!1),f=b.useRef(),x=()=>{m||(f.current=window.setTimeout(()=>u(!0),T))},h=()=>{clearTimeout(f.current),u(!1)},j="bg-zinc-700 dark:bg-zinc-500 text-white",v="#3f3f46",w="#71717b",R=()=>typeof window<"u"&&document.documentElement.classList.contains("dark")?w:v,N=()=>{switch(a){case"top":return"left-1/2 bottom-full mb-2 -translate-x-1/2";case"bottom":return"left-1/2 top-full mt-2 -translate-x-1/2";case"left":return"right-full top-1/2 mr-2 -translate-y-1/2";case"right":return"left-full top-1/2 ml-2 -translate-y-1/2";default:return""}},D=()=>{const s=R();return a==="top"?e.jsx("span",{className:"absolute left-1/2 top-full -translate-x-1/2",style:{width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:`6px solid ${s}`}}):a==="bottom"?e.jsx("span",{className:"absolute left-1/2 bottom-full -translate-x-1/2",style:{width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderBottom:`6px solid ${s}`}}):a==="left"?e.jsx("span",{className:"absolute top-1/2 left-full -translate-y-1/2",style:{width:0,height:0,borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:`6px solid ${s}`}}):a==="right"?e.jsx("span",{className:"absolute top-1/2 right-full -translate-y-1/2",style:{width:0,height:0,borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderRight:`6px solid ${s}`}}):null},E=L.cloneElement(r,{onMouseEnter:s=>{r.props.onMouseEnter?.(s),x()},onMouseLeave:s=>{r.props.onMouseLeave?.(s),h()},onFocus:s=>{r.props.onFocus?.(s),x()},onBlur:s=>{r.props.onBlur?.(s),h()},tabIndex:r.props.tabIndex??0,className:g(r.props.className,m?"text-zinc-400 dark:text-zinc-600 opacity-80 cursor-not-allowed select-none":"dark:text-white transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer")});return e.jsxs("span",{className:"relative",style:{display:"inline-block",overflow:"visible"},children:[E,d&&e.jsxs("span",{className:g("absolute px-3 py-2 min-w-max rounded-md text-sm shadow-lg z-50 pointer-events-none transition-opacity duration-150",j,d?"opacity-100":"opacity-0",N(),y),role:"tooltip","aria-hidden":!d,children:[t,e.jsx(D,{})]})]})}o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const B={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Tooltip component that displays additional information on hover or focus. Supports placement, delay, and disabled state."}}},args:{content:"Tooltip text",placement:"top",delay:100,disabled:!1},argTypes:{content:{control:"text"},placement:{control:"radio",options:["top","bottom","left","right"]},delay:{control:"number"},disabled:{control:"boolean"}}},n={render:t=>e.jsx(o,{...t,children:e.jsx("span",{children:"Hover me"})})},l={render:t=>e.jsxs("div",{className:"flex flex-wrap gap-8 items-center justify-center",children:[e.jsx(o,{...t,placement:"top",children:e.jsx("span",{children:"Top"})}),e.jsx(o,{...t,placement:"right",children:e.jsx("span",{children:"Right"})}),e.jsx(o,{...t,placement:"bottom",children:e.jsx("span",{children:"Bottom"})}),e.jsx(o,{...t,placement:"left",children:e.jsx("span",{children:"Left"})})]})},i={render:t=>e.jsx(o,{...t,delay:500,children:e.jsx("span",{children:"Hover me (500ms delay)"})})},p={args:{disabled:!0},render:t=>e.jsx(o,{...t,children:e.jsx("span",{children:"Disabled Tooltip"})})},c={render:t=>e.jsx(o,{...t,content:e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Title"}),e.jsx("br",{}),e.jsx("span",{className:"text-red-400",children:"Additional details"})]}),children:e.jsx("span",{children:"Rich content"})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <span>Hover me</span>
    </Tooltip>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-8 items-center justify-center">
      <Tooltip {...args} placement="top">
        <span>Top</span>
      </Tooltip>
      <Tooltip {...args} placement="right">
        <span>Right</span>
      </Tooltip>
      <Tooltip {...args} placement="bottom">
        <span>Bottom</span>
      </Tooltip>
      <Tooltip {...args} placement="left">
        <span>Left</span>
      </Tooltip>
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args} delay={500}>
      <span>Hover me (500ms delay)</span>
    </Tooltip>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Tooltip {...args}>
      <span>Disabled Tooltip</span>
    </Tooltip>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args} content={<div>
          <span className="font-semibold">Title</span>
          <br />
          <span className="text-red-400">Additional details</span>
        </div>}>
      <span>Rich content</span>
    </Tooltip>
}`,...c.parameters?.docs?.source}}};const S=["Default","Placement","Delay","Disabled","RichContent"];export{n as Default,i as Delay,p as Disabled,l as Placement,c as RichContent,S as __namedExportsOrder,B as default};
