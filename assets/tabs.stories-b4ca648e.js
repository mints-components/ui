import{j as e}from"./jsx-runtime-9bc08dc0.js";import{e as h,r as p}from"./index-87df5591.js";import{c as i}from"./clsx-0839fdbe.js";function a({value:r,onChange:t,className:l,centered:N=!1,children:D}){var m;const u=h.Children.toArray(D).filter(s=>h.isValidElement(s)&&s.type===A);return e.jsxs("div",{className:i("w-full",l),children:[e.jsx("div",{className:i("flex border-b border-zinc-200",N?"justify-center":"justify-start"),role:"tablist",children:u.map(s=>{const b=r===s.props.value,n=s.props.disabled;return e.jsxs("div",{role:"tab","aria-selected":b,"aria-disabled":n,tabIndex:n?-1:0,className:i("relative px-3 py-2 select-none transition-colors outline-none text-base",b?"font-bold text-zinc-900":"font-medium text-zinc-500 hover:text-zinc-900",n?"opacity-40 cursor-not-allowed":"cursor-pointer"),onClick:()=>{n||t==null||t(s.props.value)},onKeyDown:v=>{!n&&(v.key==="Enter"||v.key===" ")&&(t==null||t(s.props.value))},children:[s.props.label,e.jsx("span",{className:i("absolute left-1/2 -translate-x-1/2 -bottom-px rounded-full transition-all duration-200",b?"w-2/3 h-0.5 bg-zinc-600":"w-0 h-0 bg-transparent")})]},s.props.value)})}),e.jsx("div",{className:"pt-4",children:(m=u.find(s=>s.props.value===r))==null?void 0:m.props.children})]})}const A=()=>null;a.Item=A;a.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Tabs",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},centered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const z={title:"Components/Tabs",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A flexible Tabs component supporting controlled state, disabled tabs, and optional centered alignment."}}},args:{centered:!1},argTypes:{centered:{control:"boolean"},value:{control:"text"},onChange:{action:"onChange"}}},o={render:r=>{const[t,l]=p.useState("profile");return e.jsxs(a,{...r,value:t,onChange:l,children:[e.jsx(a.Item,{value:"profile",label:"Profile",children:e.jsx("p",{children:"This is the profile panel."})}),e.jsx(a.Item,{value:"settings",label:"Settings",children:e.jsx("p",{children:"Settings and preferences go here."})}),e.jsx(a.Item,{value:"security",label:"Security",children:e.jsx("p",{children:"Change your password and manage security settings."})})]})}},d={render:r=>{const[t,l]=p.useState("active");return e.jsxs(a,{...r,value:t,onChange:l,children:[e.jsx(a.Item,{value:"active",label:"Active",children:e.jsx("div",{children:"This is the active tab."})}),e.jsx(a.Item,{value:"disabled",label:"Disabled",disabled:!0,children:e.jsx("div",{children:"This tab is disabled and cannot be selected."})}),e.jsx(a.Item,{value:"another",label:"Another",children:e.jsx("div",{children:"Another tab content."})})]})}},c={render:r=>{const[t,l]=p.useState("tab1");return e.jsxs(a,{...r,value:t,onChange:l,children:[e.jsx(a.Item,{value:"tab1",label:e.jsxs("span",{children:[e.jsx("span",{role:"img","aria-label":"user",children:"👤"})," ","User"]}),children:e.jsx("div",{children:"User tab with icon in label."})}),e.jsx(a.Item,{value:"tab2",label:e.jsxs("span",{children:[e.jsx("span",{role:"img","aria-label":"settings",children:"⚙️"})," ","Settings"]}),children:e.jsx("div",{children:"Settings tab with icon in label."})}),e.jsx(a.Item,{value:"tab3",label:"Plain Label",children:e.jsx("div",{children:"Plain label tab."})})]})}};var T,x,g;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('profile');
    return <Tabs {...args} value={tab} onChange={setTab}>
        <Tabs.Item value="profile" label="Profile">
          <p>This is the profile panel.</p>
        </Tabs.Item>
        <Tabs.Item value="settings" label="Settings">
          <p>Settings and preferences go here.</p>
        </Tabs.Item>
        <Tabs.Item value="security" label="Security">
          <p>Change your password and manage security settings.</p>
        </Tabs.Item>
      </Tabs>;
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,j,I;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('active');
    return <Tabs {...args} value={tab} onChange={setTab}>
        <Tabs.Item value="active" label="Active">
          <div>This is the active tab.</div>
        </Tabs.Item>
        <Tabs.Item value="disabled" label="Disabled" disabled>
          <div>This tab is disabled and cannot be selected.</div>
        </Tabs.Item>
        <Tabs.Item value="another" label="Another">
          <div>Another tab content.</div>
        </Tabs.Item>
      </Tabs>;
  }
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var y,S,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('tab1');
    return <Tabs {...args} value={tab} onChange={setTab}>
        <Tabs.Item value="tab1" label={<span>
              <span role="img" aria-label="user">
                👤
              </span>{' '}
              User
            </span>}>
          <div>User tab with icon in label.</div>
        </Tabs.Item>
        <Tabs.Item value="tab2" label={<span>
              <span role="img" aria-label="settings">
                ⚙️
              </span>{' '}
              Settings
            </span>}>
          <div>Settings tab with icon in label.</div>
        </Tabs.Item>
        <Tabs.Item value="tab3" label="Plain Label">
          <div>Plain label tab.</div>
        </Tabs.Item>
      </Tabs>;
  }
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const E=["Default","DisabledTab","ComplexLabel"];export{c as ComplexLabel,o as Default,d as DisabledTab,E as __namedExportsOrder,z as default};
