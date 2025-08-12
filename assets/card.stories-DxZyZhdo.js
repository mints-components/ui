import{j as e}from"./iframe-DLJSxogn.js";import{c as o}from"./clsx-B-dksMZM.js";import{D as C}from"./divider-Clm0zfnJ.js";function a({size:t="default",title:d,minimal:c=!1,className:m,children:p,...u}){const h=o("rounded-lg border shadow-sm transition-shadow","bg-white border-zinc-200 hover:shadow-md","dark:bg-[#1E1F2A] dark:border-white/10 dark:shadow-[0_4px_24px_0_rgba(0,0,0,0.40)] dark:hover:shadow-[0_0_0_2px_rgba(255,255,255,0.06),0_4px_24px_0_rgba(0,0,0,0.40)]"),x={sm:"p-4 text-sm",default:"p-6 text-base",lg:"p-6 text-base"}[t],f={sm:"text-sm",default:"text-base",lg:"text-lg"}[t],g=o("font-semibold text-zinc-900 dark:text-zinc-100 mb-3 leading-snug tracking-tight",f);return e.jsxs("div",{className:o(h,x,m),...u,children:[d&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:g,children:d}),!c&&e.jsx(C,{})]}),e.jsx("div",{className:"text-zinc-800 dark:text-zinc-100",children:p})]})}a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},minimal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const z={title:"Components/Card",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Card component that supports different sizes, optional title with divider, and a minimal mode to simplify the layout."}}},args:{size:"default",minimal:!1},argTypes:{size:{control:"radio",options:["sm","default","lg"]},minimal:{control:"boolean"},title:{control:"text"}}},r={args:{title:"Card Title",children:e.jsx("p",{children:"This is a basic card content."})}},s={render:t=>e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-2xl",children:[e.jsx(a,{...t,size:"sm",title:"Small Card",children:e.jsx("p",{children:"Content for small card."})}),e.jsx(a,{...t,size:"default",title:"Default Card",children:e.jsx("p",{children:"Content for default card."})}),e.jsx(a,{...t,size:"lg",title:"Large Card",children:e.jsx("p",{children:"Content for large card."})})]})},n={args:{title:"Minimal Card",minimal:!0,children:e.jsx("p",{children:"This card does not have a divider between the title and the content."})}},l={args:{children:e.jsx("p",{children:"This card has no title, only content."})}},i={render:t=>e.jsx(a,{...t,title:"Custom Content",children:e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:"Feature one"}),e.jsx("li",{children:"Feature two"}),e.jsx("li",{children:"Feature three"})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    children: <p>This is a basic card content.</p>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-6 w-full max-w-2xl">
      <Card {...args} size="sm" title="Small Card">
        <p>Content for small card.</p>
      </Card>
      <Card {...args} size="default" title="Default Card">
        <p>Content for default card.</p>
      </Card>
      <Card {...args} size="lg" title="Large Card">
        <p>Content for large card.</p>
      </Card>
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Minimal Card',
    minimal: true,
    children: <p>
        This card does not have a divider between the title and the content.
      </p>
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <p>This card has no title, only content.</p>
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} title="Custom Content">
      <ul className="list-disc pl-6 space-y-2">
        <li>Feature one</li>
        <li>Feature two</li>
        <li>Feature three</li>
      </ul>
    </Card>
}`,...i.parameters?.docs?.source}}};const _=["Default","Sizes","Minimal","WithoutTitle","CustomContent"];export{i as CustomContent,r as Default,n as Minimal,s as Sizes,l as WithoutTitle,_ as __namedExportsOrder,z as default};
