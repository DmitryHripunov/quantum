import{d as f,u as $,a as v,o as _,c as p,b as I,e,t as d,f as o,_ as y,g as m,h as A,r as V,i as b,j as C,I as L}from"./index-DJYfoavg.js";const P="/quantum/img/iconBalanceHard.png",z="/quantum/img/iconBalanceSoft.png",E={class:"balance"},M=["width","height"],D=["width","height"],R={class:"balance__info"},X=f({__name:"AppBalance",props:{balanceType:{type:String},imgWidth:{type:Number},imgHeight:{type:Number},fontSize:{type:String},fontWeight:{type:Number},color:{type:String}},setup(s){$(i=>({"0796cc30":s.fontSize,"5efccc23":s.color,f8b04232:s.fontWeight}));const a=v();return(i,t)=>(_(),p("div",E,[s.balanceType==="hard"?(_(),p("img",{key:0,width:s.imgWidth,height:s.imgHeight,class:"balance__img",src:P,alt:"balance"},null,8,M)):I("",!0),s.balanceType==="soft"?(_(),p("img",{key:1,width:s.imgWidth,height:s.imgHeight,class:"balance__img",src:z,alt:"balance"},null,8,D)):I("",!0),e("div",R,d(s.balanceType==="hard"?o(a).prettyBalanceHard:o(a).prettyBalanceSoft),1)]))}}),H=y(X,[["__scopeId","data-v-1ea6f6a2"]]),j={class:"header"},G={class:"header__wrapper"},O={class:"header__user"},Y={class:"header__user-name"},F={class:"header__balance"},J=f({__name:"AppHeader",setup(s){const a=v();return(i,t)=>{var c;return _(),p("header",j,[e("div",G,[e("div",O,[t[0]||(t[0]=e("div",{class:"header__user-img"},"DH",-1)),e("div",Y,d((c=o(a).level)==null?void 0:c.current)+" LVL",1)]),e("div",F,[m(H,{balanceType:"hard",imgWidth:24,imgHeight:32,fontSize:"18px",fontWeight:700,color:"var(--color-yellow)"})])])])}}}),K=y(J,[["__scopeId","data-v-20633796"]]),Q="/quantum/img/chests.png",U={class:"progress-bar"},Z={class:"progress-bar__info"},ee={class:"progress-bar__xp"},te={class:"progress-bar__next"},se=f({__name:"ProgressBar",setup(s){$(i=>({"1470d34b":o(a).getProgressPercentage+"%"}));const a=v();return(i,t)=>(_(),p("div",U,[t[1]||(t[1]=e("div",{class:"progress-bar__scale"},null,-1)),t[2]||(t[2]=e("img",{class:"progress-bar__img",width:"50",height:"46",src:Q,alt:"chests"},null,-1)),e("div",Z,[e("span",ee,d(o(a).prettyLevelXP),1),t[0]||(t[0]=A(" / ")),e("span",te,d(o(a).prettyLevelNext),1)])]))}}),ae=y(se,[["__scopeId","data-v-c9936e66"]]),ne="/quantum/img/BGMain.png",oe={class:"tap"},ce=["src"],ie=f({__name:"AppTap",setup(s){$(l=>({"42732f6a":i.left+"px","6ed47a18":i.right+"px"}));const a=v(),i=V({left:null,right:null}),t=b(),c=b(!1),h=C(),x=b();x.value&&clearTimeout(x.value);const W=l=>{const n=[];for(const g of l.targetTouches){const{x:u,y:N}=l.target.getBoundingClientRect(),r=document.createElement("span");let T=null,B=g.clientX-u,w=g.clientY-N;T&&clearInterval(T),r.textContent=`+${a.tap}`,r.style.position="absolute",r.style.pointerEvents="none",r.style.opacity="1";let k=1;T=setInterval(()=>{k-=.016,B+=.1,w-=2,r.style.left=B+"px",r.style.top=w+"px",r.style.opacity=k.toString()},16),n.push(r)}return n},q=l=>{if(l.touches.length>10)return;let n=null;n&&clearTimeout(n),a.makeTap(),c.value=!0;const g=W(l);for(const u of g)t.value.appendChild(u);n=setTimeout(()=>{var u;(u=t.value.querySelector("span"))==null||u.remove()},1e3),x.value=setTimeout(()=>{t.value.querySelectorAll("span")[0]||(c.value=!1)},1e3),t.value.querySelectorAll("span").length&&(S.value=t.value.querySelectorAll("span").length||0)},S=b();return(l,n)=>(_(),p("div",oe,[A(d(S.value)+" ",1),n[1]||(n[1]=e("img",{class:"tap__bg-img",src:ne,alt:""},null,-1)),e("div",{class:"tap__info",ref_key:"tapInfo",ref:t,onTouchstart:n[0]||(n[0]=g=>q(g))},[e("img",{class:"tap__cat-img",width:"260",height:"300",src:c.value?`${o(h).path}/img/catBeam.png`:`${o(h).path}/img/catBase.png`,alt:"cat"},null,8,ce)],544)]))}}),re=y(ie,[["__scopeId","data-v-ebb92530"]]),le={class:"main-page"},_e={class:"main-page__balance"},pe={class:"main-page__progress"},de={class:"main-page__tap"},ge={class:"main-page__energy"},ue={class:"main-page__energy-icon"},me={class:"main-page__energy-info"},he=f({__name:"MainView",setup(s){const a=v();return(i,t)=>{var c,h;return _(),p("div",le,[m(K),e("div",_e,[m(H,{balanceType:"soft",imgWidth:48,imgHeight:48,fontSize:"48px",fontWeight:700,color:"var(--color-white)"})]),e("div",pe,[m(ae)]),e("div",de,[m(re)]),e("div",ge,[e("div",ue,[t[0]||(t[0]=e("span",{class:"main-page__energy-burger"},null,-1)),m(L)]),e("div",me,d((c=o(a).power)==null?void 0:c.current)+" / "+d((h=o(a).power)==null?void 0:h.max),1)])])}}}),ve=y(he,[["__scopeId","data-v-da7c0de2"]]);export{ve as default};
