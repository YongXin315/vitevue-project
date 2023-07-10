(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ic(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const _e={},Cs=[],At=()=>{},Sy=()=>!1,Ay=/^on[^a-z]/,Vo=t=>Ay.test(t),rc=t=>t.startsWith("onUpdate:"),$e=Object.assign,oc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ky=Object.prototype.hasOwnProperty,ae=(t,e)=>ky.call(t,e),W=Array.isArray,Ss=t=>ur(t)==="[object Map]",jo=t=>ur(t)==="[object Set]",Vu=t=>ur(t)==="[object Date]",ee=t=>typeof t=="function",Me=t=>typeof t=="string",Ui=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",sf=t=>ve(t)&&ee(t.then)&&ee(t.catch),rf=Object.prototype.toString,ur=t=>rf.call(t),Ry=t=>ur(t).slice(8,-1),of=t=>ur(t)==="[object Object]",ac=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Jr=ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Dy=/-(\w)/g,Kt=Ho(t=>t.replace(Dy,(e,n)=>n?n.toUpperCase():"")),Py=/\B([A-Z])/g,Zs=Ho(t=>t.replace(Py,"-$1").toLowerCase()),qo=Ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),xa=Ho(t=>t?`on${qo(t)}`:""),Fi=(t,e)=>!Object.is(t,e),Xr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},uo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ho=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ju;const cl=()=>ju||(ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Me(s)?My(s):lc(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Me(t))return t;if(ve(t))return t}}const Ny=/;(?![^(]*\))/g,Oy=/:([^]+)/,xy=/\/\*[^]*?\*\//g;function My(t){const e={};return t.replace(xy,"").split(Ny).forEach(n=>{if(n){const s=n.split(Oy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Wt(t){let e="";if(Me(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Wt(t[n]);s&&(e+=s+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ly="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uy=ic(Ly);function af(t){return!!t||t===""}function Fy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ls(t[s],e[s]);return n}function Ls(t,e){if(t===e)return!0;let n=Vu(t),s=Vu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ui(t),s=Ui(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?Fy(t,e):!1;if(n=ve(t),s=ve(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ls(t[o],e[o]))return!1}}return String(t)===String(e)}function $y(t,e){return t.findIndex(n=>Ls(n,e))}const oe=t=>Me(t)?t:t==null?"":W(t)||ve(t)&&(t.toString===rf||!ee(t.toString))?JSON.stringify(t,lf,2):String(t),lf=(t,e)=>e&&e.__v_isRef?lf(t,e.value):Ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:jo(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!W(e)&&!of(e)?String(e):e;let Tt;class By{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Vy(t,e=Tt){e&&e.active&&e.effects.push(t)}function jy(){return Tt}const cc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},cf=t=>(t.w&On)>0,uf=t=>(t.n&On)>0,Hy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=On},qy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];cf(i)&&!uf(i)?i.delete(t):e[n++]=i,i.w&=~On,i.n&=~On}e.length=n}},ul=new WeakMap;let vi=0,On=1;const hl=30;let Ct;const Xn=Symbol(""),dl=Symbol("");class uc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vy(this,s)}run(){if(!this.active)return this.fn();let e=Ct,n=Cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,Cn=!0,On=1<<++vi,vi<=hl?Hy(this):Hu(this),this.fn()}finally{vi<=hl&&qy(this),On=1<<--vi,Ct=this.parent,Cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(Hu(this),this.onStop&&this.onStop(),this.active=!1)}}function Hu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cn=!0;const hf=[];function ei(){hf.push(Cn),Cn=!1}function ti(){const t=hf.pop();Cn=t===void 0?!0:t}function ft(t,e,n){if(Cn&&Ct){let s=ul.get(t);s||ul.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=cc()),df(i)}}function df(t,e){let n=!1;vi<=hl?uf(t)||(t.n|=On,n=!cf(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function nn(t,e,n,s,i,r){const o=ul.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?ac(n)&&a.push(o.get("length")):(a.push(o.get(Xn)),Ss(t)&&a.push(o.get(dl)));break;case"delete":W(t)||(a.push(o.get(Xn)),Ss(t)&&a.push(o.get(dl)));break;case"set":Ss(t)&&a.push(o.get(Xn));break}if(a.length===1)a[0]&&fl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);fl(cc(l))}}function fl(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&qu(s);for(const s of n)s.computed||qu(s)}function qu(t,e){(t!==Ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const zy=ic("__proto__,__v_isRef,__isVue"),ff=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ui)),Ky=hc(),Wy=hc(!1,!0),Gy=hc(!0),zu=Qy();function Qy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)ft(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ei();const s=ue(this)[e].apply(this,n);return ti(),s}}),t}function Yy(t){const e=ue(this);return ft(e,"has",t),e.hasOwnProperty(t)}function hc(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?dv:vf:e?yf:mf).get(s))return s;const o=W(s);if(!t){if(o&&ae(zu,i))return Reflect.get(zu,i,r);if(i==="hasOwnProperty")return Yy}const a=Reflect.get(s,i,r);return(Ui(i)?ff.has(i):zy(i))||(t||ft(s,"get",i),e)?a:tt(a)?o&&ac(i)?a:a.value:ve(a)?t?_f(a):hr(a):a}}const Jy=pf(),Xy=pf(!0);function pf(t=!1){return function(n,s,i,r){let o=n[s];if(Us(o)&&tt(o)&&!tt(i))return!1;if(!t&&(!fo(i)&&!Us(i)&&(o=ue(o),i=ue(i)),!W(n)&&tt(o)&&!tt(i)))return o.value=i,!0;const a=W(n)&&ac(s)?Number(s)<n.length:ae(n,s),l=Reflect.set(n,s,i,r);return n===ue(r)&&(a?Fi(i,o)&&nn(n,"set",s,i):nn(n,"add",s,i)),l}}function Zy(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&nn(t,"delete",e,void 0),s}function ev(t,e){const n=Reflect.has(t,e);return(!Ui(e)||!ff.has(e))&&ft(t,"has",e),n}function tv(t){return ft(t,"iterate",W(t)?"length":Xn),Reflect.ownKeys(t)}const gf={get:Ky,set:Jy,deleteProperty:Zy,has:ev,ownKeys:tv},nv={get:Gy,set(t,e){return!0},deleteProperty(t,e){return!0}},sv=$e({},gf,{get:Wy,set:Xy}),dc=t=>t,zo=t=>Reflect.getPrototypeOf(t);function Mr(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(e!==r&&ft(i,"get",e),ft(i,"get",r));const{has:o}=zo(i),a=s?dc:n?gc:$i;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Lr(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(t!==i&&ft(s,"has",t),ft(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ur(t,e=!1){return t=t.__v_raw,!e&&ft(ue(t),"iterate",Xn),Reflect.get(t,"size",t)}function Ku(t){t=ue(t);const e=ue(this);return zo(e).has.call(e,t)||(e.add(t),nn(e,"add",t,t)),this}function Wu(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=zo(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Fi(e,o)&&nn(n,"set",t,e):nn(n,"add",t,e),this}function Gu(t){const e=ue(this),{has:n,get:s}=zo(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&nn(e,"delete",t,void 0),r}function Qu(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&nn(t,"clear",void 0,void 0),n}function Fr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),l=e?dc:t?gc:$i;return!t&&ft(a,"iterate",Xn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function $r(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=Ss(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?dc:e?gc:$i;return!e&&ft(r,"iterate",l?dl:Xn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function fn(t){return function(...e){return t==="delete"?!1:this}}function iv(){const t={get(r){return Mr(this,r)},get size(){return Ur(this)},has:Lr,add:Ku,set:Wu,delete:Gu,clear:Qu,forEach:Fr(!1,!1)},e={get(r){return Mr(this,r,!1,!0)},get size(){return Ur(this)},has:Lr,add:Ku,set:Wu,delete:Gu,clear:Qu,forEach:Fr(!1,!0)},n={get(r){return Mr(this,r,!0)},get size(){return Ur(this,!0)},has(r){return Lr.call(this,r,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Fr(!0,!1)},s={get(r){return Mr(this,r,!0,!0)},get size(){return Ur(this,!0)},has(r){return Lr.call(this,r,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=$r(r,!1,!1),n[r]=$r(r,!0,!1),e[r]=$r(r,!1,!0),s[r]=$r(r,!0,!0)}),[t,n,e,s]}const[rv,ov,av,lv]=iv();function fc(t,e){const n=e?t?lv:av:t?ov:rv;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ae(n,i)&&i in s?n:s,i,r)}const cv={get:fc(!1,!1)},uv={get:fc(!1,!0)},hv={get:fc(!0,!1)},mf=new WeakMap,yf=new WeakMap,vf=new WeakMap,dv=new WeakMap;function fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pv(t){return t.__v_skip||!Object.isExtensible(t)?0:fv(Ry(t))}function hr(t){return Us(t)?t:pc(t,!1,gf,cv,mf)}function gv(t){return pc(t,!1,sv,uv,yf)}function _f(t){return pc(t,!0,nv,hv,vf)}function pc(t,e,n,s,i){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=pv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function As(t){return Us(t)?As(t.__v_raw):!!(t&&t.__v_isReactive)}function Us(t){return!!(t&&t.__v_isReadonly)}function fo(t){return!!(t&&t.__v_isShallow)}function wf(t){return As(t)||Us(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function bf(t){return uo(t,"__v_skip",!0),t}const $i=t=>ve(t)?hr(t):t,gc=t=>ve(t)?_f(t):t;function Ef(t){Cn&&Ct&&(t=ue(t),df(t.dep||(t.dep=cc())))}function If(t,e){t=ue(t);const n=t.dep;n&&fl(n)}function tt(t){return!!(t&&t.__v_isRef===!0)}function In(t){return Tf(t,!1)}function mv(t){return Tf(t,!0)}function Tf(t,e){return tt(t)?t:new yv(t,e)}class yv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:$i(e)}get value(){return Ef(this),this._value}set value(e){const n=this.__v_isShallow||fo(e)||Us(e);e=n?e:ue(e),Fi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$i(e),If(this))}}function ks(t){return tt(t)?t.value:t}const vv={get:(t,e,n)=>ks(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return tt(i)&&!tt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Cf(t){return As(t)?t:new Proxy(t,vv)}class _v{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new uc(e,()=>{this._dirty||(this._dirty=!0,If(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return Ef(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function wv(t,e,n=!1){let s,i;const r=ee(t);return r?(s=t,i=At):(s=t.get,i=t.set),new _v(s,i,r||!i,n)}function Sn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ko(r,e,n)}return i}function kt(t,e,n,s){if(ee(t)){const r=Sn(t,e,n,s);return r&&sf(r)&&r.catch(o=>{Ko(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(kt(t[r],e,n,s));return i}function Ko(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Sn(l,null,10,[t,o,a]);return}}bv(t,n,i,s)}function bv(t,e,n,s=!0){console.error(t)}let Bi=!1,pl=!1;const Ze=[];let Ft=0;const Rs=[];let Xt=null,zn=0;const Sf=Promise.resolve();let mc=null;function yc(t){const e=mc||Sf;return t?e.then(this?t.bind(this):t):e}function Ev(t){let e=Ft+1,n=Ze.length;for(;e<n;){const s=e+n>>>1;Vi(Ze[s])<t?e=s+1:n=s}return e}function vc(t){(!Ze.length||!Ze.includes(t,Bi&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?Ze.push(t):Ze.splice(Ev(t.id),0,t),Af())}function Af(){!Bi&&!pl&&(pl=!0,mc=Sf.then(Rf))}function Iv(t){const e=Ze.indexOf(t);e>Ft&&Ze.splice(e,1)}function Tv(t){W(t)?Rs.push(...t):(!Xt||!Xt.includes(t,t.allowRecurse?zn+1:zn))&&Rs.push(t),Af()}function Yu(t,e=Bi?Ft+1:0){for(;e<Ze.length;e++){const n=Ze[e];n&&n.pre&&(Ze.splice(e,1),e--,n())}}function kf(t){if(Rs.length){const e=[...new Set(Rs)];if(Rs.length=0,Xt){Xt.push(...e);return}for(Xt=e,Xt.sort((n,s)=>Vi(n)-Vi(s)),zn=0;zn<Xt.length;zn++)Xt[zn]();Xt=null,zn=0}}const Vi=t=>t.id==null?1/0:t.id,Cv=(t,e)=>{const n=Vi(t)-Vi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Rf(t){pl=!1,Bi=!0,Ze.sort(Cv);const e=At;try{for(Ft=0;Ft<Ze.length;Ft++){const n=Ze[Ft];n&&n.active!==!1&&Sn(n,null,14)}}finally{Ft=0,Ze.length=0,kf(),Bi=!1,mc=null,(Ze.length||Rs.length)&&Rf()}}function Sv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||_e;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||_e;f&&(i=n.map(m=>Me(m)?m.trim():m)),d&&(i=n.map(ho))}let a,l=s[a=xa(e)]||s[a=xa(Kt(e))];!l&&r&&(l=s[a=xa(Zs(e))]),l&&kt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(c,t,6,i)}}function Df(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ee(t)){const l=c=>{const u=Df(c,e,!0);u&&(a=!0,$e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ve(t)&&s.set(t,null),null):(W(r)?r.forEach(l=>o[l]=null):$e(o,r),ve(t)&&s.set(t,o),o)}function Wo(t,e){return!t||!Vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Zs(e))||ae(t,e))}let Et=null,Pf=null;function po(t){const e=Et;return Et=t,Pf=t&&t.type.__scopeId||null,e}function Av(t,e=Et,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ah(-1);const r=po(e);let o;try{o=t(...i)}finally{po(r),s._d&&ah(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ma(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:m,ctx:w,inheritAttrs:E}=t;let A,N;const x=po(t);try{if(n.shapeFlag&4){const F=i||s;A=Ut(u.call(F,F,d,r,m,f,w)),N=l}else{const F=e;A=Ut(F.length>1?F(r,{attrs:l,slots:a,emit:c}):F(r,null)),N=e.props?l:kv(l)}}catch(F){ki.length=0,Ko(F,t,1),A=Ne(ns)}let K=A;if(N&&E!==!1){const F=Object.keys(N),{shapeFlag:Ie}=K;F.length&&Ie&7&&(o&&F.some(rc)&&(N=Rv(N,o)),K=Fs(K,N))}return n.dirs&&(K=Fs(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),A=K,po(x),A}const kv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vo(n))&&((e||(e={}))[n]=t[n]);return e},Rv=(t,e)=>{const n={};for(const s in t)(!rc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Dv(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ju(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!Wo(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ju(s,o,c):!0:!!o;return!1}function Ju(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Wo(n,r))return!0}return!1}function Pv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nv=t=>t.__isSuspense;function Ov(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Tv(t)}const Br={};function Si(t,e,n){return Nf(t,e,n)}function Nf(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=_e){var a;const l=jy()===((a=qe)==null?void 0:a.scope)?qe:null;let c,u=!1,d=!1;if(tt(t)?(c=()=>t.value,u=fo(t)):As(t)?(c=()=>t,s=!0):W(t)?(d=!0,u=t.some(F=>As(F)||fo(F)),c=()=>t.map(F=>{if(tt(F))return F.value;if(As(F))return Wn(F);if(ee(F))return Sn(F,l,2)})):ee(t)?e?c=()=>Sn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),kt(t,l,3,[m])}:c=At,e&&s){const F=c;c=()=>Wn(F())}let f,m=F=>{f=x.onStop=()=>{Sn(F,l,4)}},w;if(Hi)if(m=At,e?n&&kt(e,l,3,[c(),d?[]:void 0,m]):c(),i==="sync"){const F=S_();w=F.__watcherHandles||(F.__watcherHandles=[])}else return At;let E=d?new Array(t.length).fill(Br):Br;const A=()=>{if(x.active)if(e){const F=x.run();(s||u||(d?F.some((Ie,Ce)=>Fi(Ie,E[Ce])):Fi(F,E)))&&(f&&f(),kt(e,l,3,[F,E===Br?void 0:d&&E[0]===Br?[]:E,m]),E=F)}else x.run()};A.allowRecurse=!!e;let N;i==="sync"?N=A:i==="post"?N=()=>ut(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),N=()=>vc(A));const x=new uc(c,N);e?n?A():E=x.run():i==="post"?ut(x.run.bind(x),l&&l.suspense):x.run();const K=()=>{x.stop(),l&&l.scope&&oc(l.scope.effects,x)};return w&&w.push(K),K}function xv(t,e,n){const s=this.proxy,i=Me(t)?t.includes(".")?Of(s,t):()=>s[t]:t.bind(s,s);let r;ee(e)?r=e:(r=e.handler,n=e);const o=qe;$s(this);const a=Nf(i,r.bind(s),n);return o?$s(o):Zn(),a}function Of(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Wn(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),tt(t))Wn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Wn(t[n],e);else if(jo(t)||Ss(t))t.forEach(n=>{Wn(n,e)});else if(of(t))for(const n in t)Wn(t[n],e);return t}function te(t,e){const n=Et;if(n===null)return t;const s=Jo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=_e]=e[r];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&Wn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function jn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ei(),kt(l,n,8,[t.el,a,t,e]),ti())}}function xf(t,e){return ee(t)?(()=>$e({name:t.name},e,{setup:t}))():t}const Zr=t=>!!t.type.__asyncLoader,Mf=t=>t.type.__isKeepAlive;function Mv(t,e){Lf(t,"a",e)}function Lv(t,e){Lf(t,"da",e)}function Lf(t,e,n=qe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Go(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Mf(i.parent.vnode)&&Uv(s,e,n,i),i=i.parent}}function Uv(t,e,n,s){const i=Go(e,t,s,!0);Uf(()=>{oc(s[e],i)},n)}function Go(t,e,n=qe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ei(),$s(n);const a=kt(e,n,t,o);return Zn(),ti(),a});return s?i.unshift(r):i.push(r),r}}const cn=t=>(e,n=qe)=>(!Hi||t==="sp")&&Go(t,(...s)=>e(...s),n),Fv=cn("bm"),_c=cn("m"),$v=cn("bu"),Bv=cn("u"),Vv=cn("bum"),Uf=cn("um"),jv=cn("sp"),Hv=cn("rtg"),qv=cn("rtc");function zv(t,e=qe){Go("ec",t,e)}const Ff="components";function wc(t,e){return Wv(Ff,t,!0,e)||t}const Kv=Symbol.for("v-ndc");function Wv(t,e,n=!0,s=!1){const i=Et||qe;if(i){const r=i.type;if(t===Ff){const a=I_(r,!1);if(a&&(a===e||a===Kt(e)||a===qo(Kt(e))))return r}const o=Xu(i[t]||r[t],e)||Xu(i.appContext[t],e);return!o&&s?r:o}}function Xu(t,e){return t&&(t[e]||t[Kt(e)]||t[qo(Kt(e))])}function Gn(t,e,n,s){let i;const r=n&&n[s];if(W(t)||Me(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ve(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const gl=t=>t?Qf(t)?Jo(t)||t.proxy:gl(t.parent):null,Ai=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gl(t.parent),$root:t=>gl(t.root),$emit:t=>t.emit,$options:t=>bc(t),$forceUpdate:t=>t.f||(t.f=()=>vc(t.update)),$nextTick:t=>t.n||(t.n=yc.bind(t.proxy)),$watch:t=>xv.bind(t)}),La=(t,e)=>t!==_e&&!t.__isScriptSetup&&ae(t,e),Gv={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(La(s,e))return o[e]=1,s[e];if(i!==_e&&ae(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ae(c,e))return o[e]=3,r[e];if(n!==_e&&ae(n,e))return o[e]=4,n[e];ml&&(o[e]=0)}}const u=Ai[e];let d,f;if(u)return e==="$attrs"&&ft(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==_e&&ae(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ae(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return La(i,e)?(i[e]=n,!0):s!==_e&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==_e&&ae(t,o)||La(e,o)||(a=r[0])&&ae(a,o)||ae(s,o)||ae(Ai,o)||ae(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zu(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ml=!0;function Qv(t){const e=bc(t),n=t.proxy,s=t.ctx;ml=!1,e.beforeCreate&&eh(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:w,activated:E,deactivated:A,beforeDestroy:N,beforeUnmount:x,destroyed:K,unmounted:F,render:Ie,renderTracked:Ce,renderTriggered:Ge,errorCaptured:pt,serverPrefetch:gt,expose:wt,inheritAttrs:hn,components:Vn,directives:Ot,filters:di}=e;if(c&&Yv(c,s,null),o)for(const me in o){const he=o[me];ee(he)&&(s[me]=he.bind(n))}if(i){const me=i.call(n,n);ve(me)&&(t.data=hr(me))}if(ml=!0,r)for(const me in r){const he=r[me],Yt=ee(he)?he.bind(n,n):ee(he.get)?he.get.bind(n,n):At,dn=!ee(he)&&ee(he.set)?he.set.bind(n):At,xt=yt({get:Yt,set:dn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>xt.value,set:ct=>xt.value=ct})}if(a)for(const me in a)$f(a[me],s,n,me);if(l){const me=ee(l)?l.call(n):l;Reflect.ownKeys(me).forEach(he=>{eo(he,me[he])})}u&&eh(u,t,"c");function Le(me,he){W(he)?he.forEach(Yt=>me(Yt.bind(n))):he&&me(he.bind(n))}if(Le(Fv,d),Le(_c,f),Le($v,m),Le(Bv,w),Le(Mv,E),Le(Lv,A),Le(zv,pt),Le(qv,Ce),Le(Hv,Ge),Le(Vv,x),Le(Uf,F),Le(jv,gt),W(wt))if(wt.length){const me=t.exposed||(t.exposed={});wt.forEach(he=>{Object.defineProperty(me,he,{get:()=>n[he],set:Yt=>n[he]=Yt})})}else t.exposed||(t.exposed={});Ie&&t.render===At&&(t.render=Ie),hn!=null&&(t.inheritAttrs=hn),Vn&&(t.components=Vn),Ot&&(t.directives=Ot)}function Yv(t,e,n=At){W(t)&&(t=yl(t));for(const s in t){const i=t[s];let r;ve(i)?"default"in i?r=jt(i.from||s,i.default,!0):r=jt(i.from||s):r=jt(i),tt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function eh(t,e,n){kt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function $f(t,e,n,s){const i=s.includes(".")?Of(n,s):()=>n[s];if(Me(t)){const r=e[t];ee(r)&&Si(i,r)}else if(ee(t))Si(i,t.bind(n));else if(ve(t))if(W(t))t.forEach(r=>$f(r,e,n,s));else{const r=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(r)&&Si(i,r,t)}}function bc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>go(l,c,o,!0)),go(l,e,o)),ve(e)&&r.set(e,l),l}function go(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&go(t,r,n,!0),i&&i.forEach(o=>go(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Jv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jv={data:th,props:nh,emits:nh,methods:_i,computed:_i,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:_i,directives:_i,watch:Zv,provide:th,inject:Xv};function th(t,e){return e?t?function(){return $e(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function Xv(t,e){return _i(yl(t),yl(e))}function yl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function at(t,e){return t?[...new Set([].concat(t,e))]:e}function _i(t,e){return t?$e(Object.create(null),t,e):e}function nh(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:$e(Object.create(null),Zu(t),Zu(e??{})):e}function Zv(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const s in e)n[s]=at(t[s],e[s]);return n}function Bf(){return{app:null,config:{isNativeTag:Sy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let e_=0;function t_(t,e){return function(s,i=null){ee(s)||(s=$e({},s)),i!=null&&!ve(i)&&(i=null);const r=Bf(),o=new Set;let a=!1;const l=r.app={_uid:e_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:A_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const f=Ne(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Jo(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){mo=l;try{return c()}finally{mo=null}}};return l}}let mo=null;function eo(t,e){if(qe){let n=qe.provides;const s=qe.parent&&qe.parent.provides;s===n&&(n=qe.provides=Object.create(s)),n[t]=e}}function jt(t,e,n=!1){const s=qe||Et;if(s||mo){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:mo._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ee(e)?e.call(s&&s.proxy):e}}function n_(t,e,n,s=!1){const i={},r={};uo(r,Yo,1),t.propsDefaults=Object.create(null),Vf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:gv(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function s_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Wo(t.emitsOptions,f))continue;const m=e[f];if(l)if(ae(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const w=Kt(f);i[w]=vl(l,a,w,m,t,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{Vf(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ae(e,d)&&((u=Zs(d))===d||!ae(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=vl(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ae(e,d))&&(delete r[d],c=!0)}c&&nn(t,"set","$attrs")}function Vf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Jr(l))continue;const c=e[l];let u;i&&ae(i,u=Kt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Wo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ue(n),c=a||_e;for(let u=0;u<r.length;u++){const d=r[u];n[d]=vl(i,l,d,c[d],t,!ae(c,d))}}return o}function vl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:c}=i;n in c?s=c[n]:($s(i),s=c[n]=l.call(null,e),Zn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Zs(n))&&(s=!0))}return s}function jf(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ee(t)){const u=d=>{l=!0;const[f,m]=jf(d,e,!0);$e(o,f),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ve(t)&&s.set(t,Cs),Cs;if(W(r))for(let u=0;u<r.length;u++){const d=Kt(r[u]);sh(d)&&(o[d]=_e)}else if(r)for(const u in r){const d=Kt(u);if(sh(d)){const f=r[u],m=o[d]=W(f)||ee(f)?{type:f}:$e({},f);if(m){const w=oh(Boolean,m.type),E=oh(String,m.type);m[0]=w>-1,m[1]=E<0||w<E,(w>-1||ae(m,"default"))&&a.push(d)}}}const c=[o,a];return ve(t)&&s.set(t,c),c}function sh(t){return t[0]!=="$"}function ih(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function rh(t,e){return ih(t)===ih(e)}function oh(t,e){return W(e)?e.findIndex(n=>rh(n,t)):ee(e)&&rh(e,t)?0:-1}const Hf=t=>t[0]==="_"||t==="$stable",Ec=t=>W(t)?t.map(Ut):[Ut(t)],i_=(t,e,n)=>{if(e._n)return e;const s=Av((...i)=>Ec(e(...i)),n);return s._c=!1,s},qf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Hf(i))continue;const r=t[i];if(ee(r))e[i]=i_(i,r,s);else if(r!=null){const o=Ec(r);e[i]=()=>o}}},zf=(t,e)=>{const n=Ec(e);t.slots.default=()=>n},r_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),uo(e,"_",n)):qf(e,t.slots={})}else t.slots={},e&&zf(t,e);uo(t.slots,Yo,1)},o_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=_e;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:($e(i,e),!n&&a===1&&delete i._):(r=!e.$stable,qf(e,i)),o=e}else e&&(zf(t,e),o={default:1});if(r)for(const a in i)!Hf(a)&&!(a in o)&&delete i[a]};function _l(t,e,n,s,i=!1){if(W(t)){t.forEach((f,m)=>_l(f,e&&(W(e)?e[m]:e),n,s,i));return}if(Zr(s)&&!i)return;const r=s.shapeFlag&4?Jo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Me(c)?(u[c]=null,ae(d,c)&&(d[c]=null)):tt(c)&&(c.value=null)),ee(l))Sn(l,a,12,[o,u]);else{const f=Me(l),m=tt(l);if(f||m){const w=()=>{if(t.f){const E=f?ae(d,l)?d[l]:u[l]:l.value;i?W(E)&&oc(E,r):W(E)?E.includes(r)||E.push(r):f?(u[l]=[r],ae(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,ae(d,l)&&(d[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,ut(w,n)):w()}}}const ut=Ov;function a_(t){return l_(t)}function l_(t,e){const n=cl();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:m=At,insertStaticContent:w}=t,E=(p,g,y,v=null,b=null,I=null,L=!1,k=null,R=!!g.dynamicChildren)=>{if(p===g)return;p&&!pi(p,g)&&(v=_(p),ct(p,b,I,!0),p=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:C,ref:j,shapeFlag:$}=g;switch(C){case Qo:A(p,g,y,v);break;case ns:N(p,g,y,v);break;case to:p==null&&x(g,y,v,L);break;case ke:Vn(p,g,y,v,b,I,L,k,R);break;default:$&1?Ie(p,g,y,v,b,I,L,k,R):$&6?Ot(p,g,y,v,b,I,L,k,R):($&64||$&128)&&C.process(p,g,y,v,b,I,L,k,R,D)}j!=null&&b&&_l(j,p&&p.ref,I,g||p,!g)},A=(p,g,y,v)=>{if(p==null)s(g.el=a(g.children),y,v);else{const b=g.el=p.el;g.children!==p.children&&c(b,g.children)}},N=(p,g,y,v)=>{p==null?s(g.el=l(g.children||""),y,v):g.el=p.el},x=(p,g,y,v)=>{[p.el,p.anchor]=w(p.children,g,y,v,p.el,p.anchor)},K=({el:p,anchor:g},y,v)=>{let b;for(;p&&p!==g;)b=f(p),s(p,y,v),p=b;s(g,y,v)},F=({el:p,anchor:g})=>{let y;for(;p&&p!==g;)y=f(p),i(p),p=y;i(g)},Ie=(p,g,y,v,b,I,L,k,R)=>{L=L||g.type==="svg",p==null?Ce(g,y,v,b,I,L,k,R):gt(p,g,b,I,L,k,R)},Ce=(p,g,y,v,b,I,L,k)=>{let R,C;const{type:j,props:$,shapeFlag:H,transition:J,dirs:ne}=p;if(R=p.el=o(p.type,I,$&&$.is,$),H&8?u(R,p.children):H&16&&pt(p.children,R,null,v,b,I&&j!=="foreignObject",L,k),ne&&jn(p,null,v,"created"),Ge(R,p,p.scopeId,L,v),$){for(const ge in $)ge!=="value"&&!Jr(ge)&&r(R,ge,null,$[ge],I,p.children,v,b,Qe);"value"in $&&r(R,"value",null,$.value),(C=$.onVnodeBeforeMount)&&Lt(C,v,p)}ne&&jn(p,null,v,"beforeMount");const ye=(!b||b&&!b.pendingBranch)&&J&&!J.persisted;ye&&J.beforeEnter(R),s(R,g,y),((C=$&&$.onVnodeMounted)||ye||ne)&&ut(()=>{C&&Lt(C,v,p),ye&&J.enter(R),ne&&jn(p,null,v,"mounted")},b)},Ge=(p,g,y,v,b)=>{if(y&&m(p,y),v)for(let I=0;I<v.length;I++)m(p,v[I]);if(b){let I=b.subTree;if(g===I){const L=b.vnode;Ge(p,L,L.scopeId,L.slotScopeIds,b.parent)}}},pt=(p,g,y,v,b,I,L,k,R=0)=>{for(let C=R;C<p.length;C++){const j=p[C]=k?mn(p[C]):Ut(p[C]);E(null,j,g,y,v,b,I,L,k)}},gt=(p,g,y,v,b,I,L)=>{const k=g.el=p.el;let{patchFlag:R,dynamicChildren:C,dirs:j}=g;R|=p.patchFlag&16;const $=p.props||_e,H=g.props||_e;let J;y&&Hn(y,!1),(J=H.onVnodeBeforeUpdate)&&Lt(J,y,g,p),j&&jn(g,p,y,"beforeUpdate"),y&&Hn(y,!0);const ne=b&&g.type!=="foreignObject";if(C?wt(p.dynamicChildren,C,k,y,v,ne,I):L||he(p,g,k,null,y,v,ne,I,!1),R>0){if(R&16)hn(k,g,$,H,y,v,b);else if(R&2&&$.class!==H.class&&r(k,"class",null,H.class,b),R&4&&r(k,"style",$.style,H.style,b),R&8){const ye=g.dynamicProps;for(let ge=0;ge<ye.length;ge++){const Re=ye[ge],It=$[Re],ys=H[Re];(ys!==It||Re==="value")&&r(k,Re,It,ys,b,p.children,y,v,Qe)}}R&1&&p.children!==g.children&&u(k,g.children)}else!L&&C==null&&hn(k,g,$,H,y,v,b);((J=H.onVnodeUpdated)||j)&&ut(()=>{J&&Lt(J,y,g,p),j&&jn(g,p,y,"updated")},v)},wt=(p,g,y,v,b,I,L)=>{for(let k=0;k<g.length;k++){const R=p[k],C=g[k],j=R.el&&(R.type===ke||!pi(R,C)||R.shapeFlag&70)?d(R.el):y;E(R,C,j,null,v,b,I,L,!0)}},hn=(p,g,y,v,b,I,L)=>{if(y!==v){if(y!==_e)for(const k in y)!Jr(k)&&!(k in v)&&r(p,k,y[k],null,L,g.children,b,I,Qe);for(const k in v){if(Jr(k))continue;const R=v[k],C=y[k];R!==C&&k!=="value"&&r(p,k,C,R,L,g.children,b,I,Qe)}"value"in v&&r(p,"value",y.value,v.value)}},Vn=(p,g,y,v,b,I,L,k,R)=>{const C=g.el=p?p.el:a(""),j=g.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:H,slotScopeIds:J}=g;J&&(k=k?k.concat(J):J),p==null?(s(C,y,v),s(j,y,v),pt(g.children,y,j,b,I,L,k,R)):$>0&&$&64&&H&&p.dynamicChildren?(wt(p.dynamicChildren,H,y,b,I,L,k),(g.key!=null||b&&g===b.subTree)&&Kf(p,g,!0)):he(p,g,y,j,b,I,L,k,R)},Ot=(p,g,y,v,b,I,L,k,R)=>{g.slotScopeIds=k,p==null?g.shapeFlag&512?b.ctx.activate(g,y,v,L,R):di(g,y,v,b,I,L,R):ps(p,g,R)},di=(p,g,y,v,b,I,L)=>{const k=p.component=v_(p,v,b);if(Mf(p)&&(k.ctx.renderer=D),__(k),k.asyncDep){if(b&&b.registerDep(k,Le),!p.el){const R=k.subTree=Ne(ns);N(null,R,g,y)}return}Le(k,p,g,y,b,I,L)},ps=(p,g,y)=>{const v=g.component=p.component;if(Dv(p,g,y))if(v.asyncDep&&!v.asyncResolved){me(v,g,y);return}else v.next=g,Iv(v.update),v.update();else g.el=p.el,v.vnode=g},Le=(p,g,y,v,b,I,L)=>{const k=()=>{if(p.isMounted){let{next:j,bu:$,u:H,parent:J,vnode:ne}=p,ye=j,ge;Hn(p,!1),j?(j.el=ne.el,me(p,j,L)):j=ne,$&&Xr($),(ge=j.props&&j.props.onVnodeBeforeUpdate)&&Lt(ge,J,j,ne),Hn(p,!0);const Re=Ma(p),It=p.subTree;p.subTree=Re,E(It,Re,d(It.el),_(It),p,b,I),j.el=Re.el,ye===null&&Pv(p,Re.el),H&&ut(H,b),(ge=j.props&&j.props.onVnodeUpdated)&&ut(()=>Lt(ge,J,j,ne),b)}else{let j;const{el:$,props:H}=g,{bm:J,m:ne,parent:ye}=p,ge=Zr(g);if(Hn(p,!1),J&&Xr(J),!ge&&(j=H&&H.onVnodeBeforeMount)&&Lt(j,ye,g),Hn(p,!0),$&&de){const Re=()=>{p.subTree=Ma(p),de($,p.subTree,p,b,null)};ge?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Re()):Re()}else{const Re=p.subTree=Ma(p);E(null,Re,y,v,p,b,I),g.el=Re.el}if(ne&&ut(ne,b),!ge&&(j=H&&H.onVnodeMounted)){const Re=g;ut(()=>Lt(j,ye,Re),b)}(g.shapeFlag&256||ye&&Zr(ye.vnode)&&ye.vnode.shapeFlag&256)&&p.a&&ut(p.a,b),p.isMounted=!0,g=y=v=null}},R=p.effect=new uc(k,()=>vc(C),p.scope),C=p.update=()=>R.run();C.id=p.uid,Hn(p,!0),C()},me=(p,g,y)=>{g.component=p;const v=p.vnode.props;p.vnode=g,p.next=null,s_(p,g.props,v,y),o_(p,g.children,y),ei(),Yu(),ti()},he=(p,g,y,v,b,I,L,k,R=!1)=>{const C=p&&p.children,j=p?p.shapeFlag:0,$=g.children,{patchFlag:H,shapeFlag:J}=g;if(H>0){if(H&128){dn(C,$,y,v,b,I,L,k,R);return}else if(H&256){Yt(C,$,y,v,b,I,L,k,R);return}}J&8?(j&16&&Qe(C,b,I),$!==C&&u(y,$)):j&16?J&16?dn(C,$,y,v,b,I,L,k,R):Qe(C,b,I,!0):(j&8&&u(y,""),J&16&&pt($,y,v,b,I,L,k,R))},Yt=(p,g,y,v,b,I,L,k,R)=>{p=p||Cs,g=g||Cs;const C=p.length,j=g.length,$=Math.min(C,j);let H;for(H=0;H<$;H++){const J=g[H]=R?mn(g[H]):Ut(g[H]);E(p[H],J,y,null,b,I,L,k,R)}C>j?Qe(p,b,I,!0,!1,$):pt(g,y,v,b,I,L,k,R,$)},dn=(p,g,y,v,b,I,L,k,R)=>{let C=0;const j=g.length;let $=p.length-1,H=j-1;for(;C<=$&&C<=H;){const J=p[C],ne=g[C]=R?mn(g[C]):Ut(g[C]);if(pi(J,ne))E(J,ne,y,null,b,I,L,k,R);else break;C++}for(;C<=$&&C<=H;){const J=p[$],ne=g[H]=R?mn(g[H]):Ut(g[H]);if(pi(J,ne))E(J,ne,y,null,b,I,L,k,R);else break;$--,H--}if(C>$){if(C<=H){const J=H+1,ne=J<j?g[J].el:v;for(;C<=H;)E(null,g[C]=R?mn(g[C]):Ut(g[C]),y,ne,b,I,L,k,R),C++}}else if(C>H)for(;C<=$;)ct(p[C],b,I,!0),C++;else{const J=C,ne=C,ye=new Map;for(C=ne;C<=H;C++){const mt=g[C]=R?mn(g[C]):Ut(g[C]);mt.key!=null&&ye.set(mt.key,C)}let ge,Re=0;const It=H-ne+1;let ys=!1,Fu=0;const fi=new Array(It);for(C=0;C<It;C++)fi[C]=0;for(C=J;C<=$;C++){const mt=p[C];if(Re>=It){ct(mt,b,I,!0);continue}let Mt;if(mt.key!=null)Mt=ye.get(mt.key);else for(ge=ne;ge<=H;ge++)if(fi[ge-ne]===0&&pi(mt,g[ge])){Mt=ge;break}Mt===void 0?ct(mt,b,I,!0):(fi[Mt-ne]=C+1,Mt>=Fu?Fu=Mt:ys=!0,E(mt,g[Mt],y,null,b,I,L,k,R),Re++)}const $u=ys?c_(fi):Cs;for(ge=$u.length-1,C=It-1;C>=0;C--){const mt=ne+C,Mt=g[mt],Bu=mt+1<j?g[mt+1].el:v;fi[C]===0?E(null,Mt,y,Bu,b,I,L,k,R):ys&&(ge<0||C!==$u[ge]?xt(Mt,y,Bu,2):ge--)}}},xt=(p,g,y,v,b=null)=>{const{el:I,type:L,transition:k,children:R,shapeFlag:C}=p;if(C&6){xt(p.component.subTree,g,y,v);return}if(C&128){p.suspense.move(g,y,v);return}if(C&64){L.move(p,g,y,D);return}if(L===ke){s(I,g,y);for(let $=0;$<R.length;$++)xt(R[$],g,y,v);s(p.anchor,g,y);return}if(L===to){K(p,g,y);return}if(v!==2&&C&1&&k)if(v===0)k.beforeEnter(I),s(I,g,y),ut(()=>k.enter(I),b);else{const{leave:$,delayLeave:H,afterLeave:J}=k,ne=()=>s(I,g,y),ye=()=>{$(I,()=>{ne(),J&&J()})};H?H(I,ne,ye):ye()}else s(I,g,y)},ct=(p,g,y,v=!1,b=!1)=>{const{type:I,props:L,ref:k,children:R,dynamicChildren:C,shapeFlag:j,patchFlag:$,dirs:H}=p;if(k!=null&&_l(k,null,y,p,!0),j&256){g.ctx.deactivate(p);return}const J=j&1&&H,ne=!Zr(p);let ye;if(ne&&(ye=L&&L.onVnodeBeforeUnmount)&&Lt(ye,g,p),j&6)xr(p.component,y,v);else{if(j&128){p.suspense.unmount(y,v);return}J&&jn(p,null,g,"beforeUnmount"),j&64?p.type.remove(p,g,y,b,D,v):C&&(I!==ke||$>0&&$&64)?Qe(C,g,y,!1,!0):(I===ke&&$&384||!b&&j&16)&&Qe(R,g,y),v&&gs(p)}(ne&&(ye=L&&L.onVnodeUnmounted)||J)&&ut(()=>{ye&&Lt(ye,g,p),J&&jn(p,null,g,"unmounted")},y)},gs=p=>{const{type:g,el:y,anchor:v,transition:b}=p;if(g===ke){ms(y,v);return}if(g===to){F(p);return}const I=()=>{i(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(p.shapeFlag&1&&b&&!b.persisted){const{leave:L,delayLeave:k}=b,R=()=>L(y,I);k?k(p.el,I,R):R()}else I()},ms=(p,g)=>{let y;for(;p!==g;)y=f(p),i(p),p=y;i(g)},xr=(p,g,y)=>{const{bum:v,scope:b,update:I,subTree:L,um:k}=p;v&&Xr(v),b.stop(),I&&(I.active=!1,ct(L,p,g,y)),k&&ut(k,g),ut(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Qe=(p,g,y,v=!1,b=!1,I=0)=>{for(let L=I;L<p.length;L++)ct(p[L],g,y,v,b)},_=p=>p.shapeFlag&6?_(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),U=(p,g,y)=>{p==null?g._vnode&&ct(g._vnode,null,null,!0):E(g._vnode||null,p,g,null,null,null,y),Yu(),kf(),g._vnode=p},D={p:E,um:ct,m:xt,r:gs,mt:di,mc:pt,pc:he,pbc:wt,n:_,o:t};let V,de;return e&&([V,de]=e(D)),{render:U,hydrate:V,createApp:t_(U,V)}}function Hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Kf(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=mn(i[r]),a.el=o.el),n||Kf(o,a)),a.type===Qo&&(a.el=o.el)}}function c_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const u_=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),ns=Symbol.for("v-cmt"),to=Symbol.for("v-stc"),ki=[];let St=null;function O(t=!1){ki.push(St=t?null:[])}function h_(){ki.pop(),St=ki[ki.length-1]||null}let ji=1;function ah(t){ji+=t}function Wf(t){return t.dynamicChildren=ji>0?St||Cs:null,h_(),ji>0&&St&&St.push(t),t}function M(t,e,n,s,i,r){return Wf(h(t,e,n,s,i,r,!0))}function d_(t,e,n,s,i){return Wf(Ne(t,e,n,s,i,!0))}function wl(t){return t?t.__v_isVNode===!0:!1}function pi(t,e){return t.type===e.type&&t.key===e.key}const Yo="__vInternal",Gf=({key:t})=>t??null,no=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Me(t)||tt(t)||ee(t)?{i:Et,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,i=null,r=t===ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gf(e),ref:e&&no(e),scopeId:Pf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Et};return a?(Ic(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Me(n)?8:16),ji>0&&!o&&St&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&St.push(l),l}const Ne=f_;function f_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Kv)&&(t=ns),wl(t)){const a=Fs(t,e,!0);return n&&Ic(a,n),ji>0&&!r&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(T_(t)&&(t=t.__vccOpts),e){e=p_(e);let{class:a,style:l}=e;a&&!Me(a)&&(e.class=Wt(a)),ve(l)&&(wf(l)&&!W(l)&&(l=$e({},l)),e.style=lc(l))}const o=Me(t)?1:Nv(t)?128:u_(t)?64:ve(t)?4:ee(t)?2:0;return h(t,e,n,s,i,o,r,!0)}function p_(t){return t?wf(t)||Yo in t?$e({},t):t:null}function Fs(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?g_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Gf(a),ref:e&&e.ref?n&&i?W(i)?i.concat(no(e)):[i,no(e)]:no(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fs(t.ssContent),ssFallback:t.ssFallback&&Fs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function be(t=" ",e=0){return Ne(Qo,null,t,e)}function ni(t,e){const n=Ne(to,null,t);return n.staticCount=e,n}function Fe(t="",e=!1){return e?(O(),d_(ns,null,t)):Ne(ns,null,t)}function Ut(t){return t==null||typeof t=="boolean"?Ne(ns):W(t)?Ne(ke,null,t.slice()):typeof t=="object"?mn(t):Ne(Qo,null,String(t))}function mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fs(t)}function Ic(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ic(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Yo in e)?e._ctx=Et:i===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),s&64?(n=16,e=[be(e)]):n=8);t.children=e,t.shapeFlag|=n}function g_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Wt([e.class,s.class]));else if(i==="style")e.style=lc([e.style,s.style]);else if(Vo(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Lt(t,e,n,s=null){kt(t,e,7,[n,s])}const m_=Bf();let y_=0;function v_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||m_,r={uid:y_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new By(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jf(s,i),emitsOptions:Df(s,i),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:s.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Sv.bind(null,r),t.ce&&t.ce(r),r}let qe=null,Tc,vs,lh="__VUE_INSTANCE_SETTERS__";(vs=cl()[lh])||(vs=cl()[lh]=[]),vs.push(t=>qe=t),Tc=t=>{vs.length>1?vs.forEach(e=>e(t)):vs[0](t)};const $s=t=>{Tc(t),t.scope.on()},Zn=()=>{qe&&qe.scope.off(),Tc(null)};function Qf(t){return t.vnode.shapeFlag&4}let Hi=!1;function __(t,e=!1){Hi=e;const{props:n,children:s}=t.vnode,i=Qf(t);n_(t,n,i,e),r_(t,s);const r=i?w_(t,e):void 0;return Hi=!1,r}function w_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=bf(new Proxy(t.ctx,Gv));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?E_(t):null;$s(t),ei();const r=Sn(s,t,0,[t.props,i]);if(ti(),Zn(),sf(r)){if(r.then(Zn,Zn),e)return r.then(o=>{ch(t,o,e)}).catch(o=>{Ko(o,t,0)});t.asyncDep=r}else ch(t,r,e)}else Yf(t,e)}function ch(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=Cf(e)),Yf(t,n)}let uh;function Yf(t,e,n){const s=t.type;if(!t.render){if(!e&&uh&&!s.render){const i=s.template||bc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=$e($e({isCustomElement:r,delimiters:a},o),l);s.render=uh(i,c)}}t.render=s.render||At}$s(t),ei(),Qv(t),ti(),Zn()}function b_(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ft(t,"get","$attrs"),e[n]}}))}function E_(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return b_(t)},slots:t.slots,emit:t.emit,expose:e}}function Jo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cf(bf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)},has(e,n){return n in e||n in Ai}}))}function I_(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function T_(t){return ee(t)&&"__vccOpts"in t}const yt=(t,e)=>wv(t,e,Hi);function Jf(t,e,n){const s=arguments.length;return s===2?ve(e)&&!W(e)?wl(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&wl(n)&&(n=[n]),Ne(t,e,n))}const C_=Symbol.for("v-scx"),S_=()=>jt(C_),A_="3.3.4",k_="http://www.w3.org/2000/svg",Kn=typeof document<"u"?document:null,hh=Kn&&Kn.createElement("template"),R_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Kn.createElementNS(k_,t):Kn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{hh.innerHTML=s?`<svg>${t}</svg>`:t;const a=hh.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function D_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function P_(t,e,n){const s=t.style,i=Me(n);if(n&&!i){if(e&&!Me(e))for(const r in e)n[r]==null&&bl(s,r,"");for(const r in n)bl(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const dh=/\s*!important$/;function bl(t,e,n){if(W(n))n.forEach(s=>bl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=N_(t,e);dh.test(n)?t.setProperty(Zs(s),n.replace(dh,""),"important"):t[s]=n}}const fh=["Webkit","Moz","ms"],Ua={};function N_(t,e){const n=Ua[e];if(n)return n;let s=Kt(e);if(s!=="filter"&&s in t)return Ua[e]=s;s=qo(s);for(let i=0;i<fh.length;i++){const r=fh[i]+s;if(r in t)return Ua[e]=r}return e}const ph="http://www.w3.org/1999/xlink";function O_(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ph,e.slice(6,e.length)):t.setAttributeNS(ph,e,n);else{const r=Uy(e);n==null||r&&!af(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function x_(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=af(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function vn(t,e,n,s){t.addEventListener(e,n,s)}function M_(t,e,n,s){t.removeEventListener(e,n,s)}function L_(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=U_(e);if(s){const c=r[e]=B_(s,i);vn(t,a,c,l)}else o&&(M_(t,a,o,l),r[e]=void 0)}}const gh=/(?:Once|Passive|Capture)$/;function U_(t){let e;if(gh.test(t)){e={};let s;for(;s=t.match(gh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zs(t.slice(2)),e]}let Fa=0;const F_=Promise.resolve(),$_=()=>Fa||(F_.then(()=>Fa=0),Fa=Date.now());function B_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;kt(V_(s,n.value),e,5,[s])};return n.value=t,n.attached=$_(),n}function V_(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const mh=/^on[a-z]/,j_=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?D_(t,s,i):e==="style"?P_(t,n,s):Vo(e)?rc(e)||L_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):H_(t,e,s,i))?x_(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),O_(t,e,s,i))};function H_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&mh.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||mh.test(e)&&Me(n)?!1:e in t}const Bs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Xr(e,n):e};function q_(t){t.target.composing=!0}function yh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const re={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Bs(i);const r=s||i.props&&i.props.type==="number";vn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ho(a)),t._assign(a)}),n&&vn(t,"change",()=>{t.value=t.value.trim()}),e||(vn(t,"compositionstart",q_),vn(t,"compositionend",yh),vn(t,"change",yh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Bs(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&ho(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},vh={created(t,{value:e},n){t.checked=Ls(e,n.props.value),t._assign=Bs(n),vn(t,"change",()=>{t._assign(qi(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Bs(s),e!==n&&(t.checked=Ls(e,s.props.value))}},El={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=jo(e);vn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ho(qi(o)):qi(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Bs(s)},mounted(t,{value:e}){_h(t,e)},beforeUpdate(t,e,n){t._assign=Bs(n)},updated(t,{value:e}){_h(t,e)}};function _h(t,e){const n=t.multiple;if(!(n&&!W(e)&&!jo(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=qi(r);if(n)W(e)?r.selected=$y(e,o)>-1:r.selected=e.has(o);else if(Ls(qi(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qi(t){return"_value"in t?t._value:t.value}const z_=["ctrl","shift","alt","meta"],K_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>z_.some(n=>t[`${n}Key`]&&!e.includes(n))},Xo=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=K_[e[i]];if(r&&r(n,e))return}return t(n,...s)},W_=$e({patchProp:j_},R_);let wh;function G_(){return wh||(wh=a_(W_))}const Q_=(...t)=>{const e=G_().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Y_(s);if(!i)return;const r=e._component;!ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Y_(t){return Me(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ws=typeof window<"u";function J_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function $a(t,e){const n={};for(const s in e){const i=e[s];n[s]=Dt(i)?i.map(t):t(i)}return n}const Ri=()=>{},Dt=Array.isArray,X_=/\/$/,Z_=t=>t.replace(X_,"");function Ba(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=s0(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function e0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function t0(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Vs(e.matched[s],n.matched[i])&&Xf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!n0(t[n],e[n]))return!1;return!0}function n0(t,e){return Dt(t)?Eh(t,e):Dt(e)?Eh(e,t):t===e}function Eh(t,e){return Dt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function s0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var zi;(function(t){t.pop="pop",t.push="push"})(zi||(zi={}));var Di;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Di||(Di={}));function i0(t){if(!t)if(ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Z_(t)}const r0=/^[^#]+#/;function o0(t,e){return t.replace(r0,"#")+e}function a0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Zo=()=>({left:window.pageXOffset,top:window.pageYOffset});function l0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=a0(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ih(t,e){return(history.state?history.state.position-e:-1)+t}const Il=new Map;function c0(t,e){Il.set(t,e)}function u0(t){const e=Il.get(t);return Il.delete(t),e}let h0=()=>location.protocol+"//"+location.host;function Zf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),bh(l,"")}return bh(n,t)+s+i}function d0(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const m=Zf(t,location),w=n.value,E=e.value;let A=0;if(f){if(n.value=m,e.value=f,o&&o===w){o=null;return}A=E?f.position-E.position:0}else s(m);i.forEach(N=>{N(n.value,w,{delta:A,type:zi.pop,direction:A?A>0?Di.forward:Di.back:Di.unknown})})};function l(){o=n.value}function c(f){i.push(f);const m=()=>{const w=i.indexOf(f);w>-1&&i.splice(w,1)};return r.push(m),m}function u(){const{history:f}=window;f.state&&f.replaceState(fe({},f.state,{scroll:Zo()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Th(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Zo():null}}function f0(t){const{history:e,location:n}=window,s={value:Zf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:h0()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(m){console.error(m),n[u?"replace":"assign"](f)}}function o(l,c){const u=fe({},e.state,Th(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=fe({},i.value,e.state,{forward:l,scroll:Zo()});r(u.current,u,!0);const d=fe({},Th(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function p0(t){t=i0(t);const e=f0(t),n=d0(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=fe({location:"",base:t,go:s,createHref:o0.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function g0(t){return typeof t=="string"||t&&typeof t=="object"}function ep(t){return typeof t=="string"||typeof t=="symbol"}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tp=Symbol("");var Ch;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ch||(Ch={}));function js(t,e){return fe(new Error,{type:t,[tp]:!0},e)}function Jt(t,e){return t instanceof Error&&tp in t&&(e==null||!!(t.type&e))}const Sh="[^/]+?",m0={sensitive:!1,strict:!1,start:!0,end:!0},y0=/[.+*?^${}()[\]/\\]/g;function v0(t,e){const n=fe({},m0,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(y0,"\\$&"),m+=40;else if(f.type===1){const{value:w,repeatable:E,optional:A,regexp:N}=f;r.push({name:w,repeatable:E,optional:A});const x=N||Sh;if(x!==Sh){m+=10;try{new RegExp(`(${x})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${w}" (${x}): `+F.message)}}let K=E?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(K=A&&c.length<2?`(?:/${K})`:"/"+K),A&&(K+="?"),i+=K,m+=20,A&&(m+=-8),E&&(m+=-20),x===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const m=u[f]||"",w=r[f-1];d[w.name]=m&&w.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of f)if(m.type===0)u+=m.value;else if(m.type===1){const{value:w,repeatable:E,optional:A}=m,N=w in c?c[w]:"";if(Dt(N)&&!E)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const x=Dt(N)?N.join("/"):N;if(!x)if(A)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=x}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function _0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function w0(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=_0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ah(s))return 1;if(Ah(i))return-1}return i.length-s.length}function Ah(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const b0={type:0,value:""},E0=/[a-zA-Z0-9_]/;function I0(t){if(!t)return[[]];if(t==="/")return[[b0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:E0.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function T0(t,e,n){const s=v0(I0(t.path),n),i=fe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function C0(t,e){const n=[],s=new Map;e=Dh({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,f){const m=!f,w=S0(u);w.aliasOf=f&&f.record;const E=Dh(e,u),A=[w];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of K)A.push(fe({},w,{components:f?f.record.components:w.components,path:F,aliasOf:f?f.record:w}))}let N,x;for(const K of A){const{path:F}=K;if(d&&F[0]!=="/"){const Ie=d.record.path,Ce=Ie[Ie.length-1]==="/"?"":"/";K.path=d.record.path+(F&&Ce+F)}if(N=T0(K,d,E),f?f.alias.push(N):(x=x||N,x!==N&&x.alias.push(N),m&&u.name&&!Rh(N)&&o(u.name)),w.children){const Ie=w.children;for(let Ce=0;Ce<Ie.length;Ce++)r(Ie[Ce],N,f&&f.children[Ce])}f=f||N,(N.record.components&&Object.keys(N.record.components).length||N.record.name||N.record.redirect)&&l(N)}return x?()=>{o(x)}:Ri}function o(u){if(ep(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&w0(u,n[d])>=0&&(u.record.path!==n[d].record.path||!np(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Rh(u)&&s.set(u.record.name,u)}function c(u,d){let f,m={},w,E;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw js(1,{location:u});E=f.record.name,m=fe(kh(d.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&kh(u.params,f.keys.map(x=>x.name))),w=f.stringify(m)}else if("path"in u)w=u.path,f=n.find(x=>x.re.test(w)),f&&(m=f.parse(w),E=f.record.name);else{if(f=d.name?s.get(d.name):n.find(x=>x.re.test(d.path)),!f)throw js(1,{location:u,currentLocation:d});E=f.record.name,m=fe({},d.params,u.params),w=f.stringify(m)}const A=[];let N=f;for(;N;)A.unshift(N.record),N=N.parent;return{name:E,path:w,params:m,matched:A,meta:k0(A)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function kh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function S0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:A0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function A0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Rh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function k0(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Dh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function np(t,e){return e.children.some(n=>n===t||np(t,n))}const sp=/#/g,R0=/&/g,D0=/\//g,P0=/=/g,N0=/\?/g,ip=/\+/g,O0=/%5B/g,x0=/%5D/g,rp=/%5E/g,M0=/%60/g,op=/%7B/g,L0=/%7C/g,ap=/%7D/g,U0=/%20/g;function Cc(t){return encodeURI(""+t).replace(L0,"|").replace(O0,"[").replace(x0,"]")}function F0(t){return Cc(t).replace(op,"{").replace(ap,"}").replace(rp,"^")}function Tl(t){return Cc(t).replace(ip,"%2B").replace(U0,"+").replace(sp,"%23").replace(R0,"%26").replace(M0,"`").replace(op,"{").replace(ap,"}").replace(rp,"^")}function $0(t){return Tl(t).replace(P0,"%3D")}function B0(t){return Cc(t).replace(sp,"%23").replace(N0,"%3F")}function V0(t){return t==null?"":B0(t).replace(D0,"%2F")}function yo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function j0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(ip," "),o=r.indexOf("="),a=yo(o<0?r:r.slice(0,o)),l=o<0?null:yo(r.slice(o+1));if(a in e){let c=e[a];Dt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ph(t){let e="";for(let n in t){const s=t[n];if(n=$0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dt(s)?s.map(r=>r&&Tl(r)):[s&&Tl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function H0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Dt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const q0=Symbol(""),Nh=Symbol(""),ea=Symbol(""),lp=Symbol(""),Cl=Symbol("");function gi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function yn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(js(4,{from:n,to:e})):d instanceof Error?a(d):g0(d)?a(js(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Va(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(z0(a)){const c=(a.__vccOpts||a)[e];c&&i.push(yn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=J_(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&yn(f,n,s,r,o)()}))}}return i}function z0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Oh(t){const e=jt(ea),n=jt(lp),s=yt(()=>e.resolve(ks(t.to))),i=yt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Vs.bind(null,u));if(f>-1)return f;const m=xh(l[c-2]);return c>1&&xh(u)===m&&d[d.length-1].path!==m?d.findIndex(Vs.bind(null,l[c-2])):f}),r=yt(()=>i.value>-1&&Q0(n.params,s.value.params)),o=yt(()=>i.value>-1&&i.value===n.matched.length-1&&Xf(n.params,s.value.params));function a(l={}){return G0(l)?e[ks(t.replace)?"replace":"push"](ks(t.to)).catch(Ri):Promise.resolve()}return{route:s,href:yt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const K0=xf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oh,setup(t,{slots:e}){const n=hr(Oh(t)),{options:s}=jt(ea),i=yt(()=>({[Mh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Mh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Jf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),W0=K0;function G0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Q0(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Dt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function xh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mh=(t,e,n)=>t??e??n,Y0=xf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=jt(Cl),i=yt(()=>t.route||s.value),r=jt(Nh,0),o=yt(()=>{let c=ks(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=yt(()=>i.value.matched[o.value]);eo(Nh,yt(()=>o.value+1)),eo(q0,a),eo(Cl,i);const l=In();return Si(()=>[l.value,a.value,t.name],([c,u,d],[f,m,w])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Vs(u,m)||!f)&&(u.enterCallbacks[d]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return Lh(n.default,{Component:f,route:c});const m=d.props[u],w=m?m===!0?c.params:typeof m=="function"?m(c):m:null,A=Jf(f,fe({},w,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Lh(n.default,{Component:A,route:c})||A}}});function Lh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const J0=Y0;function X0(t){const e=C0(t.routes,t),n=t.parseQuery||j0,s=t.stringifyQuery||Ph,i=t.history,r=gi(),o=gi(),a=gi(),l=mv(pn);let c=pn;ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$a.bind(null,_=>""+_),d=$a.bind(null,V0),f=$a.bind(null,yo);function m(_,U){let D,V;return ep(_)?(D=e.getRecordMatcher(_),V=U):V=_,e.addRoute(V,D)}function w(_){const U=e.getRecordMatcher(_);U&&e.removeRoute(U)}function E(){return e.getRoutes().map(_=>_.record)}function A(_){return!!e.getRecordMatcher(_)}function N(_,U){if(U=fe({},U||l.value),typeof _=="string"){const y=Ba(n,_,U.path),v=e.resolve({path:y.path},U),b=i.createHref(y.fullPath);return fe(y,v,{params:f(v.params),hash:yo(y.hash),redirectedFrom:void 0,href:b})}let D;if("path"in _)D=fe({},_,{path:Ba(n,_.path,U.path).path});else{const y=fe({},_.params);for(const v in y)y[v]==null&&delete y[v];D=fe({},_,{params:d(y)}),U.params=d(U.params)}const V=e.resolve(D,U),de=_.hash||"";V.params=u(f(V.params));const p=e0(s,fe({},_,{hash:F0(de),path:V.path})),g=i.createHref(p);return fe({fullPath:p,hash:de,query:s===Ph?H0(_.query):_.query||{}},V,{redirectedFrom:void 0,href:g})}function x(_){return typeof _=="string"?Ba(n,_,l.value.path):fe({},_)}function K(_,U){if(c!==_)return js(8,{from:U,to:_})}function F(_){return Ge(_)}function Ie(_){return F(fe(x(_),{replace:!0}))}function Ce(_){const U=_.matched[_.matched.length-1];if(U&&U.redirect){const{redirect:D}=U;let V=typeof D=="function"?D(_):D;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=x(V):{path:V},V.params={}),fe({query:_.query,hash:_.hash,params:"path"in V?{}:_.params},V)}}function Ge(_,U){const D=c=N(_),V=l.value,de=_.state,p=_.force,g=_.replace===!0,y=Ce(D);if(y)return Ge(fe(x(y),{state:typeof y=="object"?fe({},de,y.state):de,force:p,replace:g}),U||D);const v=D;v.redirectedFrom=U;let b;return!p&&t0(s,V,D)&&(b=js(16,{to:v,from:V}),xt(V,V,!0,!1)),(b?Promise.resolve(b):wt(v,V)).catch(I=>Jt(I)?Jt(I,2)?I:dn(I):he(I,v,V)).then(I=>{if(I){if(Jt(I,2))return Ge(fe({replace:g},x(I.to),{state:typeof I.to=="object"?fe({},de,I.to.state):de,force:p}),U||v)}else I=Vn(v,V,!0,g,de);return hn(v,V,I),I})}function pt(_,U){const D=K(_,U);return D?Promise.reject(D):Promise.resolve()}function gt(_){const U=ms.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(_):_()}function wt(_,U){let D;const[V,de,p]=Z0(_,U);D=Va(V.reverse(),"beforeRouteLeave",_,U);for(const y of V)y.leaveGuards.forEach(v=>{D.push(yn(v,_,U))});const g=pt.bind(null,_,U);return D.push(g),Qe(D).then(()=>{D=[];for(const y of r.list())D.push(yn(y,_,U));return D.push(g),Qe(D)}).then(()=>{D=Va(de,"beforeRouteUpdate",_,U);for(const y of de)y.updateGuards.forEach(v=>{D.push(yn(v,_,U))});return D.push(g),Qe(D)}).then(()=>{D=[];for(const y of _.matched)if(y.beforeEnter&&!U.matched.includes(y))if(Dt(y.beforeEnter))for(const v of y.beforeEnter)D.push(yn(v,_,U));else D.push(yn(y.beforeEnter,_,U));return D.push(g),Qe(D)}).then(()=>(_.matched.forEach(y=>y.enterCallbacks={}),D=Va(p,"beforeRouteEnter",_,U),D.push(g),Qe(D))).then(()=>{D=[];for(const y of o.list())D.push(yn(y,_,U));return D.push(g),Qe(D)}).catch(y=>Jt(y,8)?y:Promise.reject(y))}function hn(_,U,D){for(const V of a.list())gt(()=>V(_,U,D))}function Vn(_,U,D,V,de){const p=K(_,U);if(p)return p;const g=U===pn,y=ws?history.state:{};D&&(V||g?i.replace(_.fullPath,fe({scroll:g&&y&&y.scroll},de)):i.push(_.fullPath,de)),l.value=_,xt(_,U,D,g),dn()}let Ot;function di(){Ot||(Ot=i.listen((_,U,D)=>{if(!xr.listening)return;const V=N(_),de=Ce(V);if(de){Ge(fe(de,{replace:!0}),V).catch(Ri);return}c=V;const p=l.value;ws&&c0(Ih(p.fullPath,D.delta),Zo()),wt(V,p).catch(g=>Jt(g,12)?g:Jt(g,2)?(Ge(g.to,V).then(y=>{Jt(y,20)&&!D.delta&&D.type===zi.pop&&i.go(-1,!1)}).catch(Ri),Promise.reject()):(D.delta&&i.go(-D.delta,!1),he(g,V,p))).then(g=>{g=g||Vn(V,p,!1),g&&(D.delta&&!Jt(g,8)?i.go(-D.delta,!1):D.type===zi.pop&&Jt(g,20)&&i.go(-1,!1)),hn(V,p,g)}).catch(Ri)}))}let ps=gi(),Le=gi(),me;function he(_,U,D){dn(_);const V=Le.list();return V.length?V.forEach(de=>de(_,U,D)):console.error(_),Promise.reject(_)}function Yt(){return me&&l.value!==pn?Promise.resolve():new Promise((_,U)=>{ps.add([_,U])})}function dn(_){return me||(me=!_,di(),ps.list().forEach(([U,D])=>_?D(_):U()),ps.reset()),_}function xt(_,U,D,V){const{scrollBehavior:de}=t;if(!ws||!de)return Promise.resolve();const p=!D&&u0(Ih(_.fullPath,0))||(V||!D)&&history.state&&history.state.scroll||null;return yc().then(()=>de(_,U,p)).then(g=>g&&l0(g)).catch(g=>he(g,_,U))}const ct=_=>i.go(_);let gs;const ms=new Set,xr={currentRoute:l,listening:!0,addRoute:m,removeRoute:w,hasRoute:A,getRoutes:E,resolve:N,options:t,push:F,replace:Ie,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:Yt,install(_){const U=this;_.component("RouterLink",W0),_.component("RouterView",J0),_.config.globalProperties.$router=U,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>ks(l)}),ws&&!gs&&l.value===pn&&(gs=!0,F(i.location).catch(de=>{}));const D={};for(const de in pn)D[de]=yt(()=>l.value[de]);_.provide(ea,U),_.provide(lp,hr(D)),_.provide(Cl,l);const V=_.unmount;ms.add(_),_.unmount=function(){ms.delete(_),ms.size<1&&(c=pn,Ot&&Ot(),Ot=null,l.value=pn,gs=!1,me=!1),V()}}};function Qe(_){return _.reduce((U,D)=>U.then(()=>gt(D)),Promise.resolve())}return xr}function Z0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Vs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Vs(c,l))||i.push(l))}return[n,s,i]}function cp(){return jt(ea)}/**
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
 */const up=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ew=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},hp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),s.push(n[u],n[d],n[f],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(up(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ew(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new tw;const f=r<<2|a>>4;if(s.push(f),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const w=c<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nw=function(t){const e=up(t);return hp.encodeByteArray(e,!0)},vo=function(t){return nw(t).replace(/\./g,"")},dp=function(t){try{return hp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iw=()=>sw().__FIREBASE_DEFAULTS__,rw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ow=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dp(t[1]);return e&&JSON.parse(e)},Sc=()=>{try{return iw()||rw()||ow()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fp=t=>{var e,n;return(n=(e=Sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aw=t=>{const e=fp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},pp=()=>{var t;return(t=Sc())===null||t===void 0?void 0:t.config},gp=t=>{var e;return(e=Sc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class lw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function cw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[vo(JSON.stringify(n)),vo(JSON.stringify(o)),a].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function hw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fw(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pw(){try{return typeof indexedDB=="object"}catch{return!1}}function gw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const mw="FirebaseError";class un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mw,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dr.prototype.create)}}class dr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?yw(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new un(i,a,s)}}function yw(t,e){return t.replace(vw,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const vw=/\{\$([^}]+)}/g;function _w(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _o(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Uh(r)&&Uh(o)){if(!_o(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Uh(t){return t!==null&&typeof t=="object"}/**
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
 */function fr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ww(t,e){const n=new bw(t,e);return n.subscribe.bind(n)}class bw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ew(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ja),i.error===void 0&&(i.error=ja),i.complete===void 0&&(i.complete=ja);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ew(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ja(){}/**
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
 */function Ke(t){return t&&t._delegate?t._delegate:t}class ss{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qn="[DEFAULT]";/**
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
 */class Iw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new lw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cw(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Tw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tw(t){return t===qn?void 0:t}function Cw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Iw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Aw={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},kw=le.INFO,Rw={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Dw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Rw[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ac{constructor(e){this.name=e,this._logLevel=kw,this._logHandler=Dw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Aw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Pw=(t,e)=>e.some(n=>t instanceof n);let Fh,$h;function Nw(){return Fh||(Fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ow(){return $h||($h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mp=new WeakMap,Sl=new WeakMap,yp=new WeakMap,Ha=new WeakMap,kc=new WeakMap;function xw(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(An(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mp.set(n,t)}).catch(()=>{}),kc.set(e,t),e}function Mw(t){if(Sl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Sl.set(t,e)}let Al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lw(t){Al=t(Al)}function Uw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qa(this),e,...n);return yp.set(s,e.sort?e.sort():[e]),An(s)}:Ow().includes(t)?function(...e){return t.apply(qa(this),e),An(mp.get(this))}:function(...e){return An(t.apply(qa(this),e))}}function Fw(t){return typeof t=="function"?Uw(t):(t instanceof IDBTransaction&&Mw(t),Pw(t,Nw())?new Proxy(t,Al):t)}function An(t){if(t instanceof IDBRequest)return xw(t);if(Ha.has(t))return Ha.get(t);const e=Fw(t);return e!==t&&(Ha.set(t,e),kc.set(e,t)),e}const qa=t=>kc.get(t);function $w(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=An(o);return s&&o.addEventListener("upgradeneeded",l=>{s(An(o.result),l.oldVersion,l.newVersion,An(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Bw=["get","getKey","getAll","getAllKeys","count"],Vw=["put","add","delete","clear"],za=new Map;function Bh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(za.get(e))return za.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Vw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Bw.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return za.set(e,r),r}Lw(t=>({...t,get:(e,n,s)=>Bh(e,n)||t.get(e,n,s),has:(e,n)=>!!Bh(e,n)||t.has(e,n)}));/**
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
 */class jw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Hw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kl="@firebase/app",Vh="0.9.13";/**
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
 */const is=new Ac("@firebase/app"),qw="@firebase/app-compat",zw="@firebase/analytics-compat",Kw="@firebase/analytics",Ww="@firebase/app-check-compat",Gw="@firebase/app-check",Qw="@firebase/auth",Yw="@firebase/auth-compat",Jw="@firebase/database",Xw="@firebase/database-compat",Zw="@firebase/functions",e1="@firebase/functions-compat",t1="@firebase/installations",n1="@firebase/installations-compat",s1="@firebase/messaging",i1="@firebase/messaging-compat",r1="@firebase/performance",o1="@firebase/performance-compat",a1="@firebase/remote-config",l1="@firebase/remote-config-compat",c1="@firebase/storage",u1="@firebase/storage-compat",h1="@firebase/firestore",d1="@firebase/firestore-compat",f1="firebase",p1="9.23.0";/**
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
 */const Rl="[DEFAULT]",g1={[kl]:"fire-core",[qw]:"fire-core-compat",[Kw]:"fire-analytics",[zw]:"fire-analytics-compat",[Gw]:"fire-app-check",[Ww]:"fire-app-check-compat",[Qw]:"fire-auth",[Yw]:"fire-auth-compat",[Jw]:"fire-rtdb",[Xw]:"fire-rtdb-compat",[Zw]:"fire-fn",[e1]:"fire-fn-compat",[t1]:"fire-iid",[n1]:"fire-iid-compat",[s1]:"fire-fcm",[i1]:"fire-fcm-compat",[r1]:"fire-perf",[o1]:"fire-perf-compat",[a1]:"fire-rc",[l1]:"fire-rc-compat",[c1]:"fire-gcs",[u1]:"fire-gcs-compat",[h1]:"fire-fst",[d1]:"fire-fst-compat","fire-js":"fire-js",[f1]:"fire-js-all"};/**
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
 */const wo=new Map,Dl=new Map;function m1(t,e){try{t.container.addComponent(e)}catch(n){is.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hs(t){const e=t.name;if(Dl.has(e))return is.debug(`There were multiple attempts to register component ${e}.`),!1;Dl.set(e,t);for(const n of wo.values())m1(n,t);return!0}function Rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const y1={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kn=new dr("app","Firebase",y1);/**
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
 */class v1{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const si=p1;function vp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=pp()),!n)throw kn.create("no-options");const r=wo.get(i);if(r){if(_o(n,r.options)&&_o(s,r.config))return r;throw kn.create("duplicate-app",{appName:i})}const o=new Sw(i);for(const l of Dl.values())o.addComponent(l);const a=new v1(n,s,o);return wo.set(i,a),a}function _p(t=Rl){const e=wo.get(t);if(!e&&t===Rl&&pp())return vp();if(!e)throw kn.create("no-app",{appName:t});return e}function Rn(t,e,n){var s;let i=(s=g1[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),is.warn(a.join(" "));return}Hs(new ss(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _1="firebase-heartbeat-database",w1=1,Ki="firebase-heartbeat-store";let Ka=null;function wp(){return Ka||(Ka=$w(_1,w1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ki)}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),Ka}async function b1(t){try{return await(await wp()).transaction(Ki).objectStore(Ki).get(bp(t))}catch(e){if(e instanceof un)is.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});is.warn(n.message)}}}async function jh(t,e){try{const s=(await wp()).transaction(Ki,"readwrite");await s.objectStore(Ki).put(e,bp(t)),await s.done}catch(n){if(n instanceof un)is.warn(n.message);else{const s=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});is.warn(s.message)}}}function bp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const E1=1024,I1=30*24*60*60*1e3;class T1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new S1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=I1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hh(),{heartbeatsToSend:n,unsentEntries:s}=C1(this._heartbeatsCache.heartbeats),i=vo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hh(){return new Date().toISOString().substring(0,10)}function C1(t,e=E1){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qh(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class S1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pw()?gw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await b1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qh(t){return vo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function A1(t){Hs(new ss("platform-logger",e=>new jw(e),"PRIVATE")),Hs(new ss("heartbeat",e=>new T1(e),"PRIVATE")),Rn(kl,Vh,t),Rn(kl,Vh,"esm2017"),Rn("fire-js","")}A1("");function Dc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ep(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k1=Ep,Ip=new dr("auth","Firebase",Ep());/**
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
 */const bo=new Ac("@firebase/auth");function R1(t,...e){bo.logLevel<=le.WARN&&bo.warn(`Auth (${si}): ${t}`,...e)}function so(t,...e){bo.logLevel<=le.ERROR&&bo.error(`Auth (${si}): ${t}`,...e)}/**
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
 */function Pt(t,...e){throw Pc(t,...e)}function Ht(t,...e){return Pc(t,...e)}function D1(t,e,n){const s=Object.assign(Object.assign({},k1()),{[e]:n});return new dr("auth","Firebase",s).create(e,{appName:t.name})}function Pc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ip.create(t,...e)}function G(t,e,...n){if(!t)throw Pc(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw so(e),new Error(e)}function sn(t,e){t||Zt(e)}/**
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
 */function Pl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function P1(){return zh()==="http:"||zh()==="https:"}function zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function N1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P1()||hw()||"connection"in navigator)?navigator.onLine:!0}function O1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class pr{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=uw()||dw()}get(){return N1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nc(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Tp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const x1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const M1=new pr(3e4,6e4);function ii(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function us(t,e,n,s,i={}){return Cp(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=fr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Tp.fetch()(Sp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Cp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},x1),e);try{const i=new L1(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Vr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw D1(t,u,c);Pt(t,u)}}catch(i){if(i instanceof un)throw i;Pt(t,"network-request-failed",{message:String(i)})}}async function gr(t,e,n,s,i={}){const r=await us(t,e,n,s,i);return"mfaPendingCredential"in r&&Pt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Sp(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Nc(t.config,i):`${t.config.apiScheme}://${i}`}class L1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ht(this.auth,"network-request-failed")),M1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ht(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function U1(t,e){return us(t,"POST","/v1/accounts:delete",e)}async function F1(t,e){return us(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $1(t,e=!1){const n=Ke(t),s=await n.getIdToken(e),i=Oc(s);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Pi(Wa(i.auth_time)),issuedAtTime:Pi(Wa(i.iat)),expirationTime:Pi(Wa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Wa(t){return Number(t)*1e3}function Oc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const i=dp(n);return i?JSON.parse(i):(so("Failed to decode base64 JWT payload"),null)}catch(i){return so("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function B1(t){const e=Oc(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof un&&V1(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function V1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class j1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await qs(t,F1(n,{idToken:s}));G(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?z1(r.providerUserInfo):[],a=q1(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ap(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function H1(t){const e=Ke(t);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function q1(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function z1(t){return t.map(e=>{var{providerId:n}=e,s=Dc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function K1(t,e){const n=await Cp(t,{},async()=>{const s=fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Sp(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):B1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await K1(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Wi;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wi,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
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
 */function gn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class es{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Dc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ap(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await qs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $1(this,e)}reload(){return H1(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new es(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qs(this,U1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,N=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:F,isAnonymous:Ie,providerData:Ce,stsTokenManager:Ge}=n;G(K&&Ge,e,"internal-error");const pt=Wi.fromJSON(this.name,Ge);G(typeof K=="string",e,"internal-error"),gn(d,e.name),gn(f,e.name),G(typeof F=="boolean",e,"internal-error"),G(typeof Ie=="boolean",e,"internal-error"),gn(m,e.name),gn(w,e.name),gn(E,e.name),gn(A,e.name),gn(N,e.name),gn(x,e.name);const gt=new es({uid:K,auth:e,email:f,emailVerified:F,displayName:d,isAnonymous:Ie,photoURL:w,phoneNumber:m,tenantId:E,stsTokenManager:pt,createdAt:N,lastLoginAt:x});return Ce&&Array.isArray(Ce)&&(gt.providerData=Ce.map(wt=>Object.assign({},wt))),A&&(gt._redirectEventId=A),gt}static async _fromIdTokenResponse(e,n,s=!1){const i=new Wi;i.updateFromServerResponse(n);const r=new es({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Eo(r),r}}/**
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
 */const Kh=new Map;function en(t){sn(t instanceof Function,"Expected a class definition");let e=Kh.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kh.set(t,e),e)}/**
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
 */class kp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kp.type="NONE";const Wh=kp;/**
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
 */function io(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=io(this.userKey,i.apiKey,r),this.fullPersistenceKey=io("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?es._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ds(en(Wh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||en(Wh);const o=io(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=es._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ds(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ds(r,e,s))}}/**
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
 */function Gh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Op(e))return"Blackberry";if(xp(e))return"Webos";if(xc(e))return"Safari";if((e.includes("chrome/")||Dp(e))&&!e.includes("edge/"))return"Chrome";if(Np(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rp(t=rt()){return/firefox\//i.test(t)}function xc(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dp(t=rt()){return/crios\//i.test(t)}function Pp(t=rt()){return/iemobile/i.test(t)}function Np(t=rt()){return/android/i.test(t)}function Op(t=rt()){return/blackberry/i.test(t)}function xp(t=rt()){return/webos/i.test(t)}function ta(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function W1(t=rt()){var e;return ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function G1(){return fw()&&document.documentMode===10}function Mp(t=rt()){return ta(t)||Np(t)||xp(t)||Op(t)||/windows phone/i.test(t)||Pp(t)}function Q1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Lp(t,e=[]){let n;switch(t){case"Browser":n=Gh(rt());break;case"Worker":n=`${Gh(rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${s}`}async function Up(t,e){return us(t,"GET","/v2/recaptchaConfig",ii(t,e))}function Qh(t){return t!==void 0&&t.enterprise!==void 0}class Fp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Y1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $p(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ht("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Y1().appendChild(s)})}function J1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const X1="https://www.google.com/recaptcha/enterprise.js?render=",Z1="recaptcha-enterprise",eb="NO_RECAPTCHA";class Bp{constructor(e){this.type=Z1,this.auth=ri(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Up(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Fp(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Qh(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(eb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Qh(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}$p(X1+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Io(t,e,n,s=!1){const i=new Bp(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class tb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class nb{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yh(this),this.idTokenSubscription=new Yh(this),this.beforeStateQueue=new tb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ip,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ke(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}async initializeRecaptchaConfig(){const e=await Up(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Fp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Bp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&R1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ri(t){return Ke(t)}class Yh{constructor(e){this.auth=e,this.observer=null,this.addObserver=ww(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function sb(t,e){const n=Rc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(_o(r,e??{}))return i;Pt(i,"already-initialized")}return n.initialize({options:e})}function ib(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function rb(t,e,n){const s=ri(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Vp(e),{host:o,port:a}=ob(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ab()}function Vp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ob(t){const e=Vp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Jh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Jh(o)}}}function Jh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ab(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Mc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function lb(t,e){return us(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ga(t,e){return gr(t,"POST","/v1/accounts:signInWithPassword",ii(t,e))}/**
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
 */async function cb(t,e){return gr(t,"POST","/v1/accounts:signInWithEmailLink",ii(t,e))}async function ub(t,e){return gr(t,"POST","/v1/accounts:signInWithEmailLink",ii(t,e))}/**
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
 */class Gi extends Mc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Gi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Gi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Io(e,s,"signInWithPassword");return Ga(e,i)}else return Ga(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Io(e,s,"signInWithPassword");return Ga(e,r)}else return Promise.reject(i)});case"emailLink":return cb(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return lb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ub(e,{idToken:n,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ps(t,e){return gr(t,"POST","/v1/accounts:signInWithIdp",ii(t,e))}/**
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
 */const hb="http://localhost";class rs extends Mc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Dc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new rs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ps(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:hb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fr(n)}return e}}/**
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
 */function db(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fb(t){const e=wi(bi(t)).link,n=e?wi(bi(e)).deep_link_id:null,s=wi(bi(t)).deep_link_id;return(s?wi(bi(s)).link:null)||s||n||e||t}class Lc{constructor(e){var n,s,i,r,o,a;const l=wi(bi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=db((i=l.mode)!==null&&i!==void 0?i:null);G(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fb(e);try{return new Lc(n)}catch{return null}}}/**
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
 */class oi{constructor(){this.providerId=oi.PROVIDER_ID}static credential(e,n){return Gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Lc.parseLink(n);return G(s,"argument-error"),Gi._fromEmailAndCode(e,s.code,s.tenantId)}}oi.PROVIDER_ID="password";oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mr extends jp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _n extends mr{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
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
 */class wn extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
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
 */class bn extends mr{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class En extends mr{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return En.credential(n,s)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
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
 */async function Qa(t,e){return gr(t,"POST","/v1/accounts:signUp",ii(t,e))}/**
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
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await es._fromIdTokenResponse(e,s,i),o=Xh(s);return new os({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Xh(s);return new os({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Xh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class To extends un{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,To.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new To(e,n,s,i)}}function Hp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?To._fromErrorAndOperation(t,r,e,s):r})}async function pb(t,e,n=!1){const s=await qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",s)}/**
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
 */async function gb(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await qs(t,Hp(s,i,e,t),n);G(r.idToken,s,"internal-error");const o=Oc(r.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),os._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Pt(s,"user-mismatch"),r}}/**
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
 */async function qp(t,e,n=!1){const s="signIn",i=await Hp(t,s,e),r=await os._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function mb(t,e){return qp(ri(t),e)}async function yb(t,e,n){var s;const i=ri(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((s=i._getRecaptchaConfig())===null||s===void 0)&&s.emailPasswordEnabled){const c=await Io(i,r,"signUpPassword");o=Qa(i,c)}else o=Qa(i,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Io(i,r,"signUpPassword");return Qa(i,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await os._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function vb(t,e,n){return mb(Ke(t),oi.credential(e,n))}/**
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
 */async function _b(t,e){return us(t,"POST","/v1/accounts:update",e)}/**
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
 */async function wb(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ke(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qs(s,_b(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function bb(t,e,n,s){return Ke(t).onIdTokenChanged(e,n,s)}function Eb(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}function Ib(t){return Ke(t).signOut()}const Co="__sak";/**
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
 */class zp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Co,"1"),this.storage.removeItem(Co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Tb(){const t=rt();return xc(t)||ta(t)}const Cb=1e3,Sb=10;class Kp extends zp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tb()&&Q1(),this.fallbackToPolling=Mp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);G1()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Sb):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Cb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kp.type="LOCAL";const Ab=Kp;/**
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
 */class Wp extends zp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wp.type="SESSION";const Gp=Wp;/**
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
 */function kb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new na(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await kb(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
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
 */function Uc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Rb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Uc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qt(){return window}function Db(t){qt().location.href=t}/**
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
 */function Qp(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function Pb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ob(){return Qp()?self:null}/**
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
 */const Yp="firebaseLocalStorageDb",xb=1,So="firebaseLocalStorage",Jp="fbase_key";class yr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sa(t,e){return t.transaction([So],e?"readwrite":"readonly").objectStore(So)}function Mb(){const t=indexedDB.deleteDatabase(Yp);return new yr(t).toPromise()}function Nl(){const t=indexedDB.open(Yp,xb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(So,{keyPath:Jp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(So)?e(s):(s.close(),await Mb(),e(await Nl()))})})}async function Zh(t,e,n){const s=sa(t,!0).put({[Jp]:e,value:n});return new yr(s).toPromise()}async function Lb(t,e){const n=sa(t,!1).get(e),s=await new yr(n).toPromise();return s===void 0?null:s.value}function ed(t,e){const n=sa(t,!0).delete(e);return new yr(n).toPromise()}const Ub=800,Fb=3;class Xp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Fb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(Ob()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Pb(),!this.activeServiceWorker)return;this.sender=new Rb(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nl();return await Zh(e,Co,"1"),await ed(e,Co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Lb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ed(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=sa(i,!1).getAll();return new yr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xp.type="LOCAL";const $b=Xp;new pr(3e4,6e4);/**
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
 */function Bb(t,e){return e?en(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fc extends Mc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vb(t){return qp(t.auth,new Fc(t),t.bypassAuthState)}function jb(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),gb(n,new Fc(t),t.bypassAuthState)}async function Hb(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),pb(n,new Fc(t),t.bypassAuthState)}/**
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
 */class Zp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vb;case"linkViaPopup":case"linkViaRedirect":return Hb;case"reauthViaPopup":case"reauthViaRedirect":return jb;default:Pt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qb=new pr(2e3,1e4);class Is extends Zp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qb.get())};e()}}Is.currentPopupAction=null;/**
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
 */const zb="pendingRedirect",ro=new Map;class Kb extends Zp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ro.get(this.auth._key());if(!e){try{const s=await Wb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ro.set(this.auth._key(),e)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wb(t,e){const n=Yb(e),s=Qb(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Gb(t,e){ro.set(t._key(),e)}function Qb(t){return en(t._redirectPersistence)}function Yb(t){return io(zb,t.config.apiKey,t.name)}async function Jb(t,e,n=!1){const s=ri(t),i=Bb(s,e),o=await new Kb(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Xb=10*60*1e3;class Zb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!eg(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xb&&this.cachedEventUids.clear(),this.cachedEventUids.has(td(e))}saveEventToCache(e){this.cachedEventUids.add(td(e)),this.lastProcessedEventTime=Date.now()}}function td(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eg(t);default:return!1}}/**
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
 */async function tE(t,e={}){return us(t,"GET","/v1/projects",e)}/**
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
 */const nE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sE=/^https?/;async function iE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tE(t);for(const n of e)try{if(rE(n))return}catch{}Pt(t,"unauthorized-domain")}function rE(t){const e=Pl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!sE.test(n))return!1;if(nE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const oE=new pr(3e4,6e4);function nd(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aE(t){return new Promise((e,n)=>{var s,i,r;function o(){nd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nd(),n(Ht(t,"network-request-failed"))},timeout:oE.get()})}if(!((i=(s=qt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=qt().gapi)===null||r===void 0)&&r.load)o();else{const a=J1("iframefcb");return qt()[a]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},$p(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw oo=null,e})}let oo=null;function lE(t){return oo=oo||aE(t),oo}/**
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
 */const cE=new pr(5e3,15e3),uE="__/auth/iframe",hE="emulator/auth/iframe",dE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pE(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nc(e,hE):`https://${t.config.authDomain}/${uE}`,s={apiKey:e.apiKey,appName:t.name,v:si},i=fE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${fr(s).slice(1)}`}async function gE(t){const e=await lE(t),n=qt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:pE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),a=qt().setTimeout(()=>{r(o)},cE.get());function l(){qt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const mE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yE=500,vE=600,_E="_blank",wE="http://localhost";class sd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bE(t,e,n,s=yE,i=vE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=rt().toLowerCase();n&&(a=Dp(c)?_E:n),Rp(c)&&(e=e||wE,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[m,w])=>`${f}${m}=${w},`,"");if(W1(c)&&a!=="_self")return EE(e||"",a),new sd(null);const d=window.open(e||"",a,u);G(d,t,"popup-blocked");try{d.focus()}catch{}return new sd(d)}function EE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const IE="__/auth/handler",TE="emulator/auth/handler",CE=encodeURIComponent("fac");async function id(t,e,n,s,i,r){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:si,eventId:i};if(e instanceof jp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_w(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof mr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${CE}=${encodeURIComponent(l)}`:"";return`${SE(t)}?${fr(a).slice(1)}${c}`}function SE({config:t}){return t.emulator?Nc(t,TE):`https://${t.authDomain}/${IE}`}/**
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
 */const Ya="webStorageSupport";class AE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gp,this._completeRedirectFn=Jb,this._overrideRedirectResult=Gb}async _openPopup(e,n,s,i){var r;sn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await id(e,n,s,Pl(),i);return bE(e,o,Uc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await id(e,n,s,Pl(),i);return Db(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(sn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await gE(e),s=new Zb(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ya,{type:Ya},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ya];o!==void 0&&n(!!o),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mp()||xc()||ta()}}const kE=AE;var rd="@firebase/auth",od="0.23.2";/**
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
 */class RE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function DE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PE(t){Hs(new ss("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lp(t)},c=new nb(s,i,r,l);return ib(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Hs(new ss("auth-internal",e=>{const n=ri(e.getProvider("auth").getImmediate());return(s=>new RE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(rd,od,DE(t)),Rn(rd,od,"esm2017")}/**
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
 */const NE=5*60,OE=gp("authIdTokenMaxAge")||NE;let ad=null;const xE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>OE)return;const i=n==null?void 0:n.token;ad!==i&&(ad=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ME(t=_p()){const e=Rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sb(t,{popupRedirectResolver:kE,persistence:[$b,Ab,Gp]}),s=gp("authTokenSyncURL");if(s){const r=xE(s);Eb(n,r,()=>r(n.currentUser)),bb(n,o=>r(o))}const i=fp("auth");return i&&rb(n,`http://${i}`),n}PE("Browser");var LE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,$c=$c||{},Q=LE||self;function ia(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function UE(t){return Object.prototype.hasOwnProperty.call(t,Ja)&&t[Ja]||(t[Ja]=++FE)}var Ja="closure_uid_"+(1e9*Math.random()>>>0),FE=0;function $E(t,e,n){return t.call.apply(t.bind,arguments)}function BE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=$E:nt=BE,nt.apply(null,arguments)}function jr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Fn(){this.s=this.s,this.o=this.o}var VE=0;Fn.prototype.s=!1;Fn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),VE!=0)&&UE(this)};Fn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ld(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ia(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var jE=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function Qi(t){return/^[\s\xa0]*$/.test(t)}function ra(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function $t(t){return ra().indexOf(t)!=-1}function Vc(t){return Vc[" "](t),t}Vc[" "]=function(){};function HE(t,e){var n=MI;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var qE=$t("Opera"),zs=$t("Trident")||$t("MSIE"),ng=$t("Edge"),Ol=ng||zs,sg=$t("Gecko")&&!(ra().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge"))&&!($t("Trident")||$t("MSIE"))&&!$t("Edge"),zE=ra().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge");function ig(){var t=Q.document;return t?t.documentMode:void 0}var xl;e:{var Xa="",Za=function(){var t=ra();if(sg)return/rv:([^\);]+)(\)|;)/.exec(t);if(ng)return/Edge\/([\d\.]+)/.exec(t);if(zs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zE)return/WebKit\/(\S+)/.exec(t);if(qE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Za&&(Xa=Za?Za[1]:""),zs){var el=ig();if(el!=null&&el>parseFloat(Xa)){xl=String(el);break e}}xl=Xa}var Ml;if(Q.document&&zs){var cd=ig();Ml=cd||parseInt(xl,10)||void 0}else Ml=void 0;var KE=Ml;function Yi(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sg){e:{try{Vc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:WE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yi.$.h.call(this)}}Ve(Yi,st);var WE={2:"touch",3:"pen",4:"mouse"};Yi.prototype.h=function(){Yi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _r="closure_listenable_"+(1e6*Math.random()|0),GE=0;function QE(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++GE,this.fa=this.ia=!1}function oa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function jc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function YE(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function rg(t){const e={};for(const n in t)e[n]=t[n];return e}const ud="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function og(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ud.length;r++)n=ud[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function aa(t){this.src=t,this.g={},this.h=0}aa.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ul(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new QE(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Ll(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=tg(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(oa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ul(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Hc="closure_lm_"+(1e6*Math.random()|0),tl={};function ag(t,e,n,s,i){if(s&&s.once)return cg(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ag(t,e[r],n,s,i);return null}return n=Kc(n),t&&t[_r]?t.O(e,n,vr(s)?!!s.capture:!!s,i):lg(t,e,n,!1,s,i)}function lg(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=vr(i)?!!i.capture:!!i,a=zc(t);if(a||(t[Hc]=a=new aa(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=JE(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)jE||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(hg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function JE(){function t(n){return e.call(t.src,t.listener,n)}const e=XE;return t}function cg(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)cg(t,e[r],n,s,i);return null}return n=Kc(n),t&&t[_r]?t.P(e,n,vr(s)?!!s.capture:!!s,i):lg(t,e,n,!0,s,i)}function ug(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)ug(t,e[r],n,s,i);else s=vr(s)?!!s.capture:!!s,n=Kc(n),t&&t[_r]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ul(r,n,s,i),-1<n&&(oa(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=zc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ul(e,n,s,i)),(n=-1<t?e[t]:null)&&qc(n))}function qc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[_r])Ll(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(hg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=zc(e))?(Ll(n,t),n.h==0&&(n.src=null,e[Hc]=null)):oa(t)}}}function hg(t){return t in tl?tl[t]:tl[t]="on"+t}function XE(t,e){if(t.fa)t=!0;else{e=new Yi(e,this);var n=t.listener,s=t.la||t.src;t.ia&&qc(t),t=n.call(s,e)}return t}function zc(t){return t=t[Hc],t instanceof aa?t:null}var nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kc(t){return typeof t=="function"?t:(t[nl]||(t[nl]=function(e){return t.handleEvent(e)}),t[nl])}function Be(){Fn.call(this),this.i=new aa(this),this.S=this,this.J=null}Ve(Be,Fn);Be.prototype[_r]=!0;Be.prototype.removeEventListener=function(t,e,n,s){ug(this,t,e,n,s)};function ze(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var i=e;e=new st(s,t),og(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Hr(o,s,!0,e)&&i}if(o=e.g=t,i=Hr(o,s,!0,e)&&i,i=Hr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Hr(o,s,!1,e)&&i}Be.prototype.N=function(){if(Be.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)oa(n[s]);delete t.g[e],t.h--}}this.J=null};Be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Be.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Hr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ll(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Wc=Q.JSON.stringify;class ZE{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function eI(){var t=Gc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tI{constructor(){this.h=this.g=null}add(e,n){const s=dg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var dg=new ZE(()=>new nI,t=>t.reset());class nI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sI(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function iI(t){Q.setTimeout(()=>{throw t},0)}let Ji,Xi=!1,Gc=new tI,fg=()=>{const t=Q.Promise.resolve(void 0);Ji=()=>{t.then(rI)}};var rI=()=>{for(var t;t=eI();){try{t.h.call(t.g)}catch(n){iI(n)}var e=dg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xi=!1};function la(t,e){Be.call(this),this.h=t||1,this.g=e||Q,this.j=nt(this.qb,this),this.l=Date.now()}Ve(la,Be);P=la.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ze(this,"tick"),this.ga&&(Qc(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){la.$.N.call(this),Qc(this),delete this.g};function Yc(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function pg(t){t.g=Yc(()=>{t.g=null,t.i&&(t.i=!1,pg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class oI extends Fn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pg(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(t){Fn.call(this),this.h=t,this.g={}}Ve(Zi,Fn);var hd=[];function gg(t,e,n,s){Array.isArray(n)||(n&&(hd[0]=n.toString()),n=hd);for(var i=0;i<n.length;i++){var r=ag(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function mg(t){jc(t.g,function(e,n){this.g.hasOwnProperty(n)&&qc(e)},t),t.g={}}Zi.prototype.N=function(){Zi.$.N.call(this),mg(this)};Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ca(){this.g=!0}ca.prototype.Ea=function(){this.g=!1};function aI(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function lI(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Ts(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+uI(t,n)+(s?" "+s:"")})}function cI(t,e){t.info(function(){return"TIMEOUT: "+e})}ca.prototype.info=function(){};function uI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Wc(n)}catch{return e}}var hs={},dd=null;function ua(){return dd=dd||new Be}hs.Ta="serverreachability";function yg(t){st.call(this,hs.Ta,t)}Ve(yg,st);function er(t){const e=ua();ze(e,new yg(e))}hs.STAT_EVENT="statevent";function vg(t,e){st.call(this,hs.STAT_EVENT,t),this.stat=e}Ve(vg,st);function lt(t){const e=ua();ze(e,new vg(e,t))}hs.Ua="timingevent";function _g(t,e){st.call(this,hs.Ua,t),this.size=e}Ve(_g,st);function wr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var ha={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},wg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Jc(){}Jc.prototype.h=null;function fd(t){return t.h||(t.h=t.i())}function bg(){}var br={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Xc(){st.call(this,"d")}Ve(Xc,st);function Zc(){st.call(this,"c")}Ve(Zc,st);var Fl;function da(){}Ve(da,Jc);da.prototype.g=function(){return new XMLHttpRequest};da.prototype.i=function(){return{}};Fl=new da;function Er(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Zi(this),this.P=hI,t=Ol?125:void 0,this.V=new la(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Eg}function Eg(){this.i=null,this.g="",this.h=!1}var hI=45e3,$l={},Ao={};P=Er.prototype;P.setTimeout=function(t){this.P=t};function Bl(t,e,n){t.L=1,t.v=pa(rn(e)),t.s=n,t.S=!0,Ig(t,null)}function Ig(t,e){t.G=Date.now(),Ir(t),t.A=rn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Pg(n.i,"t",s),t.C=0,n=t.l.J,t.h=new Eg,t.g=Xg(t.l,n?e:null,!t.s),0<t.O&&(t.M=new oI(nt(t.Pa,t,t.g),t.O)),gg(t.U,t.g,"readystatechange",t.nb),e=t.I?rg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),er(),aI(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&Bt(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const u=Bt(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||Ol||this.g&&(this.h.h||this.g.ja()||yd(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?er(3):er(2)),fa(this);var n=this.g.da();this.ca=n;t:if(Tg(this)){var s=yd(this.g);t="";var i=s.length,r=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qn(this),Ni(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,lI(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qi(a)){var c=a;break t}}c=null}if(n=c)Ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vl(this,n);else{this.i=!1,this.o=3,lt(12),Qn(this),Ni(this);break e}}this.S?(Cg(this,u,o),Ol&&this.i&&u==3&&(gg(this.U,this.V,"tick",this.mb),this.V.start())):(Ts(this.j,this.m,o,null),Vl(this,o)),u==4&&Qn(this),this.i&&!this.J&&(u==4?Gg(this.l,this):(this.i=!1,Ir(this)))}else NI(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),Qn(this),Ni(this)}}}catch{}finally{}};function Tg(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Cg(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=dI(t,n),i==Ao){e==4&&(t.o=4,lt(14),s=!1),Ts(t.j,t.m,null,"[Incomplete Response]");break}else if(i==$l){t.o=4,lt(15),Ts(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ts(t.j,t.m,i,null),Vl(t,i);Tg(t)&&i!=Ao&&i!=$l&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ru(e),e.M=!0,lt(11))):(Ts(t.j,t.m,n,"[Invalid Chunked Response]"),Qn(t),Ni(t))}P.mb=function(){if(this.g){var t=Bt(this.g),e=this.g.ja();this.C<e.length&&(fa(this),Cg(this,t,e),this.i&&t!=4&&Ir(this))}};function dI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ao:(n=Number(e.substring(n,s)),isNaN(n)?$l:(s+=1,s+n>e.length?Ao:(e=e.slice(s,s+n),t.C=s+n,e)))}P.cancel=function(){this.J=!0,Qn(this)};function Ir(t){t.Y=Date.now()+t.P,Sg(t,t.P)}function Sg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wr(nt(t.lb,t),e)}function fa(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(cI(this.j,this.A),this.L!=2&&(er(),lt(17)),Qn(this),this.o=2,Ni(this)):Sg(this,this.Y-t)};function Ni(t){t.l.H==0||t.J||Gg(t.l,t)}function Qn(t){fa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Qc(t.V),mg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Vl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||jl(n.i,t))){if(!t.K&&jl(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Do(n),ya(n);else break e;iu(n),lt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=wr(nt(n.ib,n),6e3));if(1>=xg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Yn(n,11)}else if((t.K||n.g==t)&&Do(n),!Qi(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=c[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var r=s.i;r.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(eu(r,r.h),r.h=null))}if(s.F){const E=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.Da=E,we(s.I,s.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Jg(s,s.J?s.pa:null,s.Y),o.K){Mg(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(fa(a),Ir(a)),s.g=o}else Kg(s);0<n.j.length&&va(n)}else c[0]!="stop"&&c[0]!="close"||Yn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Yn(n,7):su(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}er(4)}catch{}}function fI(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ia(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function pI(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ia(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ag(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ia(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pI(t),s=fI(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var kg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ts(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ts){this.h=t.h,ko(this,t.j),this.s=t.s,this.g=t.g,Ro(this,t.m),this.l=t.l;var e=t.i,n=new tr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),pd(this,n),this.o=t.o}else t&&(e=String(t).match(kg))?(this.h=!1,ko(this,e[1]||"",!0),this.s=Ei(e[2]||""),this.g=Ei(e[3]||"",!0),Ro(this,e[4]),this.l=Ei(e[5]||"",!0),pd(this,e[6]||"",!0),this.o=Ei(e[7]||"")):(this.h=!1,this.i=new tr(null,this.h))}ts.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ii(e,gd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ii(e,gd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ii(n,n.charAt(0)=="/"?vI:yI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ii(n,wI)),t.join("")};function rn(t){return new ts(t)}function ko(t,e,n){t.j=n?Ei(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ro(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pd(t,e,n){e instanceof tr?(t.i=e,bI(t.i,t.h)):(n||(e=Ii(e,_I)),t.i=new tr(e,t.h))}function we(t,e,n){t.i.set(e,n)}function pa(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ei(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ii(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gd=/[#\/\?@]/g,yI=/[#\?:]/g,vI=/[#\?]/g,_I=/[#\?@]/g,wI=/#/g;function tr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $n(t){t.g||(t.g=new Map,t.h=0,t.i&&gI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=tr.prototype;P.add=function(t,e){$n(this),this.i=null,t=ai(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rg(t,e){$n(t),e=ai(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Dg(t,e){return $n(t),e=ai(t,e),t.g.has(e)}P.forEach=function(t,e){$n(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};P.ta=function(){$n(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};P.Z=function(t){$n(this);let e=[];if(typeof t=="string")Dg(this,t)&&(e=e.concat(this.g.get(ai(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return $n(this),this.i=null,t=ai(this,t),Dg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Pg(t,e,n){Rg(t,e),0<n.length&&(t.i=null,t.g.set(ai(t,e),Bc(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function ai(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bI(t,e){e&&!t.j&&($n(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Rg(this,s),Pg(this,i,n))},t)),t.j=e}var EI=class{constructor(t,e){this.g=t,this.map=e}};function Ng(t){this.l=t||II,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var II=10;function Og(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xg(t){return t.h?1:t.g?t.g.size:0}function jl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function eu(t,e){t.g?t.g.add(e):t.h=e}function Mg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ng.prototype.cancel=function(){if(this.i=Lg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Lg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Bc(t.i)}var TI=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function CI(){this.g=new TI}function SI(t,e,n){const s=n||"";try{Ag(t,function(i,r){let o=i;vr(i)&&(o=Wc(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function AI(t,e){const n=new ca;if(Q.Image){const s=new Image;s.onload=jr(qr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=jr(qr,n,s,"TestLoadImage: error",!1,e),s.onabort=jr(qr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=jr(qr,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function qr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Tr(t){this.l=t.fc||null,this.j=t.ob||!1}Ve(Tr,Jc);Tr.prototype.g=function(){return new ga(this.l,this.j)};Tr.prototype.i=function(t){return function(){return t}}({});function ga(t,e){Be.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=tu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ve(ga,Be);var tu=0;P=ga.prototype;P.open=function(t,e){if(this.readyState!=tu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,nr(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cr(this)),this.readyState=tu};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ug(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Ug(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cr(this):nr(this),this.readyState==3&&Ug(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,Cr(this))};P.Ya=function(t){this.g&&(this.response=t,Cr(this))};P.ka=function(){this.g&&Cr(this)};function Cr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,nr(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function nr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var kI=Q.JSON.parse;function Ae(t){Be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Fg,this.L=this.M=!1}Ve(Ae,Be);var Fg="",RI=/^https?$/i,DI=["POST","PUT"];P=Ae.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Fl.g(),this.C=this.u?fd(this.u):fd(Fl),this.g.onreadystatechange=nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){md(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=tg(DI,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vg(this),0<this.B&&((this.L=PI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.ua,this)):this.A=Yc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){md(this,r)}};function PI(t){return zs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof $c<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function md(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$g(t),ma(t)}function $g(t){t.F||(t.F=!0,ze(t,"complete"),ze(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),ma(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ma(this,!0)),Ae.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?Bg(this):this.kb())};P.kb=function(){Bg(this)};function Bg(t){if(t.h&&typeof $c<"u"&&(!t.C[1]||Bt(t)!=4||t.da()!=2)){if(t.v&&Bt(t)==4)Yc(t.La,0,t);else if(ze(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(kg)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),s=!RI.test(i?i.toLowerCase():"")}n=s}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var r=2<Bt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",$g(t)}}finally{ma(t)}}}}function ma(t,e){if(t.g){Vg(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=s}catch{}}}function Vg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function Bt(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),kI(e)}};function yd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Fg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function NI(t){const e={};t=(t.g&&2<=Bt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Qi(t[s]))continue;var n=sI(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}YE(e,function(s){return s.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jg(t){let e="";return jc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function nu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=jg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function mi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hg(t){this.Ga=0,this.j=[],this.l=new ca,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=mi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=mi("baseRetryDelayMs",5e3,t),this.hb=mi("retryDelaySeedMs",1e4,t),this.eb=mi("forwardChannelMaxRetries",2,t),this.xa=mi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ng(t&&t.concurrentRequestLimit),this.Ja=new CI,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=Hg.prototype;P.ra=8;P.H=1;function su(t){if(qg(t),t.H==3){var e=t.W++,n=rn(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),Sr(t,n),e=new Er(t,t.l,e),e.L=2,e.v=pa(rn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xg(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ir(e)}Yg(t)}function ya(t){t.g&&(ru(t),t.g.cancel(),t.g=null)}function qg(t){ya(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Do(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function va(t){if(!Og(t.i)&&!t.m){t.m=!0;var e=t.Na;Ji||fg(),Xi||(Ji(),Xi=!0),Gc.add(e,t),t.C=0}}function OI(t,e){return xg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=wr(nt(t.Na,t,e),Qg(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Er(this,this.l,t);let r=this.s;if(this.U&&(r?(r=rg(r),og(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zg(this,i,e),n=rn(this.I),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),Sr(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(jg(r)))+"&"+e:this.o&&nu(n,this.o,r)),eu(this.i,i),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),i.aa=!0,Bl(i,n,null)):Bl(i,n,e),this.H=2}}else this.H==3&&(t?vd(this,t):this.j.length==0||Og(this.i)||vd(this))};function vd(t,e){var n;e?n=e.m:n=t.W++;const s=rn(t.I);we(s,"SID",t.K),we(s,"RID",n),we(s,"AID",t.V),Sr(t,s),t.o&&t.s&&nu(s,t.o,t.s),n=new Er(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=zg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),eu(t.i,n),Bl(n,s,e)}function Sr(t,e){t.na&&jc(t.na,function(n,s){we(e,s,n)}),t.h&&Ag({},function(n,s){we(e,s,n)})}function zg(t,e,n){n=Math.min(t.j.length,n);var s=t.h?nt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{SI(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function Kg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ji||fg(),Xi||(Ji(),Xi=!0),Gc.add(e,t),t.A=0}}function iu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=wr(nt(t.Ma,t),Qg(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,Wg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=wr(nt(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),ya(this),Wg(this))};function ru(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Wg(t){t.g=new Er(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=rn(t.wa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.V),we(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&we(e,"TO",t.qa),we(e,"TYPE","xmlhttp"),Sr(t,e),t.o&&t.s&&nu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=pa(rn(e)),n.s=null,n.S=!0,Ig(n,t)}P.ib=function(){this.v!=null&&(this.v=null,ya(this),iu(this),lt(19))};function Do(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Gg(t,e){var n=null;if(t.g==e){Do(t),ru(t),t.g=null;var s=2}else if(jl(t.i,e))n=e.F,Mg(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=ua(),ze(s,new _g(s,n)),va(t)}else Kg(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&OI(t,e)||s==2&&iu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Yn(t,5);break;case 4:Yn(t,10);break;case 3:Yn(t,6);break;default:Yn(t,2)}}}function Qg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Yn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=nt(t.pb,t);n||(n=new ts("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||ko(n,"https"),pa(n)),AI(n.toString(),s)}else lt(2);t.H=0,t.h&&t.h.za(e),Yg(t),qg(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function Yg(t){if(t.H=0,t.ma=[],t.h){const e=Lg(t.i);(e.length!=0||t.j.length!=0)&&(ld(t.ma,e),ld(t.ma,t.j),t.i.i.length=0,Bc(t.j),t.j.length=0),t.h.ya()}}function Jg(t,e,n){var s=n instanceof ts?rn(n):new ts(n);if(s.g!="")e&&(s.g=e+"."+s.g),Ro(s,s.m);else{var i=Q.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ts(null);s&&ko(r,s),e&&(r.g=e),i&&Ro(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&we(s,n,e),we(s,"VER",t.ra),Sr(t,s),s}function Xg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ae(new Tr({ob:!0})):new Ae(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function Zg(){}P=Zg.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function Po(){if(zs&&!(10<=Number(KE)))throw Error("Environmental error: no available transport.")}Po.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){Be.call(this),this.g=new Hg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Qi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new li(this)}Ve(_t,Be);_t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Jg(t,null,t.Y),va(t)};_t.prototype.close=function(){su(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Wc(t),t=n);e.j.push(new EI(e.fb++,t)),e.H==3&&va(e)};_t.prototype.N=function(){this.g.h=null,delete this.j,su(this.g),delete this.g,_t.$.N.call(this)};function em(t){Xc.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ve(em,Xc);function tm(){Zc.call(this),this.status=1}Ve(tm,Zc);function li(t){this.g=t}Ve(li,Zg);li.prototype.Ba=function(){ze(this.g,"a")};li.prototype.Aa=function(t){ze(this.g,new em(t))};li.prototype.za=function(t){ze(this.g,new tm)};li.prototype.ya=function(){ze(this.g,"b")};function xI(){this.blockSize=-1}function Nt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ve(Nt,xI);Nt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function sl(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}Nt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)sl(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){sl(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){sl(this,s),i=0;break}}this.h=i,this.i+=e};Nt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function pe(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var MI={};function ou(t){return-128<=t&&128>t?HE(t,function(e){return new pe([e|0],0>e?-1:0)}):new pe([t|0],0>t?-1:0)}function Vt(t){if(isNaN(t)||!isFinite(t))return Ns;if(0>t)return He(Vt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Hl;return new pe(e,0)}function nm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return He(nm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Vt(Math.pow(e,8)),s=Ns,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Vt(Math.pow(e,r)),s=s.R(r).add(Vt(o))):(s=s.R(n),s=s.add(Vt(o)))}return s}var Hl=4294967296,Ns=ou(0),ql=ou(1),_d=ou(16777216);P=pe.prototype;P.ea=function(){if(bt(this))return-He(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Hl+s)*e,e*=Hl}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(tn(this))return"0";if(bt(this))return"-"+He(this).toString(t);for(var e=Vt(Math.pow(t,6)),n=this,s="";;){var i=Oo(n,e).g;n=No(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,tn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function tn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function bt(t){return t.h==-1}P.X=function(t){return t=No(this,t),bt(t)?-1:tn(t)?0:1};function He(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new pe(n,~t.h).add(ql)}P.abs=function(){return bt(this)?He(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function No(t,e){return t.add(He(e))}P.R=function(t){if(tn(this)||tn(t))return Ns;if(bt(this))return bt(t)?He(this).R(He(t)):He(He(this).R(t));if(bt(t))return He(this.R(He(t)));if(0>this.X(_d)&&0>t.X(_d))return Vt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,zr(n,2*s+2*i),n[2*s+2*i+1]+=r*l,zr(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,zr(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,zr(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new pe(n,0)};function zr(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function yi(t,e){this.g=t,this.h=e}function Oo(t,e){if(tn(e))throw Error("division by zero");if(tn(t))return new yi(Ns,Ns);if(bt(t))return e=Oo(He(t),e),new yi(He(e.g),He(e.h));if(bt(e))return e=Oo(t,He(e)),new yi(He(e.g),e.h);if(30<t.g.length){if(bt(t)||bt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ql,s=e;0>=s.X(t);)n=wd(n),s=wd(s);var i=_s(n,1),r=_s(s,1);for(s=_s(s,2),n=_s(n,2);!tn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=_s(s,1),n=_s(n,1)}return e=No(t,i.R(e)),new yi(i,e)}for(i=Ns;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Vt(n),o=r.R(e);bt(o)||0<o.X(t);)n-=s,r=Vt(n),o=r.R(e);tn(r)&&(r=ql),i=i.add(r),t=No(t,o)}return new yi(i,t)}P.gb=function(t){return Oo(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new pe(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new pe(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new pe(n,this.h^t.h)};function wd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new pe(n,t.h)}function _s(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new pe(i,t.h)}Po.prototype.createWebChannel=Po.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;ha.NO_ERROR=0;ha.TIMEOUT=8;ha.HTTP_ERROR=6;wg.COMPLETE="complete";bg.EventType=br;br.OPEN="a";br.CLOSE="b";br.ERROR="c";br.MESSAGE="d";Be.prototype.listen=Be.prototype.O;Ae.prototype.listenOnce=Ae.prototype.P;Ae.prototype.getLastError=Ae.prototype.Sa;Ae.prototype.getLastErrorCode=Ae.prototype.Ia;Ae.prototype.getStatus=Ae.prototype.da;Ae.prototype.getResponseJson=Ae.prototype.Wa;Ae.prototype.getResponseText=Ae.prototype.ja;Ae.prototype.send=Ae.prototype.ha;Ae.prototype.setWithCredentials=Ae.prototype.Oa;Nt.prototype.digest=Nt.prototype.l;Nt.prototype.reset=Nt.prototype.reset;Nt.prototype.update=Nt.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=Vt;pe.fromString=nm;var LI=function(){return new Po},UI=function(){return ua()},il=ha,FI=wg,$I=hs,bd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},BI=Tr,Kr=bg,VI=Ae,jI=Nt,Os=pe;const Ed="@firebase/firestore";/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let ci="9.23.0";/**
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
 */const as=new Ac("@firebase/firestore");function Id(){return as.logLevel}function B(t,...e){if(as.logLevel<=le.DEBUG){const n=e.map(au);as.debug(`Firestore (${ci}): ${t}`,...n)}}function on(t,...e){if(as.logLevel<=le.ERROR){const n=e.map(au);as.error(`Firestore (${ci}): ${t}`,...n)}}function Ks(t,...e){if(as.logLevel<=le.WARN){const n=e.map(au);as.warn(`Firestore (${ci}): ${t}`,...n)}}function au(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ci}) INTERNAL ASSERTION FAILED: `+t;throw on(e),new Error(e)}function Ee(t,e){t||Y()}function Z(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class sm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class qI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zI{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Dn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ee(typeof s.accessToken=="string"),new sm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Je(e)}}class KI{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class WI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new KI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QI{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.T=n.token,new GI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function YI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class im{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=YI(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new xe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new xe(0,0))}static max(){return new X(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class sr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends sr{construct(e,n,s){return new Te(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const JI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends sr{construct(e,n,s){return new et(e,n,s)}static isValidIdentifier(e){return JI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new q(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new q(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Te.fromString(e))}static fromName(e){return new z(Te.fromString(e).popFirst(5))}static empty(){return new z(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Te(e.slice()))}}function XI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(s===1e9?new xe(n+1,0):new xe(n,s));return new xn(i,z.empty(),e)}function ZI(t){return new xn(t.readTime,t.key,-1)}class xn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new xn(X.min(),z.empty(),-1)}static max(){return new xn(X.max(),z.empty(),-1)}}function eT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const tT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ar(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==tT)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(i=>i?S.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new S((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new S((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function kr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}lu.ct=-1;function _a(t){return t==null}function xo(t){return t===0&&1/t==-1/0}function sT(t){return typeof t=="number"&&Number.isInteger(t)&&!xo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Td(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ds(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wr(this.root,e,this.comparator,!0)}}class Wr{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??je.RED,this.left=i??je.EMPTY,this.right=r??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new je(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,i){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cd(this.data.getIterator())}getIteratorFrom(e){return new Cd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class Cd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new vt([])}unionWith(e){let n=new it(et.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class om extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new om("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const iT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=iT.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ls(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function cu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uu(t){const e=t.mapValue.fields.__previous_value__;return cu(e)?uu(e):e}function ir(t){const e=Mn(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class rT{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class rr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new rr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Gr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cu(t)?4:oT(t)?9007199254740991:10:Y()}function Gt(t,e){if(t===e)return!0;const n=cs(t);if(n!==cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ir(t).isEqual(ir(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Mn(s.timestampValue),o=Mn(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ls(s.bytesValue).isEqual(ls(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pe(s.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pe(s.integerValue)===Pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Pe(s.doubleValue),o=Pe(i.doubleValue);return r===o?xo(r)===xo(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Td(r)!==Td(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Gt(r[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function or(t,e){return(t.values||[]).find(n=>Gt(n,e))!==void 0}function Gs(t,e){if(t===e)return 0;const n=cs(t),s=cs(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Pe(i.integerValue||i.doubleValue),a=Pe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Sd(t.timestampValue,e.timestampValue);case 4:return Sd(ir(t),ir(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,r){const o=ls(i),a=ls(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ce(o[l],a[l]);if(c!==0)return c}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ce(Pe(i.latitude),Pe(r.latitude));return o!==0?o:ce(Pe(i.longitude),Pe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Gs(o[l],a[l]);if(c)return c}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Gr.mapValue&&r===Gr.mapValue)return 0;if(i===Gr.mapValue)return 1;if(r===Gr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=ce(a[u],c[u]);if(d!==0)return d;const f=Gs(o[a[u]],l[c[u]]);if(f!==0)return f}return ce(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Sd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Mn(t),s=Mn(e),i=ce(n.seconds,s.seconds);return i!==0?i:ce(n.nanos,s.nanos)}function Qs(t){return zl(t)}function zl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Mn(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ls(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=zl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${zl(s.fields[a])}`;return r+"}"}(t.mapValue):Y();var e,n}function Kl(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function Ad(t){return!!t&&"nullValue"in t}function kd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ao(t){return!!t&&"mapValue"in t}function Oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ds(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Oi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(n)}setAll(e){let n=et.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Oi(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ao(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ds(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new ht(Oi(this.value))}}function am(t){const e=[];return ds(t.fields,(n,s)=>{const i=new et([n]);if(ao(s)){const r=am(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new vt(e)}/**
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
 */class Xe{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Xe(e,0,X.min(),X.min(),X.min(),ht.empty(),0)}static newFoundDocument(e,n,s,i){return new Xe(e,1,n,X.min(),s,i,0)}static newNoDocument(e,n){return new Xe(e,2,n,X.min(),X.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,X.min(),X.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mo{constructor(e,n){this.position=e,this.inclusive=n}}function Rd(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=z.comparator(z.fromName(o.referenceValue),n.key):s=Gs(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Dd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function aT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class lm{}class Oe extends lm{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new cT(e,n,s):n==="array-contains"?new dT(e,s):n==="in"?new fT(e,s):n==="not-in"?new pT(e,s):n==="array-contains-any"?new gT(e,s):new Oe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new uT(e,s):new hT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gs(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Qt extends lm{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Qt(e,n)}matches(e){return cm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function cm(t){return t.op==="and"}function um(t){return lT(t)&&cm(t)}function lT(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function Wl(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(um(t))return t.filters.map(e=>Wl(e)).join(",");{const e=t.filters.map(n=>Wl(n)).join(",");return`${t.op}(${e})`}}function hm(t,e){return t instanceof Oe?function(n,s){return s instanceof Oe&&n.op===s.op&&n.field.isEqual(s.field)&&Gt(n.value,s.value)}(t,e):t instanceof Qt?function(n,s){return s instanceof Qt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&hm(r,s.filters[o]),!0):!1}(t,e):void Y()}function dm(t){return t instanceof Oe?function(e){return`${e.field.canonicalString()} ${e.op} ${Qs(e.value)}`}(t):t instanceof Qt?function(e){return e.op.toString()+" {"+e.getFilters().map(dm).join(" ,")+"}"}(t):"Filter"}class cT extends Oe{constructor(e,n,s){super(e,n,s),this.key=z.fromName(s.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class uT extends Oe{constructor(e,n){super(e,"in",n),this.keys=fm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hT extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=fm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>z.fromName(s.referenceValue))}class dT extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&or(n.arrayValue,this.value)}}class fT extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&or(this.value.arrayValue,n)}}class pT extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!or(this.value.arrayValue,n)}}class gT extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>or(this.value.arrayValue,s))}}/**
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
 */class mT{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Pd(t,e=null,n=[],s=[],i=null,r=null,o=null){return new mT(t,e,n,s,i,r,o)}function du(t){const e=Z(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Wl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),_a(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qs(s)).join(",")),e.dt=n}return e.dt}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dd(t.startAt,e.startAt)&&Dd(t.endAt,e.endAt)}function Gl(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class wa{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function yT(t,e,n,s,i,r,o,a){return new wa(t,e,n,s,i,r,o,a)}function pu(t){return new wa(t)}function Nd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function _T(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function wT(t){return t.collectionGroup!==null}function xs(t){const e=Z(t);if(e.wt===null){e.wt=[];const n=_T(e),s=vT(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new xi(n)),e.wt.push(new xi(et.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new xi(et.keyField(),r))}}}return e.wt}function an(t){const e=Z(t);if(!e._t)if(e.limitType==="F")e._t=Pd(e.path,e.collectionGroup,xs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of xs(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new xi(r.field,o))}const s=e.endAt?new Mo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Mo(e.startAt.position,e.startAt.inclusive):null;e._t=Pd(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function Ql(t,e,n){return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ba(t,e){return fu(an(t),an(e))&&t.limitType===e.limitType}function pm(t){return`${du(an(t))}|lt:${t.limitType}`}function Yl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>dm(s)).join(", ")}]`),_a(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qs(s)).join(",")),`Target(${n})`}(an(t))}; limitType=${t.limitType})`}function Ea(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of xs(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Rd(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,xs(n),s)||n.endAt&&!function(i,r,o){const a=Rd(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,xs(n),s))}(t,e)}function bT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gm(t){return(e,n)=>{let s=!1;for(const i of xs(t)){const r=ET(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function ET(t,e,n){const s=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Gs(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
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
 */class ui{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ds(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return rm(this.inner)}size(){return this.innerSize}}/**
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
 */const IT=new Se(z.comparator);function ln(){return IT}const mm=new Se(z.comparator);function Ti(...t){let e=mm;for(const n of t)e=e.insert(n.key,n);return e}function ym(t){let e=mm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Jn(){return Mi()}function vm(){return Mi()}function Mi(){return new ui(t=>t.toString(),(t,e)=>t.isEqual(e))}const TT=new Se(z.comparator),CT=new it(z.comparator);function se(...t){let e=CT;for(const n of t)e=e.add(n);return e}const ST=new it(ce);function AT(){return ST}/**
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
 */function _m(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function wm(t){return{integerValue:""+t}}function kT(t,e){return sT(e)?wm(e):_m(t,e)}/**
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
 */class Ia{constructor(){this._=void 0}}function RT(t,e,n){return t instanceof Lo?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&cu(i)&&(i=uu(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ar?Em(t,e):t instanceof lr?Im(t,e):function(s,i){const r=bm(s,i),o=Od(r)+Od(s.gt);return Kl(r)&&Kl(s.gt)?wm(o):_m(s.serializer,o)}(t,e)}function DT(t,e,n){return t instanceof ar?Em(t,e):t instanceof lr?Im(t,e):n}function bm(t,e){return t instanceof Uo?Kl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Lo extends Ia{}class ar extends Ia{constructor(e){super(),this.elements=e}}function Em(t,e){const n=Tm(e);for(const s of t.elements)n.some(i=>Gt(i,s))||n.push(s);return{arrayValue:{values:n}}}class lr extends Ia{constructor(e){super(),this.elements=e}}function Im(t,e){let n=Tm(e);for(const s of t.elements)n=n.filter(i=>!Gt(i,s));return{arrayValue:{values:n}}}class Uo extends Ia{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Od(t){return Pe(t.integerValue||t.doubleValue)}function Tm(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function PT(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ar&&s instanceof ar||n instanceof lr&&s instanceof lr?Ws(n.elements,s.elements,Gt):n instanceof Uo&&s instanceof Uo?Gt(n.gt,s.gt):n instanceof Lo&&s instanceof Lo}(t.transform,e.transform)}class NT{constructor(e,n){this.version=e,this.transformResults=n}}class Rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ta{}function Cm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Am(t.key,Rt.none()):new Rr(t.key,t.data,Rt.none());{const n=t.data,s=ht.empty();let i=new it(et.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Bn(t.key,s,new vt(i.toArray()),Rt.none())}}function OT(t,e,n){t instanceof Rr?function(s,i,r){const o=s.value.clone(),a=Md(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Bn?function(s,i,r){if(!lo(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Md(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Sm(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Li(t,e,n,s){return t instanceof Rr?function(i,r,o,a){if(!lo(i.precondition,r))return o;const l=i.value.clone(),c=Ld(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Bn?function(i,r,o,a){if(!lo(i.precondition,r))return o;const l=Ld(i.fieldTransforms,a,r),c=r.data;return c.setAll(Sm(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return lo(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function xT(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=bm(s.transform,i||null);r!=null&&(n===null&&(n=ht.empty()),n.set(s.field,r))}return n||null}function xd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ws(n,s,(i,r)=>PT(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Rr extends Ta{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bn extends Ta{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Sm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Md(t,e,n){const s=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,DT(o,a,n[i]))}return s}function Ld(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,RT(r,o,e))}return s}class Am extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MT extends Ta{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LT{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&OT(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Li(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Li(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=vm();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Cm(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,s)=>xd(n,s))&&Ws(this.baseMutations,e.baseMutations,(n,s)=>xd(n,s))}}class gu{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ee(e.mutations.length===s.length);let i=TT;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new gu(e,n,s,i)}}/**
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
 */class UT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FT{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,ie;function $T(t){switch(t){default:return Y();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function km(t){if(t===void 0)return on("GRPC error has no .code"),T.UNKNOWN;switch(t){case De.OK:return T.OK;case De.CANCELLED:return T.CANCELLED;case De.UNKNOWN:return T.UNKNOWN;case De.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case De.INTERNAL:return T.INTERNAL;case De.UNAVAILABLE:return T.UNAVAILABLE;case De.UNAUTHENTICATED:return T.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case De.NOT_FOUND:return T.NOT_FOUND;case De.ALREADY_EXISTS:return T.ALREADY_EXISTS;case De.PERMISSION_DENIED:return T.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case De.ABORTED:return T.ABORTED;case De.OUT_OF_RANGE:return T.OUT_OF_RANGE;case De.UNIMPLEMENTED:return T.UNIMPLEMENTED;case De.DATA_LOSS:return T.DATA_LOSS;default:return Y()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class mu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Qr}static getOrCreateInstance(){return Qr===null&&(Qr=new mu),Qr}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Qr=null;/**
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
 */function BT(){return new TextEncoder}/**
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
 */const VT=new Os([4294967295,4294967295],0);function Ud(t){const e=BT().encode(t),n=new jI;return n.update(e),new Uint8Array(n.digest())}function Fd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Os([n,s],0),new Os([i,r],0)]}class yu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ci(`Invalid padding: ${n}`);if(s<0)throw new Ci(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ci(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ci(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Os.fromNumber(this.It)}Et(e,n,s){let i=e.add(n.multiply(Os.fromNumber(s)));return i.compare(VT)===1&&(i=new Os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Ud(e),[s,i]=Fd(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new yu(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Ud(e),[s,i]=Fd(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ca{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Dr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ca(X.min(),i,new Se(ce),ln(),se())}}class Dr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Dr(s,n,se(),se(),se())}}/**
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
 */class co{constructor(e,n,s,i){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=i}}class Rm{constructor(e,n){this.targetId=e,this.Vt=n}}class Dm{constructor(e,n,s=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class $d{constructor(){this.St=0,this.Dt=Vd(),this.Ct=ot.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=se(),n=se(),s=se();return this.Dt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Y()}}),new Dr(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Vd()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class jT{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=ln(),this.zt=Bd(),this.Wt=new Se(ce)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,i)=>{this.te(i)&&n(i)})}ne(e){var n;const s=e.targetId,i=e.Vt.count,r=this.se(s);if(r){const o=r.target;if(Gl(o))if(i===0){const a=new z(o.path);this.Yt(s,a,Xe.newNoDocument(a,X.min()))}else Ee(i===1);else{const a=this.ie(s);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(s);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(n=mu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,u,d){var f,m,w,E,A,N;const x={localCacheCount:u,existenceFilterCount:d.count},K=d.unchangedNames;return K&&(x.bloomFilter={applied:c===0,hashCount:(f=K==null?void 0:K.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(E=(w=(m=K==null?void 0:K.bits)===null||m===void 0?void 0:m.bitmap)===null||w===void 0?void 0:w.length)!==null&&E!==void 0?E:0,padding:(N=(A=K==null?void 0:K.bits)===null||A===void 0?void 0:A.padding)!==null&&N!==void 0?N:0}),x}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:i}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=ls(r).toUint8Array()}catch(u){if(u instanceof om)return Ks("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{c=new yu(l,o,a)}catch(u){return Ks(u instanceof Ci?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return c.It===0?1:i!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(e,r,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&Gl(a.target)){const l=new z(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Xe.newNoDocument(l,e))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let s=se();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const i=new Ca(e,n,this.Wt,this.jt,s);return this.jt=ln(),this.zt=Bd(),this.Wt=new Se(ce),i}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new $d,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new it(ce),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new $d),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Bd(){return new Se(z.comparator)}function Vd(){return new Se(z.comparator)}const HT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zT=(()=>({and:"AND",or:"OR"}))();class KT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jl(t,e){return t.useProto3Json||_a(e)?e:{value:e}}function Fo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WT(t,e){return Fo(t,e.toTimestamp())}function zt(t){return Ee(!!t),X.fromTimestamp(function(e){const n=Mn(e);return new xe(n.seconds,n.nanos)}(t))}function vu(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Nm(t){const e=Te.fromString(t);return Ee(Lm(e)),e}function Xl(t,e){return vu(t.databaseId,e.path)}function rl(t,e){const n=Nm(e);if(n.get(1)!==t.databaseId.projectId)throw new q(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(Om(n))}function Zl(t,e){return vu(t.databaseId,e)}function GT(t){const e=Nm(t);return e.length===4?Te.emptyPath():Om(e)}function ec(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Om(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jd(t,e,n){return{name:Xl(t,e),fields:n.value.mapValue.fields}}function QT(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(Ee(c===void 0||typeof c=="string"),ot.fromBase64String(c||"")):(Ee(c===void 0||c instanceof Uint8Array),ot.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?T.UNKNOWN:km(l.code);return new q(c,l.message||"")}(o);n=new Dm(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=rl(t,s.document.name),r=zt(s.document.updateTime),o=s.document.createTime?zt(s.document.createTime):X.min(),a=new ht({mapValue:{fields:s.document.fields}}),l=Xe.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new co(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=rl(t,s.document),r=s.readTime?zt(s.readTime):X.min(),o=Xe.newNoDocument(i,r),a=s.removedTargetIds||[];n=new co([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=rl(t,s.document),r=s.removedTargetIds||[];n=new co([],r,i,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new FT(i,r),a=s.targetId;n=new Rm(a,o)}}return n}function YT(t,e){let n;if(e instanceof Rr)n={update:jd(t,e.key,e.value)};else if(e instanceof Am)n={delete:Xl(t,e.key)};else if(e instanceof Bn)n={update:jd(t,e.key,e.data),updateMask:rC(e.fieldMask)};else{if(!(e instanceof MT))return Y();n={verify:Xl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Lo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ar)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof lr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Uo)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:WT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function JT(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?zt(s.updateTime):zt(i);return r.isEqual(X.min())&&(r=zt(i)),new NT(r,s.transformResults||[])}(n,e))):[]}function XT(t,e){return{documents:[Zl(t,e.path)]}}function ZT(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Zl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Mm(Qt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:bs(u.field),direction:nC(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Jl(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function eC(t){let e=GT(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ee(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const d=xm(u);return d instanceof Qt&&um(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new xi(Es(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,_a(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,f=u.values||[];return new Mo(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,f=u.values||[];return new Mo(f,d)}(n.endAt)),yT(e,i,o,r,a,"F",l,c)}function tC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Es(e.unaryFilter.field);return Oe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Es(e.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Es(e.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Es(e.unaryFilter.field);return Oe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return Oe.create(Es(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Qt.create(e.compositeFilter.filters.map(n=>xm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function nC(t){return HT[t]}function sC(t){return qT[t]}function iC(t){return zT[t]}function bs(t){return{fieldPath:t.canonicalString()}}function Es(t){return et.fromServerFormat(t.fieldPath)}function Mm(t){return t instanceof Oe?function(e){if(e.op==="=="){if(kd(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NAN"}};if(Ad(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(kd(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NOT_NAN"}};if(Ad(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(e.field),op:sC(e.op),value:e.value}}}(t):t instanceof Qt?function(e){const n=e.getFilters().map(s=>Mm(s));return n.length===1?n[0]:{compositeFilter:{op:iC(e.op),filters:n}}}(t):Y()}function rC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Lm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Tn{constructor(e,n,s,i,r=X.min(),o=X.min(),a=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class oC{constructor(e){this.fe=e}}function aC(t){const e=eC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ql(e,e.limit,"L"):e}/**
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
 */class lC{constructor(){this.rn=new cC}addToCollectionParentIndex(e,n){return this.rn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(xn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class cC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new it(Te.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new it(Te.comparator)).toArray()}}/**
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
 */class Ys{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ys(0)}static Mn(){return new Ys(-1)}}/**
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
 */class uC{constructor(){this.changes=new ui(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class dC{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Li(s.mutation,i,vt.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const i=Jn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Ti();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Jn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=ln();const o=Mi(),a=Mi();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Bn)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Li(u.mutation,c,u.mutation.getFieldMask(),xe.now())):o.set(c.key,vt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new hC(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Mi();let i=new Se((o,a)=>o-a),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||vt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const d=(i.get(a.batchId)||se()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=vm();u.forEach(f=>{if(!r.has(f)){const m=Cm(n.get(f),s.get(f));m!==null&&d.set(f,m),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):S.resolve(Jn());let a=-1,l=r;return o.next(c=>S.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,se())).next(u=>({batchId:a,changes:ym(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(s=>{let i=Ti();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Ti();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(c,u){return new wa(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Xe.newInvalidDocument(c)))});let o=Ti();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Li(c.mutation,l,vt.empty(),xe.now()),Ea(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class fC{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return S.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:zt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:aC(s.bundledQuery),readTime:zt(s.readTime)}}(n)),S.resolve()}}/**
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
 */class pC{constructor(){this.overlays=new Se(z.comparator),this.ls=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Jn();return S.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.we(e,n,r)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const i=Jn(),r=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Se((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Jn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Jn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return S.resolve(a)}we(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new UT(n,s));let r=this.ls.get(n);r===void 0&&(r=se(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
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
 */class _u{constructor(){this.fs=new it(Ue.ds),this.ws=new it(Ue._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Ue(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Ue(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new z(new Te([])),s=new Ue(n,e),i=new Ue(n,e+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new z(new Te([])),s=new Ue(n,e),i=new Ue(n,e+1);let r=se();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ue(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ue{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return z.comparator(e.key,n.key)||ce(e.As,n.As)}static _s(e,n){return ce(e.As,n.As)||z.comparator(e.key,n.key)}}/**
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
 */class gC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new it(Ue.ds)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LT(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ue(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return S.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),S.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new it(ce);return n.forEach(i=>{const r=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),S.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;z.isDocumentKey(r)||(r=r.child(""));const o=new Ue(new z(r),0);let a=new it(ce);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.As)),!0)},o),S.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return S.forEach(n.mutations,i=>{const r=new Ue(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Ue(n,0),i=this.Rs.firstAfterOrEqual(s);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class mC{constructor(e){this.Ds=e,this.docs=new Se(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let s=ln();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Xe.newInvalidDocument(i))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=ln();const o=n.path,a=new z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||eT(ZI(u),s)<=0||(i.has(u.key)||Ea(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return S.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Y()}Cs(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new yC(this)}getSize(e){return S.resolve(this.size)}}class yC extends uC{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class vC{constructor(e){this.persistence=e,this.xs=new ui(n=>du(n),fu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Ns=0,this.ks=new _u,this.targetCount=0,this.Ms=Ys.kn()}forEachTarget(e,n){return this.xs.forEach((s,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),S.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Fn(n),S.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(r).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.ks.containsKey(n))}}/**
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
 */class _C{constructor(e,n){this.$s={},this.overlays={},this.Os=new lu(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new vC(this),this.indexManager=new lC,this.remoteDocumentCache=function(s){return new mC(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new oC(n),this.qs=new fC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new gC(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const i=new wC(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(e,n){return S.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class wC extends nT{constructor(e){super(),this.currentSequenceNumber=e}}class wu{constructor(e){this.persistence=e,this.Qs=new _u,this.js=null}static zs(e){return new wu(e)}get Ws(){if(this.js)return this.js;throw Y()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),S.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ws,s=>{const i=z.fromPath(s);return this.Hs(e,i).next(r=>{r||n.removeEntry(i,X.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return S.or([()=>S.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class bu{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(e,n){let s=se(),i=se();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new bu(e,n.fromCache,s,i)}}/**
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
 */class bC{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ki(e,n).next(r=>r||this.Gi(e,n,i,s)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(Nd(n))return S.resolve(null);let s=an(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ql(n,null,"F"),s=an(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=se(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,Ql(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,s,i){return Nd(n)||i.isEqual(X.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(e,n):(Id()<=le.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yl(n)),this.Wi(e,o,n,XI(i,-1)))})}ji(e,n){let s=new it(gm(e));return n.forEach((i,r)=>{Ea(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(e,n){return Id()<=le.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Yl(n)),this.Ui.getDocumentsMatchingQuery(e,n,xn.min())}Wi(e,n,s,i){return this.Ui.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class EC{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Se(ce),this.Yi=new ui(r=>du(r),fu),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dC(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function IC(t,e,n,s){return new EC(t,e,n,s)}async function Um(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=se();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function TC(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,d=u.keys();let f=S.resolve();return d.forEach(m=>{f=f.next(()=>c.getEntry(a,m)).next(w=>{const E=l.docVersions.get(m);Ee(E!==null),w.version.compareTo(E)<0&&(u.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),c.addEntry(w)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Fm(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function CC(t,e){const n=Z(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,d)=>{const f=i.get(d);if(!f)return;a.push(n.Bs.removeMatchingKeys(r,u.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(r,u.addedDocuments,d)));let m=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(ot.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),i=i.insert(d,m),function(w,E,A){return w.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(f,m,u)&&a.push(n.Bs.updateTargetData(r,m))});let l=ln(),c=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(SC(r,o,e.documentUpdates).next(u=>{l=u.nr,c=u.sr})),!s.isEqual(X.min())){const u=n.Bs.getLastRemoteSnapshotVersion(r).next(d=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=i,r))}function SC(t,e,n){let s=se(),i=se();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=ln();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:i}})}function AC(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function kC(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Bs.getTargetData(s,e).next(r=>r?(i=r,S.resolve(i)):n.Bs.allocateTargetId(s).next(o=>(i=new Tn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function tc(t,e,n){const s=Z(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!kr(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Hd(t,e,n){const s=Z(t);let i=X.min(),r=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=Z(a),d=u.Yi.get(c);return d!==void 0?S.resolve(u.Ji.get(d)):u.Bs.getTargetData(l,c)}(s,o,an(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?r:se())).next(a=>(RC(s,bT(e),a),{documents:a,ir:r})))}function RC(t,e,n){let s=t.Xi.get(e)||X.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Xi.set(e,s)}class qd{constructor(){this.activeTargetIds=AT()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DC{constructor(){this.Hr=new qd,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new qd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PC{Yr(e){}shutdown(){}}/**
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
 */class zd{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yr=null;function ol(){return Yr===null?Yr=268435456+Math.round(2147483648*Math.random()):Yr++,"0x"+Yr.toString(16)}/**
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
 */const NC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class OC{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ye="WebChannelConnection";class xC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,i,r){const o=ol(),a=this.To(e,n);B("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const l={};return this.Eo(l,i,r),this.Ao(e,a,l,s).then(c=>(B("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Ks("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(e,n,s,i,r,o){return this.Io(e,n,s,i,r)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ci,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}To(e,n){const s=NC[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,i){const r=ol();return new Promise((o,a)=>{const l=new VI;l.setWithCredentials(!0),l.listenOnce(FI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case il.NO_ERROR:const u=l.getResponseJson();B(Ye,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case il.TIMEOUT:B(Ye,`RPC '${e}' ${r} timed out`),a(new q(T.DEADLINE_EXCEEDED,"Request time out"));break;case il.HTTP_ERROR:const d=l.getStatus();if(B(Ye,`RPC '${e}' ${r} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const w=function(E){const A=E.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(A)>=0?A:T.UNKNOWN}(m.status);a(new q(w,m.message))}else a(new q(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(T.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{B(Ye,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);B(Ye,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}Ro(e,n,s){const i=ol(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=LI(),a=UI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new BI({})),this.Eo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");B(Ye,`Creating RPC '${e}' stream ${i}: ${u}`,l);const d=o.createWebChannel(u,l);let f=!1,m=!1;const w=new OC({ro:A=>{m?B(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(f||(B(Ye,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),B(Ye,`RPC '${e}' stream ${i} sending:`,A),d.send(A))},oo:()=>d.close()}),E=(A,N,x)=>{A.listen(N,K=>{try{x(K)}catch(F){setTimeout(()=>{throw F},0)}})};return E(d,Kr.EventType.OPEN,()=>{m||B(Ye,`RPC '${e}' stream ${i} transport opened.`)}),E(d,Kr.EventType.CLOSE,()=>{m||(m=!0,B(Ye,`RPC '${e}' stream ${i} transport closed`),w.wo())}),E(d,Kr.EventType.ERROR,A=>{m||(m=!0,Ks(Ye,`RPC '${e}' stream ${i} transport errored:`,A),w.wo(new q(T.UNAVAILABLE,"The operation could not be completed")))}),E(d,Kr.EventType.MESSAGE,A=>{var N;if(!m){const x=A.data[0];Ee(!!x);const K=x,F=K.error||((N=K[0])===null||N===void 0?void 0:N.error);if(F){B(Ye,`RPC '${e}' stream ${i} received error:`,F);const Ie=F.status;let Ce=function(pt){const gt=De[pt];if(gt!==void 0)return km(gt)}(Ie),Ge=F.message;Ce===void 0&&(Ce=T.INTERNAL,Ge="Unknown error status: "+Ie+" with message "+F.message),m=!0,w.wo(new q(Ce,Ge)),d.close()}else B(Ye,`RPC '${e}' stream ${i} received:`,x),w._o(x)}}),E(a,$I.STAT_EVENT,A=>{A.stat===bd.PROXY?B(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===bd.NOPROXY&&B(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}function al(){return typeof document<"u"?document:null}/**
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
 */function Sa(t){return new KT(t,!0)}/**
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
 */class $m{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Bm{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new $m(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{e(()=>{const i=new q(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MC extends Bm{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=QT(this.serializer,e),s=function(i){if(!("targetChange"in i))return X.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?X.min():r.readTime?zt(r.readTime):X.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=ec(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=Gl(a)?{documents:XT(i,a)}:{query:ZT(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Pm(i,r.resumeToken);const l=Jl(i,r.expectedCount);l!==null&&(o.expectedCount=l)}else if(r.snapshotVersion.compareTo(X.min())>0){o.readTime=Fo(i,r.snapshotVersion.toTimestamp());const l=Jl(i,r.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const s=tC(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=ec(this.serializer),n.removeTarget=e,this.Wo(n)}}class LC extends Bm{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=JT(e.writeResults,e.commitTime),s=zt(e.commitTime);return this.listener.cu(s,n)}return Ee(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ec(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>YT(this.serializer,s))};this.Wo(n)}}/**
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
 */class UC extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new q(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(T.UNKNOWN,i.toString())})}vo(e,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(T.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class FC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(on(n),this.mu=!1):B("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class $C{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{fs(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Z(a);l.vu.add(4),await Pr(l),l.bu.set("Unknown"),l.vu.delete(4),await Aa(l)}(this))})}),this.bu=new FC(s,i)}}async function Aa(t){if(fs(t))for(const e of t.Ru)await e(!0)}async function Pr(t){for(const e of t.Ru)await e(!1)}function Vm(t,e){const n=Z(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Tu(n)?Iu(n):hi(n).Ko()&&Eu(n,e))}function jm(t,e){const n=Z(t),s=hi(n);n.Au.delete(e),s.Ko()&&Hm(n,e),n.Au.size===0&&(s.Ko()?s.jo():fs(n)&&n.bu.set("Unknown"))}function Eu(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hi(t).su(e)}function Hm(t,e){t.Vu.qt(e),hi(t).iu(e)}function Iu(t){t.Vu=new jT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),hi(t).start(),t.bu.gu()}function Tu(t){return fs(t)&&!hi(t).Uo()&&t.Au.size>0}function fs(t){return Z(t).vu.size===0}function qm(t){t.Vu=void 0}async function BC(t){t.Au.forEach((e,n)=>{Eu(t,e)})}async function VC(t,e){qm(t),Tu(t)?(t.bu.Iu(e),Iu(t)):t.bu.set("Unknown")}async function jC(t,e,n){if(t.bu.set("Online"),e instanceof Dm&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $o(t,s)}else if(e instanceof co?t.Vu.Ht(e):e instanceof Rm?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(X.min()))try{const s=await Fm(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.Au.get(l);c&&i.Au.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,l)=>{const c=i.Au.get(a);if(!c)return;i.Au.set(a,c.withResumeToken(ot.EMPTY_BYTE_STRING,c.snapshotVersion)),Hm(i,a);const u=new Tn(c.target,a,l,c.sequenceNumber);Eu(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await $o(t,s)}}async function $o(t,e,n){if(!kr(e))throw e;t.vu.add(1),await Pr(t),t.bu.set("Offline"),n||(n=()=>Fm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Aa(t)})}function zm(t,e){return e().catch(n=>$o(t,n,e))}async function ka(t){const e=Z(t),n=Ln(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;HC(e);)try{const i=await AC(e.localStore,s);if(i===null){e.Eu.length===0&&n.jo();break}s=i.batchId,qC(e,i)}catch(i){await $o(e,i)}Km(e)&&Wm(e)}function HC(t){return fs(t)&&t.Eu.length<10}function qC(t,e){t.Eu.push(e);const n=Ln(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Km(t){return fs(t)&&!Ln(t).Uo()&&t.Eu.length>0}function Wm(t){Ln(t).start()}async function zC(t){Ln(t).hu()}async function KC(t){const e=Ln(t);for(const n of t.Eu)e.uu(n.mutations)}async function WC(t,e,n){const s=t.Eu.shift(),i=gu.from(s,e,n);await zm(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ka(t)}async function GC(t,e){e&&Ln(t).ou&&await async function(n,s){if(i=s.code,$T(i)&&i!==T.ABORTED){const r=n.Eu.shift();Ln(n).Qo(),await zm(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ka(n)}var i}(t,e),Km(t)&&Wm(t)}async function Kd(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=fs(n);n.vu.add(3),await Pr(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Aa(n)}async function QC(t,e){const n=Z(t);e?(n.vu.delete(2),await Aa(n)):e||(n.vu.add(2),await Pr(n),n.bu.set("Unknown"))}function hi(t){return t.Su||(t.Su=function(e,n,s){const i=Z(e);return i.fu(),new MC(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:BC.bind(null,t),ao:VC.bind(null,t),nu:jC.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Tu(t)?Iu(t):t.bu.set("Unknown")):(await t.Su.stop(),qm(t))})),t.Su}function Ln(t){return t.Du||(t.Du=function(e,n,s){const i=Z(e);return i.fu(),new LC(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:zC.bind(null,t),ao:GC.bind(null,t),au:KC.bind(null,t),cu:WC.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await ka(t)):(await t.Du.stop(),t.Eu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Cu{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Cu(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Su(t,e){if(on("AsyncQueue",`${e}: ${t}`),kr(t))return new q(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ms{constructor(e){this.comparator=e?(n,s)=>e(n,s)||z.comparator(n.key,s.key):(n,s)=>z.comparator(n.key,s.key),this.keyedMap=Ti(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ms;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Wd{constructor(){this.Cu=new Se(z.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):Y():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Js{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Js(e,n,Ms.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ba(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class YC{constructor(){this.Nu=void 0,this.listeners=[]}}class JC{constructor(){this.queries=new ui(e=>pm(e),ba),this.onlineState="Unknown",this.ku=new Set}}async function XC(t,e){const n=Z(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new YC),i)try{r.Nu=await n.onListen(s)}catch(o){const a=Su(o,`Initialization of query '${Yl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&Au(n)}async function ZC(t,e){const n=Z(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function eS(t,e){const n=Z(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&Au(n)}function tS(t,e,n){const s=Z(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Au(t){t.ku.forEach(e=>{e.next()})}class nS{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Js(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class Gm{constructor(e){this.key=e}}class Qm{constructor(e){this.key=e}}class sS{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=se(),this.mutatedKeys=se(),this.tc=gm(e),this.ec=new Ms(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Wd,i=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,d)=>{const f=i.get(u),m=Ea(this.query,d)?d:null,w=!!f&&this.mutatedKeys.has(f.key),E=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let A=!1;f&&m?f.data.isEqual(m.data)?w!==E&&(s.track({type:3,doc:m}),A=!0):this.rc(f,m)||(s.track({type:2,doc:m}),A=!0,(l&&this.tc(m,l)>0||c&&this.tc(m,c)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),A=!0):f&&!m&&(s.track({type:1,doc:f}),A=!0,(l||c)&&(a=!0)),A&&(m?(o=o.add(m),r=E?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((c,u)=>function(d,f){const m=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return m(d)-m(f)}(c.type,u.type)||this.tc(c.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,r.length!==0||l?{snapshot:new Js(this.query,e.ec,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Wd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=se(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new Qm(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new Gm(s))}),n}hc(e){this.Yu=e.ir,this.Zu=se();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Js.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class iS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class rS{constructor(e){this.key=e,this.fc=!1}}class oS{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ui(a=>pm(a),ba),this._c=new Map,this.mc=new Set,this.gc=new Se(z.comparator),this.yc=new Map,this.Ic=new _u,this.Tc={},this.Ec=new Map,this.Ac=Ys.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function aS(t,e){const n=yS(t);let s,i;const r=n.wc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await kC(n.localStore,an(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await lS(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Vm(n.remoteStore,o)}return i}async function lS(t,e,n,s,i){t.Rc=(d,f,m)=>async function(w,E,A,N){let x=E.view.sc(A);x.zi&&(x=await Hd(w.localStore,E.query,!1).then(({documents:Ie})=>E.view.sc(Ie,x)));const K=N&&N.targetChanges.get(E.targetId),F=E.view.applyChanges(x,w.isPrimaryClient,K);return Qd(w,E.targetId,F.cc),F.snapshot}(t,d,f,m);const r=await Hd(t.localStore,e,!0),o=new sS(e,r.ir),a=o.sc(r.documents),l=Dr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Qd(t,n,c.cc);const u=new iS(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function cS(t,e){const n=Z(t),s=n.wc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!ba(r,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await tc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),jm(n.remoteStore,s.targetId),nc(n,s.targetId)}).catch(Ar)):(nc(n,s.targetId),await tc(n.localStore,s.targetId,!0))}async function uS(t,e,n){const s=vS(t);try{const i=await function(r,o){const a=Z(r),l=xe.now(),c=o.reduce((f,m)=>f.add(m.key),se());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=ln(),w=se();return a.Zi.getEntries(f,c).next(E=>{m=E,m.forEach((A,N)=>{N.isValidDocument()||(w=w.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(E=>{u=E;const A=[];for(const N of o){const x=xT(N,u.get(N.key).overlayedDocument);x!=null&&A.push(new Bn(N.key,x,am(x.value.mapValue),Rt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,A,o)}).next(E=>{d=E;const A=E.applyToLocalDocumentSet(u,w);return a.documentOverlayCache.saveOverlays(f,E.batchId,A)})}).then(()=>({batchId:d.batchId,changes:ym(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.Tc[r.currentUser.toKey()];l||(l=new Se(ce)),l=l.insert(o,a),r.Tc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Nr(s,i.changes),await ka(s.remoteStore)}catch(i){const r=Su(i,"Failed to persist write");n.reject(r)}}async function Ym(t,e){const n=Z(t);try{const s=await CC(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.yc.get(r);o&&(Ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?Ee(o.fc):i.removedDocuments.size>0&&(Ee(o.fc),o.fc=!1))}),await Nr(n,s,e)}catch(s){await Ar(s)}}function Gd(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=Z(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.Mu(o)&&(l=!0)}),l&&Au(a)}(s.eventManager,e),i.length&&s.dc.nu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hS(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.yc.get(e),r=i&&i.key;if(r){let o=new Se(z.comparator);o=o.insert(r,Xe.newNoDocument(r,X.min()));const a=se().add(r),l=new Ca(X.min(),new Map,new Se(ce),o,a);await Ym(s,l),s.gc=s.gc.remove(r),s.yc.delete(e),ku(s)}else await tc(s.localStore,e,!1).then(()=>nc(s,e,n)).catch(Ar)}async function dS(t,e){const n=Z(t),s=e.batch.batchId;try{const i=await TC(n.localStore,e);Xm(n,s,null),Jm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Nr(n,i)}catch(i){await Ar(i)}}async function fS(t,e,n){const s=Z(t);try{const i=await function(r,o){const a=Z(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Ee(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Xm(s,e,n),Jm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Nr(s,i)}catch(i){await Ar(i)}}function Jm(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Xm(t,e,n){const s=Z(t);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Tc[s.currentUser.toKey()]=i}}function nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||Zm(t,s)})}function Zm(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(jm(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),ku(t))}function Qd(t,e,n){for(const s of n)s instanceof Gm?(t.Ic.addReference(s.key,e),pS(t,s)):s instanceof Qm?(B("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Zm(t,s.key)):Y()}function pS(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(B("SyncEngine","New document in limbo: "+n),t.mc.add(s),ku(t))}function ku(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new z(Te.fromString(e)),s=t.Ac.next();t.yc.set(s,new rS(n)),t.gc=t.gc.insert(n,s),Vm(t.remoteStore,new Tn(an(pu(n.path)),s,"TargetPurposeLimboResolution",lu.ct))}}async function Nr(t,e,n){const s=Z(t),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,l)=>{o.push(s.Rc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=bu.Li(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,l){const c=Z(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(l,d=>S.forEach(d.Fi,f=>c.persistence.referenceDelegate.addReference(u,d.targetId,f)).next(()=>S.forEach(d.Bi,f=>c.persistence.referenceDelegate.removeReference(u,d.targetId,f)))))}catch(u){if(!kr(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const f=c.Ji.get(d),m=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(m);c.Ji=c.Ji.insert(d,w)}}}(s.localStore,r))}async function gS(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await Um(n.localStore,e);n.currentUser=e,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new q(T.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Nr(n,s.er)}}function mS(t,e){const n=Z(t),s=n.yc.get(e);if(s&&s.fc)return se().add(s.key);{let i=se();const r=n._c.get(e);if(!r)return i;for(const o of r){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function yS(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ym.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hS.bind(null,e),e.dc.nu=eS.bind(null,e.eventManager),e.dc.Pc=tS.bind(null,e.eventManager),e}function vS(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fS.bind(null,e),e}class Yd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return IC(this.persistence,new bC,e.initialUser,this.serializer)}createPersistence(e){return new _C(wu.zs,this.serializer)}createSharedClientState(e){return new DC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _S{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Gd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gS.bind(null,this.syncEngine),await QC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new JC}createDatastore(e){const n=Sa(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new xC(i));var i;return function(r,o,a,l){return new UC(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Gd(this.syncEngine,a,0),o=zd.D()?new zd:new PC,new $C(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new oS(s,i,r,o,a,l);return c&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);B("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Pr(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class wS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class bS{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=im.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{B("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(B("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Su(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ll(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Um(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IS(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Kd(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Kd(e.remoteStore,r)),t._onlineComponents=e}function ES(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function IS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ES(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await ll(t,new Yd)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await ll(t,new Yd);return t._offlineComponents}async function ey(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Jd(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Jd(t,new _S))),t._onlineComponents}function TS(t){return ey(t).then(e=>e.syncEngine)}async function CS(t){const e=await ey(t),n=e.eventManager;return n.onListen=aS.bind(null,e.syncEngine),n.onUnlisten=cS.bind(null,e.syncEngine),n}function SS(t,e,n={}){const s=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new wS({next:d=>{r.enqueueAndForget(()=>ZC(i,u));const f=d.docs.has(o);!f&&d.fromCache?l.reject(new q(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&a&&a.source==="server"?l.reject(new q(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new nS(pu(o.path),c,{includeMetadataChanges:!0,Ku:!0});return XC(i,u)}(await CS(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function ty(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Xd=new Map;/**
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
 */function ny(t,e,n){if(!n)throw new q(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AS(t,e,n,s){if(e===!0&&s===!0)throw new q(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zd(t){if(!z.isDocumentKey(t))throw new q(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ef(t){if(z.isDocumentKey(t))throw new q(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ru(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ru(t);throw new q(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class tf{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new q(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ty((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class Ra{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new HI;switch(n.type){case"firstParty":return new WI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xd.get(e);n&&(B("ComponentProvider","Removing Datastore"),Xd.delete(e),n.terminate())}(this),Promise.resolve()}}function kS(t,e,n,s={}){var i;const r=(t=Un(t,Ra))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=Je.MOCK_USER;else{a=cw(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new q(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Je(c)}t._authCredentials=new qI(new sm(a,l))}}/**
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
 */class dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class Du{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Du(this.firestore,e,this._query)}}class Pn extends Du{constructor(e,n,s){super(e,n,pu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new z(e))}withConverter(e){return new Pn(this.firestore,e,this._path)}}function RS(t,e,...n){if(t=Ke(t),ny("collection","path",e),t instanceof Ra){const s=Te.fromString(e,...n);return ef(s),new Pn(t,null,s)}{if(!(t instanceof dt||t instanceof Pn))throw new q(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Te.fromString(e,...n));return ef(s),new Pn(t.firestore,null,s)}}function cr(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=im.A()),ny("doc","path",e),t instanceof Ra){const s=Te.fromString(e,...n);return Zd(s),new dt(t,null,new z(s))}{if(!(t instanceof dt||t instanceof Pn))throw new q(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Te.fromString(e,...n));return Zd(s),new dt(t.firestore,t instanceof Pn?t.converter:null,new z(s))}}/**
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
 */class DS{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new $m(this,"async_queue_retry"),this.Xc=()=>{const n=al();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=al();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=al();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Dn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!kr(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw on("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Cu.createAndSchedule(this,e,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&Y()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Or extends Ra{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new DS,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iy(this),this._firestoreClient.terminate()}}function Da(t,e){const n=typeof t=="object"?t:_p(),s=typeof t=="string"?t:e||"(default)",i=Rc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=aw("firestore");r&&kS(i,...r)}return i}function sy(t){return t._firestoreClient||iy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function iy(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new rT(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ty(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new bS(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xs(ot.fromBase64String(e))}catch(n){throw new q(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xs(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pu{constructor(e){this._methodName=e}}/**
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
 */class Nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const PS=/^__.*__$/;class NS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Bn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Rr(e,this.data,n,this.fieldTransforms)}}class ry{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Bn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function oy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Ou{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Ou(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:s,la:!1});return i.fa(e),i}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:s,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Bo(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(oy(this.ca)&&PS.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class OS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Sa(e)}ya(e,n,s,i=!1){return new Ou({ca:e,methodName:n,ga:s,path:et.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xu(t){const e=t._freezeSettings(),n=Sa(t._databaseId);return new OS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ay(t,e,n,s,i,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,i);Mu("Data must be an object, but it was:",o,s);const a=ly(s,o);let l,c;if(r.merge)l=new vt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const f=sc(e,d,n);if(!o.contains(f))throw new q(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);uy(u,f)||u.push(f)}l=new vt(u),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new NS(new ht(a),l,c)}class Na extends Pu{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Na}}function xS(t,e,n,s){const i=t.ya(1,e,n);Mu("Data must be an object, but it was:",i,s);const r=[],o=ht.empty();ds(s,(l,c)=>{const u=Lu(e,l,n);c=Ke(c);const d=i.da(u);if(c instanceof Na)r.push(u);else{const f=Oa(c,d);f!=null&&(r.push(u),o.set(u,f))}});const a=new vt(r);return new ry(o,a,i.fieldTransforms)}function MS(t,e,n,s,i,r){const o=t.ya(1,e,n),a=[sc(e,s,n)],l=[i];if(r.length%2!=0)throw new q(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(sc(e,r[f])),l.push(r[f+1]);const c=[],u=ht.empty();for(let f=a.length-1;f>=0;--f)if(!uy(c,a[f])){const m=a[f];let w=l[f];w=Ke(w);const E=o.da(m);if(w instanceof Na)c.push(m);else{const A=Oa(w,E);A!=null&&(c.push(m),u.set(m,A))}}const d=new vt(c);return new ry(u,d,o.fieldTransforms)}function Oa(t,e){if(cy(t=Ke(t)))return Mu("Unsupported field value:",e,t),ly(t,e);if(t instanceof Pu)return function(n,s){if(!oy(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Oa(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Ke(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kT(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=xe.fromDate(n);return{timestampValue:Fo(s.serializer,i)}}if(n instanceof xe){const i=new xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fo(s.serializer,i)}}if(n instanceof Nu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xs)return{bytesValue:Pm(s.serializer,n._byteString)};if(n instanceof dt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Ru(n)}`)}(t,e)}function ly(t,e){const n={};return rm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ds(t,(s,i)=>{const r=Oa(i,e.ha(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Nu||t instanceof Xs||t instanceof dt||t instanceof Pu)}function Mu(t,e,n){if(!cy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ru(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function sc(t,e,n){if((e=Ke(e))instanceof Pa)return e._internalPath;if(typeof e=="string")return Lu(t,e);throw Bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const LS=new RegExp("[~\\*/\\[\\]]");function Lu(t,e,n){if(e.search(LS)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pa(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new q(T.INVALID_ARGUMENT,a+t+l)}function uy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class hy{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new US(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class US extends hy{data(){return super.data()}}function dy(t,e){return typeof e=="string"?Lu(t,e):e instanceof Pa?e._internalPath:e._delegate._internalPath}class FS{convertValue(e,n="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ds(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Nu(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=uu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ir(e));default:return null}}convertTimestamp(e){const n=Mn(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Te.fromString(e);Ee(Lm(s));const i=new rr(s.get(1),s.get(3)),r=new z(s.popFirst(5));return i.isEqual(n)||on(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function fy(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class $S{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class py extends hy{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new BS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(dy("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class BS extends py{data(e={}){return super.data(e)}}/**
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
 */function VS(t){t=Un(t,dt);const e=Un(t.firestore,Or);return SS(sy(e),t._key).then(n=>zS(e,t,n))}class jS extends FS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function gy(t,e,n){t=Un(t,dt);const s=Un(t.firestore,Or),i=fy(t.converter,e,n);return Uu(s,[ay(xu(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Rt.none())])}function HS(t,e,n,...s){t=Un(t,dt);const i=Un(t.firestore,Or),r=xu(i);let o;return o=typeof(e=Ke(e))=="string"||e instanceof Pa?MS(r,"updateDoc",t._key,e,n,s):xS(r,"updateDoc",t._key,e),Uu(i,[o.toMutation(t._key,Rt.exists(!0))])}function qS(t,e){const n=Un(t.firestore,Or),s=cr(t),i=fy(t.converter,e);return Uu(n,[ay(xu(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Rt.exists(!1))]).then(()=>s)}function Uu(t,e){return function(n,s){const i=new Dn;return n.asyncQueue.enqueueAndForget(async()=>uS(await TS(n),s,i)),i.promise}(sy(t),e)}function zS(t,e,n){const s=n.docs.get(e._key),i=new jS(t);return new py(t,i,e._key,s,new $S(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ci=n})(si),Hs(new ss("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Or(new zI(n.getProvider("auth-internal")),new QI(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Rn(Ed,"3.13.0",t),Rn(Ed,"3.13.0","esm2017")})();var KS="firebase",WS="9.23.0";/**
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
 */Rn(KS,WS,"app");const GS={apiKey:"AIzaSyDSFUoWNmdlw4OyCK89i5DCX1MvSkZyo6E",authDomain:"blood-bank-vue.firebaseapp.com",databaseURL:"https://blood-bank-vue-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"blood-bank-vue",storageBucket:"blood-bank-vue.appspot.com",messagingSenderId:"1005473572226",appId:"1:1005473572226:web:2c6519c0684db8307e1b9b"},my=vp(GS),nf=Da(my),Nn=ME(my),yy="/vitevue-project/assets/appicon-93e9f5f4.png";const We=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},QS={emits:["loggedIn"],data(){return{username:"",email:"",password:"",countryCode:"",phone:"",gender:"",dob:"",notification:"",imagePaths:{appicon:yy}}},methods:{signUp(){const t=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;if(this.password.length<=7||!t.test(this.password)){this.notification="The password must be more than 7 characters long and at least one punctuation such as @#$%.";return}yb(Nn,this.email,this.password).then(e=>{wb(e.user,{displayName:this.username}).then(()=>{const n={username:this.username,email:this.email,countryCode:this.countryCode,phone:this.phone,gender:this.gender,dob:this.dob},s=Da();gy(cr(s,"SignUpDetails",e.user.uid),n)}).then(()=>{this.$emit("loggedIn")})}).catch(e=>{switch(e.code){case"auth/email-already-in-use":this.notification="This email is already registered";break;case"auth/invalid-email":this.notification="This email address is not valid.";break;case"auth/operation-not-allowed":this.notification="Email/Password accounts are not enabled";break;case"auth/weak-password":this.notification="The password is too weak,please include at least punctuation.";break;default:console.log(e.message)}})}}},YS=["src"],JS=h("br",null,null,-1),XS=h("br",null,null,-1),ZS={class:"signupform"},eA=h("br",null,null,-1),tA=h("br",null,null,-1),nA=h("br",null,null,-1),sA={class:"phone-input"},iA=ni('<option value="+60">+60</option><option value="+65">+65</option><option value="+62">+62</option><option value="+880">+880</option><option value="+95">+95</option><option value="+977">+977</option><option value="+91">+91</option>',7),rA=[iA],oA={class:"text"},aA=h("span",{style:{"font-size":"15px"}},"DOB  ",-1),lA=h("br",null,null,-1),cA={style:{margin:"10px 0"}},uA=h("label",{for:"male",style:{"font-size":"14px"}}," Male",-1),hA=h("label",{for:"female",style:{"font-size":"14px"}}," Female",-1),dA=h("button",{class:"signupbut",style:{"font-weight":"bold"}},"Sign Up",-1),fA={key:0,class:"signup-notification"};function pA(t,e,n,s,i,r){return O(),M(ke,null,[h("form",{onSubmit:e[8]||(e[8]=Xo((...o)=>r.signUp&&r.signUp(...o),["prevent"])),class:"signup"},[h("img",{src:i.imagePaths.appicon,alt:"community logo",width:"50"},null,8,YS),JS,XS,h("div",ZS,[te(h("input",{type:"text",class:"input",placeholder:"Name",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>i.username=o),style:{"border-radius":"10px"}},null,512),[[re,i.username]]),eA,te(h("input",{type:"email",class:"input",placeholder:"Email",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>i.email=o),style:{"border-radius":"10px"}},null,512),[[re,i.email]]),tA,te(h("input",{type:"password",class:"input",placeholder:"Password",required:"","onUpdate:modelValue":e[2]||(e[2]=o=>i.password=o),style:{"border-radius":"10px"}},null,512),[[re,i.password]]),nA,h("div",sA,[te(h("select",{"onUpdate:modelValue":e[3]||(e[3]=o=>i.countryCode=o),class:"input",type:"countryCode",style:{height:"38px","border-radius":"10px",width:"55px","margin-right":"8px"},required:""},rA,512),[[El,i.countryCode]]),te(h("input",{type:"tel",class:"input",placeholder:"Phone Number",required:"","onUpdate:modelValue":e[4]||(e[4]=o=>i.phone=o),style:{"border-radius":"10px",width:"95px"}},null,512),[[re,i.phone]])]),h("div",oA,[aA,te(h("input",{type:"date",class:"input",placeholder:"Date of Birth",required:"","onUpdate:modelValue":e[5]||(e[5]=o=>i.dob=o),style:{"border-radius":"10px"}},null,512),[[re,i.dob]]),lA]),h("div",cA,[te(h("input",{type:"radio",id:"male",value:"Male","onUpdate:modelValue":e[6]||(e[6]=o=>i.gender=o)},null,512),[[vh,i.gender]]),uA,be("     "),te(h("input",{type:"radio",id:"female",value:"Female","onUpdate:modelValue":e[7]||(e[7]=o=>i.gender=o)},null,512),[[vh,i.gender]]),hA]),dA])],32),i.notification?(O(),M("div",fA,oe(i.notification),1)):Fe("",!0)],64)}const vy=We(QS,[["render",pA]]);const gA={data(){return{email:"",password:"",notification:"",imagePaths:{appicon:yy}}},methods:{login(){vb(Nn,this.email,this.password).then(()=>{this.$emit("loggedIn")}).catch(t=>{switch(t.code){case"auth/user-not-found":this.notification="This email is still not yet register. Please register before login";break;case"auth/wrong-password":this.notification="The email or password is incorrect. Please try again.";break;default:console.error("Login error:",t)}})}}},mA=["src"],yA=h("br",null,null,-1),vA=h("br",null,null,-1),_A=h("br",null,null,-1),wA=h("br",null,null,-1),bA=h("button",{class:"loginbut"},"Log in",-1),EA={key:0,class:"login-notification"};function IA(t,e,n,s,i,r){return O(),M(ke,null,[h("form",{onSubmit:e[2]||(e[2]=Xo((...o)=>r.login&&r.login(...o),["prevent"])),class:"login"},[h("img",{src:i.imagePaths.appicon,alt:"community logo",width:"50"},null,8,mA),yA,vA,te(h("input",{type:"email",class:"input",placeholder:"What's your email?",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),style:{"border-radius":"10px"}},null,512),[[re,i.email]]),_A,te(h("input",{type:"password",class:"input",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),style:{"border-radius":"10px"}},null,512),[[re,i.password]]),wA,bA],32),i.notification?(O(),M("div",EA,oe(i.notification),1)):Fe("",!0)],64)}const _y=We(gA,[["render",IA]]);const TA={props:{isLoggedIn:{type:Boolean,required:!0}},data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},navigate(t){this.$router.push(t),this.isMenuOpen=!1},logOut(){this.$emit("logOut")}},created(){Nn.onAuthStateChanged(t=>{this.isLoggedIn=t!==null})}},CA=h("div",{class:"line"},null,-1),SA=h("div",{class:"line"},null,-1),AA=h("div",{class:"line"},null,-1),kA=[CA,SA,AA],RA={style:{position:"absolute",width:"100%",bottom:"0"}};function DA(t,e,n,s,i,r){return O(),M(ke,null,[h("div",{class:"hamburger",onClick:e[0]||(e[0]=(...o)=>r.toggleMenu&&r.toggleMenu(...o))},kA),h("div",{class:Wt(["sidebar",{open:i.isMenuOpen}])},[h("ul",null,[h("li",{onClick:e[1]||(e[1]=o=>r.navigate("/home"))},"Home"),h("li",{onClick:e[2]||(e[2]=o=>r.navigate("/highlight"))},"Highlights"),h("li",{onClick:e[3]||(e[3]=o=>r.navigate("/education"))},"Why Blood?"),h("li",{onClick:e[4]||(e[4]=o=>r.navigate("/campaign"))},"Campaign"),h("li",{onClick:e[5]||(e[5]=o=>r.navigate("/profile"))},"Profile")]),h("div",RA,[h("ul",null,[h("li",{onClick:e[6]||(e[6]=o=>r.navigate("/organization")),style:{"border-top":"1px solid #ccc"}},"Create Camp"),n.isLoggedIn?(O(),M("li",{key:0,onClick:e[7]||(e[7]=(...o)=>r.logOut&&r.logOut(...o)),style:{"border-bottom":"none"}},"Sign Out")):Fe("",!0)])])],2)],64)}const wy=We(TA,[["render",DA]]);const PA={key:0,style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},NA={style:{"text-align":"center","font-size":"small"}},OA={style:{"text-align":"center","font-size":"small"}},xA={key:1},MA=h("div",null,[h("div",{style:{"z-index":"999",position:"fixed",height:"50px",width:"100%","background-color":"#e74c3c"}},"   ")],-1),LA={id:"app1"},UA={name:"App",components:{SignupForm:vy,LoginForm:_y,HamburgerMenu:wy},data(){return{isLoggedIn:!1,showLogin:!0,displayName:""}},beforeUpdate(){Nn.currentUser&&(this.displayName=Nn.currentUser.displayName)},methods:{logInOrSignUp(){this.isLoggedIn=!0,this.$router.push("/home")},logOut(){Ib(Nn).then(()=>{this.isLoggedIn=!1,cp().push("/")})}}},FA=Object.assign(UA,{setup(t){return(e,n)=>{const s=wc("router-view");return e.isLoggedIn?(O(),M("div",xA,[MA,h("div",LA,[Ne(s,{displayName:e.displayName},null,8,["displayName"]),Ne(wy,{isLoggedIn:e.isLoggedIn,onLogOut:e.logOut},null,8,["isLoggedIn","onLogOut"])])])):(O(),M("div",PA,[e.showLogin?(O(),M(ke,{key:0},[Ne(_y,{onLoggedIn:e.logInOrSignUp,class:"login"},null,8,["onLoggedIn"]),h("p",NA,[be("No account yet? "),h("span",{onClick:n[0]||(n[0]=i=>e.showLogin=!1),style:{"font-weight":"bold","text-decoration":"underline"}},"Sign Up"),be(" instead.")])],64)):(O(),M(ke,{key:1},[Ne(vy,{onLoggedIn:e.logInOrSignUp,class:"signup"},null,8,["onLoggedIn"]),h("p",OA,[be("Already registered? "),h("span",{onClick:n[1]||(n[1]=i=>e.showLogin=!0),style:{"font-weight":"bold","text-decoration":"underline"}},"Login"),be(" instead.")])],64))]))}}}),by="/vitevue-project/assets/faq-icon-bd5e6b45.png";const $A={data(){return{items:[{id:1,title:"1. What should I do if I need to claim my privilege as a blood donor?",content:"Kindly proceed to the nearest blood bank for verification in order to claim your privilege.",showContent:!1},{id:2,title:"2. Why should I donate blood?",content:"Every day blood is needed to save lives. Blood may be needed for surgery, accident victims or to treat patients with leukemia, cancer, heart disease, liver disease and hemophilia. Your contribution could save a life.",showContent:!1},{id:3,title:"3. Am I eligible to donate blood?",content:"Yes, if you are over 17 years old (age verification required) and weight more than 45kg. In general, taking medication is not an obstacle to donating blood because acceptance and rejection are based on medical reports. If you are taking any medication, please inform before donating blood.",showContent:!1},{id:4,title:"4. Am I healthy enough to donate blood?",content:"You must be healthy enough to donate blood. Your health and safety is very important to us. You will be asked to fill up a blood donation questionnaire where your medical history will be asked. Blood pressure and a drop of blood will be taken for a hemoglobin test. All information provided by you is confidential.",showContent:!1},{id:5,title:"5. How long does it take to donate blood?",content:"The process of donating blood will take between 7-10 minutes, but you are advised to be at the blood collection site for approximately one hour.",showContent:!1},{id:6,title:"6. Does the needle hurt?",content:"You only feel a little pain when the needle is inserted and nothing after.",showContent:!1},{id:7,title:"7. How much blood will be taken?",content:"A total of 450ml, which is less than 1 pint (586ml). Adults usually have about 5 liters (10-12 pints) of blood in the body.",showContent:!1},{id:8,title:"8. How does it feel after donating blood?",content:"Most people feel comfortable after donating blood. You are advised to have a light meal before donating blood.",showContent:!1},{id:9,title:"9. Can I do sports after donating blood?",content:"Yes. Just avoid doing heavy activities for 5 hours after donating blood. Drink plenty of water within 24 hours.",showContent:!1},{id:10,title:"10. How long does it take to replace the donated blood?",content:"Plasma is replaced within 24 hours. You need to drink 4 glasses of water without alcohol and do not do heavy work with your hands for a period of 5 hours. Red blood takes 4-8 weeks to be replaced and you can donate again after that.",showContent:!1},{id:11,title:"11. What will be done to the donated blood?",content:"Your blood will be tested to determine blood group, viral in which is used in 22 blood collection centers nationwideections such as syphilis, hepatitis (B & C) and AIDS (HIV). Then, stored for patient use. Blood can also be separated into several blood components and can be used to treat more than one patient.",showContent:!1},{id:12,title:"12. How I reset password if I forgot my password?",content:"For security purpose, kindly send an e-mail to community@admin.com",showContent:!1}],imagePaths:{faqicon:by},searchQuery:""}},computed:{filteredItems(){if(this.searchQuery){const t=this.searchQuery.toLowerCase();return this.items.filter(e=>e.title.toLowerCase().includes(t))}return this.items}},methods:{toggleContent(t){this.items.forEach(e=>{e.id===t?e.showContent=!e.showContent:e.showContent=!1})},goToContact(){this.$router.push("/education/faq/contact")}}},BA={class:"faq"},VA=h("br",null,null,-1),jA=["src"],HA=h("br",null,null,-1),qA=h("b",null,"Frequently Asked Questions",-1),zA=h("p",{style:{"font-size":"small","text-align":"center"}},"Straightforward answers to common questions about blood donation.",-1),KA=h("br",null,null,-1),WA=["onClick"],GA={class:"toggleIcon"},QA={key:0,class:"content-edu"},YA=h("br",null,null,-1),JA={style:{"font-size":"small",padding:"0 35px",color:"grey"}},XA=h("i",{class:"fa fa-search",style:{"font-size":"35px"}},null,-1),ZA=h("br",null,null,-1),ek=h("br",null,null,-1);function tk(t,e,n,s,i,r){return O(),M("div",BA,[VA,h("img",{src:i.imagePaths.faqicon,alt:"FAQ Icon"},null,8,jA),HA,qA,zA,KA,h("div",null,[te(h("input",{class:"search",type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>i.searchQuery=o),placeholder:" Enter your question"},null,512),[[re,i.searchQuery]]),(O(!0),M(ke,null,Gn(r.filteredItems,o=>(O(),M("div",{key:o.id,class:"faqborder"},[h("div",{class:Wt(["title",{open:o.showContent}]),onClick:a=>r.toggleContent(o.id)},[be(oe(o.title)+" ",1),h("span",GA,oe(o.showContent?"-":"+"),1)],10,WA),o.showContent?(O(),M("div",QA,oe(o.content),1)):Fe("",!0)]))),128)),YA,h("div",null,[h("p",JA,[XA,ZA,be("Could not find your questions?"),ek,be(" Send us your questions at "),h("span",{style:{color:"#e74c3c"},onClick:e[1]||(e[1]=(...o)=>r.goToContact&&r.goToContact(...o))},"HERE"),be(".")])])])])}const nk=We($A,[["render",tk]]),Ey="/vitevue-project/assets/bt-icon-bc98eb4f.png";const sk={data(){return{tableData:[{column1:"A+",column2:"A+, AB+",column3:"A+, A-, O+, O-"},{column1:"O+",column2:"O+, A+, B+, AB+",column3:"O+, O-"},{column1:"B+",column2:"B+, AB+",column3:"B+, B-, O+, O-"},{column1:"AB+",column2:"AB+",column3:"ALL BLOOD TYPES"},{column1:"A-",column2:"A+, A-, AB+, AB-",column3:"A-, O-"},{column1:"O-",column2:"ALL BLOOD TYPES",column3:"O-"},{column1:"B-",column2:"B+, B-, AB+, AB-",column3:"B-, O-"},{column1:"AB-",column2:"AB+, AB-",column3:"AB-, A-, B-, O-"}],imagePaths:{bticon:Ey}}}},ik={class:"bloodtype-table"},rk=h("br",null,null,-1),ok=["src"],ak=h("br",null,null,-1),lk=h("b",null,"Matching Blood Types",-1),ck=h("p",null,"A blood type is a classification of blood based on the presence or absence of antigens on the surface of red blood cells. Human blood is divided into one of four main blood types: A, B, AB, and O, and is further divided into Rh+ or Rh-.",-1),uk={class:"table-border"},hk=h("thead",null,[h("tr",null,[h("th",{class:"left-column"},"Type"),h("th",null,"You can give blood to"),h("th",{class:"right-column"},"You can receive blood from")])],-1),dk={class:"left-column"},fk={class:"right-column"};function pk(t,e,n,s,i,r){return O(),M("div",ik,[rk,h("img",{src:i.imagePaths.bticon,alt:"Blood Type Icon"},null,8,ok),ak,lk,ck,h("div",uk,[h("table",null,[hk,h("tbody",null,[(O(!0),M(ke,null,Gn(i.tableData,(o,a)=>(O(),M("tr",{key:a,class:Wt({"odd-row":a%2!==0})},[h("td",dk,oe(o.column1),1),h("td",null,oe(o.column2),1),h("td",fk,oe(o.column3),1)],2))),128))])])])])}const gk=We(sk,[["render",pk]]),Iy="/vitevue-project/assets/eli-icon-57593af7.png",mk="/vitevue-project/assets/eli-age-13cb64b7.png",yk="/vitevue-project/assets/eli-alcohol-0406a1fc.png",vk="/vitevue-project/assets/eli-gender-d6b663ad.png",_k="/vitevue-project/assets/eli-healthy-53da1207.png",wk="/vitevue-project/assets/eli-malaysia-f0bace01.png",bk="/vitevue-project/assets/eli-sleep-6f387f38.png",Ek="/vitevue-project/assets/eli-weight-ba7e910a.png",Ik="/vitevue-project/assets/eli-woman-8394ab2a.png";const Tk={data(){return{imagePaths:{eliicon:Iy,age:mk,alcohol:yk,gender:vk,healthy:_k,malaysia:wk,sleep:bk,weight:Ek,woman:Ik}}}},Ck={class:"eligibility"},Sk=h("br",null,null,-1),Ak=["src"],kk=h("br",null,null,-1),Rk=h("b",null,"Blood Donation Eligibility Requirements",-1),Dk={class:"eli-table"},Pk={style:{width:"50%"}},Nk=["src"],Ok=h("p",{class:"type"},"AGE",-1),xk=h("p",{class:"eli"},"18-60 years old",-1),Mk=h("p",{class:"desp"},"*Parental consent required for 17 years old and below",-1),Lk={style:{width:"50%"}},Uk=["src"],Fk=h("p",{class:"type"},"MEDICINE & ALCOHOL",-1),$k=h("p",{class:"eli"},"Alcohol-free",-1),Bk=h("p",{class:"desp"},"Avoid consuming alcohol a day before donating",-1),Vk=["src"],jk=h("p",{class:"type"},"HEALTHY",-1),Hk=h("p",{class:"eli"},"Physical & mental",-1),qk=h("p",{class:"desp"},"No chronic diseases",-1),zk=["src"],Kk=h("p",{class:"type"},"WEIGHT",-1),Wk=h("p",{class:"eli"},"> 45kg",-1),Gk=["src"],Qk=h("p",{class:"type"},"SUFFICIENT SLEEP",-1),Yk=h("p",{class:"eli"},"> 5 hours",-1),Jk=h("p",{class:"desp"},"Donors must have at least five hours of sleep before donating",-1),Xk=["src"],Zk=h("p",{class:"type"},"RESIDING IN MALAYSIA",-1),e2=h("p",{class:"eli"},"> 1 year",-1),t2=h("p",{class:"desp"},"for non-Malaysians",-1),n2=["src"],s2=h("p",{class:"type"},"HIGH-RISK ACTIVITIES",-1),i2=h("p",{class:"eli"},"Do not engage",-1),r2=h("p",{class:"desp"},"Do not use drugs or engage in sexual intercourse with many partners",-1),o2=["src"],a2=h("p",{class:"type"},"WOMEN",-1),l2=h("p",{class:"eli"},"Not pregnant or during menstrual cycle",-1),c2=h("p",{class:"desp"},"including breastfeeding",-1);function u2(t,e,n,s,i,r){return O(),M("div",Ck,[Sk,h("img",{src:i.imagePaths.eliicon,alt:"Eligibility Icon"},null,8,Ak),kk,Rk,h("table",Dk,[h("tr",null,[h("td",Pk,[h("img",{src:i.imagePaths.age,alt:"Age Icon"},null,8,Nk),Ok,xk,Mk]),h("td",Lk,[h("img",{src:i.imagePaths.alcohol,alt:"Alcohol free Icon"},null,8,Uk),Fk,$k,Bk])]),h("tr",null,[h("td",null,[h("img",{src:i.imagePaths.healthy,alt:"Healthy Icon"},null,8,Vk),jk,Hk,qk]),h("td",null,[h("img",{src:i.imagePaths.weight,alt:"Weight Icon"},null,8,zk),Kk,Wk])]),h("tr",null,[h("td",null,[h("img",{src:i.imagePaths.sleep,alt:"Sleep Icon"},null,8,Gk),Qk,Yk,Jk]),h("td",null,[h("img",{src:i.imagePaths.malaysia,alt:"Malaysia Icon"},null,8,Xk),Zk,e2,t2])]),h("tr",null,[h("td",null,[h("img",{src:i.imagePaths.gender,alt:"Gender Icon"},null,8,n2),s2,i2,r2]),h("td",null,[h("img",{src:i.imagePaths.woman,alt:"Woman Icon"},null,8,o2),a2,l2,c2])])])])}const h2=We(Tk,[["render",u2]]),Ty="/vitevue-project/assets/perks-privilege-0e47030c.png";const d2={data(){return{tableData:[{column1:"1 time",column2:"Free outpatient treatment and medical treatment (excluding X-ray and surgical charges) and second class wards for a period of * 4 months."},{column1:"2 times (within 12 months)",column2:"Free Hepatitis B preventive injection."},{column1:"2 ~ 5 times",column2:"Free outpatient treatment and medical treatment and second class wards for a period of * 4 months."},{column1:"6 ~ 10 times",column2:"Free * year outpatient treatment and second class medical treatment for a * 6 months period."},{column1:"11 ~ 15 times",column2:"Free * 2 year outpatient treatment and second class medical treatment for a * 6 month period."},{column1:"16 ~ 20 times",column2:"Free outpatient treatment and medical treatment and second class wards for a * 2 year period."},{column1:"21 ~ 30 times",column2:"Free outpatient treatment and medical treatment and second class wards for a period of * 3 years."},{column1:"31 ~ 40 times",column2:"Free outpatient treatment and medical treatment and first class wards for a period of * 4 years."},{column1:"41 ~ 50 times",column2:"Free outpatient treatment and medical treatment and first class wards for a period of * 6 years."},{column1:'Over 50 times (for "Whole Blood") and Over 150 times (for aferesis donors)',column2:"Free outpatient treatment and first-class medical treatment and wards for 10 years and second-class wards of life after 10 years in first-class ward."}],imagePaths:{privileges:Ty}}}},f2={class:"perks"},p2=h("br",null,null,-1),g2=["src"],m2=h("br",null,null,-1),y2=h("b",null,"Malaysian Blood Donor Privileges",-1),v2=h("p",null,"There are many health benefits to donating blood and those who donate blood in Malaysia can benefit from many medical perks offered by the Ministry of Health:",-1),_2={class:"perks-table"},w2=h("thead",null,[h("tr",null,[h("th",{class:"left-column"},"Donation Frequency"),h("th",{class:"right-column"},"Medical Privileges")])],-1),b2={class:"left-column"},E2={class:"right-column"};function I2(t,e,n,s,i,r){return O(),M("div",f2,[p2,h("img",{src:i.imagePaths.privileges,alt:"Privilege Icon"},null,8,g2),m2,y2,v2,h("div",_2,[h("table",null,[w2,h("tbody",null,[(O(!0),M(ke,null,Gn(i.tableData,(o,a)=>(O(),M("tr",{key:a,class:Wt({"odd-row":a%2!==0})},[h("td",b2,oe(o.column1),1),h("td",E2,oe(o.column2),1)],2))),128))])])])])}const T2=We(d2,[["render",I2]]);const C2={name:"Map",props:{filteredCampaigns:{type:Array,required:!0},searchQuery:{type:String,required:!0}},setup(t){const e=In(null),n=In([]),s=()=>{const o={lat:3.06484594571016,lng:101.61692563544386};navigator.geolocation?navigator.geolocation.getCurrentPosition(a=>{o.lat=a.coords.latitude,o.lng=a.coords.longitude,i(o)},()=>{i(o),console.error("Error getting current location")}):(i(o),console.error("Geolocation is not supported by this browser"))},i=o=>{e.value=new google.maps.Map(document.getElementById("map"),{center:o,zoom:15}),r()},r=()=>{if(!e.value)return;n.value.forEach(a=>{a.setMap(null)}),n.value=[],t.filteredCampaigns.filter(a=>a.location.toLowerCase().includes(t.searchQuery.toLowerCase())).forEach(a=>{const l=new google.maps.InfoWindow({content:`<h3>${a.name}</h3><p>Date: ${a.startDate} to ${a.endDate}</p>`}),c=new google.maps.LatLng(a.latitude,a.longitude),u=new google.maps.Marker({position:c,map:e.value});u.addListener("click",()=>{l.open(e.value,u)}),n.value.push(u)})};return _c(()=>{const o=document.createElement("script");o.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWddpINsAJJplhhkUxmc_qvenPkKVaQKY&callback=initMap",o.defer=!0,o.async=!0,window.initMap=s,document.head.appendChild(o)}),Si(()=>[t.filteredCampaigns,t.searchQuery],()=>{r()},{deep:!0}),{map:e}}},S2=h("div",{id:"map"},null,-1),A2=[S2];function k2(t,e,n,s,i,r){return O(),M("div",null,A2)}const R2=We(C2,[["render",k2]]);const D2={components:{MapTest:R2},data(){return{searchQuery:"",searchDate:"",sortOrder:"asc",currentPage:1,pageSize:8,favorites:[],showFavorites:!1,campaigns:[{id:1,name:"Blood Donation Week at Taylor's University",location:"1, Jln Taylors, 47500 Subang Jaya, Selangor",startDate:"2023-08-17",endDate:"2023-08-25",description:"PUSAT DARAH NEGARA",formUrls:[{id:1,url:"https://forms.gle/znWG6ZWZZXfAoLXN6"}],latitude:3.06484594571016,longitude:101.61692563544386},{id:2,name:"Blood Donation Week at IOI City Mall",location:"City Sepang, 2AT-3A, Level 3, IOI City Mall, Lbh IRC, Ioi Resort, 62502 Putrajaya",startDate:"2023-07-22",endDate:"2023-07-29",description:"PUSAT KOMUNITI ST JOHN AMBULANS MALAYSIA",formUrls:[{id:2,url:"https://forms.gle/6DCNrWcpjiiDTVZSA"}],latitude:2.970786212821712,longitude:101.7137324675521},{id:3,name:"Blood Donation Hero at Desa Parkcity",location:" Desa Parkcity 52200 Kuala Lumpur, Federal Territory of Kuala Lumpur ",startDate:"2023-08-08",endDate:"2023-08-15",description:"BULAN SABIT MERAH MALAYSIA CAWANGAN SELANGOR",formUrls:[{id:3,url:"https://forms.gle/rfbBYvxGLepFSGPc7"}],latitude:3.1856896992217107,longitude:101.63501319960115},{id:4,name:"Blood Donation Hero 2.0 at Pavillion Bukit Jalil ",location:"2, Persiaran Jalil 8, Bukit Jalil, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-09-05",endDate:"2023-09-12",description:"VEDO WELLNESS SDN BHD",formUrls:[{id:4,url:"https://forms.gle/ppf4aaGm453Cx6Gy9"}],latitude:3.05032462984594,longitude:101.6709347088716},{id:5,name:"Donate & SaveALive at Sunway Pyramid ",location:"3, Jalan PJS 11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor",startDate:"2023-09-15",endDate:"2023-09-20",description:"A-MED CLINIC SG CHUA KAJANG",formUrls:[{id:5,url:"https://forms.gle/UnBSFTCa58vzhPCE9"}],latitude:3.072168678003126,longitude:101.60651263901032},{id:6,name:"Donation Event Fair at IOI City Mall ",location:"Management Office, Unit T2-3A-3 & Unit T2-3A-3A Level 3A, IOI City Tower Two, Lbh IRC, Ioi Resort, 62502 Putrajaya, Selangor",startDate:"2023-08-10",endDate:"2023-08-15",description:"SUITE DERMA DARAH PUSPANITA, PUTRAJAYA",formUrls:[{id:6,url:"https://forms.gle/JSnk7ABbLpbfMWnm8"}],latitude:2.970786212821712,longitude:101.7137324675521},{id:7,name:"Donate & SaveALive 2.0 at Mid Valley ",location:"Lingkaran Syed Putra, Mid Valley City, 59200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-08-22",endDate:"2023-08-25",description:"PUSAT DARAH NEGARA DONATION SUITE MIDVALLEY",formUrls:[{id:7,url:"https://forms.gle/MrhdMDwWZrDPuVCC7"}],latitude:3.1178008669063475,longitude:101.67829379439459},{id:8,name:"Give Blood, Give Life at Sunway Pyramid ",location:"3, Jalan PJS 11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor",startDate:"2023-09-22",endDate:"2023-09-25",description:"SUNWAY TCM CENTRE",formUrls:[{id:8,url:"https://forms.gle/k95mZQmoEUxSgdWX6"}],latitude:3.072423538426663,longitude:101.60711634232759},{id:9,name:"Blood Donation Drive at Taylor's University ",location:"1, Jln Taylors, 47500 Subang Jaya, Selangor",startDate:"2023-09-11",endDate:"2023-09-18",description:"HOSPITAL SULTAN IDRIS SHAH",formUrls:[{id:9,url:"https://forms.gle/SakCZcrduTZRuQGa8"}],latitude:3.06484594571016,longitude:101.61692563544386},{id:10,name:"Donate & SaveALive 3.0 at Setia City Mall ",location:"7, Persiaran Setia Dagang, Setia Alam, 40170 Shah Alam, Selangor",startDate:"2023-10-11",endDate:"2023-10-18",description:"BAHAGIAN HAL EHWAL ISLAM UiTM SHAH ALAM",formUrls:[{id:10,url:"https://forms.gle/XrkqcNnzeSU3bWXT7"}],latitude:3.1096774042592807,longitude:101.46019634232759},{id:11,name:"Blood Donation Drive at Monash University ",location:"Jalan Lagoon Selatan, Bandar Sunway, 47500 Subang Jaya, Selangor",startDate:"2023-10-13",endDate:"2023-10-18",description:"KOI TROPIKA MANAGEMENT CORPORATION",formUrls:[{id:11,url:"https://forms.gle/FzcWpoaZqUy8oedx8"}],latitude:3.065219035588563,longitude:101.60088926556641},{id:12,name:"Kempen Derma Darah at The Mines ",location:"L1-07A, Jalan Dulang, Mines Wellness City, 43300 Seri Kembangan, Selangor",startDate:"2023-10-03",endDate:"2023-10-10",description:"ALPS MEDICAL CENTRE",formUrls:[{id:12,url:"https://forms.gle/UWN12v8CkMamKEgq7"}],latitude:3.028803020070358,longitude:101.71924683068966},{id:13,name:"Project 'Share Your Love & Care' at Pavillion KL ",location:"168, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-12-11",endDate:"2023-12-16",description:"QI SERVICES (M) SDN BHD",formUrls:[{id:13,url:"https://forms.gle/bcorf17t7nqPQSTr6"}],latitude:3.1491803090213537,longitude:101.71339104232759},{id:14,name:"Donate N Go at Pavillion KL ",location:"168, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-11-11",endDate:"2023-11-16",description:"LIONS CLUB OF KUALA LUMPUR",formUrls:[{id:14,url:"https://forms.gle/FTUozNa4UDfp7L5B6"}],latitude:3.1491803090213537,longitude:101.71339104232759},{id:15,name:"Donate N Go 2.0 at Pavillion KL ",location:"168, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-12-05",endDate:"2023-12-10",description:"LIONS CLUB OF AMPANG",formUrls:[{id:15,url:"https://forms.gle/cSZxT2ycooRb4vKX7"}],latitude:3.1491803090213537,longitude:101.71339104232759},{id:16,name:"Blood Fun Walk at IOI City Mall ",location:"Management Office, Unit T2-3A-3 & Unit T2-3A-3A Level 3A, IOI City Tower Two, Lbh IRC, Ioi Resort, 62502 Putrajaya, Selangor",startDate:"2023-12-05",endDate:"2023-12-12",description:"JUNIOR CHAMBER INTERNATIONAL PUCHONG (JCI)",formUrls:[{id:16,url:"https://forms.gle/oHXHXvsjex68p48Y9"}],latitude:2.970786212821712,longitude:101.7137324675521},{id:17,name:"Be a Lifesaver at Village Mall Kepong ",location:"Lot GOL-01, Tesco Kepong, 3, Jalan 7A/62A, Bandar Menjalara, 52200 Kuala Lumpur",startDate:"2023-12-02",endDate:"2023-12-08",description:"CHINESE METHODIST CHURCH KEPONG",formUrls:[{id:17,url:"https://forms.gle/fFEwsmKnD51GDSbd8"}],latitude:3.1929226997331814,longitude:101.63277088650862},{id:18,name:"Uniting for Blood Donation at Pavilion Bukit Jalil ",location:"2, Persiaran Jalil 8, Bukit Jalil, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",startDate:"2023-11-02",endDate:"2023-11-08",description:"PERSATUAN KEBAJIKAN DAN SOSIAL SEJAHTERA MASYARAKAT MALAYSIA",formUrls:[{id:18,url:"https://forms.gle/YaevGxHXGB1gYHL99"}],latitude:3.05032462984594,longitude:101.6709347088716},{id:19,name:"Be a Hero, Donate Blood at Sunway University ",location:"5, Jalan Universiti, Bandar Sunway, 47500 Petaling Jaya, Selangor",startDate:"2023-11-02",endDate:"2023-11-05",description:"UCOS LOGISTICS SDN BHD",formUrls:[{id:19,url:"https://forms.gle/h2N6j7djBRJG65Gk7"}],latitude:3.06743561256955,longitude:101.60381954232759},{id:20,name:"Blood Donation Journey at One Utama ",location:"1, Lebuh Bandar Utama, Bandar Utama, 47800 Petaling Jaya, Selangor",startDate:"2023-11-22",endDate:"2023-11-28",description:"BANDAR SETIA ALAM SDN BHD (SP SETIA)",formUrls:[{id:20,url:"https://forms.gle/3pnyAvv99eYRbGSBA"}],latitude:3.148298221852806,longitude:101.6164738865086}]}},computed:{filteredCampaigns(){const t=this.searchQuery.toLowerCase();return this.searchDate,this.campaigns.filter(e=>{const n=e.location.toLowerCase().includes(t),s=!this.searchDate||this.searchDate>=e.startDate&&this.searchDate<=e.endDate;return n&&s})},sortedCampaigns(){return this.filteredCampaigns.sort((t,e)=>this.sortOrder==="asc"?new Date(t.startDate)-new Date(e.startDate):new Date(e.startDate)-new Date(t.startDate))},paginatedCampaigns(){const t=(this.currentPage-1)*this.pageSize,e=t+this.pageSize;return this.sortedCampaigns.slice(t,e)},totalPages(){return Math.ceil(this.filteredCampaigns.length/this.pageSize)}},methods:{toggleSortOrder(){this.sortOrder=this.sortOrder==="asc"?"desc":"asc"},goToPreviousPage(){this.currentPage>1&&this.currentPage--},goToNextPage(){this.currentPage<this.totalPages&&this.currentPage++},toggleFavorite(t){if(t.isFavorite=!t.isFavorite,t.isFavorite)this.favorites.push(t);else{const e=this.favorites.findIndex(n=>n.id===t.id);e!==-1&&this.favorites.splice(e,1)}},toggleFavoritesView(){this.showFavorites=!this.showFavorites}}},P2={class:"camptest"},N2=h("h1",{class:"title"},"Discover",-1),O2=h("br",null,null,-1),x2={style:{float:"right"}},M2=h("i",{class:"fas fa-heart"},null,-1),L2=[M2],U2={key:0},F2={class:"camporganizer"},$2=h("span",{class:"data"},"Address",-1),B2=h("br",null,null,-1),V2=h("span",{class:"data"},"Date",-1),j2=h("br",null,null,-1),H2={style:{width:"100%","text-align":"right","margin-bottom":"3px"}},q2=["onClick"],z2=["href"],K2={key:1},W2=h("h2",{style:{"font-size":"medium"}},"Your Favorite Campaigns",-1),G2={key:0},Q2={class:"camporganizer"},Y2=h("span",{class:"data"},"Address",-1),J2=h("br",null,null,-1),X2=h("span",{class:"data"},"Date",-1),Z2=h("br",null,null,-1),eR={style:{width:"100%","text-align":"right","margin-bottom":"3px"}},tR=["href"],nR={key:1,style:{"margin-top":"20px","margin-bottom":"20px",color:"grey","text-align":"center","font-size":"small"}},sR={style:{"text-align":"center","margin-bottom":"20px"}},iR={key:2},rR={key:0,style:{"margin-top":"20px","margin-bottom":"20px",color:"grey","text-align":"center","font-size":"small"}},oR=h("i",{class:"fa fa-search",style:{"font-size":"35px"}},null,-1),aR=h("br",null,null,-1),lR={key:1,class:"pagination"},cR=["disabled"],uR=h("i",{class:"fa fa-angle-left"},null,-1),hR=[uR],dR=["disabled"],fR=h("i",{class:"fa fa-angle-right"},null,-1),pR=[fR];function gR(t,e,n,s,i,r){const o=wc("MapTest");return O(),M("div",P2,[N2,Ne(o,{filteredCampaigns:r.filteredCampaigns,searchQuery:i.searchQuery},null,8,["filteredCampaigns","searchQuery"]),O2,te(h("input",{class:"search",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>i.searchQuery=a),placeholder:" Search by location"},null,512),[[re,i.searchQuery]]),te(h("input",{class:"date",type:"date","onUpdate:modelValue":e[1]||(e[1]=a=>i.searchDate=a)},null,512),[[re,i.searchDate]]),h("div",x2,[h("button",{class:"button",onClick:e[2]||(e[2]=(...a)=>r.toggleSortOrder&&r.toggleSortOrder(...a))},[h("i",{class:Wt(i.sortOrder==="asc"?"fa fa-sort-amount-asc":"fa fa-sort-amount-desc")},null,2)]),i.showFavorites?Fe("",!0):(O(),M("button",{key:0,class:"button",onClick:e[3]||(e[3]=(...a)=>r.toggleFavoritesView&&r.toggleFavoritesView(...a))},L2))]),r.paginatedCampaigns.length>0&&!i.showFavorites?(O(),M("ul",U2,[(O(!0),M(ke,null,Gn(r.paginatedCampaigns,a=>(O(),M("li",{key:a.id},[h("h3",null,oe(a.name),1),h("p",F2,"by "+oe(a.description),1),h("p",null,[$2,B2,be(" "+oe(a.location),1)]),h("p",null,[V2,j2,be(" "+oe(a.startDate)+" to "+oe(a.endDate),1)]),h("div",H2,[h("button",{style:{"margin-right":"10px","background-color":"transparent"},onClick:l=>r.toggleFavorite(a)},[h("i",{class:Wt(a.isFavorite?"fas fa-heart":"far fa-heart"),style:{"font-size":"large",color:"#e74c3c"}},null,2)],8,q2),(O(!0),M(ke,null,Gn(a.formUrls,l=>(O(),M("a",{key:l.id,class:"register",href:l.url,target:"_blank"},"Register",8,z2))),128))])]))),128))])):Fe("",!0),i.showFavorites?(O(),M("div",K2,[W2,i.favorites.length>0?(O(),M("ul",G2,[(O(!0),M(ke,null,Gn(i.favorites,a=>(O(),M("li",{key:a.id},[h("h3",null,oe(a.name),1),h("p",Q2,"by "+oe(a.description),1),h("p",null,[Y2,J2,be(" "+oe(a.location),1)]),h("p",null,[X2,Z2,be(" "+oe(a.startDate)+" to "+oe(a.endDate),1)]),h("div",eR,[(O(!0),M(ke,null,Gn(a.formUrls,l=>(O(),M("a",{key:l.id,class:"register",href:l.url,target:"_blank"},"Register",8,tR))),128))])]))),128))])):(O(),M("div",nR," No favorite campaigns found. ")),h("div",sR,[h("button",{class:"button",style:{"font-size":"small"},onClick:e[4]||(e[4]=(...a)=>r.toggleFavoritesView&&r.toggleFavoritesView(...a))},"Back to Campaign List")])])):(O(),M("div",iR,[r.filteredCampaigns.length===0?(O(),M("div",rR,[oR,aR,be(" No results found. ")])):Fe("",!0),r.filteredCampaigns.length>0?(O(),M("div",lR,[h("button",{onClick:e[5]||(e[5]=(...a)=>r.goToPreviousPage&&r.goToPreviousPage(...a)),disabled:i.currentPage===1},hR,8,cR),h("span",null,oe(i.currentPage),1),h("button",{onClick:e[6]||(e[6]=(...a)=>r.goToNextPage&&r.goToNextPage(...a)),disabled:i.currentPage===r.totalPages},pR,8,dR)])):Fe("",!0)]))])}const mR=We(D2,[["render",gR]]),yR="/vitevue-project/assets/edu-bloodtype-f9f6fcd8.jpg",vR="/vitevue-project/assets/edu-eligibility-56e0be29.jpg",_R="/vitevue-project/assets/edu-perks-72313c18.jpg";const wR={methods:{goToBloodType(){this.$router.push("/education/bloodtype")},goToEligibility(){this.$router.push("/education/eligibility")},goToPerks(){this.$router.push("/education/perks")},goToFAQ(){this.$router.push("/education/faq")}},data(){return{imagePaths:{bloodType:yR,eligibility:vR,perks:_R}}}},bR={class:"education"},ER=h("h2",null,"WHY BLOOD?",-1),IR={class:"edu-div"},TR=["src"],CR={class:"edu-div-content"},SR=h("p",null,[h("b",null,"WHAT BLOOD TYPES MATCH?"),h("br"),be(" There are four main blood types: A, B, AB and O. Combinations of proteins and sugars, called antigens, on the surface of red blood cells are what makes the blood type either compatible or incompatible with other blood types.")],-1),AR=h("i",{class:"fas fa-arrow-right"},null,-1),kR=[AR],RR={class:"edu-div"},DR=["src"],PR={class:"edu-div-content"},NR=h("p",null,[h("b",null,"AM I ELIGIBLE TO DONATE?"),h("br"),be(" Curious about your eligibility to donate blood? Find out if you meet the criteria to make a life-saving contribution.")],-1),OR=h("i",{class:"fas fa-arrow-right"},null,-1),xR=[OR],MR={class:"edu-div"},LR=["src"],UR={class:"edu-div-content"},FR=h("p",null,[h("b",null,"MALAYSIAN BLOOD DONOR PRIVILEGES"),h("br"),be(" Donating blood just once can save up to 3 lives but did you know regular blood donors get special medical privileges in Malaysia? Click 'Learn More' to explore the health benefits and medical privileges given to blood donors in Malaysia.")],-1),$R=h("i",{class:"fas fa-arrow-right"},null,-1),BR=[$R],VR={class:"edu-div"},jR={class:"edu-div-content"},HR=h("p",null,[h("b",null,"FREQUENTLY ASKED QUESTIONS"),h("br"),be(" Answers to our most frequently asked questions are just one click away.")],-1);function qR(t,e,n,s,i,r){return O(),M("div",bR,[ER,h("div",IR,[h("img",{src:i.imagePaths.bloodType,alt:"Blood Type Image"},null,8,TR),h("div",CR,[SR,h("div",null,[h("button",{onClick:e[0]||(e[0]=(...o)=>r.goToBloodType&&r.goToBloodType(...o))},kR)])])]),h("div",RR,[h("img",{src:i.imagePaths.eligibility,alt:"Blood Donation Image"},null,8,DR),h("div",PR,[NR,h("div",null,[h("button",{onClick:e[1]||(e[1]=(...o)=>r.goToEligibility&&r.goToEligibility(...o))},xR)])])]),h("div",MR,[h("img",{src:i.imagePaths.perks,alt:"Body Checkup Image"},null,8,LR),h("div",UR,[FR,h("div",null,[h("button",{onClick:e[2]||(e[2]=(...o)=>r.goToPerks&&r.goToPerks(...o))},BR)])])]),h("div",VR,[h("div",jR,[HR,h("div",null,[h("button",{onClick:e[3]||(e[3]=(...o)=>r.goToFAQ&&r.goToFAQ(...o))},"Go to FAQ")])])])])}const zR=We(wR,[["render",qR]]),KR="/vitevue-project/assets/home-congrats-0dd25485.png";const WR={setup(){const t=In(!0);return cp(),{showNotice:t,closeNotice:()=>{t.value=!1}}},methods:{goToReadMorePage(){this.$router.push("/announcement")}},data(){return{imagePaths:{congrats:KR}}}},GR=ni('<div class="community"><div class="transition-text1"><h1 style="font-size:15px;font-weight:bold;background-color:#990000;color:white;border-radius:10px;padding:10px;"> Everyone has the power to save a life.</h1></div><div class="transition-text2"><h2 style="font-size:small;font-weight:bold;">Engage in an interactive experience that empowers you to aid yourself and others every day.</h2><br></div></div>',1),QR={class:"announce"},YR={key:0,class:"blur-background"},JR={key:0,class:"notice-container"},XR={class:"notice-content"},ZR=h("i",{class:"fa fa-close",style:{"font-size":"20px",color:"white"}},null,-1),eD=[ZR],tD=h("br",null,null,-1),nD=h("br",null,null,-1),sD=["src"],iD=h("h1",{style:{"font-weight":"bold","font-size":"15px"}},"Over 1 Million in funding for our local bank!",-1),rD=h("p",{style:{"font-size":"smaller","text-align":"justify","text-align-last":"center",padding:"20px",margin:"0"}},[h("b",null,"Dear community members,"),h("br"),be(" Thanks to your incredible support, we have surpassed a monumental milestone - over $1 million in funding for our local blood bank! Your generosity has directly impacted lives, providing life-saving blood products for critical treatments, transfusions, and surgeries. While we're grateful for your support, we still need 20,000 more blood packs to meet ongoing demand. Please consider donating blood or encouraging others to do so, as together we can make a positive impact. ")],-1),oD=h("br",null,null,-1);function aD(t,e,n,s,i,r){return O(),M("div",null,[GR,h("div",QR,[s.showNotice?(O(),M("div",YR,[s.showNotice?(O(),M("div",JR,[h("div",{class:Wt(["notice",{jump:s.showNotice}])},[h("div",XR,[h("button",{class:"close-button",onClick:e[0]||(e[0]=(...o)=>s.closeNotice&&s.closeNotice(...o))},eD),tD,nD,h("img",{src:i.imagePaths.congrats,alt:"Congrats Icon",style:{height:"50px"}},null,8,sD),iD,rD,oD,h("button",{class:"read-more-button",onClick:e[1]||(e[1]=(...o)=>r.goToReadMorePage&&r.goToReadMorePage(...o)),style:{"font-style":"italic",padding:"6px 15px","font-size":"small"}},"Read More")])],2)])):Fe("",!0)])):Fe("",!0)])])}const lD=We(WR,[["render",aD]]),cD="/vitevue-project/assets/home-search-8d38d673.png",uD="/vitevue-project/assets/home-edu-bb36347d.png",hD="/vitevue-project/assets/home-com-030b0423.png";const dD={components:{Community:lD},props:{displayName:{type:String,required:!0}},methods:{goToEducation(){this.$router.push("/education")},goToDiscover(){this.$router.push("/highlight")},goToCampaign(){this.$router.push("/campaign")},goToBloodType(){this.$router.push("/education/bloodtype")},goToEligibility(){this.$router.push("/education/eligibility")},goToPerks(){this.$router.push("/education/perks")},goToFAQ(){this.$router.push("/education/faq")}},data(){return{imagePaths:{bticon:Ey,eliicon:Iy,privileges:Ty,faqicon:by,eduIcon:uD,searchIcon:cD,poster:hD}}}},fD={class:"homecomm"},pD={class:"welcome"},gD=["src"],mD={style:{width:"100%"}},yD={style:{padding:"0","padding-right":"5px",width:"50%"}},vD=["src"],_D=h("p",{style:{"font-size":"medium","font-weight":"bold"}},"View Campaign",-1),wD={style:{padding:"0","padding-left":"5px",width:"50%"}},bD=["src"],ED=h("p",{style:{"font-size":"medium","font-weight":"bold"}},"View about Blood",-1),ID=h("br",null,null,-1),TD={class:"homenews"},CD={class:"homenewstitle"},SD=h("i",{class:"fas fa-angle-double-right"},null,-1),AD=ni('<div class="section"><a href="https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank"><img src="https://media.freemalaysiatoday.com/wp-content/uploads/2021/06/03-BLOOD-DONATION-.jpg" width="100%" height="100%"></a><h2>A guide to donating blood for the first time</h2><p><a href="https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank"> PETALING JAYA: Drawing blood may seem daunting to first-time donors, but rest assured it is a simple, quick and safe process that is capable of saving lives... <p><span class="click">(Click to read more)</span></p></a></p></div>',1),kD={class:"homeedu"},RD=h("h2",{style:{"text-align":"left","font-size":"medium"}},"WHY BLOOD?",-1),DD={width:"100%"},PD={width:"35px",style:{"text-align":"left"}},ND=["src"],OD=h("td",{style:{"text-align":"left"}},[h("p",null,"Matching Blood Types")],-1),xD=h("td",{style:{"text-align":"right"}},[h("button",null,[h("i",{class:"fas fa-arrow-right",style:{"font-size":"large"}})])],-1),MD={width:"100%"},LD={width:"35px",style:{"text-align":"left"}},UD=["src"],FD=h("td",{style:{"text-align":"left"}},[h("p",null,"Blood Donor Eligibility Criteria")],-1),$D=h("td",{style:{"text-align":"right"}},[h("button",null,[h("i",{class:"fas fa-arrow-right",style:{"font-size":"large"}})])],-1),BD={width:"100%"},VD={width:"35px",style:{"text-align":"left"}},jD=["src"],HD=h("td",{style:{"text-align":"left"}},[h("p",null,"Blood Donor Privileges")],-1),qD=h("td",{style:{"text-align":"right"}},[h("button",null,[h("i",{class:"fas fa-arrow-right",style:{"font-size":"large"}})])],-1),zD={width:"100%"},KD={width:"35px",style:{"text-align":"left"}},WD=["src"],GD=h("td",{style:{"text-align":"left"}},[h("p",null,"Frequently Asked Questions")],-1),QD=h("td",{style:{"text-align":"right"}},[h("button",null,[h("i",{class:"fas fa-arrow-right",style:{"font-size":"large"}})])],-1);function YD(t,e,n,s,i,r){const o=wc("Community");return O(),M("div",fD,[h("h2",pD,"Welcome, "+oe(n.displayName),1),h("img",{src:i.imagePaths.poster,alt:"Welcome Poster",style:{width:"100%","border-radius":"10px","box-shadow":"0 2px 4px rgba(0, 0, 0, 0.1)"}},null,8,gD),Ne(o),h("table",mD,[h("tr",null,[h("td",yD,[h("div",{class:"viewcamp",onClick:e[0]||(e[0]=(...a)=>r.goToCampaign&&r.goToCampaign(...a))},[h("img",{src:i.imagePaths.searchIcon,alt:"Search Icon",style:{height:"40px"}},null,8,vD),_D])]),h("td",wD,[h("div",{class:"createcamp",onClick:e[1]||(e[1]=(...a)=>r.goToEducation&&r.goToEducation(...a))},[h("img",{src:i.imagePaths.eduIcon,alt:"Knowledge Icon",style:{height:"40px"}},null,8,bD),ED])])])]),ID,h("div",TD,[h("h2",CD,[be("HIGHLIGHTS "),h("span",{style:{float:"right"},onClick:e[2]||(e[2]=(...a)=>r.goToDiscover&&r.goToDiscover(...a))},[be("See More "),SD])]),AD]),h("div",kD,[RD,h("div",{class:"content",onClick:e[3]||(e[3]=(...a)=>r.goToBloodType&&r.goToBloodType(...a))},[h("table",DD,[h("tr",null,[h("td",PD,[h("img",{src:i.imagePaths.bticon,alt:"Blood Type Icon"},null,8,ND)]),OD,xD])])]),h("div",{class:"content",onClick:e[4]||(e[4]=(...a)=>r.goToEligibility&&r.goToEligibility(...a))},[h("table",MD,[h("tr",null,[h("td",LD,[h("img",{src:i.imagePaths.eliicon,alt:"Eligibility Icon"},null,8,UD)]),FD,$D])])]),h("div",{class:"content",onClick:e[5]||(e[5]=(...a)=>r.goToPerks&&r.goToPerks(...a))},[h("table",BD,[h("tr",null,[h("td",VD,[h("img",{src:i.imagePaths.privileges,alt:"Privilege Icon"},null,8,jD)]),HD,qD])])]),h("div",{class:"content",onClick:e[6]||(e[6]=(...a)=>r.goToFAQ&&r.goToFAQ(...a))},[h("table",zD,[h("tr",null,[h("td",KD,[h("img",{src:i.imagePaths.faqicon,alt:"FAQ Icon"},null,8,WD)]),GD,QD])])])])])}const JD=We(dD,[["render",YD]]);const XD={data(){return{name:"",phone:"",email:"",street:"",city:"",state:"",postalcode:"",message:"",campname:"",info:"",startDate:"",endDate:"",time1:"",time2:"",venue:"",successMessage:""}},methods:{async submitForm(){const t={Name:this.name,Phone:this.phone,Email:this.email,Street:this.street,City:this.city,State:this.state,PostalCode:this.postalcode,Message:this.message,CampName:this.campname,Information:this.info,StartDate:this.startDate,EndDate:this.endDate,StartTime:this.time1,EndTime:this.time2,Venue:this.venue};try{const e=Da();await qS(RS(e,"Apply2"),t),this.name="",this.phone="",this.email="",this.street="",this.city="",this.state="",this.postalcode="",this.message="",this.campname="",this.info="",this.startDate="",this.endDate="",this.time1="",this.time2="",this.venue="",this.successMessage="Form submitted successfully!"}catch(e){console.error("Error writing document: ",e)}}}},ZD={class:"organization"},eP=h("h2",null,"Create a Campaign",-1),tP=h("p",{class:"description"},[be(" We welcome collaboration with any organization to do blood donation campaign."),h("br"),be(" Fill in the form below to create a new blood donation campaign. Provide detailed information about your campaign and its objectives. This will help users understand the purpose and goals of your campaign. Make sure to fill in all the required fields. ")],-1),nP={class:"formdiv"},sP=h("label",{for:"name"},"Hospital Name:",-1),iP=h("br",null,null,-1),rP=h("label",{for:"phone"},"Phone:",-1),oP=h("br",null,null,-1),aP=h("label",{for:"email"},"Email:",-1),lP=h("small",null,"example@example.com",-1),cP=h("br",null,null,-1),uP=h("p",{style:{"font-weight":"bold",margin:"0"}},"Location",-1),hP=h("label",{for:"street"},"Street:",-1),dP=h("br",null,null,-1),fP=h("label",{for:"city"},"City:",-1),pP=h("br",null,null,-1),gP=h("label",{for:"state"},"State:",-1),mP=h("br",null,null,-1),yP=h("label",{for:"postalCode"},"Postal Code:",-1),vP=h("br",null,null,-1),_P=h("label",{for:"message"},"Message:",-1),wP=h("br",null,null,-1),bP=h("p",{style:{"font-weight":"bold",margin:"0"}},"Campaign",-1),EP=h("label",{for:"campname"},"Camp Name:",-1),IP=h("br",null,null,-1),TP=h("label",{for:"info"},"Camp Information:",-1),CP=h("br",null,null,-1),SP=h("label",{for:"startDate"},"Start Date of the Campaign:",-1),AP=h("br",null,null,-1),kP=h("label",{for:"endDate"},"End Date of the Campaign:",-1),RP=h("br",null,null,-1),DP=h("label",{for:"time1"},"Time Start:",-1),PP=h("br",null,null,-1),NP=h("label",{for:"time2"},"Time End:",-1),OP=h("br",null,null,-1),xP=h("label",{for:"venue"},"Campaign Venue:",-1),MP=h("br",null,null,-1),LP=h("div",{class:"button"},[h("button",{type:"submit",id:"submit"},"Submit")],-1),UP={key:0,class:"success-message"};function FP(t,e,n,s,i,r){return O(),M("div",ZD,[eP,tP,h("div",nP,[h("form",{onSubmit:e[15]||(e[15]=Xo((...o)=>r.submitForm&&r.submitForm(...o),["prevent"])),class:"form"},[sP,te(h("input",{type:"text",placeholder:"Hospital Name",id:"name","onUpdate:modelValue":e[0]||(e[0]=o=>i.name=o),required:""},null,512),[[re,i.name]]),iP,rP,te(h("input",{type:"tel",placeholder:"Phone",id:"phone","onUpdate:modelValue":e[1]||(e[1]=o=>i.phone=o),required:""},null,512),[[re,i.phone]]),oP,aP,te(h("input",{type:"email",placeholder:"Email",id:"email","onUpdate:modelValue":e[2]||(e[2]=o=>i.email=o),required:""},null,512),[[re,i.email]]),lP,cP,uP,hP,te(h("input",{type:"text",placeholder:"Street",id:"street","onUpdate:modelValue":e[3]||(e[3]=o=>i.street=o),required:""},null,512),[[re,i.street]]),dP,fP,te(h("input",{type:"text",placeholder:"City",id:"city","onUpdate:modelValue":e[4]||(e[4]=o=>i.city=o),required:""},null,512),[[re,i.city]]),pP,gP,te(h("input",{type:"text",placeholder:"State",id:"state","onUpdate:modelValue":e[5]||(e[5]=o=>i.state=o),required:""},null,512),[[re,i.state]]),mP,yP,te(h("input",{type:"text",placeholder:"Postal Code",id:"postalCode","onUpdate:modelValue":e[6]||(e[6]=o=>i.postalcode=o),required:""},null,512),[[re,i.postalcode]]),vP,_P,te(h("textarea",{id:"message",placeholder:"Leave your message here..","onUpdate:modelValue":e[7]||(e[7]=o=>i.message=o)},null,512),[[re,i.message]]),wP,bP,EP,te(h("input",{type:"text",placeholder:"Camp Name",id:"campname","onUpdate:modelValue":e[8]||(e[8]=o=>i.campname=o),required:""},null,512),[[re,i.campname]]),IP,TP,te(h("input",{type:"text",placeholder:"Camp Information",id:"info","onUpdate:modelValue":e[9]||(e[9]=o=>i.info=o),required:""},null,512),[[re,i.info]]),CP,SP,te(h("input",{type:"date",id:"startDate","onUpdate:modelValue":e[10]||(e[10]=o=>i.startDate=o),required:""},null,512),[[re,i.startDate]]),AP,kP,te(h("input",{type:"date",id:"endDate","onUpdate:modelValue":e[11]||(e[11]=o=>i.endDate=o),required:""},null,512),[[re,i.endDate]]),RP,DP,te(h("input",{type:"time",id:"time1","onUpdate:modelValue":e[12]||(e[12]=o=>i.time1=o),required:""},null,512),[[re,i.time1]]),PP,NP,te(h("input",{type:"time",id:"time2","onUpdate:modelValue":e[13]||(e[13]=o=>i.time2=o),required:""},null,512),[[re,i.time2]]),OP,xP,te(h("input",{type:"text",placeholder:"Full address",id:"venue","onUpdate:modelValue":e[14]||(e[14]=o=>i.venue=o),required:""},null,512),[[re,i.venue]]),MP,LP,i.successMessage?(O(),M("p",UP,oe(i.successMessage),1)):Fe("",!0)],32)])])}const $P=We(XD,[["render",FP]]);const BP={name:"Discover"},VP={class:"discover"},jP=ni('<h1>DISCOVER NEWS HERE</h1><div class="section"><a href="https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank"><img src="https://media.freemalaysiatoday.com/wp-content/uploads/2021/06/03-BLOOD-DONATION-.jpg" width="100%" height="100%"></a><h2>A guide to donating blood for the first time</h2><p><a href="https://www.freemalaysiatoday.com/category/leisure/2021/08/10/a-guide-to-donating-blood-for-the-first-time/" target="_blank"> PETALING JAYA: Drawing blood may seem daunting to first-time donors, but rest assured it is a simple, quick and safe process that is capable of saving lives. While blood banks have continued to operate as an essential service in the past two years, National Blood Centre director Dr Noryati Abu Amin said there were additional safety measures in place to minimise the risk of Covid-19. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.thestar.com.my/news/nation/2023/06/18/gift-of-life-more-than-700000-bags-of-blood-donated-in-2022-says-health-dg" target="_blank"><img src="https://apicms.thestar.com.my/uploads/images/2023/06/18/2131729.jpg" width="100%" height="100%"></a><h2>Gift of life: More than 700,000 bags of blood donated in 2022, says Health DG</h2><p><a href="https://www.thestar.com.my/news/nation/2023/06/18/gift-of-life-more-than-700000-bags-of-blood-donated-in-2022-says-health-dg" target="_blank"> JOHOR BARU: More than 700,000 bags of blood were donated to blood banks nationwide last year, says Datuk Dr Muhammad Radzi Abu Hassan. The Health director-general said this was an increase of about 13.7% from previous years. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.nst.com.my/news/nation/2022/12/859167/retired-teacher-70-makes-final-blood-donation-356th-time" target="_blank"><img src="https://assets.nst.com.my/images/articles/315890948_510411854460227_6907366706555040351_n_1670548888.jpg" width="100%" height="100%"></a><h2>Retired teacher, 70, makes final blood donation for 356th time</h2><p><a href="https://www.nst.com.my/news/nation/2022/12/859167/retired-teacher-70-makes-final-blood-donation-356th-time" target="_blank"> KUALA LUMPUR: Retired teacher Lum Kien Seng went to donate his blood for the the 356th time last week, and the final one for he can no longer do so due to his age. Lum, now aged 70, said he felt proud to be able to help save many lives through his effort for the past 34 years. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.nst.com.my/news/nation/2023/06/921576/health-ministry-sets-blood-donation-rate-35-40-donors-1000-population" target="_blank"><img src="https://assets.nst.com.my/images/articles/zonblood2_1687096260.jpg" width="100%" height="100%"></a><h2>Health Ministry sets blood donation rate of 35 to 40 donors per 1,000 population by 2030</h2><p><a href="https://www.nst.com.my/news/nation/2023/06/921576/health-ministry-sets-blood-donation-rate-35-40-donors-1000-population" target="_blank"> JOHOR BARU: The Health Ministry through its Transfusion Medicine Services is targeting a national blood donation rate of 35 to 40 donors per 1,000 population by the year 2030. Health director-general Datuk Dr Muhammad Radzi Abu Hassan said the target was to meet patient care needs in line with the annual population growth rate in Malaysia. <p><span class="click">(Click to read more)</span></p></a></p></div><div class="section"><a href="https://www.thestar.com.my/metro/metro-news/2023/04/06/on-mission-to-boost-blood-donor-numbers" target="_blank"><img src="https://apicms.thestar.com.my/uploads/images/2023/04/06/2011293.jpg" width="100%" height="100%"></a><h2>On mission to boost blood donor numbers</h2><p><a href="https://www.thestar.com.my/metro/metro-news/2023/04/06/on-mission-to-boost-blood-donor-numbers" target="_blank"> Petaling Jaya City Council (MBPJ) and the National Blood Centre (PDN) launched their first blood donation campaign with the theme “Donating blood is a noble practice” at the city council’s headquarters. <p><span class="click">(Click to read more)</span></p></a></p></div>',6),HP=[jP];function qP(t,e,n,s,i,r){return O(),M("div",VP,HP)}const zP=We(BP,[["render",qP]]);const KP={data(){return{name2:"",phone2:"",email2:"",message2:"",successMessage:""}},methods:{submitForm(){const t={Name2:this.name2,Phone2:this.phone2,Email2:this.email2,Message2:this.message2},e=Da();gy(cr(e,"contact",t.Name2),t).then(()=>{this.name2="",this.phone2="",this.email2="",this.message2="",this.successMessage="Your message sent successfully! We will reply to you within 2 to 3 days."}).catch(n=>{console.error("Error writing document: ",n)})}}},WP={class:"contact"},GP=h("h2",null,"Contact Us",-1),QP=h("p",{class:"description"},"We'd love to get in touch and learn more about you. So, send us a message and we'll reply as fast as we can.",-1),YP={class:"formdiv"},JP=h("label",{for:"name2"},"Name:",-1),XP=h("label",{for:"phone2"},"Phone:",-1),ZP=h("label",{for:"email2"},"Email:",-1),eN=h("small",null,"example@example.com",-1),tN=h("label",{for:"message2"},"Question:",-1),nN=h("div",{class:"button"},[h("button",{type:"submit",id:"submit"},"Submit")],-1),sN={key:0,class:"success-message"};function iN(t,e,n,s,i,r){return O(),M("div",WP,[GP,QP,h("div",YP,[h("form",{onSubmit:e[4]||(e[4]=Xo((...o)=>r.submitForm&&r.submitForm(...o),["prevent"])),class:"form"},[JP,te(h("input",{type:"text",placeholder:"Name",id:"name2","onUpdate:modelValue":e[0]||(e[0]=o=>i.name2=o),required:""},null,512),[[re,i.name2]]),XP,te(h("input",{type:"tel",placeholder:"Phone",id:"phone2","onUpdate:modelValue":e[1]||(e[1]=o=>i.phone2=o),required:""},null,512),[[re,i.phone2]]),ZP,te(h("input",{type:"email",placeholder:"Email",id:"email2","onUpdate:modelValue":e[2]||(e[2]=o=>i.email2=o),required:""},null,512),[[re,i.email2]]),eN,tN,te(h("textarea",{id:"message2",placeholder:"Write your qeustions here..","onUpdate:modelValue":e[3]||(e[3]=o=>i.message2=o)},null,512),[[re,i.message2]]),nN,i.successMessage?(O(),M("p",sN,oe(i.successMessage),1)):Fe("",!0)],32)])])}const rN=We(KP,[["render",iN]]);const oN={setup(){const t=In(null),e=In(!1),n=In(null),s=In(!1);_c(async()=>{console.log("Component has been mounted");try{const l=cr(nf,"SignUpDetails",Nn.currentUser.uid),c=await VS(l);c.exists()?(t.value={id:c.id,...c.data()},n.value={...t.value}):console.log("No such user!")}catch(l){console.log("Error fetching user:",l)}});const i=()=>{e.value=!0,s.value=!1,console.log("Editing mode activated.")},r=()=>{e.value=!1,n.value={...t.value},console.log("Editing mode cancelled.")},o=async()=>{try{const l=cr(nf,"SignUpDetails",Nn.currentUser.uid);n.value.calculatedBmi=a.value,await HS(l,n.value),t.value={...n.value},e.value=!1,s.value=!0,await yc(),setTimeout(()=>{s.value=!1},3e3)}catch(l){console.log("Error updating user:",l)}},a=yt(()=>{if(n.value&&n.value.height&&n.value.weight){const l=n.value.height/100;return(n.value.weight/l**2).toFixed(2)}return"Not available"});return{user:t,editing:e,editedUser:n,editUser:i,cancelEdit:r,updateUser:o,successMessage:s,calculatedBmi:a}}},aN={class:"profile"},lN={key:0},cN={style:{float:"right"}},uN=h("i",{class:"fas fa-edit"},null,-1),hN=[uN],dN=h("i",{class:"fas fa-save"},null,-1),fN=[dN],pN=h("i",{class:"fa fa-close"},null,-1),gN=[pN],mN={class:"table",style:{width:"100%"}},yN=h("tr",null,[h("th",null,"Name")],-1),vN={key:1},_N=h("tr",null,[h("th",null,"Email")],-1),wN=h("tr",null,[h("th",null,"Mobile Number")],-1),bN=ni('<option value="+60">+60</option><option value="+65">+65</option><option value="+62">+62</option><option value="+880">+880</option><option value="+95">+95</option><option value="+977">+977</option><option value="+91">+91</option>',7),EN=[bN],IN={key:2},TN=h("tr",null,[h("th",null,"Gender")],-1),CN=h("option",{value:"Male"},"Male",-1),SN=h("option",{value:"Female"},"Female",-1),AN=[CN,SN],kN={key:1},RN=h("tr",null,[h("th",null,"Date of birth")],-1),DN={key:1},PN=h("br",null,null,-1),NN={class:"table",style:{width:"100%"}},ON=h("tr",null,[h("th",{style:{"text-align":"left"}},"Health Records ")],-1),xN=h("tr",null,[h("th",null,"Weight")],-1),MN={key:0},LN={key:1},UN=h("tr",null,[h("th",null,"Height")],-1),FN={key:2},$N={key:3},BN=h("tr",null,[h("th",null,"BMI")],-1),VN={key:4},jN={key:5},HN={class:"success-message-holder"},qN={key:0,class:"success-message"};function zN(t,e,n,s,i,r){return O(),M("div",aN,[s.user?(O(),M("div",lN,[h("h2",null,[be("Profile "),h("span",cN,[s.editing?Fe("",!0):(O(),M("button",{key:0,onClick:e[0]||(e[0]=(...o)=>s.editUser&&s.editUser(...o))},hN)),s.editing?(O(),M("button",{key:1,onClick:e[1]||(e[1]=(...o)=>s.updateUser&&s.updateUser(...o))},fN)):Fe("",!0),s.editing?(O(),M("button",{key:2,onClick:e[2]||(e[2]=(...o)=>s.cancelEdit&&s.cancelEdit(...o))},gN)):Fe("",!0)])]),h("table",mN,[yN,h("tr",null,[h("td",null,[s.editing?te((O(),M("input",{key:0,type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>s.editedUser.username=o)},null,512)),[[re,s.editedUser.username]]):(O(),M("span",vN,oe(s.user.username),1))])]),_N,h("tr",null,[h("td",null,oe(s.user.email),1)]),wN,h("tr",null,[h("td",null,[s.editing?te((O(),M("select",{key:0,"onUpdate:modelValue":e[4]||(e[4]=o=>s.editedUser.countryCode=o)},EN,512)),[[El,s.editedUser.countryCode]]):Fe("",!0),s.editing?te((O(),M("input",{key:1,type:"number","onUpdate:modelValue":e[5]||(e[5]=o=>s.editedUser.phone=o),maxlength:"10"},null,512)),[[re,s.editedUser.phone]]):(O(),M("span",IN,oe(s.user.countryCode)+oe(s.user.phone),1))])]),TN,h("tr",null,[h("td",null,[s.editing?te((O(),M("select",{key:0,"onUpdate:modelValue":e[6]||(e[6]=o=>s.editedUser.gender=o)},AN,512)),[[El,s.editedUser.gender]]):(O(),M("span",kN,oe(s.user.gender),1))])]),RN,h("tr",null,[h("td",null,[s.editing?te((O(),M("input",{key:0,type:"date","onUpdate:modelValue":e[7]||(e[7]=o=>s.editedUser.dob=o)},null,512)),[[re,s.editedUser.dob]]):(O(),M("span",DN,oe(s.user.dob),1))])])]),PN,h("table",NN,[ON,xN,s.editing?(O(),M("tr",MN,[h("td",null,[te(h("input",{type:"number","onUpdate:modelValue":e[8]||(e[8]=o=>s.editedUser.weight=o)},null,512),[[re,s.editedUser.weight]])])])):(O(),M("tr",LN,[h("td",null,[h("span",null,oe(s.user.weight)+" kg",1)])])),UN,s.editing?(O(),M("tr",FN,[h("td",null,[te(h("input",{type:"number","onUpdate:modelValue":e[9]||(e[9]=o=>s.editedUser.height=o)},null,512),[[re,s.editedUser.height]])])])):(O(),M("tr",$N,[h("td",null,[h("span",null,oe(s.user.height)+" cm",1)])])),BN,s.editing?(O(),M("tr",VN,[h("td",null,[h("span",null,oe(s.calculatedBmi),1)])])):(O(),M("tr",jN,[h("td",null,[h("span",null,oe(s.user.calculatedBmi),1)])]))]),h("p",HN,[s.successMessage?(O(),M("span",qN,"Profile updated successfully!")):Fe("",!0)])])):Fe("",!0)])}const KN=We(oN,[["render",zN]]),WN="/vitevue-project/assets/onemillion-cf95bdff.gif";const GN={},QN={class:"announcement"},YN=ni('<h1> 🩸 Celebrating Over $1 Million in Funding for Our Local Blood Bank!</h1><hr><p style="font-style:italic;font-size:small;"> Published by <b class="bold">Finance of Blood Camp Community </b><br><b>Date: 30 June 2023</b></p><br><div style="text-align:center;"><img src="'+WN+'" alt="One Million" style="border-radius:5px;width:80%;"></div><p>The Finance of Blood Camp Community thrilled to share some incredible news with all of you - we have reached a momentous milestone in our mission to support the health and well-being of our community. Thanks to your overwhelming generosity and unwavering support, we have successfully surpassed the astounding goal of $1 million in funding for our local blood bank!</p><br><p>This is an extraordinary achievement that highlights the true spirit and compassion of our community. Your contributions, whether big or small, have made an immeasurable difference in the lives of countless individuals who depend on life-saving blood products for critical treatments, transfusions, and surgeries. Each donation has the power to save lives and provide hope for those facing medical challenges.</p><br><p>We want to express our deepest gratitude to each and every one of you who has contributed to this monumental milestone. Your kindness and generosity have not only transformed our blood bank but have also left an indelible mark on the hearts of those you have helped. Together, we have become beacons of hope for those in need, shining a light on the power of community support.</p><br><p>While we pause to celebrate this incredible achievement, we must also remember that the need for blood remains constant. Our mission is not yet complete. In order to meet the ongoing demand for blood products, we must continue our efforts. We are still in need of approximately 20,000 more blood packs to ensure that we can provide for all those who require life-saving transfusions.</p><br><p>We implore you to consider donating blood if you are eligible or to encourage others in our community to do so. Your selfless act of donating blood can truly make a positive impact and help save lives. It is through the collective efforts of individuals like you that we can continue to support our community and ensure that no one is left without the vital blood products they need.</p><br><p>We understand that not everyone may be able to donate blood, but there are other ways to contribute. You can help us spread the word by sharing this announcement with your friends, family, and colleagues, encouraging them to get involved and make a difference. Together, we can amplify our impact and reach even more people who may be able to help.</p><br><p>Let us continue to stand together as a community, united in our mission to support one another. Your continued support and dedication are the driving forces behind our success. We have already achieved so much, and with your help, we can accomplish even more.</p><br><p>Once again, thank you for your incredible generosity and for being the pillars of strength and compassion in our community. Together, we are making a profound difference and saving lives. Let us keep pushing forward, embracing the power of unity, and building a brighter and healthier future for all.</p><br><p style="font-weight:bold;">Regards,</p><p style="font-weight:bold;font-style:italic;">Financial Analyst,<br> Blood Camp Community<br></p>',23),JN=[YN];function XN(t,e){return O(),M("div",QN,JN)}const ZN=We(GN,[["render",XN]]),eO=X0({history:p0(),scrollBehavior(t,e,n){return n||{top:0}},routes:[{path:"/home",component:JD},{path:"/organization",component:$P},{path:"/highlight",component:zP},{path:"/education",component:zR},{path:"/education/bloodtype",component:gk},{path:"/education/faq",component:nk},{path:"/education/eligibility",component:h2},{path:"/education/perks",component:T2},{path:"/campaign",component:mR},{path:"/education/faq/contact",component:rN},{path:"/profile",component:KN},{path:"/announcement",component:ZN}]}),Cy=Q_(FA);Cy.use(eO);Cy.mount("#app");
