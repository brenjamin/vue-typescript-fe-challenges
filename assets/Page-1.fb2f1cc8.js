import{_ as f,d as _,f as m,g as b,o as d,c,a,t as h,u as l,E as u,G as w,r as x,H as D,h as $,I as B,m as S,J as k,b as g,w as C,K as E,F as I,e as R}from"./index.442b962e.js";import{u as V}from"./savedInput.89341b01.js";const M={class:"dialog__wrapper"},N={class:"dialog",role:"dialog","aria-labelledby":"saveDialogQuestion"},P={id:"saveDialogQuestion"},T={class:"dialog__buttons"},F=_({props:{text:{type:String,default:"Do you want to save your work?"}},setup(o){const s=m(null);return b(()=>{var e;(e=s.value)==null||e.focus(),document.documentElement.style.overflow="hidden"}),(e,t)=>(d(),c("div",M,[a("div",N,[a("p",P,h(o.text),1),a("div",T,[a("button",{ref_key:"saveButton",ref:s,class:"dialog__button dialog__button--save",type:"button",onClick:t[0]||(t[0]=(...n)=>l(u)&&l(u)(...n))}," Save ",512),a("button",{class:"dialog__button dialog__button--discard",type:"button",onClick:t[1]||(t[1]=n=>l(u)(!1))}," Discard ")])])]))}});var Q=f(F,[["__scopeId","data-v-7bc94b6c"]]);async function A(o){return await w(Q,{text:o})}const G=_({name:"RippleButton",inheritAttrs:!1,expose:[]});function H(o,s,e,t,n,p){return d(),c("button",D({type:"button",class:"ripple-button ripple"},o.$attrs),[x(o.$slots,"default")],16)}var J=f(G,[["render",H]]);const K={class:"page-1"},L=a("h3",{class:"page-1__title"}," Page 1 ",-1),U=R(" Save "),q=_({setup(o){var v;const s=V(),e=m((v=s.input)!=null?v:null),t=$(()=>e.value===s.input),n=()=>{s.save(e.value)};async function p(){await A("Do you want to save your work?")&&n()}return B(async(y,i,r)=>{t.value||await p(),document.documentElement.style.overflow="scroll",r()}),(y,i)=>(d(),c(I,null,[a("div",K,[L,S(a("textarea",{"onUpdate:modelValue":i[0]||(i[0]=r=>e.value=r),rows:"4",class:"page-1__textarea",placeholder:"Type something here..."},null,512),[[k,e.value]]),g(J,{class:"page-1__save-button",disabled:l(t),onClick:n},{default:C(()=>[U]),_:1},8,["disabled"])]),g(l(E))],64))}});export{q as default};