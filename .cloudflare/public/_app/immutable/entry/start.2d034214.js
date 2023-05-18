import{o as xe,t as ge}from"../chunks/index.e8d42111.js";import{S as Me,a as He,I as C,g as je,f as $e,b as ye,c as le,s as q,i as we,d as Z,e as V,P as De,h as ze}from"../chunks/singletons.23bfc3df.js";function Be(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function Ye(t){return t.split("%25").map(decodeURI).join("%25")}function We(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const Xe=["href","pathname","search","searchParams","toString","toJSON"];function Ze(t,o){const l=new URL(t);for(const i of Xe){let p=l[i];Object.defineProperty(l,i,{get(){return o(),p},enumerable:!0,configurable:!0})}return Qe(l),l}function Qe(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const et="/__data.json";function tt(t){return t.replace(/\/$/,"")+et}function Ve(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Ce(t,o){const l=JSON.stringify(o);try{sessionStorage[t]=l}catch{}}function nt(...t){let o=5381;for(const l of t)if(typeof l=="string"){let i=l.length;for(;i;)o=o*33^l.charCodeAt(--i)}else if(ArrayBuffer.isView(l)){const i=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let p=i.length;for(;p;)o=o*33^i[--p]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(t,o)=>((t instanceof Request?t.method:o?.method||"GET")!=="GET"&&ee.delete(Se(t)),fe(t,o));const ee=new Map;function at(t,o){const l=Se(t,o),i=document.querySelector(l);if(i?.textContent){const{body:p,...f}=JSON.parse(i.textContent),S=i.getAttribute("data-ttl");return S&&ee.set(l,{body:p,init:f,ttl:1e3*Number(S)}),Promise.resolve(new Response(p,f))}return fe(t,o)}function rt(t,o,l){if(ee.size>0){const i=Se(t,l),p=ee.get(i);if(p){if(performance.now()<p.ttl&&["default","force-cache","only-if-cached",void 0].includes(l?.cache))return new Response(p.body,p.init);ee.delete(i)}}return fe(o,l)}function Se(t,o){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o?.headers||o?.body){const p=[];o.headers&&p.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&p.push(o.body),i+=`[data-hash="${nt(...p)}"]`}return i}const ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function st(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${ct(t).map(i=>{const p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(p)return o.push({name:p[1],matcher:p[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return o.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const S=i.split(/\[(.+?)\](?!\])/);return"/"+S.map((y,m)=>{if(m%2){if(y.startsWith("x+"))return ve(String.fromCharCode(parseInt(y.slice(2),16)));if(y.startsWith("u+"))return ve(String.fromCharCode(...y.slice(2).split("-").map(j=>parseInt(j,16))));const d=ot.exec(y);if(!d)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,U,A,b,I]=d;return o.push({name:b,matcher:I,optional:!!U,rest:!!A,chained:A?m===1&&S[0]==="":!1}),A?"(.*?)":U?"([^/]*)?":"([^/]+?)"}return ve(y)}).join("")}).join("")}/?$`),params:o}}function it(t){return!/^\([^)]+\)$/.test(t)}function ct(t){return t.slice(1).split("/").filter(it)}function lt(t,o,l){const i={},p=t.slice(1);let f=0;for(let S=0;S<o.length;S+=1){const c=o[S],y=p[S-f];if(c.chained&&c.rest&&f){i[c.name]=p.slice(S-f,S+1).filter(m=>m).join("/"),f=0;continue}if(y===void 0){c.rest&&(i[c.name]="");continue}if(!c.matcher||l[c.matcher](y)){i[c.name]=y;const m=o[S+1],d=p[S+1];m&&!m.rest&&m.optional&&d&&(f=0);continue}if(c.optional&&c.chained){f++;continue}return}if(!f)return i}function ve(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ft({nodes:t,server_loads:o,dictionary:l,matchers:i}){const p=new Set(o);return Object.entries(l).map(([c,[y,m,d]])=>{const{pattern:U,params:A}=st(c),b={id:c,exec:I=>{const j=U.exec(I);if(j)return lt(j,A,i)},errors:[1,...d||[]].map(I=>t[I]),layouts:[0,...m||[]].map(S),leaf:f(y)};return b.errors.length=b.layouts.length=Math.max(b.errors.length,b.layouts.length),b});function f(c){const y=c<0;return y&&(c=~c),[y,t[c]]}function S(c){return c===void 0?c:[p.has(c),t[c]]}}let Q=class{constructor(o,l){this.status=o,typeof l=="string"?this.body={message:l}:l?this.body=l:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},qe=class{constructor(o,l){this.status=o,this.location=l}};async function ut(t){for(const o in t)if(typeof t[o]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([l,i])=>[l,await i])));return t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const dt=-1,pt=-2,ht=-3,mt=-4,_t=-5,gt=-6;function yt(t,o){if(typeof t=="number")return p(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const l=t,i=Array(l.length);function p(f,S=!1){if(f===dt)return;if(f===ht)return NaN;if(f===mt)return 1/0;if(f===_t)return-1/0;if(f===gt)return-0;if(S)throw new Error("Invalid input");if(f in i)return i[f];const c=l[f];if(!c||typeof c!="object")i[f]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const y=c[0],m=o?.[y];if(m)return i[f]=m(p(c[1]));switch(y){case"Date":i[f]=new Date(c[1]);break;case"Set":const d=new Set;i[f]=d;for(let b=1;b<c.length;b+=1)d.add(p(c[b]));break;case"Map":const U=new Map;i[f]=U;for(let b=1;b<c.length;b+=2)U.set(p(c[b]),p(c[b+1]));break;case"RegExp":i[f]=new RegExp(c[1],c[2]);break;case"Object":i[f]=Object(c[1]);break;case"BigInt":i[f]=BigInt(c[1]);break;case"null":const A=Object.create(null);i[f]=A;for(let b=1;b<c.length;b+=2)A[c[b]]=p(c[b+1]);break;default:throw new Error(`Unknown type ${y}`)}}else{const y=new Array(c.length);i[f]=y;for(let m=0;m<c.length;m+=1){const d=c[m];d!==pt&&(y[m]=p(d))}}else{const y={};i[f]=y;for(const m in c){const d=c[m];y[m]=p(d)}}return i[f]}return p(0)}const Ge=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ge];const wt=new Set([...Ge,"actions"]);[...wt];function vt(t){return t.filter(o=>o!=null)}const bt="x-sveltekit-invalidated",G=Ve(Me)??{},X=Ve(He)??{};function be(t){G[t]=Z()}function Et(t,o){const l=ft(t),i=t.nodes[0],p=t.nodes[1];i(),p();const f=document.documentElement,S=[],c=[];let y=null;const m={before_navigate:[],after_navigate:[]};let d={branch:[],error:null,url:null},U=!1,A=!1,b=!0,I=!1,j=!1,F=!1,M=!1,J,P=history.state?.[C];P||(P=Date.now(),history.replaceState({...history.state,[C]:P},"",location.href));const ue=G[P];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let H,te,ne;async function ke(){ne=ne||Promise.resolve(),await ne,ne=null;const e=new URL(location.href),a=Y(e,!0);y=null;const n=te={},r=a&&await he(a);if(n===te&&r){if(r.type==="redirect")return ae(new URL(r.location,e).href,{},[e.pathname],n);J.$set(r.props)}}function Re(e){c.some(a=>a?.snapshot)&&(X[e]=c.map(a=>a?.snapshot?.capture()))}function Le(e){X[e]?.forEach((a,n)=>{c[n]?.snapshot?.restore(a)})}function Ae(){be(P),Ce(Me,G),Re(P),Ce(He,X)}async function ae(e,{noScroll:a=!1,replaceState:n=!1,keepFocus:r=!1,state:s={},invalidateAll:u=!1},h,v){return typeof e=="string"&&(e=new URL(e,je(document))),ie({url:e,scroll:a?Z():null,keepfocus:r,redirect_chain:h,details:{state:s,replaceState:n},nav_token:v,accepted:()=>{u&&(M=!0)},blocked:()=>{},type:"goto"})}async function Ie(e){return y={id:e.id,promise:he(e).then(a=>(a.type==="loaded"&&a.state.error&&(y=null),a))},y.promise}async function re(...e){const n=l.filter(r=>e.some(s=>r.exec(s))).map(r=>Promise.all([...r.layouts,r.leaf].map(s=>s?.[1]())));await Promise.all(n)}function Pe(e){d=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),H=e.props.page,J=new t.root({target:o,props:{...e.props,stores:q,components:c},hydrate:!0}),Le(P);const n={from:null,to:{params:d.params,route:{id:d.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter"};m.after_navigate.forEach(r=>r(n)),A=!0}async function B({url:e,params:a,branch:n,status:r,error:s,route:u,form:h}){let v="never";for(const g of n)g?.slash!==void 0&&(v=g.slash);e.pathname=Be(e.pathname,v),e.search=e.search;const E={type:"loaded",state:{url:e,params:a,branch:n,error:s,route:u},props:{constructors:vt(n).map(g=>g.node.component)}};h!==void 0&&(E.props.form=h);let w={},L=!H,_=0;for(let g=0;g<Math.max(n.length,d.branch.length);g+=1){const O=n[g],z=d.branch[g];O?.data!==z?.data&&(L=!0),O&&(w={...w,...O.data},L&&(E.props[`data_${_}`]=w),_+=1)}return(!d.url||e.href!==d.url.href||d.error!==s||h!==void 0&&h!==H.form||L)&&(E.props.page={error:s,params:a,route:{id:u?.id??null},status:r,url:new URL(e),form:h??null,data:L?w:H.data}),E}async function de({loader:e,parent:a,url:n,params:r,route:s,server_data_node:u}){let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await e();if(E.universal?.load){let w=function(..._){for(const k of _){const{href:g}=new URL(k,n);v.dependencies.add(g)}};const L={route:{get id(){return v.route=!0,s.id}},params:new Proxy(r,{get:(_,k)=>(v.params.add(k),_[k])}),data:u?.data??null,url:Ze(n,()=>{v.url=!0}),async fetch(_,k){let g;_ instanceof Request?(g=_.url,k={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...k}):g=_;const O=new URL(g,n);return w(O.href),O.origin===n.origin&&(g=O.href.slice(n.origin.length)),A?rt(g,O.href,k):at(g,k)},setHeaders:()=>{},depends:w,parent(){return v.parent=!0,a()}};h=await E.universal.load.call(null,L)??null,h=h?await ut(h):null}return{node:E,loader:e,server:u,universal:E.universal?.load?{type:"data",data:h,uses:v}:null,data:h??u?.data??null,slash:E.universal?.trailingSlash??u?.slash}}function Oe(e,a,n,r,s){if(M)return!0;if(!r)return!1;if(r.parent&&e||r.route&&a||r.url&&n)return!0;for(const u of r.params)if(s[u]!==d.params[u])return!0;for(const u of r.dependencies)if(S.some(h=>h(new URL(u))))return!0;return!1}function pe(e,a){return e?.type==="data"?e:e?.type==="skip"?a??null:null}async function he({id:e,invalidating:a,url:n,params:r,route:s}){if(y?.id===e)return y.promise;const{errors:u,layouts:h,leaf:v}=s,E=[...h,v];u.forEach(R=>R?.().catch(()=>{})),E.forEach(R=>R?.[1]().catch(()=>{}));let w=null;const L=d.url?e!==d.url.pathname+d.url.search:!1,_=d.route?s.id!==d.route.id:!1;let k=!1;const g=E.map((R,T)=>{const x=d.branch[T],N=!!R?.[0]&&(x?.loader!==R[1]||Oe(k,_,L,x.server?.uses,r));return N&&(k=!0),N});if(g.some(Boolean)){try{w=await Fe(n,g)}catch(R){return oe({status:R instanceof Q?R.status:500,error:await W(R,{url:n,params:r,route:{id:s.id}}),url:n,route:s})}if(w.type==="redirect")return w}const O=w?.nodes;let z=!1;const $=E.map(async(R,T)=>{if(!R)return;const x=d.branch[T],N=O?.[T];if((!N||N.type==="skip")&&R[1]===x?.loader&&!Oe(z,_,L,x.universal?.uses,r))return x;if(z=!0,N?.type==="error")throw N;return de({loader:R[1],url:n,params:r,route:s,parent:async()=>{const me={};for(let _e=0;_e<T;_e+=1)Object.assign(me,(await $[_e])?.data);return me},server_data_node:pe(N===void 0&&R[0]?{type:"skip"}:N??null,R[0]?x?.server:void 0)})});for(const R of $)R.catch(()=>{});const D=[];for(let R=0;R<E.length;R+=1)if(E[R])try{D.push(await $[R])}catch(T){if(T instanceof qe)return{type:"redirect",location:T.location};let x=500,N;if(O?.includes(T))x=T.status??x,N=T.error;else if(T instanceof Q)x=T.status,N=T.body;else{if(await q.updated.check())return await K(n);N=await W(T,{params:r,url:n,route:{id:s.id}})}const ce=await Ue(R,D,u);return ce?await B({url:n,params:r,branch:D.slice(0,ce.idx).concat(ce.node),status:x,error:N,route:s}):await Ne(n,{id:s.id},N,x)}else D.push(void 0);return await B({url:n,params:r,branch:D,status:200,error:null,route:s,form:a?void 0:null})}async function Ue(e,a,n){for(;e--;)if(n[e]){let r=e;for(;!a[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:e,error:a,url:n,route:r}){const s={};let u=null;if(t.server_loads[0]===0)try{const w=await Fe(n,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;u=w.nodes[0]??null}catch{(n.origin!==location.origin||n.pathname!==location.pathname||U)&&await K(n)}const v=await de({loader:i,url:n,params:s,route:r,parent:()=>Promise.resolve({}),server_data_node:pe(u)}),E={node:await p(),loader:p,universal:null,server:null,data:null};return await B({url:n,params:s,branch:[v,E],status:e,error:a,route:null})}function Y(e,a){if(we(e,V))return;const n=se(e);for(const r of l){const s=r.exec(n);if(s)return{id:e.pathname+e.search,invalidating:a,route:r,params:We(s),url:e}}}function se(e){return Ye(e.pathname.slice(V.length)||"/")}function Te({url:e,type:a,intent:n,delta:r}){let s=!1;const u={from:{params:d.params,route:{id:d.route?.id??null},url:d.url},to:{params:n?.params??null,route:{id:n?.route?.id??null},url:e},willUnload:!n,type:a};r!==void 0&&(u.delta=r);const h={...u,cancel:()=>{s=!0}};return j||m.before_navigate.forEach(v=>v(h)),s?null:u}async function ie({url:e,scroll:a,keepfocus:n,redirect_chain:r,details:s,type:u,delta:h,nav_token:v={},accepted:E,blocked:w}){const L=Y(e,!1),_=Te({url:e,type:u,delta:h,intent:L});if(!_){w();return}const k=P;E(),j=!0,A&&q.navigating.set(_),te=v;let g=L&&await he(L);if(!g){if(we(e,V))return await K(e);g=await Ne(e,{id:null},await W(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=L?.url||e,te!==v)return!1;if(g.type==="redirect")if(r.length>10||r.includes(e.pathname))g=await oe({status:500,error:await W(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ae(new URL(g.location,e).href,{},[...r,e.pathname],v),!1;else g.props.page?.status>=400&&await q.updated.check()&&await K(e);if(S.length=0,M=!1,I=!0,be(k),Re(k),g.props.page?.url&&g.props.page.url.pathname!==e.pathname&&(e.pathname=g.props.page?.url.pathname),s){const $=s.replaceState?0:1;if(s.state[C]=P+=$,history[s.replaceState?"replaceState":"pushState"](s.state,"",e),!s.replaceState){let D=P+1;for(;X[D]||G[D];)delete X[D],delete G[D],D+=1}}y=null,A?(d=g.state,g.props.page&&(g.props.page.url=e),J.$set(g.props)):Pe(g);const{activeElement:O}=document;if(await ge(),b){const $=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));a?scrollTo(a.x,a.y):$?$.scrollIntoView():scrollTo(0,0)}const z=document.activeElement!==O&&document.activeElement!==document.body;!n&&!z&&await Ee(),b=!0,g.props.page&&(H=g.props.page),j=!1,m.after_navigate.forEach($=>$(_)),q.navigating.set(null),I=!1}async function Ne(e,a,n,r){return e.origin===location.origin&&e.pathname===location.pathname&&!U?await oe({status:r,error:n,url:e,route:a}):await K(e)}function K(e){return location.href=e.href,new Promise(()=>{})}function Ke(){let e;f.addEventListener("mousemove",u=>{const h=u.target;clearTimeout(e),e=setTimeout(()=>{r(h,2)},20)});function a(u){r(u.composedPath()[0],1)}f.addEventListener("mousedown",a),f.addEventListener("touchstart",a,{passive:!0});const n=new IntersectionObserver(u=>{for(const h of u)h.isIntersecting&&(re(se(new URL(h.target.href))),n.unobserve(h.target))},{threshold:0});function r(u,h){const v=$e(u,f);if(!v)return;const{url:E,external:w,download:L}=ye(v,V);if(w||L)return;const _=le(v);if(!_.reload)if(h<=_.preload_data){const k=Y(E,!1);k&&Ie(k)}else h<=_.preload_code&&re(se(E))}function s(){n.disconnect();for(const u of f.querySelectorAll("a")){const{url:h,external:v,download:E}=ye(u,V);if(v||E)continue;const w=le(u);w.reload||(w.preload_code===De.viewport&&n.observe(u),w.preload_code===De.eager&&re(se(h)))}}m.after_navigate.push(s),s()}function W(e,a){return e instanceof Q?e.body:t.hooks.handleError({error:e,event:a})??{message:a.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{xe(()=>(m.after_navigate.push(e),()=>{const a=m.after_navigate.indexOf(e);m.after_navigate.splice(a,1)}))},before_navigate:e=>{xe(()=>(m.before_navigate.push(e),()=>{const a=m.before_navigate.indexOf(e);m.before_navigate.splice(a,1)}))},disable_scroll_handling:()=>{(I||!A)&&(b=!1)},goto:(e,a={})=>ae(e,a,[]),invalidate:e=>{if(typeof e=="function")S.push(e);else{const{href:a}=new URL(e,location.href);S.push(n=>n.href===a)}return ke()},invalidate_all:()=>(M=!0,ke()),preload_data:async e=>{const a=new URL(e,je(document)),n=Y(a,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);await Ie(n)},preload_code:re,apply_action:async e=>{if(e.type==="error"){const a=new URL(location.href),{branch:n,route:r}=d;if(!r)return;const s=await Ue(d.branch.length,n,r.errors);if(s){const u=await B({url:a,params:d.params,branch:n.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:r});d=u.state,J.$set(u.props),ge().then(Ee)}}else e.type==="redirect"?ae(e.location,{invalidateAll:!0},[]):(J.$set({form:null,page:{...H,form:e.data,status:e.status}}),await ge(),J.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let a=!1;if(Ae(),!j){const n={from:{params:d.params,route:{id:d.route?.id??null},url:d.url},to:null,willUnload:!0,type:"leave",cancel:()=>a=!0};m.before_navigate.forEach(r=>r(n))}a?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ae()}),navigator.connection?.saveData||Ke(),f.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const a=$e(e.composedPath()[0],f);if(!a)return;const{url:n,external:r,target:s,download:u}=ye(a,V);if(!n)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const h=le(a);if(!(a instanceof SVGAElement)&&n.protocol!==location.protocol&&!(n.protocol==="https:"||n.protocol==="http:")||u)return;if(r||h.reload){Te({url:n,type:"link"})?j=!0:e.preventDefault();return}const[E,w]=n.href.split("#");if(w!==void 0&&E===location.href.split("#")[0]){if(F=!0,be(P),d.url=n,q.page.set({...H,url:n}),q.page.notify(),!h.replace_state)return;F=!1,e.preventDefault()}ie({url:n,scroll:h.noscroll?Z():null,keepfocus:h.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:h.replace_state??n.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),f.addEventListener("submit",e=>{if(e.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(e.target),n=e.submitter;if((n?.formMethod||a.method)!=="get")return;const s=new URL(n?.hasAttribute("formaction")&&n?.formAction||a.action);if(we(s,V))return;const u=e.target,{keep_focus:h,noscroll:v,reload:E,replace_state:w}=le(u);if(E)return;e.preventDefault(),e.stopPropagation();const L=new FormData(u),_=n?.getAttribute("name");_&&L.append(_,n?.getAttribute("value")??""),s.search=new URLSearchParams(L).toString(),ie({url:s,scroll:v?Z():null,keepfocus:h??!1,redirect_chain:[],details:{state:{},replaceState:w??s.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{if(e.state?.[C]){if(e.state[C]===P)return;const a=G[e.state[C]];if(d.url.href.split("#")[0]===location.href.split("#")[0]){G[P]=Z(),P=e.state[C],scrollTo(a.x,a.y);return}const n=e.state[C]-P;let r=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=e.state[C]},blocked:()=>{history.go(-n),r=!0},type:"popstate",delta:n}),r||Le(P)}}),addEventListener("hashchange",()=>{F&&(F=!1,history.replaceState({...history.state,[C]:++P},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&q.navigating.set(null)})},_hydrate:async({status:e=200,error:a,node_ids:n,params:r,route:s,data:u,form:h})=>{U=!0;const v=new URL(location.href);({params:r={},route:s={id:null}}=Y(v,!1)||{});let E;try{const w=n.map(async(L,_)=>{const k=u[_];return k?.uses&&(k.uses=Je(k.uses)),de({loader:t.nodes[L],url:v,params:r,route:s,parent:async()=>{const g={};for(let O=0;O<_;O+=1)Object.assign(g,(await w[O]).data);return g},server_data_node:pe(k)})});E=await B({url:v,params:r,branch:await Promise.all(w),status:e,error:a,form:h,route:l.find(({id:L})=>L===s.id)??null})}catch(w){if(w instanceof qe){await K(new URL(w.location,location.href));return}E=await oe({status:w instanceof Q?w.status:500,error:await W(w,{url:v,params:r,route:s}),url:v,route:s})}Pe(E)}}}async function Fe(t,o){const l=new URL(t);l.pathname=tt(t.pathname),l.searchParams.append(bt,o.map(p=>p?"1":"0").join(""));const i=await fe(l.href);if(!i.ok)throw new Q(i.status,await i.json());return new Promise(async p=>{const f=new Map,S=i.body.getReader(),c=new TextDecoder;function y(d){return yt(d,{Promise:U=>new Promise((A,b)=>{f.set(U,{fulfil:A,reject:b})})})}let m="";for(;;){const{done:d,value:U}=await S.read();if(d&&!m)break;for(m+=!U&&m?`
`:c.decode(U);;){const A=m.indexOf(`
`);if(A===-1)break;const b=JSON.parse(m.slice(0,A));if(m=m.slice(A+1),b.type==="redirect")return p(b);if(b.type==="data")b.nodes?.forEach(I=>{I?.type==="data"&&(I.uses=Je(I.uses),I.data=y(I.data))}),p(b);else if(b.type==="chunk"){const{id:I,data:j,error:F}=b,M=f.get(I);f.delete(I),F?M.reject(y(F)):M.fulfil(y(j))}}}})}function Je(t){return{dependencies:new Set(t?.dependencies??[]),params:new Set(t?.params??[]),parent:!!t?.parent,route:!!t?.route,url:!!t?.url}}function Ee(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,l=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),l!==null?o.setAttribute("tabindex",l):o.removeAttribute("tabindex"),new Promise(i=>{setTimeout(()=>{i(getSelection()?.removeAllRanges())})})}}async function At(t,o,l){const i=Et(t,o);ze({client:i}),l?await i._hydrate(l):i.goto(location.href,{replaceState:!0}),i._start_router()}export{At as start};