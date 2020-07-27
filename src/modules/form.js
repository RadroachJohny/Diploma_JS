const footerForm = () =>{

  const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Отправка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся',
        statusMessage = document.createElement('div'),
        form = document.querySelectorAll('form'),
        thx = document.getElementById('thanks');
  
  let warnMessage;

  statusMessage.style.cssText = 'font-size: 1rem; color: #ffffff;';  

    form.forEach((elem) => {
    elem.addEventListener('submit', (event) => {
    event.preventDefault();
    thx.querySelector('h4').textContent = 'Спасибо!';

    const addWarning = () =>{
      warnMessage = document.createElement('DIV');
      warnMessage.classList.add('warnError');
      warnMessage.style.cssText = 'color: red; margin-top: 10px;';
      warnMessage.textContent = 'Вы должны согласиться на обработку данных перед её отправкой.';
      // elem.appendChild(warnMessage);
      elem.querySelector('.personal-data').insertAdjacentElement('beforeend', warnMessage);
    };

    const removeWarn = () =>{
      elem.querySelector('.personal-data').removeChild(warnMessage);
    };

    
    if(elem.querySelector('[type="checkbox"]')){

      if(!elem.querySelector('[type="checkbox"]').checked){
        
        if(elem.querySelector('.warnError')){
          return;
        }
        addWarning();
        setTimeout(removeWarn, 5000);
        return;

      }
    }
   

    statusMessage.style.cssText = 'font-size: 2rem; color: #ffffff;';
    elem.appendChild(statusMessage);

    if(elem.id === 'card_order'){
      statusMessage.style.color = '#000000';
    }

    statusMessage.textContent = loadMessage;

    let formData = new FormData(elem);  

    console.log(formData);

    formData.forEach((val, key) => {
      formData[key] = val;
    });


    function messageRemove() {
      statusMessage.textContent = '';
      statusMessage.remove();
    }

    function messageClear() {
      statusMessage.remove();
    }

    postData(formData)
    .then((response) => {
      console.log(response);
      if (response.status !== 200) {
        throw new Error('status network not 200.')
      }
      if(elem.id === 'banner-form' || elem.id === 'footer_form'){
        messageClear();
        thx.style.display = 'flex';
        thx.querySelector('p').textContent = successMessage;
      }else if(elem.id === 'card_order'){
        statusMessage.style.color = 'green';
        statusMessage.textContent = successMessage;
        setTimeout(messageRemove, 5000);
      }else{
        statusMessage.textContent = successMessage;
        setTimeout(messageRemove, 5000);
      }      



   
  })
   .catch((error) => {
    if(elem.id === 'banner-form' || elem.id === 'footer_form'){
      messageClear();
      thx.style.display = 'flex';
      thx.querySelector('h4').textContent = 'Ошибка отправки';
      thx.querySelector('p').textContent = errorMessage;
    }
    statusMessage.textContent = errorMessage;
    console.log(error);
  });

    if(document.getElementById('price-total')){
      document.getElementById('price-total').textContent = 1999;
      elem.reset();
    } else{
      elem.reset();
    }

  });

});

  const postData = (formData) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      // body: formData
      body: JSON.stringify(formData)
    });    
    
  };
  
};

export default footerForm;