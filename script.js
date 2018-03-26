document.addEventListener("DOMContentLoaded", function(){
  var hamburger = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.menu__list');

  hamburger.addEventListener('click', function(e) {
    this.classList.toggle('nav-toggle-opened');




    if(menu.className == "menu__list"){
        menu.classList.add('menu__list--opened');
      //  header.classList.add('sticky');
    }
    else{
        menu.classList.remove('menu__list--opened');
    }
  })
})
