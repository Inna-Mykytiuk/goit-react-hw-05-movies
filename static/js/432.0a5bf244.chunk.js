"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[432],{3225:function(n,e,t){t.d(e,{Fg:function(){return h},HC:function(){return b},NZ:function(){return f},PP:function(){return d},aV:function(){return g},yM:function(){return x}});var r,o,a,i,c,u,s=t(168),p=t(6444),l=t(1087),d=p.ZP.section(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  padding-right: 50px;\n  padding-left: 50px;\n"]))),f=p.ZP.h2(o||(o=(0,s.Z)(["\n  font-size: 40px;\n  font-weight: 900;\n  text-align: center;\n\n  color: #e4c3ad;\n  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,\n    rgba(0, 0, 0, 0.5) 1px 1px 1px;\n  margin: 0;\n  text-shadow: 0 0 15px #eb9486;\n"]))),x=p.ZP.section(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),g=p.ZP.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  list-style: none;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 15px;\n  color: #000;\n\n  height: 100%;\n  background: rgba(110, 110, 110, 0.25);\n  -webkit-box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n\n  padding-left: 40px;\n  padding-right: 40px;\n"]))),b=p.ZP.li(c||(c=(0,s.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),h=(0,p.ZP)(l.rU)(u||(u=(0,s.Z)(["\n  font-size: 20px;\n  color: #000;\n  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,\n    rgba(0, 0, 0, 0.5) 1px 1px 1px;\n\n  color: #e4c3ad;\n\n  &:hover,\n  &:focus {\n    color: #eb9486;\n    text-shadow: 0 0 15px #eb9486;\n  }\n"])))},3432:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,o,a,i=t(5861),c=t(9439),u=t(7757),s=t.n(u),p=t(2791),l=t(1087),d=t(7689),f=t(9014),x=t(4390),g=t(168),b=t(6444),h=b.ZP.form(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  text-align: center;\n"]))),m=b.ZP.input(o||(o=(0,g.Z)(["\n  position: relative;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.14;\n  color: #e4c3ad;\n  width: 280px;\n  position: relative;\n  border-bottom: 0.5px solid #e4c3ad;\n\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  outline: 0;\n  background: transparent;\n\n  padding: 10px 10px;\n\n  &:focus-within {\n    border-bottom: 1px solid #eb9486;\n    box-shadow: 0 0 15px #eb9486;\n    border-radius: 5px;\n  }\n\n  /* @include tablet {\n    width: 336px;\n  }\n\n  @include desktop {\n    width: 394px;\n  } */\n  &::placeholder {\n    color: #e4c3ad;\n  }\n"]))),v=b.ZP.button(a||(a=(0,g.Z)(["\n  /* position: absolute; */\n  /* bottom: 10px; */\n  /* right: 10px; */\n  background-color: transparent;\n  border: none;\n\n  /* padding: 8px 18px; */\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out, color 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    /* background-color: #0d57aa; */\n    color: #eb9486;\n    fill: #eb9486;\n    stroke: #eb9486;\n  }\n"]))),w=t(3853),Z=t(184),y=function(n){var e=n.onSubmit;return(0,Z.jsxs)(h,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value;t?(e(t),n.target.reset()):f.Am.error("Please enter something")},children:[(0,Z.jsx)(m,{name:"query",type:"text",placeholder:"Search movies"}),(0,Z.jsx)(v,{type:"submit",children:(0,Z.jsx)(w.jRj,{size:20,color:"#e4c3ad"})})]})},k=t(3225),j=function(){var n=(0,p.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,l.lr)(),a=(0,c.Z)(o,2),u=a[0],g=a[1],b=(0,d.TH)();(0,p.useEffect)((function(){var n,e=null!==(n=u.get("query"))&&void 0!==n?n:"";if(e){var t=function(){var n=(0,i.Z)(s().mark((function n(){var t,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.E3)(e);case 3:t=n.sent,0===(o=t.results).length?(f.Am.dismiss(),f.Am.error("No movies found"),r([])):r(o),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),f.Am.error(n.t0.message),r([]);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();t()}}),[u]);return(0,Z.jsx)("main",{children:(0,Z.jsxs)(k.yM,{children:[(0,Z.jsx)(k.NZ,{children:"Movies Page"}),(0,Z.jsx)(y,{onSubmit:function(n){g({query:n})}})," ",(0,Z.jsx)(k.aV,{children:t.map((function(n){return(0,Z.jsx)(k.HC,{children:(0,Z.jsx)(k.Fg,{to:"/movies/".concat(n.id),state:{from:b},children:n.title})},n.id)}))})]})})}},4390:function(n,e,t){t.d(e,{E3:function(){return p},Hx:function(){return f},Mc:function(){return l},_k:function(){return s},uV:function(){return d}});var r=t(5861),o=t(7757),a=t.n(o),i=t(1243),c="https://api.themoviedb.org",u="db5c04dbd9637821020050cea594d5e0",s=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,t=e.data,console.log(t),n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/3/movie/").concat(e,"}/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=432.0a5bf244.chunk.js.map