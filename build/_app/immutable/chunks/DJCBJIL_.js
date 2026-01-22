import{$ as O,ar as R,E as z,as as L,at as M,u as P,w as W,au as q,av as S,an as B,x as U,y as m,p as j,n as G,a as K,b as D,c as H}from"./B2MXvhv6.js";import"./CWj6FrbW.js";import{c as J}from"./DxVMc3Zq.js";import{s as Q,r as V}from"./vFhmboTk.js";import{I as X}from"./BWw7gpPW.js";const Y=()=>performance.now(),l={tick:t=>requestAnimationFrame(t),now:()=>Y(),tasks:new Set};function I(){const t=l.now();l.tasks.forEach(r=>{r.c(t)||(l.tasks.delete(r),r.f())}),l.tasks.size!==0&&l.tick(I)}function Z(t){let r;return l.tasks.size===0&&l.tick(I),{promise:new Promise(a=>{l.tasks.add(r={c:t,f:a})}),abort(){l.tasks.delete(r)}}}function b(t,r){S(()=>{t.dispatchEvent(new CustomEvent(r))})}function rr(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const r=t.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function A(t){const r={},a=t.split(";");for(const i of a){const[d,n]=i.split(":");if(!d||n===void 0)break;const c=rr(d.trim());r[c]=n.trim()}return r}const tr=t=>t;function dr(t,r,a,i){var v;var d=(t&q)!==0,n="both",c,p=r.inert,w=r.style.overflow,s,e;function _(){return S(()=>c??(c=a()(r,(i==null?void 0:i())??{},{direction:n})))}var h={is_global:d,in(){r.inert=p,b(r,"introstart"),s=C(r,_(),e,1,()=>{b(r,"introend"),s==null||s.abort(),s=c=void 0,r.style.overflow=w})},out(f){r.inert=!0,b(r,"outrostart"),e=C(r,_(),s,0,()=>{b(r,"outroend"),f==null||f()})},stop:()=>{s==null||s.abort(),e==null||e.abort()}},$=O;if(((v=$.nodes).t??(v.t=[])).push(h),R){var u=d;if(!u){for(var o=$.parent;o&&o.f&z;)for(;(o=o.parent)&&!(o.f&L););u=!o||(o.f&M)!==0}u&&P(()=>{W(()=>h.in())})}}function C(t,r,a,i,d){var n=i===1;if(B(r)){var c,p=!1;return U(()=>{if(!p){var v=r({direction:n?"in":"out"});c=C(t,v,a,i,d)}}),{abort:()=>{p=!0,c==null||c.abort()},deactivate:()=>c.deactivate(),reset:()=>c.reset(),t:()=>c.t()}}if(a==null||a.deactivate(),!(r!=null&&r.duration))return d(),{abort:m,deactivate:m,reset:m,t:()=>i};const{delay:w=0,css:s,tick:e,easing:_=tr}=r;var h=[];if(n&&a===void 0&&(e&&e(0,1),s)){var $=A(s(0,1));h.push($,$)}var u=()=>1-i,o=t.animate(h,{duration:w,fill:"forwards"});return o.onfinish=()=>{o.cancel();var v=(a==null?void 0:a.t())??1-i;a==null||a.abort();var f=i-v,y=r.duration*Math.abs(f),E=[];if(y>0){var k=!1;if(s)for(var x=Math.ceil(y/16.666666666666668),F=0;F<=x;F+=1){var T=v+f*_(F/x),N=A(s(T,1-T));E.push(N),k||(k=N.overflow==="hidden")}k&&(t.style.overflow="hidden"),u=()=>{var g=o.currentTime;return v+f*_(g/y)},e&&Z(()=>{if(o.playState!=="running")return!1;var g=u();return e(g,1-g),!0})}o=t.animate(E,{duration:y,fill:"forwards"}),o.onfinish=()=>{u=()=>i,e==null||e(i,1-i),d()}},{abort:()=>{o&&(o.cancel(),o.effect=null,o.onfinish=m)},deactivate:()=>{d=m},reset:()=>{i===0&&(e==null||e(1,0))},t:()=>u()}}function cr(t,r){j(r,!0);/**
 * @license @lucide/svelte v0.544.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let a=V(r,["$$slots","$$events","$$legacy"]);const i=[["path",{d:"m6 9 6 6 6-6"}]];X(t,Q({name:"chevron-down"},()=>a,{get iconNode(){return i},children:(d,n)=>{var c=G(),p=K(c);J(p,()=>r.children??m),D(d,c)},$$slots:{default:!0}})),H()}const ar=t=>t;function er(t){const r=t-1;return r*r*r+1}function pr(t,{delay:r=0,duration:a=400,easing:i=ar}={}){const d=+getComputedStyle(t).opacity;return{delay:r,duration:a,easing:i,css:n=>`opacity: ${n*d}`}}function ur(t,{delay:r=0,duration:a=400,easing:i=er,axis:d="y"}={}){const n=getComputedStyle(t),c=+n.opacity,p=d==="y"?"height":"width",w=parseFloat(n[p]),s=d==="y"?["top","bottom"]:["left","right"],e=s.map(f=>`${f[0].toUpperCase()}${f.slice(1)}`),_=parseFloat(n[`padding${e[0]}`]),h=parseFloat(n[`padding${e[1]}`]),$=parseFloat(n[`margin${e[0]}`]),u=parseFloat(n[`margin${e[1]}`]),o=parseFloat(n[`border${e[0]}Width`]),v=parseFloat(n[`border${e[1]}Width`]);return{delay:r,duration:a,easing:i,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*c};${p}: ${f*w}px;padding-${s[0]}: ${f*_}px;padding-${s[1]}: ${f*h}px;margin-${s[0]}: ${f*$}px;margin-${s[1]}: ${f*u}px;border-${s[0]}-width: ${f*o}px;border-${s[1]}-width: ${f*v}px;min-${p}: 0`}}export{cr as C,pr as f,ur as s,dr as t};
