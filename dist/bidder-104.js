(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{20:function(e,r,t){"use strict";t.r(r),t.d(r,"spec",(function(){return s}));var n=t(279),a=t(280),i=t(281),d=t(282),s={code:"adgeneration",aliases:["adg"],supportedMediaTypes:[i.b,i.c],isBidRequestValid:function(e){return!!e.params.id},buildRequests:function(e,r){for(var t=[],a=0,i=e.length;a<i;a++){var d=e[a],s=d.params.debug?"https://api-test.scaleout.jp/adsv/v1":"https://d.socdm.com/adsv/v1",c="";c=n.tryAppendQueryString(c,"posall","SSPLOC");var o=n.getBidIdParameter("id",d.params);c=n.tryAppendQueryString(c,"id",o),c=n.tryAppendQueryString(c,"sdktype","0"),c=n.tryAppendQueryString(c,"hb","true"),c=n.tryAppendQueryString(c,"t","json3"),c=n.tryAppendQueryString(c,"transactionid",d.transactionId),c=n.tryAppendQueryString(c,"sizes",u(d)),c=n.tryAppendQueryString(c,"currency",p()),c=n.tryAppendQueryString(c,"pbver","3.11.0"),c=n.tryAppendQueryString(c,"sdkname","prebidjs"),c=n.tryAppendQueryString(c,"adapterver","1.0.1"),d.mediaTypes&&d.mediaTypes.native||(c=n.tryAppendQueryString(c,"imark","1")),(c=n.tryAppendQueryString(c,"tp",r.refererInfo.referer)).lastIndexOf("&")===c.length-1&&(c=c.substring(0,c.length-1)),t.push({method:"GET",url:s,data:c,bidRequest:e[a]})}return t},interpretResponse:function(e,r){var t=e.body;if(!t.results||t.results.length<1)return[];var n=r.bidRequest,a={requestId:n.bidId,cpm:t.cpm||0,width:t.w?t.w:1,height:t.h?t.h:1,creativeId:t.creativeid||"",dealId:t.dealid||"",currency:p(),netRevenue:!0,ttl:t.ttl||10};return!function(e){return!!e&&(e.native_ad&&e.native_ad.assets.length>0)}(t)?a.ad=function(e,r){var t=e.ad;e.vastxml&&e.vastxml.length>0&&(t='<body><div id="apvad-'.concat(r.bidId,'"></div>').concat((s=document.createElement("script"),s.type="text/javascript",s.id="apv",s.src="https://cdn.apvdr.com/js/VideoAd.min.js",s.outerHTML)).concat((n=r.bidId,a=e.vastxml,i={s:n},(d=document.createElement("script")).type="text/javascript",d.innerHTML="(function(){ new APV.VideoAd(".concat(JSON.stringify(i),").load('").concat(a.replace(/\r?\n/g,""),"'); })();"),d.outerHTML),"</body>"));var n,a,i,d;var s;return c(t=function(e,r){return e.replace(/<\/\s?body>/,"".concat(r,"</body>"))}(t,e.beacon))?c(t):t}(t,n):(a.native=function(e){var r={};if(e.native_ad&&e.native_ad.assets.length>0){for(var t=e.native_ad.assets,n=0,a=t.length;n<a;n++)switch(t[n].id){case 1:r.title=t[n].title.text;break;case 2:r.image={url:t[n].img.url,height:t[n].img.h,width:t[n].img.w};break;case 3:r.icon={url:t[n].img.url,height:t[n].img.h,width:t[n].img.w};break;case 4:r.sponsoredBy=t[n].data.value;break;case 5:r.body=t[n].data.value;break;case 6:r.cta=t[n].data.value;break;case 502:r.privacyLink=encodeURIComponent(t[n].data.value)}r.clickUrl=e.native_ad.link.url,r.clickTrackers=e.native_ad.link.clicktrackers||[],r.impressionTrackers=e.native_ad.imptrackers||[],e.beaconurl&&""!=e.beaconurl&&r.impressionTrackers.push(e.beaconurl)}return r}(t),a.mediaType=i.c),[a]},getUserSyncs:function(e,r){return[]}};function c(e){var r=e.indexOf("<body>"),t=e.lastIndexOf("</body>");return-1!==r&&-1!==t&&e.substr(r,t).replace("<body>","").replace("</body>","")}function u(e){var r=e.sizes;if(!r||r.length<1)return null;var t="";for(var n in r){var a=r[n];if(2!==a.length)return null;t+="".concat(a[0],"x").concat(a[1],",")}return(t||t.lastIndexOf(",")===t.length-1)&&(t=t.substring(0,t.length-1)),t}function p(){return d.b.getConfig("currency.adServerCurrency")&&"USD"===d.b.getConfig("currency.adServerCurrency").toUpperCase()?"USD":"JPY"}Object(a.registerBidder)(s)}}]);