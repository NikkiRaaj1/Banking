<!DOCTYPE html>
<!-- saved from url=(0075)https://www.lighthouselabs.ca/en/blog/how-to-run-javascript-in-your-browser -->
<html lang="en" class=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>How To Run Javascript In Your Browser - Lighthouse Labs </title>

      <link rel="alternate" hreflang="fr-ca" href="https://www.lighthouselabs.ca/fr/blog/how-to-run-javascript-in-your-browser">
    <link rel="alternate" hreflang="x-default" href="https://www.lighthouselabs.ca/en/blog/how-to-run-javascript-in-your-browser">
      <link rel="canonical" href="https://www.lighthouselabs.ca/en/blog/how-to-run-javascript-in-your-browser">

    <!-- Anti-flicker snippet (recommended)  -->
<style>.async-hide { opacity: 0 !important} </style>
<script type="text/javascript" async="" src="./valid_files/js"></script><script type="text/javascript" async="" src="./valid_files/analytics.js.download"></script><script async="" src="./valid_files/panorama.js.download"></script><iframe id="pxcelframe" title="pxcelframe" src="./valid_files/t_.html" style="display: none;"></iframe><script async="" src="./valid_files/clarity.js.download"></script><script async="" src="./valid_files/134626636"></script><script async="" src="./valid_files/62e9761e8fce6e001925da46.js.download"></script><script async="" src="./valid_files/A3771613-7de9-4d6f-b274-aa71ed7065bc1.js.download"></script><script async="" src="./valid_files/59b20df6ef45ad46607d4ca50.js.download"></script><script async="" src="./valid_files/events.js.download"></script><script type="text/javascript" async="" src="./valid_files/analytics.min.js.download"></script><script async="" src="./valid_files/fbevents.js.download"></script><script async="" src="./valid_files/59b20df6ef45ad46607d4ca50.js.download"></script><script type="text/javascript" async="" src="./valid_files/bat.js.download"></script><script type="text/javascript" async="" src="./valid_files/hotjar-2720044.js.download"></script><script type="text/javascript" async="" src="./valid_files/pixel.js.download"></script><script type="text/javascript" async="" src="./valid_files/insight.min.js.download"></script><script type="text/javascript" async="" src="./valid_files/js(1)"></script><script async="" src="./valid_files/gtm.js.download"></script><script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'GTM-PWKGFQL':true});</script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWKGFQL');</script>
<!-- End Google Tag Manager -->

<!-- Establish datalayer -->
<script>window.dataLayer = window.dataLayer || [];</script>

    




