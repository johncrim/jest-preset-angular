"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9800],{8134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"guides/jsdom-version","title":"Configure other JSDOM versions","description":"Jest v26+ by default uses JSDOM 16 to support Node 10+.","source":"@site/versioned_docs/version-14.0/guides/jsdom-version.md","sourceDirName":"guides","slug":"/guides/jsdom-version","permalink":"/jest-preset-angular/docs/14.0/guides/jsdom-version","draft":false,"unlisted":false,"editUrl":"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-14.0/guides/jsdom-version.md","tags":[],"version":"14.0","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1732702371000,"frontMatter":{"id":"jsdom-version","title":"Configure other JSDOM versions"},"sidebar":"docs","previous":{"title":"ESM Support","permalink":"/jest-preset-angular/docs/14.0/guides/esm-support"},"next":{"title":"Using with Babel","permalink":"/jest-preset-angular/docs/14.0/guides/using-with-babel"}}');var s=n(4848),o=n(8453),a=n(9489),i=n(7227);const l={id:"jsdom-version",title:"Configure other JSDOM versions"},u=void 0,c={},d=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Jest"})," v26+ by default uses ",(0,s.jsx)(t.strong,{children:"JSDOM"})," 16 to support Node 10+."]}),"\n",(0,s.jsxs)(t.p,{children:["If you need a different JSDOM version than the one that ships with Jest, you can install a jsdom environment\npackage, e.g. ",(0,s.jsx)(t.code,{children:"jest-environment-jsdom-sixteen"})," and edit your Jest config like so:"]}),"\n",(0,s.jsxs)(a.A,{groupId:"code-examples",children:[(0,s.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\nmodule.exports = {\n  testEnvironment: 'jest-environment-jsdom-sixteen',\n};\n"})})}),(0,s.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  testEnvironment: 'jest-environment-jsdom-sixteen',\n};\n\nexport default jestConfig;\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["If you use JSDOM v11 or lower, you might have to mock ",(0,s.jsx)(t.code,{children:"localStorage"})," or ",(0,s.jsx)(t.code,{children:"sessionStorage"})," on your own or using some third-party library by loading it in ",(0,s.jsx)(t.code,{children:"setupFilesAfterEnv"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Reference: ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/en/configuration.html#testenvironment-string",children:"https://jestjs.io/docs/en/configuration.html#testenvironment-string"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/jsdom/jsdom/blob/main/Changelog.md#1200",children:"https://github.com/jsdom/jsdom/blob/main/Changelog.md#1200"})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var o=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),s=n(4164),o=n(4245),a=n(6347),i=n(6494),l=n(2814),u=n(5167),c=n(9900);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=p(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),g=(()=>{const e=u??f;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(u(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);