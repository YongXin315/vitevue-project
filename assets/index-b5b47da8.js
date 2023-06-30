(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Co(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ie={},bn=[],Je=()=>{},Rf=()=>!1,kf=/^on[^a-z]/,Vs=e=>kf.test(e),So=e=>e.startsWith("onUpdate:"),pe=Object.assign,Ro=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pf=Object.prototype.hasOwnProperty,q=(e,t)=>Pf.call(e,t),B=Array.isArray,An=e=>Ks(e)==="[object Map]",wc=e=>Ks(e)==="[object Set]",W=e=>typeof e=="function",fe=e=>typeof e=="string",ko=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",Ec=e=>re(e)&&W(e.then)&&W(e.catch),Ic=Object.prototype.toString,Ks=e=>Ic.call(e),Of=e=>Ks(e).slice(8,-1),Tc=e=>Ks(e)==="[object Object]",Po=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fs=Co(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Df=/-(\w)/g,dt=zs(e=>e.replace(Df,(t,n)=>n?n.toUpperCase():"")),Nf=/\B([A-Z])/g,Hn=zs(e=>e.replace(Nf,"-$1").toLowerCase()),qs=zs(e=>e.charAt(0).toUpperCase()+e.slice(1)),wr=zs(e=>e?`on${qs(e)}`:""),vi=(e,t)=>!Object.is(e,t),ds=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Is=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Vr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ua;const Kr=()=>Ua||(Ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oo(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=fe(i)?Uf(i):Oo(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(fe(e))return e;if(re(e))return e}}const Lf=/;(?![^(]*\))/g,Mf=/:([^]+)/,xf=/\/\*[^]*?\*\//g;function Uf(e){const t={};return e.replace(xf,"").split(Lf).forEach(n=>{if(n){const i=n.split(Mf);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Wn(e){let t="";if(fe(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const i=Wn(e[n]);i&&(t+=i+" ")}else if(re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ff="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$f=Co(Ff);function bc(e){return!!e||e===""}const Et=e=>fe(e)?e:e==null?"":B(e)||re(e)&&(e.toString===Ic||!W(e.toString))?JSON.stringify(e,Ac,2):String(e),Ac=(e,t)=>t&&t.__v_isRef?Ac(e,t.value):An(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:wc(t)?{[`Set(${t.size})`]:[...t.values()]}:re(t)&&!B(t)&&!Tc(t)?String(t):t;let qe;class Bf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qe,!t&&qe&&(this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=qe;try{return qe=this,t()}finally{qe=n}}}on(){qe=this}off(){qe=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function jf(e,t=qe){t&&t.active&&t.effects.push(e)}function Hf(){return qe}const Do=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Cc=e=>(e.w&Vt)>0,Sc=e=>(e.n&Vt)>0,Wf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Vt},Vf=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];Cc(s)&&!Sc(s)?s.delete(e):t[n++]=s,s.w&=~Vt,s.n&=~Vt}t.length=n}},zr=new WeakMap;let ri=0,Vt=1;const qr=30;let Ge;const nn=Symbol(""),Gr=Symbol("");class No{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jf(this,i)}run(){if(!this.active)return this.fn();let t=Ge,n=$t;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ge,Ge=this,$t=!0,Vt=1<<++ri,ri<=qr?Wf(this):Fa(this),this.fn()}finally{ri<=qr&&Vf(this),Vt=1<<--ri,Ge=this.parent,$t=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ge===this?this.deferStop=!0:this.active&&(Fa(this),this.onStop&&this.onStop(),this.active=!1)}}function Fa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let $t=!0;const Rc=[];function Vn(){Rc.push($t),$t=!1}function Kn(){const e=Rc.pop();$t=e===void 0?!0:e}function Me(e,t,n){if($t&&Ge){let i=zr.get(e);i||zr.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=Do()),kc(s)}}function kc(e,t){let n=!1;ri<=qr?Sc(e)||(e.n|=Vt,n=!Cc(e)):n=!e.has(Ge),n&&(e.add(Ge),Ge.deps.push(e))}function It(e,t,n,i,s,r){const o=zr.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&B(e)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":B(e)?Po(n)&&a.push(o.get("length")):(a.push(o.get(nn)),An(e)&&a.push(o.get(Gr)));break;case"delete":B(e)||(a.push(o.get(nn)),An(e)&&a.push(o.get(Gr)));break;case"set":An(e)&&a.push(o.get(nn));break}if(a.length===1)a[0]&&Yr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Yr(Do(l))}}function Yr(e,t){const n=B(e)?e:[...e];for(const i of n)i.computed&&$a(i);for(const i of n)i.computed||$a(i)}function $a(e,t){(e!==Ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Kf=Co("__proto__,__v_isRef,__isVue"),Pc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ko)),zf=Lo(),qf=Lo(!1,!0),Gf=Lo(!0),Ba=Yf();function Yf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=G(this);for(let r=0,o=this.length;r<o;r++)Me(i,"get",r+"");const s=i[t](...n);return s===-1||s===!1?i[t](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Vn();const i=G(this)[t].apply(this,n);return Kn(),i}}),e}function Jf(e){const t=G(this);return Me(t,"has",e),t.hasOwnProperty(e)}function Lo(e=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?fd:Mc:t?Lc:Nc).get(i))return i;const o=B(i);if(!e){if(o&&q(Ba,s))return Reflect.get(Ba,s,r);if(s==="hasOwnProperty")return Jf}const a=Reflect.get(i,s,r);return(ko(s)?Pc.has(s):Kf(s))||(e||Me(i,"get",s),t)?a:Ce(a)?o&&Po(s)?a:a.value:re(a)?e?xc(a):Fi(a):a}}const Xf=Oc(),Qf=Oc(!0);function Oc(e=!1){return function(n,i,s,r){let o=n[i];if(Ln(o)&&Ce(o)&&!Ce(s))return!1;if(!e&&(!Ts(s)&&!Ln(s)&&(o=G(o),s=G(s)),!B(n)&&Ce(o)&&!Ce(s)))return o.value=s,!0;const a=B(n)&&Po(i)?Number(i)<n.length:q(n,i),l=Reflect.set(n,i,s,r);return n===G(r)&&(a?vi(s,o)&&It(n,"set",i,s):It(n,"add",i,s)),l}}function Zf(e,t){const n=q(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&It(e,"delete",t,void 0),i}function ed(e,t){const n=Reflect.has(e,t);return(!ko(t)||!Pc.has(t))&&Me(e,"has",t),n}function td(e){return Me(e,"iterate",B(e)?"length":nn),Reflect.ownKeys(e)}const Dc={get:zf,set:Xf,deleteProperty:Zf,has:ed,ownKeys:td},nd={get:Gf,set(e,t){return!0},deleteProperty(e,t){return!0}},id=pe({},Dc,{get:qf,set:Qf}),Mo=e=>e,Gs=e=>Reflect.getPrototypeOf(e);function ts(e,t,n=!1,i=!1){e=e.__v_raw;const s=G(e),r=G(t);n||(t!==r&&Me(s,"get",t),Me(s,"get",r));const{has:o}=Gs(s),a=i?Mo:n?Fo:wi;if(o.call(s,t))return a(e.get(t));if(o.call(s,r))return a(e.get(r));e!==s&&e.get(t)}function ns(e,t=!1){const n=this.__v_raw,i=G(n),s=G(e);return t||(e!==s&&Me(i,"has",e),Me(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function is(e,t=!1){return e=e.__v_raw,!t&&Me(G(e),"iterate",nn),Reflect.get(e,"size",e)}function ja(e){e=G(e);const t=G(this);return Gs(t).has.call(t,e)||(t.add(e),It(t,"add",e,e)),this}function Ha(e,t){t=G(t);const n=G(this),{has:i,get:s}=Gs(n);let r=i.call(n,e);r||(e=G(e),r=i.call(n,e));const o=s.call(n,e);return n.set(e,t),r?vi(t,o)&&It(n,"set",e,t):It(n,"add",e,t),this}function Wa(e){const t=G(this),{has:n,get:i}=Gs(t);let s=n.call(t,e);s||(e=G(e),s=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return s&&It(t,"delete",e,void 0),r}function Va(){const e=G(this),t=e.size!==0,n=e.clear();return t&&It(e,"clear",void 0,void 0),n}function ss(e,t){return function(i,s){const r=this,o=r.__v_raw,a=G(o),l=t?Mo:e?Fo:wi;return!e&&Me(a,"iterate",nn),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function rs(e,t,n){return function(...i){const s=this.__v_raw,r=G(s),o=An(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...i),u=n?Mo:t?Fo:wi;return!t&&Me(r,"iterate",l?Gr:nn),{next(){const{value:d,done:g}=c.next();return g?{value:d,done:g}:{value:a?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function Pt(e){return function(...t){return e==="delete"?!1:this}}function sd(){const e={get(r){return ts(this,r)},get size(){return is(this)},has:ns,add:ja,set:Ha,delete:Wa,clear:Va,forEach:ss(!1,!1)},t={get(r){return ts(this,r,!1,!0)},get size(){return is(this)},has:ns,add:ja,set:Ha,delete:Wa,clear:Va,forEach:ss(!1,!0)},n={get(r){return ts(this,r,!0)},get size(){return is(this,!0)},has(r){return ns.call(this,r,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:ss(!0,!1)},i={get(r){return ts(this,r,!0,!0)},get size(){return is(this,!0)},has(r){return ns.call(this,r,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=rs(r,!1,!1),n[r]=rs(r,!0,!1),t[r]=rs(r,!1,!0),i[r]=rs(r,!0,!0)}),[e,n,t,i]}const[rd,od,ad,ld]=sd();function xo(e,t){const n=t?e?ld:ad:e?od:rd;return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(q(n,s)&&s in i?n:i,s,r)}const cd={get:xo(!1,!1)},ud={get:xo(!1,!0)},hd={get:xo(!0,!1)},Nc=new WeakMap,Lc=new WeakMap,Mc=new WeakMap,fd=new WeakMap;function dd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pd(e){return e.__v_skip||!Object.isExtensible(e)?0:dd(Of(e))}function Fi(e){return Ln(e)?e:Uo(e,!1,Dc,cd,Nc)}function gd(e){return Uo(e,!1,id,ud,Lc)}function xc(e){return Uo(e,!0,nd,hd,Mc)}function Uo(e,t,n,i,s){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const o=pd(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return s.set(e,a),a}function Cn(e){return Ln(e)?Cn(e.__v_raw):!!(e&&e.__v_isReactive)}function Ln(e){return!!(e&&e.__v_isReadonly)}function Ts(e){return!!(e&&e.__v_isShallow)}function Uc(e){return Cn(e)||Ln(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Fc(e){return Is(e,"__v_skip",!0),e}const wi=e=>re(e)?Fi(e):e,Fo=e=>re(e)?xc(e):e;function $c(e){$t&&Ge&&(e=G(e),kc(e.dep||(e.dep=Do())))}function Bc(e,t){e=G(e);const n=e.dep;n&&Yr(n)}function Ce(e){return!!(e&&e.__v_isRef===!0)}function md(e){return jc(e,!1)}function _d(e){return jc(e,!0)}function jc(e,t){return Ce(e)?e:new yd(e,t)}class yd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:wi(t)}get value(){return $c(this),this._value}set value(t){const n=this.__v_isShallow||Ts(t)||Ln(t);t=n?t:G(t),vi(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:wi(t),Bc(this))}}function Sn(e){return Ce(e)?e.value:e}const vd={get:(e,t,n)=>Sn(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return Ce(s)&&!Ce(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function Hc(e){return Cn(e)?e:new Proxy(e,vd)}class wd{constructor(t,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new No(t,()=>{this._dirty||(this._dirty=!0,Bc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=G(this);return $c(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ed(e,t,n=!1){let i,s;const r=W(e);return r?(i=e,s=Je):(i=e.get,s=e.set),new wd(i,s,r||!s,n)}function Bt(e,t,n,i){let s;try{s=i?e(...i):e()}catch(r){Ys(r,t,n)}return s}function Xe(e,t,n,i){if(W(e)){const r=Bt(e,t,n,i);return r&&Ec(r)&&r.catch(o=>{Ys(o,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(Xe(e[r],t,n,i));return s}function Ys(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){Bt(l,null,10,[e,o,a]);return}}Id(e,n,s,i)}function Id(e,t,n,i=!0){console.error(e)}let Ei=!1,Jr=!1;const Te=[];let ot=0;const Rn=[];let _t=null,Xt=0;const Wc=Promise.resolve();let $o=null;function Vc(e){const t=$o||Wc;return e?t.then(this?e.bind(this):e):t}function Td(e){let t=ot+1,n=Te.length;for(;t<n;){const i=t+n>>>1;Ii(Te[i])<e?t=i+1:n=i}return t}function Bo(e){(!Te.length||!Te.includes(e,Ei&&e.allowRecurse?ot+1:ot))&&(e.id==null?Te.push(e):Te.splice(Td(e.id),0,e),Kc())}function Kc(){!Ei&&!Jr&&(Jr=!0,$o=Wc.then(qc))}function bd(e){const t=Te.indexOf(e);t>ot&&Te.splice(t,1)}function Ad(e){B(e)?Rn.push(...e):(!_t||!_t.includes(e,e.allowRecurse?Xt+1:Xt))&&Rn.push(e),Kc()}function Ka(e,t=Ei?ot+1:0){for(;t<Te.length;t++){const n=Te[t];n&&n.pre&&(Te.splice(t,1),t--,n())}}function zc(e){if(Rn.length){const t=[...new Set(Rn)];if(Rn.length=0,_t){_t.push(...t);return}for(_t=t,_t.sort((n,i)=>Ii(n)-Ii(i)),Xt=0;Xt<_t.length;Xt++)_t[Xt]();_t=null,Xt=0}}const Ii=e=>e.id==null?1/0:e.id,Cd=(e,t)=>{const n=Ii(e)-Ii(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function qc(e){Jr=!1,Ei=!0,Te.sort(Cd);const t=Je;try{for(ot=0;ot<Te.length;ot++){const n=Te[ot];n&&n.active!==!1&&Bt(n,null,14)}}finally{ot=0,Te.length=0,zc(),Ei=!1,$o=null,(Te.length||Rn.length)&&qc()}}function Sd(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ie;let s=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:g}=i[u]||ie;g&&(s=n.map(v=>fe(v)?v.trim():v)),d&&(s=n.map(Vr))}let a,l=i[a=wr(t)]||i[a=wr(dt(t))];!l&&r&&(l=i[a=wr(Hn(t))]),l&&Xe(l,e,6,s);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Xe(c,e,6,s)}}function Gc(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!W(e)){const l=c=>{const u=Gc(c,t,!0);u&&(a=!0,pe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(re(e)&&i.set(e,null),null):(B(r)?r.forEach(l=>o[l]=null):pe(o,r),re(e)&&i.set(e,o),o)}function Js(e,t){return!e||!Vs(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Hn(t))||q(e,t))}let He=null,Yc=null;function bs(e){const t=He;return He=e,Yc=e&&e.type.__scopeId||null,t}function Rd(e,t=He,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&nl(-1);const r=bs(t);let o;try{o=e(...s)}finally{bs(r),i._d&&nl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Er(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:g,setupState:v,ctx:R,inheritAttrs:P}=e;let F,N;const x=bs(e);try{if(n.shapeFlag&4){const U=s||i;F=rt(u.call(U,U,d,r,v,g,R)),N=l}else{const U=t;F=rt(U.length>1?U(r,{attrs:l,slots:a,emit:c}):U(r,null)),N=t.props?l:kd(l)}}catch(U){di.length=0,Ys(U,e,1),F=ve(an)}let K=F;if(N&&P!==!1){const U=Object.keys(N),{shapeFlag:ce}=K;U.length&&ce&7&&(o&&U.some(So)&&(N=Pd(N,o)),K=Mn(K,N))}return n.dirs&&(K=Mn(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),F=K,bs(x),F}const kd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vs(n))&&((t||(t={}))[n]=e[n]);return t},Pd=(e,t)=>{const n={};for(const i in e)(!So(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Od(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?za(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(o[g]!==i[g]&&!Js(c,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?za(i,o,c):!0:!!o;return!1}function za(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!Js(n,r))return!0}return!1}function Dd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Nd=e=>e.__isSuspense;function Ld(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Ad(e)}const os={};function ps(e,t,n){return Jc(e,t,n)}function Jc(e,t,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ie){var a;const l=Hf()===((a=ye)==null?void 0:a.scope)?ye:null;let c,u=!1,d=!1;if(Ce(e)?(c=()=>e.value,u=Ts(e)):Cn(e)?(c=()=>e,i=!0):B(e)?(d=!0,u=e.some(U=>Cn(U)||Ts(U)),c=()=>e.map(U=>{if(Ce(U))return U.value;if(Cn(U))return Zt(U);if(W(U))return Bt(U,l,2)})):W(e)?t?c=()=>Bt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return g&&g(),Xe(e,l,3,[v])}:c=Je,t&&i){const U=c;c=()=>Zt(U())}let g,v=U=>{g=x.onStop=()=>{Bt(U,l,4)}},R;if(bi)if(v=Je,t?n&&Xe(t,l,3,[c(),d?[]:void 0,v]):c(),s==="sync"){const U=Pp();R=U.__watcherHandles||(U.__watcherHandles=[])}else return Je;let P=d?new Array(e.length).fill(os):os;const F=()=>{if(x.active)if(t){const U=x.run();(i||u||(d?U.some((ce,ue)=>vi(ce,P[ue])):vi(U,P)))&&(g&&g(),Xe(t,l,3,[U,P===os?void 0:d&&P[0]===os?[]:P,v]),P=U)}else x.run()};F.allowRecurse=!!t;let N;s==="sync"?N=F:s==="post"?N=()=>Le(F,l&&l.suspense):(F.pre=!0,l&&(F.id=l.uid),N=()=>Bo(F));const x=new No(c,N);t?n?F():P=x.run():s==="post"?Le(x.run.bind(x),l&&l.suspense):x.run();const K=()=>{x.stop(),l&&l.scope&&Ro(l.scope.effects,x)};return R&&R.push(K),K}function Md(e,t,n){const i=this.proxy,s=fe(e)?e.includes(".")?Xc(i,e):()=>i[e]:e.bind(i,i);let r;W(t)?r=t:(r=t.handler,n=t);const o=ye;xn(this);const a=Jc(s,r.bind(i),n);return o?xn(o):sn(),a}function Xc(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Zt(e,t){if(!re(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ce(e))Zt(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Zt(e[n],t);else if(wc(e)||An(e))e.forEach(n=>{Zt(n,t)});else if(Tc(e))for(const n in e)Zt(e[n],t);return e}function hi(e,t){const n=He;if(n===null)return e;const i=er(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,l,c=ie]=t[r];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&Zt(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Gt(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Vn(),Xe(l,n,8,[e.el,a,e,t]),Kn())}}function Qc(e,t){return W(e)?(()=>pe({name:e.name},t,{setup:e}))():e}const gs=e=>!!e.type.__asyncLoader,Zc=e=>e.type.__isKeepAlive;function xd(e,t){eu(e,"a",t)}function Ud(e,t){eu(e,"da",t)}function eu(e,t,n=ye){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Xs(t,i,n),n){let s=n.parent;for(;s&&s.parent;)Zc(s.parent.vnode)&&Fd(i,t,n,s),s=s.parent}}function Fd(e,t,n,i){const s=Xs(t,e,i,!0);tu(()=>{Ro(i[t],s)},n)}function Xs(e,t,n=ye,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Vn(),xn(n);const a=Xe(t,n,e,o);return sn(),Kn(),a});return i?s.unshift(r):s.push(r),r}}const At=e=>(t,n=ye)=>(!bi||e==="sp")&&Xs(e,(...i)=>t(...i),n),$d=At("bm"),Bd=At("m"),jd=At("bu"),Hd=At("u"),Wd=At("bum"),tu=At("um"),Vd=At("sp"),Kd=At("rtg"),zd=At("rtc");function qd(e,t=ye){Xs("ec",e,t)}const nu="components";function Gd(e,t){return Jd(nu,e,!0,t)||e}const Yd=Symbol.for("v-ndc");function Jd(e,t,n=!0,i=!1){const s=He||ye;if(s){const r=s.type;if(e===nu){const a=Sp(r,!1);if(a&&(a===t||a===dt(t)||a===qs(dt(t))))return r}const o=qa(s[e]||r[e],t)||qa(s.appContext[e],t);return!o&&i?r:o}}function qa(e,t){return e&&(e[t]||e[dt(t)]||e[qs(dt(t))])}function jo(e,t,n,i){let s;const r=n&&n[i];if(B(e)||fe(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,r&&r[o])}else if(re(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(e[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}const Xr=e=>e?du(e)?er(e)||e.proxy:Xr(e.parent):null,fi=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xr(e.parent),$root:e=>Xr(e.root),$emit:e=>e.emit,$options:e=>Ho(e),$forceUpdate:e=>e.f||(e.f=()=>Bo(e.update)),$nextTick:e=>e.n||(e.n=Vc.bind(e.proxy)),$watch:e=>Md.bind(e)}),Ir=(e,t)=>e!==ie&&!e.__isScriptSetup&&q(e,t),Xd={get({_:e},t){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Ir(i,t))return o[t]=1,i[t];if(s!==ie&&q(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&q(c,t))return o[t]=3,r[t];if(n!==ie&&q(n,t))return o[t]=4,n[t];Qr&&(o[t]=0)}}const u=fi[t];let d,g;if(u)return t==="$attrs"&&Me(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==ie&&q(n,t))return o[t]=4,n[t];if(g=l.config.globalProperties,q(g,t))return g[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return Ir(s,t)?(s[t]=n,!0):i!==ie&&q(i,t)?(i[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||e!==ie&&q(e,o)||Ir(t,o)||(a=r[0])&&q(a,o)||q(i,o)||q(fi,o)||q(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ga(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Qr=!0;function Qd(e){const t=Ho(e),n=e.proxy,i=e.ctx;Qr=!1,t.beforeCreate&&Ya(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:g,beforeUpdate:v,updated:R,activated:P,deactivated:F,beforeDestroy:N,beforeUnmount:x,destroyed:K,unmounted:U,render:ce,renderTracked:ue,renderTriggered:xe,errorCaptured:Ke,serverPrefetch:et,expose:$e,inheritAttrs:Rt,components:qt,directives:tt,filters:Zn}=t;if(c&&Zd(c,i,null),o)for(const te in o){const Y=o[te];W(Y)&&(i[te]=Y.bind(n))}if(s){const te=s.call(n,n);re(te)&&(e.data=Fi(te))}if(Qr=!0,r)for(const te in r){const Y=r[te],gt=W(Y)?Y.bind(n,n):W(Y.get)?Y.get.bind(n,n):Je,kt=!W(Y)&&W(Y.set)?Y.set.bind(n):Je,nt=Be({get:gt,set:kt});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ne=>nt.value=Ne})}if(a)for(const te in a)iu(a[te],i,n,te);if(l){const te=W(l)?l.call(n):l;Reflect.ownKeys(te).forEach(Y=>{ms(Y,te[Y])})}u&&Ya(u,e,"c");function de(te,Y){B(Y)?Y.forEach(gt=>te(gt.bind(n))):Y&&te(Y.bind(n))}if(de($d,d),de(Bd,g),de(jd,v),de(Hd,R),de(xd,P),de(Ud,F),de(qd,Ke),de(zd,ue),de(Kd,xe),de(Wd,x),de(tu,U),de(Vd,et),B($e))if($e.length){const te=e.exposed||(e.exposed={});$e.forEach(Y=>{Object.defineProperty(te,Y,{get:()=>n[Y],set:gt=>n[Y]=gt})})}else e.exposed||(e.exposed={});ce&&e.render===Je&&(e.render=ce),Rt!=null&&(e.inheritAttrs=Rt),qt&&(e.components=qt),tt&&(e.directives=tt)}function Zd(e,t,n=Je){B(e)&&(e=Zr(e));for(const i in e){const s=e[i];let r;re(s)?"default"in s?r=ut(s.from||i,s.default,!0):r=ut(s.from||i):r=ut(s),Ce(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Ya(e,t,n){Xe(B(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function iu(e,t,n,i){const s=i.includes(".")?Xc(n,i):()=>n[i];if(fe(e)){const r=t[e];W(r)&&ps(s,r)}else if(W(e))ps(s,e.bind(n));else if(re(e))if(B(e))e.forEach(r=>iu(r,t,n,i));else{const r=W(e.handler)?e.handler.bind(n):t[e.handler];W(r)&&ps(s,r,e)}}function Ho(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!n&&!i?l=t:(l={},s.length&&s.forEach(c=>As(l,c,o,!0)),As(l,t,o)),re(t)&&r.set(t,l),l}function As(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&As(e,r,n,!0),s&&s.forEach(o=>As(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=ep[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const ep={data:Ja,props:Xa,emits:Xa,methods:oi,computed:oi,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:oi,directives:oi,watch:np,provide:Ja,inject:tp};function Ja(e,t){return t?e?function(){return pe(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function tp(e,t){return oi(Zr(e),Zr(t))}function Zr(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Pe(e,t){return e?[...new Set([].concat(e,t))]:t}function oi(e,t){return e?pe(Object.create(null),e,t):t}function Xa(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:pe(Object.create(null),Ga(e),Ga(t??{})):t}function np(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const i in t)n[i]=Pe(e[i],t[i]);return n}function su(){return{app:null,config:{isNativeTag:Rf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ip=0;function sp(e,t){return function(i,s=null){W(i)||(i=pe({},i)),s!=null&&!re(s)&&(s=null);const r=su(),o=new Set;let a=!1;const l=r.app={_uid:ip++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Op,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(l,...u)):W(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const g=ve(i,s);return g.appContext=r,u&&t?t(g,c):e(g,c,d),a=!0,l._container=c,c.__vue_app__=l,er(g.component)||g.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Cs=l;try{return c()}finally{Cs=null}}};return l}}let Cs=null;function ms(e,t){if(ye){let n=ye.provides;const i=ye.parent&&ye.parent.provides;i===n&&(n=ye.provides=Object.create(i)),n[e]=t}}function ut(e,t,n=!1){const i=ye||He;if(i||Cs){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Cs._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&W(t)?t.call(i&&i.proxy):t}}function rp(e,t,n,i=!1){const s={},r={};Is(r,Zs,1),e.propsDefaults=Object.create(null),ru(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:gd(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function op(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=G(s),[l]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(Js(e.emitsOptions,g))continue;const v=t[g];if(l)if(q(r,g))v!==r[g]&&(r[g]=v,c=!0);else{const R=dt(g);s[R]=eo(l,a,R,v,e,!1)}else v!==r[g]&&(r[g]=v,c=!0)}}}else{ru(e,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!q(t,d)&&((u=Hn(d))===d||!q(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=eo(l,a,d,void 0,e,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!q(t,d))&&(delete r[d],c=!0)}c&&It(e,"set","$attrs")}function ru(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(fs(l))continue;const c=t[l];let u;s&&q(s,u=dt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Js(e.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=G(n),c=a||ie;for(let u=0;u<r.length;u++){const d=r[u];n[d]=eo(s,l,d,c[d],e,!q(c,d))}}return o}function eo(e,t,n,i,s,r){const o=e[n];if(o!=null){const a=q(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&W(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(xn(s),i=c[n]=l.call(null,t),sn())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Hn(n))&&(i=!0))}return i}function ou(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let l=!1;if(!W(e)){const u=d=>{l=!0;const[g,v]=ou(d,t,!0);pe(o,g),v&&a.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return re(e)&&i.set(e,bn),bn;if(B(r))for(let u=0;u<r.length;u++){const d=dt(r[u]);Qa(d)&&(o[d]=ie)}else if(r)for(const u in r){const d=dt(u);if(Qa(d)){const g=r[u],v=o[d]=B(g)||W(g)?{type:g}:pe({},g);if(v){const R=tl(Boolean,v.type),P=tl(String,v.type);v[0]=R>-1,v[1]=P<0||R<P,(R>-1||q(v,"default"))&&a.push(d)}}}const c=[o,a];return re(e)&&i.set(e,c),c}function Qa(e){return e[0]!=="$"}function Za(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function el(e,t){return Za(e)===Za(t)}function tl(e,t){return B(t)?t.findIndex(n=>el(n,e)):W(t)&&el(t,e)?0:-1}const au=e=>e[0]==="_"||e==="$stable",Wo=e=>B(e)?e.map(rt):[rt(e)],ap=(e,t,n)=>{if(t._n)return t;const i=Rd((...s)=>Wo(t(...s)),n);return i._c=!1,i},lu=(e,t,n)=>{const i=e._ctx;for(const s in e){if(au(s))continue;const r=e[s];if(W(r))t[s]=ap(s,r,i);else if(r!=null){const o=Wo(r);t[s]=()=>o}}},cu=(e,t)=>{const n=Wo(t);e.slots.default=()=>n},lp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),Is(t,"_",n)):lu(t,e.slots={})}else e.slots={},t&&cu(e,t);Is(e.slots,Zs,1)},cp=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=ie;if(i.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(pe(s,t),!n&&a===1&&delete s._):(r=!t.$stable,lu(t,s)),o=t}else t&&(cu(e,t),o={default:1});if(r)for(const a in s)!au(a)&&!(a in o)&&delete s[a]};function to(e,t,n,i,s=!1){if(B(e)){e.forEach((g,v)=>to(g,t&&(B(t)?t[v]:t),n,i,s));return}if(gs(i)&&!s)return;const r=i.shapeFlag&4?er(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=e,c=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(fe(c)?(u[c]=null,q(d,c)&&(d[c]=null)):Ce(c)&&(c.value=null)),W(l))Bt(l,a,12,[o,u]);else{const g=fe(l),v=Ce(l);if(g||v){const R=()=>{if(e.f){const P=g?q(d,l)?d[l]:u[l]:l.value;s?B(P)&&Ro(P,r):B(P)?P.includes(r)||P.push(r):g?(u[l]=[r],q(d,l)&&(d[l]=u[l])):(l.value=[r],e.k&&(u[e.k]=l.value))}else g?(u[l]=o,q(d,l)&&(d[l]=o)):v&&(l.value=o,e.k&&(u[e.k]=o))};o?(R.id=-1,Le(R,n)):R()}}}const Le=Ld;function up(e){return hp(e)}function hp(e,t){const n=Kr();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:g,setScopeId:v=Je,insertStaticContent:R}=e,P=(h,f,p,_=null,w=null,E=null,S=!1,T=null,b=!!f.dynamicChildren)=>{if(h===f)return;h&&!ti(h,f)&&(_=y(h),Ne(h,w,E,!0),h=null),f.patchFlag===-2&&(b=!1,f.dynamicChildren=null);const{type:I,ref:L,shapeFlag:O}=f;switch(I){case Qs:F(h,f,p,_);break;case an:N(h,f,p,_);break;case Tr:h==null&&x(f,p,_,S);break;case Oe:qt(h,f,p,_,w,E,S,T,b);break;default:O&1?ce(h,f,p,_,w,E,S,T,b):O&6?tt(h,f,p,_,w,E,S,T,b):(O&64||O&128)&&I.process(h,f,p,_,w,E,S,T,b,A)}L!=null&&w&&to(L,h&&h.ref,E,f||h,!f)},F=(h,f,p,_)=>{if(h==null)i(f.el=a(f.children),p,_);else{const w=f.el=h.el;f.children!==h.children&&c(w,f.children)}},N=(h,f,p,_)=>{h==null?i(f.el=l(f.children||""),p,_):f.el=h.el},x=(h,f,p,_)=>{[h.el,h.anchor]=R(h.children,f,p,_,h.el,h.anchor)},K=({el:h,anchor:f},p,_)=>{let w;for(;h&&h!==f;)w=g(h),i(h,p,_),h=w;i(f,p,_)},U=({el:h,anchor:f})=>{let p;for(;h&&h!==f;)p=g(h),s(h),h=p;s(f)},ce=(h,f,p,_,w,E,S,T,b)=>{S=S||f.type==="svg",h==null?ue(f,p,_,w,E,S,T,b):et(h,f,w,E,S,T,b)},ue=(h,f,p,_,w,E,S,T)=>{let b,I;const{type:L,props:O,shapeFlag:M,transition:H,dirs:V}=h;if(b=h.el=o(h.type,E,O&&O.is,O),M&8?u(b,h.children):M&16&&Ke(h.children,b,null,_,w,E&&L!=="foreignObject",S,T),V&&Gt(h,null,_,"created"),xe(b,h,h.scopeId,S,_),O){for(const ee in O)ee!=="value"&&!fs(ee)&&r(b,ee,null,O[ee],E,h.children,_,w,Ee);"value"in O&&r(b,"value",null,O.value),(I=O.onVnodeBeforeMount)&&st(I,_,h)}V&&Gt(h,null,_,"beforeMount");const ne=(!w||w&&!w.pendingBranch)&&H&&!H.persisted;ne&&H.beforeEnter(b),i(b,f,p),((I=O&&O.onVnodeMounted)||ne||V)&&Le(()=>{I&&st(I,_,h),ne&&H.enter(b),V&&Gt(h,null,_,"mounted")},w)},xe=(h,f,p,_,w)=>{if(p&&v(h,p),_)for(let E=0;E<_.length;E++)v(h,_[E]);if(w){let E=w.subTree;if(f===E){const S=w.vnode;xe(h,S,S.scopeId,S.slotScopeIds,w.parent)}}},Ke=(h,f,p,_,w,E,S,T,b=0)=>{for(let I=b;I<h.length;I++){const L=h[I]=T?Nt(h[I]):rt(h[I]);P(null,L,f,p,_,w,E,S,T)}},et=(h,f,p,_,w,E,S)=>{const T=f.el=h.el;let{patchFlag:b,dynamicChildren:I,dirs:L}=f;b|=h.patchFlag&16;const O=h.props||ie,M=f.props||ie;let H;p&&Yt(p,!1),(H=M.onVnodeBeforeUpdate)&&st(H,p,f,h),L&&Gt(f,h,p,"beforeUpdate"),p&&Yt(p,!0);const V=w&&f.type!=="foreignObject";if(I?$e(h.dynamicChildren,I,T,p,_,V,E):S||Y(h,f,T,null,p,_,V,E,!1),b>0){if(b&16)Rt(T,f,O,M,p,_,w);else if(b&2&&O.class!==M.class&&r(T,"class",null,M.class,w),b&4&&r(T,"style",O.style,M.style,w),b&8){const ne=f.dynamicProps;for(let ee=0;ee<ne.length;ee++){const ae=ne[ee],ze=O[ae],_n=M[ae];(_n!==ze||ae==="value")&&r(T,ae,ze,_n,w,h.children,p,_,Ee)}}b&1&&h.children!==f.children&&u(T,f.children)}else!S&&I==null&&Rt(T,f,O,M,p,_,w);((H=M.onVnodeUpdated)||L)&&Le(()=>{H&&st(H,p,f,h),L&&Gt(f,h,p,"updated")},_)},$e=(h,f,p,_,w,E,S)=>{for(let T=0;T<f.length;T++){const b=h[T],I=f[T],L=b.el&&(b.type===Oe||!ti(b,I)||b.shapeFlag&70)?d(b.el):p;P(b,I,L,null,_,w,E,S,!0)}},Rt=(h,f,p,_,w,E,S)=>{if(p!==_){if(p!==ie)for(const T in p)!fs(T)&&!(T in _)&&r(h,T,p[T],null,S,f.children,w,E,Ee);for(const T in _){if(fs(T))continue;const b=_[T],I=p[T];b!==I&&T!=="value"&&r(h,T,I,b,S,f.children,w,E,Ee)}"value"in _&&r(h,"value",p.value,_.value)}},qt=(h,f,p,_,w,E,S,T,b)=>{const I=f.el=h?h.el:a(""),L=f.anchor=h?h.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:H}=f;H&&(T=T?T.concat(H):H),h==null?(i(I,p,_),i(L,p,_),Ke(f.children,p,L,w,E,S,T,b)):O>0&&O&64&&M&&h.dynamicChildren?($e(h.dynamicChildren,M,p,w,E,S,T),(f.key!=null||w&&f===w.subTree)&&uu(h,f,!0)):Y(h,f,p,L,w,E,S,T,b)},tt=(h,f,p,_,w,E,S,T,b)=>{f.slotScopeIds=T,h==null?f.shapeFlag&512?w.ctx.activate(f,p,_,S,b):Zn(f,p,_,w,E,S,b):pn(h,f,b)},Zn=(h,f,p,_,w,E,S)=>{const T=h.component=Ip(h,_,w);if(Zc(h)&&(T.ctx.renderer=A),Tp(T),T.asyncDep){if(w&&w.registerDep(T,de),!h.el){const b=T.subTree=ve(an);N(null,b,f,p)}return}de(T,h,f,p,w,E,S)},pn=(h,f,p)=>{const _=f.component=h.component;if(Od(h,f,p))if(_.asyncDep&&!_.asyncResolved){te(_,f,p);return}else _.next=f,bd(_.update),_.update();else f.el=h.el,_.vnode=f},de=(h,f,p,_,w,E,S)=>{const T=()=>{if(h.isMounted){let{next:L,bu:O,u:M,parent:H,vnode:V}=h,ne=L,ee;Yt(h,!1),L?(L.el=V.el,te(h,L,S)):L=V,O&&ds(O),(ee=L.props&&L.props.onVnodeBeforeUpdate)&&st(ee,H,L,V),Yt(h,!0);const ae=Er(h),ze=h.subTree;h.subTree=ae,P(ze,ae,d(ze.el),y(ze),h,w,E),L.el=ae.el,ne===null&&Dd(h,ae.el),M&&Le(M,w),(ee=L.props&&L.props.onVnodeUpdated)&&Le(()=>st(ee,H,L,V),w)}else{let L;const{el:O,props:M}=f,{bm:H,m:V,parent:ne}=h,ee=gs(f);if(Yt(h,!1),H&&ds(H),!ee&&(L=M&&M.onVnodeBeforeMount)&&st(L,ne,f),Yt(h,!0),O&&J){const ae=()=>{h.subTree=Er(h),J(O,h.subTree,h,w,null)};ee?f.type.__asyncLoader().then(()=>!h.isUnmounted&&ae()):ae()}else{const ae=h.subTree=Er(h);P(null,ae,p,_,h,w,E),f.el=ae.el}if(V&&Le(V,w),!ee&&(L=M&&M.onVnodeMounted)){const ae=f;Le(()=>st(L,ne,ae),w)}(f.shapeFlag&256||ne&&gs(ne.vnode)&&ne.vnode.shapeFlag&256)&&h.a&&Le(h.a,w),h.isMounted=!0,f=p=_=null}},b=h.effect=new No(T,()=>Bo(I),h.scope),I=h.update=()=>b.run();I.id=h.uid,Yt(h,!0),I()},te=(h,f,p)=>{f.component=h;const _=h.vnode.props;h.vnode=f,h.next=null,op(h,f.props,_,p),cp(h,f.children,p),Vn(),Ka(),Kn()},Y=(h,f,p,_,w,E,S,T,b=!1)=>{const I=h&&h.children,L=h?h.shapeFlag:0,O=f.children,{patchFlag:M,shapeFlag:H}=f;if(M>0){if(M&128){kt(I,O,p,_,w,E,S,T,b);return}else if(M&256){gt(I,O,p,_,w,E,S,T,b);return}}H&8?(L&16&&Ee(I,w,E),O!==I&&u(p,O)):L&16?H&16?kt(I,O,p,_,w,E,S,T,b):Ee(I,w,E,!0):(L&8&&u(p,""),H&16&&Ke(O,p,_,w,E,S,T,b))},gt=(h,f,p,_,w,E,S,T,b)=>{h=h||bn,f=f||bn;const I=h.length,L=f.length,O=Math.min(I,L);let M;for(M=0;M<O;M++){const H=f[M]=b?Nt(f[M]):rt(f[M]);P(h[M],H,p,null,w,E,S,T,b)}I>L?Ee(h,w,E,!0,!1,O):Ke(f,p,_,w,E,S,T,b,O)},kt=(h,f,p,_,w,E,S,T,b)=>{let I=0;const L=f.length;let O=h.length-1,M=L-1;for(;I<=O&&I<=M;){const H=h[I],V=f[I]=b?Nt(f[I]):rt(f[I]);if(ti(H,V))P(H,V,p,null,w,E,S,T,b);else break;I++}for(;I<=O&&I<=M;){const H=h[O],V=f[M]=b?Nt(f[M]):rt(f[M]);if(ti(H,V))P(H,V,p,null,w,E,S,T,b);else break;O--,M--}if(I>O){if(I<=M){const H=M+1,V=H<L?f[H].el:_;for(;I<=M;)P(null,f[I]=b?Nt(f[I]):rt(f[I]),p,V,w,E,S,T,b),I++}}else if(I>M)for(;I<=O;)Ne(h[I],w,E,!0),I++;else{const H=I,V=I,ne=new Map;for(I=V;I<=M;I++){const Ue=f[I]=b?Nt(f[I]):rt(f[I]);Ue.key!=null&&ne.set(Ue.key,I)}let ee,ae=0;const ze=M-V+1;let _n=!1,La=0;const ei=new Array(ze);for(I=0;I<ze;I++)ei[I]=0;for(I=H;I<=O;I++){const Ue=h[I];if(ae>=ze){Ne(Ue,w,E,!0);continue}let it;if(Ue.key!=null)it=ne.get(Ue.key);else for(ee=V;ee<=M;ee++)if(ei[ee-V]===0&&ti(Ue,f[ee])){it=ee;break}it===void 0?Ne(Ue,w,E,!0):(ei[it-V]=I+1,it>=La?La=it:_n=!0,P(Ue,f[it],p,null,w,E,S,T,b),ae++)}const Ma=_n?fp(ei):bn;for(ee=Ma.length-1,I=ze-1;I>=0;I--){const Ue=V+I,it=f[Ue],xa=Ue+1<L?f[Ue+1].el:_;ei[I]===0?P(null,it,p,xa,w,E,S,T,b):_n&&(ee<0||I!==Ma[ee]?nt(it,p,xa,2):ee--)}}},nt=(h,f,p,_,w=null)=>{const{el:E,type:S,transition:T,children:b,shapeFlag:I}=h;if(I&6){nt(h.component.subTree,f,p,_);return}if(I&128){h.suspense.move(f,p,_);return}if(I&64){S.move(h,f,p,A);return}if(S===Oe){i(E,f,p);for(let O=0;O<b.length;O++)nt(b[O],f,p,_);i(h.anchor,f,p);return}if(S===Tr){K(h,f,p);return}if(_!==2&&I&1&&T)if(_===0)T.beforeEnter(E),i(E,f,p),Le(()=>T.enter(E),w);else{const{leave:O,delayLeave:M,afterLeave:H}=T,V=()=>i(E,f,p),ne=()=>{O(E,()=>{V(),H&&H()})};M?M(E,V,ne):ne()}else i(E,f,p)},Ne=(h,f,p,_=!1,w=!1)=>{const{type:E,props:S,ref:T,children:b,dynamicChildren:I,shapeFlag:L,patchFlag:O,dirs:M}=h;if(T!=null&&to(T,null,p,h,!0),L&256){f.ctx.deactivate(h);return}const H=L&1&&M,V=!gs(h);let ne;if(V&&(ne=S&&S.onVnodeBeforeUnmount)&&st(ne,f,h),L&6)es(h.component,p,_);else{if(L&128){h.suspense.unmount(p,_);return}H&&Gt(h,null,f,"beforeUnmount"),L&64?h.type.remove(h,f,p,w,A,_):I&&(E!==Oe||O>0&&O&64)?Ee(I,f,p,!1,!0):(E===Oe&&O&384||!w&&L&16)&&Ee(b,f,p),_&&gn(h)}(V&&(ne=S&&S.onVnodeUnmounted)||H)&&Le(()=>{ne&&st(ne,f,h),H&&Gt(h,null,f,"unmounted")},p)},gn=h=>{const{type:f,el:p,anchor:_,transition:w}=h;if(f===Oe){mn(p,_);return}if(f===Tr){U(h);return}const E=()=>{s(p),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:S,delayLeave:T}=w,b=()=>S(p,E);T?T(h.el,E,b):b()}else E()},mn=(h,f)=>{let p;for(;h!==f;)p=g(h),s(h),h=p;s(f)},es=(h,f,p)=>{const{bum:_,scope:w,update:E,subTree:S,um:T}=h;_&&ds(_),w.stop(),E&&(E.active=!1,Ne(S,h,f,p)),T&&Le(T,f),Le(()=>{h.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Ee=(h,f,p,_=!1,w=!1,E=0)=>{for(let S=E;S<h.length;S++)Ne(h[S],f,p,_,w)},y=h=>h.shapeFlag&6?y(h.component.subTree):h.shapeFlag&128?h.suspense.next():g(h.anchor||h.el),k=(h,f,p)=>{h==null?f._vnode&&Ne(f._vnode,null,null,!0):P(f._vnode||null,h,f,null,null,null,p),Ka(),zc(),f._vnode=h},A={p:P,um:Ne,m:nt,r:gn,mt:Zn,mc:Ke,pc:Y,pbc:$e,n:y,o:e};let D,J;return t&&([D,J]=t(A)),{render:k,hydrate:D,createApp:sp(k,D)}}function Yt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function uu(e,t,n=!1){const i=e.children,s=t.children;if(B(i)&&B(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Nt(s[r]),a.el=o.el),n||uu(o,a)),a.type===Qs&&(a.el=o.el)}}function fp(e){const t=e.slice(),n=[0];let i,s,r,o,a;const l=e.length;for(i=0;i<l;i++){const c=e[i];if(c!==0){if(s=n[n.length-1],e[s]<c){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<c?r=a+1:o=a;c<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const dp=e=>e.__isTeleport,Oe=Symbol.for("v-fgt"),Qs=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),Tr=Symbol.for("v-stc"),di=[];let Ye=null;function le(e=!1){di.push(Ye=e?null:[])}function pp(){di.pop(),Ye=di[di.length-1]||null}let Ti=1;function nl(e){Ti+=e}function hu(e){return e.dynamicChildren=Ti>0?Ye||bn:null,pp(),Ti>0&&Ye&&Ye.push(e),e}function he(e,t,n,i,s,r){return hu(m(e,t,n,i,s,r,!0))}function gp(e,t,n,i,s){return hu(ve(e,t,n,i,s,!0))}function no(e){return e?e.__v_isVNode===!0:!1}function ti(e,t){return e.type===t.type&&e.key===t.key}const Zs="__vInternal",fu=({key:e})=>e??null,_s=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||Ce(e)||W(e)?{i:He,r:e,k:t,f:!!n}:e:null);function m(e,t=null,n=null,i=0,s=null,r=e===Oe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fu(t),ref:t&&_s(t),scopeId:Yc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:He};return a?(Vo(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=fe(n)?8:16),Ti>0&&!o&&Ye&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ye.push(l),l}const ve=mp;function mp(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===Yd)&&(e=an),no(e)){const a=Mn(e,t,!0);return n&&Vo(a,n),Ti>0&&!r&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(e)]=a:Ye.push(a)),a.patchFlag|=-2,a}if(Rp(e)&&(e=e.__vccOpts),t){t=_p(t);let{class:a,style:l}=t;a&&!fe(a)&&(t.class=Wn(a)),re(l)&&(Uc(l)&&!B(l)&&(l=pe({},l)),t.style=Oo(l))}const o=fe(e)?1:Nd(e)?128:dp(e)?64:re(e)?4:W(e)?2:0;return m(e,t,n,i,s,o,r,!0)}function _p(e){return e?Uc(e)||Zs in e?pe({},e):e:null}function Mn(e,t,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=e,a=t?vp(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&fu(a),ref:t&&t.ref?n&&s?B(s)?s.concat(_s(t)):[s,_s(t)]:_s(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mn(e.ssContent),ssFallback:e.ssFallback&&Mn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function We(e=" ",t=0){return ve(Qs,null,e,t)}function yp(e="",t=!1){return t?(le(),gp(an,null,e)):ve(an,null,e)}function rt(e){return e==null||typeof e=="boolean"?ve(an):B(e)?ve(Oe,null,e.slice()):typeof e=="object"?Nt(e):ve(Qs,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mn(e)}function Vo(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Vo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Zs in t)?t._ctx=He:s===3&&He&&(He.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:He},n=32):(t=String(t),i&64?(n=16,t=[We(t)]):n=8);e.children=t,e.shapeFlag|=n}function vp(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Wn([t.class,i.class]));else if(s==="style")t.style=Oo([t.style,i.style]);else if(Vs(s)){const r=t[s],o=i[s];o&&r!==o&&!(B(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function st(e,t,n,i=null){Xe(e,t,7,[n,i])}const wp=su();let Ep=0;function Ip(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||wp,r={uid:Ep++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ou(i,s),emitsOptions:Gc(i,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:i.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Sd.bind(null,r),e.ce&&e.ce(r),r}let ye=null,Ko,yn,il="__VUE_INSTANCE_SETTERS__";(yn=Kr()[il])||(yn=Kr()[il]=[]),yn.push(e=>ye=e),Ko=e=>{yn.length>1?yn.forEach(t=>t(e)):yn[0](e)};const xn=e=>{Ko(e),e.scope.on()},sn=()=>{ye&&ye.scope.off(),Ko(null)};function du(e){return e.vnode.shapeFlag&4}let bi=!1;function Tp(e,t=!1){bi=t;const{props:n,children:i}=e.vnode,s=du(e);rp(e,n,s,t),lp(e,i);const r=s?bp(e,t):void 0;return bi=!1,r}function bp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Fc(new Proxy(e.ctx,Xd));const{setup:i}=n;if(i){const s=e.setupContext=i.length>1?Cp(e):null;xn(e),Vn();const r=Bt(i,e,0,[e.props,s]);if(Kn(),sn(),Ec(r)){if(r.then(sn,sn),t)return r.then(o=>{sl(e,o,t)}).catch(o=>{Ys(o,e,0)});e.asyncDep=r}else sl(e,r,t)}else pu(e,t)}function sl(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=Hc(t)),pu(e,n)}let rl;function pu(e,t,n){const i=e.type;if(!e.render){if(!t&&rl&&!i.render){const s=i.template||Ho(e).template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,c=pe(pe({isCustomElement:r,delimiters:a},o),l);i.render=rl(s,c)}}e.render=i.render||Je}xn(e),Vn(),Qd(e),Kn(),sn()}function Ap(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Me(e,"get","$attrs"),t[n]}}))}function Cp(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Ap(e)},slots:e.slots,emit:e.emit,expose:t}}function er(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hc(Fc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fi)return fi[n](e)},has(t,n){return n in t||n in fi}}))}function Sp(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Rp(e){return W(e)&&"__vccOpts"in e}const Be=(e,t)=>Ed(e,t,bi);function gu(e,t,n){const i=arguments.length;return i===2?re(t)&&!B(t)?no(t)?ve(e,null,[t]):ve(e,t):ve(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&no(n)&&(n=[n]),ve(e,t,n))}const kp=Symbol.for("v-scx"),Pp=()=>ut(kp),Op="3.3.4",Dp="http://www.w3.org/2000/svg",Qt=typeof document<"u"?document:null,ol=Qt&&Qt.createElement("template"),Np={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?Qt.createElementNS(Dp,e):Qt.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Qt.createTextNode(e),createComment:e=>Qt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{ol.innerHTML=i?`<svg>${e}</svg>`:e;const a=ol.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Lp(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Mp(e,t,n){const i=e.style,s=fe(n);if(n&&!s){if(t&&!fe(t))for(const r in t)n[r]==null&&io(i,r,"");for(const r in n)io(i,r,n[r])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const al=/\s*!important$/;function io(e,t,n){if(B(n))n.forEach(i=>io(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=xp(e,t);al.test(n)?e.setProperty(Hn(i),n.replace(al,""),"important"):e[i]=n}}const ll=["Webkit","Moz","ms"],br={};function xp(e,t){const n=br[t];if(n)return n;let i=dt(t);if(i!=="filter"&&i in e)return br[t]=i;i=qs(i);for(let s=0;s<ll.length;s++){const r=ll[s]+i;if(r in e)return br[t]=r}return t}const cl="http://www.w3.org/1999/xlink";function Up(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(cl,t.slice(6,t.length)):e.setAttributeNS(cl,t,n);else{const r=$f(t);n==null||r&&!bc(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Fp(e,t,n,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=bc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function wn(e,t,n,i){e.addEventListener(t,n,i)}function $p(e,t,n,i){e.removeEventListener(t,n,i)}function Bp(e,t,n,i,s=null){const r=e._vei||(e._vei={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=jp(t);if(i){const c=r[t]=Vp(i,s);wn(e,a,c,l)}else o&&($p(e,a,o,l),r[t]=void 0)}}const ul=/(?:Once|Passive|Capture)$/;function jp(e){let t;if(ul.test(e)){t={};let i;for(;i=e.match(ul);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Hn(e.slice(2)),t]}let Ar=0;const Hp=Promise.resolve(),Wp=()=>Ar||(Hp.then(()=>Ar=0),Ar=Date.now());function Vp(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Xe(Kp(i,n.value),t,5,[i])};return n.value=e,n.attached=Wp(),n}function Kp(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const hl=/^on[a-z]/,zp=(e,t,n,i,s=!1,r,o,a,l)=>{t==="class"?Lp(e,i,s):t==="style"?Mp(e,n,i):Vs(t)?So(t)||Bp(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qp(e,t,i,s))?Fp(e,t,i,r,o,a,l):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Up(e,t,i,s))};function qp(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&hl.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||hl.test(t)&&fe(n)?!1:t in e}const fl=e=>{const t=e.props["onUpdate:modelValue"]||!1;return B(t)?n=>ds(t,n):t};function Gp(e){e.target.composing=!0}function dl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const pi={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=fl(s);const r=i||s.props&&s.props.type==="number";wn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=Vr(a)),e._assign(a)}),n&&wn(e,"change",()=>{e.value=e.value.trim()}),t||(wn(e,"compositionstart",Gp),wn(e,"compositionend",dl),wn(e,"change",dl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},r){if(e._assign=fl(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===t||(s||e.type==="number")&&Vr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Yp=["ctrl","shift","alt","meta"],Jp={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Yp.some(n=>e[`${n}Key`]&&!t.includes(n))},mu=(e,t)=>(n,...i)=>{for(let s=0;s<t.length;s++){const r=Jp[t[s]];if(r&&r(n,t))return}return e(n,...i)},Xp=pe({patchProp:zp},Np);let pl;function Qp(){return pl||(pl=up(Xp))}const Zp=(...e)=>{const t=Qp().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=eg(i);if(!s)return;const r=t._component;!W(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function eg(e){return fe(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const En=typeof window<"u";function tg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Cr(e,t){const n={};for(const i in t){const s=t[i];n[i]=Qe(s)?s.map(e):e(s)}return n}const gi=()=>{},Qe=Array.isArray,ng=/\/$/,ig=e=>e.replace(ng,"");function Sr(e,t,n="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=e(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=ag(i??t,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function sg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function gl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function rg(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Un(t.matched[i],n.matched[s])&&_u(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Un(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _u(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!og(e[n],t[n]))return!1;return!0}function og(e,t){return Qe(e)?ml(e,t):Qe(t)?ml(t,e):e===t}function ml(e,t){return Qe(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function ag(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Ai;(function(e){e.pop="pop",e.push="push"})(Ai||(Ai={}));var mi;(function(e){e.back="back",e.forward="forward",e.unknown=""})(mi||(mi={}));function lg(e){if(!e)if(En){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ig(e)}const cg=/^[^#]+#/;function ug(e,t){return e.replace(cg,"#")+t}function hg(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const tr=()=>({left:window.pageXOffset,top:window.pageYOffset});function fg(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=hg(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function _l(e,t){return(history.state?history.state.position-t:-1)+e}const so=new Map;function dg(e,t){so.set(e,t)}function pg(e){const t=so.get(e);return so.delete(e),t}let gg=()=>location.protocol+"//"+location.host;function yu(e,t){const{pathname:n,search:i,hash:s}=t,r=e.indexOf("#");if(r>-1){let a=s.includes(e.slice(r))?e.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),gl(l,"")}return gl(n,e)+i+s}function mg(e,t,n,i){let s=[],r=[],o=null;const a=({state:g})=>{const v=yu(e,location),R=n.value,P=t.value;let F=0;if(g){if(n.value=v,t.value=g,o&&o===R){o=null;return}F=P?g.position-P.position:0}else i(v);s.forEach(N=>{N(n.value,R,{delta:F,type:Ai.pop,direction:F?F>0?mi.forward:mi.back:mi.unknown})})};function l(){o=n.value}function c(g){s.push(g);const v=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return r.push(v),v}function u(){const{history:g}=window;g.state&&g.replaceState(Q({},g.state,{scroll:tr()}),"")}function d(){for(const g of r)g();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function yl(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?tr():null}}function _g(e){const{history:t,location:n}=window,i={value:yu(e,n)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=e.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:gg()+e+l;try{t[u?"replaceState":"pushState"](c,"",g),s.value=c}catch(v){console.error(v),n[u?"replace":"assign"](g)}}function o(l,c){const u=Q({},t.state,yl(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Q({},s.value,t.state,{forward:l,scroll:tr()});r(u.current,u,!0);const d=Q({},yl(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function yg(e){e=lg(e);const t=_g(e),n=mg(e,t.state,t.location,t.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Q({location:"",base:e,go:i,createHref:ug.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function vg(e){return typeof e=="string"||e&&typeof e=="object"}function vu(e){return typeof e=="string"||typeof e=="symbol"}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wu=Symbol("");var vl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(vl||(vl={}));function Fn(e,t){return Q(new Error,{type:e,[wu]:!0},t)}function mt(e,t){return e instanceof Error&&wu in e&&(t==null||!!(e.type&t))}const wl="[^/]+?",wg={sensitive:!1,strict:!1,start:!0,end:!0},Eg=/[.+*?^${}()[\]/\\]/g;function Ig(e,t){const n=Q({},wg,t),i=[];let s=n.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const g=c[d];let v=40+(n.sensitive?.25:0);if(g.type===0)d||(s+="/"),s+=g.value.replace(Eg,"\\$&"),v+=40;else if(g.type===1){const{value:R,repeatable:P,optional:F,regexp:N}=g;r.push({name:R,repeatable:P,optional:F});const x=N||wl;if(x!==wl){v+=10;try{new RegExp(`(${x})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${R}" (${x}): `+U.message)}}let K=P?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(K=F&&c.length<2?`(?:/${K})`:"/"+K),F&&(K+="?"),s+=K,v+=20,F&&(v+=-8),P&&(v+=-20),x===".*"&&(v+=-50)}u.push(v)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let g=1;g<u.length;g++){const v=u[g]||"",R=r[g-1];d[R.name]=v&&R.repeatable?v.split("/"):v}return d}function l(c){let u="",d=!1;for(const g of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const v of g)if(v.type===0)u+=v.value;else if(v.type===1){const{value:R,repeatable:P,optional:F}=v,N=R in c?c[R]:"";if(Qe(N)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const x=Qe(N)?N.join("/"):N;if(!x)if(F)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${R}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Tg(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function bg(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const r=Tg(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(El(i))return 1;if(El(s))return-1}return s.length-i.length}function El(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ag={type:0,value:""},Cg=/[a-zA-Z0-9_]/;function Sg(e){if(!e)return[[]];if(e==="/")return[[Ag]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${c}": ${v}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function g(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):g();break;case 4:g(),n=i;break;case 1:l==="("?n=2:Cg.test(l)?g():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function Rg(e,t,n){const i=Ig(Sg(e.path),n),s=Q(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function kg(e,t){const n=[],i=new Map;t=bl({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,d,g){const v=!g,R=Pg(u);R.aliasOf=g&&g.record;const P=bl(t,u),F=[R];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of K)F.push(Q({},R,{components:g?g.record.components:R.components,path:U,aliasOf:g?g.record:R}))}let N,x;for(const K of F){const{path:U}=K;if(d&&U[0]!=="/"){const ce=d.record.path,ue=ce[ce.length-1]==="/"?"":"/";K.path=d.record.path+(U&&ue+U)}if(N=Rg(K,d,P),g?g.alias.push(N):(x=x||N,x!==N&&x.alias.push(N),v&&u.name&&!Tl(N)&&o(u.name)),R.children){const ce=R.children;for(let ue=0;ue<ce.length;ue++)r(ce[ue],N,g&&g.children[ue])}g=g||N,(N.record.components&&Object.keys(N.record.components).length||N.record.name||N.record.redirect)&&l(N)}return x?()=>{o(x)}:gi}function o(u){if(vu(u)){const d=i.get(u);d&&(i.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&bg(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Eu(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Tl(u)&&i.set(u.record.name,u)}function c(u,d){let g,v={},R,P;if("name"in u&&u.name){if(g=i.get(u.name),!g)throw Fn(1,{location:u});P=g.record.name,v=Q(Il(d.params,g.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Il(u.params,g.keys.map(x=>x.name))),R=g.stringify(v)}else if("path"in u)R=u.path,g=n.find(x=>x.re.test(R)),g&&(v=g.parse(R),P=g.record.name);else{if(g=d.name?i.get(d.name):n.find(x=>x.re.test(d.path)),!g)throw Fn(1,{location:u,currentLocation:d});P=g.record.name,v=Q({},d.params,u.params),R=g.stringify(v)}const F=[];let N=g;for(;N;)F.unshift(N.record),N=N.parent;return{name:P,path:R,params:v,matched:F,meta:Dg(F)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Il(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function Pg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Og(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Og(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function Tl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dg(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function bl(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Eu(e,t){return t.children.some(n=>n===e||Eu(e,n))}const Iu=/#/g,Ng=/&/g,Lg=/\//g,Mg=/=/g,xg=/\?/g,Tu=/\+/g,Ug=/%5B/g,Fg=/%5D/g,bu=/%5E/g,$g=/%60/g,Au=/%7B/g,Bg=/%7C/g,Cu=/%7D/g,jg=/%20/g;function zo(e){return encodeURI(""+e).replace(Bg,"|").replace(Ug,"[").replace(Fg,"]")}function Hg(e){return zo(e).replace(Au,"{").replace(Cu,"}").replace(bu,"^")}function ro(e){return zo(e).replace(Tu,"%2B").replace(jg,"+").replace(Iu,"%23").replace(Ng,"%26").replace($g,"`").replace(Au,"{").replace(Cu,"}").replace(bu,"^")}function Wg(e){return ro(e).replace(Mg,"%3D")}function Vg(e){return zo(e).replace(Iu,"%23").replace(xg,"%3F")}function Kg(e){return e==null?"":Vg(e).replace(Lg,"%2F")}function Ss(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function zg(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Tu," "),o=r.indexOf("="),a=Ss(o<0?r:r.slice(0,o)),l=o<0?null:Ss(r.slice(o+1));if(a in t){let c=t[a];Qe(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Al(e){let t="";for(let n in e){const i=e[n];if(n=Wg(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Qe(i)?i.map(r=>r&&ro(r)):[i&&ro(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function qg(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Qe(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Gg=Symbol(""),Cl=Symbol(""),nr=Symbol(""),Su=Symbol(""),oo=Symbol("");function ni(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Lt(e,t,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Fn(4,{from:n,to:t})):d instanceof Error?a(d):vg(d)?a(Fn(2,{from:t,to:d})):(r&&i.enterCallbacks[s]===r&&typeof d=="function"&&r.push(d),o())},c=e.call(i&&i.instances[s],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Rr(e,t,n,i){const s=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(Yg(a)){const c=(a.__vccOpts||a)[t];c&&s.push(Lt(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=tg(c)?c.default:c;r.components[o]=u;const g=(u.__vccOpts||u)[t];return g&&Lt(g,n,i,r,o)()}))}}return s}function Yg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Sl(e){const t=ut(nr),n=ut(Su),i=Be(()=>t.resolve(Sn(e.to))),s=Be(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const g=d.findIndex(Un.bind(null,u));if(g>-1)return g;const v=Rl(l[c-2]);return c>1&&Rl(u)===v&&d[d.length-1].path!==v?d.findIndex(Un.bind(null,l[c-2])):g}),r=Be(()=>s.value>-1&&Qg(n.params,i.value.params)),o=Be(()=>s.value>-1&&s.value===n.matched.length-1&&_u(n.params,i.value.params));function a(l={}){return Xg(l)?t[Sn(e.replace)?"replace":"push"](Sn(e.to)).catch(gi):Promise.resolve()}return{route:i,href:Be(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Jg=Qc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sl,setup(e,{slots:t}){const n=Fi(Sl(e)),{options:i}=ut(nr),s=Be(()=>({[kl(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[kl(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:gu("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Ru=Jg;function Xg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qg(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Qe(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Rl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const kl=(e,t,n)=>e??t??n,Zg=Qc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=ut(oo),s=Be(()=>e.route||i.value),r=ut(Cl,0),o=Be(()=>{let c=Sn(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Be(()=>s.value.matched[o.value]);ms(Cl,Be(()=>o.value+1)),ms(Gg,a),ms(oo,s);const l=md();return ps(()=>[l.value,a.value,e.name],([c,u,d],[g,v,R])=>{u&&(u.instances[d]=c,v&&v!==u&&c&&c===g&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),c&&u&&(!v||!Un(u,v)||!g)&&(u.enterCallbacks[d]||[]).forEach(P=>P(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,d=a.value,g=d&&d.components[u];if(!g)return Pl(n.default,{Component:g,route:c});const v=d.props[u],R=v?v===!0?c.params:typeof v=="function"?v(c):v:null,F=gu(g,Q({},R,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Pl(n.default,{Component:F,route:c})||F}}});function Pl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const em=Zg;function tm(e){const t=kg(e.routes,e),n=e.parseQuery||zg,i=e.stringifyQuery||Al,s=e.history,r=ni(),o=ni(),a=ni(),l=_d(Ot);let c=Ot;En&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cr.bind(null,y=>""+y),d=Cr.bind(null,Kg),g=Cr.bind(null,Ss);function v(y,k){let A,D;return vu(y)?(A=t.getRecordMatcher(y),D=k):D=y,t.addRoute(D,A)}function R(y){const k=t.getRecordMatcher(y);k&&t.removeRoute(k)}function P(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function N(y,k){if(k=Q({},k||l.value),typeof y=="string"){const p=Sr(n,y,k.path),_=t.resolve({path:p.path},k),w=s.createHref(p.fullPath);return Q(p,_,{params:g(_.params),hash:Ss(p.hash),redirectedFrom:void 0,href:w})}let A;if("path"in y)A=Q({},y,{path:Sr(n,y.path,k.path).path});else{const p=Q({},y.params);for(const _ in p)p[_]==null&&delete p[_];A=Q({},y,{params:d(p)}),k.params=d(k.params)}const D=t.resolve(A,k),J=y.hash||"";D.params=u(g(D.params));const h=sg(i,Q({},y,{hash:Hg(J),path:D.path})),f=s.createHref(h);return Q({fullPath:h,hash:J,query:i===Al?qg(y.query):y.query||{}},D,{redirectedFrom:void 0,href:f})}function x(y){return typeof y=="string"?Sr(n,y,l.value.path):Q({},y)}function K(y,k){if(c!==y)return Fn(8,{from:k,to:y})}function U(y){return xe(y)}function ce(y){return U(Q(x(y),{replace:!0}))}function ue(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:A}=k;let D=typeof A=="function"?A(y):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=x(D):{path:D},D.params={}),Q({query:y.query,hash:y.hash,params:"path"in D?{}:y.params},D)}}function xe(y,k){const A=c=N(y),D=l.value,J=y.state,h=y.force,f=y.replace===!0,p=ue(A);if(p)return xe(Q(x(p),{state:typeof p=="object"?Q({},J,p.state):J,force:h,replace:f}),k||A);const _=A;_.redirectedFrom=k;let w;return!h&&rg(i,D,A)&&(w=Fn(16,{to:_,from:D}),nt(D,D,!0,!1)),(w?Promise.resolve(w):$e(_,D)).catch(E=>mt(E)?mt(E,2)?E:kt(E):Y(E,_,D)).then(E=>{if(E){if(mt(E,2))return xe(Q({replace:f},x(E.to),{state:typeof E.to=="object"?Q({},J,E.to.state):J,force:h}),k||_)}else E=qt(_,D,!0,f,J);return Rt(_,D,E),E})}function Ke(y,k){const A=K(y,k);return A?Promise.reject(A):Promise.resolve()}function et(y){const k=mn.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(y):y()}function $e(y,k){let A;const[D,J,h]=nm(y,k);A=Rr(D.reverse(),"beforeRouteLeave",y,k);for(const p of D)p.leaveGuards.forEach(_=>{A.push(Lt(_,y,k))});const f=Ke.bind(null,y,k);return A.push(f),Ee(A).then(()=>{A=[];for(const p of r.list())A.push(Lt(p,y,k));return A.push(f),Ee(A)}).then(()=>{A=Rr(J,"beforeRouteUpdate",y,k);for(const p of J)p.updateGuards.forEach(_=>{A.push(Lt(_,y,k))});return A.push(f),Ee(A)}).then(()=>{A=[];for(const p of y.matched)if(p.beforeEnter&&!k.matched.includes(p))if(Qe(p.beforeEnter))for(const _ of p.beforeEnter)A.push(Lt(_,y,k));else A.push(Lt(p.beforeEnter,y,k));return A.push(f),Ee(A)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),A=Rr(h,"beforeRouteEnter",y,k),A.push(f),Ee(A))).then(()=>{A=[];for(const p of o.list())A.push(Lt(p,y,k));return A.push(f),Ee(A)}).catch(p=>mt(p,8)?p:Promise.reject(p))}function Rt(y,k,A){for(const D of a.list())et(()=>D(y,k,A))}function qt(y,k,A,D,J){const h=K(y,k);if(h)return h;const f=k===Ot,p=En?history.state:{};A&&(D||f?s.replace(y.fullPath,Q({scroll:f&&p&&p.scroll},J)):s.push(y.fullPath,J)),l.value=y,nt(y,k,A,f),kt()}let tt;function Zn(){tt||(tt=s.listen((y,k,A)=>{if(!es.listening)return;const D=N(y),J=ue(D);if(J){xe(Q(J,{replace:!0}),D).catch(gi);return}c=D;const h=l.value;En&&dg(_l(h.fullPath,A.delta),tr()),$e(D,h).catch(f=>mt(f,12)?f:mt(f,2)?(xe(f.to,D).then(p=>{mt(p,20)&&!A.delta&&A.type===Ai.pop&&s.go(-1,!1)}).catch(gi),Promise.reject()):(A.delta&&s.go(-A.delta,!1),Y(f,D,h))).then(f=>{f=f||qt(D,h,!1),f&&(A.delta&&!mt(f,8)?s.go(-A.delta,!1):A.type===Ai.pop&&mt(f,20)&&s.go(-1,!1)),Rt(D,h,f)}).catch(gi)}))}let pn=ni(),de=ni(),te;function Y(y,k,A){kt(y);const D=de.list();return D.length?D.forEach(J=>J(y,k,A)):console.error(y),Promise.reject(y)}function gt(){return te&&l.value!==Ot?Promise.resolve():new Promise((y,k)=>{pn.add([y,k])})}function kt(y){return te||(te=!y,Zn(),pn.list().forEach(([k,A])=>y?A(y):k()),pn.reset()),y}function nt(y,k,A,D){const{scrollBehavior:J}=e;if(!En||!J)return Promise.resolve();const h=!A&&pg(_l(y.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return Vc().then(()=>J(y,k,h)).then(f=>f&&fg(f)).catch(f=>Y(f,y,k))}const Ne=y=>s.go(y);let gn;const mn=new Set,es={currentRoute:l,listening:!0,addRoute:v,removeRoute:R,hasRoute:F,getRoutes:P,resolve:N,options:e,push:U,replace:ce,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:gt,install(y){const k=this;y.component("RouterLink",Ru),y.component("RouterView",em),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Sn(l)}),En&&!gn&&l.value===Ot&&(gn=!0,U(s.location).catch(J=>{}));const A={};for(const J in Ot)A[J]=Be(()=>l.value[J]);y.provide(nr,k),y.provide(Su,Fi(A)),y.provide(oo,l);const D=y.unmount;mn.add(y),y.unmount=function(){mn.delete(y),mn.size<1&&(c=Ot,tt&&tt(),tt=null,l.value=Ot,gn=!1,te=!1),D()}}};function Ee(y){return y.reduce((k,A)=>k.then(()=>et(A)),Promise.resolve())}return es}function nm(e,t){const n=[],i=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(c=>Un(c,a))?i.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>Un(c,l))||s.push(l))}return[n,i,s]}function im(){return ut(nr)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},sm=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Pu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let g=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(g=64)),i.push(n[u],n[d],n[g],n[v])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ku(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new rm;const g=r<<2|a>>4;if(i.push(g),c!==64){const v=a<<4&240|c>>2;if(i.push(v),d!==64){const R=c<<6&192|d;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class rm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const om=function(e){const t=ku(e);return Pu.encodeByteArray(t,!0)},Rs=function(e){return om(e).replace(/\./g,"")},Ou=function(e){try{return Pu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=()=>am().__FIREBASE_DEFAULTS__,cm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},um=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ou(e[1]);return t&&JSON.parse(t)},qo=()=>{try{return lm()||cm()||um()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Du=e=>{var t,n;return(n=(t=qo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hm=e=>{const t=Du(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Nu=()=>{var e;return(e=qo())===null||e===void 0?void 0:e.config},Lu=e=>{var t;return(t=qo())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Rs(JSON.stringify(n)),Rs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function gm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function mm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _m(){const e=ke();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ym(){try{return typeof indexedDB=="object"}catch{return!1}}function vm(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="FirebaseError";class Ct extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=wm,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Em(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ct(s,a,i)}}function Em(e,t){return e.replace(Im,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Im=/\{\$([^}]+)}/g;function Tm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ks(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(Ol(r)&&Ol(o)){if(!ks(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ol(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ai(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function li(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function bm(e,t){const n=new Am(e,t);return n.subscribe.bind(n)}class Am{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Cm(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=kr),s.error===void 0&&(s.error=kr),s.complete===void 0&&(s.complete=kr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function kr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){return e&&e._delegate?e._delegate:e}class ln{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new fm;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(km(t))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Jt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jt){return this.instances.has(t)}getOptions(t=Jt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Rm(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Jt){return this.component?this.component.multipleInstances?t:Jt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rm(e){return e===Jt?void 0:e}function km(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Sm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(X||(X={}));const Om={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Dm=X.INFO,Nm={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Lm=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=Nm[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Go{constructor(t){this.name=t,this._logLevel=Dm,this._logHandler=Lm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in X))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Om[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...t),this._logHandler(this,X.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...t),this._logHandler(this,X.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,X.INFO,...t),this._logHandler(this,X.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,X.WARN,...t),this._logHandler(this,X.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...t),this._logHandler(this,X.ERROR,...t)}}const Mm=(e,t)=>t.some(n=>e instanceof n);let Dl,Nl;function xm(){return Dl||(Dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Um(){return Nl||(Nl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mu=new WeakMap,ao=new WeakMap,xu=new WeakMap,Pr=new WeakMap,Yo=new WeakMap;function Fm(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(jt(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Mu.set(n,e)}).catch(()=>{}),Yo.set(t,e),t}function $m(e){if(ao.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});ao.set(e,t)}let lo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ao.get(e);if(t==="objectStoreNames")return e.objectStoreNames||xu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bm(e){lo=e(lo)}function jm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Or(this),t,...n);return xu.set(i,t.sort?t.sort():[t]),jt(i)}:Um().includes(e)?function(...t){return e.apply(Or(this),t),jt(Mu.get(this))}:function(...t){return jt(e.apply(Or(this),t))}}function Hm(e){return typeof e=="function"?jm(e):(e instanceof IDBTransaction&&$m(e),Mm(e,xm())?new Proxy(e,lo):e)}function jt(e){if(e instanceof IDBRequest)return Fm(e);if(Pr.has(e))return Pr.get(e);const t=Hm(e);return t!==e&&(Pr.set(e,t),Yo.set(t,e)),t}const Or=e=>Yo.get(e);function Wm(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=jt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(jt(o.result),l.oldVersion,l.newVersion,jt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Vm=["get","getKey","getAll","getAllKeys","count"],Km=["put","add","delete","clear"],Dr=new Map;function Ll(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Dr.get(t))return Dr.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Km.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Vm.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Dr.set(t,r),r}Bm(e=>({...e,get:(t,n,i)=>Ll(t,n)||e.get(t,n,i),has:(t,n)=>!!Ll(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qm(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function qm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const co="@firebase/app",Ml="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Go("@firebase/app"),Gm="@firebase/app-compat",Ym="@firebase/analytics-compat",Jm="@firebase/analytics",Xm="@firebase/app-check-compat",Qm="@firebase/app-check",Zm="@firebase/auth",e_="@firebase/auth-compat",t_="@firebase/database",n_="@firebase/database-compat",i_="@firebase/functions",s_="@firebase/functions-compat",r_="@firebase/installations",o_="@firebase/installations-compat",a_="@firebase/messaging",l_="@firebase/messaging-compat",c_="@firebase/performance",u_="@firebase/performance-compat",h_="@firebase/remote-config",f_="@firebase/remote-config-compat",d_="@firebase/storage",p_="@firebase/storage-compat",g_="@firebase/firestore",m_="@firebase/firestore-compat",__="firebase",y_="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="[DEFAULT]",v_={[co]:"fire-core",[Gm]:"fire-core-compat",[Jm]:"fire-analytics",[Ym]:"fire-analytics-compat",[Qm]:"fire-app-check",[Xm]:"fire-app-check-compat",[Zm]:"fire-auth",[e_]:"fire-auth-compat",[t_]:"fire-rtdb",[n_]:"fire-rtdb-compat",[i_]:"fire-fn",[s_]:"fire-fn-compat",[r_]:"fire-iid",[o_]:"fire-iid-compat",[a_]:"fire-fcm",[l_]:"fire-fcm-compat",[c_]:"fire-perf",[u_]:"fire-perf-compat",[h_]:"fire-rc",[f_]:"fire-rc-compat",[d_]:"fire-gcs",[p_]:"fire-gcs-compat",[g_]:"fire-fst",[m_]:"fire-fst-compat","fire-js":"fire-js",[__]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Map,ho=new Map;function w_(e,t){try{e.container.addComponent(t)}catch(n){cn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $n(e){const t=e.name;if(ho.has(t))return cn.debug(`There were multiple attempts to register component ${t}.`),!1;ho.set(t,e);for(const n of Ps.values())w_(n,e);return!0}function Jo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new $i("app","Firebase",E_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=y_;function Uu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:uo,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Ht.create("bad-app-name",{appName:String(s)});if(n||(n=Nu()),!n)throw Ht.create("no-options");const r=Ps.get(s);if(r){if(ks(n,r.options)&&ks(i,r.config))return r;throw Ht.create("duplicate-app",{appName:s})}const o=new Pm(s);for(const l of ho.values())o.addComponent(l);const a=new I_(n,i,o);return Ps.set(s,a),a}function Fu(e=uo){const t=Ps.get(e);if(!t&&e===uo&&Nu())return Uu();if(!t)throw Ht.create("no-app",{appName:e});return t}function Wt(e,t,n){var i;let s=(i=v_[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}$n(new ln(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="firebase-heartbeat-database",b_=1,Ci="firebase-heartbeat-store";let Nr=null;function $u(){return Nr||(Nr=Wm(T_,b_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ci)}}}).catch(e=>{throw Ht.create("idb-open",{originalErrorMessage:e.message})})),Nr}async function A_(e){try{return await(await $u()).transaction(Ci).objectStore(Ci).get(Bu(e))}catch(t){if(t instanceof Ct)cn.warn(t.message);else{const n=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});cn.warn(n.message)}}}async function xl(e,t){try{const i=(await $u()).transaction(Ci,"readwrite");await i.objectStore(Ci).put(t,Bu(e)),await i.done}catch(n){if(n instanceof Ct)cn.warn(n.message);else{const i=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(i.message)}}}function Bu(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=1024,S_=30*24*60*60*1e3;class R_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new P_(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ul();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=S_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ul(),{heartbeatsToSend:n,unsentEntries:i}=k_(this._heartbeatsCache.heartbeats),s=Rs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ul(){return new Date().toISOString().substring(0,10)}function k_(e,t=C_){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Fl(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fl(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class P_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ym()?vm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await A_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Fl(e){return Rs(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(e){$n(new ln("platform-logger",t=>new zm(t),"PRIVATE")),$n(new ln("heartbeat",t=>new R_(t),"PRIVATE")),Wt(co,Ml,e),Wt(co,Ml,"esm2017"),Wt("fire-js","")}O_("");function Xo(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n}function ju(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D_=ju,Hu=new $i("auth","Firebase",ju());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new Go("@firebase/auth");function N_(e,...t){Os.logLevel<=X.WARN&&Os.warn(`Auth (${zn}): ${e}`,...t)}function ys(e,...t){Os.logLevel<=X.ERROR&&Os.error(`Auth (${zn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e,...t){throw Qo(e,...t)}function ht(e,...t){return Qo(e,...t)}function L_(e,t,n){const i=Object.assign(Object.assign({},D_()),{[t]:n});return new $i("auth","Firebase",i).create(t,{appName:e.name})}function Qo(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Hu.create(e,...t)}function $(e,t,...n){if(!e)throw Qo(t,...n)}function yt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ys(t),new Error(t)}function Tt(e,t){e||yt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function M_(){return $l()==="http:"||$l()==="https:"}function $l(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M_()||gm()||"connection"in navigator)?navigator.onLine:!0}function U_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,n){this.shortDelay=t,this.longDelay=n,Tt(n>t,"Short delay should be less than long delay!"),this.isMobile=pm()||mm()}get(){return x_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(e,t){Tt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new ji(3e4,6e4);function qn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function fn(e,t,n,i,s={}){return Vu(e,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=Bi(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Wu.fetch()(Ku(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},r))})}async function Vu(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},F_),t);try{const s=new B_(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw as(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw as(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw as(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw as(e,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw L_(e,u,c);Ze(e,u)}}catch(s){if(s instanceof Ct)throw s;Ze(e,"network-request-failed",{message:String(s)})}}async function Hi(e,t,n,i,s={}){const r=await fn(e,t,n,i,s);return"mfaPendingCredential"in r&&Ze(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Ku(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?Zo(e.config,s):`${e.config.apiScheme}://${s}`}class B_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ht(this.auth,"network-request-failed")),$_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function as(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ht(e,t,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(e,t){return fn(e,"POST","/v1/accounts:delete",t)}async function H_(e,t){return fn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function W_(e,t=!1){const n=St(e),i=await n.getIdToken(t),s=ea(i);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:_i(Lr(s.auth_time)),issuedAtTime:_i(Lr(s.iat)),expirationTime:_i(Lr(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Lr(e){return Number(e)*1e3}function ea(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ou(n);return s?JSON.parse(s):(ys("Failed to decode base64 JWT payload"),null)}catch(s){return ys("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function V_(e){const t=ea(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof Ct&&K_(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function K_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Bn(e,H_(n,{idToken:i}));$(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?Y_(r.providerUserInfo):[],a=G_(e.providerData,o),l=e.isAnonymous,c=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new zu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function q_(e){const t=St(e);await Ds(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function G_(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function Y_(e){return e.map(t=>{var{providerId:n}=t,i=Xo(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(e,t){const n=await Vu(e,{},async()=>{const i=Bi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=Ku(e,s,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wu.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):V_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return $(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await J_(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Si;return i&&($(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&($(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&($(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class rn{constructor(t){var{uid:n,auth:i,stsTokenManager:s}=t,r=Xo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new zu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await Bn(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return W_(this,t)}reload(){return q_(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new rn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await Ds(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Bn(this,j_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,s,r,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:U,isAnonymous:ce,providerData:ue,stsTokenManager:xe}=n;$(K&&xe,t,"internal-error");const Ke=Si.fromJSON(this.name,xe);$(typeof K=="string",t,"internal-error"),Dt(d,t.name),Dt(g,t.name),$(typeof U=="boolean",t,"internal-error"),$(typeof ce=="boolean",t,"internal-error"),Dt(v,t.name),Dt(R,t.name),Dt(P,t.name),Dt(F,t.name),Dt(N,t.name),Dt(x,t.name);const et=new rn({uid:K,auth:t,email:g,emailVerified:U,displayName:d,isAnonymous:ce,photoURL:R,phoneNumber:v,tenantId:P,stsTokenManager:Ke,createdAt:N,lastLoginAt:x});return ue&&Array.isArray(ue)&&(et.providerData=ue.map($e=>Object.assign({},$e))),F&&(et._redirectEventId=F),et}static async _fromIdTokenResponse(t,n,i=!1){const s=new Si;s.updateFromServerResponse(n);const r=new rn({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Ds(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Map;function vt(e){Tt(e instanceof Function,"Expected a class definition");let t=Bl.get(e);return t?(Tt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bl.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}qu.type="NONE";const jl=qu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(e,t,n){return`firebase:${e}:${t}:${n}`}class kn{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=vs(this.userKey,s.apiKey,r),this.fullPersistenceKey=vs("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new kn(vt(jl),t,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||vt(jl);const o=vs(i,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=rn._fromJSON(t,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new kn(r,t,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new kn(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ju(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Gu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Qu(t))return"Blackberry";if(Zu(t))return"Webos";if(ta(t))return"Safari";if((t.includes("chrome/")||Yu(t))&&!t.includes("edge/"))return"Chrome";if(Xu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Gu(e=ke()){return/firefox\//i.test(e)}function ta(e=ke()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Yu(e=ke()){return/crios\//i.test(e)}function Ju(e=ke()){return/iemobile/i.test(e)}function Xu(e=ke()){return/android/i.test(e)}function Qu(e=ke()){return/blackberry/i.test(e)}function Zu(e=ke()){return/webos/i.test(e)}function ir(e=ke()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function X_(e=ke()){var t;return ir(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Q_(){return _m()&&document.documentMode===10}function eh(e=ke()){return ir(e)||Xu(e)||Zu(e)||Qu(e)||/windows phone/i.test(e)||Ju(e)}function Z_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e,t=[]){let n;switch(e){case"Browser":n=Hl(ke());break;case"Worker":n=`${Hl(ke())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${i}`}async function nh(e,t){return fn(e,"GET","/v2/recaptchaConfig",qn(e,t))}function Wl(e){return e!==void 0&&e.enterprise!==void 0}class ih{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function sh(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=ht("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",ey().appendChild(i)})}function ty(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const ny="https://www.google.com/recaptcha/enterprise.js?render=",iy="recaptcha-enterprise",sy="NO_RECAPTCHA";class rh{constructor(t){this.type=iy,this.auth=Gn(t)}async verify(t="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{nh(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ih(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Wl(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:t}).then(c=>{o(c)}).catch(()=>{o(sy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&Wl(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}sh(ny+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ns(e,t,n,i=!1){const s=new rh(e);let r;try{r=await s.verify(n)}catch{r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((o,a)=>{try{const l=t(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vl(this),this.idTokenSubscription=new Vl(this),this.beforeStateQueue=new ry(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=vt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await kn.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ds(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=U_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?St(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(t))})}async initializeRecaptchaConfig(){const t=await nh(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ih(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new rh(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new $i("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&vt(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?t.addObserver(n,i,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&N_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gn(e){return St(e)}class Vl{constructor(t){this.auth=t,this.observer=null,this.addObserver=bm(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(e,t){const n=Jo(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(ks(r,t??{}))return s;Ze(s,"already-initialized")}return n.initialize({options:t})}function ly(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(vt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function cy(e,t,n){const i=Gn(e);$(i._canInitEmulator,i,"emulator-config-failed"),$(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=oh(t),{host:o,port:a}=uy(t),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||hy()}function oh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function uy(e){const t=oh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Kl(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Kl(o)}}}function Kl(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function hy(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return yt("not implemented")}_getIdTokenResponse(t){return yt("not implemented")}_linkToIdToken(t,n){return yt("not implemented")}_getReauthenticationResolver(t){return yt("not implemented")}}async function fy(e,t){return fn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(e,t){return Hi(e,"POST","/v1/accounts:signInWithPassword",qn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(e,t){return Hi(e,"POST","/v1/accounts:signInWithEmailLink",qn(e,t))}async function py(e,t){return Hi(e,"POST","/v1/accounts:signInWithEmailLink",qn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends na{constructor(t,n,i,s=null){super("password",i),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Ri(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new Ri(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Ns(t,i,"signInWithPassword");return Mr(t,s)}else return Mr(t,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Ns(t,i,"signInWithPassword");return Mr(t,r)}else return Promise.reject(s)});case"emailLink":return dy(t,{email:this._email,oobCode:this._password});default:Ze(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return fy(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return py(t,{idToken:n,email:this._email,oobCode:this._password});default:Ze(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(e,t){return Hi(e,"POST","/v1/accounts:signInWithIdp",qn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="http://localhost";class un extends na{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new un(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=n,r=Xo(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new un(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Pn(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Pn(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Pn(t,n)}buildRequest(){const t={requestUri:gy,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Bi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _y(e){const t=ai(li(e)).link,n=t?ai(li(t)).deep_link_id:null,i=ai(li(e)).deep_link_id;return(i?ai(li(i)).link:null)||i||n||t||e}class ia{constructor(t){var n,i,s,r,o,a;const l=ai(li(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=my((s=l.mode)!==null&&s!==void 0?s:null);$(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=_y(t);try{return new ia(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.providerId=Yn.PROVIDER_ID}static credential(t,n){return Ri._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=ia.parseLink(n);return $(i,"argument-error"),Ri._fromEmailAndCode(t,i.code,i.tenantId)}}Yn.PROVIDER_ID="password";Yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends ah{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Wi{constructor(){super("facebook.com")}static credential(t){return un._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return un._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return xt.credential(n,i)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Wi{constructor(){super("github.com")}static credential(t){return un._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ut.credential(t.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Wi{constructor(){super("twitter.com")}static credential(t,n){return un._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Ft.credential(n,i)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(e,t){return Hi(e,"POST","/v1/accounts:signUp",qn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await rn._fromIdTokenResponse(t,i,s),o=zl(i);return new hn({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=zl(i);return new hn({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function zl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Ct{constructor(t,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ls.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new Ls(t,n,i,s)}}function lh(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ls._fromErrorAndOperation(e,r,t,i):r})}async function yy(e,t,n=!1){const i=await Bn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return hn._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Bn(e,lh(i,s,t,e),n);$(r.idToken,i,"internal-error");const o=ea(r.idToken);$(o,i,"internal-error");const{sub:a}=o;return $(e.uid===a,i,"user-mismatch"),hn._forOperation(e,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ze(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ch(e,t,n=!1){const i="signIn",s=await lh(e,i,t),r=await hn._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function wy(e,t){return ch(Gn(e),t)}async function Ey(e,t,n){var i;const s=Gn(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await Ns(s,r,"signUpPassword");o=xr(s,c)}else o=xr(s,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ns(s,r,"signUpPassword");return xr(s,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await hn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function Iy(e,t,n){return wy(St(e),Yn.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(e,t){return fn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const i=St(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Bn(i,Ty(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Ay(e,t,n,i){return St(e).onIdTokenChanged(t,n,i)}function Cy(e,t,n){return St(e).beforeAuthStateChanged(t,n)}function Sy(e){return St(e).signOut()}const Ms="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ms,"1"),this.storage.removeItem(Ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(){const e=ke();return ta(e)||ir(e)}const ky=1e3,Py=10;class hh extends uh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ry()&&Z_(),this.fallbackToPolling=eh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Q_()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Py):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},ky)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}hh.type="LOCAL";const Oy=hh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends uh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}fh.type="SESSION";const dh=fh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new sr(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Dy(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=sa("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(g.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return window}function Ly(e){ft().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function My(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xy(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Uy(){return ph()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="firebaseLocalStorageDb",Fy=1,xs="firebaseLocalStorage",mh="fbase_key";class Vi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rr(e,t){return e.transaction([xs],t?"readwrite":"readonly").objectStore(xs)}function $y(){const e=indexedDB.deleteDatabase(gh);return new Vi(e).toPromise()}function po(){const e=indexedDB.open(gh,Fy);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(xs,{keyPath:mh})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(xs)?t(i):(i.close(),await $y(),t(await po()))})})}async function ql(e,t,n){const i=rr(e,!0).put({[mh]:t,value:n});return new Vi(i).toPromise()}async function By(e,t){const n=rr(e,!1).get(t),i=await new Vi(n).toPromise();return i===void 0?null:i.value}function Gl(e,t){const n=rr(e,!0).delete(t);return new Vi(n).toPromise()}const jy=800,Hy=3;class _h{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await po(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>Hy)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ph()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sr._getInstance(Uy()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await My(),!this.activeServiceWorker)return;this.sender=new Ny(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||xy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await po();return await ql(t,Ms,"1"),await Gl(t,Ms),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ql(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>By(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gl(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=rr(s,!1).getAll();return new Vi(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_h.type="LOCAL";const Wy=_h;new ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(e,t){return t?vt(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends na{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Pn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Pn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Pn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Ky(e){return ch(e.auth,new ra(e),e.bypassAuthState)}function zy(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),vy(n,new ra(e),e.bypassAuthState)}async function qy(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),yy(n,new ra(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ky;case"linkViaPopup":case"linkViaRedirect":return qy;case"reauthViaPopup":case"reauthViaRedirect":return zy;default:Ze(this.auth,"internal-error")}}resolve(t){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=new ji(2e3,1e4);class In extends yh{constructor(t,n,i,s,r){super(t,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const t=sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Gy.get())};t()}}In.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="pendingRedirect",ws=new Map;class Jy extends yh{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=ws.get(this.auth._key());if(!t){try{const i=await Xy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}ws.set(this.auth._key(),t)}return this.bypassAuthState||ws.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xy(e,t){const n=ev(t),i=Zy(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Qy(e,t){ws.set(e._key(),t)}function Zy(e){return vt(e._redirectPersistence)}function ev(e){return vs(Yy,e.config.apiKey,e.name)}async function tv(e,t,n=!1){const i=Gn(e),s=Vy(i,t),o=await new Jy(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=10*60*1e3;class iv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!sv(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!vh(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=nv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yl(t))}saveEventToCache(t){this.cachedEventUids.add(Yl(t)),this.lastProcessedEventTime=Date.now()}}function Yl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function vh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function sv(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vh(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(e,t={}){return fn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,av=/^https?/;async function lv(e){if(e.config.emulator)return;const{authorizedDomains:t}=await rv(e);for(const n of t)try{if(cv(n))return}catch{}Ze(e,"unauthorized-domain")}function cv(e){const t=fo(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!av.test(n))return!1;if(ov.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new ji(3e4,6e4);function Jl(){const e=ft().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function hv(e){return new Promise((t,n)=>{var i,s,r;function o(){Jl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Jl(),n(ht(e,"network-request-failed"))},timeout:uv.get()})}if(!((s=(i=ft().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=ft().gapi)===null||r===void 0)&&r.load)o();else{const a=ty("iframefcb");return ft()[a]=()=>{gapi.load?o():n(ht(e,"network-request-failed"))},sh(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Es=null,t})}let Es=null;function fv(e){return Es=Es||hv(e),Es}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new ji(5e3,15e3),pv="__/auth/iframe",gv="emulator/auth/iframe",mv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_v=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yv(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Zo(t,gv):`https://${e.config.authDomain}/${pv}`,i={apiKey:t.apiKey,appName:e.name,v:zn},s=_v.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Bi(i).slice(1)}`}async function vv(e){const t=await fv(e),n=ft().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:yv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mv,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ht(e,"network-request-failed"),a=ft().setTimeout(()=>{r(o)},dv.get());function l(){ft().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ev=500,Iv=600,Tv="_blank",bv="http://localhost";class Xl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Av(e,t,n,i=Ev,s=Iv){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wv),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ke().toLowerCase();n&&(a=Yu(c)?Tv:n),Gu(c)&&(t=t||bv,l.scrollbars="yes");const u=Object.entries(l).reduce((g,[v,R])=>`${g}${v}=${R},`,"");if(X_(c)&&a!=="_self")return Cv(t||"",a),new Xl(null);const d=window.open(t||"",a,u);$(d,e,"popup-blocked");try{d.focus()}catch{}return new Xl(d)}function Cv(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="__/auth/handler",Rv="emulator/auth/handler",kv=encodeURIComponent("fac");async function Ql(e,t,n,i,s,r){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:zn,eventId:s};if(t instanceof ah){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Tm(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(t instanceof Wi){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${kv}=${encodeURIComponent(l)}`:"";return`${Pv(e)}?${Bi(a).slice(1)}${c}`}function Pv({config:e}){return e.emulator?Zo(e,Rv):`https://${e.authDomain}/${Sv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="webStorageSupport";class Ov{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dh,this._completeRedirectFn=tv,this._overrideRedirectResult=Qy}async _openPopup(t,n,i,s){var r;Tt((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ql(t,n,i,fo(),s);return Av(t,o,sa())}async _openRedirect(t,n,i,s){await this._originValidation(t);const r=await Ql(t,n,i,fo(),s);return Ly(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Tt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await vv(t),i=new iv(t);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ur,{type:Ur},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ur];o!==void 0&&n(!!o),Ze(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lv(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return eh()||ta()||ir()}}const Dv=Ov;var Zl="@firebase/auth",ec="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mv(e){$n(new ln("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:th(e)},c=new oy(i,s,r,l);return ly(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),$n(new ln("auth-internal",t=>{const n=Gn(t.getProvider("auth").getImmediate());return(i=>new Nv(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Zl,ec,Lv(e)),Wt(Zl,ec,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=5*60,Uv=Lu("authIdTokenMaxAge")||xv;let tc=null;const Fv=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Uv)return;const s=n==null?void 0:n.token;tc!==s&&(tc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $v(e=Fu()){const t=Jo(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ay(e,{popupRedirectResolver:Dv,persistence:[Wy,Oy,dh]}),i=Lu("authTokenSyncURL");if(i){const r=Fv(i);Cy(n,r,()=>r(n.currentUser)),Ay(n,o=>r(o))}const s=Du("auth");return s&&cy(n,`http://${s}`),n}Mv("Browser");var Bv="firebase",jv="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(Bv,jv,"app");var Hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,oa=oa||{},j=Hv||self;function or(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ki(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Wv(e){return Object.prototype.hasOwnProperty.call(e,Fr)&&e[Fr]||(e[Fr]=++Vv)}var Fr="closure_uid_"+(1e9*Math.random()>>>0),Vv=0;function Kv(e,t,n){return e.call.apply(e.bind,arguments)}function zv(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Se(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Se=Kv:Se=zv,Se.apply(null,arguments)}function ls(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function me(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function Kt(){this.s=this.s,this.o=this.o}var qv=0;Kt.prototype.s=!1;Kt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),qv!=0)&&Wv(this)};Kt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function aa(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function nc(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(or(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function Re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var Gv=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{j.addEventListener("test",()=>{},t),j.removeEventListener("test",()=>{},t)}catch{}return e}();function ki(e){return/^[\s\xa0]*$/.test(e)}function ar(){var e=j.navigator;return e&&(e=e.userAgent)?e:""}function at(e){return ar().indexOf(e)!=-1}function la(e){return la[" "](e),e}la[" "]=function(){};function Yv(e,t){var n=H0;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Jv=at("Opera"),Pi=at("Trident")||at("MSIE"),Eh=at("Edge"),go=Eh||Pi,Ih=at("Gecko")&&!(ar().toLowerCase().indexOf("webkit")!=-1&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),Xv=ar().toLowerCase().indexOf("webkit")!=-1&&!at("Edge");function Th(){var e=j.document;return e?e.documentMode:void 0}e:{var ic="",$r=function(){var e=ar();if(Ih)return/rv:([^\);]+)(\)|;)/.exec(e);if(Eh)return/Edge\/([\d\.]+)/.exec(e);if(Pi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Xv)return/WebKit\/(\S+)/.exec(e);if(Jv)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if($r&&(ic=$r?$r[1]:""),Pi){var sc=Th();if(sc!=null&&sc>parseFloat(ic))break e}}j.document&&Pi&&Th();function Oi(e,t){if(Re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ih){e:{try{la(t.nodeName);var s=!0;break e}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Qv[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Oi.$.h.call(this)}}me(Oi,Re);var Qv={2:"touch",3:"pen",4:"mouse"};Oi.prototype.h=function(){Oi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var zi="closure_listenable_"+(1e6*Math.random()|0),Zv=0;function e0(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++Zv,this.fa=this.ia=!1}function lr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ca(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function t0(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function bh(e){const t={};for(const n in e)t[n]=e[n];return t}const rc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ah(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<rc.length;r++)n=rc[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function cr(e){this.src=e,this.g={},this.h=0}cr.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=_o(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new e0(t,this.src,r,!!i,s),t.ia=n,e.push(t)),t};function mo(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=wh(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(lr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function _o(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}var ua="closure_lm_"+(1e6*Math.random()|0),Br={};function Ch(e,t,n,i,s){if(i&&i.once)return Rh(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ch(e,t[r],n,i,s);return null}return n=da(n),e&&e[zi]?e.O(t,n,Ki(i)?!!i.capture:!!i,s):Sh(e,t,n,!1,i,s)}function Sh(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=Ki(s)?!!s.capture:!!s,a=fa(e);if(a||(e[ua]=a=new cr(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=n0(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Gv||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(Ph(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function n0(){function e(n){return t.call(e.src,e.listener,n)}const t=i0;return e}function Rh(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Rh(e,t[r],n,i,s);return null}return n=da(n),e&&e[zi]?e.P(t,n,Ki(i)?!!i.capture:!!i,s):Sh(e,t,n,!0,i,s)}function kh(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)kh(e,t[r],n,i,s);else i=Ki(i)?!!i.capture:!!i,n=da(n),e&&e[zi]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=_o(r,n,i,s),-1<n&&(lr(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=fa(e))&&(t=e.g[t.toString()],e=-1,t&&(e=_o(t,n,i,s)),(n=-1<e?t[e]:null)&&ha(n))}function ha(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[zi])mo(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Ph(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=fa(t))?(mo(n,e),n.h==0&&(n.src=null,t[ua]=null)):lr(e)}}}function Ph(e){return e in Br?Br[e]:Br[e]="on"+e}function i0(e,t){if(e.fa)e=!0;else{t=new Oi(t,this);var n=e.listener,i=e.la||e.src;e.ia&&ha(e),e=n.call(i,t)}return e}function fa(e){return e=e[ua],e instanceof cr?e:null}var jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function da(e){return typeof e=="function"?e:(e[jr]||(e[jr]=function(t){return e.handleEvent(t)}),e[jr])}function ge(){Kt.call(this),this.i=new cr(this),this.S=this,this.J=null}me(ge,Kt);ge.prototype[zi]=!0;ge.prototype.removeEventListener=function(e,t,n,i){kh(this,e,t,n,i)};function we(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new Re(t,e);else if(t instanceof Re)t.target=t.target||e;else{var s=t;t=new Re(i,e),Ah(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=cs(o,i,!0,t)&&s}if(o=t.g=e,s=cs(o,i,!0,t)&&s,s=cs(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=cs(o,i,!1,t)&&s}ge.prototype.N=function(){if(ge.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)lr(n[i]);delete e.g[t],e.h--}}this.J=null};ge.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};ge.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function cs(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&mo(e.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var pa=j.JSON.stringify;class s0{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function r0(){var e=ga;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class o0{constructor(){this.h=this.g=null}add(t,n){const i=Oh.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Oh=new s0(()=>new a0,e=>e.reset());class a0{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function l0(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function c0(e){j.setTimeout(()=>{throw e},0)}let Di,Ni=!1,ga=new o0,Dh=()=>{const e=j.Promise.resolve(void 0);Di=()=>{e.then(u0)}};var u0=()=>{for(var e;e=r0();){try{e.h.call(e.g)}catch(n){c0(n)}var t=Oh;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ni=!1};function ur(e,t){ge.call(this),this.h=e||1,this.g=t||j,this.j=Se(this.qb,this),this.l=Date.now()}me(ur,ge);C=ur.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),we(this,"tick"),this.ga&&(ma(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ma(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}C.N=function(){ur.$.N.call(this),ma(this),delete this.g};function _a(e,t,n){if(typeof e=="function")n&&(e=Se(e,n));else if(e&&typeof e.handleEvent=="function")e=Se(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:j.setTimeout(e,t||0)}function Nh(e){e.g=_a(()=>{e.g=null,e.i&&(e.i=!1,Nh(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class h0 extends Kt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Nh(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(e){Kt.call(this),this.h=e,this.g={}}me(Li,Kt);var oc=[];function Lh(e,t,n,i){Array.isArray(n)||(n&&(oc[0]=n.toString()),n=oc);for(var s=0;s<n.length;s++){var r=Ch(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Mh(e){ca(e.g,function(t,n){this.g.hasOwnProperty(n)&&ha(t)},e),e.g={}}Li.prototype.N=function(){Li.$.N.call(this),Mh(this)};Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hr(){this.g=!0}hr.prototype.Ea=function(){this.g=!1};function f0(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function d0(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function Tn(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+g0(e,n)+(i?" "+i:"")})}function p0(e,t){e.info(function(){return"TIMEOUT: "+t})}hr.prototype.info=function(){};function g0(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return pa(n)}catch{return t}}var Jn={},ac=null;function ya(){return ac=ac||new ge}Jn.Ta="serverreachability";function xh(e){Re.call(this,Jn.Ta,e)}me(xh,Re);function Mi(e){const t=ya();we(t,new xh(t))}Jn.STAT_EVENT="statevent";function Uh(e,t){Re.call(this,Jn.STAT_EVENT,e),this.stat=t}me(Uh,Re);function De(e){const t=ya();we(t,new Uh(t,e))}Jn.Ua="timingevent";function Fh(e,t){Re.call(this,Jn.Ua,e),this.size=t}me(Fh,Re);function qi(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){e()},t)}var va={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},m0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wa(){}wa.prototype.h=null;function lc(e){return e.h||(e.h=e.i())}function _0(){}var Gi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ea(){Re.call(this,"d")}me(Ea,Re);function Ia(){Re.call(this,"c")}me(Ia,Re);var yo;function fr(){}me(fr,wa);fr.prototype.g=function(){return new XMLHttpRequest};fr.prototype.i=function(){return{}};yo=new fr;function Yi(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Li(this),this.P=y0,e=go?125:void 0,this.V=new ur(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new $h}function $h(){this.i=null,this.g="",this.h=!1}var y0=45e3,vo={},Us={};C=Yi.prototype;C.setTimeout=function(e){this.P=e};function wo(e,t,n){e.L=1,e.v=pr(bt(t)),e.s=n,e.S=!0,Bh(e,null)}function Bh(e,t){e.G=Date.now(),Ji(e),e.A=bt(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),Gh(n.i,"t",i),e.C=0,n=e.l.J,e.h=new $h,e.g=mf(e.l,n?t:null,!e.s),0<e.O&&(e.M=new h0(Se(e.Pa,e,e.g),e.O)),Lh(e.U,e.g,"readystatechange",e.nb),t=e.I?bh(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Mi(),f0(e.j,e.u,e.A,e.m,e.W,e.s)}C.nb=function(e){e=e.target;const t=this.M;t&&lt(e)==3?t.l():this.Pa(e)};C.Pa=function(e){try{if(e==this.g)e:{const u=lt(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||go||this.g&&(this.h.h||this.g.ja()||fc(this.g)))){this.J||u!=4||t==7||(t==8||0>=d?Mi(3):Mi(2)),dr(this);var n=this.g.da();this.ca=n;t:if(jh(this)){var i=fc(this.g);e="";var s=i.length,r=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),yi(this);var o="";break t}this.h.i=new j.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,d0(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ki(a)){var c=a;break t}}c=null}if(n=c)Tn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Eo(this,n);else{this.i=!1,this.o=3,De(12),en(this),yi(this);break e}}this.S?(Hh(this,u,o),go&&this.i&&u==3&&(Lh(this.U,this.V,"tick",this.mb),this.V.start())):(Tn(this.j,this.m,o,null),Eo(this,o)),u==4&&en(this),this.i&&!this.J&&(u==4?ff(this.l,this):(this.i=!1,Ji(this)))}else $0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,De(12)):(this.o=0,De(13)),en(this),yi(this)}}}catch{}finally{}};function jh(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Hh(e,t,n){let i=!0,s;for(;!e.J&&e.C<n.length;)if(s=v0(e,n),s==Us){t==4&&(e.o=4,De(14),i=!1),Tn(e.j,e.m,null,"[Incomplete Response]");break}else if(s==vo){e.o=4,De(15),Tn(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Tn(e.j,e.m,s,null),Eo(e,s);jh(e)&&s!=Us&&s!=vo&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,De(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ra(t),t.M=!0,De(11))):(Tn(e.j,e.m,n,"[Invalid Chunked Response]"),en(e),yi(e))}C.mb=function(){if(this.g){var e=lt(this.g),t=this.g.ja();this.C<t.length&&(dr(this),Hh(this,e,t),this.i&&e!=4&&Ji(this))}};function v0(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?Us:(n=Number(t.substring(n,i)),isNaN(n)?vo:(i+=1,i+n>t.length?Us:(t=t.slice(i,i+n),e.C=i+n,t)))}C.cancel=function(){this.J=!0,en(this)};function Ji(e){e.Y=Date.now()+e.P,Wh(e,e.P)}function Wh(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=qi(Se(e.lb,e),t)}function dr(e){e.B&&(j.clearTimeout(e.B),e.B=null)}C.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(p0(this.j,this.A),this.L!=2&&(Mi(),De(17)),en(this),this.o=2,yi(this)):Wh(this,this.Y-e)};function yi(e){e.l.H==0||e.J||ff(e.l,e)}function en(e){dr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,ma(e.V),Mh(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Eo(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Io(n.i,e))){if(!e.K&&Io(n.i,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Bs(n),yr(n);else break e;Sa(n),De(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=qi(Se(n.ib,n),6e3));if(1>=Xh(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else tn(n,11)}else if((e.K||n.g==e)&&Bs(n),!ki(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=c[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(i=1.5*g,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const v=e.g;if(v){const R=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var r=i.i;r.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ta(r,r.h),r.h=null))}if(i.F){const P=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(i.Da=P,se(i.I,i.F,P))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=gf(i,i.J?i.pa:null,i.Y),o.K){Qh(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(dr(a),Ji(a)),i.g=o}else uf(i);0<n.j.length&&vr(n)}else c[0]!="stop"&&c[0]!="close"||tn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?tn(n,7):Ca(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Mi(4)}catch{}}function w0(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(or(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function E0(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(or(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function Vh(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(or(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=E0(e),i=w0(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var Kh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function I0(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function on(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof on){this.h=e.h,Fs(this,e.j),this.s=e.s,this.g=e.g,$s(this,e.m),this.l=e.l;var t=e.i,n=new xi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),cc(this,n),this.o=e.o}else e&&(t=String(e).match(Kh))?(this.h=!1,Fs(this,t[1]||"",!0),this.s=ci(t[2]||""),this.g=ci(t[3]||"",!0),$s(this,t[4]),this.l=ci(t[5]||"",!0),cc(this,t[6]||"",!0),this.o=ci(t[7]||"")):(this.h=!1,this.i=new xi(null,this.h))}on.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ui(t,uc,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ui(t,uc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ui(n,n.charAt(0)=="/"?A0:b0,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ui(n,S0)),e.join("")};function bt(e){return new on(e)}function Fs(e,t,n){e.j=n?ci(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $s(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function cc(e,t,n){t instanceof xi?(e.i=t,R0(e.i,e.h)):(n||(t=ui(t,C0)),e.i=new xi(t,e.h))}function se(e,t,n){e.i.set(t,n)}function pr(e){return se(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ci(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ui(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,T0),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function T0(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var uc=/[#\/\?@]/g,b0=/[#\?:]/g,A0=/[#\?]/g,C0=/[#\?@]/g,S0=/#/g;function xi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function zt(e){e.g||(e.g=new Map,e.h=0,e.i&&I0(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}C=xi.prototype;C.add=function(e,t){zt(this),this.i=null,e=Xn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function zh(e,t){zt(e),t=Xn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function qh(e,t){return zt(e),t=Xn(e,t),e.g.has(t)}C.forEach=function(e,t){zt(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)};C.ta=function(){zt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n};C.Z=function(e){zt(this);let t=[];if(typeof e=="string")qh(this,e)&&(t=t.concat(this.g.get(Xn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};C.set=function(e,t){return zt(this),this.i=null,e=Xn(this,e),qh(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};C.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Gh(e,t,n){zh(e,t),0<n.length&&(e.i=null,e.g.set(Xn(e,t),aa(n)),e.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Xn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function R0(e,t){t&&!e.j&&(zt(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(zh(this,i),Gh(this,s,n))},e)),e.j=t}var k0=class{constructor(e,t){this.g=e,this.map=t}};function Yh(e){this.l=e||P0,j.PerformanceNavigationTiming?(e=j.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var P0=10;function Jh(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Xh(e){return e.h?1:e.g?e.g.size:0}function Io(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ta(e,t){e.g?e.g.add(t):e.h=t}function Qh(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Yh.prototype.cancel=function(){if(this.i=Zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Zh(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return aa(e.i)}var O0=class{stringify(e){return j.JSON.stringify(e,void 0)}parse(e){return j.JSON.parse(e,void 0)}};function D0(){this.g=new O0}function N0(e,t,n){const i=n||"";try{Vh(e,function(s,r){let o=s;Ki(s)&&(o=pa(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function L0(e,t){const n=new hr;if(j.Image){const i=new Image;i.onload=ls(us,n,i,"TestLoadImage: loaded",!0,t),i.onerror=ls(us,n,i,"TestLoadImage: error",!1,t),i.onabort=ls(us,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=ls(us,n,i,"TestLoadImage: timeout",!1,t),j.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function us(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function gr(e){this.l=e.fc||null,this.j=e.ob||!1}me(gr,wa);gr.prototype.g=function(){return new mr(this.l,this.j)};gr.prototype.i=function(e){return function(){return e}}({});function mr(e,t){ge.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ba,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}me(mr,ge);var ba=0;C=mr.prototype;C.open=function(e,t){if(this.readyState!=ba)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ui(this)};C.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||j).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=ba};C.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ef(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ef(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}C.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Xi(this):Ui(this),this.readyState==3&&ef(this)}};C.Za=function(e){this.g&&(this.response=this.responseText=e,Xi(this))};C.Ya=function(e){this.g&&(this.response=e,Xi(this))};C.ka=function(){this.g&&Xi(this)};function Xi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ui(e)}C.setRequestHeader=function(e,t){this.v.append(e,t)};C.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ui(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var M0=j.JSON.parse;function oe(e){ge.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tf,this.L=this.M=!1}me(oe,ge);var tf="",x0=/^https?$/i,U0=["POST","PUT"];C=oe.prototype;C.Oa=function(e){this.M=e};C.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():yo.g(),this.C=this.u?lc(this.u):lc(yo),this.g.onreadystatechange=Se(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){hc(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=j.FormData&&e instanceof j.FormData,!(0<=wh(U0,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{rf(this),0<this.B&&((this.L=F0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Se(this.ua,this)):this.A=_a(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){hc(this,r)}};function F0(e){return Pi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}C.ua=function(){typeof oa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))};function hc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,nf(e),_r(e)}function nf(e){e.F||(e.F=!0,we(e,"complete"),we(e,"error"))}C.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,we(this,"complete"),we(this,"abort"),_r(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_r(this,!0)),oe.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?sf(this):this.kb())};C.kb=function(){sf(this)};function sf(e){if(e.h&&typeof oa<"u"&&(!e.C[1]||lt(e)!=4||e.da()!=2)){if(e.v&&lt(e)==4)_a(e.La,0,e);else if(we(e,"readystatechange"),lt(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=o===0){var s=String(e.I).match(Kh)[1]||null;!s&&j.self&&j.self.location&&(s=j.self.location.protocol.slice(0,-1)),i=!x0.test(s?s.toLowerCase():"")}n=i}if(n)we(e,"complete"),we(e,"success");else{e.m=6;try{var r=2<lt(e)?e.g.statusText:""}catch{r=""}e.j=r+" ["+e.da()+"]",nf(e)}}finally{_r(e)}}}}function _r(e,t){if(e.g){rf(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||we(e,"ready");try{n.onreadystatechange=i}catch{}}}function rf(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(j.clearTimeout(e.A),e.A=null)}C.isActive=function(){return!!this.g};function lt(e){return e.g?e.g.readyState:0}C.da=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),M0(t)}};function fc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case tf:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function $0(e){const t={};e=(e.g&&2<=lt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<e.length;i++){if(ki(e[i]))continue;var n=l0(e[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=t[s]||[];t[s]=r,r.push(n)}t0(t,function(i){return i.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function of(e){let t="";return ca(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Aa(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=of(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):se(e,t,n))}function ii(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function af(e){this.Ga=0,this.j=[],this.l=new hr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ii("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ii("baseRetryDelayMs",5e3,e),this.hb=ii("retryDelaySeedMs",1e4,e),this.eb=ii("forwardChannelMaxRetries",2,e),this.xa=ii("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Yh(e&&e.concurrentRequestLimit),this.Ja=new D0,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=af.prototype;C.ra=8;C.H=1;function Ca(e){if(lf(e),e.H==3){var t=e.W++,n=bt(e.I);if(se(n,"SID",e.K),se(n,"RID",t),se(n,"TYPE","terminate"),Qi(e,n),t=new Yi(e,e.l,t),t.L=2,t.v=pr(bt(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&j.Image&&(new Image().src=t.v,n=!0),n||(t.g=mf(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ji(t)}pf(e)}function yr(e){e.g&&(Ra(e),e.g.cancel(),e.g=null)}function lf(e){yr(e),e.u&&(j.clearTimeout(e.u),e.u=null),Bs(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&j.clearTimeout(e.m),e.m=null)}function vr(e){if(!Jh(e.i)&&!e.m){e.m=!0;var t=e.Na;Di||Dh(),Ni||(Di(),Ni=!0),ga.add(t,e),e.C=0}}function B0(e,t){return Xh(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=qi(Se(e.Na,e,t),df(e,e.C)),e.C++,!0)}C.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Yi(this,this.l,e);let r=this.s;if(this.U&&(r?(r=bh(r),Ah(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cf(this,s,t),n=bt(this.I),se(n,"RID",e),se(n,"CVER",22),this.F&&se(n,"X-HTTP-Session-Id",this.F),Qi(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(of(r)))+"&"+t:this.o&&Aa(n,this.o,r)),Ta(this.i,s),this.bb&&se(n,"TYPE","init"),this.P?(se(n,"$req",t),se(n,"SID","null"),s.aa=!0,wo(s,n,null)):wo(s,n,t),this.H=2}}else this.H==3&&(e?dc(this,e):this.j.length==0||Jh(this.i)||dc(this))};function dc(e,t){var n;t?n=t.m:n=e.W++;const i=bt(e.I);se(i,"SID",e.K),se(i,"RID",n),se(i,"AID",e.V),Qi(e,i),e.o&&e.s&&Aa(i,e.o,e.s),n=new Yi(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=cf(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ta(e.i,n),wo(n,i,t)}function Qi(e,t){e.na&&ca(e.na,function(n,i){se(t,i,n)}),e.h&&Vh({},function(n,i){se(t,i,n)})}function cf(e,t,n){n=Math.min(e.j.length,n);var i=e.h?Se(e.h.Va,e.h,e):null;e:{var s=e.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{N0(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function uf(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Di||Dh(),Ni||(Di(),Ni=!0),ga.add(t,e),e.A=0}}function Sa(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=qi(Se(e.Ma,e),df(e,e.A)),e.A++,!0)}C.Ma=function(){if(this.u=null,hf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=qi(Se(this.jb,this),e)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,De(10),yr(this),hf(this))};function Ra(e){e.B!=null&&(j.clearTimeout(e.B),e.B=null)}function hf(e){e.g=new Yi(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=bt(e.wa);se(t,"RID","rpc"),se(t,"SID",e.K),se(t,"AID",e.V),se(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&se(t,"TO",e.qa),se(t,"TYPE","xmlhttp"),Qi(e,t),e.o&&e.s&&Aa(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=pr(bt(t)),n.s=null,n.S=!0,Bh(n,e)}C.ib=function(){this.v!=null&&(this.v=null,yr(this),Sa(this),De(19))};function Bs(e){e.v!=null&&(j.clearTimeout(e.v),e.v=null)}function ff(e,t){var n=null;if(e.g==t){Bs(e),Ra(e),e.g=null;var i=2}else if(Io(e.i,t))n=t.F,Qh(e.i,t),i=1;else return;if(e.H!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;i=ya(),we(i,new Fh(i,n)),vr(e)}else uf(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(i==1&&B0(e,t)||i==2&&Sa(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:tn(e,5);break;case 4:tn(e,10);break;case 3:tn(e,6);break;default:tn(e,2)}}}function df(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function tn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var i=Se(e.pb,e);n||(n=new on("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Fs(n,"https"),pr(n)),L0(n.toString(),i)}else De(2);e.H=0,e.h&&e.h.za(t),pf(e),lf(e)}C.pb=function(e){e?(this.l.info("Successfully pinged google.com"),De(2)):(this.l.info("Failed to ping google.com"),De(1))};function pf(e){if(e.H=0,e.ma=[],e.h){const t=Zh(e.i);(t.length!=0||e.j.length!=0)&&(nc(e.ma,t),nc(e.ma,e.j),e.i.i.length=0,aa(e.j),e.j.length=0),e.h.ya()}}function gf(e,t,n){var i=n instanceof on?bt(n):new on(n);if(i.g!="")t&&(i.g=t+"."+i.g),$s(i,i.m);else{var s=j.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new on(null);i&&Fs(r,i),t&&(r.g=t),s&&$s(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&se(i,n,t),se(i,"VER",e.ra),Qi(e,i),i}function mf(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new oe(new gr({ob:!0})):new oe(e.va),t.Oa(e.J),t}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function _f(){}C=_f.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function Ve(e,t){ge.call(this),this.g=new af(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ki(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ki(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Qn(this)}me(Ve,ge);Ve.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;De(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=gf(e,null,e.Y),vr(e)};Ve.prototype.close=function(){Ca(this.g)};Ve.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=pa(e),e=n);t.j.push(new k0(t.fb++,e)),t.H==3&&vr(t)};Ve.prototype.N=function(){this.g.h=null,delete this.j,Ca(this.g),delete this.g,Ve.$.N.call(this)};function yf(e){Ea.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}me(yf,Ea);function vf(){Ia.call(this),this.status=1}me(vf,Ia);function Qn(e){this.g=e}me(Qn,_f);Qn.prototype.Ba=function(){we(this.g,"a")};Qn.prototype.Aa=function(e){we(this.g,new yf(e))};Qn.prototype.za=function(e){we(this.g,new vf)};Qn.prototype.ya=function(){we(this.g,"b")};function j0(){this.blockSize=-1}function pt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}me(pt,j0);pt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hr(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^r&(n^s))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^r)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~r))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}pt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(s==0)for(;r<=n;)Hr(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){Hr(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){Hr(this,i),s=0;break}}this.h=s,this.i+=t};pt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function Z(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=e[s]|0;i&&r==t||(n[s]=r,i=!1)}this.g=n}var H0={};function ka(e){return-128<=e&&128>e?Yv(e,function(t){return new Z([t|0],0>t?-1:0)}):new Z([e|0],0>e?-1:0)}function ct(e){if(isNaN(e)||!isFinite(e))return On;if(0>e)return _e(ct(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=To;return new Z(t,0)}function wf(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return _e(wf(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ct(Math.pow(t,8)),i=On,s=0;s<e.length;s+=8){var r=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+r),t);8>r?(r=ct(Math.pow(t,r)),i=i.R(r).add(ct(o))):(i=i.R(n),i=i.add(ct(o)))}return i}var To=4294967296,On=ka(0),bo=ka(1),pc=ka(16777216);C=Z.prototype;C.ea=function(){if(je(this))return-_e(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:To+i)*t,t*=To}return e};C.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(wt(this))return"0";if(je(this))return"-"+_e(this).toString(e);for(var t=ct(Math.pow(e,6)),n=this,i="";;){var s=Hs(n,t).g;n=js(n,s.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,wt(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};C.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function wt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function je(e){return e.h==-1}C.X=function(e){return e=js(this,e),je(e)?-1:wt(e)?0:1};function _e(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new Z(n,~e.h).add(bo)}C.abs=function(){return je(this)?_e(this):this};C.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(this.D(s)&65535)+(e.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Z(n,n[n.length-1]&-2147483648?-1:0)};function js(e,t){return e.add(_e(t))}C.R=function(e){if(wt(this)||wt(e))return On;if(je(this))return je(e)?_e(this).R(_e(e)):_e(_e(this).R(e));if(je(e))return _e(this.R(_e(e)));if(0>this.X(pc)&&0>e.X(pc))return ct(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*i+2*s]+=o*l,hs(n,2*i+2*s),n[2*i+2*s+1]+=r*l,hs(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,hs(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,hs(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new Z(n,0)};function hs(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function si(e,t){this.g=e,this.h=t}function Hs(e,t){if(wt(t))throw Error("division by zero");if(wt(e))return new si(On,On);if(je(e))return t=Hs(_e(e),t),new si(_e(t.g),_e(t.h));if(je(t))return t=Hs(e,_e(t)),new si(_e(t.g),t.h);if(30<e.g.length){if(je(e)||je(t))throw Error("slowDivide_ only works with positive integers.");for(var n=bo,i=t;0>=i.X(e);)n=gc(n),i=gc(i);var s=vn(n,1),r=vn(i,1);for(i=vn(i,2),n=vn(n,2);!wt(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=vn(i,1),n=vn(n,1)}return t=js(e,s.R(t)),new si(s,t)}for(s=On;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=ct(n),o=r.R(t);je(o)||0<o.X(e);)n-=i,r=ct(n),o=r.R(t);wt(r)&&(r=bo),s=s.add(r),e=js(e,o)}return new si(s,e)}C.gb=function(e){return Hs(this,e).h};C.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new Z(n,this.h&e.h)};C.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new Z(n,this.h|e.h)};C.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new Z(n,this.h^e.h)};function gc(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new Z(n,e.h)}function vn(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new Z(s,e.h)}Ve.prototype.send=Ve.prototype.u;Ve.prototype.open=Ve.prototype.m;Ve.prototype.close=Ve.prototype.close;va.NO_ERROR=0;va.TIMEOUT=8;va.HTTP_ERROR=6;m0.COMPLETE="complete";_0.EventType=Gi;Gi.OPEN="a";Gi.CLOSE="b";Gi.ERROR="c";Gi.MESSAGE="d";ge.prototype.listen=ge.prototype.O;oe.prototype.listenOnce=oe.prototype.P;oe.prototype.getLastError=oe.prototype.Sa;oe.prototype.getLastErrorCode=oe.prototype.Ia;oe.prototype.getStatus=oe.prototype.da;oe.prototype.getResponseJson=oe.prototype.Wa;oe.prototype.getResponseText=oe.prototype.ja;oe.prototype.send=oe.prototype.ha;oe.prototype.setWithCredentials=oe.prototype.Oa;pt.prototype.digest=pt.prototype.l;pt.prototype.reset=pt.prototype.reset;pt.prototype.update=pt.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=ct;Z.fromString=wf;var W0=Z;const mc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Go("@firebase/firestore");function Fe(e,...t){if(jn.logLevel<=X.DEBUG){const n=t.map(Oa);jn.debug(`Firestore (${Zi}): ${e}`,...n)}}function Pa(e,...t){if(jn.logLevel<=X.ERROR){const n=t.map(Oa);jn.error(`Firestore (${Zi}): ${e}`,...n)}}function V0(e,...t){if(jn.logLevel<=X.WARN){const n=t.map(Oa);jn.warn(`Firestore (${Zi}): ${e}`,...n)}}function Oa(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e="Unexpected state"){const t=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+e;throw Pa(t),new Error(t)}function Ao(e,t){e||Da()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ae extends Ct{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class K0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ie.UNAUTHENTICATED))}shutdown(){}}class z0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class q0{constructor(t){this.t=t,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Dn,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Dn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ao(typeof i.accessToken=="string"),new Ef(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ao(t===null||typeof t=="string"),new Ie(t)}}class G0{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Y0{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new G0(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class J0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class X0{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const i=r=>{r.error!=null&&Fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Fe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{Fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):Fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ao(typeof n.token=="string"),this.T=n.token,new J0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Q0(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function If(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(t,n,i,s,r,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ws{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ws("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ws&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _c,z;(z=_c||(_c={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new W0([4294967295,4294967295],0);function Wr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(t,n,i=1e3,s=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&Fe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,a=new Na(t,n,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ae(be.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nw(e,t){if(Pa("AsyncQueue",`${t}: ${e}`),If(e))return new Ae(be.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Ie.UNAUTHENTICATED,this.clientId=Z0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Fe("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Fe("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ae(be.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=nw(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Map;function sw(e,t,n,i){if(t===!0&&i===!0)throw new Ae(be.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function rw(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Da()}function ow(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ae(be.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rw(e);throw new Ae(be.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Ae(be.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ae(be.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}sw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tf((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ae(be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ae(be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ae(be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=t.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,i}}class bf{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ae(be.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ae(be.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vc(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new K0;switch(n.type){case"firstParty":return new Y0(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ae(be.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=yc.get(t);n&&(Fe("ComponentProvider","Removing Datastore"),yc.delete(t),n.terminate())}(this),Promise.resolve()}}function aw(e,t,n,i={}){var s;const r=(e=ow(e,bf))._getSettings(),o=`${t}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&V0("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=Ie.MOCK_USER;else{a=dm(i.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new Ae(be.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ie(c)}e._authCredentials=new z0(new Ef(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new tw(this,"async_queue_retry"),this.Xc=()=>{const n=Wr();n&&Fe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=Wr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=Wr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Dn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!If(t))throw t;Fe("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Pa("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(t,n,i){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const s=Na.createAndSchedule(this,t,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&Da()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class cw extends bf{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new lw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hw(this),this._firestoreClient.terminate()}}function uw(e,t){const n=typeof e=="object"?e:Fu(),i=typeof e=="string"?e:t||"(default)",s=Jo(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=hm("firestore");r&&aw(s,...r)}return s}function hw(e){var t,n,i;const s=e._freezeSettings(),r=function(o,a,l,c){return new ew(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Tf(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new iw(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){Zi=n})(zn),$n(new ln("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new cw(new q0(n.getProvider("auth-internal")),new X0(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Ae(be.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ws(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:t},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Wt(mc,"3.13.0",e),Wt(mc,"3.13.0","esm2017")})();const fw={apiKey:"AIzaSyDSFUoWNmdlw4OyCK89i5DCX1MvSkZyo6E",authDomain:"blood-bank-vue.firebaseapp.com",projectId:"blood-bank-vue",storageBucket:"blood-bank-vue.appspot.com",messagingSenderId:"1005473572226",appId:"1:1005473572226:web:2c6519c0684db8307e1b9b"};Uu(fw);uw();const Nn=$v();const dn=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},dw={emits:["loggedIn"],data(){return{username:"",email:"",password:""}},methods:{signUp(){Ey(Nn,this.email,this.password).then(()=>{by(Nn.currentUser,{displayName:this.username}).then(()=>{this.$emit("loggedIn")})}).catch(e=>{console.log(e.message)})}}},pw=m("h2",null,null,-1),gw=m("button",{class:"signupbut"},"Sign Up",-1);function mw(e,t,n,i,s,r){return le(),he("form",{onSubmit:t[3]||(t[3]=mu((...o)=>r.signUp&&r.signUp(...o),["prevent"])),class:"signup"},[pw,hi(m("input",{type:"text",class:"input",placeholder:"Username",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>s.username=o)},null,512),[[pi,s.username]]),hi(m("input",{type:"email",class:"input",placeholder:"Email",required:"","onUpdate:modelValue":t[1]||(t[1]=o=>s.email=o)},null,512),[[pi,s.email]]),hi(m("input",{type:"password",class:"input",placeholder:"Password",required:"","onUpdate:modelValue":t[2]||(t[2]=o=>s.password=o)},null,512),[[pi,s.password]]),gw],32)}const Af=dn(dw,[["render",mw]]);const _w={data(){return{email:"",password:""}},methods:{login(){Iy(Nn,this.email,this.password).then(()=>{this.$emit("loggedIn")}).catch(e=>{console.error("Login error:",e)})}}},yw=m("br",null,null,-1),vw=m("br",null,null,-1),ww=m("button",{class:"loginbut"},"Log in",-1);function Ew(e,t,n,i,s,r){return le(),he("form",{onSubmit:t[2]||(t[2]=mu((...o)=>r.login&&r.login(...o),["prevent"])),class:"login"},[hi(m("input",{type:"email",class:"input",placeholder:"What's your email?",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>s.email=o)},null,512),[[pi,s.email]]),yw,hi(m("input",{type:"password",class:"input",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=o=>s.password=o)},null,512),[[pi,s.password]]),vw,ww],32)}const Cf=dn(_w,[["render",Ew]]);const Iw={data(){return{items:[{id:1,title:"1. What should I do if I need to claim my privilege as a blood donor?",content:"Kindly proceed to the nearest blood bank for verification in order to claim your privilege.",showContent:!1},{id:2,title:"2. Why should I donate blood?",content:"Every day blood is needed to save lives. Blood may be needed for surgery, accident victims or to treat patients with leukemia, cancer, heart disease, liver disease and hemophilia. Your contribution could save a life.",showContent:!1},{id:3,title:"3. Am I eligible to donate blood?",content:"Yes, if you are over 17 years old (age verification required) and weight more than 45kg. In general, taking medication is not an obstacle to donating blood because acceptance and rejection are based on medical reports. If you are taking any medication, please inform before donating blood.",showContent:!1},{id:4,title:"4. Am I healthy enough to donate blood?",content:"You must be healthy enough to donate blood. Your health and safety is very important to us. You will be asked to fill up a blood donation questionnaire where your medical history will be asked. Blood pressure and a drop of blood will be taken for a hemoglobin test. All information provided by you is confidential.",showContent:!1},{id:5,title:"5. How long does it take to donate blood?",content:"The process of donating blood will take between 7-10 minutes, but you are advised to be at the blood collection site for approximately one hour.",showContent:!1},{id:6,title:"6. Does the needle hurt?",content:"You only feel a little pain when the needle is inserted and nothing after.",showContent:!1},{id:7,title:"7. How much blood will be taken?",content:"A total of 450ml, which is less than 1 pint (586ml). Adults usually have about 5 liters (10-12 pints) of blood in the body.",showContent:!1},{id:8,title:"8. How does it feel after donating blood?",content:"Most people feel comfortable after donating blood. You are advised to have a light meal before donating blood.",showContent:!1},{id:9,title:"9. Can I do sports after donating blood?",content:"Yes. Just avoid doing heavy activities for 5 hours after donating blood. Drink plenty of water within 24 hours.",showContent:!1},{id:10,title:"10. How long does it take to replace the donated blood?",content:"Plasma is replaced within 24 hours. You need to drink 4 glasses of water without alcohol and do not do heavy work with your hands for a period of 5 hours. Red blood takes 4-8 weeks to be replaced and you can donate again after that.",showContent:!1},{id:11,title:"11. What will be done to the donated blood?",content:"Your blood will be tested to determine blood group, viral infwhich is used in 22 blood collection centers nationwideections such as syphilis, hepatitis (B & C) and AIDS (HIV). Then, stored for patient use. Blood can also be separated into several blood components and can be used to treat more than one patient.",showContent:!1}]}},methods:{toggleContent(e){this.items.forEach(t=>{t.id===e?t.showContent=!t.showContent:t.showContent=!1})}}},Tw={class:"faq"},bw=m("b",null,"BLOOD DONATION FAQ",-1),Aw=["onClick"],Cw={class:"toggleIcon"},Sw={key:0,class:"content-edu"};function Rw(e,t,n,i,s,r){return le(),he("div",Tw,[bw,m("div",null,[(le(!0),he(Oe,null,jo(s.items,o=>(le(),he("div",{key:o.id,class:"faqborder"},[m("div",{class:Wn(["title",{open:o.showContent}]),onClick:a=>r.toggleContent(o.id)},[We(Et(o.title)+" ",1),m("span",Cw,Et(o.showContent?"-":"+"),1)],10,Aw),o.showContent?(le(),he("div",Sw,Et(o.content),1)):yp("",!0)]))),128))])])}const kw=dn(Iw,[["render",Rw]]);const Pw={data(){return{tableData:[{column1:"1 time",column2:"Free outpatient treatment and medical treatment (excluding X-ray and surgical charges) and second class wards for a period of * 4 months."},{column1:"2 times (within 12 months)",column2:"Free Hepatitis B preventive injection."},{column1:"2 ~ 5 times",column2:"Free outpatient treatment and medical treatment and second class wards for a period of * 4 months."},{column1:"6 ~ 10 times",column2:"Free * year outpatient treatment and second class medical treatment for a * 6 months period."},{column1:"11 ~ 15 times",column2:"Free * 2 year outpatient treatment and second class medical treatment for a * 6 month period."},{column1:"16 ~ 20 times",column2:"Free outpatient treatment and medical treatment and second class wards for a * 2 year period."},{column1:"21 ~ 30 times",column2:"Free outpatient treatment and medical treatment and second class wards for a period of * 3 years."},{column1:"31 ~ 40 times",column2:"Free outpatient treatment and medical treatment and first class wards for a period of * 4 years."},{column1:"41 ~ 50 times",column2:"Free outpatient treatment and medical treatment and first class wards for a period of * 6 years."},{column1:'Over 50 times (for "Whole Blood") and Over 150 times (for aferesis donors)',column2:"Free outpatient treatment and first-class medical treatment and wards for 10 years and second-class wards of life after 10 years in first-class ward."}]}}},Ow={class:"perks"},Dw=m("b",null,"MALAYSIAN BLOOD DONOR PRIVILEGES",-1),Nw=m("p",null,"There are many health benefits to donating blood and those who donate blood in Malaysia can benefit from many medical perks offered by the Ministry of Health:",-1),Lw={class:"perks-table"},Mw=m("thead",null,[m("tr",null,[m("th",{class:"left-column"},"Donation Frequency"),m("th",{class:"right-column"},"Medical Privileges")])],-1),xw={class:"left-column"},Uw={class:"right-column"};function Fw(e,t,n,i,s,r){return le(),he("div",Ow,[Dw,Nw,m("div",Lw,[m("table",null,[Mw,m("tbody",null,[(le(!0),he(Oe,null,jo(s.tableData,(o,a)=>(le(),he("tr",{key:a,class:Wn({"odd-row":a%2!==0})},[m("td",xw,Et(o.column1),1),m("td",Uw,Et(o.column2),1)],2))),128))])])])])}const $w=dn(Pw,[["render",Fw]]),Bw="/vitevue-project/assets/eli-age-13cb64b7.png",jw="/vitevue-project/assets/eli-alcohol-0406a1fc.png",Hw="/vitevue-project/assets/eli-gender-d6b663ad.png",Ww="/vitevue-project/assets/eli-healthy-53da1207.png",Vw="/vitevue-project/assets/eli-malaysia-f0bace01.png",Kw="/vitevue-project/assets/eli-sleep-6f387f38.png",zw="/vitevue-project/assets/eli-weight-ba7e910a.png",qw="/vitevue-project/assets/eli-woman-8394ab2a.png";const Gw={data(){return{imagePaths:{age:Bw,alcohol:jw,gender:Hw,healthy:Ww,malaysia:Vw,sleep:Kw,weight:zw,woman:qw}}}},Yw={class:"eligibility"},Jw=m("b",null,"Blood Donation Eligibility Requirements",-1),Xw=m("p",{style:{"font-size":"small"}},[m("b",null,"REMEMBER!"),We(" Drink plenty of fluids and eat something light. It takes "),m("b",null,"4-8 weeks"),We(" to regenerate the red blood cells lost during a blood donation.")],-1),Qw={class:"eli-table"},Zw={style:{width:"50%"}},eE=["src"],tE=m("p",{class:"type"},"AGE",-1),nE=m("p",{class:"eli"},"18-60 years old",-1),iE=m("p",{class:"desp"},"*Parental consent required for 17 years old and below",-1),sE={style:{width:"50%"}},rE=["src"],oE=m("p",{class:"type"},"MEDICINE & ALCOHOL",-1),aE=m("p",{class:"eli"},"alcohol-free",-1),lE=m("p",{class:"desp"},"Avoid consuming alcohol a day before donating",-1),cE=["src"],uE=m("p",{class:"type"},"HEALTHY",-1),hE=m("p",{class:"eli"},"physical & mental",-1),fE=m("p",{class:"desp"},"No chronic diseases",-1),dE=["src"],pE=m("p",{class:"type"},"WEIGHT",-1),gE=m("p",{class:"eli"},"> 45kg",-1),mE=["src"],_E=m("p",{class:"type"},"SUFFICIENT SLEEP",-1),yE=m("p",{class:"eli"},"> 5 hours",-1),vE=m("p",{class:"desp"},"Donors must have at least five hours of sleep before donating",-1),wE=["src"],EE=m("p",{class:"type"},"RESIDING IN MALAYSIA",-1),IE=m("p",{class:"eli"},"> 1 year",-1),TE=m("p",{class:"desp"},"for non-Malaysians",-1),bE=["src"],AE=m("p",{class:"type"},"HIGH-RISK ACTIVITIES",-1),CE=m("p",{class:"eli"},"do not engage",-1),SE=m("p",{class:"desp"},"Do not use drugs or engage in sexual intercourse with many partners",-1),RE=["src"],kE=m("p",{class:"type"},"WOMEN",-1),PE=m("p",{class:"eli"},"not pregnant or during menstrual cycle",-1),OE=m("p",{class:"desp"},"including breastfeeding",-1);function DE(e,t,n,i,s,r){return le(),he("div",Yw,[Jw,Xw,m("table",Qw,[m("tr",null,[m("td",Zw,[m("img",{src:s.imagePaths.age,alt:"Age Icon"},null,8,eE),tE,nE,iE]),m("td",sE,[m("img",{src:s.imagePaths.alcohol,alt:"Alcohol free Icon"},null,8,rE),oE,aE,lE])]),m("tr",null,[m("td",null,[m("img",{src:s.imagePaths.healthy,alt:"Healthy Icon"},null,8,cE),uE,hE,fE]),m("td",null,[m("img",{src:s.imagePaths.weight,alt:"Weight Icon"},null,8,dE),pE,gE])]),m("tr",null,[m("td",null,[m("img",{src:s.imagePaths.sleep,alt:"Sleep Icon"},null,8,mE),_E,yE,vE]),m("td",null,[m("img",{src:s.imagePaths.malaysia,alt:"Malaysia Icon"},null,8,wE),EE,IE,TE])]),m("tr",null,[m("td",null,[m("img",{src:s.imagePaths.gender,alt:"Gender Icon"},null,8,bE),AE,CE,SE]),m("td",null,[m("img",{src:s.imagePaths.woman,alt:"Woman Icon"},null,8,RE),kE,PE,OE])])])])}const NE=dn(Gw,[["render",DE]]);const LE={data(){return{tableData:[{column1:"A+",column2:"A+, AB+",column3:"A+, A-, O+, O-"},{column1:"O+",column2:"O+, A+, B+, AB+",column3:"O+, O-"},{column1:"B+",column2:"B+, AB+",column3:"B+, B-, O+, O-"},{column1:"AB+",column2:"AB+",column3:"ALL BLOOD TYPES"},{column1:"A-",column2:"A+, A-, AB+, AB-",column3:"A-, O-"},{column1:"O-",column2:"ALL BLOOD TYPES",column3:"O-"},{column1:"B-",column2:"B+, B-, AB+, AB-",column3:"B-, O-"},{column1:"AB-",column2:"AB+, AB-",column3:"AB-, A-, B-, O-"}]}}},ME={class:"bloodtype-table"},xE=m("b",null,"Matching Blood Types",-1),UE=m("p",null,"A blood type is a classification of blood based on the presence or absence of antigens on the surface of red blood cells. Human blood is divided into one of four main blood types: A, B, AB, and O, and is further divided into Rh+ or Rh-.",-1),FE=m("thead",null,[m("tr",null,[m("th",{class:"left-column"},"Type"),m("th",null,"You can give blood to"),m("th",{class:"right-column"},"You can receive blood from")])],-1),$E={class:"left-column"},BE={class:"right-column"};function jE(e,t,n,i,s,r){return le(),he("div",ME,[xE,UE,m("table",null,[FE,m("tbody",null,[(le(!0),he(Oe,null,jo(s.tableData,(o,a)=>(le(),he("tr",{key:a,class:Wn({"odd-row":a%2!==0})},[m("td",$E,Et(o.column1),1),m("td",null,Et(o.column2),1),m("td",BE,Et(o.column3),1)],2))),128))])])])}const HE=dn(LE,[["render",jE]]),WE="/vitevue-project/assets/edu-bloodtype-f9f6fcd8.jpg",VE="/vitevue-project/assets/edu-eligibility-56e0be29.jpg",KE="/vitevue-project/assets/edu-perks-72313c18.jpg";const zE={setup(){const e=im();function t(){e.push("/bloodtype")}function n(){e.push("/eligibility")}function i(){e.push("/perks")}function s(){e.push("/faq")}return{goToBloodType:t,goToEligibility:n,goToPerks:i,goToFAQ:s}},data(){return{imagePaths:{bloodType:WE,eligibility:VE,perks:KE}}}},qE={class:"education"},GE=m("h2",null,"WHY BLOOD?",-1),YE={class:"edu-div"},JE=["src"],XE={class:"edu-div-content"},QE=m("p",null,[m("b",null,"WHAT BLOOD TYPES MATCH?"),m("br"),We(" There are four main blood types: A, B, AB and O. Combinations of proteins and sugars, called antigens, on the surface of red blood cells are what makes the blood type either compatible or incompatible with other blood types.")],-1),ZE={class:"edu-div"},eI=["src"],tI={class:"edu-div-content"},nI=m("p",null,[m("b",null,"AM I ELIGIBLE TO DONATE?"),m("br"),We(" Curious about your eligibility to donate blood? Find out if you meet the criteria to make a life-saving contribution.")],-1),iI={class:"edu-div"},sI=["src"],rI={class:"edu-div-content"},oI=m("p",null,[m("b",null,"MALAYSIAN BLOOD DONOR PRIVILEGES"),m("br"),We(" Donating blood just once can save up to 3 lives but did you know regular blood donors get special medical privileges in Malaysia? Click 'Learn More' to explore the health benefits and medical privileges given to blood donors in Malaysia.")],-1),aI={class:"edu-div"},lI={class:"edu-div-content"},cI=m("p",null,[m("b",null,"FREQUENTLY ASKED QUESTIONS"),m("br"),We(" Answers to our most frequently asked questions are just one click away.")],-1);function uI(e,t,n,i,s,r){return le(),he("div",qE,[GE,m("div",YE,[m("img",{src:s.imagePaths.bloodType,alt:"Blood Type Image"},null,8,JE),m("div",XE,[QE,m("div",null,[m("button",{onClick:t[0]||(t[0]=(...o)=>i.goToBloodType&&i.goToBloodType(...o))},"Learn More")])])]),m("div",ZE,[m("img",{src:s.imagePaths.eligibility,alt:"Blood Donation Image"},null,8,eI),m("div",tI,[nI,m("div",null,[m("button",{onClick:t[1]||(t[1]=(...o)=>i.goToEligibility&&i.goToEligibility(...o))},"Learn More")])])]),m("div",iI,[m("img",{src:s.imagePaths.perks,alt:"Body Checkup Image"},null,8,sI),m("div",rI,[oI,m("div",null,[m("button",{onClick:t[2]||(t[2]=(...o)=>i.goToPerks&&i.goToPerks(...o))},"Learn More")])])]),m("div",aI,[m("div",lI,[cI,m("div",null,[m("button",{onClick:t[3]||(t[3]=(...o)=>i.goToFAQ&&i.goToFAQ(...o))},"Go to FAQ")])])])])}const hI=dn(zE,[["render",uI]]);const fI={id:"app"},dI={key:0},pI={style:{"text-align":"center"}},gI={style:{"text-align":"center"}},mI={key:1},_I={name:"App",components:{SignupForm:Af,LoginForm:Cf,"router-link":Ru},data(){return{isLoggedIn:!1,showLogin:!0,displayName:""}},beforeUpdate(){Nn.currentUser&&(this.displayName=Nn.currentUser.displayName)},methods:{logOut(){Sy(Nn).then(()=>{this.isLoggedIn=!1})}}},yI=Object.assign(_I,{setup(e){return(t,n)=>{const i=Gd("router-view");return le(),he(Oe,null,[m("div",fI,[ve(i)]),t.isLoggedIn?(le(),he("div",mI,[m("h2",null,"Welcome "+Et(t.displayName),1),ve(hI),m("button",{onClick:n[4]||(n[4]=(...s)=>t.logOut&&t.logOut(...s))},"Sign Out")])):(le(),he("div",dI,[t.showLogin?(le(),he(Oe,{key:0},[ve(Cf,{onLoggedIn:n[0]||(n[0]=s=>t.isLoggedIn=!0),class:"login"}),m("p",pI,[We("No account yet? "),m("span",{onClick:n[1]||(n[1]=s=>t.showLogin=!1),style:{"font-weight":"bold","text-decoration":"underline"}},"Sign Up"),We(" instead.")])],64)):(le(),he(Oe,{key:1},[ve(Af,{onLoggedIn:n[2]||(n[2]=s=>t.isLoggedIn=!0),class:"signup"}),m("p",gI,[We("Already registered? "),m("span",{onClick:n[3]||(n[3]=s=>t.showLogin=!0),style:{"font-weight":"bold","text-decoration":"underline"}},"Login"),We(" instead.")])],64))]))],64)}}}),vI=tm({history:yg(),routes:[{path:"/faq",component:kw},{path:"/bloodtype",component:HE},{path:"/eligibility",component:NE},{path:"/perks",component:$w}]}),Sf=Zp(yI);Sf.use(vI);Sf.mount("#app");
