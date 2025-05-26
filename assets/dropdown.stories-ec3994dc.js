import{j as e}from"./jsx-runtime-9bc08dc0.js";import{B as i}from"./button-84d48078.js";import{c as L}from"./clsx-0839fdbe.js";import"./spinner-6592412a.js";function c({menu:l,align:B="right",children:C}){return e.jsx("div",{className:"relative inline-block text-left",children:e.jsxs("div",{className:"group inline-flex flex-col",children:[e.jsx("div",{className:"cursor-pointer",children:C}),e.jsx("div",{className:L("absolute top-full translate-y-1 group-hover:translate-y-2 transition-all duration-200 ease-out","opacity-0 invisible group-hover:opacity-100 group-hover:visible","min-w-[160px] rounded-md border border-gray-200 bg-white shadow-lg z-50",B==="right"?"right-0":"left-0"),children:e.jsx("ul",{className:"py-1 text-sm text-gray-700",children:l.map((r,d)=>r.href?e.jsx("a",{href:r.href,className:"block px-4 py-2 hover:bg-gray-100",children:r.label},d):e.jsx("li",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer",onClick:r.onClick,children:r.label},d))})})]})})}c.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"union",raw:"JSX.Element | string",elements:[{name:"JSX.Element"},{name:"string"}]},description:""},menu:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}}}};const R={title:"Components/Dropdown",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Dropdown component that displays a menu on hover. Supports alignment and custom trigger elements."}}},args:{menu:[{label:"Profile",href:"/profile"},{label:"Settings",href:"/settings"},{label:"Logout",href:"/logout"}]},argTypes:{align:{control:"radio",options:["left","right"]}}},n={args:{children:e.jsx(i,{children:"Dropdown"})}},o={args:{children:e.jsx("span",{className:"cursor-pointer text-sm font-medium",children:"Hover me"})}},t={args:{align:"left",children:e.jsx(i,{children:"Left Aligned"})}},a={args:{align:"right",children:e.jsx(i,{children:"Right Aligned"})}},s={render:l=>e.jsx(c,{...l,menu:[{label:"Dashboard",href:"/dashboard"},{label:"Notifications",href:"/notifications"},{label:"Logout",onClick:()=>alert("Logging out...")}],children:e.jsx(i,{children:"Custom Menu"})})};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <Button>Dropdown</Button>
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <span className="cursor-pointer text-sm font-medium">Hover me</span>
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,b,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    align: 'left',
    children: <Button>Left Aligned</Button>
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,w,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    align: 'right',
    children: <Button>Right Aligned</Button>
  }
}`,...(j=(w=a.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var D,N,A;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} menu={[{
    label: 'Dashboard',
    href: '/dashboard'
  }, {
    label: 'Notifications',
    href: '/notifications'
  }, {
    label: 'Logout',
    onClick: () => alert('Logging out...')
  }]}>
      <Button>Custom Menu</Button>
    </Dropdown>
}`,...(A=(N=s.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const E=["Default","WithTextTrigger","LeftAligned","RightAligned","CustomMenuItems"];export{s as CustomMenuItems,n as Default,t as LeftAligned,a as RightAligned,o as WithTextTrigger,E as __namedExportsOrder,R as default};
