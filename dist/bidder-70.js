(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{287:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));var r=t(284),o=t(283);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=t(291),c=t(279),s=r.EVENTS,f=s.AUCTION_INIT,p=s.AUCTION_END,l=s.REQUEST_BIDS,d=s.BID_REQUESTED,y=s.BID_TIMEOUT,g=s.BID_RESPONSE,v=s.NO_BID,b=s.BID_WON,T=s.BID_ADJUSTMENT,E=s.BIDDER_DONE,h=s.SET_TARGETING,_=s.AD_RENDER_FAILED,w=s.ADD_AD_UNITS;function I(e){var n,t=e.url,r=e.analyticsType,s=e.global,I=e.handler,A=[],m=0,S=!0;return function(){if(S){for(var e=0;e<A.length;e++)A[e]();A.push=function(e){e()},S=!1}c.logMessage("event count sent to ".concat(s,": ").concat(m))}(),{track:function(e){var n=e.eventType,t=e.args;"bundle"===this.getAdapterType()&&window[s](I,n,t);"endpoint"===this.getAdapterType()&&D.apply(void 0,arguments)},enqueue:N,enableAnalytics:O,disableAnalytics:function(){c._each(n,(function(e,n){u.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:O},getAdapterType:function(){return r},getGlobal:function(){return s},getHandler:function(){return I},getUrl:function(){return t}};function D(e){var n=e.eventType,r=e.args,i=e.callback;Object(o.a)(t,i,JSON.stringify({eventType:n,args:r}))}function N(e){var n=e.eventType,t=e.args,r=this;s&&window[s]&&n&&t?this.track({eventType:n,args:t}):A.push((function(){m++,r.track({eventType:n,args:t})}))}function O(e){var t,r=this,o=this;"object"!==a(e)||"object"!==a(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(u.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==y&&N.call(o,{eventType:n,args:t})}})),i(t={},l,(function(e){return r.enqueue({eventType:l,args:e})})),i(t,d,(function(e){return r.enqueue({eventType:d,args:e})})),i(t,g,(function(e){return r.enqueue({eventType:g,args:e})})),i(t,v,(function(e){return r.enqueue({eventType:v,args:e})})),i(t,y,(function(e){return r.enqueue({eventType:y,args:e})})),i(t,b,(function(e){return r.enqueue({eventType:b,args:e})})),i(t,T,(function(e){return r.enqueue({eventType:T,args:e})})),i(t,E,(function(e){return r.enqueue({eventType:E,args:e})})),i(t,h,(function(e){return r.enqueue({eventType:h,args:e})})),i(t,p,(function(e){return r.enqueue({eventType:p,args:e})})),i(t,_,(function(e){return r.enqueue({eventType:_,args:e})})),i(t,w,(function(e){return r.enqueue({eventType:w,args:e})})),i(t,f,(function(n){n.config="object"===a(e)&&e.options||{},r.enqueue({eventType:f,args:n})})),n=t,c._each(n,(function(e,n){u.on(n,e)}))):c.logMessage('Analytics adapter for "'.concat(s,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return c.logMessage('Analytics adapter for "'.concat(s,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}},54:function(e,n,t){"use strict";t.r(n),t.d(n,"browserIsFirefox",(function(){return l})),t.d(n,"browserIsIE",(function(){return d})),t.d(n,"browserIsEdge",(function(){return y})),t.d(n,"browserIsChrome",(function(){return g})),t.d(n,"browserIsSafari",(function(){return v}));var r=t(287),o=t(284),i=t(292),a=t(279),u=t(283);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s=[],f=[],p="";function l(){return"undefined"!=typeof InstallTrigger&&"Firefox"}function d(){return!!document.documentMode}function y(){return!(d()||!window.StyleMedia)&&"Edge"}function g(){return!!(window.chrome&&(window.chrome.webstore||window.chrome.runtime)||/Android/i.test(navigator.userAgent)&&window.chrome)&&"Chrome"}function v(){return!!navigator.vendor.indexOf("Apple")&&"Safari"}function b(e,n){if(e===o.EVENTS.BID_REQUESTED?s=s.concat(function(e){return e.bids.map((function(n){return{has_envelope:!!n.userId&&!!n.userId.idl_env,bidder:n.bidder,bid_id:n.bidId,auction_id:e.auctionId,user_browser:l()||y()||g()||v(),user_platform:navigator.platform,auction_start:new Date(e.auctionStart).toJSON(),domain:e.refererInfo.referer,pid:T.context.pid}}))}(n)):e===o.EVENTS.BID_RESPONSE&&f.push(function(e){return{bid_id:e.requestId,response_time_stamp:new Date(e.responseTimestamp).toJSON(),currency:e.currency,cpm:e.cpm,net_revenue:e.netRevenue}}(n)),e===o.EVENTS.AUCTION_END&&s.length){var t=[];t=f.length?s.filter((function(e){return f.filter((function(n){e.bid_id===n.bid_id&&c(e,n)}))})):s,T.context.events=t}}var T=c(Object(r.a)({host:p,analyticsType:"endpoint"}),{track:function(e){var n=e.eventType,t=e.args;if(void 0!==t&&b(n,t),n===o.EVENTS.AUCTION_END)try{var r={Data:T.context.events},i=JSON.stringify(r);Object(u.a)(T.context.host,(function(){}),i,{method:"POST",contentType:"application/json"})}catch(e){}}});T.originEnableAnalytics=T.enableAnalytics,T.enableAnalytics=function(e){if(e.options.pid)if(e.options.host){p=e.options.host,T.context={events:[],host:e.options.host,pid:e.options.pid};var n=e.options;T.originEnableAnalytics(n)}else a.logError("Host option is not defined. Analytics won't work");else a.logError("Publisher ID (pid) option is not defined. Analytics won't work")},i.default.registerAnalyticsAdapter({adapter:T,code:"atsAnalytics"}),n.default=T}}]);