!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("redux-little-router"),require("redux")):"function"==typeof define&&define.amd?define(["redux-little-router","redux"],e):r["@k-ramel/driver-redux-little-router"]=e(r["redux-little-router"],r.Redux)}(this,function(r,e){"use strict";return function(t,n,u){var o=u?u(t):r.routerForBrowser(t),i=o.reducer,c=o.middleware,a=o.enhancer,f=function(e){var t=e.dispatch,u=e.getState,o=function(){return n(u())},i=function(){return o().result};return{push:function(e){return t(r.push(e))},replace:function(e){return t(r.replace(e))},go:function(e){return t(r.go(e))},goBack:function(){return t(r.goBack())},goForward:function(){return t(r.goForward())},block:function(e){return t(r.block(e))},unblock:function(){return t(r.unblock())},get:o,getRouteParam:function(r){return o().params&&o().params[r]},getQueryParam:function(r){return o().query&&o().query[r]},getResultParam:function(r){return i()&&i()[r]},getParentResultParam:function(r){return function r(e,t){if(e)return e[t]?e[t]:r(e.parent,t)}(i(),r)},isRoute:function(r){return o().route===r},isParentResultParam:function(r,e){return function r(e,t,n){return!!e&&(e[t]===n||r(e.parent,t,n))}(i(),r,e)}}};return f.getReducer=function(){return i},f.getEnhancer=function(){return e.compose(a,e.applyMiddleware(c))},f}});
//# sourceMappingURL=index.js.map
