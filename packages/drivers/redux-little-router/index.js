!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("redux-little-router")):"function"==typeof define&&define.amd?define(["redux-little-router"],r):t["@k-ramel/driver-redux-little-router"]=r(t["redux-little-router"])}(this,function(t){"use strict";return function(r){return function(e){var n=e.dispatch,u=e.getState;return{push:function(r){return n(t.push(r))},replace:function(r){return n(t.replace(r))},go:function(r){return n(t.go(r))},goBack:function(){return n(t.goBack())},goForward:function(){return n(t.goForward())},block:function(r){return n(t.block(r))},unblock:function(){return n(t.unblock())},getState:function(){return r(u())},getRouteParam:function(t){return r(u()).params&&r(u()).params[t]},getQueryParam:function(t){return r(u()).query&&r(u()).query[t]},getResultParam:function(t){return r(u()).result&&r(u()).result[t]},getParentResultParam:function(t){return function t(r,e){if(r)return r[e]?r[e]:t(r.parent,e)}(r(u()).result,t)},isRoute:function(t){return r(u()).route===t},isParentResultParam:function(t,e){return function t(r,e,n){return!!r&&(r[e]===n||t(r.parent,e,n))}(r(u()).result,t,e)}}}}});
//# sourceMappingURL=index.js.map
