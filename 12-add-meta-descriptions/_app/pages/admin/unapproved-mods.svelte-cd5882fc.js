import{S as e,i as t,s,e as a,j as r,c as o,a as n,m as c,d as l,b as i,f as d,o as u,x as f,u as h,v as p,k as m,l as g,$ as v,n as $,w as b,N as D,M as E,aj as x,Q as I,O as V,r as w,C as M,t as j,g as k,R as y,W as P,h as U,Y as N,ad as O,X as A}from"../../chunks/vendor-717a693c.js";import{j as T,k as _,l as q}from"../../chunks/graphql-7c12eb8b.js";import{P as L}from"../../chunks/PageControls-a345b896.js";import{b as R}from"../../chunks/paths-6758d194.js";import{M as B}from"../../chunks/MetaDescriptors-a7f74224.js";import"../../chunks/stores-ef71dba6.js";function C(e,t,s){const a=e.slice();return a[12]=t[s],a}function H(e){let t,s,m;return s=new L({props:{totalPages:Math.ceil(e[1]/F),currentPage:e[3]}}),{c(){t=a("div"),r(s.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=n(t);c(s.$$.fragment,a),a.forEach(l),this.h()},h(){i(t,"class","mt-5 ml-auto flex justify-end")},m(e,a){d(e,t,a),u(s,t,null),m=!0},p(e,t){const a={};2&t&&(a.totalPages=Math.ceil(e[1]/F)),s.$set(a)},i(e){m||(f(s.$$.fragment,e),m=!0)},o(e){h(s.$$.fragment,e),m=!1},d(e){e&&l(t),p(s)}}}function Q(e){let t,s,r,c,u,f,h,p,g,v,b,D,E=e[0].data.getUnapprovedMods.mods,x=[];for(let a=0;a<E.length;a+=1)x[a]=X(C(e,E,a));return{c(){t=a("div"),s=a("div"),r=j("Mod"),c=m(),u=a("div"),f=j("Description"),h=m(),p=a("div"),g=j("Release Date"),v=m(),b=a("div"),D=m();for(let e=0;e<x.length;e+=1)x[e].c();this.h()},l(e){t=o(e,"DIV",{class:!0});var a=n(t);s=o(a,"DIV",{});var i=n(s);r=k(i,"Mod"),i.forEach(l),c=$(a),u=o(a,"DIV",{});var d=n(u);f=k(d,"Description"),d.forEach(l),h=$(a),p=o(a,"DIV",{});var m=n(p);g=k(m,"Release Date"),m.forEach(l),v=$(a),b=o(a,"DIV",{}),n(b).forEach(l),D=$(a);for(let t=0;t<x.length;t+=1)x[t].l(a);a.forEach(l),this.h()},h(){i(t,"class","grid grid-cols-6 itemList svelte-uwb2eg")},m(e,a){d(e,t,a),y(t,s),y(s,r),y(t,c),y(t,u),y(u,f),y(t,h),y(t,p),y(p,g),y(t,v),y(t,b),y(t,D);for(let s=0;s<x.length;s+=1)x[s].m(t,null)},p(e,s){if(49&s){let a;for(E=e[0].data.getUnapprovedMods.mods,a=0;a<E.length;a+=1){const r=C(e,E,a);x[a]?x[a].p(r,s):(x[a]=X(r),x[a].c(),x[a].m(t,null))}for(;a<x.length;a+=1)x[a].d(1);x.length=E.length}},d(e){e&&l(t),O(x,e)}}}function S(e){let t,s,r,c=e[0].error.message+"";return{c(){t=a("p"),s=j("Oh no... "),r=j(c)},l(e){t=o(e,"P",{});var a=n(t);s=k(a,"Oh no... "),r=k(a,c),a.forEach(l)},m(e,a){d(e,t,a),y(t,s),y(t,r)},p(e,t){1&t&&c!==(c=e[0].error.message+"")&&U(r,c)},d(e){e&&l(t)}}}function W(e){let t,s;return{c(){t=a("p"),s=j("Loading...")},l(e){t=o(e,"P",{});var a=n(t);s=k(a,"Loading..."),a.forEach(l)},m(e,a){d(e,t,a),y(t,s)},p:A,d(e){e&&l(t)}}}function X(e){let t,s,r,c,u,f,h,p,g,v,b,D,E,x,I,V,w,M,O,A,T,_,q,L=e[12].name+"",B=e[12].short_description+"",C=e[12].created_at+"";function H(){return e[8](e[12])}function Q(){return e[9](e[12])}return{c(){t=a("div"),s=a("div"),r=j(L),c=m(),u=a("div"),f=j(B),h=m(),p=a("div"),g=j(C),v=m(),b=a("div"),D=a("button"),E=j("Approve"),x=m(),I=a("button"),V=j("Deny"),w=m(),M=a("a"),O=j("View"),T=m(),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=n(t);s=o(a,"DIV",{class:!0});var i=n(s);r=k(i,L),i.forEach(l),c=$(a),u=o(a,"DIV",{class:!0});var d=n(u);f=k(d,B),d.forEach(l),h=$(a),p=o(a,"DIV",{class:!0});var m=n(p);g=k(m,C),m.forEach(l),v=$(a),b=o(a,"DIV",{class:!0});var j=n(b);D=o(j,"BUTTON",{class:!0});var y=n(D);E=k(y,"Approve"),y.forEach(l),x=$(j),I=o(j,"BUTTON",{class:!0});var P=n(I);V=k(P,"Deny"),P.forEach(l),w=$(j),M=o(j,"A",{href:!0,class:!0});var U=n(M);O=k(U,"View"),U.forEach(l),j.forEach(l),T=$(a),a.forEach(l),this.h()},h(){i(s,"class","svelte-uwb2eg"),i(u,"class","svelte-uwb2eg"),i(p,"class","svelte-uwb2eg"),i(D,"class","py-1 px-4 rounded text-base bg-green-600 text-center cursor-pointer"),i(I,"class","py-1 px-4 rounded text-base bg-red-600 text-center cursor-pointer"),i(M,"href",A=R+"/mod/"+e[12].id),i(M,"class","py-1 px-4 rounded text-base bg-blue-500 text-center cursor-pointer"),i(b,"class","grid grid-flow-col gap-4 svelte-uwb2eg"),i(t,"class","contents itemHeader svelte-uwb2eg")},m(e,a){d(e,t,a),y(t,s),y(s,r),y(t,c),y(t,u),y(u,f),y(t,h),y(t,p),y(p,g),y(t,v),y(t,b),y(b,D),y(D,E),y(b,x),y(b,I),y(I,V),y(b,w),y(b,M),y(M,O),y(t,T),_||(q=[P(D,"click",H),P(I,"click",Q)],_=!0)},p(t,s){e=t,1&s&&L!==(L=e[12].name+"")&&U(r,L),1&s&&B!==(B=e[12].short_description+"")&&U(f,B),1&s&&C!==(C=e[12].created_at+"")&&U(g,C),1&s&&A!==(A=R+"/mod/"+e[12].id)&&i(M,"href",A)},d(e){e&&l(t),_=!1,N(q)}}}function Y(e){let t,s,m;return s=new L({props:{totalPages:Math.ceil(e[1]/F),currentPage:e[3]}}),{c(){t=a("div"),r(s.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=n(t);c(s.$$.fragment,a),a.forEach(l),this.h()},h(){i(t,"class","mt-5 ml-auto flex justify-end")},m(e,a){d(e,t,a),u(s,t,null),m=!0},p(e,t){const a={};2&t&&(a.totalPages=Math.ceil(e[1]/F)),s.$set(a)},i(e){m||(f(s.$$.fragment,e),m=!0)},o(e){h(s.$$.fragment,e),m=!1},d(e){e&&l(t),p(s)}}}function z(e){let t,s,a,o,n,i;t=new B({props:{description:"Unapproved mods",title:"Admin: Unapproved Mods"}});let D=e[1]&&H(e);function E(e,t){return e[0].fetching?W:e[0].error?S:Q}let x=E(e),I=x(e),V=e[1]&&Y(e);return{c(){r(t.$$.fragment),s=m(),D&&D.c(),a=m(),I.c(),o=m(),V&&V.c(),n=g()},l(e){const r=v('[data-svelte="svelte-59sko3"]',document.head);c(t.$$.fragment,r),r.forEach(l),s=$(e),D&&D.l(e),a=$(e),I.l(e),o=$(e),V&&V.l(e),n=g()},m(e,r){u(t,document.head,null),d(e,s,r),D&&D.m(e,r),d(e,a,r),I.m(e,r),d(e,o,r),V&&V.m(e,r),d(e,n,r),i=!0},p(e,[t]){e[1]?D?(D.p(e,t),2&t&&f(D,1)):(D=H(e),D.c(),f(D,1),D.m(a.parentNode,a)):D&&(w(),h(D,1,1,(()=>{D=null})),b()),x===(x=E(e))&&I?I.p(e,t):(I.d(1),I=x(e),I&&(I.c(),I.m(o.parentNode,o))),e[1]?V?(V.p(e,t),2&t&&f(V,1)):(V=Y(e),V.c(),f(V,1),V.m(n.parentNode,n)):V&&(w(),h(V,1,1,(()=>{V=null})),b())},i(e){i||(f(t.$$.fragment,e),f(D),f(V),i=!0)},o(e){h(t.$$.fragment,e),h(D),h(V),i=!1},d(e){p(t),e&&l(s),D&&D.d(e),e&&l(a),I.d(e),e&&l(o),V&&V.d(e),e&&l(n)}}}const F=20;function G(e,t,s){let a;var r,o;const n=D(T,{filter:{offset:0,limit:F}});E(e,n,(e=>s(0,a=e)));const c=M(1);let l;c.subscribe((e=>x(n,a.variables.filter.offset=(e-1)*F,a)));const i=I({query:_}),d=e=>{i({modId:e}).then((()=>{n.reexecute()}))},u=I({query:q}),f=e=>{u({modId:e}).then((()=>{n.reexecute()}))};V(n);return e.$$.update=()=>{193&e.$$.dirty&&s(1,l=null===s(7,o=null===s(6,r=null==a?void 0:a.data)||void 0===r?void 0:r.getUnapprovedMods)||void 0===o?void 0:o.count)},[a,l,n,c,d,f,r,o,e=>d(e.id),e=>f(e.id)]}class J extends e{constructor(e){super(),t(this,e,G,z,s,{})}}export{J as default};
//# sourceMappingURL=unapproved-mods.svelte-cd5882fc.js.map
