(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Al(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const pe={},ds=[],At=()=>{},om=()=>!1,am=/^on[^a-z]/,Eo=t=>am.test(t),Sl=t=>t.startsWith("onUpdate:"),Ne=Object.assign,Cl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lm=Object.prototype.hasOwnProperty,Z=(t,e)=>lm.call(t,e),j=Array.isArray,fs=t=>Hi(t)==="[object Map]",Yh=t=>Hi(t)==="[object Set]",zc=t=>Hi(t)==="[object Date]",W=t=>typeof t=="function",Ce=t=>typeof t=="string",yi=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",Xh=t=>de(t)&&W(t.then)&&W(t.catch),Zh=Object.prototype.toString,Hi=t=>Zh.call(t),cm=t=>Hi(t).slice(8,-1),ed=t=>Hi(t)==="[object Object]",kl=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cr=Al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},um=/-(\w)/g,Ht=bo(t=>t.replace(um,(e,n)=>n?n.toUpperCase():"")),hm=/\B([A-Z])/g,Us=bo(t=>t.replace(hm,"-$1").toLowerCase()),Io=bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ca=bo(t=>t?`on${Io(t)}`:""),vi=(t,e)=>!Object.is(t,e),kr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Br=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ua=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wc;const Fa=()=>Wc||(Wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rl(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ce(s)?gm(s):Rl(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ce(t))return t;if(de(t))return t}}const dm=/;(?![^(]*\))/g,fm=/:([^]+)/,pm=/\/\*[^]*?\*\//g;function gm(t){const e={};return t.replace(pm,"").split(dm).forEach(n=>{if(n){const s=n.split(fm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Xn(t){let e="";if(Ce(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=Xn(t[n]);s&&(e+=s+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ym=Al(mm);function td(t){return!!t||t===""}function vm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Vr(t[s],e[s]);return n}function Vr(t,e){if(t===e)return!0;let n=zc(t),s=zc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=yi(t),s=yi(e),n||s)return t===e;if(n=j(t),s=j(e),n||s)return n&&s?vm(t,e):!1;if(n=de(t),s=de(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Vr(t[o],e[o]))return!1}}return String(t)===String(e)}const Ge=t=>Ce(t)?t:t==null?"":j(t)||de(t)&&(t.toString===Zh||!W(t.toString))?JSON.stringify(t,nd,2):String(t),nd=(t,e)=>e&&e.__v_isRef?nd(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Yh(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!j(e)&&!ed(e)?String(e):e;let _t;class _m{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function wm(t,e=_t){e&&e.active&&e.effects.push(t)}function Em(){return _t}const Pl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},sd=t=>(t.w&bn)>0,id=t=>(t.n&bn)>0,bm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bn},Im=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];sd(i)&&!id(i)?i.delete(t):e[n++]=i,i.w&=~bn,i.n&=~bn}e.length=n}},$a=new WeakMap;let ti=0,bn=1;const Ba=30;let Et;const $n=Symbol(""),Va=Symbol("");class Ol{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wm(this,s)}run(){if(!this.active)return this.fn();let e=Et,n=mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Et,Et=this,mn=!0,bn=1<<++ti,ti<=Ba?bm(this):Gc(this),this.fn()}finally{ti<=Ba&&Im(this),bn=1<<--ti,Et=this.parent,mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Et===this?this.deferStop=!0:this.active&&(Gc(this),this.onStop&&this.onStop(),this.active=!1)}}function Gc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mn=!0;const rd=[];function Fs(){rd.push(mn),mn=!1}function $s(){const t=rd.pop();mn=t===void 0?!0:t}function ot(t,e,n){if(mn&&Et){let s=$a.get(t);s||$a.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Pl()),od(i)}}function od(t,e){let n=!1;ti<=Ba?id(t)||(t.n|=bn,n=!sd(t)):n=!t.has(Et),n&&(t.add(Et),Et.deps.push(t))}function Xt(t,e,n,s,i,r){const o=$a.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?kl(n)&&a.push(o.get("length")):(a.push(o.get($n)),fs(t)&&a.push(o.get(Va)));break;case"delete":j(t)||(a.push(o.get($n)),fs(t)&&a.push(o.get(Va)));break;case"set":fs(t)&&a.push(o.get($n));break}if(a.length===1)a[0]&&ja(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ja(Pl(l))}}function ja(t,e){const n=j(t)?t:[...t];for(const s of n)s.computed&&Qc(s);for(const s of n)s.computed||Qc(s)}function Qc(t,e){(t!==Et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Tm=Al("__proto__,__v_isRef,__isVue"),ad=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yi)),Am=Dl(),Sm=Dl(!1,!0),Cm=Dl(!0),Jc=km();function km(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let r=0,o=this.length;r<o;r++)ot(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ne)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fs();const s=ne(this)[e].apply(this,n);return $s(),s}}),t}function Rm(t){const e=ne(this);return ot(e,"has",t),e.hasOwnProperty(t)}function Dl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Km:dd:e?hd:ud).get(s))return s;const o=j(s);if(!t){if(o&&Z(Jc,i))return Reflect.get(Jc,i,r);if(i==="hasOwnProperty")return Rm}const a=Reflect.get(s,i,r);return(yi(i)?ad.has(i):Tm(i))||(t||ot(s,"get",i),e)?a:Ye(a)?o&&kl(i)?a:a.value:de(a)?t?fd(a):qi(a):a}}const Pm=ld(),Om=ld(!0);function ld(t=!1){return function(n,s,i,r){let o=n[s];if(Is(o)&&Ye(o)&&!Ye(i))return!1;if(!t&&(!jr(i)&&!Is(i)&&(o=ne(o),i=ne(i)),!j(n)&&Ye(o)&&!Ye(i)))return o.value=i,!0;const a=j(n)&&kl(s)?Number(s)<n.length:Z(n,s),l=Reflect.set(n,s,i,r);return n===ne(r)&&(a?vi(i,o)&&Xt(n,"set",s,i):Xt(n,"add",s,i)),l}}function Dm(t,e){const n=Z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Xt(t,"delete",e,void 0),s}function Nm(t,e){const n=Reflect.has(t,e);return(!yi(e)||!ad.has(e))&&ot(t,"has",e),n}function Mm(t){return ot(t,"iterate",j(t)?"length":$n),Reflect.ownKeys(t)}const cd={get:Am,set:Pm,deleteProperty:Dm,has:Nm,ownKeys:Mm},xm={get:Cm,set(t,e){return!0},deleteProperty(t,e){return!0}},Lm=Ne({},cd,{get:Sm,set:Om}),Nl=t=>t,To=t=>Reflect.getPrototypeOf(t);function hr(t,e,n=!1,s=!1){t=t.__v_raw;const i=ne(t),r=ne(e);n||(e!==r&&ot(i,"get",e),ot(i,"get",r));const{has:o}=To(i),a=s?Nl:n?Ll:_i;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function dr(t,e=!1){const n=this.__v_raw,s=ne(n),i=ne(t);return e||(t!==i&&ot(s,"has",t),ot(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function fr(t,e=!1){return t=t.__v_raw,!e&&ot(ne(t),"iterate",$n),Reflect.get(t,"size",t)}function Yc(t){t=ne(t);const e=ne(this);return To(e).has.call(e,t)||(e.add(t),Xt(e,"add",t,t)),this}function Xc(t,e){e=ne(e);const n=ne(this),{has:s,get:i}=To(n);let r=s.call(n,t);r||(t=ne(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?vi(e,o)&&Xt(n,"set",t,e):Xt(n,"add",t,e),this}function Zc(t){const e=ne(this),{has:n,get:s}=To(e);let i=n.call(e,t);i||(t=ne(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Xt(e,"delete",t,void 0),r}function eu(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&Xt(t,"clear",void 0,void 0),n}function pr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ne(o),l=e?Nl:t?Ll:_i;return!t&&ot(a,"iterate",$n),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function gr(t,e,n){return function(...s){const i=this.__v_raw,r=ne(i),o=fs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Nl:e?Ll:_i;return!e&&ot(r,"iterate",l?Va:$n),{next(){const{value:h,done:g}=c.next();return g?{value:h,done:g}:{value:a?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function an(t){return function(...e){return t==="delete"?!1:this}}function Um(){const t={get(r){return hr(this,r)},get size(){return fr(this)},has:dr,add:Yc,set:Xc,delete:Zc,clear:eu,forEach:pr(!1,!1)},e={get(r){return hr(this,r,!1,!0)},get size(){return fr(this)},has:dr,add:Yc,set:Xc,delete:Zc,clear:eu,forEach:pr(!1,!0)},n={get(r){return hr(this,r,!0)},get size(){return fr(this,!0)},has(r){return dr.call(this,r,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:pr(!0,!1)},s={get(r){return hr(this,r,!0,!0)},get size(){return fr(this,!0)},has(r){return dr.call(this,r,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:pr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=gr(r,!1,!1),n[r]=gr(r,!0,!1),e[r]=gr(r,!1,!0),s[r]=gr(r,!0,!0)}),[t,n,e,s]}const[Fm,$m,Bm,Vm]=Um();function Ml(t,e){const n=e?t?Vm:Bm:t?$m:Fm;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Z(n,i)&&i in s?n:s,i,r)}const jm={get:Ml(!1,!1)},Hm={get:Ml(!1,!0)},qm={get:Ml(!0,!1)},ud=new WeakMap,hd=new WeakMap,dd=new WeakMap,Km=new WeakMap;function zm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wm(t){return t.__v_skip||!Object.isExtensible(t)?0:zm(cm(t))}function qi(t){return Is(t)?t:xl(t,!1,cd,jm,ud)}function Gm(t){return xl(t,!1,Lm,Hm,hd)}function fd(t){return xl(t,!0,xm,qm,dd)}function xl(t,e,n,s,i){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Wm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ps(t){return Is(t)?ps(t.__v_raw):!!(t&&t.__v_isReactive)}function Is(t){return!!(t&&t.__v_isReadonly)}function jr(t){return!!(t&&t.__v_isShallow)}function pd(t){return ps(t)||Is(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function gd(t){return Br(t,"__v_skip",!0),t}const _i=t=>de(t)?qi(t):t,Ll=t=>de(t)?fd(t):t;function md(t){mn&&Et&&(t=ne(t),od(t.dep||(t.dep=Pl())))}function yd(t,e){t=ne(t);const n=t.dep;n&&ja(n)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function vd(t){return _d(t,!1)}function Qm(t){return _d(t,!0)}function _d(t,e){return Ye(t)?t:new Jm(t,e)}class Jm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:_i(e)}get value(){return md(this),this._value}set value(e){const n=this.__v_isShallow||jr(e)||Is(e);e=n?e:ne(e),vi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_i(e),yd(this))}}function gs(t){return Ye(t)?t.value:t}const Ym={get:(t,e,n)=>gs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ye(i)&&!Ye(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function wd(t){return ps(t)?t:new Proxy(t,Ym)}class Xm{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ol(e,()=>{this._dirty||(this._dirty=!0,yd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ne(this);return md(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Zm(t,e,n=!1){let s,i;const r=W(t);return r?(s=t,i=At):(s=t.get,i=t.set),new Xm(s,i,r||!i,n)}function yn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ao(r,e,n)}return i}function St(t,e,n,s){if(W(t)){const r=yn(t,e,n,s);return r&&Xh(r)&&r.catch(o=>{Ao(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(St(t[r],e,n,s));return i}function Ao(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){yn(l,null,10,[t,o,a]);return}}ey(t,n,i,s)}function ey(t,e,n,s=!0){console.error(t)}let wi=!1,Ha=!1;const Qe=[];let Mt=0;const ms=[];let Gt=null,Dn=0;const Ed=Promise.resolve();let Ul=null;function bd(t){const e=Ul||Ed;return t?e.then(this?t.bind(this):t):e}function ty(t){let e=Mt+1,n=Qe.length;for(;e<n;){const s=e+n>>>1;Ei(Qe[s])<t?e=s+1:n=s}return e}function Fl(t){(!Qe.length||!Qe.includes(t,wi&&t.allowRecurse?Mt+1:Mt))&&(t.id==null?Qe.push(t):Qe.splice(ty(t.id),0,t),Id())}function Id(){!wi&&!Ha&&(Ha=!0,Ul=Ed.then(Ad))}function ny(t){const e=Qe.indexOf(t);e>Mt&&Qe.splice(e,1)}function sy(t){j(t)?ms.push(...t):(!Gt||!Gt.includes(t,t.allowRecurse?Dn+1:Dn))&&ms.push(t),Id()}function tu(t,e=wi?Mt+1:0){for(;e<Qe.length;e++){const n=Qe[e];n&&n.pre&&(Qe.splice(e,1),e--,n())}}function Td(t){if(ms.length){const e=[...new Set(ms)];if(ms.length=0,Gt){Gt.push(...e);return}for(Gt=e,Gt.sort((n,s)=>Ei(n)-Ei(s)),Dn=0;Dn<Gt.length;Dn++)Gt[Dn]();Gt=null,Dn=0}}const Ei=t=>t.id==null?1/0:t.id,iy=(t,e)=>{const n=Ei(t)-Ei(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ad(t){Ha=!1,wi=!0,Qe.sort(iy);const e=At;try{for(Mt=0;Mt<Qe.length;Mt++){const n=Qe[Mt];n&&n.active!==!1&&yn(n,null,14)}}finally{Mt=0,Qe.length=0,Td(),wi=!1,Ul=null,(Qe.length||ms.length)&&Ad()}}function ry(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||pe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=s[u]||pe;g&&(i=n.map(y=>Ce(y)?y.trim():y)),h&&(i=n.map(Ua))}let a,l=s[a=ca(e)]||s[a=ca(Ht(e))];!l&&r&&(l=s[a=ca(Us(e))]),l&&St(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(c,t,6,i)}}function Sd(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!W(t)){const l=c=>{const u=Sd(c,e,!0);u&&(a=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(de(t)&&s.set(t,null),null):(j(r)?r.forEach(l=>o[l]=null):Ne(o,r),de(t)&&s.set(t,o),o)}function So(t,e){return!t||!Eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,Us(e))||Z(t,e))}let yt=null,Co=null;function Hr(t){const e=yt;return yt=t,Co=t&&t.type.__scopeId||null,e}function oy(t){Co=t}function ay(){Co=null}function ly(t,e=yt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&du(-1);const r=Hr(e);let o;try{o=t(...i)}finally{Hr(r),s._d&&du(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ua(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:g,setupState:y,ctx:I,inheritAttrs:C}=t;let D,N;const x=Hr(t);try{if(n.shapeFlag&4){const L=i||s;D=Nt(u.call(L,L,h,r,y,g,I)),N=l}else{const L=e;D=Nt(L.length>1?L(r,{attrs:l,slots:a,emit:c}):L(r,null)),N=e.props?l:cy(l)}}catch(L){li.length=0,Ao(L,t,1),D=be(qn)}let G=D;if(N&&C!==!1){const L=Object.keys(N),{shapeFlag:we}=G;L.length&&we&7&&(o&&L.some(Sl)&&(N=uy(N,o)),G=Ts(G,N))}return n.dirs&&(G=Ts(G),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&(G.transition=n.transition),D=G,Hr(x),D}const cy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Eo(n))&&((e||(e={}))[n]=t[n]);return e},uy=(t,e)=>{const n={};for(const s in t)(!Sl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hy(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?nu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==s[g]&&!So(c,g))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?nu(s,o,c):!0:!!o;return!1}function nu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!So(n,r))return!0}return!1}function dy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const fy=t=>t.__isSuspense;function py(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):sy(t)}const mr={};function Rr(t,e,n){return Cd(t,e,n)}function Cd(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=pe){var a;const l=Em()===((a=Be)==null?void 0:a.scope)?Be:null;let c,u=!1,h=!1;if(Ye(t)?(c=()=>t.value,u=jr(t)):ps(t)?(c=()=>t,s=!0):j(t)?(h=!0,u=t.some(L=>ps(L)||jr(L)),c=()=>t.map(L=>{if(Ye(L))return L.value;if(ps(L))return xn(L);if(W(L))return yn(L,l,2)})):W(t)?e?c=()=>yn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return g&&g(),St(t,l,3,[y])}:c=At,e&&s){const L=c;c=()=>xn(L())}let g,y=L=>{g=x.onStop=()=>{yn(L,l,4)}},I;if(Ti)if(y=At,e?n&&St(e,l,3,[c(),h?[]:void 0,y]):c(),i==="sync"){const L=av();I=L.__watcherHandles||(L.__watcherHandles=[])}else return At;let C=h?new Array(t.length).fill(mr):mr;const D=()=>{if(x.active)if(e){const L=x.run();(s||u||(h?L.some((we,ye)=>vi(we,C[ye])):vi(L,C)))&&(g&&g(),St(e,l,3,[L,C===mr?void 0:h&&C[0]===mr?[]:C,y]),C=L)}else x.run()};D.allowRecurse=!!e;let N;i==="sync"?N=D:i==="post"?N=()=>rt(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),N=()=>Fl(D));const x=new Ol(c,N);e?n?D():C=x.run():i==="post"?rt(x.run.bind(x),l&&l.suspense):x.run();const G=()=>{x.stop(),l&&l.scope&&Cl(l.scope.effects,x)};return I&&I.push(G),G}function gy(t,e,n){const s=this.proxy,i=Ce(t)?t.includes(".")?kd(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=Be;As(this);const a=Cd(i,r.bind(s),n);return o?As(o):Bn(),a}function kd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function xn(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ye(t))xn(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)xn(t[n],e);else if(Yh(t)||fs(t))t.forEach(n=>{xn(n,e)});else if(ed(t))for(const n in t)xn(t[n],e);return t}function fe(t,e){const n=yt;if(n===null)return t;const s=No(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=pe]=e[r];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&xn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Rn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Fs(),St(l,n,8,[t.el,a,t,e]),$s())}}function Rd(t,e){return W(t)?(()=>Ne({name:t.name},e,{setup:t}))():t}const Pr=t=>!!t.type.__asyncLoader,Pd=t=>t.type.__isKeepAlive;function my(t,e){Od(t,"a",e)}function yy(t,e){Od(t,"da",e)}function Od(t,e,n=Be){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ko(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Pd(i.parent.vnode)&&vy(s,e,n,i),i=i.parent}}function vy(t,e,n,s){const i=ko(e,t,s,!0);Nd(()=>{Cl(s[e],i)},n)}function ko(t,e,n=Be,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fs(),As(n);const a=St(e,n,t,o);return Bn(),$s(),a});return s?i.unshift(r):i.push(r),r}}const nn=t=>(e,n=Be)=>(!Ti||t==="sp")&&ko(t,(...s)=>e(...s),n),_y=nn("bm"),Dd=nn("m"),wy=nn("bu"),Ey=nn("u"),by=nn("bum"),Nd=nn("um"),Iy=nn("sp"),Ty=nn("rtg"),Ay=nn("rtc");function Sy(t,e=Be){ko("ec",t,e)}const Md="components";function bi(t,e){return ky(Md,t,!0,e)||t}const Cy=Symbol.for("v-ndc");function ky(t,e,n=!0,s=!1){const i=yt||Be;if(i){const r=i.type;if(t===Md){const a=iv(r,!1);if(a&&(a===e||a===Ht(e)||a===Io(Ht(e))))return r}const o=su(i[t]||r[t],e)||su(i.appContext[t],e);return!o&&s?r:o}}function su(t,e){return t&&(t[e]||t[Ht(e)]||t[Io(Ht(e))])}function Ro(t,e,n,s){let i;const r=n&&n[s];if(j(t)||Ce(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(de(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const qa=t=>t?Kd(t)?No(t)||t.proxy:qa(t.parent):null,ai=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qa(t.parent),$root:t=>qa(t.root),$emit:t=>t.emit,$options:t=>$l(t),$forceUpdate:t=>t.f||(t.f=()=>Fl(t.update)),$nextTick:t=>t.n||(t.n=bd.bind(t.proxy)),$watch:t=>gy.bind(t)}),ha=(t,e)=>t!==pe&&!t.__isScriptSetup&&Z(t,e),Ry={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ha(s,e))return o[e]=1,s[e];if(i!==pe&&Z(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,r[e];if(n!==pe&&Z(n,e))return o[e]=4,n[e];Ka&&(o[e]=0)}}const u=ai[e];let h,g;if(u)return e==="$attrs"&&ot(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&Z(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Z(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ha(i,e)?(i[e]=n,!0):s!==pe&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==pe&&Z(t,o)||ha(e,o)||(a=r[0])&&Z(a,o)||Z(s,o)||Z(ai,o)||Z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function iu(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ka=!0;function Py(t){const e=$l(t),n=t.proxy,s=t.ctx;Ka=!1,e.beforeCreate&&ru(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:g,beforeUpdate:y,updated:I,activated:C,deactivated:D,beforeDestroy:N,beforeUnmount:x,destroyed:G,unmounted:L,render:we,renderTracked:ye,renderTriggered:He,errorCaptured:ut,serverPrefetch:ht,expose:pt,inheritAttrs:rn,components:kn,directives:Rt,filters:Qs}=e;if(c&&Oy(c,s,null),o)for(const ce in o){const se=o[ce];W(se)&&(s[ce]=se.bind(n))}if(i){const ce=i.call(n,n);de(ce)&&(t.data=qi(ce))}if(Ka=!0,r)for(const ce in r){const se=r[ce],zt=W(se)?se.bind(n,n):W(se.get)?se.get.bind(n,n):At,on=!W(se)&&W(se.set)?se.set.bind(n):At,Pt=gt({get:zt,set:on});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:it=>Pt.value=it})}if(a)for(const ce in a)xd(a[ce],s,n,ce);if(l){const ce=W(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(se=>{Or(se,ce[se])})}u&&ru(u,t,"c");function Re(ce,se){j(se)?se.forEach(zt=>ce(zt.bind(n))):se&&ce(se.bind(n))}if(Re(_y,h),Re(Dd,g),Re(wy,y),Re(Ey,I),Re(my,C),Re(yy,D),Re(Sy,ut),Re(Ay,ye),Re(Ty,He),Re(by,x),Re(Nd,L),Re(Iy,ht),j(pt))if(pt.length){const ce=t.exposed||(t.exposed={});pt.forEach(se=>{Object.defineProperty(ce,se,{get:()=>n[se],set:zt=>n[se]=zt})})}else t.exposed||(t.exposed={});we&&t.render===At&&(t.render=we),rn!=null&&(t.inheritAttrs=rn),kn&&(t.components=kn),Rt&&(t.directives=Rt)}function Oy(t,e,n=At){j(t)&&(t=za(t));for(const s in t){const i=t[s];let r;de(i)?"default"in i?r=Ft(i.from||s,i.default,!0):r=Ft(i.from||s):r=Ft(i),Ye(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ru(t,e,n){St(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xd(t,e,n,s){const i=s.includes(".")?kd(n,s):()=>n[s];if(Ce(t)){const r=e[t];W(r)&&Rr(i,r)}else if(W(t))Rr(i,t.bind(n));else if(de(t))if(j(t))t.forEach(r=>xd(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&Rr(i,r,t)}}function $l(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>qr(l,c,o,!0)),qr(l,e,o)),de(e)&&r.set(e,l),l}function qr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qr(t,r,n,!0),i&&i.forEach(o=>qr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Dy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Dy={data:ou,props:au,emits:au,methods:ni,computed:ni,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:ni,directives:ni,watch:My,provide:ou,inject:Ny};function ou(t,e){return e?t?function(){return Ne(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Ny(t,e){return ni(za(t),za(e))}function za(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tt(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?Ne(Object.create(null),t,e):e}function au(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:Ne(Object.create(null),iu(t),iu(e??{})):e}function My(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const s in e)n[s]=tt(t[s],e[s]);return n}function Ld(){return{app:null,config:{isNativeTag:om,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xy=0;function Ly(t,e){return function(s,i=null){W(s)||(s=Ne({},s)),i!=null&&!de(i)&&(i=null);const r=Ld(),o=new Set;let a=!1;const l=r.app={_uid:xy++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:lv,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(l,...u)):W(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const g=be(s,i);return g.appContext=r,u&&e?e(g,c):t(g,c,h),a=!0,l._container=c,c.__vue_app__=l,No(g.component)||g.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Kr=l;try{return c()}finally{Kr=null}}};return l}}let Kr=null;function Or(t,e){if(Be){let n=Be.provides;const s=Be.parent&&Be.parent.provides;s===n&&(n=Be.provides=Object.create(s)),n[t]=e}}function Ft(t,e,n=!1){const s=Be||yt;if(s||Kr){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Kr._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s&&s.proxy):e}}function Uy(t,e,n,s=!1){const i={},r={};Br(r,Oo,1),t.propsDefaults=Object.create(null),Ud(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Gm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Fy(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ne(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(So(t.emitsOptions,g))continue;const y=e[g];if(l)if(Z(r,g))y!==r[g]&&(r[g]=y,c=!0);else{const I=Ht(g);i[I]=Wa(l,a,I,y,t,!1)}else y!==r[g]&&(r[g]=y,c=!0)}}}else{Ud(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Z(e,h)&&((u=Us(h))===h||!Z(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Wa(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Z(e,h))&&(delete r[h],c=!0)}c&&Xt(t,"set","$attrs")}function Ud(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Cr(l))continue;const c=e[l];let u;i&&Z(i,u=Ht(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:So(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ne(n),c=a||pe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Wa(i,l,h,c[h],t,!Z(c,h))}}return o}function Wa(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&W(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(As(i),s=c[n]=l.call(null,e),Bn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Us(n))&&(s=!0))}return s}function Fd(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!W(t)){const u=h=>{l=!0;const[g,y]=Fd(h,e,!0);Ne(o,g),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return de(t)&&s.set(t,ds),ds;if(j(r))for(let u=0;u<r.length;u++){const h=Ht(r[u]);lu(h)&&(o[h]=pe)}else if(r)for(const u in r){const h=Ht(u);if(lu(h)){const g=r[u],y=o[h]=j(g)||W(g)?{type:g}:Ne({},g);if(y){const I=hu(Boolean,y.type),C=hu(String,y.type);y[0]=I>-1,y[1]=C<0||I<C,(I>-1||Z(y,"default"))&&a.push(h)}}}const c=[o,a];return de(t)&&s.set(t,c),c}function lu(t){return t[0]!=="$"}function cu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function uu(t,e){return cu(t)===cu(e)}function hu(t,e){return j(e)?e.findIndex(n=>uu(n,t)):W(e)&&uu(e,t)?0:-1}const $d=t=>t[0]==="_"||t==="$stable",Bl=t=>j(t)?t.map(Nt):[Nt(t)],$y=(t,e,n)=>{if(e._n)return e;const s=ly((...i)=>Bl(e(...i)),n);return s._c=!1,s},Bd=(t,e,n)=>{const s=t._ctx;for(const i in t){if($d(i))continue;const r=t[i];if(W(r))e[i]=$y(i,r,s);else if(r!=null){const o=Bl(r);e[i]=()=>o}}},Vd=(t,e)=>{const n=Bl(e);t.slots.default=()=>n},By=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),Br(e,"_",n)):Bd(e,t.slots={})}else t.slots={},e&&Vd(t,e);Br(t.slots,Oo,1)},Vy=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ne(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Bd(e,i)),o=e}else e&&(Vd(t,e),o={default:1});if(r)for(const a in i)!$d(a)&&!(a in o)&&delete i[a]};function Ga(t,e,n,s,i=!1){if(j(t)){t.forEach((g,y)=>Ga(g,e&&(j(e)?e[y]:e),n,s,i));return}if(Pr(s)&&!i)return;const r=s.shapeFlag&4?No(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ce(c)?(u[c]=null,Z(h,c)&&(h[c]=null)):Ye(c)&&(c.value=null)),W(l))yn(l,a,12,[o,u]);else{const g=Ce(l),y=Ye(l);if(g||y){const I=()=>{if(t.f){const C=g?Z(h,l)?h[l]:u[l]:l.value;i?j(C)&&Cl(C,r):j(C)?C.includes(r)||C.push(r):g?(u[l]=[r],Z(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,Z(h,l)&&(h[l]=o)):y&&(l.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,rt(I,n)):I()}}}const rt=py;function jy(t){return Hy(t)}function Hy(t,e){const n=Fa();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:g,setScopeId:y=At,insertStaticContent:I}=t,C=(d,p,m,v=null,w=null,E=null,O=!1,S=null,k=!!p.dynamicChildren)=>{if(d===p)return;d&&!Ys(d,p)&&(v=_(d),it(d,w,E,!0),d=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:b,ref:$,shapeFlag:U}=p;switch(b){case Po:D(d,p,m,v);break;case qn:N(d,p,m,v);break;case Dr:d==null&&x(p,m,v,O);break;case Se:kn(d,p,m,v,w,E,O,S,k);break;default:U&1?we(d,p,m,v,w,E,O,S,k):U&6?Rt(d,p,m,v,w,E,O,S,k):(U&64||U&128)&&b.process(d,p,m,v,w,E,O,S,k,R)}$!=null&&w&&Ga($,d&&d.ref,E,p||d,!p)},D=(d,p,m,v)=>{if(d==null)s(p.el=a(p.children),m,v);else{const w=p.el=d.el;p.children!==d.children&&c(w,p.children)}},N=(d,p,m,v)=>{d==null?s(p.el=l(p.children||""),m,v):p.el=d.el},x=(d,p,m,v)=>{[d.el,d.anchor]=I(d.children,p,m,v,d.el,d.anchor)},G=({el:d,anchor:p},m,v)=>{let w;for(;d&&d!==p;)w=g(d),s(d,m,v),d=w;s(p,m,v)},L=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=g(d),i(d),d=m;i(p)},we=(d,p,m,v,w,E,O,S,k)=>{O=O||p.type==="svg",d==null?ye(p,m,v,w,E,O,S,k):ht(d,p,w,E,O,S,k)},ye=(d,p,m,v,w,E,O,S)=>{let k,b;const{type:$,props:U,shapeFlag:B,transition:z,dirs:J}=d;if(k=d.el=o(d.type,E,U&&U.is,U),B&8?u(k,d.children):B&16&&ut(d.children,k,null,v,w,E&&$!=="foreignObject",O,S),J&&Rn(d,null,v,"created"),He(k,d,d.scopeId,O,v),U){for(const le in U)le!=="value"&&!Cr(le)&&r(k,le,null,U[le],E,d.children,v,w,qe);"value"in U&&r(k,"value",null,U.value),(b=U.onVnodeBeforeMount)&&Dt(b,v,d)}J&&Rn(d,null,v,"beforeMount");const ue=(!w||w&&!w.pendingBranch)&&z&&!z.persisted;ue&&z.beforeEnter(k),s(k,p,m),((b=U&&U.onVnodeMounted)||ue||J)&&rt(()=>{b&&Dt(b,v,d),ue&&z.enter(k),J&&Rn(d,null,v,"mounted")},w)},He=(d,p,m,v,w)=>{if(m&&y(d,m),v)for(let E=0;E<v.length;E++)y(d,v[E]);if(w){let E=w.subTree;if(p===E){const O=w.vnode;He(d,O,O.scopeId,O.slotScopeIds,w.parent)}}},ut=(d,p,m,v,w,E,O,S,k=0)=>{for(let b=k;b<d.length;b++){const $=d[b]=S?un(d[b]):Nt(d[b]);C(null,$,p,m,v,w,E,O,S)}},ht=(d,p,m,v,w,E,O)=>{const S=p.el=d.el;let{patchFlag:k,dynamicChildren:b,dirs:$}=p;k|=d.patchFlag&16;const U=d.props||pe,B=p.props||pe;let z;m&&Pn(m,!1),(z=B.onVnodeBeforeUpdate)&&Dt(z,m,p,d),$&&Rn(p,d,m,"beforeUpdate"),m&&Pn(m,!0);const J=w&&p.type!=="foreignObject";if(b?pt(d.dynamicChildren,b,S,m,v,J,E):O||se(d,p,S,null,m,v,J,E,!1),k>0){if(k&16)rn(S,p,U,B,m,v,w);else if(k&2&&U.class!==B.class&&r(S,"class",null,B.class,w),k&4&&r(S,"style",U.style,B.style,w),k&8){const ue=p.dynamicProps;for(let le=0;le<ue.length;le++){const Te=ue[le],vt=U[Te],rs=B[Te];(rs!==vt||Te==="value")&&r(S,Te,vt,rs,w,d.children,m,v,qe)}}k&1&&d.children!==p.children&&u(S,p.children)}else!O&&b==null&&rn(S,p,U,B,m,v,w);((z=B.onVnodeUpdated)||$)&&rt(()=>{z&&Dt(z,m,p,d),$&&Rn(p,d,m,"updated")},v)},pt=(d,p,m,v,w,E,O)=>{for(let S=0;S<p.length;S++){const k=d[S],b=p[S],$=k.el&&(k.type===Se||!Ys(k,b)||k.shapeFlag&70)?h(k.el):m;C(k,b,$,null,v,w,E,O,!0)}},rn=(d,p,m,v,w,E,O)=>{if(m!==v){if(m!==pe)for(const S in m)!Cr(S)&&!(S in v)&&r(d,S,m[S],null,O,p.children,w,E,qe);for(const S in v){if(Cr(S))continue;const k=v[S],b=m[S];k!==b&&S!=="value"&&r(d,S,b,k,O,p.children,w,E,qe)}"value"in v&&r(d,"value",m.value,v.value)}},kn=(d,p,m,v,w,E,O,S,k)=>{const b=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:B,slotScopeIds:z}=p;z&&(S=S?S.concat(z):z),d==null?(s(b,m,v),s($,m,v),ut(p.children,m,$,w,E,O,S,k)):U>0&&U&64&&B&&d.dynamicChildren?(pt(d.dynamicChildren,B,m,w,E,O,S),(p.key!=null||w&&p===w.subTree)&&jd(d,p,!0)):se(d,p,m,$,w,E,O,S,k)},Rt=(d,p,m,v,w,E,O,S,k)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?w.ctx.activate(p,m,v,O,k):Qs(p,m,v,w,E,O,k):ns(d,p,k)},Qs=(d,p,m,v,w,E,O)=>{const S=d.component=Zy(d,v,w);if(Pd(d)&&(S.ctx.renderer=R),ev(S),S.asyncDep){if(w&&w.registerDep(S,Re),!d.el){const k=S.subTree=be(qn);N(null,k,p,m)}return}Re(S,d,p,m,w,E,O)},ns=(d,p,m)=>{const v=p.component=d.component;if(hy(d,p,m))if(v.asyncDep&&!v.asyncResolved){ce(v,p,m);return}else v.next=p,ny(v.update),v.update();else p.el=d.el,v.vnode=p},Re=(d,p,m,v,w,E,O)=>{const S=()=>{if(d.isMounted){let{next:$,bu:U,u:B,parent:z,vnode:J}=d,ue=$,le;Pn(d,!1),$?($.el=J.el,ce(d,$,O)):$=J,U&&kr(U),(le=$.props&&$.props.onVnodeBeforeUpdate)&&Dt(le,z,$,J),Pn(d,!0);const Te=ua(d),vt=d.subTree;d.subTree=Te,C(vt,Te,h(vt.el),_(vt),d,w,E),$.el=Te.el,ue===null&&dy(d,Te.el),B&&rt(B,w),(le=$.props&&$.props.onVnodeUpdated)&&rt(()=>Dt(le,z,$,J),w)}else{let $;const{el:U,props:B}=p,{bm:z,m:J,parent:ue}=d,le=Pr(p);if(Pn(d,!1),z&&kr(z),!le&&($=B&&B.onVnodeBeforeMount)&&Dt($,ue,p),Pn(d,!0),U&&ie){const Te=()=>{d.subTree=ua(d),ie(U,d.subTree,d,w,null)};le?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Te()):Te()}else{const Te=d.subTree=ua(d);C(null,Te,m,v,d,w,E),p.el=Te.el}if(J&&rt(J,w),!le&&($=B&&B.onVnodeMounted)){const Te=p;rt(()=>Dt($,ue,Te),w)}(p.shapeFlag&256||ue&&Pr(ue.vnode)&&ue.vnode.shapeFlag&256)&&d.a&&rt(d.a,w),d.isMounted=!0,p=m=v=null}},k=d.effect=new Ol(S,()=>Fl(b),d.scope),b=d.update=()=>k.run();b.id=d.uid,Pn(d,!0),b()},ce=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,Fy(d,p.props,v,m),Vy(d,p.children,m),Fs(),tu(),$s()},se=(d,p,m,v,w,E,O,S,k=!1)=>{const b=d&&d.children,$=d?d.shapeFlag:0,U=p.children,{patchFlag:B,shapeFlag:z}=p;if(B>0){if(B&128){on(b,U,m,v,w,E,O,S,k);return}else if(B&256){zt(b,U,m,v,w,E,O,S,k);return}}z&8?($&16&&qe(b,w,E),U!==b&&u(m,U)):$&16?z&16?on(b,U,m,v,w,E,O,S,k):qe(b,w,E,!0):($&8&&u(m,""),z&16&&ut(U,m,v,w,E,O,S,k))},zt=(d,p,m,v,w,E,O,S,k)=>{d=d||ds,p=p||ds;const b=d.length,$=p.length,U=Math.min(b,$);let B;for(B=0;B<U;B++){const z=p[B]=k?un(p[B]):Nt(p[B]);C(d[B],z,m,null,w,E,O,S,k)}b>$?qe(d,w,E,!0,!1,U):ut(p,m,v,w,E,O,S,k,U)},on=(d,p,m,v,w,E,O,S,k)=>{let b=0;const $=p.length;let U=d.length-1,B=$-1;for(;b<=U&&b<=B;){const z=d[b],J=p[b]=k?un(p[b]):Nt(p[b]);if(Ys(z,J))C(z,J,m,null,w,E,O,S,k);else break;b++}for(;b<=U&&b<=B;){const z=d[U],J=p[B]=k?un(p[B]):Nt(p[B]);if(Ys(z,J))C(z,J,m,null,w,E,O,S,k);else break;U--,B--}if(b>U){if(b<=B){const z=B+1,J=z<$?p[z].el:v;for(;b<=B;)C(null,p[b]=k?un(p[b]):Nt(p[b]),m,J,w,E,O,S,k),b++}}else if(b>B)for(;b<=U;)it(d[b],w,E,!0),b++;else{const z=b,J=b,ue=new Map;for(b=J;b<=B;b++){const dt=p[b]=k?un(p[b]):Nt(p[b]);dt.key!=null&&ue.set(dt.key,b)}let le,Te=0;const vt=B-J+1;let rs=!1,Hc=0;const Js=new Array(vt);for(b=0;b<vt;b++)Js[b]=0;for(b=z;b<=U;b++){const dt=d[b];if(Te>=vt){it(dt,w,E,!0);continue}let Ot;if(dt.key!=null)Ot=ue.get(dt.key);else for(le=J;le<=B;le++)if(Js[le-J]===0&&Ys(dt,p[le])){Ot=le;break}Ot===void 0?it(dt,w,E,!0):(Js[Ot-J]=b+1,Ot>=Hc?Hc=Ot:rs=!0,C(dt,p[Ot],m,null,w,E,O,S,k),Te++)}const qc=rs?qy(Js):ds;for(le=qc.length-1,b=vt-1;b>=0;b--){const dt=J+b,Ot=p[dt],Kc=dt+1<$?p[dt+1].el:v;Js[b]===0?C(null,Ot,m,Kc,w,E,O,S,k):rs&&(le<0||b!==qc[le]?Pt(Ot,m,Kc,2):le--)}}},Pt=(d,p,m,v,w=null)=>{const{el:E,type:O,transition:S,children:k,shapeFlag:b}=d;if(b&6){Pt(d.component.subTree,p,m,v);return}if(b&128){d.suspense.move(p,m,v);return}if(b&64){O.move(d,p,m,R);return}if(O===Se){s(E,p,m);for(let U=0;U<k.length;U++)Pt(k[U],p,m,v);s(d.anchor,p,m);return}if(O===Dr){G(d,p,m);return}if(v!==2&&b&1&&S)if(v===0)S.beforeEnter(E),s(E,p,m),rt(()=>S.enter(E),w);else{const{leave:U,delayLeave:B,afterLeave:z}=S,J=()=>s(E,p,m),ue=()=>{U(E,()=>{J(),z&&z()})};B?B(E,J,ue):ue()}else s(E,p,m)},it=(d,p,m,v=!1,w=!1)=>{const{type:E,props:O,ref:S,children:k,dynamicChildren:b,shapeFlag:$,patchFlag:U,dirs:B}=d;if(S!=null&&Ga(S,null,m,d,!0),$&256){p.ctx.deactivate(d);return}const z=$&1&&B,J=!Pr(d);let ue;if(J&&(ue=O&&O.onVnodeBeforeUnmount)&&Dt(ue,p,d),$&6)ur(d.component,m,v);else{if($&128){d.suspense.unmount(m,v);return}z&&Rn(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,m,w,R,v):b&&(E!==Se||U>0&&U&64)?qe(b,p,m,!1,!0):(E===Se&&U&384||!w&&$&16)&&qe(k,p,m),v&&ss(d)}(J&&(ue=O&&O.onVnodeUnmounted)||z)&&rt(()=>{ue&&Dt(ue,p,d),z&&Rn(d,null,p,"unmounted")},m)},ss=d=>{const{type:p,el:m,anchor:v,transition:w}=d;if(p===Se){is(m,v);return}if(p===Dr){L(d);return}const E=()=>{i(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:S}=w,k=()=>O(m,E);S?S(d.el,E,k):k()}else E()},is=(d,p)=>{let m;for(;d!==p;)m=g(d),i(d),d=m;i(p)},ur=(d,p,m)=>{const{bum:v,scope:w,update:E,subTree:O,um:S}=d;v&&kr(v),w.stop(),E&&(E.active=!1,it(O,d,p,m)),S&&rt(S,p),rt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},qe=(d,p,m,v=!1,w=!1,E=0)=>{for(let O=E;O<d.length;O++)it(d[O],p,m,v,w)},_=d=>d.shapeFlag&6?_(d.component.subTree):d.shapeFlag&128?d.suspense.next():g(d.anchor||d.el),M=(d,p,m)=>{d==null?p._vnode&&it(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,m),tu(),Td(),p._vnode=d},R={p:C,um:it,m:Pt,r:ss,mt:Qs,mc:ut,pc:se,pbc:pt,n:_,o:t};let F,ie;return e&&([F,ie]=e(R)),{render:M,hydrate:F,createApp:Ly(M,F)}}function Pn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jd(t,e,n=!1){const s=t.children,i=e.children;if(j(s)&&j(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=un(i[r]),a.el=o.el),n||jd(o,a)),a.type===Po&&(a.el=o.el)}}function qy(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Ky=t=>t.__isTeleport,Se=Symbol.for("v-fgt"),Po=Symbol.for("v-txt"),qn=Symbol.for("v-cmt"),Dr=Symbol.for("v-stc"),li=[];let It=null;function te(t=!1){li.push(It=t?null:[])}function zy(){li.pop(),It=li[li.length-1]||null}let Ii=1;function du(t){Ii+=t}function Hd(t){return t.dynamicChildren=Ii>0?It||ds:null,zy(),Ii>0&&It&&It.push(t),t}function re(t,e,n,s,i,r){return Hd(f(t,e,n,s,i,r,!0))}function Wy(t,e,n,s,i){return Hd(be(t,e,n,s,i,!0))}function Qa(t){return t?t.__v_isVNode===!0:!1}function Ys(t,e){return t.type===e.type&&t.key===e.key}const Oo="__vInternal",qd=({key:t})=>t??null,Nr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||Ye(t)||W(t)?{i:yt,r:t,k:e,f:!!n}:t:null);function f(t,e=null,n=null,s=0,i=null,r=t===Se?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qd(e),ref:e&&Nr(e),scopeId:Co,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:yt};return a?(Vl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ce(n)?8:16),Ii>0&&!o&&It&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&It.push(l),l}const be=Gy;function Gy(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Cy)&&(t=qn),Qa(t)){const a=Ts(t,e,!0);return n&&Vl(a,n),Ii>0&&!r&&It&&(a.shapeFlag&6?It[It.indexOf(t)]=a:It.push(a)),a.patchFlag|=-2,a}if(rv(t)&&(t=t.__vccOpts),e){e=Qy(e);let{class:a,style:l}=e;a&&!Ce(a)&&(e.class=Xn(a)),de(l)&&(pd(l)&&!j(l)&&(l=Ne({},l)),e.style=Rl(l))}const o=Ce(t)?1:fy(t)?128:Ky(t)?64:de(t)?4:W(t)?2:0;return f(t,e,n,s,i,o,r,!0)}function Qy(t){return t?pd(t)||Oo in t?Ne({},t):t:null}function Ts(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Jy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&qd(a),ref:e&&e.ref?n&&i?j(i)?i.concat(Nr(e)):[i,Nr(e)]:Nr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ts(t.ssContent),ssFallback:t.ssFallback&&Ts(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ve(t=" ",e=0){return be(Po,null,t,e)}function Bs(t,e){const n=be(Dr,null,t);return n.staticCount=e,n}function Do(t="",e=!1){return e?(te(),Wy(qn,null,t)):be(qn,null,t)}function Nt(t){return t==null||typeof t=="boolean"?be(qn):j(t)?be(Se,null,t.slice()):typeof t=="object"?un(t):be(Po,null,String(t))}function un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ts(t)}function Vl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Vl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Oo in e)?e._ctx=yt:i===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),s&64?(n=16,e=[Ve(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Xn([e.class,s.class]));else if(i==="style")e.style=Rl([e.style,s.style]);else if(Eo(i)){const r=e[i],o=s[i];o&&r!==o&&!(j(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Dt(t,e,n,s=null){St(t,e,7,[n,s])}const Yy=Ld();let Xy=0;function Zy(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Yy,r={uid:Xy++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _m(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fd(s,i),emitsOptions:Sd(s,i),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ry.bind(null,r),t.ce&&t.ce(r),r}let Be=null,jl,os,fu="__VUE_INSTANCE_SETTERS__";(os=Fa()[fu])||(os=Fa()[fu]=[]),os.push(t=>Be=t),jl=t=>{os.length>1?os.forEach(e=>e(t)):os[0](t)};const As=t=>{jl(t),t.scope.on()},Bn=()=>{Be&&Be.scope.off(),jl(null)};function Kd(t){return t.vnode.shapeFlag&4}let Ti=!1;function ev(t,e=!1){Ti=e;const{props:n,children:s}=t.vnode,i=Kd(t);Uy(t,n,i,e),By(t,s);const r=i?tv(t,e):void 0;return Ti=!1,r}function tv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gd(new Proxy(t.ctx,Ry));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?sv(t):null;As(t),Fs();const r=yn(s,t,0,[t.props,i]);if($s(),Bn(),Xh(r)){if(r.then(Bn,Bn),e)return r.then(o=>{pu(t,o,e)}).catch(o=>{Ao(o,t,0)});t.asyncDep=r}else pu(t,r,e)}else zd(t,e)}function pu(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=wd(e)),zd(t,n)}let gu;function zd(t,e,n){const s=t.type;if(!t.render){if(!e&&gu&&!s.render){const i=s.template||$l(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ne(Ne({isCustomElement:r,delimiters:a},o),l);s.render=gu(i,c)}}t.render=s.render||At}As(t),Fs(),Py(t),$s(),Bn()}function nv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ot(t,"get","$attrs"),e[n]}}))}function sv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return nv(t)},slots:t.slots,emit:t.emit,expose:e}}function No(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(wd(gd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ai)return ai[n](t)},has(e,n){return n in e||n in ai}}))}function iv(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function rv(t){return W(t)&&"__vccOpts"in t}const gt=(t,e)=>Zm(t,e,Ti);function Wd(t,e,n){const s=arguments.length;return s===2?de(e)&&!j(e)?Qa(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qa(n)&&(n=[n]),be(t,e,n))}const ov=Symbol.for("v-scx"),av=()=>Ft(ov),lv="3.3.4",cv="http://www.w3.org/2000/svg",Nn=typeof document<"u"?document:null,mu=Nn&&Nn.createElement("template"),uv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Nn.createElementNS(cv,t):Nn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{mu.innerHTML=s?`<svg>${t}</svg>`:t;const a=mu.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function hv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function dv(t,e,n){const s=t.style,i=Ce(n);if(n&&!i){if(e&&!Ce(e))for(const r in e)n[r]==null&&Ja(s,r,"");for(const r in n)Ja(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const yu=/\s*!important$/;function Ja(t,e,n){if(j(n))n.forEach(s=>Ja(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=fv(t,e);yu.test(n)?t.setProperty(Us(s),n.replace(yu,""),"important"):t[s]=n}}const vu=["Webkit","Moz","ms"],da={};function fv(t,e){const n=da[e];if(n)return n;let s=Ht(e);if(s!=="filter"&&s in t)return da[e]=s;s=Io(s);for(let i=0;i<vu.length;i++){const r=vu[i]+s;if(r in t)return da[e]=r}return e}const _u="http://www.w3.org/1999/xlink";function pv(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_u,e.slice(6,e.length)):t.setAttributeNS(_u,e,n);else{const r=ym(e);n==null||r&&!td(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function gv(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=td(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Mn(t,e,n,s){t.addEventListener(e,n,s)}function mv(t,e,n,s){t.removeEventListener(e,n,s)}function yv(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=vv(e);if(s){const c=r[e]=Ev(s,i);Mn(t,a,c,l)}else o&&(mv(t,a,o,l),r[e]=void 0)}}const wu=/(?:Once|Passive|Capture)$/;function vv(t){let e;if(wu.test(t)){e={};let s;for(;s=t.match(wu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Us(t.slice(2)),e]}let fa=0;const _v=Promise.resolve(),wv=()=>fa||(_v.then(()=>fa=0),fa=Date.now());function Ev(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;St(bv(s,n.value),e,5,[s])};return n.value=t,n.attached=wv(),n}function bv(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Eu=/^on[a-z]/,Iv=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?hv(t,s,i):e==="style"?dv(t,n,s):Eo(e)?Sl(e)||yv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tv(t,e,s,i))?gv(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),pv(t,e,s,i))};function Tv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Eu.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Eu.test(e)&&Ce(n)?!1:e in t}const zr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>kr(e,n):e};function Av(t){t.target.composing=!0}function bu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ve={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=zr(i);const r=s||i.props&&i.props.type==="number";Mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ua(a)),t._assign(a)}),n&&Mn(t,"change",()=>{t.value=t.value.trim()}),e||(Mn(t,"compositionstart",Av),Mn(t,"compositionend",bu),Mn(t,"change",bu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=zr(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ua(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Iu={created(t,{value:e},n){t.checked=Vr(e,n.props.value),t._assign=zr(n),Mn(t,"change",()=>{t._assign(Sv(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=zr(s),e!==n&&(t.checked=Vr(e,s.props.value))}};function Sv(t){return"_value"in t?t._value:t.value}const Cv=["ctrl","shift","alt","meta"],kv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Cv.some(n=>t[`${n}Key`]&&!e.includes(n))},Hl=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=kv[e[i]];if(r&&r(n,e))return}return t(n,...s)},Rv=Ne({patchProp:Iv},uv);let Tu;function Pv(){return Tu||(Tu=jy(Rv))}const Ov=(...t)=>{const e=Pv().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Dv(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Dv(t){return Ce(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ls=typeof window<"u";function Nv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function pa(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ct(i)?i.map(t):t(i)}return n}const ci=()=>{},Ct=Array.isArray,Mv=/\/$/,xv=t=>t.replace(Mv,"");function ga(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=$v(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Lv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Au(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Uv(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ss(e.matched[s],n.matched[i])&&Gd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fv(t[n],e[n]))return!1;return!0}function Fv(t,e){return Ct(t)?Su(t,e):Ct(e)?Su(e,t):t===e}function Su(t,e){return Ct(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function $v(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Ai;(function(t){t.pop="pop",t.push="push"})(Ai||(Ai={}));var ui;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ui||(ui={}));function Bv(t){if(!t)if(ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xv(t)}const Vv=/^[^#]+#/;function jv(t,e){return t.replace(Vv,"#")+e}function Hv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Mo=()=>({left:window.pageXOffset,top:window.pageYOffset});function qv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Hv(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cu(t,e){return(history.state?history.state.position-e:-1)+t}const Ya=new Map;function Kv(t,e){Ya.set(t,e)}function zv(t){const e=Ya.get(t);return Ya.delete(t),e}let Wv=()=>location.protocol+"//"+location.host;function Qd(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Au(l,"")}return Au(n,t)+s+i}function Gv(t,e,n,s){let i=[],r=[],o=null;const a=({state:g})=>{const y=Qd(t,location),I=n.value,C=e.value;let D=0;if(g){if(n.value=y,e.value=g,o&&o===I){o=null;return}D=C?g.position-C.position:0}else s(y);i.forEach(N=>{N(n.value,I,{delta:D,type:Ai.pop,direction:D?D>0?ui.forward:ui.back:ui.unknown})})};function l(){o=n.value}function c(g){i.push(g);const y=()=>{const I=i.indexOf(g);I>-1&&i.splice(I,1)};return r.push(y),y}function u(){const{history:g}=window;g.state&&g.replaceState(oe({},g.state,{scroll:Mo()}),"")}function h(){for(const g of r)g();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function ku(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Mo():null}}function Qv(t){const{history:e,location:n}=window,s={value:Qd(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Wv()+t+l;try{e[u?"replaceState":"pushState"](c,"",g),i.value=c}catch(y){console.error(y),n[u?"replace":"assign"](g)}}function o(l,c){const u=oe({},e.state,ku(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=oe({},i.value,e.state,{forward:l,scroll:Mo()});r(u.current,u,!0);const h=oe({},ku(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Jv(t){t=Bv(t);const e=Qv(t),n=Gv(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=oe({location:"",base:t,go:s,createHref:jv.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Yv(t){return typeof t=="string"||t&&typeof t=="object"}function Jd(t){return typeof t=="string"||typeof t=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yd=Symbol("");var Ru;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ru||(Ru={}));function Cs(t,e){return oe(new Error,{type:t,[Yd]:!0},e)}function Wt(t,e){return t instanceof Error&&Yd in t&&(e==null||!!(t.type&e))}const Pu="[^/]+?",Xv={sensitive:!1,strict:!1,start:!0,end:!0},Zv=/[.+*?^${}()[\]/\\]/g;function e0(t,e){const n=oe({},Xv,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const g=c[h];let y=40+(n.sensitive?.25:0);if(g.type===0)h||(i+="/"),i+=g.value.replace(Zv,"\\$&"),y+=40;else if(g.type===1){const{value:I,repeatable:C,optional:D,regexp:N}=g;r.push({name:I,repeatable:C,optional:D});const x=N||Pu;if(x!==Pu){y+=10;try{new RegExp(`(${x})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${I}" (${x}): `+L.message)}}let G=C?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(G=D&&c.length<2?`(?:/${G})`:"/"+G),D&&(G+="?"),i+=G,y+=20,D&&(y+=-8),C&&(y+=-20),x===".*"&&(y+=-50)}u.push(y)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const y=u[g]||"",I=r[g-1];h[I.name]=y&&I.repeatable?y.split("/"):y}return h}function l(c){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const y of g)if(y.type===0)u+=y.value;else if(y.type===1){const{value:I,repeatable:C,optional:D}=y,N=I in c?c[I]:"";if(Ct(N)&&!C)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const x=Ct(N)?N.join("/"):N;if(!x)if(D)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${I}"`);u+=x}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function t0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function n0(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=t0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ou(s))return 1;if(Ou(i))return-1}return i.length-s.length}function Ou(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const s0={type:0,value:""},i0=/[a-zA-Z0-9_]/;function r0(t){if(!t)return[[]];if(t==="/")return[[s0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${c}": ${y}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function g(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):g();break;case 4:g(),n=s;break;case 1:l==="("?n=2:i0.test(l)?g():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function o0(t,e,n){const s=e0(r0(t.path),n),i=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function a0(t,e){const n=[],s=new Map;e=Mu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,g){const y=!g,I=l0(u);I.aliasOf=g&&g.record;const C=Mu(e,u),D=[I];if("alias"in u){const G=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of G)D.push(oe({},I,{components:g?g.record.components:I.components,path:L,aliasOf:g?g.record:I}))}let N,x;for(const G of D){const{path:L}=G;if(h&&L[0]!=="/"){const we=h.record.path,ye=we[we.length-1]==="/"?"":"/";G.path=h.record.path+(L&&ye+L)}if(N=o0(G,h,C),g?g.alias.push(N):(x=x||N,x!==N&&x.alias.push(N),y&&u.name&&!Nu(N)&&o(u.name)),I.children){const we=I.children;for(let ye=0;ye<we.length;ye++)r(we[ye],N,g&&g.children[ye])}g=g||N,(N.record.components&&Object.keys(N.record.components).length||N.record.name||N.record.redirect)&&l(N)}return x?()=>{o(x)}:ci}function o(u){if(Jd(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&n0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Xd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Nu(u)&&s.set(u.record.name,u)}function c(u,h){let g,y={},I,C;if("name"in u&&u.name){if(g=s.get(u.name),!g)throw Cs(1,{location:u});C=g.record.name,y=oe(Du(h.params,g.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Du(u.params,g.keys.map(x=>x.name))),I=g.stringify(y)}else if("path"in u)I=u.path,g=n.find(x=>x.re.test(I)),g&&(y=g.parse(I),C=g.record.name);else{if(g=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!g)throw Cs(1,{location:u,currentLocation:h});C=g.record.name,y=oe({},h.params,u.params),I=g.stringify(y)}const D=[];let N=g;for(;N;)D.unshift(N.record),N=N.parent;return{name:C,path:I,params:y,matched:D,meta:u0(D)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Du(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function l0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:c0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function c0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Nu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function u0(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function Mu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Xd(t,e){return e.children.some(n=>n===t||Xd(t,n))}const Zd=/#/g,h0=/&/g,d0=/\//g,f0=/=/g,p0=/\?/g,ef=/\+/g,g0=/%5B/g,m0=/%5D/g,tf=/%5E/g,y0=/%60/g,nf=/%7B/g,v0=/%7C/g,sf=/%7D/g,_0=/%20/g;function ql(t){return encodeURI(""+t).replace(v0,"|").replace(g0,"[").replace(m0,"]")}function w0(t){return ql(t).replace(nf,"{").replace(sf,"}").replace(tf,"^")}function Xa(t){return ql(t).replace(ef,"%2B").replace(_0,"+").replace(Zd,"%23").replace(h0,"%26").replace(y0,"`").replace(nf,"{").replace(sf,"}").replace(tf,"^")}function E0(t){return Xa(t).replace(f0,"%3D")}function b0(t){return ql(t).replace(Zd,"%23").replace(p0,"%3F")}function I0(t){return t==null?"":b0(t).replace(d0,"%2F")}function Wr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function T0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ef," "),o=r.indexOf("="),a=Wr(o<0?r:r.slice(0,o)),l=o<0?null:Wr(r.slice(o+1));if(a in e){let c=e[a];Ct(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function xu(t){let e="";for(let n in t){const s=t[n];if(n=E0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ct(s)?s.map(r=>r&&Xa(r)):[s&&Xa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function A0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ct(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const S0=Symbol(""),Lu=Symbol(""),xo=Symbol(""),rf=Symbol(""),Za=Symbol("");function Xs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function hn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Cs(4,{from:n,to:e})):h instanceof Error?a(h):Yv(h)?a(Cs(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function ma(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(C0(a)){const c=(a.__vccOpts||a)[e];c&&i.push(hn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Nv(c)?c.default:c;r.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&hn(g,n,s,r,o)()}))}}return i}function C0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Uu(t){const e=Ft(xo),n=Ft(rf),s=gt(()=>e.resolve(gs(t.to))),i=gt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(Ss.bind(null,u));if(g>-1)return g;const y=Fu(l[c-2]);return c>1&&Fu(u)===y&&h[h.length-1].path!==y?h.findIndex(Ss.bind(null,l[c-2])):g}),r=gt(()=>i.value>-1&&O0(n.params,s.value.params)),o=gt(()=>i.value>-1&&i.value===n.matched.length-1&&Gd(n.params,s.value.params));function a(l={}){return P0(l)?e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(ci):Promise.resolve()}return{route:s,href:gt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const k0=Rd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uu,setup(t,{slots:e}){const n=qi(Uu(t)),{options:s}=Ft(xo),i=gt(()=>({[$u(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[$u(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Wd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),R0=k0;function P0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function O0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ct(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Fu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $u=(t,e,n)=>t??e??n,D0=Rd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ft(Za),i=gt(()=>t.route||s.value),r=Ft(Lu,0),o=gt(()=>{let c=gs(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=gt(()=>i.value.matched[o.value]);Or(Lu,gt(()=>o.value+1)),Or(S0,a),Or(Za,i);const l=vd();return Rr(()=>[l.value,a.value,t.name],([c,u,h],[g,y,I])=>{u&&(u.instances[h]=c,y&&y!==u&&c&&c===g&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),c&&u&&(!y||!Ss(u,y)||!g)&&(u.enterCallbacks[h]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,g=h&&h.components[u];if(!g)return Bu(n.default,{Component:g,route:c});const y=h.props[u],I=y?y===!0?c.params:typeof y=="function"?y(c):y:null,D=Wd(g,oe({},I,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Bu(n.default,{Component:D,route:c})||D}}});function Bu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const N0=D0;function M0(t){const e=a0(t.routes,t),n=t.parseQuery||T0,s=t.stringifyQuery||xu,i=t.history,r=Xs(),o=Xs(),a=Xs(),l=Qm(ln);let c=ln;ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pa.bind(null,_=>""+_),h=pa.bind(null,I0),g=pa.bind(null,Wr);function y(_,M){let R,F;return Jd(_)?(R=e.getRecordMatcher(_),F=M):F=_,e.addRoute(F,R)}function I(_){const M=e.getRecordMatcher(_);M&&e.removeRoute(M)}function C(){return e.getRoutes().map(_=>_.record)}function D(_){return!!e.getRecordMatcher(_)}function N(_,M){if(M=oe({},M||l.value),typeof _=="string"){const m=ga(n,_,M.path),v=e.resolve({path:m.path},M),w=i.createHref(m.fullPath);return oe(m,v,{params:g(v.params),hash:Wr(m.hash),redirectedFrom:void 0,href:w})}let R;if("path"in _)R=oe({},_,{path:ga(n,_.path,M.path).path});else{const m=oe({},_.params);for(const v in m)m[v]==null&&delete m[v];R=oe({},_,{params:h(m)}),M.params=h(M.params)}const F=e.resolve(R,M),ie=_.hash||"";F.params=u(g(F.params));const d=Lv(s,oe({},_,{hash:w0(ie),path:F.path})),p=i.createHref(d);return oe({fullPath:d,hash:ie,query:s===xu?A0(_.query):_.query||{}},F,{redirectedFrom:void 0,href:p})}function x(_){return typeof _=="string"?ga(n,_,l.value.path):oe({},_)}function G(_,M){if(c!==_)return Cs(8,{from:M,to:_})}function L(_){return He(_)}function we(_){return L(oe(x(_),{replace:!0}))}function ye(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:R}=M;let F=typeof R=="function"?R(_):R;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=x(F):{path:F},F.params={}),oe({query:_.query,hash:_.hash,params:"path"in F?{}:_.params},F)}}function He(_,M){const R=c=N(_),F=l.value,ie=_.state,d=_.force,p=_.replace===!0,m=ye(R);if(m)return He(oe(x(m),{state:typeof m=="object"?oe({},ie,m.state):ie,force:d,replace:p}),M||R);const v=R;v.redirectedFrom=M;let w;return!d&&Uv(s,F,R)&&(w=Cs(16,{to:v,from:F}),Pt(F,F,!0,!1)),(w?Promise.resolve(w):pt(v,F)).catch(E=>Wt(E)?Wt(E,2)?E:on(E):se(E,v,F)).then(E=>{if(E){if(Wt(E,2))return He(oe({replace:p},x(E.to),{state:typeof E.to=="object"?oe({},ie,E.to.state):ie,force:d}),M||v)}else E=kn(v,F,!0,p,ie);return rn(v,F,E),E})}function ut(_,M){const R=G(_,M);return R?Promise.reject(R):Promise.resolve()}function ht(_){const M=is.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(_):_()}function pt(_,M){let R;const[F,ie,d]=x0(_,M);R=ma(F.reverse(),"beforeRouteLeave",_,M);for(const m of F)m.leaveGuards.forEach(v=>{R.push(hn(v,_,M))});const p=ut.bind(null,_,M);return R.push(p),qe(R).then(()=>{R=[];for(const m of r.list())R.push(hn(m,_,M));return R.push(p),qe(R)}).then(()=>{R=ma(ie,"beforeRouteUpdate",_,M);for(const m of ie)m.updateGuards.forEach(v=>{R.push(hn(v,_,M))});return R.push(p),qe(R)}).then(()=>{R=[];for(const m of _.matched)if(m.beforeEnter&&!M.matched.includes(m))if(Ct(m.beforeEnter))for(const v of m.beforeEnter)R.push(hn(v,_,M));else R.push(hn(m.beforeEnter,_,M));return R.push(p),qe(R)}).then(()=>(_.matched.forEach(m=>m.enterCallbacks={}),R=ma(d,"beforeRouteEnter",_,M),R.push(p),qe(R))).then(()=>{R=[];for(const m of o.list())R.push(hn(m,_,M));return R.push(p),qe(R)}).catch(m=>Wt(m,8)?m:Promise.reject(m))}function rn(_,M,R){for(const F of a.list())ht(()=>F(_,M,R))}function kn(_,M,R,F,ie){const d=G(_,M);if(d)return d;const p=M===ln,m=ls?history.state:{};R&&(F||p?i.replace(_.fullPath,oe({scroll:p&&m&&m.scroll},ie)):i.push(_.fullPath,ie)),l.value=_,Pt(_,M,R,p),on()}let Rt;function Qs(){Rt||(Rt=i.listen((_,M,R)=>{if(!ur.listening)return;const F=N(_),ie=ye(F);if(ie){He(oe(ie,{replace:!0}),F).catch(ci);return}c=F;const d=l.value;ls&&Kv(Cu(d.fullPath,R.delta),Mo()),pt(F,d).catch(p=>Wt(p,12)?p:Wt(p,2)?(He(p.to,F).then(m=>{Wt(m,20)&&!R.delta&&R.type===Ai.pop&&i.go(-1,!1)}).catch(ci),Promise.reject()):(R.delta&&i.go(-R.delta,!1),se(p,F,d))).then(p=>{p=p||kn(F,d,!1),p&&(R.delta&&!Wt(p,8)?i.go(-R.delta,!1):R.type===Ai.pop&&Wt(p,20)&&i.go(-1,!1)),rn(F,d,p)}).catch(ci)}))}let ns=Xs(),Re=Xs(),ce;function se(_,M,R){on(_);const F=Re.list();return F.length?F.forEach(ie=>ie(_,M,R)):console.error(_),Promise.reject(_)}function zt(){return ce&&l.value!==ln?Promise.resolve():new Promise((_,M)=>{ns.add([_,M])})}function on(_){return ce||(ce=!_,Qs(),ns.list().forEach(([M,R])=>_?R(_):M()),ns.reset()),_}function Pt(_,M,R,F){const{scrollBehavior:ie}=t;if(!ls||!ie)return Promise.resolve();const d=!R&&zv(Cu(_.fullPath,0))||(F||!R)&&history.state&&history.state.scroll||null;return bd().then(()=>ie(_,M,d)).then(p=>p&&qv(p)).catch(p=>se(p,_,M))}const it=_=>i.go(_);let ss;const is=new Set,ur={currentRoute:l,listening:!0,addRoute:y,removeRoute:I,hasRoute:D,getRoutes:C,resolve:N,options:t,push:L,replace:we,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Re.add,isReady:zt,install(_){const M=this;_.component("RouterLink",R0),_.component("RouterView",N0),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(l)}),ls&&!ss&&l.value===ln&&(ss=!0,L(i.location).catch(ie=>{}));const R={};for(const ie in ln)R[ie]=gt(()=>l.value[ie]);_.provide(xo,M),_.provide(rf,qi(R)),_.provide(Za,l);const F=_.unmount;is.add(_),_.unmount=function(){is.delete(_),is.size<1&&(c=ln,Rt&&Rt(),Rt=null,l.value=ln,ss=!1,ce=!1),F()}}};function qe(_){return _.reduce((M,R)=>M.then(()=>ht(R)),Promise.resolve())}return ur}function x0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ss(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ss(c,l))||i.push(l))}return[n,s,i]}function L0(){return Ft(xo)}/**
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
 */const of=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},U0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},af={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let g=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(g=64)),s.push(n[u],n[h],n[g],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(of(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):U0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new F0;const g=r<<2|a>>4;if(s.push(g),c!==64){const y=a<<4&240|c>>2;if(s.push(y),h!==64){const I=c<<6&192|h;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class F0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $0=function(t){const e=of(t);return af.encodeByteArray(e,!0)},Gr=function(t){return $0(t).replace(/\./g,"")},lf=function(t){try{return af.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function B0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const V0=()=>B0().__FIREBASE_DEFAULTS__,j0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},H0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lf(t[1]);return e&&JSON.parse(e)},Kl=()=>{try{return V0()||j0()||H0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cf=t=>{var e,n;return(n=(e=Kl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},q0=t=>{const e=cf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},uf=()=>{var t;return(t=Kl())===null||t===void 0?void 0:t.config},hf=t=>{var e;return(e=Kl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class K0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function z0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gr(JSON.stringify(n)),Gr(JSON.stringify(o)),a].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function W0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function G0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Q0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J0(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y0(){try{return typeof indexedDB=="object"}catch{return!1}}function X0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Z0="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Z0,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?e_(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sn(i,a,s)}}function e_(t,e){return t.replace(t_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const t_=/\{\$([^}]+)}/g;function n_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Vu(r)&&Vu(o)){if(!Qr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Vu(t){return t!==null&&typeof t=="object"}/**
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
 */function zi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function si(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function s_(t,e){const n=new i_(t,e);return n.subscribe.bind(n)}class i_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");r_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ya),i.error===void 0&&(i.error=ya),i.complete===void 0&&(i.complete=ya);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ya(){}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const On="[DEFAULT]";/**
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
 */class o_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new K0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l_(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:a_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a_(t){return t===On?void 0:t}function l_(t){return t.instantiationMode==="EAGER"}/**
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
 */class c_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new o_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const u_={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},h_=ee.INFO,d_={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},f_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=d_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zl{constructor(e){this.name=e,this._logLevel=h_,this._logHandler=f_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const p_=(t,e)=>e.some(n=>t instanceof n);let ju,Hu;function g_(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m_(){return Hu||(Hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const df=new WeakMap,el=new WeakMap,ff=new WeakMap,va=new WeakMap,Wl=new WeakMap;function y_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(vn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&df.set(n,t)}).catch(()=>{}),Wl.set(e,t),e}function v_(t){if(el.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});el.set(t,e)}let tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return el.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ff.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function __(t){tl=t(tl)}function w_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_a(this),e,...n);return ff.set(s,e.sort?e.sort():[e]),vn(s)}:m_().includes(t)?function(...e){return t.apply(_a(this),e),vn(df.get(this))}:function(...e){return vn(t.apply(_a(this),e))}}function E_(t){return typeof t=="function"?w_(t):(t instanceof IDBTransaction&&v_(t),p_(t,g_())?new Proxy(t,tl):t)}function vn(t){if(t instanceof IDBRequest)return y_(t);if(va.has(t))return va.get(t);const e=E_(t);return e!==t&&(va.set(t,e),Wl.set(e,t)),e}const _a=t=>Wl.get(t);function b_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=vn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(vn(o.result),l.oldVersion,l.newVersion,vn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const I_=["get","getKey","getAll","getAllKeys","count"],T_=["put","add","delete","clear"],wa=new Map;function qu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wa.get(e))return wa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=T_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||I_.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return wa.set(e,r),r}__(t=>({...t,get:(e,n,s)=>qu(e,n)||t.get(e,n,s),has:(e,n)=>!!qu(e,n)||t.has(e,n)}));/**
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
 */class A_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function S_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nl="@firebase/app",Ku="0.9.13";/**
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
 */const zn=new zl("@firebase/app"),C_="@firebase/app-compat",k_="@firebase/analytics-compat",R_="@firebase/analytics",P_="@firebase/app-check-compat",O_="@firebase/app-check",D_="@firebase/auth",N_="@firebase/auth-compat",M_="@firebase/database",x_="@firebase/database-compat",L_="@firebase/functions",U_="@firebase/functions-compat",F_="@firebase/installations",$_="@firebase/installations-compat",B_="@firebase/messaging",V_="@firebase/messaging-compat",j_="@firebase/performance",H_="@firebase/performance-compat",q_="@firebase/remote-config",K_="@firebase/remote-config-compat",z_="@firebase/storage",W_="@firebase/storage-compat",G_="@firebase/firestore",Q_="@firebase/firestore-compat",J_="firebase",Y_="9.23.0";/**
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
 */const sl="[DEFAULT]",X_={[nl]:"fire-core",[C_]:"fire-core-compat",[R_]:"fire-analytics",[k_]:"fire-analytics-compat",[O_]:"fire-app-check",[P_]:"fire-app-check-compat",[D_]:"fire-auth",[N_]:"fire-auth-compat",[M_]:"fire-rtdb",[x_]:"fire-rtdb-compat",[L_]:"fire-fn",[U_]:"fire-fn-compat",[F_]:"fire-iid",[$_]:"fire-iid-compat",[B_]:"fire-fcm",[V_]:"fire-fcm-compat",[j_]:"fire-perf",[H_]:"fire-perf-compat",[q_]:"fire-rc",[K_]:"fire-rc-compat",[z_]:"fire-gcs",[W_]:"fire-gcs-compat",[G_]:"fire-fst",[Q_]:"fire-fst-compat","fire-js":"fire-js",[J_]:"fire-js-all"};/**
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
 */const Jr=new Map,il=new Map;function Z_(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ks(t){const e=t.name;if(il.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;il.set(e,t);for(const n of Jr.values())Z_(n,t);return!0}function Gl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ew={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_n=new Ki("app","Firebase",ew);/**
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
 */class tw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=Y_;function pf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:sl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw _n.create("bad-app-name",{appName:String(i)});if(n||(n=uf()),!n)throw _n.create("no-options");const r=Jr.get(i);if(r){if(Qr(n,r.options)&&Qr(s,r.config))return r;throw _n.create("duplicate-app",{appName:i})}const o=new c_(i);for(const l of il.values())o.addComponent(l);const a=new tw(n,s,o);return Jr.set(i,a),a}function gf(t=sl){const e=Jr.get(t);if(!e&&t===sl&&uf())return pf();if(!e)throw _n.create("no-app",{appName:t});return e}function wn(t,e,n){var s;let i=(s=X_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(a.join(" "));return}ks(new Kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const nw="firebase-heartbeat-database",sw=1,Si="firebase-heartbeat-store";let Ea=null;function mf(){return Ea||(Ea=b_(nw,sw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Si)}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),Ea}async function iw(t){try{return await(await mf()).transaction(Si).objectStore(Si).get(yf(t))}catch(e){if(e instanceof sn)zn.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function zu(t,e){try{const s=(await mf()).transaction(Si,"readwrite");await s.objectStore(Si).put(e,yf(t)),await s.done}catch(n){if(n instanceof sn)zn.warn(n.message);else{const s=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(s.message)}}}function yf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rw=1024,ow=30*24*60*60*1e3;class aw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ow}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wu(),{heartbeatsToSend:n,unsentEntries:s}=lw(this._heartbeatsCache.heartbeats),i=Gr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wu(){return new Date().toISOString().substring(0,10)}function lw(t,e=rw){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Gu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y0()?X0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gu(t){return Gr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uw(t){ks(new Kn("platform-logger",e=>new A_(e),"PRIVATE")),ks(new Kn("heartbeat",e=>new aw(e),"PRIVATE")),wn(nl,Ku,t),wn(nl,Ku,"esm2017"),wn("fire-js","")}uw("");function Ql(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function vf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hw=vf,_f=new Ki("auth","Firebase",vf());/**
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
 */const Yr=new zl("@firebase/auth");function dw(t,...e){Yr.logLevel<=ee.WARN&&Yr.warn(`Auth (${Vs}): ${t}`,...e)}function Mr(t,...e){Yr.logLevel<=ee.ERROR&&Yr.error(`Auth (${Vs}): ${t}`,...e)}/**
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
 */function kt(t,...e){throw Jl(t,...e)}function $t(t,...e){return Jl(t,...e)}function fw(t,e,n){const s=Object.assign(Object.assign({},hw()),{[e]:n});return new Ki("auth","Firebase",s).create(e,{appName:t.name})}function Jl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return _f.create(t,...e)}function q(t,e,...n){if(!t)throw Jl(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mr(e),new Error(e)}function Zt(t,e){t||Qt(e)}/**
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
 */function rl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pw(){return Qu()==="http:"||Qu()==="https:"}function Qu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pw()||G0()||"connection"in navigator)?navigator.onLine:!0}function mw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=W0()||Q0()}get(){return gw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yl(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vw=new Wi(3e4,6e4);function js(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,s,i={}){return Ef(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=zi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),wf.fetch()(bf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ef(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},yw),e);try{const i=new _w(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw yr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw yr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fw(t,u,c);kt(t,u)}}catch(i){if(i instanceof sn)throw i;kt(t,"network-request-failed",{message:String(i)})}}async function Gi(t,e,n,s,i={}){const r=await Zn(t,e,n,s,i);return"mfaPendingCredential"in r&&kt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function bf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Yl(t.config,i):`${t.config.apiScheme}://${i}`}class _w{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s($t(this.auth,"network-request-failed")),vw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=$t(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function ww(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function Ew(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bw(t,e=!1){const n=at(t),s=await n.getIdToken(e),i=Xl(s);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:hi(ba(i.auth_time)),issuedAtTime:hi(ba(i.iat)),expirationTime:hi(ba(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ba(t){return Number(t)*1e3}function Xl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Mr("JWT malformed, contained fewer than 3 sections"),null;try{const i=lf(n);return i?JSON.parse(i):(Mr("Failed to decode base64 JWT payload"),null)}catch(i){return Mr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Iw(t){const e=Xl(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sn&&Tw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Tw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class If{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hi(this.lastLoginAt),this.creationTime=hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Rs(t,Ew(n,{idToken:s}));q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?kw(r.providerUserInfo):[],a=Cw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new If(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Sw(t){const e=at(t);await Xr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function kw(t){return t.map(e=>{var{providerId:n}=e,s=Ql(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Rw(t,e){const n=await Ef(t,{},async()=>{const s=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=bf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Rw(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ci;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ci,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function cn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ql(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Aw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new If(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bw(this,e)}reload(){return Sw(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Xr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rs(this,ww(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:G,emailVerified:L,isAnonymous:we,providerData:ye,stsTokenManager:He}=n;q(G&&He,e,"internal-error");const ut=Ci.fromJSON(this.name,He);q(typeof G=="string",e,"internal-error"),cn(h,e.name),cn(g,e.name),q(typeof L=="boolean",e,"internal-error"),q(typeof we=="boolean",e,"internal-error"),cn(y,e.name),cn(I,e.name),cn(C,e.name),cn(D,e.name),cn(N,e.name),cn(x,e.name);const ht=new Vn({uid:G,auth:e,email:g,emailVerified:L,displayName:h,isAnonymous:we,photoURL:I,phoneNumber:y,tenantId:C,stsTokenManager:ut,createdAt:N,lastLoginAt:x});return ye&&Array.isArray(ye)&&(ht.providerData=ye.map(pt=>Object.assign({},pt))),D&&(ht._redirectEventId=D),ht}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ci;i.updateFromServerResponse(n);const r=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Xr(r),r}}/**
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
 */const Ju=new Map;function Jt(t){Zt(t instanceof Function,"Expected a class definition");let e=Ju.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ju.set(t,e),e)}/**
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
 */class Tf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tf.type="NONE";const Yu=Tf;/**
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
 */function xr(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=xr(this.userKey,i.apiKey,r),this.fullPersistenceKey=xr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ys(Jt(Yu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Jt(Yu);const o=xr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Vn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ys(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ys(r,e,s))}}/**
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
 */function Xu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Af(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rf(e))return"Blackberry";if(Pf(e))return"Webos";if(Zl(e))return"Safari";if((e.includes("chrome/")||Sf(e))&&!e.includes("edge/"))return"Chrome";if(kf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Af(t=et()){return/firefox\//i.test(t)}function Zl(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sf(t=et()){return/crios\//i.test(t)}function Cf(t=et()){return/iemobile/i.test(t)}function kf(t=et()){return/android/i.test(t)}function Rf(t=et()){return/blackberry/i.test(t)}function Pf(t=et()){return/webos/i.test(t)}function Lo(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pw(t=et()){var e;return Lo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ow(){return J0()&&document.documentMode===10}function Of(t=et()){return Lo(t)||kf(t)||Pf(t)||Rf(t)||/windows phone/i.test(t)||Cf(t)}function Dw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Df(t,e=[]){let n;switch(t){case"Browser":n=Xu(et());break;case"Worker":n=`${Xu(et())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${s}`}async function Nf(t,e){return Zn(t,"GET","/v2/recaptchaConfig",js(t,e))}function Zu(t){return t!==void 0&&t.enterprise!==void 0}class Mf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Nw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xf(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=$t("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Nw().appendChild(s)})}function Mw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xw="https://www.google.com/recaptcha/enterprise.js?render=",Lw="recaptcha-enterprise",Uw="NO_RECAPTCHA";class Lf{constructor(e){this.type=Lw,this.auth=Hs(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Nf(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Mf(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Zu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Uw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Zu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xf(xw+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Zr(t,e,n,s=!1){const i=new Lf(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class $w{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eh(this),this.idTokenSubscription=new eh(this),this.beforeStateQueue=new Fw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?at(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}async initializeRecaptchaConfig(){const e=await Nf(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Mf(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Lf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ki("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Df(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hs(t){return at(t)}class eh{constructor(e){this.auth=e,this.observer=null,this.addObserver=s_(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Bw(t,e){const n=Gl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Qr(r,e??{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function Vw(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function jw(t,e,n){const s=Hs(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Uf(e),{host:o,port:a}=Hw(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qw()}function Uf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hw(t){const e=Uf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:th(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:th(o)}}}function th(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ec{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function Kw(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ia(t,e){return Gi(t,"POST","/v1/accounts:signInWithPassword",js(t,e))}/**
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
 */async function zw(t,e){return Gi(t,"POST","/v1/accounts:signInWithEmailLink",js(t,e))}async function Ww(t,e){return Gi(t,"POST","/v1/accounts:signInWithEmailLink",js(t,e))}/**
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
 */class ki extends ec{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ki(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ki(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Zr(e,s,"signInWithPassword");return Ia(e,i)}else return Ia(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Zr(e,s,"signInWithPassword");return Ia(e,r)}else return Promise.reject(i)});case"emailLink":return zw(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Kw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ww(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vs(t,e){return Gi(t,"POST","/v1/accounts:signInWithIdp",js(t,e))}/**
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
 */const Gw="http://localhost";class Wn extends ec{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ql(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Wn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,vs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:Gw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
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
 */function Qw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jw(t){const e=si(ii(t)).link,n=e?si(ii(e)).deep_link_id:null,s=si(ii(t)).deep_link_id;return(s?si(ii(s)).link:null)||s||n||e||t}class tc{constructor(e){var n,s,i,r,o,a;const l=si(ii(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=Qw((i=l.mode)!==null&&i!==void 0?i:null);q(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Jw(e);try{return new tc(n)}catch{return null}}}/**
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
 */class qs{constructor(){this.providerId=qs.PROVIDER_ID}static credential(e,n){return ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=tc.parseLink(n);return q(s,"argument-error"),ki._fromEmailAndCode(e,s.code,s.tenantId)}}qs.PROVIDER_ID="password";qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qi extends Ff{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends Qi{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class fn extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return fn.credential(n,s)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
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
 */class pn extends Qi{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
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
 */class gn extends Qi{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */async function Ta(t,e){return Gi(t,"POST","/v1/accounts:signUp",js(t,e))}/**
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
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Vn._fromIdTokenResponse(e,s,i),o=nh(s);return new Gn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=nh(s);return new Gn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function nh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class eo extends sn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,eo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new eo(e,n,s,i)}}function $f(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?eo._fromErrorAndOperation(t,r,e,s):r})}async function Yw(t,e,n=!1){const s=await Rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gn._forOperation(t,"link",s)}/**
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
 */async function Xw(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Rs(t,$f(s,i,e,t),n);q(r.idToken,s,"internal-error");const o=Xl(r.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),Gn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&kt(s,"user-mismatch"),r}}/**
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
 */async function Bf(t,e,n=!1){const s="signIn",i=await $f(t,s,e),r=await Gn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Zw(t,e){return Bf(Hs(t),e)}async function eE(t,e,n){var s;const i=Hs(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const c=await Zr(i,r,"signUpPassword");o=Ta(i,c)}else o=Ta(i,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Zr(i,r,"signUpPassword");return Ta(i,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Gn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function tE(t,e,n){return Zw(at(t),qs.credential(e,n))}/**
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
 */async function nE(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function sE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=at(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Rs(s,nE(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function iE(t,e,n,s){return at(t).onIdTokenChanged(e,n,s)}function rE(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function oE(t){return at(t).signOut()}const to="__sak";/**
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
 */class Vf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(to,"1"),this.storage.removeItem(to),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function aE(){const t=et();return Zl(t)||Lo(t)}const lE=1e3,cE=10;class jf extends Vf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aE()&&Dw(),this.fallbackToPolling=Of(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Ow()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cE):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},lE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jf.type="LOCAL";const uE=jf;/**
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
 */class Uo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Uo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await hE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uo.receivers=[];/**
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
 */function nc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=nc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const g=h;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(g.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bt(){return window}function fE(t){Bt().location.href=t}/**
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
 */function Kf(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function pE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mE(){return Kf()?self:null}/**
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
 */const zf="firebaseLocalStorageDb",yE=1,no="firebaseLocalStorage",Wf="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fo(t,e){return t.transaction([no],e?"readwrite":"readonly").objectStore(no)}function vE(){const t=indexedDB.deleteDatabase(zf);return new Ji(t).toPromise()}function ol(){const t=indexedDB.open(zf,yE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(no,{keyPath:Wf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(no)?e(s):(s.close(),await vE(),e(await ol()))})})}async function sh(t,e,n){const s=Fo(t,!0).put({[Wf]:e,value:n});return new Ji(s).toPromise()}async function _E(t,e){const n=Fo(t,!1).get(e),s=await new Ji(n).toPromise();return s===void 0?null:s.value}function ih(t,e){const n=Fo(t,!0).delete(e);return new Ji(n).toPromise()}const wE=800,EE=3;class Gf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ol(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>EE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uo._getInstance(mE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pE(),!this.activeServiceWorker)return;this.sender=new dE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ol();return await sh(e,to,"1"),await ih(e,to),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>_E(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ih(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Fo(i,!1).getAll();return new Ji(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gf.type="LOCAL";const bE=Gf;new Wi(3e4,6e4);/**
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
 */function IE(t,e){return e?Jt(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sc extends ec{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TE(t){return Bf(t.auth,new sc(t),t.bypassAuthState)}function AE(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Xw(n,new sc(t),t.bypassAuthState)}async function SE(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Yw(n,new sc(t),t.bypassAuthState)}/**
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
 */class Qf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TE;case"linkViaPopup":case"linkViaRedirect":return SE;case"reauthViaPopup":case"reauthViaRedirect":return AE;default:kt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CE=new Wi(2e3,1e4);class us extends Qf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CE.get())};e()}}us.currentPopupAction=null;/**
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
 */const kE="pendingRedirect",Lr=new Map;class RE extends Qf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Lr.get(this.auth._key());if(!e){try{const s=await PE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Lr.set(this.auth._key(),e)}return this.bypassAuthState||Lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PE(t,e){const n=NE(e),s=DE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function OE(t,e){Lr.set(t._key(),e)}function DE(t){return Jt(t._redirectPersistence)}function NE(t){return xr(kE,t.config.apiKey,t.name)}async function ME(t,e,n=!1){const s=Hs(t),i=IE(s,e),o=await new RE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const xE=10*60*1e3;class LE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Jf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError($t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xE&&this.cachedEventUids.clear(),this.cachedEventUids.has(rh(e))}saveEventToCache(e){this.cachedEventUids.add(rh(e)),this.lastProcessedEventTime=Date.now()}}function rh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jf(t);default:return!1}}/**
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
 */async function FE(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
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
 */const $E=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BE=/^https?/;async function VE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FE(t);for(const n of e)try{if(jE(n))return}catch{}kt(t,"unauthorized-domain")}function jE(t){const e=rl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!BE.test(n))return!1;if($E.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const HE=new Wi(3e4,6e4);function oh(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qE(t){return new Promise((e,n)=>{var s,i,r;function o(){oh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oh(),n($t(t,"network-request-failed"))},timeout:HE.get()})}if(!((i=(s=Bt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Bt().gapi)===null||r===void 0)&&r.load)o();else{const a=Mw("iframefcb");return Bt()[a]=()=>{gapi.load?o():n($t(t,"network-request-failed"))},xf(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ur=null,e})}let Ur=null;function KE(t){return Ur=Ur||qE(t),Ur}/**
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
 */const zE=new Wi(5e3,15e3),WE="__/auth/iframe",GE="emulator/auth/iframe",QE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YE(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yl(e,GE):`https://${t.config.authDomain}/${WE}`,s={apiKey:e.apiKey,appName:t.name,v:Vs},i=JE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${zi(s).slice(1)}`}async function XE(t){const e=await KE(t),n=Bt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:YE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=$t(t,"network-request-failed"),a=Bt().setTimeout(()=>{r(o)},zE.get());function l(){Bt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ZE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},e1=500,t1=600,n1="_blank",s1="http://localhost";class ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function i1(t,e,n,s=e1,i=t1){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=et().toLowerCase();n&&(a=Sf(c)?n1:n),Af(c)&&(e=e||s1,l.scrollbars="yes");const u=Object.entries(l).reduce((g,[y,I])=>`${g}${y}=${I},`,"");if(Pw(c)&&a!=="_self")return r1(e||"",a),new ah(null);const h=window.open(e||"",a,u);q(h,t,"popup-blocked");try{h.focus()}catch{}return new ah(h)}function r1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const o1="__/auth/handler",a1="emulator/auth/handler",l1=encodeURIComponent("fac");async function lh(t,e,n,s,i,r){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vs,eventId:i};if(e instanceof Ff){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",n_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Qi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${l1}=${encodeURIComponent(l)}`:"";return`${c1(t)}?${zi(a).slice(1)}${c}`}function c1({config:t}){return t.emulator?Yl(t,a1):`https://${t.authDomain}/${o1}`}/**
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
 */const Aa="webStorageSupport";class u1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qf,this._completeRedirectFn=ME,this._overrideRedirectResult=OE}async _openPopup(e,n,s,i){var r;Zt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await lh(e,n,s,rl(),i);return i1(e,o,nc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await lh(e,n,s,rl(),i);return fE(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await XE(e),s=new LE(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Aa,{type:Aa},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Aa];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Of()||Zl()||Lo()}}const h1=u1;var ch="@firebase/auth",uh="0.23.2";/**
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
 */function f1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function p1(t){ks(new Kn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Df(t)},c=new $w(s,i,r,l);return Vw(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ks(new Kn("auth-internal",e=>{const n=Hs(e.getProvider("auth").getImmediate());return(s=>new d1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(ch,uh,f1(t)),wn(ch,uh,"esm2017")}/**
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
 */const g1=5*60,m1=hf("authIdTokenMaxAge")||g1;let hh=null;const y1=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>m1)return;const i=n==null?void 0:n.token;hh!==i&&(hh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function v1(t=gf()){const e=Gl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bw(t,{popupRedirectResolver:h1,persistence:[bE,uE,qf]}),s=hf("authTokenSyncURL");if(s){const r=y1(s);rE(n,r,()=>r(n.currentUser)),iE(n,o=>r(o))}const i=cf("auth");return i&&jw(n,`http://${i}`),n}p1("Browser");var _1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,ic=ic||{},K=_1||self;function $o(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Yi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function w1(t){return Object.prototype.hasOwnProperty.call(t,Sa)&&t[Sa]||(t[Sa]=++E1)}var Sa="closure_uid_"+(1e9*Math.random()>>>0),E1=0;function b1(t,e,n){return t.call.apply(t.bind,arguments)}function I1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xe=b1:Xe=I1,Xe.apply(null,arguments)}function vr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Sn(){this.s=this.s,this.o=this.o}var T1=0;Sn.prototype.s=!1;Sn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),T1!=0)&&w1(this)};Sn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function rc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function dh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if($o(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var A1=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",()=>{},e),K.removeEventListener("test",()=>{},e)}catch{}return t}();function Ri(t){return/^[\s\xa0]*$/.test(t)}function Bo(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function xt(t){return Bo().indexOf(t)!=-1}function oc(t){return oc[" "](t),t}oc[" "]=function(){};function S1(t,e){var n=vb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var C1=xt("Opera"),Ps=xt("Trident")||xt("MSIE"),Xf=xt("Edge"),al=Xf||Ps,Zf=xt("Gecko")&&!(Bo().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge"))&&!(xt("Trident")||xt("MSIE"))&&!xt("Edge"),k1=Bo().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge");function ep(){var t=K.document;return t?t.documentMode:void 0}var ll;e:{var Ca="",ka=function(){var t=Bo();if(Zf)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xf)return/Edge\/([\d\.]+)/.exec(t);if(Ps)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(k1)return/WebKit\/(\S+)/.exec(t);if(C1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ka&&(Ca=ka?ka[1]:""),Ps){var Ra=ep();if(Ra!=null&&Ra>parseFloat(Ca)){ll=String(Ra);break e}}ll=Ca}var cl;if(K.document&&Ps){var fh=ep();cl=fh||parseInt(ll,10)||void 0}else cl=void 0;var R1=cl;function Pi(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Zf){e:{try{oc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:P1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pi.$.h.call(this)}}Le(Pi,Ze);var P1={2:"touch",3:"pen",4:"mouse"};Pi.prototype.h=function(){Pi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xi="closure_listenable_"+(1e6*Math.random()|0),O1=0;function D1(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++O1,this.fa=this.ia=!1}function Vo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ac(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function N1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function tp(t){const e={};for(const n in t)e[n]=t[n];return e}const ph="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function np(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ph.length;r++)n=ph[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function jo(t){this.src=t,this.g={},this.h=0}jo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=hl(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new D1(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function ul(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Yf(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Vo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var lc="closure_lm_"+(1e6*Math.random()|0),Pa={};function sp(t,e,n,s,i){if(s&&s.once)return rp(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)sp(t,e[r],n,s,i);return null}return n=hc(n),t&&t[Xi]?t.O(e,n,Yi(s)?!!s.capture:!!s,i):ip(t,e,n,!1,s,i)}function ip(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Yi(i)?!!i.capture:!!i,a=uc(t);if(a||(t[lc]=a=new jo(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=M1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)A1||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(ap(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function M1(){function t(n){return e.call(t.src,t.listener,n)}const e=x1;return t}function rp(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)rp(t,e[r],n,s,i);return null}return n=hc(n),t&&t[Xi]?t.P(e,n,Yi(s)?!!s.capture:!!s,i):ip(t,e,n,!0,s,i)}function op(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)op(t,e[r],n,s,i);else s=Yi(s)?!!s.capture:!!s,n=hc(n),t&&t[Xi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=hl(r,n,s,i),-1<n&&(Vo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=uc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hl(e,n,s,i)),(n=-1<t?e[t]:null)&&cc(n))}function cc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Xi])ul(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ap(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=uc(e))?(ul(n,t),n.h==0&&(n.src=null,e[lc]=null)):Vo(t)}}}function ap(t){return t in Pa?Pa[t]:Pa[t]="on"+t}function x1(t,e){if(t.fa)t=!0;else{e=new Pi(e,this);var n=t.listener,s=t.la||t.src;t.ia&&cc(t),t=n.call(s,e)}return t}function uc(t){return t=t[lc],t instanceof jo?t:null}var Oa="__closure_events_fn_"+(1e9*Math.random()>>>0);function hc(t){return typeof t=="function"?t:(t[Oa]||(t[Oa]=function(e){return t.handleEvent(e)}),t[Oa])}function Me(){Sn.call(this),this.i=new jo(this),this.S=this,this.J=null}Le(Me,Sn);Me.prototype[Xi]=!0;Me.prototype.removeEventListener=function(t,e,n,s){op(this,t,e,n,s)};function je(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var i=e;e=new Ze(s,t),np(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=_r(o,s,!0,e)&&i}if(o=e.g=t,i=_r(o,s,!0,e)&&i,i=_r(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=_r(o,s,!1,e)&&i}Me.prototype.N=function(){if(Me.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Vo(n[s]);delete t.g[e],t.h--}}this.J=null};Me.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Me.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function _r(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ul(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var dc=K.JSON.stringify;class L1{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function U1(){var t=fc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class F1{constructor(){this.h=this.g=null}add(e,n){const s=lp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var lp=new L1(()=>new $1,t=>t.reset());class $1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function B1(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function V1(t){K.setTimeout(()=>{throw t},0)}let Oi,Di=!1,fc=new F1,cp=()=>{const t=K.Promise.resolve(void 0);Oi=()=>{t.then(j1)}};var j1=()=>{for(var t;t=U1();){try{t.h.call(t.g)}catch(n){V1(n)}var e=lp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Di=!1};function Ho(t,e){Me.call(this),this.h=t||1,this.g=e||K,this.j=Xe(this.qb,this),this.l=Date.now()}Le(Ho,Me);P=Ho.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),je(this,"tick"),this.ga&&(pc(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Ho.$.N.call(this),pc(this),delete this.g};function gc(t,e,n){if(typeof t=="function")n&&(t=Xe(t,n));else if(t&&typeof t.handleEvent=="function")t=Xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function up(t){t.g=gc(()=>{t.g=null,t.i&&(t.i=!1,up(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class H1 extends Sn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:up(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ni(t){Sn.call(this),this.h=t,this.g={}}Le(Ni,Sn);var gh=[];function hp(t,e,n,s){Array.isArray(n)||(n&&(gh[0]=n.toString()),n=gh);for(var i=0;i<n.length;i++){var r=sp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function dp(t){ac(t.g,function(e,n){this.g.hasOwnProperty(n)&&cc(e)},t),t.g={}}Ni.prototype.N=function(){Ni.$.N.call(this),dp(this)};Ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qo(){this.g=!0}qo.prototype.Ea=function(){this.g=!1};function q1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function K1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function hs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+W1(t,n)+(s?" "+s:"")})}function z1(t,e){t.info(function(){return"TIMEOUT: "+e})}qo.prototype.info=function(){};function W1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return dc(n)}catch{return e}}var es={},mh=null;function Ko(){return mh=mh||new Me}es.Ta="serverreachability";function fp(t){Ze.call(this,es.Ta,t)}Le(fp,Ze);function Mi(t){const e=Ko();je(e,new fp(e))}es.STAT_EVENT="statevent";function pp(t,e){Ze.call(this,es.STAT_EVENT,t),this.stat=e}Le(pp,Ze);function nt(t){const e=Ko();je(e,new pp(e,t))}es.Ua="timingevent";function gp(t,e){Ze.call(this,es.Ua,t),this.size=e}Le(gp,Ze);function Zi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var zo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function mc(){}mc.prototype.h=null;function yh(t){return t.h||(t.h=t.i())}function yp(){}var er={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function yc(){Ze.call(this,"d")}Le(yc,Ze);function vc(){Ze.call(this,"c")}Le(vc,Ze);var dl;function Wo(){}Le(Wo,mc);Wo.prototype.g=function(){return new XMLHttpRequest};Wo.prototype.i=function(){return{}};dl=new Wo;function tr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Ni(this),this.P=G1,t=al?125:void 0,this.V=new Ho(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vp}function vp(){this.i=null,this.g="",this.h=!1}var G1=45e3,fl={},so={};P=tr.prototype;P.setTimeout=function(t){this.P=t};function pl(t,e,n){t.L=1,t.v=Qo(en(e)),t.s=n,t.S=!0,_p(t,null)}function _p(t,e){t.G=Date.now(),nr(t),t.A=en(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Cp(n.i,"t",s),t.C=0,n=t.l.J,t.h=new vp,t.g=Gp(t.l,n?e:null,!t.s),0<t.O&&(t.M=new H1(Xe(t.Pa,t,t.g),t.O)),hp(t.U,t.g,"readystatechange",t.nb),e=t.I?tp(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Mi(),q1(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&Lt(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const u=Lt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||al||this.g&&(this.h.h||this.g.ja()||Eh(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Mi(3):Mi(2)),Go(this);var n=this.g.da();this.ca=n;t:if(wp(this)){var s=Eh(this.g);t="";var i=s.length,r=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),di(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,K1(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ri(a)){var c=a;break t}}c=null}if(n=c)hs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gl(this,n);else{this.i=!1,this.o=3,nt(12),Ln(this),di(this);break e}}this.S?(Ep(this,u,o),al&&this.i&&u==3&&(hp(this.U,this.V,"tick",this.mb),this.V.start())):(hs(this.j,this.m,o,null),gl(this,o)),u==4&&Ln(this),this.i&&!this.J&&(u==4?qp(this.l,this):(this.i=!1,nr(this)))}else gb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Ln(this),di(this)}}}catch{}finally{}};function wp(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Ep(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=Q1(t,n),i==so){e==4&&(t.o=4,nt(14),s=!1),hs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==fl){t.o=4,nt(15),hs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else hs(t.j,t.m,i,null),gl(t,i);wp(t)&&i!=so&&i!=fl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Tc(e),e.M=!0,nt(11))):(hs(t.j,t.m,n,"[Invalid Chunked Response]"),Ln(t),di(t))}P.mb=function(){if(this.g){var t=Lt(this.g),e=this.g.ja();this.C<e.length&&(Go(this),Ep(this,t,e),this.i&&t!=4&&nr(this))}};function Q1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?so:(n=Number(e.substring(n,s)),isNaN(n)?fl:(s+=1,s+n>e.length?so:(e=e.slice(s,s+n),t.C=s+n,e)))}P.cancel=function(){this.J=!0,Ln(this)};function nr(t){t.Y=Date.now()+t.P,bp(t,t.P)}function bp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Zi(Xe(t.lb,t),e)}function Go(t){t.B&&(K.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(z1(this.j,this.A),this.L!=2&&(Mi(),nt(17)),Ln(this),this.o=2,di(this)):bp(this,this.Y-t)};function di(t){t.l.H==0||t.J||qp(t.l,t)}function Ln(t){Go(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,pc(t.V),dp(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function gl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ml(n.i,t))){if(!t.K&&ml(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)oo(n),Xo(n);else break e;Ic(n),nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Zi(Xe(n.ib,n),6e3));if(1>=Pp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Un(n,11)}else if((t.K||n.g==t)&&oo(n),!Ri(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=t.g;if(y){const I=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var r=s.i;r.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(_c(r,r.h),r.h=null))}if(s.F){const C=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(s.Da=C,ge(s.I,s.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Wp(s,s.J?s.pa:null,s.Y),o.K){Op(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Go(a),nr(a)),s.g=o}else jp(s);0<n.j.length&&Zo(n)}else c[0]!="stop"&&c[0]!="close"||Un(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Un(n,7):bc(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Mi(4)}catch{}}function J1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if($o(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Y1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if($o(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ip(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if($o(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Y1(t),s=J1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function X1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function jn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof jn){this.h=t.h,io(this,t.j),this.s=t.s,this.g=t.g,ro(this,t.m),this.l=t.l;var e=t.i,n=new xi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vh(this,n),this.o=t.o}else t&&(e=String(t).match(Tp))?(this.h=!1,io(this,e[1]||"",!0),this.s=ri(e[2]||""),this.g=ri(e[3]||"",!0),ro(this,e[4]),this.l=ri(e[5]||"",!0),vh(this,e[6]||"",!0),this.o=ri(e[7]||"")):(this.h=!1,this.i=new xi(null,this.h))}jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(oi(e,_h,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(oi(e,_h,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(oi(n,n.charAt(0)=="/"?tb:eb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",oi(n,sb)),t.join("")};function en(t){return new jn(t)}function io(t,e,n){t.j=n?ri(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ro(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vh(t,e,n){e instanceof xi?(t.i=e,ib(t.i,t.h)):(n||(e=oi(e,nb)),t.i=new xi(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function Qo(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ri(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function oi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Z1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Z1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _h=/[#\/\?@]/g,eb=/[#\?:]/g,tb=/[#\?]/g,nb=/[#\?@]/g,sb=/#/g;function xi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cn(t){t.g||(t.g=new Map,t.h=0,t.i&&X1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=xi.prototype;P.add=function(t,e){Cn(this),this.i=null,t=Ks(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ap(t,e){Cn(t),e=Ks(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sp(t,e){return Cn(t),e=Ks(t,e),t.g.has(e)}P.forEach=function(t,e){Cn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};P.ta=function(){Cn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};P.Z=function(t){Cn(this);let e=[];if(typeof t=="string")Sp(this,t)&&(e=e.concat(this.g.get(Ks(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Cn(this),this.i=null,t=Ks(this,t),Sp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Cp(t,e,n){Ap(t,e),0<n.length&&(t.i=null,t.g.set(Ks(t,e),rc(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ks(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ib(t,e){e&&!t.j&&(Cn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ap(this,s),Cp(this,i,n))},t)),t.j=e}var rb=class{constructor(t,e){this.g=t,this.map=e}};function kp(t){this.l=t||ob,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ob=10;function Rp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Pp(t){return t.h?1:t.g?t.g.size:0}function ml(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _c(t,e){t.g?t.g.add(e):t.h=e}function Op(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kp.prototype.cancel=function(){if(this.i=Dp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Dp(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return rc(t.i)}var ab=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function lb(){this.g=new ab}function cb(t,e,n){const s=n||"";try{Ip(t,function(i,r){let o=i;Yi(i)&&(o=dc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function ub(t,e){const n=new qo;if(K.Image){const s=new Image;s.onload=vr(wr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=vr(wr,n,s,"TestLoadImage: error",!1,e),s.onabort=vr(wr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=vr(wr,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function wr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function sr(t){this.l=t.fc||null,this.j=t.ob||!1}Le(sr,mc);sr.prototype.g=function(){return new Jo(this.l,this.j)};sr.prototype.i=function(t){return function(){return t}}({});function Jo(t,e){Me.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=wc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Jo,Me);var wc=0;P=Jo.prototype;P.open=function(t,e){if(this.readyState!=wc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Li(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ir(this)),this.readyState=wc};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Np(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Np(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ir(this):Li(this),this.readyState==3&&Np(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,ir(this))};P.Ya=function(t){this.g&&(this.response=t,ir(this))};P.ka=function(){this.g&&ir(this)};function ir(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Li(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Li(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hb=K.JSON.parse;function Ie(t){Me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Mp,this.L=this.M=!1}Le(Ie,Me);var Mp="",db=/^https?$/i,fb=["POST","PUT"];P=Ie.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dl.g(),this.C=this.u?yh(this.u):yh(dl),this.g.onreadystatechange=Xe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){wh(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=Yf(fb,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Up(this),0<this.B&&((this.L=pb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xe(this.ua,this)):this.A=gc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){wh(this,r)}};function pb(t){return Ps&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof ic<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function wh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xp(t),Yo(t)}function xp(t){t.F||(t.F=!0,je(t,"complete"),je(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),Yo(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yo(this,!0)),Ie.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?Lp(this):this.kb())};P.kb=function(){Lp(this)};function Lp(t){if(t.h&&typeof ic<"u"&&(!t.C[1]||Lt(t)!=4||t.da()!=2)){if(t.v&&Lt(t)==4)gc(t.La,0,t);else if(je(t,"readystatechange"),Lt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(Tp)[1]||null;!i&&K.self&&K.self.location&&(i=K.self.location.protocol.slice(0,-1)),s=!db.test(i?i.toLowerCase():"")}n=s}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var r=2<Lt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",xp(t)}}finally{Yo(t)}}}}function Yo(t,e){if(t.g){Up(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=s}catch{}}}function Up(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function Lt(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hb(e)}};function Eh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Mp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function gb(t){const e={};t=(t.g&&2<=Lt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Ri(t[s]))continue;var n=B1(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}N1(e,function(s){return s.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fp(t){let e="";return ac(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ec(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Fp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Zs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $p(t){this.Ga=0,this.j=[],this.l=new qo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Zs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Zs("baseRetryDelayMs",5e3,t),this.hb=Zs("retryDelaySeedMs",1e4,t),this.eb=Zs("forwardChannelMaxRetries",2,t),this.xa=Zs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new kp(t&&t.concurrentRequestLimit),this.Ja=new lb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=$p.prototype;P.ra=8;P.H=1;function bc(t){if(Bp(t),t.H==3){var e=t.W++,n=en(t.I);if(ge(n,"SID",t.K),ge(n,"RID",e),ge(n,"TYPE","terminate"),rr(t,n),e=new tr(t,t.l,e),e.L=2,e.v=Qo(en(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=Gp(e.l,null),e.g.ha(e.v)),e.G=Date.now(),nr(e)}zp(t)}function Xo(t){t.g&&(Tc(t),t.g.cancel(),t.g=null)}function Bp(t){Xo(t),t.u&&(K.clearTimeout(t.u),t.u=null),oo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Zo(t){if(!Rp(t.i)&&!t.m){t.m=!0;var e=t.Na;Oi||cp(),Di||(Oi(),Di=!0),fc.add(e,t),t.C=0}}function mb(t,e){return Pp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Zi(Xe(t.Na,t,e),Kp(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new tr(this,this.l,t);let r=this.s;if(this.U&&(r?(r=tp(r),np(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Vp(this,i,e),n=en(this.I),ge(n,"RID",t),ge(n,"CVER",22),this.F&&ge(n,"X-HTTP-Session-Id",this.F),rr(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Fp(r)))+"&"+e:this.o&&Ec(n,this.o,r)),_c(this.i,i),this.bb&&ge(n,"TYPE","init"),this.P?(ge(n,"$req",e),ge(n,"SID","null"),i.aa=!0,pl(i,n,null)):pl(i,n,e),this.H=2}}else this.H==3&&(t?bh(this,t):this.j.length==0||Rp(this.i)||bh(this))};function bh(t,e){var n;e?n=e.m:n=t.W++;const s=en(t.I);ge(s,"SID",t.K),ge(s,"RID",n),ge(s,"AID",t.V),rr(t,s),t.o&&t.s&&Ec(s,t.o,t.s),n=new tr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Vp(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),_c(t.i,n),pl(n,s,e)}function rr(t,e){t.na&&ac(t.na,function(n,s){ge(e,s,n)}),t.h&&Ip({},function(n,s){ge(e,s,n)})}function Vp(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Xe(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{cb(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function jp(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Oi||cp(),Di||(Oi(),Di=!0),fc.add(e,t),t.A=0}}function Ic(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Zi(Xe(t.Ma,t),Kp(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,Hp(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Zi(Xe(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nt(10),Xo(this),Hp(this))};function Tc(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Hp(t){t.g=new tr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=en(t.wa);ge(e,"RID","rpc"),ge(e,"SID",t.K),ge(e,"AID",t.V),ge(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ge(e,"TO",t.qa),ge(e,"TYPE","xmlhttp"),rr(t,e),t.o&&t.s&&Ec(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Qo(en(e)),n.s=null,n.S=!0,_p(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Xo(this),Ic(this),nt(19))};function oo(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function qp(t,e){var n=null;if(t.g==e){oo(t),Tc(t),t.g=null;var s=2}else if(ml(t.i,e))n=e.F,Op(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Ko(),je(s,new gp(s,n)),Zo(t)}else jp(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&mb(t,e)||s==2&&Ic(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Un(t,5);break;case 4:Un(t,10);break;case 3:Un(t,6);break;default:Un(t,2)}}}function Kp(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Un(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Xe(t.pb,t);n||(n=new jn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||io(n,"https"),Qo(n)),ub(n.toString(),s)}else nt(2);t.H=0,t.h&&t.h.za(e),zp(t),Bp(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),nt(2)):(this.l.info("Failed to ping google.com"),nt(1))};function zp(t){if(t.H=0,t.ma=[],t.h){const e=Dp(t.i);(e.length!=0||t.j.length!=0)&&(dh(t.ma,e),dh(t.ma,t.j),t.i.i.length=0,rc(t.j),t.j.length=0),t.h.ya()}}function Wp(t,e,n){var s=n instanceof jn?en(n):new jn(n);if(s.g!="")e&&(s.g=e+"."+s.g),ro(s,s.m);else{var i=K.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new jn(null);s&&io(r,s),e&&(r.g=e),i&&ro(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&ge(s,n,e),ge(s,"VER",t.ra),rr(t,s),s}function Gp(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ie(new sr({ob:!0})):new Ie(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function Qp(){}P=Qp.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function ao(){if(Ps&&!(10<=Number(R1)))throw Error("Environmental error: no available transport.")}ao.prototype.g=function(t,e){return new ft(t,e)};function ft(t,e){Me.call(this),this.g=new $p(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ri(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ri(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zs(this)}Le(ft,Me);ft.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Wp(t,null,t.Y),Zo(t)};ft.prototype.close=function(){bc(this.g)};ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=dc(t),t=n);e.j.push(new rb(e.fb++,t)),e.H==3&&Zo(e)};ft.prototype.N=function(){this.g.h=null,delete this.j,bc(this.g),delete this.g,ft.$.N.call(this)};function Jp(t){yc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(Jp,yc);function Yp(){vc.call(this),this.status=1}Le(Yp,vc);function zs(t){this.g=t}Le(zs,Qp);zs.prototype.Ba=function(){je(this.g,"a")};zs.prototype.Aa=function(t){je(this.g,new Jp(t))};zs.prototype.za=function(t){je(this.g,new Yp)};zs.prototype.ya=function(){je(this.g,"b")};function yb(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Le(qt,yb);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Da(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Da(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Da(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Da(this,s),i=0;break}}this.h=i,this.i+=e};qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ae(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var vb={};function Ac(t){return-128<=t&&128>t?S1(t,function(e){return new ae([e|0],0>e?-1:0)}):new ae([t|0],0>t?-1:0)}function Ut(t){if(isNaN(t)||!isFinite(t))return _s;if(0>t)return $e(Ut(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=yl;return new ae(e,0)}function Xp(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return $e(Xp(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ut(Math.pow(e,8)),s=_s,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Ut(Math.pow(e,r)),s=s.R(r).add(Ut(o))):(s=s.R(n),s=s.add(Ut(o)))}return s}var yl=4294967296,_s=Ac(0),vl=Ac(1),Ih=Ac(16777216);P=ae.prototype;P.ea=function(){if(mt(this))return-$e(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:yl+s)*e,e*=yl}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Yt(this))return"0";if(mt(this))return"-"+$e(this).toString(t);for(var e=Ut(Math.pow(t,6)),n=this,s="";;){var i=co(n,e).g;n=lo(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Yt(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Yt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function mt(t){return t.h==-1}P.X=function(t){return t=lo(this,t),mt(t)?-1:Yt(t)?0:1};function $e(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ae(n,~t.h).add(vl)}P.abs=function(){return mt(this)?$e(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new ae(n,n[n.length-1]&-2147483648?-1:0)};function lo(t,e){return t.add($e(e))}P.R=function(t){if(Yt(this)||Yt(t))return _s;if(mt(this))return mt(t)?$e(this).R($e(t)):$e($e(this).R(t));if(mt(t))return $e(this.R($e(t)));if(0>this.X(Ih)&&0>t.X(Ih))return Ut(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Er(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Er(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Er(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Er(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ae(n,0)};function Er(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ei(t,e){this.g=t,this.h=e}function co(t,e){if(Yt(e))throw Error("division by zero");if(Yt(t))return new ei(_s,_s);if(mt(t))return e=co($e(t),e),new ei($e(e.g),$e(e.h));if(mt(e))return e=co(t,$e(e)),new ei($e(e.g),e.h);if(30<t.g.length){if(mt(t)||mt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vl,s=e;0>=s.X(t);)n=Th(n),s=Th(s);var i=as(n,1),r=as(s,1);for(s=as(s,2),n=as(n,2);!Yt(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=as(s,1),n=as(n,1)}return e=lo(t,i.R(e)),new ei(i,e)}for(i=_s;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Ut(n),o=r.R(e);mt(o)||0<o.X(t);)n-=s,r=Ut(n),o=r.R(e);Yt(r)&&(r=vl),i=i.add(r),t=lo(t,o)}return new ei(i,t)}P.gb=function(t){return co(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ae(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ae(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ae(n,this.h^t.h)};function Th(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ae(n,t.h)}function as(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ae(i,t.h)}ao.prototype.createWebChannel=ao.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;zo.NO_ERROR=0;zo.TIMEOUT=8;zo.HTTP_ERROR=6;mp.COMPLETE="complete";yp.EventType=er;er.OPEN="a";er.CLOSE="b";er.ERROR="c";er.MESSAGE="d";Me.prototype.listen=Me.prototype.O;Ie.prototype.listenOnce=Ie.prototype.P;Ie.prototype.getLastError=Ie.prototype.Sa;Ie.prototype.getLastErrorCode=Ie.prototype.Ia;Ie.prototype.getStatus=Ie.prototype.da;Ie.prototype.getResponseJson=Ie.prototype.Wa;Ie.prototype.getResponseText=Ie.prototype.ja;Ie.prototype.send=Ie.prototype.ha;Ie.prototype.setWithCredentials=Ie.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;ae.prototype.add=ae.prototype.add;ae.prototype.multiply=ae.prototype.R;ae.prototype.modulo=ae.prototype.gb;ae.prototype.compare=ae.prototype.X;ae.prototype.toNumber=ae.prototype.ea;ae.prototype.toString=ae.prototype.toString;ae.prototype.getBits=ae.prototype.D;ae.fromNumber=Ut;ae.fromString=Xp;var _b=function(){return new ao},wb=function(){return Ko()},Na=zo,Eb=mp,bb=es,Ah={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ib=sr,br=yp,Tb=Ie,Ab=ae;const Sh="@firebase/firestore";/**
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
 */let Ws="9.23.0";/**
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
 */const Qn=new zl("@firebase/firestore");function Ch(){return Qn.logLevel}function V(t,...e){if(Qn.logLevel<=ee.DEBUG){const n=e.map(Sc);Qn.debug(`Firestore (${Ws}): ${t}`,...n)}}function Jn(t,...e){if(Qn.logLevel<=ee.ERROR){const n=e.map(Sc);Qn.error(`Firestore (${Ws}): ${t}`,...n)}}function uo(t,...e){if(Qn.logLevel<=ee.WARN){const n=e.map(Sc);Qn.warn(`Firestore (${Ws}): ${t}`,...n)}}function Sc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Ws}) INTERNAL ASSERTION FAILED: `+t;throw Jn(e),new Error(e)}function xe(t,e){t||Y()}function me(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Zp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class Cb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kb{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Hn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(xe(typeof s.accessToken=="string"),new Zp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new ze(e)}}class Rb{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Pb{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new Rb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ob{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Db{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.T=n.token,new Ob(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class eg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Nb(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function he(t,e){return t<e?-1:t>e?1:0}function Os(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new De(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _e(e)}static min(){return new _e(new De(0,0))}static max(){return new _e(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ui{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ui?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Ui{construct(e,n,s){return new Ee(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new H(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const Mb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Ui{construct(e,n,s){return new Je(e,n,s)}static isValidIdentifier(e){return Mb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new H(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new H(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ee.fromString(e))}static fromName(e){return new Q(Ee.fromString(e).popFirst(5))}static empty(){return new Q(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ee(e.slice()))}}function xb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=_e.fromTimestamp(s===1e9?new De(n+1,0):new De(n,s));return new In(i,Q.empty(),e)}function Lb(t){return new In(t.readTime,t.key,-1)}class In{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new In(_e.min(),Q.empty(),-1)}static max(){return new In(_e.max(),Q.empty(),-1)}}function Ub(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(i=>i?A.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new A((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new A((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function ea(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ng{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}ng.ct=-1;function Cc(t){return t==null}function ho(t){return t===0&&1/t==-1/0}function Bb(t){return typeof t=="number"&&Number.isInteger(t)&&!ho(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function kh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class lt{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new lt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ir(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ir(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ir(this.root,e,this.comparator,!0)}}class Ir{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ue.RED,this.left=i??Ue.EMPTY,this.right=r??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ue(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rh(this.data.getIterator())}getIteratorFrom(e){return new Rh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class Rh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new st(Je.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class tn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vb("Invalid base64 string: "+i):i}}(e);return new tn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new tn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const jb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yn(t){if(xe(!!t),typeof t=="string"){let e=0;const n=jb.exec(t);if(xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fi(t){return typeof t=="string"?tn.fromBase64String(t):tn.fromUint8Array(t)}/**
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
 */function kc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ig(t){const e=t.mapValue.fields.__previous_value__;return kc(e)?ig(e):e}function fo(t){const e=Yn(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class Hb{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class po{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof po&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Tr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ds(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kc(t)?4:qb(t)?9007199254740991:10:Y()}function Kt(t,e){if(t===e)return!0;const n=Ds(t);if(n!==Ds(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fo(t).isEqual(fo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Yn(s.timestampValue),o=Yn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fi(s.bytesValue).isEqual(Fi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Fe(s.doubleValue),o=Fe(i.doubleValue);return r===o?ho(r)===ho(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(kh(r)!==kh(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Kt(r[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function $i(t,e){return(t.values||[]).find(n=>Kt(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Ds(t),s=Ds(e);if(n!==s)return he(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Fe(i.integerValue||i.doubleValue),a=Fe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ph(t.timestampValue,e.timestampValue);case 4:return Ph(fo(t),fo(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Fi(i),a=Fi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=he(o[l],a[l]);if(c!==0)return c}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=he(Fe(i.latitude),Fe(r.latitude));return o!==0?o:he(Fe(i.longitude),Fe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Ns(o[l],a[l]);if(c)return c}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Tr.mapValue&&r===Tr.mapValue)return 0;if(i===Tr.mapValue)return 1;if(r===Tr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=he(a[u],c[u]);if(h!==0)return h;const g=Ns(o[a[u]],l[c[u]]);if(g!==0)return g}return he(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Ph(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Yn(t),s=Yn(e),i=he(n.seconds,s.seconds);return i!==0?i:he(n.nanos,s.nanos)}function Ms(t){return _l(t)}function _l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Yn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=_l(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${_l(s.fields[a])}`;return r+"}"}(t.mapValue):Y();var e,n}function wl(t){return!!t&&"integerValue"in t}function Rc(t){return!!t&&"arrayValue"in t}function Fr(t){return!!t&&"mapValue"in t}function fi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return or(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=fi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Fr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fi(n)}setAll(e){let n=Je.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=fi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Fr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Fr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){or(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new bt(fi(this.value))}}function rg(t){const e=[];return or(t.fields,(n,s)=>{const i=new Je([n]);if(Fr(s)){const r=rg(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
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
 */class wt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new wt(e,0,_e.min(),_e.min(),_e.min(),bt.empty(),0)}static newFoundDocument(e,n,s,i){return new wt(e,1,n,_e.min(),s,i,0)}static newNoDocument(e,n){return new wt(e,2,n,_e.min(),_e.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,_e.min(),_e.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class go{constructor(e,n){this.position=e,this.inclusive=n}}function Oh(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=Q.comparator(Q.fromName(o.referenceValue),n.key):s=Ns(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Dh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class og{}class Oe extends og{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Wb(e,n,s):n==="array-contains"?new Jb(e,s):n==="in"?new Yb(e,s):n==="not-in"?new Xb(e,s):n==="array-contains-any"?new Zb(e,s):new Oe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Gb(e,s):new Qb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ns(n,this.value)):n!==null&&Ds(this.value)===Ds(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Tn extends og{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Tn(e,n)}matches(e){return ag(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ag(t){return t.op==="and"}function lg(t){return zb(t)&&ag(t)}function zb(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function El(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(lg(t))return t.filters.map(e=>El(e)).join(",");{const e=t.filters.map(n=>El(n)).join(",");return`${t.op}(${e})`}}function cg(t,e){return t instanceof Oe?function(n,s){return s instanceof Oe&&n.op===s.op&&n.field.isEqual(s.field)&&Kt(n.value,s.value)}(t,e):t instanceof Tn?function(n,s){return s instanceof Tn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&cg(r,s.filters[o]),!0):!1}(t,e):void Y()}function ug(t){return t instanceof Oe?function(e){return`${e.field.canonicalString()} ${e.op} ${Ms(e.value)}`}(t):t instanceof Tn?function(e){return e.op.toString()+" {"+e.getFilters().map(ug).join(" ,")+"}"}(t):"Filter"}class Wb extends Oe{constructor(e,n,s){super(e,n,s),this.key=Q.fromName(s.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Gb extends Oe{constructor(e,n){super(e,"in",n),this.keys=hg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Qb extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=hg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Q.fromName(s.referenceValue))}class Jb extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rc(n)&&$i(n.arrayValue,this.value)}}class Yb extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$i(this.value.arrayValue,n)}}class Xb extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$i(this.value.arrayValue,n)}}class Zb extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>$i(this.value.arrayValue,s))}}/**
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
 */class eI{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Nh(t,e=null,n=[],s=[],i=null,r=null,o=null){return new eI(t,e,n,s,i,r,o)}function Pc(t){const e=me(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>El(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ms(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ms(s)).join(",")),e.dt=n}return e.dt}function Oc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Kb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dh(t.startAt,e.startAt)&&Dh(t.endAt,e.endAt)}/**
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
 */class ta{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function tI(t,e,n,s,i,r,o,a){return new ta(t,e,n,s,i,r,o,a)}function nI(t){return new ta(t)}function Mh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function iI(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function rI(t){return t.collectionGroup!==null}function ws(t){const e=me(t);if(e.wt===null){e.wt=[];const n=iI(e),s=sI(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new pi(n)),e.wt.push(new pi(Je.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new pi(Je.keyField(),r))}}}return e.wt}function xs(t){const e=me(t);if(!e._t)if(e.limitType==="F")e._t=Nh(e.path,e.collectionGroup,ws(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of ws(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new pi(r.field,o))}const s=e.endAt?new go(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new go(e.startAt.position,e.startAt.inclusive):null;e._t=Nh(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function bl(t,e,n){return new ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dg(t,e){return Oc(xs(t),xs(e))&&t.limitType===e.limitType}function fg(t){return`${Pc(xs(t))}|lt:${t.limitType}`}function xh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ug(s)).join(", ")}]`),Cc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ms(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ms(s)).join(",")),`Target(${n})`}(xs(t))}; limitType=${t.limitType})`}function Dc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of ws(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Oh(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ws(n),s)||n.endAt&&!function(i,r,o){const a=Oh(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ws(n),s))}(t,e)}function oI(t){return(e,n)=>{let s=!1;for(const i of ws(t)){const r=aI(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function aI(t,e,n){const s=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ns(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
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
 */class Gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){or(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return sg(this.inner)}size(){return this.innerSize}}/**
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
 */const lI=new lt(Q.comparator);function mo(){return lI}const pg=new lt(Q.comparator);function Ar(...t){let e=pg;for(const n of t)e=e.insert(n.key,n);return e}function gg(t){let e=pg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Fn(){return gi()}function mg(){return gi()}function gi(){return new Gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const cI=new lt(Q.comparator),uI=new st(Q.comparator);function We(...t){let e=uI;for(const n of t)e=e.add(n);return e}const hI=new st(he);function dI(){return hI}/**
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
 */function yg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ho(e)?"-0":e}}function vg(t){return{integerValue:""+t}}function fI(t,e){return Bb(e)?vg(e):yg(t,e)}/**
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
 */class na{constructor(){this._=void 0}}function pI(t,e,n){return t instanceof yo?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kc(i)&&(i=ig(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Bi?wg(t,e):t instanceof Vi?Eg(t,e):function(s,i){const r=_g(s,i),o=Lh(r)+Lh(s.gt);return wl(r)&&wl(s.gt)?vg(o):yg(s.serializer,o)}(t,e)}function gI(t,e,n){return t instanceof Bi?wg(t,e):t instanceof Vi?Eg(t,e):n}function _g(t,e){return t instanceof vo?wl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class yo extends na{}class Bi extends na{constructor(e){super(),this.elements=e}}function wg(t,e){const n=bg(e);for(const s of t.elements)n.some(i=>Kt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Vi extends na{constructor(e){super(),this.elements=e}}function Eg(t,e){let n=bg(e);for(const s of t.elements)n=n.filter(i=>!Kt(i,s));return{arrayValue:{values:n}}}class vo extends na{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Lh(t){return Fe(t.integerValue||t.doubleValue)}function bg(t){return Rc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Bi&&s instanceof Bi||n instanceof Vi&&s instanceof Vi?Os(n.elements,s.elements,Kt):n instanceof vo&&s instanceof vo?Kt(n.gt,s.gt):n instanceof yo&&s instanceof yo}(t.transform,e.transform)}class yI{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $r(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sa{}function Ig(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ag(t.key,Vt.none()):new ar(t.key,t.data,Vt.none());{const n=t.data,s=bt.empty();let i=new st(Je.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ts(t.key,s,new Tt(i.toArray()),Vt.none())}}function vI(t,e,n){t instanceof ar?function(s,i,r){const o=s.value.clone(),a=Fh(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ts?function(s,i,r){if(!$r(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Fh(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Tg(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function mi(t,e,n,s){return t instanceof ar?function(i,r,o,a){if(!$r(i.precondition,r))return o;const l=i.value.clone(),c=$h(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof ts?function(i,r,o,a){if(!$r(i.precondition,r))return o;const l=$h(i.fieldTransforms,a,r),c=r.data;return c.setAll(Tg(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return $r(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function _I(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=_g(s.transform,i||null);r!=null&&(n===null&&(n=bt.empty()),n.set(s.field,r))}return n||null}function Uh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Os(n,s,(i,r)=>mI(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ar extends sa{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ts extends sa{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Tg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Fh(t,e,n){const s=new Map;xe(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,gI(o,a,n[i]))}return s}function $h(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,pI(r,o,e))}return s}class Ag extends sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wI extends sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class EI{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&vI(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=mi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=mi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=mg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Ig(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),We())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(n,s)=>Uh(n,s))&&Os(this.baseMutations,e.baseMutations,(n,s)=>Uh(n,s))}}class Nc{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){xe(e.mutations.length===s.length);let i=cI;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Nc(e,n,s,i)}}/**
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
 */var Ae,X;function II(t){switch(t){default:return Y();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function TI(t){if(t===void 0)return Jn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ae.OK:return T.OK;case Ae.CANCELLED:return T.CANCELLED;case Ae.UNKNOWN:return T.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return T.INTERNAL;case Ae.UNAVAILABLE:return T.UNAVAILABLE;case Ae.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ae.NOT_FOUND:return T.NOT_FOUND;case Ae.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ae.ABORTED:return T.ABORTED;case Ae.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ae.DATA_LOSS:return T.DATA_LOSS;default:return Y()}}(X=Ae||(Ae={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ab([4294967295,4294967295],0);class AI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Il(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CI(t,e){return Il(t,e.toTimestamp())}function Es(t){return xe(!!t),_e.fromTimestamp(function(e){const n=Yn(e);return new De(n.seconds,n.nanos)}(t))}function Sg(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kI(t){const e=Ee.fromString(t);return xe(LI(e)),e}function Tl(t,e){return Sg(t.databaseId,e.path)}function RI(t){const e=kI(t);return e.length===4?Ee.emptyPath():OI(e)}function PI(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function OI(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bh(t,e,n){return{name:Tl(t,e),fields:n.value.mapValue.fields}}function DI(t,e){let n;if(e instanceof ar)n={update:Bh(t,e.key,e.value)};else if(e instanceof Ag)n={delete:Tl(t,e.key)};else if(e instanceof ts)n={update:Bh(t,e.key,e.data),updateMask:xI(e.fieldMask)};else{if(!(e instanceof wI))return Y();n={verify:Tl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof yo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Bi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Vi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof vo)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:CI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function NI(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Es(s.updateTime):Es(i);return r.isEqual(_e.min())&&(r=Es(i)),new yI(r,s.transformResults||[])}(n,e))):[]}function MI(t){let e=RI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){xe(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Cg(u);return h instanceof Tn&&lg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new pi(cs(h.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Cc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,g=u.values||[];return new go(g,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,g=u.values||[];return new go(g,h)}(n.endAt)),tI(e,i,o,r,a,"F",l,c)}function Cg(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=cs(e.unaryFilter.field);return Oe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=cs(e.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cs(e.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=cs(e.unaryFilter.field);return Oe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return Oe.create(cs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Tn.create(e.compositeFilter.filters.map(n=>Cg(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function cs(t){return Je.fromServerFormat(t.fieldPath)}function xI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function LI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class UI{constructor(e){this.fe=e}}function FI(t){const e=MI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bl(e,e.limit,"L"):e}/**
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
 */class $I{constructor(){this.rn=new BI}addToCollectionParentIndex(e,n){return this.rn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(In.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(In.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class BI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new st(Ee.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new st(Ee.comparator)).toArray()}}/**
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
 */class Ls{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ls(0)}static Mn(){return new Ls(-1)}}/**
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
 */class VI{constructor(){this.changes=new Gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HI{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&mi(s.mutation,i,Tt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,We()).next(()=>s))}getLocalViewOfDocuments(e,n,s=We()){const i=Fn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Ar();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Fn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,We()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=mo();const o=gi(),a=gi();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof ts)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),mi(u.mutation,c,u.mutation.getFieldMask(),De.now())):o.set(c.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new jI(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=gi();let i=new lt((o,a)=>o-a),r=We();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Tt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||We()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=mg();u.forEach(g=>{if(!r.has(g)){const y=Ig(n.get(g),s.get(g));y!==null&&h.set(g,y),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return Q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):A.resolve(Fn());let a=-1,l=r;return o.next(c=>A.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(g=>{l=l.insert(u,g)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,We())).next(u=>({batchId:a,changes:gg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(s=>{let i=Ar();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Ar();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(c,u){return new ta(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,wt.newInvalidDocument(c)))});let o=Ar();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&mi(c.mutation,l,Tt.empty(),De.now()),Dc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class qI{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return A.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Es(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:FI(s.bundledQuery),readTime:Es(s.readTime)}}(n)),A.resolve()}}/**
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
 */class KI{constructor(){this.overlays=new lt(Q.comparator),this.ls=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Fn();return A.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.we(e,n,r)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const i=Fn(),r=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new lt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Fn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Fn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return A.resolve(a)}we(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new bI(n,s));let r=this.ls.get(n);r===void 0&&(r=We(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
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
 */class Mc{constructor(){this.fs=new st(Pe.ds),this.ws=new st(Pe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Pe(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Pe(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new Q(new Ee([])),s=new Pe(n,e),i=new Pe(n,e+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new Q(new Ee([])),s=new Pe(n,e),i=new Pe(n,e+1);let r=We();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Pe(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Pe{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return Q.comparator(e.key,n.key)||he(e.As,n.As)}static _s(e,n){return he(e.As,n.As)||Q.comparator(e.key,n.key)}}/**
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
 */class zI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new st(Pe.ds)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EI(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Pe(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return A.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),A.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new st(he);return n.forEach(i=>{const r=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),A.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;Q.isDocumentKey(r)||(r=r.child(""));const o=new Pe(new Q(r),0);let a=new st(he);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.As)),!0)},o),A.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){xe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return A.forEach(n.mutations,i=>{const r=new Pe(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Pe(n,0),i=this.Rs.firstAfterOrEqual(s);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class WI{constructor(e){this.Ds=e,this.docs=new lt(Q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let s=mo();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():wt.newInvalidDocument(i))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=mo();const o=n.path,a=new Q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ub(Lb(u),s)<=0||(i.has(u.key)||Dc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Y()}Cs(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new GI(this)}getSize(e){return A.resolve(this.size)}}class GI extends VI{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class QI{constructor(e){this.persistence=e,this.xs=new Gs(n=>Pc(n),Oc),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Mc,this.targetCount=0,this.Ms=Ls.kn()}forEachTarget(e,n){return this.xs.forEach((s,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),A.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Fn(n),A.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(r).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.ks.containsKey(n))}}/**
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
 */class JI{constructor(e,n){this.$s={},this.overlays={},this.Os=new ng(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new QI(this),this.indexManager=new $I,this.remoteDocumentCache=function(s){return new WI(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new UI(n),this.qs=new qI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new zI(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){V("MemoryPersistence","Starting transaction:",e);const i=new YI(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(e,n){return A.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class YI extends $b{constructor(e){super(),this.currentSequenceNumber=e}}class xc{constructor(e){this.persistence=e,this.Qs=new Mc,this.js=null}static zs(e){return new xc(e)}get Ws(){if(this.js)return this.js;throw Y()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),A.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ws,s=>{const i=Q.fromPath(s);return this.Hs(e,i).next(r=>{r||n.removeEntry(i,_e.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return A.or([()=>A.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Lc{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(e,n){let s=We(),i=We();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Lc(e,n.fromCache,s,i)}}/**
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
 */class XI{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ki(e,n).next(r=>r||this.Gi(e,n,i,s)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(Mh(n))return A.resolve(null);let s=xs(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bl(n,null,"F"),s=xs(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=We(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,bl(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,s,i){return Mh(n)||i.isEqual(_e.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(e,n):(Ch()<=ee.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xh(n)),this.Wi(e,o,n,xb(i,-1)))})}ji(e,n){let s=new st(oI(e));return n.forEach((i,r)=>{Dc(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(e,n){return Ch()<=ee.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",xh(n)),this.Ui.getDocumentsMatchingQuery(e,n,In.min())}Wi(e,n,s,i){return this.Ui.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class ZI{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new lt(he),this.Yi=new Gs(r=>Pc(r),Oc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HI(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function eT(t,e,n,s){return new ZI(t,e,n,s)}async function kg(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=We();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function tT(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let g=A.resolve();return h.forEach(y=>{g=g.next(()=>c.getEntry(a,y)).next(I=>{const C=l.docVersions.get(y);xe(C!==null),I.version.compareTo(C)<0&&(u.applyToRemoteDocument(I,l),I.isValidDocument()&&(I.setReadTime(l.commitVersion),c.addEntry(I)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=We();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function nT(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function sT(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class Vh{constructor(){this.activeTargetIds=dI()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iT{constructor(){this.Hr=new Vh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Vh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jh{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sr=null;function Ma(){return Sr===null?Sr=268435456+Math.round(2147483648*Math.random()):Sr++,"0x"+Sr.toString(16)}/**
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
 */const Ke="WebChannelConnection";class lT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,i,r){const o=Ma(),a=this.To(e,n);V("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.Eo(l,i,r),this.Ao(e,a,l,s).then(c=>(V("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw uo("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(e,n,s,i,r,o){return this.Io(e,n,s,i,r)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ws,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}To(e,n){const s=oT[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,i){const r=Ma();return new Promise((o,a)=>{const l=new Tb;l.setWithCredentials(!0),l.listenOnce(Eb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Na.NO_ERROR:const u=l.getResponseJson();V(Ke,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Na.TIMEOUT:V(Ke,`RPC '${e}' ${r} timed out`),a(new H(T.DEADLINE_EXCEEDED,"Request time out"));break;case Na.HTTP_ERROR:const h=l.getStatus();if(V(Ke,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const I=function(C){const D=C.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(D)>=0?D:T.UNKNOWN}(y.status);a(new H(I,y.message))}else a(new H(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new H(T.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{V(Ke,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);V(Ke,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}Ro(e,n,s){const i=Ma(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_b(),a=wb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new Ib({})),this.Eo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");V(Ke,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let g=!1,y=!1;const I=new aT({ro:D=>{y?V(Ke,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(V(Ke,`Opening RPC '${e}' stream ${i} transport.`),h.open(),g=!0),V(Ke,`RPC '${e}' stream ${i} sending:`,D),h.send(D))},oo:()=>h.close()}),C=(D,N,x)=>{D.listen(N,G=>{try{x(G)}catch(L){setTimeout(()=>{throw L},0)}})};return C(h,br.EventType.OPEN,()=>{y||V(Ke,`RPC '${e}' stream ${i} transport opened.`)}),C(h,br.EventType.CLOSE,()=>{y||(y=!0,V(Ke,`RPC '${e}' stream ${i} transport closed`),I.wo())}),C(h,br.EventType.ERROR,D=>{y||(y=!0,uo(Ke,`RPC '${e}' stream ${i} transport errored:`,D),I.wo(new H(T.UNAVAILABLE,"The operation could not be completed")))}),C(h,br.EventType.MESSAGE,D=>{var N;if(!y){const x=D.data[0];xe(!!x);const G=x,L=G.error||((N=G[0])===null||N===void 0?void 0:N.error);if(L){V(Ke,`RPC '${e}' stream ${i} received error:`,L);const we=L.status;let ye=function(ut){const ht=Ae[ut];if(ht!==void 0)return TI(ht)}(we),He=L.message;ye===void 0&&(ye=T.INTERNAL,He="Unknown error status: "+we+" with message "+L.message),y=!0,I.wo(new H(ye,He)),h.close()}else V(Ke,`RPC '${e}' stream ${i} received:`,x),I._o(x)}}),C(a,bb.STAT_EVENT,D=>{D.stat===Ah.PROXY?V(Ke,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Ah.NOPROXY&&V(Ke,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.fo()},0),I}}function xa(){return typeof document<"u"?document:null}/**
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
 */function ia(t){return new AI(t,!0)}/**
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
 */class cT{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Rg(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Jn(n.toString()),Jn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{e(()=>{const i=new H(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uT extends cT{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=NI(e.writeResults,e.commitTime),s=Es(e.commitTime);return this.listener.cu(s,n)}return xe(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=PI(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>DI(this.serializer,s))};this.Wo(n)}}/**
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
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Jn(n),this.mu=!1):V("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class fT{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{cr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=me(a);l.vu.add(4),await lr(l),l.bu.set("Unknown"),l.vu.delete(4),await ra(l)}(this))})}),this.bu=new dT(s,i)}}async function ra(t){if(cr(t))for(const e of t.Ru)await e(!0)}async function lr(t){for(const e of t.Ru)await e(!1)}function cr(t){return me(t).vu.size===0}async function Pg(t,e,n){if(!ea(e))throw e;t.vu.add(1),await lr(t),t.bu.set("Offline"),n||(n=()=>nT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await ra(t)})}function Og(t,e){return e().catch(n=>Pg(t,n,e))}async function oa(t){const e=me(t),n=An(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;pT(e);)try{const i=await sT(e.localStore,s);if(i===null){e.Eu.length===0&&n.jo();break}s=i.batchId,gT(e,i)}catch(i){await Pg(e,i)}Dg(e)&&Ng(e)}function pT(t){return cr(t)&&t.Eu.length<10}function gT(t,e){t.Eu.push(e);const n=An(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Dg(t){return cr(t)&&!An(t).Uo()&&t.Eu.length>0}function Ng(t){An(t).start()}async function mT(t){An(t).hu()}async function yT(t){const e=An(t);for(const n of t.Eu)e.uu(n.mutations)}async function vT(t,e,n){const s=t.Eu.shift(),i=Nc.from(s,e,n);await Og(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await oa(t)}async function _T(t,e){e&&An(t).ou&&await async function(n,s){if(i=s.code,II(i)&&i!==T.ABORTED){const r=n.Eu.shift();An(n).Qo(),await Og(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await oa(n)}var i}(t,e),Dg(t)&&Ng(t)}async function Hh(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const s=cr(n);n.vu.add(3),await lr(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await ra(n)}async function wT(t,e){const n=me(t);e?(n.vu.delete(2),await ra(n)):e||(n.vu.add(2),await lr(n),n.bu.set("Unknown"))}function An(t){return t.Du||(t.Du=function(e,n,s){const i=me(e);return i.fu(),new uT(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:mT.bind(null,t),ao:_T.bind(null,t),au:yT.bind(null,t),cu:vT.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await oa(t)):(await t.Du.stop(),t.Eu.length>0&&(V("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Uc{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Uc(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mg(t,e){if(Jn("AsyncQueue",`${e}: ${t}`),ea(t))return new H(T.UNAVAILABLE,`${e}: ${t}`);throw t}class ET{constructor(){this.queries=new Gs(e=>fg(e),dg),this.onlineState="Unknown",this.ku=new Set}}function bT(t){t.ku.forEach(e=>{e.next()})}class IT{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Gs(a=>fg(a),dg),this._c=new Map,this.mc=new Set,this.gc=new lt(Q.comparator),this.yc=new Map,this.Ic=new Mc,this.Tc={},this.Ec=new Map,this.Ac=Ls.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function TT(t,e,n){const s=kT(t);try{const i=await function(r,o){const a=me(r),l=De.now(),c=o.reduce((g,y)=>g.add(y.key),We());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=mo(),I=We();return a.Zi.getEntries(g,c).next(C=>{y=C,y.forEach((D,N)=>{N.isValidDocument()||(I=I.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,y)).next(C=>{u=C;const D=[];for(const N of o){const x=_I(N,u.get(N.key).overlayedDocument);x!=null&&D.push(new ts(N.key,x,rg(x.value.mapValue),Vt.exists(!0)))}return a.mutationQueue.addMutationBatch(g,l,D,o)}).next(C=>{h=C;const D=C.applyToLocalDocumentSet(u,I);return a.documentOverlayCache.saveOverlays(g,C.batchId,D)})}).then(()=>({batchId:h.batchId,changes:gg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.Tc[r.currentUser.toKey()];l||(l=new lt(he)),l=l.insert(o,a),r.Tc[r.currentUser.toKey()]=l}(s,i.batchId,n),await aa(s,i.changes),await oa(s.remoteStore)}catch(i){const r=Mg(i,"Failed to persist write");n.reject(r)}}function qh(t,e,n){const s=me(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=me(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Mu(o)&&(l=!0)}),l&&bT(a)}(s.eventManager,e),i.length&&s.dc.nu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function AT(t,e){const n=me(t),s=e.batch.batchId;try{const i=await tT(n.localStore,e);Lg(n,s,null),xg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await aa(n,i)}catch(i){await tg(i)}}async function ST(t,e,n){const s=me(t);try{const i=await function(r,o){const a=me(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(xe(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Lg(s,e,n),xg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await aa(s,i)}catch(i){await tg(i)}}function xg(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Lg(t,e,n){const s=me(t);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Tc[s.currentUser.toKey()]=i}}async function aa(t,e,n){const s=me(t),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,l)=>{o.push(s.Rc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Lc.Li(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,l){const c=me(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(l,h=>A.forEach(h.Fi,g=>c.persistence.referenceDelegate.addReference(u,h.targetId,g)).next(()=>A.forEach(h.Bi,g=>c.persistence.referenceDelegate.removeReference(u,h.targetId,g)))))}catch(u){if(!ea(u))throw u;V("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const g=c.Ji.get(h),y=g.snapshotVersion,I=g.withLastLimboFreeSnapshotVersion(y);c.Ji=c.Ji.insert(h,I)}}}(s.localStore,r))}async function CT(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const s=await kg(n.localStore,e);n.currentUser=e,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new H(T.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await aa(n,s.er)}}function kT(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ST.bind(null,e),e}class Kh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ia(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return eT(this.persistence,new XI,e.initialUser,this.serializer)}createPersistence(e){return new JI(xc.zs,this.serializer)}createSharedClientState(e){return new iT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>qh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=CT.bind(null,this.syncEngine),await wT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ET}createDatastore(e){const n=ia(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new lT(i));var i;return function(r,o,a,l){return new hT(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>qh(this.syncEngine,a,0),o=jh.D()?new jh:new rT,new fT(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new IT(s,i,r,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=me(e);V("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await lr(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class PT{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=eg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{V("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(V("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Mg(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function La(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await kg(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DT(t);V("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Hh(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Hh(e.remoteStore,r)),t._onlineComponents=e}function OT(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function DT(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await La(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!OT(n))throw n;uo("Error using user provided cache. Falling back to memory cache: "+n),await La(t,new Kh)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await La(t,new Kh);return t._offlineComponents}async function NT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await zh(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await zh(t,new RT))),t._onlineComponents}function MT(t){return NT(t).then(e=>e.syncEngine)}/**
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
 */const Wh=new Map;/**
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
 */function Fg(t,e,n){if(!n)throw new H(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xT(t,e,n,s){if(e===!0&&s===!0)throw new H(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gh(t){if(!Q.isDocumentKey(t))throw new H(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qh(t){if(Q.isDocumentKey(t))throw new H(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function _o(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fc(t);throw new H(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Jh{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new H(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ug((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class la{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Sb;switch(n.type){case"firstParty":return new Pb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Wh.get(e);n&&(V("ComponentProvider","Removing Datastore"),Wh.delete(e),n.terminate())}(this),Promise.resolve()}}function LT(t,e,n,s={}){var i;const r=(t=_o(t,la))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=ze.MOCK_USER;else{a=z0(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new H(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ze(c)}t._authCredentials=new Cb(new Zp(a,l))}}/**
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
 */class jt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new En(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}}class $c{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $c(this.firestore,e,this._query)}}class En extends $c{constructor(e,n,s){super(e,n,nI(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new Q(e))}withConverter(e){return new En(this.firestore,e,this._path)}}function UT(t,e,...n){if(t=at(t),Fg("collection","path",e),t instanceof la){const s=Ee.fromString(e,...n);return Qh(s),new En(t,null,s)}{if(!(t instanceof jt||t instanceof En))throw new H(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return Qh(s),new En(t.firestore,null,s)}}function $g(t,e,...n){if(t=at(t),arguments.length===1&&(e=eg.A()),Fg("doc","path",e),t instanceof la){const s=Ee.fromString(e,...n);return Gh(s),new jt(t,null,new Q(s))}{if(!(t instanceof jt||t instanceof En))throw new H(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return Gh(s),new jt(t.firestore,t instanceof En?t.converter:null,new Q(s))}}/**
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
 */class FT{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Rg(this,"async_queue_retry"),this.Xc=()=>{const n=xa();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=xa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=xa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Hn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ea(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Jn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Uc.createAndSchedule(this,e,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&Y()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Bc extends la{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new FT,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Bg(this),this._firestoreClient.terminate()}}function Vc(t,e){const n=typeof t=="object"?t:gf(),s=typeof t=="string"?t:e||"(default)",i=Gl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=q0("firestore");r&&LT(i,...r)}return i}function $T(t){return t._firestoreClient||Bg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Bg(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new Hb(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Ug(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new PT(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ji(tn.fromBase64String(e))}catch(n){throw new H(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ji(tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jg{constructor(e){this._methodName=e}}/**
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
 */class Hg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */const BT=/^__.*__$/;class VT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new ar(e,this.data,n,this.fieldTransforms)}}function qg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class jc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new jc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:s,la:!1});return i.fa(e),i}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:s,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return wo(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(qg(this.ca)&&BT.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class jT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ia(e)}ya(e,n,s,i=!1){return new jc({ca:e,methodName:n,ga:s,path:Je.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kg(t){const e=t._freezeSettings(),n=ia(t._databaseId);return new jT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zg(t,e,n,s,i,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,i);Jg("Data must be an object, but it was:",o,s);const a=Gg(s,o);let l,c;if(r.merge)l=new Tt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const g=HT(e,h,n);if(!o.contains(g))throw new H(T.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);zT(u,g)||u.push(g)}l=new Tt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new VT(new bt(a),l,c)}function Wg(t,e){if(Qg(t=at(t)))return Jg("Unsupported field value:",e,t),Gg(t,e);if(t instanceof jg)return function(n,s){if(!qg(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Wg(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=at(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return fI(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:Il(s.serializer,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Il(s.serializer,i)}}if(n instanceof Hg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ji)return{bytesValue:SI(s.serializer,n._byteString)};if(n instanceof jt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sg(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Fc(n)}`)}(t,e)}function Gg(t,e){const n={};return sg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):or(t,(s,i)=>{const r=Wg(i,e.ha(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Qg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Hg||t instanceof ji||t instanceof jt||t instanceof jg)}function Jg(t,e,n){if(!Qg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Fc(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function HT(t,e,n){if((e=at(e))instanceof Vg)return e._internalPath;if(typeof e=="string")return KT(t,e);throw wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const qT=new RegExp("[~\\*/\\[\\]]");function KT(t,e,n){if(e.search(qT)>=0)throw wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vg(...e.split("."))._internalPath}catch{throw wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new H(T.INVALID_ARGUMENT,a+t+l)}function zT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function Yg(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}function WT(t,e,n){t=_o(t,jt);const s=_o(t.firestore,Bc),i=Yg(t.converter,e,n);return Xg(s,[zg(Kg(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Vt.none())])}function GT(t,e){const n=_o(t.firestore,Bc),s=$g(t),i=Yg(t.converter,e);return Xg(n,[zg(Kg(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Vt.exists(!1))]).then(()=>s)}function Xg(t,e){return function(n,s){const i=new Hn;return n.asyncQueue.enqueueAndForget(async()=>TT(await MT(n),s,i)),i.promise}($T(t),e)}(function(t,e=!0){(function(n){Ws=n})(Vs),ks(new Kn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Bc(new kb(n.getProvider("auth-internal")),new Db(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new H(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new po(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),wn(Sh,"3.13.0",t),wn(Sh,"3.13.0","esm2017")})();var QT="firebase",JT="9.23.0";/**
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
 */wn(QT,JT,"app");const YT={apiKey:"AIzaSyDSFUoWNmdlw4OyCK89i5DCX1MvSkZyo6E",authDomain:"blood-bank-vue.firebaseapp.com",databaseURL:"https://blood-bank-vue-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"blood-bank-vue",storageBucket:"blood-bank-vue.appspot.com",messagingSenderId:"1005473572226",appId:"1:1005473572226:web:2c6519c0684db8307e1b9b"},Zg=pf(YT);Vc(Zg);const bs=v1(Zg);const ct=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},XT={emits:["loggedIn"],data(){return{username:"",email:"",password:"",phone:"",gender:"",notification:""}},methods:{signUp(){const t=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;if(this.password.length<=7||!t.test(this.password)){this.notification="The password must be more than 7 characters long and at least one punctuation such as @#$%.";return}eE(bs,this.email,this.password).then(e=>{sE(e.user,{displayName:this.username}).then(()=>{const n={displayName:this.username,email:this.email,phone:this.phone,gender:this.gender},s=Vc();WT($g(s,"Sign Up Details",e.user.uid),n)}).then(()=>{this.$emit("loggedIn")})}).catch(e=>{switch(e.code){case"auth/email-already-in-use":this.notification="This email is already registered";break;case"auth/invalid-email":this.notification="This email address is not valid.";break;case"auth/operation-not-allowed":this.notification="Email/Password accounts are not enabled";break;case"auth/weak-password":this.notification="The password is too weak,please include at least punctuation.";break;default:console.log(e.message)}})}}},ZT={class:"signupform"},eA=f("br",null,null,-1),tA=f("br",null,null,-1),nA=f("br",null,null,-1),sA=f("br",null,null,-1),iA=f("label",{for:"male",style:{"font-size":"14px"}}," Male",-1),rA=f("label",{for:"female",style:{"font-size":"14px"}}," Female",-1),oA=f("button",{class:"signupbut",style:{"font-weight":"bold"}},"Sign Up",-1),aA={key:0,class:"notification"};function lA(t,e,n,s,i,r){return te(),re(Se,null,[f("form",{onSubmit:e[6]||(e[6]=Hl((...o)=>r.signUp&&r.signUp(...o),["prevent"])),class:"signup"},[f("div",ZT,[fe(f("input",{type:"text",class:"input",placeholder:"Username",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>i.username=o),style:{"border-radius":"10px"}},null,512),[[ve,i.username]]),eA,fe(f("input",{type:"email",class:"input",placeholder:"Email",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>i.email=o),style:{"border-radius":"10px"}},null,512),[[ve,i.email]]),tA,fe(f("input",{type:"password",class:"input",placeholder:"Password",required:"","onUpdate:modelValue":e[2]||(e[2]=o=>i.password=o),style:{"border-radius":"10px"}},null,512),[[ve,i.password]]),nA,fe(f("input",{type:"tel",class:"input",placeholder:"Phone Number",required:"","onUpdate:modelValue":e[3]||(e[3]=o=>i.phone=o),style:{"border-radius":"10px"}},null,512),[[ve,i.phone]]),sA,f("div",null,[fe(f("input",{type:"radio",id:"male",value:"Male","onUpdate:modelValue":e[4]||(e[4]=o=>i.gender=o)},null,512),[[Iu,i.gender]]),iA,Ve("    "),fe(f("input",{type:"radio",id:"female",value:"Female","onUpdate:modelValue":e[5]||(e[5]=o=>i.gender=o)},null,512),[[Iu,i.gender]]),rA]),oA])],32),i.notification?(te(),re("div",aA,Ge(i.notification),1)):Do("",!0)],64)}const em=ct(XT,[["render",lA]]),cA="/vitevue-project/assets/appicon-93e9f5f4.png";const uA={data(){return{email:"",password:"",notification:"",imagePaths:{appicon:cA}}},methods:{login(){tE(bs,this.email,this.password).then(()=>{this.$emit("loggedIn")}).catch(t=>{switch(t.code){case"auth/user-not-found":this.notification="This email is still not yet register. Please register before login";break;case"auth/wrong-password":this.notification="The email or password is incorrect. Please try again.";break;default:console.error("Login error:",t)}})}}},hA=["src"],dA=f("br",null,null,-1),fA=f("br",null,null,-1),pA=f("br",null,null,-1),gA=f("br",null,null,-1),mA=f("button",{class:"loginbut",style:{"font-weight":"bold"}},"Log in",-1),yA={key:0,class:"notification"};function vA(t,e,n,s,i,r){return te(),re(Se,null,[f("form",{onSubmit:e[2]||(e[2]=Hl((...o)=>r.login&&r.login(...o),["prevent"])),class:"login"},[f("img",{src:i.imagePaths.appicon,alt:"community logo",width:"50"},null,8,hA),dA,fA,fe(f("input",{type:"email",class:"input",placeholder:"What's your email?",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),style:{"border-radius":"10px"}},null,512),[[ve,i.email]]),pA,fe(f("input",{type:"password",class:"input",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),style:{"border-radius":"10px"}},null,512),[[ve,i.password]]),gA,mA],32),i.notification?(te(),re("div",yA,Ge(i.notification),1)):Do("",!0)],64)}const tm=ct(uA,[["render",vA]]);const _A={name:"Discover"},wA={class:"discover"},EA=Bs('<h1>Hightlights</h1><div class="section"><a href="https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank"><img src="https://media.freemalaysiatoday.com/wp-content/uploads/2021/06/03-BLOOD-DONATION-.jpg" width="100%" height="100%"></a><h2>A guide to donating blood for the first time</h2><p><a href="https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank"> PETALING JAYA: Drawing blood may seem daunting to first-time donors, but rest assured it is a simple, quick and safe process that is capable of saving lives. While blood banks have continued to operate as an essential service in the past two years, National Blood Centre director Dr Noryati Abu Amin said there were additional safety measures in place to minimise the risk of Covid-19. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.thestar.com.my/news/nation/2023/06/18/gift-of-life-more-than-700000-bags-of-blood-donated-in-2022-says-health-dg" target="_blank"><img src="https://apicms.thestar.com.my/uploads/images/2023/06/18/2131729.jpg" width="100%" height="100%"></a><h2>Gift of life: More than 700,000 bags of blood donated in 2022, says Health DG</h2><p><a href="https://www.thestar.com.my/news/nation/2023/06/18/gift-of-life-more-than-700000-bags-of-blood-donated-in-2022-says-health-dg" target="_blank"> JOHOR BARU: More than 700,000 bags of blood were donated to blood banks nationwide last year, says Datuk Dr Muhammad Radzi Abu Hassan. The Health director-general said this was an increase of about 13.7% from previous years. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.nst.com.my/news/nation/2022/12/859167/retired-teacher-70-makes-final-blood-donation-356th-time" target="_blank"><img src="https://assets.nst.com.my/images/articles/315890948_510411854460227_6907366706555040351_n_1670548888.jpg" width="100%" height="100%"></a><h2>Retired teacher, 70, makes final blood donation for 356th time</h2><p><a href="https://www.nst.com.my/news/nation/2022/12/859167/retired-teacher-70-makes-final-blood-donation-356th-time" target="_blank"> KUALA LUMPUR: Retired teacher Lum Kien Seng went to donate his blood for the the 356th time last week, and the final one for he can no longer do so due to his age. Lum, now aged 70, said he felt proud to be able to help save many lives through his effort for the past 34 years. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.nst.com.my/news/nation/2023/06/921576/health-ministry-sets-blood-donation-rate-35-40-donors-1000-population" target="_blank"><img src="https://assets.nst.com.my/images/articles/zonblood2_1687096260.jpg" width="100%" height="100%"></a><h2>Health Ministry sets blood donation rate of 35 to 40 donors per 1,000 population by 2030</h2><p><a href="https://www.nst.com.my/news/nation/2023/06/921576/health-ministry-sets-blood-donation-rate-35-40-donors-1000-population" target="_blank"> JOHOR BARU: The Health Ministry through its Transfusion Medicine Services is targeting a national blood donation rate of 35 to 40 donors per 1,000 population by the year 2030. Health director-general Datuk Dr Muhammad Radzi Abu Hassan said the target was to meet patient care needs in line with the annual population growth rate in Malaysia. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.thestar.com.my/metro/metro-news/2023/04/06/on-mission-to-boost-blood-donor-numbers" target="_blank"><img src="https://apicms.thestar.com.my/uploads/images/2023/04/06/2011293.jpg" width="100%" height="100%"></a><h2>On mission to boost blood donor numbers</h2><p><a href="https://www.thestar.com.my/metro/metro-news/2023/04/06/on-mission-to-boost-blood-donor-numbers" target="_blank"> Petaling Jaya City Council (MBPJ) and the National Blood Centre (PDN) launched their first blood donation campaign with the theme “Donating blood is a noble practice” at the city council’s headquarters. <p><span class="click">(Click to read more)</span></p></a></p></div>',6),bA=[EA];function IA(t,e,n,s,i,r){return te(),re("div",wA,bA)}const nm=ct(_A,[["render",IA]]),TA="/vitevue-project/assets/edu-bloodtype-f9f6fcd8.jpg",AA="/vitevue-project/assets/edu-eligibility-56e0be29.jpg",SA="/vitevue-project/assets/edu-perks-72313c18.jpg";const CA={methods:{goToBloodType(){this.$router.push("/education/bloodtype")},goToEligibility(){this.$router.push("/education/eligibility")},goToPerks(){this.$router.push("/education/perks")},goToFAQ(){this.$router.push("/education/faq")}},data(){return{imagePaths:{bloodType:TA,eligibility:AA,perks:SA}}}},kA={class:"education"},RA=f("h2",null,"WHY BLOOD?",-1),PA={class:"edu-div"},OA=["src"],DA={class:"edu-div-content"},NA=f("p",null,[f("b",null,"WHAT BLOOD TYPES MATCH?"),f("br"),Ve(" There are four main blood types: A, B, AB and O. Combinations of proteins and sugars, called antigens, on the surface of red blood cells are what makes the blood type either compatible or incompatible with other blood types.")],-1),MA={class:"edu-div"},xA=["src"],LA={class:"edu-div-content"},UA=f("p",null,[f("b",null,"AM I ELIGIBLE TO DONATE?"),f("br"),Ve(" Curious about your eligibility to donate blood? Find out if you meet the criteria to make a life-saving contribution.")],-1),FA={class:"edu-div"},$A=["src"],BA={class:"edu-div-content"},VA=f("p",null,[f("b",null,"MALAYSIAN BLOOD DONOR PRIVILEGES"),f("br"),Ve(" Donating blood just once can save up to 3 lives but did you know regular blood donors get special medical privileges in Malaysia? Click 'Learn More' to explore the health benefits and medical privileges given to blood donors in Malaysia.")],-1),jA={class:"edu-div"},HA={class:"edu-div-content"},qA=f("p",null,[f("b",null,"FREQUENTLY ASKED QUESTIONS"),f("br"),Ve(" Answers to our most frequently asked questions are just one click away.")],-1);function KA(t,e,n,s,i,r){return te(),re("div",kA,[RA,f("div",PA,[f("img",{src:i.imagePaths.bloodType,alt:"Blood Type Image"},null,8,OA),f("div",DA,[NA,f("div",null,[f("button",{onClick:e[0]||(e[0]=(...o)=>r.goToBloodType&&r.goToBloodType(...o))},"Learn More")])])]),f("div",MA,[f("img",{src:i.imagePaths.eligibility,alt:"Blood Donation Image"},null,8,xA),f("div",LA,[UA,f("div",null,[f("button",{onClick:e[1]||(e[1]=(...o)=>r.goToEligibility&&r.goToEligibility(...o))},"Learn More")])])]),f("div",FA,[f("img",{src:i.imagePaths.perks,alt:"Body Checkup Image"},null,8,$A),f("div",BA,[VA,f("div",null,[f("button",{onClick:e[2]||(e[2]=(...o)=>r.goToPerks&&r.goToPerks(...o))},"Learn More")])])]),f("div",jA,[f("div",HA,[qA,f("div",null,[f("button",{onClick:e[3]||(e[3]=(...o)=>r.goToFAQ&&r.goToFAQ(...o))},"Go to FAQ")])])])])}const sm=ct(CA,[["render",KA]]);const zA={name:"Map",setup(){const t=vd(null),e=[{lat:3.06484594571016,lng:101.61692563544386},{lat:2.970786212821712,lng:101.7137324675521},{lat:3.1856896992217107,lng:101.63501319960115},{lat:3.05032462984594,lng:101.6709347088716},{lat:3.072168678003126,lng:101.60651263901032}],n=()=>{const i={lat:37.7749,lng:-122.4194};navigator.geolocation?navigator.geolocation.getCurrentPosition(r=>{i.lat=r.coords.latitude,i.lng=r.coords.longitude,s(i)},()=>{s(i),console.error("Error getting current location")}):(s(i),console.error("Geolocation is not supported by this browser"))},s=i=>{t.value=new google.maps.Map(document.getElementById("map"),{center:i,zoom:15}),e.forEach(r=>{new google.maps.Marker({position:r,map:t.value})})};return Dd(()=>{const i=document.createElement("script");i.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWddpINsAJJplhhkUxmc_qvenPkKVaQKY&callback=initMap",i.defer=!0,i.async=!0,window.initMap=n,document.head.appendChild(i)}),{map:t}}},WA=f("div",{id:"map"},null,-1),GA=[WA];function QA(t,e,n,s,i,r){return te(),re("div",null,GA)}const JA=ct(zA,[["render",QA]]);const YA={data(){return{searchQuery:"",searchDate:"",campaigns:[{id:1,name:"Blood Donation Week at Taylor's University",location:"1, Jln Taylors, 47500 Subang Jaya, Selangor",startDate:"2023-08-17",endDate:"2023-08-25",description:"PUSAT DARAH NEGARA"},{id:2,name:"Blood Donation Week at IOI City Mall",location:"City Sepang, 2AT-3A, Level 3, IOI City Mall, Lbh IRC, Ioi Resort, 62502 Putrajaya",startDate:"2023-07-22",endDate:"2023-07-29",description:"PUSAT KOMUNITI ST JOHN AMBULANS MALAYSIA"}]}},computed:{filteredCampaigns(){return this.campaigns.filter(t=>{const e=t.location.toLowerCase().includes(this.searchQuery.toLowerCase()),n=!this.searchDate||this.searchDate>=t.startDate&&this.searchDate<=t.endDate;return e&&n})}}},XA={class:"camptest"},ZA=f("label",{style:{"font-size":"small"}},"Filter by date: ",-1),eS={class:"camporganizer"},tS=f("span",{class:"data"},"Address",-1),nS=f("br",null,null,-1),sS=f("span",{class:"data"},"Date",-1),iS=f("br",null,null,-1),rS=f("div",{style:{width:"100%","text-align":"right","margin-bottom":"3px"}},[f("a",{class:"register",href:"https://forms.gle/znWG6ZWZZXfAoLXN6",target:"_blank"},"Register")],-1);function oS(t,e,n,s,i,r){return te(),re("div",XA,[fe(f("input",{class:"search",type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.searchQuery=o),placeholder:"Search by location"},null,512),[[ve,i.searchQuery]]),ZA,fe(f("input",{class:"date",type:"date","onUpdate:modelValue":e[1]||(e[1]=o=>i.searchDate=o)},null,512),[[ve,i.searchDate]]),f("ul",null,[(te(!0),re(Se,null,Ro(r.filteredCampaigns,o=>(te(),re("li",{key:o.id},[f("h3",null,Ge(o.name),1),f("p",eS,"by "+Ge(o.description),1),f("p",null,[tS,nS,Ve(" "+Ge(o.location),1)]),f("p",null,[sS,iS,Ve(" "+Ge(o.startDate)+" to "+Ge(o.endDate),1)]),rS]))),128))])])}const aS=ct(YA,[["render",oS]]);const lS={name:"Campaign",components:{MapTest:JA,CampTest:aS}},cS={class:"campaign"},uS=f("p",{style:{"font-family":"Times New Roman","font-size":"20px"}},"Blood donation campaigns",-1),hS=f("br",null,null,-1),dS=f("div",{class:"container"},[f("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1117610863434!2d101.61423517467577!3d3.0647849969109493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c5f9450eaf9%3A0xe4c38bd5f7d440b1!2sTaylor's%20University%20Lakeside%20Campus!5e0!3m2!1sen!2smy!4v1688204067801!5m2!1sen!2smy",width:"100%",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),fS=Bs('<div class="section"><p>Blood Donation Week at Taylor&#39;s University<br><span class="info">by PUSAT DARAH NEGARA</span></p><details><summary>Show Campaign Dates</summary><ul><li><span class="day">Aug 17, 2023 (Thu)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 18, 2023 (Fri)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 19, 2023 (Sat)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 20, 2023 (Sun)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 21, 2023 (Mon)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 22, 2023 (Tue)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 23, 2023 (Wed)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 24, 2023 (Thu)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 25, 2023 (Fri)</span><span>10:00 AM - 05:00 PM</span></li></ul></details><a href="https://forms.gle/znWG6ZWZZXfAoLXN6" target="_blank">Click here to register</a></div>',1),pS=f("div",{class:"container"},[f("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.456807611912!2d101.7110931746754!3d2.970662997005473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdca0c21c76841%3A0x2c98384480140180!2sIOI%20City%20Mall!5e0!3m2!1sen!2smy!4v1688204094657!5m2!1sen!2smy",width:"100%",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),gS=Bs('<div class="section"><p> Blood Donation Week at IOI City Mall<br><span class="info">by PUSAT KOMUNITI ST JOHN AMBULANS MALAYSIA</span></p><details><summary>Show Campaign Dates</summary><ul><li><span class="day">July 22, 2023 (Sat)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">July 23, 2023 (Sun)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">July 24, 2023 (Mon)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">July 25, 2023 (Tue)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">July 26, 2023 (Wed)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">July 27, 2023 (Thu)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">July 28, 2023 (Fri)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">July 29, 2023 (Sat)</span><span>10:00 AM - 05:00 PM</span></li></ul></details><a href="https://forms.gle/6DCNrWcpjiiDTVZSA" target="_blank">Click here to register</a></div>',1),mS=f("div",{class:"container"},[f("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7967.308370541806!2d101.62684859001038!3d3.1853200371597294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc48a5d32f5fb7%3A0x1fbfb9bf04283220!2sDesa%20Parkcity%2C%2052200%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1688204830497!5m2!1sen!2smy",width:"100%",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),yS=Bs('<div class="section"><p> Blood Donation Hero at Desa ParkCity<br><span class="info">by BULAN SABIT MERAH MALAYSIA CAWANGAN SELANGOR</span></p><details><summary>Show Campaign Dates</summary><ul><li><span class="day">Aug 8, 2023 (Tue)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 9, 2023 (Wed)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 10, 2023 (Thu)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 11, 2023 (Fri)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 12, 2023 (Sat)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 13, 2023 (Sun)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 14, 2023 (Mon)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Aug 15, 2023 (Tue)</span><span>10:00 AM - 05:00 PM</span></li></ul></details><a href="https://forms.gle/rfbBYvxGLepFSGPc7" target="_blank">Click here to register</a></div>',1),vS=f("div",{class:"container"},[f("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1658017801956!2d101.66609207681692!3d3.050235388998303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4ae7f2b662d5%3A0x24640a80dedccc95!2sPavilion%20Bukit%20Jalil!5e0!3m2!1sen!2smy!4v1688205098352!5m2!1sen!2smy",width:"100%",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),_S=Bs('<div class="section"><p> Blood Donation Hero 2.0 at Pavillion Bukit Jalil<br><span class="info">by Vedo Wellness Sdn Bhd</span></p><details><summary>Show Campaign Dates</summary><ul><li><span class="day">Sep 5, 2023 (Tue)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 6, 2023 (Wed)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 7, 2023 (Thu)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 8, 2023 (Fri)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 9, 2023 (Sat)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 10, 2023 (Sun)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 11, 2023 (Mon)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 12, 2023 (Tue)</span><span>10:00 AM - 05:00 PM</span></li></ul></details><a href="https://forms.gle/ppf4aaGm453Cx6Gy9" target="_blank">Click here to register</a></div>',1),wS=f("div",{class:"container"},[f("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.08455521837!2d101.60377057467578!3d3.0720836969036194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c8776586d9b%3A0x5e19a549d4f26f25!2sSunway%20Pyramid%20Shopping%20Mall!5e0!3m2!1sen!2smy!4v1688205306454!5m2!1sen!2smy",width:"100%",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),ES=Bs('<div class="section"><p> Donate &amp; SaveALive at Sunway Pyramid<br><span class="info">by A-Med Clinic Sg Chua Kajang</span></p><details><summary>Show Campaign Dates</summary><ul><li><span class="day">Sep 15, 2023 (Sat)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 16, 2023 (Sun)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 17, 2023 (Mon)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 18, 2023 (Tue)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 19, 2023 (Wed)</span><span>10:00 AM - 05:00 PM</span></li><li><span class="day">Sep 20, 2023 (Thu)</span><span>10:00 AM - 05:00 PM</span></li></ul></details><a href="https://forms.gle/UnBSFTCa58vzhPCE9" target="_blank">Click here to register</a></div>',1);function bS(t,e,n,s,i,r){const o=bi("CampTest"),a=bi("MapTest");return te(),re(Se,null,[be(o),f("div",cS,[uS,be(a),hS,dS,fS,pS,gS,mS,yS,vS,_S,wS,ES])],64)}const IS=ct(lS,[["render",bS]]);const TS={data(){return{name:"",phone:"",email:"",street:"",city:"",state:"",postalcode:"",message:"",campname:"",info:"",startDate:"",endDate:"",time1:"",time2:"",venue:""}},methods:{async submitForm(){const t={Name:this.name,Phone:this.phone,Email:this.email,Street:this.street,City:this.city,State:this.state,PostalCode:this.postalcode,Message:this.message,CampName:this.campname,Information:this.info,StartDate:this.startDate,EndDate:this.endDate,StartTime:this.time1,EndTime:this.time2,Venue:this.venue};try{const e=Vc();await GT(UT(e,"Apply2"),t),this.name="",this.phone="",this.email="",this.street="",this.city="",this.state="",this.postalcode="",this.message="",this.campname="",this.info="",this.startDate="",this.endDate="",this.time1="",this.time2="",this.venue=""}catch(e){console.error("Error writing document: ",e)}}}},ke=t=>(oy("data-v-5944d66c"),t=t(),ay(),t),AS={class:"content"},SS=ke(()=>f("label",{for:"name"},"Hospital Name:",-1)),CS=ke(()=>f("label",{for:"phone"},"Phone:",-1)),kS=ke(()=>f("label",{for:"email"},"Email:",-1)),RS=ke(()=>f("small",null,"example@example.com",-1)),PS=ke(()=>f("p",{style:{"font-weight":"bold"}},"Location",-1)),OS=ke(()=>f("label",{for:"street"},"Street:",-1)),DS=ke(()=>f("label",{for:"city"},"City:",-1)),NS=ke(()=>f("label",{for:"state"},"State:",-1)),MS=ke(()=>f("label",{for:"postalCode"},"Postal Code:",-1)),xS=ke(()=>f("label",{for:"message"},"Message:",-1)),LS=ke(()=>f("p",{style:{"font-weight":"bold"}},"Campaign",-1)),US=ke(()=>f("label",{for:"campname"},"Camp Name:",-1)),FS=ke(()=>f("label",{for:"info"},"Camp Information:",-1)),$S=ke(()=>f("label",{for:"startDate"},"Start Date of the Campaign:",-1)),BS=ke(()=>f("label",{for:"endDate"},"End Date of the Campaign:",-1)),VS=ke(()=>f("label",{for:"time1"},"Time Start:",-1)),jS=ke(()=>f("label",{for:"time2"},"Time End:",-1)),HS=ke(()=>f("label",{for:"venue"},"Campaign Venue:",-1)),qS=ke(()=>f("div",{class:"button"},[f("button",{type:"submit",id:"submit"},"Submit")],-1));function KS(t,e,n,s,i,r){return te(),re("form",{onSubmit:e[15]||(e[15]=Hl((...o)=>r.submitForm&&r.submitForm(...o),["prevent"])),class:"form"},[f("div",AS,[SS,fe(f("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=o=>i.name=o),required:""},null,512),[[ve,i.name]]),CS,fe(f("input",{type:"tel",id:"phone","onUpdate:modelValue":e[1]||(e[1]=o=>i.phone=o),required:""},null,512),[[ve,i.phone]]),kS,fe(f("input",{type:"email",id:"email","onUpdate:modelValue":e[2]||(e[2]=o=>i.email=o),required:""},null,512),[[ve,i.email]]),RS,PS,OS,fe(f("input",{type:"text",id:"street","onUpdate:modelValue":e[3]||(e[3]=o=>i.street=o),required:""},null,512),[[ve,i.street]]),DS,fe(f("input",{type:"text",id:"city","onUpdate:modelValue":e[4]||(e[4]=o=>i.city=o),required:""},null,512),[[ve,i.city]]),NS,fe(f("input",{type:"text",id:"state","onUpdate:modelValue":e[5]||(e[5]=o=>i.state=o),required:""},null,512),[[ve,i.state]]),MS,fe(f("input",{type:"text",id:"postalCode","onUpdate:modelValue":e[6]||(e[6]=o=>i.postalcode=o),required:""},null,512),[[ve,i.postalcode]]),xS,fe(f("textarea",{id:"message","onUpdate:modelValue":e[7]||(e[7]=o=>i.message=o)},null,512),[[ve,i.message]]),LS,US,fe(f("input",{type:"text",id:"campname","onUpdate:modelValue":e[8]||(e[8]=o=>i.campname=o),required:""},null,512),[[ve,i.campname]]),FS,fe(f("input",{type:"text",id:"info","onUpdate:modelValue":e[9]||(e[9]=o=>i.info=o),required:""},null,512),[[ve,i.info]]),$S,fe(f("input",{type:"date",id:"startDate","onUpdate:modelValue":e[10]||(e[10]=o=>i.startDate=o),required:""},null,512),[[ve,i.startDate]]),BS,fe(f("input",{type:"date",id:"endDate","onUpdate:modelValue":e[11]||(e[11]=o=>i.endDate=o),required:""},null,512),[[ve,i.endDate]]),VS,fe(f("input",{type:"time",id:"time1","onUpdate:modelValue":e[12]||(e[12]=o=>i.time1=o),required:""},null,512),[[ve,i.time1]]),jS,fe(f("input",{type:"time",id:"time2","onUpdate:modelValue":e[13]||(e[13]=o=>i.time2=o),required:""},null,512),[[ve,i.time2]]),HS,fe(f("input",{type:"text",id:"venue","onUpdate:modelValue":e[14]||(e[14]=o=>i.venue=o),required:""},null,512),[[ve,i.venue]]),qS])],32)}const zS=ct(TS,[["render",KS],["__scopeId","data-v-5944d66c"]]);const WS={props:{isLoggedIn:{type:Boolean,required:!0}},data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},navigate(t){this.$router.push(t),this.isMenuOpen=!1},logOut(){this.$emit("logOut")}},created(){bs.onAuthStateChanged(t=>{this.isLoggedIn=t!==null})}},GS=f("div",{class:"line"},null,-1),QS=f("div",{class:"line"},null,-1),JS=f("div",{class:"line"},null,-1),YS=[GS,QS,JS];function XS(t,e,n,s,i,r){return te(),re(Se,null,[f("div",{class:"hamburger",onClick:e[0]||(e[0]=(...o)=>r.toggleMenu&&r.toggleMenu(...o))},YS),f("div",{class:Xn(["sidebar",{open:i.isMenuOpen}])},[f("ul",null,[f("li",{onClick:e[1]||(e[1]=o=>r.navigate("/home"))},"Home"),f("li",{onClick:e[2]||(e[2]=o=>r.navigate("/highlight"))},"Highlights"),f("li",{onClick:e[3]||(e[3]=o=>r.navigate("/education"))},"Why Blood?"),f("li",{onClick:e[4]||(e[4]=o=>r.navigate("/campaign"))},"Campaign"),f("li",{onClick:e[5]||(e[5]=o=>r.navigate("/profile"))},"Profile"),n.isLoggedIn?(te(),re("li",{key:0,onClick:e[6]||(e[6]=(...o)=>r.logOut&&r.logOut(...o))},"Sign Out")):Do("",!0)])],2)],64)}const im=ct(WS,[["render",XS]]);const ZS={components:{Discover:nm,Education:sm},methods:{goToOrganization(){this.$router.push("/home/organization")}}},eC=f("h1",{class:""},"Welcome to the Blood Donation Community",-1),tC=f("p",{class:"description"},[Ve(" This app is dedicated to promoting blood donation"),f("br"),Ve("and raising awareness about its importance in saving lives. ")],-1),nC=f("p",{class:"join"},[Ve(" Together, we can make a difference and help those in need."),f("br"),Ve("Join us in the noble cause of donating blood! ")],-1);function sC(t,e,n,s,i,r){const o=bi("Discover"),a=bi("Education");return te(),re(Se,null,[eC,tC,nC,f("button",{onClick:e[0]||(e[0]=(...l)=>r.goToOrganization&&r.goToOrganization(...l))},"Create Camp Now"),be(o),be(a)],64)}const iC=ct(ZS,[["render",sC]]);const rC={key:0},oC={style:{"text-align":"center"}},aC={style:{"text-align":"center"}},lC={key:1},cC=f("div",null,[f("div",{style:{position:"fixed",height:"50px",width:"100%","background-color":"red"}},"   ")],-1),uC={id:"app1"},hC={class:"welcome"},dC={name:"App",components:{SignupForm:em,LoginForm:tm,HamburgerMenu:im},data(){return{isLoggedIn:!1,showLogin:!0,displayName:""}},beforeUpdate(){bs.currentUser&&(this.displayName=bs.currentUser.displayName)},mounted(){window.addEventListener("beforeunload",this.saveLastVisitedPage);const t=localStorage.getItem("lastVisitedPage");t&&this.$route.path!==t&&this.$router.push(t)},beforeUnmount(){window.removeEventListener("beforeunload",this.saveLastVisitedPage)},methods:{saveLastVisitedPage(){localStorage.setItem("lastVisitedPage","/home")},logInOrSignUp(){this.isLoggedIn=!0,this.$router.push("/home")},logOut(){oE(bs).then(()=>{this.isLoggedIn=!1,L0().push("/")})}}},fC=Object.assign(dC,{setup(t){return(e,n)=>{const s=bi("router-view");return e.isLoggedIn?(te(),re("div",lC,[cC,f("div",uC,[f("h2",hC,"Welcome, "+Ge(e.displayName),1),be(s),be(im,{isLoggedIn:e.isLoggedIn,onLogOut:e.logOut},null,8,["isLoggedIn","onLogOut"])])])):(te(),re("div",rC,[e.showLogin?(te(),re(Se,{key:0},[be(tm,{onLoggedIn:e.logInOrSignUp,class:"login"},null,8,["onLoggedIn"]),f("p",oC,[Ve("No account yet? "),f("span",{onClick:n[0]||(n[0]=i=>e.showLogin=!1),style:{"font-weight":"bold","text-decoration":"underline"}},"Sign Up"),Ve(" instead.")])],64)):(te(),re(Se,{key:1},[be(em,{onLoggedIn:e.logInOrSignUp,class:"signup"},null,8,["onLoggedIn"]),f("p",aC,[Ve("Already registered? "),f("span",{onClick:n[1]||(n[1]=i=>e.showLogin=!0),style:{"font-weight":"bold","text-decoration":"underline"}},"Login"),Ve(" instead.")])],64))]))}}}),pC="/vitevue-project/assets/faq-icon-bd5e6b45.png";const gC={data(){return{items:[{id:1,title:"1. What should I do if I need to claim my privilege as a blood donor?",content:"Kindly proceed to the nearest blood bank for verification in order to claim your privilege.",showContent:!1},{id:2,title:"2. Why should I donate blood?",content:"Every day blood is needed to save lives. Blood may be needed for surgery, accident victims or to treat patients with leukemia, cancer, heart disease, liver disease and hemophilia. Your contribution could save a life.",showContent:!1},{id:3,title:"3. Am I eligible to donate blood?",content:"Yes, if you are over 17 years old (age verification required) and weight more than 45kg. In general, taking medication is not an obstacle to donating blood because acceptance and rejection are based on medical reports. If you are taking any medication, please inform before donating blood.",showContent:!1},{id:4,title:"4. Am I healthy enough to donate blood?",content:"You must be healthy enough to donate blood. Your health and safety is very important to us. You will be asked to fill up a blood donation questionnaire where your medical history will be asked. Blood pressure and a drop of blood will be taken for a hemoglobin test. All information provided by you is confidential.",showContent:!1},{id:5,title:"5. How long does it take to donate blood?",content:"The process of donating blood will take between 7-10 minutes, but you are advised to be at the blood collection site for approximately one hour.",showContent:!1},{id:6,title:"6. Does the needle hurt?",content:"You only feel a little pain when the needle is inserted and nothing after.",showContent:!1},{id:7,title:"7. How much blood will be taken?",content:"A total of 450ml, which is less than 1 pint (586ml). Adults usually have about 5 liters (10-12 pints) of blood in the body.",showContent:!1},{id:8,title:"8. How does it feel after donating blood?",content:"Most people feel comfortable after donating blood. You are advised to have a light meal before donating blood.",showContent:!1},{id:9,title:"9. Can I do sports after donating blood?",content:"Yes. Just avoid doing heavy activities for 5 hours after donating blood. Drink plenty of water within 24 hours.",showContent:!1},{id:10,title:"10. How long does it take to replace the donated blood?",content:"Plasma is replaced within 24 hours. You need to drink 4 glasses of water without alcohol and do not do heavy work with your hands for a period of 5 hours. Red blood takes 4-8 weeks to be replaced and you can donate again after that.",showContent:!1},{id:11,title:"11. What will be done to the donated blood?",content:"Your blood will be tested to determine blood group, viral infwhich is used in 22 blood collection centers nationwideections such as syphilis, hepatitis (B & C) and AIDS (HIV). Then, stored for patient use. Blood can also be separated into several blood components and can be used to treat more than one patient.",showContent:!1}],imagePaths:{faqicon:pC}}},methods:{toggleContent(t){this.items.forEach(e=>{e.id===t?e.showContent=!e.showContent:e.showContent=!1})}}},mC={class:"faq"},yC=["src"],vC=f("br",null,null,-1),_C=f("b",null,"Frequently Asked Questions",-1),wC=["onClick"],EC={class:"toggleIcon"},bC={key:0,class:"content-edu"};function IC(t,e,n,s,i,r){return te(),re("div",mC,[f("img",{src:i.imagePaths.faqicon,alt:"FAQ Icon"},null,8,yC),vC,_C,f("div",null,[(te(!0),re(Se,null,Ro(i.items,o=>(te(),re("div",{key:o.id,class:"faqborder"},[f("div",{class:Xn(["title",{open:o.showContent}]),onClick:a=>r.toggleContent(o.id)},[Ve(Ge(o.title)+" ",1),f("span",EC,Ge(o.showContent?"-":"+"),1)],10,wC),o.showContent?(te(),re("div",bC,Ge(o.content),1)):Do("",!0)]))),128))])])}const TC=ct(gC,[["render",IC]]),AC="/vitevue-project/assets/bt-icon-bc98eb4f.png";const SC={data(){return{tableData:[{column1:"A+",column2:"A+, AB+",column3:"A+, A-, O+, O-"},{column1:"O+",column2:"O+, A+, B+, AB+",column3:"O+, O-"},{column1:"B+",column2:"B+, AB+",column3:"B+, B-, O+, O-"},{column1:"AB+",column2:"AB+",column3:"ALL BLOOD TYPES"},{column1:"A-",column2:"A+, A-, AB+, AB-",column3:"A-, O-"},{column1:"O-",column2:"ALL BLOOD TYPES",column3:"O-"},{column1:"B-",column2:"B+, B-, AB+, AB-",column3:"B-, O-"},{column1:"AB-",column2:"AB+, AB-",column3:"AB-, A-, B-, O-"}],imagePaths:{bticon:AC}}}},CC={class:"bloodtype-table"},kC=["src"],RC=f("br",null,null,-1),PC=f("b",null,"Matching Blood Types",-1),OC=f("p",null,"A blood type is a classification of blood based on the presence or absence of antigens on the surface of red blood cells. Human blood is divided into one of four main blood types: A, B, AB, and O, and is further divided into Rh+ or Rh-.",-1),DC={class:"table-border"},NC=f("thead",null,[f("tr",null,[f("th",{class:"left-column"},"Type"),f("th",null,"You can give blood to"),f("th",{class:"right-column"},"You can receive blood from")])],-1),MC={class:"left-column"},xC={class:"right-column"};function LC(t,e,n,s,i,r){return te(),re("div",CC,[f("img",{src:i.imagePaths.bticon,alt:"Blood Type Icon"},null,8,kC),RC,PC,OC,f("div",DC,[f("table",null,[NC,f("tbody",null,[(te(!0),re(Se,null,Ro(i.tableData,(o,a)=>(te(),re("tr",{key:a,class:Xn({"odd-row":a%2!==0})},[f("td",MC,Ge(o.column1),1),f("td",null,Ge(o.column2),1),f("td",xC,Ge(o.column3),1)],2))),128))])])])])}const UC=ct(SC,[["render",LC]]),FC="/vitevue-project/assets/eli-icon-57593af7.png",$C="/vitevue-project/assets/eli-age-13cb64b7.png",BC="/vitevue-project/assets/eli-alcohol-0406a1fc.png",VC="/vitevue-project/assets/eli-gender-d6b663ad.png",jC="/vitevue-project/assets/eli-healthy-53da1207.png",HC="/vitevue-project/assets/eli-malaysia-f0bace01.png",qC="/vitevue-project/assets/eli-sleep-6f387f38.png",KC="/vitevue-project/assets/eli-weight-ba7e910a.png",zC="/vitevue-project/assets/eli-woman-8394ab2a.png";const WC={data(){return{imagePaths:{eliicon:FC,age:$C,alcohol:BC,gender:VC,healthy:jC,malaysia:HC,sleep:qC,weight:KC,woman:zC}}}},GC={class:"eligibility"},QC=["src"],JC=f("br",null,null,-1),YC=f("b",null,"Blood Donation Eligibility Requirements",-1),XC={class:"eli-table"},ZC={style:{width:"50%"}},ek=["src"],tk=f("p",{class:"type"},"AGE",-1),nk=f("p",{class:"eli"},"18-60 years old",-1),sk=f("p",{class:"desp"},"*Parental consent required for 17 years old and below",-1),ik={style:{width:"50%"}},rk=["src"],ok=f("p",{class:"type"},"MEDICINE & ALCOHOL",-1),ak=f("p",{class:"eli"},"Alcohol-free",-1),lk=f("p",{class:"desp"},"Avoid consuming alcohol a day before donating",-1),ck=["src"],uk=f("p",{class:"type"},"HEALTHY",-1),hk=f("p",{class:"eli"},"Physical & mental",-1),dk=f("p",{class:"desp"},"No chronic diseases",-1),fk=["src"],pk=f("p",{class:"type"},"WEIGHT",-1),gk=f("p",{class:"eli"},"> 45kg",-1),mk=["src"],yk=f("p",{class:"type"},"SUFFICIENT SLEEP",-1),vk=f("p",{class:"eli"},"> 5 hours",-1),_k=f("p",{class:"desp"},"Donors must have at least five hours of sleep before donating",-1),wk=["src"],Ek=f("p",{class:"type"},"RESIDING IN MALAYSIA",-1),bk=f("p",{class:"eli"},"> 1 year",-1),Ik=f("p",{class:"desp"},"for non-Malaysians",-1),Tk=["src"],Ak=f("p",{class:"type"},"HIGH-RISK ACTIVITIES",-1),Sk=f("p",{class:"eli"},"Do not engage",-1),Ck=f("p",{class:"desp"},"Do not use drugs or engage in sexual intercourse with many partners",-1),kk=["src"],Rk=f("p",{class:"type"},"WOMEN",-1),Pk=f("p",{class:"eli"},"Not pregnant or during menstrual cycle",-1),Ok=f("p",{class:"desp"},"including breastfeeding",-1);function Dk(t,e,n,s,i,r){return te(),re("div",GC,[f("img",{src:i.imagePaths.eliicon,alt:"Eligibility Icon"},null,8,QC),JC,YC,f("table",XC,[f("tr",null,[f("td",ZC,[f("img",{src:i.imagePaths.age,alt:"Age Icon"},null,8,ek),tk,nk,sk]),f("td",ik,[f("img",{src:i.imagePaths.alcohol,alt:"Alcohol free Icon"},null,8,rk),ok,ak,lk])]),f("tr",null,[f("td",null,[f("img",{src:i.imagePaths.healthy,alt:"Healthy Icon"},null,8,ck),uk,hk,dk]),f("td",null,[f("img",{src:i.imagePaths.weight,alt:"Weight Icon"},null,8,fk),pk,gk])]),f("tr",null,[f("td",null,[f("img",{src:i.imagePaths.sleep,alt:"Sleep Icon"},null,8,mk),yk,vk,_k]),f("td",null,[f("img",{src:i.imagePaths.malaysia,alt:"Malaysia Icon"},null,8,wk),Ek,bk,Ik])]),f("tr",null,[f("td",null,[f("img",{src:i.imagePaths.gender,alt:"Gender Icon"},null,8,Tk),Ak,Sk,Ck]),f("td",null,[f("img",{src:i.imagePaths.woman,alt:"Woman Icon"},null,8,kk),Rk,Pk,Ok])])])])}const Nk=ct(WC,[["render",Dk]]),Mk="/vitevue-project/assets/perks-privilege-0e47030c.png";const xk={data(){return{tableData:[{column1:"1 time",column2:"Free outpatient treatment and medical treatment (excluding X-ray and surgical charges) and second class wards for a period of * 4 months."},{column1:"2 times (within 12 months)",column2:"Free Hepatitis B preventive injection."},{column1:"2 ~ 5 times",column2:"Free outpatient treatment and medical treatment and second class wards for a period of * 4 months."},{column1:"6 ~ 10 times",column2:"Free * year outpatient treatment and second class medical treatment for a * 6 months period."},{column1:"11 ~ 15 times",column2:"Free * 2 year outpatient treatment and second class medical treatment for a * 6 month period."},{column1:"16 ~ 20 times",column2:"Free outpatient treatment and medical treatment and second class wards for a * 2 year period."},{column1:"21 ~ 30 times",column2:"Free outpatient treatment and medical treatment and second class wards for a period of * 3 years."},{column1:"31 ~ 40 times",column2:"Free outpatient treatment and medical treatment and first class wards for a period of * 4 years."},{column1:"41 ~ 50 times",column2:"Free outpatient treatment and medical treatment and first class wards for a period of * 6 years."},{column1:'Over 50 times (for "Whole Blood") and Over 150 times (for aferesis donors)',column2:"Free outpatient treatment and first-class medical treatment and wards for 10 years and second-class wards of life after 10 years in first-class ward."}],imagePaths:{privileges:Mk}}}},Lk={class:"perks"},Uk=["src"],Fk=f("br",null,null,-1),$k=f("b",null,"Malaysian Blood Donor Privileges",-1),Bk=f("p",null,"There are many health benefits to donating blood and those who donate blood in Malaysia can benefit from many medical perks offered by the Ministry of Health:",-1),Vk={class:"perks-table"},jk=f("thead",null,[f("tr",null,[f("th",{class:"left-column"},"Donation Frequency"),f("th",{class:"right-column"},"Medical Privileges")])],-1),Hk={class:"left-column"},qk={class:"right-column"};function Kk(t,e,n,s,i,r){return te(),re("div",Lk,[f("img",{src:i.imagePaths.privileges,alt:"Privilege Icon"},null,8,Uk),Fk,$k,Bk,f("div",Vk,[f("table",null,[jk,f("tbody",null,[(te(!0),re(Se,null,Ro(i.tableData,(o,a)=>(te(),re("tr",{key:a,class:Xn({"odd-row":a%2!==0})},[f("td",Hk,Ge(o.column1),1),f("td",qk,Ge(o.column2),1)],2))),128))])])])])}const zk=ct(xk,[["render",Kk]]),Wk=M0({history:Jv(),scrollBehavior(t,e,n){return n||{top:0}},routes:[{path:"/home",component:iC},{path:"/home/organization",component:zS},{path:"/highlight",component:nm},{path:"/education",component:sm},{path:"/education/bloodtype",component:UC},{path:"/education/faq",component:TC},{path:"/education/eligibility",component:Nk},{path:"/education/perks",component:zk},{path:"/campaign",component:IS}]}),rm=Ov(fC);rm.use(Wk);rm.mount("#app");
