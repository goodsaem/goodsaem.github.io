import{r as T,O as le,R as X,a3 as Se,$ as U,w as y,o as Me,J as F,m as ae,a2 as qe,N as O,j as He,a5 as $e,h as A,a6 as We,a7 as Le,a8 as Oe,g,X as D,a9 as Ae,I as Be,a1 as Fe,aa as De,L as ze,ab as Re,M as Ke}from"./index.9a7e15b2.js";import{c as Qe,u as _e,a as je,b as Ne}from"./use-prevent-scroll.8900c8b7.js";import{u as Ie,a as Ge}from"./use-dark.d3065166.js";import{r as Y,a as Ve,b as Xe}from"./focus-manager.32f8d49a.js";import{g as k}from"./use-router-link.f178a329.js";import{u as Ue}from"./use-tick.58d47302.js";import{u as Ye}from"./use-timeout.5844ca9e.js";import{a as Je}from"./render.a71c528d.js";const Ze={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function et({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:n,proxy:o,emit:s}=ae(),i=T(null);let f=null;function d(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};l===void 0&&(Object.assign(r,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){le(a,13)===!0&&r.toggle(a)},contextClick(a){o.hide(a),X(a),Se(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:X,mobileTouch(a){if(r.mobileCleanup(a),d(a)!==!0)return;o.hide(a),i.value.classList.add("non-selectable");const v=a.target;U(r,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&Qe()}}),l=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let v;a===!0?o.$q.platform.is.mobile===!0?v=[[i.value,"touchstart","mobileTouch","passive"]]:v=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:v=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],U(r,"anchor",v)});function c(){qe(r,"anchor")}function h(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function m(){if(n.target===!1||n.target===""||o.$el.parentNode===null)i.value=null;else if(n.target===!0)h(o.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,l()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return y(()=>n.contextMenu,a=>{i.value!==null&&(c(),l(a))}),y(()=>n.target,()=>{i.value!==null&&c(),m()}),y(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?c():l())}),Me(()=>{m(),t!==!0&&n.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),F(()=>{f!==null&&clearTimeout(f),c()}),{anchorEl:i,canShow:d,anchorEvents:r}}function tt(e,t){const l=T(null);let n;function o(f,d){const r=`${d!==void 0?"add":"remove"}EventListener`,c=d!==void 0?d:n;f!==window&&f[r]("scroll",c,O.passive),window[r]("scroll",c,O.passive),n=d}function s(){l.value!==null&&(o(l.value),l.value=null)}const i=y(()=>e.noParentEvent,()=>{l.value!==null&&(s(),t())});return F(i),{localScrollTarget:l,unconfigureScrollTarget:s,changeScrollEvent:o}}const C=[];function kt(e){return C.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function ue(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return k(e)}else if(e.__qPortal===!0){const l=k(e);return l!==void 0&&l.$options.name==="QPopupProxy"?(e.hide(t),l):e}e=k(e)}while(e!=null)}function St(e,t,l){for(;l!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(l--,e.$options.name==="QMenu"){e=ue(e,t);continue}e.hide(t)}e=k(e)}}function nt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function ot(e,t,l,n){const o=T(!1),s=T(!1);let i=null;const f={},d=n==="dialog"&&nt(e);function r(h){if(h===!0){Y(f),s.value=!0;return}s.value=!1,o.value===!1&&(d===!1&&i===null&&(i=Le(!1,n)),o.value=!0,C.push(e.proxy),Ve(f))}function c(h){if(s.value=!1,h!==!0)return;Y(f),o.value=!1;const m=C.indexOf(e.proxy);m!==-1&&C.splice(m,1),i!==null&&(Oe(i),i=null)}return He(()=>{c(!0)}),e.proxy.__qPortal=!0,$e(e.proxy,"contentEl",()=>t.value),{showPortal:r,hidePortal:c,portalIsActive:o,portalIsAccessible:s,renderPortal:()=>d===!0?l():o.value===!0?[A(We,{to:i},l())]:void 0}}const it={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function lt(e,t=()=>{},l=()=>{}){return{transitionProps:g(()=>{const n=`q-transition--${e.transitionShow||t()}`,o=`q-transition--${e.transitionHide||l()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:g(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const b=[];let E;function at(e){E=e.keyCode===27}function ut(){E===!0&&(E=!1)}function rt(e){E===!0&&(E=!1,le(e,27)===!0&&b[b.length-1](e))}function re(e){window[e]("keydown",at),window[e]("blur",ut),window[e]("keyup",rt),E=!1}function st(e){D.is.desktop===!0&&(b.push(e),b.length===1&&re("addEventListener"))}function J(e){const t=b.indexOf(e);t>-1&&(b.splice(t,1),b.length===0&&re("removeEventListener"))}const x=[];function se(e){x[x.length-1](e)}function ct(e){D.is.desktop===!0&&(x.push(e),x.length===1&&document.body.addEventListener("focusin",se))}function ft(e){const t=x.indexOf(e);t>-1&&(x.splice(t,1),x.length===0&&document.body.removeEventListener("focusin",se))}const{notPassiveCapture:S}=O,p=[];function M(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=C.length-1;for(;l>=0;){const n=C[l].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=p.length-1;n>=0;n--){const o=p[n];if((o.anchorEl.value===null||o.anchorEl.value.contains(t)===!1)&&(t===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(t)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function dt(e){p.push(e),p.length===1&&(document.addEventListener("mousedown",M,S),document.addEventListener("touchstart",M,S))}function Z(e){const t=p.findIndex(l=>l===e);t>-1&&(p.splice(t,1),p.length===0&&(document.removeEventListener("mousedown",M,S),document.removeEventListener("touchstart",M,S)))}let ee,te;function ne(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ht(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const B={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{B[`${e}#ltr`]=e,B[`${e}#rtl`]=e});function oe(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:B[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function mt(e,t){let{top:l,left:n,right:o,bottom:s,width:i,height:f}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],n-=t[0],s+=t[1],o+=t[0],i+=t[0],f+=t[1]),{top:l,bottom:s,height:f,left:n,right:o,width:i,middle:n+(o-n)/2,center:l+(s-l)/2}}function vt(e,t,l){let{top:n,left:o}=e.getBoundingClientRect();return n+=t.top,o+=t.left,l!==void 0&&(n+=l[1],o+=l[0]),{top:n,bottom:n+1,height:1,left:o,right:o+1,width:1,middle:o,center:n}}function gt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function ie(e,t,l){return{top:e[l.anchorOrigin.vertical]-t[l.selfOrigin.vertical],left:e[l.anchorOrigin.horizontal]-t[l.selfOrigin.horizontal]}}function bt(e){if(D.is.ios===!0&&window.visualViewport!==void 0){const f=document.body.style,{offsetLeft:d,offsetTop:r}=window.visualViewport;d!==ee&&(f.setProperty("--q-pe-left",d+"px"),ee=d),r!==te&&(f.setProperty("--q-pe-top",r+"px"),te=r)}const{scrollLeft:t,scrollTop:l}=e.el,n=e.absoluteOffset===void 0?mt(e.anchorEl,e.cover===!0?[0,0]:e.offset):vt(e.anchorEl,e.absoluteOffset,e.offset);let o={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(o.minWidth=n.width+"px",e.cover===!0&&(o.minHeight=n.height+"px")),Object.assign(e.el.style,o);const s=gt(e.el);let i=ie(n,s,e);if(e.absoluteOffset===void 0||e.offset===void 0)L(i,n,s,e.anchorOrigin,e.selfOrigin);else{const{top:f,left:d}=i;L(i,n,s,e.anchorOrigin,e.selfOrigin);let r=!1;if(i.top!==f){r=!0;const c=2*e.offset[1];n.center=n.top-=c,n.bottom-=c+2}if(i.left!==d){r=!0;const c=2*e.offset[0];n.middle=n.left-=c,n.right-=c+2}r===!0&&(i=ie(n,s,e),L(i,n,s,e.anchorOrigin,e.selfOrigin))}o={top:i.top+"px",left:i.left+"px"},i.maxHeight!==void 0&&(o.maxHeight=i.maxHeight+"px",n.height>i.maxHeight&&(o.minHeight=o.maxHeight)),i.maxWidth!==void 0&&(o.maxWidth=i.maxWidth+"px",n.width>i.maxWidth&&(o.minWidth=o.maxWidth)),Object.assign(e.el.style,o),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==t&&(e.el.scrollLeft=t)}function L(e,t,l,n,o){const s=l.bottom,i=l.right,f=Ae(),d=window.innerHeight-f,r=document.body.clientWidth;if(e.top<0||e.top+s>d)if(o.vertical==="center")e.top=t[n.vertical]>d/2?Math.max(0,d-s):0,e.maxHeight=Math.min(s,d);else if(t[n.vertical]>d/2){const c=Math.min(d,n.vertical==="center"?t.center:n.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,c),e.top=Math.max(0,c-s)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,d-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),o.horizontal==="middle")e.left=t[n.horizontal]>r/2?Math.max(0,r-i):0;else if(t[n.horizontal]>r/2){const c=Math.min(r,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(i,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(i,r-e.left)}var Mt=Be({name:"QMenu",inheritAttrs:!1,props:{...Ze,..._e,...Ie,...it,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ne},self:{type:String,validator:ne},offset:{type:Array,validator:ht},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...je,"click","escapeKey"],setup(e,{slots:t,emit:l,attrs:n}){let o=null,s,i,f;const d=ae(),{proxy:r}=d,{$q:c}=r,h=T(null),m=T(!1),a=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),v=Ge(e,c),{registerTick:ce,removeTick:fe}=Ue(),{registerTimeout:z}=Ye(),{transitionProps:de,transitionStyle:he}=lt(e),{localScrollTarget:R,changeScrollEvent:me,unconfigureScrollTarget:ve}=tt(e,G),{anchorEl:w,canShow:ge}=et({showing:m}),{hide:K}=Ne({showing:m,canShow:ge,handleShow:ye,handleHide:Ce,hideOnRouteChange:a,processOnMount:!0}),{showPortal:Q,hidePortal:_,renderPortal:be}=ot(d,h,Ee,"menu"),q={anchorEl:w,innerRef:h,onClickOutside(u){if(e.persistent!==!0&&m.value===!0)return K(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Ke(u),!0}},j=g(()=>oe(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),xe=g(()=>e.cover===!0?j.value:oe(e.self||"top start",c.lang.rtl)),pe=g(()=>(e.square===!0?" q-menu--square":"")+(v.value===!0?" q-menu--dark q-dark":"")),we=g(()=>e.autoClose===!0?{onClick:Te}:{}),N=g(()=>m.value===!0&&e.persistent!==!0);y(N,u=>{u===!0?(st($),dt(q)):(J($),Z(q))});function H(){Xe(()=>{let u=h.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function ye(u){if(o=e.noRefocus===!1?document.activeElement:null,ct(V),Q(),G(),s=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const W=Fe(u);if(W.left!==void 0){const{top:Pe,left:ke}=w.value.getBoundingClientRect();s={left:W.left-ke,top:W.top-Pe}}}i===void 0&&(i=y(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,P)),e.noFocus!==!0&&document.activeElement.blur(),ce(()=>{P(),e.noFocus!==!0&&H()}),z(()=>{c.platform.is.ios===!0&&(f=e.autoClose,h.value.click()),P(),Q(!0),l("show",u)},e.transitionDuration)}function Ce(u){fe(),_(),I(!0),o!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),z(()=>{_(!0),l("hide",u)},e.transitionDuration)}function I(u){s=void 0,i!==void 0&&(i(),i=void 0),(u===!0||m.value===!0)&&(ft(V),ve(),Z(q),J($)),u!==!0&&(o=null)}function G(){(w.value!==null||e.scrollTarget!==void 0)&&(R.value=De(w.value,e.scrollTarget),me(R.value,P))}function Te(u){f!==!0?(ue(r,u),l("click",u)):f=!1}function V(u){N.value===!0&&e.noFocus!==!0&&Re(h.value,u.target)!==!0&&H()}function $(u){l("escapeKey"),K(u)}function P(){const u=h.value;u===null||w.value===null||bt({el:u,offset:e.offset,anchorEl:w.value,anchorOrigin:j.value,selfOrigin:xe.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ee(){return A(ze,de.value,()=>m.value===!0?A("div",{role:"menu",...n,ref:h,tabindex:-1,class:["q-menu q-position-engine scroll"+pe.value,n.class],style:[n.style,he.value],...we.value},Je(t.default)):null)}return F(I),Object.assign(r,{focus:H,updatePosition:P}),be}});export{Mt as Q,et as a,it as b,St as c,lt as d,ot as e,J as f,kt as g,ct as h,st as i,ft as r,Ze as u};