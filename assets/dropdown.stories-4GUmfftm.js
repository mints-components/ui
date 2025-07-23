import{j as e}from"./iframe-ChMP4v6q.js";import{B as i}from"./button-B9KDCXs2.js";import{c as p}from"./clsx-B-dksMZM.js";import"./spinner-B0vGxj-t.js";function c({menu:l,align:m="right",children:u}){return e.jsx("div",{className:"relative inline-block text-left",children:e.jsxs("div",{className:"group inline-flex flex-col",children:[e.jsx("div",{className:"cursor-pointer",children:u}),e.jsx("div",{className:p("absolute top-full translate-y-1 group-hover:translate-y-2 transition-all duration-200 ease-out","opacity-0 invisible group-hover:opacity-100 group-hover:visible","min-w-[160px] rounded-md border border-gray-200 bg-white shadow-lg z-50",m==="right"?"right-0":"left-0"),children:e.jsx("ul",{className:"py-1 text-sm text-gray-700",children:l.map((r,d)=>r.href?e.jsx("a",{href:r.href,className:"block px-4 py-2 hover:bg-gray-100",children:r.label},d):e.jsx("li",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer",onClick:r.onClick,children:r.label},d))})})]})})}c.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"union",raw:"JSX.Element | string",elements:[{name:"JSX.Element"},{name:"string"}]},description:""},menu:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}}}};const b={title:"Components/Dropdown",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A Dropdown component that displays a menu on hover. Supports alignment and custom trigger elements."}}},args:{menu:[{label:"Profile",href:"/profile"},{label:"Settings",href:"/settings"},{label:"Logout",href:"/logout"}]},argTypes:{align:{control:"radio",options:["left","right"]}}},n={args:{children:e.jsx(i,{children:"Dropdown"})}},t={args:{children:e.jsx("span",{className:"cursor-pointer text-sm font-medium dark:text-white",children:"Hover me"})}},o={args:{align:"left",children:e.jsx(i,{children:"Left Aligned"})}},a={args:{align:"right",children:e.jsx(i,{children:"Right Aligned"})}},s={render:l=>e.jsx(c,{...l,menu:[{label:"Dashboard",href:"/dashboard"},{label:"Notifications",href:"/notifications"},{label:"Logout",onClick:()=>alert("Logging out...")}],children:e.jsx(i,{children:"Custom Menu"})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button>Dropdown</Button>
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span className="cursor-pointer text-sm font-medium dark:text-white">
        Hover me
      </span>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'left',
    children: <Button>Left Aligned</Button>
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'right',
    children: <Button>Right Aligned</Button>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const y=["Default","WithTextTrigger","LeftAligned","RightAligned","CustomMenuItems"];export{s as CustomMenuItems,n as Default,o as LeftAligned,a as RightAligned,t as WithTextTrigger,y as __namedExportsOrder,b as default};
