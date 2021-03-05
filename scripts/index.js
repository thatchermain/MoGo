import swiper from './swiper.js'
import countUp from './counter.js'
import mobile from './nav.js'
import showInfo from './we-do.js'
import showMap from './map.js'
import {moveFromLeft, moveFromRight, moveFromNowhere, scale, scaleFooter} from './animations.js'


        //  DOM ELEMENTS    //
const nav = document.querySelector('.nav');       
const titleTops = document.querySelectorAll('.title__top');
const titleMids = document.querySelectorAll('.title__middle');
const titleLines = document.querySelectorAll('.title__line');
const paragraphs = document.querySelectorAll('.main__text');
const galleryBoxes = document.querySelectorAll('.gallery');
const results = document.querySelectorAll('.results');
const services = document.querySelectorAll('.content');
const tablet = document.querySelector('.devices__tablet');
const phone = document.querySelector('.devices__phone');
const weDoImg = document.querySelector('.we-do__image');
const weDoList = document.querySelectorAll('.main__list');
const clients = document.querySelectorAll('.client');
const blogs = document.querySelectorAll('.blog__article');
const map = document.querySelector('.map');
const footer = document.querySelectorAll('.footer__content');



window.onscroll = () => {
    if (document.documentElement.scrollTop >= 100) {
        nav.classList.add('nav__bg')
    } else {
        nav.classList.remove('nav__bg')

    }
}
//ScrollTrigger//
gsap.registerPlugin(ScrollTrigger);


//Homepage//
gsap.from('.home', {
    duration: 3,
    opacity: 0,
    ease: 'power4'
});

//nav//
gsap.from('.nav__logo', {
    delay: 1,
    duration: 1,
    x: -1000,
    ease: 'power4'
});
gsap.from('.nav__item', {
    delay: 1,
    duration: 1,
    x: 1000,
    ease: 'power4',
    stagger: .1
});

//center//
gsap.from('.center__text--small', {
    delay: .2,
    duration: 1,
    y: -1000,
    ease: 'power1'
});
gsap.from('.center__text--big-top', {
    delay: .4,
    duration: 1,
    x: -2000,
    skewY: 100,
    ease: 'power2.out'
});
gsap.from('.center__text--big-bottom', {
    delay: .6,
    duration: 1,
    x: 2000,
    skewY: 100,
    ease: 'power2.out'
});
gsap.from('.center__line', {
    delay: .8,
    duration: 1,
    scale: 0,
    ease: 'power3'
});
gsap.from('.center__button', {
    delay: 1,
    duration: 1,
    translateY: 500,
    ease: 'power4'
});

//progress//
gsap.from('.progress__wrapper', {
    delay: 1,
    duration: 1,
    scaleX: 0,
    ease: 'power4',
    stagger: .25
});






titleTops.forEach(titleTop => {
    moveFromLeft(titleTop);
})

titleMids.forEach(titleMid => {
    moveFromRight(titleMid);
})

titleLines.forEach(titleLine => {
    moveFromNowhere(titleLine);
})

paragraphs.forEach(paragraph => {
    scale(paragraph);
})

galleryBoxes.forEach(box => {
    moveFromNowhere(box.children, .3);
})

results.forEach(result => {
    scale(result, .3,);
    setTimeout(countUp,3000)
})

services.forEach(service => {
    scale(service.children, .4)
})

gsap.from(tablet, {
    duration: 1,
    x: -1000,
    scale: 0,
    scrollTrigger: {
        trigger: tablet,
        start: 'top 70%',
    }
});

gsap.from(phone, {
    duration: 1,
    x: 1000,
    scale: 0,
    scrollTrigger: {
        trigger: phone,
        start: 'top 70%',
    }
});

gsap.from(weDoImg, {
    duration: 1,
    scale: 0,
    scrollTrigger: {
        trigger: weDoImg,
        start: 'top 70%',
    }
});

weDoList.forEach(list => {
    console.log(weDoList)
    moveFromNowhere(list.children, .2)
})

clients.forEach(client => {
    scale(client.children, 1)
})

blogs.forEach(blog => {
    moveFromRight(blog.children, .4)
})

gsap.from(map, {
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: map,
        start: 'top 70%',
    }
});

footer.forEach(el => {
    scaleFooter(el.children, 1)
})