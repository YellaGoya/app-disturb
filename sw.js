if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>r(e,o),c={module:{uri:o},exports:t,require:d};i[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(s(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CBIzJ-cm.js",revision:null},{url:"index.html",revision:"621b48781d7077a7c989bdb8c2dc8807"},{url:"registerSW.js",revision:"05a2585921ded2e6dd1a27b395e83b66"},{url:"favicon.ico",revision:"9795ad6f80eab8e287062993170325d2"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"pwa-64x64.png",revision:"150fd6ff8b84f5d9ef6cb7d3761d2536"},{url:"pwa-192x192.png",revision:"d4f2c8ab37a97ec469c355a9bfbbfe53"},{url:"pwa-512x512.png",revision:"8eecde3f444b76830bf03a744f82e2f8"},{url:"manifest.webmanifest",revision:"2ac851b4e91e7ee03c2f144c8ef26230"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
