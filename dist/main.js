!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t);var r=()=>{const e=document.querySelector(".clubs-list > ul");document.addEventListener("click",t=>{t.target.closest(".clubs-list")&&"block"!==e.style.display?e.style.display="block":e.style.display="none"})};var o=()=>{let e=document.querySelector(".top-menu");window.addEventListener("scroll",()=>{window.scrollY>=187?e.classList.add("menu-fix"):window.scrollY<187&&e.classList.remove("menu-fix")})};(()=>{const e=document.querySelector(".menu-button"),t=document.querySelector(".popup-menu"),n=e.querySelector("IMG"),r=document.querySelector(".close-menu-btn").querySelector("IMG");window.addEventListener("resize",()=>{window.innerWidth<768?e.style.display="block":e.style.display="none"}),window.addEventListener("click",e=>{let o=e.target;o===n?t.style.display="flex":(o===r||o.matches("a")&&o.closest(".popup-menu"))&&(t.style.display="none")})})(),o(),r()}]);