"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2440],{6105:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"getting-started/presets","title":"Presets","description":"In Jest, presets are pre-defined configurations that help streamline and standardize the process of setting up testing environments.","source":"@site/docs/getting-started/presets.md","sourceDirName":"getting-started","slug":"/getting-started/presets","permalink":"/jest-preset-angular/docs/next/getting-started/presets","draft":false,"unlisted":false,"editUrl":"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/getting-started/presets.md","tags":[],"version":"current","lastUpdatedBy":"ahnpnl","lastUpdatedAt":1732713087000,"frontMatter":{"id":"presets","title":"Presets"},"sidebar":"docs","previous":{"title":"Installation","permalink":"/jest-preset-angular/docs/next/getting-started/installation"},"next":{"title":"Options","permalink":"/jest-preset-angular/docs/next/getting-started/options"}}');var r=t(4848),i=t(8453),o=t(9489),a=t(7227),l=t(1574);const d={id:"presets",title:"Presets"},c=void 0,p={},h=[{value:"Functions",id:"functions",level:2},{value:"<code>createCjsPreset(options)</code>",id:"createcjspresetoptions",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example:",id:"example",level:4},{value:"<code>createEsmPreset(options)</code>",id:"createesmpresetoptions",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Example:",id:"example-1",level:4},{value:"Legacy presets",id:"legacy-presets",level:3},{value:"Example",id:"example-2",level:4}];function g(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["In Jest, ",(0,r.jsx)(s.strong,{children:"presets"})," are pre-defined configurations that help streamline and standardize the process of setting up testing environments.\nThey allow developers to quickly configure Jest with specific transformers, file extensions, and other options."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"jest-preset-angular"})," provides very opinionated presets and based on what we found to be useful."]}),"\n",(0,r.jsx)(s.admonition,{type:"important",children:(0,r.jsx)(s.p,{children:"The current best practice for using presets is to call one of the utility functions below to create (and optionally extend) presets. Legacy presets are listed at the bottom of the page."})}),"\n",(0,r.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n","\n",(0,r.jsx)(l.A,{toc:h.slice(1)}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"createcjspresetoptions",children:(0,r.jsx)(s.code,{children:"createCjsPreset(options)"})}),"\n",(0,r.jsxs)(s.p,{children:["Create a configuration to process JavaScript/TypeScript/HTML/SVG files (",(0,r.jsx)(s.code,{children:"ts|js|mjs|html|svg"}),")."]}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"options"})," (",(0,r.jsx)(s.strong,{children:"OPTIONAL"}),")","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"tsconfig"}),": see more at ",(0,r.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig",children:"tsconfig options page"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"isolatedModules"}),": see more at ",(0,r.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/isolatedModules",children:"isolatedModules options page"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"astTransformers"}),": see more at ",(0,r.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/astTransformers",children:"astTransformers options page"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"diagnostics"}),": see more at ",(0,r.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/diagnostics",children:"diagnostics options page"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:"An object contains Jest config:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"type CjsPresetTransformerOptions = {\n  tsconfig: string;\n  stringifyContentPathRegex: string;\n};\n\ntype CjsPresetType = {\n  testEnvironment: string;\n  moduleFileExtensions: Array<string>;\n  snapshotSerializers: Array<string>;\n  transformIgnorePatterns: Array<string>;\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': ['jest-preset-angular', CjsPresetTransformerOptions];\n  };\n};\n"})}),"\n",(0,r.jsx)(s.h4,{id:"example",children:"Example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",metastring:'title="jest.config.ts"',children:"import presets from 'jest-preset-angular/presets';\nimport type { Config } from 'jest';\n\nconst presetConfig = presets.createCjsPreset({\n  //...options\n});\n\nconst jestConfig: Config = {\n  ...presetConfig,\n};\n\nexport default jestConfig;\n"})}),"\n",(0,r.jsx)(s.h3,{id:"createesmpresetoptions",children:(0,r.jsx)(s.code,{children:"createEsmPreset(options)"})}),"\n",(0,r.jsxs)(s.p,{children:["Create a configuration to process JavaScript/TypeScript/HTML/SVG files (",(0,r.jsx)(s.code,{children:"ts|js|html|svg"}),")."]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"options"})," (",(0,r.jsx)(s.strong,{children:"OPTIONAL"}),")","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"tsconfig"}),": see more at ",(0,r.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig",children:"tsconfig options page"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"isolatedModules"}),": see more at ",(0,r.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/isolatedModules",children:"isolatedModules options page"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"astTransformers"}),": see more at ",(0,r.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/astTransformers",children:"astTransformers options page"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"diagnostics"}),": see more at ",(0,r.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/diagnostics",children:"diagnostics options page"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:"An object contains Jest config:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"type EsmPresetTransformerOptions = {\n  tsconfig: string;\n  stringifyContentPathRegex: string;\n  useEsm: true;\n};\n\ntype EsmPresetType = {\n  testEnvironment: string;\n  moduleFileExtensions: Array<string>;\n  snapshotSerializers: Array<string>;\n  extensionsToTreatAsEsm: Array;\n  transformIgnorePatterns: Array<string>;\n  transform: {\n    '^.+\\\\.(ts|js|html|svg)$': ['jest-preset-angular', EsmPresetTransformerOptions];\n  };\n};\n"})}),"\n",(0,r.jsx)(s.h4,{id:"example-1",children:"Example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",metastring:'title="jest.config.mts"',children:"import presets from 'jest-preset-angular/presets';\nimport type { Config } from 'jest';\n\nconst presetConfig = presets.createEsmPreset({\n  //...options\n});\n\nconst jestConfig: Config = {\n  ...presetConfig,\n};\n\nexport default jestConfig;\n"})}),"\n",(0,r.jsx)(s.h3,{id:"legacy-presets",children:"Legacy presets"}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"jest-preset-angular"})," ",(0,r.jsx)(s.strong,{children:"DON'T RECOMMEND"})," to use legacy presets because this approach is not flexible to configure Jest configuration.\nThese legacy presets will be removed in the next major release and users are ",(0,r.jsx)(s.strong,{children:"HIGHLY RECOMMENDED"})," to migrate to use the above utility functions."]})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Preset name"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"jest-preset-angular/presets/default"}),(0,r.jsx)("br",{}),"or ",(0,r.jsx)(s.code,{children:"jest-preset-angular"})]}),(0,r.jsxs)(s.td,{children:["TypeScript, JavaScript and HTML files (",(0,r.jsx)(s.code,{children:"js"}),", ",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".html"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"jest-preset-angular"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"jest-preset-angular/presets/defaults-esm"}),(0,r.jsx)("br",{})]}),(0,r.jsxs)(s.td,{children:["TypeScript, JavaScript and HTML files (",(0,r.jsx)(s.code,{children:"js"}),", ",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".html"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"jest-preset-angular"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax."]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"example-2",children:"Example"}),"\n",(0,r.jsxs)(o.A,{groupId:"code-examples",children:[(0,r.jsx)(a.A,{value:"typescript-cjs",label:"TypeScript CJS",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",metastring:'title="jest.config.ts" tab={"label": "TypeScript CJS"}',children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular',\n};\n\nexport default jestConfig;\n"})})}),(0,r.jsx)(a.A,{value:"typescript-esm",label:"TypeScript ESM",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",metastring:'title="jest.config.mts" tab={"label": "TypeScript ESM"}',children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular/presets/defaults-esm',\n};\n\nexport default jestConfig;\n"})})})]})]})}function j(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}}}]);