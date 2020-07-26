const mainSlider = () =>{
  const slide = document.querySelectorAll('.main-slider > .slide'),
        mainSlider = document.querySelector('.main-slider'),
        dotsContainer = document.querySelector('.portfolio-dots');


  let currentSlide = 0,
      interval;
        // переменная принимает номер первого слайда


  const addBullets = () => {
    slide.forEach((elem) => {
      let newDot = document.createElement('li');
      newDot.classList.add('dot');
      dotsContainer.appendChild(newDot);

    });
  };
  addBullets();

  let newDotsParent = document.querySelectorAll('.dot');
  newDotsParent[0].classList.add('dot-active');
  let dot = document.querySelectorAll('.dot');


  const autoPlaySlide = () =>{
    slide[currentSlide].style.display = 'none';
    dot[currentSlide].classList.remove('dot-active');
    currentSlide++;
    
    if(currentSlide >= slide.length){
      currentSlide = 0;
    }
    slide[currentSlide].style.display = 'flex';
    dot[currentSlide].classList.add('dot-active');
  };

  const startSlide = () =>{
    interval = setInterval(autoPlaySlide, 2500);
  };

  startSlide();

  const stopSlide = () =>{
    clearInterval(interval);
  };

  mainSlider.addEventListener('mouseover', () =>{   
      stopSlide();
    
  });
  mainSlider.addEventListener('mouseout', () =>{
      startSlide();
    
  });




};

export default mainSlider;

