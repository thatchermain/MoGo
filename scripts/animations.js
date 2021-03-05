
const moveFromLeft = (trigger, stagger) => {
    gsap.from(trigger, {
        duration: 1,
        opacity: 0,
        x: -1000,
        stagger: stagger,
        scrollTrigger: {
            trigger: trigger,
            start: 'top 70%',
        },
    })
}

const moveFromRight = (trigger, stagger) => {
    gsap.from(trigger, {
        duration: 1,
        opacity: 0,
        x: 1000,
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
        scrollTrigger: {
            trigger: trigger,
            start: 'top 70%',
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



export {moveFromLeft, moveFromRight, moveFromNowhere, scale, scaleFooter}