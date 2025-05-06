import{j as e}from"./jsx-runtime-9bc08dc0.js";import{S as r}from"./spinner-6592412a.js";import"./clsx-0839fdbe.js";const z={title:"Components/Spinner",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A minimal loading Spinner component using border animation. Supports custom size and optional color classes."}}},args:{size:24},argTypes:{size:{control:{type:"number",min:8,max:128,step:4}},className:{control:"text"}}},o={},n={render:s=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(r,{...s,size:16}),e.jsx(r,{...s,size:24}),e.jsx(r,{...s,size:32}),e.jsx(r,{...s,size:48})]})},a={render:s=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(r,{...s,color:"#3b82f6"})," ",e.jsx(r,{...s,color:"#ef4444"})," ",e.jsx(r,{...s,color:"#22c55e"})," ",e.jsx(r,{...s,color:"#facc15"})," "]})};var c,i,t;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(t=(i=o.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-6">
      <Spinner {...args} size={16} />
      <Spinner {...args} size={24} />
      <Spinner {...args} size={32} />
      <Spinner {...args} size={48} />
    </div>
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-6">
      <Spinner {...args} color="#3b82f6" /> {/* blue-500 */}
      <Spinner {...args} color="#ef4444" /> {/* red-500 */}
      <Spinner {...args} color="#22c55e" /> {/* green-500 */}
      <Spinner {...args} color="#facc15" /> {/* yellow-400 */}
    </div>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const j=["Basic","Sizes","CustomColors"];export{o as Basic,a as CustomColors,n as Sizes,j as __namedExportsOrder,z as default};
