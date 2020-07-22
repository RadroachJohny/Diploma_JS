const freeVisit = () => {

  const freeVisitBtn = document.querySelector('.free-visit'),
        freeVisitForm = document.getElementById('free_visit_form');
  
  freeVisitBtn.addEventListener('click', () =>{
    freeVisitForm.style.display = 'flex';
  });

};

export default freeVisit;