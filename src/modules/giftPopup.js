'use strict';

const giftPopup = () =>{

  if(document.querySelector('.fixed-gift')){

  const giftPopup = document.getElementById('gift'),
         fixedGift = document.querySelector('.fixed-gift');

    fixedGift.addEventListener('click', ()=>{    
    giftPopup.style.display = 'flex';
    fixedGift.style.display = 'none';   
    });

    window.addEventListener('click', (e) =>{
     let target = e.target;
      if(target.matches('.close_icon') || target.matches('.overlay') || target.matches('.close-btn')){
        giftPopup.style.display = 'none';
      };
    });
  } else {
    return;
  }

};

export default giftPopup;