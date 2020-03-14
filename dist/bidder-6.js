(window.webpackJsonp=window.webpackJsonp||[]).push([[6,212],{2:function(e,r,t){"use strict";t.r(r),t.d(r,"resetSyncedStatus",(function(){return I})),t.d(r,"PrebidServer",(function(){return q}));var i=t(358),n=t(306),s=t(279),a=t(284),d=t(292),c=t(282),o=t(281),u=t(300),p=t(280),l=t(291),b=t.n(l),f=t(285),v=t.n(f),g=t(7),m=t(283),y=t(288),h=t.n(y);function S(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function x(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],i=!0,n=!1,s=void 0;try{for(var a,d=e[Symbol.iterator]();!(i=(a=d.next()).done)&&(t.push(a.value),!r||t.length!==r);i=!0);}catch(e){n=!0,s=e}finally{try{i||null==d.return||d.return()}finally{if(n)throw s}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function O(){return(O=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var w,_=c.b.getConfig,A=a.S2S.SRC,E=!1,k={enabled:!1,timeout:1e3,maxBids:1,adapter:"prebidServer",adapterOptions:{},syncUrlModifier:{}};function I(){E=!1}function C(e){if(0!==e.length){var r=e.pop();r.no_cookie?function(e,r,t,i){if(w.syncUrlModifier&&"function"==typeof w.syncUrlModifier[t]){var n=w.syncUrlModifier[t](e,r,t);T(e,n,t,i)}else T(e,r,t,i)}(r.usersync.type,r.usersync.url,r.bidder,s.bind.call(C,null,e)):C(e)}}function T(e,r,t,i){r?"image"===e||"redirect"===e?(s.logMessage('Invoking image pixel user sync for bidder: "'.concat(t,'"')),s.triggerPixel(r,i)):"iframe"==e?(s.logMessage('Invoking iframe user sync for bidder: "'.concat(t,'"')),s.insertUserSyncIframe(r,i)):(s.logError('User sync type "'.concat(e,'" not supported for bidder: "').concat(t,'"')),i()):(s.logError('No sync url for bidder "'.concat(t,'": ').concat(r)),i())}c.b.setDefaults({s2sConfig:k}),_("s2sConfig",(function(e){return function(e){if(e.defaultVendor){var r=e.defaultVendor,t=Object.keys(e);if(!g.S2S_VENDORS[r])return s.logError("Incorrect or unavailable prebid server default vendor option: "+r),!1;Object.keys(g.S2S_VENDORS[r]).forEach((function(i){k[i]!==e[i]&&v()(t,i)||(e[i]=g.S2S_VENDORS[r][i])}))}var i=Object.keys(e);["accountId","bidders","endpoint"].filter((function(e){return!v()(i,e)&&(s.logError(e+" missing in server to server config"),!0)})).length>0||(w=e)}(e.s2sConfig)}));var U={sponsoredBy:1,body:2,rating:3,likes:4,downloads:5,price:6,salePrice:7,phone:8,address:9,body2:10,cta:12},R=Object.keys(U),V={icon:1,image:3},P={img:1,js:2};[U,V,{impression:1,"viewable-mrc50":2,"viewable-mrc100":3,"viewable-video50":4},P].forEach((function(e){Object.keys(e).forEach((function(r){e[e[r]]=r}))}));var B={},N={},D=function(e,r,t){var i=[],n={};if(t.forEach((function(e){var t,a=Object(u.g)(s.deepAccess(e,"mediaTypes.native"));if(a)try{t=N[e.code]=Object.keys(a).reduce((function(e,r){var t=a[r];function i(e){return O({required:t.required?1:0},e?s.cleanObj(e):{})}switch(r){case"image":case"icon":var n=V[r],d=s.cleanObj({type:n,w:s.deepAccess(t,"sizes.0"),h:s.deepAccess(t,"sizes.1"),wmin:s.deepAccess(t,"aspect_ratios.0.min_width"),hmin:s.deepAccess(t,"aspect_ratios.0.min_height")});if(!(d.w&&d.h||d.hmin&&d.wmin))throw"invalid img sizes (must provide sizes or min_height & min_width if using aspect_ratios)";Array.isArray(t.aspect_ratios)&&(d.ext={aspectratios:t.aspect_ratios.map((function(e){return"".concat(e.ratio_width,":").concat(e.ratio_height)}))}),e.push(i({img:d}));break;case"title":if(!t.len)throw"invalid title.len";e.push(i({title:{len:t.len}}));break;default:var c=U[r];c&&e.push(i({data:{type:c,len:t.len}}))}return e}),[])}catch(e){s.logError("error creating native request: "+String(e))}var c=s.deepAccess(e,"mediaTypes.video"),o=s.deepAccess(e,"mediaTypes.banner");e.bids.forEach((function(r){B["".concat(e.code).concat(r.bidder)]=r.bid_id,d.default.aliasRegistry[r.bidder]&&(n[r.bidder]=d.default.aliasRegistry[r.bidder])}));var p={};if(o&&o.sizes){var l=s.parseSizesInput(o.sizes).map((function(e){var r=x(e.split("x"),2),t=r[0],i=r[1];return{w:parseInt(t,10),h:parseInt(i,10)}}));p.banner={format:l}}if(s.isEmpty(c)||("outstream"!==c.context||e.renderer?p.video=c:s.logError("Outstream bid without renderer cannot be sent to Prebid Server.")),t)try{p.native={request:JSON.stringify({context:1,plcmttype:1,eventtrackers:[{event:1,methods:[1]}],assets:t}),ver:"1.2"}}catch(e){s.logError("error creating native request: "+String(e))}var b=e.bids.reduce((function(e,r){var t=d.default.bidderRegistry[r.bidder];return t&&t.getSpec().transformBidParams&&(r.params=t.getSpec().transformBidParams(r.params,!0)),e[r.bidder]=w.adapterOptions&&w.adapterOptions[r.bidder]?O({},r.params,w.adapterOptions[r.bidder]):r.params,e}),{}),f={id:e.code,ext:b,secure:w.secure},v=s.deepAccess(e,"fpd.context.pbAdSlot");"string"==typeof v&&v&&s.deepSetValue(f,"ext.context.data.adslot",v),O(f,p);var g=h()(r[0].bids,(function(r){return r.adUnitCode===e.code&&r.storedAuctionResponse}));g&&s.deepSetValue(f,"ext.prebid.storedauctionresponse.id",g.storedAuctionResponse.toString()),(f.banner||f.video||f.native)&&i.push(f)})),i.length){var a={id:e.tid,source:{tid:e.tid},tmax:w.timeout,imp:i,test:_("debug")?1:0,ext:{prebid:{targeting:{includewinners:!0,includebidderkeys:!1}}}};w.extPrebid&&"object"===j(w.extPrebid)&&(a.ext.prebid=O(a.ext.prebid,w.extPrebid));var o=c.b.getConfig("currency.adServerCurrency");o&&"string"==typeof o?a.cur=[o]:Array.isArray(o)&&o.length&&(a.cur=[o[0]]),function(e,r){e&&("object"===j(c.b.getConfig("app"))?(e.app=c.b.getConfig("app"),e.app.publisher={id:w.accountId}):e.site={publisher:{id:w.accountId},page:r},"object"===j(c.b.getConfig("device"))&&(e.device=c.b.getConfig("device")),e.device||(e.device={}),e.device.w||(e.device.w=window.innerWidth),e.device.h||(e.device.h=window.innerHeight))}(a,r[0].refererInfo.referer);var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};function r(e){var r=s.deepAccess(e,"bids.0.userId.digitrustid.data");if(r)return r;var t=c.b.getConfig("digiTrustId");return t&&t.success&&t.identity||null}var t=r(e);return!t||t.privacy&&t.privacy.optout?null:{id:t.id,keyv:t.keyv}}(r&&r[0]);p&&s.deepSetValue(a,"user.ext.digitrust",p);var l=s.deepAccess(r,"0.bids.0.schain");l&&(a.source.ext={schain:l}),s.isEmpty(n)||(a.ext.prebid.aliases=n);var b=s.deepAccess(r,"0.bids.0.userId");if(b&&"object"===j(b)&&(b.tdid||b.pubcid||b.parrableid||b.lipb||b.id5id||b.criteoId||b.britepoolid||b.idl_env)){if(s.deepSetValue(a,"user.ext.eids",[]),b.tdid&&a.user.ext.eids.push({source:"adserver.org",uids:[{id:b.tdid,ext:{rtiPartner:"TDID"}}]}),b.pubcid&&a.user.ext.eids.push({source:"pubcid.org",uids:[{id:b.pubcid}]}),b.parrableid&&a.user.ext.eids.push({source:"parrable.com",uids:[{id:b.parrableid}]}),b.lipb&&b.lipb.lipbid){var f={source:"liveintent.com",uids:[{id:b.lipb.lipbid}]};Array.isArray(b.lipb.segments)&&b.lipb.segments.length&&(f.ext={segments:b.lipb.segments}),a.user.ext.eids.push(f)}b.id5id&&a.user.ext.eids.push({source:"id5-sync.com",uids:[{id:b.id5id}]}),b.criteoId&&a.user.ext.eids.push({source:"criteo.com",uids:[{id:b.criteoId}]}),b.britepoolid&&a.user.ext.eids.push({source:"britepool.com",uids:[{id:b.britepoolid}]}),b.idl_env&&a.user.ext.eids.push({source:"liveramp.com",uids:[{id:b.idl_env}]}),b.netId&&a.user.ext.eids.push({source:"netid.de",uids:[{id:b.netId}]})}if(r){var v;if(r[0].gdprConsent)"boolean"==typeof r[0].gdprConsent.gdprApplies&&(v=r[0].gdprConsent.gdprApplies?1:0),s.deepSetValue(a,"regs.ext.gdpr",v),s.deepSetValue(a,"user.ext.consent",r[0].gdprConsent.consentString);r[0].uspConsent&&s.deepSetValue(a,"regs.ext.us_privacy",r[0].uspConsent)}!0===_("coppa")&&s.deepSetValue(a,"regs.coppa",1);var g=_("fpd")||{};return g.context&&s.deepSetValue(a,"site.ext.data",g.context),g.user&&s.deepSetValue(a,"user.ext.data",g.user),function(e){var r=c.b.getBidderConfig(),t=Object.keys(r).reduce((function(e,t){var i=r[t];if(i.fpd){var n={};i.fpd.context&&(n.site=i.fpd.context),i.fpd.user&&(n.user=i.fpd.user),e.push({bidders:[t],config:{fpd:n}})}return e}),[]);t.length&&s.deepSetValue(e,"ext.prebid.bidderconfig",t)}(a),a}s.logError("Request to Prebid Server rejected due to invalid media type(s) in adUnit.")},z=function(e,r){var t=[];return e.seatbid&&e.seatbid.forEach((function(i){(i.bid||[]).forEach((function(d){var c,u="".concat(d.impid).concat(i.seat);B[u]&&(c=s.getBidRequest(B[u],r));var p=d.price,l=0!==p?a.STATUS.GOOD:a.STATUS.NO_BID,b=Object(n.a)(l,c||{bidder:i.seat,src:A});b.cpm=p;var f=s.deepAccess(e,["ext","responsetimemillis",i.seat].join("."));c&&f&&(c.serverResponseTimeMs=f);var v=s.deepAccess(d,"ext.prebid.targeting");if(v&&"object"===j(v)&&(b.adserverTargeting=v),b.seatBidId=d.id,s.deepAccess(d,"ext.prebid.type")===o.d){b.mediaType=o.d;var g=c.sizes&&c.sizes[0];b.playerHeight=g[0],b.playerWidth=g[1],d.ext.prebid.cache&&"object"===j(d.ext.prebid.cache.vastXml)&&d.ext.prebid.cache.vastXml.cacheId&&d.ext.prebid.cache.vastXml.url?(b.videoCacheKey=d.ext.prebid.cache.vastXml.cacheId,b.vastUrl=d.ext.prebid.cache.vastXml.url):v&&v.hb_uuid&&v.hb_cache_host&&v.hb_cache_path&&(b.videoCacheKey=v.hb_uuid,b.vastUrl="https://".concat(v.hb_cache_host).concat(v.hb_cache_path,"?uuid=").concat(v.hb_uuid)),d.adm&&(b.vastXml=d.adm),!b.vastUrl&&d.nurl&&(b.vastUrl=d.nurl)}else if(s.deepAccess(d,"ext.prebid.type")===o.c){var m,y;b.mediaType=o.c,y="string"==typeof d.adm?b.adm=JSON.parse(d.adm):b.adm=d.adm;var h=(S(m={},P.img,y.imptrackers||[]),S(m,P.js,y.jstracker?[y.jstracker]:[]),m);if(y.eventtrackers&&y.eventtrackers.forEach((function(e){switch(e.method){case P.img:h[P.img].push(e.url);break;case P.js:h[P.js].push(e.url)}})),s.isPlainObject(y)&&Array.isArray(y.assets)){var x=N[c.adUnitCode];b.native=s.cleanObj(y.assets.reduce((function(e,r){var t=x[r.id];return s.isPlainObject(r.img)?e[t.img.type?V[t.img.type]:"image"]=s.pick(r.img,["url","w as width","h as height"]):s.isPlainObject(r.title)?e.title=r.title.text:s.isPlainObject(r.data)&&R.forEach((function(i){U[i]===t.data.type&&(e[i]=r.data.value)})),e}),s.cleanObj({clickUrl:y.link,clickTrackers:s.deepAccess(y,"link.clicktrackers"),impressionTrackers:h[P.img],javascriptTrackers:h[P.js]})))}else s.logError("prebid server native response contained no assets")}else d.adm&&d.nurl?(b.ad=d.adm,b.ad+=s.createTrackPixelHtml(decodeURIComponent(d.nurl))):d.adm?b.ad=d.adm:d.nurl&&(b.adUrl=d.nurl);b.width=d.w,b.height=d.h,d.dealid&&(b.dealId=d.dealid),b.requestId=c.bidId||c.bid_Id,b.creative_id=d.crid,b.creativeId=d.crid,d.burl&&(b.burl=d.burl),b.currency=e.cur?e.cur:"USD",b.ttl=d.ttl?d.ttl:60,b.netRevenue=!d.netRevenue||d.netRevenue,t.push({adUnit:d.impid,bid:b})}))})),t};function q(){var e=new i.a("prebidServer");return e.callBids=function(e,r,t,i,n){var c,o,u=s.deepClone(e.ad_units).filter((function(e){return e.mediaTypes&&(e.mediaTypes.native||e.mediaTypes.banner&&e.mediaTypes.banner.sizes||e.mediaTypes.video&&e.mediaTypes.video.playerSize)})),l=u.map((function(e){return e.bids.map((function(e){return e.bidder})).filter(s.uniques)})).reduce(s.flatten).filter(s.uniques);w&&w.syncEndpoint&&(Array.isArray(r)&&r.length>0&&(c=r[0].gdprConsent,o=r[0].uspConsent),function(e,r,t){if(!E){E=!0;var i={uuid:s.generateUUID(),bidders:e,account:w.accountId},n=w.userSyncLimit;s.isNumber(n)&&n>0&&(i.limit=n),r&&(void 0!==r.consentString&&(i.gdpr=r.gdprApplies?1:0),!1!==r.gdprApplies&&(i.gdpr_consent=r.consentString)),t&&(i.us_privacy=t);var a=JSON.stringify(i);Object(m.a)(w.syncEndpoint,(function(e){try{C((e=JSON.parse(e)).bidder_status)}catch(e){s.logError(e)}}),a,{contentType:"text/plain",withCredentials:!0})}}(w.bidders.map((function(e){return d.default.aliasRegistry[e]||e})).filter((function(e,r,t){return t.indexOf(e)===r})),c,o));var f=D(e,r,u),g=f&&JSON.stringify(f);f&&g&&n(w.endpoint,{success:function(e){return function(e,r,t,i,n){var c;try{c=JSON.parse(e),z(c,t,r).forEach((function(e){var r=e.adUnit,n=e.bid;Object(p.isValid)(r,n,t)&&i(r,n)})),t.forEach((function(e){return b.a.emit(a.EVENTS.BIDDER_DONE,e)}))}catch(e){s.logError(e)}(!c||c.status&&v()(c.status,"Error"))&&s.logError("error parsing response: ",c.status);n(),o=r,o.forEach((function(e){var r=d.default.getBidAdapter(e);r&&r.registerSyncs&&r.registerSyncs([])}));var o}(e,l,r,t,i)},error:i},g,{contentType:"text/plain",withCredentials:!0})},O(this,{callBids:e.callBids,setBidderCode:e.setBidderCode,type:A})}d.default.registerBidAdapter(new q,"prebidServer")},7:function(e,r,t){"use strict";t.r(r),t.d(r,"S2S_VENDORS",(function(){return i}));var i={appnexus:{adapter:"prebidServer",enabled:!0,endpoint:"https://prebid.adnxs.com/pbs/v1/openrtb2/auction",syncEndpoint:"https://prebid.adnxs.com/pbs/v1/cookie_sync",timeout:1e3},rubicon:{adapter:"prebidServer",enabled:!0,endpoint:"https://prebid-server.rubiconproject.com/openrtb2/auction",syncEndpoint:"https://prebid-server.rubiconproject.com/cookie_sync",timeout:500}}}}]);