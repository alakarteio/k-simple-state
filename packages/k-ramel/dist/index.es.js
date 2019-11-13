import{combineReducers,applyMiddleware,compose,createStore as createStore$1}from"redux";export{applyMiddleware,compose}from"redux";import{factory}from"k-redux-factory";function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){_defineProperty(e,r,t[r])})}return e}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _iterableToArrayLimit(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return t}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var array=function(e){return _objectSpread({},e,{type:"simple.array"})},bool=function(e){return _objectSpread({},e,{type:"simple.bool"})},string=function(e){return _objectSpread({},e,{type:"simple.string"})},object=function(e){return _objectSpread({},e,{type:"simple.object"})},number=function(e){return _objectSpread({},e,{type:"simple.number"})},keyValue=function(e){return _objectSpread({},e,{type:"keyValue"})},types=Object.freeze({array:array,bool:bool,string:string,object:object,number:number,keyValue:keyValue}),getFromPath=function(e,r){return r.split(".").reduce(function(e,r){return e&&e[r]},e)},reduxFactory=function(e){return function r(t,n){if(void 0===t)return Object.keys(e).map(function(e){return _defineProperty({},e,r(e,""))}).reduce(function(e,r){return _objectSpread({},e,r)},{});var o="".concat(n?"".concat(n,"."):"").concat(t),i=getFromPath(e,o);return i.type?factory(_objectSpread({name:t,path:n,prefix:n&&n.replace(/\./g,"_")||""},i)):"function"==typeof i?i:Object.keys(i).map(function(e){return _defineProperty({},e,r(e,o))}).reduce(function(e,r){return _objectSpread({},e,r)},{})}()},withParams=["get","getBy","hasKey"],keysConfig={keyValue:[["set","add","update","addOrUpdate","remove"],["get","getBy","getKeys","getAsArray","getLength","isInitialized","getState","hasKey"]],simple:[["set","update"],["get","isInitialized"]]};keysConfig.simpleObject=keysConfig.simple,keysConfig["simple.object"]=keysConfig.simple,keysConfig["simple.array"]=keysConfig.simple,keysConfig["simple.bool"]=keysConfig.simple,keysConfig["simple.string"]=keysConfig.simple,keysConfig["simple.number"]=keysConfig.simple;var toContext=function(e,r){return function t(n,o){if(void 0===n)return Object.keys(e).map(function(e){return _defineProperty({},e,t(e,""))}).reduce(function(e,r){return _objectSpread({},e,r)},{});var i="".concat(o?"".concat(o,"."):"").concat(n),a=getFromPath(e,i);if("RESET"===n)return a;if("function"==typeof a&&void 0===a.krfType)return a;if(void 0!==a.krfType){var c=_slicedToArray(keysConfig[a.krfType],2),u=c[0],f=c[1],s=u.map(function(e){var t=a[e];return _defineProperty({},e,function(){return r.dispatch(t.apply(void 0,arguments))})}).reduce(function(e,r){return _objectSpread({},e,r)},{}),d=f.map(function(e){var t=a[e];return _defineProperty({},e,function(){return withParams.includes(e)?t.apply(void 0,arguments)(r.getState()):t(r.getState())})}).reduce(function(e,r){return _objectSpread({},e,r)},{});return Object.assign(a,s,d)}return Object.keys(a).map(function(e){return _defineProperty({},e,t(e,i))}).reduce(function(e,r){return _objectSpread({},e,r)},{})}()},TYPE="@@krml/RESET",resetFactory=function(e){return function(){return{type:TYPE,payload:e}}},addResetFactory=function(e,r){return function(t,n){var o=resetFactory(n);if(e.hideRedux){var i=o;o=function(){return r(i())}}return t.reset=o,t.RESET=TYPE,t}},addReset=function(e){return function(r,t){var n=addResetFactory(e,t.dispatch);return function e(t,o){if(void 0!==t){var i="".concat(o?"".concat(o,"."):"").concat(t),a=getFromPath(r,i);"function"!=typeof a&&"RESET"!==t&&Object.keys(a).forEach(function(r){e(r,i)}),n(a,i)}else Object.keys(r).forEach(function(r){e(r,"")})}(),n(r)}},reseter=function(e,r){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case TYPE:return r.startsWith(n.payload||"")?e(void 0,{}):t;default:return e(t,n)}}},combine=function(e){return function e(r,t){var n=Object.keys(r).map(function(n){var o=r[n],i="".concat(t?"".concat(t,"."):"").concat(n);return _defineProperty({},n,"function"==typeof o?reseter(o,i):e(o,i))}).reduce(function(e,r){return _objectSpread({},e,r)},{});return combineReducers(n)}(e,"")},getReduxDevToolsEnhancer=function(e){if("undefined"!=typeof window){var r=e.name,t=e.trace,n=e.traceLimit;return window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__({name:r,trace:t,traceLimit:n}):void 0}},getDevTools=function(e){var r=e.devtools;if(!1!==r&&(void 0!==r||"undefined"==typeof process||!process.env||"production"!==process.env.NODE_ENV))return getReduxDevToolsEnhancer(e)},listenFactory=function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>2?arguments[2]:void 0,n=[r];return{setStore:function(r){e=r},addListeners:function(e){n=[].concat(_toConsumableArray(n),[e])},removeListeners:function(e){n=n.filter(function(r){return r!==e})},enhancer:applyMiddleware(function(){return function(r){return function(o){var i=t&&o.action||o,a=r(o);return n.forEach(function(r){try{r.forEach(function(r){r(i,e,e.drivers)})}catch(r){e.dispatch({type:"@@krml/EXCEPTION",payload:{from:o,exception:r,message:r.message}})}}),a}}})}},enhanceRedux=function(e){var r=e.listeners,t=e.drivers,n=e.enhancer,o=getDevTools(e),i=listenFactory(r,t,!!o),a=[n,o,i.enhancer].filter(Boolean);return{enhancer:compose.apply(void 0,_toConsumableArray(a)),listen:i}},defaultOptions={hideRedux:!0,enhancer:void 0,init:{},listeners:void 0,devtools:void 0,trace:!1,traceLimit:25,name:"store",drivers:{}},createStore=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:defaultOptions,t=_objectSpread({},defaultOptions,r,{drivers:_objectSpread({},defaultOptions.drivers,r.drivers)}),n=t.init,o=t.hideRedux,i=t.drivers,a=_objectSpread({},e),c=[],u=[];Object.values(i).forEach(function(e){if(e.getReducer){var r=e.getReducer(),t=r.reducer,n=r.path;if(n.length)for(var o=n.split("."),i=a,f=0;f<o.length;f+=1){var s=o[f];if(f===o.length-1){i[s]=t;break}i[s]||(i[s]={}),i=i[s]}}e.getEnhancer&&c.push(e.getEnhancer()),e.init&&u.push(e.init)}),t.enhancer&&c.push(t.enhancer),t.enhancer=compose.apply(void 0,c);var f=reduxFactory(a),s=enhanceRedux(t),d=s.enhancer,p=s.listen,y=createStore$1(combine(f),n,d);f=addReset(t)(f,y),o&&(f=toContext(f,y));var l=_objectSpread({},f,y,{listeners:{add:p.addListeners,remove:p.removeListeners}});l.drivers=Object.keys(i).reduce(function(e,r){return _objectSpread({},e,_defineProperty({},r,i[r].getDriver(l)))},{});var b=l.dispatch;return l.dispatch=function(e){if("string"==typeof e)return b({type:e});for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return b.apply(void 0,[e].concat(t))},p.setStore(l),l.dispatch("@@krml/INIT"),u.forEach(function(e){return e(l)}),l},isMatching=function(e,r){return function(t){return("string"==typeof t||t instanceof String)&&e.type===t||("function"==typeof t||t instanceof Function)&&t(e,r)||t instanceof RegExp&&e.type.match(t)}},_when=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return function(t,n,o){return!!r.reduce(function(e,r){return e&&isMatching(t,n)(r)},!0)&&e(t,n,o)}}},reaction=function(e){return Object.assign(e,{when:function(){return _when.apply(void 0,arguments)(e)}})},reactions=function(e){return Object.keys(e).reduce(function(r,t){return _objectSpread({},r,_defineProperty({},t,reaction(e[t])))},{})};export{createStore,reaction,reactions,types,_when as when};
