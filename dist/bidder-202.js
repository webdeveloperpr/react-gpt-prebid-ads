(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{165:function(e,r,i){"use strict";i.r(r),i.d(r,"spec",(function(){return o}));var a=i(279),t=i(280);function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var i=[],a=!0,t=!1,d=void 0;try{for(var o,p=e[Symbol.iterator]();!(a=(o=p.next()).done)&&(i.push(o.value),!r||i.length!==r);a=!0);}catch(e){t=!0,d=e}finally{try{a||null==p.return||p.return()}finally{if(t)throw d}}return i}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o={code:"oneVideo",VERSION:"3.0.0",ENDPOINT:"https://ads.adaptv.advertising.com/rtb/openrtb?ext_id=",SYNC_ENDPOINT1:"https://cm.g.doubleclick.net/pixel?google_nid=adaptv_dbm&google_cm&google_sc",SYNC_ENDPOINT2:"https://pr-bh.ybp.yahoo.com/sync/adaptv_ortb/{combo_uid}",SYNC_ENDPOINT3:"https://match.adsrvr.org/track/cmf/generic?ttd_pid=adaptv&ttd_tpi=1",supportedMediaTypes:["video"],isBidRequestValid:function(e){return"oneVideo"===e.bidder&&void 0!==e.params&&(void 0!==e.params.video&&void 0!==e.params.video.playerWidth&&void 0!==e.params.video.playerHeight&&void 0!==e.params.video.mimes&&void 0!==e.params.pubId)},buildRequests:function(e,r){var i=r?r.gdprConsent:null;return e.map((function(e){return{method:"POST",url:o.ENDPOINT+e.params.pubId,data:n(e,i,r),bidRequest:e}}))},interpretResponse:function(e,r){var i,t,p,n,s,m,v,c,u=r.bidRequest;try{i=(e=e.body).seatbid[0].bid[0]}catch(r){e=null}return e&&i&&(i.adm||i.nurl)&&i.price?(n=u.sizes,s=a.parseSizesInput(n),m=d(s.length?s[0].split("x"):[],2),v=m[0],c=m[1],t={width:parseInt(v,10)||void 0,height:parseInt(c,10)||void 0},p={requestId:u.bidId,bidderCode:o.code,cpm:i.price,adId:i.adid,creativeId:i.crid,width:t.width,height:t.height,mediaType:"video",currency:e.cur,ttl:100,netRevenue:!0,adUnitCode:u.adUnitCode},i.nurl?p.vastUrl=i.nurl:i.adm&&(p.vastXml=i.adm),p.renderer="outstream"===u.mediaTypes.video.context?function(e,r){e.renderer||(e.renderer={},e.renderer.url="https://cdn.vidible.tv/prod/hb-outstream-renderer/renderer.js",e.renderer.render=function(e){setTimeout((function(){o2PlayerRender(e)}),700)})}(u):void 0,p):(a.logWarn("No valid bids from ".concat(o.code," bidder")),[])},getUserSyncs:function(e,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.gdprApplies,t=i.consentString,d=void 0===t?"":t;if(e.pixelEnabled)return[{type:"image",url:o.SYNC_ENDPOINT1},{type:"image",url:o.SYNC_ENDPOINT2},{type:"image",url:"https://sync-tm.everesttech.net/upi/pid/m7y5t93k?gdpr=".concat(a?1:0,"&gdpr_consent=").concat(d,"&redir=https%3A%2F%2Fpixel.advertising.com%2Fups%2F55986%2Fsync%3Fuid%3D%24%7BUSER_ID%7D%26_origin%3D0")+encodeURI("&gdpr=".concat(a?1:0,"&gdpr_consent=").concat(d))},{type:"image",url:o.SYNC_ENDPOINT3}]}};function p(e){return!(!e||!e.gdprApplies)}function n(e,r,i){var t=i.refererInfo.referer,d=e.params.site&&e.params.site.page?e.params.site.page:t.href,n=e.params.site&&e.params.site.referrer?e.params.site.referrer:i.refererInfo.referer,s={id:a.generateUUID(),at:2,cur:e.cur||"USD",imp:[{id:"1",secure:"https:"===document.location.protocol,bidfloor:e.params.bidfloor,ext:{hb:1,prebidver:"3.11.0",adapterver:o.VERSION}}],site:{page:d,ref:n},device:{ua:navigator.userAgent},tmax:200};return null==e.params.video.display||1!=e.params.video.display?(s.imp[0].video={mimes:e.params.video.mimes,w:e.params.video.playerWidth,h:e.params.video.playerHeight,pos:e.params.video.position},e.params.video.maxbitrate&&(s.imp[0].video.maxbitrate=e.params.video.maxbitrate),e.params.video.maxduration&&(s.imp[0].video.maxduration=e.params.video.maxduration),e.params.video.minduration&&(s.imp[0].video.minduration=e.params.video.minduration),e.params.video.api&&(s.imp[0].video.api=e.params.video.api),e.params.video.delivery&&(s.imp[0].video.delivery=e.params.video.delivery),e.params.video.position&&(s.imp[0].video.pos=e.params.video.position),e.params.video.playbackmethod&&(s.imp[0].video.playbackmethod=e.params.video.playbackmethod),e.params.video.placement&&(s.imp[0].video.placement=e.params.video.placement),e.params.video.rewarded&&(s.imp[0].ext.rewarded=e.params.video.rewarded),s.imp[0].video.linearity=1,s.imp[0].video.protocols=e.params.video.protocols||[2,5]):1==e.params.video.display&&(s.imp[0].banner={mimes:e.params.video.mimes,w:e.params.video.playerWidth,h:e.params.video.playerHeight,pos:e.params.video.position},e.params.video.placement&&(s.imp[0].banner.placement=e.params.video.placement)),e.params.video.inventoryid&&(s.imp[0].ext.inventoryid=e.params.video.inventoryid),e.params.video.sid&&(s.source={ext:{schain:{complete:1,nodes:[{sid:e.params.video.sid,rid:s.id}]}}}),e.params.site&&e.params.site.id&&(s.site.id=e.params.site.id),(p(r)||i&&i.uspConsent)&&(s.regs={ext:{}},p(r)&&(s.regs.ext.gdpr=1),r&&r.consentString&&(s.user={ext:{consent:r.consentString}}),i&&i.uspConsent&&(s.regs.ext.us_privacy=i.uspConsent)),s}Object(t.registerBidder)(o)}}]);