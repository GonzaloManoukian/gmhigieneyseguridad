$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.header').addClass('header--scroll');
    } else {
        $('.header').removeClass('header--scroll');
    }
})

//      Menu Hamburguesa Responsive

const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.burger-button');
burgerButton.addEventListener('click', () => {
    menu.classList.toggle('is-active');
})

menu.addEventListener('click', function() {
    menu.classList.remove('is-active');
});
