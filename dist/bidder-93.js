(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{233:function(n,t,e){"use strict";e.r(t),e.d(t,"storage",(function(){return k})),e.d(t,"getUmtSource",(function(){return U})),e.d(t,"ExpiringQueue",(function(){return j}));var r=e(287),o=e(284),i=e(292),a=e(312),u=e(290),c=e(279),s=e(283);function d(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if(!(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var a,u=n[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(){return(l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var f,p="auctionInit",g="bidRequested",v="bidResponse",h="bidWon",y="auctionEnd",m="adapterTimedOut";var b=l(Object(r.a)({analyticsType:"endpoint"}),{track:function(n){var t=n.eventType,e=n.args;if(b.context){var r=null;switch(t){case o.EVENTS.AUCTION_INIT:b.context.queue&&b.context.queue.init(),r=I;break;case o.EVENTS.BID_REQUESTED:r=E;break;case o.EVENTS.BID_RESPONSE:r=w;break;case o.EVENTS.BID_WON:r=A;break;case o.EVENTS.BID_TIMEOUT:r=S;break;case o.EVENTS.AUCTION_END:r=_}if(r){var i=r(e);b.context.queue&&(b.context.queue.push(i),t===o.EVENTS.BID_WON&&b.context.queue.updateWithWins(i)),t===o.EVENTS.AUCTION_END&&T()}}}});function T(){var n=b.context.queue.popAll();if(0!==n.length){var t=b.context.requestTemplate;t.auctionId=b.context.auctionId,t.events=n,b.ajaxCall(JSON.stringify(t))}}function I(n){return b.context.auctionTimeStart=Date.now(),b.context.auctionId=n.auctionId,[N(n.auctionId,void 0,p)]}function E(n){return n.bids.map((function(t){return N(n.auctionId,n.bidderCode,g,t.adUnitCode)}))}function w(n){return[N(n.auctionId,n.bidderCode,v,n.adUnitCode,n.cpm,n.timeToRespond/1e3,!1,n)]}function A(n){return[N(n.auctionId,n.bidderCode,h,n.adUnitCode,n.cpm,void 0,!0,n)]}function _(n){return[N(n.auctionId,void 0,y,void 0,void 0,(Date.now()-b.context.auctionTimeStart)/1e3)]}function S(n){return n.map((function(n){return N(n.auctionId,n.bidderCode,m)}))}function N(n,t,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:void 0,u=arguments.length>7?arguments[7]:void 0,c={event:e};return t&&(c.adapter=t,c.bidderName=t),r&&(c.adUnitCode=r),o&&(c.cpm=o),i&&(c.timeToRespond=i),void 0!==a?c.bidWon=a:"bidResponse"===e&&(c.bidWon=!1),c.auctionId=n,u&&(v!=e&&h!=e||(c.width=u.width,c.height=u.height,c.adId=u.adId)),c}b.context={},b.originEnableAnalytics=b.enableAnalytics,b.enableAnalytics=function(n){var t,e,r,o;(c.logInfo("Enabling STAQ Adapter"),f=Object(a.b)(window),n.options.connId)?n.options.url?(b.context={host:n.options.host||"tag.staq.com",url:n.options.url,connectionId:n.options.connId,requestTemplate:(t=n.options.connId,e=f.referer,r=f.referer,o=f.referer,{ver:"1.0.0",domain:o.hostname,path:o.pathname,userAgent:navigator.userAgent,connId:t,env:{screen:{w:window.screen.width,h:window.screen.height},lang:navigator.language},src:U(e,r)}),queue:new j(T,n.options.queueTimeout||4e3)},b.originEnableAnalytics(n)):c.logError("URL is not defined. STAQ Analytics won't work"):c.logError("ConnId is not defined. STAQ Analytics won't work")},i.default.registerAnalyticsAdapter({adapter:b,code:"staq"}),t.default=b,b.ajaxCall=function(n){c.logInfo("SENDING DATA: "+n),Object(s.a)("https://".concat(b.context.url,"/prebid/").concat(b.context.connectionId),(function(){}),n,{contentType:"text/plain"})};var O=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","utm_c1","utm_c2","utm_c3","utm_c4","utm_c5"],D="(direct)",q="(referral)",x="(organic)",k={getItem:function(n){return localStorage.getItem(n)},setItem:function(n,t){localStorage.setItem(n,t)}};function U(n,t){var e,r,o=function(){var n=k.getItem("staq_analytics");if(!n)return f();return JSON.parse(n)}(),i=function(n,t){var e=function(n){var t=Object(u.c)(n).search;if(!t.utm_campaign||!t.utm_source)return;var e=[];return c._each(O,(function(n){var r=t[n]||"";e.push(r)})),p.apply(this,e)}(n);if(e)return e;if(t){var r=function(n){var t={google:/^https?\:\/\/(?:www\.)?(?:google\.(?:com?\.)?(?:com|cat|[a-z]{2})|g.cn)\//i,yandex:/^https?\:\/\/(?:www\.)?ya(?:ndex\.(?:com|net)?\.?(?:asia|mobi|org|[a-z]{2})?|\.ru)\//i,bing:/^https?\:\/\/(?:www\.)?bing\.com\//i,duckduckgo:/^https?\:\/\/(?:www\.)?duckduckgo\.com\//i,ask:/^https?\:\/\/(?:www\.)?ask\.com\//i,yahoo:/^https?\:\/\/(?:[-a-z]+\.)?(?:search\.)?yahoo\.com\//i};for(var e in t)if(t.hasOwnProperty(e)&&t[e].test(n))return e}(t);if(r)return p(r,x,x);var o=Object(u.c)(n),i=d(function(n){var t=Object(u.c)(n);return[t.hostname,t.pathname]}(t),2),a=i[0],s=i[1];if(a&&a!==o.hostname)return p(a,q,q,"",s)}return f()}(n,t),a=d(function(n,t){if(g(n)<g(t))return[!0,t];if(g(n)>g(t))return[!1,n];if(n.campaign===q&&n.content!==t.content)return[!0,t];if(n.campaign===x&&n.source!==t.source)return[!0,t];if(-1===[D,q,x].indexOf(n.campaign)&&(n.campaign!==t.campaign||n.source!==t.source))return[!0,t];return[!1,n]}(o,i),2),s=a[0],l=a[1];return s&&(e=l,r=JSON.stringify(e),k.setItem("staq_analytics",r)),l;function f(){return p(D,D,D)}function p(n,t,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",s=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",d={source:n,medium:t,campaign:e};return r&&(d.term=r),o&&(d.content=o),i&&(d.c1=i),a&&(d.c2=a),u&&(d.c3=u),c&&(d.c4=c),s&&(d.c5=s),d}function g(n){switch(n.campaign){case D:return 0;case x:return 1;case q:return 2;default:return 3}}}function j(n,t){var e,r=[];function o(){e&&clearTimeout(e),e=setTimeout((function(){r.length&&n()}),t)}this.push=function(n){n instanceof Array?r.push.apply(r,n):r.push(n),o()},this.updateWithWins=function(n){n.forEach((function(n){r.forEach((function(t){"bidResponse"===t.event&&t.auctionId==n.auctionId&&t.adUnitCode==n.adUnitCode&&t.adId==n.adId&&t.adapter==n.adapter&&(t.bidWon=!0)}))}))},this.popAll=function(){var n=r;return r=[],o(),n},this.peekAll=function(){return r},this.init=o}},287:function(n,t,e){"use strict";e.d(t,"a",(function(){return w}));var r=e(284),o=e(283);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var u=e(291),c=e(279),s=r.EVENTS,d=s.AUCTION_INIT,l=s.AUCTION_END,f=s.REQUEST_BIDS,p=s.BID_REQUESTED,g=s.BID_TIMEOUT,v=s.BID_RESPONSE,h=s.NO_BID,y=s.BID_WON,m=s.BID_ADJUSTMENT,b=s.BIDDER_DONE,T=s.SET_TARGETING,I=s.AD_RENDER_FAILED,E=s.ADD_AD_UNITS;function w(n){var t,e=n.url,r=n.analyticsType,s=n.global,w=n.handler,A=[],_=0,S=!0;return function(){if(S){for(var n=0;n<A.length;n++)A[n]();A.push=function(n){n()},S=!1}c.logMessage("event count sent to ".concat(s,": ").concat(_))}(),{track:function(n){var t=n.eventType,e=n.args;"bundle"===this.getAdapterType()&&window[s](w,t,e);"endpoint"===this.getAdapterType()&&N.apply(void 0,arguments)},enqueue:O,enableAnalytics:D,disableAnalytics:function(){c._each(t,(function(n,t){u.off(t,n)})),this.enableAnalytics=this._oldEnable?this._oldEnable:D},getAdapterType:function(){return r},getGlobal:function(){return s},getHandler:function(){return w},getUrl:function(){return e}};function N(n){var t=n.eventType,r=n.args,i=n.callback;Object(o.a)(e,i,JSON.stringify({eventType:t,args:r}))}function O(n){var t=n.eventType,e=n.args,r=this;s&&window[s]&&t&&e?this.track({eventType:t,args:e}):A.push((function(){_++,r.track({eventType:t,args:e})}))}function D(n){var e,r=this,o=this;"object"!==a(n)||"object"!==a(n.options)||(void 0===n.options.sampling||Math.random()<parseFloat(n.options.sampling))?(u.getEvents().forEach((function(n){if(n){var t=n.eventType,e=n.args;t!==g&&O.call(o,{eventType:t,args:e})}})),i(e={},f,(function(n){return r.enqueue({eventType:f,args:n})})),i(e,p,(function(n){return r.enqueue({eventType:p,args:n})})),i(e,v,(function(n){return r.enqueue({eventType:v,args:n})})),i(e,h,(function(n){return r.enqueue({eventType:h,args:n})})),i(e,g,(function(n){return r.enqueue({eventType:g,args:n})})),i(e,y,(function(n){return r.enqueue({eventType:y,args:n})})),i(e,m,(function(n){return r.enqueue({eventType:m,args:n})})),i(e,b,(function(n){return r.enqueue({eventType:b,args:n})})),i(e,T,(function(n){return r.enqueue({eventType:T,args:n})})),i(e,l,(function(n){return r.enqueue({eventType:l,args:n})})),i(e,I,(function(n){return r.enqueue({eventType:I,args:n})})),i(e,E,(function(n){return r.enqueue({eventType:E,args:n})})),i(e,d,(function(t){t.config="object"===a(n)&&n.options||{},r.enqueue({eventType:d,args:t})})),t=e,c._each(t,(function(n,t){u.on(t,n)}))):c.logMessage('Analytics adapter for "'.concat(s,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return c.logMessage('Analytics adapter for "'.concat(s,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}}}]);