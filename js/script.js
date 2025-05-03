let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

    // Hide the navbar if the cross (bx-x) is toggled off
    if (!menuIcon.classList.contains('bx-x')) {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
};