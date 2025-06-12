import{j as e}from"./jsx-runtime-9bc08dc0.js";import{c as I}from"./clsx-0839fdbe.js";import{r as T,e as P}from"./index-87df5591.js";function n({content:t,placement:l="top",delay:C=100,className:H,children:a,disabled:M=!1}){const[f,b]=T.useState(!1),x=T.useRef(),h=()=>{M||(x.current=window.setTimeout(()=>b(!0),C))},g=()=>{clearTimeout(x.current),b(!1)},i="#3f3f46",V=()=>{switch(l){case"top":return"left-1/2 bottom-full mb-2 -translate-x-1/2";case"bottom":return"left-1/2 top-full mt-2 -translate-x-1/2";case"left":return"right-full top-1/2 mr-2 -translate-y-1/2";case"right":return"left-full top-1/2 ml-2 -translate-y-1/2";default:return""}},_=()=>l==="top"?e.jsx("span",{className:"absolute left-1/2 top-full -translate-x-1/2",style:{width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderTop:`6px solid ${i}`}}):l==="bottom"?e.jsx("span",{className:"absolute left-1/2 bottom-full -translate-x-1/2",style:{width:0,height:0,borderLeft:"6px solid transparent",borderRight:"6px solid transparent",borderBottom:`6px solid ${i}`}}):l==="left"?e.jsx("span",{className:"absolute top-1/2 left-full -translate-y-1/2",style:{width:0,height:0,borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:`6px solid ${i}`}}):l==="right"?e.jsx("span",{className:"absolute top-1/2 right-full -translate-y-1/2",style:{width:0,height:0,borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderRight:`6px solid ${i}`}}):null,$=P.cloneElement(a,{onMouseEnter:r=>{var s,o;(o=(s=a.props).onMouseEnter)==null||o.call(s,r),h()},onMouseLeave:r=>{var s,o;(o=(s=a.props).onMouseLeave)==null||o.call(s,r),g()},onFocus:r=>{var s,o;(o=(s=a.props).onFocus)==null||o.call(s,r),h()},onBlur:r=>{var s,o;(o=(s=a.props).onBlur)==null||o.call(s,r),g()},tabIndex:a.props.tabIndex??0});return e.jsxs("span",{className:"relative",style:{display:"inline-block",overflow:"visible"},children:[$,f&&e.jsxs("span",{className:I("absolute px-3 py-2 min-w-max rounded-md text-sm text-white shadow-lg z-50 bg-zinc-700 pointer-events-none transition-opacity duration-150",f?"opacity-100":"opacity-0",V(),H),role:"tooltip","aria-hidden":!f,children:[t,e.jsx(_,{})]})]})}n.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const J={title:"Components/Tooltip",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Tooltip component that displays additional information on hover or focus. Supports placement, delay, and disabled state."}}},args:{content:"Tooltip text",placement:"top",delay:100,disabled:!1},argTypes:{content:{control:"text"},placement:{control:"radio",options:["top","bottom","left","right"]},delay:{control:"number"},disabled:{control:"boolean"}}},p={render:t=>e.jsx(n,{...t,children:e.jsx("span",{className:"inline-block text-base font-medium cursor-pointer",children:"Hover me"})})},c={render:t=>e.jsxs("div",{className:"flex flex-wrap gap-8 items-center justify-center",children:[e.jsx(n,{...t,placement:"top",children:e.jsx("span",{className:"inline-block cursor-pointer",children:"Top"})}),e.jsx(n,{...t,placement:"right",children:e.jsx("span",{className:"inline-block cursor-pointer",children:"Right"})}),e.jsx(n,{...t,placement:"bottom",children:e.jsx("span",{className:"inline-block cursor-pointer",children:"Bottom"})}),e.jsx(n,{...t,placement:"left",children:e.jsx("span",{className:"inline-block cursor-pointer",children:"Left"})})]})},d={render:t=>e.jsx(n,{...t,delay:500,children:e.jsx("span",{className:"inline-block cursor-pointer",children:"Hover me (500ms delay)"})})},m={args:{disabled:!0},render:t=>e.jsx(n,{...t,children:e.jsx("span",{className:"inline-block cursor-not-allowed text-zinc-400",children:"Disabled Tooltip"})})},u={render:t=>e.jsx(n,{...t,content:e.jsxs("span",{children:[e.jsx("span",{className:"font-semibold",children:"Title"}),e.jsx("br",{}),e.jsx("span",{children:"Additional details"})]}),children:e.jsx("span",{className:"inline-block cursor-pointer",children:"Rich content"})})};var y,j,N;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <span className="inline-block text-base font-medium cursor-pointer">
        Hover me
      </span>
    </Tooltip>
}`,...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var v,w,R;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-8 items-center justify-center">
      <Tooltip {...args} placement="top">
        <span className="inline-block cursor-pointer">Top</span>
      </Tooltip>
      <Tooltip {...args} placement="right">
        <span className="inline-block cursor-pointer">Right</span>
      </Tooltip>
      <Tooltip {...args} placement="bottom">
        <span className="inline-block cursor-pointer">Bottom</span>
      </Tooltip>
      <Tooltip {...args} placement="left">
        <span className="inline-block cursor-pointer">Left</span>
      </Tooltip>
    </div>
}`,...(R=(w=c.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var k,B,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Tooltip {...args} delay={500}>
      <span className="inline-block cursor-pointer">
        Hover me (500ms delay)
      </span>
    </Tooltip>
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var E,L,S;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Tooltip {...args}>
      <span className="inline-block cursor-not-allowed text-zinc-400">
        Disabled Tooltip
      </span>
    </Tooltip>
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var q,z,A;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <Tooltip {...args} content={<span>
          <span className="font-semibold">Title</span>
          <br />
          <span>Additional details</span>
        </span>}>
      <span className="inline-block cursor-pointer">Rich content</span>
    </Tooltip>
}`,...(A=(z=u.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const K=["Default","Placement","Delay","Disabled","RichContent"];export{p as Default,d as Delay,m as Disabled,c as Placement,u as RichContent,K as __namedExportsOrder,J as default};
