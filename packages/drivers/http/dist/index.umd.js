!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("babel-runtime/regenerator")):"function"==typeof define&&define.amd?define(["babel-runtime/regenerator"],e):t["@k-ramel/driver-http"]=e(null)}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},o=function(t){return function(e){return function(r){return function(n,o,a,i){return t.dispatch({type:"@@http/"+e+">"+r+">"+n,payload:o,status:a,fetch:i})}}}},a=function(a){var i={},u=function(u){var s,c,f=(s=t.mark(function e(s){for(var c=arguments.length,f=Array(c>2?c-2:0),d=2;d<c;d++)f[d-2]=arguments[d];var p,h,l,y,v,b,m,g,A,E,T=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=T.method,h=void 0===p?"GET":p,l=r({},i.headers,T.headers),y=r({},i,T,{headers:l}),v=o(a)(u)(h),b=void 0,m=void 0,g=[s,y].concat(n(f)),v("STARTED",void 0,void 0,g),t.prev=8,t.next=11,(A=global||window).fetch.apply(A,n(g));case 11:if(m=t.sent,b=m,!(m.headers&&m.headers.get("Content-Type")&&m.headers.get("Content-Type").includes("json"))){t.next=17;break}return t.next=16,m.json();case 16:b=t.sent;case 17:t.next=23;break;case 19:return t.prev=19,t.t0=t.catch(8),v("FAILED",t.t0,(m||{}).status,g),t.abrupt("return",t.t0);case 23:return E=m.status,v(E>=400||E<200?"FAILED":"ENDED",b,E),t.abrupt("return",b);case 26:case"end":return t.stop()}},e,void 0,[[8,19]])}),c=function(){var t=s.apply(this,arguments);return new Promise(function(e,r){return function n(o,a){try{var i=t[o](a),u=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});e(u)}("next")})},function(t){return c.apply(this,arguments)});return["GET","POST","HEAD","PUT","DELETE","OPTIONS","CONNECT"].forEach(function(t){f[t.toLowerCase()]=function(n,o){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r({},a.headers),u=a;if(o&&["object","array"].includes(void 0===o?"undefined":e(o))){var s=o;o instanceof FormData||(i["Content-Type"]=i["Content-Type"]||"application/json",s=JSON.stringify(o)),u=r({},u,{body:s})}return u=r({},u,{method:t,headers:i}),f(n,u)}}),f};return u.setCredentials=function(t){i=r({},i,{credentials:t})},u.setOptions=function(t){i=r({},t,{headers:r({},t.headers)})},u.setAuthorization=function(t){var e=r({},i.headers,{Authorization:t});return t||delete e.Authorization,u.setOptions(r({},i,{headers:e}))},u.clearAuthorization=function(){return u.setAuthorization()},u};return function(){return{getDriver:a}}});
