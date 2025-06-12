import{j as e}from"./jsx-runtime-9bc08dc0.js";import{B as t}from"./button-84d48078.js";import{c as z}from"./clsx-0839fdbe.js";import{r as g}from"./index-87df5591.js";import{c as L}from"./client-e8a28fd8.js";import"./spinner-6592412a.js";import"./index-393eccbd.js";function M({message:s,variant:r,icon:o,duration:m=3e3,k:p}){const[D,f]=g.useState(!1);g.useEffect(()=>{f(!0);const S=setTimeout(()=>f(!1),m),I=setTimeout(()=>R(p),m+200);return()=>{clearTimeout(S),clearTimeout(I)}},[m,p]);const E={info:"bg-zinc-100 text-zinc-900 border-transparent",success:"bg-green-50 text-green-900 border-green-200",warning:"bg-yellow-50 text-yellow-900 border-yellow-200",error:"bg-red-50 text-red-900 border-red-200"}[r],W={info:e.jsxs("svg",{className:"w-5 h-5 text-zinc-500",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"currentColor",opacity:".1"}),e.jsx("path",{stroke:"currentColor",strokeWidth:"2",d:"M12 8v4m0 4h.01",strokeLinecap:"round"})]}),success:e.jsxs("svg",{className:"w-5 h-5 text-green-500",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"currentColor",opacity:".1"}),e.jsx("path",{stroke:"currentColor",strokeWidth:"2",d:"M9 12l2 2 4-4",strokeLinecap:"round",fill:"none"})]}),warning:e.jsxs("svg",{className:"w-5 h-5 text-yellow-500",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"currentColor",opacity:".1"}),e.jsx("path",{stroke:"currentColor",strokeWidth:"2",d:"M12 8v4m0 4h.01",strokeLinecap:"round"})]}),error:e.jsxs("svg",{className:"w-5 h-5 text-red-500",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"currentColor",opacity:".1"}),e.jsx("path",{stroke:"currentColor",strokeWidth:"2",d:"M15 9l-6 6m0-6l6 6",strokeLinecap:"round"})]})};return e.jsxs("div",{className:z("flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[220px] max-w-xs text-base font-medium border mb-3 pointer-events-auto",E,"transition-all duration-200 ease-in-out",D?"opacity-100 translate-y-0 scale-100":"opacity-0 -translate-y-2 scale-95"),children:[e.jsx("span",{className:"flex items-center",children:o??W[r]}),e.jsx("span",{className:"flex-1",children:s})]})}let a=null,h=null,d=[],x=0;function N(){a||(a=document.createElement("div"),a.className="fixed top-4 left-1/2 z-[9999] -translate-x-1/2 flex flex-col items-center pointer-events-none",document.body.appendChild(a),h=L.createRoot(a)),h.render(e.jsx(e.Fragment,{children:d.map(({key:s,props:r})=>e.jsx(M,{...r},s))}))}function R(s){d=d.filter(r=>r.key!==s),N()}function c(s,r,o){x++,d.push({key:x,props:{message:s,variant:r,icon:o==null?void 0:o.icon,duration:o==null?void 0:o.duration,k:x}}),N()}const n={message:(s,r)=>c(s,(r==null?void 0:r.variant)??"info",r),info:(s,r)=>c(s,"info",r),success:(s,r)=>c(s,"success",r),warning:(s,r)=>c(s,"warning",r),error:(s,r)=>c(s,"error",r)},H={title:"Components/Toast",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'A global Toast utility supporting info, success, warning, and error variants. Use `toast.success("...")` and similar methods to display notifications.'}}}},i={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{onClick:()=>n.info("This is an informational message."),children:"Info"}),e.jsx(t,{onClick:()=>n.success("Operation successful!"),children:"Success"}),e.jsx(t,{onClick:()=>n.warning("This is a warning message."),children:"Warning"}),e.jsx(t,{onClick:()=>n.error("An error occurred!"),children:"Error"})]})},l={render:()=>e.jsx(t,{onClick:()=>n.success("Disappears after 5 seconds",{duration:5e3}),children:"Custom Duration (5s)"})},u={render:()=>e.jsx(t,{onClick:()=>n.success("With custom icon",{icon:e.jsx("span",{role:"img","aria-label":"rocket",className:"text-lg",children:"🚀"})}),children:"Custom Icon"})};var C,k,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button onClick={() => toast.info('This is an informational message.')}>
        Info
      </Button>
      <Button onClick={() => toast.success('Operation successful!')}>
        Success
      </Button>
      <Button onClick={() => toast.warning('This is a warning message.')}>
        Warning
      </Button>
      <Button onClick={() => toast.error('An error occurred!')}>Error</Button>
    </div>
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,y,v;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Button onClick={() => toast.success('Disappears after 5 seconds', {
    duration: 5000
  })}>
      Custom Duration (5s)
    </Button>
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var B,b,T;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Button onClick={() => toast.success('With custom icon', {
    icon: <span role="img" aria-label="rocket" className="text-lg">
              🚀
            </span>
  })}>
      Custom Icon
    </Button>
}`,...(T=(b=u.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const J=["Default","CustomDuration","CustomIcon"];export{l as CustomDuration,u as CustomIcon,i as Default,J as __namedExportsOrder,H as default};
