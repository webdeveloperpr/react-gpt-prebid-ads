(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{201:function(e,t,n){"use strict";n.r(t);var i=n(287),r=n(284),a=n(292),o=n(285),s=n.n(o),u=n(283);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var d=n(279),f=Object(u.b)(0),p=r.EVENTS,l=p.AUCTION_INIT,v=p.AUCTION_END,g=p.BID_REQUESTED,m=p.BID_ADJUSTMENT,h=p.BIDDER_DONE,b=p.BID_WON,y="running",T="finished",I="requested",w="bid",E="noBid",D="timeout",_="a",A="i",U="bat",N={},S=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],C={},O=[],k=null;function q(){localStorage.setItem(B("utm_ttl"),Date.now())}function B(e){return"roxot_analytics_".concat(e)}function j(e){return!N.adUnits.length||s()(N.adUnits,e)}function R(e){return e.adUnitCode.toLowerCase()}function x(e){return e.bidder.toLowerCase()}function z(e){C[e.auctionId]=function(e){return{id:e.auctionId,start:e.timestamp,timeout:e.timeout,adUnits:{}}}(e),function(){for(var e in C){var t=C[e];Date.now()-t.start>36e5&&delete C[e]}}()}function J(e){var t=C[e.auctionId];e.bids.forEach((function(e){var n=R(e),i=x(e);if(j(n)){t.adUnits[n]=t.adUnits[n]||function(e,t){return{adUnit:R(t),start:e.start,timeout:e.timeout,finish:0,status:y,bidders:{}}}(t,e);var r=t.adUnits[n];r.bidders[i]=r.bidders[i]||function(e,t){return{bidder:x(t),isAfterTimeout:e.status===T?1:0,start:t.startTime||Date.now(),finish:0,status:I,cpm:-1,size:{width:0,height:0},mediaType:"-",source:t.source||"client"}}(t,e)}}))}function M(e){var t=R(e),n=x(e);if(j(t)){var i=C[e.auctionId].adUnits[t];if(i.status!==T){var r=i.bidders[n];r.cpm<e.cpm&&(r.cpm=e.cpm,r.finish=e.responseTimestamp,r.status=0===e.cpm?E:w,r.size.width=e.width||0,r.size.height=e.height||0,r.mediaType=e.mediaType||"-",r.source=e.source||"client")}else!function(e,t){var n=x(t),i=e.bidders[n],r=function(e,t){return{auction:d.deepClone(e),adUnit:R(t),bidder:x(t),cpm:t.cpm,size:{width:t.width||0,height:t.height||0},mediaType:t.mediaType||"-",start:t.requestTimestamp,finish:t.responseTimestamp}}(e,t);r.cpm>i.cpm&&(i.cpm=r.cpm,i.isAfterTimeout=1,i.finish=r.finish,i.size=r.size,i.mediaType=r.mediaType,i.status=0===r.cpm?E:w);G(U,"Bid After Timeout",r)}(i,e)}}function L(e){var t=R(e);if(j(t)){var n=function(e,t){return{isNew:(n=B("is_new_flag"),i=Number(localStorage.getItem(n)),localStorage.setItem(n,Date.now()),Date.now()-i>36e5?1:0),auction:d.deepClone(e),adUnit:R(t),bidder:x(t),cpm:t.cpm,size:{width:t.width,height:t.height},mediaType:t.mediaType,source:t.source||"client"};var n,i}(C[e.auctionId].adUnits[t],e);G(A,"Bid won",n)}}var P=c(Object(i.a)({url:"pa.rxthdr.com/v3",analyticsType:"endpoint"}),{track:function(e){var t=e.eventType,n=e.args;switch(t){case l:z(n);break;case g:J(n);break;case m:M(n);break;case h:!function(e){var t=C[e.auctionId];e.bids.forEach((function(e){var n=R(e),i=x(e);if(j(n)){var r=t.adUnits[n];if(r.status!==T){var a=r.bidders[i];a.status===I&&(a.finish=Date.now(),a.status=E,a.cpm=0)}}}))}(n);break;case v:!function(e){var t=C[e.auctionId];Object.keys(t.adUnits).length||delete C[e.auctionId];var n=Date.now();for(var i in t.finish=n,t.adUnits){var r=t.adUnits[i];for(var a in r.finish=n,r.status=T,r.bidders){var o=r.bidders[a];o.status===I&&(o.status=D)}}G(_,"Auction",t)}(n);break;case b:L(n);break;default:!function(e,t){G(e,e,t)}(t,n)}}});function G(e,t,n){var i={eventType:e,eventName:t,data:n};O.push(i),W("Register event",i),void 0===N.serverConfig?F():Q()}function Q(){if(k&&(clearTimeout(k),k=null),void 0!==N.serverConfig)for(;O.length;){var e=O.shift(),t=N.serverConfig[e.eventType]||0;0!==Number(t)?V(e.eventType,e.eventName,e.data):W("Skip event "+e.eventName,e)}else F()}function F(){k||(k=setTimeout(Q,1e3))}function V(e,t,n){var i="https://"+N.server+"/"+e+"?publisherId="+N.publisherId+"&host="+N.host,r={event:e,eventName:t,options:N,data:n};f(i,(function(){W(t+" sent",r)}),JSON.stringify(r),{contentType:"text/plain",method:"POST",withCredentials:!0})}function W(e,t){d.logInfo(H(e),t)}function H(e){return"Roxot Prebid Analytics: "+e}P.originEnableAnalytics=P.enableAnalytics,P.enableAnalytics=function(e){this.initConfig(e)&&(W("Analytics adapter enabled",N),P.originEnableAnalytics(e))},P.buildUtmTagData=function(){var e={},t=!1;return S.forEach((function(n){var i=d.getParameterByName(n);""!==i&&(t=!0),e[n]=i})),S.forEach((function(n){var i;t?(localStorage.setItem(B(n),e[n]),q()):(i=localStorage.getItem(B("utm_ttl")),Date.now()-i>36e5||(e[n]=localStorage.getItem(B(n))?localStorage.getItem(B(n)):"",q()))})),e},P.initConfig=function(e){var t,n,i=!0;return(N={}).options=d.deepClone(e.options),N.publisherId=N.options.publisherId||N.options.publisherIds[0]||null,N.publisherId||(t='"options.publisherId" is empty',d.logError(H(t)),i=!1),N.adUnits=N.options.adUnits||[],N.adUnits=N.adUnits.map((function(e){return e.toLowerCase()})),N.server=N.options.server||"pa.rxthdr.com/v3",N.configServer=N.options.configServer||N.options.server||"pa.rxthdr.com/v3",N.utmTagData=this.buildUtmTagData(),N.host=N.options.host||window.location.hostname,N.device=/ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase())?"tablet":/iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(navigator.userAgent.toLowerCase())?"mobile":"desktop",n="https://"+N.configServer+"/c?publisherId="+N.publisherId+"&host="+N.host,f(n,{success:function(e){N.serverConfig=JSON.parse(e)},error:function(){N.serverConfig={},N.serverConfig[_]=1,N.serverConfig[A]=1,N.serverConfig[U]=1,N.serverConfig.isError=1}},null,{contentType:"text/json",method:"GET",withCredentials:!0}),i},P.getOptions=function(){return N},a.default.registerAnalyticsAdapter({adapter:P,code:"roxot"}),t.default=P},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var i=n(284),r=n(283);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=n(291),u=n(279),c=i.EVENTS,d=c.AUCTION_INIT,f=c.AUCTION_END,p=c.REQUEST_BIDS,l=c.BID_REQUESTED,v=c.BID_TIMEOUT,g=c.BID_RESPONSE,m=c.NO_BID,h=c.BID_WON,b=c.BID_ADJUSTMENT,y=c.BIDDER_DONE,T=c.SET_TARGETING,I=c.AD_RENDER_FAILED,w=c.ADD_AD_UNITS;function E(e){var t,n=e.url,i=e.analyticsType,c=e.global,E=e.handler,D=[],_=0,A=!0;return function(){if(A){for(var e=0;e<D.length;e++)D[e]();D.push=function(e){e()},A=!1}u.logMessage("event count sent to ".concat(c,": ").concat(_))}(),{track:function(e){var t=e.eventType,n=e.args;"bundle"===this.getAdapterType()&&window[c](E,t,n);"endpoint"===this.getAdapterType()&&U.apply(void 0,arguments)},enqueue:N,enableAnalytics:S,disableAnalytics:function(){u._each(t,(function(e,t){s.off(t,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:S},getAdapterType:function(){return i},getGlobal:function(){return c},getHandler:function(){return E},getUrl:function(){return n}};function U(e){var t=e.eventType,i=e.args,a=e.callback;Object(r.a)(n,a,JSON.stringify({eventType:t,args:i}))}function N(e){var t=e.eventType,n=e.args,i=this;c&&window[c]&&t&&n?this.track({eventType:t,args:n}):D.push((function(){_++,i.track({eventType:t,args:n})}))}function S(e){var n,i=this,r=this;"object"!==o(e)||"object"!==o(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(s.getEvents().forEach((function(e){if(e){var t=e.eventType,n=e.args;t!==v&&N.call(r,{eventType:t,args:n})}})),a(n={},p,(function(e){return i.enqueue({eventType:p,args:e})})),a(n,l,(function(e){return i.enqueue({eventType:l,args:e})})),a(n,g,(function(e){return i.enqueue({eventType:g,args:e})})),a(n,m,(function(e){return i.enqueue({eventType:m,args:e})})),a(n,v,(function(e){return i.enqueue({eventType:v,args:e})})),a(n,h,(function(e){return i.enqueue({eventType:h,args:e})})),a(n,b,(function(e){return i.enqueue({eventType:b,args:e})})),a(n,y,(function(e){return i.enqueue({eventType:y,args:e})})),a(n,T,(function(e){return i.enqueue({eventType:T,args:e})})),a(n,f,(function(e){return i.enqueue({eventType:f,args:e})})),a(n,I,(function(e){return i.enqueue({eventType:I,args:e})})),a(n,w,(function(e){return i.enqueue({eventType:w,args:e})})),a(n,d,(function(t){t.config="object"===o(e)&&e.options||{},i.enqueue({eventType:d,args:t})})),t=n,u._each(t,(function(e,t){s.on(t,e)}))):u.logMessage('Analytics adapter for "'.concat(c,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return u.logMessage('Analytics adapter for "'.concat(c,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}}}]);