!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("fbjs/lib/shallowEqual")):"function"==typeof define&&define.amd?define(["exports","react","fbjs/lib/shallowEqual"],e):e((t=t||self)["@k-ramel/react"]={},t.React,t["fbjs/lib/shallowEqual"])}(this,function(t,e,n){"use strict";var r="default"in e?e.default:e;function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?d(t):e}n=n&&n.hasOwnProperty("default")?n.default:n;var b=function(t){return t.displayName||t.name||t.constructor&&t.constructor.name||"Unknown"},v={},m=function(t){return Object.keys(t).reduce(function(e,n){var r=t[n];return"function"==typeof r?e:f({},e,u({},n,r))},v)},j=[];t.inject=function(t){return function(i){var a=function(a){function h(e,n){var r;return o(this,h),u(d(r=y(this,p(h).call(this,e,n))),"inject",function(e){r.store&&(r.setState(function(n){return f({},n,{injectedProps:t&&t(r.store,e||r.props,r.store.drivers)||v})}),r.reduxState=r.store.getState())}),r.first=!0,r.reduxState=void 0,r.state={injectedProps:{}},r}return l(h,e.Component),c(h,[{key:"UNSAFE_componentWillMount",value:function(){var t=this,e=this.context.store;if(e)this.store=e,this.inject(),this.unsubscribe=e.subscribe(function(){t.store&&t.reduxState===t.store.getState()||t.inject()});else{var n="font-weight: bolder; font-style: italic;";console.error("[k-ramel/react] Error in %cinject%c for the component %c".concat(b(i),"%c\n")+"\t> The store needs to be provided by an ancestor of this component.\n\t> You can use %cprovider%c from %c@k-ramel/react%c or %cProvider%c from %creact-redux%c.\n\nCheck the documentation for an example at https://github.com/alakarteio/k-ramel#connect-it-with-reactjs\n",n,"",n,"",n,"",n,"",n,"",n,"")}}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){n(this.props,t)||this.inject(t)}},{key:"shouldComponentUpdate",value:function(t,e){if(this.first)return!0;var r=this.state.injectedProps;return!(n(this.props,t)&&n(m(e.injectedProps),m(r)))}},{key:"componentWillUnmount",value:function(){this.store=void 0,this.unsubscribe()}},{key:"render",value:function(){this.first&&(this.first=!1);var t=this.state.injectedProps;return r.createElement(i,s({},this.props,t))}}]),h}();return a.displayName="inject(".concat(b(i),")"),a.contextTypes={store:function(){return null}},a}},t.listen=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;return function(i){var u=function(t){var e="".concat(t?">":"").concat(t||"");return function(t){return"@@krml/LISTENERS>".concat(t).concat(e)}}(n),s=function(n){function s(){return o(this,s),y(this,p(s).apply(this,arguments))}return l(s,e.Component),c(s,[{key:"UNSAFE_componentWillMount",value:function(){var e=this.context.store;e.listeners.add(t),e.dispatch(u("ADDED"))}},{key:"componentWillUnmount",value:function(){var e=this.context.store;e.dispatch(u("REMOVING")),e.listeners.remove(t)}},{key:"render",value:function(){return r.createElement(i,this.props)}}]),s}();return s.displayName="listen(".concat(b(i),")"),s.contextTypes={store:function(){return null}},s}},t.provider=function(t){return function(n){var i=function(i){function u(){return o(this,u),y(this,p(u).apply(this,arguments))}return l(u,e.Component),c(u,[{key:"getChildContext",value:function(){return{store:t}}},{key:"render",value:function(){return r.createElement(n,this.props)}}]),u}();return i.displayName="provider(".concat(b(n),")"),i.childContextTypes={store:function(){return null}},i}},Object.defineProperty(t,"__esModule",{value:!0})});
