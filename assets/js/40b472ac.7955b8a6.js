"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6731],{4137:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9022:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(4137)),a=["components"],s={id:"absolute-imports",title:"Absolute Imports"},u=void 0,p={unversionedId:"guides/absolute-imports",id:"version-11.x/guides/absolute-imports",isDocsHomePage:!1,title:"Absolute Imports",description:"If you wish to use TypeScript path mappings which are defined in paths of your tsconfig, make sure that you create the",source:"@site/versioned_docs/version-11.x/guides/absolute-imports.md",sourceDirName:"guides",slug:"/guides/absolute-imports",permalink:"/jest-preset-angular/docs/guides/absolute-imports",editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-11.x/guides/absolute-imports.md",tags:[],version:"11.x",frontMatter:{id:"absolute-imports",title:"Absolute Imports"},sidebar:"version-11.x-docs",previous:{title:"Using with Babel",permalink:"/jest-preset-angular/docs/guides/using-with-babel"},next:{title:"Troubleshooting",permalink:"/jest-preset-angular/docs/guides/troubleshooting"}},c=[],l={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you wish to use TypeScript path mappings which are defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"paths")," of your tsconfig, make sure that you create the\nsimilar mapping for ",(0,i.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," in Jest config."),(0,i.kt)("p",null,"More information see ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," ",(0,i.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping"},"paths mapping")," configuration documentation"))}m.isMDXComponent=!0}}]);