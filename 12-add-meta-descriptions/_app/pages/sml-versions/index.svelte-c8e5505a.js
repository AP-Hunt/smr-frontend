import{S as s,i as e,s as t,e as a,j as r,c as n,a as l,m as o,d as c,b as i,f as h,o as d,x as f,u,v as m,k as v,l as p,$ as g,n as $,w as V,N as b,M as k,aj as E,O as D,r as I,C as M,t as y,g as j,R as w,W as S,h as x,al as P,am as L,ad as N,X as R,an as _,ao as C}from"../../chunks/vendor-717a693c.js";import{f as O}from"../../chunks/graphql-7c12eb8b.js";import{P as G}from"../../chunks/PageControls-a345b896.js";import{m as q}from"../../chunks/markdown-5153303f.js";import{M as A}from"../../chunks/MetaDescriptors-a7f74224.js";import"../../chunks/stores-ef71dba6.js";import"../../chunks/paths-6758d194.js";function W(s,e,t){const a=s.slice();return a[9]=e[t],a}function X(s){let e,t,v;return t=new G({props:{totalPages:Math.ceil(s[2]/Z),currentPage:s[4]}}),{c(){e=a("div"),r(t.$$.fragment),this.h()},l(s){e=n(s,"DIV",{class:!0});var a=l(e);o(t.$$.fragment,a),a.forEach(c),this.h()},h(){i(e,"class","mt-5 ml-auto flex justify-end")},m(s,a){h(s,e,a),d(t,e,null),v=!0},p(s,e){const a={};4&e&&(a.totalPages=Math.ceil(s[2]/Z)),t.$set(a)},i(s){v||(f(t.$$.fragment,s),v=!0)},o(s){u(t.$$.fragment,s),v=!1},d(s){s&&c(e),m(t)}}}function z(s){let e,t,r,o,d,f,u,m,p,g,V,b,k,E,D,I=s[0].data.getSMLVersions.sml_versions,M=[];for(let a=0;a<I.length;a+=1)M[a]=T(W(s,I,a));return{c(){e=a("div"),t=a("div"),r=y("Version"),o=v(),d=a("div"),f=y("Stability"),u=v(),m=a("div"),p=y("Game Version"),g=v(),V=a("div"),b=y("Release Date"),k=v(),E=a("div"),D=v();for(let s=0;s<M.length;s+=1)M[s].c();this.h()},l(s){e=n(s,"DIV",{class:!0});var a=l(e);t=n(a,"DIV",{});var i=l(t);r=j(i,"Version"),i.forEach(c),o=$(a),d=n(a,"DIV",{});var h=l(d);f=j(h,"Stability"),h.forEach(c),u=$(a),m=n(a,"DIV",{});var v=l(m);p=j(v,"Game Version"),v.forEach(c),g=$(a),V=n(a,"DIV",{});var I=l(V);b=j(I,"Release Date"),I.forEach(c),k=$(a),E=n(a,"DIV",{}),l(E).forEach(c),D=$(a);for(let e=0;e<M.length;e+=1)M[e].l(a);a.forEach(c),this.h()},h(){i(e,"class","grid grid-cols-6 versions svelte-1e74345")},m(s,a){h(s,e,a),w(e,t),w(t,r),w(e,o),w(e,d),w(d,f),w(e,u),w(e,m),w(m,p),w(e,g),w(e,V),w(V,b),w(e,k),w(e,E),w(e,D);for(let t=0;t<M.length;t+=1)M[t].m(e,null)},p(s,t){if(35&t){let a;for(I=s[0].data.getSMLVersions.sml_versions,a=0;a<I.length;a+=1){const r=W(s,I,a);M[a]?M[a].p(r,t):(M[a]=T(r),M[a].c(),M[a].m(e,null))}for(;a<M.length;a+=1)M[a].d(1);M.length=I.length}},d(s){s&&c(e),N(M,s)}}}function B(s){let e,t,r,o=s[0].error.message+"";return{c(){e=a("p"),t=y("Oh no... "),r=y(o)},l(s){e=n(s,"P",{});var a=l(e);t=j(a,"Oh no... "),r=j(a,o),a.forEach(c)},m(s,a){h(s,e,a),w(e,t),w(e,r)},p(s,e){1&e&&o!==(o=s[0].error.message+"")&&x(r,o)},d(s){s&&c(e)}}}function F(s){let e,t;return{c(){e=a("p"),t=y("Loading...")},l(s){e=n(s,"P",{});var a=l(e);t=j(a,"Loading..."),a.forEach(c)},m(s,a){h(s,e,a),w(e,t)},p:R,d(s){s&&c(e)}}}function H(s){let e,t,r,o={ctx:s,current:null,token:null,hasCatch:!1,pending:Q,then:K,catch:J,value:12};return P(t=q(s[9].changelog),o),{c(){e=a("div"),o.block.c(),r=v(),this.h()},l(s){e=n(s,"DIV",{class:!0});var t=l(e);o.block.l(t),r=$(t),t.forEach(c),this.h()},h(){i(e,"class","col-span-5 p-2 markdown-content")},m(s,t){h(s,e,t),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=r,w(e,r)},p(e,a){s=e,o.ctx=s,1&a&&t!==(t=q(s[9].changelog))&&P(t,o)||L(o,s,a)},d(s){s&&c(e),o.block.d(),o.token=null,o=null}}}function J(s){return{c:R,l:R,m:R,p:R,d:R}}function K(s){let e,t,a=s[12]+"";return{c(){e=new _,t=p(),this.h()},l(s){e=C(s),t=p(),this.h()},h(){e.a=t},m(s,r){e.m(a,s,r),h(s,t,r)},p(s,t){1&t&&a!==(a=s[12]+"")&&e.p(a)},d(s){s&&c(t),s&&e.d()}}}function Q(s){return{c:R,l:R,m:R,p:R,d:R}}function T(s){let e,t,r,o,d,f,u,m,g,V,b,k,E,D,I,M,P,L,N,R,_,C=s[9].version+"",O=s[9].stability+"",G=s[9].satisfactory_version+"",q=s[9].date+"",A=s[1].has(s[9].id);function W(){return s[8](s[9])}let X=A&&H(s);return{c(){e=a("div"),t=a("div"),r=y(C),o=v(),d=a("div"),f=y(O),u=v(),m=a("div"),g=y(G),V=v(),b=a("div"),k=y(q),E=v(),D=a("div"),I=a("a"),M=y("View"),L=v(),X&&X.c(),N=p(),this.h()},l(s){e=n(s,"DIV",{class:!0});var a=l(e);t=n(a,"DIV",{class:!0});var i=l(t);r=j(i,C),i.forEach(c),o=$(a),d=n(a,"DIV",{class:!0});var h=l(d);f=j(h,O),h.forEach(c),u=$(a),m=n(a,"DIV",{class:!0});var v=l(m);g=j(v,G),v.forEach(c),V=$(a),b=n(a,"DIV",{class:!0});var y=l(b);k=j(y,q),y.forEach(c),E=$(a),D=n(a,"DIV",{class:!0});var w=l(D);I=n(w,"A",{href:!0,class:!0});var S=l(I);M=j(S,"View"),S.forEach(c),w.forEach(c),a.forEach(c),L=$(s),X&&X.l(s),N=p(),this.h()},h(){i(t,"class","svelte-1e74345"),i(d,"class","svelte-1e74345"),i(m,"class","svelte-1e74345"),i(b,"class","svelte-1e74345"),i(I,"href",P=s[9].link),i(I,"class","py-1 px-4 rounded text-base bg-blue-500 text-center"),i(D,"class","grid grid-flow-col gap-4 svelte-1e74345"),i(e,"class","contents version-header svelte-1e74345")},m(s,a){h(s,e,a),w(e,t),w(t,r),w(e,o),w(e,d),w(d,f),w(e,u),w(e,m),w(m,g),w(e,V),w(e,b),w(b,k),w(e,E),w(e,D),w(D,I),w(I,M),h(s,L,a),X&&X.m(s,a),h(s,N,a),R||(_=S(e,"click",W),R=!0)},p(e,t){s=e,1&t&&C!==(C=s[9].version+"")&&x(r,C),1&t&&O!==(O=s[9].stability+"")&&x(f,O),1&t&&G!==(G=s[9].satisfactory_version+"")&&x(g,G),1&t&&q!==(q=s[9].date+"")&&x(k,q),1&t&&P!==(P=s[9].link)&&i(I,"href",P),3&t&&(A=s[1].has(s[9].id)),A?X?X.p(s,t):(X=H(s),X.c(),X.m(N.parentNode,N)):X&&(X.d(1),X=null)},d(s){s&&c(e),s&&c(L),X&&X.d(s),s&&c(N),R=!1,_()}}}function U(s){let e,t,v;return t=new G({props:{totalPages:Math.ceil(s[2]/Z),currentPage:s[4]}}),{c(){e=a("div"),r(t.$$.fragment),this.h()},l(s){e=n(s,"DIV",{class:!0});var a=l(e);o(t.$$.fragment,a),a.forEach(c),this.h()},h(){i(e,"class","mt-5 ml-auto flex justify-end")},m(s,a){h(s,e,a),d(t,e,null),v=!0},p(s,e){const a={};4&e&&(a.totalPages=Math.ceil(s[2]/Z)),t.$set(a)},i(s){v||(f(t.$$.fragment,s),v=!0)},o(s){u(t.$$.fragment,s),v=!1},d(s){s&&c(e),m(t)}}}function Y(s){let e,t,a,n,l,i;e=new A({props:{description:"Versions of the Satisfactory Mod Loader",title:"Satisfactory Mod Loader versions"}});let b=s[2]&&X(s);function k(s,e){return s[0].fetching?F:s[0].error?B:z}let E=k(s),D=E(s),M=s[2]&&U(s);return{c(){r(e.$$.fragment),t=v(),b&&b.c(),a=v(),D.c(),n=v(),M&&M.c(),l=p(),this.h()},l(s){const r=g('[data-svelte="svelte-14lr77p"]',document.head);o(e.$$.fragment,r),r.forEach(c),t=$(s),b&&b.l(s),a=$(s),D.l(s),n=$(s),M&&M.l(s),l=p(),this.h()},h(){document.title="SML Versions - SMR"},m(s,r){d(e,document.head,null),h(s,t,r),b&&b.m(s,r),h(s,a,r),D.m(s,r),h(s,n,r),M&&M.m(s,r),h(s,l,r),i=!0},p(s,[e]){s[2]?b?(b.p(s,e),4&e&&f(b,1)):(b=X(s),b.c(),f(b,1),b.m(a.parentNode,a)):b&&(I(),u(b,1,1,(()=>{b=null})),V()),E===(E=k(s))&&D?D.p(s,e):(D.d(1),D=E(s),D&&(D.c(),D.m(n.parentNode,n))),s[2]?M?(M.p(s,e),4&e&&f(M,1)):(M=U(s),M.c(),f(M,1),M.m(l.parentNode,l)):M&&(I(),u(M,1,1,(()=>{M=null})),V())},i(s){i||(f(e.$$.fragment,s),f(b),f(M),i=!0)},o(s){u(e.$$.fragment,s),u(b),u(M),i=!1},d(s){m(e),s&&c(t),b&&b.d(s),s&&c(a),D.d(s),s&&c(n),M&&M.d(s),s&&c(l)}}}const Z=20;function ss(s,e,t){let a;var r,n;let l=new Set;const o=b(O,{offset:0,limit:Z});k(s,o,(s=>t(0,a=s)));const c=M(1);let i;c.subscribe((s=>E(o,a.variables.offset=(s-1)*Z,a))),D(o);const h=s=>{l.has(s)?l.delete(s):l.add(s),t(1,l)};return s.$$.update=()=>{193&s.$$.dirty&&t(2,i=null===t(7,n=null===t(6,r=null==a?void 0:a.data)||void 0===r?void 0:r.getSMLVersions)||void 0===n?void 0:n.count)},[a,l,i,o,c,h,r,n,s=>h(s.id)]}class es extends s{constructor(s){super(),e(this,s,ss,Y,t,{})}}export{es as default};
//# sourceMappingURL=index.svelte-c8e5505a.js.map
