import{r as n,j as t,e as G}from"./iframe-BgYek-kT.js";import{B as H}from"./button-CC3EVXAm.js";import{c as O}from"./clsx-B-dksMZM.js";import"./spinner-BwPqPz2B.js";function j({strings:a,speed:k=60,deleteSpeed:A,startDelay:v=0,pauseBetween:m=1200,loop:i=!1,cursor:l=!0,cursorBlink:F=!0,holdOnFinish:E,className:V,onCycleEnd:g,...P}){const r=n.useMemo(()=>(Array.isArray(a)?a.filter(Boolean):[a]).map(String),[a]),[o,c]=n.useState("typing"),[d,q]=n.useState(0),[f,h]=n.useState(0),[p,W]=n.useState(v===0),e=n.useRef(null),I=Math.max(0,k),R=Math.max(0,A??Math.max(1,Math.floor(k/2))),C=E??m,u=r[d]??"";n.useEffect(()=>{if(!p)return e.current=window.setTimeout(()=>W(!0),Math.max(0,v)),()=>{e.current&&window.clearTimeout(e.current)}},[v,p]),n.useEffect(()=>{if(!p||r.length===0)return;e.current&&window.clearTimeout(e.current);const D=o==="typing"&&f===u.length,U=o==="deleting"&&f===0;if(o==="typing")D?e.current=window.setTimeout(()=>{if(!i&&r.length===1){c("pausing");return}c((r.length===1,"pausing"))},m):e.current=window.setTimeout(()=>{h(s=>Math.min(u.length,s+1))},I);else if(o==="pausing"){const s=!i&&d===r.length-1,M=i||r.length>1;e.current=window.setTimeout(()=>{if(s&&!M){g?.();return}M&&c("deleting")},s&&!M?C:m)}else if(o==="deleting")if(!U)e.current=window.setTimeout(()=>{h(s=>Math.max(0,s-1))},R);else{const s=r.length<=1?0:(d+1)%r.length;!i&&d===r.length-1?(q(0),c("typing"),h(0),g?.()):(q(s),c("typing"),h(0),s===0&&g?.())}return()=>{e.current&&window.clearTimeout(e.current)}},[p,o,f,u.length,I,R,m,C,i,r.length,d,g]);const z=p?u.slice(0,f):"",L=u,_=()=>{if(!l)return null;if(G.isValidElement(l))return l;const D=typeof l=="string"?l:"|";return t.jsx("span",{"aria-hidden":!0,className:O("inline-block select-none dark:text-white",F&&"animate-pulse"),children:D})};return t.jsxs("span",{className:O("inline-flex items-baseline",V),role:"text",...P,children:[t.jsx("span",{className:"sr-only",children:L}),t.jsx("span",{"aria-hidden":!0,className:"whitespace-pre dark:text-white",children:z}),_()]})}j.__docgenInfo={description:"",methods:[],displayName:"TypeWriter",props:{strings:{required:!0,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"60",computed:!1}},deleteSpeed:{required:!1,tsType:{name:"number"},description:""},startDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},pauseBetween:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1200",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},cursor:{required:!1,tsType:{name:"union",raw:"boolean | React.ReactNode",elements:[{name:"boolean"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"",defaultValue:{value:"true",computed:!1}},cursorBlink:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},holdOnFinish:{required:!1,tsType:{name:"number"},description:""},onCycleEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const Y={title:"Components/TypeWriter",component:j,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An accessible, dependency-free typewriter effect. Supports multiple strings, speed control, start delay, delete speed, pauses, looping, and customizable cursor."}}},args:{strings:["Mints UI","Beautifully minimal","Typed with TypeScript"],speed:60,deleteSpeed:30,startDelay:0,pauseBetween:1200,loop:!0,cursor:"|",cursorBlink:!0},argTypes:{strings:{control:"object",description:"A single string or array of strings to type."},speed:{control:{type:"number",min:0,step:5},description:"Milliseconds per character when typing."},deleteSpeed:{control:{type:"number",min:0,step:5},description:"Milliseconds per character when deleting."},startDelay:{control:{type:"number",min:0,step:100},description:"Delay before typing starts (ms)."},pauseBetween:{control:{type:"number",min:0,step:100},description:"Pause after finishing a string (ms)."},loop:{control:"boolean",description:"Loop through all strings indefinitely."},cursor:{control:"text",description:'Cursor content. Use a string like "|" or "_" for custom, leave empty to hide.'},cursorBlink:{control:"boolean",description:"Apply a simple blink animation to the cursor."},className:{control:!1},onCycleEnd:{action:"cycleEnd"}}},y={},x={args:{strings:["Build fast.","Ship minimal.","Polish later."],loop:!0}},w={args:{cursor:"▍",cursorBlink:!0}},S={args:{cursor:""}},T={args:{speed:30,deleteSpeed:15,pauseBetween:600,strings:["Snappy typing","and quicker deletes"]}},b={args:{startDelay:1e3,strings:["Wait for it…","Here we go!"]}},N={name:"No Loop + Hold on Finish",args:{loop:!1,strings:["Type once and hold."],pauseBetween:1500,holdOnFinish:2e3}},B={render:a=>t.jsxs("div",{className:"flex flex-col items-center gap-6 text-center",children:[t.jsx("h1",{className:"text-3xl font-bold",children:t.jsx(j,{...a})}),t.jsx("p",{className:"text-zinc-600 dark:text-zinc-300 max-w-md",children:"Drop this into a hero section to animate your headline without extra dependencies."}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx(H,{children:"Get Started"}),t.jsx(H,{variant:"outline",children:"Docs"})]})]}),args:{strings:["Mints UI, but alive.","Type. Pause. Delete. Repeat."],loop:!0,speed:55,deleteSpeed:28,pauseBetween:900,cursor:"▌"}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"{}",...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    strings: ['Build fast.', 'Ship minimal.', 'Polish later.'],
    loop: true
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    cursor: '▍',
    cursorBlink: true
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    cursor: ''
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    speed: 30,
    deleteSpeed: 15,
    pauseBetween: 600,
    strings: ['Snappy typing', 'and quicker deletes']
  }
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    startDelay: 1000,
    strings: ['Wait for it…', 'Here we go!']
  }
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'No Loop + Hold on Finish',
  args: {
    loop: false,
    strings: ['Type once and hold.'],
    pauseBetween: 1500,
    holdOnFinish: 2000
  }
}`,...N.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-3xl font-bold">
        <TypeWriter {...args} />
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300 max-w-md">
        Drop this into a hero section to animate your headline without extra
        dependencies.
      </p>
      <div className="flex gap-3">
        <Button>Get Started</Button>
        <Button variant="outline">Docs</Button>
      </div>
    </div>,
  args: {
    strings: ['Mints UI, but alive.', 'Type. Pause. Delete. Repeat.'],
    loop: true,
    speed: 55,
    deleteSpeed: 28,
    pauseBetween: 900,
    cursor: '▌'
  }
}`,...B.parameters?.docs?.source}}};const Z=["Default","MultipleStrings","CustomCursor","NoCursor","SpeedShowcase","DelayedStart","NoLoopHoldOnFinish","InAHeading"];export{w as CustomCursor,y as Default,b as DelayedStart,B as InAHeading,x as MultipleStrings,S as NoCursor,N as NoLoopHoldOnFinish,T as SpeedShowcase,Z as __namedExportsOrder,Y as default};
