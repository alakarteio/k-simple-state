!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self)["@k-ramel/driver-http"]=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(e){n(t,e,r[e])})}return t}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=function(t){return function(e){return function(n){return function(r,o,i,a){return t.dispatch({type:"@@http/".concat(e,">").concat(n,">").concat(r),payload:o,status:i,fetch:a})}}}},a=function(n){var a={},u=function(u){var c=function(){var t,c=(t=regeneratorRuntime.mark(function t(e){var c,f,s,p,l,y,d,h,b,v,m,g,O,A,w=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(c=w.length>1&&void 0!==w[1]?w[1]:{},f=c.method,s=void 0===f?"GET":f,p=r({},a.headers,c.headers),l=r({},a,c,{headers:p}),y=i(n)(u)(s),b=w.length,v=new Array(b>2?b-2:0),m=2;m<b;m++)v[m-2]=w[m];return g=[e,l].concat(v),y("STARTED",void 0,void 0,g),t.prev=8,t.next=11,(O=global||window).fetch.apply(O,o(g));case 11:if(h=t.sent,d=h,!(h.headers&&h.headers.get("Content-Type")&&h.headers.get("Content-Type").includes("json"))){t.next=17;break}return t.next=16,h.json();case 16:d=t.sent;case 17:t.next=23;break;case 19:return t.prev=19,t.t0=t.catch(8),y("FAILED",t.t0,(h||{}).status,g),t.abrupt("return",t.t0);case 23:return A=h.status,y(A>=400||A<200?"FAILED":"ENDED",d,A),t.abrupt("return",d);case 26:case"end":return t.stop()}},t,this,[[8,19]])}),function(){var n=this,r=arguments;return new Promise(function(o,i){var a=t.apply(n,r);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)})});return function(t){return c.apply(this,arguments)}}();return["GET","POST","HEAD","PATCH","PUT","DELETE","OPTIONS","CONNECT"].forEach(function(e){c[e.toLowerCase()]=function(n,o){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r({},i.headers),u=i;if(o&&["object","array"].includes(t(o))){var f=o;o instanceof FormData||(a["Content-Type"]=a["Content-Type"]||"application/json",f=JSON.stringify(o)),u=r({},u,{body:f})}return u=r({},u,{method:e,headers:a}),c(n,u)}}),c};return u.setCredentials=function(t){a=r({},a,{credentials:t})},u.setOptions=function(t){a=r({},t,{headers:r({},t.headers)})},u.setAuthorization=function(t){var e=r({},a.headers,{Authorization:t});return t||delete e.Authorization,u.setOptions(r({},a,{headers:e}))},u.clearAuthorization=function(){return u.setAuthorization()},u};return function(){return{getDriver:a}}});
