import{r as d,j as e}from"./iframe-D7P58e0d.js";import{B as r}from"./button-LyZA-EFy.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as u}from"./index-DGlMWLqm.js";import{h as m}from"./waypoints-Cg8FNXzs.js";import"./spinner-BPDjxLSy.js";import"./index-DrINtTX1.js";function a({open:t,opacity:s=100,zIndex:o=1e3,children:i,closable:l=!0,onClose:c}){return d.useEffect(()=>(t?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden"),()=>document.body.classList.remove("overflow-hidden")),[t]),!t||typeof window>"u"?null:u.createPortal(e.jsx("div",{className:p("fixed inset-0 overflow-y-auto transition-opacity duration-300 backdrop-blur-sm","bg-white dark:bg-zinc-900",t?"":"pointer-events-none"),style:{zIndex:o,opacity:t?s/100:0},children:e.jsxs("div",{className:"relative min-h-screen flex items-center justify-center px-4 py-12",children:[l&&e.jsx(r,{icon:e.jsx(m,{}),onClick:c,size:"sm",variant:"link",className:"absolute top-4 right-4"}),i]})}),document.body)}const{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,w={title:"Components/Mask",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"A full-screen mask overlay component with blur and dark mode support. Includes optional close button, configurable opacity, and z-index."}}},argTypes:{opacity:{control:{type:"range",min:50,max:100,step:5},defaultValue:100,description:"Tailwind opacity value, 0~100."},zIndex:{control:{type:"number"},defaultValue:1e3,description:"z-index of the mask overlay."},closable:{control:{type:"boolean"},defaultValue:!0,description:"Show close button"}}},n={args:{open:!1,opacity:100,zIndex:1e3,closable:!0},render:t=>{const[{open:s},o]=f();return e.jsxs("div",{className:"p-8 space-y-4",children:[e.jsx(r,{onClick:()=>o({open:!0}),children:"Open Mask"}),e.jsx(a,{...t,open:s,onClose:()=>o({open:!1}),children:e.jsx("div",{className:"text-xl dark:text-white",children:"Loading..."})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    opacity: 100,
    zIndex: 1000,
    closable: true
  },
  render: args => {
    const [{
      open
    }, updateArgs] = useArgs();
    return <div className="p-8 space-y-4">
        <Button onClick={() => updateArgs({
        open: true
      })}>Open Mask</Button>
        <Mask {...args} open={open} onClose={() => updateArgs({
        open: false
      })}>
          <div className="text-xl dark:text-white">Loading...</div>
        </Mask>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const j=["Default"];export{n as Default,j as __namedExportsOrder,w as default};
