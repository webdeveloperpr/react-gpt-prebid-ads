(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{239:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return f})),t.d(r,"getTimeoutUrl",(function(){return h}));var n=t(279),o=t(306),a=t(280),c=t(281),i=t(284);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var p="ads.".concat("tremorhub.com","/ad/tag"),u="events.".concat("tremorhub.com","/diag"),f={code:"telaria",aliases:["tremor","tremorvideo"],supportedMediaTypes:[c.d],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.adCode&&e.params.supplyCode)},buildRequests:function(e,r){var t=[];return e.forEach((function(e){var o=function(e,r){var t,o,a=n.deepAccess(e,"mediaTypes.video.playerSize");a||n.logWarn("Although player size isn't required it is highly recommended");a&&(!n.isArray(a)||2!==a.length||isNaN(a[0])||isNaN(a[1])?"object"===s(a)&&(t=a[0][0],o=a[0][1]):(t=a[0],o=a[1]));var c=n.deepAccess(e,"params.supplyCode"),i=n.deepAccess(e,"params.adCode");if(c&&i){var u="https://".concat(c,".").concat(p,"?adCode=").concat(i);t&&(u+="&playerWidth=".concat(t)),o&&(u+="&playerHeight=".concat(o));var f=d({srcPageUrl:l()},e.params);return delete f.adCode,u+="".concat(y(f,e.schain)),u+="&transactionId=".concat(e.transactionId),r&&(r.gdprConsent&&("boolean"==typeof r.gdprConsent.gdprApplies&&(u+="&gdpr=".concat(r.gdprConsent.gdprApplies?1:0)),r.gdprConsent.consentString&&(u+="&gdpr_consent=".concat(r.gdprConsent.consentString))),r.refererInfo&&r.refererInfo.referer&&(u+="&referrer=".concat(encodeURIComponent(r.refererInfo.referer)))),u+"&hb=1&fmt=json"}}(e,r);o&&t.push({method:"GET",url:o,bidId:e.bidId,vastUrl:o.split("&fmt=json")[0]})})),t},interpretResponse:function(e,r){var t,a,c,s=[];try{t=e.body,r.url.split("&").forEach((function(e){var r=e.toLowerCase();r.indexOf("player")>-1&&(r.indexOf("width")>-1?a=e.split("=")[1]:r.indexOf("height")>-1&&(c=e.split("=")[1]))}))}catch(e){n.logError(e),a=0,c=0}if(!t||t.error){var p="in response for ".concat(r.bidderCode," adapter");t&&t.error&&(p+=": ".concat(t.error)),n.logError(p)}else n.isEmpty(t.seatbid)||t.seatbid[0].bid.forEach((function(e){s.push(function(e,r,t,n,a,c){var i=Object(o.a)(e,r);t&&d(i,{requestId:r.bidId,cpm:t.price,creativeId:t.crid||"-1",vastXml:t.adm,vastUrl:r.vastUrl,mediaType:"video",width:n,height:a,bidderCode:c,adId:t.id,currency:"USD",netRevenue:!0,ttl:300,ad:t.adm});return i}(i.STATUS.GOOD,r,e,a,c,"telaria"))}));return s},getUserSyncs:function(e,r){var t=[];return e.pixelEnabled&&r.length&&(n.deepAccess(r,"0.body.ext.telaria.userSync")||[]).forEach((function(e){return t.push({type:"image",url:e})})),t},onTimeout:function(e){var r=h(e);r&&n.triggerPixel(r)}};function l(){return encodeURIComponent(document.location.href)}function m(e){return n.isEmpty(e)?"":encodeURIComponent(e)}function y(e,r){var t="";if(!n.isEmpty(e)){for(var o in e)"schain"!==o&&e.hasOwnProperty(o)&&!n.isEmpty(e[o])&&(t+="&".concat(o,"=").concat(e[o]));t+=function(e){if(n.isEmpty(e))return"";var r="&schain=".concat(e.ver,",").concat(e.complete);return e.nodes.forEach((function(e){r+="!",r+="".concat(m(e.asi),","),r+="".concat(m(e.sid),","),r+="".concat(m(e.hp),","),r+="".concat(m(e.rid),","),r+="".concat(m(e.name),","),r+="".concat(m(e.domain))})),r}(n.isEmpty(r)?e.schain:r)}return t}var h=function(e){var r=n.deepAccess(e,"0.params.0");if(!n.isEmpty(r)){var t="https://".concat(u);return r=d({srcPageUrl:l()},r),t+="".concat(y(r)),t+="&hb=1&evt=TO"}};Object(a.registerBidder)(f)}}]);