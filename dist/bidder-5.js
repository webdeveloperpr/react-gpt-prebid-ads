(window.webpackJsonp=window.webpackJsonp||[]).push([[5,263],{293:function(e,t,n){"use strict";function o(){return window.pbjs}n.d(t,"a",(function(){return o})),window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[],window._pbjsGlobals=window._pbjsGlobals||[],window._pbjsGlobals.push("pbjs")},4:function(e,t,n){"use strict";n.r(t),n.d(t,"syncDelay",(function(){return r})),n.d(t,"auctionDelay",(function(){return i})),n.d(t,"setSubmoduleRegistry",(function(){return j})),n.d(t,"requestBidsHook",(function(){return _})),n.d(t,"attachIdSystem",(function(){return A})),n.d(t,"init",(function(){return C}));var o,r,i,a=n(286),c=n.n(a),u=n(280),s=n(289),d=n.n(s),l=n(277),f=n(293),g=n(290),p=n(282),b=n(291),m=n(8),y=[],v=!1,I=[],h=[],w=[];function j(e){w=e}function E(e,t){try{var n=l.isPlainObject(t)?JSON.stringify(t):t,o=new Date(Date.now()+864e5*e.expires).toUTCString();"cookie"===e.type?(l.setCookie(e.name,n,o,"Lax"),"number"==typeof e.refreshInSeconds&&l.setCookie("".concat(e.name,"_last"),(new Date).toUTCString(),o)):"html5"===e.type&&(localStorage.setItem("".concat(e.name,"_exp"),o),localStorage.setItem(e.name,encodeURIComponent(n)),"number"==typeof e.refreshInSeconds&&localStorage.setItem("".concat(e.name,"_last"),(new Date).toUTCString()))}catch(e){l.logError(e)}}function S(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,o=n?"".concat(e.name,"_").concat(n):e.name;try{if("cookie"===e.type)t=l.getCookie(o);else if("html5"===e.type){var r=localStorage.getItem("".concat(e.name,"_exp"));""===r?t=localStorage.getItem(o):r&&new Date(r).getTime()-Date.now()>0&&(t=decodeURIComponent(localStorage.getItem(o)))}"string"==typeof t&&"{"===t.charAt(0)&&(t=JSON.parse(t))}catch(e){l.logError(e)}return t}function D(e,t){var n=t?l.delayExecution(t,e.length):function(){};e.forEach((function(e){e.callback((function(t){t?(e.config.storage&&E(e.config.storage,t),e.idObj=e.submodule.decode(t)):l.logError("".concat("User ID",": ").concat(e.submodule.name," - request id responded with an empty value")),n()})),e.callback=void 0}))}function O(e){return Array.isArray(e)&&e.length?e.filter((function(e){return l.isPlainObject(e.idObj)&&Object.keys(e.idObj).length})).reduce((function(e,t){return Object.keys(t.idObj).forEach((function(n){e[n]=t.idObj[n]})),e}),{}):{}}function k(e){var t=!1;if(void 0===o&&(o=function(e,t){if(!function(e){if(e&&"boolean"==typeof e.gdprApplies&&e.gdprApplies){if(!e.consentString)return!1;if(e.vendorData&&e.vendorData.purposeConsents&&!1===e.vendorData.purposeConsents[1])return!1}return!0}(t))return l.logWarn("".concat("User ID"," - gdpr permission not valid for local storage or cookies, exit module")),[];return e.reduce((function(e,n){if(n.config.storage){var o,r=S(n.config.storage),i=!1;if("number"==typeof n.config.storage.refreshInSeconds){var a=new Date(S(n.config.storage,"last"));i=a&&Date.now()-a.getTime()>1e3*n.config.storage.refreshInSeconds}!0===p.SUBMODULES_THAT_ALWAYS_REFRESH_ID[n.config.name]&&(i=!0),!r||i?o=n.submodule.getId(n.config.params,t,r):"function"==typeof n.submodule.extendId&&(o=n.submodule.extendId(n.config.params,r)),l.isPlainObject(o)&&(o.id&&(E(n.config.storage,o.id),r=o.id),"function"==typeof o.callback&&(n.callback=o.callback)),r&&(n.idObj=n.submodule.decode(r))}else if(n.config.value)n.idObj=n.config.value;else{var c=n.submodule.getId(n.config.params,t,void 0);l.isPlainObject(c)&&("function"==typeof c.callback&&(n.callback=c.callback),c.id&&(n.idObj=n.submodule.decode(c.id)))}return e.push(n),e}),[])}(I,g.gdprDataHandler.getConsentData())).length){var n=o.filter((function(e){return l.isFn(e.callback)}));if(n.length)if(e&&i>0){t=!0;var a=!1,c=function(){a||(a=!0,e())};l.logInfo("".concat("User ID"," - auction delayed by ").concat(i," at most to fetch ids")),D(n,c),setTimeout(c,i)}else d.a.on(p.EVENTS.AUCTION_END,(function e(){d.a.off(p.EVENTS.AUCTION_END,e),r>0?setTimeout((function(){D(n)}),r):D(n)}))}e&&!t&&e()}function _(e,t){k((function(){!function(e,t){if(![e].some((function(e){return!Array.isArray(e)||!e.length}))){var n=O(t),o=Object(m.createEidsArray)(n);Object.keys(n).length&&e.forEach((function(e){e.bids.forEach((function(e){e.userId=n,e.userIdAsEids=o}))}))}}(t.adUnits||Object(f.a)().adUnits,o),e.call(this,t)}))}function x(){return k(),O(o)}function U(){var e=function(e,t,n){return Array.isArray(e)?e.reduce((function(e,t){return!t||l.isEmptyStr(t.name)||(!t.storage||l.isEmptyStr(t.storage.type)||l.isEmptyStr(t.storage.name)||-1===n.indexOf(t.storage.type)?l.isPlainObject(t.value)?e.push(t):t.storage||t.value||e.push(t):e.push(t)),e}),[]):[]}(h,0,y);if(e.length){var t=w.filter((function(e){return!c()(I,(function(t){return t.name===e.name}))}));I=t.map((function(t){var n=c()(e,(function(e){return e.name===t.name}));return n?{submodule:t,config:n,callback:void 0,idObj:void 0}:null})).filter((function(e){return null!==e})),!v&&I.length&&(Object(f.a)().requestBids.before(_,40),l.logInfo("".concat("User ID"," - usersync config updated for ").concat(I.length," submodules")),v=!0)}}function A(e){c()(w,(function(t){return t.name===e.name}))||(w.push(e),U())}function C(e){I=[],h=[],v=!1,o=void 0,-1===(y=[l.localStorageIsEnabled()?"html5":null,l.cookiesAreEnabled()?"cookie":null].filter((function(e){return null!==e}))).indexOf("cookie")||!l.getCookie("_pbjs_id_optout")&&!l.getCookie("_pubcid_optout")?-1===y.indexOf("html5")||!localStorage.getItem("_pbjs_id_optout")&&!localStorage.getItem("_pubcid_optout")?(e.getConfig((function(e){var t=e.userSync||e.usersync;t&&t.userIds&&(h=t.userIds,r=l.isNumber(t.syncDelay)?t.syncDelay:500,i=l.isNumber(t.auctionDelay)?t.auctionDelay:0,U())})),Object(f.a)().getUserIds=x):l.logInfo("".concat("User ID"," - opt-out localStorage found, exit module")):l.logInfo("".concat("User ID"," - opt-out cookie found, exit module"))}C(u.b),Object(b.c)("userId",A)},8:function(e,t,n){"use strict";n.r(t),n.d(t,"createEidsArray",(function(){return a}));var o=n(277),r={pubcid:{source:"pubcid.org",atype:1},tdid:{source:"adserver.org",atype:1,getUidExt:function(){return{rtiPartner:"TDID"}}},id5id:{source:"id5-sync.com",atype:1},parrableid:{source:"parrable.com",atype:1},idl_env:{source:"liveramp.com",atype:1},lipb:{getValue:function(e){return e.lipbid},source:"liveintent.com",atype:1,getEidExt:function(e){if(Array.isArray(e.segments)&&e.segments.length)return{segments:e.segments}}},britepoolid:{source:"britepool.com",atype:1},digitrustid:{getValue:function(e){return e.data.id},source:"digitru.st",atype:1},criteoId:{source:"criteo.com",atype:1},netId:{source:"netid.de",atype:1}};function i(e,t){var n=r[t];if(n&&e){var i={};i.source=n.source;var a=o.isFn(n.getValue)?n.getValue(e):e;if(a){var c={id:a,atype:n.atype};if(o.isFn(n.getUidExt)){var u=n.getUidExt(e);u&&(c.ext=u)}if(i.uids=[c],o.isFn(n.getEidExt)){var s=n.getEidExt(e);s&&(i.ext=s)}return i}}return null}function a(e){var t=[];for(var n in e)if(e.hasOwnProperty(n)){var o=i(e[n],n);o&&t.push(o)}return t}}}]);