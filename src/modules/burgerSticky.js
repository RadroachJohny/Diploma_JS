'use strict';

const burgerStick = () =>{
  
  let menuBtn = document.querySelector('.top-menu');
  
  window.addEventListener('scroll', () => {

    if(window.innerWidth < 768){

      if (window.scrollY >= 187) {
        menuBtn.classList.add('menu-fix');
      } 
      else if(window.scrollY < 187){
      menuBtn.classList.remove('menu-fix');
      }
    }
    
  
  });

};

export default burgerStick;
