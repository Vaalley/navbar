let menuButton = document.getElementsByClassName('menu')[0];
navShortcutsMobile = document.getElementsByClassName('nav-shortcuts-mobile')[0];

// when the menu button is clicked, toggle display the nav-shortcuts-mobile
menuButton.addEventListener('click', function () {
    navShortcutsMobile.classList.toggle('show');
}
);