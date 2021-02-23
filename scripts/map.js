function showMap () {

const banner = document.querySelector('.map__banner');
const map = document.querySelector('.map__content');

banner.addEventListener('click', () => {
    map.classList.toggle('active')
})
}

showMap();

export default showMap