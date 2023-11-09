(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))p(f);new MutationObserver(f=>{for(const w of f)if(w.type==="childList")for(const b of w.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&p(b)}).observe(document,{childList:!0,subtree:!0});function d(f){const w={};return f.integrity&&(w.integrity=f.integrity),f.referrerPolicy&&(w.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?w.credentials="include":f.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function p(f){if(f.ep)return;f.ep=!0;const w=d(f);fetch(f.href,w)}})();function Nl(s,a){const d=Object.create(null),p=s.split(",");for(let f=0;f<p.length;f++)d[p[f]]=!0;return a?f=>!!d[f.toLowerCase()]:f=>!!d[f]}const se={},Fr=[],qn=()=>{},TP=()=>!1,SP=/^on[^a-z]/,Ca=s=>SP.test(s),yp=s=>s.startsWith("onUpdate:"),pe=Object.assign,Ep=(s,a)=>{const d=s.indexOf(a);d>-1&&s.splice(d,1)},IP=Object.prototype.hasOwnProperty,Zt=(s,a)=>IP.call(s,a),yt=Array.isArray,Vr=s=>ss(s)==="[object Map]",er=s=>ss(s)==="[object Set]",b0=s=>ss(s)==="[object Date]",MP=s=>ss(s)==="[object RegExp]",Pt=s=>typeof s=="function",ge=s=>typeof s=="string",qr=s=>typeof s=="symbol",ae=s=>s!==null&&typeof s=="object",xp=s=>(ae(s)||Pt(s))&&Pt(s.then)&&Pt(s.catch),oy=Object.prototype.toString,ss=s=>oy.call(s),NP=s=>ss(s).slice(8,-1),iy=s=>ss(s)==="[object Object]",Dp=s=>ge(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,ta=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bl=s=>{const a=Object.create(null);return d=>a[d]||(a[d]=s(d))},BP=/-(\w)/g,tn=Bl(s=>s.replace(BP,(a,d)=>d?d.toUpperCase():"")),OP=/\B([A-Z])/g,yn=Bl(s=>s.replace(OP,"-$1").toLowerCase()),va=Bl(s=>s.charAt(0).toUpperCase()+s.slice(1)),ea=Bl(s=>s?`on${va(s)}`:""),ti=(s,a)=>!Object.is(s,a),Hr=(s,a)=>{for(let d=0;d<s.length;d++)s[d](a)},gl=(s,a,d)=>{Object.defineProperty(s,a,{configurable:!0,enumerable:!1,value:d})},fl=s=>{const a=parseFloat(s);return isNaN(a)?s:a},ml=s=>{const a=ge(s)?Number(s):NaN;return isNaN(a)?s:a};let w0;const Yh=()=>w0||(w0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),PP="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",LP=Nl(PP);function ya(s){if(yt(s)){const a={};for(let d=0;d<s.length;d++){const p=s[d],f=ge(p)?FP(p):ya(p);if(f)for(const w in f)a[w]=f[w]}return a}else if(ge(s)||ae(s))return s}const RP=/;(?![^(]*\))/g,zP=/:([^]+)/,jP=/\/\*[^]*?\*\//g;function FP(s){const a={};return s.replace(jP,"").split(RP).forEach(d=>{if(d){const p=d.split(zP);p.length>1&&(a[p[0].trim()]=p[1].trim())}}),a}function Ea(s){let a="";if(ge(s))a=s;else if(yt(s))for(let d=0;d<s.length;d++){const p=Ea(s[d]);p&&(a+=p+" ")}else if(ae(s))for(const d in s)s[d]&&(a+=d+" ");return a.trim()}function VP(s){if(!s)return null;let{class:a,style:d}=s;return a&&!ge(a)&&(s.class=Ea(a)),d&&(s.style=ya(d)),s}const HP="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",UP=Nl(HP);function ry(s){return!!s||s===""}function $P(s,a){if(s.length!==a.length)return!1;let d=!0;for(let p=0;d&&p<s.length;p++)d=ei(s[p],a[p]);return d}function ei(s,a){if(s===a)return!0;let d=b0(s),p=b0(a);if(d||p)return d&&p?s.getTime()===a.getTime():!1;if(d=qr(s),p=qr(a),d||p)return s===a;if(d=yt(s),p=yt(a),d||p)return d&&p?$P(s,a):!1;if(d=ae(s),p=ae(a),d||p){if(!d||!p)return!1;const f=Object.keys(s).length,w=Object.keys(a).length;if(f!==w)return!1;for(const b in s){const C=s.hasOwnProperty(b),m=a.hasOwnProperty(b);if(C&&!m||!C&&m||!ei(s[b],a[b]))return!1}}return String(s)===String(a)}function Ol(s,a){return s.findIndex(d=>ei(d,a))}const kl=s=>ge(s)?s:s==null?"":yt(s)||ae(s)&&(s.toString===oy||!Pt(s.toString))?JSON.stringify(s,sy,2):String(s),sy=(s,a)=>a&&a.__v_isRef?sy(s,a.value):Vr(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((d,[p,f])=>(d[`${p} =>`]=f,d),{})}:er(a)?{[`Set(${a.size})`]:[...a.values()]}:ae(a)&&!yt(a)&&!iy(a)?String(a):a;let dn;class Tp{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=dn,!a&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const d=dn;try{return dn=this,a()}finally{dn=d}}}on(){dn=this}off(){dn=this.parent}stop(a){if(this._active){let d,p;for(d=0,p=this.effects.length;d<p;d++)this.effects[d].stop();for(d=0,p=this.cleanups.length;d<p;d++)this.cleanups[d]();if(this.scopes)for(d=0,p=this.scopes.length;d<p;d++)this.scopes[d].stop(!0);if(!this.detached&&this.parent&&!a){const f=this.parent.scopes.pop();f&&f!==this&&(this.parent.scopes[this.index]=f,f.index=this.index)}this.parent=void 0,this._active=!1}}}function qP(s){return new Tp(s)}function ay(s,a=dn){a&&a.active&&a.effects.push(s)}function cy(){return dn}function WP(s){dn&&dn.cleanups.push(s)}const Sp=s=>{const a=new Set(s);return a.w=0,a.n=0,a},ly=s=>(s.w&ni)>0,dy=s=>(s.n&ni)>0,GP=({deps:s})=>{if(s.length)for(let a=0;a<s.length;a++)s[a].w|=ni},KP=s=>{const{deps:a}=s;if(a.length){let d=0;for(let p=0;p<a.length;p++){const f=a[p];ly(f)&&!dy(f)?f.delete(s):a[d++]=f,f.w&=~ni,f.n&=~ni}a.length=d}},bl=new WeakMap;let Zs=0,ni=1;const Qh=30;let Un;const $i=Symbol(""),Zh=Symbol("");class Wr{constructor(a,d=null,p){this.fn=a,this.scheduler=d,this.active=!0,this.deps=[],this.parent=void 0,ay(this,p)}run(){if(!this.active)return this.fn();let a=Un,d=Zo;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=Un,Un=this,Zo=!0,ni=1<<++Zs,Zs<=Qh?GP(this):_0(this),this.fn()}finally{Zs<=Qh&&KP(this),ni=1<<--Zs,Un=this.parent,Zo=d,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Un===this?this.deferStop=!0:this.active&&(_0(this),this.onStop&&this.onStop(),this.active=!1)}}function _0(s){const{deps:a}=s;if(a.length){for(let d=0;d<a.length;d++)a[d].delete(s);a.length=0}}function YP(s,a){s.effect instanceof Wr&&(s=s.effect.fn);const d=new Wr(s);a&&(pe(d,a),a.scope&&ay(d,a.scope)),(!a||!a.lazy)&&d.run();const p=d.run.bind(d);return p.effect=d,p}function QP(s){s.effect.stop()}let Zo=!0;const uy=[];function as(){uy.push(Zo),Zo=!1}function cs(){const s=uy.pop();Zo=s===void 0?!0:s}function en(s,a,d){if(Zo&&Un){let p=bl.get(s);p||bl.set(s,p=new Map);let f=p.get(d);f||p.set(d,f=Sp()),hy(f)}}function hy(s,a){let d=!1;Zs<=Qh?dy(s)||(s.n|=ni,d=!ly(s)):d=!s.has(Un),d&&(s.add(Un),Un.deps.push(s))}function Co(s,a,d,p,f,w){const b=bl.get(s);if(!b)return;let C=[];if(a==="clear")C=[...b.values()];else if(d==="length"&&yt(s)){const m=Number(p);b.forEach((y,x)=>{(x==="length"||!qr(x)&&x>=m)&&C.push(y)})}else switch(d!==void 0&&C.push(b.get(d)),a){case"add":yt(s)?Dp(d)&&C.push(b.get("length")):(C.push(b.get($i)),Vr(s)&&C.push(b.get(Zh)));break;case"delete":yt(s)||(C.push(b.get($i)),Vr(s)&&C.push(b.get(Zh)));break;case"set":Vr(s)&&C.push(b.get($i));break}if(C.length===1)C[0]&&Jh(C[0]);else{const m=[];for(const y of C)y&&m.push(...y);Jh(Sp(m))}}function Jh(s,a){const d=yt(s)?s:[...s];for(const p of d)p.computed&&A0(p);for(const p of d)p.computed||A0(p)}function A0(s,a){(s!==Un||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}function ZP(s,a){var d;return(d=bl.get(s))==null?void 0:d.get(a)}const JP=Nl("__proto__,__v_isRef,__isVue"),py=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(qr)),C0=XP();function XP(){const s={};return["includes","indexOf","lastIndexOf"].forEach(a=>{s[a]=function(...d){const p=$t(this);for(let w=0,b=this.length;w<b;w++)en(p,"get",w+"");const f=p[a](...d);return f===-1||f===!1?p[a](...d.map($t)):f}}),["push","pop","shift","unshift","splice"].forEach(a=>{s[a]=function(...d){as();const p=$t(this)[a].apply(this,d);return cs(),p}}),s}function t4(s){const a=$t(this);return en(a,"has",s),a.hasOwnProperty(s)}class gy{constructor(a=!1,d=!1){this._isReadonly=a,this._shallow=d}get(a,d,p){const f=this._isReadonly,w=this._shallow;if(d==="__v_isReactive")return!f;if(d==="__v_isReadonly")return f;if(d==="__v_isShallow")return w;if(d==="__v_raw"&&p===(f?w?_y:wy:w?by:ky).get(a))return a;const b=yt(a);if(!f){if(b&&Zt(C0,d))return Reflect.get(C0,d,p);if(d==="hasOwnProperty")return t4}const C=Reflect.get(a,d,p);return(qr(d)?py.has(d):JP(d))||(f||en(a,"get",d),w)?C:Se(C)?b&&Dp(d)?C:C.value:ae(C)?f?Np(C):ls(C):C}}class fy extends gy{constructor(a=!1){super(!1,a)}set(a,d,p,f){let w=a[d];if(Yi(w)&&Se(w)&&!Se(p))return!1;if(!this._shallow&&(!ua(p)&&!Yi(p)&&(w=$t(w),p=$t(p)),!yt(a)&&Se(w)&&!Se(p)))return w.value=p,!0;const b=yt(a)&&Dp(d)?Number(d)<a.length:Zt(a,d),C=Reflect.set(a,d,p,f);return a===$t(f)&&(b?ti(p,w)&&Co(a,"set",d,p):Co(a,"add",d,p)),C}deleteProperty(a,d){const p=Zt(a,d);a[d];const f=Reflect.deleteProperty(a,d);return f&&p&&Co(a,"delete",d,void 0),f}has(a,d){const p=Reflect.has(a,d);return(!qr(d)||!py.has(d))&&en(a,"has",d),p}ownKeys(a){return en(a,"iterate",yt(a)?"length":$i),Reflect.ownKeys(a)}}class my extends gy{constructor(a=!1){super(!0,a)}set(a,d){return!0}deleteProperty(a,d){return!0}}const e4=new fy,n4=new my,o4=new fy(!0),i4=new my(!0),Ip=s=>s,Pl=s=>Reflect.getPrototypeOf(s);function Uc(s,a,d=!1,p=!1){s=s.__v_raw;const f=$t(s),w=$t(a);d||(ti(a,w)&&en(f,"get",a),en(f,"get",w));const{has:b}=Pl(f),C=p?Ip:d?Pp:ha;if(b.call(f,a))return C(s.get(a));if(b.call(f,w))return C(s.get(w));s!==f&&s.get(a)}function $c(s,a=!1){const d=this.__v_raw,p=$t(d),f=$t(s);return a||(ti(s,f)&&en(p,"has",s),en(p,"has",f)),s===f?d.has(s):d.has(s)||d.has(f)}function qc(s,a=!1){return s=s.__v_raw,!a&&en($t(s),"iterate",$i),Reflect.get(s,"size",s)}function v0(s){s=$t(s);const a=$t(this);return Pl(a).has.call(a,s)||(a.add(s),Co(a,"add",s,s)),this}function y0(s,a){a=$t(a);const d=$t(this),{has:p,get:f}=Pl(d);let w=p.call(d,s);w||(s=$t(s),w=p.call(d,s));const b=f.call(d,s);return d.set(s,a),w?ti(a,b)&&Co(d,"set",s,a):Co(d,"add",s,a),this}function E0(s){const a=$t(this),{has:d,get:p}=Pl(a);let f=d.call(a,s);f||(s=$t(s),f=d.call(a,s)),p&&p.call(a,s);const w=a.delete(s);return f&&Co(a,"delete",s,void 0),w}function x0(){const s=$t(this),a=s.size!==0,d=s.clear();return a&&Co(s,"clear",void 0,void 0),d}function Wc(s,a){return function(p,f){const w=this,b=w.__v_raw,C=$t(b),m=a?Ip:s?Pp:ha;return!s&&en(C,"iterate",$i),b.forEach((y,x)=>p.call(f,m(y),m(x),w))}}function Gc(s,a,d){return function(...p){const f=this.__v_raw,w=$t(f),b=Vr(w),C=s==="entries"||s===Symbol.iterator&&b,m=s==="keys"&&b,y=f[s](...p),x=d?Ip:a?Pp:ha;return!a&&en(w,"iterate",m?Zh:$i),{next(){const{value:v,done:A}=y.next();return A?{value:v,done:A}:{value:C?[x(v[0]),x(v[1])]:x(v),done:A}},[Symbol.iterator](){return this}}}}function Fo(s){return function(...a){return s==="delete"?!1:this}}function r4(){const s={get(w){return Uc(this,w)},get size(){return qc(this)},has:$c,add:v0,set:y0,delete:E0,clear:x0,forEach:Wc(!1,!1)},a={get(w){return Uc(this,w,!1,!0)},get size(){return qc(this)},has:$c,add:v0,set:y0,delete:E0,clear:x0,forEach:Wc(!1,!0)},d={get(w){return Uc(this,w,!0)},get size(){return qc(this,!0)},has(w){return $c.call(this,w,!0)},add:Fo("add"),set:Fo("set"),delete:Fo("delete"),clear:Fo("clear"),forEach:Wc(!0,!1)},p={get(w){return Uc(this,w,!0,!0)},get size(){return qc(this,!0)},has(w){return $c.call(this,w,!0)},add:Fo("add"),set:Fo("set"),delete:Fo("delete"),clear:Fo("clear"),forEach:Wc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(w=>{s[w]=Gc(w,!1,!1),d[w]=Gc(w,!0,!1),a[w]=Gc(w,!1,!0),p[w]=Gc(w,!0,!0)}),[s,d,a,p]}const[s4,a4,c4,l4]=r4();function Ll(s,a){const d=a?s?l4:c4:s?a4:s4;return(p,f,w)=>f==="__v_isReactive"?!s:f==="__v_isReadonly"?s:f==="__v_raw"?p:Reflect.get(Zt(d,f)&&f in p?d:p,f,w)}const d4={get:Ll(!1,!1)},u4={get:Ll(!1,!0)},h4={get:Ll(!0,!1)},p4={get:Ll(!0,!0)},ky=new WeakMap,by=new WeakMap,wy=new WeakMap,_y=new WeakMap;function g4(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function f4(s){return s.__v_skip||!Object.isExtensible(s)?0:g4(NP(s))}function ls(s){return Yi(s)?s:Rl(s,!1,e4,d4,ky)}function Mp(s){return Rl(s,!1,o4,u4,by)}function Np(s){return Rl(s,!0,n4,h4,wy)}function m4(s){return Rl(s,!0,i4,p4,_y)}function Rl(s,a,d,p,f){if(!ae(s)||s.__v_raw&&!(a&&s.__v_isReactive))return s;const w=f.get(s);if(w)return w;const b=f4(s);if(b===0)return s;const C=new Proxy(s,b===2?p:d);return f.set(s,C),C}function qi(s){return Yi(s)?qi(s.__v_raw):!!(s&&s.__v_isReactive)}function Yi(s){return!!(s&&s.__v_isReadonly)}function ua(s){return!!(s&&s.__v_isShallow)}function Bp(s){return qi(s)||Yi(s)}function $t(s){const a=s&&s.__v_raw;return a?$t(a):s}function Op(s){return gl(s,"__v_skip",!0),s}const ha=s=>ae(s)?ls(s):s,Pp=s=>ae(s)?Np(s):s;function Lp(s){Zo&&Un&&(s=$t(s),hy(s.dep||(s.dep=Sp())))}function zl(s,a){s=$t(s);const d=s.dep;d&&Jh(d)}function Se(s){return!!(s&&s.__v_isRef===!0)}function xn(s){return Cy(s,!1)}function Ay(s){return Cy(s,!0)}function Cy(s,a){return Se(s)?s:new k4(s,a)}class k4{constructor(a,d){this.__v_isShallow=d,this.dep=void 0,this.__v_isRef=!0,this._rawValue=d?a:$t(a),this._value=d?a:ha(a)}get value(){return Lp(this),this._value}set value(a){const d=this.__v_isShallow||ua(a)||Yi(a);a=d?a:$t(a),ti(a,this._rawValue)&&(this._rawValue=a,this._value=d?a:ha(a),zl(this))}}function b4(s){zl(s)}function Wn(s){return Se(s)?s.value:s}function w4(s){return Pt(s)?s():Wn(s)}const _4={get:(s,a,d)=>Wn(Reflect.get(s,a,d)),set:(s,a,d,p)=>{const f=s[a];return Se(f)&&!Se(d)?(f.value=d,!0):Reflect.set(s,a,d,p)}};function Rp(s){return qi(s)?s:new Proxy(s,_4)}class A4{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:d,set:p}=a(()=>Lp(this),()=>zl(this));this._get=d,this._set=p}get value(){return this._get()}set value(a){this._set(a)}}function C4(s){return new A4(s)}function v4(s){const a=yt(s)?new Array(s.length):{};for(const d in s)a[d]=vy(s,d);return a}class y4{constructor(a,d,p){this._object=a,this._key=d,this._defaultValue=p,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return ZP($t(this._object),this._key)}}class E4{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function x4(s,a,d){return Se(s)?s:Pt(s)?new E4(s):ae(s)&&arguments.length>1?vy(s,a,d):xn(s)}function vy(s,a,d){const p=s[a];return Se(p)?p:new y4(s,a,d)}class D4{constructor(a,d,p,f){this._setter=d,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Wr(a,()=>{this._dirty||(this._dirty=!0,zl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!f,this.__v_isReadonly=p}get value(){const a=$t(this);return Lp(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function T4(s,a,d=!1){let p,f;const w=Pt(s);return w?(p=s,f=qn):(p=s.get,f=s.set),new D4(p,f,w||!f,d)}function S4(s,...a){}function I4(s,a){}function vo(s,a,d,p){let f;try{f=p?s(...p):s()}catch(w){nr(w,a,d)}return f}function hn(s,a,d,p){if(Pt(s)){const w=vo(s,a,d,p);return w&&xp(w)&&w.catch(b=>{nr(b,a,d)}),w}const f=[];for(let w=0;w<s.length;w++)f.push(hn(s[w],a,d,p));return f}function nr(s,a,d,p=!0){const f=a?a.vnode:null;if(a){let w=a.parent;const b=a.proxy,C=d;for(;w;){const y=w.ec;if(y){for(let x=0;x<y.length;x++)if(y[x](s,b,C)===!1)return}w=w.parent}const m=a.appContext.config.errorHandler;if(m){vo(m,null,10,[s,b,C]);return}}M4(s,d,f,p)}function M4(s,a,d,p=!0){console.error(s)}let pa=!1,Xh=!1;const Ve=[];let io=0;const Ur=[];let _o=null,ji=0;const yy=Promise.resolve();let zp=null;function jl(s){const a=zp||yy;return s?a.then(this?s.bind(this):s):a}function N4(s){let a=io+1,d=Ve.length;for(;a<d;){const p=a+d>>>1,f=Ve[p],w=ga(f);w<s||w===s&&f.pre?a=p+1:d=p}return a}function Fl(s){(!Ve.length||!Ve.includes(s,pa&&s.allowRecurse?io+1:io))&&(s.id==null?Ve.push(s):Ve.splice(N4(s.id),0,s),Ey())}function Ey(){!pa&&!Xh&&(Xh=!0,zp=yy.then(xy))}function B4(s){const a=Ve.indexOf(s);a>io&&Ve.splice(a,1)}function wl(s){yt(s)?Ur.push(...s):(!_o||!_o.includes(s,s.allowRecurse?ji+1:ji))&&Ur.push(s),Ey()}function D0(s,a=pa?io+1:0){for(;a<Ve.length;a++){const d=Ve[a];d&&d.pre&&(Ve.splice(a,1),a--,d())}}function _l(s){if(Ur.length){const a=[...new Set(Ur)];if(Ur.length=0,_o){_o.push(...a);return}for(_o=a,_o.sort((d,p)=>ga(d)-ga(p)),ji=0;ji<_o.length;ji++)_o[ji]();_o=null,ji=0}}const ga=s=>s.id==null?1/0:s.id,O4=(s,a)=>{const d=ga(s)-ga(a);if(d===0){if(s.pre&&!a.pre)return-1;if(a.pre&&!s.pre)return 1}return d};function xy(s){Xh=!1,pa=!0,Ve.sort(O4);const a=qn;try{for(io=0;io<Ve.length;io++){const d=Ve[io];d&&d.active!==!1&&vo(d,null,14)}}finally{io=0,Ve.length=0,_l(),pa=!1,zp=null,(Ve.length||Ur.length)&&xy()}}let Or,Kc=[];function Dy(s,a){var d,p;Or=s,Or?(Or.enabled=!0,Kc.forEach(({event:f,args:w})=>Or.emit(f,...w)),Kc=[]):typeof window<"u"&&window.HTMLElement&&!((p=(d=window.navigator)==null?void 0:d.userAgent)!=null&&p.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(w=>{Dy(w,a)}),setTimeout(()=>{Or||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Kc=[])},3e3)):Kc=[]}function P4(s,a,...d){if(s.isUnmounted)return;const p=s.vnode.props||se;let f=d;const w=a.startsWith("update:"),b=w&&a.slice(7);if(b&&b in p){const x=`${b==="modelValue"?"model":b}Modifiers`,{number:v,trim:A}=p[x]||se;A&&(f=d.map(D=>ge(D)?D.trim():D)),v&&(f=d.map(fl))}let C,m=p[C=ea(a)]||p[C=ea(tn(a))];!m&&w&&(m=p[C=ea(yn(a))]),m&&hn(m,s,6,f);const y=p[C+"Once"];if(y){if(!s.emitted)s.emitted={};else if(s.emitted[C])return;s.emitted[C]=!0,hn(y,s,6,f)}}function Ty(s,a,d=!1){const p=a.emitsCache,f=p.get(s);if(f!==void 0)return f;const w=s.emits;let b={},C=!1;if(!Pt(s)){const m=y=>{const x=Ty(y,a,!0);x&&(C=!0,pe(b,x))};!d&&a.mixins.length&&a.mixins.forEach(m),s.extends&&m(s.extends),s.mixins&&s.mixins.forEach(m)}return!w&&!C?(ae(s)&&p.set(s,null),null):(yt(w)?w.forEach(m=>b[m]=null):pe(b,w),ae(s)&&p.set(s,b),b)}function Vl(s,a){return!s||!Ca(a)?!1:(a=a.slice(2).replace(/Once$/,""),Zt(s,a[0].toLowerCase()+a.slice(1))||Zt(s,yn(a))||Zt(s,a))}let Oe=null,Hl=null;function fa(s){const a=Oe;return Oe=s,Hl=s&&s.type.__scopeId||null,a}function L4(s){Hl=s}function R4(){Hl=null}const z4=s=>Yo;function Yo(s,a=Oe,d){if(!a||s._n)return s;const p=(...f)=>{p._d&&sp(-1);const w=fa(a);let b;try{b=s(...f)}finally{fa(w),p._d&&sp(1)}return b};return p._n=!0,p._c=!0,p._d=!0,p}function cl(s){const{type:a,vnode:d,proxy:p,withProxy:f,props:w,propsOptions:[b],slots:C,attrs:m,emit:y,render:x,renderCache:v,data:A,setupState:D,ctx:N,inheritAttrs:B}=s;let L,V;const j=fa(s);try{if(d.shapeFlag&4){const O=f||p;L=un(x.call(O,O,v,w,D,A,N)),V=m}else{const O=a;L=un(O.length>1?O(w,{attrs:m,slots:C,emit:y}):O(w,null)),V=a.props?m:F4(m)}}catch(O){ra.length=0,nr(O,s,1),L=Kt(He)}let R=L;if(V&&B!==!1){const O=Object.keys(V),{shapeFlag:$}=R;O.length&&$&7&&(b&&O.some(yp)&&(V=V4(V,b)),R=co(R,V))}return d.dirs&&(R=co(R),R.dirs=R.dirs?R.dirs.concat(d.dirs):d.dirs),d.transition&&(R.transition=d.transition),L=R,fa(j),L}function j4(s){let a;for(let d=0;d<s.length;d++){const p=s[d];if(oi(p)){if(p.type!==He||p.children==="v-if"){if(a)return;a=p}}else return}return a}const F4=s=>{let a;for(const d in s)(d==="class"||d==="style"||Ca(d))&&((a||(a={}))[d]=s[d]);return a},V4=(s,a)=>{const d={};for(const p in s)(!yp(p)||!(p.slice(9)in a))&&(d[p]=s[p]);return d};function H4(s,a,d){const{props:p,children:f,component:w}=s,{props:b,children:C,patchFlag:m}=a,y=w.emitsOptions;if(a.dirs||a.transition)return!0;if(d&&m>=0){if(m&1024)return!0;if(m&16)return p?T0(p,b,y):!!b;if(m&8){const x=a.dynamicProps;for(let v=0;v<x.length;v++){const A=x[v];if(b[A]!==p[A]&&!Vl(y,A))return!0}}}else return(f||C)&&(!C||!C.$stable)?!0:p===b?!1:p?b?T0(p,b,y):!0:!!b;return!1}function T0(s,a,d){const p=Object.keys(a);if(p.length!==Object.keys(s).length)return!0;for(let f=0;f<p.length;f++){const w=p[f];if(a[w]!==s[w]&&!Vl(d,w))return!0}return!1}function jp({vnode:s,parent:a},d){for(;a&&a.subTree===s;)(s=a.vnode).el=d,a=a.parent}const Fp="components",U4="directives";function Sy(s,a){return Vp(Fp,s,!0,a)||s}const Iy=Symbol.for("v-ndc");function $4(s){return ge(s)?Vp(Fp,s,!1)||s:s||Iy}function q4(s){return Vp(U4,s)}function Vp(s,a,d=!0,p=!1){const f=Oe||xe;if(f){const w=f.type;if(s===Fp){const C=lp(w,!1);if(C&&(C===a||C===tn(a)||C===va(tn(a))))return w}const b=S0(f[s]||w[s],a)||S0(f.appContext[s],a);return!b&&p?w:b}}function S0(s,a){return s&&(s[a]||s[tn(a)]||s[va(tn(a))])}const My=s=>s.__isSuspense,W4={name:"Suspense",__isSuspense:!0,process(s,a,d,p,f,w,b,C,m,y){s==null?K4(a,d,p,f,w,b,C,m,y):Y4(s,a,d,p,f,b,C,m,y)},hydrate:Q4,create:Hp,normalize:Z4},G4=W4;function ma(s,a){const d=s.props&&s.props[a];Pt(d)&&d()}function K4(s,a,d,p,f,w,b,C,m){const{p:y,o:{createElement:x}}=m,v=x("div"),A=s.suspense=Hp(s,f,p,a,v,d,w,b,C,m);y(null,A.pendingBranch=s.ssContent,v,null,p,A,w,b),A.deps>0?(ma(s,"onPending"),ma(s,"onFallback"),y(null,s.ssFallback,a,d,p,null,w,b),$r(A,s.ssFallback)):A.resolve(!1,!0)}function Y4(s,a,d,p,f,w,b,C,{p:m,um:y,o:{createElement:x}}){const v=a.suspense=s.suspense;v.vnode=a,a.el=s.el;const A=a.ssContent,D=a.ssFallback,{activeBranch:N,pendingBranch:B,isInFallback:L,isHydrating:V}=v;if(B)v.pendingBranch=A,$n(A,B)?(m(B,A,v.hiddenContainer,null,f,v,w,b,C),v.deps<=0?v.resolve():L&&(m(N,D,d,p,f,null,w,b,C),$r(v,D))):(v.pendingId++,V?(v.isHydrating=!1,v.activeBranch=B):y(B,f,v),v.deps=0,v.effects.length=0,v.hiddenContainer=x("div"),L?(m(null,A,v.hiddenContainer,null,f,v,w,b,C),v.deps<=0?v.resolve():(m(N,D,d,p,f,null,w,b,C),$r(v,D))):N&&$n(A,N)?(m(N,A,d,p,f,v,w,b,C),v.resolve(!0)):(m(null,A,v.hiddenContainer,null,f,v,w,b,C),v.deps<=0&&v.resolve()));else if(N&&$n(A,N))m(N,A,d,p,f,v,w,b,C),$r(v,A);else if(ma(a,"onPending"),v.pendingBranch=A,v.pendingId++,m(null,A,v.hiddenContainer,null,f,v,w,b,C),v.deps<=0)v.resolve();else{const{timeout:j,pendingId:R}=v;j>0?setTimeout(()=>{v.pendingId===R&&v.fallback(D)},j):j===0&&v.fallback(D)}}function Hp(s,a,d,p,f,w,b,C,m,y,x=!1){const{p:v,m:A,um:D,n:N,o:{parentNode:B,remove:L}}=y;let V;const j=J4(s);j&&a!=null&&a.pendingBranch&&(V=a.pendingId,a.deps++);const R=s.props?ml(s.props.timeout):void 0,O={vnode:s,parent:a,parentComponent:d,isSVG:b,container:p,hiddenContainer:f,anchor:w,deps:0,pendingId:0,timeout:typeof R=="number"?R:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:x,isUnmounted:!1,effects:[],resolve($=!1,J=!1){const{vnode:W,activeBranch:I,pendingBranch:q,pendingId:Z,effects:st,parentComponent:X,container:lt}=O;let Lt=!1;if(O.isHydrating)O.isHydrating=!1;else if(!$){Lt=I&&q.transition&&q.transition.mode==="out-in",Lt&&(I.transition.afterLeave=()=>{Z===O.pendingId&&(A(q,lt,At,0),wl(st))});let{anchor:At}=O;I&&(At=N(I),D(I,X,O,!0)),Lt||A(q,lt,At,0)}$r(O,q),O.pendingBranch=null,O.isInFallback=!1;let Tt=O.parent,mt=!1;for(;Tt;){if(Tt.pendingBranch){Tt.effects.push(...st),mt=!0;break}Tt=Tt.parent}!mt&&!Lt&&wl(st),O.effects=[],j&&a&&a.pendingBranch&&V===a.pendingId&&(a.deps--,a.deps===0&&!J&&a.resolve()),ma(W,"onResolve")},fallback($){if(!O.pendingBranch)return;const{vnode:J,activeBranch:W,parentComponent:I,container:q,isSVG:Z}=O;ma(J,"onFallback");const st=N(W),X=()=>{O.isInFallback&&(v(null,$,q,st,I,null,Z,C,m),$r(O,$))},lt=$.transition&&$.transition.mode==="out-in";lt&&(W.transition.afterLeave=X),O.isInFallback=!0,D(W,I,null,!0),lt||X()},move($,J,W){O.activeBranch&&A(O.activeBranch,$,J,W),O.container=$},next(){return O.activeBranch&&N(O.activeBranch)},registerDep($,J){const W=!!O.pendingBranch;W&&O.deps++;const I=$.vnode.el;$.asyncDep.catch(q=>{nr(q,$,0)}).then(q=>{if($.isUnmounted||O.isUnmounted||O.pendingId!==$.suspenseId)return;$.asyncResolved=!0;const{vnode:Z}=$;ap($,q,!1),I&&(Z.el=I);const st=!I&&$.subTree.el;J($,Z,B(I||$.subTree.el),I?null:N($.subTree),O,b,m),st&&L(st),jp($,Z.el),W&&--O.deps===0&&O.resolve()})},unmount($,J){O.isUnmounted=!0,O.activeBranch&&D(O.activeBranch,d,$,J),O.pendingBranch&&D(O.pendingBranch,d,$,J)}};return O}function Q4(s,a,d,p,f,w,b,C,m){const y=a.suspense=Hp(a,p,d,s.parentNode,document.createElement("div"),null,f,w,b,C,!0),x=m(s,y.pendingBranch=a.ssContent,d,y,w,b);return y.deps===0&&y.resolve(!1,!0),x}function Z4(s){const{shapeFlag:a,children:d}=s,p=a&32;s.ssContent=I0(p?d.default:d),s.ssFallback=p?I0(d.fallback):Kt(He)}function I0(s){let a;if(Pt(s)){const d=Ji&&s._c;d&&(s._d=!1,Nn()),s=s(),d&&(s._d=!0,a=Xe,s1())}return yt(s)&&(s=j4(s)),s=un(s),a&&!s.dynamicChildren&&(s.dynamicChildren=a.filter(d=>d!==s)),s}function Ny(s,a){a&&a.pendingBranch?yt(s)?a.effects.push(...s):a.effects.push(s):wl(s)}function $r(s,a){s.activeBranch=a;const{vnode:d,parentComponent:p}=s,f=d.el=a.el;p&&p.subTree===d&&(p.vnode.el=f,jp(p,f))}function J4(s){var a;return((a=s.props)==null?void 0:a.suspensible)!=null&&s.props.suspensible!==!1}function X4(s,a){return xa(s,null,a)}function By(s,a){return xa(s,null,{flush:"post"})}function tL(s,a){return xa(s,null,{flush:"sync"})}const Yc={};function Jo(s,a,d){return xa(s,a,d)}function xa(s,a,{immediate:d,deep:p,flush:f,onTrack:w,onTrigger:b}=se){var C;const m=cy()===((C=xe)==null?void 0:C.scope)?xe:null;let y,x=!1,v=!1;if(Se(s)?(y=()=>s.value,x=ua(s)):qi(s)?(y=()=>s,p=!0):yt(s)?(v=!0,x=s.some(O=>qi(O)||ua(O)),y=()=>s.map(O=>{if(Se(O))return O.value;if(qi(O))return Vi(O);if(Pt(O))return vo(O,m,2)})):Pt(s)?a?y=()=>vo(s,m,2):y=()=>{if(!(m&&m.isUnmounted))return A&&A(),hn(s,m,3,[D])}:y=qn,a&&p){const O=y;y=()=>Vi(O())}let A,D=O=>{A=j.onStop=()=>{vo(O,m,4)}},N;if(Kr)if(D=qn,a?d&&hn(a,m,3,[y(),v?[]:void 0,D]):y(),f==="sync"){const O=k1();N=O.__watcherHandles||(O.__watcherHandles=[])}else return qn;let B=v?new Array(s.length).fill(Yc):Yc;const L=()=>{if(j.active)if(a){const O=j.run();(p||x||(v?O.some(($,J)=>ti($,B[J])):ti(O,B)))&&(A&&A(),hn(a,m,3,[O,B===Yc?void 0:v&&B[0]===Yc?[]:B,D]),B=O)}else j.run()};L.allowRecurse=!!a;let V;f==="sync"?V=L:f==="post"?V=()=>Re(L,m&&m.suspense):(L.pre=!0,m&&(L.id=m.uid),V=()=>Fl(L));const j=new Wr(y,V);a?d?L():B=j.run():f==="post"?Re(j.run.bind(j),m&&m.suspense):j.run();const R=()=>{j.stop(),m&&m.scope&&Ep(m.scope.effects,j)};return N&&N.push(R),R}function eL(s,a,d){const p=this.proxy,f=ge(s)?s.includes(".")?Oy(p,s):()=>p[s]:s.bind(p,p);let w;Pt(a)?w=a:(w=a.handler,d=a);const b=xe;ii(this);const C=xa(f,w.bind(p),d);return b?ii(b):Xo(),C}function Oy(s,a){const d=a.split(".");return()=>{let p=s;for(let f=0;f<d.length&&p;f++)p=p[d[f]];return p}}function Vi(s,a){if(!ae(s)||s.__v_skip||(a=a||new Set,a.has(s)))return s;if(a.add(s),Se(s))Vi(s.value,a);else if(yt(s))for(let d=0;d<s.length;d++)Vi(s[d],a);else if(er(s)||Vr(s))s.forEach(d=>{Vi(d,a)});else if(iy(s))for(const d in s)Vi(s[d],a);return s}function ll(s,a){const d=Oe;if(d===null)return s;const p=Ql(d)||d.proxy,f=s.dirs||(s.dirs=[]);for(let w=0;w<a.length;w++){let[b,C,m,y=se]=a[w];b&&(Pt(b)&&(b={mounted:b,updated:b}),b.deep&&Vi(C),f.push({dir:b,instance:p,value:C,oldValue:void 0,arg:m,modifiers:y}))}return s}function oo(s,a,d,p){const f=s.dirs,w=a&&a.dirs;for(let b=0;b<f.length;b++){const C=f[b];w&&(C.oldValue=w[b].value);let m=C.dir[p];m&&(as(),hn(m,d,8,[s.el,C,s,a]),cs())}}const Wo=Symbol("_leaveCb"),Qc=Symbol("_enterCb");function Up(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sa(()=>{s.isMounted=!0}),Wl(()=>{s.isUnmounting=!0}),s}const vn=[Function,Array],$p={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vn,onEnter:vn,onAfterEnter:vn,onEnterCancelled:vn,onBeforeLeave:vn,onLeave:vn,onAfterLeave:vn,onLeaveCancelled:vn,onBeforeAppear:vn,onAppear:vn,onAfterAppear:vn,onAppearCancelled:vn},nL={name:"BaseTransition",props:$p,setup(s,{slots:a}){const d=So(),p=Up();let f;return()=>{const w=a.default&&Ul(a.default(),!0);if(!w||!w.length)return;let b=w[0];if(w.length>1){for(const B of w)if(B.type!==He){b=B;break}}const C=$t(s),{mode:m}=C;if(p.isLeaving)return vh(b);const y=M0(b);if(!y)return vh(b);const x=Gr(y,C,p,d);Qi(y,x);const v=d.subTree,A=v&&M0(v);let D=!1;const{getTransitionKey:N}=y.type;if(N){const B=N();f===void 0?f=B:B!==f&&(f=B,D=!0)}if(A&&A.type!==He&&(!$n(y,A)||D)){const B=Gr(A,C,p,d);if(Qi(A,B),m==="out-in")return p.isLeaving=!0,B.afterLeave=()=>{p.isLeaving=!1,d.update.active!==!1&&d.update()},vh(b);m==="in-out"&&y.type!==He&&(B.delayLeave=(L,V,j)=>{const R=Ly(p,A);R[String(A.key)]=A,L[Wo]=()=>{V(),L[Wo]=void 0,delete x.delayedLeave},x.delayedLeave=j})}return b}}},Py=nL;function Ly(s,a){const{leavingVNodes:d}=s;let p=d.get(a.type);return p||(p=Object.create(null),d.set(a.type,p)),p}function Gr(s,a,d,p){const{appear:f,mode:w,persisted:b=!1,onBeforeEnter:C,onEnter:m,onAfterEnter:y,onEnterCancelled:x,onBeforeLeave:v,onLeave:A,onAfterLeave:D,onLeaveCancelled:N,onBeforeAppear:B,onAppear:L,onAfterAppear:V,onAppearCancelled:j}=a,R=String(s.key),O=Ly(d,s),$=(I,q)=>{I&&hn(I,p,9,q)},J=(I,q)=>{const Z=q[1];$(I,q),yt(I)?I.every(st=>st.length<=1)&&Z():I.length<=1&&Z()},W={mode:w,persisted:b,beforeEnter(I){let q=C;if(!d.isMounted)if(f)q=B||C;else return;I[Wo]&&I[Wo](!0);const Z=O[R];Z&&$n(s,Z)&&Z.el[Wo]&&Z.el[Wo](),$(q,[I])},enter(I){let q=m,Z=y,st=x;if(!d.isMounted)if(f)q=L||m,Z=V||y,st=j||x;else return;let X=!1;const lt=I[Qc]=Lt=>{X||(X=!0,Lt?$(st,[I]):$(Z,[I]),W.delayedLeave&&W.delayedLeave(),I[Qc]=void 0)};q?J(q,[I,lt]):lt()},leave(I,q){const Z=String(s.key);if(I[Qc]&&I[Qc](!0),d.isUnmounting)return q();$(v,[I]);let st=!1;const X=I[Wo]=lt=>{st||(st=!0,q(),lt?$(N,[I]):$(D,[I]),I[Wo]=void 0,O[Z]===s&&delete O[Z])};O[Z]=s,A?J(A,[I,X]):X()},clone(I){return Gr(I,a,d,p)}};return W}function vh(s){if(Ta(s))return s=co(s),s.children=null,s}function M0(s){return Ta(s)?s.children?s.children[0]:void 0:s}function Qi(s,a){s.shapeFlag&6&&s.component?Qi(s.component.subTree,a):s.shapeFlag&128?(s.ssContent.transition=a.clone(s.ssContent),s.ssFallback.transition=a.clone(s.ssFallback)):s.transition=a}function Ul(s,a=!1,d){let p=[],f=0;for(let w=0;w<s.length;w++){let b=s[w];const C=d==null?b.key:String(d)+String(b.key!=null?b.key:w);b.type===ze?(b.patchFlag&128&&f++,p=p.concat(Ul(b.children,a,C))):(a||b.type!==He)&&p.push(C!=null?co(b,{key:C}):b)}if(f>1)for(let w=0;w<p.length;w++)p[w].patchFlag=-2;return p}/*! #__NO_SIDE_EFFECTS__ */function Da(s,a){return Pt(s)?(()=>pe({name:s.name},a,{setup:s}))():s}const Wi=s=>!!s.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function oL(s){Pt(s)&&(s={loader:s});const{loader:a,loadingComponent:d,errorComponent:p,delay:f=200,timeout:w,suspensible:b=!0,onError:C}=s;let m=null,y,x=0;const v=()=>(x++,m=null,A()),A=()=>{let D;return m||(D=m=a().catch(N=>{if(N=N instanceof Error?N:new Error(String(N)),C)return new Promise((B,L)=>{C(N,()=>B(v()),()=>L(N),x+1)});throw N}).then(N=>D!==m&&m?m:(N&&(N.__esModule||N[Symbol.toStringTag]==="Module")&&(N=N.default),y=N,N)))};return Da({name:"AsyncComponentWrapper",__asyncLoader:A,get __asyncResolved(){return y},setup(){const D=xe;if(y)return()=>yh(y,D);const N=j=>{m=null,nr(j,D,13,!p)};if(b&&D.suspense||Kr)return A().then(j=>()=>yh(j,D)).catch(j=>(N(j),()=>p?Kt(p,{error:j}):null));const B=xn(!1),L=xn(),V=xn(!!f);return f&&setTimeout(()=>{V.value=!1},f),w!=null&&setTimeout(()=>{if(!B.value&&!L.value){const j=new Error(`Async component timed out after ${w}ms.`);N(j),L.value=j}},w),A().then(()=>{B.value=!0,D.parent&&Ta(D.parent.vnode)&&Fl(D.parent.update)}).catch(j=>{N(j),L.value=j}),()=>{if(B.value&&y)return yh(y,D);if(L.value&&p)return Kt(p,{error:L.value});if(d&&!V.value)return Kt(d)}}})}function yh(s,a){const{ref:d,props:p,children:f,ce:w}=a.vnode,b=Kt(s,p,f);return b.ref=d,b.ce=w,delete a.vnode.ce,b}const Ta=s=>s.type.__isKeepAlive,iL={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(s,{slots:a}){const d=So(),p=d.ctx;if(!p.renderer)return()=>{const j=a.default&&a.default();return j&&j.length===1?j[0]:j};const f=new Map,w=new Set;let b=null;const C=d.suspense,{renderer:{p:m,m:y,um:x,o:{createElement:v}}}=p,A=v("div");p.activate=(j,R,O,$,J)=>{const W=j.component;y(j,R,O,0,C),m(W.vnode,j,R,O,W,C,$,j.slotScopeIds,J),Re(()=>{W.isDeactivated=!1,W.a&&Hr(W.a);const I=j.props&&j.props.onVnodeMounted;I&&Ze(I,W.parent,j)},C)},p.deactivate=j=>{const R=j.component;y(j,A,null,1,C),Re(()=>{R.da&&Hr(R.da);const O=j.props&&j.props.onVnodeUnmounted;O&&Ze(O,R.parent,j),R.isDeactivated=!0},C)};function D(j){Eh(j),x(j,d,C,!0)}function N(j){f.forEach((R,O)=>{const $=lp(R.type);$&&(!j||!j($))&&B(O)})}function B(j){const R=f.get(j);!b||!$n(R,b)?D(R):b&&Eh(b),f.delete(j),w.delete(j)}Jo(()=>[s.include,s.exclude],([j,R])=>{j&&N(O=>Js(j,O)),R&&N(O=>!Js(R,O))},{flush:"post",deep:!0});let L=null;const V=()=>{L!=null&&f.set(L,xh(d.subTree))};return Sa(V),ql(V),Wl(()=>{f.forEach(j=>{const{subTree:R,suspense:O}=d,$=xh(R);if(j.type===$.type&&j.key===$.key){Eh($);const J=$.component.da;J&&Re(J,O);return}D(j)})}),()=>{if(L=null,!a.default)return null;const j=a.default(),R=j[0];if(j.length>1)return b=null,j;if(!oi(R)||!(R.shapeFlag&4)&&!(R.shapeFlag&128))return b=null,R;let O=xh(R);const $=O.type,J=lp(Wi(O)?O.type.__asyncResolved||{}:$),{include:W,exclude:I,max:q}=s;if(W&&(!J||!Js(W,J))||I&&J&&Js(I,J))return b=O,R;const Z=O.key==null?$:O.key,st=f.get(Z);return O.el&&(O=co(O),R.shapeFlag&128&&(R.ssContent=O)),L=Z,st?(O.el=st.el,O.component=st.component,O.transition&&Qi(O,O.transition),O.shapeFlag|=512,w.delete(Z),w.add(Z)):(w.add(Z),q&&w.size>parseInt(q,10)&&B(w.values().next().value)),O.shapeFlag|=256,b=O,My(R.type)?R:O}}},rL=iL;function Js(s,a){return yt(s)?s.some(d=>Js(d,a)):ge(s)?s.split(",").includes(a):MP(s)?s.test(a):!1}function Ry(s,a){jy(s,"a",a)}function zy(s,a){jy(s,"da",a)}function jy(s,a,d=xe){const p=s.__wdc||(s.__wdc=()=>{let f=d;for(;f;){if(f.isDeactivated)return;f=f.parent}return s()});if($l(a,p,d),d){let f=d.parent;for(;f&&f.parent;)Ta(f.parent.vnode)&&sL(p,a,d,f),f=f.parent}}function sL(s,a,d,p){const f=$l(a,s,p,!0);Gl(()=>{Ep(p[a],f)},d)}function Eh(s){s.shapeFlag&=-257,s.shapeFlag&=-513}function xh(s){return s.shapeFlag&128?s.ssContent:s}function $l(s,a,d=xe,p=!1){if(d){const f=d[s]||(d[s]=[]),w=a.__weh||(a.__weh=(...b)=>{if(d.isUnmounted)return;as(),ii(d);const C=hn(a,d,s,b);return Xo(),cs(),C});return p?f.unshift(w):f.push(w),w}}const Do=s=>(a,d=xe)=>(!Kr||s==="sp")&&$l(s,(...p)=>a(...p),d),Fy=Do("bm"),Sa=Do("m"),Vy=Do("bu"),ql=Do("u"),Wl=Do("bum"),Gl=Do("um"),Hy=Do("sp"),Uy=Do("rtg"),$y=Do("rtc");function qy(s,a=xe){$l("ec",s,a)}function aL(s,a,d,p){let f;const w=d&&d[p];if(yt(s)||ge(s)){f=new Array(s.length);for(let b=0,C=s.length;b<C;b++)f[b]=a(s[b],b,void 0,w&&w[b])}else if(typeof s=="number"){f=new Array(s);for(let b=0;b<s;b++)f[b]=a(b+1,b,void 0,w&&w[b])}else if(ae(s))if(s[Symbol.iterator])f=Array.from(s,(b,C)=>a(b,C,void 0,w&&w[C]));else{const b=Object.keys(s);f=new Array(b.length);for(let C=0,m=b.length;C<m;C++){const y=b[C];f[C]=a(s[y],y,C,w&&w[C])}}else f=[];return d&&(d[p]=f),f}function cL(s,a){for(let d=0;d<a.length;d++){const p=a[d];if(yt(p))for(let f=0;f<p.length;f++)s[p[f].name]=p[f].fn;else p&&(s[p.name]=p.key?(...f)=>{const w=p.fn(...f);return w&&(w.key=p.key),w}:p.fn)}return s}function lL(s,a,d={},p,f){if(Oe.isCE||Oe.parent&&Wi(Oe.parent)&&Oe.parent.isCE)return a!=="default"&&(d.name=a),Kt("slot",d,p&&p());let w=s[a];w&&w._c&&(w._d=!1),Nn();const b=w&&Wy(w(d)),C=Kp(ze,{key:d.key||b&&b.key||`_${a}`},b||(p?p():[]),b&&s._===1?64:-2);return!f&&C.scopeId&&(C.slotScopeIds=[C.scopeId+"-s"]),w&&w._c&&(w._d=!0),C}function Wy(s){return s.some(a=>oi(a)?!(a.type===He||a.type===ze&&!Wy(a.children)):!0)?s:null}function dL(s,a){const d={};for(const p in s)d[a&&/[A-Z]/.test(p)?`on:${p}`:ea(p)]=s[p];return d}const tp=s=>s?h1(s)?Ql(s)||s.proxy:tp(s.parent):null,na=pe(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>tp(s.parent),$root:s=>tp(s.root),$emit:s=>s.emit,$options:s=>qp(s),$forceUpdate:s=>s.f||(s.f=()=>Fl(s.update)),$nextTick:s=>s.n||(s.n=jl.bind(s.proxy)),$watch:s=>eL.bind(s)}),Dh=(s,a)=>s!==se&&!s.__isScriptSetup&&Zt(s,a),ep={get({_:s},a){const{ctx:d,setupState:p,data:f,props:w,accessCache:b,type:C,appContext:m}=s;let y;if(a[0]!=="$"){const D=b[a];if(D!==void 0)switch(D){case 1:return p[a];case 2:return f[a];case 4:return d[a];case 3:return w[a]}else{if(Dh(p,a))return b[a]=1,p[a];if(f!==se&&Zt(f,a))return b[a]=2,f[a];if((y=s.propsOptions[0])&&Zt(y,a))return b[a]=3,w[a];if(d!==se&&Zt(d,a))return b[a]=4,d[a];np&&(b[a]=0)}}const x=na[a];let v,A;if(x)return a==="$attrs"&&en(s,"get",a),x(s);if((v=C.__cssModules)&&(v=v[a]))return v;if(d!==se&&Zt(d,a))return b[a]=4,d[a];if(A=m.config.globalProperties,Zt(A,a))return A[a]},set({_:s},a,d){const{data:p,setupState:f,ctx:w}=s;return Dh(f,a)?(f[a]=d,!0):p!==se&&Zt(p,a)?(p[a]=d,!0):Zt(s.props,a)||a[0]==="$"&&a.slice(1)in s?!1:(w[a]=d,!0)},has({_:{data:s,setupState:a,accessCache:d,ctx:p,appContext:f,propsOptions:w}},b){let C;return!!d[b]||s!==se&&Zt(s,b)||Dh(a,b)||(C=w[0])&&Zt(C,b)||Zt(p,b)||Zt(na,b)||Zt(f.config.globalProperties,b)},defineProperty(s,a,d){return d.get!=null?s._.accessCache[a]=0:Zt(d,"value")&&this.set(s,a,d.value,null),Reflect.defineProperty(s,a,d)}},uL=pe({},ep,{get(s,a){if(a!==Symbol.unscopables)return ep.get(s,a,s)},has(s,a){return a[0]!=="_"&&!LP(a)}});function hL(){return null}function pL(){return null}function gL(s){}function fL(s){}function mL(){return null}function kL(){}function bL(s,a){return null}function wL(){return Gy().slots}function _L(){return Gy().attrs}function AL(s,a,d){const p=So();if(d&&d.local){const f=xn(s[a]);return Jo(()=>s[a],w=>f.value=w),Jo(f,w=>{w!==s[a]&&p.emit(`update:${a}`,w)}),f}else return{__v_isRef:!0,get value(){return s[a]},set value(f){p.emit(`update:${a}`,f)}}}function Gy(){const s=So();return s.setupContext||(s.setupContext=f1(s))}function ka(s){return yt(s)?s.reduce((a,d)=>(a[d]=null,a),{}):s}function CL(s,a){const d=ka(s);for(const p in a){if(p.startsWith("__skip"))continue;let f=d[p];f?yt(f)||Pt(f)?f=d[p]={type:f,default:a[p]}:f.default=a[p]:f===null&&(f=d[p]={default:a[p]}),f&&a[`__skip_${p}`]&&(f.skipFactory=!0)}return d}function vL(s,a){return!s||!a?s||a:yt(s)&&yt(a)?s.concat(a):pe({},ka(s),ka(a))}function yL(s,a){const d={};for(const p in s)a.includes(p)||Object.defineProperty(d,p,{enumerable:!0,get:()=>s[p]});return d}function EL(s){const a=So();let d=s();return Xo(),xp(d)&&(d=d.catch(p=>{throw ii(a),p})),[d,()=>ii(a)]}let np=!0;function xL(s){const a=qp(s),d=s.proxy,p=s.ctx;np=!1,a.beforeCreate&&N0(a.beforeCreate,s,"bc");const{data:f,computed:w,methods:b,watch:C,provide:m,inject:y,created:x,beforeMount:v,mounted:A,beforeUpdate:D,updated:N,activated:B,deactivated:L,beforeDestroy:V,beforeUnmount:j,destroyed:R,unmounted:O,render:$,renderTracked:J,renderTriggered:W,errorCaptured:I,serverPrefetch:q,expose:Z,inheritAttrs:st,components:X,directives:lt,filters:Lt}=a;if(y&&DL(y,p,null),b)for(const At in b){const Ct=b[At];Pt(Ct)&&(p[At]=Ct.bind(d))}if(f){const At=f.call(d,d);ae(At)&&(s.data=ls(At))}if(np=!0,w)for(const At in w){const Ct=w[At],St=Pt(Ct)?Ct.bind(d,d):Pt(Ct.get)?Ct.get.bind(d,d):qn,Ie=!Pt(Ct)&&Pt(Ct.set)?Ct.set.bind(d):qn,_e=En({get:St,set:Ie});Object.defineProperty(p,At,{enumerable:!0,configurable:!0,get:()=>_e.value,set:de=>_e.value=de})}if(C)for(const At in C)Ky(C[At],p,d,At);if(m){const At=Pt(m)?m.call(d):m;Reflect.ownKeys(At).forEach(Ct=>{oa(Ct,At[Ct])})}x&&N0(x,s,"c");function mt(At,Ct){yt(Ct)?Ct.forEach(St=>At(St.bind(d))):Ct&&At(Ct.bind(d))}if(mt(Fy,v),mt(Sa,A),mt(Vy,D),mt(ql,N),mt(Ry,B),mt(zy,L),mt(qy,I),mt($y,J),mt(Uy,W),mt(Wl,j),mt(Gl,O),mt(Hy,q),yt(Z))if(Z.length){const At=s.exposed||(s.exposed={});Z.forEach(Ct=>{Object.defineProperty(At,Ct,{get:()=>d[Ct],set:St=>d[Ct]=St})})}else s.exposed||(s.exposed={});$&&s.render===qn&&(s.render=$),st!=null&&(s.inheritAttrs=st),X&&(s.components=X),lt&&(s.directives=lt)}function DL(s,a,d=qn){yt(s)&&(s=op(s));for(const p in s){const f=s[p];let w;ae(f)?"default"in f?w=Dn(f.from||p,f.default,!0):w=Dn(f.from||p):w=Dn(f),Se(w)?Object.defineProperty(a,p,{enumerable:!0,configurable:!0,get:()=>w.value,set:b=>w.value=b}):a[p]=w}}function N0(s,a,d){hn(yt(s)?s.map(p=>p.bind(a.proxy)):s.bind(a.proxy),a,d)}function Ky(s,a,d,p){const f=p.includes(".")?Oy(d,p):()=>d[p];if(ge(s)){const w=a[s];Pt(w)&&Jo(f,w)}else if(Pt(s))Jo(f,s.bind(d));else if(ae(s))if(yt(s))s.forEach(w=>Ky(w,a,d,p));else{const w=Pt(s.handler)?s.handler.bind(d):a[s.handler];Pt(w)&&Jo(f,w,s)}}function qp(s){const a=s.type,{mixins:d,extends:p}=a,{mixins:f,optionsCache:w,config:{optionMergeStrategies:b}}=s.appContext,C=w.get(a);let m;return C?m=C:!f.length&&!d&&!p?m=a:(m={},f.length&&f.forEach(y=>Al(m,y,b,!0)),Al(m,a,b)),ae(a)&&w.set(a,m),m}function Al(s,a,d,p=!1){const{mixins:f,extends:w}=a;w&&Al(s,w,d,!0),f&&f.forEach(b=>Al(s,b,d,!0));for(const b in a)if(!(p&&b==="expose")){const C=TL[b]||d&&d[b];s[b]=C?C(s[b],a[b]):a[b]}return s}const TL={data:B0,props:O0,emits:O0,methods:Xs,computed:Xs,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:Xs,directives:Xs,watch:IL,provide:B0,inject:SL};function B0(s,a){return a?s?function(){return pe(Pt(s)?s.call(this,this):s,Pt(a)?a.call(this,this):a)}:a:s}function SL(s,a){return Xs(op(s),op(a))}function op(s){if(yt(s)){const a={};for(let d=0;d<s.length;d++)a[s[d]]=s[d];return a}return s}function Ue(s,a){return s?[...new Set([].concat(s,a))]:a}function Xs(s,a){return s?pe(Object.create(null),s,a):a}function O0(s,a){return s?yt(s)&&yt(a)?[...new Set([...s,...a])]:pe(Object.create(null),ka(s),ka(a??{})):a}function IL(s,a){if(!s)return a;if(!a)return s;const d=pe(Object.create(null),s);for(const p in a)d[p]=Ue(s[p],a[p]);return d}function Yy(){return{app:null,config:{isNativeTag:TP,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ML=0;function NL(s,a){return function(p,f=null){Pt(p)||(p=pe({},p)),f!=null&&!ae(f)&&(f=null);const w=Yy(),b=new WeakSet;let C=!1;const m=w.app={_uid:ML++,_component:p,_props:f,_container:null,_context:w,_instance:null,version:w1,get config(){return w.config},set config(y){},use(y,...x){return b.has(y)||(y&&Pt(y.install)?(b.add(y),y.install(m,...x)):Pt(y)&&(b.add(y),y(m,...x))),m},mixin(y){return w.mixins.includes(y)||w.mixins.push(y),m},component(y,x){return x?(w.components[y]=x,m):w.components[y]},directive(y,x){return x?(w.directives[y]=x,m):w.directives[y]},mount(y,x,v){if(!C){const A=Kt(p,f);return A.appContext=w,x&&a?a(A,y):s(A,y,v),C=!0,m._container=y,y.__vue_app__=m,Ql(A.component)||A.component.proxy}},unmount(){C&&(s(null,m._container),delete m._container.__vue_app__)},provide(y,x){return w.provides[y]=x,m},runWithContext(y){ba=m;try{return y()}finally{ba=null}}};return m}}let ba=null;function oa(s,a){if(xe){let d=xe.provides;const p=xe.parent&&xe.parent.provides;p===d&&(d=xe.provides=Object.create(p)),d[s]=a}}function Dn(s,a,d=!1){const p=xe||Oe;if(p||ba){const f=p?p.parent==null?p.vnode.appContext&&p.vnode.appContext.provides:p.parent.provides:ba._context.provides;if(f&&s in f)return f[s];if(arguments.length>1)return d&&Pt(a)?a.call(p&&p.proxy):a}}function BL(){return!!(xe||Oe||ba)}function OL(s,a,d,p=!1){const f={},w={};gl(w,Kl,1),s.propsDefaults=Object.create(null),Qy(s,a,f,w);for(const b in s.propsOptions[0])b in f||(f[b]=void 0);d?s.props=p?f:Mp(f):s.type.props?s.props=f:s.props=w,s.attrs=w}function PL(s,a,d,p){const{props:f,attrs:w,vnode:{patchFlag:b}}=s,C=$t(f),[m]=s.propsOptions;let y=!1;if((p||b>0)&&!(b&16)){if(b&8){const x=s.vnode.dynamicProps;for(let v=0;v<x.length;v++){let A=x[v];if(Vl(s.emitsOptions,A))continue;const D=a[A];if(m)if(Zt(w,A))D!==w[A]&&(w[A]=D,y=!0);else{const N=tn(A);f[N]=ip(m,C,N,D,s,!1)}else D!==w[A]&&(w[A]=D,y=!0)}}}else{Qy(s,a,f,w)&&(y=!0);let x;for(const v in C)(!a||!Zt(a,v)&&((x=yn(v))===v||!Zt(a,x)))&&(m?d&&(d[v]!==void 0||d[x]!==void 0)&&(f[v]=ip(m,C,v,void 0,s,!0)):delete f[v]);if(w!==C)for(const v in w)(!a||!Zt(a,v))&&(delete w[v],y=!0)}y&&Co(s,"set","$attrs")}function Qy(s,a,d,p){const[f,w]=s.propsOptions;let b=!1,C;if(a)for(let m in a){if(ta(m))continue;const y=a[m];let x;f&&Zt(f,x=tn(m))?!w||!w.includes(x)?d[x]=y:(C||(C={}))[x]=y:Vl(s.emitsOptions,m)||(!(m in p)||y!==p[m])&&(p[m]=y,b=!0)}if(w){const m=$t(d),y=C||se;for(let x=0;x<w.length;x++){const v=w[x];d[v]=ip(f,m,v,y[v],s,!Zt(y,v))}}return b}function ip(s,a,d,p,f,w){const b=s[d];if(b!=null){const C=Zt(b,"default");if(C&&p===void 0){const m=b.default;if(b.type!==Function&&!b.skipFactory&&Pt(m)){const{propsDefaults:y}=f;d in y?p=y[d]:(ii(f),p=y[d]=m.call(null,a),Xo())}else p=m}b[0]&&(w&&!C?p=!1:b[1]&&(p===""||p===yn(d))&&(p=!0))}return p}function Zy(s,a,d=!1){const p=a.propsCache,f=p.get(s);if(f)return f;const w=s.props,b={},C=[];let m=!1;if(!Pt(s)){const x=v=>{m=!0;const[A,D]=Zy(v,a,!0);pe(b,A),D&&C.push(...D)};!d&&a.mixins.length&&a.mixins.forEach(x),s.extends&&x(s.extends),s.mixins&&s.mixins.forEach(x)}if(!w&&!m)return ae(s)&&p.set(s,Fr),Fr;if(yt(w))for(let x=0;x<w.length;x++){const v=tn(w[x]);P0(v)&&(b[v]=se)}else if(w)for(const x in w){const v=tn(x);if(P0(v)){const A=w[x],D=b[v]=yt(A)||Pt(A)?{type:A}:pe({},A);if(D){const N=z0(Boolean,D.type),B=z0(String,D.type);D[0]=N>-1,D[1]=B<0||N<B,(N>-1||Zt(D,"default"))&&C.push(v)}}}const y=[b,C];return ae(s)&&p.set(s,y),y}function P0(s){return s[0]!=="$"}function L0(s){const a=s&&s.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:s===null?"null":""}function R0(s,a){return L0(s)===L0(a)}function z0(s,a){return yt(a)?a.findIndex(d=>R0(d,s)):Pt(a)&&R0(a,s)?0:-1}const Jy=s=>s[0]==="_"||s==="$stable",Wp=s=>yt(s)?s.map(un):[un(s)],LL=(s,a,d)=>{if(a._n)return a;const p=Yo((...f)=>Wp(a(...f)),d);return p._c=!1,p},Xy=(s,a,d)=>{const p=s._ctx;for(const f in s){if(Jy(f))continue;const w=s[f];if(Pt(w))a[f]=LL(f,w,p);else if(w!=null){const b=Wp(w);a[f]=()=>b}}},t1=(s,a)=>{const d=Wp(a);s.slots.default=()=>d},RL=(s,a)=>{if(s.vnode.shapeFlag&32){const d=a._;d?(s.slots=$t(a),gl(a,"_",d)):Xy(a,s.slots={})}else s.slots={},a&&t1(s,a);gl(s.slots,Kl,1)},zL=(s,a,d)=>{const{vnode:p,slots:f}=s;let w=!0,b=se;if(p.shapeFlag&32){const C=a._;C?d&&C===1?w=!1:(pe(f,a),!d&&C===1&&delete f._):(w=!a.$stable,Xy(a,f)),b=a}else a&&(t1(s,a),b={default:1});if(w)for(const C in f)!Jy(C)&&b[C]==null&&delete f[C]};function Cl(s,a,d,p,f=!1){if(yt(s)){s.forEach((A,D)=>Cl(A,a&&(yt(a)?a[D]:a),d,p,f));return}if(Wi(p)&&!f)return;const w=p.shapeFlag&4?Ql(p.component)||p.component.proxy:p.el,b=f?null:w,{i:C,r:m}=s,y=a&&a.r,x=C.refs===se?C.refs={}:C.refs,v=C.setupState;if(y!=null&&y!==m&&(ge(y)?(x[y]=null,Zt(v,y)&&(v[y]=null)):Se(y)&&(y.value=null)),Pt(m))vo(m,C,12,[b,x]);else{const A=ge(m),D=Se(m);if(A||D){const N=()=>{if(s.f){const B=A?Zt(v,m)?v[m]:x[m]:m.value;f?yt(B)&&Ep(B,w):yt(B)?B.includes(w)||B.push(w):A?(x[m]=[w],Zt(v,m)&&(v[m]=x[m])):(m.value=[w],s.k&&(x[s.k]=m.value))}else A?(x[m]=b,Zt(v,m)&&(v[m]=b)):D&&(m.value=b,s.k&&(x[s.k]=b))};b?(N.id=-1,Re(N,d)):N()}}}let Vo=!1;const Zc=s=>/svg/.test(s.namespaceURI)&&s.tagName!=="foreignObject",Jc=s=>s.nodeType===8;function jL(s){const{mt:a,p:d,o:{patchProp:p,createText:f,nextSibling:w,parentNode:b,remove:C,insert:m,createComment:y}}=s,x=(R,O)=>{if(!O.hasChildNodes()){d(null,R,O),_l(),O._vnode=R;return}Vo=!1,v(O.firstChild,R,null,null,null),_l(),O._vnode=R,Vo&&console.error("Hydration completed but contains mismatches.")},v=(R,O,$,J,W,I=!1)=>{const q=Jc(R)&&R.data==="[",Z=()=>B(R,O,$,J,W,q),{type:st,ref:X,shapeFlag:lt,patchFlag:Lt}=O;let Tt=R.nodeType;O.el=R,Lt===-2&&(I=!1,O.dynamicChildren=null);let mt=null;switch(st){case Zi:Tt!==3?O.children===""?(m(O.el=f(""),b(R),R),mt=R):mt=Z():(R.data!==O.children&&(Vo=!0,R.data=O.children),mt=w(R));break;case He:j(R)?(mt=w(R),V(O.el=R.content.firstChild,R,$)):Tt!==8||q?mt=Z():mt=w(R);break;case Gi:if(q&&(R=w(R),Tt=R.nodeType),Tt===1||Tt===3){mt=R;const At=!O.children.length;for(let Ct=0;Ct<O.staticCount;Ct++)At&&(O.children+=mt.nodeType===1?mt.outerHTML:mt.data),Ct===O.staticCount-1&&(O.anchor=mt),mt=w(mt);return q?w(mt):mt}else Z();break;case ze:q?mt=N(R,O,$,J,W,I):mt=Z();break;default:if(lt&1)(Tt!==1||O.type.toLowerCase()!==R.tagName.toLowerCase())&&!j(R)?mt=Z():mt=A(R,O,$,J,W,I);else if(lt&6){O.slotScopeIds=W;const At=b(R);if(q?mt=L(R):Jc(R)&&R.data==="teleport start"?mt=L(R,R.data,"teleport end"):mt=w(R),a(O,At,null,$,J,Zc(At),I),Wi(O)){let Ct;q?(Ct=Kt(ze),Ct.anchor=mt?mt.previousSibling:At.lastChild):Ct=R.nodeType===3?ro(""):Kt("div"),Ct.el=R,O.component.subTree=Ct}}else lt&64?Tt!==8?mt=Z():mt=O.type.hydrate(R,O,$,J,W,I,s,D):lt&128&&(mt=O.type.hydrate(R,O,$,J,Zc(b(R)),W,I,s,v))}return X!=null&&Cl(X,null,J,O),mt},A=(R,O,$,J,W,I)=>{I=I||!!O.dynamicChildren;const{type:q,props:Z,patchFlag:st,shapeFlag:X,dirs:lt,transition:Lt}=O,Tt=q==="input"&&lt||q==="option";if(Tt||st!==-1){if(lt&&oo(O,null,$,"created"),Z)if(Tt||!I||st&48)for(const Ct in Z)(Tt&&Ct.endsWith("value")||Ca(Ct)&&!ta(Ct))&&p(R,Ct,null,Z[Ct],!1,void 0,$);else Z.onClick&&p(R,"onClick",null,Z.onClick,!1,void 0,$);let mt;(mt=Z&&Z.onVnodeBeforeMount)&&Ze(mt,$,O);let At=!1;if(j(R)){At=i1(J,Lt)&&$&&$.vnode.props&&$.vnode.props.appear;const Ct=R.content.firstChild;At&&Lt.beforeEnter(Ct),V(Ct,R,$),O.el=R=Ct}if(lt&&oo(O,null,$,"beforeMount"),((mt=Z&&Z.onVnodeMounted)||lt||At)&&Ny(()=>{mt&&Ze(mt,$,O),At&&Lt.enter(R),lt&&oo(O,null,$,"mounted")},J),X&16&&!(Z&&(Z.innerHTML||Z.textContent))){let Ct=D(R.firstChild,O,R,$,J,W,I);for(;Ct;){Vo=!0;const St=Ct;Ct=Ct.nextSibling,C(St)}}else X&8&&R.textContent!==O.children&&(Vo=!0,R.textContent=O.children)}return R.nextSibling},D=(R,O,$,J,W,I,q)=>{q=q||!!O.dynamicChildren;const Z=O.children,st=Z.length;for(let X=0;X<st;X++){const lt=q?Z[X]:Z[X]=un(Z[X]);if(R)R=v(R,lt,J,W,I,q);else{if(lt.type===Zi&&!lt.children)continue;Vo=!0,d(null,lt,$,null,J,W,Zc($),I)}}return R},N=(R,O,$,J,W,I)=>{const{slotScopeIds:q}=O;q&&(W=W?W.concat(q):q);const Z=b(R),st=D(w(R),O,Z,$,J,W,I);return st&&Jc(st)&&st.data==="]"?w(O.anchor=st):(Vo=!0,m(O.anchor=y("]"),Z,st),st)},B=(R,O,$,J,W,I)=>{if(Vo=!0,O.el=null,I){const st=L(R);for(;;){const X=w(R);if(X&&X!==st)C(X);else break}}const q=w(R),Z=b(R);return C(R),d(null,O,Z,q,$,J,Zc(Z),W),q},L=(R,O="[",$="]")=>{let J=0;for(;R;)if(R=w(R),R&&Jc(R)&&(R.data===O&&J++,R.data===$)){if(J===0)return w(R);J--}return R},V=(R,O,$)=>{const J=O.parentNode;J&&J.replaceChild(R,O);let W=$;for(;W;)W.vnode.el===O&&(W.vnode.el=W.subTree.el=R),W=W.parent},j=R=>R.nodeType===1&&R.tagName.toLowerCase()==="template";return[x,v]}const Re=Ny;function e1(s){return o1(s)}function n1(s){return o1(s,jL)}function o1(s,a){const d=Yh();d.__VUE__=!0;const{insert:p,remove:f,patchProp:w,createElement:b,createText:C,createComment:m,setText:y,setElementText:x,parentNode:v,nextSibling:A,setScopeId:D=qn,insertStaticContent:N}=s,B=(z,F,H,Q=null,tt=null,ot=null,kt=!1,ct=null,ut=!!F.dynamicChildren)=>{if(z===F)return;z&&!$n(z,F)&&(Q=G(z),de(z,tt,ot,!0),z=null),F.patchFlag===-2&&(ut=!1,F.dynamicChildren=null);const{type:et,ref:ht,shapeFlag:pt}=F;switch(et){case Zi:L(z,F,H,Q);break;case He:V(z,F,H,Q);break;case Gi:z==null&&j(F,H,Q,kt);break;case ze:X(z,F,H,Q,tt,ot,kt,ct,ut);break;default:pt&1?$(z,F,H,Q,tt,ot,kt,ct,ut):pt&6?lt(z,F,H,Q,tt,ot,kt,ct,ut):(pt&64||pt&128)&&et.process(z,F,H,Q,tt,ot,kt,ct,ut,dt)}ht!=null&&tt&&Cl(ht,z&&z.ref,ot,F||z,!F)},L=(z,F,H,Q)=>{if(z==null)p(F.el=C(F.children),H,Q);else{const tt=F.el=z.el;F.children!==z.children&&y(tt,F.children)}},V=(z,F,H,Q)=>{z==null?p(F.el=m(F.children||""),H,Q):F.el=z.el},j=(z,F,H,Q)=>{[z.el,z.anchor]=N(z.children,F,H,Q,z.el,z.anchor)},R=({el:z,anchor:F},H,Q)=>{let tt;for(;z&&z!==F;)tt=A(z),p(z,H,Q),z=tt;p(F,H,Q)},O=({el:z,anchor:F})=>{let H;for(;z&&z!==F;)H=A(z),f(z),z=H;f(F)},$=(z,F,H,Q,tt,ot,kt,ct,ut)=>{kt=kt||F.type==="svg",z==null?J(F,H,Q,tt,ot,kt,ct,ut):q(z,F,tt,ot,kt,ct,ut)},J=(z,F,H,Q,tt,ot,kt,ct)=>{let ut,et;const{type:ht,props:pt,shapeFlag:vt,transition:Ot,dirs:It}=z;if(ut=z.el=b(z.type,ot,pt&&pt.is,pt),vt&8?x(ut,z.children):vt&16&&I(z.children,ut,null,Q,tt,ot&&ht!=="foreignObject",kt,ct),It&&oo(z,null,Q,"created"),W(ut,z,z.scopeId,kt,Q),pt){for(const qt in pt)qt!=="value"&&!ta(qt)&&w(ut,qt,null,pt[qt],ot,z.children,Q,tt,jt);"value"in pt&&w(ut,"value",null,pt.value),(et=pt.onVnodeBeforeMount)&&Ze(et,Q,z)}It&&oo(z,null,Q,"beforeMount");const zt=i1(tt,Ot);zt&&Ot.beforeEnter(ut),p(ut,F,H),((et=pt&&pt.onVnodeMounted)||zt||It)&&Re(()=>{et&&Ze(et,Q,z),zt&&Ot.enter(ut),It&&oo(z,null,Q,"mounted")},tt)},W=(z,F,H,Q,tt)=>{if(H&&D(z,H),Q)for(let ot=0;ot<Q.length;ot++)D(z,Q[ot]);if(tt){let ot=tt.subTree;if(F===ot){const kt=tt.vnode;W(z,kt,kt.scopeId,kt.slotScopeIds,tt.parent)}}},I=(z,F,H,Q,tt,ot,kt,ct,ut=0)=>{for(let et=ut;et<z.length;et++){const ht=z[et]=ct?Go(z[et]):un(z[et]);B(null,ht,F,H,Q,tt,ot,kt,ct)}},q=(z,F,H,Q,tt,ot,kt)=>{const ct=F.el=z.el;let{patchFlag:ut,dynamicChildren:et,dirs:ht}=F;ut|=z.patchFlag&16;const pt=z.props||se,vt=F.props||se;let Ot;H&&Ri(H,!1),(Ot=vt.onVnodeBeforeUpdate)&&Ze(Ot,H,F,z),ht&&oo(F,z,H,"beforeUpdate"),H&&Ri(H,!0);const It=tt&&F.type!=="foreignObject";if(et?Z(z.dynamicChildren,et,ct,H,Q,It,ot):kt||Ct(z,F,ct,null,H,Q,It,ot,!1),ut>0){if(ut&16)st(ct,F,pt,vt,H,Q,tt);else if(ut&2&&pt.class!==vt.class&&w(ct,"class",null,vt.class,tt),ut&4&&w(ct,"style",pt.style,vt.style,tt),ut&8){const zt=F.dynamicProps;for(let qt=0;qt<zt.length;qt++){const fe=zt[qt],nn=pt[fe],mn=vt[fe];(mn!==nn||fe==="value")&&w(ct,fe,nn,mn,tt,z.children,H,Q,jt)}}ut&1&&z.children!==F.children&&x(ct,F.children)}else!kt&&et==null&&st(ct,F,pt,vt,H,Q,tt);((Ot=vt.onVnodeUpdated)||ht)&&Re(()=>{Ot&&Ze(Ot,H,F,z),ht&&oo(F,z,H,"updated")},Q)},Z=(z,F,H,Q,tt,ot,kt)=>{for(let ct=0;ct<F.length;ct++){const ut=z[ct],et=F[ct],ht=ut.el&&(ut.type===ze||!$n(ut,et)||ut.shapeFlag&70)?v(ut.el):H;B(ut,et,ht,null,Q,tt,ot,kt,!0)}},st=(z,F,H,Q,tt,ot,kt)=>{if(H!==Q){if(H!==se)for(const ct in H)!ta(ct)&&!(ct in Q)&&w(z,ct,H[ct],null,kt,F.children,tt,ot,jt);for(const ct in Q){if(ta(ct))continue;const ut=Q[ct],et=H[ct];ut!==et&&ct!=="value"&&w(z,ct,et,ut,kt,F.children,tt,ot,jt)}"value"in Q&&w(z,"value",H.value,Q.value)}},X=(z,F,H,Q,tt,ot,kt,ct,ut)=>{const et=F.el=z?z.el:C(""),ht=F.anchor=z?z.anchor:C("");let{patchFlag:pt,dynamicChildren:vt,slotScopeIds:Ot}=F;Ot&&(ct=ct?ct.concat(Ot):Ot),z==null?(p(et,H,Q),p(ht,H,Q),I(F.children,H,ht,tt,ot,kt,ct,ut)):pt>0&&pt&64&&vt&&z.dynamicChildren?(Z(z.dynamicChildren,vt,H,tt,ot,kt,ct),(F.key!=null||tt&&F===tt.subTree)&&Gp(z,F,!0)):Ct(z,F,H,ht,tt,ot,kt,ct,ut)},lt=(z,F,H,Q,tt,ot,kt,ct,ut)=>{F.slotScopeIds=ct,z==null?F.shapeFlag&512?tt.ctx.activate(F,H,Q,kt,ut):Lt(F,H,Q,tt,ot,kt,ut):Tt(z,F,ut)},Lt=(z,F,H,Q,tt,ot,kt)=>{const ct=z.component=u1(z,Q,tt);if(Ta(z)&&(ct.ctx.renderer=dt),p1(ct),ct.asyncDep){if(tt&&tt.registerDep(ct,mt),!z.el){const ut=ct.subTree=Kt(He);V(null,ut,F,H)}return}mt(ct,z,F,H,tt,ot,kt)},Tt=(z,F,H)=>{const Q=F.component=z.component;if(H4(z,F,H))if(Q.asyncDep&&!Q.asyncResolved){At(Q,F,H);return}else Q.next=F,B4(Q.update),Q.update();else F.el=z.el,Q.vnode=F},mt=(z,F,H,Q,tt,ot,kt)=>{const ct=()=>{if(z.isMounted){let{next:ht,bu:pt,u:vt,parent:Ot,vnode:It}=z,zt=ht,qt;Ri(z,!1),ht?(ht.el=It.el,At(z,ht,kt)):ht=It,pt&&Hr(pt),(qt=ht.props&&ht.props.onVnodeBeforeUpdate)&&Ze(qt,Ot,ht,It),Ri(z,!0);const fe=cl(z),nn=z.subTree;z.subTree=fe,B(nn,fe,v(nn.el),G(nn),z,tt,ot),ht.el=fe.el,zt===null&&jp(z,fe.el),vt&&Re(vt,tt),(qt=ht.props&&ht.props.onVnodeUpdated)&&Re(()=>Ze(qt,Ot,ht,It),tt)}else{let ht;const{el:pt,props:vt}=F,{bm:Ot,m:It,parent:zt}=z,qt=Wi(F);if(Ri(z,!1),Ot&&Hr(Ot),!qt&&(ht=vt&&vt.onVnodeBeforeMount)&&Ze(ht,zt,F),Ri(z,!0),pt&&Nt){const fe=()=>{z.subTree=cl(z),Nt(pt,z.subTree,z,tt,null)};qt?F.type.__asyncLoader().then(()=>!z.isUnmounted&&fe()):fe()}else{const fe=z.subTree=cl(z);B(null,fe,H,Q,z,tt,ot),F.el=fe.el}if(It&&Re(It,tt),!qt&&(ht=vt&&vt.onVnodeMounted)){const fe=F;Re(()=>Ze(ht,zt,fe),tt)}(F.shapeFlag&256||zt&&Wi(zt.vnode)&&zt.vnode.shapeFlag&256)&&z.a&&Re(z.a,tt),z.isMounted=!0,F=H=Q=null}},ut=z.effect=new Wr(ct,()=>Fl(et),z.scope),et=z.update=()=>ut.run();et.id=z.uid,Ri(z,!0),et()},At=(z,F,H)=>{F.component=z;const Q=z.vnode.props;z.vnode=F,z.next=null,PL(z,F.props,Q,H),zL(z,F.children,H),as(),D0(),cs()},Ct=(z,F,H,Q,tt,ot,kt,ct,ut=!1)=>{const et=z&&z.children,ht=z?z.shapeFlag:0,pt=F.children,{patchFlag:vt,shapeFlag:Ot}=F;if(vt>0){if(vt&128){Ie(et,pt,H,Q,tt,ot,kt,ct,ut);return}else if(vt&256){St(et,pt,H,Q,tt,ot,kt,ct,ut);return}}Ot&8?(ht&16&&jt(et,tt,ot),pt!==et&&x(H,pt)):ht&16?Ot&16?Ie(et,pt,H,Q,tt,ot,kt,ct,ut):jt(et,tt,ot,!0):(ht&8&&x(H,""),Ot&16&&I(pt,H,Q,tt,ot,kt,ct,ut))},St=(z,F,H,Q,tt,ot,kt,ct,ut)=>{z=z||Fr,F=F||Fr;const et=z.length,ht=F.length,pt=Math.min(et,ht);let vt;for(vt=0;vt<pt;vt++){const Ot=F[vt]=ut?Go(F[vt]):un(F[vt]);B(z[vt],Ot,H,null,tt,ot,kt,ct,ut)}et>ht?jt(z,tt,ot,!0,!1,pt):I(F,H,Q,tt,ot,kt,ct,ut,pt)},Ie=(z,F,H,Q,tt,ot,kt,ct,ut)=>{let et=0;const ht=F.length;let pt=z.length-1,vt=ht-1;for(;et<=pt&&et<=vt;){const Ot=z[et],It=F[et]=ut?Go(F[et]):un(F[et]);if($n(Ot,It))B(Ot,It,H,null,tt,ot,kt,ct,ut);else break;et++}for(;et<=pt&&et<=vt;){const Ot=z[pt],It=F[vt]=ut?Go(F[vt]):un(F[vt]);if($n(Ot,It))B(Ot,It,H,null,tt,ot,kt,ct,ut);else break;pt--,vt--}if(et>pt){if(et<=vt){const Ot=vt+1,It=Ot<ht?F[Ot].el:Q;for(;et<=vt;)B(null,F[et]=ut?Go(F[et]):un(F[et]),H,It,tt,ot,kt,ct,ut),et++}}else if(et>vt)for(;et<=pt;)de(z[et],tt,ot,!0),et++;else{const Ot=et,It=et,zt=new Map;for(et=It;et<=vt;et++){const je=F[et]=ut?Go(F[et]):un(F[et]);je.key!=null&&zt.set(je.key,et)}let qt,fe=0;const nn=vt-It+1;let mn=!1,Pa=0;const hi=new Array(nn);for(et=0;et<nn;et++)hi[et]=0;for(et=Ot;et<=pt;et++){const je=z[et];if(fe>=nn){de(je,tt,ot,!0);continue}let De;if(je.key!=null)De=zt.get(je.key);else for(qt=It;qt<=vt;qt++)if(hi[qt-It]===0&&$n(je,F[qt])){De=qt;break}De===void 0?de(je,tt,ot,!0):(hi[De-It]=et+1,De>=Pa?Pa=De:mn=!0,B(je,F[De],H,null,tt,ot,kt,ct,ut),fe++)}const La=mn?FL(hi):Fr;for(qt=La.length-1,et=nn-1;et>=0;et--){const je=It+et,De=F[je],Me=je+1<ht?F[je+1].el:Q;hi[et]===0?B(null,De,H,Me,tt,ot,kt,ct,ut):mn&&(qt<0||et!==La[qt]?_e(De,H,Me,2):qt--)}}},_e=(z,F,H,Q,tt=null)=>{const{el:ot,type:kt,transition:ct,children:ut,shapeFlag:et}=z;if(et&6){_e(z.component.subTree,F,H,Q);return}if(et&128){z.suspense.move(F,H,Q);return}if(et&64){kt.move(z,F,H,dt);return}if(kt===ze){p(ot,F,H);for(let pt=0;pt<ut.length;pt++)_e(ut[pt],F,H,Q);p(z.anchor,F,H);return}if(kt===Gi){R(z,F,H);return}if(Q!==2&&et&1&&ct)if(Q===0)ct.beforeEnter(ot),p(ot,F,H),Re(()=>ct.enter(ot),tt);else{const{leave:pt,delayLeave:vt,afterLeave:Ot}=ct,It=()=>p(ot,F,H),zt=()=>{pt(ot,()=>{It(),Ot&&Ot()})};vt?vt(ot,It,zt):zt()}else p(ot,F,H)},de=(z,F,H,Q=!1,tt=!1)=>{const{type:ot,props:kt,ref:ct,children:ut,dynamicChildren:et,shapeFlag:ht,patchFlag:pt,dirs:vt}=z;if(ct!=null&&Cl(ct,null,H,z,!0),ht&256){F.ctx.deactivate(z);return}const Ot=ht&1&&vt,It=!Wi(z);let zt;if(It&&(zt=kt&&kt.onVnodeBeforeUnmount)&&Ze(zt,F,z),ht&6)Ht(z.component,H,Q);else{if(ht&128){z.suspense.unmount(H,Q);return}Ot&&oo(z,null,F,"beforeUnmount"),ht&64?z.type.remove(z,F,H,tt,dt,Q):et&&(ot!==ze||pt>0&&pt&64)?jt(et,F,H,!1,!0):(ot===ze&&pt&384||!tt&&ht&16)&&jt(ut,F,H),Q&&at(z)}(It&&(zt=kt&&kt.onVnodeUnmounted)||Ot)&&Re(()=>{zt&&Ze(zt,F,z),Ot&&oo(z,null,F,"unmounted")},H)},at=z=>{const{type:F,el:H,anchor:Q,transition:tt}=z;if(F===ze){Mt(H,Q);return}if(F===Gi){O(z);return}const ot=()=>{f(H),tt&&!tt.persisted&&tt.afterLeave&&tt.afterLeave()};if(z.shapeFlag&1&&tt&&!tt.persisted){const{leave:kt,delayLeave:ct}=tt,ut=()=>kt(H,ot);ct?ct(z.el,ot,ut):ut()}else ot()},Mt=(z,F)=>{let H;for(;z!==F;)H=A(z),f(z),z=H;f(F)},Ht=(z,F,H)=>{const{bum:Q,scope:tt,update:ot,subTree:kt,um:ct}=z;Q&&Hr(Q),tt.stop(),ot&&(ot.active=!1,de(kt,z,F,H)),ct&&Re(ct,F),Re(()=>{z.isUnmounted=!0},F),F&&F.pendingBranch&&!F.isUnmounted&&z.asyncDep&&!z.asyncResolved&&z.suspenseId===F.pendingId&&(F.deps--,F.deps===0&&F.resolve())},jt=(z,F,H,Q=!1,tt=!1,ot=0)=>{for(let kt=ot;kt<z.length;kt++)de(z[kt],F,H,Q,tt)},G=z=>z.shapeFlag&6?G(z.component.subTree):z.shapeFlag&128?z.suspense.next():A(z.anchor||z.el),ft=(z,F,H)=>{z==null?F._vnode&&de(F._vnode,null,null,!0):B(F._vnode||null,z,F,null,null,null,H),D0(),_l(),F._vnode=z},dt={p:B,um:de,m:_e,r:at,mt:Lt,mc:I,pc:Ct,pbc:Z,n:G,o:s};let wt,Nt;return a&&([wt,Nt]=a(dt)),{render:ft,hydrate:wt,createApp:NL(ft,wt)}}function Ri({effect:s,update:a},d){s.allowRecurse=a.allowRecurse=d}function i1(s,a){return(!s||s&&!s.pendingBranch)&&a&&!a.persisted}function Gp(s,a,d=!1){const p=s.children,f=a.children;if(yt(p)&&yt(f))for(let w=0;w<p.length;w++){const b=p[w];let C=f[w];C.shapeFlag&1&&!C.dynamicChildren&&((C.patchFlag<=0||C.patchFlag===32)&&(C=f[w]=Go(f[w]),C.el=b.el),d||Gp(b,C)),C.type===Zi&&(C.el=b.el)}}function FL(s){const a=s.slice(),d=[0];let p,f,w,b,C;const m=s.length;for(p=0;p<m;p++){const y=s[p];if(y!==0){if(f=d[d.length-1],s[f]<y){a[p]=f,d.push(p);continue}for(w=0,b=d.length-1;w<b;)C=w+b>>1,s[d[C]]<y?w=C+1:b=C;y<s[d[w]]&&(w>0&&(a[p]=d[w-1]),d[w]=p)}}for(w=d.length,b=d[w-1];w-- >0;)d[w]=b,b=a[b];return d}const VL=s=>s.__isTeleport,ia=s=>s&&(s.disabled||s.disabled===""),j0=s=>typeof SVGElement<"u"&&s instanceof SVGElement,rp=(s,a)=>{const d=s&&s.to;return ge(d)?a?a(d):null:d},HL={__isTeleport:!0,process(s,a,d,p,f,w,b,C,m,y){const{mc:x,pc:v,pbc:A,o:{insert:D,querySelector:N,createText:B,createComment:L}}=y,V=ia(a.props);let{shapeFlag:j,children:R,dynamicChildren:O}=a;if(s==null){const $=a.el=B(""),J=a.anchor=B("");D($,d,p),D(J,d,p);const W=a.target=rp(a.props,N),I=a.targetAnchor=B("");W&&(D(I,W),b=b||j0(W));const q=(Z,st)=>{j&16&&x(R,Z,st,f,w,b,C,m)};V?q(d,J):W&&q(W,I)}else{a.el=s.el;const $=a.anchor=s.anchor,J=a.target=s.target,W=a.targetAnchor=s.targetAnchor,I=ia(s.props),q=I?d:J,Z=I?$:W;if(b=b||j0(J),O?(A(s.dynamicChildren,O,q,f,w,b,C),Gp(s,a,!0)):m||v(s,a,q,Z,f,w,b,C,!1),V)I?a.props&&s.props&&a.props.to!==s.props.to&&(a.props.to=s.props.to):Xc(a,d,$,y,1);else if((a.props&&a.props.to)!==(s.props&&s.props.to)){const st=a.target=rp(a.props,N);st&&Xc(a,st,null,y,0)}else I&&Xc(a,J,W,y,1)}r1(a)},remove(s,a,d,p,{um:f,o:{remove:w}},b){const{shapeFlag:C,children:m,anchor:y,targetAnchor:x,target:v,props:A}=s;if(v&&w(x),b&&w(y),C&16){const D=b||!ia(A);for(let N=0;N<m.length;N++){const B=m[N];f(B,a,d,D,!!B.dynamicChildren)}}},move:Xc,hydrate:UL};function Xc(s,a,d,{o:{insert:p},m:f},w=2){w===0&&p(s.targetAnchor,a,d);const{el:b,anchor:C,shapeFlag:m,children:y,props:x}=s,v=w===2;if(v&&p(b,a,d),(!v||ia(x))&&m&16)for(let A=0;A<y.length;A++)f(y[A],a,d,2);v&&p(C,a,d)}function UL(s,a,d,p,f,w,{o:{nextSibling:b,parentNode:C,querySelector:m}},y){const x=a.target=rp(a.props,m);if(x){const v=x._lpa||x.firstChild;if(a.shapeFlag&16)if(ia(a.props))a.anchor=y(b(s),a,C(s),d,p,f,w),a.targetAnchor=v;else{a.anchor=b(s);let A=v;for(;A;)if(A=b(A),A&&A.nodeType===8&&A.data==="teleport anchor"){a.targetAnchor=A,x._lpa=a.targetAnchor&&b(a.targetAnchor);break}y(v,a,x,d,p,f,w)}r1(a)}return a.anchor&&b(a.anchor)}const $L=HL;function r1(s){const a=s.ctx;if(a&&a.ut){let d=s.children[0].el;for(;d&&d!==s.targetAnchor;)d.nodeType===1&&d.setAttribute("data-v-owner",a.uid),d=d.nextSibling;a.ut()}}const ze=Symbol.for("v-fgt"),Zi=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),Gi=Symbol.for("v-stc"),ra=[];let Xe=null;function Nn(s=!1){ra.push(Xe=s?null:[])}function s1(){ra.pop(),Xe=ra[ra.length-1]||null}let Ji=1;function sp(s){Ji+=s}function a1(s){return s.dynamicChildren=Ji>0?Xe||Fr:null,s1(),Ji>0&&Xe&&Xe.push(s),s}function To(s,a,d,p,f,w){return a1(Vt(s,a,d,p,f,w,!0))}function Kp(s,a,d,p,f){return a1(Kt(s,a,d,p,f,!0))}function oi(s){return s?s.__v_isVNode===!0:!1}function $n(s,a){return s.type===a.type&&s.key===a.key}function qL(s){}const Kl="__vInternal",c1=({key:s})=>s??null,dl=({ref:s,ref_key:a,ref_for:d})=>(typeof s=="number"&&(s=""+s),s!=null?ge(s)||Se(s)||Pt(s)?{i:Oe,r:s,k:a,f:!!d}:s:null);function Vt(s,a=null,d=null,p=0,f=null,w=s===ze?0:1,b=!1,C=!1){const m={__v_isVNode:!0,__v_skip:!0,type:s,props:a,key:a&&c1(a),ref:a&&dl(a),scopeId:Hl,slotScopeIds:null,children:d,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:w,patchFlag:p,dynamicProps:f,dynamicChildren:null,appContext:null,ctx:Oe};return C?(Yp(m,d),w&128&&s.normalize(m)):d&&(m.shapeFlag|=ge(d)?8:16),Ji>0&&!b&&Xe&&(m.patchFlag>0||w&6)&&m.patchFlag!==32&&Xe.push(m),m}const Kt=WL;function WL(s,a=null,d=null,p=0,f=null,w=!1){if((!s||s===Iy)&&(s=He),oi(s)){const C=co(s,a,!0);return d&&Yp(C,d),Ji>0&&!w&&Xe&&(C.shapeFlag&6?Xe[Xe.indexOf(s)]=C:Xe.push(C)),C.patchFlag|=-2,C}if(t3(s)&&(s=s.__vccOpts),a){a=l1(a);let{class:C,style:m}=a;C&&!ge(C)&&(a.class=Ea(C)),ae(m)&&(Bp(m)&&!yt(m)&&(m=pe({},m)),a.style=ya(m))}const b=ge(s)?1:My(s)?128:VL(s)?64:ae(s)?4:Pt(s)?2:0;return Vt(s,a,d,p,f,b,w,!0)}function l1(s){return s?Bp(s)||Kl in s?pe({},s):s:null}function co(s,a,d=!1){const{props:p,ref:f,patchFlag:w,children:b}=s,C=a?d1(p||{},a):p;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:C,key:C&&c1(C),ref:a&&a.ref?d&&f?yt(f)?f.concat(dl(a)):[f,dl(a)]:dl(a):f,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:b,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:a&&s.type!==ze?w===-1?16:w|16:w,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&co(s.ssContent),ssFallback:s.ssFallback&&co(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function ro(s=" ",a=0){return Kt(Zi,null,s,a)}function Yl(s,a){const d=Kt(Gi,null,s);return d.staticCount=a,d}function GL(s="",a=!1){return a?(Nn(),Kp(He,null,s)):Kt(He,null,s)}function un(s){return s==null||typeof s=="boolean"?Kt(He):yt(s)?Kt(ze,null,s.slice()):typeof s=="object"?Go(s):Kt(Zi,null,String(s))}function Go(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:co(s)}function Yp(s,a){let d=0;const{shapeFlag:p}=s;if(a==null)a=null;else if(yt(a))d=16;else if(typeof a=="object")if(p&65){const f=a.default;f&&(f._c&&(f._d=!1),Yp(s,f()),f._c&&(f._d=!0));return}else{d=32;const f=a._;!f&&!(Kl in a)?a._ctx=Oe:f===3&&Oe&&(Oe.slots._===1?a._=1:(a._=2,s.patchFlag|=1024))}else Pt(a)?(a={default:a,_ctx:Oe},d=32):(a=String(a),p&64?(d=16,a=[ro(a)]):d=8);s.children=a,s.shapeFlag|=d}function d1(...s){const a={};for(let d=0;d<s.length;d++){const p=s[d];for(const f in p)if(f==="class")a.class!==p.class&&(a.class=Ea([a.class,p.class]));else if(f==="style")a.style=ya([a.style,p.style]);else if(Ca(f)){const w=a[f],b=p[f];b&&w!==b&&!(yt(w)&&w.includes(b))&&(a[f]=w?[].concat(w,b):b)}else f!==""&&(a[f]=p[f])}return a}function Ze(s,a,d,p=null){hn(s,a,7,[d,p])}const KL=Yy();let YL=0;function u1(s,a,d){const p=s.type,f=(a?a.appContext:s.appContext)||KL,w={uid:YL++,vnode:s,type:p,parent:a,appContext:f,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(f.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zy(p,f),emitsOptions:Ty(p,f),emit:null,emitted:null,propsDefaults:se,inheritAttrs:p.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:d,suspenseId:d?d.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return w.ctx={_:w},w.root=a?a.root:w,w.emit=P4.bind(null,w),s.ce&&s.ce(w),w}let xe=null;const So=()=>xe||Oe;let Qp,Mr,F0="__VUE_INSTANCE_SETTERS__";(Mr=Yh()[F0])||(Mr=Yh()[F0]=[]),Mr.push(s=>xe=s),Qp=s=>{Mr.length>1?Mr.forEach(a=>a(s)):Mr[0](s)};const ii=s=>{Qp(s),s.scope.on()},Xo=()=>{xe&&xe.scope.off(),Qp(null)};function h1(s){return s.vnode.shapeFlag&4}let Kr=!1;function p1(s,a=!1){Kr=a;const{props:d,children:p}=s.vnode,f=h1(s);OL(s,d,f,a),RL(s,p);const w=f?QL(s,a):void 0;return Kr=!1,w}function QL(s,a){const d=s.type;s.accessCache=Object.create(null),s.proxy=Op(new Proxy(s.ctx,ep));const{setup:p}=d;if(p){const f=s.setupContext=p.length>1?f1(s):null;ii(s),as();const w=vo(p,s,0,[s.props,f]);if(cs(),Xo(),xp(w)){if(w.then(Xo,Xo),a)return w.then(b=>{ap(s,b,a)}).catch(b=>{nr(b,s,0)});s.asyncDep=w}else ap(s,w,a)}else g1(s,a)}function ap(s,a,d){Pt(a)?s.type.__ssrInlineRender?s.ssrRender=a:s.render=a:ae(a)&&(s.setupState=Rp(a)),g1(s,d)}let vl,cp;function ZL(s){vl=s,cp=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,uL))}}const JL=()=>!vl;function g1(s,a,d){const p=s.type;if(!s.render){if(!a&&vl&&!p.render){const f=p.template||qp(s).template;if(f){const{isCustomElement:w,compilerOptions:b}=s.appContext.config,{delimiters:C,compilerOptions:m}=p,y=pe(pe({isCustomElement:w,delimiters:C},b),m);p.render=vl(f,y)}}s.render=p.render||qn,cp&&cp(s)}{ii(s),as();try{xL(s)}finally{cs(),Xo()}}}function XL(s){return s.attrsProxy||(s.attrsProxy=new Proxy(s.attrs,{get(a,d){return en(s,"get","$attrs"),a[d]}}))}function f1(s){const a=d=>{s.exposed=d||{}};return{get attrs(){return XL(s)},slots:s.slots,emit:s.emit,expose:a}}function Ql(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Rp(Op(s.exposed)),{get(a,d){if(d in a)return a[d];if(d in na)return na[d](s)},has(a,d){return d in a||d in na}}))}function lp(s,a=!0){return Pt(s)?s.displayName||s.name:s.name||a&&s.__name}function t3(s){return Pt(s)&&"__vccOpts"in s}const En=(s,a)=>T4(s,a,Kr);function Zl(s,a,d){const p=arguments.length;return p===2?ae(a)&&!yt(a)?oi(a)?Kt(s,null,[a]):Kt(s,a):Kt(s,null,a):(p>3?d=Array.prototype.slice.call(arguments,2):p===3&&oi(d)&&(d=[d]),Kt(s,a,d))}const m1=Symbol.for("v-scx"),k1=()=>Dn(m1);function e3(){}function n3(s,a,d,p){const f=d[p];if(f&&b1(f,s))return f;const w=a();return w.memo=s.slice(),d[p]=w}function b1(s,a){const d=s.memo;if(d.length!=a.length)return!1;for(let p=0;p<d.length;p++)if(ti(d[p],a[p]))return!1;return Ji>0&&Xe&&Xe.push(s),!0}const w1="3.3.8",o3={createComponentInstance:u1,setupComponent:p1,renderComponentRoot:cl,setCurrentRenderingInstance:fa,isVNode:oi,normalizeVNode:un},i3=o3,r3=null,s3=null,a3="http://www.w3.org/2000/svg",Fi=typeof document<"u"?document:null,V0=Fi&&Fi.createElement("template"),c3={insert:(s,a,d)=>{a.insertBefore(s,d||null)},remove:s=>{const a=s.parentNode;a&&a.removeChild(s)},createElement:(s,a,d,p)=>{const f=a?Fi.createElementNS(a3,s):Fi.createElement(s,d?{is:d}:void 0);return s==="select"&&p&&p.multiple!=null&&f.setAttribute("multiple",p.multiple),f},createText:s=>Fi.createTextNode(s),createComment:s=>Fi.createComment(s),setText:(s,a)=>{s.nodeValue=a},setElementText:(s,a)=>{s.textContent=a},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Fi.querySelector(s),setScopeId(s,a){s.setAttribute(a,"")},insertStaticContent(s,a,d,p,f,w){const b=d?d.previousSibling:a.lastChild;if(f&&(f===w||f.nextSibling))for(;a.insertBefore(f.cloneNode(!0),d),!(f===w||!(f=f.nextSibling)););else{V0.innerHTML=p?`<svg>${s}</svg>`:s;const C=V0.content;if(p){const m=C.firstChild;for(;m.firstChild;)C.appendChild(m.firstChild);C.removeChild(m)}a.insertBefore(C,d)}return[b?b.nextSibling:a.firstChild,d?d.previousSibling:a.lastChild]}},Ho="transition",Ws="animation",Yr=Symbol("_vtc"),Zp=(s,{slots:a})=>Zl(Py,A1(s),a);Zp.displayName="Transition";const _1={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},l3=Zp.props=pe({},$p,_1),zi=(s,a=[])=>{yt(s)?s.forEach(d=>d(...a)):s&&s(...a)},H0=s=>s?yt(s)?s.some(a=>a.length>1):s.length>1:!1;function A1(s){const a={};for(const X in s)X in _1||(a[X]=s[X]);if(s.css===!1)return a;const{name:d="v",type:p,duration:f,enterFromClass:w=`${d}-enter-from`,enterActiveClass:b=`${d}-enter-active`,enterToClass:C=`${d}-enter-to`,appearFromClass:m=w,appearActiveClass:y=b,appearToClass:x=C,leaveFromClass:v=`${d}-leave-from`,leaveActiveClass:A=`${d}-leave-active`,leaveToClass:D=`${d}-leave-to`}=s,N=d3(f),B=N&&N[0],L=N&&N[1],{onBeforeEnter:V,onEnter:j,onEnterCancelled:R,onLeave:O,onLeaveCancelled:$,onBeforeAppear:J=V,onAppear:W=j,onAppearCancelled:I=R}=a,q=(X,lt,Lt)=>{qo(X,lt?x:C),qo(X,lt?y:b),Lt&&Lt()},Z=(X,lt)=>{X._isLeaving=!1,qo(X,v),qo(X,D),qo(X,A),lt&&lt()},st=X=>(lt,Lt)=>{const Tt=X?W:j,mt=()=>q(lt,X,Lt);zi(Tt,[lt,mt]),U0(()=>{qo(lt,X?m:w),wo(lt,X?x:C),H0(Tt)||$0(lt,p,B,mt)})};return pe(a,{onBeforeEnter(X){zi(V,[X]),wo(X,w),wo(X,b)},onBeforeAppear(X){zi(J,[X]),wo(X,m),wo(X,y)},onEnter:st(!1),onAppear:st(!0),onLeave(X,lt){X._isLeaving=!0;const Lt=()=>Z(X,lt);wo(X,v),v1(),wo(X,A),U0(()=>{X._isLeaving&&(qo(X,v),wo(X,D),H0(O)||$0(X,p,L,Lt))}),zi(O,[X,Lt])},onEnterCancelled(X){q(X,!1),zi(R,[X])},onAppearCancelled(X){q(X,!0),zi(I,[X])},onLeaveCancelled(X){Z(X),zi($,[X])}})}function d3(s){if(s==null)return null;if(ae(s))return[Th(s.enter),Th(s.leave)];{const a=Th(s);return[a,a]}}function Th(s){return ml(s)}function wo(s,a){a.split(/\s+/).forEach(d=>d&&s.classList.add(d)),(s[Yr]||(s[Yr]=new Set)).add(a)}function qo(s,a){a.split(/\s+/).forEach(p=>p&&s.classList.remove(p));const d=s[Yr];d&&(d.delete(a),d.size||(s[Yr]=void 0))}function U0(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let u3=0;function $0(s,a,d,p){const f=s._endId=++u3,w=()=>{f===s._endId&&p()};if(d)return setTimeout(w,d);const{type:b,timeout:C,propCount:m}=C1(s,a);if(!b)return p();const y=b+"end";let x=0;const v=()=>{s.removeEventListener(y,A),w()},A=D=>{D.target===s&&++x>=m&&v()};setTimeout(()=>{x<m&&v()},C+1),s.addEventListener(y,A)}function C1(s,a){const d=window.getComputedStyle(s),p=N=>(d[N]||"").split(", "),f=p(`${Ho}Delay`),w=p(`${Ho}Duration`),b=q0(f,w),C=p(`${Ws}Delay`),m=p(`${Ws}Duration`),y=q0(C,m);let x=null,v=0,A=0;a===Ho?b>0&&(x=Ho,v=b,A=w.length):a===Ws?y>0&&(x=Ws,v=y,A=m.length):(v=Math.max(b,y),x=v>0?b>y?Ho:Ws:null,A=x?x===Ho?w.length:m.length:0);const D=x===Ho&&/\b(transform|all)(,|$)/.test(p(`${Ho}Property`).toString());return{type:x,timeout:v,propCount:A,hasTransform:D}}function q0(s,a){for(;s.length<a.length;)s=s.concat(s);return Math.max(...a.map((d,p)=>W0(d)+W0(s[p])))}function W0(s){return s==="auto"?0:Number(s.slice(0,-1).replace(",","."))*1e3}function v1(){return document.body.offsetHeight}function h3(s,a,d){const p=s[Yr];p&&(a=(a?[a,...p]:[...p]).join(" ")),a==null?s.removeAttribute("class"):d?s.setAttribute("class",a):s.className=a}const Jp=Symbol("_vod"),yl={beforeMount(s,{value:a},{transition:d}){s[Jp]=s.style.display==="none"?"":s.style.display,d&&a?d.beforeEnter(s):Gs(s,a)},mounted(s,{value:a},{transition:d}){d&&a&&d.enter(s)},updated(s,{value:a,oldValue:d},{transition:p}){!a!=!d&&(p?a?(p.beforeEnter(s),Gs(s,!0),p.enter(s)):p.leave(s,()=>{Gs(s,!1)}):Gs(s,a))},beforeUnmount(s,{value:a}){Gs(s,a)}};function Gs(s,a){s.style.display=a?s[Jp]:"none"}function p3(){yl.getSSRProps=({value:s})=>{if(!s)return{style:{display:"none"}}}}function g3(s,a,d){const p=s.style,f=ge(d);if(d&&!f){if(a&&!ge(a))for(const w in a)d[w]==null&&dp(p,w,"");for(const w in d)dp(p,w,d[w])}else{const w=p.display;f?a!==d&&(p.cssText=d):a&&s.removeAttribute("style"),Jp in s&&(p.display=w)}}const G0=/\s*!important$/;function dp(s,a,d){if(yt(d))d.forEach(p=>dp(s,a,p));else if(d==null&&(d=""),a.startsWith("--"))s.setProperty(a,d);else{const p=f3(s,a);G0.test(d)?s.setProperty(yn(p),d.replace(G0,""),"important"):s[p]=d}}const K0=["Webkit","Moz","ms"],Sh={};function f3(s,a){const d=Sh[a];if(d)return d;let p=tn(a);if(p!=="filter"&&p in s)return Sh[a]=p;p=va(p);for(let f=0;f<K0.length;f++){const w=K0[f]+p;if(w in s)return Sh[a]=w}return a}const Y0="http://www.w3.org/1999/xlink";function m3(s,a,d,p,f){if(p&&a.startsWith("xlink:"))d==null?s.removeAttributeNS(Y0,a.slice(6,a.length)):s.setAttributeNS(Y0,a,d);else{const w=UP(a);d==null||w&&!ry(d)?s.removeAttribute(a):s.setAttribute(a,w?"":d)}}function k3(s,a,d,p,f,w,b){if(a==="innerHTML"||a==="textContent"){p&&b(p,f,w),s[a]=d??"";return}const C=s.tagName;if(a==="value"&&C!=="PROGRESS"&&!C.includes("-")){s._value=d;const y=C==="OPTION"?s.getAttribute("value"):s.value,x=d??"";y!==x&&(s.value=x),d==null&&s.removeAttribute(a);return}let m=!1;if(d===""||d==null){const y=typeof s[a];y==="boolean"?d=ry(d):d==null&&y==="string"?(d="",m=!0):y==="number"&&(d=0,m=!0)}try{s[a]=d}catch{}m&&s.removeAttribute(a)}function Ao(s,a,d,p){s.addEventListener(a,d,p)}function b3(s,a,d,p){s.removeEventListener(a,d,p)}const Q0=Symbol("_vei");function w3(s,a,d,p,f=null){const w=s[Q0]||(s[Q0]={}),b=w[a];if(p&&b)b.value=p;else{const[C,m]=_3(a);if(p){const y=w[a]=v3(p,f);Ao(s,C,y,m)}else b&&(b3(s,C,b,m),w[a]=void 0)}}const Z0=/(?:Once|Passive|Capture)$/;function _3(s){let a;if(Z0.test(s)){a={};let p;for(;p=s.match(Z0);)s=s.slice(0,s.length-p[0].length),a[p[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):yn(s.slice(2)),a]}let Ih=0;const A3=Promise.resolve(),C3=()=>Ih||(A3.then(()=>Ih=0),Ih=Date.now());function v3(s,a){const d=p=>{if(!p._vts)p._vts=Date.now();else if(p._vts<=d.attached)return;hn(y3(p,d.value),a,5,[p])};return d.value=s,d.attached=C3(),d}function y3(s,a){if(yt(a)){const d=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{d.call(s),s._stopped=!0},a.map(p=>f=>!f._stopped&&p&&p(f))}else return a}const J0=/^on[a-z]/,E3=(s,a,d,p,f=!1,w,b,C,m)=>{a==="class"?h3(s,p,f):a==="style"?g3(s,d,p):Ca(a)?yp(a)||w3(s,a,d,p,b):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):x3(s,a,p,f))?k3(s,a,p,w,b,C,m):(a==="true-value"?s._trueValue=p:a==="false-value"&&(s._falseValue=p),m3(s,a,p,f))};function x3(s,a,d,p){return p?!!(a==="innerHTML"||a==="textContent"||a in s&&J0.test(a)&&Pt(d)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&s.tagName==="INPUT"||a==="type"&&s.tagName==="TEXTAREA"||J0.test(a)&&ge(d)?!1:a in s}/*! #__NO_SIDE_EFFECTS__ */function y1(s,a){const d=Da(s);class p extends Jl{constructor(w){super(d,w,a)}}return p.def=d,p}/*! #__NO_SIDE_EFFECTS__ */const D3=s=>y1(s,P1),T3=typeof HTMLElement<"u"?HTMLElement:class{};class Jl extends T3{constructor(a,d={},p){super(),this._def=a,this._props=d,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&p?p(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),jl(()=>{this._connected||(pp(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let p=0;p<this.attributes.length;p++)this._setAttr(this.attributes[p].name);this._ob=new MutationObserver(p=>{for(const f of p)this._setAttr(f.attributeName)}),this._ob.observe(this,{attributes:!0});const a=(p,f=!1)=>{const{props:w,styles:b}=p;let C;if(w&&!yt(w))for(const m in w){const y=w[m];(y===Number||y&&y.type===Number)&&(m in this._props&&(this._props[m]=ml(this._props[m])),(C||(C=Object.create(null)))[tn(m)]=!0)}this._numberProps=C,f&&this._resolveProps(p),this._applyStyles(b),this._update()},d=this._def.__asyncLoader;d?d().then(p=>a(p,!0)):a(this._def)}_resolveProps(a){const{props:d}=a,p=yt(d)?d:Object.keys(d||{});for(const f of Object.keys(this))f[0]!=="_"&&p.includes(f)&&this._setProp(f,this[f],!0,!1);for(const f of p.map(tn))Object.defineProperty(this,f,{get(){return this._getProp(f)},set(w){this._setProp(f,w)}})}_setAttr(a){let d=this.getAttribute(a);const p=tn(a);this._numberProps&&this._numberProps[p]&&(d=ml(d)),this._setProp(p,d,!1)}_getProp(a){return this._props[a]}_setProp(a,d,p=!0,f=!0){d!==this._props[a]&&(this._props[a]=d,f&&this._instance&&this._update(),p&&(d===!0?this.setAttribute(yn(a),""):typeof d=="string"||typeof d=="number"?this.setAttribute(yn(a),d+""):d||this.removeAttribute(yn(a))))}_update(){pp(this._createVNode(),this.shadowRoot)}_createVNode(){const a=Kt(this._def,pe({},this._props));return this._instance||(a.ce=d=>{this._instance=d,d.isCE=!0;const p=(w,b)=>{this.dispatchEvent(new CustomEvent(w,{detail:b}))};d.emit=(w,...b)=>{p(w,b),yn(w)!==w&&p(yn(w),b)};let f=this;for(;f=f&&(f.parentNode||f.host);)if(f instanceof Jl){d.parent=f._instance,d.provides=f._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(d=>{const p=document.createElement("style");p.textContent=d,this.shadowRoot.appendChild(p)})}}function S3(s="$style"){{const a=So();if(!a)return se;const d=a.type.__cssModules;if(!d)return se;const p=d[s];return p||se}}function I3(s){const a=So();if(!a)return;const d=a.ut=(f=s(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(w=>hp(w,f))},p=()=>{const f=s(a.proxy);up(a.subTree,f),d(f)};By(p),Sa(()=>{const f=new MutationObserver(p);f.observe(a.subTree.el.parentNode,{childList:!0}),Gl(()=>f.disconnect())})}function up(s,a){if(s.shapeFlag&128){const d=s.suspense;s=d.activeBranch,d.pendingBranch&&!d.isHydrating&&d.effects.push(()=>{up(d.activeBranch,a)})}for(;s.component;)s=s.component.subTree;if(s.shapeFlag&1&&s.el)hp(s.el,a);else if(s.type===ze)s.children.forEach(d=>up(d,a));else if(s.type===Gi){let{el:d,anchor:p}=s;for(;d&&(hp(d,a),d!==p);)d=d.nextSibling}}function hp(s,a){if(s.nodeType===1){const d=s.style;for(const p in a)d.setProperty(`--${p}`,a[p])}}const E1=new WeakMap,x1=new WeakMap,El=Symbol("_moveCb"),X0=Symbol("_enterCb"),D1={name:"TransitionGroup",props:pe({},l3,{tag:String,moveClass:String}),setup(s,{slots:a}){const d=So(),p=Up();let f,w;return ql(()=>{if(!f.length)return;const b=s.moveClass||`${s.name||"v"}-move`;if(!L3(f[0].el,d.vnode.el,b))return;f.forEach(B3),f.forEach(O3);const C=f.filter(P3);v1(),C.forEach(m=>{const y=m.el,x=y.style;wo(y,b),x.transform=x.webkitTransform=x.transitionDuration="";const v=y[El]=A=>{A&&A.target!==y||(!A||/transform$/.test(A.propertyName))&&(y.removeEventListener("transitionend",v),y[El]=null,qo(y,b))};y.addEventListener("transitionend",v)})}),()=>{const b=$t(s),C=A1(b);let m=b.tag||ze;f=w,w=a.default?Ul(a.default()):[];for(let y=0;y<w.length;y++){const x=w[y];x.key!=null&&Qi(x,Gr(x,C,p,d))}if(f)for(let y=0;y<f.length;y++){const x=f[y];Qi(x,Gr(x,C,p,d)),E1.set(x,x.el.getBoundingClientRect())}return Kt(m,null,w)}}},M3=s=>delete s.mode;D1.props;const N3=D1;function B3(s){const a=s.el;a[El]&&a[El](),a[X0]&&a[X0]()}function O3(s){x1.set(s,s.el.getBoundingClientRect())}function P3(s){const a=E1.get(s),d=x1.get(s),p=a.left-d.left,f=a.top-d.top;if(p||f){const w=s.el.style;return w.transform=w.webkitTransform=`translate(${p}px,${f}px)`,w.transitionDuration="0s",s}}function L3(s,a,d){const p=s.cloneNode(),f=s[Yr];f&&f.forEach(C=>{C.split(/\s+/).forEach(m=>m&&p.classList.remove(m))}),d.split(/\s+/).forEach(C=>C&&p.classList.add(C)),p.style.display="none";const w=a.nodeType===1?a:a.parentNode;w.appendChild(p);const{hasTransform:b}=C1(p);return w.removeChild(p),b}const ri=s=>{const a=s.props["onUpdate:modelValue"]||!1;return yt(a)?d=>Hr(a,d):a};function R3(s){s.target.composing=!0}function tv(s){const a=s.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Tn=Symbol("_assign"),wa={created(s,{modifiers:{lazy:a,trim:d,number:p}},f){s[Tn]=ri(f);const w=p||f.props&&f.props.type==="number";Ao(s,a?"change":"input",b=>{if(b.target.composing)return;let C=s.value;d&&(C=C.trim()),w&&(C=fl(C)),s[Tn](C)}),d&&Ao(s,"change",()=>{s.value=s.value.trim()}),a||(Ao(s,"compositionstart",R3),Ao(s,"compositionend",tv),Ao(s,"change",tv))},mounted(s,{value:a}){s.value=a??""},beforeUpdate(s,{value:a,modifiers:{lazy:d,trim:p,number:f}},w){if(s[Tn]=ri(w),s.composing||document.activeElement===s&&s.type!=="range"&&(d||p&&s.value.trim()===a||(f||s.type==="number")&&fl(s.value)===a))return;const b=a??"";s.value!==b&&(s.value=b)}},Xp={deep:!0,created(s,a,d){s[Tn]=ri(d),Ao(s,"change",()=>{const p=s._modelValue,f=Qr(s),w=s.checked,b=s[Tn];if(yt(p)){const C=Ol(p,f),m=C!==-1;if(w&&!m)b(p.concat(f));else if(!w&&m){const y=[...p];y.splice(C,1),b(y)}}else if(er(p)){const C=new Set(p);w?C.add(f):C.delete(f),b(C)}else b(S1(s,w))})},mounted:ev,beforeUpdate(s,a,d){s[Tn]=ri(d),ev(s,a,d)}};function ev(s,{value:a,oldValue:d},p){s._modelValue=a,yt(a)?s.checked=Ol(a,p.props.value)>-1:er(a)?s.checked=a.has(p.props.value):a!==d&&(s.checked=ei(a,S1(s,!0)))}const tg={created(s,{value:a},d){s.checked=ei(a,d.props.value),s[Tn]=ri(d),Ao(s,"change",()=>{s[Tn](Qr(s))})},beforeUpdate(s,{value:a,oldValue:d},p){s[Tn]=ri(p),a!==d&&(s.checked=ei(a,p.props.value))}},T1={deep:!0,created(s,{value:a,modifiers:{number:d}},p){const f=er(a);Ao(s,"change",()=>{const w=Array.prototype.filter.call(s.options,b=>b.selected).map(b=>d?fl(Qr(b)):Qr(b));s[Tn](s.multiple?f?new Set(w):w:w[0])}),s[Tn]=ri(p)},mounted(s,{value:a}){nv(s,a)},beforeUpdate(s,a,d){s[Tn]=ri(d)},updated(s,{value:a}){nv(s,a)}};function nv(s,a){const d=s.multiple;if(!(d&&!yt(a)&&!er(a))){for(let p=0,f=s.options.length;p<f;p++){const w=s.options[p],b=Qr(w);if(d)yt(a)?w.selected=Ol(a,b)>-1:w.selected=a.has(b);else if(ei(Qr(w),a)){s.selectedIndex!==p&&(s.selectedIndex=p);return}}!d&&s.selectedIndex!==-1&&(s.selectedIndex=-1)}}function Qr(s){return"_value"in s?s._value:s.value}function S1(s,a){const d=a?"_trueValue":"_falseValue";return d in s?s[d]:a}const I1={created(s,a,d){tl(s,a,d,null,"created")},mounted(s,a,d){tl(s,a,d,null,"mounted")},beforeUpdate(s,a,d,p){tl(s,a,d,p,"beforeUpdate")},updated(s,a,d,p){tl(s,a,d,p,"updated")}};function M1(s,a){switch(s){case"SELECT":return T1;case"TEXTAREA":return wa;default:switch(a){case"checkbox":return Xp;case"radio":return tg;default:return wa}}}function tl(s,a,d,p,f){const b=M1(s.tagName,d.props&&d.props.type)[f];b&&b(s,a,d,p)}function z3(){wa.getSSRProps=({value:s})=>({value:s}),tg.getSSRProps=({value:s},a)=>{if(a.props&&ei(a.props.value,s))return{checked:!0}},Xp.getSSRProps=({value:s},a)=>{if(yt(s)){if(a.props&&Ol(s,a.props.value)>-1)return{checked:!0}}else if(er(s)){if(a.props&&s.has(a.props.value))return{checked:!0}}else if(s)return{checked:!0}},I1.getSSRProps=(s,a)=>{if(typeof a.type!="string")return;const d=M1(a.type.toUpperCase(),a.props&&a.props.type);if(d.getSSRProps)return d.getSSRProps(s,a)}}const j3=["ctrl","shift","alt","meta"],F3={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,a)=>j3.some(d=>s[`${d}Key`]&&!a.includes(d))},V3=(s,a)=>(d,...p)=>{for(let f=0;f<a.length;f++){const w=F3[a[f]];if(w&&w(d,a))return}return s(d,...p)},H3={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},U3=(s,a)=>d=>{if(!("key"in d))return;const p=yn(d.key);if(a.some(f=>f===p||H3[f]===p))return s(d)},N1=pe({patchProp:E3},c3);let sa,ov=!1;function B1(){return sa||(sa=e1(N1))}function O1(){return sa=ov?sa:n1(N1),ov=!0,sa}const pp=(...s)=>{B1().render(...s)},P1=(...s)=>{O1().hydrate(...s)},L1=(...s)=>{const a=B1().createApp(...s),{mount:d}=a;return a.mount=p=>{const f=R1(p);if(!f)return;const w=a._component;!Pt(w)&&!w.render&&!w.template&&(w.template=f.innerHTML),f.innerHTML="";const b=d(f,!1,f instanceof SVGElement);return f instanceof Element&&(f.removeAttribute("v-cloak"),f.setAttribute("data-v-app","")),b},a},$3=(...s)=>{const a=O1().createApp(...s),{mount:d}=a;return a.mount=p=>{const f=R1(p);if(f)return d(f,!0,f instanceof SVGElement)},a};function R1(s){return ge(s)?document.querySelector(s):s}let iv=!1;const q3=()=>{iv||(iv=!0,z3(),p3())},W3=()=>{},G3=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Py,BaseTransitionPropsValidators:$p,Comment:He,EffectScope:Tp,Fragment:ze,KeepAlive:rL,ReactiveEffect:Wr,Static:Gi,Suspense:G4,Teleport:$L,Text:Zi,Transition:Zp,TransitionGroup:N3,VueElement:Jl,assertNumber:I4,callWithAsyncErrorHandling:hn,callWithErrorHandling:vo,camelize:tn,capitalize:va,cloneVNode:co,compatUtils:s3,compile:W3,computed:En,createApp:L1,createBlock:Kp,createCommentVNode:GL,createElementBlock:To,createElementVNode:Vt,createHydrationRenderer:n1,createPropsRestProxy:yL,createRenderer:e1,createSSRApp:$3,createSlots:cL,createStaticVNode:Yl,createTextVNode:ro,createVNode:Kt,customRef:C4,defineAsyncComponent:oL,defineComponent:Da,defineCustomElement:y1,defineEmits:pL,defineExpose:gL,defineModel:kL,defineOptions:fL,defineProps:hL,defineSSRCustomElement:D3,defineSlots:mL,get devtools(){return Or},effect:YP,effectScope:qP,getCurrentInstance:So,getCurrentScope:cy,getTransitionRawChildren:Ul,guardReactiveProps:l1,h:Zl,handleError:nr,hasInjectionContext:BL,hydrate:P1,initCustomFormatter:e3,initDirectivesForSSR:q3,inject:Dn,isMemoSame:b1,isProxy:Bp,isReactive:qi,isReadonly:Yi,isRef:Se,isRuntimeOnly:JL,isShallow:ua,isVNode:oi,markRaw:Op,mergeDefaults:CL,mergeModels:vL,mergeProps:d1,nextTick:jl,normalizeClass:Ea,normalizeProps:VP,normalizeStyle:ya,onActivated:Ry,onBeforeMount:Fy,onBeforeUnmount:Wl,onBeforeUpdate:Vy,onDeactivated:zy,onErrorCaptured:qy,onMounted:Sa,onRenderTracked:$y,onRenderTriggered:Uy,onScopeDispose:WP,onServerPrefetch:Hy,onUnmounted:Gl,onUpdated:ql,openBlock:Nn,popScopeId:R4,provide:oa,proxyRefs:Rp,pushScopeId:L4,queuePostFlushCb:wl,reactive:ls,readonly:Np,ref:xn,registerRuntimeCompiler:ZL,render:pp,renderList:aL,renderSlot:lL,resolveComponent:Sy,resolveDirective:q4,resolveDynamicComponent:$4,resolveFilter:r3,resolveTransitionHooks:Gr,setBlockTracking:sp,setDevtoolsHook:Dy,setTransitionHooks:Qi,shallowReactive:Mp,shallowReadonly:m4,shallowRef:Ay,ssrContextKey:m1,ssrUtils:i3,stop:QP,toDisplayString:kl,toHandlerKey:ea,toHandlers:dL,toRaw:$t,toRef:x4,toRefs:v4,toValue:w4,transformVNodeArgs:qL,triggerRef:b4,unref:Wn,useAttrs:_L,useCssModule:S3,useCssVars:I3,useModel:AL,useSSRContext:k1,useSlots:wL,useTransitionState:Up,vModelCheckbox:Xp,vModelDynamic:I1,vModelRadio:tg,vModelSelect:T1,vModelText:wa,vShow:yl,version:w1,warn:S4,watch:Jo,watchEffect:X4,watchPostEffect:By,watchSyncEffect:tL,withAsyncContext:EL,withCtx:Yo,withDefaults:bL,withDirectives:ll,withKeys:U3,withMemo:n3,withModifiers:V3,withScopeId:z4},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Pr=typeof window<"u";function K3(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Mh(s,a){const d={};for(const p in a){const f=a[p];d[p]=Gn(f)?f.map(s):s(f)}return d}const aa=()=>{},Gn=Array.isArray,Y3=/\/$/,Q3=s=>s.replace(Y3,"");function Nh(s,a,d="/"){let p,f={},w="",b="";const C=a.indexOf("#");let m=a.indexOf("?");return C<m&&C>=0&&(m=-1),m>-1&&(p=a.slice(0,m),w=a.slice(m+1,C>-1?C:a.length),f=s(w)),C>-1&&(p=p||a.slice(0,C),b=a.slice(C,a.length)),p=tR(p??a,d),{fullPath:p+(w&&"?")+w+b,path:p,query:f,hash:b}}function Z3(s,a){const d=a.query?s(a.query):"";return a.path+(d&&"?")+d+(a.hash||"")}function rv(s,a){return!a||!s.toLowerCase().startsWith(a.toLowerCase())?s:s.slice(a.length)||"/"}function J3(s,a,d){const p=a.matched.length-1,f=d.matched.length-1;return p>-1&&p===f&&Zr(a.matched[p],d.matched[f])&&z1(a.params,d.params)&&s(a.query)===s(d.query)&&a.hash===d.hash}function Zr(s,a){return(s.aliasOf||s)===(a.aliasOf||a)}function z1(s,a){if(Object.keys(s).length!==Object.keys(a).length)return!1;for(const d in s)if(!X3(s[d],a[d]))return!1;return!0}function X3(s,a){return Gn(s)?sv(s,a):Gn(a)?sv(a,s):s===a}function sv(s,a){return Gn(a)?s.length===a.length&&s.every((d,p)=>d===a[p]):s.length===1&&s[0]===a}function tR(s,a){if(s.startsWith("/"))return s;if(!s)return a;const d=a.split("/"),p=s.split("/"),f=p[p.length-1];(f===".."||f===".")&&p.push("");let w=d.length-1,b,C;for(b=0;b<p.length;b++)if(C=p[b],C!==".")if(C==="..")w>1&&w--;else break;return d.slice(0,w).join("/")+"/"+p.slice(b-(b===p.length?1:0)).join("/")}var _a;(function(s){s.pop="pop",s.push="push"})(_a||(_a={}));var ca;(function(s){s.back="back",s.forward="forward",s.unknown=""})(ca||(ca={}));function eR(s){if(!s)if(Pr){const a=document.querySelector("base");s=a&&a.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),Q3(s)}const nR=/^[^#]+#/;function oR(s,a){return s.replace(nR,"#")+a}function iR(s,a){const d=document.documentElement.getBoundingClientRect(),p=s.getBoundingClientRect();return{behavior:a.behavior,left:p.left-d.left-(a.left||0),top:p.top-d.top-(a.top||0)}}const Xl=()=>({left:window.pageXOffset,top:window.pageYOffset});function rR(s){let a;if("el"in s){const d=s.el,p=typeof d=="string"&&d.startsWith("#"),f=typeof d=="string"?p?document.getElementById(d.slice(1)):document.querySelector(d):d;if(!f)return;a=iR(f,s)}else a=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function av(s,a){return(history.state?history.state.position-a:-1)+s}const gp=new Map;function sR(s,a){gp.set(s,a)}function aR(s){const a=gp.get(s);return gp.delete(s),a}let cR=()=>location.protocol+"//"+location.host;function j1(s,a){const{pathname:d,search:p,hash:f}=a,w=s.indexOf("#");if(w>-1){let C=f.includes(s.slice(w))?s.slice(w).length:1,m=f.slice(C);return m[0]!=="/"&&(m="/"+m),rv(m,"")}return rv(d,s)+p+f}function lR(s,a,d,p){let f=[],w=[],b=null;const C=({state:A})=>{const D=j1(s,location),N=d.value,B=a.value;let L=0;if(A){if(d.value=D,a.value=A,b&&b===N){b=null;return}L=B?A.position-B.position:0}else p(D);f.forEach(V=>{V(d.value,N,{delta:L,type:_a.pop,direction:L?L>0?ca.forward:ca.back:ca.unknown})})};function m(){b=d.value}function y(A){f.push(A);const D=()=>{const N=f.indexOf(A);N>-1&&f.splice(N,1)};return w.push(D),D}function x(){const{history:A}=window;A.state&&A.replaceState(ne({},A.state,{scroll:Xl()}),"")}function v(){for(const A of w)A();w=[],window.removeEventListener("popstate",C),window.removeEventListener("beforeunload",x)}return window.addEventListener("popstate",C),window.addEventListener("beforeunload",x,{passive:!0}),{pauseListeners:m,listen:y,destroy:v}}function cv(s,a,d,p=!1,f=!1){return{back:s,current:a,forward:d,replaced:p,position:window.history.length,scroll:f?Xl():null}}function dR(s){const{history:a,location:d}=window,p={value:j1(s,d)},f={value:a.state};f.value||w(p.value,{back:null,current:p.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function w(m,y,x){const v=s.indexOf("#"),A=v>-1?(d.host&&document.querySelector("base")?s:s.slice(v))+m:cR()+s+m;try{a[x?"replaceState":"pushState"](y,"",A),f.value=y}catch(D){console.error(D),d[x?"replace":"assign"](A)}}function b(m,y){const x=ne({},a.state,cv(f.value.back,m,f.value.forward,!0),y,{position:f.value.position});w(m,x,!0),p.value=m}function C(m,y){const x=ne({},f.value,a.state,{forward:m,scroll:Xl()});w(x.current,x,!0);const v=ne({},cv(p.value,m,null),{position:x.position+1},y);w(m,v,!1),p.value=m}return{location:p,state:f,push:C,replace:b}}function uR(s){s=eR(s);const a=dR(s),d=lR(s,a.state,a.location,a.replace);function p(w,b=!0){b||d.pauseListeners(),history.go(w)}const f=ne({location:"",base:s,go:p,createHref:oR.bind(null,s)},a,d);return Object.defineProperty(f,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(f,"state",{enumerable:!0,get:()=>a.state.value}),f}function hR(s){return typeof s=="string"||s&&typeof s=="object"}function F1(s){return typeof s=="string"||typeof s=="symbol"}const Uo={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},V1=Symbol("");var lv;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(lv||(lv={}));function Jr(s,a){return ne(new Error,{type:s,[V1]:!0},a)}function bo(s,a){return s instanceof Error&&V1 in s&&(a==null||!!(s.type&a))}const dv="[^/]+?",pR={sensitive:!1,strict:!1,start:!0,end:!0},gR=/[.+*?^${}()[\]/\\]/g;function fR(s,a){const d=ne({},pR,a),p=[];let f=d.start?"^":"";const w=[];for(const y of s){const x=y.length?[]:[90];d.strict&&!y.length&&(f+="/");for(let v=0;v<y.length;v++){const A=y[v];let D=40+(d.sensitive?.25:0);if(A.type===0)v||(f+="/"),f+=A.value.replace(gR,"\\$&"),D+=40;else if(A.type===1){const{value:N,repeatable:B,optional:L,regexp:V}=A;w.push({name:N,repeatable:B,optional:L});const j=V||dv;if(j!==dv){D+=10;try{new RegExp(`(${j})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${N}" (${j}): `+O.message)}}let R=B?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;v||(R=L&&y.length<2?`(?:/${R})`:"/"+R),L&&(R+="?"),f+=R,D+=20,L&&(D+=-8),B&&(D+=-20),j===".*"&&(D+=-50)}x.push(D)}p.push(x)}if(d.strict&&d.end){const y=p.length-1;p[y][p[y].length-1]+=.7000000000000001}d.strict||(f+="/?"),d.end?f+="$":d.strict&&(f+="(?:/|$)");const b=new RegExp(f,d.sensitive?"":"i");function C(y){const x=y.match(b),v={};if(!x)return null;for(let A=1;A<x.length;A++){const D=x[A]||"",N=w[A-1];v[N.name]=D&&N.repeatable?D.split("/"):D}return v}function m(y){let x="",v=!1;for(const A of s){(!v||!x.endsWith("/"))&&(x+="/"),v=!1;for(const D of A)if(D.type===0)x+=D.value;else if(D.type===1){const{value:N,repeatable:B,optional:L}=D,V=N in y?y[N]:"";if(Gn(V)&&!B)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const j=Gn(V)?V.join("/"):V;if(!j)if(L)A.length<2&&(x.endsWith("/")?x=x.slice(0,-1):v=!0);else throw new Error(`Missing required param "${N}"`);x+=j}}return x||"/"}return{re:b,score:p,keys:w,parse:C,stringify:m}}function mR(s,a){let d=0;for(;d<s.length&&d<a.length;){const p=a[d]-s[d];if(p)return p;d++}return s.length<a.length?s.length===1&&s[0]===40+40?-1:1:s.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function kR(s,a){let d=0;const p=s.score,f=a.score;for(;d<p.length&&d<f.length;){const w=mR(p[d],f[d]);if(w)return w;d++}if(Math.abs(f.length-p.length)===1){if(uv(p))return 1;if(uv(f))return-1}return f.length-p.length}function uv(s){const a=s[s.length-1];return s.length>0&&a[a.length-1]<0}const bR={type:0,value:""},wR=/[a-zA-Z0-9_]/;function _R(s){if(!s)return[[]];if(s==="/")return[[bR]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function a(D){throw new Error(`ERR (${d})/"${y}": ${D}`)}let d=0,p=d;const f=[];let w;function b(){w&&f.push(w),w=[]}let C=0,m,y="",x="";function v(){y&&(d===0?w.push({type:0,value:y}):d===1||d===2||d===3?(w.length>1&&(m==="*"||m==="+")&&a(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),w.push({type:1,value:y,regexp:x,repeatable:m==="*"||m==="+",optional:m==="*"||m==="?"})):a("Invalid state to consume buffer"),y="")}function A(){y+=m}for(;C<s.length;){if(m=s[C++],m==="\\"&&d!==2){p=d,d=4;continue}switch(d){case 0:m==="/"?(y&&v(),b()):m===":"?(v(),d=1):A();break;case 4:A(),d=p;break;case 1:m==="("?d=2:wR.test(m)?A():(v(),d=0,m!=="*"&&m!=="?"&&m!=="+"&&C--);break;case 2:m===")"?x[x.length-1]=="\\"?x=x.slice(0,-1)+m:d=3:x+=m;break;case 3:v(),d=0,m!=="*"&&m!=="?"&&m!=="+"&&C--,x="";break;default:a("Unknown state");break}}return d===2&&a(`Unfinished custom RegExp for param "${y}"`),v(),b(),f}function AR(s,a,d){const p=fR(_R(s.path),d),f=ne(p,{record:s,parent:a,children:[],alias:[]});return a&&!f.record.aliasOf==!a.record.aliasOf&&a.children.push(f),f}function CR(s,a){const d=[],p=new Map;a=gv({strict:!1,end:!0,sensitive:!1},a);function f(x){return p.get(x)}function w(x,v,A){const D=!A,N=vR(x);N.aliasOf=A&&A.record;const B=gv(a,x),L=[N];if("alias"in x){const R=typeof x.alias=="string"?[x.alias]:x.alias;for(const O of R)L.push(ne({},N,{components:A?A.record.components:N.components,path:O,aliasOf:A?A.record:N}))}let V,j;for(const R of L){const{path:O}=R;if(v&&O[0]!=="/"){const $=v.record.path,J=$[$.length-1]==="/"?"":"/";R.path=v.record.path+(O&&J+O)}if(V=AR(R,v,B),A?A.alias.push(V):(j=j||V,j!==V&&j.alias.push(V),D&&x.name&&!pv(V)&&b(x.name)),N.children){const $=N.children;for(let J=0;J<$.length;J++)w($[J],V,A&&A.children[J])}A=A||V,(V.record.components&&Object.keys(V.record.components).length||V.record.name||V.record.redirect)&&m(V)}return j?()=>{b(j)}:aa}function b(x){if(F1(x)){const v=p.get(x);v&&(p.delete(x),d.splice(d.indexOf(v),1),v.children.forEach(b),v.alias.forEach(b))}else{const v=d.indexOf(x);v>-1&&(d.splice(v,1),x.record.name&&p.delete(x.record.name),x.children.forEach(b),x.alias.forEach(b))}}function C(){return d}function m(x){let v=0;for(;v<d.length&&kR(x,d[v])>=0&&(x.record.path!==d[v].record.path||!H1(x,d[v]));)v++;d.splice(v,0,x),x.record.name&&!pv(x)&&p.set(x.record.name,x)}function y(x,v){let A,D={},N,B;if("name"in x&&x.name){if(A=p.get(x.name),!A)throw Jr(1,{location:x});B=A.record.name,D=ne(hv(v.params,A.keys.filter(j=>!j.optional).map(j=>j.name)),x.params&&hv(x.params,A.keys.map(j=>j.name))),N=A.stringify(D)}else if("path"in x)N=x.path,A=d.find(j=>j.re.test(N)),A&&(D=A.parse(N),B=A.record.name);else{if(A=v.name?p.get(v.name):d.find(j=>j.re.test(v.path)),!A)throw Jr(1,{location:x,currentLocation:v});B=A.record.name,D=ne({},v.params,x.params),N=A.stringify(D)}const L=[];let V=A;for(;V;)L.unshift(V.record),V=V.parent;return{name:B,path:N,params:D,matched:L,meta:ER(L)}}return s.forEach(x=>w(x)),{addRoute:w,resolve:y,removeRoute:b,getRoutes:C,getRecordMatcher:f}}function hv(s,a){const d={};for(const p of a)p in s&&(d[p]=s[p]);return d}function vR(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:yR(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function yR(s){const a={},d=s.props||!1;if("component"in s)a.default=d;else for(const p in s.components)a[p]=typeof d=="object"?d[p]:d;return a}function pv(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function ER(s){return s.reduce((a,d)=>ne(a,d.meta),{})}function gv(s,a){const d={};for(const p in s)d[p]=p in a?a[p]:s[p];return d}function H1(s,a){return a.children.some(d=>d===s||H1(s,d))}const U1=/#/g,xR=/&/g,DR=/\//g,TR=/=/g,SR=/\?/g,$1=/\+/g,IR=/%5B/g,MR=/%5D/g,q1=/%5E/g,NR=/%60/g,W1=/%7B/g,BR=/%7C/g,G1=/%7D/g,OR=/%20/g;function eg(s){return encodeURI(""+s).replace(BR,"|").replace(IR,"[").replace(MR,"]")}function PR(s){return eg(s).replace(W1,"{").replace(G1,"}").replace(q1,"^")}function fp(s){return eg(s).replace($1,"%2B").replace(OR,"+").replace(U1,"%23").replace(xR,"%26").replace(NR,"`").replace(W1,"{").replace(G1,"}").replace(q1,"^")}function LR(s){return fp(s).replace(TR,"%3D")}function RR(s){return eg(s).replace(U1,"%23").replace(SR,"%3F")}function zR(s){return s==null?"":RR(s).replace(DR,"%2F")}function xl(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function jR(s){const a={};if(s===""||s==="?")return a;const p=(s[0]==="?"?s.slice(1):s).split("&");for(let f=0;f<p.length;++f){const w=p[f].replace($1," "),b=w.indexOf("="),C=xl(b<0?w:w.slice(0,b)),m=b<0?null:xl(w.slice(b+1));if(C in a){let y=a[C];Gn(y)||(y=a[C]=[y]),y.push(m)}else a[C]=m}return a}function fv(s){let a="";for(let d in s){const p=s[d];if(d=LR(d),p==null){p!==void 0&&(a+=(a.length?"&":"")+d);continue}(Gn(p)?p.map(w=>w&&fp(w)):[p&&fp(p)]).forEach(w=>{w!==void 0&&(a+=(a.length?"&":"")+d,w!=null&&(a+="="+w))})}return a}function FR(s){const a={};for(const d in s){const p=s[d];p!==void 0&&(a[d]=Gn(p)?p.map(f=>f==null?null:""+f):p==null?p:""+p)}return a}const VR=Symbol(""),mv=Symbol(""),td=Symbol(""),ng=Symbol(""),mp=Symbol("");function Ks(){let s=[];function a(p){return s.push(p),()=>{const f=s.indexOf(p);f>-1&&s.splice(f,1)}}function d(){s=[]}return{add:a,list:()=>s.slice(),reset:d}}function Ko(s,a,d,p,f){const w=p&&(p.enterCallbacks[f]=p.enterCallbacks[f]||[]);return()=>new Promise((b,C)=>{const m=v=>{v===!1?C(Jr(4,{from:d,to:a})):v instanceof Error?C(v):hR(v)?C(Jr(2,{from:a,to:v})):(w&&p.enterCallbacks[f]===w&&typeof v=="function"&&w.push(v),b())},y=s.call(p&&p.instances[f],a,d,m);let x=Promise.resolve(y);s.length<3&&(x=x.then(m)),x.catch(v=>C(v))})}function Bh(s,a,d,p){const f=[];for(const w of s)for(const b in w.components){let C=w.components[b];if(!(a!=="beforeRouteEnter"&&!w.instances[b]))if(HR(C)){const y=(C.__vccOpts||C)[a];y&&f.push(Ko(y,d,p,w,b))}else{let m=C();f.push(()=>m.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${b}" at "${w.path}"`));const x=K3(y)?y.default:y;w.components[b]=x;const A=(x.__vccOpts||x)[a];return A&&Ko(A,d,p,w,b)()}))}}return f}function HR(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function kv(s){const a=Dn(td),d=Dn(ng),p=En(()=>a.resolve(Wn(s.to))),f=En(()=>{const{matched:m}=p.value,{length:y}=m,x=m[y-1],v=d.matched;if(!x||!v.length)return-1;const A=v.findIndex(Zr.bind(null,x));if(A>-1)return A;const D=bv(m[y-2]);return y>1&&bv(x)===D&&v[v.length-1].path!==D?v.findIndex(Zr.bind(null,m[y-2])):A}),w=En(()=>f.value>-1&&WR(d.params,p.value.params)),b=En(()=>f.value>-1&&f.value===d.matched.length-1&&z1(d.params,p.value.params));function C(m={}){return qR(m)?a[Wn(s.replace)?"replace":"push"](Wn(s.to)).catch(aa):Promise.resolve()}return{route:p,href:En(()=>p.value.href),isActive:w,isExactActive:b,navigate:C}}const UR=Da({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kv,setup(s,{slots:a}){const d=ls(kv(s)),{options:p}=Dn(td),f=En(()=>({[wv(s.activeClass,p.linkActiveClass,"router-link-active")]:d.isActive,[wv(s.exactActiveClass,p.linkExactActiveClass,"router-link-exact-active")]:d.isExactActive}));return()=>{const w=a.default&&a.default(d);return s.custom?w:Zl("a",{"aria-current":d.isExactActive?s.ariaCurrentValue:null,href:d.href,onClick:d.navigate,class:f.value},w)}}}),$R=UR;function qR(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const a=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return s.preventDefault&&s.preventDefault(),!0}}function WR(s,a){for(const d in a){const p=a[d],f=s[d];if(typeof p=="string"){if(p!==f)return!1}else if(!Gn(f)||f.length!==p.length||p.some((w,b)=>w!==f[b]))return!1}return!0}function bv(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const wv=(s,a,d)=>s??a??d,GR=Da({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:a,slots:d}){const p=Dn(mp),f=En(()=>s.route||p.value),w=Dn(mv,0),b=En(()=>{let y=Wn(w);const{matched:x}=f.value;let v;for(;(v=x[y])&&!v.components;)y++;return y}),C=En(()=>f.value.matched[b.value]);oa(mv,En(()=>b.value+1)),oa(VR,C),oa(mp,f);const m=xn();return Jo(()=>[m.value,C.value,s.name],([y,x,v],[A,D,N])=>{x&&(x.instances[v]=y,D&&D!==x&&y&&y===A&&(x.leaveGuards.size||(x.leaveGuards=D.leaveGuards),x.updateGuards.size||(x.updateGuards=D.updateGuards))),y&&x&&(!D||!Zr(x,D)||!A)&&(x.enterCallbacks[v]||[]).forEach(B=>B(y))},{flush:"post"}),()=>{const y=f.value,x=s.name,v=C.value,A=v&&v.components[x];if(!A)return _v(d.default,{Component:A,route:y});const D=v.props[x],N=D?D===!0?y.params:typeof D=="function"?D(y):D:null,L=Zl(A,ne({},N,a,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(v.instances[x]=null)},ref:m}));return _v(d.default,{Component:L,route:y})||L}}});function _v(s,a){if(!s)return null;const d=s(a);return d.length===1?d[0]:d}const K1=GR;function KR(s){const a=CR(s.routes,s),d=s.parseQuery||jR,p=s.stringifyQuery||fv,f=s.history,w=Ks(),b=Ks(),C=Ks(),m=Ay(Uo);let y=Uo;Pr&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const x=Mh.bind(null,G=>""+G),v=Mh.bind(null,zR),A=Mh.bind(null,xl);function D(G,ft){let dt,wt;return F1(G)?(dt=a.getRecordMatcher(G),wt=ft):wt=G,a.addRoute(wt,dt)}function N(G){const ft=a.getRecordMatcher(G);ft&&a.removeRoute(ft)}function B(){return a.getRoutes().map(G=>G.record)}function L(G){return!!a.getRecordMatcher(G)}function V(G,ft){if(ft=ne({},ft||m.value),typeof G=="string"){const H=Nh(d,G,ft.path),Q=a.resolve({path:H.path},ft),tt=f.createHref(H.fullPath);return ne(H,Q,{params:A(Q.params),hash:xl(H.hash),redirectedFrom:void 0,href:tt})}let dt;if("path"in G)dt=ne({},G,{path:Nh(d,G.path,ft.path).path});else{const H=ne({},G.params);for(const Q in H)H[Q]==null&&delete H[Q];dt=ne({},G,{params:v(H)}),ft.params=v(ft.params)}const wt=a.resolve(dt,ft),Nt=G.hash||"";wt.params=x(A(wt.params));const z=Z3(p,ne({},G,{hash:PR(Nt),path:wt.path})),F=f.createHref(z);return ne({fullPath:z,hash:Nt,query:p===fv?FR(G.query):G.query||{}},wt,{redirectedFrom:void 0,href:F})}function j(G){return typeof G=="string"?Nh(d,G,m.value.path):ne({},G)}function R(G,ft){if(y!==G)return Jr(8,{from:ft,to:G})}function O(G){return W(G)}function $(G){return O(ne(j(G),{replace:!0}))}function J(G){const ft=G.matched[G.matched.length-1];if(ft&&ft.redirect){const{redirect:dt}=ft;let wt=typeof dt=="function"?dt(G):dt;return typeof wt=="string"&&(wt=wt.includes("?")||wt.includes("#")?wt=j(wt):{path:wt},wt.params={}),ne({query:G.query,hash:G.hash,params:"path"in wt?{}:G.params},wt)}}function W(G,ft){const dt=y=V(G),wt=m.value,Nt=G.state,z=G.force,F=G.replace===!0,H=J(dt);if(H)return W(ne(j(H),{state:typeof H=="object"?ne({},Nt,H.state):Nt,force:z,replace:F}),ft||dt);const Q=dt;Q.redirectedFrom=ft;let tt;return!z&&J3(p,wt,dt)&&(tt=Jr(16,{to:Q,from:wt}),_e(wt,wt,!0,!1)),(tt?Promise.resolve(tt):Z(Q,wt)).catch(ot=>bo(ot)?bo(ot,2)?ot:Ie(ot):Ct(ot,Q,wt)).then(ot=>{if(ot){if(bo(ot,2))return W(ne({replace:F},j(ot.to),{state:typeof ot.to=="object"?ne({},Nt,ot.to.state):Nt,force:z}),ft||Q)}else ot=X(Q,wt,!0,F,Nt);return st(Q,wt,ot),ot})}function I(G,ft){const dt=R(G,ft);return dt?Promise.reject(dt):Promise.resolve()}function q(G){const ft=Mt.values().next().value;return ft&&typeof ft.runWithContext=="function"?ft.runWithContext(G):G()}function Z(G,ft){let dt;const[wt,Nt,z]=YR(G,ft);dt=Bh(wt.reverse(),"beforeRouteLeave",G,ft);for(const H of wt)H.leaveGuards.forEach(Q=>{dt.push(Ko(Q,G,ft))});const F=I.bind(null,G,ft);return dt.push(F),jt(dt).then(()=>{dt=[];for(const H of w.list())dt.push(Ko(H,G,ft));return dt.push(F),jt(dt)}).then(()=>{dt=Bh(Nt,"beforeRouteUpdate",G,ft);for(const H of Nt)H.updateGuards.forEach(Q=>{dt.push(Ko(Q,G,ft))});return dt.push(F),jt(dt)}).then(()=>{dt=[];for(const H of z)if(H.beforeEnter)if(Gn(H.beforeEnter))for(const Q of H.beforeEnter)dt.push(Ko(Q,G,ft));else dt.push(Ko(H.beforeEnter,G,ft));return dt.push(F),jt(dt)}).then(()=>(G.matched.forEach(H=>H.enterCallbacks={}),dt=Bh(z,"beforeRouteEnter",G,ft),dt.push(F),jt(dt))).then(()=>{dt=[];for(const H of b.list())dt.push(Ko(H,G,ft));return dt.push(F),jt(dt)}).catch(H=>bo(H,8)?H:Promise.reject(H))}function st(G,ft,dt){C.list().forEach(wt=>q(()=>wt(G,ft,dt)))}function X(G,ft,dt,wt,Nt){const z=R(G,ft);if(z)return z;const F=ft===Uo,H=Pr?history.state:{};dt&&(wt||F?f.replace(G.fullPath,ne({scroll:F&&H&&H.scroll},Nt)):f.push(G.fullPath,Nt)),m.value=G,_e(G,ft,dt,F),Ie()}let lt;function Lt(){lt||(lt=f.listen((G,ft,dt)=>{if(!Ht.listening)return;const wt=V(G),Nt=J(wt);if(Nt){W(ne(Nt,{replace:!0}),wt).catch(aa);return}y=wt;const z=m.value;Pr&&sR(av(z.fullPath,dt.delta),Xl()),Z(wt,z).catch(F=>bo(F,12)?F:bo(F,2)?(W(F.to,wt).then(H=>{bo(H,20)&&!dt.delta&&dt.type===_a.pop&&f.go(-1,!1)}).catch(aa),Promise.reject()):(dt.delta&&f.go(-dt.delta,!1),Ct(F,wt,z))).then(F=>{F=F||X(wt,z,!1),F&&(dt.delta&&!bo(F,8)?f.go(-dt.delta,!1):dt.type===_a.pop&&bo(F,20)&&f.go(-1,!1)),st(wt,z,F)}).catch(aa)}))}let Tt=Ks(),mt=Ks(),At;function Ct(G,ft,dt){Ie(G);const wt=mt.list();return wt.length?wt.forEach(Nt=>Nt(G,ft,dt)):console.error(G),Promise.reject(G)}function St(){return At&&m.value!==Uo?Promise.resolve():new Promise((G,ft)=>{Tt.add([G,ft])})}function Ie(G){return At||(At=!G,Lt(),Tt.list().forEach(([ft,dt])=>G?dt(G):ft()),Tt.reset()),G}function _e(G,ft,dt,wt){const{scrollBehavior:Nt}=s;if(!Pr||!Nt)return Promise.resolve();const z=!dt&&aR(av(G.fullPath,0))||(wt||!dt)&&history.state&&history.state.scroll||null;return jl().then(()=>Nt(G,ft,z)).then(F=>F&&rR(F)).catch(F=>Ct(F,G,ft))}const de=G=>f.go(G);let at;const Mt=new Set,Ht={currentRoute:m,listening:!0,addRoute:D,removeRoute:N,hasRoute:L,getRoutes:B,resolve:V,options:s,push:O,replace:$,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:w.add,beforeResolve:b.add,afterEach:C.add,onError:mt.add,isReady:St,install(G){const ft=this;G.component("RouterLink",$R),G.component("RouterView",K1),G.config.globalProperties.$router=ft,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>Wn(m)}),Pr&&!at&&m.value===Uo&&(at=!0,O(f.location).catch(Nt=>{}));const dt={};for(const Nt in Uo)Object.defineProperty(dt,Nt,{get:()=>m.value[Nt],enumerable:!0});G.provide(td,ft),G.provide(ng,Mp(dt)),G.provide(mp,m);const wt=G.unmount;Mt.add(G),G.unmount=function(){Mt.delete(G),Mt.size<1&&(y=Uo,lt&&lt(),lt=null,m.value=Uo,at=!1,At=!1),wt()}}};function jt(G){return G.reduce((ft,dt)=>ft.then(()=>q(dt)),Promise.resolve())}return Ht}function YR(s,a){const d=[],p=[],f=[],w=Math.max(a.matched.length,s.matched.length);for(let b=0;b<w;b++){const C=a.matched[b];C&&(s.matched.find(y=>Zr(y,C))?p.push(C):d.push(C));const m=s.matched[b];m&&(a.matched.find(y=>Zr(y,m))||f.push(m))}return[d,p,f]}function QR(){return Dn(td)}function ZR(){return Dn(ng)}const JR={class:"navbar navbar-expand-lg bg-body-tertiary"},XR={class:"container-fluid"},tz=Vt("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Vt("span",{class:"navbar-toggler-icon"})],-1),ez={class:"collapse navbar-collapse",id:"navbarSupportedContent"},nz={class:"navbar-nav me-auto mb-2 mb-lg-0"},oz={class:"nav-item"},iz={class:"nav-item"},rz={class:"nav-item"},sz={class:"nav-item"},az={class:"d-flex",role:"search"},cz={class:"navbar-nav me-auto mb-2 mb-lg-0"},lz={class:"nav-item mt-2"},dz=["src"],uz={class:"nav-item"},hz={class:"nav-link",href:"#"},pz={class:"nav-item"},gz=Vt("a",{class:"nav-link",href:"#"},"Login",-1),fz=[gz],mz={__name:"NavBar",setup(s){const a=xn(""),d=w=>{w.preventDefault(),alert(a.value)},p=xn(!1),f=ls({userName:"",userProfileImageUrl:"/src/assets/noProfile.png"});return(w,b)=>{const C=Sy("router-link");return Nn(),To("nav",JR,[Vt("div",XR,[Kt(C,{to:"/",class:"navbar-brand"},{default:Yo(()=>[ro("Home")]),_:1}),tz,Vt("div",ez,[Vt("ul",nz,[Vt("li",oz,[Kt(C,{to:"/cafe",class:"nav-link"},{default:Yo(()=>[ro("Cafe")]),_:1})]),Vt("li",iz,[Kt(C,{to:"/blog",class:"nav-link"},{default:Yo(()=>[ro("Blog")]),_:1})]),Vt("li",rz,[Kt(C,{to:"/mail/:from/:content",class:"nav-link"},{default:Yo(()=>[ro("Mail")]),_:1})]),Vt("li",sz,[Kt(C,{to:"/tellme",class:"nav-link"},{default:Yo(()=>[ro("TellMe")]),_:1})])]),Vt("form",az,[ll(Vt("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search","onUpdate:modelValue":b[0]||(b[0]=m=>a.value=m)},null,512),[[wa,a.value]]),Vt("button",{class:"btn btn-outline-success",onClick:d},"Search")]),Vt("ul",cz,[Vt("li",lz,[Vt("img",{src:f.userProfileImageUrl,alt:"",style:{width:"24px","border-radius":"50% height=24px"}},null,8,dz)]),ll(Vt("li",uz,[Vt("a",hz,kl(f.userName)+" Logout",1)],512),[[yl,p.value]]),ll(Vt("li",pz,fz,512),[[yl,!p.value]])])])])])}}},ed=(s,a)=>{const d=s.__vccOpts||s;for(const[p,f]of a)d[p]=f;return d},kz={},bz={class:"pt-md-3"},wz=Yl('<div class="row"><div class="col-12 col-md"><small class="d-block mb-3 text-muted">© 2017-2018</small></div><div class="col-4 col-md"><h5>Features</h5><ul class="list-unstyled text-small"><li><a class="text-muted" href="#">Cool stuff</a></li><li><a class="text-muted" href="#">Random feature</a></li><li><a class="text-muted" href="#">Team feature</a></li><li><a class="text-muted" href="#">Stuff for developers</a></li><li><a class="text-muted" href="#">Another one</a></li><li><a class="text-muted" href="#">Last time</a></li></ul></div><div class="col-4 col-md"><h5>Resources</h5><ul class="list-unstyled text-small"><li><a class="text-muted" href="#">Resource</a></li><li><a class="text-muted" href="#">Resource name</a></li><li><a class="text-muted" href="#">Another resource</a></li><li><a class="text-muted" href="#">Final resource</a></li></ul></div><div class="col-4 col-md"><h5>About</h5><ul class="list-unstyled text-small"><li><a class="text-muted" href="#">Team</a></li><li><a class="text-muted" href="#">Locations</a></li><li><a class="text-muted" href="#">Privacy</a></li><li><a class="text-muted" href="#">Terms</a></li></ul></div></div>',1),_z=[wz];function Az(s,a){return Nn(),To("footer",bz,_z)}const Cz=ed(kz,[["render",Az]]),vz={class:"container"},yz={__name:"App",setup(s){return(a,d)=>(Nn(),To("div",vz,[Kt(mz),Kt(Wn(K1)),Kt(Cz)]))}};var $e="top",pn="bottom",gn="right",qe="left",nd="auto",ds=[$e,pn,gn,qe],Xi="start",Xr="end",Y1="clippingParents",og="viewport",Lr="popper",Q1="reference",kp=ds.reduce(function(s,a){return s.concat([a+"-"+Xi,a+"-"+Xr])},[]),ig=[].concat(ds,[nd]).reduce(function(s,a){return s.concat([a,a+"-"+Xi,a+"-"+Xr])},[]),Z1="beforeRead",J1="read",X1="afterRead",tE="beforeMain",eE="main",nE="afterMain",oE="beforeWrite",iE="write",rE="afterWrite",sE=[Z1,J1,X1,tE,eE,nE,oE,iE,rE];function lo(s){return s?(s.nodeName||"").toLowerCase():null}function fn(s){if(s==null)return window;if(s.toString()!=="[object Window]"){var a=s.ownerDocument;return a&&a.defaultView||window}return s}function tr(s){var a=fn(s).Element;return s instanceof a||s instanceof Element}function Sn(s){var a=fn(s).HTMLElement;return s instanceof a||s instanceof HTMLElement}function rg(s){if(typeof ShadowRoot>"u")return!1;var a=fn(s).ShadowRoot;return s instanceof a||s instanceof ShadowRoot}function Ez(s){var a=s.state;Object.keys(a.elements).forEach(function(d){var p=a.styles[d]||{},f=a.attributes[d]||{},w=a.elements[d];!Sn(w)||!lo(w)||(Object.assign(w.style,p),Object.keys(f).forEach(function(b){var C=f[b];C===!1?w.removeAttribute(b):w.setAttribute(b,C===!0?"":C)}))})}function xz(s){var a=s.state,d={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,d.popper),a.styles=d,a.elements.arrow&&Object.assign(a.elements.arrow.style,d.arrow),function(){Object.keys(a.elements).forEach(function(p){var f=a.elements[p],w=a.attributes[p]||{},b=Object.keys(a.styles.hasOwnProperty(p)?a.styles[p]:d[p]),C=b.reduce(function(m,y){return m[y]="",m},{});!Sn(f)||!lo(f)||(Object.assign(f.style,C),Object.keys(w).forEach(function(m){f.removeAttribute(m)}))})}}const sg={name:"applyStyles",enabled:!0,phase:"write",fn:Ez,effect:xz,requires:["computeStyles"]};function so(s){return s.split("-")[0]}var Ki=Math.max,Dl=Math.min,ts=Math.round;function bp(){var s=navigator.userAgentData;return s!=null&&s.brands&&Array.isArray(s.brands)?s.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function aE(){return!/^((?!chrome|android).)*safari/i.test(bp())}function es(s,a,d){a===void 0&&(a=!1),d===void 0&&(d=!1);var p=s.getBoundingClientRect(),f=1,w=1;a&&Sn(s)&&(f=s.offsetWidth>0&&ts(p.width)/s.offsetWidth||1,w=s.offsetHeight>0&&ts(p.height)/s.offsetHeight||1);var b=tr(s)?fn(s):window,C=b.visualViewport,m=!aE()&&d,y=(p.left+(m&&C?C.offsetLeft:0))/f,x=(p.top+(m&&C?C.offsetTop:0))/w,v=p.width/f,A=p.height/w;return{width:v,height:A,top:x,right:y+v,bottom:x+A,left:y,x:y,y:x}}function ag(s){var a=es(s),d=s.offsetWidth,p=s.offsetHeight;return Math.abs(a.width-d)<=1&&(d=a.width),Math.abs(a.height-p)<=1&&(p=a.height),{x:s.offsetLeft,y:s.offsetTop,width:d,height:p}}function cE(s,a){var d=a.getRootNode&&a.getRootNode();if(s.contains(a))return!0;if(d&&rg(d)){var p=a;do{if(p&&s.isSameNode(p))return!0;p=p.parentNode||p.host}while(p)}return!1}function xo(s){return fn(s).getComputedStyle(s)}function Dz(s){return["table","td","th"].indexOf(lo(s))>=0}function li(s){return((tr(s)?s.ownerDocument:s.document)||window.document).documentElement}function od(s){return lo(s)==="html"?s:s.assignedSlot||s.parentNode||(rg(s)?s.host:null)||li(s)}function Av(s){return!Sn(s)||xo(s).position==="fixed"?null:s.offsetParent}function Tz(s){var a=/firefox/i.test(bp()),d=/Trident/i.test(bp());if(d&&Sn(s)){var p=xo(s);if(p.position==="fixed")return null}var f=od(s);for(rg(f)&&(f=f.host);Sn(f)&&["html","body"].indexOf(lo(f))<0;){var w=xo(f);if(w.transform!=="none"||w.perspective!=="none"||w.contain==="paint"||["transform","perspective"].indexOf(w.willChange)!==-1||a&&w.willChange==="filter"||a&&w.filter&&w.filter!=="none")return f;f=f.parentNode}return null}function Ia(s){for(var a=fn(s),d=Av(s);d&&Dz(d)&&xo(d).position==="static";)d=Av(d);return d&&(lo(d)==="html"||lo(d)==="body"&&xo(d).position==="static")?a:d||Tz(s)||a}function cg(s){return["top","bottom"].indexOf(s)>=0?"x":"y"}function la(s,a,d){return Ki(s,Dl(a,d))}function Sz(s,a,d){var p=la(s,a,d);return p>d?d:p}function lE(){return{top:0,right:0,bottom:0,left:0}}function dE(s){return Object.assign({},lE(),s)}function uE(s,a){return a.reduce(function(d,p){return d[p]=s,d},{})}var Iz=function(a,d){return a=typeof a=="function"?a(Object.assign({},d.rects,{placement:d.placement})):a,dE(typeof a!="number"?a:uE(a,ds))};function Mz(s){var a,d=s.state,p=s.name,f=s.options,w=d.elements.arrow,b=d.modifiersData.popperOffsets,C=so(d.placement),m=cg(C),y=[qe,gn].indexOf(C)>=0,x=y?"height":"width";if(!(!w||!b)){var v=Iz(f.padding,d),A=ag(w),D=m==="y"?$e:qe,N=m==="y"?pn:gn,B=d.rects.reference[x]+d.rects.reference[m]-b[m]-d.rects.popper[x],L=b[m]-d.rects.reference[m],V=Ia(w),j=V?m==="y"?V.clientHeight||0:V.clientWidth||0:0,R=B/2-L/2,O=v[D],$=j-A[x]-v[N],J=j/2-A[x]/2+R,W=la(O,J,$),I=m;d.modifiersData[p]=(a={},a[I]=W,a.centerOffset=W-J,a)}}function Nz(s){var a=s.state,d=s.options,p=d.element,f=p===void 0?"[data-popper-arrow]":p;f!=null&&(typeof f=="string"&&(f=a.elements.popper.querySelector(f),!f)||cE(a.elements.popper,f)&&(a.elements.arrow=f))}const hE={name:"arrow",enabled:!0,phase:"main",fn:Mz,effect:Nz,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ns(s){return s.split("-")[1]}var Bz={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Oz(s,a){var d=s.x,p=s.y,f=a.devicePixelRatio||1;return{x:ts(d*f)/f||0,y:ts(p*f)/f||0}}function Cv(s){var a,d=s.popper,p=s.popperRect,f=s.placement,w=s.variation,b=s.offsets,C=s.position,m=s.gpuAcceleration,y=s.adaptive,x=s.roundOffsets,v=s.isFixed,A=b.x,D=A===void 0?0:A,N=b.y,B=N===void 0?0:N,L=typeof x=="function"?x({x:D,y:B}):{x:D,y:B};D=L.x,B=L.y;var V=b.hasOwnProperty("x"),j=b.hasOwnProperty("y"),R=qe,O=$e,$=window;if(y){var J=Ia(d),W="clientHeight",I="clientWidth";if(J===fn(d)&&(J=li(d),xo(J).position!=="static"&&C==="absolute"&&(W="scrollHeight",I="scrollWidth")),J=J,f===$e||(f===qe||f===gn)&&w===Xr){O=pn;var q=v&&J===$&&$.visualViewport?$.visualViewport.height:J[W];B-=q-p.height,B*=m?1:-1}if(f===qe||(f===$e||f===pn)&&w===Xr){R=gn;var Z=v&&J===$&&$.visualViewport?$.visualViewport.width:J[I];D-=Z-p.width,D*=m?1:-1}}var st=Object.assign({position:C},y&&Bz),X=x===!0?Oz({x:D,y:B},fn(d)):{x:D,y:B};if(D=X.x,B=X.y,m){var lt;return Object.assign({},st,(lt={},lt[O]=j?"0":"",lt[R]=V?"0":"",lt.transform=($.devicePixelRatio||1)<=1?"translate("+D+"px, "+B+"px)":"translate3d("+D+"px, "+B+"px, 0)",lt))}return Object.assign({},st,(a={},a[O]=j?B+"px":"",a[R]=V?D+"px":"",a.transform="",a))}function Pz(s){var a=s.state,d=s.options,p=d.gpuAcceleration,f=p===void 0?!0:p,w=d.adaptive,b=w===void 0?!0:w,C=d.roundOffsets,m=C===void 0?!0:C,y={placement:so(a.placement),variation:ns(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:f,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,Cv(Object.assign({},y,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:b,roundOffsets:m})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,Cv(Object.assign({},y,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:m})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})}const lg={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Pz,data:{}};var el={passive:!0};function Lz(s){var a=s.state,d=s.instance,p=s.options,f=p.scroll,w=f===void 0?!0:f,b=p.resize,C=b===void 0?!0:b,m=fn(a.elements.popper),y=[].concat(a.scrollParents.reference,a.scrollParents.popper);return w&&y.forEach(function(x){x.addEventListener("scroll",d.update,el)}),C&&m.addEventListener("resize",d.update,el),function(){w&&y.forEach(function(x){x.removeEventListener("scroll",d.update,el)}),C&&m.removeEventListener("resize",d.update,el)}}const dg={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Lz,data:{}};var Rz={left:"right",right:"left",bottom:"top",top:"bottom"};function ul(s){return s.replace(/left|right|bottom|top/g,function(a){return Rz[a]})}var zz={start:"end",end:"start"};function vv(s){return s.replace(/start|end/g,function(a){return zz[a]})}function ug(s){var a=fn(s),d=a.pageXOffset,p=a.pageYOffset;return{scrollLeft:d,scrollTop:p}}function hg(s){return es(li(s)).left+ug(s).scrollLeft}function jz(s,a){var d=fn(s),p=li(s),f=d.visualViewport,w=p.clientWidth,b=p.clientHeight,C=0,m=0;if(f){w=f.width,b=f.height;var y=aE();(y||!y&&a==="fixed")&&(C=f.offsetLeft,m=f.offsetTop)}return{width:w,height:b,x:C+hg(s),y:m}}function Fz(s){var a,d=li(s),p=ug(s),f=(a=s.ownerDocument)==null?void 0:a.body,w=Ki(d.scrollWidth,d.clientWidth,f?f.scrollWidth:0,f?f.clientWidth:0),b=Ki(d.scrollHeight,d.clientHeight,f?f.scrollHeight:0,f?f.clientHeight:0),C=-p.scrollLeft+hg(s),m=-p.scrollTop;return xo(f||d).direction==="rtl"&&(C+=Ki(d.clientWidth,f?f.clientWidth:0)-w),{width:w,height:b,x:C,y:m}}function pg(s){var a=xo(s),d=a.overflow,p=a.overflowX,f=a.overflowY;return/auto|scroll|overlay|hidden/.test(d+f+p)}function pE(s){return["html","body","#document"].indexOf(lo(s))>=0?s.ownerDocument.body:Sn(s)&&pg(s)?s:pE(od(s))}function da(s,a){var d;a===void 0&&(a=[]);var p=pE(s),f=p===((d=s.ownerDocument)==null?void 0:d.body),w=fn(p),b=f?[w].concat(w.visualViewport||[],pg(p)?p:[]):p,C=a.concat(b);return f?C:C.concat(da(od(b)))}function wp(s){return Object.assign({},s,{left:s.x,top:s.y,right:s.x+s.width,bottom:s.y+s.height})}function Vz(s,a){var d=es(s,!1,a==="fixed");return d.top=d.top+s.clientTop,d.left=d.left+s.clientLeft,d.bottom=d.top+s.clientHeight,d.right=d.left+s.clientWidth,d.width=s.clientWidth,d.height=s.clientHeight,d.x=d.left,d.y=d.top,d}function yv(s,a,d){return a===og?wp(jz(s,d)):tr(a)?Vz(a,d):wp(Fz(li(s)))}function Hz(s){var a=da(od(s)),d=["absolute","fixed"].indexOf(xo(s).position)>=0,p=d&&Sn(s)?Ia(s):s;return tr(p)?a.filter(function(f){return tr(f)&&cE(f,p)&&lo(f)!=="body"}):[]}function Uz(s,a,d,p){var f=a==="clippingParents"?Hz(s):[].concat(a),w=[].concat(f,[d]),b=w[0],C=w.reduce(function(m,y){var x=yv(s,y,p);return m.top=Ki(x.top,m.top),m.right=Dl(x.right,m.right),m.bottom=Dl(x.bottom,m.bottom),m.left=Ki(x.left,m.left),m},yv(s,b,p));return C.width=C.right-C.left,C.height=C.bottom-C.top,C.x=C.left,C.y=C.top,C}function gE(s){var a=s.reference,d=s.element,p=s.placement,f=p?so(p):null,w=p?ns(p):null,b=a.x+a.width/2-d.width/2,C=a.y+a.height/2-d.height/2,m;switch(f){case $e:m={x:b,y:a.y-d.height};break;case pn:m={x:b,y:a.y+a.height};break;case gn:m={x:a.x+a.width,y:C};break;case qe:m={x:a.x-d.width,y:C};break;default:m={x:a.x,y:a.y}}var y=f?cg(f):null;if(y!=null){var x=y==="y"?"height":"width";switch(w){case Xi:m[y]=m[y]-(a[x]/2-d[x]/2);break;case Xr:m[y]=m[y]+(a[x]/2-d[x]/2);break}}return m}function os(s,a){a===void 0&&(a={});var d=a,p=d.placement,f=p===void 0?s.placement:p,w=d.strategy,b=w===void 0?s.strategy:w,C=d.boundary,m=C===void 0?Y1:C,y=d.rootBoundary,x=y===void 0?og:y,v=d.elementContext,A=v===void 0?Lr:v,D=d.altBoundary,N=D===void 0?!1:D,B=d.padding,L=B===void 0?0:B,V=dE(typeof L!="number"?L:uE(L,ds)),j=A===Lr?Q1:Lr,R=s.rects.popper,O=s.elements[N?j:A],$=Uz(tr(O)?O:O.contextElement||li(s.elements.popper),m,x,b),J=es(s.elements.reference),W=gE({reference:J,element:R,strategy:"absolute",placement:f}),I=wp(Object.assign({},R,W)),q=A===Lr?I:J,Z={top:$.top-q.top+V.top,bottom:q.bottom-$.bottom+V.bottom,left:$.left-q.left+V.left,right:q.right-$.right+V.right},st=s.modifiersData.offset;if(A===Lr&&st){var X=st[f];Object.keys(Z).forEach(function(lt){var Lt=[gn,pn].indexOf(lt)>=0?1:-1,Tt=[$e,pn].indexOf(lt)>=0?"y":"x";Z[lt]+=X[Tt]*Lt})}return Z}function $z(s,a){a===void 0&&(a={});var d=a,p=d.placement,f=d.boundary,w=d.rootBoundary,b=d.padding,C=d.flipVariations,m=d.allowedAutoPlacements,y=m===void 0?ig:m,x=ns(p),v=x?C?kp:kp.filter(function(N){return ns(N)===x}):ds,A=v.filter(function(N){return y.indexOf(N)>=0});A.length===0&&(A=v);var D=A.reduce(function(N,B){return N[B]=os(s,{placement:B,boundary:f,rootBoundary:w,padding:b})[so(B)],N},{});return Object.keys(D).sort(function(N,B){return D[N]-D[B]})}function qz(s){if(so(s)===nd)return[];var a=ul(s);return[vv(s),a,vv(a)]}function Wz(s){var a=s.state,d=s.options,p=s.name;if(!a.modifiersData[p]._skip){for(var f=d.mainAxis,w=f===void 0?!0:f,b=d.altAxis,C=b===void 0?!0:b,m=d.fallbackPlacements,y=d.padding,x=d.boundary,v=d.rootBoundary,A=d.altBoundary,D=d.flipVariations,N=D===void 0?!0:D,B=d.allowedAutoPlacements,L=a.options.placement,V=so(L),j=V===L,R=m||(j||!N?[ul(L)]:qz(L)),O=[L].concat(R).reduce(function(Mt,Ht){return Mt.concat(so(Ht)===nd?$z(a,{placement:Ht,boundary:x,rootBoundary:v,padding:y,flipVariations:N,allowedAutoPlacements:B}):Ht)},[]),$=a.rects.reference,J=a.rects.popper,W=new Map,I=!0,q=O[0],Z=0;Z<O.length;Z++){var st=O[Z],X=so(st),lt=ns(st)===Xi,Lt=[$e,pn].indexOf(X)>=0,Tt=Lt?"width":"height",mt=os(a,{placement:st,boundary:x,rootBoundary:v,altBoundary:A,padding:y}),At=Lt?lt?gn:qe:lt?pn:$e;$[Tt]>J[Tt]&&(At=ul(At));var Ct=ul(At),St=[];if(w&&St.push(mt[X]<=0),C&&St.push(mt[At]<=0,mt[Ct]<=0),St.every(function(Mt){return Mt})){q=st,I=!1;break}W.set(st,St)}if(I)for(var Ie=N?3:1,_e=function(Ht){var jt=O.find(function(G){var ft=W.get(G);if(ft)return ft.slice(0,Ht).every(function(dt){return dt})});if(jt)return q=jt,"break"},de=Ie;de>0;de--){var at=_e(de);if(at==="break")break}a.placement!==q&&(a.modifiersData[p]._skip=!0,a.placement=q,a.reset=!0)}}const fE={name:"flip",enabled:!0,phase:"main",fn:Wz,requiresIfExists:["offset"],data:{_skip:!1}};function Ev(s,a,d){return d===void 0&&(d={x:0,y:0}),{top:s.top-a.height-d.y,right:s.right-a.width+d.x,bottom:s.bottom-a.height+d.y,left:s.left-a.width-d.x}}function xv(s){return[$e,gn,pn,qe].some(function(a){return s[a]>=0})}function Gz(s){var a=s.state,d=s.name,p=a.rects.reference,f=a.rects.popper,w=a.modifiersData.preventOverflow,b=os(a,{elementContext:"reference"}),C=os(a,{altBoundary:!0}),m=Ev(b,p),y=Ev(C,f,w),x=xv(m),v=xv(y);a.modifiersData[d]={referenceClippingOffsets:m,popperEscapeOffsets:y,isReferenceHidden:x,hasPopperEscaped:v},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":x,"data-popper-escaped":v})}const mE={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Gz};function Kz(s,a,d){var p=so(s),f=[qe,$e].indexOf(p)>=0?-1:1,w=typeof d=="function"?d(Object.assign({},a,{placement:s})):d,b=w[0],C=w[1];return b=b||0,C=(C||0)*f,[qe,gn].indexOf(p)>=0?{x:C,y:b}:{x:b,y:C}}function Yz(s){var a=s.state,d=s.options,p=s.name,f=d.offset,w=f===void 0?[0,0]:f,b=ig.reduce(function(x,v){return x[v]=Kz(v,a.rects,w),x},{}),C=b[a.placement],m=C.x,y=C.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=m,a.modifiersData.popperOffsets.y+=y),a.modifiersData[p]=b}const kE={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Yz};function Qz(s){var a=s.state,d=s.name;a.modifiersData[d]=gE({reference:a.rects.reference,element:a.rects.popper,strategy:"absolute",placement:a.placement})}const gg={name:"popperOffsets",enabled:!0,phase:"read",fn:Qz,data:{}};function Zz(s){return s==="x"?"y":"x"}function Jz(s){var a=s.state,d=s.options,p=s.name,f=d.mainAxis,w=f===void 0?!0:f,b=d.altAxis,C=b===void 0?!1:b,m=d.boundary,y=d.rootBoundary,x=d.altBoundary,v=d.padding,A=d.tether,D=A===void 0?!0:A,N=d.tetherOffset,B=N===void 0?0:N,L=os(a,{boundary:m,rootBoundary:y,padding:v,altBoundary:x}),V=so(a.placement),j=ns(a.placement),R=!j,O=cg(V),$=Zz(O),J=a.modifiersData.popperOffsets,W=a.rects.reference,I=a.rects.popper,q=typeof B=="function"?B(Object.assign({},a.rects,{placement:a.placement})):B,Z=typeof q=="number"?{mainAxis:q,altAxis:q}:Object.assign({mainAxis:0,altAxis:0},q),st=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,X={x:0,y:0};if(J){if(w){var lt,Lt=O==="y"?$e:qe,Tt=O==="y"?pn:gn,mt=O==="y"?"height":"width",At=J[O],Ct=At+L[Lt],St=At-L[Tt],Ie=D?-I[mt]/2:0,_e=j===Xi?W[mt]:I[mt],de=j===Xi?-I[mt]:-W[mt],at=a.elements.arrow,Mt=D&&at?ag(at):{width:0,height:0},Ht=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:lE(),jt=Ht[Lt],G=Ht[Tt],ft=la(0,W[mt],Mt[mt]),dt=R?W[mt]/2-Ie-ft-jt-Z.mainAxis:_e-ft-jt-Z.mainAxis,wt=R?-W[mt]/2+Ie+ft+G+Z.mainAxis:de+ft+G+Z.mainAxis,Nt=a.elements.arrow&&Ia(a.elements.arrow),z=Nt?O==="y"?Nt.clientTop||0:Nt.clientLeft||0:0,F=(lt=st==null?void 0:st[O])!=null?lt:0,H=At+dt-F-z,Q=At+wt-F,tt=la(D?Dl(Ct,H):Ct,At,D?Ki(St,Q):St);J[O]=tt,X[O]=tt-At}if(C){var ot,kt=O==="x"?$e:qe,ct=O==="x"?pn:gn,ut=J[$],et=$==="y"?"height":"width",ht=ut+L[kt],pt=ut-L[ct],vt=[$e,qe].indexOf(V)!==-1,Ot=(ot=st==null?void 0:st[$])!=null?ot:0,It=vt?ht:ut-W[et]-I[et]-Ot+Z.altAxis,zt=vt?ut+W[et]+I[et]-Ot-Z.altAxis:pt,qt=D&&vt?Sz(It,ut,zt):la(D?It:ht,ut,D?zt:pt);J[$]=qt,X[$]=qt-ut}a.modifiersData[p]=X}}const bE={name:"preventOverflow",enabled:!0,phase:"main",fn:Jz,requiresIfExists:["offset"]};function Xz(s){return{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}}function tj(s){return s===fn(s)||!Sn(s)?ug(s):Xz(s)}function ej(s){var a=s.getBoundingClientRect(),d=ts(a.width)/s.offsetWidth||1,p=ts(a.height)/s.offsetHeight||1;return d!==1||p!==1}function nj(s,a,d){d===void 0&&(d=!1);var p=Sn(a),f=Sn(a)&&ej(a),w=li(a),b=es(s,f,d),C={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(p||!p&&!d)&&((lo(a)!=="body"||pg(w))&&(C=tj(a)),Sn(a)?(m=es(a,!0),m.x+=a.clientLeft,m.y+=a.clientTop):w&&(m.x=hg(w))),{x:b.left+C.scrollLeft-m.x,y:b.top+C.scrollTop-m.y,width:b.width,height:b.height}}function oj(s){var a=new Map,d=new Set,p=[];s.forEach(function(w){a.set(w.name,w)});function f(w){d.add(w.name);var b=[].concat(w.requires||[],w.requiresIfExists||[]);b.forEach(function(C){if(!d.has(C)){var m=a.get(C);m&&f(m)}}),p.push(w)}return s.forEach(function(w){d.has(w.name)||f(w)}),p}function ij(s){var a=oj(s);return sE.reduce(function(d,p){return d.concat(a.filter(function(f){return f.phase===p}))},[])}function rj(s){var a;return function(){return a||(a=new Promise(function(d){Promise.resolve().then(function(){a=void 0,d(s())})})),a}}function sj(s){var a=s.reduce(function(d,p){var f=d[p.name];return d[p.name]=f?Object.assign({},f,p,{options:Object.assign({},f.options,p.options),data:Object.assign({},f.data,p.data)}):p,d},{});return Object.keys(a).map(function(d){return a[d]})}var Dv={placement:"bottom",modifiers:[],strategy:"absolute"};function Tv(){for(var s=arguments.length,a=new Array(s),d=0;d<s;d++)a[d]=arguments[d];return!a.some(function(p){return!(p&&typeof p.getBoundingClientRect=="function")})}function id(s){s===void 0&&(s={});var a=s,d=a.defaultModifiers,p=d===void 0?[]:d,f=a.defaultOptions,w=f===void 0?Dv:f;return function(C,m,y){y===void 0&&(y=w);var x={placement:"bottom",orderedModifiers:[],options:Object.assign({},Dv,w),modifiersData:{},elements:{reference:C,popper:m},attributes:{},styles:{}},v=[],A=!1,D={state:x,setOptions:function(V){var j=typeof V=="function"?V(x.options):V;B(),x.options=Object.assign({},w,x.options,j),x.scrollParents={reference:tr(C)?da(C):C.contextElement?da(C.contextElement):[],popper:da(m)};var R=ij(sj([].concat(p,x.options.modifiers)));return x.orderedModifiers=R.filter(function(O){return O.enabled}),N(),D.update()},forceUpdate:function(){if(!A){var V=x.elements,j=V.reference,R=V.popper;if(Tv(j,R)){x.rects={reference:nj(j,Ia(R),x.options.strategy==="fixed"),popper:ag(R)},x.reset=!1,x.placement=x.options.placement,x.orderedModifiers.forEach(function(Z){return x.modifiersData[Z.name]=Object.assign({},Z.data)});for(var O=0;O<x.orderedModifiers.length;O++){if(x.reset===!0){x.reset=!1,O=-1;continue}var $=x.orderedModifiers[O],J=$.fn,W=$.options,I=W===void 0?{}:W,q=$.name;typeof J=="function"&&(x=J({state:x,options:I,name:q,instance:D})||x)}}}},update:rj(function(){return new Promise(function(L){D.forceUpdate(),L(x)})}),destroy:function(){B(),A=!0}};if(!Tv(C,m))return D;D.setOptions(y).then(function(L){!A&&y.onFirstUpdate&&y.onFirstUpdate(L)});function N(){x.orderedModifiers.forEach(function(L){var V=L.name,j=L.options,R=j===void 0?{}:j,O=L.effect;if(typeof O=="function"){var $=O({state:x,name:V,instance:D,options:R}),J=function(){};v.push($||J)}})}function B(){v.forEach(function(L){return L()}),v=[]}return D}}var aj=id(),cj=[dg,gg,lg,sg],lj=id({defaultModifiers:cj}),dj=[dg,gg,lg,sg,kE,fE,bE,hE,mE],fg=id({defaultModifiers:dj});const wE=Object.freeze(Object.defineProperty({__proto__:null,afterMain:nE,afterRead:X1,afterWrite:rE,applyStyles:sg,arrow:hE,auto:nd,basePlacements:ds,beforeMain:tE,beforeRead:Z1,beforeWrite:oE,bottom:pn,clippingParents:Y1,computeStyles:lg,createPopper:fg,createPopperBase:aj,createPopperLite:lj,detectOverflow:os,end:Xr,eventListeners:dg,flip:fE,hide:mE,left:qe,main:eE,modifierPhases:sE,offset:kE,placements:ig,popper:Lr,popperGenerator:id,popperOffsets:gg,preventOverflow:bE,read:J1,reference:Q1,right:gn,start:Xi,top:$e,variationPlacements:kp,viewport:og,write:iE},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const $o=new Map,Oh={set(s,a,d){$o.has(s)||$o.set(s,new Map);const p=$o.get(s);if(!p.has(a)&&p.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(p.keys())[0]}.`);return}p.set(a,d)},get(s,a){return $o.has(s)&&$o.get(s).get(a)||null},remove(s,a){if(!$o.has(s))return;const d=$o.get(s);d.delete(a),d.size===0&&$o.delete(s)}},uj=1e6,hj=1e3,_p="transitionend",_E=s=>(s&&window.CSS&&window.CSS.escape&&(s=s.replace(/#([^\s"#']+)/g,(a,d)=>`#${CSS.escape(d)}`)),s),pj=s=>s==null?`${s}`:Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase(),gj=s=>{do s+=Math.floor(Math.random()*uj);while(document.getElementById(s));return s},fj=s=>{if(!s)return 0;let{transitionDuration:a,transitionDelay:d}=window.getComputedStyle(s);const p=Number.parseFloat(a),f=Number.parseFloat(d);return!p&&!f?0:(a=a.split(",")[0],d=d.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(d))*hj)},AE=s=>{s.dispatchEvent(new Event(_p))},yo=s=>!s||typeof s!="object"?!1:(typeof s.jquery<"u"&&(s=s[0]),typeof s.nodeType<"u"),si=s=>yo(s)?s.jquery?s[0]:s:typeof s=="string"&&s.length>0?document.querySelector(_E(s)):null,us=s=>{if(!yo(s)||s.getClientRects().length===0)return!1;const a=getComputedStyle(s).getPropertyValue("visibility")==="visible",d=s.closest("details:not([open])");if(!d)return a;if(d!==s){const p=s.closest("summary");if(p&&p.parentNode!==d||p===null)return!1}return a},ai=s=>!s||s.nodeType!==Node.ELEMENT_NODE||s.classList.contains("disabled")?!0:typeof s.disabled<"u"?s.disabled:s.hasAttribute("disabled")&&s.getAttribute("disabled")!=="false",CE=s=>{if(!document.documentElement.attachShadow)return null;if(typeof s.getRootNode=="function"){const a=s.getRootNode();return a instanceof ShadowRoot?a:null}return s instanceof ShadowRoot?s:s.parentNode?CE(s.parentNode):null},Tl=()=>{},Ma=s=>{s.offsetHeight},vE=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ph=[],mj=s=>{document.readyState==="loading"?(Ph.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of Ph)a()}),Ph.push(s)):s()},In=()=>document.documentElement.dir==="rtl",Bn=s=>{mj(()=>{const a=vE();if(a){const d=s.NAME,p=a.fn[d];a.fn[d]=s.jQueryInterface,a.fn[d].Constructor=s,a.fn[d].noConflict=()=>(a.fn[d]=p,s.jQueryInterface)}})},Je=(s,a=[],d=s)=>typeof s=="function"?s(...a):d,yE=(s,a,d=!0)=>{if(!d){Je(s);return}const p=5,f=fj(a)+p;let w=!1;const b=({target:C})=>{C===a&&(w=!0,a.removeEventListener(_p,b),Je(s))};a.addEventListener(_p,b),setTimeout(()=>{w||AE(a)},f)},mg=(s,a,d,p)=>{const f=s.length;let w=s.indexOf(a);return w===-1?!d&&p?s[f-1]:s[0]:(w+=d?1:-1,p&&(w=(w+f)%f),s[Math.max(0,Math.min(w,f-1))])},kj=/[^.]*(?=\..*)\.|.*/,bj=/\..*/,wj=/::\d+$/,Lh={};let Sv=1;const EE={mouseenter:"mouseover",mouseleave:"mouseout"},_j=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function xE(s,a){return a&&`${a}::${Sv++}`||s.uidEvent||Sv++}function DE(s){const a=xE(s);return s.uidEvent=a,Lh[a]=Lh[a]||{},Lh[a]}function Aj(s,a){return function d(p){return kg(p,{delegateTarget:s}),d.oneOff&&it.off(s,p.type,a),a.apply(s,[p])}}function Cj(s,a,d){return function p(f){const w=s.querySelectorAll(a);for(let{target:b}=f;b&&b!==this;b=b.parentNode)for(const C of w)if(C===b)return kg(f,{delegateTarget:b}),p.oneOff&&it.off(s,f.type,a,d),d.apply(b,[f])}}function TE(s,a,d=null){return Object.values(s).find(p=>p.callable===a&&p.delegationSelector===d)}function SE(s,a,d){const p=typeof a=="string",f=p?d:a||d;let w=IE(s);return _j.has(w)||(w=s),[p,f,w]}function Iv(s,a,d,p,f){if(typeof a!="string"||!s)return;let[w,b,C]=SE(a,d,p);a in EE&&(b=(N=>function(B){if(!B.relatedTarget||B.relatedTarget!==B.delegateTarget&&!B.delegateTarget.contains(B.relatedTarget))return N.call(this,B)})(b));const m=DE(s),y=m[C]||(m[C]={}),x=TE(y,b,w?d:null);if(x){x.oneOff=x.oneOff&&f;return}const v=xE(b,a.replace(kj,"")),A=w?Cj(s,d,b):Aj(s,b);A.delegationSelector=w?d:null,A.callable=b,A.oneOff=f,A.uidEvent=v,y[v]=A,s.addEventListener(C,A,w)}function Ap(s,a,d,p,f){const w=TE(a[d],p,f);w&&(s.removeEventListener(d,w,!!f),delete a[d][w.uidEvent])}function vj(s,a,d,p){const f=a[d]||{};for(const[w,b]of Object.entries(f))w.includes(p)&&Ap(s,a,d,b.callable,b.delegationSelector)}function IE(s){return s=s.replace(bj,""),EE[s]||s}const it={on(s,a,d,p){Iv(s,a,d,p,!1)},one(s,a,d,p){Iv(s,a,d,p,!0)},off(s,a,d,p){if(typeof a!="string"||!s)return;const[f,w,b]=SE(a,d,p),C=b!==a,m=DE(s),y=m[b]||{},x=a.startsWith(".");if(typeof w<"u"){if(!Object.keys(y).length)return;Ap(s,m,b,w,f?d:null);return}if(x)for(const v of Object.keys(m))vj(s,m,v,a.slice(1));for(const[v,A]of Object.entries(y)){const D=v.replace(wj,"");(!C||a.includes(D))&&Ap(s,m,b,A.callable,A.delegationSelector)}},trigger(s,a,d){if(typeof a!="string"||!s)return null;const p=vE(),f=IE(a),w=a!==f;let b=null,C=!0,m=!0,y=!1;w&&p&&(b=p.Event(a,d),p(s).trigger(b),C=!b.isPropagationStopped(),m=!b.isImmediatePropagationStopped(),y=b.isDefaultPrevented());const x=kg(new Event(a,{bubbles:C,cancelable:!0}),d);return y&&x.preventDefault(),m&&s.dispatchEvent(x),x.defaultPrevented&&b&&b.preventDefault(),x}};function kg(s,a={}){for(const[d,p]of Object.entries(a))try{s[d]=p}catch{Object.defineProperty(s,d,{configurable:!0,get(){return p}})}return s}function Mv(s){if(s==="true")return!0;if(s==="false")return!1;if(s===Number(s).toString())return Number(s);if(s===""||s==="null")return null;if(typeof s!="string")return s;try{return JSON.parse(decodeURIComponent(s))}catch{return s}}function Rh(s){return s.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}const Eo={setDataAttribute(s,a,d){s.setAttribute(`data-bs-${Rh(a)}`,d)},removeDataAttribute(s,a){s.removeAttribute(`data-bs-${Rh(a)}`)},getDataAttributes(s){if(!s)return{};const a={},d=Object.keys(s.dataset).filter(p=>p.startsWith("bs")&&!p.startsWith("bsConfig"));for(const p of d){let f=p.replace(/^bs/,"");f=f.charAt(0).toLowerCase()+f.slice(1,f.length),a[f]=Mv(s.dataset[p])}return a},getDataAttribute(s,a){return Mv(s.getAttribute(`data-bs-${Rh(a)}`))}};class Na{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(a){return a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a}_mergeConfigObj(a,d){const p=yo(d)?Eo.getDataAttribute(d,"config"):{};return{...this.constructor.Default,...typeof p=="object"?p:{},...yo(d)?Eo.getDataAttributes(d):{},...typeof a=="object"?a:{}}}_typeCheckConfig(a,d=this.constructor.DefaultType){for(const[p,f]of Object.entries(d)){const w=a[p],b=yo(w)?"element":pj(w);if(!new RegExp(f).test(b))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${p}" provided type "${b}" but expected type "${f}".`)}}}const yj="5.3.1";class Kn extends Na{constructor(a,d){super(),a=si(a),a&&(this._element=a,this._config=this._getConfig(d),Oh.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Oh.remove(this._element,this.constructor.DATA_KEY),it.off(this._element,this.constructor.EVENT_KEY);for(const a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,d,p=!0){yE(a,d,p)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return Oh.get(si(a),this.DATA_KEY)}static getOrCreateInstance(a,d={}){return this.getInstance(a)||new this(a,typeof d=="object"?d:null)}static get VERSION(){return yj}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}const zh=s=>{let a=s.getAttribute("data-bs-target");if(!a||a==="#"){let d=s.getAttribute("href");if(!d||!d.includes("#")&&!d.startsWith("."))return null;d.includes("#")&&!d.startsWith("#")&&(d=`#${d.split("#")[1]}`),a=d&&d!=="#"?d.trim():null}return _E(a)},Dt={find(s,a=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(a,s))},findOne(s,a=document.documentElement){return Element.prototype.querySelector.call(a,s)},children(s,a){return[].concat(...s.children).filter(d=>d.matches(a))},parents(s,a){const d=[];let p=s.parentNode.closest(a);for(;p;)d.push(p),p=p.parentNode.closest(a);return d},prev(s,a){let d=s.previousElementSibling;for(;d;){if(d.matches(a))return[d];d=d.previousElementSibling}return[]},next(s,a){let d=s.nextElementSibling;for(;d;){if(d.matches(a))return[d];d=d.nextElementSibling}return[]},focusableChildren(s){const a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(d=>`${d}:not([tabindex^="-"])`).join(",");return this.find(a,s).filter(d=>!ai(d)&&us(d))},getSelectorFromElement(s){const a=zh(s);return a&&Dt.findOne(a)?a:null},getElementFromSelector(s){const a=zh(s);return a?Dt.findOne(a):null},getMultipleElementsFromSelector(s){const a=zh(s);return a?Dt.find(a):[]}},rd=(s,a="hide")=>{const d=`click.dismiss${s.EVENT_KEY}`,p=s.NAME;it.on(document,d,`[data-bs-dismiss="${p}"]`,function(f){if(["A","AREA"].includes(this.tagName)&&f.preventDefault(),ai(this))return;const w=Dt.getElementFromSelector(this)||this.closest(`.${p}`);s.getOrCreateInstance(w)[a]()})},Ej="alert",xj="bs.alert",ME=`.${xj}`,Dj=`close${ME}`,Tj=`closed${ME}`,Sj="fade",Ij="show";class sd extends Kn{static get NAME(){return Ej}close(){if(it.trigger(this._element,Dj).defaultPrevented)return;this._element.classList.remove(Ij);const d=this._element.classList.contains(Sj);this._queueCallback(()=>this._destroyElement(),this._element,d)}_destroyElement(){this._element.remove(),it.trigger(this._element,Tj),this.dispose()}static jQueryInterface(a){return this.each(function(){const d=sd.getOrCreateInstance(this);if(typeof a=="string"){if(d[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);d[a](this)}})}}rd(sd,"close");Bn(sd);const Mj="button",Nj="bs.button",Bj=`.${Nj}`,Oj=".data-api",Pj="active",Nv='[data-bs-toggle="button"]',Lj=`click${Bj}${Oj}`;class ad extends Kn{static get NAME(){return Mj}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Pj))}static jQueryInterface(a){return this.each(function(){const d=ad.getOrCreateInstance(this);a==="toggle"&&d[a]()})}}it.on(document,Lj,Nv,s=>{s.preventDefault();const a=s.target.closest(Nv);ad.getOrCreateInstance(a).toggle()});Bn(ad);const Rj="swipe",hs=".bs.swipe",zj=`touchstart${hs}`,jj=`touchmove${hs}`,Fj=`touchend${hs}`,Vj=`pointerdown${hs}`,Hj=`pointerup${hs}`,Uj="touch",$j="pen",qj="pointer-event",Wj=40,Gj={endCallback:null,leftCallback:null,rightCallback:null},Kj={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Sl extends Na{constructor(a,d){super(),this._element=a,!(!a||!Sl.isSupported())&&(this._config=this._getConfig(d),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Gj}static get DefaultType(){return Kj}static get NAME(){return Rj}dispose(){it.off(this._element,hs)}_start(a){if(!this._supportPointerEvents){this._deltaX=a.touches[0].clientX;return}this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX)}_end(a){this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX-this._deltaX),this._handleSwipe(),Je(this._config.endCallback)}_move(a){this._deltaX=a.touches&&a.touches.length>1?0:a.touches[0].clientX-this._deltaX}_handleSwipe(){const a=Math.abs(this._deltaX);if(a<=Wj)return;const d=a/this._deltaX;this._deltaX=0,d&&Je(d>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(it.on(this._element,Vj,a=>this._start(a)),it.on(this._element,Hj,a=>this._end(a)),this._element.classList.add(qj)):(it.on(this._element,zj,a=>this._start(a)),it.on(this._element,jj,a=>this._move(a)),it.on(this._element,Fj,a=>this._end(a)))}_eventIsPointerPenTouch(a){return this._supportPointerEvents&&(a.pointerType===$j||a.pointerType===Uj)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Yj="carousel",Qj="bs.carousel",di=`.${Qj}`,NE=".data-api",Zj="ArrowLeft",Jj="ArrowRight",Xj=500,Ys="next",Nr="prev",Rr="left",hl="right",t6=`slide${di}`,jh=`slid${di}`,e6=`keydown${di}`,n6=`mouseenter${di}`,o6=`mouseleave${di}`,i6=`dragstart${di}`,r6=`load${di}${NE}`,s6=`click${di}${NE}`,BE="carousel",nl="active",a6="slide",c6="carousel-item-end",l6="carousel-item-start",d6="carousel-item-next",u6="carousel-item-prev",OE=".active",PE=".carousel-item",h6=OE+PE,p6=".carousel-item img",g6=".carousel-indicators",f6="[data-bs-slide], [data-bs-slide-to]",m6='[data-bs-ride="carousel"]',k6={[Zj]:hl,[Jj]:Rr},b6={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},w6={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ba extends Kn{constructor(a,d){super(a,d),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Dt.findOne(g6,this._element),this._addEventListeners(),this._config.ride===BE&&this.cycle()}static get Default(){return b6}static get DefaultType(){return w6}static get NAME(){return Yj}next(){this._slide(Ys)}nextWhenVisible(){!document.hidden&&us(this._element)&&this.next()}prev(){this._slide(Nr)}pause(){this._isSliding&&AE(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){it.one(this._element,jh,()=>this.cycle());return}this.cycle()}}to(a){const d=this._getItems();if(a>d.length-1||a<0)return;if(this._isSliding){it.one(this._element,jh,()=>this.to(a));return}const p=this._getItemIndex(this._getActive());if(p===a)return;const f=a>p?Ys:Nr;this._slide(f,d[a])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(a){return a.defaultInterval=a.interval,a}_addEventListeners(){this._config.keyboard&&it.on(this._element,e6,a=>this._keydown(a)),this._config.pause==="hover"&&(it.on(this._element,n6,()=>this.pause()),it.on(this._element,o6,()=>this._maybeEnableCycle())),this._config.touch&&Sl.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const p of Dt.find(p6,this._element))it.on(p,i6,f=>f.preventDefault());const d={leftCallback:()=>this._slide(this._directionToOrder(Rr)),rightCallback:()=>this._slide(this._directionToOrder(hl)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Xj+this._config.interval))}};this._swipeHelper=new Sl(this._element,d)}_keydown(a){if(/input|textarea/i.test(a.target.tagName))return;const d=k6[a.key];d&&(a.preventDefault(),this._slide(this._directionToOrder(d)))}_getItemIndex(a){return this._getItems().indexOf(a)}_setActiveIndicatorElement(a){if(!this._indicatorsElement)return;const d=Dt.findOne(OE,this._indicatorsElement);d.classList.remove(nl),d.removeAttribute("aria-current");const p=Dt.findOne(`[data-bs-slide-to="${a}"]`,this._indicatorsElement);p&&(p.classList.add(nl),p.setAttribute("aria-current","true"))}_updateInterval(){const a=this._activeElement||this._getActive();if(!a)return;const d=Number.parseInt(a.getAttribute("data-bs-interval"),10);this._config.interval=d||this._config.defaultInterval}_slide(a,d=null){if(this._isSliding)return;const p=this._getActive(),f=a===Ys,w=d||mg(this._getItems(),p,f,this._config.wrap);if(w===p)return;const b=this._getItemIndex(w),C=D=>it.trigger(this._element,D,{relatedTarget:w,direction:this._orderToDirection(a),from:this._getItemIndex(p),to:b});if(C(t6).defaultPrevented||!p||!w)return;const y=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(b),this._activeElement=w;const x=f?l6:c6,v=f?d6:u6;w.classList.add(v),Ma(w),p.classList.add(x),w.classList.add(x);const A=()=>{w.classList.remove(x,v),w.classList.add(nl),p.classList.remove(nl,v,x),this._isSliding=!1,C(jh)};this._queueCallback(A,p,this._isAnimated()),y&&this.cycle()}_isAnimated(){return this._element.classList.contains(a6)}_getActive(){return Dt.findOne(h6,this._element)}_getItems(){return Dt.find(PE,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(a){return In()?a===Rr?Nr:Ys:a===Rr?Ys:Nr}_orderToDirection(a){return In()?a===Nr?Rr:hl:a===Nr?hl:Rr}static jQueryInterface(a){return this.each(function(){const d=Ba.getOrCreateInstance(this,a);if(typeof a=="number"){d.to(a);return}if(typeof a=="string"){if(d[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);d[a]()}})}}it.on(document,s6,f6,function(s){const a=Dt.getElementFromSelector(this);if(!a||!a.classList.contains(BE))return;s.preventDefault();const d=Ba.getOrCreateInstance(a),p=this.getAttribute("data-bs-slide-to");if(p){d.to(p),d._maybeEnableCycle();return}if(Eo.getDataAttribute(this,"slide")==="next"){d.next(),d._maybeEnableCycle();return}d.prev(),d._maybeEnableCycle()});it.on(window,r6,()=>{const s=Dt.find(m6);for(const a of s)Ba.getOrCreateInstance(a)});Bn(Ba);const _6="collapse",A6="bs.collapse",Oa=`.${A6}`,C6=".data-api",v6=`show${Oa}`,y6=`shown${Oa}`,E6=`hide${Oa}`,x6=`hidden${Oa}`,D6=`click${Oa}${C6}`,Fh="show",jr="collapse",ol="collapsing",T6="collapsed",S6=`:scope .${jr} .${jr}`,I6="collapse-horizontal",M6="width",N6="height",B6=".collapse.show, .collapse.collapsing",Cp='[data-bs-toggle="collapse"]',O6={parent:null,toggle:!0},P6={parent:"(null|element)",toggle:"boolean"};class Aa extends Kn{constructor(a,d){super(a,d),this._isTransitioning=!1,this._triggerArray=[];const p=Dt.find(Cp);for(const f of p){const w=Dt.getSelectorFromElement(f),b=Dt.find(w).filter(C=>C===this._element);w!==null&&b.length&&this._triggerArray.push(f)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return O6}static get DefaultType(){return P6}static get NAME(){return _6}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(B6).filter(C=>C!==this._element).map(C=>Aa.getOrCreateInstance(C,{toggle:!1}))),a.length&&a[0]._isTransitioning||it.trigger(this._element,v6).defaultPrevented)return;for(const C of a)C.hide();const p=this._getDimension();this._element.classList.remove(jr),this._element.classList.add(ol),this._element.style[p]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const f=()=>{this._isTransitioning=!1,this._element.classList.remove(ol),this._element.classList.add(jr,Fh),this._element.style[p]="",it.trigger(this._element,y6)},b=`scroll${p[0].toUpperCase()+p.slice(1)}`;this._queueCallback(f,this._element,!0),this._element.style[p]=`${this._element[b]}px`}hide(){if(this._isTransitioning||!this._isShown()||it.trigger(this._element,E6).defaultPrevented)return;const d=this._getDimension();this._element.style[d]=`${this._element.getBoundingClientRect()[d]}px`,Ma(this._element),this._element.classList.add(ol),this._element.classList.remove(jr,Fh);for(const f of this._triggerArray){const w=Dt.getElementFromSelector(f);w&&!this._isShown(w)&&this._addAriaAndCollapsedClass([f],!1)}this._isTransitioning=!0;const p=()=>{this._isTransitioning=!1,this._element.classList.remove(ol),this._element.classList.add(jr),it.trigger(this._element,x6)};this._element.style[d]="",this._queueCallback(p,this._element,!0)}_isShown(a=this._element){return a.classList.contains(Fh)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=si(a.parent),a}_getDimension(){return this._element.classList.contains(I6)?M6:N6}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(Cp);for(const d of a){const p=Dt.getElementFromSelector(d);p&&this._addAriaAndCollapsedClass([d],this._isShown(p))}}_getFirstLevelChildren(a){const d=Dt.find(S6,this._config.parent);return Dt.find(a,this._config.parent).filter(p=>!d.includes(p))}_addAriaAndCollapsedClass(a,d){if(a.length)for(const p of a)p.classList.toggle(T6,!d),p.setAttribute("aria-expanded",d)}static jQueryInterface(a){const d={};return typeof a=="string"&&/show|hide/.test(a)&&(d.toggle=!1),this.each(function(){const p=Aa.getOrCreateInstance(this,d);if(typeof a=="string"){if(typeof p[a]>"u")throw new TypeError(`No method named "${a}"`);p[a]()}})}}it.on(document,D6,Cp,function(s){(s.target.tagName==="A"||s.delegateTarget&&s.delegateTarget.tagName==="A")&&s.preventDefault();for(const a of Dt.getMultipleElementsFromSelector(this))Aa.getOrCreateInstance(a,{toggle:!1}).toggle()});Bn(Aa);const Bv="dropdown",L6="bs.dropdown",or=`.${L6}`,bg=".data-api",R6="Escape",Ov="Tab",z6="ArrowUp",Pv="ArrowDown",j6=2,F6=`hide${or}`,V6=`hidden${or}`,H6=`show${or}`,U6=`shown${or}`,LE=`click${or}${bg}`,RE=`keydown${or}${bg}`,$6=`keyup${or}${bg}`,zr="show",q6="dropup",W6="dropend",G6="dropstart",K6="dropup-center",Y6="dropdown-center",Hi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Q6=`${Hi}.${zr}`,pl=".dropdown-menu",Z6=".navbar",J6=".navbar-nav",X6=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",t7=In()?"top-end":"top-start",e7=In()?"top-start":"top-end",n7=In()?"bottom-end":"bottom-start",o7=In()?"bottom-start":"bottom-end",i7=In()?"left-start":"right-start",r7=In()?"right-start":"left-start",s7="top",a7="bottom",c7={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},l7={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ao extends Kn{constructor(a,d){super(a,d),this._popper=null,this._parent=this._element.parentNode,this._menu=Dt.next(this._element,pl)[0]||Dt.prev(this._element,pl)[0]||Dt.findOne(pl,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return c7}static get DefaultType(){return l7}static get NAME(){return Bv}toggle(){return this._isShown()?this.hide():this.show()}show(){if(ai(this._element)||this._isShown())return;const a={relatedTarget:this._element};if(!it.trigger(this._element,H6,a).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(J6))for(const p of[].concat(...document.body.children))it.on(p,"mouseover",Tl);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(zr),this._element.classList.add(zr),it.trigger(this._element,U6,a)}}hide(){if(ai(this._element)||!this._isShown())return;const a={relatedTarget:this._element};this._completeHide(a)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(a){if(!it.trigger(this._element,F6,a).defaultPrevented){if("ontouchstart"in document.documentElement)for(const p of[].concat(...document.body.children))it.off(p,"mouseover",Tl);this._popper&&this._popper.destroy(),this._menu.classList.remove(zr),this._element.classList.remove(zr),this._element.setAttribute("aria-expanded","false"),Eo.removeDataAttribute(this._menu,"popper"),it.trigger(this._element,V6,a)}}_getConfig(a){if(a=super._getConfig(a),typeof a.reference=="object"&&!yo(a.reference)&&typeof a.reference.getBoundingClientRect!="function")throw new TypeError(`${Bv.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return a}_createPopper(){if(typeof wE>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let a=this._element;this._config.reference==="parent"?a=this._parent:yo(this._config.reference)?a=si(this._config.reference):typeof this._config.reference=="object"&&(a=this._config.reference);const d=this._getPopperConfig();this._popper=fg(a,this._menu,d)}_isShown(){return this._menu.classList.contains(zr)}_getPlacement(){const a=this._parent;if(a.classList.contains(W6))return i7;if(a.classList.contains(G6))return r7;if(a.classList.contains(K6))return s7;if(a.classList.contains(Y6))return a7;const d=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return a.classList.contains(q6)?d?e7:t7:d?o7:n7}_detectNavbar(){return this._element.closest(Z6)!==null}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(d=>Number.parseInt(d,10)):typeof a=="function"?d=>a(d,this._element):a}_getPopperConfig(){const a={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Eo.setDataAttribute(this._menu,"popper","static"),a.modifiers=[{name:"applyStyles",enabled:!1}]),{...a,...Je(this._config.popperConfig,[a])}}_selectMenuItem({key:a,target:d}){const p=Dt.find(X6,this._menu).filter(f=>us(f));p.length&&mg(p,d,a===Pv,!p.includes(d)).focus()}static jQueryInterface(a){return this.each(function(){const d=ao.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof d[a]>"u")throw new TypeError(`No method named "${a}"`);d[a]()}})}static clearMenus(a){if(a.button===j6||a.type==="keyup"&&a.key!==Ov)return;const d=Dt.find(Q6);for(const p of d){const f=ao.getInstance(p);if(!f||f._config.autoClose===!1)continue;const w=a.composedPath(),b=w.includes(f._menu);if(w.includes(f._element)||f._config.autoClose==="inside"&&!b||f._config.autoClose==="outside"&&b||f._menu.contains(a.target)&&(a.type==="keyup"&&a.key===Ov||/input|select|option|textarea|form/i.test(a.target.tagName)))continue;const C={relatedTarget:f._element};a.type==="click"&&(C.clickEvent=a),f._completeHide(C)}}static dataApiKeydownHandler(a){const d=/input|textarea/i.test(a.target.tagName),p=a.key===R6,f=[z6,Pv].includes(a.key);if(!f&&!p||d&&!p)return;a.preventDefault();const w=this.matches(Hi)?this:Dt.prev(this,Hi)[0]||Dt.next(this,Hi)[0]||Dt.findOne(Hi,a.delegateTarget.parentNode),b=ao.getOrCreateInstance(w);if(f){a.stopPropagation(),b.show(),b._selectMenuItem(a);return}b._isShown()&&(a.stopPropagation(),b.hide(),w.focus())}}it.on(document,RE,Hi,ao.dataApiKeydownHandler);it.on(document,RE,pl,ao.dataApiKeydownHandler);it.on(document,LE,ao.clearMenus);it.on(document,$6,ao.clearMenus);it.on(document,LE,Hi,function(s){s.preventDefault(),ao.getOrCreateInstance(this).toggle()});Bn(ao);const zE="backdrop",d7="fade",Lv="show",Rv=`mousedown.bs.${zE}`,u7={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},h7={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class jE extends Na{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return u7}static get DefaultType(){return h7}static get NAME(){return zE}show(a){if(!this._config.isVisible){Je(a);return}this._append();const d=this._getElement();this._config.isAnimated&&Ma(d),d.classList.add(Lv),this._emulateAnimation(()=>{Je(a)})}hide(a){if(!this._config.isVisible){Je(a);return}this._getElement().classList.remove(Lv),this._emulateAnimation(()=>{this.dispose(),Je(a)})}dispose(){this._isAppended&&(it.off(this._element,Rv),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add(d7),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=si(a.rootElement),a}_append(){if(this._isAppended)return;const a=this._getElement();this._config.rootElement.append(a),it.on(a,Rv,()=>{Je(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){yE(a,this._getElement(),this._config.isAnimated)}}const p7="focustrap",g7="bs.focustrap",Il=`.${g7}`,f7=`focusin${Il}`,m7=`keydown.tab${Il}`,k7="Tab",b7="forward",zv="backward",w7={autofocus:!0,trapElement:null},_7={autofocus:"boolean",trapElement:"element"};class FE extends Na{constructor(a){super(),this._config=this._getConfig(a),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return w7}static get DefaultType(){return _7}static get NAME(){return p7}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),it.off(document,Il),it.on(document,f7,a=>this._handleFocusin(a)),it.on(document,m7,a=>this._handleKeydown(a)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,it.off(document,Il))}_handleFocusin(a){const{trapElement:d}=this._config;if(a.target===document||a.target===d||d.contains(a.target))return;const p=Dt.focusableChildren(d);p.length===0?d.focus():this._lastTabNavDirection===zv?p[p.length-1].focus():p[0].focus()}_handleKeydown(a){a.key===k7&&(this._lastTabNavDirection=a.shiftKey?zv:b7)}}const jv=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Fv=".sticky-top",il="padding-right",Vv="margin-right";class vp{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,il,d=>d+a),this._setElementAttributes(jv,il,d=>d+a),this._setElementAttributes(Fv,Vv,d=>d-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,il),this._resetElementAttributes(jv,il),this._resetElementAttributes(Fv,Vv)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,d,p){const f=this.getWidth(),w=b=>{if(b!==this._element&&window.innerWidth>b.clientWidth+f)return;this._saveInitialAttribute(b,d);const C=window.getComputedStyle(b).getPropertyValue(d);b.style.setProperty(d,`${p(Number.parseFloat(C))}px`)};this._applyManipulationCallback(a,w)}_saveInitialAttribute(a,d){const p=a.style.getPropertyValue(d);p&&Eo.setDataAttribute(a,d,p)}_resetElementAttributes(a,d){const p=f=>{const w=Eo.getDataAttribute(f,d);if(w===null){f.style.removeProperty(d);return}Eo.removeDataAttribute(f,d),f.style.setProperty(d,w)};this._applyManipulationCallback(a,p)}_applyManipulationCallback(a,d){if(yo(a)){d(a);return}for(const p of Dt.find(a,this._element))d(p)}}const A7="modal",C7="bs.modal",Mn=`.${C7}`,v7=".data-api",y7="Escape",E7=`hide${Mn}`,x7=`hidePrevented${Mn}`,VE=`hidden${Mn}`,HE=`show${Mn}`,D7=`shown${Mn}`,T7=`resize${Mn}`,S7=`click.dismiss${Mn}`,I7=`mousedown.dismiss${Mn}`,M7=`keydown.dismiss${Mn}`,N7=`click${Mn}${v7}`,Hv="modal-open",B7="fade",Uv="show",Vh="modal-static",O7=".modal.show",P7=".modal-dialog",L7=".modal-body",R7='[data-bs-toggle="modal"]',z7={backdrop:!0,focus:!0,keyboard:!0},j7={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class is extends Kn{constructor(a,d){super(a,d),this._dialog=Dt.findOne(P7,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new vp,this._addEventListeners()}static get Default(){return z7}static get DefaultType(){return j7}static get NAME(){return A7}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||this._isTransitioning||it.trigger(this._element,HE,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Hv),this._adjustDialog(),this._backdrop.show(()=>this._showElement(a)))}hide(){!this._isShown||this._isTransitioning||it.trigger(this._element,E7).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Uv),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){it.off(window,Mn),it.off(this._dialog,Mn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new jE({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new FE({trapElement:this._element})}_showElement(a){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const d=Dt.findOne(L7,this._dialog);d&&(d.scrollTop=0),Ma(this._element),this._element.classList.add(Uv);const p=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,it.trigger(this._element,D7,{relatedTarget:a})};this._queueCallback(p,this._dialog,this._isAnimated())}_addEventListeners(){it.on(this._element,M7,a=>{if(a.key===y7){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),it.on(window,T7,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),it.on(this._element,I7,a=>{it.one(this._element,S7,d=>{if(!(this._element!==a.target||this._element!==d.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Hv),this._resetAdjustments(),this._scrollBar.reset(),it.trigger(this._element,VE)})}_isAnimated(){return this._element.classList.contains(B7)}_triggerBackdropTransition(){if(it.trigger(this._element,x7).defaultPrevented)return;const d=this._element.scrollHeight>document.documentElement.clientHeight,p=this._element.style.overflowY;p==="hidden"||this._element.classList.contains(Vh)||(d||(this._element.style.overflowY="hidden"),this._element.classList.add(Vh),this._queueCallback(()=>{this._element.classList.remove(Vh),this._queueCallback(()=>{this._element.style.overflowY=p},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const a=this._element.scrollHeight>document.documentElement.clientHeight,d=this._scrollBar.getWidth(),p=d>0;if(p&&!a){const f=In()?"paddingLeft":"paddingRight";this._element.style[f]=`${d}px`}if(!p&&a){const f=In()?"paddingRight":"paddingLeft";this._element.style[f]=`${d}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(a,d){return this.each(function(){const p=is.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof p[a]>"u")throw new TypeError(`No method named "${a}"`);p[a](d)}})}}it.on(document,N7,R7,function(s){const a=Dt.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&s.preventDefault(),it.one(a,HE,f=>{f.defaultPrevented||it.one(a,VE,()=>{us(this)&&this.focus()})});const d=Dt.findOne(O7);d&&is.getInstance(d).hide(),is.getOrCreateInstance(a).toggle(this)});rd(is);Bn(is);const F7="offcanvas",V7="bs.offcanvas",Io=`.${V7}`,UE=".data-api",H7=`load${Io}${UE}`,U7="Escape",$v="show",qv="showing",Wv="hiding",$7="offcanvas-backdrop",$E=".offcanvas.show",q7=`show${Io}`,W7=`shown${Io}`,G7=`hide${Io}`,Gv=`hidePrevented${Io}`,qE=`hidden${Io}`,K7=`resize${Io}`,Y7=`click${Io}${UE}`,Q7=`keydown.dismiss${Io}`,Z7='[data-bs-toggle="offcanvas"]',J7={backdrop:!0,keyboard:!0,scroll:!1},X7={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ci extends Kn{constructor(a,d){super(a,d),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return J7}static get DefaultType(){return X7}static get NAME(){return F7}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){if(this._isShown||it.trigger(this._element,q7,{relatedTarget:a}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new vp().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(qv);const p=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add($v),this._element.classList.remove(qv),it.trigger(this._element,W7,{relatedTarget:a})};this._queueCallback(p,this._element,!0)}hide(){if(!this._isShown||it.trigger(this._element,G7).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Wv),this._backdrop.hide();const d=()=>{this._element.classList.remove($v,Wv),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new vp().reset(),it.trigger(this._element,qE)};this._queueCallback(d,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const a=()=>{if(this._config.backdrop==="static"){it.trigger(this._element,Gv);return}this.hide()},d=!!this._config.backdrop;return new jE({className:$7,isVisible:d,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:d?a:null})}_initializeFocusTrap(){return new FE({trapElement:this._element})}_addEventListeners(){it.on(this._element,Q7,a=>{if(a.key===U7){if(this._config.keyboard){this.hide();return}it.trigger(this._element,Gv)}})}static jQueryInterface(a){return this.each(function(){const d=ci.getOrCreateInstance(this,a);if(typeof a=="string"){if(d[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);d[a](this)}})}}it.on(document,Y7,Z7,function(s){const a=Dt.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),ai(this))return;it.one(a,qE,()=>{us(this)&&this.focus()});const d=Dt.findOne($E);d&&d!==a&&ci.getInstance(d).hide(),ci.getOrCreateInstance(a).toggle(this)});it.on(window,H7,()=>{for(const s of Dt.find($E))ci.getOrCreateInstance(s).show()});it.on(window,K7,()=>{for(const s of Dt.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(s).position!=="fixed"&&ci.getOrCreateInstance(s).hide()});rd(ci);Bn(ci);const tF=/^aria-[\w-]*$/i,WE={"*":["class","dir","id","lang","role",tF],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},eF=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),nF=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,oF=(s,a)=>{const d=s.nodeName.toLowerCase();return a.includes(d)?eF.has(d)?!!nF.test(s.nodeValue):!0:a.filter(p=>p instanceof RegExp).some(p=>p.test(d))};function iF(s,a,d){if(!s.length)return s;if(d&&typeof d=="function")return d(s);const f=new window.DOMParser().parseFromString(s,"text/html"),w=[].concat(...f.body.querySelectorAll("*"));for(const b of w){const C=b.nodeName.toLowerCase();if(!Object.keys(a).includes(C)){b.remove();continue}const m=[].concat(...b.attributes),y=[].concat(a["*"]||[],a[C]||[]);for(const x of m)oF(x,y)||b.removeAttribute(x.nodeName)}return f.body.innerHTML}const rF="TemplateFactory",sF={allowList:WE,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},aF={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},cF={entry:"(string|element|function|null)",selector:"(string|element)"};class lF extends Na{constructor(a){super(),this._config=this._getConfig(a)}static get Default(){return sF}static get DefaultType(){return aF}static get NAME(){return rF}getContent(){return Object.values(this._config.content).map(a=>this._resolvePossibleFunction(a)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(a){return this._checkContent(a),this._config.content={...this._config.content,...a},this}toHtml(){const a=document.createElement("div");a.innerHTML=this._maybeSanitize(this._config.template);for(const[f,w]of Object.entries(this._config.content))this._setContent(a,w,f);const d=a.children[0],p=this._resolvePossibleFunction(this._config.extraClass);return p&&d.classList.add(...p.split(" ")),d}_typeCheckConfig(a){super._typeCheckConfig(a),this._checkContent(a.content)}_checkContent(a){for(const[d,p]of Object.entries(a))super._typeCheckConfig({selector:d,entry:p},cF)}_setContent(a,d,p){const f=Dt.findOne(p,a);if(f){if(d=this._resolvePossibleFunction(d),!d){f.remove();return}if(yo(d)){this._putElementInTemplate(si(d),f);return}if(this._config.html){f.innerHTML=this._maybeSanitize(d);return}f.textContent=d}}_maybeSanitize(a){return this._config.sanitize?iF(a,this._config.allowList,this._config.sanitizeFn):a}_resolvePossibleFunction(a){return Je(a,[this])}_putElementInTemplate(a,d){if(this._config.html){d.innerHTML="",d.append(a);return}d.textContent=a.textContent}}const dF="tooltip",uF=new Set(["sanitize","allowList","sanitizeFn"]),Hh="fade",hF="modal",rl="show",pF=".tooltip-inner",Kv=`.${hF}`,Yv="hide.bs.modal",Qs="hover",Uh="focus",gF="click",fF="manual",mF="hide",kF="hidden",bF="show",wF="shown",_F="inserted",AF="click",CF="focusin",vF="focusout",yF="mouseenter",EF="mouseleave",xF={AUTO:"auto",TOP:"top",RIGHT:In()?"left":"right",BOTTOM:"bottom",LEFT:In()?"right":"left"},DF={allowList:WE,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},TF={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ps extends Kn{constructor(a,d){if(typeof wE>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(a,d),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return DF}static get DefaultType(){return TF}static get NAME(){return dF}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),it.off(this._element.closest(Kv),Yv,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const a=it.trigger(this._element,this.constructor.eventName(bF)),p=(CE(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(a.defaultPrevented||!p)return;this._disposePopper();const f=this._getTipElement();this._element.setAttribute("aria-describedby",f.getAttribute("id"));const{container:w}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(w.append(f),it.trigger(this._element,this.constructor.eventName(_F))),this._popper=this._createPopper(f),f.classList.add(rl),"ontouchstart"in document.documentElement)for(const C of[].concat(...document.body.children))it.on(C,"mouseover",Tl);const b=()=>{it.trigger(this._element,this.constructor.eventName(wF)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(b,this.tip,this._isAnimated())}hide(){if(!this._isShown()||it.trigger(this._element,this.constructor.eventName(mF)).defaultPrevented)return;if(this._getTipElement().classList.remove(rl),"ontouchstart"in document.documentElement)for(const f of[].concat(...document.body.children))it.off(f,"mouseover",Tl);this._activeTrigger[gF]=!1,this._activeTrigger[Uh]=!1,this._activeTrigger[Qs]=!1,this._isHovered=null;const p=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),it.trigger(this._element,this.constructor.eventName(kF)))};this._queueCallback(p,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(a){const d=this._getTemplateFactory(a).toHtml();if(!d)return null;d.classList.remove(Hh,rl),d.classList.add(`bs-${this.constructor.NAME}-auto`);const p=gj(this.constructor.NAME).toString();return d.setAttribute("id",p),this._isAnimated()&&d.classList.add(Hh),d}setContent(a){this._newContent=a,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(a){return this._templateFactory?this._templateFactory.changeContent(a):this._templateFactory=new lF({...this._config,content:a,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[pF]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(a){return this.constructor.getOrCreateInstance(a.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Hh)}_isShown(){return this.tip&&this.tip.classList.contains(rl)}_createPopper(a){const d=Je(this._config.placement,[this,a,this._element]),p=xF[d.toUpperCase()];return fg(this._element,a,this._getPopperConfig(p))}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(d=>Number.parseInt(d,10)):typeof a=="function"?d=>a(d,this._element):a}_resolvePossibleFunction(a){return Je(a,[this._element])}_getPopperConfig(a){const d={placement:a,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:p=>{this._getTipElement().setAttribute("data-popper-placement",p.state.placement)}}]};return{...d,...Je(this._config.popperConfig,[d])}}_setListeners(){const a=this._config.trigger.split(" ");for(const d of a)if(d==="click")it.on(this._element,this.constructor.eventName(AF),this._config.selector,p=>{this._initializeOnDelegatedTarget(p).toggle()});else if(d!==fF){const p=d===Qs?this.constructor.eventName(yF):this.constructor.eventName(CF),f=d===Qs?this.constructor.eventName(EF):this.constructor.eventName(vF);it.on(this._element,p,this._config.selector,w=>{const b=this._initializeOnDelegatedTarget(w);b._activeTrigger[w.type==="focusin"?Uh:Qs]=!0,b._enter()}),it.on(this._element,f,this._config.selector,w=>{const b=this._initializeOnDelegatedTarget(w);b._activeTrigger[w.type==="focusout"?Uh:Qs]=b._element.contains(w.relatedTarget),b._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},it.on(this._element.closest(Kv),Yv,this._hideModalHandler)}_fixTitle(){const a=this._element.getAttribute("title");a&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",a),this._element.setAttribute("data-bs-original-title",a),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(a,d){clearTimeout(this._timeout),this._timeout=setTimeout(a,d)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(a){const d=Eo.getDataAttributes(this._element);for(const p of Object.keys(d))uF.has(p)&&delete d[p];return a={...d,...typeof a=="object"&&a?a:{}},a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a.container=a.container===!1?document.body:si(a.container),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),a}_getDelegateConfig(){const a={};for(const[d,p]of Object.entries(this._config))this.constructor.Default[d]!==p&&(a[d]=p);return a.selector=!1,a.trigger="manual",a}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(a){return this.each(function(){const d=ps.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof d[a]>"u")throw new TypeError(`No method named "${a}"`);d[a]()}})}}Bn(ps);const SF="popover",IF=".popover-header",MF=".popover-body",NF={...ps.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},BF={...ps.DefaultType,content:"(null|string|element|function)"};class wg extends ps{static get Default(){return NF}static get DefaultType(){return BF}static get NAME(){return SF}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[IF]:this._getTitle(),[MF]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(a){return this.each(function(){const d=wg.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof d[a]>"u")throw new TypeError(`No method named "${a}"`);d[a]()}})}}Bn(wg);const OF="scrollspy",PF="bs.scrollspy",_g=`.${PF}`,LF=".data-api",RF=`activate${_g}`,Qv=`click${_g}`,zF=`load${_g}${LF}`,jF="dropdown-item",Br="active",FF='[data-bs-spy="scroll"]',$h="[href]",VF=".nav, .list-group",Zv=".nav-link",HF=".nav-item",UF=".list-group-item",$F=`${Zv}, ${HF} > ${Zv}, ${UF}`,qF=".dropdown",WF=".dropdown-toggle",GF={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},KF={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class cd extends Kn{constructor(a,d){super(a,d),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return GF}static get DefaultType(){return KF}static get NAME(){return OF}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const a of this._observableSections.values())this._observer.observe(a)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(a){return a.target=si(a.target)||document.body,a.rootMargin=a.offset?`${a.offset}px 0px -30%`:a.rootMargin,typeof a.threshold=="string"&&(a.threshold=a.threshold.split(",").map(d=>Number.parseFloat(d))),a}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(it.off(this._config.target,Qv),it.on(this._config.target,Qv,$h,a=>{const d=this._observableSections.get(a.target.hash);if(d){a.preventDefault();const p=this._rootElement||window,f=d.offsetTop-this._element.offsetTop;if(p.scrollTo){p.scrollTo({top:f,behavior:"smooth"});return}p.scrollTop=f}}))}_getNewObserver(){const a={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(d=>this._observerCallback(d),a)}_observerCallback(a){const d=b=>this._targetLinks.get(`#${b.target.id}`),p=b=>{this._previousScrollData.visibleEntryTop=b.target.offsetTop,this._process(d(b))},f=(this._rootElement||document.documentElement).scrollTop,w=f>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=f;for(const b of a){if(!b.isIntersecting){this._activeTarget=null,this._clearActiveClass(d(b));continue}const C=b.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(w&&C){if(p(b),!f)return;continue}!w&&!C&&p(b)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const a=Dt.find($h,this._config.target);for(const d of a){if(!d.hash||ai(d))continue;const p=Dt.findOne(decodeURI(d.hash),this._element);us(p)&&(this._targetLinks.set(decodeURI(d.hash),d),this._observableSections.set(d.hash,p))}}_process(a){this._activeTarget!==a&&(this._clearActiveClass(this._config.target),this._activeTarget=a,a.classList.add(Br),this._activateParents(a),it.trigger(this._element,RF,{relatedTarget:a}))}_activateParents(a){if(a.classList.contains(jF)){Dt.findOne(WF,a.closest(qF)).classList.add(Br);return}for(const d of Dt.parents(a,VF))for(const p of Dt.prev(d,$F))p.classList.add(Br)}_clearActiveClass(a){a.classList.remove(Br);const d=Dt.find(`${$h}.${Br}`,a);for(const p of d)p.classList.remove(Br)}static jQueryInterface(a){return this.each(function(){const d=cd.getOrCreateInstance(this,a);if(typeof a=="string"){if(d[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);d[a]()}})}}it.on(window,zF,()=>{for(const s of Dt.find(FF))cd.getOrCreateInstance(s)});Bn(cd);const YF="tab",QF="bs.tab",ir=`.${QF}`,ZF=`hide${ir}`,JF=`hidden${ir}`,XF=`show${ir}`,t9=`shown${ir}`,e9=`click${ir}`,n9=`keydown${ir}`,o9=`load${ir}`,i9="ArrowLeft",Jv="ArrowRight",r9="ArrowUp",Xv="ArrowDown",qh="Home",ty="End",Ui="active",ey="fade",Wh="show",s9="dropdown",a9=".dropdown-toggle",c9=".dropdown-menu",Gh=":not(.dropdown-toggle)",l9='.list-group, .nav, [role="tablist"]',d9=".nav-item, .list-group-item",u9=`.nav-link${Gh}, .list-group-item${Gh}, [role="tab"]${Gh}`,GE='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Kh=`${u9}, ${GE}`,h9=`.${Ui}[data-bs-toggle="tab"], .${Ui}[data-bs-toggle="pill"], .${Ui}[data-bs-toggle="list"]`;class rs extends Kn{constructor(a){super(a),this._parent=this._element.closest(l9),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),it.on(this._element,n9,d=>this._keydown(d)))}static get NAME(){return YF}show(){const a=this._element;if(this._elemIsActive(a))return;const d=this._getActiveElem(),p=d?it.trigger(d,ZF,{relatedTarget:a}):null;it.trigger(a,XF,{relatedTarget:d}).defaultPrevented||p&&p.defaultPrevented||(this._deactivate(d,a),this._activate(a,d))}_activate(a,d){if(!a)return;a.classList.add(Ui),this._activate(Dt.getElementFromSelector(a));const p=()=>{if(a.getAttribute("role")!=="tab"){a.classList.add(Wh);return}a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),it.trigger(a,t9,{relatedTarget:d})};this._queueCallback(p,a,a.classList.contains(ey))}_deactivate(a,d){if(!a)return;a.classList.remove(Ui),a.blur(),this._deactivate(Dt.getElementFromSelector(a));const p=()=>{if(a.getAttribute("role")!=="tab"){a.classList.remove(Wh);return}a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),it.trigger(a,JF,{relatedTarget:d})};this._queueCallback(p,a,a.classList.contains(ey))}_keydown(a){if(![i9,Jv,r9,Xv,qh,ty].includes(a.key))return;a.stopPropagation(),a.preventDefault();const d=this._getChildren().filter(f=>!ai(f));let p;if([qh,ty].includes(a.key))p=d[a.key===qh?0:d.length-1];else{const f=[Jv,Xv].includes(a.key);p=mg(d,a.target,f,!0)}p&&(p.focus({preventScroll:!0}),rs.getOrCreateInstance(p).show())}_getChildren(){return Dt.find(Kh,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,d){this._setAttributeIfNotExists(a,"role","tablist");for(const p of d)this._setInitialAttributesOnChild(p)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);const d=this._elemIsActive(a),p=this._getOuterElement(a);a.setAttribute("aria-selected",d),p!==a&&this._setAttributeIfNotExists(p,"role","presentation"),d||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){const d=Dt.getElementFromSelector(a);d&&(this._setAttributeIfNotExists(d,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(d,"aria-labelledby",`${a.id}`))}_toggleDropDown(a,d){const p=this._getOuterElement(a);if(!p.classList.contains(s9))return;const f=(w,b)=>{const C=Dt.findOne(w,p);C&&C.classList.toggle(b,d)};f(a9,Ui),f(c9,Wh),p.setAttribute("aria-expanded",d)}_setAttributeIfNotExists(a,d,p){a.hasAttribute(d)||a.setAttribute(d,p)}_elemIsActive(a){return a.classList.contains(Ui)}_getInnerElement(a){return a.matches(Kh)?a:Dt.findOne(Kh,a)}_getOuterElement(a){return a.closest(d9)||a}static jQueryInterface(a){return this.each(function(){const d=rs.getOrCreateInstance(this);if(typeof a=="string"){if(d[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);d[a]()}})}}it.on(document,e9,GE,function(s){["A","AREA"].includes(this.tagName)&&s.preventDefault(),!ai(this)&&rs.getOrCreateInstance(this).show()});it.on(window,o9,()=>{for(const s of Dt.find(h9))rs.getOrCreateInstance(s)});Bn(rs);const p9="toast",g9="bs.toast",ui=`.${g9}`,f9=`mouseover${ui}`,m9=`mouseout${ui}`,k9=`focusin${ui}`,b9=`focusout${ui}`,w9=`hide${ui}`,_9=`hidden${ui}`,A9=`show${ui}`,C9=`shown${ui}`,v9="fade",ny="hide",sl="show",al="showing",y9={animation:"boolean",autohide:"boolean",delay:"number"},E9={animation:!0,autohide:!0,delay:5e3};class ld extends Kn{constructor(a,d){super(a,d),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return E9}static get DefaultType(){return y9}static get NAME(){return p9}show(){if(it.trigger(this._element,A9).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(v9);const d=()=>{this._element.classList.remove(al),it.trigger(this._element,C9),this._maybeScheduleHide()};this._element.classList.remove(ny),Ma(this._element),this._element.classList.add(sl,al),this._queueCallback(d,this._element,this._config.animation)}hide(){if(!this.isShown()||it.trigger(this._element,w9).defaultPrevented)return;const d=()=>{this._element.classList.add(ny),this._element.classList.remove(al,sl),it.trigger(this._element,_9)};this._element.classList.add(al),this._queueCallback(d,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(sl),super.dispose()}isShown(){return this._element.classList.contains(sl)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(a,d){switch(a.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=d;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=d;break}}if(d){this._clearTimeout();return}const p=a.relatedTarget;this._element===p||this._element.contains(p)||this._maybeScheduleHide()}_setListeners(){it.on(this._element,f9,a=>this._onInteraction(a,!0)),it.on(this._element,m9,a=>this._onInteraction(a,!1)),it.on(this._element,k9,a=>this._onInteraction(a,!0)),it.on(this._element,b9,a=>this._onInteraction(a,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(a){return this.each(function(){const d=ld.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof d[a]>"u")throw new TypeError(`No method named "${a}"`);d[a](this)}})}}rd(ld);Bn(ld);const x9={},D9={id:"carouselExampleDark",class:"carousel carousel-dark slide"},T9=Yl('<div class="carousel-indicators mt-2"><button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button></div><div class="carousel-inner"><div class="carousel-item active" data-bs-interval="10000"><img src="https://picsum.photos/1024/400/?image=41" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>First slide label</h5><p>Some representative placeholder content for the first slide.</p></div></div><div class="carousel-item" data-bs-interval="2000"><img src="https://picsum.photos/1024/400/?image=43" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Second slide label</h5><p>Some representative placeholder content for the second slide.</p></div></div><div class="carousel-item"><img src="https://picsum.photos/1024/400/?image=22" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Third slide label</h5><p>Some representative placeholder content for the third slide.</p></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',4),S9=[T9];function I9(s,a){return Nn(),To("div",D9,S9)}const M9=ed(x9,[["render",I9]]),N9=Vt("img",{src:"https://mblogthumb-phinf.pstatic.net/MjAyMzA3MDZfMTU2/MDAxNjg4NjQzNDM3ODc3._phXGzhiAIoEU5MM7wxg_9YSNhLb-SpWtG3EfM6Jl2Ag.ybI5rpsf89ykR76auVavK9ZJF17yp2iMKFjj2N6jMrUg.JPEG.kdh633/4T4KX2WM6JG2VH6BA3IN3IUYAU.jpeg.jpg?type=w800",class:"card-img-top",alt:"..."},null,-1),B9=Vt("h5",{class:"card-title"},"Cafe",-1),O9=Vt("p",{class:"card-text"}," Some quick example text to build on the card title and make up the bulk of the card's content. ",-1),P9={__name:"CafePage",setup(s){const a=QR(),d=()=>{let p={from:"ghong@gmail.com",content:"안냐세요 홍길동이엥요."};a.push({path:`/mail/${p.from}/${p.content}`,query:p})};return(p,f)=>(Nn(),To("div",null,[Vt("div",{class:"card mt-2"},[N9,Vt("div",{class:"card-body"},[B9,O9,Vt("a",{href:"#",class:"btn btn-primary",onClick:d},"SendMail")])])]))}},L9={},R9=Yl('<div class="card mt-2"><img src="https://mblogthumb-phinf.pstatic.net/MjAyMjA4MjZfMjY2/MDAxNjYxNDU1NzgxNTE5.HBaQffQjTAFckk9zk50VE6i64Rn77HHNH2M9TeJBC3Ug.rPh_OYsBOOwIYfXAuv8m_YpapOpXbgFUmplo8j-owG4g.JPEG.shel8979/IMG_5593.jpg?type=w800" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Blog</h5><p class="card-text"> Some quick example text to build on the card title and make up the bulk of the card&#39;s content. </p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>',1),z9=[R9];function j9(s,a){return Nn(),To("div",null,z9)}const F9=ed(L9,[["render",j9]]),V9={class:"card mt-2"},H9=Vt("img",{src:"https://t1.daumcdn.net/cfile/tistory/2248E23655ADCFE30F",class:"card-img-top",alt:"..."},null,-1),U9={class:"card-body"},$9=Vt("h5",{class:"card-title"},"Mail",-1),q9={class:"card-text"},W9=Vt("br",null,null,-1),G9={__name:"MailPage",setup(s){const a=ZR(),d=xn(""),p=xn(""),f=()=>{d.value=a.params.from,p.value=a.params.content};return(w,b)=>(Nn(),To("div",null,[Vt("div",V9,[H9,Vt("div",U9,[$9,Vt("p",q9,[ro(" form:"+kl(d.value)+" ",1),W9,ro(" content:"+kl(p.value),1)]),Vt("a",{href:"#",class:"btn btn-primary",onClick:f},"checkMail")])])]))}};var Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function KE(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function K9(s){if(s.__esModule)return s;var a=s.default;if(typeof a=="function"){var d=function p(){return this instanceof p?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};d.prototype=a.prototype}else d={};return Object.defineProperty(d,"__esModule",{value:!0}),Object.keys(s).forEach(function(p){var f=Object.getOwnPropertyDescriptor(s,p);Object.defineProperty(d,p,f.get?f:{enumerable:!0,get:function(){return s[p]}})}),d}var YE={exports:{}};const Y9=K9(G3);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(s,a){(function(d,p){s.exports=p(Y9)})(self,d=>(()=>{var p={976:C=>{C.exports=d}},f={};function w(C){var m=f[C];if(m!==void 0)return m.exports;var y=f[C]={exports:{}};return p[C](y,y.exports,w),y.exports}w.d=(C,m)=>{for(var y in m)w.o(m,y)&&!w.o(C,y)&&Object.defineProperty(C,y,{enumerable:!0,get:m[y]})},w.o=(C,m)=>Object.prototype.hasOwnProperty.call(C,m);var b={};return(()=>{w.d(b,{default:()=>de});var C=w(976);const m=function(at){var Mt=typeof at;return at!=null&&(Mt=="object"||Mt=="function")},y=typeof Qo=="object"&&Qo&&Qo.Object===Object&&Qo;var x=typeof self=="object"&&self&&self.Object===Object&&self;const v=y||x||Function("return this")(),A=function(){return v.Date.now()};var D=/\s/;const N=function(at){for(var Mt=at.length;Mt--&&D.test(at.charAt(Mt)););return Mt};var B=/^\s+/;const L=function(at){return at&&at.slice(0,N(at)+1).replace(B,"")},V=v.Symbol;var j=Object.prototype,R=j.hasOwnProperty,O=j.toString,$=V?V.toStringTag:void 0;const J=function(at){var Mt=R.call(at,$),Ht=at[$];try{at[$]=void 0;var jt=!0}catch{}var G=O.call(at);return jt&&(Mt?at[$]=Ht:delete at[$]),G};var W=Object.prototype.toString;const I=function(at){return W.call(at)};var q=V?V.toStringTag:void 0;const Z=function(at){return at==null?at===void 0?"[object Undefined]":"[object Null]":q&&q in Object(at)?J(at):I(at)},st=function(at){return at!=null&&typeof at=="object"},X=function(at){return typeof at=="symbol"||st(at)&&Z(at)=="[object Symbol]"};var lt=/^[-+]0x[0-9a-f]+$/i,Lt=/^0b[01]+$/i,Tt=/^0o[0-7]+$/i,mt=parseInt;const At=function(at){if(typeof at=="number")return at;if(X(at))return NaN;if(m(at)){var Mt=typeof at.valueOf=="function"?at.valueOf():at;at=m(Mt)?Mt+"":Mt}if(typeof at!="string")return at===0?at:+at;at=L(at);var Ht=Lt.test(at);return Ht||Tt.test(at)?mt(at.slice(2),Ht?2:8):lt.test(at)?NaN:+at};var Ct=Math.max,St=Math.min;const Ie=function(at,Mt,Ht){var jt,G,ft,dt,wt,Nt,z=0,F=!1,H=!1,Q=!0;if(typeof at!="function")throw new TypeError("Expected a function");function tt(ht){var pt=jt,vt=G;return jt=G=void 0,z=ht,dt=at.apply(vt,pt)}function ot(ht){return z=ht,wt=setTimeout(ct,Mt),F?tt(ht):dt}function kt(ht){var pt=ht-Nt;return Nt===void 0||pt>=Mt||pt<0||H&&ht-z>=ft}function ct(){var ht=A();if(kt(ht))return ut(ht);wt=setTimeout(ct,function(pt){var vt=Mt-(pt-Nt);return H?St(vt,ft-(pt-z)):vt}(ht))}function ut(ht){return wt=void 0,Q&&jt?tt(ht):(jt=G=void 0,dt)}function et(){var ht=A(),pt=kt(ht);if(jt=arguments,G=this,Nt=ht,pt){if(wt===void 0)return ot(Nt);if(H)return clearTimeout(wt),wt=setTimeout(ct,Mt),tt(Nt)}return wt===void 0&&(wt=setTimeout(ct,Mt)),dt}return Mt=At(Mt)||0,m(Ht)&&(F=!!Ht.leading,ft=(H="maxWait"in Ht)?Ct(At(Ht.maxWait)||0,Mt):ft,Q="trailing"in Ht?!!Ht.trailing:Q),et.cancel=function(){wt!==void 0&&clearTimeout(wt),z=0,jt=Nt=G=wt=void 0},et.flush=function(){return wt===void 0?dt:ut(A())},et},_e=(0,C.defineComponent)({name:"Ckeditor",model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,required:!0},config:{type:Object,default:()=>({})},modelValue:{type:String,default:""},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1},disableTwoWayDataBinding:{type:Boolean,default:!1}},emits:["ready","destroy","blur","focus","input","update:modelValue"],data:()=>({instance:null,lastEditorData:null}),watch:{modelValue(at){this.instance&&at!==this.lastEditorData&&this.instance.data.set(at)},disabled(at){at?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},created(){const{CKEDITOR_VERSION:at}=window;if(at){const[Mt]=at.split(".").map(Number);Mt<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},mounted(){const at=Object.assign({},this.config);this.modelValue&&(at.initialData=this.modelValue),this.editor.create(this.$el,at).then(Mt=>{this.instance=(0,C.markRaw)(Mt),this.setUpEditorEvents(),this.modelValue!==at.initialData&&Mt.data.set(this.modelValue),this.disabled&&Mt.enableReadOnlyMode("Integration Sample"),this.$emit("ready",Mt)}).catch(Mt=>{console.error(Mt)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},methods:{setUpEditorEvents(){const at=this.instance,Mt=Ie(Ht=>{if(this.disableTwoWayDataBinding)return;const jt=this.lastEditorData=at.data.get();this.$emit("update:modelValue",jt,Ht,at),this.$emit("input",jt,Ht,at)},300,{leading:!0});at.model.document.on("change:data",Mt),at.editing.view.document.on("focus",Ht=>{this.$emit("focus",Ht,at)}),at.editing.view.document.on("blur",Ht=>{this.$emit("blur",Ht,at)})}},render(){return(0,C.h)(this.tagName)}});if(!C.version||!C.version.startsWith("3."))throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const de={install(at){at.component("Ckeditor",_e)},component:_e}})(),b=b.default})())})(YE);var Q9=YE.exports;const Z9=KE(Q9);var Ml={exports:{}};Ml.exports;(function(s,a){(function(d){const p=d.en=d.en||{};p.dictionary=Object.assign(p.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(d,p){s.exports=p()}(self,()=>(()=>{var d={4959:(b,C,m)=>{const y=m(1103),x={};for(const A of Object.keys(y))x[y[A]]=A;const v={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};b.exports=v;for(const A of Object.keys(v)){if(!("channels"in v[A]))throw new Error("missing channels property: "+A);if(!("labels"in v[A]))throw new Error("missing channel labels property: "+A);if(v[A].labels.length!==v[A].channels)throw new Error("channel and label counts mismatch: "+A);const{channels:D,labels:N}=v[A];delete v[A].channels,delete v[A].labels,Object.defineProperty(v[A],"channels",{value:D}),Object.defineProperty(v[A],"labels",{value:N})}v.rgb.hsl=function(A){const D=A[0]/255,N=A[1]/255,B=A[2]/255,L=Math.min(D,N,B),V=Math.max(D,N,B),j=V-L;let R,O;V===L?R=0:D===V?R=(N-B)/j:N===V?R=2+(B-D)/j:B===V&&(R=4+(D-N)/j),R=Math.min(60*R,360),R<0&&(R+=360);const $=(L+V)/2;return O=V===L?0:$<=.5?j/(V+L):j/(2-V-L),[R,100*O,100*$]},v.rgb.hsv=function(A){let D,N,B,L,V;const j=A[0]/255,R=A[1]/255,O=A[2]/255,$=Math.max(j,R,O),J=$-Math.min(j,R,O),W=function(I){return($-I)/6/J+.5};return J===0?(L=0,V=0):(V=J/$,D=W(j),N=W(R),B=W(O),j===$?L=B-N:R===$?L=.3333333333333333+D-B:O===$&&(L=.6666666666666666+N-D),L<0?L+=1:L>1&&(L-=1)),[360*L,100*V,100*$]},v.rgb.hwb=function(A){const D=A[0],N=A[1];let B=A[2];const L=v.rgb.hsl(A)[0],V=1/255*Math.min(D,Math.min(N,B));return B=1-.00392156862745098*Math.max(D,Math.max(N,B)),[L,100*V,100*B]},v.rgb.cmyk=function(A){const D=A[0]/255,N=A[1]/255,B=A[2]/255,L=Math.min(1-D,1-N,1-B);return[100*((1-D-L)/(1-L)||0),100*((1-N-L)/(1-L)||0),100*((1-B-L)/(1-L)||0),100*L]},v.rgb.keyword=function(A){const D=x[A];if(D)return D;let N,B=1/0;for(const j of Object.keys(y)){const R=y[j],O=(V=R,((L=A)[0]-V[0])**2+(L[1]-V[1])**2+(L[2]-V[2])**2);O<B&&(B=O,N=j)}var L,V;return N},v.keyword.rgb=function(A){return y[A]},v.rgb.xyz=function(A){let D=A[0]/255,N=A[1]/255,B=A[2]/255;return D=D>.04045?((D+.055)/1.055)**2.4:D/12.92,N=N>.04045?((N+.055)/1.055)**2.4:N/12.92,B=B>.04045?((B+.055)/1.055)**2.4:B/12.92,[100*(.4124*D+.3576*N+.1805*B),100*(.2126*D+.7152*N+.0722*B),100*(.0193*D+.1192*N+.9505*B)]},v.rgb.lab=function(A){const D=v.rgb.xyz(A);let N=D[0],B=D[1],L=D[2];return N/=95.047,B/=100,L/=108.883,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,B=B>.008856?B**.3333333333333333:7.787*B+.13793103448275862,L=L>.008856?L**.3333333333333333:7.787*L+.13793103448275862,[116*B-16,500*(N-B),200*(B-L)]},v.hsl.rgb=function(A){const D=A[0]/360,N=A[1]/100,B=A[2]/100;let L,V,j;if(N===0)return j=255*B,[j,j,j];L=B<.5?B*(1+N):B+N-B*N;const R=2*B-L,O=[0,0,0];for(let $=0;$<3;$++)V=D+.3333333333333333*-($-1),V<0&&V++,V>1&&V--,j=6*V<1?R+6*(L-R)*V:2*V<1?L:3*V<2?R+(L-R)*(.6666666666666666-V)*6:R,O[$]=255*j;return O},v.hsl.hsv=function(A){const D=A[0];let N=A[1]/100,B=A[2]/100,L=N;const V=Math.max(B,.01);return B*=2,N*=B<=1?B:2-B,L*=V<=1?V:2-V,[D,100*(B===0?2*L/(V+L):2*N/(B+N)),100*((B+N)/2)]},v.hsv.rgb=function(A){const D=A[0]/60,N=A[1]/100;let B=A[2]/100;const L=Math.floor(D)%6,V=D-Math.floor(D),j=255*B*(1-N),R=255*B*(1-N*V),O=255*B*(1-N*(1-V));switch(B*=255,L){case 0:return[B,O,j];case 1:return[R,B,j];case 2:return[j,B,O];case 3:return[j,R,B];case 4:return[O,j,B];case 5:return[B,j,R]}},v.hsv.hsl=function(A){const D=A[0],N=A[1]/100,B=A[2]/100,L=Math.max(B,.01);let V,j;j=(2-N)*B;const R=(2-N)*L;return V=N*L,V/=R<=1?R:2-R,V=V||0,j/=2,[D,100*V,100*j]},v.hwb.rgb=function(A){const D=A[0]/360;let N=A[1]/100,B=A[2]/100;const L=N+B;let V;L>1&&(N/=L,B/=L);const j=Math.floor(6*D),R=1-B;V=6*D-j,1&j&&(V=1-V);const O=N+V*(R-N);let $,J,W;switch(j){default:case 6:case 0:$=R,J=O,W=N;break;case 1:$=O,J=R,W=N;break;case 2:$=N,J=R,W=O;break;case 3:$=N,J=O,W=R;break;case 4:$=O,J=N,W=R;break;case 5:$=R,J=N,W=O}return[255*$,255*J,255*W]},v.cmyk.rgb=function(A){const D=A[0]/100,N=A[1]/100,B=A[2]/100,L=A[3]/100;return[255*(1-Math.min(1,D*(1-L)+L)),255*(1-Math.min(1,N*(1-L)+L)),255*(1-Math.min(1,B*(1-L)+L))]},v.xyz.rgb=function(A){const D=A[0]/100,N=A[1]/100,B=A[2]/100;let L,V,j;return L=3.2406*D+-1.5372*N+-.4986*B,V=-.9689*D+1.8758*N+.0415*B,j=.0557*D+-.204*N+1.057*B,L=L>.0031308?1.055*L**.4166666666666667-.055:12.92*L,V=V>.0031308?1.055*V**.4166666666666667-.055:12.92*V,j=j>.0031308?1.055*j**.4166666666666667-.055:12.92*j,L=Math.min(Math.max(0,L),1),V=Math.min(Math.max(0,V),1),j=Math.min(Math.max(0,j),1),[255*L,255*V,255*j]},v.xyz.lab=function(A){let D=A[0],N=A[1],B=A[2];return D/=95.047,N/=100,B/=108.883,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,B=B>.008856?B**.3333333333333333:7.787*B+.13793103448275862,[116*N-16,500*(D-N),200*(N-B)]},v.lab.xyz=function(A){let D,N,B;N=(A[0]+16)/116,D=A[1]/500+N,B=N-A[2]/200;const L=N**3,V=D**3,j=B**3;return N=L>.008856?L:(N-.13793103448275862)/7.787,D=V>.008856?V:(D-.13793103448275862)/7.787,B=j>.008856?j:(B-.13793103448275862)/7.787,D*=95.047,N*=100,B*=108.883,[D,N,B]},v.lab.lch=function(A){const D=A[0],N=A[1],B=A[2];let L;return L=360*Math.atan2(B,N)/2/Math.PI,L<0&&(L+=360),[D,Math.sqrt(N*N+B*B),L]},v.lch.lab=function(A){const D=A[0],N=A[1],B=A[2]/360*2*Math.PI;return[D,N*Math.cos(B),N*Math.sin(B)]},v.rgb.ansi16=function(A,D=null){const[N,B,L]=A;let V=D===null?v.rgb.hsv(A)[2]:D;if(V=Math.round(V/50),V===0)return 30;let j=30+(Math.round(L/255)<<2|Math.round(B/255)<<1|Math.round(N/255));return V===2&&(j+=60),j},v.hsv.ansi16=function(A){return v.rgb.ansi16(v.hsv.rgb(A),A[2])},v.rgb.ansi256=function(A){const D=A[0],N=A[1],B=A[2];return D===N&&N===B?D<8?16:D>248?231:Math.round((D-8)/247*24)+232:16+36*Math.round(D/255*5)+6*Math.round(N/255*5)+Math.round(B/255*5)},v.ansi16.rgb=function(A){let D=A%10;if(D===0||D===7)return A>50&&(D+=3.5),D=D/10.5*255,[D,D,D];const N=.5*(1+~~(A>50));return[(1&D)*N*255,(D>>1&1)*N*255,(D>>2&1)*N*255]},v.ansi256.rgb=function(A){if(A>=232){const N=10*(A-232)+8;return[N,N,N]}let D;return A-=16,[Math.floor(A/36)/5*255,Math.floor((D=A%36)/6)/5*255,D%6/5*255]},v.rgb.hex=function(A){const D=(((255&Math.round(A[0]))<<16)+((255&Math.round(A[1]))<<8)+(255&Math.round(A[2]))).toString(16).toUpperCase();return"000000".substring(D.length)+D},v.hex.rgb=function(A){const D=A.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!D)return[0,0,0];let N=D[0];D[0].length===3&&(N=N.split("").map(L=>L+L).join(""));const B=parseInt(N,16);return[B>>16&255,B>>8&255,255&B]},v.rgb.hcg=function(A){const D=A[0]/255,N=A[1]/255,B=A[2]/255,L=Math.max(Math.max(D,N),B),V=Math.min(Math.min(D,N),B),j=L-V;let R,O;return R=j<1?V/(1-j):0,O=j<=0?0:L===D?(N-B)/j%6:L===N?2+(B-D)/j:4+(D-N)/j,O/=6,O%=1,[360*O,100*j,100*R]},v.hsl.hcg=function(A){const D=A[1]/100,N=A[2]/100,B=N<.5?2*D*N:2*D*(1-N);let L=0;return B<1&&(L=(N-.5*B)/(1-B)),[A[0],100*B,100*L]},v.hsv.hcg=function(A){const D=A[1]/100,N=A[2]/100,B=D*N;let L=0;return B<1&&(L=(N-B)/(1-B)),[A[0],100*B,100*L]},v.hcg.rgb=function(A){const D=A[0]/360,N=A[1]/100,B=A[2]/100;if(N===0)return[255*B,255*B,255*B];const L=[0,0,0],V=D%1*6,j=V%1,R=1-j;let O=0;switch(Math.floor(V)){case 0:L[0]=1,L[1]=j,L[2]=0;break;case 1:L[0]=R,L[1]=1,L[2]=0;break;case 2:L[0]=0,L[1]=1,L[2]=j;break;case 3:L[0]=0,L[1]=R,L[2]=1;break;case 4:L[0]=j,L[1]=0,L[2]=1;break;default:L[0]=1,L[1]=0,L[2]=R}return O=(1-N)*B,[255*(N*L[0]+O),255*(N*L[1]+O),255*(N*L[2]+O)]},v.hcg.hsv=function(A){const D=A[1]/100,N=D+A[2]/100*(1-D);let B=0;return N>0&&(B=D/N),[A[0],100*B,100*N]},v.hcg.hsl=function(A){const D=A[1]/100,N=A[2]/100*(1-D)+.5*D;let B=0;return N>0&&N<.5?B=D/(2*N):N>=.5&&N<1&&(B=D/(2*(1-N))),[A[0],100*B,100*N]},v.hcg.hwb=function(A){const D=A[1]/100,N=D+A[2]/100*(1-D);return[A[0],100*(N-D),100*(1-N)]},v.hwb.hcg=function(A){const D=A[1]/100,N=1-A[2]/100,B=N-D;let L=0;return B<1&&(L=(N-B)/(1-B)),[A[0],100*B,100*L]},v.apple.rgb=function(A){return[A[0]/65535*255,A[1]/65535*255,A[2]/65535*255]},v.rgb.apple=function(A){return[A[0]/255*65535,A[1]/255*65535,A[2]/255*65535]},v.gray.rgb=function(A){return[A[0]/100*255,A[0]/100*255,A[0]/100*255]},v.gray.hsl=function(A){return[0,0,A[0]]},v.gray.hsv=v.gray.hsl,v.gray.hwb=function(A){return[0,100,A[0]]},v.gray.cmyk=function(A){return[0,0,0,A[0]]},v.gray.lab=function(A){return[A[0],0,0]},v.gray.hex=function(A){const D=255&Math.round(A[0]/100*255),N=((D<<16)+(D<<8)+D).toString(16).toUpperCase();return"000000".substring(N.length)+N},v.rgb.gray=function(A){return[(A[0]+A[1]+A[2])/3/255*100]}},841:(b,C,m)=>{const y=m(4959),x=m(9325),v={};Object.keys(y).forEach(A=>{v[A]={},Object.defineProperty(v[A],"channels",{value:y[A].channels}),Object.defineProperty(v[A],"labels",{value:y[A].labels});const D=x(A);Object.keys(D).forEach(N=>{const B=D[N];v[A][N]=function(L){const V=function(...j){const R=j[0];if(R==null)return R;R.length>1&&(j=R);const O=L(j);if(typeof O=="object")for(let $=O.length,J=0;J<$;J++)O[J]=Math.round(O[J]);return O};return"conversion"in L&&(V.conversion=L.conversion),V}(B),v[A][N].raw=function(L){const V=function(...j){const R=j[0];return R==null?R:(R.length>1&&(j=R),L(j))};return"conversion"in L&&(V.conversion=L.conversion),V}(B)})}),b.exports=v},9325:(b,C,m)=>{const y=m(4959);function x(D){const N=function(){const L={},V=Object.keys(y);for(let j=V.length,R=0;R<j;R++)L[V[R]]={distance:-1,parent:null};return L}(),B=[D];for(N[D].distance=0;B.length;){const L=B.pop(),V=Object.keys(y[L]);for(let j=V.length,R=0;R<j;R++){const O=V[R],$=N[O];$.distance===-1&&($.distance=N[L].distance+1,$.parent=L,B.unshift(O))}}return N}function v(D,N){return function(B){return N(D(B))}}function A(D,N){const B=[N[D].parent,D];let L=y[N[D].parent][D],V=N[D].parent;for(;N[V].parent;)B.unshift(N[V].parent),L=v(y[N[V].parent][V],L),V=N[V].parent;return L.conversion=B,L}b.exports=function(D){const N=x(D),B={},L=Object.keys(N);for(let V=L.length,j=0;j<V;j++){const R=L[j];N[R].parent!==null&&(B[R]=A(R,N))}return B}},1103:b=>{b.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8603:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const D=A},3062:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const D=A},903:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const D=A},3143:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},4717:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const D=A},9315:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const D=A},8733:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const D=A},3508:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const D=A},2640:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const D=A},3535:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const D=A},1568:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const D=A},6270:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const D=A},5083:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},4036:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const D=A},3773:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const D=A},3689:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const D=A},1905:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},9773:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const D=A},2347:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},7754:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},111:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const D=A},4721:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const D=A},5730:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const D=A},4564:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},6082:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const D=A},2417:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const D=A},1199:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const D=A},4652:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const D=A},7442:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},9292:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},7368:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},4070:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},9247:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const D=A},1613:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const D=A},6306:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const D=A},2128:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const D=A},5087:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},4101:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const D=A},3881:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const D=A},6237:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},7341:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},6945:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},8157:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-modal)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-modal);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},4906:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=A},5332:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=A},6781:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const D=A},3398:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const D=A},4157:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const D=A},5485:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},3949:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},7686:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},7339:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const D=A},9688:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},8847:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header .ck-icon{margin-right:var(--ck-spacing-medium)}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BASD,CAPC,6BACC,qCACD,CAEA,8CACC,WACD,CCbD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& .ck-icon {
		margin-right: var(--ck-spacing-medium);
	}

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const D=A},8960:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const D=A},6574:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},4879:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},3662:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const D=A},2577:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},1046:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>span{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,8BACC,cAAe,CACf,eAAiB,CACjB,gCACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > span {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},8793:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},4650:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const D=A},7676:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},5868:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},6764:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=A},6770:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const D=A},498:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const D=A},8182:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const D=A},9695:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const D=A},5542:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=A},3332:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDRnC,mBAAoB,CAEpB,qCACD,CCOC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CACrB,wCAAyC,CAFzC,wBAGD,CApBD,gCAuBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const D=A},4793:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-modal) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const D=A},3488:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=A},8506:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const D=A},4921:(b,C,m)=>{m.d(C,{Z:()=>D});var y=m(1799),x=m.n(y),v=m(2609),A=m.n(v)()(x());A.push([b.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const D=A},2609:b=>{b.exports=function(C){var m=[];return m.toString=function(){return this.map(function(y){var x=C(y);return y[2]?"@media ".concat(y[2]," {").concat(x,"}"):x}).join("")},m.i=function(y,x,v){typeof y=="string"&&(y=[[null,y,""]]);var A={};if(v)for(var D=0;D<this.length;D++){var N=this[D][0];N!=null&&(A[N]=!0)}for(var B=0;B<y.length;B++){var L=[].concat(y[B]);v&&A[L[0]]||(x&&(L[2]?L[2]="".concat(x," and ").concat(L[2]):L[2]=x),m.push(L))}},m}},1799:b=>{function C(y,x){return function(v){if(Array.isArray(v))return v}(y)||function(v,A){var D=v&&(typeof Symbol<"u"&&v[Symbol.iterator]||v["@@iterator"]);if(D!=null){var N,B,L=[],V=!0,j=!1;try{for(D=D.call(v);!(V=(N=D.next()).done)&&(L.push(N.value),!A||L.length!==A);V=!0);}catch(R){j=!0,B=R}finally{try{V||D.return==null||D.return()}finally{if(j)throw B}}return L}}(y,x)||function(v,A){if(v){if(typeof v=="string")return m(v,A);var D=Object.prototype.toString.call(v).slice(8,-1);if(D==="Object"&&v.constructor&&(D=v.constructor.name),D==="Map"||D==="Set")return Array.from(v);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return m(v,A)}}(y,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(y,x){(x==null||x>y.length)&&(x=y.length);for(var v=0,A=new Array(x);v<x;v++)A[v]=y[v];return A}b.exports=function(y){var x=C(y,4),v=x[1],A=x[3];if(!A)return v;if(typeof btoa=="function"){var D=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),N="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(D),B="/*# ".concat(N," */"),L=A.sources.map(function(V){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(V," */")});return[v].concat(L).concat([B]).join(`
`)}return[v].join(`
`)}},6062:(b,C,m)=>{var y,x=function(){return y===void 0&&(y=!!(window&&document&&document.all&&!window.atob)),y},v=function(){var W={};return function(I){if(W[I]===void 0){var q=document.querySelector(I);if(window.HTMLIFrameElement&&q instanceof window.HTMLIFrameElement)try{q=q.contentDocument.head}catch{q=null}W[I]=q}return W[I]}}(),A=[];function D(W){for(var I=-1,q=0;q<A.length;q++)if(A[q].identifier===W){I=q;break}return I}function N(W,I){for(var q={},Z=[],st=0;st<W.length;st++){var X=W[st],lt=I.base?X[0]+I.base:X[0],Lt=q[lt]||0,Tt="".concat(lt," ").concat(Lt);q[lt]=Lt+1;var mt=D(Tt),At={css:X[1],media:X[2],sourceMap:X[3]};mt!==-1?(A[mt].references++,A[mt].updater(At)):A.push({identifier:Tt,updater:J(At,I),references:1}),Z.push(Tt)}return Z}function B(W){var I=document.createElement("style"),q=W.attributes||{};if(q.nonce===void 0){var Z=m.nc;Z&&(q.nonce=Z)}if(Object.keys(q).forEach(function(X){I.setAttribute(X,q[X])}),typeof W.insert=="function")W.insert(I);else{var st=v(W.insert||"head");if(!st)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");st.appendChild(I)}return I}var L,V=(L=[],function(W,I){return L[W]=I,L.filter(Boolean).join(`
`)});function j(W,I,q,Z){var st=q?"":Z.media?"@media ".concat(Z.media," {").concat(Z.css,"}"):Z.css;if(W.styleSheet)W.styleSheet.cssText=V(I,st);else{var X=document.createTextNode(st),lt=W.childNodes;lt[I]&&W.removeChild(lt[I]),lt.length?W.insertBefore(X,lt[I]):W.appendChild(X)}}function R(W,I,q){var Z=q.css,st=q.media,X=q.sourceMap;if(st?W.setAttribute("media",st):W.removeAttribute("media"),X&&typeof btoa<"u"&&(Z+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(X))))," */")),W.styleSheet)W.styleSheet.cssText=Z;else{for(;W.firstChild;)W.removeChild(W.firstChild);W.appendChild(document.createTextNode(Z))}}var O=null,$=0;function J(W,I){var q,Z,st;if(I.singleton){var X=$++;q=O||(O=B(I)),Z=j.bind(null,q,X,!1),st=j.bind(null,q,X,!0)}else q=B(I),Z=R.bind(null,q,I),st=function(){(function(lt){if(lt.parentNode===null)return!1;lt.parentNode.removeChild(lt)})(q)};return Z(W),function(lt){if(lt){if(lt.css===W.css&&lt.media===W.media&&lt.sourceMap===W.sourceMap)return;Z(W=lt)}else st()}}b.exports=function(W,I){(I=I||{}).singleton||typeof I.singleton=="boolean"||(I.singleton=x());var q=N(W=W||[],I);return function(Z){if(Z=Z||[],Object.prototype.toString.call(Z)==="[object Array]"){for(var st=0;st<q.length;st++){var X=D(q[st]);A[X].references--}for(var lt=N(Z,I),Lt=0;Lt<q.length;Lt++){var Tt=D(q[Lt]);A[Tt].references===0&&(A[Tt].updater(),A.splice(Tt,1))}q=lt}}}}},p={};function f(b){var C=p[b];if(C!==void 0)return C.exports;var m=p[b]={id:b,exports:{}};return d[b](m,m.exports,f),m.exports}f.n=b=>{var C=b&&b.__esModule?()=>b.default:()=>b;return f.d(C,{a:C}),C},f.d=(b,C)=>{for(var m in C)f.o(C,m)&&!f.o(b,m)&&Object.defineProperty(b,m,{enumerable:!0,get:C[m]})},f.o=(b,C)=>Object.prototype.hasOwnProperty.call(b,C),f.nc=void 0;var w={};return(()=>{function b({emitter:o,activator:t,callback:e,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!t())return;const c=typeof r.composedPath=="function"?r.composedPath():[],l=typeof n=="function"?n():n;for(const u of l)if(u.contains(r.target)||c.includes(u))return;e()})}function C(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...t){super(...t),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function m({view:o}){o.listenTo(o.element,"submit",(t,e)=>{e.preventDefault(),o.fire("submit")},{useCapture:!0})}f.d(w,{default:()=>Ch});const y=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var x;const v={isMac:A(y),isWindows:(x=y,x.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(y),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(y),isiOS:function(o){return!!o.match(/iphone|ipad/i)||A(o)&&navigator.maxTouchPoints>0}(y),isAndroid:function(o){return o.indexOf("android")>-1}(y),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(y),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function A(o){return o.indexOf("macintosh")>-1}function D(o,t,e,n){e=e||function(u,h){return u===h};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(t)?t:Array.prototype.slice.call(t),c=function(u,h,g){const k=N(u,h,g);if(k===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const _=B(u,k),E=B(h,k),T=N(_,E,g),S=u.length-T,M=h.length-T;return{firstIndex:k,lastIndexOld:S,lastIndexNew:M}}(i,r,e);return n?function(u,h){const{firstIndex:g,lastIndexOld:k,lastIndexNew:_}=u;if(g===-1)return Array(h).fill("equal");let E=[];return g>0&&(E=E.concat(Array(g).fill("equal"))),_-g>0&&(E=E.concat(Array(_-g).fill("insert"))),k-g>0&&(E=E.concat(Array(k-g).fill("delete"))),_<h&&(E=E.concat(Array(h-_).fill("equal"))),E}(c,r.length):function(u,h){const g=[],{firstIndex:k,lastIndexOld:_,lastIndexNew:E}=h;return E-k>0&&g.push({index:k,type:"insert",values:u.slice(k,E)}),_-k>0&&g.push({index:k+(E-k),type:"delete",howMany:_-k}),g}(r,c)}function N(o,t,e){for(let n=0;n<Math.max(o.length,t.length);n++)if(o[n]===void 0||t[n]===void 0||!e(o[n],t[n]))return n;return-1}function B(o,t){return o.slice(t).reverse()}function L(o,t,e){e=e||function(S,M){return S===M};const n=o.length,i=t.length;if(n>200||i>200||n+i>300)return L.fastDiff(o,t,e,!0);let r,c;if(i<n){const S=o;o=t,t=S,r="delete",c="insert"}else r="insert",c="delete";const l=o.length,u=t.length,h=u-l,g={},k={};function _(S){const M=(k[S-1]!==void 0?k[S-1]:-1)+1,P=k[S+1]!==void 0?k[S+1]:-1,U=M>P?-1:1;g[S+U]&&(g[S]=g[S+U].slice(0)),g[S]||(g[S]=[]),g[S].push(M>P?r:c);let Y=Math.max(M,P),bt=Y-S;for(;bt<l&&Y<u&&e(o[bt],t[Y]);)bt++,Y++,g[S].push("equal");return Y}let E,T=0;do{for(E=-T;E<h;E++)k[E]=_(E);for(E=h+T;E>h;E--)k[E]=_(E);k[h]=_(h),T++}while(k[h]!==u);return g[h].slice(1)}L.fastDiff=D;const V=function(){return function o(){o.called=!0}};class j{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=V(),this.off=V()}}const R=new Array(256).fill("").map((o,t)=>("0"+t.toString(16)).slice(-2));function O(){const o=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+R[o>>0&255]+R[o>>8&255]+R[o>>16&255]+R[o>>24&255]+R[t>>0&255]+R[t>>8&255]+R[t>>16&255]+R[t>>24&255]+R[e>>0&255]+R[e>>8&255]+R[e>>16&255]+R[e>>24&255]+R[n>>0&255]+R[n>>8&255]+R[n>>16&255]+R[n>>24&255]}const $={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function J(o,t){const e=$.get(t.priority);for(let n=0;n<o.length;n++)if($.get(o[n].priority)<e)return void o.splice(n,0,t);o.push(t)}const W="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class I extends Error{constructor(t,e,n){super(function(i,r){const c=new WeakSet,l=(g,k)=>{if(typeof k=="object"&&k!==null){if(c.has(k))return`[object ${k.constructor.name}]`;c.add(k)}return k},u=r?` ${JSON.stringify(r,l)}`:"",h=st(i);return i+u+h}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new I(t.message,e);throw n.stack=t.stack,n}}function q(o,t){console.warn(...X(o,t))}function Z(o,t){console.error(...X(o,t))}function st(o){return`
Read more: ${W}#error-${o}`}function X(o,t){const e=st(o);return t?[o,t,e]:[o,e]}const lt="40.0.0",Lt=new Date(2023,9,4);if(globalThis.CKEDITOR_VERSION)throw new I("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=lt;const Tt=Symbol("listeningTo"),mt=Symbol("emitterId"),At=Symbol("delegations"),Ct=St(Object);function St(o){return o?class extends o{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let i=!1;this.listenTo(this,t,(r,...c)=>{i||(i=!0,r.off(),e.call(this,r,...c))},n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,i={}){let r,c;this[Tt]||(this[Tt]={});const l=this[Tt];_e(t)||Ie(t);const u=_e(t);(r=l[u])||(r=l[u]={emitter:t,callbacks:{}}),(c=r.callbacks[e])||(c=r.callbacks[e]=[]),c.push(n),function(h,g,k,_,E){g._addEventListener?g._addEventListener(k,_,E):h._addEventListener.call(g,k,_,E)}(this,t,e,n,i)}stopListening(t,e,n){const i=this[Tt];let r=t&&_e(t);const c=i&&r?i[r]:void 0,l=c&&e?c.callbacks[e]:void 0;if(!(!i||t&&!c||e&&!l))if(n)jt(this,t,e,n),l.indexOf(n)!==-1&&(l.length===1?delete c.callbacks[e]:jt(this,t,e,n));else if(l){for(;n=l.pop();)jt(this,t,e,n);delete c.callbacks[e]}else if(c){for(e in c.callbacks)this.stopListening(t,e);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[Tt]}}fire(t,...e){try{const n=t instanceof j?t:new j(this,t),i=n.name;let r=Mt(this,i);if(n.path.push(this),r){const l=[n,...e];r=Array.from(r);for(let u=0;u<r.length&&(r[u].callback.apply(this,l),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[u].callback)),!n.stop.called);u++);}const c=this[At];if(c){const l=c.get(i),u=c.get("*");l&&Ht(l,n,e),u&&Ht(u,n,e)}return n.return}catch(n){I.rethrowUnexpectedError(n,this)}}delegate(...t){return{to:(e,n)=>{this[At]||(this[At]=new Map),t.forEach(i=>{const r=this[At].get(i);r?r.set(e,n):this[At].set(i,new Map([[e,n]]))})}}}stopDelegating(t,e){if(this[At])if(t)if(e){const n=this[At].get(t);n&&n.delete(e)}else this[At].delete(t);else this[At].clear()}_addEventListener(t,e,n){(function(c,l){const u=de(c);if(u[l])return;let h=l,g=null;const k=[];for(;h!==""&&!u[h];)u[h]={callbacks:[],childEvents:[]},k.push(u[h]),g&&u[h].childEvents.push(g),g=h,h=h.substr(0,h.lastIndexOf(":"));if(h!==""){for(const _ of k)_.callbacks=u[h].callbacks.slice();u[h].childEvents.push(g)}})(this,t);const i=at(this,t),r={callback:e,priority:$.get(n.priority)};for(const c of i)J(c,r)}_removeEventListener(t,e){const n=at(this,t);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==e&&(i.splice(r,1),r--)}}:Ct}function Ie(o,t){o[mt]||(o[mt]=t||O())}function _e(o){return o[mt]}function de(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function at(o,t){const e=de(o)[t];if(!e)return[];let n=[e.callbacks];for(let i=0;i<e.childEvents.length;i++){const r=at(o,e.childEvents[i]);n=n.concat(r)}return n}function Mt(o,t){let e;return o._events&&(e=o._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?Mt(o,t.substr(0,t.lastIndexOf(":"))):null}function Ht(o,t,e){for(let[n,i]of o){i?typeof i=="function"&&(i=i(t.name)):i=t.name;const r=new j(t.source,i);r.path=[...t.path],n.fire(r,...e)}}function jt(o,t,e,n){t._removeEventListener?t._removeEventListener(e,n):o._removeEventListener.call(t,e,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{St[o]=Ct.prototype[o]});const G=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")},ft=Symbol("observableProperties"),dt=Symbol("boundObservables"),wt=Symbol("boundProperties"),Nt=Symbol("decoratedMethods"),z=Symbol("decoratedOriginal"),F=H(St());function H(o){return o?class extends o{set(t,e){if(G(t))return void Object.keys(t).forEach(i=>{this.set(i,t[i])},this);Q(this);const n=this[ft];if(t in this&&!n.has(t))throw new I("observable-set-cannot-override",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(i){const r=n.get(t);let c=this.fire(`set:${t}`,t,i,r);c===void 0&&(c=i),r===c&&n.has(t)||(n.set(t,c),this.fire(`change:${t}`,t,c,r))}}),this[t]=e}bind(...t){if(!t.length||!kt(t))throw new I("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new I("observable-bind-duplicate-properties",this);Q(this);const e=this[wt];t.forEach(i=>{if(e.has(i))throw new I("observable-bind-rebind",this)});const n=new Map;return t.forEach(i=>{const r={property:i,to:[]};e.set(i,r),n.set(i,r)}),{to:tt,toMany:ot,_observable:this,_bindProperties:t,_to:[],_bindings:n}}unbind(...t){if(!this[ft])return;const e=this[wt],n=this[dt];if(t.length){if(!kt(t))throw new I("observable-unbind-wrong-properties",this);t.forEach(i=>{const r=e.get(i);r&&(r.to.forEach(([c,l])=>{const u=n.get(c),h=u[l];h.delete(r),h.size||delete u[l],Object.keys(u).length||(n.delete(c),this.stopListening(c,"change"))}),e.delete(i))})}else n.forEach((i,r)=>{this.stopListening(r,"change")}),n.clear(),e.clear()}decorate(t){Q(this);const e=this[t];if(!e)throw new I("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,(n,i)=>{n.return=e.apply(this,i)}),this[t]=function(...n){return this.fire(t,n)},this[t][z]=e,this[Nt]||(this[Nt]=[]),this[Nt].push(t)}stopListening(t,e,n){if(!t&&this[Nt]){for(const i of this[Nt])this[i]=this[i][z];delete this[Nt]}super.stopListening(t,e,n)}}:F}function Q(o){o[ft]||(Object.defineProperty(o,ft,{value:new Map}),Object.defineProperty(o,dt,{value:new Map}),Object.defineProperty(o,wt,{value:new Map}))}function tt(...o){const t=function(...r){if(!r.length)throw new I("observable-bind-to-parse-error",null);const c={to:[]};let l;return typeof r[r.length-1]=="function"&&(c.callback=r.pop()),r.forEach(u=>{if(typeof u=="string")l.properties.push(u);else{if(typeof u!="object")throw new I("observable-bind-to-parse-error",null);l={observable:u,properties:[]},c.to.push(l)}}),c}(...o),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new I("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new I("observable-bind-to-extra-callback",this);var i;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new I("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),i=this._observable,this._to.forEach(r=>{const c=i[dt];let l;c.get(r.observable)||i.listenTo(r.observable,"change",(u,h)=>{l=c.get(r.observable)[h],l&&l.forEach(g=>{ct(i,g.property)})})}),function(r){let c;r._bindings.forEach((l,u)=>{r._to.forEach(h=>{c=h.properties[l.callback?0:r._bindProperties.indexOf(u)],l.to.push([h.observable,c]),function(g,k,_,E){const T=g[dt],S=T.get(_),M=S||{};M[E]||(M[E]=new Set),M[E].add(k),S||T.set(_,M)}(r._observable,l,h.observable,c)})})}(this),this._bindProperties.forEach(r=>{ct(this._observable,r)})}function ot(o,t,e){if(this._bindings.size>1)throw new I("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(c=>[c,i]);return Array.prototype.concat.apply([],r)}(o,t),e)}function kt(o){return o.every(t=>typeof t=="string")}function ct(o,t){const e=o[wt].get(t);let n;e.callback?n=e.callback.apply(o,e.to.map(i=>i[0][i[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,t)?o[t]=n:o.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{H[o]=F.prototype[o]});class ut{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function et(o){let t=0;for(const e of o)t++;return t}function ht(o,t){const e=Math.min(o.length,t.length);for(let n=0;n<e;n++)if(o[n]!=t[n])return n;return o.length==t.length?"same":o.length<t.length?"prefix":"extension"}function pt(o){return!(!o||!o[Symbol.iterator])}const vt=typeof Qo=="object"&&Qo&&Qo.Object===Object&&Qo;var Ot=typeof self=="object"&&self&&self.Object===Object&&self;const It=vt||Ot||Function("return this")(),zt=It.Symbol;var qt=Object.prototype,fe=qt.hasOwnProperty,nn=qt.toString,mn=zt?zt.toStringTag:void 0;const Pa=function(o){var t=fe.call(o,mn),e=o[mn];try{o[mn]=void 0;var n=!0}catch{}var i=nn.call(o);return n&&(t?o[mn]=e:delete o[mn]),i};var hi=Object.prototype.toString;const La=function(o){return hi.call(o)};var je=zt?zt.toStringTag:void 0;const De=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":je&&je in Object(o)?Pa(o):La(o)},Me=Array.isArray,kn=function(o){return o!=null&&typeof o=="object"},Ag=function(o){return typeof o=="string"||!Me(o)&&kn(o)&&De(o)=="[object String]"};function Ra(o,t,e={},n=[]){const i=e&&e.xmlns,r=i?o.createElementNS(i,t):o.createElement(t);for(const c in e)r.setAttribute(c,e[c]);!Ag(n)&&pt(n)||(n=[n]);for(let c of n)Ag(c)&&(c=o.createTextNode(c)),r.appendChild(c);return r}const Cg=function(o,t){return function(e){return o(t(e))}},dd=Cg(Object.getPrototypeOf,Object);var ZE=Function.prototype,JE=Object.prototype,vg=ZE.toString,XE=JE.hasOwnProperty,tx=vg.call(Object);const on=function(o){if(!kn(o)||De(o)!="[object Object]")return!1;var t=dd(o);if(t===null)return!0;var e=XE.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&vg.call(e)==tx},ex=function(){this.__data__=[],this.size=0},gs=function(o,t){return o===t||o!=o&&t!=t},za=function(o,t){for(var e=o.length;e--;)if(gs(o[e][0],t))return e;return-1};var nx=Array.prototype.splice;const ox=function(o){var t=this.__data__,e=za(t,o);return!(e<0)&&(e==t.length-1?t.pop():nx.call(t,e,1),--this.size,!0)},ix=function(o){var t=this.__data__,e=za(t,o);return e<0?void 0:t[e][1]},rx=function(o){return za(this.__data__,o)>-1},sx=function(o,t){var e=this.__data__,n=za(e,o);return n<0?(++this.size,e.push([o,t])):e[n][1]=t,this};function rr(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}rr.prototype.clear=ex,rr.prototype.delete=ox,rr.prototype.get=ix,rr.prototype.has=rx,rr.prototype.set=sx;const ja=rr,ax=function(){this.__data__=new ja,this.size=0},cx=function(o){var t=this.__data__,e=t.delete(o);return this.size=t.size,e},lx=function(o){return this.__data__.get(o)},dx=function(o){return this.__data__.has(o)},pi=function(o){if(!G(o))return!1;var t=De(o);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},ud=It["__core-js_shared__"];var yg=function(){var o=/[^.]+$/.exec(ud&&ud.keys&&ud.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const ux=function(o){return!!yg&&yg in o};var hx=Function.prototype.toString;const gi=function(o){if(o!=null){try{return hx.call(o)}catch{}try{return o+""}catch{}}return""};var px=/^\[object .+?Constructor\]$/,gx=Function.prototype,fx=Object.prototype,mx=gx.toString,kx=fx.hasOwnProperty,bx=RegExp("^"+mx.call(kx).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const wx=function(o){return!(!G(o)||ux(o))&&(pi(o)?bx:px).test(gi(o))},_x=function(o,t){return o==null?void 0:o[t]},fi=function(o,t){var e=_x(o,t);return wx(e)?e:void 0},fs=fi(It,"Map"),ms=fi(Object,"create"),Ax=function(){this.__data__=ms?ms(null):{},this.size=0},Cx=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t};var vx=Object.prototype.hasOwnProperty;const yx=function(o){var t=this.__data__;if(ms){var e=t[o];return e==="__lodash_hash_undefined__"?void 0:e}return vx.call(t,o)?t[o]:void 0};var Ex=Object.prototype.hasOwnProperty;const xx=function(o){var t=this.__data__;return ms?t[o]!==void 0:Ex.call(t,o)},Dx=function(o,t){var e=this.__data__;return this.size+=this.has(o)?0:1,e[o]=ms&&t===void 0?"__lodash_hash_undefined__":t,this};function sr(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}sr.prototype.clear=Ax,sr.prototype.delete=Cx,sr.prototype.get=yx,sr.prototype.has=xx,sr.prototype.set=Dx;const Eg=sr,Tx=function(){this.size=0,this.__data__={hash:new Eg,map:new(fs||ja),string:new Eg}},Sx=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null},Fa=function(o,t){var e=o.__data__;return Sx(t)?e[typeof t=="string"?"string":"hash"]:e.map},Ix=function(o){var t=Fa(this,o).delete(o);return this.size-=t?1:0,t},Mx=function(o){return Fa(this,o).get(o)},Nx=function(o){return Fa(this,o).has(o)},Bx=function(o,t){var e=Fa(this,o),n=e.size;return e.set(o,t),this.size+=e.size==n?0:1,this};function ar(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}ar.prototype.clear=Tx,ar.prototype.delete=Ix,ar.prototype.get=Mx,ar.prototype.has=Nx,ar.prototype.set=Bx;const Va=ar,Ox=function(o,t){var e=this.__data__;if(e instanceof ja){var n=e.__data__;if(!fs||n.length<199)return n.push([o,t]),this.size=++e.size,this;e=this.__data__=new Va(n)}return e.set(o,t),this.size=e.size,this};function cr(o){var t=this.__data__=new ja(o);this.size=t.size}cr.prototype.clear=ax,cr.prototype.delete=cx,cr.prototype.get=lx,cr.prototype.has=dx,cr.prototype.set=Ox;const ks=cr,Px=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n&&t(o[e],e,o)!==!1;);return o},Ha=function(){try{var o=fi(Object,"defineProperty");return o({},"",{}),o}catch{}}(),hd=function(o,t,e){t=="__proto__"&&Ha?Ha(o,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):o[t]=e};var Lx=Object.prototype.hasOwnProperty;const pd=function(o,t,e){var n=o[t];Lx.call(o,t)&&gs(n,e)&&(e!==void 0||t in o)||hd(o,t,e)},lr=function(o,t,e,n){var i=!e;e||(e={});for(var r=-1,c=t.length;++r<c;){var l=t[r],u=n?n(e[l],o[l],l,e,o):void 0;u===void 0&&(u=o[l]),i?hd(e,l,u):pd(e,l,u)}return e},Rx=function(o,t){for(var e=-1,n=Array(o);++e<o;)n[e]=t(e);return n},xg=function(o){return kn(o)&&De(o)=="[object Arguments]"};var Dg=Object.prototype,zx=Dg.hasOwnProperty,jx=Dg.propertyIsEnumerable;const gd=xg(function(){return arguments}())?xg:function(o){return kn(o)&&zx.call(o,"callee")&&!jx.call(o,"callee")},Fx=function(){return!1};var Tg=a&&!a.nodeType&&a,Sg=Tg&&!0&&s&&!s.nodeType&&s,Ig=Sg&&Sg.exports===Tg?It.Buffer:void 0;const bs=(Ig?Ig.isBuffer:void 0)||Fx;var Vx=/^(?:0|[1-9]\d*)$/;const fd=function(o,t){var e=typeof o;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&Vx.test(o))&&o>-1&&o%1==0&&o<t},Mg=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var ue={};ue["[object Float32Array]"]=ue["[object Float64Array]"]=ue["[object Int8Array]"]=ue["[object Int16Array]"]=ue["[object Int32Array]"]=ue["[object Uint8Array]"]=ue["[object Uint8ClampedArray]"]=ue["[object Uint16Array]"]=ue["[object Uint32Array]"]=!0,ue["[object Arguments]"]=ue["[object Array]"]=ue["[object ArrayBuffer]"]=ue["[object Boolean]"]=ue["[object DataView]"]=ue["[object Date]"]=ue["[object Error]"]=ue["[object Function]"]=ue["[object Map]"]=ue["[object Number]"]=ue["[object Object]"]=ue["[object RegExp]"]=ue["[object Set]"]=ue["[object String]"]=ue["[object WeakMap]"]=!1;const Hx=function(o){return kn(o)&&Mg(o.length)&&!!ue[De(o)]},md=function(o){return function(t){return o(t)}};var Ng=a&&!a.nodeType&&a,ws=Ng&&!0&&s&&!s.nodeType&&s,kd=ws&&ws.exports===Ng&&vt.process;const dr=function(){try{var o=ws&&ws.require&&ws.require("util").types;return o||kd&&kd.binding&&kd.binding("util")}catch{}}();var Bg=dr&&dr.isTypedArray;const bd=Bg?md(Bg):Hx;var Ux=Object.prototype.hasOwnProperty;const Og=function(o,t){var e=Me(o),n=!e&&gd(o),i=!e&&!n&&bs(o),r=!e&&!n&&!i&&bd(o),c=e||n||i||r,l=c?Rx(o.length,String):[],u=l.length;for(var h in o)!t&&!Ux.call(o,h)||c&&(h=="length"||i&&(h=="offset"||h=="parent")||r&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||fd(h,u))||l.push(h);return l};var $x=Object.prototype;const wd=function(o){var t=o&&o.constructor;return o===(typeof t=="function"&&t.prototype||$x)},qx=Cg(Object.keys,Object);var Wx=Object.prototype.hasOwnProperty;const Gx=function(o){if(!wd(o))return qx(o);var t=[];for(var e in Object(o))Wx.call(o,e)&&e!="constructor"&&t.push(e);return t},Ua=function(o){return o!=null&&Mg(o.length)&&!pi(o)},_d=function(o){return Ua(o)?Og(o):Gx(o)},Kx=function(o,t){return o&&lr(t,_d(t),o)},Yx=function(o){var t=[];if(o!=null)for(var e in Object(o))t.push(e);return t};var Qx=Object.prototype.hasOwnProperty;const Zx=function(o){if(!G(o))return Yx(o);var t=wd(o),e=[];for(var n in o)(n!="constructor"||!t&&Qx.call(o,n))&&e.push(n);return e},ur=function(o){return Ua(o)?Og(o,!0):Zx(o)},Jx=function(o,t){return o&&lr(t,ur(t),o)};var Pg=a&&!a.nodeType&&a,Lg=Pg&&!0&&s&&!s.nodeType&&s,Rg=Lg&&Lg.exports===Pg?It.Buffer:void 0,zg=Rg?Rg.allocUnsafe:void 0;const jg=function(o,t){if(t)return o.slice();var e=o.length,n=zg?zg(e):new o.constructor(e);return o.copy(n),n},Fg=function(o,t){var e=-1,n=o.length;for(t||(t=Array(n));++e<n;)t[e]=o[e];return t},Xx=function(o,t){for(var e=-1,n=o==null?0:o.length,i=0,r=[];++e<n;){var c=o[e];t(c,e,o)&&(r[i++]=c)}return r},Vg=function(){return[]};var tD=Object.prototype.propertyIsEnumerable,Hg=Object.getOwnPropertySymbols;const Ad=Hg?function(o){return o==null?[]:(o=Object(o),Xx(Hg(o),function(t){return tD.call(o,t)}))}:Vg,eD=function(o,t){return lr(o,Ad(o),t)},Ug=function(o,t){for(var e=-1,n=t.length,i=o.length;++e<n;)o[i+e]=t[e];return o},$g=Object.getOwnPropertySymbols?function(o){for(var t=[];o;)Ug(t,Ad(o)),o=dd(o);return t}:Vg,nD=function(o,t){return lr(o,$g(o),t)},qg=function(o,t,e){var n=t(o);return Me(o)?n:Ug(n,e(o))},Cd=function(o){return qg(o,_d,Ad)},oD=function(o){return qg(o,ur,$g)},vd=fi(It,"DataView"),yd=fi(It,"Promise"),Ed=fi(It,"Set"),xd=fi(It,"WeakMap");var Wg="[object Map]",Gg="[object Promise]",Kg="[object Set]",Yg="[object WeakMap]",Qg="[object DataView]",iD=gi(vd),rD=gi(fs),sD=gi(yd),aD=gi(Ed),cD=gi(xd),mi=De;(vd&&mi(new vd(new ArrayBuffer(1)))!=Qg||fs&&mi(new fs)!=Wg||yd&&mi(yd.resolve())!=Gg||Ed&&mi(new Ed)!=Kg||xd&&mi(new xd)!=Yg)&&(mi=function(o){var t=De(o),e=t=="[object Object]"?o.constructor:void 0,n=e?gi(e):"";if(n)switch(n){case iD:return Qg;case rD:return Wg;case sD:return Gg;case aD:return Kg;case cD:return Yg}return t});const _s=mi;var lD=Object.prototype.hasOwnProperty;const dD=function(o){var t=o.length,e=new o.constructor(t);return t&&typeof o[0]=="string"&&lD.call(o,"index")&&(e.index=o.index,e.input=o.input),e},$a=It.Uint8Array,Dd=function(o){var t=new o.constructor(o.byteLength);return new $a(t).set(new $a(o)),t},uD=function(o,t){var e=t?Dd(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.byteLength)};var hD=/\w*$/;const pD=function(o){var t=new o.constructor(o.source,hD.exec(o));return t.lastIndex=o.lastIndex,t};var Zg=zt?zt.prototype:void 0,Jg=Zg?Zg.valueOf:void 0;const gD=function(o){return Jg?Object(Jg.call(o)):{}},Xg=function(o,t){var e=t?Dd(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.length)},fD=function(o,t,e){var n=o.constructor;switch(t){case"[object ArrayBuffer]":return Dd(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return uD(o,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Xg(o,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return pD(o);case"[object Symbol]":return gD(o)}};var tf=Object.create;const mD=function(){function o(){}return function(t){if(!G(t))return{};if(tf)return tf(t);o.prototype=t;var e=new o;return o.prototype=void 0,e}}(),ef=function(o){return typeof o.constructor!="function"||wd(o)?{}:mD(dd(o))},kD=function(o){return kn(o)&&_s(o)=="[object Map]"};var nf=dr&&dr.isMap;const bD=nf?md(nf):kD,wD=function(o){return kn(o)&&_s(o)=="[object Set]"};var of=dr&&dr.isSet;const _D=of?md(of):wD;var rf="[object Arguments]",sf="[object Function]",af="[object Object]",le={};le[rf]=le["[object Array]"]=le["[object ArrayBuffer]"]=le["[object DataView]"]=le["[object Boolean]"]=le["[object Date]"]=le["[object Float32Array]"]=le["[object Float64Array]"]=le["[object Int8Array]"]=le["[object Int16Array]"]=le["[object Int32Array]"]=le["[object Map]"]=le["[object Number]"]=le[af]=le["[object RegExp]"]=le["[object Set]"]=le["[object String]"]=le["[object Symbol]"]=le["[object Uint8Array]"]=le["[object Uint8ClampedArray]"]=le["[object Uint16Array]"]=le["[object Uint32Array]"]=!0,le["[object Error]"]=le[sf]=le["[object WeakMap]"]=!1;const Td=function o(t,e,n,i,r,c){var l,u=1&e,h=2&e,g=4&e;if(n&&(l=r?n(t,i,r,c):n(t)),l!==void 0)return l;if(!G(t))return t;var k=Me(t);if(k){if(l=dD(t),!u)return Fg(t,l)}else{var _=_s(t),E=_==sf||_=="[object GeneratorFunction]";if(bs(t))return jg(t,u);if(_==af||_==rf||E&&!r){if(l=h||E?{}:ef(t),!u)return h?nD(t,Jx(l,t)):eD(t,Kx(l,t))}else{if(!le[_])return r?t:{};l=fD(t,_,u)}}c||(c=new ks);var T=c.get(t);if(T)return T;c.set(t,l),_D(t)?t.forEach(function(M){l.add(o(M,e,n,M,t,c))}):bD(t)&&t.forEach(function(M,P){l.set(P,o(M,e,n,P,t,c))});var S=k?void 0:(g?h?oD:Cd:h?ur:_d)(t);return Px(S||t,function(M,P){S&&(M=t[P=M]),pd(l,P,o(M,e,n,P,t,c))}),l},Sd=function(o,t){return Td(o,5,t=typeof t=="function"?t:void 0)},ki=function(o){return kn(o)&&o.nodeType===1&&!on(o)};class cf{constructor(t,e){this._config={},e&&this.define(lf(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,i=!1){if(on(e))return void this._setObjectToTarget(t,e,i);const r=e.split(".");e=r.pop();for(const c of r)on(t[c])||(t[c]={}),t=t[c];if(on(n))return on(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const i of n){if(!on(t[i])){t=null;break}t=t[i]}return t?lf(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function lf(o){return Sd(o,AD)}function AD(o){return ki(o)?o:void 0}function Mo(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function qa(o){const t=Object.prototype.toString.apply(o);return t=="[object Window]"||t=="[object global]"}const df=bn(St());function bn(o){return o?class extends o{listenTo(t,e,n,i={}){if(Mo(t)||qa(t)){const r={capture:!!i.useCapture,passive:!!i.usePassive},c=this._getProxyEmitter(t,r)||new CD(t,r);this.listenTo(c,e,n,i)}else super.listenTo(t,e,n,i)}stopListening(t,e,n){if(Mo(t)||qa(t)){const i=this._getAllProxyEmitters(t);for(const r of i)this.stopListening(r,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(n,i){const r=n[Tt];return r&&r[i]?r[i].emitter:null}(this,uf(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:df}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{bn[o]=df.prototype[o]});class CD extends St(){constructor(t,e){super(),Ie(this,uf(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),St().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){St().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function uf(o,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=O())}(o);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}let Id;try{Id={window,document}}catch{Id={window:{},document:{}}}const Et=Id;function ve(o){return Object.prototype.toString.call(o)=="[object Text]"}function Wa(o){return Object.prototype.toString.apply(o)=="[object Range]"}function hf(o){const t=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function pf(o){return o&&o.parentNode?o.offsetParent===Et.document.body?null:o.offsetParent:null}const gf=["top","right","bottom","left","width","height"];class Yt{constructor(t){const e=Wa(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),Md(t)||e)if(e){const n=Yt.getDomRangeRects(t);Ga(this,Yt.getBoundingRect(n))}else Ga(this,t.getBoundingClientRect());else if(qa(t)){const{innerWidth:n,innerHeight:i}=t;Ga(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else Ga(this,t)}clone(){return new Yt(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};if(e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0)return null;{const n=new Yt(e);return n._source=this._source,n}}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(ff(t))return e;let n,i=t,r=t.parentNode||t.commonAncestorContainer;for(;r&&!ff(r);){const l=((c=r)instanceof HTMLElement?c.ownerDocument.defaultView.getComputedStyle(c).overflow:"visible")==="visible";i instanceof HTMLElement&&mf(i)==="absolute"&&(n=i);const u=mf(r);if(l||n&&(u==="relative"&&l||u!=="relative")){i=r,r=r.parentNode;continue}const h=new Yt(r),g=e.getIntersection(h);if(!g)return null;g.getArea()<e.getArea()&&(e=g),i=r,r=r.parentNode}var c;return e}isEqual(t){for(const e of gf)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}toAbsoluteRect(){const{scrollX:t,scrollY:e}=Et.window,n=this.clone().moveBy(t,e);if(Md(n._source)){const i=pf(n._source);i&&function(r,c){const l=new Yt(c),u=hf(c);let h=0,g=0;h-=l.left,g-=l.top,h+=c.scrollLeft,g+=c.scrollTop,h-=u.left,g-=u.top,r.moveBy(h,g)}(n,i)}return n}excludeScrollbarsAndBorders(){const t=this._source;let e,n,i;if(qa(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,i=t.getComputedStyle(t.document.documentElement).direction;else{const r=hf(t);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,i=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,i==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const i of n)e.push(new Yt(i));else{let i=t.startContainer;ve(i)&&(i=i.parentNode);const r=new Yt(i.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of t)n++,e.left=Math.min(e.left,i.left),e.top=Math.min(e.top,i.top),e.right=Math.max(e.right,i.right),e.bottom=Math.max(e.bottom,i.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new Yt(e))}}function Ga(o,t){for(const e of gf)o[e]=t[e]}function ff(o){return!!Md(o)&&o===o.ownerDocument.body}function Md(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function mf(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const Ae=class{constructor(o,t){Ae._observerInstance||Ae._createObserver(),this._element=o,this._callback=t,Ae._addElementCallback(o,t),Ae._observerInstance.observe(o)}get element(){return this._element}destroy(){Ae._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,t){Ae._elementCallbacks||(Ae._elementCallbacks=new Map);let e=Ae._elementCallbacks.get(o);e||(e=new Set,Ae._elementCallbacks.set(o,e)),e.add(t)}static _deleteElementCallback(o,t){const e=Ae._getElementCallbacks(o);e&&(e.delete(t),e.size||(Ae._elementCallbacks.delete(o),Ae._observerInstance.unobserve(o))),Ae._elementCallbacks&&!Ae._elementCallbacks.size&&(Ae._observerInstance=null,Ae._elementCallbacks=null)}static _getElementCallbacks(o){return Ae._elementCallbacks?Ae._elementCallbacks.get(o):null}static _createObserver(){Ae._observerInstance=new Et.window.ResizeObserver(o=>{for(const t of o){const e=Ae._getElementCallbacks(t.target);if(e)for(const n of e)n(t)}})}};let As=Ae;function vD(o,t){o instanceof HTMLTextAreaElement&&(o.value=t),o.innerHTML=t}function Cs(o){return t=>t+o}function Ka(o){let t=0;for(;o.previousSibling;)o=o.previousSibling,t++;return t}function kf(o,t,e){o.insertBefore(e,o.childNodes[t]||null)}function vs(o){return o&&o.nodeType===Node.COMMENT_NODE}function bi(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}As._observerInstance=null,As._elementCallbacks=null;var bf=Math.pow;function Nd({element:o,target:t,positions:e,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){pi(t)&&(t=t()),pi(n)&&(n=n());const c=pf(o),l=function(_){_=Object.assign({top:0,bottom:0,left:0,right:0},_);const E=new Yt(Et.window);return E.top+=_.top,E.height-=_.top,E.bottom-=_.bottom,E.height-=_.bottom,E}(r),u=new Yt(o),h=wf(t,l);let g;if(!h||!l.getIntersection(h))return null;const k={targetRect:h,elementRect:u,positionedElementAncestor:c,viewportRect:l};if(n||i){if(n){const _=wf(n,l);_&&(k.limiterRect=_)}g=function(_,E){const{elementRect:T}=E,S=T.getArea(),M=_.map(Y=>new _f(Y,E)).filter(Y=>!!Y.name);let P=0,U=null;for(const Y of M){const{limiterIntersectionArea:bt,viewportIntersectionArea:xt}=Y;if(bt===S)return Y;const Xt=bf(xt,2)+bf(bt,2);Xt>P&&(P=Xt,U=Y)}return U}(e,k)}else g=new _f(e[0],k);return g}function wf(o,t){const e=new Yt(o).getVisible();return e?e.getIntersection(t):null}class _f{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect,e.limiterRect);if(!n)return;const{left:i,top:r,name:c,config:l}=n;this.name=c,this.config=l,this._positioningFunctionCoordinates={left:i,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;return t?t.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function Af(o){const t=o.parentNode;t&&t.removeChild(o)}function yD({window:o,rect:t,alignToTop:e,forceScroll:n,viewportOffset:i}){const r=t.clone().moveBy(0,i.bottom),c=t.clone().moveBy(0,-i.top),l=new Yt(o).excludeScrollbarsAndBorders(),u=e&&n,h=[c,r].every(T=>l.contains(T));let{scrollX:g,scrollY:k}=o;const _=g,E=k;u?k-=l.top-t.top+i.top:h||(vf(c,l)?k-=l.top-t.top+i.top:Cf(r,l)&&(k+=e?t.top-l.top-i.top:t.bottom-l.bottom+i.bottom)),h||(yf(t,l)?g-=l.left-t.left+i.left:Ef(t,l)&&(g+=t.right-l.right+i.right)),g==_&&k===E||o.scrollTo(g,k)}function ED({parent:o,getRect:t,alignToTop:e,forceScroll:n,ancestorOffset:i=0,limiterElement:r}){const c=Bd(o),l=e&&n;let u,h,g;const k=r||c.document.body;for(;o!=k;)h=t(),u=new Yt(o).excludeScrollbarsAndBorders(),g=u.contains(h),l?o.scrollTop-=u.top-h.top+i:g||(vf(h,u)?o.scrollTop-=u.top-h.top+i:Cf(h,u)&&(o.scrollTop+=e?h.top-u.top-i:h.bottom-u.bottom+i)),g||(yf(h,u)?o.scrollLeft-=u.left-h.left+i:Ef(h,u)&&(o.scrollLeft+=h.right-u.right+i)),o=o.parentNode}function Cf(o,t){return o.bottom>t.bottom}function vf(o,t){return o.top<t.top}function yf(o,t){return o.left<t.left}function Ef(o,t){return o.right>t.right}function Bd(o){return Wa(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function xD(o){if(Wa(o)){let t=o.commonAncestorContainer;return ve(t)&&(t=t.parentNode),t}return o.parentNode}function xf(o,t){const e=Bd(o),n=new Yt(o);if(e===t)return n;{let i=e;for(;i!=t;){const r=i.frameElement,c=new Yt(r).excludeScrollbarsAndBorders();n.moveBy(c.left,c.top),i=i.parent}}return n}const DD={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},TD={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Wt=function(){const o={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)o[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)o[t-48]=t;for(let t=112;t<=123;t++)o["f"+(t-111)]=t;for(const t of"`-=[];',./\\")o[t]=t.charCodeAt(0);return o}(),SD=Object.fromEntries(Object.entries(Wt).map(([o,t])=>[t,o.charAt(0).toUpperCase()+o.slice(1)]));function hr(o){let t;if(typeof o=="string"){if(t=Wt[o.toLowerCase()],!t)throw new I("keyboard-unknown-key",null,{key:o})}else t=o.keyCode+(o.altKey?Wt.alt:0)+(o.ctrlKey?Wt.ctrl:0)+(o.shiftKey?Wt.shift:0)+(o.metaKey?Wt.cmd:0);return t}function ys(o){return typeof o=="string"&&(o=function(t){return t.split("+").map(e=>e.trim())}(o)),o.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return hr(e.slice(0,-1));const n=hr(e);return(v.isMac||v.isiOS)&&n==Wt.ctrl?Wt.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function Df(o){let t=ys(o);return Object.entries(v.isMac||v.isiOS?DD:TD).reduce((e,[n,i])=>(t&Wt[n]&&(t&=~Wt[n],e+=i),e),"")+(t?SD[t]:"")}function Od(o,t){const e=t==="ltr";switch(o){case Wt.arrowleft:return e?"left":"right";case Wt.arrowright:return e?"right":"left";case Wt.arrowup:return"up";case Wt.arrowdown:return"down"}}function Ne(o){return Array.isArray(o)?o:[o]}function ID(o,t,e=1){if(typeof e!="number")throw new I("translation-service-quantity-not-a-number",null,{quantity:e});const n=Object.keys(Et.window.CKEDITOR_TRANSLATIONS).length;n===1&&(o=Object.keys(Et.window.CKEDITOR_TRANSLATIONS)[0]);const i=t.id||t.string;if(n===0||!function(u,h){return!!Et.window.CKEDITOR_TRANSLATIONS[u]&&!!Et.window.CKEDITOR_TRANSLATIONS[u].dictionary[h]}(o,i))return e!==1?t.plural:t.string;const r=Et.window.CKEDITOR_TRANSLATIONS[o].dictionary,c=Et.window.CKEDITOR_TRANSLATIONS[o].getPluralForm||(u=>u===1?0:1),l=r[i];return typeof l=="string"?l:l[Number(c(e))]}Et.window.CKEDITOR_TRANSLATIONS||(Et.window.CKEDITOR_TRANSLATIONS={});const MD=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Tf(o){return MD.includes(o)?"rtl":"ltr"}class ND{constructor({uiLanguage:t="en",contentLanguage:e}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=Tf(this.uiLanguage),this.contentLanguageDirection=Tf(this.contentLanguage),this.t=(n,i)=>this._t(n,i)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=Ne(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(c,l)=>l<r.length?r[l]:c)}(ID(this.uiLanguage,t,n),e)}}class On extends St(){constructor(t={},e={}){super();const n=pt(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of t)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new I("collection-add-item-invalid-index",this);let n=0;for(const i of t){const r=this._getItemIdBeforeAdding(i),c=e+n;this._items.splice(c,0,i),this._itemMap.set(r,i),this.fire("add",i,c),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new I("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new I("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(i,r,c)=>{const l=e._bindToCollection==this,u=e._bindToInternalToExternalMap.get(r);if(l&&u)this._bindToExternalToInternalMap.set(r,u),this._bindToInternalToExternalMap.set(u,r);else{const h=t(r);if(!h)return void this._skippedIndexesFromExternal.push(c);let g=c;for(const k of this._skippedIndexesFromExternal)c>k&&g--;for(const k of e._skippedIndexesFromExternal)g>=k&&g++;this._bindToExternalToInternalMap.set(r,h),this._bindToInternalToExternalMap.set(h,r),this.add(h,g);for(let k=0;k<e._skippedIndexesFromExternal.length;k++)g<=e._skippedIndexesFromExternal[k]&&e._skippedIndexesFromExternal[k]++}};for(const i of e)n(0,i,e.getIndex(i));this.listenTo(e,"add",n),this.listenTo(e,"remove",(i,r,c)=>{const l=this._bindToExternalToInternalMap.get(r);l&&this.remove(l),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,h)=>(c<h&&u.push(h-1),c>h&&u.push(h),u),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new I("collection-add-invalid-id",this);if(this.get(n))throw new I("collection-add-item-already-exists",this)}else t[e]=n=O();return n}_remove(t){let e,n,i,r=!1;const c=this._idProperty;if(typeof t=="string"?(n=t,i=this._itemMap.get(n),r=!i,i&&(e=this._items.indexOf(i))):typeof t=="number"?(e=t,i=this._items[e],r=!i,i&&(n=i[c])):(i=t,n=i[c],e=this._items.indexOf(i),r=e==-1||!this._itemMap.get(n)),r)throw new I("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const l=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(l),this.fire("remove",i,e),[i,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function ye(o){const t=o.next();return t.done?null:t.value}class We extends bn(H()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new I("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Pn{constructor(){this._listener=new(bn())}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+hr(n),n)})}set(t,e,n={}){const i=ys(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(c,l)=>{e(l,()=>{l.preventDefault(),l.stopPropagation(),c.stop()}),c.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+hr(t),t)}stopListening(t){this._listener.stopListening(t)}destroy(){this.stopListening()}}function Yn(o){return pt(o)?new Map(o):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(o)}function Pd(o,t){let e;function n(...i){n.cancel(),e=setTimeout(()=>o(...i),t)}return n.cancel=()=>{clearTimeout(e)},n}function Ld(o,t){return!!(e=o.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(t));var e}function Rd(o,t){return!!(e=o.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const BD=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],t=new RegExp("\\p{Regional_Indicator}{2}","u").source,e="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${t}|${e}(?:‍${e})*`,"ug")}();function Sf(o,t){const e=String(o).matchAll(BD);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}class uo extends On{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new I("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(const n of this)for(const i of t)n.delegate(i).to(e);this.on("add",(n,i)=>{for(const r of t)i.delegate(r).to(e)}),this.on("remove",(n,i)=>{for(const r of t)i.stopDelegating(r,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}remove(t){return super.remove(t)}}var OD=f(6062),_t=f.n(OD),If=f(4793),PD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(If.Z,PD),If.Z.locals;class Rt extends bn(H()){constructor(t){super(),this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new On,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t,n.t=t&&t.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Ln.bind(this,this)}createCollection(t){const e=new uo(t);return this._viewCollections.add(e),e}registerChild(t){pt(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){pt(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new Ln(t)}extendTemplate(t){Ln.extend(this.template,t)}render(){if(this.isRendered)throw new I("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}class Ln extends St(){constructor(t){super(),Object.assign(this,Of(Bf(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,intoFragment:!1,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new I("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)Qa(n)?yield n:zd(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,i)=>new LD({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:i}),if:(n,i,r)=>new Mf({observable:t,emitter:e,attribute:n,valueIfTrue:i,callback:r})}}static extend(t,e){if(t._isRendered)throw new I("template-extend-render",[this,t]);zf(t,Of(Bf(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new I("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),Ya(this.text)?this._bindToObservable({schema:this.text,updater:RD(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){if(!this.attributes)return;const e=t.node,n=t.revertData;for(const i in this.attributes){const r=e.getAttribute(i),c=this.attributes[i];n&&(n.attributes[i]=r);const l=jf(c)?c[0].ns:null;if(Ya(c)){const u=jf(c)?c[0].value:c;n&&Ff(i)&&u.unshift(r),this._bindToObservable({schema:u,updater:zD(e,i,l),data:t})}else if(i=="style"&&typeof c[0]!="string")this._renderStyleAttribute(c[0],t);else{n&&r&&Ff(i)&&c.unshift(r);const u=c.map(h=>h&&h.value||h).reduce((h,g)=>h.concat(g),[]).reduce(Lf,"");pr(u)||e.setAttributeNS(l,i,u)}}}_renderStyleAttribute(t,e){const n=e.node;for(const i in t){const r=t[i];Ya(r)?this._bindToObservable({schema:[r],updater:jD(n,i),data:e}):n.style[i]=r}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,i=t.isApplying;let r=0;for(const c of this.children)if(jd(c)){if(!i){c.setParent(e);for(const l of c)n.appendChild(l.element)}}else if(Qa(c))i||(c.isRendered||c.render(),n.appendChild(c.element));else if(Mo(c))n.appendChild(c);else if(i){const l={children:[],bindings:[],attributes:{}};t.revertData.children.push(l),c._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:l})}else n.appendChild(c.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(i=>{const[r,c]=e.split("@");return i.activateDomEventListener(r,c,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const i=n.revertData;Nf(t,e,n);const r=t.filter(c=>!pr(c)).filter(c=>c.observable).map(c=>c.activateAttributeListener(t,e,n));i&&i.bindings.push(r)}_revertTemplateFromNode(t,e){for(const i of e.bindings)for(const r of i)r();if(e.text)return void(t.textContent=e.text);const n=t;for(const i in e.attributes){const r=e.attributes[i];r===null?n.removeAttribute(i):n.setAttribute(i,r)}for(let i=0;i<e.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],e.children[i])}}class Es{constructor(t){this.attribute=t.attribute,this.observable=t.observable,this.emitter=t.emitter,this.callback=t.callback}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const i=()=>Nf(t,e,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class LD extends Es{constructor(t){super(t),this.eventNameOrFunction=t.eventNameOrFunction}activateDomEventListener(t,e,n){const i=(r,c)=>{e&&!c.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(c):this.observable.fire(this.eventNameOrFunction,c))};return this.emitter.listenTo(n.node,t,i),()=>{this.emitter.stopListening(n.node,t,i)}}}class Mf extends Es{constructor(t){super(t),this.valueIfTrue=t.valueIfTrue}getValue(t){return!pr(super.getValue(t))&&(this.valueIfTrue||!0)}}function Ya(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(Ya):o instanceof Es)}function Nf(o,t,{node:e}){const n=function(r,c){return r.map(l=>l instanceof Es?l.getValue(c):l)}(o,e);let i;i=o.length==1&&o[0]instanceof Mf?n[0]:n.reduce(Lf,""),pr(i)?t.remove():t.set(i)}function RD(o){return{set(t){o.textContent=t},remove(){o.textContent=""}}}function zD(o,t,e){return{set(n){o.setAttributeNS(e,t,n)},remove(){o.removeAttributeNS(e,t)}}}function jD(o,t){return{set(e){o.style[t]=e},remove(){o.style[t]=null}}}function Bf(o){return Sd(o,t=>{if(t&&(t instanceof Es||zd(t)||Qa(t)||jd(t)))return t})}function Of(o){if(typeof o=="string"?o=function(t){return{text:[t]}}(o):o.text&&function(t){t.text=Ne(t.text)}(o),o.on&&(o.eventListeners=function(t){for(const e in t)Pf(t,e);return t}(o.on),delete o.on),!o.text){o.attributes&&function(e){for(const n in e)e[n].value&&(e[n].value=Ne(e[n].value)),Pf(e,n)}(o.attributes);const t=[];if(o.children)if(jd(o.children))t.push(o.children);else for(const e of o.children)zd(e)||Qa(e)||Mo(e)?t.push(e):t.push(new Ln(e));o.children=t}return o}function Pf(o,t){o[t]=Ne(o[t])}function Lf(o,t){return pr(t)?o:pr(o)?t:`${o} ${t}`}function Rf(o,t){for(const e in t)o[e]?o[e].push(...t[e]):o[e]=t[e]}function zf(o,t){if(t.attributes&&(o.attributes||(o.attributes={}),Rf(o.attributes,t.attributes)),t.eventListeners&&(o.eventListeners||(o.eventListeners={}),Rf(o.eventListeners,t.eventListeners)),t.text&&o.text.push(...t.text),t.children&&t.children.length){if(o.children.length!=t.children.length)throw new I("ui-template-extend-children-mismatch",o);let e=0;for(const n of t.children)zf(o.children[e++],n)}}function pr(o){return!o&&o!==0}function Qa(o){return o instanceof Rt}function zd(o){return o instanceof Ln}function jd(o){return o instanceof uo}function jf(o){return G(o[0])&&o[0].ns}function Ff(o){return o=="class"||o=="style"}class FD extends uo{constructor(t,e=[]){super(e),this.locale=t}get bodyCollectionContainer(){return this._bodyCollectionContainer}attachToDom(){this._bodyCollectionContainer=new Ln({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=Ra(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const t=document.querySelector(".ck-body-wrapper");t&&t.childElementCount==0&&t.remove()}}var Vf=f(6574),VD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Vf.Z,VD),Vf.Z.locals;const Hf=class extends Rt{constructor(){super();const o=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.set("isVisible",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon",o.if("isVisible","ck-hidden",t=>!t),"ck-reset_all-excluded",o.if("isColorInherited","ck-icon_inherit-color")],viewBox:o.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const o=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=o.getAttribute("viewBox");t&&(this.viewBox=t);for(const{name:e,value:n}of Array.from(o.attributes))Hf.presentationalAttributeNames.includes(e)&&this.element.setAttribute(e,n);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;o.childNodes.length>0;)this.element.appendChild(o.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(o=>{o.style.fill=this.fillColor})}};let wi=Hf;wi.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];class HD extends Rt{constructor(){super(),this.set({style:void 0,text:void 0,id:void 0});const t=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:t.to("style"),id:t.to("id")},children:[{text:t.to("text")}]})}}var Uf=f(4906),UD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Uf.Z,UD),Uf.Z.locals;class ce extends Rt{constructor(t,e=new HD){super(t),this._focusDelayed=null;const n=this.bindTemplate,i=O();this.set("ariaChecked",void 0),this.set("ariaLabel",void 0),this.set("ariaLabelledBy",`ck-editor__aria-label_${i}`),this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("role",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._setupLabelView(e),this.iconView=new wi,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const r={tag:"button",attributes:{class:["ck","ck-button",n.to("class"),n.if("isEnabled","ck-disabled",c=>!c),n.if("isVisible","ck-hidden",c=>!c),n.to("isOn",c=>c?"ck-on":"ck-off"),n.if("withText","ck-button_with-text"),n.if("withKeystroke","ck-button_with-keystroke")],role:n.to("role"),type:n.to("type",c=>c||"button"),tabindex:n.to("tabindex"),"aria-label":n.to("ariaLabel"),"aria-labelledby":n.to("ariaLabelledBy"),"aria-disabled":n.if("isEnabled",!0,c=>!c),"aria-checked":n.to("isOn"),"aria-pressed":n.to("isOn",c=>!!this.isToggleable&&String(!!c)),"data-cke-tooltip-text":n.to("_tooltipString"),"data-cke-tooltip-position":n.to("tooltipPosition")},children:this.children,on:{click:n.to(c=>{this.isEnabled?this.fire("execute"):c.preventDefault()})}};v.isSafari&&(this._focusDelayed||(this._focusDelayed=Pd(()=>this.focus(),0)),r.on.mousedown=n.to(()=>{this._focusDelayed()}),r.on.mouseup=n.to(()=>{this._focusDelayed.cancel()})),this.setTemplate(r)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}destroy(){this._focusDelayed&&this._focusDelayed.cancel(),super.destroy()}_setupLabelView(t){return t.bind("text","style","id").to(this,"label","labelStyle","ariaLabelledBy"),t}_createKeystrokeView(){const t=new Rt;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>Df(e))}]}),t}_getTooltipString(t,e,n){return t?typeof t=="string"?t:(n&&(n=Df(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var $f=f(5332),$D={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()($f.Z,$D),$f.Z.locals;class Za extends ce{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new Rt;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}var qf=f(6781),qD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(qf.Z,qD),qf.Z.locals,f(1103),f(841);var Wf=f(3662),WD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Wf.Z,WD),Wf.Z.locals;class Gf extends Rt{constructor(t){super(t),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${O()}`;const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:e.to("for")},children:[{text:e.to("text")}]})}}var Kf=f(2577),GD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Kf.Z,GD),Kf.Z.locals;class Ja extends Rt{constructor(t,e){super(t);const n=`ck-labeled-field-view-${O()}`,i=`ck-labeled-field-view-status-${O()}`;this.fieldView=e(this,n,i),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(c,l)=>c||l);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",c=>!c),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(t){const e=new Gf(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createStatusView(t){const e=new Rt(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",i=>!i)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}focus(t){this.fieldView.focus(t)}}class KD extends Rt{constructor(t){super(t),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new We,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",e.if("isFocused","ck-input_focused"),e.if("isEmpty","ck-input-text_empty"),e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById")},on:{input:e.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:e.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(t,e,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}reset(){this.value=this.element.value="",this._updateIsEmpty()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(t){this.element.value=t||t===0?t:""}}var Yf=f(4879),YD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Yf.Z,YD),Yf.Z.locals;class QD extends KD{constructor(t){super(t),this.set("inputMode","text");const e=this.bindTemplate;this.extendTemplate({attributes:{inputmode:e.to("inputMode")}})}}class ZD extends QD{constructor(t){super(t),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var Qf=f(8182),JD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Qf.Z,JD),Qf.Z.locals;class XD extends Rt{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",n=>`ck-dropdown__panel_${n}`),e.if("isVisible","ck-dropdown__panel-visible")],tabindex:"-1"},children:this.children,on:{selectstart:e.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(){if(this.children.length){const t=this.children.first;typeof t.focus=="function"?t.focus():q("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const t=this.children.last;typeof t.focusLast=="function"?t.focusLast():t.focus()}}}var Zf=f(5485),t2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Zf.Z,t2),Zf.Z.locals;const Fd=class extends Rt{constructor(o,t,e){super(o);const n=this.bindTemplate;this.buttonView=t,this.panelView=e,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new Pn,this.focusTracker=new We,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",n.to("class"),n.if("isEnabled","ck-disabled",i=>!i)],id:n.to("id"),"aria-describedby":n.to("ariaDescribedById")},children:[t,e]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":n.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(t,e,n)=>{if(n)if(this.panelPosition==="auto"){const i=Fd._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=i?i.name:this._panelPositions[0].name}else this.panelView.position=this.panelPosition}),this.keystrokes.listenTo(this.element);const o=(t,e)=>{this.isOpen&&(this.isOpen=!1,e())};this.keystrokes.set("arrowdown",(t,e)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,e())}),this.keystrokes.set("arrowright",(t,e)=>{this.isOpen&&e()}),this.keystrokes.set("arrowleft",o),this.keystrokes.set("esc",o)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:o,north:t,southEast:e,southWest:n,northEast:i,northWest:r,southMiddleEast:c,southMiddleWest:l,northMiddleEast:u,northMiddleWest:h}=Fd.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[e,n,c,l,o,i,r,u,h,t]:[n,e,l,c,o,r,i,h,u,t]}};let Vd=Fd;Vd.defaultPanelPositions={south:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/2,name:"s"}),southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,t)=>({top:o.bottom,left:o.left-t.width+o.width,name:"sw"}),southMiddleEast:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/4,name:"sme"}),southMiddleWest:(o,t)=>({top:o.bottom,left:o.left-3*(t.width-o.width)/4,name:"smw"}),north:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/2,name:"n"}),northEast:(o,t)=>({top:o.top-t.height,left:o.left,name:"ne"}),northWest:(o,t)=>({top:o.top-t.height,left:o.left-t.width+o.width,name:"nw"}),northMiddleEast:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/4,name:"nme"}),northMiddleWest:(o,t)=>({top:o.top-t.height,left:o.left-3*(t.width-o.width)/4,name:"nmw"})},Vd._getOptimalPosition=Nd;const Jf='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class e2 extends ce{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",e=>String(e))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new wi;return t.content=Jf,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}class No extends St(){constructor(t){if(super(),this.focusables=t.focusables,this.focusTracker=t.focusTracker,this.keystrokeHandler=t.keystrokeHandler,this.actions=t.actions,t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];typeof n=="string"&&(n=[n]);for(const i of n)t.keystrokeHandler.set(i,(r,c)=>{this[e](),c()})}this.on("forwardCycle",()=>this.focusFirst(),{priority:"low"}),this.on("backwardCycle",()=>this.focusLast(),{priority:"low"})}get first(){return this.focusables.find(Hd)||null}get last(){return this.focusables.filter(Hd).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((e,n)=>{const i=e.element===this.focusTracker.focusedElement;return i&&(t=n),i}),t)}focusFirst(){this._focus(this.first,1)}focusLast(){this._focus(this.last,-1)}focusNext(){const t=this.next;t&&this.focusables.getIndex(t)===this.current||(t===this.first?this.fire("forwardCycle"):this._focus(t,1))}focusPrevious(){const t=this.previous;t&&this.focusables.getIndex(t)===this.current||(t===this.last?this.fire("backwardCycle"):this._focus(t,-1))}_focus(t,e){t&&t.focus(e)}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(e===null)return this[t===1?"first":"last"];let i=(e+n+t)%n;do{const r=this.focusables.get(i);if(Hd(r))return r;i=(i+n+t)%n}while(i!==e);return null}}function Hd(o){return!(!("focus"in o)||!bi(o.element))}class Xf extends Rt{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class n2 extends Rt{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function tm(o){return Array.isArray(o)?{items:o,removeItems:[]}:o?Object.assign({items:[],removeItems:[]},o):{items:[],removeItems:[]}}class rt extends H(){constructor(t){super(),this._disableStack=new Set,this.editor=t,this.set("isEnabled",!0)}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",em,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",em),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function em(o){o.return=!1,o.stop()}class Ft extends H(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(t,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",e=>{if(!this.affectsData)return;const n=t.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&t.model.canEditAt(n);(t.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(e.return=!1,e.stop())},{priority:"highest"}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",nm,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",nm),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function nm(o){o.return=!1,o.stop()}class om extends Ft{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){J(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class im extends St(){constructor(t,e=[],n=[]){super(),this._plugins=new Map,this._context=t,this._availablePlugins=new Map;for(const i of e)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new I("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const i=this,r=this._context;(function T(S,M=new Set){S.forEach(P=>{u(P)&&(M.has(P)||(M.add(P),P.pluginName&&!i._availablePlugins.has(P.pluginName)&&i._availablePlugins.set(P.pluginName,P),P.requires&&T(P.requires,M)))})})(t),_(t);const c=[...function T(S,M=new Set){return S.map(P=>u(P)?P:i._availablePlugins.get(P)).reduce((P,U)=>M.has(U)?P:(M.add(U),U.requires&&(_(U.requires,U),T(U.requires,M).forEach(Y=>P.add(Y))),P.add(U)),new Set)}(t.filter(T=>!g(T,e)))];(function(T,S){for(const M of S){if(typeof M!="function")throw new I("plugincollection-replace-plugin-invalid-type",null,{pluginItem:M});const P=M.pluginName;if(!P)throw new I("plugincollection-replace-plugin-missing-name",null,{pluginItem:M});if(M.requires&&M.requires.length)throw new I("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:P});const U=i._availablePlugins.get(P);if(!U)throw new I("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:P});const Y=T.indexOf(U);if(Y===-1){if(i._contextPlugins.has(U))return;throw new I("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:P})}if(U.requires&&U.requires.length)throw new I("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:P});T.splice(Y,1,M),i._availablePlugins.set(P,M)}})(c,n);const l=c.map(T=>{let S=i._contextPlugins.get(T);return S=S||new T(r),i._add(T,S),S});return E(l,"init").then(()=>E(l,"afterInit")).then(()=>l);function u(T){return typeof T=="function"}function h(T){return u(T)&&!!T.isContextPlugin}function g(T,S){return S.some(M=>M===T||k(T)===M||k(M)===T)}function k(T){return u(T)?T.pluginName||T.name:T}function _(T,S=null){T.map(M=>u(M)?M:i._availablePlugins.get(M)||M).forEach(M=>{(function(P,U){if(!u(P))throw U?new I("plugincollection-soft-required",r,{missingPlugin:P,requiredBy:k(U)}):new I("plugincollection-plugin-not-found",r,{plugin:P})})(M,S),function(P,U){if(h(U)&&!h(P))throw new I("plugincollection-context-required",r,{plugin:k(P),requiredBy:k(U)})}(M,S),function(P,U){if(U&&g(P,e))throw new I("plugincollection-required",r,{plugin:k(P),requiredBy:k(U)})}(M,S)})}function E(T,S){return T.reduce((M,P)=>P[S]?i._contextPlugins.has(P)?M:M.then(P[S].bind(P)):M,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new I("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}class rm{constructor(t){this._contextOwner=null,this.config=new cf(t,this.constructor.defaultConfig);const e=this.constructor.builtinPlugins;this.config.define("plugins",e),this.plugins=new im(this,e);const n=this.config.get("language")||{};this.locale=new ND({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new On}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new I("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new I("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new I("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class Xa extends H(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class o2 extends Pn{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const i=e;e=(r,c)=>{this.editor.execute(i),c()}}super.set(t,e,n)}}var sm=f(4717),i2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(sm.Z,i2),sm.Z.locals;const tc=new WeakMap;let am=!1;function cm({view:o,element:t,text:e,isDirectHost:n=!0,keepOnFocus:i=!1}){const r=o.document;function c(l){tc.get(r).set(t,{text:l,isDirectHost:n,keepOnFocus:i,hostElement:n?t:null}),o.change(u=>Ud(r,u))}tc.has(r)||(tc.set(r,new Map),r.registerPostFixer(l=>Ud(r,l)),r.on("change:isComposing",()=>{o.change(l=>Ud(r,l))},{priority:"high"})),t.is("editableElement")&&t.on("change:placeholder",(l,u,h)=>{c(h)}),t.placeholder?c(t.placeholder):e&&c(e),e&&function(){am||q("enableplaceholder-deprecated-text-option"),am=!0}()}function r2(o,t){return!!t.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",t),!0)}function Ud(o,t){const e=tc.get(o),n=[];let i=!1;for(const[r,c]of e)c.isDirectHost&&(n.push(r),lm(t,r,c)&&(i=!0));for(const[r,c]of e){if(c.isDirectHost)continue;const l=s2(r);l&&(n.includes(l)||(c.hostElement=l,lm(t,r,c)&&(i=!0)))}return i}function lm(o,t,e){const{text:n,isDirectHost:i,hostElement:r}=e;let c=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),c=!0),(i||t.childCount==1)&&function(l,u){if(!l.isAttached()||Array.from(l.getChildren()).some(k=>!k.is("uiElement")))return!1;const h=l.document,g=h.selection.anchor;return!(h.isComposing&&g&&g.parent===l||!u&&h.isFocused&&(!g||g.parent===l))}(r,e.keepOnFocus)?function(l,u){return!u.hasClass("ck-placeholder")&&(l.addClass("ck-placeholder",u),!0)}(o,r)&&(c=!0):r2(o,r)&&(c=!0),c}function s2(o){if(o.childCount){const t=o.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class _i{is(){throw new Error("is() method is abstract")}}const dm=function(o){return Td(o,4)};class Ai extends St(_i){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new I("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=ht(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=dm(this);return delete t.parent,t}}Ai.prototype.is=function(o){return o==="node"||o==="view:node"};class oe extends Ai{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof oe&&(this===t||this.data===t.data)}_clone(){return new oe(this.document,this.data)}}oe.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class Qn extends _i{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.data.length)throw new I("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new I("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}Qn.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class Rn{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const i=um(e,n);if(i)return{element:e,pattern:n,match:i}}return null}matchAll(...t){const e=[];for(const n of t)for(const i of this._patterns){const r=um(n,i);r&&e.push({element:n,pattern:i,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function um(o,t){if(typeof t=="function")return t(o);const e={};return t.name&&(e.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(t.name,o.name),!e.name)||t.attributes&&(e.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return on(n)?(n.style!==void 0&&q("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&q("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),$d(n,r,c=>i.getAttribute(c))}(t.attributes,o),!e.attributes)||t.classes&&(e.classes=function(n,i){return $d(n,i.getClassNames(),()=>{})}(t.classes,o),!e.classes)||t.styles&&(e.styles=function(n,i){return $d(n,i.getStyleNames(!0),r=>i.getStyle(r))}(t.styles,o),!e.styles)?null:e}function $d(o,t,e){const n=function(c){return Array.isArray(c)?c.map(l=>on(l)?(l.key!==void 0&&l.value!==void 0||q("matcher-pattern-missing-key-or-value",l),[l.key,l.value]):[l,!0]):on(c)?Object.entries(c):[[c,!0]]}(o),i=Array.from(t),r=[];if(n.forEach(([c,l])=>{i.forEach(u=>{(function(h,g){return h===!0||h===g||h instanceof RegExp&&g.match(h)})(c,u)&&function(h,g,k){if(h===!0)return!0;const _=k(g);return h===_||h instanceof RegExp&&!!String(_).match(h)}(l,u,e)&&r.push(u)})}),n.length&&!(r.length<n.length))return r}const ec=function(o){return typeof o=="symbol"||kn(o)&&De(o)=="[object Symbol]"};var a2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c2=/^\w*$/;const l2=function(o,t){if(Me(o))return!1;var e=typeof o;return!(e!="number"&&e!="symbol"&&e!="boolean"&&o!=null&&!ec(o))||c2.test(o)||!a2.test(o)||t!=null&&o in Object(t)};function qd(o,t){if(typeof o!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,i=t?t.apply(this,n):n[0],r=e.cache;if(r.has(i))return r.get(i);var c=o.apply(this,n);return e.cache=r.set(i,c)||r,c};return e.cache=new(qd.Cache||Va),e}qd.Cache=Va;const d2=qd,u2=function(o){var t=d2(o,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t};var h2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p2=/\\(\\)?/g,g2=u2(function(o){var t=[];return o.charCodeAt(0)===46&&t.push(""),o.replace(h2,function(e,n,i,r){t.push(i?r.replace(p2,"$1"):n||e)}),t});const f2=g2,m2=function(o,t){for(var e=-1,n=o==null?0:o.length,i=Array(n);++e<n;)i[e]=t(o[e],e,o);return i};var hm=zt?zt.prototype:void 0,pm=hm?hm.toString:void 0;const k2=function o(t){if(typeof t=="string")return t;if(Me(t))return m2(t,o)+"";if(ec(t))return pm?pm.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},Wd=function(o){return o==null?"":k2(o)},Gd=function(o,t){return Me(o)?o:l2(o,t)?[o]:f2(Wd(o))},b2=function(o){var t=o==null?0:o.length;return t?o[t-1]:void 0},Kd=function(o){if(typeof o=="string"||ec(o))return o;var t=o+"";return t=="0"&&1/o==-1/0?"-0":t},gm=function(o,t){for(var e=0,n=(t=Gd(t,o)).length;o!=null&&e<n;)o=o[Kd(t[e++])];return e&&e==n?o:void 0},fm=function(o,t,e){var n=-1,i=o.length;t<0&&(t=-t>i?0:i+t),(e=e>i?i:e)<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+t];return r},w2=function(o,t){return t.length<2?o:gm(o,fm(t,0,-1))},_2=function(o,t){return t=Gd(t,o),(o=w2(o,t))==null||delete o[Kd(b2(t))]},A2=function(o,t){return o==null||_2(o,t)},nc=function(o,t,e){var n=o==null?void 0:gm(o,t);return n===void 0?e:n},Yd=function(o,t,e){(e!==void 0&&!gs(o[t],e)||e===void 0&&!(t in o))&&hd(o,t,e)},C2=function(o){return function(t,e,n){for(var i=-1,r=Object(t),c=n(t),l=c.length;l--;){var u=c[o?l:++i];if(e(r[u],u,r)===!1)break}return t}}(),v2=function(o){return kn(o)&&Ua(o)},Qd=function(o,t){if((t!=="constructor"||typeof o[t]!="function")&&t!="__proto__")return o[t]},y2=function(o){return lr(o,ur(o))},E2=function(o,t,e,n,i,r,c){var l=Qd(o,e),u=Qd(t,e),h=c.get(u);if(h)Yd(o,e,h);else{var g=r?r(l,u,e+"",o,t,c):void 0,k=g===void 0;if(k){var _=Me(u),E=!_&&bs(u),T=!_&&!E&&bd(u);g=u,_||E||T?Me(l)?g=l:v2(l)?g=Fg(l):E?(k=!1,g=jg(u,!0)):T?(k=!1,g=Xg(u,!0)):g=[]:on(u)||gd(u)?(g=l,gd(l)?g=y2(l):G(l)&&!pi(l)||(g=ef(u))):k=!1}k&&(c.set(u,g),i(g,u,n,r,c),c.delete(u)),Yd(o,e,g)}},x2=function o(t,e,n,i,r){t!==e&&C2(e,function(c,l){if(r||(r=new ks),G(c))E2(t,e,l,n,o,i,r);else{var u=i?i(Qd(t,l),c,l+"",t,e,r):void 0;u===void 0&&(u=c),Yd(t,l,u)}},ur)},Ci=function(o){return o},D2=function(o,t,e){switch(e.length){case 0:return o.call(t);case 1:return o.call(t,e[0]);case 2:return o.call(t,e[0],e[1]);case 3:return o.call(t,e[0],e[1],e[2])}return o.apply(t,e)};var mm=Math.max;const T2=function(o,t,e){return t=mm(t===void 0?o.length-1:t,0),function(){for(var n=arguments,i=-1,r=mm(n.length-t,0),c=Array(r);++i<r;)c[i]=n[t+i];i=-1;for(var l=Array(t+1);++i<t;)l[i]=n[i];return l[t]=e(c),D2(o,this,l)}},S2=function(o){return function(){return o}},I2=Ha?function(o,t){return Ha(o,"toString",{configurable:!0,enumerable:!1,value:S2(t),writable:!0})}:Ci;var M2=Date.now;const N2=function(o){var t=0,e=0;return function(){var n=M2(),i=16-(n-e);if(e=n,i>0){if(++t>=800)return arguments[0]}else t=0;return o.apply(void 0,arguments)}}(I2),B2=function(o,t){return N2(T2(o,t,Ci),o+"")},O2=function(o,t,e){if(!G(e))return!1;var n=typeof t;return!!(n=="number"?Ua(e)&&fd(t,e.length):n=="string"&&t in e)&&gs(e[t],o)},km=function(o){return B2(function(t,e){var n=-1,i=e.length,r=i>1?e[i-1]:void 0,c=i>2?e[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,c&&O2(e[0],e[1],c)&&(r=i<3?void 0:r,i=1),t=Object(t);++n<i;){var l=e[n];l&&o(t,l,n,r)}return t})},bm=km(function(o,t,e){x2(o,t,e)}),P2=function(o,t,e,n){if(!G(o))return o;for(var i=-1,r=(t=Gd(t,o)).length,c=r-1,l=o;l!=null&&++i<r;){var u=Kd(t[i]),h=e;if(u==="__proto__"||u==="constructor"||u==="prototype")return o;if(i!=c){var g=l[u];(h=n?n(g,u,l):void 0)===void 0&&(h=G(g)?g:fd(t[i+1])?[]:{})}pd(l,u,h),l=l[u]}return o},L2=function(o,t,e){return o==null?o:P2(o,t,e)};class R2{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){const t=Object.entries(this._styles);return!Array.from(t).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=Array.from(function(n){let i=null,r=0,c=0,l=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let h=0;h<n.length;h++){const g=n.charAt(h);if(i===null)switch(g){case":":l||(l=n.substr(r,h-r),c=h+1);break;case'"':case"'":i=g;break;case";":{const k=n.substr(c,h-c);l&&u.set(l.trim(),k.trim()),l=null,r=h+1;break}}else g===i&&(i=null)}return u}(t).entries());for(const[n,i]of e)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(G(t))for(const[n,i]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=Zd(t);A2(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!G(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([e])=>e)}clear(){this._styles={}}_getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),i=nc(this._styles,n);i&&!Array.from(Object.keys(i)).length&&this.remove(n)}}class z2{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(G(e))Jd(n,Zd(t),e);else if(this._normalizers.has(t)){const i=this._normalizers.get(t),{path:r,value:c}=i(e);Jd(n,r,c)}else Jd(n,t,e)}getNormalized(t,e){if(!t)return bm({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return nc(e,n);const i=n(t,e);if(i)return i}return nc(e,Zd(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(i=>{const r=this.getNormalized(i,t);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...e,...Object.keys(t)]);return Array.from(n.values())}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function Zd(o){return o.replace("-",".")}function Jd(o,t,e){let n=e;G(e)&&(n=bm({},nc(o,t),e)),L2(o,t,n)}class rn extends Ai{constructor(t,e,n,i){if(super(t),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=e,this._attrs=function(r){const c=Yn(r);for(const[l,u]of c)u===null?c.delete(l):typeof u!="string"&&c.set(l,String(u));return c}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");wm(this._classes,r),this._attrs.delete("class")}this._styles=new R2(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof rn))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new Rn(...t);let n=this.parent;for(;n&&!n.is("documentFragment");){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const i of this.getChildren())e.push(i._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,c){return typeof c=="string"?[new oe(r,c)]:(pt(c)||(c=[c]),Array.from(c).map(l=>typeof l=="string"?new oe(r,l):l instanceof Qn?new oe(r,l.data):l))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){const n=String(e);this._fireChange("attributes",this),t=="class"?wm(this._classes,n):t=="style"?this._styles.setTo(n):this._attrs.set(t,n)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of Ne(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of Ne(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),typeof t!="string"?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of Ne(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function wm(o,t){const e=t.split(/\s+/);o.clear(),e.forEach(n=>o.add(n))}rn.prototype.is=function(o,t){return t?t===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class xs extends rn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=_m}}function _m(){const o=[...this.getChildren()],t=o[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of o)if(!e.is("uiElement"))return null;return this.childCount}xs.prototype.is=function(o,t){return t?t===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class oc extends H(xs){constructor(t,e,n,i){super(t,e,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",r=>r&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}oc.prototype.is=function(o,t){return t?t===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const Am=Symbol("rootName");class Cm extends oc{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty(Am)}set rootName(t){this._setCustomProperty(Am,t)}set _name(t){this.name=t}}Cm.prototype.is=function(o,t){return t?t===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class vi{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new I("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new I("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this._position=gt._createAt(t.startPosition):this._position=gt._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,n;do n=this.position,e=this.next();while(!e.done&&t(e.value));e.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof oe){if(t.isAtEnd)return this._position=gt._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof rn){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(t))return{done:!0,value:void 0};t.offset++}else t=new gt(i,0);return this._position=t,this._formatReturnValue("elementStart",i,e,t,1)}if(i instanceof oe){if(this.singleCharacters)return t=new gt(i,0),this._position=t,this._next();let r,c=i.data.length;return i==this._boundaryEndParent?(c=this.boundaries.end.offset,r=new Qn(i,0,c),t=gt._createAfter(r)):(r=new Qn(i,0,i.data.length),t.offset++),this._position=t,this._formatReturnValue("text",r,e,t,c)}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const c=new Qn(n,t.offset,r);return t.offset+=r,this._position=t,this._formatReturnValue("text",c,e,t,r)}return t=gt._createAfter(n),this._position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof oe){if(t.isAtStart)return this._position=gt._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof rn)return this.shallow?(t.offset--,this._position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new gt(i,i.childCount),this._position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof oe){if(this.singleCharacters)return t=new gt(i,i.data.length),this._position=t,this._previous();let r,c=i.data.length;if(i==this._boundaryStartParent){const l=this.boundaries.start.offset;r=new Qn(i,l,i.data.length-l),c=r.data.length,t=gt._createBefore(r)}else r=new Qn(i,0,i.data.length),t.offset--;return this._position=t,this._formatReturnValue("text",r,e,t,c)}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const l=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-l}t.offset-=r;const c=new Qn(n,t.offset,r);return this._position=t,this._formatReturnValue("text",c,e,t,r)}return t=gt._createBefore(n),this._position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,r){return e instanceof Qn&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=gt._createAfter(e.textNode):(i=gt._createAfter(e.textNode),this._position=i)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=gt._createBefore(e.textNode):(i=gt._createBefore(e.textNode),this._position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:r}}}}class gt extends _i{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof oc);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=gt._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new vi(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=ht(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new vi(t)}clone(){return new gt(this.parent,this.offset)}static _createAt(t,e){if(t instanceof gt)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new I("view-createpositionat-offset-required",n)}return new gt(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new gt(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new I("view-position-after-root",t,{root:t});return new gt(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new gt(t.textNode,t.offsetInText);if(!t.parent)throw new I("view-position-before-root",t,{root:t});return new gt(t.parent,t.index)}}gt.prototype.is=function(o){return o==="position"||o==="view:position"};class Bt extends _i{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new vi({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(ic,{direction:"backward"}),e=this.end.getLastMatchingPosition(ic);return t.parent.is("$text")&&t.isAtStart&&(t=gt._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=gt._createAfter(e.parent)),new Bt(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(ic);if(t.isAfter(this.end)||t.isEqual(this.end))return new Bt(t,t);let e=this.end.getLastMatchingPosition(ic,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("$text")&&(t=new gt(n,0)),i&&i.is("$text")&&(e=new gt(i,i.data.length)),new Bt(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Bt(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Bt(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Bt(e,n)}return null}getWalker(t={}){return t.boundaries=this,new vi(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new Bt(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new vi(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new vi(t);yield e.position;for(const n of e)yield n.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new gt(t,e),new gt(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(gt._createBefore(t),e)}}function ic(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}Bt.prototype.is=function(o){return o==="range"||o==="view:range"};class zn extends St(_i){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=et(this.getRanges());if(e!=et(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,n,i]=t;if(typeof n=="object"&&(i=n,n=void 0),e===null)this._setRanges([]),this._setFakeOptions(i);else if(e instanceof zn||e instanceof Xd)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof Bt)this._setRanges([e],i&&i.backward),this._setFakeOptions(i);else if(e instanceof gt)this._setRanges([new Bt(e)]),this._setFakeOptions(i);else if(e instanceof Ai){const r=!!i&&!!i.backward;let c;if(n===void 0)throw new I("view-selection-setto-required-second-parameter",this);c=n=="in"?Bt._createIn(e):n=="on"?Bt._createOn(e):new Bt(gt._createAt(e,n)),this._setRanges([c],r),this._setFakeOptions(i)}else{if(!pt(e))throw new I("view-selection-setto-not-selectable",this);this._setRanges(e,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new I("view-selection-setfocus-no-ranges",this);const n=gt._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new Bt(n,i),!0):this._addRange(new Bt(i,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Bt))throw new I("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new I("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new Bt(t.start,t.end))}}zn.prototype.is=function(o){return o==="selection"||o==="view:selection"};class Xd extends St(_i){constructor(...t){super(),this._selection=new zn,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}Xd.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class gr extends j{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const tu=Symbol("bubbling contexts");function eu(o){return class extends o{fire(t,...e){try{const n=t instanceof j?t:new j(this,t),i=nu(this);if(!i.size)return;if(Ds(n,"capturing",this),fr(i,"$capture",n,...e))return n.return;const r=n.startRange||this.selection.getFirstRange(),c=r?r.getContainedElement():null,l=!!c&&!!vm(i,c);let u=c||function(h){if(!h)return null;const g=h.start.parent,k=h.end.parent,_=g.getPath(),E=k.getPath();return _.length>E.length?g:k}(r);if(Ds(n,"atTarget",u),!l){if(fr(i,"$text",n,...e))return n.return;Ds(n,"bubbling",u)}for(;u;){if(u.is("rootElement")){if(fr(i,"$root",n,...e))return n.return}else if(u.is("element")&&fr(i,u.name,n,...e))return n.return;if(fr(i,u,n,...e))return n.return;u=u.parent,Ds(n,"bubbling",u)}return Ds(n,"bubbling",this),fr(i,"$document",n,...e),n.return}catch(n){I.rethrowUnexpectedError(n,this)}}_addEventListener(t,e,n){const i=Ne(n.context||"$document"),r=nu(this);for(const c of i){let l=r.get(c);l||(l=new(St()),r.set(c,l)),this.listenTo(l,t,e,n)}}_removeEventListener(t,e){const n=nu(this);for(const i of n.values())this.stopListening(i,t,e)}}}{const o=eu(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{eu[t]=o.prototype[t]})}function Ds(o,t,e){o instanceof gr&&(o._eventPhase=t,o._currentTarget=e)}function fr(o,t,e,...n){const i=typeof t=="string"?o.get(t):vm(o,t);return!!i&&(i.fire(e,...n),e.stop.called)}function vm(o,t){for(const[e,n]of o)if(typeof e=="function"&&e(t))return n;return null}function nu(o){return o[tu]||(o[tu]=new Map),o[tu]}class rc extends eu(H()){constructor(t){super(),this._postFixers=new Set,this.selection=new Xd,this.roots=new On({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}class yi extends rn{constructor(t,e,n,i){super(t,e,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=j2}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new I("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function j2(){if(ou(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(ou(o)>1)return null;o=o.parent}return!o||ou(o)>1?null:this.childCount}function ou(o){return Array.from(o.getChildren()).filter(t=>!t.is("uiElement")).length}yi.DEFAULT_PRIORITY=10,yi.prototype.is=function(o,t){return t?t===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class iu extends rn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=F2}_insertChild(t,e){if(e&&(e instanceof Ai||Array.from(e).length>0))throw new I("view-emptyelement-cannot-add",[this,e]);return 0}}function F2(){return null}iu.prototype.is=function(o,t){return t?t===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class sc extends rn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=H2}_insertChild(t,e){if(e&&(e instanceof Ai||Array.from(e).length>0))throw new I("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function V2(o){o.document.on("arrowKey",(t,e)=>function(n,i,r){if(i.keyCode==Wt.arrowright){const c=i.domTarget.ownerDocument.defaultView.getSelection(),l=c.rangeCount==1&&c.getRangeAt(0).collapsed;if(l||i.shiftKey){const u=c.focusNode,h=c.focusOffset,g=r.domPositionToView(u,h);if(g===null)return;let k=!1;const _=g.getLastMatchingPosition(E=>(E.item.is("uiElement")&&(k=!0),!(!E.item.is("uiElement")&&!E.item.is("attributeElement"))));if(k){const E=r.viewPositionToDom(_);l?c.collapse(E.parent,E.offset):c.extend(E.parent,E.offset)}}}}(0,e,o.domConverter),{priority:"low"})}function H2(){return null}sc.prototype.is=function(o,t){return t?t===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ru extends rn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=U2}_insertChild(t,e){if(e&&(e instanceof Ai||Array.from(e).length>0))throw new I("view-rawelement-cannot-add",[this,e]);return 0}render(t,e){}}function U2(){return null}ru.prototype.is=function(o,t){return t?t===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ei extends St(_i){constructor(t,e){super(),this._children=[],this._customProperties=new Map,this.document=t,e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,c){return typeof c=="string"?[new oe(r,c)]:(pt(c)||(c=[c]),Array.from(c).map(l=>typeof l=="string"?new oe(r,l):l instanceof Qn?new oe(r,l.data):l))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}Ei.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class ym{constructor(t){this._cloneGroups=new Map,this._slotFactory=null,this.document=t}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new Ei(this.document,t)}createText(t){return new oe(this.document,t)}createAttributeElement(t,e,n={}){const i=new yi(this.document,t,e);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(t,e,n={},i={}){let r=null;on(n)?i=n:r=n;const c=new xs(this.document,t,e,r);return i.renderUnsafeAttributes&&c._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),c}createEditableElement(t,e,n={}){const i=new oc(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(t,e,n={}){const i=new iu(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(t,e,n){const i=new sc(this.document,t,e);return n&&(i.render=n),i}createRawElement(t,e,n,i={}){const r=new ru(this.document,t,e);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){on(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof gt?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new I("view-writer-break-non-container-element",this.document);if(!e.parent)throw new I("view-writer-break-root",this.document);if(t.isAtStart)return gt._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(gt._createAfter(e),n);const i=new Bt(t,gt._createAt(e,"end")),r=new gt(n,0);this.move(i,r)}return gt._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const c=n.parent,l=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new gt(c,l))}const i=n.getChild(e-1),r=n.getChild(e);if(!i||!r)return t;if(i.is("$text")&&r.is("$text"))return xm(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const c=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new gt(i,c))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new I("view-writer-merge-containers-invalid-position",this.document);const i=e.getChild(e.childCount-1),r=i instanceof oe?gt._createAt(i,"end"):gt._createAt(e,"end");return this.move(Bt._createIn(n),gt._createAt(e,"end")),this.remove(Bt._createOn(n)),r}insert(t,e){Dm(e=pt(e)?[...e]:[e],this.document);const n=e.reduce((c,l)=>{const u=c[c.length-1],h=!l.is("uiElement");return u&&u.breakAttributes==h?u.nodes.push(l):c.push({breakAttributes:h,nodes:[l]}),c},[]);let i=null,r=t;for(const{nodes:c,breakAttributes:l}of n){const u=this._insertNodes(r,c,l);i||(i=u.start),r=u.end}return i?new Bt(i,r):new Bt(t)}remove(t){const e=t instanceof Bt?t:Bt._createOn(t);if(Ts(e,this.document),e.isCollapsed)return new Ei(this.document);const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,c=i.offset-n.offset,l=r._removeChildren(n.offset,c);for(const h of l)this._removeFromClonedElementsGroup(h);const u=this.mergeAttributes(n);return e.start=u,e.end=u.clone(),new Ei(this.document,l)}clear(t,e){Ts(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let c;if(r.is("element")&&e.isSimilar(r))c=Bt._createOn(r);else if(!i.nextPosition.isAfter(t.start)&&r.is("$textProxy")){const l=r.getAncestors().find(u=>u.is("element")&&e.isSimilar(u));l&&(c=Bt._createIn(l))}c&&(c.end.isAfter(t.end)&&(c.end=t.end),c.start.isBefore(t.start)&&(c.start=t.start),this.remove(c))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,r=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof yi))throw new I("view-writer-wrap-invalid-attribute",this.document);if(Ts(t,this.document),t.isCollapsed){let i=t.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(c=>!c.is("uiElement")))&&(i=i.getLastMatchingPosition(c=>c.item.is("uiElement"))),i=this._wrapPosition(i,e);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(i),new Bt(i)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof yi))throw new I("view-writer-unwrap-invalid-attribute",this.document);if(Ts(t,this.document),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,c=this._unwrapChildren(r,n.offset,i.offset,e),l=this.mergeAttributes(c.start);l.isEqual(c.start)||c.end.offset--;const u=this.mergeAttributes(c.end);return new Bt(l,u)}rename(t,e){const n=new xs(this.document,t,e.getAttributes());return this.insert(gt._createAfter(e),n),this.move(Bt._createIn(e),gt._createAt(n,0)),this.remove(Bt._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return gt._createAt(t,e)}createPositionAfter(t){return gt._createAfter(t)}createPositionBefore(t){return gt._createBefore(t)}createRange(t,e){return new Bt(t,e)}createRangeOn(t){return Bt._createOn(t)}createRangeIn(t){return Bt._createIn(t)}createSelection(...t){return new zn(...t)}createSlot(t="children"){if(!this._slotFactory)throw new I("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let i,r;if(i=n?su(t):t.parent.is("$text")?t.parent.parent:t.parent,!i)throw new I("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?au(t):t;const c=i._insertChild(r.offset,e);for(const g of e)this._addToClonedElementsGroup(g);const l=r.getShiftedBy(c),u=this.mergeAttributes(r);u.isEqual(r)||l.offset--;const h=this.mergeAttributes(l);return new Bt(u,h)}_wrapChildren(t,e,n,i){let r=e;const c=[];for(;r<n;){const u=t.getChild(r),h=u.is("$text"),g=u.is("attributeElement");if(g&&this._wrapAttributeElement(i,u))c.push(new gt(t,r));else if(h||!g||$2(i,u)){const k=i._clone();u._remove(),k._appendChild(u),t._insertChild(r,k),this._addToClonedElementsGroup(k),c.push(new gt(t,r))}else this._wrapChildren(u,0,u.childCount,i);r++}let l=0;for(const u of c)u.offset-=l,u.offset!=e&&(this.mergeAttributes(u).isEqual(u)||(l++,n--));return Bt._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let r=e;const c=[];for(;r<n;){const u=t.getChild(r);if(u.is("attributeElement"))if(u.isSimilar(i)){const h=u.getChildren(),g=u.childCount;u._remove(),t._insertChild(r,h),this._removeFromClonedElementsGroup(u),c.push(new gt(t,r),new gt(t,r+g)),r+=g,n+=g-1}else this._unwrapAttributeElement(i,u)?(c.push(new gt(t,r),new gt(t,r+1)),r++):(this._unwrapChildren(u,0,u.childCount,i),r++);else r++}let l=0;for(const u of c)u.offset-=l,!(u.offset==e||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(l++,n--));return Bt._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,c=this._wrapChildren(r,n.offset,i.offset,e),l=this.mergeAttributes(c.start);l.isEqual(c.start)||c.end.offset--;const u=this.mergeAttributes(c.end);return new Bt(l,u)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Em(t.clone());t.parent.is("$text")&&(t=au(t));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const i=new Bt(t,t.getShiftedBy(1));this.wrap(i,e);const r=new gt(n.parent,n.index);n._remove();const c=r.nodeBefore,l=r.nodeAfter;return c instanceof oe&&l instanceof oe?xm(c,l):Em(r)}_wrapAttributeElement(t,e){if(!Tm(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Tm(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(Ts(t,this.document),t.isCollapsed){const u=this._breakAttributes(t.start,e);return new Bt(u,u)}const r=this._breakAttributes(i,e),c=r.parent.childCount,l=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-c,new Bt(l,r)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new I("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new I("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new I("view-writer-cannot-break-raw-element",this.document);if(!e&&i.is("$text")&&cu(i.parent)||cu(i))return t.clone();if(i.is("$text"))return this._breakAttributes(au(t),e);if(n==i.childCount){const r=new gt(i.parent,i.index+1);return this._breakAttributes(r,e)}if(n===0){const r=new gt(i.parent,i.index);return this._breakAttributes(r,e)}{const r=i.index+1,c=i._clone();i.parent._insertChild(r,c),this._addToClonedElementsGroup(c);const l=i.childCount-n,u=i._removeChildren(n,l);c._appendChild(u);const h=new gt(i.parent,r);return this._breakAttributes(h,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const i of t.getChildren())this._addToClonedElementsGroup(i);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const i of t.getChildren())this._removeFromClonedElementsGroup(i);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function su(o){let t=o.parent;for(;!cu(t);){if(!t)return;t=t.parent}return t}function $2(o,t){return o.priority<t.priority||!(o.priority>t.priority)&&o.getIdentity()<t.getIdentity()}function Em(o){const t=o.nodeBefore;if(t&&t.is("$text"))return new gt(t,t.data.length);const e=o.nodeAfter;return e&&e.is("$text")?new gt(e,0):o}function au(o){if(o.offset==o.parent.data.length)return new gt(o.parent.parent,o.parent.index+1);if(o.offset===0)return new gt(o.parent.parent,o.parent.index);const t=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new oe(o.root.document,t)),new gt(o.parent.parent,o.parent.index+1)}function xm(o,t){const e=o.data.length;return o._data+=t.data,t._remove(),new gt(o,e)}const q2=[oe,yi,xs,iu,ru,sc];function Dm(o,t){for(const e of o){if(!q2.some(n=>e instanceof n))throw new I("view-writer-insert-invalid-node-type",t);e.is("$text")||Dm(e.getChildren(),t)}}function cu(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function Ts(o,t){const e=su(o.start),n=su(o.end);if(!e||!n||e!==n)throw new I("view-writer-invalid-range-container",t)}function Tm(o,t){return o.id===null&&t.id===null}const Sm=o=>o.createTextNode(" "),Im=o=>{const t=o.createElement("span");return t.dataset.ckeFiller="true",t.innerText=" ",t},Mm=o=>{const t=o.createElement("br");return t.dataset.ckeFiller="true",t},jn=7,Ss="⁠".repeat(jn);function sn(o){return typeof o=="string"?o.substr(0,jn)===Ss:ve(o)&&o.data.substr(0,jn)===Ss}function Is(o){return o.data.length==jn&&sn(o)}function Nm(o){const t=typeof o=="string"?o:o.data;return sn(o)?t.slice(jn):t}function W2(o,t){if(t.keyCode==Wt.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,i=e.getRangeAt(0).startOffset;sn(n)&&i<=jn&&e.collapse(n,0)}}}var Bm=f(9315),G2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Bm.Z,G2),Bm.Z.locals;class K2 extends H(){constructor(t,e){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=t,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),v.isBlink&&!v.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new I("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!v.isAndroid)return;let t=null;const e=!(v.isBlink&&!v.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=gt._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),i=n.parent.ownerDocument;sn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Om(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),r=this._diffNodeLists(n,i),c=this._findUpdateActions(r,n,i,Y2);if(c.indexOf("update")!==-1){const l={equal:0,insert:0,delete:0};for(const u of c)if(u==="update"){const h=l.equal+l.insert,g=l.equal+l.delete,k=t.getChild(h);!k||k.is("uiElement")||k.is("rawElement")||this._updateElementMappings(k,n[g]),Af(i[h]),l.equal++}else l[u]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?gt._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&ve(e.parent)&&sn(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!sn(t))throw new I("view-renderer-filler-was-lost",this);Is(t)?t.remove():t.data=t.data.substr(jn),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(c){if(c.getAttribute("contenteditable")=="false")return!1;const l=c.findAncestor(u=>u.hasAttribute("contenteditable"));return!l||l.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;const i=t.nodeBefore,r=t.nodeAfter;return!(i instanceof oe||r instanceof oe)&&(!v.isAndroid||!i&&!r)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t);let i=this.domConverter.viewToDom(t).data;const r=e.inlineFillerPosition;r&&r.parent==t.parent&&r.offset==t.index&&(i=Ss+i),Pm(n,i)}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(r=>r.name),i=t.getAttributeKeys();for(const r of i)this.domConverter.setDomElementAttribute(e,r,t.getAttribute(r),t);for(const r of n)t.hasAttribute(r)||this.domConverter.removeDomElementAttribute(e,r)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;if(v.isAndroid){let k=null;for(const _ of Array.from(n.childNodes)){if(k&&ve(k)&&ve(_)){n.normalize();break}k=_}}const i=e.inlineFillerPosition,r=n.childNodes,c=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));i&&i.parent===t&&Om(n.ownerDocument,c,i.offset);const l=this._diffNodeLists(r,c),u=this._findUpdateActions(l,r,c,Q2);let h=0;const g=new Set;for(const k of u)k==="delete"?(g.add(r[h]),Af(r[h])):k!=="equal"&&k!=="update"||h++;h=0;for(const k of u)k==="insert"?(kf(n,h,c[h]),h++):k==="update"?(Pm(r[h],c[h].data),h++):k==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(c[h])),h++);for(const k of g)k.parentNode||this.domConverter.unbindDomElement(k)}_diffNodeLists(t,e){return t=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(t,this._fakeSelectionContainer),L(t,e,Z2.bind(null,this.domConverter))}_findUpdateActions(t,e,n,i){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let r=[],c=[],l=[];const u={equal:0,insert:0,delete:0};for(const h of t)h==="insert"?l.push(n[u.equal+u.insert]):h==="delete"?c.push(e[u.equal+u.delete]):(r=r.concat(L(c,l,i).map(g=>g==="equal"?"update":g)),r.push("equal"),c=[],l=[]),u[h]++;return r.concat(L(c,l,i).map(h=>h==="equal"?"update":h))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(v.isBlink&&!v.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&v.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(c){const l=c.createElement("div");return l.className="ck-fake-selection-container",Object.assign(l.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),l.textContent=" ",l}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=e.getSelection(),r=e.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);e.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),v.isGecko&&function(r,c){const l=r.parent;if(l.nodeType!=Node.ELEMENT_NODE||r.offset!=l.childNodes.length-1)return;const u=l.childNodes[r.offset];u&&u.tagName=="BR"&&c.addRange(c.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments){const e=t.getSelection();if(e.rangeCount){const n=t.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&e.removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function Om(o,t,e){const n=t instanceof Array?t:t.childNodes,i=n[e];if(ve(i))return i.data=Ss+i.data,i;{const r=o.createTextNode(Ss);return Array.isArray(t)?n.splice(e,0,r):kf(t,e,r),r}}function Y2(o,t){return Mo(o)&&Mo(t)&&!ve(o)&&!ve(t)&&!vs(o)&&!vs(t)&&o.tagName.toLowerCase()===t.tagName.toLowerCase()}function Q2(o,t){return Mo(o)&&Mo(t)&&ve(o)&&ve(t)}function Z2(o,t,e){return t===e||(ve(t)&&ve(e)?t.data===e.data:!(!o.isBlockFiller(t)||!o.isBlockFiller(e)))}function Pm(o,t){const e=o.data;if(e==t)return;const n=D(e,t);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const J2=Mm(Et.document),X2=Sm(Et.document),tT=Im(Et.document),ac="data-ck-unsafe-attribute-",Lm="data-ck-unsafe-element";class cc{constructor(t,{blockFillerMode:e,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Rn,this._inlineObjectElementMatcher=new Rn,this.document=t,this.renderingMode=n,this.blockFillerMode=e||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Et.document:Et.document.implementation.createHTMLDocument("")}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new zn(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of Array.from(t.children))this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const c=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),l=[];let u;for(;u=c.nextNode();)l.push(u);for(const h of l){for(const k of h.getAttributeNames())this.setDomElementAttribute(h,k,h.getAttribute(k));const g=h.tagName.toLowerCase();this._shouldRenameElement(g)&&(jm(g),h.replaceWith(this._createReplacementDomElement(g,h)))}for(;t.firstChild;)t.firstChild.remove();t.append(i)}viewToDom(t,e={}){if(t.is("$text")){const n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let n;if(t.is("documentFragment"))n=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(n,t);else{if(t.is("uiElement"))return n=t.name==="$comment"?this._domDocument.createComment(t.getCustomProperty("$rawContent")):t.render(this._domDocument,this),e.bind&&this.bindElements(n,t),n;this._shouldRenameElement(t.name)?(jm(t.name),n=this._createReplacementDomElement(t.name)):n=t.hasAttribute("xmlns")?this._domDocument.createElementNS(t.getAttribute("xmlns"),t.name):this._domDocument.createElement(t.name),t.is("rawElement")&&t.render(n,this),e.bind&&this.bindElements(n,t);for(const i of t.getAttributeKeys())this.setDomElementAttribute(n,i,t.getAttribute(i),t)}if(e.withChildren!==!1)for(const i of this.viewChildrenToDom(t,e))n.appendChild(i);return n}}setDomElementAttribute(t,e,n,i){const r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(e);r||q("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),function(c){try{Et.document.createAttribute(c)}catch{return!1}return!0}(e)?(t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(ac+e)&&r&&t.removeAttribute(ac+e),t.setAttribute(r?e:ac+e,n)):q("domconverter-invalid-attribute-detected",{domElement:t,key:e,value:n})}removeDomElementAttribute(t,e){e!=Lm&&(t.removeAttribute(e),t.removeAttribute(ac+e))}*viewChildrenToDom(t,e={}){const n=t.getFillerOffset&&t.getFillerOffset();let i=0;for(const r of t.getChildren()){n===i&&(yield this._getBlockFiller());const c=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!ye(r.getAttributes());c&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,e):(c&&q("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,e)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=this._domDocument.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return sn(n)&&(i+=jn),{parent:n,offset:i}}{let n,i,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{const c=t.nodeBefore;if(i=c.is("$text")?this.findCorrespondingDomText(c):this.mapViewToDom(c),!i)return null;n=i.parentNode,r=i.nextSibling}return ve(r)&&sn(r)?{parent:r,offset:jn}:{parent:n,offset:i?Ka(i)+1:0}}}domToView(t,e={}){const n=[],i=this._domToView(t,e,n),r=i.next().value;return r?(i.next(),this._processDomInlineNodes(null,n,e),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(t,e={},n=[]){for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i],c=this._domToView(r,e,n),l=c.next().value;l!==null&&(this._isBlockViewElement(l)&&this._processDomInlineNodes(t,n,e),yield l,c.next())}this._processDomInlineNodes(t,n,e)}domSelectionToView(t){if(function(i){if(!v.isGecko||!i.rangeCount)return!1;const r=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(r)}catch{return!0}return!1}(t))return new zn([]);if(t.rangeCount===1){let i=t.getRangeAt(0).startContainer;ve(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const e=this.isDomSelectionBackward(t),n=[];for(let i=0;i<t.rangeCount;i++){const r=t.getRangeAt(i),c=this.domRangeToView(r);c&&n.push(c)}return new zn(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Bt(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,Ka(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return gt._createBefore(n);if(ve(t)){if(Is(t))return this.domPositionToView(t.parentNode,Ka(t));const i=this.findCorrespondingViewText(t);let r=e;return i?(sn(t)&&(r-=jn,r=r<0?0:r),new gt(i,r)):null}if(e===0){const i=this.mapDomToView(t);if(i)return new gt(i,0)}else{const i=t.childNodes[e-1];if(ve(i)&&Is(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,Ka(i));const r=ve(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new gt(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Is(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof oe?r:null}}else{const i=this.mapDomToView(t.parentNode);if(i){const r=i.getChild(0);return r instanceof oe?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:i}=Et.window,r=[];Rm(e,c=>{const{scrollLeft:l,scrollTop:u}=c;r.push([l,u])}),e.focus(),Rm(e,c=>{const[l,u]=r.shift();c.scrollLeft=l,c.scrollTop=u}),Et.window.scrollTo(n,i)}}_clearDomSelection(){const t=this.mapViewToDom(this.document.selection.editableElement);if(!t)return;const e=t.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(e);n&&n.rangeCount>0&&e.removeAllRanges()}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(J2):!(t.tagName!=="BR"||!zm(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(tT)||function(e,n){return e.isEqualNode(X2)&&zm(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=function(n){const i=[];let r=n;for(;r&&r.nodeType!=Node.DOCUMENT_NODE;)i.unshift(r),r=r.parentNode;return i}(t);for(e.pop();e.length;){const n=e.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}registerInlineObjectMatcher(t){this._inlineObjectElementMatcher.add(t)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Sm(this._domDocument);case"markedNbsp":return Im(this._domDocument);case"br":return Mm(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(ve(t)&&sn(t)&&e<jn||this.isElement(t)&&sn(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(t,e,n){if(this.isBlockFiller(t))return null;const i=this.getHostViewElement(t);if(i)return i;if(vs(t)&&e.skipComments)return null;if(ve(t)){if(Is(t))return null;{const r=t.data;if(r==="")return null;const c=new oe(this.document,r);return n.push(c),c}}{let r=this.mapDomToView(t);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(t))r=new Ei(this.document),e.bind&&this.bindDocumentFragments(t,r);else{r=this._createViewElement(t,e),e.bind&&this.bindElements(t,r);const l=t.attributes;if(l)for(let u=l.length,h=0;h<u;h++)r._setAttribute(l[h].name,l[h].value);if(this._isViewElementWithRawContent(r,e))return r._setCustomProperty("$rawContent",t.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(vs(t))return r._setCustomProperty("$rawContent",t.data),r}yield r;const c=[];if(e.withChildren!==!1)for(const l of this.domChildrenToView(t,e,c))r._appendChild(l);if(this._isInlineObjectElement(r))n.push(r);else for(const l of c)n.push(l)}}_processDomInlineNodes(t,e,n){if(!e.length||t&&!this.isDocumentFragment(t)&&!this._isBlockDomElement(t))return;let i=!1;for(let r=0;r<e.length;r++){const c=e[r];if(!c.is("$text")){i=!1;continue}let l,u=!1;if(eT(c,this.preElements))l=Nm(c.data);else{l=c.data.replace(/[ \n\t\r]{1,}/g," "),u=/[^\S\u00A0]/.test(l.charAt(l.length-1));const h=r>0?e[r-1]:null,g=r+1<e.length?e[r+1]:null,k=!h||h.is("element")&&h.name=="br"||i,_=!g&&!sn(c.data);n.withChildren!==!1&&(k&&(l=l.replace(/^ /,"")),_&&(l=l.replace(/ $/,""))),l=Nm(l),l=l.replace(/ \u00A0/g,"  ");const E=g&&g.is("element")&&g.name!="br",T=g&&g.is("$text")&&g.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(l)||!g||E||T)&&(l=l.replace(/\u00A0$/," ")),(k||h&&h.is("element")&&h.name!="br")&&(l=l.replace(/^\u00A0/," "))}l.length==0&&c.parent?(c._remove(),e.splice(r,1),r--):(c._data=l,i=u)}e.length=0}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!i||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_getTouchingInlineViewNode(t,e){const n=new vi({startPosition:e?gt._createAfter(t):gt._createBefore(t),direction:e?"forward":"backward"});for(const i of n){if(i.item.is("element","br"))return null;if(this._isInlineObjectElement(i.item))return i.item;if(i.item.is("containerElement"))return null;if(i.item.is("$textProxy"))return i.item}return null}_isBlockDomElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isBlockViewElement(t){return t.is("element")&&this.blockElements.includes(t.name)}_isInlineObjectElement(t){return!!t.is("element")&&(t.name=="br"||this.inlineObjectElements.includes(t.name)||!!this._inlineObjectElementMatcher.match(t))}_createViewElement(t,e){if(vs(t))return new sc(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new rn(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&t.is("element")&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){const n=this._domDocument.createElement("span");if(n.setAttribute(Lm,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const i of e.getAttributeNames())n.setAttribute(i,e.getAttribute(i))}return n}}function eT(o,t){return o.getAncestors().some(e=>e.is("element")&&t.includes(e.name))}function Rm(o,t){let e=o;for(;e;)t(e),e=e.parentElement}function zm(o,t){const e=o.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function jm(o){o==="script"&&q("domconverter-unsafe-script-element-detected"),o==="style"&&q("domconverter-unsafe-style-element-detected")}class Zn extends bn(){constructor(t){super(),this._isEnabled=!1,this.view=t,this.document=t.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Fm=km(function(o,t){lr(t,ur(t),o)});class mr{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,Fm(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Bo extends Zn{constructor(){super(...arguments),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}stopObserving(t){this.stopListening(t)}fire(t,e,n){this.isEnabled&&this.document.fire(t,new mr(this.view,e,n))}}class nT extends Bo{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(t){const e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return hr(this)}};this.fire(t.type,t,e)}}const lu=function(){return It.Date.now()};var oT=/\s/;const iT=function(o){for(var t=o.length;t--&&oT.test(o.charAt(t)););return t};var rT=/^\s+/;const sT=function(o){return o&&o.slice(0,iT(o)+1).replace(rT,"")};var aT=/^[-+]0x[0-9a-f]+$/i,cT=/^0b[01]+$/i,lT=/^0o[0-7]+$/i,dT=parseInt;const Vm=function(o){if(typeof o=="number")return o;if(ec(o))return NaN;if(G(o)){var t=typeof o.valueOf=="function"?o.valueOf():o;o=G(t)?t+"":t}if(typeof o!="string")return o===0?o:+o;o=sT(o);var e=cT.test(o);return e||lT.test(o)?dT(o.slice(2),e?2:8):aT.test(o)?NaN:+o};var uT=Math.max,hT=Math.min;const Ms=function(o,t,e){var n,i,r,c,l,u,h=0,g=!1,k=!1,_=!0;if(typeof o!="function")throw new TypeError("Expected a function");function E(U){var Y=n,bt=i;return n=i=void 0,h=U,c=o.apply(bt,Y)}function T(U){var Y=U-u;return u===void 0||Y>=t||Y<0||k&&U-h>=r}function S(){var U=lu();if(T(U))return M(U);l=setTimeout(S,function(Y){var bt=t-(Y-u);return k?hT(bt,r-(Y-h)):bt}(U))}function M(U){return l=void 0,_&&n?E(U):(n=i=void 0,c)}function P(){var U=lu(),Y=T(U);if(n=arguments,i=this,u=U,Y){if(l===void 0)return function(bt){return h=bt,l=setTimeout(S,t),g?E(bt):c}(u);if(k)return clearTimeout(l),l=setTimeout(S,t),E(u)}return l===void 0&&(l=setTimeout(S,t)),c}return t=Vm(t)||0,G(e)&&(g=!!e.leading,r=(k="maxWait"in e)?uT(Vm(e.maxWait)||0,t):r,_="trailing"in e?!!e.trailing:_),P.cancel=function(){l!==void 0&&clearTimeout(l),h=0,n=u=i=l=void 0},P.flush=function(){return l===void 0?c:M(lu())},P};class pT extends Zn{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=Ms(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new zn(e.getRanges(),{backward:e.isBackward,fake:!1});t!=Wt.arrowleft&&t!=Wt.arrowup||n.setTo(n.getFirstPosition()),t!=Wt.arrowright&&t!=Wt.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const gT=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},fT=function(o){return this.__data__.has(o)};function lc(o){var t=-1,e=o==null?0:o.length;for(this.__data__=new Va;++t<e;)this.add(o[t])}lc.prototype.add=lc.prototype.push=gT,lc.prototype.has=fT;const mT=lc,kT=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n;)if(t(o[e],e,o))return!0;return!1},bT=function(o,t){return o.has(t)},Hm=function(o,t,e,n,i,r){var c=1&e,l=o.length,u=t.length;if(l!=u&&!(c&&u>l))return!1;var h=r.get(o),g=r.get(t);if(h&&g)return h==t&&g==o;var k=-1,_=!0,E=2&e?new mT:void 0;for(r.set(o,t),r.set(t,o);++k<l;){var T=o[k],S=t[k];if(n)var M=c?n(S,T,k,t,o,r):n(T,S,k,o,t,r);if(M!==void 0){if(M)continue;_=!1;break}if(E){if(!kT(t,function(P,U){if(!bT(E,U)&&(T===P||i(T,P,e,n,r)))return E.push(U)})){_=!1;break}}else if(T!==S&&!i(T,S,e,n,r)){_=!1;break}}return r.delete(o),r.delete(t),_},wT=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n,i){e[++t]=[i,n]}),e},_T=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n){e[++t]=n}),e};var Um=zt?zt.prototype:void 0,du=Um?Um.valueOf:void 0;const AT=function(o,t,e,n,i,r,c){switch(e){case"[object DataView]":if(o.byteLength!=t.byteLength||o.byteOffset!=t.byteOffset)return!1;o=o.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=t.byteLength||!r(new $a(o),new $a(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return gs(+o,+t);case"[object Error]":return o.name==t.name&&o.message==t.message;case"[object RegExp]":case"[object String]":return o==t+"";case"[object Map]":var l=wT;case"[object Set]":var u=1&n;if(l||(l=_T),o.size!=t.size&&!u)return!1;var h=c.get(o);if(h)return h==t;n|=2,c.set(o,t);var g=Hm(l(o),l(t),n,i,r,c);return c.delete(o),g;case"[object Symbol]":if(du)return du.call(o)==du.call(t)}return!1};var CT=Object.prototype.hasOwnProperty;const vT=function(o,t,e,n,i,r){var c=1&e,l=Cd(o),u=l.length;if(u!=Cd(t).length&&!c)return!1;for(var h=u;h--;){var g=l[h];if(!(c?g in t:CT.call(t,g)))return!1}var k=r.get(o),_=r.get(t);if(k&&_)return k==t&&_==o;var E=!0;r.set(o,t),r.set(t,o);for(var T=c;++h<u;){var S=o[g=l[h]],M=t[g];if(n)var P=c?n(M,S,g,t,o,r):n(S,M,g,o,t,r);if(!(P===void 0?S===M||i(S,M,e,n,r):P)){E=!1;break}T||(T=g=="constructor")}if(E&&!T){var U=o.constructor,Y=t.constructor;U==Y||!("constructor"in o)||!("constructor"in t)||typeof U=="function"&&U instanceof U&&typeof Y=="function"&&Y instanceof Y||(E=!1)}return r.delete(o),r.delete(t),E};var $m="[object Arguments]",qm="[object Array]",dc="[object Object]",Wm=Object.prototype.hasOwnProperty;const yT=function(o,t,e,n,i,r){var c=Me(o),l=Me(t),u=c?qm:_s(o),h=l?qm:_s(t),g=(u=u==$m?dc:u)==dc,k=(h=h==$m?dc:h)==dc,_=u==h;if(_&&bs(o)){if(!bs(t))return!1;c=!0,g=!1}if(_&&!g)return r||(r=new ks),c||bd(o)?Hm(o,t,e,n,i,r):AT(o,t,u,e,n,i,r);if(!(1&e)){var E=g&&Wm.call(o,"__wrapped__"),T=k&&Wm.call(t,"__wrapped__");if(E||T){var S=E?o.value():o,M=T?t.value():t;return r||(r=new ks),i(S,M,e,n,r)}}return!!_&&(r||(r=new ks),vT(o,t,e,n,i,r))},Gm=function o(t,e,n,i,r){return t===e||(t==null||e==null||!kn(t)&&!kn(e)?t!=t&&e!=e:yT(t,e,n,i,o,r))},ET=function(o,t,e){var n=(e=typeof e=="function"?e:void 0)?e(o,t):void 0;return n===void 0?Gm(o,t,void 0,e):!!n};class Km extends Zn{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.add(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}stopObserving(t){if(this._domElements.delete(t),this.isEnabled){this._mutationObserver.disconnect();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Set,i=new Set;for(const c of t){const l=e.mapDomToView(c.target);l&&(l.is("uiElement")||l.is("rawElement")||c.type!=="childList"||this._isBogusBrMutation(c)||i.add(l))}for(const c of t){const l=e.mapDomToView(c.target);if((!l||!l.is("uiElement")&&!l.is("rawElement"))&&c.type==="characterData"){const u=e.findCorrespondingViewText(c.target);u&&!i.has(u.parent)?n.add(u):!u&&sn(c.target)&&i.add(e.mapDomToView(c.target.parentNode))}}let r=!1;for(const c of n)r=!0,this.renderer.markToSync("text",c);for(const c of i){const l=e.mapViewToDom(c),u=Array.from(c.getChildren()),h=Array.from(e.domChildrenToView(l,{withChildren:!1}));ET(u,h,xT)||(r=!0,this.renderer.markToSync("children",c))}r&&this.view.forceRender()}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function xT(o,t){if(!Array.isArray(o))return o===t||!(!o.is("$text")||!t.is("$text"))&&o.data===t.data}class uc extends Bo{constructor(t){super(t),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),t.change(()=>{})},50)}),e.on("blur",(n,i)=>{const r=e.selection.editableElement;r!==null&&r!==i.target||(e.isFocused=!1,this._isFocusChanging=!1,t.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class DT extends Zn{constructor(t){super(t),this.mutationObserver=t.getObserver(Km),this.focusObserver=t.getObserver(uc),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Ms(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Ms(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",(i,r)=>{this.document.isComposing&&!v.isAndroid||(this._handleSelectionChange(r,e),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(e))}stopObserving(t){this.stopListening(t)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(i)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(i))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class TT extends Bo{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class Ym{constructor(t,e={}){this._files=e.cacheFiles?Qm(t):null,this._native=t}get files(){return this._files||(this._files=Qm(this._native)),this._files}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}setDragImage(t,e,n){this._native.setDragImage(t,e,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Qm(o){const t=Array.from(o.files||[]),e=Array.from(o.items||[]);return t.length?t:e.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class ST extends Bo{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(t){const e=t.getTargetRanges(),n=this.view,i=n.document;let r=null,c=null,l=[];if(t.dataTransfer&&(r=new Ym(t.dataTransfer)),t.data!==null?c=t.data:r&&(c=r.getData("text/plain")),i.selection.isFake)l=Array.from(i.selection.getRanges());else if(e.length)l=e.map(u=>{const h=n.domConverter.domPositionToView(u.startContainer,u.startOffset),g=n.domConverter.domPositionToView(u.endContainer,u.endOffset);return h?n.createRange(h,g):g?n.createRange(g):void 0}).filter(u=>!!u);else if(v.isAndroid){const u=t.target.ownerDocument.defaultView.getSelection();l=Array.from(n.domConverter.domSelectionToView(u).getRanges())}if(v.isAndroid&&t.inputType=="insertCompositionText"&&c&&c.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[n.createRange(l[0].end)]});else if(t.inputType=="insertText"&&c&&c.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...e?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[e]}]:[],n],on:{dragstart:i.to(r=>r.preventDefault())}}]})}}function $b(o,t,e){return(n,i)=>{const r=new Yt(o);if(r.width<GI||r.height<WI)return null;let c;c=t.position==="inside"?r.bottom-i.height:r.bottom-i.height/2,c-=t.verticalOffset;const l=e(r,i),u=n.clone().moveTo(l,c).getIntersection(i.clone().moveTo(l,c)).getVisible();return!u||u.getArea()<i.getArea()?null:{top:c,left:l,name:`position_${t.position}-side_${t.side}`,config:{withArrow:!1}}}}function qb(o){const t=o.config.get("ui.poweredBy"),e=t&&t.position||"border";return qI({position:e,label:KI,verticalOffset:e==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left"},t)}var ZI=Object.defineProperty,Wb=Object.getOwnPropertySymbols,JI=Object.prototype.hasOwnProperty,XI=Object.prototype.propertyIsEnumerable,Gb=(o,t,e)=>t in o?ZI(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class t5 extends H(){constructor(t){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const e=t.editing.view;this.editor=t,this.componentFactory=new PI(t),this.focusTracker=new We,this.tooltipManager=new Ac(t),this.poweredBy=new YI(t),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(e.document,"layoutChanged",this.update.bind(this)),this.listenTo(e,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null,this.editor.keystrokes.stopListening(t);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor),this.focusTracker.add(e);const n=()=>{this.editor.editing.view.getDomRoot(t)||this.editor.keystrokes.listenTo(e)};this.isReady?n():this.once("ready",n)}removeEditableElement(t){const e=this._editableElementsMap.get(t);e&&(this._editableElementsMap.delete(t),this.editor.keystrokes.stopListening(e),this.focusTracker.remove(e),e.ckeditorInstance=null)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(t,e={}){t.isRendered?(this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)):t.once("render",()=>{this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)}),this._focusableToolbarDefinitions.push({toolbarView:t,options:e})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const t=this.editor,e=t.editing.view;let n,i;t.keystrokes.set("Alt+F10",(r,c)=>{const l=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(l)&&!Array.from(e.domRoots.values()).includes(l)&&(n=l);const u=this._getCurrentFocusedToolbarDefinition();u&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let h=0;h<i.length;h++){const g=i.shift();if(i.push(g),g!==u&&this._focusFocusableCandidateToolbar(g)){u&&u.options.afterBlur&&u.options.afterBlur();break}}c()}),t.keystrokes.set("Esc",(r,c)=>{const l=this._getCurrentFocusedToolbarDefinition();l&&(n?(n.focus(),n=null):t.editing.view.focus(),l.options.afterBlur&&l.options.afterBlur(),c())})}_getFocusableCandidateToolbarDefinitions(){const t=[];for(const e of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=e;(bi(n.element)||i.beforeFocus)&&t.push(e)}return t.sort((e,n)=>Kb(e)-Kb(n)),t}_getCurrentFocusedToolbarDefinition(){for(const t of this._focusableToolbarDefinitions)if(t.toolbarView.element&&t.toolbarView.element.contains(this.focusTracker.focusedElement))return t;return null}_focusFocusableCandidateToolbar(t){const{toolbarView:e,options:{beforeFocus:n}}=t;return n&&n(),!!bi(e.element)&&(e.focus(),!0)}_handleScrollToTheSelection(t,e){const n=((i,r)=>{for(var c in r||(r={}))JI.call(r,c)&&Gb(i,c,r[c]);if(Wb)for(var c of Wb(r))XI.call(r,c)&&Gb(i,c,r[c]);return i})({top:0,bottom:0,left:0,right:0},this.viewportOffset);e.viewportOffset.top+=n.top,e.viewportOffset.bottom+=n.bottom,e.viewportOffset.left+=n.left,e.viewportOffset.right+=n.right}}function Kb(o){const{toolbarView:t,options:e}=o;let n=10;return bi(t.element)&&n--,e.isContextual&&n--,n}var Yb=f(9688),e5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Yb.Z,e5),Yb.Z.locals;class n5 extends Rt{constructor(t){super(t),this.body=new FD(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class o5 extends n5{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new Gf;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class i5 extends Rt{constructor(t,e,n){super(t),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(i=>{const r=t.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(r,c,l)=>{l?n(i):e(i)})}(this):e(this)}}class r5 extends i5{constructor(t,e,n,i={}){super(t,e,n);const r=t.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const t=this._editingView;t.change(e=>{const n=t.document.getRoot(this.name);e.setAttribute("aria-label",this._generateLabel(this),n)})}}var Qb=f(8847),s5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Qb.Z,s5),Qb.Z.locals;class Ru extends Xa{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=t.namespace?`show:${t.type}:${t.namespace}`:`show:${t.type}`;this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class Zb extends H(){constructor(t,e){super(),e&&Fm(this,e),t&&this.set(t)}}var Jb=f(4650),a5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Jb.Z,a5),Jb.Z.locals;var Xb=f(7676),c5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(Xb.Z,c5),Xb.Z.locals;const vc=Cs("px");class yc extends rt{constructor(t){super(t),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this._view||this._createPanelView(),this.hasView(t.view))throw new I("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new I("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new I("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}_createPanelView(){this._view=new Ye(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new l5(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,i])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new d5(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class l5 extends Rt{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new We,this.buttonPrevView=this._createButtonView(e("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(e("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new ce(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class d5 extends Rt{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",vc),left:n.to("left",vc),width:n.to("width",vc),height:n.to("height",vc)}},children:this.content}),this.on("change:numberOfPanels",(i,r,c,l)=>{c>l?this._addPanels(c-l):this._removePanels(l-c),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new Rt;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:i}=new Yt(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:i})}}}var tw=f(5868),u5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(tw.Z,u5),tw.Z.locals;const Ar=Cs("px");class h5 extends Rt{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Ln({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?Ar(this._contentPanelRect.height):null)}}}).render(),this._contentPanel=new Ln({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?Ar(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_stickyTopOffset",n=>n&&Ar(n)),bottom:e.to("_stickyBottomOffset",n=>n&&Ar(n)),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(Et.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const t=new Yt(this.limiterElement);let e=t.getVisible();if(e){const n=new Yt(Et.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,e=e.getIntersection(n)}if(e&&t.top<e.top){const n=e.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>e.bottom){const i=Math.max(t.bottom-e.bottom,0)+this.limiterBottomOffset;t.bottom-i>t.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(i):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<t.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=t,this._stickyBottomOffset=null,this._marginLeft=Ar(-Et.window.scrollX)}_stickToBottomOfLimiter(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=t,this._marginLeft=Ar(-Et.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new Yt(this._contentPanel)}}class p5 extends Ja{constructor(t,e){const n=t.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:bc},e);super(t,i.creator),this.label=e.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new wi,this.iconView.content=he.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new ce(t),this.resetButtonView.set({label:n("Clear"),icon:he.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",r=>!r),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class g5 extends Rt{constructor(){super();const t=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",t.if("isVisible","ck-hidden",e=>!e)],tabindex:-1},children:[{tag:"span",children:[{text:[t.to("primaryText")]}]},{tag:"span",children:[{text:[t.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class f5 extends Rt{constructor(t){super(t),this.children=this.createCollection(),this.focusTracker=new We,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new No({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const t of this.children)this.focusTracker.add(t.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var ew=/[\\^$.*+?()[\]{}|]/g,m5=RegExp(ew.source);const nw=function(o){return(o=Wd(o))&&m5.test(o)?o.replace(ew,"\\$&"):o};var ow=f(6770),k5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(ow.Z,k5),ow.Z.locals;var b5=Object.defineProperty,iw=Object.getOwnPropertySymbols,w5=Object.prototype.hasOwnProperty,_5=Object.prototype.propertyIsEnumerable,rw=(o,t,e)=>t in o?b5(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class A5 extends Rt{constructor(t,e){super(t),this._config=e,this.filteredView=e.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new We,this.keystrokes=new Pn,this.resultsView=new f5(t),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),e.infoView&&e.infoView.instance?this.infoView=e.infoView.instance:(this.infoView=new g5,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new No({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:r})=>{this.resultsCount=i,this.totalItemsCount=r}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",e.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const t=e=>e.stopPropagation();for(const e of this.focusableChildren)this.focusTracker.add(e.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(t){const e=t?new RegExp(nw(t),"ig"):null,n=this.filteredView.filter(e);this.fire("search",((i,r)=>{for(var c in r||(r={}))w5.call(r,c)&&rw(i,c,r[c]);if(iw)for(var c of iw(r))_5.call(r,c)&&rw(i,c,r[c]);return i})({query:t},n))}_createSearchTextQueryView(){const t=new p5(this.locale,this._config.queryView);return this.listenTo(t.fieldView,"input",()=>{this.search(t.fieldView.element.value)}),t.on("reset",()=>this.reset()),t.bind("isEnabled").to(this),t}_enableDefaultInfoViewBehavior(){const t=this.locale.t,e=this.infoView;function n(i,{query:r,resultsCount:c,totalItemsCount:l}){return typeof i=="function"?i(r,c,l):i}this.on("search",(i,r)=>{if(r.resultsCount)e.set({isVisible:!1});else{const c=this._config.infoView&&this._config.infoView.text;let l,u;r.totalItemsCount?c&&c.notFound?(l=c.notFound.primary,u=c.notFound.secondary):(l=t("No results found"),u=""):c&&c.noSearchableItems?(l=c.noSearchableItems.primary,u=c.noSearchableItems.secondary):(l=t("No searchable items"),u=""),e.set({primaryText:n(l,r),secondaryText:n(u,r),isVisible:!0})}})}}var sw=f(8157),C5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(sw.Z,C5),sw.Z.locals;const zu=class extends A5{constructor(o,t){super(o,t),this._config=t;const e=Cs("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",i=>!i),n.to("_position",i=>`ck-search__results_${i}`)],style:{width:n.to("_width",e)}}}),this.focusTracker.on("change:isFocused",(i,r,c)=>{this._updateResultsVisibility(),c?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(i,r)=>{this.resultsView.isVisible=!1,r()}),this.listenTo(Et.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(i,{value:r})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=r,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new Yt(this.queryView.fieldView.element).width;const o=zu._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:zu.defaultResultsPositions});this.resultsView._position=o?o.name:"s"}_updateResultsVisibility(){const o=this._config.queryMinChars===void 0?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=o}};let aw=zu;aw.defaultResultsPositions=[o=>({top:o.bottom,left:o.left,name:"s"}),(o,t)=>({top:o.top-t.height,left:o.left,name:"n"})],aw._getOptimalPosition=Nd;var cw=f(8960),v5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(cw.Z,v5),cw.Z.locals;var lw=f(498),y5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(lw.Z,y5),lw.Z.locals;var dw=f(9695),E5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(dw.Z,E5),dw.Z.locals;class x5 extends t5{constructor(t,e){super(t),this.view=e,this._toolbarConfig=tm(t.config.get("toolbar")),this._elementReplacer=new ut,this.listenTo(t.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,i=e.editing.view,r=n.editable,c=i.document.getRoot();r.name=c.rootName,n.render();const l=r.element;this.setEditableElement(r.name,l),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(l),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:e})=>e||0),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(t.toolbar)}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement;let r;const c=t.config.get("placeholder");c&&(r=typeof c=="string"?c:c[this.view.editable.name]),!r&&i&&i.tagName.toLowerCase()==="textarea"&&(r=i.getAttribute("placeholder")),r&&(n.placeholder=r),cm({view:e,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(t,e,n){const i=this.view.stickyPanel;if(i.isSticky){const r=new Yt(i.element).height;e.viewportOffset.top+=r}else{const r=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(i,"change:isSticky",r),setTimeout(()=>{this.stopListening(i,"change:isSticky",r)},20)}}}var uw=f(3143),D5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_t()(uw.Z,D5),uw.Z.locals;class T5 extends o5{constructor(t,e,n={}){super(t),this.stickyPanel=new h5(t),this.toolbar=new yu(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new r5(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class hw{constructor(t){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof t.crashNumberLimit=="number"?t.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof t.minimumNonErrorTimePeriod=="number"?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=e=>{const n="error"in e?e.error:e.reason;n instanceof Error&&this._handleError(n,e)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(n=>n!==e)}_fire(t,...e){const n=this._listeners[t]||[];for(const i of n)i.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e instanceof ErrorEvent?e.filename:void 0,lineno:e instanceof ErrorEvent?e.lineno:void 0,colno:e instanceof ErrorEvent?e.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&t.context!==void 0&&t.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(t)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function ju(o,t=new Set){const e=[o],n=new Set;let i=0;for(;e.length>i;){const r=e[i++];if(!n.has(r)&&S5(r)&&!t.has(r))if(n.add(r),Symbol.iterator in r)try{for(const c of r)e.push(c)}catch{}else for(const c in r)c!=="defaultValue"&&e.push(r[c])}return n}function S5(o){const t=Object.prototype.toString.call(o),e=typeof o;return!(e==="number"||e==="boolean"||e==="string"||e==="symbol"||e==="function"||t==="[object Date]"||t==="[object RegExp]"||t==="[object Module]"||o==null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}function pw(o,t,e=new Set){if(o===t&&typeof(n=o)=="object"&&n!==null)return!0;var n;const i=ju(o,e),r=ju(t,e);for(const c of i)if(r.has(c))return!0;return!1}var I5=Object.defineProperty,M5=Object.defineProperties,N5=Object.getOwnPropertyDescriptors,Ec=Object.getOwnPropertySymbols,gw=Object.prototype.hasOwnProperty,fw=Object.prototype.propertyIsEnumerable,mw=(o,t,e)=>t in o?I5(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,Fu=(o,t)=>{for(var e in t||(t={}))gw.call(t,e)&&mw(o,e,t[e]);if(Ec)for(var e of Ec(t))fw.call(t,e)&&mw(o,e,t[e]);return o};class kw extends hw{constructor(t,e={}){super(e),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=Cc(this._save.bind(this),typeof e.saveInterval=="number"?e.saveInterval:5e3),t&&(this._creator=(n,i)=>t.create(n,i)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{const t={},e=[],n=this._config.rootsAttributes||{},i={};for(const[u,h]of Object.entries(this._data.roots))h.isLoaded?(t[u]="",i[u]=n[u]||{}):e.push(u);const r=(c=Fu({},this._config),l={extraPlugins:this._config.extraPlugins||[],lazyRoots:e,rootsAttributes:i,_watchdogInitialData:this._data},M5(c,N5(l)));var c,l;return delete r.initialData,r.extraPlugins.push(B5),this._initUsingData?this.create(t,r,r.context):ki(this._elementOrData)?this.create(this._elementOrData,r,r.context):this.create(this._editables,r,r.context)}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,n){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=t,this._initUsingData=typeof t=="string"||Object.keys(t).length>0&&typeof Object.values(t)[0]=="string",this._config=this._cloneEditorConfiguration(e)||{},this._config.context=n,this._creator(t,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)})}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t=this._editor,e=t.model.document.roots.filter(l=>l.isAttached()&&l.rootName!="$graveyard"),{plugins:n}=t,i=n.has("CommentsRepository")&&n.get("CommentsRepository"),r=n.has("TrackChanges")&&n.get("TrackChanges"),c={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};e.forEach(l=>{c.roots[l.rootName]={content:JSON.stringify(Array.from(l.getChildren())),attributes:JSON.stringify(Array.from(l.getAttributes())),isLoaded:l._isLoaded}});for(const l of t.model.markers)l._affectsData&&(c.markers[l.name]={rangeJSON:l.getRange().toJSON(),usingOperation:l._managedUsingOperations,affectsData:l._affectsData});return i&&(c.commentThreads=JSON.stringify(i.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),r&&(c.suggestions=JSON.stringify(r.getSuggestions({toJSON:!0,skipNotAttached:!0}))),c}_getEditables(){const t={};for(const e of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(e);n&&(t[e]=n)}return t}_isErrorComingFromThisItem(t){return pw(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return Sd(t,(e,n)=>ki(e)||n==="context"?e:void 0)}}class B5{constructor(t){this.editor=t,this._data=t.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",t=>{t.stop(),this.editor.model.enqueueChange({isUndoable:!1},e=>{this._restoreCollaborationData(),this._restoreEditorData(e)}),this.editor.data.fire("ready")},{priority:999})}_createNode(t,e){if("name"in e){const n=t.createElement(e.name,e.attributes);if(e.children)for(const i of e.children)n._appendChild(this._createNode(t,i));return n}return t.createText(e.data,e.attributes)}_restoreEditorData(t){const e=this.editor;Object.entries(this._data.roots).forEach(([n,{content:i,attributes:r}])=>{const c=JSON.parse(i),l=JSON.parse(r),u=e.model.document.getRoot(n);for(const[h,g]of l)t.setAttribute(h,g,u);for(const h of c){const g=this._createNode(t,h);t.insert(g,u,"end")}}),Object.entries(this._data.markers).forEach(([n,i])=>{const{document:r}=e.model,c=i,{rangeJSON:{start:l,end:u}}=c,h=((T,S)=>{var M={};for(var P in T)gw.call(T,P)&&S.indexOf(P)<0&&(M[P]=T[P]);if(T!=null&&Ec)for(var P of Ec(T))S.indexOf(P)<0&&fw.call(T,P)&&(M[P]=T[P]);return M})(c,["rangeJSON"]),g=r.getRoot(l.root),k=t.createPositionFromPath(g,l.path,l.stickiness),_=t.createPositionFromPath(g,u.path,u.stickiness),E=t.createRange(k,_);t.addMarker(n,Fu({range:E},h))})}_restoreCollaborationData(){const t=JSON.parse(this._data.commentThreads),e=JSON.parse(this._data.suggestions);t.forEach(n=>{const i=this.editor.config.get("collaboration.channelId"),r=this.editor.plugins.get("CommentsRepository");r.hasCommentThread(n.threadId)&&r.getCommentThread(n.threadId).remove(),r.addCommentThread(Fu({channelId:i},n))}),e.forEach(n=>{const i=this.editor.plugins.get("TrackChangesEditing");i.hasSuggestion(n.id)?i.getSuggestion(n.id).attributes=n.attributes:i.addSuggestionData(n)})}}const Hs=Symbol("MainQueueId");class O5{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const n=t===Hs;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const i=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(Hs),this._queues.get(t)])).then(e),r=i.catch(()=>{});return this._queues.set(t,r),i.finally(()=>{this._activeActions--,this._queues.get(t)===r&&this._activeActions===0&&this._onEmptyCallbacks.forEach(c=>c())})}}function bw(o){return Array.isArray(o)?o:[o]}class xc extends mc(vu(pI)){constructor(t,e={}){if(!Dc(t)&&e.initialData!==void 0)throw new I("editor-create-initial-data",null);super(e),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return Dc(r)?(c=r,c instanceof HTMLTextAreaElement?c.value:c.innerHTML):r;var c}(t)),Dc(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new T5(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new x5(this,i),function(r){if(!pi(r.updateSourceElement))throw new I("attachtoform-missing-elementapi-interface",r);const c=r.sourceElement;if(function(l){return!!l&&l.tagName.toLowerCase()==="textarea"}(c)&&c.form){let l;const u=c.form,h=()=>r.updateSourceElement();pi(u.submit)&&(l=u.submit,u.submit=()=>{h(),l.apply(u)}),u.addEventListener("submit",h),r.on("destroy",()=>{u.removeEventListener("submit",h),l&&(u.submit=l)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(Dc(t)?t:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function Dc(o){return ki(o)}xc.Context=rm,xc.EditorWatchdog=kw,xc.ContextWatchdog=class extends hw{constructor(o,t={}){super(t),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new O5,this._watchdogConfig=t,this._creator=e=>o.create(e),this._destructor=e=>e.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(Hs,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const t=bw(o);return Promise.all(t.map(e=>this._actionQueues.enqueue(e.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(e.id))throw new Error(`Item with the given id is already added: '${e.id}'.`);if(e.type==="editor")return n=new kw(null,this._watchdogConfig),n.setCreator(e.creator),n._setExcludedProperties(this._contextProps),e.destructor&&n.setDestructor(e.destructor),this._watchdogs.set(e.id,n),n.on("error",(i,{error:r,causesRestart:c})=>{this._fire("itemError",{itemId:e.id,error:r}),c&&this._actionQueues.enqueue(e.id,()=>new Promise(l=>{const u=()=>{n.off("restart",u),this._fire("itemRestart",{itemId:e.id}),l()};n.on("restart",u)}))}),n.create(e.sourceElementOrData,e.config,this._context);throw new Error(`Not supported item type: '${e.type}'.`)})))}remove(o){const t=bw(o);return Promise.all(t.map(e=>this._actionQueues.enqueue(e,()=>{const n=this._getWatchdog(e);return this._watchdogs.delete(e),n.destroy()})))}destroy(){return this._actionQueues.enqueue(Hs,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Hs,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=ju(this._context),Promise.all(Array.from(this._watchdogs.values()).map(t=>(t._setExcludedProperties(this._contextProps),t.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(t=>t.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const t=this._watchdogs.get(o);if(!t)throw new Error(`Item with the given id was not registered: ${o}.`);return t}_isErrorComingFromThisItem(o){for(const t of this._watchdogs.values())if(t._isErrorComingFromThisItem(o))return!1;return pw(this._context,o.context)}};class Us extends Bo{constructor(t){super(t),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const e=this.document;function n(i){return(r,c)=>{c.preventDefault();const l=c.dropRange?[c.dropRange]:null,u=new j(e,i);e.fire(u,{dataTransfer:c.dataTransfer,method:r.name,targetRanges:l,target:c.target,domEvent:c.domEvent}),u.stop.called&&c.stopPropagation()}}this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e="clipboardData"in t?t.clipboardData:t.dataTransfer,n=t.type=="drop"||t.type=="paste",i={dataTransfer:new Ym(e,{cacheFiles:n})};t.type!="drop"&&t.type!="dragover"||(i.dropRange=function(r,c){const l=c.target.ownerDocument,u=c.clientX,h=c.clientY;let g;return l.caretRangeFromPoint&&l.caretRangeFromPoint(u,h)?g=l.caretRangeFromPoint(u,h):c.rangeParent&&(g=l.createRange(),g.setStart(c.rangeParent,c.rangeOffset),g.collapse(!0)),g?r.domConverter.domRangeToView(g):null}(this.view,t)),this.fire(t.type,t,i)}}const ww=["figcaption","li"];function _w(o){let t="";if(o.is("$text")||o.is("$textProxy"))t=o.data;else if(o.is("element","img")&&o.hasAttribute("alt"))t=o.getAttribute("alt");else if(o.is("element","br"))t=`
`;else{let e=null;for(const n of o.getChildren()){const i=_w(n);e&&(e.is("containerElement")||n.is("containerElement"))&&(ww.includes(e.name)||ww.includes(n.name)?t+=`
`:t+=`
