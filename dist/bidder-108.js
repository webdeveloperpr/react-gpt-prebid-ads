(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{25:function(e,r,n){"use strict";n.r(r),n.d(r,"spec",(function(){return m}));var t=n(279),a=n(281),i=n(280),o=n(288),d=n.n(o),c=n(285),u=n.n(c),s=n(290),p=["mimes","minduration","maxduration","protocols","startdelay","linearity","boxingallowed","playbackmethod","delivery","pos","api","ext"],m={code:"adkernel",aliases:["headbidding","adsolut","oftmediahb","audiencemedia","waardex_ak","roqoon"],supportedMediaTypes:[a.b,a.d],isBidRequestValid:function(e){return"params"in e&&void 0!==e.params.host&&"zoneId"in e.params&&!isNaN(Number(e.params.zoneId))&&e.params.zoneId>0&&e.mediaTypes&&(e.mediaTypes.banner||e.mediaTypes.video)},buildRequests:function(e,r){var n=function(e,r){var n=r&&0===r.referer.indexOf("https:");return e.map((function(e){return function(e,r){var n={id:e.bidId,tagid:e.adUnitCode};if(t.deepAccess(e,"mediaTypes.banner")){var a=t.getAdUnitSizes(e);n.banner={format:a.map((function(e){return t.parseGPTSingleSizeArrayToRtbSize(e)})),topframe:0}}else if(t.deepAccess(e,"mediaTypes.video")){var i=e.mediaTypes.video.playerSize||[];n.video=t.parseGPTSingleSizeArrayToRtbSize(i[0])||{},e.params.video&&Object.keys(e.params.video).filter((function(e){return u()(p,e)})).forEach((function(r){return n.video[r]=e.params.video[r]}))}r&&(n.secure=1);return n}(e,n)})).reduce((function(r,n,t){var a=e[t].params,i=a.zoneId,o=a.host;return r[o]=r[o]||{},r[o][i]=r[o][i]||[],r[o][i].push(n),r}),{})}(e,r.refererInfo),a=r.gdprConsent,i=r.auctionId,o=r.refererInfo,d=r.timeout,c=r.uspConsent,s=[];return Object.keys(n).forEach((function(e){Object.keys(n[e]).forEach((function(r){var u=function(e,r,n,a,i,o){var d={id:r,imp:e,site:f(i),at:1,device:{ip:"caller",ua:"caller",js:1,language:(c=navigator.language?"language":"userLanguage",navigator[c].split("-")[0])},tmax:parseInt(o),ext:{adk_usersync:1}};var c;t.getDNT()&&(d.device.dnt=1);n&&(void 0!==n.gdprApplies&&t.deepSetValue(d,"regs.ext.gdpr",~~n.gdprApplies),void 0!==n.consentString&&t.deepSetValue(d,"user.ext.consent",n.consentString));a&&t.deepSetValue(d,"regs.ext.us_privacy",a);return d}(n[e][r],i,a,c,o,d);s.push({method:"POST",url:"https://".concat(e,"/hb?zone=").concat(r,"&v=").concat("1.3"),data:JSON.stringify(u)})}))})),s},interpretResponse:function(e,r){var n=e.body;if(!n.seatbid)return[];var i=JSON.parse(r.data);return n.seatbid.map((function(e){return e.bid})).reduce((function(e,r){return e.concat(r)}),[]).map((function(e){var r=d()(i.imp,(function(r){return r.id===e.impid})),n={requestId:e.impid,cpm:e.price,creativeId:e.crid,currency:"USD",ttl:360,netRevenue:!0};return"banner"in r&&(n.mediaType=a.b,n.width=e.w,n.height=e.h,n.ad=function(e){var r=e.adm;"nurl"in e&&(r+=t.createTrackPixelHtml("".concat(e.nurl,"&px=1")));return r}(e)),"video"in r&&(n.mediaType=a.d,n.vastUrl=e.nurl,n.width=r.video.w,n.height=r.video.h),n}))},getUserSyncs:function(e,r){return e.iframeEnabled&&r&&0!==r.length?r.filter((function(e){return e.body&&e.body.ext&&e.body.ext.adk_usersync})).map((function(e){return e.body.ext.adk_usersync})).reduce((function(e,r){return e.concat(r)}),[]).map((function(e){return{type:"iframe",url:e}})):[]}};function f(e){var r=Object(s.c)(e.referer),n={domain:r.hostname,page:"".concat(r.protocol,"://").concat(r.hostname).concat(r.pathname)};self===top&&document.referrer&&(n.ref=document.referrer);var t=document.getElementsByTagName("meta").keywords;return t&&t.content&&(n.keywords=t.content),n}Object(i.registerBidder)(m)}}]);