<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"2208df9891","applicationID":"3873119","transactionName":"cA0LRUELXV9QFxhGCkAWFh5ADF5E","queueTime":0,"applicationTime":55,"agent":""}</script>
<script type="text/javascript">(window.NREUM||(NREUM={})).init={ajax:{deny_list:["bam.nr-data.net"]}};(window.NREUM||(NREUM={})).loader_config={xpid:"UwYOVF9RGwAIU1JTBgg=",licenseKey:"2208df9891",applicationID:"3873119"};;/*! For license information please see nr-loader-full-1.253.0.min.js.LICENSE.txt */
(()=>{var e,t,r={234:(e,t,r)=>{"use strict";r.d(t,{P_:()=>v,Mt:()=>b,C5:()=>s,DL:()=>A,OP:()=>D,lF:()=>O,Yu:()=>E,Dg:()=>m,CX:()=>c,GE:()=>w,sU:()=>C});var n=r(8632),o=r(9567);const i={beacon:n.ce.beacon,errorBeacon:n.ce.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,transactionName:void 0,tNamePlain:void 0},a={};function s(e){if(!e)throw new Error("All info objects require an agent identifier!");if(!a[e])throw new Error("Info for ".concat(e," was never set"));return a[e]}function c(e,t){if(!e)throw new Error("All info objects require an agent identifier!");a[e]=(0,o.D)(t,i);const r=(0,n.ek)(e);r&&(r.info=a[e])}const d=e=>{if(!e||"string"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var u=r(7056),l=r(50);const f="[data-nr-mask]",h=()=>{const e={mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{feature_flags:[],proxy:{assets:void 0,beacon:void 0},privacy:{cookies_enabled:!0},ajax:{deny_list:void 0,block_internal:!0,enabled:!0,harvestTimeSeconds:10,autoStart:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},session:{domain:void 0,expiresMs:u.oD,inactiveMs:u.Hb},ssl:void 0,obfuscate:void 0,jserrors:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},metrics:{enabled:!0,autoStart:!0},page_action:{enabled:!0,harvestTimeSeconds:30,autoStart:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,harvestTimeSeconds:30,long_task:!1,autoStart:!0},session_trace:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},harvest:{tooManyRequestsDelay:60},session_replay:{autoStart:!0,enabled:!1,harvestTimeSeconds:60,preload:!1,sampling_rate:10,error_sampling_rate:100,collect_fonts:!1,inline_images:!1,inline_stylesheet:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){d(t)?e.mask_selector="".concat(t,",").concat(f):""===t||null===t?e.mask_selector=f:(0,l.Z)("An invalid session_replay.mask_selector was provided. '*' will be used.",t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){d(t)?e.block_selector+=",".concat(t):""!==t&&(0,l.Z)("An invalid session_replay.block_selector was provided and will not be used",t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,l.Z)("An invalid session_replay.mask_input_option was provided and will not be used",t)}},spa:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},soft_navigations:{enabled:!0,harvestTimeSeconds:10,autoStart:!0}}},p={},g="All configuration objects require an agent identifier!";function v(e){if(!e)throw new Error(g);if(!p[e])throw new Error("Configuration for ".concat(e," was never set"));return p[e]}function m(e,t){if(!e)throw new Error(g);p[e]=(0,o.D)(t,h());const r=(0,n.ek)(e);r&&(r.init=p[e])}function b(e,t){if(!e)throw new Error(g);var r=v(e);if(r){for(var n=t.split("."),o=0;o<n.length-1;o++)if("object"!=typeof(r=r[n[o]]))return;r=r[n[n.length-1]]}return r}const y={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0},x={};function A(e){if(!e)throw new Error("All loader-config objects require an agent identifier!");if(!x[e])throw new Error("LoaderConfig for ".concat(e," was never set"));return x[e]}function w(e,t){if(!e)throw new Error("All loader-config objects require an agent identifier!");x[e]=(0,o.D)(t,y);const r=(0,n.ek)(e);r&&(r.loader_config=x[e])}const E=(0,n.mF)().o;var _=r(385),S=r(6818);const R={buildEnv:S.Re,customTransaction:void 0,disabled:!1,distMethod:S.gF,isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,offset:Math.floor(_._A?.performance?.timeOrigin||_._A?.performance?.timing?.navigationStart||Date.now()),onerror:void 0,origin:""+_._A.location,ptid:void 0,releaseIds:{},session:void 0,xhrWrappable:"function"==typeof _._A.XMLHttpRequest?.prototype?.addEventListener,version:S.q4,denyList:void 0},T={};function D(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!T[e])throw new Error("Runtime for ".concat(e," was never set"));return T[e]}function C(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");T[e]=(0,o.D)(t,R);const r=(0,n.ek)(e);r&&(r.runtime=T[e])}function O(e){return function(e){try{const t=s(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}catch(e){return!1}}(e)}},9567:(e,t,r)=>{"use strict";r.d(t,{D:()=>o});var n=r(50);function o(e,t){try{if(!e||"object"!=typeof e)return(0,n.Z)("Setting a Configurable requires an object as input");if(!t||"object"!=typeof t)return(0,n.Z)("Setting a Configurable requires a model to set its initial properties");const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),i=0===Object.keys(r).length?e:r;for(let a in i)if(void 0!==e[a])try{Array.isArray(e[a])&&Array.isArray(t[a])?r[a]=Array.from(new Set([...e[a],...t[a]])):"object"==typeof e[a]&&"object"==typeof t[a]?r[a]=o(e[a],t[a]):r[a]=e[a]}catch(e){(0,n.Z)("An error occurred while setting a property of a Configurable",e)}return r}catch(e){(0,n.Z)("An error occured while setting a Configurable",e)}}},6818:(e,t,r)=>{"use strict";r.d(t,{Re:()=>o,gF:()=>i,lF:()=>a,q4:()=>n});const n="1.253.0",o="PROD",i="CDN",a="2.0.0-alpha.11"},385:(e,t,r)=>{"use strict";r.d(t,{FN:()=>s,IF:()=>u,Nk:()=>f,Tt:()=>c,_A:()=>i,cv:()=>h,iS:()=>a,il:()=>n,ux:()=>d,v6:()=>o,w1:()=>l});const n="undefined"!=typeof window&&!!window.document,o="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),i=n?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),a=Boolean("hidden"===i?.document?.visibilityState),s=""+i?.location,c=/iPad|iPhone|iPod/.test(i.navigator?.userAgent),d=c&&"undefined"==typeof SharedWorker,u=(()=>{const e=i.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);return Array.isArray(e)&&e.length>=2?+e[1]:0})(),l=Boolean(n&&window.document.documentMode),f=!!i.navigator?.sendBeacon,h=Math.floor(i?.performance?.timeOrigin||i?.performance?.timing?.navigationStart||Date.now())},9907:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});class n{constructor(e){this.contextId=e}}},8929:(e,t,r)=>{"use strict";r.d(t,{v:()=>a});var n=r(8632);const o=(0,r(4402).Rl)();var i=r(9907);class a{static contextId="nr@context:".concat(o);static contextOriginalId="nr@original:".concat(o);static contextWrappedId="nr@wrapped:".concat(a.contextId);static getObservationContextByAgentIdentifier(e){const t=(0,n.fP)();return Object.keys(t?.initializedAgents||{}).indexOf(e)>-1?t.initializedAgents[e].observationContext:void 0}#e=new WeakMap;getCreateContext(e){return this.#e.has(e)||this.#e.set(e,new i.A),this.#e.get(e)}setContext(e,t){return this.#e.set(e,t),this.#e.get(e)}}},1117:(e,t,r)=>{"use strict";r.d(t,{w:()=>i});var n=r(50);const o={agentIdentifier:"",ee:void 0};class i{constructor(e){try{if("object"!=typeof e)return(0,n.Z)("shared context requires an object as input");this.sharedContext={},Object.assign(this.sharedContext,o),Object.entries(e).forEach((e=>{let[t,r]=e;Object.keys(o).includes(t)&&(this.sharedContext[t]=r)}))}catch(e){(0,n.Z)("An error occured while setting SharedContext",e)}}}},8e3:(e,t,r)=>{"use strict";r.d(t,{L:()=>u,R:()=>c});var n=r(2177),o=r(1284),i=r(4322),a=r(3325);const s={};function c(e,t){const r={staged:!1,priority:a.p[t]||0};d(e),s[e].get(t)||s[e].set(t,r)}function d(e){e&&(s[e]||(s[e]=new Map))}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feature",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(d(e),!e||!s[e].get(t)||r)return c(t);s[e].get(t).staged=!0;const a=[...s[e]];function c(t){const r=e?n.ee.get(e):n.ee,a=i.X.handlers;if(r.backlog&&a){var s=r.backlog[t],c=a[t];if(c){for(var d=0;s&&d<s.length;++d)l(s[d],c);(0,o.D)(c,(function(e,t){(0,o.D)(t,(function(t,r){r[0].on(e,r[1])}))}))}delete a[t],r.backlog[t]=null,r.emit("drain-"+t,[])}}a.every((e=>{let[t,r]=e;return r.staged}))&&(a.sort(((e,t)=>e[1].priority-t[1].priority)),a.forEach((t=>{let[r]=t;s[e].delete(r),c(r)})))}function l(e,t){var r=e[1];(0,o.D)(t[r],(function(t,r){var n=e[0];if(r[0]===n){var o=r[1],i=e[3],a=e[2];o.apply(i,a)}}))}},2177:(e,t,r)=>{"use strict";r.d(t,{ee:()=>c});var n=r(8632),o=r(2210),i=r(234),a=r(9907),s=r(8929);const c=function e(t,r){var n={},d={},l={},f=!1;try{f=16===r.length&&(0,i.OP)(r).isolatedBacklog}catch(e){}var h={on:g,addEventListener:g,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var o=0;o<r.length;o++)r[o]===t&&r.splice(o,1)},emit:function(e,r,n,o,i){!1!==i&&(i=!0);if(c.aborted&&!o)return;t&&i&&t.emit(e,r,n);for(var a=p(n),s=v(e),u=s.length,l=0;l<u;l++)s[l].apply(a,r);var f=b()[d[e]];f&&f.push([h,e,r,a]);return a},get:m,listeners:v,context:p,buffer:function(e,t){const r=b();if(t=t||"feature",h.aborted)return;Object.entries(e||{}).forEach((e=>{let[n,o]=e;d[o]=t,t in r||(r[t]=[])}))},abort:u,aborted:!1,isBuffering:function(e){return!!b()[d[e]]},debugId:r,backlog:f?{}:t&&"object"==typeof t.backlog?t.backlog:{},observationContextManager:null};return h;function p(e){return e&&e instanceof a.A?e:e?(0,o.X)(e,s.v.contextId,(()=>h.observationContextManager?h.observationContextManager.getCreateContext(e):new a.A(s.v.contextId))):h.observationContextManager?h.observationContextManager.getCreateContext({}):new a.A(s.v.contextId)}function g(e,t){n[e]=v(e).concat(t)}function v(e){return n[e]||[]}function m(t){const r=l[t]=l[t]||e(h,t);return!r.observationContextManager&&h.observationContextManager&&(r.observationContextManager=h.observationContextManager),r}function b(){return h.backlog}}(void 0,"globalEE"),d=(0,n.fP)();function u(){c.aborted=!0,Object.keys(c.backlog).forEach((e=>{delete c.backlog[e]}))}d.ee||(d.ee=c)},5546:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,p:()=>o});var n=r(2177).ee.get("handle");function o(e,t,r,o,i){i?(i.buffer([e],o),i.emit(e,t,r)):(n.buffer([e],o),n.emit(e,t,r))}},4322:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var n=r(5546);i.on=a;var o=i.handlers={};function i(e,t,r,i){a(i||n.E,o,e,t,r)}function a(e,t,r,o,i){i||(i="feature"),e||(e=n.E);var a=t[i]=t[i]||{};(a[r]=a[r]||[]).push([e,o])}},3239:(e,t,r)=>{"use strict";r.d(t,{bP:()=>s,iz:()=>c,m$:()=>a});var n=r(385);let o=!1,i=!1;try{const e={get passive(){return o=!0,!1},get signal(){return i=!0,!1}};n._A.addEventListener("test",null,e),n._A.removeEventListener("test",null,e)}catch(e){}function a(e,t){return o||i?{capture:!!e,passive:o,signal:t}:!!e}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;window.addEventListener(e,t,a(r,n))}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;document.addEventListener(e,t,a(r,n))}},4402:(e,t,r)=>{"use strict";r.d(t,{Ht:()=>d,M:()=>c,Rl:()=>a,ky:()=>s});var n=r(385);const o="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function i(e,t){return e?15&e[t]:16*Math.random()|0}function a(){const e=n._A?.crypto||n._A?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),o.split("").map((e=>"x"===e?i(t,r++).toString(16):"y"===e?(3&i()|8).toString(16):e)).join("")}function s(e){const t=n._A?.crypto||n._A?.msCrypto;let r,o=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const a=[];for(var s=0;s<e;s++)a.push(i(r,o++).toString(16));return a.join("")}function c(){return s(16)}function d(){return s(32)}},7056:(e,t,r)=>{"use strict";r.d(t,{Bq:()=>n,Hb:()=>a,IK:()=>d,K4:()=>o,oD:()=>i,uT:()=>c,wO:()=>s});const n="NRBA",o="SESSION",i=144e5,a=18e5,s={PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},c={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},d={OFF:0,FULL:1,ERROR:2}},7894:(e,t,r)=>{"use strict";function n(){return Math.floor(performance.now())}r.d(t,{z:()=>n})},7243:(e,t,r)=>{"use strict";r.d(t,{e:()=>o});var n=r(385);function o(e){if(0===(e||"").indexOf("data:"))return{protocol:"data"};try{const t=new URL(e,location.href),r={port:t.port,hostname:t.hostname,pathname:t.pathname,search:t.search,protocol:t.protocol.slice(0,t.protocol.indexOf(":")),sameOrigin:t.protocol===n._A?.location?.protocol&&t.host===n._A?.location?.host};return r.port&&""!==r.port||("http:"===t.protocol&&(r.port="80"),"https:"===t.protocol&&(r.port="443")),r.pathname&&""!==r.pathname?r.pathname.startsWith("/")||(r.pathname="/".concat(r.pathname)):r.pathname="/",r}catch(e){return{}}}},50:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof console.warn&&(console.warn("New Relic: ".concat(e)),t&&console.warn(t))}r.d(t,{Z:()=>n})},2825:(e,t,r)=>{"use strict";r.d(t,{N:()=>u,T:()=>l});var n=r(2177),o=r(5546),i=r(3325),a=r(385);const s="newrelic";const c={stn:[i.D.sessionTrace],err:[i.D.jserrors,i.D.metrics],ins:[i.D.pageAction],spa:[i.D.spa,i.D.softNav],sr:[i.D.sessionReplay,i.D.sessionTrace]},d=new Set;function u(e,t){const r=n.ee.get(t);e&&"object"==typeof e&&(d.has(t)||(Object.entries(e).forEach((e=>{let[t,n]=e;c[t]?c[t].forEach((e=>{n?(0,o.p)("feat-"+t,[],void 0,e,r):(0,o.p)("block-"+t,[],void 0,e,r),(0,o.p)("rumresp-"+t,[Boolean(n)],void 0,e,r)})):n&&(0,o.p)("feat-"+t,[],void 0,void 0,r),l[t]=Boolean(n)})),Object.keys(c).forEach((e=>{void 0===l[e]&&(c[e]?.forEach((t=>(0,o.p)("rumresp-"+e,[!1],void 0,t,r))),l[e]=!1)})),d.add(t),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{a._A.dispatchEvent(new CustomEvent(s,{detail:e}))}catch(e){}}({loaded:!0})))}const l={}},2210:(e,t,r)=>{"use strict";r.d(t,{X:()=>o});var n=Object.prototype.hasOwnProperty;function o(e,t,r){if(n.call(e,t))return e[t];var o=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:o,writable:!0,enumerable:!1}),o}catch(e){}return e[t]=o,o}},1284:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});const n=(e,t)=>Object.entries(e||{}).map((e=>{let[r,n]=e;return t(r,n)}))},4351:(e,t,r)=>{"use strict";r.d(t,{P:()=>i});var n=r(2177);const o=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function i(e){try{return JSON.stringify(e,o())}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}}}},3960:(e,t,r)=>{"use strict";r.d(t,{KB:()=>a,b2:()=>i});var n=r(3239);function o(){return"undefined"==typeof document||"complete"===document.readyState}function i(e,t){if(o())return e();(0,n.bP)("load",e,t)}function a(e){if(o())return e();(0,n.iz)("DOMContentLoaded",e)}},8632:(e,t,r)=>{"use strict";r.d(t,{EZ:()=>u,ce:()=>i,ek:()=>d,fP:()=>a,gG:()=>l,h5:()=>c,mF:()=>s});var n=r(7894),o=r(385);const i={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function a(){return o._A.NREUM||(o._A.NREUM={}),void 0===o._A.newrelic&&(o._A.newrelic=o._A.NREUM),o._A.NREUM}function s(){let e=a();return e.o||(e.o={ST:o._A.setTimeout,SI:o._A.setImmediate,CT:o._A.clearTimeout,XHR:o._A.XMLHttpRequest,REQ:o._A.Request,EV:o._A.Event,PR:o._A.Promise,MO:o._A.MutationObserver,FETCH:o._A.fetch}),e}function c(e,t){let r=a();r.initializedAgents??={},t.initializedAt={ms:(0,n.z)(),date:new Date},r.initializedAgents[e]=t}function d(e){let t=a();return t.initializedAgents?.[e]}function u(e,t){a()[e]=t}function l(){return function(){let e=a();const t=e.info||{};e.info={beacon:i.beacon,errorBeacon:i.errorBeacon,...t}}(),function(){let e=a();const t=e.init||{};e.init={...t}}(),s(),function(){let e=a();const t=e.loader_config||{};e.loader_config={...t}}(),a()}},7956:(e,t,r)=>{"use strict";r.d(t,{N:()=>o});var n=r(3239);function o(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;(0,n.iz)("visibilitychange",(function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)}),r,o)}},7806:(e,t,r)=>{"use strict";r.d(t,{em:()=>v,u5:()=>S,QU:()=>D,Kf:()=>P});var n=r(2177),o=r(8929),i=Object.prototype.hasOwnProperty,a=!1;function s(e,t){return e||(e=n.ee),r.inPlace=function(e,t,n,o,i){n||(n="");const a="-"===n.charAt(0);for(let s=0;s<t.length;s++){const c=t[s],u=e[c];d(u)||(e[c]=r(u,a?c+n:n,o,c,i))}},r.flag=o.v.contextOriginalId,r;function r(t,r,n,a,u){return d(t)?t:(r||(r=""),nrWrapper[o.v.contextOriginalId]=t,function(e,t,r){if(Object.defineProperty&&Object.keys)try{return Object.keys(e).forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){return e[r]=t,t}})})),t}catch(e){c([e],r)}for(var n in e)i.call(e,n)&&(t[n]=e[n])}(t,nrWrapper,e),nrWrapper);function nrWrapper(){var o,i,d,l;try{i=this,o=[...arguments],d="function"==typeof n?n(o,i):n||{}}catch(t){c([t,"",[o,i,a],d],e)}s(r+"start",[o,i,a],d,u);try{return l=t.apply(i,o)}catch(e){throw s(r+"err",[o,i,e],d,u),e}finally{s(r+"end",[o,i,l],d,u)}}}function s(r,n,o,i){if(!a||t){var s=a;a=!0;try{e.emit(r,n,o,t,i)}catch(t){c([t,r,n,o],e)}a=s}}}function c(e,t){t||(t=n.ee);try{t.emit("internal-error",e)}catch(e){}}function d(e){return!(e&&"function"==typeof e&&e.apply&&!e[o.v.contextOriginalId])}var u=r(2210),l=r(385);const f={},h=l._A.XMLHttpRequest,p="addEventListener",g="removeEventListener";function v(e){var t=function(e){return(e||n.ee).get("events")}(e);if(f[t.debugId]++)return t;f[t.debugId]=1;var r=s(t,!0);function i(e){r.inPlace(e,[p,g],"-",a)}function a(e,t){return e[1]}return"getPrototypeOf"in Object&&(l.il&&m(document,i),m(l._A,i),m(h.prototype,i)),t.on(p+"-start",(function(e,t){var n=e[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var i=(0,u.X)(n,o.v.contextWrappedId,(function(){var e={object:function(){if("function"!=typeof n.handleEvent)return;return n.handleEvent.apply(n,arguments)},function:n}[typeof n];return e?r(e,"fn-",null,e.name||"anonymous"):n}));this.wrapped=e[1]=i}})),t.on(g+"-start",(function(e){e[1]=this.wrapped||e[1]})),t}function m(e,t){let r=e;for(;"object"==typeof r&&!Object.prototype.hasOwnProperty.call(r,p);)r=Object.getPrototypeOf(r);for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];r&&t(r,...o)}var b="fetch-",y=b+"body-",x=["arrayBuffer","blob","json","text","formData"],A=l._A.Request,w=l._A.Response,E="prototype";const _={};function S(e){const t=function(e){return(e||n.ee).get("fetch")}(e);if(!(A&&w&&l._A.fetch))return t;if(_[t.debugId]++)return t;function r(e,r,n){var i=e[r];"function"==typeof i&&(e[r]=function(){var e,r=[...arguments],a={};t.emit(n+"before-start",[r],a),a[o.v.contextId]&&a[o.v.contextId].dt&&(e=a[o.v.contextId].dt);var s=i.apply(this,r);return t.emit(n+"start",[r,e],s),s.then((function(e){return t.emit(n+"end",[null,e],s),e}),(function(e){throw t.emit(n+"end",[e],s),e}))})}return _[t.debugId]=1,x.forEach((e=>{r(A[E],e,y),r(w[E],e,y)})),r(l._A,"fetch",b),t.on(b+"end",(function(e,r){var n=this;if(r){var o=r.headers.get("content-length");null!==o&&(n.rxSize=o),t.emit(b+"done",[null,r],n)}else t.emit(b+"done",[e],n)})),t}const R={},T=["pushState","replaceState"];function D(e){const t=function(e){return(e||n.ee).get("history")}(e);return!l.il||R[t.debugId]++||(R[t.debugId]=1,s(t).inPlace(window.history,T,"-")),t}var C=r(3239);var O=r(50);const I={},j=["open","send"];function P(e){var t=e||n.ee;const r=function(e){return(e||n.ee).get("xhr")}(t);if(I[r.debugId]++)return r;I[r.debugId]=1,v(t);var o=s(r),i=l._A.XMLHttpRequest,a=l._A.MutationObserver,c=l._A.Promise,d=l._A.setInterval,u="readystatechange",f=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],h=[],p=l._A.XMLHttpRequest=function(e){const t=new i(e),n=r.context(t);try{r.emit("new-xhr",[t],n),t.addEventListener(u,(a=n,function(){var e=this;e.readyState>3&&!a.resolved&&(a.resolved=!0,r.emit("xhr-resolved",[],e)),o.inPlace(e,f,"fn-",A)}),(0,C.m$)(!1))}catch(e){(0,O.Z)("An error occurred while intercepting XHR",e);try{r.emit("internal-error",[e])}catch(e){}}var a;return t};function g(e,t){o.inPlace(t,["onreadystatechange"],"fn-",A)}if(function(e,t){for(var r in e)t[r]=e[r]}(i,p),p.prototype=i.prototype,o.inPlace(p.prototype,j,"-xhr-",A),r.on("send-xhr-start",(function(e,t){g(e,t),function(e){h.push(e),a&&(m?m.then(x):d?d(x):(b=-b,y.data=b))}(t)})),r.on("open-xhr-start",g),a){var m=c&&c.resolve();if(!d&&!c){var b=1,y=document.createTextNode(b);new a(x).observe(y,{characterData:!0})}}else t.on("fn-end",(function(e){e[0]&&e[0].type===u||x()}));function x(){for(var e=0;e<h.length;e++)g(0,h[e]);h.length&&(h=[])}function A(e,t){return t}return r}},7825:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.ajax},6660:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.jserrors},3081:(e,t,r)=>{"use strict";r.d(t,{gF:()=>i,mY:()=>o,t9:()=>n,vz:()=>s,xS:()=>a});const n=r(3325).D.metrics,o="sm",i="cm",a="storeSupportabilityMetrics",s="storeEventMetrics"},4649:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageAction},7633:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewEvent},9251:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewTiming},7144:(e,t,r)=>{"use strict";r.d(t,{Ef:()=>i,J0:()=>f,Mi:()=>l,Vb:()=>a,Ye:()=>c,fm:()=>d,i9:()=>s,t9:()=>o,u0:()=>u});var n=r(7056);const o=r(3325).D.sessionReplay,i={RECORD:"recordReplay",PAUSE:"pauseReplay"},a=.12,s={DomContentLoaded:0,Load:1,FullSnapshot:2,IncrementalSnapshot:3,Meta:4,Custom:5},c=1e6,d=64e3,u={[n.IK.ERROR]:15e3,[n.IK.FULL]:3e5,[n.IK.OFF]:0},l={RESET:{message:"Session was reset",sm:"Reset"},IMPORT:{message:"Recorder failed to import",sm:"Import"},TOO_MANY:{message:"429: Too Many Requests",sm:"Too-Many"},TOO_BIG:{message:"Payload was too large",sm:"Too-Big"},CROSS_TAB:{message:"Session Entity was set to OFF on another tab",sm:"Cross-Tab"},ENTITLEMENTS:{message:"Session Replay is not allowed and will not be started",sm:"Entitlement"}},f=5e3},3614:(e,t,r)=>{"use strict";r.d(t,{BST_RESOURCE:()=>o,END:()=>s,FEATURE_NAME:()=>n,FN_END:()=>d,FN_START:()=>c,PUSH_STATE:()=>u,RESOURCE:()=>i,START:()=>a});const n=r(3325).D.sessionTrace,o="bstResource",i="resource",a="-start",s="-end",c="fn"+a,d="fn"+s,u="pushState"},5938:(e,t,r)=>{"use strict";r.d(t,{W:()=>o});var n=r(2177);class o{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.featureName=r,this.blocked=!1}}},8862:(e,t,r)=>{"use strict";r.d(t,{j:()=>A});var n=r(3325),o=r(234),i=r(5546),a=r(2177),s=r(7894),c=r(8e3),d=r(3960),u=r(385),l=r(50),f=r(3081),h=r(8632),p=r(7144);const g=["setErrorHandler","finished","addToTrace","addRelease","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start","recordReplay","pauseReplay",p.Ef.RECORD,p.Ef.PAUSE],v=["setErrorHandler","finished","addToTrace","addRelease"];function m(){const e=(0,h.gG)();g.forEach((t=>{e[t]=function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];let i=[];return Object.values(e.initializedAgents).forEach((e=>{e.exposed&&e.api[t]&&i.push(e.api[t](...n))})),i.length>1?i:i[0]}(t,...n)}}))}var b=r(2825);const y=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let x=!1;function A(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},g=arguments.length>2?arguments[2]:void 0,A=arguments.length>3?arguments[3]:void 0,{init:w,info:E,loader_config:_,runtime:S={loaderType:g},exposed:R=!0}=t;const T=(0,h.gG)();E||(w=T.init,E=T.info,_=T.loader_config),(0,o.Dg)(e.agentIdentifier,w||{}),(0,o.GE)(e.agentIdentifier,_||{}),E.jsAttributes??={},u.v6&&(E.jsAttributes.isWorker=!0),(0,o.CX)(e.agentIdentifier,E);const D=(0,o.P_)(e.agentIdentifier),C=[E.beacon,E.errorBeacon];x||(D.proxy.assets&&(y(D.proxy.assets),C.push(D.proxy.assets)),D.proxy.beacon&&C.push(D.proxy.beacon),m(),(0,h.EZ)("activatedFeatures",b.T),e.runSoftNavOverSpa&&=!0===D.soft_navigations.enabled&&D.feature_flags.includes("soft_nav")),S.denyList=[...D.ajax.deny_list||[],...D.ajax.block_internal?C:[]],(0,o.sU)(e.agentIdentifier,S),void 0===e.api&&(e.api=function(e,t){let h=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t||(0,c.R)(e,"api");const g={};var m=a.ee.get(e),b=m.get("tracer"),y="api-",x=y+"ixn-";function A(t,r,n,i){const a=(0,o.C5)(e);return null===r?delete a.jsAttributes[t]:(0,o.CX)(e,{...a,jsAttributes:{...a.jsAttributes,[t]:r}}),_(y,n,!0,i||null===r?"session":void 0)(t,r)}function w(){}v.forEach((e=>{g[e]=_(y,e,!0,"api")})),g.addPageAction=_(y,"addPageAction",!0,n.D.pageAction),g.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,o.OP)(e).customTransaction=(r||"http://custom.transaction")+t,_(y,"setPageViewName",!0)()},g.setCustomAttribute=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e){if(["string","number","boolean"].includes(typeof t)||null===t)return A(e,t,"setCustomAttribute",r);(0,l.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(typeof t,"> was provided."))}else(0,l.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e,"> was provided."))},g.setUserId=function(e){if("string"==typeof e||null===e)return A("enduser.id",e,"setUserId",!0);(0,l.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e,"> was provided."))},g.setApplicationVersion=function(e){if("string"==typeof e||null===e)return A("application.version",e,"setApplicationVersion",!1);(0,l.Z)("Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(typeof e,">."))},g.start=e=>{try{const t=e?"defined":"undefined";(0,i.p)(f.xS,["API/start/".concat(t,"/called")],void 0,n.D.metrics,m);const r=Object.values(n.D);if(void 0===e)e=r;else{if((e=Array.isArray(e)&&e.length?e:[e]).some((e=>!r.includes(e))))return(0,l.Z)("Invalid feature name supplied. Acceptable feature names are: ".concat(r));e.includes(n.D.pageViewEvent)||e.push(n.D.pageViewEvent)}e.forEach((e=>{m.emit("".concat(e,"-opt-in"))}))}catch(e){(0,l.Z)("An unexpected issue occurred",e)}},g[p.Ef.RECORD]=function(){(0,i.p)(f.xS,["API/recordReplay/called"],void 0,n.D.metrics,m),(0,i.p)(p.Ef.RECORD,[],void 0,n.D.sessionReplay,m)},g[p.Ef.PAUSE]=function(){(0,i.p)(f.xS,["API/pauseReplay/called"],void 0,n.D.metrics,m),(0,i.p)(p.Ef.PAUSE,[],void 0,n.D.sessionReplay,m)},g.interaction=function(e){return(new w).get("object"==typeof e?e:{})};const E=w.prototype={createTracer:function(e,t){var r={},o=this,a="function"==typeof t;return(0,i.p)(f.xS,["API/createTracer/called"],void 0,n.D.metrics,m),h||(0,i.p)(x+"tracer",[(0,s.z)(),e,r],o,n.D.spa,m),function(){if(b.emit((a?"":"no-")+"fn-start",[(0,s.z)(),o,a],r),a)try{return t.apply(this,arguments)}catch(e){throw b.emit("fn-err",[arguments,this,e],r),e}finally{b.emit("fn-end",[(0,s.z)()],r)}}}};function _(e,t,r,o){return function(){return(0,i.p)(f.xS,["API/"+t+"/called"],void 0,n.D.metrics,m),o&&(0,i.p)(e+t,[(0,s.z)(),...arguments],r?null:this,o,m),r?void 0:this}}function S(){r.e(63).then(r.bind(r,7438)).then((t=>{let{setAPI:r}=t;r(e),(0,c.L)(e,"api")})).catch((()=>{(0,l.Z)("Downloading runtime APIs failed..."),(0,c.L)(e,"api",!0)}))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{E[e]=_(x,e,void 0,h?n.D.softNav:n.D.spa)})),g.setCurrentRouteName=h?_(x,"routeName",void 0,n.D.softNav):_(y,"routeName",!0,n.D.spa),g.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),(0,i.p)(f.xS,["API/noticeError/called"],void 0,n.D.metrics,m),(0,i.p)("err",[e,(0,s.z)(),!1,t],void 0,n.D.jserrors,m)},u.il?(0,d.b2)((()=>S()),!0):S(),g}(e.agentIdentifier,A,e.runSoftNavOverSpa)),void 0===e.exposed&&(e.exposed=R),x=!0}},1926:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},3325:(e,t,r)=>{"use strict";r.d(t,{D:()=>n,p:()=>o});const n={ajax:"ajax",jserrors:"jserrors",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",softNav:"soft_navigations",spa:"spa"},o={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.ajax]:5,[n.sessionTrace]:6,[n.pageAction]:7,[n.spa]:8,[n.softNav]:9,[n.sessionReplay]:10}}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>({63:"nr-full",110:"nr-full-compressor",379:"nr-full-recorder"}[e]+"-1.253.0.min.js"),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.253.0.PROD:",o.l=(r,n,i,a)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){s=l;break}}if(!s){c=!0;var f={63:"sha512-j+7ibjVKvz4TaznW3oG21bC+my3ErAHEw+iLhjg6JF4GkA+JUsl27HO4n5H27nNBpNza6/00FZDictaoaofnzg==",379:"sha512-oJwGDU774Z+Kfq7rQ6dqhvDHoklX/TmRgGKNMRPFmT6mZ9sPKEJb8RrgN2IDfWRYESxVOpAJt8VemBmD2qWt4w==",110:"sha512-v+WAs9pS7SzevyYMqbI2l1ML7kONdL1DCwww+7dFnJg2iNt0zd0v62EehYAcvyFOogG5Nn663Y0P4vnTrZKc9w=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[a]&&(s.integrity=f[a])}e[r]=[n];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="https://js-agent.newrelic.com/",(()=>{var e={29:0,789:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=i);var a=o.p+o.u(t),s=new Error;o.l(a,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,i,[a,s,c]=r,d=0;if(a.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)c(o)}for(t&&t(r);d<a.length;d++)i=a[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self["webpackChunk:NRBA-1.253.0.PROD"]=self["webpackChunk:NRBA-1.253.0.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";o(1926);var e=o(50),t=o(7144),r=o(8929),n=o(4402),i=o(2177);class a{agentIdentifier;observationContext=new r.v;constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,n.ky)(16);this.agentIdentifier=e;i.ee.get(e).observationContext=this.observationContext}#t(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];if("function"==typeof this.api?.[t])return this.api[t](...n);(0,e.Z)("Call to agent api ".concat(t," failed. The API is not currently initialized."))}addPageAction(e,t){return this.#t("addPageAction",e,t)}setPageViewName(e,t){return this.#t("setPageViewName",e,t)}setCustomAttribute(e,t,r){return this.#t("setCustomAttribute",e,t,r)}noticeError(e,t){return this.#t("noticeError",e,t)}setUserId(e){return this.#t("setUserId",e)}setApplicationVersion(e){return this.#t("setApplicationVersion",e)}setErrorHandler(e){return this.#t("setErrorHandler",e)}finished(e){return this.#t("finished",e)}addRelease(e,t){return this.#t("addRelease",e,t)}start(e){return this.#t("start",e)}recordReplay(){return this.#t(t.Ef.RECORD)}pauseReplay(){return this.#t(t.Ef.PAUSE)}addToTrace(e){return this.#t("addToTrace",e)}setCurrentRouteName(e){return this.#t("setCurrentRouteName",e)}interaction(){return this.#t("interaction")}}var s=o(3325),c=o(234);const d=Object.values(s.D);function u(e){const t={};return d.forEach((r=>{t[r]=function(e,t){return!0===(0,c.Mt)(t,"".concat(e,".enabled"))}(r,e)})),t}var l=o(8862);var f=o(8e3),h=o(5938),p=o(3960),g=o(385);const v=e=>g.il&&!0===(0,c.Mt)(e,"privacy.cookies_enabled");function m(e){return c.Yu.MO&&v&&!0===(0,c.Mt)(e,"session_trace.enabled")}function b(e){return!0===(0,c.Mt)(e,"session_replay.preload")&&m(e)}class y extends h.W{constructor(e,t,r){let n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=n,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,c.Mt)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto&&(0,f.R)(e,r)}importAggregator(){let t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate)return;if(!this.auto)return void this.ee.on("".concat(this.featureName,"-opt-in"),(()=>{(0,f.R)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()}));this.onAggregateImported=new Promise((e=>{t=e}));const n=async()=>{let n;try{if(v(this.agentIdentifier)){const{setupAgentSession:e}=await o.e(63).then(o.bind(o,1656));n=e(this.agentIdentifier)}}catch(t){(0,e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.",t),this.featureName===s.D.sessionReplay&&this.abortHandler?.()}try{if(!this.#r(this.featureName,n))return(0,f.L)(this.agentIdentifier,this.featureName),void t(!1);const{lazyFeatureLoader:e}=await o.e(63).then(o.bind(o,8582)),{Aggregate:i}=await e(this.featureName,"aggregate");this.featAggregate=new i(this.agentIdentifier,this.aggregator,r),t(!0)}catch(r){(0,e.Z)("Downloading and initializing ".concat(this.featureName," failed..."),r),this.abortHandler?.(),(0,f.L)(this.agentIdentifier,this.featureName,!0),t(!1)}};g.il?(0,p.b2)((()=>n()),!0):n()}#r(e,t){return e!==s.D.sessionReplay||(r=this.agentIdentifier,n=t,!(!m(r)||!n?.isNew&&!n?.state.sessionReplayMode));var r,n}}var x=o(7633);class A extends y{static featureName=x.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,x.t,r),this.importAggregator()}}var w=o(1117),E=o(1284);class _ extends w.w{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,o){var i=this.getBucket(e,t,r,o);return i.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,E.D)(e,(function(e,r){t[e]=S(r,t[e])})),t}(n,i.metrics),i}merge(e,t,r,n,o){var i=this.getBucket(e,t,n,o);if(i.metrics){var a=i.metrics;a.count+=r.count,(0,E.D)(r,(function(e,t){if("count"!==e){var n=a[e],o=r[e];o&&!o.c?a[e]=S(o.t,n):a[e]=function(e,t){if(!t)return e;t.c||(t=R(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(o,a[e])}}))}else i.metrics=r}storeMetric(e,t,r,n){var o=this.getBucket(e,t,r);return o.stats=S(n,o.stats),o}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var o=this.aggregatedData[e][t];return o||(o=this.aggregatedData[e][t]={params:r||{}},n&&(o.custom=n)),o}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,o=0;o<e.length;o++)t[r=e[o]]=Object.values(this.aggregatedData[r]||{}),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function S(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=R(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function R(e){return{t:e,min:e,max:e,sos:e*e,c:1}}var T=o(8632),D=o(4351);var C=o(5546),O=o(7956),I=o(3239),j=o(7894),P=o(9251);class N extends y{static featureName=P.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,P.t,r),g.il&&((0,O.N)((()=>(0,C.p)("docHidden",[(0,j.z)()],void 0,P.t,this.ee)),!0),(0,I.bP)("pagehide",(()=>(0,C.p)("winPagehide",[(0,j.z)()],void 0,P.t,this.ee))),this.importAggregator())}}var k=o(3081);class M extends y{static featureName=k.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,k.t9,r),this.importAggregator()}}var H=o(6660);class z{constructor(e,t,r,n){this.name="UncaughtError",this.message=e,this.sourceURL=t,this.line=r,this.column=n}}class L extends y{static featureName=H.t;#n=new Set;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,H.t,r);try{this.removeOnAbort=new AbortController}catch(e){}this.ee.on("fn-err",((e,t,r)=>{this.abortHandler&&!this.#n.has(r)&&(this.#n.add(r),(0,C.p)("err",[this.#o(r),(0,j.z)()],void 0,s.D.jserrors,this.ee))})),this.ee.on("internal-error",(e=>{this.abortHandler&&(0,C.p)("ierr",[this.#o(e),(0,j.z)(),!0],void 0,s.D.jserrors,this.ee)})),g._A.addEventListener("unhandledrejection",(e=>{this.abortHandler&&(0,C.p)("err",[this.#i(e),(0,j.z)(),!1,{unhandledPromiseRejection:1}],void 0,s.D.jserrors,this.ee)}),(0,I.m$)(!1,this.removeOnAbort?.signal)),g._A.addEventListener("error",(e=>{this.abortHandler&&(this.#n.has(e.error)?this.#n.delete(e.error):(0,C.p)("err",[this.#a(e),(0,j.z)()],void 0,s.D.jserrors,this.ee))}),(0,I.m$)(!1,this.removeOnAbort?.signal)),this.abortHandler=this.#s,this.importAggregator()}#s(){this.removeOnAbort?.abort(),this.#n.clear(),this.abortHandler=void 0}#o(e){return e instanceof Error?e:void 0!==e?.message?new z(e.message,e.filename||e.sourceURL,e.lineno||e.line,e.colno||e.col):new z("string"==typeof e?e:(0,D.P)(e))}#i(e){let t="Unhandled Promise Rejection: ";if(e?.reason instanceof Error)try{return e.reason.message=t+e.reason.message,e.reason}catch(t){return e.reason}if(void 0===e.reason)return new z(t);const r=this.#o(e.reason);return r.message=t+r.message,r}#a(e){if(e.error instanceof SyntaxError&&!/:\d+$/.test(e.error.stack?.trim())){const t=new z(e.message,e.filename,e.lineno,e.colno);return t.name=SyntaxError.name,t}return e.error instanceof Error?e.error:new z(e.message,e.filename,e.lineno,e.colno)}}var U=o(2210);let F=1;const B="nr@id";function q(e){const t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===g._A?0:(0,U.X)(e,B,(function(){return F++}))}function V(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return(0,D.P)(e).length}catch(e){return}}}var Z=o(7806),W=o(7243);class G{constructor(e){this.agentIdentifier=e}generateTracePayload(e){if(!this.shouldGenerateTrace(e))return null;var t=(0,c.DL)(this.agentIdentifier);if(!t)return null;var r=(t.accountID||"").toString()||null,o=(t.agentID||"").toString()||null,i=(t.trustKey||"").toString()||null;if(!r||!o)return null;var a=(0,n.M)(),s=(0,n.Ht)(),d=Date.now(),u={spanId:a,traceId:s,timestamp:d};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(u.traceContextParentHeader=this.generateTraceContextParentHeader(a,s),u.traceContextStateHeader=this.generateTraceContextStateHeader(a,d,r,o,i)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(u.newrelicHeader=this.generateTraceHeader(a,s,d,r,o,i)),u}generateTraceContextParentHeader(e,t){return"00-"+t+"-"+e+"-01"}generateTraceContextStateHeader(e,t,r,n,o){return o+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t}generateTraceHeader(e,t,r,n,o,i){if(!("function"==typeof g._A?.btoa))return null;var a={v:[0,1],d:{ty:"Browser",ac:n,ap:o,id:e,tr:t,ti:r}};return i&&n!==i&&(a.d.tk=i),btoa((0,D.P)(a))}shouldGenerateTrace(e){return this.isDtEnabled()&&this.isAllowedOrigin(e)}isAllowedOrigin(e){var t=!1,r={};if((0,c.Mt)(this.agentIdentifier,"distributed_tracing")&&(r=(0,c.P_)(this.agentIdentifier).distributed_tracing),e.sameOrigin)t=!0;else if(r.allowed_origins instanceof Array)for(var n=0;n<r.allowed_origins.length;n++){var o=(0,W.e)(r.allowed_origins[n]);if(e.hostname===o.hostname&&e.protocol===o.protocol&&e.port===o.port){t=!0;break}}return t}isDtEnabled(){var e=(0,c.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.enabled}excludeNewrelicHeader(){var e=(0,c.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.exclude_newrelic_header}useNewrelicHeaderForCors(){var e=(0,c.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!1!==e.cors_use_newrelic_header}useTraceContextHeadersForCors(){var e=(0,c.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.cors_use_tracecontext_headers}}var K=o(7825),X=["load","error","abort","timeout"],Y=X.length,Q=c.Yu.REQ,J=c.Yu.XHR;class ee extends y{static featureName=K.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(super(e,t,K.t,r),(0,c.OP)(e).xhrWrappable){this.dt=new G(e),this.handler=(e,t,r,n)=>(0,C.p)(e,t,r,n,this.ee);try{const e={xmlhttprequest:"xhr",fetch:"fetch",beacon:"beacon"};g._A?.performance?.getEntriesByType("resource").forEach((t=>{if(t.initiatorType in e&&0!==t.responseStatus){const r={status:t.responseStatus},n={rxSize:t.transferSize,duration:Math.floor(t.duration),cbTime:0};te(r,t.name),this.handler("xhr",[r,n,t.startTime,t.responseEnd,e[t.initiatorType]],void 0,s.D.ajax)}}))}catch(e){}(0,Z.u5)(this.ee),(0,Z.Kf)(this.ee),function(e,t,r,n){function o(e){var t=this;t.totalCbs=0,t.called=0,t.cbTime=0,t.end=w,t.ended=!1,t.xhrGuids={},t.lastSize=null,t.loadCaptureCalled=!1,t.params=this.params||{},t.metrics=this.metrics||{},e.addEventListener("load",(function(r){E(t,e)}),(0,I.m$)(!1)),g.IF||e.addEventListener("progress",(function(e){t.lastSize=e.loaded}),(0,I.m$)(!1))}function i(e){this.params={method:e[0]},te(this,e[1]),this.metrics={}}function a(t,r){var o=(0,c.DL)(e);o.xpid&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",o.xpid);var i=n.generateTracePayload(this.parsedOrigin);if(i){var a=!1;i.newrelicHeader&&(r.setRequestHeader("newrelic",i.newrelicHeader),a=!0),i.traceContextParentHeader&&(r.setRequestHeader("traceparent",i.traceContextParentHeader),i.traceContextStateHeader&&r.setRequestHeader("tracestate",i.traceContextStateHeader),a=!0),a&&(this.dt=i)}}function d(e,r){var n=this.metrics,o=e[0],i=this;if(n&&o){var a=V(o);a&&(n.txSize=a)}this.startTime=(0,j.z)(),this.body=o,this.listener=function(e){try{"abort"!==e.type||i.loadCaptureCalled||(i.params.aborted=!0),("load"!==e.type||i.called===i.totalCbs&&(i.onloadCalled||"function"!=typeof r.onload)&&"function"==typeof i.end)&&i.end(r)}catch(e){try{t.emit("internal-error",[e])}catch(e){}}};for(var s=0;s<Y;s++)r.addEventListener(X[s],this.listener,(0,I.m$)(!1))}function u(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||"function"!=typeof this.end||this.end(r)}function l(e,t){var r=""+q(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function f(e,t){var r=""+q(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function h(){this.endTime=(0,j.z)()}function p(e,r){r instanceof J&&"load"===e[0]&&t.emit("xhr-load-added",[e[1],e[2]],r)}function v(e,r){r instanceof J&&"load"===e[0]&&t.emit("xhr-load-removed",[e[1],e[2]],r)}function m(e,t,r){t instanceof J&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,j.z)()))}function b(e,r){this.xhrCbStart&&t.emit("xhr-cb-time",[(0,j.z)()-this.xhrCbStart,this.onload,r],r)}function y(e){var t,r=e[1]||{};if("string"==typeof e[0]?0===(t=e[0]).length&&g.il&&(t=""+g._A.location.href):e[0]&&e[0].url?t=e[0].url:g._A?.URL&&e[0]&&e[0]instanceof URL?t=e[0].href:"function"==typeof e[0].toString&&(t=e[0].toString()),"string"==typeof t&&0!==t.length){t&&(this.parsedOrigin=(0,W.e)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var o=n.generateTracePayload(this.parsedOrigin);if(o&&(o.newrelicHeader||o.traceContextParentHeader))if(e[0]&&e[0].headers)s(e[0].headers,o)&&(this.dt=o);else{var i={};for(var a in r)i[a]=r[a];i.headers=new Headers(r.headers||{}),s(i.headers,o)&&(this.dt=o),e.length>1?e[1]=i:e.push(i)}}function s(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function x(e,t){this.params={},this.metrics={},this.startTime=(0,j.z)(),this.dt=t,e.length>=1&&(this.target=e[0]),e.length>=2&&(this.opts=e[1]);var r,n=this.opts||{},o=this.target;"string"==typeof o?r=o:"object"==typeof o&&o instanceof Q?r=o.url:g._A?.URL&&"object"==typeof o&&o instanceof URL&&(r=o.href),te(this,r);var i=(""+(o&&o instanceof Q&&o.method||n.method||"GET")).toUpperCase();this.params.method=i,this.body=n.body,this.txSize=V(n.body)||0}function A(e,t){var n;this.endTime=(0,j.z)(),this.params||(this.params={}),this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var o={txSize:this.txSize,rxSize:n,duration:(0,j.z)()-this.startTime};r("xhr",[this.params,o,this.startTime,this.endTime,"fetch"],this,s.D.ajax)}function w(e){var t=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var o=0;o<Y;o++)e.removeEventListener(X[o],this.listener,!1);t.aborted||(n.duration=(0,j.z)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):E(this,e),n.cbTime=this.cbTime,r("xhr",[t,n,this.startTime,this.endTime,"xhr"],this,s.D.ajax))}}function E(e,r){e.params.status=r.status;var n=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?V(e.response):"text"===r||""===r||void 0===r?V(e.responseText):void 0}(r,e.lastSize);if(n&&(e.metrics.rxSize=n),e.sameOrigin){var o=r.getResponseHeader("X-NewRelic-App-Data");o&&((0,C.p)(k.mY,["Ajax/CrossApplicationTracing/Header/Seen"],void 0,s.D.metrics,t),e.params.cat=o.split(", ").pop())}e.loadCaptureCalled=!0}t.on("new-xhr",o),t.on("open-xhr-start",i),t.on("open-xhr-end",a),t.on("send-xhr-start",d),t.on("xhr-cb-time",u),t.on("xhr-load-added",l),t.on("xhr-load-removed",f),t.on("xhr-resolved",h),t.on("addEventListener-end",p),t.on("removeEventListener-end",v),t.on("fn-end",b),t.on("fetch-before-start",y),t.on("fetch-start",x),t.on("fn-start",m),t.on("fetch-done",A)}(e,this.ee,this.handler,this.dt),this.importAggregator()}}}function te(e,t){var r=(0,W.e)(t),n=e.params||e;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}var re=o(3614);const{BST_RESOURCE:ne,RESOURCE:oe,START:ie,END:ae,FEATURE_NAME:se,FN_END:ce,FN_START:de,PUSH_STATE:ue}=re;var le=o(7056);class fe extends y{static featureName=t.t9;constructor(e,r){let n,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,r,t.t9,o);try{n=JSON.parse(localStorage.getItem("".concat(le.Bq,"_").concat(le.K4)))}catch(e){}this.#c(n)?this.#d(n?.sessionReplayMode):this.importAggregator()}#c(e){return e&&(e.sessionReplayMode===le.IK.FULL||e.sessionReplayMode===le.IK.ERROR)||b(this.agentIdentifier)}async#d(e){const{Recorder:t}=await Promise.all([o.e(63),o.e(379)]).then(o.bind(o,4136));this.recorder=new t({mode:e,agentIdentifier:this.agentIdentifier}),this.recorder.startRecording(),this.abortHandler=this.recorder.stopRecording,this.importAggregator({recorder:this.recorder})}}var he=o(4649);class pe extends y{static featureName=he.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,he.t,r),this.importAggregator()}}new class extends a{constructor(t,r){super(r),g._A?(this.sharedAggregator=new _({agentIdentifier:this.agentIdentifier}),this.features={},(0,T.h5)(this.agentIdentifier,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(A),this.runSoftNavOverSpa=[...this.desiredFeatures].some((e=>e.featureName===s.D.softNav)),(0,l.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.Z)("Failed to initial the agent. Could not determine the runtime environment.")}get config(){return{info:this.info,init:this.init,loader_config:this.loader_config,runtime:this.runtime}}run(){try{const t=u(this.agentIdentifier),r=[...this.desiredFeatures];r.sort(((e,t)=>s.p[e.featureName]-s.p[t.featureName])),r.forEach((r=>{if(!t[r.featureName]&&r.featureName!==s.D.pageViewEvent)return;if(this.runSoftNavOverSpa&&r.featureName===s.D.spa)return;if(!this.runSoftNavOverSpa&&r.featureName===s.D.softNav)return;const n=function(e){switch(e){case s.D.ajax:return[s.D.jserrors];case s.D.sessionTrace:return[s.D.ajax,s.D.pageViewEvent];case s.D.sessionReplay:return[s.D.sessionTrace];case s.D.pageViewTiming:return[s.D.pageViewEvent];default:return[]}}(r.featureName);n.every((e=>e in this.features))||(0,e.Z)("".concat(r.featureName," is enabled but one or more dependent features has not been initialized (").concat((0,D.P)(n),"). This may cause unintended consequences or missing data...")),this.features[r.featureName]=new r(this.agentIdentifier,this.sharedAggregator)}))}catch(t){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,T.fP)();return delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator,r.ee?.abort(),delete r.ee?.get(this.agentIdentifier),!1}}}({features:[A,N,class extends y{static featureName=se;constructor(e,t){if(super(e,t,se,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),!g.il)return;const r=this.ee;let n;(0,Z.QU)(r),this.eventsEE=(0,Z.em)(r),this.eventsEE.on(de,(function(e,t){this.bstStart=(0,j.z)()})),this.eventsEE.on(ce,(function(e,t){(0,C.p)("bst",[e[0],t,this.bstStart,(0,j.z)()],void 0,s.D.sessionTrace,r)})),r.on(ue+ie,(function(e){this.time=(0,j.z)(),this.startPath=location.pathname+location.hash})),r.on(ue+ae,(function(e){(0,C.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,s.D.sessionTrace,r)}));try{n=new PerformanceObserver((e=>{const t=e.getEntries();(0,C.p)(ne,[t],void 0,s.D.sessionTrace,r)})),n.observe({type:oe,buffered:!0})}catch(e){}this.importAggregator({resourceObserver:n})}},fe,ee,M,pe,L],loaderType:"pro"})})()})();</script>
<meta name="description" content="Did you know you can run your Javascript in your browser? We show you how in this guide, as well as other important javascript tips for newbies.">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">



<!-- Facebook -->
<meta property="og:url" content="https://www.lighthouselabs.ca/en/blog/how-to-run-javascript-in-your-browser">
<meta property="og:image" content="//www.lighthouselabs.ca/uploads/post/open_graph_image/506/1493754_HowToRunJavascript-775x450-2_110322.png">
<meta property="og:title" content="How To Run Javascript In Your Browser - Lighthouse Labs">
<meta property="og:site_name" content="Lighthouse Labs">
<meta property="og:description" content="Did you know you can run your Javascript in your browser? We show you how in this guide, as well as other important javascript tips for newbies.">
<meta name="facebook-domain-verification" content="e8sd2ycped1lydtyq4p6eq5jf8ykoq">

<!-- Google+ -->
<meta itemprop="name" content="&#39;How To Run Javascript In Your Browser - Lighthouse Labs">
<meta itemprop="image" content="//www.lighthouselabs.ca/uploads/post/open_graph_image/506/1493754_HowToRunJavascript-775x450-2_110322.png">
<meta itemprop="description" content="Did you know you can run your Javascript in your browser? We show you how in this guide, as well as other important javascript tips for newbies.">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@lighthouse_labs">
<meta name="twitter:url" content="https://www.lighthouselabs.ca/en/blog/how-to-run-javascript-in-your-browser">
<meta name="twitter:title" content="How To Run Javascript In Your Browser - Lighthouse Labs">
<meta name="twitter:image:src" content="//www.lighthouselabs.ca/uploads/post/open_graph_image/506/1493754_HowToRunJavascript-775x450-2_110322.png">


    <link rel="shortcut icon" type="image/x-icon" href="https://www.lighthouselabs.ca/assets/fav-26ed4ac40250f3139054a0a51bf9b69efc0f9ab16028844348866db580ffdd7e.ico">

    <!--[if lt IE 9]>
  <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
<![endif]-->

    <link rel="stylesheet" media="all" href="./valid_files/application-10e1d8a3bcc21e2317247af2faf6658c249d45ae298c90de70b97a3608be6ce8.css" data-turbolinks-track="true">
    <link rel="stylesheet" media="all" href="./valid_files/slick-93cae476d519fb1be40d197da4524f0da9633477a6df11ffb315486911d7027f.css" data-turbolinks-track="true">

    <meta name="csrf-param" content="authenticity_token">
<meta name="csrf-token" content="lfOv+I6Nf86WVJ0U2epq+IWQjzRkz2lrbX71dREQLlch9w9M6X/WiwhC5flvV5Pj1dLGx6smRFIs6+Cp1WFGGg==">

      <link rel="stylesheet" media="screen" href="./valid_files/prism-7069a4cdd57d663a4b031e2235e98e2965925d5053f576f24bbcdc1d1094c5fe.css">
  <script id="mcjs">
  !function(c,h,i,m,p){
      m=c.createElement(h),p=c.getElementsByTagName(h)[0],
      m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(
        document,"script","https://chimpstatic.com/mcjs-connected/js/users/e52f4473cc66c663ef6a0b1f4/59b20df6ef45ad46607d4ca50.js"
        );
</script>

  <script type="text/javascript" src="./valid_files/sharethis.js.download" async="async"></script>


    <script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '486611734821609');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?id=486611734821609&amp;ev=PixelInitialized" /></noscript>

    <script type="text/javascript">
(function(){
  // Create a queue, but don't obliterate an existing one!
  var analytics = window.analytics = window.analytics || [];
  // If the real analytics.js is already on the page return.
  if (analytics.initialize) return;
  // If the snippet was invoked already show an error.
  if (analytics.invoked) {
    if (window.console && console.error) {
      console.error('Segment snippet included twice.');
    }
    return;
  }
  // Invoked flag, to make sure the snippet
  // is never invoked twice.
  analytics.invoked = true;
  // A list of the methods in Analytics.js to stub.
  analytics.methods = [
    'trackSubmit',
    'trackClick',
    'trackLink',
    'trackForm',
    'pageview',
    'identify',
    'reset',
    'group',
    'track',
    'ready',
    'alias',
    'debug',
    'page',
    'once',
    'off',
    'on',
    'addSourceMiddleware',
    'addIntegrationMiddleware',
    'setAnonymousId',
    'addDestinationMiddleware'
  ];
  // Define a factory to create stubs. These are placeholders
  // for methods in Analytics.js so that you never have to wait
  // for it to load to actually record data. The `method` is
  // stored as the first argument, so we can replay the data.
  analytics.factory = function(method){
    return function(){
      var args = Array.prototype.slice.call(arguments);
      args.unshift(method);
      analytics.push(args);
      return analytics;
    };
  };
  // For each of our methods, generate a queueing stub.
  for (var i = 0; i < analytics.methods.length; i++) {
    var key = analytics.methods[i];
    analytics[key] = analytics.factory(key);
  }
  // Define a method to load Analytics.js from our CDN,
  // and that will be sure to only ever load it once.
  analytics.load = function(key, options){
    // Create an async script element based on your key.
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.segment.com/analytics.js/v1/'
        + key + '/analytics.min.js';
    // Insert our script next to the first script element.
    var first = document.getElementsByTagName('script')[0];
    first.parentNode.insertBefore(script, first);
    analytics._loadOptions = options;
  };
  analytics._writeKey = 'afA3FRMhdBnZZAhiZohG0vIuwObeJKQF'
  // Add a version to keep track of what's in the wild.
  analytics.SNIPPET_VERSION = '4.13.2';
  // Load Analytics.js with your key, which will automatically
  // load the tools you've enabled for your account. Boosh!
  analytics.load("afA3FRMhdBnZZAhiZohG0vIuwObeJKQF");
  // Make the first page call to load the integrations. If
  // you'd like to manually name or tag the page, edit or
  // move this call however you'd like.
  analytics.page();
})();
</script>

  <script type="text/javascript" async="" src="./valid_files/f.txt"></script><script type="text/javascript" async="" src="./valid_files/7c7c3611-6608-419e-b932-960437283b83.js.download"></script><script src="./valid_files/134626636.js.download" type="text/javascript" async="" data-ueto="ueto_cd43088efd"></script><script async="" src="./valid_files/modules.4bbac2bdc7f1b66d3009.js.download" charset="utf-8"></script><style type="text/css">#st-2 {
  font-family: "Helvetica Neue", Verdana, Helvetica, Arial, sans-serif;;
  -moz-transition: all 0.2s ease-in; -ms-transition: all 0.2s ease-in; -o-transition: all 0.2s ease-in; -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in;
  backface-visibility: hidden;
  display: block;
  position: fixed;
  opacity: 1;
  text-align: left;
  top: 160px;
  z-index: 94034;
}
#st-2.st-left {
  left: 0px;
}
#st-2.st-hidden.st-left {
  left: -48px;
}
#st-2.st-hidden {
  width: 96px;
}
#st-2.st-preview {
  display: none!important;
  opacity: 0!important;
}
#st-2 > div {
  clear: left;
  float: left;
}
#st-2 .st-btn {
  -moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
  -moz-transition: all 0.2s ease-in; -ms-transition: all 0.2s ease-in; -o-transition: all 0.2s ease-in; -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: NaNpx;
  height: 48px;
  line-height: 24px;
  margin-bottom: 0;
  opacity: 1;
  overflow: hidden;
  padding: 12px;
  position: relative;
  text-align: left;
  top: 0;
  vertical-align: top;
  white-space: nowrap;
  width: 48px;
}
#st-2 .st-btn.st-first {
  border-top: none;
  border-top-right-radius: 4px;
}
#st-2 .st-btn.st-last {
  border-bottom: none;
  border-bottom-right-radius: 4px;
}
#st-2 .st-btn > svg {
  -moz-transition: all 0.2s ease-in; -ms-transition: all 0.2s ease-in; -o-transition: all 0.2s ease-in; -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in;
  height: 24px;
  margin-left: 0;
  vertical-align: top;
  width: 24px;
}
#st-2 .st-btn > img {
  -moz-transition: all 0.2s ease-in; -ms-transition: all 0.2s ease-in; -o-transition: all 0.2s ease-in; -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in;
  height: 24px;
  margin-left: 0;
  vertical-align: top;
  width: 24px;
}
#st-2 .st-btn > span {
  -moz-transition: all 0.2s ease-in; -ms-transition: all 0.2s ease-in; -o-transition: all 0.2s ease-in; -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in;
  color: #fff;
  display: inline-block;
  font-weight: 500;
  left: -35px;
  letter-spacing: 0.5px;
  opacity: 0;
  padding: 0 6px;
  position: relative;
  vertical-align: top;
  filter: alpha(opacity=0);
}
#st-2 .st-btn.st-hide-label > span {
  display: none !important;
}
#st-2 .st-total {
  -moz-transition: all 0.2s ease-in; -ms-transition: all 0.2s ease-in; -o-transition: all 0.2s ease-in; -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in;
  background: #fff;
  color: #555;
  display: inline-block;
  font-weight: 500;
  line-height: 18px;
  margin-right: 0;
  min-height: 34px;
  max-width: 80px;
  opacity: 1;
  padding: 4px 0;
  text-align: center;
  width: 48px;
}
#st-2 .st-total.st-hidden {
  display: none;
}
#st-2 .st-total > span {
  display: block;
  font-size: 18px;
  line-height: 21px;
  padding: 0;
}
#st-2 .st-total > span.st-shares {
  font-size: 11px;
  line-height: 11px;
}
#st-2 .st-toggle {
  left: -48px;
  -moz-transition: all 0.2s ease-in; -ms-transition: all 0.2s ease-in; -o-transition: all 0.2s ease-in; -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in;
  background: #ccc;
  border-bottom-right-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 24px;
  line-height: 24px;
  position: relative;
  text-align: center;
  width: 48px;
}
#st-2.st-hidden .st-toggle {
  border-top-right-radius: 4px;
}
#st-2.st-left .st-toggle .st-left {
  display: inline-block;
}
#st-2.st-left.st-hidden .st-toggle .st-left {
  display: none;
}
#st-2.st-left .st-toggle .st-right {
  display: none;
}
#st-2.st-left.st-hidden .st-toggle .st-right {
  display: inline-block;
}#st-2:hover .st-toggle {
  left: 0;
}
#st-2.st-hidden:hover .st-toggle {
  left: 48px;
}
#st-2.st-toggleable:hover .st-btn.st-last {
  border-bottom-right-radius: 0;
}
#st-2.st-toggleable:hover .st-btn.st-last:hover {
  border-bottom-right-radius: 4px;
}
#st-2 .st-btn:hover {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
#st-2.st-has-labels .st-btn:hover {
  width: 120px;
}
#st-2:not(.st-has-labels) .st-btn:hover {
  width: 62px;
}
#st-2 .st-btn.st-hide-label:hover {
  width: 62px;
}
#st-2 .st-btn:hover > svg {
  margin-left: 5px;
}
#st-2 .st-btn:hover > img {
  margin-left: 5px;
}
#st-2 .st-btn:hover > span {
  opacity: 1;
  display: inline-block;
  left: 0;
  filter: alpha(opacity=100);
}
@media (max-width: 1024px) {
  #st-2 .st-btn:hover > svg {
    margin-left: 0;
  }
  #st-2 .st-btn:hover > span {
    display: none;
  }
}@media (max-width: 1024px) {
  #st-2 {
  bottom: 0;
  display: flex;
  left: 0;
  right: 0;
  top: auto;
  width: 100%;
}
#st-2.st-hidden {
  bottom: -48px;
  width: 100%;
}
#st-2.st-hidden.st-left {
  left: 0;
}
#st-2.st-hidden.st-right {
  right: 0;
}
#st-2 > div {
  -moz-flex: 1;
  -ms-flex: 1;
  -webkit-flex: 1;
  clear: none;
  flex: 1;
  float: none;
}
#st-2 .st-total {
  background: #fff;
  padding: 6px 8px;
}
#st-2 .st-btn {
  -moz-border-radius: 0 !important;
