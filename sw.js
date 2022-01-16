(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.2.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=y(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"65dddf50bb4f5f824738d857dedaf543","url":"404.html"},{"revision":"3e77626a330dc5b8e59d7c8a371cd76b","url":"assets/css/styles.917c4ced.css"},{"revision":"246d193915d1435c22521ebe724142c8","url":"assets/js/020ae121.7de7e666.js"},{"revision":"c5900a0449bf82b41b2b4e2ccf4ce9b9","url":"assets/js/02a1e558.b92b2d46.js"},{"revision":"b2d12a68cda8a48d60305e790ef5e8fb","url":"assets/js/03be7dae.1837f7fb.js"},{"revision":"97772f4aef37322d4fac7c349da72612","url":"assets/js/04b3fc6c.e5ec3aff.js"},{"revision":"115b2a6720da40857f0427dbcecc3e10","url":"assets/js/04e6a465.14d288d4.js"},{"revision":"cf40248273185bedffce65ecf6056266","url":"assets/js/0a5aef20.16d753df.js"},{"revision":"ed33f13baba8ce5e86eaddb460319ef4","url":"assets/js/0d71a3f1.decedc33.js"},{"revision":"10cf21e566143a34ee0f1dd7e11e50ea","url":"assets/js/113.9d7f705c.js"},{"revision":"16e92ac5168619756745019174e0bfbb","url":"assets/js/14b133ce.1666522f.js"},{"revision":"6a7a2c794bd481d862b5bdc93730dc8b","url":"assets/js/17896441.72364e8f.js"},{"revision":"2c610e0363a7d973a1066320e8e0fe14","url":"assets/js/18b93cb3.f20b5ebc.js"},{"revision":"2fc4c64dcb8b69130239a06283cee948","url":"assets/js/1a421168.fcc29e52.js"},{"revision":"421480403cce1cf16f8af6cebcac25af","url":"assets/js/1be78505.633012c0.js"},{"revision":"c99e7171dd1f9360ea9d643174f689de","url":"assets/js/22e4d634.6ac7ca5a.js"},{"revision":"b67f9c02fa337420d4d5dd3713398327","url":"assets/js/23a686b2.859c8d4d.js"},{"revision":"518d5aecd839fed71a02fa0132403e54","url":"assets/js/252e2b80.bd003852.js"},{"revision":"9b7e4f1392b3283feaf88410c24aa3ef","url":"assets/js/2612dca6.85c30b20.js"},{"revision":"9a28bc8e310b1f8fa1738f39b0039f61","url":"assets/js/27299a3b.c5372d5b.js"},{"revision":"832e99f7170b76c8b6ac9bfa9907719e","url":"assets/js/2ae17008.b9cc5aa7.js"},{"revision":"6b66091b4414013b6051d64122d1b046","url":"assets/js/345cfd5d.3b7f9f60.js"},{"revision":"117145a4d0da90ef4963ebf061603414","url":"assets/js/3793e934.0a8ce2cd.js"},{"revision":"a7ea22b70a80794f62ea94f40a4acbe5","url":"assets/js/407f8801.481c467b.js"},{"revision":"c6db771385dde96b80f5cb3c5c56efcc","url":"assets/js/40b472ac.7955b8a6.js"},{"revision":"0ff79d2994a833feda5e3b38acb2ca3e","url":"assets/js/4346.61326471.js"},{"revision":"129b5e9ce77a20bc5e87d634abb1e631","url":"assets/js/4351d34b.8b6c9a71.js"},{"revision":"8d32161a1b20a4c6b3180feb5c245b19","url":"assets/js/45136dc7.b711fbd2.js"},{"revision":"3786454d5a3535c55a9c83f24dfa8790","url":"assets/js/47c825a2.5deca91c.js"},{"revision":"bc95607816e0989d88bbddd3ade0091b","url":"assets/js/494f4f5e.8284c781.js"},{"revision":"ddd54a21789f6010003e6a4a412396b2","url":"assets/js/4e0c07c5.2118398b.js"},{"revision":"fd7a5e8d86d6403888cae61fd19610d2","url":"assets/js/4ef1ee20.9e7f4009.js"},{"revision":"92af73d825375faaac222d9201f5f81e","url":"assets/js/5131.5e52b87f.js"},{"revision":"52d96ec9bc470ff8554e0718dfc03f77","url":"assets/js/54071611.59240f06.js"},{"revision":"722256ebccad870cde8b422b98af531c","url":"assets/js/54f44165.89a1bc1d.js"},{"revision":"07812209f27f01165f1841c9199bcf55","url":"assets/js/5635425a.35471447.js"},{"revision":"0073f8212158cd23eb3199358ad01d7a","url":"assets/js/5b125e0e.d4aec5ae.js"},{"revision":"779bc66d9d0f0ff17187d52bf15a788e","url":"assets/js/6266f1ba.b89194b7.js"},{"revision":"bc7cca5c755da0e001ae5db77b56ddd1","url":"assets/js/63150b11.daeff590.js"},{"revision":"86d8818f06daf51a6eecbfcead41c34e","url":"assets/js/6445.2d8c90b6.js"},{"revision":"8e93ec633e25e14f2be2757d9475984a","url":"assets/js/64e21c96.6ce162e9.js"},{"revision":"b489501e8a5bd249533695127184f05d","url":"assets/js/651850eb.f33675a2.js"},{"revision":"0243a8f94b528ffa13bb069d9677cb9d","url":"assets/js/6608151e.6f6fdbb4.js"},{"revision":"3de8ddc082758027cd1c6cd9d242d881","url":"assets/js/66aebd80.f210f5a4.js"},{"revision":"f0f2f9f522116d779fd7601361c3e74e","url":"assets/js/72f058d3.dfb561cd.js"},{"revision":"114ab7336ce257888b4ca96af00ee077","url":"assets/js/79ea3e73.6a13ca82.js"},{"revision":"25f52478e08afb6a6fdabd3b41f36c7f","url":"assets/js/7aeeadd4.07d78816.js"},{"revision":"7174a20e124dd96fe1a39a2222eb7d1d","url":"assets/js/8177.658ae271.js"},{"revision":"7aa11eb8df66f5de488f9c72cb9303eb","url":"assets/js/8afa1348.a6576aa8.js"},{"revision":"1bffca4358e6dffba470d627112a0625","url":"assets/js/90c91afe.60d07b5c.js"},{"revision":"d5e12ad7056ba7a4646c80af4ed77f8b","url":"assets/js/935f2afb.b28a031f.js"},{"revision":"c11fa3976a9a8c665110502e475c9f8e","url":"assets/js/93f0793d.1ba3a3f8.js"},{"revision":"cc7e768001d6a40cf8e75086b1e813f9","url":"assets/js/9650c219.b2256d9e.js"},{"revision":"631e95d49132ab35aa207935232aa85e","url":"assets/js/9903dc99.c964f166.js"},{"revision":"8afef28359b7138c83b1127d7e294a04","url":"assets/js/9e4087bc.c6e02bd8.js"},{"revision":"58fca62e96a1c96ea6f5da1f86c4e041","url":"assets/js/a09c2993.dbb317fd.js"},{"revision":"5ad5c38bfb8f337788e433a82b8c55f4","url":"assets/js/a74b641e.b92351ef.js"},{"revision":"1e51e5b550c6662bc077e3d88590216f","url":"assets/js/a9789633.f846040d.js"},{"revision":"59a3afe52adcf0bf071f734cbbc7ed6b","url":"assets/js/adb64ee2.edd2941c.js"},{"revision":"e8c24509cf81cddbb124ad778ecb9524","url":"assets/js/b647df5a.9a5d07e4.js"},{"revision":"7863c4147c38408994f4da247103a57b","url":"assets/js/b6710762.64cedf55.js"},{"revision":"a073c3341b97e042a03fb9d4df764aed","url":"assets/js/b9d99630.194178b2.js"},{"revision":"60b9dffe1c667cd537f11e6b7bccb490","url":"assets/js/c00c612c.b20028e7.js"},{"revision":"f8209f3a6104c91d70ca7779ae8edd0c","url":"assets/js/c44fa306.44859020.js"},{"revision":"52809d7718e24b83d2d62a953d613ae0","url":"assets/js/c49413db.db55e953.js"},{"revision":"10835ebbc023b66a71026e92edcefe1d","url":"assets/js/c4f5d8e4.a4a41cd2.js"},{"revision":"16123bf7d6153566f2efa1a03e634046","url":"assets/js/cb5f486b.4795cb74.js"},{"revision":"5791a9c3a35899b8e542f0e7cd05aa77","url":"assets/js/cd9c57cb.caa5fb40.js"},{"revision":"6a0dd9a9693e2babab7edaaf357d71bf","url":"assets/js/d19b9e8a.ed7be306.js"},{"revision":"17c61575afad655723cc829a5d74a775","url":"assets/js/d4836a8e.796a6f07.js"},{"revision":"bf5935364c3f3723552ea4a558dc1a77","url":"assets/js/d720bb60.fffb9703.js"},{"revision":"8b352c35d0584ba527e1467981b1268a","url":"assets/js/df70a34a.2aa701be.js"},{"revision":"06c3c8cb937cae2634ae4ee1170cfe5b","url":"assets/js/e1715838.eac91f43.js"},{"revision":"90297bce155e0c20fd3232f8f5fe35a8","url":"assets/js/eabdbf07.952ab5be.js"},{"revision":"c705ba5ee70795a2aaf91a43fbe798a2","url":"assets/js/f0447160.d6d19ca8.js"},{"revision":"3bc822dd82a06ab00cbaf4495f524bf7","url":"assets/js/f3212b1e.2c75654e.js"},{"revision":"5c59d495a7546bc480e9502c8a224b79","url":"assets/js/f546eb96.19da68bb.js"},{"revision":"46eed7330751e5d6e71862cca0437579","url":"assets/js/f97daad0.adf4263c.js"},{"revision":"27accc3b86ddf16b68479f2b43d1ebb4","url":"assets/js/fc80686b.7573b272.js"},{"revision":"30d6f59f0dab0d42d672d2b3c5dd6ec4","url":"assets/js/fdb3d0ba.4b841af1.js"},{"revision":"bf6c19a44e704af9d049c6b9d7fc2c7c","url":"assets/js/main.1ebd2c81.js"},{"revision":"74b684203d65939bc29d2dd6a0f5cae7","url":"assets/js/runtime~main.46bd9b98.js"},{"revision":"a375959b78071f7b750f42f69c6a6bd5","url":"blog/archive/index.html"},{"revision":"0a9724a8b100b0412c2d03cd21c30724","url":"docs/10.x/getting-started/installation/index.html"},{"revision":"fb6e18de579167d1b100a8c6baa7633e","url":"docs/10.x/getting-started/options/index.html"},{"revision":"e5e95d008f09218648f141101655d4b0","url":"docs/10.x/getting-started/presets/index.html"},{"revision":"ae84afdd1f84f0bf5b148818b27a0cf9","url":"docs/10.x/getting-started/test-environment/index.html"},{"revision":"1ffc2313d199ee2f11462800eef91f66","url":"docs/10.x/guides/absolute-imports/index.html"},{"revision":"51755ab43126d92003bed018c07b55e7","url":"docs/10.x/guides/angular-ivy/index.html"},{"revision":"51dd3183d44de1d42238bd9cb07d88ec","url":"docs/10.x/guides/esm-support/index.html"},{"revision":"5d76b37af6eb717cad9f594374e7bd10","url":"docs/10.x/guides/jsdom-version/index.html"},{"revision":"39a90659defa9d93605c43765652a643","url":"docs/10.x/guides/troubleshooting/index.html"},{"revision":"dbfb22652ee3c21c8e4aaf215512d607","url":"docs/10.x/guides/using-with-babel/index.html"},{"revision":"bbd782edb10b6eab87456a466821be53","url":"docs/10.x/index.html"},{"revision":"d0c330c60ff6aada0f81c59b29332d48","url":"docs/10.x/processing/index.html"},{"revision":"5347f70422d317bad5827b3f9b1ca822","url":"docs/8.x/getting-started/installation/index.html"},{"revision":"4eba319765d989593dc378ebe6127655","url":"docs/8.x/getting-started/options/index.html"},{"revision":"7a22635791c861ed2d68186afc7c85ac","url":"docs/8.x/getting-started/presets/index.html"},{"revision":"027735a9419cf0fce4450a6944d279c8","url":"docs/8.x/getting-started/test-environment/index.html"},{"revision":"b9b65c30515e4e544cb748dfbf8a6971","url":"docs/8.x/guides/absolute-imports/index.html"},{"revision":"b20b9bf680cbad777970f4c5985ae3d5","url":"docs/8.x/guides/angular-ivy/index.html"},{"revision":"1facab25a7ef2d26c416bd3d3d63e010","url":"docs/8.x/guides/esm-support/index.html"},{"revision":"6e453205c0458f4e76b654bcd576a1f1","url":"docs/8.x/guides/jsdom-version/index.html"},{"revision":"f12ec48347c40eff926614679ab04142","url":"docs/8.x/guides/troubleshooting/index.html"},{"revision":"660264b924c677665b1cff2d42a97364","url":"docs/8.x/guides/using-with-babel/index.html"},{"revision":"2bd0a81a41643ced041bcb02b646249e","url":"docs/8.x/index.html"},{"revision":"5ad2b66d27db73d765d4d31a04db109f","url":"docs/8.x/processing/index.html"},{"revision":"93619fe5453056df0677eb6bcc57c0b9","url":"docs/9.x/getting-started/installation/index.html"},{"revision":"fdb9a8f4fd9a5b13018db03dae0311f6","url":"docs/9.x/getting-started/options/index.html"},{"revision":"14b6968f0ca04a7c66818fe35f7b6a8a","url":"docs/9.x/getting-started/presets/index.html"},{"revision":"69c2fc53cc4f7c149d2a67e1e5e3270f","url":"docs/9.x/getting-started/test-environment/index.html"},{"revision":"3f9f289b2209ec1ff16d140c2c6e966b","url":"docs/9.x/guides/absolute-imports/index.html"},{"revision":"1dd0fe6de8dbed0c23e4621dc55c9cd1","url":"docs/9.x/guides/angular-ivy/index.html"},{"revision":"90e5645022be02fa2b227b592c085ea6","url":"docs/9.x/guides/esm-support/index.html"},{"revision":"fe4c2949432eea0b4932e857e2e12019","url":"docs/9.x/guides/jsdom-version/index.html"},{"revision":"c74ac3daa0572184f80f3c11fa4c6993","url":"docs/9.x/guides/troubleshooting/index.html"},{"revision":"6fe989ecdbc8531a4fcd21881b8a3ffb","url":"docs/9.x/guides/using-with-babel/index.html"},{"revision":"cce947a3d8424549f06dfb70b39fd4a6","url":"docs/9.x/index.html"},{"revision":"cc46f0d87c30252d031a2e7117330919","url":"docs/9.x/processing/index.html"},{"revision":"b40242a1934e63750736c10093eedd0b","url":"docs/getting-started/installation/index.html"},{"revision":"c20adbd7290ebefaef81ddf3cc81d15c","url":"docs/getting-started/options/index.html"},{"revision":"7025b4cd37df39249aed20c35ec9d11c","url":"docs/getting-started/presets/index.html"},{"revision":"fdd2cc0ec31fa17c0078f008529a38e8","url":"docs/getting-started/test-environment/index.html"},{"revision":"8e17df2a688b03097973b01f1e7d0611","url":"docs/guides/absolute-imports/index.html"},{"revision":"58ee5ca404c167cc968823829eb4cc81","url":"docs/guides/angular-13+/index.html"},{"revision":"c30b360d9c61e101a557e0a36d47d4a7","url":"docs/guides/angular-ivy/index.html"},{"revision":"af071beb294d0f7a10003bd79728823c","url":"docs/guides/esm-support/index.html"},{"revision":"74dc5d637ec946a55827af3ee11fc352","url":"docs/guides/jsdom-version/index.html"},{"revision":"dfed0bb4d9bbb927a53faa43edef5b8e","url":"docs/guides/troubleshooting/index.html"},{"revision":"5b6d98ba54e1e6ede521a2285022f454","url":"docs/guides/using-with-babel/index.html"},{"revision":"43b3477061ebc75eef4c0f33397bc9ca","url":"docs/index.html"},{"revision":"12a100f82d0d967bd3f27af5d133be1f","url":"docs/next/getting-started/installation/index.html"},{"revision":"41aa0962e8dacca8a931dd0ea4bf7201","url":"docs/next/getting-started/options/index.html"},{"revision":"41f58c36d26b533c6c3d0708848aa656","url":"docs/next/getting-started/presets/index.html"},{"revision":"67b1161d6d1df20f5dd71dd027ff616f","url":"docs/next/getting-started/test-environment/index.html"},{"revision":"fe7d322d5d4ddf97b9ed1d649706c0f5","url":"docs/next/guides/absolute-imports/index.html"},{"revision":"2cf5d1725ffee4e6cbbc7582baaea598","url":"docs/next/guides/angular-13+/index.html"},{"revision":"90eafe52bb1a8da2745cdac92047e44f","url":"docs/next/guides/angular-ivy/index.html"},{"revision":"5b312890f986cd329cff714bd5e9ab50","url":"docs/next/guides/esm-support/index.html"},{"revision":"5ac270de2ef706a492312cb234e5b4e1","url":"docs/next/guides/jsdom-version/index.html"},{"revision":"3c655f375c0268e21f8de95203845679","url":"docs/next/guides/troubleshooting/index.html"},{"revision":"3b0f2d22f607787d8ac91aa2a9468c5c","url":"docs/next/guides/using-with-babel/index.html"},{"revision":"c5684a616518124c61bc1ba4641267cd","url":"docs/next/index.html"},{"revision":"1ad649ad668cb1c765be0b497b5c8d7e","url":"docs/next/processing/index.html"},{"revision":"4420cdd503b14134cc89201c3bac25ad","url":"docs/processing/index.html"},{"revision":"cb04e3f6af0a8945df2714037a61d60b","url":"index.html"},{"revision":"39d0f7b81200aacb9b15b16745bd2264","url":"manifest.json"},{"revision":"0c5c51a643471fa968e03242bba48450","url":"versions/index.html"},{"revision":"f8389ca1a741a115313bede9ac02e2c0","url":"img/discord.svg"},{"revision":"5e0e02d0c0f021b2037ed926d68ea1be","url":"img/documentation.png"},{"revision":"a83841c50aa67da6144860bd5031cc53","url":"img/github.png"},{"revision":"a2552d19b3538a030407a0191c99cae1","url":"img/logo.svg"},{"revision":"ee83b65c3aed4a45b928a4bebeb97a98","url":"img/pull-request.png"},{"revision":"cce226b035fb4ab5eee43b077db1ba4a","url":"img/troubleshooting.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();