const mainSlider = () =>{
  const slide = document.querySelectorAll('.main-slider > .slide'),
        dotsContainer = document.querySelector('.portfolio-dots'),
        mainSlider = document.querySelector('.main-slider');

  let currentSlide = 0;
        // переменная принимает номер первого слайда


  const addBullets = () => {
    slide.forEach(() => {
      let newDot = document.createElement('li');
      newDot.classList.add('dot');
      dotsContainer.append(newDot);
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
    setInterval(autoPlaySlide, 2500);
  };

  startSlide();


};

export default mainSlider;