-webkit-border-radius: 0 !important;
border-radius: 0 !important;
  text-align: center;
  width: auto;
}
#st-2 .st-btn > span {
  display: none;
}
#st-2 .st-toggle {
  display: none;
}body { padding-bottom: 48px; }
}#st-2 .st-btn[data-network='linkedin'] {
  background-color: #dd5353
}
#st-2 .st-btn[data-network='linkedin'] img {
  filter: invert(0%) sepia(1%) saturate(20%) hue-rotate(57deg) brightness(105%) contrast(100%);
}
#st-2 .st-btn[data-network='linkedin'] > span {
  color: #fff
}
#st-2 .st-btn[data-network='twitter'] {
  background-color: #dd5353
}
#st-2 .st-btn[data-network='twitter'] img {
  filter: invert(0%) sepia(1%) saturate(20%) hue-rotate(57deg) brightness(105%) contrast(100%);
}
#st-2 .st-btn[data-network='twitter'] > span {
  color: #fff
}
#st-2 .st-btn[data-network='facebook'] {
  background-color: #dd5353
}
#st-2 .st-btn[data-network='facebook'] img {
  filter: invert(0%) sepia(1%) saturate(20%) hue-rotate(57deg) brightness(105%) contrast(100%);
}
#st-2 .st-btn[data-network='facebook'] > span {
  color: #fff
}
#st-2 .st-btn[data-network='sharethis'] {
  background-color: #dd5353
}
#st-2 .st-btn[data-network='sharethis'] img {
  filter: invert(0%) sepia(1%) saturate(20%) hue-rotate(57deg) brightness(105%) contrast(100%);
}
#st-2 .st-btn[data-network='sharethis'] > span {
  color: #fff
}#st-2 .st-btn[data-network='snapchat'] > span {
  color: #333};
}#st-2 .st-btn[data-network='copy']:hover {
  width: max-content;
}</style></head>

  <body class="">
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWKGFQL"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

      <!-- <section class="covidWarning">
        <a href="/covid19" target="_blank">
        <p><span class="translation_missing" title="translation missing: en.layouts.application.covid_warning_banner">Covid Warning Banner</span></p>
        </a>
      </section> -->

        <div class="top-promo">
          <p>
            Employers, check out our <a href="https://www.lighthouselabs.ca/en/wage-subsidies">Wage Subsidy Program!</a>
          </p>
        </div>


      <header style="min-height: 93px;" class="lock-nav">

  <!-- MOBILE NAVIGATION -->
  <nav class="nav main-nav" id="main-mobile-nav">

    <div class="container">
      <button type="button" class="btn btn-text menu-btn">Menu</button>

        <a href="https://www.lighthouselabs.ca/en/apply">
          <button type="button" class="btn apply-btn">
            Apply
          </button>
