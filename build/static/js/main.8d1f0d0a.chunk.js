(this["webpackJsonpdnsb-web"]=this["webpackJsonpdnsb-web"]||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n.n(c),s=n(68),j=n.n(s),l=n(104),i=(n(78),n(79),n(25)),o=n(11),b=n(96),d=n(97),x=function(){return Object(a.jsx)(b.a,{bg:"tomato",w:"100vw",h:"100vh",children:Object(a.jsx)(d.a,{children:"Her kommer About.."})})},h=function(){return Object(a.jsx)(d.a,{children:"Her kommer Events.."})},O=n(100),u=n(98),p=n(99),m=function(){return window.addEventListener("scroll",(function(e){for(var t=this.pageYOffset,n=document.querySelectorAll("[datatype='parallax']"),a=0;a<n.length;a++){var c=n[a],r="translate3d(0, "+-t*c.getAttribute("datadepth")+"px, 0)";c.style["-webkit-transform"]=r,c.style["-moz-transform"]=r,c.style["-ms-transform"]=r,c.style["-o-transform"]=r,c.style.transform=r}})),Object(a.jsxs)(u.a,{className:"parallax",datatype:"parallax",datadepth:"0.3",position:"relative",children:[Object(a.jsx)(u.a,{className:"parallax",children:Object(a.jsx)(b.a,{h:"70%",children:Object(a.jsx)(p.a,{size:"4xl",color:"white",children:"Det Nye Norske Storband"})})}),Object(a.jsx)(u.a,{className:"parallax band-mid",datatype:"parallax",datadepth:"0.1"}),Object(a.jsx)(u.a,{className:"parallax band-front",datatype:"parallax",datadepth:"0.5"})]})},f=function(){return Object(a.jsx)(O.a,{templateColumns:"repeat(5, 1fr)",maxW:"100%",w:"80vw",h:"100vh",position:"relative",children:Object(a.jsx)(O.b,{colSpan:5,children:Object(a.jsx)(m,{})})})},v=n(101),w=n(106),g=n(102),k=n(105),S=n(34),y=function(e){return Object(a.jsx)(v.a,{as:i.b,to:"/about",children:Object(a.jsxs)(w.a,{variant:"line",marginTop:"20px",children:[Object(a.jsx)(u.a,{w:"3em",children:Object(a.jsx)(S.b.div,{animate:{x:[-20,8,-20]},transition:{duration:3,ease:"easeInOut",loop:1/0},children:Object(a.jsx)(g.a,{as:k.a,boxSize:8})})}),e.title]})})},N=function(){return Object(a.jsxs)(O.a,{templateColumns:"repeat(2, 49vw)",maxW:"100vw",h:"100vh",children:[Object(a.jsx)(b.a,{children:Object(a.jsxs)(O.b,{w:"36vw",boxShadow:"xl",padding:"50px",children:[Object(a.jsx)(p.a,{style:{marginBottom:"20px"},children:"V\xe5r agenda"}),Object(a.jsxs)(d.a,{fontSize:"xl",style:{textAlign:"left"},children:["Det Nye Norske Storband er et jazzensemble med fokus p\xe5 \xe5 utfordre storband-formatet og sette storband tilbake p\xe5 det musikalske kartet. Ensemblet \xf8nsker \xe5 levere et musikalsk uttrykk med h\xf8y kvalitet og nyskapende kreativitet."," ",Object(a.jsx)(y,{title:"Les mer om DNSB"})]})]})}),Object(a.jsx)(O.b,{children:Object(a.jsx)(b.a,{h:"100vh",maxW:"100%"})})]})},z=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.a,{className:"hero",children:Object(a.jsx)(f,{})}),Object(a.jsx)(u.a,{className:"about-section",children:Object(a.jsx)(N,{})})]})},B=function(){return Object(a.jsx)(d.a,{children:"Her kommer Booking.."})},D=n(8),E=n(107),C=n(103),L=function(){var e=function(){var e=Object(c.useState)(null),t=Object(D.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),s=Object(D.a)(r,2),j=s[0],l=s[1],i=function(){var e=window.scrollY;0===e&&a(null),e>j?a("down"):e<j&&a("up"),l(e)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}})),n}(),t=Object(c.useState)(!0),n=Object(D.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){"down"===e&&s(!1),"up"===e&&s(!0)}),[e]),Object(a.jsx)(E.a,{in:r,children:Object(a.jsx)(C.a,{maxW:"100vw",boxShadow:"lg",style:{position:"fixed",top:0,zIndex:10,color:"white"},children:Object(a.jsxs)(O.a,{Grid:!0,templateColumns:"repeat(12, 1fr)",gap:4,h:"7vh",children:[Object(a.jsx)(O.b,{colSpan:1,children:Object(a.jsx)(b.a,{h:"7vh",children:Object(a.jsx)(v.a,{as:i.b,to:"/home",children:Object(a.jsx)(d.a,{fontSize:"2xl",children:"DNSB"})})})}),Object(a.jsx)(O.b,{colSpan:1,colStart:10,children:Object(a.jsx)(b.a,{h:"7vh",children:Object(a.jsx)(v.a,{as:i.b,to:"/about",children:Object(a.jsx)(d.a,{fontSize:"xl",children:"Om DNSB"})})})}),Object(a.jsx)(O.b,{colSpan:1,children:Object(a.jsx)(b.a,{h:"7vh",children:Object(a.jsx)(v.a,{as:i.b,to:"/events",children:Object(a.jsx)(d.a,{fontSize:"xl",children:"Arrangementer"})})})}),Object(a.jsx)(O.b,{colSpan:1,bg:"#895DD0",children:Object(a.jsx)(b.a,{h:"7vh",children:Object(a.jsx)(v.a,{as:i.b,to:"/booking",children:Object(a.jsx)(d.a,{fontSize:"xl",children:"Booking"})})})})]})})})};var A=function(){return Object(a.jsxs)(i.a,{children:[Object(a.jsx)(L,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/about",children:Object(a.jsx)(x,{})}),Object(a.jsx)(o.a,{path:"/events",children:Object(a.jsx)(h,{})}),Object(a.jsx)(o.a,{path:"/booking",children:Object(a.jsx)(B,{})}),Object(a.jsx)(o.a,{path:"/",children:Object(a.jsx)(z,{})})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};j.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(A,{})})}),document.getElementById("root")),F()}},[[85,1,2]]]);
//# sourceMappingURL=main.8d1f0d0a.chunk.js.map