import{G as D}from"./constants.a8a14dc3.js";import{k as F,u as R,l as E,b as M,j as V}from"./index.66ecdd60.js";import{u as K}from"./AddonConditions.aded786d.js";import{u as j}from"./PostTypes.dafa8837.js";import{A as q,T as z}from"./TitleDescription.d8d2a4f3.js";import{B as I}from"./RadioToggle.333e7750.js";import{C as H}from"./Card.a31a0c5f.js";import{C as W}from"./Tabs.31818911.js";import{C as J}from"./ProBadge.751e0b85.js";import{C as N}from"./SettingsRow.9f92e269.js";import{_ as x}from"./_plugin-vue_export-helper.eefbdd86.js";import{o as c,c as v,v as r,k as b,l as s,a as p,C as n,b as C,x as w,t as d,F as P,J as O,$ as Q,G as X,q as Y,T as Z}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{C as $,S as ee}from"./Schema.b175d398.js";import{B as te}from"./Checkbox.6db0b9ed.js";import{C as oe}from"./Blur.edde4939.js";import{C as ae}from"./HtmlTagsEditor.736c95a6.js";import{G as se,a as ne}from"./Row.df38a5f6.js";import"./translations.d159963e.js";import{_ as e,s as k}from"./default-i18n.20001971.js";import{R as re}from"./RequiredPlans.f5463cc2.js";import{C as ie}from"./Index.a76253da.js";import"./helpers.53868b98.js";import"./addons.a944c7fa.js";import"./upperFirst.2cd99bdd.js";import"./_stringToArray.f9ddb970.js";import"./toString.f0787db8.js";import"./Caret.a21d4ca8.js";import"./JsonValues.3fcfec97.js";import"./RobotsMeta.12cd00ab.js";import"./Editor.2ca7f2e1.js";import"./isEqual.96d3394c.js";import"./_baseIsEqual.aba7ca44.js";import"./_getTag.1e50d0c4.js";import"./_baseClone.369b15e9.js";import"./_arrayEach.6af5abac.js";import"./index.d0745c42.js";import"./helpers.7350cd15.js";import"./metabox.ee51de75.js";import"./cleanForSlug.97664b33.js";import"./_baseTrim.11b89ad9.js";import"./_baseSet.9f9da1bd.js";import"./regex.8a6101c0.js";import"./GoogleSearchPreview.921a7163.js";import"./Url.24529655.js";import"./Tooltip.73441134.js";import"./Slide.39c07c03.js";import"./vue-router.2f910c93.js";import"./Information.13e8cece.js";import"./Textarea.97983cdc.js";import"./Checkmark.e40641dd.js";import"./UnfilteredHtml.c28a5349.js";import"./license.6e70d73d.js";const le={};function ce(u,i){return c(),v("div")}const pe=x(le,[["render",ce]]),o="all-in-one-seo-pack",me={components:{BaseCheckbox:te,BaseRadioToggle:I,CoreBlur:oe,CoreHtmlTagsEditor:ae,CoreSettingsRow:N,GridColumn:se,GridRow:ne},props:{activeTab:Object},data(){return{GLOBAL_STRINGS:D,stripPunctuationSettings:[{value:"dashes",label:e("Dashes (-)",o)},{value:"underscores",label:e("Underscores (_)",o)},{value:"numbers",label:e("Numbers (0-9)",o)},{value:"plus",label:e("Plus (+)",o)},{value:"apostrophe",label:e("Apostrophe (')",o)},{value:"pound",label:e("Pound (#)",o)},{value:"ampersand",label:e("Ampersand (&)",o)}],strings:{attributeFormat:k(e("%1$s Format",o),e("Title",o)),clickToAddTags:k(e("Click on the tags below to insert variables into your %1$s attribute.",o),e("Title",o).toLowerCase()),stripPunctuation:e("Strip Punctuation",o),punctuationCharactersToKeep:e("Punctuation Characters to Keep:",o),casing:e("Casing",o),casingDescription:e("Choose which casing should be applied to the attribute.",o),wordsToStrip:e("Words to Strip",o),autogenerate:k(e("Autogenerate %1$s on Upload",o),e("Title",o))},tags:{title:{context:"imageSeoTitle",default:["image_title","separator_sa","site_title"]},altTag:{context:"imageSeoAlt",default:["alt_tag","separator_sa","site_title"]},caption:{context:"imageSeoCaption",default:["attachment_caption","separator_sa","site_title"]},description:{context:"imageSeoDescription",default:["attachment_description","separator_sa","site_title"]}},casings:{lowerCase:{label:e("Lower Case",o),description:e("All letters are converted to lower case (small) letters.",o)},titleCase:{label:e("Title Case",o),description:e("Major words are capitalized and minor words remain in their original casing.",o)},sentenceCase:{label:e("Sentence Case",o),description:e("The first word of each sentence starts with a capital.",o)}}}}},ue={class:"aioseo-sa-image-seo"},de={class:"global-robots-settings aioseo-description"},ge={class:"aioseo-description"},_e=p("br",null,null,-1),he={class:"casing-options"};function be(u,i,A,a,t,m){const S=r("base-radio-toggle"),_=r("core-settings-row"),f=r("core-html-tags-editor"),y=r("base-checkbox"),L=r("grid-column"),U=r("grid-row"),B=r("core-blur");return c(),b(B,null,{default:s(()=>[p("div",ue,[["caption","description"].includes("title")?(c(),b(_,{key:0,name:t.strings.autogenerate,align:""},{content:s(()=>[n(S,{name:"autogenerate",options:[{label:t.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["options"])]),_:1},8,["name"])):C("",!0),n(_,{name:t.strings.attributeFormat},{content:s(()=>[n(f,{"line-numbers":!1,single:"","tags-context":t.tags.title.context,"default-tags":t.tags.title.default},{"tags-description":s(()=>[w(d(t.strings.clickToAddTags),1)]),_:1},8,["tags-context","default-tags"])]),_:1},8,["name"]),n(_,{name:t.strings.stripPunctuation,align:""},{content:s(()=>[n(S,{name:"stripPunctuation",options:[{label:t.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["options"]),p("div",de,[p("strong",null,d(t.strings.punctuationCharactersToKeep),1),n(U,{class:"settings"},{default:s(()=>[(c(!0),v(P,null,O(t.stripPunctuationSettings,(T,g)=>(c(),b(L,{key:g,xl:"3",md:"4",sm:"6"},{default:s(()=>[n(y,{size:"medium"},{default:s(()=>[w(d(T.label),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),_:1},8,["name"]),n(_,{name:t.strings.casing,align:""},{content:s(()=>[n(S,{name:"casing",options:[{label:t.GLOBAL_STRINGS.disabled,value:"",activeClass:"dark"},{label:t.casings.lowerCase.label,value:"lower"},{label:t.casings.titleCase.label,value:"title"},{label:t.casings.sentenceCase.label,value:"sentence"}]},null,8,["options"]),p("div",ge,[p("span",null,d(t.strings.casingDescription),1),_e,p("ul",he,[(c(!0),v(P,null,O(t.casings,(T,g)=>(c(),v("li",{key:g},[p("span",null,d(T.label),1),p("span",null,d(T.description),1)]))),128))])])]),_:1},8,["name"])])]),_:1})}const Se=x(me,[["render",be]]),h="all-in-one-seo-pack",fe={setup(){return{licenseStore:F(),rootStore:R(),links:E}},components:{Blur:Se,RequiredPlans:re,Cta:ie},data(){return{strings:{titleAttributeFormat:e("Title Attribute Format",h),ctaDescription:e("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",h),ctaButtonText:e("Unlock Image SEO",h),ctaHeader:k(e("Image SEO is a %1$s Feature",h),"PRO")},features:[e("Autogenerate image attributes",h),e("Clean uploaded image filenames",h),e("Strip punctuation from image attributes",h),e("Convert casing of image attributes",h)]}}},Te={class:"aioseo-sa-image-seo"};function ve(u,i,A,a,t,m){const S=r("blur"),_=r("required-plans"),f=r("cta");return c(),v("div",Te,[n(S),n(f,{"cta-link":a.links.getPricingUrl("image-seo","image-seo-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":a.links.getUpsellUrl("image-seo",null,a.rootStore.isPro?"pricing":"liteUpgrade"),"feature-list":t.features,"hide-bonus":!a.licenseStore.isUnlicensed},{"header-text":s(()=>[w(d(t.strings.ctaHeader),1)]),description:s(()=>[n(_,{addon:"aioseo-image-seo"}),w(" "+d(t.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])])}const G=x(fe,[["render",ve],["__scopeId","data-v-6effa7af"]]),l="all-in-one-seo-pack",Ce={setup(){const{shouldShowActivate:u,shouldShowLite:i,shouldShowMain:A,shouldShowUpdate:a}=K({addonSlug:"aioseo-image-seo"}),{getPostIconClass:t}=j();return{GLOBAL_STRINGS:D,getPostIconClass:t,optionsStore:M(),rootStore:R(),settingsStore:V(),shouldShowActivate:u,shouldShowLite:i,shouldShowMain:A,shouldShowUpdate:a}},components:{Advanced:q,BaseRadioToggle:I,CoreCard:H,CoreMainTabs:W,CoreProBadge:J,CoreSettingsRow:N,Cta:pe,CustomFields:$,ImageSeo:G,Lite:G,Schema:ee,TitleDescription:z},data(){return{imageSeoKey:0,internalDebounce:!1,imageSeoActiveTab:{slug:"title",name:e("Title",l),pro:!0},strings:{redirectAttachmentUrls:e("Redirect Attachment URLs",l),attachment:e("Attachment",l),attachmentParent:e("Attachment Parent",l),attachmentUrlsDescription:e("We recommended redirecting attachment URLs back to the attachment since the default WordPress attachment pages have little SEO value.",l),imageSeo:e("Image SEO",l),advancedSettings:e("Advanced Settings",l)},tabs:{attachments:[{slug:"title-description",name:e("Title & Description",l),access:"aioseo_search_appearance_settings",pro:!1},{slug:"Schema",name:e("Schema Markup",l),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:e("Advanced",l),access:"aioseo_search_appearance_settings",pro:!1}],imageSeo:[{slug:"title",name:e("Title",l),pro:!0},{slug:"altTag",name:e("Alt Tag",l),pro:!0},{slug:"caption",name:e("Caption",l),pro:!0},{slug:"description",name:e("Description",l),pro:!0},{slug:"filename",name:e("Filename",l),pro:!0}]}}},computed:{postType(){return this.rootStore.aioseo.postData.postTypes.filter(u=>u.name==="attachment")[0]}},methods:{processChangeTab(u,i){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:`${u}SA`,value:i}),setTimeout(()=>{this.internalDebounce=!1},50))},setImageSeoActiveTab(u){this.imageSeoActiveTab=this.tabs.imageSeo.find(i=>i.slug===u),this.imageSeoKey++}}},Ae={class:"aioseo-search-appearance-content-types"},ye={class:"aioseo-description"};function ke(u,i,A,a,t,m){const S=r("base-radio-toggle"),_=r("core-settings-row"),f=r("core-main-tabs"),y=r("core-card"),L=r("core-pro-badge"),U=r("image-seo"),B=r("cta"),T=r("lite");return c(),v("div",Ae,[n(y,{slug:`${m.postType.name}SA`},Q({header:s(()=>[p("div",{class:X(["icon dashicons",a.getPostIconClass(m.postType.icon)])},null,2),p("div",null,d(m.postType.label),1)]),"before-tabs":s(()=>[n(_,{name:t.strings.redirectAttachmentUrls,align:""},{content:s(()=>[n(S,{modelValue:a.optionsStore.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls,"onUpdate:modelValue":i[0]||(i[0]=g=>a.optionsStore.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls=g),name:"redirectAttachmentUrls",options:[{label:a.GLOBAL_STRINGS.disabled,value:"disabled",activeClass:"dark"},{label:t.strings.attachment,value:"attachment"},{label:t.strings.attachmentParent,value:"attachment_parent"}]},null,8,["modelValue","options"]),p("div",ye,d(t.strings.attachmentUrlsDescription),1)]),_:1},8,["name"])]),default:s(()=>[a.optionsStore.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?(c(),b(Z,{key:0,name:"route-fade",mode:"out-in"},{default:s(()=>[(c(),b(Y(a.settingsStore.settings.internalTabs[`${m.postType.name}SA`]),{object:m.postType,separator:a.optionsStore.options.searchAppearance.global.separator,options:a.optionsStore.dynamicOptions.searchAppearance.postTypes[m.postType.name],type:"postTypes"},null,8,["object","separator","options"]))]),_:1})):C("",!0)]),_:2},[a.optionsStore.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?{name:"tabs",fn:s(()=>[n(f,{tabs:t.tabs.attachments,showSaveButton:!1,active:a.settingsStore.settings.internalTabs[`${m.postType.name}SA`],internal:"",onChanged:i[1]||(i[1]=g=>m.processChangeTab(m.postType.name,g))},null,8,["tabs","active"])]),key:"0"}:void 0]),1032,["slug"]),n(y,{slug:"imageSeo",noSlide:!a.shouldShowMain},{header:s(()=>[p("span",null,d(t.strings.imageSeo),1),n(L)]),tabs:s(()=>[n(f,{tabs:t.tabs.imageSeo,showSaveButton:!1,active:t.imageSeoActiveTab.slug,internal:"",onChanged:i[2]||(i[2]=g=>m.setImageSeoActiveTab(g))},null,8,["tabs","active"])]),default:s(()=>[a.shouldShowMain?(c(),b(U,{activeTab:t.imageSeoActiveTab,key:t.imageSeoKey},null,8,["activeTab"])):C("",!0),a.shouldShowUpdate||a.shouldShowActivate?(c(),b(B,{key:1})):C("",!0),a.shouldShowLite?(c(),b(T,{key:2})):C("",!0)]),_:1},8,["noSlide"])])}const yt=x(Ce,[["render",ke]]);export{yt as default};