</a>      <a href="https://www.lighthouselabs.ca/en">
        <span class="logo-container">
          <!--?xml version="1.0" encoding="utf-8"?-->
<!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg class="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 357 93.5">
<g id="Layer_1">
	<g>
		<path fill="#DA5251" d="M227.4,80.9v-2.2h23.4v2.2H227.4z"></path>
	</g>
	<g>
		<defs>
			<polygon id="SVGID_1_" points="225.7,21.9 210.7,15.1 210.7,12.7 228.6,20.9 228.6,23 210.7,31.1 210.7,28.7 225.7,21.9 			"></polygon>
		</defs>
		<use xlink:href="#SVGID_1_" overflow="visible" fill="#DA5251"></use>
		<clippath id="SVGID_2_">
			<use xlink:href="#SVGID_1_" overflow="visible"></use>
		</clippath>
	</g>
	<path fill="#012D3D" d="M249.2,78.7l-2.9-50.1h1.3v-1.8h-2.3v-8.7h2.8l-9.1-8.5l-8.5,8.5h2.4v8.7h-2.4v1.8h1.6L229,78.7H249.2z
		 M243.6,18.1v8.1H235v-8.1H243.6z M241.1,76.9v-3.7h-3.4v3.7H231l0.4-5.3l15.3-7.3l0.7,12.6H241.1z M233.3,42.3l11.8-5.5l0.7,11.4
		l-13.3,6.9L233.3,42.3z"></path>
