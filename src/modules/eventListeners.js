'use strict';

const eventListeners = () =>{
  const menuBtn = document.querySelector('.menu-button'),
        menu = document.querySelector('.popup-menu'),
        burgerMenu = menuBtn.querySelector('IMG'),
        closeMenu = document.querySelector('.close-menu-btn'),
        popupMenuCloseBtn = closeMenu.querySelector('IMG'),
        freeVisitForm = document.getElementById('free_visit_form');


  window.addEventListener('resize', () =>{
    if (window.innerWidth < 768) {
      menuBtn.style.display = 'block';
    } else {
      menuBtn.style.display = 'none';
    }
  });


  window.addEventListener('click', (event) =>{
    let target = event.target;

    if(target === burgerMenu){
      menu.style.display = 'flex';
    } else if (target === popupMenuCloseBtn){
      menu.style.display = 'none';
    } else if (target.matches('a')){
      if(target.closest('.popup-menu'))
      menu.style.display = 'none';
    } else if(target.matches('.close_icon') || target.matches('.overlay')){
      freeVisitForm.style.display = 'none';
    } else if (target.closest('.free-visit')){
      freeVisitForm.style.display = 'flex';
    }

  });
  
};

export default eventListeners;