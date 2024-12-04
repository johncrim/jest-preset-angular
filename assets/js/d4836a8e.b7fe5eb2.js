"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[106],{3191:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"guides/esm-support","title":"ESM Support","description":"To use jest-preset-angular with ESM support, you\'ll first need to check ESM Jest documentation.","source":"@site/docs/guides/esm-support.md","sourceDirName":"guides","slug":"/guides/esm-support","permalink":"/jest-preset-angular/docs/next/guides/esm-support","draft":false,"unlisted":false,"editUrl":"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/guides/esm-support.md","tags":[],"version":"current","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1732702371000,"frontMatter":{"id":"esm-support","title":"ESM Support"},"sidebar":"docs","previous":{"title":"Angular >=13","permalink":"/jest-preset-angular/docs/next/guides/angular-13+"},"next":{"title":"Configure other JSDOM versions","permalink":"/jest-preset-angular/docs/next/guides/jsdom-version"}}');var r=s(4848),o=s(8453);const i={id:"esm-support",title:"ESM Support"},a=void 0,l={},c=[{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.code,{children:"jest-preset-angular"})," with ESM support, you'll first need to check ",(0,r.jsx)(t.a,{href:"https://jestjs.io/docs/en/ecmascript-modules",children:"ESM Jest documentation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"jest-preset-angular"})," supports ESM via a ",(0,r.jsx)(t.code,{children:"ts-jest"})," config option ",(0,r.jsx)(t.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/useESM",children:"useESM"})," in combination with jest config option ",(0,r.jsx)(t.a,{href:"https://jestjs.io/docs/en/configuration#extensionstotreatasesm-arraystring",children:"extensionsToTreatAsEsm"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["There is also a ",(0,r.jsx)(t.a,{href:"/jest-preset-angular/docs/next/getting-started/presets",children:"preset"})," to work with ESM."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["We have ",(0,r.jsx)(t.a,{href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples",children:"example apps"})," which contains base ESM setup to work with Jest and Angular."]})}),"\n",(0,r.jsx)(t.p,{children:"Besides, there is utility function to ensure that Jest can set up test environment properly."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="setup-jest.ts"',children:"import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone/index.mjs';\n\nsetupZoneTestEnv();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.h4,{id:"manual-configuration",children:"Manual configuration"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.mts"',children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  extensionsToTreatAsEsm: ['.ts'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig.spec.json',\n        stringifyContentPathRegex: '\\\\.(html|svg)$',\n        useESM: true,\n      },\n    ],\n  },\n};\n\nexport default jestConfig;\n"})}),"\n",(0,r.jsx)(t.h4,{id:"use-esm-presets",children:"Use ESM presets"}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["Jest will attempt to load ",(0,r.jsx)(t.strong,{children:"ESM"})," files from ",(0,r.jsx)(t.code,{children:"node_modules"})," with default ",(0,r.jsx)(t.code,{children:"jest-resolve"})," which usually works for most of the cases.\nHowever, there are cases like Angular libraries ",(0,r.jsx)(t.strong,{children:"ESM"})," built files or ",(0,r.jsx)(t.strong,{children:"ESM"})," files which are outside ",(0,r.jsx)(t.code,{children:"node_modules"})," might not be loaded\ncorrectly."]}),(0,r.jsxs)(t.p,{children:["To fix that, one can use ",(0,r.jsx)(t.code,{children:"moduleNameMapper"})," in jest config to instruct Jest to load the correct ",(0,r.jsx)(t.strong,{children:"ESM"})," files or create a\ncustom Jest ",(0,r.jsx)(t.a,{href:"https://jestjs.io/docs/configuration#resolver-string",children:"resolver"}),"."]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="jest.config.mts"',children:"import type { Config } from 'jest';\n\nconst jestConfig = {\n  //...\n  preset: 'jest-preset-angular/presets/defaults-esm',\n};\n\nexport default jestConfig;\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(6540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);