(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Il(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ge={},hs=[],Tt=()=>{},lm=()=>!1,cm=/^on[^a-z]/,wo=t=>cm.test(t),Tl=t=>t.startsWith("onUpdate:"),Ne=Object.assign,Al=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},um=Object.prototype.hasOwnProperty,te=(t,e)=>um.call(t,e),j=Array.isArray,ds=t=>Vi(t)==="[object Map]",Jh=t=>Vi(t)==="[object Set]",Kc=t=>Vi(t)==="[object Date]",W=t=>typeof t=="function",ke=t=>typeof t=="string",gi=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",Yh=t=>pe(t)&&W(t.then)&&W(t.catch),Xh=Object.prototype.toString,Vi=t=>Xh.call(t),hm=t=>Vi(t).slice(8,-1),Zh=t=>Vi(t)==="[object Object]",Sl=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Sr=Il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dm=/-(\w)/g,jt=Eo(t=>t.replace(dm,(e,n)=>n?n.toUpperCase():"")),fm=/\B([A-Z])/g,Ls=Eo(t=>t.replace(fm,"-$1").toLowerCase()),bo=Eo(t=>t.charAt(0).toUpperCase()+t.slice(1)),aa=Eo(t=>t?`on${bo(t)}`:""),mi=(t,e)=>!Object.is(t,e),Cr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},$r=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ma=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zc;const La=()=>zc||(zc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cl(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ke(s)?ym(s):Cl(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ke(t))return t;if(pe(t))return t}}const pm=/;(?![^(]*\))/g,gm=/:([^]+)/,mm=/\/\*[^]*?\*\//g;function ym(t){const e={};return t.replace(mm,"").split(pm).forEach(n=>{if(n){const s=n.split(gm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Yn(t){let e="";if(ke(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=Yn(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_m=Il(vm);function ed(t){return!!t||t===""}function wm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Br(t[s],e[s]);return n}function Br(t,e){if(t===e)return!0;let n=Kc(t),s=Kc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=gi(t),s=gi(e),n||s)return t===e;if(n=j(t),s=j(e),n||s)return n&&s?wm(t,e):!1;if(n=pe(t),s=pe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Br(t[o],e[o]))return!1}}return String(t)===String(e)}const Be=t=>ke(t)?t:t==null?"":j(t)||pe(t)&&(t.toString===Xh||!W(t.toString))?JSON.stringify(t,td,2):String(t),td=(t,e)=>e&&e.__v_isRef?td(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Jh(e)?{[`Set(${e.size})`]:[...e.values()]}:pe(e)&&!j(e)&&!Zh(e)?String(e):e;let vt;class Em{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=vt;try{return vt=this,e()}finally{vt=n}}}on(){vt=this}off(){vt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function bm(t,e=vt){e&&e.active&&e.effects.push(t)}function Im(){return vt}const kl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},nd=t=>(t.w&En)>0,sd=t=>(t.n&En)>0,Tm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=En},Am=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];nd(i)&&!sd(i)?i.delete(t):e[n++]=i,i.w&=~En,i.n&=~En}e.length=n}},Ua=new WeakMap;let Zs=0,En=1;const Fa=30;let wt;const Fn=Symbol(""),$a=Symbol("");class Rl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bm(this,s)}run(){if(!this.active)return this.fn();let e=wt,n=gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,gn=!0,En=1<<++Zs,Zs<=Fa?Tm(this):Wc(this),this.fn()}finally{Zs<=Fa&&Am(this),En=1<<--Zs,wt=this.parent,gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Wc(this),this.onStop&&this.onStop(),this.active=!1)}}function Wc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gn=!0;const id=[];function Us(){id.push(gn),gn=!1}function Fs(){const t=id.pop();gn=t===void 0?!0:t}function ot(t,e,n){if(gn&&wt){let s=Ua.get(t);s||Ua.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=kl()),rd(i)}}function rd(t,e){let n=!1;Zs<=Fa?sd(t)||(t.n|=En,n=!nd(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function Yt(t,e,n,s,i,r){const o=Ua.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?Sl(n)&&a.push(o.get("length")):(a.push(o.get(Fn)),ds(t)&&a.push(o.get($a)));break;case"delete":j(t)||(a.push(o.get(Fn)),ds(t)&&a.push(o.get($a)));break;case"set":ds(t)&&a.push(o.get(Fn));break}if(a.length===1)a[0]&&Ba(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ba(kl(l))}}function Ba(t,e){const n=j(t)?t:[...t];for(const s of n)s.computed&&Gc(s);for(const s of n)s.computed||Gc(s)}function Gc(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Sm=Il("__proto__,__v_isRef,__isVue"),od=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gi)),Cm=Dl(),km=Dl(!1,!0),Rm=Dl(!0),Qc=Dm();function Dm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=se(this);for(let r=0,o=this.length;r<o;r++)ot(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Us();const s=se(this)[e].apply(this,n);return Fs(),s}}),t}function Pm(t){const e=se(this);return ot(e,"has",t),e.hasOwnProperty(t)}function Dl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Wm:hd:e?ud:cd).get(s))return s;const o=j(s);if(!t){if(o&&te(Qc,i))return Reflect.get(Qc,i,r);if(i==="hasOwnProperty")return Pm}const a=Reflect.get(s,i,r);return(gi(i)?od.has(i):Sm(i))||(t||ot(s,"get",i),e)?a:Je(a)?o&&Sl(i)?a:a.value:pe(a)?t?dd(a):ji(a):a}}const Om=ad(),Nm=ad(!0);function ad(t=!1){return function(n,s,i,r){let o=n[s];if(bs(o)&&Je(o)&&!Je(i))return!1;if(!t&&(!Vr(i)&&!bs(i)&&(o=se(o),i=se(i)),!j(n)&&Je(o)&&!Je(i)))return o.value=i,!0;const a=j(n)&&Sl(s)?Number(s)<n.length:te(n,s),l=Reflect.set(n,s,i,r);return n===se(r)&&(a?mi(i,o)&&Yt(n,"set",s,i):Yt(n,"add",s,i)),l}}function xm(t,e){const n=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Yt(t,"delete",e,void 0),s}function Mm(t,e){const n=Reflect.has(t,e);return(!gi(e)||!od.has(e))&&ot(t,"has",e),n}function Lm(t){return ot(t,"iterate",j(t)?"length":Fn),Reflect.ownKeys(t)}const ld={get:Cm,set:Om,deleteProperty:xm,has:Mm,ownKeys:Lm},Um={get:Rm,set(t,e){return!0},deleteProperty(t,e){return!0}},Fm=Ne({},ld,{get:km,set:Nm}),Pl=t=>t,Io=t=>Reflect.getPrototypeOf(t);function ur(t,e,n=!1,s=!1){t=t.__v_raw;const i=se(t),r=se(e);n||(e!==r&&ot(i,"get",e),ot(i,"get",r));const{has:o}=Io(i),a=s?Pl:n?xl:yi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function hr(t,e=!1){const n=this.__v_raw,s=se(n),i=se(t);return e||(t!==i&&ot(s,"has",t),ot(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function dr(t,e=!1){return t=t.__v_raw,!e&&ot(se(t),"iterate",Fn),Reflect.get(t,"size",t)}function Jc(t){t=se(t);const e=se(this);return Io(e).has.call(e,t)||(e.add(t),Yt(e,"add",t,t)),this}function Yc(t,e){e=se(e);const n=se(this),{has:s,get:i}=Io(n);let r=s.call(n,t);r||(t=se(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?mi(e,o)&&Yt(n,"set",t,e):Yt(n,"add",t,e),this}function Xc(t){const e=se(this),{has:n,get:s}=Io(e);let i=n.call(e,t);i||(t=se(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Yt(e,"delete",t,void 0),r}function Zc(){const t=se(this),e=t.size!==0,n=t.clear();return e&&Yt(t,"clear",void 0,void 0),n}function fr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=se(o),l=e?Pl:t?xl:yi;return!t&&ot(a,"iterate",Fn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function pr(t,e,n){return function(...s){const i=this.__v_raw,r=se(i),o=ds(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Pl:e?xl:yi;return!e&&ot(r,"iterate",l?$a:Fn),{next(){const{value:d,done:g}=c.next();return g?{value:d,done:g}:{value:a?[u(d[0]),u(d[1])]:u(d),done:g}},[Symbol.iterator](){return this}}}}function on(t){return function(...e){return t==="delete"?!1:this}}function $m(){const t={get(r){return ur(this,r)},get size(){return dr(this)},has:hr,add:Jc,set:Yc,delete:Xc,clear:Zc,forEach:fr(!1,!1)},e={get(r){return ur(this,r,!1,!0)},get size(){return dr(this)},has:hr,add:Jc,set:Yc,delete:Xc,clear:Zc,forEach:fr(!1,!0)},n={get(r){return ur(this,r,!0)},get size(){return dr(this,!0)},has(r){return hr.call(this,r,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:fr(!0,!1)},s={get(r){return ur(this,r,!0,!0)},get size(){return dr(this,!0)},has(r){return hr.call(this,r,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=pr(r,!1,!1),n[r]=pr(r,!0,!1),e[r]=pr(r,!1,!0),s[r]=pr(r,!0,!0)}),[t,n,e,s]}const[Bm,Vm,jm,Hm]=$m();function Ol(t,e){const n=e?t?Hm:jm:t?Vm:Bm;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const qm={get:Ol(!1,!1)},Km={get:Ol(!1,!0)},zm={get:Ol(!0,!1)},cd=new WeakMap,ud=new WeakMap,hd=new WeakMap,Wm=new WeakMap;function Gm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qm(t){return t.__v_skip||!Object.isExtensible(t)?0:Gm(hm(t))}function ji(t){return bs(t)?t:Nl(t,!1,ld,qm,cd)}function Jm(t){return Nl(t,!1,Fm,Km,ud)}function dd(t){return Nl(t,!0,Um,zm,hd)}function Nl(t,e,n,s,i){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Qm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function fs(t){return bs(t)?fs(t.__v_raw):!!(t&&t.__v_isReactive)}function bs(t){return!!(t&&t.__v_isReadonly)}function Vr(t){return!!(t&&t.__v_isShallow)}function fd(t){return fs(t)||bs(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function pd(t){return $r(t,"__v_skip",!0),t}const yi=t=>pe(t)?ji(t):t,xl=t=>pe(t)?dd(t):t;function gd(t){gn&&wt&&(t=se(t),rd(t.dep||(t.dep=kl())))}function md(t,e){t=se(t);const n=t.dep;n&&Ba(n)}function Je(t){return!!(t&&t.__v_isRef===!0)}function yd(t){return vd(t,!1)}function Ym(t){return vd(t,!0)}function vd(t,e){return Je(t)?t:new Xm(t,e)}class Xm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:yi(e)}get value(){return gd(this),this._value}set value(e){const n=this.__v_isShallow||Vr(e)||bs(e);e=n?e:se(e),mi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:yi(e),md(this))}}function ps(t){return Je(t)?t.value:t}const Zm={get:(t,e,n)=>ps(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Je(i)&&!Je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function _d(t){return fs(t)?t:new Proxy(t,Zm)}class ey{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Rl(e,()=>{this._dirty||(this._dirty=!0,md(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=se(this);return gd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ty(t,e,n=!1){let s,i;const r=W(t);return r?(s=t,i=Tt):(s=t.get,i=t.set),new ey(s,i,r||!i,n)}function mn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){To(r,e,n)}return i}function At(t,e,n,s){if(W(t)){const r=mn(t,e,n,s);return r&&Yh(r)&&r.catch(o=>{To(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(At(t[r],e,n,s));return i}function To(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){mn(l,null,10,[t,o,a]);return}}ny(t,n,i,s)}function ny(t,e,n,s=!0){console.error(t)}let vi=!1,Va=!1;const Ge=[];let Nt=0;const gs=[];let Wt=null,Pn=0;const wd=Promise.resolve();let Ml=null;function Ed(t){const e=Ml||wd;return t?e.then(this?t.bind(this):t):e}function sy(t){let e=Nt+1,n=Ge.length;for(;e<n;){const s=e+n>>>1;_i(Ge[s])<t?e=s+1:n=s}return e}function Ll(t){(!Ge.length||!Ge.includes(t,vi&&t.allowRecurse?Nt+1:Nt))&&(t.id==null?Ge.push(t):Ge.splice(sy(t.id),0,t),bd())}function bd(){!vi&&!Va&&(Va=!0,Ml=wd.then(Td))}function iy(t){const e=Ge.indexOf(t);e>Nt&&Ge.splice(e,1)}function ry(t){j(t)?gs.push(...t):(!Wt||!Wt.includes(t,t.allowRecurse?Pn+1:Pn))&&gs.push(t),bd()}function eu(t,e=vi?Nt+1:0){for(;e<Ge.length;e++){const n=Ge[e];n&&n.pre&&(Ge.splice(e,1),e--,n())}}function Id(t){if(gs.length){const e=[...new Set(gs)];if(gs.length=0,Wt){Wt.push(...e);return}for(Wt=e,Wt.sort((n,s)=>_i(n)-_i(s)),Pn=0;Pn<Wt.length;Pn++)Wt[Pn]();Wt=null,Pn=0}}const _i=t=>t.id==null?1/0:t.id,oy=(t,e)=>{const n=_i(t)-_i(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Td(t){Va=!1,vi=!0,Ge.sort(oy);const e=Tt;try{for(Nt=0;Nt<Ge.length;Nt++){const n=Ge[Nt];n&&n.active!==!1&&mn(n,null,14)}}finally{Nt=0,Ge.length=0,Id(),vi=!1,Ml=null,(Ge.length||gs.length)&&Td()}}function ay(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ge;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:g}=s[u]||ge;g&&(i=n.map(y=>ke(y)?y.trim():y)),d&&(i=n.map(Ma))}let a,l=s[a=aa(e)]||s[a=aa(jt(e))];!l&&r&&(l=s[a=aa(Ls(e))]),l&&At(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(c,t,6,i)}}function Ad(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!W(t)){const l=c=>{const u=Ad(c,e,!0);u&&(a=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(pe(t)&&s.set(t,null),null):(j(r)?r.forEach(l=>o[l]=null):Ne(o,r),pe(t)&&s.set(t,o),o)}function Ao(t,e){return!t||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,Ls(e))||te(t,e))}let mt=null,Sd=null;function jr(t){const e=mt;return mt=t,Sd=t&&t.type.__scopeId||null,e}function ly(t,e=mt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&hu(-1);const r=jr(e);let o;try{o=t(...i)}finally{jr(r),s._d&&hu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function la(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:g,setupState:y,ctx:I,inheritAttrs:C}=t;let O,N;const M=jr(t);try{if(n.shapeFlag&4){const L=i||s;O=Ot(u.call(L,L,d,r,y,g,I)),N=l}else{const L=e;O=Ot(L.length>1?L(r,{attrs:l,slots:a,emit:c}):L(r,null)),N=e.props?l:cy(l)}}catch(L){oi.length=0,To(L,t,1),O=Se(Hn)}let G=O;if(N&&C!==!1){const L=Object.keys(N),{shapeFlag:Ee}=G;L.length&&Ee&7&&(o&&L.some(Tl)&&(N=uy(N,o)),G=Is(G,N))}return n.dirs&&(G=Is(G),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&(G.transition=n.transition),O=G,jr(M),O}const cy=t=>{let e;for(const n in t)(n==="class"||n==="style"||wo(n))&&((e||(e={}))[n]=t[n]);return e},uy=(t,e)=>{const n={};for(const s in t)(!Tl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hy(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?tu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const g=u[d];if(o[g]!==s[g]&&!Ao(c,g))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?tu(s,o,c):!0:!!o;return!1}function tu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ao(n,r))return!0}return!1}function dy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const fy=t=>t.__isSuspense;function py(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):ry(t)}const gr={};function kr(t,e,n){return Cd(t,e,n)}function Cd(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ge){var a;const l=Im()===((a=Ve)==null?void 0:a.scope)?Ve:null;let c,u=!1,d=!1;if(Je(t)?(c=()=>t.value,u=Vr(t)):fs(t)?(c=()=>t,s=!0):j(t)?(d=!0,u=t.some(L=>fs(L)||Vr(L)),c=()=>t.map(L=>{if(Je(L))return L.value;if(fs(L))return xn(L);if(W(L))return mn(L,l,2)})):W(t)?e?c=()=>mn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return g&&g(),At(t,l,3,[y])}:c=Tt,e&&s){const L=c;c=()=>xn(L())}let g,y=L=>{g=M.onStop=()=>{mn(L,l,4)}},I;if(bi)if(y=Tt,e?n&&At(e,l,3,[c(),d?[]:void 0,y]):c(),i==="sync"){const L=av();I=L.__watcherHandles||(L.__watcherHandles=[])}else return Tt;let C=d?new Array(t.length).fill(gr):gr;const O=()=>{if(M.active)if(e){const L=M.run();(s||u||(d?L.some((Ee,_e)=>mi(Ee,C[_e])):mi(L,C)))&&(g&&g(),At(e,l,3,[L,C===gr?void 0:d&&C[0]===gr?[]:C,y]),C=L)}else M.run()};O.allowRecurse=!!e;let N;i==="sync"?N=O:i==="post"?N=()=>rt(O,l&&l.suspense):(O.pre=!0,l&&(O.id=l.uid),N=()=>Ll(O));const M=new Rl(c,N);e?n?O():C=M.run():i==="post"?rt(M.run.bind(M),l&&l.suspense):M.run();const G=()=>{M.stop(),l&&l.scope&&Al(l.scope.effects,M)};return I&&I.push(G),G}function gy(t,e,n){const s=this.proxy,i=ke(t)?t.includes(".")?kd(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=Ve;Ts(this);const a=Cd(i,r.bind(s),n);return o?Ts(o):$n(),a}function kd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function xn(t,e){if(!pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Je(t))xn(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)xn(t[n],e);else if(Jh(t)||ds(t))t.forEach(n=>{xn(n,e)});else if(Zh(t))for(const n in t)xn(t[n],e);return t}function oe(t,e){const n=mt;if(n===null)return t;const s=Ro(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ge]=e[r];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&xn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function kn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Us(),At(l,n,8,[t.el,a,t,e]),Fs())}}function Rd(t,e){return W(t)?(()=>Ne({name:t.name},e,{setup:t}))():t}const Rr=t=>!!t.type.__asyncLoader,Dd=t=>t.type.__isKeepAlive;function my(t,e){Pd(t,"a",e)}function yy(t,e){Pd(t,"da",e)}function Pd(t,e,n=Ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(So(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Dd(i.parent.vnode)&&vy(s,e,n,i),i=i.parent}}function vy(t,e,n,s){const i=So(e,t,s,!0);Nd(()=>{Al(s[e],i)},n)}function So(t,e,n=Ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Us(),Ts(n);const a=At(e,n,t,o);return $n(),Fs(),a});return s?i.unshift(r):i.push(r),r}}const tn=t=>(e,n=Ve)=>(!bi||t==="sp")&&So(t,(...s)=>e(...s),n),_y=tn("bm"),Od=tn("m"),wy=tn("bu"),Ey=tn("u"),by=tn("bum"),Nd=tn("um"),Iy=tn("sp"),Ty=tn("rtg"),Ay=tn("rtc");function Sy(t,e=Ve){So("ec",t,e)}const xd="components";function Ul(t,e){return ky(xd,t,!0,e)||t}const Cy=Symbol.for("v-ndc");function ky(t,e,n=!0,s=!1){const i=mt||Ve;if(i){const r=i.type;if(t===xd){const a=iv(r,!1);if(a&&(a===e||a===jt(e)||a===bo(jt(e))))return r}const o=nu(i[t]||r[t],e)||nu(i.appContext[t],e);return!o&&s?r:o}}function nu(t,e){return t&&(t[e]||t[jt(e)]||t[bo(jt(e))])}function wi(t,e,n,s){let i;const r=n&&n[s];if(j(t)||ke(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const ja=t=>t?Kd(t)?Ro(t)||t.proxy:ja(t.parent):null,ri=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ja(t.parent),$root:t=>ja(t.root),$emit:t=>t.emit,$options:t=>Fl(t),$forceUpdate:t=>t.f||(t.f=()=>Ll(t.update)),$nextTick:t=>t.n||(t.n=Ed.bind(t.proxy)),$watch:t=>gy.bind(t)}),ca=(t,e)=>t!==ge&&!t.__isScriptSetup&&te(t,e),Ry={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ca(s,e))return o[e]=1,s[e];if(i!==ge&&te(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&te(c,e))return o[e]=3,r[e];if(n!==ge&&te(n,e))return o[e]=4,n[e];Ha&&(o[e]=0)}}const u=ri[e];let d,g;if(u)return e==="$attrs"&&ot(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ge&&te(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,te(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ca(i,e)?(i[e]=n,!0):s!==ge&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ge&&te(t,o)||ca(e,o)||(a=r[0])&&te(a,o)||te(s,o)||te(ri,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function su(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ha=!0;function Dy(t){const e=Fl(t),n=t.proxy,s=t.ctx;Ha=!1,e.beforeCreate&&iu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:g,beforeUpdate:y,updated:I,activated:C,deactivated:O,beforeDestroy:N,beforeUnmount:M,destroyed:G,unmounted:L,render:Ee,renderTracked:_e,renderTriggered:He,errorCaptured:ct,serverPrefetch:ut,expose:ft,inheritAttrs:sn,components:Cn,directives:kt,filters:Ws}=e;if(c&&Py(c,s,null),o)for(const he in o){const ie=o[he];W(ie)&&(s[he]=ie.bind(n))}if(i){const he=i.call(n,n);pe(he)&&(t.data=ji(he))}if(Ha=!0,r)for(const he in r){const ie=r[he],Kt=W(ie)?ie.bind(n,n):W(ie.get)?ie.get.bind(n,n):Tt,rn=!W(ie)&&W(ie.set)?ie.set.bind(n):Tt,Rt=pt({get:Kt,set:rn});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:it=>Rt.value=it})}if(a)for(const he in a)Md(a[he],s,n,he);if(l){const he=W(l)?l.call(n):l;Reflect.ownKeys(he).forEach(ie=>{Dr(ie,he[ie])})}u&&iu(u,t,"c");function Re(he,ie){j(ie)?ie.forEach(Kt=>he(Kt.bind(n))):ie&&he(ie.bind(n))}if(Re(_y,d),Re(Od,g),Re(wy,y),Re(Ey,I),Re(my,C),Re(yy,O),Re(Sy,ct),Re(Ay,_e),Re(Ty,He),Re(by,M),Re(Nd,L),Re(Iy,ut),j(ft))if(ft.length){const he=t.exposed||(t.exposed={});ft.forEach(ie=>{Object.defineProperty(he,ie,{get:()=>n[ie],set:Kt=>n[ie]=Kt})})}else t.exposed||(t.exposed={});Ee&&t.render===Tt&&(t.render=Ee),sn!=null&&(t.inheritAttrs=sn),Cn&&(t.components=Cn),kt&&(t.directives=kt)}function Py(t,e,n=Tt){j(t)&&(t=qa(t));for(const s in t){const i=t[s];let r;pe(i)?"default"in i?r=Ut(i.from||s,i.default,!0):r=Ut(i.from||s):r=Ut(i),Je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function iu(t,e,n){At(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Md(t,e,n,s){const i=s.includes(".")?kd(n,s):()=>n[s];if(ke(t)){const r=e[t];W(r)&&kr(i,r)}else if(W(t))kr(i,t.bind(n));else if(pe(t))if(j(t))t.forEach(r=>Md(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&kr(i,r,t)}}function Fl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Hr(l,c,o,!0)),Hr(l,e,o)),pe(e)&&r.set(e,l),l}function Hr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Hr(t,r,n,!0),i&&i.forEach(o=>Hr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Oy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Oy={data:ru,props:ou,emits:ou,methods:ei,computed:ei,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:ei,directives:ei,watch:xy,provide:ru,inject:Ny};function ru(t,e){return e?t?function(){return Ne(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Ny(t,e){return ei(qa(t),qa(e))}function qa(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function ei(t,e){return t?Ne(Object.create(null),t,e):e}function ou(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:Ne(Object.create(null),su(t),su(e??{})):e}function xy(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const s in e)n[s]=et(t[s],e[s]);return n}function Ld(){return{app:null,config:{isNativeTag:lm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let My=0;function Ly(t,e){return function(s,i=null){W(s)||(s=Ne({},s)),i!=null&&!pe(i)&&(i=null);const r=Ld(),o=new Set;let a=!1;const l=r.app={_uid:My++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:lv,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(l,...u)):W(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const g=Se(s,i);return g.appContext=r,u&&e?e(g,c):t(g,c,d),a=!0,l._container=c,c.__vue_app__=l,Ro(g.component)||g.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){qr=l;try{return c()}finally{qr=null}}};return l}}let qr=null;function Dr(t,e){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[t]=e}}function Ut(t,e,n=!1){const s=Ve||mt;if(s||qr){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:qr._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s&&s.proxy):e}}function Uy(t,e,n,s=!1){const i={},r={};$r(r,ko,1),t.propsDefaults=Object.create(null),Ud(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Jm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Fy(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=se(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let g=u[d];if(Ao(t.emitsOptions,g))continue;const y=e[g];if(l)if(te(r,g))y!==r[g]&&(r[g]=y,c=!0);else{const I=jt(g);i[I]=Ka(l,a,I,y,t,!1)}else y!==r[g]&&(r[g]=y,c=!0)}}}else{Ud(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!te(e,d)&&((u=Ls(d))===d||!te(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ka(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!te(e,d))&&(delete r[d],c=!0)}c&&Yt(t,"set","$attrs")}function Ud(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Sr(l))continue;const c=e[l];let u;i&&te(i,u=jt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ao(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=se(n),c=a||ge;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ka(i,l,d,c[d],t,!te(c,d))}}return o}function Ka(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&W(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ts(i),s=c[n]=l.call(null,e),$n())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ls(n))&&(s=!0))}return s}function Fd(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!W(t)){const u=d=>{l=!0;const[g,y]=Fd(d,e,!0);Ne(o,g),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return pe(t)&&s.set(t,hs),hs;if(j(r))for(let u=0;u<r.length;u++){const d=jt(r[u]);au(d)&&(o[d]=ge)}else if(r)for(const u in r){const d=jt(u);if(au(d)){const g=r[u],y=o[d]=j(g)||W(g)?{type:g}:Ne({},g);if(y){const I=uu(Boolean,y.type),C=uu(String,y.type);y[0]=I>-1,y[1]=C<0||I<C,(I>-1||te(y,"default"))&&a.push(d)}}}const c=[o,a];return pe(t)&&s.set(t,c),c}function au(t){return t[0]!=="$"}function lu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function cu(t,e){return lu(t)===lu(e)}function uu(t,e){return j(e)?e.findIndex(n=>cu(n,t)):W(e)&&cu(e,t)?0:-1}const $d=t=>t[0]==="_"||t==="$stable",$l=t=>j(t)?t.map(Ot):[Ot(t)],$y=(t,e,n)=>{if(e._n)return e;const s=ly((...i)=>$l(e(...i)),n);return s._c=!1,s},Bd=(t,e,n)=>{const s=t._ctx;for(const i in t){if($d(i))continue;const r=t[i];if(W(r))e[i]=$y(i,r,s);else if(r!=null){const o=$l(r);e[i]=()=>o}}},Vd=(t,e)=>{const n=$l(e);t.slots.default=()=>n},By=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),$r(e,"_",n)):Bd(e,t.slots={})}else t.slots={},e&&Vd(t,e);$r(t.slots,ko,1)},Vy=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ge;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ne(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Bd(e,i)),o=e}else e&&(Vd(t,e),o={default:1});if(r)for(const a in i)!$d(a)&&!(a in o)&&delete i[a]};function za(t,e,n,s,i=!1){if(j(t)){t.forEach((g,y)=>za(g,e&&(j(e)?e[y]:e),n,s,i));return}if(Rr(s)&&!i)return;const r=s.shapeFlag&4?Ro(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(ke(c)?(u[c]=null,te(d,c)&&(d[c]=null)):Je(c)&&(c.value=null)),W(l))mn(l,a,12,[o,u]);else{const g=ke(l),y=Je(l);if(g||y){const I=()=>{if(t.f){const C=g?te(d,l)?d[l]:u[l]:l.value;i?j(C)&&Al(C,r):j(C)?C.includes(r)||C.push(r):g?(u[l]=[r],te(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,te(d,l)&&(d[l]=o)):y&&(l.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,rt(I,n)):I()}}}const rt=py;function jy(t){return Hy(t)}function Hy(t,e){const n=La();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:g,setScopeId:y=Tt,insertStaticContent:I}=t,C=(f,p,m,v=null,w=null,E=null,P=!1,S=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!Qs(f,p)&&(v=_(f),it(f,w,E,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:b,ref:$,shapeFlag:U}=p;switch(b){case Co:O(f,p,m,v);break;case Hn:N(f,p,m,v);break;case Pr:f==null&&M(p,m,v,P);break;case Ce:Cn(f,p,m,v,w,E,P,S,k);break;default:U&1?Ee(f,p,m,v,w,E,P,S,k):U&6?kt(f,p,m,v,w,E,P,S,k):(U&64||U&128)&&b.process(f,p,m,v,w,E,P,S,k,R)}$!=null&&w&&za($,f&&f.ref,E,p||f,!p)},O=(f,p,m,v)=>{if(f==null)s(p.el=a(p.children),m,v);else{const w=p.el=f.el;p.children!==f.children&&c(w,p.children)}},N=(f,p,m,v)=>{f==null?s(p.el=l(p.children||""),m,v):p.el=f.el},M=(f,p,m,v)=>{[f.el,f.anchor]=I(f.children,p,m,v,f.el,f.anchor)},G=({el:f,anchor:p},m,v)=>{let w;for(;f&&f!==p;)w=g(f),s(f,m,v),f=w;s(p,m,v)},L=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=g(f),i(f),f=m;i(p)},Ee=(f,p,m,v,w,E,P,S,k)=>{P=P||p.type==="svg",f==null?_e(p,m,v,w,E,P,S,k):ut(f,p,w,E,P,S,k)},_e=(f,p,m,v,w,E,P,S)=>{let k,b;const{type:$,props:U,shapeFlag:B,transition:z,dirs:Y}=f;if(k=f.el=o(f.type,E,U&&U.is,U),B&8?u(k,f.children):B&16&&ct(f.children,k,null,v,w,E&&$!=="foreignObject",P,S),Y&&kn(f,null,v,"created"),He(k,f,f.scopeId,P,v),U){for(const ce in U)ce!=="value"&&!Sr(ce)&&r(k,ce,null,U[ce],E,f.children,v,w,qe);"value"in U&&r(k,"value",null,U.value),(b=U.onVnodeBeforeMount)&&Pt(b,v,f)}Y&&kn(f,null,v,"beforeMount");const de=(!w||w&&!w.pendingBranch)&&z&&!z.persisted;de&&z.beforeEnter(k),s(k,p,m),((b=U&&U.onVnodeMounted)||de||Y)&&rt(()=>{b&&Pt(b,v,f),de&&z.enter(k),Y&&kn(f,null,v,"mounted")},w)},He=(f,p,m,v,w)=>{if(m&&y(f,m),v)for(let E=0;E<v.length;E++)y(f,v[E]);if(w){let E=w.subTree;if(p===E){const P=w.vnode;He(f,P,P.scopeId,P.slotScopeIds,w.parent)}}},ct=(f,p,m,v,w,E,P,S,k=0)=>{for(let b=k;b<f.length;b++){const $=f[b]=S?cn(f[b]):Ot(f[b]);C(null,$,p,m,v,w,E,P,S)}},ut=(f,p,m,v,w,E,P)=>{const S=p.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:$}=p;k|=f.patchFlag&16;const U=f.props||ge,B=p.props||ge;let z;m&&Rn(m,!1),(z=B.onVnodeBeforeUpdate)&&Pt(z,m,p,f),$&&kn(p,f,m,"beforeUpdate"),m&&Rn(m,!0);const Y=w&&p.type!=="foreignObject";if(b?ft(f.dynamicChildren,b,S,m,v,Y,E):P||ie(f,p,S,null,m,v,Y,E,!1),k>0){if(k&16)sn(S,p,U,B,m,v,w);else if(k&2&&U.class!==B.class&&r(S,"class",null,B.class,w),k&4&&r(S,"style",U.style,B.style,w),k&8){const de=p.dynamicProps;for(let ce=0;ce<de.length;ce++){const Te=de[ce],yt=U[Te],is=B[Te];(is!==yt||Te==="value")&&r(S,Te,yt,is,w,f.children,m,v,qe)}}k&1&&f.children!==p.children&&u(S,p.children)}else!P&&b==null&&sn(S,p,U,B,m,v,w);((z=B.onVnodeUpdated)||$)&&rt(()=>{z&&Pt(z,m,p,f),$&&kn(p,f,m,"updated")},v)},ft=(f,p,m,v,w,E,P)=>{for(let S=0;S<p.length;S++){const k=f[S],b=p[S],$=k.el&&(k.type===Ce||!Qs(k,b)||k.shapeFlag&70)?d(k.el):m;C(k,b,$,null,v,w,E,P,!0)}},sn=(f,p,m,v,w,E,P)=>{if(m!==v){if(m!==ge)for(const S in m)!Sr(S)&&!(S in v)&&r(f,S,m[S],null,P,p.children,w,E,qe);for(const S in v){if(Sr(S))continue;const k=v[S],b=m[S];k!==b&&S!=="value"&&r(f,S,b,k,P,p.children,w,E,qe)}"value"in v&&r(f,"value",m.value,v.value)}},Cn=(f,p,m,v,w,E,P,S,k)=>{const b=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:B,slotScopeIds:z}=p;z&&(S=S?S.concat(z):z),f==null?(s(b,m,v),s($,m,v),ct(p.children,m,$,w,E,P,S,k)):U>0&&U&64&&B&&f.dynamicChildren?(ft(f.dynamicChildren,B,m,w,E,P,S),(p.key!=null||w&&p===w.subTree)&&jd(f,p,!0)):ie(f,p,m,$,w,E,P,S,k)},kt=(f,p,m,v,w,E,P,S,k)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?w.ctx.activate(p,m,v,P,k):Ws(p,m,v,w,E,P,k):ts(f,p,k)},Ws=(f,p,m,v,w,E,P)=>{const S=f.component=Zy(f,v,w);if(Dd(f)&&(S.ctx.renderer=R),ev(S),S.asyncDep){if(w&&w.registerDep(S,Re),!f.el){const k=S.subTree=Se(Hn);N(null,k,p,m)}return}Re(S,f,p,m,w,E,P)},ts=(f,p,m)=>{const v=p.component=f.component;if(hy(f,p,m))if(v.asyncDep&&!v.asyncResolved){he(v,p,m);return}else v.next=p,iy(v.update),v.update();else p.el=f.el,v.vnode=p},Re=(f,p,m,v,w,E,P)=>{const S=()=>{if(f.isMounted){let{next:$,bu:U,u:B,parent:z,vnode:Y}=f,de=$,ce;Rn(f,!1),$?($.el=Y.el,he(f,$,P)):$=Y,U&&Cr(U),(ce=$.props&&$.props.onVnodeBeforeUpdate)&&Pt(ce,z,$,Y),Rn(f,!0);const Te=la(f),yt=f.subTree;f.subTree=Te,C(yt,Te,d(yt.el),_(yt),f,w,E),$.el=Te.el,de===null&&dy(f,Te.el),B&&rt(B,w),(ce=$.props&&$.props.onVnodeUpdated)&&rt(()=>Pt(ce,z,$,Y),w)}else{let $;const{el:U,props:B}=p,{bm:z,m:Y,parent:de}=f,ce=Rr(p);if(Rn(f,!1),z&&Cr(z),!ce&&($=B&&B.onVnodeBeforeMount)&&Pt($,de,p),Rn(f,!0),U&&re){const Te=()=>{f.subTree=la(f),re(U,f.subTree,f,w,null)};ce?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Te()):Te()}else{const Te=f.subTree=la(f);C(null,Te,m,v,f,w,E),p.el=Te.el}if(Y&&rt(Y,w),!ce&&($=B&&B.onVnodeMounted)){const Te=p;rt(()=>Pt($,de,Te),w)}(p.shapeFlag&256||de&&Rr(de.vnode)&&de.vnode.shapeFlag&256)&&f.a&&rt(f.a,w),f.isMounted=!0,p=m=v=null}},k=f.effect=new Rl(S,()=>Ll(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,Rn(f,!0),b()},he=(f,p,m)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Fy(f,p.props,v,m),Vy(f,p.children,m),Us(),eu(),Fs()},ie=(f,p,m,v,w,E,P,S,k=!1)=>{const b=f&&f.children,$=f?f.shapeFlag:0,U=p.children,{patchFlag:B,shapeFlag:z}=p;if(B>0){if(B&128){rn(b,U,m,v,w,E,P,S,k);return}else if(B&256){Kt(b,U,m,v,w,E,P,S,k);return}}z&8?($&16&&qe(b,w,E),U!==b&&u(m,U)):$&16?z&16?rn(b,U,m,v,w,E,P,S,k):qe(b,w,E,!0):($&8&&u(m,""),z&16&&ct(U,m,v,w,E,P,S,k))},Kt=(f,p,m,v,w,E,P,S,k)=>{f=f||hs,p=p||hs;const b=f.length,$=p.length,U=Math.min(b,$);let B;for(B=0;B<U;B++){const z=p[B]=k?cn(p[B]):Ot(p[B]);C(f[B],z,m,null,w,E,P,S,k)}b>$?qe(f,w,E,!0,!1,U):ct(p,m,v,w,E,P,S,k,U)},rn=(f,p,m,v,w,E,P,S,k)=>{let b=0;const $=p.length;let U=f.length-1,B=$-1;for(;b<=U&&b<=B;){const z=f[b],Y=p[b]=k?cn(p[b]):Ot(p[b]);if(Qs(z,Y))C(z,Y,m,null,w,E,P,S,k);else break;b++}for(;b<=U&&b<=B;){const z=f[U],Y=p[B]=k?cn(p[B]):Ot(p[B]);if(Qs(z,Y))C(z,Y,m,null,w,E,P,S,k);else break;U--,B--}if(b>U){if(b<=B){const z=B+1,Y=z<$?p[z].el:v;for(;b<=B;)C(null,p[b]=k?cn(p[b]):Ot(p[b]),m,Y,w,E,P,S,k),b++}}else if(b>B)for(;b<=U;)it(f[b],w,E,!0),b++;else{const z=b,Y=b,de=new Map;for(b=Y;b<=B;b++){const ht=p[b]=k?cn(p[b]):Ot(p[b]);ht.key!=null&&de.set(ht.key,b)}let ce,Te=0;const yt=B-Y+1;let is=!1,jc=0;const Gs=new Array(yt);for(b=0;b<yt;b++)Gs[b]=0;for(b=z;b<=U;b++){const ht=f[b];if(Te>=yt){it(ht,w,E,!0);continue}let Dt;if(ht.key!=null)Dt=de.get(ht.key);else for(ce=Y;ce<=B;ce++)if(Gs[ce-Y]===0&&Qs(ht,p[ce])){Dt=ce;break}Dt===void 0?it(ht,w,E,!0):(Gs[Dt-Y]=b+1,Dt>=jc?jc=Dt:is=!0,C(ht,p[Dt],m,null,w,E,P,S,k),Te++)}const Hc=is?qy(Gs):hs;for(ce=Hc.length-1,b=yt-1;b>=0;b--){const ht=Y+b,Dt=p[ht],qc=ht+1<$?p[ht+1].el:v;Gs[b]===0?C(null,Dt,m,qc,w,E,P,S,k):is&&(ce<0||b!==Hc[ce]?Rt(Dt,m,qc,2):ce--)}}},Rt=(f,p,m,v,w=null)=>{const{el:E,type:P,transition:S,children:k,shapeFlag:b}=f;if(b&6){Rt(f.component.subTree,p,m,v);return}if(b&128){f.suspense.move(p,m,v);return}if(b&64){P.move(f,p,m,R);return}if(P===Ce){s(E,p,m);for(let U=0;U<k.length;U++)Rt(k[U],p,m,v);s(f.anchor,p,m);return}if(P===Pr){G(f,p,m);return}if(v!==2&&b&1&&S)if(v===0)S.beforeEnter(E),s(E,p,m),rt(()=>S.enter(E),w);else{const{leave:U,delayLeave:B,afterLeave:z}=S,Y=()=>s(E,p,m),de=()=>{U(E,()=>{Y(),z&&z()})};B?B(E,Y,de):de()}else s(E,p,m)},it=(f,p,m,v=!1,w=!1)=>{const{type:E,props:P,ref:S,children:k,dynamicChildren:b,shapeFlag:$,patchFlag:U,dirs:B}=f;if(S!=null&&za(S,null,m,f,!0),$&256){p.ctx.deactivate(f);return}const z=$&1&&B,Y=!Rr(f);let de;if(Y&&(de=P&&P.onVnodeBeforeUnmount)&&Pt(de,p,f),$&6)cr(f.component,m,v);else{if($&128){f.suspense.unmount(m,v);return}z&&kn(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,m,w,R,v):b&&(E!==Ce||U>0&&U&64)?qe(b,p,m,!1,!0):(E===Ce&&U&384||!w&&$&16)&&qe(k,p,m),v&&ns(f)}(Y&&(de=P&&P.onVnodeUnmounted)||z)&&rt(()=>{de&&Pt(de,p,f),z&&kn(f,null,p,"unmounted")},m)},ns=f=>{const{type:p,el:m,anchor:v,transition:w}=f;if(p===Ce){ss(m,v);return}if(p===Pr){L(f);return}const E=()=>{i(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:S}=w,k=()=>P(m,E);S?S(f.el,E,k):k()}else E()},ss=(f,p)=>{let m;for(;f!==p;)m=g(f),i(f),f=m;i(p)},cr=(f,p,m)=>{const{bum:v,scope:w,update:E,subTree:P,um:S}=f;v&&Cr(v),w.stop(),E&&(E.active=!1,it(P,f,p,m)),S&&rt(S,p),rt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},qe=(f,p,m,v=!1,w=!1,E=0)=>{for(let P=E;P<f.length;P++)it(f[P],p,m,v,w)},_=f=>f.shapeFlag&6?_(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),x=(f,p,m)=>{f==null?p._vnode&&it(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,m),eu(),Id(),p._vnode=f},R={p:C,um:it,m:Rt,r:ns,mt:Ws,mc:ct,pc:ie,pbc:ft,n:_,o:t};let F,re;return e&&([F,re]=e(R)),{render:x,hydrate:F,createApp:Ly(x,F)}}function Rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jd(t,e,n=!1){const s=t.children,i=e.children;if(j(s)&&j(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=cn(i[r]),a.el=o.el),n||jd(o,a)),a.type===Co&&(a.el=o.el)}}function qy(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Ky=t=>t.__isTeleport,Ce=Symbol.for("v-fgt"),Co=Symbol.for("v-txt"),Hn=Symbol.for("v-cmt"),Pr=Symbol.for("v-stc"),oi=[];let bt=null;function J(t=!1){oi.push(bt=t?null:[])}function zy(){oi.pop(),bt=oi[oi.length-1]||null}let Ei=1;function hu(t){Ei+=t}function Hd(t){return t.dynamicChildren=Ei>0?bt||hs:null,zy(),Ei>0&&bt&&bt.push(t),t}function X(t,e,n,s,i,r){return Hd(h(t,e,n,s,i,r,!0))}function Wy(t,e,n,s,i){return Hd(Se(t,e,n,s,i,!0))}function Wa(t){return t?t.__v_isVNode===!0:!1}function Qs(t,e){return t.type===e.type&&t.key===e.key}const ko="__vInternal",qd=({key:t})=>t??null,Or=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ke(t)||Je(t)||W(t)?{i:mt,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,i=null,r=t===Ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qd(e),ref:e&&Or(e),scopeId:Sd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:mt};return a?(Vl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ke(n)?8:16),Ei>0&&!o&&bt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&bt.push(l),l}const Se=Gy;function Gy(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Cy)&&(t=Hn),Wa(t)){const a=Is(t,e,!0);return n&&Vl(a,n),Ei>0&&!r&&bt&&(a.shapeFlag&6?bt[bt.indexOf(t)]=a:bt.push(a)),a.patchFlag|=-2,a}if(rv(t)&&(t=t.__vccOpts),e){e=Qy(e);let{class:a,style:l}=e;a&&!ke(a)&&(e.class=Yn(a)),pe(l)&&(fd(l)&&!j(l)&&(l=Ne({},l)),e.style=Cl(l))}const o=ke(t)?1:fy(t)?128:Ky(t)?64:pe(t)?4:W(t)?2:0;return h(t,e,n,s,i,o,r,!0)}function Qy(t){return t?fd(t)||ko in t?Ne({},t):t:null}function Is(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Jy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&qd(a),ref:e&&e.ref?n&&i?j(i)?i.concat(Or(e)):[i,Or(e)]:Or(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ce?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Is(t.ssContent),ssFallback:t.ssFallback&&Is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ve(t=" ",e=0){return Se(Co,null,t,e)}function Bl(t,e){const n=Se(Pr,null,t);return n.staticCount=e,n}function Hi(t="",e=!1){return e?(J(),Wy(Hn,null,t)):Se(Hn,null,t)}function Ot(t){return t==null||typeof t=="boolean"?Se(Hn):j(t)?Se(Ce,null,t.slice()):typeof t=="object"?cn(t):Se(Co,null,String(t))}function cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Is(t)}function Vl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Vl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ko in e)?e._ctx=mt:i===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),s&64?(n=16,e=[ve(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Yn([e.class,s.class]));else if(i==="style")e.style=Cl([e.style,s.style]);else if(wo(i)){const r=e[i],o=s[i];o&&r!==o&&!(j(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Pt(t,e,n,s=null){At(t,e,7,[n,s])}const Yy=Ld();let Xy=0;function Zy(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Yy,r={uid:Xy++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Em(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fd(s,i),emitsOptions:Ad(s,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ay.bind(null,r),t.ce&&t.ce(r),r}let Ve=null,jl,rs,du="__VUE_INSTANCE_SETTERS__";(rs=La()[du])||(rs=La()[du]=[]),rs.push(t=>Ve=t),jl=t=>{rs.length>1?rs.forEach(e=>e(t)):rs[0](t)};const Ts=t=>{jl(t),t.scope.on()},$n=()=>{Ve&&Ve.scope.off(),jl(null)};function Kd(t){return t.vnode.shapeFlag&4}let bi=!1;function ev(t,e=!1){bi=e;const{props:n,children:s}=t.vnode,i=Kd(t);Uy(t,n,i,e),By(t,s);const r=i?tv(t,e):void 0;return bi=!1,r}function tv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=pd(new Proxy(t.ctx,Ry));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?sv(t):null;Ts(t),Us();const r=mn(s,t,0,[t.props,i]);if(Fs(),$n(),Yh(r)){if(r.then($n,$n),e)return r.then(o=>{fu(t,o,e)}).catch(o=>{To(o,t,0)});t.asyncDep=r}else fu(t,r,e)}else zd(t,e)}function fu(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=_d(e)),zd(t,n)}let pu;function zd(t,e,n){const s=t.type;if(!t.render){if(!e&&pu&&!s.render){const i=s.template||Fl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ne(Ne({isCustomElement:r,delimiters:a},o),l);s.render=pu(i,c)}}t.render=s.render||Tt}Ts(t),Us(),Dy(t),Fs(),$n()}function nv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ot(t,"get","$attrs"),e[n]}}))}function sv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return nv(t)},slots:t.slots,emit:t.emit,expose:e}}function Ro(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_d(pd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ri)return ri[n](t)},has(e,n){return n in e||n in ri}}))}function iv(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function rv(t){return W(t)&&"__vccOpts"in t}const pt=(t,e)=>ty(t,e,bi);function Wd(t,e,n){const s=arguments.length;return s===2?pe(e)&&!j(e)?Wa(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Wa(n)&&(n=[n]),Se(t,e,n))}const ov=Symbol.for("v-scx"),av=()=>Ut(ov),lv="3.3.4",cv="http://www.w3.org/2000/svg",On=typeof document<"u"?document:null,gu=On&&On.createElement("template"),uv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?On.createElementNS(cv,t):On.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>On.createTextNode(t),createComment:t=>On.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>On.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{gu.innerHTML=s?`<svg>${t}</svg>`:t;const a=gu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function hv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function dv(t,e,n){const s=t.style,i=ke(n);if(n&&!i){if(e&&!ke(e))for(const r in e)n[r]==null&&Ga(s,r,"");for(const r in n)Ga(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const mu=/\s*!important$/;function Ga(t,e,n){if(j(n))n.forEach(s=>Ga(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=fv(t,e);mu.test(n)?t.setProperty(Ls(s),n.replace(mu,""),"important"):t[s]=n}}const yu=["Webkit","Moz","ms"],ua={};function fv(t,e){const n=ua[e];if(n)return n;let s=jt(e);if(s!=="filter"&&s in t)return ua[e]=s;s=bo(s);for(let i=0;i<yu.length;i++){const r=yu[i]+s;if(r in t)return ua[e]=r}return e}const vu="http://www.w3.org/1999/xlink";function pv(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vu,e.slice(6,e.length)):t.setAttributeNS(vu,e,n);else{const r=_m(e);n==null||r&&!ed(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function gv(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ed(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Nn(t,e,n,s){t.addEventListener(e,n,s)}function mv(t,e,n,s){t.removeEventListener(e,n,s)}function yv(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=vv(e);if(s){const c=r[e]=Ev(s,i);Nn(t,a,c,l)}else o&&(mv(t,a,o,l),r[e]=void 0)}}const _u=/(?:Once|Passive|Capture)$/;function vv(t){let e;if(_u.test(t)){e={};let s;for(;s=t.match(_u);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ls(t.slice(2)),e]}let ha=0;const _v=Promise.resolve(),wv=()=>ha||(_v.then(()=>ha=0),ha=Date.now());function Ev(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;At(bv(s,n.value),e,5,[s])};return n.value=t,n.attached=wv(),n}function bv(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const wu=/^on[a-z]/,Iv=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?hv(t,s,i):e==="style"?dv(t,n,s):wo(e)?Tl(e)||yv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tv(t,e,s,i))?gv(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),pv(t,e,s,i))};function Tv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&wu.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wu.test(e)&&ke(n)?!1:e in t}const Kr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>Cr(e,n):e};function Av(t){t.target.composing=!0}function Eu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ue={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Kr(i);const r=s||i.props&&i.props.type==="number";Nn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ma(a)),t._assign(a)}),n&&Nn(t,"change",()=>{t.value=t.value.trim()}),e||(Nn(t,"compositionstart",Av),Nn(t,"compositionend",Eu),Nn(t,"change",Eu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Kr(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ma(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},bu={created(t,{value:e},n){t.checked=Br(e,n.props.value),t._assign=Kr(n),Nn(t,"change",()=>{t._assign(Sv(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Kr(s),e!==n&&(t.checked=Br(e,s.props.value))}};function Sv(t){return"_value"in t?t._value:t.value}const Cv=["ctrl","shift","alt","meta"],kv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Cv.some(n=>t[`${n}Key`]&&!e.includes(n))},Do=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=kv[e[i]];if(r&&r(n,e))return}return t(n,...s)},Rv=Ne({patchProp:Iv},uv);let Iu;function Dv(){return Iu||(Iu=jy(Rv))}const Pv=(...t)=>{const e=Dv().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ov(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ov(t){return ke(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const as=typeof window<"u";function Nv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function da(t,e){const n={};for(const s in e){const i=e[s];n[s]=St(i)?i.map(t):t(i)}return n}const ai=()=>{},St=Array.isArray,xv=/\/$/,Mv=t=>t.replace(xv,"");function fa(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=$v(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Lv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Tu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Uv(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&As(e.matched[s],n.matched[i])&&Gd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fv(t[n],e[n]))return!1;return!0}function Fv(t,e){return St(t)?Au(t,e):St(e)?Au(e,t):t===e}function Au(t,e){return St(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function $v(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Ii;(function(t){t.pop="pop",t.push="push"})(Ii||(Ii={}));var li;(function(t){t.back="back",t.forward="forward",t.unknown=""})(li||(li={}));function Bv(t){if(!t)if(as){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mv(t)}const Vv=/^[^#]+#/;function jv(t,e){return t.replace(Vv,"#")+e}function Hv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Po=()=>({left:window.pageXOffset,top:window.pageYOffset});function qv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Hv(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Su(t,e){return(history.state?history.state.position-e:-1)+t}const Qa=new Map;function Kv(t,e){Qa.set(t,e)}function zv(t){const e=Qa.get(t);return Qa.delete(t),e}let Wv=()=>location.protocol+"//"+location.host;function Qd(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Tu(l,"")}return Tu(n,t)+s+i}function Gv(t,e,n,s){let i=[],r=[],o=null;const a=({state:g})=>{const y=Qd(t,location),I=n.value,C=e.value;let O=0;if(g){if(n.value=y,e.value=g,o&&o===I){o=null;return}O=C?g.position-C.position:0}else s(y);i.forEach(N=>{N(n.value,I,{delta:O,type:Ii.pop,direction:O?O>0?li.forward:li.back:li.unknown})})};function l(){o=n.value}function c(g){i.push(g);const y=()=>{const I=i.indexOf(g);I>-1&&i.splice(I,1)};return r.push(y),y}function u(){const{history:g}=window;g.state&&g.replaceState(ae({},g.state,{scroll:Po()}),"")}function d(){for(const g of r)g();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Cu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Po():null}}function Qv(t){const{history:e,location:n}=window,s={value:Qd(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Wv()+t+l;try{e[u?"replaceState":"pushState"](c,"",g),i.value=c}catch(y){console.error(y),n[u?"replace":"assign"](g)}}function o(l,c){const u=ae({},e.state,Cu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ae({},i.value,e.state,{forward:l,scroll:Po()});r(u.current,u,!0);const d=ae({},Cu(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Jv(t){t=Bv(t);const e=Qv(t),n=Gv(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ae({location:"",base:t,go:s,createHref:jv.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Yv(t){return typeof t=="string"||t&&typeof t=="object"}function Jd(t){return typeof t=="string"||typeof t=="symbol"}const an={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yd=Symbol("");var ku;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ku||(ku={}));function Ss(t,e){return ae(new Error,{type:t,[Yd]:!0},e)}function zt(t,e){return t instanceof Error&&Yd in t&&(e==null||!!(t.type&e))}const Ru="[^/]+?",Xv={sensitive:!1,strict:!1,start:!0,end:!0},Zv=/[.+*?^${}()[\]/\\]/g;function e_(t,e){const n=ae({},Xv,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const g=c[d];let y=40+(n.sensitive?.25:0);if(g.type===0)d||(i+="/"),i+=g.value.replace(Zv,"\\$&"),y+=40;else if(g.type===1){const{value:I,repeatable:C,optional:O,regexp:N}=g;r.push({name:I,repeatable:C,optional:O});const M=N||Ru;if(M!==Ru){y+=10;try{new RegExp(`(${M})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${I}" (${M}): `+L.message)}}let G=C?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(G=O&&c.length<2?`(?:/${G})`:"/"+G),O&&(G+="?"),i+=G,y+=20,O&&(y+=-8),C&&(y+=-20),M===".*"&&(y+=-50)}u.push(y)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let g=1;g<u.length;g++){const y=u[g]||"",I=r[g-1];d[I.name]=y&&I.repeatable?y.split("/"):y}return d}function l(c){let u="",d=!1;for(const g of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const y of g)if(y.type===0)u+=y.value;else if(y.type===1){const{value:I,repeatable:C,optional:O}=y,N=I in c?c[I]:"";if(St(N)&&!C)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const M=St(N)?N.join("/"):N;if(!M)if(O)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function t_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function n_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=t_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Du(s))return 1;if(Du(i))return-1}return i.length-s.length}function Du(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const s_={type:0,value:""},i_=/[a-zA-Z0-9_]/;function r_(t){if(!t)return[[]];if(t==="/")return[[s_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${c}": ${y}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function g(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):g();break;case 4:g(),n=s;break;case 1:l==="("?n=2:i_.test(l)?g():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function o_(t,e,n){const s=e_(r_(t.path),n),i=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function a_(t,e){const n=[],s=new Map;e=Nu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,g){const y=!g,I=l_(u);I.aliasOf=g&&g.record;const C=Nu(e,u),O=[I];if("alias"in u){const G=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of G)O.push(ae({},I,{components:g?g.record.components:I.components,path:L,aliasOf:g?g.record:I}))}let N,M;for(const G of O){const{path:L}=G;if(d&&L[0]!=="/"){const Ee=d.record.path,_e=Ee[Ee.length-1]==="/"?"":"/";G.path=d.record.path+(L&&_e+L)}if(N=o_(G,d,C),g?g.alias.push(N):(M=M||N,M!==N&&M.alias.push(N),y&&u.name&&!Ou(N)&&o(u.name)),I.children){const Ee=I.children;for(let _e=0;_e<Ee.length;_e++)r(Ee[_e],N,g&&g.children[_e])}g=g||N,(N.record.components&&Object.keys(N.record.components).length||N.record.name||N.record.redirect)&&l(N)}return M?()=>{o(M)}:ai}function o(u){if(Jd(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&n_(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Xd(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ou(u)&&s.set(u.record.name,u)}function c(u,d){let g,y={},I,C;if("name"in u&&u.name){if(g=s.get(u.name),!g)throw Ss(1,{location:u});C=g.record.name,y=ae(Pu(d.params,g.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Pu(u.params,g.keys.map(M=>M.name))),I=g.stringify(y)}else if("path"in u)I=u.path,g=n.find(M=>M.re.test(I)),g&&(y=g.parse(I),C=g.record.name);else{if(g=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!g)throw Ss(1,{location:u,currentLocation:d});C=g.record.name,y=ae({},d.params,u.params),I=g.stringify(y)}const O=[];let N=g;for(;N;)O.unshift(N.record),N=N.parent;return{name:C,path:I,params:y,matched:O,meta:u_(O)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Pu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function l_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:c_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function c_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ou(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function u_(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Nu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Xd(t,e){return e.children.some(n=>n===t||Xd(t,n))}const Zd=/#/g,h_=/&/g,d_=/\//g,f_=/=/g,p_=/\?/g,ef=/\+/g,g_=/%5B/g,m_=/%5D/g,tf=/%5E/g,y_=/%60/g,nf=/%7B/g,v_=/%7C/g,sf=/%7D/g,__=/%20/g;function Hl(t){return encodeURI(""+t).replace(v_,"|").replace(g_,"[").replace(m_,"]")}function w_(t){return Hl(t).replace(nf,"{").replace(sf,"}").replace(tf,"^")}function Ja(t){return Hl(t).replace(ef,"%2B").replace(__,"+").replace(Zd,"%23").replace(h_,"%26").replace(y_,"`").replace(nf,"{").replace(sf,"}").replace(tf,"^")}function E_(t){return Ja(t).replace(f_,"%3D")}function b_(t){return Hl(t).replace(Zd,"%23").replace(p_,"%3F")}function I_(t){return t==null?"":b_(t).replace(d_,"%2F")}function zr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function T_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ef," "),o=r.indexOf("="),a=zr(o<0?r:r.slice(0,o)),l=o<0?null:zr(r.slice(o+1));if(a in e){let c=e[a];St(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function xu(t){let e="";for(let n in t){const s=t[n];if(n=E_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(St(s)?s.map(r=>r&&Ja(r)):[s&&Ja(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function A_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=St(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const S_=Symbol(""),Mu=Symbol(""),Oo=Symbol(""),rf=Symbol(""),Ya=Symbol("");function Js(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function un(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Ss(4,{from:n,to:e})):d instanceof Error?a(d):Yv(d)?a(Ss(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function pa(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(C_(a)){const c=(a.__vccOpts||a)[e];c&&i.push(un(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Nv(c)?c.default:c;r.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&un(g,n,s,r,o)()}))}}return i}function C_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lu(t){const e=Ut(Oo),n=Ut(rf),s=pt(()=>e.resolve(ps(t.to))),i=pt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const g=d.findIndex(As.bind(null,u));if(g>-1)return g;const y=Uu(l[c-2]);return c>1&&Uu(u)===y&&d[d.length-1].path!==y?d.findIndex(As.bind(null,l[c-2])):g}),r=pt(()=>i.value>-1&&P_(n.params,s.value.params)),o=pt(()=>i.value>-1&&i.value===n.matched.length-1&&Gd(n.params,s.value.params));function a(l={}){return D_(l)?e[ps(t.replace)?"replace":"push"](ps(t.to)).catch(ai):Promise.resolve()}return{route:s,href:pt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const k_=Rd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lu,setup(t,{slots:e}){const n=ji(Lu(t)),{options:s}=Ut(Oo),i=pt(()=>({[Fu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Fu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Wd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),R_=k_;function D_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function P_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!St(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Uu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fu=(t,e,n)=>t??e??n,O_=Rd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ut(Ya),i=pt(()=>t.route||s.value),r=Ut(Mu,0),o=pt(()=>{let c=ps(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=pt(()=>i.value.matched[o.value]);Dr(Mu,pt(()=>o.value+1)),Dr(S_,a),Dr(Ya,i);const l=yd();return kr(()=>[l.value,a.value,t.name],([c,u,d],[g,y,I])=>{u&&(u.instances[d]=c,y&&y!==u&&c&&c===g&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),c&&u&&(!y||!As(u,y)||!g)&&(u.enterCallbacks[d]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,g=d&&d.components[u];if(!g)return $u(n.default,{Component:g,route:c});const y=d.props[u],I=y?y===!0?c.params:typeof y=="function"?y(c):y:null,O=Wd(g,ae({},I,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return $u(n.default,{Component:O,route:c})||O}}});function $u(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const N_=O_;function x_(t){const e=a_(t.routes,t),n=t.parseQuery||T_,s=t.stringifyQuery||xu,i=t.history,r=Js(),o=Js(),a=Js(),l=Ym(an);let c=an;as&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=da.bind(null,_=>""+_),d=da.bind(null,I_),g=da.bind(null,zr);function y(_,x){let R,F;return Jd(_)?(R=e.getRecordMatcher(_),F=x):F=_,e.addRoute(F,R)}function I(_){const x=e.getRecordMatcher(_);x&&e.removeRoute(x)}function C(){return e.getRoutes().map(_=>_.record)}function O(_){return!!e.getRecordMatcher(_)}function N(_,x){if(x=ae({},x||l.value),typeof _=="string"){const m=fa(n,_,x.path),v=e.resolve({path:m.path},x),w=i.createHref(m.fullPath);return ae(m,v,{params:g(v.params),hash:zr(m.hash),redirectedFrom:void 0,href:w})}let R;if("path"in _)R=ae({},_,{path:fa(n,_.path,x.path).path});else{const m=ae({},_.params);for(const v in m)m[v]==null&&delete m[v];R=ae({},_,{params:d(m)}),x.params=d(x.params)}const F=e.resolve(R,x),re=_.hash||"";F.params=u(g(F.params));const f=Lv(s,ae({},_,{hash:w_(re),path:F.path})),p=i.createHref(f);return ae({fullPath:f,hash:re,query:s===xu?A_(_.query):_.query||{}},F,{redirectedFrom:void 0,href:p})}function M(_){return typeof _=="string"?fa(n,_,l.value.path):ae({},_)}function G(_,x){if(c!==_)return Ss(8,{from:x,to:_})}function L(_){return He(_)}function Ee(_){return L(ae(M(_),{replace:!0}))}function _e(_){const x=_.matched[_.matched.length-1];if(x&&x.redirect){const{redirect:R}=x;let F=typeof R=="function"?R(_):R;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=M(F):{path:F},F.params={}),ae({query:_.query,hash:_.hash,params:"path"in F?{}:_.params},F)}}function He(_,x){const R=c=N(_),F=l.value,re=_.state,f=_.force,p=_.replace===!0,m=_e(R);if(m)return He(ae(M(m),{state:typeof m=="object"?ae({},re,m.state):re,force:f,replace:p}),x||R);const v=R;v.redirectedFrom=x;let w;return!f&&Uv(s,F,R)&&(w=Ss(16,{to:v,from:F}),Rt(F,F,!0,!1)),(w?Promise.resolve(w):ft(v,F)).catch(E=>zt(E)?zt(E,2)?E:rn(E):ie(E,v,F)).then(E=>{if(E){if(zt(E,2))return He(ae({replace:p},M(E.to),{state:typeof E.to=="object"?ae({},re,E.to.state):re,force:f}),x||v)}else E=Cn(v,F,!0,p,re);return sn(v,F,E),E})}function ct(_,x){const R=G(_,x);return R?Promise.reject(R):Promise.resolve()}function ut(_){const x=ss.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(_):_()}function ft(_,x){let R;const[F,re,f]=M_(_,x);R=pa(F.reverse(),"beforeRouteLeave",_,x);for(const m of F)m.leaveGuards.forEach(v=>{R.push(un(v,_,x))});const p=ct.bind(null,_,x);return R.push(p),qe(R).then(()=>{R=[];for(const m of r.list())R.push(un(m,_,x));return R.push(p),qe(R)}).then(()=>{R=pa(re,"beforeRouteUpdate",_,x);for(const m of re)m.updateGuards.forEach(v=>{R.push(un(v,_,x))});return R.push(p),qe(R)}).then(()=>{R=[];for(const m of _.matched)if(m.beforeEnter&&!x.matched.includes(m))if(St(m.beforeEnter))for(const v of m.beforeEnter)R.push(un(v,_,x));else R.push(un(m.beforeEnter,_,x));return R.push(p),qe(R)}).then(()=>(_.matched.forEach(m=>m.enterCallbacks={}),R=pa(f,"beforeRouteEnter",_,x),R.push(p),qe(R))).then(()=>{R=[];for(const m of o.list())R.push(un(m,_,x));return R.push(p),qe(R)}).catch(m=>zt(m,8)?m:Promise.reject(m))}function sn(_,x,R){for(const F of a.list())ut(()=>F(_,x,R))}function Cn(_,x,R,F,re){const f=G(_,x);if(f)return f;const p=x===an,m=as?history.state:{};R&&(F||p?i.replace(_.fullPath,ae({scroll:p&&m&&m.scroll},re)):i.push(_.fullPath,re)),l.value=_,Rt(_,x,R,p),rn()}let kt;function Ws(){kt||(kt=i.listen((_,x,R)=>{if(!cr.listening)return;const F=N(_),re=_e(F);if(re){He(ae(re,{replace:!0}),F).catch(ai);return}c=F;const f=l.value;as&&Kv(Su(f.fullPath,R.delta),Po()),ft(F,f).catch(p=>zt(p,12)?p:zt(p,2)?(He(p.to,F).then(m=>{zt(m,20)&&!R.delta&&R.type===Ii.pop&&i.go(-1,!1)}).catch(ai),Promise.reject()):(R.delta&&i.go(-R.delta,!1),ie(p,F,f))).then(p=>{p=p||Cn(F,f,!1),p&&(R.delta&&!zt(p,8)?i.go(-R.delta,!1):R.type===Ii.pop&&zt(p,20)&&i.go(-1,!1)),sn(F,f,p)}).catch(ai)}))}let ts=Js(),Re=Js(),he;function ie(_,x,R){rn(_);const F=Re.list();return F.length?F.forEach(re=>re(_,x,R)):console.error(_),Promise.reject(_)}function Kt(){return he&&l.value!==an?Promise.resolve():new Promise((_,x)=>{ts.add([_,x])})}function rn(_){return he||(he=!_,Ws(),ts.list().forEach(([x,R])=>_?R(_):x()),ts.reset()),_}function Rt(_,x,R,F){const{scrollBehavior:re}=t;if(!as||!re)return Promise.resolve();const f=!R&&zv(Su(_.fullPath,0))||(F||!R)&&history.state&&history.state.scroll||null;return Ed().then(()=>re(_,x,f)).then(p=>p&&qv(p)).catch(p=>ie(p,_,x))}const it=_=>i.go(_);let ns;const ss=new Set,cr={currentRoute:l,listening:!0,addRoute:y,removeRoute:I,hasRoute:O,getRoutes:C,resolve:N,options:t,push:L,replace:Ee,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Re.add,isReady:Kt,install(_){const x=this;_.component("RouterLink",R_),_.component("RouterView",N_),_.config.globalProperties.$router=x,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>ps(l)}),as&&!ns&&l.value===an&&(ns=!0,L(i.location).catch(re=>{}));const R={};for(const re in an)R[re]=pt(()=>l.value[re]);_.provide(Oo,x),_.provide(rf,ji(R)),_.provide(Ya,l);const F=_.unmount;ss.add(_),_.unmount=function(){ss.delete(_),ss.size<1&&(c=an,kt&&kt(),kt=null,l.value=an,ns=!1,he=!1),F()}}};function qe(_){return _.reduce((x,R)=>x.then(()=>ut(R)),Promise.resolve())}return cr}function M_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>As(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>As(c,l))||i.push(l))}return[n,s,i]}function L_(){return Ut(Oo)}/**
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
 */const of=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},U_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},af={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let g=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(g=64)),s.push(n[u],n[d],n[g],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(of(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):U_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new F_;const g=r<<2|a>>4;if(s.push(g),c!==64){const y=a<<4&240|c>>2;if(s.push(y),d!==64){const I=c<<6&192|d;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class F_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $_=function(t){const e=of(t);return af.encodeByteArray(e,!0)},Wr=function(t){return $_(t).replace(/\./g,"")},lf=function(t){try{return af.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function B_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const V_=()=>B_().__FIREBASE_DEFAULTS__,j_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},H_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lf(t[1]);return e&&JSON.parse(e)},ql=()=>{try{return V_()||j_()||H_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cf=t=>{var e,n;return(n=(e=ql())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},q_=t=>{const e=cf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},uf=()=>{var t;return(t=ql())===null||t===void 0?void 0:t.config},hf=t=>{var e;return(e=ql())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class K_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function z_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Wr(JSON.stringify(n)),Wr(JSON.stringify(o)),a].join(".")}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function W_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function G_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Q_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J_(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y_(){try{return typeof indexedDB=="object"}catch{return!1}}function X_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Z_="FirebaseError";class nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Z_,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?e0(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,s)}}function e0(t,e){return t.replace(t0,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const t0=/\{\$([^}]+)}/g;function n0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Bu(r)&&Bu(o)){if(!Gr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Bu(t){return t!==null&&typeof t=="object"}/**
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
 */function Ki(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ni(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function s0(t,e){const n=new i0(t,e);return n.subscribe.bind(n)}class i0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");r0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ga),i.error===void 0&&(i.error=ga),i.complete===void 0&&(i.complete=ga);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ga(){}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dn="[DEFAULT]";/**
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
 */class o0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new K_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l0(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:a0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a0(t){return t===Dn?void 0:t}function l0(t){return t.instantiationMode==="EAGER"}/**
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
 */class c0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new o0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const u0={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},h0=ne.INFO,d0={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},f0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=d0[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kl{constructor(e){this.name=e,this._logLevel=h0,this._logHandler=f0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const p0=(t,e)=>e.some(n=>t instanceof n);let Vu,ju;function g0(){return Vu||(Vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m0(){return ju||(ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const df=new WeakMap,Xa=new WeakMap,ff=new WeakMap,ma=new WeakMap,zl=new WeakMap;function y0(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(yn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&df.set(n,t)}).catch(()=>{}),zl.set(e,t),e}function v0(t){if(Xa.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Xa.set(t,e)}let Za={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ff.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _0(t){Za=t(Za)}function w0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ya(this),e,...n);return ff.set(s,e.sort?e.sort():[e]),yn(s)}:m0().includes(t)?function(...e){return t.apply(ya(this),e),yn(df.get(this))}:function(...e){return yn(t.apply(ya(this),e))}}function E0(t){return typeof t=="function"?w0(t):(t instanceof IDBTransaction&&v0(t),p0(t,g0())?new Proxy(t,Za):t)}function yn(t){if(t instanceof IDBRequest)return y0(t);if(ma.has(t))return ma.get(t);const e=E0(t);return e!==t&&(ma.set(t,e),zl.set(e,t)),e}const ya=t=>zl.get(t);function b0(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=yn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(yn(o.result),l.oldVersion,l.newVersion,yn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const I0=["get","getKey","getAll","getAllKeys","count"],T0=["put","add","delete","clear"],va=new Map;function Hu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(va.get(e))return va.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=T0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||I0.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return va.set(e,r),r}_0(t=>({...t,get:(e,n,s)=>Hu(e,n)||t.get(e,n,s),has:(e,n)=>!!Hu(e,n)||t.has(e,n)}));/**
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
 */class A0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function S0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const el="@firebase/app",qu="0.9.13";/**
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
 */const Kn=new Kl("@firebase/app"),C0="@firebase/app-compat",k0="@firebase/analytics-compat",R0="@firebase/analytics",D0="@firebase/app-check-compat",P0="@firebase/app-check",O0="@firebase/auth",N0="@firebase/auth-compat",x0="@firebase/database",M0="@firebase/database-compat",L0="@firebase/functions",U0="@firebase/functions-compat",F0="@firebase/installations",$0="@firebase/installations-compat",B0="@firebase/messaging",V0="@firebase/messaging-compat",j0="@firebase/performance",H0="@firebase/performance-compat",q0="@firebase/remote-config",K0="@firebase/remote-config-compat",z0="@firebase/storage",W0="@firebase/storage-compat",G0="@firebase/firestore",Q0="@firebase/firestore-compat",J0="firebase",Y0="9.23.0";/**
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
 */const tl="[DEFAULT]",X0={[el]:"fire-core",[C0]:"fire-core-compat",[R0]:"fire-analytics",[k0]:"fire-analytics-compat",[P0]:"fire-app-check",[D0]:"fire-app-check-compat",[O0]:"fire-auth",[N0]:"fire-auth-compat",[x0]:"fire-rtdb",[M0]:"fire-rtdb-compat",[L0]:"fire-fn",[U0]:"fire-fn-compat",[F0]:"fire-iid",[$0]:"fire-iid-compat",[B0]:"fire-fcm",[V0]:"fire-fcm-compat",[j0]:"fire-perf",[H0]:"fire-perf-compat",[q0]:"fire-rc",[K0]:"fire-rc-compat",[z0]:"fire-gcs",[W0]:"fire-gcs-compat",[G0]:"fire-fst",[Q0]:"fire-fst-compat","fire-js":"fire-js",[J0]:"fire-js-all"};/**
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
 */const Qr=new Map,nl=new Map;function Z0(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cs(t){const e=t.name;if(nl.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;nl.set(e,t);for(const n of Qr.values())Z0(n,t);return!0}function Wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ew={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vn=new qi("app","Firebase",ew);/**
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
 */class tw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=Y0;function pf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:tl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(n||(n=uf()),!n)throw vn.create("no-options");const r=Qr.get(i);if(r){if(Gr(n,r.options)&&Gr(s,r.config))return r;throw vn.create("duplicate-app",{appName:i})}const o=new c0(i);for(const l of nl.values())o.addComponent(l);const a=new tw(n,s,o);return Qr.set(i,a),a}function gf(t=tl){const e=Qr.get(t);if(!e&&t===tl&&uf())return pf();if(!e)throw vn.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let i=(s=X0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}Cs(new qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const nw="firebase-heartbeat-database",sw=1,Ti="firebase-heartbeat-store";let _a=null;function mf(){return _a||(_a=b0(nw,sw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ti)}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),_a}async function iw(t){try{return await(await mf()).transaction(Ti).objectStore(Ti).get(yf(t))}catch(e){if(e instanceof nn)Kn.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Ku(t,e){try{const s=(await mf()).transaction(Ti,"readwrite");await s.objectStore(Ti).put(e,yf(t)),await s.done}catch(n){if(n instanceof nn)Kn.warn(n.message);else{const s=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(s.message)}}}function yf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rw=1024,ow=30*24*60*60*1e3;class aw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ow}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zu(),{heartbeatsToSend:n,unsentEntries:s}=lw(this._heartbeatsCache.heartbeats),i=Wr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zu(){return new Date().toISOString().substring(0,10)}function lw(t,e=rw){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Wu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y_()?X_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ku(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wu(t){return Wr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uw(t){Cs(new qn("platform-logger",e=>new A0(e),"PRIVATE")),Cs(new qn("heartbeat",e=>new aw(e),"PRIVATE")),_n(el,qu,t),_n(el,qu,"esm2017"),_n("fire-js","")}uw("");function Gl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function vf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hw=vf,_f=new qi("auth","Firebase",vf());/**
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
 */const Jr=new Kl("@firebase/auth");function dw(t,...e){Jr.logLevel<=ne.WARN&&Jr.warn(`Auth (${$s}): ${t}`,...e)}function Nr(t,...e){Jr.logLevel<=ne.ERROR&&Jr.error(`Auth (${$s}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw Ql(t,...e)}function Ft(t,...e){return Ql(t,...e)}function fw(t,e,n){const s=Object.assign(Object.assign({},hw()),{[e]:n});return new qi("auth","Firebase",s).create(e,{appName:t.name})}function Ql(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return _f.create(t,...e)}function q(t,e,...n){if(!t)throw Ql(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nr(e),new Error(e)}function Xt(t,e){t||Gt(e)}/**
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
 */function sl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pw(){return Gu()==="http:"||Gu()==="https:"}function Gu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pw()||G_()||"connection"in navigator)?navigator.onLine:!0}function mw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=W_()||Q_()}get(){return gw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jl(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vw=new zi(3e4,6e4);function Bs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,s,i={}){return Ef(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ki(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),wf.fetch()(bf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ef(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},yw),e);try{const i=new _w(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw mr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw mr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw mr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fw(t,u,c);Ct(t,u)}}catch(i){if(i instanceof nn)throw i;Ct(t,"network-request-failed",{message:String(i)})}}async function Wi(t,e,n,s,i={}){const r=await Xn(t,e,n,s,i);return"mfaPendingCredential"in r&&Ct(t,"multi-factor-auth-required",{_serverResponse:r}),r}function bf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Jl(t.config,i):`${t.config.apiScheme}://${i}`}class _w{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ft(this.auth,"network-request-failed")),vw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ft(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function ww(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function Ew(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bw(t,e=!1){const n=at(t),s=await n.getIdToken(e),i=Yl(s);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ci(wa(i.auth_time)),issuedAtTime:ci(wa(i.iat)),expirationTime:ci(wa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function wa(t){return Number(t)*1e3}function Yl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const i=lf(n);return i?JSON.parse(i):(Nr("Failed to decode base64 JWT payload"),null)}catch(i){return Nr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Iw(t){const e=Yl(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ks(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof nn&&Tw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Tw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Aw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class If{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ci(this.lastLoginAt),this.creationTime=ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ks(t,Ew(n,{idToken:s}));q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?kw(r.providerUserInfo):[],a=Cw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new If(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Sw(t){const e=at(t);await Yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function kw(t){return t.map(e=>{var{providerId:n}=e,s=Gl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Rw(t,e){const n=await Ef(t,{},async()=>{const s=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=bf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Rw(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ai;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
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
 */function ln(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Gl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Aw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new If(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ks(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bw(this,e)}reload(){return Sw(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ks(this,ww(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:G,emailVerified:L,isAnonymous:Ee,providerData:_e,stsTokenManager:He}=n;q(G&&He,e,"internal-error");const ct=Ai.fromJSON(this.name,He);q(typeof G=="string",e,"internal-error"),ln(d,e.name),ln(g,e.name),q(typeof L=="boolean",e,"internal-error"),q(typeof Ee=="boolean",e,"internal-error"),ln(y,e.name),ln(I,e.name),ln(C,e.name),ln(O,e.name),ln(N,e.name),ln(M,e.name);const ut=new Bn({uid:G,auth:e,email:g,emailVerified:L,displayName:d,isAnonymous:Ee,photoURL:I,phoneNumber:y,tenantId:C,stsTokenManager:ct,createdAt:N,lastLoginAt:M});return _e&&Array.isArray(_e)&&(ut.providerData=_e.map(ft=>Object.assign({},ft))),O&&(ut._redirectEventId=O),ut}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ai;i.updateFromServerResponse(n);const r=new Bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Yr(r),r}}/**
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
 */const Qu=new Map;function Qt(t){Xt(t instanceof Function,"Expected a class definition");let e=Qu.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qu.set(t,e),e)}/**
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
 */class Tf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tf.type="NONE";const Ju=Tf;/**
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
 */function xr(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=xr(this.userKey,i.apiKey,r),this.fullPersistenceKey=xr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ms(Qt(Ju),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Qt(Ju);const o=xr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Bn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ms(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ms(r,e,s))}}/**
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
 */function Yu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Af(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rf(e))return"Blackberry";if(Df(e))return"Webos";if(Xl(e))return"Safari";if((e.includes("chrome/")||Sf(e))&&!e.includes("edge/"))return"Chrome";if(kf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Af(t=Ze()){return/firefox\//i.test(t)}function Xl(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sf(t=Ze()){return/crios\//i.test(t)}function Cf(t=Ze()){return/iemobile/i.test(t)}function kf(t=Ze()){return/android/i.test(t)}function Rf(t=Ze()){return/blackberry/i.test(t)}function Df(t=Ze()){return/webos/i.test(t)}function No(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Dw(t=Ze()){var e;return No(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pw(){return J_()&&document.documentMode===10}function Pf(t=Ze()){return No(t)||kf(t)||Df(t)||Rf(t)||/windows phone/i.test(t)||Cf(t)}function Ow(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Of(t,e=[]){let n;switch(t){case"Browser":n=Yu(Ze());break;case"Worker":n=`${Yu(Ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${s}`}async function Nf(t,e){return Xn(t,"GET","/v2/recaptchaConfig",Bs(t,e))}function Xu(t){return t!==void 0&&t.enterprise!==void 0}class xf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Nw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Mf(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ft("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Nw().appendChild(s)})}function xw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Mw="https://www.google.com/recaptcha/enterprise.js?render=",Lw="recaptcha-enterprise",Uw="NO_RECAPTCHA";class Lf{constructor(e){this.type=Lw,this.auth=Vs(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Nf(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new xf(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Xu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Uw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Xu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Mf(Mw+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Xr(t,e,n,s=!1){const i=new Lf(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Fw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class $w{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zu(this),this.idTokenSubscription=new Zu(this),this.beforeStateQueue=new Fw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?at(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}async initializeRecaptchaConfig(){const e=await Nf(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new xf(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Lf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Of(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vs(t){return at(t)}class Zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=s0(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Bw(t,e){const n=Wl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Gr(r,e??{}))return i;Ct(i,"already-initialized")}return n.initialize({options:e})}function Vw(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function jw(t,e,n){const s=Vs(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Uf(e),{host:o,port:a}=Hw(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qw()}function Uf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hw(t){const e=Uf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:eh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:eh(o)}}}function eh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Zl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}async function Kw(t,e){return Xn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ea(t,e){return Wi(t,"POST","/v1/accounts:signInWithPassword",Bs(t,e))}/**
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
 */async function zw(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",Bs(t,e))}async function Ww(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",Bs(t,e))}/**
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
 */class Si extends Zl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Si(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Si(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Xr(e,s,"signInWithPassword");return Ea(e,i)}else return Ea(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Xr(e,s,"signInWithPassword");return Ea(e,r)}else return Promise.reject(i)});case"emailLink":return zw(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Kw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ww(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ys(t,e){return Wi(t,"POST","/v1/accounts:signInWithIdp",Bs(t,e))}/**
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
 */const Gw="http://localhost";class zn extends Zl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Gl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new zn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ys(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:Gw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
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
 */function Qw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jw(t){const e=ti(ni(t)).link,n=e?ti(ni(e)).deep_link_id:null,s=ti(ni(t)).deep_link_id;return(s?ti(ni(s)).link:null)||s||n||e||t}class ec{constructor(e){var n,s,i,r,o,a;const l=ti(ni(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=Qw((i=l.mode)!==null&&i!==void 0?i:null);q(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Jw(e);try{return new ec(n)}catch{return null}}}/**
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
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,n){return Si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ec.parseLink(n);return q(s,"argument-error"),Si._fromEmailAndCode(e,s.code,s.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ff{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gi extends Ff{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hn extends Gi{constructor(){super("facebook.com")}static credential(e){return zn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
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
 */class dn extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class fn extends Gi{constructor(){super("github.com")}static credential(e){return zn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
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
 */class pn extends Gi{constructor(){super("twitter.com")}static credential(e,n){return zn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return pn.credential(n,s)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
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
 */async function ba(t,e){return Wi(t,"POST","/v1/accounts:signUp",Bs(t,e))}/**
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
 */class Wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Bn._fromIdTokenResponse(e,s,i),o=th(s);return new Wn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=th(s);return new Wn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function th(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Zr extends nn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Zr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Zr(e,n,s,i)}}function $f(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Zr._fromErrorAndOperation(t,r,e,s):r})}async function Yw(t,e,n=!1){const s=await ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wn._forOperation(t,"link",s)}/**
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
 */async function Xw(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await ks(t,$f(s,i,e,t),n);q(r.idToken,s,"internal-error");const o=Yl(r.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),Wn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ct(s,"user-mismatch"),r}}/**
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
 */async function Bf(t,e,n=!1){const s="signIn",i=await $f(t,s,e),r=await Wn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Zw(t,e){return Bf(Vs(t),e)}async function eE(t,e,n){var s;const i=Vs(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const c=await Xr(i,r,"signUpPassword");o=ba(i,c)}else o=ba(i,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Xr(i,r,"signUpPassword");return ba(i,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Wn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function tE(t,e,n){return Zw(at(t),js.credential(e,n))}/**
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
 */async function nE(t,e){return Xn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function sE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=at(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ks(s,nE(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function iE(t,e,n,s){return at(t).onIdTokenChanged(e,n,s)}function rE(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function oE(t){return at(t).signOut()}const eo="__sak";/**
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
 */class Vf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(eo,"1"),this.storage.removeItem(eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function aE(){const t=Ze();return Xl(t)||No(t)}const lE=1e3,cE=10;class jf extends Vf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aE()&&Ow(),this.fallbackToPolling=Pf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Pw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},lE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jf.type="LOCAL";const uE=jf;/**
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
 */class Hf extends Vf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hf.type="SESSION";const qf=Hf;/**
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
 */function hE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new xo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await hE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xo.receivers=[];/**
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
 */function tc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=tc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const g=d;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(g.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $t(){return window}function fE(t){$t().location.href=t}/**
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
 */function Kf(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function pE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mE(){return Kf()?self:null}/**
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
 */const zf="firebaseLocalStorageDb",yE=1,to="firebaseLocalStorage",Wf="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mo(t,e){return t.transaction([to],e?"readwrite":"readonly").objectStore(to)}function vE(){const t=indexedDB.deleteDatabase(zf);return new Qi(t).toPromise()}function il(){const t=indexedDB.open(zf,yE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(to,{keyPath:Wf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(to)?e(s):(s.close(),await vE(),e(await il()))})})}async function nh(t,e,n){const s=Mo(t,!0).put({[Wf]:e,value:n});return new Qi(s).toPromise()}async function _E(t,e){const n=Mo(t,!1).get(e),s=await new Qi(n).toPromise();return s===void 0?null:s.value}function sh(t,e){const n=Mo(t,!0).delete(e);return new Qi(n).toPromise()}const wE=800,EE=3;class Gf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await il(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>EE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xo._getInstance(mE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pE(),!this.activeServiceWorker)return;this.sender=new dE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await il();return await nh(e,eo,"1"),await sh(e,eo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>nh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>_E(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Mo(i,!1).getAll();return new Qi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gf.type="LOCAL";const bE=Gf;new zi(3e4,6e4);/**
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
 */function IE(t,e){return e?Qt(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nc extends Zl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TE(t){return Bf(t.auth,new nc(t),t.bypassAuthState)}function AE(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Xw(n,new nc(t),t.bypassAuthState)}async function SE(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Yw(n,new nc(t),t.bypassAuthState)}/**
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
 */class Qf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TE;case"linkViaPopup":case"linkViaRedirect":return SE;case"reauthViaPopup":case"reauthViaRedirect":return AE;default:Ct(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CE=new zi(2e3,1e4);class cs extends Qf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=tc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CE.get())};e()}}cs.currentPopupAction=null;/**
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
 */const kE="pendingRedirect",Mr=new Map;class RE extends Qf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Mr.get(this.auth._key());if(!e){try{const s=await DE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Mr.set(this.auth._key(),e)}return this.bypassAuthState||Mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DE(t,e){const n=NE(e),s=OE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function PE(t,e){Mr.set(t._key(),e)}function OE(t){return Qt(t._redirectPersistence)}function NE(t){return xr(kE,t.config.apiKey,t.name)}async function xE(t,e,n=!1){const s=Vs(t),i=IE(s,e),o=await new RE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const ME=10*60*1e3;class LE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Jf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ME&&this.cachedEventUids.clear(),this.cachedEventUids.has(ih(e))}saveEventToCache(e){this.cachedEventUids.add(ih(e)),this.lastProcessedEventTime=Date.now()}}function ih(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jf(t);default:return!1}}/**
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
 */async function FE(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
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
 */const $E=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BE=/^https?/;async function VE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FE(t);for(const n of e)try{if(jE(n))return}catch{}Ct(t,"unauthorized-domain")}function jE(t){const e=sl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!BE.test(n))return!1;if($E.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const HE=new zi(3e4,6e4);function rh(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qE(t){return new Promise((e,n)=>{var s,i,r;function o(){rh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rh(),n(Ft(t,"network-request-failed"))},timeout:HE.get()})}if(!((i=(s=$t().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=$t().gapi)===null||r===void 0)&&r.load)o();else{const a=xw("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},Mf(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Lr=null,e})}let Lr=null;function KE(t){return Lr=Lr||qE(t),Lr}/**
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
 */const zE=new zi(5e3,15e3),WE="__/auth/iframe",GE="emulator/auth/iframe",QE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YE(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jl(e,GE):`https://${t.config.authDomain}/${WE}`,s={apiKey:e.apiKey,appName:t.name,v:$s},i=JE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ki(s).slice(1)}`}async function XE(t){const e=await KE(t),n=$t().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:YE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=$t().setTimeout(()=>{r(o)},zE.get());function l(){$t().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ZE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e1=500,t1=600,n1="_blank",s1="http://localhost";class oh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function i1(t,e,n,s=e1,i=t1){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ze().toLowerCase();n&&(a=Sf(c)?n1:n),Af(c)&&(e=e||s1,l.scrollbars="yes");const u=Object.entries(l).reduce((g,[y,I])=>`${g}${y}=${I},`,"");if(Dw(c)&&a!=="_self")return r1(e||"",a),new oh(null);const d=window.open(e||"",a,u);q(d,t,"popup-blocked");try{d.focus()}catch{}return new oh(d)}function r1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const o1="__/auth/handler",a1="emulator/auth/handler",l1=encodeURIComponent("fac");async function ah(t,e,n,s,i,r){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:$s,eventId:i};if(e instanceof Ff){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",n0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof Gi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${l1}=${encodeURIComponent(l)}`:"";return`${c1(t)}?${Ki(a).slice(1)}${c}`}function c1({config:t}){return t.emulator?Jl(t,a1):`https://${t.authDomain}/${o1}`}/**
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
 */const Ia="webStorageSupport";class u1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qf,this._completeRedirectFn=xE,this._overrideRedirectResult=PE}async _openPopup(e,n,s,i){var r;Xt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ah(e,n,s,sl(),i);return i1(e,o,tc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await ah(e,n,s,sl(),i);return fE(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Xt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await XE(e),s=new LE(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ia,{type:Ia},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ia];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pf()||Xl()||No()}}const h1=u1;var lh="@firebase/auth",ch="0.23.2";/**
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
 */class d1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function f1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function p1(t){Cs(new qn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Of(t)},c=new $w(s,i,r,l);return Vw(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Cs(new qn("auth-internal",e=>{const n=Vs(e.getProvider("auth").getImmediate());return(s=>new d1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(lh,ch,f1(t)),_n(lh,ch,"esm2017")}/**
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
 */const g1=5*60,m1=hf("authIdTokenMaxAge")||g1;let uh=null;const y1=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>m1)return;const i=n==null?void 0:n.token;uh!==i&&(uh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function v1(t=gf()){const e=Wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bw(t,{popupRedirectResolver:h1,persistence:[bE,uE,qf]}),s=hf("authTokenSyncURL");if(s){const r=y1(s);rE(n,r,()=>r(n.currentUser)),iE(n,o=>r(o))}const i=cf("auth");return i&&jw(n,`http://${i}`),n}p1("Browser");var _1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,sc=sc||{},K=_1||self;function Lo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ji(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function w1(t){return Object.prototype.hasOwnProperty.call(t,Ta)&&t[Ta]||(t[Ta]=++E1)}var Ta="closure_uid_"+(1e9*Math.random()>>>0),E1=0;function b1(t,e,n){return t.call.apply(t.bind,arguments)}function I1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=b1:Ye=I1,Ye.apply(null,arguments)}function yr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function An(){this.s=this.s,this.o=this.o}var T1=0;An.prototype.s=!1;An.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),T1!=0)&&w1(this)};An.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ic(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function hh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Lo(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var A1=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",()=>{},e),K.removeEventListener("test",()=>{},e)}catch{}return t}();function Ci(t){return/^[\s\xa0]*$/.test(t)}function Uo(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function xt(t){return Uo().indexOf(t)!=-1}function rc(t){return rc[" "](t),t}rc[" "]=function(){};function S1(t,e){var n=vb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var C1=xt("Opera"),Rs=xt("Trident")||xt("MSIE"),Xf=xt("Edge"),rl=Xf||Rs,Zf=xt("Gecko")&&!(Uo().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge"))&&!(xt("Trident")||xt("MSIE"))&&!xt("Edge"),k1=Uo().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge");function ep(){var t=K.document;return t?t.documentMode:void 0}var ol;e:{var Aa="",Sa=function(){var t=Uo();if(Zf)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xf)return/Edge\/([\d\.]+)/.exec(t);if(Rs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(k1)return/WebKit\/(\S+)/.exec(t);if(C1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sa&&(Aa=Sa?Sa[1]:""),Rs){var Ca=ep();if(Ca!=null&&Ca>parseFloat(Aa)){ol=String(Ca);break e}}ol=Aa}var al;if(K.document&&Rs){var dh=ep();al=dh||parseInt(ol,10)||void 0}else al=void 0;var R1=al;function ki(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Zf){e:{try{rc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:D1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ki.$.h.call(this)}}Le(ki,Xe);var D1={2:"touch",3:"pen",4:"mouse"};ki.prototype.h=function(){ki.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Yi="closure_listenable_"+(1e6*Math.random()|0),P1=0;function O1(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++P1,this.fa=this.ia=!1}function Fo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function oc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function N1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function tp(t){const e={};for(const n in t)e[n]=t[n];return e}const fh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function np(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<fh.length;r++)n=fh[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function $o(t){this.src=t,this.g={},this.h=0}$o.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=cl(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new O1(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function ll(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Yf(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Fo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var ac="closure_lm_"+(1e6*Math.random()|0),ka={};function sp(t,e,n,s,i){if(s&&s.once)return rp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)sp(t,e[r],n,s,i);return null}return n=uc(n),t&&t[Yi]?t.O(e,n,Ji(s)?!!s.capture:!!s,i):ip(t,e,n,!1,s,i)}function ip(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ji(i)?!!i.capture:!!i,a=cc(t);if(a||(t[ac]=a=new $o(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=x1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)A1||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(ap(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function x1(){function t(n){return e.call(t.src,t.listener,n)}const e=M1;return t}function rp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)rp(t,e[r],n,s,i);return null}return n=uc(n),t&&t[Yi]?t.P(e,n,Ji(s)?!!s.capture:!!s,i):ip(t,e,n,!0,s,i)}function op(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)op(t,e[r],n,s,i);else s=Ji(s)?!!s.capture:!!s,n=uc(n),t&&t[Yi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=cl(r,n,s,i),-1<n&&(Fo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=cc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cl(e,n,s,i)),(n=-1<t?e[t]:null)&&lc(n))}function lc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Yi])ll(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ap(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=cc(e))?(ll(n,t),n.h==0&&(n.src=null,e[ac]=null)):Fo(t)}}}function ap(t){return t in ka?ka[t]:ka[t]="on"+t}function M1(t,e){if(t.fa)t=!0;else{e=new ki(e,this);var n=t.listener,s=t.la||t.src;t.ia&&lc(t),t=n.call(s,e)}return t}function cc(t){return t=t[ac],t instanceof $o?t:null}var Ra="__closure_events_fn_"+(1e9*Math.random()>>>0);function uc(t){return typeof t=="function"?t:(t[Ra]||(t[Ra]=function(e){return t.handleEvent(e)}),t[Ra])}function xe(){An.call(this),this.i=new $o(this),this.S=this,this.J=null}Le(xe,An);xe.prototype[Yi]=!0;xe.prototype.removeEventListener=function(t,e,n,s){op(this,t,e,n,s)};function je(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var i=e;e=new Xe(s,t),np(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=vr(o,s,!0,e)&&i}if(o=e.g=t,i=vr(o,s,!0,e)&&i,i=vr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=vr(o,s,!1,e)&&i}xe.prototype.N=function(){if(xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Fo(n[s]);delete t.g[e],t.h--}}this.J=null};xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};xe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function vr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ll(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var hc=K.JSON.stringify;class L1{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function U1(){var t=dc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class F1{constructor(){this.h=this.g=null}add(e,n){const s=lp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var lp=new L1(()=>new $1,t=>t.reset());class $1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function B1(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function V1(t){K.setTimeout(()=>{throw t},0)}let Ri,Di=!1,dc=new F1,cp=()=>{const t=K.Promise.resolve(void 0);Ri=()=>{t.then(j1)}};var j1=()=>{for(var t;t=U1();){try{t.h.call(t.g)}catch(n){V1(n)}var e=lp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Di=!1};function Bo(t,e){xe.call(this),this.h=t||1,this.g=e||K,this.j=Ye(this.qb,this),this.l=Date.now()}Le(Bo,xe);D=Bo.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),je(this,"tick"),this.ga&&(fc(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){Bo.$.N.call(this),fc(this),delete this.g};function pc(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function up(t){t.g=pc(()=>{t.g=null,t.i&&(t.i=!1,up(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class H1 extends An{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:up(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pi(t){An.call(this),this.h=t,this.g={}}Le(Pi,An);var ph=[];function hp(t,e,n,s){Array.isArray(n)||(n&&(ph[0]=n.toString()),n=ph);for(var i=0;i<n.length;i++){var r=sp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function dp(t){oc(t.g,function(e,n){this.g.hasOwnProperty(n)&&lc(e)},t),t.g={}}Pi.prototype.N=function(){Pi.$.N.call(this),dp(this)};Pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vo(){this.g=!0}Vo.prototype.Ea=function(){this.g=!1};function q1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function K1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function us(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+W1(t,n)+(s?" "+s:"")})}function z1(t,e){t.info(function(){return"TIMEOUT: "+e})}Vo.prototype.info=function(){};function W1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return hc(n)}catch{return e}}var Zn={},gh=null;function jo(){return gh=gh||new xe}Zn.Ta="serverreachability";function fp(t){Xe.call(this,Zn.Ta,t)}Le(fp,Xe);function Oi(t){const e=jo();je(e,new fp(e))}Zn.STAT_EVENT="statevent";function pp(t,e){Xe.call(this,Zn.STAT_EVENT,t),this.stat=e}Le(pp,Xe);function tt(t){const e=jo();je(e,new pp(e,t))}Zn.Ua="timingevent";function gp(t,e){Xe.call(this,Zn.Ua,t),this.size=e}Le(gp,Xe);function Xi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Ho={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function gc(){}gc.prototype.h=null;function mh(t){return t.h||(t.h=t.i())}function yp(){}var Zi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mc(){Xe.call(this,"d")}Le(mc,Xe);function yc(){Xe.call(this,"c")}Le(yc,Xe);var ul;function qo(){}Le(qo,gc);qo.prototype.g=function(){return new XMLHttpRequest};qo.prototype.i=function(){return{}};ul=new qo;function er(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Pi(this),this.P=G1,t=rl?125:void 0,this.V=new Bo(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vp}function vp(){this.i=null,this.g="",this.h=!1}var G1=45e3,hl={},no={};D=er.prototype;D.setTimeout=function(t){this.P=t};function dl(t,e,n){t.L=1,t.v=zo(Zt(e)),t.s=n,t.S=!0,_p(t,null)}function _p(t,e){t.G=Date.now(),tr(t),t.A=Zt(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Cp(n.i,"t",s),t.C=0,n=t.l.J,t.h=new vp,t.g=Gp(t.l,n?e:null,!t.s),0<t.O&&(t.M=new H1(Ye(t.Pa,t,t.g),t.O)),hp(t.U,t.g,"readystatechange",t.nb),e=t.I?tp(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Oi(),q1(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&Mt(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=Mt(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||rl||this.g&&(this.h.h||this.g.ja()||wh(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?Oi(3):Oi(2)),Ko(this);var n=this.g.da();this.ca=n;t:if(wp(this)){var s=wh(this.g);t="";var i=s.length,r=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mn(this),ui(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,K1(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ci(a)){var c=a;break t}}c=null}if(n=c)us(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fl(this,n);else{this.i=!1,this.o=3,tt(12),Mn(this),ui(this);break e}}this.S?(Ep(this,u,o),rl&&this.i&&u==3&&(hp(this.U,this.V,"tick",this.mb),this.V.start())):(us(this.j,this.m,o,null),fl(this,o)),u==4&&Mn(this),this.i&&!this.J&&(u==4?qp(this.l,this):(this.i=!1,tr(this)))}else gb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Mn(this),ui(this)}}}catch{}finally{}};function wp(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Ep(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=Q1(t,n),i==no){e==4&&(t.o=4,tt(14),s=!1),us(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hl){t.o=4,tt(15),us(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else us(t.j,t.m,i,null),fl(t,i);wp(t)&&i!=no&&i!=hl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ic(e),e.M=!0,tt(11))):(us(t.j,t.m,n,"[Invalid Chunked Response]"),Mn(t),ui(t))}D.mb=function(){if(this.g){var t=Mt(this.g),e=this.g.ja();this.C<e.length&&(Ko(this),Ep(this,t,e),this.i&&t!=4&&tr(this))}};function Q1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?no:(n=Number(e.substring(n,s)),isNaN(n)?hl:(s+=1,s+n>e.length?no:(e=e.slice(s,s+n),t.C=s+n,e)))}D.cancel=function(){this.J=!0,Mn(this)};function tr(t){t.Y=Date.now()+t.P,bp(t,t.P)}function bp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xi(Ye(t.lb,t),e)}function Ko(t){t.B&&(K.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(z1(this.j,this.A),this.L!=2&&(Oi(),tt(17)),Mn(this),this.o=2,ui(this)):bp(this,this.Y-t)};function ui(t){t.l.H==0||t.J||qp(t.l,t)}function Mn(t){Ko(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,fc(t.V),dp(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function fl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||pl(n.i,t))){if(!t.K&&pl(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ro(n),Qo(n);else break e;bc(n),tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xi(Ye(n.ib,n),6e3));if(1>=Dp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ln(n,11)}else if((t.K||n.g==t)&&ro(n),!Ci(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=c[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=t.g;if(y){const I=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var r=s.i;r.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(vc(r,r.h),r.h=null))}if(s.F){const C=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.Da=C,me(s.I,s.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Wp(s,s.J?s.pa:null,s.Y),o.K){Pp(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Ko(a),tr(a)),s.g=o}else jp(s);0<n.j.length&&Jo(n)}else c[0]!="stop"&&c[0]!="close"||Ln(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ln(n,7):Ec(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Oi(4)}catch{}}function J1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Y1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Lo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ip(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Y1(t),s=J1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function X1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vn){this.h=t.h,so(this,t.j),this.s=t.s,this.g=t.g,io(this,t.m),this.l=t.l;var e=t.i,n=new Ni;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yh(this,n),this.o=t.o}else t&&(e=String(t).match(Tp))?(this.h=!1,so(this,e[1]||"",!0),this.s=si(e[2]||""),this.g=si(e[3]||"",!0),io(this,e[4]),this.l=si(e[5]||"",!0),yh(this,e[6]||"",!0),this.o=si(e[7]||"")):(this.h=!1,this.i=new Ni(null,this.h))}Vn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ii(e,vh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ii(e,vh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ii(n,n.charAt(0)=="/"?tb:eb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ii(n,sb)),t.join("")};function Zt(t){return new Vn(t)}function so(t,e,n){t.j=n?si(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function io(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yh(t,e,n){e instanceof Ni?(t.i=e,ib(t.i,t.h)):(n||(e=ii(e,nb)),t.i=new Ni(e,t.h))}function me(t,e,n){t.i.set(e,n)}function zo(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function si(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ii(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Z1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Z1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vh=/[#\/\?@]/g,eb=/[#\?:]/g,tb=/[#\?]/g,nb=/[#\?@]/g,sb=/#/g;function Ni(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Sn(t){t.g||(t.g=new Map,t.h=0,t.i&&X1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Ni.prototype;D.add=function(t,e){Sn(this),this.i=null,t=Hs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ap(t,e){Sn(t),e=Hs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sp(t,e){return Sn(t),e=Hs(t,e),t.g.has(e)}D.forEach=function(t,e){Sn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};D.ta=function(){Sn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};D.Z=function(t){Sn(this);let e=[];if(typeof t=="string")Sp(this,t)&&(e=e.concat(this.g.get(Hs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Sn(this),this.i=null,t=Hs(this,t),Sp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Cp(t,e,n){Ap(t,e),0<n.length&&(t.i=null,t.g.set(Hs(t,e),ic(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Hs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ib(t,e){e&&!t.j&&(Sn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ap(this,s),Cp(this,i,n))},t)),t.j=e}var rb=class{constructor(t,e){this.g=t,this.map=e}};function kp(t){this.l=t||ob,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ob=10;function Rp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Dp(t){return t.h?1:t.g?t.g.size:0}function pl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vc(t,e){t.g?t.g.add(e):t.h=e}function Pp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kp.prototype.cancel=function(){if(this.i=Op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Op(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ic(t.i)}var ab=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function lb(){this.g=new ab}function cb(t,e,n){const s=n||"";try{Ip(t,function(i,r){let o=i;Ji(i)&&(o=hc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function ub(t,e){const n=new Vo;if(K.Image){const s=new Image;s.onload=yr(_r,n,s,"TestLoadImage: loaded",!0,e),s.onerror=yr(_r,n,s,"TestLoadImage: error",!1,e),s.onabort=yr(_r,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=yr(_r,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function _r(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function nr(t){this.l=t.fc||null,this.j=t.ob||!1}Le(nr,gc);nr.prototype.g=function(){return new Wo(this.l,this.j)};nr.prototype.i=function(t){return function(){return t}}({});function Wo(t,e){xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=_c,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Wo,xe);var _c=0;D=Wo.prototype;D.open=function(t,e){if(this.readyState!=_c)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xi(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=_c};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Np(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Np(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?sr(this):xi(this),this.readyState==3&&Np(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,sr(this))};D.Ya=function(t){this.g&&(this.response=t,sr(this))};D.ka=function(){this.g&&sr(this)};function sr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xi(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hb=K.JSON.parse;function Ie(t){xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=xp,this.L=this.M=!1}Le(Ie,xe);var xp="",db=/^https?$/i,fb=["POST","PUT"];D=Ie.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ul.g(),this.C=this.u?mh(this.u):mh(ul),this.g.onreadystatechange=Ye(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){_h(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=Yf(fb,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Up(this),0<this.B&&((this.L=pb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.ua,this)):this.A=pc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){_h(this,r)}};function pb(t){return Rs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof sc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function _h(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Mp(t),Go(t)}function Mp(t){t.F||(t.F=!0,je(t,"complete"),je(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),Go(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Go(this,!0)),Ie.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?Lp(this):this.kb())};D.kb=function(){Lp(this)};function Lp(t){if(t.h&&typeof sc<"u"&&(!t.C[1]||Mt(t)!=4||t.da()!=2)){if(t.v&&Mt(t)==4)pc(t.La,0,t);else if(je(t,"readystatechange"),Mt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(Tp)[1]||null;!i&&K.self&&K.self.location&&(i=K.self.location.protocol.slice(0,-1)),s=!db.test(i?i.toLowerCase():"")}n=s}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var r=2<Mt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",Mp(t)}}finally{Go(t)}}}}function Go(t,e){if(t.g){Up(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=s}catch{}}}function Up(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function Mt(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hb(e)}};function wh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case xp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function gb(t){const e={};t=(t.g&&2<=Mt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Ci(t[s]))continue;var n=B1(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}N1(e,function(s){return s.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fp(t){let e="";return oc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function wc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Fp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $p(t){this.Ga=0,this.j=[],this.l=new Vo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ys("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ys("baseRetryDelayMs",5e3,t),this.hb=Ys("retryDelaySeedMs",1e4,t),this.eb=Ys("forwardChannelMaxRetries",2,t),this.xa=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new kp(t&&t.concurrentRequestLimit),this.Ja=new lb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=$p.prototype;D.ra=8;D.H=1;function Ec(t){if(Bp(t),t.H==3){var e=t.W++,n=Zt(t.I);if(me(n,"SID",t.K),me(n,"RID",e),me(n,"TYPE","terminate"),ir(t,n),e=new er(t,t.l,e),e.L=2,e.v=zo(Zt(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=Gp(e.l,null),e.g.ha(e.v)),e.G=Date.now(),tr(e)}zp(t)}function Qo(t){t.g&&(Ic(t),t.g.cancel(),t.g=null)}function Bp(t){Qo(t),t.u&&(K.clearTimeout(t.u),t.u=null),ro(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Jo(t){if(!Rp(t.i)&&!t.m){t.m=!0;var e=t.Na;Ri||cp(),Di||(Ri(),Di=!0),dc.add(e,t),t.C=0}}function mb(t,e){return Dp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Xi(Ye(t.Na,t,e),Kp(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new er(this,this.l,t);let r=this.s;if(this.U&&(r?(r=tp(r),np(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Vp(this,i,e),n=Zt(this.I),me(n,"RID",t),me(n,"CVER",22),this.F&&me(n,"X-HTTP-Session-Id",this.F),ir(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Fp(r)))+"&"+e:this.o&&wc(n,this.o,r)),vc(this.i,i),this.bb&&me(n,"TYPE","init"),this.P?(me(n,"$req",e),me(n,"SID","null"),i.aa=!0,dl(i,n,null)):dl(i,n,e),this.H=2}}else this.H==3&&(t?Eh(this,t):this.j.length==0||Rp(this.i)||Eh(this))};function Eh(t,e){var n;e?n=e.m:n=t.W++;const s=Zt(t.I);me(s,"SID",t.K),me(s,"RID",n),me(s,"AID",t.V),ir(t,s),t.o&&t.s&&wc(s,t.o,t.s),n=new er(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Vp(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),vc(t.i,n),dl(n,s,e)}function ir(t,e){t.na&&oc(t.na,function(n,s){me(e,s,n)}),t.h&&Ip({},function(n,s){me(e,s,n)})}function Vp(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Ye(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{cb(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function jp(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ri||cp(),Di||(Ri(),Di=!0),dc.add(e,t),t.A=0}}function bc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Xi(Ye(t.Ma,t),Kp(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,Hp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Xi(Ye(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),Qo(this),Hp(this))};function Ic(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Hp(t){t.g=new er(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Zt(t.wa);me(e,"RID","rpc"),me(e,"SID",t.K),me(e,"AID",t.V),me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&me(e,"TO",t.qa),me(e,"TYPE","xmlhttp"),ir(t,e),t.o&&t.s&&wc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=zo(Zt(e)),n.s=null,n.S=!0,_p(n,t)}D.ib=function(){this.v!=null&&(this.v=null,Qo(this),bc(this),tt(19))};function ro(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function qp(t,e){var n=null;if(t.g==e){ro(t),Ic(t),t.g=null;var s=2}else if(pl(t.i,e))n=e.F,Pp(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=jo(),je(s,new gp(s,n)),Jo(t)}else jp(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&mb(t,e)||s==2&&bc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ln(t,5);break;case 4:Ln(t,10);break;case 3:Ln(t,6);break;default:Ln(t,2)}}}function Kp(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ln(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Ye(t.pb,t);n||(n=new Vn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||so(n,"https"),zo(n)),ub(n.toString(),s)}else tt(2);t.H=0,t.h&&t.h.za(e),zp(t),Bp(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function zp(t){if(t.H=0,t.ma=[],t.h){const e=Op(t.i);(e.length!=0||t.j.length!=0)&&(hh(t.ma,e),hh(t.ma,t.j),t.i.i.length=0,ic(t.j),t.j.length=0),t.h.ya()}}function Wp(t,e,n){var s=n instanceof Vn?Zt(n):new Vn(n);if(s.g!="")e&&(s.g=e+"."+s.g),io(s,s.m);else{var i=K.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Vn(null);s&&so(r,s),e&&(r.g=e),i&&io(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&me(s,n,e),me(s,"VER",t.ra),ir(t,s),s}function Gp(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ie(new nr({ob:!0})):new Ie(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function Qp(){}D=Qp.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function oo(){if(Rs&&!(10<=Number(R1)))throw Error("Environmental error: no available transport.")}oo.prototype.g=function(t,e){return new dt(t,e)};function dt(t,e){xe.call(this),this.g=new $p(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ci(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ci(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qs(this)}Le(dt,xe);dt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Wp(t,null,t.Y),Jo(t)};dt.prototype.close=function(){Ec(this.g)};dt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=hc(t),t=n);e.j.push(new rb(e.fb++,t)),e.H==3&&Jo(e)};dt.prototype.N=function(){this.g.h=null,delete this.j,Ec(this.g),delete this.g,dt.$.N.call(this)};function Jp(t){mc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(Jp,mc);function Yp(){yc.call(this),this.status=1}Le(Yp,yc);function qs(t){this.g=t}Le(qs,Qp);qs.prototype.Ba=function(){je(this.g,"a")};qs.prototype.Aa=function(t){je(this.g,new Jp(t))};qs.prototype.za=function(t){je(this.g,new Yp)};qs.prototype.ya=function(){je(this.g,"b")};function yb(){this.blockSize=-1}function Ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Le(Ht,yb);Ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Da(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}Ht.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Da(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Da(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Da(this,s),i=0;break}}this.h=i,this.i+=e};Ht.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function le(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var vb={};function Tc(t){return-128<=t&&128>t?S1(t,function(e){return new le([e|0],0>e?-1:0)}):new le([t|0],0>t?-1:0)}function Lt(t){if(isNaN(t)||!isFinite(t))return vs;if(0>t)return $e(Lt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=gl;return new le(e,0)}function Xp(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return $e(Xp(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Lt(Math.pow(e,8)),s=vs,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Lt(Math.pow(e,r)),s=s.R(r).add(Lt(o))):(s=s.R(n),s=s.add(Lt(o)))}return s}var gl=4294967296,vs=Tc(0),ml=Tc(1),bh=Tc(16777216);D=le.prototype;D.ea=function(){if(gt(this))return-$e(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:gl+s)*e,e*=gl}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Jt(this))return"0";if(gt(this))return"-"+$e(this).toString(t);for(var e=Lt(Math.pow(t,6)),n=this,s="";;){var i=lo(n,e).g;n=ao(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Jt(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Jt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function gt(t){return t.h==-1}D.X=function(t){return t=ao(this,t),gt(t)?-1:Jt(t)?0:1};function $e(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new le(n,~t.h).add(ml)}D.abs=function(){return gt(this)?$e(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new le(n,n[n.length-1]&-2147483648?-1:0)};function ao(t,e){return t.add($e(e))}D.R=function(t){if(Jt(this)||Jt(t))return vs;if(gt(this))return gt(t)?$e(this).R($e(t)):$e($e(this).R(t));if(gt(t))return $e(this.R($e(t)));if(0>this.X(bh)&&0>t.X(bh))return Lt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,wr(n,2*s+2*i),n[2*s+2*i+1]+=r*l,wr(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,wr(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,wr(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new le(n,0)};function wr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Xs(t,e){this.g=t,this.h=e}function lo(t,e){if(Jt(e))throw Error("division by zero");if(Jt(t))return new Xs(vs,vs);if(gt(t))return e=lo($e(t),e),new Xs($e(e.g),$e(e.h));if(gt(e))return e=lo(t,$e(e)),new Xs($e(e.g),e.h);if(30<t.g.length){if(gt(t)||gt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ml,s=e;0>=s.X(t);)n=Ih(n),s=Ih(s);var i=os(n,1),r=os(s,1);for(s=os(s,2),n=os(n,2);!Jt(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=os(s,1),n=os(n,1)}return e=ao(t,i.R(e)),new Xs(i,e)}for(i=vs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Lt(n),o=r.R(e);gt(o)||0<o.X(t);)n-=s,r=Lt(n),o=r.R(e);Jt(r)&&(r=ml),i=i.add(r),t=ao(t,o)}return new Xs(i,t)}D.gb=function(t){return lo(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new le(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new le(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new le(n,this.h^t.h)};function Ih(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new le(n,t.h)}function os(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new le(i,t.h)}oo.prototype.createWebChannel=oo.prototype.g;dt.prototype.send=dt.prototype.u;dt.prototype.open=dt.prototype.m;dt.prototype.close=dt.prototype.close;Ho.NO_ERROR=0;Ho.TIMEOUT=8;Ho.HTTP_ERROR=6;mp.COMPLETE="complete";yp.EventType=Zi;Zi.OPEN="a";Zi.CLOSE="b";Zi.ERROR="c";Zi.MESSAGE="d";xe.prototype.listen=xe.prototype.O;Ie.prototype.listenOnce=Ie.prototype.P;Ie.prototype.getLastError=Ie.prototype.Sa;Ie.prototype.getLastErrorCode=Ie.prototype.Ia;Ie.prototype.getStatus=Ie.prototype.da;Ie.prototype.getResponseJson=Ie.prototype.Wa;Ie.prototype.getResponseText=Ie.prototype.ja;Ie.prototype.send=Ie.prototype.ha;Ie.prototype.setWithCredentials=Ie.prototype.Oa;Ht.prototype.digest=Ht.prototype.l;Ht.prototype.reset=Ht.prototype.reset;Ht.prototype.update=Ht.prototype.j;le.prototype.add=le.prototype.add;le.prototype.multiply=le.prototype.R;le.prototype.modulo=le.prototype.gb;le.prototype.compare=le.prototype.X;le.prototype.toNumber=le.prototype.ea;le.prototype.toString=le.prototype.toString;le.prototype.getBits=le.prototype.D;le.fromNumber=Lt;le.fromString=Xp;var _b=function(){return new oo},wb=function(){return jo()},Pa=Ho,Eb=mp,bb=Zn,Th={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ib=nr,Er=yp,Tb=Ie,Ab=le;const Ah="@firebase/firestore";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let Ks="9.23.0";/**
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
 */const Gn=new Kl("@firebase/firestore");function Sh(){return Gn.logLevel}function V(t,...e){if(Gn.logLevel<=ne.DEBUG){const n=e.map(Ac);Gn.debug(`Firestore (${Ks}): ${t}`,...n)}}function Qn(t,...e){if(Gn.logLevel<=ne.ERROR){const n=e.map(Ac);Gn.error(`Firestore (${Ks}): ${t}`,...n)}}function co(t,...e){if(Gn.logLevel<=ne.WARN){const n=e.map(Ac);Gn.warn(`Firestore (${Ks}): ${t}`,...n)}}function Ac(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function Me(t,e){t||Z()}function ye(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Zp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class Cb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kb{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string"),new Zp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new ze(e)}}class Rb{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Db{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Rb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ob{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.T=n.token,new Pb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Nb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class eg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Nb(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function fe(t,e){return t<e?-1:t>e?1:0}function Ds(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Oe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class we{constructor(e){this.timestamp=e}static fromTimestamp(e){return new we(e)}static min(){return new we(new Oe(0,0))}static max(){return new we(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Mi{constructor(e,n,s){n===void 0?n=0:n>e.length&&Z(),s===void 0?s=e.length-n:s>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends Mi{construct(e,n,s){return new be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const xb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Mi{construct(e,n,s){return new Qe(e,n,s)}static isValidIdentifier(e){return xb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new H(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new H(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(be.fromString(e))}static fromName(e){return new Q(be.fromString(e).popFirst(5))}static empty(){return new Q(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new be(e.slice()))}}function Mb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=we.fromTimestamp(s===1e9?new Oe(n+1,0):new Oe(n,s));return new bn(i,Q.empty(),e)}function Lb(t){return new bn(t.readTime,t.key,-1)}class bn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new bn(we.min(),Q.empty(),-1)}static max(){return new bn(we.max(),Q.empty(),-1)}}function Ub(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Fb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $b{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function tg(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==Fb)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(i=>i?A.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new A((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new A((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ng{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}ng.ct=-1;function Sc(t){return t==null}function uo(t){return t===0&&1/t==-1/0}function Bb(t){return typeof t=="number"&&Number.isInteger(t)&&!uo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ch(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class lt{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new lt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new br(this.root,e,this.comparator,!1)}getReverseIterator(){return new br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new br(this.root,e,this.comparator,!0)}}class br{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ue.RED,this.left=i??Ue.EMPTY,this.right=r??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ue(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kh(this.data.getIterator())}getIteratorFrom(e){return new kh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class kh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new It([])}unionWith(e){let n=new nt(Qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Vb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vb("Invalid base64 string: "+i):i}}(e);return new en(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new en(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const jb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(Me(!!t),typeof t=="string"){let e=0;const n=jb.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Li(t){return typeof t=="string"?en.fromBase64String(t):en.fromUint8Array(t)}/**
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
 */function Cc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ig(t){const e=t.mapValue.fields.__previous_value__;return Cc(e)?ig(e):e}function ho(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class Hb{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class fo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ir={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cc(t)?4:qb(t)?9007199254740991:10:Z()}function qt(t,e){if(t===e)return!0;const n=Ps(t);if(n!==Ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ho(t).isEqual(ho(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Jn(s.timestampValue),o=Jn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Li(s.bytesValue).isEqual(Li(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Fe(s.doubleValue),o=Fe(i.doubleValue);return r===o?uo(r)===uo(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ch(r)!==Ch(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!qt(r[a],o[a])))return!1;return!0}(t,e);default:return Z()}}function Ui(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function Os(t,e){if(t===e)return 0;const n=Ps(t),s=Ps(e);if(n!==s)return fe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Fe(i.integerValue||i.doubleValue),a=Fe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Rh(t.timestampValue,e.timestampValue);case 4:return Rh(ho(t),ho(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Li(i),a=Li(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=fe(o[l],a[l]);if(c!==0)return c}return fe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=fe(Fe(i.latitude),Fe(r.latitude));return o!==0?o:fe(Fe(i.longitude),Fe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Os(o[l],a[l]);if(c)return c}return fe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Ir.mapValue&&r===Ir.mapValue)return 0;if(i===Ir.mapValue)return 1;if(r===Ir.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=fe(a[u],c[u]);if(d!==0)return d;const g=Os(o[a[u]],l[c[u]]);if(g!==0)return g}return fe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Rh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Jn(t),s=Jn(e),i=fe(n.seconds,s.seconds);return i!==0?i:fe(n.nanos,s.nanos)}function Ns(t){return yl(t)}function yl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Jn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Li(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=yl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${yl(s.fields[a])}`;return r+"}"}(t.mapValue):Z();var e,n}function vl(t){return!!t&&"integerValue"in t}function kc(t){return!!t&&"arrayValue"in t}function Ur(t){return!!t&&"mapValue"in t}function hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=hi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ur(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hi(n)}setAll(e){let n=Qe.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=hi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Ur(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Ur(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){rr(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Et(hi(this.value))}}function rg(t){const e=[];return rr(t.fields,(n,s)=>{const i=new Qe([n]);if(Ur(s)){const r=rg(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new It(e)}/**
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
 */class _t{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,we.min(),we.min(),we.min(),Et.empty(),0)}static newFoundDocument(e,n,s,i){return new _t(e,1,n,we.min(),s,i,0)}static newNoDocument(e,n){return new _t(e,2,n,we.min(),we.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,we.min(),we.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class po{constructor(e,n){this.position=e,this.inclusive=n}}function Dh(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=Q.comparator(Q.fromName(o.referenceValue),n.key):s=Os(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ph(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class di{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class og{}class Pe extends og{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Wb(e,n,s):n==="array-contains"?new Jb(e,s):n==="in"?new Yb(e,s):n==="not-in"?new Xb(e,s):n==="array-contains-any"?new Zb(e,s):new Pe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Gb(e,s):new Qb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Os(n,this.value)):n!==null&&Ps(this.value)===Ps(n)&&this.matchesComparison(Os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class In extends og{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new In(e,n)}matches(e){return ag(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ag(t){return t.op==="and"}function lg(t){return zb(t)&&ag(t)}function zb(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function _l(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Ns(t.value);if(lg(t))return t.filters.map(e=>_l(e)).join(",");{const e=t.filters.map(n=>_l(n)).join(",");return`${t.op}(${e})`}}function cg(t,e){return t instanceof Pe?function(n,s){return s instanceof Pe&&n.op===s.op&&n.field.isEqual(s.field)&&qt(n.value,s.value)}(t,e):t instanceof In?function(n,s){return s instanceof In&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&cg(r,s.filters[o]),!0):!1}(t,e):void Z()}function ug(t){return t instanceof Pe?function(e){return`${e.field.canonicalString()} ${e.op} ${Ns(e.value)}`}(t):t instanceof In?function(e){return e.op.toString()+" {"+e.getFilters().map(ug).join(" ,")+"}"}(t):"Filter"}class Wb extends Pe{constructor(e,n,s){super(e,n,s),this.key=Q.fromName(s.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Gb extends Pe{constructor(e,n){super(e,"in",n),this.keys=hg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Qb extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=hg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Q.fromName(s.referenceValue))}class Jb extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kc(n)&&Ui(n.arrayValue,this.value)}}class Yb extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ui(this.value.arrayValue,n)}}class Xb extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ui(this.value.arrayValue,n)}}class Zb extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ui(this.value.arrayValue,s))}}/**
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
 */class eI{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Oh(t,e=null,n=[],s=[],i=null,r=null,o=null){return new eI(t,e,n,s,i,r,o)}function Rc(t){const e=ye(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>_l(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ns(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ns(s)).join(",")),e.dt=n}return e.dt}function Dc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Kb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ph(t.startAt,e.startAt)&&Ph(t.endAt,e.endAt)}/**
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
 */class Xo{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function tI(t,e,n,s,i,r,o,a){return new Xo(t,e,n,s,i,r,o,a)}function nI(t){return new Xo(t)}function Nh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function iI(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function rI(t){return t.collectionGroup!==null}function _s(t){const e=ye(t);if(e.wt===null){e.wt=[];const n=iI(e),s=sI(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new di(n)),e.wt.push(new di(Qe.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new di(Qe.keyField(),r))}}}return e.wt}function xs(t){const e=ye(t);if(!e._t)if(e.limitType==="F")e._t=Oh(e.path,e.collectionGroup,_s(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of _s(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new di(r.field,o))}const s=e.endAt?new po(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new po(e.startAt.position,e.startAt.inclusive):null;e._t=Oh(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function wl(t,e,n){return new Xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dg(t,e){return Dc(xs(t),xs(e))&&t.limitType===e.limitType}function fg(t){return`${Rc(xs(t))}|lt:${t.limitType}`}function xh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ug(s)).join(", ")}]`),Sc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ns(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ns(s)).join(",")),`Target(${n})`}(xs(t))}; limitType=${t.limitType})`}function Pc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of _s(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Dh(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,_s(n),s)||n.endAt&&!function(i,r,o){const a=Dh(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,_s(n),s))}(t,e)}function oI(t){return(e,n)=>{let s=!1;for(const i of _s(t)){const r=aI(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function aI(t,e,n){const s=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Os(a,l):Z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
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
 */class zs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){rr(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return sg(this.inner)}size(){return this.innerSize}}/**
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
 */const lI=new lt(Q.comparator);function go(){return lI}const pg=new lt(Q.comparator);function Tr(...t){let e=pg;for(const n of t)e=e.insert(n.key,n);return e}function gg(t){let e=pg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Un(){return fi()}function mg(){return fi()}function fi(){return new zs(t=>t.toString(),(t,e)=>t.isEqual(e))}const cI=new lt(Q.comparator),uI=new nt(Q.comparator);function We(...t){let e=uI;for(const n of t)e=e.add(n);return e}const hI=new nt(fe);function dI(){return hI}/**
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
 */function yg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uo(e)?"-0":e}}function vg(t){return{integerValue:""+t}}function fI(t,e){return Bb(e)?vg(e):yg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Zo{constructor(){this._=void 0}}function pI(t,e,n){return t instanceof mo?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cc(i)&&(i=ig(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Fi?wg(t,e):t instanceof $i?Eg(t,e):function(s,i){const r=_g(s,i),o=Mh(r)+Mh(s.gt);return vl(r)&&vl(s.gt)?vg(o):yg(s.serializer,o)}(t,e)}function gI(t,e,n){return t instanceof Fi?wg(t,e):t instanceof $i?Eg(t,e):n}function _g(t,e){return t instanceof yo?vl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class mo extends Zo{}class Fi extends Zo{constructor(e){super(),this.elements=e}}function wg(t,e){const n=bg(e);for(const s of t.elements)n.some(i=>qt(i,s))||n.push(s);return{arrayValue:{values:n}}}class $i extends Zo{constructor(e){super(),this.elements=e}}function Eg(t,e){let n=bg(e);for(const s of t.elements)n=n.filter(i=>!qt(i,s));return{arrayValue:{values:n}}}class yo extends Zo{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Mh(t){return Fe(t.integerValue||t.doubleValue)}function bg(t){return kc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Fi&&s instanceof Fi||n instanceof $i&&s instanceof $i?Ds(n.elements,s.elements,qt):n instanceof yo&&s instanceof yo?qt(n.gt,s.gt):n instanceof mo&&s instanceof mo}(t.transform,e.transform)}class yI{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ea{}function Ig(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ag(t.key,Bt.none()):new or(t.key,t.data,Bt.none());{const n=t.data,s=Et.empty();let i=new nt(Qe.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new es(t.key,s,new It(i.toArray()),Bt.none())}}function vI(t,e,n){t instanceof or?function(s,i,r){const o=s.value.clone(),a=Uh(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof es?function(s,i,r){if(!Fr(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Uh(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Tg(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function pi(t,e,n,s){return t instanceof or?function(i,r,o,a){if(!Fr(i.precondition,r))return o;const l=i.value.clone(),c=Fh(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof es?function(i,r,o,a){if(!Fr(i.precondition,r))return o;const l=Fh(i.fieldTransforms,a,r),c=r.data;return c.setAll(Tg(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return Fr(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function _I(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=_g(s.transform,i||null);r!=null&&(n===null&&(n=Et.empty()),n.set(s.field,r))}return n||null}function Lh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ds(n,s,(i,r)=>mI(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class or extends ea{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class es extends ea{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Tg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Uh(t,e,n){const s=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,gI(o,a,n[i]))}return s}function Fh(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,pI(r,o,e))}return s}class Ag extends ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wI extends ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class EI{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&vI(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=pi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=pi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=mg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Ig(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),We())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,(n,s)=>Lh(n,s))&&Ds(this.baseMutations,e.baseMutations,(n,s)=>Lh(n,s))}}class Oc{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Me(e.mutations.length===s.length);let i=cI;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Oc(e,n,s,i)}}/**
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
 */class bI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var Ae,ee;function II(t){switch(t){default:return Z();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function TI(t){if(t===void 0)return Qn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ae.OK:return T.OK;case Ae.CANCELLED:return T.CANCELLED;case Ae.UNKNOWN:return T.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return T.INTERNAL;case Ae.UNAVAILABLE:return T.UNAVAILABLE;case Ae.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ae.NOT_FOUND:return T.NOT_FOUND;case Ae.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ae.ABORTED:return T.ABORTED;case Ae.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ae.DATA_LOSS:return T.DATA_LOSS;default:return Z()}}(ee=Ae||(Ae={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ab([4294967295,4294967295],0);class AI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function El(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CI(t,e){return El(t,e.toTimestamp())}function ws(t){return Me(!!t),we.fromTimestamp(function(e){const n=Jn(e);return new Oe(n.seconds,n.nanos)}(t))}function Sg(t,e){return function(n){return new be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kI(t){const e=be.fromString(t);return Me(LI(e)),e}function bl(t,e){return Sg(t.databaseId,e.path)}function RI(t){const e=kI(t);return e.length===4?be.emptyPath():PI(e)}function DI(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function PI(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $h(t,e,n){return{name:bl(t,e),fields:n.value.mapValue.fields}}function OI(t,e){let n;if(e instanceof or)n={update:$h(t,e.key,e.value)};else if(e instanceof Ag)n={delete:bl(t,e.key)};else if(e instanceof es)n={update:$h(t,e.key,e.data),updateMask:MI(e.fieldMask)};else{if(!(e instanceof wI))return Z();n={verify:bl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof mo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $i)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof yo)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw Z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:CI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function NI(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?ws(s.updateTime):ws(i);return r.isEqual(we.min())&&(r=ws(i)),new yI(r,s.transformResults||[])}(n,e))):[]}function xI(t){let e=RI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Me(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const d=Cg(u);return d instanceof In&&lg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new di(ls(d.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,Sc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,g=u.values||[];return new po(g,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,g=u.values||[];return new po(g,d)}(n.endAt)),tI(e,i,o,r,a,"F",l,c)}function Cg(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ls(e.unaryFilter.field);return Pe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ls(e.unaryFilter.field);return Pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ls(e.unaryFilter.field);return Pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ls(e.unaryFilter.field);return Pe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(e){return Pe.create(ls(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return In.create(e.compositeFilter.filters.map(n=>Cg(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Z()}}(e.compositeFilter.op))}(t):Z()}function ls(t){return Qe.fromServerFormat(t.fieldPath)}function MI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function LI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class UI{constructor(e){this.fe=e}}function FI(t){const e=xI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wl(e,e.limit,"L"):e}/**
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
 */class $I{constructor(){this.rn=new BI}addToCollectionParentIndex(e,n){return this.rn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(bn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(bn.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class BI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new nt(be.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new nt(be.comparator)).toArray()}}/**
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
 */class Ms{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ms(0)}static Mn(){return new Ms(-1)}}/**
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
 */class VI{constructor(){this.changes=new zs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class HI{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&pi(s.mutation,i,It.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,We()).next(()=>s))}getLocalViewOfDocuments(e,n,s=We()){const i=Un();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Tr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Un();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,We()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=go();const o=fi(),a=fi();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof es)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),pi(u.mutation,c,u.mutation.getFieldMask(),Oe.now())):o.set(c.key,It.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new jI(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=fi();let i=new lt((o,a)=>o-a),r=We();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||It.empty();u=a.applyToLocalView(c,u),s.set(l,u);const d=(i.get(a.batchId)||We()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=mg();u.forEach(g=>{if(!r.has(g)){const y=Ig(n.get(g),s.get(g));y!==null&&d.set(g,y),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return Q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):A.resolve(Un());let a=-1,l=r;return o.next(c=>A.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(g=>{l=l.insert(u,g)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,We())).next(u=>({batchId:a,changes:gg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(s=>{let i=Tr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Tr();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(c,u){return new Xo(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,_t.newInvalidDocument(c)))});let o=Tr();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&pi(c.mutation,l,It.empty(),Oe.now()),Pc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class qI{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return A.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:ws(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:FI(s.bundledQuery),readTime:ws(s.readTime)}}(n)),A.resolve()}}/**
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
 */class KI{constructor(){this.overlays=new lt(Q.comparator),this.ls=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Un();return A.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.we(e,n,r)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const i=Un(),r=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new lt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Un(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Un(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return A.resolve(a)}we(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new bI(n,s));let r=this.ls.get(n);r===void 0&&(r=We(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
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
 */class Nc{constructor(){this.fs=new nt(De.ds),this.ws=new nt(De._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new De(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new De(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new Q(new be([])),s=new De(n,e),i=new De(n,e+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new Q(new be([])),s=new De(n,e),i=new De(n,e+1);let r=We();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new De(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class De{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return Q.comparator(e.key,n.key)||fe(e.As,n.As)}static _s(e,n){return fe(e.As,n.As)||Q.comparator(e.key,n.key)}}/**
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
 */class zI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new nt(De.ds)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EI(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new De(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return A.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new De(n,0),i=new De(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),A.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new nt(fe);return n.forEach(i=>{const r=new De(i,0),o=new De(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),A.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;Q.isDocumentKey(r)||(r=r.child(""));const o=new De(new Q(r),0);let a=new nt(fe);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.As)),!0)},o),A.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return A.forEach(n.mutations,i=>{const r=new De(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new De(n,0),i=this.Rs.firstAfterOrEqual(s);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class WI{constructor(e){this.Ds=e,this.docs=new lt(Q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let s=go();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():_t.newInvalidDocument(i))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=go();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ub(Lb(u),s)<=0||(i.has(u.key)||Pc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Z()}Cs(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new GI(this)}getSize(e){return A.resolve(this.size)}}class GI extends VI{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class QI{constructor(e){this.persistence=e,this.xs=new zs(n=>Rc(n),Dc),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Nc,this.targetCount=0,this.Ms=Ms.kn()}forEachTarget(e,n){return this.xs.forEach((s,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),A.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ms(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Fn(n),A.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(r).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.ks.containsKey(n))}}/**
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
 */class JI{constructor(e,n){this.$s={},this.overlays={},this.Os=new ng(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new QI(this),this.indexManager=new $I,this.remoteDocumentCache=function(s){return new WI(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new UI(n),this.qs=new qI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new zI(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const i=new YI(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(e,n){return A.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class YI extends $b{constructor(e){super(),this.currentSequenceNumber=e}}class xc{constructor(e){this.persistence=e,this.Qs=new Nc,this.js=null}static zs(e){return new xc(e)}get Ws(){if(this.js)return this.js;throw Z()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),A.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ws,s=>{const i=Q.fromPath(s);return this.Hs(e,i).next(r=>{r||n.removeEntry(i,we.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return A.or([()=>A.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Mc{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(e,n){let s=We(),i=We();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Mc(e,n.fromCache,s,i)}}/**
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
 */class XI{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ki(e,n).next(r=>r||this.Gi(e,n,i,s)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(Nh(n))return A.resolve(null);let s=xs(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wl(n,null,"F"),s=xs(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=We(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,wl(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,s,i){return Nh(n)||i.isEqual(we.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(e,n):(Sh()<=ne.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xh(n)),this.Wi(e,o,n,Mb(i,-1)))})}ji(e,n){let s=new nt(oI(e));return n.forEach((i,r)=>{Pc(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(e,n){return Sh()<=ne.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",xh(n)),this.Ui.getDocumentsMatchingQuery(e,n,bn.min())}Wi(e,n,s,i){return this.Ui.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class ZI{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new lt(fe),this.Yi=new zs(r=>Rc(r),Dc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HI(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function eT(t,e,n,s){return new ZI(t,e,n,s)}async function kg(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=We();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function tT(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,d=u.keys();let g=A.resolve();return d.forEach(y=>{g=g.next(()=>c.getEntry(a,y)).next(I=>{const C=l.docVersions.get(y);Me(C!==null),I.version.compareTo(C)<0&&(u.applyToRemoteDocument(I,l),I.isValidDocument()&&(I.setReadTime(l.commitVersion),c.addEntry(I)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=We();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function nT(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function sT(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class Bh{constructor(){this.activeTargetIds=dI()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iT{constructor(){this.Hr=new Bh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Bh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rT{Yr(e){}shutdown(){}}/**
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
 */class Vh{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ar=null;function Oa(){return Ar===null?Ar=268435456+Math.round(2147483648*Math.random()):Ar++,"0x"+Ar.toString(16)}/**
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
 */const oT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class aT{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ke="WebChannelConnection";class lT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,i,r){const o=Oa(),a=this.To(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.Eo(l,i,r),this.Ao(e,a,l,s).then(c=>(V("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw co("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(e,n,s,i,r,o){return this.Io(e,n,s,i,r)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ks,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}To(e,n){const s=oT[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,i){const r=Oa();return new Promise((o,a)=>{const l=new Tb;l.setWithCredentials(!0),l.listenOnce(Eb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Pa.NO_ERROR:const u=l.getResponseJson();V(Ke,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Pa.TIMEOUT:V(Ke,`RPC '${e}' ${r} timed out`),a(new H(T.DEADLINE_EXCEEDED,"Request time out"));break;case Pa.HTTP_ERROR:const d=l.getStatus();if(V(Ke,`RPC '${e}' ${r} failed with status:`,d,"response text:",l.getResponseText()),d>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const I=function(C){const O=C.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(O)>=0?O:T.UNKNOWN}(y.status);a(new H(I,y.message))}else a(new H(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(T.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{V(Ke,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);V(Ke,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}Ro(e,n,s){const i=Oa(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_b(),a=wb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new Ib({})),this.Eo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");V(Ke,`Creating RPC '${e}' stream ${i}: ${u}`,l);const d=o.createWebChannel(u,l);let g=!1,y=!1;const I=new aT({ro:O=>{y?V(Ke,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(g||(V(Ke,`Opening RPC '${e}' stream ${i} transport.`),d.open(),g=!0),V(Ke,`RPC '${e}' stream ${i} sending:`,O),d.send(O))},oo:()=>d.close()}),C=(O,N,M)=>{O.listen(N,G=>{try{M(G)}catch(L){setTimeout(()=>{throw L},0)}})};return C(d,Er.EventType.OPEN,()=>{y||V(Ke,`RPC '${e}' stream ${i} transport opened.`)}),C(d,Er.EventType.CLOSE,()=>{y||(y=!0,V(Ke,`RPC '${e}' stream ${i} transport closed`),I.wo())}),C(d,Er.EventType.ERROR,O=>{y||(y=!0,co(Ke,`RPC '${e}' stream ${i} transport errored:`,O),I.wo(new H(T.UNAVAILABLE,"The operation could not be completed")))}),C(d,Er.EventType.MESSAGE,O=>{var N;if(!y){const M=O.data[0];Me(!!M);const G=M,L=G.error||((N=G[0])===null||N===void 0?void 0:N.error);if(L){V(Ke,`RPC '${e}' stream ${i} received error:`,L);const Ee=L.status;let _e=function(ct){const ut=Ae[ct];if(ut!==void 0)return TI(ut)}(Ee),He=L.message;_e===void 0&&(_e=T.INTERNAL,He="Unknown error status: "+Ee+" with message "+L.message),y=!0,I.wo(new H(_e,He)),d.close()}else V(Ke,`RPC '${e}' stream ${i} received:`,M),I._o(M)}}),C(a,bb.STAT_EVENT,O=>{O.stat===Th.PROXY?V(Ke,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===Th.NOPROXY&&V(Ke,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.fo()},0),I}}function Na(){return typeof document<"u"?document:null}/**
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
 */function ta(t){return new AI(t,!0)}/**
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
 */class Rg{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class cT{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Rg(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{e(()=>{const i=new H(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uT extends cT{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=NI(e.writeResults,e.commitTime),s=ws(e.commitTime);return this.listener.cu(s,n)}return Me(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=DI(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>OI(this.serializer,s))};this.Wo(n)}}/**
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
 */class hT extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new H(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(T.UNKNOWN,i.toString())})}vo(e,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(T.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class dT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Qn(n),this.mu=!1):V("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class fT{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{lr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ye(a);l.vu.add(4),await ar(l),l.bu.set("Unknown"),l.vu.delete(4),await na(l)}(this))})}),this.bu=new dT(s,i)}}async function na(t){if(lr(t))for(const e of t.Ru)await e(!0)}async function ar(t){for(const e of t.Ru)await e(!1)}function lr(t){return ye(t).vu.size===0}async function Dg(t,e,n){if(!Yo(e))throw e;t.vu.add(1),await ar(t),t.bu.set("Offline"),n||(n=()=>nT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await na(t)})}function Pg(t,e){return e().catch(n=>Dg(t,n,e))}async function sa(t){const e=ye(t),n=Tn(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;pT(e);)try{const i=await sT(e.localStore,s);if(i===null){e.Eu.length===0&&n.jo();break}s=i.batchId,gT(e,i)}catch(i){await Dg(e,i)}Og(e)&&Ng(e)}function pT(t){return lr(t)&&t.Eu.length<10}function gT(t,e){t.Eu.push(e);const n=Tn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Og(t){return lr(t)&&!Tn(t).Uo()&&t.Eu.length>0}function Ng(t){Tn(t).start()}async function mT(t){Tn(t).hu()}async function yT(t){const e=Tn(t);for(const n of t.Eu)e.uu(n.mutations)}async function vT(t,e,n){const s=t.Eu.shift(),i=Oc.from(s,e,n);await Pg(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sa(t)}async function _T(t,e){e&&Tn(t).ou&&await async function(n,s){if(i=s.code,II(i)&&i!==T.ABORTED){const r=n.Eu.shift();Tn(n).Qo(),await Pg(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await sa(n)}var i}(t,e),Og(t)&&Ng(t)}async function jh(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=lr(n);n.vu.add(3),await ar(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await na(n)}async function wT(t,e){const n=ye(t);e?(n.vu.delete(2),await na(n)):e||(n.vu.add(2),await ar(n),n.bu.set("Unknown"))}function Tn(t){return t.Du||(t.Du=function(e,n,s){const i=ye(e);return i.fu(),new uT(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:mT.bind(null,t),ao:_T.bind(null,t),au:yT.bind(null,t),cu:vT.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await sa(t)):(await t.Du.stop(),t.Eu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Lc{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Lc(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xg(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Yo(t))return new H(T.UNAVAILABLE,`${e}: ${t}`);throw t}class ET{constructor(){this.queries=new zs(e=>fg(e),dg),this.onlineState="Unknown",this.ku=new Set}}function bT(t){t.ku.forEach(e=>{e.next()})}class IT{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new zs(a=>fg(a),dg),this._c=new Map,this.mc=new Set,this.gc=new lt(Q.comparator),this.yc=new Map,this.Ic=new Nc,this.Tc={},this.Ec=new Map,this.Ac=Ms.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function TT(t,e,n){const s=kT(t);try{const i=await function(r,o){const a=ye(r),l=Oe.now(),c=o.reduce((g,y)=>g.add(y.key),We());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=go(),I=We();return a.Zi.getEntries(g,c).next(C=>{y=C,y.forEach((O,N)=>{N.isValidDocument()||(I=I.add(O))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,y)).next(C=>{u=C;const O=[];for(const N of o){const M=_I(N,u.get(N.key).overlayedDocument);M!=null&&O.push(new es(N.key,M,rg(M.value.mapValue),Bt.exists(!0)))}return a.mutationQueue.addMutationBatch(g,l,O,o)}).next(C=>{d=C;const O=C.applyToLocalDocumentSet(u,I);return a.documentOverlayCache.saveOverlays(g,C.batchId,O)})}).then(()=>({batchId:d.batchId,changes:gg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.Tc[r.currentUser.toKey()];l||(l=new lt(fe)),l=l.insert(o,a),r.Tc[r.currentUser.toKey()]=l}(s,i.batchId,n),await ia(s,i.changes),await sa(s.remoteStore)}catch(i){const r=xg(i,"Failed to persist write");n.reject(r)}}function Hh(t,e,n){const s=ye(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ye(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.Mu(o)&&(l=!0)}),l&&bT(a)}(s.eventManager,e),i.length&&s.dc.nu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function AT(t,e){const n=ye(t),s=e.batch.batchId;try{const i=await tT(n.localStore,e);Lg(n,s,null),Mg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ia(n,i)}catch(i){await tg(i)}}async function ST(t,e,n){const s=ye(t);try{const i=await function(r,o){const a=ye(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Me(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Lg(s,e,n),Mg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ia(s,i)}catch(i){await tg(i)}}function Mg(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Lg(t,e,n){const s=ye(t);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Tc[s.currentUser.toKey()]=i}}async function ia(t,e,n){const s=ye(t),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,l)=>{o.push(s.Rc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Mc.Li(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,l){const c=ye(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(l,d=>A.forEach(d.Fi,g=>c.persistence.referenceDelegate.addReference(u,d.targetId,g)).next(()=>A.forEach(d.Bi,g=>c.persistence.referenceDelegate.removeReference(u,d.targetId,g)))))}catch(u){if(!Yo(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const g=c.Ji.get(d),y=g.snapshotVersion,I=g.withLastLimboFreeSnapshotVersion(y);c.Ji=c.Ji.insert(d,I)}}}(s.localStore,r))}async function CT(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await kg(n.localStore,e);n.currentUser=e,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new H(T.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ia(n,s.er)}}function kT(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ST.bind(null,e),e}class qh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ta(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return eT(this.persistence,new XI,e.initialUser,this.serializer)}createPersistence(e){return new JI(xc.zs,this.serializer)}createSharedClientState(e){return new iT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=CT.bind(null,this.syncEngine),await wT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ET}createDatastore(e){const n=ta(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new lT(i));var i;return function(r,o,a,l){return new hT(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Hh(this.syncEngine,a,0),o=Vh.D()?new Vh:new rT,new fT(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new IT(s,i,r,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ye(e);V("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await ar(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class DT{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=eg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{V("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(V("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=xg(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function xa(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await kg(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OT(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>jh(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>jh(e.remoteStore,r)),t._onlineComponents=e}function PT(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function OT(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await xa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!PT(n))throw n;co("Error using user provided cache. Falling back to memory cache: "+n),await xa(t,new qh)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await xa(t,new qh);return t._offlineComponents}async function NT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Kh(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Kh(t,new RT))),t._onlineComponents}function xT(t){return NT(t).then(e=>e.syncEngine)}/**
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
 */function Ug(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const zh=new Map;/**
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
 */function Fg(t,e,n){if(!n)throw new H(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MT(t,e,n,s){if(e===!0&&s===!0)throw new H(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Wh(t){if(!Q.isDocumentKey(t))throw new H(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gh(t){if(Q.isDocumentKey(t))throw new H(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function vo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uc(t);throw new H(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Qh{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new H(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ug((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class ra{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Sb;switch(n.type){case"firstParty":return new Db(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zh.get(e);n&&(V("ComponentProvider","Removing Datastore"),zh.delete(e),n.terminate())}(this),Promise.resolve()}}function LT(t,e,n,s={}){var i;const r=(t=vo(t,ra))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=ze.MOCK_USER;else{a=z_(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new H(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ze(c)}t._authCredentials=new Cb(new Zp(a,l))}}/**
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
 */class Vt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Fc{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Fc(this.firestore,e,this._query)}}class wn extends Fc{constructor(e,n,s){super(e,n,nI(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new Q(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function UT(t,e,...n){if(t=at(t),Fg("collection","path",e),t instanceof ra){const s=be.fromString(e,...n);return Gh(s),new wn(t,null,s)}{if(!(t instanceof Vt||t instanceof wn))throw new H(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return Gh(s),new wn(t.firestore,null,s)}}function $c(t,e,...n){if(t=at(t),arguments.length===1&&(e=eg.A()),Fg("doc","path",e),t instanceof ra){const s=be.fromString(e,...n);return Wh(s),new Vt(t,null,new Q(s))}{if(!(t instanceof Vt||t instanceof wn))throw new H(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return Wh(s),new Vt(t.firestore,t instanceof wn?t.converter:null,new Q(s))}}/**
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
 */class FT{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Rg(this,"async_queue_retry"),this.Xc=()=>{const n=Na();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Na();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Na();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new jn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Yo(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Qn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Lc.createAndSchedule(this,e,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&Z()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Bc extends ra{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new FT,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$g(this),this._firestoreClient.terminate()}}function oa(t,e){const n=typeof t=="object"?t:gf(),s=typeof t=="string"?t:e||"(default)",i=Wl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=q_("firestore");r&&LT(i,...r)}return i}function $T(t){return t._firestoreClient||$g(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $g(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new Hb(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Ug(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new DT(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bi(en.fromBase64String(e))}catch(n){throw new H(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bi(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Bg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Vg{constructor(e){this._methodName=e}}/**
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
 */class jg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
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
 */const BT=/^__.*__$/;class VT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,n,this.fieldTransforms):new or(e,this.data,n,this.fieldTransforms)}}function Hg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Vc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Vc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:s,la:!1});return i.fa(e),i}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:s,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return _o(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Hg(this.ca)&&BT.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class jT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ta(e)}ya(e,n,s,i=!1){return new Vc({ca:e,methodName:n,ga:s,path:Qe.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qg(t){const e=t._freezeSettings(),n=ta(t._databaseId);return new jT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Kg(t,e,n,s,i,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,i);Qg("Data must be an object, but it was:",o,s);const a=Wg(s,o);let l,c;if(r.merge)l=new It(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const g=HT(e,d,n);if(!o.contains(g))throw new H(T.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);zT(u,g)||u.push(g)}l=new It(u),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new VT(new Et(a),l,c)}function zg(t,e){if(Gg(t=at(t)))return Qg("Unsupported field value:",e,t),Wg(t,e);if(t instanceof Vg)return function(n,s){if(!Hg(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=zg(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=at(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return fI(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Oe.fromDate(n);return{timestampValue:El(s.serializer,i)}}if(n instanceof Oe){const i=new Oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:El(s.serializer,i)}}if(n instanceof jg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Bi)return{bytesValue:SI(s.serializer,n._byteString)};if(n instanceof Vt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sg(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Uc(n)}`)}(t,e)}function Wg(t,e){const n={};return sg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rr(t,(s,i)=>{const r=zg(i,e.ha(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Gg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof jg||t instanceof Bi||t instanceof Vt||t instanceof Vg)}function Qg(t,e,n){if(!Gg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Uc(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function HT(t,e,n){if((e=at(e))instanceof Bg)return e._internalPath;if(typeof e=="string")return KT(t,e);throw _o("Field path arguments must be of type string or ",t,!1,void 0,n)}const qT=new RegExp("[~\\*/\\[\\]]");function KT(t,e,n){if(e.search(qT)>=0)throw _o(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bg(...e.split("."))._internalPath}catch{throw _o(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _o(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new H(T.INVALID_ARGUMENT,a+t+l)}function zT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function Jg(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}function Yg(t,e,n){t=vo(t,Vt);const s=vo(t.firestore,Bc),i=Jg(t.converter,e,n);return Xg(s,[Kg(qg(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Bt.none())])}function WT(t,e){const n=vo(t.firestore,Bc),s=$c(t),i=Jg(t.converter,e);return Xg(n,[Kg(qg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Bt.exists(!1))]).then(()=>s)}function Xg(t,e){return function(n,s){const i=new jn;return n.asyncQueue.enqueueAndForget(async()=>TT(await xT(n),s,i)),i.promise}($T(t),e)}(function(t,e=!0){(function(n){Ks=n})($s),Cs(new qn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Bc(new kb(n.getProvider("auth-internal")),new Ob(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new H(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fo(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),_n(Ah,"3.13.0",t),_n(Ah,"3.13.0","esm2017")})();var GT="firebase",QT="9.23.0";/**
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
 */_n(GT,QT,"app");const JT={apiKey:"AIzaSyDSFUoWNmdlw4OyCK89i5DCX1MvSkZyo6E",authDomain:"blood-bank-vue.firebaseapp.com",databaseURL:"https://blood-bank-vue-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"blood-bank-vue",storageBucket:"blood-bank-vue.appspot.com",messagingSenderId:"1005473572226",appId:"1:1005473572226:web:2c6519c0684db8307e1b9b"},Zg=pf(JT);oa(Zg);const Es=v1(Zg);const st=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},YT={emits:["loggedIn"],data(){return{username:"",email:"",password:"",phone:"",gender:"",notification:""}},methods:{signUp(){const t=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;if(this.password.length<=7||!t.test(this.password)){this.notification="The password must be more than 7 characters long and at least one punctuation such as @#$%.";return}eE(Es,this.email,this.password).then(e=>{sE(e.user,{displayName:this.username}).then(()=>{const n={displayName:this.username,email:this.email,phone:this.phone,gender:this.gender},s=oa();Yg($c(s,"Sign Up Details",e.user.uid),n)}).then(()=>{this.$emit("loggedIn")})}).catch(e=>{switch(e.code){case"auth/email-already-in-use":this.notification="This email is already registered";break;case"auth/invalid-email":this.notification="This email address is not valid.";break;case"auth/operation-not-allowed":this.notification="Email/Password accounts are not enabled";break;case"auth/weak-password":this.notification="The password is too weak,please include at least punctuation.";break;default:console.log(e.message)}})}}},XT={class:"signupform"},ZT=h("br",null,null,-1),eA=h("br",null,null,-1),tA=h("br",null,null,-1),nA=h("br",null,null,-1),sA=h("label",{for:"male",style:{"font-size":"14px"}}," Male",-1),iA=h("label",{for:"female",style:{"font-size":"14px"}}," Female",-1),rA=h("button",{class:"signupbut",style:{"font-weight":"bold"}},"Sign Up",-1),oA={key:0,class:"notification"};function aA(t,e,n,s,i,r){return J(),X(Ce,null,[h("form",{onSubmit:e[6]||(e[6]=Do((...o)=>r.signUp&&r.signUp(...o),["prevent"])),class:"signup"},[h("div",XT,[oe(h("input",{type:"text",class:"input",placeholder:"Username",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>i.username=o),style:{"border-radius":"10px"}},null,512),[[ue,i.username]]),ZT,oe(h("input",{type:"email",class:"input",placeholder:"Email",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>i.email=o),style:{"border-radius":"10px"}},null,512),[[ue,i.email]]),eA,oe(h("input",{type:"password",class:"input",placeholder:"Password",required:"","onUpdate:modelValue":e[2]||(e[2]=o=>i.password=o),style:{"border-radius":"10px"}},null,512),[[ue,i.password]]),tA,oe(h("input",{type:"tel",class:"input",placeholder:"Phone Number",required:"","onUpdate:modelValue":e[3]||(e[3]=o=>i.phone=o),style:{"border-radius":"10px"}},null,512),[[ue,i.phone]]),nA,h("div",null,[oe(h("input",{type:"radio",id:"male",value:"Male","onUpdate:modelValue":e[4]||(e[4]=o=>i.gender=o)},null,512),[[bu,i.gender]]),sA,ve("    "),oe(h("input",{type:"radio",id:"female",value:"Female","onUpdate:modelValue":e[5]||(e[5]=o=>i.gender=o)},null,512),[[bu,i.gender]]),iA]),rA])],32),i.notification?(J(),X("div",oA,Be(i.notification),1)):Hi("",!0)],64)}const em=st(YT,[["render",aA]]),lA="/vitevue-project/assets/appicon-93e9f5f4.png";const cA={data(){return{email:"",password:"",notification:"",imagePaths:{appicon:lA}}},methods:{login(){tE(Es,this.email,this.password).then(()=>{this.$emit("loggedIn")}).catch(t=>{switch(t.code){case"auth/user-not-found":this.notification="This email is still not yet register. Please register before login";break;case"auth/wrong-password":this.notification="The email or password is incorrect. Please try again.";break;default:console.error("Login error:",t)}})}}},uA=["src"],hA=h("br",null,null,-1),dA=h("br",null,null,-1),fA=h("br",null,null,-1),pA=h("br",null,null,-1),gA=h("button",{class:"loginbut",style:{"font-weight":"bold"}},"Log in",-1),mA={key:0,class:"notification"};function yA(t,e,n,s,i,r){return J(),X(Ce,null,[h("form",{onSubmit:e[2]||(e[2]=Do((...o)=>r.login&&r.login(...o),["prevent"])),class:"login"},[h("img",{src:i.imagePaths.appicon,alt:"community logo",width:"50"},null,8,uA),hA,dA,oe(h("input",{type:"email",class:"input",placeholder:"What's your email?",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),style:{"border-radius":"10px"}},null,512),[[ue,i.email]]),fA,oe(h("input",{type:"password",class:"input",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),style:{"border-radius":"10px"}},null,512),[[ue,i.password]]),pA,gA],32),i.notification?(J(),X("div",mA,Be(i.notification),1)):Hi("",!0)],64)}const tm=st(cA,[["render",yA]]);const vA={props:{isLoggedIn:{type:Boolean,required:!0}},data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},navigate(t){this.$router.push(t),this.isMenuOpen=!1},logOut(){this.$emit("logOut")}},created(){Es.onAuthStateChanged(t=>{this.isLoggedIn=t!==null})}},_A=h("div",{class:"line"},null,-1),wA=h("div",{class:"line"},null,-1),EA=h("div",{class:"line"},null,-1),bA=[_A,wA,EA];function IA(t,e,n,s,i,r){return J(),X(Ce,null,[h("div",{class:"hamburger",onClick:e[0]||(e[0]=(...o)=>r.toggleMenu&&r.toggleMenu(...o))},bA),h("div",{class:Yn(["sidebar",{open:i.isMenuOpen}])},[h("ul",null,[h("li",{onClick:e[1]||(e[1]=o=>r.navigate("/home"))},"Home"),h("li",{onClick:e[2]||(e[2]=o=>r.navigate("/highlight"))},"Highlights"),h("li",{onClick:e[3]||(e[3]=o=>r.navigate("/education"))},"Why Blood?"),h("li",{onClick:e[4]||(e[4]=o=>r.navigate("/campaign"))},"Campaign"),h("li",{onClick:e[5]||(e[5]=o=>r.navigate("/profile"))},"Profile"),n.isLoggedIn?(J(),X("li",{key:0,onClick:e[6]||(e[6]=(...o)=>r.logOut&&r.logOut(...o))},"Sign Out")):Hi("",!0)])],2)],64)}const nm=st(vA,[["render",IA]]);const TA={key:0},AA={style:{"text-align":"center"}},SA={style:{"text-align":"center"}},CA={key:1},kA=h("div",null,[h("div",{style:{"z-index":"999",position:"fixed",height:"50px",width:"100%","background-color":"red"}},"   ")],-1),RA={id:"app1"},DA={name:"App",components:{SignupForm:em,LoginForm:tm,HamburgerMenu:nm},data(){return{isLoggedIn:!1,showLogin:!0,displayName:""}},beforeUpdate(){Es.currentUser&&(this.displayName=Es.currentUser.displayName)},methods:{logInOrSignUp(){this.isLoggedIn=!0,this.$router.push("/home")},logOut(){oE(Es).then(()=>{this.isLoggedIn=!1,L_().push("/")})}}},PA=Object.assign(DA,{setup(t){return(e,n)=>{const s=Ul("router-view");return e.isLoggedIn?(J(),X("div",CA,[kA,h("div",RA,[Se(s,{displayName:e.displayName},null,8,["displayName"]),Se(nm,{isLoggedIn:e.isLoggedIn,onLogOut:e.logOut},null,8,["isLoggedIn","onLogOut"])])])):(J(),X("div",TA,[e.showLogin?(J(),X(Ce,{key:0},[Se(tm,{onLoggedIn:e.logInOrSignUp,class:"login"},null,8,["onLoggedIn"]),h("p",AA,[ve("No account yet? "),h("span",{onClick:n[0]||(n[0]=i=>e.showLogin=!1),style:{"font-weight":"bold","text-decoration":"underline"}},"Sign Up"),ve(" instead.")])],64)):(J(),X(Ce,{key:1},[Se(em,{onLoggedIn:e.logInOrSignUp,class:"signup"},null,8,["onLoggedIn"]),h("p",SA,[ve("Already registered? "),h("span",{onClick:n[1]||(n[1]=i=>e.showLogin=!0),style:{"font-weight":"bold","text-decoration":"underline"}},"Login"),ve(" instead.")])],64))]))}}}),sm="/vitevue-project/assets/faq-icon-bd5e6b45.png";const OA={data(){return{items:[{id:1,title:"1. What should I do if I need to claim my privilege as a blood donor?",content:"Kindly proceed to the nearest blood bank for verification in order to claim your privilege.",showContent:!1},{id:2,title:"2. Why should I donate blood?",content:"Every day blood is needed to save lives. Blood may be needed for surgery, accident victims or to treat patients with leukemia, cancer, heart disease, liver disease and hemophilia. Your contribution could save a life.",showContent:!1},{id:3,title:"3. Am I eligible to donate blood?",content:"Yes, if you are over 17 years old (age verification required) and weight more than 45kg. In general, taking medication is not an obstacle to donating blood because acceptance and rejection are based on medical reports. If you are taking any medication, please inform before donating blood.",showContent:!1},{id:4,title:"4. Am I healthy enough to donate blood?",content:"You must be healthy enough to donate blood. Your health and safety is very important to us. You will be asked to fill up a blood donation questionnaire where your medical history will be asked. Blood pressure and a drop of blood will be taken for a hemoglobin test. All information provided by you is confidential.",showContent:!1},{id:5,title:"5. How long does it take to donate blood?",content:"The process of donating blood will take between 7-10 minutes, but you are advised to be at the blood collection site for approximately one hour.",showContent:!1},{id:6,title:"6. Does the needle hurt?",content:"You only feel a little pain when the needle is inserted and nothing after.",showContent:!1},{id:7,title:"7. How much blood will be taken?",content:"A total of 450ml, which is less than 1 pint (586ml). Adults usually have about 5 liters (10-12 pints) of blood in the body.",showContent:!1},{id:8,title:"8. How does it feel after donating blood?",content:"Most people feel comfortable after donating blood. You are advised to have a light meal before donating blood.",showContent:!1},{id:9,title:"9. Can I do sports after donating blood?",content:"Yes. Just avoid doing heavy activities for 5 hours after donating blood. Drink plenty of water within 24 hours.",showContent:!1},{id:10,title:"10. How long does it take to replace the donated blood?",content:"Plasma is replaced within 24 hours. You need to drink 4 glasses of water without alcohol and do not do heavy work with your hands for a period of 5 hours. Red blood takes 4-8 weeks to be replaced and you can donate again after that.",showContent:!1},{id:11,title:"11. What will be done to the donated blood?",content:"Your blood will be tested to determine blood group, viral infwhich is used in 22 blood collection centers nationwideections such as syphilis, hepatitis (B & C) and AIDS (HIV). Then, stored for patient use. Blood can also be separated into several blood components and can be used to treat more than one patient.",showContent:!1}],imagePaths:{faqicon:sm},searchQuery:""}},computed:{filteredItems(){if(this.searchQuery){const t=this.searchQuery.toLowerCase();return this.items.filter(e=>e.title.toLowerCase().includes(t))}return this.items}},methods:{toggleContent(t){this.items.forEach(e=>{e.id===t?e.showContent=!e.showContent:e.showContent=!1})},goToContact(){this.$router.push("/education/faq/contact")}}},NA={class:"faq"},xA=h("br",null,null,-1),MA=["src"],LA=h("br",null,null,-1),UA=h("b",null,"Frequently Asked Questions",-1),FA=h("p",{style:{"font-size":"small","text-align":"center"}},"Straightforward answers to common questions about blood donation.",-1),$A=h("br",null,null,-1),BA=["onClick"],VA={class:"toggleIcon"},jA={key:0,class:"content-edu"},HA=h("br",null,null,-1),qA={style:{"font-size":"small",padding:"0 35px",color:"grey"}},KA=h("i",{class:"fa fa-search",style:{"font-size":"35px"}},null,-1),zA=h("br",null,null,-1),WA=h("br",null,null,-1);function GA(t,e,n,s,i,r){return J(),X("div",NA,[xA,h("img",{src:i.imagePaths.faqicon,alt:"FAQ Icon"},null,8,MA),LA,UA,FA,$A,h("div",null,[oe(h("input",{class:"search",type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.searchQuery=o),placeholder:" Enter your question"},null,512),[[ue,i.searchQuery]]),(J(!0),X(Ce,null,wi(r.filteredItems,o=>(J(),X("div",{key:o.id,class:"faqborder"},[h("div",{class:Yn(["title",{open:o.showContent}]),onClick:a=>r.toggleContent(o.id)},[ve(Be(o.title)+" ",1),h("span",VA,Be(o.showContent?"-":"+"),1)],10,BA),o.showContent?(J(),X("div",jA,Be(o.content),1)):Hi("",!0)]))),128)),HA,h("div",null,[h("p",qA,[KA,zA,ve("Could not find your questions?"),WA,ve(" Send us your questions at "),h("span",{style:{color:"red"},onClick:e[1]||(e[1]=(...o)=>r.goToContact&&r.goToContact(...o))},"HERE"),ve(".")])])])])}const QA=st(OA,[["render",GA]]),im="/vitevue-project/assets/bt-icon-bc98eb4f.png";const JA={data(){return{tableData:[{column1:"A+",column2:"A+, AB+",column3:"A+, A-, O+, O-"},{column1:"O+",column2:"O+, A+, B+, AB+",column3:"O+, O-"},{column1:"B+",column2:"B+, AB+",column3:"B+, B-, O+, O-"},{column1:"AB+",column2:"AB+",column3:"ALL BLOOD TYPES"},{column1:"A-",column2:"A+, A-, AB+, AB-",column3:"A-, O-"},{column1:"O-",column2:"ALL BLOOD TYPES",column3:"O-"},{column1:"B-",column2:"B+, B-, AB+, AB-",column3:"B-, O-"},{column1:"AB-",column2:"AB+, AB-",column3:"AB-, A-, B-, O-"}],imagePaths:{bticon:im}}}},YA={class:"bloodtype-table"},XA=h("br",null,null,-1),ZA=["src"],eS=h("br",null,null,-1),tS=h("b",null,"Matching Blood Types",-1),nS=h("p",null,"A blood type is a classification of blood based on the presence or absence of antigens on the surface of red blood cells. Human blood is divided into one of four main blood types: A, B, AB, and O, and is further divided into Rh+ or Rh-.",-1),sS={class:"table-border"},iS=h("thead",null,[h("tr",null,[h("th",{class:"left-column"},"Type"),h("th",null,"You can give blood to"),h("th",{class:"right-column"},"You can receive blood from")])],-1),rS={class:"left-column"},oS={class:"right-column"};function aS(t,e,n,s,i,r){return J(),X("div",YA,[XA,h("img",{src:i.imagePaths.bticon,alt:"Blood Type Icon"},null,8,ZA),eS,tS,nS,h("div",sS,[h("table",null,[iS,h("tbody",null,[(J(!0),X(Ce,null,wi(i.tableData,(o,a)=>(J(),X("tr",{key:a,class:Yn({"odd-row":a%2!==0})},[h("td",rS,Be(o.column1),1),h("td",null,Be(o.column2),1),h("td",oS,Be(o.column3),1)],2))),128))])])])])}const lS=st(JA,[["render",aS]]),rm="/vitevue-project/assets/eli-icon-57593af7.png",cS="/vitevue-project/assets/eli-age-13cb64b7.png",uS="/vitevue-project/assets/eli-alcohol-0406a1fc.png",hS="/vitevue-project/assets/eli-gender-d6b663ad.png",dS="/vitevue-project/assets/eli-healthy-53da1207.png",fS="/vitevue-project/assets/eli-malaysia-f0bace01.png",pS="/vitevue-project/assets/eli-sleep-6f387f38.png",gS="/vitevue-project/assets/eli-weight-ba7e910a.png",mS="/vitevue-project/assets/eli-woman-8394ab2a.png";const yS={data(){return{imagePaths:{eliicon:rm,age:cS,alcohol:uS,gender:hS,healthy:dS,malaysia:fS,sleep:pS,weight:gS,woman:mS}}}},vS={class:"eligibility"},_S=h("br",null,null,-1),wS=["src"],ES=h("br",null,null,-1),bS=h("b",null,"Blood Donation Eligibility Requirements",-1),IS={class:"eli-table"},TS={style:{width:"50%"}},AS=["src"],SS=h("p",{class:"type"},"AGE",-1),CS=h("p",{class:"eli"},"18-60 years old",-1),kS=h("p",{class:"desp"},"*Parental consent required for 17 years old and below",-1),RS={style:{width:"50%"}},DS=["src"],PS=h("p",{class:"type"},"MEDICINE & ALCOHOL",-1),OS=h("p",{class:"eli"},"Alcohol-free",-1),NS=h("p",{class:"desp"},"Avoid consuming alcohol a day before donating",-1),xS=["src"],MS=h("p",{class:"type"},"HEALTHY",-1),LS=h("p",{class:"eli"},"Physical & mental",-1),US=h("p",{class:"desp"},"No chronic diseases",-1),FS=["src"],$S=h("p",{class:"type"},"WEIGHT",-1),BS=h("p",{class:"eli"},"> 45kg",-1),VS=["src"],jS=h("p",{class:"type"},"SUFFICIENT SLEEP",-1),HS=h("p",{class:"eli"},"> 5 hours",-1),qS=h("p",{class:"desp"},"Donors must have at least five hours of sleep before donating",-1),KS=["src"],zS=h("p",{class:"type"},"RESIDING IN MALAYSIA",-1),WS=h("p",{class:"eli"},"> 1 year",-1),GS=h("p",{class:"desp"},"for non-Malaysians",-1),QS=["src"],JS=h("p",{class:"type"},"HIGH-RISK ACTIVITIES",-1),YS=h("p",{class:"eli"},"Do not engage",-1),XS=h("p",{class:"desp"},"Do not use drugs or engage in sexual intercourse with many partners",-1),ZS=["src"],eC=h("p",{class:"type"},"WOMEN",-1),tC=h("p",{class:"eli"},"Not pregnant or during menstrual cycle",-1),nC=h("p",{class:"desp"},"including breastfeeding",-1);function sC(t,e,n,s,i,r){return J(),X("div",vS,[_S,h("img",{src:i.imagePaths.eliicon,alt:"Eligibility Icon"},null,8,wS),ES,bS,h("table",IS,[h("tr",null,[h("td",TS,[h("img",{src:i.imagePaths.age,alt:"Age Icon"},null,8,AS),SS,CS,kS]),h("td",RS,[h("img",{src:i.imagePaths.alcohol,alt:"Alcohol free Icon"},null,8,DS),PS,OS,NS])]),h("tr",null,[h("td",null,[h("img",{src:i.imagePaths.healthy,alt:"Healthy Icon"},null,8,xS),MS,LS,US]),h("td",null,[h("img",{src:i.imagePaths.weight,alt:"Weight Icon"},null,8,FS),$S,BS])]),h("tr",null,[h("td",null,[h("img",{src:i.imagePaths.sleep,alt:"Sleep Icon"},null,8,VS),jS,HS,qS]),h("td",null,[h("img",{src:i.imagePaths.malaysia,alt:"Malaysia Icon"},null,8,KS),zS,WS,GS])]),h("tr",null,[h("td",null,[h("img",{src:i.imagePaths.gender,alt:"Gender Icon"},null,8,QS),JS,YS,XS]),h("td",null,[h("img",{src:i.imagePaths.woman,alt:"Woman Icon"},null,8,ZS),eC,tC,nC])])])])}const iC=st(yS,[["render",sC]]),om="/vitevue-project/assets/perks-privilege-0e47030c.png";const rC={data(){return{tableData:[{column1:"1 time",column2:"Free outpatient treatment and medical treatment (excluding X-ray and surgical charges) and second class wards for a period of * 4 months."},{column1:"2 times (within 12 months)",column2:"Free Hepatitis B preventive injection."},{column1:"2 ~ 5 times",column2:"Free outpatient treatment and medical treatment and second class wards for a period of * 4 months."},{column1:"6 ~ 10 times",column2:"Free * year outpatient treatment and second class medical treatment for a * 6 months period."},{column1:"11 ~ 15 times",column2:"Free * 2 year outpatient treatment and second class medical treatment for a * 6 month period."},{column1:"16 ~ 20 times",column2:"Free outpatient treatment and medical treatment and second class wards for a * 2 year period."},{column1:"21 ~ 30 times",column2:"Free outpatient treatment and medical treatment and second class wards for a period of * 3 years."},{column1:"31 ~ 40 times",column2:"Free outpatient treatment and medical treatment and first class wards for a period of * 4 years."},{column1:"41 ~ 50 times",column2:"Free outpatient treatment and medical treatment and first class wards for a period of * 6 years."},{column1:'Over 50 times (for "Whole Blood") and Over 150 times (for aferesis donors)',column2:"Free outpatient treatment and first-class medical treatment and wards for 10 years and second-class wards of life after 10 years in first-class ward."}],imagePaths:{privileges:om}}}},oC={class:"perks"},aC=h("br",null,null,-1),lC=["src"],cC=h("br",null,null,-1),uC=h("b",null,"Malaysian Blood Donor Privileges",-1),hC=h("p",null,"There are many health benefits to donating blood and those who donate blood in Malaysia can benefit from many medical perks offered by the Ministry of Health:",-1),dC={class:"perks-table"},fC=h("thead",null,[h("tr",null,[h("th",{class:"left-column"},"Donation Frequency"),h("th",{class:"right-column"},"Medical Privileges")])],-1),pC={class:"left-column"},gC={class:"right-column"};function mC(t,e,n,s,i,r){return J(),X("div",oC,[aC,h("img",{src:i.imagePaths.privileges,alt:"Privilege Icon"},null,8,lC),cC,uC,hC,h("div",dC,[h("table",null,[fC,h("tbody",null,[(J(!0),X(Ce,null,wi(i.tableData,(o,a)=>(J(),X("tr",{key:a,class:Yn({"odd-row":a%2!==0})},[h("td",pC,Be(o.column1),1),h("td",gC,Be(o.column2),1)],2))),128))])])])])}const yC=st(rC,[["render",mC]]);const vC={name:"Map",setup(){const t=yd(null),e=[{lat:3.06484594571016,lng:101.61692563544386},{lat:2.970786212821712,lng:101.7137324675521},{lat:3.1856896992217107,lng:101.63501319960115},{lat:3.05032462984594,lng:101.6709347088716},{lat:3.072168678003126,lng:101.60651263901032}],n=()=>{const i={lat:3.06484594571016,lng:101.61692563544386};navigator.geolocation?navigator.geolocation.getCurrentPosition(r=>{i.lat=r.coords.latitude,i.lng=r.coords.longitude,s(i)},()=>{s(i),console.error("Error getting current location")}):(s(i),console.error("Geolocation is not supported by this browser"))},s=i=>{t.value=new google.maps.Map(document.getElementById("map"),{center:i,zoom:15}),e.forEach(r=>{new google.maps.Marker({position:r,map:t.value})})};return Od(()=>{const i=document.createElement("script");i.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWddpINsAJJplhhkUxmc_qvenPkKVaQKY&callback=initMap",i.defer=!0,i.async=!0,window.initMap=n,document.head.appendChild(i)}),{map:t}}},_C=h("div",{id:"map"},null,-1),wC=[_C];function EC(t,e,n,s,i,r){return J(),X("div",null,wC)}const bC=st(vC,[["render",EC]]);const IC={components:{MapTest:bC},data(){return{searchQuery:"",searchDate:"",campaigns:[{id:1,name:"Blood Donation Week at Taylor's University",location:"1, Jln Taylors, 47500 Subang Jaya, Selangor",startDate:"2023-08-17",endDate:"2023-08-25",description:"PUSAT DARAH NEGARA",formUrls:[{id:1,url:"https://forms.gle/znWG6ZWZZXfAoLXN6"}]},{id:2,name:"Blood Donation Week at IOI City Mall",location:"City Sepang, 2AT-3A, Level 3, IOI City Mall, Lbh IRC, Ioi Resort, 62502 Putrajaya",startDate:"2023-07-22",endDate:"2023-07-29",description:"PUSAT KOMUNITI ST JOHN AMBULANS MALAYSIA",formUrls:[{id:2,url:"https://forms.gle/6DCNrWcpjiiDTVZSA"}]},{id:3,name:"Blood Donation Hero at Desa Parkcity",location:" Desa Parkcity 52200 Kuala Lumpur, Federal Territory of Kuala Lumpur ",startDate:"2023-08-08",endDate:"2023-08-15",description:"BULAN SABIT MERAH MALAYSIA CAWANGAN SELANGOR",formUrls:[{id:3,url:"https://forms.gle/rfbBYvxGLepFSGPc7"}]},{id:4,name:"Blood Donation Hero 2.0 at Pavillion Bukit Jalil ",location:"2, Persiaran Jalil 8, Bukit Jalil, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-09-05",endDate:"2023-09-12",description:"VEDO WELLNESS SDN BHD",formUrls:[{id:4,url:"https://forms.gle/ppf4aaGm453Cx6Gy9"}]},{id:5,name:"Donate & SaveALive at Sunway Pyramid ",location:"3, Jalan PJS 11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor",startDate:"2023-09-15",endDate:"2023-09-20",description:"A-MED CLINIC SG CHUA KAJANG",formUrls:[{id:5,url:"https://forms.gle/UnBSFTCa58vzhPCE9"}]},{id:6,name:"Donation Event Fair at IOI City Mall ",location:"Management Office, Unit T2-3A-3 & Unit T2-3A-3A Level 3A, IOI City Tower Two, Lbh IRC, Ioi Resort, 62502 Putrajaya, Selangor",startDate:"2023-08-10",endDate:"2023-08-15",description:"SUITE DERMA DARAH PUSPANITA, PUTRAJAYA",formUrls:[{id:6,url:"https://forms.gle/JSnk7ABbLpbfMWnm8"}]},{id:7,name:"Donate & SaveALive 2.0 at Mid Valley ",location:"Lingkaran Syed Putra, Mid Valley City, 59200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-08-22",endDate:"2023-08-25",description:"PUSAT DARAH NEGARA DONATION SUITE MIDVALLEY",formUrls:[{id:7,url:"https://forms.gle/MrhdMDwWZrDPuVCC7"}]},{id:8,name:"Give Blood, Give Life at Sunway Pyramid ",location:"3, Jalan PJS 11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor",startDate:"2023-09-22",endDate:"2023-09-25",description:"SUNWAY TCM CENTRE",formUrls:[{id:8,url:"https://forms.gle/k95mZQmoEUxSgdWX6"}]},{id:9,name:"Blood Donation Drive at Taylor's University ",location:"1, Jln Taylors, 47500 Subang Jaya, Selangor",startDate:"2023-09-11",endDate:"2023-09-18",description:"HOSPITAL SULTAN IDRIS SHAH",formUrls:[{id:9,url:"https://forms.gle/SakCZcrduTZRuQGa8"}]},{id:10,name:"Donate & SaveALive 3.0 at Setia City Mall ",location:"7, Persiaran Setia Dagang, Setia Alam, 40170 Shah Alam, Selangor",startDate:"2023-10-11",endDate:"2023-10-18",description:"BAHAGIAN HAL EHWAL ISLAM UiTM SHAH ALAM",formUrls:[{id:10,url:"https://forms.gle/XrkqcNnzeSU3bWXT7"}]},{id:11,name:"Blood Donation Drive at Monash University ",location:"Jalan Lagoon Selatan, Bandar Sunway, 47500 Subang Jaya, Selangor",startDate:"2023-10-13",endDate:"2023-10-18",description:"KOI TROPIKA MANAGEMENT CORPORATION",formUrls:[{id:11,url:"https://forms.gle/FzcWpoaZqUy8oedx8"}]},{id:12,name:"Kempen Derma Darah at The Mines ",location:"L1-07A, Jalan Dulang, Mines Wellness City, 43300 Seri Kembangan, Selangor",startDate:"2023-10-03",endDate:"2023-10-10",description:"ALPS MEDICAL CENTRE",formUrls:[{id:12,url:"https://forms.gle/UWN12v8CkMamKEgq7"}]},{id:13,name:"Project 'Share Your Love & Care' at Pavillion KL ",location:"168, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-12-11",endDate:"2023-12-16",description:"QI SERVICES (M) SDN BHD",formUrls:[{id:13,url:"https://forms.gle/bcorf17t7nqPQSTr6"}]},{id:14,name:"Donate N Go at Pavillion KL ",location:"168, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-11-11",endDate:"2023-11-16",description:"LIONS CLUB OF KUALA LUMPUR",formUrls:[{id:14,url:"https://forms.gle/FTUozNa4UDfp7L5B6"}]},{id:15,name:"Donate N Go 2.0 at Pavillion KL ",location:"168, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-12-05",endDate:"2023-12-10",description:"LIONS CLUB OF AMPANG",formUrls:[{id:15,url:"https://forms.gle/cSZxT2ycooRb4vKX7"}]},{id:16,name:"Blood Fun Walk at IOI City Mall ",location:"Management Office, Unit T2-3A-3 & Unit T2-3A-3A Level 3A, IOI City Tower Two, Lbh IRC, Ioi Resort, 62502 Putrajaya, Selangor",startDate:"2023-12-05",endDate:"2023-12-12",description:"JUNIOR CHAMBER INTERNATIONAL PUCHONG (JCI)",formUrls:[{id:16,url:"https://forms.gle/oHXHXvsjex68p48Y9"}]},{id:17,name:"Be a Lifesaver at Village Mall Kepong ",location:"Lot GOL-01, Tesco Kepong, 3, Jalan 7A/62A, Bandar Menjalara, 52200 Kuala Lumpur",startDate:"2023-12-02",endDate:"2023-12-08",description:"CHINESE METHODIST CHURCH KEPONG",formUrls:[{id:17,url:"https://forms.gle/fFEwsmKnD51GDSbd8"}]},{id:18,name:"Uniting for Blood Donation at Pavilion Bukit Jalil ",location:"2, Persiaran Jalil 8, Bukit Jalil, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-11-02",endDate:"2023-11-08",description:"PERSATUAN KEBAJIKAN DAN SOSIAL SEJAHTERA MASYARAKAT MALAYSIA",formUrls:[{id:18,url:"https://forms.gle/YaevGxHXGB1gYHL99"}]},{id:19,name:"Be a Hero, Donate Blood at Sunway University ",location:"5, Jalan Universiti, Bandar Sunway, 47500 Petaling Jaya, Selangor",startDate:"2023-11-02",endDate:"2023-11-05",description:"UCOS LOGISTICS SDN BHD",formUrls:[{id:19,url:"https://forms.gle/h2N6j7djBRJG65Gk7"}]},{id:20,name:"Blood Donation Journey at One Utama ",location:"1, Lebuh Bandar Utama, Bandar Utama, 47800 Petaling Jaya, Selangor",startDate:"2023-11-22",endDate:"2023-11-28",description:"BANDAR SETIA ALAM SDN BHD (SP SETIA)",formUrls:[{id:20,url:"https://forms.gle/3pnyAvv99eYRbGSBA"}]}]}},computed:{filteredCampaigns(){return this.campaigns.filter(t=>{const e=t.location.toLowerCase().includes(this.searchQuery.toLowerCase()),n=!this.searchDate||this.searchDate>=t.startDate&&this.searchDate<=t.endDate;return e&&n})}}},TC={class:"camptest"},AC=h("br",null,null,-1),SC=h("h1",{class:"title"},"Discover",-1),CC=h("br",null,null,-1),kC=h("label",null,[h("i",{class:"fa fa-filter"}),ve("  ")],-1),RC={key:0},DC={class:"camporganizer"},PC=h("span",{class:"data"},"Address",-1),OC=h("br",null,null,-1),NC=h("span",{class:"data"},"Date",-1),xC=h("br",null,null,-1),MC={style:{width:"100%","text-align":"right","margin-bottom":"3px"}},LC=["href"],UC={key:1,style:{color:"grey","text-align":"center","font-size":"small"}},FC=h("i",{class:"fa fa-search",style:{"font-size":"35px"}},null,-1),$C=h("br",null,null,-1);function BC(t,e,n,s,i,r){const o=Ul("MapTest");return J(),X("div",TC,[AC,SC,Se(o),CC,oe(h("input",{class:"search",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>i.searchQuery=a),placeholder:" Search by location"},null,512),[[ue,i.searchQuery]]),kC,oe(h("input",{class:"date",type:"date","onUpdate:modelValue":e[1]||(e[1]=a=>i.searchDate=a)},null,512),[[ue,i.searchDate]]),r.filteredCampaigns.length>0?(J(),X("ul",RC,[(J(!0),X(Ce,null,wi(r.filteredCampaigns,a=>(J(),X("li",{key:a.id},[h("h3",null,Be(a.name),1),h("p",DC,"by "+Be(a.description),1),h("p",null,[PC,OC,ve(" "+Be(a.location),1)]),h("p",null,[NC,xC,ve(" "+Be(a.startDate)+" to "+Be(a.endDate),1)]),h("div",MC,[(J(!0),X(Ce,null,wi(a.formUrls,l=>(J(),X("a",{key:l.id,class:"register",href:l.url,target:"_blank"},"Register",8,LC))),128))])]))),128))])):(J(),X("div",UC,[FC,$C,ve(" No results found. ")]))])}const VC=st(IC,[["render",BC]]),jC="/vitevue-project/assets/edu-bloodtype-f9f6fcd8.jpg",HC="/vitevue-project/assets/edu-eligibility-56e0be29.jpg",qC="/vitevue-project/assets/edu-perks-72313c18.jpg";const KC={methods:{goToBloodType(){this.$router.push("/education/bloodtype")},goToEligibility(){this.$router.push("/education/eligibility")},goToPerks(){this.$router.push("/education/perks")},goToFAQ(){this.$router.push("/education/faq")}},data(){return{imagePaths:{bloodType:jC,eligibility:HC,perks:qC}}}},zC={class:"education"},WC=h("h2",null,"WHY BLOOD?",-1),GC={class:"edu-div"},QC=["src"],JC={class:"edu-div-content"},YC=h("p",null,[h("b",null,"WHAT BLOOD TYPES MATCH?"),h("br"),ve(" There are four main blood types: A, B, AB and O. Combinations of proteins and sugars, called antigens, on the surface of red blood cells are what makes the blood type either compatible or incompatible with other blood types.")],-1),XC=h("i",{class:"fas fa-arrow-right"},null,-1),ZC=[XC],ek={class:"edu-div"},tk=["src"],nk={class:"edu-div-content"},sk=h("p",null,[h("b",null,"AM I ELIGIBLE TO DONATE?"),h("br"),ve(" Curious about your eligibility to donate blood? Find out if you meet the criteria to make a life-saving contribution.")],-1),ik=h("i",{class:"fas fa-arrow-right"},null,-1),rk=[ik],ok={class:"edu-div"},ak=["src"],lk={class:"edu-div-content"},ck=h("p",null,[h("b",null,"MALAYSIAN BLOOD DONOR PRIVILEGES"),h("br"),ve(" Donating blood just once can save up to 3 lives but did you know regular blood donors get special medical privileges in Malaysia? Click 'Learn More' to explore the health benefits and medical privileges given to blood donors in Malaysia.")],-1),uk=h("i",{class:"fas fa-arrow-right"},null,-1),hk=[uk],dk={class:"edu-div"},fk={class:"edu-div-content"},pk=h("p",null,[h("b",null,"FREQUENTLY ASKED QUESTIONS"),h("br"),ve(" Answers to our most frequently asked questions are just one click away.")],-1);function gk(t,e,n,s,i,r){return J(),X("div",zC,[WC,h("div",GC,[h("img",{src:i.imagePaths.bloodType,alt:"Blood Type Image"},null,8,QC),h("div",JC,[YC,h("div",null,[h("button",{onClick:e[0]||(e[0]=(...o)=>r.goToBloodType&&r.goToBloodType(...o))},ZC)])])]),h("div",ek,[h("img",{src:i.imagePaths.eligibility,alt:"Blood Donation Image"},null,8,tk),h("div",nk,[sk,h("div",null,[h("button",{onClick:e[1]||(e[1]=(...o)=>r.goToEligibility&&r.goToEligibility(...o))},rk)])])]),h("div",ok,[h("img",{src:i.imagePaths.perks,alt:"Body Checkup Image"},null,8,ak),h("div",lk,[ck,h("div",null,[h("button",{onClick:e[2]||(e[2]=(...o)=>r.goToPerks&&r.goToPerks(...o))},hk)])])]),h("div",dk,[h("div",fk,[pk,h("div",null,[h("button",{onClick:e[3]||(e[3]=(...o)=>r.goToFAQ&&r.goToFAQ(...o))},"Go to FAQ")])])])])}const mk=st(KC,[["render",gk]]);const yk={},vk=Bl('<div class="community"><div class="transition-text1"><h1 style="font-size:15px;font-weight:bold;background-color:#990000;color:white;border-radius:10px;padding:10px;">Everyone have power, to save a life.</h1></div><div class="transition-text2"><h2 style="font-size:15px;font-weight:bold;">Engage in an interactive experience that empowers you to aid yourself and others every day.</h2></div></div><div class="announce"><div class="transition-text3"><h1 style="font-weight:bold;font-size:15px;"> Over 1 Million of funding for our local bank!</h1></div><div class="transition-text4"><h2 style="font-weight:bold;font-size:15px;">Dear community members,</h2><p>We are thrilled to announce a monumental achievement that would not have been possible without your incredible support. Thanks to your unwavering generosity, we have surpassed a significant milestone – over $1 million in funding for our beloved local blood bank!</p><br><p>Your contributions have directly impacted lives in our community and beyond. With these funds, our blood bank has been able to provide a constant supply of life-saving blood products to those in need, ensuring critical treatments, emergency transfusions, and surgeries can take place.</p><br><p>We want to thank you for your incredible support towards our local blood bank. Your generosity has been instrumental in helping us meet the demand for blood packs in our community.</p><br><p>However, we still need more blood packs to ensure we can adequately serve those in need. We require 20,000 more blood packs to fulfill the ongoing demand.</p><br><p>We kindly request you to consider donating blood or encouraging others to do so. Together, we can ensure our local blood bank remains well-equipped to support our community.</p><br><p>Let&#39;s come together and make a positive impact by reaching our goal</p><br><p>Community Name</p><p>Publised Date: <span style="font-style:italic;">26/06/2022</span></p></div></div>',2),_k=[vk];function wk(t,e){return J(),X("div",null,_k)}const Ek=st(yk,[["render",wk]]);const bk={components:{Community:Ek},props:{displayName:{type:String,required:!0}},methods:{goToOrganization(){this.$router.push("/home/organization")},goToDiscover(){this.$router.push("/highlight")},goToCampaign(){this.$router.push("/campaign")},goToBloodType(){this.$router.push("/education/bloodtype")},goToEligibility(){this.$router.push("/education/eligibility")},goToPerks(){this.$router.push("/education/perks")},goToFAQ(){this.$router.push("/education/faq")}},data(){return{imagePaths:{bticon:im,eliicon:rm,privileges:om,faqicon:sm}}}},Ik={class:"homecomm"},Tk={class:"welcome"},Ak=h("h1",{class:""},"Welcome to the Blood Donation Community",-1),Sk=h("p",{class:"description"},[ve(" This app is dedicated to promoting blood donation"),h("br"),ve("and raising awareness about its importance in saving lives. ")],-1),Ck=h("p",{class:"join"},[ve(" Together, we can make a difference and help those in need."),h("br"),ve("Join us in the noble cause of donating blood! ")],-1),kk={style:{padding:"0","padding-right":"5px",width:"50%"}},Rk=h("p",{style:{"font-size":"medium","font-weight":"bold"}},"View Campaign",-1),Dk=h("p",{style:{"font-size":"smaller"}},"View blood donation campaigns held near you.",-1),Pk=h("div",{class:"button"},[h("button",null,"View")],-1),Ok=[Rk,Dk,Pk],Nk={style:{padding:"0","padding-left":"5px",width:"50%"}},xk=h("p",{style:{"font-size":"medium","font-weight":"bold"}},"Create Campaign",-1),Mk=h("p",{style:{"font-size":"smaller"}},"We welcome collaboration with any organization to do blood donation campaign.",-1),Lk=h("div",{class:"button"},[h("button",null,"Create")],-1),Uk=[xk,Mk,Lk],Fk=h("br",null,null,-1),$k={class:"homenews"},Bk={class:"homenewstitle"},Vk=h("i",{class:"fas fa-angle-double-right"},null,-1),jk=Bl('<div class="section"><a href="https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank"><img src="https://media.freemalaysiatoday.com/wp-content/uploads/2021/06/03-BLOOD-DONATION-.jpg" width="100%" height="100%"></a><h2>A guide to donating blood for the first time</h2><p><a href="https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank"> PETALING JAYA: Drawing blood may seem daunting to first-time donors, but rest assured it is a simple, quick and safe process that is capable of saving lives... <p><span class="click">(Click to read more)</span></p></a></p></div>',1),Hk={class:"homeedu"},qk=h("h2",{style:{"text-align":"left","font-size":"medium"}},"WHY BLOOD?",-1),Kk={width:"100%"},zk={width:"35px",style:{"text-align":"left"}},Wk=["src"],Gk=h("td",{style:{"text-align":"left"}},[h("p",null,"Matching Blood Types")],-1),Qk=h("td",{style:{"text-align":"right"}},[h("button",null,[h("i",{class:"fas fa-arrow-right",style:{"font-size":"large"}})])],-1),Jk={width:"100%"},Yk={width:"35px",style:{"text-align":"left"}},Xk=["src"],Zk=h("td",{style:{"text-align":"left"}},[h("p",null,"Blood Donor Eligibility Criteria")],-1),eR=h("td",{style:{"text-align":"right"}},[h("button",null,[h("i",{class:"fas fa-arrow-right",style:{"font-size":"large"}})])],-1),tR={width:"100%"},nR={width:"35px",style:{"text-align":"left"}},sR=["src"],iR=h("td",{style:{"text-align":"left"}},[h("p",null,"Blood Donor Privileges")],-1),rR=h("td",{style:{"text-align":"right"}},[h("button",null,[h("i",{class:"fas fa-arrow-right",style:{"font-size":"large"}})])],-1),oR={width:"100%"},aR={width:"35px",style:{"text-align":"left"}},lR=["src"],cR=h("td",{style:{"text-align":"left"}},[h("p",null,"Frequently Asked Questions")],-1),uR=h("td",{style:{"text-align":"right"}},[h("button",null,[h("i",{class:"fas fa-arrow-right",style:{"font-size":"large"}})])],-1);function hR(t,e,n,s,i,r){const o=Ul("Community");return J(),X("div",Ik,[h("h2",Tk,"Welcome, "+Be(n.displayName),1),Ak,Sk,Ck,Se(o),h("table",null,[h("tr",null,[h("td",kk,[h("div",{class:"viewcamp",onClick:e[0]||(e[0]=(...a)=>r.goToCampaign&&r.goToCampaign(...a))},Ok)]),h("td",Nk,[h("div",{class:"createcamp",onClick:e[1]||(e[1]=(...a)=>r.goToOrganization&&r.goToOrganization(...a))},Uk)])])]),Fk,h("div",$k,[h("h2",Bk,[ve("HIGHLIGHTS "),h("span",{style:{float:"right"},onClick:e[2]||(e[2]=(...a)=>r.goToDiscover&&r.goToDiscover(...a))},[ve("See More "),Vk])]),jk]),h("div",Hk,[qk,h("div",{class:"content",onClick:e[3]||(e[3]=(...a)=>r.goToBloodType&&r.goToBloodType(...a))},[h("table",Kk,[h("tr",null,[h("td",zk,[h("img",{src:i.imagePaths.bticon,alt:"Blood Type Icon"},null,8,Wk)]),Gk,Qk])])]),h("div",{class:"content",onClick:e[4]||(e[4]=(...a)=>r.goToEligibility&&r.goToEligibility(...a))},[h("table",Jk,[h("tr",null,[h("td",Yk,[h("img",{src:i.imagePaths.eliicon,alt:"Eligibility Icon"},null,8,Xk)]),Zk,eR])])]),h("div",{class:"content",onClick:e[5]||(e[5]=(...a)=>r.goToPerks&&r.goToPerks(...a))},[h("table",tR,[h("tr",null,[h("td",nR,[h("img",{src:i.imagePaths.privileges,alt:"Privilege Icon"},null,8,sR)]),iR,rR])])]),h("div",{class:"content",onClick:e[6]||(e[6]=(...a)=>r.goToFAQ&&r.goToFAQ(...a))},[h("table",oR,[h("tr",null,[h("td",aR,[h("img",{src:i.imagePaths.faqicon,alt:"FAQ Icon"},null,8,lR)]),cR,uR])])])])])}const dR=st(bk,[["render",hR]]);const fR={data(){return{name:"",phone:"",email:"",street:"",city:"",state:"",postalcode:"",message:"",campname:"",info:"",startDate:"",endDate:"",time1:"",time2:"",venue:""}},methods:{async submitForm(){const t={Name:this.name,Phone:this.phone,Email:this.email,Street:this.street,City:this.city,State:this.state,PostalCode:this.postalcode,Message:this.message,CampName:this.campname,Information:this.info,StartDate:this.startDate,EndDate:this.endDate,StartTime:this.time1,EndTime:this.time2,Venue:this.venue};try{const e=oa();await WT(UT(e,"Apply2"),t),this.name="",this.phone="",this.email="",this.street="",this.city="",this.state="",this.postalcode="",this.message="",this.campname="",this.info="",this.startDate="",this.endDate="",this.time1="",this.time2="",this.venue=""}catch(e){console.error("Error writing document: ",e)}}}},pR={class:"organization"},gR=h("h2",null,"Create a Campaign",-1),mR=h("p",{class:"description"}," Fill in the form below to create a new blood donation campaign. Provide detailed information about your campaign and its objectives. This will help users understand the purpose and goals of your campaign. Make sure to fill in all the required fields. ",-1),yR={class:"formdiv"},vR=h("label",{for:"name"},"Hospital Name:",-1),_R=h("label",{for:"phone"},"Phone:",-1),wR=h("label",{for:"email"},"Email:",-1),ER=h("small",null,"example@example.com",-1),bR=h("p",{style:{"font-weight":"bold",margin:"0"}},"Location",-1),IR=h("label",{for:"street"},"Street:",-1),TR=h("label",{for:"city"},"City:",-1),AR=h("label",{for:"state"},"State:",-1),SR=h("label",{for:"postalCode"},"Postal Code:",-1),CR=h("label",{for:"message"},"Message:",-1),kR=h("p",{style:{"font-weight":"bold",margin:"0"}},"Campaign",-1),RR=h("label",{for:"campname"},"Camp Name:",-1),DR=h("label",{for:"info"},"Camp Information:",-1),PR=h("label",{for:"startDate"},"Start Date of the Campaign:",-1),OR=h("label",{for:"endDate"},"End Date of the Campaign:",-1),NR=h("label",{for:"time1"},"Time Start:",-1),xR=h("label",{for:"time2"},"Time End:",-1),MR=h("label",{for:"venue"},"Campaign Venue:",-1),LR=h("div",{class:"button"},[h("button",{type:"submit",id:"submit"},"Submit")],-1);function UR(t,e,n,s,i,r){return J(),X("div",pR,[gR,mR,h("div",yR,[h("form",{onSubmit:e[15]||(e[15]=Do((...o)=>r.submitForm&&r.submitForm(...o),["prevent"])),class:"form"},[vR,oe(h("input",{type:"text",placeholder:"Hospital Name",id:"name","onUpdate:modelValue":e[0]||(e[0]=o=>i.name=o),required:""},null,512),[[ue,i.name]]),_R,oe(h("input",{type:"tel",placeholder:"Phone",id:"phone","onUpdate:modelValue":e[1]||(e[1]=o=>i.phone=o),required:""},null,512),[[ue,i.phone]]),wR,oe(h("input",{type:"email",placeholder:"Email",id:"email","onUpdate:modelValue":e[2]||(e[2]=o=>i.email=o),required:""},null,512),[[ue,i.email]]),ER,bR,IR,oe(h("input",{type:"text",placeholder:"Street",id:"street","onUpdate:modelValue":e[3]||(e[3]=o=>i.street=o),required:""},null,512),[[ue,i.street]]),TR,oe(h("input",{type:"text",placeholder:"City",id:"city","onUpdate:modelValue":e[4]||(e[4]=o=>i.city=o),required:""},null,512),[[ue,i.city]]),AR,oe(h("input",{type:"text",placeholder:"State",id:"state","onUpdate:modelValue":e[5]||(e[5]=o=>i.state=o),required:""},null,512),[[ue,i.state]]),SR,oe(h("input",{type:"text",placeholder:"Postal Code",id:"postalCode","onUpdate:modelValue":e[6]||(e[6]=o=>i.postalcode=o),required:""},null,512),[[ue,i.postalcode]]),CR,oe(h("textarea",{id:"message",placeholder:"Leave your message here..","onUpdate:modelValue":e[7]||(e[7]=o=>i.message=o)},null,512),[[ue,i.message]]),kR,RR,oe(h("input",{type:"text",placeholder:"Camp Name",id:"campname","onUpdate:modelValue":e[8]||(e[8]=o=>i.campname=o),required:""},null,512),[[ue,i.campname]]),DR,oe(h("input",{type:"text",placeholder:"Camp Information",id:"info","onUpdate:modelValue":e[9]||(e[9]=o=>i.info=o),required:""},null,512),[[ue,i.info]]),PR,oe(h("input",{type:"date",id:"startDate","onUpdate:modelValue":e[10]||(e[10]=o=>i.startDate=o),required:""},null,512),[[ue,i.startDate]]),OR,oe(h("input",{type:"date",id:"endDate","onUpdate:modelValue":e[11]||(e[11]=o=>i.endDate=o),required:""},null,512),[[ue,i.endDate]]),NR,oe(h("input",{type:"time",id:"time1","onUpdate:modelValue":e[12]||(e[12]=o=>i.time1=o),required:""},null,512),[[ue,i.time1]]),xR,oe(h("input",{type:"time",id:"time2","onUpdate:modelValue":e[13]||(e[13]=o=>i.time2=o),required:""},null,512),[[ue,i.time2]]),MR,oe(h("input",{type:"text",placeholder:"Full address",id:"venue","onUpdate:modelValue":e[14]||(e[14]=o=>i.venue=o),required:""},null,512),[[ue,i.venue]]),LR],32)])])}const FR=st(fR,[["render",UR]]);const $R={name:"Discover"},BR={class:"discover"},VR=Bl('<h1>DISCOVER NEWS HERE</h1><div class="section"><a href="https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank"><img src="https://media.freemalaysiatoday.com/wp-content/uploads/2021/06/03-BLOOD-DONATION-.jpg" width="100%" height="100%"></a><h2>A guide to donating blood for the first time</h2><p><a href="https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank"> PETALING JAYA: Drawing blood may seem daunting to first-time donors, but rest assured it is a simple, quick and safe process that is capable of saving lives. While blood banks have continued to operate as an essential service in the past two years, National Blood Centre director Dr Noryati Abu Amin said there were additional safety measures in place to minimise the risk of Covid-19. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.thestar.com.my/news/nation/2023/06/18/gift-of-life-more-than-700000-bags-of-blood-donated-in-2022-says-health-dg" target="_blank"><img src="https://apicms.thestar.com.my/uploads/images/2023/06/18/2131729.jpg" width="100%" height="100%"></a><h2>Gift of life: More than 700,000 bags of blood donated in 2022, says Health DG</h2><p><a href="https://www.thestar.com.my/news/nation/2023/06/18/gift-of-life-more-than-700000-bags-of-blood-donated-in-2022-says-health-dg" target="_blank"> JOHOR BARU: More than 700,000 bags of blood were donated to blood banks nationwide last year, says Datuk Dr Muhammad Radzi Abu Hassan. The Health director-general said this was an increase of about 13.7% from previous years. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.nst.com.my/news/nation/2022/12/859167/retired-teacher-70-makes-final-blood-donation-356th-time" target="_blank"><img src="https://assets.nst.com.my/images/articles/315890948_510411854460227_6907366706555040351_n_1670548888.jpg" width="100%" height="100%"></a><h2>Retired teacher, 70, makes final blood donation for 356th time</h2><p><a href="https://www.nst.com.my/news/nation/2022/12/859167/retired-teacher-70-makes-final-blood-donation-356th-time" target="_blank"> KUALA LUMPUR: Retired teacher Lum Kien Seng went to donate his blood for the the 356th time last week, and the final one for he can no longer do so due to his age. Lum, now aged 70, said he felt proud to be able to help save many lives through his effort for the past 34 years. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.nst.com.my/news/nation/2023/06/921576/health-ministry-sets-blood-donation-rate-35-40-donors-1000-population" target="_blank"><img src="https://assets.nst.com.my/images/articles/zonblood2_1687096260.jpg" width="100%" height="100%"></a><h2>Health Ministry sets blood donation rate of 35 to 40 donors per 1,000 population by 2030</h2><p><a href="https://www.nst.com.my/news/nation/2023/06/921576/health-ministry-sets-blood-donation-rate-35-40-donors-1000-population" target="_blank"> JOHOR BARU: The Health Ministry through its Transfusion Medicine Services is targeting a national blood donation rate of 35 to 40 donors per 1,000 population by the year 2030. Health director-general Datuk Dr Muhammad Radzi Abu Hassan said the target was to meet patient care needs in line with the annual population growth rate in Malaysia. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.thestar.com.my/metro/metro-news/2023/04/06/on-mission-to-boost-blood-donor-numbers" target="_blank"><img src="https://apicms.thestar.com.my/uploads/images/2023/04/06/2011293.jpg" width="100%" height="100%"></a><h2>On mission to boost blood donor numbers</h2><p><a href="https://www.thestar.com.my/metro/metro-news/2023/04/06/on-mission-to-boost-blood-donor-numbers" target="_blank"> Petaling Jaya City Council (MBPJ) and the National Blood Centre (PDN) launched their first blood donation campaign with the theme “Donating blood is a noble practice” at the city council’s headquarters. <p><span class="click">(Click to read more)</span></p></a></p></div>',6),jR=[VR];function HR(t,e,n,s,i,r){return J(),X("div",BR,jR)}const qR=st($R,[["render",HR]]);const KR={data(){return{name2:"",phone2:"",email2:"",message2:"",successMessage:""}},methods:{submitForm(){const t={Name2:this.name2,Phone2:this.phone2,Email2:this.email2,Message2:this.message2},e=oa();Yg($c(e,"contact",t.Name2),t).then(()=>{this.name2="",this.phone2="",this.email2="",this.message2="",this.successMessage="Your message sent successfully! We will reply to you within 2 to 3 days."}).catch(n=>{console.error("Error writing document: ",n)})}}},zR={class:"contact"},WR=h("h2",null,"Contact Us",-1),GR=h("p",{class:"description"},"We'd love to get in touch and learn more about you. So, send us a message and we'll reply as fast as we can.",-1),QR={class:"formdiv"},JR=h("label",{for:"name2"},"Name:",-1),YR=h("label",{for:"phone2"},"Phone:",-1),XR=h("label",{for:"email2"},"Email:",-1),ZR=h("small",null,"example@example.com",-1),e2=h("label",{for:"message2"},"Question:",-1),t2=h("div",{class:"button"},[h("button",{type:"submit",id:"submit"},"Submit")],-1),n2={key:0,class:"success-message"};function s2(t,e,n,s,i,r){return J(),X("div",zR,[WR,GR,h("div",QR,[h("form",{onSubmit:e[4]||(e[4]=Do((...o)=>r.submitForm&&r.submitForm(...o),["prevent"])),class:"form"},[JR,oe(h("input",{type:"text",placeholder:"Name",id:"name2","onUpdate:modelValue":e[0]||(e[0]=o=>i.name2=o),required:""},null,512),[[ue,i.name2]]),YR,oe(h("input",{type:"tel",placeholder:"Phone",id:"phone2","onUpdate:modelValue":e[1]||(e[1]=o=>i.phone2=o),required:""},null,512),[[ue,i.phone2]]),XR,oe(h("input",{type:"email",placeholder:"Email",id:"email2","onUpdate:modelValue":e[2]||(e[2]=o=>i.email2=o),required:""},null,512),[[ue,i.email2]]),ZR,e2,oe(h("textarea",{id:"message2",placeholder:"Write your qeustions here..","onUpdate:modelValue":e[3]||(e[3]=o=>i.message2=o)},null,512),[[ue,i.message2]]),t2,i.successMessage?(J(),X("p",n2,Be(i.successMessage),1)):Hi("",!0)],32)])])}const i2=st(KR,[["render",s2]]),r2=x_({history:Jv(),scrollBehavior(t,e,n){return n||{top:0}},routes:[{path:"/home",component:dR},{path:"/home/organization",component:FR},{path:"/highlight",component:qR},{path:"/education",component:mk},{path:"/education/bloodtype",component:lS},{path:"/education/faq",component:QA},{path:"/education/eligibility",component:iC},{path:"/education/perks",component:yC},{path:"/campaign",component:VC},{path:"/education/faq/contact",component:i2}]}),am=Pv(PA);am.use(r2);am.mount("#app");
