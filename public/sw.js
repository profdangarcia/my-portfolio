if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,c,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1bfc9850.c164d657feb61d72d493.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/671f46cf74456bcd1d44d4f2136c2b69bd8ab1c2.f61588b02b6a38674feb.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/754a6dd41a9226653944c82523fc6f3159435142.4754fb9e31deeea1e083.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/commons.b33d69fee4c480cb880f.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/d0447323.1442c994501a7f6199c5.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/main-73898467ad616b91c8b1.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/pages/_app-db85bc7006eb59ee4c36.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/pages/_error-a1ad527d6511febd13bb.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/pages/blog-5a15b9fbd5a68158bcf4.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/pages/blog/%5BpostSlug%5D-27f43114ae81d3e0a9cc.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/pages/index-2495dac17db4a26d69df.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/polyfills-feb8a7604fa7fce626b2.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/jXAPptu_TzbBfXBVGT5Kx/_buildManifest.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/_next/static/jXAPptu_TzbBfXBVGT5Kx/_ssgManifest.js",revision:"jXAPptu_TzbBfXBVGT5Kx"},{url:"/banner-bg.png",revision:"eed15a377b5624801e89ec83180ce087"},{url:"/br.svg",revision:"87032851c3532c9dd64f20f4bee155a9"},{url:"/dev.png",revision:"429bb5e7eeba329148cef1542d4dc838"},{url:"/favicon.ico",revision:"4bfae6e459072e08cb179d0978845390"},{url:"/icons/apple-touch-icon-114x114.png",revision:"ac573644198718405ae7aaf4276b3f2d"},{url:"/icons/apple-touch-icon-120x120.png",revision:"48ede57f57a6b91984a62b56fb6d27ed"},{url:"/icons/apple-touch-icon-144x144.png",revision:"81d5008f364574dfd83c52bc39b48292"},{url:"/icons/apple-touch-icon-152x152.png",revision:"b82b2c55dbf560f0c8d5c42a6856202d"},{url:"/icons/apple-touch-icon-180x180.png",revision:"6252a236da69ecc06bbb81f28d2b75f1"},{url:"/icons/apple-touch-icon-57x57.png",revision:"188743c1c6cb1587c7e1eb0f6e09092a"},{url:"/icons/apple-touch-icon-72x72.png",revision:"f6fe22666ec427107c140ed2115a5e23"},{url:"/icons/apple-touch-icon-76x76.png",revision:"a39e67aba764924ccf68172160bad4ec"},{url:"/icons/apple-touch-icon.png",revision:"188743c1c6cb1587c7e1eb0f6e09092a"},{url:"/icons/favicon.ico",revision:"f948c42024b75849b4338f1030f86a1a"},{url:"/manifest.json",revision:"25cead9b75b9e6c44ae0437e61b6ec07"},{url:"/posts/post1-thumb.png",revision:"457a2c3465a4dc71585a238b776d2e86"},{url:"/posts/post2-thumb.png",revision:"fe2f8fd67dcc1a61d0011d2b13fff3a3"},{url:"/projects/catho-edu.png",revision:"68f338484565a467a84846c3362bafc6"},{url:"/projects/challenge02.png",revision:"7fbf97257b692149ec90ffcfdca2d927"},{url:"/projects/challenge03.png",revision:"c6ba0cab404a78d45b338cfb6948d438"},{url:"/projects/occ.png",revision:"b9ac8bb986f7da7e0acb79a4f8ee670f"},{url:"/sitemap.xml",revision:"709079d9ad4b7b107a48b801f9e7ce8f"},{url:"/us.svg",revision:"ae65659236a7e348402799477237e6fa"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));