!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{const e=document.querySelector(".free-visit"),t=document.getElementById("free_visit_form");e.addEventListener("click",()=>{t.style.display="flex"})};var o=()=>{const e=document.querySelector(".clubs-list > ul");document.addEventListener("click",t=>{t.target.closest(".clubs-list")&&"block"!==e.style.display?e.style.display="block":e.style.display="none"})};var r=()=>{let e=document.querySelector(".top-menu");window.addEventListener("scroll",()=>{window.innerWidth<768&&(window.scrollY>=187?e.classList.add("menu-fix"):window.scrollY<187&&e.classList.remove("menu-fix"))})};var s=()=>{const e=document.getElementById("totop"),t=document.querySelector(".header-main");document.getElementById("clubs");e.style.opacity="0",window.addEventListener("scroll",()=>{window.scrollY>=t.clientHeight?e.style.cssText="transition: all 0.5s ease; opacity: 1":e.style.cssText="transition: all 0.5s ease; opacity: 0"})};(()=>{const e=document.querySelector(".menu-button"),t=document.querySelector(".popup-menu"),n=e.querySelector("IMG"),l=document.querySelector(".close-menu-btn").querySelector("IMG"),o=document.getElementById("free_visit_form"),r=document.getElementById("gift"),s=document.querySelector(".fixed-gift"),i=document.querySelector(".callback-btn"),c=document.getElementById("callback_form");window.addEventListener("resize",()=>{window.innerWidth<768?e.style.display="block":e.style.display="none"}),window.addEventListener("click",e=>{let d=e.target;d===n?t.style.display="flex":d===l?t.style.display="none":d.matches("a")?d.closest(".popup-menu")&&(t.style.display="none"):d.matches(".close_icon")||d.matches(".overlay")||d.matches(".close-btn")?(o.style.display="none",r.style.display="none",c.style.display="none"):d.closest(".free-visit")?o.style.display="flex":d.closest(".fixed-gift")?(r.style.display="flex",s.style.display="none"):d===i&&(c.style.display="flex")})})(),r(),o(),l(),s()}]);