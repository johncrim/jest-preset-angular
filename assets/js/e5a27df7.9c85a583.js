"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2416],{5824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"getting-started/options","title":"Options","description":"jest-preset-angular uses ts-jest options under the hood, which are located under the transform of Jest config object","source":"@site/versioned_docs/version-14.4/getting-started/options.md","sourceDirName":"getting-started","slug":"/getting-started/options","permalink":"/jest-preset-angular/docs/getting-started/options","draft":false,"unlisted":false,"editUrl":"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-14.4/getting-started/options.md","tags":[],"version":"14.4","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1732705382000,"frontMatter":{"id":"options","title":"Options"},"sidebar":"docs","previous":{"title":"Presets","permalink":"/jest-preset-angular/docs/getting-started/presets"},"next":{"title":"Test environment","permalink":"/jest-preset-angular/docs/getting-started/test-environment"}}');var r=n(4848),o=n(8453),i=n(9489),a=n(7227);const l={id:"options",title:"Options"},c=void 0,d={},u=[{value:"Processing with esbuild",id:"processing-with-esbuild",level:3},{value:"Exposed configuration",id:"exposed-configuration",level:3},{value:"Brief explanation of config",id:"brief-explanation-of-config",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"jest-preset-angular"})," uses ",(0,r.jsx)(t.code,{children:"ts-jest"})," options under the hood, which are located under the ",(0,r.jsx)(t.code,{children:"transform"})," of Jest config object\nin the ",(0,r.jsx)(t.code,{children:"package.json"})," file of your project, or through a ",(0,r.jsx)(t.code,{children:"jest.config.js"}),", or ",(0,r.jsx)(t.code,{children:"jest.config.ts"})," file."]}),"\n",(0,r.jsxs)(t.p,{children:["More information about ",(0,r.jsx)(t.code,{children:"ts-jest"})," options, see ",(0,r.jsx)(t.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options",children:"doc"})]}),"\n",(0,r.jsx)(t.admonition,{type:"important",children:(0,r.jsxs)(t.p,{children:["Since ",(0,r.jsx)(t.strong,{children:"v9.0.0"}),", ",(0,r.jsx)(t.code,{children:"jest-preset-angular"})," default Jest configuration no longer provides ",(0,r.jsx)(t.code,{children:"moduleNameMapper"}),". If you wish to reuse\nthe old ",(0,r.jsx)(t.code,{children:"moduleNameMapper"})," configuration, you can put this into your Jest config."]})}),"\n",(0,r.jsxs)(i.A,{groupId:"code-examples",children:[(0,r.jsx)(a.A,{value:"typescript-cjs",label:"TypeScript CJS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts" tab={"label": "TypeScript CJS"}',children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  moduleNameMapper: {\n    '^src/(.*)$': '<rootDir>/src/$1',\n    '^app/(.*)$': '<rootDir>/src/app/$1',\n    '^assets/(.*)$': '<rootDir>/src/assets/$1',\n    '^environments/(.*)$': '<rootDir>/src/environments/$1',\n  },\n};\n\nexport default jestConfig;\n"})})}),(0,r.jsx)(a.A,{value:"typescript-esm",label:"TypeScript ESM",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.mts" tab={"label": "TypeScript ESM"}',children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  moduleNameMapper: {\n    '^src/(.*)$': '<rootDir>/src/$1',\n    '^app/(.*)$': '<rootDir>/src/app/$1',\n    '^assets/(.*)$': '<rootDir>/src/assets/$1',\n    '^environments/(.*)$': '<rootDir>/src/environments/$1',\n  },\n};\n\nexport default jestConfig;\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"processing-with-esbuild",children:"Processing with esbuild"}),"\n",(0,r.jsxs)(t.p,{children:["Since ",(0,r.jsx)(t.strong,{children:"v11.0.0"}),", ",(0,r.jsx)(t.code,{children:"jest-preset-angular"})," introduced the usage of ",(0,r.jsx)(t.code,{children:"esbuild"})," to process files besides TypeScript API. By default, all ",(0,r.jsx)(t.code,{children:".mjs"})," files\nwill be processed by ",(0,r.jsx)(t.code,{children:"esbuild"})," in ",(0,r.jsx)(t.code,{children:"jest-preset-angular"}),". To configure extra files to process with ",(0,r.jsx)(t.code,{children:"esbuild"}),", one can do the following:"]}),"\n",(0,r.jsxs)(i.A,{groupId:"code-examples",children:[(0,r.jsx)(a.A,{value:"typescript-cjs",label:"TypeScript CJS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts" tab={"label": "TypeScript CJS"}',children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        processWithEsbuild: [<glob_to_files>]\n      }\n    ]\n  }\n};\n\nexport default jestConfig;\n"})})}),(0,r.jsx)(a.A,{value:"typescript-esm",label:"TypeScript ESM",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.mts" tab={"label": "TypeScript ESM"}',children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        processWithEsbuild: [<glob_to_files>]\n      }\n    ]\n  }\n};\n\nexport default jestConfig;\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"exposed-configuration",children:"Exposed configuration"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n  snapshotSerializers: [\n    'jest-preset-angular/build/serializers/html-comment',\n    'jest-preset-angular/build/serializers/ng-snapshot',\n    'jest-preset-angular/build/serializers/no-ng-attributes',\n  ],\n  testEnvironment: 'jsdom',\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig.spec.json',\n        stringifyContentPathRegex: '\\\\.(html|svg)$',\n      },\n    ],\n  },\n};\n\nexport default jestConfig;\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"important",children:(0,r.jsxs)(t.p,{children:["Jest runs with ",(0,r.jsx)(t.code,{children:"jest-preset-angular"})," neither in browser nor through dev server. It uses ",(0,r.jsx)(t.code,{children:"JSDOM"})," to abstract browser environment hence we depend on\n",(0,r.jsx)(t.code,{children:"JSDOM"})," implementation for real browser features."]})}),"\n",(0,r.jsx)(t.h3,{id:"brief-explanation-of-config",children:"Brief explanation of config"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["We're using ",(0,r.jsx)(t.code,{children:'"transform"'})," to pass information about configuration to use for code compilation with ",(0,r.jsx)(t.code,{children:"ts-jest"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:'"moduleFileExtensions"'})," \u2013 our modules are TypeScript (",(0,r.jsx)(t.code,{children:"ts"}),"), HTML (",(0,r.jsx)(t.code,{children:"html"}),"), JavaScript (",(0,r.jsx)(t.code,{children:"js"}),"), JSON (",(0,r.jsx)(t.code,{children:"json"}),") and ESM JavaScript (",(0,r.jsx)(t.code,{children:"mjs"}),") files."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:'"moduleNameMapper"'})," \u2013 if you're using absolute imports here's how to tell Jest where to look for them; uses ",(0,r.jsx)(t.code,{children:"RegExp"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:'"snapshotSerializers"'})," - array of serializers which will be applied to snapshot the code. See more in ",(0,r.jsx)(t.a,{href:"/jest-preset-angular/docs/guides/snapshot-testing",children:"Snapshot testing"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:'"testEnvironment"'})," \u2013 the test environment to run on."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:'"transformIgnorePatterns"'}),": instruct Jest to transform any ",(0,r.jsx)(t.code,{children:".mjs"})," files which come from ",(0,r.jsx)(t.code,{children:"node_modules"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:'"transform"'})," \u2013 run every ",(0,r.jsx)(t.code,{children:"TS"}),", ",(0,r.jsx)(t.code,{children:"JS"}),", ",(0,r.jsx)(t.code,{children:"MJS"}),", ",(0,r.jsx)(t.code,{children:"HTML"}),", or ",(0,r.jsx)(t.code,{children:"SVG"})," file through so called ",(0,r.jsx)(t.em,{children:"Jest transformer"}),"; this lets Jest understand non-JS syntax."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>S});var s=n(6540),r=n(4164),o=n(4245),i=n(6347),a=n(6494),l=n(2814),c=n(5167),d=n(9900);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[c,u]=f({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),j=(()=>{const e=c??m;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=n(1062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=a[n].value;r!==s&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(b,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function S(e){const t=(0,g.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);