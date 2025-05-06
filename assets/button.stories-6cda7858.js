import{j as t}from"./jsx-runtime-9bc08dc0.js";import{R as u}from"./index-dccdcbde.js";import{c as d}from"./clsx-0839fdbe.js";import{S as J}from"./spinner-6592412a.js";var M={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},z=u.createContext&&u.createContext(M),Q=["attr","size","title"];function U(e,n){if(e==null)return{};var i=X(e,n),r,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)r=l[s],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function X(e,n){if(e==null)return{};var i={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;i[r]=e[r]}return i}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},y.apply(this,arguments)}function N(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),i.push.apply(i,r)}return i}function b(e){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?N(Object(i),!0).forEach(function(r){Y(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function Y(e,n,i){return n=Z(n),n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function Z(e){var n=$(e,"string");return typeof n=="symbol"?n:n+""}function $(e,n){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function G(e){return e&&e.map((n,i)=>u.createElement(n.tag,b({key:i},n.attr),G(n.child)))}function ee(e){return n=>u.createElement(te,y({attr:b({},e.attr)},n),G(e.child))}function te(e){var n=i=>{var{attr:r,size:s,title:l}=e,m=U(e,Q),f=s||i.size||"1em",c;return i.className&&(c=i.className),e.className&&(c=(c?c+" ":"")+e.className),u.createElement("svg",y({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,m,{className:c,style:b(b({color:e.color||i.color},i.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&u.createElement("title",null,l),e.children)};return z!==void 0?u.createElement(z.Consumer,null,i=>n(i)):n(M)}function o(e){return ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1z"},child:[]}]})(e)}function a({variant:e="primary",size:n="default",disabled:i,icon:r,loading:s=!1,className:l,children:m,...f}){const c="inline-flex items-center justify-center font-medium rounded-md transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",H={primary:d("text-white bg-zinc-900 hover:bg-zinc-600 focus:ring-zinc-900",i&&"bg-zinc-400 text-white hover:bg-zinc-400"),outline:d("border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white focus:ring-zinc-900",i&&"border-zinc-300 text-zinc-300 hover:bg-transparent hover:text-zinc-300"),link:d("text-zinc-900 dark:text-zinc-100 underline-offset-4 hover:underline hover:text-zinc-600 dark:hover:text-zinc-300 focus:ring-transparent",i&&"text-zinc-400 hover:text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-500")}[e],K=!m&&(r||s)?{sm:"w-8 h-8 text-sm",default:"w-10 h-10 text-base",lg:"w-12 h-12 text-lg"}[n]:{sm:"text-sm px-3 py-1.5",default:"text-base px-4 py-2",lg:"text-lg px-5 py-2.5"}[n],B={sm:"w-4 h-4",default:"w-5 h-5",lg:"w-6 h-6"}[n];return t.jsxs("button",{className:d(c,H,K,"gap-2",l),disabled:i||s,...f,children:[s&&t.jsx("span",{className:d(B,"flex items-center justify-center"),children:t.jsx(J,{})}),!s&&r&&t.jsx("span",{className:d(B,"flex items-center justify-center"),children:r}),m]})}a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'outline' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'link'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const oe={title:"Components/Button",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Button component supporting primary, outline, and link variants, along with icon, size, and disabled options."}}},args:{size:"default",disabled:!1},argTypes:{disabled:{control:"boolean"},loading:{control:"boolean"},variant:{control:"radio",options:["primary","outline","link"]},size:{control:"radio",options:["sm","default","lg"]},onClick:{action:"clicked"}}},p={args:{children:"Button",variant:"primary"}},x={render:e=>t.jsxs("div",{className:"flex flex-wrap gap-4",children:[t.jsx(a,{...e,children:"Primary"}),t.jsx(a,{...e,variant:"outline",children:"Outline"}),t.jsx(a,{...e,variant:"link",children:"Link"})]})},g={render:e=>t.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[t.jsx(a,{...e,size:"sm",children:"Small"}),t.jsx(a,{...e,size:"default",children:"Default"}),t.jsx(a,{...e,size:"lg",children:"Large"})]})},v={args:{disabled:!0},render:e=>t.jsxs("div",{className:"flex flex-wrap gap-4",children:[t.jsx(a,{...e,children:"Primary"}),t.jsx(a,{...e,variant:"outline",children:"Outline"}),t.jsx(a,{...e,variant:"link",children:"Link"})]})},h={render:e=>t.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[t.jsx(a,{...e,icon:t.jsx(o,{})}),t.jsx(a,{...e,variant:"outline",icon:t.jsx(o,{})}),t.jsx(a,{...e,variant:"link",icon:t.jsx(o,{})}),t.jsx(a,{...e,icon:t.jsx(o,{}),children:"With Text"}),t.jsx(a,{...e,variant:"outline",icon:t.jsx(o,{}),children:"With Text"}),t.jsx(a,{...e,variant:"link",icon:t.jsx(o,{}),children:"With Text"})]})},j={args:{loading:!0},render:e=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(a,{...e,size:"sm",children:"Small"}),t.jsx(a,{...e,size:"default",children:"Default"}),t.jsx(a,{...e,size:"lg",children:"Large"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(a,{...e,variant:"primary",children:"Primary"}),t.jsx(a,{...e,variant:"outline",children:"Outline"}),t.jsx(a,{...e,variant:"link",children:"Link"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(a,{...e,size:"default",icon:t.jsx(o,{})}),t.jsx(a,{...e,size:"lg",icon:t.jsx(o,{})})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(a,{...e,size:"default",icon:t.jsx(o,{}),children:"With Text"}),t.jsx(a,{...e,size:"lg",icon:t.jsx(o,{}),children:"Large With Text"})]}),t.jsx("div",{className:"flex items-center gap-4",children:t.jsx(a,{...e,size:"default",disabled:!0,children:"Disabled + Loading"})})]})};var w,O,P;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...(P=(O=p.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var S,k,L;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
}`,...(L=(k=x.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var T,W,C;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
}`,...(C=(W=g.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var D,A,E;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
}`,...(E=(A=v.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var _,F,I;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} icon={<AiFillNotification />} />
      <Button {...args} variant="outline" icon={<AiFillNotification />} />
      <Button {...args} variant="link" icon={<AiFillNotification />} />
      <Button {...args} icon={<AiFillNotification />}>
        With Text
      </Button>
      <Button {...args} variant="outline" icon={<AiFillNotification />}>
        With Text
      </Button>
      <Button {...args} variant="link" icon={<AiFillNotification />}>
        With Text
      </Button>
    </div>
}`,...(I=(F=h.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var R,V,q;j.parameters={...j.parameters,docs:{...(R=j.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button {...args} size="sm">
          Small
        </Button>
        <Button {...args} size="default">
          Default
        </Button>
        <Button {...args} size="lg">
          Large
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} variant="primary">
          Primary
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="default" icon={<AiFillNotification />} />
        <Button {...args} size="lg" icon={<AiFillNotification />} />
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="default" icon={<AiFillNotification />}>
          With Text
        </Button>
        <Button {...args} size="lg" icon={<AiFillNotification />}>
          Large With Text
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="default" disabled>
          Disabled + Loading
        </Button>
      </div>
    </div>
}`,...(q=(V=j.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const le=["Basic","Variants","Sizes","DisabledStates","WithIcon","LoadingStates"];export{p as Basic,v as DisabledStates,j as LoadingStates,g as Sizes,x as Variants,h as WithIcon,le as __namedExportsOrder,oe as default};
