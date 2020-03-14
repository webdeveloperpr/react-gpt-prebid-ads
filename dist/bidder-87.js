(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{205:function(e,n,t){"use strict";t.r(n),t.d(n,"SEND_TIMEOUT",(function(){return D})),t.d(n,"getHostNameFromReferer",(function(){return S})),t.d(n,"parseBidResponse",(function(){return w}));var r=t(287),i=t(292),o=t(284),a=t(283),s=t(282),c=t(279),u=t(290);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var p,f=o.EVENTS,b=f.AUCTION_INIT,y=f.AUCTION_END,m=f.BID_REQUESTED,g=f.BID_RESPONSE,v=f.BIDDER_DONE,I=f.BID_TIMEOUT,T=f.BID_WON,h=f.SET_TARGETING,A=o.STATUS,E=A.GOOD,U=A.NO_BID;s.b.getConfig("s2sConfig",(function(e){var n=e.s2sConfig;p=n}));var D=3e3,O={auctions:{},targeting:{},timeouts:{}};function S(e){try{M.referrerHostname=u.c(e,{noDecodeWholeURL:!0}).hostname}catch(n){c.logError("Rubicon Analytics: Unable to parse hostname from supplied url: ",e,n),M.referrerHostname=""}return M.referrerHostname}function k(e){return Object.keys(e).reduce((function(n,t){var r=e[t];return"number"==typeof r?r=r.toFixed(3):"string"!=typeof r&&(r=String(r)),n[t]=r,n}),{})}function N(e){return{width:e.w||e[0],height:e.h||e[1]}}function _(e){return-1!==["banner","native","video"].indexOf(e)}function C(e,n){function t(e){return c.pick(e,["bidder","bidId",function(n){return c.deepAccess(e,"bidResponse.seatBidId")||n},"status","error","source",function(e,n){return e||(p&&Array.isArray(p.bidders)&&-1!==p.bidders.indexOf(n.bidder)?"server":"client")},"clientLatencyMillis","serverLatencyMillis","params","bidResponse",function(e){return e?c.pick(e,["bidPriceUSD","dealId","dimensions","mediaType"]):void 0}])}function r(e){return l(t(e),c.pick(e.adUnit,["adUnitCode","transactionId","videoAdFormat",function(){return e.videoAdFormat},"mediaTypes"]),{adserverTargeting:k(O.targeting[e.adUnit.adUnitCode]||{}),bidwonStatus:"success",accountId:q,siteId:e.siteId,zoneId:e.zoneId,samplingFactor:R})}var i=O.auctions[e],o=s.b.getConfig("pageUrl")||i.referrer,u={eventTimeMillis:Date.now(),integration:s.b.getConfig("rubicon.int_type")||"pbjs",version:"3.11.0",referrerUri:o,referrerHostname:M.referrerHostname||S(o)},d=s.b.getConfig("rubicon.wrapperName");if(d&&(u.wrapperName=d),i&&!i.sent){var f=Object.keys(i.bids).reduce((function(e,n){var r=i.bids[n],o=e[r.adUnit.adUnitCode];o||((o=e[r.adUnit.adUnitCode]=c.pick(r.adUnit,["adUnitCode","transactionId","mediaTypes","dimensions","adserverTargeting",function(){return k(O.targeting[r.adUnit.adUnitCode]||{})}])).bids=[]),o.siteId&&o.zoneId||-1===j.indexOf(r.bidder)||c.deepAccess(r,"params.accountId")==q&&(o.accountId=parseInt(q),o.siteId=parseInt(c.deepAccess(r,"params.siteId")),o.zoneId=parseInt(c.deepAccess(r,"params.zoneId"))),r.videoAdFormat&&!o.videoAdFormat&&(o.videoAdFormat=r.videoAdFormat);var a=["error","no-bid","success"];return a.indexOf(r.status)>a.indexOf(o.status)&&(o.status=r.status),o.bids.push(t(r)),e}),{});Object.keys(i.bids).forEach((function(e){var n=i.bids[e].adUnit.adUnitCode;l(i.bids[e],c.pick(f[n],["accountId","siteId","zoneId"]))}));var b={clientTimeoutMillis:i.timeout,samplingFactor:R,accountId:q,adUnits:Object.keys(f).map((function(e){return f[e]}))};p&&(b.serverTimeoutMillis=p.timeout),u.auctions=[b];var y=Object.keys(i.bidsWon).reduce((function(e,n){var t=i.bidsWon[n];return t&&e.push(r(i.bids[t])),e}),[]);y.length>0&&(u.bidsWon=y),i.sent=!0}else n&&i&&i.bids[n]&&(u.bidsWon=[r(i.bids[n])]);Object(a.a)(this.getUrl(),null,JSON.stringify(u),{contentType:"application/json"})}function w(e,n){var t=function(e){return"string"==typeof e.currency&&"USD"===e.currency.toUpperCase()?Number(e.cpm):"function"==typeof e.getCpmInNewCurrency?Number(e.getCpmInNewCurrency("USD")):void c.logWarn("Rubicon Analytics Adapter: Could not determine the bidPriceUSD of the bid ",e)}(e);return n&&n.bidPriceUSD>t?n:c.pick(e,["bidPriceUSD",function(){return t},"dealId","status","mediaType","dimensions",function(){return c.pick(e,["width","height"])},"seatBidId"])}var q,R=1,j=["rubicon"];var F=Object(r.a)({analyticsType:"endpoint"}),M=l({},F,{referrerHostname:"",enableAnalytics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=!1;R=1,"object"===d(e.options)&&(e.options.accountId&&(q=Number(e.options.accountId)),e.options.endpoint?this.getUrl=function(){return e.options.endpoint}:(c.logError("required endpoint missing from rubicon analytics"),n=!0),void 0!==e.options.sampling&&(R=1/parseFloat(e.options.sampling)),void 0!==e.options.samplingFactor&&(void 0!==e.options.sampling&&c.logWarn("Both options.samplingFactor and options.sampling enabled in rubicon analytics, defaulting to samplingFactor"),R=parseFloat(e.options.samplingFactor),e.options.sampling=1/R));var t=[1,10,20,40,100];-1===t.indexOf(R)?(n=!0,c.logError("invalid samplingFactor for rubicon analytics: "+R+", must be one of "+t.join(", "))):q||(n=!0,c.logError("required accountId missing for rubicon analytics")),n||F.enableAnalytics.call(this,e)},disableAnalytics:function(){this.getUrl=F.getUrl,q=null,F.disableAnalytics.apply(this,arguments)},track:function(e){var n,t,r=this,o=e.eventType,a=e.args;switch(o){case b:t=i.default.aliasRegistry,Object.keys(t).forEach((function(e){"rubicon"===t[e]&&j.push(e)}));var s=c.pick(a,["timestamp","timeout"]);s.bids={},s.bidsWon={},s.referrer=a.bidderRequests[0].refererInfo.referer,O.auctions[a.auctionId]=s;break;case m:l(O.auctions[a.auctionId].bids,a.bids.reduce((function(e,n){return O.auctions[a.auctionId].bidsWon[n.adUnitCode]=!1,e[n.bidId]=c.pick(n,["bidder",function(e){return e.toLowerCase()},"bidId","status",function(){return"no-bid"},"finalSource as source","params",function(e,n){switch(n.bidder){case"rubicon":return c.pick(e,["accountId","siteId","zoneId"])}},"videoAdFormat",function(e,t){if("rubicon"===t.bidder)return{201:"pre-roll",202:"interstitial",203:"outstream",204:"mid-roll",205:"post-roll",207:"vertical"}[c.deepAccess(n,"params.video.size_id")];var r=parseInt(c.deepAccess(n,"params.video.startdelay"),10);return isNaN(r)?void 0:r>0?"mid-roll":{0:"pre-roll","-1":"mid-roll","-2":"post-roll"}[r]},"adUnit",function(){return c.pick(n,["adUnitCode","transactionId","sizes as dimensions",function(e){return e.map(N)},"mediaTypes",function(e){return n.mediaType&&_(n.mediaType)?[n.mediaType]:Array.isArray(e)?e.filter(_):"object"===d(e)?(n.sizes||(n.dimensions=[],c._each(e,(function(e){return n.dimensions=n.dimensions.concat(e.sizes.map(N))}))),Object.keys(e).filter(_)):["banner"]}])}]),e}),{}));break;case g:var u=O.auctions[a.auctionId].bids[a.requestId];if(!u){c.logError("Rubicon Anlytics Adapter Error: Could not find associated bid request for bid response with requestId: ",a.requestId);break}switch(u.source=(void 0===(n=u.source||a.source)?n="client":"s2s"===n&&(n="server"),n.toLowerCase()),a.getStatusCode()){case E:u.status="success",delete u.error;break;case U:u.status="no-bid",delete u.error;break;default:u.status="error",u.error={code:"request-error"}}u.clientLatencyMillis=Date.now()-O.auctions[a.auctionId].timestamp,u.bidResponse=w(a,u.bidResponse);break;case v:a.bids.forEach((function(e){var n=O.auctions[e.auctionId].bids[e.bidId||e.requestId];void 0!==e.serverResponseTimeMs&&(n.serverLatencyMillis=e.serverResponseTimeMs),n.status||(n.status="no-bid"),n.clientLatencyMillis||(n.clientLatencyMillis=Date.now()-O.auctions[e.auctionId].timestamp)}));break;case h:l(O.targeting,a);break;case T:var p=O.auctions[a.auctionId];p.bidsWon[a.adUnitCode]=a.requestId,!0===p.sent?C.call(this,a.auctionId,a.requestId):Object.keys(p.bidsWon).reduce((function(e,n){return e=e&&p.bidsWon[n]}),!0)&&(clearTimeout(O.timeouts[a.auctionId]),delete O.timeouts[a.auctionId],C.call(this,a.auctionId));break;case y:O.timeouts[a.auctionId]=setTimeout((function(){C.call(r,a.auctionId)}),D);break;case I:a.forEach((function(e){var n=O.auctions[e.auctionId].bids[e.bidId||e.requestId];n.status="error",n.error={code:"timeout-error"}}))}}});i.default.registerAnalyticsAdapter({adapter:M,code:"rubicon"}),n.default=M},287:function(e,n,t){"use strict";t.d(n,"a",(function(){return E}));var r=t(284),i=t(283);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=t(291),c=t(279),u=r.EVENTS,d=u.AUCTION_INIT,l=u.AUCTION_END,p=u.REQUEST_BIDS,f=u.BID_REQUESTED,b=u.BID_TIMEOUT,y=u.BID_RESPONSE,m=u.NO_BID,g=u.BID_WON,v=u.BID_ADJUSTMENT,I=u.BIDDER_DONE,T=u.SET_TARGETING,h=u.AD_RENDER_FAILED,A=u.ADD_AD_UNITS;function E(e){var n,t=e.url,r=e.analyticsType,u=e.global,E=e.handler,U=[],D=0,O=!0;return function(){if(O){for(var e=0;e<U.length;e++)U[e]();U.push=function(e){e()},O=!1}c.logMessage("event count sent to ".concat(u,": ").concat(D))}(),{track:function(e){var n=e.eventType,t=e.args;"bundle"===this.getAdapterType()&&window[u](E,n,t);"endpoint"===this.getAdapterType()&&S.apply(void 0,arguments)},enqueue:k,enableAnalytics:N,disableAnalytics:function(){c._each(n,(function(e,n){s.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:N},getAdapterType:function(){return r},getGlobal:function(){return u},getHandler:function(){return E},getUrl:function(){return t}};function S(e){var n=e.eventType,r=e.args,o=e.callback;Object(i.a)(t,o,JSON.stringify({eventType:n,args:r}))}function k(e){var n=e.eventType,t=e.args,r=this;u&&window[u]&&n&&t?this.track({eventType:n,args:t}):U.push((function(){D++,r.track({eventType:n,args:t})}))}function N(e){var t,r=this,i=this;"object"!==a(e)||"object"!==a(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(s.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==b&&k.call(i,{eventType:n,args:t})}})),o(t={},p,(function(e){return r.enqueue({eventType:p,args:e})})),o(t,f,(function(e){return r.enqueue({eventType:f,args:e})})),o(t,y,(function(e){return r.enqueue({eventType:y,args:e})})),o(t,m,(function(e){return r.enqueue({eventType:m,args:e})})),o(t,b,(function(e){return r.enqueue({eventType:b,args:e})})),o(t,g,(function(e){return r.enqueue({eventType:g,args:e})})),o(t,v,(function(e){return r.enqueue({eventType:v,args:e})})),o(t,I,(function(e){return r.enqueue({eventType:I,args:e})})),o(t,T,(function(e){return r.enqueue({eventType:T,args:e})})),o(t,l,(function(e){return r.enqueue({eventType:l,args:e})})),o(t,h,(function(e){return r.enqueue({eventType:h,args:e})})),o(t,A,(function(e){return r.enqueue({eventType:A,args:e})})),o(t,d,(function(n){n.config="object"===a(e)&&e.options||{},r.enqueue({eventType:d,args:n})})),n=t,c._each(n,(function(e,n){s.on(n,e)}))):c.logMessage('Analytics adapter for "'.concat(u,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return c.logMessage('Analytics adapter for "'.concat(u,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}}}]);