const photoGallery = () => {

  
  

  const arrowPrev = document.createElement('div'),
        arrowPrevSpan = document.createElement('span'),
        arrowNext = document.createElement('div'),
        arrowNextSpan = document.createElement('span'),
        gallerySlider = document.querySelector('.gallery-slider'),
        dotsContainer = document.querySelector('.photogallery-dots'),
        slide = gallerySlider.querySelectorAll('.slide');

  let currentSlide = 0,
      interval;


  gallerySlider.style.position = 'relative';
  gallerySlider.append(arrowPrev);
  gallerySlider.append(arrowNext);

  arrowPrev.classList.add('slider-arrow', 'prev');
  arrowPrevSpan.classList.add('left');
  arrowPrev.append(arrowPrevSpan);
  arrowPrevSpan.textContent = '<';

  arrowNext.classList.add('slider-arrow', 'next');
  arrowNextSpan.classList.add('right');
  arrowNext.append(arrowNextSpan);
  arrowNextSpan.textContent = '>';



  const addBullets = () => {
    slide.forEach(() => {
      let newDot = document.createElement('li');
      newDot.classList.add('dot');
      dotsContainer.append(newDot);
    });
  };
  addBullets();

  let newDotsParent = dotsContainer.querySelectorAll('.dot');
  newDotsParent[0].classList.add('dot-active');
  let dot = dotsContainer.querySelectorAll('.dot');


  const prevSlide = (elem, index, strClass) =>{
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) =>{
    elem[index].classList.add(strClass);
  };

  const autoplaySlide =  () =>{

    prevSlide(slide, currentSlide, 'gallery-slide_active');
    prevSlide(dot, currentSlide, 'dot-active');

    currentSlide++;
    if(currentSlide >= slide.length){
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'gallery-slide_active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoplaySlide, time);
  };

  const stopSlide = () =>{
    clearInterval(interval);
  };

  gallerySlider.addEventListener('click', (event) =>{
    let target = event.target;

    if(!target.matches('.left, .right, .dot')){
      return;
    }
    prevSlide(slide, currentSlide, 'gallery-slide_active');
    prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('.right')){
      currentSlide++;
    } else if (target.matches('.left')) {
      currentSlide--;
    } else if(target.matches('.dot')){
      dot.forEach((elem, index) =>{
        if(elem === target){
          currentSlide = index;
        }
      });
    }

    if(currentSlide >= slide.length){
      currentSlide = 0;
    }

    if(currentSlide < 0){
      currentSlide = slide.length -1;
    }

    nextSlide(slide, currentSlide, 'gallery-slide_active');
    nextSlide(dot, currentSlide, 'dot-active');

  });

  gallerySlider.addEventListener('mouseover', (event) =>{
    if (event.target.matches('.left') || event.target.matches('.right') || event.target.matches('.dot')){
      stopSlide();
    }
  });
  gallerySlider.addEventListener('mouseout', (event) =>{
    if (event.target.matches('.left') || event.target.matches('.right') || event.target.matches('.dot')){
      startSlide();
    }
  });

  startSlide(2000);

};

export default photoGallery;