</g>
<g id="Layer_2">
	<g>
		<path fill="#012D3D" d="M3.6,74.2V47.8h2.8v24h13.5v2.5H3.6z"></path>
		<path fill="#012D3D" d="M24.9,74.2V47.8h2.8v26.5H24.9z"></path>
		<path fill="#012D3D" d="M50.6,71.4c-0.9,1-1.9,1.7-3.2,2.2c-1.2,0.5-2.5,0.8-3.8,0.8c-2.7,0-4.8-0.7-6.2-2.2
			c-1.5-1.5-2.4-2.9-2.6-4.3c-0.3-1.4-0.4-3.7-0.4-6.9c0-2.6,0.1-4.7,0.2-6.3c0.1-1.6,1-3.2,2.6-4.8c1.6-1.6,3.7-2.4,6.4-2.4
			c1.6,0,3.1,0.3,4.3,0.9c1.2,0.6,2.4,1.5,3.7,2.7L49.6,53c-1.1-1.1-2-1.8-2.8-2.3c-0.8-0.5-1.9-0.7-3.2-0.7c-1.8,0-3.3,0.5-4.3,1.6
			c-1,1.1-1.6,2.1-1.8,3.3c-0.2,1.1-0.3,3.2-0.3,6.1c0,2.9,0.1,4.9,0.3,6.1c0.2,1.2,0.8,2.3,1.8,3.3c1,1,2.4,1.5,4.3,1.5
			c2.1,0,3.6-0.5,4.4-1.6c0.9-1.1,1.4-2,1.7-2.8c0.2-0.8,0.3-1.7,0.3-2.7v-2h-6.4v-2.5h9.2v4.2c0,1.5-0.2,2.8-0.5,3.9
			C52,69.5,51.4,70.5,50.6,71.4z"></path>
		<path fill="#012D3D" d="M74.7,74.2V62.1H62.1v12.1h-2.8V47.8h2.8v11.8h12.6V47.8h2.8v26.5H74.7z"></path>
		<path fill="#012D3D" d="M92.9,50.3v24h-2.8v-24h-7.6v-2.5h18.1v2.5H92.9z"></path>
		<path fill="#012D3D" d="M120.9,74.2V62.1h-12.6v12.1h-2.8V47.8h2.8v11.8h12.6V47.8h2.8v26.5H120.9z"></path>
		<path fill="#012D3D" d="M146.4,71.7c-1.8,1.8-4.1,2.7-6.8,2.7c-2.7,0-4.8-0.7-6.2-2.2s-2.4-2.9-2.6-4.3c-0.3-1.4-0.4-3.7-0.4-6.9
			c0-2.6,0.1-4.7,0.2-6.3c0.1-1.6,1-3.2,2.6-4.8c1.6-1.6,3.7-2.4,6.4-2.4c2.7,0,4.8,0.7,6.2,2.2s2.4,2.9,2.6,4.3
			c0.3,1.4,0.4,3.7,0.4,6.9c0,2.6-0.1,4.7-0.2,6.3C148.5,68.8,147.7,70.3,146.4,71.7z M144.2,52c-1.2-1.3-2.7-1.9-4.6-1.9
			c-1.8,0-3.3,0.5-4.3,1.6c-1,1.1-1.6,2.1-1.8,3.3c-0.2,1.1-0.3,3.2-0.3,6.1c0,2.9,0.1,4.9,0.3,6.1c0.2,1.2,0.8,2.2,1.8,3.3
			c1,1,2.4,1.6,4.3,1.6c1.8,0,3.3-0.5,4.3-1.6c1-1.1,1.6-2.1,1.8-3.3c0.2-1.1,0.3-3.2,0.3-6.1c0-2.9-0.1-4.9-0.3-6.1
			C145.5,53.8,145,52.8,144.2,52z"></path>
		<path fill="#012D3D" d="M164.3,74.4c-2.7,0-4.9-0.8-6.6-2.5c-1.7-1.7-2.6-3.8-2.6-6.4V47.8h2.8v17.5c0,2,0.6,3.6,1.7,4.8
			c1.2,1.2,2.7,1.8,4.6,1.8c1.9,0,3.5-0.6,4.6-1.8c1.2-1.2,1.8-2.8,1.8-4.8V47.8h2.8v17.7c0,2.6-0.9,4.8-2.6,6.5
			C169.2,73.6,167,74.4,164.3,74.4z"></path>
		<path fill="#012D3D" d="M187.6,74.4c-2,0-3.7-0.3-5.1-0.8s-2.7-1.4-4-2.7l1.9-1.9c1.1,1.1,2.1,1.8,3.2,2.2c1.1,0.4,2.4,0.7,4,0.7
			c1.9,0,3.5-0.4,4.6-1.3c1.1-0.9,1.7-2.1,1.7-3.6c0-1.5-0.3-2.5-0.9-3c-0.6-0.5-1.2-0.9-1.7-1.1c-0.5-0.2-1.2-0.3-2.1-0.5l-3.1-0.5
			c-2.1-0.3-3.8-1.1-5-2.2c-1.2-1.1-1.9-2.7-1.9-4.8c0-2.3,0.8-4.1,2.3-5.4c1.5-1.4,3.6-2,6.2-2c1.7,0,3.1,0.2,4.3,0.7
			c1.2,0.4,2.4,1.2,3.5,2.2l-1.8,1.8c-0.8-0.7-1.7-1.3-2.7-1.7c-1-0.4-2.1-0.6-3.5-0.6c-1.8,0-3.1,0.4-4.1,1.3
			c-1,0.9-1.5,2.1-1.5,3.6c0,1.3,0.3,2.3,0.9,2.8c0.6,0.5,1.2,0.9,1.9,1.2c0.6,0.3,1.3,0.5,2,0.6l2.9,0.4c1.2,0.2,2.2,0.4,2.9,0.7
			s1.6,0.9,2.6,1.7c1,0.9,1.5,2.4,1.5,4.7c0,2.3-0.8,4.1-2.5,5.5C192.7,73.7,190.4,74.4,187.6,74.4z"></path>
		<path fill="#012D3D" d="M202.7,74.2V47.8h16.4v2.5h-13.6v9.3h11.6v2.5h-11.6v9.6h13.6v2.5H202.7z"></path>
	</g>
	<g>
		<path fill="#012D3D" d="M259.3,74.4V47.9h2.8v24h13.5v2.5H259.3z"></path>
		<path fill="#012D3D" d="M295.9,74.4l-2.1-6h-11.5l-2.2,6h-3l9.7-26.5h2.4l9.7,26.5L295.9,74.4z M288.1,52l-5,13.9h9.9L288.1,52z"></path>
		<path fill="#012D3D" d="M313.5,74.4h-10.3V47.9h10c2.3,0,4.2,0.6,5.6,1.9c1.4,1.3,2.2,3,2.2,5.2c0,1.4-0.4,2.6-1.1,3.6
			c-0.7,1-1.7,1.8-2.8,2.2c1.3,0.5,2.3,1.3,3.1,2.4c0.8,1.1,1.2,2.4,1.2,3.9c0,2.4-0.7,4.2-2.1,5.4C317.9,73.7,316,74.4,313.5,74.4z
			 M313,50.4h-6.9v9.2h6.9c1.6,0,2.8-0.4,3.8-1.2c1-0.8,1.4-1.9,1.4-3.5c0-1.5-0.5-2.6-1.4-3.4C315.8,50.8,314.5,50.4,313,50.4z
			 M313.3,62.1h-7.2v9.7h7.2c1.6,0,2.9-0.4,3.9-1.3c1-0.9,1.4-2.1,1.4-3.6s-0.5-2.7-1.4-3.5C316.2,62.5,314.9,62.1,313.3,62.1z"></path>
		<path fill="#012D3D" d="M334.8,74.5c-2,0-3.7-0.3-5.1-0.8c-1.4-0.5-2.7-1.4-4-2.7l1.9-1.9c1.1,1.1,2.1,1.8,3.2,2.2
			c1.1,0.4,2.4,0.6,4,0.6c1.9,0,3.5-0.4,4.6-1.3c1.1-0.9,1.7-2.1,1.7-3.6c0-1.5-0.3-2.5-0.9-3c-0.6-0.5-1.2-0.9-1.7-1.1
			c-0.5-0.2-1.2-0.3-2.1-0.5l-3.1-0.5c-2.1-0.3-3.8-1.1-5-2.2c-1.2-1.1-1.9-2.7-1.9-4.8c0-2.3,0.8-4.1,2.3-5.4c1.5-1.4,3.6-2,6.2-2
			c1.7,0,3.1,0.2,4.3,0.7c1.2,0.4,2.4,1.2,3.5,2.2l-1.8,1.8c-0.8-0.7-1.7-1.3-2.7-1.7c-1-0.4-2.1-0.6-3.5-0.6
			c-1.8,0-3.1,0.4-4.1,1.3c-1,0.9-1.5,2.1-1.5,3.6c0,1.3,0.3,2.3,0.9,2.8c0.6,0.5,1.2,0.9,1.9,1.2c0.6,0.3,1.3,0.5,2,0.6l2.9,0.4
			c1.2,0.2,2.2,0.4,2.9,0.7c0.7,0.3,1.6,0.9,2.6,1.7c1,0.9,1.5,2.4,1.5,4.7c0,2.3-0.8,4.1-2.5,5.5C339.9,73.9,337.6,74.5,334.8,74.5
			z"></path>
	</g>
</g>
</svg>

        </span>
</a>      <ul class="nav-menu">
          <li tabindex="0">
            <a>Coding</a>
            <ul class="children menu-full-time-programs">
              <li><a href="https://www.lighthouselabs.ca/en/web-development">Web Development - Bootcamp (12 Weeks) | Flexible (30 Weeks)</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/intro-to-web">Intro to Web Development - Part Time (6 Weeks)</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/intro-front-end-developer-course-javascript">Intro to Front-End with Javascript - Part Time (6 Weeks)</a></li>
            </ul>
          </li>
          <li tabindex="1">
            <a>Data</a>
            <ul class="children menu-part-time-programs">
              <li><a href="https://www.lighthouselabs.ca/en/data-science">Data Science - Bootcamp (12 Weeks) | Flexible (30 Weeks)</a></li>
              <li class="apply-side-badge-mobile">
                <a href="https://www.lighthouselabs.ca/en/data-analytics">Data Analytics - Bootcamp (8 Weeks) | Flexible (18 Weeks)</a>
              </li>
               <li><a href="https://www.lighthouselabs.ca/en/intro-to-data-analytics-course">Intro to Data Analytics - Part Time (6 Weeks)</a></li>
               <li><a href="https://www.lighthouselabs.ca/en/data-analytics-for-hr-101">Data Analytics for HR - 101 - Part Time (4 Days)</a></li>
            </ul>
          </li>
          <li tabindex="2">
            <a>Cyber Security</a>
            <ul class="children menu-cyber-programs">
              <li><a href="https://www.lighthouselabs.ca/en/cyber-security">Cyber Security - Bootcamp (12 Weeks) | Flexible (30 Weeks)</a></li>
            </ul>
          </li>
          <li tabindex="3">
            <a>Other Courses</a>
            <ul class="children menu-other-programs">
              <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/courses/html-and-css">HTML &amp; CSS Essentials</a></li>
              <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/courses/javascript">JavaScript Essentials I</a></li>
              <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/courses/javascript-essentials-2">JavaScript Essentials II</a></li>
              <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/courses/programming-essentials-with-python">Programming Essentials with Python</a></li>
              <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/courses/iOS-Essentials">iOS Essentials</a></li>
              <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/bundles/sql-essentials">SQL Essentials</a></li>
            </ul>
          </li>
          <li tabindex="4">
            <a>Bootcamp Experience</a>
            <ul class="children menu-students">
              <li><a href="https://www.lighthouselabs.ca/en/admissions">Admissions</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/career-services">Career Services</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/testimonials">Testimonials</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/student-outcomes">Student Outcomes</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/career-trajectory">Career Trajectory</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/blog">LHL Blog</a></li>
            </ul>
          </li>
          <li tabindex="5">
            <a>Financing</a>
            <ul class="children menu-financing">
              <li><a href="https://www.lighthouselabs.ca/en/financial-guide">Financial Guide</a></li>
            </ul>
          </li>
          <li tabindex="6">
            <a>Enterprise</a>
            <ul class="children menu-enterprise">
              <li><a href="https://enterprise.lighthouselabs.ca/">Corporate Training</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/employers">Hire our Grads</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/academic">Academic Partnerships</a></li>
            </ul>
          </li>
          <li tabindex="7">
            <a>About us</a>
            <ul class="children menu-about-us">
              <li><a href="https://www.lighthouselabs.ca/en/about">Our Story</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/careers">Careers at LHL</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/team">Team</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/press">Press</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/blog">Blog</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/contact">Contact</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/events">Events</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/impact-initiatives">Impact Initiatives</a></li>
              <li><a href="https://www.lighthouselabs.ca/en/faq">FAQ</a></li>
            </ul>
          </li>
          <li tabindex="8">
              <a href="https://www.lighthouselabs.ca/fr/blog/how-to-run-javascript-in-your-browser">Français</a>
          </li>
        <li tabindex="8">
          <a href="https://www.lighthouselabs.ca/en/apply">
            <button type="button" class="btn apply-btn-mobile">
              Apply
            </button>
</a>        </li>
      </ul>
    </div>
  </nav>

  <!-- MAIN NAVIGATION -->
  <nav class="nav main-nav" id="main-non-mobile-nav">

    <!-- Hero Banners -->

    <div class="container">
      <button type="button" class="btn btn-text menu-btn">Menu</button>

        <a href="https://www.lighthouselabs.ca/en/apply">
          <button type="button" class="btn apply-btn">
           Apply
          </button>
</a>      <a href="https://www.lighthouselabs.ca/en">
        <span class="logo-container">
          <!--?xml version="1.0" encoding="utf-8"?-->
<!-- Generator: Adobe Illustrator 16.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

<svg class="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 357 93.5">
<g id="Layer_1">
	<g>
		<path fill="#DA5251" d="M227.4,80.9v-2.2h23.4v2.2H227.4z"></path>
	</g>
	<g>
		<defs>
			<polygon id="SVGID_1_" points="225.7,21.9 210.7,15.1 210.7,12.7 228.6,20.9 228.6,23 210.7,31.1 210.7,28.7 225.7,21.9 			"></polygon>
		</defs>
		<use xlink:href="#SVGID_1_" overflow="visible" fill="#DA5251"></use>
		<clippath id="SVGID_2_">
			<use xlink:href="#SVGID_1_" overflow="visible"></use>
		</clippath>
	</g>
	<path fill="#012D3D" d="M249.2,78.7l-2.9-50.1h1.3v-1.8h-2.3v-8.7h2.8l-9.1-8.5l-8.5,8.5h2.4v8.7h-2.4v1.8h1.6L229,78.7H249.2z
		 M243.6,18.1v8.1H235v-8.1H243.6z M241.1,76.9v-3.7h-3.4v3.7H231l0.4-5.3l15.3-7.3l0.7,12.6H241.1z M233.3,42.3l11.8-5.5l0.7,11.4
		l-13.3,6.9L233.3,42.3z"></path>
