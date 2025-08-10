import{e as l,j as e}from"./iframe-BmhvYU5E.js";import{B as t}from"./button-B-LHYLO5.js";import"./clsx-B-dksMZM.js";import"./spinner-BQfO4u9N.js";var N={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=l.createContext&&l.createContext(N),w=["attr","size","title"];function P(n,i){if(n==null)return{};var r=S(n,i),a,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)a=c[o],!(i.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}function S(n,i){if(n==null)return{};var r={};for(var a in n)if(Object.prototype.hasOwnProperty.call(n,a)){if(i.indexOf(a)>=0)continue;r[a]=n[a]}return r}function h(){return h=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n},h.apply(this,arguments)}function y(n,i){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);i&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),r.push.apply(r,a)}return r}function j(n){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?y(Object(r),!0).forEach(function(a){D(n,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(r,a))})}return n}function D(n,i,r){return i=k(i),i in n?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,n}function k(n){var i=L(n,"string");return typeof i=="symbol"?i:i+""}function L(n,i){if(typeof n!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var a=r.call(n,i);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function O(n){return n&&n.map((i,r)=>l.createElement(i.tag,j({key:r},i.attr),O(i.child)))}function W(n){return i=>l.createElement(A,h({attr:j({},n.attr)},i),O(n.child))}function A(n){var i=r=>{var{attr:a,size:o,title:c}=n,z=P(n,w),B=o||r.size||"1em",d;return r.className&&(d=r.className),n.className&&(d=(d?d+" ":"")+n.className),l.createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,z,{className:d,style:j(j({color:n.color||r.color},r.style),n.style),height:B,width:B,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),n.children)};return b!==void 0?l.createElement(b.Consumer,null,r=>i(r)):i(N)}function s(n){return W({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1z"},child:[]}]})(n)}const _={title:"Components/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A general-purpose Button component supporting primary, outline, and link variants, along with icon, size, and disabled options."}}},args:{size:"default",disabled:!1},argTypes:{disabled:{control:"boolean"},loading:{control:"boolean"},variant:{control:"radio",options:["primary","outline","link"]},size:{control:"radio",options:["sm","default","lg"]},onClick:{action:"clicked"}}},u={args:{children:"Button",variant:"primary"}},m={render:n=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(t,{...n,size:"xs",children:"XS"}),e.jsx(t,{...n,size:"sm",children:"Small"}),e.jsx(t,{...n,size:"default",children:"Default"}),e.jsx(t,{...n,size:"lg",children:"Large"})]})},x={render:n=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{...n,children:"Primary"}),e.jsx(t,{...n,variant:"outline",children:"Outline"}),e.jsx(t,{...n,variant:"dashed",children:"Dashed"}),e.jsx(t,{...n,variant:"link",children:"Link"})]})},f={args:{disabled:!0},render:n=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{...n,children:"Primary"}),e.jsx(t,{...n,variant:"outline",children:"Outline"}),e.jsx(t,{...n,variant:"dashed",children:"Dashed"}),e.jsx(t,{...n,variant:"link",children:"Link"})]})},g={args:{danger:!0},render:n=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{...n,children:"Primary"}),e.jsx(t,{...n,variant:"outline",children:"Outline"}),e.jsx(t,{...n,variant:"dashed",children:"Dashed"}),e.jsx(t,{...n,variant:"link",children:"Link"})]})},p={render:n=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(t,{...n,icon:e.jsx(s,{})}),e.jsx(t,{...n,variant:"outline",icon:e.jsx(s,{})}),e.jsx(t,{...n,variant:"link",icon:e.jsx(s,{})}),e.jsx(t,{...n,icon:e.jsx(s,{}),children:"With Text"}),e.jsx(t,{...n,variant:"outline",icon:e.jsx(s,{}),children:"With Text"}),e.jsx(t,{...n,variant:"link",icon:e.jsx(s,{}),children:"With Text"})]})},v={args:{loading:!0},render:n=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{...n,size:"xs",children:"XS"}),e.jsx(t,{...n,size:"sm",children:"Small"}),e.jsx(t,{...n,size:"default",children:"Default"}),e.jsx(t,{...n,size:"lg",children:"Large"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{...n,variant:"primary",children:"Primary"}),e.jsx(t,{...n,variant:"outline",children:"Outline"}),e.jsx(t,{...n,variant:"dashed",children:"Outline"}),e.jsx(t,{...n,variant:"link",children:"Link"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{...n,danger:!0,children:"Primary"}),e.jsx(t,{...n,variant:"outline",danger:!0,children:"Outline"}),e.jsx(t,{...n,variant:"dashed",danger:!0,children:"Dashed"}),e.jsx(t,{...n,variant:"link",danger:!0,children:"Link"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{...n,size:"xs",icon:e.jsx(s,{})}),e.jsx(t,{...n,size:"sm",icon:e.jsx(s,{})}),e.jsx(t,{...n,size:"default",icon:e.jsx(s,{})}),e.jsx(t,{...n,size:"lg",icon:e.jsx(s,{})})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{...n,size:"default",icon:e.jsx(s,{}),children:"With Text"}),e.jsx(t,{...n,size:"lg",icon:e.jsx(s,{}),children:"Large With Text"})]}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsx(t,{...n,size:"default",disabled:!0,children:"Disabled + Loading"})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} size="xs">
        XS
      </Button>
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
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="dashed">
        Dashed
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="dashed">
        Dashed
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    danger: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="dashed">
        Dashed
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button {...args} size="xs">
          XS
        </Button>
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
        <Button {...args} variant="dashed">
          Outline
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} danger>
          Primary
        </Button>
        <Button {...args} variant="outline" danger>
          Outline
        </Button>
        <Button {...args} variant="dashed" danger>
          Dashed
        </Button>
        <Button {...args} variant="link" danger>
          Link
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button {...args} size="xs" icon={<AiFillNotification />} />
        <Button {...args} size="sm" icon={<AiFillNotification />} />
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
}`,...v.parameters?.docs?.source}}};const I=["Default","Sizes","Variants","DisabledStates","DangerStates","WithIcon","LoadingStates"];export{g as DangerStates,u as Default,f as DisabledStates,v as LoadingStates,m as Sizes,x as Variants,p as WithIcon,I as __namedExportsOrder,_ as default};
