import{C as T,D as N,t as x,F as S,m as Q,G as R,H as j,j as L}from"./base-2a3505bd.js";import{K as A,J as C,E as k}from"./runtime-core.esm-bundler-2c04a501.js";function v(e){var n;const t=S(e);return(n=t==null?void 0:t.$el)!=null?n:t}const w=Q?window:void 0;function b(...e){let n,t,r,u;if(T(e[0])||Array.isArray(e[0])?([t,r,u]=e,n=w):[n,t,r,u]=e,!n)return N;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const p=[],i=()=>{p.forEach(o=>o()),p.length=0},c=(o,l,m)=>(o.addEventListener(l,m,u),()=>o.removeEventListener(l,m,u)),d=A(()=>v(n),o=>{i(),o&&p.push(...t.flatMap(l=>r.map(m=>c(o,l,m))))},{immediate:!0,flush:"post"}),f=()=>{d(),i()};return x(f),f}function K(e,n,t={}){const{window:r=w,ignore:u,capture:p=!0,detectIframe:i=!1}=t;if(!r)return;let c=!0,d;const f=s=>{r.clearTimeout(d);const a=v(e);if(!(!a||a===s.target||s.composedPath().includes(a))){if(!c){c=!0;return}n(s)}},o=s=>u&&u.some(a=>{const O=v(a);return O&&(s.target===O||s.composedPath().includes(O))}),l=[b(r,"click",f,{passive:!0,capture:p}),b(r,"pointerdown",s=>{const a=v(e);a&&(c=!s.composedPath().includes(a)&&!o(s))},{passive:!0}),b(r,"pointerup",s=>{if(s.button===0){const a=s.composedPath();s.composedPath=()=>a,d=r.setTimeout(()=>f(s),50)}},{passive:!0}),i&&b(r,"blur",s=>{var a;const O=v(e);((a=r.document.activeElement)==null?void 0:a.tagName)==="IFRAME"&&!(O!=null&&O.contains(r.document.activeElement))&&n(s)})].filter(Boolean);return()=>l.forEach(s=>s())}function B(e,n=!1){const t=C(),r=()=>t.value=Boolean(e());return r(),R(r,n),t}const I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_="__vueuse_ssr_handlers__";I[_]=I[_]||{};I[_];var E=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,z=(e,n)=>{var t={};for(var r in e)D.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&E)for(var r of E(e))n.indexOf(r)<0&&U.call(e,r)&&(t[r]=e[r]);return t};function V(e,n,t={}){const r=t,{window:u=w}=r,p=z(r,["window"]);let i;const c=B(()=>u&&"ResizeObserver"in u),d=()=>{i&&(i.disconnect(),i=void 0)},f=A(()=>v(e),l=>{d(),c.value&&u&&l&&(i=new ResizeObserver(n),i.observe(l,p))},{immediate:!0,flush:"post"}),o=()=>{d(),f()};return x(o),{isSupported:c,stop:o}}var y;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(y||(y={}));var W=Object.defineProperty,h=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?W(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,F=(e,n)=>{for(var t in n||(n={}))Z.call(n,t)&&g(e,t,n[t]);if(h)for(var t of h(n))$.call(n,t)&&g(e,t,n[t]);return e};const G={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};F({linear:j},G);const J={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},P=C(0),q=()=>{const e=L("zIndex",2e3),n=k(()=>e.value+P.value);return{initialZIndex:e,currentZIndex:n,nextZIndex:()=>(P.value++,n.value)}};export{J as E,V as a,v as b,q as c,K as o,b as u};