</g>
<g id="Layer_2">
	<g>
		<path fill="#012D3D" d="M3.6,74.2V47.8h2.8v24h13.5v2.5H3.6z"></path>
		<path fill="#012D3D" d="M24.9,74.2V47.8h2.8v26.5H24.9z"></path>
		<path fill="#012D3D" d="M50.6,71.4c-0.9,1-1.9,1.7-3.2,2.2c-1.2,0.5-2.5,0.8-3.8,0.8c-2.7,0-4.8-0.7-6.2-2.2
			c-1.5-1.5-2.4-2.9-2.6-4.3c-0.3-1.4-0.4-3.7-0.4-6.9c0-2.6,0.1-4.7,0.2-6.3c0.1-1.6,1-3.2,2.6-4.8c1.6-1.6,3.7-2.4,6.4-2.4
			c1.6,0,3.1,0.3,4.3,0.9c1.2,0.6,2.4,1.5,3.7,2.7L49.6,53c-1.1-1.1-2-1.8-2.8-2.3c-0.8-0.5-1.9-0.7-3.2-0.7c-1.8,0-3.3,0.5-4.3,1.6
			c-1,1.1-1.6,2.1-1.8,3.3c-0.2,1.1-0.3,3.2-0.3,6.1c0,2.9,0.1,4.9,0.3,6.1c0.2,1.2,0.8,2.3,1.8,3.3c1,1,2.4,1.5,4.3,1.5
			c2.1,0,3.6-0.5,4.4-1.6c0.9-1.1,1.4-2,1.7-2.8c0.2-0.8,0.3-1.7,0.3-2.7v-2h-6.4v-2.5h9.2v4.2c0,1.5-0.2,2.8-0.5,3.9
			C52,69.5,51.4,70.5,50.6,71.4z"></path>
		<path fill="#012D3D" d="M74.7,74.2V62.1H62.1v12.1h-2.8V47.8h2.8v11.8h12.6V47.8h2.8v26.5H74.7z"></path>
		<path fill="#012D3D" d="M92.9,50.3v24h-2.8v-24h-7.6v-2.5h18.1v2.5H92.9z"></path>
		<path fill="#012D3D" d="M120.9,74.2V62.1h-12.6v12.1h-2.8V47.8h2.8v11.8h12.6V47.8h2.8v26.5H120.9z"></path>
		<path fill="#012D3D" d="M146.4,71.7c-1.8,1.8-4.1,2.7-6.8,2.7c-2.7,0-4.8-0.7-6.2-2.2s-2.4-2.9-2.6-4.3c-0.3-1.4-0.4-3.7-0.4-6.9
			c0-2.6,0.1-4.7,0.2-6.3c0.1-1.6,1-3.2,2.6-4.8c1.6-1.6,3.7-2.4,6.4-2.4c2.7,0,4.8,0.7,6.2,2.2s2.4,2.9,2.6,4.3
			c0.3,1.4,0.4,3.7,0.4,6.9c0,2.6-0.1,4.7-0.2,6.3C148.5,68.8,147.7,70.3,146.4,71.7z M144.2,52c-1.2-1.3-2.7-1.9-4.6-1.9
			c-1.8,0-3.3,0.5-4.3,1.6c-1,1.1-1.6,2.1-1.8,3.3c-0.2,1.1-0.3,3.2-0.3,6.1c0,2.9,0.1,4.9,0.3,6.1c0.2,1.2,0.8,2.2,1.8,3.3
			c1,1,2.4,1.6,4.3,1.6c1.8,0,3.3-0.5,4.3-1.6c1-1.1,1.6-2.1,1.8-3.3c0.2-1.1,0.3-3.2,0.3-6.1c0-2.9-0.1-4.9-0.3-6.1
			C145.5,53.8,145,52.8,144.2,52z"></path>
		<path fill="#012D3D" d="M164.3,74.4c-2.7,0-4.9-0.8-6.6-2.5c-1.7-1.7-2.6-3.8-2.6-6.4V47.8h2.8v17.5c0,2,0.6,3.6,1.7,4.8
			c1.2,1.2,2.7,1.8,4.6,1.8c1.9,0,3.5-0.6,4.6-1.8c1.2-1.2,1.8-2.8,1.8-4.8V47.8h2.8v17.7c0,2.6-0.9,4.8-2.6,6.5
			C169.2,73.6,167,74.4,164.3,74.4z"></path>
		<path fill="#012D3D" d="M187.6,74.4c-2,0-3.7-0.3-5.1-0.8s-2.7-1.4-4-2.7l1.9-1.9c1.1,1.1,2.1,1.8,3.2,2.2c1.1,0.4,2.4,0.7,4,0.7
			c1.9,0,3.5-0.4,4.6-1.3c1.1-0.9,1.7-2.1,1.7-3.6c0-1.5-0.3-2.5-0.9-3c-0.6-0.5-1.2-0.9-1.7-1.1c-0.5-0.2-1.2-0.3-2.1-0.5l-3.1-0.5
			c-2.1-0.3-3.8-1.1-5-2.2c-1.2-1.1-1.9-2.7-1.9-4.8c0-2.3,0.8-4.1,2.3-5.4c1.5-1.4,3.6-2,6.2-2c1.7,0,3.1,0.2,4.3,0.7
			c1.2,0.4,2.4,1.2,3.5,2.2l-1.8,1.8c-0.8-0.7-1.7-1.3-2.7-1.7c-1-0.4-2.1-0.6-3.5-0.6c-1.8,0-3.1,0.4-4.1,1.3
			c-1,0.9-1.5,2.1-1.5,3.6c0,1.3,0.3,2.3,0.9,2.8c0.6,0.5,1.2,0.9,1.9,1.2c0.6,0.3,1.3,0.5,2,0.6l2.9,0.4c1.2,0.2,2.2,0.4,2.9,0.7
			s1.6,0.9,2.6,1.7c1,0.9,1.5,2.4,1.5,4.7c0,2.3-0.8,4.1-2.5,5.5C192.7,73.7,190.4,74.4,187.6,74.4z"></path>
		<path fill="#012D3D" d="M202.7,74.2V47.8h16.4v2.5h-13.6v9.3h11.6v2.5h-11.6v9.6h13.6v2.5H202.7z"></path>
	</g>
	<g>
		<path fill="#012D3D" d="M259.3,74.4V47.9h2.8v24h13.5v2.5H259.3z"></path>
		<path fill="#012D3D" d="M295.9,74.4l-2.1-6h-11.5l-2.2,6h-3l9.7-26.5h2.4l9.7,26.5L295.9,74.4z M288.1,52l-5,13.9h9.9L288.1,52z"></path>
		<path fill="#012D3D" d="M313.5,74.4h-10.3V47.9h10c2.3,0,4.2,0.6,5.6,1.9c1.4,1.3,2.2,3,2.2,5.2c0,1.4-0.4,2.6-1.1,3.6
			c-0.7,1-1.7,1.8-2.8,2.2c1.3,0.5,2.3,1.3,3.1,2.4c0.8,1.1,1.2,2.4,1.2,3.9c0,2.4-0.7,4.2-2.1,5.4C317.9,73.7,316,74.4,313.5,74.4z
			 M313,50.4h-6.9v9.2h6.9c1.6,0,2.8-0.4,3.8-1.2c1-0.8,1.4-1.9,1.4-3.5c0-1.5-0.5-2.6-1.4-3.4C315.8,50.8,314.5,50.4,313,50.4z
			 M313.3,62.1h-7.2v9.7h7.2c1.6,0,2.9-0.4,3.9-1.3c1-0.9,1.4-2.1,1.4-3.6s-0.5-2.7-1.4-3.5C316.2,62.5,314.9,62.1,313.3,62.1z"></path>
		<path fill="#012D3D" d="M334.8,74.5c-2,0-3.7-0.3-5.1-0.8c-1.4-0.5-2.7-1.4-4-2.7l1.9-1.9c1.1,1.1,2.1,1.8,3.2,2.2
			c1.1,0.4,2.4,0.6,4,0.6c1.9,0,3.5-0.4,4.6-1.3c1.1-0.9,1.7-2.1,1.7-3.6c0-1.5-0.3-2.5-0.9-3c-0.6-0.5-1.2-0.9-1.7-1.1
			c-0.5-0.2-1.2-0.3-2.1-0.5l-3.1-0.5c-2.1-0.3-3.8-1.1-5-2.2c-1.2-1.1-1.9-2.7-1.9-4.8c0-2.3,0.8-4.1,2.3-5.4c1.5-1.4,3.6-2,6.2-2
			c1.7,0,3.1,0.2,4.3,0.7c1.2,0.4,2.4,1.2,3.5,2.2l-1.8,1.8c-0.8-0.7-1.7-1.3-2.7-1.7c-1-0.4-2.1-0.6-3.5-0.6
			c-1.8,0-3.1,0.4-4.1,1.3c-1,0.9-1.5,2.1-1.5,3.6c0,1.3,0.3,2.3,0.9,2.8c0.6,0.5,1.2,0.9,1.9,1.2c0.6,0.3,1.3,0.5,2,0.6l2.9,0.4
			c1.2,0.2,2.2,0.4,2.9,0.7c0.7,0.3,1.6,0.9,2.6,1.7c1,0.9,1.5,2.4,1.5,4.7c0,2.3-0.8,4.1-2.5,5.5C339.9,73.9,337.6,74.5,334.8,74.5
			z"></path>
	</g>
</g>
</svg>

        </span>
</a>
      <!-- PROGRAMS -->
        <ul class="nav-menu">
          <li tabindex="0">
            <a>Programs</a>
            <div class="pane with-submenu">
              <div class="main-nav-submenu">
                <!-- SECTIONS -->
                <ul class="main-nav-submenu-items">
                  <li class="submenu-item active" data-submenu="programs-coding">
                    <a href="https://www.lighthouselabs.ca/en/blog/how-to-run-javascript-in-your-browser#">Coding</a>
                  </li>
                  <li class="submenu-item" data-submenu="programs-data">
                    <a>Data</a>
                  </li>
                  <li class="submenu-item" data-submenu="programs-cyber">
                    <a>Cyber Security</a>
                  </li>
                  <li class="submenu-item" data-submenu="programs-other">
                    <a>Other Courses</a>
                  </li>
                </ul>
              </div>
              <div class="programs nav-container submenu active" id="programs-coding">
                <div class="course-nav split-nav padded-top" id="coding-nav">
                  <div class="section-heading"><p>Programs</p></div>
                  <div class="submenu-container two-sections">
                    <ul>
                      <li><a href="https://www.lighthouselabs.ca/en/web-development">Web Development - Bootcamp (12 Weeks) | Flexible (30 Weeks)</a></li>
                    </ul>
                  </div>
                  <div class="submenu-container two-sections">
                    <ul>
                      <li><a href="https://www.lighthouselabs.ca/en/intro-to-web">Intro to Web Development - Part Time (6 Weeks)</a></li>
                      <li><a href="https://www.lighthouselabs.ca/en/intro-front-end-developer-course-javascript">Intro to Front-End with Javascript - Part Time (6 Weeks)</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="programs nav-container submenu" id="programs-data">
                <div class="course-nav split-nav  padded-top" id="data-nav">
                  <div class="section-heading"><p>Programs</p></div>
                  <div class="submenu-container two-sections">
                    <ul>
                      <li><a href="https://www.lighthouselabs.ca/en/data-science">Data Science - Bootcamp (12 Weeks) | Flexible (30 Weeks)</a></li>
                      <li class="apply-side-badge">
                        <a href="https://www.lighthouselabs.ca/en/data-analytics">Data Analytics - Bootcamp (8 Weeks) | Flexible (18 Weeks)</a>
                      </li>
                    </ul>
                  </div>
                  <div class="submenu-container two-sections">
                    <ul>
                      <li><a href="https://www.lighthouselabs.ca/en/intro-to-data-analytics-course">Intro to Data Analytics - Part Time (6 Weeks)</a></li>
                      <li><a href="https://www.lighthouselabs.ca/en/data-analytics-for-hr-101">Data Analytics for HR - 101 - Part Time (4 Days)</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="programs nav-container submenu" id="programs-cyber">
                <div class="course-nav split-nav  padded-top" id="cyber-nav">
                  <div class="section-heading"><p>Programs</p></div>
                  <div class="submenu-container two-sections">
                    <ul>
                      <li><a href="https://www.lighthouselabs.ca/en/cyber-security">Cyber Security - Bootcamp (12 Weeks) | Flexible (30 Weeks)</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="programs nav-container submenu" id="programs-other">
                <div class="course-nav split-nav padded-top" id="other-nav">
                  <div class="submenu-container two-sections">
                    <span class="section-heading">Free Courses</span>
                    <ul>
                      <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/courses/html-and-css">HTML &amp; CSS Essentials</a></li>
                      <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/courses/javascript">JavaScript Essentials I</a></li>
                      <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/courses/javascript-essentials-2">JavaScript Essentials II</a></li>
                      <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/courses/programming-essentials-with-python">Programming Essentials with Python</a></li>
                      <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/courses/iOS-Essentials">iOS Essentials</a></li>
                      <li><a target="_blank" href="https://free-courses.lighthouselabs.ca/bundles/sql-essentials">SQL Essentials</a></li>
                      
                    </ul>
                  </div>
                  <div class="submenu-container two-sections">
                    <ul>
                      <span class="section-heading">Looking for Corporate Training?</span>
                      <div class="submenu-container">
                        <span class="submenu-text">All our courses are available for corporate training and are <strong>customizable</strong>.</span>
                        <p><a href="https://enterprise.lighthouselabs.ca/?utm_source=lhlwebsite&amp;utm_medium=menu&amp;utm_campaign=programstab">Click for Details &gt;</a></p>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- EXPERIENCE -->
          <li tabindex="1">
            <a>Experience</a>
            <div class="pane">
              <div class="nav-container">
                <div class="split-nav three-sections" id="education">
                  <p class="split-title">Education</p>
                  <div class="split-container">
                    <ul>
                      <li><a href="https://www.lighthouselabs.ca/en/admissions">Admissions</a></li>
                      <li><a href="https://www.lighthouselabs.ca/en/career-services">Career Services</a></li>
                      <li><a href="https://www.lighthouselabs.ca/en/testimonials">Testimonials</a></li>
                    </ul>
                  </div>
                </div>
                <div class="split-nav three-sections" id="reports">
                  <p class="split-title">Reports</p>
                  <div class="split-container">
                    <ul>
                      <li><a href="https://www.lighthouselabs.ca/en/student-outcomes">Student Outcomes</a></li>
                      <li><a href="https://www.lighthouselabs.ca/en/career-trajectory">Career Trajectory</a></li>
                    </ul>
                  </div>
                </div>
                <div class="split-nav three-sections" id="community">
                  <p class="split-title">Resources</p>
                  <div class="split-container">
                    <ul>
                      <li><a href="https://www.lighthouselabs.ca/en/blog">LHL Blog</a></li>
                      <li><a href="https://www.lighthouselabs.ca/en/events">Events</a></li>
                      <li><a href="https://www.lighthouselabs.ca/en/tech-skills-quiz">Tech Skills Quiz</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div></li>

          <!-- FINANCING -->
          <li tabindex="2">
            <a>Financing</a>
            <div class="pane">
              <div class="nav-container">
                <div class="about-nav-container normal-nav-container">
                  <ul>
                    <li><a href="https://www.lighthouselabs.ca/en/financial-guide">Financial Guide</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- ENTERPRISE -->
          <li tabindex="3">
            <a>Enterprise</a>
            <div class="pane">
              <div class="nav-container">
                <div class="normal-nav-container">
                  <ul>
                    <!-- TODO: add corp hub path -->
                    <li><a target="_blank" href="https://enterprise.lighthouselabs.ca/?utm_source=lhlwebsite&amp;utm_medium=menu&amp;utm_campaign=enterprise">Corporate Training</a></li>
                    <li><a href="https://www.lighthouselabs.ca/en/employers">Hire Our Graduates</a></li>
                    <li><a href="https://www.lighthouselabs.ca/en/academic">Academic Partnerships</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- ABOUT US -->
          <li tabindex="4">
            <a>About us</a>
            <div class="pane">
              <div class="nav-container">
                <div class="about-nav-container">
                  <ul>
                    <li><a href="https://www.lighthouselabs.ca/en/about">Our Story</a></li>
                    <li><a href="https://www.lighthouselabs.ca/en/impact-initiatives">Impact Initiatives</a></li>
                  </ul>
                  <ul>
                    <li><a href="https://www.lighthouselabs.ca/en/careers">Careers at LHL</a></li>
                    <li><a href="https://www.lighthouselabs.ca/en/team">Team</a></li>
                  </ul>
                  <ul>
                    <li><a href="https://www.lighthouselabs.ca/en/press">Press</a></li>
                    <li><a href="https://www.lighthouselabs.ca/en/faq">FAQ</a></li>
                  </ul>
                  <ul>
                    <li><a href="https://www.lighthouselabs.ca/en/contact">Contact</a></li>
                    <li><a href="https://www.lighthouselabs.ca/en/testimonials?section=success_stories">Testimonials</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
            <li tabindex="5">
                <a class="language_switcher" href="https://www.lighthouselabs.ca/fr/blog/how-to-run-javascript-in-your-browser">FR</a>
            </li>
        </ul>
    </div>
  </nav>
</header>

      <!-- General Popup for promotions -->



    

<article class="wrap" id="article" data-post-upload-url="/admin/cms/posts/how-to-run-javascript-in-your-browser?locale=en">
  <div class="content-section">

    <div class="article-details">
      <h1>How To Run Javascript In Your Browser</h1>
      <div class="by">By: <span class="author"><a class="link" href="https://www.lighthouselabs.ca/en/blog?author=Daisy+Robinson">Daisy Robinson</a></span></div>

        <div class="date">November 4, 2022</div>

        <div class="date">Updated April 11, 2023</div>

      <div class="date">Estimated reading time: 8 minutes.</div>

    </div>

    <div class="sharethis-inline-share-buttons"></div>

    <div class="article-text">
      <p></p><p><img src="./valid_files/2xrwux2.png" alt="image of two people staring at a computer monitor which is displaying some code on a dark background that also has the Lighthouse Labs Logo and the javascript logo"></p>

<p>No matter where you look on the internet, you’ll find something powered by Javascript. All around the world, programmers are using it to create dynamic and interactive web content. In fact, 97% of websites use Javascript, making it the most used programming language in the world. It’s also a web-based language, making it naturally easy for web browsers to understand the language.</p>

<p>If you want to break into the tech field, you may wonder, “do I need to know JavaScript?”. The answer is yes! The good news is that you’ve already used its functionality in your everyday web experiences. The bad news is that learning how to run JavaScript can be tricky. But not to fret, read on to learn more about it so you can be a pro in no time! Need an answer quickly? Jump to the section below:</p>

<ul>
<li><a target="_self" href="https://www.lighthouselabs.ca/blog/how-to-run-javascript-in-your-browser#javascript">What is Javascript?</a></li>
<li><a target="_self" href="https://www.lighthouselabs.ca/blog/how-to-run-javascript-in-your-browser#howitworks">How does JavaScript work?</a></li>
<li><a target="_self" href="https://www.lighthouselabs.ca/blog/how-to-run-javascript-in-your-browser#howtorunjsfile">How do I run a JavaScript file?</a></li>
<li><a target="_self" href="https://www.lighthouselabs.ca/blog/how-to-run-javascript-in-your-browser#howtorunjsfilehtml">How to run JavaScript in HTML</a></li>
<li><a target="_self" href="https://www.lighthouselabs.ca/blog/how-to-run-javascript-in-your-browser#techniquestoavoid">Techniques to Avoid with JavaScript</a></li>
<li><a target="_self" href="https://www.lighthouselabs.ca/blog/how-to-run-javascript-in-your-browser#bestpractices">Javascript Best Practices</a></li>
<li><a target="_self" href="https://www.lighthouselabs.ca/blog/how-to-run-javascript-in-your-browser#nextlevel">Take Your Coding Knowledge to the Next Level with Lighthouse Labs</a></li>
</ul>

