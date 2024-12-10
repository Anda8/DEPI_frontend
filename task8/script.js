
const menuIcon = document.querySelector('.nav-icons .menu');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
    console.log('clicked');
});
