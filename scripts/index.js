import swiper from './swiper.js'
import counUp from './counter.js'
import mobile from './nav.js'
import showInfo from './we-do.js'
import showMap from './map.js'


//ScrollTrigger//
gsap.registerPlugin(ScrollTrigger);


gsap.from('.home', {
    duration: 3,
    opacity: 0,
    ease: 'power4'
});

//Homepage//
//nav//
gsap.from('.nav__logo', {
    delay: 1,
    duration: 1,
    translateX: -1000,
    ease: 'power4'
});
gsap.from('.nav__item', {
    delay: 1,
    duration: 1,
    translateX: 1000,
    ease: 'power4',
    stagger: .1
});

//center//
gsap.from('.center__text--small', {
    delay: .2,
    duration: 1,
    translateY: -1000,
    ease: 'power1'
});
gsap.from('.center__text--big-top', {
    delay: .4,
    duration: 1,
    translateX: -2000,
    skewY: 100,
    ease: 'power2.out'
});
gsap.from('.center__text--big-bottom', {
    delay: .6,
    duration: 1,
    translateX: 2000,
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


const sections = document.querySelectorAll('section');

sections.forEach(section => {
    gsap.from(section.children, {
            duration: 1,
            opacity:0,
            ease: 'power2',
            stagger: .7,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play',
                start: 'top 40%',
                // markers: true,
            },
        })
});