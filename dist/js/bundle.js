!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(4)},function(e,t,n){"use strict";n.r(t);n(2),n(3)},function(e,t){document.querySelector("#catalog-button").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#catalog-button").classList.toggle("show"),document.querySelector("#navbar-burger-desk").classList.toggle("is-active")})),document.querySelector("#navbar-collapse-burger").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#site").classList.toggle("overflow"),document.querySelector("#navigation__collapse").classList.toggle("show"),document.querySelector("#navbar-collapse-burger").classList.toggle("show"),document.querySelector("#navbar-burger-mob").classList.toggle("is-active"),document.querySelector("#collapse-burger__intro").classList.toggle("togle-menu")}))},function(e,t){let n=document.querySelectorAll("#slides .slide"),o=0,l=(setInterval(c,9e6),document.getElementById("main-slider__dots")),r=[];function c(){s(o+1)}function i(e){number=e.getAttribute("data-id"),r[o].className="dot",function(e){n[o].className="slide",o=e-1,n[o].className="slide showing",u()}(number),u()}function u(){r[o].className="dot active"}function s(e){r[o].className="dot",n[o].className="slide",o=(e+n.length)%n.length,n[o].className="slide showing",u()}function a(e){l.insertAdjacentHTML("beforeend",`<li data-id="${e+1}" class="dot"></li>`);let t=document.querySelectorAll("#main-slider__dots .dot");r=Array.prototype.slice.call(t)}if(n.length>0){let e=document.getElementById("next"),t=document.getElementById("previous");e.addEventListener("click",(function(){c()})),t.addEventListener("click",(function(){s(o-1)}))}!function(){if(n.length>0){for(let e=0;e<n.length;e++)a(e);r[0].className="dot active"}else console.log("no slides")}(),r.map(e=>{e.addEventListener("click",(function(){i(e)}))})},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map