(function(t){function e(e){for(var r,c,s=e[0],o=e[1],l=e[2],f=0,d=[];f<s.length;f++)c=s[f],i[c]&&d.push(i[c][0]),i[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;a.push(["fc11","chunk-vendors"]),n()})({6794:function(t,e,n){},"7fbf":function(t,e,n){},abe9:function(t,e,n){"use strict";var r=n("ae88"),i=n.n(r);i.a},ae88:function(t,e,n){},d2d7:function(t,e,n){"use strict";var r=n("7fbf"),i=n.n(r);i.a},d803:function(t,e,n){"use strict";var r=n("6794"),i=n.n(r);i.a},fc11:function(t,e,n){"use strict";n.r(e);n("46a1"),n("450d");var r=n("e5f2"),i=n.n(r),a=(n("0fb7"),n("f529")),c=n.n(a),s=(n("915d"),n("e04d")),o=n.n(s),l=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),n("router-view"),t._v(" "),t._m(1)],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("v-track")]),t._v(" "),n("div",{staticClass:"command"},[t._v("yarn add v-track or npm add v-track --save")]),t._v(" "),n("nav",[n("a",{attrs:{href:"https://unpkg.com/v-track/dist/v-track.min.js"}},[n("img",{attrs:{src:"http://img.badgesize.io/https://unpkg.com/v-track/dist/v-track.min.js?compression=gzip&style=flat-square",alt:"Gzip Size"}})]),t._v(" "),n("a",{attrs:{href:"https://www.npmjs.com/package/v-track"}},[n("img",{attrs:{src:"https://img.shields.io/npm/v/v-track.svg?colorB=brightgreen&style=flat-square"}})]),t._v(" "),n("a",{attrs:{href:"https://github.com/facebook/jest"}},[n("img",{attrs:{src:"https://img.shields.io/badge/tested_with-jest-99424f.svg"}})]),t._v(" "),n("a",{attrs:{href:"http://hits.dwyl.io/l-hammer/v-track",alt:"hit count"}},[n("img",{attrs:{src:"http://hits.dwyl.io/l-hammer/v-track.svg"}})]),t._v(" "),n("a",{attrs:{href:"https://github.com/l-hammer/v-track"}},[n("img",{attrs:{src:"https://img.shields.io/github/stars/l-hammer/v-track.svg?style=social&label=Star"}})])]),t._v(" "),n("div",{staticClass:"description"},[t._v("\n      🕹一个基于Vue指令实现的埋点插件~\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"footer"},[n("div",{staticClass:"section-content mini"},[t._v("\n      Copyright © 2019-present LHammer\n    ")])])}],v=(n("abe9"),n("2877")),p={},h=Object(v["a"])(p,f,d,!1,null,null,null),m=h.exports;function k(t){return k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e&&g(t.prototype,e),n&&g(t,n),t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){w(t,e,n[e])})}return t}function _(t,e){return j(t)||O(t,e)||x()}function S(t){return $(t)||P(t)||E()}function $(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function j(t){if(Array.isArray(t))return t}function P(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function O(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var c,s=t[Symbol.iterator]();!(r=(c=s.next()).done);r=!0)if(n.push(c.value),e&&n.length===e)break}catch(o){i=!0,a=o}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}function E(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var M=function(t){return"function"===typeof t||!1},T=function(t){return void 0===t||null===t},A=function(t){return void 0!==t&&null!==t},V=!0;function D(t){return[Object.values(t),Object.keys(t)]}function H(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return function(){for(var r=this,i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];clearTimeout(e),e=setTimeout(function(){return t.apply(r,a)},n)}}function N(t,e){var n=Object.keys(t);return n.length===e.length&&e.every(function(t){return n.includes(t)})}function U(t,e){var n=Object.keys(t);return e.some(function(t){return n.includes(t)})}function L(t,e){return t.key===e.key&&t.tag===e.tag&&t.isComment===e.isComment&&A(t.data)===A(e.data)}function R(t,e){if(!L(t,e))return!1;var n=e.children,r=t.children;if(T(t.text)&&A(n)&&A(r)){if(n.length!==r.length)return!1;for(var i=0;i<r.length;i++){var a=r[i];if(A(a)&&A(n[i]))return R(a,n[i])}}else if(t.text!==e.text)return!1;return!0}var I=function(t){if(!V&&!M(t))throw new Error("第一个参数应该为 Function~")},G=function(t){if(!V)throw new Error("".concat(t,"指令暂不支持"))},z=function(t){return t&&1===t.nodeType};function F(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function B(t,e){return!(!t||t.width<=0||t.height<=0)&&(t.bottom>0&&t.right>0&&t.top<e.height&&t.left<e.width)}function Y(t){if(t===window.document)return!0;if(!t||!t.parentNode)return!1;var e=t.parentNode,n=F(t,"visibility"),r=F(t,"display");return"hidden"!==n&&"none"!==r&&(!e||Y(e))}var q=function(){function t(e,n){if(y(this,t),!z(e))throw new Error("not an element node");this.ele=e,this.ref=n,this.started=!1,this.listeners={},this.removeScrollLisener=null,this.init()}return b(t,[{key:"init",value:function(){var t=this;this.started||(this.removeScrollLisener=function(e){return t.ref?t.ref.$on("scroll",e):(window.addEventListener("scroll",e,!1),function(){return window.removeEventListener("scroll",e,!1)})}(H(this.visibilitychange.bind(this))),this.started=!0)}},{key:"$on",value:function(t,e){var n=this.listeners[t]||(this.listeners[t]=[]);return n.push(e),this}},{key:"$off",value:function(t,e){if(e){var n,r=this.listeners[t],i=r.length;while(i--)if(n=r[i],n===e||n.cbk===e){r.splice(i,1);break}return this}}},{key:"$once",value:function(t,e){var n=this,r=function r(){n.$off(t,r);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];e.apply(n,a)};return r.cbk=e,this.$on(t,r),this}},{key:"$emit",value:function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a=this.listeners[t]||[];return a.forEach(function(t){return t.apply(e,r)}),this}},{key:"visibilitychange",value:function(){var t=this.ele.getBoundingClientRect(),e={height:window.innerHeight,width:window.innerWidth};if(!B(t,e)||!Y(this.ele))return 0;var n=0,r=0,i=0;t.top>=0?n=Math.min(t.height,e.height-t.top):t.bottom>0&&(n=Math.min(e.height,t.bottom)),t.left>=0?r=Math.min(t.width,e.width-t.left):t.right>0&&(r=Math.min(e.width,t.right)),i=n*r/(t.height*t.width),1===i&&this.$emit("fullyvisible")}},{key:"destroy",value:function(){M(this.removeScrollLisener)&&this.removeScrollLisener()}}]),t}(),J=["async","delay","watch","show","once","custom"];function W(t,e,n,r){var i=this,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};t.$unwatch=r.$watch(function(){return r[e]},function(e,r){e!==r&&(a.immediate||t.contains(i.target))&&n(),i.target=null})}function K(t,e,n,r,i,a){var c=this,s=e.value,o=e.arg,l=e.modifiers,u=e.rawName,f=n.context,d=n.componentInstance;if(!a[o])throw new Error("埋点参数不存在哇");var v=[],p=a[o].bind(null,f),h=function(e,n,r){return W.call(c,t,e,n,f,r)},m=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return N.call(null,l,e)},y=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return U.call(null,l,e)};if(Object.keys(l).length)if(m("watch")){var g=Object.keys(s).shift();h(g,p,{immediate:!0})}else if(m("delay"))t.$timer&&clearTimeout(t.$timer),t.$timer=setTimeout(function(){a[o](f)},s);else if(m("watch","delay")){var b=S(Object.keys(s)).pop();p=function(){t.$timer&&clearTimeout(t.$timer),t.$timer=setTimeout(function(){var t=Y(f.$el);t&&a[o](f)},s.delay)},h(b,p,{immediate:!0})}else if(y("show")){var w=function(){return a[o](f)},C=y("once"),$=y("custom");if(!t.$visMonitor){var j=new q(t,$&&f.$refs[s.ref]);(C?j.$once:j.$on).call(j,"fullyvisible",w),t.$visMonitor=j}}else if(!d&&l.click){switch(k(s)){case"object":var P=D(s),O=_(P,2),E=O[0],x=O[1],M=E.shift(),T=S(x).pop(),A=x.slice(1).reduce(function(t,e){return t[e]=s[e],t},{});I(M),p=a[o].bind(null,f,A),v=[p,M.bind.apply(M,[null].concat(S(E)))],l.delay&&v.reverse(),l.async&&h(T,v.shift());break;case"function":v=[p,s],l.delay&&v.reverse();break}t.$listener=function(t){c.target=t.target,v.forEach(function(e){return e(t)})},t.addEventListener("click",t.$listener)}else if(d&&d.$el===t){var V=Object.keys(l).filter(function(t){return!J.includes(t)}).pop();switch(k(s)){case"object":var H=D(s),L=_(H,2),R=L[0],z=L[1],F=R.shift(),B=S(z).pop();if(I(F),t["$on_".concat(V)])break;d.$on(V,function(){c.target=t;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];p=a[o].bind(null,f,n[0]),v=[p,F.bind.apply(F,[null].concat(n))],l.delay&&v.reverse(),l.async&&h(B,v.shift()),v.forEach(function(t){return t()}),t["$on_".concat(V)]=!0});break;case"function":d.$on(V,function(t){var e=Object.values(t||{});p=a[o].bind(null,f,t),v=[p,s.bind.apply(s,[null].concat(S(e)))],l.delay&&v.reverse(),v.forEach(function(t){return t()})});break}}else G(u);else a[o](f,s)}function Q(t){if(t.$listener){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];R(n[1],n[2])||(X.call(this,t),K.call.apply(K,[this,t].concat(n)))}}function X(t){t.$listener&&t.removeEventListener("click",t.$listener),t.$timer&&clearTimeout(t.$timer),t.$unwatch&&t.$unwatch(),t.$visMonitor&&t.$visMonitor.destroy()}var Z=function(){function t(){y(this,t),this.installed=!1,this.curPage=null}return b(t,null,[{key:"install",value:function(t,e){var n=this,r=e.trackEvents,i=e.trackAction,a=e.trackEnable,c=void 0===a?{}:a,s=this;c=C({UVPV:!1,TONP:!1},c);var o=function(t){c.TONP&&r.TONP({stt:"".concat((Date.now()-t)/1e3,"s")})};this.installed||(this.installed=!0,t.directive("track",{bind:function(){for(var t,e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];return(t=K).call.apply(t,[n].concat(i,[r]))},componentUpdated:function(){for(var t,e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];return(t=Q).call.apply(t,[n].concat(i,[r]))},unbind:function(){for(var t,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return(t=X).call.apply(t,[n].concat(r))}}),t.component("TrackView",{render:function(t){return t("span",{style:"display: none"})}}),t.mixin({data:function(){return{PAGE_ENTER_TIME:Date.now()}},created:function(){var t=this;window.onbeforeunload=function(){return o(t.PAGE_ENTER_TIME)}},beforeRouteEnter:function(t,e,n){t.name===s.curPage?n():(s.curPage=t.name,c.UVPV&&r.UVPV(),n())},beforeRouteLeave:function(t,e,n){o(this.PAGE_ENTER_TIME),n()}}),Object.defineProperty(t.prototype,"$track",{get:function(){return i}}))}}]),t}();w(Z,"target",null);var tt=Z,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-home page"},[n("section",{staticClass:"nav"},[n("router-link",{attrs:{to:{name:"install"}}},[t._v("\n      Get Started\n    ")]),t._v(" "),n("a",{attrs:{href:"https://github.com/l-hammer/v-track/issues"}},[t._v("Report an issue")])],1),t._v(" "),n("section",{staticClass:"demo"},[n("el-alert",{attrs:{center:"",type:"warning",title:"这是一个点击事件行为的埋点",closable:!1}}),t._v(" "),n("div",{staticClass:"section-content"},[n("div",{directives:[{name:"track",rawName:"v-track:18015.click",value:t.handleClick,expression:"handleClick",arg:"18015",modifiers:{click:!0}}],staticClass:"track-button"},[t._v("\n        click me\n      ")])])],1),t._v(" "),n("section",{staticClass:"snippets"},[n("CodeSnippet",{staticClass:"snippet",attrs:{lang:"html",code:t.trackClickSnippet}})],1),t._v(" "),n("section",{staticClass:"demo"},[n("el-alert",{attrs:{center:"",type:"warning",title:"这个一个带参数点击事件行为的埋点，默认最后一个参数为event事件对象",closable:!1}}),t._v(" "),n("div",{staticClass:"section-content"},[n("div",{directives:[{name:"track",rawName:"v-track:18016.click",value:{handleClickParam:t.handleClickParam,item:t.item},expression:"{ handleClickParam, item }",arg:"18016",modifiers:{click:!0}}],staticClass:"track-button"},[t._v("\n        click me\n      ")])])],1),t._v(" "),n("section",{staticClass:"snippets"},[n("CodeSnippet",{staticClass:"snippet",attrs:{lang:"html",code:t.trackClickSnippetParam}})],1),t._v(" "),n("section",{staticClass:"demo"},[n("el-alert",{attrs:{center:"",type:"warning",title:"这是一个发生在事件之后的埋点，默认先执行埋点再执行事件，比如index初始值为0，点击事件会将index加1，所以埋点获取到的index值应该为1，依次点击则累加",closable:!1}}),t._v(" "),n("div",{staticClass:"section-content"},[n("div",{directives:[{name:"track",rawName:"v-track:18017.click.delay",value:t.handleClickDelay,expression:"handleClickDelay",arg:"18017",modifiers:{click:!0,delay:!0}}],staticClass:"track-button"},[t._v("\n        click me\n      ")])])],1),t._v(" "),n("section",{staticClass:"snippets"},[n("CodeSnippet",{staticClass:"snippet",attrs:{lang:"js",code:t.jsTrackClickSnippetDelay}}),t._v(" "),n("CodeSnippet",{staticClass:"snippet",attrs:{lang:"html",code:t.trackClickSnippetDelay}})],1),t._v(" "),n("section",{staticClass:"demo"},[n("el-alert",{attrs:{center:"",type:"warning",title:"这是一个有异步行为的事件埋点，比如rest初始值为null，点击事件会fetch为success，所以埋点获取到的rest值应该为success",closable:!1}}),t._v(" "),n("div",{staticClass:"section-content"},[n("div",{directives:[{name:"track",rawName:"v-track:18018.click.async",value:{handleClickAsync:t.handleClickAsync,rest:t.rest},expression:"{ handleClickAsync, rest }",arg:"18018",modifiers:{click:!0,async:!0}}],staticClass:"track-button"},[t._v("\n        click me\n      ")])])],1),t._v(" "),n("section",{staticClass:"snippets"},[n("CodeSnippet",{staticClass:"snippet",attrs:{lang:"js",code:t.jsTrackClickSnippetAsync}}),t._v(" "),n("CodeSnippet",{staticClass:"snippet",attrs:{lang:"html",code:t.trackClickSnippetAsync}})],1)])},nt=[],rt=n("795b"),it=n.n(rt),at=(n("96cf"),n("3b8d")),ct=n("f499"),st=n.n(ct),ot=(n("6b54"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-snippet"},[n("div",{staticClass:"language"},[t._v(t._s(t.lang))]),t._v(" "),n("div",{staticClass:"line-numbers"},t._l(t.lineCount,function(e){return n("div",{key:e,staticClass:"line-number"},[t._v(t._s(e))])}),0),t._v(" "),n("div",{staticClass:"render",domProps:{innerHTML:t._s(t.result)}})])}),lt=[],ut=n("1487"),ft=n.n(ut),dt={name:"code-snippet",props:{code:String,lang:String},computed:{result:function(){var t=ft.a.highlight(this.lang,this.code.trim());return t.value},lineCount:function(){for(var t=this.result,e=0,n=0;n<t.length;++n)"\n"===t[n]&&e++;return e+1}}},vt=dt,pt=(n("d2d7"),Object(v["a"])(vt,ot,lt,!1,null,null,null)),ht=pt.exports,mt='\n<div class="track-button" v-track:18015.click="handleClick">click me</div>\n',kt='\n<div class="track-button" v-track:18016.click="{ handleClickParam, item }">click me</div>\n',yt='\n<div class="track-button" v-track:18017.click.delay="handleClickParam">click me</div>\n',gt='\ndata() {\n  return {\n    index: 0\n  };\n},\nmethods: {\n  handleClickDelay() {\n    this.index++;\n    this.$message.success("事件执行成功");\n  },\n}\n',bt='\n<div class="track-button" v-track:18018.click.delay="handleClickAsync">click me</div>\n',wt='\ndata() {\n  return {\n    rest: null\n  };\n},\nmethods: {\n  async handleClickAsync() {\n    const response = await new Promise(resolve => {\n      setTimeout(() => {\n        resolve({ data: "success" });\n        this.$message.success("异步事件返回成功");\n      }, 300);\n    });\n    this.rest = response.data;\n  }\n}\n',Ct={name:"Home",components:{CodeSnippet:ht},data:function(){return{trackClickSnippet:mt,trackClickSnippetParam:kt,trackClickSnippetDelay:yt,trackClickSnippetAsync:bt,jsTrackClickSnippetDelay:gt,jsTrackClickSnippetAsync:wt,item:{id:Math.random().toString(36).substr(2)},index:0,rest:null}},methods:{handleClick:function(){this.$message.success("事件执行成功")},handleClickParam:function(t){this.$message.success("事件执行成功，参数为".concat(st()(t)))},handleClickDelay:function(){this.index++,this.$message.success("事件执行成功")},handleClickAsync:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new it.a(function(t){setTimeout(function(){t({data:"success"}),n.$message.success("异步事件返回成功")},300)});case 2:e=t.sent,this.rest=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},_t=Ct,St=(n("d803"),Object(v["a"])(_t,et,nt,!1,null,"49d72b20",null)),$t=St.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-install page"},[n("section",{staticClass:"nav"},[n("router-link",{attrs:{to:{name:"home"}}},[t._v("\n      Back\n    ")]),t._v(" "),n("a",{attrs:{href:"https://github.com/l-hammer/v-track/issues"}},[t._v("Report an issue")])],1),t._v(" "),t._m(0),t._v(" "),n("section",{staticClass:"snippets"},[n("CodeSnippet",{staticClass:"snippet",attrs:{code:t.eventsSnippet,lang:"js"}}),t._v(" "),n("div",{staticClass:"plus"},[t._v("+")]),t._v(" "),n("CodeSnippet",{staticClass:"snippet",attrs:{code:t.mainSnippet,lang:"js"}}),t._v(" "),n("div",{staticClass:"plus"},[t._v("+")]),t._v(" "),n("CodeSnippet",{staticClass:"snippet",attrs:{code:t.componentSnippet,lang:"html"}})],1)])},Pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"snippets"},[n("div",{staticClass:"section-content small"},[t._v("\n      完整示例可参考\n      "),n("a",{attrs:{href:"https://github.com/l-hammer/v-track/tree/master"}},[t._v("GitHub")])])])}],Ot='\nimport trackAction from "./action";\n\nexport default {\n  /**\n   * @name UVPV 固定名称不支持修改\n   * @desc UV、PV埋点\n   */\n  UVPV() {\n    trackAction("1,3");\n  },\n  /**\n   * @name TONP 固定名称不支持修改\n   * @desc 页面停留时间埋点（Time on Page）\n   * @param {String} stt 进入页面时长，单位为秒\n   */\n  TONP({ stt }) {\n    trackAction("2", { stt });\n  },\n  /**\n   * @desc 测试埋点\n   * @param {*} { $route: { name } }\n   * @param {*} { item: { id, level4Tag }, index }\n   */\n  19058(\n    {\n      $route: { name }\n    },\n    {\n      item: { id },\n      index\n    }\n  ) {\n    trackAction("19058", {\n      knowledge_id: id, // 知识ID\n      click_position: index + 1, // 点击位置\n      source_page: name // 页面来源\n    });\n  }\n};\n',Et='\nimport Vue from "vue";\nimport VTrack from "v-track";\nimport trackEvents, { trackAction } from "./tracks";\n\nVue.use(VTrack, {\n  trackEvents, // 埋点事件对象\n  trackAction, // 埋点公用方法\n  trackEnable: {\n    UVPV: false, // 是否开启UVPV统计，默认为false\n    TONP: true // 是否开启页面停留时长统计，默认为false\n  }\n})\n',xt='\n\x3c!-- 页面行为埋点（track-view为v-track全局注册的组件） --\x3e\n<track-view v-track:18015></track-view>\n<track-view v-track:18015.watch="{ result }"></track-view>\n<track-view v-track:18015.watch.delay="{ result }"></track-view>\n<track-view v-if="result" v-track:18015></track-view>\n\n\x3c!-- 事件行为埋点（DOM） --\x3e\n<div v-track:18015.click="handleClick"></div>\n<div v-track:18015.click="{ handleClick, item, index }"></div>\n<div v-track:18015.click.async="{ handleSearch, rest }"></div>\n<div v-track:18015.click.delay="handleClick"></div>\n\n\x3c!-- 事件行为埋点（组件） --\x3e\n<cmp v-track:18015.click="handleClick"></cmp>\n<cmp v-track:18015.[自定义事件名]="handleSearch"></cmp>\n<cmp v-track:18015.[自定义事件名].delay="handleSearch"></cmp>\n<cmp v-track:18015.[自定义事件名].async="{ handleSearch, rest }"></cmp>\n\n\x3c!-- 区域展现埋点（block 可以是 DOM 或者组件） --\x3e\n<block v-track:18015.show></block>\n<block v-track:18015.show.once></block>\n<block v-track:18015.show.custom="{ ref: \'scroll\' }"></block>\n<block v-track:18015.show.custom.once="{ ref: \'scroll\' }"></block>\n',Mt={name:"Install",components:{CodeSnippet:ht},data:function(){return{mainSnippet:Et,eventsSnippet:Ot,componentSnippet:xt}}},Tt=Mt,At=Object(v["a"])(Tt,jt,Pt,!1,null,null,null),Vt=At.exports,Dt=n("cebc"),Ht=(n("7f7f"),n("0a0d")),Nt=n.n(Ht),Ut=(n("386d"),n("a481"),/\d\d?/),Lt=/\d{4}/,Rt=/d{1,2}|M{1,2}|yy(?:yy)?|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,It={default:"yyyy-MM-dd HH:mm:ss",date:"yyyy-MM-dd",datetime:"yyyy-MM-dd HH:mm:ss",time:"HH:mm:ss",year:"yyyy",enDate:"M/d/yy",cnDate:"yyyy 年 MM 月 dd 日"},Gt=function(t,e){t=String(t),e=e||2;while(t.length<e)t="0".concat(t);return t},zt={yyyy:function(t){return Gt(t.getFullYear(),4)},yy:function(t){return String(t.getFullYear()).substr(2)},M:function(t){return t.getMonth()+1},MM:function(t){return Gt(t.getMonth()+1)},d:function(t){return t.getDate()},dd:function(t){return Gt(t.getDate())},h:function(t){return t.getHours()%12||12},hh:function(t){return Gt(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return Gt(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return Gt(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return Gt(t.getSeconds())}},Ft=function(t,e){if("number"===typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in date.format");return e=It[e]||e||It.default,e=e.replace(Rt,function(e){return e in zt?zt[e](t):e.slice(1,e.length-1)}),e},Bt={yyyy:[Lt,function(t,e){t.year=e}],yy:[Ut,function(t,e){var n=new Date,r=+"".concat(n.getFullYear()).substr(0,2);t.year="".concat(e>68?r-1:r).concat(e)}],M:[Ut,function(t,e){t.month=e-1}],d:[Ut,function(t,e){t.day=e}],h:[Ut,function(t,e){t.hour=e}],m:[Ut,function(t,e){t.minute=e}],s:[Ut,function(t,e){t.second=e}]};Bt.MM=Bt.M,Bt.dd=Bt.d,Bt.hh=Bt.h,Bt.H=Bt.h,Bt.HH=Bt.h,Bt.mm=Bt.m,Bt.ss=Bt.s;var Yt=n("a4bb"),qt=n.n(Yt),Jt=function(t){var e=qt()(t).reduce(function(e,n){return e.push({key:n,val:t[n]}),e},[]),n=e.map(function(t){var e=t.key,n=t.val;return'\n        <div class="row">\n          <span>'.concat(e,"</span>\n          <span>").concat(n,"</span>\n        </div>\n      ")}).join("");return'\n    <section class="v-track-table">\n      <div class="header">\n        <strong>key</strong>\n        <strong>value</strong>\n      </div>\n      '.concat(n,"\n    </section>\n  ")};function Wt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(Dt["a"])({evt:t},e,{action_time:Ft(Nt()())});"2"===t&&c()("统计页面停留时间埋点"),"1,3"===t&&c()("统计UVPV埋点"),i.a.success({title:"上报数据如下：",dangerouslyUseHTMLString:!0,message:Jt(n),customClass:"notification__large"})}var Kt={UVPV:function(){Wt("1,3")},TONP:function(t){var e=t.stt;Wt("2",{stt:e})},18015:function(t){var e=t.$route.name;Wt("18015",{source_page:e})},18016:function(t,e,n){var r=t.$route.name,i=e.item.id,a=n.target;Wt("18016",{id:i,source_page:r,target:a})},18017:function(t){var e=t.index,n=t.$route.name;Wt("18017",{source_page:n,index:e})},18018:function(t){var e=t.rest,n=t.$route.name;Wt("18018",{source_page:n,rest:e})}},Qt=Object(Dt["a"])({},Kt);l["default"].use(u["a"]),l["default"].use(o.a),l["default"].use(tt,{trackEvents:Qt,trackAction:Wt,trackEnable:{UVPV:!1,TONP:!0}}),l["default"].prototype.$message=c.a,l["default"].prototype.$notify=i.a;var Xt=new u["a"]({routes:[{path:"/",name:"home",component:$t},{path:"/install",name:"install",component:Vt},{path:"*",redirect:"/"}]});new l["default"]({el:"#app",router:Xt,render:function(t){return t(m)}})}});
//# sourceMappingURL=app.0e155cbe.js.map