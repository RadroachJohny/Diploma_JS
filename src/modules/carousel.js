const carousel = () =>{
  const arrowPrev = document.createElement('div'),
        arrowPrevSpan = document.createElement('span'),
        arrowNext = document.createElement('div'),
        arrowNextSpan = document.createElement('span'),
        services = document.getElementById('services'),
        wrapper = services.querySelector('.wrapper');


        wrapper.style.position = 'relative';
        wrapper.append(arrowPrev);
        wrapper.append(arrowNext);

        arrowPrev.classList.add('slider-arrow', 'prev', 'carousel-prev' );
        arrowPrev.style.left = 14 + 'px';
        arrowPrevSpan.classList.add('carousel-prev');
        arrowPrev.append(arrowPrevSpan);
        arrowPrevSpan.textContent = '<';

        arrowNext.classList.add('slider-arrow', 'next', 'carousel-next');
        arrowNext.style.right = 7 + 'px';
        arrowNextSpan.classList.add('carousel-next');
        arrowNext.append(arrowNextSpan);
        arrowNextSpan.textContent = '>';

  class SliderCarousel {
    constructor({
      main,
      wrap,
      next,
      prev,
      infinity,
      position = 0,
      slidesToShow = 4,
      responsive = []
      }){
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slidesToShow = slidesToShow;
      this.options = {
        position,
        infinity,
        maxPosition: this.slides.length - this.slidesToShow,
        widthSlides: Math.floor(100 / this.slidesToShow)
      };
      this.position = position;
      this.responsive = responsive;


    }
    init(){
      this.addGloClass();
      this.addStyle();

      if(this.prev && this.next){
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      }

      if(this.responsive){
        this.responseInit();
      }

    }

    addGloClass(){
      this.main.classList.add('glo-slider')
      this.wrap.classList.add('glo-slider__wrap');
      // Добавляет, но не переписывает классы
      for(const item of this.slides){
        item.classList.add('glo-slider__item');
      }
    }

    addStyle(){
      let style = document.getElementById('sliderCarousel-style');
      if(!style){
        style = document.createElement('style');
        style.id = 'sliderCarousel-style';
      }
      
      style.textContent = `
        .glo-slider{
          overflow: hidden !important;
        }
        .glo-slider__wrap{
          display: flex !impoortant;
          margin-right: -8px;
          transition: transform 0.5s !important;
          will-change: transform !important;
        }
        .glo-slider__item {
          flex: 0 0 ${this.options.widthSlides}% !important;
          margin: 0 auto !important;
        }
      `

      document.head.appendChild(style);
    }

    controlSlider() {
      this.prev.addEventListener('click', this.prevSlider.bind(this));
      this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider(){
      this.options.maxPosition = this.slides.length - this.slidesToShow;
      if ( this.options.infinity || this.options.position > 0){
        --this.options.position;
        if (this.options.position < 0) {
          this.options.position = this.options.maxPosition;
        }
          this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;
        
      }
    }

    nextSlider(){
      this.options.maxPosition = this.slides.length - this.slidesToShow;
      // console.log(this.options.maxPosition);
      if( this.options.infinity || this.options.position < this.options.maxPosition){
      ++this.options.position;
      if( this.options.position > this.options.maxPosition){
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;
      }
    }


    responseInit(){
      const slidesToShowDefault = this.slidesToShow;
      const allResponse = this.responsive.map(item => item.breakpoint);
      const maxResponse = Math.max(...allResponse);
      // console.log(maxResponse);

      const checkResponse = () =>{
        const widthWindow = document.documentElement.clientWidth;
        // console.log(this.slidesToShow);
        // console.log(this.slides.length);

        if (widthWindow < maxResponse){
          for( let i = 0; i < allResponse.length; i++){
            if(widthWindow < allResponse[i]){
              this.slidesToShow = this.responsive[i].slidesToShow;
              this.options.widthSlides = Math.ceil(100 / this.slidesToShow);
              this.addStyle();
              // console.log(this.slidesToShow);
            }
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.widthSlides = Math.ceil(100 / this.slidesToShow);
          this.addStyle();
        }
      };

      checkResponse();

      window.addEventListener('resize', checkResponse);

    }

  }

  const carousel = new SliderCarousel({
    main: '.services-wrapper',
    wrap: '.services-slider',
    prev: '.carousel-prev',
    next: '.carousel-next',
    slidesToShow: 5,
    infinity: true,
    responsive: [{
      breakpoint: 1024,
      slidesToShow: 3
    },
    {
      breakpoint: 768,
      slidesToShow: 2
    },
    {
      breakpoint: 576,
      slidesToShow: 1
    }    
  ]
    
  });
  carousel.init();   

};

export default carousel;