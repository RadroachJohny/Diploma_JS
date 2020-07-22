'use strict';

const clubChoice = () =>{
  const clubSelect = document.querySelector('.clubs-list > ul');

  document.addEventListener('click', (event) =>{
    let target = event.target;
    if(target.closest('.clubs-list')){
      if(clubSelect.style.display !== 'block'){
        clubSelect.style.display = 'block';
      } else {
        clubSelect.style.display = 'none';
      }
    } else {
      clubSelect.style.display = 'none';
    }
  });

};

export default clubChoice;
