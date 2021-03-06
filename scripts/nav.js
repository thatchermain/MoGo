function mobile() {
    const hamburger = document.querySelector('.nav__hamburger');
    const menu = document.querySelector('.nav__list');
    const menuItem = document.querySelectorAll('.nav__item');
    const menuLink = document.querySelectorAll('.nav__link');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('nav__mobile');
        if (menu.classList.contains('nav__mobile')) {
            menu.style.animation = 'showMenu .4s ease-in-out';
            menuItem.forEach((item, index) => {
                item.style.animation = `showLinks .4s ease-out both ${index/7 + .2}s`;
            })
        } else {
            menuItem.forEach(item => {
                item.style.animation = '';
            })
        }
    })
    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav__mobile');
            menuItem.forEach(item => {
                item.style.animation = '';
        })
    })
})
}
mobile();

export default mobile;