(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{283:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return s}));var r=e(290),i=e(282);function o(){return(o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c=e(279),a=s();function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.request,a=n.done;return function(n,s,l){var f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};try{var d,p=f.method||(l?"POST":"GET"),y=document.createElement("a");y.href=n;var g="object"===u(s)&&null!==s?s:{success:function(){c.logMessage("xhr success")},error:function(t){c.logError("xhr error",null,t)}};if("function"==typeof s&&(g.success=s),(d=new window.XMLHttpRequest).onreadystatechange=function(){if(4===d.readyState){"function"==typeof a&&a(y.origin);var t=d.status;t>=200&&t<300||304===t?g.success(d.responseText,d):g.error(d.statusText,d)}},i.b.getConfig("disableAjaxTimeout")||(d.ontimeout=function(){c.logError("  xhr timeout after ",d.timeout,"ms")}),"GET"===p&&l){var h=Object(r.c)(n,f);o(h.search,l),n=Object(r.a)(h)}d.open(p,n,!0),i.b.getConfig("disableAjaxTimeout")||(d.timeout=t),f.withCredentials&&(d.withCredentials=!0),c._each(f.customHeaders,(function(t,n){d.setRequestHeader(n,t)})),f.preflight&&d.setRequestHeader("X-Requested-With","XMLHttpRequest"),d.setRequestHeader("Content-Type",f.contentType||"text/plain"),"function"==typeof e&&e(y.origin),"POST"===p&&l?d.send(l):d.send()}catch(t){c.logError("xhr construction",t)}}}},293:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return c})),e.d(n,"d",(function(){return a})),e.d(n,"c",(function(){return t})),e.d(n,"e",(function(){return s}));var r=e(294),i=e.n(r);function o(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=i()({ready:i.a.SYNC|i.a.ASYNC|i.a.QUEUE}),c=u.get;function a(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,r=t.getHooks({hook:n});0===r.length&&t.before(n,e)}function t(t,n){u("async",(function(t){t.forEach((function(t){return n.apply(void 0,o(t))}))}),t)([])}function s(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];c(t).before((function(t,n){n.push(e),t(n)}))}},294:function(t,n){
/*
* @license MIT
* Fun Hooks v0.9.8
* (c) @snapwich
*/
c.SYNC=1,c.ASYNC=2,c.QUEUE=4;var e=Object.freeze({useProxy:!0,ready:0}),r=new WeakMap,i="2,1,0"===[1].reduce((function(t,n,e){return[t,n,e]}),2).toString()?Array.prototype.reduce:function(t,n){var e,r=Object(this),i=r.length>>>0,o=0;if(n)e=n;else{for(;o<i&&!(o in r);)o++;e=r[o++]}for(;o<i;)o in r&&(e=t(e,r[o],o,r)),o++;return e};function o(t,n){return Array.prototype.slice.call(t,n)}var u=Object.assign||function(t){return i.call(o(arguments,1),(function(t,n){return n&&Object.keys(n).forEach((function(e){t[e]=n[e]})),t}),t)};function c(t){var n,a={},s=[];function l(t,n){return"function"==typeof t?y.call(null,"sync",t,n):"string"==typeof t&&"function"==typeof n?y.apply(null,arguments):"object"==typeof t?f.apply(null,arguments):void 0}function f(t,n,e){var r=!0;void 0===n&&(n=Object.getOwnPropertyNames(t),r=!1);var i={},o=["constructor"];do{(n=n.filter((function(n){return!("function"!=typeof t[n]||-1!==o.indexOf(n)||n.match(/^_/))}))).forEach((function(n){var r=n.split(":"),o=r[0],u=r[1]||"sync";if(!i[o]){var c=t[o];i[o]=t[o]=y(u,c,e?[e,o]:void 0)}})),t=Object.getPrototypeOf(t)}while(r&&t);return i}function d(t){var e=Array.isArray(t)?t:t.split(".");return i.call(e,(function(r,i,o){var u=r[i],c=!1;return u||(o===e.length-1?(n||s.push((function(){c||console.warn("fun-hooks: referenced '"+t+"' but it was never created")})),r[i]=p((function(t){r[i]=t,c=!0}))):r[i]={})}),a)}function p(t){var n=[],e=[],i=function(){},o={before:function(t,e){return a.call(this,n,"before",t,e)},after:function(t,n){return a.call(this,e,"after",t,n)},getHooks:function(t){var r=n.concat(e);return"object"==typeof t&&(r=r.filter((function(n){return Object.keys(t).every((function(e){return n[e]===t[e]}))}))),u(r,{remove:function(){return r.forEach((function(t){t.remove()})),this}})},removeAll:function(){return this.getHooks().remove()}},c={install:function(r,o,u){this.type=r,i=u,u(n,e),t&&t(o)}};return r.set(o.after,c),o;function a(t,r,o,u){var c={hook:o,type:r,priority:u||10,remove:function(){var r=t.indexOf(c);-1!==r&&(t.splice(r,1),i(n,e))}};return t.push(c),t.sort((function(t,n){return n.priority-t.priority})),i(n,e),this}}function y(e,i,a){var l=i.after&&r.get(i.after);if(l){if(l.type!==e)throw"fun-hooks: recreated hookable with different type";return i}var f,y,g=a?d(a):p(),h={get:function(t,n){return g[n]||Reflect.get.apply(Reflect,arguments)}};return n||s.push(v),t.useProxy&&"function"==typeof Proxy&&Proxy.revocable?y=new Proxy(i,h):u(y=function(){return h.apply?h.apply(i,this,o(arguments)):i.apply(this,arguments)},g),r.get(y.after).install(e,y,(function(t,n){var r,i=[];t.length||n.length?(t.forEach(u),r=i.push(void 0)-1,n.forEach(u),f=function(t,n,u){var c,a=0,s="async"===e&&"function"==typeof u[u.length-1]&&u.pop();function l(t){"sync"===e?c=t:s&&s.apply(null,arguments)}function f(t){if(i[a]){var r=o(arguments);return f.bail=l,r.unshift(f),i[a++].apply(n,r)}"sync"===e?c=t:s&&s.apply(null,arguments)}return i[r]=function(){var r=o(arguments,1);"async"===e&&s&&(delete f.bail,r.push(f));var i=t.apply(n,r);"sync"===e&&f(i)},f.apply(null,u),c}):f=void 0;function u(t){i.push(t.hook)}v()})),y;function v(){!n&&("sync"!==e||t.ready&c.SYNC)&&("async"!==e||t.ready&c.ASYNC)?"sync"!==e&&t.ready&c.QUEUE?h.apply=function(){var t=arguments;s.push((function(){y.apply(t[1],t[2])}))}:h.apply=function(){throw"fun-hooks: hooked function not ready"}:h.apply=f}}return(t=u({},e,t)).ready?l.ready=function(){n=!0,function(t){for(var n;n=t.shift();)n()}(s)}:n=!0,l.get=d,l}t.exports=c},93:function(t,n,e){"use strict";e.r(n),e.d(n,"surfaceTestHook",(function(){return v})),e.d(n,"digiTrustIdSubmodule",(function(){return b}));var r=e(279),i=e(283),o=e(293),u=0;function c(){return null!=window.DigiTrust&&DigiTrust.isClient}var a=function(){},s=function(t){return"function"==typeof t};function l(t){var n=new Date;n.setTime(n.getTime()+6048e5);var e="expires="+n.toUTCString();document.cookie="DigiTrust.v1.identity="+function(t){try{return"string"!=typeof t&&(t=JSON.stringify(t)),encodeURIComponent(btoa(t))}catch(n){return t}}(t)+"; "+e+"; path=/;SameSite=none;"}function f(t){var n=null;clearTimeout(u),u=0;var e={isClient:!0,isMock:!0,_internals:{callCount:0,initCallback:null},getUser:function(t,o){var u=!!s(o),c=u?o:a,f={success:!1},y=e._internals;y.callCount++;var g=function(t){if(y.callCount<=1&&s(y.initCallback))try{y.initCallback(t)}catch(t){r.logError("Exception in passed DigiTrust init callback")}};if(!d(t.member))return u?void c(f):f;if(null!=n)return u?void g(n):n;var h={success:function(t,e){var r={success:!0};try{l(t),r.identity=JSON.parse(t),n=r}catch(t){r.success=!1,delete r.identity}g(r)},fail:function(t,n){r.logError("DigiTrustId API error: "+t)}};return p.hasConsent(null,(function(t){var n;t&&(n=h,Object(i.a)("https://prebid.digitru.st/id/v1",{success:n.success,error:n.fail},null,{method:"GET"}))})),u?void 0:f}};t&&s(t.callback)&&(e._internals.initCallback=t.callback),window&&null==window.DigiTrust&&(window.DigiTrust=e)}var d=function(t){return!!(t&&t.length>0)||(r.logError("[DigiTrust Prebid Client Error] Missing member ID, add the member ID to the function call options"),!1)},p={hasConsent:function(t,n){var e;t=t||{consentTimeout:1500};var r=!1;void 0!==window.__cmp?(e=setTimeout((function(){r=!0,n(!1)}),t.consentTimeout),window.__cmp("ping",null,(function(t){if(t.gdprAppliesGlobally)window.__cmp("getVendorConsents",[64],(function(t){if(!r){clearTimeout(e);var i=t.vendorConsents[64];n(i)}}));else{if(r)return;clearTimeout(e),n(!0)}}))):n(!0)}},y=new function(t){var n=this;this.idObj=null;var e=null;function i(){if(null==n.idObj)return null;var t=n.configParams,e={data:null,expires:t&&t.storage&&t.storage.expires||60};return n.idObj&&n.idObj.success&&n.idObj.identity?e.data=n.idObj.identity:e.err="Failure getting id",e}this.userIdCallback=function(t){e=t,null!=n.idObj&&s(t)&&t(i())},this.retries=0,this.retryId=0,this.executeIdRequest=function(t){DigiTrust.getUser({member:"prebid"},(function(o){n.idObj=o;if(s(e)&&e(i()),t&&t.callback&&s(t.callback))try{t.callback(o)}catch(t){r.logError("Failure in DigiTrust executeIdRequest",t)}}))}};function g(t){return null==y.configParams&&(y.configParams=t),null==window.DigiTrust||c()?c()?(y.executeIdRequest(t),y.userIdCallback):(y.retries>=2?(f(t),y.executeIdRequest(t)):(0!=y.retryId&&clearTimeout(y.retryId),y.retryId=setTimeout((function(){g(t)}),100*(1+y.retries++))),y.userIdCallback):(function(t){r.logInfo("Digitrust Init");var n=window.DigiTrust;n&&!n.isClient&&null!=t?n.initialize(t.init,t.callback):null==n&&f(t)}(t),y.retryId=setTimeout((function(){g(t)}),100*(1+y.retries++)),y.userIdCallback)}var h={};function v(){return b._testHook=h,h}h.initDigitrustFacade=f,h.gdpr=p;var b={name:"digitrust",decode:function(t){try{return{digitrustid:t}}catch(t){r.logError("DigiTrust ID submodule decode error")}},getId:function(t){return{callback:g(t)}},_testInit:v};u=setTimeout((function(){0!=y.retryId||c()||g({member:"fallback",callback:a})}),1550),Object(o.e)("userId",b)}}]);