(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{121:function(r,e,t){"use strict";t.r(e),t.d(e,"spec",(function(){return o}));var i=t(279),n=t(280);function a(r){return function(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o={code:"imonomy",isBidRequestValid:function(r){return!!(r&&r.params&&r.params.placementId&&r.params.hbid)},buildRequests:function(r){var e=r.map((function(r){var e={uuid:r.bidId,sizes:r.sizes,trid:r.transactionId,hbid:r.params.hbid,placementid:r.params.placementId};return r.params.floorPrice&&(e.floorprice=r.params.floorPrice),e})),t=(new Date).getTime(),n={ts_as:t,hb_placements:[],hb_placement_bidids:{},hb_floors:{},cb:d(t),tz:(new Date).getTimezoneOffset()};r.forEach((function(r){n.hdbdid=n.hdbdid||r.params.hbid,n.encode_bid=n.encode_bid||r.params.encode_bid,n.hb_placement_bidids[r.params.placementId]=r.bidId,r.params.floorPrice&&(n.hb_floors[r.params.placementId]=r.params.floorPrice),n.hb_placements.push(r.params.placementId)}));var o={};i.isEmpty(e)||(o={bids:a(e),kbConf:n});var s="https://b.imonomy.com/openrtb/hb/00000";return n.hdbdid&&(s=s.replace("00000",n.hdbdid)),{method:"POST",url:s,data:JSON.stringify(o)}},interpretResponse:function(r){var e=[];return r&&r.body&&r.body.bids&&r.body.bids.forEach((function(r){r.uuid?r.requestId=r.uuid:i.logError("No uuid for bid"),r.creative?r.ad=r.creative:i.logError("No creative for bid"),e.push(r)})),e},getUserSyncs:function(r){if(r.iframeEnabled)return[{type:"iframe",url:"https://b.imonomy.com/UserMatching/b/"}]}};function d(r){return Math.floor(r%65536+65536*Math.floor(65536*Math.random()))}Object(n.registerBidder)(o)}}]);