(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{173:function(t,e,d){"use strict";d.r(e),d.d(e,"spec",(function(){return i}));var a=d(280);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var d=arguments[e];for(var a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a])}return t}).apply(this,arguments)}var i={code:"outcon",supportedMediaTypes:["banner","video"],isBidRequestValid:function(t){return!(!(t.params.pod||t.params.internalId&&t.params.publisher)||!t.params.env)},buildRequests:function(t){for(var e=0;e<t.length;e++){var d="",a="";switch(a=null!=t[e].params.pod?"get?pod="+t[e].params.pod+"&bidId="+t[e].bidId:"get?internalId="+t[e].params.internalId+"&publisher="+t[e].params.publisher+"&bidId="+t[e].bidId,a+="&vast=true",t[e].params.env){case"test":d="https://test.outcondigital.com/ad/"+(a+="&demo=true");break;case"api":d="https://api.outcondigital.com/ad/"+a;break;case"stg":d="https://stg.outcondigital.com/ad/"+a}return{method:"GET",url:d,data:{}}}},interpretResponse:function(t,e){var d=[],a={requestId:t.body.bidId,cpm:t.body.cpm,width:t.body.creatives[0].width,height:t.body.creatives[0].height,creativeId:t.body.creatives[0].id,currency:t.body.cur,netRevenue:!0,ttl:300,ad:o(t.body.creatives[0].url,t.body.type),vastImpUrl:t.body.trackingURL,mediaType:t.body.type};return"video"==t.body.type&&r(a,{vastUrl:t.body.vastURL,ttl:3600}),d.push(a),d}};function o(t,e){return"video"==e?'<html><head></head><body style=\'margin : 0; padding: 0;\'><div><video width="100%"; height="100%"; autoplay = true><source src="'.concat(t,'"></video></div></body>'):"banner"==e?'<html><head></head><body style=\'margin : 0; padding: 0;\'><div><img width:"100%"; height:"100%"; src="'.concat(t,'"></div></body>'):null}Object(a.registerBidder)(i)}}]);