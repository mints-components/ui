import{j as e}from"./iframe-BmhvYU5E.js";import{S as s}from"./spinner-BQfO4u9N.js";import"./clsx-B-dksMZM.js";const p={title:"Components/Spinner",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A minimal loading Spinner component using border animation. Supports custom size and optional color classes."}}},args:{size:24},argTypes:{size:{control:{type:"number",min:8,max:128,step:4}},className:{control:"text"}}},o={},n={render:r=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{...r,size:16}),e.jsx(s,{...r,size:24}),e.jsx(s,{...r,size:32}),e.jsx(s,{...r,size:48})]})},a={render:r=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{...r,color:"#3b82f6"})," ",e.jsx(s,{...r,color:"#ef4444"})," ",e.jsx(s,{...r,color:"#22c55e"})," ",e.jsx(s,{...r,color:"#facc15"})," "]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-6">
      <Spinner {...args} size={16} />
      <Spinner {...args} size={24} />
      <Spinner {...args} size={32} />
      <Spinner {...args} size={48} />
    </div>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-6">
      <Spinner {...args} color="#3b82f6" /> {/* blue-500 */}
      <Spinner {...args} color="#ef4444" /> {/* red-500 */}
      <Spinner {...args} color="#22c55e" /> {/* green-500 */}
      <Spinner {...args} color="#facc15" /> {/* yellow-400 */}
    </div>
}`,...a.parameters?.docs?.source}}};const m=["Default","Sizes","CustomColors"];export{a as CustomColors,o as Default,n as Sizes,m as __namedExportsOrder,p as default};
