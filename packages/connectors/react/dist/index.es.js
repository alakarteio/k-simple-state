import React,{Component}from"react";import shallowEqual from"fbjs/lib/shallowEqual";var getWrappedDisplayName=function(t){return t.displayName||t.name||t.constructor&&t.constructor.name||"Unknown"},classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),defineProperty=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},defaultObject={},withoutFunctions=function(t){return Object.keys(t).reduce(function(e,n){var r=t[n];return"function"==typeof r?e:_extends({},e,defineProperty({},n,r))},defaultObject)},inject=function(t){return function(e){var n,r;return r=n=function(n){function r(e,n){classCallCheck(this,r);var o=possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,n));return o.inject=function(e){o.store&&o.setState(function(n){return _extends({},n,{injectedProps:t&&t(o.store,e||o.props,o.store.drivers)||defaultObject})})},o.first=!0,o.state={injectedProps:{}},o}return inherits(r,Component),createClass(r,[{key:"componentWillMount",value:function(){var t=this,n=this.context.store;if(n)this.store=n,this.inject(),this.unsubscribe=n.subscribe(function(){t.inject()});else{var r="font-weight: bolder; font-style: italic;";console.error("[k-ramel/react] Error in %cinject%c for the component %c"+getWrappedDisplayName(e)+"%c\n\t> The store needs to be provided by an ancestor of this component.\n\t> You can use %cprovider%c from %c@k-ramel/react%c or %cProvider%c from %creact-redux%c.\n\nCheck the documentation for an example at https://github.com/alakarteio/k-ramel#connect-it-with-reactjs\n",r,"",r,"",r,"",r,"",r,"",r,"")}}},{key:"componentWillReceiveProps",value:function(t){this.inject(t)}},{key:"shouldComponentUpdate",value:function(t,e){if(this.first)return!0;var n=this.state.injectedProps;return!(shallowEqual(this.props,t)&&shallowEqual(withoutFunctions(e.injectedProps),withoutFunctions(n)))}},{key:"componentWillUnmount",value:function(){this.store=void 0,this.unsubscribe()}},{key:"render",value:function(){this.first&&(this.first=!1);var t=this.state.injectedProps;return React.createElement(e,_extends({},this.props,t))}}]),r}(),n.displayName="inject("+getWrappedDisplayName(e),n.contextTypes={store:function(){return null}},r}},provider=function(t){return function(e){var n,r;return r=n=function(n){function r(){return classCallCheck(this,r),possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return inherits(r,Component),createClass(r,[{key:"getChildContext",value:function(){return{store:t}}},{key:"componentWillMount",value:function(){t.dispatch("@@krml/INIT")}},{key:"render",value:function(){return React.createElement(e,this.props)}}]),r}(),n.displayName="provider("+getWrappedDisplayName(e)+")",n.childContextTypes={store:function(){return null}},r}},defaultListeners=[],toActionFactory=function(t){var e=(t?">":"")+(t||"");return function(t){return"@@krml/LISTENERS>"+t+e}},listen=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:defaultListeners,e=arguments[1];return function(n){var r,o,i=toActionFactory(e);return o=r=function(e){function r(){return classCallCheck(this,r),possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return inherits(r,Component),createClass(r,[{key:"componentWillMount",value:function(){var e=this.context.store;e.listeners.add(t),e.dispatch(i("ADDED"))}},{key:"componentWillUnmount",value:function(){var e=this.context.store;e.dispatch(i("REMOVING")),e.listeners.remove(t)}},{key:"render",value:function(){return React.createElement(n,this.props)}}]),r}(),r.displayName="listen("+getWrappedDisplayName(n),r.contextTypes={store:function(){return null}},o}};export{inject,provider,listen};
