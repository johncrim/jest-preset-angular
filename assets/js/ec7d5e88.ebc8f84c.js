"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9896],{7182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"getting-started/presets","title":"Presets","description":"The presets","source":"@site/versioned_docs/version-14.3/getting-started/presets.md","sourceDirName":"getting-started","slug":"/getting-started/presets","permalink":"/jest-preset-angular/docs/14.3/getting-started/presets","draft":false,"unlisted":false,"editUrl":"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-14.3/getting-started/presets.md","tags":[],"version":"14.3","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1732702371000,"frontMatter":{"id":"presets","title":"Presets"},"sidebar":"docs","previous":{"title":"Installation","permalink":"/jest-preset-angular/docs/14.3/getting-started/installation"},"next":{"title":"Options","permalink":"/jest-preset-angular/docs/14.3/getting-started/options"}}');var r=n(4848),a=n(8453),o=n(9489),i=n(7227);const l={id:"presets",title:"Presets"},c=void 0,u={},d=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}];function p(e){const t={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"the-presets",children:"The presets"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"jest-preset-angular"})," comes with 2 presets, covering most of the project's base configuration:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Preset name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"jest-preset-angular/presets/default"}),(0,r.jsx)("br",{}),"or ",(0,r.jsx)(t.code,{children:"jest-preset-angular"})]}),(0,r.jsxs)(t.td,{children:["TypeScript, JavaScript and HTML files (",(0,r.jsx)(t.code,{children:"js"}),", ",(0,r.jsx)(t.code,{children:".ts"}),", ",(0,r.jsx)(t.code,{children:".html"}),") will be transformed by ",(0,r.jsx)(t.code,{children:"jest-preset-angular"})," to ",(0,r.jsx)(t.strong,{children:"CommonJS"})," syntax."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"jest-preset-angular/presets/defaults-esm"}),(0,r.jsx)("br",{})]}),(0,r.jsxs)(t.td,{children:["TypeScript, JavaScript and HTML files (",(0,r.jsx)(t.code,{children:"js"}),", ",(0,r.jsx)(t.code,{children:".ts"}),", ",(0,r.jsx)(t.code,{children:".html"}),") will be transformed by ",(0,r.jsx)(t.code,{children:"jest-preset-angular"})," to ",(0,r.jsx)(t.strong,{children:"ESM"})," syntax."]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,r.jsxs)(t.p,{children:["In most cases, simply setting the ",(0,r.jsx)(t.code,{children:"preset"})," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,r.jsx)(t.code,{children:"jest-preset-angular"})," to your ",(0,r.jsx)(t.code,{children:"devDependencies"})," of course):"]}),"\n",(0,r.jsxs)(o.A,{groupId:"code-examples",children:[(0,r.jsx)(i.A,{value:"typescript-cjs",label:"TypeScript CJS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts" tab={"label": "TypeScript CJS"}',children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n\nexport default jestConfig;\n"})})}),(0,r.jsx)(i.A,{value:"typescript-esm",label:"TypeScript ESM",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.mts" tab={"label": "TypeScript ESM"}',children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n\nexport default jestConfig;\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"advanced",children:"Advanced"}),"\n",(0,r.jsxs)(t.p,{children:["All presets come with default ",(0,r.jsx)(t.code,{children:"ts-jest"})," config options.\nIf you want to override any of the options, you'll need to use the JavaScript version of Jest config,\ncopy the original options and override the options you need:"]}),"\n",(0,r.jsx)(t.admonition,{type:"important",children:(0,r.jsxs)(t.p,{children:["If you choose to override ",(0,r.jsx)(t.code,{children:"transform"})," in order to point at a specific tsconfig, you will need to make sure that original ",(0,r.jsx)(t.code,{children:"ts-jest"}),"\noptions provided through the default preset are defined to the ",(0,r.jsx)(t.code,{children:"transform"})," section too, otherwise you will get\nerrors."]})}),"\n",(0,r.jsxs)(o.A,{groupId:"code-examples",children:[(0,r.jsx)(i.A,{value:"typescript-cjs",label:"TypeScript CJS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts" tab={"label": "TypeScript CJS"}',children:"import type { Config } from 'jest';\nimport presets from 'jest-preset-angular/presets';\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        ...presets.defaultTransformerOptions,\n        // [...your overriden options]\n      },\n    ],\n  },\n};\n\nexport default jestConfig;\n"})})}),(0,r.jsx)(i.A,{value:"typescript-esm",label:"TypeScript ESM",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.mts" tab={"label": "TypeScript ESM"}',children:"import type { Config } from 'jest';\nimport presets from 'jest-preset-angular/presets';\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        ...presets.defaultTransformerOptions,\n        // [...your overriden options]\n      },\n    ],\n  },\n};\n\nexport default jestConfig;\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(6540),r=n(4164),a=n(4245),o=n(6347),i=n(6494),l=n(2814),c=n(5167),u=n(9900);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),j=(()=>{const e=c??g;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(1062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==s&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(6540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);