<h2><a name="javascript"></a>What is Javascript?</h2>

<p>JavaScript (JS for short) is a <a href="https://www.lighthouselabs.ca/en/blog/21dcc-prep" target="_blank">“full-fledged dynamic programming language that, when applied to an HTML document, can provide dynamic interactivity on websites.”</a> In other words, anything that moves, refreshes, or changes on your screen without needing you to manually reload your page is the work of JavaScript. Since it’s a scripting language, it automates the process users would otherwise have to execute step by step. JS essentially does the heavy lifting by telling websites and applications to “do something.” That can be anything from animated graphics, photo slideshows, interactive forms, and autocomplete text suggestions.</p>

<p>Think about certain web features you use daily - Facebook’s timeline automatically updates, how Google suggests search terms, a click to show a dropdown menu, and dynamically changing element colours on a page are all the effects of JavaScript. Without JS, the web would have to rely on HTML and CSS alone. That would mean <a href="https://www.freecodecamp.org/news/what-is-javascript-definition-of-js/" target="_blank">90% of web pages would be static</a>, and you’d only have dynamic animations that CSS allows. In today’s world, where attention spans are at an all-time low, and video content is king, it would be hard to capture your audience without JavaScript.</p>

<p><strong>Not sure how to code HTML or CSS? Learn the basics with our <a href="https://free-courses.lighthouselabs.ca/courses/javascript" target="_blank">free HTML and CSS Essentials course</a> before diving into JS!</strong></p>

<p><br></p>

<h2><a name="howitworks"></a>How Does JavaScript Work?</h2>

<p>Javascript is embedded into a web page or has its own .js file. To add it to your website, it’s most commonly added directly to the page’s code using the <code>&lt;script&gt;</code> tags. It looks pretty similar to any CSS code you would add.</p>

<pre><code class="js">&lt;script type="text/javascript"&gt;
JavaScript code goes here
&lt;/script&gt;
</code></pre>

<p>Suppose you want to use code that can be included across multiple pages simultaneously. In that case, you can also use a separate header file with the extension .js. The <a href="https://skillcrush.com/blog/javascript/" target="_blank">script</a> is “downloaded and processed in each individual’s web browser, turning it into dynamic objects and effects they see on their screen.”</p>

<h2><a name="howtorunjsfile"></a>How do I run a JavaScript File??</h2>

<p>Once you’ve put in all the hard work to write your JavaScript code, you want to make sure it runs properly. There are several ways to test the file to ensure there are no bugs and your code will work smoothly and efficiently when it's live. Here are three ways you can run a JavaScript file in different browsers:</p>

<h3>Microsoft Edge</h3>

<p>To run JavaScript in Microsoft Edge, you will use the Console tool, which is inside the browser DevTools and is a REPL (Read, Evaluate, Print, and Loop) environment. The Console reads the JS you type into it, evaluates it, and prints out the result of the expression before looping back to the first step. AKA, you can write JavaScript in the Console and run it immediately</p>

<p>To try this, follow these steps:
1. Press Control+Shift+J (Windows) or Command+Option+J (Mac) to open the Console
2. Type 2+2, which will allow the Console to display the result 4 on the next line while you type. This feature, called Eager Evaluation, helps you write valid JS regardless of whether you typed it correct or not.
3. After you’ve written the code, press Enter so it can give you the result and allow you to write the next command.</p>

<h3>Google Chrome</h3>

<p>First things first, you’re going to want to make sure that JS is enabled in your chrome settings. To do so, <a href="https://www.whatismybrowser.com/guides/how-to-enable-javascript/chrome?utm_source=whatismybrowsercom&amp;utm_medium=internal&amp;utm_campaign=enable-javascript-index" target="_blank">follow these simple steps:</a>
1. Click the 3 dots on the top right corner of your browser window.
2. Select Settings
3. Search for JavaScript in the search field
4. Click site settings once it’s revealed. 
5. Scroll down until you see JavaScript
6. Make sure the toggle for JavaScript is ON.</p>

<p>Now that JS is enabled, to run the command <a href="https://www.whatismybrowser.com/guides/how-to-enable-javascript/chrome?utm_source=whatismybrowsercom&amp;utm_medium=internal&amp;utm_campaign=enable-javascript-index" target="_blank">follow these steps</a>:
1. Open the web page or site that you want to run the JavaScript command
2. From the Chrome menu (the three dots on the top right of the browser window) &gt; More Tools &gt; Developer Tools (or Press Control+Shift+J (Windows) or Command+Option+J (Mac) to open the Console)
3. Once the JavaScript Console opens, clear the console log by clicking Ctrl+L)
4. Type the script you want to run and press enter. A pop up dialog box will appear. Click “OK” to dismiss it.</p>

<p>Another option is to create an HTML file and write the JS code between the <code>&lt;script&gt;</code> tag. Save and open the file with Chrome.</p>

<h3>Apple Safari</h3>

<p>To access the console on Safari:</p>

<p>Safari Menu &gt; Preferences &gt; Advanced &gt; Checkbox “Show Develop Menu” &gt; Develop Menu &gt; Show Error Console</p>

<p>Right click on the safari browser window  and hit “inspect” to bring up the console.</p>

<p>Although the console is helpful for reading a variety of code, don’t forget you can’t run code this way.</p>

<p>Note: If you’re experiencing errors with your code, try running it in a new browser to see if it is browser specific.</p>

<p><strong>Still confused? <a href="https://free-courses.lighthouselabs.ca/courses/javascript" target="_blank">Enrol in Lighthouse Lab’s free JavaScript Crash Course</a> to get a jumpstart on your JS knowledge.</strong></p>

<p><br></p>

<h2><a name="howtorunjsfilehtml"></a>How To Run JavaScript In HTML?</h2>

<p>While HTML defines the structure of your web document and the content included in it, JavaScript has a wide range of functions, including supporting math calculations, fetching content from other websites, creating dynamic style declarations and more.</p>

<p>JavaScript can be used in HTML in multiple ways, so let’s break it down:</p>

<ol>
<li><p><strong>Inline JavaScript</strong>:
The JS code is placed within certain HTML code. For example, an event can be triggered by the HTML event attributes tags. This can be used in a button with the value onclick to trigger an alert that displays a message.</p>

<pre><code class="js">&lt;button onclick="alert('You just clicked a button')"&gt;Click me!&lt;/button&gt;
</code></pre></li>
<li><p><strong>Internal JavaScript</strong>:
While CSS uses the <code>&lt;style&gt;</code> tag, JS uses <code>&lt;script&gt;</code> that is placed at the top of the HTML document, like this:</p>

<pre><code class="js">&lt;script&gt;
    function(){
        alert("I am inside a script tag")
}
&lt;/script&gt;
</code></pre></li>
<li><p><strong>External JavaScript</strong>:
If your JS is in a different file, you have to reference the page in your HTML code so it knows where to fetch the code from, just like referencing your CSS document. Your code would look similar to this:</p>

<pre><code class="js">&lt;!-- index.html --&gt;
&lt;script src="./script.js"&gt;&lt;/script&gt;

// script.js
alert("I am inside an external file");
</code></pre></li>
</ol>

<p><br></p>

<h2><a name="techniquestoavoid"></a>Techniques to Avoid with JavaScript</h2>

<p>Just like any other language, JavaScript has its own list of best practices that help make it easier to read and run the code. Here are some common errors to avoid to help make your JS coding life a little bit easier:</p>

<h3>Avoid Declaring Global Variables</h3>

<p>Since global variables are available everywhere they’re easy to overwrite. To avoid this, define local variables as much as possible. You can define them with var, let, or const keywords.</p>

<p>Var variables are the least preferred keyword to use, instead use let, as they’re available only after they’re defined. The code for it would be:</p>

<pre><code class="js">const log = () =&gt; {
 console.log(x);
}
log();
let x = 1;
log();

</code></pre>

<p>But that would give you this error:</p>

<pre><code class="js">Uncaught ReferenceError: Cannot access ‘x’ before initialization

</code></pre>

<p>If you were to use the “const keyword, [you] define constants that can only be assigned once and never again. It’s also available only after it’s declared unlike var”. For example, you’d write:</p>

<pre><code class="js">const log = () =&gt; {
console.log(x);
}
const x = 1;
log();

</code></pre>

<p>Don’t forget that if you call “log before const x = 1, [you] will also get [an] Uncaught ReferenceError: Cannot
access ‘x’ before initialization.”</p>

<p>According to <a href="https://betterprogramming.pub/javascript-best-practice-things-to-avoid-be8e8fa30cca" target="_blank">Better Programming</a>, you can also use closures to keep variables inside a function so they can’t be accessed outside. Variables can be scoped to the function when you declare a variable in it and you can only access it in the function. Here is an example:</p>

<pre><code class="js">const divide = () =&gt; {
 const x = 3;
 return () =&gt; x * 2;
}
</code></pre>

<p>This allows you to “keep x inside the divide function so that it can’t be accessed outside and return a function that does something with it.” The code for that would look like this:</p>

<pre><code class="js">console.log(divide()());
</code></pre>

<h3>Remember To Return Your Function.</h3>

<p>This is a standard error that many newbies and even advanced coders make. You’ve written out your function and keep getting a response of “undefined.” Javascript will return a value of undefined by default. So if you forget to use the return keyword, you’ll spend a few minutes wondering what is wrong with your code. </p>

<p>If you write the function below, you will get the undefined response:</p>

<pre><code class="js">const getSumValue = (a, b) =&gt; {
  a + b;
};

</code></pre>

<p>It should look like this :</p>

<pre><code class="js">const getSumValue = (a, b) =&gt; {
  return a + b;
};

</code></pre>

<p><br></p>

<h2><a name="bestpractices"></a>JavaScript Best Practices</h2>

<p>As you begin your journey to mastering Javascript, here are some common best ppractices to remember: </p>

<ul>
<li><strong>Keep Strict Mode On</strong>:</li>
</ul>

<p>This function limits you from writing unsafe code and luckily it’s super easy to activate. Simply add the code below as your first line in your JavaScript code:</p>

<pre><code>```js
use strict
```
</code></pre>

<p>When it’s on, it helps prevent the following:</p>

<ul>
<li>Fixes mistakes that are hard for JavaScript engines to perform</li>
<li>Alerts you of an error when “unsafe” actions are taken</li>
<li><p>Prohibits the use of certain words</p>

<p>Seems like a great cautionary practice to us!</p></li>
<li><p><strong>Lint Your Code</strong></p></li>
</ul>

<p>Linting helps analyze your code and warns you when something looks suspicious, which helps avoid potential errors. Try using JSLint, JSHint, or ESLint.</p>

<ul>
<li><strong>Avoid using the eval() function</strong>:</li>
</ul>

<p>The eval() function is most commonly used by developers to run text as a piece of code. It’s not only bad practice, but it increases your risk of attacks. Make sure to replace this with more secure functions instead.</p>

<p><br></p>

<h2><a name="nextlevel"></a>Take Your Coding Knowledge to the Next Level with Lighthouse Labs</h2>

<p>With the right support, JavaScript can be an exciting language to learn and open up many doors in your tech-related career. At Lighthouse Labs we offer many courses to help you go from beginner to pro in no time. Our recommendations?</p>

<ol>
<li><p>JavaScript Crash Course
<a href="https://free-courses.lighthouselabs.ca/courses/javascript" target="_blank">This free course</a> teaches you how to build your own web-based chat app similar to Twitch or Slack using JavaScript, Node.js and Web Sockets. Whether you’re looking to switch careers or learn a new hobby, you’ll be set up for success by learning the fundamentals of building web-based apps using some of the most widely used programming technologies.</p></li>
<li><p>Front End Developer Course with JavaScript
Once you’ve tackled the JavaScript Crash course it’s time to take your knowledge up a notch with the <a href="https://www.lighthouselabs.ca/en/intro-front-end-developer-course-javascript" target="_blank">Front End Developer Course with JavaScript.</a> In just 6 weeks you’ll learn how to style websites using HTML, CSS, and JavaScript. You’ll also understand the core principles of responsive design, leverage JS to make a website interactive and dynamic, and learn how to build a website from scratch. This course is perfect for new coders, taking your passion projects to the next level, progressing your career, or testing the waters to see if a career as a developer is right for you.</p></li>
<li><p>Web Development Bootcamp
Interested in becoming a professional web developer? Our <a href="https://www.lighthouselabs.ca/en/web-development-bootcamp" target="_blank">Web Development Bootcamp</a> is the course for you! You’ll understand coding logic using popular languages and frameworks, such as JavaScript and Ruby on Rails and learn how to think like a programmer once you build a software from the ground up. With mentorship, our data-driven curriculum and supportive learning environment, you’ll be ready to take on your new role as a Junior Web Developer.</p></li>
</ol>

<p><strong>It's time to begin your journey to a career as a Web Developer. Download the Web Development curriculum <a href="https://www.lighthouselabs.ca/en/lighthouse-labs-curriculum" target="_blank">here</a>, or click the button below to visit our program page and see which of our Programs is right for you!</strong></p>

<p><a href="https://www.lighthouselabs.ca/en/web-development">
        <button type="button" class="btn btn-text btn-primary">
          Begin Your Web Development Journey Here
        </button>
</a></p>
<p></p>
    </div>
  </div>
</article>
<div class="blog-redirects">


  

<div class="redirect">
  <ul>
    <li class="hvr-fade redirect-block">
      <a href="https://www.lighthouselabs.ca/blog/an-interview-with-lighthouse-labs-own-olivia-kim">
      <div class="read-more">← Previous Article</div>
        <div class="redirect-title">
          <h2>An interview with Lighthouse Labs’ own, Olivia Kim</h2>
        </div>
</a>    </li>
    <li class="hvr-fade redirect-block">
      <a href="https://www.lighthouselabs.ca/blog/alumni-feature-fatima-altaf-and-her-journey-to-tech">
      <div class="read-more">Next Article →</div>
        <div class="redirect-title">
          <h2>Alumni Feature: Fatima Altaf And Her Journey To Tech</h2>
        </div>
</a>    </li>
  </ul>
</div>

</div>



    <footer class="footer">
  <div class="pre-footer" style="">
    <div class="container">
      <div class="footer-content">
          <h4>Subscribe to our newsletter to keep up with the latest news and community events.</h4>
          <br>
          
<form class="subscribe-form" action="https://www.lighthouselabs.ca/en/submit-subscriptions" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓" autocomplete="off">
  <div class="subscribe-form-fields">
    <div class="jenimzlfxbwc_1712167506"><style media="screen">.jenimzlfxbwc_1712167506 {position:absolute!important;top:-9999px;left:-9999px;}</style><label for="jenimzlfxbwc">If you are a human, ignore this field</label><input type="text" name="jenimzlfxbwc" id="jenimzlfxbwc" autocomplete="off" tabindex="-1"><input type="hidden" name="spinner" value="f6b3a5c1ac2b1d8d3a66dbb26b41161f" autocomplete="off"></div>
    <input required="required" placeholder="E-mail Address" class="prompt" autocomplete="off" type="email" name="subscription[email]" id="subscription_email">
    <div class="policy-checkbox">
      <input name="subscription[accept_privacy_policy]" type="hidden" value="0" autocomplete="off"><input required="required" type="checkbox" value="1" name="subscription[accept_privacy_policy]" id="subscription_accept_privacy_policy">
      <label for="subscription_accept_privacy_policy">I agree to the <a href="https://www.lighthouselabs.ca/en/privacy-policy" target="_blank">Privacy Policy</a></label>
   </div>
  </div>
  <button type="submit" name="commit" data-disable-with="Please Wait" class="btn btn-text ghost-btn ghost-secondary">Subscribe</button>
