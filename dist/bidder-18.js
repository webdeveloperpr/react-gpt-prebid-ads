(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{285:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));var r=t(282),o=t(281);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=t(289),u=t(277),s=r.EVENTS,l=s.AUCTION_INIT,d=s.AUCTION_END,p=s.REQUEST_BIDS,f=s.BID_REQUESTED,y=s.BID_TIMEOUT,v=s.BID_RESPONSE,b=s.NO_BID,g=s.BID_WON,E=s.BID_ADJUSTMENT,h=s.BIDDER_DONE,T=s.SET_TARGETING,m=s.AD_RENDER_FAILED,A=s.ADD_AD_UNITS;function I(e){var n,t=e.url,r=e.analyticsType,s=e.global,I=e.handler,w=[],C=0,N=!0;return function(){if(N){for(var e=0;e<w.length;e++)w[e]();w.push=function(e){e()},N=!1}u.logMessage("event count sent to ".concat(s,": ").concat(C))}(),{track:function(e){var n=e.eventType,t=e.args;"bundle"===this.getAdapterType()&&window[s](I,n,t);"endpoint"===this.getAdapterType()&&S.apply(void 0,arguments)},enqueue:O,enableAnalytics:_,disableAnalytics:function(){u._each(n,(function(e,n){c.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:_},getAdapterType:function(){return r},getGlobal:function(){return s},getHandler:function(){return I},getUrl:function(){return t}};function S(e){var n=e.eventType,r=e.args,i=e.callback;Object(o.a)(t,i,JSON.stringify({eventType:n,args:r}))}function O(e){var n=e.eventType,t=e.args,r=this;s&&window[s]&&n&&t?this.track({eventType:n,args:t}):w.push((function(){C++,r.track({eventType:n,args:t})}))}function _(e){var t,r=this,o=this;"object"!==a(e)||"object"!==a(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(c.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==y&&O.call(o,{eventType:n,args:t})}})),i(t={},p,(function(e){return r.enqueue({eventType:p,args:e})})),i(t,f,(function(e){return r.enqueue({eventType:f,args:e})})),i(t,v,(function(e){return r.enqueue({eventType:v,args:e})})),i(t,b,(function(e){return r.enqueue({eventType:b,args:e})})),i(t,y,(function(e){return r.enqueue({eventType:y,args:e})})),i(t,g,(function(e){return r.enqueue({eventType:g,args:e})})),i(t,E,(function(e){return r.enqueue({eventType:E,args:e})})),i(t,h,(function(e){return r.enqueue({eventType:h,args:e})})),i(t,T,(function(e){return r.enqueue({eventType:T,args:e})})),i(t,d,(function(e){return r.enqueue({eventType:d,args:e})})),i(t,m,(function(e){return r.enqueue({eventType:m,args:e})})),i(t,A,(function(e){return r.enqueue({eventType:A,args:e})})),i(t,l,(function(n){n.config="object"===a(e)&&e.options||{},r.enqueue({eventType:l,args:n})})),n=t,u._each(n,(function(e,n){c.on(n,e)}))):u.logMessage('Analytics adapter for "'.concat(s,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return u.logMessage('Analytics adapter for "'.concat(s,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}},317:function(e,n,t){t(318),e.exports=t(296).Array.findIndex},318:function(e,n,t){"use strict";var r=t(295),o=t(313)(6),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),t(308)(i)},32:function(e,n,t){"use strict";t.r(n);var r=t(285),o=t(282),i=t(290),a=t(277),c=t(286),u=t.n(c),s=t(317),l=t.n(s);function d(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f=o.EVENTS.AUCTION_INIT,y=o.EVENTS.AUCTION_END,v=o.EVENTS.BID_REQUESTED,b=o.EVENTS.BID_RESPONSE,g=o.EVENTS.BID_WON,E=o.EVENTS.BID_TIMEOUT,h=p(Object(r.a)({}),{track:function(e){var n=e.eventType,t=e.args;switch(n){case f:h.initializeBucketEvents(),h.currentContext.id=t.auctionId;break;case E:h.currentContext.timeouted=!0;break;case b:h.bucketEvents.push({type:"response",event:h.buildBidResponse(t)});break;case g:h.sendWonEvent({id:t.adId,placementCode:t.adUnitCode});break;case v:t.bids.forEach((function(e){h.bucketEvents.push({type:"request",event:{bidder:e.bidder.toUpperCase(),placementCode:e.placementCode}})}));break;case y:h.bucketEvents.length>0&&h.sendTypedEvent()}}});h.initializeBucketEvents=function(){h.bucketEvents=[]},h.sendTypedEvent=function(){var e=h.buildTypedEvents(),n={uid:h.currentContext.uid,ahbaid:h.currentContext.id,hostname:window.location.hostname,eventsByPlacementCode:e.map((function(e){var n=[],t={};return["request","response","winner"].forEach((function(r){t["".concat(r,"s")]=[],void 0!==e[r]&&e[r].forEach((function(e){if(void 0!==e.event.size){var o=h.sizeUtils.handleSize(n,e.event.size);null!==o&&(n=[].concat(d(n),[o]))}t["".concat(r,"s")]=[].concat(d(t["".concat(r,"s")]),[e.event])}))})),{placementCode:e.placementCode,sizes:n,events:t}}))},t=JSON.stringify(n);Object(a.logInfo)("Events sent to adomik prebid analytic "+t);var r=window.btoa(t),o=encodeURIComponent(r).match(/.{1,1600}/g);o.forEach((function(e,n){var t="".concat(e,"&id=").concat(h.currentContext.id,"&part=").concat(n,"&on=").concat(o.length-1);new Image(1,1).src="https://"+h.currentContext.url+"/?q="+t}))},h.sendWonEvent=function(e){var n=JSON.stringify(e);Object(a.logInfo)("Won event sent to adomik prebid analytic "+e);var t=window.btoa(n),r=encodeURIComponent(t);new Image(1,1).src="https://".concat(h.currentContext.url,"/?q=").concat(r,"&id=").concat(h.currentContext.id,"&won=true")},h.buildBidResponse=function(e){return{bidder:e.bidderCode.toUpperCase(),placementCode:e.adUnitCode,id:e.adId,status:"Bid available"===e.statusMessage?"VALID":"EMPTY_OR_ERROR",cpm:parseFloat(e.cpm),size:{width:Number(e.width),height:Number(e.height)},timeToRespond:e.timeToRespond,afterTimeout:h.currentContext.timeouted}},h.sizeUtils={sizeAlreadyExists:function(e,n){return u()(e,(function(e){return e.height===n.height&&e.width===n.width}))},formatSize:function(e){return{width:Number(e.width),height:Number(e.height)}},handleSize:function(e,n){var t=null;return void 0===h.sizeUtils.sizeAlreadyExists(e,n)&&(t=h.sizeUtils.formatSize(n)),t}},h.buildTypedEvents=function(){var e=[];return h.bucketEvents.forEach((function(n,t){var r,o,i,a=[n.event.placementCode,n.type],c=a[0],u=a[1],s=l()(e,(function(e){return e.placementCode===c}));-1===s&&(e.push((i=[n],(o=u)in(r={placementCode:c})?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,r)),s=e.length-1),e[s][u]?e[s][u]=[].concat(d(e[s][u]),[n]):e[s][u]=[n]})),e},h.adapterEnableAnalytics=h.enableAnalytics,h.enableAnalytics=function(e){h.currentContext={};var n=e.options;n&&(h.currentContext={uid:n.id,url:n.url,id:"",timeouted:!1},Object(a.logInfo)("Adomik Analytics enabled with config",n),h.adapterEnableAnalytics(e))},i.default.registerAnalyticsAdapter({adapter:h,code:"adomik"}),n.default=h}}]);