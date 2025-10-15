import{e as I,j as e,r}from"./iframe-Dql1y_Ga.js";import{c as o}from"./clsx-B-dksMZM.js";function a({value:t,onChange:s,className:l,centered:c=!1,children:d,variant:i="underline",size:j="md",fullWidth:N=!1}){const k=I.Children.toArray(d).filter(n=>I.isValidElement(n)&&n.type===S),C={sm:"text-sm px-2.5 py-1.5",md:"text-base px-3 py-2",lg:"text-lg px-4 py-2.5"},b={underline:{container:"border-b border-zinc-200 dark:border-zinc-700",tab:"",active:"font-semibold text-zinc-900 dark:text-zinc-100",inactive:"font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"},pills:{container:"gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg",tab:"rounded-md",active:"bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-semibold shadow-sm",inactive:"text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white/50 dark:hover:bg-zinc-700/50"}};return e.jsxs("div",{className:o("w-full",l),children:[e.jsx("div",{className:o("flex",b[i].container,c?"justify-center":"justify-start",N&&"justify-stretch"),role:"tablist",children:k.map(n=>{const w=t===n.props.value,m=n.props.disabled;return e.jsxs("div",{role:"tab","aria-selected":w,"aria-disabled":m,tabIndex:m?-1:0,className:o("relative select-none transition-all duration-200 outline-none flex items-center gap-1.5",C[j],b[i].tab,w?b[i].active:b[i].inactive,m?"opacity-40 cursor-not-allowed":"cursor-pointer",N&&"flex-1 justify-center"),onClick:()=>{m||s?.(n.props.value)},children:[n.props.label,i==="underline"&&e.jsx("span",{className:o("absolute left-0 right-0 -bottom-px h-0.5 transition-all duration-200",w?"bg-zinc-900 dark:bg-zinc-100":"bg-transparent")})]},n.props.value)})}),e.jsx("div",{className:o(i!=="pills"&&"pt-4"),children:k.find(n=>n.props.value===t)?.props.children})]})}const S=()=>null;a.Item=S;a.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Tabs",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},centered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'underline' | 'pills'",elements:[{name:"literal",value:"'underline'"},{name:"literal",value:"'pills'"}]},description:"",defaultValue:{value:"'underline'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const L={title:"Components/Tabs",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A flexible Tabs component with multiple variants, sizes, and features including icons, and accessibility support."}}},args:{centered:!1,variant:"underline",size:"md",fullWidth:!1},argTypes:{centered:{control:"boolean",description:"Centers the tabs horizontally"},variant:{control:"select",options:["underline","pills"],description:"Visual style variant of the tabs"},size:{control:"select",options:["sm","md","lg"],description:"Size of the tab items"},fullWidth:{control:"boolean",description:"Makes tabs stretch to fill container width"},value:{control:"text"},onChange:{action:"onChange"}}},p={render:t=>{const[s,l]=r.useState("profile");return e.jsx("div",{className:"w-[600px]",children:e.jsxs(a,{...t,value:s,onChange:l,children:[e.jsx(a.Item,{value:"profile",label:"Profile",children:e.jsx("p",{className:"dark:text-white",children:"This is the profile panel."})}),e.jsx(a.Item,{value:"settings",label:"Settings",children:e.jsx("p",{className:"dark:text-white",children:"Settings and preferences go here."})}),e.jsx(a.Item,{value:"security",label:"Security",children:e.jsx("p",{className:"dark:text-white",children:"Change your password and manage security settings."})})]})})}},u={render:t=>{const[s,l]=r.useState("profile"),[c,d]=r.useState("profile");return e.jsxs("div",{className:"w-[600px] space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2 dark:text-white",children:"Underline (Default)"}),e.jsxs(a,{...t,value:s,onChange:l,variant:"underline",children:[e.jsx(a.Item,{value:"profile",label:"Profile",children:e.jsx("p",{className:"dark:text-white",children:"Animated underline slides between tabs."})}),e.jsx(a.Item,{value:"settings",label:"Settings",children:e.jsx("p",{className:"dark:text-white",children:"Settings and preferences go here."})}),e.jsx(a.Item,{value:"security",label:"Security",children:e.jsx("p",{className:"dark:text-white",children:"Security settings panel."})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2 dark:text-white",children:"Pills"}),e.jsxs(a,{...t,value:c,onChange:d,variant:"pills",children:[e.jsx(a.Item,{value:"profile",label:"Profile",children:e.jsx("p",{className:"dark:text-white",children:"Rounded pill-style tabs with background."})}),e.jsx(a.Item,{value:"settings",label:"Settings",children:e.jsx("p",{className:"dark:text-white",children:"Settings and preferences go here."})}),e.jsx(a.Item,{value:"security",label:"Security",children:e.jsx("p",{className:"dark:text-white",children:"Security settings panel."})})]})]})]})}},h={render:t=>{const[s,l]=r.useState("user");return e.jsx("div",{className:"w-[600px]",children:e.jsxs(a,{...t,value:s,onChange:l,variant:"pills",children:[e.jsx(a.Item,{value:"user",label:e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),e.jsx("span",{children:"User"})]}),children:e.jsx("p",{className:"dark:text-white",children:"User profile information and details."})}),e.jsx(a.Item,{value:"settings",label:e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),e.jsx("span",{children:"Settings"})]}),children:e.jsx("p",{className:"dark:text-white",children:"Configure your preferences and options."})}),e.jsx(a.Item,{value:"notifications",label:e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),e.jsx("span",{children:"Notifications"})]}),children:e.jsx("p",{className:"dark:text-white",children:"Manage your notification preferences."})})]})})}},x={render:t=>{const[s,l]=r.useState("active");return e.jsx("div",{className:"w-[600px]",children:e.jsxs(a,{...t,value:s,onChange:l,children:[e.jsx(a.Item,{value:"active",label:"Active",children:e.jsx("p",{className:"dark:text-white",children:"This is the active tab."})}),e.jsx(a.Item,{value:"disabled",label:"Disabled",disabled:!0,children:e.jsx("p",{className:"dark:text-white",children:"This tab is disabled and cannot be selected."})}),e.jsx(a.Item,{value:"another",label:"Another",children:e.jsx("p",{className:"dark:text-white",children:"Another tab content."})})]})})}},v={render:t=>{const[s,l]=r.useState("tab1"),[c,d]=r.useState("tab1"),[i,j]=r.useState("tab1");return e.jsxs("div",{className:"w-[600px] space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2 dark:text-white",children:"Small"}),e.jsxs(a,{...t,value:s,onChange:l,size:"sm",variant:"pills",children:[e.jsx(a.Item,{value:"tab1",label:"Tab 1",children:e.jsx("p",{className:"dark:text-white text-sm",children:"Small sized tabs content."})}),e.jsx(a.Item,{value:"tab2",label:"Tab 2",children:e.jsx("p",{className:"dark:text-white text-sm",children:"Content for tab 2."})}),e.jsx(a.Item,{value:"tab3",label:"Tab 3",children:e.jsx("p",{className:"dark:text-white text-sm",children:"Content for tab 3."})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2 dark:text-white",children:"Medium (Default)"}),e.jsxs(a,{...t,value:c,onChange:d,size:"md",variant:"pills",children:[e.jsx(a.Item,{value:"tab1",label:"Tab 1",children:e.jsx("p",{className:"dark:text-white",children:"Medium sized tabs content."})}),e.jsx(a.Item,{value:"tab2",label:"Tab 2",children:e.jsx("p",{className:"dark:text-white",children:"Content for tab 2."})}),e.jsx(a.Item,{value:"tab3",label:"Tab 3",children:e.jsx("p",{className:"dark:text-white",children:"Content for tab 3."})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2 dark:text-white",children:"Large"}),e.jsxs(a,{...t,value:i,onChange:j,size:"lg",variant:"pills",children:[e.jsx(a.Item,{value:"tab1",label:"Tab 1",children:e.jsx("p",{className:"dark:text-white",children:"Large sized tabs content."})}),e.jsx(a.Item,{value:"tab2",label:"Tab 2",children:e.jsx("p",{className:"dark:text-white",children:"Content for tab 2."})}),e.jsx(a.Item,{value:"tab3",label:"Tab 3",children:e.jsx("p",{className:"dark:text-white",children:"Content for tab 3."})})]})]})]})}},g={render:t=>{const[s,l]=r.useState("dashboard");return e.jsx("div",{className:"w-[600px]",children:e.jsxs(a,{...t,value:s,onChange:l,fullWidth:!0,variant:"pills",children:[e.jsx(a.Item,{value:"dashboard",label:"Dashboard",children:e.jsx("p",{className:"dark:text-white",children:"Dashboard with full-width tabs."})}),e.jsx(a.Item,{value:"team",label:"Team",children:e.jsx("p",{className:"dark:text-white",children:"Team management section."})}),e.jsx(a.Item,{value:"projects",label:"Projects",children:e.jsx("p",{className:"dark:text-white",children:"View and manage projects."})})]})})}},T={render:t=>{const[s,l]=r.useState("about");return e.jsx("div",{className:"w-[600px]",children:e.jsxs(a,{...t,value:s,onChange:l,centered:!0,children:[e.jsx(a.Item,{value:"about",label:"About",children:e.jsx("p",{className:"dark:text-white",children:"About our company and mission."})}),e.jsx(a.Item,{value:"team",label:"Team",children:e.jsx("p",{className:"dark:text-white",children:"Meet our amazing team members."})}),e.jsx(a.Item,{value:"contact",label:"Contact",children:e.jsx("p",{className:"dark:text-white",children:"Get in touch with us."})})]})})}},f={render:t=>{const[s,l]=r.useState("tab1");return e.jsx("div",{className:"w-[600px]",children:e.jsxs(a,{...t,value:s,onChange:l,children:[e.jsx(a.Item,{value:"tab1",label:e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{role:"img","aria-label":"user",children:"👤"}),e.jsx("span",{children:"User"}),e.jsx("span",{className:"ml-1 px-1.5 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full",children:"New"})]}),children:e.jsx("p",{className:"dark:text-white",children:"User tab with badge in label."})}),e.jsx(a.Item,{value:"tab2",label:e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{role:"img","aria-label":"settings",children:"⚙️"}),e.jsx("span",{children:"Settings"})]}),children:e.jsx("p",{className:"dark:text-white",children:"Settings tab with icon in label."})}),e.jsx(a.Item,{value:"tab3",label:"Plain Label",children:e.jsx("p",{className:"dark:text-white",children:"Plain label tab."})})]})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('profile');
    return <div className="w-[600px]">
        <Tabs {...args} value={tab} onChange={setTab}>
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
        </Tabs>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tabUnderline, setTabUnderline] = useState('profile');
    const [tabPills, setTabPills] = useState('profile');
    return <div className="w-[600px] space-y-8">
        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-white">
            Underline (Default)
          </h3>
          <Tabs {...args} value={tabUnderline} onChange={setTabUnderline} variant="underline">
            <Tabs.Item value="profile" label="Profile">
              <p className="dark:text-white">
                Animated underline slides between tabs.
              </p>
            </Tabs.Item>
            <Tabs.Item value="settings" label="Settings">
              <p className="dark:text-white">
                Settings and preferences go here.
              </p>
            </Tabs.Item>
            <Tabs.Item value="security" label="Security">
              <p className="dark:text-white">Security settings panel.</p>
            </Tabs.Item>
          </Tabs>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-white">Pills</h3>
          <Tabs {...args} value={tabPills} onChange={setTabPills} variant="pills">
            <Tabs.Item value="profile" label="Profile">
              <p className="dark:text-white">
                Rounded pill-style tabs with background.
              </p>
            </Tabs.Item>
            <Tabs.Item value="settings" label="Settings">
              <p className="dark:text-white">
                Settings and preferences go here.
              </p>
            </Tabs.Item>
            <Tabs.Item value="security" label="Security">
              <p className="dark:text-white">Security settings panel.</p>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('user');
    return <div className="w-[600px]">
        <Tabs {...args} value={tab} onChange={setTab} variant="pills">
          <Tabs.Item value="user" label={<span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>User</span>
              </span>}>
            <p className="dark:text-white">
              User profile information and details.
            </p>
          </Tabs.Item>
          <Tabs.Item value="settings" label={<span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Settings</span>
              </span>}>
            <p className="dark:text-white">
              Configure your preferences and options.
            </p>
          </Tabs.Item>
          <Tabs.Item value="notifications" label={<span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span>Notifications</span>
              </span>}>
            <p className="dark:text-white">
              Manage your notification preferences.
            </p>
          </Tabs.Item>
        </Tabs>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('active');
    return <div className="w-[600px]">
        <Tabs {...args} value={tab} onChange={setTab}>
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
        </Tabs>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tabSm, setTabSm] = useState('tab1');
    const [tabMd, setTabMd] = useState('tab1');
    const [tabLg, setTabLg] = useState('tab1');
    return <div className="w-[600px] space-y-8">
        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-white">Small</h3>
          <Tabs {...args} value={tabSm} onChange={setTabSm} size="sm" variant="pills">
            <Tabs.Item value="tab1" label="Tab 1">
              <p className="dark:text-white text-sm">
                Small sized tabs content.
              </p>
            </Tabs.Item>
            <Tabs.Item value="tab2" label="Tab 2">
              <p className="dark:text-white text-sm">Content for tab 2.</p>
            </Tabs.Item>
            <Tabs.Item value="tab3" label="Tab 3">
              <p className="dark:text-white text-sm">Content for tab 3.</p>
            </Tabs.Item>
          </Tabs>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-white">
            Medium (Default)
          </h3>
          <Tabs {...args} value={tabMd} onChange={setTabMd} size="md" variant="pills">
            <Tabs.Item value="tab1" label="Tab 1">
              <p className="dark:text-white">Medium sized tabs content.</p>
            </Tabs.Item>
            <Tabs.Item value="tab2" label="Tab 2">
              <p className="dark:text-white">Content for tab 2.</p>
            </Tabs.Item>
            <Tabs.Item value="tab3" label="Tab 3">
              <p className="dark:text-white">Content for tab 3.</p>
            </Tabs.Item>
          </Tabs>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2 dark:text-white">Large</h3>
          <Tabs {...args} value={tabLg} onChange={setTabLg} size="lg" variant="pills">
            <Tabs.Item value="tab1" label="Tab 1">
              <p className="dark:text-white">Large sized tabs content.</p>
            </Tabs.Item>
            <Tabs.Item value="tab2" label="Tab 2">
              <p className="dark:text-white">Content for tab 2.</p>
            </Tabs.Item>
            <Tabs.Item value="tab3" label="Tab 3">
              <p className="dark:text-white">Content for tab 3.</p>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('dashboard');
    return <div className="w-[600px]">
        <Tabs {...args} value={tab} onChange={setTab} fullWidth variant="pills">
          <Tabs.Item value="dashboard" label="Dashboard">
            <p className="dark:text-white">Dashboard with full-width tabs.</p>
          </Tabs.Item>
          <Tabs.Item value="team" label="Team">
            <p className="dark:text-white">Team management section.</p>
          </Tabs.Item>
          <Tabs.Item value="projects" label="Projects">
            <p className="dark:text-white">View and manage projects.</p>
          </Tabs.Item>
        </Tabs>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('about');
    return <div className="w-[600px]">
        <Tabs {...args} value={tab} onChange={setTab} centered>
          <Tabs.Item value="about" label="About">
            <p className="dark:text-white">About our company and mission.</p>
          </Tabs.Item>
          <Tabs.Item value="team" label="Team">
            <p className="dark:text-white">Meet our amazing team members.</p>
          </Tabs.Item>
          <Tabs.Item value="contact" label="Contact">
            <p className="dark:text-white">Get in touch with us.</p>
          </Tabs.Item>
        </Tabs>
      </div>;
  }
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tab, setTab] = useState('tab1');
    return <div className="w-[600px]">
        <Tabs {...args} value={tab} onChange={setTab}>
          <Tabs.Item value="tab1" label={<span className="flex items-center gap-1.5">
                <span role="img" aria-label="user">
                  👤
                </span>
                <span>User</span>
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">
                  New
                </span>
              </span>}>
            <p className="dark:text-white">User tab with badge in label.</p>
          </Tabs.Item>
          <Tabs.Item value="tab2" label={<span className="flex items-center gap-1.5">
                <span role="img" aria-label="settings">
                  ⚙️
                </span>
                <span>Settings</span>
              </span>}>
            <p className="dark:text-white">Settings tab with icon in label.</p>
          </Tabs.Item>
          <Tabs.Item value="tab3" label="Plain Label">
            <p className="dark:text-white">Plain label tab.</p>
          </Tabs.Item>
        </Tabs>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const M=["Default","Variants","WithIcons","DisabledTab","Sizes","FullWidth","Centered","ComplexLabel"];export{T as Centered,f as ComplexLabel,p as Default,x as DisabledTab,g as FullWidth,v as Sizes,u as Variants,h as WithIcons,M as __namedExportsOrder,L as default};
