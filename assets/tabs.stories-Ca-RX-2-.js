import{e as h,j as e,r as p}from"./iframe-dC1saC9w.js";import{c as i}from"./clsx-B-dksMZM.js";function a({value:s,onChange:r,className:l,centered:g=!1,children:T}){const u=h.Children.toArray(T).filter(t=>h.isValidElement(t)&&t.type===x);return e.jsxs("div",{className:i("w-full",l),children:[e.jsx("div",{className:i("flex border-b border-zinc-200 dark:border-zinc-700",g?"justify-center":"justify-start"),role:"tablist",children:u.map(t=>{const b=s===t.props.value,n=t.props.disabled;return e.jsxs("div",{role:"tab","aria-selected":b,"aria-disabled":n,tabIndex:n?-1:0,className:i("relative px-3 py-2 select-none transition-colors outline-none text-base",b?"font-bold text-zinc-900 dark:text-zinc-100":"font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100",n?"opacity-40 cursor-not-allowed":"cursor-pointer"),onClick:()=>{n||r?.(t.props.value)},onKeyDown:m=>{!n&&(m.key==="Enter"||m.key===" ")&&r?.(t.props.value)},children:[t.props.label,e.jsx("span",{className:i("absolute left-1/2 -translate-x-1/2 -bottom-px rounded-full transition-all duration-200",b?"w-2/3 h-0.5 bg-zinc-600 dark:bg-zinc-100":"w-0 h-0 bg-transparent")})]},t.props.value)})}),e.jsx("div",{className:"pt-4",children:u.find(t=>t.props.value===s)?.props.children})]})}const x=()=>null;a.Item=x;a.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Tabs",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},centered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const j={title:"Components/Tabs",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A flexible Tabs component supporting controlled state, disabled tabs, and optional centered alignment."}}},args:{centered:!1},argTypes:{centered:{control:"boolean"},value:{control:"text"},onChange:{action:"onChange"}}},o={render:s=>{const[r,l]=p.useState("profile");return e.jsxs(a,{...s,value:r,onChange:l,children:[e.jsx(a.Item,{value:"profile",label:"Profile",children:e.jsx("p",{className:"dark:text-white",children:"This is the profile panel."})}),e.jsx(a.Item,{value:"settings",label:"Settings",children:e.jsx("p",{className:"dark:text-white",children:"Settings and preferences go here."})}),e.jsx(a.Item,{value:"security",label:"Security",children:e.jsx("p",{className:"dark:text-white",children:"Change your password and manage security settings."})})]})}},c={render:s=>{const[r,l]=p.useState("active");return e.jsxs(a,{...s,value:r,onChange:l,children:[e.jsx(a.Item,{value:"active",label:"Active",children:e.jsx("p",{className:"dark:text-white",children:"This is the active tab."})}),e.jsx(a.Item,{value:"disabled",label:"Disabled",disabled:!0,children:e.jsx("p",{className:"dark:text-white",children:"This tab is disabled and cannot be selected."})}),e.jsx(a.Item,{value:"another",label:"Another",children:e.jsx("p",{className:"dark:text-white",children:"Another tab content."})})]})}},d={render:s=>{const[r,l]=p.useState("tab1");return e.jsxs(a,{...s,value:r,onChange:l,children:[e.jsx(a.Item,{value:"tab1",label:e.jsxs("span",{children:[e.jsx("span",{role:"img","aria-label":"user",children:"👤"})," ","User"]}),children:e.jsx("p",{className:"dark:text-white",children:"User tab with icon in label."})}),e.jsx(a.Item,{value:"tab2",label:e.jsxs("span",{children:[e.jsx("span",{role:"img","aria-label":"settings",children:"⚙️"})," ","Settings"]}),children:e.jsx("p",{className:"dark:text-white",children:"Settings tab with icon in label."})}),e.jsx(a.Item,{value:"tab3",label:"Plain Label",children:e.jsx("p",{className:"dark:text-white",children:"Plain label tab."})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('profile');
    return <Tabs {...args} value={tab} onChange={setTab}>
        <Tabs.Item value="profile" label="Profile">
          <p className="dark:text-white">This is the profile panel.</p>
        </Tabs.Item>
        <Tabs.Item value="settings" label="Settings">
          <p className="dark:text-white">Settings and preferences go here.</p>
        </Tabs.Item>
        <Tabs.Item value="security" label="Security">
          <p className="dark:text-white">
            Change your password and manage security settings.
          </p>
        </Tabs.Item>
      </Tabs>;
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('active');
    return <Tabs {...args} value={tab} onChange={setTab}>
        <Tabs.Item value="active" label="Active">
          <p className="dark:text-white">This is the active tab.</p>
        </Tabs.Item>
        <Tabs.Item value="disabled" label="Disabled" disabled>
          <p className="dark:text-white">
            This tab is disabled and cannot be selected.
          </p>
        </Tabs.Item>
        <Tabs.Item value="another" label="Another">
          <p className="dark:text-white">Another tab content.</p>
        </Tabs.Item>
      </Tabs>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('tab1');
    return <Tabs {...args} value={tab} onChange={setTab}>
        <Tabs.Item value="tab1" label={<span>
              <span role="img" aria-label="user">
                👤
              </span>{' '}
              User
            </span>}>
          <p className="dark:text-white">User tab with icon in label.</p>
        </Tabs.Item>
        <Tabs.Item value="tab2" label={<span>
              <span role="img" aria-label="settings">
                ⚙️
              </span>{' '}
              Settings
            </span>}>
          <p className="dark:text-white">Settings tab with icon in label.</p>
        </Tabs.Item>
        <Tabs.Item value="tab3" label="Plain Label">
          <p className="dark:text-white">Plain label tab.</p>
        </Tabs.Item>
      </Tabs>;
  }
}`,...d.parameters?.docs?.source}}};const I=["Default","DisabledTab","ComplexLabel"];export{d as ComplexLabel,o as Default,c as DisabledTab,I as __namedExportsOrder,j as default};
