!function(e){var t={};function o(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var s=()=>{const e=document.querySelectorAll('[name="name"]'),t=document.querySelectorAll('[type="tel"]');e.forEach(e=>{e.id||e.addEventListener("input",()=>{e.value=e.value.match(/[[а-яё]+[\s]*]*/gi)})}),t.forEach(e=>{let t;const o=o=>{o.keyCode&&(t=o.keyCode),e.selectionStart<3&&o.preventDefault();let s="+7 (___)-___-____",n=0,i=s.replace(/\D/g,""),l=e.value.replace(/\D/g,""),r=s.replace(/[_\d]/g,e=>n<l.length?l.charAt(n++)||i.charAt(n):e);n=r.indexOf("_"),-1!=n&&(n<5&&(n=3),r=r.slice(0,n));let d=s.substr(0,e.value.length).replace(/_+/g,e=>"\\d{1,"+e.length+"}").replace(/[+()]/g,"\\$&");d=new RegExp("^"+d+"$"),(!d.test(e.value)||e.value.length<5||t>47&&t<58)&&(e.value=r),"blur"==o.type&&e.value.length<5&&(e.value="")};e.addEventListener("input",o,!1),e.addEventListener("focus",o,!1),e.addEventListener("blur",o,!1),e.addEventListener("keydown",o,!1)})};var n=()=>{const e=document.createElement("div"),t=document.createElement("span"),o=document.createElement("div"),s=document.createElement("span"),n=document.querySelector(".gallery-slider"),i=document.querySelector(".photogallery-dots"),l=n.querySelectorAll(".slide");let r,d=0;n.style.position="relative",n.append(e),n.append(o),e.classList.add("slider-arrow","prev"),t.classList.add("left"),e.append(t),t.textContent="<",o.classList.add("slider-arrow","next"),s.classList.add("right"),o.append(s),s.textContent=">";l.forEach(()=>{let e=document.createElement("li");e.classList.add("dot"),i.append(e)}),i.querySelectorAll(".dot")[0].classList.add("dot-active");let a=i.querySelectorAll(".dot");const c=(e,t,o)=>{e[t].classList.remove(o)},p=(e,t,o)=>{e[t].classList.add(o)},u=()=>{c(l,d,"gallery-slide_active"),c(a,d,"dot-active"),d++,d>=l.length&&(d=0),p(l,d,"gallery-slide_active"),p(a,d,"dot-active")},m=(e=3e3)=>{r=setInterval(u,e)};n.addEventListener("click",e=>{let t=e.target;t.matches(".left, .right, .dot")&&(c(l,d,"gallery-slide_active"),c(a,d,"dot-active"),t.matches(".right")?d++:t.matches(".left")?d--:t.matches(".dot")&&a.forEach((e,o)=>{e===t&&(d=o)}),d>=l.length&&(d=0),d<0&&(d=l.length-1),p(l,d,"gallery-slide_active"),p(a,d,"dot-active"))}),n.addEventListener("mouseover",e=>{(e.target.matches(".left")||e.target.matches(".right")||e.target.matches(".dot"))&&clearInterval(r)}),n.addEventListener("mouseout",e=>{(e.target.matches(".left")||e.target.matches(".right")||e.target.matches(".dot"))&&m()}),m(2e3)};var i=()=>{if(document.getElementById("price-total")){const e=document.getElementById("card_order"),t=document.querySelectorAll('[name="card-type"]'),o=document.getElementById("card_leto_mozaika"),s=document.getElementById("card_leto_schelkovo"),n=document.getElementById("promo"),i={1:1999,6:9990,9:13900,12:19990},l={1:2999,6:14990,9:21900,12:24990};let r=document.getElementById("price-total");r.textContent=i[1],e.addEventListener("change",e=>{let d,a=e.target;t.forEach(e=>{e.checked&&(d=e)});a.matches("input")&&(()=>{let e=d.value;o.checked?"ТЕЛО2019"===n.value?r.textContent=i[e]-Math.ceil(i[e]/100*30):r.textContent=i[e]:s.checked&&("ТЕЛО2019"===n.value?r.textContent=l[e]-Math.ceil(l[e]/100*30):r.textContent=l[e])})()})}};var l=()=>{if(document.querySelector(".fixed-gift")){const e=document.getElementById("gift"),t=document.querySelector(".fixed-gift");t.addEventListener("click",()=>{e.style.display="flex",t.style.display="none"}),window.addEventListener("click",t=>{let o=t.target;(o.matches(".close_icon")||o.matches(".overlay")||o.matches(".close-btn"))&&(e.style.display="none")})}};var r=()=>{const e=document.querySelector(".free-visit"),t=document.getElementById("free_visit_form");e.addEventListener("click",()=>{t.style.display="flex"})};var d=()=>{const e=document.querySelector(".clubs-list > ul");document.addEventListener("click",t=>{t.target.closest(".clubs-list")&&"block"!==e.style.display?e.style.display="block":e.style.display="none"})};var a=()=>{let e=document.querySelector(".top-menu");window.addEventListener("scroll",()=>{window.innerWidth<768&&(window.scrollY>=187?e.classList.add("menu-fix"):window.scrollY<187&&e.classList.remove("menu-fix"))})};var c=()=>{const e=document.getElementById("totop"),t=document.querySelector(".header-main");e.style.opacity="0",window.addEventListener("scroll",()=>{window.scrollY>=t.clientHeight?e.style.cssText="transition: all 0.5s ease; opacity: 1":e.style.cssText="transition: all 0.5s ease; opacity: 0"})};var p=()=>{const e=document.querySelectorAll(".main-slider > .slide"),t=document.querySelector(".portfolio-dots");document.querySelector(".main-slider");let o=0;e.forEach(()=>{let e=document.createElement("li");e.classList.add("dot"),t.append(e)}),document.querySelectorAll(".dot")[0].classList.add("dot-active");let s=document.querySelectorAll(".dot");setInterval(()=>{e[o].style.display="none",s[o].classList.remove("dot-active"),o++,o>=e.length&&(o=0),e[o].style.display="flex",s[o].classList.add("dot-active")},2500)};var u=()=>{const e=document.createElement("div"),t=document.createElement("span"),o=document.createElement("div"),s=document.createElement("span"),n=document.getElementById("services").querySelector(".wrapper");n.style.position="relative",n.append(e),n.append(o),e.classList.add("slider-arrow","prev","carousel-prev"),e.style.left="14px",t.classList.add("carousel-prev"),e.append(t),t.textContent="<",o.classList.add("slider-arrow","next","carousel-next"),o.style.right="7px",s.classList.add("carousel-next"),o.append(s),s.textContent=">";new class{constructor({main:e,wrap:t,next:o,prev:s,infinity:n,position:i=0,slidesToShow:l=4,responsive:r=[]}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(o),this.prev=document.querySelector(s),this.slidesToShow=l,this.options={position:i,infinity:n,maxPosition:this.slides.length-this.slidesToShow,widthSlides:Math.floor(100/this.slidesToShow)},this.position=i,this.responsive=r}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n        .glo-slider{\n          overflow: hidden !important;\n        }\n        .glo-slider__wrap{\n          display: flex !impoortant;\n          margin-right: -8px;\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n        }\n        .glo-slider__item {\n          flex: 0 0 ${this.options.widthSlides}% !important;\n          margin: 0 auto !important;\n        }\n      `,document.head.appendChild(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){this.options.maxPosition=this.slides.length-this.slidesToShow,(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlides}%)`)}nextSlider(){this.options.maxPosition=this.slides.length-this.slidesToShow,(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlides}%)`)}responseInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breakpoint),o=Math.max(...t),s=()=>{const s=document.documentElement.clientWidth;if(s<o)for(let e=0;e<t.length;e++)s<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSlides=Math.ceil(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSlides=Math.ceil(100/this.slidesToShow),this.addStyle()};s(),window.addEventListener("resize",s)}}({main:".services-wrapper",wrap:".services-slider",prev:".carousel-prev",next:".carousel-next",slidesToShow:5,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()};var m=()=>{const e="Спасибо! Мы скоро с вами свяжемся",t=document.createElement("div"),o=document.querySelectorAll("form"),s=document.getElementById("thanks");let n;t.style.cssText="font-size: 1rem; color: #ffffff;",o.forEach(o=>{o.addEventListener("submit",l=>{l.preventDefault(),s.querySelector("h4").textContent="Спасибо!";const r=()=>{o.querySelector(".personal-data").removeChild(n)};if(o.querySelector('[type="checkbox"]')&&!o.querySelector('[type="checkbox"]').checked){if(o.querySelector(".warnError"))return;return n=document.createElement("DIV"),n.classList.add("warnError"),n.style.cssText="color: red; margin-top: 10px;",n.textContent="Вы должны согласиться на обработку данных перед её отправкой.",o.querySelector(".personal-data").insertAdjacentElement("beforeend",n),void setTimeout(r,5e3)}t.style.cssText="font-size: 2rem; color: #ffffff;",o.appendChild(t),"card_order"===o.id&&(t.style.color="#000000"),t.textContent="Отправка...";const d=new FormData(o);function a(){t.textContent="",t.remove()}function c(){t.remove()}i(d).then(n=>{if(200!==n.status)throw new Error("status network not 200.");"banner-form"===o.id||"footer_form"===o.id?(c(),s.style.display="flex",s.querySelector("p").textContent=e):"card_order"===o.id?(t.style.color="green",t.textContent=e,setTimeout(a,5e3)):(t.textContent=e,setTimeout(a,5e3))}).catch(e=>{"banner-form"!==o.id&&"footer_form"!==o.id||(c(),s.style.display="flex",s.querySelector("h4").textContent="Ошибка отправки",s.querySelector("p").textContent="Что-то пошло не так"),t.textContent="Что-то пошло не так",console.log(e)}),o.reset()})});const i=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:e})};(()=>{const e=document.querySelector(".menu-button"),t=document.querySelector(".popup-menu"),o=e.querySelector("IMG"),s=document.querySelector(".close-menu-btn").querySelector("IMG"),n=document.getElementById("free_visit_form"),i=document.getElementById("thanks"),l=document.querySelector(".callback-btn"),r=document.getElementById("callback_form");window.addEventListener("resize",()=>{window.innerWidth<768?e.style.display="block":e.style.display="none"}),window.addEventListener("click",e=>{let d=e.target;d===o?t.style.display="flex":d===s?t.style.display="none":d.matches("a")?d.closest(".popup-menu")&&(t.style.display="none"):d.matches(".close_icon")||d.matches(".overlay")||d.matches(".close-btn")?(n.style.display="none",r.style.display="none",i.style.display="none"):d.closest(".free-visit")?n.style.display="flex":d===l&&(r.style.display="flex")})})(),a(),d(),r(),c(),l(),p(),i(),n(),u(),m(),s()}]);