(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{71:function(a,t,e){"use strict";e.r(t),e.d(t,"registerAdserver",(function(){return l})),e.d(t,"getAdserverCategoryHook",(function(){return s})),e.d(t,"initTranslation",(function(){return p}));var r=e(282),n=e(293),i=e(283),o=e(279),c=e(302),l=Object(n.b)("async",(function(a){"freewheel"===a&&("https://cdn.jsdelivr.net/gh/prebid/category-mapping-file@1/freewheel-mapping.json",p("https://cdn.jsdelivr.net/gh/prebid/category-mapping-file@1/freewheel-mapping.json","iabToFwMappingkey"))}),"registerAdserver");function s(a,t,e){if(!e)return a.call(this,t);if(!r.b.getConfig("adpod.brandCategoryExclusion"))return a.call(this,t,e);var n=r.b.getConfig("brandCategoryTranslation.translationFile")?"iabToFwMappingkeyPub":"iabToFwMappingkey";if(e.meta&&!e.meta.adServerCatId){var i=Object(o.getDataFromLocalStorage)(n);if(i){try{i=JSON.parse(i)}catch(a){Object(o.logError)("Failed to parse translation mapping file")}e.meta.iabSubCatId&&i.mapping&&i.mapping[e.meta.iabSubCatId]?e.meta.adServerCatId=i.mapping[e.meta.iabSubCatId].id:e.meta.adServerCatId=void 0}else Object(o.logError)("Translation mapping data not found in local storage")}a.call(this,t,e)}function p(a,t){Object(n.d)(c.c,s,50);var e=Object(o.getDataFromLocalStorage)(t);(!e||Object(o.timestamp)()<e.lastUpdated+864e5)&&Object(i.a)(a,{success:function(a){try{(a=JSON.parse(a)).lastUpdated=Object(o.timestamp)(),Object(o.setDataInLocalStorage)(t,JSON.stringify(a))}catch(a){Object(o.logError)("Failed to parse translation mapping file")}},error:function(){Object(o.logError)("Failed to load brand category translation file.")}})}l(),r.b.getConfig("brandCategoryTranslation",(function(a){return function(a){a.translationFile&&p(a.translationFile,"iabToFwMappingkeyPub")}(a.brandCategoryTranslation)}))}}]);