(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{129:function(e,n,r){"use strict";r.r(n),r.d(n,"spec",(function(){return c}));var t=r(280),i=r(279),s=[],c={code:"justpremium",time:6e4,isBidRequestValid:function(e){return!!(e&&e.params&&e.params.zone)},buildRequests:function(e,n){var r,t,s=(r={},t={},e.forEach((function(e){var n=e.params,i=n.zone;if(1!==r[i]){var s=n.allow||n.formats||[],c=n.exclude||[];if(0===s.length&&0===c.length)return r[n.zone]=1;r[i]=r[i]||[[],{}],r[i][0]=function(e){for(var n=e.concat(),r=0;r<n.length;++r)for(var t=r+1;t<n.length;++t)n[r]===n[t]&&n.splice(t--,1);return n}(r[i][0].concat(s)),c.forEach((function(e){r[i][1][e]?r[i][1][e]++:r[i][1][e]=1})),t[i]=t[i]||0,c.length&&t[i]++}})),Object.keys(t).forEach((function(e){if(1!==r[e]){var n=[];Object.keys(r[e][1]).forEach((function(i){r[e][1][i]===t[e]&&n.push(i)})),r[e][1]=n}})),Object.keys(r).forEach((function(e){1!==r[e]&&r[e][1].length&&(r[e][0].forEach((function(n){var t=r[e][1].indexOf(n);t>-1&&r[e][1].splice(t,1)})),r[e][0].length=0),1===r[e]||r[e][0].length||r[e][1].length||(r[e]=1)})),r),c=function(){var e;try{e=window.top}catch(n){e=window}return{screenWidth:e.screen.width,screenHeight:e.screen.height,innerWidth:e.innerWidth,innerHeight:e.innerHeight}}(),a={zone:e.map((function(e){return parseInt(e.params.zone)})).filter((function(e,n,r){return r.indexOf(e)===n})),referer:n.refererInfo.referer,sw:c.screenWidth,sh:c.screenHeight,ww:c.innerWidth,wh:c.innerHeight,c:s,id:e[0].params.zone,sizes:{}};e.forEach((function(e){var n=e.params.zone,r=a.sizes;r[n]=r[n]||[],r[n].push.apply(r[n],e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes)})),Object(i.deepAccess)(e[0],"userId.pubcid")?a.pubcid=Object(i.deepAccess)(e[0],"userId.pubcid"):Object(i.deepAccess)(e[0],"crumbs.pubcid")&&(a.pubcid=Object(i.deepAccess)(e[0],"crumbs.pubcid")),a.uids=e[0].userId,n&&n.gdprConsent&&(a.gdpr_consent={consent_string:n.gdprConsent.consentString,consent_required:"boolean"!=typeof n.gdprConsent.gdprApplies||n.gdprConsent.gdprApplies}),n&&n.uspConsent&&(a.us_privacy=n.uspConsent),a.version={prebid:"3.11.0",jp_adapter:"1.7"};var o=JSON.stringify(a);return{method:"POST",url:"https://pre.ads.justpremium.com/v/2.0/t/xhr?i="+ +new Date,data:o,bids:e}},interpretResponse:function(e,n){var r=e.body,t=[];return n.bids.forEach((function(e){var n=function(e,n){var r=e.zone;if(n[r])for(var t=n[r].length;t--;)if(a(e,n[r][t]))return n[r].splice(t,1).pop();return!1}(e.params,r.bid);if(n){var i=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes&&e.mediaTypes.banner.sizes.length&&e.mediaTypes.banner.sizes[0]||[],s={requestId:e.bidId,creativeId:n.id,width:i[0]||n.width,height:i[1]||n.height,ad:n.adm,cpm:n.price,netRevenue:!0,currency:n.currency||"USD",ttl:n.ttl||c.time,format:n.format};t.push(s)}})),t},getUserSyncs:function(e,n,r,t){var i="https://pre.ads.justpremium.com/v/1.0/t/sync?_c=a"+Math.random().toString(36).substring(7)+Date.now();return r&&"boolean"==typeof r.gdprApplies&&(i=i+"&consentString="+encodeURIComponent(r.consentString)),t&&(i=i+"&usPrivacy="+encodeURIComponent(t)),e.iframeEnabled&&s.push({type:"iframe",url:i}),s}};function a(e,n){var r=n.format;return e.allow&&e.allow.length?e.allow.indexOf(r)>-1:!e.exclude||!e.exclude.length||e.exclude.indexOf(r)<0}Object(t.registerBidder)(c)}}]);