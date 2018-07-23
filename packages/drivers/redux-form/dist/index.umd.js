!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("redux-form"),require("babel-runtime/regenerator"),require("lodash")):"function"==typeof define&&define.amd?define(["redux-form","babel-runtime/regenerator","lodash"],t):r["@k-ramel/driver-redux-form"]=t(null,null,r._)}(this,function(r,t,e){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var n=function(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r},u=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},i=function(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)},o=["arrayInsert","arrayMove","arrayPop","arrayPush","arrayRemove","arrayRemoveAll","arrayShift","arraySplice","arraySwap","arrayUnshift","autofill","blur","change","clearAsyncError","clearSubmitErrors","clearFields","destroy","focus","initialize","registerField","reset","resetSection","setSubmitFailed","setSubmitSucceeded","startAsyncValidation","startSubmit","stopSubmit","stopAsyncValidation","submit","touch","unregisterField","untouch"],a=function(t){var e=t.dispatch;return function(t){return o.reduce(function(i,o){return u(n({},o,function(t,e,n){return function(){for(var u=arguments.length,i=Array(u),o=0;o<u;o++)i[o]=arguments[o];return t(r[n].apply(r,[e].concat(i)))}}(e,t,o)),i)},{})}},c=function(e,n){var u,o,a=n.dispatch,c=n.getState;return u=t.mark(function n(u){for(var o=arguments.length,s=Array(o>1?o-1:0),f=1;f<o;f++)s[f-1]=arguments[f];var l;return t.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(r.startSubmit(e)),t.next=3,u.apply(void 0,i(s));case 3:return l=t.sent,r.isSubmitting(e)(c())&&a(r.stopSubmit(e)),t.abrupt("return",l);case 6:case"end":return t.stop()}},n,void 0)}),o=function(){var r=u.apply(this,arguments);return new Promise(function(t,e){return function n(u,i){try{var o=r[u](i),a=o.value}catch(r){return void e(r)}if(!o.done)return Promise.resolve(a).then(function(r){n("next",r)},function(r){n("throw",r)});t(a)}("next")})},function(r){return o.apply(this,arguments)}},s=["getFormValues","getFormInitialValues","getFormSyncErrors","getFormMeta","getFormAsyncErrors","getFormSyncWarnings","getFormSubmitErrors","getFormError","isDirty","isPristine","isValid","isInvalid","isSubmitting","hasSubmitSucceeded","hasSubmitFailed"],f=["getFormNames"],l=function(t){return function(e){var i=e.getState;return function(e){return u({},s.reduce(function(o,a){return u(n({},a,function(t,e,n,u){return function(){return r[u](n,e)(t())}}(i,t,e,a)),o)},{}),f.reduce(function(e,o){return u(n({},o,function(){return r[o](t)(i())}),e)},{}))}}};return function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).path,n=void 0===t?"form":t;return{getDriver:function(r){return function(t){return u({},a(r)(t),l(function(r){return e.get(r,n)})(r)(t),function(r){return function(t){return{asyncSubmit:function(e){for(var n=arguments.length,u=Array(n>1?n-1:0),i=1;i<n;i++)u[i-1]=arguments[i];return c(t,r).apply(void 0,[e].concat(u))}}}}(r)(t))}},getReducer:function(){return{path:n,reducer:r.reducer}}}}});
