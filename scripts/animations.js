import countUp from "./counter.js"



const moveFromLeft = (trigger, stagger) => {
    gsap.from(trigger, {
        duration: 1,
        opacity: 0,
        x: -1000,
        stagger: stagger,
        onComplete: countUp,
        scrollTrigger: {
            trigger: trigger,
            start: 'top 70%',
        },
    })
}

const moveFromInside = (trigger, stagger) => {
    gsap.from(trigger, {
        duration: 1,
        scale: 0, 
        
        stagger: stagger,
        scrollTrigger: {
            trigger: trigger,
            start: 'top 70%',
        },
    })
}

const moveFromNowhere = (trigger, stagger) => {
    gsap.from(trigger, {
        duration: 1,
        opacity: 0,
        stagger: stagger,
        scrollTrigger: {
            trigger: trigger,
            start: 'top 70%',
        },
    })
}

const scale = (trigger, stagger) => {
    gsap.from(trigger, {
        duration: 1,
        scale: 0,
        opacity: 0,
        stagger: stagger,
        onComplete: countUp,
        scrollTrigger: {
            trigger: trigger,
            start: 'top bottom',
        },
    })
}

const scaleFooter = (trigger, stagger) => {
    gsap.from(trigger, {
        duration: 1,
        scale: 0,
        opacity: 0,
        stagger: stagger,
        scrollTrigger: {
            trigger: trigger,
            start: 'top 90%',
        },
    })
}



export {moveFromLeft, moveFromInside, moveFromNowhere, scale, scaleFooter}