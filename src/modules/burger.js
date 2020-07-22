const burgerMenu = () =>{
  const menuBtn = document.querySelector('.menu-button');

  window.addEventListener('resize', () =>{
    if (window.innerWidth < 768) {
      menuBtn.style.display = 'block';
    } else {
      menuBtn.style.display = 'none';
    }
  });

  
};

export default burgerMenu;