import{r as b,e as R,j as e}from"./iframe-DmuRvjvF.js";import{c as d}from"./clsx-B-dksMZM.js";import{A as N}from"./arrow-8MBH4TnU.js";function s({content:t,placement:m="top",delay:y=100,className:j,children:a,disabled:u=!1}){const[p,f]=b.useState(!1),x=b.useRef(),h=()=>{u||(x.current=window.setTimeout(()=>f(!0),y))},g=()=>{clearTimeout(x.current),f(!1)},T="bg-zinc-700 dark:bg-zinc-500 text-white",v=()=>{switch(m){case"top":return"left-1/2 bottom-full mb-2 -translate-x-1/2";case"bottom":return"left-1/2 top-full mt-2 -translate-x-1/2";case"left":return"right-full top-1/2 mr-2 -translate-y-1/2";case"right":return"left-full top-1/2 ml-2 -translate-y-1/2";default:return""}},w=R.cloneElement(a,{onMouseEnter:o=>{a.props.onMouseEnter?.(o),h()},onMouseLeave:o=>{a.props.onMouseLeave?.(o),g()},onFocus:o=>{a.props.onFocus?.(o),h()},onBlur:o=>{a.props.onBlur?.(o),g()},tabIndex:a.props.tabIndex??0,className:d(a.props.className,u?"text-zinc-400 dark:text-zinc-600 opacity-80 cursor-not-allowed select-none":"dark:text-white transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer")});return e.jsxs("span",{className:"relative",style:{display:"inline-block",overflow:"visible"},children:[w,p&&e.jsxs("span",{className:d("absolute px-3 py-2 min-w-max rounded-md text-sm shadow-lg z-50 pointer-events-none transition-opacity duration-150",T,p?"opacity-100":"opacity-0",v(),j),role:"tooltip","aria-hidden":!p,children:[e.jsx(N,{placement:m,className:d(T)}),t]})]})}s.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const S={title:"Components/Tooltip",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Tooltip component that displays additional information on hover or focus. Supports placement, delay, and disabled state."}}},args:{content:"Tooltip text",placement:"top",delay:100,disabled:!1},argTypes:{content:{control:"text"},placement:{control:"radio",options:["top","bottom","left","right"]},delay:{control:"number"},disabled:{control:"boolean"}}},n={render:t=>e.jsx(s,{...t,children:e.jsx("span",{children:"Hover me"})})},r={render:t=>e.jsxs("div",{className:"flex flex-wrap gap-8 items-center justify-center",children:[e.jsx(s,{...t,placement:"top",children:e.jsx("span",{children:"Top"})}),e.jsx(s,{...t,placement:"right",children:e.jsx("span",{children:"Right"})}),e.jsx(s,{...t,placement:"bottom",children:e.jsx("span",{children:"Bottom"})}),e.jsx(s,{...t,placement:"left",children:e.jsx("span",{children:"Left"})})]})},l={render:t=>e.jsx(s,{...t,delay:500,children:e.jsx("span",{children:"Hover me (500ms delay)"})})},i={args:{disabled:!0},render:t=>e.jsx(s,{...t,children:e.jsx("span",{children:"Disabled Tooltip"})})},c={render:t=>e.jsx(s,{...t,content:e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Title"}),e.jsx("br",{}),e.jsx("span",{className:"text-red-400",children:"Additional details"})]}),children:e.jsx("span",{children:"Rich content"})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <span>Hover me</span>
    </Tooltip>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args} delay={500}>
      <span>Hover me (500ms delay)</span>
    </Tooltip>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Tooltip {...args}>
      <span>Disabled Tooltip</span>
    </Tooltip>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args} content={<div>
          <span className="font-semibold">Title</span>
          <br />
          <span className="text-red-400">Additional details</span>
        </div>}>
      <span>Rich content</span>
    </Tooltip>
}`,...c.parameters?.docs?.source}}};const q=["Default","Placement","Delay","Disabled","RichContent"];export{n as Default,l as Delay,i as Disabled,r as Placement,c as RichContent,q as __namedExportsOrder,S as default};
