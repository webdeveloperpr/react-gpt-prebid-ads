(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{130:function(e,n,t){"use strict";t.r(n);var r=t(287),a=t(292),o=Object(r.a)({analyticsType:"endpoint",url:"https://krk.kargo.com/api/v1/event/prebid"});a.default.registerAnalyticsAdapter({adapter:o,code:"kargo"}),n.default=o},287:function(e,n,t){"use strict";t.d(n,"a",(function(){return D}));var r=t(284),a=t(283);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=t(291),c=t(279),s=r.EVENTS,l=s.AUCTION_INIT,p=s.AUCTION_END,f=s.REQUEST_BIDS,y=s.BID_REQUESTED,g=s.BID_TIMEOUT,T=s.BID_RESPONSE,v=s.NO_BID,b=s.BID_WON,d=s.BID_ADJUSTMENT,E=s.BIDDER_DONE,h=s.SET_TARGETING,A=s.AD_RENDER_FAILED,_=s.ADD_AD_UNITS;function D(e){var n,t=e.url,r=e.analyticsType,s=e.global,D=e.handler,I=[],S=0,q=!0;return function(){if(q){for(var e=0;e<I.length;e++)I[e]();I.push=function(e){e()},q=!1}c.logMessage("event count sent to ".concat(s,": ").concat(S))}(),{track:function(e){var n=e.eventType,t=e.args;"bundle"===this.getAdapterType()&&window[s](D,n,t);"endpoint"===this.getAdapterType()&&N.apply(void 0,arguments)},enqueue:m,enableAnalytics:w,disableAnalytics:function(){c._each(n,(function(e,n){i.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:w},getAdapterType:function(){return r},getGlobal:function(){return s},getHandler:function(){return D},getUrl:function(){return t}};function N(e){var n=e.eventType,r=e.args,o=e.callback;Object(a.a)(t,o,JSON.stringify({eventType:n,args:r}))}function m(e){var n=e.eventType,t=e.args,r=this;s&&window[s]&&n&&t?this.track({eventType:n,args:t}):I.push((function(){S++,r.track({eventType:n,args:t})}))}function w(e){var t,r=this,a=this;"object"!==u(e)||"object"!==u(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(i.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==g&&m.call(a,{eventType:n,args:t})}})),o(t={},f,(function(e){return r.enqueue({eventType:f,args:e})})),o(t,y,(function(e){return r.enqueue({eventType:y,args:e})})),o(t,T,(function(e){return r.enqueue({eventType:T,args:e})})),o(t,v,(function(e){return r.enqueue({eventType:v,args:e})})),o(t,g,(function(e){return r.enqueue({eventType:g,args:e})})),o(t,b,(function(e){return r.enqueue({eventType:b,args:e})})),o(t,d,(function(e){return r.enqueue({eventType:d,args:e})})),o(t,E,(function(e){return r.enqueue({eventType:E,args:e})})),o(t,h,(function(e){return r.enqueue({eventType:h,args:e})})),o(t,p,(function(e){return r.enqueue({eventType:p,args:e})})),o(t,A,(function(e){return r.enqueue({eventType:A,args:e})})),o(t,_,(function(e){return r.enqueue({eventType:_,args:e})})),o(t,l,(function(n){n.config="object"===u(e)&&e.options||{},r.enqueue({eventType:l,args:n})})),n=t,c._each(n,(function(e,n){i.on(n,e)}))):c.logMessage('Analytics adapter for "'.concat(s,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return c.logMessage('Analytics adapter for "'.concat(s,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}}}]);