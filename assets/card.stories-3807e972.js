import{j as e}from"./jsx-runtime-9bc08dc0.js";import{c as d}from"./clsx-0839fdbe.js";function a({size:t="default",title:o,minimal:y=!1,className:N,children:S,...R}){const F="rounded-lg border border-zinc-200 shadow-sm bg-white dark:bg-zinc-900 dark:border-zinc-800 transition-shadow hover:shadow-md",k={sm:"p-4 text-sm",default:"p-6 text-base",lg:"p-6 text-base"}[t],q={sm:"text-sm",default:"text-base",lg:"text-lg"}[t],M=d("font-semibold text-zinc-900 dark:text-zinc-100 mb-3 leading-snug tracking-tight",q),_="border-t border-zinc-200 dark:border-zinc-800 my-3";return e.jsxs("div",{className:d(F,k,N),...R,children:[o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:M,children:o}),!y&&e.jsx("div",{className:_})]}),e.jsx("div",{children:S})]})}a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},minimal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const E={title:"Components/Card",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Card component that supports different sizes, optional title with divider, and a minimal mode to simplify the layout."}}},args:{size:"default",minimal:!1},argTypes:{size:{control:"radio",options:["sm","default","lg"]},minimal:{control:"boolean"},title:{control:"text"}}},r={args:{title:"Card Title",children:e.jsx("p",{children:"This is a basic card content."})}},s={render:t=>e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-2xl",children:[e.jsx(a,{...t,size:"sm",title:"Small Card",children:e.jsx("p",{children:"Content for small card."})}),e.jsx(a,{...t,size:"default",title:"Default Card",children:e.jsx("p",{children:"Content for default card."})}),e.jsx(a,{...t,size:"lg",title:"Large Card",children:e.jsx("p",{children:"Content for large card."})})]})},n={args:{title:"Minimal Card",minimal:!0,children:e.jsx("p",{children:"This card does not have a divider between the title and the content."})}},i={args:{children:e.jsx("p",{children:"This card has no title, only content."})}},l={render:t=>e.jsx(a,{...t,title:"Custom Content",children:e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:"Feature one"}),e.jsx("li",{children:"Feature two"}),e.jsx("li",{children:"Feature three"})]})})};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    children: <p>This is a basic card content.</p>
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,g,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Minimal Card',
    minimal: true,
    children: <p>
        This card does not have a divider between the title and the content.
      </p>
  }
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var j,b,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <p>This card has no title, only content.</p>
  }
}`,...(z=(b=i.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var v,w,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Card {...args} title="Custom Content">
      <ul className="list-disc pl-6 space-y-2">
        <li>Feature one</li>
        <li>Feature two</li>
        <li>Feature three</li>
      </ul>
    </Card>
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const L=["Basic","Sizes","Minimal","WithoutTitle","CustomContent"];export{r as Basic,l as CustomContent,n as Minimal,s as Sizes,i as WithoutTitle,L as __namedExportsOrder,E as default};
