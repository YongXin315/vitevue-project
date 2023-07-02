(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Bo(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ie={},kn=[],Xe=()=>{},id=()=>!1,sd=/^on[^a-z]/,er=e=>sd.test(e),Ho=e=>e.startsWith("onUpdate:"),_e=Object.assign,Vo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rd=Object.prototype.hasOwnProperty,z=(e,t)=>rd.call(e,t),j=Array.isArray,Pn=e=>tr(e)==="[object Map]",Wc=e=>tr(e)==="[object Set]",V=e=>typeof e=="function",ge=e=>typeof e=="string",Wo=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",qc=e=>oe(e)&&V(e.then)&&V(e.catch),Kc=Object.prototype.toString,tr=e=>Kc.call(e),od=e=>tr(e).slice(8,-1),zc=e=>tr(e)==="[object Object]",qo=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Is=Bo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ad=/-(\w)/g,gt=nr(e=>e.replace(ad,(t,n)=>n?n.toUpperCase():"")),ld=/\B([A-Z])/g,Gn=nr(e=>e.replace(ld,"-$1").toLowerCase()),ir=nr(e=>e.charAt(0).toUpperCase()+e.slice(1)),xr=nr(e=>e?`on${ir(e)}`:""),Ri=(e,t)=>!Object.is(e,t),bs=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ks=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let sl;const ao=()=>sl||(sl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ko(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=ge(i)?fd(i):Ko(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(ge(e))return e;if(oe(e))return e}}const cd=/;(?![^(]*\))/g,ud=/:([^]+)/,hd=/\/\*[^]*?\*\//g;function fd(e){const t={};return e.replace(hd,"").split(cd).forEach(n=>{if(n){const i=n.split(ud);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Yn(e){let t="";if(ge(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const i=Yn(e[n]);i&&(t+=i+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const dd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pd=Bo(dd);function Gc(e){return!!e||e===""}const Tt=e=>ge(e)?e:e==null?"":j(e)||oe(e)&&(e.toString===Kc||!V(e.toString))?JSON.stringify(e,Yc,2):String(e),Yc=(e,t)=>t&&t.__v_isRef?Yc(e,t.value):Pn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Wc(t)?{[`Set(${t.size})`]:[...t.values()]}:oe(t)&&!j(t)&&!zc(t)?String(t):t;let Ge;class gd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ge,!t&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ge;try{return Ge=this,t()}finally{Ge=n}}}on(){Ge=this}off(){Ge=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function md(e,t=Ge){t&&t.active&&t.effects.push(e)}function vd(){return Ge}const zo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Jc=e=>(e.w&Gt)>0,Xc=e=>(e.n&Gt)>0,yd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Gt},_d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];Jc(s)&&!Xc(s)?s.delete(e):t[n++]=s,s.w&=~Gt,s.n&=~Gt}t.length=n}},Ps=new WeakMap;let pi=0,Gt=1;const lo=30;let Ye;const ln=Symbol(""),co=Symbol("");class Go{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,md(this,i)}run(){if(!this.active)return this.fn();let t=Ye,n=Ht;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ye,Ye=this,Ht=!0,Gt=1<<++pi,pi<=lo?yd(this):rl(this),this.fn()}finally{pi<=lo&&_d(this),Gt=1<<--pi,Ye=this.parent,Ht=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ye===this?this.deferStop=!0:this.active&&(rl(this),this.onStop&&this.onStop(),this.active=!1)}}function rl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ht=!0;const Qc=[];function Jn(){Qc.push(Ht),Ht=!1}function Xn(){const e=Qc.pop();Ht=e===void 0?!0:e}function Fe(e,t,n){if(Ht&&Ye){let i=Ps.get(e);i||Ps.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=zo()),Zc(s)}}function Zc(e,t){let n=!1;pi<=lo?Xc(e)||(e.n|=Gt,n=!Jc(e)):n=!e.has(Ye),n&&(e.add(Ye),Ye.deps.push(e))}function At(e,t,n,i,s,r){const o=Ps.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&j(e)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":j(e)?qo(n)&&a.push(o.get("length")):(a.push(o.get(ln)),Pn(e)&&a.push(o.get(co)));break;case"delete":j(e)||(a.push(o.get(ln)),Pn(e)&&a.push(o.get(co)));break;case"set":Pn(e)&&a.push(o.get(ln));break}if(a.length===1)a[0]&&uo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);uo(zo(l))}}function uo(e,t){const n=j(e)?e:[...e];for(const i of n)i.computed&&ol(i);for(const i of n)i.computed||ol(i)}function ol(e,t){(e!==Ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function wd(e,t){var n;return(n=Ps.get(e))==null?void 0:n.get(t)}const Ed=Bo("__proto__,__v_isRef,__isVue"),eu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wo)),Id=Yo(),bd=Yo(!1,!0),Td=Yo(!0),al=Ad();function Ad(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=G(this);for(let r=0,o=this.length;r<o;r++)Fe(i,"get",r+"");const s=i[t](...n);return s===-1||s===!1?i[t](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jn();const i=G(this)[t].apply(this,n);return Xn(),i}}),e}function Cd(e){const t=G(this);return Fe(t,"has",e),t.hasOwnProperty(e)}function Yo(e=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?Hd:ru:t?su:iu).get(i))return i;const o=j(i);if(!e){if(o&&z(al,s))return Reflect.get(al,s,r);if(s==="hasOwnProperty")return Cd}const a=Reflect.get(i,s,r);return(Wo(s)?eu.has(s):Ed(s))||(e||Fe(i,"get",s),t)?a:ye(a)?o&&qo(s)?a:a.value:oe(a)?e?ou(a):zi(a):a}}const Sd=tu(),Rd=tu(!0);function tu(e=!1){return function(n,i,s,r){let o=n[i];if(jn(o)&&ye(o)&&!ye(s))return!1;if(!e&&(!Os(s)&&!jn(s)&&(o=G(o),s=G(s)),!j(n)&&ye(o)&&!ye(s)))return o.value=s,!0;const a=j(n)&&qo(i)?Number(i)<n.length:z(n,i),l=Reflect.set(n,i,s,r);return n===G(r)&&(a?Ri(s,o)&&At(n,"set",i,s):At(n,"add",i,s)),l}}function kd(e,t){const n=z(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&At(e,"delete",t,void 0),i}function Pd(e,t){const n=Reflect.has(e,t);return(!Wo(t)||!eu.has(t))&&Fe(e,"has",t),n}function Od(e){return Fe(e,"iterate",j(e)?"length":ln),Reflect.ownKeys(e)}const nu={get:Id,set:Sd,deleteProperty:kd,has:Pd,ownKeys:Od},Nd={get:Td,set(e,t){return!0},deleteProperty(e,t){return!0}},Dd=_e({},nu,{get:bd,set:Rd}),Jo=e=>e,sr=e=>Reflect.getPrototypeOf(e);function hs(e,t,n=!1,i=!1){e=e.__v_raw;const s=G(e),r=G(t);n||(t!==r&&Fe(s,"get",t),Fe(s,"get",r));const{has:o}=sr(s),a=i?Jo:n?Zo:ki;if(o.call(s,t))return a(e.get(t));if(o.call(s,r))return a(e.get(r));e!==s&&e.get(t)}function fs(e,t=!1){const n=this.__v_raw,i=G(n),s=G(e);return t||(e!==s&&Fe(i,"has",e),Fe(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function ds(e,t=!1){return e=e.__v_raw,!t&&Fe(G(e),"iterate",ln),Reflect.get(e,"size",e)}function ll(e){e=G(e);const t=G(this);return sr(t).has.call(t,e)||(t.add(e),At(t,"add",e,e)),this}function cl(e,t){t=G(t);const n=G(this),{has:i,get:s}=sr(n);let r=i.call(n,e);r||(e=G(e),r=i.call(n,e));const o=s.call(n,e);return n.set(e,t),r?Ri(t,o)&&At(n,"set",e,t):At(n,"add",e,t),this}function ul(e){const t=G(this),{has:n,get:i}=sr(t);let s=n.call(t,e);s||(e=G(e),s=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return s&&At(t,"delete",e,void 0),r}function hl(){const e=G(this),t=e.size!==0,n=e.clear();return t&&At(e,"clear",void 0,void 0),n}function ps(e,t){return function(i,s){const r=this,o=r.__v_raw,a=G(o),l=t?Jo:e?Zo:ki;return!e&&Fe(a,"iterate",ln),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function gs(e,t,n){return function(...i){const s=this.__v_raw,r=G(s),o=Pn(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...i),u=n?Jo:t?Zo:ki;return!t&&Fe(r,"iterate",l?co:ln),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Dt(e){return function(...t){return e==="delete"?!1:this}}function Ld(){const e={get(r){return hs(this,r)},get size(){return ds(this)},has:fs,add:ll,set:cl,delete:ul,clear:hl,forEach:ps(!1,!1)},t={get(r){return hs(this,r,!1,!0)},get size(){return ds(this)},has:fs,add:ll,set:cl,delete:ul,clear:hl,forEach:ps(!1,!0)},n={get(r){return hs(this,r,!0)},get size(){return ds(this,!0)},has(r){return fs.call(this,r,!0)},add:Dt("add"),set:Dt("set"),delete:Dt("delete"),clear:Dt("clear"),forEach:ps(!0,!1)},i={get(r){return hs(this,r,!0,!0)},get size(){return ds(this,!0)},has(r){return fs.call(this,r,!0)},add:Dt("add"),set:Dt("set"),delete:Dt("delete"),clear:Dt("clear"),forEach:ps(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=gs(r,!1,!1),n[r]=gs(r,!0,!1),t[r]=gs(r,!1,!0),i[r]=gs(r,!0,!0)}),[e,n,t,i]}const[Md,xd,Ud,$d]=Ld();function Xo(e,t){const n=t?e?$d:Ud:e?xd:Md;return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(z(n,s)&&s in i?n:i,s,r)}const Fd={get:Xo(!1,!1)},jd={get:Xo(!1,!0)},Bd={get:Xo(!0,!1)},iu=new WeakMap,su=new WeakMap,ru=new WeakMap,Hd=new WeakMap;function Vd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wd(e){return e.__v_skip||!Object.isExtensible(e)?0:Vd(od(e))}function zi(e){return jn(e)?e:Qo(e,!1,nu,Fd,iu)}function qd(e){return Qo(e,!1,Dd,jd,su)}function ou(e){return Qo(e,!0,Nd,Bd,ru)}function Qo(e,t,n,i,s){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const o=Wd(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return s.set(e,a),a}function On(e){return jn(e)?On(e.__v_raw):!!(e&&e.__v_isReactive)}function jn(e){return!!(e&&e.__v_isReadonly)}function Os(e){return!!(e&&e.__v_isShallow)}function au(e){return On(e)||jn(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Vt(e){return ks(e,"__v_skip",!0),e}const ki=e=>oe(e)?zi(e):e,Zo=e=>oe(e)?ou(e):e;function lu(e){Ht&&Ye&&(e=G(e),Zc(e.dep||(e.dep=zo())))}function cu(e,t){e=G(e);const n=e.dep;n&&uo(n)}function ye(e){return!!(e&&e.__v_isRef===!0)}function ae(e){return uu(e,!1)}function Kd(e){return uu(e,!0)}function uu(e,t){return ye(e)?e:new zd(e,t)}class zd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:ki(t)}get value(){return lu(this),this._value}set value(t){const n=this.__v_isShallow||Os(t)||jn(t);t=n?t:G(t),Ri(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ki(t),cu(this))}}function Nn(e){return ye(e)?e.value:e}const Gd={get:(e,t,n)=>Nn(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function hu(e){return On(e)?e:new Proxy(e,Gd)}class Yd{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return wd(G(this._object),this._key)}}class Jd{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Xd(e,t,n){return ye(e)?e:V(e)?new Jd(e):oe(e)&&arguments.length>1?Qd(e,t,n):ae(e)}function Qd(e,t,n){const i=e[t];return ye(i)?i:new Yd(e,t,n)}class Zd{constructor(t,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Go(t,()=>{this._dirty||(this._dirty=!0,cu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=G(this);return lu(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ep(e,t,n=!1){let i,s;const r=V(e);return r?(i=e,s=Xe):(i=e.get,s=e.set),new Zd(i,s,r||!s,n)}function Wt(e,t,n,i){let s;try{s=i?e(...i):e()}catch(r){rr(r,t,n)}return s}function Qe(e,t,n,i){if(V(e)){const r=Wt(e,t,n,i);return r&&qc(r)&&r.catch(o=>{rr(o,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(Qe(e[r],t,n,i));return s}function rr(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){Wt(l,null,10,[e,o,a]);return}}tp(e,n,s,i)}function tp(e,t,n,i=!0){console.error(e)}let Pi=!1,ho=!1;const Se=[];let lt=0;const Dn=[];let wt=null,tn=0;const fu=Promise.resolve();let ea=null;function du(e){const t=ea||fu;return e?t.then(this?e.bind(this):e):t}function np(e){let t=lt+1,n=Se.length;for(;t<n;){const i=t+n>>>1;Oi(Se[i])<e?t=i+1:n=i}return t}function ta(e){(!Se.length||!Se.includes(e,Pi&&e.allowRecurse?lt+1:lt))&&(e.id==null?Se.push(e):Se.splice(np(e.id),0,e),pu())}function pu(){!Pi&&!ho&&(ho=!0,ea=fu.then(mu))}function ip(e){const t=Se.indexOf(e);t>lt&&Se.splice(t,1)}function sp(e){j(e)?Dn.push(...e):(!wt||!wt.includes(e,e.allowRecurse?tn+1:tn))&&Dn.push(e),pu()}function fl(e,t=Pi?lt+1:0){for(;t<Se.length;t++){const n=Se[t];n&&n.pre&&(Se.splice(t,1),t--,n())}}function gu(e){if(Dn.length){const t=[...new Set(Dn)];if(Dn.length=0,wt){wt.push(...t);return}for(wt=t,wt.sort((n,i)=>Oi(n)-Oi(i)),tn=0;tn<wt.length;tn++)wt[tn]();wt=null,tn=0}}const Oi=e=>e.id==null?1/0:e.id,rp=(e,t)=>{const n=Oi(e)-Oi(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function mu(e){ho=!1,Pi=!0,Se.sort(rp);const t=Xe;try{for(lt=0;lt<Se.length;lt++){const n=Se[lt];n&&n.active!==!1&&Wt(n,null,14)}}finally{lt=0,Se.length=0,gu(),Pi=!1,ea=null,(Se.length||Dn.length)&&mu()}}function op(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ie;let s=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=i[u]||ie;p&&(s=n.map(v=>ge(v)?v.trim():v)),f&&(s=n.map(oo))}let a,l=i[a=xr(t)]||i[a=xr(gt(t))];!l&&r&&(l=i[a=xr(Gn(t))]),l&&Qe(l,e,6,s);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qe(c,e,6,s)}}function vu(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!V(e)){const l=c=>{const u=vu(c,t,!0);u&&(a=!0,_e(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(oe(e)&&i.set(e,null),null):(j(r)?r.forEach(l=>o[l]=null):_e(o,r),oe(e)&&i.set(e,o),o)}function or(e,t){return!e||!er(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Gn(t))||z(e,t))}let Oe=null,ar=null;function Ns(e){const t=Oe;return Oe=e,ar=e&&e.type.__scopeId||null,t}function na(e){ar=e}function ia(){ar=null}const sa=e=>yu;function yu(e,t=Oe,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&bl(-1);const r=Ns(t);let o;try{o=e(...s)}finally{Ns(r),i._d&&bl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ur(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:v,ctx:T,inheritAttrs:R}=e;let L,O;const x=Ns(e);try{if(n.shapeFlag&4){const M=s||i;L=at(u.call(M,M,f,r,v,p,T)),O=l}else{const M=t;L=at(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),O=t.props?l:ap(l)}}catch(M){Ii.length=0,rr(M,e,1),L=le(mt)}let W=L;if(O&&R!==!1){const M=Object.keys(O),{shapeFlag:he}=W;M.length&&he&7&&(o&&M.some(Ho)&&(O=lp(O,o)),W=Bn(W,O))}return n.dirs&&(W=Bn(W),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),L=W,Ns(x),L}const ap=e=>{let t;for(const n in e)(n==="class"||n==="style"||er(n))&&((t||(t={}))[n]=e[n]);return t},lp=(e,t)=>{const n={};for(const i in e)(!Ho(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function cp(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?dl(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==i[p]&&!or(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?dl(i,o,c):!0:!!o;return!1}function dl(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!or(n,r))return!0}return!1}function up({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const hp=e=>e.__isSuspense;function fp(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):sp(e)}const ms={};function Ze(e,t,n){return _u(e,t,n)}function _u(e,t,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ie){var a;const l=vd()===((a=be)==null?void 0:a.scope)?be:null;let c,u=!1,f=!1;if(ye(e)?(c=()=>e.value,u=Os(e)):On(e)?(c=()=>e,i=!0):j(e)?(f=!0,u=e.some(M=>On(M)||Os(M)),c=()=>e.map(M=>{if(ye(M))return M.value;if(On(M))return rn(M);if(V(M))return Wt(M,l,2)})):V(e)?t?c=()=>Wt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),Qe(e,l,3,[v])}:c=Xe,t&&i){const M=c;c=()=>rn(M())}let p,v=M=>{p=x.onStop=()=>{Wt(M,l,4)}},T;if(Di)if(v=Xe,t?n&&Qe(t,l,3,[c(),f?[]:void 0,v]):c(),s==="sync"){const M=ig();T=M.__watcherHandles||(M.__watcherHandles=[])}else return Xe;let R=f?new Array(e.length).fill(ms):ms;const L=()=>{if(x.active)if(t){const M=x.run();(i||u||(f?M.some((he,fe)=>Ri(he,R[fe])):Ri(M,R)))&&(p&&p(),Qe(t,l,3,[M,R===ms?void 0:f&&R[0]===ms?[]:R,v]),R=M)}else x.run()};L.allowRecurse=!!t;let O;s==="sync"?O=L:s==="post"?O=()=>$e(L,l&&l.suspense):(L.pre=!0,l&&(L.id=l.uid),O=()=>ta(L));const x=new Go(c,O);t?n?L():R=x.run():s==="post"?$e(x.run.bind(x),l&&l.suspense):x.run();const W=()=>{x.stop(),l&&l.scope&&Vo(l.scope.effects,x)};return T&&T.push(W),W}function dp(e,t,n){const i=this.proxy,s=ge(e)?e.includes(".")?wu(i,e):()=>i[e]:e.bind(i,i);let r;V(t)?r=t:(r=t.handler,n=t);const o=be;Hn(this);const a=_u(s,r.bind(i),n);return o?Hn(o):un(),a}function wu(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function rn(e,t){if(!oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ye(e))rn(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)rn(e[n],t);else if(Wc(e)||Pn(e))e.forEach(n=>{rn(n,t)});else if(zc(e))for(const n in e)rn(e[n],t);return e}function Ln(e,t){const n=Oe;if(n===null)return e;const i=pr(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,l,c=ie]=t[r];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&rn(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Qt(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Jn(),Qe(l,n,8,[e.el,a,e,t]),Xn())}}function Qn(e,t){return V(e)?(()=>_e({name:e.name},t,{setup:e}))():e}const wi=e=>!!e.type.__asyncLoader,Eu=e=>e.type.__isKeepAlive;function pp(e,t){Iu(e,"a",t)}function gp(e,t){Iu(e,"da",t)}function Iu(e,t,n=be){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(lr(t,i,n),n){let s=n.parent;for(;s&&s.parent;)Eu(s.parent.vnode)&&mp(i,t,n,s),s=s.parent}}function mp(e,t,n,i){const s=lr(t,e,i,!0);bu(()=>{Vo(i[t],s)},n)}function lr(e,t,n=be,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Jn(),Hn(n);const a=Qe(t,n,e,o);return un(),Xn(),a});return i?s.unshift(r):s.push(r),r}}const Rt=e=>(t,n=be)=>(!Di||e==="sp")&&lr(e,(...i)=>t(...i),n),vp=Rt("bm"),cr=Rt("m"),yp=Rt("bu"),_p=Rt("u"),Gi=Rt("bum"),bu=Rt("um"),wp=Rt("sp"),Ep=Rt("rtg"),Ip=Rt("rtc");function bp(e,t=be){lr("ec",e,t)}const Tu="components";function Tp(e,t){return Cp(Tu,e,!0,t)||e}const Ap=Symbol.for("v-ndc");function Cp(e,t,n=!0,i=!1){const s=Oe||be;if(s){const r=s.type;if(e===Tu){const a=eg(r,!1);if(a&&(a===t||a===gt(t)||a===ir(gt(t))))return r}const o=pl(s[e]||r[e],t)||pl(s.appContext[e],t);return!o&&i?r:o}}function pl(e,t){return e&&(e[t]||e[gt(t)]||e[ir(gt(t))])}function ra(e,t,n,i){let s;const r=n&&n[i];if(j(e)||ge(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,r&&r[o])}else if(oe(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(e[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function ur(e,t,n={},i,s){if(Oe.isCE||Oe.parent&&wi(Oe.parent)&&Oe.parent.isCE)return t!=="default"&&(n.name=t),le("slot",n,i&&i());let r=e[t];r&&r._c&&(r._d=!1),re();const o=r&&Au(r(n)),a=Zn(ve,{key:n.key||o&&o.key||`_${t}`},o||(i?i():[]),o&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Au(e){return e.some(t=>Ms(t)?!(t.type===mt||t.type===ve&&!Au(t.children)):!0)?e:null}const fo=e=>e?xu(e)?pr(e)||e.proxy:fo(e.parent):null,Ei=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fo(e.parent),$root:e=>fo(e.root),$emit:e=>e.emit,$options:e=>oa(e),$forceUpdate:e=>e.f||(e.f=()=>ta(e.update)),$nextTick:e=>e.n||(e.n=du.bind(e.proxy)),$watch:e=>dp.bind(e)}),$r=(e,t)=>e!==ie&&!e.__isScriptSetup&&z(e,t),Sp={get({_:e},t){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if($r(i,t))return o[t]=1,i[t];if(s!==ie&&z(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&z(c,t))return o[t]=3,r[t];if(n!==ie&&z(n,t))return o[t]=4,n[t];po&&(o[t]=0)}}const u=Ei[t];let f,p;if(u)return t==="$attrs"&&Fe(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ie&&z(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,z(p,t))return p[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return $r(s,t)?(s[t]=n,!0):i!==ie&&z(i,t)?(i[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||e!==ie&&z(e,o)||$r(t,o)||(a=r[0])&&z(a,o)||z(i,o)||z(Ei,o)||z(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function gl(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let po=!0;function Rp(e){const t=oa(e),n=e.proxy,i=e.ctx;po=!1,t.beforeCreate&&ml(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:v,updated:T,activated:R,deactivated:L,beforeDestroy:O,beforeUnmount:x,destroyed:W,unmounted:M,render:he,renderTracked:fe,renderTriggered:je,errorCaptured:Ke,serverPrefetch:nt,expose:Ve,inheritAttrs:Ot,components:Xt,directives:it,filters:ai}=t;if(c&&kp(c,i,null),o)for(const te in o){const Y=o[te];V(Y)&&(i[te]=Y.bind(n))}if(s){const te=s.call(n,n);oe(te)&&(e.data=zi(te))}if(po=!0,r)for(const te in r){const Y=r[te],yt=V(Y)?Y.bind(n,n):V(Y.get)?Y.get.bind(n,n):Xe,Nt=!V(Y)&&V(Y.set)?Y.set.bind(n):Xe,st=Re({get:yt,set:Nt});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ue=>st.value=Ue})}if(a)for(const te in a)Cu(a[te],i,n,te);if(l){const te=V(l)?l.call(n):l;Reflect.ownKeys(te).forEach(Y=>{cn(Y,te[Y])})}u&&ml(u,e,"c");function me(te,Y){j(Y)?Y.forEach(yt=>te(yt.bind(n))):Y&&te(Y.bind(n))}if(me(vp,f),me(cr,p),me(yp,v),me(_p,T),me(pp,R),me(gp,L),me(bp,Ke),me(Ip,fe),me(Ep,je),me(Gi,x),me(bu,M),me(wp,nt),j(Ve))if(Ve.length){const te=e.exposed||(e.exposed={});Ve.forEach(Y=>{Object.defineProperty(te,Y,{get:()=>n[Y],set:yt=>n[Y]=yt})})}else e.exposed||(e.exposed={});he&&e.render===Xe&&(e.render=he),Ot!=null&&(e.inheritAttrs=Ot),Xt&&(e.components=Xt),it&&(e.directives=it)}function kp(e,t,n=Xe){j(e)&&(e=go(e));for(const i in e){const s=e[i];let r;oe(s)?"default"in s?r=pe(s.from||i,s.default,!0):r=pe(s.from||i):r=pe(s),ye(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function ml(e,t,n){Qe(j(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Cu(e,t,n,i){const s=i.includes(".")?wu(n,i):()=>n[i];if(ge(e)){const r=t[e];V(r)&&Ze(s,r)}else if(V(e))Ze(s,e.bind(n));else if(oe(e))if(j(e))e.forEach(r=>Cu(r,t,n,i));else{const r=V(e.handler)?e.handler.bind(n):t[e.handler];V(r)&&Ze(s,r,e)}}function oa(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!n&&!i?l=t:(l={},s.length&&s.forEach(c=>Ds(l,c,o,!0)),Ds(l,t,o)),oe(t)&&r.set(t,l),l}function Ds(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Ds(e,r,n,!0),s&&s.forEach(o=>Ds(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=Pp[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Pp={data:vl,props:yl,emits:yl,methods:gi,computed:gi,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:gi,directives:gi,watch:Np,provide:vl,inject:Op};function vl(e,t){return t?e?function(){return _e(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function Op(e,t){return gi(go(e),go(t))}function go(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Me(e,t){return e?[...new Set([].concat(e,t))]:t}function gi(e,t){return e?_e(Object.create(null),e,t):t}function yl(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:_e(Object.create(null),gl(e),gl(t??{})):t}function Np(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const i in t)n[i]=Me(e[i],t[i]);return n}function Su(){return{app:null,config:{isNativeTag:id,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dp=0;function Lp(e,t){return function(i,s=null){V(i)||(i=_e({},i)),s!=null&&!oe(s)&&(s=null);const r=Su(),o=new Set;let a=!1;const l=r.app={_uid:Dp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:sg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(l,...u)):V(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const p=le(i,s);return p.appContext=r,u&&t?t(p,c):e(p,c,f),a=!0,l._container=c,c.__vue_app__=l,pr(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Ls=l;try{return c()}finally{Ls=null}}};return l}}let Ls=null;function cn(e,t){if(be){let n=be.provides;const i=be.parent&&be.parent.provides;i===n&&(n=be.provides=Object.create(i)),n[e]=t}}function pe(e,t,n=!1){const i=be||Oe;if(i||Ls){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ls._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&V(t)?t.call(i&&i.proxy):t}}function Mp(e,t,n,i=!1){const s={},r={};ks(r,fr,1),e.propsDefaults=Object.create(null),Ru(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:qd(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function xp(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=G(s),[l]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(or(e.emitsOptions,p))continue;const v=t[p];if(l)if(z(r,p))v!==r[p]&&(r[p]=v,c=!0);else{const T=gt(p);s[T]=mo(l,a,T,v,e,!1)}else v!==r[p]&&(r[p]=v,c=!0)}}}else{Ru(e,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!z(t,f)&&((u=Gn(f))===f||!z(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=mo(l,a,f,void 0,e,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!z(t,f))&&(delete r[f],c=!0)}c&&At(e,"set","$attrs")}function Ru(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Is(l))continue;const c=t[l];let u;s&&z(s,u=gt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:or(e.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=G(n),c=a||ie;for(let u=0;u<r.length;u++){const f=r[u];n[f]=mo(s,l,f,c[f],e,!z(c,f))}}return o}function mo(e,t,n,i,s,r){const o=e[n];if(o!=null){const a=z(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&V(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Hn(s),i=c[n]=l.call(null,t),un())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Gn(n))&&(i=!0))}return i}function ku(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let l=!1;if(!V(e)){const u=f=>{l=!0;const[p,v]=ku(f,t,!0);_e(o,p),v&&a.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return oe(e)&&i.set(e,kn),kn;if(j(r))for(let u=0;u<r.length;u++){const f=gt(r[u]);_l(f)&&(o[f]=ie)}else if(r)for(const u in r){const f=gt(u);if(_l(f)){const p=r[u],v=o[f]=j(p)||V(p)?{type:p}:_e({},p);if(v){const T=Il(Boolean,v.type),R=Il(String,v.type);v[0]=T>-1,v[1]=R<0||T<R,(T>-1||z(v,"default"))&&a.push(f)}}}const c=[o,a];return oe(e)&&i.set(e,c),c}function _l(e){return e[0]!=="$"}function wl(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function El(e,t){return wl(e)===wl(t)}function Il(e,t){return j(t)?t.findIndex(n=>El(n,e)):V(t)&&El(t,e)?0:-1}const Pu=e=>e[0]==="_"||e==="$stable",aa=e=>j(e)?e.map(at):[at(e)],Up=(e,t,n)=>{if(t._n)return t;const i=yu((...s)=>aa(t(...s)),n);return i._c=!1,i},Ou=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Pu(s))continue;const r=e[s];if(V(r))t[s]=Up(s,r,i);else if(r!=null){const o=aa(r);t[s]=()=>o}}},Nu=(e,t)=>{const n=aa(t);e.slots.default=()=>n},$p=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),ks(t,"_",n)):Ou(t,e.slots={})}else e.slots={},t&&Nu(e,t);ks(e.slots,fr,1)},Fp=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=ie;if(i.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(_e(s,t),!n&&a===1&&delete s._):(r=!t.$stable,Ou(t,s)),o=t}else t&&(Nu(e,t),o={default:1});if(r)for(const a in s)!Pu(a)&&!(a in o)&&delete s[a]};function vo(e,t,n,i,s=!1){if(j(e)){e.forEach((p,v)=>vo(p,t&&(j(t)?t[v]:t),n,i,s));return}if(wi(i)&&!s)return;const r=i.shapeFlag&4?pr(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=e,c=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ge(c)?(u[c]=null,z(f,c)&&(f[c]=null)):ye(c)&&(c.value=null)),V(l))Wt(l,a,12,[o,u]);else{const p=ge(l),v=ye(l);if(p||v){const T=()=>{if(e.f){const R=p?z(f,l)?f[l]:u[l]:l.value;s?j(R)&&Vo(R,r):j(R)?R.includes(r)||R.push(r):p?(u[l]=[r],z(f,l)&&(f[l]=u[l])):(l.value=[r],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,z(f,l)&&(f[l]=o)):v&&(l.value=o,e.k&&(u[e.k]=o))};o?(T.id=-1,$e(T,n)):T()}}}const $e=fp;function jp(e){return Bp(e)}function Bp(e,t){const n=ao();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:v=Xe,insertStaticContent:T}=e,R=(h,d,g,y=null,w=null,E=null,k=!1,b=null,A=!!d.dynamicChildren)=>{if(h===d)return;h&&!ci(h,d)&&(y=_(h),Ue(h,w,E,!0),h=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:I,ref:U,shapeFlag:N}=d;switch(I){case hr:L(h,d,g,y);break;case mt:O(h,d,g,y);break;case Fr:h==null&&x(d,g,y,k);break;case ve:Xt(h,d,g,y,w,E,k,b,A);break;default:N&1?he(h,d,g,y,w,E,k,b,A):N&6?it(h,d,g,y,w,E,k,b,A):(N&64||N&128)&&I.process(h,d,g,y,w,E,k,b,A,C)}U!=null&&w&&vo(U,h&&h.ref,E,d||h,!d)},L=(h,d,g,y)=>{if(h==null)i(d.el=a(d.children),g,y);else{const w=d.el=h.el;d.children!==h.children&&c(w,d.children)}},O=(h,d,g,y)=>{h==null?i(d.el=l(d.children||""),g,y):d.el=h.el},x=(h,d,g,y)=>{[h.el,h.anchor]=T(h.children,d,g,y,h.el,h.anchor)},W=({el:h,anchor:d},g,y)=>{let w;for(;h&&h!==d;)w=p(h),i(h,g,y),h=w;i(d,g,y)},M=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),s(h),h=g;s(d)},he=(h,d,g,y,w,E,k,b,A)=>{k=k||d.type==="svg",h==null?fe(d,g,y,w,E,k,b,A):nt(h,d,w,E,k,b,A)},fe=(h,d,g,y,w,E,k,b)=>{let A,I;const{type:U,props:N,shapeFlag:$,transition:H,dirs:q}=h;if(A=h.el=o(h.type,E,N&&N.is,N),$&8?u(A,h.children):$&16&&Ke(h.children,A,null,y,w,E&&U!=="foreignObject",k,b),q&&Qt(h,null,y,"created"),je(A,h,h.scopeId,k,y),N){for(const ee in N)ee!=="value"&&!Is(ee)&&r(A,ee,null,N[ee],E,h.children,y,w,Ae);"value"in N&&r(A,"value",null,N.value),(I=N.onVnodeBeforeMount)&&ot(I,y,h)}q&&Qt(h,null,y,"beforeMount");const ne=(!w||w&&!w.pendingBranch)&&H&&!H.persisted;ne&&H.beforeEnter(A),i(A,d,g),((I=N&&N.onVnodeMounted)||ne||q)&&$e(()=>{I&&ot(I,y,h),ne&&H.enter(A),q&&Qt(h,null,y,"mounted")},w)},je=(h,d,g,y,w)=>{if(g&&v(h,g),y)for(let E=0;E<y.length;E++)v(h,y[E]);if(w){let E=w.subTree;if(d===E){const k=w.vnode;je(h,k,k.scopeId,k.slotScopeIds,w.parent)}}},Ke=(h,d,g,y,w,E,k,b,A=0)=>{for(let I=A;I<h.length;I++){const U=h[I]=b?xt(h[I]):at(h[I]);R(null,U,d,g,y,w,E,k,b)}},nt=(h,d,g,y,w,E,k)=>{const b=d.el=h.el;let{patchFlag:A,dynamicChildren:I,dirs:U}=d;A|=h.patchFlag&16;const N=h.props||ie,$=d.props||ie;let H;g&&Zt(g,!1),(H=$.onVnodeBeforeUpdate)&&ot(H,g,d,h),U&&Qt(d,h,g,"beforeUpdate"),g&&Zt(g,!0);const q=w&&d.type!=="foreignObject";if(I?Ve(h.dynamicChildren,I,b,g,y,q,E):k||Y(h,d,b,null,g,y,q,E,!1),A>0){if(A&16)Ot(b,d,N,$,g,y,w);else if(A&2&&N.class!==$.class&&r(b,"class",null,$.class,w),A&4&&r(b,"style",N.style,$.style,w),A&8){const ne=d.dynamicProps;for(let ee=0;ee<ne.length;ee++){const ue=ne[ee],ze=N[ue],In=$[ue];(In!==ze||ue==="value")&&r(b,ue,ze,In,w,h.children,g,y,Ae)}}A&1&&h.children!==d.children&&u(b,d.children)}else!k&&I==null&&Ot(b,d,N,$,g,y,w);((H=$.onVnodeUpdated)||U)&&$e(()=>{H&&ot(H,g,d,h),U&&Qt(d,h,g,"updated")},y)},Ve=(h,d,g,y,w,E,k)=>{for(let b=0;b<d.length;b++){const A=h[b],I=d[b],U=A.el&&(A.type===ve||!ci(A,I)||A.shapeFlag&70)?f(A.el):g;R(A,I,U,null,y,w,E,k,!0)}},Ot=(h,d,g,y,w,E,k)=>{if(g!==y){if(g!==ie)for(const b in g)!Is(b)&&!(b in y)&&r(h,b,g[b],null,k,d.children,w,E,Ae);for(const b in y){if(Is(b))continue;const A=y[b],I=g[b];A!==I&&b!=="value"&&r(h,b,I,A,k,d.children,w,E,Ae)}"value"in y&&r(h,"value",g.value,y.value)}},Xt=(h,d,g,y,w,E,k,b,A)=>{const I=d.el=h?h.el:a(""),U=d.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:H}=d;H&&(b=b?b.concat(H):H),h==null?(i(I,g,y),i(U,g,y),Ke(d.children,g,U,w,E,k,b,A)):N>0&&N&64&&$&&h.dynamicChildren?(Ve(h.dynamicChildren,$,g,w,E,k,b),(d.key!=null||w&&d===w.subTree)&&Du(h,d,!0)):Y(h,d,g,U,w,E,k,b,A)},it=(h,d,g,y,w,E,k,b,A)=>{d.slotScopeIds=b,h==null?d.shapeFlag&512?w.ctx.activate(d,g,y,k,A):ai(d,g,y,w,E,k,A):_n(h,d,A)},ai=(h,d,g,y,w,E,k)=>{const b=h.component=Yp(h,y,w);if(Eu(h)&&(b.ctx.renderer=C),Jp(b),b.asyncDep){if(w&&w.registerDep(b,me),!h.el){const A=b.subTree=le(mt);O(null,A,d,g)}return}me(b,h,d,g,w,E,k)},_n=(h,d,g)=>{const y=d.component=h.component;if(cp(h,d,g))if(y.asyncDep&&!y.asyncResolved){te(y,d,g);return}else y.next=d,ip(y.update),y.update();else d.el=h.el,y.vnode=d},me=(h,d,g,y,w,E,k)=>{const b=()=>{if(h.isMounted){let{next:U,bu:N,u:$,parent:H,vnode:q}=h,ne=U,ee;Zt(h,!1),U?(U.el=q.el,te(h,U,k)):U=q,N&&bs(N),(ee=U.props&&U.props.onVnodeBeforeUpdate)&&ot(ee,H,U,q),Zt(h,!0);const ue=Ur(h),ze=h.subTree;h.subTree=ue,R(ze,ue,f(ze.el),_(ze),h,w,E),U.el=ue.el,ne===null&&up(h,ue.el),$&&$e($,w),(ee=U.props&&U.props.onVnodeUpdated)&&$e(()=>ot(ee,H,U,q),w)}else{let U;const{el:N,props:$}=d,{bm:H,m:q,parent:ne}=h,ee=wi(d);if(Zt(h,!1),H&&bs(H),!ee&&(U=$&&$.onVnodeBeforeMount)&&ot(U,ne,d),Zt(h,!0),N&&J){const ue=()=>{h.subTree=Ur(h),J(N,h.subTree,h,w,null)};ee?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ue()):ue()}else{const ue=h.subTree=Ur(h);R(null,ue,g,y,h,w,E),d.el=ue.el}if(q&&$e(q,w),!ee&&(U=$&&$.onVnodeMounted)){const ue=d;$e(()=>ot(U,ne,ue),w)}(d.shapeFlag&256||ne&&wi(ne.vnode)&&ne.vnode.shapeFlag&256)&&h.a&&$e(h.a,w),h.isMounted=!0,d=g=y=null}},A=h.effect=new Go(b,()=>ta(I),h.scope),I=h.update=()=>A.run();I.id=h.uid,Zt(h,!0),I()},te=(h,d,g)=>{d.component=h;const y=h.vnode.props;h.vnode=d,h.next=null,xp(h,d.props,y,g),Fp(h,d.children,g),Jn(),fl(),Xn()},Y=(h,d,g,y,w,E,k,b,A=!1)=>{const I=h&&h.children,U=h?h.shapeFlag:0,N=d.children,{patchFlag:$,shapeFlag:H}=d;if($>0){if($&128){Nt(I,N,g,y,w,E,k,b,A);return}else if($&256){yt(I,N,g,y,w,E,k,b,A);return}}H&8?(U&16&&Ae(I,w,E),N!==I&&u(g,N)):U&16?H&16?Nt(I,N,g,y,w,E,k,b,A):Ae(I,w,E,!0):(U&8&&u(g,""),H&16&&Ke(N,g,y,w,E,k,b,A))},yt=(h,d,g,y,w,E,k,b,A)=>{h=h||kn,d=d||kn;const I=h.length,U=d.length,N=Math.min(I,U);let $;for($=0;$<N;$++){const H=d[$]=A?xt(d[$]):at(d[$]);R(h[$],H,g,null,w,E,k,b,A)}I>U?Ae(h,w,E,!0,!1,N):Ke(d,g,y,w,E,k,b,A,N)},Nt=(h,d,g,y,w,E,k,b,A)=>{let I=0;const U=d.length;let N=h.length-1,$=U-1;for(;I<=N&&I<=$;){const H=h[I],q=d[I]=A?xt(d[I]):at(d[I]);if(ci(H,q))R(H,q,g,null,w,E,k,b,A);else break;I++}for(;I<=N&&I<=$;){const H=h[N],q=d[$]=A?xt(d[$]):at(d[$]);if(ci(H,q))R(H,q,g,null,w,E,k,b,A);else break;N--,$--}if(I>N){if(I<=$){const H=$+1,q=H<U?d[H].el:y;for(;I<=$;)R(null,d[I]=A?xt(d[I]):at(d[I]),g,q,w,E,k,b,A),I++}}else if(I>$)for(;I<=N;)Ue(h[I],w,E,!0),I++;else{const H=I,q=I,ne=new Map;for(I=q;I<=$;I++){const Be=d[I]=A?xt(d[I]):at(d[I]);Be.key!=null&&ne.set(Be.key,I)}let ee,ue=0;const ze=$-q+1;let In=!1,tl=0;const li=new Array(ze);for(I=0;I<ze;I++)li[I]=0;for(I=H;I<=N;I++){const Be=h[I];if(ue>=ze){Ue(Be,w,E,!0);continue}let rt;if(Be.key!=null)rt=ne.get(Be.key);else for(ee=q;ee<=$;ee++)if(li[ee-q]===0&&ci(Be,d[ee])){rt=ee;break}rt===void 0?Ue(Be,w,E,!0):(li[rt-q]=I+1,rt>=tl?tl=rt:In=!0,R(Be,d[rt],g,null,w,E,k,b,A),ue++)}const nl=In?Hp(li):kn;for(ee=nl.length-1,I=ze-1;I>=0;I--){const Be=q+I,rt=d[Be],il=Be+1<U?d[Be+1].el:y;li[I]===0?R(null,rt,g,il,w,E,k,b,A):In&&(ee<0||I!==nl[ee]?st(rt,g,il,2):ee--)}}},st=(h,d,g,y,w=null)=>{const{el:E,type:k,transition:b,children:A,shapeFlag:I}=h;if(I&6){st(h.component.subTree,d,g,y);return}if(I&128){h.suspense.move(d,g,y);return}if(I&64){k.move(h,d,g,C);return}if(k===ve){i(E,d,g);for(let N=0;N<A.length;N++)st(A[N],d,g,y);i(h.anchor,d,g);return}if(k===Fr){W(h,d,g);return}if(y!==2&&I&1&&b)if(y===0)b.beforeEnter(E),i(E,d,g),$e(()=>b.enter(E),w);else{const{leave:N,delayLeave:$,afterLeave:H}=b,q=()=>i(E,d,g),ne=()=>{N(E,()=>{q(),H&&H()})};$?$(E,q,ne):ne()}else i(E,d,g)},Ue=(h,d,g,y=!1,w=!1)=>{const{type:E,props:k,ref:b,children:A,dynamicChildren:I,shapeFlag:U,patchFlag:N,dirs:$}=h;if(b!=null&&vo(b,null,g,h,!0),U&256){d.ctx.deactivate(h);return}const H=U&1&&$,q=!wi(h);let ne;if(q&&(ne=k&&k.onVnodeBeforeUnmount)&&ot(ne,d,h),U&6)us(h.component,g,y);else{if(U&128){h.suspense.unmount(g,y);return}H&&Qt(h,null,d,"beforeUnmount"),U&64?h.type.remove(h,d,g,w,C,y):I&&(E!==ve||N>0&&N&64)?Ae(I,d,g,!1,!0):(E===ve&&N&384||!w&&U&16)&&Ae(A,d,g),y&&wn(h)}(q&&(ne=k&&k.onVnodeUnmounted)||H)&&$e(()=>{ne&&ot(ne,d,h),H&&Qt(h,null,d,"unmounted")},g)},wn=h=>{const{type:d,el:g,anchor:y,transition:w}=h;if(d===ve){En(g,y);return}if(d===Fr){M(h);return}const E=()=>{s(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:k,delayLeave:b}=w,A=()=>k(g,E);b?b(h.el,E,A):A()}else E()},En=(h,d)=>{let g;for(;h!==d;)g=p(h),s(h),h=g;s(d)},us=(h,d,g)=>{const{bum:y,scope:w,update:E,subTree:k,um:b}=h;y&&bs(y),w.stop(),E&&(E.active=!1,Ue(k,h,d,g)),b&&$e(b,d),$e(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ae=(h,d,g,y=!1,w=!1,E=0)=>{for(let k=E;k<h.length;k++)Ue(h[k],d,g,y,w)},_=h=>h.shapeFlag&6?_(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),P=(h,d,g)=>{h==null?d._vnode&&Ue(d._vnode,null,null,!0):R(d._vnode||null,h,d,null,null,null,g),fl(),gu(),d._vnode=h},C={p:R,um:Ue,m:st,r:wn,mt:ai,mc:Ke,pc:Y,pbc:Ve,n:_,o:e};let D,J;return t&&([D,J]=t(C)),{render:P,hydrate:D,createApp:Lp(P,D)}}function Zt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Du(e,t,n=!1){const i=e.children,s=t.children;if(j(i)&&j(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=xt(s[r]),a.el=o.el),n||Du(o,a)),a.type===hr&&(a.el=o.el)}}function Hp(e){const t=e.slice(),n=[0];let i,s,r,o,a;const l=e.length;for(i=0;i<l;i++){const c=e[i];if(c!==0){if(s=n[n.length-1],e[s]<c){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<c?r=a+1:o=a;c<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const Vp=e=>e.__isTeleport,ve=Symbol.for("v-fgt"),hr=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Fr=Symbol.for("v-stc"),Ii=[];let Je=null;function re(e=!1){Ii.push(Je=e?null:[])}function Wp(){Ii.pop(),Je=Ii[Ii.length-1]||null}let Ni=1;function bl(e){Ni+=e}function Lu(e){return e.dynamicChildren=Ni>0?Je||kn:null,Wp(),Ni>0&&Je&&Je.push(e),e}function de(e,t,n,i,s,r){return Lu(m(e,t,n,i,s,r,!0))}function Zn(e,t,n,i,s){return Lu(le(e,t,n,i,s,!0))}function Ms(e){return e?e.__v_isVNode===!0:!1}function ci(e,t){return e.type===t.type&&e.key===t.key}const fr="__vInternal",Mu=({key:e})=>e??null,Ts=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||ye(e)||V(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function m(e,t=null,n=null,i=0,s=null,r=e===ve?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mu(t),ref:t&&Ts(t),scopeId:ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Oe};return a?(la(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),Ni>0&&!o&&Je&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Je.push(l),l}const le=qp;function qp(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===Ap)&&(e=mt),Ms(e)){const a=Bn(e,t,!0);return n&&la(a,n),Ni>0&&!r&&Je&&(a.shapeFlag&6?Je[Je.indexOf(e)]=a:Je.push(a)),a.patchFlag|=-2,a}if(tg(e)&&(e=e.__vccOpts),t){t=Kp(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=Yn(a)),oe(l)&&(au(l)&&!j(l)&&(l=_e({},l)),t.style=Ko(l))}const o=ge(e)?1:hp(e)?128:Vp(e)?64:oe(e)?4:V(e)?2:0;return m(e,t,n,i,s,o,r,!0)}function Kp(e){return e?au(e)||fr in e?_e({},e):e:null}function Bn(e,t,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=e,a=t?ca(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Mu(a),ref:t&&t.ref?n&&s?j(s)?s.concat(Ts(t)):[s,Ts(t)]:Ts(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bn(e.ssContent),ssFallback:e.ssFallback&&Bn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ut(e=" ",t=0){return le(hr,null,e,t)}function dr(e="",t=!1){return t?(re(),Zn(mt,null,e)):le(mt,null,e)}function at(e){return e==null||typeof e=="boolean"?le(mt):j(e)?le(ve,null,e.slice()):typeof e=="object"?xt(e):le(hr,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bn(e)}function la(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),la(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(fr in t)?t._ctx=Oe:s===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),i&64?(n=16,t=[ut(t)]):n=8);e.children=t,e.shapeFlag|=n}function ca(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Yn([t.class,i.class]));else if(s==="style")t.style=Ko([t.style,i.style]);else if(er(s)){const r=t[s],o=i[s];o&&r!==o&&!(j(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function ot(e,t,n,i=null){Qe(e,t,7,[n,i])}const zp=Su();let Gp=0;function Yp(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||zp,r={uid:Gp++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new gd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ku(i,s),emitsOptions:vu(i,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:i.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=op.bind(null,r),e.ce&&e.ce(r),r}let be=null,ua,bn,Tl="__VUE_INSTANCE_SETTERS__";(bn=ao()[Tl])||(bn=ao()[Tl]=[]),bn.push(e=>be=e),ua=e=>{bn.length>1?bn.forEach(t=>t(e)):bn[0](e)};const Hn=e=>{ua(e),e.scope.on()},un=()=>{be&&be.scope.off(),ua(null)};function xu(e){return e.vnode.shapeFlag&4}let Di=!1;function Jp(e,t=!1){Di=t;const{props:n,children:i}=e.vnode,s=xu(e);Mp(e,n,s,t),$p(e,i);const r=s?Xp(e,t):void 0;return Di=!1,r}function Xp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Vt(new Proxy(e.ctx,Sp));const{setup:i}=n;if(i){const s=e.setupContext=i.length>1?Zp(e):null;Hn(e),Jn();const r=Wt(i,e,0,[e.props,s]);if(Xn(),un(),qc(r)){if(r.then(un,un),t)return r.then(o=>{Al(e,o,t)}).catch(o=>{rr(o,e,0)});e.asyncDep=r}else Al(e,r,t)}else Uu(e,t)}function Al(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=hu(t)),Uu(e,n)}let Cl;function Uu(e,t,n){const i=e.type;if(!e.render){if(!t&&Cl&&!i.render){const s=i.template||oa(e).template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,c=_e(_e({isCustomElement:r,delimiters:a},o),l);i.render=Cl(s,c)}}e.render=i.render||Xe}Hn(e),Jn(),Rp(e),Xn(),un()}function Qp(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Fe(e,"get","$attrs"),t[n]}}))}function Zp(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Qp(e)},slots:e.slots,emit:e.emit,expose:t}}function pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(hu(Vt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ei)return Ei[n](e)},has(t,n){return n in t||n in Ei}}))}function eg(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function tg(e){return V(e)&&"__vccOpts"in e}const Re=(e,t)=>ep(e,t,Di);function $u(e,t,n){const i=arguments.length;return i===2?oe(t)&&!j(t)?Ms(t)?le(e,null,[t]):le(e,t):le(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ms(n)&&(n=[n]),le(e,t,n))}const ng=Symbol.for("v-scx"),ig=()=>pe(ng),sg="3.3.4",rg="http://www.w3.org/2000/svg",nn=typeof document<"u"?document:null,Sl=nn&&nn.createElement("template"),og={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?nn.createElementNS(rg,e):nn.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>nn.createTextNode(e),createComment:e=>nn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Sl.innerHTML=i?`<svg>${e}</svg>`:e;const a=Sl.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ag(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function lg(e,t,n){const i=e.style,s=ge(n);if(n&&!s){if(t&&!ge(t))for(const r in t)n[r]==null&&yo(i,r,"");for(const r in n)yo(i,r,n[r])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Rl=/\s*!important$/;function yo(e,t,n){if(j(n))n.forEach(i=>yo(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=cg(e,t);Rl.test(n)?e.setProperty(Gn(i),n.replace(Rl,""),"important"):e[i]=n}}const kl=["Webkit","Moz","ms"],jr={};function cg(e,t){const n=jr[t];if(n)return n;let i=gt(t);if(i!=="filter"&&i in e)return jr[t]=i;i=ir(i);for(let s=0;s<kl.length;s++){const r=kl[s]+i;if(r in e)return jr[t]=r}return t}const Pl="http://www.w3.org/1999/xlink";function ug(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Pl,t.slice(6,t.length)):e.setAttributeNS(Pl,t,n);else{const r=pd(t);n==null||r&&!Gc(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function hg(e,t,n,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Gc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function An(e,t,n,i){e.addEventListener(t,n,i)}function fg(e,t,n,i){e.removeEventListener(t,n,i)}function dg(e,t,n,i,s=null){const r=e._vei||(e._vei={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=pg(t);if(i){const c=r[t]=vg(i,s);An(e,a,c,l)}else o&&(fg(e,a,o,l),r[t]=void 0)}}const Ol=/(?:Once|Passive|Capture)$/;function pg(e){let t;if(Ol.test(e)){t={};let i;for(;i=e.match(Ol);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gn(e.slice(2)),t]}let Br=0;const gg=Promise.resolve(),mg=()=>Br||(gg.then(()=>Br=0),Br=Date.now());function vg(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Qe(yg(i,n.value),t,5,[i])};return n.value=e,n.attached=mg(),n}function yg(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Nl=/^on[a-z]/,_g=(e,t,n,i,s=!1,r,o,a,l)=>{t==="class"?ag(e,i,s):t==="style"?lg(e,n,i):er(t)?Ho(t)||dg(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):wg(e,t,i,s))?hg(e,t,i,r,o,a,l):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),ug(e,t,i,s))};function wg(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&Nl.test(t)&&V(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Nl.test(t)&&ge(n)?!1:t in e}const Dl=e=>{const t=e.props["onUpdate:modelValue"]||!1;return j(t)?n=>bs(t,n):t};function Eg(e){e.target.composing=!0}function Ll(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const bi={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=Dl(s);const r=i||s.props&&s.props.type==="number";An(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=oo(a)),e._assign(a)}),n&&An(e,"change",()=>{e.value=e.value.trim()}),t||(An(e,"compositionstart",Eg),An(e,"compositionend",Ll),An(e,"change",Ll))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},r){if(e._assign=Dl(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===t||(s||e.type==="number")&&oo(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Ig=["ctrl","shift","alt","meta"],bg={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ig.some(n=>e[`${n}Key`]&&!t.includes(n))},Fu=(e,t)=>(n,...i)=>{for(let s=0;s<t.length;s++){const r=bg[t[s]];if(r&&r(n,t))return}return e(n,...i)},Tg={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ui(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),ui(e,!0),i.enter(e)):i.leave(e,()=>{ui(e,!1)}):ui(e,t))},beforeUnmount(e,{value:t}){ui(e,t)}};function ui(e,t){e.style.display=t?e._vod:"none"}const Ag=_e({patchProp:_g},og);let Ml;function Cg(){return Ml||(Ml=jp(Ag))}const Sg=(...e)=>{const t=Cg().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=Rg(i);if(!s)return;const r=t._component;!V(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Rg(e){return ge(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Cn=typeof window<"u";function kg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Hr(e,t){const n={};for(const i in t){const s=t[i];n[i]=et(s)?s.map(e):e(s)}return n}const Ti=()=>{},et=Array.isArray,Pg=/\/$/,Og=e=>e.replace(Pg,"");function Vr(e,t,n="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=e(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Mg(i??t,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function Ng(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function xl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Dg(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Vn(t.matched[i],n.matched[s])&&ju(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ju(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Lg(e[n],t[n]))return!1;return!0}function Lg(e,t){return et(e)?Ul(e,t):et(t)?Ul(t,e):e===t}function Ul(e,t){return et(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function Mg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Li;(function(e){e.pop="pop",e.push="push"})(Li||(Li={}));var Ai;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ai||(Ai={}));function xg(e){if(!e)if(Cn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Og(e)}const Ug=/^[^#]+#/;function $g(e,t){return e.replace(Ug,"#")+t}function Fg(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function jg(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Fg(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $l(e,t){return(history.state?history.state.position-t:-1)+e}const _o=new Map;function Bg(e,t){_o.set(e,t)}function Hg(e){const t=_o.get(e);return _o.delete(e),t}let Vg=()=>location.protocol+"//"+location.host;function Bu(e,t){const{pathname:n,search:i,hash:s}=t,r=e.indexOf("#");if(r>-1){let a=s.includes(e.slice(r))?e.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),xl(l,"")}return xl(n,e)+i+s}function Wg(e,t,n,i){let s=[],r=[],o=null;const a=({state:p})=>{const v=Bu(e,location),T=n.value,R=t.value;let L=0;if(p){if(n.value=v,t.value=p,o&&o===T){o=null;return}L=R?p.position-R.position:0}else i(v);s.forEach(O=>{O(n.value,T,{delta:L,type:Li.pop,direction:L?L>0?Ai.forward:Ai.back:Ai.unknown})})};function l(){o=n.value}function c(p){s.push(p);const v=()=>{const T=s.indexOf(p);T>-1&&s.splice(T,1)};return r.push(v),v}function u(){const{history:p}=window;p.state&&p.replaceState(Q({},p.state,{scroll:gr()}),"")}function f(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Fl(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?gr():null}}function qg(e){const{history:t,location:n}=window,i={value:Bu(e,n)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:Vg()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(v){console.error(v),n[u?"replace":"assign"](p)}}function o(l,c){const u=Q({},t.state,Fl(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Q({},s.value,t.state,{forward:l,scroll:gr()});r(u.current,u,!0);const f=Q({},Fl(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Kg(e){e=xg(e);const t=qg(e),n=Wg(e,t.state,t.location,t.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Q({location:"",base:e,go:i,createHref:$g.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function zg(e){return typeof e=="string"||e&&typeof e=="object"}function Hu(e){return typeof e=="string"||typeof e=="symbol"}const Lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vu=Symbol("");var jl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(jl||(jl={}));function Wn(e,t){return Q(new Error,{type:e,[Vu]:!0},t)}function _t(e,t){return e instanceof Error&&Vu in e&&(t==null||!!(e.type&t))}const Bl="[^/]+?",Gg={sensitive:!1,strict:!1,start:!0,end:!0},Yg=/[.+*?^${}()[\]/\\]/g;function Jg(e,t){const n=Q({},Gg,t),i=[];let s=n.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const p=c[f];let v=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(Yg,"\\$&"),v+=40;else if(p.type===1){const{value:T,repeatable:R,optional:L,regexp:O}=p;r.push({name:T,repeatable:R,optional:L});const x=O||Bl;if(x!==Bl){v+=10;try{new RegExp(`(${x})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${T}" (${x}): `+M.message)}}let W=R?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(W=L&&c.length<2?`(?:/${W})`:"/"+W),L&&(W+="?"),s+=W,v+=20,L&&(v+=-8),R&&(v+=-20),x===".*"&&(v+=-50)}u.push(v)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const v=u[p]||"",T=r[p-1];f[T.name]=v&&T.repeatable?v.split("/"):v}return f}function l(c){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const v of p)if(v.type===0)u+=v.value;else if(v.type===1){const{value:T,repeatable:R,optional:L}=v,O=T in c?c[T]:"";if(et(O)&&!R)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const x=et(O)?O.join("/"):O;if(!x)if(L)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${T}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Xg(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Qg(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const r=Xg(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Hl(i))return 1;if(Hl(s))return-1}return s.length-i.length}function Hl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Zg={type:0,value:""},em=/[a-zA-Z0-9_]/;function tm(e){if(!e)return[[]];if(e==="/")return[[Zg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${c}": ${v}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=i;break;case 1:l==="("?n=2:em.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function nm(e,t,n){const i=Jg(tm(e.path),n),s=Q(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function im(e,t){const n=[],i=new Map;t=ql({strict:!1,end:!0,sensitive:!1},t);function s(u){return i.get(u)}function r(u,f,p){const v=!p,T=sm(u);T.aliasOf=p&&p.record;const R=ql(t,u),L=[T];if("alias"in u){const W=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of W)L.push(Q({},T,{components:p?p.record.components:T.components,path:M,aliasOf:p?p.record:T}))}let O,x;for(const W of L){const{path:M}=W;if(f&&M[0]!=="/"){const he=f.record.path,fe=he[he.length-1]==="/"?"":"/";W.path=f.record.path+(M&&fe+M)}if(O=nm(W,f,R),p?p.alias.push(O):(x=x||O,x!==O&&x.alias.push(O),v&&u.name&&!Wl(O)&&o(u.name)),T.children){const he=T.children;for(let fe=0;fe<he.length;fe++)r(he[fe],O,p&&p.children[fe])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&l(O)}return x?()=>{o(x)}:Ti}function o(u){if(Hu(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&Qg(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Wu(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Wl(u)&&i.set(u.record.name,u)}function c(u,f){let p,v={},T,R;if("name"in u&&u.name){if(p=i.get(u.name),!p)throw Wn(1,{location:u});R=p.record.name,v=Q(Vl(f.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Vl(u.params,p.keys.map(x=>x.name))),T=p.stringify(v)}else if("path"in u)T=u.path,p=n.find(x=>x.re.test(T)),p&&(v=p.parse(T),R=p.record.name);else{if(p=f.name?i.get(f.name):n.find(x=>x.re.test(f.path)),!p)throw Wn(1,{location:u,currentLocation:f});R=p.record.name,v=Q({},f.params,u.params),T=p.stringify(v)}const L=[];let O=p;for(;O;)L.unshift(O.record),O=O.parent;return{name:R,path:T,params:v,matched:L,meta:om(L)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Vl(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function sm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:rm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function rm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function Wl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function om(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function ql(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Wu(e,t){return t.children.some(n=>n===e||Wu(e,n))}const qu=/#/g,am=/&/g,lm=/\//g,cm=/=/g,um=/\?/g,Ku=/\+/g,hm=/%5B/g,fm=/%5D/g,zu=/%5E/g,dm=/%60/g,Gu=/%7B/g,pm=/%7C/g,Yu=/%7D/g,gm=/%20/g;function ha(e){return encodeURI(""+e).replace(pm,"|").replace(hm,"[").replace(fm,"]")}function mm(e){return ha(e).replace(Gu,"{").replace(Yu,"}").replace(zu,"^")}function wo(e){return ha(e).replace(Ku,"%2B").replace(gm,"+").replace(qu,"%23").replace(am,"%26").replace(dm,"`").replace(Gu,"{").replace(Yu,"}").replace(zu,"^")}function vm(e){return wo(e).replace(cm,"%3D")}function ym(e){return ha(e).replace(qu,"%23").replace(um,"%3F")}function _m(e){return e==null?"":ym(e).replace(lm,"%2F")}function xs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function wm(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Ku," "),o=r.indexOf("="),a=xs(o<0?r:r.slice(0,o)),l=o<0?null:xs(r.slice(o+1));if(a in t){let c=t[a];et(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Kl(e){let t="";for(let n in e){const i=e[n];if(n=vm(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(et(i)?i.map(r=>r&&wo(r)):[i&&wo(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Em(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=et(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const Im=Symbol(""),zl=Symbol(""),mr=Symbol(""),Ju=Symbol(""),Eo=Symbol("");function hi(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ut(e,t,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Wn(4,{from:n,to:t})):f instanceof Error?a(f):zg(f)?a(Wn(2,{from:t,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=e.call(i&&i.instances[s],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Wr(e,t,n,i){const s=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(bm(a)){const c=(a.__vccOpts||a)[t];c&&s.push(Ut(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=kg(c)?c.default:c;r.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Ut(p,n,i,r,o)()}))}}return s}function bm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Gl(e){const t=pe(mr),n=pe(Ju),i=Re(()=>t.resolve(Nn(e.to))),s=Re(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Vn.bind(null,u));if(p>-1)return p;const v=Yl(l[c-2]);return c>1&&Yl(u)===v&&f[f.length-1].path!==v?f.findIndex(Vn.bind(null,l[c-2])):p}),r=Re(()=>s.value>-1&&Cm(n.params,i.value.params)),o=Re(()=>s.value>-1&&s.value===n.matched.length-1&&ju(n.params,i.value.params));function a(l={}){return Am(l)?t[Nn(e.replace)?"replace":"push"](Nn(e.to)).catch(Ti):Promise.resolve()}return{route:i,href:Re(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const Tm=Qn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gl,setup(e,{slots:t}){const n=zi(Gl(e)),{options:i}=pe(mr),s=Re(()=>({[Jl(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Jl(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:$u("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Xu=Tm;function Am(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Cm(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!et(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Yl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Jl=(e,t,n)=>e??t??n,Sm=Qn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=pe(Eo),s=Re(()=>e.route||i.value),r=pe(zl,0),o=Re(()=>{let c=Nn(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Re(()=>s.value.matched[o.value]);cn(zl,Re(()=>o.value+1)),cn(Im,a),cn(Eo,s);const l=ae();return Ze(()=>[l.value,a.value,e.name],([c,u,f],[p,v,T])=>{u&&(u.instances[f]=c,v&&v!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),c&&u&&(!v||!Vn(u,v)||!p)&&(u.enterCallbacks[f]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return Xl(n.default,{Component:p,route:c});const v=f.props[u],T=v?v===!0?c.params:typeof v=="function"?v(c):v:null,L=$u(p,Q({},T,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Xl(n.default,{Component:L,route:c})||L}}});function Xl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Rm=Sm;function km(e){const t=im(e.routes,e),n=e.parseQuery||wm,i=e.stringifyQuery||Kl,s=e.history,r=hi(),o=hi(),a=hi(),l=Kd(Lt);let c=Lt;Cn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Hr.bind(null,_=>""+_),f=Hr.bind(null,_m),p=Hr.bind(null,xs);function v(_,P){let C,D;return Hu(_)?(C=t.getRecordMatcher(_),D=P):D=_,t.addRoute(D,C)}function T(_){const P=t.getRecordMatcher(_);P&&t.removeRoute(P)}function R(){return t.getRoutes().map(_=>_.record)}function L(_){return!!t.getRecordMatcher(_)}function O(_,P){if(P=Q({},P||l.value),typeof _=="string"){const g=Vr(n,_,P.path),y=t.resolve({path:g.path},P),w=s.createHref(g.fullPath);return Q(g,y,{params:p(y.params),hash:xs(g.hash),redirectedFrom:void 0,href:w})}let C;if("path"in _)C=Q({},_,{path:Vr(n,_.path,P.path).path});else{const g=Q({},_.params);for(const y in g)g[y]==null&&delete g[y];C=Q({},_,{params:f(g)}),P.params=f(P.params)}const D=t.resolve(C,P),J=_.hash||"";D.params=u(p(D.params));const h=Ng(i,Q({},_,{hash:mm(J),path:D.path})),d=s.createHref(h);return Q({fullPath:h,hash:J,query:i===Kl?Em(_.query):_.query||{}},D,{redirectedFrom:void 0,href:d})}function x(_){return typeof _=="string"?Vr(n,_,l.value.path):Q({},_)}function W(_,P){if(c!==_)return Wn(8,{from:P,to:_})}function M(_){return je(_)}function he(_){return M(Q(x(_),{replace:!0}))}function fe(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let D=typeof C=="function"?C(_):C;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=x(D):{path:D},D.params={}),Q({query:_.query,hash:_.hash,params:"path"in D?{}:_.params},D)}}function je(_,P){const C=c=O(_),D=l.value,J=_.state,h=_.force,d=_.replace===!0,g=fe(C);if(g)return je(Q(x(g),{state:typeof g=="object"?Q({},J,g.state):J,force:h,replace:d}),P||C);const y=C;y.redirectedFrom=P;let w;return!h&&Dg(i,D,C)&&(w=Wn(16,{to:y,from:D}),st(D,D,!0,!1)),(w?Promise.resolve(w):Ve(y,D)).catch(E=>_t(E)?_t(E,2)?E:Nt(E):Y(E,y,D)).then(E=>{if(E){if(_t(E,2))return je(Q({replace:d},x(E.to),{state:typeof E.to=="object"?Q({},J,E.to.state):J,force:h}),P||y)}else E=Xt(y,D,!0,d,J);return Ot(y,D,E),E})}function Ke(_,P){const C=W(_,P);return C?Promise.reject(C):Promise.resolve()}function nt(_){const P=En.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(_):_()}function Ve(_,P){let C;const[D,J,h]=Pm(_,P);C=Wr(D.reverse(),"beforeRouteLeave",_,P);for(const g of D)g.leaveGuards.forEach(y=>{C.push(Ut(y,_,P))});const d=Ke.bind(null,_,P);return C.push(d),Ae(C).then(()=>{C=[];for(const g of r.list())C.push(Ut(g,_,P));return C.push(d),Ae(C)}).then(()=>{C=Wr(J,"beforeRouteUpdate",_,P);for(const g of J)g.updateGuards.forEach(y=>{C.push(Ut(y,_,P))});return C.push(d),Ae(C)}).then(()=>{C=[];for(const g of _.matched)if(g.beforeEnter&&!P.matched.includes(g))if(et(g.beforeEnter))for(const y of g.beforeEnter)C.push(Ut(y,_,P));else C.push(Ut(g.beforeEnter,_,P));return C.push(d),Ae(C)}).then(()=>(_.matched.forEach(g=>g.enterCallbacks={}),C=Wr(h,"beforeRouteEnter",_,P),C.push(d),Ae(C))).then(()=>{C=[];for(const g of o.list())C.push(Ut(g,_,P));return C.push(d),Ae(C)}).catch(g=>_t(g,8)?g:Promise.reject(g))}function Ot(_,P,C){for(const D of a.list())nt(()=>D(_,P,C))}function Xt(_,P,C,D,J){const h=W(_,P);if(h)return h;const d=P===Lt,g=Cn?history.state:{};C&&(D||d?s.replace(_.fullPath,Q({scroll:d&&g&&g.scroll},J)):s.push(_.fullPath,J)),l.value=_,st(_,P,C,d),Nt()}let it;function ai(){it||(it=s.listen((_,P,C)=>{if(!us.listening)return;const D=O(_),J=fe(D);if(J){je(Q(J,{replace:!0}),D).catch(Ti);return}c=D;const h=l.value;Cn&&Bg($l(h.fullPath,C.delta),gr()),Ve(D,h).catch(d=>_t(d,12)?d:_t(d,2)?(je(d.to,D).then(g=>{_t(g,20)&&!C.delta&&C.type===Li.pop&&s.go(-1,!1)}).catch(Ti),Promise.reject()):(C.delta&&s.go(-C.delta,!1),Y(d,D,h))).then(d=>{d=d||Xt(D,h,!1),d&&(C.delta&&!_t(d,8)?s.go(-C.delta,!1):C.type===Li.pop&&_t(d,20)&&s.go(-1,!1)),Ot(D,h,d)}).catch(Ti)}))}let _n=hi(),me=hi(),te;function Y(_,P,C){Nt(_);const D=me.list();return D.length?D.forEach(J=>J(_,P,C)):console.error(_),Promise.reject(_)}function yt(){return te&&l.value!==Lt?Promise.resolve():new Promise((_,P)=>{_n.add([_,P])})}function Nt(_){return te||(te=!_,ai(),_n.list().forEach(([P,C])=>_?C(_):P()),_n.reset()),_}function st(_,P,C,D){const{scrollBehavior:J}=e;if(!Cn||!J)return Promise.resolve();const h=!C&&Hg($l(_.fullPath,0))||(D||!C)&&history.state&&history.state.scroll||null;return du().then(()=>J(_,P,h)).then(d=>d&&jg(d)).catch(d=>Y(d,_,P))}const Ue=_=>s.go(_);let wn;const En=new Set,us={currentRoute:l,listening:!0,addRoute:v,removeRoute:T,hasRoute:L,getRoutes:R,resolve:O,options:e,push:M,replace:he,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:yt,install(_){const P=this;_.component("RouterLink",Xu),_.component("RouterView",Rm),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Nn(l)}),Cn&&!wn&&l.value===Lt&&(wn=!0,M(s.location).catch(J=>{}));const C={};for(const J in Lt)C[J]=Re(()=>l.value[J]);_.provide(mr,P),_.provide(Ju,zi(C)),_.provide(Eo,l);const D=_.unmount;En.add(_),_.unmount=function(){En.delete(_),En.size<1&&(c=Lt,it&&it(),it=null,l.value=Lt,wn=!1,te=!1),D()}}};function Ae(_){return _.reduce((P,C)=>P.then(()=>nt(C)),Promise.resolve())}return us}function Pm(e,t){const n=[],i=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(c=>Vn(c,a))?i.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>Vn(c,l))||s.push(l))}return[n,i,s]}function Om(){return pe(mr)}/**
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
 */const Qu=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Nm=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Zu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let p=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(p=64)),i.push(n[u],n[f],n[p],n[v])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Nm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||a==null||c==null||f==null)throw new Dm;const p=r<<2|a>>4;if(i.push(p),c!==64){const v=a<<4&240|c>>2;if(i.push(v),f!==64){const T=c<<6&192|f;i.push(T)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Dm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lm=function(e){const t=Qu(e);return Zu.encodeByteArray(t,!0)},Us=function(e){return Lm(e).replace(/\./g,"")},eh=function(e){try{return Zu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Mm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xm=()=>Mm().__FIREBASE_DEFAULTS__,Um=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},$m=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&eh(e[1]);return t&&JSON.parse(t)},fa=()=>{try{return xm()||Um()||$m()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},th=e=>{var t,n;return(n=(t=fa())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Fm=e=>{const t=th(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},nh=()=>{var e;return(e=fa())===null||e===void 0?void 0:e.config},ih=e=>{var t;return(t=fa())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class jm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function Bm(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Us(JSON.stringify(n)),Us(JSON.stringify(o)),a].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Vm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qm(){const e=Le();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Km(){try{return typeof indexedDB=="object"}catch{return!1}}function zm(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
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
 */const Gm="FirebaseError";class kt extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=Gm,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Ym(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kt(s,a,i)}}function Ym(e,t){return e.replace(Jm,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Jm=/\{\$([^}]+)}/g;function Xm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $s(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(Ql(r)&&Ql(o)){if(!$s(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ql(e){return e!==null&&typeof e=="object"}/**
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
 */function Ji(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function mi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");t[decodeURIComponent(s)]=decodeURIComponent(r)}}),t}function vi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Qm(e,t){const n=new Zm(e,t);return n.subscribe.bind(n)}class Zm{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ev(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=qr),s.error===void 0&&(s.error=qr),s.complete===void 0&&(s.complete=qr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ev(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function qr(){}/**
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
 */function Pt(e){return e&&e._delegate?e._delegate:e}class dn{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const en="[DEFAULT]";/**
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
 */class tv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new jm;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(iv(t))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=en){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=en){return this.instances.has(t)}getOptions(t=en){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:nv(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=en){return this.component?this.component.multipleInstances?t:en:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nv(e){return e===en?void 0:e}function iv(e){return e.instantiationMode==="EAGER"}/**
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
 */class sv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new tv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(X||(X={}));const rv={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},ov=X.INFO,av={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},lv=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=av[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class da{constructor(t){this.name=t,this._logLevel=ov,this._logHandler=lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in X))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...t),this._logHandler(this,X.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...t),this._logHandler(this,X.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,X.INFO,...t),this._logHandler(this,X.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,X.WARN,...t),this._logHandler(this,X.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...t),this._logHandler(this,X.ERROR,...t)}}const cv=(e,t)=>t.some(n=>e instanceof n);let Zl,ec;function uv(){return Zl||(Zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hv(){return ec||(ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sh=new WeakMap,Io=new WeakMap,rh=new WeakMap,Kr=new WeakMap,pa=new WeakMap;function fv(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(qt(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&sh.set(n,e)}).catch(()=>{}),pa.set(t,e),t}function dv(e){if(Io.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});Io.set(e,t)}let bo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Io.get(e);if(t==="objectStoreNames")return e.objectStoreNames||rh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pv(e){bo=e(bo)}function gv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(zr(this),t,...n);return rh.set(i,t.sort?t.sort():[t]),qt(i)}:hv().includes(e)?function(...t){return e.apply(zr(this),t),qt(sh.get(this))}:function(...t){return qt(e.apply(zr(this),t))}}function mv(e){return typeof e=="function"?gv(e):(e instanceof IDBTransaction&&dv(e),cv(e,uv())?new Proxy(e,bo):e)}function qt(e){if(e instanceof IDBRequest)return fv(e);if(Kr.has(e))return Kr.get(e);const t=mv(e);return t!==e&&(Kr.set(e,t),pa.set(t,e)),t}const zr=e=>pa.get(e);function vv(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=qt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(qt(o.result),l.oldVersion,l.newVersion,qt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const yv=["get","getKey","getAll","getAllKeys","count"],_v=["put","add","delete","clear"],Gr=new Map;function tc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Gr.get(t))return Gr.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=_v.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||yv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Gr.set(t,r),r}pv(e=>({...e,get:(t,n,i)=>tc(t,n)||e.get(t,n,i),has:(t,n)=>!!tc(t,n)||e.has(t,n)}));/**
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
 */class wv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ev(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ev(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const To="@firebase/app",nc="0.9.13";/**
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
 */const pn=new da("@firebase/app"),Iv="@firebase/app-compat",bv="@firebase/analytics-compat",Tv="@firebase/analytics",Av="@firebase/app-check-compat",Cv="@firebase/app-check",Sv="@firebase/auth",Rv="@firebase/auth-compat",kv="@firebase/database",Pv="@firebase/database-compat",Ov="@firebase/functions",Nv="@firebase/functions-compat",Dv="@firebase/installations",Lv="@firebase/installations-compat",Mv="@firebase/messaging",xv="@firebase/messaging-compat",Uv="@firebase/performance",$v="@firebase/performance-compat",Fv="@firebase/remote-config",jv="@firebase/remote-config-compat",Bv="@firebase/storage",Hv="@firebase/storage-compat",Vv="@firebase/firestore",Wv="@firebase/firestore-compat",qv="firebase",Kv="9.23.0";/**
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
 */const Ao="[DEFAULT]",zv={[To]:"fire-core",[Iv]:"fire-core-compat",[Tv]:"fire-analytics",[bv]:"fire-analytics-compat",[Cv]:"fire-app-check",[Av]:"fire-app-check-compat",[Sv]:"fire-auth",[Rv]:"fire-auth-compat",[kv]:"fire-rtdb",[Pv]:"fire-rtdb-compat",[Ov]:"fire-fn",[Nv]:"fire-fn-compat",[Dv]:"fire-iid",[Lv]:"fire-iid-compat",[Mv]:"fire-fcm",[xv]:"fire-fcm-compat",[Uv]:"fire-perf",[$v]:"fire-perf-compat",[Fv]:"fire-rc",[jv]:"fire-rc-compat",[Bv]:"fire-gcs",[Hv]:"fire-gcs-compat",[Vv]:"fire-fst",[Wv]:"fire-fst-compat","fire-js":"fire-js",[qv]:"fire-js-all"};/**
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
 */const Fs=new Map,Co=new Map;function Gv(e,t){try{e.container.addComponent(t)}catch(n){pn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qn(e){const t=e.name;if(Co.has(t))return pn.debug(`There were multiple attempts to register component ${t}.`),!1;Co.set(t,e);for(const n of Fs.values())Gv(n,e);return!0}function ga(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Yv={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kt=new Yi("app","Firebase",Yv);/**
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
 */class Jv{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const ei=Kv;function oh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Ao,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(n||(n=nh()),!n)throw Kt.create("no-options");const r=Fs.get(s);if(r){if($s(n,r.options)&&$s(i,r.config))return r;throw Kt.create("duplicate-app",{appName:s})}const o=new sv(s);for(const l of Co.values())o.addComponent(l);const a=new Jv(n,i,o);return Fs.set(s,a),a}function ah(e=Ao){const t=Fs.get(e);if(!t&&e===Ao&&nh())return oh();if(!t)throw Kt.create("no-app",{appName:e});return t}function zt(e,t,n){var i;let s=(i=zv[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${t}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pn.warn(a.join(" "));return}qn(new dn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Xv="firebase-heartbeat-database",Qv=1,Mi="firebase-heartbeat-store";let Yr=null;function lh(){return Yr||(Yr=vv(Xv,Qv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Mi)}}}).catch(e=>{throw Kt.create("idb-open",{originalErrorMessage:e.message})})),Yr}async function Zv(e){try{return await(await lh()).transaction(Mi).objectStore(Mi).get(ch(e))}catch(t){if(t instanceof kt)pn.warn(t.message);else{const n=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pn.warn(n.message)}}}async function ic(e,t){try{const i=(await lh()).transaction(Mi,"readwrite");await i.objectStore(Mi).put(t,ch(e)),await i.done}catch(n){if(n instanceof kt)pn.warn(n.message);else{const i=Kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(i.message)}}}function ch(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ey=1024,ty=30*24*60*60*1e3;class ny{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sy(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=ty}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sc(),{heartbeatsToSend:n,unsentEntries:i}=iy(this._heartbeatsCache.heartbeats),s=Us(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sc(){return new Date().toISOString().substring(0,10)}function iy(e,t=ey){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),rc(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rc(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class sy{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Km()?zm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ic(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ic(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function rc(e){return Us(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function ry(e){qn(new dn("platform-logger",t=>new wv(t),"PRIVATE")),qn(new dn("heartbeat",t=>new ny(t),"PRIVATE")),zt(To,nc,e),zt(To,nc,"esm2017"),zt("fire-js","")}ry("");function ma(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n}function uh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oy=uh,hh=new Yi("auth","Firebase",uh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new da("@firebase/auth");function ay(e,...t){js.logLevel<=X.WARN&&js.warn(`Auth (${ei}): ${e}`,...t)}function As(e,...t){js.logLevel<=X.ERROR&&js.error(`Auth (${ei}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e,...t){throw va(e,...t)}function dt(e,...t){return va(e,...t)}function ly(e,t,n){const i=Object.assign(Object.assign({},oy()),{[t]:n});return new Yi("auth","Firebase",i).create(t,{appName:e.name})}function va(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return hh.create(e,...t)}function F(e,t,...n){if(!e)throw va(t,...n)}function Et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw As(t),new Error(t)}function Ct(e,t){e||Et(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function cy(){return oc()==="http:"||oc()==="https:"}function oc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cy()||Vm()||"connection"in navigator)?navigator.onLine:!0}function hy(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ct(n>t,"Short delay should be less than long delay!"),this.isMobile=Hm()||Wm()}get(){return uy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(e,t){Ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Xi(3e4,6e4);function ti(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function vn(e,t,n,i,s={}){return dh(e,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ji(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),fh.fetch()(ph(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},r))})}async function dh(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},fy),t);try{const s=new py(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw vs(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vs(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw vs(e,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ly(e,u,c);tt(e,u)}}catch(s){if(s instanceof kt)throw s;tt(e,"network-request-failed",{message:String(s)})}}async function Qi(e,t,n,i,s={}){const r=await vn(e,t,n,i,s);return"mfaPendingCredential"in r&&tt(e,"multi-factor-auth-required",{_serverResponse:r}),r}function ph(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?ya(e.config,s):`${e.config.apiScheme}://${s}`}class py{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(dt(this.auth,"network-request-failed")),dy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vs(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=dt(e,t,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gy(e,t){return vn(e,"POST","/v1/accounts:delete",t)}async function my(e,t){return vn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function vy(e,t=!1){const n=Pt(e),i=await n.getIdToken(t),s=_a(i);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ci(Jr(s.auth_time)),issuedAtTime:Ci(Jr(s.iat)),expirationTime:Ci(Jr(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Jr(e){return Number(e)*1e3}function _a(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return As("JWT malformed, contained fewer than 3 sections"),null;try{const s=eh(n);return s?JSON.parse(s):(As("Failed to decode base64 JWT payload"),null)}catch(s){return As("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yy(e){const t=_a(e);return F(t,"internal-error"),F(typeof t.exp<"u","internal-error"),F(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof kt&&_y(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function _y({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bs(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Kn(e,my(n,{idToken:i}));F(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?by(r.providerUserInfo):[],a=Iy(e.providerData,o),l=e.isAnonymous,c=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new gh(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Ey(e){const t=Pt(e);await Bs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Iy(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function by(e){return e.map(t=>{var{providerId:n}=t,i=ma(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(e,t){const n=await dh(e,{},async()=>{const i=Ji({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=ph(e,s,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fh.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){F(t.idToken,"internal-error"),F(typeof t.idToken<"u","internal-error"),F(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):yy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return F(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Ty(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new xi;return i&&(F(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(F(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(F(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new xi,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e,t){F(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hn{constructor(t){var{uid:n,auth:i,stsTokenManager:s}=t,r=ma(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new gh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await Kn(this,this.stsTokenManager.getToken(this.auth,t));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return vy(this,t)}reload(){return Ey(this)}_assign(t){this!==t&&(F(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await Bs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Kn(this,gy(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,s,r,o,a,l,c,u;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,v=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:W,emailVerified:M,isAnonymous:he,providerData:fe,stsTokenManager:je}=n;F(W&&je,t,"internal-error");const Ke=xi.fromJSON(this.name,je);F(typeof W=="string",t,"internal-error"),Mt(f,t.name),Mt(p,t.name),F(typeof M=="boolean",t,"internal-error"),F(typeof he=="boolean",t,"internal-error"),Mt(v,t.name),Mt(T,t.name),Mt(R,t.name),Mt(L,t.name),Mt(O,t.name),Mt(x,t.name);const nt=new hn({uid:W,auth:t,email:p,emailVerified:M,displayName:f,isAnonymous:he,photoURL:T,phoneNumber:v,tenantId:R,stsTokenManager:Ke,createdAt:O,lastLoginAt:x});return fe&&Array.isArray(fe)&&(nt.providerData=fe.map(Ve=>Object.assign({},Ve))),L&&(nt._redirectEventId=L),nt}static async _fromIdTokenResponse(t,n,i=!1){const s=new xi;s.updateFromServerResponse(n);const r=new hn({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Bs(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Map;function It(e){Ct(e instanceof Function,"Expected a class definition");let t=ac.get(e);return t?(Ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ac.set(e,t),t)}/**
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
 */class mh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}mh.type="NONE";const lc=mh;/**
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
 */function Cs(e,t,n){return`firebase:${e}:${t}:${n}`}class Mn{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Cs(this.userKey,s.apiKey,r),this.fullPersistenceKey=Cs("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?hn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Mn(It(lc),t,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||It(lc);const o=Cs(i,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=hn._fromJSON(t,u);c!==r&&(a=f),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Mn(r,t,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Mn(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_h(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Eh(t))return"Blackberry";if(Ih(t))return"Webos";if(wa(t))return"Safari";if((t.includes("chrome/")||yh(t))&&!t.includes("edge/"))return"Chrome";if(wh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vh(e=Le()){return/firefox\//i.test(e)}function wa(e=Le()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yh(e=Le()){return/crios\//i.test(e)}function _h(e=Le()){return/iemobile/i.test(e)}function wh(e=Le()){return/android/i.test(e)}function Eh(e=Le()){return/blackberry/i.test(e)}function Ih(e=Le()){return/webos/i.test(e)}function vr(e=Le()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ay(e=Le()){var t;return vr(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Cy(){return qm()&&document.documentMode===10}function bh(e=Le()){return vr(e)||wh(e)||Ih(e)||Eh(e)||/windows phone/i.test(e)||_h(e)}function Sy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(e,t=[]){let n;switch(e){case"Browser":n=cc(Le());break;case"Worker":n=`${cc(Le())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ei}/${i}`}async function Ah(e,t){return vn(e,"GET","/v2/recaptchaConfig",ti(e,t))}function uc(e){return e!==void 0&&e.enterprise!==void 0}class Ch{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Sh(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=dt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Ry().appendChild(i)})}function ky(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Py="https://www.google.com/recaptcha/enterprise.js?render=",Oy="recaptcha-enterprise",Ny="NO_RECAPTCHA";class Rh{constructor(t){this.type=Oy,this.auth=ni(t)}async verify(t="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ah(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ch(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;uc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:t}).then(c=>{o(c)}).catch(()=>{o(Ny)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&uc(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Sh(Py+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Hs(e,t,n,i=!1){const s=new Rh(e);let r;try{r=await s.verify(n)}catch{r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Dy{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((o,a)=>{try{const l=t(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hc(this),this.idTokenSubscription=new hc(this),this.beforeStateQueue=new Dy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Bs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=hy()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Pt(t):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&F(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(t))})}async initializeRecaptchaConfig(){const t=await Ah(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ch(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Rh(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Yi("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&It(t)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?t.addObserver(n,i,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&ay(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ni(e){return Pt(e)}class hc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Qm(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(e,t){const n=ga(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if($s(r,t??{}))return s;tt(s,"already-initialized")}return n.initialize({options:t})}function xy(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(It);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function Uy(e,t,n){const i=ni(e);F(i._canInitEmulator,i,"emulator-config-failed"),F(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=kh(t),{host:o,port:a}=$y(t),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Fy()}function kh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $y(e){const t=kh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:fc(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:fc(o)}}}function fc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Fy(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(t){return Et("not implemented")}_linkToIdToken(t,n){return Et("not implemented")}_getReauthenticationResolver(t){return Et("not implemented")}}async function jy(e,t){return vn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(e,t){return Qi(e,"POST","/v1/accounts:signInWithPassword",ti(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(e,t){return Qi(e,"POST","/v1/accounts:signInWithEmailLink",ti(e,t))}async function Hy(e,t){return Qi(e,"POST","/v1/accounts:signInWithEmailLink",ti(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Ea{constructor(t,n,i,s=null){super("password",i),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Ui(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new Ui(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Hs(t,i,"signInWithPassword");return Xr(t,s)}else return Xr(t,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Hs(t,i,"signInWithPassword");return Xr(t,r)}else return Promise.reject(s)});case"emailLink":return By(t,{email:this._email,oobCode:this._password});default:tt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return jy(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Hy(t,{idToken:n,email:this._email,oobCode:this._password});default:tt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(e,t){return Qi(e,"POST","/v1/accounts:signInWithIdp",ti(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="http://localhost";class gn extends Ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new gn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=n,r=ma(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new gn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return xn(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,xn(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,xn(t,n)}buildRequest(){const t={requestUri:Vy,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ji(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qy(e){const t=mi(vi(e)).link,n=t?mi(vi(t)).deep_link_id:null,i=mi(vi(e)).deep_link_id;return(i?mi(vi(i)).link:null)||i||n||t||e}class Ia{constructor(t){var n,i,s,r,o,a;const l=mi(vi(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,f=Wy((s=l.mode)!==null&&s!==void 0?s:null);F(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=qy(t);try{return new Ia(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.providerId=ii.PROVIDER_ID}static credential(t,n){return Ui._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=Ia.parseLink(n);return F(i,"argument-error"),Ui._fromEmailAndCode(t,i.code,i.tenantId)}}ii.PROVIDER_ID="password";ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zi extends Ph{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Zi{constructor(){super("facebook.com")}static credential(t){return gn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return gn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Ft.credential(n,i)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Zi{constructor(){super("github.com")}static credential(t){return gn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Zi{constructor(){super("twitter.com")}static credential(t,n){return gn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Bt.credential(n,i)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(e,t){return Qi(e,"POST","/v1/accounts:signUp",ti(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await hn._fromIdTokenResponse(t,i,s),o=dc(i);return new mn({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=dc(i);return new mn({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function dc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends kt{constructor(t,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Vs.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new Vs(t,n,i,s)}}function Oh(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Vs._fromErrorAndOperation(e,r,t,i):r})}async function Ky(e,t,n=!1){const i=await Kn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return mn._forOperation(e,"link",i)}/**
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
 */async function zy(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Kn(e,Oh(i,s,t,e),n);F(r.idToken,i,"internal-error");const o=_a(r.idToken);F(o,i,"internal-error");const{sub:a}=o;return F(e.uid===a,i,"user-mismatch"),mn._forOperation(e,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&tt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(e,t,n=!1){const i="signIn",s=await Oh(e,i,t),r=await mn._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function Gy(e,t){return Nh(ni(e),t)}async function Yy(e,t,n){var i;const s=ni(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await Hs(s,r,"signUpPassword");o=Qr(s,c)}else o=Qr(s,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Hs(s,r,"signUpPassword");return Qr(s,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await mn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function Jy(e,t,n){return Gy(Pt(e),ii.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(e,t){return vn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const i=Pt(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Kn(i,Xy(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Zy(e,t,n,i){return Pt(e).onIdTokenChanged(t,n,i)}function e_(e,t,n){return Pt(e).beforeAuthStateChanged(t,n)}function t_(e){return Pt(e).signOut()}const Ws="__sak";/**
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
 */class Dh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ws,"1"),this.storage.removeItem(Ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(){const e=Le();return wa(e)||vr(e)}const i_=1e3,s_=10;class Lh extends Dh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=n_()&&Sy(),this.fallbackToPolling=bh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Cy()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,s_):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},i_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Lh.type="LOCAL";const r_=Lh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends Dh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Mh.type="SESSION";const xh=Mh;/**
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
 */function o_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new yr(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await o_(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class a_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ba("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function l_(e){pt().location.href=e}/**
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
 */function Uh(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function c_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function u_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function h_(){return Uh()?self:null}/**
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
 */const $h="firebaseLocalStorageDb",f_=1,qs="firebaseLocalStorage",Fh="fbase_key";class es{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _r(e,t){return e.transaction([qs],t?"readwrite":"readonly").objectStore(qs)}function d_(){const e=indexedDB.deleteDatabase($h);return new es(e).toPromise()}function Ro(){const e=indexedDB.open($h,f_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(qs,{keyPath:Fh})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(qs)?t(i):(i.close(),await d_(),t(await Ro()))})})}async function pc(e,t,n){const i=_r(e,!0).put({[Fh]:t,value:n});return new es(i).toPromise()}async function p_(e,t){const n=_r(e,!1).get(t),i=await new es(n).toPromise();return i===void 0?null:i.value}function gc(e,t){const n=_r(e,!0).delete(t);return new es(n).toPromise()}const g_=800,m_=3;class jh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ro(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>m_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yr._getInstance(h_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await c_(),!this.activeServiceWorker)return;this.sender=new a_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||u_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ro();return await pc(t,Ws,"1"),await gc(t,Ws),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>pc(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>p_(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>gc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=_r(s,!1).getAll();return new es(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),g_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jh.type="LOCAL";const v_=jh;new Xi(3e4,6e4);/**
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
 */function y_(e,t){return t?It(t):(F(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Ta extends Ea{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return xn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return xn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return xn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function __(e){return Nh(e.auth,new Ta(e),e.bypassAuthState)}function w_(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),zy(n,new Ta(e),e.bypassAuthState)}async function E_(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),Ky(n,new Ta(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return __;case"linkViaPopup":case"linkViaRedirect":return E_;case"reauthViaPopup":case"reauthViaRedirect":return w_;default:tt(this.auth,"internal-error")}}resolve(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=new Xi(2e3,1e4);class Sn extends Bh{constructor(t,n,i,s,r){super(t,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return F(t,this.auth,"internal-error"),t}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const t=ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,I_.get())};t()}}Sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="pendingRedirect",Ss=new Map;class T_ extends Bh{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Ss.get(this.auth._key());if(!t){try{const i=await A_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Ss.set(this.auth._key(),t)}return this.bypassAuthState||Ss.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A_(e,t){const n=R_(t),i=S_(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function C_(e,t){Ss.set(e._key(),t)}function S_(e){return It(e._redirectPersistence)}function R_(e){return Cs(b_,e.config.apiKey,e.name)}async function k_(e,t,n=!1){const i=ni(e),s=y_(i,t),o=await new T_(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=10*60*1e3;class O_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!N_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!Hh(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=P_&&this.cachedEventUids.clear(),this.cachedEventUids.has(mc(t))}saveEventToCache(t){this.cachedEventUids.add(mc(t)),this.lastProcessedEventTime=Date.now()}}function mc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Hh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function N_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hh(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(e,t={}){return vn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M_=/^https?/;async function x_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await D_(e);for(const n of t)try{if(U_(n))return}catch{}tt(e,"unauthorized-domain")}function U_(e){const t=So(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!M_.test(n))return!1;if(L_.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const $_=new Xi(3e4,6e4);function vc(){const e=pt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function F_(e){return new Promise((t,n)=>{var i,s,r;function o(){vc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{vc(),n(dt(e,"network-request-failed"))},timeout:$_.get()})}if(!((s=(i=pt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=pt().gapi)===null||r===void 0)&&r.load)o();else{const a=ky("iframefcb");return pt()[a]=()=>{gapi.load?o():n(dt(e,"network-request-failed"))},Sh(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Rs=null,t})}let Rs=null;function j_(e){return Rs=Rs||F_(e),Rs}/**
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
 */const B_=new Xi(5e3,15e3),H_="__/auth/iframe",V_="emulator/auth/iframe",W_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K_(e){const t=e.config;F(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ya(t,V_):`https://${e.config.authDomain}/${H_}`,i={apiKey:t.apiKey,appName:e.name,v:ei},s=q_.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ji(i).slice(1)}`}async function z_(e){const t=await j_(e),n=pt().gapi;return F(n,e,"internal-error"),t.open({where:document.body,url:K_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:W_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=dt(e,"network-request-failed"),a=pt().setTimeout(()=>{r(o)},B_.get());function l(){pt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const G_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y_=500,J_=600,X_="_blank",Q_="http://localhost";class yc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z_(e,t,n,i=Y_,s=J_){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},G_),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Le().toLowerCase();n&&(a=yh(c)?X_:n),vh(c)&&(t=t||Q_,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[v,T])=>`${p}${v}=${T},`,"");if(Ay(c)&&a!=="_self")return e0(t||"",a),new yc(null);const f=window.open(t||"",a,u);F(f,e,"popup-blocked");try{f.focus()}catch{}return new yc(f)}function e0(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const t0="__/auth/handler",n0="emulator/auth/handler",i0=encodeURIComponent("fac");async function _c(e,t,n,i,s,r){F(e.config.authDomain,e,"auth-domain-config-required"),F(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:ei,eventId:s};if(t instanceof Ph){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Xm(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(r||{}))o[u]=f}if(t instanceof Zi){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${i0}=${encodeURIComponent(l)}`:"";return`${s0(e)}?${Ji(a).slice(1)}${c}`}function s0({config:e}){return e.emulator?ya(e,n0):`https://${e.authDomain}/${t0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="webStorageSupport";class r0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xh,this._completeRedirectFn=k_,this._overrideRedirectResult=C_}async _openPopup(t,n,i,s){var r;Ct((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await _c(t,n,i,So(),s);return Z_(t,o,ba())}async _openRedirect(t,n,i,s){await this._originValidation(t);const r=await _c(t,n,i,So(),s);return l_(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Ct(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await z_(t),i=new O_(t);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Zr,{type:Zr},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Zr];o!==void 0&&n(!!o),tt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return bh()||wa()||vr()}}const o0=r0;var wc="@firebase/auth",Ec="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function c0(e){qn(new dn("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Th(e)},c=new Ly(i,s,r,l);return xy(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),qn(new dn("auth-internal",t=>{const n=ni(t.getProvider("auth").getImmediate());return(i=>new a0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(wc,Ec,l0(e)),zt(wc,Ec,"esm2017")}/**
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
 */const u0=5*60,h0=ih("authIdTokenMaxAge")||u0;let Ic=null;const f0=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>h0)return;const s=n==null?void 0:n.token;Ic!==s&&(Ic=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function d0(e=ah()){const t=ga(e,"auth");if(t.isInitialized())return t.getImmediate();const n=My(e,{popupRedirectResolver:o0,persistence:[v_,r_,xh]}),i=ih("authTokenSyncURL");if(i){const r=f0(i);e_(n,r,()=>r(n.currentUser)),Zy(n,o=>r(o))}const s=th("auth");return s&&Uy(n,`http://${s}`),n}c0("Browser");var p0="firebase",g0="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(p0,g0,"app");var m0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,Aa=Aa||{},B=m0||self;function wr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ts(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function v0(e){return Object.prototype.hasOwnProperty.call(e,eo)&&e[eo]||(e[eo]=++y0)}var eo="closure_uid_"+(1e9*Math.random()>>>0),y0=0;function _0(e,t,n){return e.call.apply(e.bind,arguments)}function w0(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Ne(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ne=_0:Ne=w0,Ne.apply(null,arguments)}function ys(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function Ee(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(i,o)}}function Yt(){this.s=this.s,this.o=this.o}var E0=0;Yt.prototype.s=!1;Yt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),E0!=0)&&v0(this)};Yt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ca(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function bc(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(wr(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function De(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var I0=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{B.addEventListener("test",()=>{},t),B.removeEventListener("test",()=>{},t)}catch{}return e}();function $i(e){return/^[\s\xa0]*$/.test(e)}function Er(){var e=B.navigator;return e&&(e=e.userAgent)?e:""}function ct(e){return Er().indexOf(e)!=-1}function Sa(e){return Sa[" "](e),e}Sa[" "]=function(){};function b0(e,t){var n=mw;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var T0=ct("Opera"),Fi=ct("Trident")||ct("MSIE"),Wh=ct("Edge"),ko=Wh||Fi,qh=ct("Gecko")&&!(Er().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge"))&&!(ct("Trident")||ct("MSIE"))&&!ct("Edge"),A0=Er().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge");function Kh(){var e=B.document;return e?e.documentMode:void 0}e:{var Tc="",to=function(){var e=Er();if(qh)return/rv:([^\);]+)(\)|;)/.exec(e);if(Wh)return/Edge\/([\d\.]+)/.exec(e);if(Fi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(A0)return/WebKit\/(\S+)/.exec(e);if(T0)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(to&&(Tc=to?to[1]:""),Fi){var Ac=Kh();if(Ac!=null&&Ac>parseFloat(Tc))break e}}B.document&&Fi&&Kh();function ji(e,t){if(De.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(qh){e:{try{Sa(t.nodeName);var s=!0;break e}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:C0[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ji.$.h.call(this)}}Ee(ji,De);var C0={2:"touch",3:"pen",4:"mouse"};ji.prototype.h=function(){ji.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ns="closure_listenable_"+(1e6*Math.random()|0),S0=0;function R0(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++S0,this.fa=this.ia=!1}function Ir(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ra(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function k0(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function zh(e){const t={};for(const n in e)t[n]=e[n];return t}const Cc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gh(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<Cc.length;r++)n=Cc[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function br(e){this.src=e,this.g={},this.h=0}br.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Oo(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new R0(t,this.src,r,!!i,s),t.ia=n,e.push(t)),t};function Po(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=Vh(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Ir(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Oo(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}var ka="closure_lm_"+(1e6*Math.random()|0),no={};function Yh(e,t,n,i,s){if(i&&i.once)return Xh(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Yh(e,t[r],n,i,s);return null}return n=Na(n),e&&e[ns]?e.O(t,n,ts(i)?!!i.capture:!!i,s):Jh(e,t,n,!1,i,s)}function Jh(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=ts(s)?!!s.capture:!!s,a=Oa(e);if(a||(e[ka]=a=new br(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=P0(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)I0||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(Zh(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function P0(){function e(n){return t.call(e.src,e.listener,n)}const t=O0;return e}function Xh(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Xh(e,t[r],n,i,s);return null}return n=Na(n),e&&e[ns]?e.P(t,n,ts(i)?!!i.capture:!!i,s):Jh(e,t,n,!0,i,s)}function Qh(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)Qh(e,t[r],n,i,s);else i=ts(i)?!!i.capture:!!i,n=Na(n),e&&e[ns]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Oo(r,n,i,s),-1<n&&(Ir(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Oa(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Oo(t,n,i,s)),(n=-1<e?t[e]:null)&&Pa(n))}function Pa(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ns])Po(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Zh(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Oa(t))?(Po(n,e),n.h==0&&(n.src=null,t[ka]=null)):Ir(e)}}}function Zh(e){return e in no?no[e]:no[e]="on"+e}function O0(e,t){if(e.fa)e=!0;else{t=new ji(t,this);var n=e.listener,i=e.la||e.src;e.ia&&Pa(e),e=n.call(i,t)}return e}function Oa(e){return e=e[ka],e instanceof br?e:null}var io="__closure_events_fn_"+(1e9*Math.random()>>>0);function Na(e){return typeof e=="function"?e:(e[io]||(e[io]=function(t){return e.handleEvent(t)}),e[io])}function we(){Yt.call(this),this.i=new br(this),this.S=this,this.J=null}Ee(we,Yt);we.prototype[ns]=!0;we.prototype.removeEventListener=function(e,t,n,i){Qh(this,e,t,n,i)};function Te(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new De(t,e);else if(t instanceof De)t.target=t.target||e;else{var s=t;t=new De(i,e),Gh(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=_s(o,i,!0,t)&&s}if(o=t.g=e,s=_s(o,i,!0,t)&&s,s=_s(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=_s(o,i,!1,t)&&s}we.prototype.N=function(){if(we.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Ir(n[i]);delete e.g[t],e.h--}}this.J=null};we.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};we.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function _s(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Po(e.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Da=B.JSON.stringify;class N0{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function D0(){var e=La;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class L0{constructor(){this.h=this.g=null}add(t,n){const i=ef.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var ef=new N0(()=>new M0,e=>e.reset());class M0{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function x0(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function U0(e){B.setTimeout(()=>{throw e},0)}let Bi,Hi=!1,La=new L0,tf=()=>{const e=B.Promise.resolve(void 0);Bi=()=>{e.then($0)}};var $0=()=>{for(var e;e=D0();){try{e.h.call(e.g)}catch(n){U0(n)}var t=ef;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Hi=!1};function Tr(e,t){we.call(this),this.h=e||1,this.g=t||B,this.j=Ne(this.qb,this),this.l=Date.now()}Ee(Tr,we);S=Tr.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Te(this,"tick"),this.ga&&(Ma(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ma(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}S.N=function(){Tr.$.N.call(this),Ma(this),delete this.g};function xa(e,t,n){if(typeof e=="function")n&&(e=Ne(e,n));else if(e&&typeof e.handleEvent=="function")e=Ne(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:B.setTimeout(e,t||0)}function nf(e){e.g=xa(()=>{e.g=null,e.i&&(e.i=!1,nf(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class F0 extends Yt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:nf(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(e){Yt.call(this),this.h=e,this.g={}}Ee(Vi,Yt);var Sc=[];function sf(e,t,n,i){Array.isArray(n)||(n&&(Sc[0]=n.toString()),n=Sc);for(var s=0;s<n.length;s++){var r=Yh(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function rf(e){Ra(e.g,function(t,n){this.g.hasOwnProperty(n)&&Pa(t)},e),e.g={}}Vi.prototype.N=function(){Vi.$.N.call(this),rf(this)};Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ar(){this.g=!0}Ar.prototype.Ea=function(){this.g=!1};function j0(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function B0(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function Rn(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+V0(e,n)+(i?" "+i:"")})}function H0(e,t){e.info(function(){return"TIMEOUT: "+t})}Ar.prototype.info=function(){};function V0(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Da(n)}catch{return t}}var si={},Rc=null;function Ua(){return Rc=Rc||new we}si.Ta="serverreachability";function of(e){De.call(this,si.Ta,e)}Ee(of,De);function Wi(e){const t=Ua();Te(t,new of(t))}si.STAT_EVENT="statevent";function af(e,t){De.call(this,si.STAT_EVENT,e),this.stat=t}Ee(af,De);function xe(e){const t=Ua();Te(t,new af(t,e))}si.Ua="timingevent";function lf(e,t){De.call(this,si.Ua,e),this.size=t}Ee(lf,De);function is(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){e()},t)}var $a={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},W0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fa(){}Fa.prototype.h=null;function kc(e){return e.h||(e.h=e.i())}function q0(){}var ss={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ja(){De.call(this,"d")}Ee(ja,De);function Ba(){De.call(this,"c")}Ee(Ba,De);var No;function Cr(){}Ee(Cr,Fa);Cr.prototype.g=function(){return new XMLHttpRequest};Cr.prototype.i=function(){return{}};No=new Cr;function rs(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Vi(this),this.P=K0,e=ko?125:void 0,this.V=new Tr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new cf}function cf(){this.i=null,this.g="",this.h=!1}var K0=45e3,Do={},Ks={};S=rs.prototype;S.setTimeout=function(e){this.P=e};function Lo(e,t,n){e.L=1,e.v=Rr(St(t)),e.s=n,e.S=!0,uf(e,null)}function uf(e,t){e.G=Date.now(),os(e),e.A=St(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),yf(n.i,"t",i),e.C=0,n=e.l.J,e.h=new cf,e.g=Ff(e.l,n?t:null,!e.s),0<e.O&&(e.M=new F0(Ne(e.Pa,e,e.g),e.O)),sf(e.U,e.g,"readystatechange",e.nb),t=e.I?zh(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Wi(),j0(e.j,e.u,e.A,e.m,e.W,e.s)}S.nb=function(e){e=e.target;const t=this.M;t&&ht(e)==3?t.l():this.Pa(e)};S.Pa=function(e){try{if(e==this.g)e:{const u=ht(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||ko||this.g&&(this.h.h||this.g.ja()||Dc(this.g)))){this.J||u!=4||t==7||(t==8||0>=f?Wi(3):Wi(2)),Sr(this);var n=this.g.da();this.ca=n;t:if(hf(this)){var i=Dc(this.g);e="";var s=i.length,r=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),Si(this);var o="";break t}this.h.i=new B.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,B0(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$i(a)){var c=a;break t}}c=null}if(n=c)Rn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mo(this,n);else{this.i=!1,this.o=3,xe(12),on(this),Si(this);break e}}this.S?(ff(this,u,o),ko&&this.i&&u==3&&(sf(this.U,this.V,"tick",this.mb),this.V.start())):(Rn(this.j,this.m,o,null),Mo(this,o)),u==4&&on(this),this.i&&!this.J&&(u==4?Mf(this.l,this):(this.i=!1,os(this)))}else dw(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xe(12)):(this.o=0,xe(13)),on(this),Si(this)}}}catch{}finally{}};function hf(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ff(e,t,n){let i=!0,s;for(;!e.J&&e.C<n.length;)if(s=z0(e,n),s==Ks){t==4&&(e.o=4,xe(14),i=!1),Rn(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Do){e.o=4,xe(15),Rn(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else Rn(e.j,e.m,s,null),Mo(e,s);hf(e)&&s!=Ks&&s!=Do&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,xe(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),za(t),t.M=!0,xe(11))):(Rn(e.j,e.m,n,"[Invalid Chunked Response]"),on(e),Si(e))}S.mb=function(){if(this.g){var e=ht(this.g),t=this.g.ja();this.C<t.length&&(Sr(this),ff(this,e,t),this.i&&e!=4&&os(this))}};function z0(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?Ks:(n=Number(t.substring(n,i)),isNaN(n)?Do:(i+=1,i+n>t.length?Ks:(t=t.slice(i,i+n),e.C=i+n,t)))}S.cancel=function(){this.J=!0,on(this)};function os(e){e.Y=Date.now()+e.P,df(e,e.P)}function df(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=is(Ne(e.lb,e),t)}function Sr(e){e.B&&(B.clearTimeout(e.B),e.B=null)}S.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(H0(this.j,this.A),this.L!=2&&(Wi(),xe(17)),on(this),this.o=2,Si(this)):df(this,this.Y-e)};function Si(e){e.l.H==0||e.J||Mf(e.l,e)}function on(e){Sr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ma(e.V),rf(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Mo(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||xo(n.i,e))){if(!e.K&&xo(n.i,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Ys(n),Nr(n);else break e;Ka(n),xe(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=is(Ne(n.ib,n),6e3));if(1>=Ef(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else an(n,11)}else if((e.K||n.g==e)&&Ys(n),!$i(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=c[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(i=1.5*p,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const v=e.g;if(v){const T=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=i.i;r.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ha(r,r.h),r.h=null))}if(i.F){const R=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(i.Da=R,se(i.I,i.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=$f(i,i.J?i.pa:null,i.Y),o.K){If(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(Sr(a),os(a)),i.g=o}else Df(i);0<n.j.length&&Dr(n)}else c[0]!="stop"&&c[0]!="close"||an(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?an(n,7):qa(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Wi(4)}catch{}}function G0(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(wr(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function Y0(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(wr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function pf(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(wr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Y0(e),i=G0(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var gf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function J0(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function fn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof fn){this.h=e.h,zs(this,e.j),this.s=e.s,this.g=e.g,Gs(this,e.m),this.l=e.l;var t=e.i,n=new qi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Pc(this,n),this.o=e.o}else e&&(t=String(e).match(gf))?(this.h=!1,zs(this,t[1]||"",!0),this.s=yi(t[2]||""),this.g=yi(t[3]||"",!0),Gs(this,t[4]),this.l=yi(t[5]||"",!0),Pc(this,t[6]||"",!0),this.o=yi(t[7]||"")):(this.h=!1,this.i=new qi(null,this.h))}fn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(_i(t,Oc,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(_i(t,Oc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(_i(n,n.charAt(0)=="/"?Z0:Q0,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",_i(n,tw)),e.join("")};function St(e){return new fn(e)}function zs(e,t,n){e.j=n?yi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Gs(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Pc(e,t,n){t instanceof qi?(e.i=t,nw(e.i,e.h)):(n||(t=_i(t,ew)),e.i=new qi(t,e.h))}function se(e,t,n){e.i.set(t,n)}function Rr(e){return se(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function yi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function _i(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,X0),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function X0(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Oc=/[#\/\?@]/g,Q0=/[#\?:]/g,Z0=/[#\?]/g,ew=/[#\?@]/g,tw=/#/g;function qi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Jt(e){e.g||(e.g=new Map,e.h=0,e.i&&J0(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}S=qi.prototype;S.add=function(e,t){Jt(this),this.i=null,e=ri(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function mf(e,t){Jt(e),t=ri(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function vf(e,t){return Jt(e),t=ri(e,t),e.g.has(t)}S.forEach=function(e,t){Jt(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)};S.ta=function(){Jt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n};S.Z=function(e){Jt(this);let t=[];if(typeof e=="string")vf(this,e)&&(t=t.concat(this.g.get(ri(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};S.set=function(e,t){return Jt(this),this.i=null,e=ri(this,e),vf(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};S.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function yf(e,t,n){mf(e,t),0<n.length&&(e.i=null,e.g.set(ri(e,t),Ca(n)),e.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function ri(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function nw(e,t){t&&!e.j&&(Jt(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(mf(this,i),yf(this,s,n))},e)),e.j=t}var iw=class{constructor(e,t){this.g=e,this.map=t}};function _f(e){this.l=e||sw,B.PerformanceNavigationTiming?(e=B.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sw=10;function wf(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ef(e){return e.h?1:e.g?e.g.size:0}function xo(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ha(e,t){e.g?e.g.add(t):e.h=t}function If(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}_f.prototype.cancel=function(){if(this.i=bf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function bf(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ca(e.i)}var rw=class{stringify(e){return B.JSON.stringify(e,void 0)}parse(e){return B.JSON.parse(e,void 0)}};function ow(){this.g=new rw}function aw(e,t,n){const i=n||"";try{pf(e,function(s,r){let o=s;ts(s)&&(o=Da(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function lw(e,t){const n=new Ar;if(B.Image){const i=new Image;i.onload=ys(ws,n,i,"TestLoadImage: loaded",!0,t),i.onerror=ys(ws,n,i,"TestLoadImage: error",!1,t),i.onabort=ys(ws,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=ys(ws,n,i,"TestLoadImage: timeout",!1,t),B.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function ws(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function kr(e){this.l=e.fc||null,this.j=e.ob||!1}Ee(kr,Fa);kr.prototype.g=function(){return new Pr(this.l,this.j)};kr.prototype.i=function(e){return function(){return e}}({});function Pr(e,t){we.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Va,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ee(Pr,we);var Va=0;S=Pr.prototype;S.open=function(e,t){if(this.readyState!=Va)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ki(this)};S.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||B).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,as(this)),this.readyState=Va};S.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ki(this)),this.g&&(this.readyState=3,Ki(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tf(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Tf(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}S.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?as(this):Ki(this),this.readyState==3&&Tf(this)}};S.Za=function(e){this.g&&(this.response=this.responseText=e,as(this))};S.Ya=function(e){this.g&&(this.response=e,as(this))};S.ka=function(){this.g&&as(this)};function as(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ki(e)}S.setRequestHeader=function(e,t){this.v.append(e,t)};S.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ki(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var cw=B.JSON.parse;function ce(e){we.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Af,this.L=this.M=!1}Ee(ce,we);var Af="",uw=/^https?$/i,hw=["POST","PUT"];S=ce.prototype;S.Oa=function(e){this.M=e};S.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():No.g(),this.C=this.u?kc(this.u):kc(No),this.g.onreadystatechange=Ne(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){Nc(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=B.FormData&&e instanceof B.FormData,!(0<=Vh(hw,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Rf(this),0<this.B&&((this.L=fw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ne(this.ua,this)):this.A=xa(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Nc(this,r)}};function fw(e){return Fi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}S.ua=function(){typeof Aa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function Nc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Cf(e),Or(e)}function Cf(e){e.F||(e.F=!0,Te(e,"complete"),Te(e,"error"))}S.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Te(this,"complete"),Te(this,"abort"),Or(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Or(this,!0)),ce.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?Sf(this):this.kb())};S.kb=function(){Sf(this)};function Sf(e){if(e.h&&typeof Aa<"u"&&(!e.C[1]||ht(e)!=4||e.da()!=2)){if(e.v&&ht(e)==4)xa(e.La,0,e);else if(Te(e,"readystatechange"),ht(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=o===0){var s=String(e.I).match(gf)[1]||null;!s&&B.self&&B.self.location&&(s=B.self.location.protocol.slice(0,-1)),i=!uw.test(s?s.toLowerCase():"")}n=i}if(n)Te(e,"complete"),Te(e,"success");else{e.m=6;try{var r=2<ht(e)?e.g.statusText:""}catch{r=""}e.j=r+" ["+e.da()+"]",Cf(e)}}finally{Or(e)}}}}function Or(e,t){if(e.g){Rf(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Te(e,"ready");try{n.onreadystatechange=i}catch{}}}function Rf(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(B.clearTimeout(e.A),e.A=null)}S.isActive=function(){return!!this.g};function ht(e){return e.g?e.g.readyState:0}S.da=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),cw(t)}};function Dc(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Af:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function dw(e){const t={};e=(e.g&&2<=ht(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<e.length;i++){if($i(e[i]))continue;var n=x0(e[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=t[s]||[];t[s]=r,r.push(n)}k0(t,function(i){return i.join(", ")})}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function kf(e){let t="";return Ra(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Wa(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=kf(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):se(e,t,n))}function fi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Pf(e){this.Ga=0,this.j=[],this.l=new Ar,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fi("baseRetryDelayMs",5e3,e),this.hb=fi("retryDelaySeedMs",1e4,e),this.eb=fi("forwardChannelMaxRetries",2,e),this.xa=fi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new _f(e&&e.concurrentRequestLimit),this.Ja=new ow,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}S=Pf.prototype;S.ra=8;S.H=1;function qa(e){if(Of(e),e.H==3){var t=e.W++,n=St(e.I);if(se(n,"SID",e.K),se(n,"RID",t),se(n,"TYPE","terminate"),ls(e,n),t=new rs(e,e.l,t),t.L=2,t.v=Rr(St(n)),n=!1,B.navigator&&B.navigator.sendBeacon)try{n=B.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&B.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ff(t.l,null),t.g.ha(t.v)),t.G=Date.now(),os(t)}Uf(e)}function Nr(e){e.g&&(za(e),e.g.cancel(),e.g=null)}function Of(e){Nr(e),e.u&&(B.clearTimeout(e.u),e.u=null),Ys(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&B.clearTimeout(e.m),e.m=null)}function Dr(e){if(!wf(e.i)&&!e.m){e.m=!0;var t=e.Na;Bi||tf(),Hi||(Bi(),Hi=!0),La.add(t,e),e.C=0}}function pw(e,t){return Ef(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=is(Ne(e.Na,e,t),xf(e,e.C)),e.C++,!0)}S.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new rs(this,this.l,e);let r=this.s;if(this.U&&(r?(r=zh(r),Gh(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Nf(this,s,t),n=St(this.I),se(n,"RID",e),se(n,"CVER",22),this.F&&se(n,"X-HTTP-Session-Id",this.F),ls(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(kf(r)))+"&"+t:this.o&&Wa(n,this.o,r)),Ha(this.i,s),this.bb&&se(n,"TYPE","init"),this.P?(se(n,"$req",t),se(n,"SID","null"),s.aa=!0,Lo(s,n,null)):Lo(s,n,t),this.H=2}}else this.H==3&&(e?Lc(this,e):this.j.length==0||wf(this.i)||Lc(this))};function Lc(e,t){var n;t?n=t.m:n=e.W++;const i=St(e.I);se(i,"SID",e.K),se(i,"RID",n),se(i,"AID",e.V),ls(e,i),e.o&&e.s&&Wa(i,e.o,e.s),n=new rs(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Nf(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ha(e.i,n),Lo(n,i,t)}function ls(e,t){e.na&&Ra(e.na,function(n,i){se(t,i,n)}),e.h&&pf({},function(n,i){se(t,i,n)})}function Nf(e,t,n){n=Math.min(e.j.length,n);var i=e.h?Ne(e.h.Va,e.h,e):null;e:{var s=e.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{aw(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function Df(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Bi||tf(),Hi||(Bi(),Hi=!0),La.add(t,e),e.A=0}}function Ka(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=is(Ne(e.Ma,e),xf(e,e.A)),e.A++,!0)}S.Ma=function(){if(this.u=null,Lf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=is(Ne(this.jb,this),e)}};S.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,xe(10),Nr(this),Lf(this))};function za(e){e.B!=null&&(B.clearTimeout(e.B),e.B=null)}function Lf(e){e.g=new rs(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=St(e.wa);se(t,"RID","rpc"),se(t,"SID",e.K),se(t,"AID",e.V),se(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&se(t,"TO",e.qa),se(t,"TYPE","xmlhttp"),ls(e,t),e.o&&e.s&&Wa(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Rr(St(t)),n.s=null,n.S=!0,uf(n,e)}S.ib=function(){this.v!=null&&(this.v=null,Nr(this),Ka(this),xe(19))};function Ys(e){e.v!=null&&(B.clearTimeout(e.v),e.v=null)}function Mf(e,t){var n=null;if(e.g==t){Ys(e),za(e),e.g=null;var i=2}else if(xo(e.i,t))n=t.F,If(e.i,t),i=1;else return;if(e.H!=0){if(t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;i=Ua(),Te(i,new lf(i,n)),Dr(e)}else Df(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(i==1&&pw(e,t)||i==2&&Ka(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:an(e,5);break;case 4:an(e,10);break;case 3:an(e,6);break;default:an(e,2)}}}function xf(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function an(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var i=Ne(e.pb,e);n||(n=new fn("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||zs(n,"https"),Rr(n)),lw(n.toString(),i)}else xe(2);e.H=0,e.h&&e.h.za(t),Uf(e),Of(e)}S.pb=function(e){e?(this.l.info("Successfully pinged google.com"),xe(2)):(this.l.info("Failed to ping google.com"),xe(1))};function Uf(e){if(e.H=0,e.ma=[],e.h){const t=bf(e.i);(t.length!=0||e.j.length!=0)&&(bc(e.ma,t),bc(e.ma,e.j),e.i.i.length=0,Ca(e.j),e.j.length=0),e.h.ya()}}function $f(e,t,n){var i=n instanceof fn?St(n):new fn(n);if(i.g!="")t&&(i.g=t+"."+i.g),Gs(i,i.m);else{var s=B.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new fn(null);i&&zs(r,i),t&&(r.g=t),s&&Gs(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&se(i,n,t),se(i,"VER",e.ra),ls(e,i),i}function Ff(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new ce(new kr({ob:!0})):new ce(e.va),t.Oa(e.J),t}S.isActive=function(){return!!this.h&&this.h.isActive(this)};function jf(){}S=jf.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.isActive=function(){return!0};S.Va=function(){};function qe(e,t){we.call(this),this.g=new Pf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!$i(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!$i(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new oi(this)}Ee(qe,we);qe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;xe(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=$f(e,null,e.Y),Dr(e)};qe.prototype.close=function(){qa(this.g)};qe.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Da(e),e=n);t.j.push(new iw(t.fb++,e)),t.H==3&&Dr(t)};qe.prototype.N=function(){this.g.h=null,delete this.j,qa(this.g),delete this.g,qe.$.N.call(this)};function Bf(e){ja.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Ee(Bf,ja);function Hf(){Ba.call(this),this.status=1}Ee(Hf,Ba);function oi(e){this.g=e}Ee(oi,jf);oi.prototype.Ba=function(){Te(this.g,"a")};oi.prototype.Aa=function(e){Te(this.g,new Bf(e))};oi.prototype.za=function(e){Te(this.g,new Hf)};oi.prototype.ya=function(){Te(this.g,"b")};function gw(){this.blockSize=-1}function vt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ee(vt,gw);vt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function so(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^r&(n^s))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^r)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~r))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}vt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(s==0)for(;r<=n;)so(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){so(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){so(this,i),s=0;break}}this.h=s,this.i+=t};vt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function Z(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=e[s]|0;i&&r==t||(n[s]=r,i=!1)}this.g=n}var mw={};function Ga(e){return-128<=e&&128>e?b0(e,function(t){return new Z([t|0],0>t?-1:0)}):new Z([e|0],0>e?-1:0)}function ft(e){if(isNaN(e)||!isFinite(e))return Un;if(0>e)return Ie(ft(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Uo;return new Z(t,0)}function Vf(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ie(Vf(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ft(Math.pow(t,8)),i=Un,s=0;s<e.length;s+=8){var r=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+r),t);8>r?(r=ft(Math.pow(t,r)),i=i.R(r).add(ft(o))):(i=i.R(n),i=i.add(ft(o)))}return i}var Uo=4294967296,Un=Ga(0),$o=Ga(1),Mc=Ga(16777216);S=Z.prototype;S.ea=function(){if(We(this))return-Ie(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Uo+i)*t,t*=Uo}return e};S.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(bt(this))return"0";if(We(this))return"-"+Ie(this).toString(e);for(var t=ft(Math.pow(e,6)),n=this,i="";;){var s=Xs(n,t).g;n=Js(n,s.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,bt(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};S.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function bt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function We(e){return e.h==-1}S.X=function(e){return e=Js(this,e),We(e)?-1:bt(e)?0:1};function Ie(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new Z(n,~e.h).add($o)}S.abs=function(){return We(this)?Ie(this):this};S.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(this.D(s)&65535)+(e.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Z(n,n[n.length-1]&-2147483648?-1:0)};function Js(e,t){return e.add(Ie(t))}S.R=function(e){if(bt(this)||bt(e))return Un;if(We(this))return We(e)?Ie(this).R(Ie(e)):Ie(Ie(this).R(e));if(We(e))return Ie(this.R(Ie(e)));if(0>this.X(Mc)&&0>e.X(Mc))return ft(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*i+2*s]+=o*l,Es(n,2*i+2*s),n[2*i+2*s+1]+=r*l,Es(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,Es(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,Es(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new Z(n,0)};function Es(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function di(e,t){this.g=e,this.h=t}function Xs(e,t){if(bt(t))throw Error("division by zero");if(bt(e))return new di(Un,Un);if(We(e))return t=Xs(Ie(e),t),new di(Ie(t.g),Ie(t.h));if(We(t))return t=Xs(e,Ie(t)),new di(Ie(t.g),t.h);if(30<e.g.length){if(We(e)||We(t))throw Error("slowDivide_ only works with positive integers.");for(var n=$o,i=t;0>=i.X(e);)n=xc(n),i=xc(i);var s=Tn(n,1),r=Tn(i,1);for(i=Tn(i,2),n=Tn(n,2);!bt(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=Tn(i,1),n=Tn(n,1)}return t=Js(e,s.R(t)),new di(s,t)}for(s=Un;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=ft(n),o=r.R(t);We(o)||0<o.X(e);)n-=i,r=ft(n),o=r.R(t);bt(r)&&(r=$o),s=s.add(r),e=Js(e,o)}return new di(s,e)}S.gb=function(e){return Xs(this,e).h};S.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new Z(n,this.h&e.h)};S.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new Z(n,this.h|e.h)};S.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new Z(n,this.h^e.h)};function xc(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new Z(n,e.h)}function Tn(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new Z(s,e.h)}qe.prototype.send=qe.prototype.u;qe.prototype.open=qe.prototype.m;qe.prototype.close=qe.prototype.close;$a.NO_ERROR=0;$a.TIMEOUT=8;$a.HTTP_ERROR=6;W0.COMPLETE="complete";q0.EventType=ss;ss.OPEN="a";ss.CLOSE="b";ss.ERROR="c";ss.MESSAGE="d";we.prototype.listen=we.prototype.O;ce.prototype.listenOnce=ce.prototype.P;ce.prototype.getLastError=ce.prototype.Sa;ce.prototype.getLastErrorCode=ce.prototype.Ia;ce.prototype.getStatus=ce.prototype.da;ce.prototype.getResponseJson=ce.prototype.Wa;ce.prototype.getResponseText=ce.prototype.ja;ce.prototype.send=ce.prototype.ha;ce.prototype.setWithCredentials=ce.prototype.Oa;vt.prototype.digest=vt.prototype.l;vt.prototype.reset=vt.prototype.reset;vt.prototype.update=vt.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=ft;Z.fromString=Vf;var vw=Z;const Uc="@firebase/firestore";/**
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
 */class Ce{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
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
 */let cs="9.23.0";/**
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
 */const zn=new da("@firebase/firestore");function He(e,...t){if(zn.logLevel<=X.DEBUG){const n=t.map(Ja);zn.debug(`Firestore (${cs}): ${e}`,...n)}}function Ya(e,...t){if(zn.logLevel<=X.ERROR){const n=t.map(Ja);zn.error(`Firestore (${cs}): ${e}`,...n)}}function yw(e,...t){if(zn.logLevel<=X.WARN){const n=t.map(Ja);zn.warn(`Firestore (${cs}): ${e}`,...n)}}function Ja(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Xa(e="Unexpected state"){const t=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+e;throw Ya(t),new Error(t)}function Fo(e,t){e||Xa()}/**
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
 */const ke={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pe extends kt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $n{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */let Wf=class{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}};class _w{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ce.UNAUTHENTICATED))}shutdown(){}}class ww{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}let Ew=class{constructor(t){this.t=t,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new $n,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{He("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(He("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new $n)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(He("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fo(typeof i.accessToken=="string"),new Wf(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Fo(t===null||typeof t=="string"),new Ce(t)}};class Iw{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class bw{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new Iw(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}let Tw=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Aw=class{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const i=r=>{r.error!=null&&He("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,He("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{He("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):He("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Fo(typeof n.token=="string"),this.T=n.token,new Tw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Sw{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Cw(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function qf(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Rw{constructor(t,n,i,s,r,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Qs{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Qs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Qs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var $c,K;(K=$c||($c={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new vw([4294967295,4294967295],0);function ro(){return typeof document<"u"?document:null}/**
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
 */class kw{constructor(t,n,i=1e3,s=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&He("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Qa{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,a=new Qa(t,n,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Pe(ke.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pw(e,t){if(Ya("AsyncQueue",`${t}: ${e}`),qf(e))return new Pe(ke.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Ow{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Ce.UNAUTHENTICATED,this.clientId=Sw.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{He("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(He("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Pe(ke.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Pw(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}/**
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
 */function Kf(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new Map;function Nw(e,t,n,i){if(t===!0&&i===!0)throw new Pe(ke.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Dw(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Xa()}function Lw(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Pe(ke.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dw(e);throw new Pe(ke.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Pe(ke.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Pe(ke.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Nw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kf((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Pe(ke.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Pe(ke.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Pe(ke.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=t.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,i}}class zf{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Pe(ke.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Pe(ke.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jc(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _w;switch(n.type){case"firstParty":return new bw(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Pe(ke.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Fc.get(t);n&&(He("ComponentProvider","Removing Datastore"),Fc.delete(t),n.terminate())}(this),Promise.resolve()}}function Mw(e,t,n,i={}){var s;const r=(e=Lw(e,zf))._getSettings(),o=`${t}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&yw("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=Ce.MOCK_USER;else{a=Bm(i.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new Pe(ke.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ce(c)}e._authCredentials=new ww(new Wf(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new kw(this,"async_queue_retry"),this.Xc=()=>{const n=ro();n&&He("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=ro();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=ro();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new $n;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!qf(t))throw t;He("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ya("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(t,n,i){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const s=Qa.createAndSchedule(this,t,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&Xa()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class Uw extends zf{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new xw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fw(this),this._firestoreClient.terminate()}}function $w(e,t){const n=typeof e=="object"?e:ah(),i=typeof e=="string"?e:t||"(default)",s=ga(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Fm("firestore");r&&Mw(s,...r)}return s}function Fw(e){var t,n,i;const s=e._freezeSettings(),r=function(o,a,l,c){return new Rw(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Kf(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Ow(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){cs=n})(ei),qn(new dn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Uw(new Ew(n.getProvider("auth-internal")),new Aw(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Pe(ke.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qs(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:t},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),zt(Uc,"3.13.0",e),zt(Uc,"3.13.0","esm2017")})();const jw={apiKey:"AIzaSyDSFUoWNmdlw4OyCK89i5DCX1MvSkZyo6E",authDomain:"blood-bank-vue.firebaseapp.com",projectId:"blood-bank-vue",storageBucket:"blood-bank-vue.appspot.com",messagingSenderId:"1005473572226",appId:"1:1005473572226:web:2c6519c0684db8307e1b9b"};oh(jw);$w();const Fn=d0();const yn=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},Bw={emits:["loggedIn"],data(){return{username:"",email:"",password:""}},methods:{signUp(){Yy(Fn,this.email,this.password).then(()=>{Qy(Fn.currentUser,{displayName:this.username}).then(()=>{this.$emit("loggedIn")})}).catch(e=>{console.log(e.message)})}}},Hw=m("h2",null,null,-1),Vw=m("button",{class:"signupbut"},"Sign Up",-1);function Ww(e,t,n,i,s,r){return re(),de("form",{onSubmit:t[3]||(t[3]=Fu((...o)=>r.signUp&&r.signUp(...o),["prevent"])),class:"signup"},[Hw,Ln(m("input",{type:"text",class:"input",placeholder:"Username",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>s.username=o)},null,512),[[bi,s.username]]),Ln(m("input",{type:"email",class:"input",placeholder:"Email",required:"","onUpdate:modelValue":t[1]||(t[1]=o=>s.email=o)},null,512),[[bi,s.email]]),Ln(m("input",{type:"password",class:"input",placeholder:"Password",required:"","onUpdate:modelValue":t[2]||(t[2]=o=>s.password=o)},null,512),[[bi,s.password]]),Vw],32)}const Gf=yn(Bw,[["render",Ww]]);const qw={data(){return{email:"",password:""}},methods:{login(){Jy(Fn,this.email,this.password).then(()=>{this.$emit("loggedIn")}).catch(e=>{console.error("Login error:",e)})}}},Kw=m("br",null,null,-1),zw=m("br",null,null,-1),Gw=m("button",{class:"loginbut"},"Log in",-1);function Yw(e,t,n,i,s,r){return re(),de("form",{onSubmit:t[2]||(t[2]=Fu((...o)=>r.login&&r.login(...o),["prevent"])),class:"login"},[Ln(m("input",{type:"email",class:"input",placeholder:"What's your email?",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>s.email=o)},null,512),[[bi,s.email]]),Kw,Ln(m("input",{type:"password",class:"input",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=o=>s.password=o)},null,512),[[bi,s.password]]),zw,Gw],32)}const Yf=yn(qw,[["render",Yw]]);const Jw="/vitevue-project/assets/edu-bloodtype-f9f6fcd8.jpg",Xw="/vitevue-project/assets/edu-eligibility-56e0be29.jpg",Qw="/vitevue-project/assets/edu-perks-72313c18.jpg";const Zw={setup(){const e=Om();function t(){e.push("/bloodtype")}function n(){e.push("/eligibility")}function i(){e.push("/perks")}function s(){e.push("/faq")}return{goToBloodType:t,goToEligibility:n,goToPerks:i,goToFAQ:s}},data(){return{imagePaths:{bloodType:Jw,eligibility:Xw,perks:Qw}}}},eE={class:"education"},tE=m("h2",null,"WHY BLOOD?",-1),nE={class:"edu-div"},iE=["src"],sE={class:"edu-div-content"},rE=m("p",null,[m("b",null,"WHAT BLOOD TYPES MATCH?"),m("br"),ut(" There are four main blood types: A, B, AB and O. Combinations of proteins and sugars, called antigens, on the surface of red blood cells are what makes the blood type either compatible or incompatible with other blood types.")],-1),oE={class:"edu-div"},aE=["src"],lE={class:"edu-div-content"},cE=m("p",null,[m("b",null,"AM I ELIGIBLE TO DONATE?"),m("br"),ut(" Curious about your eligibility to donate blood? Find out if you meet the criteria to make a life-saving contribution.")],-1),uE={class:"edu-div"},hE=["src"],fE={class:"edu-div-content"},dE=m("p",null,[m("b",null,"MALAYSIAN BLOOD DONOR PRIVILEGES"),m("br"),ut(" Donating blood just once can save up to 3 lives but did you know regular blood donors get special medical privileges in Malaysia? Click 'Learn More' to explore the health benefits and medical privileges given to blood donors in Malaysia.")],-1),pE={class:"edu-div"},gE={class:"edu-div-content"},mE=m("p",null,[m("b",null,"FREQUENTLY ASKED QUESTIONS"),m("br"),ut(" Answers to our most frequently asked questions are just one click away.")],-1);function vE(e,t,n,i,s,r){return re(),de("div",eE,[tE,m("div",nE,[m("img",{src:s.imagePaths.bloodType,alt:"Blood Type Image"},null,8,iE),m("div",sE,[rE,m("div",null,[m("button",{onClick:t[0]||(t[0]=(...o)=>i.goToBloodType&&i.goToBloodType(...o))},"Learn More")])])]),m("div",oE,[m("img",{src:s.imagePaths.eligibility,alt:"Blood Donation Image"},null,8,aE),m("div",lE,[cE,m("div",null,[m("button",{onClick:t[1]||(t[1]=(...o)=>i.goToEligibility&&i.goToEligibility(...o))},"Learn More")])])]),m("div",uE,[m("img",{src:s.imagePaths.perks,alt:"Body Checkup Image"},null,8,hE),m("div",fE,[dE,m("div",null,[m("button",{onClick:t[2]||(t[2]=(...o)=>i.goToPerks&&i.goToPerks(...o))},"Learn More")])])]),m("div",pE,[m("div",gE,[mE,m("div",null,[m("button",{onClick:t[3]||(t[3]=(...o)=>i.goToFAQ&&i.goToFAQ(...o))},"Go to FAQ")])])])])}const yE=yn(Zw,[["render",vE]]);let Lr=Symbol("map"),Mr=Symbol("api"),_E=Symbol("marker"),wE=Symbol("markerCluster"),Zs=Symbol("CustomMarker"),Jf=Symbol("mapTilesLoaded"),Xf="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var EE=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var i;if(Array.isArray(t)){var s=t.length;if(s!=n.length)return!1;for(i=s;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();var r=Object.keys(t);if(s=r.length,s!==Object.keys(n).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,r[i]))return!1;for(i=s;i--!==0;)if(s=r[i],!e(t[s],n[s]))return!1;return!0}return t!==t&&n!==n};class sn{constructor({apiKey:t,channel:n,client:i,id:s="__googleMapsScriptId",libraries:r=[],language:o,region:a,version:l,mapIds:c,nonce:u,retries:f=3,url:p="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=l,this.apiKey=t,this.channel=n,this.client=i,this.id=s||"__googleMapsScriptId",this.libraries=r,this.language=o,this.region=a,this.mapIds=c,this.nonce=u,this.retries=f,this.url=p,sn.instance){if(!EE(this.options,sn.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(sn.instance.options)}`);return sn.instance}sn.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let t=this.url;return t+=`?callback=${this.CALLBACK}`,this.apiKey&&(t+=`&key=${this.apiKey}`),this.channel&&(t+=`&channel=${this.channel}`),this.client&&(t+=`&client=${this.client}`),0<this.libraries.length&&(t+=`&libraries=${this.libraries.join(",")}`),this.language&&(t+=`&language=${this.language}`),this.region&&(t+=`&region=${this.region}`),this.version&&(t+=`&v=${this.version}`),this.mapIds&&(t+=`&map_ids=${this.mapIds.join(",")}`),t}deleteScript(){let t=document.getElementById(this.id);t&&t.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((t,n)=>{this.loadCallback(i=>{i?n(i.error):t(window.google)})})}loadCallback(t){this.callbacks.push(t),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var t=this.createUrl(),n=document.createElement("script");n.id=this.id,n.type="text/javascript",n.src=t,n.onerror=this.loadErrorCallback.bind(this),n.defer=!0,n.async=!0,this.nonce&&(n.nonce=this.nonce),document.head.appendChild(n)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(t){this.errors.push(t),this.errors.length<=this.retries?(t=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)):(this.onerrorEvent=t,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(t=>{t(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}function IE(e){return class extends e.OverlayView{constructor(t){super();let{element:n,...i}=t;this.element=n,this.opts=i,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof e.LatLng?this.opts.position:new e.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;let t=this.element;return t.style.display!=="none"&&t.style.visibility!=="hidden"&&(t.style.opacity===""||.01<Number(t.style.opacity))}onAdd(){if(this.element){var t=this.getPanes();t&&t.overlayMouseTarget.appendChild(this.element)}}draw(){if(this.element){var t=this.getProjection().fromLatLngToDivPixel(this.getPosition());if(t){this.element.style.position="absolute";let i=this.element.offsetHeight;var n=this.element.offsetWidth;switch(this.opts.anchorPoint){case"TOP_CENTER":n=t.x-n/2,t=t.y;break;case"BOTTOM_CENTER":n=t.x-n/2,t=t.y-i;break;case"LEFT_CENTER":n=t.x,t=t.y-i/2;break;case"RIGHT_CENTER":n=t.x-n,t=t.y-i/2;break;case"TOP_LEFT":n=t.x,t=t.y;break;case"TOP_RIGHT":n=t.x-n,t=t.y;break;case"BOTTOM_LEFT":n=t.x,t=t.y-i;break;case"BOTTOM_RIGHT":n=t.x-n,t=t.y-i;break;default:n=t.x-n/2,t=t.y-i/2}this.element.style.left=n+"px",this.element.style.top=t+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}}onRemove(){this.element&&this.element.remove()}setOptions(t){this.opts=t,this.draw()}}}let Bc,Hc="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var Qf=Qn({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:Hc,setup(e,{emit:t}){let n=ae(),i=ae(!1),s=ae(),r=ae(),o=ae(!1);cn(Lr,s),cn(Mr,r),cn(Jf,o);let a=()=>{const u={...e};Object.keys(u).forEach(p=>{u[p]===void 0&&delete u[p]});var f=p=>{var v;return p?{position:(v=r.value)===null||v===void 0?void 0:v.ControlPosition[p]}:{}};return f={scaleControlOptions:e.scaleControlStyle?{style:e.scaleControlStyle}:{},panControlOptions:f(e.panControlPosition),zoomControlOptions:f(e.zoomControlPosition),rotateControlOptions:f(e.rotateControlPosition),streetViewControlOptions:f(e.streetViewControlPosition),fullscreenControlOptions:f(e.fullscreenControlPosition),disableDefaultUI:e.disableDefaultUi},{...u,...f}},l=Ze([r,s],([u,f])=>{u&&f&&(u.event.addListenerOnce(f,"tilesloaded",()=>{o.value=!0}),setTimeout(l,0))},{immediate:!0}),c=u=>{r.value=Vt(u.maps),s.value=Vt(new u.maps.Map(n.value,a())),u=IE(r.value),r.value[Zs]=u,Hc.forEach(f=>{var p;(p=s.value)===null||p===void 0||p.addListener(f,v=>t(f,v))}),i.value=!0,u=Object.keys(e).filter(f=>!"apiPromise apiKey version libraries region language center zoom".split(" ").includes(f)).map(f=>Xd(e,f)),Ze([()=>e.center,()=>e.zoom,...u],([f,p],[v,T])=>{var R,L,O;const{center:x,zoom:W,...M}=a();(R=s.value)===null||R===void 0||R.setOptions(M),p!==void 0&&p!==T&&((L=s.value)===null||L===void 0||L.setZoom(p)),p=!v||f.lng!==v.lng||f.lat!==v.lat,f&&p&&((O=s.value)===null||O===void 0||O.panTo(f))})};return cr(()=>{if(e.apiPromise&&e.apiPromise instanceof Promise)e.apiPromise.then(c);else{try{const{apiKey:u,region:f,version:p,language:v,libraries:T}=e;Bc=new sn({apiKey:u,region:f,version:p,language:v,libraries:T})}catch(u){console.error(u)}Bc.load().then(c)}}),Gi(()=>{var u;o.value=!1,s.value&&((u=r.value)===null||u===void 0||u.event.clearInstanceListeners(s.value))}),{mapRef:n,ready:i,map:s,api:r,mapTilesLoaded:o}}});function Za(e,t){if(t===void 0&&(t={}),t=t.insertAt,e&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}Za(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let bE=sa();na("data-v-177d06e3");let TE={ref:"mapRef",class:"mapdiv"};ia();let AE=bE(e=>(re(),Zn("div",null,[le("div",TE,null,512),ur(e.$slots,"default",{ready:e.ready,map:e.map,api:e.api,mapTilesLoaded:e.mapTilesLoaded},void 0,!0)])));Qf.render=AE;Qf.__scopeId="data-v-177d06e3";var Zf=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var i;if(Array.isArray(t)){var s=t.length;if(s!=n.length)return!1;for(i=s;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();var r=Object.keys(t);if(s=r.length,s!==Object.keys(n).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,r[i]))return!1;for(i=s;i--!==0;)if(s=r[i],!e(t[s],n[s]))return!1;return!0}return t!==t&&n!==n};let CE=(e,t,n,i)=>{const s=ae(),r=pe(Lr,ae()),o=pe(Mr,ae()),a=pe(wE,ae()),l=Re(()=>!!(a.value&&o.value&&(s.value instanceof o.value.Marker||s.value instanceof o.value[Zs])));return Ze([r,n],(c,[u,f])=>{var p,v,T;c=!Zf(n.value,f)||r.value!==u,r.value&&o.value&&c&&(s.value?(s.value.setOptions(n.value),l.value&&((p=a.value)===null||p===void 0||p.removeMarker(s.value),(v=a.value)===null||v===void 0||v.addMarker(s.value))):(s.value=Vt(e==="Marker"?new o.value[e](n.value):e===Zs?new o.value[e](n.value):new o.value[e]({...n.value,map:r.value})),l.value?(T=a.value)===null||T===void 0||T.addMarker(s.value):s.value.setMap(r.value),t.forEach(R=>{var L;(L=s.value)===null||L===void 0||L.addListener(R,O=>i(R,O))})))},{immediate:!0}),Gi(()=>{var c,u;s.value&&((c=o.value)===null||c===void 0||c.event.clearInstanceListeners(s.value),l.value?(u=a.value)===null||u===void 0||u.removeMarker(s.value):s.value.setMap(null))}),s};Xf.concat(["bounds_changed"]);Xf.concat(["center_changed","radius_changed"]);var SE=Qn({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(e,{emit:t}){let n=ae(null),i=pe(Lr,ae()),s=pe(Mr,ae()),r=pe(Jf,ae(!1)),o=ae(!1),a=Ze([r,s,n],([u,f,p])=>{f&&u&&p&&(l(e.position),o.value=!0,t("content:loaded"),setTimeout(a,0))},{immediate:!0}),l=u=>{i.value&&s.value&&n.value&&i.value.controls[s.value.ControlPosition[u]].push(n.value)},c=u=>{if(i.value&&s.value){let f=null;u=s.value.ControlPosition[u],i.value.controls[u].forEach((p,v)=>{p===n.value&&(f=v)}),f!==null&&i.value.controls[u].removeAt(f)}};return Gi(()=>c(e.position)),Ze(()=>e.position,(u,f)=>{c(f),l(u)}),Ze(()=>e.index,u=>{u&&n.value&&(n.value.index=e.index)}),{controlRef:n,showContent:o}}});let RE={ref:"controlRef"};SE.render=function(e){return re(),Zn(ve,null,[dr(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),Ln(le("div",RE,[ur(e.$slots,"default")],512),[[Tg,e.showContent]])],2112)};let Vc="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var ed=Qn({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})}},emits:Vc,setup(e,{slots:t,emit:n}){let i=ae(),s=ae(),r=pe(Lr,ae()),o=pe(Mr,ae()),a=pe(_E,ae()),l,c=Re(()=>{var u;return(u=t.default)===null||u===void 0?void 0:u.call(t).some(f=>f.type!==mt)});return cr(()=>{Ze([r,()=>e.options],([,u],[f,p])=>{f=!Zf(u,p)||r.value!==f,r.value&&o.value&&f&&(i.value?(i.value.setOptions({...u,content:c.value?s.value:u.content}),a.value||i.value.open({map:r.value})):(i.value=Vt(new o.value.InfoWindow({...u,content:c.value?s.value:u.content})),a.value?l=a.value.addListener("click",()=>{i.value&&i.value.open({map:r.value,anchor:a.value})}):i.value.open({map:r.value}),Vc.forEach(v=>{var T;(T=i.value)===null||T===void 0||T.addListener(v,R=>n(v,R))})))},{immediate:!0})}),Gi(()=>{var u;l&&l.remove(),i.value&&((u=o.value)===null||u===void 0||u.event.clearInstanceListeners(i.value),i.value.close())}),{infoWindow:i,infoWindowRef:s,hasSlotContent:c}}});Za(`
.info-window-wrapper[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-wrapper[data-v-5b373d6e] {
  display: inline-block;
}
`);let kE=sa();na("data-v-5b373d6e");let PE={key:0,class:"info-window-wrapper"};ia();let OE=kE(e=>e.hasSlotContent?(re(),Zn("div",PE,[le("div",ca({ref:"infoWindowRef"},e.$attrs),[ur(e.$slots,"default",{},void 0,!0)],16)])):dr("v-if",!0));ed.render=OE;ed.__scopeId="data-v-5b373d6e";var jo,el=jo||(jo={});el.CLUSTERING_BEGIN="clusteringbegin";el.CLUSTERING_END="clusteringend";el.CLUSTER_CLICK="click";Object.values(jo);var td=Qn({inheritAttrs:!1,props:{options:{type:Object,required:!0}},setup(e,{slots:t,emit:n}){let i=ae(),s=ae(),r=Re(()=>{var a;return(a=t.default)===null||a===void 0?void 0:a.call(t).some(l=>l.type!==mt)}),o=Re(()=>({...e.options,element:i.value}));return cr(()=>{s=CE(Zs,[],o,n)}),{customMarkerRef:i,customMarker:s,hasSlotContent:r}}});Za(`
.custom-marker-wrapper[data-v-b9d5ec8a] {
  display: none;
}
.mapdiv .custom-marker-wrapper[data-v-b9d5ec8a] {
  display: inline-block;
}
`);let NE=sa();na("data-v-b9d5ec8a");let DE={key:0,class:"custom-marker-wrapper"};ia();let LE=NE(e=>e.hasSlotContent?(re(),Zn("div",DE,[le("div",ca({ref:"customMarkerRef",style:{cursor:e.$attrs.onClick?"pointer":void 0}},e.$attrs),[ur(e.$slots,"default",{},void 0,!0)],16)])):dr("v-if",!0));td.render=LE;td.__scopeId="data-v-b9d5ec8a";const ME={id:"app"},xE={key:0},UE={style:{"text-align":"center"}},$E={style:{"text-align":"center"}},FE={key:1},jE={name:"App",components:{SignupForm:Gf,LoginForm:Yf,"router-link":Xu},data(){return{isLoggedIn:!1,showLogin:!0,displayName:""}},beforeUpdate(){Fn.currentUser&&(this.displayName=Fn.currentUser.displayName)},methods:{logOut(){t_(Fn).then(()=>{this.isLoggedIn=!1})}}},BE=Object.assign(jE,{setup(e){return(t,n)=>{const i=Tp("router-view");return re(),de(ve,null,[m("div",ME,[le(i)]),t.isLoggedIn?(re(),de("div",FE,[m("h2",null,"Welcome "+Tt(t.displayName),1),le(yE),m("button",{onClick:n[4]||(n[4]=(...s)=>t.logOut&&t.logOut(...s))},"Sign Out")])):(re(),de("div",xE,[t.showLogin?(re(),de(ve,{key:0},[le(Yf,{onLoggedIn:n[0]||(n[0]=s=>t.isLoggedIn=!0),class:"login"}),m("p",UE,[ut("No account yet? "),m("span",{onClick:n[1]||(n[1]=s=>t.showLogin=!1),style:{"font-weight":"bold","text-decoration":"underline"}},"Sign Up"),ut(" instead.")])],64)):(re(),de(ve,{key:1},[le(Gf,{onLoggedIn:n[2]||(n[2]=s=>t.isLoggedIn=!0),class:"signup"}),m("p",$E,[ut("Already registered? "),m("span",{onClick:n[3]||(n[3]=s=>t.showLogin=!0),style:{"font-weight":"bold","text-decoration":"underline"}},"Login"),ut(" instead.")])],64))]))],64)}}}),HE="/vitevue-project/assets/faq-icon-bd5e6b45.png";const VE={data(){return{items:[{id:1,title:"1. What should I do if I need to claim my privilege as a blood donor?",content:"Kindly proceed to the nearest blood bank for verification in order to claim your privilege.",showContent:!1},{id:2,title:"2. Why should I donate blood?",content:"Every day blood is needed to save lives. Blood may be needed for surgery, accident victims or to treat patients with leukemia, cancer, heart disease, liver disease and hemophilia. Your contribution could save a life.",showContent:!1},{id:3,title:"3. Am I eligible to donate blood?",content:"Yes, if you are over 17 years old (age verification required) and weight more than 45kg. In general, taking medication is not an obstacle to donating blood because acceptance and rejection are based on medical reports. If you are taking any medication, please inform before donating blood.",showContent:!1},{id:4,title:"4. Am I healthy enough to donate blood?",content:"You must be healthy enough to donate blood. Your health and safety is very important to us. You will be asked to fill up a blood donation questionnaire where your medical history will be asked. Blood pressure and a drop of blood will be taken for a hemoglobin test. All information provided by you is confidential.",showContent:!1},{id:5,title:"5. How long does it take to donate blood?",content:"The process of donating blood will take between 7-10 minutes, but you are advised to be at the blood collection site for approximately one hour.",showContent:!1},{id:6,title:"6. Does the needle hurt?",content:"You only feel a little pain when the needle is inserted and nothing after.",showContent:!1},{id:7,title:"7. How much blood will be taken?",content:"A total of 450ml, which is less than 1 pint (586ml). Adults usually have about 5 liters (10-12 pints) of blood in the body.",showContent:!1},{id:8,title:"8. How does it feel after donating blood?",content:"Most people feel comfortable after donating blood. You are advised to have a light meal before donating blood.",showContent:!1},{id:9,title:"9. Can I do sports after donating blood?",content:"Yes. Just avoid doing heavy activities for 5 hours after donating blood. Drink plenty of water within 24 hours.",showContent:!1},{id:10,title:"10. How long does it take to replace the donated blood?",content:"Plasma is replaced within 24 hours. You need to drink 4 glasses of water without alcohol and do not do heavy work with your hands for a period of 5 hours. Red blood takes 4-8 weeks to be replaced and you can donate again after that.",showContent:!1},{id:11,title:"11. What will be done to the donated blood?",content:"Your blood will be tested to determine blood group, viral infwhich is used in 22 blood collection centers nationwideections such as syphilis, hepatitis (B & C) and AIDS (HIV). Then, stored for patient use. Blood can also be separated into several blood components and can be used to treat more than one patient.",showContent:!1}],imagePaths:{faqicon:HE}}},methods:{toggleContent(e){this.items.forEach(t=>{t.id===e?t.showContent=!t.showContent:t.showContent=!1})}}},WE={class:"faq"},qE=["src"],KE=m("br",null,null,-1),zE=m("b",null,"Frequently Asked Questions",-1),GE=["onClick"],YE={class:"toggleIcon"},JE={key:0,class:"content-edu"};function XE(e,t,n,i,s,r){return re(),de("div",WE,[m("img",{src:s.imagePaths.faqicon,alt:"FAQ Icon"},null,8,qE),KE,zE,m("div",null,[(re(!0),de(ve,null,ra(s.items,o=>(re(),de("div",{key:o.id,class:"faqborder"},[m("div",{class:Yn(["title",{open:o.showContent}]),onClick:a=>r.toggleContent(o.id)},[ut(Tt(o.title)+" ",1),m("span",YE,Tt(o.showContent?"-":"+"),1)],10,GE),o.showContent?(re(),de("div",JE,Tt(o.content),1)):dr("",!0)]))),128))])])}const QE=yn(VE,[["render",XE]]),ZE="/vitevue-project/assets/bt-icon-bc98eb4f.png";const eI={data(){return{tableData:[{column1:"A+",column2:"A+, AB+",column3:"A+, A-, O+, O-"},{column1:"O+",column2:"O+, A+, B+, AB+",column3:"O+, O-"},{column1:"B+",column2:"B+, AB+",column3:"B+, B-, O+, O-"},{column1:"AB+",column2:"AB+",column3:"ALL BLOOD TYPES"},{column1:"A-",column2:"A+, A-, AB+, AB-",column3:"A-, O-"},{column1:"O-",column2:"ALL BLOOD TYPES",column3:"O-"},{column1:"B-",column2:"B+, B-, AB+, AB-",column3:"B-, O-"},{column1:"AB-",column2:"AB+, AB-",column3:"AB-, A-, B-, O-"}],imagePaths:{bticon:ZE}}}},tI={class:"bloodtype-table"},nI=["src"],iI=m("br",null,null,-1),sI=m("b",null,"Matching Blood Types",-1),rI=m("p",null,"A blood type is a classification of blood based on the presence or absence of antigens on the surface of red blood cells. Human blood is divided into one of four main blood types: A, B, AB, and O, and is further divided into Rh+ or Rh-.",-1),oI=m("thead",null,[m("tr",null,[m("th",{class:"left-column"},"Type"),m("th",null,"You can give blood to"),m("th",{class:"right-column"},"You can receive blood from")])],-1),aI={class:"left-column"},lI={class:"right-column"};function cI(e,t,n,i,s,r){return re(),de("div",tI,[m("img",{src:s.imagePaths.bticon,alt:"Blood Type Icon"},null,8,nI),iI,sI,rI,m("table",null,[oI,m("tbody",null,[(re(!0),de(ve,null,ra(s.tableData,(o,a)=>(re(),de("tr",{key:a,class:Yn({"odd-row":a%2!==0})},[m("td",aI,Tt(o.column1),1),m("td",null,Tt(o.column2),1),m("td",lI,Tt(o.column3),1)],2))),128))])])])}const uI=yn(eI,[["render",cI]]),hI="/vitevue-project/assets/eli-icon-57593af7.png",fI="/vitevue-project/assets/eli-age-13cb64b7.png",dI="/vitevue-project/assets/eli-alcohol-0406a1fc.png",pI="/vitevue-project/assets/eli-gender-d6b663ad.png",gI="/vitevue-project/assets/eli-healthy-53da1207.png",mI="/vitevue-project/assets/eli-malaysia-f0bace01.png",vI="/vitevue-project/assets/eli-sleep-6f387f38.png",yI="/vitevue-project/assets/eli-weight-ba7e910a.png",_I="/vitevue-project/assets/eli-woman-8394ab2a.png";const wI={data(){return{imagePaths:{eliicon:hI,age:fI,alcohol:dI,gender:pI,healthy:gI,malaysia:mI,sleep:vI,weight:yI,woman:_I}}}},EI={class:"eligibility"},II=["src"],bI=m("br",null,null,-1),TI=m("b",null,"Blood Donation Eligibility Requirements",-1),AI={class:"eli-table"},CI={style:{width:"50%"}},SI=["src"],RI=m("p",{class:"type"},"AGE",-1),kI=m("p",{class:"eli"},"18-60 years old",-1),PI=m("p",{class:"desp"},"*Parental consent required for 17 years old and below",-1),OI={style:{width:"50%"}},NI=["src"],DI=m("p",{class:"type"},"MEDICINE & ALCOHOL",-1),LI=m("p",{class:"eli"},"Alcohol-free",-1),MI=m("p",{class:"desp"},"Avoid consuming alcohol a day before donating",-1),xI=["src"],UI=m("p",{class:"type"},"HEALTHY",-1),$I=m("p",{class:"eli"},"Physical & mental",-1),FI=m("p",{class:"desp"},"No chronic diseases",-1),jI=["src"],BI=m("p",{class:"type"},"WEIGHT",-1),HI=m("p",{class:"eli"},"> 45kg",-1),VI=["src"],WI=m("p",{class:"type"},"SUFFICIENT SLEEP",-1),qI=m("p",{class:"eli"},"> 5 hours",-1),KI=m("p",{class:"desp"},"Donors must have at least five hours of sleep before donating",-1),zI=["src"],GI=m("p",{class:"type"},"RESIDING IN MALAYSIA",-1),YI=m("p",{class:"eli"},"> 1 year",-1),JI=m("p",{class:"desp"},"for non-Malaysians",-1),XI=["src"],QI=m("p",{class:"type"},"HIGH-RISK ACTIVITIES",-1),ZI=m("p",{class:"eli"},"Do not engage",-1),eb=m("p",{class:"desp"},"Do not use drugs or engage in sexual intercourse with many partners",-1),tb=["src"],nb=m("p",{class:"type"},"WOMEN",-1),ib=m("p",{class:"eli"},"Not pregnant or during menstrual cycle",-1),sb=m("p",{class:"desp"},"including breastfeeding",-1);function rb(e,t,n,i,s,r){return re(),de("div",EI,[m("img",{src:s.imagePaths.eliicon,alt:"Eligibility Icon"},null,8,II),bI,TI,m("table",AI,[m("tr",null,[m("td",CI,[m("img",{src:s.imagePaths.age,alt:"Age Icon"},null,8,SI),RI,kI,PI]),m("td",OI,[m("img",{src:s.imagePaths.alcohol,alt:"Alcohol free Icon"},null,8,NI),DI,LI,MI])]),m("tr",null,[m("td",null,[m("img",{src:s.imagePaths.healthy,alt:"Healthy Icon"},null,8,xI),UI,$I,FI]),m("td",null,[m("img",{src:s.imagePaths.weight,alt:"Weight Icon"},null,8,jI),BI,HI])]),m("tr",null,[m("td",null,[m("img",{src:s.imagePaths.sleep,alt:"Sleep Icon"},null,8,VI),WI,qI,KI]),m("td",null,[m("img",{src:s.imagePaths.malaysia,alt:"Malaysia Icon"},null,8,zI),GI,YI,JI])]),m("tr",null,[m("td",null,[m("img",{src:s.imagePaths.gender,alt:"Gender Icon"},null,8,XI),QI,ZI,eb]),m("td",null,[m("img",{src:s.imagePaths.woman,alt:"Woman Icon"},null,8,tb),nb,ib,sb])])])])}const ob=yn(wI,[["render",rb]]),ab="/vitevue-project/assets/perks-privilege-0e47030c.png";const lb={data(){return{tableData:[{column1:"1 time",column2:"Free outpatient treatment and medical treatment (excluding X-ray and surgical charges) and second class wards for a period of * 4 months."},{column1:"2 times (within 12 months)",column2:"Free Hepatitis B preventive injection."},{column1:"2 ~ 5 times",column2:"Free outpatient treatment and medical treatment and second class wards for a period of * 4 months."},{column1:"6 ~ 10 times",column2:"Free * year outpatient treatment and second class medical treatment for a * 6 months period."},{column1:"11 ~ 15 times",column2:"Free * 2 year outpatient treatment and second class medical treatment for a * 6 month period."},{column1:"16 ~ 20 times",column2:"Free outpatient treatment and medical treatment and second class wards for a * 2 year period."},{column1:"21 ~ 30 times",column2:"Free outpatient treatment and medical treatment and second class wards for a period of * 3 years."},{column1:"31 ~ 40 times",column2:"Free outpatient treatment and medical treatment and first class wards for a period of * 4 years."},{column1:"41 ~ 50 times",column2:"Free outpatient treatment and medical treatment and first class wards for a period of * 6 years."},{column1:'Over 50 times (for "Whole Blood") and Over 150 times (for aferesis donors)',column2:"Free outpatient treatment and first-class medical treatment and wards for 10 years and second-class wards of life after 10 years in first-class ward."}],imagePaths:{privileges:ab}}}},cb={class:"perks"},ub=["src"],hb=m("br",null,null,-1),fb=m("b",null,"Malaysian Blood Donor Privileges",-1),db=m("p",null,"There are many health benefits to donating blood and those who donate blood in Malaysia can benefit from many medical perks offered by the Ministry of Health:",-1),pb={class:"perks-table"},gb=m("thead",null,[m("tr",null,[m("th",{class:"left-column"},"Donation Frequency"),m("th",{class:"right-column"},"Medical Privileges")])],-1),mb={class:"left-column"},vb={class:"right-column"};function yb(e,t,n,i,s,r){return re(),de("div",cb,[m("img",{src:s.imagePaths.privileges,alt:"Privilege Icon"},null,8,ub),hb,fb,db,m("div",pb,[m("table",null,[gb,m("tbody",null,[(re(!0),de(ve,null,ra(s.tableData,(o,a)=>(re(),de("tr",{key:a,class:Yn({"odd-row":a%2!==0})},[m("td",mb,Tt(o.column1),1),m("td",vb,Tt(o.column2),1)],2))),128))])])])])}const _b=yn(lb,[["render",yb]]),wb=km({history:Kg(),routes:[{path:"/faq",component:QE},{path:"/bloodtype",component:uI},{path:"/eligibility",component:ob},{path:"/perks",component:_b}]}),nd=Sg(BE);nd.use(wb);nd.mount("#app");
