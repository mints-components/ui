import{j as s}from"./jsx-runtime-9bc08dc0.js";import{c as A}from"./clsx-0839fdbe.js";const n={sm:{box:"w-8 h-8",text:"text-sm"},md:{box:"w-10 h-10",text:"text-base"},lg:{box:"w-16 h-16",text:"text-xl"}};function a({src:e,alt:p,name:r,size:x="md",rounded:f=!0,className:v,...g}){const z=(r==null?void 0:r.charAt(0).toUpperCase())??"?",j=!!e,{box:h,text:y}=n[x]??n.md;return s.jsx("div",{className:A("inline-flex items-center justify-center bg-gray-200 text-gray-600 font-medium overflow-hidden",h,y,f?"rounded-full":"rounded-md",v),...g,children:j?s.jsx("img",{src:e,alt:p||r||"Avatar",className:"w-full h-full object-cover"}):z})}a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const w={title:"Components/Avatar",component:a,parameters:{layout:"centered"},args:{name:"Mints"}},t={render:e=>s.jsxs("div",{className:"space-x-4",children:[s.jsx(a,{...e,size:"md",rounded:!1}),s.jsx(a,{...e,size:"md",rounded:!0})]})},d={render:e=>s.jsxs("div",{className:"space-x-4",children:[s.jsx(a,{...e,size:"sm"}),s.jsx(a,{...e,size:"md"}),s.jsx(a,{...e,size:"lg"})]})};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div className="space-x-4">
      <Avatar {...args} size="md" rounded={false} />
      <Avatar {...args} size="md" rounded />
    </div>
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,c,u;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="space-x-4">
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
}`,...(u=(c=d.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const q=["Rounded","Size"];export{t as Rounded,d as Size,q as __namedExportsOrder,w as default};
