(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{219:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return d}));var n=t(279),a=t(280),i=t(283),d={code:"slimcut",aliases:["scm"],supportedMediaTypes:["video","banner"],isBidRequestValid:function(e){var r=!1;return void 0!==e.params&&!isNaN(parseInt(n.getValue(e.params,"placementId")))&&parseInt(n.getValue(e.params,"placementId"))>0&&(r=!0),r},buildRequests:function(e,r){var t=e.map(s),n={referrer:c(r),data:t,deviceWidth:screen.width},a=r.gdprConsent;if(r&&a){var i="boolean"==typeof a.gdprApplies,d="string"==typeof a.consentString;n.gdpr_iab={consent:d?a.consentString:"",status:i?a.gdprApplies:-1}}return{method:"POST",url:"https://sb.freeskreen.com/pbr",data:JSON.stringify(n)}},interpretResponse:function(e,r){var t=[];return(e=e.body).responses&&e.responses.forEach((function(e){var r={cpm:e.cpm,width:e.width,height:e.height,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,ad:e.ad,requestId:e.requestId,creativeId:e.creativeId,transactionId:e.tranactionId,winUrl:e.winUrl};t.push(r)})),t},getUserSyncs:function(e,r){return e.iframeEnabled?[{type:"iframe",url:"https://sb.freeskreen.com/async_usersync.html"}]:[]},onBidWon:function(e){Object(i.a)(e.winUrl+e.cpm,null)}};function s(e){var r={},t=n.getValue(e.params,"placementId");return r.sizes=n.parseSizesInput(e.sizes),r.bidId=n.getBidIdParameter("bidId",e),r.bidderRequestId=n.getBidIdParameter("bidderRequestId",e),r.placementId=parseInt(t),r.adUnitCode=n.getBidIdParameter("adUnitCode",e),r.auctionId=n.getBidIdParameter("auctionId",e),r.transactionId=n.getBidIdParameter("transactionId",e),r}function c(e){var r=window.location.href;return e&&e.refererInfo&&e.refererInfo.referer&&(r=e.refererInfo.referer),r}Object(a.registerBidder)(d)}}]);