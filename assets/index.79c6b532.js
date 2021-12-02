var f=Object.defineProperty;var _=(r,e,t)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e,t)=>(_(r,typeof e!="symbol"?e+"":e,t),t);import{r as h,o as g,c as v,d as l,a as y,b as E,e as L}from"./vendor.0d9ee3c4.js";const b=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};b();var P=(r,e)=>{const t=r.__vccOpts||r;for(const[o,n]of e)t[o]=n;return t};const R={};function C(r,e){const t=h("router-view");return g(),v(t)}var O=P(R,[["render",C]]);class w{constructor(){a(this,"name");a(this,"routes");this.name="Router",this.routes=[]}registerRoutes(e){this.routes=[...this.routes,...e]}getRoutes(){return this.routes}}class A{constructor(){a(this,"name");a(this,"components");this.name="Component",this.components={layout:[],error:[]}}register(e,t="shared"){if(!e.name)throw"Missing prop name in component";return this.components[t].push({name:e.name,component:e.component}),this.components}get(e,t){return this.components[e].find(o=>o.name===t)}getComponents(){return Object.values(this.components).flat()}}class x{constructor(){a(this,"services");this.services=[]}register(e){const t=new e(this),o=t.name;if(this.services.includes(o))throw new Error(`Service ${o} already exist`);this.services.push(o),this[o]=t}}const c=new x;c.register(w);c.register(A);const j="modulepreload",m={},I="/",u=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${I}${o}`,o in m)return;m[o]=!0;const n=o.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":j,n||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),n)return new Promise((p,d)=>{i.addEventListener("load",p),i.addEventListener("error",d)})})).then(()=>e())},k=[u(()=>import("./index.542e31f9.js"),["assets/index.542e31f9.js","assets/vendor.0d9ee3c4.js"]),u(()=>import("./index.8399019f.js"),["assets/index.8399019f.js","assets/vendor.0d9ee3c4.js"]),u(()=>import("./index.d1c93195.js"),["assets/index.d1c93195.js","assets/vendor.0d9ee3c4.js"]),u(()=>import("./index.b84e692e.js"),["assets/index.b84e692e.js","assets/vendor.0d9ee3c4.js"])];async function D(r){const e=k.map(async t=>(await t).default(r));return Promise.all(e)}const T=[{name:"Layout",component:l(()=>u(()=>import("./Layout.9a00b1aa.js"),["assets/Layout.9a00b1aa.js","assets/Layout.c9167128.css","assets/vendor.0d9ee3c4.js","assets/index.0e78106e.js"]))}],V=[{name:"404",component:l(()=>u(()=>import("./404.b0d9e6a7.js"),["assets/404.b0d9e6a7.js","assets/vendor.0d9ee3c4.js"]))}];function S(r){T.forEach(e=>r.Component.register(e,"layout"))}function $(r){V.forEach(e=>r.Component.register(e,"error"))}function N(r){S(r),$(r)}N(c);const q=async()=>{await D(c);const r=c.Router.getRoutes(),e=y({routes:[...r],history:E()}),t=c.Component.getComponents(),o=L(O);o.config.globalProperties.services=c,t.forEach(n=>{o.component(n.name,n.component)}),o.use(e),o.mount("#app")};q();export{u as _,P as a};