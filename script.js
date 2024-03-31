gsap.from("#content  h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.5
})
gsap.from("#content  h1 span", {
    scale: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5
})
gsap.from("#social svg", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    delay:1,
    stagger: 0.5
})
gsap.from("#content p", {
    opacity: 0,
    duration:1,
    repeat: -1,
    yoyo: true
})
gsap.from("#left, #right, #left-bottom, #right-bottom", {
scale:0,
opacity:0,
duration:1,
delay:2
})

