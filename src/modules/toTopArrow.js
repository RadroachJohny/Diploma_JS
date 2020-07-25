 const toTop = () =>{

    const toTop = document.getElementById('totop'),
          headerMain = document.querySelector('.header-main'),
          head = document.querySelector('.head').clientHeight;

    toTop.style.opacity = '0';

    window.addEventListener('scroll', () => {
      if (window.scrollY >= head) {
        toTop.style.cssText = 'transition: all 0.5s ease; opacity: 1';
      } else {
        toTop.style.cssText = 'transition: all 0.5s ease; opacity: 0';
      }
    });

 };

 export default toTop;