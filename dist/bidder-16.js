(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{133:function(t,n,e){"use strict";e.r(n),e.d(n,"logInfo",(function(){return s})),e.d(n,"logError",(function(){return f})),e.d(n,"buildVastUrl",(function(){return g}));var r=e(321),i=e(303),o=e(290),a=e(279),c=e(282);function u(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(t){return(t=[].slice.call(t)).unshift("".concat("Konduit",": ")),t}function s(){a.logInfo.apply(a,u(d(arguments)))}function f(){a.logError.apply(a,u(d(arguments)))}function g(t){if(!t.params||!t.params.konduit_id)return f("'konduit_id' parameter is required for pbjs.adServers.konduit.buildVastUrl function"),null;var n=t.bid||i.a.getWinningBids()[0];if(!n)return f("Bid is not provided or not found"),null;s("The following bid will be wrapped: ",n);var e={},r=function(t){var n=t&&t.vastUrl;if(n)return s("VAST url found in the bid - ".concat(n)),encodeURIComponent(n);var e=c.b.getConfig("cache.url");if(e){var r="".concat(e,"?uuid=").concat(t.videoCacheKey);return s("VAST url is taken from cache.url: ".concat(r)),encodeURIComponent(r)}}(n);r?(e.konduit_id=t.params.konduit_id,e.konduit_header_bidding=1,e.konduit_url=r):f("No VAST url found in the bid");var a=null;return e.konduit_url&&(a=Object(o.a)({protocol:"https",host:"p.konduit.me",pathname:"/api/vastProxy",search:e}),s("Konduit wrapped VAST url: ".concat(a))),a}Object(r.a)("konduit",{buildVastUrl:g})},295:function(t,n,e){"use strict";function r(){return window.pbjs}e.d(n,"a",(function(){return r})),window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[],window._pbjsGlobals=window._pbjsGlobals||[],window._pbjsGlobals.push("pbjs")},296:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(279),i=e(302),o=e(288),a=e.n(o),c=e(284);var u=function(){var t=[],n={};return n.addWinningBid=function(n){var e=a()(t,(function(t){return t.getAuctionId()===n.auctionId}));e?(n.status=c.BID_STATUS.RENDERED,e.addWinningBid(n)):Object(r.logWarn)("Auction not found when adding winning bid")},n.getAllWinningBids=function(){return t.map((function(t){return t.getWinningBids()})).reduce(r.flatten,[])},n.getBidsRequested=function(){return t.map((function(t){return t.getBidRequests()})).reduce(r.flatten,[])},n.getNoBids=function(){return t.map((function(t){return t.getNoBids()})).reduce(r.flatten,[])},n.getBidsReceived=function(){return t.map((function(t){if(t.getAuctionStatus()===i.a)return t.getBidsReceived()})).reduce(r.flatten,[]).filter((function(t){return t}))},n.getAdUnits=function(){return t.map((function(t){return t.getAdUnits()})).reduce(r.flatten,[])},n.getAdUnitCodes=function(){return t.map((function(t){return t.getAdUnitCodes()})).reduce(r.flatten,[]).filter(r.uniques)},n.createAuction=function(n){var e=n.adUnits,r=n.adUnitCodes,o=n.callback,a=n.cbTimeout,c=n.labels,u=n.auctionId,d=Object(i.k)({adUnits:e,adUnitCodes:r,callback:o,cbTimeout:a,labels:c,auctionId:u});return function(n){t.push(n)}(d),d},n.findBidByAdId=function(n){return a()(t.map((function(t){return t.getBidsReceived()})).reduce(r.flatten,[]),(function(t){return t.adId===n}))},n.getStandardBidderAdServerTargeting=function(){return Object(i.j)()[c.JSON_MAPPING.ADSERVER_TARGETING]},n.setStatusForBids=function(e,r){var i=n.findBidByAdId(e);if(i&&(i.status=r),i&&r===c.BID_STATUS.BID_TARGETING_SET){var o=a()(t,(function(t){return t.getAuctionId()===i.auctionId}));o&&o.setBidTargeting(i)}},n.getLastAuctionId=function(){return t.length&&t[t.length-1].getAuctionId()},n}()},303:function(t,n,e){"use strict";e.d(n,"a",(function(){return j}));var r=e(279),i=e(282),o=e(300),a=e(296),c=e(311),u=e(281),d=e(285),s=e.n(d);function f(){return(f=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=e(279),b=e(284),v=[],h=Object.keys(b.TARGETING_KEYS).map((function(t){return b.TARGETING_KEYS[t]})),y=function(t){return t.responseTimestamp+1e3*t.ttl+1e3>Object(r.timestamp)()},m=function(t){return t&&(t.status&&!s()([b.BID_STATUS.RENDERED],t.status)||!t.status)};function T(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=[],a=i.b.getConfig("sendBidsControl.dealPrioritization"),c=Object(r.groupBy)(t,"adUnitCode");return Object.keys(c).forEach((function(t){var i=[],u=Object(r.groupBy)(c[t],"bidderCode");Object.keys(u).forEach((function(t){return i.push(u[t].reduce(n))})),e>0?(i=a?i(w(!0)):i.sort((function(t,n){return n.cpm-t.cpm})),o.push.apply(o,l(i.slice(0,e)))):o.push.apply(o,l(i))})),o}function w(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(n,e){return void 0!==n.adUnitTargeting.hb_deal&&void 0===e.adUnitTargeting.hb_deal?-1:void 0===n.adUnitTargeting.hb_deal&&void 0!==e.adUnitTargeting.hb_deal?1:t?e.cpm-n.cpm:e.adUnitTargeting.hb_pb-n.adUnitTargeting.hb_pb}}var j=function(t){var n={},e={};function a(t,n){return t.adserverTargeting&&n&&(p.isArray(n)&&s()(n,t.adUnitCode)||"string"==typeof n&&t.adUnitCode===n)}function d(t,n){if(!0===i.b.getConfig("targetingControls.alwaysIncludeDeals")){var e=h.concat(o.a);return T(n,r.getHighestCpm).map((function(n){if(n.dealId&&a(n,t))return g({},n.adUnitCode,R(n,e.filter((function(t){return void 0!==n.adserverTargeting[t]}))))})).filter((function(t){return t}))}return[]}function j(t,n){var e=Object(r.deepClone)(t);return Object.keys(e).map((function(t){return{adUnitCode:t,adUnitTargeting:e[t]}})).sort(w()).reduce((function(t,i,o,a){var c,u=(c=i.adUnitTargeting,Object.keys(c).reduce((function(t,n){return t+"".concat(n,"%3d").concat(encodeURIComponent(c[n]),"%26")}),""));o+1===a.length&&(u=u.slice(0,-3));var d=i.adUnitCode,s=u.length;return s<=n?(n-=s,Object(r.logInfo)("AdUnit '".concat(d,"' auction keys comprised of ").concat(s," characters.  Deducted from running threshold; new limit is ").concat(n),e[d]),t[d]=e[d]):Object(r.logWarn)("The following keys for adUnitCode '".concat(d,"' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(s,", the current allotted amount was ").concat(n,".\n"),e[d]),o+1===a.length&&0===Object.keys(t).length&&Object(r.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),t}),{})}function A(t){return t.map((function(t){return g({},Object.keys(t)[0],t[Object.keys(t)[0]].map((function(t){return g({},Object.keys(t)[0],t[Object.keys(t)[0]].join(", "))})).reduce((function(t,n){return f(n,t)}),{}))})).reduce((function(t,n){var e=Object.keys(n)[0];return t[e]=f({},t[e],n[e]),t}),{})}function C(n){return"string"==typeof n?[n]:p.isArray(n)?n:t.getAdUnitCodes()||[]}function O(){var n=t.getBidsReceived();return i.b.getConfig("useBidCache")||(n=n.filter((function(t){return e[t.adUnitCode]===t.auctionId}))),T(n=n.filter((function(t){return Object(r.deepAccess)(t,"video.context")!==u.a})).filter((function(t){return"banner"!==t.mediaType||Object(c.c)([t.width,t.height])})).filter(m).filter(y),r.getOldestHighestCpmBid)}function k(t,e){var r=n.getWinningBids(t,e),i=U();return r=r.map((function(t){return g({},t.adUnitCode,Object.keys(t.adserverTargeting).filter((function(n){return void 0===t.sendStandardTargeting||t.sendStandardTargeting||-1===i.indexOf(n)})).reduce((function(n,e){var r=[t.adserverTargeting[e]],i=g({},e.substring(0,20),r);if(e===b.TARGETING_KEYS.DEAL){var o=g({},"".concat(e,"_").concat(t.bidderCode).substring(0,20),r);return[].concat(l(n),[i,o])}return[].concat(l(n),[i])}),[]))}))}function U(){return t.getStandardBidderAdServerTargeting().map((function(t){return t.key})).concat(h).filter(r.uniques)}function S(t,n,e,i){return Object.keys(n.adserverTargeting).filter(E()).forEach((function(e){t.length&&t.filter(function(t){return function(e){return e.adUnitCode===n.adUnitCode&&e.adserverTargeting[t]}}(e)).forEach(function(t){return function(e){p.isArray(e.adserverTargeting[t])||(e.adserverTargeting[t]=[e.adserverTargeting[t]]),e.adserverTargeting[t]=e.adserverTargeting[t].concat(n.adserverTargeting[t]).filter(r.uniques),delete n.adserverTargeting[t]}}(e))})),t.push(n),t}function E(){var t=U().concat(o.a);return function(n){return-1===t.indexOf(n)}}function I(t){return g({},t.adUnitCode,Object.keys(t.adserverTargeting).filter(E()).map((function(n){return g({},n.substring(0,20),[t.adserverTargeting[n]])})))}function B(t,n){return n.filter((function(n){return s()(t,n.adUnitCode)})).map((function(t){return f({},t)})).reduce(S,[]).map(I).filter((function(t){return t}))}function _(t,n){var e=h.concat(o.a),c=i.b.getConfig("sendBidsControl.bidLimit");return T(n,r.getHighestCpm,c).map((function(n){if(a(n,t))return g({},n.adUnitCode,R(n,e.filter((function(t){return void 0!==n.adserverTargeting[t]}))))})).filter((function(t){return t}))}function R(t,n){return n.map((function(n){return g({},"".concat(n,"_").concat(t.bidderCode).substring(0,20),[t.adserverTargeting[n]])}))}return n.setLatestAuctionForAdUnit=function(t,n){e[t]=n},n.resetPresetTargeting=function(n){if(Object(r.isGptPubadsDefined)()){var e=C(n),i=t.getAdUnits().filter((function(t){return s()(e,t.code)}));window.googletag.pubads().getSlots().forEach((function(t){v.forEach((function(n){i.forEach((function(e){e.code!==t.getAdUnitPath()&&e.code!==t.getSlotElementId()||t.setTargeting(n,null)}))}))}))}},n.resetPresetTargetingAST=function(t){C(t).forEach((function(t){var n=window.apntag.getTag(t);if(n&&n.keywords){var e=Object.keys(n.keywords),r={};e.forEach((function(t){s()(v,t.toLowerCase())||(r[t]=n.keywords[t])})),window.apntag.modifyTag(t,{keywords:r})}}))},n.getAllTargeting=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O(),e=C(t),o=k(e,n).concat(B(e,n)).concat(i.b.getConfig("enableSendAllBids")?_(e,n):d(e,n));o.map((function(t){Object.keys(t).map((function(n){t[n].map((function(t){-1===v.indexOf(Object.keys(t)[0])&&(v=Object.keys(t).concat(v))}))}))})),o=A(o);var a=i.b.getConfig("targetingControls.auctionKeyMaxChars");return a&&(Object(r.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(a," characters.  Running checks on auction keys...")),o=j(o,a)),e.forEach((function(t){o[t]||(o[t]={})})),o},n.setTargetingForGPT=function(t,n){window.googletag.pubads().getSlots().forEach((function(e){Object.keys(t).filter(n?n(e):Object(r.isAdUnitCodeMatchingSlot)(e)).forEach((function(n){return Object.keys(t[n]).forEach((function(r){var i=t[n][r].split(",");(i=i.length>1?[i]:i).map((function(t){return p.logMessage("Attempting to set key value for slot: ".concat(e.getSlotElementId()," key: ").concat(r," value: ").concat(t)),t})).forEach((function(t){e.setTargeting(r,t)}))}))}))}))},n.getWinningBids=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O(),e=C(t);return n.filter((function(t){return s()(e,t.adUnitCode)})).filter((function(t){return t.cpm>0})).map((function(t){return t.adUnitCode})).filter(r.uniques).map((function(t){return n.filter((function(n){return n.adUnitCode===t?n:null})).reduce(r.getHighestCpm)}))},n.setTargetingForAst=function(t){var e=n.getAllTargeting(t);try{n.resetPresetTargetingAST(t)}catch(t){p.logError("unable to reset targeting for AST"+t)}Object.keys(e).forEach((function(t){return Object.keys(e[t]).forEach((function(n){if(p.logMessage("Attempting to set targeting for targetId: ".concat(t," key: ").concat(n," value: ").concat(e[t][n])),p.isStr(e[t][n])||p.isArray(e[t][n])){var r={};n.search(/pt[0-9]/)<0?r[n.toUpperCase()]=e[t][n]:r[n]=e[t][n],window.apntag.setKeywords(t,r,{overrideKeyValue:!0})}}))}))},n.isApntagDefined=function(){if(window.apntag&&p.isFn(window.apntag.setKeywords))return!0},n}(a.a)},321:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(295),i=e(279),o=Object(r.a)();function a(t,n){o.adServers=o.adServers||{},o.adServers[t]=o.adServers[t]||{},Object.keys(n).forEach((function(e){o.adServers[t][e]?Object(i.logWarn)("Attempting to add an already registered function property ".concat(e," for AdServer ").concat(t,".")):o.adServers[t][e]=n[e]}))}}}]);