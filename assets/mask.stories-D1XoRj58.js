import{j as e}from"./iframe-ChMP4v6q.js";import{B as a}from"./button-B9KDCXs2.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as d}from"./index-BZENhS_1.js";import{h as u}from"./waypoints-DZ7fXbZo.js";import"./spinner-B0vGxj-t.js";import"./index-BCpQmhj8.js";function r({open:t,opacity:s=100,zIndex:n=1e3,children:i,closable:c=!0,onClose:l}){return!t||typeof window>"u"?null:d.createPortal(e.jsxs("div",{className:p("fixed inset-0 flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm","bg-white dark:bg-zinc-900",t?"opacity-100":"opacity-0 pointer-events-none"),style:{zIndex:n,opacity:t?s/100:0},children:[c&&e.jsx(a,{icon:e.jsx(u,{}),onClick:l,size:"sm",variant:"link",className:"absolute top-4 right-4"}),i]}),document.body)}const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:"Components/Mask",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"A full-screen mask overlay component with blur and dark mode support. Includes optional close button, configurable opacity, and z-index."}}},argTypes:{opacity:{control:{type:"range",min:50,max:100,step:5},defaultValue:100,description:"Tailwind opacity value, 0~100."},zIndex:{control:{type:"number"},defaultValue:1e3,description:"z-index of the mask overlay."},closable:{control:{type:"boolean"},defaultValue:!0,description:"Show close button"}}},o={args:{open:!1,opacity:100,zIndex:1e3,closable:!0},render:t=>{const[{open:s},n]=m();return e.jsxs("div",{className:"p-8 space-y-4",children:[e.jsx(a,{onClick:()=>n({open:!0}),children:"Open Mask"}),e.jsx(r,{...t,open:s,onClose:()=>n({open:!1}),children:e.jsx("div",{className:"text-xl dark:text-white",children:"Loading..."})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Default"];export{o as Default,j as __namedExportsOrder,v as default};
