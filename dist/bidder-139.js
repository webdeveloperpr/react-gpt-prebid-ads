(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"spec",(function(){return d}));var i=n(279),r=n(280),c=n(281),a="https://ad.doublemax.net/adserver/prebid.json?cb="+(new Date).getTime()+"&hb=1&ver=1.21",d={code:"clickforce",supportedMediaTypes:[c.b,c.c],isBidRequestValid:function(e){return e&&e.params&&!!e.params.zone},buildRequests:function(e){var t=[];return i._each(e,(function(e){t.push({z:e.params.zone,bidId:e.bidId})})),{method:"POST",url:a,data:t,validBidRequests:e}},interpretResponse:function(e,t){var n=[],r=[];return void 0!==t&&i._each(t.validBidRequests,(function(e){r[e.bidId]=e})),i._each(e.body,(function(e){null!=e.requestId&&(3==e.width?n.push({requestId:e.requestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,native:{title:e.tag.content.title,body:e.tag.content.content,image:{url:e.tag.content.image,height:900,width:1600},icon:{url:e.tag.content.icon,height:900,width:900},clickUrl:e.tag.cu,cta:e.tag.content.button_text,sponsoredBy:e.tag.content.advertiser,impressionTrackers:e.tag.iu},mediaType:"native"}):n.push({requestId:e.requestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.creativeId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,ad:e.tag,mediaType:"banner"}))})),n},getUserSyncs:function(e,t){return e.iframeEnabled?[{type:"iframe",url:"https://cdn.doublemax.net/js/capmapping.htm"}]:e.pixelEnabled?[{type:"image",url:"https://c.doublemax.net/cm"}]:void 0}};Object(r.registerBidder)(d)}}]);