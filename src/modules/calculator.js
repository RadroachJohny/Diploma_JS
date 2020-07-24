const calc = () =>{

  if(document.getElementById('price-total')){

    const calcBlock = document.getElementById('card_order'),
    cardType = document.querySelectorAll('[name="card-type"]'),
    cardMozaika = document.getElementById('card_leto_mozaika'),
    cardSchelkovo = document.getElementById('card_leto_schelkovo'),
    promoCode = document.getElementById('promo'),
    mozaikaClub = {1: 1999, 6: 9990, 9: 13900, 12: 19990},
    shelkovoClub = {1: 2999, 6: 14990, 9: 21900, 12: 24990};
    
let  totalPrice = document.getElementById('price-total');

  totalPrice.textContent = mozaikaClub[1];


calcBlock.addEventListener('change', (event) => {
let target = event.target;
let checked;


const cardTypeElements = () =>{ 
  cardType.forEach((elem) =>{
    if(elem.checked){          
      checked = elem;
    }
  });
}
cardTypeElements();


const countSum = () =>{
  let cardValue = checked.value;
  
  if(cardMozaika.checked){
    if(promoCode.value === 'ТЕЛО2019'){
      totalPrice.textContent = mozaikaClub[cardValue] - Math.ceil((mozaikaClub[cardValue] / 100) * 30);
    } else {
      totalPrice.textContent = mozaikaClub[cardValue];
    }
  } else if ((cardSchelkovo.checked)) {
    if(promoCode.value === 'ТЕЛО2019'){
      totalPrice.textContent = shelkovoClub[cardValue] - Math.ceil((shelkovoClub[cardValue] / 100) * 30);
    } else {
      totalPrice.textContent = shelkovoClub[cardValue];
    }
    
  }

  // if(promoCode.value === 'ТЕЛО2019'){
  //   totalPrice.textContent = Math.floor((totalPrice.textContent / 100) * 30);
  // }

  
};

if(target.matches('input')) {
  countSum();
}
});
  }  
  

};

export default calc;

// if(cardMozaika.checked){
//   totalPrice.textContent = mozaikaClub[cardValue];
// } else if ((cardSchelkovo.checked)) {
//   totalPrice.textContent = shelkovoClub[cardValue];
// }

// if(promoCode.value === 'ТЕЛО2019'){
//   totalPrice.textContent = Math.floor((totalPrice.textContent / 100) * 30);
// }