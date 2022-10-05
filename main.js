const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav-link')

window.onscroll = function (event) {
    const scroll = window.pageYOffset;
    if(scroll>0){
        navbar.style.background = 'rgba(0, 0, 0, 0)';
        navLink.style.color="gray";
    }
  }