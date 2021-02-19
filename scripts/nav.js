function mobile() {


    const hamburger = document.querySelector('.nav__hamburger');
    const menu = document.querySelector('.nav__list');
    const menuLink = document.querySelectorAll('.nav__link');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('nav__mobile--on');
        menu.classList.toggle('nav__mobile--off');
    });
    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.toggle('nav__mobile--on')
            menu.classList.toggle('nav__mobile--off')
        })
    })

}

mobile();

export default mobile;