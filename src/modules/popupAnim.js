const popupAnimation = (elem) =>{

  // let
  //  callbackForm = document.getElementById('callback_form'),
  //     modalPopup = callbackForm.querySelector('.form-wrapper'),
  //     freeVisitForm = document.getElementById('free_visit_form'),
  //     btnCallback = document.querySelector('.free-visit'),
  //     freeVisit = freeVisitForm.querySelector('.form-wrapper');
     let count = -29;

    function modalDown(elem) {
      count++;

      elem.style.top = count + 'vh';
      if (count < 20) {
        console.log(count);
        setTimeout(modalDown, 5, elem);
      }
    }
    modalDown(elem);

};

export default popupAnimation;