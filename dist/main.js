!function(e){var t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dist",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var n=()=>{if(document.querySelector(".fixed-gift")){const e=document.getElementById("gift"),t=document.querySelector(".fixed-gift");t.addEventListener("click",()=>{e.style.display="flex",t.style.display="none"}),window.addEventListener("click",t=>{let l=t.target;(l.matches(".close_icon")||l.matches(".overlay")||l.matches(".close-btn"))&&(e.style.display="none")})}};var o=()=>{const e=document.querySelector(".free-visit"),t=document.getElementById("free_visit_form");e.addEventListener("click",()=>{t.style.display="flex"})};var s=()=>{const e=document.querySelector(".clubs-list > ul");document.addEventListener("click",t=>{t.target.closest(".clubs-list")&&"block"!==e.style.display?e.style.display="block":e.style.display="none"})};var r=()=>{let e=document.querySelector(".top-menu");window.addEventListener("scroll",()=>{window.innerWidth<768&&(window.scrollY>=187?e.classList.add("menu-fix"):window.scrollY<187&&e.classList.remove("menu-fix"))})};var c=()=>{const e=document.getElementById("totop"),t=document.querySelector(".header-main");e.style.opacity="0",window.addEventListener("scroll",()=>{window.scrollY>=t.clientHeight?e.style.cssText="transition: all 0.5s ease; opacity: 1":e.style.cssText="transition: all 0.5s ease; opacity: 0"})};var i=()=>{const e=document.querySelectorAll(".main-slider > .slide"),t=document.querySelector(".portfolio-dots");let l=0;e.forEach(()=>{let e=document.createElement("li");e.classList.add("dot"),t.append(e)}),document.querySelectorAll(".dot")[0].classList.add("dot-active");let n=document.querySelectorAll(".dot");setInterval(()=>{e[l].style.display="none",n[l].classList.remove("dot-active"),l++,l>=e.length&&(l=0),e[l].style.display="flex",n[l].classList.add("dot-active")},2500)};(()=>{const e=document.querySelector(".menu-button"),t=document.querySelector(".popup-menu"),l=e.querySelector("IMG"),n=document.querySelector(".close-menu-btn").querySelector("IMG"),o=document.getElementById("free_visit_form"),s=document.querySelector(".callback-btn"),r=document.getElementById("callback_form");window.addEventListener("resize",()=>{window.innerWidth<768?e.style.display="block":e.style.display="none"}),window.addEventListener("click",e=>{let c=e.target;c===l?t.style.display="flex":c===n?t.style.display="none":c.matches("a")?c.closest(".popup-menu")&&(t.style.display="none"):c.matches(".close_icon")||c.matches(".overlay")||c.matches(".close-btn")?(o.style.display="none",r.style.display="none"):c.closest(".free-visit")?o.style.display="flex":c===s&&(r.style.display="flex")})})(),r(),s(),o(),c(),n(),i()}]);