(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{63:function(e,r,i){"use strict";i.r(r),i.d(r,"spec",(function(){return f}));var n=i(279),t=i(280),a=i(281),u=i(288),s=i.n(u),d="https://prebid.scupio.com/recweb/prebid.aspx?cb="+Math.random(),f={code:"bridgewell",supportedMediaTypes:[a.b,a.c],isBidRequestValid:function(e){var r=!1;return e&&e.params&&e.params.ChannelID&&(r=!0),r},buildRequests:function(e,r){var i=[];n._each(e,(function(e){i.push({ChannelID:e.params.ChannelID,adUnitCode:e.adUnitCode,mediaTypes:e.mediaTypes||{banner:{sizes:e.sizes}}})}));var t="";return r&&r.refererInfo&&(t=r.refererInfo.referer),{method:"POST",url:d,data:{version:{prebid:"3.11.0",bridgewell:"0.0.2"},inIframe:n.inIframe(),url:t,referrer:o(),adUnits:i},validBidRequests:e}},interpretResponse:function(e,r){var i=[];return n._each(r.validBidRequests,(function(r){var n={};if(e.body){var t=s()(e.body,(function(e){var i=!1;if(e&&!e.consumed){var n=r.mediaTypes,t=r.adUnitCode;if(e.adUnitCode)return e.adUnitCode===t;if(e.width&&e.height&&n)if(n.native)i=!0;else if(n.banner&&n.banner.sizes){var a=e.width,u=e.height,d=n.banner.sizes;i="number"==typeof d[0]?a===d[0]&&u===d[1]:!!s()(d,(function(e){return a===e[0]&&u===e[1]}))}}return i}));if(t){if(t.consumed=!0,"number"!=typeof t.cpm)return;if("boolean"!=typeof t.netRevenue)return;if("string"!=typeof t.currency)return;if("string"!=typeof t.mediaType)return;switch(n.requestId=r.bidId,n.cpm=t.cpm,n.width=t.width,n.height=t.height,n.ttl=t.ttl,n.creativeId=t.id,n.netRevenue=t.netRevenue,n.currency=t.currency,n.mediaType=t.mediaType,t.mediaType){case a.b:if("string"!=typeof t.ad)return;n.ad=t.ad;break;case a.c:if(!t.native)return;var u=r.mediaTypes.native,d=t.native,f=u.title;if(f&&f.required){if("string"!=typeof d.title)return;if(f.len&&f.len<d.title.length)return}var o=u.body;if(o&&o.required&&"string"!=typeof d.body)return;var c=u.image;if(c&&c.required){if(!d.image)return;if("string"!=typeof d.image.url)return;if(d.image.width!==c.sizes[0]||d.image.height!==c.sizes[1])return}var p=u.sponsoredBy;if(p&&p.required&&"string"!=typeof d.sponsoredBy)return;var h=u.icon;if(h&&h.required){if(!d.icon)return;if("string"!=typeof d.icon.url)return;if(d.icon.width!==h.sizes[0]||d.icon.height!==h.sizes[0])return}if("string"!=typeof d.clickUrl)return;var l=d.clickTrackers;if(!l)return;if(0===l.length)return;var y=d.impressionTrackers;if(!y)return;if(0===y.length)return;n.native=t.native;break;default:return}i.push(n)}}})),i}};function o(){try{return window.top.document.referrer}catch(e){return""}}Object(t.registerBidder)(f)}}]);