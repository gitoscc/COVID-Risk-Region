if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const c=e=>i(e,r),l={module:{uri:r},exports:t,require:c};s[r]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(o(...e),t)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"covid-risk-region"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/COVID-Risk-Region/css/app.aaf23114.css",revision:null},{url:"/COVID-Risk-Region/css/chunk-vendors.82e2427d.css",revision:null},{url:"/COVID-Risk-Region/index.html",revision:"352a5b9f6004feb0cd69d45e184e3a54"},{url:"/COVID-Risk-Region/js/app.190bb666.js",revision:null},{url:"/COVID-Risk-Region/js/chunk-vendors.15367aa2.js",revision:null},{url:"/COVID-Risk-Region/manifest.json",revision:"6f187dc6982e579bf9c53c8f57bb8bfd"},{url:"/COVID-Risk-Region/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
