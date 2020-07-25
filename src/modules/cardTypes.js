const cardTypes = () => {  
    let  mozaikaClub = {};

  if(document.querySelector('.cards-types')){
    const priceCardsContainer = document.querySelector('.cards-types'),
          cardsValue = priceCardsContainer.querySelectorAll('[type="radio"]'),
          cardsCost = priceCardsContainer.querySelectorAll('label');
          
    let  mozaikaValue = [],
          mozaikaCost = [];

    cardsValue.forEach((elem) =>{
      mozaikaValue.push(elem.value.slice(0, -1));
    });

    cardsCost.forEach((elem) =>{
      mozaikaCost.push(elem.querySelector('.cost').textContent.slice(0, -1));
    });    

    for(let i = 0; i < mozaikaValue.length; i++){
      mozaikaClub[mozaikaValue[i]] = mozaikaCost[i];
    }

    console.log(mozaikaClub);
  }
};

export default cardTypes;