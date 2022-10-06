const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navbarBrand = document.querySelector('.navbar-brand');

window.onscroll = function (event) {
    const scroll = window.pageYOffset;
    if(scroll !== 0){
        navbar.style.background = 'white';
        navbarBrand.style.color = 'gray';
        changeNavLinkColor('gray')
    }else{
        navbar.style.background = '';
        navbarBrand.style.color = '';
        changeNavLinkColor('');
    }
  }

  const changeNavLinkColor = (color) => {
    navLinks.forEach(link => {
        link.style.color = color;
    }) 
  } 