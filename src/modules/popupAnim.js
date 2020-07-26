const popupAnimation = (elem) =>{

  // let
  //  callbackForm = document.getElementById('callback_form'),
  //     modalPopup = callbackForm.querySelector('.form-wrapper'),
  //     freeVisitForm = document.getElementById('free_visit_form'),
  //     freeVisit = freeVisitForm.querySelector('.form-wrapper');

     let count = -19;


        // console.log(1);
        // console.log(elem );
    function modalDown(elem) {
      console.log('1enterred');
      count++;
      console.log('2enterred');
      console.log(elem);
      elem.style.top = count + 'vh';
      console.log('3enterred');
      if (count < 20) {
        setTimeout(modalDown(elem), 100);
      }
    }
    modalDown(elem);

};

export default popupAnimation;