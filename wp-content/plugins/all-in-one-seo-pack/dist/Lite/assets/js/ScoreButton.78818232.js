import{f as r,o as t,c as n,m as u,F as l,x as i,t as p,b as d,G as f}from"./runtime-dom.esm-bundler.5c3c7d72.js";const m=["id"],b={__name:"ScoreButton",props:{showScore:{type:Boolean,default:!0},score:{type:Number,default:0},postId:{type:Number,default:0}},setup(o){const e=o,s=r(()=>0<e.postId?`score-button-${e.postId}`:null),c=r(()=>e.showScore?79<e.score?"score-green":49<e.score?"score-orange":0<e.score?"score-red":"score-disabled":"score-disabled");return(a,_)=>(t(),n("div",{class:f(["aioseo-score-button",c.value]),id:s.value},[u(a.$slots,"icon"),o.showScore?(t(),n(l,{key:0},[i(p(o.score===0?"N/A":`${o.score}/100`),1)],64)):d("",!0)],10,m))}};export{b as _};
