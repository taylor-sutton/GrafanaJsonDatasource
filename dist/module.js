define(["app/plugins/sdk"],function(t){return n={},e.m=r=[function(t,e,r){var n=r(15),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},function(t,e,r){var n=r(38),o=r(44);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e,r){var n=r(28),o=r(29),a=r(30),i=r(31),u=r(32);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,t.exports=c},function(t,e,r){var n=r(13);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e,r){var n=r(10),o=r(40),a=r(41),i=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},function(t,e,r){var n=r(1)(Object,"create");t.exports=n},function(t,e,r){var n=r(53);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){var n=r(1)(r(0),"Map");t.exports=n},function(t,e,r){var n=r(0).Symbol;t.exports=n},function(t,e){var r=Array.isArray;t.exports=r},function(t,e){t.exports=function(t){return void 0===t}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(4),o=r(8);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(39))},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,r){var n=r(45),o=r(52),a=r(54),i=r(55),u=r(56);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,t.exports=c},function(t,e,r){var n=r(57),o=r(60),a=r(61);t.exports=function(t,e,r,i,u,c){var s=1&r,f=t.length,p=e.length;if(f!=p&&!(s&&f<p))return!1;var l=c.get(t);if(l&&c.get(e))return l==e;var h=-1,v=!0,y=2&r?new n:void 0;for(c.set(t,e),c.set(e,t);++h<f;){var d=t[h],b=e[h];if(i)var _=s?i(b,d,h,e,t,c):i(d,b,h,t,e,c);if(void 0!==_){if(_)continue;v=!1;break}if(y){if(!o(e,function(t,e){if(!a(y,e)&&(d===t||u(d,t,r,i,c)))return y.push(e)})){v=!1;break}}else if(d!==b&&!u(d,b,r,i,c)){v=!1;break}}return c.delete(t),c.delete(e),v}},function(t,e,r){(function(t){var n=r(0),o=r(78),a=e&&!e.nodeType&&e,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===a?n.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;t.exports=c}).call(this,r(20)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){var n=r(80),o=r(81),a=r(82),i=a&&a.isTypedArray,u=i?o(i):n;t.exports=u},function(t,e){t.exports=function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991}},function(t,e,r){var n=r(25);t.exports=function(t,e){return n(t,e)}},function(e,r){e.exports=t},function(t,e,r){var n=r(26),o=r(7);t.exports=function t(e,r,a,i,u){return e===r||(null==e||null==r||!o(e)&&!o(r)?e!=e&&r!=r:n(e,r,a,i,t,u))}},function(t,e,r){var n=r(27),o=r(18),a=r(62),i=r(66),u=r(88),c=r(11),s=r(19),f=r(21),p="[object Arguments]",l="[object Array]",h="[object Object]",v=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,y,d,b){var _=c(t),g=c(e),x=_?l:u(t),j=g?l:u(e),m=(x=x==p?h:x)==h,O=(j=j==p?h:j)==h,w=x==j;if(w&&s(t)){if(!s(e))return!1;m=!(_=!0)}if(w&&!m)return b=b||new n,_||f(t)?o(t,e,r,y,d,b):a(t,e,x,r,y,d,b);if(!(1&r)){var S=m&&v.call(t,"__wrapped__"),P=O&&v.call(e,"__wrapped__");if(S||P)return d(S?t.value():t,P?e.value():e,r,y,b=b||new n)}return w&&(b=b||new n,i(t,e,r,y,d,b))}},function(t,e,r){var n=r(2),o=r(33),a=r(34),i=r(35),u=r(36),c=r(37);function s(t){var e=this.__data__=new n(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=a,s.prototype.get=i,s.prototype.has=u,s.prototype.set=c,t.exports=s},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(3),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},function(t,e,r){var n=r(3);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(3);t.exports=function(t){return-1<n(this.__data__,t)}},function(t,e,r){var n=r(3);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},function(t,e,r){var n=r(2);t.exports=function(){this.__data__=new n,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,r){var n=r(2),o=r(9),a=r(17);t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var i=r.__data__;if(!o||i.length<199)return i.push([t,e]),this.size=++r.size,this;r=this.__data__=new a(i)}return r.set(t,e),this.size=r.size,this}},function(t,e,r){var n=r(14),o=r(42),a=r(8),i=r(16),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,f=c.toString,p=s.hasOwnProperty,l=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(n(t)?l:u).test(i(t))}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(10),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,u),r=t[u];try{var n=!(t[u]=void 0)}catch(t){}var o=i.call(t);return n&&(e?t[u]=r:delete t[u]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n,o=r(43),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},function(t,e,r){var n=r(0)["__core-js_shared__"];t.exports=n},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var n=r(46),o=r(2),a=r(9);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},function(t,e,r){var n=r(47),o=r(48),a=r(49),i=r(50),u=r(51);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,t.exports=c},function(t,e,r){var n=r(5);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var n=r(5),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},function(t,e,r){var n=r(5),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},function(t,e,r){var n=r(5);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,r){var n=r(6);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(6);t.exports=function(t){return n(this,t).get(t)}},function(t,e,r){var n=r(6);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(6);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},function(t,e,r){var n=r(17),o=r(58),a=r(59);function i(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e,r){var n=r(10),o=r(63),a=r(13),i=r(18),u=r(64),c=r(65),s=n?n.prototype:void 0,f=s?s.valueOf:void 0;t.exports=function(t,e,r,n,s,p,l){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!p(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var h=u;case"[object Set]":var v=1&n;if(h=h||c,t.size!=e.size&&!v)return!1;var y=l.get(t);if(y)return y==e;n|=2,l.set(t,e);var d=i(h(t),h(e),n,s,p,l);return l.delete(t),d;case"[object Symbol]":if(f)return f.call(t)==f.call(e)}return!1}},function(t,e,r){var n=r(0).Uint8Array;t.exports=n},function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}},function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}},function(t,e,r){var n=r(67),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,a,i,u){var c=1&r,s=n(t),f=s.length;if(f!=n(e).length&&!c)return!1;for(var p=f;p--;){var l=s[p];if(!(c?l in e:o.call(e,l)))return!1}var h=u.get(t);if(h&&u.get(e))return h==e;var v=!0;u.set(t,e),u.set(e,t);for(var y=c;++p<f;){var d=t[l=s[p]],b=e[l];if(a)var _=c?a(b,d,l,e,t,u):a(d,b,l,t,e,u);if(!(void 0===_?d===b||i(d,b,r,a,u):_)){v=!1;break}y=y||"constructor"==l}if(v&&!y){var g=t.constructor,x=e.constructor;g!=x&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof x&&x instanceof x)&&(v=!1)}return u.delete(t),u.delete(e),v}},function(t,e,r){var n=r(68),o=r(70),a=r(73);t.exports=function(t){return n(t,a,o)}},function(t,e,r){var n=r(69),o=r(11);t.exports=function(t,e,r){var a=e(t);return o(t)?a:n(a,r(t))}},function(t,e){t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},function(t,e,r){var n=r(71),o=r(72),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,u=i?function(t){return null==t?[]:(t=Object(t),n(i(t),function(e){return a.call(t,e)}))}:o;t.exports=u},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var i=t[r];e(i,r,t)&&(a[o++]=i)}return a}},function(t,e){t.exports=function(){return[]}},function(t,e,r){var n=r(74),o=r(83),a=r(87);t.exports=function(t){return a(t)?n(t):o(t)}},function(t,e,r){var n=r(75),o=r(76),a=r(11),i=r(19),u=r(79),c=r(21),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=a(t),f=!r&&o(t),p=!r&&!f&&i(t),l=!r&&!f&&!p&&c(t),h=r||f||p||l,v=h?n(t.length,String):[],y=v.length;for(var d in t)!e&&!s.call(t,d)||h&&("length"==d||p&&("offset"==d||"parent"==d)||l&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||u(d,y))||v.push(d);return v}},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e,r){var n=r(77),o=r(7),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},function(t,e,r){var n=r(4),o=r(7);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},function(t,e){t.exports=function(){return!1}},function(t,e){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&-1<t&&t%1==0&&t<e}},function(t,e,r){var n=r(4),o=r(22),a=r(7),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[n(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){(function(t){var n=r(15),o=e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o&&n.process,u=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=u}).call(this,r(20)(t))},function(t,e,r){var n=r(84),o=r(85),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))a.call(t,r)&&"constructor"!=r&&e.push(r);return e}},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){var n=r(86)(Object.keys,Object);t.exports=n},function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},function(t,e,r){var n=r(14),o=r(22);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,e,r){var n=r(89),o=r(9),a=r(90),i=r(91),u=r(92),c=r(4),s=r(16),f="[object Map]",p="[object Promise]",l="[object Set]",h="[object WeakMap]",v="[object DataView]",y=s(n),d=s(o),b=s(a),_=s(i),g=s(u),x=c;(n&&x(new n(new ArrayBuffer(1)))!=v||o&&x(new o)!=f||a&&x(a.resolve())!=p||i&&x(new i)!=l||u&&x(new u)!=h)&&(x=function(t){var e=c(t),r="[object Object]"==e?t.constructor:void 0,n=r?s(r):"";if(n)switch(n){case y:return v;case d:return f;case b:return p;case _:return l;case g:return h}return e}),t.exports=x},function(t,e,r){var n=r(1)(r(0),"DataView");t.exports=n},function(t,e,r){var n=r(1)(r(0),"Promise");t.exports=n},function(t,e,r){var n=r(1)(r(0),"Set");t.exports=n},function(t,e,r){var n=r(1)(r(0),"WeakMap");t.exports=n},function(t,e,r){"use strict";r.r(e);var n=r(23),o=r.n(n),a=r(8),i=r.n(a),u=r(12),c=r.n(u),s=function(){return(s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},f=(p.$inject=["instanceSettings","$q","backendSrv","templateSrv"],p.prototype.query=function(t){var e=t;return e.targets=this.buildQueryTargets(t),e.targets.length<=0?this.q.when({data:[]}):(this.templateSrv.getAdhocFilters?e.adhocFilters=this.templateSrv.getAdhocFilters(this.name):e.adhocFilters=[],t.scopedVars=s({},this.getVariables(),t.scopedVars),this.doRequest({url:this.url+"/query",data:e,method:"POST"}))},p.prototype.testDatasource=function(){return this.doRequest({url:this.url+"/",method:"GET"}).then(function(t){return 200===t.status?{status:"success",message:"Data source is working",title:"Success"}:{status:"error",message:"Data source is not working: "+t.message,title:"Error"}})},p.prototype.annotationQuery=function(t){var e={annotation:{query:this.templateSrv.replace(t.annotation.query,{},"glob"),name:t.annotation.name,datasource:t.annotation.datasource,enable:t.annotation.enable,iconColor:t.annotation.iconColor},range:t.range,rangeRaw:t.rangeRaw,variables:this.getVariables()};return this.doRequest({url:this.url+"/annotations",method:"POST",data:e}).then(function(t){return t.data})},p.prototype.findMetricsQuery=function(t,e){var r={type:e,target:this.templateSrv.replace(t,null,"regex")};return this.doRequest({url:this.url+"/search",data:r,method:"POST"}).then(this.mapToTextValue)},p.prototype.mapToTextValue=function(t){return t.data.map(function(t,e){return t&&t.text&&t.value?{text:t.text,value:t.value}:i()(t)?{text:t,value:e}:{text:t,value:t}})},p.prototype.doRequest=function(t){return t.withCredentials=this.withCredentials,t.headers=this.headers,this.backendSrv.datasourceRequest(t)},p.prototype.buildQueryTargets=function(t){var e=this;return t.targets.filter(function(t){return"select metric"!==t.target}).map(function(r){var n=c()(r.data)||""===r.data.trim()?null:JSON.parse(r.data);null!==n&&Object.keys(n).forEach(function(r){var o=n[r];if("string"==typeof o){var a=o.match(/\$([\w]+)/g);if(null!==a){if(!(1<a.length))return void(n[r]=e.cleanMatch(a[0],t));console.error('Use ${var1} format to specify multiple variables in one valueso we can safely replace that. Passed value was "'+o+'".')}null!==o.match(/\${([\w-]+)}/g)&&(n[r]=o.replace(/\${([\w-]+)}/g,function(r){return e.cleanMatch(r,t)}))}});var o=r.target;return"string"==typeof o&&(o=e.templateSrv.replace(r.target.toString(),t.scopedVars,"regex")),{data:n,target:o,refId:r.refId,hide:r.hide,type:r.type}})},p.prototype.cleanMatch=function(t,e){var r=this.templateSrv.replace(t,e.scopedVars,"json");return"string"==typeof r?r.substring(1,r.length-1):r},p.prototype.getVariables=function(){var t=c()(this.templateSrv.index)?{}:this.templateSrv.index,e={};return Object.keys(t).forEach(function(r){var n=t[r],a=n.current.value;"$__all"!==a&&!o()(a,["$__all"])||(a=null===n.allValue?n.options.slice(1).map(function(t){return t.value}):n.allValue),e[r]={text:n.current.text,value:a}}),e},p.prototype.getTagKeys=function(t){var e=this;return new Promise(function(r,n){e.doRequest({url:e.url+"/tag-keys",method:"POST",data:t}).then(function(t){return r(t.data)})})},p.prototype.getTagValues=function(t){var e=this;return new Promise(function(r,n){e.doRequest({url:e.url+"/tag-values",method:"POST",data:t}).then(function(t){return r(t.data)})})},p);function p(t,e,r,n){this.name=t.name,this.url=t.url,this.q=e,this.backendSrv=r,this.templateSrv=n,this.withCredentials=t.withCredentials,this.headers={"Content-Type":"application/json"},"string"==typeof t.basicAuth&&0<t.basicAuth.length&&(this.headers.Authorization=t.basicAuth)}var l,h,v=r(24),y=((l=function(t,e){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)})(d,h=v.QueryCtrl),d.$inject=["$scope","$injector"],d.prototype.findMetrics=function(t){return this.datasource.findMetricsQuery(t,this.target.type)},d.prototype.toggleEditorMode=function(){this.target.rawQuery=!this.target.rawQuery},d.prototype.onChangeInternal=function(){this.panelCtrl.refresh()},d.templateUrl="partials/query.editor.html",d);function d(t,e){var r=h.call(this,t,e)||this;return r.target.hide=!1,r.target.target=r.target.target||"select metric",r.target.type||(r.target.type="table"===r.panelCtrl.panel.type?"table":"timeseries"),r.target.data=r.target.data||"",r.types=[{text:"Time series",value:"timeseries"},{text:"Table",value:"table"}],r.showJSON=!1,r}r.d(e,"ConfigCtrl",function(){return b}),r.d(e,"QueryOptionsCtrl",function(){return g}),r.d(e,"AnnotationsQueryCtrl",function(){return j}),r.d(e,"Datasource",function(){return f}),r.d(e,"QueryCtrl",function(){return y});var b=(_.templateUrl="partials/config.html",_);function _(){}var g=(x.templateUrl="partials/query.options.html",x);function x(){}var j=(m.templateUrl="partials/annotations.editor.html",m);function m(){}}],e.c=n,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(e){return t[e]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=93);function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r,n});
//# sourceMappingURL=module.js.map