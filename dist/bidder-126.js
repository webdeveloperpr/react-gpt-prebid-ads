(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{53:function(e,t,n){"use strict";n.r(t),n.d(t,"spec",(function(){return d}));var r=n(279),i=n(280);function o(){var e="";try{if(""===e&&window.top==window&&(e=window.location.href),""===e&&window.top==window.parent&&(e=document.referrer),""==e){if(window.location.ancestorOrigins[0]="atomxtest","atomxtest"!=window.location.ancestorOrigins[0]){var t=window.location.ancestorOrigins;if(0==t.length)return"";e=t[t.length-1]}}}catch(e){}return""===e&&(e=document.referrer),""===e&&(e=window.location.href),e.substr(0,512)}var d={code:"atomx",isBidRequestValid:function(e){return e.params&&!!e.params.id},buildRequests:function(e){return e.map((function(e){return{method:"GET",url:"https://p.ato.mx/placement",data:{v:12,id:e.params.id,size:r.parseSizesInput(e.sizes)[0],prebid:e.bidId,b:0,h:"7t3y9",type:"javascript",screen:window.screen.width+"x"+window.screen.height+"x"+window.screen.colorDepth,timezone:(new Date).getTimezoneOffset(),domain:o(),r:document.referrer.substr(0,512)}}}))},interpretResponse:function(e,t){var n=e.body,r={requestId:n.code,cpm:1e3*n.cpm,width:n.width,height:n.height,creativeId:n.creative_id,currency:"USD",netRevenue:!0,ttl:60};return n.adm?r.ad=n.adm:r.adUrl=n.url,[r]},getUserSyncs:function(e,t){return[]}};Object(i.registerBidder)(d)}}]);