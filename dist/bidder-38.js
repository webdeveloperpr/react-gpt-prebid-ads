(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{284:function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t(283),a=t.n(n),o=t(277),i={},d=["criteo","outstream","adagio","browsi"];function s(e,r,t){if(r&&e){if(a()(d,r))return i[e]?(t&&"function"==typeof t&&(i[e].loaded?t():i[e].callbacks.push(t)),i[e].tag):(i[e]={loaded:!1,tag:null,callbacks:[]},t&&"function"==typeof t&&i[e].callbacks.push(t),o.logWarn("module ".concat(r," is loading external JavaScript")),function(r,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,i[e].tag=n,n.readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()};return n.src=r,o.insertElement(n),n}(e,(function(){i[e].loaded=!0;try{for(var r=0;r<i[e].callbacks.length;r++)i[e].callbacks[r]()}catch(e){o.logError("Error executing callback","adloader.js:loadExternalScript",e)}})));o.logError("".concat(r," not whitelisted for loading external JavaScript"))}else o.logError("cannot load external script without url and moduleCode")}},287:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"c",(function(){return s})),t.d(r,"b",(function(){return c}));var n=t(284),a=t(277),o=t(286),i=t.n(o);function d(e){var r=this,t=e.url,o=e.config,d=e.id,s=e.callback,c=e.loaded,u=e.adUnitCode;this.url=t,this.config=o,this.handlers={},this.id=d,this.loaded=c,this.cmd=[],this.push=function(e){"function"==typeof e?r.loaded?e.call():r.cmd.push(e):a.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=s||function(){r.loaded=!0,r.process()},!function(e){var r=pbjs.adUnits,t=i()(r,(function(r){return r.code===e}));return!!(t&&t.renderer&&t.renderer.url&&t.renderer.render)}(u)?Object(n.a)(t,"outstream",this.callback):a.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(u))}function s(e){return!(!e||!e.url)}function c(e,r){e.render(r)}d.install=function(e){return new d({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},d.prototype.getConfig=function(){return this.config},d.prototype.setRender=function(e){this.render=e},d.prototype.setEventHandlers=function(e){this.handlers=e},d.prototype.handleVideoEvent=function(e){var r=e.id,t=e.eventName;"function"==typeof this.handlers[t]&&this.handlers[t](),a.logMessage("Prebid Renderer event for id ".concat(r," type ").concat(t))},d.prototype.process=function(){for(;this.cmd.length>0;)try{this.cmd.shift().call()}catch(e){a.logError("Error processing Renderer command: ",e)}}},74:function(e,r,t){"use strict";t.r(r),t.d(r,"helper",(function(){return c})),t.d(r,"spec",(function(){return u}));var n=t(277),a=t(278),o=t(280),i=t(287),d=t(279);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c={getTopWindowDomain:function(e){var r=e.indexOf("://")+"://".length;return e.substring(r,e.indexOf("/",r)<0?e.length:e.indexOf("/",r))},startsWith:function(e,r){return e.substr(0,r.length)===r},getMediaType:function(e){return e.ext?e.ext.media_type?e.ext.media_type.toLowerCase():e.ext.vast_url?d.d:d.b:d.b}},u={code:"cleanmedianet",aliases:[],supportedMediaTypes:[d.b,d.d],isBidRequestValid:function(e){return!!e.params.supplyPartnerId&&"string"==typeof e.params.supplyPartnerId&&(void 0===e.params.bidfloor||"number"==typeof e.params.bidfloor)&&(void 0===e.params.adpos||"number"==typeof e.params.adpos)&&(void 0===e.params.protocols||Array.isArray(e.params.protocols))&&(void 0===e.params.instl||0===e.params.instl||1===e.params.instl)},buildRequests:function(e,r){var t=this;return e.map((function(e){var a=e.adUnitCode,i=e.auctionId,u=e.mediaTypes,l=e.params,p=e.sizes,f=e.transactionId,g="".concat("https://bidder.cleanmediaads.com","/r/").concat(l.supplyPartnerId,"/bidr?rformat=open_rtb&reqformat=rtb_json&bidder=prebid")+(l.query?"&"+l.query:""),h=o.b.getConfig("pageUrl")||r.refererInfo.referer,m={id:i,site:{domain:c.getTopWindowDomain(h),page:h,ref:r.refererInfo.referer},device:{ua:navigator.userAgent,dnt:n.getDNT()?1:0,h:screen.height,w:screen.width,language:navigator.language},imp:[],ext:{},user:{ext:{}}};r.gdprConsent&&r.gdprConsent.consentString&&r.gdprConsent.gdprApplies&&(m.ext.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies},m.regs={ext:{gdpr:!0===r.gdprConsent.gdprApplies?1:0}},m.user={ext:{consent:r.gdprConsent.consentString}});var y={id:f,instl:1===l.instl?1:0,tagid:a,bidfloor:l.bidfloor||0,bidfloorcur:"USD",secure:1},v=l.favoredMediaType&&t.supportedMediaTypes.includes(l.favoredMediaType);if((!u||u.banner)&&(!v||l.favoredMediaType===d.b)){var b=s({},y,{banner:{w:p.length?p[0][0]:300,h:p.length?p[0][1]:250,pos:l.pos||0,topframe:n.inIframe()?0:1}});m.imp.push(b)}if(u&&u.video&&(!v||l.favoredMediaType===d.d)){var x={video:{protocols:l.protocols||[1,2,3,4,5,6],pos:l.pos||0,ext:{context:u.video.context}}},w=u.video.playerSize||p;n.isArray(w[0])?(x.video.w=w[0][0],x.video.h=w[0][1]):n.isNumber(w[0])?(x.video.w=w[0],x.video.h=w[1]):(x.video.w=300,x.video.h=250),x=s({},y,x),m.imp.push(x)}if(0!==m.imp.length)return{method:"POST",url:g,data:m,bidRequest:e}}))},interpretResponse:function(e,r){var t=e&&e.body;if(!t)return n.logError("empty response"),[];var a=t.seatbid.reduce((function(e,r){return e.concat(r.bid)}),[]),o=[];return a.forEach((function(e){var a={requestId:r.bidRequest.bidId,cpm:e.price,width:e.w,height:e.h,ttl:360,creativeId:e.crid||e.adid,netRevenue:!0,currency:e.cur||t.cur,mediaType:c.getMediaType(e)};if(n.deepAccess(r.bidRequest,"mediaTypes."+a.mediaType))if(a.mediaType===d.b)o.push(s({},a,{ad:e.adm}));else if(a.mediaType===d.d){var i=n.deepAccess(r.bidRequest,"mediaTypes.video.context");o.push(s({},a,{vastUrl:e.ext.vast_url,vastXml:e.adm,renderer:"outstream"===i?l(r.bidRequest,e):void 0}))}})),o},getUserSyncs:function(e,r,t){var n=[],a=!(!t||"boolean"!=typeof t.gdprApplies)&&t.gdprApplies?"gc="+encodeURIComponent(t.consentString):"gc=missing";return r.forEach((function(e){if(e.body){var r=e.body;r.ext&&Array.isArray(r.ext.utrk)&&r.ext.utrk.forEach((function(e){var r=e.url+(e.url.indexOf("?")>0?"&"+a:"?"+a);return n.push({type:e.type,url:r})})),Array.isArray(r.seatbid)&&r.seatbid.forEach((function(e){Array.isArray(e.bid)&&e.bid.forEach((function(e){e.ext&&Array.isArray(e.ext.utrk)&&e.ext.utrk.forEach((function(e){var r=e.url+(e.url.indexOf("?")>0?"&"+a:"?"+a);return n.push({type:e.type,url:r})}))}))}))}})),n}};function l(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.a.install({url:e.params&&e.params.rendererUrl||r.ext&&r.ext.renderer_url||"https://s.wlplayer.com/video/latest/renderer.js",config:t,loaded:!1});try{a.setRender(p)}catch(e){n.logWarn("Prebid Error calling setRender on renderer",e)}return a}function p(e){e.renderer.push((function(){var r=e.adUnitCode+"/"+e.adId;window.GamoshiPlayer.renderAd({id:r,debug:window.location.href.indexOf("pbjsDebug")>=0,placement:document.getElementById(e.adUnitCode),width:e.width,height:e.height,events:{ALL_ADS_COMPLETED:function(){return window.setTimeout((function(){window.GamoshiPlayer.removeAd(r)}),300)}},vastUrl:e.vastUrl,vastXml:e.vastXml})}))}Object(a.registerBidder)(u)}}]);