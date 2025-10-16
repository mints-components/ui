import{j as e,r as P}from"./iframe-_3f94NaL.js";import{c as Q}from"./clsx-B-dksMZM.js";import{B as y}from"./button-SGURB7nv.js";import{d as V,E as D,e as M}from"./waypoints-N-RQB5wD.js";import{I as F}from"./input-gHqb_jBs.js";import{S as W}from"./select-CaRC7j_S.js";import"./spinner-Pacvu4Pi.js";function A(a,s){if(s<=7)return Array.from({length:s},(d,o)=>o+1);const i=[1];return a<=4?i.push(2,3,4,5,"ellipsis",s):a>=s-3?i.push("ellipsis",s-4,s-3,s-2,s-1,s):i.push("ellipsis",a-1,a,a+1,"ellipsis",s),i}function n({current:a=1,total:s=0,showSizeChanger:i=!1,pageSizeOptions:d=[10,20,50,100],pageSize:o=10,size:u="default",disabled:l=!1,showQuickJumper:w=!1,showTotal:c=!1,onChange:m,onShowSizeChange:T,className:k}){const p=Math.ceil(s/o)||1,q=A(a,p),g=t=>{l||t<1||t>p||t===a||m?.(t,o)},E=t=>{if(l)return;const r=Math.min(a,Math.ceil(s/t));T?.(r,t),m?.(r,t)},I=t=>{if(t.key==="Enter"){const r=parseInt(t.target.value);!isNaN(r)&&r>=1&&r<=p&&(g(r),t.target.value="")}},J=()=>{if(!c||!s)return null;const t=(a-1)*o+1,r=Math.min(a*o,s);return typeof c=="function"?c(s,[t,r]):e.jsxs("span",{className:"text-sm text-zinc-600 dark:text-zinc-400",children:["Showing ",t,"-",r," of ",s," items"]})},N=u==="sm"?"xs":u==="lg"?"default":"sm",C=u==="sm"?"xs":u==="lg"?"default":"sm";return e.jsxs("div",{className:Q("flex items-center justify-between gap-4",k),children:[e.jsxs("div",{className:"flex items-center gap-4",children:[J(),i&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-zinc-600 dark:text-zinc-400",children:"Show"}),e.jsx(W,{options:d.map(t=>({label:t,value:t})),value:o,onChange:t=>E(t),disabled:l,size:C}),e.jsx("span",{className:"text-sm text-zinc-600 dark:text-zinc-400",children:"per page"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(y,{variant:"outline",size:N,icon:e.jsx(V,{size:30}),disabled:l||a<=1,onClick:()=>g(a-1),"aria-label":"Previous page"}),q.map((t,r)=>t==="ellipsis"?e.jsx("div",{className:"flex items-center justify-center w-8 h-8 text-zinc-400",children:e.jsx(D,{className:"w-4 h-4"})},`ellipsis-${r}`):e.jsx(y,{variant:t===a?"primary":"outline",size:N,disabled:l,onClick:()=>g(t),"aria-label":`Page ${t}`,"aria-current":t===a?"page":void 0,children:t},t)),e.jsx(y,{variant:"outline",size:N,icon:e.jsx(M,{}),disabled:l||a>=p,onClick:()=>g(a+1),"aria-label":"Next page"}),w&&e.jsxs("div",{className:"flex items-center gap-2 ml-4",children:[e.jsx("span",{className:"text-sm text-zinc-600 dark:text-zinc-400",children:"Go to"}),e.jsx(F,{type:"number",min:1,max:p,disabled:l,onKeyDown:I,placeholder:"...",size:C,className:"w-16"})]})]})]})}n.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{current:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},total:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},showSizeChanger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[10, 20, 50, 100]",computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showQuickJumper:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showTotal:{required:!1,tsType:{name:"union",raw:`| boolean
| ((total: number, range: [number, number]) => React.ReactNode)`,elements:[{name:"boolean"},{name:"unknown"}]},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number, pageSize?: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:""},onShowSizeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number, size: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"},{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const K={title:"Components/Pagination",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A pagination component for navigating through large datasets with support for page size selection, quick jumping, and total count display."}}},args:{current:1,total:100,size:"default",disabled:!1,showSizeChanger:!1,showQuickJumper:!1,showTotal:!1,pageSize:10},argTypes:{current:{control:{type:"number",min:1}},total:{control:{type:"number",min:0}},pageSize:{control:{type:"number",min:1}},size:{control:"radio",options:["sm","default","lg"]},disabled:{control:"boolean"},showSizeChanger:{control:"boolean"},showQuickJumper:{control:"boolean"},showTotal:{control:"boolean"},onChange:{action:"page changed"},onShowSizeChange:{action:"page size changed"}}},h={args:{current:5,total:200}},f={render:()=>{const[a,s]=P.useState(5),[i,d]=P.useState(10),o=247,u=(c,m)=>{s(c),m&&m!==i&&d(m)},l=(c,m)=>{s(c),d(m)},w=Math.ceil(o/i);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-sm text-zinc-600",children:"Interactive pagination - try clicking pages, changing size, or using quick jump"}),e.jsx(n,{size:"sm",current:a,total:o,pageSize:i,showSizeChanger:!0,showQuickJumper:!0,showTotal:!0,onChange:u,onShowSizeChange:l}),e.jsxs("div",{className:"text-xs text-zinc-500",children:["Current page: ",a,", Page size: ",i,", Total pages:"," ",w,", Total items: ",o]})]})}},x={render:a=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small"}),e.jsx(n,{...a,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Default"}),e.jsx(n,{...a,size:"default"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Large"}),e.jsx(n,{...a,size:"lg"})]})]}),args:{current:3,total:100}},v={render:a=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Few items (50 total)"}),e.jsx(n,{...a,current:3,total:50})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Many items (500 total, current page 25)"}),e.jsx(n,{...a,current:25,total:500})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Beginning (current page 2 of 200 items)"}),e.jsx(n,{...a,current:2,total:200})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"End (current page 19 of 200 items)"}),e.jsx(n,{...a,current:19,total:200})]})]})},z={args:{current:8,total:485,pageSize:20,showSizeChanger:!0,showQuickJumper:!0,showTotal:!0,pageSizeOptions:[10,20,50,100]}},S={args:{current:3,total:367,pageSize:25,showTotal:(a,s)=>e.jsxs("span",{className:"text-sm font-medium text-blue-600",children:["Items ",s[0],"-",s[1]," of ",a," total"]})}},b={args:{current:5,total:200,disabled:!0,showSizeChanger:!0,showQuickJumper:!0,showTotal:!0}},j={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Single item"}),e.jsx(n,{current:1,total:1})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"First page of many items"}),e.jsx(n,{current:1,total:1e3})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Last page of many items"}),e.jsx(n,{current:100,total:1e3})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Empty state (0 items)"}),e.jsx(n,{current:1,total:0,showTotal:!0,showSizeChanger:!0})]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    current: 5,
    total: 200
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(5);
    const [pageSize, setPageSize] = useState(10);
    const total = 247;
    const handleChange = (page: number, newPageSize?: number) => {
      setCurrent(page);
      if (newPageSize && newPageSize !== pageSize) {
        setPageSize(newPageSize);
      }
    };
    const handleShowSizeChange = (page: number, size: number) => {
      setCurrent(page);
      setPageSize(size);
    };
    const totalPages = Math.ceil(total / pageSize);
    return <div className="space-y-4">
        <div className="text-sm text-zinc-600">
          Interactive pagination - try clicking pages, changing size, or using
          quick jump
        </div>
        <Pagination size="sm" current={current} total={total} pageSize={pageSize} showSizeChanger showQuickJumper showTotal onChange={handleChange} onShowSizeChange={handleShowSizeChange} />
        <div className="text-xs text-zinc-500">
          Current page: {current}, Page size: {pageSize}, Total pages:{' '}
          {totalPages}, Total items: {total}
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Small</h3>
        <Pagination {...args} size="sm" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <Pagination {...args} size="default" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Large</h3>
        <Pagination {...args} size="lg" />
      </div>
    </div>,
  args: {
    current: 3,
    total: 100
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Few items (50 total)</h3>
        <Pagination {...args} current={3} total={50} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">
          Many items (500 total, current page 25)
        </h3>
        <Pagination {...args} current={25} total={500} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">
          Beginning (current page 2 of 200 items)
        </h3>
        <Pagination {...args} current={2} total={200} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">
          End (current page 19 of 200 items)
        </h3>
        <Pagination {...args} current={19} total={200} />
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    current: 8,
    total: 485,
    pageSize: 20,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: true,
    pageSizeOptions: [10, 20, 50, 100]
  }
}`,...z.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    current: 3,
    total: 367,
    pageSize: 25,
    showTotal: (total, range) => <span className="text-sm font-medium text-blue-600">
        Items {range[0]}-{range[1]} of {total} total
      </span>
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    current: 5,
    total: 200,
    disabled: true,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: true
  }
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Single item</h3>
        <Pagination current={1} total={1} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">First page of many items</h3>
        <Pagination current={1} total={1000} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Last page of many items</h3>
        <Pagination current={100} total={1000} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Empty state (0 items)</h3>
        <Pagination current={1} total={0} showTotal showSizeChanger />
      </div>
    </div>
}`,...j.parameters?.docs?.source}}};const H=["Default","WithInteractiveState","Sizes","DifferentPageCounts","WithAllFeatures","WithCustomTotal","DisabledState","EdgeCases"];export{h as Default,v as DifferentPageCounts,b as DisabledState,j as EdgeCases,x as Sizes,z as WithAllFeatures,S as WithCustomTotal,f as WithInteractiveState,H as __namedExportsOrder,K as default};
