"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[813],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},3992:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(7462),a=n(7294),o=n(6010),l=n(2957),i=n(6775),s=n(5238),u=n(3609),c=n(2560);function p(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function g(e){var t,n,r,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,p=d(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),v=g[0],b=g[1],k=f({queryString:s,groupId:u}),y=k[0],h=k[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=j[0],w=j[1],C=function(){var e=null!=y?y:N;return m({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){C&&b(C)}),[C]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),h(e),w(e)}),[h,w,p]),tabValues:p}}var v=n(1048),b="tabList__CuJ",k="tabItem_LNqP";function y(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),s(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function j(e){var t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function N(e){var t=(0,v.Z)();return a.createElement(j,(0,r.Z)({key:String(t)},e))}},1516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),l=n(3992),i=n(425),s=["components"],u={id:"installation",title:"Installation"},c=void 0,p={unversionedId:"getting-started/installation",id:"version-13.0/getting-started/installation",title:"Installation",description:"Dependencies",source:"@site/versioned_docs/version-13.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/jest-preset-angular/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-13.0/getting-started/installation.md",tags:[],version:"13.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1699702847,formattedLastUpdatedAt:"Nov 11, 2023",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-13.0-docs",previous:{title:"Processing flow",permalink:"/jest-preset-angular/docs/processing"},next:{title:"Presets",permalink:"/jest-preset-angular/docs/getting-started/presets"}},d={},m=[{value:"Dependencies",id:"dependencies",level:3},{value:"NPM",id:"npm",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Customizing",id:"customizing",level:3},{value:"Global mocks",id:"global-mocks",level:4},{value:"Avoid karma conflicts",id:"avoid-karma-conflicts",level:4}],f={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"You can install ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," and dependencies all at once with one of the following commands."),(0,o.kt)("h4",{id:"npm"},"NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D jest jest-preset-angular @types/jest\n")),(0,o.kt)("h4",{id:"yarn"},"Yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D jest jest-preset-angular @types/jest\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Angular doesn't support native ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await")," in testing with ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," higher than ",(0,o.kt)("inlineCode",{parentName:"p"},"ES2016"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/components/issues/21632#issuecomment-764975917"},"https://github.com/angular/components/issues/21632#issuecomment-764975917"))),(0,o.kt)("p",null,"In your project root, create ",(0,o.kt)("inlineCode",{parentName:"p"},"setup-jest.ts")," file with following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import 'jest-preset-angular/setup-jest';\n")),(0,o.kt)("p",null,"Add the following section:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to your root ",(0,o.kt)("inlineCode",{parentName:"li"},"jest.config.js"))),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  preset: 'jest-preset-angular',\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n"))),(0,o.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular',\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n\nexport default jestConfig;\n"))),(0,o.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  "jest": {\n    "preset": "jest-preset-angular",\n    "setupFilesAfterEnv": ["<rootDir>/setup-jest.ts"],\n    "globalSetup": "jest-preset-angular/global-setup"\n  }\n}\n')))),(0,o.kt)("p",null,"Adjust your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," to be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "outDir": "./out-tsc/spec",\n    "module": "CommonJs",\n    "types": ["jest"]\n  },\n  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]\n}\n')),(0,o.kt)("h3",{id:"customizing"},"Customizing"),(0,o.kt)("h4",{id:"global-mocks"},"Global mocks"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM")," which is different from normal browsers. You might need some global browser mocks to\nsimulate the behaviors of real browsers in ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM"),". To add global mocks, you can do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a file ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-global-mocks.ts")," to your root project."),(0,o.kt)("li",{parentName:"ul"},"Import it in your global setup file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Assuming that your global setup file is setup-jest.ts\nimport 'jest-preset-angular/setup-jest';\nimport './jest-global-mocks';\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An example for ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-global-mocks.ts")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"Object.defineProperty(window, 'CSS', { value: null });\nObject.defineProperty(document, 'doctype', {\n  value: '<!DOCTYPE html>',\n});\nObject.defineProperty(window, 'getComputedStyle', {\n  value: () => {\n    return {\n      display: 'none',\n      appearance: ['-webkit-appearance'],\n    };\n  },\n});\n/**\n * ISSUE: https://github.com/angular/material2/issues/7101\n * Workaround for JSDOM missing transform property\n */\nObject.defineProperty(document.body.style, 'transform', {\n  value: () => {\n    return {\n      enumerable: true,\n      configurable: true,\n    };\n  },\n});\n"))),(0,o.kt)("h4",{id:"avoid-karma-conflicts"},"Avoid karma conflicts"),(0,o.kt)("p",null,"By Angular CLI defaults you'll have a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/test.ts")," file which will be picked up by jest. To circumvent this you can either rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/karmaTest.ts")," or hide it from jest by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"<rootDir>/src/test.ts")," to jest ",(0,o.kt)("inlineCode",{parentName:"p"},"testPathIgnorePatterns")," option."))}g.isMDXComponent=!0}}]);