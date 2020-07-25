'use strict';


const eventListeners = () =>{
  
  const menuBtn = document.querySelector('.menu-button'),
        menu = document.querySelector('.popup-menu'),
        burgerMenu = menuBtn.querySelector('IMG'),
        closeMenu = document.querySelector('.close-menu-btn'),
        popupMenuCloseBtn = closeMenu.querySelector('IMG'),        
        thanks = document.getElementById('thanks'),        
        btnCallback = document.querySelector('.callback-btn'),
        callbackForm = document.getElementById('callback_form'),
        freeVisitForm = document.getElementById('free_visit_form'),
        clubSelect = document.querySelector('.clubs-list > ul'),
        freeVisitBtn = document.querySelector('.free-visit');


  window.addEventListener('resize', () =>{
    if (window.innerWidth < 768) {
      menuBtn.style.display = 'block';
    } else {
      menuBtn.style.display = 'none';
    }
  });

  window.addEventListener('scroll', () => {
    burgerStick();
    toTop();
  });

  window.addEventListener('click', (event) =>{
    let target = event.target;

    if(target === burgerMenu){
      menu.style.display = 'flex';
    }  else if(target.parentNode.parentNode === freeVisitBtn || target.parentNode === freeVisitBtn){
      freeVisitForm.style.display = 'flex';
    } else if (target === popupMenuCloseBtn){
      menu.style.display = 'none';
    } else if (target.matches('a')){
      if(target.closest('.popup-menu'))
      menu.style.display = 'none';
    } else if(target.matches('.close_icon') || target.matches('.overlay') || target.matches('.close-btn')){
      freeVisitForm.style.display = 'none';
      callbackForm.style.display = 'none';
      thanks.style.display = 'none';    
    } else if(target === btnCallback) {
      callbackForm.style.display = 'flex';
    } else if(target.closest('.clubs-list')){
      if(clubSelect.style.display !== 'block'){
        clubSelect.style.display = 'block';
      } else {
        clubSelect.style.display = 'none';
      }
    } else {
       document.querySelector('.clubs-list > ul').style.display = 'none';
     }

  });
  
};

import toTop from './toTopArrow';
import burgerStick from './burgerSticky';

export default eventListeners;