import{G as e}from"./constants.a8a14dc3.js";import{u as n,l as s}from"./index.66ecdd60.js";import{C as a}from"./Caret.a21d4ca8.js";import"./translations.d159963e.js";import{_ as c}from"./_plugin-vue_export-helper.eefbdd86.js";import{s as l,_ as i}from"./default-i18n.20001971.js";import{v as u,o as p,k as m,b as _}from"./runtime-dom.esm-bundler.5c3c7d72.js";const f="all-in-one-seo-pack",d={setup(){return{rootStore:n()}},components:{CoreAlert:a},data(){return{strings:{unfilteredHtmlError:l(i("Your user account role does not have access to edit this field. %1$s",f),s.getDocLink(e.learnMore,"unfilteredHtml",!0))}}}};function y(g,k,H,r,o,L){const t=u("core-alert");return r.rootStore.aioseo.user.unfilteredHtml?_("",!0):(p(),m(t,{key:0,class:"no-access",type:"red",innerHTML:o.strings.unfilteredHtmlError},null,8,["innerHTML"]))}const G=c(d,[["render",y]]);export{G as C};
