(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6722],{2077:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generators/hash",function(){return e(3383)}])},3383:function(t,n,e){"use strict";e.r(n);var r=e(4051),o=e.n(r),a=e(5893),u=e(7294),i=e(2688),c=e(1132),s=e(9216),l=e(4361),f=e(5317),p=e(8495),y=e.n(p);function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function h(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(s){return void e(s)}i.done?n(c):Promise.resolve(c).then(r,o)}function v(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,a=[],u=!0,i=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(t){return Array.from(new Uint8Array(t)).map((function(t){return t.toString(16).padStart(2,"0")})).join("")},x=function(){var t,n=(t=o().mark((function t(n,e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=y()(n),t.t1=b,t.next=4,crypto.subtle.digest("SHA-1",n);case 4:return t.t2=t.sent,t.t3=(0,t.t1)(t.t2),t.t4=b,t.next=9,crypto.subtle.digest("SHA-256",n);case 9:return t.t5=t.sent,t.t6=(0,t.t4)(t.t5),t.t7=b,t.next=14,crypto.subtle.digest("SHA-512",n);case 14:if(t.t8=t.sent,t.t9=(0,t.t7)(t.t8),r=[t.t0,t.t3,t.t6,t.t9],!e){t.next=19;break}return t.abrupt("return",r.map((function(t){return t.toUpperCase()})));case 19:return t.abrupt("return",r);case 20:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function u(t){h(a,r,o,u,i,"next",t)}function i(t){h(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t,e){return n.apply(this,arguments)}}();n.default=function(){var t=v((0,i._)("hash-caps",!1),2),n=t[0],e=t[1],r=(0,u.useState)(""),o=r[0],p=r[1],y=(0,u.useState)(["","","",""]),d=y[0],h=y[1];return(0,u.useEffect)((function(){x(function(t){return(new TextEncoder).encode(t).buffer}(o),n).then(h)}),[o,n]),(0,a.jsxs)(c.Z,{title:"Hash Generator",children:[(0,a.jsx)(s.Z,{type:"config",items:[{icon:f.nAh,name:"Uppercase",description:"Show alphabetical digits as capital letters",control:(0,a.jsx)(l.ZD,{checked:n,onChange:function(t){return e(t.target.checked)}})}]}),(0,a.jsx)(s.Z,{title:"Input",controls:[{type:"file",callback:function(t){return p(t)}},{type:"clear",onClick:function(){return p("")}}],body:(0,a.jsx)(l.Kx,{value:o,onChange:function(t){return p(t.target.value)},rows:6})}),(0,a.jsx)(s.Z,{type:"inline",title:"MD5",controls:[{type:"copy",data:d[0]}],body:(0,a.jsx)(l.nv,{value:d[0],disabled:!0})}),(0,a.jsx)(s.Z,{type:"inline",title:"SHA1",controls:[{type:"copy",data:d[1]}],body:(0,a.jsx)(l.nv,{value:d[1],disabled:!0})}),(0,a.jsx)(s.Z,{type:"inline",title:"SHA256",controls:[{type:"copy",data:d[2]}],body:(0,a.jsx)(l.nv,{value:d[2],disabled:!0})}),(0,a.jsx)(s.Z,{type:"inline",title:"SHA512",controls:[{type:"copy",data:d[3]}],body:(0,a.jsx)(l.nv,{value:d[3],disabled:!0})})]})}}},function(t){t.O(0,[7702,3534,9922,8495,7278,9774,2888,179],(function(){return n=2077,t(t.s=n);var n}));var n=t.O();_N_E=n}]);