let menu = document.querySelector('.menu')
function toggleMenu(el){
  if(menu){
    menu.classList.toggle('active');
    el.classList.toggle('active');
  }
}



(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 40) {
            header.classList.add('header__moved')
        } else
        header.classList.remove('header__moved')
    }
  }());