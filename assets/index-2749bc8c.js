(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Wr(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const K={},en=[],Ne=()=>{},mh=()=>!1,_h=/^on[^a-z]/,ds=e=>_h.test(e),Kr=e=>e.startsWith("onUpdate:"),le=Object.assign,zr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yh=Object.prototype.hasOwnProperty,U=(e,t)=>yh.call(e,t),k=Array.isArray,tn=e=>ps(e)==="[object Map]",Ol=e=>ps(e)==="[object Set]",L=e=>typeof e=="function",te=e=>typeof e=="string",qr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Pl=e=>J(e)&&L(e.then)&&L(e.catch),kl=Object.prototype.toString,ps=e=>kl.call(e),vh=e=>ps(e).slice(8,-1),Dl=e=>ps(e)==="[object Object]",Gr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ui=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ih=/-(\w)/g,ze=gs(e=>e.replace(Ih,(t,n)=>n?n.toUpperCase():"")),wh=/\B([A-Z])/g,gn=gs(e=>e.replace(wh,"-$1").toLowerCase()),ms=gs(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ws=gs(e=>e?`on${ms(e)}`:""),zi=(e,t)=>!Object.is(e,t),Fi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},qi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},fr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let aa;const dr=()=>aa||(aa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(e){if(k(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=te(i)?bh(i):Jr(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(te(e))return e;if(J(e))return e}}const Eh=/;(?![^(]*\))/g,Th=/:([^]+)/,Ah=/\/\*[^]*?\*\//g;function bh(e){const t={};return e.replace(Ah,"").split(Eh).forEach(n=>{if(n){const i=n.split(Th);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Xr(e){let t="";if(te(e))t=e;else if(k(e))for(let n=0;n<e.length;n++){const i=Xr(e[n]);i&&(t+=i+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ch="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sh=Wr(Ch);function Nl(e){return!!e||e===""}const Rh=e=>te(e)?e:e==null?"":k(e)||J(e)&&(e.toString===kl||!L(e.toString))?JSON.stringify(e,Ll,2):String(e),Ll=(e,t)=>t&&t.__v_isRef?Ll(e,t.value):tn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Ol(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!k(t)&&!Dl(t)?String(t):t;let Oe;class Oh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ph(e,t=Oe){t&&t.active&&t.effects.push(e)}function kh(){return Oe}const Yr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ml=e=>(e.w&wt)>0,xl=e=>(e.n&wt)>0,Dh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=wt},Nh=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];Ml(s)&&!xl(s)?s.delete(e):t[n++]=s,s.w&=~wt,s.n&=~wt}t.length=n}},pr=new WeakMap;let Pn=0,wt=1;const gr=30;let ke;const xt=Symbol(""),mr=Symbol("");class Qr{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ph(this,i)}run(){if(!this.active)return this.fn();let t=ke,n=mt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ke,ke=this,mt=!0,wt=1<<++Pn,Pn<=gr?Dh(this):la(this),this.fn()}finally{Pn<=gr&&Nh(this),wt=1<<--Pn,ke=this.parent,mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ke===this?this.deferStop=!0:this.active&&(la(this),this.onStop&&this.onStop(),this.active=!1)}}function la(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let mt=!0;const Ul=[];function mn(){Ul.push(mt),mt=!1}function _n(){const e=Ul.pop();mt=e===void 0?!0:e}function we(e,t,n){if(mt&&ke){let i=pr.get(e);i||pr.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=Yr()),Fl(s)}}function Fl(e,t){let n=!1;Pn<=gr?xl(e)||(e.n|=wt,n=!Ml(e)):n=!e.has(ke),n&&(e.add(ke),ke.deps.push(e))}function it(e,t,n,i,s,r){const o=pr.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&k(e)){const l=Number(i);o.forEach((c,f)=>{(f==="length"||f>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":k(e)?Gr(n)&&a.push(o.get("length")):(a.push(o.get(xt)),tn(e)&&a.push(o.get(mr)));break;case"delete":k(e)||(a.push(o.get(xt)),tn(e)&&a.push(o.get(mr)));break;case"set":tn(e)&&a.push(o.get(xt));break}if(a.length===1)a[0]&&_r(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);_r(Yr(l))}}function _r(e,t){const n=k(e)?e:[...e];for(const i of n)i.computed&&ca(i);for(const i of n)i.computed||ca(i)}function ca(e,t){(e!==ke||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Lh=Wr("__proto__,__v_isRef,__isVue"),jl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qr)),Mh=Zr(),xh=Zr(!1,!0),Uh=Zr(!0),ua=Fh();function Fh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=B(this);for(let r=0,o=this.length;r<o;r++)we(i,"get",r+"");const s=i[t](...n);return s===-1||s===!1?i[t](...n.map(B)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){mn();const i=B(this)[t].apply(this,n);return _n(),i}}),e}function jh(e){const t=B(this);return we(t,"has",e),t.hasOwnProperty(e)}function Zr(e=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?tf:Wl:t?Vl:Hl).get(i))return i;const o=k(i);if(!e){if(o&&U(ua,s))return Reflect.get(ua,s,r);if(s==="hasOwnProperty")return jh}const a=Reflect.get(i,s,r);return(qr(s)?jl.has(s):Lh(s))||(e||we(i,"get",s),t)?a:ye(a)?o&&Gr(s)?a:a.value:J(a)?e?Kl(a):no(a):a}}const Bh=Bl(),$h=Bl(!0);function Bl(e=!1){return function(n,i,s,r){let o=n[i];if(Vn(o)&&ye(o)&&!ye(s))return!1;if(!e&&(!yr(s)&&!Vn(s)&&(o=B(o),s=B(s)),!k(n)&&ye(o)&&!ye(s)))return o.value=s,!0;const a=k(n)&&Gr(i)?Number(i)<n.length:U(n,i),l=Reflect.set(n,i,s,r);return n===B(r)&&(a?zi(s,o)&&it(n,"set",i,s):it(n,"add",i,s)),l}}function Hh(e,t){const n=U(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&it(e,"delete",t,void 0),i}function Vh(e,t){const n=Reflect.has(e,t);return(!qr(t)||!jl.has(t))&&we(e,"has",t),n}function Wh(e){return we(e,"iterate",k(e)?"length":xt),Reflect.ownKeys(e)}const $l={get:Mh,set:Bh,deleteProperty:Hh,has:Vh,ownKeys:Wh},Kh={get:Uh,set(e,t){return!0},deleteProperty(e,t){return!0}},zh=le({},$l,{get:xh,set:$h}),eo=e=>e,_s=e=>Reflect.getPrototypeOf(e);function Ci(e,t,n=!1,i=!1){e=e.__v_raw;const s=B(e),r=B(t);n||(t!==r&&we(s,"get",t),we(s,"get",r));const{has:o}=_s(s),a=i?eo:n?ro:so;if(o.call(s,t))return a(e.get(t));if(o.call(s,r))return a(e.get(r));e!==s&&e.get(t)}function Si(e,t=!1){const n=this.__v_raw,i=B(n),s=B(e);return t||(e!==s&&we(i,"has",e),we(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Ri(e,t=!1){return e=e.__v_raw,!t&&we(B(e),"iterate",xt),Reflect.get(e,"size",e)}function ha(e){e=B(e);const t=B(this);return _s(t).has.call(t,e)||(t.add(e),it(t,"add",e,e)),this}function fa(e,t){t=B(t);const n=B(this),{has:i,get:s}=_s(n);let r=i.call(n,e);r||(e=B(e),r=i.call(n,e));const o=s.call(n,e);return n.set(e,t),r?zi(t,o)&&it(n,"set",e,t):it(n,"add",e,t),this}function da(e){const t=B(this),{has:n,get:i}=_s(t);let s=n.call(t,e);s||(e=B(e),s=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return s&&it(t,"delete",e,void 0),r}function pa(){const e=B(this),t=e.size!==0,n=e.clear();return t&&it(e,"clear",void 0,void 0),n}function Oi(e,t){return function(i,s){const r=this,o=r.__v_raw,a=B(o),l=t?eo:e?ro:so;return!e&&we(a,"iterate",xt),o.forEach((c,f)=>i.call(s,l(c),l(f),r))}}function Pi(e,t,n){return function(...i){const s=this.__v_raw,r=B(s),o=tn(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...i),f=n?eo:t?ro:so;return!t&&we(r,"iterate",l?mr:xt),{next(){const{value:p,done:I}=c.next();return I?{value:p,done:I}:{value:a?[f(p[0]),f(p[1])]:f(p),done:I}},[Symbol.iterator](){return this}}}}function ct(e){return function(...t){return e==="delete"?!1:this}}function qh(){const e={get(r){return Ci(this,r)},get size(){return Ri(this)},has:Si,add:ha,set:fa,delete:da,clear:pa,forEach:Oi(!1,!1)},t={get(r){return Ci(this,r,!1,!0)},get size(){return Ri(this)},has:Si,add:ha,set:fa,delete:da,clear:pa,forEach:Oi(!1,!0)},n={get(r){return Ci(this,r,!0)},get size(){return Ri(this,!0)},has(r){return Si.call(this,r,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:Oi(!0,!1)},i={get(r){return Ci(this,r,!0,!0)},get size(){return Ri(this,!0)},has(r){return Si.call(this,r,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:Oi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Pi(r,!1,!1),n[r]=Pi(r,!0,!1),t[r]=Pi(r,!1,!0),i[r]=Pi(r,!0,!0)}),[e,n,t,i]}const[Gh,Jh,Xh,Yh]=qh();function to(e,t){const n=t?e?Yh:Xh:e?Jh:Gh;return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(U(n,s)&&s in i?n:i,s,r)}const Qh={get:to(!1,!1)},Zh={get:to(!1,!0)},ef={get:to(!0,!1)},Hl=new WeakMap,Vl=new WeakMap,Wl=new WeakMap,tf=new WeakMap;function nf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sf(e){return e.__v_skip||!Object.isExtensible(e)?0:nf(vh(e))}function no(e){return Vn(e)?e:io(e,!1,$l,Qh,Hl)}function rf(e){return io(e,!1,zh,Zh,Vl)}function Kl(e){return io(e,!0,Kh,ef,Wl)}function io(e,t,n,i,s){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const o=sf(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return s.set(e,a),a}function nn(e){return Vn(e)?nn(e.__v_raw):!!(e&&e.__v_isReactive)}function Vn(e){return!!(e&&e.__v_isReadonly)}function yr(e){return!!(e&&e.__v_isShallow)}function zl(e){return nn(e)||Vn(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function ql(e){return qi(e,"__v_skip",!0),e}const so=e=>J(e)?no(e):e,ro=e=>J(e)?Kl(e):e;function of(e){mt&&ke&&(e=B(e),Fl(e.dep||(e.dep=Yr())))}function af(e,t){e=B(e);const n=e.dep;n&&_r(n)}function ye(e){return!!(e&&e.__v_isRef===!0)}function lf(e){return ye(e)?e.value:e}const cf={get:(e,t,n)=>lf(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function Gl(e){return nn(e)?e:new Proxy(e,cf)}class uf{constructor(t,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Qr(t,()=>{this._dirty||(this._dirty=!0,af(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=B(this);return of(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function hf(e,t,n=!1){let i,s;const r=L(e);return r?(i=e,s=Ne):(i=e.get,s=e.set),new uf(i,s,r||!s,n)}function _t(e,t,n,i){let s;try{s=i?e(...i):e()}catch(r){ys(r,t,n)}return s}function Le(e,t,n,i){if(L(e)){const r=_t(e,t,n,i);return r&&Pl(r)&&r.catch(o=>{ys(o,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(Le(e[r],t,n,i));return s}function ys(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){_t(l,null,10,[e,o,a]);return}}ff(e,n,s,i)}function ff(e,t,n,i=!0){console.error(e)}let Wn=!1,vr=!1;const ue=[];let Be=0;const sn=[];let Qe=null,kt=0;const Jl=Promise.resolve();let oo=null;function df(e){const t=oo||Jl;return e?t.then(this?e.bind(this):e):t}function pf(e){let t=Be+1,n=ue.length;for(;t<n;){const i=t+n>>>1;Kn(ue[i])<e?t=i+1:n=i}return t}function ao(e){(!ue.length||!ue.includes(e,Wn&&e.allowRecurse?Be+1:Be))&&(e.id==null?ue.push(e):ue.splice(pf(e.id),0,e),Xl())}function Xl(){!Wn&&!vr&&(vr=!0,oo=Jl.then(Ql))}function gf(e){const t=ue.indexOf(e);t>Be&&ue.splice(t,1)}function mf(e){k(e)?sn.push(...e):(!Qe||!Qe.includes(e,e.allowRecurse?kt+1:kt))&&sn.push(e),Xl()}function ga(e,t=Wn?Be+1:0){for(;t<ue.length;t++){const n=ue[t];n&&n.pre&&(ue.splice(t,1),t--,n())}}function Yl(e){if(sn.length){const t=[...new Set(sn)];if(sn.length=0,Qe){Qe.push(...t);return}for(Qe=t,Qe.sort((n,i)=>Kn(n)-Kn(i)),kt=0;kt<Qe.length;kt++)Qe[kt]();Qe=null,kt=0}}const Kn=e=>e.id==null?1/0:e.id,_f=(e,t)=>{const n=Kn(e)-Kn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ql(e){vr=!1,Wn=!0,ue.sort(_f);const t=Ne;try{for(Be=0;Be<ue.length;Be++){const n=ue[Be];n&&n.active!==!1&&_t(n,null,14)}}finally{Be=0,ue.length=0,Yl(),Wn=!1,oo=null,(ue.length||sn.length)&&Ql()}}function yf(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||K;let s=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:I}=i[f]||K;I&&(s=n.map(b=>te(b)?b.trim():b)),p&&(s=n.map(fr))}let a,l=i[a=Ws(t)]||i[a=Ws(ze(t))];!l&&r&&(l=i[a=Ws(gn(t))]),l&&Le(l,e,6,s);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Le(c,e,6,s)}}function Zl(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!L(e)){const l=c=>{const f=Zl(c,t,!0);f&&(a=!0,le(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(J(e)&&i.set(e,null),null):(k(r)?r.forEach(l=>o[l]=null):le(o,r),J(e)&&i.set(e,o),o)}function vs(e,t){return!e||!ds(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,gn(t))||U(e,t))}let be=null,ec=null;function Gi(e){const t=be;return be=e,ec=e&&e.type.__scopeId||null,t}function vf(e,t=be,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&Sa(-1);const r=Gi(t);let o;try{o=e(...s)}finally{Gi(r),i._d&&Sa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ks(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:f,renderCache:p,data:I,setupState:b,ctx:F,inheritAttrs:D}=e;let q,Z;const ee=Gi(e);try{if(n.shapeFlag&4){const N=s||i;q=je(f.call(N,N,p,r,b,I,F)),Z=l}else{const N=t;q=je(N.length>1?N(r,{attrs:l,slots:a,emit:c}):N(r,null)),Z=t.props?l:If(l)}}catch(N){jn.length=0,ys(N,e,1),q=nt(zn)}let Y=q;if(Z&&D!==!1){const N=Object.keys(Z),{shapeFlag:Se}=Y;N.length&&Se&7&&(o&&N.some(Kr)&&(Z=wf(Z,o)),Y=un(Y,Z))}return n.dirs&&(Y=un(Y),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&(Y.transition=n.transition),q=Y,Gi(ee),q}const If=e=>{let t;for(const n in e)(n==="class"||n==="style"||ds(n))&&((t||(t={}))[n]=e[n]);return t},wf=(e,t)=>{const n={};for(const i in e)(!Kr(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Ef(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ma(i,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const I=f[p];if(o[I]!==i[I]&&!vs(c,I))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ma(i,o,c):!0:!!o;return!1}function ma(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!vs(n,r))return!0}return!1}function Tf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Af=e=>e.__isSuspense;function bf(e,t){t&&t.pendingBranch?k(e)?t.effects.push(...e):t.effects.push(e):mf(e)}const ki={};function zs(e,t,n){return tc(e,t,n)}function tc(e,t,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=K){var a;const l=kh()===((a=oe)==null?void 0:a.scope)?oe:null;let c,f=!1,p=!1;if(ye(e)?(c=()=>e.value,f=yr(e)):nn(e)?(c=()=>e,i=!0):k(e)?(p=!0,f=e.some(N=>nn(N)||yr(N)),c=()=>e.map(N=>{if(ye(N))return N.value;if(nn(N))return Nt(N);if(L(N))return _t(N,l,2)})):L(e)?t?c=()=>_t(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return I&&I(),Le(e,l,3,[b])}:c=Ne,t&&i){const N=c;c=()=>Nt(N())}let I,b=N=>{I=ee.onStop=()=>{_t(N,l,4)}},F;if(Gn)if(b=Ne,t?n&&Le(t,l,3,[c(),p?[]:void 0,b]):c(),s==="sync"){const N=Ed();F=N.__watcherHandles||(N.__watcherHandles=[])}else return Ne;let D=p?new Array(e.length).fill(ki):ki;const q=()=>{if(ee.active)if(t){const N=ee.run();(i||f||(p?N.some((Se,Ge)=>zi(Se,D[Ge])):zi(N,D)))&&(I&&I(),Le(t,l,3,[N,D===ki?void 0:p&&D[0]===ki?[]:D,b]),D=N)}else ee.run()};q.allowRecurse=!!t;let Z;s==="sync"?Z=q:s==="post"?Z=()=>Ie(q,l&&l.suspense):(q.pre=!0,l&&(q.id=l.uid),Z=()=>ao(q));const ee=new Qr(c,Z);t?n?q():D=ee.run():s==="post"?Ie(ee.run.bind(ee),l&&l.suspense):ee.run();const Y=()=>{ee.stop(),l&&l.scope&&zr(l.scope.effects,ee)};return F&&F.push(Y),Y}function Cf(e,t,n){const i=this.proxy,s=te(e)?e.includes(".")?nc(i,e):()=>i[e]:e.bind(i,i);let r;L(t)?r=t:(r=t.handler,n=t);const o=oe;hn(this);const a=tc(s,r.bind(i),n);return o?hn(o):Ut(),a}function nc(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Nt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ye(e))Nt(e.value,t);else if(k(e))for(let n=0;n<e.length;n++)Nt(e[n],t);else if(Ol(e)||tn(e))e.forEach(n=>{Nt(n,t)});else if(Dl(e))for(const n in e)Nt(e[n],t);return e}function Un(e,t){const n=be;if(n===null)return e;const i=Ts(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,l,c=K]=t[r];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&Nt(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Rt(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(mn(),Le(l,n,8,[e.el,a,e,t]),_n())}}const ji=e=>!!e.type.__asyncLoader,ic=e=>e.type.__isKeepAlive;function Sf(e,t){sc(e,"a",t)}function Rf(e,t){sc(e,"da",t)}function sc(e,t,n=oe){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Is(t,i,n),n){let s=n.parent;for(;s&&s.parent;)ic(s.parent.vnode)&&Of(i,t,n,s),s=s.parent}}function Of(e,t,n,i){const s=Is(t,e,i,!0);rc(()=>{zr(i[t],s)},n)}function Is(e,t,n=oe,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;mn(),hn(n);const a=Le(t,n,e,o);return Ut(),_n(),a});return i?s.unshift(r):s.push(r),r}}const ot=e=>(t,n=oe)=>(!Gn||e==="sp")&&Is(e,(...i)=>t(...i),n),Pf=ot("bm"),kf=ot("m"),Df=ot("bu"),Nf=ot("u"),Lf=ot("bum"),rc=ot("um"),Mf=ot("sp"),xf=ot("rtg"),Uf=ot("rtc");function Ff(e,t=oe){Is("ec",e,t)}const oc="components";function _a(e,t){return Bf(oc,e,!0,t)||e}const jf=Symbol.for("v-ndc");function Bf(e,t,n=!0,i=!1){const s=be||oe;if(s){const r=s.type;if(e===oc){const a=yd(r,!1);if(a&&(a===t||a===ze(t)||a===ms(ze(t))))return r}const o=ya(s[e]||r[e],t)||ya(s.appContext[e],t);return!o&&i?r:o}}function ya(e,t){return e&&(e[t]||e[ze(t)]||e[ms(ze(t))])}const Ir=e=>e?mc(e)?Ts(e)||e.proxy:Ir(e.parent):null,Fn=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ir(e.parent),$root:e=>Ir(e.root),$emit:e=>e.emit,$options:e=>lo(e),$forceUpdate:e=>e.f||(e.f=()=>ao(e.update)),$nextTick:e=>e.n||(e.n=df.bind(e.proxy)),$watch:e=>Cf.bind(e)}),qs=(e,t)=>e!==K&&!e.__isScriptSetup&&U(e,t),$f={get({_:e},t){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const b=o[t];if(b!==void 0)switch(b){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(qs(i,t))return o[t]=1,i[t];if(s!==K&&U(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,r[t];if(n!==K&&U(n,t))return o[t]=4,n[t];wr&&(o[t]=0)}}const f=Fn[t];let p,I;if(f)return t==="$attrs"&&we(e,"get",t),f(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==K&&U(n,t))return o[t]=4,n[t];if(I=l.config.globalProperties,U(I,t))return I[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return qs(s,t)?(s[t]=n,!0):i!==K&&U(i,t)?(i[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||e!==K&&U(e,o)||qs(t,o)||(a=r[0])&&U(a,o)||U(i,o)||U(Fn,o)||U(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function va(e){return k(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let wr=!0;function Hf(e){const t=lo(e),n=e.proxy,i=e.ctx;wr=!1,t.beforeCreate&&Ia(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:f,beforeMount:p,mounted:I,beforeUpdate:b,updated:F,activated:D,deactivated:q,beforeDestroy:Z,beforeUnmount:ee,destroyed:Y,unmounted:N,render:Se,renderTracked:Ge,renderTriggered:At,errorCaptured:Je,serverPrefetch:bt,expose:Xe,inheritAttrs:bn,components:Ei,directives:Ti,filters:$s}=t;if(c&&Vf(c,i,null),o)for(const G in o){const V=o[G];L(V)&&(i[G]=V.bind(n))}if(s){const G=s.call(n,n);J(G)&&(e.data=no(G))}if(wr=!0,r)for(const G in r){const V=r[G],Ct=L(V)?V.bind(n,n):L(V.get)?V.get.bind(n,n):Ne,Ai=!L(V)&&L(V.set)?V.set.bind(n):Ne,St=Id({get:Ct,set:Ai});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>St.value,set:xe=>St.value=xe})}if(a)for(const G in a)ac(a[G],i,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(V=>{Jf(V,G[V])})}f&&Ia(f,e,"c");function me(G,V){k(V)?V.forEach(Ct=>G(Ct.bind(n))):V&&G(V.bind(n))}if(me(Pf,p),me(kf,I),me(Df,b),me(Nf,F),me(Sf,D),me(Rf,q),me(Ff,Je),me(Uf,Ge),me(xf,At),me(Lf,ee),me(rc,N),me(Mf,bt),k(Xe))if(Xe.length){const G=e.exposed||(e.exposed={});Xe.forEach(V=>{Object.defineProperty(G,V,{get:()=>n[V],set:Ct=>n[V]=Ct})})}else e.exposed||(e.exposed={});Se&&e.render===Ne&&(e.render=Se),bn!=null&&(e.inheritAttrs=bn),Ei&&(e.components=Ei),Ti&&(e.directives=Ti)}function Vf(e,t,n=Ne){k(e)&&(e=Er(e));for(const i in e){const s=e[i];let r;J(s)?"default"in s?r=Bi(s.from||i,s.default,!0):r=Bi(s.from||i):r=Bi(s),ye(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Ia(e,t,n){Le(k(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function ac(e,t,n,i){const s=i.includes(".")?nc(n,i):()=>n[i];if(te(e)){const r=t[e];L(r)&&zs(s,r)}else if(L(e))zs(s,e.bind(n));else if(J(e))if(k(e))e.forEach(r=>ac(r,t,n,i));else{const r=L(e.handler)?e.handler.bind(n):t[e.handler];L(r)&&zs(s,r,e)}}function lo(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!n&&!i?l=t:(l={},s.length&&s.forEach(c=>Ji(l,c,o,!0)),Ji(l,t,o)),J(t)&&r.set(t,l),l}function Ji(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Ji(e,r,n,!0),s&&s.forEach(o=>Ji(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=Wf[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Wf={data:wa,props:Ea,emits:Ea,methods:kn,computed:kn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:kn,directives:kn,watch:zf,provide:wa,inject:Kf};function wa(e,t){return t?e?function(){return le(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Kf(e,t){return kn(Er(e),Er(t))}function Er(e){if(k(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function kn(e,t){return e?le(Object.create(null),e,t):t}function Ea(e,t){return e?k(e)&&k(t)?[...new Set([...e,...t])]:le(Object.create(null),va(e),va(t??{})):t}function zf(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const i in t)n[i]=_e(e[i],t[i]);return n}function lc(){return{app:null,config:{isNativeTag:mh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qf=0;function Gf(e,t){return function(i,s=null){L(i)||(i=le({},i)),s!=null&&!J(s)&&(s=null);const r=lc(),o=new Set;let a=!1;const l=r.app={_uid:qf++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Td,get config(){return r.config},set config(c){},use(c,...f){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...f)):L(c)&&(o.add(c),c(l,...f))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,f){return f?(r.components[c]=f,l):r.components[c]},directive(c,f){return f?(r.directives[c]=f,l):r.directives[c]},mount(c,f,p){if(!a){const I=nt(i,s);return I.appContext=r,f&&t?t(I,c):e(I,c,p),a=!0,l._container=c,c.__vue_app__=l,Ts(I.component)||I.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return r.provides[c]=f,l},runWithContext(c){Xi=l;try{return c()}finally{Xi=null}}};return l}}let Xi=null;function Jf(e,t){if(oe){let n=oe.provides;const i=oe.parent&&oe.parent.provides;i===n&&(n=oe.provides=Object.create(i)),n[e]=t}}function Bi(e,t,n=!1){const i=oe||be;if(i||Xi){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Xi._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&L(t)?t.call(i&&i.proxy):t}}function Xf(e,t,n,i=!1){const s={},r={};qi(r,Es,1),e.propsDefaults=Object.create(null),cc(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:rf(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Yf(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=B(s),[l]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let I=f[p];if(vs(e.emitsOptions,I))continue;const b=t[I];if(l)if(U(r,I))b!==r[I]&&(r[I]=b,c=!0);else{const F=ze(I);s[F]=Tr(l,a,F,b,e,!1)}else b!==r[I]&&(r[I]=b,c=!0)}}}else{cc(e,t,s,r)&&(c=!0);let f;for(const p in a)(!t||!U(t,p)&&((f=gn(p))===p||!U(t,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Tr(l,a,p,void 0,e,!0)):delete s[p]);if(r!==a)for(const p in r)(!t||!U(t,p))&&(delete r[p],c=!0)}c&&it(e,"set","$attrs")}function cc(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ui(l))continue;const c=t[l];let f;s&&U(s,f=ze(l))?!r||!r.includes(f)?n[f]=c:(a||(a={}))[f]=c:vs(e.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=B(n),c=a||K;for(let f=0;f<r.length;f++){const p=r[f];n[p]=Tr(s,l,p,c[p],e,!U(c,p))}}return o}function Tr(e,t,n,i,s,r){const o=e[n];if(o!=null){const a=U(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(hn(s),i=c[n]=l.call(null,t),Ut())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===gn(n))&&(i=!0))}return i}function uc(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let l=!1;if(!L(e)){const f=p=>{l=!0;const[I,b]=uc(p,t,!0);le(o,I),b&&a.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!l)return J(e)&&i.set(e,en),en;if(k(r))for(let f=0;f<r.length;f++){const p=ze(r[f]);Ta(p)&&(o[p]=K)}else if(r)for(const f in r){const p=ze(f);if(Ta(p)){const I=r[f],b=o[p]=k(I)||L(I)?{type:I}:le({},I);if(b){const F=Ca(Boolean,b.type),D=Ca(String,b.type);b[0]=F>-1,b[1]=D<0||F<D,(F>-1||U(b,"default"))&&a.push(p)}}}const c=[o,a];return J(e)&&i.set(e,c),c}function Ta(e){return e[0]!=="$"}function Aa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ba(e,t){return Aa(e)===Aa(t)}function Ca(e,t){return k(t)?t.findIndex(n=>ba(n,e)):L(t)&&ba(t,e)?0:-1}const hc=e=>e[0]==="_"||e==="$stable",co=e=>k(e)?e.map(je):[je(e)],Qf=(e,t,n)=>{if(t._n)return t;const i=vf((...s)=>co(t(...s)),n);return i._c=!1,i},fc=(e,t,n)=>{const i=e._ctx;for(const s in e){if(hc(s))continue;const r=e[s];if(L(r))t[s]=Qf(s,r,i);else if(r!=null){const o=co(r);t[s]=()=>o}}},dc=(e,t)=>{const n=co(t);e.slots.default=()=>n},Zf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),qi(t,"_",n)):fc(t,e.slots={})}else e.slots={},t&&dc(e,t);qi(e.slots,Es,1)},ed=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=K;if(i.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(le(s,t),!n&&a===1&&delete s._):(r=!t.$stable,fc(t,s)),o=t}else t&&(dc(e,t),o={default:1});if(r)for(const a in s)!hc(a)&&!(a in o)&&delete s[a]};function Ar(e,t,n,i,s=!1){if(k(e)){e.forEach((I,b)=>Ar(I,t&&(k(t)?t[b]:t),n,i,s));return}if(ji(i)&&!s)return;const r=i.shapeFlag&4?Ts(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=e,c=t&&t.r,f=a.refs===K?a.refs={}:a.refs,p=a.setupState;if(c!=null&&c!==l&&(te(c)?(f[c]=null,U(p,c)&&(p[c]=null)):ye(c)&&(c.value=null)),L(l))_t(l,a,12,[o,f]);else{const I=te(l),b=ye(l);if(I||b){const F=()=>{if(e.f){const D=I?U(p,l)?p[l]:f[l]:l.value;s?k(D)&&zr(D,r):k(D)?D.includes(r)||D.push(r):I?(f[l]=[r],U(p,l)&&(p[l]=f[l])):(l.value=[r],e.k&&(f[e.k]=l.value))}else I?(f[l]=o,U(p,l)&&(p[l]=o)):b&&(l.value=o,e.k&&(f[e.k]=o))};o?(F.id=-1,Ie(F,n)):F()}}}const Ie=bf;function td(e){return nd(e)}function nd(e,t){const n=dr();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:f,parentNode:p,nextSibling:I,setScopeId:b=Ne,insertStaticContent:F}=e,D=(u,h,d,m=null,g=null,v=null,T=!1,y=null,w=!!h.dynamicChildren)=>{if(u===h)return;u&&!Sn(u,h)&&(m=bi(u),xe(u,g,v,!0),u=null),h.patchFlag===-2&&(w=!1,h.dynamicChildren=null);const{type:_,ref:C,shapeFlag:A}=h;switch(_){case ws:q(u,h,d,m);break;case zn:Z(u,h,d,m);break;case Gs:u==null&&ee(h,d,m,T);break;case Pe:Ei(u,h,d,m,g,v,T,y,w);break;default:A&1?Se(u,h,d,m,g,v,T,y,w):A&6?Ti(u,h,d,m,g,v,T,y,w):(A&64||A&128)&&_.process(u,h,d,m,g,v,T,y,w,Kt)}C!=null&&g&&Ar(C,u&&u.ref,v,h||u,!h)},q=(u,h,d,m)=>{if(u==null)i(h.el=a(h.children),d,m);else{const g=h.el=u.el;h.children!==u.children&&c(g,h.children)}},Z=(u,h,d,m)=>{u==null?i(h.el=l(h.children||""),d,m):h.el=u.el},ee=(u,h,d,m)=>{[u.el,u.anchor]=F(u.children,h,d,m,u.el,u.anchor)},Y=({el:u,anchor:h},d,m)=>{let g;for(;u&&u!==h;)g=I(u),i(u,d,m),u=g;i(h,d,m)},N=({el:u,anchor:h})=>{let d;for(;u&&u!==h;)d=I(u),s(u),u=d;s(h)},Se=(u,h,d,m,g,v,T,y,w)=>{T=T||h.type==="svg",u==null?Ge(h,d,m,g,v,T,y,w):bt(u,h,g,v,T,y,w)},Ge=(u,h,d,m,g,v,T,y)=>{let w,_;const{type:C,props:A,shapeFlag:S,transition:P,dirs:M}=u;if(w=u.el=o(u.type,v,A&&A.is,A),S&8?f(w,u.children):S&16&&Je(u.children,w,null,m,g,v&&C!=="foreignObject",T,y),M&&Rt(u,null,m,"created"),At(w,u,u.scopeId,T,m),A){for(const H in A)H!=="value"&&!Ui(H)&&r(w,H,null,A[H],v,u.children,m,g,Ye);"value"in A&&r(w,"value",null,A.value),(_=A.onVnodeBeforeMount)&&Fe(_,m,u)}M&&Rt(u,null,m,"beforeMount");const W=(!g||g&&!g.pendingBranch)&&P&&!P.persisted;W&&P.beforeEnter(w),i(w,h,d),((_=A&&A.onVnodeMounted)||W||M)&&Ie(()=>{_&&Fe(_,m,u),W&&P.enter(w),M&&Rt(u,null,m,"mounted")},g)},At=(u,h,d,m,g)=>{if(d&&b(u,d),m)for(let v=0;v<m.length;v++)b(u,m[v]);if(g){let v=g.subTree;if(h===v){const T=g.vnode;At(u,T,T.scopeId,T.slotScopeIds,g.parent)}}},Je=(u,h,d,m,g,v,T,y,w=0)=>{for(let _=w;_<u.length;_++){const C=u[_]=y?ht(u[_]):je(u[_]);D(null,C,h,d,m,g,v,T,y)}},bt=(u,h,d,m,g,v,T)=>{const y=h.el=u.el;let{patchFlag:w,dynamicChildren:_,dirs:C}=h;w|=u.patchFlag&16;const A=u.props||K,S=h.props||K;let P;d&&Ot(d,!1),(P=S.onVnodeBeforeUpdate)&&Fe(P,d,h,u),C&&Rt(h,u,d,"beforeUpdate"),d&&Ot(d,!0);const M=g&&h.type!=="foreignObject";if(_?Xe(u.dynamicChildren,_,y,d,m,M,v):T||V(u,h,y,null,d,m,M,v,!1),w>0){if(w&16)bn(y,h,A,S,d,m,g);else if(w&2&&A.class!==S.class&&r(y,"class",null,S.class,g),w&4&&r(y,"style",A.style,S.style,g),w&8){const W=h.dynamicProps;for(let H=0;H<W.length;H++){const Q=W[H],Re=A[Q],zt=S[Q];(zt!==Re||Q==="value")&&r(y,Q,Re,zt,g,u.children,d,m,Ye)}}w&1&&u.children!==h.children&&f(y,h.children)}else!T&&_==null&&bn(y,h,A,S,d,m,g);((P=S.onVnodeUpdated)||C)&&Ie(()=>{P&&Fe(P,d,h,u),C&&Rt(h,u,d,"updated")},m)},Xe=(u,h,d,m,g,v,T)=>{for(let y=0;y<h.length;y++){const w=u[y],_=h[y],C=w.el&&(w.type===Pe||!Sn(w,_)||w.shapeFlag&70)?p(w.el):d;D(w,_,C,null,m,g,v,T,!0)}},bn=(u,h,d,m,g,v,T)=>{if(d!==m){if(d!==K)for(const y in d)!Ui(y)&&!(y in m)&&r(u,y,d[y],null,T,h.children,g,v,Ye);for(const y in m){if(Ui(y))continue;const w=m[y],_=d[y];w!==_&&y!=="value"&&r(u,y,_,w,T,h.children,g,v,Ye)}"value"in m&&r(u,"value",d.value,m.value)}},Ei=(u,h,d,m,g,v,T,y,w)=>{const _=h.el=u?u.el:a(""),C=h.anchor=u?u.anchor:a("");let{patchFlag:A,dynamicChildren:S,slotScopeIds:P}=h;P&&(y=y?y.concat(P):P),u==null?(i(_,d,m),i(C,d,m),Je(h.children,d,C,g,v,T,y,w)):A>0&&A&64&&S&&u.dynamicChildren?(Xe(u.dynamicChildren,S,d,g,v,T,y),(h.key!=null||g&&h===g.subTree)&&pc(u,h,!0)):V(u,h,d,C,g,v,T,y,w)},Ti=(u,h,d,m,g,v,T,y,w)=>{h.slotScopeIds=y,u==null?h.shapeFlag&512?g.ctx.activate(h,d,m,T,w):$s(h,d,m,g,v,T,w):ta(u,h,w)},$s=(u,h,d,m,g,v,T)=>{const y=u.component=dd(u,m,g);if(ic(u)&&(y.ctx.renderer=Kt),pd(y),y.asyncDep){if(g&&g.registerDep(y,me),!u.el){const w=y.subTree=nt(zn);Z(null,w,h,d)}return}me(y,u,h,d,g,v,T)},ta=(u,h,d)=>{const m=h.component=u.component;if(Ef(u,h,d))if(m.asyncDep&&!m.asyncResolved){G(m,h,d);return}else m.next=h,gf(m.update),m.update();else h.el=u.el,m.vnode=h},me=(u,h,d,m,g,v,T)=>{const y=()=>{if(u.isMounted){let{next:C,bu:A,u:S,parent:P,vnode:M}=u,W=C,H;Ot(u,!1),C?(C.el=M.el,G(u,C,T)):C=M,A&&Fi(A),(H=C.props&&C.props.onVnodeBeforeUpdate)&&Fe(H,P,C,M),Ot(u,!0);const Q=Ks(u),Re=u.subTree;u.subTree=Q,D(Re,Q,p(Re.el),bi(Re),u,g,v),C.el=Q.el,W===null&&Tf(u,Q.el),S&&Ie(S,g),(H=C.props&&C.props.onVnodeUpdated)&&Ie(()=>Fe(H,P,C,M),g)}else{let C;const{el:A,props:S}=h,{bm:P,m:M,parent:W}=u,H=ji(h);if(Ot(u,!1),P&&Fi(P),!H&&(C=S&&S.onVnodeBeforeMount)&&Fe(C,W,h),Ot(u,!0),A&&Vs){const Q=()=>{u.subTree=Ks(u),Vs(A,u.subTree,u,g,null)};H?h.type.__asyncLoader().then(()=>!u.isUnmounted&&Q()):Q()}else{const Q=u.subTree=Ks(u);D(null,Q,d,m,u,g,v),h.el=Q.el}if(M&&Ie(M,g),!H&&(C=S&&S.onVnodeMounted)){const Q=h;Ie(()=>Fe(C,W,Q),g)}(h.shapeFlag&256||W&&ji(W.vnode)&&W.vnode.shapeFlag&256)&&u.a&&Ie(u.a,g),u.isMounted=!0,h=d=m=null}},w=u.effect=new Qr(y,()=>ao(_),u.scope),_=u.update=()=>w.run();_.id=u.uid,Ot(u,!0),_()},G=(u,h,d)=>{h.component=u;const m=u.vnode.props;u.vnode=h,u.next=null,Yf(u,h.props,m,d),ed(u,h.children,d),mn(),ga(),_n()},V=(u,h,d,m,g,v,T,y,w=!1)=>{const _=u&&u.children,C=u?u.shapeFlag:0,A=h.children,{patchFlag:S,shapeFlag:P}=h;if(S>0){if(S&128){Ai(_,A,d,m,g,v,T,y,w);return}else if(S&256){Ct(_,A,d,m,g,v,T,y,w);return}}P&8?(C&16&&Ye(_,g,v),A!==_&&f(d,A)):C&16?P&16?Ai(_,A,d,m,g,v,T,y,w):Ye(_,g,v,!0):(C&8&&f(d,""),P&16&&Je(A,d,m,g,v,T,y,w))},Ct=(u,h,d,m,g,v,T,y,w)=>{u=u||en,h=h||en;const _=u.length,C=h.length,A=Math.min(_,C);let S;for(S=0;S<A;S++){const P=h[S]=w?ht(h[S]):je(h[S]);D(u[S],P,d,null,g,v,T,y,w)}_>C?Ye(u,g,v,!0,!1,A):Je(h,d,m,g,v,T,y,w,A)},Ai=(u,h,d,m,g,v,T,y,w)=>{let _=0;const C=h.length;let A=u.length-1,S=C-1;for(;_<=A&&_<=S;){const P=u[_],M=h[_]=w?ht(h[_]):je(h[_]);if(Sn(P,M))D(P,M,d,null,g,v,T,y,w);else break;_++}for(;_<=A&&_<=S;){const P=u[A],M=h[S]=w?ht(h[S]):je(h[S]);if(Sn(P,M))D(P,M,d,null,g,v,T,y,w);else break;A--,S--}if(_>A){if(_<=S){const P=S+1,M=P<C?h[P].el:m;for(;_<=S;)D(null,h[_]=w?ht(h[_]):je(h[_]),d,M,g,v,T,y,w),_++}}else if(_>S)for(;_<=A;)xe(u[_],g,v,!0),_++;else{const P=_,M=_,W=new Map;for(_=M;_<=S;_++){const Ee=h[_]=w?ht(h[_]):je(h[_]);Ee.key!=null&&W.set(Ee.key,_)}let H,Q=0;const Re=S-M+1;let zt=!1,sa=0;const Cn=new Array(Re);for(_=0;_<Re;_++)Cn[_]=0;for(_=P;_<=A;_++){const Ee=u[_];if(Q>=Re){xe(Ee,g,v,!0);continue}let Ue;if(Ee.key!=null)Ue=W.get(Ee.key);else for(H=M;H<=S;H++)if(Cn[H-M]===0&&Sn(Ee,h[H])){Ue=H;break}Ue===void 0?xe(Ee,g,v,!0):(Cn[Ue-M]=_+1,Ue>=sa?sa=Ue:zt=!0,D(Ee,h[Ue],d,null,g,v,T,y,w),Q++)}const ra=zt?id(Cn):en;for(H=ra.length-1,_=Re-1;_>=0;_--){const Ee=M+_,Ue=h[Ee],oa=Ee+1<C?h[Ee+1].el:m;Cn[_]===0?D(null,Ue,d,oa,g,v,T,y,w):zt&&(H<0||_!==ra[H]?St(Ue,d,oa,2):H--)}}},St=(u,h,d,m,g=null)=>{const{el:v,type:T,transition:y,children:w,shapeFlag:_}=u;if(_&6){St(u.component.subTree,h,d,m);return}if(_&128){u.suspense.move(h,d,m);return}if(_&64){T.move(u,h,d,Kt);return}if(T===Pe){i(v,h,d);for(let A=0;A<w.length;A++)St(w[A],h,d,m);i(u.anchor,h,d);return}if(T===Gs){Y(u,h,d);return}if(m!==2&&_&1&&y)if(m===0)y.beforeEnter(v),i(v,h,d),Ie(()=>y.enter(v),g);else{const{leave:A,delayLeave:S,afterLeave:P}=y,M=()=>i(v,h,d),W=()=>{A(v,()=>{M(),P&&P()})};S?S(v,M,W):W()}else i(v,h,d)},xe=(u,h,d,m=!1,g=!1)=>{const{type:v,props:T,ref:y,children:w,dynamicChildren:_,shapeFlag:C,patchFlag:A,dirs:S}=u;if(y!=null&&Ar(y,null,d,u,!0),C&256){h.ctx.deactivate(u);return}const P=C&1&&S,M=!ji(u);let W;if(M&&(W=T&&T.onVnodeBeforeUnmount)&&Fe(W,h,u),C&6)gh(u.component,d,m);else{if(C&128){u.suspense.unmount(d,m);return}P&&Rt(u,null,h,"beforeUnmount"),C&64?u.type.remove(u,h,d,g,Kt,m):_&&(v!==Pe||A>0&&A&64)?Ye(_,h,d,!1,!0):(v===Pe&&A&384||!g&&C&16)&&Ye(w,h,d),m&&na(u)}(M&&(W=T&&T.onVnodeUnmounted)||P)&&Ie(()=>{W&&Fe(W,h,u),P&&Rt(u,null,h,"unmounted")},d)},na=u=>{const{type:h,el:d,anchor:m,transition:g}=u;if(h===Pe){ph(d,m);return}if(h===Gs){N(u);return}const v=()=>{s(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(u.shapeFlag&1&&g&&!g.persisted){const{leave:T,delayLeave:y}=g,w=()=>T(d,v);y?y(u.el,v,w):w()}else v()},ph=(u,h)=>{let d;for(;u!==h;)d=I(u),s(u),u=d;s(h)},gh=(u,h,d)=>{const{bum:m,scope:g,update:v,subTree:T,um:y}=u;m&&Fi(m),g.stop(),v&&(v.active=!1,xe(T,u,h,d)),y&&Ie(y,h),Ie(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ye=(u,h,d,m=!1,g=!1,v=0)=>{for(let T=v;T<u.length;T++)xe(u[T],h,d,m,g)},bi=u=>u.shapeFlag&6?bi(u.component.subTree):u.shapeFlag&128?u.suspense.next():I(u.anchor||u.el),ia=(u,h,d)=>{u==null?h._vnode&&xe(h._vnode,null,null,!0):D(h._vnode||null,u,h,null,null,null,d),ga(),Yl(),h._vnode=u},Kt={p:D,um:xe,m:St,r:na,mt:$s,mc:Je,pc:V,pbc:Xe,n:bi,o:e};let Hs,Vs;return t&&([Hs,Vs]=t(Kt)),{render:ia,hydrate:Hs,createApp:Gf(ia,Hs)}}function Ot({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function pc(e,t,n=!1){const i=e.children,s=t.children;if(k(i)&&k(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ht(s[r]),a.el=o.el),n||pc(o,a)),a.type===ws&&(a.el=o.el)}}function id(e){const t=e.slice(),n=[0];let i,s,r,o,a;const l=e.length;for(i=0;i<l;i++){const c=e[i];if(c!==0){if(s=n[n.length-1],e[s]<c){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<c?r=a+1:o=a;c<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const sd=e=>e.__isTeleport,Pe=Symbol.for("v-fgt"),ws=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),Gs=Symbol.for("v-stc"),jn=[];let De=null;function Xt(e=!1){jn.push(De=e?null:[])}function rd(){jn.pop(),De=jn[jn.length-1]||null}let qn=1;function Sa(e){qn+=e}function od(e){return e.dynamicChildren=qn>0?De||en:null,rd(),qn>0&&De&&De.push(e),e}function Yt(e,t,n,i,s,r){return od(se(e,t,n,i,s,r,!0))}function ad(e){return e?e.__v_isVNode===!0:!1}function Sn(e,t){return e.type===t.type&&e.key===t.key}const Es="__vInternal",gc=({key:e})=>e??null,$i=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||ye(e)||L(e)?{i:be,r:e,k:t,f:!!n}:e:null);function se(e,t=null,n=null,i=0,s=null,r=e===Pe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gc(t),ref:t&&$i(t),scopeId:ec,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:be};return a?(uo(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),qn>0&&!o&&De&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&De.push(l),l}const nt=ld;function ld(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===jf)&&(e=zn),ad(e)){const a=un(e,t,!0);return n&&uo(a,n),qn>0&&!r&&De&&(a.shapeFlag&6?De[De.indexOf(e)]=a:De.push(a)),a.patchFlag|=-2,a}if(vd(e)&&(e=e.__vccOpts),t){t=cd(t);let{class:a,style:l}=t;a&&!te(a)&&(t.class=Xr(a)),J(l)&&(zl(l)&&!k(l)&&(l=le({},l)),t.style=Jr(l))}const o=te(e)?1:Af(e)?128:sd(e)?64:J(e)?4:L(e)?2:0;return se(e,t,n,i,s,o,r,!0)}function cd(e){return e?zl(e)||Es in e?le({},e):e:null}function un(e,t,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=e,a=t?ud(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&gc(a),ref:t&&t.ref?n&&s?k(s)?s.concat($i(t)):[s,$i(t)]:$i(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&un(e.ssContent),ssFallback:e.ssFallback&&un(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Dn(e=" ",t=0){return nt(ws,null,e,t)}function je(e){return e==null||typeof e=="boolean"?nt(zn):k(e)?nt(Pe,null,e.slice()):typeof e=="object"?ht(e):nt(ws,null,String(e))}function ht(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:un(e)}function uo(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(k(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),uo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Es in t)?t._ctx=be:s===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:be},n=32):(t=String(t),i&64?(n=16,t=[Dn(t)]):n=8);e.children=t,e.shapeFlag|=n}function ud(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Xr([t.class,i.class]));else if(s==="style")t.style=Jr([t.style,i.style]);else if(ds(s)){const r=t[s],o=i[s];o&&r!==o&&!(k(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function Fe(e,t,n,i=null){Le(e,t,7,[n,i])}const hd=lc();let fd=0;function dd(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||hd,r={uid:fd++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uc(i,s),emitsOptions:Zl(i,s),emit:null,emitted:null,propsDefaults:K,inheritAttrs:i.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=yf.bind(null,r),e.ce&&e.ce(r),r}let oe=null,ho,qt,Ra="__VUE_INSTANCE_SETTERS__";(qt=dr()[Ra])||(qt=dr()[Ra]=[]),qt.push(e=>oe=e),ho=e=>{qt.length>1?qt.forEach(t=>t(e)):qt[0](e)};const hn=e=>{ho(e),e.scope.on()},Ut=()=>{oe&&oe.scope.off(),ho(null)};function mc(e){return e.vnode.shapeFlag&4}let Gn=!1;function pd(e,t=!1){Gn=t;const{props:n,children:i}=e.vnode,s=mc(e);Xf(e,n,s,t),Zf(e,i);const r=s?gd(e,t):void 0;return Gn=!1,r}function gd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ql(new Proxy(e.ctx,$f));const{setup:i}=n;if(i){const s=e.setupContext=i.length>1?_d(e):null;hn(e),mn();const r=_t(i,e,0,[e.props,s]);if(_n(),Ut(),Pl(r)){if(r.then(Ut,Ut),t)return r.then(o=>{Oa(e,o,t)}).catch(o=>{ys(o,e,0)});e.asyncDep=r}else Oa(e,r,t)}else _c(e,t)}function Oa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Gl(t)),_c(e,n)}let Pa;function _c(e,t,n){const i=e.type;if(!e.render){if(!t&&Pa&&!i.render){const s=i.template||lo(e).template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,c=le(le({isCustomElement:r,delimiters:a},o),l);i.render=Pa(s,c)}}e.render=i.render||Ne}hn(e),mn(),Hf(e),_n(),Ut()}function md(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return we(e,"get","$attrs"),t[n]}}))}function _d(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return md(e)},slots:e.slots,emit:e.emit,expose:t}}function Ts(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Gl(ql(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Fn)return Fn[n](e)},has(t,n){return n in t||n in Fn}}))}function yd(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function vd(e){return L(e)&&"__vccOpts"in e}const Id=(e,t)=>hf(e,t,Gn),wd=Symbol.for("v-scx"),Ed=()=>Bi(wd),Td="3.3.4",Ad="http://www.w3.org/2000/svg",Dt=typeof document<"u"?document:null,ka=Dt&&Dt.createElement("template"),bd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?Dt.createElementNS(Ad,e):Dt.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Dt.createTextNode(e),createComment:e=>Dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{ka.innerHTML=i?`<svg>${e}</svg>`:e;const a=ka.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Cd(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Sd(e,t,n){const i=e.style,s=te(n);if(n&&!s){if(t&&!te(t))for(const r in t)n[r]==null&&br(i,r,"");for(const r in n)br(i,r,n[r])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Da=/\s*!important$/;function br(e,t,n){if(k(n))n.forEach(i=>br(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Rd(e,t);Da.test(n)?e.setProperty(gn(i),n.replace(Da,""),"important"):e[i]=n}}const Na=["Webkit","Moz","ms"],Js={};function Rd(e,t){const n=Js[t];if(n)return n;let i=ze(t);if(i!=="filter"&&i in e)return Js[t]=i;i=ms(i);for(let s=0;s<Na.length;s++){const r=Na[s]+i;if(r in e)return Js[t]=r}return t}const La="http://www.w3.org/1999/xlink";function Od(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(La,t.slice(6,t.length)):e.setAttributeNS(La,t,n);else{const r=Sh(t);n==null||r&&!Nl(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Pd(e,t,n,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,f=n??"";c!==f&&(e.value=f),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Nl(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Jt(e,t,n,i){e.addEventListener(t,n,i)}function kd(e,t,n,i){e.removeEventListener(t,n,i)}function Dd(e,t,n,i,s=null){const r=e._vei||(e._vei={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Nd(t);if(i){const c=r[t]=xd(i,s);Jt(e,a,c,l)}else o&&(kd(e,a,o,l),r[t]=void 0)}}const Ma=/(?:Once|Passive|Capture)$/;function Nd(e){let t;if(Ma.test(e)){t={};let i;for(;i=e.match(Ma);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gn(e.slice(2)),t]}let Xs=0;const Ld=Promise.resolve(),Md=()=>Xs||(Ld.then(()=>Xs=0),Xs=Date.now());function xd(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Le(Ud(i,n.value),t,5,[i])};return n.value=e,n.attached=Md(),n}function Ud(e,t){if(k(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const xa=/^on[a-z]/,Fd=(e,t,n,i,s=!1,r,o,a,l)=>{t==="class"?Cd(e,i,s):t==="style"?Sd(e,n,i):ds(t)?Kr(t)||Dd(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jd(e,t,i,s))?Pd(e,t,i,r,o,a,l):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Od(e,t,i,s))};function jd(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&xa.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||xa.test(t)&&te(n)?!1:t in e}const Ua=e=>{const t=e.props["onUpdate:modelValue"]||!1;return k(t)?n=>Fi(t,n):t};function Bd(e){e.target.composing=!0}function Fa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Bn={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=Ua(s);const r=i||s.props&&s.props.type==="number";Jt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=fr(a)),e._assign(a)}),n&&Jt(e,"change",()=>{e.value=e.value.trim()}),t||(Jt(e,"compositionstart",Bd),Jt(e,"compositionend",Fa),Jt(e,"change",Fa))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},r){if(e._assign=Ua(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===t||(s||e.type==="number")&&fr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},$d=["ctrl","shift","alt","meta"],Hd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>$d.some(n=>e[`${n}Key`]&&!t.includes(n))},yc=(e,t)=>(n,...i)=>{for(let s=0;s<t.length;s++){const r=Hd[t[s]];if(r&&r(n,t))return}return e(n,...i)},Vd=le({patchProp:Fd},bd);let ja;function Wd(){return ja||(ja=td(Vd))}const Kd=(...e)=>{const t=Wd().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=zd(i);if(!s)return;const r=t._component;!L(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function zd(e){return te(e)?document.querySelector(e):e}/**
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
 */const vc=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},qd=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,f=r>>2,p=(r&3)<<4|a>>4;let I=(a&15)<<2|c>>6,b=c&63;l||(b=64,o||(I=64)),i.push(n[f],n[p],n[I],n[b])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vc(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):qd(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||a==null||c==null||p==null)throw new Gd;const I=r<<2|a>>4;if(i.push(I),c!==64){const b=a<<4&240|c>>2;if(i.push(b),p!==64){const F=c<<6&192|p;i.push(F)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Gd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jd=function(e){const t=vc(e);return Ic.encodeByteArray(t,!0)},Yi=function(e){return Jd(e).replace(/\./g,"")},wc=function(e){try{return Ic.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Xd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yd=()=>Xd().__FIREBASE_DEFAULTS__,Qd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Zd=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&wc(e[1]);return t&&JSON.parse(t)},fo=()=>{try{return Yd()||Qd()||Zd()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ec=e=>{var t,n;return(n=(t=fo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ep=e=>{const t=Ec(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Tc=()=>{var e;return(e=fo())===null||e===void 0?void 0:e.config},Ac=e=>{var t;return(t=fo())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class tp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function np(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Yi(JSON.stringify(n)),Yi(JSON.stringify(o)),a].join(".")}/**
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
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ip(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function sp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function op(){const e=ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ap(){try{return typeof indexedDB=="object"}catch{return!1}}function lp(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
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
 */const cp="FirebaseError";class at extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=cp,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?up(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new at(s,a,i)}}function up(e,t){return e.replace(hp,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const hp=/\{\$([^}]+)}/g;function fp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Qi(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(Ba(r)&&Ba(o)){if(!Qi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ba(e){return e!==null&&typeof e=="object"}/**
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
 */function li(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Nn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function Ln(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function dp(e,t){const n=new pp(e,t);return n.subscribe.bind(n)}class pp{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");gp(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=Ys),s.error===void 0&&(s.error=Ys),s.complete===void 0&&(s.complete=Ys);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ys(){}/**
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
 */function lt(e){return e&&e._delegate?e._delegate:e}class Bt{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Pt="[DEFAULT]";/**
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
 */class mp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new tp;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yp(t))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Pt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pt){return this.instances.has(t)}getOptions(t=Pt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_p(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Pt){return this.component?this.component.multipleInstances?t:Pt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _p(e){return e===Pt?void 0:e}function yp(e){return e.instantiationMode==="EAGER"}/**
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
 */class vp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new mp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(j||(j={}));const Ip={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},wp=j.INFO,Ep={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Tp=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=Ep[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class po{constructor(t){this.name=t,this._logLevel=wp,this._logHandler=Tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ip[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const Ap=(e,t)=>t.some(n=>e instanceof n);let $a,Ha;function bp(){return $a||($a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cp(){return Ha||(Ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bc=new WeakMap,Cr=new WeakMap,Cc=new WeakMap,Qs=new WeakMap,go=new WeakMap;function Sp(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(yt(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&bc.set(n,e)}).catch(()=>{}),go.set(t,e),t}function Rp(e){if(Cr.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});Cr.set(e,t)}let Sr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Cr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Cc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Op(e){Sr=e(Sr)}function Pp(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Zs(this),t,...n);return Cc.set(i,t.sort?t.sort():[t]),yt(i)}:Cp().includes(e)?function(...t){return e.apply(Zs(this),t),yt(bc.get(this))}:function(...t){return yt(e.apply(Zs(this),t))}}function kp(e){return typeof e=="function"?Pp(e):(e instanceof IDBTransaction&&Rp(e),Ap(e,bp())?new Proxy(e,Sr):e)}function yt(e){if(e instanceof IDBRequest)return Sp(e);if(Qs.has(e))return Qs.get(e);const t=kp(e);return t!==e&&(Qs.set(e,t),go.set(t,e)),t}const Zs=e=>go.get(e);function Dp(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=yt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(yt(o.result),l.oldVersion,l.newVersion,yt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Np=["get","getKey","getAll","getAllKeys","count"],Lp=["put","add","delete","clear"],er=new Map;function Va(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(er.get(t))return er.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Lp.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Np.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return er.set(t,r),r}Op(e=>({...e,get:(t,n,i)=>Va(t,n)||e.get(t,n,i),has:(t,n)=>!!Va(t,n)||e.has(t,n)}));/**
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
 */class Mp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xp(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function xp(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rr="@firebase/app",Wa="0.9.13";/**
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
 */const $t=new po("@firebase/app"),Up="@firebase/app-compat",Fp="@firebase/analytics-compat",jp="@firebase/analytics",Bp="@firebase/app-check-compat",$p="@firebase/app-check",Hp="@firebase/auth",Vp="@firebase/auth-compat",Wp="@firebase/database",Kp="@firebase/database-compat",zp="@firebase/functions",qp="@firebase/functions-compat",Gp="@firebase/installations",Jp="@firebase/installations-compat",Xp="@firebase/messaging",Yp="@firebase/messaging-compat",Qp="@firebase/performance",Zp="@firebase/performance-compat",eg="@firebase/remote-config",tg="@firebase/remote-config-compat",ng="@firebase/storage",ig="@firebase/storage-compat",sg="@firebase/firestore",rg="@firebase/firestore-compat",og="firebase",ag="9.23.0";/**
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
 */const Or="[DEFAULT]",lg={[Rr]:"fire-core",[Up]:"fire-core-compat",[jp]:"fire-analytics",[Fp]:"fire-analytics-compat",[$p]:"fire-app-check",[Bp]:"fire-app-check-compat",[Hp]:"fire-auth",[Vp]:"fire-auth-compat",[Wp]:"fire-rtdb",[Kp]:"fire-rtdb-compat",[zp]:"fire-fn",[qp]:"fire-fn-compat",[Gp]:"fire-iid",[Jp]:"fire-iid-compat",[Xp]:"fire-fcm",[Yp]:"fire-fcm-compat",[Qp]:"fire-perf",[Zp]:"fire-perf-compat",[eg]:"fire-rc",[tg]:"fire-rc-compat",[ng]:"fire-gcs",[ig]:"fire-gcs-compat",[sg]:"fire-fst",[rg]:"fire-fst-compat","fire-js":"fire-js",[og]:"fire-js-all"};/**
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
 */const Zi=new Map,Pr=new Map;function cg(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fn(e){const t=e.name;if(Pr.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Pr.set(t,e);for(const n of Zi.values())cg(n,e);return!0}function mo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const ug={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vt=new ai("app","Firebase",ug);/**
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
 */class hg{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const yn=ag;function Sc(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Or,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw vt.create("bad-app-name",{appName:String(s)});if(n||(n=Tc()),!n)throw vt.create("no-options");const r=Zi.get(s);if(r){if(Qi(n,r.options)&&Qi(i,r.config))return r;throw vt.create("duplicate-app",{appName:s})}const o=new vp(s);for(const l of Pr.values())o.addComponent(l);const a=new hg(n,i,o);return Zi.set(s,a),a}function Rc(e=Or){const t=Zi.get(e);if(!t&&e===Or&&Tc())return Sc();if(!t)throw vt.create("no-app",{appName:e});return t}function It(e,t,n){var i;let s=(i=lg[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}fn(new Bt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const fg="firebase-heartbeat-database",dg=1,Jn="firebase-heartbeat-store";let tr=null;function Oc(){return tr||(tr=Dp(fg,dg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Jn)}}}).catch(e=>{throw vt.create("idb-open",{originalErrorMessage:e.message})})),tr}async function pg(e){try{return await(await Oc()).transaction(Jn).objectStore(Jn).get(Pc(e))}catch(t){if(t instanceof at)$t.warn(t.message);else{const n=vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function Ka(e,t){try{const i=(await Oc()).transaction(Jn,"readwrite");await i.objectStore(Jn).put(t,Pc(e)),await i.done}catch(n){if(n instanceof at)$t.warn(n.message);else{const i=vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(i.message)}}}function Pc(e){return`${e.name}!${e.options.appId}`}/**
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
 */const gg=1024,mg=30*24*60*60*1e3;class _g{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vg(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=za();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=mg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=za(),{heartbeatsToSend:n,unsentEntries:i}=yg(this._heartbeatsCache.heartbeats),s=Yi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function za(){return new Date().toISOString().substring(0,10)}function yg(e,t=gg){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),qa(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qa(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class vg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ap()?lp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ka(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ka(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function qa(e){return Yi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Ig(e){fn(new Bt("platform-logger",t=>new Mp(t),"PRIVATE")),fn(new Bt("heartbeat",t=>new _g(t),"PRIVATE")),It(Rr,Wa,e),It(Rr,Wa,"esm2017"),It("fire-js","")}Ig("");function _o(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n}function kc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wg=kc,Dc=new ai("auth","Firebase",kc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new po("@firebase/auth");function Eg(e,...t){es.logLevel<=j.WARN&&es.warn(`Auth (${yn}): ${e}`,...t)}function Hi(e,...t){es.logLevel<=j.ERROR&&es.error(`Auth (${yn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e,...t){throw yo(e,...t)}function We(e,...t){return yo(e,...t)}function Tg(e,t,n){const i=Object.assign(Object.assign({},wg()),{[t]:n});return new ai("auth","Firebase",i).create(t,{appName:e.name})}function yo(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Dc.create(e,...t)}function R(e,t,...n){if(!e)throw yo(t,...n)}function Ze(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Hi(t),new Error(t)}function st(e,t){e||Ze(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Ag(){return Ga()==="http:"||Ga()==="https:"}function Ga(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ag()||sp()||"connection"in navigator)?navigator.onLine:!0}function Cg(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n){this.shortDelay=t,this.longDelay=n,st(n>t,"Short delay should be less than long delay!"),this.isMobile=ip()||rp()}get(){return bg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(e,t){st(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new ci(3e4,6e4);function vn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Wt(e,t,n,i,s={}){return Lc(e,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=li(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Nc.fetch()(Mc(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},r))})}async function Lc(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Sg),t);try{const s=new Og(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Di(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Di(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Di(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Di(e,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Tg(e,f,c);Me(e,f)}}catch(s){if(s instanceof at)throw s;Me(e,"network-request-failed",{message:String(s)})}}async function ui(e,t,n,i,s={}){const r=await Wt(e,t,n,i,s);return"mfaPendingCredential"in r&&Me(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Mc(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?vo(e.config,s):`${e.config.apiScheme}://${s}`}class Og{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(We(this.auth,"network-request-failed")),Rg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Di(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=We(e,t,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(e,t){return Wt(e,"POST","/v1/accounts:delete",t)}async function kg(e,t){return Wt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Dg(e,t=!1){const n=lt(e),i=await n.getIdToken(t),s=Io(i);R(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:$n(nr(s.auth_time)),issuedAtTime:$n(nr(s.iat)),expirationTime:$n(nr(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function nr(e){return Number(e)*1e3}function Io(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const s=wc(n);return s?JSON.parse(s):(Hi("Failed to decode base64 JWT payload"),null)}catch(s){return Hi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ng(e){const t=Io(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof at&&Lg(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Lg({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$n(this.lastLoginAt),this.creationTime=$n(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ts(e){var t;const n=e.auth,i=await e.getIdToken(),s=await dn(e,kg(n,{idToken:i}));R(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?Fg(r.providerUserInfo):[],a=Ug(e.providerData,o),l=e.isAnonymous,c=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new xc(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function xg(e){const t=lt(e);await ts(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ug(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function Fg(e){return e.map(t=>{var{providerId:n}=t,i=_o(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(e,t){const n=await Lc(e,{},async()=>{const i=li({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=Mc(e,s,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Nc.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ng(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await jg(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Xn;return i&&(R(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(R(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(R(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ft{constructor(t){var{uid:n,auth:i,stsTokenManager:s}=t,r=_o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new xc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await dn(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Dg(this,t)}reload(){return xg(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ft(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await ts(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await dn(this,Pg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,s,r,o,a,l,c,f;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,I=(s=n.email)!==null&&s!==void 0?s:void 0,b=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,F=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,q=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,Z=(c=n.createdAt)!==null&&c!==void 0?c:void 0,ee=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Y,emailVerified:N,isAnonymous:Se,providerData:Ge,stsTokenManager:At}=n;R(Y&&At,t,"internal-error");const Je=Xn.fromJSON(this.name,At);R(typeof Y=="string",t,"internal-error"),ut(p,t.name),ut(I,t.name),R(typeof N=="boolean",t,"internal-error"),R(typeof Se=="boolean",t,"internal-error"),ut(b,t.name),ut(F,t.name),ut(D,t.name),ut(q,t.name),ut(Z,t.name),ut(ee,t.name);const bt=new Ft({uid:Y,auth:t,email:I,emailVerified:N,displayName:p,isAnonymous:Se,photoURL:F,phoneNumber:b,tenantId:D,stsTokenManager:Je,createdAt:Z,lastLoginAt:ee});return Ge&&Array.isArray(Ge)&&(bt.providerData=Ge.map(Xe=>Object.assign({},Xe))),q&&(bt._redirectEventId=q),bt}static async _fromIdTokenResponse(t,n,i=!1){const s=new Xn;s.updateFromServerResponse(n);const r=new Ft({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await ts(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map;function et(e){st(e instanceof Function,"Expected a class definition");let t=Ja.get(e);return t?(st(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ja.set(e,t),t)}/**
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
 */class Uc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Uc.type="NONE";const Xa=Uc;/**
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
 */function Vi(e,t,n){return`firebase:${e}:${t}:${n}`}class rn{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Vi(this.userKey,s.apiKey,r),this.fullPersistenceKey=Vi("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ft._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new rn(et(Xa),t,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||et(Xa);const o=Vi(i,t.config.apiKey,t.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Ft._fromJSON(t,f);c!==r&&(a=p),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new rn(r,t,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new rn(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Bc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Fc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hc(t))return"Blackberry";if(Vc(t))return"Webos";if(wo(t))return"Safari";if((t.includes("chrome/")||jc(t))&&!t.includes("edge/"))return"Chrome";if($c(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Fc(e=ge()){return/firefox\//i.test(e)}function wo(e=ge()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function jc(e=ge()){return/crios\//i.test(e)}function Bc(e=ge()){return/iemobile/i.test(e)}function $c(e=ge()){return/android/i.test(e)}function Hc(e=ge()){return/blackberry/i.test(e)}function Vc(e=ge()){return/webos/i.test(e)}function As(e=ge()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Bg(e=ge()){var t;return As(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function $g(){return op()&&document.documentMode===10}function Wc(e=ge()){return As(e)||$c(e)||Vc(e)||Hc(e)||/windows phone/i.test(e)||Bc(e)}function Hg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(e,t=[]){let n;switch(e){case"Browser":n=Ya(ge());break;case"Worker":n=`${Ya(ge())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${yn}/${i}`}async function zc(e,t){return Wt(e,"GET","/v2/recaptchaConfig",vn(e,t))}function Qa(e){return e!==void 0&&e.enterprise!==void 0}class qc{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Gc(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=We("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Vg().appendChild(i)})}function Wg(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Kg="https://www.google.com/recaptcha/enterprise.js?render=",zg="recaptcha-enterprise",qg="NO_RECAPTCHA";class Jc{constructor(t){this.type=zg,this.auth=In(t)}async verify(t="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{zc(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new qc(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Qa(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:t}).then(c=>{o(c)}).catch(()=>{o(qg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&Qa(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Gc(Kg+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ns(e,t,n,i=!1){const s=new Jc(e);let r;try{r=await s.verify(n)}catch{r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Gg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((o,a)=>{try{const l=t(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Za(this),this.idTokenSubscription=new Za(this),this.beforeStateQueue=new Gg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await rn.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ts(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Cg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?lt(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(t))})}async initializeRecaptchaConfig(){const t=await zc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new qc(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Jc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ai("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&et(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await rn.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?t.addObserver(n,i,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Kc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Eg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function In(e){return lt(e)}class Za{constructor(t){this.auth=t,this.observer=null,this.addObserver=dp(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(e,t){const n=mo(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Qi(r,t??{}))return s;Me(s,"already-initialized")}return n.initialize({options:t})}function Yg(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(et);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function Qg(e,t,n){const i=In(e);R(i._canInitEmulator,i,"emulator-config-failed"),R(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=Xc(t),{host:o,port:a}=Zg(t),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||em()}function Xc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Zg(e){const t=Xc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:el(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:el(o)}}}function el(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function em(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(t){return Ze("not implemented")}_linkToIdToken(t,n){return Ze("not implemented")}_getReauthenticationResolver(t){return Ze("not implemented")}}async function tm(e,t){return Wt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(e,t){return ui(e,"POST","/v1/accounts:signInWithPassword",vn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(e,t){return ui(e,"POST","/v1/accounts:signInWithEmailLink",vn(e,t))}async function im(e,t){return ui(e,"POST","/v1/accounts:signInWithEmailLink",vn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Eo{constructor(t,n,i,s=null){super("password",i),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Yn(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new Yn(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await ns(t,i,"signInWithPassword");return ir(t,s)}else return ir(t,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await ns(t,i,"signInWithPassword");return ir(t,r)}else return Promise.reject(s)});case"emailLink":return nm(t,{email:this._email,oobCode:this._password});default:Me(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return tm(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return im(t,{idToken:n,email:this._email,oobCode:this._password});default:Me(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(e,t){return ui(e,"POST","/v1/accounts:signInWithIdp",vn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="http://localhost";class Ht extends Eo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ht(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=n,r=_o(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ht(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return on(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,on(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,on(t,n)}buildRequest(){const t={requestUri:sm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=li(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function om(e){const t=Nn(Ln(e)).link,n=t?Nn(Ln(t)).deep_link_id:null,i=Nn(Ln(e)).deep_link_id;return(i?Nn(Ln(i)).link:null)||i||n||t||e}class To{constructor(t){var n,i,s,r,o,a;const l=Nn(Ln(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(i=l.oobCode)!==null&&i!==void 0?i:null,p=rm((s=l.mode)!==null&&s!==void 0?s:null);R(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=om(t);try{return new To(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.providerId=wn.PROVIDER_ID}static credential(t,n){return Yn._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=To.parseLink(n);return R(i,"argument-error"),Yn._fromEmailAndCode(t,i.code,i.tenantId)}}wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hi extends Yc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends hi{constructor(){super("facebook.com")}static credential(t){return Ht._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ft.credentialFromTaggedObject(t)}static credentialFromError(t){return ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ft.credential(t.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends hi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ht._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return dt.credentialFromTaggedObject(t)}static credentialFromError(t){return dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return dt.credential(n,i)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends hi{constructor(){super("github.com")}static credential(t){return Ht._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pt.credentialFromTaggedObject(t)}static credentialFromError(t){return pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return pt.credential(t.oauthAccessToken)}catch{return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com";pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends hi{constructor(){super("twitter.com")}static credential(t,n){return Ht._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return gt.credentialFromTaggedObject(t)}static credentialFromError(t){return gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return gt.credential(n,i)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t){return ui(e,"POST","/v1/accounts:signUp",vn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await Ft._fromIdTokenResponse(t,i,s),o=tl(i);return new Vt({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=tl(i);return new Vt({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function tl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends at{constructor(t,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,is.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new is(t,n,i,s)}}function Qc(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?is._fromErrorAndOperation(e,r,t,i):r})}async function am(e,t,n=!1){const i=await dn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Vt._forOperation(e,"link",i)}/**
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
 */async function lm(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await dn(e,Qc(i,s,t,e),n);R(r.idToken,i,"internal-error");const o=Io(r.idToken);R(o,i,"internal-error");const{sub:a}=o;return R(e.uid===a,i,"user-mismatch"),Vt._forOperation(e,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Me(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(e,t,n=!1){const i="signIn",s=await Qc(e,i,t),r=await Vt._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function cm(e,t){return Zc(In(e),t)}async function um(e,t,n){var i;const s=In(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await ns(s,r,"signUpPassword");o=sr(s,c)}else o=sr(s,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const f=await ns(s,r,"signUpPassword");return sr(s,f)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Vt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function hm(e,t,n){return cm(lt(e),wn.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(e,t){return Wt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const i=lt(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await dn(i,fm(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function pm(e,t,n,i){return lt(e).onIdTokenChanged(t,n,i)}function gm(e,t,n){return lt(e).beforeAuthStateChanged(t,n)}function mm(e){return lt(e).signOut()}const ss="__sak";/**
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
 */class eu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ss,"1"),this.storage.removeItem(ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){const e=ge();return wo(e)||As(e)}const ym=1e3,vm=10;class tu extends eu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_m()&&Hg(),this.fallbackToPolling=Wc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);$g()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,vm):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},ym)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}tu.type="LOCAL";const Im=tu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends eu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}nu.type="SESSION";const iu=nu;/**
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
 */function wm(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new bs(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await wm(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Em{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ao("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(p){const I=p;if(I.data.eventId===c)switch(I.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(I.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function Tm(e){Ke().location.href=e}/**
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
 */function su(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Am(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bm(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Cm(){return su()?self:null}/**
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
 */const ru="firebaseLocalStorageDb",Sm=1,rs="firebaseLocalStorage",ou="fbase_key";class fi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cs(e,t){return e.transaction([rs],t?"readwrite":"readonly").objectStore(rs)}function Rm(){const e=indexedDB.deleteDatabase(ru);return new fi(e).toPromise()}function Dr(){const e=indexedDB.open(ru,Sm);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(rs,{keyPath:ou})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(rs)?t(i):(i.close(),await Rm(),t(await Dr()))})})}async function nl(e,t,n){const i=Cs(e,!0).put({[ou]:t,value:n});return new fi(i).toPromise()}async function Om(e,t){const n=Cs(e,!1).get(t),i=await new fi(n).toPromise();return i===void 0?null:i.value}function il(e,t){const n=Cs(e,!0).delete(t);return new fi(n).toPromise()}const Pm=800,km=3;class au{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dr(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>km)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return su()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bs._getInstance(Cm()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Am(),!this.activeServiceWorker)return;this.sender=new Em(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||bm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Dr();return await nl(t,ss,"1"),await il(t,ss),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>nl(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>Om(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>il(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=Cs(s,!1).getAll();return new fi(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}au.type="LOCAL";const Dm=au;new ci(3e4,6e4);/**
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
 */function Nm(e,t){return t?et(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class bo extends Eo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return on(t,this._buildIdpRequest())}_linkToIdToken(t,n){return on(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return on(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Lm(e){return Zc(e.auth,new bo(e),e.bypassAuthState)}function Mm(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),lm(n,new bo(e),e.bypassAuthState)}async function xm(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),am(n,new bo(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Lm;case"linkViaPopup":case"linkViaRedirect":return xm;case"reauthViaPopup":case"reauthViaRedirect":return Mm;default:Me(this.auth,"internal-error")}}resolve(t){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new ci(2e3,1e4);class Qt extends lu{constructor(t,n,i,s,r){super(t,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Qt.currentPopupAction&&Qt.currentPopupAction.cancel(),Qt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const t=Ao();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Um.get())};t()}}Qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="pendingRedirect",Wi=new Map;class jm extends lu{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Wi.get(this.auth._key());if(!t){try{const i=await Bm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Wi.set(this.auth._key(),t)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bm(e,t){const n=Vm(t),i=Hm(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function $m(e,t){Wi.set(e._key(),t)}function Hm(e){return et(e._redirectPersistence)}function Vm(e){return Vi(Fm,e.config.apiKey,e.name)}async function Wm(e,t,n=!1){const i=In(e),s=Nm(i,t),o=await new jm(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=10*60*1e3;class zm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!qm(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!cu(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(We(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Km&&this.cachedEventUids.clear(),this.cachedEventUids.has(sl(t))}saveEventToCache(t){this.cachedEventUids.add(sl(t)),this.lastProcessedEventTime=Date.now()}}function sl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function cu({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function qm(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cu(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(e,t={}){return Wt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xm=/^https?/;async function Ym(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Gm(e);for(const n of t)try{if(Qm(n))return}catch{}Me(e,"unauthorized-domain")}function Qm(e){const t=kr(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Xm.test(n))return!1;if(Jm.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Zm=new ci(3e4,6e4);function rl(){const e=Ke().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function e_(e){return new Promise((t,n)=>{var i,s,r;function o(){rl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{rl(),n(We(e,"network-request-failed"))},timeout:Zm.get()})}if(!((s=(i=Ke().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=Ke().gapi)===null||r===void 0)&&r.load)o();else{const a=Wg("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(We(e,"network-request-failed"))},Gc(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ki=null,t})}let Ki=null;function t_(e){return Ki=Ki||e_(e),Ki}/**
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
 */const n_=new ci(5e3,15e3),i_="__/auth/iframe",s_="emulator/auth/iframe",r_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a_(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?vo(t,s_):`https://${e.config.authDomain}/${i_}`,i={apiKey:t.apiKey,appName:e.name,v:yn},s=o_.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${li(i).slice(1)}`}async function l_(e){const t=await t_(e),n=Ke().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:a_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=We(e,"network-request-failed"),a=Ke().setTimeout(()=>{r(o)},n_.get());function l(){Ke().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const c_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},u_=500,h_=600,f_="_blank",d_="http://localhost";class ol{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p_(e,t,n,i=u_,s=h_){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},c_),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ge().toLowerCase();n&&(a=jc(c)?f_:n),Fc(c)&&(t=t||d_,l.scrollbars="yes");const f=Object.entries(l).reduce((I,[b,F])=>`${I}${b}=${F},`,"");if(Bg(c)&&a!=="_self")return g_(t||"",a),new ol(null);const p=window.open(t||"",a,f);R(p,e,"popup-blocked");try{p.focus()}catch{}return new ol(p)}function g_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const m_="__/auth/handler",__="emulator/auth/handler",y_=encodeURIComponent("fac");async function al(e,t,n,i,s,r){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:yn,eventId:s};if(t instanceof Yc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",fp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,p]of Object.entries(r||{}))o[f]=p}if(t instanceof hi){const f=t.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),c=l?`#${y_}=${encodeURIComponent(l)}`:"";return`${v_(e)}?${li(a).slice(1)}${c}`}function v_({config:e}){return e.emulator?vo(e,__):`https://${e.authDomain}/${m_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="webStorageSupport";class I_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iu,this._completeRedirectFn=Wm,this._overrideRedirectResult=$m}async _openPopup(t,n,i,s){var r;st((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await al(t,n,i,kr(),s);return p_(t,o,Ao())}async _openRedirect(t,n,i,s){await this._originValidation(t);const r=await al(t,n,i,kr(),s);return Tm(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(st(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await l_(t),i=new zm(t);return n.register("authEvent",s=>(R(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(rr,{type:rr},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[rr];o!==void 0&&n(!!o),Me(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ym(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wc()||wo()||As()}}const w_=I_;var ll="@firebase/auth",cl="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function A_(e){fn(new Bt("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kc(e)},c=new Jg(i,s,r,l);return Yg(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),fn(new Bt("auth-internal",t=>{const n=In(t.getProvider("auth").getImmediate());return(i=>new E_(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(ll,cl,T_(e)),It(ll,cl,"esm2017")}/**
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
 */const b_=5*60,C_=Ac("authIdTokenMaxAge")||b_;let ul=null;const S_=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>C_)return;const s=n==null?void 0:n.token;ul!==s&&(ul=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function R_(e=Rc()){const t=mo(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Xg(e,{popupRedirectResolver:w_,persistence:[Dm,Im,iu]}),i=Ac("authTokenSyncURL");if(i){const r=S_(i);gm(n,r,()=>r(n.currentUser)),pm(n,o=>r(o))}const s=Ec("auth");return s&&Qg(n,`http://${s}`),n}A_("Browser");var O_="firebase",P_="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(O_,P_,"app");var k_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,Co=Co||{},O=k_||self;function Ss(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function di(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function D_(e){return Object.prototype.hasOwnProperty.call(e,or)&&e[or]||(e[or]=++N_)}var or="closure_uid_"+(1e9*Math.random()>>>0),N_=0;function L_(e,t,n){return e.call.apply(e.bind,arguments)}function M_(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function de(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?de=L_:de=M_,de.apply(null,arguments)}function Ni(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function ie(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function Et(){this.s=this.s,this.o=this.o}var x_=0;Et.prototype.s=!1;Et.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),x_!=0)&&D_(this)};Et.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function So(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function hl(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Ss(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function pe(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var U_=function(){if(!O.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{O.addEventListener("test",()=>{},t),O.removeEventListener("test",()=>{},t)}catch{}return e}();function Qn(e){return/^[\s\xa0]*$/.test(e)}function Rs(){var e=O.navigator;return e&&(e=e.userAgent)?e:""}function $e(e){return Rs().indexOf(e)!=-1}function Ro(e){return Ro[" "](e),e}Ro[" "]=function(){};function F_(e,t){var n=ky;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var j_=$e("Opera"),Zn=$e("Trident")||$e("MSIE"),hu=$e("Edge"),Nr=hu||Zn,fu=$e("Gecko")&&!(Rs().toLowerCase().indexOf("webkit")!=-1&&!$e("Edge"))&&!($e("Trident")||$e("MSIE"))&&!$e("Edge"),B_=Rs().toLowerCase().indexOf("webkit")!=-1&&!$e("Edge");function du(){var e=O.document;return e?e.documentMode:void 0}e:{var fl="",ar=function(){var e=Rs();if(fu)return/rv:([^\);]+)(\)|;)/.exec(e);if(hu)return/Edge\/([\d\.]+)/.exec(e);if(Zn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(B_)return/WebKit\/(\S+)/.exec(e);if(j_)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ar&&(fl=ar?ar[1]:""),Zn){var dl=du();if(dl!=null&&dl>parseFloat(fl))break e}}O.document&&Zn&&du();function ei(e,t){if(pe.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(fu){e:{try{Ro(t.nodeName);var s=!0;break e}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:$_[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ei.$.h.call(this)}}ie(ei,pe);var $_={2:"touch",3:"pen",4:"mouse"};ei.prototype.h=function(){ei.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var pi="closure_listenable_"+(1e6*Math.random()|0),H_=0;function V_(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++H_,this.fa=this.ia=!1}function Os(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Oo(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function W_(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function pu(e){const t={};for(const n in e)t[n]=e[n];return t}const pl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gu(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<pl.length;r++)n=pl[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Ps(e){this.src=e,this.g={},this.h=0}Ps.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Mr(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new V_(t,this.src,r,!!i,s),t.ia=n,e.push(t)),t};function Lr(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=uu(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Os(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Mr(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}var Po="closure_lm_"+(1e6*Math.random()|0),lr={};function mu(e,t,n,i,s){if(i&&i.once)return yu(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)mu(e,t[r],n,i,s);return null}return n=No(n),e&&e[pi]?e.O(t,n,di(i)?!!i.capture:!!i,s):_u(e,t,n,!1,i,s)}function _u(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=di(s)?!!s.capture:!!s,a=Do(e);if(a||(e[Po]=a=new Ps(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=K_(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)U_||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(Iu(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function K_(){function e(n){return t.call(e.src,e.listener,n)}const t=z_;return e}function yu(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)yu(e,t[r],n,i,s);return null}return n=No(n),e&&e[pi]?e.P(t,n,di(i)?!!i.capture:!!i,s):_u(e,t,n,!0,i,s)}function vu(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)vu(e,t[r],n,i,s);else i=di(i)?!!i.capture:!!i,n=No(n),e&&e[pi]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Mr(r,n,i,s),-1<n&&(Os(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Do(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Mr(t,n,i,s)),(n=-1<e?t[e]:null)&&ko(n))}function ko(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[pi])Lr(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Iu(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Do(t))?(Lr(n,e),n.h==0&&(n.src=null,t[Po]=null)):Os(e)}}}function Iu(e){return e in lr?lr[e]:lr[e]="on"+e}function z_(e,t){if(e.fa)e=!0;else{t=new ei(t,this);var n=e.listener,i=e.la||e.src;e.ia&&ko(e),e=n.call(i,t)}return e}function Do(e){return e=e[Po],e instanceof Ps?e:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(e){return typeof e=="function"?e:(e[cr]||(e[cr]=function(t){return e.handleEvent(t)}),e[cr])}function ne(){Et.call(this),this.i=new Ps(this),this.S=this,this.J=null}ie(ne,Et);ne.prototype[pi]=!0;ne.prototype.removeEventListener=function(e,t,n,i){vu(this,e,t,n,i)};function ae(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new pe(t,e);else if(t instanceof pe)t.target=t.target||e;else{var s=t;t=new pe(i,e),gu(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=Li(o,i,!0,t)&&s}if(o=t.g=e,s=Li(o,i,!0,t)&&s,s=Li(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=Li(o,i,!1,t)&&s}ne.prototype.N=function(){if(ne.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Os(n[i]);delete e.g[t],e.h--}}this.J=null};ne.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};ne.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function Li(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Lr(e.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Lo=O.JSON.stringify;class q_{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function G_(){var e=Mo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class J_{constructor(){this.h=this.g=null}add(t,n){const i=wu.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var wu=new q_(()=>new X_,e=>e.reset());class X_{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Y_(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Q_(e){O.setTimeout(()=>{throw e},0)}let ti,ni=!1,Mo=new J_,Eu=()=>{const e=O.Promise.resolve(void 0);ti=()=>{e.then(Z_)}};var Z_=()=>{for(var e;e=G_();){try{e.h.call(e.g)}catch(n){Q_(n)}var t=wu;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ni=!1};function ks(e,t){ne.call(this),this.h=e||1,this.g=t||O,this.j=de(this.qb,this),this.l=Date.now()}ie(ks,ne);E=ks.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ae(this,"tick"),this.ga&&(xo(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xo(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}E.N=function(){ks.$.N.call(this),xo(this),delete this.g};function Uo(e,t,n){if(typeof e=="function")n&&(e=de(e,n));else if(e&&typeof e.handleEvent=="function")e=de(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:O.setTimeout(e,t||0)}function Tu(e){e.g=Uo(()=>{e.g=null,e.i&&(e.i=!1,Tu(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class ey extends Et{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Tu(this)}N(){super.N(),this.g&&(O.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(e){Et.call(this),this.h=e,this.g={}}ie(ii,Et);var gl=[];function Au(e,t,n,i){Array.isArray(n)||(n&&(gl[0]=n.toString()),n=gl);for(var s=0;s<n.length;s++){var r=mu(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function bu(e){Oo(e.g,function(t,n){this.g.hasOwnProperty(n)&&ko(t)},e),e.g={}}ii.prototype.N=function(){ii.$.N.call(this),bu(this)};ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ds(){this.g=!0}Ds.prototype.Ea=function(){this.g=!1};function ty(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var f=c[0];c=c[1];var p=f.split("_");o=2<=p.length&&p[1]=="type"?o+(f+"="+c+"&"):o+(f+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function ny(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function Zt(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+sy(e,n)+(i?" "+i:"")})}function iy(e,t){e.info(function(){return"TIMEOUT: "+t})}Ds.prototype.info=function(){};function sy(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Lo(n)}catch{return t}}var En={},ml=null;function Fo(){return ml=ml||new ne}En.Ta="serverreachability";function Cu(e){pe.call(this,En.Ta,e)}ie(Cu,pe);function si(e){const t=Fo();ae(t,new Cu(t))}En.STAT_EVENT="statevent";function Su(e,t){pe.call(this,En.STAT_EVENT,e),this.stat=t}ie(Su,pe);function ve(e){const t=Fo();ae(t,new Su(t,e))}En.Ua="timingevent";function Ru(e,t){pe.call(this,En.Ua,e),this.size=t}ie(Ru,pe);function gi(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return O.setTimeout(function(){e()},t)}var jo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ry={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bo(){}Bo.prototype.h=null;function _l(e){return e.h||(e.h=e.i())}function oy(){}var mi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $o(){pe.call(this,"d")}ie($o,pe);function Ho(){pe.call(this,"c")}ie(Ho,pe);var xr;function Ns(){}ie(Ns,Bo);Ns.prototype.g=function(){return new XMLHttpRequest};Ns.prototype.i=function(){return{}};xr=new Ns;function _i(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new ii(this),this.P=ay,e=Nr?125:void 0,this.V=new ks(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ou}function Ou(){this.i=null,this.g="",this.h=!1}var ay=45e3,Ur={},os={};E=_i.prototype;E.setTimeout=function(e){this.P=e};function Fr(e,t,n){e.L=1,e.v=Ms(rt(t)),e.s=n,e.S=!0,Pu(e,null)}function Pu(e,t){e.G=Date.now(),yi(e),e.A=rt(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),Fu(n.i,"t",i),e.C=0,n=e.l.J,e.h=new Ou,e.g=rh(e.l,n?t:null,!e.s),0<e.O&&(e.M=new ey(de(e.Pa,e,e.g),e.O)),Au(e.U,e.g,"readystatechange",e.nb),t=e.I?pu(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),si(),ty(e.j,e.u,e.A,e.m,e.W,e.s)}E.nb=function(e){e=e.target;const t=this.M;t&&He(e)==3?t.l():this.Pa(e)};E.Pa=function(e){try{if(e==this.g)e:{const f=He(this.g);var t=this.g.Ia();const p=this.g.da();if(!(3>f)&&(f!=3||Nr||this.g&&(this.h.h||this.g.ja()||wl(this.g)))){this.J||f!=4||t==7||(t==8||0>=p?si(3):si(2)),Ls(this);var n=this.g.da();this.ca=n;t:if(ku(this)){var i=wl(this.g);e="";var s=i.length,r=He(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lt(this),Hn(this);var o="";break t}this.h.i=new O.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ny(this.j,this.u,this.A,this.m,this.W,f,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qn(a)){var c=a;break t}}c=null}if(n=c)Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jr(this,n);else{this.i=!1,this.o=3,ve(12),Lt(this),Hn(this);break e}}this.S?(Du(this,f,o),Nr&&this.i&&f==3&&(Au(this.U,this.V,"tick",this.mb),this.V.start())):(Zt(this.j,this.m,o,null),jr(this,o)),f==4&&Lt(this),this.i&&!this.J&&(f==4?th(this.l,this):(this.i=!1,yi(this)))}else Ry(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ve(12)):(this.o=0,ve(13)),Lt(this),Hn(this)}}}catch{}finally{}};function ku(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Du(e,t,n){let i=!0,s;for(;!e.J&&e.C<n.length;)if(s=ly(e,n),s==os){t==4&&(e.o=4,ve(14),i=!1),Zt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Ur){e.o=4,ve(15),Zt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Zt(e.j,e.m,s,null),jr(e,s);ku(e)&&s!=os&&s!=Ur&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ve(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Go(t),t.M=!0,ve(11))):(Zt(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Hn(e))}E.mb=function(){if(this.g){var e=He(this.g),t=this.g.ja();this.C<t.length&&(Ls(this),Du(this,e,t),this.i&&e!=4&&yi(this))}};function ly(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?os:(n=Number(t.substring(n,i)),isNaN(n)?Ur:(i+=1,i+n>t.length?os:(t=t.slice(i,i+n),e.C=i+n,t)))}E.cancel=function(){this.J=!0,Lt(this)};function yi(e){e.Y=Date.now()+e.P,Nu(e,e.P)}function Nu(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=gi(de(e.lb,e),t)}function Ls(e){e.B&&(O.clearTimeout(e.B),e.B=null)}E.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(iy(this.j,this.A),this.L!=2&&(si(),ve(17)),Lt(this),this.o=2,Hn(this)):Nu(this,this.Y-e)};function Hn(e){e.l.H==0||e.J||th(e.l,e)}function Lt(e){Ls(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,xo(e.V),bu(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function jr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Br(n.i,e))){if(!e.K&&Br(n.i,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)cs(n),js(n);else break e;qo(n),ve(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=gi(de(n.ib,n),6e3));if(1>=$u(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mt(n,11)}else if((e.K||n.g==e)&&cs(n),!Qn(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const f=c[3];f!=null&&(n.ra=f,n.l.info("VER="+n.ra));const p=c[4];p!=null&&(n.Ga=p,n.l.info("SVER="+n.Ga));const I=c[5];I!=null&&typeof I=="number"&&0<I&&(i=1.5*I,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const b=e.g;if(b){const F=b.g?b.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(F){var r=i.i;r.g||F.indexOf("spdy")==-1&&F.indexOf("quic")==-1&&F.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Vo(r,r.h),r.h=null))}if(i.F){const D=b.g?b.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(i.Da=D,z(i.I,i.F,D))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=sh(i,i.J?i.pa:null,i.Y),o.K){Hu(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(Ls(a),yi(a)),i.g=o}else Zu(i);0<n.j.length&&Bs(n)}else c[0]!="stop"&&c[0]!="close"||Mt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Mt(n,7):zo(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}si(4)}catch{}}function cy(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ss(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function uy(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ss(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function Lu(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ss(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=uy(e),i=cy(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var Mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hy(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function jt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jt){this.h=e.h,as(this,e.j),this.s=e.s,this.g=e.g,ls(this,e.m),this.l=e.l;var t=e.i,n=new ri;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),yl(this,n),this.o=e.o}else e&&(t=String(e).match(Mu))?(this.h=!1,as(this,t[1]||"",!0),this.s=Mn(t[2]||""),this.g=Mn(t[3]||"",!0),ls(this,t[4]),this.l=Mn(t[5]||"",!0),yl(this,t[6]||"",!0),this.o=Mn(t[7]||"")):(this.h=!1,this.i=new ri(null,this.h))}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(xn(t,vl,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(xn(t,vl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(xn(n,n.charAt(0)=="/"?py:dy,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",xn(n,my)),e.join("")};function rt(e){return new jt(e)}function as(e,t,n){e.j=n?Mn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ls(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function yl(e,t,n){t instanceof ri?(e.i=t,_y(e.i,e.h)):(n||(t=xn(t,gy)),e.i=new ri(t,e.h))}function z(e,t,n){e.i.set(t,n)}function Ms(e){return z(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Mn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function xn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,fy),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fy(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var vl=/[#\/\?@]/g,dy=/[#\?:]/g,py=/[#\?]/g,gy=/[#\?@]/g,my=/#/g;function ri(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Tt(e){e.g||(e.g=new Map,e.h=0,e.i&&hy(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}E=ri.prototype;E.add=function(e,t){Tt(this),this.i=null,e=Tn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xu(e,t){Tt(e),t=Tn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Uu(e,t){return Tt(e),t=Tn(e,t),e.g.has(t)}E.forEach=function(e,t){Tt(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)};E.ta=function(){Tt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n};E.Z=function(e){Tt(this);let t=[];if(typeof e=="string")Uu(this,e)&&(t=t.concat(this.g.get(Tn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};E.set=function(e,t){return Tt(this),this.i=null,e=Tn(this,e),Uu(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};E.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Fu(e,t,n){xu(e,t),0<n.length&&(e.i=null,e.g.set(Tn(e,t),So(n)),e.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Tn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function _y(e,t){t&&!e.j&&(Tt(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(xu(this,i),Fu(this,s,n))},e)),e.j=t}var yy=class{constructor(e,t){this.g=e,this.map=t}};function ju(e){this.l=e||vy,O.PerformanceNavigationTiming?(e=O.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(O.g&&O.g.Ka&&O.g.Ka()&&O.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vy=10;function Bu(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function $u(e){return e.h?1:e.g?e.g.size:0}function Br(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Vo(e,t){e.g?e.g.add(t):e.h=t}function Hu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ju.prototype.cancel=function(){if(this.i=Vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Vu(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return So(e.i)}var Iy=class{stringify(e){return O.JSON.stringify(e,void 0)}parse(e){return O.JSON.parse(e,void 0)}};function wy(){this.g=new Iy}function Ey(e,t,n){const i=n||"";try{Lu(e,function(s,r){let o=s;di(s)&&(o=Lo(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function Ty(e,t){const n=new Ds;if(O.Image){const i=new Image;i.onload=Ni(Mi,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Ni(Mi,n,i,"TestLoadImage: error",!1,t),i.onabort=Ni(Mi,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Ni(Mi,n,i,"TestLoadImage: timeout",!1,t),O.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function Mi(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function xs(e){this.l=e.fc||null,this.j=e.ob||!1}ie(xs,Bo);xs.prototype.g=function(){return new Us(this.l,this.j)};xs.prototype.i=function(e){return function(){return e}}({});function Us(e,t){ne.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Wo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ie(Us,ne);var Wo=0;E=Us.prototype;E.open=function(e,t){if(this.readyState!=Wo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,oi(this)};E.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||O).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=Wo};E.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,oi(this)),this.g&&(this.readyState=3,oi(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof O.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wu(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Wu(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}E.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vi(this):oi(this),this.readyState==3&&Wu(this)}};E.Za=function(e){this.g&&(this.response=this.responseText=e,vi(this))};E.Ya=function(e){this.g&&(this.response=e,vi(this))};E.ka=function(){this.g&&vi(this)};function vi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,oi(e)}E.setRequestHeader=function(e,t){this.v.append(e,t)};E.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function oi(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Ay=O.JSON.parse;function X(e){ne.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ku,this.L=this.M=!1}ie(X,ne);var Ku="",by=/^https?$/i,Cy=["POST","PUT"];E=X.prototype;E.Oa=function(e){this.M=e};E.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():xr.g(),this.C=this.u?_l(this.u):_l(xr),this.g.onreadystatechange=de(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){Il(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=O.FormData&&e instanceof O.FormData,!(0<=uu(Cy,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Gu(this),0<this.B&&((this.L=Sy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=de(this.ua,this)):this.A=Uo(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Il(this,r)}};function Sy(e){return Zn&&typeof e.timeout=="number"&&e.ontimeout!==void 0}E.ua=function(){typeof Co<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ae(this,"timeout"),this.abort(8))};function Il(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,zu(e),Fs(e)}function zu(e){e.F||(e.F=!0,ae(e,"complete"),ae(e,"error"))}E.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ae(this,"complete"),ae(this,"abort"),Fs(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fs(this,!0)),X.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?qu(this):this.kb())};E.kb=function(){qu(this)};function qu(e){if(e.h&&typeof Co<"u"&&(!e.C[1]||He(e)!=4||e.da()!=2)){if(e.v&&He(e)==4)Uo(e.La,0,e);else if(ae(e,"readystatechange"),He(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=o===0){var s=String(e.I).match(Mu)[1]||null;!s&&O.self&&O.self.location&&(s=O.self.location.protocol.slice(0,-1)),i=!by.test(s?s.toLowerCase():"")}n=i}if(n)ae(e,"complete"),ae(e,"success");else{e.m=6;try{var r=2<He(e)?e.g.statusText:""}catch{r=""}e.j=r+" ["+e.da()+"]",zu(e)}}finally{Fs(e)}}}}function Fs(e,t){if(e.g){Gu(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ae(e,"ready");try{n.onreadystatechange=i}catch{}}}function Gu(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(O.clearTimeout(e.A),e.A=null)}E.isActive=function(){return!!this.g};function He(e){return e.g?e.g.readyState:0}E.da=function(){try{return 2<He(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Ay(t)}};function wl(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ku:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Ry(e){const t={};e=(e.g&&2<=He(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<e.length;i++){if(Qn(e[i]))continue;var n=Y_(e[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=t[s]||[];t[s]=r,r.push(n)}W_(t,function(i){return i.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ju(e){let t="";return Oo(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Ko(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Ju(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):z(e,t,n))}function Rn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Xu(e){this.Ga=0,this.j=[],this.l=new Ds,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Rn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Rn("baseRetryDelayMs",5e3,e),this.hb=Rn("retryDelaySeedMs",1e4,e),this.eb=Rn("forwardChannelMaxRetries",2,e),this.xa=Rn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new ju(e&&e.concurrentRequestLimit),this.Ja=new wy,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=Xu.prototype;E.ra=8;E.H=1;function zo(e){if(Yu(e),e.H==3){var t=e.W++,n=rt(e.I);if(z(n,"SID",e.K),z(n,"RID",t),z(n,"TYPE","terminate"),Ii(e,n),t=new _i(e,e.l,t),t.L=2,t.v=Ms(rt(n)),n=!1,O.navigator&&O.navigator.sendBeacon)try{n=O.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&O.Image&&(new Image().src=t.v,n=!0),n||(t.g=rh(t.l,null),t.g.ha(t.v)),t.G=Date.now(),yi(t)}ih(e)}function js(e){e.g&&(Go(e),e.g.cancel(),e.g=null)}function Yu(e){js(e),e.u&&(O.clearTimeout(e.u),e.u=null),cs(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&O.clearTimeout(e.m),e.m=null)}function Bs(e){if(!Bu(e.i)&&!e.m){e.m=!0;var t=e.Na;ti||Eu(),ni||(ti(),ni=!0),Mo.add(t,e),e.C=0}}function Oy(e,t){return $u(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=gi(de(e.Na,e,t),nh(e,e.C)),e.C++,!0)}E.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new _i(this,this.l,e);let r=this.s;if(this.U&&(r?(r=pu(r),gu(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Qu(this,s,t),n=rt(this.I),z(n,"RID",e),z(n,"CVER",22),this.F&&z(n,"X-HTTP-Session-Id",this.F),Ii(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(Ju(r)))+"&"+t:this.o&&Ko(n,this.o,r)),Vo(this.i,s),this.bb&&z(n,"TYPE","init"),this.P?(z(n,"$req",t),z(n,"SID","null"),s.aa=!0,Fr(s,n,null)):Fr(s,n,t),this.H=2}}else this.H==3&&(e?El(this,e):this.j.length==0||Bu(this.i)||El(this))};function El(e,t){var n;t?n=t.m:n=e.W++;const i=rt(e.I);z(i,"SID",e.K),z(i,"RID",n),z(i,"AID",e.V),Ii(e,i),e.o&&e.s&&Ko(i,e.o,e.s),n=new _i(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Qu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Vo(e.i,n),Fr(n,i,t)}function Ii(e,t){e.na&&Oo(e.na,function(n,i){z(t,i,n)}),e.h&&Lu({},function(n,i){z(t,i,n)})}function Qu(e,t,n){n=Math.min(e.j.length,n);var i=e.h?de(e.h.Va,e.h,e):null;e:{var s=e.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const f=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{Ey(f,o,"req"+c+"_")}catch{i&&i(f)}}if(a){i=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function Zu(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ti||Eu(),ni||(ti(),ni=!0),Mo.add(t,e),e.A=0}}function qo(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=gi(de(e.Ma,e),nh(e,e.A)),e.A++,!0)}E.Ma=function(){if(this.u=null,eh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=gi(de(this.jb,this),e)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ve(10),js(this),eh(this))};function Go(e){e.B!=null&&(O.clearTimeout(e.B),e.B=null)}function eh(e){e.g=new _i(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=rt(e.wa);z(t,"RID","rpc"),z(t,"SID",e.K),z(t,"AID",e.V),z(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&z(t,"TO",e.qa),z(t,"TYPE","xmlhttp"),Ii(e,t),e.o&&e.s&&Ko(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ms(rt(t)),n.s=null,n.S=!0,Pu(n,e)}E.ib=function(){this.v!=null&&(this.v=null,js(this),qo(this),ve(19))};function cs(e){e.v!=null&&(O.clearTimeout(e.v),e.v=null)}function th(e,t){var n=null;if(e.g==t){cs(e),Go(e),e.g=null;var i=2}else if(Br(e.i,t))n=t.F,Hu(e.i,t),i=1;else return;if(e.H!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;i=Fo(),ae(i,new Ru(i,n)),Bs(e)}else Zu(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(i==1&&Oy(e,t)||i==2&&qo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Mt(e,5);break;case 4:Mt(e,10);break;case 3:Mt(e,6);break;default:Mt(e,2)}}}function nh(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Mt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var i=de(e.pb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),O.location&&O.location.protocol=="http"||as(n,"https"),Ms(n)),Ty(n.toString(),i)}else ve(2);e.H=0,e.h&&e.h.za(t),ih(e),Yu(e)}E.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ve(2)):(this.l.info("Failed to ping google.com"),ve(1))};function ih(e){if(e.H=0,e.ma=[],e.h){const t=Vu(e.i);(t.length!=0||e.j.length!=0)&&(hl(e.ma,t),hl(e.ma,e.j),e.i.i.length=0,So(e.j),e.j.length=0),e.h.ya()}}function sh(e,t,n){var i=n instanceof jt?rt(n):new jt(n);if(i.g!="")t&&(i.g=t+"."+i.g),ls(i,i.m);else{var s=O.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new jt(null);i&&as(r,i),t&&(r.g=t),s&&ls(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&z(i,n,t),z(i,"VER",e.ra),Ii(e,i),i}function rh(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new X(new xs({ob:!0})):new X(e.va),t.Oa(e.J),t}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function oh(){}E=oh.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function Ce(e,t){ne.call(this),this.g=new Xu(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Qn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Qn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new An(this)}ie(Ce,ne);Ce.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ve(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=sh(e,null,e.Y),Bs(e)};Ce.prototype.close=function(){zo(this.g)};Ce.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Lo(e),e=n);t.j.push(new yy(t.fb++,e)),t.H==3&&Bs(t)};Ce.prototype.N=function(){this.g.h=null,delete this.j,zo(this.g),delete this.g,Ce.$.N.call(this)};function ah(e){$o.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ie(ah,$o);function lh(){Ho.call(this),this.status=1}ie(lh,Ho);function An(e){this.g=e}ie(An,oh);An.prototype.Ba=function(){ae(this.g,"a")};An.prototype.Aa=function(e){ae(this.g,new ah(e))};An.prototype.za=function(e){ae(this.g,new lh)};An.prototype.ya=function(){ae(this.g,"b")};function Py(){this.blockSize=-1}function qe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ie(qe,Py);qe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ur(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^r&(n^s))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^r)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~r))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}qe.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(s==0)for(;r<=n;)ur(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){ur(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){ur(this,i),s=0;break}}this.h=s,this.i+=t};qe.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function $(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=e[s]|0;i&&r==t||(n[s]=r,i=!1)}this.g=n}var ky={};function Jo(e){return-128<=e&&128>e?F_(e,function(t){return new $([t|0],0>t?-1:0)}):new $([e|0],0>e?-1:0)}function Ve(e){if(isNaN(e)||!isFinite(e))return an;if(0>e)return re(Ve(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=$r;return new $(t,0)}function ch(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return re(ch(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ve(Math.pow(t,8)),i=an,s=0;s<e.length;s+=8){var r=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+r),t);8>r?(r=Ve(Math.pow(t,r)),i=i.R(r).add(Ve(o))):(i=i.R(n),i=i.add(Ve(o)))}return i}var $r=4294967296,an=Jo(0),Hr=Jo(1),Tl=Jo(16777216);E=$.prototype;E.ea=function(){if(Ae(this))return-re(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:$r+i)*t,t*=$r}return e};E.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(tt(this))return"0";if(Ae(this))return"-"+re(this).toString(e);for(var t=Ve(Math.pow(e,6)),n=this,i="";;){var s=hs(n,t).g;n=us(n,s.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,tt(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};E.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function tt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Ae(e){return e.h==-1}E.X=function(e){return e=us(this,e),Ae(e)?-1:tt(e)?0:1};function re(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new $(n,~e.h).add(Hr)}E.abs=function(){return Ae(this)?re(this):this};E.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(this.D(s)&65535)+(e.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new $(n,n[n.length-1]&-2147483648?-1:0)};function us(e,t){return e.add(re(t))}E.R=function(e){if(tt(this)||tt(e))return an;if(Ae(this))return Ae(e)?re(this).R(re(e)):re(re(this).R(e));if(Ae(e))return re(this.R(re(e)));if(0>this.X(Tl)&&0>e.X(Tl))return Ve(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*i+2*s]+=o*l,xi(n,2*i+2*s),n[2*i+2*s+1]+=r*l,xi(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,xi(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,xi(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new $(n,0)};function xi(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function On(e,t){this.g=e,this.h=t}function hs(e,t){if(tt(t))throw Error("division by zero");if(tt(e))return new On(an,an);if(Ae(e))return t=hs(re(e),t),new On(re(t.g),re(t.h));if(Ae(t))return t=hs(e,re(t)),new On(re(t.g),t.h);if(30<e.g.length){if(Ae(e)||Ae(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Hr,i=t;0>=i.X(e);)n=Al(n),i=Al(i);var s=Gt(n,1),r=Gt(i,1);for(i=Gt(i,2),n=Gt(n,2);!tt(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=Gt(i,1),n=Gt(n,1)}return t=us(e,s.R(t)),new On(s,t)}for(s=an;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Ve(n),o=r.R(t);Ae(o)||0<o.X(e);)n-=i,r=Ve(n),o=r.R(t);tt(r)&&(r=Hr),s=s.add(r),e=us(e,o)}return new On(s,e)}E.gb=function(e){return hs(this,e).h};E.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new $(n,this.h&e.h)};E.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new $(n,this.h|e.h)};E.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new $(n,this.h^e.h)};function Al(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new $(n,e.h)}function Gt(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new $(s,e.h)}Ce.prototype.send=Ce.prototype.u;Ce.prototype.open=Ce.prototype.m;Ce.prototype.close=Ce.prototype.close;jo.NO_ERROR=0;jo.TIMEOUT=8;jo.HTTP_ERROR=6;ry.COMPLETE="complete";oy.EventType=mi;mi.OPEN="a";mi.CLOSE="b";mi.ERROR="c";mi.MESSAGE="d";ne.prototype.listen=ne.prototype.O;X.prototype.listenOnce=X.prototype.P;X.prototype.getLastError=X.prototype.Sa;X.prototype.getLastErrorCode=X.prototype.Ia;X.prototype.getStatus=X.prototype.da;X.prototype.getResponseJson=X.prototype.Wa;X.prototype.getResponseText=X.prototype.ja;X.prototype.send=X.prototype.ha;X.prototype.setWithCredentials=X.prototype.Oa;qe.prototype.digest=qe.prototype.l;qe.prototype.reset=qe.prototype.reset;qe.prototype.update=qe.prototype.j;$.prototype.add=$.prototype.add;$.prototype.multiply=$.prototype.R;$.prototype.modulo=$.prototype.gb;$.prototype.compare=$.prototype.X;$.prototype.toNumber=$.prototype.ea;$.prototype.toString=$.prototype.toString;$.prototype.getBits=$.prototype.D;$.fromNumber=Ve;$.fromString=ch;var Dy=$;const bl="@firebase/firestore";/**
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
 */class ce{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ce.UNAUTHENTICATED=new ce(null),ce.GOOGLE_CREDENTIALS=new ce("google-credentials-uid"),ce.FIRST_PARTY=new ce("first-party-uid"),ce.MOCK_USER=new ce("mock-user");/**
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
 */let wi="9.23.0";/**
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
 */const pn=new po("@firebase/firestore");function Te(e,...t){if(pn.logLevel<=j.DEBUG){const n=t.map(Yo);pn.debug(`Firestore (${wi}): ${e}`,...n)}}function Xo(e,...t){if(pn.logLevel<=j.ERROR){const n=t.map(Yo);pn.error(`Firestore (${wi}): ${e}`,...n)}}function Ny(e,...t){if(pn.logLevel<=j.WARN){const n=t.map(Yo);pn.warn(`Firestore (${wi}): ${e}`,...n)}}function Yo(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Qo(e="Unexpected state"){const t=`FIRESTORE (${wi}) INTERNAL ASSERTION FAILED: `+e;throw Xo(t),new Error(t)}function Vr(e,t){e||Qo()}/**
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
 */const he={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends at{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ln{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class uh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ly{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ce.UNAUTHENTICATED))}shutdown(){}}class My{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xy{constructor(t){this.t=t,this.currentUser=ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new ln;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ln,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Te("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ln)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Vr(typeof i.accessToken=="string"),new uh(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Vr(t===null||typeof t=="string"),new ce(t)}}class Uy{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=ce.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Fy{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new Uy(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jy{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class By{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const i=r=>{r.error!=null&&Te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{Te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):Te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Vr(typeof n.token=="string"),this.T=n.token,new jy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Hy{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=$y(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function hh(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Vy{constructor(t,n,i,s,r,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class fs{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new fs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof fs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Cl,x;(x=Cl||(Cl={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Dy([4294967295,4294967295],0);function hr(){return typeof document<"u"?document:null}/**
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
 */class Wy{constructor(t,n,i=1e3,s=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&Te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Zo{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,a=new Zo(t,n,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(he.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ky(e,t){if(Xo("AsyncQueue",`${t}: ${e}`),hh(e))return new fe(he.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class zy{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=ce.UNAUTHENTICATED,this.clientId=Hy.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Te("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Te("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fe(he.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Ky(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}/**
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
 */function fh(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new Map;function qy(e,t,n,i){if(t===!0&&i===!0)throw new fe(he.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Gy(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Qo()}function Jy(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fe(he.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gy(e);throw new fe(he.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new fe(he.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new fe(he.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fh((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=t.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,i}}class dh{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fe(he.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new fe(he.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rl(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ly;switch(n.type){case"firstParty":return new Fy(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new fe(he.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Sl.get(t);n&&(Te("ComponentProvider","Removing Datastore"),Sl.delete(t),n.terminate())}(this),Promise.resolve()}}function Xy(e,t,n,i={}){var s;const r=(e=Jy(e,dh))._getSettings(),o=`${t}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ny("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=ce.MOCK_USER;else{a=np(i.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new fe(he.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ce(c)}e._authCredentials=new My(new uh(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Wy(this,"async_queue_retry"),this.Xc=()=>{const n=hr();n&&Te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=hr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=hr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new ln;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!hh(t))throw t;Te("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Xo("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(t,n,i){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const s=Zo.createAndSchedule(this,t,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&Qo()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class Qy extends dh{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new Yy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ev(this),this._firestoreClient.terminate()}}function Zy(e,t){const n=typeof e=="object"?e:Rc(),i=typeof e=="string"?e:t||"(default)",s=mo(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=ep("firestore");r&&Xy(s,...r)}return s}function ev(e){var t,n,i;const s=e._freezeSettings(),r=function(o,a,l,c){return new Vy(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,fh(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new zy(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){wi=n})(yn),fn(new Bt("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Qy(new xy(n.getProvider("auth-internal")),new By(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new fe(he.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fs(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:t},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),It(bl,"3.13.0",e),It(bl,"3.13.0","esm2017")})();const tv={apiKey:"AIzaSyDSFUoWNmdlw4OyCK89i5DCX1MvSkZyo6E",authDomain:"blood-bank-vue.firebaseapp.com",projectId:"blood-bank-vue",storageBucket:"blood-bank-vue.appspot.com",messagingSenderId:"1005473572226",appId:"1:1005473572226:web:2c6519c0684db8307e1b9b"};Sc(tv);Zy();const cn=R_(),ea=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},nv={emits:["loggedIn"],data(){return{username:"",email:"",password:""}},methods:{signUp(){um(cn,this.email,this.password).then(()=>{dm(cn.currentUser,{displayName:this.username}).then(()=>{this.$emit("loggedIn")})}).catch(e=>{console.log(e.message)})}}},iv=se("h2",null,null,-1),sv=se("button",null,"Sign Up",-1);function rv(e,t,n,i,s,r){return Xt(),Yt("form",{onSubmit:t[3]||(t[3]=yc((...o)=>r.signUp&&r.signUp(...o),["prevent"]))},[iv,Un(se("input",{type:"text",placeholder:"Username",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>s.username=o)},null,512),[[Bn,s.username]]),Un(se("input",{type:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[1]||(t[1]=o=>s.email=o)},null,512),[[Bn,s.email]]),Un(se("input",{type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[2]||(t[2]=o=>s.password=o)},null,512),[[Bn,s.password]]),sv],32)}const ov=ea(nv,[["render",rv]]),av={data(){return{email:"",password:""}},methods:{login(){hm(cn,this.email,this.password).then(()=>{this.$emit("loggedIn")}).catch(e=>{console.error("Login error:",e)})}}},lv=se("h2",null,null,-1),cv=se("button",null,"Log in",-1);function uv(e,t,n,i,s,r){return Xt(),Yt("form",{onSubmit:t[2]||(t[2]=yc((...o)=>r.login&&r.login(...o),["prevent"]))},[lv,Un(se("input",{type:"email",placeholder:"What's your email?",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>s.email=o)},null,512),[[Bn,s.email]]),Un(se("input",{type:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=o=>s.password=o)},null,512),[[Bn,s.password]]),cv],32)}const hv=ea(av,[["render",uv]]);const fv={components:{SignupForm:ov,LoginForm:hv},data(){return{isLoggedIn:!1,showLogin:!0,displayName:""}},beforeUpdate(){cn.currentUser&&(this.displayName=cn.currentUser.displayName)},methods:{logOut(){mm(cn).then(()=>{this.isLoggedIn=!1})}}},dv={key:0},pv={key:1};function gv(e,t,n,i,s,r){const o=_a("login-form"),a=_a("signup-form");return s.isLoggedIn?(Xt(),Yt("div",pv,[se("h2",null,"Welcome "+Rh(s.displayName),1),se("button",{onClick:t[4]||(t[4]=(...l)=>r.logOut&&r.logOut(...l))},"Sign Out")])):(Xt(),Yt("div",dv,[s.showLogin?(Xt(),Yt(Pe,{key:0},[nt(o,{onLoggedIn:t[0]||(t[0]=l=>s.isLoggedIn=!0)}),se("p",null,[Dn("No account yet? "),se("span",{onClick:t[1]||(t[1]=l=>s.showLogin=!1)},"Sign Up"),Dn(" instead.")])],64)):(Xt(),Yt(Pe,{key:1},[nt(a,{onLoggedIn:t[2]||(t[2]=l=>s.isLoggedIn=!0)}),se("p",null,[Dn("Already registered? "),se("span",{onClick:t[3]||(t[3]=l=>s.showLogin=!0)},"Login"),Dn(" instead.")])],64))]))}const mv=ea(fv,[["render",gv]]);Kd(mv).mount("#app");
