import{u as A,l as L}from"./index.66ecdd60.js";import{u as S}from"./ScrollTo.81bea8a7.js";import{g as _,r as f}from"./params.af7ed354.js";import{g as C,w as v,y as P,v as w,o as $,c as b,a as y,C as B}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{S as H}from"./LogoGear.cb664d3b.js";import"./translations.d159963e.js";import{_ as k}from"./_plugin-vue_export-helper.eefbdd86.js";import{s as l,_ as T}from"./default-i18n.20001971.js";const F=(i={})=>{const{scrollTimeout:s=500,highlightTimeout:c=500,scrollAndHighlightTimeout:u=1500}=i,t=C(!1),o=A();v(()=>o.navigate.scroll,()=>{t.value||(t.value=!0,e())}),v(()=>o.navigate.highlight,()=>{t.value||(t.value=!0,e())});const e=()=>{var g,h;const r=_()["aioseo-scroll"]||((g=history.state)==null?void 0:g.scroll)||o.navigate.scroll;r&&typeof r=="string"&&setTimeout(()=>{var a;S().scrollTo(r,{mods:{scrollMarginClass:"aioseo-scroll-and-highlight-margin",timeout:s}}),f("aioseo-scroll"),(a=history.state)==null||delete a.scroll,o.navigate.scroll=null,t.value=!1},s);const n=_()["aioseo-highlight"]||((h=history.state)==null?void 0:h.highlight)||o.navigate.highlight;n&&typeof n=="string"&&setTimeout(()=>{var d;const m=document.querySelectorAll(`#${n.replace(/,/g,", #").replace(/%2C/ig,", #")}`);m.length&&m.forEach(p=>{p.classList.add("aioseo-row-highlight"),setTimeout(()=>{p.classList.remove("aioseo-row-highlight")},1500)}),f("aioseo-highlight"),(d=history.state)==null||delete d.highlight,o.navigate.highlight=null,t.value=!1},r?u:c)};P(e)},x="all-in-one-seo-pack",M={setup(){return{rootStore:A()}},components:{SvgAioseoLogoGear:H},data(){return{strings:{boldText:l("<strong>%1$s %2$s</strong>","AIOSEO",this.rootStore.isPro?"Pro":""),linkText:T("Click here to learn more",x)}}},computed:{link(){return l('<strong><a href="%1$s" target="_blank" class="text-white">%2$s</a></strong>',L.getDocUrl("restApi"),this.strings.linkText)},upgradeText(){return l(T("%1$s relies on the WordPress Rest API and your site might have it disabled. %2$s.",x),this.strings.boldText,this.link)}},mounted(){document.body.classList.add("aioseo-has-bar")},beforeUnmount(){document.body.classList.remove("aioseo-has-bar")}},E={class:"aioseo-api-bar"},R={class:"upgrade-text"},U=["innerHTML"];function I(i,s,c,u,t,o){const e=w("svg-aioseo-logo-gear");return $(),b("div",E,[y("div",R,[B(e),y("div",{innerHTML:o.upgradeText},null,8,U)])])}const J=k(M,[["render",I]]),N={};function O(i,s){return $(),b("div")}const Q=k(N,[["render",O]]);export{Q as C,J as a,F as u};
