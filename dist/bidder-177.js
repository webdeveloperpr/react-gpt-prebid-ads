(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{134:function(e,r,n){"use strict";n.r(r),n.d(r,"spec",(function(){return o}));var a=n(279),i=n(280),t=n(281),o={code:"lemma",supportedMediaTypes:[t.b,t.d],isBidRequestValid:function(e){return!(!e||!e.params)&&(a.isNumber(e.params.pubId)?e.params.adunitId?!!(!e.params.hasOwnProperty("video")||e.params.video.hasOwnProperty("mimes")&&a.isArray(e.params.video.mimes)&&0!==e.params.video.mimes.length)||(a.logWarn("LEMMA: Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:"+JSON.stringify(e)),!1):(a.logWarn("LEMMA: Error: adUnitId is mandatory. Call to OpenBid will not be sent for ad unit: "+JSON.stringify(e)),!1):(a.logWarn("LEMMA: Error: publisherId is mandatory and cannot be string. Call to OpenBid will not be sent for ad unit: "+JSON.stringify(e)),!1))},buildRequests:function(e,r){var n;r&&r.refererInfo&&(n=r.refererInfo);var i=function(e,r){try{var n={id:""+(new Date).getTime(),at:2,tmax:300,cur:["USD"],imp:s(e),user:{},ext:{}},i=e[0],t=function(e){var r=e&&e.params?e.params:null;if(r){var n=r.pubId?r.pubId:0,a=r.app;if(a)return{publisher:{id:n.toString()},id:a.id,name:a.name,bundle:a.bundle,storeurl:a.storeUrl,domain:a.domain,cat:a.categories,pagecat:a.page_category}}return null}(i),o=function(e,r){var n=e&&e.params?e.params:null;if(n){var a=n.pubId?n.pubId:"0",i=n.siteId?n.siteId:"0";if(!n.app)return{publisher:{id:a.toString()},domain:d(r.pageURL),id:i.toString(),ref:r.refURL,page:r.pageURL}}return null}(i,r),u=function(e){var r=e&&e.params?e.params:null;if(r)return{dnt:a.getDNT()?1:0,ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage,w:window.screen.width||window.innerWidth,h:window.screen.height||window.innerHeigh,geo:{country:r.country,lat:r.latitude,lon:r.longitude,region:r.region,city:r.city,zip:r.zip},ip:r.ip,devicetype:r.device_type,ifa:r.ifa};return null}(i);return t&&(n.app=t),o&&(n.site=o),u&&(n.device=u),n}catch(e){a.logError("LEMMA: ","ERROR ",e)}}(e,function(e){var r={};r.pageURL=e&&e.referer?e.referer:window.location.href,e&&e.referer?r.refURL=e.referer:r.refURL="";return r}(n));if(0!=i.imp.length)return function(e,r){var n=e&&e.params?e.params:null;e&&e.gdprConsent&&(r.regs={ext:{gdpr:e.gdprConsent.gdprApplies?1:0}},r.user={ext:{consent:e.gdprConsent.consentString}});n&&(r.tmax=n.tmax,r.bcat=n.bcat)}(r,i),{method:"POST",url:function(e){var r=e&&e[0].params?e[0].params:null;if(r){var n=r.pubId?r.pubId:0,a=r.adunitId?r.adunitId:0;return"https://ads.lemmatechnologies.com/lemma/servad?pid="+n+"&aid="+a}return null}(e),data:JSON.stringify(i)}},interpretResponse:function(e,r){return function(e,r){var n=[];try{if(r.seatbid){var i=r.curr||"USD";r.seatbid.forEach((function(r){r.bid.forEach((function(r){var o=function(e){try{if(e)return JSON.parse(e)}catch(e){a.logError("LEMMA: ","ERROR",e)}return null}(e.data),s={requestId:r.impid,cpm:parseFloat(r.price).toFixed(2),width:r.w,height:r.h,creativeId:r.crid,currency:i,netRevenue:!1,ttl:300,referrer:o.site.ref,ad:r.adm};r.dealid&&(s.dealId=r.dealid),o.imp&&o.imp.length>0&&(s.mediaType=o.mediaType,o.imp.forEach((function(e){if(r.impid===e.id)switch(s.mediaType){case t.b:break;case t.d:s.width=r.hasOwnProperty("w")?r.w:e.video.w,s.height=r.hasOwnProperty("h")?r.h:e.video.h,s.vastXml=r.adm}}))),n.push(s)}))}))}}catch(e){a.logError("LEMMA: ","ERROR ",e)}return n}(r,e.body)}};function s(e){var r=[],n=e.map((function(e){return function(e){var r,n,i={},o=e.hasOwnProperty("sizes")?e.sizes:[],s="",d=[],u=e&&e.params?e.params:null;i={id:e.bidId,tagid:u.adunitId?u.adunitId.toString():void 0,secure:"https:"===window.location.protocol?1:0,bidfloorcur:u.currency?u.currency:"USD"},u.bidFloor&&(i.bidfloor=u.bidFloor);if(e.hasOwnProperty("mediaTypes"))for(s in e.mediaTypes)switch(s){case t.b:(r=p(e))&&(i.banner=r);break;case t.d:(n=l(e))&&(i.video=n)}else r={pos:0,w:o&&o[0]?o[0][0]:0,h:o&&o[0]?o[0][1]:0},a.isArray(o)&&o.length>1&&((o=o.splice(1,o.length-1)).forEach((function(e){d.push({w:e[0],h:e[1]})})),r.format=d),i.banner=r;return i.hasOwnProperty(t.b)||i.hasOwnProperty(t.d)?i:void 0}(e)}));return n&&n.forEach((function(e){e&&r.push(e)})),r}function d(e){var r=document.createElement("a");return r.setAttribute("href",e),r.hostname}function u(e){return e.sizes&&a.isArray(e.sizes[0])&&e.sizes[0].length>0?e.sizes[0]:null}function p(e){var r,n=[];if("banner"===e.mediaType||a.deepAccess(e,"mediaTypes.banner")){var i=(e?e.params:null).banner,t=u(e)||[];t&&0==t.length&&(t=e.mediaTypes.banner.sizes[0]),t&&t.length>0?((r={}).w=t[0],r.h=t[1],r.pos=0,i&&(r=a.deepClone(i)),(t=e.mediaTypes.banner.sizes).length>0&&(n=[],t.forEach((function(e){e.length>1&&n.push({w:e[0],h:e[1]})})),n.length>0&&(r.format=n))):a.logWarn("LEMMA: Error: mediaTypes.banner.sizes missing for adunit: "+e.params.adunitId)}return r}function l(e){var r;if("video"===e.mediaType||a.deepAccess(e,"mediaTypes.video")){var n=e?e.params:null,i=u(e)||[];if(i&&0==i.length&&(i=e.mediaTypes&&e.mediaTypes.video?e.mediaTypes.video.playerSize:[]),i&&i.length>0){var t=n.video;r={},t&&(r=a.deepClone(t)),r.w=i[0],r.h=i[1]}else a.logWarn("LEMMA: Error: mediaTypes.video.sizes missing for adunit: "+e.params.adunitId)}return r}Object(i.registerBidder)(o)}}]);