</form>
      </div>
    </div>
  </div>
  <div class="bottom-footer">
      <div class="container footer-list">
        <div class="footer-column">
          <p class="footer-title">CODING PROGRAMS</p>
          <ul>
            <li><a href="https://www.lighthouselabs.ca/en/web-development">Web Development - Bootcamp</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/web-development">Web Development Flex Program</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/intro-to-web">Intro to Web Development</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/intro-front-end-developer-course-javascript">Intro to Front-End with Javascript</a></li>
          </ul>
          <p class="footer-title">DATA PROGRAMS</p>
          <ul>
            <li><a href="https://www.lighthouselabs.ca/en/data-science">Data Science - Bootcamp</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/intro-to-data-analytics-course">Intro to Data Analytics</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/data-analytics-for-hr-101">Data Analytics for HR - 101</a></li>
          </ul>
          <p class="footer-title">OTHER PROGRAMS</p>
          <ul>
            <li><a href="https://www.lighthouselabs.ca/en/cyber-security">Cyber Security - Bootcamp</a></li>
            <li><a target="blank" href="https://free-courses.lighthouselabs.ca/">Free Online Courses</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <p class="footer-title">EDUCATION</p>
          <ul>
            <li><a href="https://www.lighthouselabs.ca/en/admissions">Admissions</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/career-services">Career Services</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/testimonials">Testimonials</a></li>
          </ul>
          <p class="footer-title">REPORTS</p>
          <ul>
            <li><a href="https://www.lighthouselabs.ca/en/student-outcomes">Student Outcomes</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/career-trajectory">Career Trajectory</a></li>
          </ul>
          <p class="footer-title">RESOURCES</p>
          <ul>
            <li> <a href="https://www.lighthouselabs.ca/en/tech-skills-quiz">Tech Skills Quiz</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/events">Community Events</a></li>
            <li><a href="https://www.lighthouselabs.ca/blog">LHL Blog</a></li>
          </ul>
          <p class="footer-title">FINANCING</p>
          <ul>
            <li><a href="https://www.lighthouselabs.ca/en/financial-guide">Financial Guide</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <p class="footer-title">ENTERPRISE</p>
          <ul>
            <li><a href="https://enterprise.lighthouselabs.ca/?utm_source=lhlwebsite&amp;utm_medium=menu&amp;utm_campaign=footer">Corporate Training</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/employers">Hire Our Graduates</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/academic">Academic Partnerships</a></li>
          </ul>
          <p class="footer-title">LOCATIONS</p>
          <ul>
            <li><a target="_blank" href="https://www.lighthouselabs.ca/en/blog/learn-online-with-lighthouse-labs">Online Live</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/toronto">Toronto</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/vancouver">Vancouver</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/calgary">Calgary</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/victoria">Victoria</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/ottawa">Ottawa</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/montreal">Montreal</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <p class="footer-title">ABOUT US</p>
          <ul>
            <li><a href="https://www.lighthouselabs.ca/en/about">Our Story</a></li>
            <li> <a href="https://www.lighthouselabs.ca/en/impact-initiatives">Impact Initiatives</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/careers">Careers at LHL</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/team">Team</a></li>
            <li> <a href="https://www.lighthouselabs.ca/en/press">Press</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/faq">FAQ</a></li>
            <li> <a href="https://www.lighthouselabs.ca/en/contact">Contact</a></li>
            <li> <a href="https://www.lighthouselabs.ca/en/privacy-policy">Privacy Policy</a></li>
            <li> <a href="https://www.lighthouselabs.ca/en/faq#covid19">COVID-19</a></li>
            <li> <a href="https://www.lighthouselabs.ca/en/ICT-boost">ICT Boost</a></li>
            <li><a target="_blank" href="https://data.ontario.ca/dataset/private-career-colleges-pcc-key-performance-indicators">PCC KPI Results</a></li>
          </ul>
          <p class="footer-title">POLICIES</p>
          <ul>
            <li><a href="https://www.lighthouselabs.ca/en/code-of-conduct">Code of Conduct</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/accessibility-policy">Accessibility Policy</a></li>
            <li><a href="https://www.lighthouselabs.ca/en/privacy-policy">Privacy Policy</a></li>
            <li><a target="_blank" href="https://www.lighthouselabs.ca/sexual%20violence%20policy%202023%20-%20Lighthouse%20Labs.pdf">Sexual Violence Policy</a></li>
          </ul>
        </div>
        <div class="footer-column">
            <img id="larry" alt="Rubber Duck Debugging" src="./valid_files/rubberduckdebugging-aeee9fd4a7fb079c0341fe21c32ef66c0980f9a9d0e4a3830446673e6068ad8d.gif">
            <div id="disappearing-larry" data-url="/assets/larry-disappear-bffa2ff7b6b8f4d18c8488ced1a7e5aa6206dedb62843837967ed0561d25b8cd.gif"></div>
          <p class="made-with">
            Made with ♥<br>
            Maintained by:  <a href="https://samsmyth.ca/" class="link-blue\" target="_blank" title="Sam Smyth">Sam</a> &amp; <a href="https://github.com/heyjiani" class="link-blue\" target="_blank" title="Jiani Cao">Jiani</a><br>
            Built by:  <a href="http://maggiecaspar.com/" class="link-blue" target="_blank" title="Maggie Caspar">Maggie Caspar</a><br>
            Designed by: Andrew Tsang<br>
          </p>
        </div>
      </div>
    <div class="container">
      <hr>
      <p class="footer-copyright">
        
      </p>
      <p class="footer-copyright">
        Upon request, Lighthouse Labs will make written information and other forms of communication accessible.
      <br>
        Lighthouse Labs is regulated by the <a href="http://www.privatetraininginstitutions.gov.bc.ca/">Canadian Private Training Institutions Branch of the Ministry of Advanced Education and Skills Training</a>, and holds a Designation certificate.
      <br>
        Lighthouse Labs is a private career college registered under the Private Career Colleges Act, 2005.
      </p>
      <div class="footer-socialmedia">
        
<a href="https://www.facebook.com/lighthouselabsvancouver" target="_blank">
  <svg x="0px" y="0px" viewBox="0 0 30.2 30.2" enable-background="new 0 0 30.2 30.2" xml:space="preserve">
    <path fill="#FFFFFF" d="M15.1,30.2c-2.1,0-4.1-0.4-5.9-1.2c-1.8-0.8-3.4-1.9-4.8-3.2c-1.4-1.4-2.4-3-3.2-4.8C0.4,19.2,0,17.2,0,15.1
    c0-2.1,0.4-4.1,1.2-5.9C2,7.4,3.1,5.8,4.4,4.4c1.4-1.4,3-2.5,4.8-3.2C11.1,0.4,13,0,15.1,0c2.1,0,4.1,0.4,5.9,1.2
    c1.8,0.8,3.4,1.9,4.8,3.2c1.4,1.4,2.4,3,3.2,4.8c0.8,1.8,1.2,3.8,1.2,5.9c0,2.1-0.4,4.1-1.2,5.9c-0.8,1.8-1.9,3.4-3.2,4.8
    c-1.4,1.4-3,2.4-4.8,3.2C19.2,29.8,17.2,30.2,15.1,30.2z M11.2,15.6h2.2v6.8h2.8v-6.8H19v-2.8h-2.8v-1.4c0-0.2,0.1-0.4,0.2-0.6
    c0.1-0.2,0.2-0.3,0.4-0.3H19V7.8h-2.2c-0.9,0-1.7,0.4-2.4,1.1c-0.7,0.7-1,1.6-1,2.6v1.4h-2.2V15.6z"></path>
  </svg>
</a>
<a href="https://twitter.com/lighthouse_labs" target="_blank">
  <svg x="0px" y="0px" viewBox="0 0 30.2 30.2" enable-background="new 0 0 30.2 30.2" xml:space="preserve">
    <path fill="#FFFFFF" d="M15.1,0c2.1,0,4.1,0.4,5.9,1.2C22.9,2,24.5,3,25.8,4.4c1.4,1.4,2.4,3,3.2,4.8c0.8,1.8,1.2,3.8,1.2,5.9
    c0,2.1-0.4,4.1-1.2,5.9c-0.8,1.8-1.9,3.4-3.2,4.8c-1.4,1.4-3,2.4-4.8,3.2c-1.8,0.8-3.8,1.2-5.9,1.2c-2.1,0-4.1-0.4-5.9-1.2
    c-1.8-0.8-3.4-1.9-4.8-3.2c-1.4-1.4-2.5-3-3.2-4.8C0.4,19.1,0,17.2,0,15.1C0,13,0.4,11,1.2,9.2C2,7.4,3.1,5.8,4.4,4.4
    C5.8,3,7.4,2,9.2,1.2C11.1,0.4,13.1,0,15.1,0z M23.3,10.8C23,10.9,22.7,11,22.5,11c-0.3,0.1-0.6,0.1-0.9,0.2
    c0.3-0.2,0.6-0.4,0.8-0.7c0.2-0.3,0.4-0.6,0.6-0.9c-0.3,0.1-0.6,0.3-1,0.4c-0.3,0.1-0.7,0.2-1.1,0.3C20.7,10,20.3,9.7,20,9.5
    c-0.4-0.2-0.8-0.3-1.2-0.3c-0.8,0-1.5,0.3-2.2,0.9c-0.6,0.6-0.9,1.3-0.9,2.2c0,0.2,0,0.4,0.1,0.7c-1.3-0.1-2.5-0.4-3.6-0.9
    c-1.1-0.6-2-1.3-2.8-2.3c-0.3,0.5-0.4,1-0.4,1.5c0,1.1,0.4,2,1.3,2.5c-0.5,0-1-0.1-1.4-0.3v0c0,0.7,0.2,1.4,0.7,2
    c0.5,0.6,1,0.9,1.7,1.1c-0.1,0-0.2,0.1-0.4,0.1c-0.1,0-0.3,0-0.5,0c-0.1,0-0.3,0-0.5-0.1c0.2,0.6,0.5,1.1,1,1.5
    c0.5,0.4,1.1,0.6,1.8,0.6c-1.1,0.9-2.4,1.3-3.8,1.3H8.4c0.7,0.4,1.4,0.8,2.2,1c0.8,0.2,1.6,0.4,2.5,0.4c1.4,0,2.7-0.3,3.7-0.8
    c1.1-0.5,2-1.2,2.7-2c0.7-0.8,1.3-1.8,1.7-2.8c0.4-1,0.6-2.1,0.6-3.1v-0.4c0.3-0.2,0.6-0.5,0.9-0.8C22.9,11.3,23.1,11,23.3,10.8z"></path>
  </svg>
</a>
<a href="https://www.instagram.com/lighthouselabs" target="_blank">
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14868 17.8513 0 11.5 0C5.14871 0 0 5.14868 0 11.5C0 17.8513 5.14871 23 11.5 23ZM14.1271 6.20996C13.4413 6.17871 13.2355 6.17212 11.5 6.17212C9.7645 6.17212 9.55865 6.17749 8.87399 6.20898C7.11032 6.28906 6.28918 7.12451 6.20901 8.87402C6.17868 9.55859 6.17108 9.7644 6.17108 11.5C6.17108 13.2356 6.17868 13.4414 6.20901 14.126C6.29025 15.8711 7.10818 16.7097 8.87399 16.791C9.55865 16.8225 9.7645 16.8289 11.5 16.8289C13.2366 16.8289 13.4413 16.8213 14.1271 16.791C15.8907 16.7107 16.7108 15.8733 16.7921 14.126C16.8224 13.4414 16.8289 13.2356 16.8289 11.5C16.8289 10.4209 16.8264 9.93359 16.8172 9.55444C16.8116 9.32397 16.8036 9.1333 16.7921 8.87402C16.7108 7.12549 15.8897 6.29028 14.1271 6.20996ZM8.81982 5.04004C9.51425 5.00757 9.73416 5 11.5 5C13.2658 5 13.4868 5.00757 14.1812 5.04004C16.5429 5.14722 17.8548 6.46143 17.961 8.81982C17.9924 9.51416 18 9.73535 18 11.5C18 13.2659 17.9924 13.4868 17.961 14.1802C17.8548 16.543 16.5386 17.8528 14.1812 17.9609C13.4868 17.9924 13.2658 18 11.5 18C9.73416 18 9.51425 17.9924 8.81982 17.9609C6.45816 17.8528 5.14734 16.5408 5.039 14.1802C5.00757 13.4868 5 13.2659 5 11.5C5 9.73535 5.00757 9.51416 5.039 8.81982C5.14734 6.45825 6.45816 5.14844 8.81982 5.04004ZM8.16226 11.5C8.16226 9.65625 9.65726 8.16235 11.5 8.16235C13.3427 8.16235 14.8377 9.65723 14.8377 11.5C14.8377 13.3438 13.3427 14.8376 11.5 14.8376C9.65726 14.8376 8.16226 13.3438 8.16226 11.5ZM9.33334 11.5C9.33334 12.697 10.3029 13.6667 11.5 13.6667C12.696 13.6667 13.6678 12.697 13.6678 11.5C13.6678 10.303 12.696 9.33325 11.5 9.33325C10.3029 9.33325 9.33334 10.304 9.33334 11.5ZM14.1888 8.03125C14.1888 7.6001 14.5388 7.25122 14.9688 7.25122C15.4011 7.25122 15.7499 7.6001 15.7499 8.03125C15.7499 8.4624 15.4 8.81128 14.9688 8.81128C14.5377 8.81128 14.1888 8.46118 14.1888 8.03125Z" fill="#17A3DD"></path>
  </svg>
</a>
<a href="https://www.linkedin.com/company/lighthouse-labs" target="_blank">
  <svg x="0px" y="0px" viewBox="0 0 30.2 30.2" enable-background="new 0 0 30.2 30.2" xml:space="preserve">
    <path fill="#FFFFFF" d="M15.1,30.2c-2.1,0-4.1-0.4-5.9-1.2c-1.8-0.8-3.4-1.9-4.8-3.2c-1.4-1.4-2.4-3-3.2-4.8C0.4,19.1,0,17.1,0,15
    C0,13,0.4,11,1.2,9.2C2,7.3,3.1,5.7,4.4,4.4c1.4-1.4,3-2.4,4.8-3.2C11.1,0.4,13,0,15.1,0c2.1,0,4.1,0.4,5.9,1.2
    c1.8,0.8,3.4,1.9,4.8,3.2c1.4,1.4,2.5,3,3.2,4.8c0.8,1.8,1.2,3.8,1.2,5.9c0,2.1-0.4,4.1-1.2,5.9c-0.8,1.8-1.9,3.4-3.2,4.8
    c-1.4,1.4-3,2.5-4.8,3.2C19.2,29.8,17.2,30.2,15.1,30.2z M10.9,6.5C10.4,6.5,10,6.7,9.7,7C9.4,7.3,9.2,7.7,9.2,8.2
    c0,0.5,0.2,0.8,0.5,1.2c0.3,0.3,0.7,0.5,1.2,0.5c0.5,0,0.8-0.2,1.2-0.5c0.3-0.3,0.5-0.7,0.5-1.2c0-0.5-0.2-0.9-0.5-1.2
    C11.7,6.7,11.3,6.5,10.9,6.5z M12.2,10.8H9.5V20h2.7V10.8z M13.5,20h2.7v-5.9c0.2-0.2,0.4-0.4,0.7-0.5c0.2-0.1,0.4-0.1,0.7-0.2
    c0.3,0,0.5,0,0.8,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.2,0.2,0.3,0.2,0.5V20h2.6v-5.6c0-0.6-0.2-1.2-0.5-1.8c-0.3-0.6-0.8-1-1.3-1.3
    c-0.5-0.3-1.1-0.4-1.7-0.4c-0.6,0-1.2,0.1-1.7,0.3v-0.4h-2.7V20z"></path>
  </svg>
</a>

      </div>
     </div>
  <script id="stack-adapt-pixel">
    !function(s, a, e, v, n, t, z) {
        if (s.saq) return;
        n = s.saq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!s._saq) s._saq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '1.0';
        n.queue = [];
        t = a.createElement(e);
        t.async = !0;
        t.src = v;
        z = a.getElementsByTagName(e)[0];
        z.parentNode.insertBefore(t, z)
    }(window, document, 'script', 'https://tags.srv.stackadapt.com/events.js');
    saq('ts', 'LU9mevl1eGjY2KIshB4yUA');
</script>
</div></footer>


    <script src="./valid_files/application-9ca676693d1a6282e9b8f9c78c6634be1ce1f433c5286bef5539823a523b2f48.js.download" data-turbolinks-track="true"></script>
      <!-- Google Code for Remarketing Tag -->
  <script type="text/javascript">
  /* <![CDATA[ */
  var google_conversion_id = 926723592;
  var google_custom_params = window.google_tag_params;
  var google_remarketing_only = true;
  /* ]]> */
  </script>
  <script type="text/javascript" src="./valid_files/f(1).txt">
  </script><script type="text/javascript" id="mcjs">!function(c,d,e,a,b){a=c.createElement(d);b=c.getElementsByTagName(d)[0];a.async=1;a.src=e;b.parentNode.insertBefore(a,b)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/e52f4473cc66c663ef6a0b1f4/59b20df6ef45ad46607d4ca50.js");</script>

<script type="text/javascript" id="hs-script-loader" src="./valid_files/21080117.js.download"></script><script type="text/javascript" id="">(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})("https://utt.impactcdn.com/A3771613-7de9-4d6f-b274-aa71ed7065bc1.js","script","ire",document,window);</script>
<script type="text/javascript" id="">ire("identify",{customerId:"",customerEmail:""});</script>

  <noscript>
  <div style="display:inline;">
  <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/926723592/?value=0&amp;guid=ON&amp;script=0"/>
  </div>
  </noscript>

      <script src="./valid_files/prism-0b8d27e387f912dc55b7d5c336fa4903d0d45d4dae66603a5ea9e826ae857e90.js.download"></script>

    <script type="text/javascript">
    window._mfq = window._mfq || [];
    (function() {
        var mf = document.createElement("script");
        mf.type = "text/javascript"; mf.async = true;
        mf.src = "//cdn.mouseflow.com/projects/7c7c3611-6608-419e-b932-960437283b83.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
    })();
</script>


    <script src="./valid_files/ce7c0e8c4fce4a6eb7bac7bdba43e390.min.js.download" crossorigin="anonymous"></script>
    <script src="./valid_files/sentry-b707cd2a731597a7e1ed62e0b25e8dee5f34ce5764e8d26810ea3b2b20e68d89.js.download"></script>



 


<div id="batBeacon98205258149" style="width: 0px; height: 0px; display: none; visibility: hidden;"><img id="batBeacon979610934270" width="0" height="0" alt="" src="./valid_files/0" style="width: 0px; height: 0px; display: none; visibility: hidden;"></div><iframe height="0" width="0" aria-hidden="true" alt="" style="pointer-events: none; height: 0px; width: 0px; position: absolute; padding: 0px; margin: 0px; border: 0px; visibility: hidden;" src="./valid_files/saved_resource.html"></iframe><iframe id="_hjSafeContext_20645374" title="_hjSafeContext" tabindex="-1" aria-hidden="true" src="./valid_files/saved_resource(1).html" style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe><div id="st-2" class=" st-sticky-share-buttons st-left st-toggleable st-has-labels "><div class="st-btn st-first" data-network="linkedin" style="display: inline-block;">
  <img alt="linkedin sharing button" src="./valid_files/linkedin.svg">
  <span class="st-label">Share</span>
</div><div class="st-btn" data-network="twitter" style="display: inline-block;">
  <img alt="twitter sharing button" src="./valid_files/twitter.svg">
  <span class="st-label">Tweet</span>
</div><div class="st-btn" data-network="facebook" style="display: inline-block;">
  <img alt="facebook sharing button" src="./valid_files/facebook.svg">
  <span class="st-label">Share</span>
</div><div class="st-btn st-last" data-network="sharethis" style="display: inline-block;">
  <img alt="sharethis sharing button" src="./valid_files/sharethis.svg">
  <span class="st-label">Share</span>
</div><div class="st-toggle">
  <div class="st-left">
    <img alt="arrow_left sharing button" src="./valid_files/arrow_left.svg">
  </div>
  <div class="st-right">
    <img alt="arrow_right sharing button" src="./valid_files/arrow_right.svg">
  </div>
</div></div></body></html>