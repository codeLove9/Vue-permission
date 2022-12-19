import{v as A,T as U,w as oe,r as j}from"./runtime-dom.esm-bundler-c6862eaa.js";import{b as $,u as q,p as S,_ as Z,w as ae,d as y,y as re,z as le,i as ie,m as G,T as H,E as R,A as ue,g as ce,q as de,B as pe}from"./base-2a3505bd.js";import{d as h,E as m,o as f,y as k,M as x,_ as O,P as z,a4 as J,z as M,N as g,D as n,R as K,K as Q,am as me,J as E,L as fe,c as C,W as ge,a2 as w,Q as ye,a3 as ve,a as V,al as W,i as _}from"./runtime-core.esm-bundler-2c04a501.js";import{u as be,a as Ce,E as he,c as Te}from"./index-fdd8c2de.js";const Ne=s=>s,we=$({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),ze=["textContent"],Be=h({name:"ElBadge"}),Ee=h({...Be,props:we,setup(s,{expose:t}){const e=s,o=q("badge"),a=m(()=>e.isDot?"":S(e.value)&&S(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:a}),(l,u)=>(f(),k("div",{class:g(n(o).b())},[x(l.$slots,"default"),O(U,{name:`${n(o).namespace.value}-zoom-in-center`,persisted:""},{default:z(()=>[J(M("sup",{class:g([n(o).e("content"),n(o).em("content",l.type),n(o).is("fixed",!!l.$slots.default),n(o).is("dot",l.isDot)]),textContent:K(n(a))},null,10,ze),[[A,!l.hidden&&(n(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var Se=Z(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const ke=ae(Se),I={},Me=$({a11y:{type:Boolean,default:!0},locale:{type:y(Object)},size:re,button:{type:y(Object)},experimentalFeatures:{type:y(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:y(Object)},zIndex:Number,namespace:{type:String,default:"el"}});h({name:"ElConfigProvider",props:Me,setup(s,{slots:t}){Q(()=>s.message,o=>{Object.assign(I,o??{})},{immediate:!0,deep:!0});const e=le(s);return()=>x(t,"default",{config:e==null?void 0:e.value})}});const X=["success","info","warning","error"],i=Ne({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:G?document.body:void 0}),_e=$({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:ie,default:i.icon},id:{type:String,default:i.id},message:{type:y([String,Object,Function]),default:i.message},onClose:{type:y(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:X,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),Ie={destroy:()=>!0},c=me([]),$e=s=>{const t=c.findIndex(a=>a.id===s),e=c[t];let o;return t>0&&(o=c[t-1]),{current:e,prev:o}},xe=s=>{const{prev:t}=$e(s);return t?t.vm.exposed.bottom.value:0},Oe=["id"],Le=["innerHTML"],De=h({name:"ElMessage"}),Pe=h({...De,props:_e,emits:Ie,setup(s,{expose:t}){const e=s,{Close:o}=ue,a=q("message"),l=E(),u=E(!1),d=E(0);let p;const T=m(()=>e.type?e.type==="error"?"danger":e.type:"info"),L=m(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&H[r]}}),b=m(()=>e.icon||H[e.type]||""),ee=m(()=>xe(e.id)),D=m(()=>e.offset+ee.value),se=m(()=>d.value+D.value),te=m(()=>({top:`${D.value}px`,zIndex:e.zIndex}));function B(){e.duration!==0&&({stop:p}=ce(()=>{N()},e.duration))}function P(){p==null||p()}function N(){u.value=!1}function ne({code:r}){r===he.esc&&N()}return fe(()=>{B(),u.value=!0}),Q(()=>e.repeatNum,()=>{P(),B()}),be(document,"keydown",ne),Ce(l,()=>{d.value=l.value.getBoundingClientRect().height}),t({visible:u,bottom:se,close:N}),(r,F)=>(f(),C(U,{name:n(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:F[0]||(F[0]=Ae=>r.$emit("destroy")),persisted:""},{default:z(()=>[J(M("div",{id:r.id,ref_key:"messageRef",ref:l,class:g([n(a).b(),{[n(a).m(r.type)]:r.type&&!r.icon},n(a).is("center",r.center),n(a).is("closable",r.showClose),r.customClass]),style:ge(n(te)),role:"alert",onMouseenter:P,onMouseleave:B},[r.repeatNum>1?(f(),C(n(ke),{key:0,value:r.repeatNum,type:n(T),class:g(n(a).e("badge"))},null,8,["value","type","class"])):w("v-if",!0),n(b)?(f(),C(n(R),{key:1,class:g([n(a).e("icon"),n(L)])},{default:z(()=>[(f(),C(ye(n(b))))]),_:1},8,["class"])):w("v-if",!0),x(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(f(),k(ve,{key:1},[w(" Caution here, message could've been compromised, never use user's input as message "),M("p",{class:g(n(a).e("content")),innerHTML:r.message},null,10,Le)],2112)):(f(),k("p",{key:0,class:g(n(a).e("content"))},K(r.message),3))]),r.showClose?(f(),C(n(R),{key:2,class:g(n(a).e("closeBtn")),onClick:oe(N,["stop"])},{default:z(()=>[O(n(o))]),_:1},8,["class","onClick"])):w("v-if",!0)],46,Oe),[[A,u.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Fe=Z(Pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let je=1;const Y=s=>{const t=!s||V(s)||W(s)||_(s)?{message:s}:s,e={...i,...t};if(!e.appendTo)e.appendTo=document.body;else if(V(e.appendTo)){let o=document.querySelector(e.appendTo);de(o)||(o=document.body),e.appendTo=o}return e},He=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},Re=({appendTo:s,...t},e)=>{const{nextZIndex:o}=Te(),a=`message_${je++}`,l=t.onClose,u=document.createElement("div"),d={...t,zIndex:o()+t.zIndex,id:a,onClose:()=>{l==null||l(),He(b)},onDestroy:()=>{j(null,u)}},p=O(Fe,d,_(d.message)||W(d.message)?{default:_(d.message)?d.message:()=>d.message}:null);p.appContext=e||v._context,j(p,u),s.appendChild(u.firstElementChild);const T=p.component,b={id:a,vnode:p,vm:T,handler:{close:()=>{T.exposed.visible.value=!1}},props:p.component.props};return b},v=(s={},t)=>{if(!G)return{close:()=>{}};if(S(I.max)&&c.length>=I.max)return{close:()=>{}};const e=Y(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Re(e,t);return c.push(o),o.handler};X.forEach(s=>{v[s]=(t={},e)=>{const o=Y(t);return v({...o,type:s},e)}});function Ve(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}v.closeAll=Ve;v._context=null;const Je=pe(v,"$message");export{Je as E,Ne as m};
