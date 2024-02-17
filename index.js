var menuButton= document.querySelector('.menuBtn');
var navBar= document.querySelector('.menu');
var closeBtn= document.querySelector('.close');
var logo = document.querySelector('.mobileLogo');

menuButton.addEventListener('click', function(){
    navBar.classList.add('active');
    menuButton.parentNode.replaceChild(closeBtn, menuButton);
    closeBtn.style.visibility = 'visible';
    // logo.style.visibility = 'hidden';
    logo.style.display = 'none';
})

closeBtn.addEventListener('click', function(){
    navBar.classList.remove('active');
    // logo.style.visibility = 'visible';
    logo.style.display = 'block';

    closeBtn.parentElement.replaceChild(menuButton, closeBtn);
})
  
  var splide = new Splide( '.splide', {
    perPage: 4,
    focus  : 0,
    omitEnd: true,
    // gap: '3em',
    breakpoints: {
        640: {
            perPage: 2,
            pagination: false,
            // gap: '.1em',

        },
  }
  } );
  
  
  splide.mount();