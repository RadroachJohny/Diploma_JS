 const toTop = () =>{

    const toTop = document.getElementById('totop'),
          head = document.querySelector('.head').clientHeight;


      if (window.scrollY >= head) {
        toTop.style.cssText = 'transition: all 0.5s ease; opacity: 1';
      } else {
        toTop.style.cssText = 'transition: all 0.5s ease; opacity: 0; transform: scale(0);';
      }

 };

 export default toTop;