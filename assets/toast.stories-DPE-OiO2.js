import{j as s,r as g}from"./iframe-DSdqhFR-.js";import{B as t}from"./button-BtGSe2Q9.js";import{c as y}from"./clsx-B-dksMZM.js";import{c as B}from"./client-CPI5_jTi.js";import{g as T,e as v,f as D,I as E}from"./waypoints-Bgsa44fO.js";import"./spinner-DhZIe2SR.js";import"./index-H0C8OToU.js";function I({message:r,variant:e,icon:c,duration:m=3e3,k:f}){const[h,x]=g.useState(!1);g.useEffect(()=>{x(!0);const z=setTimeout(()=>x(!1),m),w=setTimeout(()=>N(f),m+200);return()=>{clearTimeout(z),clearTimeout(w)}},[m,f]);const b={info:"bg-zinc-100 text-zinc-900 border-zinc-200 dark:bg-zinc-900/95 dark:text-zinc-100 dark:border-zinc-700",success:"bg-zinc-100 text-green-600 border-zinc-200 dark:bg-zinc-900/95 dark:text-green-400 dark:border-zinc-700",warning:"bg-zinc-100 text-yellow-700 border-zinc-200 dark:bg-zinc-900/95 dark:text-yellow-300 dark:border-zinc-700",error:"bg-zinc-100 text-red-600 border-zinc-200 dark:bg-zinc-900/95 dark:text-red-400 dark:border-zinc-700"}[e],j={info:s.jsx(E,{}),success:s.jsx(D,{}),warning:s.jsx(v,{}),error:s.jsx(T,{})};return s.jsxs("div",{className:y("flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg text-base font-medium border mb-3 pointer-events-auto",b,"transition-all duration-200 ease-in-out leading-relaxed",h?"opacity-100 translate-y-0 scale-100":"opacity-0 -translate-y-2 scale-95"),children:[s.jsx("span",{className:"flex items-center",children:c??j[e]}),s.jsx("span",{className:"flex-1",children:r})]})}let n=null,k=null,d=[],p=0;function C(){n||(n=document.createElement("div"),n.className="fixed top-6 left-1/2 z-[9999] -translate-x-1/2 flex flex-col items-center pointer-events-none",document.body.appendChild(n),k=B.createRoot(n)),k.render(s.jsx(s.Fragment,{children:d.map(({key:r,props:e})=>s.jsx(I,{...e},r))}))}function N(r){d=d.filter(e=>e.key!==r),C()}function a(r,e,c){p++,d.push({key:p,props:{message:r,variant:e,icon:c?.icon,duration:c?.duration,k:p}}),C()}const o={message:(r,e)=>a(r,e?.variant??"info",e),info:(r,e)=>a(r,"info",e),success:(r,e)=>a(r,"success",e),warning:(r,e)=>a(r,"warning",e),error:(r,e)=>a(r,"error",e)},U={title:"Components/Toast",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:'A global Toast utility supporting info, success, warning, and error variants. Use `toast.success("...")` and similar methods to display notifications.'}}}},i={render:()=>s.jsxs("div",{className:"flex flex-wrap gap-4",children:[s.jsx(t,{onClick:()=>o.info("This is an informational message."),children:"Info"}),s.jsx(t,{onClick:()=>o.success("Operation successful!"),children:"Success"}),s.jsx(t,{onClick:()=>o.warning("This is a warning message."),children:"Warning"}),s.jsx(t,{onClick:()=>o.error("An error occurred!"),children:"Error"})]})},l={render:()=>s.jsx(t,{onClick:()=>o.success("Disappears after 5 seconds",{duration:5e3}),children:"Custom Duration (5s)"})},u={render:()=>s.jsx(t,{onClick:()=>o.success("With custom icon",{icon:s.jsx("span",{role:"img","aria-label":"rocket",className:"text-lg",children:"🚀"})}),children:"Custom Icon"})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Button onClick={() => toast.success('Disappears after 5 seconds', {
    duration: 5000
  })}>
      Custom Duration (5s)
    </Button>
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Button onClick={() => toast.success('With custom icon', {
    icon: <span role="img" aria-label="rocket" className="text-lg">
              🚀
            </span>
  })}>
      Custom Icon
    </Button>
}`,...u.parameters?.docs?.source}}};const q=["Default","CustomDuration","CustomIcon"];export{l as CustomDuration,u as CustomIcon,i as Default,q as __namedExportsOrder,U as default};
